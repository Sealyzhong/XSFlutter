//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:xsflutter/src/alert/custom_alert_dialog.dart';
import 'package:xsflutter/src/widgets/popup_menu.dart';
import 'package:xsflutter/xsflutter.dart';
import 'alert/simple_cupertino_dialog.dart';
import 'alert/simple_alert_dialog.dart';
import 'loading/loading.dart';
import 'sheet/custom_action_sheet.dart';
import 'sheet/simple_action_sheet.dart';
import 'xs_js_flutter.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperDialogSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyDialog.registerProxy());
    m.addAll(XSProxyAlertDialog.registerProxy());
    m.addAll(XSProxySimpleDialog.registerProxy());

    m.addAll(XSProxyCupertinoAlertDialog.registerProxy());
    m.addAll(XSProxyCupertinoActionSheet.registerProxy());
    m.addAll(XSProxyCupertinoActionSheetAction.registerProxy());
    m.addAll(XSProxyBottomSheet.registerProxy());

    return m;
  }
}

//****** AlertDialog ******
class XSProxyAlertDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AlertDialog";
    return {
      regClassName: () => XSProxyAlertDialog()..init(className: regClassName)
    };
  }

  @override
  AlertDialog constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AlertDialog(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      titlePadding: XSJSParse.getEdgeInsets(context, bo, map, "titlePadding"),
      titleTextStyle: XSJSParse.getTextStyle(context, bo, map, "titleTextStyle"),
      content: XSJSParse.getWidget(context, bo, map, "content"),
      contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding", defaultValue: const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0)),
      contentTextStyle: XSJSParse.getTextStyle(context, bo, map, "contentTextStyle"),
      actions: XSJSParse.getWidgetList(context, bo, map, "actions"),
      actionsPadding: XSJSParse.getEdgeInsets(context, bo, map, "actionsPadding", defaultValue: EdgeInsets.zero),
      actionsOverflowDirection: XSJSParse.getVerticalDirection(context, bo, map, "actionsOverflowDirection"),
      actionsOverflowButtonSpacing: XSJSParse.getDouble(context, bo, map, "actionsOverflowButtonSpacing"),
      buttonPadding: XSJSParse.getEdgeInsets(context, bo, map, "buttonPadding"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      insetPadding: XSJSParse.getEdgeInsets(context, bo, map, "insetPadding", defaultValue: EdgeInsets.symmetric(horizontal: 40.0, vertical: 24.0)),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      scrollable: XSJSParse.getBool(context, bo, map, "scrollable", defaultValue: false),
    );
  }
}

//****** SimpleDialog ******
class XSProxySimpleDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SimpleDialog";
    return {
      regClassName: () => XSProxySimpleDialog()..init(className: regClassName)
    };
  }

  @override
  SimpleDialog constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SimpleDialog(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      titlePadding: XSJSParse.getEdgeInsets(context, bo, map, "titlePadding", defaultValue: const EdgeInsets.fromLTRB(24.0, 24.0, 24.0, 0.0)),
      titleTextStyle: XSJSParse.getTextStyle(context, bo, map, "titleTextStyle"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
      contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding", defaultValue: const EdgeInsets.fromLTRB(24.0, 20.0, 24.0, 24.0)),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
    );
  }
}

//****** CupertinoAlertDialog ******
class XSProxyCupertinoAlertDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoAlertDialog";
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
      actions: XSJSParse.getWidgetList(context, bo, map, "actions", defaultValue: const <Widget>[]),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      actionScrollController: XSJSParse.getObject(context, bo, map, "actionScrollController"),
      insetAnimationDuration: XSJSParse.getDuration(context, bo, map, "insetAnimationDuration", defaultValue: const Duration(milliseconds: 100)),
      insetAnimationCurve: XSJSParse.getCurve(context, bo, map, "insetAnimationCurve", defaultValue: Curves.decelerate),
    );
  }
}

//****** BottomSheet ******
class XSProxyBottomSheet extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "BottomSheet";
    return {
      regClassName: () => XSProxyBottomSheet()..init(className: regClassName)
    };
  }

  @override
  BottomSheet constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return BottomSheet(
      key: XSJSParse.getKey(context, bo, map, "key"),
      animationController: XSJSParse.getObject(context, bo, map, "animationController"),
      enableDrag: XSJSParse.getBool(context, bo, map, "enableDrag", defaultValue: true),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior"),
      onClosing: XSJSParse.getVoidCallback(context, bo, map, "onClosing"),
      builder: (context) {
        return XSJSParse.getWidget(context, bo, map, "child");
      },
    );
  }
}

//****** CupertinoActionSheet ******
class XSProxyCupertinoActionSheet extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoActionSheet";
    return {
      regClassName: () => XSProxyCupertinoActionSheet()..init(className: regClassName)
    };
  }

  @override
  CupertinoActionSheet constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoActionSheet(
      key: XSJSParse.getKey(context, bo, map, "key"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      message: XSJSParse.getWidget(context, bo, map, "message"),
      actions: XSJSParse.getWidgetList(context, bo, map, "actions"),
      messageScrollController: XSJSParse.getObject(context, bo, map, "messageScrollController"),
      actionScrollController: XSJSParse.getObject(context, bo, map, "actionScrollController"),
      cancelButton: XSJSParse.getWidget(context, bo, map, "cancelButton"),
    );
  }
}

//****** CupertinoActionSheetAction ******
class XSProxyCupertinoActionSheetAction extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CupertinoActionSheetAction";
    return {
      regClassName: () => XSProxyCupertinoActionSheetAction()..init(className: regClassName)
    };
  }

  @override
  CupertinoActionSheetAction constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CupertinoActionSheetAction(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onPressed: XSJSParse.getVoidCallback(context, bo, map, "onPressed"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      isDefaultAction: XSJSParse.getBool(context, bo, map, "isDefaultAction", defaultValue: false),
      isDestructiveAction: XSJSParse.getBool(context, bo, map, "isDestructiveAction", defaultValue: false),
    );
  }
}

class CustomDialogButtonInfo {
  final String text;
  final TextStyle textStyle;
  final Color bgColor;
  const CustomDialogButtonInfo({this.text, this.textStyle, this.bgColor});
}

class SimpleDialogButtonInfo {
  final String text;
  final TextStyle textStyle;
  const SimpleDialogButtonInfo({this.text, this.textStyle});
}

class XSDialogParse {
  //****** List<SampleDialogModel> ******/
  static List<SimpleDialogButtonInfo> getDialogSimpleButtonInfolList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<SimpleDialogButtonInfo> defaultValue}) {
    var li = XSJSParse.getList(context, bo, map, key);
    if (li != null && li.length > 0) {
      List<SimpleDialogButtonInfo> list = List<SimpleDialogButtonInfo>();
      for (var m in li) {
        list.add(SimpleDialogButtonInfo(
          text: XSJSParse.getString(context, bo, m, "text"),
          textStyle: XSJSParse.getTextStyle(context, bo, m, "textStyle", defaultValue: TextStyle(color: Colors.black87)),
        ));
      }
      return list;
    }
    return defaultValue;
  }

  //****** List<CustomDialogButtonInfo> ******/
  static List<CustomDialogButtonInfo> getCustomDialogButtonInfolList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<CustomDialogButtonInfo> defaultValue}) {
    var li = XSJSParse.getList(context, bo, map, key);
    if (li != null && li.length > 0) {
      List<CustomDialogButtonInfo> list = List<CustomDialogButtonInfo>();
      for (var m in li) {
        list.add(CustomDialogButtonInfo(
          text: XSJSParse.getString(context, bo, m, "text"),
          textStyle: XSJSParse.getTextStyle(context, bo, m, "textStyle", defaultValue: TextStyle(color: Colors.white)),
          bgColor: XSJSParse.getColor(context, bo, m, "bgColor", defaultValue: const Color.fromARGB(255, 0, 34, 66)),
        ));
      }
      return list;
    }
    return defaultValue;
  }

  //****** CustomAlertDialogAnimationType ******/
  static CustomAlertDialogAnimationType getCustomAlertDialogAnimationType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CustomAlertDialogAnimationType defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'fromRight':
          return CustomAlertDialogAnimationType.fromRight;
        case 'fromLeft':
          return CustomAlertDialogAnimationType.fromLeft;
        case 'fromTop':
          return CustomAlertDialogAnimationType.fromTop;
        case 'fromBottom':
          return CustomAlertDialogAnimationType.fromBottom;
        case 'grow':
          return CustomAlertDialogAnimationType.grow;
        case 'shrink':
          return CustomAlertDialogAnimationType.shrink;
      }
    }
    return defaultValue;
  }

  //****** CustomAlertDialogStyle ******/
  static CustomAlertDialogStyle getCustomAlertDialogStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CustomAlertDialogStyle defaultValue}) {
    var v = XSJSParse.getMap(context, bo, map, key);
    if (v != null) {
      return CustomAlertDialogStyle(
        animationType: XSDialogParse.getCustomAlertDialogAnimationType(context, bo, v, "animationType"),
        animationDuration: XSJSParse.getDuration(context, bo, v, "animationDuration"),
        alertBorder: XSJSParse.getShapeBorder(context, bo, v, "alertBorder"),
        isCloseButton: XSJSParse.getBool(context, bo, v, "isCloseButton"),
        isOverlayTapDismiss: XSJSParse.getBool(context, bo, v, "isOverlayTapDismiss"),
        backgroundColor: XSJSParse.getColor(context, bo, v, "backgroundColor"),
        overlayColor: XSJSParse.getColor(context, bo, v, "overlayColor"),
        buttonSpace: XSJSParse.getDouble(context, bo, v, "buttonSpace"),
        titleHeight: XSJSParse.getDouble(context, bo, v, "titleHeight"),
        titleStyle: XSJSParse.getTextStyle(context, bo, v, "titleStyle"),
        descStyle: XSJSParse.getTextStyle(context, bo, v, "descStyle"),
        buttonAreaPadding: XSJSParse.getEdgeInsets(context, bo, v, "buttonAreaPadding"),
        constraints: XSJSParse.getBoxConstraints(context, bo, v, "constraints"),
      );
    }
    return defaultValue;
  }

  //****** List<CustomAlertDialogButton> ******/
  static List<CustomAlertDialogButton> getCustomAlertDialogButtonList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<CustomAlertDialogButton> defaultValue}) {
    var li = XSJSParse.getList(context, bo, map, key);
    if (li != null && li.length > 0) {
      List<CustomAlertDialogButton> list = List<CustomAlertDialogButton>();
      for (var m in li) {
        list.add(CustomAlertDialogButton(
          key: XSJSParse.getKey(context, bo, m, "key"),
          onPressed: XSJSParse.getVoidCallback(context, bo, m, "onPressed"),
          child: XSJSParse.getWidget(context, bo, m, "child"),
          width: XSJSParse.getDouble(context, bo, m, "width"),
          height: XSJSParse.getDouble(context, bo, m, "height", defaultValue: 40.0),
          color: XSJSParse.getColor(context, bo, m, "bgColor"),
          gradient: XSJSParse.getGradient(context, bo, m, "gradient"),
          radius: XSJSParse.getBorderRadius(context, bo, m, "radius"),
        ));
      }
      return list;
    }
    return defaultValue;
  }

  //****** List<CustomPopupMenuItem> ******/
  static List<CustomPopupMenuItem> getCustomPopupMenuItemList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<CustomPopupMenuItem> defaultValue}) {
    var li = XSJSParse.getList(context, bo, map, key);
    if (li != null && li.length > 0) {
      List<CustomPopupMenuItem> list = List<CustomPopupMenuItem>();
      for (var m in li) {
        list.add(CustomPopupMenuItem(
          title: XSJSParse.getString(context, bo, m, "title"),
          titleTextStyle: XSJSParse.getTextStyle(context, bo, m, "titleTextStyle", defaultValue: const TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.normal, decoration: TextDecoration.none)),
          image: XSJSParse.getWidget(context, bo, m, "image"),
        ));
      }
      return list;
    }
    return defaultValue;
  }
}

//****** Dialog ******
class XSProxyDialog extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Dialog";
    return {
      regClassName: () => XSProxyDialog()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;

    ResponseModel result;

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
      case 'ShowDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showDialog(
          context: context,
          barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: true),
          useSafeArea: XSJSParse.getBool(context, bo, v, "useSafeArea", defaultValue: true),
          useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
          builder: (context) {
            return XSJSParse.getWidget(context, bo, v, "child");
          },
        );
        break;

      case 'ShowCupertinoDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showCupertinoDialog(
          context: context,
          barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: false),
          useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
          builder: (context) {
            return XSJSParse.getWidget(context, bo, v, "child");
          },
        );
        break;

      case 'ShowGeneralDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showGeneralDialog(
            context: context,
            barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: false),
            barrierLabel: XSJSParse.getString(context, bo, v, "barrierLabel"),
            barrierColor: XSJSParse.getColor(context, bo, v, "barrierColor", defaultValue: const Color(0x80000000)),
            transitionDuration: XSJSParse.getDuration(context, bo, v, "transitionDuration", defaultValue: const Duration(milliseconds: 200)),
            useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
            pageBuilder: (BuildContext context, Animation<double> animation, Animation<double> secondaryAnimation) {
              return XSJSParse.getWidget(context, bo, v, "child");
            });
        break;

      case 'ShowModalBottomSheet':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showModalBottomSheet(
            context: context,
            backgroundColor: XSJSParse.getColor(context, bo, v, "backgroundColor"),
            elevation: XSJSParse.getDouble(context, bo, v, "elevation"),
            shape: XSJSParse.getShapeBorder(context, bo, v, "shape"),
            clipBehavior: XSJSParse.getClip(context, bo, v, "clipBehavior"),
            barrierColor: XSJSParse.getColor(context, bo, v, "barrierColor"),
            isScrollControlled: XSJSParse.getBool(context, bo, v, "isScrollControlled", defaultValue: false),
            useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: false),
            isDismissible: XSJSParse.getBool(context, bo, v, "isDismissible", defaultValue: true),
            enableDrag: XSJSParse.getBool(context, bo, v, "enableDrag", defaultValue: true),
            builder: (context) {
              return XSJSParse.getWidget(context, bo, v, "child");
            });
        break;

      case 'ShowCupertinoModalPopup':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showCupertinoModalPopup(
            context: context,
            useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
            semanticsDismissible: XSJSParse.getBool(context, bo, v, "semanticsDismissible"),
            builder: (context) {
              return XSJSParse.getWidget(context, bo, v, "child");
            });
        break;

      case 'ShowMenu':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showMenu(
          context: context,
          useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: false),
          position: XSJSParse.getRelativeRect(context, bo, map, "position"),
          items: XSJSParse.getWidgetList(context, bo, map, "items"),
          initialValue: XSJSParse.getString(context, bo, map, "initialValue"),
          elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
          semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
          shape: XSJSParse.getShapeBorder(context, bo, map, "shape"),
          color: XSJSParse.getColor(context, bo, map, "color"),
          captureInheritedThemes: XSJSParse.getBool(context, bo, map, "captureInheritedThemes", defaultValue: true),
        );
        break;

      case 'ShowSimpleActionSheet':
        var v = XSJSParse.getMap(context, bo, map, "child");
        XSSimpleActionSheet.show(
          context,
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, v, "titleContent"),
          itemList: XSJSParse.getStringList(context, bo, v, "itemList"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'ShowCustomActionSheet':
        var v = XSJSParse.getMap(context, bo, map, "child");
        XSCustomActionSheet.show(
          context,
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, v, "titleContent"),
          itemList: XSJSParse.getStringList(context, bo, v, "itemList"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      //简化版
      case 'ShowSimpleCupertinoDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        SimpleCupertinoDialog.show(
          context,
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, v, "titleContent"),
          desc: XSJSParse.getString(context, bo, v, "desc", defaultValue: ""),
          descContent: XSJSParse.getWidget(context, bo, v, "descContent"),
          barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: false),
          actions: XSDialogParse.getDialogSimpleButtonInfolList(context, bo, v, "actions"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'ShowSimpleAlertDialog':
        var sub = XSJSParse.getMap(context, bo, map, "child");
        SimpleAlertDialog.show(
          context,
          title: XSJSParse.getString(context, bo, sub, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, sub, "titleContent"),
          desc: XSJSParse.getString(context, bo, sub, "desc", defaultValue: ""),
          descContent: XSJSParse.getWidget(context, bo, sub, "descContent"),
          barrierDismissible: XSJSParse.getBool(context, bo, sub, "barrierDismissible", defaultValue: false),
          actions: XSDialogParse.getDialogSimpleButtonInfolList(context, bo, sub, "actions"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, sub, "onTap"),
        );
        break;

      case 'ShowCustomAlertDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        CustomAlertDialog(
          context: context,
          style: XSDialogParse.getCustomAlertDialogStyle(context, bo, v, "style", defaultValue: const CustomAlertDialogStyle()),
          image: XSJSParse.getWidget(context, bo, v, "image"),
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          desc: XSJSParse.getString(context, bo, v, "desc"),
          content: XSJSParse.getWidget(context, bo, v, "content"),
          actions: XSDialogParse.getCustomAlertDialogButtonList(context, bo, v, "actions"),
          closeFunction: XSJSParse.getVoidCallback(context, bo, map, "closeFunction"),
        ).show();
        break;

      case 'ShowSimpleCustomDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        CustomAlertDialog.showSimple(
          context,
          style: XSDialogParse.getCustomAlertDialogStyle(context, bo, v, "style", defaultValue: const CustomAlertDialogStyle()),
          image: XSJSParse.getWidget(context, bo, v, "image"),
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          desc: XSJSParse.getString(context, bo, v, "desc"),
          content: XSJSParse.getWidget(context, bo, v, "content"),
          actions: XSDialogParse.getCustomDialogButtonInfolList(context, bo, v, "actions"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'ShowCustomPopupMenu':
        var v = XSJSParse.getMap(context, bo, map, "child");
        CustomPopupMenu.show(
          context: context,
          superkey: XSJSParse.getKey(context, bo, v, "superkey"),
          menuList: XSDialogParse.getCustomPopupMenuItemList(context, bo, v, "menuList"),
          barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: true),
          bgColor: XSJSParse.getColor(context, bo, v, "bgColor", defaultValue: const Color.fromRGBO(75, 75, 75, 1.0)),
          textFontSize: XSJSParse.getDouble(context, bo, v, "textFontSize", defaultValue: 15),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'ShowDatePicker':
        {
          var v = XSJSParse.getMap(context, bo, map, "child");
          var r = await showDatePicker(
              context: context,
              initialDate: XSJSParse.getDateTime(context, bo, v, "initialDate", defaultValue: DateTime.now()),
              firstDate: XSJSParse.getDateTime(context, bo, v, "firstDate", defaultValue: DateTime.now().add(Duration(days: -3650))),
              lastDate: XSJSParse.getDateTime(context, bo, v, "lastDate", defaultValue: DateTime.now().add(Duration(days: 3650))),
              currentDate: XSJSParse.getDateTime(context, bo, v, "currentDate"),
              initialEntryMode: XSJSParse.getDatePickerEntryMode(context, bo, v, "initialEntryMode", defaultValue: DatePickerEntryMode.calendar),
              helpText: XSJSParse.getString(context, bo, v, "helpText"),
              cancelText: XSJSParse.getString(context, bo, v, "cancelText"),
              confirmText: XSJSParse.getString(context, bo, v, "confirmText"),
              useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
              textDirection: XSJSParse.getTextDirection(context, bo, v, "textDirection"),
              initialDatePickerMode: XSJSParse.getDatePickerMode(context, bo, v, "initialDatePickerMode", defaultValue: DatePickerMode.day),
              errorFormatText: XSJSParse.getString(context, bo, v, "errorFormatText"),
              errorInvalidText: XSJSParse.getString(context, bo, v, "errorInvalidText"),
              fieldHintText: XSJSParse.getString(context, bo, v, "fieldHintText"),
              fieldLabelText: XSJSParse.getString(context, bo, v, "fieldLabelText"),
              builder: (context, child) {
                if (XSJSParse.checkMapKey(context, bo, v, "themeData")) {
                  return Theme(
                    data: XSJSParse.getThemeData(context, bo, v, "themeData"),
                    isMaterialAppTheme: XSJSParse.getBool(context, bo, v, "isMaterialAppTheme", defaultValue: false),
                    child: child,
                  );
                }

                return child;
              });
          if (r != null) {
            result = ResponseModel(isSuccess: true, data: r.millisecondsSinceEpoch);
          }
        }
        break;

      case 'dismiss':
        Navigator.pop(context);
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}
