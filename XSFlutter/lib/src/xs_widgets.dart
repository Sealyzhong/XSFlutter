import 'package:flutter/material.dart';
import 'xs_js_flutter.dart';
import 'xs_js_flutter_common.dart';

/// XSJSPageWidget包装了JSWidget，用于Flutter push一个使用XSFlutter框架编写的页面
///
///@param jsWidgetName: "jsWidgetName",在js_src/main.js  MyApp::createJSWidgetWithName 函数中使用, MyApp::createJSWidgetWithName 通过jsWidgetName来创建对应的JSWidget
///
/// '''dart
///
///      Navigator.push(
///          context,
///          MaterialPageRoute(
///              builder: (context) => XSJSPageWidget(
///                  jsWidgetName: "MyJSWidgetHomePage")));
///
/// '''
///
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

    var mediaQueryData = MediaQuery.of(context);
    var themeData = Theme.of(context);
    var iconThemeData = IconTheme.of(context);

    XSJSLog.log("'XSJSPageWidget::build': XSFlutter.getInstance().navigatorPushWithName: $jsWidgetName key:$key");

    _jsWidgetChild = XSFlutter.getInstance().navigatorPushWithName(jsWidgetName, key, themeData: themeData, mediaQueryData: mediaQueryData, iconThemeData: iconThemeData);

    return _jsWidgetChild;
  }
}
