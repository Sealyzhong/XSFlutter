declare const core: any;
export declare type OnCallback = () => void;
export declare type OnCallbackString = (value: string) => void;
export declare type OnCallbackBoolean = (value: boolean) => void;
export declare type OnCallbackNumber = (value: number) => void;
/**
 * (context:BuildContext, index:number) => Widget
 */
export declare type IndexedWidgetBuilder = (context: BuildContext, index: number) => Widget;
export declare type OnTapDown = (value: TapDownDetails) => void;
export declare type OnTapUp = (value: TapUpDetails) => void;
export declare type OnDragDown = (value: DragDownDetails) => void;
export declare type OnDragStart = (value: DragStartDetails) => void;
export declare type OnDragUpdate = (value: DragUpdateDetails) => void;
export declare type OnDragEnd = (value: DragEndDetails) => void;
export declare type OnScaleStart = (value: ScaleStartDetails) => void;
export declare type OnScaleUpdate = (value: ScaleUpdateDetails) => void;
export declare type OnScaleEnd = (value: ScaleEndDetails) => void;
export interface ResponseModel {
    flag: boolean;
    info?: string;
    data?: any;
}
export declare class JSWidgetMirrorMgr {
    mirrorIDFeed: number;
    mirrorObjMap: Map<string, any>;
    static instance?: JSWidgetMirrorMgr;
    constructor();
    generateID(obj: DartClass): string;
    removeMirrorObjects(mirrorIDList: Array<string>): void;
    getMirrorObj(mirrorID: string): any;
    static getInstance(): JSWidgetMirrorMgr;
}
export declare class JSCallArgs {
    widgetID?: string;
    mirrorID?: string;
    className?: string;
    funcName?: string;
    args?: any;
    constructor(config: {
        widgetID?: string;
        mirrorID?: string;
        className?: string;
        funcName?: string;
        args?: any;
    });
}
export declare class DartClass extends core.Object {
    className: string;
    constructorName?: string;
    mirrorID?: string;
    constructor();
    createMirrorID(): void;
    invokeMirrorObjWithCallback(args: JSCallArgs): Promise<unknown>;
    createMirrorObj(): void;
}
export declare class Widget extends DartClass {
    preBuild(jsWidgetHelper: any, buildContext?: any): void;
}
export declare class Convert extends core.Object {
    static toBoolean(v: any): boolean;
    static toNumber(v: any): number;
    static toString(v: any): string;
    static toResponseModel(v: any): ResponseModel;
}
export declare class JSBridge {
    static invokeFlutterCommonChannel(basicMethodCall: any, callback?: any): void;
    static createMirrorObj(flutterCallArgs: any, mirrorID: any, needMonitordGCValue: any): void;
    static onFlutterInvokeJSCommonChannel(messageStr: string): any;
    static invokeJSMirrorObj(args: any): void;
    static invokeMirrorObjWithCallback(flutterCallArgs: any, callback: any): void;
}
export declare class JSFlutterApp {
    name?: string;
    initialRoute?: string;
    rootWidget?: BaseWidget;
    constructor(name?: string, initialRoute?: string);
    run(): void;
    runWithName(name?: string): void;
    createJSWidgetWithName(widgetName?: string): void;
    navigatorPushWithName(widgetName?: string, widgetID?: string, args?: any): void;
    setupWidget(widget?: any, widgetName?: string, widgetID?: string, args?: any): void;
    runApp(widget: any): void;
    navigatorPush(widget: any, args?: any): void;
    buildRootWidget(widget: BaseWidget): void;
    nativeCall(args?: any): any;
    flutterCallFrequencyLimitCallList(args?: any): void;
    flutterCallOnEventCallback(args?: any): any;
    flutterCallNavigatorPushWithName(args?: any): void;
    flutterCallOnBuildEnd(args?: any): void;
    flutterCallOnDispose(args?: any): void;
    flutterCallOnMirrorObjInvoke(args?: any): void;
}
export declare class JSFramework {
    static currentJSApp: any;
    static runApp(app: any): void;
    static callNativeSetCurrentJSApp(app: any): void;
    static callFlutterReloadApp(app: any, widgetData: string): void;
    static callFlutterWidgetChannel(method: string, args: string): void;
    static invokeFlutterFunction(callArgs: any): void;
    static invokeCommonFlutterFunction(callArgs: any): void;
}
export declare class Log {
    static setLogLev(lev: number): void;
    static printLog(log: string): void;
    static debug(log: string): void;
    static log(log: string): void;
    static error(log: string): void;
    static LogLevDebug: number;
    static LogLevInfo: number;
    static LogLevError: number;
    static logLev: number;
}
export declare class JSMethodCall {
    name?: string;
    args?: Map<string, any>;
    constructor(name: string, args?: Map<string, any>);
    encodeJSON(): string;
}
export declare class JSCallbackMgr {
    callbackIDFeed: number;
    callbackID2fun?: Map<string, any>;
    static instance: JSCallbackMgr;
    constructor();
    static getInstance(): JSCallbackMgr;
    generateID(): string;
    createCallbackID(callback: any): string;
    invokeCallback(callbackID: string, args: any): void;
    findCallback(callbackID: string): any;
    removeCallback(callbackID: string): void;
}
export declare class BuildContext {
    widget?: BaseWidget;
    parentBuildContext?: BuildContext;
    inheritedInfo?: any;
    constructor(widget: BaseWidget, parentBuildContext?: BuildContext);
    static inheritBuildContext(widget: BaseWidget, buildContext?: BuildContext): BuildContext;
    setInheritedInfo(args?: any): void;
}
export declare class WidgetHelper {
    widget: BaseWidget;
    constructor(widget: BaseWidget);
    setState(fun?: any): void;
    static buildWidgetData(jsWidget: BaseWidget): string;
    buildWidgetTree(): {
        key: Key | undefined;
        name: string | undefined;
        className: string;
        widgetID: string;
        buildWidgetDataSeq: string;
        navPushingWidgetID: string;
        widgetData: any;
    };
    buildWidgetTreeSubWidget(widget: any): any;
    preBuildJson(widgetTree?: WidgetTree, widgetTreeObjMap?: any): void;
    buildingCreateCallbackID(callback: any): string | undefined;
    setupAsRootWidget(): void;
    addChildWidget(jsWidget: BaseWidget): void;
    removeChildWidget(jsWidget: BaseWidget): void;
    callFlutterRebuild(): void;
    confirmCurrentWidgetTree(): void;
    onEventCallback(args: any): any;
    findWidgetWithWidgetID(widgetID: string): BaseWidget | undefined;
    invokeCallback(buildWidgetDataSeq: any, callID: any, args: any): any;
    onBuildEnd(args: any): void;
    onFlutterBuildEnd(buildWidgetDataSeq: any, profileInfo: any): void;
    clearWidgetTree(buildWidgetDataSeq: any): void;
    onDispose(args?: any): void;
    onFlutterDispose(): void;
    navigatorPush(jsWidget: BaseWidget): void;
    navigatorPop(): void;
    removePushingWidget(jsWidget: BaseWidget): void;
    updatePushingWidgetsData(jsWidget: BaseWidget): string;
    findTopRootWidget(): BaseWidget | undefined;
}
export declare class WidgetTree {
    buildWidgetDataSeq: string;
    childrenWidget: Map<string, BaseWidget>;
    callbackID2fun?: Map<string, any>;
    widgetTreeObjMap?: any;
    ownerWidget?: BaseWidget;
    constructor(buildWidgetDataSeq: string);
    generateID(): string;
    createCallbackID(callback: any): string;
    invokeCallback(callbackID: string, ...args: any): any;
    findCallback(callbackID: string): any;
}
export declare class WidgetMgr {
    widgetIDFeed: number;
    widgetID2WidgetMap: Map<string, BaseWidget>;
    static instance?: WidgetMgr;
    constructor();
    static getInstance(): WidgetMgr;
    generateWidgetID(): string;
    registerWidget(widget: BaseWidget): void;
    remove(widgetID: string): void;
    findWidget(widgetID: string): BaseWidget | undefined;
}
export declare class BaseWidget extends Widget {
    name?: string;
    key?: Key;
    widgetName?: string;
    widgetID: string;
    helper: WidgetHelper;
    navPushingWidgetID: string;
    buildWidgetDataSeq: string;
    buildWidgetDataSeqFeed: number;
    parentWidget?: BaseWidget;
    state?: any;
    navPushingWidget?: BaseWidget;
    navPushedWidgets: Map<string, BaseWidget>;
    buildSeq2WTreeMap: Map<string, WidgetTree>;
    currentWidgetTree?: WidgetTree;
    buildingWidgetTree?: WidgetTree;
    preWidgetTree?: WidgetTree;
    buildContext?: BuildContext;
    constructor(config?: {
        name?: string;
        key?: Key;
    });
    getWidgetInfo(): string;
    getWidgetTreeBuildSeq(widgetTree?: WidgetTree): string;
    onBuildEnd(args?: any): void;
}
export declare class StatefulWidget extends BaseWidget {
    constructor(config?: {
        name?: string;
        key?: Key;
    });
    createState(): void;
}
export declare class StatelessWidget extends BaseWidget {
    constructor(config?: {
        name?: string;
        key?: Key;
    });
    build(context?: BuildContext): void;
}
export declare class WidgetState {
    widget: StatefulWidget;
    constructor(widget: StatefulWidget);
    get context(): BuildContext | undefined;
    initState(): void;
    setState(fun?: any): void;
    build(context?: BuildContext): void;
    onBuildEnd(args?: any): void;
    dispose(): void;
}
export declare enum Axis {
    horizontal = "horizontal",
    vertical = "vertical"
}
export declare enum AxisDirection {
    left = "left",
    down = "down",
    right = "right",
    up = "up"
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
export declare enum BannerLocation {
    topStart = "topStart",
    topEnd = "topEnd",
    bottomStart = "bottomStart",
    bottomEnd = "bottomEnd"
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
export declare enum BoxHeightStyle {
    tight = "tight",
    max = "max",
    includeLineSpacingMiddle = "includeLineSpacingMiddle",
    includeLineSpacingTop = "includeLineSpacingTop",
    includeLineSpacingBottom = "includeLineSpacingBottom",
    strut = "strut"
}
export declare enum BoxWidthStyle {
    tight = "tight",
    max = "max"
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
export declare enum DragStartBehavior {
    down = "down",
    start = "start"
}
export declare enum DatePickerMode {
    day = "day",
    year = "year"
}
export declare enum DatePickerEntryMode {
    calendar = "calendar",
    input = "input"
}
export declare enum DecorationPosition {
    background = "background",
    foreground = "foreground"
}
export declare enum DrawerAlignment {
    start = "start",
    end = "end"
}
export declare enum FlutterLogoStyle {
    horizontal = "horizontal",
    markOnly = "markOnly",
    stacked = "stacked"
}
export declare enum FloatingLabelBehavior {
    never = "never",
    auto = "auto",
    always = "always"
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
export declare enum FlexFit {
    tight = "tight",
    loose = "loose"
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
export declare enum ListTileStyle {
    list = "list",
    drawer = "drawer"
}
export declare enum ListTileControlAffinity {
    leading = "leading",
    trailing = "trailing",
    platform = "platform"
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
export declare enum NavigationMode {
    traditional = "traditional",
    directional = "directional"
}
export declare enum NavigationRailLabelType {
    none = "none",
    selected = "selected",
    all = "all"
}
export declare enum Overflow {
    visible = "visible",
    clip = "clip"
}
export declare enum PaintingStyle {
    fill = "fill",
    stroke = "stroke"
}
export declare enum PlaceholderAlignment {
    baseline = "baseline",
    aboveBaseline = "aboveBaseline",
    belowBaseline = "belowBaseline",
    top = "top",
    bottom = "bottom",
    middle = "middle"
}
export declare enum PointerChange {
    cancel = "cancel",
    add = "add",
    remove = "remove",
    hover = "hover",
    down = "down",
    move = "move",
    up = "up"
}
export declare enum PointerDeviceKind {
    touch = "touch",
    mouse = "mouse",
    invertedStylus = "invertedStylus",
    unknown = "unknown"
}
export declare enum PointerSignalKind {
    none = "none",
    scroll = "scroll",
    unknown = "unknown"
}
export declare enum RenderComparison {
    identical = "identical",
    metadata = "metadata",
    paint = "paint",
    layout = "layout"
}
export declare enum StackFit {
    loose = "loose",
    expand = "expand",
    passthrough = "passthrough"
}
export declare enum StepState {
    indexed = "indexed",
    editing = "editing",
    complete = "complete",
    disabled = "disabled",
    error = "error"
}
export declare enum StepperType {
    vertical = "vertical",
    horizontal = "horizontal"
}
export declare enum SnackBarBehavior {
    fixed = "fixed",
    floating = "floating"
}
export declare enum ShowValueIndicator {
    onlyForDiscrete = "onlyForDiscrete",
    onlyForContinuous = "onlyForContinuous",
    always = "always",
    never = "passthrounevergh"
}
export declare enum ScrollViewKeyboardDismissBehavior {
    manual = "manual",
    onDrag = "onDrag"
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
export declare enum SnackBarClosedReason {
    action = "action",
    dismiss = "dismiss",
    swipe = "swipe",
    hide = "hide",
    remove = "remove",
    timeout = "timeout"
}
export declare enum ScrollPositionAlignmentPolicy {
    explicit = "explicit",
    keepVisibleAtEnd = "keepVisibleAtEnd",
    keepVisibleAtStart = "keepVisibleAtStart"
}
export declare enum TileMode {
    clamp = "clamp",
    repeated = "repeated",
    mirror = "mirror"
}
export declare enum SmartDashesType {
    disabled = "disabled",
    enabled = "enabled"
}
export declare enum SmartQuotesType {
    disabled = "disabled",
    enabled = "enabled"
}
export declare enum TextWidthBasis {
    parent = "parent",
    longestLine = "longestLine"
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
    dashed = "dashed",
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
    iOS = "iOS",
    linux = "linux",
    macOS = "macOS",
    windows = "windows"
}
export declare enum VerticalDirection {
    up = "up",
    down = "down"
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
export declare abstract class AlignmentGeometry extends DartClass {
    x?: number;
    start?: number;
    y?: number;
}
export declare class Alignment extends AlignmentGeometry {
    constructor(x: number, y: number);
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
export declare class AlignmentDirectional extends AlignmentGeometry {
    constructor(start: number, y: number);
    static topStart: AlignmentDirectional;
    static topCenter: AlignmentDirectional;
    static topEnd: AlignmentDirectional;
    static centerStart: AlignmentDirectional;
    static center: AlignmentDirectional;
    static centerEnd: AlignmentDirectional;
    static bottomStart: AlignmentDirectional;
    static bottomCenter: AlignmentDirectional;
    static bottomEnd: AlignmentDirectional;
}
export declare class AssetBundle extends DartClass {
}
export declare class PlatformAssetBundle extends AssetBundle {
    constructor();
}
export declare class NetworkAssetBundle extends AssetBundle {
    baseUrl?: Uri;
    constructor(baseUrl: Uri);
}
export declare class BorderSide extends DartClass {
    color?: Color;
    width?: number;
    style?: BorderStyle;
    constructor(config?: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    });
    static none(): BorderSide;
}
export declare abstract class BorderRadiusGeometry extends DartClass {
}
export declare class BorderRadius extends BorderRadiusGeometry {
    radius?: number | Radius;
    top?: Radius;
    bottom?: Radius;
    left?: Radius;
    right?: Radius;
    topLeft?: Radius;
    topRight?: Radius;
    bottomLeft?: Radius;
    bottomRight?: Radius;
    static zero(): BorderRadius;
    static all(radius: Radius): BorderRadius;
    static circular(radius: number): BorderRadius;
    static vertical(config?: {
        top?: Radius;
        bottom?: Radius;
    }): BorderRadius;
    static horizontal(config?: {
        left?: Radius;
        right?: Radius;
    }): BorderRadius;
    static only(config?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomLeft?: Radius;
        bottomRight?: Radius;
    }): BorderRadius;
}
export declare class BorderRadiusDirectional extends BorderRadiusGeometry {
    radius?: Radius | number;
    top?: Radius;
    bottom?: Radius;
    start?: Radius;
    end?: Radius;
    topStart?: Radius;
    topEnd?: Radius;
    bottomStart?: Radius;
    bottomEnd?: Radius;
    static zero(): BorderRadiusDirectional;
    static all(radius: Radius): BorderRadiusDirectional;
    static circular(radius: number): BorderRadiusDirectional;
    static vertical(config?: {
        top?: Radius;
        bottom?: Radius;
    }): BorderRadiusDirectional;
    static horizontal(config?: {
        start?: Radius;
        end?: Radius;
    }): BorderRadiusDirectional;
    static only(config?: {
        topStart?: Radius;
        topEnd?: Radius;
        bottomStart?: Radius;
        bottomEnd?: Radius;
    }): BorderRadiusDirectional;
}
export declare class BannerPainter extends DartClass {
    message?: string;
    textDirection?: TextDirection;
    location?: BannerLocation;
    layoutDirection?: TextDirection;
    color?: Color;
    textStyle?: TextStyle;
    constructor(config: {
        message?: string;
        textDirection?: TextDirection;
        location?: BannerLocation;
        layoutDirection?: TextDirection;
        color?: Color;
        textStyle?: TextStyle;
    });
}
export declare class BoxShadow extends DartClass {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    spreadRadius?: number;
    constructor(config?: {
        color?: Color;
        offset?: Offset;
        blurRadius?: number;
        spreadRadius?: number;
    });
}
export declare abstract class Constraints extends DartClass {
}
export declare class BoxConstraints extends Constraints {
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    constructor(config?: {
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
    });
}
export declare class Color extends DartClass {
    value?: number;
    a?: number;
    r?: number;
    g?: number;
    b?: number;
    opacity?: number;
    constructor(value?: number);
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
    static white60: Color;
    static white54: Color;
    static white38: Color;
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
    constructor(color: Color, blendMode: BlendMode);
    static mode(color: Color, blendMode: BlendMode): ColorFilter;
}
export declare class DragDownDetails extends DartClass {
    globalPosition?: Offset;
    localPosition?: Offset;
    constructor(config?: {
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export declare class DragStartDetails extends DartClass {
    globalPosition?: Offset;
    localPosition?: Offset;
    sourceTimeStamp?: Duration;
    constructor(config?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        sourceTimeStamp?: Duration;
    });
}
export declare class DragUpdateDetails extends DartClass {
    globalPosition?: Offset;
    localPosition?: Offset;
    sourceTimeStamp?: Duration;
    delta?: Offset;
    primaryDelta?: number;
    constructor(config?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        sourceTimeStamp?: Duration;
        delta?: Offset;
        primaryDelta?: number;
    });
}
export declare class DragEndDetails extends DartClass {
    velocity?: Velocity;
    primaryVelocity?: number;
    constructor(config?: {
        velocity?: Velocity;
        primaryVelocity?: number;
    });
}
export declare class Duration extends DartClass {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
    inMilliseconds: number;
    constructor(config?: {
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
    });
}
export declare abstract class Decoration extends DartClass {
}
export declare class BoxDecoration extends Decoration {
    color?: Color;
    border?: Border;
    borderRadius?: BorderRadius;
    boxShadow?: BoxShadow;
    gradient?: Gradient;
    backgroundBlendMode?: BlendMode;
    shape?: BoxShape;
    image?: any;
    constructor(config?: {
        color?: Color;
        border?: Border;
        borderRadius?: BorderRadius;
        boxShadow?: BoxShadow;
        gradient?: Gradient;
        backgroundBlendMode?: BlendMode;
        shape?: BoxShape;
        image?: DecorationImage;
    });
}
export declare class FlutterLogoDecoration extends Decoration {
    textColor?: Color;
    style?: FlutterLogoStyle;
    margin?: EdgeInsets;
    constructor(config?: {
        textColor?: Color;
        style?: FlutterLogoStyle;
        margin?: EdgeInsets;
    });
}
export declare abstract class EdgeInsetsGeometry extends DartClass {
}
export declare class EdgeInsets extends EdgeInsetsGeometry {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    value?: number;
    vertical?: number;
    horizontal?: number;
    constructor(config?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    });
    static zero(): EdgeInsets;
    static fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets;
    static only(config?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }): EdgeInsets;
    static all(value: number): EdgeInsets;
    static symmetric(config?: {
        vertical?: number;
        horizontal?: number;
    }): EdgeInsets;
}
export declare class EdgeInsetsDirectional extends EdgeInsetsGeometry {
    start?: number;
    top?: number;
    end?: number;
    bottom?: number;
    constructor(config?: {
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
    });
    static fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional;
    static only(config?: {
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
    }): EdgeInsetsDirectional;
}
export declare class Future extends DartClass {
    /**
     * 延时处理
     * @param duration
     * @param onBack
     */
    static delayed(duration: Duration, onBack?: OnCallback): void;
    /**
     * 定时处理
     * @param duration
     * @param onBack
     */
    static timer(duration: Duration, onBack?: OnCallback): void;
}
export declare class FocusNode extends DartClass {
    debugLabel?: string;
    skipTraversal?: boolean;
    canRequestFocus?: boolean;
    descendantsAreFocusable?: boolean;
    constructor(config?: {
        debugLabel?: string;
        skipTraversal?: boolean;
        canRequestFocus?: boolean;
        descendantsAreFocusable?: boolean;
    });
}
export declare class FractionalOffset extends DartClass {
    dx?: number;
    dy?: number;
    constructor(dx: number, dy: number);
    static topLeft: FractionalOffset;
    static topCenter: FractionalOffset;
    static topRight: FractionalOffset;
    static centerLeft: FractionalOffset;
    static center: FractionalOffset;
    static centerRight: FractionalOffset;
    static bottomLeft: FractionalOffset;
    static bottomCenter: FractionalOffset;
    static bottomRight: FractionalOffset;
}
export declare class File extends DartClass {
    path?: string;
    uri?: Uri;
    rawPath?: Uint8List;
    constructor(path?: string);
    static fromUri(uri: Uri): File;
    static fromRawPath(rawPath: Uint8List): File;
}
export declare abstract class GradientTransform extends DartClass {
    static rotation(radians: number): GradientRotation;
}
export declare class GradientRotation extends GradientTransform {
    radians: number;
    /**
     *
     * @param radians
     */
    constructor(radians: number);
}
export declare abstract class Gradient extends DartClass {
}
export declare class LinearGradient extends Gradient {
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    transform?: GradientTransform;
    begin?: Alignment;
    end?: Alignment;
    constructor(config?: {
        begin?: Alignment;
        end?: Alignment;
        colors: Array<Color>;
        stops?: Array<number>;
        tileMode?: TileMode;
        transform?: GradientRotation;
    });
}
export declare class RadialGradient extends Gradient {
    center?: Alignment;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    transform?: GradientTransform;
    radius?: number;
    focal?: Alignment;
    focalRadius?: number;
    constructor(config?: {
        center?: Alignment;
        radius?: number;
        colors: Array<Color>;
        stops?: Array<number>;
        tileMode?: TileMode;
        focal?: Alignment;
        focalRadius?: number;
        transform?: GradientRotation;
    });
}
export declare class SweepGradient extends Gradient {
    center?: Alignment;
    startAngle?: number;
    endAngle?: number;
    colors?: Array<Color>;
    stops?: Array<number>;
    tileMode?: TileMode;
    transform?: GradientTransform;
    constructor(config?: {
        center?: Alignment;
        startAngle?: number;
        endAngle?: number;
        colors: Array<Color>;
        stops?: Array<number>;
        tileMode?: TileMode;
        transform?: GradientRotation;
    });
}
export declare class ImageFilter extends DartClass {
    sigmaX?: number;
    sigmaY?: number;
    constructor(config?: {
        sigmaX?: number;
        sigmaY?: number;
    });
    static blur(config?: {
        sigmaX?: number;
        sigmaY?: number;
    }): ImageFilter;
}
export declare class ImageProvider extends DartClass {
    file?: File;
    scale?: number;
    bytes?: Uint8List;
    url?: string;
    imageName?: string;
    bundle?: AssetBundle;
    packageName?: string;
    width?: number;
    height?: number;
    allowUpscaling?: boolean;
    imageProvider?: ImageProvider;
    static file(file: File, config?: {
        scale?: number;
    }): ImageProvider;
    static memory(bytes: Uint8List, config?: {
        scale?: number;
    }): ImageProvider;
    static network(url: string, config: {
        scale?: number;
    }): ImageProvider;
    static resize(imageProvider?: ImageProvider, config?: {
        width?: number;
        height?: number;
        allowUpscaling?: boolean;
    }): ImageProvider;
    static exactAsset(imageName: string, config?: {
        imageName: string;
        scale?: number;
        bundle?: AssetBundle;
        packageName?: string;
    }): ImageProvider;
}
export declare class IconData extends DartClass {
    icon: string;
    constructor(icon: string);
}
export declare class InputDecoration extends DartClass {
    icon?: Widget;
    labelText?: string;
    labelStyle?: TextStyle;
    helperText?: string;
    helperStyle?: TextStyle;
    helperMaxLines?: number;
    hintText?: string;
    hintStyle?: TextStyle;
    hintMaxLines?: number;
    errorText?: string;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    hasFloatingPlaceholder?: boolean;
    floatingLabelBehavior?: FloatingLabelBehavior;
    isCollapsed?: boolean;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    prefixIcon?: Widget;
    prefixIconConstraints?: BoxConstraints;
    prefix?: Widget;
    prefixText?: string;
    prefixStyle?: TextStyle;
    suffixIcon?: Widget;
    suffix?: Widget;
    suffixText?: string;
    suffixStyle?: TextStyle;
    suffixIconConstraints?: BoxConstraints;
    counter?: Widget;
    counterText?: string;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    enabled?: boolean;
    semanticCounterText?: string;
    alignLabelWithHint?: boolean;
    constructor(config?: {
        icon?: Widget;
        labelText?: string;
        labelStyle?: TextStyle;
        helperText?: string;
        helperStyle?: TextStyle;
        helperMaxLines?: number;
        hintText?: string;
        hintStyle?: TextStyle;
        hintMaxLines?: number;
        errorText?: string;
        errorStyle?: TextStyle;
        errorMaxLines?: number;
        hasFloatingPlaceholder?: boolean;
        floatingLabelBehavior?: FloatingLabelBehavior;
        isCollapsed?: boolean;
        isDense?: boolean;
        contentPadding?: EdgeInsets;
        prefixIcon?: Widget;
        prefixIconConstraints?: BoxConstraints;
        prefix?: Widget;
        prefixText?: string;
        prefixStyle?: TextStyle;
        suffixIcon?: Widget;
        suffix?: Widget;
        suffixText?: string;
        suffixStyle?: TextStyle;
        suffixIconConstraints?: BoxConstraints;
        counter?: Widget;
        counterText?: string;
        counterStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        errorBorder?: InputBorder;
        focusedBorder?: InputBorder;
        focusedErrorBorder?: InputBorder;
        disabledBorder?: InputBorder;
        enabledBorder?: InputBorder;
        border?: InputBorder;
        enabled?: boolean;
        semanticCounterText?: string;
        alignLabelWithHint?: boolean;
    });
    static collapsed(config?: {
        hintText?: string;
        hasFloatingPlaceholder?: boolean;
        hintStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        border?: InputBorder;
        enabled?: boolean;
    }): InputDecoration;
}
export declare abstract class Key extends DartClass {
    value?: string;
    debugLabel?: string;
}
export declare class ValueKey extends Key {
    value: string;
    constructor(value: string);
}
export declare class UniqueKey extends Key {
    constructor();
}
export declare class GlobalKey extends Key {
    debugLabel?: string;
    constructor();
}
export declare class BindKey extends Key {
    constructor();
}
export declare class MaskFilter extends DartClass {
    style?: BlurStyle;
    sigma?: number;
    constructor(style: BlurStyle, sigma: number);
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
    constructor(arg0?: number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: number, arg8?: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number, arg13?: number, arg14?: number, arg15?: number);
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
export declare abstract class NotchedShape extends DartClass {
}
export declare class CircularNotchedRectangle extends NotchedShape {
    constructor();
}
export declare class AutomaticNotchedShape extends NotchedShape {
    host: ShapeBorder;
    guest?: ShapeBorder;
    constructor(host: ShapeBorder, guest?: ShapeBorder);
}
export declare class Offset extends DartClass {
    dx?: number;
    dy?: number;
    direction?: number;
    constructor(dx?: number, dy?: number);
    static zero(): Offset;
    static infinite(): Offset;
    static fromDirection(direction: number): Offset;
}
export declare class PageController extends DartClass {
    initialPage?: number;
    keepPage?: boolean;
    viewportFraction?: number;
    animateToPage(config: {
        page: number;
        duration: Duration;
        curve: Curve;
    }): void;
    nextPage(config: {
        duration: Duration;
        curve: Curve;
    }): void;
    previousPage(config: {
        duration: Duration;
        curve: Curve;
    }): void;
    jumpToPage(config: {
        page: number;
    }): void;
    constructor(config: {
        initialPage?: number;
        keepPage?: boolean;
        viewportFraction?: number;
    });
    page(): Promise<number>;
}
export declare class Quaternion extends DartClass {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
}
export declare class Radius extends DartClass {
    radius?: number;
    x?: number;
    y?: number;
    static circular(radius: number): Radius;
    static elliptical(x: number, y: number): Radius;
    static zero(): Radius;
}
export declare class RegExp extends DartClass {
    source: string;
    multiLine?: boolean;
    caseSensitive?: boolean;
    unicode?: boolean;
    dotAll?: boolean;
    constructor(source: string, config?: {
        multiLine?: boolean;
        caseSensitive?: boolean;
        unicode?: boolean;
        dotAll?: boolean;
    });
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
    static fromCenter(config: {
        center?: Offset;
        width?: number;
        height?: number;
    }): Rect;
    static fromLTRB(left: number, top: number, right: number, bottom: number): Rect;
    static fromLTWH(left: number, top: number, width: number, height: number): Rect;
    static fromCircle(config: {
        center?: Offset;
        radius?: number;
    }): Rect;
    static fromPoints(a: Offset, b: Offset): Rect;
    static zero(): Rect;
    static largest(): Rect;
}
export declare class RelativeRect extends DartClass {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    rect?: Rect;
    rect1?: Rect;
    container?: Size;
    static fromLTRB(left: number, top: number, right: number, bottom: number): RelativeRect;
    static fromSize(rect: Rect, container: Size): RelativeRect;
    static fromRect(rect: Rect, rect1: Rect): RelativeRect;
    static fill(): RelativeRect;
}
export declare class RRect extends DartClass {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    radiusX?: number;
    radiusY?: number;
    radius?: Radius;
    rect?: Rect;
    topLeft?: Radius;
    topRight?: Radius;
    bottomRight?: Radius;
    bottomLeft?: Radius;
    static fromLTRBXY(left: number, top: number, right: number, bottom: number, radiusX: number, radiusY: number): RRect;
    static fromLTRBR(left: number, top: number, right: number, bottom: number, radius: Radius): RRect;
    static fromRectXY(rect: Rect, radiusX: number, radiusY: number): RRect;
    static fromRectAndRadius(rect: Rect, radius: Radius): RRect;
    static fromLTRBAndCorners(left: number, top: number, right: number, bottom: number, config?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomRight?: Radius;
        bottomLeft?: Radius;
    }): RRect;
    static fromRectAndCorners(rect: Rect, config?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomRight?: Radius;
        bottomLeft?: Radius;
    }): RRect;
    static zero(): RRect;
}
export declare class RSTransform extends DartClass {
    rotation?: number;
    scale?: number;
    anchorX?: number;
    anchorY?: number;
    translateX?: number;
    translateY?: number;
    scos?: number;
    ssin?: number;
    tx?: number;
    ty?: number;
    static fromComponents(config: {
        rotation?: number;
        scale?: number;
        anchorX?: number;
        anchorY?: number;
        translateX?: number;
        translateY?: number;
    }): RSTransform;
    constructor(scos?: number, ssin?: number, tx?: number, ty?: number);
}
export declare abstract class Shader extends DartClass {
    /**
     * Shader.image = new ImageShader(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4)
     * @param image
     * @param tmx
     * @param tmy
     * @param matrix4
     */
    static image(image: ImageProvider, tmx: TileMode, tmy: TileMode, matrix4: Matrix4): ImageShader;
}
export declare class ImageShader extends Shader {
    image?: ImageProvider;
    tmx?: TileMode;
    tmy?: TileMode;
    matrix4?: Matrix4;
    constructor(image: ImageProvider, tmx: TileMode, tmy: TileMode, matrix4: Matrix4);
}
export declare class ScaleStartDetails extends DartClass {
    focalPoint?: Offset;
    localFocalPoint?: Offset;
    constructor(config?: {
        focalPoint?: Offset;
        localFocalPoint?: Offset;
    });
}
export declare class ScaleUpdateDetails extends DartClass {
    focalPoint?: Offset;
    localFocalPoint?: Offset;
    scale?: number;
    horizontalScale?: number;
    verticalScale?: number;
    rotation?: number;
    constructor(config?: {
        focalPoint?: Offset;
        localFocalPoint?: Offset;
        scale?: number;
        horizontalScale?: number;
        verticalScale?: number;
        rotation?: number;
    });
}
export declare class ScaleEndDetails extends DartClass {
    velocity?: Velocity;
    constructor(config?: {
        velocity?: Velocity;
    });
}
export declare class Size extends DartClass {
    width?: number;
    height?: number;
    dimension?: number;
    radius?: number;
    constructor(width?: number, height?: number);
    static fromHeight(height: number): Size;
    static fromWidth(width: number): Size;
    static square(dimension: number): Size;
    static fromRadius(radius: number): Size;
    static zero(): Size;
    static infinite(): Size;
}
export declare class StrutStyle extends DartClass {
    fontFamily?: string;
    fontFamilyFallback?: Array<string>;
    fontSize?: number;
    height?: number;
    leading?: number;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    forceStrutHeight?: boolean;
    debugLabel?: string;
    packageName?: string;
    constructor(config: {
        fontFamily?: string;
        fontFamilyFallback?: Array<string>;
        fontSize?: number;
        height?: number;
        leading?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        forceStrutHeight?: boolean;
        debugLabel?: string;
        packageName?: string;
    });
}
export declare class SystemUiOverlayStyle extends DartClass {
    systemNavigationBarColor?: Color;
    systemNavigationBarDividerColor?: Color;
    statusBarColor?: Color;
    systemNavigationBarIconBrightness?: Brightness;
    statusBarBrightness?: Brightness;
    statusBarIconBrightness?: Brightness;
    constructor(config: {
        systemNavigationBarColor?: Color;
        systemNavigationBarDividerColor?: Color;
        statusBarColor?: Color;
        systemNavigationBarIconBrightness?: Brightness;
        statusBarBrightness?: Brightness;
        statusBarIconBrightness?: Brightness;
    });
    static light: SystemUiOverlayStyle;
    static dark: SystemUiOverlayStyle;
}
export declare class SpringDescription extends DartClass {
    mass?: number;
    stiffness?: number;
    damping?: number;
    constructor(config: {
        mass?: number;
        stiffness?: number;
        damping?: number;
    });
}
export declare class ScrollController extends DartClass {
    initialScrollOffset?: number;
    keepScrollOffset?: boolean;
    debugLabel?: string;
    animateTo(config: {
        offset: number;
        duration: Duration;
        curve: Curve;
    }): void;
    jumpTo(config: {
        value: number;
    }): void;
    constructor(config: {
        initialScrollOffset?: number;
        keepScrollOffset?: boolean;
        debugLabel?: string;
    });
    offset(): Promise<number>;
}
export declare class Shadow extends DartClass {
    color?: Color;
    offset?: Offset;
    blurRadius?: number;
    constructor(config?: {
        color?: Color;
        offset?: Offset;
        blurRadius?: number;
    });
}
export declare class ScrollbarPainter extends DartClass {
    color?: Color;
    textDirection?: TextDirection;
    thickness?: number;
    fadeoutOpacityAnimation?: any;
    padding?: EdgeInsets;
    mainAxisMargin?: number;
    crossAxisMargin?: number;
    radius?: Radius;
    minLength?: number;
    minOverscrollLength?: number;
    constructor(config: {
        color?: Color;
        textDirection?: TextDirection;
        thickness?: number;
        fadeoutOpacityAnimation?: any;
        padding?: EdgeInsets;
        mainAxisMargin?: number;
        crossAxisMargin?: number;
        radius?: Radius;
        minLength?: number;
        minOverscrollLength?: number;
    });
}
export declare class ScrollPhysics extends DartClass {
    parent?: ScrollPhysics;
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class FixedExtentScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class PageScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class BouncingScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class ClampingScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class NeverScrollableScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare class RangeMaintainingScrollPhysics extends ScrollPhysics {
    constructor(config?: {
        parent?: ScrollPhysics;
    });
}
export declare abstract class ShapeBorder extends DartClass {
}
export declare abstract class BoxBorder extends ShapeBorder {
}
export declare class Border extends BoxBorder {
    top?: BorderSide;
    right?: BorderSide;
    bottom?: BorderSide;
    left?: BorderSide;
    vertical?: BorderSide;
    horizontal?: BorderSide;
    color?: Color;
    width?: number;
    style?: BorderStyle;
    constructor(config?: {
        top?: BorderSide;
        right?: BorderSide;
        bottom?: BorderSide;
        left?: BorderSide;
    });
    static all(config: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    }): Border;
    static symmetric(config?: {
        vertical?: BorderSide;
        horizontal?: BorderSide;
    }): Border;
}
export declare class BorderDirectional extends BoxBorder {
    top?: BorderSide;
    start?: BorderSide;
    bottom?: BorderSide;
    end?: BorderSide;
    constructor(config?: {
        top?: BorderSide;
        start?: BorderSide;
        bottom?: BorderSide;
        end?: BorderSide;
    });
}
export declare abstract class OutlinedBorder extends ShapeBorder {
}
export declare class CircleBorder extends OutlinedBorder {
    side?: BorderSide;
    constructor(config?: {
        side?: BorderSide;
    });
}
export declare class BeveledRectangleBorder extends OutlinedBorder {
    side?: BorderSide;
    borderRadius?: BorderRadiusGeometry;
    constructor(config?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
    });
}
export declare class ContinuousRectangleBorder extends OutlinedBorder {
    side?: BorderSide;
    borderRadius?: BorderRadiusGeometry;
    constructor(config?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
    });
}
export declare class RoundedRectangleBorder extends OutlinedBorder {
    side?: BorderSide;
    borderRadius?: BorderRadiusGeometry;
    constructor(config?: {
        side?: BorderSide;
        borderRadius?: BorderRadiusGeometry;
    });
}
export declare class StadiumBorder extends OutlinedBorder {
    side?: BorderSide;
    constructor(config?: {
        side?: BorderSide;
    });
}
export declare abstract class InputBorder extends ShapeBorder {
    static none(): _NoInputBorder;
}
declare class _NoInputBorder extends InputBorder {
}
export declare class UnderlineInputBorder extends InputBorder {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    constructor(config?: {
        borderSide?: BorderSide;
        borderRadius?: BorderRadius;
    });
}
export declare class OutlineInputBorder extends InputBorder {
    borderSide?: BorderSide;
    borderRadius?: BorderRadius;
    gapPadding?: number;
    constructor(config?: {
        borderSide?: BorderSide;
        borderRadius?: BorderRadius;
        gapPadding?: number;
    });
}
export declare class TextAlignVertical extends DartClass {
    y?: number;
    constructor(y: number);
    static top: TextAlignVertical;
    static center: TextAlignVertical;
    static bottom: TextAlignVertical;
}
export declare class TapDownDetails extends DartClass {
    globalPosition?: Offset;
    localPosition?: Offset;
    kind?: PointerDeviceKind;
    constructor(config?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        kind?: PointerDeviceKind;
    });
}
export declare class TapUpDetails extends DartClass {
    globalPosition?: Offset;
    localPosition?: Offset;
    constructor(config?: {
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export declare class TextStyle extends DartClass {
    inherit?: boolean;
    color?: Color;
    backgroundColor?: Color;
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
    decorationThickness?: number;
    debugLabel?: string;
    fontFamily?: string;
    packageName?: string;
    constructor(config?: {
        inherit?: boolean;
        color?: Color;
        backgroundColor?: Color;
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
        decorationThickness?: number;
        debugLabel?: string;
        fontFamily?: string;
        packageName?: string;
    });
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
    constructor(config?: {
        top?: BorderSide;
        right?: BorderSide;
        bottom?: BorderSide;
        left?: BorderSide;
        horizontalInside?: BorderSide;
        verticalInside?: BorderSide;
    });
    static all(config?: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    }): TableBorder;
    static symmetric(config?: {
        inside?: BorderSide;
        outside?: BorderSide;
    }): TableBorder;
}
export declare abstract class TableColumnWidth extends DartClass {
    /**
     * TableColumnWidth.intrinsic = new IntrinsicColumnWidth(flex?:number);
    */
    static intrinsic(flex?: number): IntrinsicColumnWidth;
    /**
     * TableColumnWidth.fixed = new FixedColumnWidth(value:number);
    */
    static fixed(value: number): FixedColumnWidth;
    /**
     * TableColumnWidth.fraction = new FractionColumnWidth(value:number);
    */
    static fraction(value: number): FractionColumnWidth;
    /**
     * TableColumnWidth.max = new MaxColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
    */
    static max(a: TableColumnWidth, b: TableColumnWidth): MaxColumnWidth;
    /**
     * TableColumnWidth.max = new MinColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
    */
    static min(a: TableColumnWidth, b: TableColumnWidth): MinColumnWidth;
}
export declare class IntrinsicColumnWidth extends TableColumnWidth {
    flex?: number;
    constructor(flex?: number);
}
export declare class FixedColumnWidth extends TableColumnWidth {
    value: number;
    constructor(value: number);
}
export declare class FractionColumnWidth extends TableColumnWidth {
    value: number;
    constructor(value: number);
}
export declare class FlexColumnWidth extends TableColumnWidth {
    value?: number;
    constructor(value?: number);
}
export declare class MaxColumnWidth extends TableColumnWidth {
    a: TableColumnWidth;
    b: TableColumnWidth;
    constructor(a: TableColumnWidth, b: TableColumnWidth);
}
export declare class MinColumnWidth extends TableColumnWidth {
    a: TableColumnWidth;
    b: TableColumnWidth;
    constructor(a: TableColumnWidth, b: TableColumnWidth);
}
export declare class TabController extends DartClass {
    initialIndex?: number;
    length?: number;
    constructor(config?: {
        initialIndex?: number;
        length?: number;
    });
    animateTo(config: {
        value: number;
        duration: Duration;
        curve: Curve;
    }): void;
    offset(): Promise<number>;
}
export declare class TextEditingController extends DartClass {
    text?: string;
    constructor(text?: string);
    clear(): void;
    getText(): Promise<string>;
    setText(text: string): Promise<void>;
}
export declare class ToolbarOptions extends DartClass {
    copy?: boolean;
    cut?: boolean;
    paste?: boolean;
    selectAll?: boolean;
    constructor(config?: {
        copy?: boolean;
        cut?: boolean;
        paste?: boolean;
        selectAll?: boolean;
    });
}
export declare class TextInputType extends DartClass {
    signed?: boolean;
    decimal?: boolean;
    static numberWithOptions(config?: {
        signed?: boolean;
        decimal?: boolean;
    }): TextInputType;
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
    constructor(begin?: number, end?: number);
    lerp(t: number): void;
    transform(t: number): number | void;
}
export declare abstract class TextInputFormatter extends DartClass {
    /**
     * TextInputFormatter.lengthLimiting = new LengthLimitingTextInputFormatter(maxLength?:number);
    */
    static lengthLimiting(maxLength?: number): LengthLimitingTextInputFormatter;
    /**
     * TextInputFormatter.filtering = new FilteringTextInputFormatter(allow:boolean,filterPattern:RegExp,replacementString?:string);
    */
    static filtering(allow: boolean, filterPattern: RegExp, replacementString?: string): FilteringTextInputFormatter;
    /**
     * TextInputFormatter.allow = FilteringTextInputFormatter.allow(filterPattern:RegExp,replacementString?:string);
    */
    static allow(filterPattern: RegExp, replacementString?: string): FilteringTextInputFormatter;
    /**
     * TextInputFormatter.deny = FilteringTextInputFormatter.deny(filterPattern:RegExp,replacementString?:string);
    */
    static deny(filterPattern: RegExp, replacementString?: string): FilteringTextInputFormatter;
    /**
     * TextInputFormatter.singleLineFormatter = FilteringTextInputFormatter.singleLineFormatter();
    */
    static singleLineFormatter(): FilteringTextInputFormatter;
    /**
     * TextInputFormatter.digitsOnly = FilteringTextInputFormatter.digitsOnly();
    */
    static digitsOnly(): FilteringTextInputFormatter;
    /**
     * TextInputFormatter.mask = new MaskTextInputFormatter(mask:string,initialText?:string,filter?:Map<string,RegExp>);
    */
    static mask(mask: string, initialText?: string, filter?: Map<string, RegExp>): MaskTextInputFormatter;
}
export declare class LengthLimitingTextInputFormatter extends TextInputFormatter {
    maxLength?: number;
    constructor(maxLength?: number);
}
export declare class FilteringTextInputFormatter extends TextInputFormatter {
    filterPattern?: RegExp;
    allow?: boolean;
    replacementString?: string;
    constructor(allow?: boolean, filterPattern?: RegExp, replacementString?: string);
    static allow(filterPattern: RegExp, replacementString?: string): FilteringTextInputFormatter;
    static deny(filterPattern: RegExp, replacementString?: string): FilteringTextInputFormatter;
    static singleLineFormatter(): FilteringTextInputFormatter;
    static digitsOnly(): FilteringTextInputFormatter;
}
export declare class MaskTextInputFormatter extends TextInputFormatter {
    mask?: string;
    initialText?: string;
    filter?: Map<string, RegExp>;
    constructor(mask: string, initialText?: string, filter?: Map<string, RegExp>);
}
export declare class Uri extends DartClass {
    scheme?: string;
    fragment?: string;
    userInfo?: string;
    host?: string;
    port?: number;
    path?: string;
    query?: string;
    constructor(config?: {
        scheme?: string;
        fragment?: string;
        userInfo?: string;
        host?: string;
        port?: number;
        path?: string;
        query?: string;
    });
}
export declare class Uint8List extends DartClass {
    length?: number;
    elements?: Array<number>;
    constructor(length?: number);
    static fromList(elements?: Array<number>): Uint8List;
}
export declare class Vector3 extends DartClass {
    x?: number;
    y?: number;
    z?: number;
    value?: number;
    constructor(x?: number, y?: number, z?: number);
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
    constructor(x?: number, y?: number, z?: number, w?: number);
    static array(array?: Array<number>, offset?: Offset): Vector4;
    static identity(): Vector4;
    static random(): Vector4;
}
export declare class VisualDensity extends DartClass {
    horizontal?: number;
    vertical?: number;
    constructor(config?: {
        horizontal?: number;
        vertical?: number;
    });
    static comfortable: VisualDensity;
    static compact: VisualDensity;
    static standard: VisualDensity;
}
export declare class Velocity extends DartClass {
    pixelsPerSecond?: Offset;
    constructor(config?: {
        pixelsPerSecond?: Offset;
    });
    static zero(): Velocity;
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
    constructor(config: {
        primary: Color;
        primaryVariant: Color;
        secondary: Color;
        secondaryVariant: Color;
        surface: Color;
        background: Color;
        error: Color;
        onPrimary: Color;
        onSecondary: Color;
        onSurface: Color;
        onBackground: Color;
        onError: Color;
        brightness?: Brightness;
    });
}
export declare class ButtonThemeData extends DartClass {
    textTheme?: ButtonTextTheme;
    minWidth?: number;
    height?: number;
    padding?: EdgeInsets;
    shape?: ShapeBorder;
    layoutBehavior?: ButtonBarLayoutBehavior;
    alignedDropdown?: boolean;
    buttonColor?: Color;
    disabledColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorScheme?: ColorScheme;
    materialTapTargetSize?: MaterialTapTargetSize;
    constructor(config: {
        textTheme?: ButtonTextTheme;
        minWidth?: number;
        height?: number;
        padding?: EdgeInsets;
        shape?: ShapeBorder;
        layoutBehavior?: ButtonBarLayoutBehavior;
        alignedDropdown?: boolean;
        buttonColor?: Color;
        disabledColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorScheme?: ColorScheme;
        materialTapTargetSize?: MaterialTapTargetSize;
    });
}
export declare class ToggleButtonsThemeData extends DartClass {
    textStyle?: TextStyle;
    constraints?: BoxConstraints;
    color?: Color;
    selectedColor?: Color;
    disabledColor?: Color;
    fillColor?: Color;
    focusColor?: Color;
    highlightColor?: Color;
    hoverColor?: Color;
    splashColor?: Color;
    borderColor?: Color;
    selectedBorderColor?: Color;
    disabledBorderColor?: Color;
    borderRadius?: BorderRadius;
    borderWidth?: number;
    constructor(config: {
        textStyle?: TextStyle;
        constraints?: BoxConstraints;
        color?: Color;
        selectedColor?: Color;
        disabledColor?: Color;
        fillColor?: Color;
        focusColor?: Color;
        highlightColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        borderColor?: Color;
        selectedBorderColor?: Color;
        disabledBorderColor?: Color;
        borderRadius?: BorderRadius;
        borderWidth?: number;
    });
}
export declare class TextTheme extends DartClass {
    headline1?: TextStyle;
    headline2?: TextStyle;
    headline3?: TextStyle;
    headline4?: TextStyle;
    headline5?: TextStyle;
    headline6?: TextStyle;
    subtitle1?: TextStyle;
    subtitle2?: TextStyle;
    bodyText1?: TextStyle;
    bodyText2?: TextStyle;
    caption?: TextStyle;
    button?: TextStyle;
    overline?: TextStyle;
    constructor(config: {
        headline1?: TextStyle;
        headline2?: TextStyle;
        headline3?: TextStyle;
        headline4?: TextStyle;
        headline5?: TextStyle;
        headline6?: TextStyle;
        subtitle1?: TextStyle;
        subtitle2?: TextStyle;
        bodyText1?: TextStyle;
        bodyText2?: TextStyle;
        caption?: TextStyle;
        button?: TextStyle;
        overline?: TextStyle;
    });
}
export declare class InputDecorationTheme extends DartClass {
    labelStyle?: TextStyle;
    helperStyle?: TextStyle;
    helperMaxLines?: number;
    hintStyle?: TextStyle;
    errorStyle?: TextStyle;
    errorMaxLines?: number;
    floatingLabelBehavior?: FloatingLabelBehavior;
    isDense?: boolean;
    contentPadding?: EdgeInsets;
    isCollapsed?: boolean;
    prefixStyle?: TextStyle;
    suffixStyle?: TextStyle;
    counterStyle?: TextStyle;
    filled?: boolean;
    fillColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    errorBorder?: InputBorder;
    focusedBorder?: InputBorder;
    focusedErrorBorder?: InputBorder;
    disabledBorder?: InputBorder;
    enabledBorder?: InputBorder;
    border?: InputBorder;
    alignLabelWithHint?: boolean;
    constructor(config: {
        labelStyle?: TextStyle;
        helperStyle?: TextStyle;
        helperMaxLines?: number;
        hintStyle?: TextStyle;
        errorStyle?: TextStyle;
        errorMaxLines?: number;
        floatingLabelBehavior?: FloatingLabelBehavior;
        isDense?: boolean;
        contentPadding?: EdgeInsets;
        isCollapsed?: boolean;
        prefixStyle?: TextStyle;
        suffixStyle?: TextStyle;
        counterStyle?: TextStyle;
        filled?: boolean;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        errorBorder?: InputBorder;
        focusedBorder?: InputBorder;
        focusedErrorBorder?: InputBorder;
        disabledBorder?: InputBorder;
        enabledBorder?: InputBorder;
        border?: InputBorder;
        alignLabelWithHint?: boolean;
    });
}
export declare class IconThemeData extends DartClass {
    color?: Color;
    opacity?: number;
    size?: number;
    constructor(config: {
        color?: Color;
        opacity?: number;
        size?: number;
    });
}
export declare class SliderThemeData extends DartClass {
    trackHeight?: number;
    activeTrackColor?: Color;
    inactiveTrackColor?: Color;
    disabledActiveTrackColor?: Color;
    disabledInactiveTrackColor?: Color;
    activeTickMarkColor?: Color;
    inactiveTickMarkColor?: Color;
    disabledActiveTickMarkColor?: Color;
    disabledInactiveTickMarkColor?: Color;
    thumbColor?: Color;
    overlappingShapeStrokeColor?: Color;
    disabledThumbColor?: Color;
    overlayColor?: Color;
    valueIndicatorColor?: Color;
    showValueIndicator?: ShowValueIndicator;
    valueIndicatorTextStyle?: TextStyle;
    minThumbSeparation?: number;
    constructor(config: {
        trackHeight?: number;
        activeTrackColor?: Color;
        inactiveTrackColor?: Color;
        disabledActiveTrackColor?: Color;
        disabledInactiveTrackColor?: Color;
        activeTickMarkColor?: Color;
        inactiveTickMarkColor?: Color;
        disabledActiveTickMarkColor?: Color;
        disabledInactiveTickMarkColor?: Color;
        thumbColor?: Color;
        overlappingShapeStrokeColor?: Color;
        disabledThumbColor?: Color;
        overlayColor?: Color;
        valueIndicatorColor?: Color;
        showValueIndicator?: ShowValueIndicator;
        valueIndicatorTextStyle?: TextStyle;
        minThumbSeparation?: number;
    });
}
export declare class TabBarTheme extends DartClass {
    indicator?: Decoration;
    indicatorSize?: TabBarIndicatorSize;
    labelColor?: Color;
    labelPadding?: EdgeInsets;
    labelStyle?: TextStyle;
    unselectedLabelColor?: Color;
    unselectedLabelStyle?: TextStyle;
    constructor(config: {
        indicator?: Decoration;
        indicatorSize?: TabBarIndicatorSize;
        labelColor?: Color;
        labelPadding?: EdgeInsets;
        labelStyle?: TextStyle;
        unselectedLabelColor?: Color;
        unselectedLabelStyle?: TextStyle;
    });
}
export declare class TooltipThemeData extends DartClass {
    height?: number;
    padding?: EdgeInsets;
    margin?: EdgeInsets;
    verticalOffset?: number;
    preferBelow?: boolean;
    excludeFromSemantics?: boolean;
    decoration?: Decoration;
    textStyle?: TextStyle;
    waitDuration?: Duration;
    showDuration?: Duration;
    constructor(config: {
        height?: number;
        padding?: EdgeInsets;
        margin?: EdgeInsets;
        verticalOffset?: number;
        preferBelow?: boolean;
        excludeFromSemantics?: boolean;
        decoration?: Decoration;
        textStyle?: TextStyle;
        waitDuration?: Duration;
        showDuration?: Duration;
    });
}
export declare class CardTheme extends DartClass {
    clipBehavior?: Clip;
    color?: Color;
    shadowColor?: Color;
    elevation?: number;
    margin?: EdgeInsets;
    constructor(config: {
        clipBehavior?: Clip;
        color?: Color;
        shadowColor?: Color;
        elevation?: number;
        margin?: EdgeInsets;
    });
}
export declare class ChipThemeData extends DartClass {
    backgroundColor?: Color;
    deleteIconColor?: Color;
    disabledColor?: Color;
    selectedColor?: Color;
    secondarySelectedColor?: Color;
    shadowColor?: Color;
    selectedShadowColor?: Color;
    showCheckmark?: boolean;
    checkmarkColor?: Color;
    labelPadding?: EdgeInsets;
    padding?: EdgeInsets;
    shape?: ShapeBorder;
    labelStyle?: TextStyle;
    secondaryLabelStyle?: TextStyle;
    brightness?: Brightness;
    elevation?: number;
    pressElevation?: number;
    constructor(config: {
        backgroundColor?: Color;
        deleteIconColor?: Color;
        disabledColor?: Color;
        selectedColor?: Color;
        secondarySelectedColor?: Color;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        showCheckmark?: boolean;
        checkmarkColor?: Color;
        labelPadding?: EdgeInsets;
        padding?: EdgeInsets;
        shape?: ShapeBorder;
        labelStyle?: TextStyle;
        secondaryLabelStyle?: TextStyle;
        brightness?: Brightness;
        elevation?: number;
        pressElevation?: number;
    });
}
export declare class AppBarTheme extends DartClass {
    brightness?: Brightness;
    color?: Color;
    elevation?: number;
    shadowColor?: Color;
    iconTheme?: IconThemeData;
    actionsIconTheme?: IconThemeData;
    textTheme?: TextTheme;
    centerTitle?: boolean;
    constructor(config: {
        brightness?: Brightness;
        color?: Color;
        elevation?: number;
        shadowColor?: Color;
        iconTheme?: IconThemeData;
        actionsIconTheme?: IconThemeData;
        textTheme?: TextTheme;
        centerTitle?: boolean;
    });
}
export declare class BottomAppBarTheme extends DartClass {
    color?: Color;
    elevation?: number;
    shape?: NotchedShape;
    constructor(config: {
        color?: Color;
        elevation?: number;
        shape?: NotchedShape;
    });
}
export declare class DialogTheme extends DartClass {
    backgroundColor?: Color;
    elevation?: number;
    shape?: ShapeBorder;
    titleTextStyle?: TextStyle;
    contentTextStyle?: TextStyle;
    constructor(config: {
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        titleTextStyle?: TextStyle;
        contentTextStyle?: TextStyle;
    });
}
export declare class FloatingActionButtonThemeData extends DartClass {
    foregroundColor?: Color;
    backgroundColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    splashColor?: Color;
    elevation?: number;
    focusElevation?: number;
    hoverElevation?: number;
    disabledElevation?: number;
    highlightElevation?: number;
    shape?: ShapeBorder;
    constructor(config: {
        foregroundColor?: Color;
        backgroundColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        disabledElevation?: number;
        highlightElevation?: number;
        shape?: ShapeBorder;
    });
}
export declare class NavigationRailThemeData extends DartClass {
    backgroundColor?: Color;
    elevation?: number;
    unselectedLabelTextStyle?: TextStyle;
    selectedLabelTextStyle?: TextStyle;
    unselectedIconTheme?: IconThemeData;
    selectedIconTheme?: IconThemeData;
    groupAlignment?: number;
    labelType?: NavigationRailLabelType;
    constructor(config: {
        backgroundColor?: Color;
        elevation?: number;
        unselectedLabelTextStyle?: TextStyle;
        selectedLabelTextStyle?: TextStyle;
        unselectedIconTheme?: IconThemeData;
        selectedIconTheme?: IconThemeData;
        groupAlignment?: number;
        labelType?: NavigationRailLabelType;
    });
}
export declare class CupertinoThemeData extends DartClass {
    primaryColor?: Color;
    brightness?: Brightness;
    primaryContrastingColor?: Color;
    textTheme?: CupertinoTextThemeData;
    barBackgroundColor?: Color;
    scaffoldBackgroundColor?: Color;
    constructor(config: {
        primaryColor?: Color;
        brightness?: Brightness;
        primaryContrastingColor?: Color;
        textTheme?: CupertinoTextThemeData;
        barBackgroundColor?: Color;
        scaffoldBackgroundColor?: Color;
    });
}
export declare class SnackBarThemeData extends DartClass {
    backgroundColor?: Color;
    actionTextColor?: Color;
    disabledActionTextColor?: Color;
    contentTextStyle?: TextStyle;
    elevation?: number;
    shape?: ShapeBorder;
    behavior?: SnackBarBehavior;
    constructor(config: {
        backgroundColor?: Color;
        actionTextColor?: Color;
        disabledActionTextColor?: Color;
        contentTextStyle?: TextStyle;
        elevation?: number;
        shape?: ShapeBorder;
        behavior?: SnackBarBehavior;
    });
}
export declare class BottomSheetThemeData extends DartClass {
    backgroundColor?: Color;
    elevation?: number;
    modalBackgroundColor?: Color;
    modalElevation?: number;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    constructor(config: {
        backgroundColor?: Color;
        elevation?: number;
        modalBackgroundColor?: Color;
        modalElevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
    });
}
export declare class PopupMenuThemeData extends DartClass {
    color?: Color;
    shape?: ShapeBorder;
    elevation?: number;
    textStyle?: TextStyle;
    constructor(config: {
        color?: Color;
        shape?: ShapeBorder;
        elevation?: number;
        textStyle?: TextStyle;
    });
}
export declare class MaterialBannerThemeData extends DartClass {
    backgroundColor?: Color;
    contentTextStyle?: TextStyle;
    padding?: EdgeInsets;
    leadingPadding?: EdgeInsets;
    constructor(config: {
        backgroundColor?: Color;
        contentTextStyle?: TextStyle;
        padding?: EdgeInsets;
        leadingPadding?: EdgeInsets;
    });
}
export declare class DividerThemeData extends DartClass {
    color?: Color;
    space?: number;
    thickness?: number;
    indent?: number;
    endIndent?: number;
    constructor(config: {
        color?: Color;
        space?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
    });
}
export declare class ButtonBarThemeData extends DartClass {
    alignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    buttonTextTheme?: ButtonTextTheme;
    buttonMinWidth?: number;
    buttonHeight?: number;
    buttonPadding?: EdgeInsets;
    buttonAlignedDropdown?: boolean;
    layoutBehavior?: ButtonBarLayoutBehavior;
    overflowDirection?: VerticalDirection;
    constructor(config: {
        alignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        buttonTextTheme?: ButtonTextTheme;
        buttonMinWidth?: number;
        buttonHeight?: number;
        buttonPadding?: EdgeInsets;
        buttonAlignedDropdown?: boolean;
        layoutBehavior?: ButtonBarLayoutBehavior;
        overflowDirection?: VerticalDirection;
    });
}
export declare class BottomNavigationBarThemeData extends DartClass {
    backgroundColor?: Color;
    elevation?: number;
    selectedIconTheme?: IconThemeData;
    unselectedIconTheme?: IconThemeData;
    selectedItemColor?: Color;
    unselectedItemColor?: Color;
    selectedLabelStyle?: TextStyle;
    unselectedLabelStyle?: TextStyle;
    showSelectedLabels?: boolean;
    showUnselectedLabels?: boolean;
    type?: BottomNavigationBarType;
    constructor(config: {
        backgroundColor?: Color;
        elevation?: number;
        selectedIconTheme?: IconThemeData;
        unselectedIconTheme?: IconThemeData;
        selectedItemColor?: Color;
        unselectedItemColor?: Color;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
        type?: BottomNavigationBarType;
    });
}
export declare class TimePickerThemeData extends DartClass {
    backgroundColor?: Color;
    hourMinuteTextColor?: Color;
    hourMinuteColor?: Color;
    dayPeriodTextColor?: Color;
    dayPeriodColor?: Color;
    dialHandColor?: Color;
    dialBackgroundColor?: Color;
    dialTextColor?: Color;
    entryModeIconColor?: Color;
    hourMinuteTextStyle?: TextStyle;
    dayPeriodTextStyle?: TextStyle;
    helpTextStyle?: TextStyle;
    shape?: ShapeBorder;
    hourMinuteShape?: ShapeBorder;
    dayPeriodShape?: ShapeBorder;
    dayPeriodBorderSide?: BorderSide;
    inputDecorationTheme?: InputDecorationTheme;
    constructor(config: {
        backgroundColor?: Color;
        hourMinuteTextColor?: Color;
        hourMinuteColor?: Color;
        dayPeriodTextColor?: Color;
        dayPeriodColor?: Color;
        dialHandColor?: Color;
        dialBackgroundColor?: Color;
        dialTextColor?: Color;
        entryModeIconColor?: Color;
        hourMinuteTextStyle?: TextStyle;
        dayPeriodTextStyle?: TextStyle;
        helpTextStyle?: TextStyle;
        shape?: ShapeBorder;
        hourMinuteShape?: ShapeBorder;
        dayPeriodShape?: ShapeBorder;
        dayPeriodBorderSide?: BorderSide;
        inputDecorationTheme?: InputDecorationTheme;
    });
}
export declare class TextSelectionThemeData extends DartClass {
    cursorColor?: Color;
    selectionColor?: Color;
    selectionHandleColor?: Color;
    constructor(config: {
        cursorColor?: Color;
        selectionColor?: Color;
        selectionHandleColor?: Color;
    });
}
export declare class DataTableThemeData extends DartClass {
    dataRowHeight?: number;
    dataTextStyle?: TextStyle;
    headingRowHeight?: number;
    headingTextStyle?: TextStyle;
    horizontalMargin?: number;
    columnSpacing?: number;
    dividerThickness?: number;
    constructor(config: {
        dataRowHeight?: number;
        dataTextStyle?: TextStyle;
        headingRowHeight?: number;
        headingTextStyle?: TextStyle;
        horizontalMargin?: number;
        columnSpacing?: number;
        dividerThickness?: number;
    });
}
export declare class ThemeData extends DartClass {
    brightness?: Brightness;
    visualDensity?: VisualDensity;
    primaryColor?: Color;
    primaryColorBrightness?: Brightness;
    primaryColorLight?: Color;
    primaryColorDark?: Color;
    accentColor?: Color;
    accentColorBrightness?: Brightness;
    canvasColor?: Color;
    shadowColor?: Color;
    scaffoldBackgroundColor?: Color;
    bottomAppBarColor?: Color;
    cardColor?: Color;
    focusColor?: Color;
    dividerColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    selectedRowColor?: Color;
    unselectedWidgetColor?: Color;
    disabledColor?: Color;
    buttonColor?: Color;
    buttonTheme?: ButtonThemeData;
    toggleButtonsTheme?: ToggleButtonsThemeData;
    secondaryHeaderColor?: Color;
    textSelectionColor?: Color;
    cursorColor?: Color;
    textSelectionHandleColor?: Color;
    backgroundColor?: Color;
    dialogBackgroundColor?: Color;
    indicatorColor?: Color;
    hintColor?: Color;
    errorColor?: Color;
    toggleableActiveColor?: Color;
    fontFamily?: string;
    textTheme?: TextTheme;
    primaryTextTheme?: TextTheme;
    accentTextTheme?: TextTheme;
    inputDecorationTheme?: InputDecorationTheme;
    iconTheme?: IconThemeData;
    primaryIconTheme?: IconThemeData;
    accentIconTheme?: IconThemeData;
    sliderTheme?: SliderThemeData;
    tabBarTheme?: TabBarTheme;
    tooltipTheme?: TooltipThemeData;
    cardTheme?: CardTheme;
    chipTheme?: ChipThemeData;
    platform?: TargetPlatform;
    materialTapTargetSize?: MaterialTapTargetSize;
    applyElevationOverlayColor?: boolean;
    appBarTheme?: AppBarTheme;
    bottomAppBarTheme?: BottomAppBarTheme;
    colorScheme?: ColorScheme;
    dialogTheme?: DialogTheme;
    floatingActionButtonTheme?: FloatingActionButtonThemeData;
    navigationRailTheme?: NavigationRailThemeData;
    cupertinoOverrideTheme?: CupertinoThemeData;
    snackBarTheme?: SnackBarThemeData;
    bottomSheetTheme?: BottomSheetThemeData;
    popupMenuTheme?: PopupMenuThemeData;
    bannerTheme?: MaterialBannerThemeData;
    dividerTheme?: DividerThemeData;
    buttonBarTheme?: ButtonBarThemeData;
    bottomNavigationBarTheme?: BottomNavigationBarThemeData;
    timePickerTheme?: TimePickerThemeData;
    textSelectionTheme?: TextSelectionThemeData;
    dataTableTheme?: DataTableThemeData;
    fixTextFieldOutlineLabel?: boolean;
    useTextSelectionTheme?: boolean;
    constructor(config: {
        brightness?: Brightness;
        visualDensity?: VisualDensity;
        primaryColor?: Color;
        primaryColorBrightness?: Brightness;
        primaryColorLight?: Color;
        primaryColorDark?: Color;
        accentColor?: Color;
        accentColorBrightness?: Brightness;
        canvasColor?: Color;
        shadowColor?: Color;
        scaffoldBackgroundColor?: Color;
        bottomAppBarColor?: Color;
        cardColor?: Color;
        focusColor?: Color;
        dividerColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        selectedRowColor?: Color;
        unselectedWidgetColor?: Color;
        disabledColor?: Color;
        buttonColor?: Color;
        buttonTheme?: ButtonThemeData;
        toggleButtonsTheme?: ToggleButtonsThemeData;
        secondaryHeaderColor?: Color;
        textSelectionColor?: Color;
        cursorColor?: Color;
        textSelectionHandleColor?: Color;
        backgroundColor?: Color;
        dialogBackgroundColor?: Color;
        indicatorColor?: Color;
        hintColor?: Color;
        errorColor?: Color;
        toggleableActiveColor?: Color;
        fontFamily?: string;
        textTheme?: TextTheme;
        primaryTextTheme?: TextTheme;
        accentTextTheme?: TextTheme;
        inputDecorationTheme?: InputDecorationTheme;
        iconTheme?: IconThemeData;
        primaryIconTheme?: IconThemeData;
        accentIconTheme?: IconThemeData;
        sliderTheme?: SliderThemeData;
        tabBarTheme?: TabBarTheme;
        tooltipTheme?: TooltipThemeData;
        cardTheme?: CardTheme;
        chipTheme?: ChipThemeData;
        platform?: TargetPlatform;
        materialTapTargetSize?: MaterialTapTargetSize;
        applyElevationOverlayColor?: boolean;
        appBarTheme?: AppBarTheme;
        bottomAppBarTheme?: BottomAppBarTheme;
        colorScheme?: ColorScheme;
        dialogTheme?: DialogTheme;
        floatingActionButtonTheme?: FloatingActionButtonThemeData;
        navigationRailTheme?: NavigationRailThemeData;
        cupertinoOverrideTheme?: CupertinoThemeData;
        snackBarTheme?: SnackBarThemeData;
        bottomSheetTheme?: BottomSheetThemeData;
        popupMenuTheme?: PopupMenuThemeData;
        bannerTheme?: MaterialBannerThemeData;
        dividerTheme?: DividerThemeData;
        buttonBarTheme?: ButtonBarThemeData;
        bottomNavigationBarTheme?: BottomNavigationBarThemeData;
        timePickerTheme?: TimePickerThemeData;
        textSelectionTheme?: TextSelectionThemeData;
        dataTableTheme?: DataTableThemeData;
        fixTextFieldOutlineLabel?: boolean;
        useTextSelectionTheme?: boolean;
    });
    static dark(): ThemeData;
    static light(): ThemeData;
}
export declare class Icons extends IconData {
    constructor(icon: string);
    static threesixty: Icons;
    static threed_rotation: Icons;
    static four_k: Icons;
    static ac_unit: Icons;
    static access_alarm: Icons;
    static access_alarms: Icons;
    static access_time: Icons;
    static accessibility: Icons;
    static accessibility_new: Icons;
    static accessible: Icons;
    static accessible_forward: Icons;
    static account_balance: Icons;
    static account_balance_wallet: Icons;
    static account_box: Icons;
    static account_circle: Icons;
    static adb: Icons;
    static add: Icons;
    static add_a_photo: Icons;
    static add_alarm: Icons;
    static add_alert: Icons;
    static add_box: Icons;
    static add_call: Icons;
    static add_circle: Icons;
    static add_circle_outline: Icons;
    static add_comment: Icons;
    static add_location: Icons;
    static add_photo_alternate: Icons;
    static add_shopping_cart: Icons;
    static add_to_home_screen: Icons;
    static add_to_photos: Icons;
    static add_to_queue: Icons;
    static adjust: Icons;
    static airline_seat_flat: Icons;
    static airline_seat_flat_angled: Icons;
    static airline_seat_individual_suite: Icons;
    static airline_seat_legroom_extra: Icons;
    static airline_seat_legroom_normal: Icons;
    static airline_seat_legroom_reduced: Icons;
    static airline_seat_recline_extra: Icons;
    static airline_seat_recline_normal: Icons;
    static airplanemode_active: Icons;
    static airplanemode_inactive: Icons;
    static airplay: Icons;
    static airport_shuttle: Icons;
    static alarm: Icons;
    static alarm_add: Icons;
    static alarm_off: Icons;
    static alarm_on: Icons;
    static album: Icons;
    static all_inclusive: Icons;
    static all_out: Icons;
    static alternate_email: Icons;
    static android: Icons;
    static announcement: Icons;
    static apps: Icons;
    static archive: Icons;
    static arrow_back: Icons;
    static arrow_back_ios: Icons;
    static arrow_downward: Icons;
    static arrow_drop_down: Icons;
    static arrow_drop_down_circle: Icons;
    static arrow_drop_up: Icons;
    static arrow_forward: Icons;
    static arrow_forward_ios: Icons;
    static arrow_left: Icons;
    static arrow_right: Icons;
    static arrow_upward: Icons;
    static art_track: Icons;
    static aspect_ratio: Icons;
    static assessment: Icons;
    static assignment: Icons;
    static assignment_ind: Icons;
    static assignment_late: Icons;
    static assignment_return: Icons;
    static assignment_returned: Icons;
    static assignment_turned_in: Icons;
    static assistant: Icons;
    static assistant_photo: Icons;
    static atm: Icons;
    static attach_file: Icons;
    static attach_money: Icons;
    static attachment: Icons;
    static audiotrack: Icons;
    static autorenew: Icons;
    static av_timer: Icons;
    static backspace: Icons;
    static backup: Icons;
    static battery_alert: Icons;
    static battery_charging_full: Icons;
    static battery_full: Icons;
    static battery_std: Icons;
    static battery_unknown: Icons;
    static beach_access: Icons;
    static beenhere: Icons;
    static block: Icons;
    static bluetooth: Icons;
    static bluetooth_audio: Icons;
    static bluetooth_connected: Icons;
    static bluetooth_disabled: Icons;
    static bluetooth_searching: Icons;
    static blur_circular: Icons;
    static blur_linear: Icons;
    static blur_off: Icons;
    static blur_on: Icons;
    static book: Icons;
    static bookmark: Icons;
    static bookmark_border: Icons;
    static border_all: Icons;
    static border_bottom: Icons;
    static border_clear: Icons;
    static border_color: Icons;
    static border_horizontal: Icons;
    static border_inner: Icons;
    static border_left: Icons;
    static border_outer: Icons;
    static border_right: Icons;
    static border_style: Icons;
    static border_top: Icons;
    static border_vertical: Icons;
    static branding_watermark: Icons;
    static brightness_1: Icons;
    static brightness_2: Icons;
    static brightness_3: Icons;
    static brightness_4: Icons;
    static brightness_5: Icons;
    static brightness_6: Icons;
    static brightness_7: Icons;
    static brightness_auto: Icons;
    static brightness_high: Icons;
    static brightness_low: Icons;
    static brightness_medium: Icons;
    static broken_image: Icons;
    static brush: Icons;
    static bubble_chart: Icons;
    static bug_report: Icons;
    static build: Icons;
    static burst_mode: Icons;
    static business: Icons;
    static business_center: Icons;
    static cached: Icons;
    static cake: Icons;
    static calendar_today: Icons;
    static calendar_view_day: Icons;
    static call: Icons;
    static call_end: Icons;
    static call_made: Icons;
    static call_merge: Icons;
    static call_missed: Icons;
    static call_missed_outgoing: Icons;
    static call_received: Icons;
    static call_split: Icons;
    static call_to_action: Icons;
    static camera: Icons;
    static camera_alt: Icons;
    static camera_enhance: Icons;
    static camera_front: Icons;
    static camera_rear: Icons;
    static camera_roll: Icons;
    static cancel: Icons;
    static card_giftcard: Icons;
    static card_membership: Icons;
    static card_travel: Icons;
    static casino: Icons;
    static cast: Icons;
    static cast_connected: Icons;
    static category: Icons;
    static center_focus_strong: Icons;
    static center_focus_weak: Icons;
    static change_history: Icons;
    static chat: Icons;
    static chat_bubble: Icons;
    static chat_bubble_outline: Icons;
    static check: Icons;
    static check_box: Icons;
    static check_box_outline_blank: Icons;
    static check_circle: Icons;
    static check_circle_outline: Icons;
    static chevron_left: Icons;
    static chevron_right: Icons;
    static child_care: Icons;
    static child_friendly: Icons;
    static chrome_reader_mode: Icons;
    static class_: Icons;
    static clear: Icons;
    static clear_all: Icons;
    static close: Icons;
    static closed_caption: Icons;
    static cloud: Icons;
    static cloud_circle: Icons;
    static cloud_done: Icons;
    static cloud_download: Icons;
    static cloud_off: Icons;
    static cloud_queue: Icons;
    static cloud_upload: Icons;
    static code: Icons;
    static collections: Icons;
    static collections_bookmark: Icons;
    static color_lens: Icons;
    static colorize: Icons;
    static comment: Icons;
    static compare: Icons;
    static compare_arrows: Icons;
    static computer: Icons;
    static confirmation_number: Icons;
    static contact_mail: Icons;
    static contact_phone: Icons;
    static contacts: Icons;
    static content_copy: Icons;
    static content_cut: Icons;
    static content_paste: Icons;
    static control_point: Icons;
    static control_point_duplicate: Icons;
    static copyright: Icons;
    static create: Icons;
    static create_new_folder: Icons;
    static credit_card: Icons;
    static crop: Icons;
    static crop_16_9: Icons;
    static crop_3_2: Icons;
    static crop_5_4: Icons;
    static crop_7_5: Icons;
    static crop_din: Icons;
    static crop_free: Icons;
    static crop_landscape: Icons;
    static crop_original: Icons;
    static crop_portrait: Icons;
    static crop_rotate: Icons;
    static crop_square: Icons;
    static dashboard: Icons;
    static data_usage: Icons;
    static date_range: Icons;
    static dehaze: Icons;
    static delete: Icons;
    static delete_forever: Icons;
    static delete_outline: Icons;
    static delete_sweep: Icons;
    static departure_board: Icons;
    static description: Icons;
    static desktop_mac: Icons;
    static desktop_windows: Icons;
    static details: Icons;
    static developer_board: Icons;
    static developer_mode: Icons;
    static device_hub: Icons;
    static device_unknown: Icons;
    static devices: Icons;
    static devices_other: Icons;
    static dialer_sip: Icons;
    static dialpad: Icons;
    static directions: Icons;
    static directions_bike: Icons;
    static directions_boat: Icons;
    static directions_bus: Icons;
    static directions_car: Icons;
    static directions_railway: Icons;
    static directions_run: Icons;
    static directions_subway: Icons;
    static directions_transit: Icons;
    static directions_walk: Icons;
    static disc_full: Icons;
    static dns: Icons;
    static do_not_disturb: Icons;
    static do_not_disturb_alt: Icons;
    static do_not_disturb_off: Icons;
    static do_not_disturb_on: Icons;
    static dock: Icons;
    static domain: Icons;
    static done: Icons;
    static done_all: Icons;
    static done_outline: Icons;
    static donut_large: Icons;
    static donut_small: Icons;
    static drafts: Icons;
    static drag_handle: Icons;
    static drive_eta: Icons;
    static dvr: Icons;
    static edit: Icons;
    static edit_attributes: Icons;
    static edit_location: Icons;
    static eject: Icons;
    static email: Icons;
    static enhanced_encryption: Icons;
    static equalizer: Icons;
    static error: Icons;
    static error_outline: Icons;
    static euro_symbol: Icons;
    static ev_station: Icons;
    static event: Icons;
    static event_available: Icons;
    static event_busy: Icons;
    static event_note: Icons;
    static event_seat: Icons;
    static exit_to_app: Icons;
    static expand_less: Icons;
    static expand_more: Icons;
    static explicit: Icons;
    static explore: Icons;
    static exposure: Icons;
    static exposure_neg_1: Icons;
    static exposure_neg_2: Icons;
    static exposure_plus_1: Icons;
    static exposure_plus_2: Icons;
    static exposure_zero: Icons;
    static extension: Icons;
    static face: Icons;
    static fast_forward: Icons;
    static fast_rewind: Icons;
    static fastfood: Icons;
    static favorite: Icons;
    static favorite_border: Icons;
    static featured_play_list: Icons;
    static featured_video: Icons;
    static feedback: Icons;
    static fiber_dvr: Icons;
    static fiber_manual_record: Icons;
    static fiber_new: Icons;
    static fiber_pin: Icons;
    static fiber_smart_record: Icons;
    static file_download: Icons;
    static file_upload: Icons;
    static filter: Icons;
    static filter_1: Icons;
    static filter_2: Icons;
    static filter_3: Icons;
    static filter_4: Icons;
    static filter_5: Icons;
    static filter_6: Icons;
    static filter_7: Icons;
    static filter_8: Icons;
    static filter_9: Icons;
    static filter_9_plus: Icons;
    static filter_b_and_w: Icons;
    static filter_center_focus: Icons;
    static filter_drama: Icons;
    static filter_frames: Icons;
    static filter_hdr: Icons;
    static filter_list: Icons;
    static filter_none: Icons;
    static filter_tilt_shift: Icons;
    static filter_vintage: Icons;
    static find_in_page: Icons;
    static find_replace: Icons;
    static fingerprint: Icons;
    static first_page: Icons;
    static fitness_center: Icons;
    static flag: Icons;
    static flare: Icons;
    static flash_auto: Icons;
    static flash_off: Icons;
    static flash_on: Icons;
    static flight: Icons;
    static flight_land: Icons;
    static flight_takeoff: Icons;
    static flip: Icons;
    static flip_to_back: Icons;
    static flip_to_front: Icons;
    static folder: Icons;
    static folder_open: Icons;
    static folder_shared: Icons;
    static folder_special: Icons;
    static font_download: Icons;
    static format_align_center: Icons;
    static format_align_justify: Icons;
    static format_align_left: Icons;
    static format_align_right: Icons;
    static format_bold: Icons;
    static format_clear: Icons;
    static format_color_fill: Icons;
    static format_color_reset: Icons;
    static format_color_text: Icons;
    static format_indent_decrease: Icons;
    static format_indent_increase: Icons;
    static format_italic: Icons;
    static format_line_spacing: Icons;
    static format_list_bulleted: Icons;
    static format_list_numbered: Icons;
    static format_list_numbered_rtl: Icons;
    static format_paint: Icons;
    static format_quote: Icons;
    static format_shapes: Icons;
    static format_size: Icons;
    static format_strikethrough: Icons;
    static format_textdirection_l_to_r: Icons;
    static format_textdirection_r_to_l: Icons;
    static format_underlined: Icons;
    static forum: Icons;
    static forward: Icons;
    static forward_10: Icons;
    static forward_30: Icons;
    static forward_5: Icons;
    static free_breakfast: Icons;
    static fullscreen: Icons;
    static fullscreen_exit: Icons;
    static functions: Icons;
    static g_translate: Icons;
    static gamepad: Icons;
    static games: Icons;
    static gavel: Icons;
    static gesture: Icons;
    static get_app: Icons;
    static gif: Icons;
    static golf_course: Icons;
    static gps_fixed: Icons;
    static gps_not_fixed: Icons;
    static gps_off: Icons;
    static grade: Icons;
    static gradient: Icons;
    static grain: Icons;
    static graphic_eq: Icons;
    static grid_off: Icons;
    static grid_on: Icons;
    static group: Icons;
    static group_add: Icons;
    static group_work: Icons;
    static hd: Icons;
    static hdr_off: Icons;
    static hdr_on: Icons;
    static hdr_strong: Icons;
    static hdr_weak: Icons;
    static headset: Icons;
    static headset_mic: Icons;
    static headset_off: Icons;
    static healing: Icons;
    static hearing: Icons;
    static help: Icons;
    static help_outline: Icons;
    static high_quality: Icons;
    static highlight: Icons;
    static highlight_off: Icons;
    static history: Icons;
    static home: Icons;
    static hot_tub: Icons;
    static hotel: Icons;
    static hourglass_empty: Icons;
    static hourglass_full: Icons;
    static http: Icons;
    static https: Icons;
    static image: Icons;
    static image_aspect_ratio: Icons;
    static import_contacts: Icons;
    static import_export: Icons;
    static important_devices: Icons;
    static inbox: Icons;
    static indeterminate_check_box: Icons;
    static info: Icons;
    static info_outline: Icons;
    static input: Icons;
    static insert_chart: Icons;
    static insert_comment: Icons;
    static insert_drive_file: Icons;
    static insert_emoticon: Icons;
    static insert_invitation: Icons;
    static insert_link: Icons;
    static insert_photo: Icons;
    static invert_colors: Icons;
    static invert_colors_off: Icons;
    static iso: Icons;
    static keyboard: Icons;
    static keyboard_arrow_down: Icons;
    static keyboard_arrow_left: Icons;
    static keyboard_arrow_right: Icons;
    static keyboard_arrow_up: Icons;
    static keyboard_backspace: Icons;
    static keyboard_capslock: Icons;
    static keyboard_hide: Icons;
    static keyboard_return: Icons;
    static keyboard_tab: Icons;
    static keyboard_voice: Icons;
    static kitchen: Icons;
    static label: Icons;
    static label_important: Icons;
    static label_outline: Icons;
    static landscape: Icons;
    static language: Icons;
    static laptop: Icons;
    static laptop_chromebook: Icons;
    static laptop_mac: Icons;
    static laptop_windows: Icons;
    static last_page: Icons;
    static launch: Icons;
    static layers: Icons;
    static layers_clear: Icons;
    static leak_add: Icons;
    static leak_remove: Icons;
    static lens: Icons;
    static library_add: Icons;
    static library_books: Icons;
    static library_music: Icons;
    static lightbulb_outline: Icons;
    static line_style: Icons;
    static line_weight: Icons;
    static linear_scale: Icons;
    static link: Icons;
    static link_off: Icons;
    static linked_camera: Icons;
    static list: Icons;
    static live_help: Icons;
    static live_tv: Icons;
    static local_activity: Icons;
    static local_airport: Icons;
    static local_atm: Icons;
    static local_bar: Icons;
    static local_cafe: Icons;
    static local_car_wash: Icons;
    static local_convenience_store: Icons;
    static local_dining: Icons;
    static local_drink: Icons;
    static local_florist: Icons;
    static local_gas_station: Icons;
    static local_grocery_store: Icons;
    static local_hospital: Icons;
    static local_hotel: Icons;
    static local_laundry_service: Icons;
    static local_library: Icons;
    static local_mall: Icons;
    static local_movies: Icons;
    static local_offer: Icons;
    static local_parking: Icons;
    static local_pharmacy: Icons;
    static local_phone: Icons;
    static local_pizza: Icons;
    static local_play: Icons;
    static local_post_office: Icons;
    static local_printshop: Icons;
    static local_see: Icons;
    static local_shipping: Icons;
    static local_taxi: Icons;
    static location_city: Icons;
    static location_disabled: Icons;
    static location_off: Icons;
    static location_on: Icons;
    static location_searching: Icons;
    static lock: Icons;
    static lock_open: Icons;
    static lock_outline: Icons;
    static looks: Icons;
    static looks_3: Icons;
    static looks_4: Icons;
    static looks_5: Icons;
    static looks_6: Icons;
    static looks_one: Icons;
    static looks_two: Icons;
    static loop: Icons;
    static loupe: Icons;
    static low_priority: Icons;
    static loyalty: Icons;
    static mail: Icons;
    static mail_outline: Icons;
    static map: Icons;
    static markunread: Icons;
    static markunread_mailbox: Icons;
    static maximize: Icons;
    static memory: Icons;
    static menu: Icons;
    static merge_type: Icons;
    static message: Icons;
    static mic: Icons;
    static mic_none: Icons;
    static mic_off: Icons;
    static minimize: Icons;
    static missed_video_call: Icons;
    static mms: Icons;
    static mobile_screen_share: Icons;
    static mode_comment: Icons;
    static mode_edit: Icons;
    static monetization_on: Icons;
    static money_off: Icons;
    static monochrome_photos: Icons;
    static mood: Icons;
    static mood_bad: Icons;
    static more: Icons;
    static more_horiz: Icons;
    static more_vert: Icons;
    static motorcycle: Icons;
    static mouse: Icons;
    static move_to_inbox: Icons;
    static movie: Icons;
    static movie_creation: Icons;
    static movie_filter: Icons;
    static multiline_chart: Icons;
    static music_note: Icons;
    static music_video: Icons;
    static my_location: Icons;
    static nature: Icons;
    static nature_people: Icons;
    static navigate_before: Icons;
    static navigate_next: Icons;
    static navigation: Icons;
    static near_me: Icons;
    static network_cell: Icons;
    static network_check: Icons;
    static network_locked: Icons;
    static network_wifi: Icons;
    static new_releases: Icons;
    static next_week: Icons;
    static nfc: Icons;
    static no_encryption: Icons;
    static no_sim: Icons;
    static not_interested: Icons;
    static not_listed_location: Icons;
    static note: Icons;
    static note_add: Icons;
    static notification_important: Icons;
    static notifications: Icons;
    static notifications_active: Icons;
    static notifications_none: Icons;
    static notifications_off: Icons;
    static notifications_paused: Icons;
    static offline_bolt: Icons;
    static offline_pin: Icons;
    static ondemand_video: Icons;
    static opacity: Icons;
    static open_in_browser: Icons;
    static open_in_new: Icons;
    static open_with: Icons;
    static outlined_flag: Icons;
    static pages: Icons;
    static pageview: Icons;
    static palette: Icons;
    static pan_tool: Icons;
    static panorama: Icons;
    static panorama_fish_eye: Icons;
    static panorama_horizontal: Icons;
    static panorama_vertical: Icons;
    static panorama_wide_angle: Icons;
    static party_mode: Icons;
    static pause: Icons;
    static pause_circle_filled: Icons;
    static pause_circle_outline: Icons;
    static payment: Icons;
    static people: Icons;
    static people_outline: Icons;
    static perm_camera_mic: Icons;
    static perm_contact_calendar: Icons;
    static perm_data_setting: Icons;
    static perm_device_information: Icons;
    static perm_identity: Icons;
    static perm_media: Icons;
    static perm_phone_msg: Icons;
    static perm_scan_wifi: Icons;
    static person: Icons;
    static person_add: Icons;
    static person_outline: Icons;
    static person_pin: Icons;
    static person_pin_circle: Icons;
    static personal_video: Icons;
    static pets: Icons;
    static phone: Icons;
    static phone_android: Icons;
    static phone_bluetooth_speaker: Icons;
    static phone_forwarded: Icons;
    static phone_in_talk: Icons;
    static phone_iphone: Icons;
    static phone_locked: Icons;
    static phone_missed: Icons;
    static phone_paused: Icons;
    static phonelink: Icons;
    static phonelink_erase: Icons;
    static phonelink_lock: Icons;
    static phonelink_off: Icons;
    static phonelink_ring: Icons;
    static phonelink_setup: Icons;
    static photo: Icons;
    static photo_album: Icons;
    static photo_camera: Icons;
    static photo_filter: Icons;
    static photo_library: Icons;
    static photo_size_select_actual: Icons;
    static photo_size_select_large: Icons;
    static photo_size_select_small: Icons;
    static picture_as_pdf: Icons;
    static picture_in_picture: Icons;
    static picture_in_picture_alt: Icons;
    static pie_chart: Icons;
    static pie_chart_outlined: Icons;
    static pin_drop: Icons;
    static place: Icons;
    static play_arrow: Icons;
    static play_circle_filled: Icons;
    static play_circle_outline: Icons;
    static play_for_work: Icons;
    static playlist_add: Icons;
    static playlist_add_check: Icons;
    static playlist_play: Icons;
    static plus_one: Icons;
    static poll: Icons;
    static polymer: Icons;
    static pool: Icons;
    static portable_wifi_off: Icons;
    static portrait: Icons;
    static power: Icons;
    static power_input: Icons;
    static power_settings_new: Icons;
    static pregnant_woman: Icons;
    static present_to_all: Icons;
    static print: Icons;
    static priority_high: Icons;
    static public: Icons;
    static publish: Icons;
    static query_builder: Icons;
    static question_answer: Icons;
    static queue: Icons;
    static queue_music: Icons;
    static queue_play_next: Icons;
    static radio: Icons;
    static radio_button_checked: Icons;
    static radio_button_unchecked: Icons;
    static rate_review: Icons;
    static receipt: Icons;
    static recent_actors: Icons;
    static record_voice_over: Icons;
    static redeem: Icons;
    static redo: Icons;
    static refresh: Icons;
    static remove: Icons;
    static remove_circle: Icons;
    static remove_circle_outline: Icons;
    static remove_from_queue: Icons;
    static remove_red_eye: Icons;
    static remove_shopping_cart: Icons;
    static reorder: Icons;
    static repeat: Icons;
    static repeat_one: Icons;
    static replay: Icons;
    static replay_10: Icons;
    static replay_30: Icons;
    static replay_5: Icons;
    static reply: Icons;
    static reply_all: Icons;
    static report: Icons;
    static report_off: Icons;
    static report_problem: Icons;
    static restaurant: Icons;
    static restaurant_menu: Icons;
    static restore: Icons;
    static restore_from_trash: Icons;
    static restore_page: Icons;
    static ring_volume: Icons;
    static room: Icons;
    static room_service: Icons;
    static rotate_90_degrees_ccw: Icons;
    static rotate_left: Icons;
    static rotate_right: Icons;
    static rounded_corner: Icons;
    static router: Icons;
    static rowing: Icons;
    static rss_feed: Icons;
    static rv_hookup: Icons;
    static satellite: Icons;
    static save: Icons;
    static save_alt: Icons;
    static scanner: Icons;
    static scatter_plot: Icons;
    static schedule: Icons;
    static school: Icons;
    static score: Icons;
    static screen_lock_landscape: Icons;
    static screen_lock_portrait: Icons;
    static screen_lock_rotation: Icons;
    static screen_rotation: Icons;
    static screen_share: Icons;
    static sd_card: Icons;
    static sd_storage: Icons;
    static search: Icons;
    static security: Icons;
    static select_all: Icons;
    static send: Icons;
    static sentiment_dissatisfied: Icons;
    static sentiment_neutral: Icons;
    static sentiment_satisfied: Icons;
    static sentiment_very_dissatisfied: Icons;
    static sentiment_very_satisfied: Icons;
    static settings: Icons;
    static settings_applications: Icons;
    static settings_backup_restore: Icons;
    static settings_bluetooth: Icons;
    static settings_brightness: Icons;
    static settings_cell: Icons;
    static settings_ethernet: Icons;
    static settings_input_antenna: Icons;
    static settings_input_component: Icons;
    static settings_input_composite: Icons;
    static settings_input_hdmi: Icons;
    static settings_input_svideo: Icons;
    static settings_overscan: Icons;
    static settings_phone: Icons;
    static settings_power: Icons;
    static settings_remote: Icons;
    static settings_system_daydream: Icons;
    static settings_voice: Icons;
    static share: Icons;
    static shop: Icons;
    static shop_two: Icons;
    static shopping_basket: Icons;
    static shopping_cart: Icons;
    static short_text: Icons;
    static show_chart: Icons;
    static shuffle: Icons;
    static shutter_speed: Icons;
    static signal_cellular_4_bar: Icons;
    static signal_cellular_connected_no_internet_4_bar: Icons;
    static signal_cellular_no_sim: Icons;
    static signal_cellular_null: Icons;
    static signal_cellular_off: Icons;
    static signal_wifi_4_bar: Icons;
    static signal_wifi_4_bar_lock: Icons;
    static signal_wifi_off: Icons;
    static sim_card: Icons;
    static sim_card_alert: Icons;
    static skip_next: Icons;
    static skip_previous: Icons;
    static slideshow: Icons;
    static slow_motion_video: Icons;
    static smartphone: Icons;
    static smoke_free: Icons;
    static smoking_rooms: Icons;
    static sms: Icons;
    static sms_failed: Icons;
    static snooze: Icons;
    static sort: Icons;
    static sort_by_alpha: Icons;
    static spa: Icons;
    static space_bar: Icons;
    static speaker: Icons;
    static speaker_group: Icons;
    static speaker_notes: Icons;
    static speaker_notes_off: Icons;
    static speaker_phone: Icons;
    static spellcheck: Icons;
    static star: Icons;
    static star_border: Icons;
    static star_half: Icons;
    static stars: Icons;
    static stay_current_landscape: Icons;
    static stay_current_portrait: Icons;
    static stay_primary_landscape: Icons;
    static stay_primary_portrait: Icons;
    static stop: Icons;
    static stop_screen_share: Icons;
    static storage: Icons;
    static store: Icons;
    static store_mall_directory: Icons;
    static straighten: Icons;
    static streetview: Icons;
    static strikethrough_s: Icons;
    static style: Icons;
    static subdirectory_arrow_left: Icons;
    static subdirectory_arrow_right: Icons;
    static subject: Icons;
    static subscriptions: Icons;
    static subtitles: Icons;
    static subway: Icons;
    static supervised_user_circle: Icons;
    static supervisor_account: Icons;
    static surround_sound: Icons;
    static swap_calls: Icons;
    static swap_horiz: Icons;
    static swap_horizontal_circle: Icons;
    static swap_vert: Icons;
    static swap_vertical_circle: Icons;
    static switch_camera: Icons;
    static switch_video: Icons;
    static sync: Icons;
    static sync_disabled: Icons;
    static sync_problem: Icons;
    static system_update: Icons;
    static system_update_alt: Icons;
    static tab: Icons;
    static tab_unselected: Icons;
    static table_chart: Icons;
    static tablet: Icons;
    static tablet_android: Icons;
    static tablet_mac: Icons;
    static tag_faces: Icons;
    static tap_and_play: Icons;
    static terrain: Icons;
    static text_fields: Icons;
    static text_format: Icons;
    static text_rotate_up: Icons;
    static text_rotate_vertical: Icons;
    static text_rotation_angledown: Icons;
    static text_rotation_angleup: Icons;
    static text_rotation_down: Icons;
    static text_rotation_none: Icons;
    static textsms: Icons;
    static texture: Icons;
    static theaters: Icons;
    static thumb_down: Icons;
    static thumb_up: Icons;
    static thumbs_up_down: Icons;
    static time_to_leave: Icons;
    static timelapse: Icons;
    static timeline: Icons;
    static timer: Icons;
    static timer_10: Icons;
    static timer_3: Icons;
    static timer_off: Icons;
    static title: Icons;
    static toc: Icons;
    static today: Icons;
    static toll: Icons;
    static tonality: Icons;
    static touch_app: Icons;
    static toys: Icons;
    static track_changes: Icons;
    static traffic: Icons;
    static train: Icons;
    static tram: Icons;
    static transfer_within_a_station: Icons;
    static transform: Icons;
    static transit_enterexit: Icons;
    static translate: Icons;
    static trending_down: Icons;
    static trending_flat: Icons;
    static trending_up: Icons;
    static trip_origin: Icons;
    static tune: Icons;
    static turned_in: Icons;
    static turned_in_not: Icons;
    static tv: Icons;
    static unarchive: Icons;
    static undo: Icons;
    static unfold_less: Icons;
    static unfold_more: Icons;
    static update: Icons;
    static usb: Icons;
    static verified_user: Icons;
    static vertical_align_bottom: Icons;
    static vertical_align_center: Icons;
    static vertical_align_top: Icons;
    static vibration: Icons;
    static video_call: Icons;
    static video_label: Icons;
    static video_library: Icons;
    static videocam: Icons;
    static videocam_off: Icons;
    static videogame_asset: Icons;
    static view_agenda: Icons;
    static view_array: Icons;
    static view_carousel: Icons;
    static view_column: Icons;
    static view_comfy: Icons;
    static view_compact: Icons;
    static view_day: Icons;
    static view_headline: Icons;
    static view_list: Icons;
    static view_module: Icons;
    static view_quilt: Icons;
    static view_stream: Icons;
    static view_week: Icons;
    static vignette: Icons;
    static visibility: Icons;
    static visibility_off: Icons;
    static voice_chat: Icons;
    static voicemail: Icons;
    static volume_down: Icons;
    static volume_mute: Icons;
    static volume_off: Icons;
    static volume_up: Icons;
    static vpn_key: Icons;
    static vpn_lock: Icons;
    static wallpaper: Icons;
    static warning: Icons;
    static watch: Icons;
    static watch_later: Icons;
    static wb_auto: Icons;
    static wb_cloudy: Icons;
    static wb_incandescent: Icons;
    static wb_iridescent: Icons;
    static wb_sunny: Icons;
    static wc: Icons;
    static web: Icons;
    static web_asset: Icons;
    static weekend: Icons;
    static whatshot: Icons;
    static widgets: Icons;
    static wifi: Icons;
    static wifi_lock: Icons;
    static wifi_tethering: Icons;
    static work: Icons;
    static wrap_text: Icons;
    static youtube_searched_for: Icons;
    static zoom_in: Icons;
    static zoom_out: Icons;
    static zoom_out_map: Icons;
}
export declare class CupertinoIcons extends IconData {
    constructor(icon: string);
    static left_chevron: CupertinoIcons;
    static right_chevron: CupertinoIcons;
    static share: CupertinoIcons;
    static share_solid: CupertinoIcons;
    static book: CupertinoIcons;
    static book_solid: CupertinoIcons;
    static bookmark: CupertinoIcons;
    static bookmark_solid: CupertinoIcons;
    static info: CupertinoIcons;
    static reply: CupertinoIcons;
    static conversation_bubble: CupertinoIcons;
    static profile_circled: CupertinoIcons;
    static plus_circled: CupertinoIcons;
    static minus_circled: CupertinoIcons;
    static flag: CupertinoIcons;
    static search: CupertinoIcons;
    static check_mark: CupertinoIcons;
    static check_mark_circled: CupertinoIcons;
    static check_mark_circled_solid: CupertinoIcons;
    static circle: CupertinoIcons;
    static circle_filled: CupertinoIcons;
    static back: CupertinoIcons;
    static forward: CupertinoIcons;
    static home: CupertinoIcons;
    static shopping_cart: CupertinoIcons;
    static ellipsis: CupertinoIcons;
    static phone: CupertinoIcons;
    static phone_solid: CupertinoIcons;
    static down_arrow: CupertinoIcons;
    static up_arrow: CupertinoIcons;
    static battery_charging: CupertinoIcons;
    static battery_empty: CupertinoIcons;
    static battery_full: CupertinoIcons;
    static battery_75_percent: CupertinoIcons;
    static battery_25_percent: CupertinoIcons;
    static bluetooth: CupertinoIcons;
    static restart: CupertinoIcons;
    static reply_all: CupertinoIcons;
    static reply_thick_solid: CupertinoIcons;
    static share_up: CupertinoIcons;
    static shuffle: CupertinoIcons;
    static shuffle_medium: CupertinoIcons;
    static shuffle_thick: CupertinoIcons;
    static photo_camera: CupertinoIcons;
    static photo_camera_solid: CupertinoIcons;
    static video_camera: CupertinoIcons;
    static video_camera_solid: CupertinoIcons;
    static switch_camera: CupertinoIcons;
    static switch_camera_solid: CupertinoIcons;
    static collections: CupertinoIcons;
    static collections_solid: CupertinoIcons;
    static folder: CupertinoIcons;
    static folder_solid: CupertinoIcons;
    static folder_open: CupertinoIcons;
    static delete: CupertinoIcons;
    static delete_solid: CupertinoIcons;
    static delete_simple: CupertinoIcons;
    static pen: CupertinoIcons;
    static pencil: CupertinoIcons;
    static create: CupertinoIcons;
    static create_solid: CupertinoIcons;
    static refresh: CupertinoIcons;
    static refresh_circled: CupertinoIcons;
    static refresh_circled_solid: CupertinoIcons;
    static refresh_thin: CupertinoIcons;
    static refresh_thick: CupertinoIcons;
    static refresh_bold: CupertinoIcons;
    static clear_thick: CupertinoIcons;
    static clear_thick_circled: CupertinoIcons;
    static clear: CupertinoIcons;
    static clear_circled: CupertinoIcons;
    static clear_circled_solid: CupertinoIcons;
    static add: CupertinoIcons;
    static add_circled: CupertinoIcons;
    static add_circled_solid: CupertinoIcons;
    static gear: CupertinoIcons;
    static gear_solid: CupertinoIcons;
    static gear_big: CupertinoIcons;
    static settings: CupertinoIcons;
    static settings_solid: CupertinoIcons;
    static music_note: CupertinoIcons;
    static double_music_note: CupertinoIcons;
    static play_arrow: CupertinoIcons;
    static play_arrow_solid: CupertinoIcons;
    static pause: CupertinoIcons;
    static pause_solid: CupertinoIcons;
    static loop: CupertinoIcons;
    static loop_thick: CupertinoIcons;
    static volume_down: CupertinoIcons;
    static volume_mute: CupertinoIcons;
    static volume_off: CupertinoIcons;
    static volume_up: CupertinoIcons;
    static fullscreen: CupertinoIcons;
    static fullscreen_exit: CupertinoIcons;
    static mic_off: CupertinoIcons;
    static mic: CupertinoIcons;
    static mic_solid: CupertinoIcons;
    static clock: CupertinoIcons;
    static clock_solid: CupertinoIcons;
    static time: CupertinoIcons;
    static time_solid: CupertinoIcons;
    static padlock: CupertinoIcons;
    static padlock_solid: CupertinoIcons;
    static eye: CupertinoIcons;
    static eye_solid: CupertinoIcons;
    static person: CupertinoIcons;
    static person_solid: CupertinoIcons;
    static person_add: CupertinoIcons;
    static person_add_solid: CupertinoIcons;
    static group: CupertinoIcons;
    static group_solid: CupertinoIcons;
    static mail: CupertinoIcons;
    static mail_solid: CupertinoIcons;
    static location: CupertinoIcons;
    static location_solid: CupertinoIcons;
    static tag: CupertinoIcons;
    static tag_solid: CupertinoIcons;
    static tags: CupertinoIcons;
    static tags_solid: CupertinoIcons;
    static bus: CupertinoIcons;
    static car: CupertinoIcons;
    static car_detailed: CupertinoIcons;
    static train_style_one: CupertinoIcons;
    static train_style_two: CupertinoIcons;
    static paw: CupertinoIcons;
    static paw_solid: CupertinoIcons;
    static game_controller: CupertinoIcons;
    static game_controller_solid: CupertinoIcons;
    static lab_flask: CupertinoIcons;
    static lab_flask_solid: CupertinoIcons;
    static heart: CupertinoIcons;
    static heart_solid: CupertinoIcons;
    static bell: CupertinoIcons;
    static bell_solid: CupertinoIcons;
    static news: CupertinoIcons;
    static news_solid: CupertinoIcons;
    static brightness: CupertinoIcons;
    static brightness_solid: CupertinoIcons;
}
export declare class AbsorbPointer extends Widget {
    key?: Key;
    child?: Widget;
    absorbing?: boolean;
    ignoringSemantics?: boolean;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        absorbing?: boolean;
        ignoringSemantics?: boolean;
    });
}
export declare class ActionChip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    onPressed?: OnCallback;
    pressElevation?: number;
    tooltip?: string;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    focusNode?: FocusNode;
    autofocus?: boolean;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    constructor(config: {
        key?: Key;
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        onPressed: OnCallback;
        pressElevation?: number;
        tooltip?: string;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        visualDensity?: VisualDensity;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        shadowColor?: Color;
    });
}
export declare class AnimationController extends Widget {
    value?: number;
    duration?: Duration;
    debugLabel?: string;
    lowerBound?: number;
    upperBound?: number;
    animationBehavior?: AnimationBehavior;
    vsync?: any;
    dispose(): void;
}
export declare class Animation extends Widget {
    tween?: Tween;
    controller?: AnimationController;
    statusListenerList?: any;
    listenerList?: any;
    statusListenerCallback(status: any): void;
    listenerCallback(status: any): void;
    value(): string;
    addListener(callback: any): void;
    removeListener(callback: any): void;
    addStatusListener(callback: any): void;
    removeStatusListener(callback: any): void;
}
export declare class AppBar extends Widget {
    key?: Key;
    leading?: Widget;
    automaticallyImplyLeading?: boolean;
    title?: Widget;
    actions?: Array<Widget>;
    flexibleSpace?: Widget;
    bottom?: Widget;
    elevation?: number;
    shadowColor?: Color;
    shape?: ShapeBorder;
    backgroundColor?: Color;
    brightness?: Brightness;
    primary?: boolean;
    centerTitle?: boolean;
    excludeHeaderSemantics?: boolean;
    titleSpacing?: number;
    toolbarOpacity?: number;
    bottomOpacity?: number;
    toolbarHeight?: number;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        automaticallyImplyLeading?: boolean;
        title?: Widget;
        actions?: Array<Widget>;
        flexibleSpace?: Widget;
        bottom?: Widget;
        elevation?: number;
        shadowColor?: Color;
        shape?: ShapeBorder;
        backgroundColor?: Color;
        brightness?: Brightness;
        primary?: boolean;
        centerTitle?: boolean;
        excludeHeaderSemantics?: boolean;
        titleSpacing?: number;
        toolbarOpacity?: number;
        bottomOpacity?: number;
        toolbarHeight?: number;
    });
}
export declare class Align extends Widget {
    key?: Key;
    child?: Widget;
    alignment?: Alignment;
    widthFactor?: number;
    heightFactor?: number;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        widthFactor?: number;
        heightFactor?: number;
    });
}
export declare class AspectRatio extends Widget {
    child?: Widget;
    aspectRatio?: number;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        aspectRatio?: number;
    });
}
export declare class AnnotatedRegion extends Widget {
    key?: Key;
    child?: Widget;
    value?: number;
    sized?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        value?: number;
        sized?: boolean;
    });
}
export declare class AnimatedCrossFade extends Widget {
    key?: Key;
    firstChild?: Widget;
    secondChild?: Widget;
    firstCurve?: Curve;
    secondCurve?: Curve;
    sizeCurve?: Curve;
    alignment?: Alignment;
    crossFadeState?: CrossFadeState;
    duration?: Duration;
    reverseDuration?: Duration;
    layoutBuilder?: any;
    constructor(config: {
        key?: Key;
        firstChild?: Widget;
        secondChild?: Widget;
        firstCurve?: Curve;
        secondCurve?: Curve;
        sizeCurve?: Curve;
        alignment?: Alignment;
        crossFadeState?: CrossFadeState;
        duration?: Duration;
        reverseDuration?: Duration;
        layoutBuilder?: any;
    });
}
export declare class AnimatedOpacity extends Widget {
    key?: Key;
    child?: Widget;
    opacity?: number;
    curve?: Curve;
    duration?: Duration;
    onEnd?: OnCallback;
    alwaysIncludeSemantics?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        opacity?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: OnCallback;
        alwaysIncludeSemantics?: boolean;
    });
}
export declare class AnimatedBuilder extends Widget {
    key?: Key;
    animation?: Animation;
    builder?: any;
    child?: Widget;
    widget?: Widget;
    constructor(config: {
        key?: Key;
        animation?: Animation;
        builder?: any;
        child?: Widget;
        widget?: Widget;
    });
}
export declare class AnimatedContainer extends Widget {
    key?: Key;
    alignment?: Alignment;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    child?: Widget;
    color?: Color;
    decoration?: BoxDecoration;
    foregroundDecoration?: BoxDecoration;
    width?: number;
    height?: number;
    constraints?: BoxConstraints;
    transform?: Matrix4;
    curve?: Curve;
    duration?: Duration;
    onEnd?: OnCallback;
    constructor(config: {
        key?: Key;
        alignment?: Alignment;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        child?: Widget;
        color?: Color;
        decoration?: BoxDecoration;
        foregroundDecoration?: BoxDecoration;
        width?: number;
        height?: number;
        constraints?: BoxConstraints;
        transform?: Matrix4;
        curve?: Curve;
        duration?: Duration;
        onEnd?: OnCallback;
    });
}
export declare class AnimatedPhysicalModel extends Widget {
    key?: Key;
    child?: Widget;
    shape?: any;
    clipBehavior?: Clip;
    borderRadius?: BorderRadius;
    elevation?: number;
    color?: Color;
    animateColor?: boolean;
    shadowColor?: Color;
    animateShadowColor?: boolean;
    curve?: Curve;
    duration?: Duration;
    onEnd?: OnCallback;
    constructor(config: {
        key?: Key;
        child?: Widget;
        shape?: any;
        clipBehavior?: Clip;
        borderRadius?: BorderRadius;
        elevation?: number;
        color?: Color;
        animateColor?: boolean;
        shadowColor?: Color;
        animateShadowColor?: boolean;
        curve?: Curve;
        duration?: Duration;
        onEnd?: OnCallback;
    });
}
export declare class AnimatedPositioned extends Widget {
    key?: Key;
    child?: Widget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    curve?: Curve;
    duration?: Duration;
    onEnd?: OnCallback;
    constructor(config: {
        key?: Key;
        child?: Widget;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
        width?: number;
        height?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: OnCallback;
    });
}
export declare class AnimatedSize extends Widget {
    key?: Key;
    child?: Widget;
    alignment?: Alignment;
    curve?: Curve;
    duration?: Duration;
    reverseDuration?: Duration;
    vsync?: any;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        curve?: Curve;
        duration?: Duration;
        reverseDuration?: Duration;
        vsync?: any;
    });
}
export declare class AnimatedDefaultTextStyle extends Widget {
    key?: Key;
    child?: Widget;
    style?: TextStyle;
    textAlign?: TextAlign;
    softWrap?: boolean;
    overflow?: TextOverflow;
    maxLines?: number;
    curve?: Curve;
    duration?: Duration;
    onEnd?: OnCallback;
    constructor(config: {
        key?: Key;
        child?: Widget;
        style?: TextStyle;
        textAlign?: TextAlign;
        softWrap?: boolean;
        overflow?: TextOverflow;
        maxLines?: number;
        curve?: Curve;
        duration?: Duration;
        onEnd?: OnCallback;
    });
}
export declare class BottomNavigationBarItem extends Widget {
    icon?: Widget;
    title?: Widget;
    label?: string;
    activeIcon?: Widget;
    backgroundColor?: Color;
    constructor(config: {
        icon: Widget;
        title?: Widget;
        activeIcon?: Widget;
        label?: string;
        backgroundColor?: Color;
    });
}
export declare class Banner extends Widget {
    key?: Key;
    child?: Widget;
    message?: string;
    textDirection?: TextDirection;
    location?: BannerLocation;
    layoutDirection?: TextDirection;
    color?: Color;
    textStyle?: TextStyle;
    constructor(config: {
        key?: Key;
        child?: Widget;
        message: string;
        textDirection?: TextDirection;
        location: BannerLocation;
        layoutDirection?: TextDirection;
        color?: Color;
        textStyle?: TextStyle;
    });
}
export declare class Baseline extends Widget {
    child?: Widget;
    baseline?: number;
    baselineType?: TextBaseline;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        baseline: number;
        baselineType: TextBaseline;
    });
}
export declare class ButtonBar extends Widget {
    key?: Key;
    children?: Array<Widget>;
    alignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    buttonTextTheme?: ButtonTextTheme;
    buttonHeight?: number;
    buttonMinWidth?: number;
    buttonPadding?: EdgeInsets;
    buttonAlignedDropdown?: boolean;
    layoutBehavior?: ButtonBarLayoutBehavior;
    overflowButtonSpacing?: number;
    overflowDirection?: VerticalDirection;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        alignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        buttonTextTheme?: ButtonTextTheme;
        buttonHeight?: number;
        buttonMinWidth?: number;
        buttonPadding?: EdgeInsets;
        buttonAlignedDropdown?: boolean;
        layoutBehavior?: ButtonBarLayoutBehavior;
        overflowButtonSpacing?: number;
        overflowDirection?: VerticalDirection;
    });
}
export declare class BlockSemantics extends Widget {
    child?: Widget;
    blocking?: boolean;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        blocking?: boolean;
    });
}
export declare class BottomAppBar extends Widget {
    child?: Widget;
    color?: Color;
    elevation?: number;
    shape?: NotchedShape;
    clipBehavior?: Clip;
    notchMargin?: number;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        color?: Color;
        elevation?: number;
        shape?: NotchedShape;
        clipBehavior?: Clip;
        notchMargin?: number;
    });
}
export declare class BottomNavigationBar extends Widget {
    key?: Key;
    items?: Array<BottomNavigationBarItem>;
    onTap?: OnCallbackNumber;
    currentIndex?: number;
    elevation?: number;
    type?: BottomNavigationBarType;
    fixedColor?: Color;
    backgroundColor?: Color;
    iconSize?: number;
    selectedItemColor?: Color;
    unselectedItemColor?: Color;
    selectedFontSize?: number;
    unselectedFontSize?: number;
    selectedLabelStyle?: TextStyle;
    unselectedLabelStyle?: TextStyle;
    showSelectedLabels?: boolean;
    showUnselectedLabels?: boolean;
    constructor(config: {
        key?: Key;
        items: Array<BottomNavigationBarItem>;
        onTap?: OnCallbackNumber;
        currentIndex?: number;
        elevation?: number;
        type?: BottomNavigationBarType;
        fixedColor?: Color;
        backgroundColor?: Color;
        iconSize?: number;
        selectedItemColor?: Color;
        unselectedItemColor?: Color;
        selectedFontSize?: number;
        unselectedFontSize?: number;
        selectedLabelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        showSelectedLabels?: boolean;
        showUnselectedLabels?: boolean;
    });
}
export declare class BackButtonIcon extends Widget {
    key?: Key;
    constructor(config: {
        key?: Key;
    });
}
export declare class BackButton extends Widget {
    key?: Key;
    onPressed?: OnCallback;
    constructor(config: {
        key?: Key;
        onPressed?: OnCallback;
    });
}
export declare class Builder extends Widget {
    builder?: any;
    key?: Key;
    child?: Builder;
    preBuild(jsWidgetHelper?: any, buildContext?: BuildContext): void;
    constructor(builder?: any, key?: Key);
}
export declare class ColorFiltered extends Widget {
    key?: Key;
    colorFilter?: ColorFilter;
    child?: Color;
    constructor(config: {
        key?: Key;
        colorFilter: ColorFilter;
        child?: Color;
    });
}
export declare class CloseButton extends Widget {
    key?: Key;
    onPressed?: OnCallback;
    color?: Color;
    constructor(config: {
        key?: Key;
        onPressed?: OnCallback;
        color?: Color;
    });
}
export declare class Container extends Widget {
    child?: Widget;
    alignment?: Alignment;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    color?: Color;
    width?: number;
    height?: number;
    decoration?: BoxDecoration;
    foregroundDecoration?: BoxDecoration;
    constraints?: BoxConstraints;
    transform?: Matrix4;
    key?: Key;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        color?: Color;
        width?: number;
        height?: number;
        decoration?: BoxDecoration;
        foregroundDecoration?: BoxDecoration;
        constraints?: BoxConstraints;
        transform?: Matrix4;
        clipBehavior?: Clip;
    });
}
export declare class Center extends Widget {
    child?: Widget;
    widthFactor?: number;
    heightFactor?: number;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        widthFactor?: number;
        heightFactor?: number;
    });
}
export declare class ChoiceChip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    selected?: boolean;
    onSelected?: OnCallbackBoolean;
    pressElevation?: number;
    disabledColor?: Color;
    selectedColor?: Color;
    tooltip?: string;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    focusNode?: FocusNode;
    autofocus?: boolean;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    selectedShadowColor?: Color;
    avatarBorder?: ShapeBorder;
    constructor(config: {
        key?: Key;
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        selected?: boolean;
        onSelected?: OnCallbackBoolean;
        pressElevation?: number;
        disabledColor?: Color;
        selectedColor?: Color;
        tooltip?: string;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        visualDensity?: VisualDensity;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        avatarBorder?: ShapeBorder;
    });
}
export declare class ColoredBox extends Widget {
    key?: Key;
    child?: Widget;
    color?: Color;
    constructor(config: {
        key?: Key;
        child?: Widget;
        color: Color;
    });
}
export declare class CircleAvatar extends Widget {
    key?: Key;
    child?: Widget;
    backgroundColor?: Color;
    foregroundColor?: Color;
    backgroundImage?: any;
    radius?: number;
    minRadius?: number;
    maxRadius?: number;
    constructor(config: {
        child?: Widget;
        backgroundColor?: Color;
        foregroundColor?: Color;
        radius?: number;
        backgroundImage?: any;
        minRadius?: number;
        maxRadius?: number;
        key?: Key;
    });
}
export declare class Chip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    deleteIcon?: Widget;
    onDeleted?: OnCallback;
    deleteIconColor?: Color;
    deleteButtonTooltipMessage?: string;
    clipBehavior?: Clip;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    constructor(config: {
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        deleteIcon?: Widget;
        onDeleted?: OnCallback;
        deleteIconColor?: Color;
        deleteButtonTooltipMessage?: string;
        clipBehavior?: Clip;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        key?: Key;
        shadowColor?: Color;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
    });
}
export declare class CheckedModeBanner extends Widget {
    key?: Key;
    child?: Widget;
    constructor(config: {
        key?: Key;
        child: Widget;
    });
}
export declare class CheckboxListTile extends Widget {
    key?: Key;
    value?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    checkColor?: Color;
    title?: Widget;
    subtitle?: Widget;
    isThreeLine?: boolean;
    dense?: boolean;
    contentPadding?: EdgeInsets;
    secondary?: Widget;
    selected?: boolean;
    autofocus?: boolean;
    controlAffinity?: ListTileControlAffinity;
    tristate?: boolean;
    constructor(config: {
        key?: Key;
        value: boolean;
        onChanged: OnCallbackBoolean;
        activeColor?: Color;
        checkColor?: Color;
        title?: Widget;
        subtitle?: Widget;
        isThreeLine?: boolean;
        dense?: boolean;
        contentPadding?: EdgeInsets;
        secondary?: Widget;
        selected?: boolean;
        autofocus?: boolean;
        controlAffinity?: ListTileControlAffinity;
        tristate?: boolean;
    });
}
export declare class Checkbox extends Widget {
    key?: Key;
    value?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    checkColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    materialTapTargetSize?: MaterialTapTargetSize;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    tristate?: boolean;
    constructor(config: {
        key?: Key;
        value: boolean;
        onChanged: OnCallbackBoolean;
        activeColor?: Color;
        checkColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        materialTapTargetSize?: MaterialTapTargetSize;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
        tristate?: boolean;
    });
}
export declare class CheckboxEx extends Widget {
    key?: Key;
    value?: boolean;
    tristate?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    width?: number;
    checkColor?: Color;
    isCircle?: boolean;
    strokeWidth?: number;
    constructor(config: {
        key?: Key;
        value: boolean;
        tristate?: boolean;
        onChanged: OnCallbackBoolean;
        activeColor?: Color;
        width?: number;
        checkColor?: Color;
        isCircle?: boolean;
        strokeWidth?: number;
    });
}
export declare class ClipRect extends Widget {
    key?: Key;
    clipBehavior?: Clip;
    child?: Widget;
    constructor(config: {
        child?: Widget;
        clipBehavior?: Clip;
        key?: Key;
    });
}
export declare class ClipOval extends Widget {
    key?: Key;
    clipBehavior?: Clip;
    child?: Widget;
    constructor(config: {
        child?: Widget;
        clipBehavior?: Clip;
        key?: Key;
    });
}
export declare class ClipRRect extends Widget {
    key?: Key;
    borderRadius?: BorderRadius;
    clipBehavior?: Clip;
    child?: Widget;
    constructor(config: {
        child?: Widget;
        borderRadius?: BorderRadius;
        clipBehavior?: Clip;
        key?: Key;
    });
}
export declare class ConstrainedBox extends Widget {
    child?: Widget;
    constraints?: BoxConstraints;
    key?: Key;
    constructor(config: {
        child?: Widget;
        constraints: BoxConstraints;
        key?: Key;
    });
}
export declare class Column extends Widget {
    children?: Array<Widget>;
    mainAxisAlignment?: MainAxisAlignment;
    crossAxisAlignment?: CrossAxisAlignment;
    mainAxisSize?: MainAxisSize;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        mainAxisSize?: MainAxisSize;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        key?: Key;
    });
}
export declare class CustomMultiChildLayout extends Widget {
    children?: Array<Widget>;
    delegate?: any;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        delegate?: any;
        key?: Key;
    });
}
export declare class CustomScrollView extends Widget {
    key?: Key;
    slivers?: Array<Widget>;
    controller?: ScrollController;
    scrollDirection?: Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: ScrollPhysics;
    shrinkWrap?: boolean;
    center?: Key;
    anchor?: number;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: DragStartBehavior;
    restorationId?: string;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        slivers?: Array<Widget>;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        center?: Key;
        anchor?: number;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        restorationId?: string;
        clipBehavior?: Clip;
    });
}
export declare class Card extends Widget {
    key?: Key;
    child?: Widget;
    margin?: EdgeInsets;
    color?: Color;
    shadowColor?: Color;
    elevation?: number;
    shape?: any;
    clipBehavior?: Clip;
    semanticContainer?: boolean;
    borderOnForeground?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        margin?: EdgeInsets;
        color?: Color;
        shadowColor?: Color;
        elevation?: number;
        shape?: any;
        clipBehavior?: Clip;
        semanticContainer?: boolean;
        borderOnForeground?: boolean;
    });
}
export declare class Divider extends Widget {
    key?: Key;
    height?: number;
    thickness?: number;
    indent?: number;
    endIndent?: number;
    color?: Color;
    constructor(config: {
        key?: Key;
        height?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
        color?: Color;
    });
}
export declare class DrawerHeader extends Widget {
    key?: Key;
    child?: Widget;
    decoration?: BoxDecoration;
    margin?: EdgeInsets;
    padding?: EdgeInsets;
    duration?: Duration;
    curve?: Curve;
    constructor(config: {
        key?: Key;
        child: Widget;
        decoration?: BoxDecoration;
        margin?: EdgeInsets;
        padding?: EdgeInsets;
        duration?: Duration;
        curve?: Curve;
    });
}
export declare class Drawer extends Widget {
    key?: Key;
    child?: Widget;
    elevation?: number;
    semanticLabel?: string;
    constructor(config: {
        key?: Key;
        child?: Widget;
        elevation?: number;
        semanticLabel?: string;
    });
}
export declare class Directionality extends Widget {
    key?: Key;
    child?: Widget;
    textDirection?: TextDirection;
    constructor(config: {
        key?: Key;
        child: Widget;
        textDirection: TextDirection;
    });
}
export declare class DropdownMenuItem extends Widget {
    child?: Widget;
    value?: number;
    key?: Key;
    onTap?: OnCallback;
    constructor(config: {
        child: Widget;
        value?: number;
        key?: Key;
        onTap?: OnCallback;
    });
}
export declare class DecoratedBox extends Widget {
    child?: Widget;
    decoration?: BoxDecoration;
    position?: DecorationPosition;
    key?: Key;
    constructor(config: {
        child?: Widget;
        decoration: BoxDecoration;
        position?: DecorationPosition;
        key?: Key;
    });
}
export declare class DropdownButton extends Widget {
    items?: Array<DropdownMenuItem>;
    onChanged?: any;
    value?: any;
    hint?: Widget;
    disabledHint?: Widget;
    elevation?: number;
    style?: TextStyle;
    iconSize?: number;
    isDense?: boolean;
    isExpanded?: boolean;
    key?: Key;
    constructor(config: {
        items?: Array<DropdownMenuItem>;
        onChanged?: any;
        value?: any;
        hint?: Widget;
        disabledHint?: Widget;
        elevation?: number;
        style?: TextStyle;
        iconSize?: number;
        isDense?: boolean;
        isExpanded?: boolean;
        key?: Key;
    });
}
export declare class DefaultTabController extends Widget {
    key?: Key;
    child?: Widget;
    length?: number;
    initialIndex?: number;
    constructor(config: {
        key?: Key;
        child: Widget;
        length: number;
        initialIndex?: number;
    });
}
export declare class DecorationImage extends Widget {
    image?: ImageProvider;
    alignment?: Alignment;
    colorFilter?: ColorFilter;
    fit?: BoxFit;
    centerSlice?: Rect;
    repeat?: ImageRepeat;
    matchTextDirection?: boolean;
    scale?: number;
    constructor(config: {
        image?: ImageProvider;
        alignment?: Alignment;
        colorFilter?: ColorFilter;
        fit?: BoxFit;
        centerSlice?: Rect;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        scale?: number;
    });
}
export declare class DefaultTextStyle extends Widget {
    child?: Widget;
    style?: TextStyle;
    textAlign?: TextAlign;
    softWrap?: boolean;
    overflow?: TextOverflow;
    maxLines?: number;
    textWidthBasis?: TextWidthBasis;
    key?: Key;
    constructor(config: {
        child?: Widget;
        style?: TextStyle;
        textAlign?: TextAlign;
        softWrap?: boolean;
        overflow?: TextOverflow;
        maxLines?: number;
        textWidthBasis?: TextWidthBasis;
        key?: Key;
    });
}
export declare class DecoratedBoxTransition extends Widget {
    key?: Key;
    decoration?: any;
    position?: DecorationPosition;
    child?: Widget;
    constructor(config: {
        key?: Key;
        decoration?: any;
        position?: DecorationPosition;
        child?: Widget;
    });
}
export declare class ExcludeSemantics extends Widget {
    child?: Widget;
    excluding?: boolean;
    key?: Key;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        excluding?: boolean;
    });
}
export declare class Expanded extends Widget {
    child?: Widget;
    flex?: number;
    key?: Key;
    constructor(config: {
        child: Widget;
        flex?: number;
        key?: Key;
    });
}
export declare class ExpandIcon extends Widget {
    key?: Key;
    isExpanded?: boolean;
    size?: number;
    onPressed?: OnCallbackBoolean;
    padding?: EdgeInsets;
    color?: Color;
    disabledColor?: Color;
    expandedColor?: Color;
    constructor(config: {
        key?: Key;
        isExpanded?: boolean;
        size?: number;
        onPressed: OnCallbackBoolean;
        padding?: EdgeInsets;
        color?: Color;
        disabledColor?: Color;
        expandedColor?: Color;
    });
}
export declare class ExpansionTile extends Widget {
    key?: Key;
    leading?: Widget;
    title?: Widget;
    subtitle?: Widget;
    backgroundColor?: Color;
    onExpansionChanged?: OnCallbackBoolean;
    children?: Array<Widget>;
    trailing?: Widget;
    initiallyExpanded?: boolean;
    maintainState?: boolean;
    tilePadding?: EdgeInsets;
    expandedCrossAxisAlignment?: CrossAxisAlignment;
    expandedAlignment?: Alignment;
    childrenPadding?: EdgeInsets;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        title?: Widget;
        subtitle?: Widget;
        backgroundColor?: Color;
        onExpansionChanged?: OnCallbackBoolean;
        children?: Array<Widget>;
        trailing?: Widget;
        initiallyExpanded?: boolean;
        maintainState?: boolean;
        tilePadding?: EdgeInsets;
        expandedCrossAxisAlignment?: CrossAxisAlignment;
        expandedAlignment?: Alignment;
        childrenPadding?: EdgeInsets;
    });
}
export declare class Flexible extends Widget {
    key?: Key;
    child?: Widget;
    flex?: number;
    fit?: FlexFit;
    constructor(config: {
        key?: Key;
        child: Widget;
        flex?: number;
        fit?: FlexFit;
    });
}
export declare class FilterChip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    selected?: boolean;
    onSelected?: OnCallbackBoolean;
    pressElevation?: number;
    disabledColor?: Color;
    selectedColor?: Color;
    tooltip?: string;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    focusNode?: FocusNode;
    autofocus?: boolean;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    selectedShadowColor?: Color;
    showCheckmark?: boolean;
    checkmarkColor?: Color;
    avatarBorder?: ShapeBorder;
    constructor(config: {
        key?: Key;
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        selected?: boolean;
        onSelected: OnCallbackBoolean;
        pressElevation?: number;
        disabledColor?: Color;
        selectedColor?: Color;
        tooltip?: string;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        visualDensity?: VisualDensity;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        showCheckmark?: boolean;
        checkmarkColor?: Color;
        avatarBorder?: ShapeBorder;
    });
}
export declare class FittedBox extends Widget {
    child?: Widget;
    alignment?: Alignment;
    fit?: BoxFit;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        fit?: BoxFit;
    });
}
export declare class FractionallySizedBox extends Widget {
    child?: Widget;
    alignment?: Alignment;
    widthFactor?: number;
    heightFactor?: number;
    key?: Key;
    constructor(config: {
        child?: Widget;
        alignment?: Alignment;
        widthFactor?: number;
        heightFactor?: number;
        key?: Key;
    });
}
export declare class Flex extends Widget {
    key?: Key;
    direction?: Axis;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
    clipBehavior?: Clip;
    children?: Array<Widget>;
    constructor(config: {
        key?: Key;
        direction: Axis;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        clipBehavior?: Clip;
        children?: Array<Widget>;
    });
}
export declare class Flow extends Widget {
    children?: Array<Widget>;
    delegate?: any;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        delegate?: any;
        key?: Key;
    });
}
export declare class FlatButton extends Widget {
    child?: Widget;
    onPressed?: OnCallback;
    padding?: EdgeInsets;
    onHighlightChanged?: OnCallbackBoolean;
    textTheme?: ButtonTextTheme;
    textColor?: Color;
    disabledTextColor?: Color;
    color?: Color;
    disabledColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorBrightness?: Brightness;
    shape?: any;
    clipBehavior?: Clip;
    materialTapTargetSize?: MaterialTapTargetSize;
    key?: Key;
    onLongPress?: OnCallback;
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    icon?: Widget;
    label?: Widget;
    constructor(config?: {
        child: Widget;
        onPressed: OnCallback;
        padding?: EdgeInsets;
        onHighlightChanged?: OnCallbackBoolean;
        textTheme?: ButtonTextTheme;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        key?: Key;
        onLongPress?: OnCallback;
        focusColor?: Color;
        hoverColor?: Color;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
    });
    static icon(config: {
        child: Widget;
        onPressed: OnCallback;
        padding?: EdgeInsets;
        onHighlightChanged?: OnCallbackBoolean;
        textTheme?: ButtonTextTheme;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        key?: Key;
        onLongPress?: OnCallback;
        focusColor?: Color;
        hoverColor?: Color;
        autofocus?: boolean;
        icon?: Widget;
        label?: Widget;
    }): FlatButton;
}
export declare class FloatingActionButton extends Widget {
    key?: Key;
    child?: Widget;
    tooltip?: string;
    foregroundColor?: Color;
    backgroundColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    splashColor?: Color;
    elevation?: number;
    focusElevation?: number;
    hoverElevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    onPressed?: OnCallback;
    mini?: boolean;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    autofocus?: boolean;
    materialTapTargetSize?: MaterialTapTargetSize;
    isExtended?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        tooltip?: string;
        foregroundColor?: Color;
        backgroundColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        onPressed: OnCallback;
        mini?: boolean;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        autofocus?: boolean;
        materialTapTargetSize?: MaterialTapTargetSize;
        isExtended?: boolean;
    });
}
export declare class FlexibleSpaceBar extends Widget {
    key?: Key;
    title?: Widget;
    background?: Widget;
    centerTitle?: boolean;
    titlePadding?: EdgeInsets;
    collapseMode?: CollapseMode;
    constructor(config: {
        key?: Key;
        title?: Widget;
        background?: Widget;
        centerTitle?: boolean;
        titlePadding?: EdgeInsets;
        collapseMode?: CollapseMode;
    });
}
export declare class FlexibleSpaceBarSettings extends Widget {
    key?: Key;
    child?: Widget;
    toolbarOpacity?: number;
    minExtent?: number;
    maxExtent?: number;
    currentExtent?: number;
    constructor(config: {
        key?: Key;
        child: Widget;
        toolbarOpacity: number;
        minExtent: number;
        maxExtent: number;
        currentExtent: number;
    });
}
export declare class FlutterLogo extends Widget {
    key?: Key;
    size?: number;
    textColor?: Color;
    style?: FlutterLogoStyle;
    duration?: Duration;
    curve?: Curve;
    constructor(config: {
        key?: Key;
        size?: number;
        textColor?: Color;
        style?: FlutterLogoStyle;
        duration?: Duration;
        curve?: Curve;
    });
}
export declare class FractionalTranslation extends Widget {
    key?: Key;
    translation?: Offset;
    transformHitTests?: boolean;
    child?: Widget;
    constructor(config: {
        translation: Offset;
        key?: Key;
        transformHitTests?: boolean;
        child?: Widget;
    });
}
export declare class GestureDetector extends Widget {
    key?: Key;
    child?: Widget;
    onTap?: OnCallback;
    onTapDown?: OnTapDown;
    onTapUp?: OnTapUp;
    onTapCancel?: OnCallback;
    onDoubleTap?: OnCallback;
    onLongPress?: OnCallback;
    onLongPressUp?: OnCallback;
    onVerticalDragDown?: OnDragDown;
    onVerticalDragStart?: OnDragStart;
    onVerticalDragUpdate?: OnDragUpdate;
    onVerticalDragEnd?: OnDragEnd;
    onVerticalDragCancel?: OnCallback;
    onHorizontalDragDown?: OnDragDown;
    onHorizontalDragStart?: OnDragStart;
    onHorizontalDragUpdate?: OnDragUpdate;
    onHorizontalDragEnd?: OnDragEnd;
    onHorizontalDragCancel?: OnCallback;
    onPanDown?: OnDragDown;
    onPanStart?: OnDragStart;
    onPanUpdate?: OnDragUpdate;
    onPanEnd?: OnDragEnd;
    onPanCancel?: OnCallback;
    onScaleStart?: OnScaleStart;
    onScaleUpdate?: OnScaleUpdate;
    onScaleEnd?: OnScaleEnd;
    behavior?: HitTestBehavior;
    excludeFromSemantics?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        onTap?: OnCallback;
        onTapDown?: OnTapDown;
        onTapUp?: OnTapUp;
        onTapCancel?: OnCallback;
        onDoubleTap?: OnCallback;
        onLongPress?: OnCallback;
        onLongPressUp?: OnCallback;
        onVerticalDragDown?: OnDragDown;
        onVerticalDragStart?: OnDragStart;
        onVerticalDragUpdate?: OnDragUpdate;
        onVerticalDragEnd?: OnDragEnd;
        onVerticalDragCancel?: OnCallback;
        onHorizontalDragDown?: OnDragDown;
        onHorizontalDragStart?: OnDragStart;
        onHorizontalDragUpdate?: OnDragUpdate;
        onHorizontalDragEnd?: OnDragEnd;
        onHorizontalDragCancel?: OnCallback;
        onPanDown?: OnDragDown;
        onPanStart?: OnDragStart;
        onPanUpdate?: OnDragUpdate;
        onPanEnd?: OnDragEnd;
        onPanCancel?: OnCallback;
        onScaleStart?: OnScaleStart;
        onScaleUpdate?: OnScaleUpdate;
        onScaleEnd?: OnScaleEnd;
        behavior?: HitTestBehavior;
        excludeFromSemantics?: boolean;
    });
}
export declare class GridView extends Widget {
    key?: Key;
    scrollDirection?: Axis;
    reverse?: boolean;
    controller?: ScrollController;
    primary?: boolean;
    physics?: ScrollPhysics;
    shrinkWrap?: boolean;
    padding?: EdgeInsets;
    gridDelegate?: SliverGridDelegate;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    children?: Array<Widget>;
    semanticChildCount?: number;
    dragStartBehavior?: DragStartBehavior;
    clipBehavior?: Clip;
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    restorationId?: string;
    constructor(config: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsets;
        gridDelegate: SliverGridDelegate;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        children?: Array<Widget>;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        clipBehavior?: Clip;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
        restorationId?: string;
    });
}
export declare class GridTileBar extends Widget {
    key?: Key;
    backgroundColor?: Color;
    leading?: Widget;
    title?: Widget;
    subtitle?: Widget;
    trailing?: Widget;
    constructor(config: {
        key?: Key;
        backgroundColor?: Color;
        leading?: Widget;
        title?: Widget;
        subtitle?: Widget;
        trailing?: Widget;
    });
}
export declare class GridTile extends Widget {
    key?: Key;
    child?: Widget;
    header?: Widget;
    footer?: Widget;
    constructor(config: {
        key?: Key;
        child?: Widget;
        header?: Widget;
        footer?: Widget;
    });
}
export declare class GridPaper extends Widget {
    key?: Key;
    child?: Widget;
    color?: Color;
    interval?: number;
    divisions?: number;
    subdivisions?: number;
    constructor(config: {
        key?: Key;
        child?: Widget;
        color?: Color;
        divisions?: number;
        interval?: number;
        subdivisions?: number;
    });
}
export declare class InputDecorator extends Widget {
    key?: Key;
    child?: Widget;
    decoration?: InputDecoration;
    baseStyle?: TextStyle;
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    isFocused?: boolean;
    isHovering?: boolean;
    expands?: boolean;
    isEmpty?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        decoration: InputDecoration;
        baseStyle?: TextStyle;
        textAlign?: TextAlign;
        textAlignVertical?: TextAlignVertical;
        isFocused?: boolean;
        isHovering?: boolean;
        expands?: boolean;
        isEmpty?: boolean;
    });
}
export declare class InputChip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    selected?: boolean;
    isEnabled?: boolean;
    onSelected?: OnCallbackBoolean;
    deleteIcon?: Widget;
    onDeleted?: OnCallback;
    deleteIconColor?: Color;
    deleteButtonTooltipMessage?: string;
    onPressed?: OnCallback;
    pressElevation?: number;
    disabledColor?: Color;
    selectedColor?: Color;
    tooltip?: string;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    focusNode?: FocusNode;
    autofocus?: boolean;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    selectedShadowColor?: Color;
    showCheckmark?: boolean;
    checkmarkColor?: Color;
    avatarBorder?: ShapeBorder;
    constructor(config: {
        key?: Key;
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        selected?: boolean;
        isEnabled?: boolean;
        onSelected?: OnCallbackBoolean;
        deleteIcon?: Widget;
        onDeleted?: OnCallback;
        deleteIconColor?: Color;
        deleteButtonTooltipMessage?: string;
        onPressed?: OnCallback;
        pressElevation?: number;
        disabledColor?: Color;
        selectedColor?: Color;
        tooltip?: string;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        visualDensity?: VisualDensity;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        showCheckmark?: boolean;
        checkmarkColor?: Color;
        avatarBorder?: ShapeBorder;
    });
}
export declare class IconSpan extends Widget {
    icon?: IconData;
    color?: Color;
    fontSize?: number;
    constructor(config: {
        icon: IconData;
        color?: Color;
        fontSize?: number;
    });
}
export declare class IndexedSemantics extends Widget {
    child?: Widget;
    index?: number;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        index?: number;
    });
}
export declare class IntrinsicHeight extends Widget {
    child?: Widget;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
    });
}
export declare class IntrinsicWidth extends Widget {
    child?: Widget;
    stepWidth?: number;
    stepHeight?: number;
    key?: Key;
    constructor(config: {
        child?: Widget;
        stepWidth?: number;
        stepHeight?: number;
        key?: Key;
    });
}
export declare class IndexedStack extends Widget {
    children?: Array<Widget>;
    index?: number;
    alignment?: AlignmentDirectional;
    textDirection?: TextDirection;
    sizing?: StackFit;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        index?: number;
        alignment?: AlignmentDirectional;
        textDirection?: TextDirection;
        sizing?: StackFit;
        key?: Key;
    });
}
export declare class IgnorePointer extends Widget {
    key?: Key;
    child?: Widget;
    ignoring?: boolean;
    ignoringSemantics?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        ignoring?: boolean;
        ignoringSemantics?: boolean;
    });
}
export declare class IconButton extends Widget {
    key?: Key;
    icon?: Widget;
    onPressed?: OnCallback;
    iconSize?: number;
    padding?: EdgeInsets;
    alignment?: Alignment;
    visualDensity?: VisualDensity;
    splashRadius?: number;
    color?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    disabledColor?: Color;
    autofocus?: boolean;
    tooltip?: string;
    enableFeedback?: boolean;
    constraints?: BoxConstraints;
    constructor(config: {
        key?: Key;
        icon: Widget;
        onPressed: OnCallback;
        iconSize?: number;
        padding?: EdgeInsets;
        alignment?: Alignment;
        visualDensity?: VisualDensity;
        splashRadius?: number;
        color?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        disabledColor?: Color;
        autofocus?: boolean;
        tooltip?: string;
        enableFeedback?: boolean;
        constraints?: BoxConstraints;
    });
}
export declare class Icon extends Widget {
    icon?: IconData;
    size?: number;
    color?: Color;
    semanticLabel?: string;
    textDirection?: TextDirection;
    key?: Key;
    constructor(icon: IconData, config?: {
        key?: Key;
        size?: number;
        color?: Color;
        semanticLabel?: string;
        textDirection?: TextDirection;
    });
}
export declare class ImageIcon extends Widget {
    image?: ImageProvider;
    size?: number;
    color?: Color;
    semanticLabel?: string;
    key?: Key;
    constructor(image: ImageProvider, config?: {
        key?: Key;
        size?: number;
        color?: Color;
        semanticLabel?: string;
        textDirection?: TextDirection;
    });
}
export declare class InkResponse extends Widget {
    key?: Key;
    child?: Widget;
    onTap?: OnCallback;
    onTapDown?: OnTapDown;
    onTapCancel?: OnCallback;
    onDoubleTap?: OnCallback;
    onLongPress?: OnCallback;
    onHighlightChanged?: OnCallbackBoolean;
    onHover?: OnCallbackBoolean;
    containedInkWell?: boolean;
    highlightShape?: BoxShape;
    radius?: number;
    borderRadius?: BorderRadius;
    customBorder?: ShapeBorder;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    overlayColor?: Color;
    splashColor?: Color;
    enableFeedback?: boolean;
    excludeFromSemantics?: boolean;
    canRequestFocus?: boolean;
    onFocusChange?: OnCallbackBoolean;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        onTap?: OnCallback;
        onTapDown?: OnTapDown;
        onTapCancel?: OnCallback;
        onDoubleTap?: OnCallback;
        onLongPress?: OnCallback;
        onHighlightChanged?: OnCallbackBoolean;
        onHover?: OnCallbackBoolean;
        containedInkWell?: boolean;
        highlightShape?: BoxShape;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        overlayColor?: Color;
        splashColor?: Color;
        enableFeedback?: boolean;
        excludeFromSemantics?: boolean;
        canRequestFocus?: boolean;
        onFocusChange?: OnCallbackBoolean;
        autofocus?: boolean;
    });
}
export declare class InkWell extends Widget {
    key?: Key;
    child?: Widget;
    onTap?: OnCallback;
    onTapDown?: OnTapDown;
    onTapCancel?: OnCallback;
    onDoubleTap?: OnCallback;
    onLongPress?: OnCallback;
    onHighlightChanged?: OnCallbackBoolean;
    onHover?: OnCallbackBoolean;
    radius?: number;
    borderRadius?: BorderRadius;
    customBorder?: ShapeBorder;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    overlayColor?: Color;
    splashColor?: Color;
    enableFeedback?: boolean;
    excludeFromSemantics?: boolean;
    canRequestFocus?: boolean;
    onFocusChange?: OnCallbackBoolean;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        onTap?: OnCallback;
        onTapDown?: OnTapDown;
        onTapCancel?: OnCallback;
        onDoubleTap?: OnCallback;
        onLongPress?: OnCallback;
        onHighlightChanged?: OnCallbackBoolean;
        onHover?: OnCallbackBoolean;
        radius?: number;
        borderRadius?: BorderRadius;
        customBorder?: ShapeBorder;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        overlayColor?: Color;
        splashColor?: Color;
        enableFeedback?: boolean;
        excludeFromSemantics?: boolean;
        canRequestFocus?: boolean;
        onFocusChange?: OnCallbackBoolean;
        autofocus?: boolean;
    });
}
export declare class Image extends Widget {
    key?: Key;
    image?: ImageProvider;
    semanticLabel?: string;
    excludeFromSemantics?: boolean;
    width?: number;
    height?: number;
    color?: Color;
    colorBlendMode?: BlendMode;
    fit?: BoxFit;
    alignment?: Alignment;
    repeat?: ImageRepeat;
    centerSlice?: Rect;
    matchTextDirection?: boolean;
    gaplessPlayback?: boolean;
    isAntiAlias?: boolean;
    filterQuality?: FilterQuality;
    src?: string;
    scale?: number;
    headers?: Map<string, string>;
    cacheWidth?: number;
    cacheHeight?: number;
    bundle?: AssetBundle;
    package?: string;
    file?: File;
    imageName?: string;
    bytes?: Uint8List;
    constructor(config?: {
        key?: Key;
        image: ImageProvider;
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        width?: number;
        height?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        gaplessPlayback?: boolean;
        isAntiAlias?: boolean;
        filterQuality?: FilterQuality;
    });
    static network(src: string, config?: {
        key?: Key;
        scale?: number;
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        width?: number;
        height?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        gaplessPlayback?: boolean;
        isAntiAlias?: boolean;
        filterQuality?: FilterQuality;
        headers?: Map<string, string>;
        cacheWidth?: number;
        cacheHeight?: number;
    }): Image;
    static file(file: File, config?: {
        key?: Key;
        scale?: number;
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        width?: number;
        height?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        gaplessPlayback?: boolean;
        isAntiAlias?: boolean;
        filterQuality?: FilterQuality;
        cacheWidth?: number;
        cacheHeight?: number;
    }): Image;
    static asset(imageName: string, config?: {
        key?: Key;
        bundle?: AssetBundle;
        package?: string;
        scale?: number;
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        width?: number;
        height?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        gaplessPlayback?: boolean;
        isAntiAlias?: boolean;
        filterQuality?: FilterQuality;
        headers?: Map<string, string>;
        cacheWidth?: number;
        cacheHeight?: number;
    }): Image;
    static memory(bytes: Uint8List, config?: {
        key?: Key;
        scale?: number;
        semanticLabel?: string;
        excludeFromSemantics?: boolean;
        width?: number;
        height?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        gaplessPlayback?: boolean;
        isAntiAlias?: boolean;
        filterQuality?: FilterQuality;
        headers?: Map<string, string>;
        cacheWidth?: number;
        cacheHeight?: number;
    }): Image;
}
export declare class KeyedSubtree extends Widget {
    child?: Widget;
    key?: Key;
    constructor(config: {
        child: Widget;
        key?: Key;
    });
}
export declare class LabelTitle extends Widget {
    key?: Key;
    label?: string;
    labelStyle?: TextStyle;
    title?: string;
    titleStyle?: TextStyle;
    constructor(config: {
        key?: Key;
        label?: string;
        labelStyle?: TextStyle;
        title?: string;
        titleStyle?: TextStyle;
    });
}
export declare class LimitedBox extends Widget {
    child?: Widget;
    maxWidth?: number;
    maxHeight?: number;
    key?: Key;
    constructor(config: {
        child?: Widget;
        maxWidth?: number;
        maxHeight?: number;
        key?: Key;
    });
}
export declare class ListBody extends Widget {
    children?: Array<Widget>;
    reverse?: boolean;
    mainAxis?: Axis;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        reverse?: boolean;
        mainAxis?: Axis;
        key?: Key;
    });
}
export declare class ListTile extends Widget {
    key?: Key;
    leading?: Widget;
    title?: Widget;
    subtitle?: Widget;
    trailing?: Widget;
    onTap?: OnCallback;
    onLongPress?: OnCallback;
    selected?: boolean;
    isThreeLine?: boolean;
    dense?: boolean;
    visualDensity?: VisualDensity;
    shape?: ShapeBorder;
    contentPadding?: EdgeInsets;
    enabled?: boolean;
    focusColor?: Color;
    hoverColor?: Color;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        title?: Widget;
        subtitle?: Widget;
        trailing?: Widget;
        onTap?: OnCallback;
        onLongPress?: OnCallback;
        selected?: boolean;
        isThreeLine?: boolean;
        dense?: boolean;
        visualDensity?: VisualDensity;
        shape?: ShapeBorder;
        contentPadding?: EdgeInsets;
        enabled?: boolean;
        focusColor?: Color;
        hoverColor?: Color;
        autofocus?: boolean;
    });
}
export declare class ListView extends Widget {
    children?: Array<Widget>;
    padding?: EdgeInsets;
    controller?: ScrollController;
    scrollDirection?: Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: ScrollPhysics;
    shrinkWrap?: boolean;
    itemExtent?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: DragStartBehavior;
    key?: Key;
    keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
    restorationId?: string;
    clipBehavior?: Clip;
    itemBuilder?: IndexedWidgetBuilder;
    itemBuilderChildren?: Array<Widget>;
    itemCount?: number;
    separatorBuilder?: IndexedWidgetBuilder;
    separatorBuilderChildren?: Array<Widget>;
    childrenDelegate?: SliverChildDelegate;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    constructor(config?: {
        children?: Array<Widget>;
        padding?: EdgeInsets;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        itemExtent?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        key?: Key;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
        restorationId?: string;
        clipBehavior?: Clip;
    });
    static builder(config: {
        itemBuilder?: IndexedWidgetBuilder;
        itemCount?: number;
        padding?: EdgeInsets;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        itemExtent?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        key?: Key;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
        restorationId?: string;
        clipBehavior?: Clip;
    }): ListView;
    static separatorBuilder(config: {
        itemBuilder?: IndexedWidgetBuilder;
        separatorBuilder?: IndexedWidgetBuilder;
        itemCount?: number;
        padding?: EdgeInsets;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        itemExtent?: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        key?: Key;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
        restorationId?: string;
        clipBehavior?: Clip;
    }): ListView;
    static custom(config: {
        childrenDelegate: SliverChildDelegate;
        padding?: EdgeInsets;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        itemExtent?: number;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        key?: Key;
        keyboardDismissBehavior?: ScrollViewKeyboardDismissBehavior;
        restorationId?: string;
        clipBehavior?: Clip;
    }): ListView;
}
export declare class LayoutBuilder extends Widget {
    builder?: any;
    key?: Key;
    constructor(config: {
        builder?: any;
        key?: Key;
    });
}
export declare class Material extends Widget {
    child?: Widget;
    elevation?: number;
    color?: Color;
    shadowColor?: Color;
    textStyle?: TextStyle;
    borderRadius?: BorderRadius;
    type?: MaterialType;
    shape?: any;
    borderOnForeground?: boolean;
    clipBehavior?: Clip;
    animationDuration?: Duration;
    key?: Key;
    constructor(config: {
        child?: Widget;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
        textStyle?: TextStyle;
        borderRadius?: BorderRadius;
        type?: MaterialType;
        shape?: any;
        borderOnForeground?: boolean;
        clipBehavior?: Clip;
        animationDuration?: Duration;
        key?: Key;
    });
}
export declare class MaterialPageRoute extends Widget {
    builder?: any;
    settings?: any;
    maintainState?: boolean;
    fullscreenDialog?: boolean;
    child?: MaterialPageRoute;
    preBuild(jsWidgetHelper?: any, buildContext?: BuildContext): void;
    constructor(config: {
        builder?: any;
        settings?: any;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
    });
}
export declare class MaterialBanner extends Widget {
    key?: Key;
    content?: Widget;
    contentTextStyle?: TextStyle;
    actions?: Array<Widget>;
    leading?: Widget;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    leadingPadding?: EdgeInsets;
    forceActionsBelow?: boolean;
    constructor(config: {
        key?: Key;
        content: Widget;
        contentTextStyle?: TextStyle;
        actions: Array<Widget>;
        leading?: Widget;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        leadingPadding?: EdgeInsets;
        forceActionsBelow?: boolean;
    });
}
export declare class NotificationListener extends Widget {
    child?: Widget;
    key?: Key;
    constructor(config: {
        child?: Widget;
        key?: Key;
    });
}
export declare class NestedScrollView extends Widget {
    body?: Widget;
    controller?: ScrollController;
    scrollDirection?: Axis;
    reverse?: boolean;
    physics?: ScrollPhysics;
    headerSliverBuilder?: any;
    dragStartBehavior?: DragStartBehavior;
    key?: Key;
    children?: Array<Widget>;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    constructor(config: {
        body?: Widget;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        physics?: ScrollPhysics;
        headerSliverBuilder?: any;
        dragStartBehavior?: DragStartBehavior;
        key?: Key;
    });
}
export declare class Navigator extends DartClass {
    static push(context: BuildContext, materialPageRoute: MaterialPageRoute): void;
    static pop(context: BuildContext): void;
}
export declare class Opacity extends Widget {
    child?: Widget;
    opacity?: number;
    alwaysIncludeSemantics?: boolean;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        opacity: number;
        alwaysIncludeSemantics?: boolean;
    });
}
export declare class Offstage extends Widget {
    child?: Widget;
    offstage?: boolean;
    key?: Key;
    constructor(config: {
        child?: Widget;
        offstage?: boolean;
        key?: Key;
    });
}
export declare class OverflowBox extends Widget {
    child?: Widget;
    alignment?: Alignment;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    key?: Key;
    constructor(config: {
        child?: Widget;
        alignment?: Alignment;
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        key?: Key;
    });
}
export declare class OutlineButton extends Widget {
    key?: Key;
    child?: Widget;
    onPressed?: OnCallback;
    onLongPress?: OnCallback;
    padding?: EdgeInsets;
    textTheme?: ButtonTextTheme;
    textColor?: Color;
    disabledTextColor?: Color;
    color?: Color;
    disabledColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorBrightness?: Brightness;
    shape?: any;
    clipBehavior?: Clip;
    materialTapTargetSize?: MaterialTapTargetSize;
    highlightElevation?: number;
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    borderSide?: BorderSide;
    disabledBorderColor?: Color;
    highlightedBorderColor?: Color;
    icon?: Widget;
    label?: Widget;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        onPressed: OnCallback;
        onLongPress?: OnCallback;
        padding?: EdgeInsets;
        textTheme?: ButtonTextTheme;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        highlightElevation?: number;
        focusColor?: Color;
        hoverColor?: Color;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
        borderSide?: BorderSide;
        disabledBorderColor?: Color;
        highlightedBorderColor?: Color;
    });
    static icon(config: {
        key?: Key;
        child?: Widget;
        onPressed?: OnCallback;
        onLongPress?: OnCallback;
        padding?: EdgeInsets;
        textTheme?: ButtonTextTheme;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        highlightElevation?: number;
        focusColor?: Color;
        hoverColor?: Color;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
        borderSide?: BorderSide;
        disabledBorderColor?: Color;
        highlightedBorderColor?: Color;
        icon?: Widget;
        label?: Widget;
    }): OutlineButton;
}
export declare class Padding extends Widget {
    child?: Widget;
    padding?: EdgeInsets;
    key?: Key;
    constructor(config: {
        child?: Widget;
        padding?: EdgeInsets;
        key?: Key;
    });
}
export declare class PhysicalModel extends Widget {
    key?: Key;
    color?: Color;
    shape?: BoxShape;
    child?: Widget;
    clipBehavior?: Clip;
    borderRadius?: BorderRadius;
    elevation?: number;
    shadowColor?: Color;
    constructor(config: {
        key?: Key;
        color: Color;
        shape?: BoxShape;
        child?: Widget;
        clipBehavior?: Clip;
        borderRadius?: BorderRadius;
        elevation?: number;
        shadowColor?: Color;
    });
}
export declare class Positioned extends Widget {
    key?: Key;
    child?: Widget;
    start?: number;
    left?: number;
    top?: number;
    end?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    rect?: Rect;
    textDirection?: TextDirection;
    constructor(config?: {
        key?: Key;
        child: Widget;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
        width?: number;
        height?: number;
    });
    static fromRect(config: {
        child: Widget;
        rect?: Rect;
        key?: Key;
    }): Positioned;
    static fill(config: {
        key?: Key;
        child: Widget;
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }): Positioned;
    static directional(config: {
        key?: Key;
        child: Widget;
        textDirection: TextDirection;
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
        width?: number;
        height?: number;
    }): Positioned;
}
export declare class PositionedDirectional extends Widget {
    key?: Key;
    child?: Widget;
    start?: number;
    top?: number;
    end?: number;
    bottom?: number;
    width?: number;
    height?: number;
    constructor(config: {
        key?: Key;
        child: Widget;
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
        width?: number;
        height?: number;
    });
}
export declare class PreferredSize extends Widget {
    key?: Key;
    child?: Widget;
    preferredSize?: Size;
    constructor(config: {
        child?: Widget;
        preferredSize?: Size;
        key?: Key;
    });
}
export declare class PreferredSizeWidget extends Widget {
}
export declare class Placeholder extends Widget {
    color?: Color;
    strokeWidth?: number;
    fallbackWidth?: number;
    fallbackHeight?: number;
    key?: Key;
    constructor(config: {
        color?: Color;
        strokeWidth?: number;
        fallbackWidth?: number;
        fallbackHeight?: number;
        key?: Key;
    });
}
export declare class PopupMenuButton extends Widget {
    itemBuilder?: any;
    initialValue?: any;
    onSelected?: any;
    onCanceled?: any;
    tooltip?: string;
    elevation?: number;
    padding?: EdgeInsets;
    child?: Widget;
    icon?: Widget;
    offset?: Offset;
    key?: Key;
    children?: Array<Widget>;
    preBuild(jsWidgetHelper: any, buildContext: any): void;
    constructor(config: {
        itemBuilder?: any;
        initialValue?: any;
        onSelected?: any;
        onCanceled?: any;
        tooltip?: string;
        elevation?: number;
        padding?: EdgeInsets;
        child?: Widget;
        icon?: Widget;
        offset?: Offset;
        key?: Key;
    });
}
export declare class PopupMenuItem extends Widget {
    child?: Widget;
    value?: any;
    enabled?: boolean;
    height?: number;
    key?: Key;
    constructor(config: {
        child?: Widget;
        value?: any;
        enabled?: boolean;
        height?: number;
        key?: Key;
    });
}
export declare class PageView extends Widget {
    key?: Key;
    scrollDirection?: Axis;
    reverse?: boolean;
    controller?: PageController;
    physics?: ScrollPhysics;
    pageSnapping?: boolean;
    onPageChanged?: OnCallbackNumber;
    children?: Array<Widget>;
    dragStartBehavior?: DragStartBehavior;
    allowImplicitScrolling?: boolean;
    restorationId?: string;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: PageController;
        physics?: ScrollPhysics;
        pageSnapping?: boolean;
        onPageChanged?: OnCallbackNumber;
        children?: Array<Widget>;
        dragStartBehavior?: DragStartBehavior;
        allowImplicitScrolling?: boolean;
        restorationId?: string;
        clipBehavior?: Clip;
    });
}
export declare class Row extends Widget {
    children?: Array<Widget>;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    textDirection?: TextDirection;
    verticalDirection?: VerticalDirection;
    textBaseline?: TextBaseline;
    key?: Key;
    constructor(config: {
        children?: Array<Widget>;
        mainAxisAlignment?: MainAxisAlignment;
        mainAxisSize?: MainAxisSize;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        key?: Key;
    });
}
export declare class RawChip extends Widget {
    key?: Key;
    avatar?: Widget;
    label?: Widget;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    selected?: boolean;
    isEnabled?: boolean;
    tapEnabled?: boolean;
    onSelected?: OnCallbackBoolean;
    deleteIcon?: Widget;
    onDeleted?: OnCallback;
    deleteIconColor?: Color;
    deleteButtonTooltipMessage?: string;
    onPressed?: OnCallback;
    pressElevation?: number;
    disabledColor?: Color;
    selectedColor?: Color;
    tooltip?: string;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    focusNode?: FocusNode;
    autofocus?: boolean;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    visualDensity?: VisualDensity;
    materialTapTargetSize?: MaterialTapTargetSize;
    elevation?: number;
    shadowColor?: Color;
    selectedShadowColor?: Color;
    showCheckmark?: boolean;
    checkmarkColor?: Color;
    avatarBorder?: ShapeBorder;
    constructor(config: {
        key?: Key;
        avatar?: Widget;
        label: Widget;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        selected?: boolean;
        isEnabled?: boolean;
        tapEnabled?: boolean;
        onSelected?: OnCallbackBoolean;
        deleteIcon?: Widget;
        onDeleted?: OnCallback;
        deleteIconColor?: Color;
        deleteButtonTooltipMessage?: string;
        onPressed?: OnCallback;
        pressElevation?: number;
        disabledColor?: Color;
        selectedColor?: Color;
        tooltip?: string;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        focusNode?: FocusNode;
        autofocus?: boolean;
        backgroundColor?: Color;
        padding?: EdgeInsets;
        visualDensity?: VisualDensity;
        materialTapTargetSize?: MaterialTapTargetSize;
        elevation?: number;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        showCheckmark?: boolean;
        checkmarkColor?: Color;
        avatarBorder?: ShapeBorder;
    });
}
export declare class RepaintBoundary extends Widget {
    key?: Key;
    child?: Widget;
    childIndex?: number;
    constructor(config?: {
        key?: Key;
        child?: Widget;
    });
    static wrap(child: Widget, childIndex: number): RepaintBoundary;
}
export declare class RawImage extends Widget {
    key?: Key;
    image?: ImageProvider;
    debugImageLabel?: string;
    width?: number;
    height?: number;
    scale?: number;
    color?: Color;
    colorBlendMode?: BlendMode;
    fit?: BoxFit;
    alignment?: Alignment;
    repeat?: ImageRepeat;
    centerSlice?: Rect;
    matchTextDirection?: boolean;
    invertColors?: boolean;
    filterQuality?: FilterQuality;
    isAntiAlias?: boolean;
    constructor(config: {
        key?: Key;
        image?: ImageProvider;
        debugImageLabel?: string;
        width?: number;
        height?: number;
        scale?: number;
        color?: Color;
        colorBlendMode?: BlendMode;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        centerSlice?: Rect;
        matchTextDirection?: boolean;
        invertColors?: boolean;
        filterQuality?: FilterQuality;
        isAntiAlias?: boolean;
    });
}
export declare class RotatedBox extends Widget {
    key?: Key;
    quarterTurns?: number;
    child?: Widget;
    constructor(config: {
        key?: Key;
        quarterTurns: number;
        child?: Widget;
    });
}
export declare class RaisedButton extends Widget {
    child?: Widget;
    onPressed?: OnCallback;
    onHighlightChanged?: OnCallbackBoolean;
    padding?: EdgeInsets;
    textColor?: Color;
    disabledTextColor?: Color;
    color?: Color;
    disabledColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    colorBrightness?: Brightness;
    elevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    shape?: any;
    clipBehavior?: Clip;
    materialTapTargetSize?: MaterialTapTargetSize;
    animationDuration?: Duration;
    key?: Key;
    icon?: Widget;
    label?: Widget;
    onLongPress?: OnCallback;
    focusColor?: Color;
    hoverColor?: Color;
    focusElevation?: number;
    hoverElevation?: number;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        onPressed?: OnCallback;
        onHighlightChanged?: OnCallbackBoolean;
        padding?: EdgeInsets;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        elevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        animationDuration?: Duration;
        onLongPress?: OnCallback;
        focusColor?: Color;
        hoverColor?: Color;
        focusElevation?: number;
        hoverElevation?: number;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
    });
    static icon(config: {
        key?: Key;
        icon?: Widget;
        label?: Widget;
        onPressed?: OnCallback;
        onHighlightChanged?: OnCallbackBoolean;
        padding?: EdgeInsets;
        textColor?: Color;
        disabledTextColor?: Color;
        color?: Color;
        disabledColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorBrightness?: Brightness;
        elevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        animationDuration?: Duration;
        onLongPress?: OnCallback;
        focusColor?: Color;
        hoverColor?: Color;
        focusElevation?: number;
        hoverElevation?: number;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
    }): RaisedButton | undefined;
}
export declare class Radio extends Widget {
    key?: Key;
    value?: string;
    groupValue?: string;
    onChanged?: OnCallbackString;
    activeColor?: Color;
    materialTapTargetSize?: MaterialTapTargetSize;
    constructor(config: {
        key?: Key;
        value?: string;
        groupValue?: string;
        onChanged?: OnCallbackString;
        activeColor?: Color;
        materialTapTargetSize?: MaterialTapTargetSize;
    });
}
export declare class RadioListTile extends Widget {
    key?: Key;
    value?: string;
    groupValue?: string;
    onChanged?: OnCallbackString;
    toggleable?: boolean;
    activeColor?: Color;
    title?: Widget;
    subtitle?: Widget;
    isThreeLine?: boolean;
    dense?: boolean;
    secondary?: Widget;
    selected?: boolean;
    controlAffinity?: ListTileControlAffinity;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        value: string;
        groupValue: string;
        onChanged: OnCallbackString;
        toggleable?: boolean;
        activeColor?: Color;
        title?: Widget;
        subtitle?: Widget;
        isThreeLine?: boolean;
        dense?: boolean;
        secondary?: Widget;
        selected?: boolean;
        controlAffinity?: ListTileControlAffinity;
        autofocus?: boolean;
    });
}
export declare class RawMaterialButton extends Widget {
    key?: Key;
    onPressed?: OnCallback;
    onLongPress?: OnCallback;
    onHighlightChanged?: OnCallbackBoolean;
    textStyle?: TextStyle;
    padding?: EdgeInsets;
    fillColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    constraints?: BoxConstraints;
    elevation?: number;
    focusElevation?: number;
    hoverElevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    shape?: any;
    clipBehavior?: Clip;
    materialTapTargetSize?: MaterialTapTargetSize;
    animationDuration?: Duration;
    enableFeedback?: boolean;
    child?: Widget;
    constructor(config: {
        key?: Key;
        onPressed: OnCallback;
        onLongPress?: OnCallback;
        onHighlightChanged?: OnCallbackBoolean;
        textStyle?: TextStyle;
        padding?: EdgeInsets;
        fillColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        constraints?: BoxConstraints;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        highlightElevation?: number;
        disabledElevation?: number;
        visualDensity?: VisualDensity;
        autofocus?: boolean;
        shape?: any;
        clipBehavior?: Clip;
        materialTapTargetSize?: MaterialTapTargetSize;
        animationDuration?: Duration;
        enableFeedback?: boolean;
        child?: Widget;
    });
}
export declare class RichText extends Widget {
    text?: TextSpan;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    softWrap?: boolean;
    overflow?: TextOverflow;
    textScaleFactor?: number;
    maxLines?: number;
    key?: Key;
    textWidthBasis?: TextWidthBasis;
    constructor(config: {
        key?: Key;
        text: Widget;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        textWidthBasis?: TextWidthBasis;
    });
}
export declare class Step extends Widget {
    title?: Widget;
    subtitle?: Widget;
    content?: Widget;
    state?: StepState;
    isActive?: boolean;
    constructor(config: {
        title: Widget;
        subtitle?: Widget;
        content: Widget;
        state?: StepState;
        isActive?: boolean;
    });
}
export declare class Stepper extends Widget {
    key?: Key;
    steps?: Array<Step>;
    physics?: ScrollPhysics;
    type?: StepperType;
    currentStep?: number;
    onStepTapped?: OnCallbackNumber;
    onStepContinue?: OnCallback;
    onStepCancel?: OnCallback;
    constructor(config: {
        key?: Key;
        steps?: Array<Step>;
        physics?: ScrollPhysics;
        type?: StepperType;
        currentStep?: number;
        onStepTapped?: OnCallbackNumber;
        onStepContinue?: OnCallback;
        onStepCancel?: OnCallback;
    });
}
export declare class Spacer extends Widget {
    key?: Key;
    flex?: number;
    constructor(config: {
        key?: Key;
        flex?: number;
    });
}
export declare class Semantics extends Widget {
    key?: Key;
    child?: Widget;
    container?: boolean;
    explicitChildNodes?: boolean;
    excludeSemantics?: boolean;
    enabled?: boolean;
    checked?: boolean;
    selected?: boolean;
    toggled?: boolean;
    button?: boolean;
    link?: boolean;
    header?: boolean;
    textField?: boolean;
    readOnly?: boolean;
    focusable?: boolean;
    focused?: boolean;
    inMutuallyExclusiveGroup?: boolean;
    obscured?: boolean;
    multiline?: boolean;
    scopesRoute?: boolean;
    namesRoute?: boolean;
    hidden?: boolean;
    image?: boolean;
    liveRegion?: boolean;
    maxValueLength?: number;
    currentValueLength?: number;
    label?: string;
    value?: string;
    increasedValue?: string;
    decreasedValue?: string;
    hint?: string;
    onTapHint?: string;
    onLongPressHint?: string;
    textDirection?: TextDirection;
    onTap?: OnCallback;
    onLongPress?: OnCallback;
    onScrollLeft?: OnCallback;
    onScrollRight?: OnCallback;
    onScrollUp?: OnCallback;
    onScrollDown?: OnCallback;
    onIncrease?: OnCallback;
    onDecrease?: OnCallback;
    onCopy?: OnCallback;
    onCut?: OnCallback;
    onPaste?: OnCallback;
    onDismiss?: OnCallback;
    onDidGainAccessibilityFocus?: OnCallback;
    onDidLoseAccessibilityFocus?: OnCallback;
    constructor(config: {
        key?: Key;
        child?: Widget;
        container?: boolean;
        explicitChildNodes?: boolean;
        excludeSemantics?: boolean;
        enabled?: boolean;
        checked?: boolean;
        selected?: boolean;
        toggled?: boolean;
        button?: boolean;
        link?: boolean;
        header?: boolean;
        textField?: boolean;
        readOnly?: boolean;
        focusable?: boolean;
        focused?: boolean;
        inMutuallyExclusiveGroup?: boolean;
        obscured?: boolean;
        multiline?: boolean;
        scopesRoute?: boolean;
        namesRoute?: boolean;
        hidden?: boolean;
        image?: boolean;
        liveRegion?: boolean;
        maxValueLength?: number;
        currentValueLength?: number;
        label?: string;
        value?: string;
        increasedValue?: string;
        decreasedValue?: string;
        hint?: string;
        onTapHint?: string;
        onLongPressHint?: string;
        textDirection?: TextDirection;
        onTap?: OnCallback;
        onLongPress?: OnCallback;
        onScrollLeft?: OnCallback;
        onScrollRight?: OnCallback;
        onScrollUp?: OnCallback;
        onScrollDown?: OnCallback;
        onIncrease?: OnCallback;
        onDecrease?: OnCallback;
        onCopy?: OnCallback;
        onCut?: OnCallback;
        onPaste?: OnCallback;
        onDismiss?: OnCallback;
        onDidGainAccessibilityFocus?: OnCallback;
        onDidLoseAccessibilityFocus?: OnCallback;
    });
}
export declare class SwitchListTile extends Widget {
    key?: Key;
    value?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    activeTrackColor?: Color;
    inactiveThumbColor?: Color;
    inactiveTrackColor?: Color;
    title?: Widget;
    subtitle?: Widget;
    isThreeLine?: boolean;
    dense?: boolean;
    contentPadding?: EdgeInsets;
    secondary?: Widget;
    selected?: boolean;
    autofocus?: boolean;
    controlAffinity?: ListTileControlAffinity;
    constructor(config: {
        key?: Key;
        value: boolean;
        onChanged: OnCallbackBoolean;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        title?: Widget;
        subtitle?: Widget;
        isThreeLine?: boolean;
        dense?: boolean;
        contentPadding?: EdgeInsets;
        secondary?: Widget;
        selected?: boolean;
        autofocus?: boolean;
        controlAffinity?: ListTileControlAffinity;
    });
}
export declare class Switch extends Widget {
    key?: Key;
    value?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    activeTrackColor?: Color;
    inactiveThumbColor?: Color;
    inactiveTrackColor?: Color;
    focusColor?: Color;
    hoverColor?: Color;
    materialTapTargetSize?: MaterialTapTargetSize;
    dragStartBehavior?: DragStartBehavior;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        value: boolean;
        onChanged?: OnCallbackBoolean;
        activeColor?: Color;
        activeTrackColor?: Color;
        inactiveThumbColor?: Color;
        inactiveTrackColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        materialTapTargetSize?: MaterialTapTargetSize;
        dragStartBehavior?: DragStartBehavior;
        autofocus?: boolean;
    });
}
export declare class Slider extends Widget {
    key?: Key;
    value?: number;
    onChanged?: OnCallbackNumber;
    onChangeStart?: OnCallbackNumber;
    onChangeEnd?: OnCallbackNumber;
    min?: number;
    max?: number;
    divisions?: number;
    label?: string;
    activeColor?: Color;
    inactiveColor?: Color;
    semanticFormatterCallback?: OnCallbackNumber;
    autofocus?: boolean;
    constructor(config: {
        key?: Key;
        value?: number;
        onChanged?: OnCallbackNumber;
        onChangeStart?: OnCallbackNumber;
        onChangeEnd?: OnCallbackNumber;
        min?: number;
        max?: number;
        divisions?: number;
        label?: string;
        activeColor?: Color;
        inactiveColor?: Color;
        semanticFormatterCallback?: OnCallbackNumber;
        autofocus?: boolean;
    });
}
export declare class SizedBox extends Widget {
    child?: Widget;
    width?: number;
    height?: number;
    key?: Key;
    size?: Size;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        width?: number;
        height?: number;
    });
    static expand(config: {
        key?: Key;
        child?: Widget;
    }): SizedBox;
    static fromSize(config: {
        key?: Key;
        child?: Widget;
        size?: Size;
    }): SizedBox;
    static shrink(config: {
        key?: Key;
        child?: Widget;
    }): SizedBox;
}
export declare class SizedOverflowBox extends Widget {
    child?: Widget;
    alignment?: Alignment;
    size?: Size;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        size: Size;
    });
}
export declare class Stack extends Widget {
    key?: Key;
    children?: Array<Widget>;
    alignment?: AlignmentDirectional;
    textDirection?: TextDirection;
    fit?: StackFit;
    overflow?: Overflow;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        alignment?: AlignmentDirectional;
        textDirection?: TextDirection;
        fit?: StackFit;
        overflow?: Overflow;
        clipBehavior?: Clip;
    });
}
export declare class SliverAppBar extends Widget {
    key?: Key;
    leading?: Widget;
    automaticallyImplyLeading?: boolean;
    title?: Widget;
    actions?: Array<Widget>;
    flexibleSpace?: Widget;
    bottom?: Widget;
    elevation?: number;
    shadowColor?: Color;
    forceElevated?: boolean;
    backgroundColor?: Color;
    brightness?: Brightness;
    primary?: boolean;
    centerTitle?: boolean;
    excludeHeaderSemantics?: boolean;
    titleSpacing?: number;
    collapsedHeight?: number;
    expandedHeight?: number;
    floating?: boolean;
    pinned?: boolean;
    snap?: boolean;
    stretch?: boolean;
    stretchTriggerOffset?: number;
    onStretchTrigger?: OnCallback;
    shape?: ShapeBorder;
    toolbarHeight?: number;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        automaticallyImplyLeading?: boolean;
        title?: Widget;
        actions?: Array<Widget>;
        flexibleSpace?: Widget;
        bottom?: Widget;
        elevation?: number;
        shadowColor?: Color;
        forceElevated?: boolean;
        backgroundColor?: Color;
        brightness?: Brightness;
        primary?: boolean;
        centerTitle?: boolean;
        excludeHeaderSemantics?: boolean;
        titleSpacing?: number;
        collapsedHeight?: number;
        expandedHeight?: number;
        floating?: boolean;
        pinned?: boolean;
        snap?: boolean;
        stretch?: boolean;
        stretchTriggerOffset?: number;
        onStretchTrigger?: OnCallback;
        shape?: any;
        toolbarHeight?: number;
    });
}
export declare class SliverFillViewport extends Widget {
    key?: Key;
    delegate?: SliverChildDelegate;
    viewportFraction?: number;
    padEnds?: boolean;
    /**
     * @param config config:
      
     */
    constructor(config: {
        key?: Key;
        delegate: SliverChildDelegate;
        viewportFraction?: number;
        padEnds?: boolean;
    });
}
export declare class SliverFillRemaining extends Widget {
    key?: Key;
    child?: Widget;
    hasScrollBody?: boolean;
    fillOverscroll?: boolean;
    constructor(config: {
        key?: Key;
        child?: Widget;
        hasScrollBody?: boolean;
        fillOverscroll?: boolean;
    });
}
export declare class SliverPadding extends Widget {
    sliver?: Widget;
    padding?: EdgeInsets;
    key?: Key;
    constructor(config: {
        key?: Key;
        sliver?: Widget;
        padding: EdgeInsets;
    });
}
export declare class SliverGrid extends Widget {
    delegate?: SliverChildDelegate;
    gridDelegate?: SliverGridDelegate;
    key?: Key;
    constructor(config: {
        delegate?: SliverChildDelegate;
        gridDelegate?: SliverGridDelegate;
        key?: Key;
    });
}
export declare abstract class SliverGridDelegate extends Widget {
}
export declare class SliverGridDelegateWithMaxCrossAxisExtent extends Widget {
    maxCrossAxisExtent?: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
    constructor(config: {
        maxCrossAxisExtent: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
    });
}
export declare class SliverGridDelegateWithFixedCrossAxisCount extends Widget {
    crossAxisCount?: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
    constructor(config: {
        crossAxisCount: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
    });
}
export declare abstract class SliverChildDelegate extends Widget {
}
export declare class SliverChildListDelegate extends SliverChildDelegate {
    children?: Array<Widget>;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
    constructor(config: {
        children: Array<Widget>;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        semanticIndexOffset?: number;
    });
}
export declare class SliverChildBuilderDelegate extends SliverChildDelegate {
    builder?: IndexedWidgetBuilder;
    childCount?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
    children?: Array<Widget>;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    constructor(config: {
        builder: IndexedWidgetBuilder;
        childCount: number;
        addAutomaticKeepAlives?: boolean;
        addRepaintBoundaries?: boolean;
        addSemanticIndexes?: boolean;
        semanticIndexOffset?: number;
        children?: Array<Widget>;
    });
}
export declare class SliverList extends Widget {
    delegate?: SliverChildDelegate;
    key?: Key;
    constructor(config: {
        delegate?: SliverChildDelegate;
        key?: Key;
    });
}
export declare class SliverOpacity extends Widget {
    key?: Key;
    sliver?: Widget;
    opacity?: number;
    alwaysIncludeSemantics?: boolean;
    constructor(config: {
        key?: Key;
        sliver?: Widget;
        opacity: number;
        alwaysIncludeSemantics?: boolean;
    });
}
export declare class SliverOverlapInjector extends Widget {
    child?: Widget;
    handle?: any;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        handle?: any;
    });
}
export declare class SliverFixedExtentList extends Widget {
    delegate?: SliverChildDelegate;
    itemExtent?: number;
    key?: Key;
    constructor(config: {
        key?: Key;
        delegate?: SliverChildDelegate;
        itemExtent?: number;
    });
}
export declare class SliverOverlapAbsorber extends Widget {
    child?: Widget;
    handle?: any;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        handle?: any;
    });
}
export declare class SingleChildScrollView extends Widget {
    child?: Widget;
    scrollDirection?: Axis;
    reverse?: boolean;
    padding?: EdgeInsets;
    primary?: boolean;
    physics?: ScrollPhysics;
    controller?: ScrollController;
    dragStartBehavior?: DragStartBehavior;
    clipBehavior?: Clip;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        scrollDirection?: Axis;
        reverse?: boolean;
        padding?: EdgeInsets;
        primary?: boolean;
        physics?: ScrollPhysics;
        controller?: ScrollController;
        dragStartBehavior?: DragStartBehavior;
        clipBehavior?: Clip;
    });
}
export declare class SliverToBoxAdapter extends Widget {
    child?: Widget;
    key?: Key;
    constructor(config: {
        child?: Widget;
        key?: Key;
    });
}
export declare class Scaffold extends Widget {
    key?: Key;
    appBar?: Widget;
    body?: Widget;
    floatingActionButton?: Widget;
    floatingActionButtonLocation?: FloatingActionButtonLocation;
    persistentFooterButtons?: Array<Widget>;
    drawer?: Widget;
    endDrawer?: Widget;
    bottomNavigationBar?: Widget;
    bottomSheet?: Widget;
    backgroundColor?: Color;
    resizeToAvoidBottomPadding?: boolean;
    resizeToAvoidBottomInset?: boolean;
    primary?: boolean;
    drawerDragStartBehavior?: DragStartBehavior;
    extendBody?: boolean;
    extendBodyBehindAppBar?: boolean;
    drawerScrimColor?: Color;
    drawerEdgeDragWidth?: number;
    drawerEnableOpenDragGesture?: boolean;
    endDrawerEnableOpenDragGesture?: boolean;
    constructor(config: {
        key?: Key;
        appBar?: Widget;
        body?: Widget;
        floatingActionButton?: Widget;
        floatingActionButtonLocation?: FloatingActionButtonLocation;
        persistentFooterButtons?: Array<Widget>;
        drawer?: Widget;
        endDrawer?: Widget;
        bottomNavigationBar?: Widget;
        bottomSheet?: Widget;
        backgroundColor?: Color;
        resizeToAvoidBottomPadding?: boolean;
        resizeToAvoidBottomInset?: boolean;
        primary?: boolean;
        drawerDragStartBehavior?: DragStartBehavior;
        extendBody?: boolean;
        extendBodyBehindAppBar?: boolean;
        drawerScrimColor?: Color;
        drawerEdgeDragWidth?: number;
        drawerEnableOpenDragGesture?: boolean;
        endDrawerEnableOpenDragGesture?: boolean;
    });
}
export declare class ScaffoldState extends DartClass {
}
export declare class SafeArea extends Widget {
    key?: Key;
    child?: Widget;
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    minimum?: EdgeInsets;
    maintainBottomViewPadding?: boolean;
    constructor(config: {
        key?: Key;
        child: Widget;
        left?: boolean;
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        minimum?: EdgeInsets;
        maintainBottomViewPadding?: boolean;
    });
}
export declare class SliverSafeArea extends Widget {
    key?: Key;
    sliver?: Widget;
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    minimum?: EdgeInsets;
    constructor(config: {
        key?: Key;
        sliver: Widget;
        left?: boolean;
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        minimum?: EdgeInsets;
    });
}
export declare class Scrollbar extends Widget {
    key?: Key;
    child?: Widget;
    controller?: ScrollController;
    isAlwaysShown?: boolean;
    constructor(config: {
        key?: Key;
        child: Widget;
        controller?: ScrollController;
        isAlwaysShown?: boolean;
    });
}
export declare class SnackBar extends Widget {
    content?: Widget;
    backgroundColor?: Color;
    elevation?: number;
    shape?: any;
    behavior?: any;
    action?: any;
    duration?: Duration;
    animation?: any;
    onVisible?: OnCallback;
    key?: Widget;
    constructor(config: {
        key?: Widget;
        content: Widget;
        backgroundColor?: Color;
        elevation?: number;
        shape?: any;
        behavior?: any;
        action?: any;
        duration?: Duration;
        animation?: any;
        onVisible?: OnCallback;
    });
}
export declare class SnackBarAction extends Widget {
    key?: Widget;
    lable?: string;
    onPressed?: OnCallback;
    disabledTextColor?: Color;
    textColor?: Color;
    constructor(config: {
        key?: Widget;
        lable: string;
        onPressed?: OnCallback;
        disabledTextColor?: Color;
        textColor?: Color;
    });
}
export declare class SliverVisibility extends Widget {
    key?: Key;
    sliver?: Widget;
    replacementSliver?: Widget;
    visible?: boolean;
    maintainState?: boolean;
    maintainAnimation?: boolean;
    maintainSize?: boolean;
    maintainSemantics?: boolean;
    maintainInteractivity?: boolean;
    constructor(config: {
        key?: Key;
        sliver: Widget;
        replacementSliver?: Widget;
        visible?: boolean;
        maintainState?: boolean;
        maintainAnimation?: boolean;
        maintainSize?: boolean;
        maintainSemantics?: boolean;
        maintainInteractivity?: boolean;
    });
}
export declare class SelectableText extends Widget {
    data?: string | TextSpan;
    key?: Key;
    focusNode?: FocusNode;
    style?: TextStyle;
    strutStyle?: StrutStyle;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    textScaleFactor?: number;
    showCursor?: boolean;
    autofocus?: boolean;
    toolbarOptions?: ToolbarOptions;
    minLines?: number;
    maxLines?: number;
    cursorWidth?: number;
    cursorHeight?: number;
    cursorRadius?: Radius;
    cursorColor?: Color;
    dragStartBehavior?: DragStartBehavior;
    enableInteractiveSelection?: boolean;
    onTap?: OnCallback;
    scrollPhysics?: ScrollPhysics;
    textWidthBasis?: TextWidthBasis;
    constructor(data: string | TextSpan, config?: {
        key?: Key;
        focusNode?: FocusNode;
        style?: TextStyle;
        strutStyle?: StrutStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        textScaleFactor?: number;
        showCursor?: boolean;
        autofocus?: boolean;
        toolbarOptions?: ToolbarOptions;
        minLines?: number;
        maxLines?: number;
        cursorWidth?: number;
        cursorHeight?: number;
        cursorRadius?: Radius;
        cursorColor?: Color;
        dragStartBehavior?: DragStartBehavior;
        enableInteractiveSelection?: boolean;
        onTap?: OnCallback;
        scrollPhysics?: ScrollPhysics;
        textWidthBasis?: TextWidthBasis;
    });
    static rich(data: TextSpan, config?: {
        key?: Key;
        style?: TextStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        semanticsLabel?: string;
        textWidthBasis?: TextWidthBasis;
    }): SelectableText;
}
export declare class TableRow extends Widget {
    children?: Array<Widget>;
    decoration?: BoxDecoration;
    key?: Key;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        decoration?: BoxDecoration;
    });
}
export declare class TableCell extends Widget {
    child?: Widget;
    verticalAlignment?: TableCellVerticalAlignment;
    key?: Key;
    constructor(config: {
        key?: Key;
        child?: Widget;
        verticalAlignment?: TableCellVerticalAlignment;
    });
}
export declare class Transform extends Widget {
    child?: Widget;
    alignment?: Alignment;
    origin?: Offset;
    transform?: Matrix4;
    transformHitTests?: boolean;
    key?: Key;
    angle?: number;
    offset?: Offset;
    scale?: number;
    constructor(config?: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        origin?: Offset;
        transform: Matrix4;
        transformHitTests?: boolean;
    });
    static rotate(config: {
        key?: Key;
        child?: Widget;
        angle: number;
        alignment?: Alignment;
        origin?: Offset;
        transformHitTests?: boolean;
    }): Transform;
    static translate(config: {
        key?: Key;
        child?: Widget;
        offset: Offset;
        transformHitTests?: boolean;
    }): Transform;
    static scale(config: {
        key?: Key;
        child?: Widget;
        scale: number;
        alignment?: Alignment;
        origin?: Offset;
        transformHitTests?: boolean;
    }): Transform;
}
export declare class Tooltip extends Widget {
    key?: Key;
    message?: string;
    height?: number;
    padding?: EdgeInsets;
    margin?: EdgeInsets;
    verticalOffset?: number;
    preferBelow?: boolean;
    excludeFromSemantics?: boolean;
    decoration?: BoxDecoration;
    textStyle?: TextStyle;
    waitDuration?: Duration;
    showDuration?: Duration;
    child?: Widget;
    constructor(config: {
        key?: Key;
        message: string;
        height?: number;
        padding?: EdgeInsets;
        margin?: EdgeInsets;
        verticalOffset?: number;
        preferBelow?: boolean;
        excludeFromSemantics?: boolean;
        decoration?: BoxDecoration;
        textStyle?: TextStyle;
        waitDuration?: Duration;
        showDuration?: Duration;
        child?: Widget;
    });
}
export declare class Table extends Widget {
    children?: Array<Widget>;
    defaultColumnWidth?: TableColumnWidth;
    defaultVerticalAlignment?: TableCellVerticalAlignment;
    textDirection?: TextDecoration;
    border?: TableBorder;
    textBaseline?: TextBaseline;
    columnWidths?: Map<string, TableColumnWidth>;
    key?: Key;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        defaultColumnWidth?: TableColumnWidth;
        defaultVerticalAlignment?: TableCellVerticalAlignment;
        textDirection?: TextDecoration;
        border?: TableBorder;
        textBaseline?: TextBaseline;
        columnWidths?: Map<string, TableColumnWidth>;
    });
}
export declare class TabBar extends Widget {
    key?: Key;
    tabs?: Array<Widget>;
    onTap?: OnCallbackNumber;
    controller?: TabController;
    isScrollable?: boolean;
    indicatorColor?: Color;
    indicatorWeight?: number;
    indicatorPadding?: EdgeInsets;
    indicator?: BoxDecoration;
    indicatorSize?: TabBarIndicatorSize;
    labelColor?: Color;
    labelStyle?: TextStyle;
    labelPadding?: EdgeInsets;
    unselectedLabelColor?: Color;
    unselectedLabelStyle?: TextStyle;
    dragStartBehavior?: DragStartBehavior;
    physics?: ScrollPhysics;
    constructor(config: {
        key?: Key;
        tabs?: Array<Widget>;
        onTap?: OnCallbackNumber;
        controller?: TabController;
        isScrollable?: boolean;
        indicatorColor?: Color;
        indicatorWeight?: number;
        indicatorPadding?: EdgeInsets;
        indicator?: BoxDecoration;
        indicatorSize?: TabBarIndicatorSize;
        labelColor?: Color;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsets;
        unselectedLabelColor?: Color;
        unselectedLabelStyle?: TextStyle;
        dragStartBehavior?: DragStartBehavior;
        physics?: ScrollPhysics;
    });
}
export declare class Tab extends Widget {
    key?: Key;
    child?: Widget;
    text?: string;
    icon?: Widget;
    iconMargin?: EdgeInsets;
    constructor(config: {
        key?: Key;
        child?: Widget;
        text?: string;
        icon?: Widget;
        iconMargin?: EdgeInsets;
    });
}
export declare class TabBarView extends Widget {
    children?: Array<Widget>;
    controller?: TabController;
    physics?: ScrollPhysics;
    dragStartBehavior?: DragStartBehavior;
    key?: Key;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        controller?: TabController;
        physics?: ScrollPhysics;
        dragStartBehavior?: DragStartBehavior;
    });
}
export declare class TabPageSelectorIndicator extends Widget {
    key?: Key;
    backgroundColor?: Color;
    borderColor?: Color;
    size?: number;
    constructor(config: {
        key?: Key;
        backgroundColor?: Color;
        borderColor?: Color;
        size?: number;
    });
}
export declare class TabPageSelector extends Widget {
    key?: Key;
    color?: Color;
    selectedColor?: Color;
    indicatorSize?: number;
    controller?: TabController;
    constructor(config: {
        key?: Key;
        color?: Color;
        selectedColor?: Color;
        indicatorSize?: number;
        controller?: TabController;
    });
}
export declare class Title extends Widget {
    key?: Key;
    child?: Widget;
    title?: string;
    color?: Color;
    constructor(config: {
        key?: Key;
        child?: Widget;
        title?: string;
        color?: Color;
    });
}
export declare class Text extends Widget {
    data?: string | TextSpan;
    key?: Key;
    style?: TextStyle;
    strutStyle?: StrutStyle;
    textAlign?: TextAlign;
    textDirection?: TextDirection;
    softWrap?: boolean;
    overflow?: TextOverflow;
    textScaleFactor?: number;
    maxLines?: number;
    semanticsLabel?: string;
    textWidthBasis?: TextWidthBasis;
    constructor(data: string | TextSpan, config?: {
        key?: Key;
        style?: TextStyle;
        strutStyle?: StrutStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        semanticsLabel?: string;
        textWidthBasis?: TextWidthBasis;
    });
    static rich(data: TextSpan, config?: {
        key?: Key;
        style?: TextStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        semanticsLabel?: string;
        textWidthBasis?: TextWidthBasis;
    }): Text;
}
export declare class TextSpan extends Widget {
    children?: Array<Widget>;
    style?: TextStyle;
    text?: string;
    semanticsLabel?: string;
    constructor(config: {
        children?: Array<Widget>;
        style?: TextStyle;
        text?: string;
        semanticsLabel?: string;
    });
}
export declare class Texture extends Widget {
    key?: Key;
    textureId?: number;
    filterQuality?: FilterQuality;
    constructor(config: {
        key?: Key;
        textureId?: number;
        filterQuality?: FilterQuality;
    });
}
export declare class TextFormField extends Widget {
    key?: Key;
    controller?: TextEditingController;
    initialValue?: string;
    focusNode?: FocusNode;
    decoration?: InputDecoration;
    keyboardType?: TextInputType;
    textInputAction?: TextInputAction;
    textCapitalization?: TextCapitalization;
    style?: TextStyle;
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    textDirection?: TextDirection;
    readOnly?: boolean;
    toolbarOptions?: ToolbarOptions;
    showCursor?: boolean;
    autofocus?: boolean;
    obscuringCharacter?: string;
    obscureText?: boolean;
    autocorrect?: boolean;
    smartDashesType?: SmartDashesType;
    smartQuotesType?: SmartQuotesType;
    enableSuggestions?: boolean;
    autovalidate?: boolean;
    maxLines?: number;
    minLines?: number;
    expands?: boolean;
    maxLength?: number;
    maxLengthEnforced?: boolean;
    onChanged?: OnCallbackString;
    onTap?: OnCallback;
    onEditingComplete?: OnCallback;
    onFieldSubmitted?: OnCallbackString;
    onSaved?: OnCallbackString;
    validator?: OnCallbackString;
    enabled?: boolean;
    cursorWidth?: number;
    cursorRadius?: Radius;
    cursorColor?: Color;
    keyboardAppearance?: Brightness;
    scrollPadding?: EdgeInsets;
    dragStartBehavior?: DragStartBehavior;
    enableInteractiveSelection?: boolean;
    scrollPhysics?: ScrollPhysics;
    inputFormatters?: Array<TextInputFormatter>;
    strutStyle?: StrutStyle;
    constructor(config: {
        key?: Key;
        controller?: TextEditingController;
        initialValue?: string;
        focusNode?: FocusNode;
        decoration?: InputDecoration;
        keyboardType?: TextInputType;
        textInputAction?: TextInputAction;
        textCapitalization?: TextCapitalization;
        style?: TextStyle;
        textAlign?: TextAlign;
        textAlignVertical?: TextAlignVertical;
        textDirection?: TextDirection;
        readOnly?: boolean;
        toolbarOptions?: ToolbarOptions;
        showCursor?: boolean;
        autofocus?: boolean;
        obscuringCharacter?: string;
        obscureText?: boolean;
        autocorrect?: boolean;
        smartDashesType?: SmartDashesType;
        smartQuotesType?: SmartQuotesType;
        enableSuggestions?: boolean;
        autovalidate?: boolean;
        maxLines?: number;
        minLines?: number;
        expands?: boolean;
        maxLength?: number;
        maxLengthEnforced?: boolean;
        onChanged?: OnCallbackString;
        onTap?: OnCallback;
        onEditingComplete?: OnCallback;
        onFieldSubmitted?: OnCallbackString;
        onSaved?: OnCallbackString;
        validator?: OnCallbackString;
        enabled?: boolean;
        cursorWidth?: number;
        cursorRadius?: Radius;
        cursorColor?: Color;
        keyboardAppearance?: Brightness;
        scrollPadding?: EdgeInsets;
        dragStartBehavior?: DragStartBehavior;
        enableInteractiveSelection?: boolean;
        scrollPhysics?: ScrollPhysics;
        inputFormatters?: Array<TextInputFormatter>;
        strutStyle?: StrutStyle;
    });
}
export declare class TextField extends Widget {
    key?: Key;
    controller?: TextEditingController;
    focusNode?: FocusNode;
    decoration?: InputDecoration;
    keyboardType?: TextInputType;
    textInputAction?: TextInputAction;
    textCapitalization?: TextCapitalization;
    style?: TextStyle;
    textAlign?: TextAlign;
    textAlignVertical?: TextAlignVertical;
    textDirection?: TextDirection;
    readOnly?: boolean;
    toolbarOptions?: ToolbarOptions;
    showCursor?: boolean;
    autofocus?: boolean;
    obscuringCharacter?: string;
    obscureText?: boolean;
    autocorrect?: boolean;
    smartDashesType?: SmartDashesType;
    smartQuotesType?: SmartQuotesType;
    enableSuggestions?: boolean;
    maxLines?: number;
    minLines?: number;
    expands?: boolean;
    maxLength?: number;
    maxLengthEnforced?: boolean;
    onChanged?: OnCallbackString;
    onEditingComplete?: OnCallback;
    onSubmitted?: OnCallbackString;
    enabled?: boolean;
    cursorWidth?: number;
    cursorRadius?: Radius;
    cursorColor?: Color;
    selectionHeightStyle?: BoxHeightStyle;
    selectionWidthStyle?: BoxWidthStyle;
    keyboardAppearance?: Brightness;
    scrollPadding?: EdgeInsets;
    dragStartBehavior?: DragStartBehavior;
    enableInteractiveSelection?: boolean;
    onTap?: OnCallback;
    scrollController?: ScrollController;
    scrollPhysics?: ScrollPhysics;
    inputFormatters?: Array<TextInputFormatter>;
    strutStyle?: StrutStyle;
    constructor(config: {
        key?: Key;
        controller?: TextEditingController;
        focusNode?: FocusNode;
        decoration?: InputDecoration;
        keyboardType?: TextInputType;
        textInputAction?: TextInputAction;
        textCapitalization?: TextCapitalization;
        style?: TextStyle;
        textAlign?: TextAlign;
        textAlignVertical?: TextAlignVertical;
        textDirection?: TextDirection;
        readOnly?: boolean;
        toolbarOptions?: ToolbarOptions;
        showCursor?: boolean;
        autofocus?: boolean;
        obscuringCharacter?: string;
        obscureText?: boolean;
        autocorrect?: boolean;
        smartDashesType?: SmartDashesType;
        smartQuotesType?: SmartQuotesType;
        enableSuggestions?: boolean;
        maxLines?: number;
        minLines?: number;
        expands?: boolean;
        maxLength?: number;
        maxLengthEnforced?: boolean;
        onChanged?: OnCallbackString;
        onEditingComplete?: OnCallback;
        onSubmitted?: OnCallbackString;
        enabled?: boolean;
        cursorWidth?: number;
        cursorRadius?: Radius;
        cursorColor?: Color;
        selectionHeightStyle?: BoxHeightStyle;
        selectionWidthStyle?: BoxWidthStyle;
        keyboardAppearance?: Brightness;
        scrollPadding?: EdgeInsets;
        dragStartBehavior?: DragStartBehavior;
        enableInteractiveSelection?: boolean;
        onTap?: OnCallback;
        scrollController?: ScrollController;
        scrollPhysics?: ScrollPhysics;
        inputFormatters?: Array<TextInputFormatter>;
        strutStyle?: StrutStyle;
    });
}
export declare class UnconstrainedBox extends Widget {
    key?: Key;
    child?: Widget;
    alignment?: Alignment;
    textDirection?: TextDirection;
    constrainedAxis?: Axis;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        child?: Widget;
        alignment?: Alignment;
        textDirection?: TextDirection;
        constrainedAxis?: Axis;
        clipBehavior?: Clip;
    });
}
export declare class VerticalDivider extends Widget {
    key?: Key;
    width?: number;
    thickness?: number;
    indent?: number;
    endIndent?: number;
    color?: Color;
    constructor(config: {
        key?: Key;
        width?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
        color?: Color;
    });
}
export declare class Visibility extends Widget {
    key?: Key;
    child?: Widget;
    replacement?: Widget;
    visible?: boolean;
    maintainState?: boolean;
    maintainAnimation?: boolean;
    maintainSize?: boolean;
    maintainSemantics?: boolean;
    maintainInteractivity?: boolean;
    constructor(config: {
        child: Widget;
        key?: Key;
        replacement?: Widget;
        visible?: boolean;
        maintainState?: boolean;
        maintainAnimation?: boolean;
        maintainSize?: boolean;
        maintainSemantics?: boolean;
        maintainInteractivity?: boolean;
    });
}
export declare class Wrap extends Widget {
    children?: Array<Widget>;
    alignment?: WrapAlignment;
    spacing?: number;
    crossAxisAlignment?: WrapCrossAlignment;
    textDirection?: TextDecoration;
    direction?: Axis;
    verticalDirection?: VerticalDirection;
    runAlignment?: WrapAlignment;
    runSpacing?: number;
    key?: Key;
    clipBehavior?: Clip;
    constructor(config: {
        key?: Key;
        children?: Array<Widget>;
        alignment?: WrapAlignment;
        spacing?: number;
        crossAxisAlignment?: WrapCrossAlignment;
        textDirection?: TextDecoration;
        direction?: Axis;
        verticalDirection?: VerticalDirection;
        runAlignment?: WrapAlignment;
        runSpacing?: number;
        clipBehavior?: Clip;
    });
}
export declare class WillPopScope extends Widget {
    key?: Key;
    child?: Widget;
    onWillPop?: OnCallback;
    constructor(config: {
        child: Widget;
        onWillPop: OnCallback;
        key?: Key;
    });
}
export declare class WidgetSpan extends Widget {
    child?: Widget;
    alignment?: PlaceholderAlignment;
    baseline?: TextBaseline;
    style?: TextStyle;
    constructor(config: {
        child: Widget;
        alignment?: PlaceholderAlignment;
        baseline?: TextBaseline;
        style?: TextStyle;
    });
}
export declare class CupertinoActivityIndicator extends Widget {
    key?: Key;
    animating?: boolean;
    radius?: number;
    constructor(config: {
        key?: Key;
        animating?: boolean;
        radius?: number;
    });
}
export declare class CupertinoButton extends Widget {
    child?: Widget;
    onPressed?: OnCallback;
    padding?: EdgeInsets;
    color?: Color;
    disabledColor?: Color;
    minSize?: number;
    pressedOpacity?: number;
    borderRadius?: BorderRadius;
    key?: Key;
    constructor(config: {
        key?: Key;
        child: Widget;
        onPressed: OnCallback;
        padding?: EdgeInsets;
        color?: Color;
        disabledColor?: Color;
        minSize?: number;
        pressedOpacity?: number;
        borderRadius?: BorderRadius;
    });
    static filled(config: {
        key?: Key;
        child: Widget;
        onPressed: OnCallback;
        padding?: EdgeInsets;
        disabledColor?: Color;
        minSize?: number;
        pressedOpacity?: number;
        borderRadius?: BorderRadius;
    }): CupertinoButton;
}
export declare class CupertinoDialogAction extends Widget {
    key?: Key;
    isDefaultAction?: boolean;
    isDestructiveAction?: boolean;
    onPressed?: OnCallback;
    child?: Widget;
    textStyle?: TextStyle;
    constructor(config: {
        key?: Key;
        isDefaultAction?: boolean;
        isDestructiveAction?: boolean;
        onPressed?: OnCallback;
        child: Widget;
        textStyle?: TextStyle;
    });
}
export declare class CupertinoNavigationBar extends Widget {
    key?: Key;
    leading?: Widget;
    automaticallyImplyLeading?: boolean;
    automaticallyImplyMiddle?: boolean;
    previousPageTitle?: string;
    middle?: Widget;
    trailing?: Widget;
    border?: Border;
    backgroundColor?: Color;
    brightness?: Brightness;
    padding?: EdgeInsets;
    actionsForegroundColor?: Color;
    transitionBetweenRoutes?: boolean;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        automaticallyImplyLeading?: boolean;
        automaticallyImplyMiddle?: boolean;
        previousPageTitle?: string;
        middle?: Widget;
        trailing?: Widget;
        border?: Border;
        backgroundColor?: Color;
        brightness?: Brightness;
        padding?: EdgeInsets;
        actionsForegroundColor?: Color;
        transitionBetweenRoutes?: boolean;
    });
}
export declare class CupertinoNavigationBarBackButton extends Widget {
    key?: Key;
    color?: Color;
    previousPageTitle?: string;
    onPressed?: OnCallback;
    constructor(config: {
        key?: Key;
        color?: Color;
        previousPageTitle?: string;
        onPressed?: OnCallback;
    });
}
export declare class CupertinoSlider extends Widget {
    key?: Key;
    value?: number;
    onChanged?: OnCallbackNumber;
    onChangeStart?: OnCallbackNumber;
    onChangeEnd?: OnCallbackNumber;
    min?: number;
    max?: number;
    divisions?: number;
    activeColor?: Color;
    thumbColor?: Color;
    constructor(config: {
        key?: Key;
        value: number;
        onChanged: OnCallbackNumber;
        onChangeStart?: OnCallbackNumber;
        onChangeEnd?: OnCallbackNumber;
        min?: number;
        max?: number;
        divisions?: number;
        activeColor?: Color;
        thumbColor?: Color;
    });
}
export declare class CupertinoSwitch extends Widget {
    key?: Key;
    value?: boolean;
    onChanged?: OnCallbackBoolean;
    activeColor?: Color;
    trackColor?: Color;
    dragStartBehavior?: DragStartBehavior;
    constructor(config: {
        key?: Key;
        value: boolean;
        onChanged: OnCallbackBoolean;
        activeColor?: Color;
        trackColor?: Color;
        dragStartBehavior?: DragStartBehavior;
    });
}
export declare class CupertinoSegmentedControl extends Widget {
    key?: Key;
    children?: Array<Widget>;
    onValueChanged?: OnCallbackNumber;
    groupValue?: number;
    unselectedColor?: Color;
    selectedColor?: Color;
    borderColor?: Color;
    pressedColor?: Color;
    padding?: EdgeInsets;
    constructor(config: {
        key?: Key;
        children: Array<Widget>;
        onValueChanged: OnCallbackNumber;
        groupValue?: number;
        unselectedColor?: Color;
        selectedColor?: Color;
        borderColor?: Color;
        pressedColor?: Color;
        padding?: EdgeInsets;
    });
}
export declare class CupertinoSlidingSegmentedControl extends Widget {
    key?: Key;
    children?: Array<Widget>;
    onValueChanged?: OnCallbackNumber;
    groupValue?: number;
    thumbColor?: Color;
    backgroundColor?: Color;
    padding?: EdgeInsets;
    constructor(config: {
        key?: Key;
        children: Array<Widget>;
        onValueChanged: OnCallbackNumber;
        groupValue?: number;
        thumbColor?: Color;
        backgroundColor?: Color;
        padding?: EdgeInsets;
    });
}
export declare class CupertinoScrollbar extends Widget {
    key?: Key;
    child?: Widget;
    controller?: ScrollController;
    isAlwaysShown?: boolean;
    constructor(config: {
        key?: Key;
        child: Widget;
        controller?: ScrollController;
        isAlwaysShown?: boolean;
    });
}
export declare class CupertinoSliverNavigationBar extends Widget {
    key?: Key;
    leading?: Widget;
    largeTitle?: Widget;
    automaticallyImplyLeading?: boolean;
    automaticallyImplyTitle?: boolean;
    previousPageTitle?: string;
    middle?: Widget;
    trailing?: Widget;
    border?: Border;
    backgroundColor?: Color;
    brightness?: Brightness;
    padding?: EdgeInsets;
    actionsForegroundColor?: Color;
    transitionBetweenRoutes?: boolean;
    constructor(config: {
        key?: Key;
        leading?: Widget;
        largeTitle?: Widget;
        automaticallyImplyLeading?: boolean;
        automaticallyImplyTitle?: boolean;
        previousPageTitle?: string;
        middle?: Widget;
        trailing?: Widget;
        border?: Border;
        backgroundColor?: Color;
        brightness?: Brightness;
        padding?: EdgeInsets;
        actionsForegroundColor?: Color;
        transitionBetweenRoutes?: boolean;
    });
}
export declare class TestWidget extends Widget {
    colors?: Array<Color>;
    stops?: Array<number>;
    /**
     * @param config config:
        {
          colors:Array<Color>,
          stops?:Array<number>,
        }
     */
    constructor(config: {
        colors: Array<Color>;
        stops?: Array<number>;
    });
}
export declare class CupertinoTabBar extends Widget {
    key?: Key;
    items?: Array<BottomNavigationBarItem>;
    onTap?: OnCallbackNumber;
    currentIndex?: number;
    backgroundColor?: Color;
    activeColor?: Color;
    inactiveColor?: Color;
    iconSize?: number;
    border?: Border;
    constructor(config: {
        key?: Key;
        items: Array<BottomNavigationBarItem>;
        onTap?: OnCallbackNumber;
        currentIndex?: number;
        backgroundColor?: Color;
        activeColor?: Color;
        inactiveColor?: Color;
        iconSize?: number;
        border?: Border;
    });
}
export declare class CupertinoTabController extends DartClass {
    initialIndex?: number;
    constructor(config: {
        initialIndex?: number;
    });
}
export declare class CupertinoTabView extends Widget {
    key?: Key;
    defaultTitle?: string;
    child?: Widget;
    constructor(config: {
        key?: Key;
        defaultTitle?: string;
        child: Widget;
    });
}
export declare class CupertinoTheme extends Widget {
    key?: Key;
    child?: Widget;
    data?: CupertinoThemeData;
    constructor(config: {
        key?: Key;
        child: Widget;
        data: CupertinoThemeData;
    });
}
export declare class CupertinoTextThemeData extends DartClass {
    primaryColor?: Color;
    textStyle?: TextStyle;
    actionTextStyle?: TextStyle;
    tabLabelTextStyle?: TextStyle;
    navTitleTextStyle?: TextStyle;
    navLargeTitleTextStyle?: TextStyle;
    navActionTextStyle?: TextStyle;
    pickerTextStyle?: TextStyle;
    dateTimePickerTextStyle?: TextStyle;
    constructor(config: {
        primaryColor?: Color;
        textStyle?: TextStyle;
        actionTextStyle?: TextStyle;
        tabLabelTextStyle?: TextStyle;
        navTitleTextStyle?: TextStyle;
        navLargeTitleTextStyle?: TextStyle;
        navActionTextStyle?: TextStyle;
        pickerTextStyle?: TextStyle;
        dateTimePickerTextStyle?: TextStyle;
    });
}
export declare class EmptyDataWidget extends Widget {
    key?: Key;
    title?: string;
    imageName?: string;
    imageSize?: string;
    backgroundColor?: Color;
    titleStyle?: TextStyle;
    constructor(config?: {
        key?: Key;
        title?: string;
        imageName?: string;
        imageSize?: string;
        backgroundColor?: Color;
        titleStyle?: TextStyle;
    });
}
export declare abstract class ShowBaseDialog extends Widget {
}
export declare class ShowDialog extends ShowBaseDialog {
    barrierDismissible?: boolean;
    useSafeArea?: boolean;
    useRootNavigator?: boolean;
    child?: Widget;
    constructor(config: {
        barrierDismissible?: boolean;
        useSafeArea?: boolean;
        useRootNavigator?: boolean;
        child: Widget;
    });
}
export declare class AlertDialog extends Widget {
    key?: Key;
    title?: Widget;
    titlePadding?: EdgeInsets;
    titleTextStyle?: TextStyle;
    content?: Widget;
    contentPadding?: EdgeInsets;
    contentTextStyle?: TextStyle;
    actions?: Array<Widget>;
    actionsPadding?: EdgeInsets;
    actionsOverflowDirection?: VerticalDirection;
    actionsOverflowButtonSpacing?: number;
    buttonPadding?: EdgeInsets;
    backgroundColor?: Color;
    elevation?: number;
    semanticLabel?: string;
    insetPadding?: EdgeInsets;
    clipBehavior?: Clip;
    shape?: ShapeBorder;
    scrollable?: boolean;
    constructor(config: {
        key?: Key;
        title?: Widget;
        titlePadding?: EdgeInsets;
        titleTextStyle?: TextStyle;
        content?: Widget;
        contentPadding?: EdgeInsets;
        contentTextStyle?: TextStyle;
        actions?: Array<Widget>;
        actionsPadding?: EdgeInsets;
        actionsOverflowDirection?: VerticalDirection;
        actionsOverflowButtonSpacing?: number;
        buttonPadding?: EdgeInsets;
        backgroundColor?: Color;
        elevation?: number;
        semanticLabel?: string;
        insetPadding?: EdgeInsets;
        clipBehavior?: Clip;
        shape?: ShapeBorder;
        scrollable?: boolean;
    });
}
export declare class SimpleDialog extends Widget {
    key?: Key;
    title?: Widget;
    titlePadding?: EdgeInsets;
    titleTextStyle?: TextStyle;
    children?: Array<Widget>;
    contentPadding?: EdgeInsets;
    backgroundColor?: Color;
    elevation?: number;
    semanticLabel?: string;
    shape?: ShapeBorder;
    constructor(config: {
        key?: Key;
        title?: Widget;
        titlePadding?: EdgeInsets;
        titleTextStyle?: TextStyle;
        children?: Array<Widget>;
        contentPadding?: EdgeInsets;
        backgroundColor?: Color;
        elevation?: number;
        semanticLabel?: string;
        shape?: ShapeBorder;
    });
}
export declare class ShowCupertinoDialog extends ShowBaseDialog {
    barrierDismissible?: boolean;
    useRootNavigator?: boolean;
    child?: Widget;
    constructor(config: {
        barrierDismissible?: boolean;
        useRootNavigator?: boolean;
        child: Widget;
    });
}
export declare class CupertinoAlertDialog extends Widget {
    key?: Key;
    title?: Widget;
    content?: Widget;
    actions?: Array<CupertinoDialogAction>;
    scrollController?: ScrollController;
    actionScrollController?: ScrollController;
    insetAnimationDuration?: Duration;
    insetAnimationCurve?: Curve;
    /**
     * @param config config:
        
     */
    constructor(config: {
        key?: Key;
        title?: Widget;
        content?: Widget;
        actions?: Array<CupertinoDialogAction>;
        scrollController?: ScrollController;
        actionScrollController?: ScrollController;
        insetAnimationDuration?: Duration;
        insetAnimationCurve?: Curve;
    });
}
export declare class ShowGeneralDialog extends ShowBaseDialog {
    barrierDismissible?: boolean;
    useRootNavigator?: boolean;
    barrierLabel?: string;
    barrierColor?: Color;
    transitionDuration?: Duration;
    child?: Widget;
    constructor(config: {
        barrierDismissible?: boolean;
        useRootNavigator?: boolean;
        barrierLabel?: string;
        barrierColor?: Color;
        transitionDuration?: Duration;
        child: Widget;
    });
}
export declare class ShowModalBottomSheet extends ShowBaseDialog {
    backgroundColor?: Color;
    elevation?: number;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    barrierColor?: Color;
    isScrollControlled?: boolean;
    useRootNavigator?: boolean;
    isDismissible?: boolean;
    enableDrag?: boolean;
    child?: Widget;
    constructor(config: {
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        barrierColor?: Color;
        isScrollControlled?: boolean;
        useRootNavigator?: boolean;
        isDismissible?: boolean;
        enableDrag?: boolean;
        child?: Widget;
    });
}
export declare class BottomSheet extends Widget {
    key?: Key;
    enableDrag?: boolean;
    backgroundColor?: Color;
    elevation?: number;
    shape?: ShapeBorder;
    clipBehavior?: Clip;
    onClosing?: OnCallback;
    child?: Widget;
    constructor(config: {
        key?: Key;
        enableDrag?: boolean;
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
        onClosing?: OnCallback;
        child?: Widget;
    });
}
export declare class ShowCupertinoModalPopup extends ShowBaseDialog {
    useRootNavigator?: boolean;
    semanticsDismissible?: boolean;
    child?: Widget;
    /**
       * @param config config:
          
       */
    constructor(config: {
        useRootNavigator?: boolean;
        semanticsDismissible?: boolean;
        child: Widget;
    });
}
export declare class CupertinoActionSheet extends Widget {
    key?: Key;
    title?: Widget;
    message?: Widget;
    actions?: Array<Widget>;
    messageScrollController?: ScrollController;
    actionScrollController?: ScrollController;
    cancelButton?: Widget;
    constructor(config: {
        key?: Key;
        title?: Widget;
        message?: Widget;
        actions?: Array<Widget>;
        messageScrollController?: ScrollController;
        actionScrollController?: ScrollController;
        cancelButton?: Widget;
    });
}
export declare class CupertinoActionSheetAction extends Widget {
    key?: Key;
    child?: Widget;
    onPressed?: OnCallback;
    isDefaultAction?: boolean;
    isDestructiveAction?: boolean;
    constructor(config: {
        key?: Key;
        child: Widget;
        onPressed: OnCallback;
        isDefaultAction?: boolean;
        isDestructiveAction?: boolean;
    });
}
export declare class SimpleDialogButtonInfo extends Widget {
    text?: string;
    textStyle?: TextStyle;
    constructor(config: {
        text?: string;
        textStyle?: TextStyle;
    });
}
export declare enum CustomAlertDialogAnimationType {
    fromRight = "fromRight",
    fromLeft = "fromLeft",
    fromTop = "fromTop",
    fromBottom = "fromBottom",
    grow = "grow",
    shrink = "shrink"
}
export declare class CustomAlertDialogButton extends Widget {
    child?: Widget;
    width?: number;
    height?: number;
    bgColor?: Color;
    gradient?: Gradient;
    radius?: BorderRadius;
    onPressed?: OnCallback;
    constructor(config: {
        child?: Widget;
        width?: number;
        height?: number;
        bgColor?: Color;
        gradient?: Gradient;
        radius?: BorderRadius;
        onPressed?: OnCallback;
    });
}
export declare class CustomAlertDialogStyle extends Widget {
    animationType?: CustomAlertDialogAnimationType;
    animationDuration?: Duration;
    alertBorder?: ShapeBorder;
    isCloseButton?: boolean;
    isOverlayTapDismiss?: boolean;
    backgroundColor?: Color;
    overlayColor?: Color;
    buttonSpace?: number;
    titleHeight?: number;
    titleStyle?: TextStyle;
    descStyle?: TextStyle;
    buttonAreaPadding?: EdgeInsets;
    constraints?: BoxConstraints;
    constructor(config: {
        animationType?: CustomAlertDialogAnimationType;
        animationDuration?: Duration;
        alertBorder?: ShapeBorder;
        isCloseButton?: boolean;
        isOverlayTapDismiss?: boolean;
        backgroundColor?: Color;
        overlayColor?: Color;
        buttonSpace?: number;
        titleHeight?: number;
        titleStyle?: TextStyle;
        descStyle?: TextStyle;
        buttonAreaPadding?: EdgeInsets;
        constraints?: BoxConstraints;
    });
}
export declare class ShowCustomAlertDialog extends ShowBaseDialog {
    style?: CustomAlertDialogStyle;
    image?: Widget;
    title?: string;
    desc?: string;
    content?: Widget;
    actions?: Array<CustomAlertDialogButton>;
    closeFunction?: OnCallback;
    constructor(config: {
        style?: CustomAlertDialogStyle;
        image?: Widget;
        title?: string;
        desc?: string;
        content?: Widget;
        actions?: Array<CustomAlertDialogButton>;
        closeFunction?: OnCallback;
    });
}
export declare class SimpleCustomDialogButtonInfo extends ShowBaseDialog {
    text?: string;
    textStyle?: TextStyle;
    bgColor?: Color;
    constructor(config: {
        text?: string;
        textStyle?: TextStyle;
        bgColor?: Color;
    });
}
export declare class ShowSimpleCustomDialog extends ShowBaseDialog {
    style?: CustomAlertDialogStyle;
    image?: Widget;
    title?: string;
    desc?: string;
    content?: Widget;
    actions?: Array<Widget>;
    onTap?: OnCallbackNumber;
    constructor(config: {
        style?: CustomAlertDialogStyle;
        image?: Widget;
        title?: string;
        desc?: string;
        content?: Widget;
        actions?: Array<Widget>;
        onTap?: OnCallbackNumber;
    });
}
export declare class ShowSimpleAlertDialog extends ShowBaseDialog {
    title?: string;
    titleContent?: Widget;
    desc?: string;
    descContent?: Widget;
    actions?: Array<SimpleDialogButtonInfo>;
    onTap?: OnCallbackNumber;
    barrierDismissible?: boolean;
    constructor(config: {
        title?: string;
        titleContent?: Widget;
        desc?: string;
        descContent?: Widget;
        actions: Array<SimpleDialogButtonInfo>;
        onTap?: OnCallbackNumber;
        barrierDismissible?: boolean;
    });
}
export declare class ShowSimpleCupertinoDialog extends ShowBaseDialog {
    title?: string;
    titleContent?: Widget;
    desc?: string;
    descContent?: Widget;
    actions?: Array<SimpleDialogButtonInfo>;
    onTap?: OnCallbackNumber;
    barrierDismissible?: boolean;
    constructor(config: {
        title?: string;
        titleContent?: Widget;
        desc?: string;
        descContent?: Widget;
        actions: Array<SimpleDialogButtonInfo>;
        onTap?: OnCallbackNumber;
        barrierDismissible?: boolean;
    });
}
export declare class ShowCustomActionSheet extends ShowBaseDialog {
    title?: string;
    titleContent?: Widget;
    itemList?: Array<string>;
    onTap?: OnCallbackNumber;
    constructor(config: {
        title?: string;
        titleContent?: Widget;
        itemList: Array<string>;
        onTap: OnCallbackNumber;
    });
}
export declare class ShowSimpleActionSheet extends ShowBaseDialog {
    title?: string;
    titleContent?: Widget;
    itemList?: Array<string>;
    onTap?: OnCallbackNumber;
    constructor(config: {
        title?: string;
        titleContent?: Widget;
        itemList: Array<string>;
        onTap: OnCallbackNumber;
    });
}
export declare class ShowCustomPopupMenu extends ShowBaseDialog {
    superkey?: BindKey;
    menuList?: Array<CustomPopupMenuItem>;
    barrierDismissible?: boolean;
    bgColor?: Color;
    textFontSize?: number;
    onTap?: OnCallbackNumber;
    constructor(config: {
        superkey: BindKey;
        menuList?: Array<CustomPopupMenuItem>;
        barrierDismissible?: boolean;
        bgColor?: Color;
        textFontSize?: number;
        onTap?: OnCallbackNumber;
    });
}
export declare class CustomPopupMenuItem extends Widget {
    title?: string;
    titleTextStyle?: TextStyle;
    image?: Widget;
    constructor(config: {
        title: string;
        titleTextStyle?: TextStyle;
        image?: Widget;
    });
}
export declare class ShowDatePicker extends ShowBaseDialog {
    initialDate?: number;
    firstDate?: number;
    lastDate?: number;
    currentDate?: number;
    initialEntryMode?: DatePickerEntryMode;
    helpText?: string;
    cancelText?: string;
    confirmText?: string;
    useRootNavigator?: boolean;
    textDirection?: TextDirection;
    initialDatePickerMode?: DatePickerMode;
    errorFormatText?: string;
    errorInvalidText?: string;
    fieldHintText?: string;
    fieldLabelText?: string;
    themeData?: ThemeData;
    isMaterialAppTheme?: boolean;
    constructor(config: {
        initialDate?: number;
        firstDate?: number;
        lastDate?: number;
        currentDate?: number;
        initialEntryMode?: DatePickerEntryMode;
        helpText?: string;
        cancelText?: string;
        confirmText?: string;
        useRootNavigator?: boolean;
        textDirection?: TextDirection;
        initialDatePickerMode?: DatePickerMode;
        errorFormatText?: string;
        errorInvalidText?: string;
        fieldHintText?: string;
        fieldLabelText?: string;
        themeData?: ThemeData;
        isMaterialAppTheme?: boolean;
    });
}
export declare class Dialog extends DartClass {
    static instance: Dialog;
    constructor();
    static getInstance(): Dialog;
    static show(baseWidget: BaseWidget, child: ShowBaseDialog): Promise<ResponseModel>;
    static dismiss(baseWidget: BaseWidget): void;
}
export declare class Loading extends DartClass {
    static instance: Loading;
    constructor();
    static getInstance(): Loading;
    static showSuccess(config: {
        info: string;
        duration?: Duration;
        alignment?: Alignment;
    }): void;
    static showError(config: {
        info: string;
        duration?: Duration;
        alignment?: Alignment;
    }): void;
    static showInfo(config: {
        info: string;
        duration?: Duration;
        alignment?: Alignment;
    }): void;
    static showToast(config: {
        info: string;
        duration?: Duration;
        alignment?: Alignment;
    }): void;
    static show(config: {
        info: string;
        alignment?: Alignment;
    }): void;
    static showProgress(config: {
        value: number;
        alignment?: Alignment;
    }): void;
    static dismiss(config?: {
        animation?: boolean;
    }): void;
}
export declare class Sp extends DartClass {
    static instance: Sp;
    constructor();
    static getInstance(): Sp;
    static getBool(config: {
        key: string;
        defaultValue?: boolean;
    }): Promise<boolean>;
    static getInt(config: {
        key: string;
        defaultValue?: number;
    }): Promise<number>;
    static getDouble(config: {
        key: string;
        defaultValue?: number;
    }): Promise<number>;
    static getString(config: {
        key: string;
        defaultValue?: string;
    }): Promise<string>;
    static clear(): Promise<boolean | undefined>;
    static remove(): Promise<boolean | undefined>;
    static setBool(config: {
        key: string;
        value: boolean;
    }): Promise<boolean | undefined>;
    static setDouble(config: {
        key: string;
        value: number;
    }): Promise<boolean | undefined>;
    static setInt(config: {
        key: string;
        value: number;
    }): Promise<boolean | undefined>;
    static setString(config: {
        key: string;
        value: string;
    }): Promise<boolean | undefined>;
}
export declare class ScreenInfo extends DartClass {
    static uiWidthPx: number;
    static uiHeightPx: number;
    static uiDensity: number;
    static uiWidth: number;
    static uiHeight: number;
    static screenWidth: number;
    static screenHeight: number;
    static screenWidthPx: number;
    static screenHeightPx: number;
    static screenDensity: number;
    static statusBarHeight: number;
    static bottomBarHeight: number;
    static appBarHeight: number;
    static dpRatio: number;
    static pxRatio: number;
    static textScaleFactor: number;
    static instance: ScreenInfo;
    constructor();
    static getInstance(): ScreenInfo;
    static getValueWithDp(dp: number, isRatio?: boolean): number;
    static getValueWithPx(px: number, isRatio?: boolean): number;
    updateInfo(): Promise<void>;
}
export declare class PackageInfo extends DartClass {
    static appName: string;
    static packageName: string;
    static version: string;
    static buildNumber: string;
    static instance: PackageInfo;
    constructor();
    static getInstance(): PackageInfo;
    updateInfo(): Promise<void>;
}
export declare class Wakelock extends DartClass {
    static instance: Wakelock;
    constructor();
    static getInstance(): Wakelock;
    static disable(): Promise<boolean | undefined>;
    static enable(): Promise<boolean | undefined>;
    static isEnabled(): Promise<boolean>;
}
export declare class Uuid extends DartClass {
    static instance: Uuid;
    constructor();
    static getInstance(): Uuid;
    /**
    *  Generate a v1 (time-based) id
    */
    static v1(): Promise<string | undefined>;
    /**
    *  Generate a v4 (random) id
    */
    static v4(): Promise<string | undefined>;
    /**
    * Generate a v5 (namespace-name-sha1-based) id
    * @param namespace
    * @param v5Name
    */
    static v5(namespace: string, v5Name: string): Promise<string | undefined>;
}
export declare class FocusScope extends DartClass {
    constructor();
    static requestFocus(): void;
    static unfocus(): void;
}
export declare class UrlLauncher extends DartClass {
    static instance: UrlLauncher;
    constructor();
    static getInstance(): UrlLauncher;
    static openUrl(config: {
        urlString: string;
        forceSafariVC?: boolean;
        forceWebView?: boolean;
        enableJavaScript?: boolean;
        enableDomStorage?: boolean;
        universalLinksOnly?: boolean;
        headers?: Map<string, string>;
        statusBarBrightness?: Brightness;
        webOnlyWindowName?: string;
    }): Promise<boolean | undefined>;
}
export declare type OnCallbackDioProgress = (progress: number, total: number) => void;
export declare enum DioResponseType {
    json = "json",
    stream = "stream",
    plain = "plain",
    bytes = "bytes"
}
export declare class DioBaseOptions extends DartClass {
    method?: string;
    connectTimeout?: number;
    receiveTimeout?: number;
    sendTimeout?: number;
    baseUrl?: string;
    queryParameters?: Map<string, any>;
    extra?: Map<string, any>;
    headers?: Map<string, any>;
    responseType?: DioResponseType;
    receiveDataWhenStatusError?: boolean;
    followRedirects?: boolean;
    maxRedirects?: number;
    constructor(config?: {
        method?: string;
        connectTimeout?: number;
        receiveTimeout?: number;
        sendTimeout?: number;
        baseUrl?: string;
        queryParameters?: Map<string, any>;
        extra?: Map<string, any>;
        headers?: Map<string, any>;
        responseType?: DioResponseType;
        receiveDataWhenStatusError?: boolean;
        followRedirects?: boolean;
        maxRedirects?: number;
    });
}
export declare class DioOptions extends DartClass {
    method?: string;
    receiveTimeout?: number;
    sendTimeout?: number;
    baseUrl?: string;
    extra?: Map<string, any>;
    headers?: Map<string, any>;
    responseType?: DioResponseType;
    receiveDataWhenStatusError?: boolean;
    followRedirects?: boolean;
    maxRedirects?: number;
    constructor(config?: {
        method?: string;
        connectTimeout?: number;
        receiveTimeout?: number;
        sendTimeout?: number;
        baseUrl?: string;
        extra?: Map<string, any>;
        headers?: Map<string, any>;
        responseType?: DioResponseType;
        receiveDataWhenStatusError?: boolean;
        followRedirects?: boolean;
        maxRedirects?: number;
    });
}
export declare class Dio extends DartClass {
    options?: DioBaseOptions;
    constructor(options?: DioBaseOptions);
    static instance: Dio;
    static getInstance(): Dio;
    get(config: {
        path?: string;
        queryParameters?: Map<string, any>;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
    getUri(config: {
        uri?: Uri;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
    post(config: {
        path?: string;
        data?: any;
        queryParameters?: Map<string, any>;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
    postUri(config: {
        uri?: Uri;
        data?: any;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
    request(config: {
        path?: string;
        data?: any;
        queryParameters?: Map<string, any>;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
    requestUri(config: {
        uri?: Uri;
        data?: any;
        options?: DioOptions;
    }): Promise<ResponseModel | undefined>;
}
export declare enum PullToRefreshStyle {
    Behind = "Behind",
    UnFollow = "UnFollow",
    Follow = "Follow",
    Front = "Front"
}
export declare enum PullToRefreshStatus {
    idle = "idle",
    canRefresh = "canRefresh",
    refreshing = "refreshing",
    completed = "completed",
    failed = "failed",
    canTwoLevel = "canTwoLevel",
    twoLevelOpening = "twoLevelOpening",
    twoLeveling = "twoLeveling",
    twoLevelClosing = "twoLevelClosing"
}
export declare enum PullToRefreshLoadStatus {
    idle = "idle",
    canLoading = "canLoading",
    loading = "loading",
    noMore = "noMore",
    failed = "failed"
}
export declare enum PullToRefreshIconPosition {
    left = "left",
    right = "right",
    top = "top",
    bottom = "bottom"
}
export declare enum PullToRefreshLoadStyle {
    ShowAlways = "ShowAlways",
    HideAlways = "HideAlways",
    ShowWhenLoading = "ShowWhenLoading"
}
export declare abstract class PullToRefreshHeader extends Widget {
}
export declare class PullToRefreshClassicHeader extends PullToRefreshHeader {
    key?: Key;
    refreshStyle?: PullToRefreshStyle;
    height?: number;
    completeDuration?: Duration;
    textStyle?: TextStyle;
    releaseText?: string;
    refreshingText?: string;
    canTwoLevelIcon?: Widget;
    twoLevelView?: Widget;
    canTwoLevelText?: string;
    completeText?: string;
    failedText?: string;
    idleText?: string;
    iconPos?: PullToRefreshIconPosition;
    spacing?: number;
    refreshingIcon?: Widget;
    failedIcon?: Widget;
    completeIcon?: Widget;
    idleIcon?: Widget;
    releaseIcon?: Widget;
    constructor(config?: {
        key?: Key;
        refreshStyle?: PullToRefreshStyle;
        height?: number;
        completeDuration?: Duration;
        textStyle?: TextStyle;
        releaseText?: string;
        refreshingText?: string;
        canTwoLevelIcon?: Widget;
        twoLevelView?: Widget;
        canTwoLevelText?: string;
        completeText?: string;
        failedText?: string;
        idleText?: string;
        iconPos?: PullToRefreshIconPosition;
        spacing?: number;
        refreshingIcon?: Widget;
        failedIcon?: Widget;
        completeIcon?: Widget;
        idleIcon?: Widget;
        releaseIcon?: Widget;
    });
}
export declare class PullToRefreshWaterDropHeader extends PullToRefreshHeader {
    key?: Key;
    refresh?: Widget;
    complete?: Widget;
    completeDuration?: Duration;
    failed?: Widget;
    waterDropColor?: Color;
    idleIcon?: Widget;
    constructor(config?: {
        key?: Key;
        refresh?: Widget;
        complete?: Widget;
        completeDuration?: Duration;
        failed?: Widget;
        waterDropColor?: Color;
        idleIcon?: Widget;
    });
}
export declare class PullToRefreshMaterialClassicHeader extends PullToRefreshHeader {
    key?: Key;
    height?: number;
    semanticsLabel?: string;
    semanticsValue?: string;
    color?: Color;
    offset?: number;
    distance?: number;
    backgroundColor?: Color;
    constructor(config?: {
        key?: Key;
        height?: number;
        semanticsLabel?: string;
        semanticsValue?: string;
        color?: Color;
        offset?: number;
        distance?: number;
        backgroundColor?: Color;
    });
}
export declare class PullToRefreshWaterDropMaterialHeader extends PullToRefreshHeader {
    key?: Key;
    height?: number;
    semanticsLabel?: string;
    semanticsValue?: string;
    color?: Color;
    offset?: number;
    distance?: number;
    backgroundColor?: Color;
    constructor(config?: {
        key?: Key;
        height?: number;
        semanticsLabel?: string;
        semanticsValue?: string;
        color?: Color;
        offset?: number;
        distance?: number;
        backgroundColor?: Color;
    });
}
export declare abstract class PullToRefreshFooter extends Widget {
}
export declare class PullToRefreshClassicFooter extends Widget {
    key?: Key;
    onClick?: OnCallback;
    loadStyle?: PullToRefreshLoadStyle;
    height?: number;
    textStyle?: TextStyle;
    loadingText?: string;
    noDataText?: string;
    noMoreIcon?: Widget;
    idleText?: string;
    failedText?: string;
    canLoadingText?: string;
    failedIcon?: Widget;
    iconPos?: PullToRefreshIconPosition;
    spacing?: number;
    completeDuration?: Duration;
    loadingIcon?: Widget;
    canLoadingIcon?: Widget;
    idleIcon?: Widget;
    constructor(config?: {
        key?: Key;
        onClick?: OnCallback;
        loadStyle?: PullToRefreshLoadStyle;
        height?: number;
        textStyle?: TextStyle;
        loadingText?: string;
        noDataText?: string;
        noMoreIcon?: Widget;
        idleText?: string;
        failedText?: string;
        canLoadingText?: string;
        failedIcon?: Widget;
        iconPos?: PullToRefreshIconPosition;
        spacing?: number;
        completeDuration?: Duration;
        loadingIcon?: Widget;
        canLoadingIcon?: Widget;
        idleIcon?: Widget;
    });
}
export declare class PullToRefreshConfiguration extends Widget {
    child?: Widget;
    headerBuilder?: Widget;
    footerBuilder?: Widget;
    dragSpeedRatio?: number;
    shouldFooterFollowWhenNotFull?: string;
    enableScrollWhenTwoLevel?: boolean;
    enableLoadingWhenNoData?: boolean;
    enableBallisticRefresh?: boolean;
    springDescription?: SpringDescription;
    enableScrollWhenRefreshCompleted?: boolean;
    enableLoadingWhenFailed?: boolean;
    twiceTriggerDistance?: number;
    closeTwoLevelDistance?: number;
    skipCanRefresh?: boolean;
    autoLoad?: boolean;
    maxOverScrollExtent?: number;
    enableBallisticLoad?: boolean;
    maxUnderScrollExtent?: number;
    headerTriggerDistance?: number;
    footerTriggerDistance?: number;
    hideFooterWhenNotFull?: boolean;
    enableRefreshVibrate?: boolean;
    enableLoadMoreVibrate?: boolean;
    topHitBoundary?: number;
    bottomHitBoundary?: number;
    constructor(config?: {
        child?: Widget;
        headerBuilder?: Widget;
        footerBuilder?: Widget;
        dragSpeedRatio?: number;
        shouldFooterFollowWhenNotFull?: string;
        enableScrollWhenTwoLevel?: boolean;
        enableLoadingWhenNoData?: boolean;
        enableBallisticRefresh?: boolean;
        springDescription?: SpringDescription;
        enableScrollWhenRefreshCompleted?: boolean;
        enableLoadingWhenFailed?: boolean;
        twiceTriggerDistance?: number;
        closeTwoLevelDistance?: number;
        skipCanRefresh?: boolean;
        autoLoad?: boolean;
        maxOverScrollExtent?: number;
        enableBallisticLoad?: boolean;
        maxUnderScrollExtent?: number;
        headerTriggerDistance?: number;
        footerTriggerDistance?: number;
        hideFooterWhenNotFull?: boolean;
        enableRefreshVibrate?: boolean;
        enableLoadMoreVibrate?: boolean;
        topHitBoundary?: number;
        bottomHitBoundary?: number;
    });
}
export declare class PullToRefreshController extends DartClass {
    initialRefreshStatus?: PullToRefreshStatus;
    initialRefresh?: boolean;
    initialLoadStatus?: PullToRefreshLoadStatus;
    constructor(config: {
        initialRefreshStatus?: PullToRefreshStatus;
        initialRefresh?: boolean;
        initialLoadStatus?: PullToRefreshLoadStatus;
    });
    dispose(): void;
    loadComplete(): void;
    loadFailed(): void;
    loadNoData(): void;
    refreshCompleted(config?: {
        resetFooterState?: boolean;
    }): void;
    refreshFailed(): void;
    refreshToIdle(): void;
    requestLoading(config?: {
        duration?: Duration;
        needMove?: boolean;
        curve?: Curve;
    }): void;
    requestRefresh(config?: {
        duration?: Duration;
        needMove?: boolean;
        curve?: Curve;
    }): void;
    requestTwoLevel(config?: {
        duration?: Duration;
        curve?: Curve;
    }): void;
    resetNoData(): void;
    twoLevelComplete(config?: {
        duration?: Duration;
        curve?: Curve;
    }): void;
}
export declare class PullToRefreshRefresher extends Widget {
    key?: Key;
    controller?: PullToRefreshController;
    child?: Widget;
    header?: PullToRefreshHeader;
    footer?: PullToRefreshFooter;
    enablePullDown?: boolean;
    enablePullUp?: boolean;
    enableTwoLevel?: boolean;
    onRefresh?: OnCallback;
    onLoading?: OnCallback;
    onTwoLevel?: OnCallback;
    onOffsetChange?: OnCallbackString;
    dragStartBehavior?: DragStartBehavior;
    primary?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    reverse?: boolean;
    physics?: ScrollPhysics;
    scrollDirection?: Axis;
    scrollController?: ScrollController;
    constructor(config?: {
        key?: Key;
        controller: PullToRefreshController;
        child?: Widget;
        header?: PullToRefreshHeader;
        footer?: PullToRefreshFooter;
        enablePullDown?: boolean;
        enablePullUp?: boolean;
        enableTwoLevel?: boolean;
        onRefresh?: OnCallback;
        onLoading?: OnCallback;
        onTwoLevel?: OnCallback;
        onOffsetChange?: OnCallbackString;
        dragStartBehavior?: DragStartBehavior;
        primary?: boolean;
        cacheExtent?: number;
        semanticChildCount?: number;
        reverse?: boolean;
        physics?: ScrollPhysics;
        scrollDirection?: Axis;
        scrollController?: ScrollController;
    });
}
export declare class CachedNetworkImage extends Widget {
    key?: Key;
    imageUrl?: string;
    httpHeaders?: Map<string, string>;
    placeholder?: Widget;
    errorWidget?: Widget;
    fadeOutDuration?: Duration;
    fadeOutCurve?: Curve;
    fadeInDuration?: Duration;
    fadeInCurve?: Curve;
    width?: number;
    height?: number;
    fit?: BoxFit;
    alignment?: Alignment;
    repeat?: ImageRepeat;
    matchTextDirection?: boolean;
    useOldImageOnUrlChange?: boolean;
    color?: Color;
    filterQuality?: FilterQuality;
    colorBlendMode?: BlendMode;
    placeholderFadeInDuration?: Duration;
    memCacheWidth?: number;
    memCacheHeight?: number;
    cacheKey?: string;
    constructor(config?: {
        key?: Key;
        imageUrl: string;
        httpHeaders?: Map<string, string>;
        placeholder?: Widget;
        errorWidget?: Widget;
        fadeOutDuration?: Duration;
        fadeOutCurve?: Curve;
        fadeInDuration?: Duration;
        fadeInCurve?: Curve;
        width?: number;
        height?: number;
        fit?: BoxFit;
        alignment?: Alignment;
        repeat?: ImageRepeat;
        matchTextDirection?: boolean;
        useOldImageOnUrlChange?: boolean;
        color?: Color;
        filterQuality?: FilterQuality;
        colorBlendMode?: BlendMode;
        placeholderFadeInDuration?: Duration;
        memCacheWidth?: number;
        memCacheHeight?: number;
        cacheKey?: string;
    });
}
export declare abstract class EasyRefreshHeader extends Widget {
}
export declare class EasyRefreshClassicalHeader extends EasyRefreshHeader {
    key?: Key;
    extent?: number;
    triggerDistance?: number;
    float?: boolean;
    completeDuration?: Duration;
    enableInfiniteRefresh?: boolean;
    enableHapticFeedback?: boolean;
    overScroll?: boolean;
    alignment?: Alignment;
    refreshText?: string;
    refreshReadyText?: string;
    refreshingText?: string;
    refreshedText?: string;
    refreshFailedText?: string;
    noMoreText?: string;
    showInfo?: boolean;
    infoText?: string;
    bgColor?: Color;
    textColor?: Color;
    infoColor?: Color;
    constructor(config?: {
        key?: Key;
        extent?: number;
        triggerDistance?: number;
        float?: boolean;
        completeDuration?: Duration;
        enableInfiniteRefresh?: boolean;
        enableHapticFeedback?: boolean;
        overScroll?: boolean;
        alignment?: Alignment;
        refreshText?: string;
        refreshReadyText?: string;
        refreshingText?: string;
        refreshedText?: string;
        refreshFailedText?: string;
        noMoreText?: string;
        showInfo?: boolean;
        infoText?: string;
        bgColor?: Color;
        textColor?: Color;
        infoColor?: Color;
    });
}
export declare class EasyRefreshMaterialHeader extends EasyRefreshHeader {
    key?: Key;
    displacement?: number;
    backgroundColor?: Color;
    completeDuration?: Duration;
    enableHapticFeedback?: boolean;
    constructor(config?: {
        key?: Key;
        displacement?: number;
        backgroundColor?: Color;
        completeDuration?: Duration;
        enableHapticFeedback?: boolean;
    });
}
export declare abstract class EasyRefreshFooter extends Widget {
}
export declare class EasyRefreshClassicalFooter extends Widget {
    key?: Key;
    extent?: number;
    triggerDistance?: number;
    float?: boolean;
    completeDuration?: Duration;
    enableInfiniteLoad?: boolean;
    enableHapticFeedback?: boolean;
    overScroll?: boolean;
    safeArea?: boolean;
    padding?: EdgeInsets;
    alignment?: Alignment;
    loadText?: string;
    loadReadyText?: string;
    loadingText?: string;
    loadedText?: string;
    loadFailedText?: string;
    noMoreText?: string;
    showInfo?: boolean;
    infoText?: string;
    bgColor?: Color;
    textColor?: Color;
    infoColor?: Color;
    isNoMoreText?: boolean;
    constructor(config?: {
        key?: Key;
        extent?: number;
        triggerDistance?: number;
        float?: boolean;
        completeDuration?: Duration;
        enableInfiniteLoad?: boolean;
        enableHapticFeedback?: boolean;
        overScroll?: boolean;
        safeArea?: boolean;
        padding?: EdgeInsets;
        alignment?: Alignment;
        loadText?: string;
        loadReadyText?: string;
        loadingText?: string;
        loadedText?: string;
        loadFailedText?: string;
        noMoreText?: string;
        showInfo?: boolean;
        infoText?: string;
        bgColor?: Color;
        textColor?: Color;
        infoColor?: Color;
        isNoMoreText?: boolean;
    });
}
export declare class EasyRefreshMaterialFooter extends EasyRefreshFooter {
    key?: Key;
    displacement?: number;
    backgroundColor?: Color;
    completeDuration?: Duration;
    enableHapticFeedback?: boolean;
    enableInfiniteLoad?: boolean;
    overScroll?: boolean;
    isNoMoreText?: boolean;
    noMoreText?: string;
    constructor(config?: {
        key?: Key;
        displacement?: number;
        backgroundColor?: Color;
        completeDuration?: Duration;
        enableHapticFeedback?: boolean;
        enableInfiniteLoad?: boolean;
        overScroll?: boolean;
        isNoMoreText?: boolean;
        noMoreText?: string;
    });
}
export declare class EasyRefreshController extends DartClass {
    constructor();
    callRefresh(config?: {
        duration?: Duration;
    }): void;
    callLoad(config?: {
        duration?: Duration;
    }): void;
    finishRefresh(config?: {
        success?: boolean;
        noMore?: boolean;
    }): void;
    finishLoad(config?: {
        success?: boolean;
        noMore?: boolean;
    }): void;
    resetRefreshState(): void;
    resetLoadState(): void;
    dispose(): void;
}
export declare class EasyRefresher extends Widget {
    key?: Key;
    controller?: EasyRefreshController;
    onRefresh?: OnCallback;
    onLoad?: OnCallback;
    enableControlFinishRefresh?: boolean;
    enableControlFinishLoad?: boolean;
    taskIndependence?: boolean;
    scrollController?: ScrollController;
    header?: EasyRefreshHeader;
    footer?: EasyRefreshFooter;
    firstRefresh?: boolean;
    firstRefreshWidget?: Widget;
    headerIndex?: number;
    emptyWidget?: Widget;
    topBouncing?: boolean;
    bottomBouncing?: boolean;
    child?: Widget;
    listKey?: Key;
    scrollDirection?: Axis;
    reverse?: boolean;
    primary?: boolean;
    shrinkWrap?: boolean;
    center?: Key;
    anchor?: number;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: DragStartBehavior;
    slivers?: Array<Widget>;
    constructor(config?: {
        key?: Key;
        controller?: EasyRefreshController;
        onRefresh?: OnCallback;
        onLoad?: OnCallback;
        enableControlFinishRefresh?: boolean;
        enableControlFinishLoad?: boolean;
        taskIndependence?: boolean;
        scrollController?: ScrollController;
        header?: EasyRefreshHeader;
        footer?: EasyRefreshFooter;
        firstRefresh?: boolean;
        firstRefreshWidget?: Widget;
        headerIndex?: number;
        emptyWidget?: Widget;
        topBouncing?: boolean;
        bottomBouncing?: boolean;
        child: Widget;
    });
    static custom(config?: {
        key?: Key;
        listKey?: Key;
        controller?: EasyRefreshController;
        onRefresh?: OnCallback;
        onLoad?: OnCallback;
        enableControlFinishRefresh?: boolean;
        enableControlFinishLoad?: boolean;
        taskIndependence?: boolean;
        scrollController?: ScrollController;
        header?: EasyRefreshHeader;
        headerIndex?: number;
        footer?: EasyRefreshFooter;
        scrollDirection?: Axis;
        reverse?: boolean;
        primary?: boolean;
        shrinkWrap?: boolean;
        center?: Key;
        anchor?: number;
        cacheExtent?: number;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        firstRefresh?: boolean;
        firstRefreshWidget?: Widget;
        emptyWidget?: Widget;
        topBouncing?: boolean;
        bottomBouncing?: boolean;
        slivers: Array<Widget>;
    }): EasyRefresher;
}
export declare class PathProvider extends DartClass {
    static temporaryDirectory: string;
    static applicationSupportDirectory: string;
    static libraryDirectory: string;
    static applicationDocumentsDirectory: string;
    static downloadsDirectory: string;
    static externalStorageDirectory: string;
    static instance: PathProvider;
    constructor();
    static getInstance(): PathProvider;
    updateInfo(): Promise<void>;
}
export declare class Sqlite extends DartClass {
    static instance: Sqlite;
    constructor();
    static getInstance(): Sqlite;
    /**
     * 关闭数据库
     */
    static closeDB(config: {
        dbName: string;
    }): Promise<ResponseModel>;
    /**
     * 删除数据库
     * @param config config:
      {
        dbName:string,
      }
     */
    static delDB(config: {
        dbName: string;
    }): Promise<ResponseModel>;
    /**
     * 数据库是否存在
     * @param config config:
      {
        dbName:string,
      }
     */
    static isDBExists(config: {
        dbName: string;
    }): Promise<ResponseModel>;
    /**
     * 获取数据库路径
     * @param config config:
      {
        dbName:string,
      }
     */
    static getDBPath(config: {
        dbName: string;
    }): Promise<ResponseModel>;
    /**
     * 获取数据库路径
     */
    static openDB(config: {
        dbName: string;
        version?: number;
        configureSql?: string;
        createSql?: string;
        openSql?: string;
        readOnly?: boolean;
        singleInstance?: boolean;
    }): Promise<ResponseModel>;
    /**
     * 执行SQL语句，返回是否成功
     */
    static execute(config: {
        dbName: string;
        sql: string;
    }): Promise<ResponseModel>;
    /**
     * 执行SQL语句(插入)，返回影响行数
     * @param config config:
      {
        dbName:string,
        sql:string,
      }
     */
    static rawInsert(config: {
        dbName: string;
        sql: string;
    }): Promise<ResponseModel>;
    /**
    * 执行SQL语句(删除))，返回影响行数
    */
    static rawDelete(config: {
        dbName: string;
        sql: string;
    }): Promise<ResponseModel>;
    /**
     * 执行SQL语句(更新))，返回影响行数
     */
    static rawUpdate(config: {
        dbName: string;
        sql: string;
    }): Promise<ResponseModel>;
    /**
     * 执行SQL语句(查询))，返回结果Array<Map<String, dynamic>>
     */
    static rawQuery(config: {
        dbName: string;
        sql: string;
    }): Promise<ResponseModel>;
}
export declare enum Permission {
    activityRecognition = "activityRecognition",
    accessMediaLocation = "accessMediaLocation",
    notification = "notification",
    ignoreBatteryOptimizations = "ignoreBatteryOptimizations",
    storage = "storage",
    speech = "speech",
    speecsmsh = "sms",
    sensors = "sensors",
    reminders = "reminders",
    photos = "photos",
    microphone = "microphone",
    mediaLibrary = "mediaLibrary",
    contacts = "contacts",
    camera = "camera",
    calendar = "calendar",
    unknown = "unknown"
}
export declare enum PermissionWithService {
    location = "location",
    locationAlways = "locationAlways",
    locationWhenInUse = "locationWhenInUse",
    phone = "phone"
}
export declare enum PermissionStatus {
    undetermined = 0,
    granted = 1,
    denied = 2,
    restricted = 3,
    permanentlyDenied = 4
}
export declare class PermissionHandlerStatus {
    status: PermissionStatus;
    constructor(statusString: string);
    isPermanentlyDenied(): boolean;
    isUndetermined(): boolean;
    isGranted(): boolean;
    isDenied(): boolean;
    isRestricted(): boolean;
}
export declare class PermissionHandler extends DartClass {
    static instance: PermissionHandler;
    constructor();
    static getInstance(): PermissionHandler;
    static isDenied(permission: Permission | PermissionWithService): Promise<boolean>;
    static isGranted(permission: Permission | PermissionWithService): Promise<boolean>;
    static getStatus(permission: Permission | PermissionWithService): Promise<PermissionHandlerStatus>;
    static request(permission: Permission | PermissionWithService): Promise<PermissionHandlerStatus>;
    static isPermanentlyDenied(permission: Permission | PermissionWithService): Promise<boolean>;
    static isRestricted(permission: Permission | PermissionWithService): Promise<boolean>;
    static isUndetermined(permission: Permission | PermissionWithService): Promise<boolean>;
    static shouldShowRequestRationale(permission: Permission | PermissionWithService): Promise<boolean>;
    static serviceStatus(permission: PermissionWithService): Promise<boolean>;
}
export {};
