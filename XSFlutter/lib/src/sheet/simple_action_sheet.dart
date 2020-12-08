/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 简单Action Sheet
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class XSSimpleActionSheet {
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
    showDialog(
        context: context,
        barrierDismissible: true,
        builder: (BuildContext context) {
          return SimpleDialog(
              title: titleContent ?? Text(title),
              contentPadding: EdgeInsets.all(20),
              // 设置成 圆角
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              children: _getWidgetList(context, itemList: itemList, onTap: onTap));
        });
  }

  static List<Widget> _getWidgetList(
    BuildContext context, {
    List<String> itemList,
    ValueSetter<int> onTap,
  }) {
    List<Widget> _list = List<Widget>();

    if (itemList != null) {
      for (int i = 0; i < itemList.length; i++) {
        _list.add(SimpleDialogOption(
          onPressed: () {
            Navigator.pop(context);
            if (onTap != null) {
              onTap(i);
            }
          },
          child: Text(
            itemList[i],
            style: TextStyle(color: Colors.black),
          ),
        ));
      }
    }
    return _list;
  }
}
