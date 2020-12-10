/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 提示框
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'triangle_painter.dart';

class CustomPopupMenuItem {
  //标题
  final String title;

  final TextStyle titleTextStyle;
  //显示图标
  final Widget image;
  CustomPopupMenuItem({
    this.image,
    @required this.title,
    this.titleTextStyle,
  });
}

class CustomPopupMenu {
  /*
  * 下拉菜单显示
  * superKey:点击菜单按钮关键字
  * menuList:菜单列表
  * barrierDismissible:点击空白区是否隐藏
  * textFontSize:菜单文本字体大小
  * width:
  * */
  static void show({
    BuildContext context,
    GlobalKey superkey,
    List<CustomPopupMenuItem> menuList,
    bool barrierDismissible = true,
    Color bgColor,
    double textFontSize = 15,
    ValueSetter<int> onTap,
  }) {
    if (superkey == null) return;

    //获取最长文字
    int maxLen = 0;
    for (var m in menuList) {
      maxLen = m.title.length > maxLen ? m.title.length : maxLen;
    }
    //内容宽度
    double contextWidth = 72.0 + maxLen * textFontSize;

    //获取按钮的坐标
    Offset offset = Offset.zero;
    RenderBox renderBox;

    if (superkey != null) {
      renderBox = superkey.currentContext.findRenderObject();
      offset = renderBox.localToGlobal(Offset.zero);
    }

    //获取屏幕的宽度
    MediaQueryData mediaQuery = MediaQuery.of(context);
    double screenWidth = mediaQuery.size.width;

    //边距(左右)
    double edgeDistance = 10;

    //获取菜单坐标点(左)
    double left = offset.dx;
    if (left < edgeDistance) {
      left = edgeDistance;
    } else if ((left + contextWidth) > (screenWidth - edgeDistance)) {
      left = screenWidth - edgeDistance - contextWidth;
    }

    //三角形宽度
    double painterWidth = 16;
    //三角形高度
    double painterHeight = 6;
    //三角形最左坐标
    double minLeft = left + 5;
    //三角形最右坐标
    double maxLeft = left + contextWidth - 5 - painterWidth;
    //计算三角形坐标(点击控件的中心点)
    double painterLeft = offset.dx;
    if (renderBox != null) {
      painterLeft = offset.dx + renderBox.size.width * 0.5 - painterWidth * 0.5;
    }

    //修正坐标是否超出范围
    painterLeft = painterLeft < minLeft ? minLeft : painterLeft;
    painterLeft = painterLeft > maxLeft ? maxLeft : painterLeft;

    //print('Left:$left painterLeft:$painterLeft dx:${offset.dx} widht:${renderBox.size.width}');
    //print('Left:$left minLeft:$minLeft  maxLeft:$maxLeft painterLeft:$painterLeft');
    //菜单背景颜色
    Color bgColor1 = bgColor ?? Color.fromRGBO(75, 75, 75, 1.0);
    //菜单坐标(顶)
    double top = offset.dy;
    if (renderBox != null) {
      top = offset.dy + renderBox.size.height * 0.5 + 10;
    }
    //内容高度
    double contextHeight = 51.0 * menuList.length;

    showGeneralDialog(
      context: context ?? superkey.currentState.context,
      barrierLabel: "",
      barrierDismissible: barrierDismissible,
      transitionDuration: Duration(milliseconds: 300),
      pageBuilder: (BuildContext context, Animation animation, Animation secondaryAnimation) {
        return ConstrainedBox(
            constraints: BoxConstraints.expand(),
            child: Stack(
              children: <Widget>[
                //画三角形
                Positioned(
                    top: top,
                    left: painterLeft,
                    child: Container(
                      child: CustomPaint(
                        size: Size(painterWidth, painterHeight),
                        painter: CustomTrianglePainter(isDown: false, bgColor: bgColor1),
                      ),
                    )),

                //画菜单内容
                Positioned(
                  top: top + painterHeight,
                  left: left,
                  child: Container(
                      decoration: BoxDecoration(color: bgColor1, borderRadius: BorderRadius.circular(5)),
                      width: contextWidth,
                      height: contextHeight,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: _getMenuList(context, menuList, onTap: onTap),
                      )),
                ),
              ],
            ));
      },
    );
  }

  /*
  * 菜单列表
  * context:内容
  * menuList:菜单列表数据
  * textColor:文本颜色
  * textFontSize:字体大小
  * onBack:点击返回
  * */
  static List<Widget> _getMenuList(
    BuildContext context,
    List<CustomPopupMenuItem> menuList, {
    ValueSetter<int> onTap,
  }) {
    List<Widget> list = List<Widget>();
    for (int i = 0; i < menuList.length; i++) {
      CustomPopupMenuItem item = menuList[i];
      list.add(
        GestureDetector(
          onTap: () {
            if (onTap != null) {
              Navigator.of(context).pop();
              onTap(i);
            }
          },
          child: Row(
            children: <Widget>[
              //菜单图标
              Padding(padding: EdgeInsets.only(left: 12, right: 12), child: item.image),

              //菜单文本
              Expanded(
                  child: Container(
                      decoration: BoxDecoration(
                        border: i < (menuList.length - 1) ? Border(bottom: BorderSide(color: Colors.grey[600], width: 0.5)) : null,
                      ),
                      child: Padding(
                        padding: EdgeInsets.only(left: 0, right: 20, top: 14, bottom: 14),
                        child: Text(
                          item.title,
                          textScaleFactor: 1.0,
                          style: item.titleTextStyle,
                        ),
                      ))),
            ],
          ),
        ),
      );
    }
    return list;
  }
}
