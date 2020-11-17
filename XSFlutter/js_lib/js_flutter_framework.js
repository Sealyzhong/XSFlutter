//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
  DartClass,
  FlutterWidget,
  Size,
  Color,
  EdgeInsets,
  FlutterWidgetMirrorMgr,
  IconThemeData,
  Key,
  Brightness,
  Colors,
  ColorScheme,
  ButtonThemeData,
} = require("./js_flutter_basic_types.js");

let {
  JSMethodCall,JSLog,JSFramework,JSCallbackMgr,JSBuildContext,JSWidgetTree,JSWidgetMgr,
} = require("./js_framework.js");

const dart_sdk = require("dart_sdk");
const core = dart_sdk.core;
const dart = dart_sdk.dart;


class XSFJSBridge {

  ///js->native->flutter 顶层通用调用通道
  static invokeFlutterCommonChannel(basicMethodCall, callback) {
    mxfJSBridgeInvokeFlutterCommonChannel(basicMethodCall.encodeJSON(), function (resultStr) {

      if (callback) {
        callback(resultStr);
      }

      JSLog.debug("invokeFlutterCommonChannel: callback: " + resultStr);
    });
  }

  ///mirrorObj sys
  ///调用Logic mirrorObj的函数
  ///*重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
  static createMirrorObj(flutterCallArgs, mirrorID, needMonitordGCValue) {

    let basicMethodCall = JSMethodCall.new("JSBridgeCreateMirrorObj", flutterCallArgs);
    XSFJSBridge.invokeFlutterCommonChannel(basicMethodCall);

    //监控jsvalue 释放，同步释放flutter侧对象

    if (typeof(mxfAddJSValueToMirrorObjGCMap) !== "undefined") {
      mxfAddJSValueToMirrorObjGCMap(mirrorID, needMonitordGCValue);
    }
  }

  static onFlutterInvokeJSCommonChannel(messageStr) {

    JSLog.debug("XSFJSBridge.onFlutterInvokeJSCommonChannel: " + messageStr);

    let args = JSON.parse(messageStr);

    let method = args["method"];
    let callArgs = args["arguments"];

    let fun = this[method];

    if (fun != null) {
      return fun.call(this, callArgs);
    } else {
      JSLog.log("XSFJSBridge.onFlutterInvokeJSCommonChannel: error:fun == null" + args);
      return null;
    }

  }

  //flutter->js invokeJSMirrorObj
  static invokeJSMirrorObj(args) {

    let mirrorID = args["mirrorID"];
    let funcName = args["funcName"];
    let callbackID = args["callbackID"];
    let funArgs = args["args"];

    //TODO: call mirroObj Fun
    JSCallbackMgr.getInstance().invokeCallback(callbackID, funArgs)
  }

  static invokeMirrorObjWithCallback(flutterCallArgs, callback) {

    let basicMethodCall = JSMethodCall.new("JSBridgeInvokeMirrorObjWithCallback", flutterCallArgs);
    XSFJSBridge.invokeFlutterCommonChannel(basicMethodCall, callback);
  }

}

///JSAPI
///mirrorObj sys
///flutter ->native ->js
globalThis.mxfJSBridgeInvokeJSCommonChannel = function (messageStr) {
  XSFJSBridge.onFlutterInvokeJSCommonChannel(messageStr);
}


//JSFlutterApp 基类，用于和Native交互
//开发者需要继承XSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
class XSFlutterApp {
  constructor(name, initialRoute) {
    this.name = name;
    this.initialRoute = initialRoute;

    //App的rootWidget是个虚拟Widget，负责管理push的Widget或runAPP 的Widget
    this.rootWidget = new XSJSStatelessWidget("RootWidget");
    this.rootWidget.helper.setupAsRootWidget();

  }

  run() {
    runWithName(this.initialRoute);
  }


  runWithName(name) {
    let w = this.createJSWidgetWithName(name);
    this.runApp(w);
  }

  ///子类需要重载
  ///当Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);
  ///push页面时，在这里根据widgetName 创建你自己的Widget
  createJSWidgetWithName(widgetName) {

  }

  //Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);push页面时,会调用到此函数
  navigatorPushWithName(widgetName, widgetID, args) {

    let w = this.createJSWidgetWithName(widgetName);
    this.setupWidget(w, widgetName, widgetID, args);

    this.navigatorPush(w, args);
  }

  setupWidget(widget, widgetName, widgetID, args) {
    //设置widgetID
    widget.widgetID = widgetID;
  }

  //这个接口暂时不完备，暂不要使用，要在JS侧创建setInheritedInfo，参照navigatorPush
  ///JS侧入口API
  //创建XSJSWidget，调用build 创建jsonWidgetTree，调用Flutter runApp 重新加载Flutter根页面
  runApp(widget) {

    //这个接口暂时不完备，要在JS侧创建setInheritedInfo，参照navigatorPush

    let bc = JSBuildContext.new(widget);
    widget.buildContext = bc;

    this.rootWidget.helper.addChildWidget(widget);

    let app = this;
    this.buildRootWidget(widget);
  }

  ///JS侧入口API
  //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
  navigatorPush(widget, args) {

    let bc = JSBuildContext.new(widget);
    bc.setInheritedInfo(args);
    widget.buildContext = bc;

    this.rootWidget.helper.addChildWidget(widget);

    widget.helper.callFlutterRebuild();
  }

  buildRootWidget(widget) {
    JSLog.log("buildRootWidget ::" + widget.widgetLogInfoStr());
    let widgetData = XSJSWidgetHelper.buildWidgetData(widget);

    JSFramework.callFlutterReloadApp(app, widgetData);
  }


  //flutter->js channel
  nativeCall(args) {
    JSLog.log("XSFlutterApp:nativeCall" + args);

    let method = args["method"];
    let callArgs = args["arguments"];

    let fun = this[method];

    if (fun != null) {
      return fun.call(this, callArgs);
    } else {
      JSLog.log("XSFlutterApp:nativeCall error:fun == null" + args);
      return null;
    }
  }

  flutterCallFrequencyLimitCallList(args) {
    if (args) {
      args.map(function (callArgs) {
        this.nativeCall(callArgs);
      }.bind(this));
    }
  }

  flutterCallOnEventCallback(args) {
    return this.rootWidget.helper.onEventCallback(args);
  }

  flutterCallNavigatorPushWithName(args) {
    let widgetName = args["widgetName"];
    let widgetID = args["widgetID"];

    this.navigatorPushWithName(widgetName, widgetID, args);
  }

  flutterCallOnBuildEnd(args) {
    this.rootWidget.helper.onBuildEnd(args);
  }

  flutterCallOnDispose(args) {
    let widgetID = args["widgetID"];

    if (this.rootWidget && this.rootWidget.widgetID == widgetID) {
    }

    this.rootWidget.helper.onDispose(args);

    let mirrorObjIDList = args["mirrorObjIDList"];
    FlutterWidgetMirrorMgr.getInstance().removeMirrorObjects(mirrorObjIDList);
  }

  flutterCallOnMirrorObjInvoke(args) {
    var mirrorObjID = args["mirrorID"];
    var functionName = args["functionName"];
    var args = args["args"];
    var mirrorObj = FlutterWidgetMirrorMgr.getInstance().getMirrorObj(
      mirrorObjID
    );
    if (mirrorObj != null) {
      mirrorObj[functionName](args);
    }
  }
}


function initXSJSWidgetData(obj) {
  //继承自XSJSBaseWidget 自定义控件。

  if (obj.widgetID == null || obj.widgetID == undefined || obj.widgetID == '') {
    obj.widgetID = JSWidgetMgr.getInstance().generateWidgetID();
  }

  obj.helper = new XSJSWidgetHelper(obj);

  //构建系列号，每build一次加1
  obj.buildWidgetDataSeq = "";

  // The Widget Pages that pushed this Widget ID
  // 把当前widget（this） push 出来的widget ID
  // 序列化到JSON里
  obj.navPushingWidgetID = "";

  //不添加进json的控制变量
  //创建自己的widget，为null自己是root
  obj.parentWidget = null;

  // The Widget Pages that pushed this Widget
  // 把当前widget（this） push 出来的widget
  obj.navPushingWidget = null;

  //The widget that was pushed by this widget
  //由自己this push的widget page
  obj.navPushedWidgets = {};
  //
  obj.buildContext = null;
  obj.buildingWidgetTree = null;
  obj.currentWidgetTree = null;
  obj.preWidgetTree = null;
  obj.buildWidgetDataSeqFeed = 0;
  obj.buildSeq2WTreeMap = {};

  ///性能分析模式 
  ///打开性能分析模式，widget.enableProfile = true
  ///可以重载onBuildEnd，使用getProfileText获得各个阶段耗时
  obj.enableProfile = false;
  obj.profileInfo = {};
}

class XSJSWidgetHelper {
  constructor(widget) {
    this.widget = widget;
  }

  setState(fun) {
    this.widget.state.setState(fun);
  }

  //util api
  //building

  static buildWidgetData(jsWidget) {

    JSLog.log("buildWidgetData ::" + jsWidget.widgetLogInfoStr());

    let widgetDataStr = JSON.stringify(jsWidget, function (key, value) {

      let newValue = value;

      if (value instanceof XSJSStatefulWidget || value instanceof XSJSStatelessWidget) {
        // 解决widget生成时不调用构造方法的问题
        if (value.helper == null) {
          value.className = value instanceof XSJSStatefulWidget ? "XSJSStatefulWidget" : "XSJSStatelessWidget";
          initXSJSWidgetData(value);
        }

        if (value != jsWidget) {
          value.buildContext = JSBuildContext.inheritBuildContext(value, jsWidget.buildContext);
          //TODO:FIXME addChildWidget逻辑，这里局部刷新，会有两份Widget数据，但功能正常
          //Widget 的子Widget 没有层级关系，平铺在jsWidget
          jsWidget.helper.addChildWidget(value);
        }

        //如果是XSJSWidget类需要调用一下build，返回build内容
        newValue = value.helper.buildWidgetTree();
      }


      // 遍历处理Symbol的key转成String放入Json中
      if (newValue && typeof newValue === 'object') {
        var objectSymbols = Object.getOwnPropertySymbols(newValue);
        if (objectSymbols.length > 0) {
          var replacement = {};

          var len = objectSymbols.length;
          for (var i = 0; i < len; ++i) {
            var key = objectSymbols[i].description;
            var value = newValue[objectSymbols[i]];
            replacement[key] = value;
          }

          return replacement;
        }
      }

      return newValue;
    });

    return widgetDataStr;
  }

  buildWidgetTree() {
    this.widget.buildWidgetDataSeq = String(
      ++this.widget.buildWidgetDataSeqFeed
    );

    let tempWidgetTree = JSWidgetTree.new(
      this.widget.buildWidgetDataSeq
    );
    tempWidgetTree.ownerWidget = this.widget;

    this.widget.buildingWidgetTree = tempWidgetTree;
    JSLog.log("JSWidget buildWidgetTree ::" + this.widget.widgetLogInfoStr());

    let tempWidgetTreeObjMap;
    if (this.widget instanceof XSJSStatelessWidget) {
      tempWidgetTreeObjMap = this.widget.build(this.widget.buildContext);
    } else if (this.widget instanceof XSJSStatefulWidget) {
      //必须在Build的时候才创建State
      if (!this.widget.state) {
        this.widget.state = this.widget.createState();
        this.widget.state.widget = this.widget;
        this.widget.state.initState();
      }
      tempWidgetTreeObjMap = this.widget.state.build(this.widget.buildContext);
    }

    //如果Build的root wiget 是XSJSStatelessWidget，则直接展开，优化性能
    if (tempWidgetTreeObjMap instanceof XSJSStatelessWidget) {
      tempWidgetTreeObjMap = tempWidgetTreeObjMap.build(this.widget.buildContext);
    }

    //tempWidgetTree.widgetTreeObjMap = tempWidgetTreeObjMap; //不做diff不用保存，优化内存

    this.preBuildJson(tempWidgetTree, tempWidgetTreeObjMap);

    //加入缓存map
    this.widget.buildSeq2WTreeMap[tempWidgetTree.buildWidgetDataSeq] = tempWidgetTree;

    //json实际包含的字段
    let jsonMap = {
      key: this.widget.key,
      name: this.widget.name,
      className: this.widget.className,
      widgetID: this.widget.widgetID,
      buildWidgetDataSeq: this.widget.buildWidgetDataSeq,
      navPushingWidgetID: this.widget.navPushingWidgetID,
      widgetData: tempWidgetTreeObjMap,
      enableProfile: this.widget.enableProfile
    };

    return jsonMap;
  }

  preBuildJson(widgetTree, widgetTreeObjMap) {

    //JSLog.log("preBuildJson:" + flutterWidget);
    if (!(widgetTreeObjMap instanceof Object)) {
      return;
    }

    //XSJSStatefulWidget不处理
    if (widgetTreeObjMap instanceof XSJSStatefulWidget) {
      return;
    }

    if (widgetTreeObjMap instanceof FlutterWidget) {
      //ListView等类似需要提前处理build的FlutterWidget 有preBuild 函数
      widgetTreeObjMap.preBuild(this, this.widget.buildContext);
    }

    for (let p in widgetTreeObjMap) {

      let value = widgetTreeObjMap[p];
      //如果Build的 wiget tree 里有节点是XSJSStatelessWidget，则直接展开，优化性能
      if (value instanceof XSJSStatelessWidget) {
        value = value.build(this.widget.buildContext);
        widgetTreeObjMap[p] = value;
      }

      this.preBuildJson(widgetTree, value);
    }
  }

  //buildingCreateCallbackID 只允许building过程中调用，不是对外API
  buildingCreateCallbackID(callback) {
    //* XSFlutter beta 0.1.0开始，框架不在帮助上层代码绑定this，开发者需要自己绑定需要的对象 
    //callback = callback.bind(this.widget);
    return this.widget.buildingWidgetTree.createCallbackID(
      callback
    );
  }

  setupAsRootWidget() {

    this.widget.buildingWidgetTree = JSWidgetTree.new("1");
    this.widget.currentWidgetTree = this.widget.buildingWidgetTree;

  }

  addChildWidget(jsWidget) {
    jsWidget.parentWidget = this.widget;
    this.widget.buildingWidgetTree.childrenWidget[jsWidget.widgetID] = jsWidget;
  }

  removeChildWidget(jsWidget) {
    if (
      this.widget.currentWidgetTree &&
      this.widget.currentWidgetTree.childrenWidget
    ) {
      delete this.widget.currentWidgetTree.childrenWidget[jsWidget.widgetID];
    }
  }

  //js->flutter
  callFlutterRebuild() {

    JSLog.log("callFlutterRebuild ::" + this.widget.widgetLogInfoStr());
    let startEncodeData = (new Date()).valueOf();
    let widgetData = XSJSWidgetHelper.buildWidgetData(this.widget);
    let startTransferData = (new Date()).valueOf();

    if (this.widget.enableProfile) {
      let profileInfo = {};
      profileInfo['startEncodeData'] = startEncodeData;
      profileInfo['startTransferData'] = startTransferData;
      profileInfo['transferDataLen'] = widgetData.length;
      this.widget.profileInfo = profileInfo;
    }


    //rebuild and confirm 配对
    this.confirmCurrentWidgetTree();
    //call flutter setState
    JSFramework.callFlutterWidgetChannel("rebuild", widgetData);
  }

  //0.1.0 2020-4-2 修改为不经过dart侧buildend确认，当发送rebuild或等价构建UI调用后
  //直接确认CurrentTree，目的是可以聚合延迟发送buildend
  confirmCurrentWidgetTree() {
    this.widget.preWidgetTree = this.widget.currentWidgetTree;
    this.widget.currentWidgetTree = this.widget.buildingWidgetTree;
  }


  //flutter -> js
  onEventCallback(args) {
    let callID = args["callID"]; //   widgetID/callID 格式 ： "1313/3434"
    if (callID == null) {
      return;
    }
    let arr = callID.split("/");

    let widgetID = arr[0];

    let buildWidgetDataSeq = args["buildSeq"];
    let callArgs = args["args"];

    let jsWidget = this.findWidgetWithWidgetID(widgetID);

    if (jsWidget != null) {
      return jsWidget.helper.invokeCallback(buildWidgetDataSeq, callID, args["args"]);
    } else {
      JSLog.error(
        "onEventCallback error: jsWidget == null onEventCallback(args:" + args
      );
    }
  }

  findWidgetWithWidgetID(widgetID) {
    if (this.widget.widgetID == widgetID) {
      return this.widget;
    }

    //先在currentTree里找，一般这里能找到
    let widgetTree = this.widget.currentWidgetTree;

    if (widgetTree != null) {
      let w = widgetTree.childrenWidget[widgetID];
      if (w) {
        return w;
      }

      for (let k in widgetTree.childrenWidget) {
        let jsWidget = widgetTree.childrenWidget[k];
        w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
        if (w) {
          return w;
        }
      }
    }

    //找不到就遍历treemap，为了去掉 buildend 回调确认WidgetTree的过程
    for (let seq in this.widget.buildSeq2WTreeMap) {

      if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq == seq) {
        continue;
      }

      let widgetTree = this.widget.buildSeq2WTreeMap[seq];
      if (widgetTree != null) {
        let w = widgetTree.childrenWidget[widgetID];
        if (w) {
          return w;
        }

        for (let k in widgetTree.childrenWidget) {
          let jsWidget = widgetTree.childrenWidget[k];
          w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
          if (w) {
            return w;
          }
        }
      }
    }

    //查找被自己push的widgets
    for (let k in this.widget.navPushedWidgets) {
      let jsWidget = this.widget.navPushedWidgets[k];
      let w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
      if (w) {
        return w;
      }
    }

    return null;
  }

  invokeCallback(buildWidgetDataSeq, callID, args) {

    JSLog.log("JSWidget invokeCallback ::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq + " callID: " + callID);

    if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq != buildWidgetDataSeq) {
      JSLog.error(
        "XSJSWidget:invokeCallback:this.widget.currentWidgetTree.buildWidgetDataSeq(" + this.widget.currentWidgetTree.buildWidgetDataSeq + ")  != buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
        " callID: " +
        callID
      );

      if (this.widget.preWidgetTree && this.widget.preWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
        JSLog.error(
          "XSJSWidget:invokeCallback:this.widget.preWidgetTree.buildWidgetDataSeq(" + this.widget.preWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
          " callID: " +
          callID
        );

      }

      if (this.widget.buildingWidgetTree && this.widget.buildingWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
        JSLog.error(
          "XSJSWidget:invokeCallback:this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
          " callID: " +
          callID
        );

      }

      return null;
    }

    if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.findCallback(callID)) {
      return this.widget.currentWidgetTree.invokeCallback(callID, args);
    }
    else {
      //容错处理
      JSLog.error(
        "XSJSWidget:invokeCallback: 容错搜索所有BuildTree，this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
        " callID: " +
        callID
      );
      for (let seq in this.widget.buildSeq2WTreeMap) {
        let tree = this.widget.buildSeq2WTreeMap[seq];

        if (tree.findCallback(callID)) {
          return tree.invokeCallback(callID, args);
        }

      }
    }

  }


  onBuildEnd(args) {
    let widgetID = args["widgetID"];
    let buildWidgetDataSeq = args["buildSeq"];
    let jsWidget = this.findWidgetWithWidgetID(widgetID);

    if (jsWidget != null) {
      let profileInfo = args["profileInfo"];
      jsWidget.helper.onFlutterBuildEnd(buildWidgetDataSeq, profileInfo);
    } else {
      JSLog.error("onBuildEnd error: jsWidget == null widgetID: " + widgetID + " buildWidgetDataSeq: " + buildWidgetDataSeq);
    }
  }

  onFlutterBuildEnd(buildWidgetDataSeq, profileInfo) {

    let tree = this.widget.buildSeq2WTreeMap[buildWidgetDataSeq];

    if (tree != null) {
      this.widget.preWidgetTree = this.widget.currentWidgetTree;
      this.widget.currentWidgetTree = tree;

      JSLog.log("JSWidget onFlutterBuildEnd success::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq);

      this.clearWidgetTree(buildWidgetDataSeq);
    } else {
      JSLog.error("JSWidget onFlutterBuildEnd fail buildSeq2WTreeMap.keys: [" + Object.keys(this.widget.buildSeq2WTreeMap).join("|") + "]::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
    }

    this.widget.setProfileInfo(profileInfo);

    if (this.widget instanceof XSJSStatelessWidget) {
      this.widget.onBuildEnd();
    } else if (this.widget instanceof XSJSStatefulWidget) {
      this.widget.state.onBuildEnd();
    }
  }

  //比buildWidgetDataSeq小的tree 可以清理掉了
  clearWidgetTree(buildWidgetDataSeq) {

    let intCurSeq = parseInt(buildWidgetDataSeq);
    let clearSeqs = [];

    for (let seq in this.widget.buildSeq2WTreeMap) {
      let intSeq = parseInt(seq);

      //保留第一次的构建，兼容有些Flutter Widget有不更新Widget内容的bug
      if (intSeq <= 1) {
        continue;
      }

      if (intSeq < intCurSeq) {
        clearSeqs.push(seq);
      }
    }

    for (let i = 0; i < clearSeqs.length; ++i) {
      //JSLog.debug("JSWidget clearWidgetTree::" + this.widget.widgetLogInfoStr() + " delSeq: " + delSeq);
      delete this.widget.buildSeq2WTreeMap[clearSeqs[i]];
    }

  }

  onDispose(args) {
    let widgetID = args["widgetID"];

    let jsWidget = this.findWidgetWithWidgetID(widgetID);

    if (jsWidget != null) {
      jsWidget.helper.onFlutterDispose();

      if (jsWidget.parentWidget) {
        //TODO: FIXME listview 滑动，滑出之后再回来，就不响应了，先不删除，依赖顶层Push页面的pop来释放
        //jsWidget.parentWidget.helper.removeChildWidget(jsWidget);
      }

      if (jsWidget.navPushingWidget) {

        jsWidget.navPushingWidget.helper.removePushingWidget(jsWidget);
      }
    } else {
      JSLog.error("onDispose error: jsWidget == null widgetID " + widgetID);
    }
  }

  onFlutterDispose() {

    JSLog.log("JSWidget onFlutterDispose ::" + this.widget.widgetLogInfoStr());
    //调用子widget disposeWidget
    if (
      this.widget.currentWidgetTree &&
      this.widget.currentWidgetTree.childrenWidget
    ) {
      for (let k in this.widget.currentWidgetTree.childrenWidget) {
        let widget = this.widget.currentWidgetTree.childrenWidget[k];
        if (widget) {
          widget.helper.onFlutterDispose();
        }
        // this.widget.currentWidgetTree.childrenWidget[k].disposeWidget();
      }
    }

    if (this.widget instanceof XSJSStatefulWidget) {
      this.widget.state.dispose();
    }
  }

  //js->flutter
  //navigator route
  navigatorPush(jsWidget) {
    // 清空当前widget的navPushedWidgets数据
    for (let i in this.widget.navPushedWidgets) {
      var obj = this.widget.navPushedWidgets[i];
      obj.helper.onFlutterDispose();

      if (obj.parentWidget) {
        obj.parentWidget.helper.removeChildWidget(obj);
      }

      if (obj.navPushingWidget) {
        obj.navPushingWidget.helper.removePushingWidget(obj);
      }
    }

    let startEncodeData = (new Date()).valueOf();
    let widgetData = this.updatePushingWidgetsData(jsWidget);
    let startTransferData = (new Date()).valueOf();

    if (jsWidget.enableProfile) {
      let profileInfo = {};
      profileInfo['startEncodeData'] = startEncodeData;
      profileInfo['startTransferData'] = startTransferData;
      profileInfo['transferDataLen'] = widgetData.length;
      jsWidget.profileInfo = profileInfo;
    }

    //call flutter navigatorPush
    JSFramework.callFlutterWidgetChannel("navigatorPush", widgetData);
  }

  navigatorPop() {

    // TODO:fixme找到最上层的top widget
    let topRootWidget = this.findTopRootWidget();
    let widgetID = topRootWidget.widgetID;
    JSFramework.callFlutterWidgetChannel("navigatorPop", {
      widgetID
    });

    if (this.widget.navPushedWidgets) {
      delete this.widget.navPushedWidgets[widgetID];
    }
  }

  //留意：这个函数命名是不是应该是removePushedWidget
  removePushingWidget(jsWidget) {
    if (this.widget.navPushedWidgets) {
      delete this.widget.navPushedWidgets[jsWidget.widgetID];
    }
  }

  updatePushingWidgetsData(jsWidget) {

    JSLog.log("updatePushingWidgetsData WidgetName:" + jsWidget.widgetName);
    //那种根节点不是statewidget的页面 比如Theme
    var newJSWidget;
    if (jsWidget.className != "XSJSStatefulWidget" && jsWidget.className != "XSJSStatelessWidget") {
      // 特殊处理，用XSJSStatelessWidget包裹一层
      newJSWidget = new XSJSStatelessWidget("FakeStatelessWidget");
      newJSWidget.build = function (context) {
        return jsWidget;
      };
    } else {
      newJSWidget = jsWidget;
    }

    //设置push jsWidget的widget
    newJSWidget.navPushingWidget = this.widget;
    newJSWidget.buildContext = JSBuildContext.inheritBuildContext(newJSWidget, this.widget.buildContext);
    newJSWidget.navPushingWidgetID = this.widget.widgetID;
    this.widget.navPushedWidgets[newJSWidget.widgetID] = newJSWidget;
    let widgetData = XSJSWidgetHelper.buildWidgetData(newJSWidget);

    return widgetData;
  }

  findTopRootWidget() {
    let rootWidget = this.widget.parentWidget;
    if (rootWidget == null) {
      return this.widget;
    }

    return rootWidget.helper.findTopRootWidget();
  }
}

class XSJSBaseWidget extends core.Object {
  constructor(name, { key } = {}) {
    super();

    this.name = name;
    this.key = key;

    initXSJSWidgetData(this);
  }

  widgetLogInfoStr() {
    let log = "WidgetInfo: Name: " + this.widgetName + " Class: " + this.className + " WID: " + this.widgetID + " buildseq: " + this.buildWidgetDataSeq +
      " currentTreeSeq: " + this.getWidgetTreeBuildSeq(this.currentWidgetTree) + " buildingseq: " + this.getWidgetTreeBuildSeq(this.buildingWidgetTree) +
      " preTreeSeq: " + this.getWidgetTreeBuildSeq(this.preWidgetTree);
    return log;
  }

  getWidgetTreeBuildSeq(widgetTree) {

    if (widgetTree == null) {
      return "0";
    }

    return widgetTree.buildWidgetDataSeq;

  }

  onBuildEnd(args) { }

  ///性能分析模式 
  ///打开性能分析模式，widget.enableProfile = true
  ///可以重载onBuildEnd，使用getProfileText获得各个阶段耗时
  setProfileInfo(profileInfo) {

    if (this.enableProfile == true && profileInfo) {
      this.profileInfo["startDecodeData"] = profileInfo["startDecodeData"];
      this.profileInfo["endDecodeData"] = profileInfo["endDecodeData"];
      this.profileInfo["buildEnd"] = profileInfo["buildEnd"];
    }
  }

  getProfileText() {
    let profileInfo = this.profileInfo;
    let startEncodeData = profileInfo['startEncodeData'];
    let startTransferData = profileInfo['startTransferData'];
    let startDecodeData = profileInfo['startDecodeData'];
    let endDecodeData = profileInfo['endDecodeData'];
    let buildEnd = profileInfo['buildEnd'];
    let transferDataLen = profileInfo['transferDataLen'];

    let buildDataCost = startTransferData - startEncodeData;
    let transferCost = startDecodeData - startTransferData;
    let decodeDataCost = endDecodeData - startDecodeData;
    let paintCost = buildEnd - endDecodeData;

    let mxcost = endDecodeData - startEncodeData;
    let flutterBuild = endDecodeData - startEncodeData;

    let profileText = '总耗时: XSFlutterTotal: ' + mxcost + 'ms FlutterBuild: ' + paintCost + 'ms 详情:\n' +
      '[JS]buildJSWidgetTree2Json: ' + buildDataCost + "ms \n" +
      '[JS->Native->Dart]transfer(' + (transferDataLen * 2.0 / 1024.0).toFixed(2) + 'Kb): ' + transferCost + "ms\n" +
      '[Dart]DecodeJson: ' + decodeDataCost + "ms\n" +
      '[Dart]flutterBuild: ' + paintCost + "ms";
    return profileText;
  }
}

class XSJSStatefulWidget extends XSJSBaseWidget {
  constructor(name, { key } = {}) {
    super(name, { key: key });

    this.className = "XSJSStatefulWidget";
    initXSJSWidgetData(this);
  }

  //subclass override
  createState() { }
}

(XSJSStatefulWidget.new = function ({ key } = {}) {
  this.name = this.title;
  this.key = key;
  this.className = "XSJSStatefulWidget";

  initXSJSWidgetData(this);

}).prototype = XSJSStatefulWidget.prototype;
// XSJSStatefulWidget.new = XSJSStatefulWidget.constructor;

//在JS层，要封装控件，如不需要改变UI内容，使用无状态的XSJSStatelessWidget
class XSJSStatelessWidget extends XSJSBaseWidget {
  constructor(name, { key } = {}) {
    super(name, { key: key });

    this.className = "XSJSStatelessWidget";

    initXSJSWidgetData(this);
  }

  //subclass override
  build(buildContext) {
    return null;
  }
}

(XSJSStatelessWidget.new = function ({ key } = {}) {
  this.name = this.title;
  this.key = key;
  this.className = "XSJSStatelessWidget";

  initXSJSWidgetData(this);
}).prototype = XSJSStatelessWidget.prototype;


module.exports = {
  mxfJSBridgeInvokeJSCommonChannel,
  //class 定义
  XSFJSBridge,
  XSFlutterApp,
  XSJSStatelessWidget,
  XSJSStatefulWidget,
};
