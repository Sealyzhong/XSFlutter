//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:uuid/uuid.dart';

import 'common/screen_info.dart';
import 'common/sqlite_util.dart';
import 'models/response_model.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'loading/loading.dart';
import 'common/sp_util.dart';
import 'common/package_info.dart';
import 'package:wakelock/wakelock.dart';
import 'package:path_provider/path_provider.dart';
import 'package:permission_handler/permission_handler.dart';

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperPackageSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyLoading.registerProxy());
    m.addAll(XSProxySp.registerProxy());
    m.addAll(XSProxyScreenInfo.registerProxy());
    m.addAll(XSProxyPackageInfo.registerProxy());
    m.addAll(XSProxyWakelock.registerProxy());
    m.addAll(XSProxyUrlLauncher.registerProxy());
    m.addAll(XSProxyUuid.registerProxy());
    m.addAll(XSProxyPathProvider.registerProxy());
    m.addAll(XSProxyPermissionHandler.registerProxy());
    return m;
  }
}

//-------------- L -----------------
//****** XSLoading ******
class XSProxyLoading extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Loading";
    return {
      regClassName: () => XSProxyLoading()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) {
    if (mirrorObj == null) return;
    switch (funcName) {
      case 'dismiss':
        return XSLoading.dismiss(animation: XSJSParse.getBool(null, null, map, "animation", defaultValue: true));
      case 'show':
        return XSLoading.show(
          status: XSJSParse.getString(null, null, map, "info"),
          indicator: XSJSParse.getWidget(null, null, map, "indicator"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
      case 'showError':
        return XSLoading.showError(
          XSJSParse.getString(null, null, map, "info"),
          duration: XSJSParse.getDuration(null, null, map, "duration"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
      case 'showInfo':
        return XSLoading.showInfo(
          XSJSParse.getString(null, null, map, "info"),
          duration: XSJSParse.getDuration(null, null, map, "duration"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
      case 'showSuccess':
        return XSLoading.showSuccess(
          XSJSParse.getString(null, null, map, "info"),
          duration: XSJSParse.getDuration(null, null, map, "duration"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
      case 'showToast':
        return XSLoading.showToast(
          XSJSParse.getString(null, null, map, "info"),
          duration: XSJSParse.getDuration(null, null, map, "duration"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
      case 'showProgress':
        return XSLoading.showProgress(
          XSJSParse.getDouble(null, null, map, "value"),
          status: XSJSParse.getString(null, null, map, "info"),
          alignment: XSJSParse.getAlignment(null, null, map, "alignment", defaultValue: Alignment.center),
        );
    }
  }
}

//****** Sp ******
class XSProxySp extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Sp";
    return {
      regClassName: () => XSProxySp()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'getBool':
        result = ResponseModel(
            flag: true,
            data: XSSpUtil.getBool(
              XSJSParse.getString(null, null, map, "key"),
              defaultValue: XSJSParse.getBool(null, null, map, "defaultValue"),
            ));
        break;
      case 'getDouble':
        result = ResponseModel(
            flag: true,
            data: XSSpUtil.getDouble(
              XSJSParse.getString(null, null, map, "key"),
              defaultValue: XSJSParse.getDouble(null, null, map, "defaultValue"),
            ));
        break;
      case 'getInt':
        result = ResponseModel(
            flag: true,
            data: XSSpUtil.getInt(
              XSJSParse.getString(null, null, map, "key"),
              defaultValue: XSJSParse.getInt(null, null, map, "defaultValue"),
            ));
        break;
      case 'getString':
        result = ResponseModel(
            flag: true,
            data: XSSpUtil.getString(
              XSJSParse.getString(null, null, map, "key"),
              defaultValue: XSJSParse.getString(null, null, map, "defaultValue"),
            ));
        break;

      case 'clear':
        result = ResponseModel(flag: await XSSpUtil.clear());
        break;
      case 'remove':
        result = ResponseModel(flag: await XSSpUtil.remove(XSJSParse.getString(null, null, map, "key")));
        break;

      case 'setBool':
        result = ResponseModel(
            flag: await XSSpUtil.putBool(
          XSJSParse.getString(null, null, map, "key"),
          XSJSParse.getBool(null, null, map, "value"),
        ));
        break;

      case 'setDouble':
        result = ResponseModel(
            flag: await XSSpUtil.putDouble(
          XSJSParse.getString(null, null, map, "key"),
          XSJSParse.getDouble(null, null, map, "value"),
        ));
        break;
      case 'setInt':
        result = ResponseModel(
            flag: await XSSpUtil.putInt(
          XSJSParse.getString(null, null, map, "key"),
          XSJSParse.getInt(null, null, map, "value"),
        ));
        break;
      case 'setString':
        result = ResponseModel(
            flag: await XSSpUtil.putString(
          XSJSParse.getString(null, null, map, "key"),
          XSJSParse.getString(null, null, map, "value"),
        ));
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** ScreenInfo ******
class XSProxyScreenInfo extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ScreenInfo";
    return {
      regClassName: () => XSProxyScreenInfo()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'updateInfo':
        result = ResponseModel(flag: true, data: {
          "appBarHeight": XSScreenInfo.appBarHeight,
          "bottomBarHeight": XSScreenInfo.bottomBarHeight,
          "dpRatio": XSScreenInfo.dpRatio,
          "pxRatio": XSScreenInfo.pxRatio,
          "screenDensity": XSScreenInfo.screenDensity,
          "screenHeight": XSScreenInfo.screenHeight,
          "screenHeightPx": XSScreenInfo.screenHeightPx,
          "screenWidth": XSScreenInfo.screenWidth,
          "screenWidthPx": XSScreenInfo.screenWidthPx,
          "statusBarHeight": XSScreenInfo.statusBarHeight,
          "textScaleFactor": XSScreenInfo.textScaleFactor,
          "uiDensity": XSScreenInfo.uiDensity,
          "uiHeight": XSScreenInfo.uiHeight,
          "uiHeightPx": XSScreenInfo.uiHeightPx,
          "uiWidth": XSScreenInfo.uiWidth,
          "uiWidthPx": XSScreenInfo.uiWidthPx,
        });

        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** PackageInfo ******
class XSProxyPackageInfo extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PackageInfo";
    return {
      regClassName: () => XSProxyPackageInfo()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'updateInfo':
        result = ResponseModel(flag: true, data: {
          "appName": XSPackageInfo.appName,
          "buildNumber": XSPackageInfo.buildNumber,
          "packageName": XSPackageInfo.packageName,
          "version": XSPackageInfo.version
        });
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** Wakelock ******
class XSProxyWakelock extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Wakelock";
    return {
      regClassName: () => XSProxyWakelock()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'disable':
        await Wakelock.disable();
        result = ResponseModel(flag: true, data: false);
        break;
      case 'enable':
        await Wakelock.enable();
        result = ResponseModel(flag: true, data: true);
        break;
      case 'isEnabled':
        var v = await Wakelock.enabled;
        result = ResponseModel(flag: true, data: v);
        break;
    }
    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** UrlLauncher ******
class XSProxyUrlLauncher extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "UrlLauncher";
    return {
      regClassName: () => XSProxyUrlLauncher()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'openUrl':
        var urlString = XSJSParse.getString(null, null, map, "urlString");
        if (await canLaunch(urlString)) {
          result = ResponseModel(
              flag: await launch(
            urlString,
            forceSafariVC: XSJSParse.getBool(null, null, map, "forceSafariVC"),
            forceWebView: XSJSParse.getBool(null, null, map, "forceWebView"),
            enableJavaScript: XSJSParse.getBool(null, null, map, "enableJavaScript"),
            enableDomStorage: XSJSParse.getBool(null, null, map, "enableDomStorage"),
            universalLinksOnly: XSJSParse.getBool(null, null, map, "universalLinksOnly"),
            statusBarBrightness: XSJSParse.getBrightness(null, null, map, "statusBarBrightness"),
            webOnlyWindowName: XSJSParse.getString(null, null, map, "webOnlyWindowName"),
            headers: toMapStringT(XSJSParse.getObject(null, null, map, "headers")),
          ));
        } else {
          result = ResponseModel(flag: false);
        }
        break;
    }

    if (callback != null) {
      callback(result);
    }
  }
}

//****** Uuid ******
class XSProxyUuid extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Uuid";
    return {
      regClassName: () => XSProxyUuid()..init(className: regClassName)
    };
  }

  @override
  Uuid constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Uuid();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null || !(mirrorObj is Uuid)) {
      return;
    }

    var uuid = mirrorObj as Uuid;
    ResponseModel result;
    switch (funcName) {
      case 'v1':
        result = ResponseModel(flag: true, data: uuid.v1());
        break;
      case 'v4':
        result = ResponseModel(flag: true, data: uuid.v4());
        break;
      case 'v5':
        result = ResponseModel(
            flag: true,
            data: uuid.v5(
              XSJSParse.getString(null, null, map, "namespace"),
              XSJSParse.getString(null, null, map, "v5Name"),
            ));
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** PathProvider ******
class XSProxyPathProvider extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PathProvider";
    return {
      regClassName: () => XSProxyPathProvider()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) {
      return;
    }

    ResponseModel result;
    switch (funcName) {
      case 'updateInfo':
        {
          var temporaryDirectory = "";
          var applicationSupportDirectory = "";
          var libraryDirectory = "";
          var applicationDocumentsDirectory = "";
          var downloadsDirectory = "";
          var externalStorageDirectory = "";
          try {
            var v = await getTemporaryDirectory();
            if (v != null) {
              temporaryDirectory = v.path;
            }
          } catch (e) {}

          try {
            var v = await getApplicationSupportDirectory();
            if (v != null) {
              applicationSupportDirectory = v.path;
            }
          } catch (e) {}

          try {
            var v = await getLibraryDirectory();
            if (v != null) {
              libraryDirectory = v.path;
            }
          } catch (e) {}

          try {
            var v = await getApplicationDocumentsDirectory();
            if (v != null) {
              applicationDocumentsDirectory = v.path;
            }
          } catch (e) {}

          try {
            var v = await getDownloadsDirectory();
            if (v != null) {
              downloadsDirectory = v.path;
            }
          } catch (e) {}

          try {
            var v = await getExternalStorageDirectory();
            if (v != null) {
              externalStorageDirectory = v.path;
            }
          } catch (e) {}

          result = ResponseModel(
            flag: true,
            data: {
              "temporaryDirectory": temporaryDirectory,
              "applicationSupportDirectory": applicationSupportDirectory,
              "libraryDirectory": libraryDirectory,
              "applicationDocumentsDirectory": applicationDocumentsDirectory,
              "downloadsDirectory": downloadsDirectory,
              "externalStorageDirectory": externalStorageDirectory,
            },
          );
        }
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** Sqlite ******
class XSProxySqlite extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Sqlite";
    return {
      regClassName: () => XSProxySqlite()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) {
      return;
    }

    ResponseModel result;
    switch (funcName) {
      case 'closeDB':
        result = await SqliterUtil.getInstance().close(
          XSJSParse.getString(null, null, map, "dbName"),
        );
        break;
      case 'delDB':
        result = await SqliterUtil.getInstance().deleteDatabase(
          XSJSParse.getString(null, null, map, "dbName"),
        );
        break;
      case 'isDBExists':
        result = await SqliterUtil.getInstance().databaseExists(
          XSJSParse.getString(null, null, map, "dbName"),
        );
        break;
      case 'getDBPath':
        result = await SqliterUtil.getInstance().databasePath(
          XSJSParse.getString(null, null, map, "dbName"),
        );
        break;
      case 'openDB':
        result = await SqliterUtil.getInstance().openDatabase(
          XSJSParse.getString(null, null, map, "dbName"),
          version: XSJSParse.getInt(null, null, map, "version", defaultValue: 0),
          configureSql: XSJSParse.getString(null, null, map, "configureSql"),
          createSql: XSJSParse.getString(null, null, map, "createSql"),
          openSql: XSJSParse.getString(null, null, map, "openSql"),
          singleInstance: XSJSParse.getBool(null, null, map, "singleInstance", defaultValue: true),
          readOnly: XSJSParse.getBool(null, null, map, "readOnly", defaultValue: false),
        );
        break;
      case 'execute':
        result = await SqliterUtil.getInstance().execute(
          XSJSParse.getString(null, null, map, "dbName"),
          XSJSParse.getString(null, null, map, "sql"),
        );
        break;
      case 'rawInsert':
        result = await SqliterUtil.getInstance().rawInsert(
          XSJSParse.getString(null, null, map, "dbName"),
          XSJSParse.getString(null, null, map, "sql"),
        );
        break;
      case 'rawDelete':
        result = await SqliterUtil.getInstance().rawDelete(
          XSJSParse.getString(null, null, map, "dbName"),
          XSJSParse.getString(null, null, map, "sql"),
        );
        break;
      case 'rawQuery':
        result = await SqliterUtil.getInstance().rawQuery(
          XSJSParse.getString(null, null, map, "dbName"),
          XSJSParse.getString(null, null, map, "sql"),
        );
        break;
      case 'rawUpdate':
        result = await SqliterUtil.getInstance().rawUpdate(
          XSJSParse.getString(null, null, map, "dbName"),
          XSJSParse.getString(null, null, map, "sql"),
        );
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}

//****** PermissionHandler ******

class XSProxyPermissionHandler extends XSJsonObjProxy {
  //****** ResponseType ******/
  static Permission getPermission(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Permission defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'accessMediaLocation':
          return Permission.accessMediaLocation;
        case 'activityRecognition':
          return Permission.activityRecognition;
        case 'calendar':
          return Permission.calendar;
        case 'camera':
          return Permission.camera;
        case 'contacts':
          return Permission.contacts;
        case 'ignoreBatteryOptimizations':
          return Permission.ignoreBatteryOptimizations;
        case 'mediaLibrary':
          return Permission.mediaLibrary;
        case 'microphone':
          return Permission.microphone;
        case 'notification':
          return Permission.notification;
        case 'photos':
          return Permission.photos;
        case 'reminders':
          return Permission.reminders;
        case 'sensors':
          return Permission.sensors;
        case 'sms':
          return Permission.sms;
        case 'speech':
          return Permission.speech;
        case 'storage':
          return Permission.storage;
        case 'unknown':
          return Permission.unknown;
        case 'location':
          return Permission.location;
        case 'locationAlways':
          return Permission.locationAlways;
        case 'locationWhenInUse':
          return Permission.locationWhenInUse;
        case 'phone':
          return Permission.phone;
      }
    }
    return defaultValue;
  }

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PermissionHandler";
    return {
      regClassName: () => XSProxyPermissionHandler()..init(className: regClassName)
    };
  }

  @override
  Object constructor(dynamic bo, Map<String, dynamic> jsonMap, {dynamic context}) {
    return Object();
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null) return;
    ResponseModel result;
    switch (funcName) {
      case 'getStatus':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.status;
          var statusString = status.toString();
          result = ResponseModel(flag: true, data: statusString);
        } else {
          result = ResponseModel(flag: false, info: "未知类型");
        }
        break;

      case 'request':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.request();
          var statusString = status.toString();
          result = ResponseModel(flag: true, data: statusString);
        } else {
          result = ResponseModel(flag: false, info: "未知类型");
        }
        break;

      case 'isDenied':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.isDenied;
          result = ResponseModel(flag: status);
        } else {
          result = ResponseModel(flag: false);
        }
        break;

      case 'isGranted':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.isGranted;
          result = ResponseModel(flag: status);
        } else {
          result = ResponseModel(flag: false);
        }
        break;
      case 'isPermanentlyDenied':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.isPermanentlyDenied;
          result = ResponseModel(flag: status);
        } else {
          result = ResponseModel(flag: false);
        }
        break;

      case 'isRestricted':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.isRestricted;
          result = ResponseModel(flag: status);
        } else {
          result = ResponseModel(flag: false);
        }
        break;

      case 'isUndetermined':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var status = await permission.isUndetermined;
          result = ResponseModel(flag: status);
        } else {
          result = ResponseModel(flag: false);
        }
        break;

      case 'shouldShowRequestRationale':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var shouldShowRequestRationale = await permission.shouldShowRequestRationale;
          result = ResponseModel(flag: shouldShowRequestRationale);
        } else {
          result = ResponseModel(flag: false);
        }
        break;

      case 'serviceStatus':
        var permission = XSProxyPermissionHandler.getPermission(null, null, map, "permission");
        if (permission != null) {
          var serviceStatus = false;
          if (permission == Permission.locationAlways) {
            serviceStatus = await Permission.locationAlways.serviceStatus.isEnabled;
          } else if (permission == Permission.locationWhenInUse) {
            serviceStatus = await Permission.locationWhenInUse.serviceStatus.isEnabled;
          } else if (permission == Permission.location) {
            serviceStatus = await Permission.location.serviceStatus.isEnabled;
          } else if (permission == Permission.phone) {
            serviceStatus = await Permission.phone.serviceStatus.isEnabled;
          }
          result = ResponseModel(flag: serviceStatus);
        } else {
          result = ResponseModel(flag: false);
        }
        break;
    }

    if (callback != null && result != null) {
      callback(result);
    }
  }
}
