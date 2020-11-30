/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 屏幕管理.
 */

import 'package:flutter/material.dart';

class XSScreenInfo {
  // 设计稿屏幕宽度(PX)
  static double uiWidthPx = 750;
  //设计稿屏幕宽度(PX)
  static double uiHeightPx = 1334;
  //设计稿屏幕密度
  static double uiDensity = 2.0;
  //设计稿屏幕宽度(DP)
  static double uiWidth = 375.0;
  //设计稿屏幕宽度(DP)
  static double uiHeight = 667.0;

  static MediaQueryData mediaQueryData;

  //当前设备宽度 dp
  static double screenWidth = 375.0;
  // 当前设备高度 dp
  static double screenHeight = 667.0;
  // 当前设备宽度 px
  static double screenWidthPx = 750;
  // 当前设备高度 px
  static double screenHeightPx = 1334.0;
  // 设备的像素密度
  static double screenDensity = 2.0;
  // 状态栏高度 dp 刘海屏会更高
  static double statusBarHeight = 0.0;
  //底部工具栏高度
  static double bottomBarHeight = 0.0;
  //App栏高
  static double appBarHeight = 0.0;
  //缩放比例(Dp)
  static double dpRatio = 1.0;
  //缩放比例(PX)
  static double pxRatio = 1.0;
  //字体缩放放比例
  static double textScaleFactor;
  //是否使用缩放
  static bool _isUseRatio = true;
  //是否初始化成功
  static bool _isInit = false;

  /*
  * 初始化屏幕参数
  * width:设计稿宽度
  * height:设计稿高度
  * density:设计稿密度
  * isUseRatio:是否使用设计缩放
  * */
  static void init(BuildContext context, {double width = 750.0, double height = 1334.0, double density = 2.0, bool isUseRatio = true}) {
    if (_isInit) return;
    _isInit = true;
    uiWidthPx = width;
    uiHeightPx = height;
    uiDensity = 2.0;
    _isUseRatio = isUseRatio;

    MediaQueryData mediaQuery = MediaQuery.of(context);
    mediaQueryData = mediaQuery;
    screenDensity = mediaQuery.devicePixelRatio > 1.0 ? mediaQuery.devicePixelRatio : 1.0;
    screenWidth = mediaQuery.size.width;
    screenHeight = mediaQuery.size.height;
    screenWidthPx = screenWidth * screenDensity;
    screenHeightPx = screenHeight * screenDensity;
    statusBarHeight = mediaQuery.padding.top;
    bottomBarHeight = mediaQueryData.padding.bottom;
    appBarHeight = kToolbarHeight;
    uiWidth = uiWidthPx / uiDensity;
    uiHeight = uiHeightPx / uiDensity;

    dpRatio = screenHeight > screenWidth ? (screenWidth / uiWidth) : (screenHeight / uiHeight);
    pxRatio = screenDensity > 0.1 ? (dpRatio / screenDensity) : dpRatio;
    //字体比例
    textScaleFactor = mediaQuery.textScaleFactor;
  }

  /*
  * 将Dp按比例转换成Dp
  * */
  static double getSizeFromDp(double dp) {
    return _isUseRatio ? (dpRatio * dp) : dp;
  }

  /*
  * 将px按比例转换成Dp
  * */
  static double getSizeFromPx(double px) {
    return _isUseRatio ? (pxRatio * px) : px;
  }
}
