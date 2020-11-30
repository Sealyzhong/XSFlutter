/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 提示框
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class XSCupertinoAlertDialog{
  /*
  * 采用一个按钮显示
  * */
  static void showWithOne(BuildContext context,{
    String title="温馨提示",
    Widget titleContent,
    String desc="",
    Widget descContent,
    String buttonText="确定",
    Color buttonTextColor,
    VoidCallback onTap,
    bool barrierDismissible=false,
  }){
    showDialog(context: context,
        barrierDismissible: barrierDismissible,
        builder: (BuildContext context) {
          return CupertinoAlertDialog(
        title: titleContent??Text(title),
        content: descContent??Padding(padding: EdgeInsets.only(top: 10),child:Text(desc)),
        actions:<Widget>[
          CupertinoDialogAction(
            onPressed: (){
              Navigator.pop(context);
              if(onTap!=null){
                onTap();
              }
            },
            child: Text(buttonText,style: TextStyle(color: buttonTextColor??Theme.of(context).primaryColor),
            ),
          )
        ]
    );});
  }

  static void showWithTwo(BuildContext context,{
    String title="温馨提示",
    Widget titleContent,
    String desc="",
    Widget descContent,

    String cancelText="取消",
    Color cancelTextColor,
    VoidCallback onCancelTap,

    String okText="确定",
    Color okTextColor,
    VoidCallback onOkTap,
    bool barrierDismissible=false,
  }){

    //提示是否
    showDialog(context: context,
        barrierDismissible: barrierDismissible,
        builder: (BuildContext context) {
      return CupertinoAlertDialog(
        title: titleContent??Text(title),
        content: descContent??Padding(padding: EdgeInsets.only(top: 10),child:Text(desc)),
        actions:<Widget>[
          CupertinoDialogAction(
            onPressed: (){
              Navigator.pop(context);
              if(onCancelTap!=null){
                onCancelTap();
              }
            },
            child: Text(cancelText,style: TextStyle(color: cancelTextColor??Colors.black),
            ),
          ),
          CupertinoDialogAction(
            onPressed: (){
              Navigator.pop(context);
              if(onOkTap!=null){
                onOkTap();
              }
            },
            child: Text(okText,style: TextStyle(color: okTextColor??Theme.of(context).primaryColor),
            ),
          ),
        ]
    );});
  }
}