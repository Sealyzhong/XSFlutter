/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 自定义Action Sheet
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

/// Display a platform dependent Action Sheet
class XSCustomActionSheet {
  /// Function to display the sheet
  static void displaySheet(BuildContext context, {Widget title, Widget message, @required List<XSCustomActionSheetAction> actions}) {
    _showCupertinoActionSheet(context, title, message, actions);
  }

  /*
  * 采用一个按钮显示
  * */
  static void show(
    BuildContext context, {
    String title = "温馨提示",
    Widget titleContent,
    List<String> itemList,
    ValueSetter<int> onTap,
  }) {
    XSCustomActionSheet.displaySheet(context, title: titleContent ?? Text(title), actions: _getWidgetList(context, itemList: itemList, onTap: onTap));
  }

  static List<XSCustomActionSheetAction> _getWidgetList(
    BuildContext context, {
    List<String> itemList,
    ValueSetter<int> onTap,
  }) {
    List<XSCustomActionSheetAction> _list = List<XSCustomActionSheetAction>();

    if (itemList != null) {
      for (int i = 0; i < itemList.length; i++) {
        _list.add(
          XSCustomActionSheetAction(
              onPressed: () {
                Navigator.pop(context);
                if (onTap != null) {
                  onTap(i);
                }
              },
              text: itemList[i]),
        );
      }
    }

    _list.add(XSCustomActionSheetAction(
        text: "取消",
        onPressed: () {
          Navigator.pop(context);
          if (onTap != null) {
            onTap(-1);
          }
        },
        isCancel: true,
        defaultAction: true,
        textColor: Colors.red));
    return _list;
  }

  static void _showCupertinoActionSheet(BuildContext context, title, message, List<XSCustomActionSheetAction> actions) {
    final noCancelOption = -1;
    // Cancel action is treated differently with CupertinoActionSheets
    var indexOfCancel = actions.lastIndexWhere((action) => action.isCancel);
    CupertinoActionSheet actionSheet;
    actionSheet = indexOfCancel == noCancelOption ? CupertinoActionSheet(title: title, message: message, actions: actions.where((action) => !action.isCancel).map<Widget>(_cupertinoActionFromAction).toList()) : CupertinoActionSheet(title: title, message: message, actions: actions.where((action) => !action.isCancel).map<Widget>(_cupertinoActionFromAction).toList(), cancelButton: _cupertinoActionFromAction(actions[indexOfCancel]));
    showCupertinoModalPopup(context: context, builder: (_) => actionSheet);
  }

  static CupertinoActionSheetAction _cupertinoActionFromAction(XSCustomActionSheetAction action) => CupertinoActionSheetAction(
        child: Text(
          action.text,
          style: TextStyle(fontSize: 16, color: action.textColor),
        ),
        onPressed: action.onPressed,
        isDefaultAction: action.defaultAction,
      );
}

/// Data class for Actions in ActionSheet
class XSCustomActionSheetAction {
  /// Text to display
  final String text;

  /// The function which will be called when the action is pressed
  final VoidCallback onPressed;

  /// Is this a default action - especially for iOS
  final bool defaultAction;

  /// This is a cancel option - especially for iOS
  final bool isCancel;

  /// on Android indicates that further options are next
  final bool hasArrow;

  final Color textColor;

  /// Construction of an XSCustomActionSheetAction
  XSCustomActionSheetAction({
    @required this.text,
    @required this.onPressed,
    this.defaultAction = false,
    this.isCancel = false,
    this.hasArrow = false,
    this.textColor = Colors.black,
  });
}
