/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 空数据视图
 */

import 'package:flutter/material.dart';

class EmptyDataWidget extends StatelessWidget {
  //标题
  final String title;
  //默认图片
  final String imageName;
  //默认图片大小
  final double imageSize;
  final Color backgroundColor;
  final TextStyle titleStyle;
  EmptyDataWidget({Key key, this.title = "没有数据", this.backgroundColor = Colors.transparent, this.titleStyle = const TextStyle(fontSize: 14, color: Colors.grey), this.imageName = "assets/images/nodata.png", this.imageSize = 160.0}) : super(key: key);

  //------------- 界面区 -------------
  @override
  Widget build(BuildContext context) {
    return Container(
        color: this.backgroundColor,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            //空白区
            Expanded(
              child: Container(),
              flex: 2,
            ),

            //1、图片
            Container(
              width: this.imageSize,
              child: Image.asset(_getImgPath(this.imageName)),
            ),

            //标签...
            Container(
                margin: EdgeInsets.symmetric(horizontal: 30),
                child: Text(
                  this.title,
                  textAlign: TextAlign.center,
                  style: this.titleStyle,
                )),

            //空白区
            Expanded(
              child: Container(),
              flex: 3,
            ),
          ],
        ));
  }

  /*
  * 获取图片路经
  * @name:图片名称
  * @format:图片格式(后缀名)
  * */
  String _getImgPath(String name, {String format: 'png'}) {
    //是否含格式
    if (name.contains('.')) {
      return name;
    }
    return '$name.$format';
  }
}
