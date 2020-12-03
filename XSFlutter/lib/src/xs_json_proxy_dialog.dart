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
        break;    }
  }
}
