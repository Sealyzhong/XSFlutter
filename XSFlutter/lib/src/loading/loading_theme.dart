import 'package:flutter/material.dart';

import 'loading_type.dart';
import 'loading.dart';


class XSLoadingTheme {

  /// color of indicator
  static Color get indicatorColor =>
      XSLoading.instance.loadingStyle == XSLoadingStyle.custom
          ? XSLoading.instance.indicatorColor
          : XSLoading.instance.loadingStyle == XSLoadingStyle.dark
          ? Colors.white
          : Colors.black;

  /// progress color of loading
  static Color get progressColor =>
      XSLoading.instance.loadingStyle == XSLoadingStyle.custom
          ? XSLoading.instance.progressColor
          : XSLoading.instance.loadingStyle == XSLoadingStyle.dark
          ? Colors.white
          : Colors.black;

  /// background color of loading
  static Color get backgroundColor =>
      XSLoading.instance.loadingStyle == XSLoadingStyle.custom
          ? XSLoading.instance.backgroundColor
          : XSLoading.instance.loadingStyle == XSLoadingStyle.dark
          ? Colors.black.withOpacity(0.9)
          : Colors.white;

  /// font color of status
  static Color get textColor =>
      XSLoading.instance.loadingStyle == XSLoadingStyle.custom
          ? XSLoading.instance.textColor
          : XSLoading.instance.loadingStyle == XSLoadingStyle.dark
          ? Colors.white
          : Colors.black;

  /// mask color of loading
  static Color get maskColor =>
      XSLoading.instance.maskType == XSLoadingMaskType.custom
          ? XSLoading.instance.maskColor
          : XSLoading.instance.maskType == XSLoadingMaskType.black
          ? Colors.black.withOpacity(0.5)
          : Colors.transparent;

  /// font size of status
  static double get fontSize => XSLoading.instance.fontSize;

  /// size of indicator
  static double get indicatorSize => XSLoading.instance.indicatorSize;

  /// width of progress indicator
  static double get progressWidth => XSLoading.instance.progressWidth;

  /// width of indicator
  static double get lineWidth => XSLoading.instance.lineWidth;

  /// loading indicator type
  static XSLoadingIndicatorType get indicatorType => XSLoading.instance.indicatorType;

  /// display duration
  static Duration get displayDuration => XSLoading.instance.displayDuration;

  /// contentPadding of loading
  static EdgeInsets get contentPadding => XSLoading.instance.contentPadding;

  /// padding of status
  static EdgeInsets get textPadding => XSLoading.instance.textPadding;

  /// textAlign of status
  static TextAlign get textAlign => XSLoading.instance.textAlign;

  /// radius of loading
  static double get radius => XSLoading.instance.radius;

  static bool get ignoring =>
      XSLoading.instance.userInteractions ??
          (XSLoading.instance.maskType == XSLoadingMaskType.none
              ? true
              : false);
}
