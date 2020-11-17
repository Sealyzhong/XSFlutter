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
    m.addAll(XSProxyAssetImage.registerProxy());
    m.addAll(XSProxyExactAssetImage.registerProxy());
    m.addAll(XSProxyFileImage.registerProxy());
    m.addAll(XSProxyMemoryImage.registerProxy());
    m.addAll(XSProxyNetworkImage.registerProxy());

    m.addAll(XSProxyImage.registerProxy());
    m.addAll(XSProxyDecorationImage.registerProxy());

    return m;
  }
}

//****** AssetImage ******
class XSProxyAssetImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AssetImage";
    return {
      regClassName: () => XSProxyAssetImage()..init(className: regClassName)
    };
  }

  @override
  AssetImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AssetImage(
      XSJSParse.getString(context, bo, map, "assetName"),
      bundle: XSJSParse.getObject(context, bo, map, "bundle"),
      package: XSJSParse.getString(context, bo, map, "package"),
    );
  }
}

//****** DecorationImage ******
class XSProxyDecorationImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DecorationImage";
    return {
      regClassName: () => XSProxyDecorationImage()..init(className: regClassName)
    };
  }

  @override
  DecorationImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DecorationImage(
      image: XSJSParse.getObject(context, bo, map, "image"),
      colorFilter: XSJSParse.getColorFilter(context, bo, map, "colorFilter"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      centerSlice: XSJSParse.getRect(context, bo, map, "centerSlice"),
      repeat: XSJSParse.getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
      matchTextDirection: XSJSParse.getBool(context, bo, map, "matchTextDirection", defaultValue: false),
    );
  }
}

//****** ExactAssetImage ******
class XSProxyExactAssetImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ExactAssetImage";
    return {
      regClassName: () => XSProxyAssetImage()..init(className: regClassName)
    };
  }

  @override
  ExactAssetImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ExactAssetImage(
      XSJSParse.getString(context, bo, map, "assetName"),
      bundle: XSJSParse.getObject(context, bo, map, "bundle"),
      package: XSJSParse.getString(context, bo, map, "package"),
    );
  }
}

//****** FileImage ******
class XSProxyFileImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FileImage";
    return {
      regClassName: () => XSProxyAssetImage()..init(className: regClassName)
    };
  }

  @override
  FileImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FileImage(
      XSJSParse.getFile(context, bo, map, "file"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
    );
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

//****** MemoryImage ******
class XSProxyMemoryImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "MemoryImage";
    return {
      regClassName: () => XSProxyAssetImage()..init(className: regClassName)
    };
  }

  @override
  MemoryImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MemoryImage(
      XSJSParse.getUint8List(context, bo, map, "bytes"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
    );
  }
}

//****** NetworkImage ******
class XSProxyNetworkImage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "NetworkImage";
    return {
      regClassName: () => XSProxyAssetImage()..init(className: regClassName)
    };
  }

  @override
  NetworkImage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return NetworkImage(
      XSJSParse.getString(context, bo, map, "url"),
      scale: XSJSParse.getDouble(context, bo, map, "scale", defaultValue: 1.0),
      headers: toMapStringT(XSJSParse.getObject(context, bo, map, "headers")),
    );
  }
}
