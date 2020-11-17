//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'xs_json_to_dart.dart';
import 'dart:convert';
import 'xs_js_log_util.dart';

import 'xs_js_framework.dart';
import 'xs_js_flutter_common.dart';
import 'xs_js_mirror_obj_mgr.dart';

typedef Future<dynamic> XSJsonWidgetCallbackFun(String callID, {dynamic p});

//buildOwner 除了根节点，于 XSJSWidgetState 一一对应，形成树状结构，持有XSJSWidgetState，
//并接收JS调用操作XSJSWidgetState
class XSJsonBuildOwner {
  XSFlutterApp ownerApp;
  XSJsonBuildOwner parentBuildOwner;
  Map<String, XSJsonBuildOwner> childrenBuildOwner = {};

  List mirrorObjKeyList = [];

  dynamic widget;
  var widgetName;

  XSJsonBuildOwner(dynamic jsWidget, XSJsonBuildOwner parentBuildOwner) {
    this.ownerApp = parentBuildOwner?.ownerApp;
    this.widget = jsWidget;
    this.parentBuildOwner = parentBuildOwner;

    String ownerWidgetID = this.widget.widgetID;
    assert(ownerWidgetID != null && ownerWidgetID.isNotEmpty);

    parentBuildOwner?.addChildBuildOwner(ownerWidgetID, this);
  }

  XSJsonBuildOwner.rootBuildOwner(this.ownerApp);

  void addChildBuildOwner(String widgetID, XSJsonBuildOwner bo) {
    if (widgetID == null || widgetID.isEmpty || bo == null) {
      return;
    }

    childrenBuildOwner[widgetID] = bo;
  }

  removeChildBuildOwner(String widgetID) {
    childrenBuildOwner.remove(widgetID);
  }

  dynamic findWidget(Key key) {
    if (key == null) {
      return null;
    }

    for (XSJsonBuildOwner bo in childrenBuildOwner.values) {
      if (bo.widget.key == key) {
        return bo.widget;
      }
    }

    return null;
  }

  dynamic buildRootWidget(Map widgetData) {
    dynamic w = XSJsonObjToDartObject.jsonToDartObj(widgetData, buildOwner: this);
    return w;
  }

  Widget build(Map widgetData, BuildContext context) {
    var w = XSJsonObjToDartObject.jsonToDartObj(widgetData, buildOwner: this, context: context);

    if (w == null) {
      w = Center(
        child: Text("XSJsonBuildOwner error return null"),
      );
    }

    return w;
  }

  //事件回调
  //flutter->JS
  dynamic eventCallback(String callID, {dynamic p}) async {
    var ownerWidgetID = this.widget?.widgetID;
    String buildSeq = this.widget?.buildWidgetDataSeq;

    return await callJSWidgetOnEventCallback(widgetID: ownerWidgetID, buildSeq: buildSeq, callID: callID, args: p);
  }

  dynamic callJSWidgetOnEventCallback({String widgetID, String buildSeq, String callID, dynamic args}) async {
    MethodCall jsMethodCall = MethodCall("flutterCallOnEventCallback", {
      "widgetID": widgetID,
      "buildSeq": buildSeq,
      "callID": callID,
      "args": args
    });

    return await ownerApp.callJS(jsMethodCall);
  }

  callJSOnBuildEnd() {
    XSJSLog.debug("XSJSWidgetState:callJSOnBuildEnd:  this.widget.widgetID:${this.widget.widgetID} buildSeq:${this.widget.buildWidgetDataSeq}");

    var ownerWidgetID = this.widget.widgetID;
    String buildSeq = this.widget.buildWidgetDataSeq;

    dynamic parentWidget = this.parentBuildOwner.widget;
    var parentWidgetID = "";
    if (parentWidget != null) {
      parentWidgetID = parentWidget.widgetID;
    }

    MethodCall jsMethodCall;
    if (this.widget.enableProfile == true) {
      this.widget.profileInfo["buildEnd"] = (new DateTime.now()).millisecondsSinceEpoch;
      jsMethodCall = MethodCall("flutterCallOnBuildEnd", {
        "widgetID": ownerWidgetID,
        "buildSeq": buildSeq,
        "rootWidgetID": parentWidgetID,
        "profileInfo": this.widget.profileInfo,
      });
    } else {
      jsMethodCall = MethodCall("flutterCallOnBuildEnd", {
        "widgetID": ownerWidgetID,
        "buildSeq": buildSeq,
        "rootWidgetID": parentWidgetID,
      });
    }

    ownerApp.callJSNeedFrequencyLimit(jsMethodCall);
  }

  callJSOnDispose() {
    var ownerWidgetID = this.widget.widgetID;
    MethodCall jsMethodCall = MethodCall("flutterCallOnDispose", {
      "widgetID": ownerWidgetID,
      "mirrorObjIDList": mirrorObjKeyList,
    });

    ownerApp.callJSNeedFrequencyLimit(jsMethodCall);
  }

  ///动态创建Widget回调，如List
  ///
  Future<dynamic> widgetBuilderCallback(String callID, {dynamic p}) {
    return null;
  }

  //js->flutter

  void jsCallRebuild(args) {
    String widgetDataStr = args["widgetData"];
    var startDecodeData = (new DateTime.now()).millisecondsSinceEpoch;

    Map widgetMap = json.decode(widgetDataStr);
    String widgetID = widgetMap["widgetID"];
    String name = widgetMap["name"];
    String className = widgetMap["className"];
    Map widgetData = widgetMap["widgetData"];
    String buildWidgetDataSeq = widgetMap["buildWidgetDataSeq"];

    if (className != "XSJSStatefulWidget" && className != "XSJSStatelessWidget") {
      XSJSLog.error("jsCallRebuild(jsWidget == null || (jsWidget is! XSJSStatefulWidget && jsWidget is! XSJSStatelessWidget)): name:$name widgetData:$widgetData");
      return;
    }

    //------
    XSJsonBuildOwner bo = findBuildOwner(widgetID);

    if (bo == null) {
      //TODO:errormx
      XSJSLog.error("findBuildOwner(jsWidget.widgetID)== null: name:$name id:$widgetID");
      return;
    }

    //----性能分析代码
    bool enableProfile = widgetMap["enableProfile"];

    if (enableProfile == true) {
      bo.widget.enableProfile = enableProfile;

      Map profileInfo = Map();
      profileInfo["startDecodeData"] = startDecodeData;

      var endDecodeData = (new DateTime.now()).millisecondsSinceEpoch;
      profileInfo["endDecodeData"] = endDecodeData;
      bo.widget.profileInfo = profileInfo;
    }
    //----性能分析代码 end

    bo.clearAllChildBuildOwner();
    bo.rebuildJSWidget(name, widgetID, widgetData, buildWidgetDataSeq);
  }

  void rebuildJSWidget(String name, String widgetID, Map widgetData, String buildWidgetDataSeq) {
    var ownerWidgetID = this.widget.widgetID;

    if (ownerWidgetID != null && ownerWidgetID != widgetID) {
      XSJSLog.log("XSJSStatefulWidget:rebuildJSWidget: error: this.widget.widgetID != jsWidget.widgetID");
    }

    XSJSWidgetHelper helper = this.widget.helper;
    helper.jsRebuild(widgetID, widgetData, buildWidgetDataSeq);
  }

  //js->flutter
  jsCallNavigatorPush(args) {
    String widgetDataStr = args["widgetData"];

    var startDecodeData = (new DateTime.now()).millisecondsSinceEpoch;
    Map widgetMap = json.decode(widgetDataStr);
    var endDecodeData = (new DateTime.now()).millisecondsSinceEpoch;

    dynamic jsWidget = buildRootWidget(widgetMap);

    //----性能分析代码
    bool enableProfile = widgetMap["enableProfile"];

    if (enableProfile == true) {
      jsWidget.enableProfile = enableProfile;

      Map profileInfo = Map();
      profileInfo["startDecodeData"] = startDecodeData;
      profileInfo["endDecodeData"] = endDecodeData;
      jsWidget.profileInfo = profileInfo;
    }
    //----性能分析代码 end

    if (jsWidget == null || (jsWidget is! XSJSStatefulWidget && jsWidget is! XSJSStatelessWidget)) {
      XSJSLog.error("jsCallNavigatorPush(jsWidget == null || (jsWidget is! XSJSStatefulWidget && jsWidget is! XSJSStatelessWidget)): name:${jsWidget.name} widgetData:${jsWidget.widgetData}");
      return;
    }

    //谁push jsWidget，找到对应的build owner
    String navPushingWidgetID = jsWidget.navPushingWidgetID;
    XSJsonBuildOwner bo = findBuildOwner(navPushingWidgetID);

    if (bo == null) {
      XSJSLog.error("jsCallNavigatorPush(bo == null: name:${jsWidget.name} navPushingWidgetID:$navPushingWidgetID");
      return;
    }

    bo.widget.helper.jsNavigatorPush(jsWidget, bo.widget.context);
  }

  jsCallNavigatorPop(args) {
    String widgetID = args["widgetID"];
    var bo = findBuildOwner(widgetID);

    if (bo == null) {
      XSJSLog.error("jsCallNavigatorPop(bo == null: widgetID:$widgetID");
      return;
    }

    bo.widget.helper.jsNavigatorPop(bo.widget.context);
  }

  XSJsonBuildOwner findBuildOwner(widgetID) {
    XSJsonBuildOwner bo = childrenBuildOwner[widgetID];

    if (bo != null) {
      return bo;
    }

    for (var k in childrenBuildOwner.keys) {
      var v = childrenBuildOwner[k];
      XSJsonBuildOwner bo = v.findBuildOwner(widgetID);
      if (bo != null) {
        return bo;
      }
    }

    return null;
  }

  void jsCallInvokeCommon(widgetDataStr) {
    Map argMap = json.decode(widgetDataStr);

    String widgetID = argMap["widgetID"];
    String className = argMap["className"];
    String funcName = argMap["funcName"];
    Map args = argMap["args"];
    invokeFunctionCommon(widgetID, className, funcName, args);
  }

  void invokeFunctionCommon(String widgetID, String className, String funcName, Map args) {
    var bo = findBuildOwner(widgetID);
    if (bo == null) {
      XSJSLog.error("jsCallNavigatorPop(bo == null: widgetID:$widgetID");
      return;
    }

    final context = bo.widget.buildContext;
    if (className == 'Scaffold') {
      if (funcName == 'of') {
        //查找scaffoldState
        final scaffoldState = Scaffold.of(context); //
        //动态构建snackbar
        var snackBar = XSJsonObjToDartObject.jsonToDartObj(args["snackBar"], buildOwner: this, context: context);
        //设置snackbar
        scaffoldState.showSnackBar(snackBar);
      }
    }
  }

  void jsCallInvoke(widgetDataStr) {
    Map argMap = json.decode(widgetDataStr);
    String mirrorID = argMap["mirrorID"];
    dynamic mirrorObj = getMirrorObjectFromID(mirrorID);

    if (mirrorObj != null) {
      String className = argMap["className"];
      String funcName = argMap["funcName"];
      Map args = argMap["args"];

      XSJsonObjProxy proxy = XSJsonObjToDartObject.getInstance().getJSObjProxy(className);
      proxy?.jsInvokeMirrorObjFunction(mirrorID, mirrorObj, funcName, args);
    }
  }

  //MirrorObj事件回调
  //flutter->JS
  Future<dynamic> mirrorObjEventCallback(dynamic mirrorID, String functionName, {dynamic p}) async {
    callJSWidgetOnmirrorObjEventCallback(mirrorID: mirrorID, functionName: functionName, args: p);
  }

  callJSWidgetOnmirrorObjEventCallback({dynamic mirrorID, String functionName, dynamic args}) async {
    MethodCall jsMethodCall = MethodCall("flutterCallOnMirrorObjInvoke", {
      "mirrorID": mirrorID,
      "functionName": functionName,
      "args": args
    });

    ownerApp.callJS(jsMethodCall);
  }

  String getJsonObjMirrorID(Map jsonMap) {
    dynamic mirrorID = jsonMap["mirrorID"];
    return mirrorID;
  }

  dynamic getMirrorObjectFromID(dynamic mirrorID) {
    if (mirrorID == null) {
      return null;
    }
    return XSJSMirrorObjMgr.getInstance().getMirrorObjectFromID(mirrorID);
  }

  void setMirrorObject(dynamic mirrorObj, Map jsonMap) {
    String mirrorID = getJsonObjMirrorID(jsonMap);
    if (mirrorID != null) {
      if (!mirrorObjKeyList.contains(mirrorID)) {
        mirrorObjKeyList.add(mirrorID);
      }

      XSJSMirrorObjMgr.getInstance().addMirrorObject(mirrorID, mirrorObj);
    }
  }

  void removeMirrorObject(dynamic mirrorID) {
    XSJSMirrorObjMgr.getInstance().removeMirrorObject(mirrorID);
  }

  void disposeMirrorObjs() {
    mirrorObjKeyList.forEach((dynamic mirrorID) {
      dynamic mirrorObj = getMirrorObjectFromID(mirrorID);
      String className = mirrorObj.runtimeType.toString();

      XSJsonObjProxy proxy = XSJsonObjToDartObject.getInstance().getJSObjProxy(className);
      proxy?.jsInvokeMirrorObjFunction(mirrorID, mirrorObj, "dispose", null);

      removeMirrorObject(mirrorID);
    });
  }

  void clearAllChildBuildOwner() {
    this.childrenBuildOwner.clear();
  }

  void onDispose() {
    //框架最困难的点在于确定何时释放不需要的对象

    // 移除parentBuildOwner中当前的widget
    parentBuildOwner.removeChildBuildOwner(this.widget.widgetID);

    //告诉JS，可以销毁这个JSWidget了
    callJSOnDispose();

    // 移除镜像对象
    disposeMirrorObjs();
  }
}

class XSProxyXSJSStatefulWidget extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    ///**@@@  2 替换类名字符串
    final String regClassName1 = "XSJSStatefulWidget";

    ///**@@@  3 替换类构造函数
    return {
      regClassName1: () => XSProxyXSJSStatefulWidget()..init(className: regClassName1)
    };
  }

  @override
  XSJSStatefulWidget constructor(XSJsonBuildOwner bo, Map<String, dynamic> jsonMap, {BuildContext context}) {
    var widget = XSJSStatefulWidget(key: mxj2d(bo, jsonMap["key"]), name: mxj2d(bo, jsonMap["name"]), widgetID: mxj2d(bo, jsonMap["widgetID"]), widgetData: jsonMap["widgetData"], buildingWidgetDataSeq: mxj2d(bo, jsonMap["buildWidgetDataSeq"]), navPushingWidgetID: jsonMap["navPushingWidgetID"], parentBuildOwner: bo);
    return widget;
  }
}

class XSProxyXSJSStatelessWidget extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    ///**@@@  2 替换类名字符串
    final String regClassName1 = "XSJSStatelessWidget";

    ///**@@@  3 替换类构造函数
    return {
      regClassName1: () => XSProxyXSJSStatelessWidget()..init(className: regClassName1)
    };
  }

  @override
  XSJSStatelessWidget constructor(XSJsonBuildOwner bo, Map<String, dynamic> jsonMap, {BuildContext context}) {
    var widget = XSJSStatelessWidget(key: mxj2d(bo, jsonMap["key"]), name: mxj2d(bo, jsonMap["name"]), widgetID: mxj2d(bo, jsonMap["widgetID"]), widgetData: jsonMap["widgetData"], buildingWidgetDataSeq: mxj2d(bo, jsonMap["buildWidgetDataSeq"]), navPushingWidgetID: jsonMap["navPushingWidgetID"], parentBuildOwner: bo);
    return widget;
  }
}
