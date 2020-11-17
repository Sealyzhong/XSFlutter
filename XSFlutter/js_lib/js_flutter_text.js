/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Text Widget
 */

let { DartClass, FlutterWidget, Color, } = require("./js_flutter_basic_types.js");

//-------------- D -----------------
//****** DefaultTextStyle ******
class DefaultTextStyle extends FlutterWidget {
  constructor({ key, style, textAlign, softWrap, overflow, maxLines, child } = {}) {
    super();

    this.key = key;
    this.style = style;
    this.textAlign = textAlign;
    this.softWrap = softWrap;
    this.overflow = overflow;
    this.maxLines = maxLines;
    this.child = child;
  }
}
DefaultTextStyle.new = function({ key, style, textAlign, softWrap, overflow, maxLines, child } = {}) {
  return new DefaultTextStyle({
    key:key,
    style:style,
    textAlign:textAlign,
    softWrap:softWrap,
    overflow:overflow,
    maxLines:maxLines,
    child:child,
  });
};

//-------------- I -----------------
//****** InputDecoration ******
class InputDecoration extends FlutterWidget {
  constructor({ icon, labelText, labelStyle, helperText, helperStyle, hintText, hintStyle, hintMaxLines,
                errorText, errorStyle, errorMaxLines, hasFloatingPlaceholder, isDense, contentPadding, prefixIcon,
                prefix, prefixText, prefixStyle, suffixIcon, suffix, suffixText, suffixStyle,
                counter, counterText, counterStyle, filled, fillColor, errorBorder, focusedBorder, focusedErrorBorder, disabledBorder, enabledBorder, border,
                enabled, semanticCounterText, alignLabelWithHint} = {}) {
    super();

    this.icon = icon;
    this.labelText = labelText;
    this.labelStyle = labelStyle;
    this.helperText = helperText;
    this.helperStyle = helperStyle;
    this.hintText = hintText;
    this.hintStyle = hintStyle;
    this.hintMaxLines = hintMaxLines;
    this.errorText = errorText;
    this.errorStyle = errorStyle;
    this.errorMaxLines = errorMaxLines;
    this.hasFloatingPlaceholder = hasFloatingPlaceholder;
    this.isDense = isDense;
    this.contentPadding = contentPadding;
    this.prefixIcon = prefixIcon;
    this.prefix = prefix;
    this.prefixText = prefixText;
    this.prefixStyle = prefixStyle;
    this.suffixIcon = suffixIcon;
    this.suffix = suffix;
    this.suffixText = suffixText;
    this.suffixStyle = suffixStyle;
    this.counter = counter;
    this.counterText = counterText;
    this.counterStyle = counterStyle;
    this.filled = filled;
    this.fillColor = fillColor;
    this.errorBorder = errorBorder;
    this.focusedBorder = focusedBorder;
    this.focusedErrorBorder = focusedErrorBorder;
    this.disabledBorder = disabledBorder;
    this.enabledBorder = enabledBorder;
    this.border = border;
    this.enabled = enabled;
    this.semanticCounterText = semanticCounterText;
    this.alignLabelWithHint = alignLabelWithHint;
  }
}

InputDecoration.new = function({ icon, labelText, labelStyle, helperText, helperStyle, hintText, hintStyle, hintMaxLines,
                                 errorText, errorStyle, errorMaxLines, hasFloatingPlaceholder, isDense, contentPadding, prefixIcon,
                                 prefix, prefixText, prefixStyle, suffixIcon, suffix, suffixText, suffixStyle,
                                 counter, counterText, counterStyle, filled, fillColor, errorBorder, focusedBorder, focusedErrorBorder, disabledBorder, enabledBorder, border,
                                 enabled, semanticCounterText, alignLabelWithHint} = {}) {
  return new InputDecoration({
    icon:icon,
    labelStyle:labelStyle,
    labelText:labelText,
    helperText:helperText,
    hintStyle:hintStyle,
    helperStyle:helperStyle,
    hintText:hintText,
    hintMaxLines:hintMaxLines,
    errorText:errorText,
    errorBorder:errorBorder,
    errorStyle:errorStyle,
    errorMaxLines:errorMaxLines,
    hasFloatingPlaceholder:hasFloatingPlaceholder,
    isDense:isDense,
    contentPadding:contentPadding,
    prefixIcon:prefixIcon,
    prefix:prefix,
    prefixText:prefixText,
    prefixStyle:prefixStyle,
    suffixIcon:suffixIcon,
    suffix:suffix,
    suffixText:suffixText,
    suffixStyle:suffixStyle,
    counter:counter,
    counterText:counterText,
    counterStyle:counterStyle,
    filled:filled,
    fillColor:fillColor,
    focusedBorder:focusedBorder,
    focusedErrorBorder:focusedErrorBorder,
    disabledBorder:disabledBorder,
    enabledBorder:enabledBorder,
    border:border,
    enabled:enabled,
    semanticCounterText:semanticCounterText,
    alignLabelWithHint:alignLabelWithHint,
  });
};

InputDecoration.collapsed = function({ hintText, hasFloatingPlaceholder, hintStyle, filled, fillColor, border, enabled }) {
  let v = new InputDecoration();
  v.staticFunctionName = "collapsed";

  v.hintText = hintText;
  v.hasFloatingPlaceholder = hasFloatingPlaceholder;
  v.hintStyle = hintStyle;
  v.filled = filled;
  v.fillColor = fillColor;
  v.border = border;
  v.enabled = enabled;

  return v;
};

//****** OutlineInputBorder ******
class OutlineInputBorder extends FlutterWidget {
  constructor({ borderSide, borderRadius, gapPadding } = {}) {
    super();

    this.borderSide = borderSide;
    this.borderRadius = borderRadius;
    this.gapPadding = gapPadding;
  }
}
OutlineInputBorder.new = function({ borderSide, borderRadius, gapPadding } = {}) {
  return new OutlineInputBorder({
    borderSide:borderSide,
    borderRadius:borderRadius,
    gapPadding:gapPadding,
  });
};

//-------------- R -----------------
//****** RichText ******
class RichText extends FlutterWidget {
  constructor({ key, text, textAlign, textDirection, softWrap, overflow, textScaleFactor, maxLines } = {}) {
    super();

    this.key = key;
    this.text = text;
    this.textAlign = textAlign;
    this.textDirection = textDirection;
    this.softWrap = softWrap;
    this.overflow = overflow;
    this.textScaleFactor = textScaleFactor;
    this.maxLines = maxLines;
  }
}
RichText.new = function({ key, text, textAlign, textDirection, softWrap, overflow, textScaleFactor, maxLines } = {}) {
  return new RichText({
    key:key,
    text:text,
    textAlign:textAlign,
    textDirection:textDirection,
    softWrap:softWrap,
    overflow:overflow,
    textScaleFactor:textScaleFactor,
    maxLines:maxLines,
  });
};

//-------------- S -----------------
//****** Shadow ******
class Shadow extends FlutterWidget {
  constructor({ color, offset, blurRadius } = {}) {
    super();

    this.color = color;
    this.offset = offset;
    this.blurRadius = blurRadius;
  }
}
Shadow.new = function({ color, offset, blurRadius } = {}) {
  return new Shadow({
    color:color,
    offset:offset,
    blurRadius:blurRadius,
  });
};
Shadow.fromJson = function(mapObj) {
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new Shadow();

  for (var p in mapObj) {
    if (mapObj.hasOwnProperty(p)) {
      let v = mapObj[p];
      if (v == null || v == undefined) {
        obj[p] = v;
        continue;
      }

      switch (p) {
        case "color":
          obj[p] = new Color(v);
          break;

        default:
          obj[p] = v;
          break;
      }
    }
  }

  return obj;
};


//-------------- T -----------------
//****** Text ******
class Text extends FlutterWidget {
  constructor(data, {key, style, textAlign, textDirection, softWrap, overflow, textScaleFactor, maxLines, semanticsLabel } = {} ) {
    super();

    this.data = data;
    this.key = key;
    this.style = style;
    this.textAlign = textAlign;
    this.textDirection = textDirection;
    this.softWrap = softWrap;
    this.overflow = overflow;
    this.textScaleFactor = textScaleFactor;
    this.maxLines = maxLines;
    this.semanticsLabel = semanticsLabel;
  }
}
Text.new = function(data, {key, style, textAlign, textDirection, softWrap, overflow, textScaleFactor, maxLines, semanticsLabel } = {} ) {
  return new Text(data,{
    key:key,
    style:style,
    textAlign:textAlign,
    textDirection:textDirection,
    softWrap:softWrap,
    overflow:overflow,
    textScaleFactor:textScaleFactor,
    maxLines:maxLines,
    semanticsLabel:semanticsLabel,
  });
};
Text.rich = function(textSpan,{  key, style, textAlign, textDirection, softWrap, overflow, textScaleFactor, maxLines, semanticsLabel} = {} ) {
  let t = new Text();
  t.constructorName = "rich";
  t.textSpan = textSpan;
  t.key = key;
  t.style = style;
  t.textAlign = textAlign;
  t.textDirection = textDirection;
  t.softWrap = softWrap;
  t.overflow = overflow;
  t.textScaleFactor = textScaleFactor;
  t.maxLines = maxLines;
  t.semanticsLabel = semanticsLabel;
};

//****** TextStyle ******
//packages: 此处因为和 js 的关键字 package 冲突了，所以改成 packages
class TextStyle extends DartClass {
  constructor({inherit, color, fontSize, fontWeight, fontStyle, letterSpacing, wordSpacing, textBaseline, height, foreground, background,
    shadows, decoration, decorationColor, decorationStyle, debugLabel, fontFamily, packages } = {}) {
    super();

    this.inherit = inherit;
    this.color = color;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.fontStyle = fontStyle;
    this.letterSpacing = letterSpacing;
    this.wordSpacing = wordSpacing;
    this.textBaseline = textBaseline;
    this.height = height;
    this.foreground = foreground;
    this.background = background;
    this.shadows = shadows;
    this.decoration = decoration;
    this.decorationColor = decorationColor;
    this.decorationStyle = decorationStyle;
    this.debugLabel = debugLabel;
    this.fontFamily = fontFamily;
    this.packages = packages;
  }
}
TextStyle.new = function({inherit, color, fontSize, fontWeight, fontStyle, letterSpacing, wordSpacing,textBaseline,height, foreground, background,shadows, decoration, decorationColor, decorationStyle, debugLabel, fontFamily, packages } = {}) {
  return new TextStyle({
    inherit:inherit,
    color:color,
    fontSize:fontSize,
    fontWeight:fontWeight,
    fontStyle:fontStyle,
    letterSpacing:letterSpacing,
    wordSpacing:wordSpacing,
    textBaseline:textBaseline,
    height:height,
    foreground:foreground,
    background:background,
    shadows:shadows,
    decoration:decoration,
    decorationColor:decorationColor,
    decorationStyle:decorationStyle,
    debugLabel:debugLabel,
    fontFamily:fontFamily,
    packages:packages,
  });
};
TextStyle.fromJson = function(mapObj) {
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new TextStyle();

  for (var p in mapObj) {
    if (mapObj.hasOwnProperty(p)) {
      let v = mapObj[p];
      if (v == null || v == undefined) {
        obj[p] = v;
        continue;
      }

      switch (p) {
        case "color":
        case "decorationColor":
          obj[p] = new Color(v);
          break;

        case "shadows":
          {
            let shadowArray = [];
            for (shadow of v) {
              shadowArray.push(Shadow.fromJson(shadow));
            }
            obj[p] = shadowArray;
          }
          break;

        default:
          obj[p] = v;
          break;
      }
    }
  }

  return obj;
};

//****** TextSpan ******
class TextSpan extends FlutterWidget {
  constructor({ style, text, children, recognizer } = {}) {
    super();
    this.style = style;
    this.text = text;
    this.children = children;
    this.recognizer = recognizer;
  }
}
TextSpan.new = function({ style, text, children, recognizer } = {}) {
  return new TextSpan({
    style:style,
    text:text,
    children:children,
    recognizer:recognizer,
  });
};

//****** TextFormField ******
class TextFormField extends FlutterWidget {
  constructor({
    key,
    controller,
    initialValue,
    focusNode,
    decoration,
    keyboardType,
    textCapitalization,
    textInputAction,
    style,
    textDirection,
    textAlign,
    autofocus,
    obscureText,
    autocorrect,
    autovalidate,
    maxLengthEnforced,
    maxLines,
    maxLength,
    onEditingComplete,
    onFieldSubmitted,
    onSaved,
    validator,
    inputFormatters,
    enabled,
    cursorWidth,
    cursorRadius,
    cursorColor,
    keyboardAppearance,
    scrollPadding,
    enableInteractiveSelection,
    buildCounter
  } = {}) {
    super();

    this.key = key;
    this.controller = controller;
    this.initialValue = initialValue;
    this.focusNode = focusNode;
    this.decoration = decoration;
    this.keyboardType = keyboardType;
    this.textCapitalization = textCapitalization;
    this.textInputAction = textInputAction;
    this.style = style;
    this.textDirection = textDirection;
    this.textAlign = textAlign;
    this.autofocus = autofocus;
    this.obscureText = obscureText;
    this.autocorrect = autocorrect;
    this.autovalidate = autovalidate;
    this.maxLengthEnforced = maxLengthEnforced;
    this.maxLines = maxLines;
    this.maxLength = maxLength;
    this.onEditingComplete = onEditingComplete;
    this.onFieldSubmitted = onFieldSubmitted;
    this.onSaved = onSaved;
    this.validator = validator;
    this.inputFormatters = inputFormatters;
    this.enabled = enabled;
    this.cursorWidth = cursorWidth;
    this.cursorRadius = cursorRadius;
    this.cursorColor = cursorColor;
    this.keyboardAppearance = keyboardAppearance;
    this.scrollPadding = scrollPadding;
    this.enableInteractiveSelection = enableInteractiveSelection;
    this.buildCounter = buildCounter;
  }
}
TextFormField.new = function(args) {
  return new TextFormField(args);
};

//****** TextEditingController ******
class TextEditingController extends FlutterWidget {
  constructor({ text } = {}) {
    super();

    this.text = text;
  }
}
TextEditingController.new = function({ text } = {}) {
  return new TextEditingController({
    text:text,
  });
};

//****** TextEditingController ******
class TextInputType extends DartClass {
  constructor() {
    super();
  }
}
TextInputType.new = function() {
  return new TextInputType();
};
TextInputType.numberWithOptions = function(signed, decimal) {
  let v = new TextInputType();
  v.constructorName = "numberWithOptions";

  v.signed = signed;
  v.decimal = decimal;

  return v;
};
TextInputType.text = function() {
  let v = new TextInputType();
  v.constructorName = "text";
  return v;
};
TextInputType.multiline = function() {
  let v = new TextInputType();
  v.constructorName = "multiline";

  return v;
};
TextInputType.number = function() {
  let v = new TextInputType();
  v.constructorName = "number";

  return v;
};
TextInputType.phone = function() {
  let v = new TextInputType();
  v.constructorName = "phone";

  return v;
};
TextInputType.datetime = function() {
  let v = new TextInputType();
  v.constructorName = "datetime";

  return v;
};
TextInputType.emailAddress = function() {
  let v = new TextInputType();
  v.constructorName = "emailAddress";

  return v;
};
TextInputType.url = function() {
  let v = new TextInputType();
  v.constructorName = "url";

  return v;
};

class TextField extends FlutterWidget {
  constructor({ key, controller, focusNode, decoration, keyboardType, textInputAction, textCapitalization, style, textAlign, textDirection,
                autofocus, obscureText, autocorrect, maxLines, maxLength, maxLengthEnforced, onChanged, onEditingComplete, onSubmitted, inputFormatters,
                enabled, cursorWidth, cursorRadius, cursorColor, keyboardAppearance, scrollPadding, dragStartBehavior, enableInteractiveSelection, onTap, buildCounter} = {}) {
    super();

    this.key = key;
    this.controller = controller;
    this.focusNode = focusNode;
    this.decoration = decoration;
    this.keyboardType = keyboardType;
    this.textInputAction = textInputAction;
    this.textCapitalization = textCapitalization;
    this.style = style;
    this.textAlign = textAlign;
    this.textDirection = textDirection;
    this.autofocus = autofocus;
    this.obscureText = obscureText;
    this.autocorrect = autocorrect;
    this.maxLines = maxLines;
    this.maxLength = maxLength;
    this.maxLengthEnforced = maxLengthEnforced;
    this.onChanged = onChanged;
    this.onEditingComplete = onEditingComplete;
    this.onSubmitted = onSubmitted;
    this.inputFormatters = inputFormatters;
    this.enabled = enabled;
    this.cursorWidth = cursorWidth;
    this.cursorRadius = cursorRadius;
    this.cursorColor = cursorColor;
    this.keyboardAppearance = keyboardAppearance;
    this.scrollPadding = scrollPadding;
    this.dragStartBehavior = dragStartBehavior;
    this.enableInteractiveSelection = enableInteractiveSelection;
    this.onTap = onTap;
    this.buildCounter = buildCounter;
  }
}
TextField.new = function({ key, controller, focusNode, decoration, keyboardType, textInputAction, textCapitalization, style, textAlign, textDirection,
                           autofocus, obscureText, autocorrect, maxLines, maxLength, maxLengthEnforced, onChanged, onEditingComplete, onSubmitted, inputFormatters,
                           enabled, cursorWidth, cursorRadius, cursorColor, keyboardAppearance, scrollPadding, dragStartBehavior, enableInteractiveSelection, onTap, buildCounter} = {}) {
  return new TextField({
    key:key,
    controller:controller,
    focusNode:focusNode,
    decoration:decoration,
    keyboardType:keyboardType,
    textInputAction:textInputAction,
    textCapitalization:textCapitalization,
    textDirection:textDirection,
    textAlign:textAlign,
    style:style,
    autofocus:autofocus,
    obscureText:obscureText,
    autocorrect:autocorrect,
    maxLines:maxLines,
    maxLength:maxLength,
    maxLengthEnforced:maxLengthEnforced,
    onTap:onTap,
    onChanged:onChanged,
    onEditingComplete:onEditingComplete,
    onSubmitted:onSubmitted,
    inputFormatters:inputFormatters,
    enabled:enabled,
    cursorWidth:cursorWidth,
    cursorRadius:cursorRadius,
    cursorColor:cursorColor,
    keyboardAppearance:keyboardAppearance,
    scrollPadding:scrollPadding,
    dragStartBehavior:dragStartBehavior,
    enableInteractiveSelection:enableInteractiveSelection,
    buildCounter:buildCounter,
  });
};

//****** UnderlineInputBorder ******
class UnderlineInputBorder extends FlutterWidget {
  constructor({ borderSide, borderRadius } = {}) {
    super();

    this.borderSide = borderSide;
    this.borderRadius = borderRadius;
  }
}
UnderlineInputBorder.new = function({ borderSide, borderRadius } = {}) {
  return new UnderlineInputBorder({
    borderRadius:borderRadius,
    borderSide:borderSide,
  });
};


module.exports = {

  DefaultTextStyle,

  InputDecoration,

  OutlineInputBorder,

  RichText,

  Shadow,

  Text, TextStyle,TextField, TextSpan,TextFormField, TextEditingController, TextInputType,

  UnderlineInputBorder,
};
