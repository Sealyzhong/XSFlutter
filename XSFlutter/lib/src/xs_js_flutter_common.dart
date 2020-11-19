//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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

class XSUtil {
  //MediaQueryData

  static Map compressMap(Map map) {
    if (map == null) {
      return map;
    }
    Map retMap = {};
    for (var k in map.keys) {
      var v = map[k];
      if (v != null) {
        retMap[k] = v;
      }
    }
    return retMap;
  }

  static Map cMediaQueryDataToJson(MediaQueryData data) {
    var map = {
      "size": cSizeToJson(data.size),
      "devicePixelRatio": data.devicePixelRatio,
      "textScaleFactor": data.textScaleFactor,
      "padding": cEdgeInsetsToJson(data.padding),
      "viewInsets": cEdgeInsetsToJson(data.viewInsets),
      "alwaysUse24HourFormat": data.alwaysUse24HourFormat,
      "accessibleNavigation": data.accessibleNavigation,
      "invertColors": data.invertColors,
      "disableAnimations": data.disableAnimations,
      "boldText": data.boldText,
    };

    return compressMap(map);
  }

  static Map cSizeToJson(Size sz) {
    var map = {
      "width": sz.width,
      "height": sz.height
    };
    return compressMap(map);
  }

  //const EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom);

  static Map cEdgeInsetsToJson(EdgeInsets insets) {
    var map = {
      "left": insets.left,
      "top": insets.top,
      "right": insets.right,
      "bottom": insets.bottom
    };
    return compressMap(map);
  }

  static Map cThemeDataToJson(ThemeData data) {
    var map = {
      "brightness": cBrightnessToJson(data.brightness),
      "primaryColor": data.primaryColor?.value,
      "primaryColorBrightness": cBrightnessToJson(data.primaryColorBrightness),
      "primaryColorLight": data.primaryColorLight?.value,
      "primaryColorDark": data.primaryColorDark?.value,
      "accentColor": data.accentColor?.value,
      "accentColorBrightness": cBrightnessToJson(data.accentColorBrightness),
      "canvasColor": data.canvasColor?.value,
      "scaffoldBackgroundColor": data.scaffoldBackgroundColor?.value,
      "bottomAppBarColor": data.bottomAppBarColor?.value,
      "cardColor": data.cardColor?.value,
      "dividerColor": data.dividerColor?.value,
      "highlightColor": data.highlightColor?.value,
      "splashColor": data.splashColor?.value,
      // "splashFactory": data.splashFactory,
      "selectedRowColor": data.selectedRowColor?.value,
      "unselectedWidgetColor": data.unselectedWidgetColor?.value,
      "disabledColor": data.disabledColor?.value,
      "buttonColor": data.buttonColor?.value,
      // "buttonTheme": data.buttonTheme,
      "secondaryHeaderColor": data.secondaryHeaderColor?.value,
      "textSelectionColor": data.textSelectionColor?.value,
      "backgroundColor": data.backgroundColor?.value,
      "dialogBackgroundColor": data.dialogBackgroundColor?.value,
      "indicatorColor": data.indicatorColor?.value,
      "hintColor": data.hintColor?.value,
      "errorColor": data.errorColor?.value,
      "toggleableActiveColor": data.toggleableActiveColor?.value,
      "textTheme": cTextThemeToJson(data.textTheme),
      "primaryTextTheme": cTextThemeToJson(data.primaryTextTheme),
      "accentTextTheme": cTextThemeToJson(data.accentTextTheme),
      // "inputDecorationTheme": cInputDecorationThemeToJson(data.inputDecorationTheme),
      // "iconTheme": data.iconTheme,
      // "primaryIconTheme": data.primaryIconTheme,
      // "accentIconTheme": data.accentIconTheme,
      // "sliderTheme": data.sliderTheme,
      // "tabBarTheme": data.tabBarTheme,
      // "chipTheme": data.chipTheme,
      "platform": cTargetPlatformToJson(data.platform),
      "materialTapTargetSize": cMaterialTapTargetSizeToJson(data.materialTapTargetSize),
      // "pageTransitionsTheme": data.pageTransitionsTheme,
      // "colorScheme": data.colorScheme,
      // "dialogTheme": data.dialogTheme,
      // "typography": data.typography,
    };

    return compressMap(map);
  }

  static Map cIconThemeDataToJson(IconThemeData data) {
    var map = {
      "color": data.color?.value,
      "size": data.size,
      "opacity": data.opacity,
    };

    return compressMap(map);
  }

  static String cBrightnessToJson(Brightness data) {
    switch (data) {
      case Brightness.light:
        return "light";

      case Brightness.dark:
        return "dark";
    }

    return "dark";
  }

  static Map cTextThemeToJson(TextTheme data) {
    if (data == null) {
      return null;
    }

    Map map = {
      // ignore: deprecated_member_use
      "display4": cTextStyleToJson(data.display4),
      // ignore: deprecated_member_use
      "display3": cTextStyleToJson(data.display3),
      // ignore: deprecated_member_use
      "display2": cTextStyleToJson(data.display2),
      // ignore: deprecated_member_use
      "display1": cTextStyleToJson(data.display1),
      // ignore: deprecated_member_use
      "headline": cTextStyleToJson(data.headline),
      // ignore: deprecated_member_use
      "title": cTextStyleToJson(data.title),
      // ignore: deprecated_member_use
      "subhead": cTextStyleToJson(data.subhead),
      // ignore: deprecated_member_use
      "body2": cTextStyleToJson(data.body2),
      // ignore: deprecated_member_use
      "body1": cTextStyleToJson(data.body1),
      "caption": cTextStyleToJson(data.caption),
      "button": cTextStyleToJson(data.button),
      // ignore: deprecated_member_use
      "subtitle": cTextStyleToJson(data.subtitle),
      "overline": cTextStyleToJson(data.overline),
    };

    return compressMap(map);
  }

  static Map cTextStyleToJson(TextStyle data) {
    if (data == null) {
      return null;
    }

    Map map = {
      "inherit": data.inherit,
      "color": data.color?.value,
      "fontSize": data.fontSize,
      "fontWeight": cFontWeightToJson(data.fontWeight),
      "fontStyle": cFontStyleToJson(data.fontStyle),
      "letterSpacing": data.letterSpacing,
      "wordSpacing": data.wordSpacing,
      "textBaseline": cTextBaselineToJson(data.textBaseline),
      "height": data.height,
      // "foreground": data.foreground,
      // "background": data.background,
      "shadows": cShadowToJson(data.shadows),
      "decoration": cTextDecorationToJson(data.decoration),
      "decorationColor": data.decorationColor?.value,
      "decorationStyle": cTextDecorationStyleToJson(data.decorationStyle),
      "debugLabel": data.debugLabel,
      "fontFamily": data.fontFamily,
    };

    return compressMap(map);
  }

  static Map cInputDecorationThemeToJson(InputDecorationTheme data) {
    if (data == null) {
      return null;
    }

    Map map = {
      "labelStyle": data.labelStyle,
      "helperStyle": data.helperStyle,
      "hintStyle": data.hintStyle,
      "errorStyle": data.errorStyle,
      "errorMaxLines": data.errorMaxLines,
      // ignore: deprecated_member_use
      "hasFloatingPlaceholder": data.hasFloatingPlaceholder,
      "isDense": data.isDense,
      "contentPadding": data.contentPadding,
      "isCollapsed": data.isCollapsed,
      "prefixStyle": data.prefixStyle,
      "suffixStyle": data.suffixStyle,
      "counterStyle": data.counterStyle,
      "filled": data.filled,
      "fillColor": data.fillColor,
      "errorBorder": data.errorBorder,
      "focusedBorder": data.focusedBorder,
      "focusedErrorBorder": data.focusedErrorBorder,
      "disabledBorder": data.disabledBorder,
      "enabledBorder": data.enabledBorder,
      "border": data.border,
    };

    return compressMap(map);
  }

  static String cTargetPlatformToJson(TargetPlatform data) {
    switch (data) {
      case TargetPlatform.android:
        return "android";

      case TargetPlatform.fuchsia:
        return "fuchsia";

      case TargetPlatform.iOS:
        return "iOS";
      default:
        break;
    }

    return "iOS";
  }

  static String cMaterialTapTargetSizeToJson(MaterialTapTargetSize data) {
    switch (data) {
      case MaterialTapTargetSize.padded:
        return "padded";

      case MaterialTapTargetSize.shrinkWrap:
        return "shrinkWrap";
    }

    return "padded";
  }

  static String cFontWeightToJson(FontWeight data) {
    if (data == null) return null;
    switch (data.index) {
      case 0:
        return "w100";
      case 1:
        return "w200";
      case 2:
        return "w300";

      case 3:
        return "w400";

      case 4:
        return "w500";

      case 5:
        return "w600";

      case 6:
        return "w700";

      case 7:
        return "w800";

      case 8:
        return "w900";
    }

    return null;
  }

  static String cFontStyleToJson(FontStyle data) {
    if (data == null) return null;

    switch (data) {
      case FontStyle.normal:
        return "normal";

      case FontStyle.italic:
        return "italic";
    }

    return null;
  }

  static String cTextBaselineToJson(TextBaseline data) {
    if (data == null) return null;

    switch (data) {
      case TextBaseline.alphabetic:
        return "alphabetic";

      case TextBaseline.ideographic:
        return "ideographic";
    }
    return null;
  }

  static String cTextDecorationToJson(TextDecoration data) {
    if (data == null) return "none";

    if (data == TextDecoration.none) {
      return "none";
    } else if (data == TextDecoration.underline) {
      return "underline";
    } else if (data == TextDecoration.overline) {
      return "overline";
    } else if (data == TextDecoration.lineThrough) {
      return "overline";
    }

    return "none";
  }

  static String cTextDecorationStyleToJson(TextDecorationStyle data) {
    if (data == null) return "solid";

    switch (data) {
      case TextDecorationStyle.solid:
        return "solid";

      case TextDecorationStyle.double:
        return "double";

      case TextDecorationStyle.dotted:
        return "dotted";

      case TextDecorationStyle.dashed:
        return "dashed";

      case TextDecorationStyle.wavy:
        return "wavy";
    }

    return "solid";
  }

  static List<Map> cShadowToJson(List<Shadow> data) {
    if (data == null) {
      return null;
    }

    List v = [];
    data.forEach((item) {
      Map s = {
        "color": item.color?.value,
        "offset": item.offset,
        "blurRadius": item.blurRadius
      };
      v.add(s);
    });

    return v;
  }

  static Map cBoxConstraintsToJson(BoxConstraints data) {
    if (data == null) {
      return null;
    }

    Map map = {
      "minWidth": data.minWidth,
      "maxWidth": data.maxWidth,
      "minHeight": data.minHeight,
      "maxHeight": data.maxHeight,
    };

    return map;
  }
}
