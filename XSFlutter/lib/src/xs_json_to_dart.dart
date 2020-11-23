//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:core';
import 'package:flutter/material.dart';
import 'xs_json_proxy_package.dart';
import 'xs_build_owner.dart';

import 'xs_json_proxy_material.dart';
import 'xs_json_proxy_layout.dart';
import 'xs_json_proxy_text.dart';
import 'xs_json_proxy_basic_types.dart';
import 'xs_json_proxy_image.dart';
import 'xs_json_proxy_cupertino.dart';
import 'xs_js_flutter_common.dart';
import 'xs_json_proxy_animation.dart';

import 'xs_json_proxy_widget.dart';
import 'xs_js_mirror_obj_mgr.dart';

typedef dynamic CreateJsonObjProxyFun();

typedef InvokeCallback = void Function(dynamic params);

typedef StringFunctionGenericCallback<T> = String Function(T value);

/// TODO
/// 1、jsonListObjToDartListRecursive
/// 该方法要返回指定类型的List，如List<Widget>、List<String>等

class XSJsonObjToDartObject {
  static XSJsonObjToDartObject _instance;

  static XSJsonObjToDartObject getInstance() {
    if (_instance == null) {
      _instance = XSJsonObjToDartObject._();
    }

    return _instance;
  }

  factory XSJsonObjToDartObject() {
    return XSJsonObjToDartObject.getInstance();
  }

  XSJsonObjToDartObject._() {
    init();
  }

  static dynamic jsonToDartObj(dynamic jsonMap, {XSJsonBuildOwner buildOwner, BuildContext context}) {
    return XSJsonObjToDartObject.getInstance().jsonObjToDartObject(jsonMap, buildOwner: buildOwner, context: context);
  }

  dynamic jsonObjToDartObject(dynamic jsonObj, {XSJsonBuildOwner buildOwner, BuildContext context}) {
    if (jsonObj == null) {
      return jsonObj;
    }
    String className;
    try {
      ///map
      if (jsonObj is Map) {
        className = getJsonObjClassName(jsonObj);

        // 解决Icon.icon的转换问题
        Map<String, dynamic> newJsonObj = {};
        if (jsonObj.length > 0) {
          jsonObj.forEach((k, v) {
            if (k.runtimeType == String) {
              String key = k;
              if (key.contains('.')) {
                List array = key.split(".");
                newJsonObj[array[1]] = v;
                className = array[0];
                newJsonObj["className"] = array[0];
              } else {
                newJsonObj[k] = v;
              }
            } else {
              newJsonObj[k] = v;
            }
          });
        }

        ///如果Map里找到了Class字段，则转换成对应Dart对象
        if (className != null) {
          return jsonMapObjToDartObject(newJsonObj, buildOwner: buildOwner, context: context);
        } else {
          ///如果Map里没找到Class字段，则转换成对应Dart里的Map对象，并对齐子元素，递归转换
          return jsonMapObjToDartMapRecursive(newJsonObj, buildOwner: buildOwner, context: context);
        }
      } else if (jsonObj is List) {
        return jsonListObjToDartListRecursive(jsonObj, buildOwner: buildOwner, context: context);
      } else {
        return jsonObj;
      }
    } catch (e) {
      XSJSLog.error("XSJsonObjToDartObject:jsonObjToDartObject error:$e ;decode:class $className, jsonObj:$jsonObj ");

      //打印日志重新抛出
      rethrow;
    }
  }

  ///如果Map里找到了Class字段，则转换成对应Dart对象
  dynamic jsonMapObjToDartObject(Map jsonMap, {XSJsonBuildOwner buildOwner, BuildContext context}) {
    String className = jsonMap["className"];
    if (className == null || className.isEmpty) {
      return null;
    }

    var mirrorObject = findMirrorObj(jsonMap, buildOwner);
    if (mirrorObject != null) {
      return mirrorObject;
    }

    //XSJSLog.debug("jsonMap->DartClass: start className: $className ");
    XSJsonObjProxy proxy = getJSObjProxy(className);
    dynamic dartObject = proxy.jsonObjToDartObject(buildOwner, jsonMap, context: context);

    setMirrorObj(jsonMap, buildOwner, dartObject);

    return dartObject;
  }

  dynamic findMirrorObj(Map jsonMap, XSJsonBuildOwner buildOwner) {
    dynamic mirrorID = jsonMap["mirrorID"];
    if (mirrorID == null) {
      return null;
    }

    //两个分支目前一样
    var mirrorObject;
    if (buildOwner != null) {
      mirrorObject = buildOwner.getMirrorObjectFromID(mirrorID);
    } else {
      mirrorObject = XSJSMirrorObjMgr.getInstance().getMirrorObjectFromID(mirrorID);
    }

    return mirrorObject;
  }

  void setMirrorObj(Map jsonMap, XSJsonBuildOwner buildOwner, dynamic dartObject) {
    dynamic mirrorID = jsonMap["mirrorID"];
    if (mirrorID == null) {
      return;
    }

    if (buildOwner != null) {
      buildOwner.setMirrorObject(dartObject, jsonMap);
    } else {
      XSJSMirrorObjMgr.getInstance().addMirrorObject(mirrorID, dartObject);
    }
  }

  ///如果Map里没找到Class字段，则转换成对应Dart里的Map对象，并对齐子元素，递归转换
  dynamic jsonMapObjToDartMapRecursive(Map jsonMap, {XSJsonBuildOwner buildOwner, BuildContext context}) {
    Map map = {};

    jsonMap.forEach((k, v) {
      map[k] = jsonToDartObj(v, buildOwner: buildOwner, context: context);
    });

    return map;
  }

  ///List对象，对子元素，递归转换
  dynamic jsonListObjToDartListRecursive(List jsonList, {XSJsonBuildOwner buildOwner, BuildContext context}) {
    List list = [];

    jsonList.forEach((v) {
      var vObj = jsonToDartObj(v, buildOwner: buildOwner, context: context);
      list.add(vObj);
    });

    return list;
  }

  XSJsonObjProxy getJSObjProxy(String className) {
    XSJsonObjProxy proxy = _className2Proxy[className];
    if (proxy == null) {
      CreateJsonObjProxyFun fun = _className2Handle[className];
      if (fun == null) {
        XSJSLog.error("XSJsonObjToDartObject:jsonMapObjToDartObject error:CreateJsonObjProxyFun fun = null,没有代理类 ;decode:class $className ");
        return null;
      }

      proxy = fun();
      _className2Proxy[className] = proxy;
    }

    return proxy;
  }

//private

  Map<String, CreateJsonObjProxyFun> _className2Handle = {};
  Map<String, XSJsonObjProxy> _className2Proxy = {};

  void init() {
    registerProxy(XSProxyJSStatefulWidget.registerProxy());
    registerProxy(XSProxyJSStatelessWidget.registerProxy());

    registerProxy(XSProxyRegisterHelperMaterialSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperLayoutSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperTextSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperBasicTypesSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperImageSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperCupertinoSeries.registerProxys());
    registerProxy(XSProxyRegisterHelperAnimationSeries.registerProxys());

    //helper widget
    registerProxy(XSProxyRegisterHelperWidgetSeries.registerProxys());

    //注册第三方
    registerProxy(XSProxyRegisterHelperPackageSeries.registerProxys());
  }

  void registerProxy(Map<String, CreateJsonObjProxyFun> m) {
    if (m == null || m.isEmpty) {
      return;
    }

    _className2Handle.addAll(m);
  }

  ///helper fun
  static String getJsonObjClassName(Map jsonMap) {
    String className = jsonMap["className"];

    if (className == null || className is! String || className.isEmpty) {
      return null;
    }

    return className;
  }
}

typedef dynamic ConstructorFun(XSJsonBuildOwner buildOwner, Map<String, dynamic> jsonMap, {BuildContext context});

typedef dynamic StaticFunction(XSJsonBuildOwner buildOwner, Map<String, dynamic> jsonMap, {BuildContext context});

class XSJsonObjProxy {
  ///静态接口,子类重写*********************************************

  ///把自己能处理的类注册到分发器中
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    //示例
//    final String regClassName1  = "XSWidgetClassName1";
//    final String regClassName2  = "XSWidgetClassName2";
//
//    return {regClassName1: ()=>XSProxyAlignmentDirectional()..init(className: regClassName1)};
    return {};
  }

  ///*********************************************************************

  ///实例变量
  String className;

  Map<String, Map<String, ConstructorFun>> _className2constructor;

  // 静态方法映射
  Map<String, Map<String, StaticFunction>> _className2StaicFunction;

  ///如需要支持生成多个相似的类，支持一个类支持多个构造函数，重载此函数
  void init({String className}) {
    this.className = className;
  }

  ///注册多构造函数,不注册默认会调用默认构造函数 constructor
  void registerConstructor({String className, String constructorName = "", ConstructorFun constructor}) {
    if (className == null || className.isEmpty || constructor == null) {
      return;
    }

    constructorName ??= "";

    if (_className2constructor == null) {
      _className2constructor = Map<String, Map<String, ConstructorFun>>();
    }

    Map<String, ConstructorFun> m = _className2constructor[className];

    if (m == null) {
      m = Map<String, ConstructorFun>();
    }

    m[constructorName] = constructor;

    _className2constructor[className] = m;
  }

  ///注册静态方法
  /*
  void registerStaticFunction1({String className, String staticFunctionName = "", StaticFunction staticFunction}) {
    if (className == null || className.isEmpty || staticFunction == null) {
      return;
    }

    staticFunctionName ??= "";

    if (_className2StaicFunction == null) {
      _className2StaicFunction = Map<String, Map<String, StaticFunction>>();
    }

    Map<String, StaticFunction> m = _className2StaicFunction[className];

    if (m == null) {
      m = Map<String, StaticFunction>();
    }

    m[staticFunctionName] = staticFunction;

    _className2StaicFunction[className] = m;
  }
  */

  ///用于多构造函数分发，一般不用重载，只重载constructor即可
  dynamic jsonObjToDartObject(XSJsonBuildOwner buildOwner, Map<String, dynamic> jsonMap, {BuildContext context}) {
    if (!check(jsonMap)) {
      return null;
    }

    ConstructorFun constructorFun = findConstructor(jsonMap);
    StaticFunction staticFun = findStaticFunction(jsonMap);

    var obj;

    ///是否使用静态方法
    if (staticFun != null) {
      obj = staticFun(buildOwner, jsonMap, context: context);
    }

    ///是否使用自定义的构造方法
    else if (constructorFun != null) {
      obj = constructorFun(buildOwner, jsonMap, context: context);
    }

    ///默认构造方法
    else {
      obj = constructor(buildOwner, jsonMap, context: context);
    }

    return obj;
  }

  ///优化默认查找，只有一个构造函数时，返回null，不用查表，直接使用constructor
  ConstructorFun findConstructor(Map<String, dynamic> jsonMap) {
    if (_className2constructor == null) {
      return null;
    }

    String className = getClassName(jsonMap);
    String constructorName = getConstructorName(jsonMap) ?? "";
    ConstructorFun fun = _className2constructor[className][constructorName];
    return fun;
  }

  ///优化默认查找，只有一个构造函数时，返回null，不用查表，直接使用constructor
  StaticFunction findStaticFunction(Map<String, dynamic> jsonMap) {
    if (_className2StaicFunction == null) {
      return null;
    }

    String className = getClassName(jsonMap);
    String staticFunctionName = getStaticFunctionName(jsonMap) ?? "";
    StaticFunction fun;
    if (_className2StaicFunction[className] != null) {
      fun = _className2StaicFunction[className][staticFunctionName];
    }
    return fun;
  }

  ///子类重写constructor函数把map转换到dart类
  dynamic constructor(XSJsonBuildOwner buildOwner, Map<String, dynamic> jsonMap, {BuildContext context}) {
    return null;
  }

  ///util 函数
  bool check(Map<String, dynamic> jsonMap) {
    if (jsonMap is! Map) {
      return false;
    }

    if (className != null && className.isNotEmpty && getClassName(jsonMap) != className) {
      return false;
    }

    return true;
  }

  String getConstructorName(Map<String, dynamic> jsonMap) {
    return jsonMap["constructorName"];
  }

  String getClassName(Map<String, dynamic> jsonMap) {
    return jsonMap["className"];
  }

  String getStaticFunctionName(Map<String, dynamic> jsonMap) {
    return jsonMap["staticFunctionName"];
  }

  dynamic mxj2d(XSJsonBuildOwner buildOwner, dynamic jsonObj, {dynamic defaultValue, BuildContext context}) {
    var v = XSJsonObjToDartObject.getInstance().jsonObjToDartObject(jsonObj, buildOwner: buildOwner, context: context);

    v ??= defaultValue;
    return v;
  }

  List<T> toListT<T>(list) {
    if (list == null) {
      return null;
    }
    return List<T>.from(list);
  }

  Map<int, T> toMapIntT<T>(Map map) {
    Map<int, T> result = map?.map((k, v) {
      if (v.runtimeType == T) {
        return MapEntry<int, T>(int.parse(k), v);
      } else {
        XSJSLog.error("toMapIntT: value type is different from T type, value type is $v.runtimeType, T type is $T");
        return null;
      }
    });
    return result;
  }

  Map<String, T> toMapStringT<T>(Map map) {
    Map<String, T> result = map?.map((k, v) {
      if (v.runtimeType == T) {
        return MapEntry<String, T>(k, v);
      } else {
        XSJSLog.error("toMapStringT: value type is different from T type, value type is $v.runtimeType, T type is $T");
        return null;
      }
    });
    return result;
  }

  double toDouble(obj) {
    if (obj == null) {
      return 0.0;
    }

    return obj.toDouble();
  }

  ////-----------mirror 方法互相调用-----------
  /// subclass override
  /// mirrorObj 为一个类的实例对象，把调用对象方法，路由到代理类
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {}

  ///事件处理------------
  ///
  ///  /// Used by [Builder.builder], [OverlayEntry.builder], etc.
  ///  typedef WidgetBuilder = Widget Function(BuildContext context);
  WidgetBuilder createWidgetBuilder(XSJsonBuildOwner bo, dynamic eventCallbackID) {
    if (eventCallbackID == null) {
      return null;
    }

    WidgetBuilder cb = (BuildContext context) {
      bo.widgetBuilderCallback(eventCallbackID, p: context);
      //TODO:return widget
      return null;
    };

    return cb;
  }

  ///  /// Used by [ListView.builder] and other APIs that use lazily-generated widgets.
  ///  typedef IndexedWidgetBuilder = Widget Function(BuildContext context, int index);
  IndexedWidgetBuilder createIndexedWidgetBuilder(XSJsonBuildOwner bo, dynamic eventCallbackID) {
    if (eventCallbackID == null) {
      return null;
    }

    IndexedWidgetBuilder cb = (BuildContext context, int index) {
      bo.widgetBuilderCallback(eventCallbackID, p: [
        context,
        index
      ]);
      //TODO:return widget
      return null;
    };

    return cb;
  }

  dynamic createLayoutWidgetBuilder(XSJsonBuildOwner bo, dynamic eventCallbackID, BoxConstraints constraints) async {
    if (eventCallbackID == null) {
      return null;
    }

    var cb = await bo.eventCallback(eventCallbackID, p: {
      "widgetName": "LayoutBuilder",
      "functionName": "builder",
      "constraints": XSUtil.cBoxConstraintsToJson(constraints)
    });
    return cb;
  }
}
