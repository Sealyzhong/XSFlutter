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
  JSMethodCall,JSLog,JSFramework,JSCallbackMgr,JSBuildContext,JSWidgetTree,JSWidgetMgr,JSStatefulWidget,JSStatelessWidget,XSJSWidgetHelper
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
    this.rootWidget = new JSStatelessWidget("RootWidget");
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






module.exports = {
  mxfJSBridgeInvokeJSCommonChannel,
  //class 定义
  XSFJSBridge,
  XSFlutterApp,

};
