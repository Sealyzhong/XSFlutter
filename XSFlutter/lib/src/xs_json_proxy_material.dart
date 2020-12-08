//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';
import 'package:xsflutter/src/widgets/label_title_widget.dart';
import 'widgets/check_box.dart';
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

    m.addAll(XSProxyAppBar.registerProxy());

    m.addAll(XSProxyBuilder.registerProxy());
    m.addAll(XSProxyBottomAppBar.registerProxy());
    m.addAll(XSProxyBottomNavigationBar.registerProxy());
    m.addAll(XSProxyButtonSeries.registerProxy());
    m.addAll(XSProxyButtonBar.registerProxy());
    m.addAll(XSProxyBlockSemantics.registerProxy());
    m.addAll(XSProxyBanner.registerProxy());

    m.addAll(XSProxyCloseButtonSeries.registerProxy());
    m.addAll(XSProxyCard.registerProxy());
    m.addAll(XSProxyCheckedModeBanner.registerProxy());
    m.addAll(XSProxyCheckboxListTile.registerProxy());
    m.addAll(XSProxyCheckbox.registerProxy());
    m.addAll(XSProxyCheckboxEx.registerProxy());

    m.addAll(XSProxyDefaultTabController.registerProxy());
    m.addAll(XSProxyDirectionality.registerProxy());
    m.addAll(XSProxyDivider.registerProxy());
    m.addAll(XSProxyDrawer.registerProxy());
    m.addAll(XSProxyDrawerHeader.registerProxy());

    m.addAll(XSProxyExpansionTile.registerProxy());
    m.addAll(XSProxyExpandIcon.registerProxy());
    m.addAll(XSProxyExcludeSemantics.registerProxy());

    m.addAll(XSProxyFlexibleSpaceBar.registerProxy());
    m.addAll(XSProxyFlexibleSpaceBarSettings.registerProxy());
    m.addAll(XSProxyFlutterLogo.registerProxy());
    m.addAll(XSProxyFractionalTranslation.registerProxy());
    m.addAll(XSProxyFlatButton.registerProxy());
    m.addAll(XSProxyFloatingActionButton.registerProxy());

    m.addAll(XSProxyGridTile.registerProxy());
    m.addAll(XSProxyGridTileBar.registerProxy());
    m.addAll(XSProxyGridPaper.registerProxy());

    m.addAll(XSProxyIcon.registerProxy());
    m.addAll(XSProxyIndexedSemantics.registerProxy());
    m.addAll(XSProxyImageIcon.registerProxy());
    m.addAll(XSProxyIconButton.registerProxy());
    m.addAll(XSProxyInkResponse.registerProxy());
    m.addAll(XSProxyInkWell.registerProxy());
    m.addAll(XSProxyInputDecorator.registerProxy());

    m.addAll(XSProxyKeyedSubtree.registerProxy());

    m.addAll(XSProxyLabelTitle.registerProxy());

    m.addAll(XSProxyMaterial.registerProxy());
    m.addAll(XSProxyMaterialBanner.registerProxy());
    m.addAll(XSProxyMaterialPageRoute.registerProxy());
    m.addAll(XSProxyMergeSemantics.registerProxy());

    m.addAll(XSProxyNavigator.registerProxy());

    m.addAll(XSProxyOutlineButton.registerProxy());
    m.addAll(XSProxyPopupMenuItem.registerProxy());

    m.addAll(XSProxyRadio.registerProxy());
    m.addAll(XSProxyRouteSettings.registerProxy());
    m.addAll(XSProxyRawMaterialButton.registerProxy());
    m.addAll(XSProxyRaisedButton.registerProxy());

    m.addAll(XSProxyScaffold.registerProxy());
    m.addAll(XSProxyScaffoldState.registerProxy());
    m.addAll(XSProxySemantics.registerProxy());
    m.addAll(XSProxySafeArea.registerProxy());
    m.addAll(XSProxySliverSafeArea.registerProxy());
    m.addAll(XSProxySpacer.registerProxy());
    m.addAll(XSProxyScrollbar.registerProxy());
    m.addAll(XSProxySnackBar.registerProxy());
    m.addAll(XSProxySnackBarAction.registerProxy());
    m.addAll(XSProxySliverVisibility.registerProxy());
    m.addAll(XSProxySwitchListTile.registerProxy());
    m.addAll(XSProxySwitch.registerProxy());

    m.addAll(XSProxyTabBar.registerProxy());
    m.addAll(XSProxyTabBarView.registerProxy());
    m.addAll(XSProxyTab.registerProxy());
    m.addAll(XSProxyTitle.registerProxy());
    m.addAll(XSProxyTabPageSelectorIndicator.registerProxy());
    m.addAll(XSProxyTexture.registerProxy());
    m.addAll(XSProxyTabPageSelector.registerProxy());

    m.addAll(XSProxyVerticalDivider.registerProxy());
    m.addAll(XSProxyVisibility.registerProxy());

    m.addAll(XSProxyWillPopScope.registerProxy());
    m.addAll(XSProxyWidgetSpan.registerProxy());
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
        shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor"),
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
        brightness: XSJSParse.getBrightness(context, bo, map, "brightness"),
        primary: XSJSParse.getBool(context, bo, map, "primary", defaultValue: true),
        centerTitle: XSJSParse.getBool(context, bo, map, "centerTitle", defaultValue: true),
        excludeHeaderSemantics: XSJSParse.getBool(context, bo, map, "excludeHeaderSemantics", defaultValue: false),
        titleSpacing: XSJSParse.getDouble(context, bo, map, "titleSpacing", defaultValue: NavigationToolbar.kMiddleSpacing),
        toolbarOpacity: XSJSParse.getDouble(context, bo, map, "toolbarOpacity", defaultValue: 1.0),
        bottomOpacity: XSJSParse.getDouble(context, bo, map, "bottomOpacity", defaultValue: 1.0),
        toolbarHeight: XSJSParse.getDouble(context, bo, map, "toolbarHeight"),
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
        elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
        type: XSJSParse.getBottomNavigationBarType(context, bo, map, "type"),
        fixedColor: XSJSParse.getColor(context, bo, map, "fixedColor"),
        backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
        iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 24.0),
        selectedItemColor: XSJSParse.getColor(context, bo, map, "selectedItemColor"),
        unselectedItemColor: XSJSParse.getColor(context, bo, map, "unselectedItemColor"),
        selectedFontSize: XSJSParse.getDouble(context, bo, map, "selectedFontSize", defaultValue: 14.0),
        unselectedFontSize: XSJSParse.getDouble(context, bo, map, "unselectedFontSize", defaultValue: 12.0),
        selectedLabelStyle: XSJSParse.getTextStyle(context, bo, map, "selectedLabelStyle"),
        unselectedLabelStyle: XSJSParse.getTextStyle(context, bo, map, "unselectedLabelStyle"),
        showSelectedLabels: XSJSParse.getBool(context, bo, map, "showSelectedLabels", defaultValue: true),
        showUnselectedLabels: XSJSParse.getBool(context, bo, map, "showUnselectedLabels"),
      );
}

//****** BottomAppBar ******
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
        shape: XSJSParse.getNotchedShape(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        notchMargin: XSJSParse.getDouble(context, bo, map, "notchMargin", defaultValue: 4.0),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

//****** BlockSemantics ******
class XSProxyBlockSemantics extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "BlockSemantics";
    return {
      regClassName1: () => XSProxyBlockSemantics()..init(className: regClassName1)
    };
  }

  @override
  BlockSemantics constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => BlockSemantics(
        key: XSJSParse.getKey(context, bo, map, "key"),
        blocking: XSJSParse.getBool(context, bo, map, "blocking", defaultValue: true),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

//****** XSProxyBanner ******
class XSProxyBanner extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "Banner";
    return {
      regClassName1: () => XSProxyBanner()..init(className: regClassName1)
    };
  }

  @override
  Banner constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    const Color _kColor = Color(0xA0B71C1C);
    const TextStyle _kTextStyle = TextStyle(
      color: Color(0xFFFFFFFF),
      fontSize: 12.0 * 0.85,
      fontWeight: FontWeight.w900,
      height: 1.0,
    );

    return Banner(
      key: XSJSParse.getKey(context, bo, map, "key"),
      message: XSJSParse.getString(context, bo, map, "message"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      location: XSJSParse.getBannerLocation(context, bo, map, "location"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: _kColor),
      layoutDirection: XSJSParse.getTextDirection(context, bo, map, "layoutDirection"),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle", defaultValue: _kTextStyle),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

///****** 常用Button系列类 ******
class XSProxyButtonSeries extends XSJsonObjProxy {
  static final String regClassName3 = "FloatingActionButton";
  static final String regClassName5 = "DropdownButton";
  static final String regClassName6 = "PopupMenuButton";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName3: () => XSProxyButtonSeries()..init(className: regClassName3),
        regClassName5: () => XSProxyButtonSeries()..init(className: regClassName5),
        regClassName6: () => XSProxyButtonSeries()..init(className: regClassName6),
      };

  ///*********************************************************************

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName3, constructor: constructorFloatingActionButton);
    registerConstructor(className: regClassName5, constructor: constructorDropdownButton);
    registerConstructor(className: regClassName6, constructor: constructorPopupMenuButton);
  }

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
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape", defaultValue: const CircleBorder()),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        isExtended: XSJSParse.getBool(context, bo, map, "isExtended", defaultValue: false),
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

///****** ButtonBar ******
class XSProxyButtonBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ButtonBar";
    return {
      regClassName: () => XSProxyButtonBar()..init(className: regClassName)
    };
  }

  @override
  ButtonBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ButtonBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getMainAxisAlignment(context, bo, map, "alignment"),
      mainAxisSize: XSJSParse.getMainAxisSize(context, bo, map, "mainAxisSize", defaultValue: MainAxisSize.max),
      buttonTextTheme: XSJSParse.getButtonTextTheme(context, bo, map, "buttonTextTheme"),
      buttonHeight: XSJSParse.getDouble(context, bo, map, "buttonHeight"),
      buttonMinWidth: XSJSParse.getDouble(context, bo, map, "buttonMinWidth"),
      buttonPadding: XSJSParse.getEdgeInsets(context, bo, map, "buttonPadding"),
      buttonAlignedDropdown: XSJSParse.getBool(context, bo, map, "buttonAlignedDropdown"),
      layoutBehavior: XSJSParse.getButtonBarLayoutBehavior(context, bo, map, "layoutBehavior"),
      overflowButtonSpacing: XSJSParse.getDouble(context, bo, map, "overflowButtonSpacing"),
      overflowDirection: XSJSParse.getVerticalDirection(context, bo, map, "overflowDirection"),
      children: XSJSParse.getWidgetList(context, bo, map, "children", defaultValue: const <Widget>[]),
    );
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
    return CloseButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }

  Widget constructorBackButton(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BackButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
    );
  }

  Widget constructorBackButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BackButtonIcon(
      key: XSJSParse.getKey(context, bo, map, "key"),
    );
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
      shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      margin: XSJSParse.getEdgeInsets(context, bo, map, "margin", defaultValue: const EdgeInsets.all(4.0)),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      borderOnForeground: XSJSParse.getBool(context, bo, map, "borderOnForeground"),
      semanticContainer: XSJSParse.getBool(context, bo, map, "semanticContainer", defaultValue: true),
    );
  }
}

//****** CheckedModeBanner ******
class XSProxyCheckedModeBanner extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CheckedModeBanner";
    return {
      regClassName: () => XSProxyCheckedModeBanner()..init(className: regClassName)
    };
  }

  @override
  CheckedModeBanner constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CheckedModeBanner(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** ColoredBox ******
class XSProxyColoredBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ColoredBox";
    return {
      regClassName: () => XSProxyColoredBox()..init(className: regClassName)
    };
  }

  @override
  ColoredBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ColoredBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: Colors.red),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

///****** CheckboxListTile ******
class XSProxyCheckboxListTile extends XSJsonObjProxy {
  static final String regClassName = "CheckboxListTile";
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyCheckboxListTile()..init(className: regClassName),
      };

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => CheckboxListTile(
        key: XSJSParse.getKey(context, bo, map, "key"),
        value: XSJSParse.getBool(context, bo, map, "value"),
        onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
        activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
        checkColor: XSJSParse.getColor(context, bo, map, "checkColor"),
        title: XSJSParse.getWidget(context, bo, map, "title"),
        subtitle: XSJSParse.getWidget(context, bo, map, "subtitle"),
        isThreeLine: XSJSParse.getBool(context, bo, map, "isThreeLine", defaultValue: false),
        dense: XSJSParse.getBool(context, bo, map, "dense"),
        contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding"),
        secondary: XSJSParse.getWidget(context, bo, map, "secondary"),
        selected: XSJSParse.getBool(context, bo, map, "selected", defaultValue: false),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
        tristate: XSJSParse.getBool(context, bo, map, "tristate", defaultValue: false),
        controlAffinity: XSJSParse.getListTileControlAffinity(context, bo, map, "controlAffinity", defaultValue: ListTileControlAffinity.platform),
      );
}

///****** Checkbox ******
class XSProxyCheckbox extends XSJsonObjProxy {
  static final String regClassName = "Checkbox";
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyCheckbox()..init(className: regClassName),
      };

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => Checkbox(
        key: XSJSParse.getKey(context, bo, map, "key"),
        value: XSJSParse.getBool(context, bo, map, "value"),
        onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
        activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
        checkColor: XSJSParse.getColor(context, bo, map, "checkColor"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
        tristate: XSJSParse.getBool(context, bo, map, "tristate", defaultValue: false),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        visualDensity: XSJSParse.getVisualDensity(context, bo, map, "visualDensity"),
      );
}

///****** CheckboxEx ******
class XSProxyCheckboxEx extends XSJsonObjProxy {
  static final String regClassName = "CheckboxEx";
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyCheckboxEx()..init(className: regClassName),
      };

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => CheckboxEx(
        key: XSJSParse.getKey(context, bo, map, "key"),
        value: XSJSParse.getBool(context, bo, map, "value"),
        onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
        activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
        checkColor: XSJSParse.getColor(context, bo, map, "checkColor"),
        width: XSJSParse.getDouble(context, bo, map, "width", defaultValue: 20.0),
        strokeWidth: XSJSParse.getDouble(context, bo, map, "strokeWidth", defaultValue: 1.0),
        isCircle: XSJSParse.getBool(context, bo, map, "isCircle", defaultValue: false),
        tristate: XSJSParse.getBool(context, bo, map, "tristate", defaultValue: false),
      );
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

//****** Directionality ******
class XSProxyDirectionality extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Directionality";
    return {
      regClassName: () => XSProxyDirectionality()..init(className: regClassName)
    };
  }

  @override
  Directionality constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Directionality(
      key: XSJSParse.getKey(context, bo, map, "key"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Divider ******
class XSProxyDivider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Divider";
    return {
      regClassName: () => XSProxyDivider()..init(className: regClassName)
    };
  }

  @override
  Divider constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Divider(
      key: XSJSParse.getKey(context, bo, map, "key"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      thickness: XSJSParse.getDouble(context, bo, map, "thickness"),
      indent: XSJSParse.getDouble(context, bo, map, "indent"),
      endIndent: XSJSParse.getDouble(context, bo, map, "endIndent"),
      color: XSJSParse.getColor(context, bo, map, "color"),
    );
  }
}

//****** Drawer ******
class XSProxyDrawer extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Drawer";
    return {
      regClassName: () => XSProxyDrawer()..init(className: regClassName)
    };
  }

  @override
  Drawer constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Drawer(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 16.0),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
    );
  }
}

//****** DrawerHeader ******
class XSProxyDrawerHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DrawerHeader";
    return {
      regClassName: () => XSProxyDrawerHeader()..init(className: regClassName)
    };
  }

  @override
  DrawerHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DrawerHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      decoration: XSJSParse.getDecoration(context, bo, map, "decoration"),
      margin: XSJSParse.getEdgeInsets(context, bo, map, "margin", defaultValue: const EdgeInsets.only(bottom: 8.0)),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "margin", defaultValue: const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 8.0)),
      duration: XSJSParse.getDuration(context, bo, map, "duration", defaultValue: const Duration(milliseconds: 250)),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.fastOutSlowIn),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- E -----------------
//****** ExpansionTile ******
class XSProxyExpansionTile extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ExpansionTile";
    return {
      regClassName: () => XSProxyExpansionTile()..init(className: regClassName)
    };
  }

  @override
  ExpansionTile constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ExpansionTile(
      key: XSJSParse.getKey(context, bo, map, "key"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      subtitle: XSJSParse.getWidget(context, bo, map, "subtitle"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      onExpansionChanged: XSJSParse.getValueChanged(context, bo, map, "onExpansionChanged"),
      children: XSJSParse.getWidgetList(context, bo, map, "children", defaultValue: <Widget>[]),
      trailing: XSJSParse.getWidget(context, bo, map, "trailing"),
      initiallyExpanded: XSJSParse.getBool(context, bo, map, "initiallyExpanded"),
      maintainState: XSJSParse.getBool(context, bo, map, "maintainState"),
      tilePadding: XSJSParse.getEdgeInsets(context, bo, map, "tilePadding"),
      expandedCrossAxisAlignment: XSJSParse.getCrossAxisAlignment(context, bo, map, "expandedCrossAxisAlignment"),
      expandedAlignment: XSJSParse.getAlignment(context, bo, map, "expandedAlignment"),
      childrenPadding: XSJSParse.getEdgeInsets(context, bo, map, "childrenPadding"),
    );
  }
}

//****** ExpandIcon ******
class XSProxyExpandIcon extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ExpandIcon";
    return {
      regClassName: () => XSProxyExpandIcon()..init(className: regClassName)
    };
  }

  @override
  ExpandIcon constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ExpandIcon(
      key: XSJSParse.getKey(context, bo, map, "key"),
      isExpanded: XSJSParse.getBool(context, bo, map, "isExpanded", defaultValue: false),
      size: XSJSParse.getDouble(context, bo, map, "size", defaultValue: 24.0),
      onPressed: XSJSParse.getValueChanged<bool>(context, bo, map, "onPressed"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: const EdgeInsets.all(8.0)),
      color: XSJSParse.getColor(context, bo, map, "color"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
      expandedColor: XSJSParse.getColor(context, bo, map, "expandedColor"),
    );
  }
}

//****** ExcludeSemantics ******
class XSProxyExcludeSemantics extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "ExcludeSemantics";
    return {
      regClassName1: () => XSProxyExcludeSemantics()..init(className: regClassName1)
    };
  }

  @override
  ExcludeSemantics constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => ExcludeSemantics(
        key: XSJSParse.getKey(context, bo, map, "key"),
        excluding: XSJSParse.getBool(context, bo, map, "excluding", defaultValue: true),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

//-------------- F -----------------
///****** FloatingActionButton ******
class XSProxyFloatingActionButton extends XSJsonObjProxy {
  static final String regClassName = "FloatingActionButton";
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyFloatingActionButton()..init(className: regClassName),
      };

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FloatingActionButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      tooltip: XSJSParse.getString(context, bo, map, "tooltip"),
      foregroundColor: XSJSParse.getColor(context, bo, map, "foregroundColor"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
      hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation"),
      focusElevation: XSJSParse.getDouble(context, bo, map, "focusElevation"),
      hoverElevation: XSJSParse.getDouble(context, bo, map, "hoverElevation"),
      highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      mini: XSJSParse.getBool(context, bo, map, "mini", defaultValue: false),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape", defaultValue: const CircleBorder()),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      isExtended: XSJSParse.getBool(context, bo, map, "isExtended", defaultValue: false),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
    );
  }
}

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
      style: XSJSParse.getFlutterLogoStyle(context, bo, map, "style", defaultValue: FlutterLogoStyle.markOnly),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: const Color(0xFF616161)),
      duration: XSJSParse.getDuration(context, bo, map, "duration", defaultValue: const Duration(milliseconds: 750)),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.fastOutSlowIn),
    );
  }
}

//****** FractionalTranslation ******
class XSProxyFractionalTranslation extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FractionalTranslation";
    return {
      regClassName: () => XSProxyFractionalTranslation()..init(className: regClassName)
    };
  }

  @override
  FractionalTranslation constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FractionalTranslation(
      key: XSJSParse.getKey(context, bo, map, "key"),
      translation: XSJSParse.getOffset(context, bo, map, "translation"),
      transformHitTests: XSJSParse.getBool(context, bo, map, "transformHitTests", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
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
      titlePadding: XSJSParse.getEdgeInsets(context, bo, map, "titlePadding"),
      collapseMode: XSJSParse.getCollapseMode(context, bo, map, "collapseMode", defaultValue: CollapseMode.parallax),
    );
  }
}

//****** FlexibleSpaceBarSettings ******
class XSProxyFlexibleSpaceBarSettings extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FlexibleSpaceBarSettings";
    return {
      regClassName: () => XSProxyFlexibleSpaceBarSettings()..init(className: regClassName)
    };
  }

  @override
  FlexibleSpaceBarSettings constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FlexibleSpaceBarSettings(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      toolbarOpacity: XSJSParse.getDouble(context, bo, map, "toolbarOpacity"),
      minExtent: XSJSParse.getDouble(context, bo, map, "minExtent"),
      maxExtent: XSJSParse.getDouble(context, bo, map, "maxExtent"),
      currentExtent: XSJSParse.getDouble(context, bo, map, "currentExtent"),
    );
  }
}

///****** FlatButton ******
class XSProxyFlatButton extends XSJsonObjProxy {
  static final String regClassName = "FlatButton";

  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyFlatButton()..init(className: regClassName),
      };

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName, constructorName: "icon", constructor: getFlatButtonIcon);
  }

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => FlatButton(
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
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        visualDensity: XSJSParse.getVisualDensity(context, bo, map, 'visualDensity'),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      );

  Widget getFlatButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => FlatButton.icon(
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
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        label: XSJSParse.getWidget(context, bo, map, "label"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      );
}

//-------------- G -----------------
//****** GridTile ******
class XSProxyGridTile extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "GridTile";
    return {
      regClassName1: () => XSProxyGridTile()..init(className: regClassName1)
    };
  }

  @override
  GridTile constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return GridTile(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      header: XSJSParse.getWidget(context, bo, map, "header"),
      footer: XSJSParse.getWidget(context, bo, map, "footer"),
    );
  }
}

//****** GridTileBar ******
class XSProxyGridTileBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "GridTileBar";
    return {
      regClassName1: () => XSProxyGridTileBar()..init(className: regClassName1)
    };
  }

  @override
  GridTileBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return GridTileBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      subtitle: XSJSParse.getWidget(context, bo, map, "subtitle"),
      trailing: XSJSParse.getWidget(context, bo, map, "trailing"),
    );
  }
}

//****** GridPaper ******
class XSProxyGridPaper extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "GridPaper";
    return {
      regClassName1: () => XSProxyGridPaper()..init(className: regClassName1)
    };
  }

  @override
  GridPaper constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return GridPaper(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: const Color(0x7FC3E8F3)),
      interval: XSJSParse.getDouble(context, bo, map, "interval", defaultValue: 2),
      divisions: XSJSParse.getInt(context, bo, map, "divisions", defaultValue: 2),
      subdivisions: XSJSParse.getInt(context, bo, map, "divisions", defaultValue: 5),
    );
  }
}

//-------------- I -----------------
//****** InputDecorator ******
class XSProxyInputDecorator extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "InputDecorator";
    return {
      regClassName1: () => XSProxyInputDecorator()..init(className: regClassName1)
    };
  }

  @override
  InputDecorator constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => InputDecorator(
        key: XSJSParse.getKey(context, bo, map, "key"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        decoration: XSJSParse.getInputDecoration(context, bo, map, "decoration"),
        baseStyle: XSJSParse.getTextStyle(context, bo, map, "baseStyle"),
        textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
        textAlignVertical: XSJSParse.getTextAlignVertical(context, bo, map, "textAlignVertical"),
        isEmpty: XSJSParse.getBool(context, bo, map, "isEmpty", defaultValue: false),
        isFocused: XSJSParse.getBool(context, bo, map, "isFocused", defaultValue: false),
        isHovering: XSJSParse.getBool(context, bo, map, "isHovering", defaultValue: false),
        expands: XSJSParse.getBool(context, bo, map, "expands", defaultValue: false),
      );
}

//****** IndexedSemantics ******
class XSProxyIndexedSemantics extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "IndexedSemantics";
    return {
      regClassName1: () => XSProxyIndexedSemantics()..init(className: regClassName1)
    };
  }

  @override
  IndexedSemantics constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => IndexedSemantics(
        key: XSJSParse.getKey(context, bo, map, "key"),
        index: XSJSParse.getInt(context, bo, map, "index"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

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

//****** IconButton ******
class XSProxyIconButton extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "IconButton";
    return {
      regClassName1: () => XSProxyIconButton()..init(className: regClassName1)
    };
  }

  @override
  IconButton constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return IconButton(
      key: XSJSParse.getKey(context, bo, map, "key"),
      icon: XSJSParse.getWidget(context, bo, map, "icon"),
      iconSize: XSJSParse.getDouble(context, bo, map, "iconSize", defaultValue: 24.0),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      visualDensity: XSJSParse.getVisualDensity(context, bo, map, "visualDensity"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: EdgeInsets.all(8.0)),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      splashRadius: XSJSParse.getDouble(context, bo, map, "splashRadius"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
      hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      disabledColor: XSJSParse.getColor(context, bo, map, "disabledColor"),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      tooltip: XSJSParse.getString(context, bo, map, "tooltip"),
      enableFeedback: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: true),
      constraints: XSJSParse.getBoxConstraints(context, bo, map, "constraints"),
    );
  }
}

//****** InkResponse ******
class XSProxyInkResponse extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "InkResponse";
    return {
      regClassName1: () => XSProxyInkResponse()..init(className: regClassName1)
    };
  }

  @override
  InkResponse constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return InkResponse(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onTapDown: XSJSParse.getValueChanged<TapDownDetails>(context, bo, map, "onTapDown"),
      onTapCancel: XSJSParse.getVoidCallback(context, bo, map, "onTapCancel"),
      onDoubleTap: XSJSParse.getVoidCallback(context, bo, map, "onDoubleTap"),
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
      onHover: XSJSParse.getValueChanged<bool>(context, bo, map, "onHover"),
      containedInkWell: XSJSParse.getBool(context, bo, map, "containedInkWell", defaultValue: false),
      highlightShape: XSJSParse.getBoxShape(context, bo, map, "highlightShape", defaultValue: BoxShape.circle),
      radius: XSJSParse.getDouble(context, bo, map, "radius"),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius"),
      customBorder: XSJSParse.getShapeBorder(context, bo, map, "customBorder"),
      focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      enableFeedback: XSJSParse.getBool(context, bo, map, "enableFeedback", defaultValue: true),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      canRequestFocus: XSJSParse.getBool(context, bo, map, "canRequestFocus", defaultValue: true),
      onFocusChange: XSJSParse.getValueChanged<bool>(context, bo, map, "onFocusChange"),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
    );
  }
}

//****** InkWell ******
class XSProxyInkWell extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "InkWell";
    return {
      regClassName1: () => XSProxyInkWell()..init(className: regClassName1)
    };
  }

  @override
  InkWell constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return InkWell(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onTapDown: XSJSParse.getValueChanged<TapDownDetails>(context, bo, map, "onTapDown"),
      onTapCancel: XSJSParse.getVoidCallback(context, bo, map, "onTapCancel"),
      onDoubleTap: XSJSParse.getVoidCallback(context, bo, map, "onDoubleTap"),
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
      onHover: XSJSParse.getValueChanged<bool>(context, bo, map, "onHover"),
      radius: XSJSParse.getDouble(context, bo, map, "radius"),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius"),
      customBorder: XSJSParse.getShapeBorder(context, bo, map, "customBorder"),
      focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      enableFeedback: XSJSParse.getBool(context, bo, map, "enableFeedback", defaultValue: true),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      canRequestFocus: XSJSParse.getBool(context, bo, map, "canRequestFocus", defaultValue: true),
      onFocusChange: XSJSParse.getValueChanged<bool>(context, bo, map, "onFocusChange"),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
    );
  }
}

//****** ImageIcon ******
class XSProxyImageIcon extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "ImageIcon";
    return {
      regClassName1: () => XSProxyImageIcon()..init(className: regClassName1)
    };
  }

  @override
  ImageIcon constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ImageIcon(
      XSJSParse.getObject(context, bo, map, "image"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      size: XSJSParse.getDouble(context, bo, map, "size"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
    );
  }
}

//-------------- K -----------------
//****** KeyedSubtree ******
class XSProxyKeyedSubtree extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "KeyedSubtree";
    return {
      regClassName1: () => XSProxyKeyedSubtree()..init(className: regClassName1)
    };
  }

  @override
  KeyedSubtree constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => KeyedSubtree(
        key: XSJSParse.getKey(context, bo, map, "key"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
      );
}

//-------------- L -----------------

//****** LabelTitle ******
class XSProxyLabelTitle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "LabelTitle";
    return {
      regClassName1: () => XSProxyLabelTitle()..init(className: regClassName1)
    };
  }

  @override
  LabelTitleWidget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => LabelTitleWidget(
        key: XSJSParse.getKey(context, bo, map, "key"),
        label: XSJSParse.getString(context, bo, map, "label"),
        labelStyle: XSJSParse.getTextStyle(context, bo, map, "labelStyle"),
        title: XSJSParse.getString(context, bo, map, "title"),
        titleStyle: XSJSParse.getTextStyle(context, bo, map, "titleStyle"),
      );
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
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      borderOnForeground: XSJSParse.getBool(context, bo, map, "borderOnForeground", defaultValue: true),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration", defaultValue: kThemeChangeDuration),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** MaterialBanner ******
class XSProxyMaterialBanner extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "MaterialBanner";
    return {
      regClassName: () => XSProxyMaterialBanner()..init(className: regClassName)
    };
  }

  @override
  MaterialBanner constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialBanner(
      key: XSJSParse.getKey(context, bo, map, "key"),
      content: XSJSParse.getWidget(context, bo, map, "content"),
      contentTextStyle: XSJSParse.getTextStyle(context, bo, map, "contentTextStyle"),
      actions: XSJSParse.getWidgetList(context, bo, map, "actions"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      leadingPadding: XSJSParse.getEdgeInsets(context, bo, map, "leadingPadding"),
      forceActionsBelow: XSJSParse.getBool(context, bo, map, "forceActionsBelow", defaultValue: false),
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
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
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

//-------------- O -----------------
///****** OutlineButton ******
class XSProxyOutlineButton extends XSJsonObjProxy {
  static final String regClassName = "OutlineButton";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyOutlineButton()..init(className: regClassName),
      };

  ///*********************************************************************

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: regClassName, constructorName: "icon", constructor: getOutlineButtonIcon);
  }

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => OutlineButton(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        visualDensity: XSJSParse.getVisualDensity(context, bo, map, 'visualDensity'),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
        highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
        borderSide: XSJSParse.getBorderSide(context, bo, map, "borderSide"),
        disabledBorderColor: XSJSParse.getColor(context, bo, map, "disabledBorderColor"),
        highlightedBorderColor: XSJSParse.getColor(context, bo, map, "highlightedBorderColor"),
      );

  Widget getOutlineButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => OutlineButton.icon(
        key: XSJSParse.getKey(context, bo, map, "key"),
        onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
        textTheme: XSJSParse.getButtonTextTheme(context, bo, map, "textTheme"),
        textColor: XSJSParse.getColor(context, bo, map, "textColor"),
        disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
        color: XSJSParse.getColor(context, bo, map, "color"),
        highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
        splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
        highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation"),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        label: XSJSParse.getWidget(context, bo, map, "label"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
        borderSide: XSJSParse.getBorderSide(context, bo, map, "borderSide"),
        disabledBorderColor: XSJSParse.getColor(context, bo, map, "disabledBorderColor"),
        highlightedBorderColor: XSJSParse.getColor(context, bo, map, "highlightedBorderColor"),
      );
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
///****** RaisedButton ******
class XSProxyRaisedButton extends XSJsonObjProxy {
  static final String regClassName = "RaisedButton";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxyRaisedButton()..init(className: regClassName),
      };

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "icon", constructor: getRaisedButtonIcon);
  }

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => RaisedButton(
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
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration"),
        child: XSJSParse.getWidget(context, bo, map, "child"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        focusElevation: XSJSParse.getDouble(context, bo, map, "focusElevation"),
        hoverElevation: XSJSParse.getDouble(context, bo, map, "hoverElevation"),
        visualDensity: XSJSParse.getVisualDensity(context, bo, map, "visualDensity"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      );

  Widget getRaisedButtonIcon(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => RaisedButton.icon(
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
        shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
        clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration"),
        icon: XSJSParse.getWidget(context, bo, map, "icon"),
        label: XSJSParse.getWidget(context, bo, map, "label"),
        onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      );
}

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
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      onHighlightChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onHighlightChanged"),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
      fillColor: XSJSParse.getColor(context, bo, map, "fillColor"),
      focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
      hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
      highlightColor: XSJSParse.getColor(context, bo, map, "highlightColor"),
      splashColor: XSJSParse.getColor(context, bo, map, "splashColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation", defaultValue: 2.0),
      focusElevation: XSJSParse.getDouble(context, bo, map, "focusElevation", defaultValue: 4.0),
      hoverElevation: XSJSParse.getDouble(context, bo, map, "hoverElevation", defaultValue: 4.0),
      highlightElevation: XSJSParse.getDouble(context, bo, map, "highlightElevation", defaultValue: 8.0),
      disabledElevation: XSJSParse.getDouble(context, bo, map, "disabledElevation", defaultValue: 0.0),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding", defaultValue: EdgeInsets.zero),
      constraints: XSJSParse.getBoxConstraints(context, bo, map, "constraints", defaultValue: const BoxConstraints(minWidth: 88.0, minHeight: 36.0)),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape", defaultValue: const RoundedRectangleBorder()),
      animationDuration: XSJSParse.getDuration(context, bo, map, "animationDuration", defaultValue: kThemeChangeDuration),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      enableFeedback: XSJSParse.getBool(context, bo, map, "enableFeedback", defaultValue: true),
      materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      visualDensity: XSJSParse.getVisualDensity(context, bo, map, "visualDensity", defaultValue: const VisualDensity()),
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

///****** SwitchListTile ******
class XSProxySwitchListTile extends XSJsonObjProxy {
  static final String regClassName = "SwitchListTile";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxySwitchListTile()..init(className: regClassName),
      };

  @override
  Widget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => SwitchListTile(
        key: XSJSParse.getKey(context, bo, map, "key"),
        value: XSJSParse.getBool(context, bo, map, "value"),
        onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
        activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
        activeTrackColor: XSJSParse.getColor(context, bo, map, "activeTrackColor"),
        inactiveThumbColor: XSJSParse.getColor(context, bo, map, "inactiveThumbColor"),
        inactiveTrackColor: XSJSParse.getColor(context, bo, map, "inactiveTrackColor"),
        title: XSJSParse.getWidget(context, bo, map, "title"),
        subtitle: XSJSParse.getWidget(context, bo, map, "subtitle"),
        isThreeLine: XSJSParse.getBool(context, bo, map, "isThreeLine", defaultValue: false),
        dense: XSJSParse.getBool(context, bo, map, "dense"),
        contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding"),
        secondary: XSJSParse.getWidget(context, bo, map, "secondary"),
        selected: XSJSParse.getBool(context, bo, map, "selected", defaultValue: false),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
        controlAffinity: XSJSParse.getListTileControlAffinity(context, bo, map, "controlAffinity", defaultValue: ListTileControlAffinity.platform),
      );
}

///****** Switch ******
class XSProxySwitch extends XSJsonObjProxy {
  static final String regClassName = "Switch";

  ///**@@@  2 替换类构造函数
  static Map<String, CreateJsonObjProxyFun> registerProxy() => {
        regClassName: () => XSProxySwitch()..init(className: regClassName),
      };

  @override
  Switch constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) => Switch(
        key: XSJSParse.getKey(context, bo, map, "key"),
        value: XSJSParse.getBool(context, bo, map, "value"),
        onChanged: XSJSParse.getValueChanged<bool>(context, bo, map, "onChanged"),
        activeColor: XSJSParse.getColor(context, bo, map, "activeColor"),
        activeTrackColor: XSJSParse.getColor(context, bo, map, "activeTrackColor"),
        inactiveThumbColor: XSJSParse.getColor(context, bo, map, "inactiveThumbColor"),
        inactiveTrackColor: XSJSParse.getColor(context, bo, map, "inactiveTrackColor"),
        materialTapTargetSize: XSJSParse.getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
        dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
        focusColor: XSJSParse.getColor(context, bo, map, "focusColor"),
        hoverColor: XSJSParse.getColor(context, bo, map, "hoverColor"),
        autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      );
}

//****** Spacer ******
class XSProxySpacer extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "Spacer";
    return {
      regClassName1: () => XSProxySpacer()..init(className: regClassName1)
    };
  }

  @override
  Spacer constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Spacer(
      key: XSJSParse.getKey(context, bo, map, "key"),
      flex: XSJSParse.getInt(context, bo, map, "flex"),
    );
  }
}

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
      resizeToAvoidBottomPadding: XSJSParse.getBool(context, bo, map, "resizeToAvoidBottomPadding"),
      resizeToAvoidBottomInset: XSJSParse.getBool(context, bo, map, "resizeToAvoidBottomInset"),
      primary: XSJSParse.getBool(context, bo, map, "primary", defaultValue: true),
      drawerDragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "drawerDragStartBehavior", defaultValue: DragStartBehavior.start),
      extendBody: XSJSParse.getBool(context, bo, map, "extendBody", defaultValue: false),
      extendBodyBehindAppBar: XSJSParse.getBool(context, bo, map, "extendBodyBehindAppBar", defaultValue: false),
      drawerScrimColor: XSJSParse.getColor(context, bo, map, "drawerScrimColor"),
      drawerEdgeDragWidth: XSJSParse.getDouble(context, bo, map, "drawerEdgeDragWidth"),
      drawerEnableOpenDragGesture: XSJSParse.getBool(context, bo, map, "drawerEnableOpenDragGesture", defaultValue: true),
      endDrawerEnableOpenDragGesture: XSJSParse.getBool(context, bo, map, "endDrawerEnableOpenDragGesture", defaultValue: true),
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
      onDidGainAccessibilityFocus: XSJSParse.getVoidCallback(context, bo, map, "onDidGainAccessibilityFocus"),
      onDidLoseAccessibilityFocus: XSJSParse.getVoidCallback(context, bo, map, "onDidLoseAccessibilityFocus"),
    );
  }
}

//****** SliverSafeArea ******
class XSProxySliverSafeArea extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverSafeArea";
    return {
      regClassName: () => XSProxySliverSafeArea()..init(className: regClassName)
    };
  }

  @override
  SliverSafeArea constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverSafeArea(
      key: XSJSParse.getKey(context, bo, map, "key"),
      left: XSJSParse.getBool(context, bo, map, "left", defaultValue: true),
      top: XSJSParse.getBool(context, bo, map, "top", defaultValue: true),
      right: XSJSParse.getBool(context, bo, map, "right", defaultValue: true),
      bottom: XSJSParse.getBool(context, bo, map, "bottom", defaultValue: true),
      minimum: XSJSParse.getEdgeInsets(context, bo, map, "minimum", defaultValue: EdgeInsets.zero),
      sliver: XSJSParse.getWidget(context, bo, map, "sliver"),
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
      maintainBottomViewPadding: XSJSParse.getBool(context, bo, map, "bottom", defaultValue: false),
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
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      isAlwaysShown: XSJSParse.getBool(context, bo, map, "isAlwaysShown", defaultValue: false),
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
    const Duration _snackBarDisplayDuration = Duration(milliseconds: 4000);
    return SnackBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      content: XSJSParse.getWidget(context, bo, map, "content"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      behavior: XSJSParse.getObject(context, bo, map, "behavior"),
      action: XSJSParse.getObject(context, bo, map, "action"),
      duration: XSJSParse.getDuration(context, bo, map, "duration", defaultValue: _snackBarDisplayDuration),
      animation: XSJSParse.getAnimationDouble(context, bo, map, "animation"),
      onVisible: XSJSParse.getVoidCallback(context, bo, map, "onVisible"),
    );
  }
}

//****** SnackBarAction ******
class XSProxySnackBarAction extends XSJsonObjProxy {
  static String regClassName = "SnackBarAction";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxySnackBarAction()..init(className: regClassName)
    };
  }

  @override
  SnackBarAction constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SnackBarAction(
      key: XSJSParse.getKey(context, bo, map, "key"),
      label: XSJSParse.getString(context, bo, map, "label"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      disabledTextColor: XSJSParse.getColor(context, bo, map, "disabledTextColor"),
      textColor: XSJSParse.getColor(context, bo, map, "textColor"),
    );
  }
}

//****** SliverVisibility ******
class XSProxySliverVisibility extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverVisibility";
    return {
      regClassName: () => XSProxySliverVisibility()..init(className: regClassName)
    };
  }

  @override
  SliverVisibility constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverVisibility(
      key: XSJSParse.getKey(context, bo, map, "key"),
      sliver: XSJSParse.getWidget(context, bo, map, "sliver"),
      replacementSliver: XSJSParse.getWidget(context, bo, map, "replacementSliver"),
      visible: XSJSParse.getBool(context, bo, map, "visible", defaultValue: true),
      maintainState: XSJSParse.getBool(context, bo, map, "maintainState", defaultValue: false),
      maintainAnimation: XSJSParse.getBool(context, bo, map, "maintainAnimation", defaultValue: false),
      maintainSize: XSJSParse.getBool(context, bo, map, "maintainSize", defaultValue: false),
      maintainSemantics: XSJSParse.getBool(context, bo, map, "maintainSemantics", defaultValue: false),
      maintainInteractivity: XSJSParse.getBool(context, bo, map, "maintainInteractivity", defaultValue: false),
    );
  }
}

//-------------- T -----------------

//****** TabController ******
//TODO:未完成
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

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is TabController)) {
      return;
    }

    var sc = mirrorObj as TabController;
    if (funcName == 'jumpTo') {
      return;
    }

    if (funcName == 'animateTo') {
      return;
    }

    //获取当前位置
    if (funcName == 'offset') {
      if (callback != null) {
        callback(sc.offset);
      }
      return;
    }
  }
}

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
      iconMargin: XSJSParse.getEdgeInsets(context, bo, map, "iconMargin", defaultValue: const EdgeInsets.only(bottom: 10.0)),
    );
  }
}

//****** Title ******
class XSProxyTitle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Title";
    return {
      regClassName: () => XSProxyTitle()..init(className: regClassName)
    };
  }

  @override
  Title constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Title(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getString(context, bo, map, "title", defaultValue: ""),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: Colors.black),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Texture ******
class XSProxyTexture extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Texture";
    return {
      regClassName: () => XSProxyTexture()..init(className: regClassName)
    };
  }

  @override
  Texture constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Texture(
      key: XSJSParse.getKey(context, bo, map, "key"),
      textureId: XSJSParse.getInt(context, bo, map, "textureId"),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
    );
  }
}

//****** TabPageSelectorIndicator ******
class XSProxyTabPageSelectorIndicator extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TabPageSelectorIndicator";
    return {
      regClassName: () => XSProxyTabPageSelectorIndicator()..init(className: regClassName)
    };
  }

  @override
  TabPageSelectorIndicator constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TabPageSelectorIndicator(
      key: XSJSParse.getKey(context, bo, map, "key"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      borderColor: XSJSParse.getColor(context, bo, map, "borderColor"),
      size: XSJSParse.getDouble(context, bo, map, "size"),
    );
  }
}

//****** TabPageSelector ******
class XSProxyTabPageSelector extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TabPageSelector";
    return {
      regClassName: () => XSProxyTabPageSelector()..init(className: regClassName)
    };
  }

  @override
  TabPageSelector constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TabPageSelector(
      key: XSJSParse.getKey(context, bo, map, "key"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      selectedColor: XSJSParse.getColor(context, bo, map, "selectedColor"),
      indicatorSize: XSJSParse.getDouble(context, bo, map, "indicatorSize", defaultValue: 12.0),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
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

//-------------- V -----------------
//****** VerticalDivider ******
class XSProxyVerticalDivider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "VerticalDivider";
    return {
      regClassName: () => XSProxyVerticalDivider()..init(className: regClassName)
    };
  }

  @override
  VerticalDivider constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return VerticalDivider(
      key: XSJSParse.getKey(context, bo, map, "key"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      thickness: XSJSParse.getDouble(context, bo, map, "thickness"),
      indent: XSJSParse.getDouble(context, bo, map, "indent"),
      endIndent: XSJSParse.getDouble(context, bo, map, "endIndent"),
      color: XSJSParse.getColor(context, bo, map, "color"),
    );
  }
}

//****** Visibility ******
class XSProxyVisibility extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Visibility";
    return {
      regClassName: () => XSProxyVisibility()..init(className: regClassName)
    };
  }

  @override
  Visibility constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Visibility(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      replacement: XSJSParse.getWidget(context, bo, map, "replacement"),
      visible: XSJSParse.getBool(context, bo, map, "visible", defaultValue: true),
      maintainState: XSJSParse.getBool(context, bo, map, "maintainState", defaultValue: false),
      maintainAnimation: XSJSParse.getBool(context, bo, map, "maintainAnimation", defaultValue: false),
      maintainSize: XSJSParse.getBool(context, bo, map, "maintainSize", defaultValue: false),
      maintainSemantics: XSJSParse.getBool(context, bo, map, "maintainSemantics", defaultValue: false),
      maintainInteractivity: XSJSParse.getBool(context, bo, map, "maintainInteractivity", defaultValue: false),
    );
  }
}

//-------------- W -----------------
//****** WidgetSpan ******
class XSProxyWidgetSpan extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "WidgetSpan";
    return {
      regClassName: () => XSProxyWidgetSpan()..init(className: regClassName)
    };
  }

  @override
  WidgetSpan constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return WidgetSpan(
      child: XSJSParse.getWidget(context, bo, map, "child"),
      alignment: XSJSParse.getPlaceholderAlignment(context, bo, map, "alignment", defaultValue: PlaceholderAlignment.bottom),
      baseline: XSJSParse.getTextBaseline(context, bo, map, "baseline"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
    );
  }
}

//****** WillPopScope ******
class XSProxyWillPopScope extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "WillPopScope";
    return {
      regClassName: () => XSProxyWillPopScope()..init(className: regClassName)
    };
  }

  @override
  WillPopScope constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return WillPopScope(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      onWillPop: XSJSParse.getVoidCallback(context, bo, map, "onWillPop"),
    );
  }
}
