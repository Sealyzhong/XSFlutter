/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 加载
 */

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'loading_type.dart';
import 'loading_theme.dart';
import 'circle.dart';
import 'fading_circle.dart';


class XSLoadingIndicator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final double _size = XSLoadingTheme.indicatorSize;
    double _width = _size;
    /// indicator color of loading
    final Color _indicatorColor = XSLoadingTheme.indicatorColor;

    Widget _indicator;

    switch (XSLoadingTheme.indicatorType) {
      case XSLoadingIndicatorType.fadingCircle:
        _indicator = XSLoadingFadingCircle(
          color: _indicatorColor,
          size: _size,
        );
        break;
      case XSLoadingIndicatorType.circle:
        _indicator = XSLoadingCircle(
          color: _indicatorColor,
          size: _size,
        );
        break;
      default:
        _indicator = Container(width: _size,height: _size, child: CircularProgressIndicator(valueColor: AlwaysStoppedAnimation(_indicatorColor,)));
        break;
    }

    return Container(
      constraints: BoxConstraints(
        maxWidth: _width,
      ),
      child: _indicator,
    );
  }
}
