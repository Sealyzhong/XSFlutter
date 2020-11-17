//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';

/******************TODO List****************************/
/*
    // 1. onpress
    //   null
    
    2. Animation
      CupertinoPageTransition.primaryRouteAnimation
      CupertinoPageTransition.secondaryRouteAnimation

    3. BottomNavigationBarItem
      CupertinoTabBar.items

    4. ObstructingPreferredSizeWidget
      CupertinoPageScaffold.navigationBar    
*/
/******************TODO List****************************/

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperCupertinoSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyCupertinoActivityIndicator.registerProxy());
    m.addAll(XSProxyCupertinoAlertDialog.registerProxy());

    m.addAll(XSProxyCupertinoButton.registerProxy());

    m.addAll(XSProxyCupertinoDialog.registerProxy());
    m.addAll(XSProxyCupertinoDialogAction.registerProxy());

    m.addAll(XSProxyCupertinoFullscreenDialogTransition.registerProxy());

    m.addAll(XSProxyCupertinoNavigationBar.registerProxy());

    m.addAll(XSProxyCupertinoPageScaffold.registerProxy());
    m.addAll(XSProxyCupertinoPageRoute.registerProxy());
    m.addAll(XSProxyCupertinoPageTransition.registerProxy());

    m.addAll(XSProxyCupertinoSlider.registerProxy());
    m.addAll(XSProxyCupertinoSwitch.registerProxy());
    m.addAll(XSProxyCupertinoTabBar.registerProxy());
    m.addAll(XSProxyCupertinoTabScaffold.registerProxy());
    m.addAll(XSProxyCupertinoTabView.registerProxy());
    return m;
  }
}

//-------------- A -----------------
//****** CupertinoActivityIndicator ******
class XSProxyCupertinoActivityIndicator extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosActivityIndicator";
    return {
      regClassName: () => XSProxyCupertinoActivityIndicator()..init(className: regClassName)
    };
  }

  @override
  CupertinoActivityIndicator constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoActivityIndicator(
      key: XSJSParse.getKey(context, bo, map, "key"),
      animating: XSJSParse.getBool(context, bo, map, "animating"),
      radius: XSJSParse.getDouble(context, bo, map, "radius"),
    );
  }
}

//****** CupertinoAlertDialog ******
class XSProxyCupertinoAlertDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosAlertDialog";
    return {
      regClassName: () => XSProxyCupertinoAlertDialog()..init(className: regClassName)
    };
  }

  @override
  CupertinoAlertDialog constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoAlertDialog(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      content: XSJSParse.getWidget(context, bo, map, "content"),
      actions: XSJSParse.getWidgetList(context, bo, map, "actions", defaultValue: <Widget>[]),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      actionScrollController: XSJSParse.getObject(context, bo, map, "actionScrollController"),
    );
  }
}

//-------------- B -----------------
//****** CupertinoButton ******
class XSProxyCupertinoButton extends XSJsonObjProxy {
  static String regClassName = "IosButton";
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
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
      minSize: XSJSParse.getDouble(context, bo, map, "minSize", defaultValue: 44.0),
      pressedOpacity: XSJSParse.getDouble(context, bo, map, "pressedOpacity", defaultValue: 0.1),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }

  CupertinoButton constructorFilled(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoButton.filled(
      child: XSJSParse.getWidget(context, bo, map, "child"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
      minSize: XSJSParse.getDouble(context, bo, map, "minSize", defaultValue: 44.0),
      pressedOpacity: XSJSParse.getDouble(context, bo, map, "pressedOpacity", defaultValue: 0.1),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }
}

//-------------- D -----------------
//****** CupertinoDialog ******
class XSProxyCupertinoDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosDialog";
    return {
      regClassName: () => XSProxyCupertinoDialog()..init(className: regClassName)
    };
  }

  @override
  // ignore: deprecated_member_use
  CupertinoDialog constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    // ignore: deprecated_member_use
    return CupertinoDialog(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** CupertinoDialogAction ******
class XSProxyCupertinoDialogAction extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosDialogAction";
    return {
      regClassName: () => XSProxyCupertinoDialogAction()..init(className: regClassName)
    };
  }

  @override
  CupertinoDialogAction constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoDialogAction(
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      isDefaultAction: XSJSParse.getBool(context, bo, map, "isDefaultAction", defaultValue: false),
      isDestructiveAction: XSJSParse.getBool(context, bo, map, "isDestructiveAction", defaultValue: false),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- F -----------------
//****** CupertinoFullscreenDialogTransition ******
class XSProxyCupertinoFullscreenDialogTransition extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosFullscreenDialogTransition";
    return {
      regClassName: () => XSProxyCupertinoFullscreenDialogTransition()..init(className: regClassName)
    };
  }

  @override
  CupertinoFullscreenDialogTransition constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoFullscreenDialogTransition(
      key: XSJSParse.getKey(context, bo, map, "key"),
      primaryRouteAnimation: XSJSParse.getAnimationDouble(context, bo, map, "primaryRouteAnimation"),
      secondaryRouteAnimation: XSJSParse.getAnimationDouble(context, bo, map, "secondaryRouteAnimation"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      linearTransition: XSJSParse.getBool(context, bo, map, "linearTransition"),
    );
  }
}

//-------------- N -----------------
//****** CupertinoNavigationBar ******
class XSProxyCupertinoNavigationBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosNavigationBar";
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
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      actionsForegroundColor: XSJSParse.getColor(context, bo, map, "actionsForegroundColor"),
      transitionBetweenRoutes: XSJSParse.getBool(context, bo, map, "transitionBetweenRoutes", defaultValue: true),
      heroTag: XSJSParse.getObject(context, bo, map, "heroTag"),
    );
  }
}

//-------------- P -----------------
//****** CupertinoPageTransition ******
class XSProxyCupertinoPageTransition extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosPageTransition";
    return {
      regClassName: () => XSProxyCupertinoPageTransition()..init(className: regClassName)
    };
  }

  @override
  CupertinoPageTransition constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoPageTransition(
      key: XSJSParse.getKey(context, bo, map, "key"),
      primaryRouteAnimation: XSJSParse.getAnimationDouble(context, bo, map, "primaryRouteAnimation"),
      secondaryRouteAnimation: XSJSParse.getAnimationDouble(context, bo, map, "secondaryRouteAnimation"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      linearTransition: XSJSParse.getBool(context, bo, map, "linearTransition"),
    );
  }
}

//****** CupertinoPageScaffold ******
class XSProxyCupertinoPageScaffold extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosPageScaffold";
    return {
      regClassName: () => XSProxyCupertinoPageScaffold()..init(className: regClassName)
    };
  }

  @override
  CupertinoPageScaffold constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoPageScaffold(
      key: XSJSParse.getKey(context, bo, map, "key"),
      navigationBar: XSJSParse.getWidget(context, bo, map, "navigationBar"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      resizeToAvoidBottomInset: XSJSParse.getBool(context, bo, map, "resizeToAvoidBottomInset", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** CupertinoPageRoute ******
class XSProxyCupertinoPageRoute extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosPageRoute";
    return {
      regClassName: () => XSProxyCupertinoPageRoute()..init(className: regClassName)
    };
  }

  @override
  CupertinoPageRoute constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoPageRoute(
      builder: (BuildContext context) {
        return XSJSParse.getWidget(context, bo, map, "child");
      },
      settings: XSJSParse.getRouteSettings(context, bo, map, "settings"),
      maintainState: XSJSParse.getBool(context, bo, map, "maintainState", defaultValue: true),
      fullscreenDialog: XSJSParse.getBool(context, bo, map, "fullscreenDialog", defaultValue: false),
    );
  }
}

//-------------- S -----------------
//****** CupertinoSlider ******
class XSProxyCupertinoSlider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosSlider";
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
    );
  }
}

//****** CupertinoSwitch ******
class XSProxyCupertinoSwitch extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosSwitch";
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
    );
    return widget;
  }
}

//-------------- T -----------------
//****** CupertinoTabBar ******
class XSProxyCupertinoTabBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosTabBar";
    return {
      regClassName: () => XSProxyCupertinoTabBar()..init(className: regClassName)
    };
  }

  @override
  CupertinoTabBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    const Border defaultNavBarBorder = Border(
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
      inactiveColor: XSJSParse.getColor(context, bo, map, "inactiveColor"),
      border: XSJSParse.getBorder(context, bo, map, "border", defaultValue: defaultNavBarBorder),
      iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 30.0),
    );
  }
}

//****** CupertinoTabScaffold ******
class XSProxyCupertinoTabScaffold extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosTabScaffold";
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

//****** CupertinoTabView ******
class XSProxyCupertinoTabView extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IosTabView";
    return {
      regClassName: () => XSProxyCupertinoTabView()..init(className: regClassName)
    };
  }

  @override
  CupertinoTabView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoTabView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      builder: (BuildContext context) {
        return XSJSParse.getWidget(context, bo, map, "item");
      },
      defaultTitle: XSJSParse.getString(context, bo, map, "defaultTitle"),
      //TODO: routes
      routes: null,
      onGenerateRoute: null,
      onUnknownRoute: null,
      navigatorObservers: null,
    );
  }
}
