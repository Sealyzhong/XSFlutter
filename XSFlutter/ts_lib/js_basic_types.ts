/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Basic Class
 */

// @ts-ignore：dart_sdk
import dart_sdk = require("dart_sdk"); 
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const $clamp = dartx.clamp;

//-------------- Framework -----------------

export class WidgetMirrorMgr {
  mirrorIDFeed:number;
  mirrorObjMap:Map<string,any>;
  
  static instance?:WidgetMirrorMgr;

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

  generateID(obj:any) {
    const d = ++ this.mirrorIDFeed;
    const idstring = String(d);
    this.mirrorObjMap.set(idstring, obj);
    return idstring;
  }

  removeMirrorObjects(mirrorIDList:Array<string>) {
    for (let mirrorID in mirrorIDList) {
      this.mirrorObjMap.delete(mirrorID);
    }
  }

  getMirrorObj(mirrorID:string) {
    return this.mirrorObjMap.get(mirrorID);
  }
}

//回调参数
//****** TabBarView ******
interface FlutterCallArgsConfig {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:Map<string,any>;
}
export class FlutterCallArgs {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:Map<string,any>;

  /**
   * @param config config: {widgetID?:string,mirrorID?:string,className?:string,funcName?:string,args?:Map<string,any>}
   */
  static new(config:FlutterCallArgsConfig){
    var v = new FlutterCallArgs();
    if(config!=null && config!=undefined){
      v.widgetID = config.widgetID;
      v.mirrorID = config.mirrorID;
      v.className = config.className;
      v.funcName = config.funcName;
      v.args = config.args;
    }
    return v;
  }
}

//flutter 中 非widget继承 DartClass
export class DartClass extends core.Object {
  className:string;
  constructorName?:string;
  mirrorID?:string;
  constructor() {
    super();
    this.className = this.constructor.name;
  }

  createMirrorObjectID() {
    this.mirrorID = WidgetMirrorMgr.getInstance().generateID(this);
    core.print("createMirrorObjectID: mirrorID : " + this.mirrorID);
  }
}

//flutter Widget继承Widget
export class FlutterWidget extends DartClass {
  constructor() {
    super();
  }

  //在生成json前调用
  //用于list delegate 等的items build
  //用于widget有类似onTab等响应函数变量，在此转换成callbackid,
  //但注意，delegate中确实需要funtion,要转不需ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper:any, buildContext:any) {
    //把callback 换成callbackID
    for (let k in this) {
      let v = this[k];
      if (typeof v == "function") {
        this[k] = jsWidgetHelper.buildingCreateCallbackID(v);
      }
    }
  }
}

//-------------- Basic Class -----------------

//****** Key ******
export class BasicKey extends DartClass {
}

//****** Constraints ******
export class BasicConstraints extends DartClass {
}


//****** BasicGradient ******
export class BasicGradient extends DartClass {
}

//****** AssetBundle ******
export class BasicAssetBundle extends DartClass {
  constructor() {
    super();
  }
}

//-------------- A -----------------

//****** Axis ******
export enum Axis {
    horizontal = "horizontal",
    vertical = "vertical",
}

//****** AnimationStatus ******
export enum AnimationStatus { 
    dismissed = "dismissed",
    forward = "forward",
    reverse = "reverse",
    completed = "completed",
}

//****** AnimationBehavior ******
export enum AnimationBehavior {
  normal = "normal",
  preserve = "preserve",
}

//****** Alignment ******
export class Alignment extends DartClass {
  x?:number;
  y?:number;
  
  static new(x:number, y:number){
    var v = new Alignment();
    v.x=x;
    v.y=y;
    return v;
  }

  static topLeft = Alignment.new(-1.0, -1.0); 
  static topCenter = Alignment.new(0.0, -1.0); 
  static topRight = Alignment.new(1.0, -1.0); 
  static centerLeft = Alignment.new(-1.0, 0.0); 
  static center = Alignment.new(0.0, 0.0); 
  static centerRight = Alignment.new(1.0, 0.0);
  static bottomLeft = Alignment.new(-1.0, 1.0);
  static bottomCenter = Alignment.new(0.0, 1.0);
  static bottomRight = Alignment.new(1.0, 1.0); 
} 

//****** AlignmentDirectional ******
export class AlignmentDirectional extends DartClass {
  start?:number;
  y?:number;

  static new(start:number, y:number){
    var v = new AlignmentDirectional();
    v.start=start;
    v.y=y;
    return v;
  }
}

//****** AlwaysScrollableScrollPhysics ******
export class AlwaysScrollableScrollPhysics extends DartClass {
  parent?:AlwaysScrollableScrollPhysics;

  static new(parent?:AlwaysScrollableScrollPhysics):{} {
    var v = new AlwaysScrollableScrollPhysics();
    v.parent=parent;
    return v;
  }
}

//****** AnimationController ******
interface AnimationControllerConfig {
  value?:number;
  duration?:Duration;
  debugLabel?:string; 
  lowerBound?:number;
  upperBound?:number;
  animationBehavior?:AnimationBehavior;
  vsync?:any;
}
export class AnimationController extends FlutterWidget {
  value?:number;
  duration?:Duration;
  debugLabel?:string; 
  lowerBound?:number;
  upperBound?:number;
  animationBehavior?:AnimationBehavior;
  vsync?:any;
  /**
   * @param config config: {value?:number, duration?:Duration, debugLabel?:string, lowerBound?:number, upperBound?:number, animationBehavior?:AnimationBehavior, vsync?:any }
   */
  static new(config: AnimationControllerConfig) {
    var v = new AnimationController();
    v.createMirrorObjectID();
    if(config!=null && config!=undefined){
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
  /*
  forward(from) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "forward",
      args: {
        from: from
      }
    });
    invokeFlutterFunction(argument);
  }

  reverse(from) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "reverse",
      args: {
        from: from
      }
    });
    invokeFlutterFunction(argument);
  }

  repeat(min, max, period) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "repeat",
      args: {
        min: min,
        max: max,
        period: period
      }
    });
    invokeFlutterFunction(argument);
  }

  drive(animatable) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "drive",
      args: {
        animatable: animatable
      }
    });
    invokeFlutterFunction(argument);
  }*/
}

//****** Animation ******
export class Animation extends FlutterWidget {
  tween?:Tween;
  controller?:AnimationController;
  statusListenerList?:any;
  listenerList?:any;

  static new(tween?:Tween, controller?:AnimationController) {
    var v = new Animation();
    v.createMirrorObjectID();

    v.tween = tween;
    v.controller = controller;
    v.statusListenerList = [];
    v.listenerList = [];
    return v;
  }

  statusListenerCallback(status:any) {
    for (let funcKey in this.statusListenerList) {
      this.statusListenerList[funcKey](status);
    }
  }

  listenerCallback(status:any) {
    for (let funcKey in this.listenerList) {
      this.listenerList[funcKey](status);
    }
  }

  value() {
    return "animation.value";
  }

  addListener(callback:any) {
    this.listenerList.push(callback);
  }

  removeListener(callback:any) {
    const index = this.listenerList.indexOf(callback);
    this.listenerList.splice(index);
  }

  addStatusListener(callback:any) {
    this.statusListenerList.push(callback);
  }

  removeStatusListener(callback:any) {
    let index = this.statusListenerList.indexOf(callback);
    this.statusListenerList.splice(index);
  }
}


//-------------- B -----------------
//****** BlendMode ******
export enum BlendMode {
  clear = "clear",
  src = "src",
  dst = "dst",
  srcOver = "srcOver",
  dstOver = "dstOver",
  srcIn = "srcIn",
  dstIn = "dstIn",
  srcOut = "srcOut",
  dstOut = "dstOut",
  srcATop = "srcATop",
  dstATop = "dstATop",
  xor = "xor",
  plus = "plus",
  modulate = "modulate",
  screen = "screen",
  overlay = "overlay",
  darken = "darken",
  lighten = "lighten",
  colorDodge = "colorDodge",
  colorBurn = "colorBurn",
  hardLight = "hardLight",
  softLight = "softLight",
  difference = "difference",
  exclusion = "exclusion",
  multiply = "multiply",
  hue = "hue",
  saturation = "saturation",
  color = "color",
  luminosity = "luminosity",
}

//****** BoxFit ******
export enum BoxFit {
  fill = "fill",
  contain = "contain",
  cover = "cover",
  fitWidth = "fitWidth",
  fitHeight = "fitHeight",
  none = "none",
  scaleDown= "scaleDown",
}

//****** Brightness ******
export enum Brightness {
  dark = "dark",
  light = "light",
}

//****** BlurStyle ******
export enum BlurStyle {
  normal = "normal",
  solid = "solid",
  outer = "outer",
  inner = "inner",
}

//****** BorderStyle ******
export enum BorderStyle {
  none = "none",
  solid = "solid",
}

//****** BottomNavigationBarType ******
export enum BottomNavigationBarType {
  fixed = "enum",
  shifting = "shifting",
}

//****** BoxShape ******
export enum BoxShape {
  circle = "circle",
  rectangle = "rectangle",
}

//****** ButtonTextTheme ******
export enum ButtonTextTheme {
  normal = "normal",
  accent = "accent",
  primary = "primary",
}

//****** ButtonBarLayoutBehavior ******
export enum ButtonBarLayoutBehavior {
  constrained = "constrained",
  padded = "padded",
}

//****** BoxConstraints ******
interface BoxConstraintsConfig {
  minWidth?:number;
  maxWidth?:number;
  minHeight?:number;
  maxHeight?:number;
}
export class BoxConstraints extends BasicConstraints {
  minWidth?:number;
  maxWidth?:number;
  minHeight?:number;
  maxHeight?:number;

  /**
   * @param config config: {minWidth?:number、maxWidth?:number、minHeight?:number、maxHeight?:number}
   */
  static new(config: BoxConstraintsConfig){
    var v =new BoxConstraints();
    if(config!=null && config!=undefined){
      v.minWidth = config.minWidth;
      v.maxWidth = config.maxWidth;
      v.minHeight = config.minHeight;
      v.maxHeight = config.maxHeight;
    }
    return v;
  }
}

//****** BorderSide ******
interface BorderSideConfig {
  color?:Color;
  width?:number;
  style?:BorderStyle;
}
export class BorderSide extends DartClass {
  color?:Color;
  width?:number;
  style?:BorderStyle;

  /**
   * @param config config: {color?:Color, width?:number, style?:BorderStyle}
   */
  static new(config: BorderSideConfig){
    var v =new BorderSide();
    if(config!=null && config!=undefined){
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

//****** BorderRadius ******
interface BorderRadiusConfig {
  top?:number;
  bottom?:number;
  left?:number;
  right?:number;
  topLeft?:number;
  topRight?:number;
  bottomLeft?:number;
  bottomRight?:number;
}
export class BorderRadius  extends DartClass {
  radius?:number;
  top?:number;
  bottom?:number;
  left?:number;
  right?:number;
  topLeft?:number;
  topRight?:number;
  bottomLeft?:number;
  bottomRight?:number;

  static zero(){
    let o = new BorderRadius();
    o.constructorName = "zero";
    return o;
  }

  static all(radius:number){
    let v = new BorderRadius();
    v.constructorName = "all";
    v.radius = radius;
    return v;
  }

  static circular(radius:number){
    let v = new BorderRadius();
    v.constructorName = "circular";
    v.radius = radius;
    return v;
  }

  /**
   * @param config config: {top?:number, bottom?:number}
   */
  static vertical(config: BorderRadiusConfig){
    let v = new BorderRadius();
    v.constructorName = "vertical";
    if(config!=null && config!=undefined){
      v.top = config.top;
      v.bottom = config.bottom;
    }
    return v;
  }

  /**
   * @param config config: {left?:number, right?:number}
   */
  static horizontal(config: BorderRadiusConfig){
    let v = new BorderRadius();
    v.constructorName = "horizontal";
    if(config!=null && config!=undefined){
      v.left = config.left;
      v.right = config.right;
    }
    return v;
  }

  /**
   * @param config config: {topLeft?:number, topRight?:number, bottomLeft?:number, bottomRight?:number}
   */
  static only(config: BorderRadiusConfig){
    let v = new BorderRadius();
    v.constructorName = "only";
    if(config!=null && config!=undefined){
      v.topLeft = config.topLeft;
      v.topRight = config.topRight;
      v.bottomLeft = config.bottomLeft;
      v.bottomRight = config.bottomRight;
    }
    return v;
  }
}

//****** Border ******
interface BorderConfig {
  top?:BorderSide;
  right?:BorderSide;
  bottom?:BorderSide;
  left?:BorderSide;
  vertical?:BorderSide;
  horizontal?:BorderSide;

  color?:Color;
  width?:number;
  style?:BorderStyle;
}
export class Border extends DartClass {
  top?:BorderSide;
  right?:BorderSide;
  bottom?:BorderSide;
  left?:BorderSide;
  vertical?:BorderSide;
  horizontal?:BorderSide;

  /**
   * @param config config: {top?:BorderSide, right?:BorderSide, bottom?:BorderSide, left?:BorderSide}
   */
  static new(config: BorderConfig)  {
    var v = new Border();
    if(config!=null && config!=undefined){
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
  static all(config: BorderConfig) {
    var side = BorderSide.new({color:config.color,width:config.width,style:config.style});
    var v = Border.new({top:side,right:side,bottom:side,left:side});
    v.constructorName = "all";
    return v;
  }

  /**
   * @param config config: {vertical?:BorderSide, horizontal?:BorderSide}
   */
  static symmetric(config: BorderConfig) {
    var v = new Border();
    v.constructorName = "symmetric";
    if(config!=null && config!=undefined){
      v.vertical = config.vertical;
      v.horizontal = config.horizontal;
    }
    return v;
  }
}

//****** BorderDirectional ******
export class BorderDirectional extends DartClass {
  top?:BorderSide;
  start?:BorderSide;
  bottom?:BorderSide;
  end?:BorderSide;

  static new(top?:BorderSide, start?:BorderSide, end?:BorderSide, bottom?:BorderSide) {
    var v = new BorderDirectional();
    v.top = top;
    v.start = start;
    v.end = end;
    v.bottom = bottom;
    return v;
  }
}

//****** ButtonThemeData ******
interface ButtonThemeDataConfig { //定义了两个可选属性
  textTheme?:ButtonTextTheme;
  minWidth?:number;
  height?:number;
  padding?:EdgeInsets;
  layoutBehavior?:ButtonBarLayoutBehavior;
  alignedDropdown?:boolean;
  buttonColor?:Color;
  disabledColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  colorScheme?:ColorScheme;
}
export class ButtonThemeData extends DartClass {
  textTheme?:ButtonTextTheme;
  minWidth?:number;
  height?:number;
  padding?:EdgeInsets;
  layoutBehavior?:ButtonBarLayoutBehavior;
  alignedDropdown?:boolean;
  buttonColor?:Color;
  disabledColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  colorScheme?:ColorScheme;

  /**
   * @param config config: {textTheme?:ButtonTextTheme, minWidth?:number, height?:number, padding?:EdgeInsets, layoutBehavior?:ButtonBarLayoutBehavior,
      alignedDropdown?:boolean, buttonColor?:Color, disabledColor?:Color, focusColor?:Color, hoverColor?:Color, highlightColor?:Color,
      splashColor?:Color,colorScheme?:ColorScheme}
   */
  static new(config: ButtonThemeDataConfig) {
      var v= new ButtonThemeData();
      if(config!=null && config!=undefined){
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

//****** BoxDecoration ******
interface BoxDecorationConfig { //定义了两个可选属性
  color?:Color;
  border?:Border;
  borderRadius?:BorderRadius;
  boxShadow?:BoxShadow;
  gradient?:BasicGradient;
  backgroundBlendMode?:BlendMode;
  shape?:BoxShape;
}
export class BoxDecoration extends DartClass {
  color?:Color;
  border?:Border;
  borderRadius?:BorderRadius;
  boxShadow?:BoxShadow;
  gradient?:BasicGradient;
  backgroundBlendMode?:BlendMode;
  shape?:BoxShape;

  /**
   * @param config config: {color?:Color, border?:Border, borderRadius?:BorderRadius, boxShadow?:BoxShadow, gradient?:BasicGradient, backgroundBlendMode?:BlendMode,shape?:BoxShape}
   */
  static new(config: BoxDecorationConfig){
    var v = new BoxDecoration();
    if(config!=null && config!=undefined){
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

//****** BoxShadow ******
interface BoxShadowConfig {
  color?:Color;
  offset?:Offset;
  blurRadius?:number;
  spreadRadius?:number;
}
export class BoxShadow extends DartClass {
  color?:Color;
  offset?:Offset;
  blurRadius?:number;
  spreadRadius?:number;

  /**
   * @param config config: {color?:Color, offset?:Offset, blurRadius?:number, spreadRadius?:number}
   */
  static new(config: BoxShadowConfig) {
    var v = new BoxShadow();
    if(config!=null && config!=undefined){
      v.color = config.color;
      v.offset = config.offset;
      v.blurRadius = config.blurRadius;
      v.spreadRadius = config.spreadRadius;
    }
    return v;
  }
}

//-------------- C -----------------
//****** CrossAxisAlignment ******
export enum CrossAxisAlignment {
  start = "start",
  end = "end",
  center = "center",
  stretch = "stretch",
  baseline = "baseline",
}

//****** Curves ******
export enum Curve {
  linear = "linear",
  decelerate = "decelerate",
  ease = "ease",
  easeIn = "easeIn",
  easeOut = "easeOut",
  easeInOut = "easeInOut",
  fastOutSlowIn = "fastOutSlowIn",
  bounceIn = "bounceIn",
  bounceOut = "bounceOut",
  bounceInOut = "bounceInOut",
  elasticIn = "elasticIn",
  elasticOut = "elasticOut",
  elasticInOut = "elasticInOut",
}

//****** Clip ******
export enum Clip {
  none = "none",
  hardEdge = "hardEdge",
  antiAlias = "antiAlias",
  antiAliasWithSaveLayer = "antiAliasWithSaveLayer",
}

//****** CollapseMode ******
export enum CollapseMode {
  parallax = "parallax",
  pin = "pin",
  none = "none",
}

//****** CrossFadeState ******
export enum CrossFadeState {
  showFirst = "showFirst",
  showSecond = "showSecond",
}

//****** Color ******
export class Color extends DartClass {
  value?: number;
  a?: number;
  r?: number;
  g?: number;
  b?: number;
  opacity?: number;

  static new(value: number)  {
    let v = new Color();
    v.value = value;
    return v;
  }

  static fromARGB(a: number, r: number, g: number, b: number) {
    let v = new Color();
    v.constructorName = "fromARGB";
    v.a = a;
    v.r = r;
    v.g = g;
    v.b = b;
    return v;
  }

  static fromRGBO(r: number, g: number, b: number, opacity: number)  {
    let v = new Color();
    v.constructorName = "fromRGBO";
    v.opacity = opacity;
    v.r = r;
    v.g = g;
    v.b = b;
    return v;
  }
}

//****** Color ******
export class Colors extends Color{
  static transparent = Color.new(0x00000000);
  static black = Color.new(0xff000000);
  static black87 = Color.new(0xdd000000);
  static black54 = Color.new(0x8a000000);
  static black45 = Color.new(0x73000000);
  static black38 = Color.new(0x61000000);
  static black26 = Color.new(0x42000000);
  static black12 = Color.new(0x1f000000);
  static white = Color.new(0xffffffff);
  static white70 = Color.new(0xb3ffffff);
  static white54 = Color.new(0x8affffff);
  static white30 = Color.new(0x4dffffff);
  static white24 = Color.new(0x3dffffff);
  static white12 = Color.new(0x1fffffff);
  static white10 = Color.new(0x1affffff);
  static red = Color.new(0xFFF44336);
  static redAccent = Color.new(0xFFFF5252);
  static pink = Color.new(0xFFE91E63);
  static pinkAccent = Color.new(0xFFFF4081);
  static purple = Color.new(0xFF9C27B0);
  static purpleAccent = Color.new(0xFFE040FB);
  static deepPurple = Color.new(0xFF673AB7);
  static deepPurpleAccent = Color.new(0xFF7C4DFF);
  static indigo = Color.new(0xFF3F51B5);
  static indigoAccent = Color.new(0xFF536DFE);
  static blue = Color.new(0xFF2196F3);
  static blueAccent = Color.new(0xFF448AFF);
  static lightBlue = Color.new(0xFF03A9F4);
  static lightBlueAccent = Color.new(0xFF40C4FF);
  static cyan = Color.new(0xFF00BCD4);
  static cyanAccent = Color.new(0xFF18FFFF);
  static teal = Color.new(0xff009688);
  static tealAccent = Color.new(0xFF64FFDA);
  static green = Color.new(0xFF4CAF50);
  static greenAccent = Color.new(0xFF69F0AE);
  static lightGreen = Color.new(0xFF8BC34A);
  static lightGreenAccent = Color.new(0xFFB2FF59);
  static lime = Color.new(0xFFCDDC39);
  static limeAccent = Color.new(0xFFEEFF41);
  static yellow = Color.new(0xFFFFEB3B);
  static yellowAccent = Color.new(0xFFFFFF00);
  static amber = Color.new(0xFFFFC107);
  static amberAccent = Color.new(0xFFFFD740);
  static orange = Color.new(0xFFFF9800);
  static orangeAccent = Color.new(0xFFFFAB40);
  static deepOrange = Color.new(0xFFFF5722);
  static deepOrangeAccent = Color.new(0xFFFF6E40);
  static brown = Color.new(0xFF795548);
  static grey = Color.new(0xFF9E9E9E);
  static blueGrey = Color.new(0xFF607D8B);
}

//****** ColorFilter ******
export class ColorFilter extends DartClass {
  color?:Color;
  blendMode?:BlendMode;

  static new(color:Color, blendMode:BlendMode) {
    let v = new ColorFilter();
    v.color = color;
    v.blendMode = blendMode;
    return v;
  }

  static mode(color:Color, blendMode:BlendMode){
    let v = new ColorFilter();
    v.constructorName = "mode";
    v.color = color;
    v.blendMode = blendMode;
    return v;
  }
}

//****** ColorScheme ******
interface ColorSchemeConfig {
  primary?:Color;
  primaryVariant?:Color;
  secondary?:Color;
  secondaryVariant?:Color;
  surface?:Color;
  background?:Color;
  error?:Color;
  onPrimary?:Color;
  onSecondary?:Color;
  onSurface?:Color;
  onBackground?:Color;
  onError?:Color;
  brightness?:Brightness;
  primarySwatch?:Color;
  accentColor?:Color;
  cardColor?:Color;
  backgroundColor?:Color;
  errorColor?:Color;
}
export class ColorScheme extends DartClass {
  primary?:Color;
  primaryVariant?:Color;
  secondary?:Color;
  secondaryVariant?:Color;
  surface?:Color;
  background?:Color;
  error?:Color;
  onPrimary?:Color;
  onSecondary?:Color;
  onSurface?:Color;
  onBackground?:Color;
  onError?:Color;
  brightness?:Brightness;
  primarySwatch?:Color;
  accentColor?:Color;
  cardColor?:Color;
  backgroundColor?:Color;
  errorColor?:Color;

  /**
   * @param config config: {primary?:Color, primaryVariant?:Color, secondary?:Color, secondaryVariant?:Color, surface?:Color, background?:Color, error?:Color,onPrimary?:Color, 
    onSecondary?:Color, onSurface?:Color, onBackground?:Color, onError?:Color, brightness?:Brightness}
   */
  static new(config: ColorSchemeConfig) {
    var v = new ColorScheme(); 
    if(config!=null && config!=undefined){
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
  
  static fromSwatch(primarySwatch?:Color,accentColor?:Color,cardColor?:Color,backgroundColor?:Color, errorColor?:Color,brightness?:Brightness) {
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

//****** CircularNotchedRectangle ******
export class CircularNotchedRectangle extends DartClass {
  static new() {
    return new CircularNotchedRectangle();
  }
}

//****** ClampingScrollPhysics ******
export class ClampingScrollPhysics extends DartClass {
  parent?:ClampingScrollPhysics;
  static new(parent?:ClampingScrollPhysics) {
    var v = new ClampingScrollPhysics();
    v.parent = parent;
    return v;
  }
}

//****** CircleBorder ******
export class CircleBorder extends DartClass {
  side?:BorderSide;

  static new(side?:BorderSide) {
    var v = new CircleBorder();
    v.side = side;
    return v;
  }
}

//****** CurveTween ******
export class CurveTween extends FlutterWidget {
  curve?:Curve;
  static new(curve?:Curve) {
    var v = new CurveTween();
    v.curve = curve;
    return v;
  };
}

//-------------- D -----------------
//****** DragStartBehavior ******
export enum DragStartBehavior {
  down = "down",
  start = "start",
}

//****** DecorationPosition ******
export enum DecorationPosition  {
  background = "background",
  foreground = "foreground",
}

//****** Duration ******
interface DurationConfig {
  days?:number;
  hours?:number;
  minutes?:number;
  seconds?:number;
  milliseconds?:number;
}
export class Duration extends DartClass {
  days?:number;
  hours?:number;
  minutes?:number;
  seconds?:number;
  milliseconds?:number;

  /**
   * @param config config: {days?:number, hours?:number, minutes?:number, seconds?:number, milliseconds?:number}
   */
  static new(config: DurationConfig) {
    var v = new Duration();
    if(config!=null && config!=undefined){
      v.days = config.days;
      v.hours = config.hours;
      v.minutes = config.minutes;
      v.seconds = config.seconds;
      v.milliseconds = config.milliseconds;
    }
    return v;
  }
}

//-------------- E -----------------
//****** EdgeInsets ******
interface EdgeInsetsConfig {
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  value?:number;
  vertical?:number;
  horizontal?:number;
}
export class EdgeInsets extends DartClass {
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  value?:number;
  vertical?:number;
  horizontal?:number;

  /**
   * @param config config: {left?:number, top?:number, right?:number, bottom?:number}
   */
  static new(config: EdgeInsetsConfig) {
    var v = new EdgeInsets();
    if(config!=null && config!=undefined){
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

  static fromLTRB(left:number, top:number, right:number, bottom:number) {
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
  static only(config: EdgeInsetsConfig) {
    let v = new EdgeInsets();
    v.constructorName = "only";
    if(config!=null && config!=undefined){
      v.left = config.left;
      v.top = config.top;
      v.right = config.right;
      v.bottom = config.bottom;
    }
    return v;
  }

  static all(value:number){
    let v = new EdgeInsets();
    v.constructorName = "all";
    v.value = value;
    return v;
  }

  /**
   * @param config config: {vertical?:number, horizontal?:number}
   */
  static symmetric(config: EdgeInsetsConfig) {
    let v = new EdgeInsets();
    v.constructorName = "symmetric";
    if(config!=null && config!=undefined){
      v.vertical = config.vertical;
      v.horizontal = config.horizontal;
    }
    return v;
  }
}

//****** EdgeInsetsDirectional ******
interface EdgeInsetsDirectionalConfig {
  start?:number;
  top?:number;
  end?:number;
  bottom?:number;
}
export class EdgeInsetsDirectional extends DartClass {
  start?:number;
  top?:number;
  end?:number;
  bottom?:number;

  /**
   * @param config config: {start?:number, top?:number, end?:number, bottom?:number}
   */
  static new(config: EdgeInsetsDirectionalConfig) {
    var v = new EdgeInsetsDirectional();
    if(config!=null && config!=undefined){
      v.start = config.start;
      v.top = config.top;
      v.end = config.end;
      v.bottom = config.bottom;
    }
    return v;
  }

  static fromSTEB(start:number, top:number, end:number, bottom:number) {
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
  static only(config: EdgeInsetsDirectionalConfig) {
    let v = new EdgeInsetsDirectional();
    v.constructorName = "only";
    if(config!=null && config!=undefined){
      v.start = config.start;
      v.top = config.top;
      v.end = config.end;
      v.bottom = config.bottom;
    }
    return v;
  }
}

//-------------- F -----------------
//****** FlutterLogoStyle ******
export enum FlutterLogoStyle {
  horizontal = "horizontal",
  markOnly = "markOnly",
  stacked = "stacked",
}

//****** FontWeight ******
export enum FontWeight {
  bold = "bold",
  normal = "normal",
  w100 = "w100",
  w200 = "w200",
  w300 = "w300",
  w400 = "w400",
  w500 = "w500",
  w600 = "w600",
  w700 = "w700",
  w800 = "w800",
  w900 = "w900",
}

//****** FontStyle ******
export enum FontStyle {
  italic = "italic",
  normal = "normal",
}

//****** FilterQuality ******
export enum FilterQuality {
  none = "none",
  low = "low",
  medium = "medium",
  high = "high",
}

//****** FloatingActionButtonLocation ******
export enum FloatingActionButtonLocation  {
  endDocked = "endDocked",
  centerDocked = "centerDocked",
  endFloat = "endFloat",
  centerFloat = "centerFloat",
  startTop = "startTop",
  miniStartTop = "miniStartTop",
  endTop = "endTop",
}

//****** FlexColumnWidth ******
export class FlexColumnWidth extends DartClass {
  value?:number;

  static new(value:number) {
    var v = new FlexColumnWidth();
    v.value = value;
    return v;
  }
}

//****** FixedColumnWidth ******
export class FixedColumnWidth extends DartClass {
  value?:number;
  static new(value:number) {
    var v = new FixedColumnWidth();
    v.value = value;
    return v;
  }
}

//****** File ******
export class File extends DartClass {
  path?:string;
  uri?:Uri;
  rawPath?:Uint8List;

  static new(path?:string) {
    var v  = new File();
    v.path=path;
    return v;
  }

  static fromUri(uri?:Uri) {
    let v = new File();
    v.constructorName = "fromUri";
    v.uri = uri;
    return v;
  }

  static fromRawPath(rawPath?:Uint8List) {
    let v = new File();
    v.constructorName = "fromRawPath";
    v.rawPath = rawPath;
    return v;
  }
}

//-------------- G -----------------
//****** GlobalKey ******
export class GlobalKey extends BasicKey {
  debugLabel?:string;
  static new(debugLabel?:string) {
    var v = new GlobalKey();
    v.debugLabel=debugLabel;
    return v;
  }
}

//-------------- H -----------------
//****** HitTestBehavior ******
export enum HitTestBehavior {
  deferToChild = "deferToChild",
  opaque = "opaque",
  translucent = "translucent",
}


//-------------- I -----------------
//****** ImageRepeat ******
export enum ImageRepeat {
  repeat = "repeat",
  repeatX = "repeatX",
  repeatY = "repeatY",
  noRepeat = "noRepeat",
}

//****** IconData ******
interface IconDataConfig {
  fontFamily?:string;
  fontPackage?:string;
  matchTextDirection?:boolean;
}
export class IconData extends DartClass {
  codePoint?:number;
  fontFamily?:string;
  fontPackage?:string;
  matchTextDirection?:boolean;

  /**
   * @param codePoint codePoint:number
   * @param config config: {fontFamily?:string, fontPackage?:string, matchTextDirection?:boolean}
   */
  static new(codePoint:number, config: IconDataConfig) {
    var v = new IconData();
    v.codePoint = codePoint;
    if(config!=null && config!=undefined){
      v.fontFamily = config.fontFamily;
      v.fontPackage = config.fontPackage;
      v.matchTextDirection = config.matchTextDirection;
    }
    return v;
  }
}

//****** IconThemeData ******
interface IconThemeDataConfig {
  color?:Color;
  opacity?:number;
  size?:number;
}
export class IconThemeData extends DartClass {
  color?:Color;
  opacity?:number;
  size?:number;

  /**
   * @param config config: {color?:Color, opacity?:number, size?:number}
   */
  static new(config: IconThemeDataConfig) {
    var v =new IconThemeData();
    if(config!=null && config!=undefined){
      v.color = config.color;
      v.opacity = config.opacity;
      v.size = config.size;
    }
    return v;
  }
}

//****** IconThemeData ******
export class InputBorder extends DartClass {
  static new() {
    return new InputBorder();
  }
  static none() {
    let v = new InputBorder();
    v.constructorName = "none";
    return v;
  }
}

//****** ImageShader ******
export class ImageShader extends DartClass {
  image?:any;
  tmx?:TileMode;
  tmy?:TileMode;
  matrix4?:Matrix4;
  static new(image:any,tmx:TileMode,tmy:TileMode,matrix4:Matrix4) {
    var v = new ImageShader();
    v.image = image;
    v.tmx = tmx;
    v.tmy = tmy;
    v.matrix4 = matrix4;
    return v;
  }
}

//****** InputDecorationTheme ******
interface InputDecorationThemeConfig {
  labelStyle?:TextStyle;
  helperStyle?:TextStyle;
  hintStyle?:TextStyle;
  errorStyle?:TextStyle;
  errorMaxLines?:number;
  hasFloatingPlaceholder?:boolean;
  isDense?:boolean;
  contentPadding?:EdgeInsets;
  isCollapsed?:boolean;
  prefixStyle?:TextStyle;
  suffixStyle?:TextStyle;
  counterStyle?:TextStyle;
  filled?:boolean;
  fillColor?:Color;
  errorBorder?:InputBorder;
  focusedBorder?:InputBorder;
  focusedErrorBorder?:InputBorder;
  disabledBorder?:InputBorder;
  enabledBorder?:InputBorder;
  border?:InputBorder;
}
export class InputDecorationTheme extends DartClass {
  labelStyle?:TextStyle;
  helperStyle?:TextStyle;
  hintStyle?:TextStyle;
  errorStyle?:TextStyle;
  errorMaxLines?:number;
  hasFloatingPlaceholder?:boolean;
  isDense?:boolean;
  contentPadding?:EdgeInsets;
  isCollapsed?:boolean;
  prefixStyle?:TextStyle;
  suffixStyle?:TextStyle;
  counterStyle?:TextStyle;
  filled?:boolean;
  fillColor?:Color;
  errorBorder?:InputBorder;
  focusedBorder?:InputBorder;
  focusedErrorBorder?:InputBorder;
  disabledBorder?:InputBorder;
  enabledBorder?:InputBorder;
  border?:InputBorder;

  /**
   * @param config config: {labelStyle?:TextStyle, helperStyle?:TextStyle, hintStyle?:TextStyle,errorStyle?:TextStyle, 
    errorMaxLines?:number, hasFloatingPlaceholder?:boolean, isDense?:boolean, contentPadding?:EdgeInsets, isCollapsed?:boolean,
    prefixStyle?:TextStyle, suffixStyle?:TextStyle, counterStyle?:TextStyle, filled?:boolean, fillColor?:Color,
    errorBorder?:InputBorder, focusedBorder?:InputBorder, focusedErrorBorder?:InputBorder,
    disabledBorder?:InputBorder, enabledBorder?:InputBorder, border?:InputBorder}
   */
  static new (config: InputDecorationThemeConfig) {

    var v = new InputDecorationTheme();
    if(config!=null && config!=undefined){
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

//****** InputDecoration ******
interface InputDecorationConfig {
  icon?:FlutterWidget;
  labelText?:string;
  labelStyle?:TextStyle;
  helperText?:string;
  helperStyle?:TextStyle;
  hintText?:string;
  hintStyle?:TextStyle;
  hintMaxLines?:number;
  errorText?:string;
  errorStyle?:TextStyle;
  errorMaxLines?:number;
  hasFloatingPlaceholder?:boolean;
  isDense?:boolean;
  contentPadding?:EdgeInsets;
  prefixIcon?:FlutterWidget;
  prefix?:FlutterWidget;
  prefixText?:string;
  prefixStyle?:TextStyle;
  suffixIcon?:FlutterWidget;
  suffix?:FlutterWidget;
  suffixText?:string;
  suffixStyle?:TextStyle;

  counter?:FlutterWidget;
  counterText?:string;
  counterStyle?:TextStyle;
  filled?:boolean;
  fillColor?:Color;
  errorBorder?:InputBorder;
  focusedBorder?:InputBorder;
  focusedErrorBorder?:InputBorder;
  disabledBorder?:InputBorder;
  enabledBorder?:InputBorder;
  border?:InputBorder;
  enabled?:boolean;
  semanticCounterText?:string;
  alignLabelWithHint?:boolean;

  staticFunctionName?:string;
}
export class InputDecoration extends DartClass {
  icon?:FlutterWidget;
  labelText?:string;
  labelStyle?:TextStyle;
  helperText?:string;
  helperStyle?:TextStyle;
  hintText?:string;
  hintStyle?:TextStyle;
  hintMaxLines?:number;
  errorText?:string;
  errorStyle?:TextStyle;
  errorMaxLines?:number;
  hasFloatingPlaceholder?:boolean;
  isDense?:boolean;
  contentPadding?:EdgeInsets;
  prefixIcon?:FlutterWidget;
  prefix?:FlutterWidget;
  prefixText?:string;
  prefixStyle?:TextStyle;
  suffixIcon?:FlutterWidget;
  suffix?:FlutterWidget;
  suffixText?:string;
  suffixStyle?:TextStyle;

  counter?:FlutterWidget;
  counterText?:string;
  counterStyle?:TextStyle;
  filled?:boolean;
  fillColor?:Color;
  errorBorder?:InputBorder;
  focusedBorder?:InputBorder;
  focusedErrorBorder?:InputBorder;
  disabledBorder?:InputBorder;
  enabledBorder?:InputBorder;
  border?:InputBorder;
  enabled?:boolean;
  semanticCounterText?:string;
  alignLabelWithHint?:boolean;
  staticFunctionName?:string;


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
  static new(config: InputDecorationConfig) {
      var v = new InputDecoration();
      if(config!=null && config!=undefined){
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
  static collapsed (config: InputDecorationConfig) {
    let v = new InputDecoration();
    v.staticFunctionName = "collapsed";

    if(config!=null && config!=undefined){
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


//-------------- J -----------------
//-------------- K -----------------
//****** Key ******
export class Key extends BasicKey {
  value?:string;
  static new(value:string) {
    var v = new Key();
    v.value = value;
    return v;
  }
}

//-------------- L -----------------
//****** LinearGradient ******
interface LinearGradientConfig {
  begin?:Alignment;
  end?:Alignment;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
}
export class LinearGradient extends BasicGradient {
  begin?:Alignment;
  end?:Alignment;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;

  /**
   * @param config config: {begin?:Alignment, end?:Alignment, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
   */
  static new (config: LinearGradientConfig) {
    var v = new LinearGradient();
    if(config!=null && config!=undefined){
      v.begin = config.begin;
      v.end = config.end;
      v.colors = config.colors;
      v.stops = config.stops;
      v.tileMode = config.tileMode;
    }
    return v;
  }
}

//-------------- M -----------------
//****** MainAxisAlignment ******
export enum MainAxisAlignment {
  start = "start",
  end = "end",
  center = "center",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
  spaceEvenly = "spaceEvenly",
}

//****** MainAxisSize ******
export enum MainAxisSize {
  min = "min",
  max = "max",
}

//****** MaterialTapTargetSize ******
export enum MaterialTapTargetSize {
  padded = "padded",
  shrinkWrap = "shrinkWrap",
}

//****** MaterialTapTargetSize ******
export enum MaterialType {
  circle = "circle",
  button = "button",
  canvas = "canvas",
  card = "card",
  transparency = "transparency",
}

//****** MaskFilter ******
export class MaskFilter extends DartClass {
  style?:BlurStyle;
  sigma?:number;


  static new(style:BlurStyle, sigma:number) {
    var v = new MaskFilter();
    v.style = style;
    v.sigma = sigma;
    return v;
  }
  static blur(style:BlurStyle, sigma:number) {
    let v = new MaskFilter();
    v.constructorName = "blur";

    v.style = style;
    v.sigma = sigma;
    return v;
  }
}

//****** Matrix4 ******
export class Matrix4 extends DartClass {
  arg0?:number;
  arg1?:number;
  arg2?:number;
  arg3?:number;
  arg4?:number;
  arg5?:number;
  arg6?:number;
  arg7?:number;
  arg8?:number;
  arg9?:number;
  arg10?:number;
  arg11?:number;
  arg12?:number;
  arg13?:number;
  arg14?:number;
  arg15?:number;
  values?:Array<number>;

  v4_0?:Vector4;
  v4_1?:Vector4;
  v4_2?:Vector4;
  v4_3?:Vector4;

  v4_u?:Vector4;
  v4_v?:Vector4;

  radians?:number;
  v3_t?:Vector3;
  v3_s?:Vector3;
  x?:number; 
  y?:number; 
  z?:number;
  alpha?:number;
  beta?:number;
  rotation?:Quaternion;


  scale(x?:any, y?:number, z?:number) {
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

    if(this.arg0!=null && this.arg0!=undefined && sx!=null && sx!=undefined){
      this.arg0 = this.arg0 *sx;
    }

    if(this.arg1!=null && this.arg1!=undefined && sx!=null && sx!=undefined){
      this.arg1 = this.arg1 *sx;
    }
    if(this.arg2!=null && this.arg2!=undefined && sx!=null && sx!=undefined){
      this.arg2 = this.arg2 *sx;
    }
    if(this.arg3!=null && this.arg3!=undefined && sx!=null && sx!=undefined){
      this.arg3 = this.arg3 *sx;
    }
    
    if(this.arg4!=null && this.arg4!=undefined && sy!=null && sy!=undefined){
      this.arg4 = this.arg4 *sy;
    }
    if(this.arg5!=null && this.arg5!=undefined && sy!=null && sy!=undefined){
      this.arg5 = this.arg5 *sy;
    }
    if(this.arg6!=null && this.arg6!=undefined && sy!=null && sy!=undefined){
      this.arg6 = this.arg6 *sy;
    }
    if(this.arg7!=null && this.arg7!=undefined && sy!=null && sy!=undefined){
      this.arg7 = this.arg7 *sy;
    }


    if(this.arg8!=null && this.arg8!=undefined && sz!=null && sz!=undefined){
      this.arg8 = this.arg8 *sz;
    }
    if(this.arg9!=null && this.arg9!=undefined && sz!=null && sz!=undefined){
      this.arg9 = this.arg9 *sz;
    }
    if(this.arg10!=null && this.arg10!=undefined && sz!=null && sz!=undefined){
      this.arg10 = this.arg10 *sz;
    }
    if(this.arg11!=null && this.arg11!=undefined && sz!=null && sz!=undefined){
      this.arg11 = this.arg11 *sz;
    }

    if(this.arg12!=null && this.arg12!=undefined && sw!=null && sw!=undefined){
      this.arg12 = this.arg12 *sw;
    }
    if(this.arg13!=null && this.arg13!=undefined && sw!=null && sw!=undefined){
      this.arg13 = this.arg13 *sw;
    }
    if(this.arg14!=null && this.arg14!=undefined && sw!=null && sw!=undefined){
      this.arg14 = this.arg14 *sw;
    }
    if(this.arg15!=null && this.arg15!=undefined && sw!=null && sw!=undefined){
      this.arg15 = this.arg15 *sw;
    }
  }

  static new(arg0:number,arg1:number,arg2:number,arg3:number,arg4:number,arg5:number,arg6:number,arg7:number,
    arg8:number,arg9:number,arg10:number,arg11:number,arg12:number,arg13:number,arg14:number,arg15:number) {
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
    return Matrix4.new(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
  }

  static fromList(values:Array<number>) {
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

  static columns(v4_0:Vector4,v4_1:Vector4,v4_2:Vector4,v4_3:Vector4) {
    let v = new Matrix4();
    v.constructorName = "columns";
  
    v.v4_0 = v4_0;
    v.v4_1 = v4_1;
    v.v4_2 = v4_2;
    v.v4_3 = v4_3;
  
    return v;
  }

  static outer(v4_u:Vector4,v4_v:Vector4) {
    let v = new Matrix4();
    v.constructorName = "outer";
    v.v4_u = v4_u;
    v.v4_v = v4_v;
    return v;
  }

  static rotationX(radians:number) {
    let v = new Matrix4();
    v.constructorName = "rotationX";
  
    v.radians = radians;
  
    return v;
  }

  static rotationY (radians:number) {
    let v = new Matrix4();
    v.constructorName = "rotationY";
  
    v.radians = radians;
    return v;
  }

  static rotationZ(radians:number) {
    let v = new Matrix4();
    v.constructorName = "rotationZ";
    v.radians = radians;
    return v;
  }

   static translation(v3_t:Vector3) {
    let v = new Matrix4();
    v.constructorName = "translation";
  
    v.v3_t = v3_t;
  
    return v;
  }

  static translationValues(x:number, y:number, z:number) {
    let v = new Matrix4();
    v.constructorName = "translationValues";
  
    v.x = x;
    v.y = y;
    v.z = z;
  
    return v;
  }

  static diagonal3(v3_s:Vector3) {
    let v = new Matrix4();
    v.constructorName = "diagonal3";

    v.v3_s = v3_s;

    return v;
  }

  static diagonal3Values(x:number, y:number, z:number) {
    let v = new Matrix4();
    v.constructorName = "diagonal3Values";

    v.x = x;
    v.y = y;
    v.z = z;

    return v;
  }

  static skewX(alpha:number) {
    let v = new Matrix4();
    v.constructorName = "skewX";
  
    v.alpha = alpha;
  
    return v;
  } 

  static skewY(beta:number) {
    let v = new Matrix4();
    v.constructorName = "skewY";
  
    v.beta = beta;
    return v;
  }

  static skew(alpha:number, beta:number) {
    let v = new Matrix4();
    v.constructorName = "skew";
  
    v.alpha = alpha;
    v.beta = beta;
  
    return v;
  }

  static compose(v3_t:Vector3, rotation:Quaternion, v3_s:Vector3) {
    let v = new Matrix4();
    v.constructorName = "compose";

    v.v3_t = v3_t;
    v.rotation = rotation;
    v.v3_s = v3_s;

    return v;
  }
}

//****** MediaQuery ******
export class MediaQuery extends DartClass {
  child?:FlutterWidget;
  data?:MediaQueryData;
  key?:Key;

  static new(child:FlutterWidget, data:MediaQueryData, key?:Key,) {
    var v = new MediaQuery();
    v.key = key;
    v.data = data; //MediaQueryData
    v.child = child;
    return new MediaQuery();
  };

  static of(context:any) {
    return context.mediaQueryData;
  }
}

//****** MediaQueryData ******
interface MediaQueryDataConfig {
  size?:Size;
  devicePixelRatio?:number;
  textScaleFactor?:number;
  platformBrightness?:Brightness;
  padding?:EdgeInsets;
  viewInsets?:EdgeInsets;
  alwaysUse24HourFormat?:boolean;
  accessibleNavigation?:boolean;
  invertColors?:boolean;
  highContrast?:boolean;
  disableAnimations?:boolean;
  boldText?:boolean;
  navigationMode?:NavigationMode;
}
export class MediaQueryData extends DartClass {
  size?:Size;
  devicePixelRatio?:number;
  textScaleFactor?:number;
  platformBrightness?:Brightness;
  padding?:EdgeInsets;
  viewInsets?:EdgeInsets;
  alwaysUse24HourFormat?:boolean;
  accessibleNavigation?:boolean;
  invertColors?:boolean;
  highContrast?:boolean;
  disableAnimations?:boolean;
  boldText?:boolean;
  navigationMode?:NavigationMode;


  /**
   * @param config config: {size?:Size, devicePixelRatio?:number, textScaleFactor?:number, platformBrightness?:Brightness, padding?:EdgeInsets,
    viewInsets?:EdgeInsets, alwaysUse24HourFormat?:boolean, accessibleNavigation?:boolean, invertColors?:boolean,
    highContrast?:boolean, disableAnimations?:boolean, boldText?:boolean, navigationMode?:NavigationMode}
   */
  static new(config: MediaQueryDataConfig) {
      var v = new MediaQueryData();
      if(config!=null && config!=undefined){
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
        v.navigationMode= config.navigationMode;
      }
      return v;
  }
}

//-------------- N -----------------
//****** NavigationMode ******
export enum NavigationMode {
  traditional = "traditional",
  directional = "directional",
}

//****** NetworkAssetBundle ******
export class NetworkAssetBundle extends BasicAssetBundle {
  baseUrl?:Uri;
  static new(baseUrl:Uri) {
    var v = new NetworkAssetBundle();
    v.baseUrl = baseUrl;
    return v;
  }
}

//****** NeverScrollableScrollPhysics ******
export class NeverScrollableScrollPhysics extends DartClass {
  parent?:NeverScrollableScrollPhysics;
  static new(parent?:NeverScrollableScrollPhysics) {
    var v = new NeverScrollableScrollPhysics();
    v.parent = parent;
    return v;
  }
}

//****** Notification ******
export class Notification extends DartClass {
  static new() {
    return new Notification();
  }
}

//-------------- O -----------------
//****** Overflow ******
export enum Overflow {
  visible = "visible",
  clip = "clip",
}

//****** Offset ******
export class Offset extends DartClass {
  dx?:number;
  dy?:number;

  static new(dx:number, dy:number) {
    var v = new Offset();
    v.dx = dx;
    v.dy = dy;
    return v;
  }
}

//****** OutlineInputBorder ******
interface OutlineInputBorderConfig {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  gapPadding?:number;
}
export class OutlineInputBorder extends DartClass {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  gapPadding?:number;

  /**
   * @param config config: {borderSide?:BorderSide, borderRadius?:BorderRadius, gapPadding?:number,}
   */
  static new(config: OutlineInputBorderConfig) {
    var v = new OutlineInputBorder();
    if(config!=null && config!=undefined){
      v.borderRadius = config.borderRadius;
      v.borderSide = config.borderSide;
      v.gapPadding = config.gapPadding;
    }
    return v;
  }
}

//-------------- P -----------------
//****** PaintingStyle ******
export enum PaintingStyle {
  fill = "fill",
  stroke = "stroke",
}

//****** PlatformAssetBundle ******
export class PlatformAssetBundle extends BasicAssetBundle {
  static new() {
    return new PlatformAssetBundle();
  }
}

//-------------- Q -----------------
//****** Quaternion ******
export class Quaternion extends DartClass {
  x?:number;
  y?:number;
  z?:number;
  w?:number;
  static new(x:number, y:number, z:number, w:number) {
    var v = new Quaternion();
    v.x = x;
    v.y = y;
    v.z = z;
    v.w = w;
    return v;
  }
}

//-------------- R -----------------
//****** Radius ******
export class Radius extends DartClass {
  radius?:number;
  x?:number;
  y?:number;

  static circular(radius:number) {
    let v = new Radius();
    v.constructorName = "circular";
    v.radius = radius;
    return v;
  }

  static elliptical(x:number, y:number) {
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

//****** Rect ******
interface RectConfig {
  center?:Offset;
  width?:number;
  height?:number;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  radius?:number;
  a?:Offset;
  b?:Offset;
}
export class Rect extends DartClass {
  center?:Offset;
  width?:number;
  height?:number;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  radius?:number;
  a?:Offset;
  b?:Offset;

  /**
   * @param config config: {center?:Offset, width?:number,height?:number}
   */
  static fromCenter (config: RectConfig) {
    let v = new Rect();
    v.constructorName = "fromCenter";
    if(config!=null && config!=undefined){
      v.center = config.center;
      v.width = config.width;
      v.height = config.height;  
    }
    return v;
  }

  static fromLTRB(left:number, top:number, right:number, bottom:number) {
    let v = new Rect();
    v.constructorName = "fromLTRB";
    v.left = left;
    v.top = top;
    v.right = right;
    v.bottom = bottom;  
    return v;
  }
  
  static fromLTWH(left:number, top:number, width:number, height:number) {
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
  static fromCircle(config: RectConfig) {
    let v = new Rect();
    v.constructorName = "fromCircle";
    if(config!=null && config!=undefined){
      v.center = config.center;
      v.radius = config.radius;
    }
    return v;
  }

  /**
   * @param config config: {a?:Offset, b?:Offset}
   */
  static fromPoints (config: RectConfig) {
    let v = new Rect();
    v.constructorName = "fromPoints";
    if(config!=null && config!=undefined){
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

//****** RadialGradient ******
interface RadialGradientConfig {
  center?:Alignment;
  radius?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  focal?:Alignment;
  focalRadius?:number;
}
export class RadialGradient extends BasicGradient {
  center?:Alignment;
  radius?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  focal?:Alignment;
  focalRadius?:number;

  /**
   * @param config config: {center?:Alignment, radius?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode, focal?:Alignment, focalRadius?:number}
   */
  static new (config: RadialGradientConfig) {
    var v = new RadialGradient();
    if(config!=null && config!=undefined){
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

//-------------- S -----------------
//****** StackFit ******
export enum StackFit {
  loose = "loose",
  expand = "expand",
  passthrough = "passthrough",
}

//****** StrokeCap ******
export enum StrokeCap {
  butt = "butt",
  round = "round",
  square = "square",
}

//****** StrokeJoin ******
export enum StrokeJoin {
  miter = "miter",
  round = "round",
  bevel = "bevel",
}

//****** StretchMode ******
export enum StretchMode {
  zoomBackground = "zoomBackground",
  blurBackground = "blurBackground",
  fadeTitle = "fadeTitle",
}

//****** Size ******
export class Size extends DartClass {
  width?:number;
  height?:number;
  dimension?:number;
  radius?:number;
  static new(width:number, height:number) {
    var v = new Size();
    v.width = width;
    v.height = height;
    return v;
  }

  static fromHeight(height:number){
    let v = new Size();
    v.constructorName = "fromHeight";
    v.height=height;
    return v;
  }

  static fromWidth(width:number) {
    let v = new Size();
    v.constructorName = "fromWidth";
    v.width=width;
    return v;
  }

  static square (dimension:number) {
    let v = new Size();
    v.constructorName = "square";
    v.dimension=dimension;
    return v;
  }

  static fromRadius (radius:number){
    let v = new Size();
    v.constructorName = "fromRadius";
    v.radius=radius;
    return v;
  }

  static zero(){
    let v = new Size();
    v.constructorName = "zero";
    return v;
  }
}

//****** SweepGradient ******
interface SweepGradientConfig {
  center?:Alignment;
  startAngle?:number;
  endAngle?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
}
export class SweepGradient extends DartClass {
  center?:Alignment;
  startAngle?:number;
  endAngle?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;

  /**
   * @param config config: {center?:Alignment, startAngle?:number, endAngle?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
   */
  static new(config: SweepGradientConfig) {
    var v = new SweepGradient();
    if(config!=null && config!=undefined){
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

//****** SystemUiOverlayStyle ******
interface SystemUiOverlayStyleConfig {
  systemNavigationBarColor?:Color;
  systemNavigationBarDividerColor?:Color;
  statusBarColor?:Color;
  systemNavigationBarIconBrightness?:Brightness;
  statusBarBrightness?:Brightness;
  statusBarIconBrightness?:Brightness;
}
export class SystemUiOverlayStyle extends DartClass {
  systemNavigationBarColor?:Color;
  systemNavigationBarDividerColor?:Color;
  statusBarColor?:Color;
  systemNavigationBarIconBrightness?:Brightness;
  statusBarBrightness?:Brightness;
  statusBarIconBrightness?:Brightness;

  /**
   * @param config config: {systemNavigationBarColor?:Color, systemNavigationBarDividerColor?:Color, statusBarColor?:Color,
      systemNavigationBarIconBrightness?:Brightness, statusBarBrightness?:Brightness, statusBarIconBrightness?:Brightness}
   */
  static new(config: SystemUiOverlayStyleConfig) {
        var v = new SystemUiOverlayStyle();
        if(config!=null && config!=undefined){
          v.systemNavigationBarColor = config.systemNavigationBarColor;
          v.systemNavigationBarDividerColor = config.systemNavigationBarDividerColor;
          v.systemNavigationBarIconBrightness = config.systemNavigationBarIconBrightness;
          v.statusBarColor = config.statusBarColor;
          v.statusBarBrightness = config.statusBarBrightness;
          v.statusBarIconBrightness = config.statusBarIconBrightness;
        }
        return v;
  }

  static light = SystemUiOverlayStyle.new({
    systemNavigationBarColor:Color.new(0xff000000),
    systemNavigationBarIconBrightness:Brightness.light,
    statusBarBrightness:Brightness.light,
    statusBarIconBrightness:Brightness.dark
  });

  static dark = SystemUiOverlayStyle.new({
    systemNavigationBarColor:Color.new(0xff000000),
    systemNavigationBarIconBrightness:Brightness.light,
    statusBarBrightness:Brightness.dark,
    statusBarIconBrightness:Brightness.light
  });
}

//****** SpringDescription ******
interface SpringDescriptionConfig {
  mass?:number;
  stiffness?:number; 
  damping?:number;
}
export class SpringDescription extends DartClass {
  mass?:number;
  stiffness?:number; 
  damping?:number;

  /**
   * @param config config: {mass?:number,stiffness?:number,damping?:number}
   */
  static new(config: SpringDescriptionConfig) {
    var v = new SpringDescription();
    if(config!=null && config!=undefined){
      v.mass = config.mass;
      v.stiffness = config.stiffness;
      v.damping = config.damping;
    }
    return v;
  }
}

//****** ScrollPhysics ******
export class ScrollPhysics extends DartClass {
  parent?:ScrollPhysics;
  static new(parent?:ScrollPhysics) {
    var v = new ScrollPhysics();
    v.parent = parent;
    return v;
  }
}

//****** ScrollController ******
interface ScrollControllerConfig {
  duration?:Duration;
  curve?:Curve;
  initialScrollOffset?:number;
  keepScrollOffset?:boolean;
  debugLabel?:string;
}

// Todo:
export class ScrollController extends DartClass {
  initialScrollOffset?:number;
  keepScrollOffset?:boolean;
  debugLabel?:string;

  /**
   * @param config config: {duration?:Duration, curve?:Curves}
   */
  animateTo(offset:Offset,config?: ScrollControllerConfig) {
    var map = new Map();
    map.set("offset",offset);
    if(config!=null && config!=undefined){
      if(config.duration!=null && config.duration!=undefined){
        map.set("duration",config.duration);
      }

      if(config.curve!=null && config.curve!=undefined){
        map.set("curve",config.curve);
      }
    }

    let argument = FlutterCallArgs.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"animateTo",args:map});
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

  jumpTo(value:number) {
    var args=new Map();
    args.set("value",value);

    let argument=FlutterCallArgs.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"jumpTo",args:args});
    //invokeFlutterFunction(argument);
  }

  /**
   * @param config config: {initialScrollOffset?:number, keepScrollOffset?:boolean, debugLabel?:string}
   */
  static new(config: ScrollControllerConfig) {
    var v = new ScrollController();
    v.createMirrorObjectID();
    if(config!=null && config!=undefined){
      v.initialScrollOffset = config.initialScrollOffset;
      v.keepScrollOffset = config.keepScrollOffset;
      v.debugLabel = config.debugLabel;
    }
    return v;
  }
}

//****** Shadow ******
interface ShadowConfig {
  color?:Color;
  offset?:Offset;
  blurRadius?:number;
}
export class Shadow extends DartClass {
  color?:Color;
  offset?:Offset;
  blurRadius?:number;

  /**
   * @param config config: {color?:Color, offset?:Offset, blurRadius?:number}
   */
  static new(config: ShadowConfig) {
    var v = new Shadow();
    if(config!=null && config!=undefined){
      v.color = config.color;
      v.blurRadius = config.blurRadius;
      v.offset = config.offset;
    }
    return v;
  }
}

//-------------- T -----------------
//****** TileMode ******
export enum TileMode {
  clamp = "clamp",
  repeated = "repeated",
  mirror = "mirror",
}

//****** TextAlign ******
export enum TextAlign {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
  start = "start",
  end = "end",
}

//****** TextDirection ******
export enum TextDirection {
  rtl = "rtl",
  ltr = "ltr",
}

//****** TextDecorationStyle ******
export enum TextDecorationStyle {
  ashed = "ashed",
  dotted = "dotted",
  double = "double",
  solid = "solid",
}

//****** TextBaseline ******
export enum TextBaseline {
  alphabetic = "alphabetic",
  ideographic = "ideographic",
}

//****** TextDecoration ******
export enum TextDecoration {
  none = "none",
  underline = "underline",
  overline = "overline",
  lineThrough = "lineThrough",
}

//****** TextOverflow ******
export enum TextOverflow {
  clip = "clip",
  fade = "fade",
  ellipsis = "ellipsis",
}

//****** TextCapitalization ******
export enum TextCapitalization {
  words = "words",
  sentences = "sentences",
  characters = "characters",
  none = "none",
}

//****** TextInputAction ******
export enum TextInputAction {
  none = "none",
  nspecified = "nspecified",
  one = "one",
  go = "go",
  search = "search",
  send = "send",
  next = "next",
  previous = "previous",
  continueAction = "continueAction",
  join = "join",
  route = "route",
  emergencyCall = "emergencyCall",
  newline = "newline",
}

//****** TableCellVerticalAlignment ******
export enum TableCellVerticalAlignment {
  top = "top",
  middle = "middle",
  bottom = "bottom",
  baseline = "baseline",
  fill = "fill",
}

//****** TabBarIndicatorSize ******
export enum TabBarIndicatorSize {
  tab = "tab",
  label = "label",
}

//****** TargetPlatform ******
export enum TargetPlatform {
  android = "android",
  fuchsia = "fuchsia",
  iOS = "iOS",
}

//****** TextStyle ******
interface TextStyleConfig {
  inherit?:boolean;
  color?:Color;
  fontSize?:number;
  fontWeight?:FontWeight;
  fontStyle?:FontStyle;
  letterSpacing?:number;
  wordSpacing?:number;
  textBaseline?:TextBaseline;
  height?:number;
  decoration?:TextDecoration;
  decorationColor?:Color;
  decorationStyle?:TextDecorationStyle;
  debugLabel?:string;
  fontFamily?:string;
  packageName?:string;
}
export class TextStyle extends DartClass {
  inherit?:boolean;
  color?:Color;
  fontSize?:number;
  fontWeight?:FontWeight;
  fontStyle?:FontStyle;
  letterSpacing?:number;
  wordSpacing?:number;
  textBaseline?:TextBaseline;
  height?:number;
  decoration?:TextDecoration;
  decorationColor?:Color;
  decorationStyle?:TextDecorationStyle;
  debugLabel?:string;
  fontFamily?:string;
  packageName?:string;

  /**
   * @param config config: {inherit?:boolean, color?:Color, fontSize?:number, fontWeight?:FontWeight, fontStyle?:FontStyle, 
    letterSpacing?:number, wordSpacing?:number, textBaseline?:TextBaseline, height?:number, decoration?:TextDecoration, 
    decorationColor?:Color, decorationStyle?:TextDecorationStyle, debugLabel?:string, fontFamily?:string, packageName?:string}
   */
  static new (config: TextStyleConfig) {
    var v = new TextStyle();
    if(config!=null && config!=undefined){
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

//****** TableRow ******
interface TableBorderConfig {
  top?:BorderSide;
  right?:BorderSide;
  bottom?:BorderSide;
  left?:BorderSide;
  horizontalInside?:BorderSide;
  verticalInside?:BorderSide;

  color?:Color;
  width?:number;
  style?:BorderStyle;

  inside?:BorderSide;
  outside?:BorderSide;
}
export class TableBorder extends DartClass {
  top?:BorderSide;
  right?:BorderSide;
  bottom?:BorderSide;
  left?:BorderSide;
  horizontalInside?:BorderSide;
  verticalInside?:BorderSide;

  color?:Color;
  width?:number;
  style?:BorderStyle;

  inside?:BorderSide;
  outside?:BorderSide;

  /**
   * @param config config: {top?:BorderSide,right?:BorderSide,bottom?:BorderSide,left?:BorderSide,horizontalInside?:BorderSide,verticalInside?:BorderSide}
   */
  static new(config: TableBorderConfig) {
    var v = new TableBorder();
    if(config!=null && config!=undefined){
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
  static all(config: TableBorderConfig) {
    let v = new TableBorder();
    v.constructorName = "all";
    if(config!=null && config!=undefined){
      v.color = config.color;
      v.width = config.width;
      v.style = config.style;
    }
    return v;
  }

  /**
   * @param config config: {inside?:BorderSide, outside?:BorderSide}
   */
  static symmetric(config: TableBorderConfig) {
    let v = new TableBorder();
    v.constructorName = "symmetric";
    if(config!=null && config!=undefined){
      v.inside = config.inside;
      v.outside = config.outside;
    }
    return v;
  }
}

//****** TableRow ******
export class TableColumnWidth extends DartClass {
  static new() {
    return new TableColumnWidth();
  }
}

//****** TabController ******
interface TabControllerConfig {
  initialIndex?:number;
  length?:number;
  vsync?:any;
}
export class TabController extends DartClass {
  initialIndex?:number;
  length?:number;
  vsync?:any;

  /**
   * @param config config: {initialIndex?:number,length?:number,vsync?:any}
   */
  static new (config: TabControllerConfig) {
    var v = new TabController();
    if(config!=null && config!=undefined){
      v.initialIndex = config.initialIndex;
      v.length = config.length;
      v.vsync = config.vsync;
    }
    return v;
  }
}

//****** TextEditingController ******
export class TextEditingController extends DartClass {
  text?:string;

  static new(text?:string) {
    var v = new TextEditingController();
    v.text=text;
    return v;
  }
}

//****** TextInputType ******
export class TextInputType extends DartClass {
  
  signed?:boolean;
  decimal?:boolean;

  static new(){
    return new TextInputType();
  };

  static numberWithOptions(signed?:boolean,decimal?:boolean) {
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

  static url(){
    let v = new TextInputType();
    v.constructorName = "url";
    return v;
  }

}

//****** Tween ******
export class Tween extends DartClass {
  begin?:number;
  end?:number;
  
  lerp(t:number) {
    return dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
  }
  transform(t:number) {
    if (t == 0.0) return this.begin;
    if (t == 1.0) return this.end;
    return this.lerp(t);
  }

  static new(begin?:number, end?:number) {
    var v = new Tween();
    v.begin = begin;
    v.end = end;
    return v;
  };
}


//-------------- U -----------------
//****** UniqueKey ******
export class UniqueKey extends BasicKey {
  static new(){
    return new UniqueKey();
  }
}

//****** Uri ******
interface UriConfig {
  scheme?:string;
  fragment?:string;
  userInfo?:string;
  host?:string;
  port?:number;
  path?:string;
  query?:string;
}
export class Uri extends DartClass {
  scheme?:string;
  fragment?:string;
  userInfo?:string;
  host?:string;
  port?:number;
  path?:string;
  query?:string;

  /**
   * @param config config: {scheme?:string,fragment?:string,userInfo?:string, host?:string, port?:number, path?:string,query?:string}
   */
  static new(config: UriConfig){
    var v = new Uri();
    if(config!=null && config!=undefined){
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

//****** VerticalDirection ******
export class Uint8List extends DartClass {
  length?:number;
  elements?:Array<number>;
  static new(length?:number) {
    var v = new Uint8List();
    v.length = length;
    return v;
  }

  static fromList(elements?:Array<number>) {
    let v = new Uint8List();
    v.constructorName = "fromList";
    v.elements = elements;
  
    return v;
  }
}

//****** UnderlineInputBorder ******
export class UnderlineInputBorder extends DartClass {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  
  static new(borderSide?:BorderSide,borderRadius?:BorderRadius) {
    var v = new UnderlineInputBorder();
    v.borderRadius=borderRadius;
    v.borderSide=borderSide;
    return v;
  };

}


//-------------- V -----------------
//****** VerticalDirection ******
export enum VerticalDirection {
  up = "up",
  down = "down",
}

//****** Vector3 ******
export class Vector3 extends DartClass {
  x?:number;
  y?:number;
  z?:number;
  value?:number;
  static new(x:number, y:number, z:number) {
    var v = new Vector3();
    v.x = x;
    v.y = y;
    v.z = z;
    return v;
  }

  static zero(){
    let v = new Vector3();
    v.constructorName = "zero";
    return v;
  }

  static all(value:number) {
    let v = new Vector3();
    v.constructorName = "all";
    v.value = value;
    return v;
  }
}

//****** Vector4 ******
export class Vector4 extends DartClass {
  x?:number;
  y?:number;
  z?:number;
  w?:number;
  array?:Array<number>;
  offset?:Offset;

  static new(x?:number,y?:number,z?:number,w?:number) {
    var v = new Vector4();
    v.x = x;
    v.y = y;
    v.z = z;
    v.w = w;
    return v;
  }

  static array (array?:Array<number>, offset?:Offset) {
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

//-------------- W -----------------
//****** WrapAlignment ******
export enum WrapAlignment {
  start = "start",
  end = "end",
  center = "center",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
  spaceEvenly = "spaceEvenly",
}

//****** WrapCrossAlignment ******
export enum WrapCrossAlignment {
  start = "start",
  end = "end",
  center = "center",
}

//-------------- X -----------------
//-------------- Y -----------------
//-------------- Z -----------------
