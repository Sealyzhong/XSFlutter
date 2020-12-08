//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:xsflutter/src/alert/custom_alert_dialog.dart';
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
    return m;
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
      case 'showDialog':
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

      case 'showCupertinoDialog':
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

      case 'showGeneralDialog':
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

      case 'showBottomSheet':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showBottomSheet(
            context: context,
            backgroundColor: XSJSParse.getColor(context, bo, v, "backgroundColor"),
            elevation: XSJSParse.getDouble(context, bo, v, "elevation"),
            shape: XSJSParse.getShapeBorder(context, bo, v, "shape"),
            clipBehavior: XSJSParse.getClip(context, bo, v, "clipBehavior"),
            builder: (context) {
              return XSJSParse.getWidget(context, bo, v, "child");
            });
        break;

      case 'showModalBottomSheet':
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

      case 'showCupertinoModalPopup':
        var v = XSJSParse.getMap(context, bo, map, "child");
        showCupertinoModalPopup(
            context: context,
            useRootNavigator: XSJSParse.getBool(context, bo, v, "useRootNavigator", defaultValue: true),
            semanticsDismissible: XSJSParse.getBool(context, bo, v, "semanticsDismissible"),
            builder: (context) {
              return XSJSParse.getWidget(context, bo, v, "child");
            });
        break;

      case 'showSimpleActionSheet':
        var v = XSJSParse.getMap(context, bo, map, "child");
        XSSimpleActionSheet.show(
          context,
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, v, "titleContent"),
          itemList: XSJSParse.getStringList(context, bo, v, "itemList"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'showCustomActionSheet':
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
      case 'showSimpleCupertinoDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        SimpleCupertinoDialog.show(
          context,
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, v, "titleContent"),
          desc: XSJSParse.getString(context, bo, v, "desc", defaultValue: ""),
          descContent: XSJSParse.getWidget(context, bo, v, "descContent"),
          barrierDismissible: XSJSParse.getBool(context, bo, v, "barrierDismissible", defaultValue: false),
          buttons: XSDialogParse.getDialogSimpleButtonInfolList(context, bo, v, "buttons"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'showSimpleAlertDialog':
        var sub = XSJSParse.getMap(context, bo, map, "child");
        SimpleAlertDialog.show(
          context,
          title: XSJSParse.getString(context, bo, sub, "title", defaultValue: "温馨提示"),
          titleContent: XSJSParse.getWidget(context, bo, sub, "titleContent"),
          desc: XSJSParse.getString(context, bo, sub, "desc", defaultValue: ""),
          descContent: XSJSParse.getWidget(context, bo, sub, "descContent"),
          barrierDismissible: XSJSParse.getBool(context, bo, sub, "barrierDismissible", defaultValue: false),
          buttons: XSDialogParse.getDialogSimpleButtonInfolList(context, bo, sub, "buttons"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, sub, "onTap"),
        );
        break;

      case 'showCustomAlertDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        CustomAlertDialog(
          context: context,
          style: XSDialogParse.getCustomAlertDialogStyle(context, bo, v, "style", defaultValue: const CustomAlertDialogStyle()),
          image: XSJSParse.getWidget(context, bo, v, "image"),
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          desc: XSJSParse.getString(context, bo, v, "desc"),
          content: XSJSParse.getWidget(context, bo, v, "content"),
          buttons: XSDialogParse.getCustomAlertDialogButtonList(context, bo, v, "buttons"),
          closeFunction: XSJSParse.getVoidCallback(context, bo, map, "closeFunction"),
        ).show();
        break;

      case 'showSimpleCustomDialog':
        var v = XSJSParse.getMap(context, bo, map, "child");
        CustomAlertDialog.showSimple(
          context,
          style: XSDialogParse.getCustomAlertDialogStyle(context, bo, v, "style", defaultValue: const CustomAlertDialogStyle()),
          image: XSJSParse.getWidget(context, bo, v, "image"),
          title: XSJSParse.getString(context, bo, v, "title", defaultValue: "温馨提示"),
          desc: XSJSParse.getString(context, bo, v, "desc"),
          content: XSJSParse.getWidget(context, bo, v, "content"),
          buttons: XSDialogParse.getCustomDialogButtonInfolList(context, bo, v, "buttons"),
          onTap: XSJSParse.getValueChanged<int>(context, bo, v, "onTap"),
        );
        break;

      case 'dismiss':
        Navigator.pop(context);
    }
  }
}
