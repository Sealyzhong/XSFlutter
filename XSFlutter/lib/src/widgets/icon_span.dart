/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 扩展TextSpan控件
 */

import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';

class IconSpan extends TextSpan {
  final IconData icon;
  final Color color;
  final double fontSize;
  final GestureRecognizer recognizer;

  IconSpan({this.icon, this.color, this.fontSize, this.recognizer})
      : assert(icon != null),
        super(
            text: String.fromCharCode(icon.codePoint),
            recognizer: recognizer,
            style: TextStyle(
              inherit: false,
              color: color,
              fontSize: fontSize,
              fontFamily: icon.fontFamily,
              package: icon.fontPackage,
            ));
}
