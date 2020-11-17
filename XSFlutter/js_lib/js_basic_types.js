"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Basic Class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapCrossAlignment = exports.WrapAlignment = exports.Vector4 = exports.Vector3 = exports.VerticalDirection = exports.UnderlineInputBorder = exports.Uint8List = exports.Uri = exports.UniqueKey = exports.Tween = exports.TextInputType = exports.TextEditingController = exports.TabController = exports.TableColumnWidth = exports.TableBorder = exports.TextStyle = exports.TargetPlatform = exports.TabBarIndicatorSize = exports.TableCellVerticalAlignment = exports.TextInputAction = exports.TextCapitalization = exports.TextOverflow = exports.TextDecoration = exports.TextBaseline = exports.TextDecorationStyle = exports.TextDirection = exports.TextAlign = exports.TileMode = exports.Shadow = exports.ScrollController = exports.ScrollPhysics = exports.SpringDescription = exports.SystemUiOverlayStyle = exports.SweepGradient = exports.Size = exports.StretchMode = exports.StrokeJoin = exports.StrokeCap = exports.StackFit = exports.RadialGradient = exports.Rect = exports.Radius = exports.Quaternion = exports.PlatformAssetBundle = exports.PaintingStyle = exports.OutlineInputBorder = exports.Offset = exports.Overflow = exports.Notification = exports.NeverScrollableScrollPhysics = exports.NetworkAssetBundle = exports.NavigationMode = exports.MediaQueryData = exports.MediaQuery = exports.Matrix4 = exports.MaskFilter = exports.MaterialType = exports.MaterialTapTargetSize = exports.MainAxisSize = exports.MainAxisAlignment = exports.LinearGradient = exports.Key = exports.InputDecoration = exports.InputDecorationTheme = exports.ImageShader = exports.InputBorder = exports.IconThemeData = exports.IconData = exports.ImageRepeat = exports.HitTestBehavior = exports.GlobalKey = exports.File = exports.FixedColumnWidth = exports.FlexColumnWidth = exports.FloatingActionButtonLocation = exports.FilterQuality = exports.FontStyle = exports.FontWeight = exports.FlutterLogoStyle = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.Duration = exports.DecorationPosition = exports.DragStartBehavior = exports.CurveTween = exports.CircleBorder = exports.ClampingScrollPhysics = exports.CircularNotchedRectangle = exports.ColorScheme = exports.ColorFilter = exports.Colors = exports.Color = exports.CrossFadeState = exports.CollapseMode = exports.Clip = exports.Curve = exports.CrossAxisAlignment = exports.BoxShadow = exports.BoxDecoration = exports.ButtonThemeData = exports.BorderDirectional = exports.Border = exports.BorderRadius = exports.BorderSide = exports.BoxConstraints = exports.ButtonBarLayoutBehavior = exports.ButtonTextTheme = exports.BoxShape = exports.BottomNavigationBarType = exports.BorderStyle = exports.BlurStyle = exports.Brightness = exports.BoxFit = exports.BlendMode = exports.Animation = exports.AnimationController = exports.AlwaysScrollableScrollPhysics = exports.AlignmentDirectional = exports.Alignment = exports.AnimationBehavior = exports.AnimationStatus = exports.Axis = exports.BasicAssetBundle = exports.BasicGradient = exports.BasicConstraints = exports.BasicKey = exports.FlutterWidget = exports.DartClass = exports.FlutterCallArgs = exports.WidgetMirrorMgr = void 0;
// @ts-ignore：dart_sdk
const dart_sdk = require("dart_sdk");
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const $clamp = dartx.clamp;
//-------------- Framework -----------------
class WidgetMirrorMgr {
    constructor() {
        this.mirrorIDFeed = 0;
        this.mirrorObjMap = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new WidgetMirrorMgr();
        }
        return this.instance;
    }
    generateID(obj) {
        const d = ++this.mirrorIDFeed;
        const idstring = String(d);
        this.mirrorObjMap.set(idstring, obj);
        return idstring;
    }
    removeMirrorObjects(mirrorIDList) {
        for (let mirrorID in mirrorIDList) {
            this.mirrorObjMap.delete(mirrorID);
        }
    }
    getMirrorObj(mirrorID) {
        return this.mirrorObjMap.get(mirrorID);
    }
}
exports.WidgetMirrorMgr = WidgetMirrorMgr;
class FlutterCallArgs {
    /**
     * @param config config: {widgetID?:string,mirrorID?:string,className?:string,funcName?:string,args?:Map<string,any>}
     */
    static new(config) {
        var v = new FlutterCallArgs();
        if (config != null && config != undefined) {
            v.widgetID = config.widgetID;
            v.mirrorID = config.mirrorID;
            v.className = config.className;
            v.funcName = config.funcName;
            v.args = config.args;
        }
        return v;
    }
}
exports.FlutterCallArgs = FlutterCallArgs;
//flutter 中 非widget继承 DartClass
class DartClass extends core.Object {
    constructor() {
        super();
        this.className = this.constructor.name;
    }
    createMirrorObjectID() {
        this.mirrorID = WidgetMirrorMgr.getInstance().generateID(this);
        core.print("createMirrorObjectID: mirrorID : " + this.mirrorID);
    }
}
exports.DartClass = DartClass;
//flutter Widget继承Widget
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
exports.FlutterWidget = FlutterWidget;
//-------------- Basic Class -----------------
//****** Key ******
class BasicKey extends DartClass {
}
exports.BasicKey = BasicKey;
//****** Constraints ******
class BasicConstraints extends DartClass {
}
exports.BasicConstraints = BasicConstraints;
//****** BasicGradient ******
class BasicGradient extends DartClass {
}
exports.BasicGradient = BasicGradient;
//****** AssetBundle ******
class BasicAssetBundle extends DartClass {
    constructor() {
        super();
    }
}
exports.BasicAssetBundle = BasicAssetBundle;
//-------------- A -----------------
//****** Axis ******
var Axis;
(function (Axis) {
    Axis["horizontal"] = "horizontal";
    Axis["vertical"] = "vertical";
})(Axis = exports.Axis || (exports.Axis = {}));
//****** AnimationStatus ******
var AnimationStatus;
(function (AnimationStatus) {
    AnimationStatus["dismissed"] = "dismissed";
    AnimationStatus["forward"] = "forward";
    AnimationStatus["reverse"] = "reverse";
    AnimationStatus["completed"] = "completed";
})(AnimationStatus = exports.AnimationStatus || (exports.AnimationStatus = {}));
//****** AnimationBehavior ******
var AnimationBehavior;
(function (AnimationBehavior) {
    AnimationBehavior["normal"] = "normal";
    AnimationBehavior["preserve"] = "preserve";
})(AnimationBehavior = exports.AnimationBehavior || (exports.AnimationBehavior = {}));
//****** Alignment ******
class Alignment extends DartClass {
    static new(x, y) {
        var v = new Alignment();
        v.x = x;
        v.y = y;
        return v;
    }
}
exports.Alignment = Alignment;
Alignment.topLeft = Alignment.new(-1.0, -1.0);
Alignment.topCenter = Alignment.new(0.0, -1.0);
Alignment.topRight = Alignment.new(1.0, -1.0);
Alignment.centerLeft = Alignment.new(-1.0, 0.0);
Alignment.center = Alignment.new(0.0, 0.0);
Alignment.centerRight = Alignment.new(1.0, 0.0);
Alignment.bottomLeft = Alignment.new(-1.0, 1.0);
Alignment.bottomCenter = Alignment.new(0.0, 1.0);
Alignment.bottomRight = Alignment.new(1.0, 1.0);
//****** AlignmentDirectional ******
class AlignmentDirectional extends DartClass {
    static new(start, y) {
        var v = new AlignmentDirectional();
        v.start = start;
        v.y = y;
        return v;
    }
}
exports.AlignmentDirectional = AlignmentDirectional;
//****** AlwaysScrollableScrollPhysics ******
class AlwaysScrollableScrollPhysics extends DartClass {
    static new(parent) {
        var v = new AlwaysScrollableScrollPhysics();
        v.parent = parent;
        return v;
    }
}
exports.AlwaysScrollableScrollPhysics = AlwaysScrollableScrollPhysics;
class AnimationController extends FlutterWidget {
    /**
     * @param config config: {value?:number, duration?:Duration, debugLabel?:string, lowerBound?:number, upperBound?:number, animationBehavior?:AnimationBehavior, vsync?:any }
     */
    static new(config) {
        var v = new AnimationController();
        v.createMirrorObjectID();
        if (config != null && config != undefined) {
            v.value = config.value;
            v.duration = config.duration;
            v.debugLabel = config.debugLabel;
            v.lowerBound = config.lowerBound;
            v.upperBound = config.upperBound;
            v.animationBehavior = config.animationBehavior;
            v.vsync = config.vsync;
        }
        return v;
    }
    ///TODO:
    dispose() { }
}
exports.AnimationController = AnimationController;
//****** Animation ******
class Animation extends FlutterWidget {
    static new(tween, controller) {
        var v = new Animation();
        v.createMirrorObjectID();
        v.tween = tween;
        v.controller = controller;
        v.statusListenerList = [];
        v.listenerList = [];
        return v;
    }
    statusListenerCallback(status) {
        for (let funcKey in this.statusListenerList) {
            this.statusListenerList[funcKey](status);
        }
    }
    listenerCallback(status) {
        for (let funcKey in this.listenerList) {
            this.listenerList[funcKey](status);
        }
    }
    value() {
        return "animation.value";
    }
    addListener(callback) {
        this.listenerList.push(callback);
    }
    removeListener(callback) {
        const index = this.listenerList.indexOf(callback);
        this.listenerList.splice(index);
    }
    addStatusListener(callback) {
        this.statusListenerList.push(callback);
    }
    removeStatusListener(callback) {
        let index = this.statusListenerList.indexOf(callback);
        this.statusListenerList.splice(index);
    }
}
exports.Animation = Animation;
//-------------- B -----------------
//****** BlendMode ******
var BlendMode;
(function (BlendMode) {
    BlendMode["clear"] = "clear";
    BlendMode["src"] = "src";
    BlendMode["dst"] = "dst";
    BlendMode["srcOver"] = "srcOver";
    BlendMode["dstOver"] = "dstOver";
    BlendMode["srcIn"] = "srcIn";
    BlendMode["dstIn"] = "dstIn";
    BlendMode["srcOut"] = "srcOut";
    BlendMode["dstOut"] = "dstOut";
    BlendMode["srcATop"] = "srcATop";
    BlendMode["dstATop"] = "dstATop";
    BlendMode["xor"] = "xor";
    BlendMode["plus"] = "plus";
    BlendMode["modulate"] = "modulate";
    BlendMode["screen"] = "screen";
    BlendMode["overlay"] = "overlay";
    BlendMode["darken"] = "darken";
    BlendMode["lighten"] = "lighten";
    BlendMode["colorDodge"] = "colorDodge";
    BlendMode["colorBurn"] = "colorBurn";
    BlendMode["hardLight"] = "hardLight";
    BlendMode["softLight"] = "softLight";
    BlendMode["difference"] = "difference";
    BlendMode["exclusion"] = "exclusion";
    BlendMode["multiply"] = "multiply";
    BlendMode["hue"] = "hue";
    BlendMode["saturation"] = "saturation";
    BlendMode["color"] = "color";
    BlendMode["luminosity"] = "luminosity";
})(BlendMode = exports.BlendMode || (exports.BlendMode = {}));
//****** BoxFit ******
var BoxFit;
(function (BoxFit) {
    BoxFit["fill"] = "fill";
    BoxFit["contain"] = "contain";
    BoxFit["cover"] = "cover";
    BoxFit["fitWidth"] = "fitWidth";
    BoxFit["fitHeight"] = "fitHeight";
    BoxFit["none"] = "none";
    BoxFit["scaleDown"] = "scaleDown";
})(BoxFit = exports.BoxFit || (exports.BoxFit = {}));
//****** Brightness ******
var Brightness;
(function (Brightness) {
    Brightness["dark"] = "dark";
    Brightness["light"] = "light";
})(Brightness = exports.Brightness || (exports.Brightness = {}));
//****** BlurStyle ******
var BlurStyle;
(function (BlurStyle) {
    BlurStyle["normal"] = "normal";
    BlurStyle["solid"] = "solid";
    BlurStyle["outer"] = "outer";
    BlurStyle["inner"] = "inner";
})(BlurStyle = exports.BlurStyle || (exports.BlurStyle = {}));
//****** BorderStyle ******
var BorderStyle;
(function (BorderStyle) {
    BorderStyle["none"] = "none";
    BorderStyle["solid"] = "solid";
})(BorderStyle = exports.BorderStyle || (exports.BorderStyle = {}));
//****** BottomNavigationBarType ******
var BottomNavigationBarType;
(function (BottomNavigationBarType) {
    BottomNavigationBarType["fixed"] = "enum";
    BottomNavigationBarType["shifting"] = "shifting";
})(BottomNavigationBarType = exports.BottomNavigationBarType || (exports.BottomNavigationBarType = {}));
//****** BoxShape ******
var BoxShape;
(function (BoxShape) {
    BoxShape["circle"] = "circle";
    BoxShape["rectangle"] = "rectangle";
})(BoxShape = exports.BoxShape || (exports.BoxShape = {}));
//****** ButtonTextTheme ******
var ButtonTextTheme;
(function (ButtonTextTheme) {
    ButtonTextTheme["normal"] = "normal";
    ButtonTextTheme["accent"] = "accent";
    ButtonTextTheme["primary"] = "primary";
})(ButtonTextTheme = exports.ButtonTextTheme || (exports.ButtonTextTheme = {}));
//****** ButtonBarLayoutBehavior ******
var ButtonBarLayoutBehavior;
(function (ButtonBarLayoutBehavior) {
    ButtonBarLayoutBehavior["constrained"] = "constrained";
    ButtonBarLayoutBehavior["padded"] = "padded";
})(ButtonBarLayoutBehavior = exports.ButtonBarLayoutBehavior || (exports.ButtonBarLayoutBehavior = {}));
class BoxConstraints extends BasicConstraints {
    /**
     * @param config config: {minWidth?:number、maxWidth?:number、minHeight?:number、maxHeight?:number}
     */
    static new(config) {
        var v = new BoxConstraints();
        if (config != null && config != undefined) {
            v.minWidth = config.minWidth;
            v.maxWidth = config.maxWidth;
            v.minHeight = config.minHeight;
            v.maxHeight = config.maxHeight;
        }
        return v;
    }
}
exports.BoxConstraints = BoxConstraints;
class BorderSide extends DartClass {
    /**
     * @param config config: {color?:Color, width?:number, style?:BorderStyle}
     */
    static new(config) {
        var v = new BorderSide();
        if (config != null && config != undefined) {
            v.color = config.color;
            v.width = config.width;
            v.style = config.style;
        }
        return v;
    }
    static none() {
        let v = new BorderSide();
        v.constructorName = "none";
        return v;
    }
}
exports.BorderSide = BorderSide;
class BorderRadius extends DartClass {
    static zero() {
        let o = new BorderRadius();
        o.constructorName = "zero";
        return o;
    }
    static all(radius) {
        let v = new BorderRadius();
        v.constructorName = "all";
        v.radius = radius;
        return v;
    }
    static circular(radius) {
        let v = new BorderRadius();
        v.constructorName = "circular";
        v.radius = radius;
        return v;
    }
    /**
     * @param config config: {top?:number, bottom?:number}
     */
    static vertical(config) {
        let v = new BorderRadius();
        v.constructorName = "vertical";
        if (config != null && config != undefined) {
            v.top = config.top;
            v.bottom = config.bottom;
        }
        return v;
    }
    /**
     * @param config config: {left?:number, right?:number}
     */
    static horizontal(config) {
        let v = new BorderRadius();
        v.constructorName = "horizontal";
        if (config != null && config != undefined) {
            v.left = config.left;
            v.right = config.right;
        }
        return v;
    }
    /**
     * @param config config: {topLeft?:number, topRight?:number, bottomLeft?:number, bottomRight?:number}
     */
    static only(config) {
        let v = new BorderRadius();
        v.constructorName = "only";
        if (config != null && config != undefined) {
            v.topLeft = config.topLeft;
            v.topRight = config.topRight;
            v.bottomLeft = config.bottomLeft;
            v.bottomRight = config.bottomRight;
        }
        return v;
    }
}
exports.BorderRadius = BorderRadius;
class Border extends DartClass {
    /**
     * @param config config: {top?:BorderSide, right?:BorderSide, bottom?:BorderSide, left?:BorderSide}
     */
    static new(config) {
        var v = new Border();
        if (config != null && config != undefined) {
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.left = config.left;
        }
        return v;
    }
    /**
     * @param config config: {color?:Color, width?:number, style?:BorderStyle}
     */
    static all(config) {
        var side = BorderSide.new({ color: config.color, width: config.width, style: config.style });
        var v = Border.new({ top: side, right: side, bottom: side, left: side });
        v.constructorName = "all";
        return v;
    }
    /**
     * @param config config: {vertical?:BorderSide, horizontal?:BorderSide}
     */
    static symmetric(config) {
        var v = new Border();
        v.constructorName = "symmetric";
        if (config != null && config != undefined) {
            v.vertical = config.vertical;
            v.horizontal = config.horizontal;
        }
        return v;
    }
}
exports.Border = Border;
//****** BorderDirectional ******
class BorderDirectional extends DartClass {
    static new(top, start, end, bottom) {
        var v = new BorderDirectional();
        v.top = top;
        v.start = start;
        v.end = end;
        v.bottom = bottom;
        return v;
    }
}
exports.BorderDirectional = BorderDirectional;
class ButtonThemeData extends DartClass {
    /**
     * @param config config: {textTheme?:ButtonTextTheme, minWidth?:number, height?:number, padding?:EdgeInsets, layoutBehavior?:ButtonBarLayoutBehavior,
        alignedDropdown?:boolean, buttonColor?:Color, disabledColor?:Color, focusColor?:Color, hoverColor?:Color, highlightColor?:Color,
        splashColor?:Color,colorScheme?:ColorScheme}
     */
    static new(config) {
        var v = new ButtonThemeData();
        if (config != null && config != undefined) {
            v.textTheme = config.textTheme;
            v.minWidth = config.minWidth;
            v.height = config.height;
            v.padding = config.padding;
            v.layoutBehavior = config.layoutBehavior;
            v.alignedDropdown = config.alignedDropdown;
            v.buttonColor = config.buttonColor;
            v.disabledColor = config.disabledColor;
            v.focusColor = config.focusColor;
            v.hoverColor = config.hoverColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorScheme = config.colorScheme;
        }
        return v;
    }
}
exports.ButtonThemeData = ButtonThemeData;
class BoxDecoration extends DartClass {
    /**
     * @param config config: {color?:Color, border?:Border, borderRadius?:BorderRadius, boxShadow?:BoxShadow, gradient?:BasicGradient, backgroundBlendMode?:BlendMode,shape?:BoxShape}
     */
    static new(config) {
        var v = new BoxDecoration();
        if (config != null && config != undefined) {
            v.color = config.color;
            v.border = config.border;
            v.borderRadius = config.borderRadius;
            v.boxShadow = config.boxShadow;
            v.gradient = config.gradient;
            v.backgroundBlendMode = config.backgroundBlendMode;
            v.shape = config.shape;
        }
        return v;
    }
}
exports.BoxDecoration = BoxDecoration;
class BoxShadow extends DartClass {
    /**
     * @param config config: {color?:Color, offset?:Offset, blurRadius?:number, spreadRadius?:number}
     */
    static new(config) {
        var v = new BoxShadow();
        if (config != null && config != undefined) {
            v.color = config.color;
            v.offset = config.offset;
            v.blurRadius = config.blurRadius;
            v.spreadRadius = config.spreadRadius;
        }
        return v;
    }
}
exports.BoxShadow = BoxShadow;
//-------------- C -----------------
//****** CrossAxisAlignment ******
var CrossAxisAlignment;
(function (CrossAxisAlignment) {
    CrossAxisAlignment["start"] = "start";
    CrossAxisAlignment["end"] = "end";
    CrossAxisAlignment["center"] = "center";
    CrossAxisAlignment["stretch"] = "stretch";
    CrossAxisAlignment["baseline"] = "baseline";
})(CrossAxisAlignment = exports.CrossAxisAlignment || (exports.CrossAxisAlignment = {}));
//****** Curves ******
var Curve;
(function (Curve) {
    Curve["linear"] = "linear";
    Curve["decelerate"] = "decelerate";
    Curve["ease"] = "ease";
    Curve["easeIn"] = "easeIn";
    Curve["easeOut"] = "easeOut";
    Curve["easeInOut"] = "easeInOut";
    Curve["fastOutSlowIn"] = "fastOutSlowIn";
    Curve["bounceIn"] = "bounceIn";
    Curve["bounceOut"] = "bounceOut";
    Curve["bounceInOut"] = "bounceInOut";
    Curve["elasticIn"] = "elasticIn";
    Curve["elasticOut"] = "elasticOut";
    Curve["elasticInOut"] = "elasticInOut";
})(Curve = exports.Curve || (exports.Curve = {}));
//****** Clip ******
var Clip;
(function (Clip) {
    Clip["none"] = "none";
    Clip["hardEdge"] = "hardEdge";
    Clip["antiAlias"] = "antiAlias";
    Clip["antiAliasWithSaveLayer"] = "antiAliasWithSaveLayer";
})(Clip = exports.Clip || (exports.Clip = {}));
//****** CollapseMode ******
var CollapseMode;
(function (CollapseMode) {
    CollapseMode["parallax"] = "parallax";
    CollapseMode["pin"] = "pin";
    CollapseMode["none"] = "none";
})(CollapseMode = exports.CollapseMode || (exports.CollapseMode = {}));
//****** CrossFadeState ******
var CrossFadeState;
(function (CrossFadeState) {
    CrossFadeState["showFirst"] = "showFirst";
    CrossFadeState["showSecond"] = "showSecond";
})(CrossFadeState = exports.CrossFadeState || (exports.CrossFadeState = {}));
//****** Color ******
class Color extends DartClass {
    static new(value) {
        let v = new Color();
        v.value = value;
        return v;
    }
    static fromARGB(a, r, g, b) {
        let v = new Color();
        v.constructorName = "fromARGB";
        v.a = a;
        v.r = r;
        v.g = g;
        v.b = b;
        return v;
    }
    static fromRGBO(r, g, b, opacity) {
        let v = new Color();
        v.constructorName = "fromRGBO";
        v.opacity = opacity;
        v.r = r;
        v.g = g;
        v.b = b;
        return v;
    }
}
exports.Color = Color;
//****** Color ******
class Colors extends Color {
}
exports.Colors = Colors;
Colors.transparent = Color.new(0x00000000);
Colors.black = Color.new(0xff000000);
Colors.black87 = Color.new(0xdd000000);
Colors.black54 = Color.new(0x8a000000);
Colors.black45 = Color.new(0x73000000);
Colors.black38 = Color.new(0x61000000);
Colors.black26 = Color.new(0x42000000);
Colors.black12 = Color.new(0x1f000000);
Colors.white = Color.new(0xffffffff);
Colors.white70 = Color.new(0xb3ffffff);
Colors.white54 = Color.new(0x8affffff);
Colors.white30 = Color.new(0x4dffffff);
Colors.white24 = Color.new(0x3dffffff);
Colors.white12 = Color.new(0x1fffffff);
Colors.white10 = Color.new(0x1affffff);
Colors.red = Color.new(0xFFF44336);
Colors.redAccent = Color.new(0xFFFF5252);
Colors.pink = Color.new(0xFFE91E63);
Colors.pinkAccent = Color.new(0xFFFF4081);
Colors.purple = Color.new(0xFF9C27B0);
Colors.purpleAccent = Color.new(0xFFE040FB);
Colors.deepPurple = Color.new(0xFF673AB7);
Colors.deepPurpleAccent = Color.new(0xFF7C4DFF);
Colors.indigo = Color.new(0xFF3F51B5);
Colors.indigoAccent = Color.new(0xFF536DFE);
Colors.blue = Color.new(0xFF2196F3);
Colors.blueAccent = Color.new(0xFF448AFF);
Colors.lightBlue = Color.new(0xFF03A9F4);
Colors.lightBlueAccent = Color.new(0xFF40C4FF);
Colors.cyan = Color.new(0xFF00BCD4);
Colors.cyanAccent = Color.new(0xFF18FFFF);
Colors.teal = Color.new(0xff009688);
Colors.tealAccent = Color.new(0xFF64FFDA);
Colors.green = Color.new(0xFF4CAF50);
Colors.greenAccent = Color.new(0xFF69F0AE);
Colors.lightGreen = Color.new(0xFF8BC34A);
Colors.lightGreenAccent = Color.new(0xFFB2FF59);
Colors.lime = Color.new(0xFFCDDC39);
Colors.limeAccent = Color.new(0xFFEEFF41);
Colors.yellow = Color.new(0xFFFFEB3B);
Colors.yellowAccent = Color.new(0xFFFFFF00);
Colors.amber = Color.new(0xFFFFC107);
Colors.amberAccent = Color.new(0xFFFFD740);
Colors.orange = Color.new(0xFFFF9800);
Colors.orangeAccent = Color.new(0xFFFFAB40);
Colors.deepOrange = Color.new(0xFFFF5722);
Colors.deepOrangeAccent = Color.new(0xFFFF6E40);
Colors.brown = Color.new(0xFF795548);
Colors.grey = Color.new(0xFF9E9E9E);
Colors.blueGrey = Color.new(0xFF607D8B);
//****** ColorFilter ******
class ColorFilter extends DartClass {
    static new(color, blendMode) {
        let v = new ColorFilter();
        v.color = color;
        v.blendMode = blendMode;
        return v;
    }
    static mode(color, blendMode) {
        let v = new ColorFilter();
        v.constructorName = "mode";
        v.color = color;
        v.blendMode = blendMode;
        return v;
    }
}
exports.ColorFilter = ColorFilter;
class ColorScheme extends DartClass {
    /**
     * @param config config: {primary?:Color, primaryVariant?:Color, secondary?:Color, secondaryVariant?:Color, surface?:Color, background?:Color, error?:Color,onPrimary?:Color,
      onSecondary?:Color, onSurface?:Color, onBackground?:Color, onError?:Color, brightness?:Brightness}
     */
    static new(config) {
        var v = new ColorScheme();
        if (config != null && config != undefined) {
            v.primary = config.primary;
            v.primaryVariant = config.primaryVariant;
            v.secondary = config.secondary;
            v.secondaryVariant = config.secondaryVariant;
            v.surface = config.surface;
            v.background = config.background;
            v.error = config.error;
            v.onPrimary = config.onPrimary;
            v.onSecondary = config.onSecondary;
            v.onSurface = config.onSurface;
            v.onBackground = config.onBackground;
            v.onError = config.onError;
            v.brightness = config.brightness;
        }
        return v;
    }
    static fromSwatch(primarySwatch, accentColor, cardColor, backgroundColor, errorColor, brightness) {
        let v = new ColorScheme();
        v.constructorName = "fromSwatch";
        v.primarySwatch = primarySwatch;
        v.accentColor = accentColor;
        v.cardColor = cardColor;
        v.backgroundColor = backgroundColor;
        v.errorColor = errorColor;
        v.brightness = brightness;
        return v;
    }
}
exports.ColorScheme = ColorScheme;
//****** CircularNotchedRectangle ******
class CircularNotchedRectangle extends DartClass {
    static new() {
        return new CircularNotchedRectangle();
    }
}
exports.CircularNotchedRectangle = CircularNotchedRectangle;
//****** ClampingScrollPhysics ******
class ClampingScrollPhysics extends DartClass {
    static new(parent) {
        var v = new ClampingScrollPhysics();
        v.parent = parent;
        return v;
    }
}
exports.ClampingScrollPhysics = ClampingScrollPhysics;
//****** CircleBorder ******
class CircleBorder extends DartClass {
    static new(side) {
        var v = new CircleBorder();
        v.side = side;
        return v;
    }
}
exports.CircleBorder = CircleBorder;
//****** CurveTween ******
class CurveTween extends FlutterWidget {
    static new(curve) {
        var v = new CurveTween();
        v.curve = curve;
        return v;
    }
    ;
}
exports.CurveTween = CurveTween;
//-------------- D -----------------
//****** DragStartBehavior ******
var DragStartBehavior;
(function (DragStartBehavior) {
    DragStartBehavior["down"] = "down";
    DragStartBehavior["start"] = "start";
})(DragStartBehavior = exports.DragStartBehavior || (exports.DragStartBehavior = {}));
//****** DecorationPosition ******
var DecorationPosition;
(function (DecorationPosition) {
    DecorationPosition["background"] = "background";
    DecorationPosition["foreground"] = "foreground";
})(DecorationPosition = exports.DecorationPosition || (exports.DecorationPosition = {}));
class Duration extends DartClass {
    /**
     * @param config config: {days?:number, hours?:number, minutes?:number, seconds?:number, milliseconds?:number}
     */
    static new(config) {
        var v = new Duration();
        if (config != null && config != undefined) {
            v.days = config.days;
            v.hours = config.hours;
            v.minutes = config.minutes;
            v.seconds = config.seconds;
            v.milliseconds = config.milliseconds;
        }
        return v;
    }
}
exports.Duration = Duration;
class EdgeInsets extends DartClass {
    /**
     * @param config config: {left?:number, top?:number, right?:number, bottom?:number}
     */
    static new(config) {
        var v = new EdgeInsets();
        if (config != null && config != undefined) {
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
        }
        return v;
    }
    static zero() {
        let v = new EdgeInsets();
        v.constructorName = "zero";
        return v;
    }
    static fromLTRB(left, top, right, bottom) {
        let v = new EdgeInsets();
        v.constructorName = "fromLTRB";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        return v;
    }
    /**
     * @param config config: {left?:number, top?:number, right?:number, bottom?:number}
     */
    static only(config) {
        let v = new EdgeInsets();
        v.constructorName = "only";
        if (config != null && config != undefined) {
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
        }
        return v;
    }
    static all(value) {
        let v = new EdgeInsets();
        v.constructorName = "all";
        v.value = value;
        return v;
    }
    /**
     * @param config config: {vertical?:number, horizontal?:number}
     */
    static symmetric(config) {
        let v = new EdgeInsets();
        v.constructorName = "symmetric";
        if (config != null && config != undefined) {
            v.vertical = config.vertical;
            v.horizontal = config.horizontal;
        }
        return v;
    }
}
exports.EdgeInsets = EdgeInsets;
class EdgeInsetsDirectional extends DartClass {
    /**
     * @param config config: {start?:number, top?:number, end?:number, bottom?:number}
     */
    static new(config) {
        var v = new EdgeInsetsDirectional();
        if (config != null && config != undefined) {
            v.start = config.start;
            v.top = config.top;
            v.end = config.end;
            v.bottom = config.bottom;
        }
        return v;
    }
    static fromSTEB(start, top, end, bottom) {
        let v = new EdgeInsetsDirectional();
        v.constructorName = "fromSTEB";
        v.start = start;
        v.top = top;
        v.end = end;
        v.bottom = bottom;
        return v;
    }
    /**
     * @param config config: {start?:number, top?:number, end?:number, bottom?:number}
     */
    static only(config) {
        let v = new EdgeInsetsDirectional();
        v.constructorName = "only";
        if (config != null && config != undefined) {
            v.start = config.start;
            v.top = config.top;
            v.end = config.end;
            v.bottom = config.bottom;
        }
        return v;
    }
}
exports.EdgeInsetsDirectional = EdgeInsetsDirectional;
//-------------- F -----------------
//****** FlutterLogoStyle ******
var FlutterLogoStyle;
(function (FlutterLogoStyle) {
    FlutterLogoStyle["horizontal"] = "horizontal";
    FlutterLogoStyle["markOnly"] = "markOnly";
    FlutterLogoStyle["stacked"] = "stacked";
})(FlutterLogoStyle = exports.FlutterLogoStyle || (exports.FlutterLogoStyle = {}));
//****** FontWeight ******
var FontWeight;
(function (FontWeight) {
    FontWeight["bold"] = "bold";
    FontWeight["normal"] = "normal";
    FontWeight["w100"] = "w100";
    FontWeight["w200"] = "w200";
    FontWeight["w300"] = "w300";
    FontWeight["w400"] = "w400";
    FontWeight["w500"] = "w500";
    FontWeight["w600"] = "w600";
    FontWeight["w700"] = "w700";
    FontWeight["w800"] = "w800";
    FontWeight["w900"] = "w900";
})(FontWeight = exports.FontWeight || (exports.FontWeight = {}));
//****** FontStyle ******
var FontStyle;
(function (FontStyle) {
    FontStyle["italic"] = "italic";
    FontStyle["normal"] = "normal";
})(FontStyle = exports.FontStyle || (exports.FontStyle = {}));
//****** FilterQuality ******
var FilterQuality;
(function (FilterQuality) {
    FilterQuality["none"] = "none";
    FilterQuality["low"] = "low";
    FilterQuality["medium"] = "medium";
    FilterQuality["high"] = "high";
})(FilterQuality = exports.FilterQuality || (exports.FilterQuality = {}));
//****** FloatingActionButtonLocation ******
var FloatingActionButtonLocation;
(function (FloatingActionButtonLocation) {
    FloatingActionButtonLocation["endDocked"] = "endDocked";
    FloatingActionButtonLocation["centerDocked"] = "centerDocked";
    FloatingActionButtonLocation["endFloat"] = "endFloat";
    FloatingActionButtonLocation["centerFloat"] = "centerFloat";
    FloatingActionButtonLocation["startTop"] = "startTop";
    FloatingActionButtonLocation["miniStartTop"] = "miniStartTop";
    FloatingActionButtonLocation["endTop"] = "endTop";
})(FloatingActionButtonLocation = exports.FloatingActionButtonLocation || (exports.FloatingActionButtonLocation = {}));
//****** FlexColumnWidth ******
class FlexColumnWidth extends DartClass {
    static new(value) {
        var v = new FlexColumnWidth();
        v.value = value;
        return v;
    }
}
exports.FlexColumnWidth = FlexColumnWidth;
//****** FixedColumnWidth ******
class FixedColumnWidth extends DartClass {
    static new(value) {
        var v = new FixedColumnWidth();
        v.value = value;
        return v;
    }
}
exports.FixedColumnWidth = FixedColumnWidth;
//****** File ******
class File extends DartClass {
    static new(path) {
        var v = new File();
        v.path = path;
        return v;
    }
    static fromUri(uri) {
        let v = new File();
        v.constructorName = "fromUri";
        v.uri = uri;
        return v;
    }
    static fromRawPath(rawPath) {
        let v = new File();
        v.constructorName = "fromRawPath";
        v.rawPath = rawPath;
        return v;
    }
}
exports.File = File;
//-------------- G -----------------
//****** GlobalKey ******
class GlobalKey extends BasicKey {
    static new(debugLabel) {
        var v = new GlobalKey();
        v.debugLabel = debugLabel;
        return v;
    }
}
exports.GlobalKey = GlobalKey;
//-------------- H -----------------
//****** HitTestBehavior ******
var HitTestBehavior;
(function (HitTestBehavior) {
    HitTestBehavior["deferToChild"] = "deferToChild";
    HitTestBehavior["opaque"] = "opaque";
    HitTestBehavior["translucent"] = "translucent";
})(HitTestBehavior = exports.HitTestBehavior || (exports.HitTestBehavior = {}));
//-------------- I -----------------
//****** ImageRepeat ******
var ImageRepeat;
(function (ImageRepeat) {
    ImageRepeat["repeat"] = "repeat";
    ImageRepeat["repeatX"] = "repeatX";
    ImageRepeat["repeatY"] = "repeatY";
    ImageRepeat["noRepeat"] = "noRepeat";
})(ImageRepeat = exports.ImageRepeat || (exports.ImageRepeat = {}));
class IconData extends DartClass {
    /**
     * @param codePoint codePoint:number
     * @param config config: {fontFamily?:string, fontPackage?:string, matchTextDirection?:boolean}
     */
    static new(codePoint, config) {
        var v = new IconData();
        v.codePoint = codePoint;
        if (config != null && config != undefined) {
            v.fontFamily = config.fontFamily;
            v.fontPackage = config.fontPackage;
            v.matchTextDirection = config.matchTextDirection;
        }
        return v;
    }
}
exports.IconData = IconData;
class IconThemeData extends DartClass {
    /**
     * @param config config: {color?:Color, opacity?:number, size?:number}
     */
    static new(config) {
        var v = new IconThemeData();
        if (config != null && config != undefined) {
            v.color = config.color;
            v.opacity = config.opacity;
            v.size = config.size;
        }
        return v;
    }
}
exports.IconThemeData = IconThemeData;
//****** IconThemeData ******
class InputBorder extends DartClass {
    static new() {
        return new InputBorder();
    }
    static none() {
        let v = new InputBorder();
        v.constructorName = "none";
        return v;
    }
}
exports.InputBorder = InputBorder;
//****** ImageShader ******
class ImageShader extends DartClass {
    static new(image, tmx, tmy, matrix4) {
        var v = new ImageShader();
        v.image = image;
        v.tmx = tmx;
        v.tmy = tmy;
        v.matrix4 = matrix4;
        return v;
    }
}
exports.ImageShader = ImageShader;
class InputDecorationTheme extends DartClass {
    /**
     * @param config config: {labelStyle?:TextStyle, helperStyle?:TextStyle, hintStyle?:TextStyle,errorStyle?:TextStyle,
      errorMaxLines?:number, hasFloatingPlaceholder?:boolean, isDense?:boolean, contentPadding?:EdgeInsets, isCollapsed?:boolean,
      prefixStyle?:TextStyle, suffixStyle?:TextStyle, counterStyle?:TextStyle, filled?:boolean, fillColor?:Color,
      errorBorder?:InputBorder, focusedBorder?:InputBorder, focusedErrorBorder?:InputBorder,
      disabledBorder?:InputBorder, enabledBorder?:InputBorder, border?:InputBorder}
     */
    static new(config) {
        var v = new InputDecorationTheme();
        if (config != null && config != undefined) {
            v.labelStyle = config.labelStyle;
            v.helperStyle = config.helperStyle;
            v.hintStyle = config.hintStyle;
            v.errorStyle = config.errorStyle;
            v.errorMaxLines = config.errorMaxLines;
            v.hasFloatingPlaceholder = config.hasFloatingPlaceholder;
            v.isDense = config.isDense;
            v.contentPadding = config.contentPadding;
            v.isCollapsed = config.isCollapsed;
            v.prefixStyle = config.prefixStyle;
            v.suffixStyle = config.suffixStyle;
            v.counterStyle = config.counterStyle;
            v.filled = config.filled;
            v.fillColor = config.fillColor;
            v.errorBorder = config.errorBorder;
            v.focusedBorder = config.focusedBorder;
            v.focusedErrorBorder = config.focusedErrorBorder;
            v.disabledBorder = config.disabledBorder;
            v.enabledBorder = config.enabledBorder;
            v.border = config.border;
        }
        return v;
    }
}
exports.InputDecorationTheme = InputDecorationTheme;
class InputDecoration extends DartClass {
    /**
     * @param config config: {icon?:FlutterWidget, labelText?:string, labelStyle?:TextStyle, helperText?:string, helperStyle?:TextStyle, hintText?:string,
      hintStyle?:TextStyle, hintMaxLines?:number, errorText?:string, errorStyle?:TextStyle, errorMaxLines?:number, hasFloatingPlaceholder?:boolean,
      isDense?:boolean, contentPadding?:EdgeInsets, prefixIcon?:FlutterWidget, prefix?:FlutterWidget,
      prefixText?:string, prefixStyle?:TextStyle, suffixIcon?:FlutterWidget, suffix?:FlutterWidget,
      suffixText?:string, suffixStyle?:TextStyle, counter?:FlutterWidget, counterText?:string,
      counterStyle?:TextStyle, filled?:boolean, fillColor?:Color, errorBorder?:InputBorder, focusedBorder?:InputBorder,
      focusedErrorBorder?:InputBorder, disabledBorder?:InputBorder, enabledBorder?:InputBorder, border?:InputBorder,
      enabled?:boolean, semanticCounterText?:string, alignLabelWithHint?:boolean}
     */
    static new(config) {
        var v = new InputDecoration();
        if (config != null && config != undefined) {
            v.icon = config.icon;
            v.labelText = config.labelText;
            v.labelStyle = config.labelStyle;
            v.helperText = config.helperText;
            v.helperStyle = config.helperStyle;
            v.hintText = config.hintText;
            v.hintStyle = config.hintStyle;
            v.hintMaxLines = config.hintMaxLines;
            v.errorText = config.errorText;
            v.errorStyle = config.errorStyle;
            v.errorMaxLines = config.errorMaxLines;
            v.hasFloatingPlaceholder = config.hasFloatingPlaceholder;
            v.isDense = config.isDense;
            v.contentPadding = config.contentPadding;
            v.prefixIcon = config.prefixIcon;
            v.prefix = config.prefix;
            v.prefixText = config.prefixText;
            v.prefixStyle = config.prefixStyle;
            v.suffixIcon = config.suffixIcon;
            v.suffix = config.suffix;
            v.suffixText = config.suffixText;
            v.suffixStyle = config.suffixStyle;
            v.counter = config.counter;
            v.counterText = config.counterText;
            v.counterStyle = config.counterStyle;
            v.filled = config.filled;
            v.fillColor = config.fillColor;
            v.errorBorder = config.errorBorder;
            v.focusedBorder = config.focusedBorder;
            v.focusedErrorBorder = config.focusedErrorBorder;
            v.disabledBorder = config.disabledBorder;
            v.enabledBorder = config.enabledBorder;
            v.border = config.border;
            v.enabled = config.enabled;
            v.semanticCounterText = config.semanticCounterText;
            v.alignLabelWithHint = config.alignLabelWithHint;
        }
        return v;
    }
    /**
     * @param config config: {hintText?:string, hasFloatingPlaceholder?:boolean, hintStyle?:TextStyle, filled?:boolean, fillColor?:Color, border?:InputBorder, enabled?:boolean }
     */
    static collapsed(config) {
        let v = new InputDecoration();
        v.staticFunctionName = "collapsed";
        if (config != null && config != undefined) {
            v.hintText = config.hintText;
            v.hasFloatingPlaceholder = config.hasFloatingPlaceholder;
            v.hintStyle = config.hintStyle;
            v.filled = config.filled;
            v.fillColor = config.fillColor;
            v.border = config.border;
            v.enabled = config.enabled;
        }
        return v;
    }
}
exports.InputDecoration = InputDecoration;
//-------------- J -----------------
//-------------- K -----------------
//****** Key ******
class Key extends BasicKey {
    static new(value) {
        var v = new Key();
        v.value = value;
        return v;
    }
}
exports.Key = Key;
class LinearGradient extends BasicGradient {
    /**
     * @param config config: {begin?:Alignment, end?:Alignment, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
     */
    static new(config) {
        var v = new LinearGradient();
        if (config != null && config != undefined) {
            v.begin = config.begin;
            v.end = config.end;
            v.colors = config.colors;
            v.stops = config.stops;
            v.tileMode = config.tileMode;
        }
        return v;
    }
}
exports.LinearGradient = LinearGradient;
//-------------- M -----------------
//****** MainAxisAlignment ******
var MainAxisAlignment;
(function (MainAxisAlignment) {
    MainAxisAlignment["start"] = "start";
    MainAxisAlignment["end"] = "end";
    MainAxisAlignment["center"] = "center";
    MainAxisAlignment["spaceBetween"] = "spaceBetween";
    MainAxisAlignment["spaceAround"] = "spaceAround";
    MainAxisAlignment["spaceEvenly"] = "spaceEvenly";
})(MainAxisAlignment = exports.MainAxisAlignment || (exports.MainAxisAlignment = {}));
//****** MainAxisSize ******
var MainAxisSize;
(function (MainAxisSize) {
    MainAxisSize["min"] = "min";
    MainAxisSize["max"] = "max";
})(MainAxisSize = exports.MainAxisSize || (exports.MainAxisSize = {}));
//****** MaterialTapTargetSize ******
var MaterialTapTargetSize;
(function (MaterialTapTargetSize) {
    MaterialTapTargetSize["padded"] = "padded";
    MaterialTapTargetSize["shrinkWrap"] = "shrinkWrap";
})(MaterialTapTargetSize = exports.MaterialTapTargetSize || (exports.MaterialTapTargetSize = {}));
//****** MaterialTapTargetSize ******
var MaterialType;
(function (MaterialType) {
    MaterialType["circle"] = "circle";
    MaterialType["button"] = "button";
    MaterialType["canvas"] = "canvas";
    MaterialType["card"] = "card";
    MaterialType["transparency"] = "transparency";
})(MaterialType = exports.MaterialType || (exports.MaterialType = {}));
//****** MaskFilter ******
class MaskFilter extends DartClass {
    static new(style, sigma) {
        var v = new MaskFilter();
        v.style = style;
        v.sigma = sigma;
        return v;
    }
    static blur(style, sigma) {
        let v = new MaskFilter();
        v.constructorName = "blur";
        v.style = style;
        v.sigma = sigma;
        return v;
    }
}
exports.MaskFilter = MaskFilter;
//****** Matrix4 ******
class Matrix4 extends DartClass {
    scale(x, y, z) {
        let sx = null;
        let sy = null;
        let sz = null;
        let sw = x instanceof Vector4 ? x.w : 1.0;
        if (x instanceof Vector3) {
            sx = x.x;
            sy = x.y;
            sz = x.z;
        }
        else if (x instanceof Vector4) {
            sx = x.x;
            sy = x.y;
            sz = x.z;
        }
        else if (typeof x == "number") {
            sx = x;
            sy = y == null ? x : y;
            sz = z == null ? x : z;
        }
        if (this.arg0 != null && this.arg0 != undefined && sx != null && sx != undefined) {
            this.arg0 = this.arg0 * sx;
        }
        if (this.arg1 != null && this.arg1 != undefined && sx != null && sx != undefined) {
            this.arg1 = this.arg1 * sx;
        }
        if (this.arg2 != null && this.arg2 != undefined && sx != null && sx != undefined) {
            this.arg2 = this.arg2 * sx;
        }
        if (this.arg3 != null && this.arg3 != undefined && sx != null && sx != undefined) {
            this.arg3 = this.arg3 * sx;
        }
        if (this.arg4 != null && this.arg4 != undefined && sy != null && sy != undefined) {
            this.arg4 = this.arg4 * sy;
        }
        if (this.arg5 != null && this.arg5 != undefined && sy != null && sy != undefined) {
            this.arg5 = this.arg5 * sy;
        }
        if (this.arg6 != null && this.arg6 != undefined && sy != null && sy != undefined) {
            this.arg6 = this.arg6 * sy;
        }
        if (this.arg7 != null && this.arg7 != undefined && sy != null && sy != undefined) {
            this.arg7 = this.arg7 * sy;
        }
        if (this.arg8 != null && this.arg8 != undefined && sz != null && sz != undefined) {
            this.arg8 = this.arg8 * sz;
        }
        if (this.arg9 != null && this.arg9 != undefined && sz != null && sz != undefined) {
            this.arg9 = this.arg9 * sz;
        }
        if (this.arg10 != null && this.arg10 != undefined && sz != null && sz != undefined) {
            this.arg10 = this.arg10 * sz;
        }
        if (this.arg11 != null && this.arg11 != undefined && sz != null && sz != undefined) {
            this.arg11 = this.arg11 * sz;
        }
        if (this.arg12 != null && this.arg12 != undefined && sw != null && sw != undefined) {
            this.arg12 = this.arg12 * sw;
        }
        if (this.arg13 != null && this.arg13 != undefined && sw != null && sw != undefined) {
            this.arg13 = this.arg13 * sw;
        }
        if (this.arg14 != null && this.arg14 != undefined && sw != null && sw != undefined) {
            this.arg14 = this.arg14 * sw;
        }
        if (this.arg15 != null && this.arg15 != undefined && sw != null && sw != undefined) {
            this.arg15 = this.arg15 * sw;
        }
    }
    static new(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
        var v = new Matrix4();
        v.arg0 = arg0;
        v.arg1 = arg1;
        v.arg2 = arg2;
        v.arg3 = arg3;
        v.arg4 = arg4;
        v.arg5 = arg5;
        v.arg6 = arg6;
        v.arg7 = arg7;
        v.arg8 = arg8;
        v.arg9 = arg9;
        v.arg10 = arg10;
        v.arg11 = arg11;
        v.arg12 = arg12;
        v.arg13 = arg13;
        v.arg14 = arg14;
        v.arg15 = arg15;
        return v;
    }
    static identity() {
        return Matrix4.new(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    }
    static fromList(values) {
        let v = new Matrix4();
        v.constructorName = "fromList";
        v.values = values;
        return v;
    }
    static zero() {
        let v = new Matrix4();
        v.constructorName = "zero";
        return v;
    }
    static columns(v4_0, v4_1, v4_2, v4_3) {
        let v = new Matrix4();
        v.constructorName = "columns";
        v.v4_0 = v4_0;
        v.v4_1 = v4_1;
        v.v4_2 = v4_2;
        v.v4_3 = v4_3;
        return v;
    }
    static outer(v4_u, v4_v) {
        let v = new Matrix4();
        v.constructorName = "outer";
        v.v4_u = v4_u;
        v.v4_v = v4_v;
        return v;
    }
    static rotationX(radians) {
        let v = new Matrix4();
        v.constructorName = "rotationX";
        v.radians = radians;
        return v;
    }
    static rotationY(radians) {
        let v = new Matrix4();
        v.constructorName = "rotationY";
        v.radians = radians;
        return v;
    }
    static rotationZ(radians) {
        let v = new Matrix4();
        v.constructorName = "rotationZ";
        v.radians = radians;
        return v;
    }
    static translation(v3_t) {
        let v = new Matrix4();
        v.constructorName = "translation";
        v.v3_t = v3_t;
        return v;
    }
    static translationValues(x, y, z) {
        let v = new Matrix4();
        v.constructorName = "translationValues";
        v.x = x;
        v.y = y;
        v.z = z;
        return v;
    }
    static diagonal3(v3_s) {
        let v = new Matrix4();
        v.constructorName = "diagonal3";
        v.v3_s = v3_s;
        return v;
    }
    static diagonal3Values(x, y, z) {
        let v = new Matrix4();
        v.constructorName = "diagonal3Values";
        v.x = x;
        v.y = y;
        v.z = z;
        return v;
    }
    static skewX(alpha) {
        let v = new Matrix4();
        v.constructorName = "skewX";
        v.alpha = alpha;
        return v;
    }
    static skewY(beta) {
        let v = new Matrix4();
        v.constructorName = "skewY";
        v.beta = beta;
        return v;
    }
    static skew(alpha, beta) {
        let v = new Matrix4();
        v.constructorName = "skew";
        v.alpha = alpha;
        v.beta = beta;
        return v;
    }
    static compose(v3_t, rotation, v3_s) {
        let v = new Matrix4();
        v.constructorName = "compose";
        v.v3_t = v3_t;
        v.rotation = rotation;
        v.v3_s = v3_s;
        return v;
    }
}
exports.Matrix4 = Matrix4;
//****** MediaQuery ******
class MediaQuery extends DartClass {
    static new(child, data, key) {
        var v = new MediaQuery();
        v.key = key;
        v.data = data; //MediaQueryData
        v.child = child;
        return new MediaQuery();
    }
    ;
    static of(context) {
        return context.mediaQueryData;
    }
}
exports.MediaQuery = MediaQuery;
class MediaQueryData extends DartClass {
    /**
     * @param config config: {size?:Size, devicePixelRatio?:number, textScaleFactor?:number, platformBrightness?:Brightness, padding?:EdgeInsets,
      viewInsets?:EdgeInsets, alwaysUse24HourFormat?:boolean, accessibleNavigation?:boolean, invertColors?:boolean,
      highContrast?:boolean, disableAnimations?:boolean, boldText?:boolean, navigationMode?:NavigationMode}
     */
    static new(config) {
        var v = new MediaQueryData();
        if (config != null && config != undefined) {
            v.size = config.size;
            v.devicePixelRatio = config.devicePixelRatio;
            v.textScaleFactor = config.textScaleFactor;
            v.padding = config.padding;
            v.viewInsets = config.viewInsets;
            v.alwaysUse24HourFormat = config.alwaysUse24HourFormat;
            v.accessibleNavigation = config.accessibleNavigation;
            v.invertColors = config.invertColors;
            v.disableAnimations = config.disableAnimations;
            v.boldText = config.boldText;
            v.platformBrightness = config.platformBrightness;
            v.highContrast = config.highContrast;
            v.navigationMode = config.navigationMode;
        }
        return v;
    }
}
exports.MediaQueryData = MediaQueryData;
//-------------- N -----------------
//****** NavigationMode ******
var NavigationMode;
(function (NavigationMode) {
    NavigationMode["traditional"] = "traditional";
    NavigationMode["directional"] = "directional";
})(NavigationMode = exports.NavigationMode || (exports.NavigationMode = {}));
//****** NetworkAssetBundle ******
class NetworkAssetBundle extends BasicAssetBundle {
    static new(baseUrl) {
        var v = new NetworkAssetBundle();
        v.baseUrl = baseUrl;
        return v;
    }
}
exports.NetworkAssetBundle = NetworkAssetBundle;
//****** NeverScrollableScrollPhysics ******
class NeverScrollableScrollPhysics extends DartClass {
    static new(parent) {
        var v = new NeverScrollableScrollPhysics();
        v.parent = parent;
        return v;
    }
}
exports.NeverScrollableScrollPhysics = NeverScrollableScrollPhysics;
//****** Notification ******
class Notification extends DartClass {
    static new() {
        return new Notification();
    }
}
exports.Notification = Notification;
//-------------- O -----------------
//****** Overflow ******
var Overflow;
(function (Overflow) {
    Overflow["visible"] = "visible";
    Overflow["clip"] = "clip";
})(Overflow = exports.Overflow || (exports.Overflow = {}));
//****** Offset ******
class Offset extends DartClass {
    static new(dx, dy) {
        var v = new Offset();
        v.dx = dx;
        v.dy = dy;
        return v;
    }
}
exports.Offset = Offset;
class OutlineInputBorder extends DartClass {
    /**
     * @param config config: {borderSide?:BorderSide, borderRadius?:BorderRadius, gapPadding?:number,}
     */
    static new(config) {
        var v = new OutlineInputBorder();
        if (config != null && config != undefined) {
            v.borderRadius = config.borderRadius;
            v.borderSide = config.borderSide;
            v.gapPadding = config.gapPadding;
        }
        return v;
    }
}
exports.OutlineInputBorder = OutlineInputBorder;
//-------------- P -----------------
//****** PaintingStyle ******
var PaintingStyle;
(function (PaintingStyle) {
    PaintingStyle["fill"] = "fill";
    PaintingStyle["stroke"] = "stroke";
})(PaintingStyle = exports.PaintingStyle || (exports.PaintingStyle = {}));
//****** PlatformAssetBundle ******
class PlatformAssetBundle extends BasicAssetBundle {
    static new() {
        return new PlatformAssetBundle();
    }
}
exports.PlatformAssetBundle = PlatformAssetBundle;
//-------------- Q -----------------
//****** Quaternion ******
class Quaternion extends DartClass {
    static new(x, y, z, w) {
        var v = new Quaternion();
        v.x = x;
        v.y = y;
        v.z = z;
        v.w = w;
        return v;
    }
}
exports.Quaternion = Quaternion;
//-------------- R -----------------
//****** Radius ******
class Radius extends DartClass {
    static circular(radius) {
        let v = new Radius();
        v.constructorName = "circular";
        v.radius = radius;
        return v;
    }
    static elliptical(x, y) {
        let v = new Radius();
        v.constructorName = "elliptical";
        v.x = x;
        v.y = y;
        return v;
    }
    static zero() {
        let v = new Radius();
        v.constructorName = "zero";
        return v;
    }
}
exports.Radius = Radius;
class Rect extends DartClass {
    /**
     * @param config config: {center?:Offset, width?:number,height?:number}
     */
    static fromCenter(config) {
        let v = new Rect();
        v.constructorName = "fromCenter";
        if (config != null && config != undefined) {
            v.center = config.center;
            v.width = config.width;
            v.height = config.height;
        }
        return v;
    }
    static fromLTRB(left, top, right, bottom) {
        let v = new Rect();
        v.constructorName = "fromLTRB";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        return v;
    }
    static fromLTWH(left, top, width, height) {
        let v = new Rect();
        v.constructorName = "fromLTWH";
        v.left = left;
        v.top = top;
        v.width = width;
        v.height = height;
        return v;
    }
    /**
     * @param config config: {center?:Offset, radius?:number}
     */
    static fromCircle(config) {
        let v = new Rect();
        v.constructorName = "fromCircle";
        if (config != null && config != undefined) {
            v.center = config.center;
            v.radius = config.radius;
        }
        return v;
    }
    /**
     * @param config config: {a?:Offset, b?:Offset}
     */
    static fromPoints(config) {
        let v = new Rect();
        v.constructorName = "fromPoints";
        if (config != null && config != undefined) {
            v.a = config.a;
            v.b = config.b;
        }
        return v;
    }
    static zero() {
        let v = new Rect();
        v.constructorName = "zero";
        return v;
    }
}
exports.Rect = Rect;
class RadialGradient extends BasicGradient {
    /**
     * @param config config: {center?:Alignment, radius?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode, focal?:Alignment, focalRadius?:number}
     */
    static new(config) {
        var v = new RadialGradient();
        if (config != null && config != undefined) {
            v.center = config.center;
            v.radius = config.radius;
            v.colors = config.colors;
            v.stops = config.stops;
            v.tileMode = config.tileMode;
            v.focal = config.focal;
            v.focalRadius = config.focalRadius;
        }
        return v;
    }
}
exports.RadialGradient = RadialGradient;
//-------------- S -----------------
//****** StackFit ******
var StackFit;
(function (StackFit) {
    StackFit["loose"] = "loose";
    StackFit["expand"] = "expand";
    StackFit["passthrough"] = "passthrough";
})(StackFit = exports.StackFit || (exports.StackFit = {}));
//****** StrokeCap ******
var StrokeCap;
(function (StrokeCap) {
    StrokeCap["butt"] = "butt";
    StrokeCap["round"] = "round";
    StrokeCap["square"] = "square";
})(StrokeCap = exports.StrokeCap || (exports.StrokeCap = {}));
//****** StrokeJoin ******
var StrokeJoin;
(function (StrokeJoin) {
    StrokeJoin["miter"] = "miter";
    StrokeJoin["round"] = "round";
    StrokeJoin["bevel"] = "bevel";
})(StrokeJoin = exports.StrokeJoin || (exports.StrokeJoin = {}));
//****** StretchMode ******
var StretchMode;
(function (StretchMode) {
    StretchMode["zoomBackground"] = "zoomBackground";
    StretchMode["blurBackground"] = "blurBackground";
    StretchMode["fadeTitle"] = "fadeTitle";
})(StretchMode = exports.StretchMode || (exports.StretchMode = {}));
//****** Size ******
class Size extends DartClass {
    static new(width, height) {
        var v = new Size();
        v.width = width;
        v.height = height;
        return v;
    }
    static fromHeight(height) {
        let v = new Size();
        v.constructorName = "fromHeight";
        v.height = height;
        return v;
    }
    static fromWidth(width) {
        let v = new Size();
        v.constructorName = "fromWidth";
        v.width = width;
        return v;
    }
    static square(dimension) {
        let v = new Size();
        v.constructorName = "square";
        v.dimension = dimension;
        return v;
    }
    static fromRadius(radius) {
        let v = new Size();
        v.constructorName = "fromRadius";
        v.radius = radius;
        return v;
    }
    static zero() {
        let v = new Size();
        v.constructorName = "zero";
        return v;
    }
}
exports.Size = Size;
class SweepGradient extends DartClass {
    /**
     * @param config config: {center?:Alignment, startAngle?:number, endAngle?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
     */
    static new(config) {
        var v = new SweepGradient();
        if (config != null && config != undefined) {
            v.center = config.center;
            v.startAngle = config.startAngle;
            v.endAngle = config.endAngle;
            v.colors = config.colors;
            v.stops = config.stops;
            v.tileMode = config.tileMode;
        }
        return v;
    }
}
exports.SweepGradient = SweepGradient;
class SystemUiOverlayStyle extends DartClass {
    /**
     * @param config config: {systemNavigationBarColor?:Color, systemNavigationBarDividerColor?:Color, statusBarColor?:Color,
        systemNavigationBarIconBrightness?:Brightness, statusBarBrightness?:Brightness, statusBarIconBrightness?:Brightness}
     */
    static new(config) {
        var v = new SystemUiOverlayStyle();
        if (config != null && config != undefined) {
            v.systemNavigationBarColor = config.systemNavigationBarColor;
            v.systemNavigationBarDividerColor = config.systemNavigationBarDividerColor;
            v.systemNavigationBarIconBrightness = config.systemNavigationBarIconBrightness;
            v.statusBarColor = config.statusBarColor;
            v.statusBarBrightness = config.statusBarBrightness;
            v.statusBarIconBrightness = config.statusBarIconBrightness;
        }
        return v;
    }
}
exports.SystemUiOverlayStyle = SystemUiOverlayStyle;
SystemUiOverlayStyle.light = SystemUiOverlayStyle.new({
    systemNavigationBarColor: Color.new(0xff000000),
    systemNavigationBarIconBrightness: Brightness.light,
    statusBarBrightness: Brightness.light,
    statusBarIconBrightness: Brightness.dark
});
SystemUiOverlayStyle.dark = SystemUiOverlayStyle.new({
    systemNavigationBarColor: Color.new(0xff000000),
    systemNavigationBarIconBrightness: Brightness.light,
    statusBarBrightness: Brightness.dark,
    statusBarIconBrightness: Brightness.light
});
class SpringDescription extends DartClass {
    /**
     * @param config config: {mass?:number,stiffness?:number,damping?:number}
     */
    static new(config) {
        var v = new SpringDescription();
        if (config != null && config != undefined) {
            v.mass = config.mass;
            v.stiffness = config.stiffness;
            v.damping = config.damping;
        }
        return v;
    }
}
exports.SpringDescription = SpringDescription;
//****** ScrollPhysics ******
class ScrollPhysics extends DartClass {
    static new(parent) {
        var v = new ScrollPhysics();
        v.parent = parent;
        return v;
    }
}
exports.ScrollPhysics = ScrollPhysics;
// Todo:
class ScrollController extends DartClass {
    /**
     * @param config config: {duration?:Duration, curve?:Curves}
     */
    animateTo(offset, config) {
        var map = new Map();
        map.set("offset", offset);
        if (config != null && config != undefined) {
            if (config.duration != null && config.duration != undefined) {
                map.set("duration", config.duration);
            }
            if (config.curve != null && config.curve != undefined) {
                map.set("curve", config.curve);
            }
        }
        let argument = FlutterCallArgs.new({ mirrorID: this.mirrorID, className: "ScrollController", funcName: "animateTo", args: map });
        /*
        let argument = new FlutterCallArgs({
          mirrorID: v.mirrorID,
          className: "ScrollController",
          funcName: "animateTo",
          args: {
            offset: offset,
            duration: duration,
            curve:curve
          }
        });*/
        //invokeFlutterFunction(argument);
    }
    jumpTo(value) {
        var args = new Map();
        args.set("value", value);
        let argument = FlutterCallArgs.new({ mirrorID: this.mirrorID, className: "ScrollController", funcName: "jumpTo", args: args });
        //invokeFlutterFunction(argument);
    }
    /**
     * @param config config: {initialScrollOffset?:number, keepScrollOffset?:boolean, debugLabel?:string}
     */
    static new(config) {
        var v = new ScrollController();
        v.createMirrorObjectID();
        if (config != null && config != undefined) {
            v.initialScrollOffset = config.initialScrollOffset;
            v.keepScrollOffset = config.keepScrollOffset;
            v.debugLabel = config.debugLabel;
        }
        return v;
    }
}
exports.ScrollController = ScrollController;
class Shadow extends DartClass {
    /**
     * @param config config: {color?:Color, offset?:Offset, blurRadius?:number}
     */
    static new(config) {
        var v = new Shadow();
        if (config != null && config != undefined) {
            v.color = config.color;
            v.blurRadius = config.blurRadius;
            v.offset = config.offset;
        }
        return v;
    }
}
exports.Shadow = Shadow;
//-------------- T -----------------
//****** TileMode ******
var TileMode;
(function (TileMode) {
    TileMode["clamp"] = "clamp";
    TileMode["repeated"] = "repeated";
    TileMode["mirror"] = "mirror";
})(TileMode = exports.TileMode || (exports.TileMode = {}));
//****** TextAlign ******
var TextAlign;
(function (TextAlign) {
    TextAlign["left"] = "left";
    TextAlign["right"] = "right";
    TextAlign["center"] = "center";
    TextAlign["justify"] = "justify";
    TextAlign["start"] = "start";
    TextAlign["end"] = "end";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
//****** TextDirection ******
var TextDirection;
(function (TextDirection) {
    TextDirection["rtl"] = "rtl";
    TextDirection["ltr"] = "ltr";
})(TextDirection = exports.TextDirection || (exports.TextDirection = {}));
//****** TextDecorationStyle ******
var TextDecorationStyle;
(function (TextDecorationStyle) {
    TextDecorationStyle["ashed"] = "ashed";
    TextDecorationStyle["dotted"] = "dotted";
    TextDecorationStyle["double"] = "double";
    TextDecorationStyle["solid"] = "solid";
})(TextDecorationStyle = exports.TextDecorationStyle || (exports.TextDecorationStyle = {}));
//****** TextBaseline ******
var TextBaseline;
(function (TextBaseline) {
    TextBaseline["alphabetic"] = "alphabetic";
    TextBaseline["ideographic"] = "ideographic";
})(TextBaseline = exports.TextBaseline || (exports.TextBaseline = {}));
//****** TextDecoration ******
var TextDecoration;
(function (TextDecoration) {
    TextDecoration["none"] = "none";
    TextDecoration["underline"] = "underline";
    TextDecoration["overline"] = "overline";
    TextDecoration["lineThrough"] = "lineThrough";
})(TextDecoration = exports.TextDecoration || (exports.TextDecoration = {}));
//****** TextOverflow ******
var TextOverflow;
(function (TextOverflow) {
    TextOverflow["clip"] = "clip";
    TextOverflow["fade"] = "fade";
    TextOverflow["ellipsis"] = "ellipsis";
})(TextOverflow = exports.TextOverflow || (exports.TextOverflow = {}));
//****** TextCapitalization ******
var TextCapitalization;
(function (TextCapitalization) {
    TextCapitalization["words"] = "words";
    TextCapitalization["sentences"] = "sentences";
    TextCapitalization["characters"] = "characters";
    TextCapitalization["none"] = "none";
})(TextCapitalization = exports.TextCapitalization || (exports.TextCapitalization = {}));
//****** TextInputAction ******
var TextInputAction;
(function (TextInputAction) {
    TextInputAction["none"] = "none";
    TextInputAction["nspecified"] = "nspecified";
    TextInputAction["one"] = "one";
    TextInputAction["go"] = "go";
    TextInputAction["search"] = "search";
    TextInputAction["send"] = "send";
    TextInputAction["next"] = "next";
    TextInputAction["previous"] = "previous";
    TextInputAction["continueAction"] = "continueAction";
    TextInputAction["join"] = "join";
    TextInputAction["route"] = "route";
    TextInputAction["emergencyCall"] = "emergencyCall";
    TextInputAction["newline"] = "newline";
})(TextInputAction = exports.TextInputAction || (exports.TextInputAction = {}));
//****** TableCellVerticalAlignment ******
var TableCellVerticalAlignment;
(function (TableCellVerticalAlignment) {
    TableCellVerticalAlignment["top"] = "top";
    TableCellVerticalAlignment["middle"] = "middle";
    TableCellVerticalAlignment["bottom"] = "bottom";
    TableCellVerticalAlignment["baseline"] = "baseline";
    TableCellVerticalAlignment["fill"] = "fill";
})(TableCellVerticalAlignment = exports.TableCellVerticalAlignment || (exports.TableCellVerticalAlignment = {}));
//****** TabBarIndicatorSize ******
var TabBarIndicatorSize;
(function (TabBarIndicatorSize) {
    TabBarIndicatorSize["tab"] = "tab";
    TabBarIndicatorSize["label"] = "label";
})(TabBarIndicatorSize = exports.TabBarIndicatorSize || (exports.TabBarIndicatorSize = {}));
//****** TargetPlatform ******
var TargetPlatform;
(function (TargetPlatform) {
    TargetPlatform["android"] = "android";
    TargetPlatform["fuchsia"] = "fuchsia";
    TargetPlatform["iOS"] = "iOS";
})(TargetPlatform = exports.TargetPlatform || (exports.TargetPlatform = {}));
class TextStyle extends DartClass {
    /**
     * @param config config: {inherit?:boolean, color?:Color, fontSize?:number, fontWeight?:FontWeight, fontStyle?:FontStyle,
      letterSpacing?:number, wordSpacing?:number, textBaseline?:TextBaseline, height?:number, decoration?:TextDecoration,
      decorationColor?:Color, decorationStyle?:TextDecorationStyle, debugLabel?:string, fontFamily?:string, packageName?:string}
     */
    static new(config) {
        var v = new TextStyle();
        if (config != null && config != undefined) {
            v.inherit = config.inherit;
            v.color = config.color;
            v.fontSize = config.fontSize;
            v.fontWeight = config.fontWeight;
            v.fontStyle = config.fontStyle;
            v.letterSpacing = config.letterSpacing;
            v.wordSpacing = config.wordSpacing;
            v.textBaseline = config.textBaseline;
            v.height = config.height;
            v.decoration = config.decoration;
            v.decorationColor = config.decorationColor;
            v.decorationStyle = config.decorationStyle;
            v.debugLabel = config.debugLabel;
            v.fontFamily = config.fontFamily;
            v.packageName = config.packageName;
        }
        return v;
    }
}
exports.TextStyle = TextStyle;
class TableBorder extends DartClass {
    /**
     * @param config config: {top?:BorderSide,right?:BorderSide,bottom?:BorderSide,left?:BorderSide,horizontalInside?:BorderSide,verticalInside?:BorderSide}
     */
    static new(config) {
        var v = new TableBorder();
        if (config != null && config != undefined) {
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.left = config.left;
            v.horizontalInside = config.horizontalInside;
            v.verticalInside = config.verticalInside;
        }
        return v;
    }
    /**
     * @param config config: {color?:Color,width?:number,style?:BorderStyle}
     */
    static all(config) {
        let v = new TableBorder();
        v.constructorName = "all";
        if (config != null && config != undefined) {
            v.color = config.color;
            v.width = config.width;
            v.style = config.style;
        }
        return v;
    }
    /**
     * @param config config: {inside?:BorderSide, outside?:BorderSide}
     */
    static symmetric(config) {
        let v = new TableBorder();
        v.constructorName = "symmetric";
        if (config != null && config != undefined) {
            v.inside = config.inside;
            v.outside = config.outside;
        }
        return v;
    }
}
exports.TableBorder = TableBorder;
//****** TableRow ******
class TableColumnWidth extends DartClass {
    static new() {
        return new TableColumnWidth();
    }
}
exports.TableColumnWidth = TableColumnWidth;
class TabController extends DartClass {
    /**
     * @param config config: {initialIndex?:number,length?:number,vsync?:any}
     */
    static new(config) {
        var v = new TabController();
        if (config != null && config != undefined) {
            v.initialIndex = config.initialIndex;
            v.length = config.length;
            v.vsync = config.vsync;
        }
        return v;
    }
}
exports.TabController = TabController;
//****** TextEditingController ******
class TextEditingController extends DartClass {
    static new(text) {
        var v = new TextEditingController();
        v.text = text;
        return v;
    }
}
exports.TextEditingController = TextEditingController;
//****** TextInputType ******
class TextInputType extends DartClass {
    static new() {
        return new TextInputType();
    }
    ;
    static numberWithOptions(signed, decimal) {
        let v = new TextInputType();
        v.constructorName = "numberWithOptions";
        v.signed = signed;
        v.decimal = decimal;
        return v;
    }
    static text() {
        let v = new TextInputType();
        v.constructorName = "text";
        return v;
    }
    static multiline() {
        let v = new TextInputType();
        v.constructorName = "multiline";
        return v;
    }
    static number() {
        let v = new TextInputType();
        v.constructorName = "number";
        return v;
    }
    static phone() {
        let v = new TextInputType();
        v.constructorName = "phone";
        return v;
    }
    static datetime() {
        let v = new TextInputType();
        v.constructorName = "datetime";
        return v;
    }
    static emailAddress() {
        let v = new TextInputType();
        v.constructorName = "emailAddress";
        return v;
    }
    static url() {
        let v = new TextInputType();
        v.constructorName = "url";
        return v;
    }
}
exports.TextInputType = TextInputType;
//****** Tween ******
class Tween extends DartClass {
    lerp(t) {
        return dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
    }
    transform(t) {
        if (t == 0.0)
            return this.begin;
        if (t == 1.0)
            return this.end;
        return this.lerp(t);
    }
    static new(begin, end) {
        var v = new Tween();
        v.begin = begin;
        v.end = end;
        return v;
    }
    ;
}
exports.Tween = Tween;
//-------------- U -----------------
//****** UniqueKey ******
class UniqueKey extends BasicKey {
    static new() {
        return new UniqueKey();
    }
}
exports.UniqueKey = UniqueKey;
class Uri extends DartClass {
    /**
     * @param config config: {scheme?:string,fragment?:string,userInfo?:string, host?:string, port?:number, path?:string,query?:string}
     */
    static new(config) {
        var v = new Uri();
        if (config != null && config != undefined) {
            v.scheme = config.scheme;
            v.fragment = config.fragment;
            v.userInfo = config.userInfo;
            v.host = config.host;
            v.port = config.port;
            v.path = config.path;
            v.query = config.query;
        }
        return v;
    }
}
exports.Uri = Uri;
//****** VerticalDirection ******
class Uint8List extends DartClass {
    static new(length) {
        var v = new Uint8List();
        v.length = length;
        return v;
    }
    static fromList(elements) {
        let v = new Uint8List();
        v.constructorName = "fromList";
        v.elements = elements;
        return v;
    }
}
exports.Uint8List = Uint8List;
//****** UnderlineInputBorder ******
class UnderlineInputBorder extends DartClass {
    static new(borderSide, borderRadius) {
        var v = new UnderlineInputBorder();
        v.borderRadius = borderRadius;
        v.borderSide = borderSide;
        return v;
    }
    ;
}
exports.UnderlineInputBorder = UnderlineInputBorder;
//-------------- V -----------------
//****** VerticalDirection ******
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection["up"] = "up";
    VerticalDirection["down"] = "down";
})(VerticalDirection = exports.VerticalDirection || (exports.VerticalDirection = {}));
//****** Vector3 ******
class Vector3 extends DartClass {
    static new(x, y, z) {
        var v = new Vector3();
        v.x = x;
        v.y = y;
        v.z = z;
        return v;
    }
    static zero() {
        let v = new Vector3();
        v.constructorName = "zero";
        return v;
    }
    static all(value) {
        let v = new Vector3();
        v.constructorName = "all";
        v.value = value;
        return v;
    }
}
exports.Vector3 = Vector3;
//****** Vector4 ******
class Vector4 extends DartClass {
    static new(x, y, z, w) {
        var v = new Vector4();
        v.x = x;
        v.y = y;
        v.z = z;
        v.w = w;
        return v;
    }
    static array(array, offset) {
        let v = new Vector4();
        v.constructorName = "array";
        v.array = array;
        v.offset = offset;
        return v;
    }
    static identity() {
        let v = new Vector4();
        v.constructorName = "identity";
        return v;
    }
    static random() {
        let v = new Vector4();
        v.constructorName = "random";
        return v;
    }
}
exports.Vector4 = Vector4;
//-------------- W -----------------
//****** WrapAlignment ******
var WrapAlignment;
(function (WrapAlignment) {
    WrapAlignment["start"] = "start";
    WrapAlignment["end"] = "end";
    WrapAlignment["center"] = "center";
    WrapAlignment["spaceBetween"] = "spaceBetween";
    WrapAlignment["spaceAround"] = "spaceAround";
    WrapAlignment["spaceEvenly"] = "spaceEvenly";
})(WrapAlignment = exports.WrapAlignment || (exports.WrapAlignment = {}));
//****** WrapCrossAlignment ******
var WrapCrossAlignment;
(function (WrapCrossAlignment) {
    WrapCrossAlignment["start"] = "start";
    WrapCrossAlignment["end"] = "end";
    WrapCrossAlignment["center"] = "center";
})(WrapCrossAlignment = exports.WrapCrossAlignment || (exports.WrapCrossAlignment = {}));
//-------------- X -----------------
//-------------- Y -----------------
//-------------- Z -----------------
