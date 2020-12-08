/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 提示框
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../xs_json_proxy_dialog.dart';

class SimpleAlertDialog {
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
    List<SimpleDialogButtonInfo> buttons,
    bool barrierDismissible = false,
  }) {
    var widgetList = List<Widget>();
    if (buttons != null && buttons.length > 0) {
      for (var i = 0; i < buttons.length; i++) {
        var model = buttons[i];
        //var textStyle = TextStyle(color: Theme.of(context).primaryColor);
        widgetList.add(FlatButton(
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

    showDialog(
        context: context,
        barrierDismissible: barrierDismissible,
        builder: (BuildContext context) {
          return AlertDialog(
              title: titleContent ?? Text(title),
              content: descContent ?? Padding(padding: EdgeInsets.only(top: 10), child: Text(desc)),
              contentPadding: EdgeInsets.all(20),
              // 设置成 圆角
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              actions: widgetList);
        });
  }
}
