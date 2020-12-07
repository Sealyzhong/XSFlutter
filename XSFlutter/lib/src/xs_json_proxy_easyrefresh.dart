//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'xs_build_owner.dart';

import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';

class XSEasyRefreshParse {}

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperEasyRefreshSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyEasyRefreshClassicalHeader.registerProxy());
    m.addAll(XSProxyEasyRefreshClassicalFooter.registerProxy());

    m.addAll(XSProxyEasyRefreshMaterialHeader.registerProxy());
    m.addAll(XSProxyEasyRefreshMaterialFooter.registerProxy());

    m.addAll(XSProxyEasyRefresher.registerProxy());
    m.addAll(XSProxyEasyRefreshController.registerProxy());

    return m;
  }
}

//****** ClassicalHeader ******
class XSProxyEasyRefreshClassicalHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshClassicalHeader";
    return {
      regClassName: () => XSProxyEasyRefreshClassicalHeader()..init(className: regClassName)
    };
  }

  @override
  ClassicalHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClassicalHeader(
      extent: XSJSParse.getDouble(context, bo, map, "extent", defaultValue: 60.0),
      triggerDistance: XSJSParse.getDouble(context, bo, map, "triggerDistance", defaultValue: 70.0),
      float: XSJSParse.getBool(context, bo, map, "float", defaultValue: false),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(seconds: 1)),
      enableInfiniteRefresh: XSJSParse.getBool(context, bo, map, "enableInfiniteRefresh", defaultValue: false),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: true),
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      refreshText: XSJSParse.getString(context, bo, map, "refreshText"),
      refreshReadyText: XSJSParse.getString(context, bo, map, "refreshReadyText"),
      refreshingText: XSJSParse.getString(context, bo, map, "refreshingText"),
      refreshedText: XSJSParse.getString(context, bo, map, "refreshedText"),
      refreshFailedText: XSJSParse.getString(context, bo, map, "refreshFailedText"),
      noMoreText: XSJSParse.getString(context, bo, map, "noMoreText"),
      showInfo: XSJSParse.getBool(context, bo, map, "showInfo", defaultValue: true),
      infoText: XSJSParse.getString(context, bo, map, "infoText"),
      bgColor: XSJSParse.getColor(context, bo, map, "bgColor", defaultValue: Colors.transparent),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: Colors.black),
      infoColor: XSJSParse.getColor(context, bo, map, "infoColor", defaultValue: Colors.teal),
    );
  }
}

//****** ClassicalFooter ******
class XSProxyEasyRefreshClassicalFooter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshClassicalFooter";
    return {
      regClassName: () => XSProxyEasyRefreshClassicalFooter()..init(className: regClassName)
    };
  }

  @override
  ClassicalFooter constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClassicalFooter(
      extent: XSJSParse.getDouble(context, bo, map, "extent", defaultValue: 60.0),
      triggerDistance: XSJSParse.getDouble(context, bo, map, "triggerDistance", defaultValue: 70.0),
      float: XSJSParse.getBool(context, bo, map, "float", defaultValue: false),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(seconds: 1)),
      enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
      safeArea: XSJSParse.getBool(context, bo, map, "safeArea", defaultValue: true),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      loadText: XSJSParse.getString(context, bo, map, "loadText"),
      loadReadyText: XSJSParse.getString(context, bo, map, "loadReadyText"),
      loadingText: XSJSParse.getString(context, bo, map, "loadingText"),
      loadedText: XSJSParse.getString(context, bo, map, "loadedText"),
      loadFailedText: XSJSParse.getString(context, bo, map, "loadFailedText"),
      noMoreText: XSJSParse.getString(context, bo, map, "noMoreText"),
      showInfo: XSJSParse.getBool(context, bo, map, "showInfo", defaultValue: true),
      infoText: XSJSParse.getString(context, bo, map, "infoText"),
      bgColor: XSJSParse.getColor(context, bo, map, "bgColor", defaultValue: Colors.transparent),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: Colors.black),
      infoColor: XSJSParse.getColor(context, bo, map, "infoColor", defaultValue: Colors.teal),
    );
  }
}

//****** MaterialHeader ******
class XSProxyEasyRefreshMaterialHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshMaterialHeader";
    return {
      regClassName: () => XSProxyEasyRefreshMaterialHeader()..init(className: regClassName)
    };
  }

  @override
  MaterialHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      displacement: XSJSParse.getDouble(context, bo, map, "displacement", defaultValue: 40.0),
      //valueColor: XSJSParse.getObject(context, bo, map, "valueColor"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(seconds: 1)),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: false),
    );
  }
}

//****** MaterialFooter ******
class XSProxyEasyRefreshMaterialFooter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshMaterialFooter";
    return {
      regClassName: () => XSProxyEasyRefreshMaterialFooter()..init(className: regClassName)
    };
  }

  @override
  MaterialFooter constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialFooter(
      key: XSJSParse.getKey(context, bo, map, "key"),
      displacement: XSJSParse.getDouble(context, bo, map, "displacement", defaultValue: 40.0),
      //valueColor: XSJSParse.getObject(context, bo, map, "valueColor"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(seconds: 1)),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: false),
      enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
    );
  }
}

//****** EasyRefresher ******
class XSProxyEasyRefresher extends XSJsonObjProxy {
  static String regClassName = "EasyRefresher";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyEasyRefresher()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "custom", constructor: constructorCustom);
  }

  @override
  EasyRefresh constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var w = EasyRefresh(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      onRefresh: XSJSParse.getVoidCallback(context, bo, map, "onRefresh"),
      onLoad: XSJSParse.getVoidCallback(context, bo, map, "onLoad"),
      enableControlFinishRefresh: XSJSParse.getBool(context, bo, map, "enableControlFinishRefresh", defaultValue: false),
      enableControlFinishLoad: XSJSParse.getBool(context, bo, map, "enableControlFinishLoad", defaultValue: false),
      taskIndependence: XSJSParse.getBool(context, bo, map, "taskIndependence", defaultValue: false),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      header: XSJSParse.getObject(context, bo, map, "header"),
      footer: XSJSParse.getObject(context, bo, map, "footer"),
      firstRefresh: XSJSParse.getBool(context, bo, map, "firstRefresh"),
      firstRefreshWidget: XSJSParse.getWidget(context, bo, map, "firstRefreshWidget"),
      headerIndex: XSJSParse.getInt(context, bo, map, "headerIndex"),
      emptyWidget: XSJSParse.getWidget(context, bo, map, "emptyWidget"),
      topBouncing: XSJSParse.getBool(context, bo, map, "topBouncing", defaultValue: true),
      bottomBouncing: XSJSParse.getBool(context, bo, map, "bottomBouncing", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
    return w;
  }

  // EasyRefresh.custom
  EasyRefresh constructorCustom(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return EasyRefresh.custom(
      key: XSJSParse.getKey(context, bo, map, "key"),
      listKey: XSJSParse.getKey(context, bo, map, "listKey"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      onRefresh: XSJSParse.getVoidCallback(context, bo, map, "onRefresh"),
      onLoad: XSJSParse.getVoidCallback(context, bo, map, "onLoad"),
      enableControlFinishRefresh: XSJSParse.getBool(context, bo, map, "enableControlFinishRefresh", defaultValue: false),
      enableControlFinishLoad: XSJSParse.getBool(context, bo, map, "enableControlFinishLoad", defaultValue: false),
      taskIndependence: XSJSParse.getBool(context, bo, map, "taskIndependence", defaultValue: false),
      header: XSJSParse.getObject(context, bo, map, "header"),
      headerIndex: XSJSParse.getInt(context, bo, map, "headerIndex"),
      footer: XSJSParse.getObject(context, bo, map, "footer"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      center: XSJSParse.getKey(context, bo, map, "center"),
      anchor: XSJSParse.getDouble(context, bo, map, "anchor", defaultValue: 0.0),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      firstRefresh: XSJSParse.getBool(context, bo, map, "firstRefresh"),
      firstRefreshWidget: XSJSParse.getWidget(context, bo, map, "firstRefreshWidget"),
      emptyWidget: XSJSParse.getWidget(context, bo, map, "emptyWidget"),
      topBouncing: XSJSParse.getBool(context, bo, map, "topBouncing", defaultValue: true),
      bottomBouncing: XSJSParse.getBool(context, bo, map, "bottomBouncing", defaultValue: true),
      slivers: XSJSParse.getWidgetList(context, bo, map, "slivers"),
    );
  }
}

//****** EasyRefreshController ******
class XSProxyEasyRefreshController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshController";
    return {
      regClassName: () => XSProxyEasyRefreshController()..init(className: regClassName)
    };
  }

  @override
  EasyRefreshController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return EasyRefreshController();
  }

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is EasyRefreshController)) {
      return;
    }

    var sc = mirrorObj as EasyRefreshController;

    if (funcName == 'callRefresh') {
      sc.callRefresh(duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 300)));
      return;
    }

    if (funcName == 'callLoad') {
      sc.callLoad(duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 300)));
      return;
    }

    if (funcName == 'finishRefresh') {
      sc.finishRefresh(
        success: XSJSParse.getBool(null, null, args, "success"),
        noMore: XSJSParse.getBool(null, null, args, "noMore"),
      );
      return;
    }

    if (funcName == 'finishLoad') {
      sc.finishLoad(
        success: XSJSParse.getBool(null, null, args, "success"),
        noMore: XSJSParse.getBool(null, null, args, "noMore"),
      );
      return;
    }

    if (funcName == 'resetRefreshState') {
      sc.resetRefreshState();
      return;
    }

    if (funcName == 'resetLoadState') {
      sc.resetLoadState();
      return;
    }
    if (funcName == 'dispose') {
      sc.dispose();
      return;
    }
  }
}
