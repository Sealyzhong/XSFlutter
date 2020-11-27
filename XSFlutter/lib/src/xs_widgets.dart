import 'package:flutter/material.dart';
import 'xs_js_flutter.dart';

// ignore: must_be_immutable
class XSJSPageWidget extends StatelessWidget {
  XSJSPageWidget({this.jsWidgetName, Key key}) {
    this.key = key ?? UniqueKey();
  }
  String jsWidgetName;
  Key key;

  Widget _jsWidgetChild;

  @override
  Widget build(BuildContext context) {
    if (_jsWidgetChild != null) {
      return _jsWidgetChild;
    }

    _jsWidgetChild = XSFlutter.getInstance().navigatorPushWithName(jsWidgetName, key);

    return _jsWidgetChild;
  }
}
