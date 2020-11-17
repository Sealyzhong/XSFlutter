declare const core: any;
export declare class WidgetMirrorMgr {
    mirrorIDFeed: number;
    mirrorObjMap: Map<string, any>;
    static instance?: WidgetMirrorMgr;
    constructor();
    static getInstance(): WidgetMirrorMgr;
    generateID(obj: any): string;
    removeMirrorObjects(mirrorIDList: Array<string>): void;
    getMirrorObj(mirrorID: string): any;
}
interface FlutterCallArgsConfig {
    widgetID?: string;
    mirrorID?: string;
    className?: string;
    funcName?: string;
    args?: Map<string, any>;
}
export declare class FlutterCallArgs {
    widgetID?: string;
    mirrorID?: string;
    className?: string;
    funcName?: string;
    args?: Map<string, any>;
    /**
     * @param config config: {widgetID?:string,mirrorID?:string,className?:string,funcName?:string,args?:Map<string,any>}
     */
    static new(config: FlutterCallArgsConfig): FlutterCallArgs;
}
export declare class DartClass extends core.Object {
    className: string;
    constructorName?: string;
    mirrorID?: string;
    constructor();
    createMirrorObjectID(): void;
}
export declare class FlutterWidget extends DartClass {
    constructor();
    preBuild(jsWidgetHelper: any, buildContext: any): void;
}
export declare class BasicKey extends DartClass {
}
export declare class BasicConstraints extends DartClass {
}
export declare class BasicGradient extends DartClass {
}
export declare class BasicAssetBundle extends DartClass {
    constructor();
}
export declare enum Axis {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum AnimationStatus {
    dismissed = "dismissed",
    forward = "forward",
    reverse = "reverse",
    completed = "completed"
}
export declare enum AnimationBehavior {
    normal = "normal",
    preserve = "preserve"
}
export declare class Alignment extends DartClass {
    x?: number;
    y?: number;
    static new(x: number, y: number): Alignment;
    static topLeft: Alignment;
    static topCenter: Alignment;
    static topRight: Alignment;
    static centerLeft: Alignment;
    static center: Alignment;
    static centerRight: Alignment;
    static bottomLeft: Alignment;
    static bottomCenter: Alignment;
    static bottomRight: Alignment;
}
export declare class AlignmentDirectional extends DartClass {
    start?: number;
    y?: number;
    static new(start: number, y: number): AlignmentDirectional;
}
export declare class AlwaysScrollableScrollPhysics extends DartClass {
    parent?: AlwaysScrollableScrollPhysics;
    static new(parent?: AlwaysScrollableScrollPhysics): {};
}
interface AnimationControllerConfig {
    value?: number;
    duration?: Duration;
    debugLabel?: string;
    lowerBound?: number;
    upperBound?: number;
    animationBehavior?: AnimationBehavior;
    vsync?: any;
}
export declare class AnimationController extends FlutterWidget {
    value?: number;
    duration?: Duration;
    debugLabel?: string;
    lowerBound?: number;
    upperBound?: number;
    animationBehavior?: AnimationBehavior;
    vsync?: any;
    /**
     * @param config config: {value?:number, duration?:Duration, debugLabel?:string, lowerBound?:number, upperBound?:number, animationBehavior?:AnimationBehavior, vsync?:any }
     */
    static new(config: AnimationControllerConfig): AnimationController;
    dispose(): void;
}
export declare class Animation extends FlutterWidget {
    tween?: Tween;
    controller?: AnimationController;
    statusListenerList?: any;
    listenerList?: any;
    static new(tween?: Tween, controller?: AnimationController): Animation;
    statusListenerCallback(status: any): void;
    listenerCallback(status: any): void;
    value(): string;
    addListener(callback: any): void;
    removeListener(callback: any): void;
    addStatusListener(callback: any): void;
    removeStatusListener(callback: any): void;
}
export declare enum BlendMode {
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
    luminosity = "luminosity"
}
export declare enum BoxFit {
    fill = "fill",
    contain = "contain",
    cover = "cover",
    fitWidth = "fitWidth",
    fitHeight = "fitHeight",
    none = "none",
    scaleDown = "scaleDown"
}
export declare enum Brightness {
    dark = "dark",
    light = "light"
}
export declare enum BlurStyle {
    normal = "normal",
    solid = "solid",
    outer = "outer",
    inner = "inner"
}
export declare enum BorderStyle {
    none = "none",
    solid = "solid"
}
export declare enum BottomNavigationBarType {
    fixed = "enum",
    shifting = "shifting"
}
export declare enum BoxShape {
    circle = "circle",
    rectangle = "rectangle"
}
export declare enum ButtonTextTheme {
    normal = "normal",
    accent = "accent",
    primary = "primary"
}
export declare enum ButtonBarLayoutBehavior {
    constrained = "constrained",
    padded = "padded"
}
interface BoxConstraintsConfig {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
}
export declare class BoxConstraints extends BasicConstraints {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    /**
     * @param config config: {minWidth?:number、maxWidth?:number、minHeight?:number、maxHeight?:number}
     */
    static new(config: BoxConstraintsConfig): BoxConstraints;
}
interface BorderSideConfig {
    color?: Color;
    width?: number;
    style?: BorderStyle;
}
export declare class BorderSide extends DartClass {
    color?: Color;
    width?: number;
    style?: BorderStyle;
    /**
     * @param config config: {color?:Color, width?:number, style?:BorderStyle}
     */
    static new(config: BorderSideConfig): BorderSide;
    static none(): BorderSide;
}
interface BorderRadiusConfig {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
}
export declare class BorderRadius extends DartClass {
    radius?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
    static zero(): BorderRadius;
    static all(radius: number): BorderRadius;
    static circular(radius: number): BorderRadius;
    /**
     * @param config config: {top?:number, bottom?:number}
     */
    static vertical(config: BorderRadiusConfig): BorderRadius;
    /**
     * @param config config: {left?:number, right?:number}
     */
    static horizontal(config: BorderRadiusConfig): BorderRadius;
    /**
     * @param config config: {topLeft?:number, topRight?:number, bottomLeft?:number, bottomRight?:number}
     */
    static only(config: BorderRadiusConfig): BorderRadius;
}
interface BorderConfig {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    vertical?: BorderSide;
    horizontal?: BorderSide;
    color?: Color;
    width?: number;
    style?: BorderStyle;
}
export declare class Border extends DartClass {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    vertical?: BorderSide;
    horizontal?: BorderSide;
    /**
     * @param config config: {top?:BorderSide, right?:BorderSide, bottom?:BorderSide, left?:BorderSide}
     */
    static new(config: BorderConfig): Border;
    /**
     * @param config config: {color?:Color, width?:number, style?:BorderStyle}
     */
    static all(config: BorderConfig): Border;
    /**
     * @param config config: {vertical?:BorderSide, horizontal?:BorderSide}
     */
    static symmetric(config: BorderConfig): Border;
}
export declare class BorderDirectional extends DartClass {
    top?: BorderSide;
    start?: BorderSide;
    bottom?: BorderSide;
    end?: BorderSide;
    static new(top?: BorderSide, start?: BorderSide, end?: BorderSide, bottom?: BorderSide): BorderDirectional;
}
interface ButtonThemeDataConfig {
    textTheme?: ButtonTextTheme;
    minWidth?: number;
    height?: number;
    padding?: EdgeInsets;
    layoutBehavior?: ButtonBarLayoutBehavior;
    alignedDropdown?: boolean;
    buttonColor?: Color;
    disabledColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorScheme?: ColorScheme;
}
export declare class ButtonThemeData extends DartClass {
    textTheme?: ButtonTextTheme;
    minWidth?: number;
    height?: number;
    padding?: EdgeInsets;
    layoutBehavior?: ButtonBarLayoutBehavior;
    alignedDropdown?: boolean;
    buttonColor?: Color;
    disabledColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorScheme?: ColorScheme;
    /**
     * @param config config: {textTheme?:ButtonTextTheme, minWidth?:number, height?:number, padding?:EdgeInsets, layoutBehavior?:ButtonBarLayoutBehavior,
        alignedDropdown?:boolean, buttonColor?:Color, disabledColor?:Color, focusColor?:Color, hoverColor?:Color, highlightColor?:Color,
        splashColor?:Color,colorScheme?:ColorScheme}
     */
    static new(config: ButtonThemeDataConfig): ButtonThemeData;
}
interface BoxDecorationConfig {
    color?: Color;
    border?: Border;
    borderRadius?: BorderRadius;
    boxShadow?: BoxShadow;
    gradient?: BasicGradient;
    backgroundBlendMode?: BlendMode;
    shape?: BoxShape;
}
export declare class BoxDecoration extends DartClass {
    color?: Color;
    border?: Border;
    borderRadius?: BorderRadius;
    boxShadow?: BoxShadow;
    gradient?: BasicGradient;
    backgroundBlendMode?: BlendMode;
    shape?: BoxShape;
    /**
     * @param config config: {color?:Color, border?:Border, borderRadius?:BorderRadius, boxShadow?:BoxShadow, gradient?:BasicGradient, backgroundBlendMode?:BlendMode,shape?:BoxShape}
     */
    static new(config: BoxDecorationConfig): BoxDecoration;
}
interface BoxShadowConfig {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    spreadRadius?: number;
}
export declare class BoxShadow extends DartClass {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    spreadRadius?: number;
    /**
     * @param config config: {color?:Color, offset?:Offset, blurRadius?:number, spreadRadius?:number}
     */
    static new(config: BoxShadowConfig): BoxShadow;
}
export declare enum CrossAxisAlignment {
    start = "start",
    end = "end",
    center = "center",
    stretch = "stretch",
    baseline = "baseline"
}
export declare enum Curve {
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
    elasticInOut = "elasticInOut"
}
export declare enum Clip {
    none = "none",
    hardEdge = "hardEdge",
    antiAlias = "antiAlias",
    antiAliasWithSaveLayer = "antiAliasWithSaveLayer"
}
export declare enum CollapseMode {
    parallax = "parallax",
    pin = "pin",
    none = "none"
}
export declare enum CrossFadeState {
    showFirst = "showFirst",
    showSecond = "showSecond"
}
export declare class Color extends DartClass {
    value?: number;
    a?: number;
    r?: number;
    g?: number;
    b?: number;
    opacity?: number;
    static new(value: number): Color;
    static fromARGB(a: number, r: number, g: number, b: number): Color;
    static fromRGBO(r: number, g: number, b: number, opacity: number): Color;
}
export declare class Colors extends Color {
    static transparent: Color;
    static black: Color;
    static black87: Color;
    static black54: Color;
    static black45: Color;
    static black38: Color;
    static black26: Color;
    static black12: Color;
    static white: Color;
    static white70: Color;
    static white54: Color;
    static white30: Color;
    static white24: Color;
    static white12: Color;
    static white10: Color;
    static red: Color;
    static redAccent: Color;
    static pink: Color;
    static pinkAccent: Color;
    static purple: Color;
    static purpleAccent: Color;
    static deepPurple: Color;
    static deepPurpleAccent: Color;
    static indigo: Color;
    static indigoAccent: Color;
    static blue: Color;
    static blueAccent: Color;
    static lightBlue: Color;
    static lightBlueAccent: Color;
    static cyan: Color;
    static cyanAccent: Color;
    static teal: Color;
    static tealAccent: Color;
    static green: Color;
    static greenAccent: Color;
    static lightGreen: Color;
    static lightGreenAccent: Color;
    static lime: Color;
    static limeAccent: Color;
    static yellow: Color;
    static yellowAccent: Color;
    static amber: Color;
    static amberAccent: Color;
    static orange: Color;
    static orangeAccent: Color;
    static deepOrange: Color;
    static deepOrangeAccent: Color;
    static brown: Color;
    static grey: Color;
    static blueGrey: Color;
}
export declare class ColorFilter extends DartClass {
    color?: Color;
    blendMode?: BlendMode;
    static new(color: Color, blendMode: BlendMode): ColorFilter;
    static mode(color: Color, blendMode: BlendMode): ColorFilter;
}
interface ColorSchemeConfig {
    primary?: Color;
    primaryVariant?: Color;
    secondary?: Color;
    secondaryVariant?: Color;
    surface?: Color;
    background?: Color;
    error?: Color;
    onPrimary?: Color;
    onSecondary?: Color;
    onSurface?: Color;
    onBackground?: Color;
    onError?: Color;
    brightness?: Brightness;
    primarySwatch?: Color;
    accentColor?: Color;
    cardColor?: Color;
    backgroundColor?: Color;
    errorColor?: Color;
}
export declare class ColorScheme extends DartClass {
    primary?: Color;
    primaryVariant?: Color;
    secondary?: Color;
    secondaryVariant?: Color;
    surface?: Color;
    background?: Color;
    error?: Color;
    onPrimary?: Color;
    onSecondary?: Color;
    onSurface?: Color;
    onBackground?: Color;
    onError?: Color;
    brightness?: Brightness;
    primarySwatch?: Color;
    accentColor?: Color;
    cardColor?: Color;
    backgroundColor?: Color;
    errorColor?: Color;
    /**
     * @param config config: {primary?:Color, primaryVariant?:Color, secondary?:Color, secondaryVariant?:Color, surface?:Color, background?:Color, error?:Color,onPrimary?:Color,
      onSecondary?:Color, onSurface?:Color, onBackground?:Color, onError?:Color, brightness?:Brightness}
     */
    static new(config: ColorSchemeConfig): ColorScheme;
    static fromSwatch(primarySwatch?: Color, accentColor?: Color, cardColor?: Color, backgroundColor?: Color, errorColor?: Color, brightness?: Brightness): ColorScheme;
}
export declare class CircularNotchedRectangle extends DartClass {
    static new(): CircularNotchedRectangle;
}
export declare class ClampingScrollPhysics extends DartClass {
    parent?: ClampingScrollPhysics;
    static new(parent?: ClampingScrollPhysics): ClampingScrollPhysics;
}
export declare class CircleBorder extends DartClass {
    side?: BorderSide;
    static new(side?: BorderSide): CircleBorder;
}
export declare class CurveTween extends FlutterWidget {
    curve?: Curve;
    static new(curve?: Curve): CurveTween;
}
export declare enum DragStartBehavior {
    down = "down",
    start = "start"
}
export declare enum DecorationPosition {
    background = "background",
    foreground = "foreground"
}
interface DurationConfig {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export declare class Duration extends DartClass {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    /**
     * @param config config: {days?:number, hours?:number, minutes?:number, seconds?:number, milliseconds?:number}
     */
    static new(config: DurationConfig): Duration;
}
interface EdgeInsetsConfig {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    value?: number;
    vertical?: number;
    horizontal?: number;
}
export declare class EdgeInsets extends DartClass {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    value?: number;
    vertical?: number;
    horizontal?: number;
    /**
     * @param config config: {left?:number, top?:number, right?:number, bottom?:number}
     */
    static new(config: EdgeInsetsConfig): EdgeInsets;
    static zero(): EdgeInsets;
    static fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets;
    /**
     * @param config config: {left?:number, top?:number, right?:number, bottom?:number}
     */
    static only(config: EdgeInsetsConfig): EdgeInsets;
    static all(value: number): EdgeInsets;
    /**
     * @param config config: {vertical?:number, horizontal?:number}
     */
    static symmetric(config: EdgeInsetsConfig): EdgeInsets;
}
interface EdgeInsetsDirectionalConfig {
    start?: number;
    top?: number;
    end?: number;
    bottom?: number;
}
export declare class EdgeInsetsDirectional extends DartClass {
    start?: number;
    top?: number;
    end?: number;
    bottom?: number;
    /**
     * @param config config: {start?:number, top?:number, end?:number, bottom?:number}
     */
    static new(config: EdgeInsetsDirectionalConfig): EdgeInsetsDirectional;
    static fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional;
    /**
     * @param config config: {start?:number, top?:number, end?:number, bottom?:number}
     */
    static only(config: EdgeInsetsDirectionalConfig): EdgeInsetsDirectional;
}
export declare enum FlutterLogoStyle {
    horizontal = "horizontal",
    markOnly = "markOnly",
    stacked = "stacked"
}
export declare enum FontWeight {
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
    w900 = "w900"
}
export declare enum FontStyle {
    italic = "italic",
    normal = "normal"
}
export declare enum FilterQuality {
    none = "none",
    low = "low",
    medium = "medium",
    high = "high"
}
export declare enum FloatingActionButtonLocation {
    endDocked = "endDocked",
    centerDocked = "centerDocked",
    endFloat = "endFloat",
    centerFloat = "centerFloat",
    startTop = "startTop",
    miniStartTop = "miniStartTop",
    endTop = "endTop"
}
export declare class FlexColumnWidth extends DartClass {
    value?: number;
    static new(value: number): FlexColumnWidth;
}
export declare class FixedColumnWidth extends DartClass {
    value?: number;
    static new(value: number): FixedColumnWidth;
}
export declare class File extends DartClass {
    path?: string;
    uri?: Uri;
    rawPath?: Uint8List;
    static new(path?: string): File;
    static fromUri(uri?: Uri): File;
    static fromRawPath(rawPath?: Uint8List): File;
}
export declare class GlobalKey extends BasicKey {
    debugLabel?: string;
    static new(debugLabel?: string): GlobalKey;
}
export declare enum HitTestBehavior {
    deferToChild = "deferToChild",
    opaque = "opaque",
    translucent = "translucent"
}
export declare enum ImageRepeat {
    repeat = "repeat",
    repeatX = "repeatX",
    repeatY = "repeatY",
    noRepeat = "noRepeat"
}
interface IconDataConfig {
    fontFamily?: string;
    fontPackage?: string;
    matchTextDirection?: boolean;
}
export declare class IconData extends DartClass {
    codePoint?: number;
    fontFamily?: string;
    fontPackage?: string;
    matchTextDirection?: boolean;
    /**
     * @param codePoint codePoint:number
     * @param config config: {fontFamily?:string, fontPackage?:string, matchTextDirection?:boolean}
     */
    static new(codePoint: number, config: IconDataConfig): IconData;
}
interface IconThemeDataConfig {
    color?: Color;
    opacity?: number;
    size?: number;
}
export declare class IconThemeData extends DartClass {
    color?: Color;
    opacity?: number;
    size?: number;
    /**
     * @param config config: {color?:Color, opacity?:number, size?:number}
     */
    static new(config: IconThemeDataConfig): IconThemeData;
}
export declare class InputBorder extends DartClass {
    static new(): InputBorder;
    static none(): InputBorder;
}
export declare class ImageShader extends DartClass {
    image?: any;
    tmx?: TileMode;
    tmy?: TileMode;
    matrix4?: Matrix4;
    static new(image: any, tmx: TileMode, tmy: TileMode, matrix4: Matrix4): ImageShader;
}
interface InputDecorationThemeConfig {
    labelStyle?: TextStyle;
    helperStyle?: TextStyle;
    hintStyle?: TextStyle;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    hasFloatingPlaceholder?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    isCollapsed?: boolean;
    prefixStyle?: TextStyle;
    suffixStyle?: TextStyle;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
}
export declare class InputDecorationTheme extends DartClass {
    labelStyle?: TextStyle;
    helperStyle?: TextStyle;
    hintStyle?: TextStyle;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    hasFloatingPlaceholder?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    isCollapsed?: boolean;
    prefixStyle?: TextStyle;
    suffixStyle?: TextStyle;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    /**
     * @param config config: {labelStyle?:TextStyle, helperStyle?:TextStyle, hintStyle?:TextStyle,errorStyle?:TextStyle,
      errorMaxLines?:number, hasFloatingPlaceholder?:boolean, isDense?:boolean, contentPadding?:EdgeInsets, isCollapsed?:boolean,
      prefixStyle?:TextStyle, suffixStyle?:TextStyle, counterStyle?:TextStyle, filled?:boolean, fillColor?:Color,
      errorBorder?:InputBorder, focusedBorder?:InputBorder, focusedErrorBorder?:InputBorder,
      disabledBorder?:InputBorder, enabledBorder?:InputBorder, border?:InputBorder}
     */
    static new(config: InputDecorationThemeConfig): InputDecorationTheme;
}
interface InputDecorationConfig {
    icon?: FlutterWidget;
    labelText?: string;
    labelStyle?: TextStyle;
    helperText?: string;
    helperStyle?: TextStyle;
    hintText?: string;
    hintStyle?: TextStyle;
    hintMaxLines?: number;
    errorText?: string;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    hasFloatingPlaceholder?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    prefixIcon?: FlutterWidget;
    prefix?: FlutterWidget;
    prefixText?: string;
    prefixStyle?: TextStyle;
    suffixIcon?: FlutterWidget;
    suffix?: FlutterWidget;
    suffixText?: string;
    suffixStyle?: TextStyle;
    counter?: FlutterWidget;
    counterText?: string;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    enabled?: boolean;
    semanticCounterText?: string;
    alignLabelWithHint?: boolean;
    staticFunctionName?: string;
}
export declare class InputDecoration extends DartClass {
    icon?: FlutterWidget;
    labelText?: string;
    labelStyle?: TextStyle;
    helperText?: string;
    helperStyle?: TextStyle;
    hintText?: string;
    hintStyle?: TextStyle;
    hintMaxLines?: number;
    errorText?: string;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    hasFloatingPlaceholder?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    prefixIcon?: FlutterWidget;
    prefix?: FlutterWidget;
    prefixText?: string;
    prefixStyle?: TextStyle;
    suffixIcon?: FlutterWidget;
    suffix?: FlutterWidget;
    suffixText?: string;
    suffixStyle?: TextStyle;
    counter?: FlutterWidget;
    counterText?: string;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    enabled?: boolean;
    semanticCounterText?: string;
    alignLabelWithHint?: boolean;
    staticFunctionName?: string;
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
    static new(config: InputDecorationConfig): InputDecoration;
    /**
     * @param config config: {hintText?:string, hasFloatingPlaceholder?:boolean, hintStyle?:TextStyle, filled?:boolean, fillColor?:Color, border?:InputBorder, enabled?:boolean }
     */
    static collapsed(config: InputDecorationConfig): InputDecoration;
}
export declare class Key extends BasicKey {
    value?: string;
    static new(value: string): Key;
}
interface LinearGradientConfig {
    begin?: Alignment;
    end?: Alignment;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
}
export declare class LinearGradient extends BasicGradient {
    begin?: Alignment;
    end?: Alignment;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    /**
     * @param config config: {begin?:Alignment, end?:Alignment, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
     */
    static new(config: LinearGradientConfig): LinearGradient;
}
export declare enum MainAxisAlignment {
    start = "start",
    end = "end",
    center = "center",
    spaceBetween = "spaceBetween",
    spaceAround = "spaceAround",
    spaceEvenly = "spaceEvenly"
}
export declare enum MainAxisSize {
    min = "min",
    max = "max"
}
export declare enum MaterialTapTargetSize {
    padded = "padded",
    shrinkWrap = "shrinkWrap"
}
export declare enum MaterialType {
    circle = "circle",
    button = "button",
    canvas = "canvas",
    card = "card",
    transparency = "transparency"
}
export declare class MaskFilter extends DartClass {
    style?: BlurStyle;
    sigma?: number;
    static new(style: BlurStyle, sigma: number): MaskFilter;
    static blur(style: BlurStyle, sigma: number): MaskFilter;
}
export declare class Matrix4 extends DartClass {
    arg0?: number;
    arg1?: number;
    arg2?: number;
    arg3?: number;
    arg4?: number;
    arg5?: number;
    arg6?: number;
    arg7?: number;
    arg8?: number;
    arg9?: number;
    arg10?: number;
    arg11?: number;
    arg12?: number;
    arg13?: number;
    arg14?: number;
    arg15?: number;
    values?: Array<number>;
    v4_0?: Vector4;
    v4_1?: Vector4;
    v4_2?: Vector4;
    v4_3?: Vector4;
    v4_u?: Vector4;
    v4_v?: Vector4;
    radians?: number;
    v3_t?: Vector3;
    v3_s?: Vector3;
    x?: number;
    y?: number;
    z?: number;
    alpha?: number;
    beta?: number;
    rotation?: Quaternion;
    scale(x?: any, y?: number, z?: number): void;
    static new(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): Matrix4;
    static identity(): Matrix4;
    static fromList(values: Array<number>): Matrix4;
    static zero(): Matrix4;
    static columns(v4_0: Vector4, v4_1: Vector4, v4_2: Vector4, v4_3: Vector4): Matrix4;
    static outer(v4_u: Vector4, v4_v: Vector4): Matrix4;
    static rotationX(radians: number): Matrix4;
    static rotationY(radians: number): Matrix4;
    static rotationZ(radians: number): Matrix4;
    static translation(v3_t: Vector3): Matrix4;
    static translationValues(x: number, y: number, z: number): Matrix4;
    static diagonal3(v3_s: Vector3): Matrix4;
    static diagonal3Values(x: number, y: number, z: number): Matrix4;
    static skewX(alpha: number): Matrix4;
    static skewY(beta: number): Matrix4;
    static skew(alpha: number, beta: number): Matrix4;
    static compose(v3_t: Vector3, rotation: Quaternion, v3_s: Vector3): Matrix4;
}
export declare class MediaQuery extends DartClass {
    child?: FlutterWidget;
    data?: MediaQueryData;
    key?: Key;
    static new(child: FlutterWidget, data: MediaQueryData, key?: Key): MediaQuery;
    static of(context: any): any;
}
interface MediaQueryDataConfig {
    size?: Size;
    devicePixelRatio?: number;
    textScaleFactor?: number;
    platformBrightness?: Brightness;
    padding?: EdgeInsets;
    viewInsets?: EdgeInsets;
    alwaysUse24HourFormat?: boolean;
    accessibleNavigation?: boolean;
    invertColors?: boolean;
    highContrast?: boolean;
    disableAnimations?: boolean;
    boldText?: boolean;
    navigationMode?: NavigationMode;
}
export declare class MediaQueryData extends DartClass {
    size?: Size;
    devicePixelRatio?: number;
    textScaleFactor?: number;
    platformBrightness?: Brightness;
    padding?: EdgeInsets;
    viewInsets?: EdgeInsets;
    alwaysUse24HourFormat?: boolean;
    accessibleNavigation?: boolean;
    invertColors?: boolean;
    highContrast?: boolean;
    disableAnimations?: boolean;
    boldText?: boolean;
    navigationMode?: NavigationMode;
    /**
     * @param config config: {size?:Size, devicePixelRatio?:number, textScaleFactor?:number, platformBrightness?:Brightness, padding?:EdgeInsets,
      viewInsets?:EdgeInsets, alwaysUse24HourFormat?:boolean, accessibleNavigation?:boolean, invertColors?:boolean,
      highContrast?:boolean, disableAnimations?:boolean, boldText?:boolean, navigationMode?:NavigationMode}
     */
    static new(config: MediaQueryDataConfig): MediaQueryData;
}
export declare enum NavigationMode {
    traditional = "traditional",
    directional = "directional"
}
export declare class NetworkAssetBundle extends BasicAssetBundle {
    baseUrl?: Uri;
    static new(baseUrl: Uri): NetworkAssetBundle;
}
export declare class NeverScrollableScrollPhysics extends DartClass {
    parent?: NeverScrollableScrollPhysics;
    static new(parent?: NeverScrollableScrollPhysics): NeverScrollableScrollPhysics;
}
export declare class Notification extends DartClass {
    static new(): Notification;
}
export declare enum Overflow {
    visible = "visible",
    clip = "clip"
}
export declare class Offset extends DartClass {
    dx?: number;
    dy?: number;
    static new(dx: number, dy: number): Offset;
}
interface OutlineInputBorderConfig {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    gapPadding?: number;
}
export declare class OutlineInputBorder extends DartClass {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    gapPadding?: number;
    /**
     * @param config config: {borderSide?:BorderSide, borderRadius?:BorderRadius, gapPadding?:number,}
     */
    static new(config: OutlineInputBorderConfig): OutlineInputBorder;
}
export declare enum PaintingStyle {
    fill = "fill",
    stroke = "stroke"
}
export declare class PlatformAssetBundle extends BasicAssetBundle {
    static new(): PlatformAssetBundle;
}
export declare class Quaternion extends DartClass {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
    static new(x: number, y: number, z: number, w: number): Quaternion;
}
export declare class Radius extends DartClass {
    radius?: number;
    x?: number;
    y?: number;
    static circular(radius: number): Radius;
    static elliptical(x: number, y: number): Radius;
    static zero(): Radius;
}
interface RectConfig {
    center?: Offset;
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    radius?: number;
    a?: Offset;
    b?: Offset;
}
export declare class Rect extends DartClass {
    center?: Offset;
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    radius?: number;
    a?: Offset;
    b?: Offset;
    /**
     * @param config config: {center?:Offset, width?:number,height?:number}
     */
    static fromCenter(config: RectConfig): Rect;
    static fromLTRB(left: number, top: number, right: number, bottom: number): Rect;
    static fromLTWH(left: number, top: number, width: number, height: number): Rect;
    /**
     * @param config config: {center?:Offset, radius?:number}
     */
    static fromCircle(config: RectConfig): Rect;
    /**
     * @param config config: {a?:Offset, b?:Offset}
     */
    static fromPoints(config: RectConfig): Rect;
    static zero(): Rect;
}
interface RadialGradientConfig {
    center?: Alignment;
    radius?: number;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    focal?: Alignment;
    focalRadius?: number;
}
export declare class RadialGradient extends BasicGradient {
    center?: Alignment;
    radius?: number;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    focal?: Alignment;
    focalRadius?: number;
    /**
     * @param config config: {center?:Alignment, radius?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode, focal?:Alignment, focalRadius?:number}
     */
    static new(config: RadialGradientConfig): RadialGradient;
}
export declare enum StackFit {
    loose = "loose",
    expand = "expand",
    passthrough = "passthrough"
}
export declare enum StrokeCap {
    butt = "butt",
    round = "round",
    square = "square"
}
export declare enum StrokeJoin {
    miter = "miter",
    round = "round",
    bevel = "bevel"
}
export declare enum StretchMode {
    zoomBackground = "zoomBackground",
    blurBackground = "blurBackground",
    fadeTitle = "fadeTitle"
}
export declare class Size extends DartClass {
    width?: number;
    height?: number;
    dimension?: number;
    radius?: number;
    static new(width: number, height: number): Size;
    static fromHeight(height: number): Size;
    static fromWidth(width: number): Size;
    static square(dimension: number): Size;
    static fromRadius(radius: number): Size;
    static zero(): Size;
}
interface SweepGradientConfig {
    center?: Alignment;
    startAngle?: number;
    endAngle?: number;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
}
export declare class SweepGradient extends DartClass {
    center?: Alignment;
    startAngle?: number;
    endAngle?: number;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    /**
     * @param config config: {center?:Alignment, startAngle?:number, endAngle?:number, colors?:Array<Color>, stops?:Array<number>, tileMode?:TileMode}
     */
    static new(config: SweepGradientConfig): SweepGradient;
}
interface SystemUiOverlayStyleConfig {
    systemNavigationBarColor?: Color;
    systemNavigationBarDividerColor?: Color;
    statusBarColor?: Color;
    systemNavigationBarIconBrightness?: Brightness;
    statusBarBrightness?: Brightness;
    statusBarIconBrightness?: Brightness;
}
export declare class SystemUiOverlayStyle extends DartClass {
    systemNavigationBarColor?: Color;
    systemNavigationBarDividerColor?: Color;
    statusBarColor?: Color;
    systemNavigationBarIconBrightness?: Brightness;
    statusBarBrightness?: Brightness;
    statusBarIconBrightness?: Brightness;
    /**
     * @param config config: {systemNavigationBarColor?:Color, systemNavigationBarDividerColor?:Color, statusBarColor?:Color,
        systemNavigationBarIconBrightness?:Brightness, statusBarBrightness?:Brightness, statusBarIconBrightness?:Brightness}
     */
    static new(config: SystemUiOverlayStyleConfig): SystemUiOverlayStyle;
    static light: SystemUiOverlayStyle;
    static dark: SystemUiOverlayStyle;
}
interface SpringDescriptionConfig {
    mass?: number;
    stiffness?: number;
    damping?: number;
}
export declare class SpringDescription extends DartClass {
    mass?: number;
    stiffness?: number;
    damping?: number;
    /**
     * @param config config: {mass?:number,stiffness?:number,damping?:number}
     */
    static new(config: SpringDescriptionConfig): SpringDescription;
}
export declare class ScrollPhysics extends DartClass {
    parent?: ScrollPhysics;
    static new(parent?: ScrollPhysics): ScrollPhysics;
}
interface ScrollControllerConfig {
    duration?: Duration;
    curve?: Curve;
    initialScrollOffset?: number;
    keepScrollOffset?: boolean;
    debugLabel?: string;
}
export declare class ScrollController extends DartClass {
    initialScrollOffset?: number;
    keepScrollOffset?: boolean;
    debugLabel?: string;
    /**
     * @param config config: {duration?:Duration, curve?:Curves}
     */
    animateTo(offset: Offset, config?: ScrollControllerConfig): void;
    jumpTo(value: number): void;
    /**
     * @param config config: {initialScrollOffset?:number, keepScrollOffset?:boolean, debugLabel?:string}
     */
    static new(config: ScrollControllerConfig): ScrollController;
}
interface ShadowConfig {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
}
export declare class Shadow extends DartClass {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    /**
     * @param config config: {color?:Color, offset?:Offset, blurRadius?:number}
     */
    static new(config: ShadowConfig): Shadow;
}
export declare enum TileMode {
    clamp = "clamp",
    repeated = "repeated",
    mirror = "mirror"
}
export declare enum TextAlign {
    left = "left",
    right = "right",
    center = "center",
    justify = "justify",
    start = "start",
    end = "end"
}
export declare enum TextDirection {
    rtl = "rtl",
    ltr = "ltr"
}
export declare enum TextDecorationStyle {
    ashed = "ashed",
    dotted = "dotted",
    double = "double",
    solid = "solid"
}
export declare enum TextBaseline {
    alphabetic = "alphabetic",
    ideographic = "ideographic"
}
export declare enum TextDecoration {
    none = "none",
    underline = "underline",
    overline = "overline",
    lineThrough = "lineThrough"
}
export declare enum TextOverflow {
    clip = "clip",
    fade = "fade",
    ellipsis = "ellipsis"
}
export declare enum TextCapitalization {
    words = "words",
    sentences = "sentences",
    characters = "characters",
    none = "none"
}
export declare enum TextInputAction {
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
    newline = "newline"
}
export declare enum TableCellVerticalAlignment {
    top = "top",
    middle = "middle",
    bottom = "bottom",
    baseline = "baseline",
    fill = "fill"
}
export declare enum TabBarIndicatorSize {
    tab = "tab",
    label = "label"
}
export declare enum TargetPlatform {
    android = "android",
    fuchsia = "fuchsia",
    iOS = "iOS"
}
interface TextStyleConfig {
    inherit?: boolean;
    color?: Color;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    letterSpacing?: number;
    wordSpacing?: number;
    textBaseline?: TextBaseline;
    height?: number;
    decoration?: TextDecoration;
    decorationColor?: Color;
    decorationStyle?: TextDecorationStyle;
    debugLabel?: string;
    fontFamily?: string;
    packageName?: string;
}
export declare class TextStyle extends DartClass {
    inherit?: boolean;
    color?: Color;
    fontSize?: number;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    letterSpacing?: number;
    wordSpacing?: number;
    textBaseline?: TextBaseline;
    height?: number;
    decoration?: TextDecoration;
    decorationColor?: Color;
    decorationStyle?: TextDecorationStyle;
    debugLabel?: string;
    fontFamily?: string;
    packageName?: string;
    /**
     * @param config config: {inherit?:boolean, color?:Color, fontSize?:number, fontWeight?:FontWeight, fontStyle?:FontStyle,
      letterSpacing?:number, wordSpacing?:number, textBaseline?:TextBaseline, height?:number, decoration?:TextDecoration,
      decorationColor?:Color, decorationStyle?:TextDecorationStyle, debugLabel?:string, fontFamily?:string, packageName?:string}
     */
    static new(config: TextStyleConfig): TextStyle;
}
interface TableBorderConfig {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    horizontalInside?: BorderSide;
    verticalInside?: BorderSide;
    color?: Color;
    width?: number;
    style?: BorderStyle;
    inside?: BorderSide;
    outside?: BorderSide;
}
export declare class TableBorder extends DartClass {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    horizontalInside?: BorderSide;
    verticalInside?: BorderSide;
    color?: Color;
    width?: number;
    style?: BorderStyle;
    inside?: BorderSide;
    outside?: BorderSide;
    /**
     * @param config config: {top?:BorderSide,right?:BorderSide,bottom?:BorderSide,left?:BorderSide,horizontalInside?:BorderSide,verticalInside?:BorderSide}
     */
    static new(config: TableBorderConfig): TableBorder;
    /**
     * @param config config: {color?:Color,width?:number,style?:BorderStyle}
     */
    static all(config: TableBorderConfig): TableBorder;
    /**
     * @param config config: {inside?:BorderSide, outside?:BorderSide}
     */
    static symmetric(config: TableBorderConfig): TableBorder;
}
export declare class TableColumnWidth extends DartClass {
    static new(): TableColumnWidth;
}
interface TabControllerConfig {
    initialIndex?: number;
    length?: number;
    vsync?: any;
}
export declare class TabController extends DartClass {
    initialIndex?: number;
    length?: number;
    vsync?: any;
    /**
     * @param config config: {initialIndex?:number,length?:number,vsync?:any}
     */
    static new(config: TabControllerConfig): TabController;
}
export declare class TextEditingController extends DartClass {
    text?: string;
    static new(text?: string): TextEditingController;
}
export declare class TextInputType extends DartClass {
    signed?: boolean;
    decimal?: boolean;
    static new(): TextInputType;
    static numberWithOptions(signed?: boolean, decimal?: boolean): TextInputType;
    static text(): TextInputType;
    static multiline(): TextInputType;
    static number(): TextInputType;
    static phone(): TextInputType;
    static datetime(): TextInputType;
    static emailAddress(): TextInputType;
    static url(): TextInputType;
}
export declare class Tween extends DartClass {
    begin?: number;
    end?: number;
    lerp(t: number): any;
    transform(t: number): any;
    static new(begin?: number, end?: number): Tween;
}
export declare class UniqueKey extends BasicKey {
    static new(): UniqueKey;
}
interface UriConfig {
    scheme?: string;
    fragment?: string;
    userInfo?: string;
    host?: string;
    port?: number;
    path?: string;
    query?: string;
}
export declare class Uri extends DartClass {
    scheme?: string;
    fragment?: string;
    userInfo?: string;
    host?: string;
    port?: number;
    path?: string;
    query?: string;
    /**
     * @param config config: {scheme?:string,fragment?:string,userInfo?:string, host?:string, port?:number, path?:string,query?:string}
     */
    static new(config: UriConfig): Uri;
}
export declare class Uint8List extends DartClass {
    length?: number;
    elements?: Array<number>;
    static new(length?: number): Uint8List;
    static fromList(elements?: Array<number>): Uint8List;
}
export declare class UnderlineInputBorder extends DartClass {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    static new(borderSide?: BorderSide, borderRadius?: BorderRadius): UnderlineInputBorder;
}
export declare enum VerticalDirection {
    up = "up",
    down = "down"
}
export declare class Vector3 extends DartClass {
    x?: number;
    y?: number;
    z?: number;
    value?: number;
    static new(x: number, y: number, z: number): Vector3;
    static zero(): Vector3;
    static all(value: number): Vector3;
}
export declare class Vector4 extends DartClass {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
    array?: Array<number>;
    offset?: Offset;
    static new(x?: number, y?: number, z?: number, w?: number): Vector4;
    static array(array?: Array<number>, offset?: Offset): Vector4;
    static identity(): Vector4;
    static random(): Vector4;
}
export declare enum WrapAlignment {
    start = "start",
    end = "end",
    center = "center",
    spaceBetween = "spaceBetween",
    spaceAround = "spaceAround",
    spaceEvenly = "spaceEvenly"
}
export declare enum WrapCrossAlignment {
    start = "start",
    end = "end",
    center = "center"
}
export {};
