/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Basic Class
 */

//不依赖任何文件的放这里
//dart widget 封装
const dart_sdk = require("dart_sdk");
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const $clamp = dartx.clamp;


var $forEach = dartx.forEach;
var dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
var dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();


class FlutterWidgetMirrorMgr {
  constructor() {
    this.mirrorIDFeed = 0;
    this.mirrorObjMap = new Map();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new FlutterWidgetMirrorMgr();
    }
    return this.instance;
  }

  generateID(obj) {
    const d = ++this.mirrorIDFeed;
    const idString = String(d);
    this.mirrorObjMap[idString] = obj;
    return idString;
  }

  removeMirrorObjects(mirrorIDList) {
    for (let mirrorID in mirrorIDList) {
      this.mirrorObjMap.delete(mirrorID);
    }
  }

  getMirrorObj(mirrorID) {
    return this.mirrorObjMap[mirrorID];
  }
}

class FlutterCallArgs {
  constructor({
    widgetID,
    mirrorID,
    className,
    funcName,
    args
  } = {}) {
    this.widgetID = widgetID;
    this.mirrorID = mirrorID;
    this.className = className;
    this.funcName = funcName;
    this.args = args;
  }
}

//flutter 中 非widget继承 DartClass
class DartClass extends core.Object {
  constructor() {
    super();
    this.className = this.constructor.name;
  }

  createMirrorObjectID() {
    this.mirrorID = FlutterWidgetMirrorMgr.getInstance().generateID(this);
    core.print("createMirrorObjectID: mirrorID : " + this.mirrorID);
  }
}

//flutter Widget继承FlutterWidget
class FlutterWidget extends DartClass {
  constructor() {
    super();
  }

  //在生成json前调用
  //用于list delegate 等的items build
  //用于widget有类似onTab等响应函数变量，在此转换成callbackid,
  //但注意，delegate中确实需要funtion,要转不需ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper, buildContext) {
    //把callback 换成callbackID
    for (let k in this) {
      let v = this[k];
      if (typeof v == "function") {
        this[k] = jsWidgetHelper.buildingCreateCallbackID(v);
      }
    }
  }
}

//加密参数
class XSEncodeParam {
  static encodeParam(param) {
    if (param === null || param == undefined) {
      return param;
    }

    if (param.innerValue) {
      param = param.innerValue();
    }

    if (core.Map.is(param)) {
      param = this.mapToObj(param);
    }
    return param;
  }

  static mapToObj(map) {
    let obj = Object.create(null);
    map[$forEach](dart.fn((key, value) => {
      if (core.Map.is(value)) {
        obj[key] = this.mapToObj(value);
      } else if (core.List.is(value)) {
        obj[key] = this.arrayMapToObj(value);
      } else {
        obj[key] = value;
      }
    }, dynamicAnddynamicToNull()));
    return obj;
  }

  static arrayMapToObj(list) {
    let array = new Array();
    list[$forEach](dart.fn(element => {
      array.push(this.encodeParam(element));
    }, dynamicToNull()));
    return array;
  }

}

//-------------- A -----------------
//****** Axis ******
Axis = {
  horizontal: "horizontal",
  vertical: "vertical"
}

//****** AnimationStatus ******
AnimationStatus = {
  dismissed: "dismissed",
  forward: "forward",
  reverse: "reverse",
  completed: "completed"
}

//****** Alignment ******
class Alignment extends DartClass {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }

  static new(x, y) {
    return new Alignment(x, y);
  }
}

Alignment.topLeft = new Alignment(-1.0, -1.0); 
Alignment.topCenter = new Alignment(0.0, -1.0); 
Alignment.topRight = new Alignment(1.0, -1.0); 
Alignment.centerLeft = new Alignment(-1.0, 0.0); 
Alignment.center = new Alignment(0.0, 0.0); 
Alignment.centerRight = new Alignment(1.0, 0.0); 
Alignment.bottomLeft = new Alignment(-1.0, 1.0); 
Alignment.bottomCenter = new Alignment(0.0, 1.0); 
Alignment.bottomRight = new Alignment(1.0, 1.0); 


//****** AlignmentDirectional ******
class AlignmentDirectional extends DartClass {
  constructor(start, y) {
    super();
    this.start = start;
    this.y = y;
  }
}
AlignmentDirectional.new = function (start, y) {
  return new AlignmentDirectional(start, y);
}

//****** AnnotatedRegion ******
class AnnotatedRegion extends DartClass {
  constructor({ key, child, value, sized } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.value = value;
    this.sized = sized;
  }
}
AnnotatedRegion.new = function ({ key, child, value, sized } = {}) {
  return new AnnotatedRegion({
    key:key,
    child:child,
    value:value,
    sized:sized,
  });
}

//****** assert ******
function assert(condition, message) {
  if (!condition) {
    message = message || "Assertion failed";
    if (typeof Error !== "undefined") {
      throw new Error(message);
    }
    throw message; // Fallback
  }
}

//-------------- B -----------------
//****** BlendMode ******
BlendMode = {
  clear: "clear",
  src: "src",
  dst: "dst",
  srcOver: "srcOver",
  dstOver: "dstOver",
  srcIn: "srcIn",
  dstIn: "dstIn",
  srcOut: "srcOut",
  dstOut: "dstOut",
  srcATop: "srcATop",
  dstATop: "dstATop",
  xor: "xor",
  plus: "plus",
  modulate: "modulate",
  screen: "screen",
  overlay: "overlay",
  darken: "darken",
  lighten: "lighten",
  colorDodge: "colorDodge",
  colorBurn: "colorBurn",
  hardLight: "hardLight",
  softLight: "softLight",
  difference: "difference",
  exclusion: "exclusion",
  multiply: "multiply",
  hue: "hue",
  saturation: "saturation",
  color: "color",
  luminosity: "luminosity"
}

//****** BoxFit ******
BoxFit = {
  fill: "fill",
  contain: "contain",
  cover: "cover",
  fitWidth: "fitWidth",
  fitHeight: "fitHeight",
  none: "none",
  scaleDown: "scaleDown"
}

//****** Brightness ******
Brightness = {
  dark: "dark",
  light: "light"
}

//****** BlurStyle ******
BlurStyle = {
  normal: "normal",
  solid: "solid",
  outer: "outer",
  inner: "inner"
}

//****** BorderStyle ******
BorderStyle = {
  none: "none",
  solid: "solid"
}

//****** BottomNavigationBarType ******
BottomNavigationBarType = {
  fixed: "fixed",
  shifting: "shifting"
}

//****** BoxShape ******
BoxShape = {
  circle: "circle",
  rectangle: "rectangle"
}

//****** ButtonTextTheme ******
ButtonTextTheme = {
  normal: "normal",
  accent: "accent",
  primary: "primary"
}

//****** ButtonBarLayoutBehavior ******
ButtonBarLayoutBehavior = {
  constrained: "constrained",
  padded: "padded"
}

//****** BoxDecoration ******
class BoxDecoration extends DartClass {
  constructor({ color, image, border, borderRadius, boxShadow, gradient, backgroundBlendMode, shape } = {}) {
    super();

    this.color = color;
    this.image = image;
    this.border = border;
    this.borderRadius = borderRadius;
    this.boxShadow = boxShadow;
    this.gradient = gradient;
    this.backgroundBlendMode = backgroundBlendMode;
    this.shape = shape;
  }
}
BoxDecoration.new = function ({ color, image, border, borderRadius, boxShadow, gradient, backgroundBlendMode, shape } = {}) {
  return new BoxDecoration({
    color:color,
    image:image,
    border:border,
    borderRadius:borderRadius,
    boxShadow:boxShadow,
    gradient:gradient,
    backgroundBlendMode:backgroundBlendMode,
    shape:shape,
  });
}

//****** BoxConstraints ******
class BoxConstraints extends DartClass {
  constructor({ minWidth, maxWidth, minHeight, maxHeight } = {}) {
    super();

    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }
}
BoxConstraints.new = function ({ minWidth, maxWidth, minHeight, maxHeight } = {}) {
  return new BoxConstraints({
    maxHeight:maxHeight,
    maxWidth:maxWidth,
    minHeight:minHeight,
    minWidth:minWidth,
  });
}

//****** BorderSide ******
class BorderSide extends DartClass {
  constructor({ color, width, style } = {}) {
    super();

    this.color = color;
    this.width = width;
    this.style = style;
  }
}
BorderSide.new = function ({ color, width, style } = {}) {
  return new BorderSide({
    color:color,
    width:width,
    style:style,
  });
}
BorderSide.none = function () {
  let v = new BorderSide();
  v.constructorName = "none";
  return v;
}

//****** BorderRadius ******
class BorderRadius extends DartClass {
  constructor() {
    super();
  }
}
BorderRadius.zero = function () {
  let v = new BorderRadius();
  v.constructorName = "zero";

  return v;
}
BorderRadius.all = function (radius) {
  let v = new BorderRadius();
  v.constructorName = "all";

  v.radius = radius;

  return v;
}
BorderRadius.circular = function (radius) {
  let v = new BorderRadius();
  v.constructorName = "circular";

  v.radius = radius;

  return v;
}
BorderRadius.vertical = function ({ top, bottom } = {}) {
  let v = new BorderRadius();
  v.constructorName = "vertical";

  v.top = top;
  v.bottom = bottom;

  return v;
}
BorderRadius.horizontal = function ({ left, right } = {}) {
  let v = new BorderRadius();
  v.constructorName = "horizontal";

  v.left = left;
  v.right = right;

  return v;
}
BorderRadius.only = function ({topLeft, topRight, bottomLeft, bottomRight} = {}) {
  let v = new BorderRadius();
  v.constructorName = "only";

  v.topLeft = topLeft;
  v.topRight = topRight;
  v.bottomLeft = bottomLeft;
  v.bottomRight = bottomRight;

  return v;
}

//****** BottomNavigationBarItem ******
class BottomNavigationBarItem extends DartClass {
  constructor({ icon, title, activeIcon, backgroundColor } = {}) {
    super();

    this.icon = icon;
    this.title = title;
    this.activeIcon = activeIcon;
    this.backgroundColor = backgroundColor;
  }
}
BottomNavigationBarItem.new = function ({ icon, title, activeIcon, backgroundColor } = {}) {
  return new BottomNavigationBarItem({
    icon:icon,
    title:title,
    activeIcon:activeIcon,
    backgroundColor:backgroundColor,
  });
}

//****** Border ******
class Border extends FlutterWidget {
  constructor({ top, right, bottom, left } = {}) {
    super();

    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
}
Border.new = function ({ top, right, bottom, left } = {}) {
  return new Border({
    top:top,
    right:right,
    bottom:bottom,
    left:left,
  });
};
Border.all = function ({ color, width, style }) {
  let side = new BorderSide({
    color: color,
    width: width,
    style: style
  });
  return new Border({
    top: side,
    right: side,
    bottom: side,
    left: side
  });
}

//****** BoxShadow ******
class BoxShadow extends DartClass {
  constructor({ color, offset, blurRadius, spreadRadius } = {}) {
    super();

    this.color = color;
    this.offset = offset;
    this.blurRadius = blurRadius;
    this.spreadRadius = spreadRadius;
  }
}
BoxShadow.new = function ({ color, offset, blurRadius, spreadRadius } = {}) {
  return new BoxShadow({
    color:color,
    offset:offset,
    blurRadius:blurRadius,
    spreadRadius:spreadRadius
  });
}

//****** BorderDirectional ******
class BorderDirectional extends DartClass {
  constructor({ top, start, end, bottom } = {}) {
    super();

    this.top = top;
    this.start = start;
    this.end = end;
    this.bottom = bottom;
  }
}
BorderDirectional.new = function ({ top, start, end, bottom } = {}) {
  return new BorderDirectional({
    top:top,
    start:start,
    end:end,
    bottom:bottom,
  });
}

//****** ButtonThemeData ******
class ButtonThemeData extends DartClass {
  constructor({ textTheme, minWidth, height, padding, shape, layoutBehavior, alignedDropdown, buttonColor,
                disabledColor, focusColor, hoverColor, highlightColor, splashColor, colorScheme, materialTapTargetSize, } = {}) {
    super();

    this.textTheme = textTheme;
    this.minWidth = minWidth;
    this.height = height;
    this.padding = padding;
    this.shape = shape;
    this.layoutBehavior = layoutBehavior;
    this.alignedDropdown = alignedDropdown;
    this.buttonColor = buttonColor;
    this.disabledColor = disabledColor;
    this.focusColor = focusColor;
    this.hoverColor = hoverColor;
    this.highlightColor = highlightColor;
    this.splashColor = splashColor;
    this.colorScheme = colorScheme;
    this.materialTapTargetSize = materialTapTargetSize;
  }
}
ButtonThemeData.new = function ({ textTheme, minWidth, height, padding, shape, layoutBehavior, alignedDropdown, buttonColor,
                                  disabledColor, focusColor, hoverColor, highlightColor, splashColor, colorScheme, materialTapTargetSize, } = {}) {
  return new ButtonThemeData({
    textTheme:textTheme,
    minWidth:minWidth,
    height:height,
    padding:padding,
    shape:shape,
    layoutBehavior:layoutBehavior,
    alignedDropdown:alignedDropdown,
    buttonColor:buttonColor,
    disabledColor:disabledColor,
    focusColor:focusColor,
    highlightColor:highlightColor,
    hoverColor:hoverColor,
    splashColor:splashColor,
    colorScheme:colorScheme,
    materialTapTargetSize:materialTapTargetSize,
  });
}

//-------------- C -----------------
//****** CrossAxisAlignment ******
CrossAxisAlignment = {
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}

//****** Curves ******
Curves = {
  linear: "linear",
  decelerate: "decelerate",
  ease: "ease",
  easeIn: "easeIn",
  easeOut: "easeOut",
  easeInOut: "easeInOut",
  fastOutSlowIn: "fastOutSlowIn",
  bounceIn: "bounceIn",
  bounceOut: "bounceOut",
  bounceInOut: "bounceInOut",
  elasticIn: "elasticIn",
  elasticOut: "elasticOut",
  elasticInOut: "elasticInOut"
}

//****** Clip ******
Clip = {
  none: "none",
  hardEdge: "hardEdge",
  antiAlias: "antiAlias",
  antiAliasWithSaveLayer: "antiAliasWithSaveLayer"
}

//****** CollapseMode ******
CollapseMode = {
  parallax: "parallax",
  pin: "pin",
  none: "none",
}

//****** CrossFadeState ******
CrossFadeState = {
  showFirst: "showFirst",
  showSecond: "showSecond",
}

//****** Color ******
class Color extends DartClass {
  constructor(value) {
    super();
    this.value = value;
  }
}

Color.fromARGB = function (a, r, g, b) {
  console.log("Color.fromARGB");
  let c = new Color();
  c.constructorName = "fromARGB";
  c.a = a;
  c.r = r;
  c.g = g;
  c.b = b;
  return c;
};

Color.fromRGBO = function (r, g, b, opacity) {
  console.log("Color.fromRGBO");
  let c = new Color();
  c.constructorName = "fromRGBO";
  c.opacity = opacity;
  c.r = r;
  c.g = g;
  c.b = b;

  return c;
};
Color.fromJson = function (mapObj) {
  console.log("Color.fromJson");
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new Color();

  for (var p in mapObj) {
    if (mapObj.hasOwnProperty(p)) {
      let v = mapObj[p];
      obj[p] = v;
    }
  }

  return obj;
};

//****** Color ******
class Colors {}
Colors.transparent = new Color(0x00000000);
Colors.black = new Color(0xff000000);
Colors.black87 = new Color(0xdd000000);
Colors.black54 = new Color(0x8a000000);
Colors.black45 = new Color(0x73000000);
Colors.black38 = new Color(0x61000000);
Colors.black26 = new Color(0x42000000);
Colors.black12 = new Color(0x1f000000);
Colors.white = new Color(0xffffffff);
Colors.white70 = new Color(0xb3ffffff);
Colors.white54 = new Color(0x8affffff);
Colors.white30 = new Color(0x4dffffff);
Colors.white24 = new Color(0x3dffffff);
Colors.white12 = new Color(0x1fffffff);
Colors.white10 = new Color(0x1affffff);
Colors.red = new Color(0xFFF44336);
Colors.redAccent = new Color(0xFFFF5252);
Colors.pink = new Color(0xFFE91E63);
Colors.pinkAccent = new Color(0xFFFF4081);
Colors.purple = new Color(0xFF9C27B0);
Colors.purpleAccent = new Color(0xFFE040FB);
Colors.deepPurple = new Color(0xFF673AB7);
Colors.deepPurpleAccent = new Color(0xFF7C4DFF);
Colors.indigo = new Color(0xFF3F51B5);
Colors.indigoAccent = new Color(0xFF536DFE);
Colors.blue = new Color(0xFF2196F3);
Colors.blueAccent = new Color(0xFF448AFF);
Colors.lightBlue = new Color(0xFF03A9F4);
Colors.lightBlueAccent = new Color(0xFF40C4FF);
Colors.cyan = new Color(0xFF00BCD4);
Colors.cyanAccent = new Color(0xFF18FFFF);
Colors.teal = new Color(0xff009688);
Colors.tealAccent = new Color(0xFF64FFDA);
Colors.green = new Color(0xFF4CAF50);
Colors.greenAccent = new Color(0xFF69F0AE);
Colors.lightGreen = new Color(0xFF8BC34A);
Colors.lightGreenAccent = new Color(0xFFB2FF59);
Colors.lime = new Color(0xFFCDDC39);
Colors.limeAccent = new Color(0xFFEEFF41);
Colors.yellow = new Color(0xFFFFEB3B);
Colors.yellowAccent = new Color(0xFFFFFF00);
Colors.amber = new Color(0xFFFFC107);
Colors.amberAccent = new Color(0xFFFFD740);
Colors.orange = new Color(0xFFFF9800);
Colors.orangeAccent = new Color(0xFFFFAB40);
Colors.deepOrange = new Color(0xFFFF5722);
Colors.deepOrangeAccent = new Color(0xFFFF6E40);
Colors.brown = new Color(0xFF795548);
Colors.grey = new Color(0xFF9E9E9E);
Colors.blueGrey = new Color(0xFF607D8B);


//****** ColorFilter ******
class ColorFilter extends DartClass {
  constructor(color, blendMode) {
    super();

    this.color = color;
    this.blendMode = blendMode;
  }
}
ColorFilter.new = function (color, blendMode) {
  return new ColorFilter(color, blendMode);
};
ColorFilter.mode = function (color, blendMode) {
  let v = new ColorFilter(color, blendMode);
  v.constructorName = "mode";
  return v;
};

//****** CircularNotchedRectangle ******
class CircularNotchedRectangle extends DartClass {
  constructor() {
    super();
  }
}
CircularNotchedRectangle.new = function () {
  return new CircularNotchedRectangle();
};

//****** CircleAvatar ******
class CircleAvatar extends DartClass {
  constructor({ key, child, backgroundColor, backgroundImage, foregroundColor, radius, minRadius, maxRadius } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.backgroundColor = backgroundColor;
    this.backgroundImage = backgroundImage;
    this.foregroundColor = foregroundColor;
    this.radius = radius;
    this.minRadius = minRadius;
    this.maxRadius = maxRadius;
  }
}
CircleAvatar.new = function ({ key, child, backgroundColor, backgroundImage, foregroundColor, radius, minRadius, maxRadius } = {}) {
  return new CircleAvatar({
    key:key,
    child:child,
    backgroundColor:backgroundColor,
    backgroundImage:backgroundImage,
    foregroundColor:foregroundColor,
    radius:radius,
    minRadius:minRadius,
    maxRadius:maxRadius,
  });
};

//****** Chip ******
class Chip extends DartClass {
  constructor({ key, avatar, label, labelStyle, labelPadding, deleteIcon,onDeleted, deleteIconColor,deleteButtonTooltipMessage,
                shape,clipBehavior,backgroundColor, padding,materialTapTargetSize,elevation} = {}) {
    super();

    this.key = key;
    this.avatar = avatar;
    this.label = label;
    this.labelStyle = labelStyle;
    this.labelPadding = labelPadding;
    this.deleteIcon = deleteIcon;
    this.onDeleted = onDeleted;
    this.deleteIconColor = deleteIconColor;
    this.deleteButtonTooltipMessage = deleteButtonTooltipMessage;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.backgroundColor = backgroundColor;
    this.padding = padding;
    this.materialTapTargetSize = materialTapTargetSize;
    this.elevation = elevation;
  }
}
Chip.new = function ({ key, avatar, label, labelStyle, labelPadding, deleteIcon,onDeleted, deleteIconColor,deleteButtonTooltipMessage,
                       shape,clipBehavior,backgroundColor, padding,materialTapTargetSize,elevation} = {}) {
  return new Chip({
    key:key,
    avatar:avatar,
    label:label,
    labelStyle:labelStyle,
    labelPadding:labelPadding,
    deleteIcon:deleteIcon,
    deleteButtonTooltipMessage:deleteButtonTooltipMessage,
    onDeleted:onDeleted,
    deleteIconColor:deleteIconColor,
    shape:shape,
    clipBehavior:clipBehavior,
    backgroundColor:backgroundColor,
    padding:padding,
    materialTapTargetSize:materialTapTargetSize,
    elevation:elevation,
  });
};

//****** ColorScheme ******
class ColorScheme extends DartClass {
  constructor({ primary, primaryVariant, secondary, secondaryVariant, surface, background, error,
                onPrimary, onSecondary, onSurface, onBackground, onError, brightness, } = {}) {
    super();

    this.primary = primary;
    this.primaryVariant = primaryVariant;
    this.secondary = secondary;
    this.secondaryVariant = secondaryVariant;
    this.surface = surface;
    this.background = background;
    this.error = error;
    this.onPrimary = onPrimary;
    this.onSecondary = onSecondary;
    this.onSurface = onSurface;
    this.onBackground = onBackground;
    this.onError = onError;
    this.brightness = brightness;
  }
}

ColorScheme.new = function ({ primary, primaryVariant, secondary, secondaryVariant, surface, background, error,
                              onPrimary, onSecondary, onSurface, onBackground, onError, brightness, } = {}) {
  return new ColorScheme({
    primary:primary,
    primaryVariant:primaryVariant,
    secondary:secondary,
    secondaryVariant:secondaryVariant,
    surface:surface,
    background:background,
    error:error,
    onPrimary:onPrimary,
    onSecondary:onSecondary,
    onSurface:onSurface,
    onBackground:onBackground,
    onError:onError,
    brightness:brightness,
  });
};
ColorScheme.fromSwatch = function ({primarySwatch,accentColor,cardColor,backgroundColor, errorColor,brightness, } = {}) {
  let v = new ColorScheme();
  v.constructorName = "fromSwatch";

  v.primarySwatch = primarySwatch;
  v.accentColor = accentColor;
  v.cardColor = cardColor;
  v.backgroundColor = backgroundColor;
  v.errorColor = errorColor;
  v.brightness = brightness;

  return v;
};

//****** ColorScheme ******
class ClipRRect extends DartClass {
  constructor({ key, borderRadius, clipper, clipBehavior, child,} = {}) {
    super();

    this.key = key;
    this.borderRadius = borderRadius;
    this.clipper = clipper;
    this.clipBehavior = clipBehavior;
    this.child = child;
  }
}
ClipRRect.new = function ({ key, borderRadius, clipper, clipBehavior, child,} = {}) {
  return new ClipRRect({
    key:key,
    borderRadius:borderRadius,
    clipBehavior:clipBehavior,
    clipper:clipper,
    child:child,
  });
};

//-------------- D -----------------
//****** DragStartBehavior ******
DragStartBehavior = {
  down: "down",
  start: "start",
};

//****** DecorationPosition ******
DecorationPosition = {
  background: "background",
  foreground: "foreground",
};

//****** DropdownMenuItem ******
class DropdownMenuItem extends DartClass {
  constructor({ key, value, child } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.child = child;
  }
}
DropdownMenuItem.new = function ({ key, value, child } = {}) {
  return new DropdownMenuItem({
    key:key,
    value:value,
    child:child,
  });
};

//-------------- E -----------------
//****** EdgeInsets ******
class EdgeInsets extends DartClass {
  constructor(left, top, right, bottom) {
    super();
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  static zero() {
    let v = new EdgeInsets();
    v.constructorName = "zero";
    return v;
  };

  static fromLTRB(left, top, right, bottom) {
    let v = new EdgeInsets();
    v.constructorName = "fromLTRB";
    v.left = left;
    v.top = top;
    v.right = right;
    v.bottom = bottom;
    return v;
  };

  static all(value) {
    let v = new EdgeInsets();
    v.constructorName = "all";
    v.value = value;
    return v;
  };

  static only({ left, top, right, bottom } = {}) {
    let v = new EdgeInsets();
    v.constructorName = "only";
    v.left = left;
    v.top = top;
    v.right = right;
    v.bottom = bottom;
    return v;
  };

  static symmetric({ vertical, horizontal } = {}) {
    let v = new EdgeInsets();
    v.constructorName = "symmetric";
    v.vertical = vertical;
    v.horizontal = horizontal;
    return v;
  };

  static fromJson(mapObj) {
    if (mapObj == null) {
      return null;
    }
    let obj = new EdgeInsets;
    for (let p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        obj[p] = mapObj[p];
      }
    }
    return obj;
  };
}

//****** EdgeInsetsDirectional ******
class EdgeInsetsDirectional extends DartClass {
  constructor(start, top, end, bottom) {
    super();

    this.start = start;
    this.top = top;
    this.end = end;
    this.bottom = bottom;
  }
}
EdgeInsetsDirectional.new = function (start, top, end, bottom) {
  return new EdgeInsetsDirectional(start, top, end, bottom);
};
EdgeInsetsDirectional.fromSTEB = function ({ start, top, end, bottom } = {}) {
  let v = new EdgeInsetsDirectional();
  v.constructorName = "fromSTEB";

  v.start = start;
  v.top = top;
  v.end = end;
  v.bottom = bottom;
  return v;
};
EdgeInsetsDirectional.only = function ({ start = 0.0, top = 0.0, end = 0.0, bottom = 0.0 } = {}) {
  let v = new EdgeInsetsDirectional();
  v.constructorName = "only";
  v.start = start;
  v.top = top;
  v.end = end;
  v.bottom = bottom;
  return v;
};

//-------------- F -----------------
//****** FlutterLogoStyle ******
FlutterLogoStyle = {
  horizontal: "horizontal",
  markOnly: "markOnly",
  stacked: "stacked",
};

//****** FontWeight ******
FontWeight = {
  bold: "bold",
  normal: "normal",
  w100: "w100",
  w200: "w200",
  w300: "w300",
  w400: "w500",
  w500: "w500",
  w600: "w600",
  w700: "w700",
  w800: "w800",
  w900: "w900"
};

//****** FontStyle ******
FontStyle = {
  italic: "italic",
  normal: "normal"
};

//****** FilterQuality ******
FilterQuality = {
  none: "none",
  low: "low",
  medium: "medium",
  high: "high"
};

//****** FloatingActionButtonLocation ******
FloatingActionButtonLocation = {
  endDocked: "endDocked",
  centerDocked: "centerDocked",
  endFloat: "endFloat",
  centerFloat: "centerFloat",
  startTop: "startTop",
  miniStartTop: "miniStartTop",
  endTop: "endTop",
};

//****** FlexColumnWidth ******
class FlexColumnWidth extends DartClass {
  constructor(value) {
    super();

    this.value = value;
  }
}
FlexColumnWidth.new = function (value) {
  return new FlexColumnWidth(value);
};

//****** FixedColumnWidth ******
class FixedColumnWidth extends FlutterWidget {
  constructor(value) {
    super();

    this.value = value;
  }
}
FixedColumnWidth.new = function (value) {
  return new FixedColumnWidth(value);
};

//****** File ******
class File extends DartClass {
  constructor(path) {
    super();
    this.path = path;
  }
}
File.new = function (path) {
  return new File(path);
};
File.fromUri = function (uri) {
  let v = new File();
  v.constructorName = "fromUri";

  v.uri = uri;

  return v;
};
File.fromRawPath = function (rawPath) {
  let v = new File();
  v.constructorName = "fromRawPath";

  v.rawPath = rawPath;

  return v;
};

//-------------- G -----------------
//-------------- H -----------------
//****** HitTestBehavior ******
HitTestBehavior = {
  deferToChild: "deferToChild",
  opaque: "opaque",
  translucent: "translucent",
};


//-------------- I -----------------
//****** ImageRepeat ******
ImageRepeat = {
  repeat: "repeat",
  repeatX: "repeatX",
  repeatY: "repeatY",
  noRepeat: "noRepeat"
};

//****** ImageShader ******
class ImageShader extends DartClass {
  constructor({ image, tmx, tmy, matrix4 } = {}) {
    super();

    this.image = image;
    this.tmx = tmx;
    this.tmy = tmy;
    this.matrix4 = matrix4;
  }
}
ImageShader.new = function ({ image, tmx, tmy, matrix4 } = {}) {
  return new ImageShader({
    image:image,
    tmx:tmx,
    tmy:tmy,
    matrix4:matrix4,
  });
};

//****** IconData ******
class IconData extends DartClass {
  constructor(codePoint, { fontFamily, fontPackage, matchTextDirection } = {}) {
    super();

    this.codePoint = codePoint;
    this.fontFamily = fontFamily;
    this.fontPackage = fontPackage;
    this.matchTextDirection = matchTextDirection;
  }
}
IconData.new = function (codePoint, { fontFamily, fontPackage, matchTextDirection } = {}) {
  return new IconData(codePoint, {
    fontFamily:fontFamily,
    fontPackage:fontPackage,
    matchTextDirection:matchTextDirection,
  });
};

//****** InputDecorationTheme ******
class InputDecorationTheme extends DartClass {
  constructor({labelStyle,helperStyle,hintStyle,errorStyle,errorMaxLines,hasFloatingPlaceholder,isDense,contentPadding,isCollapsed, prefixStyle,suffixStyle,
                counterStyle,filled,fillColor,errorBorder,focusedBorder,focusedErrorBorder, disabledBorder, enabledBorder, border} = {}) {
    super();

    this.labelStyle = labelStyle;
    this.helperStyle = helperStyle;
    this.hintStyle = hintStyle;
    this.errorStyle = errorStyle;
    this.errorMaxLines = errorMaxLines;
    this.hasFloatingPlaceholder = hasFloatingPlaceholder;
    this.isDense = isDense;
    this.contentPadding = contentPadding;
    this.isCollapsed = isCollapsed;
    this.prefixStyle = prefixStyle;
    this.suffixStyle = suffixStyle;
    this.counterStyle = counterStyle;
    this.filled = filled;
    this.fillColor = fillColor;
    this.errorBorder = errorBorder;
    this.focusedBorder = focusedBorder;
    this.focusedErrorBorder = focusedErrorBorder;
    this.disabledBorder = disabledBorder;
    this.enabledBorder = enabledBorder;
    this.border = border;
  }
}
InputDecorationTheme.new = function ({labelStyle,helperStyle,hintStyle,errorStyle,errorMaxLines,hasFloatingPlaceholder,isDense,contentPadding,isCollapsed, prefixStyle,suffixStyle,
                                       counterStyle,filled,fillColor,errorBorder,focusedBorder,focusedErrorBorder, disabledBorder, enabledBorder, border} = {}) {
  return new InputDecorationTheme({
    labelStyle:labelStyle,
    helperStyle:helperStyle,
    hintStyle:hintStyle,
    errorStyle:errorStyle,
    errorBorder:errorBorder,
    errorMaxLines:errorMaxLines,
    hasFloatingPlaceholder:hasFloatingPlaceholder,
    isDense:isDense,
    contentPadding:contentPadding,
    isCollapsed:isCollapsed,
    prefixStyle:prefixStyle,
    suffixStyle:suffixStyle,
    counterStyle:counterStyle,
    fillColor:fillColor,
    filled:filled,
    focusedBorder:focusedBorder,
    focusedErrorBorder:focusedErrorBorder,
    disabledBorder:disabledBorder,
    enabledBorder:enabledBorder,
    border:border,
  });
};
InputDecorationTheme.fromJson = function (mapObj) {
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new InputDecorationTheme({
    labelStyle: mapObj["labelStyle"],
    helperStyle: mapObj["helperStyle"],
    hintStyle: mapObj["hintStyle"],
    errorStyle: mapObj["errorStyle"],
    errorMaxLines: mapObj["errorMaxLines"],
    hasFloatingPlaceholder: mapObj["hasFloatingPlaceholder"],
    isDense: mapObj["isDense"],
    contentPadding: mapObj["contentPadding"],
    isCollapsed: mapObj["isCollapsed"],
    prefixStyle: mapObj["prefixStyle"],
    suffixStyle: mapObj["suffixStyle"],
    counterStyle: mapObj["counterStyle"],
    filled: mapObj["filled"],
    fillColor: mapObj["fillColor"],
    errorBorder: mapObj["errorBorder"],
    focusedBorder: mapObj["focusedBorder"],
    focusedErrorBorder: mapObj["focusedErrorBorder"],
    disabledBorder: mapObj["disabledBorder"],
    enabledBorder: mapObj["enabledBorder"],
    border: mapObj["border"]
  });

  return obj;
};

//****** IconTheme ******
class IconTheme extends DartClass {
  constructor({ key, data, child } = {}) {
    super();

    this.key = key;
    this.data = data;
    this.child = child;
  }
}
IconTheme.new = function ({ key, data, child } = {}) {
  return new IconTheme({
    key:key,
    data:data,
    child:child,
  });
};
IconTheme.of = function (context) {
  return context.iconThemeData;
};

//****** IconThemeData ******
class IconThemeData extends DartClass {
  constructor({ color, opacity, size } = {}) {
    super();

    this.color = color;
    this.opacity = opacity;
    this.size = size;
  }
}
IconThemeData.new = function ({ color, opacity, size } = {}) {
  return new IconThemeData({
    color:color,
    opacity:opacity,
    size:size,
  });
};
//TODO
IconThemeData.fromJson = function (mapObj) {
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new IconThemeData();

  for (let p in mapObj) {
    if (mapObj.hasOwnProperty(p)) {
      let v = mapObj[p];
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

//****** IconThemeData ******
class InputBorder extends DartClass {
  constructor() {
    super();
  }
}
InputBorder.new = function (args) {
  return new InputBorder(args);
};
InputBorder.none = function () {
  let v = new InputBorder();
  v.staticFunctionName = "none";

  return v;
};

//-------------- J -----------------
//-------------- K -----------------
//****** Key ******
class Key extends DartClass {
  constructor(value) {
    super();
    this.value = value;
  }
}
Key.new = function (value) {
  return new Key(value);
};

//-------------- L -----------------
//****** LinearGradient ******
class LinearGradient extends DartClass {
  constructor({ begin, end, colors, stops, tileMode } = {}) {
    super();

    this.begin = begin;
    this.end = end;
    this.colors = colors;
    this.stops = stops;
    this.tileMode = tileMode;
  }
}
LinearGradient.new = function ({ begin, end, colors, stops, tileMode } = {}) {
  return new LinearGradient({
    begin:begin,
    end:end,
    colors:colors,
    stops:stops,
    tileMode:tileMode,
  });
};

//-------------- M -----------------
//****** MainAxisAlignment ******
MainAxisAlignment = {
  start: "start",
  end: "end",
  center: "center",
  spaceBetween: "spaceBetween",
  spaceAround: "spaceAround",
  spaceEvenly: "spaceEvenly"
};

//****** MainAxisSize ******
MainAxisSize = {
  min: "min",
  max: "max"
};

//****** MaterialTapTargetSize ******
MaterialTapTargetSize = {
  padded: "padded",
  shrinkWrap: "shrinkWrap"
};

//****** MaskFilter ******
class MaskFilter extends DartClass {
  constructor(style, sigma) {
    super();

    this.style = style;
    this.sigma = sigma;
  }
}
MaskFilter.new = function (style, sigma) {
  return new MaskFilter(style, sigma);
};
MaskFilter.blur = function (style, sigma) {
  let v = new MaskFilter(style, sigma);
  v.constructorName = "blur";
  return v;
};

//****** Matrix4 ******
class Matrix4 extends DartClass {
  constructor({ arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15 } = {}) {
    super();

    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
    this.arg5 = arg5;
    this.arg6 = arg6;
    this.arg7 = arg7;
    this.arg8 = arg8;
    this.arg9 = arg9;
    this.arg10 = arg10;
    this.arg11 = arg11;
    this.arg12 = arg12;
    this.arg13 = arg13;
    this.arg14 = arg14;
    this.arg15 = arg15;
  }

  scale(x, y, z) {
    let sx = null;
    let sy = null;
    let sz = null;
    let sw = x instanceof Vector4 ? x.w : 1.0;
    if (x instanceof Vector3) {
      sx = x.x;
      sy = x.y;
      sz = x.z;
    } else if (x instanceof Vector4) {
      sx = x.x;
      sy = x.y;
      sz = x.z;
    } else if (typeof x == "number") {
      sx = x;
      sy = y == null ? x : y;
      sz = z == null ? x : z;
    }

    this.arg0 *= sx;
    this.arg1 *= sx;
    this.arg2 *= sx;
    this.arg3 *= sx;
    this.arg4 *= sy;
    this.arg5 *= sy;
    this.arg6 *= sy;
    this.arg7 *= sy;
    this.arg8 *= sz;
    this.arg9 *= sz;
    this.arg10 *= sz;
    this.arg11 *= sz;
    this.arg12 *= sw;
    this.arg13 *= sw;
    this.arg14 *= sw;
    this.arg15 *= sw;
  }
}
Matrix4.new = function ({ arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15 } = {}) {
  return new Matrix4({
    arg0:arg0,
    arg1:arg1,
    arg2:arg2,
    arg3:arg3,
    arg4:arg4,
    arg5:arg5,
    arg6:arg6,
    arg7:arg7,
    arg8:arg8,
    arg9:arg9,
    arg10:arg10,
    arg11:arg11,
    arg12:arg12,
    arg13:arg13,
    arg14:arg14,
    arg15:arg15,
  });
};

Matrix4.identity = function () {
  let v = new Matrix4();
  v.arg0 = 1.0;
  v.arg1 = 0.0;
  v.arg2 = 0.0;
  v.arg3 = 0.0;
  v.arg4 = 0.0;
  v.arg5 = 1.0;
  v.arg6 = 0.0;
  v.arg7 = 0.0;
  v.arg8 = 0.0;
  v.arg9 = 0.0;
  v.arg10 = 1.0;
  v.arg11 = 0.0;
  v.arg12 = 0.0;
  v.arg13 = 0.0;
  v.arg14 = 0.0;
  v.arg15 = 1.0;
  return v;
};
Matrix4.fromList = function (values) {
  let v = new Matrix4();
  v.constructorName = "fromList";
  v.values = List_double_values;
  return v;
};
Matrix4.zero = function () {
  let v = new Matrix4();
  v.constructorName = "zero";
  return v;
};
Matrix4.columns = function (arg0, arg1, arg2, arg3) {
  let v = new Matrix4();
  v.constructorName = "columns";

  v.arg0 = arg0;
  v.arg1 = arg1;
  v.arg2 = arg2;
  v.arg3 = arg3;

  return v;
};
Matrix4.outer = function (u, v) {
  let j = new Matrix4();
  j.constructorName = "outer";

  j.u = u;
  j.v = v;

  return j;
};
Matrix4.rotationX = function (radians) {
  let v = new Matrix4();
  v.constructorName = "rotationX";

  v.radians = radians;

  return v;
};
Matrix4.rotationY = function (radians) {
  let v = new Matrix4();
  v.constructorName = "rotationY";

  v.radians = radians;
  return v;
};
Matrix4.rotationZ = function (radians) {
  let v = new Matrix4();
  v.constructorName = "rotationZ";

  v.radians = radians;

  return v;
};
Matrix4.translation = function (translation) {
  let v = new Matrix4();
  v.constructorName = "translation";

  v.translation = translation;

  return v;
};
Matrix4.translationValues = function (x, y, z) {
  let v = new Matrix4();
  v.constructorName = "translationValues";

  v.x = x;
  v.y = y;
  v.z = z;

  return v;
};
Matrix4.diagonal3 = function (scale) {
  let v = new Matrix4();
  v.constructorName = "diagonal3";

  v.scale = scale;

  return v;
};
Matrix4.diagonal3Values = function (x, y, z) {
  let v = new Matrix4();
  v.constructorName = "diagonal3Values";

  v.x = x;
  v.y = y;
  v.z = z;

  return v;
};
Matrix4.skewX = function (alpha) {
  let v = new Matrix4();
  v.constructorName = "skewX";

  v.alpha = alpha;

  return v;
};
Matrix4.skewY = function (beta) {
  let v = new Matrix4();
  v.constructorName = "skewY";

  v.beta = beta;
  return v;
};
Matrix4.skew = function (alpha, beta) {
  let v = new Matrix4();
  v.constructorName = "skew";

  v.alpha = alpha;
  v.beta = beta;

  return v;
};
Matrix4.compose = function (translation, rotation, scale) {
  let v = new Matrix4();
  v.constructorName = "compose";

  v.translation = translation;
  v.rotation = rotation;
  v.scale = scale;

  return v;
};


//-------------- N -----------------
//****** NetworkAssetBundle ******
class NetworkAssetBundle extends DartClass {
  constructor(baseUrl) {
    super();

    this.baseUrl = baseUrl;
  }
}
NetworkAssetBundle.new = function (baseUrl) {
  return new NetworkAssetBundle(baseUrl);
};

//****** NotificationListener ******
class NotificationListener extends DartClass {
  constructor({ key, child, onNotification, } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.onNotification = onNotification;
  }
}
NotificationListener.new = function ({ key, child, onNotification, } = {}) {
  return new NotificationListener({
    key:key,
    child:child,
    onNotification:onNotification,
  });
};

//****** Notification ******
class Notification extends DartClass {
  constructor() {
    super();
  }
}
Notification.new = function () {
  return new Notification();
};

//-------------- O -----------------
//****** Overflow ******
Overflow = {
  visible: "visible",
  clip: "clip"
};

//****** Offset ******
class Offset extends DartClass {
  constructor(dx, dy) {
    super();

    this.dx = dx;
    this.dy = dy;
  }
}
Offset.new = function (dx, dy) {
  return new Offset(dx, dy);
};

//****** Opacity ******
class Opacity extends DartClass {
  constructor({ key, opacity, alwaysIncludeSemantics, child } = {}) {
    super();

    this.key = key;
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    this.child = child;
  }
}
Opacity.new = function ({ key, opacity, alwaysIncludeSemantics, child } = {}) {
  return new Opacity({
    key:key,
    opacity:opacity,
    alwaysIncludeSemantics:alwaysIncludeSemantics,
    child:child,
  });
};

//-------------- P -----------------
//****** PaintingStyle ******
PaintingStyle = {
  fill: "fill",
  stroke: "stroke"
};

//****** Paint ******
class Paint {
  constructor(argsMap) {
    argsMap.forEach((k, v) => {
      this[k] = v;
    });
  }
}
Paint.new = function (args) {
  return new Paint(args);
};

//****** PlatformAssetBundle ******
class PlatformAssetBundle extends DartClass {
  constructor() {
    super();
  }
}
PlatformAssetBundle.new = function () {
  return new PlatformAssetBundle();
};

//****** Positioned ******
class Positioned extends DartClass {
  constructor({ key, left, top, right, bottom, width, height, child } = {}) {
    super();

    this.key = key;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.child = child;
  }
}
Positioned.new = function ({ key, left, top, right, bottom, width, height, child } = {}) {
  return new Positioned({
    key:key,
    left:left,
    top:top,
    right:right,
    bottom:bottom,
    width:width,
    height:height,
    child:child,
  });
};
Positioned.fromRect = function ({ key, rect, child } = {}) {
  let v = new Positioned();
  v.constructorName = "fromRect";
  v.key = key;
  v.left = rect.left;
  v.top = rect.top;
  v.width = rect.width;
  v.height = rect.height;
  v.child = child;
  return v;
};

//****** PreferredSize ******
class PreferredSize extends DartClass {
  constructor({ key, child, preferredSize, } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.preferredSize = preferredSize;
  }
}
PreferredSize.new = function ({ key, child, preferredSize, } = {}) {
  return new PreferredSize({
    key:key,
    child:child,
    preferredSize:preferredSize,
  });
};

//****** PreferredSize ******
class PreferredSizeWidget extends DartClass {
  constructor() {
    super();
  }
}
PreferredSizeWidget.new = function () {
  return new PreferredSizeWidget();
};


//-------------- Q -----------------
//****** Quaternion ******
class Quaternion extends DartClass {
  constructor(x, y, z, w) {
    super();

    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}
Quaternion.new = function (x, y, z, w) {
  return new Quaternion(x, y, z, w);
};

//-------------- R -----------------
//****** RadialGradient ******
class RadialGradient extends DartClass {
  constructor({ center, radius, colors, stops, tileMode, focal, focalRadius} = {}) {
    super();

    this.center = center;
    this.radius = radius;
    this.colors = colors;
    this.stops = stops;
    this.tileMode = tileMode;
    this.focal = focal;
    this.focalRadius = focalRadius;
  }
}
RadialGradient.new = function ({ center, radius, colors, stops, tileMode, focal, focalRadius} = {}) {
  return new RadialGradient({
    center:center,
    radius:radius,
    colors:colors,
    stops:stops,
    tileMode:tileMode,
    focal:focal,
    focalRadius:focalRadius,
  });
};

//****** Rect ******
class Rect extends DartClass {
  constructor() {
    super();
  }
}
Rect.fromCenter = function ({ center, width,height } = {}) {
  let v = new Rect();
  v.constructorName = "fromCenter";

  v.center = center;
  v.width = width;
  v.height = height;

  return v;
};
Rect.fromLTRB = function (left, top, right, bottom) {
  let v = new Rect();
  v.constructorName = "fromLTRB";

  v.left = left;
  v.top = top;
  v.right = right;
  v.bottom = bottom;

  return v;
};
Rect.fromLTWH = function (left, top, width, height) {
  let v = new Rect();
  v.constructorName = "fromLTWH";

  v.left = left;
  v.top = top;
  v.width = width;
  v.height = height;

  return v;
};
Rect.fromCircle = function ({ center, radius } = {}) {
  let v = new Rect();
  v.constructorName = "fromCircle";

  v.center = center;
  v.radius = radius;

  return v;
};
Rect.fromPoints = function (a, b) {
  let v = new Rect();
  v.constructorName = "fromPoints";

  v.a = a;
  v.b = b;

  return v;
};
Rect.zero = function () {
  let v = new Rect();
  v.constructorName = "zero";

  return v;
};

//****** Radius ******
class Radius extends DartClass {
  constructor() {
    super();
  }
}
Radius.circular = function (radius) {
  let v = new Radius();
  v.constructorName = "circular";
  v.radius = radius;

  return v;
};
Radius.elliptical = function (x, y) {
  let v = new Radius();
  v.constructorName = "elliptical";

  v.x = x;
  v.y = y;

  return v;
};
Radius.zero = function () {
  let v = new Radius();
  v.constructorName = "zero";

  return v;
};

//-------------- S -----------------
//****** StackFit ******
StackFit = {
  loose: "loose",
  expand: "expand",
  passthrough: "passthrough"
};

//****** StrokeCap ******
StrokeCap = {
  butt: "butt",
  round: "round",
  square: "square"
};

//****** StrokeJoin ******
StrokeJoin = {
  miter: "miter",
  round: "round",
  bevel: "bevel"
};

//****** StretchMode ******
StretchMode = {
  zoomBackground: "zoomBackground",
  blurBackground: "blurBackground",
  fadeTitle: "fadeTitle",
};

//****** SweepGradient ******
class SweepGradient extends DartClass {
  constructor({ center, startAngle, endAngle, colors, stops, tileMode } = {}) {
    super();

    this.center = center;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.colors = colors;
    this.stops = stops;
    this.tileMode = tileMode;
  }
}
SweepGradient.new = function ({ center, startAngle, endAngle, colors, stops, tileMode } = {}) {
  return new SweepGradient({
    center:center,
    startAngle:startAngle,
    endAngle:endAngle,
    colors:colors,
    stops:stops,
    tileMode:tileMode,
  });
};

//****** Size ******
class Size extends DartClass {
  constructor(width, height) {
    super();

    this.width = width;
    this.height = height;
  }
}
Size.new = function (width, height) {
  return new Size(width, height);
};
Size.fromHeight = function (height) {
  let v = new Size();
  v.constructorName = "fromHeight";
  v.height=height;
  return v;
};
Size.fromWidth = function (width) {
  let v = new Size();
  v.constructorName = "fromWidth";
  v.width=width;
  return v;
};
Size.square = function (dimension) {
  let v = new Size();
  v.constructorName = "square";
  v.dimension=dimension;
  return v;
};
Size.fromRadius = function (radius) {
  let v = new Size();
  v.constructorName = "fromRadius";
  v.radius=radius;
  return v;
};
Size.zero = function () {
  let v = new Size();
  v.constructorName = "zero";
  return v;
};
Size.fromJson = function (mapObj) {
  if (mapObj == null || mapObj == undefined) {
    return null;
  }

  let obj = new EdgeInsets();

  for (var p in mapObj) {
    if (mapObj.hasOwnProperty(p)) {
      let v = mapObj[p];
      obj[p] = v;
    }
  }

  return obj;
};

//****** SystemUiOverlayStyle ******
class SystemUiOverlayStyle extends DartClass {
  constructor({ systemNavigationBarColor,systemNavigationBarDividerColor,systemNavigationBarIconBrightness, statusBarColor, statusBarBrightness, statusBarIconBrightness} = {}) {
    super();

    this.systemNavigationBarColor = systemNavigationBarColor;
    this.systemNavigationBarDividerColor = systemNavigationBarDividerColor;
    this.systemNavigationBarIconBrightness = systemNavigationBarIconBrightness;
    this.statusBarColor = statusBarColor;
    this.statusBarBrightness = statusBarBrightness;
    this.statusBarIconBrightness = statusBarIconBrightness;
  }
}
SystemUiOverlayStyle.new = function ({ systemNavigationBarColor,systemNavigationBarDividerColor,systemNavigationBarIconBrightness, statusBarColor, statusBarBrightness, statusBarIconBrightness} = {}) {
  return new SystemUiOverlayStyle({
    statusBarBrightness:statusBarBrightness,
    statusBarColor:statusBarColor,
    statusBarIconBrightness:statusBarIconBrightness,
    systemNavigationBarColor:systemNavigationBarColor,
    systemNavigationBarDividerColor:systemNavigationBarDividerColor,
    systemNavigationBarIconBrightness:systemNavigationBarIconBrightness
  });
};

SystemUiOverlayStyle.light = function() {
  return new SystemUiOverlayStyle({
    systemNavigationBarColor: new Color(0xff000000),
    systemNavigationBarDividerColor: null,
    statusBarColor: null,
    systemNavigationBarIconBrightness: Brightness.light,
    statusBarIconBrightness: Brightness.light,
    statusBarBrightness: Brightness.dark
  });
}

SystemUiOverlayStyle.dark = function() {
  return new SystemUiOverlayStyle({
    systemNavigationBarColor: new Color(0xff000000),
    systemNavigationBarDividerColor: null,
    statusBarColor: null,
    systemNavigationBarIconBrightness: Brightness.light,
    statusBarIconBrightness: Brightness.dark,
    statusBarBrightness: Brightness.light
  });
}

//****** Slider ******
class Slider extends FlutterWidget {
  constructor({ key, value, onChanged, onChangeStart, onChangeEnd, min, max, divisions, label, activeColor, inactiveColor, semanticFormatterCallback } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.onChanged = onChanged;
    this.onChangeStart = onChangeStart;
    this.onChangeEnd = onChangeEnd;
    this.min = min;
    this.max = max;
    this.divisions = divisions;
    this.label = label;
    this.activeColor = activeColor;
    this.inactiveColor = inactiveColor;
    this.semanticFormatterCallback = semanticFormatterCallback;
  }
}
Slider.new = function ({ key, value, onChanged, onChangeStart, onChangeEnd, min, max, divisions, label, activeColor, inactiveColor, semanticFormatterCallback } = {}) {
  return new Slider({
    key:key,
    value:value,
    onChanged:onChanged,
    onChangeStart:onChangeStart,
    onChangeEnd:onChangeEnd,
    min:min,
    max:max,
    divisions:divisions,
    label:label,
    activeColor:activeColor,
    inactiveColor:inactiveColor,
    semanticFormatterCallback:semanticFormatterCallback,
  });
};

//****** SpringDescription ******
class SpringDescription extends DartClass {
  constructor({ mass,stiffness, damping, } = {}) {
    super();

    this.mass = mass;
    this.stiffness = stiffness;
    this.damping = damping;
  }
}
SpringDescription.new = function ({ mass,stiffness, damping, } = {}) {
  return new SpringDescription({
    mass:mass,
    stiffness:stiffness,
    damping:damping,
  });
};

//-------------- T -----------------
//****** TileMode ******
TileMode = {
  clamp: "clamp",
  repeated: "repeated",
  mirror: "mirror"
};

//****** TextAlign ******
TextAlign = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
  start: "start",
  end: "end"
};

//****** TextDirection ******
TextDirection = {
  rtl: "rtl",
  ltr: "ltr"
};

//****** TextDecorationStyle ******
TextDecorationStyle = {
  ashed: "dashed",
  dotted: "dotted",
  double: "double",
  solid: "solid"
};

//****** TextBaseline ******
TextBaseline = {
  alphabetic: "alphabetic",
  ideographic: "ideographic"
};

//****** TextDecoration ******
TextDecoration = {
  none: "none",
  underline: "underline",
  overline: "overline",
  lineThrough: "lineThrough"
};

//****** TextOverflow ******
TextOverflow = {
  clip: "clip",
  fade: "fade",
  ellipsis: "ellipsis"
};

//****** TextCapitalization ******
TextCapitalization = {
  words: "words",
  sentences: "sentences",
  characters: "characters",
  none: "none"
};

//****** TextInputAction ******
TextInputAction = {
  none: "none",
  nspecified: "unspecified",
  one: "done",
  go: "go",
  search: "search",
  send: "send",
  next: "next",
  previous: "previous",
  continueAction: "continueAction",
  join: "join",
  route: "route",
  emergencyCall: "emergencyCall",
  newline: "newline"
};

//****** TableCellVerticalAlignment ******
TableCellVerticalAlignment = {
  top: "top",
  middle: "middle",
  bottom: "bottom",
  baseline: "baseline",
  fill: "fill"
};

//****** TabBarIndicatorSize ******
TabBarIndicatorSize = {
  tab: "tab",
  label: "label"
};

//****** TargetPlatform ******
TargetPlatform = {
  android: "android",
  fuchsia: "fuchsia",
  iOS: "iOS"
};

//****** TableRow ******
class TableRow extends DartClass {
  constructor({ key, decoration, children } = {}) {
    super();

    this.key = key;
    this.decoration = decoration;
    this.children = children;
  }
}
TableRow.new = function ({ key, decoration, children } = {}) {
  return new TableRow({
    key:key,
    decoration:decoration,
    children:children,
  });
};

//****** TableRow ******
class TableBorder extends DartClass {
  constructor({ top, right, bottom, left, horizontalInside, verticalInside } = {}) {
    super();

    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    this.horizontalInside = horizontalInside;
    this.verticalInside = verticalInside;
  }
}
TableBorder.new = function ({ top, right, bottom, left, horizontalInside, verticalInside } = {}) {
  return new TableBorder({
    top:top,
    right:right,
    bottom:bottom,
    left:left,
    horizontalInside:horizontalInside,
    verticalInside:verticalInside,
  });
};
TableBorder.all = function ({ color, width, style} = {}) {
  let v = new TableBorder();
  v.constructorName = "all";
  v.color = color;
  v.width = width;
  v.style = style;
  return v;
};
TableBorder.symmetric = function ({ inside, outside} = {}) {
  let v = new TableBorder();
  v.constructorName = "symmetric";
  v.inside = inside;
  v.outside = outside;
  return v;
};

//****** TableRow ******
class TableColumnWidth extends DartClass {
  constructor() {
    super();
  }
}
TableColumnWidth.new = function () {
  return new TableColumnWidth();
};

//-------------- U -----------------
//****** VerticalDirection ******
class Uint8List extends DartClass {
  constructor(length) {
    super();

    this.length = length;
  }
}
Uint8List.new = function (length) {
  return new Uint8List(length);
};
Uint8List.fromList = function (elements) {
  let v = new Uint8List();
  v.constructorName = "fromList";

  v.elements = elements;

  return v;
};
Uint8List.view = function (buffer, offsetInBytes, length) {
  let v = new Uint8List();
  v.constructorName = "view";

  v.buffer = buffer;
  v.offsetInBytes = offsetInBytes;
  v.length = length;

  return v;
};

//****** VerticalDirection ******
class UniqueKey extends DartClass {
  constructor() {
    super();
  }
}
UniqueKey.new = function () {
  return new UniqueKey();
};

//-------------- V -----------------
//****** VerticalDirection ******
VerticalDirection = {
  up: "up",
  down: "down"
};

//****** Vector4 ******
class Vector4 extends DartClass {
  constructor(x, y, z, w) {
    super();

    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
}
Vector4.new = function (x, y, z, w) {
  return new Vector4(x, y, z, w);
};
Vector4.array = function (array, offset) {
  let v = new Vector4();
  v.constructorName = "array";

  v.array = array;
  v.offset = offset;

  return v;
};
Vector4.identity = function () {
  let v = new Vector4();
  v.constructorName = "identity";

  return v;
};
Vector4.random = function (rng) {
  let v = new Vector4();
  v.constructorName = "random";

  v.rng = rng;

  return v;
};

//****** Vector3 ******
class Vector3 extends DartClass {
  constructor(x, y, z) {
    super();

    this.x = x;
    this.y = y;
    this.z = z;
  }
}
Vector3.new = function (x, y, z) {
  return new Vector3(x, y, z);
};
Vector3.zero = function () {
  let v = new Vector3();
  v.constructorName = "zero";

  return v;
};
Vector3.all = function (value) {
  let v = new Vector3();
  v.constructorName = "all";

  v.value = value;

  return v;
};
Vector3.random = function (rng) {
  let v = new Vector3();
  v.constructorName = "random";

  v.rng = rng;

  return v;
};

//-------------- W -----------------
//****** WrapAlignment ******
WrapAlignment = {
  start: "start",
  end: "end",
  center: "center",
  spaceBetween: "spaceBetween",
  spaceAround: "spaceAround",
  spaceEvenly: "spaceEvenly"
};

//****** WrapCrossAlignment ******
WrapCrossAlignment = {
  start: "start",
  end: "end",
  center: "center"
};

//-------------- X -----------------
//-------------- Y -----------------
//-------------- Z -----------------

module.exports = {

  assert,
  Axis,AnimationStatus,
  Alignment, AlignmentDirectional,AnnotatedRegion,

  BorderStyle, BlendMode, BlurStyle, BoxFit, BottomNavigationBarType, Brightness, BoxShape,ButtonTextTheme,ButtonBarLayoutBehavior,
  Border, BoxDecoration, BoxConstraints, BorderSide, BorderRadius, BottomNavigationBarItem,BoxShadow,BorderDirectional,ButtonThemeData,

  Curves,Clip, CrossAxisAlignment,CollapseMode,CrossFadeState,
  Color, Colors, ColorFilter, CircularNotchedRectangle,CircleAvatar,Chip,ColorScheme,ClipRRect,

  DragStartBehavior, DecorationPosition,
  DartClass,DropdownMenuItem,

  EdgeInsetsDirectional, EdgeInsets,

  FlutterLogoStyle,FontWeight, FontStyle, FilterQuality,FloatingActionButtonLocation,
  File,FlutterWidget, FlexColumnWidth, FixedColumnWidth,FlutterCallArgs, FlutterWidgetMirrorMgr,

  HitTestBehavior,

  ImageRepeat,
  ImageShader,IconData,InputDecorationTheme,IconTheme, IconThemeData,InputBorder,

  Key,

  LinearGradient,

  MainAxisAlignment, MainAxisSize,MaterialTapTargetSize,
  MaskFilter,Matrix4,

  NetworkAssetBundle,NotificationListener,Notification,

  Overflow,
  Offset,Opacity,

  PaintingStyle,
  Paint,PlatformAssetBundle,Positioned,PreferredSize,PreferredSizeWidget,

  Quaternion,

  Radius,RadialGradient,Rect,

  StrokeCap, StrokeJoin, StackFit,
  SweepGradient,Size,SystemUiOverlayStyle,Slider,SpringDescription,

  TileMode,TableCellVerticalAlignment,TabBarIndicatorSize,TargetPlatform,
  TextAlign,TextDirection,TextDecorationStyle, TextBaseline, TextDecoration, TextOverflow, TextCapitalization, TextInputAction,
  TableRow,TableBorder,TableColumnWidth,

  Uint8List,UniqueKey,

  VerticalDirection,
  Vector4,Vector3,

  WrapAlignment, WrapCrossAlignment,

  XSEncodeParam
};
