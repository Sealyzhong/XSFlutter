//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/foundation.dart';

class XSJSLog {
  static debug(Object object) {
    if (kDebugMode) {
      String log = "XSFlutter:[Flutter]-[DEBUG]::";
      callNativelog(log, object);
    }
  }

  static log(Object object) {
    if (kDebugMode) {
      String log = "XSFlutter:[Flutter]-";
      callNativelog(log, object);
    }
  }

  static error(Object object) {
    String log = "XSFlutter:[Flutter]-[ERR]::";
    callNativelog(log, object);
  }

  static callNativelog(String prefix, Object object) {
    String log = "$prefix$object";
    print(log);
    //XSFlutter.getInstance().mxLog(log);
  }
}
