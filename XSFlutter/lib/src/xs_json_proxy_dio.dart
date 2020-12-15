//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'models/response_model.dart';
import 'xs_js_flutter.dart';
import 'xs_build_owner.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
// ignore: implementation_imports
import 'package:dio/src/adapters/io_adapter.dart';

class XSDioParse {
  //****** ResponseType ******/
  static ResponseType getResponseType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ResponseType defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'json':
          return ResponseType.json;
        case 'stream':
          return ResponseType.stream;
        case 'plain':
          return ResponseType.plain;
        case 'bytes':
          return ResponseType.bytes;
      }
    }
    return defaultValue;
  }

  //****** BaseOptions ******/
  //TODO: ValidateStatus、RequestEncoder、ResponseDecoder
  static BaseOptions getBaseOptions(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BaseOptions defaultValue}) {
    var v = XSJSParse.getMap(context, bo, map, key);
    if (v != null) {
      return BaseOptions(
        method: XSJSParse.getString(context, bo, map, "method"),
        connectTimeout: XSJSParse.getInt(context, bo, map, "connectTimeout"),
        receiveTimeout: XSJSParse.getInt(context, bo, map, "receiveTimeout"),
        sendTimeout: XSJSParse.getInt(context, bo, map, "sendTimeout"),
        baseUrl: XSJSParse.getString(context, bo, map, "baseUrl"),
        queryParameters: XSJSParse.getMap(context, bo, map, "queryParameters"),
        extra: XSJSParse.getMap(context, bo, map, "extra"),
        headers: XSJSParse.getMap(context, bo, map, "headers"),
        responseType: getResponseType(context, bo, map, "responseType", defaultValue: ResponseType.json),
        contentType: XSJSParse.getString(context, bo, map, "contentType"),
        receiveDataWhenStatusError: XSJSParse.getBool(context, bo, map, "receiveDataWhenStatusError", defaultValue: true),
        followRedirects: XSJSParse.getBool(context, bo, map, "followRedirects", defaultValue: true),
        maxRedirects: XSJSParse.getInt(context, bo, map, "maxRedirects", defaultValue: 5),
      );
    }
    return defaultValue;
  }

  //****** BaseOptions ******/
  //TODO: ValidateStatus、RequestEncoder、ResponseDecoder
  static Options getOptions(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Options defaultValue}) {
    var v = XSJSParse.getMap(context, bo, map, key);
    if (v != null) {
      return Options(
        method: XSJSParse.getString(context, bo, map, "method"),
        receiveTimeout: XSJSParse.getInt(context, bo, map, "receiveTimeout"),
        sendTimeout: XSJSParse.getInt(context, bo, map, "sendTimeout"),
        extra: XSJSParse.getMap(context, bo, map, "extra"),
        headers: XSJSParse.getMap(context, bo, map, "headers"),
        responseType: getResponseType(context, bo, map, "responseType", defaultValue: ResponseType.json),
        contentType: XSJSParse.getString(context, bo, map, "contentType"),
        receiveDataWhenStatusError: XSJSParse.getBool(context, bo, map, "receiveDataWhenStatusError", defaultValue: true),
        followRedirects: XSJSParse.getBool(context, bo, map, "followRedirects", defaultValue: true),
        maxRedirects: XSJSParse.getInt(context, bo, map, "maxRedirects", defaultValue: 5),
      );
    }
    return defaultValue;
  }

  //****** RequestOptions ******/
  //TODO: ValidateStatus、RequestEncoder、ResponseDecoder
  static RequestOptions getRequestOptions(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RequestOptions defaultValue}) {
    var v = XSJSParse.getMap(context, bo, map, key);
    if (v != null) {
      return RequestOptions(
        method: XSJSParse.getString(context, bo, map, "method"),
        receiveTimeout: XSJSParse.getInt(context, bo, map, "receiveTimeout"),
        sendTimeout: XSJSParse.getInt(context, bo, map, "sendTimeout"),
        connectTimeout: XSJSParse.getInt(context, bo, map, "connectTimeout"),
        extra: XSJSParse.getMap(context, bo, map, "extra"),
        headers: XSJSParse.getMap(context, bo, map, "headers"),
        responseType: getResponseType(context, bo, map, "responseType", defaultValue: ResponseType.json),
        contentType: XSJSParse.getString(context, bo, map, "contentType"),
        receiveDataWhenStatusError: XSJSParse.getBool(context, bo, map, "receiveDataWhenStatusError", defaultValue: true),
        followRedirects: XSJSParse.getBool(context, bo, map, "followRedirects", defaultValue: true),
        maxRedirects: XSJSParse.getInt(context, bo, map, "maxRedirects", defaultValue: 5),
      );
    }
    return defaultValue;
  }
}

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperDioSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyDio.registerProxy());
    return m;
  }
}

//****** Dio ******
class XSProxyDio extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Dio";
    return {
      regClassName: () => XSProxyDio()..init(className: regClassName)
    };
  }

  @override
  Dio constructor(dynamic bo, Map<String, dynamic> map, {BuildContext context}) {
    BaseOptions options = XSDioParse.getBaseOptions(context, bo, map, "options");
    var dio = Dio(options)
      ..interceptors.add(LogInterceptor())
      ..httpClientAdapter = createAdapter();
    return dio;
  }

  void callBackError(InvokeCallback callback, dynamic ex) {
    if (callback != null) {
      callback(ResponseModel(flag: false, data: ex.toString()));
    }
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map map, {InvokeCallback callback}) async {
    if (mirrorObj == null || !(mirrorObj is Dio)) {
      return;
    }

    var dio = mirrorObj as Dio;
    Response response;
    switch (funcName) {
      case 'get':
        try {
          response = await dio.get(
            XSJSParse.getString(null, null, map, "path"),
            queryParameters: XSJSParse.getMap(null, null, map, "queryParameters"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;

      case 'getUri':
        try {
          response = await dio.getUri(
            XSJSParse.getUri(null, null, map, "uri"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;

      case 'post':
        try {
          response = await dio.post(
            XSJSParse.getString(null, null, map, "path"),
            data: XSJSParse.getMap(null, null, map, "data"),
            queryParameters: XSJSParse.getMap(null, null, map, "queryParameters"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onSendProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onSendProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;

      case 'postUri':
        try {
          response = await dio.postUri(
            XSJSParse.getUri(null, null, map, "uri"),
            data: XSJSParse.getMap(null, null, map, "data"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onSendProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onSendProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;

      case 'request':
        try {
          response = await dio.request(
            XSJSParse.getString(null, null, map, "path"),
            data: XSJSParse.getMap(null, null, map, "data"),
            queryParameters: XSJSParse.getMap(null, null, map, "queryParameters"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onSendProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onSendProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;

      case 'requestUri':
        try {
          response = await dio.requestUri(
            XSJSParse.getUri(null, null, map, "uri"),
            data: XSJSParse.getMap(null, null, map, "data"),
            options: XSDioParse.getOptions(null, null, map, "options"),
            onSendProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onSendProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
            onReceiveProgress: (int count, int total) {
              XSFlutterLib.getInstance().invokeJSMirrorObj(
                mirrorID: mirrorID,
                callbackID: XSJSParse.getString(null, null, map, "onReceiveProgress"),
                args: {
                  "count": count,
                  "total": total
                },
              );
            },
          );
        } catch (ex) {
          callBackError(callback, ex);
          return;
        }
        break;
    }

    if (callback != null && response != null) {
      callback(ResponseModel(flag: true, data: {
        "statusCode": response.statusCode,
        "statusMessage": response.statusMessage,
        //"headers": response.headers,
        "data": response.data
      }));
    }
  }
}
