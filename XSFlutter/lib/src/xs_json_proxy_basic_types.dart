//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'xs_js_parse.dart';
import 'package:flutter/material.dart';

import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'package:flutter/services.dart';
import 'package:flutter/physics.dart';

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperBasicTypesSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyAssetBundle.registerProxy());
    m.addAll(XSProxyAnnotatedRegion.registerProxy());

    m.addAll(XSProxyBottomNavigationBarItem.registerProxy());

    m.addAll(XSProxyCircularNotchedRectangle.registerProxy());
    m.addAll(XSProxyClipRRect.registerProxy());
    m.addAll(XSProxyClipRect.registerProxy());
    m.addAll(XSProxyClipOval.registerProxy());
    m.addAll(XSProxyCircleAvatar.registerProxy());
    m.addAll(XSProxyChip.registerProxy());

    m.addAll(XSProxyDropdownMenuItem.registerProxy());

    m.addAll(XSProxyNotificationListener.registerProxy());

    m.addAll(XSProxyOpacity.registerProxy());
    m.addAll(XSProxyPositioned.registerProxy());
    m.addAll(XSProxyPositionedDirectional.registerProxy());
    m.addAll(XSProxyPreferredSize.registerProxy());

    m.addAll(XSProxySystemUiOverlayStyle.registerProxy());
    m.addAll(XSProxySlider.registerProxy());
    m.addAll(XSProxySpringDescription.registerProxy());

    m.addAll(XSProxyTableRow.registerProxy());
    m.addAll(XSProxyTheme.registerProxy());
    m.addAll(XSProxyTestWidget.registerProxy());
    return m;
  }
}

//-------------- A -----------------
//****** AssetBundle ******
class XSProxyAssetBundle extends XSJsonObjProxy {
  ///把自己能处理的类注册到分发器中
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "PlatformAssetBundle";
    final String regClassName2 = "NetworkAssetBundle";
    return {
      regClassName1: () => XSProxyAssetBundle()..init(className: regClassName1),
      regClassName2: () => XSProxyAssetBundle()..init(className: regClassName2)
    };
  }

  ///*********************************************************************
  @override
  void init({String className}) {
    super.init(className: className);

    final String regClassName1 = "PlatformAssetBundle";
    final String regClassName2 = "NetworkAssetBundle";

    registerConstructor(className: regClassName1, constructor: constructorPlatformAssetBundle);
    registerConstructor(className: regClassName2, constructor: constructorNetworkAssetBundle);
  }

  ///

  PlatformAssetBundle constructorPlatformAssetBundle(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return PlatformAssetBundle();
  }

  NetworkAssetBundle constructorNetworkAssetBundle(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return NetworkAssetBundle(XSJSParse.getUri(context, bo, map, "baseUrl"));
  }
}

//****** AnnotatedRegion ******
class XSProxyAnnotatedRegion extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnnotatedRegion";
    return {
      regClassName: () => XSProxyAnnotatedRegion()..init(className: regClassName)
    };
  }

  @override
  AnnotatedRegion constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnnotatedRegion(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      value: XSJSParse.getObject(context, bo, map, "value"),
      sized: XSJSParse.getBool(context, bo, map, "sized", defaultValue: true),
    );
  }
}

//-------------- B -----------------
//****** BottomNavigationBarItem ******
class XSProxyBottomNavigationBarItem extends XSJsonObjProxy {
  static String regClassName = "BottomNavigationBarItem";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyBottomNavigationBarItem()..init(className: regClassName)
    };
  }

  @override
  BottomNavigationBarItem constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BottomNavigationBarItem(
      icon: XSJSParse.getWidget(context, bo, map, "icon"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      activeIcon: XSJSParse.getWidget(context, bo, map, "activeIcon"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
    );
  }
}

//-------------- C -----------------
//****** CircleAvatar ******
class XSProxyCircleAvatar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CircleAvatar";
    return {
      regClassName: () => XSProxyCircleAvatar()..init(className: regClassName)
    };
  }

  @override
  CircleAvatar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CircleAvatar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      backgroundImage: XSJSParse.getObject(context, bo, map, "backgroundImage"),
      foregroundColor: XSJSParse.getColor(context, bo, map, "foregroundColor"),
      radius: XSJSParse.getDouble(context, bo, map, "radius"),
      minRadius: XSJSParse.getDouble(context, bo, map, "minRadius"),
      maxRadius: XSJSParse.getDouble(context, bo, map, "maxRadius"),
    );
  }
}
/* Key key,
    this.child,
    this.backgroundColor,
    this.backgroundImage,
    this.onBackgroundImageError,
    this.foregroundColor,
    this.radius,
    this.minRadius,
    this.maxRadius,*/

//****** Chip ******
class XSProxyChip extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Chip";
    return {
      regClassName: () => XSProxyChip()..init(className: regClassName)
    };
  }

  @override
  Chip constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Chip(
      key: XSJSParse.getKey(context, bo, map, "key"),
      avatar: XSJSParse.getWidget(context, bo, map, "avatar"),
      label: XSJSParse.getWidget(context, bo, map, "label"),
      labelStyle: XSJSParse.getTextStyle(context, bo, map, "labelStyle"),
      labelPadding: XSJSParse.getEdgeInsets(context, bo, map, "labelPadding"),
      deleteIcon: XSJSParse.getWidget(context, bo, map, "deleteIcon"),
      onDeleted: XSJSParse.getVoidCallback(context, bo, map, "onDeleted"),
      deleteIconColor: XSJSParse.getColor(context, bo, map, "deleteIconColor"),
      deleteButtonTooltipMessage: XSJSParse.getString(context, bo, map, "deleteButtonTooltipMessage"),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      visualDensity: XSJSParse.getVisualDensity(context, bo, map, "visualDensity"),
      shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor"),
    );
  }
}

//****** CircularNotchedRectangle ******
class XSProxyCircularNotchedRectangle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CircularNotchedRectangle";
    return {
      regClassName: () => XSProxyCircularNotchedRectangle()..init(className: regClassName)
    };
  }

  @override
  CircularNotchedRectangle constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CircularNotchedRectangle();
  }
}

//****** ClipRRect ******
class XSProxyClipRRect extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ClipRRect";
    return {
      regClassName: () => XSProxyClipRRect()..init(className: regClassName)
    };
  }

  @override
  ClipRRect constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClipRRect(
      key: XSJSParse.getKey(context, bo, map, "key"),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius", defaultValue: BorderRadius.zero),
      clipper: XSJSParse.getObject(context, bo, map, "clipper"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.antiAlias),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** ClipRect ******
class XSProxyClipRect extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ClipRect";
    return {
      regClassName: () => XSProxyClipRect()..init(className: regClassName)
    };
  }

  @override
  ClipRect constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClipRect(
      key: XSJSParse.getKey(context, bo, map, "key"),
      clipper: XSJSParse.getObject(context, bo, map, "clipper"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.hardEdge),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** ClipOval ******
class XSProxyClipOval extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ClipOval";
    return {
      regClassName: () => XSProxyClipOval()..init(className: regClassName)
    };
  }

  @override
  ClipOval constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClipOval(
      key: XSJSParse.getKey(context, bo, map, "key"),
      clipper: XSJSParse.getObject(context, bo, map, "clipper"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.antiAlias),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- D -----------------
//****** DropdownMenuItem ******
class XSProxyDropdownMenuItem extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DropdownMenuItem";
    return {
      regClassName: () => XSProxyDropdownMenuItem()..init(className: regClassName)
    };
  }

  @override
  DropdownMenuItem constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DropdownMenuItem(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      value: XSJSParse.getObject(context, bo, map, "value"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- F -----------------
//****** ColorFiltered ******
class XSProxyColorFiltered extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ColorFiltered";
    return {
      regClassName: () => XSProxyColorFiltered()..init(className: regClassName)
    };
  }

  @override
  ColorFiltered constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ColorFiltered(
      key: XSJSParse.getKey(context, bo, map, "key"),
      colorFilter: XSJSParse.getColorFilter(context, bo, map, "colorFilter"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- I -----------------

//-------------- N -----------------
//****** NotificationListener ******
class XSProxyNotificationListener extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "NotificationListener";
    return {
      regClassName: () => XSProxyNotificationListener()..init(className: regClassName)
    };
  }

  @override
  NotificationListener constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return NotificationListener(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      //onNotification: XSJSParse.getValueChanged<bool>(context, bo, map, "onNotification"),
    );
  }
}

//-------------- O -----------------
//****** Opacity ******
class XSProxyOpacity extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Opacity";
    return {
      regClassName: () => XSProxyOpacity()..init(className: regClassName)
    };
  }

  @override
  Opacity constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Opacity(
      key: XSJSParse.getKey(context, bo, map, "key"),
      opacity: XSJSParse.getDouble(context, bo, map, "opacity"),
      alwaysIncludeSemantics: XSJSParse.getBool(context, bo, map, "alwaysIncludeSemantics", defaultValue: false),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- P -----------------
//****** Positioned ******
class XSProxyPositioned extends XSJsonObjProxy {
  static String regClassName = "Positioned";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyPositioned()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName, constructorName: "fromRect", constructor: fromRect);
    registerConstructor(className: regClassName, constructorName: "directional", constructor: directional);
    registerConstructor(className: regClassName, constructorName: "fill", constructor: fill);
  }

  Positioned fromRect(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Positioned.fromRect(
      key: XSJSParse.getKey(context, bo, map, "key"),
      rect: XSJSParse.getRect(context, bo, map, "rect"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }

  Positioned directional(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Positioned.directional(
      key: XSJSParse.getKey(context, bo, map, "key"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      start: XSJSParse.getDouble(context, bo, map, "start"),
      top: XSJSParse.getDouble(context, bo, map, "top"),
      end: XSJSParse.getDouble(context, bo, map, "end"),
      bottom: XSJSParse.getDouble(context, bo, map, "bottom"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }

  Positioned fill(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Positioned.fill(
      key: XSJSParse.getKey(context, bo, map, "key"),
      left: XSJSParse.getDouble(context, bo, map, "left"),
      top: XSJSParse.getDouble(context, bo, map, "top"),
      right: XSJSParse.getDouble(context, bo, map, "right"),
      bottom: XSJSParse.getDouble(context, bo, map, "bottom"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }

  @override
  Positioned constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Positioned(
      key: XSJSParse.getKey(context, bo, map, "key"),
      left: XSJSParse.getDouble(context, bo, map, "left"),
      top: XSJSParse.getDouble(context, bo, map, "top"),
      right: XSJSParse.getDouble(context, bo, map, "right"),
      bottom: XSJSParse.getDouble(context, bo, map, "bottom"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** PositionedDirectional ******
class XSProxyPositionedDirectional extends XSJsonObjProxy {
  static String regClassName = "PositionedDirectional";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyPositionedDirectional()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
  }

  @override
  PositionedDirectional constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return PositionedDirectional(
      key: XSJSParse.getKey(context, bo, map, "key"),
      start: XSJSParse.getDouble(context, bo, map, "start"),
      top: XSJSParse.getDouble(context, bo, map, "top"),
      end: XSJSParse.getDouble(context, bo, map, "end"),
      bottom: XSJSParse.getDouble(context, bo, map, "bottom"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** PreferredSize ******
class XSProxyPreferredSize extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PreferredSize";
    return {
      regClassName: () => XSProxyPreferredSize()..init(className: regClassName)
    };
  }

  @override
  PreferredSize constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return PreferredSize(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      preferredSize: XSJSParse.getSize(context, bo, map, "preferredSize"),
    );
  }
}

//-------------- R -----------------

//-------------- S -----------------
//****** SystemUiOverlayStyle ******
class XSProxySystemUiOverlayStyle extends XSJsonObjProxy {
  static String regClassName = "SystemUiOverlayStyle";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxySystemUiOverlayStyle()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName, constructorName: "light", constructor: constructorLight);
    registerConstructor(className: regClassName, constructorName: "dark", constructor: constructorDark);
  }

  @override
  SystemUiOverlayStyle constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SystemUiOverlayStyle(
      systemNavigationBarColor: XSJSParse.getColor(context, bo, map, "systemNavigationBarColor"),
      systemNavigationBarDividerColor: XSJSParse.getColor(context, bo, map, "systemNavigationBarDividerColor"),
      systemNavigationBarIconBrightness: XSJSParse.getBrightness(context, bo, map, "systemNavigationBarIconBrightness"),
      statusBarColor: XSJSParse.getColor(context, bo, map, "statusBarColor"),
      statusBarBrightness: XSJSParse.getBrightness(context, bo, map, "statusBarBrightness"),
      statusBarIconBrightness: XSJSParse.getBrightness(context, bo, map, "statusBarIconBrightness"),
    );
  }

  SystemUiOverlayStyle constructorLight(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SystemUiOverlayStyle.light;
  }

  SystemUiOverlayStyle constructorDark(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SystemUiOverlayStyle.dark;
  }
}

//****** SpringDescription ******
class XSProxySpringDescription extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SpringDescription";
    return {
      regClassName: () => XSProxySpringDescription()..init(className: regClassName)
    };
  }

  @override
  SpringDescription constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SpringDescription(
      mass: XSJSParse.getDouble(context, bo, map, "mass"),
      stiffness: XSJSParse.getDouble(context, bo, map, "stiffness"),
      damping: XSJSParse.getDouble(context, bo, map, "damping"),
    );
  }
}

//****** Slider ******
class XSProxySlider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Slider";
    return {
      regClassName: () => XSProxySlider()..init(className: regClassName)
    };
  }

  @override
  Slider constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Slider(
      key: XSJSParse.getKey(context, bo, map, "key"),
      value: XSJSParse.getDouble(context, bo, map, "value"),
      onChanged: XSJSParse.getValueChanged<double>(context, bo, map, "onChanged"),
      onChangeStart: XSJSParse.getValueChanged<double>(context, bo, map, "onChangeStart"),
      onChangeEnd: XSJSParse.getValueChanged<double>(context, bo, map, "onChangeEnd"),
      min: XSJSParse.getDouble(context, bo, map, "min", defaultValue: 0.0),
      max: XSJSParse.getDouble(context, bo, map, "max", defaultValue: 1.0),
      divisions: XSJSParse.getInt(context, bo, map, "divisions"),
      label: XSJSParse.getString(context, bo, map, "label"),
      activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
      inactiveColor: XSJSParse.getColor(context, bo, map, "inactiveColor"),
      semanticFormatterCallback: XSJSParse.getValueChanged<double>(context, bo, map, "semanticFormatterCallback"),
      autofocus: XSJSParse.getBool(context, bo, map, "key", defaultValue: false),
    );
  }
}

//-------------- T -----------------
//****** TestWidget ******
class XSProxyTestWidget extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TestWidget";
    return {
      regClassName: () => XSProxyTestWidget()..init(className: regClassName)
    };
  }

  @override
  Text constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Text("TestWidget");
  }
}

//****** TableRow ******
class XSProxyTableRow extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TableRow";
    return {
      regClassName: () => XSProxyTableRow()..init(className: regClassName)
    };
  }

  @override
  TableRow constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TableRow(
      key: XSJSParse.getKey(context, bo, map, "key"),
      decoration: XSJSParse.getDecoration(context, bo, map, "decoration"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//****** Theme ******
class XSProxyTheme extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Theme";
    return {
      regClassName: () => XSProxyTheme()..init(className: regClassName)
    };
  }

  @override
  Theme constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Theme(
      key: XSJSParse.getKey(context, bo, map, "key"),
      data: XSJSParse.getThemeData(context, bo, map, "data"),
      isMaterialAppTheme: XSJSParse.getBool(context, bo, map, "isMaterialAppTheme", defaultValue: false),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}
