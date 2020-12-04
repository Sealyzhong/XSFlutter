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

    switch (funcName) {
      case 'showAboutDialog':
        showAboutDialog(
          context: XSLoading.instance.getContext(),
          applicationName: XSJSParse.getString(null, null, map, "applicationName"),
          applicationVersion: XSJSParse.getString(null, null, map, "applicationVersion"),
          applicationLegalese: XSJSParse.getString(null, null, map, "applicationLegalese"),
          useRootNavigator: XSJSParse.getBool(null, null, map, "useRootNavigator", defaultValue: true),
          applicationIcon: XSJSParse.getWidget(null, null, map, "applicationIcon"),
          children: XSJSParse.getWidgetList(null, null, map, "children"),
        );
        break;
      case 'showDialog':
        showDialog(
          context: XSLoading.instance.getContext(),
          barrierDismissible: XSJSParse.getBool(null, null, map, "barrierDismissible", defaultValue: true),
          useSafeArea: XSJSParse.getBool(null, null, map, "useSafeArea", defaultValue: true),
          useRootNavigator: XSJSParse.getBool(null, null, map, "useRootNavigator", defaultValue: true),
          builder: (context) {
            return XSJSParse.getWidget(null, null, map, "child");
          },
        );
        break;
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
