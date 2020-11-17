//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';

// TODO List
// 1、默认值是私有类的方法

///把Widget按分类注册，方便写代码，
///分类：Material/Layout/Text/(Assets.Images.icons)/input...
///参照了官网https://flutter.io/docs/development/ui/widgets
class XSProxyRegisterHelperMaterialSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyMaterial.registerProxy());
    m.addAll(XSProxyScaffold.registerProxy());
    m.addAll(XSProxyScaffoldState.registerProxy());
    m.addAll(XSProxyAppBar.registerProxy());
    m.addAll(XSProxyBottomAppBar.registerProxy());
    m.addAll(XSProxyBottomNavigationBar.registerProxy());

    /// Button
    m.addAll(XSProxyCloseButtonSeries.registerProxy());
    m.addAll(XSProxyRawMaterialButton.registerProxy());
    m.addAll(XSProxyButtonSeries.registerProxy());

    m.addAll(XSProxyIcon.registerProxy());
    m.addAll(XSProxyCard.registerProxy());

    m.addAll(XSProxyMergeSemantics.registerProxy());
    m.addAll(XSProxyPopupMenuItem.registerProxy());
    m.addAll(XSProxyFlexibleSpaceBar.registerProxy());

    m.addAll(XSProxyRadio.registerProxy());
    m.addAll(XSProxySemantics.registerProxy());
    m.addAll(XSProxyCircleBorder.registerProxy());
    m.addAll(XSProxySafeArea.registerProxy());

    m.addAll(XSProxyBuilder.registerProxy());
    m.addAll(XSProxyDefaultTabController.registerProxy());

    m.addAll(XSProxyTabBar.registerProxy());
    m.addAll(XSProxyTabBarView.registerProxy());
    m.addAll(XSProxyTabController.registerProxy());
    m.addAll(XSProxyTab.registerProxy());

    m.addAll(XSProxyNavigator.registerProxy());
    m.addAll(XSProxyMaterialPageRoute.registerProxy());
    m.addAll(XSProxyRouteSettings.registerProxy());

    m.addAll(XSProxyScrollbar.registerProxy());

    m.addAll(XSProxySnackBar.registerProxy());
    m.addAll(XSProxyFlutterLogo.registerProxy());

    return m;
  }
}

//-------------- A -----------------
//****** AppBar ******
class XSProxyAppBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "AppBar";
    return {
      regClassName1: () => XSProxyAppBar()..init(className: regClassName1)
    };
  }

  @override
  AppBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => AppBar(
        key: XSJSParse.getKey(context, bo, map, "key"),
        leading: XSJSParse.getWidget(context, bo, map, "leading"),
        automaticallyImplyLeading: XSJSParse.getBool(context, bo, map, "automaticallyImplyLeading", defaultValue: true),
        title: XSJSParse.getWidget(context, bo, map, "title"),
        actions: XSJSParse.getWidgetList(context, bo, map, "actions"),
        flexibleSpace: XSJSParse.getWidget(context, bo, map, "flexibleSpace"),
        bottom: XSJSParse.getWidget(context, bo, map, "bottom"),
        elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 4.0),
        backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
        brightness: XSJSParse.getBrightness(context, bo, map, "brightness"),
        primary: XSJSParse.getBool(context, bo, map, "primary", defaultValue: true),
        centerTitle: XSJSParse.getBool(context, bo, map, "centerTitle", defaultValue: true),
        titleSpacing: XSJSParse.getDouble(context, bo, map, "titleSpacing", defaultValue: NavigationToolbar.kMiddleSpacing),
        toolbarOpacity: XSJSParse.getDouble(context, bo, map, "toolbarOpacity", defaultValue: 1.0),
        bottomOpacity: XSJSParse.getDouble(context, bo, map, "bottomOpacity", defaultValue: 1.0),
      );
}

//-------------- B -----------------
//****** XSProxyBottomNavigationBar ******
class XSProxyBottomNavigationBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "BottomNavigationBar";
    return {
      regClassName1: () => XSProxyBottomNavigationBar()..init(className: regClassName1)
    };
  }

  @override
  BottomNavigationBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => BottomNavigationBar(
        key: XSJSParse.getKey(context, bo, map, "key"),
        items: toListT<BottomNavigationBarItem>(XSJSParse.getObject(context, bo, map, "items")),
        onTap: XSJSParse.getValueChanged<int>(context, bo, map, "onTap"),
        currentIndex: XSJSParse.getInt(context, bo, map, "currentIndex", defaultValue: 0),
        type: XSJSParse.getBottomNavigationBarType(context, bo, map, "type"),
        fixedColor: XSJSParse.getColor(context, bo, map, "fixedColor"),
        iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 24.0),
      );
}

//****** XSProxyBottomNavigationBar ******
class XSProxyBottomAppBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "BottomAppBar";
    return {
      regClassName1: () => XSProxyBottomAppBar()..init(className: regClassName1)
    };
  }

  @override
  BottomAppBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => BottomAppBar(
        key: XSJSParse.getKey(context, bo, map, "key"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 8.0),
        shape: XSJSParse.getObject(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        notchMargin: XSJSParse.getDouble(context, bo, map, "notchMargin", defaultValue: 4.0),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

///****** 常用Button系列类 ******
class XSProxyButtonSeries extends XSJsonObjProxy {
  static final String regClassName1 = "FlatButton";
  static final String regClassName2 = "RaisedButton";
  static final String regClassName3 = "FloatingActionButton";
  static final String regClassName4 = "IconButton";
  static final String regClassName5 = "DropdownButton";
  static final String regClassName6 = "PopupMenuButton";
  static final String regClassName7 = "ButtonBar";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName1: () => XSProxyButtonSeries()..init(className: regClassName1),
        regClassName2: () => XSProxyButtonSeries()..init(className: regClassName2),
        regClassName3: () => XSProxyButtonSeries()..init(className: regClassName3),
        regClassName4: () => XSProxyButtonSeries()..init(className: regClassName4),
        regClassName5: () => XSProxyButtonSeries()..init(className: regClassName5),
        regClassName6: () => XSProxyButtonSeries()..init(className: regClassName6),
        regClassName7: () => XSProxyButtonSeries()..init(className: regClassName7),
      };

  ///*********************************************************************

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName1, constructor: constructorFlatButton);
    registerConstructor(className: regClassName2, constructor: constructorRaisedButton);
    registerConstructor(className: regClassName3, constructor: constructorFloatingActionButton);
    registerConstructor(className: regClassName4, constructor: constructorIconButton);
    registerConstructor(className: regClassName5, constructor: constructorDropdownButton);
    registerConstructor(className: regClassName6, constructor: constructorPopupMenuButton);
    registerConstructor(className: regClassName7, constructor: constructorButtonBar);

    registerStaticFunction(className: regClassName1, staticFunctionName: "icon", staticFunction: functionFlatButtonIcon);

    registerStaticFunction(className: regClassName2, staticFunctionName: "icon", staticFunction: functionRaisedButtonIcon);
  }

  Widget constructorFlatButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => FlatButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        colorBrightness: XSJSParse.getBrightness(context, bo, map, "colorBrightness"),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        shape: XSJSParse.getObject(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );

  Widget functionFlatButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => FlatButton.icon(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        colorBrightness: XSJSParse.getBrightness(context, bo, map, "colorBrightness"),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        shape: XSJSParse.getObject(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        label: XSJSParse.getWidget(context, bo, map, "label"),
      );

  Widget constructorRaisedButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => RaisedButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        colorBrightness: XSJSParse.getBrightness(context, bo, map, "colorBrightness"),
        elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
        highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
        disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation"),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        shape: XSJSParse.getObject(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );

  Widget functionRaisedButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => RaisedButton.icon(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        colorBrightness: XSJSParse.getBrightness(context, bo, map, "colorBrightness"),
        elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
        highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
        disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation"),
        shape: XSJSParse.getObject(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration"),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        label: XSJSParse.getWidget(context, bo, map, "label"),
      );

  Widget constructorFloatingActionButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => FloatingActionButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        tooltip: XSJSParse.getString(context, bo, map, "tooltip"),
        foregroundColor: XSJSParse.getColor(context, bo, map, "foregroundColor"),
        backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
        heroTag: XSJSParse.getObject(context, bo, map, "heroTag"), // TODO: defaultValue
        elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 6.0),
        highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation", defaultValue: 12.0),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        mini: XSJSParse.getBool(context, bo, map, "mini", defaultValue: false),
        shape: XSJSParse.getObject(context, bo, map, "shape", defaultValue: const CircleBorder()),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        isExtended: XSJSParse.getBool(context, bo, map, "isExtended", defaultValue: false),
      );

  Widget constructorIconButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => IconButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 24.0),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: const EdgeInsets.all(8.0)),
        alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        tooltip: XSJSParse.getString(context, bo, map, "tooltip"),
      );

  Widget constructorDropdownButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => DropdownButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        items: toListT<DropdownMenuItem>(XSJSParse.getObject(context, bo, map, "items")),
        value: XSJSParse.getObject(context, bo, map, "value"),
        hint: XSJSParse.getWidget(context, bo, map, "hint"),
        disabledHint: XSJSParse.getWidget(context, bo, map, "disabledHint"),
        onChanged: XSJSParse.getValueChanged<dynamic>(context, bo, map, "onChanged"),
        elevation: XSJSParse.getInt(context, bo, map, "elevation", defaultValue: 8),
        style: XSJSParse.getTextStyle(context, bo, map, "style"),
        iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 24.0),
        isDense: XSJSParse.getBool(context, bo, map, "isDense", defaultValue: false),
        isExpanded: XSJSParse.getBool(context, bo, map, "isExpanded", defaultValue: false),
      );

  Widget constructorPopupMenuButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => PopupMenuButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        itemBuilder: (BuildContext context) {
          return toListT<PopupMenuEntry>(XSJSParse.getObject(context, bo, map, "children"));
        },
        initialValue: XSJSParse.getObject(context, bo, map, "initialValue"),
        onSelected: XSJSParse.getValueChanged<dynamic>(context, bo, map, "onSelected"),
        onCanceled: () {
          PopupMenuCanceled cb = () {
            bo.eventCallback(map["onCanceled"]);
          };
          return cb;
        },
        tooltip: XSJSParse.getString(context, bo, map, "tooltip"),
        elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 8.0),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: const EdgeInsets.all(8.0)),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        offset: XSJSParse.getOffset(context, bo, map, "offset", defaultValue: Offset.zero),
      );

  Widget constructorButtonBar(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => ButtonBar(
        key: XSJSParse.getKey(context, bo, map, "key"),
        alignment: XSJSParse.getMainAxisAlignment(context, bo, map, "alignment"),
        mainAxisSize: XSJSParse.getMainAxisSize(context, bo, map, "mainAxisSize", defaultValue: MainAxisSize.max),
        children: XSJSParse.getWidgetList(context, bo, map, "children", defaultValue: const <Widget>[]),
      );
}

///****** Builder ******
class XSProxyBuilder extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Builder";
    return {
      regClassName: () => XSProxyBuilder()..init(className: regClassName)
    };
  }

  @override
  Builder constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var widget = Builder(
      key: XSJSParse.getKey(context, bo, map, "key"),
      builder: (BuildContext context) {
        return XSJSParse.getWidget(context, bo, map, "child");
      },
    );
    return widget;
  }
}

//-------------- C -----------------
//****** CloseButtonSeries ******
///BackButton系列,负责所有回退button的生成
class XSProxyCloseButtonSeries extends XSJsonObjProxy {
  static final String regClassName1 = "CloseButton";
  static final String regClassName2 = "BackButton";
  static final String regClassName3 = "BackButtonIcon";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName1: () => XSProxyCloseButtonSeries()..init(className: regClassName1),
      regClassName2: () => XSProxyCloseButtonSeries()..init(className: regClassName2),
      regClassName3: () => XSProxyCloseButtonSeries()..init(className: regClassName3)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName1, constructor: constructorCloseButton);
    registerConstructor(className: regClassName2, constructor: constructorBackButton);
    registerConstructor(className: regClassName3, constructor: constructorBackButtonIcon);
  }

  Widget constructorCloseButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CloseButton(key: XSJSParse.getKey(context, bo, map, "key"));
  }

  Widget constructorBackButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BackButton(key: XSJSParse.getKey(context, bo, map, "key"));
  }

  Widget constructorBackButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BackButtonIcon(key: XSJSParse.getKey(context, bo, map, "key"));
  }
}

//****** Card ******
class XSProxyCard extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Card";
    return {
      regClassName: () => XSProxyCard()..init(className: regClassName)
    };
  }

  @override
  Card constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Card(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shape: XSJSParse.getObject(context, bo, map, "shape"),
      margin: XSJSParse.getEdgeInsets(context, bo, map, "margin", defaultValue: const EdgeInsets.all(4.0)),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      semanticContainer: XSJSParse.getBool(context, bo, map, "semanticContainer", defaultValue: true),
    );
  }
}

//****** CircleBorder ******
class XSProxyCircleBorder extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CircleBorder";
    return {
      regClassName: () => XSProxyCircleBorder()..init(className: regClassName)
    };
  }

  @override
  CircleBorder constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CircleBorder(
      side: XSJSParse.getBorderSide(context, bo, map, "side", defaultValue: BorderSide.none),
    );
  }
}

//-------------- D -----------------
//****** DefaultTabController ******
class XSProxyDefaultTabController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DefaultTabController";
    return {
      regClassName: () => XSProxyDefaultTabController()..init(className: regClassName)
    };
  }

  @override
  DefaultTabController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DefaultTabController(
      key: XSJSParse.getKey(context, bo, map, "key"),
      length: XSJSParse.getInt(context, bo, map, "length"),
      initialIndex: XSJSParse.getInt(context, bo, map, "initialIndex", defaultValue: 0),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- F -----------------
//****** FlutterLogo ******
class XSProxyFlutterLogo extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FlutterLogo";
    return {
      regClassName: () => XSProxyFlutterLogo()..init(className: regClassName)
    };
  }

  @override
  FlutterLogo constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FlutterLogo(
      key: XSJSParse.getKey(context, bo, map, "key"),
      size: XSJSParse.getDouble(context, bo, map, "size", defaultValue: 24),
      colors: XSJSParse.getColor(context, bo, map, "colors"),
      style: XSJSParse.getFlutterLogoStyle(context, bo, map, "style"),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: const Color(0xFF616161)),
      duration: XSJSParse.getDuration(context, bo, map, "duration", defaultValue: const Duration(milliseconds: 750)),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.fastOutSlowIn),
    );
  }
}

//****** FlexibleSpaceBar ******
class XSProxyFlexibleSpaceBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FlexibleSpaceBar";
    return {
      regClassName: () => XSProxyFlexibleSpaceBar()..init(className: regClassName)
    };
  }

  @override
  FlexibleSpaceBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FlexibleSpaceBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      background: XSJSParse.getWidget(context, bo, map, "background"),
      centerTitle: XSJSParse.getBool(context, bo, map, "centerTitle"),
      collapseMode: XSJSParse.getCollapseMode(context, bo, map, "collapseMode", defaultValue: CollapseMode.parallax),
    );
  }
}

//-------------- I -----------------
//****** Icon ******
class XSProxyIcon extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "Icon";
    return {
      regClassName1: () => XSProxyIcon()..init(className: regClassName1)
    };
  }

  @override
  Icon constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Icon(
      XSJSParse.getIconData(context, bo, map, "icon"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      size: XSJSParse.getDouble(context, bo, map, "size"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
    );
  }
}

//-------------- M -----------------
//****** Material ******
class XSProxyMaterial extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Material";
    return {
      regClassName: () => XSProxyMaterial()..init(className: regClassName)
    };
  }

  @override
  Material constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Material(
      key: XSJSParse.getKey(context, bo, map, "key"),
      type: XSJSParse.getMaterialType(context, bo, map, "type", defaultValue: MaterialType.canvas),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 0.0),
      color: XSJSParse.getColor(context, bo, map, "color"),
      shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor", defaultValue: const Color(0xFF000000)),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius"),
      shape: XSJSParse.getObject(context, bo, map, "shape"),
      borderOnForeground: XSJSParse.getBool(context, bo, map, "borderOnForeground", defaultValue: true),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration", defaultValue: kThemeChangeDuration),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** MaterialButton ******
class XSProxyMaterialButton extends XSJsonObjProxy {
  static String regClassName = "MaterialButton";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "MaterialButton";
    return {
      regClassName: () => XSProxyMaterialButton()..init(className: regClassName)
    };
  }

  @override
  MaterialButton constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
      textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
      textColor: XSJSParse.getColor(context, bo, map, "textColor"),
      disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      colorBrightness: XSJSParse.getBrightness(context, bo, map, "colorBrightness"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
      disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      shape: XSJSParse.getObject(context, bo, map, "shape"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration"),
      minWidth: XSJSParse.getDouble(context, bo, map, "minWidth"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** MergeSemantics ******
class XSProxyMergeSemantics extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "MergeSemantics";
    return {
      regClassName: () => XSProxyMergeSemantics()..init(className: regClassName)
    };
  }

  @override
  MergeSemantics constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var widget = MergeSemantics(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
    return widget;
  }
}

//****** MaterialPageRoute ******
class XSProxyMaterialPageRoute extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    ///**@@@  2 替换类名字符串
    final String regClassName = "MaterialPageRoute";

    ///**@@@  3 替换类构造函数
    return {
      regClassName: () => XSProxyMaterialPageRoute()..init(className: regClassName)
    };
  }

  @override
  MaterialPageRoute constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialPageRoute(
      builder: (BuildContext context) {
        return (XSJSParse.getWidget(context, bo, map, "child"));
      },
      settings: XSJSParse.getRouteSettings(context, bo, map, "settings"),
      maintainState: XSJSParse.getBool(context, bo, map, "maintainState", defaultValue: true),
      fullscreenDialog: XSJSParse.getBool(context, bo, map, "fullscreenDialog", defaultValue: false),
    );
  }
}

//-------------- N -----------------
//****** Navigator ******
class XSProxyNavigator extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Navigator";
    return {
      regClassName: () => XSProxyNavigator()..init(className: regClassName)
    };
  }

  @override
  Navigator constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    //XSJSLog.log("JSON:" + map.toString());
    return Navigator(
      key: XSJSParse.getKey(context, bo, map, "key"),
      initialRoute: XSJSParse.getString(context, bo, map, "initialRoute"),
      onGenerateRoute: XSJSParse.getObject(context, bo, map, "onGenerateRoute"),
      onUnknownRoute: XSJSParse.getObject(context, bo, map, "onUnknownRoute"),
      observers: XSJSParse.getObject(context, bo, map, "observers", defaultValue: const <NavigatorObserver>[]),
    );
  }
}

//-------------- P -----------------
//****** PopupMenuItem ******
class XSProxyPopupMenuItem extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PopupMenuItem";
    return {
      regClassName: () => XSProxyPopupMenuItem()..init(className: regClassName)
    };
  }

  @override
  PopupMenuItem constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return PopupMenuItem(
      key: XSJSParse.getKey(context, bo, map, "key"),
      value: XSJSParse.getObject(context, bo, map, "value"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled", defaultValue: true),
      height: XSJSParse.getDouble(context, bo, map, "height", defaultValue: 48.0),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- R -----------------
//****** RawMaterialButton ******
class XSProxyRawMaterialButton extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "RawMaterialButton";
    return {
      regClassName: () => XSProxyNavigator()..init(className: regClassName)
    };
  }

  @override
  RawMaterialButton constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return RawMaterialButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
      fillColor: XSJSParse.getColor(context, bo, map, "fillColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 2.0),
      highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation", defaultValue: 8.0),
      disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation", defaultValue: 0.0),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: EdgeInsets.zero),
      constraints: XSJSParse.getBoxConstraints(context, bo, map, "constraints", defaultValue: const BoxConstraints(minWidth: 88.0, minHeight: 36.0)),
      shape: XSJSParse.getObject(context, bo, map, "shape", defaultValue: const RoundedRectangleBorder()),
      animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration", defaultValue: kThemeChangeDuration),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Radio ******
class XSProxyRadio extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Radio";
    return {
      regClassName: () => XSProxyRadio()..init(className: regClassName)
    };
  }

  @override
  Radio constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    //都转成字符串，便于Radio 比较和回传
    var value = json.encode(map["value"]);
    var groupValue = json.encode(map["groupValue"]);

    return Radio(
      key: XSJSParse.getKey(context, bo, map, "key"),
      value: value,
      groupValue: groupValue,
      onChanged: XSJSParse.getValueChanged<dynamic>(context, bo, map, "onChanged"),
      activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
    );
  }
}

//****** RouteSettings ******
class XSProxyRouteSettings extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "RouteSettings";
    return {
      regClassName: () => XSProxyRouteSettings()..init(className: regClassName)
    };
  }

  @override
  RouteSettings constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var widget = RouteSettings(
      name: XSJSParse.getString(context, bo, map, "name"),
      //isInitialRoute: XSJSParse.getKey(context, bo, map, "isInitialRoute"], defaultValue: false), //1.15.21 d
      arguments: XSJSParse.getObject(context, bo, map, "arguments"),
    );
    return widget;
  }
}

//-------------- S -----------------
//****** Scaffold ******
class XSProxyScaffold extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "Scaffold";
    return {
      regClassName1: () => XSProxyScaffold()..init(className: regClassName1)
    };
  }

  @override
  Scaffold constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Scaffold(
      key: XSJSParse.getKey(context, bo, map, "key"),
      appBar: XSJSParse.getWidget(context, bo, map, "appBar"),
      body: XSJSParse.getWidget(context, bo, map, "body"),
      floatingActionButton: XSJSParse.getWidget(context, bo, map, "floatingActionButton"),
      floatingActionButtonLocation: XSJSParse.getFloatingActionButtonLocation(context, bo, map, "floatingActionButtonLocation"),
      persistentFooterButtons: XSJSParse.getWidgetList(context, bo, map, "persistentFooterButtons"),
      drawer: XSJSParse.getWidget(context, bo, map, "drawer"),
      endDrawer: XSJSParse.getWidget(context, bo, map, "endDrawer"),
      bottomNavigationBar: XSJSParse.getWidget(context, bo, map, "bottomNavigationBar"),
      bottomSheet: XSJSParse.getWidget(context, bo, map, "bottomSheet"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      resizeToAvoidBottomPadding: XSJSParse.getBool(context, bo, map, "resizeToAvoidBottomPadding", defaultValue: true),
      primary: XSJSParse.getBool(context, bo, map, "primary", defaultValue: true),
    );
  }
}

//****** ScaffoldState ******
class XSProxyScaffoldState extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ScaffoldState";

    return {
      regClassName: () => XSProxyScaffoldState()..init(className: regClassName)
    };
  }

  @override
  ScaffoldState constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ScaffoldState();
  }
}

//****** Semantics ******
class XSProxySemantics extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Semantics";
    return {
      regClassName: () => XSProxySemantics()..init(className: regClassName)
    };
  }

  @override
  Semantics constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Semantics(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      container: XSJSParse.getBool(context, bo, map, "container", defaultValue: false),
      explicitChildNodes: XSJSParse.getBool(context, bo, map, "explicitChildNodes", defaultValue: false),
      excludeSemantics: XSJSParse.getBool(context, bo, map, "excludeSemantics", defaultValue: false),
      enabled: XSJSParse.getBool(context, bo, map, "enabled"),
      checked: XSJSParse.getBool(context, bo, map, "checked"),
      selected: XSJSParse.getBool(context, bo, map, "selected"),
      toggled: XSJSParse.getBool(context, bo, map, "toggled"),
      button: XSJSParse.getBool(context, bo, map, "button"),
      header: XSJSParse.getBool(context, bo, map, "header"),
      textField: XSJSParse.getBool(context, bo, map, "textField"),
      focused: XSJSParse.getBool(context, bo, map, "focused"),
      inMutuallyExclusiveGroup: XSJSParse.getBool(context, bo, map, "inMutuallyExclusiveGroup"),
      obscured: XSJSParse.getBool(context, bo, map, "obscured"),
      scopesRoute: XSJSParse.getBool(context, bo, map, "scopesRoute"),
      namesRoute: XSJSParse.getBool(context, bo, map, "namesRoute"),
      hidden: XSJSParse.getBool(context, bo, map, "hidden"),
      image: XSJSParse.getBool(context, bo, map, "image"),
      liveRegion: XSJSParse.getBool(context, bo, map, "liveRegion"),
      label: XSJSParse.getString(context, bo, map, "label"),
      value: XSJSParse.getString(context, bo, map, "value"),
      increasedValue: XSJSParse.getString(context, bo, map, "increasedValue"),
      decreasedValue: XSJSParse.getString(context, bo, map, "decreasedValue"),
      hint: XSJSParse.getString(context, bo, map, "hint"),
      onTapHint: XSJSParse.getString(context, bo, map, "onTapHint"),
      onLongPressHint: XSJSParse.getString(context, bo, map, "onLongPressHint"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      onScrollLeft: XSJSParse.getVoidCallback(context, bo, map, "onScrollLeft"),
      onScrollRight: XSJSParse.getVoidCallback(context, bo, map, "onScrollRight"),
      onScrollUp: XSJSParse.getVoidCallback(context, bo, map, "onScrollUp"),
      onScrollDown: XSJSParse.getVoidCallback(context, bo, map, "onScrollDown"),
      onIncrease: XSJSParse.getVoidCallback(context, bo, map, "onIncrease"),
      onDecrease: XSJSParse.getVoidCallback(context, bo, map, "onDecrease"),
      onCopy: XSJSParse.getVoidCallback(context, bo, map, "onCopy"),
      onCut: XSJSParse.getVoidCallback(context, bo, map, "onCut"),
      onPaste: XSJSParse.getVoidCallback(context, bo, map, "onPaste"),
      onDismiss: XSJSParse.getVoidCallback(context, bo, map, "onDismiss"),
      onMoveCursorForwardByCharacter: XSJSParse.getValueChanged<bool>(context, bo, map, "onMoveCursorForwardByCharacter"),
      onMoveCursorBackwardByCharacter: XSJSParse.getValueChanged<bool>(context, bo, map, "onMoveCursorBackwardByCharacter"),
      onDidGainAccessibilityFocus: XSJSParse.getVoidCallback(context, bo, map, "onDidGainAccessibilityFocus"),
      onDidLoseAccessibilityFocus: XSJSParse.getVoidCallback(context, bo, map, "onDidLoseAccessibilityFocus"),
    );
  }
}

//****** SafeArea ******
class XSProxySafeArea extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SafeArea";
    return {
      regClassName: () => XSProxySafeArea()..init(className: regClassName)
    };
  }

  @override
  SafeArea constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SafeArea(
      key: XSJSParse.getKey(context, bo, map, "key"),
      left: XSJSParse.getBool(context, bo, map, "left", defaultValue: true),
      top: XSJSParse.getBool(context, bo, map, "top", defaultValue: true),
      right: XSJSParse.getBool(context, bo, map, "right", defaultValue: true),
      bottom: XSJSParse.getBool(context, bo, map, "bottom", defaultValue: true),
      minimum: XSJSParse.getEdgeInsets(context, bo, map, "minimum", defaultValue: EdgeInsets.zero),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Scrollbar ******
class XSProxyScrollbar extends XSJsonObjProxy {
  static String regClassName = "Scrollbar";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyScrollbar()..init(className: regClassName)
    };
  }

  @override
  Scrollbar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Scrollbar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** SnackBar ******
class XSProxySnackBar extends XSJsonObjProxy {
  static String regClassName = "SnackBar";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxySnackBar()..init(className: regClassName)
    };
  }

  @override
  SnackBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SnackBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      content: XSJSParse.getWidget(context, bo, map, "content"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shape: XSJSParse.getObject(context, bo, map, "shape"),
      behavior: XSJSParse.getObject(context, bo, map, "behavior"),
      action: XSJSParse.getObject(context, bo, map, "action"),
      duration: XSJSParse.getDuration(context, bo, map, "duration", defaultValue: Duration(milliseconds: 4000)),
      animation: XSJSParse.getAnimationDouble(context, bo, map, "animation"),
      onVisible: XSJSParse.getObject(context, bo, map, "onVisible"),
    );
  }
}

//-------------- T -----------------
//****** TabBar ******
class XSProxyTabBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "TabBar";
    return {
      regClassName1: () => XSProxyTabBar()..init(className: regClassName1)
    };
  }

  @override
  TabBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TabBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      tabs: XSJSParse.getWidgetList(context, bo, map, "tabs"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      isScrollable: XSJSParse.getBool(context, bo, map, "isScrollable", defaultValue: false),
      indicatorColor: XSJSParse.getColor(context, bo, map, "indicatorColor"),
      indicatorWeight: XSJSParse.getDouble(context, bo, map, "indicatorWeight", defaultValue: 2.0),
      indicatorPadding: XSJSParse.getEdgeInsets(context, bo, map, "indicatorPadding", defaultValue: EdgeInsets.zero),
      indicator: XSJSParse.getDecoration(context, bo, map, "indicator"),
      indicatorSize: XSJSParse.getTabBarIndicatorSize(context, bo, map, "indicatorSize"),
      labelColor: XSJSParse.getColor(context, bo, map, "labelColor"),
      labelStyle: XSJSParse.getTextStyle(context, bo, map, "labelStyle"),
      labelPadding: XSJSParse.getEdgeInsets(context, bo, map, "labelPadding"),
      unselectedLabelColor: XSJSParse.getColor(context, bo, map, "unselectedLabelColor"),
      unselectedLabelStyle: XSJSParse.getTextStyle(context, bo, map, "unselectedLabelStyle"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.down),
      onTap: XSJSParse.getValueChanged<int>(context, bo, map, "onTap"),
    );
  }
}

//****** TabController ******
class XSProxyTabController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TabController";
    return {
      regClassName: () => XSProxyTabController()..init(className: regClassName)
    };
  }

  @override
  TabController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TabController(
      initialIndex: XSJSParse.getInt(context, bo, map, "initialIndex", defaultValue: 0),
      length: XSJSParse.getInt(context, bo, map, "length"),
      vsync: XSJSParse.getObject(context, bo, map, "vsync"),
    );
  }
}

//****** Tab ******
class XSProxyTab extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Tab";
    return {
      regClassName: () => XSProxyTab()..init(className: regClassName)
    };
  }

  @override
  Tab constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Tab(
      key: XSJSParse.getKey(context, bo, map, "key"),
      text: XSJSParse.getString(context, bo, map, "text"),
      icon: XSJSParse.getWidget(context, bo, map, "icon"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** TabController ******
class XSProxyTabBarView extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TabBarView";
    return {
      regClassName: () => XSProxyTabBarView()..init(className: regClassName)
    };
  }

  @override
  TabBarView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TabBarView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.down),
    );
  }
}
