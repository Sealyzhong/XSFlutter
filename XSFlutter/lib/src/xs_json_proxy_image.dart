//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';

class XSProxyRegisterHelperImageSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};
    m.addAll(XSProxyRawImage.registerProxy());

    return m;
  }
}

//****** ImageProvider ******
class XSProxyImage extends XSJsonObjProxy {
  static String regClassName = "Image";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    ///**@@@  2 替换类名字符串

    ///**@@@  3 替换类构造函数
    return {
      regClassName: () => XSProxyImage()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "network", constructor: constructorNetwork);
    registerConstructor(className: regClassName, constructorName: "file", constructor: constructorFile);

    registerConstructor(className: regClassName, constructorName: "asset", constructor: constructorAsset);

    registerConstructor(className: regClassName, constructorName: "memory", constructor: constructorMemory);
  }

  @override
  Image constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Image(
      key: XSJSParse.getKey(context, bo, map, "key"),
      image: XSJSParse.getObject(context, bo, map, "image"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      gaplessPlayback: XSJSParse.getBool(context, bo, map, "gaplessPlayback", defaultValue: false),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
    );
  }

  Image constructorNetwork(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Image.network(
      XSJSParse.getString(context, bo, map, "src"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      gaplessPlayback: XSJSParse.getBool(context, bo, map, "gaplessPlayback", defaultValue: false),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
      headers: toMapStringT(XSJSParse.getObject(context, bo, map, "headers")),
    );
  }

  Image constructorFile(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Image.file(
      XSJSParse.getFile(context, bo, map, "file"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      gaplessPlayback: XSJSParse.getBool(context, bo, map, "gaplessPlayback", defaultValue: false),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
    );
  }

  Image constructorAsset(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Image.asset(
      XSJSParse.getString(context, bo, map, "name"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      bundle: XSJSParse.getObject(context, bo, map, "bundle"),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      scale: XSJSParse.getDouble(context, bo, map, "scale"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      gaplessPlayback: XSJSParse.getBool(context, bo, map, "gaplessPlayback", defaultValue: false),
      package: XSJSParse.getString(context, bo, map, "package"),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
    );
  }

  Image constructorMemory(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Image.memory(
      XSJSParse.getUint8List(context, bo, map, "bytes"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
      semanticLabel: XSJSParse.getString(context, bo, map, "semanticLabel"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      gaplessPlayback: XSJSParse.getBool(context, bo, map, "gaplessPlayback", defaultValue: false),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
    );
  }
}

//****** RawImage ******
class XSProxyRawImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "RawImage";
    return {
      regClassName: () => XSProxyRawImage()..init(className: regClassName)
    };
  }

  @override
  RawImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return RawImage(
      key: XSJSParse.getKey(context, bo, map, "key"),
      image: XSJSParse.getObject(context, bo, map, "image"),
      debugImageLabel: XSJSParse.getString(context, bo, map, "debugImageLabel"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
      color: XSJSParse.getColor(context, bo, map, "color"),
      colorBlendMode: XSJSParse.getBlendMode(context, bo, map, "colorBlendMode"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
      invertColors: XSJSParse.getBool(context, bo, map, "invertColors", defaultValue: false),
      filterQuality: XSJSParse.getFilterQuality(context, bo, map, "filterQuality", defaultValue: FilterQuality.low),
      isAntiAlias: XSJSParse.getBool(context, bo, map, "isAntiAlias", defaultValue: false),
    );
  }
}
