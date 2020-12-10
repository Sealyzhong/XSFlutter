//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperCupertinoSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyCupertinoActivityIndicator.registerProxy());

    m.addAll(XSProxyCupertinoButton.registerProxy());

    m.addAll(XSProxyCupertinoDialogAction.registerProxy());

    m.addAll(XSProxyCupertinoNavigationBar.registerProxy());
    m.addAll(XSProxyCupertinoNavigationBarBackButton.registerProxy());

    m.addAll(XSProxyCupertinoSlider.registerProxy());
    m.addAll(XSProxyCupertinoSwitch.registerProxy());
    m.addAll(XSProxyCupertinoScrollbar.registerProxy());
    m.addAll(XSProxyCupertinoSliverNavigationBar.registerProxy());

    m.addAll(XSProxyCupertinoTabBar.registerProxy());
    m.addAll(XSProxyCupertinoTheme.registerProxy());
    m.addAll(XSProxyCupertinoTabScaffold.registerProxy());
    return m;
  }
}

//-------------- A -----------------
//****** CupertinoActivityIndicator ******
class XSProxyCupertinoActivityIndicator extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoActivityIndicator";
    return {
      regClassName: () => XSProxyCupertinoActivityIndicator()..init(className: regClassName)
    };
  }

  @override
  CupertinoActivityIndicator constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoActivityIndicator(
      key: XSJSParse.getKey(context, bo, map, "key"),
      animating: XSJSParse.getBool(context, bo, map, "animating"),
      radius: XSJSParse.getDouble(context, bo, map, "radius", defaultValue: 10.0),
    );
  }
}

//-------------- B -----------------
//****** CupertinoButton ******
class XSProxyCupertinoButton extends XSJsonObjProxy {
  static String regClassName = "CupertinoButton";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyCupertinoButton()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName, constructorName: "filled", constructor: constructorFilled);
  }

  ///  const CupertinoButton
  @override
  CupertinoButton constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoButton(
      child: XSJSParse.getWidget(context, bo, map, "child"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor", defaultValue: CupertinoColors.quaternarySystemFill),
      minSize: XSJSParse.getDouble(context, bo, map, "minSize", defaultValue: 44.0),
      pressedOpacity: XSJSParse.getDouble(context, bo, map, "pressedOpacity", defaultValue: 0.1),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius", defaultValue: const BorderRadius.all(Radius.circular(8.0))),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }

  CupertinoButton constructorFilled(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoButton.filled(
      child: XSJSParse.getWidget(context, bo, map, "child"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor", defaultValue: CupertinoColors.quaternarySystemFill),
      minSize: XSJSParse.getDouble(context, bo, map, "minSize", defaultValue: 44.0),
      pressedOpacity: XSJSParse.getDouble(context, bo, map, "pressedOpacity", defaultValue: 0.1),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius", defaultValue: const BorderRadius.all(Radius.circular(8.0))),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }
}

//-------------- D -----------------
//****** CupertinoDialogAction ******
class XSProxyCupertinoDialogAction extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoDialogAction";
    return {
      regClassName: () => XSProxyCupertinoDialogAction()..init(className: regClassName)
    };
  }

  @override
  CupertinoDialogAction constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoDialogAction(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      isDefaultAction: XSJSParse.getBool(context, bo, map, "isDefaultAction", defaultValue: false),
      isDestructiveAction: XSJSParse.getBool(context, bo, map, "isDestructiveAction", defaultValue: false),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, 'onPressed'),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
    );
  }
}

//-------------- F -----------------

//-------------- N -----------------
//****** CupertinoNavigationBar ******
class XSProxyCupertinoNavigationBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoNavigationBar";
    return {
      regClassName: () => XSProxyCupertinoNavigationBar()..init(className: regClassName)
    };
  }

  @override
  CupertinoNavigationBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    const Border defaultNavBarBorder = Border(
      bottom: BorderSide(
        color: Color(0x4C000000),
        width: 0.0, // One physical pixel.
        style: BorderStyle.solid,
      ),
    );

    return CupertinoNavigationBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      automaticallyImplyLeading: XSJSParse.getBool(context, bo, map, "automaticallyImplyLeading", defaultValue: true),
      automaticallyImplyMiddle: XSJSParse.getBool(context, bo, map, "automaticallyImplyMiddle", defaultValue: true),
      previousPageTitle: XSJSParse.getString(context, bo, map, "previousPageTitle"),
      middle: XSJSParse.getWidget(context, bo, map, "middle"),
      trailing: XSJSParse.getWidget(context, bo, map, "trailing"),
      border: XSJSParse.getBorder(context, bo, map, "border", defaultValue: defaultNavBarBorder),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      brightness: XSJSParse.getBrightness(context, bo, map, "brightness"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      actionsForegroundColor: XSJSParse.getColor(context, bo, map, "actionsForegroundColor"),
      transitionBetweenRoutes: XSJSParse.getBool(context, bo, map, "transitionBetweenRoutes", defaultValue: true),
    );
  }
}

//****** CupertinoNavigationBarBackButton ******
class XSProxyCupertinoNavigationBarBackButton extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoNavigationBarBackButton";
    return {
      regClassName: () => XSProxyCupertinoNavigationBar()..init(className: regClassName)
    };
  }

  @override
  CupertinoNavigationBarBackButton constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoNavigationBarBackButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      previousPageTitle: XSJSParse.getString(context, bo, map, "previousPageTitle"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }
}

//-------------- P -----------------

//-------------- S -----------------
//****** CupertinoSlider ******
class XSProxyCupertinoSlider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoSlider";
    return {
      regClassName: () => XSProxyCupertinoSlider()..init(className: regClassName)
    };
  }

  @override
  CupertinoSlider constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoSlider(
      key: XSJSParse.getKey(context, bo, map, "key"),
      value: XSJSParse.getDouble(context, bo, map, "value"),
      onChanged: XSJSParse.getValueChanged<double>(context, bo, map, "onChanged"),
      onChangeStart: XSJSParse.getValueChanged<double>(context, bo, map, "onChangeStart"),
      onChangeEnd: XSJSParse.getValueChanged<double>(context, bo, map, "onChangeEnd"),
      min: XSJSParse.getDouble(context, bo, map, "min", defaultValue: 0.0),
      max: XSJSParse.getDouble(context, bo, map, "max", defaultValue: 1.0),
      divisions: XSJSParse.getInt(context, bo, map, "divisions"),
      activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
      thumbColor: XSJSParse.getColor(context, bo, map, "thumbColor", defaultValue: CupertinoColors.white),
    );
  }
}

//****** CupertinoSwitch ******
class XSProxyCupertinoSwitch extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoSwitch";
    return {
      regClassName: () => XSProxyCupertinoSwitch()..init(className: regClassName)
    };
  }

  @override
  CupertinoSwitch constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var widget = CupertinoSwitch(
      key: XSJSParse.getKey(context, bo, map, "key"),
      value: XSJSParse.getBool(context, bo, map, "value"),
      onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
      activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
      trackColor: XSJSParse.getColor(context, bo, map, "trackColor"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
    );
    return widget;
  }
}

//****** CupertinoScrollbar ******
class XSProxyCupertinoScrollbar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoScrollbar";
    return {
      regClassName: () => XSProxyCupertinoScrollbar()..init(className: regClassName)
    };
  }

  @override
  CupertinoScrollbar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoScrollbar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      isAlwaysShown: XSJSParse.getBool(context, bo, map, "isAlwaysShown", defaultValue: false),
    );
  }
}

//****** CupertinoSliverNavigationBar ******
class XSProxyCupertinoSliverNavigationBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoSliverNavigationBar";
    return {
      regClassName: () => XSProxyCupertinoSliverNavigationBar()..init(className: regClassName)
    };
  }

  @override
  CupertinoSliverNavigationBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    const Border defaultNavBarBorder = Border(
      bottom: BorderSide(
        color: Color(0x4C000000),
        width: 0.0, // One physical pixel.
        style: BorderStyle.solid,
      ),
    );

    return CupertinoSliverNavigationBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      largeTitle: XSJSParse.getWidget(context, bo, map, "largeTitle"),
      automaticallyImplyLeading: XSJSParse.getBool(context, bo, map, "automaticallyImplyLeading", defaultValue: true),
      automaticallyImplyTitle: XSJSParse.getBool(context, bo, map, "automaticallyImplyTitle", defaultValue: true),
      previousPageTitle: XSJSParse.getString(context, bo, map, "previousPageTitle"),
      middle: XSJSParse.getWidget(context, bo, map, "middle"),
      trailing: XSJSParse.getWidget(context, bo, map, "trailing"),
      border: XSJSParse.getBorder(context, bo, map, "border", defaultValue: defaultNavBarBorder),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      brightness: XSJSParse.getBrightness(context, bo, map, "brightness"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      actionsForegroundColor: XSJSParse.getColor(context, bo, map, "actionsForegroundColor"),
      transitionBetweenRoutes: XSJSParse.getBool(context, bo, map, "transitionBetweenRoutes", defaultValue: true),
    );
  }
}

//-------------- T -----------------
//****** CupertinoTabBar ******
class XSProxyCupertinoTabBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoTabBar";
    return {
      regClassName: () => XSProxyCupertinoTabBar()..init(className: regClassName)
    };
  }

  @override
  CupertinoTabBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    const Border _kDefaultNavBarBorder = Border(
      bottom: BorderSide(
        color: Color(0x4C000000),
        width: 0.0, // One physical pixel.
        style: BorderStyle.solid,
      ),
    );

    return CupertinoTabBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      items: toListT<BottomNavigationBarItem>(XSJSParse.getObject(context, bo, map, "items")),
      onTap: XSJSParse.getValueChanged<int>(context, bo, map, "onTap"),
      currentIndex: XSJSParse.getInt(context, bo, map, "currentIndex", defaultValue: 0),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
      inactiveColor: XSJSParse.getColor(context, bo, map, "inactiveColor", defaultValue: CupertinoColors.inactiveGray),
      border: XSJSParse.getBorder(context, bo, map, "border", defaultValue: _kDefaultNavBarBorder),
      iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 30.0),
    );
  }
}

//****** CupertinoTheme ******
class XSProxyCupertinoTheme extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoTheme";
    return {
      regClassName: () => XSProxyCupertinoTheme()..init(className: regClassName)
    };
  }

  @override
  CupertinoTheme constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoTheme(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      data: XSJSParse.getCupertinoThemeData(context, bo, map, "data"),
    );
  }
}

//****** CupertinoTabScaffold ******
class XSProxyCupertinoTabScaffold extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoTabScaffold";
    return {
      regClassName: () => XSProxyCupertinoTabScaffold()..init(className: regClassName)
    };
  }

  @override
  CupertinoTabScaffold constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoTabScaffold(
      key: XSJSParse.getKey(context, bo, map, "key"),
      tabBar: XSJSParse.getObject(context, bo, map, "tabBar"),
      tabBuilder: (BuildContext context, int index) {
        List<Widget> children = XSJSParse.getWidgetList(context, bo, map, "children");
        return children[index];
      },
    );
  }
}
