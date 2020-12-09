/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 提示框
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../xs_json_proxy_dialog.dart';

class SimpleCupertinoDialog {
  /*
  * 采用一个按钮显示
  * */
  static void show(
    BuildContext context, {
    String title = "温馨提示",
    Widget titleContent,
    String desc = "",
    Widget descContent,
    ValueSetter<int> onTap,
    List<SimpleDialogButtonInfo> actions,
    bool barrierDismissible = false,
  }) {
    var widgetList = List<Widget>();
    if (actions != null && actions.length > 0) {
      for (var i = 0; i < actions.length; i++) {
        var model = actions[i];
        widgetList.add(CupertinoDialogAction(
          onPressed: () {
            Navigator.pop(context);
            if (onTap != null) {
              onTap(i);
            }
          },
          child: Text(
            model.text,
            style: model.textStyle,
          ),
        ));
      }
    }

    showCupertinoDialog(
        context: context,
        barrierDismissible: barrierDismissible,
        builder: (BuildContext context) {
          return CupertinoAlertDialog(title: titleContent ?? Text(title), content: descContent ?? Padding(padding: EdgeInsets.only(top: 10), child: Text(desc)), actions: widgetList);
        });
  }
}
