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
import 'dart:typed_data';
import 'package:vector_math/vector_math_64.dart' hide Colors;
import 'dart:math' as math;
import 'dart:io';
import 'xs_build_owner.dart';
import 'xs_json_to_dart.dart';

//****** 常用解析
class XSJSParse {
  //-------------- Basic -----------------
  //****** String ******/
  static String _getString(Map map, String key) {
    try {
      if (map == null) return null;
      if (key == null || key.isEmpty) return null;
      if (!map.containsKey(key)) return null;
      var v = map[key];
      if (v is String) return v;
      return v.toString();
    } catch (e) {}
    return null;
  }

  //****** double ******/
  static double _getDouble(Map map, String key) {
    try {
      if (map == null) return null;
      if (key == null || key.isEmpty) return null;
      if (!map.containsKey(key)) return null;
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
      if (map == null) return null;
      if (key == null || key.isEmpty) return null;
      if (!map.containsKey(key)) return null;
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
      if (map == null) return null;
      if (key == null || key.isEmpty) return null;
      if (!map.containsKey(key)) return null;
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
      if (map == null) return null;
      if (key == null || key.isEmpty) return null;
      if (!map.containsKey(key)) return null;
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
      var constructorName = _getConstructorName(v);
      if (constructorName != null && constructorName.isNotEmpty) {
        switch (constructorName) {
          case 'network':
            return NetworkAssetBundle(getUri(context, bo, v, "baseUrl"));
          case 'platform':
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
      return BorderDirectional(
        top: getBorderSide(context, bo, v, "top", defaultValue: BorderSide.none),
        start: getBorderSide(context, bo, v, "start", defaultValue: BorderSide.none),
        end: getBorderSide(context, bo, v, "end", defaultValue: BorderSide.none),
        bottom: getBorderSide(context, bo, v, "bottom", defaultValue: BorderSide.none),
      );
    }
    return defaultValue;
  }

  //****** bool ******/
  static bool getBool(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {bool defaultValue}) {
    return _getBool(map, key) ?? defaultValue;
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
        message: getString(context, bo, map, "message"),
        textDirection: getTextDirection(context, bo, map, "textDirection"),
        location: getBannerLocation(context, bo, map, "location"),
        layoutDirection: getTextDirection(context, bo, map, "layoutDirection"),
        color: getColor(context, bo, v, "color", defaultValue: _kColor),
        textStyle: getTextStyle(context, bo, map, "textStyle", defaultValue: _kTextStyle),
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
        //shape: getbo(context, bo, v, "shape"]),
        layoutBehavior: getButtonBarLayoutBehavior(context, bo, v, "layoutBehavior", defaultValue: ButtonBarLayoutBehavior.padded),
        alignedDropdown: getBool(context, bo, v, "alignedDropdown", defaultValue: false),
        buttonColor: getColor(context, bo, v, "buttonColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        highlightColor: getColor(context, bo, v, "highlightColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        colorScheme: getColorScheme(context, bo, v, "colorScheme"),
        materialTapTargetSize: getMaterialTapTargetSize(context, bo, map, "materialTapTargetSize"),
      );
    }
    return defaultValue;
  }

  //-------------- C -----------------
  //****** Color ******/
  static Color getColor(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Color defaultValue}) {
    Map v;
    if (key.isEmpty) {
      v = map;
    } else {
      v = _getMap(map, key);
    }

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

  //****** OutlinedBorder ******/
  static OutlinedBorder getOutlinedBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {OutlinedBorder defaultValue}) {
    Map v = _getMap(map, key, defaultValue: map);
    if (v != null) {
      var constructorName = _getConstructorName(map);
      switch (constructorName) {
        case "circle":
          return CircleBorder(
            side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none),
          );
        case "stadium":
          return StadiumBorder(
            side: getBorderSide(context, bo, v, "side", defaultValue: BorderSide.none),
          );
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
    var v = _getList(map, key);
    if (v != null) {
      List<Color> list = List<Color>();
      for (var a in v) {
        list.add(getColor(context, bo, a, ""));
      }
      return list;
    }
    return defaultValue;
  }

  //****** ColorScheme ******/
  static ColorScheme getColorScheme(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ColorScheme defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      if (constructorName == null || constructorName.isEmpty) {
        return ColorScheme(
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
          brightness: getBrightness(context, bo, v, "brightness"),
        );
      }

      switch (constructorName) {
        case 'fromSwatch':
          return ColorScheme.fromSwatch(
            primarySwatch: getColor(context, bo, v, "primarySwatch", defaultValue: Colors.blue),
            primaryColorDark: getColor(context, bo, v, "primaryColorDark"),
            accentColor: getColor(context, bo, v, "accentColor"),
            cardColor: getColor(context, bo, v, "cardColor"),
            backgroundColor: getColor(context, bo, v, "backgroundColor"),
            errorColor: getColor(context, bo, v, "errorColor"),
            brightness: getBrightness(context, bo, v, "brightness", defaultValue: Brightness.light),
          );
      }
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

  //-------------- D -----------------
  //****** Double ******/
  static double getDouble(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {double defaultValue}) {
    return _getDouble(map, key) ?? defaultValue;
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
        image: getObject(context, bo, map, "image"),
        colorFilter: getColorFilter(context, bo, map, "colorFilter"),
        fit: getBoxFit(context, bo, map, "fit"),
        alignment: getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
        centerSlice: getRect(context, bo, map, "centerSlice"),
        repeat: getImageRepeat(context, bo, map, "repeat", defaultValue: ImageRepeat.noRepeat),
        matchTextDirection: getBool(context, bo, map, "matchTextDirection", defaultValue: false),
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
  static dynamic getDecoration(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Decoration defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var className = _getClassName(v);
      if (className == "BoxDecoration") {
        return getBoxDecoration(context, bo, map, key);
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
      //var className = _getClassName(v);
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
        textColor: getColor(context, bo, map, "textColor", defaultValue: const Color(0xFF42A5F5)),
        style: getFlutterLogoStyle(context, bo, map, "style", defaultValue: FlutterLogoStyle.markOnly),
        margin: getEdgeInsets(context, bo, map, "margin", defaultValue: EdgeInsets.zero),
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

  //-------------- G -----------------
  //****** Gradient ******/
  static Gradient getGradient(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {Gradient defaultValue}) {
    try {
      var v = _getMap(map, key);
      if (v != null) {
        var _constructorName = _getConstructorName(v);
        if (_constructorName == "linear") {
          return LinearGradient(
            begin: getAlignment(context, bo, v, "begin", defaultValue: Alignment.centerLeft),
            end: getAlignment(context, bo, v, "end", defaultValue: Alignment.centerRight),
            colors: getColorList(context, bo, v, "colors"),
            stops: toListT<double>(getList(context, bo, v, "stops")),
            tileMode: getTileMode(context, bo, map, "tileMode", defaultValue: TileMode.clamp),
            transform: getGradientTransform(context, bo, map, "transform"),
          );
        }
        if (_constructorName == "radial") {
          return RadialGradient(
            center: getAlignment(context, bo, v, "center", defaultValue: Alignment.center),
            radius: getDouble(context, bo, v, "radius", defaultValue: 0.5),
            colors: getColorList(context, bo, v, "colors"),
            stops: toListT<double>(getList(context, bo, v, "stops")),
            tileMode: getTileMode(context, bo, map, "tileMode", defaultValue: TileMode.clamp),
            focal: getAlignment(context, bo, map, "focal"),
            focalRadius: getDouble(context, bo, map, "focalRadius", defaultValue: 0.0),
            transform: getGradientTransform(context, bo, map, "transform"),
          );
        }
        if (_constructorName == "sweep") {
          return SweepGradient(
            center: getAlignment(context, bo, v, "center", defaultValue: Alignment.center),
            startAngle: getDouble(context, bo, v, "startAngle", defaultValue: 0.0),
            endAngle: getDouble(context, bo, v, "endAngle", defaultValue: math.pi * 2),
            colors: getColorList(context, bo, v, "colors"),
            stops: toListT<double>(getList(context, bo, v, "stops")),
            tileMode: getTileMode(context, bo, map, "tileMode", defaultValue: TileMode.clamp),
            transform: getGradientTransform(context, bo, map, "transform"),
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
      var constructorName = _getConstructorName(map);
      switch (constructorName) {
        case "rotation":
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

  //****** IconThemeData ******/
  static IconThemeData getIconThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
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
      return IconData(
        getInt(context, bo, v, "codePoint"),
        fontFamily: getString(context, bo, v, "fontFamily", defaultValue: "MaterialIcons"),
        fontPackage: getString(context, bo, v, "fontPackage"),
        matchTextDirection: getBool(context, bo, v, "matchTextDirection", defaultValue: false),
      );
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
        hintStyle: getTextStyle(context, bo, v, "hintStyle"),
        errorStyle: getTextStyle(context, bo, v, "errorStyle"),
        errorMaxLines: getInt(context, bo, v, "errorMaxLines"),
        // ignore: deprecated_member_use
        hasFloatingPlaceholder: getBool(context, bo, v, "hasFloatingPlaceholder", defaultValue: true),
        isDense: getBool(context, bo, v, "isDense", defaultValue: false),
        contentPadding: getEdgeInsets(context, bo, v, "contentPadding"),
        isCollapsed: getBool(context, bo, v, "isCollapsed", defaultValue: false),
        prefixStyle: getTextStyle(context, bo, v, "prefixStyle"),
        suffixStyle: getTextStyle(context, bo, v, "suffixStyle"),
        counterStyle: getTextStyle(context, bo, v, "counterStyle"),
        filled: getBool(context, bo, v, "filled", defaultValue: false),
        fillColor: getColor(context, bo, v, "fillColor"),
        errorBorder: getInputBorder(context, bo, v, "errorBorder"),
        focusedBorder: getInputBorder(context, bo, v, "focusedBorder"),
        focusedErrorBorder: getInputBorder(context, bo, v, "focusedErrorBorder"),
        disabledBorder: getInputBorder(context, bo, v, "disabledBorder"),
        enabledBorder: getInputBorder(context, bo, v, "enabledBorder"),
        border: getInputBorder(context, bo, v, "border"),
      );
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
          icon: getWidget(context, bo, map, "icon"),
          labelText: getString(context, bo, map, "labelText"),
          labelStyle: getTextStyle(context, bo, map, "labelStyle"),
          helperText: getString(context, bo, map, "helperText"),
          helperStyle: getTextStyle(context, bo, map, "helperStyle"),
          helperMaxLines: getInt(context, bo, map, "helperMaxLines"),
          hintText: getString(context, bo, map, "hintText"),
          hintStyle: getTextStyle(context, bo, map, "hintStyle"),
          hintMaxLines: getInt(context, bo, map, "hintMaxLines"),
          errorText: getString(context, bo, map, "errorText"),
          errorStyle: getTextStyle(context, bo, map, "errorStyle"),
          errorMaxLines: getInt(context, bo, map, "errorMaxLines"),
          floatingLabelBehavior: getFloatingLabelBehavior(context, bo, map, "floatingLabelBehavior", defaultValue: FloatingLabelBehavior.auto),
          isCollapsed: getBool(context, bo, map, "isCollapsed", defaultValue: false),
          isDense: getBool(context, bo, map, "isDense"),
          contentPadding: getEdgeInsets(context, bo, map, "contentPadding"),
          prefix: getWidget(context, bo, map, "prefix"),
          prefixIcon: getWidget(context, bo, map, "prefixIcon"),
          prefixIconConstraints: getBoxConstraints(context, bo, map, "prefixIconConstraints"),
          prefixText: getString(context, bo, map, "prefixText"),
          prefixStyle: getTextStyle(context, bo, map, "prefixStyle"),
          suffix: getWidget(context, bo, map, "suffix"),
          suffixIcon: getWidget(context, bo, map, "suffixIcon"),
          suffixIconConstraints: getBoxConstraints(context, bo, map, "suffixIconConstraints"),
          suffixText: getString(context, bo, map, "suffixText"),
          suffixStyle: getTextStyle(context, bo, map, "suffixStyle"),
          counter: getWidget(context, bo, map, "counter"),
          counterText: getString(context, bo, map, "counterText"),
          counterStyle: getTextStyle(context, bo, map, "counterStyle"),
          filled: getBool(context, bo, map, "filled"),
          fillColor: getColor(context, bo, map, "fillColor"),
          focusColor: getColor(context, bo, map, "focusColor"),
          hoverColor: getColor(context, bo, map, "hoverColor"),
          errorBorder: getInputBorder(context, bo, map, "errorBorder"),
          focusedBorder: getInputBorder(context, bo, map, "focusedBorder"),
          focusedErrorBorder: getInputBorder(context, bo, map, "focusedErrorBorder"),
          disabledBorder: getInputBorder(context, bo, map, "disabledBorder"),
          enabledBorder: getInputBorder(context, bo, map, "enabledBorder"),
          border: getInputBorder(context, bo, map, "border"),
          enabled: getBool(context, bo, map, "enabled"),
          semanticCounterText: getString(context, bo, map, "semanticCounterText"),
          alignLabelWithHint: getBool(context, bo, map, "alignLabelWithHint"),
        );
      }

      switch (constructorName) {
        case "collapsed":
          return InputDecoration.collapsed(
            hintText: getString(context, bo, map, "hintText"),
            floatingLabelBehavior: getFloatingLabelBehavior(context, bo, map, "floatingLabelBehavior", defaultValue: FloatingLabelBehavior.auto),
            hintStyle: getTextStyle(context, bo, map, "hintStyle"),
            filled: getBool(context, bo, map, "filled"),
            fillColor: getColor(context, bo, map, "fillColor"),
            focusColor: getColor(context, bo, map, "focusColor"),
            hoverColor: getColor(context, bo, map, "hoverColor"),
            border: getInputBorder(context, bo, map, "border"),
            enabled: getBool(context, bo, map, "enabled"),
          );
      }
    }
    return defaultValue;
  }

  //****** InputBorder ******/
  static InputBorder getInputBorder(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {InputBorder defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'none':
          return InputBorder.none;
        case 'outline':
          return OutlineInputBorder(
            borderSide: getBorderSide(context, bo, v, "borderSide", defaultValue: const BorderSide()),
            borderRadius: getBorderRadius(context, bo, v, "borderRadius", defaultValue: const BorderRadius.all(Radius.circular(4.0))),
            gapPadding: getDouble(context, bo, v, "gapPadding", defaultValue: 4.0),
          );
        case 'underline':
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
            getImageProvider(context, bo, map, "imageProvider"),
            width: getInt(context, bo, v, "width", defaultValue: 1),
            height: getInt(context, bo, v, "height", defaultValue: 1),
            allowUpscaling: getBool(context, bo, v, "allowUpscaling", defaultValue: false),
          );
        case 'file':
          return FileImage(
            getFile(context, bo, map, "file"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'network':
          return NetworkImage(
            getString(context, bo, map, "url"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'memory':
          return MemoryImage(
            getUint8List(context, bo, map, "bytes"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
          );
        case 'exactAsset':
          return ExactAssetImage(
            getString(context, bo, map, "assetName"),
            scale: getDouble(context, bo, v, "scale", defaultValue: 1.0),
            bundle: getAssetBundle(context, bo, map, key),
            package: getString(context, bo, map, "packageName"),
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
      var constructorName = _getConstructorName(v);
      switch (constructorName) {
        case 'value':
          return Key(getString(context, bo, v, "value"));
        case 'unique':
          return UniqueKey();
        case 'global':
          return GlobalKey(debugLabel: getString(context, bo, v, "debugLabel"));
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
          return Matrix4.fromList(toListT<double>(getList(context, bo, v, "values")));
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

  //****** String ******/
  static String getString(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {String defaultValue}) {
    return _getString(map, key) ?? defaultValue;
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
        fontFamily: getString(context, bo, map, "fontFamily"),
        fontFamilyFallback: toListT<String>(getList(context, bo, map, "fontFamilyFallback")),
        fontSize: getDouble(context, bo, map, "fontSize"),
        height: getDouble(context, bo, map, "height"),
        leading: getDouble(context, bo, map, "leading"),
        fontWeight: getFontWeight(context, bo, map, "fontWeight"),
        fontStyle: getFontStyle(context, bo, map, "fontStyle"),
        forceStrutHeight: getBool(context, bo, map, "forceStrutHeight"),
        debugLabel: getString(context, bo, map, "debugLabel"),
        package: getString(context, bo, map, "packageName"),
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
        color: getColor(context, bo, map, "color"),
        textDirection: getTextDirection(context, bo, map, "textDirection"),
        thickness: getDouble(context, bo, map, "thickness"),
        fadeoutOpacityAnimation: getAnimationDouble(context, bo, map, "fadeoutOpacityAnimation"),
        padding: getEdgeInsets(context, bo, map, "padding", defaultValue: EdgeInsets.zero),
        mainAxisMargin: getDouble(context, bo, map, "mainAxisMargin", defaultValue: 0.0),
        crossAxisMargin: getDouble(context, bo, map, "crossAxisMargin", defaultValue: 0.0),
        radius: getRadius(context, bo, map, "radius"),
        minLength: getDouble(context, bo, map, "minLength", defaultValue: _kMinThumbExtent),
        minOverscrollLength: getDouble(context, bo, map, "minOverscrollLength"),
      );
    }
    return defaultValue;
  }

  //-------------- T -----------------

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
  static TextStyle getTextStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextStyle defaultValue}) {
    var v = _getMap(map, key);
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

  //****** TextEditingController ******/
  static TextEditingController getTextEditingController(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {TextEditingController defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return TextEditingController(
        text: getString(context, bo, v, "text"),
      );
    }
    return defaultValue;
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
    return _getClassObj(map[key], buildOwner: bo, defaultValue: defaultValue, context: context);
  }

  //****** ThemeData ******/
  static ThemeData getThemeData(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {ThemeData defaultValue}) {
    var v = _getMap(map, key);
    if (v != null) {
      return ThemeData(
        brightness: getBrightness(context, bo, v, "brightness"),
        primaryColor: getColor(context, bo, v, "primaryColor"),
        primaryColorBrightness: getBrightness(context, bo, v, "primaryColorBrightness"),
        primaryColorLight: getColor(context, bo, v, "primaryColorLight"),
        primaryColorDark: getColor(context, bo, v, "primaryColorDark"),
        accentColor: getColor(context, bo, v, "accentColor"),
        accentColorBrightness: getBrightness(context, bo, v, "accentColorBrightness"),
        canvasColor: getColor(context, bo, v, "canvasColor"),
        scaffoldBackgroundColor: getColor(context, bo, v, "scaffoldBackgroundColor"),
        bottomAppBarColor: getColor(context, bo, v, "bottomAppBarColor"),
        cardColor: getColor(context, bo, v, "cardColor"),
        dividerColor: getColor(context, bo, v, "dividerColor"),
        focusColor: getColor(context, bo, v, "focusColor"),
        hoverColor: getColor(context, bo, v, "hoverColor"),
        highlightColor: getColor(context, bo, v, "highlightColor"),
        splashColor: getColor(context, bo, v, "splashColor"),
        selectedRowColor: getColor(context, bo, v, "selectedRowColor"),
        unselectedWidgetColor: getColor(context, bo, v, "unselectedWidgetColor"),
        disabledColor: getColor(context, bo, v, "disabledColor"),
        buttonColor: getColor(context, bo, v, "buttonColor"),
        buttonTheme: getButtonThemeData(context, bo, v, "buttonTheme"),
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
        iconTheme: getIconThemeData(context, bo, v, "iconTheme"),
        primaryIconTheme: getIconThemeData(context, bo, v, "primaryIconTheme"),
        accentIconTheme: getIconThemeData(context, bo, v, "accentIconTheme"),
        platform: getTargetPlatform(context, bo, v, "platform"),
        materialTapTargetSize: getMaterialTapTargetSize(context, bo, v, "materialTapTargetSize"),
        applyElevationOverlayColor: getBool(context, bo, v, "applyElevationOverlayColor"),
        colorScheme: getColorScheme(context, bo, v, "colorScheme"),
      );
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
          return Uint8List.fromList(toListT<int>(getList(context, bo, v, "elements")));
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
              getList(context, bo, v, "array"),
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

//

  //****** VoidCallback ******/
  static VoidCallback getVoidCallback(BuildContext context, XSJsonBuildOwner bo, Map map, String key) {
    VoidCallback cb = () {
      bo.eventCallback(_getString(map, key));
    };
    return cb;
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
  static Widget getWidget(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {dynamic defaultValue}) {
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

  //-------------- X -----------------
  //-------------- Y -----------------
  //-------------- Z -----------------

}
