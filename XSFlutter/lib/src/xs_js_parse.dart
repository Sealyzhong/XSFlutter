/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 常用枚举类型
 */
import 'dart:core';
import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/physics.dart';
import 'package:flutter/services.dart';
import 'package:vector_math/vector_math_64.dart';
import 'dart:typed_data';
import 'dart:math' as math;
import 'dart:io';
import 'xs_build_owner.dart';
import 'xs_json_to_dart.dart';
import 'package/mask_text_input_formatter.dart';

//****** 常用解析
class XSJSParse {
  //-------------- Basic -----------------
  //****** CheckMapKey ******/
  static bool _checkMapKey(Map map, String key) {
    try {
      if (map == null) return false;
      if (key == null || key.isEmpty) return false;
      if (!map.containsKey(key)) return false;
    } catch (e) {}
    return true;
  }

  //****** String ******/
  static String _getString(Map map, String key) {
    try {
      if (!_checkMapKey(map, key)) {
        return null;
      }
      var v = map[key];
      if (v is String) return v;
      return v.toString();
    } catch (e) {}
    return null;
  }

  //****** double ******/
  static double _getDouble(Map map, String key) {
    try {
      if (!_checkMapKey(map, key)) {
        return null;
      }
      var v = map[key];
      if (v is num) return v.toDouble();
      if (v is double) return v;
      if (v is int) return v.toDouble();
    } catch (e) {}
    return null;
  }

  //****** int ******/
  static int _getInt(Map map, String key) {
    try {
      if (!_checkMapKey(map, key)) {
        return null;
      }
      var v = map[key];
      if (v is num) return v.toInt();
      if (v is int) return v;
      if (v is double) return v.toInt();
    } catch (e) {}
    return null;
  }

  //****** bool ******/
  static bool _getBool(Map map, String key) {
    try {
      if (!_checkMapKey(map, key)) {
        return null;
      }
      var v = map[key];
      if (v is bool) return v;
    } catch (e) {}
    return null;
  }

  //****** Map ******
  static Map _getMap(Map map, String key, {Map defaultValue}) {
    try {
      if (map == null) return null;
      if (key == null || key.isEmpty) return defaultValue;
      if (!map.containsKey(key)) return defaultValue;
      var v = map[key];
      if (v is Map) return v;
    } catch (e) {}
    return null;
  }

  //****** bool ******/
  static List _getList(Map map, String key) {
    try {
      if (!_checkMapKey(map, key)) {
        return null;
      }
      var v = map[key];
      if (v is List) return v;
    } catch (e) {}
    return null;
  }

  //****** bool ******
  static List<T> toListT<T>(list) {
    if (list == null) {
      return null;
    }
    return List<T>.from(list);
  }

  //****** Class Name ******
  static String _getClassName(Map map) {
    return _getString(map, "className");
  }

  //****** Constructor Name ******
  static String _getConstructorName(Map map) {
    return _getString(map, "constructorName");
  }

  //获取分类对象 ******
  static dynamic _getClassObj(dynamic jsonObj, {XSJsonBuildOwner buildOwner, dynamic defaultValue, BuildContext context}) {
    var v = XSJsonObjToDartObject.getInstance().jsonObjToDartObject(jsonObj, buildOwner: buildOwner, context: context);
    v ??= defaultValue;
    return v;
  }

  //JS2Api
  static void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, Map<String, Function> funName2Fun, InvokeCallback callback) {
    if (mirrorObj == null) return;
    if (funName2Fun == null) return;
    Function func = funName2Fun[funcName];

    if (func == null) {
      return;
    }

    Map<Symbol, dynamic> namedArgs = {};

    for (String argName in args.keys) {
      namedArgs[Symbol(argName)] = args[argName];
    }

    //执行函数
    var result;
    try {
      result = Function.apply(
          func,
          [
            mirrorObj
          ],
          namedArgs);
    } catch (e) {
      //XSJSLog.debug(e);
    }

    //返回结果
    if (callback != null) {
      callback(result);
    }
  }

  //-------------- A -----------------

  //****** Axis ******/
  static Axis getAxis(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Axis defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'horizontal':
          return Axis.horizontal;
        case 'vertical':
          return Axis.vertical;
      }
    }
    return defaultValue;
  }

  //****** AxisDirection ******/
  static AxisDirection getAxisDirection(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AxisDirection defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'left':
          return AxisDirection.left;
        case 'down':
          return AxisDirection.down;
        case 'right':
          return AxisDirection.right;
        case 'up':
          return AxisDirection.up;
      }
    }
    return defaultValue;
  }

  //****** AssetBundle ******/
  static AssetBundle getAssetBundle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AssetBundle defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      if (className != null && className.isNotEmpty) {
        switch (className) {
          case 'NetworkAssetBundle':
            return NetworkAssetBundle(getUri(context, bo, v, "baseUrl"));
          case 'PlatformAssetBundle':
            return PlatformAssetBundle();
        }
      }
    }
    return defaultValue;
  }

  //****** Alignment ******/
  static Alignment getAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Alignment defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Alignment(
        getDouble(context, bo, v, "x", defaultValue: 0.0),
        getDouble(context, bo, v, "y", defaultValue: 0.0),
      );
    }
    return defaultValue;
  }

  //****** AlignmentDirectional ******/
  static AlignmentDirectional getAlignmentDirectional(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AlignmentDirectional defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return AlignmentDirectional(
        getDouble(context, bo, v, "start", defaultValue: 0.0),
        getDouble(context, bo, v, "y", defaultValue: 0),
      );
    }

    return defaultValue;
  }

  //****** AnimationStatus ******/
  static AnimationStatus getAnimationStatus(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AnimationStatus defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'dismissed':
          return AnimationStatus.dismissed;
        case 'forward':
          return AnimationStatus.forward;
        case 'reverse':
          return AnimationStatus.reverse;
        case 'completed':
          return AnimationStatus.completed;
      }
    }
    return defaultValue;
  }

  //****** AnimationStatusString ******/
  static String getAnimationStatusString(BuildContext context, XSJsonBuildOwner bo, AnimationStatus status) {
    switch (status) {
      case AnimationStatus.dismissed:
        return "dismissed";
      case AnimationStatus.forward:
        return "forward";
      case AnimationStatus.reverse:
        return "reverse";
      case AnimationStatus.completed:
        return "completed";
      default:
        break;
    }
    return "dismissed";
  }

  //****** AnimationBehavior ******/
  static AnimationBehavior getAnimationBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AnimationBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'normal':
          return AnimationBehavior.normal;
        case 'preserve':
          return AnimationBehavior.preserve;
      }
    }
    return defaultValue;
  }

  //****** Animation<double> ******/
  static Animation<double> getAnimationDouble(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //****** AppBarTheme ******/
  static AppBarTheme getAppBarTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {AppBarTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return AppBarTheme(
        brightness: getBrightness(context, bo, v, "Brightness"),
        color: getColor(context, bo, v, "color"),
        shadowColor: getColor(context, bo, v, "shadowColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        iconTheme: getIconThemeData(context, bo, v, "iconTheme"),
        actionsIconTheme: getIconThemeData(context, bo, v, "actionsIconTheme"),
        textTheme: getTextTheme(context, bo, v, "textTheme"),
        centerTitle: getBool(context, bo, v, "centerTitle"),
      );
    }
    return defaultValue;
  }

  //-------------- B -----------------
  //****** BorderRadius ******/
  static BorderRadius getBorderRadius(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BorderRadius defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'all':
          return BorderRadius.all(getRadius(context, bo, v, "radius"));
        case 'circular':
          return BorderRadius.circular(getDouble(context, bo, v, "radius"));
        case 'vertical':
          return BorderRadius.vertical(
            top: getRadius(context, bo, v, "top", defaultValue: Radius.zero),
            bottom: getRadius(context, bo, v, "bottom", defaultValue: Radius.zero),
          );
        case 'horizontal':
          return BorderRadius.horizontal(
            left: getRadius(context, bo, v, "left", defaultValue: Radius.zero),
            right: getRadius(context, bo, v, "right", defaultValue: Radius.zero),
          );
        case 'only':
          return BorderRadius.only(
            topLeft: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            topRight: getRadius(context, bo, v, "topRight", defaultValue: Radius.zero),
            bottomLeft: getRadius(context, bo, v, "bottomLeft", defaultValue: Radius.zero),
            bottomRight: getRadius(context, bo, v, "bottomRight", defaultValue: Radius.zero),
          );
        case 'zero':
          return BorderRadius.zero;
      }
    }

    return defaultValue;
  }

  //****** BorderRadiusDirectional ******/
  static BorderRadiusDirectional getBorderRadiusDirectional(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BorderRadiusDirectional defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'all':
          return BorderRadiusDirectional.all(getRadius(context, bo, v, "radius"));
        case 'circular':
          return BorderRadiusDirectional.circular(getDouble(context, bo, v, "radius"));
        case 'vertical':
          return BorderRadiusDirectional.vertical(
            top: getRadius(context, bo, v, "top", defaultValue: Radius.zero),
            bottom: getRadius(context, bo, v, "bottom", defaultValue: Radius.zero),
          );
        case 'horizontal':
          return BorderRadiusDirectional.horizontal(
            start: getRadius(context, bo, v, "start", defaultValue: Radius.zero),
            end: getRadius(context, bo, v, "end", defaultValue: Radius.zero),
          );
        case 'only':
          return BorderRadiusDirectional.only(
            topStart: getRadius(context, bo, v, "topStart", defaultValue: Radius.zero),
            topEnd: getRadius(context, bo, v, "topEnd", defaultValue: Radius.zero),
            bottomStart: getRadius(context, bo, v, "bottomStart", defaultValue: Radius.zero),
            bottomEnd: getRadius(context, bo, v, "bottomEnd", defaultValue: Radius.zero),
          );
        case 'zero':
          return BorderRadiusDirectional.zero;
      }
    }

    return defaultValue;
  }

  //****** Border ******/
  static Border getBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      if (className != null && className.isNotEmpty) {
        var constructorName = _getConstructorName(v);
        if (constructorName == null || constructorName.isEmpty) {
          return Border(
            top: getBorderSide(context, bo, v, "top", defaultValue: BorderSide.none),
            right: getBorderSide(context, bo, v, "right", defaultValue: BorderSide.none),
            bottom: getBorderSide(context, bo, v, "bottom", defaultValue: BorderSide.none),
            left: getBorderSide(context, bo, v, "left", defaultValue: BorderSide.none),
          );
        }
        switch (constructorName) {
          case 'all':
            return Border.all(
              color: getColor(context, bo, v, "color", defaultValue: const Color(0xFF000000)),
              width: getDouble(context, bo, v, "width", defaultValue: 1.0),
              style: getBorderStyle(context, bo, v, "style", defaultValue: BorderStyle.solid),
            );
          case 'fromBorderSide':
            return Border.fromBorderSide(getBorderSide(context, bo, v, "size"));
          case 'symmetric':
            return Border.symmetric(
              vertical: getBorderSide(context, bo, v, "vertical", defaultValue: BorderSide.none),
              horizontal: getBorderSide(context, bo, v, "horizontal", defaultValue: BorderSide.none),
            );
        }
      }
    }
    return defaultValue;
  }

  //****** BoxShadow ******/
  static BoxShadow getBoxShadow(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxShadow defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BoxShadow(
        color: getColor(context, bo, v, "color", defaultValue: const Color(0xFF000000)),
        offset: getOffset(context, bo, v, "offset", defaultValue: Offset.zero),
        blurRadius: getDouble(context, bo, v, "blurRadius", defaultValue: 0.0),
        spreadRadius: getDouble(context, bo, v, "spreadRadius", defaultValue: 0.0),
      );
    }

    return defaultValue;
  }

  //****** BoxConstraints ******/
  static BoxConstraints getBoxConstraints(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxConstraints defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BoxConstraints(
        minWidth: getDouble(context, bo, v, "minWidth", defaultValue: 0.0),
        maxWidth: getDouble(context, bo, v, "maxWidth", defaultValue: double.infinity),
        minHeight: getDouble(context, bo, v, "minHeight", defaultValue: 0.0),
        maxHeight: getDouble(context, bo, v, "maxHeight", defaultValue: double.infinity),
      );
    }
    return defaultValue;
  }

  //****** BorderDirectional ******/
  static BorderDirectional getBorderDirectional(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BorderDirectional defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      if (className != null && className.isNotEmpty) {
        return BorderDirectional(
          top: getBorderSide(context, bo, v, "top", defaultValue: BorderSide.none),
          start: getBorderSide(context, bo, v, "start", defaultValue: BorderSide.none),
          end: getBorderSide(context, bo, v, "end", defaultValue: BorderSide.none),
          bottom: getBorderSide(context, bo, v, "bottom", defaultValue: BorderSide.none),
        );
      }
    }
    return defaultValue;
  }

  //****** bool ******/
  static bool getBool(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {bool defaultValue}) {
    return _getBool(map, key) ?? defaultValue;
  }

  //****** bool List ******/
  static List<bool> getBoolList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<bool> defaultValue}) {
    var li = _getList(map, key);
    if (li != null) {
      return toListT<bool>(li);
    }
    return defaultValue;
  }

  //****** BoxFit ******/
  static BoxFit getBoxFit(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxFit defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'fill':
          return BoxFit.fill;
        case 'cover':
          return BoxFit.cover;
        case 'contain':
          return BoxFit.contain;
        case 'fitWidth':
          return BoxFit.fitWidth;
        case 'fitHeight':
          return BoxFit.fitHeight;
        case 'scaleDown':
          return BoxFit.scaleDown;
        case 'none':
          return BoxFit.none;
      }
    }
    return defaultValue;
  }

//****** BannerLocation ******/
  static BannerLocation getBannerLocation(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BannerLocation defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'topStart':
          return BannerLocation.topStart;
        case 'topEnd':
          return BannerLocation.topEnd;
        case 'bottomStart':
          return BannerLocation.bottomStart;
        case 'bottomEnd':
          return BannerLocation.bottomEnd;
      }
    }
    return defaultValue;
  }

  //****** Brightness ******/
  static Brightness getBrightness(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Brightness defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'dark':
          return Brightness.dark;
        case 'light':
          return Brightness.light;
      }
    }
    return defaultValue;
  }

  //****** BlendMode ******/
  static BlendMode getBlendMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BlendMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "clear":
          return BlendMode.clear;
        case "src":
          return BlendMode.src;
        case "dst":
          return BlendMode.dst;
        case "srcOver":
          return BlendMode.srcOver;
        case "dstOver":
          return BlendMode.dstOver;
        case "srcIn":
          return BlendMode.srcIn;
        case "dstIn":
          return BlendMode.dstIn;
        case "srcOut":
          return BlendMode.srcOut;
        case "dstOut":
          return BlendMode.dstOut;
        case "srcATop":
          return BlendMode.srcATop;
        case "dstATop":
          return BlendMode.dstATop;
        case "xor":
          return BlendMode.xor;
        case "plus":
          return BlendMode.plus;
        case "modulate":
          return BlendMode.modulate;
        case "screen":
          return BlendMode.screen;
        case "overlay":
          return BlendMode.overlay;
        case "darken":
          return BlendMode.darken;
        case "lighten":
          return BlendMode.lighten;
        case "colorDodge":
          return BlendMode.colorDodge;
        case "colorBurn":
          return BlendMode.colorBurn;
        case "hardLight":
          return BlendMode.hardLight;
        case "softLight":
          return BlendMode.softLight;
        case "difference":
          return BlendMode.difference;
        case "exclusion":
          return BlendMode.exclusion;
        case "multiply":
          return BlendMode.multiply;
        case "hue":
          return BlendMode.hue;
        case "saturation":
          return BlendMode.saturation;
        case "color":
          return BlendMode.color;
        case "luminosity":
          return BlendMode.luminosity;
      }
    }
    return defaultValue;
  }

  //****** BlurStyle ******/
  static BlurStyle getBlurStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BlurStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'inner':
          return BlurStyle.inner;
        case 'normal':
          return BlurStyle.normal;
        case 'outer':
          return BlurStyle.outer;
        case 'solid':
          return BlurStyle.solid;
      }
    }
    return defaultValue;
  }

  //****** BorderStyle ******/
  static BorderStyle getBorderStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BorderStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'none':
          return BorderStyle.none;
        case 'solid':
          return BorderStyle.solid;
      }
    }
    return defaultValue;
  }

  //****** BottomNavigationBarType ******/
  static BottomNavigationBarType getBottomNavigationBarType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BottomNavigationBarType defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'fixed':
          return BottomNavigationBarType.fixed;
        case 'shifting':
          return BottomNavigationBarType.shifting;
      }
    }
    return defaultValue;
  }

  //****** BoxShape ******/
  static BoxShape getBoxShape(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxShape defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'circle':
          return BoxShape.circle;
        case 'rectangle':
          return BoxShape.rectangle;
      }
    }
    return defaultValue;
  }

  //****** ButtonTextTheme ******/
  static ButtonTextTheme getButtonTextTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ButtonTextTheme defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'normal':
          return ButtonTextTheme.normal;
        case 'accent':
          return ButtonTextTheme.accent;
        case 'primary':
          return ButtonTextTheme.primary;
      }
    }
    return defaultValue;
  }

  //****** ButtonBarLayoutBehavior ******/
  static ButtonBarLayoutBehavior getButtonBarLayoutBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ButtonBarLayoutBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'constrained':
          return ButtonBarLayoutBehavior.constrained;
        case 'padded':
          return ButtonBarLayoutBehavior.padded;
      }
    }
    return defaultValue;
  }

  //****** BoxHeightStyle ******/
  static BoxHeightStyle getBoxHeightStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxHeightStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'includeLineSpacingBottom':
          return BoxHeightStyle.includeLineSpacingBottom;
        case 'includeLineSpacingMiddle':
          return BoxHeightStyle.includeLineSpacingMiddle;
        case 'includeLineSpacingTop':
          return BoxHeightStyle.includeLineSpacingTop;
        case 'max':
          return BoxHeightStyle.max;
        case 'strut':
          return BoxHeightStyle.strut;
        case 'tight':
          return BoxHeightStyle.tight;
      }
    }
    return defaultValue;
  }

  //****** BoxWidthStyle ******/
  static BoxWidthStyle getBoxWidthStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxWidthStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'max':
          return BoxWidthStyle.max;
        case 'tight':
          return BoxWidthStyle.tight;
      }
    }
    return defaultValue;
  }

  //****** BorderSide ******/
  static BorderSide getBorderSide(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BorderSide defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return BorderSide(
          color: getColor(context, bo, v, "color", defaultValue: const Color(0xFF000000)),
          width: getDouble(context, bo, v, "width", defaultValue: 1.0),
          style: getBorderStyle(context, bo, v, "style", defaultValue: BorderStyle.solid),
        );
      }

      switch (constructorName) {
        case 'none':
          return BorderSide.none;
      }
    }

    return defaultValue;
  }

  //****** List<BoxShadow> ******/
  static List<BoxShadow> getBoxShadowList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<BoxShadow> defaultValue}) {
    var v = _getList(map, key);
    if (v != null) {
      List<BoxShadow> list = List<BoxShadow>();
      for (var a in v) {
        list.add(getBoxShadow(context, bo, a, ""));
      }
      return list;
    }
    return defaultValue;
  }

  //****** BoxDecoration ******/
  static BoxDecoration getBoxDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BoxDecoration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BoxDecoration(
        color: getColor(context, bo, v, "color"),
        image: getDecorationImage(context, bo, v, "image"),
        border: getBorder(context, bo, v, "border"),
        borderRadius: getBorderRadius(context, bo, v, "borderRadius"),
        boxShadow: getBoxShadowList(context, bo, v, "boxShadow"),
        gradient: getGradient(context, bo, v, "gradient"),
        backgroundBlendMode: getBlendMode(context, bo, v, "backgroundBlendMode"),
        shape: getBoxShape(context, bo, v, "shape", defaultValue: BoxShape.rectangle),
      );
    }
    return defaultValue;
  }

  //****** BannerPainter ******/
  static BannerPainter getBannerPainter(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BannerPainter defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      const Color _kColor = Color(0xA0B71C1C);

      const TextStyle _kTextStyle = TextStyle(
        color: Color(0xFFFFFFFF),
        fontSize: 12.0 * 0.85,
        fontWeight: FontWeight.w900,
        height: 1.0,
      );

      return BannerPainter(
        message: getString(context, bo, v, "message"),
        textDirection: getTextDirection(context, bo, v, "textDirection"),
        location: getBannerLocation(context, bo, v, "location"),
        layoutDirection: getTextDirection(context, bo, v, "layoutDirection"),
        color: getColor(context, bo, v, "color", defaultValue: _kColor),
        textStyle: getTextStyle(context, bo, v, "textStyle", defaultValue: _kTextStyle),
      );
    }
    return defaultValue;
  }

  //****** ButtonThemeData ******/
  static ButtonThemeData getButtonThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ButtonThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ButtonThemeData(
        textTheme: getButtonTextTheme(context, bo, v, "textTheme", defaultValue: ButtonTextTheme.normal),
        minWidth: getDouble(context, bo, v, "minWidth", defaultValue: 88.0),
        height: getDouble(context, bo, v, "height", defaultValue: 36.0),
        padding: getEdgeInsets(context, bo, v, "padding"),
        shape: getShapeBorder(context, bo, v, "shape"),
        layoutBehavior: getButtonBarLayoutBehavior(context, bo, v, "layoutBehavior", defaultValue: ButtonBarLayoutBehavior.padded),
        alignedDropdown: getBool(context, bo, v, "alignedDropdown", defaultValue: false),
        buttonColor: getColor(context, bo, v, "buttonColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        highlightColor: getColor(context, bo, v, "highlightColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        colorScheme: getColorScheme(context, bo, v, "colorScheme"),
        materialTapTargetSize: getMaterialTapTargetSize(context, bo, v, "materialTapTargetSize"),
      );
    }
    return defaultValue;
  }

  //****** ButtonBarThemeData ******/
  static ButtonBarThemeData getButtonBarThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ButtonBarThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ButtonBarThemeData(
        alignment: getMainAxisAlignment(context, bo, v, "alignment"),
        mainAxisSize: getMainAxisSize(context, bo, v, "mainAxisSize"),
        buttonTextTheme: getButtonTextTheme(context, bo, v, "buttonTextTheme"),
        buttonMinWidth: getDouble(context, bo, v, "buttonMinWidth"),
        buttonHeight: getDouble(context, bo, v, "buttonHeight"),
        buttonPadding: getEdgeInsets(context, bo, v, "buttonPadding"),
        buttonAlignedDropdown: getBool(context, bo, v, "buttonAlignedDropdown"),
        layoutBehavior: getButtonBarLayoutBehavior(context, bo, v, "layoutBehavior"),
        overflowDirection: getVerticalDirection(context, bo, v, "overflowDirection"),
      );
    }
    return defaultValue;
  }

  //****** BottomNavigationBarThemeData ******/
  static BottomNavigationBarThemeData getBottomNavigationBarThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BottomNavigationBarThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BottomNavigationBarThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        selectedIconTheme: getIconThemeData(context, bo, v, "selectedIconTheme"),
        unselectedIconTheme: getIconThemeData(context, bo, v, "unselectedIconTheme"),
        selectedItemColor: getColor(context, bo, v, "selectedItemColor"),
        unselectedItemColor: getColor(context, bo, v, "unselectedItemColor"),
        selectedLabelStyle: getTextStyle(context, bo, v, "selectedLabelStyle"),
        unselectedLabelStyle: getTextStyle(context, bo, v, "unselectedLabelStyle"),
        showSelectedLabels: getBool(context, bo, v, "showSelectedLabels"),
        showUnselectedLabels: getBool(context, bo, v, "showUnselectedLabels"),
        type: getBottomNavigationBarType(context, bo, v, "type"),
      );
    }
    return defaultValue;
  }

  //****** BottomSheetThemeData ******/
  static BottomSheetThemeData getBottomSheetThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BottomSheetThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BottomSheetThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        modalBackgroundColor: getColor(context, bo, v, "modalBackgroundColor"),
        modalElevation: getDouble(context, bo, v, "hmodalElevationeight"),
        shape: getShapeBorder(context, bo, v, "shape"),
        clipBehavior: getClip(context, bo, v, "clipBehavior"),
      );
    }
    return defaultValue;
  }

  //****** BottomAppBarTheme ******/
  static BottomAppBarTheme getBottomAppBarTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {BottomAppBarTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return BottomAppBarTheme(
        color: getColor(context, bo, v, "color"),
        elevation: getDouble(context, bo, v, "elevation"),
        shape: getNotchedShape(context, bo, v, "shape"),
      );
    }
    return defaultValue;
  }

  //-------------- C -----------------
  //****** Color ******/
  static Color getColorNoKey(BuildContext context, XSJsonBuildOwner bo, Map map, {Color defaultValue}) {
    var v = map;
    if (v != null) {
      var className = _getClassName(v);
      var constructorName = _getConstructorName(v);
      if (className == "Color") {
        if (constructorName == null || constructorName.isEmpty) {
          return Color(getInt(context, bo, v, "value", defaultValue: 0));
        }
        switch (constructorName) {
          case 'fromRGBO':
            return Color.fromRGBO(
              getInt(context, bo, v, "r", defaultValue: 0),
              getInt(context, bo, v, "g", defaultValue: 0),
              getInt(context, bo, v, "b", defaultValue: 0),
              getDouble(context, bo, v, "opacity", defaultValue: 0.0),
            );
          case 'fromARGB':
            return Color.fromARGB(
              getInt(context, bo, v, "a", defaultValue: 0),
              getInt(context, bo, v, "r", defaultValue: 0),
              getInt(context, bo, v, "g", defaultValue: 0),
              getInt(context, bo, v, "b", defaultValue: 0),
            );
        }
      }
    }

    return defaultValue;
  }

  static Color getColor(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Color defaultValue}) {
    Map v = _getMap(map, key);
    return getColorNoKey(context, bo, v, defaultValue: defaultValue);
  }

  //****** CardTheme ******/
  static CardTheme getCardTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CardTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return CardTheme(
        clipBehavior: getClip(context, bo, v, "clipBehavior"),
        margin: getEdgeInsets(context, bo, v, "margin"),
        shape: getShapeBorder(context, bo, v, "shape"),
        color: getColor(context, bo, v, "color"),
        shadowColor: getColor(context, bo, v, "shadowColor"),
        elevation: getDouble(context, bo, v, "elevation"),
      );
    }
    return defaultValue;
  }

  //****** ChipThemeData ******/
  static ChipThemeData getChipThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ChipThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ChipThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        deleteIconColor: getColor(context, bo, v, "deleteIconColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        selectedColor: getColor(context, bo, v, "selectedColor"),
        secondarySelectedColor: getColor(context, bo, v, "secondarySelectedColor"),
        shadowColor: getColor(context, bo, v, "shadowColor"),
        selectedShadowColor: getColor(context, bo, v, "selectedShadowColor"),
        showCheckmark: getBool(context, bo, v, "showCheckmark"),
        checkmarkColor: getColor(context, bo, v, "checkmarkColor"),
        labelPadding: getEdgeInsets(context, bo, v, "labelPadding"),
        padding: getEdgeInsets(context, bo, v, "padding"),
        shape: getShapeBorder(context, bo, v, "shape"),
        labelStyle: getTextStyle(context, bo, v, "labelStyle"),
        secondaryLabelStyle: getTextStyle(context, bo, v, "secondaryLabelStyle"),
        brightness: getBrightness(context, bo, v, "brightness"),
        elevation: getDouble(context, bo, v, "elevation"),
        pressElevation: getDouble(context, bo, v, "pressElevation"),
      );
    }
    return defaultValue;
  }

  //****** ColorScheme ******/
  static ColorScheme getColorScheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ColorScheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var _constructorName = _getConstructorName(v);
      if (_constructorName == null) {
        return ColorScheme(
          brightness: getBrightness(context, bo, v, "brightness"),
          primary: getColor(context, bo, v, "primary"),
          primaryVariant: getColor(context, bo, v, "primaryVariant"),
          secondary: getColor(context, bo, v, "secondary"),
          secondaryVariant: getColor(context, bo, v, "secondaryVariant"),
          surface: getColor(context, bo, v, "surface"),
          background: getColor(context, bo, v, "background"),
          error: getColor(context, bo, v, "error"),
          onPrimary: getColor(context, bo, v, "onPrimary"),
          onSecondary: getColor(context, bo, v, "onSecondary"),
          onSurface: getColor(context, bo, v, "onSurface"),
          onBackground: getColor(context, bo, v, "onBackground"),
          onError: getColor(context, bo, v, "onError"),
        );
      }
    }
    return defaultValue;
  }

  //****** OutlinedBorder ******/
  static OutlinedBorder getOutlinedBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {OutlinedBorder defaultValue}) {
    Map v = _getMap(map, key, defaultValue: map);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case "CircleBorder":
          return CircleBorder(side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none));
        case "BeveledRectangleBorder":
          return BeveledRectangleBorder(
            side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: BorderRadius.zero),
          );
        case "ContinuousRectangleBorder":
          return ContinuousRectangleBorder(
            side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: BorderRadius.zero),
          );
        case "RoundedRectangleBorder":
          return RoundedRectangleBorder(
            side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: BorderRadius.zero),
          );
        case "StadiumBorder":
          return StadiumBorder(side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none));
      }
    }
    return defaultValue;
  }

  //****** ColorFilter ******/
  static ColorFilter getColorFilter(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ColorFilter defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ColorFilter.mode(
        getColor(context, bo, v, "color"),
        getBlendMode(context, bo, v, "blendMode"),
      );
    }
    return defaultValue;
  }

  //****** Cubic ******/
  static Cubic getCubic(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Cubic defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Cubic(
        getDouble(context, bo, v, "a"),
        getDouble(context, bo, v, "b"),
        getDouble(context, bo, v, "c"),
        getDouble(context, bo, v, "d"),
      );
    }
    return defaultValue;
  }

  //****** CurveTween ******/
  static CurveTween getCurveTween(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CurveTween defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return CurveTween(
        curve: getCurve(context, bo, v, "curve"),
      );
    }
    return defaultValue;
  }

  //****** List<Color> ******/
  static List<Color> getColorList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<Color> defaultValue}) {
    var li = _getList(map, key);
    if (li != null && li.length > 0) {
      List<Color> list = List<Color>();
      for (var a in li) {
        list.add(getColorNoKey(context, bo, a));
      }
      return list;
    }
    return defaultValue;
  }

  //****** TextStyle<Color> ******/
  static List<TextStyle> getTextStyleList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<TextStyle> defaultValue}) {
    var li = _getList(map, key);
    if (li != null && li.length > 0) {
      List<TextStyle> list = List<TextStyle>();
      for (var a in li) {
        list.add(getTextStyleNoKey(context, bo, a));
      }
      return list;
    }
    return defaultValue;
  }

  //****** CrossAxisAlignment ******/
  static CrossAxisAlignment getCrossAxisAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CrossAxisAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'start':
          return CrossAxisAlignment.start;
        case 'end':
          return CrossAxisAlignment.end;
        case 'center':
          return CrossAxisAlignment.center;
        case 'stretch':
          return CrossAxisAlignment.stretch;
        case 'baseline':
          return CrossAxisAlignment.baseline;
      }
    }
    return defaultValue;
  }

  //****** CrossFadeState ******/
  static CrossFadeState getCrossFadeState(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CrossFadeState defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'showFirst':
          return CrossFadeState.showFirst;
        case 'showSecond':
          return CrossFadeState.showSecond;
      }
    }
    return defaultValue;
  }

  //****** Clip ******/
  static Clip getClip(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Clip defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "antiAlias":
          return Clip.antiAlias;
        case "none":
          return Clip.none;
        case "hardEdge":
          return Clip.hardEdge;
        case "antiAliasWithSaveLayer":
          return Clip.antiAliasWithSaveLayer;
      }
    }
    return defaultValue;
  }

  //****** Curve ******/
  static Curve getCurve(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Curve defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "linear":
          return Curves.linear;
        case "decelerate":
          return Curves.decelerate;
        case "ease":
          return Curves.ease;
        case "easeIn":
          return Curves.easeIn;
        case "easeOut":
          return Curves.easeOut;
        case "fastOutSlowIn":
          return Curves.fastOutSlowIn;
        case "bounceIn":
          return Curves.bounceIn;
        case "bounceOut":
          return Curves.bounceOut;
        case "elasticIn":
          return Curves.elasticIn;
        case "elasticOut":
          return Curves.elasticOut;
        case "elasticInOut":
          return Curves.elasticInOut;
      }
    }
    return defaultValue;
  }

  //****** CollapseMode ******/
  static CollapseMode getCollapseMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CollapseMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "parallax":
          return CollapseMode.parallax;
        case "pin":
          return CollapseMode.pin;
        case "none":
          return CollapseMode.none;
      }
    }
    return defaultValue;
  }

  //****** CupertinoTextThemeData ******/
  static CupertinoTextThemeData getCupertinoTextThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CupertinoTextThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return CupertinoTextThemeData(
        primaryColor: getColor(context, bo, v, "primaryColor", defaultValue: CupertinoColors.systemBlue),
        textStyle: getTextStyle(context, bo, v, "textStyle"),
        actionTextStyle: getTextStyle(context, bo, v, "actionTextStyle"),
        tabLabelTextStyle: getTextStyle(context, bo, v, "tabLabelTextStyle"),
        navTitleTextStyle: getTextStyle(context, bo, v, "navTitleTextStyle"),
        navLargeTitleTextStyle: getTextStyle(context, bo, v, "navLargeTitleTextStyle"),
        navActionTextStyle: getTextStyle(context, bo, v, "navActionTextStyle"),
        pickerTextStyle: getTextStyle(context, bo, v, "pickerTextStyle"),
        dateTimePickerTextStyle: getTextStyle(context, bo, v, "dateTimePickerTextStyle"),
      );
    }
    return defaultValue;
  }

  //****** CupertinoTabController ******/
  static CupertinoTabController getCupertinoTabController(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CupertinoTabController defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return CupertinoTabController(initialIndex: getInt(context, bo, v, "initialIndex", defaultValue: 0));
    }
    return defaultValue;
  }

  //****** CupertinoThemeData ******/
  static CupertinoThemeData getCupertinoThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {CupertinoThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return CupertinoThemeData(
        primaryColor: getColor(context, bo, v, "primaryColor"),
        primaryContrastingColor: getColor(context, bo, v, "primaryContrastingColor"),
        brightness: getBrightness(context, bo, v, "brightness"),
        textTheme: getCupertinoTextThemeData(context, bo, v, "textTheme"),
        barBackgroundColor: getColor(context, bo, v, "barBackgroundColor"),
        scaffoldBackgroundColor: getColor(context, bo, v, "scaffoldBackgroundColor"),
      );
    }
    return defaultValue;
  }

  //-------------- D -----------------

  //****** DialogTheme ******/
  static DialogTheme getDialogTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DialogTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return DialogTheme(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        shape: getShapeBorder(context, bo, v, "shape"),
        titleTextStyle: getTextStyle(context, bo, v, "titleTextStyle"),
        contentTextStyle: getTextStyle(context, bo, v, "contentTextStyle"),
      );
    }
    return defaultValue;
  }

  //****** DataTableThemeData ******/
  static DataTableThemeData getDataTableThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DataTableThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return DataTableThemeData(
        dataRowHeight: getDouble(context, bo, v, "dataRowHeight"),
        dataTextStyle: getTextStyle(context, bo, v, "dataTextStyle"),
        headingRowHeight: getDouble(context, bo, v, "headingRowHeight"),
        headingTextStyle: getTextStyle(context, bo, v, "headingTextStyle"),
        horizontalMargin: getDouble(context, bo, v, "horizontalMargin"),
        columnSpacing: getDouble(context, bo, v, "columnSpacing"),
        dividerThickness: getDouble(context, bo, v, "dividerThickness"),
      );
    }
    return defaultValue;
  }

  //****** DividerThemeData ******/
  static DividerThemeData getDividerThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DividerThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return DividerThemeData(
        color: getColor(context, bo, v, "color"),
        space: getDouble(context, bo, v, "space"),
        thickness: getDouble(context, bo, v, "thickness"),
        indent: getDouble(context, bo, v, "indent"),
        endIndent: getDouble(context, bo, v, "endIndent"),
      );
    }
    return defaultValue;
  }

  //****** Double ******/
  static double getDouble(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {double defaultValue}) {
    return _getDouble(map, key) ?? defaultValue;
  }

  //****** Double List ******/
  static List<double> getDoubleList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<double> defaultValue}) {
    var li = _getList(map, key);
    if (li != null) {
      return toListT<double>(li);
    }
    return defaultValue;
  }

  //****** DateTime ******/
  static DateTime getDateTime(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DateTime defaultValue}) {
    var v = _getInt(map, key);
    if (v != null) {
      try {
        if (v.toString().length == 10) {
          return DateTime.fromMillisecondsSinceEpoch(v * 1000);
        }
        if (v.toString().length == 13) {
          return DateTime.fromMillisecondsSinceEpoch(v);
        }

        if (v.toString().length == 18) {
          return DateTime.fromMicrosecondsSinceEpoch(v);
        }
      } catch (ex) {}
    }
    return defaultValue;
  }

  //****** DragStartBehavior ******/
  static DragStartBehavior getDragStartBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DragStartBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'start':
          return DragStartBehavior.start;
        case 'down':
          return DragStartBehavior.down;
      }
    }
    return defaultValue;
  }

  //****** DatePickerMode ******/
  static DatePickerMode getDatePickerMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DatePickerMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'day':
          return DatePickerMode.day;
        case 'year':
          return DatePickerMode.year;
      }
    }
    return defaultValue;
  }

  //****** DatePickerEntryMode ******/
  static DatePickerEntryMode getDatePickerEntryMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DatePickerEntryMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'calendar':
          return DatePickerEntryMode.calendar;
        case 'input':
          return DatePickerEntryMode.input;
      }
    }
    return defaultValue;
  }

  //****** DrawerAlignment ******/
  static DrawerAlignment getDrawerAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DrawerAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'start':
          return DrawerAlignment.start;
        case 'end':
          return DrawerAlignment.end;
      }
    }
    return defaultValue;
  }

  //****** DecorationPosition ******/
  static DecorationPosition getDecorationPosition(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DecorationPosition defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'background':
          return DecorationPosition.background;
        case 'foreground':
          return DecorationPosition.foreground;
      }
    }
    return defaultValue;
  }

  //****** Duration ******/
  static Duration getDuration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Duration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Duration(
        days: getInt(context, bo, v, "days", defaultValue: 0),
        hours: getInt(context, bo, v, "hours", defaultValue: 0),
        minutes: getInt(context, bo, v, "minutes", defaultValue: 0),
        seconds: getInt(context, bo, v, "seconds", defaultValue: 0),
        milliseconds: getInt(context, bo, v, "milliseconds", defaultValue: 0),
        microseconds: getInt(context, bo, v, "microseconds", defaultValue: 0),
      );
    }

    return defaultValue;
  }

  //****** DecorationImage ******/
  static DecorationImage getDecorationImage(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DecorationImage defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return DecorationImage(
        image: getImageProvider(context, bo, v, "image"),
        colorFilter: getColorFilter(context, bo, v, "colorFilter"),
        fit: getBoxFit(context, bo, v, "fit"),
        alignment: getAlignment(context, bo, v, "alignment", defaultValue: Alignment.center),
        centerSlice: getRect(context, bo, v, "centerSlice"),
        repeat: getImageRepeat(context, bo, v, "repeat", defaultValue: ImageRepeat.noRepeat),
        matchTextDirection: getBool(context, bo, v, "matchTextDirection", defaultValue: false),
      );
    }

    return defaultValue;
  }

  //****** DecorationTween ******/
  static DecorationTween getDecorationTween(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {DecorationTween defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return DecorationTween(
        begin: getDecoration(context, bo, v, "begin"),
        end: getDecoration(context, bo, v, "end"),
      );
    }

    return defaultValue;
  }

  //****** Decoration ******/
  static Decoration getDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Decoration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);

      if (className == "BoxDecoration") {
        return getBoxDecoration(context, bo, map, key);
      }

      if (className == "FlutterLogoDecoration") {
        return getFlutterLogoDecoration(context, bo, map, key);
      }
    }
    return defaultValue;
  }

  //-------------- E -----------------
  //****** EdgeInsetsGeometry ******/
  static EdgeInsetsGeometry getEdgeInsets(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {EdgeInsetsGeometry defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      var constructorName = _getConstructorName(v);
      if (className == "EdgeInsets") {
        switch (constructorName) {
          case 'all':
            return EdgeInsets.all(_getDouble(v, "value"));
          case 'zero':
            return EdgeInsets.zero;
          case 'only':
            return EdgeInsets.only(
              left: getDouble(context, bo, v, "left", defaultValue: 0.0),
              top: getDouble(context, bo, v, "top", defaultValue: 0.0),
              right: getDouble(context, bo, v, "right", defaultValue: 0.0),
              bottom: getDouble(context, bo, v, "bottom", defaultValue: 0.0),
            );
          case 'fromLTRB':
            return EdgeInsets.fromLTRB(
              getDouble(context, bo, v, "left", defaultValue: 0.0),
              getDouble(context, bo, v, "top", defaultValue: 0.0),
              getDouble(context, bo, v, "right", defaultValue: 0.0),
              getDouble(context, bo, v, "bottom", defaultValue: 0.0),
            );
          case 'symmetric':
            return EdgeInsets.symmetric(
              vertical: getDouble(context, bo, v, "vertical", defaultValue: 0.0),
              horizontal: getDouble(context, bo, v, "horizontal", defaultValue: 0.0),
            );
        }
      }
    }
    return defaultValue;
  }

  //****** EdgeInsetsDirectional ******/
  static EdgeInsetsDirectional getEdgeInsetsDirectional(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {EdgeInsetsDirectional defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'only':
          return EdgeInsetsDirectional.only(
            start: getDouble(context, bo, v, "start", defaultValue: 0.0),
            top: getDouble(context, bo, v, "top", defaultValue: 0.0),
            end: getDouble(context, bo, v, "end", defaultValue: 0.0),
            bottom: getDouble(context, bo, v, "bottom", defaultValue: 0.0),
          );
        case 'fromLTRB':
          return EdgeInsetsDirectional.fromSTEB(
            getDouble(context, bo, v, "start", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "end", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
          );
      }
    }
    return defaultValue;
  }

  //-------------- F -----------------

  //****** FlexFit ******/
  static FlexFit getFlexFit(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FlexFit defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'loose':
          return FlexFit.loose;
        case 'tight':
          return FlexFit.tight;
      }
    }
    return defaultValue;
  }

  //****** FloatingLabelBehavior ******/
  static FloatingLabelBehavior getFloatingLabelBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FloatingLabelBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'always':
          return FloatingLabelBehavior.always;
        case 'auto':
          return FloatingLabelBehavior.auto;
        case 'never':
          return FloatingLabelBehavior.never;
      }
    }
    return defaultValue;
  }

  //****** FilterQuality ******/
  static FilterQuality getFilterQuality(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FilterQuality defaultValue}) {
    var v = _getString(map, key);

    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'none':
          return FilterQuality.none;
        case 'low':
          return FilterQuality.low;
        case 'medium':
          return FilterQuality.medium;
        case 'high':
          return FilterQuality.high;
      }
    }
    return defaultValue;
  }

//****** FlutterLogoStyle ******/
  static FlutterLogoStyle getFlutterLogoStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FlutterLogoStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'horizontal':
          return FlutterLogoStyle.horizontal;
        case 'markOnly':
          return FlutterLogoStyle.markOnly;
        case 'stacked':
          return FlutterLogoStyle.stacked;
      }
    }
    return defaultValue;
  }

  //****** FontStyle ******/
  static FontStyle getFontStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FontStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'normal':
          return FontStyle.normal;
        case 'italic':
          return FontStyle.italic;
      }
    }
    return defaultValue;
  }

  //****** FloatingActionButtonLocation ******/
  static FloatingActionButtonLocation getFloatingActionButtonLocation(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FloatingActionButtonLocation defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'endDocked':
          return FloatingActionButtonLocation.endDocked;
        case 'centerDocked':
          return FloatingActionButtonLocation.centerDocked;
        case 'endFloat':
          return FloatingActionButtonLocation.endFloat;
        case 'centerFloat':
          return FloatingActionButtonLocation.centerFloat;
        case 'startTop':
          return FloatingActionButtonLocation.startTop;
        case 'miniStartTop':
          return FloatingActionButtonLocation.miniStartTop;
        case 'endTop':
          return FloatingActionButtonLocation.endTop;
      }
    }
    return defaultValue;
  }

  //****** FontWeight ******/
  static FontWeight getFontWeight(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FontWeight defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'bold':
          return FontWeight.bold;
        case 'normal':
          return FontWeight.normal;
        case 'w100':
          return FontWeight.w100;
        case 'w200':
          return FontWeight.w200;
        case 'w300':
          return FontWeight.w300;
        case 'w400':
          return FontWeight.w400;
        case 'w500':
          return FontWeight.w500;
        case 'w600':
          return FontWeight.w600;
        case 'w700':
          return FontWeight.w700;
        case 'w800':
          return FontWeight.w800;
        case 'w900':
          return FontWeight.w900;
      }
    }
    return defaultValue;
  }

  //****** FractionalOffset ******/
  static FractionalOffset getFractionalOffset(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FractionalOffset defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FractionalOffset(
        getDouble(context, bo, v, "dx", defaultValue: 0.0),
        getDouble(context, bo, v, "dy", defaultValue: 0.0),
      );
    }
    return defaultValue;
  }

  //****** FlexColumnWidth ******/
  static FlexColumnWidth getFlexColumnWidth(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FlexColumnWidth defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FlexColumnWidth(
        getDouble(context, bo, v, "value", defaultValue: 1.0),
      );
    }
    return defaultValue;
  }

  //****** FlutterLogoDecoration ******/
  static FlutterLogoDecoration getFlutterLogoDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FlutterLogoDecoration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FlutterLogoDecoration(
        textColor: getColor(context, bo, v, "textColor", defaultValue: const Color(0xFF42A5F5)),
        style: getFlutterLogoStyle(context, bo, v, "style", defaultValue: FlutterLogoStyle.markOnly),
        margin: getEdgeInsets(context, bo, v, "margin", defaultValue: EdgeInsets.zero),
      );
    }
    return defaultValue;
  }

  //****** FocusNode ******/
  static FocusNode getFocusNode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FocusNode defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FocusNode(
        debugLabel: getString(context, bo, v, "debugLabel"),
        skipTraversal: getBool(context, bo, v, "skipTraversal", defaultValue: false),
        canRequestFocus: getBool(context, bo, v, "canRequestFocus", defaultValue: true),
        descendantsAreFocusable: getBool(context, bo, v, "descendantsAreFocusable", defaultValue: true),
      );
    }
    return defaultValue;
  }

  //****** FixedColumnWidth ******/
  static FixedColumnWidth getFixedColumnWidth(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FixedColumnWidth defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FixedColumnWidth(
        getDouble(context, bo, v, "value", defaultValue: 1.0),
      );
    }
    return defaultValue;
  }

//****** File ******/
  static File getFile(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {File defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return File(getString(context, bo, v, "path"));
      }

      switch (constructorName) {
        case 'fromRawPath':
          return File.fromRawPath(getUint8List(context, bo, v, "rawPath"));
        case 'fromUri':
          return File.fromUri(getUri(context, bo, v, "uri"));
      }
    }

    return defaultValue;
  }

  //****** FloatingActionButtonThemeData ******/
  static FloatingActionButtonThemeData getFloatingActionButtonThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {FloatingActionButtonThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return FloatingActionButtonThemeData(
        foregroundColor: getColor(context, bo, v, "foregroundColor"),
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        focusElevation: getDouble(context, bo, v, "focusElevation"),
        hoverElevation: getDouble(context, bo, v, "hoverElevation"),
        disabledElevation: getDouble(context, bo, v, "disabledElevation"),
        highlightElevation: getDouble(context, bo, v, "highlightElevation"),
        shape: getShapeBorder(context, bo, v, "shape"),
      );
    }
    return defaultValue;
  }

  //-------------- G -----------------
  //****** Gradient ******/
  static Gradient getGradient(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Gradient defaultValue}) {
    try {
      var v = _getMap(map, key);
      if (v != null) {
        var _className = _getClassName(v);
        if (_className == "LinearGradient") {
          return LinearGradient(
            begin: getAlignment(context, bo, v, "begin", defaultValue: Alignment.centerLeft),
            end: getAlignment(context, bo, v, "end", defaultValue: Alignment.centerRight),
            colors: getColorList(context, bo, v, "colors"),
            stops: getDoubleList(context, bo, v, "stops"),
            tileMode: getTileMode(context, bo, v, "tileMode", defaultValue: TileMode.clamp),
            transform: getGradientTransform(context, bo, v, "transform"),
          );
        }
        if (_className == "RadialGradient") {
          return RadialGradient(
            center: getAlignment(context, bo, v, "center", defaultValue: Alignment.center),
            radius: getDouble(context, bo, v, "radius", defaultValue: 0.5),
            colors: getColorList(context, bo, v, "colors"),
            stops: getDoubleList(context, bo, v, "stops"),
            tileMode: getTileMode(context, bo, v, "tileMode", defaultValue: TileMode.clamp),
            focal: getAlignment(context, bo, v, "focal"),
            focalRadius: getDouble(context, bo, v, "focalRadius", defaultValue: 0.0),
            transform: getGradientTransform(context, bo, v, "transform"),
          );
        }
        if (_className == "SweepGradient") {
          return SweepGradient(
            center: getAlignment(context, bo, v, "center", defaultValue: Alignment.center),
            startAngle: getDouble(context, bo, v, "startAngle", defaultValue: 0.0),
            endAngle: getDouble(context, bo, v, "endAngle", defaultValue: math.pi * 2),
            colors: getColorList(context, bo, v, "colors"),
            stops: getDoubleList(context, bo, v, "stops"),
            tileMode: getTileMode(context, bo, v, "tileMode", defaultValue: TileMode.clamp),
            transform: getGradientTransform(context, bo, v, "transform"),
          );
        }
      }
    } catch (ex) {
      //XSJSLog.log("map:${map.toString()} error:${ex.toString()}");
    }
    return defaultValue;
  }

  //****** GradientTransform ******/
  static GradientTransform getGradientTransform(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {GradientTransform defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case "GradientRotation":
          return GradientRotation(getDouble(context, bo, v, "radians"));
      }
    }
    return defaultValue;
  }

  //-------------- H -----------------
  //****** HitTestBehavior ******/
  static HitTestBehavior getHitTestBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {HitTestBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'deferToChild':
          return HitTestBehavior.deferToChild;
        case 'opaque':
          return HitTestBehavior.opaque;
        case 'translucent':
          return HitTestBehavior.translucent;
      }
    }
    return defaultValue;
  }

  //-------------- I -----------------
  //****** int ******/
  static int getInt(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {int defaultValue}) {
    return _getInt(map, key) ?? defaultValue;
  }

  //****** int List ******/
  static List<int> getIntList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<int> defaultValue}) {
    var li = _getList(map, key);
    if (li != null) {
      return toListT<int>(li);
    }
    return defaultValue;
  }

  //****** ImageRepeat ******/
  static ImageRepeat getImageRepeat(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ImageRepeat defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'repeat':
          return ImageRepeat.repeat;
        case 'repeatX':
          return ImageRepeat.repeatX;
        case 'repeatY':
          return ImageRepeat.repeatY;
        case 'noRepeat':
          return ImageRepeat.noRepeat;
      }
    }
    return defaultValue;
  }

  //****** InputDecorationTheme ******/
  static InputDecorationTheme getInputDecorationTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {InputDecorationTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return InputDecorationTheme(
        labelStyle: getTextStyle(context, bo, v, "labelStyle"),
        helperStyle: getTextStyle(context, bo, v, "helperStyle"),
        helperMaxLines: getInt(context, bo, v, "helperMaxLines"),
        hintStyle: getTextStyle(context, bo, v, "hintStyle"),
        errorStyle: getTextStyle(context, bo, v, "errorStyle"),
        errorMaxLines: getInt(context, bo, v, "errorMaxLines"),
        floatingLabelBehavior: getFloatingLabelBehavior(context, bo, v, "floatingLabelBehavior", defaultValue: FloatingLabelBehavior.auto),
        isDense: getBool(context, bo, v, "isDense", defaultValue: false),
        contentPadding: getEdgeInsets(context, bo, v, "contentPadding"),
        isCollapsed: getBool(context, bo, v, "isCollapsed", defaultValue: true),
        prefixStyle: getTextStyle(context, bo, v, "prefixStyle"),
        suffixStyle: getTextStyle(context, bo, v, "suffixStyle"),
        counterStyle: getTextStyle(context, bo, v, "counterStyle"),
        filled: getBool(context, bo, v, "filled", defaultValue: false),
        fillColor: getColor(context, bo, v, "fillColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        errorBorder: getInputBorder(context, bo, v, "errorBorder"),
        focusedBorder: getInputBorder(context, bo, v, "focusedBorder"),
        focusedErrorBorder: getInputBorder(context, bo, v, "focusedErrorBorder"),
        disabledBorder: getInputBorder(context, bo, v, "disabledBorder"),
        enabledBorder: getInputBorder(context, bo, v, "enabledBorder"),
        border: getInputBorder(context, bo, v, "border"),
        alignLabelWithHint: getBool(context, bo, v, "alignLabelWithHint", defaultValue: false),
      );
    }
    return defaultValue;
  }

  //****** IconThemeData ******/
  static IconThemeData getIconThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {IconThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return IconThemeData(
        color: getColor(context, bo, v, "color"),
        opacity: getDouble(context, bo, v, "opacity"),
        size: getDouble(context, bo, v, "size"),
      );
    }
    return defaultValue;
  }

  //****** IconData ******/
  static IconData getIconData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {IconData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      var icon = getString(context, bo, v, "icon");
      if (className == "CupertinoIcons") {
        switch (icon) {
          case "left_chevron":
            return CupertinoIcons.left_chevron;
          case "right_chevron":
            return CupertinoIcons.right_chevron;
          case "share":
            return CupertinoIcons.share;
          case "share_solid":
            return CupertinoIcons.share_solid;
          case "book":
            return CupertinoIcons.book;
          case "book_solid":
            return CupertinoIcons.book_solid;
          case "bookmark":
            return CupertinoIcons.bookmark;
          case "bookmark_solid":
            return CupertinoIcons.bookmark_solid;
          case "info":
            return CupertinoIcons.info;
          case "reply":
            return CupertinoIcons.reply;
          case "conversation_bubble":
            return CupertinoIcons.conversation_bubble;
          case "profile_circled":
            return CupertinoIcons.profile_circled;
          case "plus_circled":
            return CupertinoIcons.plus_circled;
          case "minus_circled":
            return CupertinoIcons.minus_circled;
          case "flag":
            return CupertinoIcons.flag;
          case "search":
            return CupertinoIcons.search;
          case "check_mark":
            return CupertinoIcons.check_mark;
          case "check_mark_circled":
            return CupertinoIcons.check_mark_circled;
          case "check_mark_circled_solid":
            return CupertinoIcons.check_mark_circled_solid;
          case "circle":
            return CupertinoIcons.circle;
          case "circle_filled":
            return CupertinoIcons.circle_filled;
          case "back":
            return CupertinoIcons.back;
          case "forward":
            return CupertinoIcons.forward;
          case "home":
            return CupertinoIcons.home;
          case "shopping_cart":
            return CupertinoIcons.shopping_cart;
          case "ellipsis":
            return CupertinoIcons.ellipsis;
          case "phone":
            return CupertinoIcons.phone;
          case "phone_solid":
            return CupertinoIcons.phone_solid;
          case "down_arrow":
            return CupertinoIcons.down_arrow;
          case "up_arrow":
            return CupertinoIcons.up_arrow;
          case "battery_charging":
            return CupertinoIcons.battery_charging;
          case "battery_empty":
            return CupertinoIcons.battery_empty;
          case "battery_full":
            return CupertinoIcons.battery_full;
          case "battery_75_percent":
            return CupertinoIcons.battery_75_percent;
          case "battery_25_percent":
            return CupertinoIcons.battery_25_percent;
          case "bluetooth":
            return CupertinoIcons.bluetooth;
          case "restart":
            return CupertinoIcons.restart;
          case "reply_all":
            return CupertinoIcons.reply_all;
          case "reply_thick_solid":
            return CupertinoIcons.reply_thick_solid;
          case "share_up":
            return CupertinoIcons.share_up;
          case "shuffle":
            return CupertinoIcons.shuffle;
          case "shuffle_medium":
            return CupertinoIcons.shuffle_medium;
          case "shuffle_thick":
            return CupertinoIcons.shuffle_thick;
          case "photo_camera":
            return CupertinoIcons.photo_camera;
          case "photo_camera_solid":
            return CupertinoIcons.photo_camera_solid;
          case "video_camera":
            return CupertinoIcons.video_camera;
          case "video_camera_solid":
            return CupertinoIcons.video_camera_solid;
          case "switch_camera":
            return CupertinoIcons.switch_camera;
          case "switch_camera_solid":
            return CupertinoIcons.switch_camera_solid;
          case "collections":
            return CupertinoIcons.collections;
          case "collections_solid":
            return CupertinoIcons.collections_solid;
          case "folder":
            return CupertinoIcons.folder;
          case "folder_solid":
            return CupertinoIcons.folder_solid;
          case "folder_open":
            return CupertinoIcons.folder_open;
          case "delete":
            return CupertinoIcons.delete;
          case "delete_solid":
            return CupertinoIcons.delete_solid;
          case "delete_simple":
            return CupertinoIcons.delete_simple;
          case "pen":
            return CupertinoIcons.pen;
          case "pencil":
            return CupertinoIcons.pencil;
          case "create":
            return CupertinoIcons.create;
          case "create_solid":
            return CupertinoIcons.create_solid;
          case "refresh":
            return CupertinoIcons.refresh;
          case "refresh_circled":
            return CupertinoIcons.refresh_circled;
          case "refresh_circled_solid":
            return CupertinoIcons.refresh_circled_solid;
          case "refresh_thin":
            return CupertinoIcons.refresh_thin;
          case "refresh_thick":
            return CupertinoIcons.refresh_thick;
          case "refresh_bold":
            return CupertinoIcons.refresh_bold;
          case "clear_thick":
            return CupertinoIcons.clear_thick;
          case "clear_thick_circled":
            return CupertinoIcons.clear_thick_circled;
          case "clear":
            return CupertinoIcons.clear;
          case "clear_circled":
            return CupertinoIcons.clear_circled;
          case "clear_circled_solid":
            return CupertinoIcons.clear_circled_solid;
          case "add":
            return CupertinoIcons.add;
          case "add_circled":
            return CupertinoIcons.add_circled;
          case "add_circled_solid":
            return CupertinoIcons.add_circled_solid;
          case "gear":
            return CupertinoIcons.gear;
          case "gear_solid":
            return CupertinoIcons.gear_solid;
          case "gear_big":
            return CupertinoIcons.gear_big;
          case "settings":
            return CupertinoIcons.settings;
          case "settings_solid":
            return CupertinoIcons.settings_solid;
          case "music_note":
            return CupertinoIcons.music_note;
          case "double_music_note":
            return CupertinoIcons.double_music_note;
          case "play_arrow":
            return CupertinoIcons.play_arrow;
          case "play_arrow_solid":
            return CupertinoIcons.play_arrow_solid;
          case "pause":
            return CupertinoIcons.pause;
          case "pause_solid":
            return CupertinoIcons.pause_solid;
          case "loop":
            return CupertinoIcons.loop;
          case "loop_thick":
            return CupertinoIcons.loop_thick;
          case "volume_down":
            return CupertinoIcons.volume_down;
          case "volume_mute":
            return CupertinoIcons.volume_mute;
          case "volume_off":
            return CupertinoIcons.volume_off;
          case "volume_up":
            return CupertinoIcons.volume_up;
          case "fullscreen":
            return CupertinoIcons.fullscreen;
          case "fullscreen_exit":
            return CupertinoIcons.fullscreen_exit;
          case "mic_off":
            return CupertinoIcons.mic_off;
          case "mic":
            return CupertinoIcons.mic;
          case "mic_solid":
            return CupertinoIcons.mic_solid;
          case "clock":
            return CupertinoIcons.clock;
          case "clock_solid":
            return CupertinoIcons.clock_solid;
          case "time":
            return CupertinoIcons.time;
          case "time_solid":
            return CupertinoIcons.time_solid;
          case "padlock":
            return CupertinoIcons.padlock;
          case "padlock_solid":
            return CupertinoIcons.padlock_solid;
          case "eye":
            return CupertinoIcons.eye;
          case "eye_solid":
            return CupertinoIcons.eye_solid;
          case "person":
            return CupertinoIcons.person;
          case "person_solid":
            return CupertinoIcons.person_solid;
          case "person_add":
            return CupertinoIcons.person_add;
          case "person_add_solid":
            return CupertinoIcons.person_add_solid;
          case "group":
            return CupertinoIcons.group;
          case "group_solid":
            return CupertinoIcons.group_solid;
          case "mail":
            return CupertinoIcons.mail;
          case "mail_solid":
            return CupertinoIcons.mail_solid;
          case "location":
            return CupertinoIcons.location;
          case "location_solid":
            return CupertinoIcons.location_solid;
          case "tag":
            return CupertinoIcons.tag;
          case "tag_solid":
            return CupertinoIcons.tag_solid;
          case "tags":
            return CupertinoIcons.tags;
          case "tags_solid":
            return CupertinoIcons.tags_solid;
          case "bus":
            return CupertinoIcons.bus;
          case "car":
            return CupertinoIcons.car;
          case "car_detailed":
            return CupertinoIcons.car_detailed;
          case "train_style_one":
            return CupertinoIcons.train_style_one;
          case "train_style_two":
            return CupertinoIcons.train_style_two;
          case "paw":
            return CupertinoIcons.paw;
          case "paw_solid":
            return CupertinoIcons.paw_solid;
          case "game_controller":
            return CupertinoIcons.game_controller;
          case "game_controller_solid":
            return CupertinoIcons.game_controller_solid;
          case "lab_flask":
            return CupertinoIcons.lab_flask;
          case "lab_flask_solid":
            return CupertinoIcons.lab_flask_solid;
          case "heart":
            return CupertinoIcons.heart;
          case "heart_solid":
            return CupertinoIcons.heart_solid;
          case "bell":
            return CupertinoIcons.bell;
          case "bell_solid":
            return CupertinoIcons.bell_solid;
          case "news":
            return CupertinoIcons.news;
          case "news_solid":
            return CupertinoIcons.news_solid;
          case "brightness":
            return CupertinoIcons.brightness;
          case "brightness_solid":
            return CupertinoIcons.brightness_solid;
        }
      }
      if (className == "Icons") {
        switch (icon) {
          case "threesixty":
            return Icons.threesixty;
          case "threed_rotation":
            return Icons.threed_rotation;
          case "four_k":
            return Icons.four_k;
          case "ac_unit":
            return Icons.ac_unit;
          case "access_alarm":
            return Icons.access_alarm;
          case "access_alarms":
            return Icons.access_alarms;
          case "access_time":
            return Icons.access_time;
          case "accessibility":
            return Icons.accessibility;
          case "accessibility_new":
            return Icons.accessibility_new;
          case "accessible":
            return Icons.accessible;
          case "accessible_forward":
            return Icons.accessible_forward;
          case "account_balance":
            return Icons.account_balance;
          case "account_balance_wallet":
            return Icons.account_balance_wallet;
          case "account_box":
            return Icons.account_box;
          case "account_circle":
            return Icons.account_circle;
          case "adb":
            return Icons.adb;
          case "add":
            return Icons.add;
          case "add_a_photo":
            return Icons.add_a_photo;
          case "add_alarm":
            return Icons.add_alarm;
          case "add_alert":
            return Icons.add_alert;
          case "add_box":
            return Icons.add_box;
          case "add_call":
            return Icons.add_call;
          case "add_circle":
            return Icons.add_circle;
          case "add_circle_outline":
            return Icons.add_circle_outline;
          case "add_comment":
            return Icons.add_comment;
          case "add_location":
            return Icons.add_location;
          case "add_photo_alternate":
            return Icons.add_photo_alternate;
          case "add_shopping_cart":
            return Icons.add_shopping_cart;
          case "add_to_home_screen":
            return Icons.add_to_home_screen;
          case "add_to_photos":
            return Icons.add_to_photos;
          case "add_to_queue":
            return Icons.add_to_queue;
          case "adjust":
            return Icons.adjust;
          case "airline_seat_flat":
            return Icons.airline_seat_flat;
          case "airline_seat_flat_angled":
            return Icons.airline_seat_flat_angled;
          case "airline_seat_individual_suite":
            return Icons.airline_seat_individual_suite;
          case "airline_seat_legroom_extra":
            return Icons.airline_seat_legroom_extra;
          case "airline_seat_legroom_normal":
            return Icons.airline_seat_legroom_normal;
          case "airline_seat_legroom_reduced":
            return Icons.airline_seat_legroom_reduced;
          case "airline_seat_recline_extra":
            return Icons.airline_seat_recline_extra;
          case "airline_seat_recline_normal":
            return Icons.airline_seat_recline_normal;
          case "airplanemode_active":
            return Icons.airplanemode_active;
          case "airplanemode_inactive":
            return Icons.airplanemode_inactive;
          case "airplay":
            return Icons.airplay;
          case "airport_shuttle":
            return Icons.airport_shuttle;
          case "alarm":
            return Icons.alarm;
          case "alarm_add":
            return Icons.alarm_add;
          case "alarm_off":
            return Icons.alarm_off;
          case "alarm_on":
            return Icons.alarm_on;
          case "album":
            return Icons.album;
          case "all_inclusive":
            return Icons.all_inclusive;
          case "all_out":
            return Icons.all_out;
          case "alternate_email":
            return Icons.alternate_email;
          case "android":
            return Icons.android;
          case "announcement":
            return Icons.announcement;
          case "apps":
            return Icons.apps;
          case "archive":
            return Icons.archive;
          case "arrow_back":
            return Icons.arrow_back;
          case "arrow_back_ios":
            return Icons.arrow_back_ios;
          case "arrow_downward":
            return Icons.arrow_downward;
          case "arrow_drop_down":
            return Icons.arrow_drop_down;
          case "arrow_drop_down_circle":
            return Icons.arrow_drop_down_circle;
          case "arrow_drop_up":
            return Icons.arrow_drop_up;
          case "arrow_forward":
            return Icons.arrow_forward;
          case "arrow_forward_ios":
            return Icons.arrow_forward_ios;
          case "arrow_left":
            return Icons.arrow_left;
          case "arrow_right":
            return Icons.arrow_right;
          case "arrow_upward":
            return Icons.arrow_upward;
          case "art_track":
            return Icons.art_track;
          case "aspect_ratio":
            return Icons.aspect_ratio;
          case "assessment":
            return Icons.assessment;
          case "assignment":
            return Icons.assignment;
          case "assignment_ind":
            return Icons.assignment_ind;
          case "assignment_late":
            return Icons.assignment_late;
          case "assignment_return":
            return Icons.assignment_return;
          case "assignment_returned":
            return Icons.assignment_returned;
          case "assignment_turned_in":
            return Icons.assignment_turned_in;
          case "assistant":
            return Icons.assistant;
          case "assistant_photo":
            return Icons.assistant_photo;
          case "atm":
            return Icons.atm;
          case "attach_file":
            return Icons.attach_file;
          case "attach_money":
            return Icons.attach_money;
          case "attachment":
            return Icons.attachment;
          case "audiotrack":
            return Icons.audiotrack;
          case "autorenew":
            return Icons.autorenew;
          case "av_timer":
            return Icons.av_timer;
          case "backspace":
            return Icons.backspace;
          case "backup":
            return Icons.backup;
          case "battery_alert":
            return Icons.battery_alert;
          case "battery_charging_full":
            return Icons.battery_charging_full;
          case "battery_full":
            return Icons.battery_full;
          case "battery_std":
            return Icons.battery_std;
          case "battery_unknown":
            return Icons.battery_unknown;
          case "beach_access":
            return Icons.beach_access;
          case "beenhere":
            return Icons.beenhere;
          case "block":
            return Icons.block;
          case "bluetooth":
            return Icons.bluetooth;
          case "bluetooth_audio":
            return Icons.bluetooth_audio;
          case "bluetooth_connected":
            return Icons.bluetooth_connected;
          case "bluetooth_disabled":
            return Icons.bluetooth_disabled;
          case "bluetooth_searching":
            return Icons.bluetooth_searching;
          case "blur_circular":
            return Icons.blur_circular;
          case "blur_linear":
            return Icons.blur_linear;
          case "blur_off":
            return Icons.blur_off;
          case "blur_on":
            return Icons.blur_on;
          case "book":
            return Icons.book;
          case "bookmark":
            return Icons.bookmark;
          case "bookmark_border":
            return Icons.bookmark_border;
          case "border_all":
            return Icons.border_all;
          case "border_bottom":
            return Icons.border_bottom;
          case "border_clear":
            return Icons.border_clear;
          case "border_color":
            return Icons.border_color;
          case "border_horizontal":
            return Icons.border_horizontal;
          case "border_inner":
            return Icons.border_inner;
          case "border_left":
            return Icons.border_left;
          case "border_outer":
            return Icons.border_outer;
          case "border_right":
            return Icons.border_right;
          case "border_style":
            return Icons.border_style;
          case "border_top":
            return Icons.border_top;
          case "border_vertical":
            return Icons.border_vertical;
          case "branding_watermark":
            return Icons.branding_watermark;
          case "brightness_1":
            return Icons.brightness_1;
          case "brightness_2":
            return Icons.brightness_2;
          case "brightness_3":
            return Icons.brightness_3;
          case "brightness_4":
            return Icons.brightness_4;
          case "brightness_5":
            return Icons.brightness_5;
          case "brightness_6":
            return Icons.brightness_6;
          case "brightness_7":
            return Icons.brightness_7;
          case "brightness_auto":
            return Icons.brightness_auto;
          case "brightness_high":
            return Icons.brightness_high;
          case "brightness_low":
            return Icons.brightness_low;
          case "brightness_medium":
            return Icons.brightness_medium;
          case "broken_image":
            return Icons.broken_image;
          case "brush":
            return Icons.brush;
          case "bubble_chart":
            return Icons.bubble_chart;
          case "bug_report":
            return Icons.bug_report;
          case "build":
            return Icons.build;
          case "burst_mode":
            return Icons.burst_mode;
          case "business":
            return Icons.business;
          case "business_center":
            return Icons.business_center;
          case "cached":
            return Icons.cached;
          case "cake":
            return Icons.cake;
          case "calendar_today":
            return Icons.calendar_today;
          case "calendar_view_day":
            return Icons.calendar_view_day;
          case "call":
            return Icons.call;
          case "call_end":
            return Icons.call_end;
          case "call_made":
            return Icons.call_made;
          case "call_merge":
            return Icons.call_merge;
          case "call_missed":
            return Icons.call_missed;
          case "call_missed_outgoing":
            return Icons.call_missed_outgoing;
          case "call_received":
            return Icons.call_received;
          case "call_split":
            return Icons.call_split;
          case "call_to_action":
            return Icons.call_to_action;
          case "camera":
            return Icons.camera;
          case "camera_alt":
            return Icons.camera_alt;
          case "camera_enhance":
            return Icons.camera_enhance;
          case "camera_front":
            return Icons.camera_front;
          case "camera_rear":
            return Icons.camera_rear;
          case "camera_roll":
            return Icons.camera_roll;
          case "cancel":
            return Icons.cancel;
          case "card_giftcard":
            return Icons.card_giftcard;
          case "card_membership":
            return Icons.card_membership;
          case "card_travel":
            return Icons.card_travel;
          case "casino":
            return Icons.casino;
          case "cast":
            return Icons.cast;
          case "cast_connected":
            return Icons.cast_connected;
          case "category":
            return Icons.category;
          case "center_focus_strong":
            return Icons.center_focus_strong;
          case "center_focus_weak":
            return Icons.center_focus_weak;
          case "change_history":
            return Icons.change_history;
          case "chat":
            return Icons.chat;
          case "chat_bubble":
            return Icons.chat_bubble;
          case "chat_bubble_outline":
            return Icons.chat_bubble_outline;
          case "check":
            return Icons.check;
          case "check_box":
            return Icons.check_box;
          case "check_box_outline_blank":
            return Icons.check_box_outline_blank;
          case "check_circle":
            return Icons.check_circle;
          case "check_circle_outline":
            return Icons.check_circle_outline;
          case "chevron_left":
            return Icons.chevron_left;
          case "chevron_right":
            return Icons.chevron_right;
          case "child_care":
            return Icons.child_care;
          case "child_friendly":
            return Icons.child_friendly;
          case "chrome_reader_mode":
            return Icons.chrome_reader_mode;
          case "class_":
            return Icons.class_;
          case "clear":
            return Icons.clear;
          case "clear_all":
            return Icons.clear_all;
          case "close":
            return Icons.close;
          case "closed_caption":
            return Icons.closed_caption;
          case "cloud":
            return Icons.cloud;
          case "cloud_circle":
            return Icons.cloud_circle;
          case "cloud_done":
            return Icons.cloud_done;
          case "cloud_download":
            return Icons.cloud_download;
          case "cloud_off":
            return Icons.cloud_off;
          case "cloud_queue":
            return Icons.cloud_queue;
          case "cloud_upload":
            return Icons.cloud_upload;
          case "code":
            return Icons.code;
          case "collections":
            return Icons.collections;
          case "collections_bookmark":
            return Icons.collections_bookmark;
          case "color_lens":
            return Icons.color_lens;
          case "colorize":
            return Icons.colorize;
          case "comment":
            return Icons.comment;
          case "compare":
            return Icons.compare;
          case "compare_arrows":
            return Icons.compare_arrows;
          case "computer":
            return Icons.computer;
          case "confirmation_number":
            return Icons.confirmation_number;
          case "contact_mail":
            return Icons.contact_mail;
          case "contact_phone":
            return Icons.contact_phone;
          case "contacts":
            return Icons.contacts;
          case "content_copy":
            return Icons.content_copy;
          case "content_cut":
            return Icons.content_cut;
          case "content_paste":
            return Icons.content_paste;
          case "control_point":
            return Icons.control_point;
          case "control_point_duplicate":
            return Icons.control_point_duplicate;
          case "copyright":
            return Icons.copyright;
          case "create":
            return Icons.create;
          case "create_new_folder":
            return Icons.create_new_folder;
          case "credit_card":
            return Icons.credit_card;
          case "crop":
            return Icons.crop;
          case "crop_16_9":
            return Icons.crop_16_9;
          case "crop_3_2":
            return Icons.crop_3_2;
          case "crop_5_4":
            return Icons.crop_5_4;
          case "crop_7_5":
            return Icons.crop_7_5;
          case "crop_din":
            return Icons.crop_din;
          case "crop_free":
            return Icons.crop_free;
          case "crop_landscape":
            return Icons.crop_landscape;
          case "crop_original":
            return Icons.crop_original;
          case "crop_portrait":
            return Icons.crop_portrait;
          case "crop_rotate":
            return Icons.crop_rotate;
          case "crop_square":
            return Icons.crop_square;
          case "dashboard":
            return Icons.dashboard;
          case "data_usage":
            return Icons.data_usage;
          case "date_range":
            return Icons.date_range;
          case "dehaze":
            return Icons.dehaze;
          case "delete":
            return Icons.delete;
          case "delete_forever":
            return Icons.delete_forever;
          case "delete_outline":
            return Icons.delete_outline;
          case "delete_sweep":
            return Icons.delete_sweep;
          case "departure_board":
            return Icons.departure_board;
          case "description":
            return Icons.description;
          case "desktop_mac":
            return Icons.desktop_mac;
          case "desktop_windows":
            return Icons.desktop_windows;
          case "details":
            return Icons.details;
          case "developer_board":
            return Icons.developer_board;
          case "developer_mode":
            return Icons.developer_mode;
          case "device_hub":
            return Icons.device_hub;
          case "device_unknown":
            return Icons.device_unknown;
          case "devices":
            return Icons.devices;
          case "devices_other":
            return Icons.devices_other;
          case "dialer_sip":
            return Icons.dialer_sip;
          case "dialpad":
            return Icons.dialpad;
          case "directions":
            return Icons.directions;
          case "directions_bike":
            return Icons.directions_bike;
          case "directions_boat":
            return Icons.directions_boat;
          case "directions_bus":
            return Icons.directions_bus;
          case "directions_car":
            return Icons.directions_car;
          case "directions_railway":
            return Icons.directions_railway;
          case "directions_run":
            return Icons.directions_run;
          case "directions_subway":
            return Icons.directions_subway;
          case "directions_transit":
            return Icons.directions_transit;
          case "directions_walk":
            return Icons.directions_walk;
          case "disc_full":
            return Icons.disc_full;
          case "dns":
            return Icons.dns;
          case "do_not_disturb":
            return Icons.do_not_disturb;
          case "do_not_disturb_alt":
            return Icons.do_not_disturb_alt;
          case "do_not_disturb_off":
            return Icons.do_not_disturb_off;
          case "do_not_disturb_on":
            return Icons.do_not_disturb_on;
          case "dock":
            return Icons.dock;
          case "domain":
            return Icons.domain;
          case "done":
            return Icons.done;
          case "done_all":
            return Icons.done_all;
          case "done_outline":
            return Icons.done_outline;
          case "donut_large":
            return Icons.donut_large;
          case "donut_small":
            return Icons.donut_small;
          case "drafts":
            return Icons.drafts;
          case "drag_handle":
            return Icons.drag_handle;
          case "drive_eta":
            return Icons.drive_eta;
          case "dvr":
            return Icons.dvr;
          case "edit":
            return Icons.edit;
          case "edit_attributes":
            return Icons.edit_attributes;
          case "edit_location":
            return Icons.edit_location;
          case "eject":
            return Icons.eject;
          case "email":
            return Icons.email;
          case "enhanced_encryption":
            return Icons.enhanced_encryption;
          case "equalizer":
            return Icons.equalizer;
          case "error":
            return Icons.error;
          case "error_outline":
            return Icons.error_outline;
          case "euro_symbol":
            return Icons.euro_symbol;
          case "ev_station":
            return Icons.ev_station;
          case "event":
            return Icons.event;
          case "event_available":
            return Icons.event_available;
          case "event_busy":
            return Icons.event_busy;
          case "event_note":
            return Icons.event_note;
          case "event_seat":
            return Icons.event_seat;
          case "exit_to_app":
            return Icons.exit_to_app;
          case "expand_less":
            return Icons.expand_less;
          case "expand_more":
            return Icons.expand_more;
          case "explicit":
            return Icons.explicit;
          case "explore":
            return Icons.explore;
          case "exposure":
            return Icons.exposure;
          case "exposure_neg_1":
            return Icons.exposure_neg_1;
          case "exposure_neg_2":
            return Icons.exposure_neg_2;
          case "exposure_plus_1":
            return Icons.exposure_plus_1;
          case "exposure_plus_2":
            return Icons.exposure_plus_2;
          case "exposure_zero":
            return Icons.exposure_zero;
          case "extension":
            return Icons.extension;
          case "face":
            return Icons.face;
          case "fast_forward":
            return Icons.fast_forward;
          case "fast_rewind":
            return Icons.fast_rewind;
          case "fastfood":
            return Icons.fastfood;
          case "favorite":
            return Icons.favorite;
          case "favorite_border":
            return Icons.favorite_border;
          case "featured_play_list":
            return Icons.featured_play_list;
          case "featured_video":
            return Icons.featured_video;
          case "feedback":
            return Icons.feedback;
          case "fiber_dvr":
            return Icons.fiber_dvr;
          case "fiber_manual_record":
            return Icons.fiber_manual_record;
          case "fiber_new":
            return Icons.fiber_new;
          case "fiber_pin":
            return Icons.fiber_pin;
          case "fiber_smart_record":
            return Icons.fiber_smart_record;
          case "file_download":
            return Icons.file_download;
          case "file_upload":
            return Icons.file_upload;
          case "filter":
            return Icons.filter;
          case "filter_1":
            return Icons.filter_1;
          case "filter_2":
            return Icons.filter_2;
          case "filter_3":
            return Icons.filter_3;
          case "filter_4":
            return Icons.filter_4;
          case "filter_5":
            return Icons.filter_5;
          case "filter_6":
            return Icons.filter_6;
          case "filter_7":
            return Icons.filter_7;
          case "filter_8":
            return Icons.filter_8;
          case "filter_9":
            return Icons.filter_9;
          case "filter_9_plus":
            return Icons.filter_9_plus;
          case "filter_b_and_w":
            return Icons.filter_b_and_w;
          case "filter_center_focus":
            return Icons.filter_center_focus;
          case "filter_drama":
            return Icons.filter_drama;
          case "filter_frames":
            return Icons.filter_frames;
          case "filter_hdr":
            return Icons.filter_hdr;
          case "filter_list":
            return Icons.filter_list;
          case "filter_none":
            return Icons.filter_none;
          case "filter_tilt_shift":
            return Icons.filter_tilt_shift;
          case "filter_vintage":
            return Icons.filter_vintage;
          case "find_in_page":
            return Icons.find_in_page;
          case "find_replace":
            return Icons.find_replace;
          case "fingerprint":
            return Icons.fingerprint;
          case "first_page":
            return Icons.first_page;
          case "fitness_center":
            return Icons.fitness_center;
          case "flag":
            return Icons.flag;
          case "flare":
            return Icons.flare;
          case "flash_auto":
            return Icons.flash_auto;
          case "flash_off":
            return Icons.flash_off;
          case "flash_on":
            return Icons.flash_on;
          case "flight":
            return Icons.flight;
          case "flight_land":
            return Icons.flight_land;
          case "flight_takeoff":
            return Icons.flight_takeoff;
          case "flip":
            return Icons.flip;
          case "flip_to_back":
            return Icons.flip_to_back;
          case "flip_to_front":
            return Icons.flip_to_front;
          case "folder":
            return Icons.folder;
          case "folder_open":
            return Icons.folder_open;
          case "folder_shared":
            return Icons.folder_shared;
          case "folder_special":
            return Icons.folder_special;
          case "font_download":
            return Icons.font_download;
          case "format_align_center":
            return Icons.format_align_center;
          case "format_align_justify":
            return Icons.format_align_justify;
          case "format_align_left":
            return Icons.format_align_left;
          case "format_align_right":
            return Icons.format_align_right;
          case "format_bold":
            return Icons.format_bold;
          case "format_clear":
            return Icons.format_clear;
          case "format_color_fill":
            return Icons.format_color_fill;
          case "format_color_reset":
            return Icons.format_color_reset;
          case "format_color_text":
            return Icons.format_color_text;
          case "format_indent_decrease":
            return Icons.format_indent_decrease;
          case "format_indent_increase":
            return Icons.format_indent_increase;
          case "format_italic":
            return Icons.format_italic;
          case "format_line_spacing":
            return Icons.format_line_spacing;
          case "format_list_bulleted":
            return Icons.format_list_bulleted;
          case "format_list_numbered":
            return Icons.format_list_numbered;
          case "format_list_numbered_rtl":
            return Icons.format_list_numbered_rtl;
          case "format_paint":
            return Icons.format_paint;
          case "format_quote":
            return Icons.format_quote;
          case "format_shapes":
            return Icons.format_shapes;
          case "format_size":
            return Icons.format_size;
          case "format_strikethrough":
            return Icons.format_strikethrough;
          case "format_textdirection_l_to_r":
            return Icons.format_textdirection_l_to_r;
          case "format_textdirection_r_to_l":
            return Icons.format_textdirection_r_to_l;
          case "format_underlined":
            return Icons.format_underlined;
          case "forum":
            return Icons.forum;
          case "forward":
            return Icons.forward;
          case "forward_10":
            return Icons.forward_10;
          case "forward_30":
            return Icons.forward_30;
          case "forward_5":
            return Icons.forward_5;
          case "free_breakfast":
            return Icons.free_breakfast;
          case "fullscreen":
            return Icons.fullscreen;
          case "fullscreen_exit":
            return Icons.fullscreen_exit;
          case "functions":
            return Icons.functions;
          case "g_translate":
            return Icons.g_translate;
          case "gamepad":
            return Icons.gamepad;
          case "games":
            return Icons.games;
          case "gavel":
            return Icons.gavel;
          case "gesture":
            return Icons.gesture;
          case "get_app":
            return Icons.get_app;
          case "gif":
            return Icons.gif;
          case "golf_course":
            return Icons.golf_course;
          case "gps_fixed":
            return Icons.gps_fixed;
          case "gps_not_fixed":
            return Icons.gps_not_fixed;
          case "gps_off":
            return Icons.gps_off;
          case "grade":
            return Icons.grade;
          case "gradient":
            return Icons.gradient;
          case "grain":
            return Icons.grain;
          case "graphic_eq":
            return Icons.graphic_eq;
          case "grid_off":
            return Icons.grid_off;
          case "grid_on":
            return Icons.grid_on;
          case "group":
            return Icons.group;
          case "group_add":
            return Icons.group_add;
          case "group_work":
            return Icons.group_work;
          case "hd":
            return Icons.hd;
          case "hdr_off":
            return Icons.hdr_off;
          case "hdr_on":
            return Icons.hdr_on;
          case "hdr_strong":
            return Icons.hdr_strong;
          case "hdr_weak":
            return Icons.hdr_weak;
          case "headset":
            return Icons.headset;
          case "headset_mic":
            return Icons.headset_mic;
          case "headset_off":
            return Icons.headset_off;
          case "healing":
            return Icons.healing;
          case "hearing":
            return Icons.hearing;
          case "help":
            return Icons.help;
          case "help_outline":
            return Icons.help_outline;
          case "high_quality":
            return Icons.high_quality;
          case "highlight":
            return Icons.highlight;
          case "highlight_off":
            return Icons.highlight_off;
          case "history":
            return Icons.history;
          case "home":
            return Icons.home;
          case "hot_tub":
            return Icons.hot_tub;
          case "hotel":
            return Icons.hotel;
          case "hourglass_empty":
            return Icons.hourglass_empty;
          case "hourglass_full":
            return Icons.hourglass_full;
          case "http":
            return Icons.http;
          case "https":
            return Icons.https;
          case "image":
            return Icons.image;
          case "image_aspect_ratio":
            return Icons.image_aspect_ratio;
          case "import_contacts":
            return Icons.import_contacts;
          case "import_export":
            return Icons.import_export;
          case "important_devices":
            return Icons.important_devices;
          case "inbox":
            return Icons.inbox;
          case "indeterminate_check_box":
            return Icons.indeterminate_check_box;
          case "info":
            return Icons.info;
          case "info_outline":
            return Icons.info_outline;
          case "input":
            return Icons.input;
          case "insert_chart":
            return Icons.insert_chart;
          case "insert_comment":
            return Icons.insert_comment;
          case "insert_drive_file":
            return Icons.insert_drive_file;
          case "insert_emoticon":
            return Icons.insert_emoticon;
          case "insert_invitation":
            return Icons.insert_invitation;
          case "insert_link":
            return Icons.insert_link;
          case "insert_photo":
            return Icons.insert_photo;
          case "invert_colors":
            return Icons.invert_colors;
          case "invert_colors_off":
            return Icons.invert_colors_off;
          case "iso":
            return Icons.iso;
          case "keyboard":
            return Icons.keyboard;
          case "keyboard_arrow_down":
            return Icons.keyboard_arrow_down;
          case "keyboard_arrow_left":
            return Icons.keyboard_arrow_left;
          case "keyboard_arrow_right":
            return Icons.keyboard_arrow_right;
          case "keyboard_arrow_up":
            return Icons.keyboard_arrow_up;
          case "keyboard_backspace":
            return Icons.keyboard_backspace;
          case "keyboard_capslock":
            return Icons.keyboard_capslock;
          case "keyboard_hide":
            return Icons.keyboard_hide;
          case "keyboard_return":
            return Icons.keyboard_return;
          case "keyboard_tab":
            return Icons.keyboard_tab;
          case "keyboard_voice":
            return Icons.keyboard_voice;
          case "kitchen":
            return Icons.kitchen;
          case "label":
            return Icons.label;
          case "label_important":
            return Icons.label_important;
          case "label_outline":
            return Icons.label_outline;
          case "landscape":
            return Icons.landscape;
          case "language":
            return Icons.language;
          case "laptop":
            return Icons.laptop;
          case "laptop_chromebook":
            return Icons.laptop_chromebook;
          case "laptop_mac":
            return Icons.laptop_mac;
          case "laptop_windows":
            return Icons.laptop_windows;
          case "last_page":
            return Icons.last_page;
          case "launch":
            return Icons.launch;
          case "layers":
            return Icons.layers;
          case "layers_clear":
            return Icons.layers_clear;
          case "leak_add":
            return Icons.leak_add;
          case "leak_remove":
            return Icons.leak_remove;
          case "lens":
            return Icons.lens;
          case "library_add":
            return Icons.library_add;
          case "library_books":
            return Icons.library_books;
          case "library_music":
            return Icons.library_music;
          case "lightbulb_outline":
            return Icons.lightbulb_outline;
          case "line_style":
            return Icons.line_style;
          case "line_weight":
            return Icons.line_weight;
          case "linear_scale":
            return Icons.linear_scale;
          case "link":
            return Icons.link;
          case "link_off":
            return Icons.link_off;
          case "linked_camera":
            return Icons.linked_camera;
          case "list":
            return Icons.list;
          case "live_help":
            return Icons.live_help;
          case "live_tv":
            return Icons.live_tv;
          case "local_activity":
            return Icons.local_activity;
          case "local_airport":
            return Icons.local_airport;
          case "local_atm":
            return Icons.local_atm;
          case "local_bar":
            return Icons.local_bar;
          case "local_cafe":
            return Icons.local_cafe;
          case "local_car_wash":
            return Icons.local_car_wash;
          case "local_convenience_store":
            return Icons.local_convenience_store;
          case "local_dining":
            return Icons.local_dining;
          case "local_drink":
            return Icons.local_drink;
          case "local_florist":
            return Icons.local_florist;
          case "local_gas_station":
            return Icons.local_gas_station;
          case "local_grocery_store":
            return Icons.local_grocery_store;
          case "local_hospital":
            return Icons.local_hospital;
          case "local_hotel":
            return Icons.local_hotel;
          case "local_laundry_service":
            return Icons.local_laundry_service;
          case "local_library":
            return Icons.local_library;
          case "local_mall":
            return Icons.local_mall;
          case "local_movies":
            return Icons.local_movies;
          case "local_offer":
            return Icons.local_offer;
          case "local_parking":
            return Icons.local_parking;
          case "local_pharmacy":
            return Icons.local_pharmacy;
          case "local_phone":
            return Icons.local_phone;
          case "local_pizza":
            return Icons.local_pizza;
          case "local_play":
            return Icons.local_play;
          case "local_post_office":
            return Icons.local_post_office;
          case "local_printshop":
            return Icons.local_printshop;
          case "local_see":
            return Icons.local_see;
          case "local_shipping":
            return Icons.local_shipping;
          case "local_taxi":
            return Icons.local_taxi;
          case "location_city":
            return Icons.location_city;
          case "location_disabled":
            return Icons.location_disabled;
          case "location_off":
            return Icons.location_off;
          case "location_on":
            return Icons.location_on;
          case "location_searching":
            return Icons.location_searching;
          case "lock":
            return Icons.lock;
          case "lock_open":
            return Icons.lock_open;
          case "lock_outline":
            return Icons.lock_outline;
          case "looks":
            return Icons.looks;
          case "looks_3":
            return Icons.looks_3;
          case "looks_4":
            return Icons.looks_4;
          case "looks_5":
            return Icons.looks_5;
          case "looks_6":
            return Icons.looks_6;
          case "looks_one":
            return Icons.looks_one;
          case "looks_two":
            return Icons.looks_two;
          case "loop":
            return Icons.loop;
          case "loupe":
            return Icons.loupe;
          case "low_priority":
            return Icons.low_priority;
          case "loyalty":
            return Icons.loyalty;
          case "mail":
            return Icons.mail;
          case "mail_outline":
            return Icons.mail_outline;
          case "map":
            return Icons.map;
          case "markunread":
            return Icons.markunread;
          case "markunread_mailbox":
            return Icons.markunread_mailbox;
          case "maximize":
            return Icons.maximize;
          case "memory":
            return Icons.memory;
          case "menu":
            return Icons.menu;
          case "merge_type":
            return Icons.merge_type;
          case "message":
            return Icons.message;
          case "mic":
            return Icons.mic;
          case "mic_none":
            return Icons.mic_none;
          case "mic_off":
            return Icons.mic_off;
          case "minimize":
            return Icons.minimize;
          case "missed_video_call":
            return Icons.missed_video_call;
          case "mms":
            return Icons.mms;
          case "mobile_screen_share":
            return Icons.mobile_screen_share;
          case "mode_comment":
            return Icons.mode_comment;
          case "mode_edit":
            return Icons.mode_edit;
          case "monetization_on":
            return Icons.monetization_on;
          case "money_off":
            return Icons.money_off;
          case "monochrome_photos":
            return Icons.monochrome_photos;
          case "mood":
            return Icons.mood;
          case "mood_bad":
            return Icons.mood_bad;
          case "more":
            return Icons.more;
          case "more_horiz":
            return Icons.more_horiz;
          case "more_vert":
            return Icons.more_vert;
          case "motorcycle":
            return Icons.motorcycle;
          case "mouse":
            return Icons.mouse;
          case "move_to_inbox":
            return Icons.move_to_inbox;
          case "movie":
            return Icons.movie;
          case "movie_creation":
            return Icons.movie_creation;
          case "movie_filter":
            return Icons.movie_filter;
          case "multiline_chart":
            return Icons.multiline_chart;
          case "music_note":
            return Icons.music_note;
          case "music_video":
            return Icons.music_video;
          case "my_location":
            return Icons.my_location;
          case "nature":
            return Icons.nature;
          case "nature_people":
            return Icons.nature_people;
          case "navigate_before":
            return Icons.navigate_before;
          case "navigate_next":
            return Icons.navigate_next;
          case "navigation":
            return Icons.navigation;
          case "near_me":
            return Icons.near_me;
          case "network_cell":
            return Icons.network_cell;
          case "network_check":
            return Icons.network_check;
          case "network_locked":
            return Icons.network_locked;
          case "network_wifi":
            return Icons.network_wifi;
          case "new_releases":
            return Icons.new_releases;
          case "next_week":
            return Icons.next_week;
          case "nfc":
            return Icons.nfc;
          case "no_encryption":
            return Icons.no_encryption;
          case "no_sim":
            return Icons.no_sim;
          case "not_interested":
            return Icons.not_interested;
          case "not_listed_location":
            return Icons.not_listed_location;
          case "note":
            return Icons.note;
          case "note_add":
            return Icons.note_add;
          case "notification_important":
            return Icons.notification_important;
          case "notifications":
            return Icons.notifications;
          case "notifications_active":
            return Icons.notifications_active;
          case "notifications_none":
            return Icons.notifications_none;
          case "notifications_off":
            return Icons.notifications_off;
          case "notifications_paused":
            return Icons.notifications_paused;
          case "offline_bolt":
            return Icons.offline_bolt;
          case "offline_pin":
            return Icons.offline_pin;
          case "ondemand_video":
            return Icons.ondemand_video;
          case "opacity":
            return Icons.opacity;
          case "open_in_browser":
            return Icons.open_in_browser;
          case "open_in_new":
            return Icons.open_in_new;
          case "open_with":
            return Icons.open_with;
          case "outlined_flag":
            return Icons.outlined_flag;
          case "pages":
            return Icons.pages;
          case "pageview":
            return Icons.pageview;
          case "palette":
            return Icons.palette;
          case "pan_tool":
            return Icons.pan_tool;
          case "panorama":
            return Icons.panorama;
          case "panorama_fish_eye":
            return Icons.panorama_fish_eye;
          case "panorama_horizontal":
            return Icons.panorama_horizontal;
          case "panorama_vertical":
            return Icons.panorama_vertical;
          case "panorama_wide_angle":
            return Icons.panorama_wide_angle;
          case "party_mode":
            return Icons.party_mode;
          case "pause":
            return Icons.pause;
          case "pause_circle_filled":
            return Icons.pause_circle_filled;
          case "pause_circle_outline":
            return Icons.pause_circle_outline;
          case "payment":
            return Icons.payment;
          case "people":
            return Icons.people;
          case "people_outline":
            return Icons.people_outline;
          case "perm_camera_mic":
            return Icons.perm_camera_mic;
          case "perm_contact_calendar":
            return Icons.perm_contact_calendar;
          case "perm_data_setting":
            return Icons.perm_data_setting;
          case "perm_device_information":
            return Icons.perm_device_information;
          case "perm_identity":
            return Icons.perm_identity;
          case "perm_media":
            return Icons.perm_media;
          case "perm_phone_msg":
            return Icons.perm_phone_msg;
          case "perm_scan_wifi":
            return Icons.perm_scan_wifi;
          case "person":
            return Icons.person;
          case "person_add":
            return Icons.person_add;
          case "person_outline":
            return Icons.person_outline;
          case "person_pin":
            return Icons.person_pin;
          case "person_pin_circle":
            return Icons.person_pin_circle;
          case "personal_video":
            return Icons.personal_video;
          case "pets":
            return Icons.pets;
          case "phone":
            return Icons.phone;
          case "phone_android":
            return Icons.phone_android;
          case "phone_bluetooth_speaker":
            return Icons.phone_bluetooth_speaker;
          case "phone_forwarded":
            return Icons.phone_forwarded;
          case "phone_in_talk":
            return Icons.phone_in_talk;
          case "phone_iphone":
            return Icons.phone_iphone;
          case "phone_locked":
            return Icons.phone_locked;
          case "phone_missed":
            return Icons.phone_missed;
          case "phone_paused":
            return Icons.phone_paused;
          case "phonelink":
            return Icons.phonelink;
          case "phonelink_erase":
            return Icons.phonelink_erase;
          case "phonelink_lock":
            return Icons.phonelink_lock;
          case "phonelink_off":
            return Icons.phonelink_off;
          case "phonelink_ring":
            return Icons.phonelink_ring;
          case "phonelink_setup":
            return Icons.phonelink_setup;
          case "photo":
            return Icons.photo;
          case "photo_album":
            return Icons.photo_album;
          case "photo_camera":
            return Icons.photo_camera;
          case "photo_filter":
            return Icons.photo_filter;
          case "photo_library":
            return Icons.photo_library;
          case "photo_size_select_actual":
            return Icons.photo_size_select_actual;
          case "photo_size_select_large":
            return Icons.photo_size_select_large;
          case "photo_size_select_small":
            return Icons.photo_size_select_small;
          case "picture_as_pdf":
            return Icons.picture_as_pdf;
          case "picture_in_picture":
            return Icons.picture_in_picture;
          case "picture_in_picture_alt":
            return Icons.picture_in_picture_alt;
          case "pie_chart":
            return Icons.pie_chart;
          case "pie_chart_outlined":
            return Icons.pie_chart_outlined;
          case "pin_drop":
            return Icons.pin_drop;
          case "place":
            return Icons.place;
          case "play_arrow":
            return Icons.play_arrow;
          case "play_circle_filled":
            return Icons.play_circle_filled;
          case "play_circle_outline":
            return Icons.play_circle_outline;
          case "play_for_work":
            return Icons.play_for_work;
          case "playlist_add":
            return Icons.playlist_add;
          case "playlist_add_check":
            return Icons.playlist_add_check;
          case "playlist_play":
            return Icons.playlist_play;
          case "plus_one":
            return Icons.plus_one;
          case "poll":
            return Icons.poll;
          case "polymer":
            return Icons.polymer;
          case "pool":
            return Icons.pool;
          case "portable_wifi_off":
            return Icons.portable_wifi_off;
          case "portrait":
            return Icons.portrait;
          case "power":
            return Icons.power;
          case "power_input":
            return Icons.power_input;
          case "power_settings_new":
            return Icons.power_settings_new;
          case "pregnant_woman":
            return Icons.pregnant_woman;
          case "present_to_all":
            return Icons.present_to_all;
          case "print":
            return Icons.print;
          case "priority_high":
            return Icons.priority_high;
          case "public":
            return Icons.public;
          case "publish":
            return Icons.publish;
          case "query_builder":
            return Icons.query_builder;
          case "question_answer":
            return Icons.question_answer;
          case "queue":
            return Icons.queue;
          case "queue_music":
            return Icons.queue_music;
          case "queue_play_next":
            return Icons.queue_play_next;
          case "radio":
            return Icons.radio;
          case "radio_button_checked":
            return Icons.radio_button_checked;
          case "radio_button_unchecked":
            return Icons.radio_button_unchecked;
          case "rate_review":
            return Icons.rate_review;
          case "receipt":
            return Icons.receipt;
          case "recent_actors":
            return Icons.recent_actors;
          case "record_voice_over":
            return Icons.record_voice_over;
          case "redeem":
            return Icons.redeem;
          case "redo":
            return Icons.redo;
          case "refresh":
            return Icons.refresh;
          case "remove":
            return Icons.remove;
          case "remove_circle":
            return Icons.remove_circle;
          case "remove_circle_outline":
            return Icons.remove_circle_outline;
          case "remove_from_queue":
            return Icons.remove_from_queue;
          case "remove_red_eye":
            return Icons.remove_red_eye;
          case "remove_shopping_cart":
            return Icons.remove_shopping_cart;
          case "reorder":
            return Icons.reorder;
          case "repeat":
            return Icons.repeat;
          case "repeat_one":
            return Icons.repeat_one;
          case "replay":
            return Icons.replay;
          case "replay_10":
            return Icons.replay_10;
          case "replay_30":
            return Icons.replay_30;
          case "replay_5":
            return Icons.replay_5;
          case "reply":
            return Icons.reply;
          case "reply_all":
            return Icons.reply_all;
          case "report":
            return Icons.report;
          case "report_off":
            return Icons.report_off;
          case "report_problem":
            return Icons.report_problem;
          case "restaurant":
            return Icons.restaurant;
          case "restaurant_menu":
            return Icons.restaurant_menu;
          case "restore":
            return Icons.restore;
          case "restore_from_trash":
            return Icons.restore_from_trash;
          case "restore_page":
            return Icons.restore_page;
          case "ring_volume":
            return Icons.ring_volume;
          case "room":
            return Icons.room;
          case "room_service":
            return Icons.room_service;
          case "rotate_90_degrees_ccw":
            return Icons.rotate_90_degrees_ccw;
          case "rotate_left":
            return Icons.rotate_left;
          case "rotate_right":
            return Icons.rotate_right;
          case "rounded_corner":
            return Icons.rounded_corner;
          case "router":
            return Icons.router;
          case "rowing":
            return Icons.rowing;
          case "rss_feed":
            return Icons.rss_feed;
          case "rv_hookup":
            return Icons.rv_hookup;
          case "satellite":
            return Icons.satellite;
          case "save":
            return Icons.save;
          case "save_alt":
            return Icons.save_alt;
          case "scanner":
            return Icons.scanner;
          case "scatter_plot":
            return Icons.scatter_plot;
          case "schedule":
            return Icons.schedule;
          case "school":
            return Icons.school;
          case "score":
            return Icons.score;
          case "screen_lock_landscape":
            return Icons.screen_lock_landscape;
          case "screen_lock_portrait":
            return Icons.screen_lock_portrait;
          case "screen_lock_rotation":
            return Icons.screen_lock_rotation;
          case "screen_rotation":
            return Icons.screen_rotation;
          case "screen_share":
            return Icons.screen_share;
          case "sd_card":
            return Icons.sd_card;
          case "sd_storage":
            return Icons.sd_storage;
          case "search":
            return Icons.search;
          case "security":
            return Icons.security;
          case "select_all":
            return Icons.select_all;
          case "send":
            return Icons.send;
          case "sentiment_dissatisfied":
            return Icons.sentiment_dissatisfied;
          case "sentiment_neutral":
            return Icons.sentiment_neutral;
          case "sentiment_satisfied":
            return Icons.sentiment_satisfied;
          case "sentiment_very_dissatisfied":
            return Icons.sentiment_very_dissatisfied;
          case "sentiment_very_satisfied":
            return Icons.sentiment_very_satisfied;
          case "settings":
            return Icons.settings;
          case "settings_applications":
            return Icons.settings_applications;
          case "settings_backup_restore":
            return Icons.settings_backup_restore;
          case "settings_bluetooth":
            return Icons.settings_bluetooth;
          case "settings_brightness":
            return Icons.settings_brightness;
          case "settings_cell":
            return Icons.settings_cell;
          case "settings_ethernet":
            return Icons.settings_ethernet;
          case "settings_input_antenna":
            return Icons.settings_input_antenna;
          case "settings_input_component":
            return Icons.settings_input_component;
          case "settings_input_composite":
            return Icons.settings_input_composite;
          case "settings_input_hdmi":
            return Icons.settings_input_hdmi;
          case "settings_input_svideo":
            return Icons.settings_input_svideo;
          case "settings_overscan":
            return Icons.settings_overscan;
          case "settings_phone":
            return Icons.settings_phone;
          case "settings_power":
            return Icons.settings_power;
          case "settings_remote":
            return Icons.settings_remote;
          case "settings_system_daydream":
            return Icons.settings_system_daydream;
          case "settings_voice":
            return Icons.settings_voice;
          case "share":
            return Icons.share;
          case "shop":
            return Icons.shop;
          case "shop_two":
            return Icons.shop_two;
          case "shopping_basket":
            return Icons.shopping_basket;
          case "shopping_cart":
            return Icons.shopping_cart;
          case "short_text":
            return Icons.short_text;
          case "show_chart":
            return Icons.show_chart;
          case "shuffle":
            return Icons.shuffle;
          case "shutter_speed":
            return Icons.shutter_speed;
          case "signal_cellular_4_bar":
            return Icons.signal_cellular_4_bar;
          case "signal_cellular_connected_no_internet_4_bar":
            return Icons.signal_cellular_connected_no_internet_4_bar;
          case "signal_cellular_no_sim":
            return Icons.signal_cellular_no_sim;
          case "signal_cellular_null":
            return Icons.signal_cellular_null;
          case "signal_cellular_off":
            return Icons.signal_cellular_off;
          case "signal_wifi_4_bar":
            return Icons.signal_wifi_4_bar;
          case "signal_wifi_4_bar_lock":
            return Icons.signal_wifi_4_bar_lock;
          case "signal_wifi_off":
            return Icons.signal_wifi_off;
          case "sim_card":
            return Icons.sim_card;
          case "sim_card_alert":
            return Icons.sim_card_alert;
          case "skip_next":
            return Icons.skip_next;
          case "skip_previous":
            return Icons.skip_previous;
          case "slideshow":
            return Icons.slideshow;
          case "slow_motion_video":
            return Icons.slow_motion_video;
          case "smartphone":
            return Icons.smartphone;
          case "smoke_free":
            return Icons.smoke_free;
          case "smoking_rooms":
            return Icons.smoking_rooms;
          case "sms":
            return Icons.sms;
          case "sms_failed":
            return Icons.sms_failed;
          case "snooze":
            return Icons.snooze;
          case "sort":
            return Icons.sort;
          case "sort_by_alpha":
            return Icons.sort_by_alpha;
          case "spa":
            return Icons.spa;
          case "space_bar":
            return Icons.space_bar;
          case "speaker":
            return Icons.speaker;
          case "speaker_group":
            return Icons.speaker_group;
          case "speaker_notes":
            return Icons.speaker_notes;
          case "speaker_notes_off":
            return Icons.speaker_notes_off;
          case "speaker_phone":
            return Icons.speaker_phone;
          case "spellcheck":
            return Icons.spellcheck;
          case "star":
            return Icons.star;
          case "star_border":
            return Icons.star_border;
          case "star_half":
            return Icons.star_half;
          case "stars":
            return Icons.stars;
          case "stay_current_landscape":
            return Icons.stay_current_landscape;
          case "stay_current_portrait":
            return Icons.stay_current_portrait;
          case "stay_primary_landscape":
            return Icons.stay_primary_landscape;
          case "stay_primary_portrait":
            return Icons.stay_primary_portrait;
          case "stop":
            return Icons.stop;
          case "stop_screen_share":
            return Icons.stop_screen_share;
          case "storage":
            return Icons.storage;
          case "store":
            return Icons.store;
          case "store_mall_directory":
            return Icons.store_mall_directory;
          case "straighten":
            return Icons.straighten;
          case "streetview":
            return Icons.streetview;
          case "strikethrough_s":
            return Icons.strikethrough_s;
          case "style":
            return Icons.style;
          case "subdirectory_arrow_left":
            return Icons.subdirectory_arrow_left;
          case "subdirectory_arrow_right":
            return Icons.subdirectory_arrow_right;
          case "subject":
            return Icons.subject;
          case "subscriptions":
            return Icons.subscriptions;
          case "subtitles":
            return Icons.subtitles;
          case "subway":
            return Icons.subway;
          case "supervised_user_circle":
            return Icons.supervised_user_circle;
          case "supervisor_account":
            return Icons.supervisor_account;
          case "surround_sound":
            return Icons.surround_sound;
          case "swap_calls":
            return Icons.swap_calls;
          case "swap_horiz":
            return Icons.swap_horiz;
          case "swap_horizontal_circle":
            return Icons.swap_horizontal_circle;
          case "swap_vert":
            return Icons.swap_vert;
          case "swap_vertical_circle":
            return Icons.swap_vertical_circle;
          case "switch_camera":
            return Icons.switch_camera;
          case "switch_video":
            return Icons.switch_video;
          case "sync":
            return Icons.sync;
          case "sync_disabled":
            return Icons.sync_disabled;
          case "sync_problem":
            return Icons.sync_problem;
          case "system_update":
            return Icons.system_update;
          case "system_update_alt":
            return Icons.system_update_alt;
          case "tab":
            return Icons.tab;
          case "tab_unselected":
            return Icons.tab_unselected;
          case "table_chart":
            return Icons.table_chart;
          case "tablet":
            return Icons.tablet;
          case "tablet_android":
            return Icons.tablet_android;
          case "tablet_mac":
            return Icons.tablet_mac;
          case "tag_faces":
            return Icons.tag_faces;
          case "tap_and_play":
            return Icons.tap_and_play;
          case "terrain":
            return Icons.terrain;
          case "text_fields":
            return Icons.text_fields;
          case "text_format":
            return Icons.text_format;
          case "text_rotate_up":
            return Icons.text_rotate_up;
          case "text_rotate_vertical":
            return Icons.text_rotate_vertical;
          case "text_rotation_angledown":
            return Icons.text_rotation_angledown;
          case "text_rotation_angleup":
            return Icons.text_rotation_angleup;
          case "text_rotation_down":
            return Icons.text_rotation_down;
          case "text_rotation_none":
            return Icons.text_rotation_none;
          case "textsms":
            return Icons.textsms;
          case "texture":
            return Icons.texture;
          case "theaters":
            return Icons.theaters;
          case "thumb_down":
            return Icons.thumb_down;
          case "thumb_up":
            return Icons.thumb_up;
          case "thumbs_up_down":
            return Icons.thumbs_up_down;
          case "time_to_leave":
            return Icons.time_to_leave;
          case "timelapse":
            return Icons.timelapse;
          case "timeline":
            return Icons.timeline;
          case "timer":
            return Icons.timer;
          case "timer_10":
            return Icons.timer_10;
          case "timer_3":
            return Icons.timer_3;
          case "timer_off":
            return Icons.timer_off;
          case "title":
            return Icons.title;
          case "toc":
            return Icons.toc;
          case "today":
            return Icons.today;
          case "toll":
            return Icons.toll;
          case "tonality":
            return Icons.tonality;
          case "touch_app":
            return Icons.touch_app;
          case "toys":
            return Icons.toys;
          case "track_changes":
            return Icons.track_changes;
          case "traffic":
            return Icons.traffic;
          case "train":
            return Icons.train;
          case "tram":
            return Icons.tram;
          case "transfer_within_a_station":
            return Icons.transfer_within_a_station;
          case "transform":
            return Icons.transform;
          case "transit_enterexit":
            return Icons.transit_enterexit;
          case "translate":
            return Icons.translate;
          case "trending_down":
            return Icons.trending_down;
          case "trending_flat":
            return Icons.trending_flat;
          case "trending_up":
            return Icons.trending_up;
          case "trip_origin":
            return Icons.trip_origin;
          case "tune":
            return Icons.tune;
          case "turned_in":
            return Icons.turned_in;
          case "turned_in_not":
            return Icons.turned_in_not;
          case "tv":
            return Icons.tv;
          case "unarchive":
            return Icons.unarchive;
          case "undo":
            return Icons.undo;
          case "unfold_less":
            return Icons.unfold_less;
          case "unfold_more":
            return Icons.unfold_more;
          case "update":
            return Icons.update;
          case "usb":
            return Icons.usb;
          case "verified_user":
            return Icons.verified_user;
          case "vertical_align_bottom":
            return Icons.vertical_align_bottom;
          case "vertical_align_center":
            return Icons.vertical_align_center;
          case "vertical_align_top":
            return Icons.vertical_align_top;
          case "vibration":
            return Icons.vibration;
          case "video_call":
            return Icons.video_call;
          case "video_label":
            return Icons.video_label;
          case "video_library":
            return Icons.video_library;
          case "videocam":
            return Icons.videocam;
          case "videocam_off":
            return Icons.videocam_off;
          case "videogame_asset":
            return Icons.videogame_asset;
          case "view_agenda":
            return Icons.view_agenda;
          case "view_array":
            return Icons.view_array;
          case "view_carousel":
            return Icons.view_carousel;
          case "view_column":
            return Icons.view_column;
          case "view_comfy":
            return Icons.view_comfy;
          case "view_compact":
            return Icons.view_compact;
          case "view_day":
            return Icons.view_day;
          case "view_headline":
            return Icons.view_headline;
          case "view_list":
            return Icons.view_list;
          case "view_module":
            return Icons.view_module;
          case "view_quilt":
            return Icons.view_quilt;
          case "view_stream":
            return Icons.view_stream;
          case "view_week":
            return Icons.view_week;
          case "vignette":
            return Icons.vignette;
          case "visibility":
            return Icons.visibility;
          case "visibility_off":
            return Icons.visibility_off;
          case "voice_chat":
            return Icons.voice_chat;
          case "voicemail":
            return Icons.voicemail;
          case "volume_down":
            return Icons.volume_down;
          case "volume_mute":
            return Icons.volume_mute;
          case "volume_off":
            return Icons.volume_off;
          case "volume_up":
            return Icons.volume_up;
          case "vpn_key":
            return Icons.vpn_key;
          case "vpn_lock":
            return Icons.vpn_lock;
          case "wallpaper":
            return Icons.wallpaper;
          case "warning":
            return Icons.warning;
          case "watch":
            return Icons.watch;
          case "watch_later":
            return Icons.watch_later;
          case "wb_auto":
            return Icons.wb_auto;
          case "wb_cloudy":
            return Icons.wb_cloudy;
          case "wb_incandescent":
            return Icons.wb_incandescent;
          case "wb_iridescent":
            return Icons.wb_iridescent;
          case "wb_sunny":
            return Icons.wb_sunny;
          case "wc":
            return Icons.wc;
          case "web":
            return Icons.web;
          case "web_asset":
            return Icons.web_asset;
          case "weekend":
            return Icons.weekend;
          case "whatshot":
            return Icons.whatshot;
          case "widgets":
            return Icons.widgets;
          case "wifi":
            return Icons.wifi;
          case "wifi_lock":
            return Icons.wifi_lock;
          case "wifi_tethering":
            return Icons.wifi_tethering;
          case "work":
            return Icons.work;
          case "wrap_text":
            return Icons.wrap_text;
          case "youtube_searched_for":
            return Icons.youtube_searched_for;
          case "zoom_in":
            return Icons.zoom_in;
          case "zoom_out":
            return Icons.zoom_out;
          case "zoom_out_map":
            return Icons.zoom_out_map;
        }
      }
    }
    return defaultValue;
  }

  //****** InputDecoration ******/
  static InputDecoration getInputDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {InputDecoration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return InputDecoration(
          icon: getWidget(context, bo, v, "icon"),
          labelText: getString(context, bo, v, "labelText"),
          labelStyle: getTextStyle(context, bo, v, "labelStyle"),
          helperText: getString(context, bo, v, "helperText"),
          helperStyle: getTextStyle(context, bo, v, "helperStyle"),
          helperMaxLines: getInt(context, bo, v, "helperMaxLines"),
          hintText: getString(context, bo, v, "hintText"),
          hintStyle: getTextStyle(context, bo, v, "hintStyle"),
          hintMaxLines: getInt(context, bo, v, "hintMaxLines"),
          errorText: getString(context, bo, v, "errorText"),
          errorStyle: getTextStyle(context, bo, v, "errorStyle"),
          errorMaxLines: getInt(context, bo, v, "errorMaxLines"),
          floatingLabelBehavior: getFloatingLabelBehavior(context, bo, v, "floatingLabelBehavior", defaultValue: FloatingLabelBehavior.auto),
          isCollapsed: getBool(context, bo, v, "isCollapsed", defaultValue: false),
          isDense: getBool(context, bo, v, "isDense"),
          contentPadding: getEdgeInsets(context, bo, v, "contentPadding"),
          prefix: getWidget(context, bo, v, "prefix"),
          prefixIcon: getWidget(context, bo, v, "prefixIcon"),
          prefixIconConstraints: getBoxConstraints(context, bo, v, "prefixIconConstraints"),
          prefixText: getString(context, bo, v, "prefixText"),
          prefixStyle: getTextStyle(context, bo, v, "prefixStyle"),
          suffix: getWidget(context, bo, v, "suffix"),
          suffixIcon: getWidget(context, bo, v, "suffixIcon"),
          suffixIconConstraints: getBoxConstraints(context, bo, v, "suffixIconConstraints"),
          suffixText: getString(context, bo, v, "suffixText"),
          suffixStyle: getTextStyle(context, bo, v, "suffixStyle"),
          counter: getWidget(context, bo, v, "counter"),
          counterText: getString(context, bo, v, "counterText"),
          counterStyle: getTextStyle(context, bo, v, "counterStyle"),
          filled: getBool(context, bo, v, "filled"),
          fillColor: getColor(context, bo, v, "fillColor"),
          focusColor: getColor(context, bo, v, "focusColor"),
          hoverColor: getColor(context, bo, v, "hoverColor"),
          errorBorder: getInputBorder(context, bo, v, "errorBorder"),
          focusedBorder: getInputBorder(context, bo, v, "focusedBorder"),
          focusedErrorBorder: getInputBorder(context, bo, v, "focusedErrorBorder"),
          disabledBorder: getInputBorder(context, bo, v, "disabledBorder"),
          enabledBorder: getInputBorder(context, bo, v, "enabledBorder"),
          border: getInputBorder(context, bo, v, "border"),
          enabled: getBool(context, bo, v, "enabled", defaultValue: true),
          semanticCounterText: getString(context, bo, v, "semanticCounterText"),
          alignLabelWithHint: getBool(context, bo, v, "alignLabelWithHint"),
        );
      }

      switch (constructorName) {
        case "collapsed":
          return InputDecoration.collapsed(
            hintText: getString(context, bo, v, "hintText"),
            floatingLabelBehavior: getFloatingLabelBehavior(context, bo, v, "floatingLabelBehavior", defaultValue: FloatingLabelBehavior.auto),
            hintStyle: getTextStyle(context, bo, v, "hintStyle"),
            filled: getBool(context, bo, v, "filled", defaultValue: false),
            fillColor: getColor(context, bo, v, "fillColor"),
            focusColor: getColor(context, bo, v, "focusColor"),
            hoverColor: getColor(context, bo, v, "hoverColor"),
            border: getInputBorder(context, bo, v, "border", defaultValue: InputBorder.none),
            enabled: getBool(context, bo, v, "enabled", defaultValue: true),
          );
      }
    }
    return defaultValue;
  }

  //****** InputBorder ******/
  static InputBorder getInputBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {InputBorder defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);

      if (className == "InputBorder") {
        var constructorName = _getConstructorName(v);
        switch (constructorName) {
          case 'none':
            return InputBorder.none;
        }
        return defaultValue;
      }

      switch (className) {
        case 'OutlineInputBorder':
          return OutlineInputBorder(
            borderSide: getBorderSide(context, bo, v, "borderSide", defaultValue: const BorderSide()),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: const BorderRadius.all(Radius.circular(4.0))),
            gapPadding: getDouble(context, bo, v, "gapPadding", defaultValue: 4.0),
          );
        case 'UnderlineInputBorder':
          return UnderlineInputBorder(
            borderSide: getBorderSide(context, bo, v, "borderSide", defaultValue: const BorderSide()),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: const BorderRadius.only(topLeft: Radius.circular(4.0), topRight: Radius.circular(4.0))),
          );
      }
    }

    return defaultValue;
  }

  //****** ImageProvider ******/
  static ImageProvider getImageProvider(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ImageProvider defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'resize':
          return ResizeImage(
            getImageProvider(context, bo, v, "imageProvider"),
            width: getInt(context, bo, v, "width", defaultValue: 1),
            height: getInt(context, bo, v, "height", defaultValue: 1),
            allowUpscaling: getBool(context, bo, v, "allowUpscaling", defaultValue: false),
          );
        case 'file':
          return FileImage(
            getFile(context, bo, v, "file"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'network':
          return NetworkImage(
            getString(context, bo, v, "url"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'memory':
          return MemoryImage(
            getUint8List(context, bo, v, "bytes"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'exactAsset':
          return ExactAssetImage(
            getString(context, bo, v, "imageName"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
            bundle: getAssetBundle(context, bo, v, key),
            package: getString(context, bo, v, "packageName"),
          );
      }
    }

    return defaultValue;
  }

  //****** ImageShader ******/
  static ImageShader getImageShader(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ImageShader defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ImageShader(
        getObject(context, bo, v, "image"),
        getTileMode(context, bo, v, "tmx"),
        getTileMode(context, bo, v, "tmy"),
        getObject(context, bo, v, "matrix4"),
      );
    }
    return defaultValue;
  }

  //****** Interval ******/
  static Interval getInterval(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Interval defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Interval(
        getDouble(context, bo, v, "begin"),
        getDouble(context, bo, v, "end"),
        curve: getCurve(context, bo, v, "curve", defaultValue: Curves.linear),
      );
    }
    return defaultValue;
  }

  //-------------- J -----------------
  //-------------- K -----------------

  //****** Key ******/
  static Key getKey(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Key defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case 'ValueKey':
          return Key(getString(context, bo, v, "value"));
        case 'UniqueKey':
          return UniqueKey();
        case 'GlobalKey':
          return GlobalKey(debugLabel: getString(context, bo, v, "debugLabel"));
        case 'BindKey':
          return getObject(context, bo, map, key);
      }
    }
    return defaultValue;
  }

  //-------------- L -----------------
  //****** List ******/
  static List getList(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    return _getList(map, key);
  }

  //****** ListTileStyle ******/
  static ListTileStyle getListTileStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ListTileStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'list':
          return ListTileStyle.list;
        case 'drawer':
          return ListTileStyle.drawer;
      }
    }
    return defaultValue;
  }

  //****** ListTileControlAffinity ******/
  static ListTileControlAffinity getListTileControlAffinity(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ListTileControlAffinity defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'leading':
          return ListTileControlAffinity.leading;
        case 'platform':
          return ListTileControlAffinity.platform;
        case 'trailing':
          return ListTileControlAffinity.trailing;
      }
    }
    return defaultValue;
  }

  //-------------- M -----------------
  //****** Map ******/
  static Map getMap(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    return _getMap(map, key);
  }

  //****** MaterialTapTargetSize ******/
  static MaterialTapTargetSize getMaterialTapTargetSize(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MaterialTapTargetSize defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'padded':
          return MaterialTapTargetSize.padded;
        case 'shrinkWrap':
          return MaterialTapTargetSize.shrinkWrap;
      }
    }
    return defaultValue;
  }

  //****** MaterialType ******/
  static MaterialType getMaterialType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MaterialType defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'circle':
          return MaterialType.circle;
        case 'button':
          return MaterialType.button;
        case 'canvas':
          return MaterialType.canvas;
        case 'card':
          return MaterialType.card;
        case 'transparency':
          return MaterialType.transparency;
      }
    }
    return defaultValue;
  }

  //****** MainAxisAlignment ******/
  static MainAxisAlignment getMainAxisAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MainAxisAlignment defaultValue}) {
    var v = _getString(map, key);

    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'start':
          return MainAxisAlignment.start;
        case 'end':
          return MainAxisAlignment.end;
        case 'center':
          return MainAxisAlignment.center;
        case 'spaceBetween':
          return MainAxisAlignment.spaceBetween;
        case 'spaceAround':
          return MainAxisAlignment.spaceAround;
        case 'spaceEvenly':
          return MainAxisAlignment.spaceEvenly;
      }
    }
    return defaultValue;
  }

  //****** MainAxisSize ******/
  static MainAxisSize getMainAxisSize(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MainAxisSize defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'min':
          return MainAxisSize.min;
        case 'max':
          return MainAxisSize.max;
      }
    }
    return defaultValue;
  }

  //****** MaterialBannerThemeData ******/
  static MaterialBannerThemeData getMaterialBannerThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MaterialBannerThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return MaterialBannerThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        padding: getEdgeInsets(context, bo, v, "padding"),
        leadingPadding: getEdgeInsets(context, bo, v, "leadingPadding"),
        contentTextStyle: getTextStyle(context, bo, v, "contentTextStyle"),
      );
    }
    return defaultValue;
  }

  //****** Matrix4 ******/
  static Matrix4 getMatrix4(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Matrix4 defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Matrix4(
          getDouble(context, bo, v, "arg0"),
          getDouble(context, bo, v, "arg1"),
          getDouble(context, bo, v, "arg2"),
          getDouble(context, bo, v, "arg3"),
          getDouble(context, bo, v, "arg4"),
          getDouble(context, bo, v, "arg5"),
          getDouble(context, bo, v, "arg6"),
          getDouble(context, bo, v, "arg7"),
          getDouble(context, bo, v, "arg8"),
          getDouble(context, bo, v, "arg9"),
          getDouble(context, bo, v, "arg10"),
          getDouble(context, bo, v, "arg11"),
          getDouble(context, bo, v, "arg12"),
          getDouble(context, bo, v, "arg13"),
          getDouble(context, bo, v, "arg14"),
          getDouble(context, bo, v, "arg15"),
        );
      }

      switch (constructorName) {
        case 'fromList':
          return Matrix4.fromList(getDoubleList(context, bo, v, "values"));
        case 'outer':
          return Matrix4.outer(
            getObject(context, bo, v, "u"),
            getObject(context, bo, v, "v"),
          );
        case 'columns':
          return Matrix4.columns(
            getObject(context, bo, v, "arg0"),
            getObject(context, bo, v, "arg1"),
            getObject(context, bo, v, "arg2"),
            getObject(context, bo, v, "arg3"),
          );
        case 'rotationX':
          return Matrix4.rotationX(
            getDouble(context, bo, v, "radians"),
          );
        case 'rotationY':
          return Matrix4.rotationY(
            getDouble(context, bo, v, "radians"),
          );
        case 'rotationZ':
          return Matrix4.rotationZ(
            getDouble(context, bo, v, "radians"),
          );
        case 'translation':
          return Matrix4.translation(
            getVector3(context, bo, v, "translation"),
          );
        case 'translationValues':
          return Matrix4.translationValues(
            getDouble(context, bo, v, "x"),
            getDouble(context, bo, v, "y"),
            getDouble(context, bo, v, "z"),
          );
        case 'diagonal3':
          return Matrix4.diagonal3(
            getVector3(context, bo, v, "scale"),
          );
        case 'diagonal3Values':
          return Matrix4.diagonal3Values(
            getDouble(context, bo, v, "x"),
            getDouble(context, bo, v, "y"),
            getDouble(context, bo, v, "z"),
          );
        case 'skewX':
          return Matrix4.skewX(
            getDouble(context, bo, v, "alpha"),
          );
        case 'skewY':
          return Matrix4.skewY(
            getDouble(context, bo, v, "beta"),
          );
        case 'skew':
          return Matrix4.skew(
            getDouble(context, bo, v, "alpha"),
            getDouble(context, bo, v, "beta"),
          );
        case 'compose':
          return Matrix4.compose(
            getVector3(context, bo, v, "translation"),
            getQuaternion(context, bo, v, "rotation"),
            getVector3(context, bo, v, "scale"),
          );
        case 'identity':
          return Matrix4.identity();
        case 'zero':
          return Matrix4.zero();
      }
    }

    return defaultValue;
  }

  //****** MaskFilter ******/
  static MaskFilter getMaskFilter(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {MaskFilter defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return MaskFilter.blur(
        getBlurStyle(context, bo, v, "_style"),
        getDouble(context, bo, v, "_sigma"),
      );
    }
    return defaultValue;
  }

  //-------------- N -----------------

  //****** NotchedShape ******/
  static NotchedShape getNotchedShape(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {NotchedShape defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case 'CircularNotchedRectangle':
          return CircularNotchedRectangle();
        case 'AutomaticNotchedShape':
          return AutomaticNotchedShape(
            getShapeBorder(context, bo, v, "host"),
            getShapeBorder(context, bo, v, "guest"),
          );
      }
    }

    return defaultValue;
  }

  //****** NavigationRailLabelType ******/
  static NavigationRailLabelType getNavigationRailLabelType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {NavigationRailLabelType defaultValue}) {
    var v = _getString(map, key);

    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'all':
          return NavigationRailLabelType.all;
        case 'selected':
          return NavigationRailLabelType.selected;
        case 'none':
          return NavigationRailLabelType.none;
      }
    }
    return defaultValue;
  }

  //****** NavigationRailThemeData ******/
  static NavigationRailThemeData getNavigationRailThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {NavigationRailThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return NavigationRailThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        elevation: getDouble(context, bo, v, "elevation"),
        unselectedLabelTextStyle: getTextStyle(context, bo, v, "unselectedLabelTextStyle"),
        selectedLabelTextStyle: getTextStyle(context, bo, v, "selectedLabelTextStyle"),
        unselectedIconTheme: getIconThemeData(context, bo, v, "unselectedIconTheme"),
        selectedIconTheme: getIconThemeData(context, bo, v, "selectedIconTheme"),
        groupAlignment: getDouble(context, bo, v, "groupAlignment"),
        labelType: getNavigationRailLabelType(context, bo, v, "labelType"),
      );
    }
    return defaultValue;
  }

  //-------------- O -----------------
  //****** Overflow ******/
  static Overflow getOverflow(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Overflow defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'visible':
          return Overflow.visible;
        case 'clip':
          return Overflow.clip;
      }
    }
    return defaultValue;
  }

  //****** Offset ******/
  static Offset getOffset(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Offset defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Offset(
          getDouble(context, bo, v, "dx", defaultValue: 0.0),
          getDouble(context, bo, v, "dy", defaultValue: 0.0),
        );
      } else {
        switch (constructorName) {
          case 'infinite':
            return Offset.infinite;
          case 'zero':
            return Offset.zero;
          case 'fromDirection':
            return Offset.fromDirection(getDouble(context, bo, v, "left", defaultValue: 0.0));
        }
      }
    }
    return defaultValue;
  }

  //****** Object ******/
  static dynamic getObject(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //-------------- P -----------------
  //****** PointerChange ******/
  static PointerChange getPointerChange(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PointerChange defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'cancel':
          return PointerChange.cancel;
        case 'add':
          return PointerChange.add;
        case 'remove':
          return PointerChange.remove;
        case 'hover':
          return PointerChange.hover;
        case 'down':
          return PointerChange.down;
        case 'move':
          return PointerChange.move;
        case 'up':
          return PointerChange.up;
      }
    }
    return defaultValue;
  }

  //****** PointerDeviceKind ******/
  static PointerDeviceKind getPointerDeviceKind(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PointerDeviceKind defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'touch':
          return PointerDeviceKind.touch;
        case 'mouse':
          return PointerDeviceKind.mouse;
        case 'stylus':
          return PointerDeviceKind.stylus;
        case 'invertedStylus':
          return PointerDeviceKind.invertedStylus;
        case 'unknown':
          return PointerDeviceKind.unknown;
      }
    }
    return defaultValue;
  }

  //****** PointerSignalKind ******/
  static PointerSignalKind getPointerSignalKind(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PointerSignalKind defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'none':
          return PointerSignalKind.none;
        case 'scroll':
          return PointerSignalKind.scroll;
        case 'unknown':
          return PointerSignalKind.unknown;
      }
    }
    return defaultValue;
  }

  //****** PaintingStyle ******/
  static PaintingStyle getPaintingStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PaintingStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'fill':
          return PaintingStyle.fill;
        case 'stroke':
          return PaintingStyle.stroke;
      }
    }
    return defaultValue;
  }

  //****** PlaceholderAlignment ******/
  static PlaceholderAlignment getPlaceholderAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PlaceholderAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'aboveBaseline':
          return PlaceholderAlignment.aboveBaseline;
        case 'baseline':
          return PlaceholderAlignment.baseline;
        case 'belowBaseline':
          return PlaceholderAlignment.belowBaseline;
        case 'bottom':
          return PlaceholderAlignment.bottom;
        case 'top':
          return PlaceholderAlignment.top;
        case 'middle':
          return PlaceholderAlignment.middle;
      }
    }
    return defaultValue;
  }

  //****** PreferredSizeWidget ******/
  static PreferredSizeWidget getPreferredSizeWidget(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //****** Paint ******/
  static Paint getPaint(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Paint defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      if (className == "Paint") {
        Paint obj = Paint()
          ..blendMode = getBlendMode(context, bo, v, "blendMode")
          ..color = getColor(context, bo, v, "color")
          ..colorFilter = getObject(context, bo, v, "colorFilter")
          ..filterQuality = getFilterQuality(context, bo, v, "filterQuality")
          ..invertColors = getBool(context, bo, v, "invertColors")
          ..isAntiAlias = getBool(context, bo, v, "isAntiAlias")
          ..maskFilter = getObject(context, bo, v, "maskFilter")
          ..shader = getObject(context, bo, v, "shader")
          ..strokeCap = getStrokeCap(context, bo, v, "strokeCap")
          ..strokeJoin = getStrokeJoin(context, bo, v, "strokeJoin")
          ..strokeMiterLimit = getDouble(context, bo, v, "strokeMiterLimit")
          ..strokeWidth = getDouble(context, bo, v, "strokeWidth")
          ..style = getPaintingStyle(context, bo, v, "style");
        return obj;
      }
    }
    return defaultValue;
  }

  //****** PopupMenuThemeData ******/
  static PopupMenuThemeData getPopupMenuThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {PopupMenuThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return PopupMenuThemeData(
        color: getColor(context, bo, v, "color"),
        elevation: getDouble(context, bo, v, "elevation"),
        shape: getShapeBorder(context, bo, v, "shape"),
        textStyle: getTextStyle(context, bo, v, "textStyle"),
      );
    }
    return defaultValue;
  }

  //-------------- Q -----------------
  //****** Quaternion ******/
  static Quaternion getQuaternion(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Quaternion defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Quaternion(
        getDouble(context, bo, v, "x"),
        getDouble(context, bo, v, "y"),
        getDouble(context, bo, v, "z"),
        getDouble(context, bo, v, "w"),
      );
    }
    return defaultValue;
  }

  //-------------- R -----------------
  //****** Rect ******/
  static Rect getRect(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Rect defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(map);
      switch (constructorName) {
        case 'fromCenter':
          return Rect.fromCenter(
            center: getOffset(context, bo, v, "center", defaultValue: Offset.zero),
            width: getDouble(context, bo, v, "width", defaultValue: 0.0),
            height: getDouble(context, bo, v, "height", defaultValue: 0.0),
          );
        case 'fromLTRB':
          return Rect.fromLTRB(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "right", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
          );
        case 'fromLTWH':
          return Rect.fromLTWH(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "width", defaultValue: 0.0),
            getDouble(context, bo, v, "height", defaultValue: 0.0),
          );
        case 'fromCircle':
          return Rect.fromCircle(
            center: getOffset(context, bo, v, "center", defaultValue: Offset.zero),
            radius: getDouble(context, bo, v, "radius", defaultValue: 0.0),
          );
        case 'fromPoints':
          return Rect.fromPoints(
            getOffset(context, bo, v, "a", defaultValue: Offset.zero),
            getOffset(context, bo, v, "b", defaultValue: Offset.zero),
          );
        case 'zero':
          return Rect.zero;
        case 'largest':
          return Rect.largest;
      }
    }

    return defaultValue;
  }

  //****** RelativeRect ******/
  static RelativeRect getRelativeRect(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RelativeRect defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(map);
      switch (constructorName) {
        case 'fromLTRB':
          return RelativeRect.fromLTRB(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "right", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
          );
        case 'fromRect':
          return RelativeRect.fromRect(
            getRect(context, bo, v, "rect"),
            getRect(context, bo, v, "rect1"),
          );
        case 'fromSize':
          return RelativeRect.fromSize(
            getRect(context, bo, v, "rect"),
            getSize(context, bo, v, "container"),
          );
        case 'largest':
          return RelativeRect.fill;
      }
    }

    return defaultValue;
  }

  //****** RRect ******/
  static RRect getRRect(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RRect defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(map);
      switch (constructorName) {
        case 'fromLTRBR':
          return RRect.fromLTRBR(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "right", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
            getRadius(context, bo, v, "radius", defaultValue: Radius.zero),
          );
        case 'fromLTRBXY':
          return RRect.fromLTRBXY(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "right", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
            getDouble(context, bo, v, "radiusX", defaultValue: 0.0),
            getDouble(context, bo, v, "radiusY", defaultValue: 0.0),
          );
        case 'fromRectXY':
          return RRect.fromRectXY(
            getRect(context, bo, v, "rect", defaultValue: Rect.zero),
            getDouble(context, bo, v, "radiusX", defaultValue: 0.0),
            getDouble(context, bo, v, "radiusY", defaultValue: 0.0),
          );
        case 'fromRectAndRadius':
          return RRect.fromRectAndRadius(
            getRect(context, bo, v, "rect", defaultValue: Rect.zero),
            getRadius(context, bo, v, "radius", defaultValue: Radius.zero),
          );
        case 'fromLTRBAndCorners':
          return RRect.fromLTRBAndCorners(
            getDouble(context, bo, v, "left", defaultValue: 0.0),
            getDouble(context, bo, v, "top", defaultValue: 0.0),
            getDouble(context, bo, v, "right", defaultValue: 0.0),
            getDouble(context, bo, v, "bottom", defaultValue: 0.0),
            topLeft: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            topRight: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            bottomRight: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            bottomLeft: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
          );

        case 'fromRectAndCorners':
          return RRect.fromRectAndCorners(
            getRect(context, bo, v, "rect", defaultValue: Rect.zero),
            topLeft: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            topRight: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            bottomRight: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
            bottomLeft: getRadius(context, bo, v, "topLeft", defaultValue: Radius.zero),
          );

        case 'zero':
          return RRect.zero;
      }
    }

    return defaultValue;
  }

  //****** RouteSettings ******/
  static RouteSettings getRouteSettings(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //****** Radius ******/
  static Radius getRadius(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Radius defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'circular':
          return Radius.circular(getDouble(context, bo, v, "radius"));
        case 'elliptical':
          return Radius.elliptical(
            getDouble(context, bo, v, "x"),
            getDouble(context, bo, v, "y"),
          );
        case 'zero':
          return Radius.zero;
      }
    }

    return defaultValue;
  }

  //****** RectTween ******/
  static RectTween getRectTween(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RectTween defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return RectTween(
        begin: getRect(context, bo, v, "begin"),
        end: getRect(context, bo, v, "end"),
      );
    }

    return defaultValue;
  }

  //****** RegExp ******/
  static RegExp getRegExp(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RegExp defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return RegExp(
        getString(context, bo, v, "source"),
        multiLine: getBool(context, bo, v, "multiLine", defaultValue: false),
        caseSensitive: getBool(context, bo, v, "caseSensitive", defaultValue: true),
        unicode: getBool(context, bo, v, "unicode", defaultValue: false),
        dotAll: getBool(context, bo, v, "dotAll", defaultValue: false),
      );
    }

    return defaultValue;
  }

  //****** RSTransform ******/
  static RSTransform getRSTransform(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RSTransform defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return RSTransform(
          getDouble(context, bo, v, "scos"),
          getDouble(context, bo, v, "ssin"),
          getDouble(context, bo, v, "tx"),
          getDouble(context, bo, v, "ty"),
        );
      }

      switch (constructorName) {
        case 'fromComponents':
          return RSTransform.fromComponents(
            rotation: getDouble(context, bo, v, "rotation"),
            scale: getDouble(context, bo, v, "scale"),
            anchorX: getDouble(context, bo, v, "anchorX"),
            anchorY: getDouble(context, bo, v, "anchorY"),
            translateX: getDouble(context, bo, v, "translateX"),
            translateY: getDouble(context, bo, v, "translateY"),
          );
      }
    }

    return defaultValue;
  }

  //****** RenderComparison ******/
  static RenderComparison getRenderComparison(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RenderComparison defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'identical':
          return RenderComparison.identical;
        case 'layout':
          return RenderComparison.layout;
        case 'metadata':
          return RenderComparison.metadata;
        case 'paint':
          return RenderComparison.paint;
      }
    }
    return defaultValue;
  }

  //-------------- S -----------------

  //****** ShowValueIndicator ******/
  static ShowValueIndicator getShowValueIndicator(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ShowValueIndicator defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'always':
          return ShowValueIndicator.always;
        case 'never':
          return ShowValueIndicator.never;
        case 'onlyForContinuous':
          return ShowValueIndicator.onlyForContinuous;
        case 'onlyForDiscrete':
          return ShowValueIndicator.onlyForDiscrete;
      }
    }
    return defaultValue;
  }

  //****** SliderThemeData ******/
  static SliderThemeData getSliderThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SliderThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return SliderThemeData(
        trackHeight: getDouble(context, bo, v, "trackHeight"),
        activeTrackColor: getColor(context, bo, v, "activeTrackColor"),
        inactiveTrackColor: getColor(context, bo, v, "inactiveTrackColor"),
        disabledActiveTrackColor: getColor(context, bo, v, "disabledActiveTrackColor"),
        disabledInactiveTrackColor: getColor(context, bo, v, "disabledInactiveTrackColor"),
        activeTickMarkColor: getColor(context, bo, v, "activeTickMarkColor"),
        inactiveTickMarkColor: getColor(context, bo, v, "inactiveTickMarkColor"),
        disabledActiveTickMarkColor: getColor(context, bo, v, "disabledActiveTickMarkColor"),
        disabledInactiveTickMarkColor: getColor(context, bo, v, "disabledInactiveTickMarkColor"),
        thumbColor: getColor(context, bo, v, "thumbColor"),
        overlappingShapeStrokeColor: getColor(context, bo, v, "overlappingShapeStrokeColor"),
        disabledThumbColor: getColor(context, bo, v, "disabledThumbColor"),
        overlayColor: getColor(context, bo, v, "overlayColor"),
        valueIndicatorColor: getColor(context, bo, v, "valueIndicatorColor"),
        showValueIndicator: getShowValueIndicator(context, bo, v, "showValueIndicator"),
        valueIndicatorTextStyle: getTextStyle(context, bo, v, "valueIndicatorTextStyle"),
        minThumbSeparation: getDouble(context, bo, v, "minThumbSeparation"),
      );
    }
    return defaultValue;
  }

  //****** SnackBarBehavior ******/
  static SnackBarBehavior getSnackBarBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SnackBarBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'fixed':
          return SnackBarBehavior.fixed;
        case 'floating':
          return SnackBarBehavior.floating;
      }
    }
    return defaultValue;
  }

  //****** SnackBarThemeData ******/
  static SnackBarThemeData getSnackBarThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SnackBarThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return SnackBarThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        actionTextColor: getColor(context, bo, v, "actionTextColor"),
        disabledActionTextColor: getColor(context, bo, v, "disabledActionTextColor"),
        contentTextStyle: getTextStyle(context, bo, v, "contentTextStyle"),
        elevation: getDouble(context, bo, v, "elevation"),
        shape: getShapeBorder(context, bo, v, "shape"),
        behavior: getSnackBarBehavior(context, bo, v, "behavior"),
      );
    }
    return defaultValue;
  }

  //****** ShapeBorder ******/
  static ShapeBorder getShapeBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ShapeBorder defaultValue}) {
    if (!_checkMapKey(map, key)) {
      return defaultValue;
    }
    var v = map;
    ShapeBorder o = getOutlinedBorder(context, bo, v, key);
    if (o != null) {
      return o;
    }
    o = getInputBorder(context, bo, v, key);
    if (o != null) {
      return o;
    }
    o = getBorder(context, bo, v, key);
    if (o != null) {
      return o;
    }
    o = getBorderDirectional(context, bo, v, key);
    if (o != null) {
      return o;
    }
    return defaultValue;
  }

  //****** String ******/
  static String getString(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {String defaultValue}) {
    return _getString(map, key) ?? defaultValue;
  }

  //****** String List ******/
  static List<String> getStringList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<String> defaultValue}) {
    var li = _getList(map, key);
    if (li != null) {
      return toListT<String>(li);
    }
    return defaultValue;
  }

  //****** Size ******/
  static Size getSize(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Size defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Size(
          getDouble(context, bo, v, "width", defaultValue: 0.0),
          getDouble(context, bo, v, "height", defaultValue: 0.0),
        );
      }

      switch (constructorName) {
        case 'fromHeight':
          return Size.fromHeight(
            getDouble(context, bo, v, "height", defaultValue: 0.0),
          );
        case 'fromWidth':
          return Size.fromWidth(
            getDouble(context, bo, v, "width", defaultValue: 0.0),
          );
        case 'square':
          return Size.square(
            getDouble(context, bo, v, "dimension", defaultValue: 0.0),
          );
        case 'fromRadius':
          return Size.fromRadius(
            getDouble(context, bo, v, "radius", defaultValue: 0.0),
          );
        case 'zero':
          return Size.zero;

        case 'infinite':
          return Size.infinite;
      }
    }

    return defaultValue;
  }

  //****** SnackBarClosedReason ******/
  static SnackBarClosedReason getSnackBarClosedReason(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SnackBarClosedReason defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'action':
          return SnackBarClosedReason.action;
        case 'dismiss':
          return SnackBarClosedReason.dismiss;
        case 'hide':
          return SnackBarClosedReason.hide;
        case 'remove':
          return SnackBarClosedReason.remove;
        case 'swipe':
          return SnackBarClosedReason.swipe;
        case 'timeout':
          return SnackBarClosedReason.timeout;
      }
    }
    return defaultValue;
  }

  //****** SmartDashesType ******/
  static SmartDashesType getSmartDashesType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SmartDashesType defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'disabled':
          return SmartDashesType.disabled;
        case 'enabled':
          return SmartDashesType.enabled;
      }
    }
    return defaultValue;
  }

  //****** SmartQuotesType ******/
  static SmartQuotesType getSmartQuotesType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SmartQuotesType defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'disabled':
          return SmartQuotesType.disabled;
        case 'enabled':
          return SmartQuotesType.enabled;
      }
    }
    return defaultValue;
  }

  //****** StackFit ******/
  static StackFit getStackFit(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {StackFit defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'loose':
          return StackFit.loose;
        case 'expand':
          return StackFit.expand;
        case 'passthrough':
          return StackFit.passthrough;
      }
    }
    return defaultValue;
  }

  //****** ScrollViewKeyboardDismissBehavior ******/
  static ScrollViewKeyboardDismissBehavior getScrollViewKeyboardDismissBehavior(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ScrollViewKeyboardDismissBehavior defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'manual':
          return ScrollViewKeyboardDismissBehavior.manual;
        case 'onDrag':
          return ScrollViewKeyboardDismissBehavior.onDrag;
      }
    }
    return defaultValue;
  }

  //****** StrokeCap ******/
  static StrokeCap getStrokeCap(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {StrokeCap defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'butt':
          return StrokeCap.butt;
        case 'round':
          return StrokeCap.round;
        case 'square':
          return StrokeCap.square;
      }
    }
    return defaultValue;
  }

  //****** StrokeJoin ******/
  static StrokeJoin getStrokeJoin(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {StrokeJoin defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'miter':
          return StrokeJoin.miter;
        case 'round':
          return StrokeJoin.round;
        case 'bevel':
          return StrokeJoin.bevel;
      }
    }
    return defaultValue;
  }

  //****** StretchMode ******/
  static StretchMode getStretchMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {StretchMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'zoomBackground':
          return StretchMode.zoomBackground;
        case 'blurBackground':
          return StretchMode.blurBackground;
        case 'fadeTitle':
          return StretchMode.fadeTitle;
      }
    }
    return defaultValue;
  }

  //****** ScrollPositionAlignmentPolicy ******/
  static ScrollPositionAlignmentPolicy getScrollPositionAlignmentPolicy(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ScrollPositionAlignmentPolicy defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'explicit':
          return ScrollPositionAlignmentPolicy.explicit;
        case 'keepVisibleAtEnd':
          return ScrollPositionAlignmentPolicy.keepVisibleAtEnd;
        case 'keepVisibleAtStart':
          return ScrollPositionAlignmentPolicy.keepVisibleAtStart;
      }
    }
    return defaultValue;
  }

  //****** ScrollPhysics ******/
  static ScrollPhysics getScrollPhysics(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ScrollPhysics defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case 'ScrollPhysics':
          return ScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
        case 'RangeMaintainingScrollPhysics':
          return RangeMaintainingScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
        case 'BouncingScrollPhysics':
          return BouncingScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
        case 'ClampingScrollPhysics':
          return ClampingScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
        case 'AlwaysScrollableScrollPhysics':
          return AlwaysScrollableScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
        case 'NeverScrollableScrollPhysics':
          return NeverScrollableScrollPhysics(
            parent: getScrollPhysics(context, bo, v, "parent"),
          );
      }
    }
    return defaultValue;
  }

  //****** SpringDescription ******/
  static SpringDescription getSpringDescription(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SpringDescription defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return SpringDescription(
        mass: getDouble(context, bo, v, "mass"),
        stiffness: getDouble(context, bo, v, "stiffness"),
        damping: getDouble(context, bo, v, "damping"),
      );
    }
    return defaultValue;
  }

  //****** StrutStyle ******/
  static StrutStyle getStrutStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {StrutStyle defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return StrutStyle(
        fontFamily: getString(context, bo, v, "fontFamily"),
        fontFamilyFallback: getStringList(context, bo, v, "fontFamilyFallback"),
        fontSize: getDouble(context, bo, v, "fontSize"),
        height: getDouble(context, bo, v, "height"),
        leading: getDouble(context, bo, v, "leading"),
        fontWeight: getFontWeight(context, bo, v, "fontWeight"),
        fontStyle: getFontStyle(context, bo, v, "fontStyle"),
        forceStrutHeight: getBool(context, bo, v, "forceStrutHeight"),
        debugLabel: getString(context, bo, v, "debugLabel"),
        package: getString(context, bo, v, "packageName"),
      );
    }
    return defaultValue;
  }

  //****** SystemUiOverlayStyle ******/
  static SystemUiOverlayStyle getSystemUiOverlayStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {SystemUiOverlayStyle defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return SystemUiOverlayStyle(
          systemNavigationBarColor: getColor(context, bo, v, "systemNavigationBarColor"),
          systemNavigationBarDividerColor: getColor(context, bo, v, "systemNavigationBarDividerColor"),
          systemNavigationBarIconBrightness: getBrightness(context, bo, v, "systemNavigationBarIconBrightness"),
          statusBarColor: getColor(context, bo, v, "statusBarColor"),
          statusBarBrightness: getBrightness(context, bo, v, "statusBarBrightness"),
          statusBarIconBrightness: getBrightness(context, bo, v, "statusBarIconBrightness"),
        );
      }

      switch (constructorName) {
        case 'light':
          return SystemUiOverlayStyle.light;
        case 'dark':
          return SystemUiOverlayStyle.dark;
      }
    }

    return defaultValue;
  }

  //****** Shadow ******/
  static Shadow getShadow(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Shadow defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case 'Shadow':
          return Shadow(
            color: getColor(context, bo, v, "color", defaultValue: const Color(0xFF000000)),
            offset: getOffset(context, bo, v, "offset", defaultValue: Offset.zero),
            blurRadius: getDouble(context, bo, v, "blurRadius", defaultValue: 0.0),
          );
      }
    }
    return defaultValue;
  }

  //****** ScrollbarPainter ******/
  static ScrollbarPainter getScrollbarPainter(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ScrollbarPainter defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      const double _kMinThumbExtent = 18.0;

      return ScrollbarPainter(
        color: getColor(context, bo, v, "color"),
        textDirection: getTextDirection(context, bo, v, "textDirection"),
        thickness: getDouble(context, bo, v, "thickness"),
        fadeoutOpacityAnimation: getAnimationDouble(context, bo, v, "fadeoutOpacityAnimation"),
        padding: getEdgeInsets(context, bo, v, "padding", defaultValue: EdgeInsets.zero),
        mainAxisMargin: getDouble(context, bo, v, "mainAxisMargin", defaultValue: 0.0),
        crossAxisMargin: getDouble(context, bo, v, "crossAxisMargin", defaultValue: 0.0),
        radius: getRadius(context, bo, v, "radius"),
        minLength: getDouble(context, bo, v, "minLength", defaultValue: _kMinThumbExtent),
        minOverscrollLength: getDouble(context, bo, v, "minOverscrollLength"),
      );
    }
    return defaultValue;
  }
  //-------------- T -----------------

  //****** ToggleButtonsThemeData ******/
  static ToggleButtonsThemeData getToggleButtonsThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ToggleButtonsThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ToggleButtonsThemeData(
        textStyle: getTextStyle(context, bo, v, "textStyle"),
        constraints: getBoxConstraints(context, bo, v, "constraints"),
        color: getColor(context, bo, v, "color"),
        selectedColor: getColor(context, bo, v, "selectedColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        fillColor: getColor(context, bo, v, "fillColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        highlightColor: getColor(context, bo, v, "highlightColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        borderColor: getColor(context, bo, v, "borderColor"),
        selectedBorderColor: getColor(context, bo, v, "selectedBorderColor"),
        disabledBorderColor: getColor(context, bo, v, "disabledBorderColor"),
        borderRadius: getBorderRadius(context, bo, v, "borderRadius"),
        borderWidth: getDouble(context, bo, v, "borderWidth"),
      );
    }
    return defaultValue;
  }

  //****** ThemeData ******/
  static ThemeData getThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ThemeData(
        brightness: getBrightness(context, bo, v, "brightness"),
        visualDensity: getVisualDensity(context, bo, v, "visualDensity"),
        primaryColor: getColor(context, bo, v, "primaryColor"),
        primaryColorBrightness: getBrightness(context, bo, v, "primaryColorBrightness"),
        primaryColorLight: getColor(context, bo, v, "primaryColorLight"),
        primaryColorDark: getColor(context, bo, v, "primaryColorDark"),
        accentColor: getColor(context, bo, v, "accentColor"),
        accentColorBrightness: getBrightness(context, bo, v, "accentColorBrightness"),
        canvasColor: getColor(context, bo, v, "canvasColor"),
        shadowColor: getColor(context, bo, v, "shadowColor"),
        scaffoldBackgroundColor: getColor(context, bo, v, "scaffoldBackgroundColor"),
        bottomAppBarColor: getColor(context, bo, v, "bottomAppBarColor"),
        cardColor: getColor(context, bo, v, "cardColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        dividerColor: getColor(context, bo, v, "dividerColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        highlightColor: getColor(context, bo, v, "highlightColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        selectedRowColor: getColor(context, bo, v, "selectedRowColor"),
        unselectedWidgetColor: getColor(context, bo, v, "unselectedWidgetColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        buttonColor: getColor(context, bo, v, "buttonColor"),
        buttonTheme: getButtonThemeData(context, bo, v, "buttonTheme"),
        toggleButtonsTheme: getToggleButtonsThemeData(context, bo, v, "toggleButtonsTheme"),
        secondaryHeaderColor: getColor(context, bo, v, "secondaryHeaderColor"),
        textSelectionColor: getColor(context, bo, v, "textSelectionColor"),
        cursorColor: getColor(context, bo, v, "cursorColor"),
        textSelectionHandleColor: getColor(context, bo, v, "textSelectionHandleColor"),
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        dialogBackgroundColor: getColor(context, bo, v, "dialogBackgroundColor"),
        indicatorColor: getColor(context, bo, v, "indicatorColor"),
        hintColor: getColor(context, bo, v, "hintColor"),
        errorColor: getColor(context, bo, v, "errorColor"),
        toggleableActiveColor: getColor(context, bo, v, "toggleableActiveColor"),
        fontFamily: getString(context, bo, v, "fontFamily"),
        textTheme: getTextTheme(context, bo, v, "textTheme"),
        primaryTextTheme: getTextTheme(context, bo, v, "primaryTextTheme"),
        accentTextTheme: getTextTheme(context, bo, v, "accentTextTheme"),
        inputDecorationTheme: getInputDecorationTheme(context, bo, v, "inputDecorationTheme"),
        iconTheme: getIconThemeData(context, bo, v, "iconTheme"),
        primaryIconTheme: getIconThemeData(context, bo, v, "primaryIconTheme"),
        accentIconTheme: getIconThemeData(context, bo, v, "accentIconTheme"),
        sliderTheme: getSliderThemeData(context, bo, v, "sliderTheme"),
        tabBarTheme: getTabBarTheme(context, bo, v, "tabBarTheme"),
        tooltipTheme: getTooltipThemeData(context, bo, v, "tooltipTheme"),
        cardTheme: getCardTheme(context, bo, v, "chipTheme"),
        chipTheme: getChipThemeData(context, bo, v, "chipTheme"),
        platform: getTargetPlatform(context, bo, v, "platform"),
        materialTapTargetSize: getMaterialTapTargetSize(context, bo, v, "materialTapTargetSize"),
        applyElevationOverlayColor: getBool(context, bo, v, "applyElevationOverlayColor"),
        appBarTheme: getAppBarTheme(context, bo, v, "appBarTheme"),
        bottomAppBarTheme: getBottomAppBarTheme(context, bo, v, "bottomAppBarTheme"),
        colorScheme: getColorScheme(context, bo, v, "colorScheme"),
        dialogTheme: getDialogTheme(context, bo, v, "dialogTheme"),
        floatingActionButtonTheme: getFloatingActionButtonThemeData(context, bo, v, "floatingActionButtonTheme"),
        navigationRailTheme: getNavigationRailThemeData(context, bo, v, "navigationRailTheme"),
        cupertinoOverrideTheme: getCupertinoThemeData(context, bo, v, "cupertinoOverrideTheme"),
        snackBarTheme: getSnackBarThemeData(context, bo, v, "snackBarTheme"),
        bottomSheetTheme: getBottomSheetThemeData(context, bo, v, "bottomSheetTheme"),
        popupMenuTheme: getPopupMenuThemeData(context, bo, v, "popupMenuTheme"),
        bannerTheme: getMaterialBannerThemeData(context, bo, v, "bannerTheme"),
        dividerTheme: getDividerThemeData(context, bo, v, "dividerTheme"),
        buttonBarTheme: getButtonBarThemeData(context, bo, v, "buttonBarTheme"),
        bottomNavigationBarTheme: getBottomNavigationBarThemeData(context, bo, v, "bottomNavigationBarTheme"),
        timePickerTheme: getTimePickerThemeData(context, bo, v, "timePickerTheme"),
        textSelectionTheme: getTextSelectionThemeData(context, bo, v, "textSelectionTheme"),
        dataTableTheme: getDataTableThemeData(context, bo, v, "dataTableTheme"),
        fixTextFieldOutlineLabel: getBool(context, bo, v, "fixTextFieldOutlineLabel"),
        useTextSelectionTheme: getBool(context, bo, v, "useTextSelectionTheme"),
      );
    }
    return defaultValue;
  }

  //****** TabBarTheme ******/
  static TabBarTheme getTabBarTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TabBarTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TabBarTheme(
        indicator: getDecoration(context, bo, v, "indicator"),
        indicatorSize: getTabBarIndicatorSize(context, bo, v, "indicatorSize"),
        labelColor: getColor(context, bo, v, "labelColor"),
        labelPadding: getEdgeInsets(context, bo, v, "labelPadding"),
        labelStyle: getTextStyle(context, bo, v, "labelStyle"),
        unselectedLabelColor: getColor(context, bo, v, "unselectedLabelColor"),
        unselectedLabelStyle: getTextStyle(context, bo, v, "unselectedLabelStyle"),
      );
    }
    return defaultValue;
  }

  //****** TextSelectionThemeData ******/
  static TextSelectionThemeData getTextSelectionThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextSelectionThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TextSelectionThemeData(
        cursorColor: getColor(context, bo, v, "cursorColor"),
        selectionColor: getColor(context, bo, v, "selectionColor"),
        selectionHandleColor: getColor(context, bo, v, "selectionHandleColor"),
      );
    }
    return defaultValue;
  }

  //****** TimePickerThemeData ******/
  static TimePickerThemeData getTimePickerThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TimePickerThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TimePickerThemeData(
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        hourMinuteTextColor: getColor(context, bo, v, "hourMinuteTextColor"),
        hourMinuteColor: getColor(context, bo, v, "hourMinuteColor"),
        dayPeriodTextColor: getColor(context, bo, v, "dayPeriodTextColor"),
        dayPeriodColor: getColor(context, bo, v, "dayPeriodColor"),
        dialHandColor: getColor(context, bo, v, "dialHandColor"),
        dialBackgroundColor: getColor(context, bo, v, "dialBackgroundColor"),
        dialTextColor: getColor(context, bo, v, "dialTextColor"),
        entryModeIconColor: getColor(context, bo, v, "entryModeIconColor"),
        hourMinuteTextStyle: getTextStyle(context, bo, v, "hourMinuteTextStyle"),
        dayPeriodTextStyle: getTextStyle(context, bo, v, "dayPeriodTextStyle"),
        helpTextStyle: getTextStyle(context, bo, v, "helpTextStyle"),
        shape: getShapeBorder(context, bo, v, "shape"),
        hourMinuteShape: getShapeBorder(context, bo, v, "hourMinuteShape"),
        dayPeriodShape: getShapeBorder(context, bo, v, "dayPeriodShape"),
        dayPeriodBorderSide: getBorderSide(context, bo, v, "dayPeriodBorderSide"),
        inputDecorationTheme: getInputDecorationTheme(context, bo, v, "inputDecorationTheme"),
      );
    }
    return defaultValue;
  }

  //****** TooltipThemeData ******/
  static TooltipThemeData getTooltipThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TooltipThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TooltipThemeData(
        height: getDouble(context, bo, v, "height"),
        padding: getEdgeInsets(context, bo, v, "padding"),
        margin: getEdgeInsets(context, bo, v, "margin"),
        verticalOffset: getDouble(context, bo, v, "verticalOffset"),
        preferBelow: getBool(context, bo, v, "preferBelow"),
        excludeFromSemantics: getBool(context, bo, v, "excludeFromSemantics"),
        decoration: getDecoration(context, bo, v, "decoration"),
        textStyle: getTextStyle(context, bo, v, "textStyle"),
        waitDuration: getDuration(context, bo, v, "waitDuration"),
        showDuration: getDuration(context, bo, v, "showDuration"),
      );
    }
    return defaultValue;
  }

  //****** TextTheme ******/
  static TextTheme getTextTheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextTheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TextTheme(
        headline1: getTextStyle(context, bo, v, "headline1"),
        headline2: getTextStyle(context, bo, v, "headline2"),
        headline3: getTextStyle(context, bo, v, "headline3"),
        headline4: getTextStyle(context, bo, v, "headline4"),
        headline5: getTextStyle(context, bo, v, "headline5"),
        headline6: getTextStyle(context, bo, v, "headline6"),
        subtitle1: getTextStyle(context, bo, v, "subtitle1"),
        subtitle2: getTextStyle(context, bo, v, "subtitle2"),
        bodyText1: getTextStyle(context, bo, v, "bodyText1"),
        bodyText2: getTextStyle(context, bo, v, "bodyText2"),
        caption: getTextStyle(context, bo, v, "caption"),
        button: getTextStyle(context, bo, v, "button"),
        overline: getTextStyle(context, bo, v, "overline"),
      );
    }
    return defaultValue;
  }

  //****** ToolbarOptions ******/
  static ToolbarOptions getToolbarOptions(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ToolbarOptions defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ToolbarOptions(
        copy: XSJSParse.getBool(context, bo, v, "copy", defaultValue: false),
        cut: XSJSParse.getBool(context, bo, v, "cut", defaultValue: false),
        paste: XSJSParse.getBool(context, bo, v, "paste", defaultValue: false),
        selectAll: XSJSParse.getBool(context, bo, v, "selectAll", defaultValue: false),
      );
    }
    return defaultValue;
  }

  //****** TextAlignVertical ******/
  static TextAlignVertical getTextAlignVertical(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextAlignVertical defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TextAlignVertical(
        y: getDouble(context, bo, v, "y", defaultValue: 0.0),
      );
    }
    return defaultValue;
  }

  //****** TextInputType ******/
  static TextInputType getTextInputType(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextInputType defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return TextInputType.text;
      }

      switch (constructorName) {
        case 'numberWithOptions':
          return TextInputType.numberWithOptions(
            signed: getBool(context, bo, v, "signed"),
            decimal: getBool(context, bo, v, "decimal"),
          );

        case 'text':
          return TextInputType.text;
        case 'multiline':
          return TextInputType.multiline;
        case 'number':
          return TextInputType.number;
        case 'phone':
          return TextInputType.phone;
        case 'datetime':
          return TextInputType.datetime;
        case 'emailAddress':
          return TextInputType.emailAddress;
        case 'url':
          return TextInputType.url;
      }
    }

    return defaultValue;
  }

  //****** TextDirection ******/
  static TextDirection getTextDirection(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextDirection defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'ltr':
          return TextDirection.ltr;
        case 'rtl':
          return TextDirection.rtl;
      }
    }
    return defaultValue;
  }

  //****** TextBaseline ******/
  static TextBaseline getTextBaseline(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextBaseline defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'alphabetic':
          return TextBaseline.alphabetic;
        case 'ideographic':
          return TextBaseline.ideographic;
      }
    }
    return defaultValue;
  }

  //****** TableCellVerticalAlignment ******/
  static TableCellVerticalAlignment getTableCellVerticalAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TableCellVerticalAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'top':
          return TableCellVerticalAlignment.top;
        case 'middle':
          return TableCellVerticalAlignment.middle;
        case 'bottom':
          return TableCellVerticalAlignment.bottom;
        case 'baseline':
          return TableCellVerticalAlignment.baseline;
        case 'fill':
          return TableCellVerticalAlignment.fill;
      }
    }
    return defaultValue;
  }

  //****** TabBarIndicatorSize ******/
  static TabBarIndicatorSize getTabBarIndicatorSize(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TabBarIndicatorSize defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'label':
          return TabBarIndicatorSize.label;
        case 'tab':
          return TabBarIndicatorSize.tab;
      }
    }
    return defaultValue;
  }

  //****** TextCapitalization ******/
  static TextCapitalization getTextCapitalization(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextCapitalization defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'words':
          return TextCapitalization.words;
        case 'sentences':
          return TextCapitalization.sentences;
        case 'characters':
          return TextCapitalization.characters;
        case 'none':
          return TextCapitalization.none;
      }
    }
    return defaultValue;
  }

  //****** TileMode ******/
  static TileMode getTileMode(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TileMode defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'clamp':
          return TileMode.clamp;
        case 'repeated':
          return TileMode.repeated;
        case 'mirror':
          return TileMode.mirror;
      }
    }
    return defaultValue;
  }

  //****** TargetPlatform ******/
  static TargetPlatform getTargetPlatform(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TargetPlatform defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'android':
          return TargetPlatform.android;
        case 'fuchsia':
          return TargetPlatform.fuchsia;
        case 'iOS':
          return TargetPlatform.iOS;
      }
    }
    return defaultValue;
  }

  //****** TextDecoration ******/
  static TextDecoration getTextDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextDecoration defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'none':
          return TextDecoration.none;
        case 'underline':
          return TextDecoration.underline;
        case 'overline':
          return TextDecoration.overline;
        case 'lineThrough':
          return TextDecoration.lineThrough;
      }
    }
    return defaultValue;
  }

  //****** TextOverflow ******/
  static TextOverflow getTextOverflow(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextOverflow defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'clip':
          return TextOverflow.clip;
        case 'fade':
          return TextOverflow.fade;
        case 'ellipsis':
          return TextOverflow.ellipsis;
      }
    }
    return defaultValue;
  }

  //****** TextWidthBasis ******/
  static TextWidthBasis getTextWidthBasis(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextWidthBasis defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'parent':
          return TextWidthBasis.parent;
        case 'longestLine':
          return TextWidthBasis.longestLine;
      }
    }
    return defaultValue;
  }

  //****** TextAlign ******/
  static TextAlign getTextAlign(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextAlign defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'left':
          return TextAlign.left;
        case 'right':
          return TextAlign.right;
        case 'center':
          return TextAlign.center;
        case 'justify':
          return TextAlign.justify;
        case 'start':
          return TextAlign.start;
        case 'end':
          return TextAlign.end;
      }
    }
    return defaultValue;
  }

  //****** TextDecorationStyle ******/
  static TextDecorationStyle getTextDecorationStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextDecorationStyle defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'solid':
          return TextDecorationStyle.solid;
        case 'double':
          return TextDecorationStyle.double;
        case 'dotted':
          return TextDecorationStyle.dotted;
        case 'dashed':
          return TextDecorationStyle.dashed;
        case 'wavy':
          return TextDecorationStyle.wavy;
      }
    }
    return defaultValue;
  }

  //****** TextInputAction ******/
  static TextInputAction getTextInputAction(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextInputAction defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'none':
          return TextInputAction.none;
        case 'unspecified':
          return TextInputAction.unspecified;
        case 'done':
          return TextInputAction.done;
        case 'go':
          return TextInputAction.go;
        case 'search':
          return TextInputAction.search;
        case 'send':
          return TextInputAction.send;
        case 'next':
          return TextInputAction.next;
        case 'previous':
          return TextInputAction.previous;
        case 'continueAction':
          return TextInputAction.continueAction;
        case 'join':
          return TextInputAction.join;
        case 'route':
          return TextInputAction.route;
        case 'emergencyCall':
          return TextInputAction.emergencyCall;
        case 'newline':
          return TextInputAction.newline;
      }
    }
    return defaultValue;
  }

  //****** TextStyle ******/
  static TextStyle getTextStyleNoKey(BuildContext context, XSJsonBuildOwner bo, Map map, {TextStyle defaultValue}) {
    var v = map;
    if (v != null) {
      return TextStyle(
        inherit: getBool(context, bo, v, "inherit", defaultValue: true),
        color: getColor(context, bo, v, "color"),
        backgroundColor: getColor(context, bo, v, "backgroundColor"),
        fontSize: getDouble(context, bo, v, "fontSize"),
        fontWeight: getFontWeight(context, bo, v, "fontWeight"),
        fontStyle: getFontStyle(context, bo, v, "fontStyle"),
        letterSpacing: getDouble(context, bo, v, "letterSpacing"),
        wordSpacing: getDouble(context, bo, v, "wordSpacing"),
        textBaseline: getTextBaseline(context, bo, v, "textBaseline"),
        height: getDouble(context, bo, v, "height"),
        foreground: getPaint(context, bo, v, "foreground"),
        background: getPaint(context, bo, v, "background"),
        //shadows: toListT<ui.Shadow>(getKey(context, bo, v, "shadows"])),
        decoration: getTextDecoration(context, bo, v, "decoration"),
        decorationColor: getColor(context, bo, v, "decorationColor"),
        decorationStyle: getTextDecorationStyle(context, bo, v, "decorationStyle"),
        decorationThickness: getDouble(context, bo, v, "decorationThickness"),
        debugLabel: getString(context, bo, v, "debugLabel"),
        fontFamily: getString(context, bo, v, "fontFamily"),
        package: getString(context, bo, v, "packageName"),
      );
    }
    return defaultValue;
  }

  static TextStyle getTextStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextStyle defaultValue}) {
    return getTextStyleNoKey(context, bo, _getMap(map, key), defaultValue: defaultValue);
  }

  //****** TableBorder ******/
  static TableBorder getTableBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return TableBorder(
          top: getBorderSide(context, bo, v, "top", defaultValue: BorderSide.none),
          right: getBorderSide(context, bo, v, "right", defaultValue: BorderSide.none),
          bottom: getBorderSide(context, bo, v, "bottom", defaultValue: BorderSide.none),
          left: getBorderSide(context, bo, v, "left", defaultValue: BorderSide.none),
          horizontalInside: getBorderSide(context, bo, v, "horizontalInside", defaultValue: BorderSide.none),
          verticalInside: getBorderSide(context, bo, v, "verticalInside", defaultValue: BorderSide.none),
        );
      }

      switch (constructorName) {
        case 'all':
          return TableBorder.all(
            color: getColor(context, bo, v, "color", defaultValue: const Color(0xFF000000)),
            width: getDouble(context, bo, v, "width", defaultValue: 1.0),
            style: getBorderStyle(context, bo, v, "style", defaultValue: BorderStyle.solid),
          );
        case 'symmetric':
          return TableBorder.symmetric(
            inside: getBorderSide(context, bo, v, "inside", defaultValue: BorderSide.none),
            outside: getBorderSide(context, bo, v, "outside", defaultValue: BorderSide.none),
          );
      }
    }

    return defaultValue;
  }

  //****** TableColumnWidth ******/
  static TableColumnWidth getTableColumnWidth(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      switch (className) {
        case 'IntrinsicColumnWidth':
          return IntrinsicColumnWidth(flex: getDouble(context, bo, v, "flex"));
        case 'FixedColumnWidth':
          return FixedColumnWidth(getDouble(context, bo, v, "value"));
        case 'FractionColumnWidth':
          return FractionColumnWidth(getDouble(context, bo, v, "value"));
        case 'FlexColumnWidth':
          return FlexColumnWidth(getDouble(context, bo, v, "value", defaultValue: 1.0));
        case 'MaxColumnWidth':
          return MaxColumnWidth(getTableColumnWidth(context, bo, v, "a"), getTableColumnWidth(context, bo, v, "b"));
        case 'MinColumnWidth':
          return MinColumnWidth(getTableColumnWidth(context, bo, v, "a"), getTableColumnWidth(context, bo, v, "b"));
      }
    }
    return defaultValue;
  }

  //****** Tween ******/
  static Tween getTween(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Tween defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return Tween(
        begin: getDouble(context, bo, v, "begin"),
        end: getDouble(context, bo, v, "end"),
      );
    }
    return defaultValue;
  }

  //****** TextInputFormatter ******/
  static List<TextInputFormatter> getTextInputFormatterList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {List<TextInputFormatter> defaultValue}) {
    var list = _getList(map, key);
    if (list != null && list.length > 0) {
      List<TextInputFormatter> result = List<TextInputFormatter>();
      for (var v in list) {
        if (v != null) {
          var className = _getClassName(v);
          if (className != null && className.isNotEmpty) {
            var constructorName = _getConstructorName(v);
            if (className == "LengthLimitingTextInputFormatter") {
              result.add(LengthLimitingTextInputFormatter(XSJSParse.getInt(context, bo, v, "maxLength")));
            } else if (className == "FilteringTextInputFormatter") {
              if (constructorName == null || constructorName.isEmpty) {
                result.add(FilteringTextInputFormatter(
                  XSJSParse.getRegExp(context, bo, v, "filterPattern"),
                  allow: XSJSParse.getBool(context, bo, v, "allow"),
                  replacementString: XSJSParse.getString(context, bo, v, "replacementString"),
                ));
              } else {
                switch (constructorName) {
                  case 'singleLineFormatter':
                    result.add(FilteringTextInputFormatter.singleLineFormatter);
                    break;
                  case 'digitsOnly':
                    result.add(FilteringTextInputFormatter.digitsOnly);
                    break;
                }
              }
            } else if (className == "MaskTextInputFormatter") {
              result.add(MaskTextInputFormatter(
                mask: XSJSParse.getString(context, bo, v, "mask"),
                filter: XSJSParse.getStringRegExpMap(context, bo, v, "filter"),
                initialText: XSJSParse.getString(context, bo, v, "initialText"),
              ));
            }
          }
        }
      }

      return result;
    }
    return defaultValue;
  }

  //****** Map<string,RegExp> ******/
  static Map<String, RegExp> getStringRegExpMap(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Map<String, RegExp> defaultValue}) {
    if (map != null && map.keys.length > 0) {
      Map<String, RegExp> result = Map<String, RegExp>();
      for (var m in map.keys) {
        if (m != null) {
          result.addAll({
            m: getRegExp(context, bo, map, m)
          });
        }
      }
      return result;
    }
    return defaultValue;
  }

  //-------------- U -----------------
  //****** Uri ******/
  static Uri getUri(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Uri defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Uri(
          scheme: getString(context, bo, v, "scheme"),
          fragment: getString(context, bo, v, "fragment"),
          userInfo: getString(context, bo, v, "userInfo"),
          host: getString(context, bo, v, "host"),
          port: getInt(context, bo, v, "port"),
          path: getString(context, bo, v, "path"),
          query: getString(context, bo, v, "query"),
          //queryParameters:
        );
      }
    }

    return defaultValue;
  }

  //****** Uint8List ******/
  static Uint8List getUint8List(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Uint8List defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Uint8List(getInt(context, bo, v, "length"));
      }

      switch (constructorName) {
        case 'fromList':
          return Uint8List.fromList(getIntList(context, bo, v, "elements"));
        case 'view':
          return Uint8List.view(
            getObject(context, bo, v, "buffer"),
            getInt(context, bo, v, "offsetInBytes", defaultValue: 0),
            getInt(context, bo, v, "length"),
          );
      }
    }

    return defaultValue;
  }

  //-------------- V -----------------
  //****** VerticalDirection ******/
  static VerticalDirection getVerticalDirection(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {VerticalDirection defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'up':
          return VerticalDirection.up;
        case 'down':
          return VerticalDirection.down;
      }
    }
    return defaultValue;
  }

  //****** Vector4 ******/
  static Vector4 getVector4(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Vector4 defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      var constructorName = _getConstructorName(v);
      if (className == "Vector4") {
        if (constructorName == null || constructorName.isEmpty) {
          return Vector4(
            getDouble(context, bo, v, "x"),
            getDouble(context, bo, v, "y"),
            getDouble(context, bo, v, "z"),
            getDouble(context, bo, v, "w"),
          );
        }
        switch (constructorName) {
          case 'array':
            return Vector4.array(
              getDoubleList(context, bo, v, "array"),
              getInt(context, bo, v, "offset", defaultValue: 0),
            );
          case 'zero':
            return Vector4.zero();
          case 'all':
            return Vector4.all(getDouble(context, bo, v, "value"));
          case 'random':
            return Vector4.random();
          case 'identity':
            return Vector4.identity();
        }
      }
    }
    return defaultValue;
  }

  //****** Vector3 ******/
  static Vector3 getVector3(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Vector3 defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      var constructorName = _getConstructorName(v);
      if (className == "Vector3") {
        if (constructorName == null || constructorName.isEmpty) {
          return Vector3(
            getDouble(context, bo, v, "x"),
            getDouble(context, bo, v, "y"),
            getDouble(context, bo, v, "z"),
          );
        }
        switch (constructorName) {
          case 'array':
            return Vector3.array(
              getList(context, bo, v, "array"),
              getInt(context, bo, v, "offset", defaultValue: 0),
            );
          case 'zero':
            return Vector3.zero();
          case 'all':
            return Vector3.all(getDouble(context, bo, v, "value"));
          case 'random':
            return Vector3.random();
        }
      }
    }
    return defaultValue;
  }

  //****** visualDensity ******/
  static VisualDensity getVisualDensity(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {VisualDensity defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      var constructorName = _getConstructorName(v);
      if (className == "VisualDensity") {
        if (constructorName == null || constructorName.isEmpty) {
          return VisualDensity(
            horizontal: getDouble(context, bo, v, "horizontal", defaultValue: 0.0),
            vertical: getDouble(context, bo, v, "vertical", defaultValue: 0.0),
          );
        }
        switch (constructorName) {
          case 'comfortable':
            return VisualDensity.comfortable;
          case 'compact':
            return VisualDensity.compact;
          case 'standard':
            return VisualDensity.standard;
        }
      }
    }
    return defaultValue;
  }

  //****** Velocity ******/
  static Velocity getVelocity(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Velocity defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return Velocity(pixelsPerSecond: getOffset(context, bo, v, "pixelsPerSecond"));
      }
      switch (constructorName) {
        case 'zero':
          return Velocity.zero;
      }
    }

    return defaultValue;
  }

  //****** VoidCallback ******/
  static VoidCallback getVoidCallback(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    var v = _getString(map, key);
    if (v == null || v.isEmpty) {
      return null;
    }

    VoidCallback cb = () {
      bo.eventCallback(v);
    };
    return cb;
  }

  //****** Fature<Void> ******/
  static dynamic getFatureVoidCallback(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    var v = _getString(map, key);
    if (v == null || v.isEmpty) {
      return null;
    }

    return () async {
      bo.eventCallback(v);
    };
  }

  //****** ValueChanged<T> ******/
  static ValueChanged<T> getValueChanged<T>(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    var eventCallbackID = _getString(map, key);
    if (eventCallbackID == null) {
      return null;
    }

    ValueChanged<T> cb = (T b) {
      bo.eventCallback(eventCallbackID, p: b);
    };

    return cb;
  }

  //-------------- W -----------------
  //****** WrapAlignment ******/
  static WrapAlignment getWrapAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {WrapAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "start":
          return WrapAlignment.start;
        case "end":
          return WrapAlignment.end;
        case "center":
          return WrapAlignment.center;
        case "spaceBetween":
          return WrapAlignment.spaceBetween;
        case "spaceAround":
          return WrapAlignment.spaceAround;
        case "spaceEvenly":
          return WrapAlignment.spaceEvenly;
      }
    }
    return defaultValue;
  }

  //****** WrapCrossAlignment ******/
  static WrapCrossAlignment getWrapCrossAlignment(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {WrapCrossAlignment defaultValue}) {
    var v = _getString(map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case "start":
          return WrapCrossAlignment.start;
        case "end":
          return WrapCrossAlignment.end;
        case "center":
          return WrapCrossAlignment.center;
      }
    }
    return defaultValue;
  }

  //****** Widget ******/
  static Widget getWidget(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Widget defaultValue}) {
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //****** List<Widget> ******/
  static List<Widget> getWidgetList(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
    var list = _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
    if (list == null) {
      return null;
    }
    return List<Widget>.from(list);
  }

  //****** List<Widget> Index ******/
  static Widget getWidgetListIndex(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Widget defaultValue, int index = 0}) {
    var li = _getList(map, key);
    if (li != null && li.length > index) {
      return _getClassObj(li[index], buildOwner: bo, defaultValue: defaultValue, context: context);
    }
    return defaultValue;
  }

  //-------------- X -----------------
  //-------------- Y -----------------
  //-------------- Z -----------------

}
