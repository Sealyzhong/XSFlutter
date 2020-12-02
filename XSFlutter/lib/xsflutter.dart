//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.
library xsflutter;

///*XSFluttr的对外接口类
///简单两步接入XSFlutter，打开JS编写的页面。
///1. 启动运行JS代码 'XSFlutter.getInstance().runJSApp();'
///2. Push JS页面
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
///
export 'src/xs_js_flutter.dart';
export 'src/xs_widgets.dart';
export 'src/xs_js_flutter_common.dart';
export 'src/xs_json_to_dart.dart';
export 'src/xs_js_parse.dart';
export 'src/loading/loading.dart';
export 'src/common/screen_info.dart';
export 'src/common/package_info.dart';
export 'src/package/mask_text_input_formatter.dart';
