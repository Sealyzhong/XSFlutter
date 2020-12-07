//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:ffi';

import 'package:flutter/material.dart';
import 'loading/loading.dart';
import 'xs_js_flutter.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperDialogSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyShowDialog.registerProxy());
    m.addAll(XSProxyAboutDialog.registerProxy());
    return m;
  }
}

//****** ShowDialog ******
class XSProxyShowDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ShowDialog";
    return {
      regClassName: () => XSProxyShowDialog()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;
    print(mirrorID);
    XSJsonBuildOwner bo;
    BuildContext context;
    var widgetID = XSJSParse.getString(context, bo, map, "widgetID");
    if (widgetID != null) {
      bo = XSFlutterLib.getInstance().currentApp.rootBuildOwner.findBuildOwner(widgetID);

      try {
        context = bo.widget.context;
      } catch (ex) {}
    }

    if (context == null) {
      context = XSLoading.instance.getContext();
    }

    switch (funcName) {
      case 'showAboutDialog':
        showAboutDialog(
          context: context,
          applicationName: XSJSParse.getString(context, bo, map, "applicationName"),
          applicationVersion: XSJSParse.getString(context, bo, map, "applicationVersion"),
          applicationLegalese: XSJSParse.getString(context, bo, map, "applicationLegalese"),
          useRootNavigator: XSJSParse.getBool(context, bo, map, "useRootNavigator", defaultValue: true),
          applicationIcon: XSJSParse.getWidget(context, bo, map, "applicationIcon"),
          children: XSJSParse.getWidgetList(context, bo, map, "children"),
        );
        break;
      case 'showDialog':
        showDialog(
          context: context,
          barrierDismissible: XSJSParse.getBool(context, bo, map, "barrierDismissible", defaultValue: true),
          useSafeArea: XSJSParse.getBool(context, bo, map, "useSafeArea", defaultValue: true),
          useRootNavigator: XSJSParse.getBool(context, bo, map, "useRootNavigator", defaultValue: true),
          builder: (context) {
            return XSJSParse.getWidget(context, bo, map, "child");
          },
        );
        break;

      case 'dismiss':
        Navigator.pop(context);
    }
  }
}

//****** AboutDialog ******
class XSProxyAboutDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "AboutDialog";
    return {
      regClassName1: () => XSProxyAboutDialog()..init(className: regClassName1)
    };
  }

  @override
  AboutDialog constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => AboutDialog(
        key: XSJSParse.getKey(context, bo, map, "key"),
        applicationName: XSJSParse.getString(context, bo, map, "applicationName"),
        applicationIcon: XSJSParse.getWidget(context, bo, map, "icon"),
        applicationLegalese: XSJSParse.getString(context, bo, map, "applicationLegalese"),
        applicationVersion: XSJSParse.getString(context, bo, map, "applicationVersion"),
        children: XSJSParse.getWidgetList(context, bo, map, "aboutBoxChildren"),
      );
}
