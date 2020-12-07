//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'widgets/empty_data_widget.dart';
import 'xs_json_to_dart.dart';
import 'xs_js_parse.dart';
import 'xs_build_owner.dart';

///把Widget按分类注册，方便写代码，
///分类：Material/Layout/Text/(Assets.Images.icons)/input...
///参照了官网https://flutter.io/docs/development/ui/widgets
class XSProxyRegisterHelperWidgetSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyPlaceholder.registerProxy());
    m.addAll(XSProxyEmptyDataWidget.registerProxy());

    return m;
  }
}

class XSProxyPlaceholder extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Placeholder";

    ///**@@@  3 替换类构造函数
    return {
      regClassName: () => XSProxyPlaceholder()..init(className: regClassName)
    };
  }

  @override
  Placeholder constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var widget = Placeholder(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: const Color(0xFF455A64)),
      strokeWidth: XSJSParse.getDouble(context, bo, map, "strokeWidth", defaultValue: 2.0),
      fallbackWidth: XSJSParse.getDouble(context, bo, map, "fallbackWidth", defaultValue: 400.0),
      fallbackHeight: XSJSParse.getDouble(context, bo, map, "fallbackHeight", defaultValue: 400.0),
    );
    return widget;
  }
}

class XSProxyEmptyDataWidget extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EmptyDataWidget";
    return {
      regClassName: () => XSProxyEmptyDataWidget()..init(className: regClassName)
    };
  }

  @override
  EmptyDataWidget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return EmptyDataWidget(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getString(context, bo, map, "title", defaultValue: "没有更多数据"),
      imageName: XSJSParse.getString(context, bo, map, "imageName", defaultValue: "assets/images/nodata.png"),
      imageSize: XSJSParse.getDouble(context, bo, map, "imageSize", defaultValue: 128),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor", defaultValue: Colors.transparent),
      titleStyle: XSJSParse.getTextStyle(context, bo, map, "titleStyle", defaultValue: const TextStyle(fontSize: 14, color: Colors.grey)),
    );
  }
}
