//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'xs_js_flutter_common.dart';
import 'xs_json_to_dart.dart';
import 'xs_js_mirror_obj_mgr.dart';
import 'xs_js_framework.dart';

///*XSFluttr的对外接口类
///简单两步接入XSFlutter，打开JS编写的页面。
///1. 启动运行JS代码 'XSFlutter.getInstance().runJSApp();'
///2. Push JS页面
///
/// '''dart
///
///      Navigator.push(
///          context,
///          MaterialPageRoute(
///              builder: (context) => XSJSPageWidget(
///                  jsWidgetName: "MyJSWidgetHomePage")));
///
/// '''
///
abstract class XSFlutter {
  static XSFlutter _instance;

  ///获取XSFlutter
  ///XSFlutter的大部分接口通过XSFlutter来暴露
  static XSFlutter getInstance() {
    if (_instance == null) {
      _instance = XSFlutterLib();
    }

    return _instance;
  }

  ///由Flutter 代码启动JSApp。 可以用在先显示Flutter页面，然后Push路由跳转到JS页面
  ///启动JSApp之后，执行JS代码，JS代码可以主动调用Flutter显示自己的页面，也能接受Flutter的指令，显示对应页面
  ///
  ///@param jsAppPath jsApp root path ，JS业务代码放置在一个文件夹中，并且有main.js文件。jsAppPath和jsAppAssetsKey根据场景二选一
  ///@param jsAppAssetsKey 使用pubspec.yaml里的AssetsKey配置来设置jsAppPath，默认为flutter工程下，与lib，ios同级目录的js_src/文件夹下
  ///@param jsAppSearchPathList js App require 的搜索路径，一般无需设置，默认jsApp root path
  ///@param jsAppSearchPathWithAssetsKeyList js App require 的搜索路径，使用pubspec.yaml里的AssetsKey配置来设置，一般无需设置，默认jsApp root path
  ///@returns void
  ///@throws Error if Path error
  ///
  runJSApp({String jsAppPath = "", String jsAppAssetsKey = "js_src", List<String> jsAppSearchPathList, List<String> jsAppSearchPathWithAssetsKeyList});

  ///从Flutter Push一个 JS写的页面
  ///@param widgetName: "widgetName",在js_src/main.js  MyApp::createJSWidgetWithName 函数中使用
  ///MyApp::createJSWidgetWithName 通过 widgetName 来创建对应的JSWidget
  /// 通常你应该使用更高层的API XSJSPageWidget 包装类来显示JS Widget 请参考 XSJSPageWidget 的用法
  ///
  /// '''dart
  ///
  ///      Navigator.push(
  ///          context,
  ///          MaterialPageRoute(
  ///              builder: (context) => XSJSPageWidget(
  ///                  jsWidgetName: "MyJSWidgetHomePage")));
  ///
  /// '''
  ///
  dynamic navigatorPushWithName(String widgetName, Key widgetKey, {ThemeData themeData, MediaQueryData mediaQueryData, IconThemeData iconThemeData});

  ///flutter->js  顶层通用调用通道
  dynamic invokeJSCommonChannel(MethodCall jsMethodCall);

  ///注册JS call dart Proxy
  void registerMirrorObjProxy(Map<String, CreateJsonObjProxyFun> string2CreateJsonObjProxyFunMap);
}

typedef Future<dynamic> _XSChannelFun(dynamic arguments);

///供xsflutter库内部使用
///XSFlutterLib Native层XSFlutterEngine的通讯代理类
///负责配置，运行XSFlutterApp，衔接Flutter，Native，JS 三方
class XSFlutterLib implements XSFlutter {
  ///获取XSFlutterLib
  ///供xsflutter库内部使用
  static XSFlutterLib getInstance() {
    return XSFlutter.getInstance();
  }

  //公开属性
  XSFlutterApp currentApp;

  MethodChannel _jsFlutterMainChannel;
  //通用js <===bridge===> flutter 通道
  BasicMessageChannel<String> _jsFlutterCommonBasicChannel;
  Map<String, _XSChannelFun> _jsFlutterMainChannelFunRegMap = {};
  bool _isSetup = false;

  XSFlutterLib() {
    setup();
  }

  setup() {
    if (_isSetup) {
      return;
    }
    //需要WidgetsFlutterBinding已调用
    WidgetsFlutterBinding.ensureInitialized();
    setupChannel();

    _isSetup = true;
  }

  setupChannel() {
    //[Native->flutter]
    _jsFlutterMainChannel = MethodChannel("js_flutter.flutter_main_channel");
    _jsFlutterMainChannel.setMethodCallHandler((MethodCall call) async {
      XSJSLog.log("_jsFlutterMainChannel_methodHandler:");
      XSJSLog.log(call);

      Function fun = _jsFlutterMainChannelFunRegMap[call.method];
      return fun(call.arguments);
    });

    _jsFlutterCommonBasicChannel = const BasicMessageChannel('xsflutter_common_basic_channel', StringCodec());
    _jsFlutterCommonBasicChannel.setMessageHandler((String message) => Future<String>(() {
          return js2flutterSubCallChannel(message);
        }));

    //Method reg
    _jsFlutterMainChannelFunRegMap["reloadApp"] = reloadApp;

    //------xsflutterBridge [js ->native-> flutter]  subcmd------
    //由js2flutterSubCallChannel调用
    _jsFlutterMainChannelFunRegMap["JSBridgeCreateMirrorObj"] = jsBridgeCreateMirrorObj;
    _jsFlutterMainChannelFunRegMap["JSBridgeInvokeMirrorObjWithCallback"] = jsBridgeInvokeMirrorObjWithCallback;
    _jsFlutterMainChannelFunRegMap["xsflutterBridgeMethodChannelInvoke"] = xsflutterBridgeMethodChannelInvoke;
    _jsFlutterMainChannelFunRegMap["xsflutterBridgeEventChannelReceiveBroadcastStreamListenInvoke"] = xsflutterBridgeEventChannelReceiveBroadcastStreamListenInvoke;

    _jsFlutterMainChannelFunRegMap["xsfJSBridgeRemoveMirrorObjsRef"] = xsfJSBridgeRemoveMirrorObjsRef;

    //------xsflutterBridge------
  }

  ///由Flutter 代码启动JSApp。 可以用在先显示Flutter页面，然后Push路由跳转到JS页面
  ///启动JSApp之后，执行JS代码，JS代码可以主动调用Flutter显示自己的页面，也能接受Flutter的指令，显示对应页面
  ///
  /// @param jsAppPath jsApp root path ，JS业务代码放置在一个文件夹中，并且有main.js文件。jsAppPath和jsAppAssetsKey根据场景二选一
  /// @param jsAppAssetsKey 使用pubspec.yaml里的AssetsKey配置来设置jsAppPath，默认为flutter工程下，与lib，ios同级目录的js_src/文件夹下
  /// @param jsAppSearchPathList js App require 的搜索路径，一般无需设置，默认jsApp root path
  /// @param jsAppSearchPathWithAssetsKeyList js App require 的搜索路径，使用pubspec.yaml里的AssetsKey配置来设置，一般无需设置，默认jsApp root path
  /// @returns void
  /// @throws Error if Path error
  @override
  runJSApp({String jsAppPath = "", String jsAppAssetsKey = "js_src", List<String> jsAppSearchPathList, List<String> jsAppSearchPathWithAssetsKeyList}) {
    Map<String, dynamic> args = {
      "jsAppAssetsKey": jsAppAssetsKey,
      "jsAppPath": jsAppPath
    };

    if (jsAppSearchPathList != null) {
      args["jsAppSearchPathList"] = jsAppSearchPathList;
    }

    if (jsAppSearchPathWithAssetsKeyList != null) {
      args["jsAppSearchPathWithAssetsKeyList"] = jsAppSearchPathWithAssetsKeyList;
    }

    //清理flutter侧的对象映射
    _clearXS();

    _jsFlutterMainChannel.invokeMethod("callNativeRunJSApp", args);

    //暂时只支持一个
    currentApp = XSFlutterApp(jsAppAssetsKey);
  }

  ///清理flutter侧的对象映射
  _clearXS() {
    XSJSMirrorObjMgr.getInstance().clearMirrorObjects();
  }

  callJsCallbackFunction(String callbackId, param) {
    var args = {
      "callbackId": callbackId,
      "param": param
    };
    _jsFlutterMainChannel.invokeMethod("callJsCallbackFunction", args);
  }

  ///js->flutter 顶层通用调用通道
  ///args参数为JSON字符串argsJSONStr
  Future<String> js2flutterSubCallChannel(argsJSONStr) async {
    XSJSLog.log("js2flutterSubCallChannel");
    XSJSLog.log(argsJSONStr);

    Map args = json.decode(argsJSONStr);
    String funcName = args["funcName"];
    dynamic funArgs = args["args"];

    Function fun = _jsFlutterMainChannelFunRegMap[funcName];
    return fun(funArgs);
  }

  ///flutter->js  顶层通用调用通道
  dynamic invokeJSCommonChannel(MethodCall jsMethodCall) async {
    XSJSLog.log("invokeJSCommonChannel:${jsMethodCall.method}");

    var callInfo = {
      "method": jsMethodCall.method,
      "arguments": jsMethodCall.arguments,
    };

    String sendStr = json.encode(callInfo);
    return _jsFlutterCommonBasicChannel.send(sendStr);
  }

  //Mirror Sys
  invokeJSMirrorObj({dynamic mirrorID, String functionName, String callbackID, dynamic args}) async {
    Map callInfo = {
      "mirrorID": mirrorID,
      "funcName": functionName,
      "callbackID": callbackID,
      "args": args
    };

    MethodCall jsMethodCall = MethodCall("invokeJSMirrorObj", callInfo);

    invokeJSCommonChannel(jsMethodCall);
  }

  Future<String> jsBridgeCreateMirrorObj(argMap) async {
    XSJsonObjToDartObject.jsonToDartObj(argMap);
    return null;
  }

  Future<String> jsBridgeInvokeMirrorObjWithCallback(args) async {
    if (args == null) {
      return null;
    }

    String mirrorID = args["mirrorID"];
    dynamic mirrorObj = XSJSMirrorObjMgr.getInstance().getMirrorObjectFromID(mirrorID);

    if (mirrorObj != null) {
      String className = args["className"];
      String funcName = args["funcName"];
      Map funArgs = args["args"];

      XSJsonObjProxy proxy = XSJsonObjToDartObject.getInstance().getJSObjProxy(className);

      if (proxy != null) {
        Completer<String> completer = new Completer<String>();
        proxy.jsInvokeMirrorObjFunction(mirrorID, mirrorObj, funcName, funArgs, callback: (result) {
          var returnJSONStr = result;
          if (result != null && !(result is String)) {
            returnJSONStr = json.encode(result);
          }

          //callJsCallbackFunction(onResultId, params);
          completer.complete(returnJSONStr);
        });

        return completer.future;
      }
    }

    return null;
  }

  Future<dynamic> xsfJSBridgeRemoveMirrorObjsRef(dynamic mirrorIDList) {
    XSJSMirrorObjMgr.getInstance().removeMirrorObjects(mirrorIDList);
    return null;
  }

  Future<dynamic> xsflutterBridgeMethodChannelInvoke(args) async {
    var channelName = args["channelName"];
    var methodName = args["methodName"];
    var params = args["params"];

    var flutterChannel = MethodChannel(channelName);

    try {
      dynamic result = await flutterChannel.invokeMethod(methodName, params);
      return result;
    } on PlatformException {}
  }

  Future<dynamic> xsflutterBridgeEventChannelReceiveBroadcastStreamListenInvoke(args) async {
    var channelName = args["channelName"];
    var streamParam = args["streamParam"];
    var onDataId = args["onDataId"];
    var onErrorId = args["onErrorId"];
    var onDoneId = args["onDoneId"];
    var cancelOnError = args["cancelOnError"];

    void onData(Object event) {
      callJsCallbackFunction(onDataId, event);
    }

    void onError(Object event) {
      callJsCallbackFunction(onErrorId, event);
    }

    void onDone() {
      callJsCallbackFunction(onDoneId, {});
    }

    var flutterEventChannel = EventChannel(channelName);
    if (streamParam == "") {
      flutterEventChannel.receiveBroadcastStream().listen(onData, onError: onError, onDone: onDone, cancelOnError: cancelOnError);
    } else {
      flutterEventChannel.receiveBroadcastStream(streamParam).listen(onData, onError: onError, onDone: onDone, cancelOnError: cancelOnError);
    }
  }

  //js->flutter 显示js页面
  Future<dynamic> reloadApp(args) async {
    String routeName = args["routeName"];

    if (routeName == "XSJSWidget") {
      String widgetDataStr = args["widgetData"];
      var widgetData = json.decode(widgetDataStr);

      try {
        var w = currentApp.createJSWidget(widgetData);
        currentApp.runJSApp(w);
      } catch (e) {
        XSJSLog.log("reloadApp error:$e");
        rethrow;
      }
    } else {
      //runApp(MyApp());
    }
  }

  ///API - 由XSFlutter类提供的API，是XSJS页面的入口API
  ///从Flutter Dart代码 Push一个 JS写的页面
  ///*重要：此API是从Dart侧打开一个JS页面的入口函数，将创建一个RootWidget，XSFlutter 的RootWidget对外只显示一个
  ///先创建一个空的JSStatefulWidget，调用JS，等待JS层widgetData来刷新页面
  dynamic navigatorPushWithName(String widgetName, Key widgetKey, {ThemeData themeData, MediaQueryData mediaQueryData, IconThemeData iconThemeData}) {
    dynamic jsWidget = currentApp?.navigatorPushWithName(widgetName, widgetKey, themeData: themeData, mediaQueryData: mediaQueryData, iconThemeData: iconThemeData);

    return jsWidget;
  }

  ///API- 由XSFlutter类提供的API，是XSJS页面的入口API
  ///JS->Flutter
  ///js侧调用Flutter，传递Json Widget Tree，创建JSWidget
  dynamic createJSWidget(Map widgetData) {
    dynamic jsWidget = currentApp?.createJSWidget(widgetData);
    return jsWidget;
  }

  mxLog(String log) {
    _jsFlutterMainChannel?.invokeMethod("mxLog", log);
  }

  void registerMirrorObjProxy(Map<String, CreateJsonObjProxyFun> string2CreateJsonObjProxyFunMap) {
    XSJsonObjToDartObject.getInstance().registerProxy(string2CreateJsonObjProxyFunMap);
  }
}
