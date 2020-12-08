"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: JS Flutter SDK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyDataWidget = exports.CupertinoThemeData = exports.CupertinoTextThemeData = exports.CupertinoTheme = exports.CupertinoTabController = exports.CupertinoTabBar = exports.TestWidget = exports.CupertinoSliverNavigationBar = exports.CupertinoScrollbar = exports.CupertinoSwitch = exports.CupertinoSlider = exports.CupertinoNavigationBarBackButton = exports.CupertinoNavigationBar = exports.CupertinoDialogAction = exports.CupertinoButton = exports.CupertinoAlertDialog = exports.CupertinoActivityIndicator = exports.WidgetSpan = exports.WillPopScope = exports.Wrap = exports.Visibility = exports.VerticalDivider = exports.UnconstrainedBox = exports.TextField = exports.TextFormField = exports.Texture = exports.TextSpan = exports.Text = exports.Title = exports.TabPageSelector = exports.TabPageSelectorIndicator = exports.TabBarView = exports.Tab = exports.TabBar = exports.Table = exports.Tooltip = exports.Transform = exports.TableCell = exports.TableRow = exports.SliverVisibility = exports.SnackBarAction = exports.SnackBar = exports.Scrollbar = exports.SliverSafeArea = exports.SafeArea = exports.ScaffoldState = exports.Scaffold = exports.SliverToBoxAdapter = exports.SingleChildScrollView = exports.SliverOverlapAbsorber = exports.SliverFixedExtentList = exports.SliverOverlapInjector = exports.SliverOpacity = exports.SliverList = exports.SliverChildBuilderDelegate = exports.SliverChildListDelegate = exports.SliverChildDelegate = exports.SliverGridDelegateWithFixedCrossAxisCount = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGridDelegate = exports.SliverGrid = exports.SliverPadding = exports.SliverFillRemaining = exports.SliverFillViewport = exports.SliverAppBar = exports.Stack = exports.SizedOverflowBox = exports.SizedBox = exports.Slider = exports.Switch = exports.SwitchListTile = exports.Semantics = exports.Spacer = exports.RichText = exports.RawMaterialButton = exports.Radio = exports.RaisedButton = exports.RotatedBox = exports.RawImage = exports.RepaintBoundary = exports.Row = exports.PopupMenuItem = exports.PopupMenuButton = exports.Placeholder = exports.PreferredSizeWidget = exports.PreferredSize = exports.PositionedDirectional = exports.Positioned = exports.PhysicalModel = exports.Padding = exports.OutlineButton = exports.OverflowBox = exports.Offstage = exports.Opacity = exports.Navigator = exports.NestedScrollView = exports.NotificationListener = exports.MaterialBanner = exports.MaterialPageRoute = exports.Material = exports.LayoutBuilder = exports.ListView = exports.ListTile = exports.ListBody = exports.LimitedBox = exports.LabelTitle = exports.KeyedSubtree = exports.Image = exports.InkWell = exports.InkResponse = exports.ImageIcon = exports.Icon = exports.IconButton = exports.IgnorePointer = exports.IndexedStack = exports.IntrinsicWidth = exports.IntrinsicHeight = exports.IndexedSemantics = exports.IconSpan = exports.InputDecorator = exports.GridPaper = exports.GridTile = exports.GridTileBar = exports.GestureDetector = exports.FractionalTranslation = exports.FlutterLogo = exports.FlexibleSpaceBarSettings = exports.FlexibleSpaceBar = exports.FloatingActionButton = exports.FlatButton = exports.Flow = exports.Flex = exports.FractionallySizedBox = exports.FittedBox = exports.Flexible = exports.ExpansionTile = exports.ExpandIcon = exports.Expanded = exports.ExcludeSemantics = exports.DecoratedBoxTransition = exports.DefaultTextStyle = exports.DecorationImage = exports.DefaultTabController = exports.DropdownButton = exports.DecoratedBox = exports.DropdownMenuItem = exports.Directionality = exports.Drawer = exports.DrawerHeader = exports.Divider = exports.Card = exports.CustomScrollView = exports.CustomMultiChildLayout = exports.Column = exports.CustomSingleChildLayout = exports.ConstrainedBox = exports.ClipRRect = exports.CheckboxEx = exports.Checkbox = exports.CheckboxListTile = exports.CheckedModeBanner = exports.Chip = exports.CircleAvatar = exports.ColoredBox = exports.Center = exports.Container = exports.CloseButton = exports.Builder = exports.BackButton = exports.BackButtonIcon = exports.BottomNavigationBar = exports.BottomAppBar = exports.BlockSemantics = exports.ButtonBar = exports.Baseline = exports.Banner = exports.BottomNavigationBarItem = exports.AnimatedDefaultTextStyle = exports.AnimatedSize = exports.AnimatedPositioned = exports.AnimatedPhysicalModel = exports.AnimatedContainer = exports.AnimatedBuilder = exports.AnimatedOpacity = exports.AnimatedCrossFade = exports.AnnotatedRegion = exports.AspectRatio = exports.Align = exports.AppBar = exports.Animation = exports.AnimationController = exports.AbsorbPointer = exports.CupertinoIcons = exports.Icons = exports.Velocity = exports.VisualDensity = exports.Vector4 = exports.Vector3 = exports.Uint8List = exports.Uri = exports.MaskTextInputFormatter = exports.FilteringTextInputFormatter = exports.LengthLimitingTextInputFormatter = exports.TextInputFormatter = exports.Tween = exports.TextInputType = exports.ToolbarOptions = exports.TextEditingController = exports.TabController = exports.MinColumnWidth = exports.MaxColumnWidth = exports.FlexColumnWidth = exports.FractionColumnWidth = exports.FixedColumnWidth = exports.IntrinsicColumnWidth = exports.TableColumnWidth = exports.TableBorder = exports.TextStyle = exports.TapUpDetails = exports.TapDownDetails = exports.TextAlignVertical = exports.OutlineInputBorder = exports.UnderlineInputBorder = exports.InputBorder = exports.StadiumBorder = exports.RoundedRectangleBorder = exports.ContinuousRectangleBorder = exports.BeveledRectangleBorder = exports.CircleBorder = exports.OutlinedBorder = exports.BorderDirectional = exports.Border = exports.BoxBorder = exports.ShapeBorder = exports.RangeMaintainingScrollPhysics = exports.NeverScrollableScrollPhysics = exports.ClampingScrollPhysics = exports.BouncingScrollPhysics = exports.AlwaysScrollableScrollPhysics = exports.ScrollPhysics = exports.ScrollbarPainter = exports.Shadow = exports.ScrollController = exports.SpringDescription = exports.SystemUiOverlayStyle = exports.StrutStyle = exports.Size = exports.ScaleEndDetails = exports.ScaleUpdateDetails = exports.ScaleStartDetails = exports.ImageShader = exports.Shader = exports.RSTransform = exports.RRect = exports.RelativeRect = exports.Rect = exports.RegExp = exports.Radius = exports.Quaternion = exports.Offset = exports.Notification = exports.AutomaticNotchedShape = exports.CircularNotchedRectangle = exports.NotchedShape = exports.Matrix4 = exports.MaskFilter = exports.GlobalKey = exports.UniqueKey = exports.ValueKey = exports.Key = exports.InputDecoration = exports.IconData = exports.ImageProvider = exports.ImageFilter = exports.SweepGradient = exports.RadialGradient = exports.LinearGradient = exports.Gradient = exports.GradientRotation = exports.GradientTransform = exports.File = exports.FractionalOffset = exports.FocusNode = exports.Future = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.EdgeInsetsGeometry = exports.FlutterLogoDecoration = exports.BoxDecoration = exports.Decoration = exports.Duration = exports.DragEndDetails = exports.DragUpdateDetails = exports.DragStartDetails = exports.DragDownDetails = exports.ColorFilter = exports.Colors = exports.Color = exports.BoxConstraints = exports.Constraints = exports.BoxShadow = exports.BannerPainter = exports.BorderRadiusDirectional = exports.BorderRadius = exports.BorderRadiusGeometry = exports.BorderSide = exports.NetworkAssetBundle = exports.PlatformAssetBundle = exports.AssetBundle = exports.AlignmentDirectional = exports.Alignment = exports.AlignmentGeometry = exports.WrapCrossAlignment = exports.WrapAlignment = exports.VerticalDirection = exports.TargetPlatform = exports.TabBarIndicatorSize = exports.TableCellVerticalAlignment = exports.TextInputAction = exports.TextCapitalization = exports.TextOverflow = exports.TextDecoration = exports.TextBaseline = exports.TextDecorationStyle = exports.TextDirection = exports.TextAlign = exports.TextWidthBasis = exports.SmartQuotesType = exports.SmartDashesType = exports.TileMode = exports.ScrollPositionAlignmentPolicy = exports.SnackBarClosedReason = exports.StretchMode = exports.StrokeJoin = exports.StrokeCap = exports.ScrollViewKeyboardDismissBehavior = exports.StackFit = exports.RenderComparison = exports.PointerSignalKind = exports.PointerDeviceKind = exports.PointerChange = exports.PlaceholderAlignment = exports.PaintingStyle = exports.Overflow = exports.NavigationMode = exports.MaterialType = exports.MaterialTapTargetSize = exports.MainAxisSize = exports.MainAxisAlignment = exports.ListTileControlAffinity = exports.ListTileStyle = exports.ImageRepeat = exports.HitTestBehavior = exports.FloatingActionButtonLocation = exports.FilterQuality = exports.FontStyle = exports.FlexFit = exports.FontWeight = exports.FloatingLabelBehavior = exports.FlutterLogoStyle = exports.DrawerAlignment = exports.DecorationPosition = exports.DragStartBehavior = exports.CrossFadeState = exports.CollapseMode = exports.Clip = exports.Curve = exports.CrossAxisAlignment = exports.BoxWidthStyle = exports.BoxHeightStyle = exports.ButtonBarLayoutBehavior = exports.ButtonTextTheme = exports.BoxShape = exports.BottomNavigationBarType = exports.BorderStyle = exports.BlurStyle = exports.Brightness = exports.BannerLocation = exports.BoxFit = exports.BlendMode = exports.AnimationBehavior = exports.AnimationStatus = exports.AxisDirection = exports.Axis = exports.WidgetState = exports.StatelessWidget = exports.StatefulWidget = exports.BaseWidget = exports.WidgetMgr = exports.WidgetTree = exports.WidgetHelper = exports.BuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.Log = exports.JSFramework = exports.JSFlutterApp = exports.JSBridge = exports.Convert = exports.Widget = exports.DartClass = exports.JSCallConfig = exports.JSWidgetMirrorMgr = void 0;
// @ts-ignore：dart_sdk
const dart_sdk = require("dart_sdk");
const core = dart_sdk.core;
//****** TODO JSWidget Mirror Mgr ******
class JSWidgetMirrorMgr {
    constructor() {
        this.mirrorIDFeed = 0;
        this.mirrorObjMap = new Map();
    }
    //将对象加入数组并返回 ID字符串
    generateID(obj) {
        const d = ++this.mirrorIDFeed;
        const idstring = String(d);
        this.mirrorObjMap.set(idstring, obj);
        return idstring;
    }
    //使用ID列表删除对象
    removeMirrorObjects(mirrorIDList) {
        for (let mirrorID in mirrorIDList) {
            this.mirrorObjMap.delete(mirrorID);
        }
    }
    //通过ID 获取对象
    getMirrorObj(mirrorID) {
        return this.mirrorObjMap.get(mirrorID);
    }
    //单例化
    static getInstance() {
        if (!this.instance) {
            this.instance = new JSWidgetMirrorMgr();
        }
        return this.instance;
    }
}
exports.JSWidgetMirrorMgr = JSWidgetMirrorMgr;
class JSCallConfig {
    /**
     * @param config config:
      {
        widgetID?:string,
        mirrorID?:string,
        className?:string,
        funcName?:string,
        args?:any
      }
     */
    constructor(config) {
        if (config != null && config != undefined) {
            this.widgetID = config.widgetID;
            this.mirrorID = config.mirrorID;
            this.className = config.className;
            this.funcName = config.funcName;
            this.args = config.args;
        }
    }
    /**
     * @param config config:
      {
        widgetID?:string,
        mirrorID?:string,
        className?:string,
        funcName?:string,
        args?:any
      }
     */
    static new(config) {
        return new JSCallConfig(config);
    }
}
exports.JSCallConfig = JSCallConfig;
//flutter 中 非widget继承 DartClass
class DartClass extends core.Object {
    constructor() {
        super();
        this.className = this.constructor.name;
    }
    //创建绑定事件ID
    createMirrorID() {
        this.mirrorID = JSWidgetMirrorMgr.getInstance().generateID(this);
        core.print("createMirrorID: mirrorID : " + this.mirrorID);
    }
    //返回值
    invokeMirrorObjWithCallback(args) {
        return new Promise(function (resolve) {
            JSBridge.invokeMirrorObjWithCallback(args, function (value) {
                if (value != null && value != undefined) {
                    resolve(value);
                }
                else {
                    resolve(null);
                }
            });
        }.bind(this));
    }
    //创建绑定关系
    createMirrorObj() {
        //创建对应FLutter对象
        var argument = new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }
}
exports.DartClass = DartClass;
//flutter Widget继承Widget
class Widget extends DartClass {
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
exports.Widget = Widget;
//格式转换
class Convert extends core.Object {
    static toBoolean(v) {
        if (typeof v == "string") {
            if (v == "true" || v == "1") {
                return true;
            }
        }
        return false;
    }
    static toNumber(v) {
        return Number(v);
    }
    static toString(v) {
        if (typeof v == "string") {
            if (v == "true" || v == "1") {
                return v;
            }
        }
        return String(v);
    }
}
exports.Convert = Convert;
//#endregion
//#region ******** Framework ********
class JSBridge {
    ///js->native->flutter 顶层通用调用通道
    static invokeFlutterCommonChannel(basicMethodCall, callback) {
        // @ts-ignore：dart_sdk
        mxfJSBridgeInvokeFlutterCommonChannel(basicMethodCall.encodeJSON(), function (resultStr) {
            if (callback) {
                callback(resultStr);
            }
            Log.debug("invokeFlutterCommonChannel: callback: " + resultStr);
        });
    }
    ///mirrorObj sys
    ///调用Logic mirrorObj的函数
    ///*重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
    static createMirrorObj(flutterCallConfig, mirrorID, needMonitordGCValue) {
        let basicMethodCall = JSMethodCall.new("JSBridgeCreateMirrorObj", flutterCallConfig);
        JSBridge.invokeFlutterCommonChannel(basicMethodCall);
        //监控jsvalue 释放，同步释放flutter侧对象
        // @ts-ignore：dart_sdk
        if (typeof (mxfAddJSValueToMirrorObjGCMap) !== "undefined") {
            // @ts-ignore：dart_sdk
            mxfAddJSValueToMirrorObjGCMap(mirrorID, needMonitordGCValue);
        }
    }
    static onFlutterInvokeJSCommonChannel(messageStr) {
        Log.debug("JSBridge.onFlutterInvokeJSCommonChannel: " + messageStr);
        let args = JSON.parse(messageStr);
        let method = args["method"];
        let callConfig = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callConfig);
        }
        else {
            Log.log("JSBridge.onFlutterInvokeJSCommonChannel: error:fun == null" + args);
            return null;
        }
    }
    //flutter->js invokeJSMirrorObj
    static invokeJSMirrorObj(args) {
        let mirrorID = args["mirrorID"];
        let funcName = args["funcName"];
        let callbackID = args["callbackID"];
        let funConfig = args["args"];
        //TODO: call mirroObj Fun
        JSCallbackMgr.getInstance().invokeCallback(callbackID, funConfig);
    }
    static invokeMirrorObjWithCallback(flutterCallConfig, callback) {
        let basicMethodCall = JSMethodCall.new("JSBridgeInvokeMirrorObjWithCallback", flutterCallConfig);
        JSBridge.invokeFlutterCommonChannel(basicMethodCall, callback);
    }
}
exports.JSBridge = JSBridge;
// @ts-ignore：dart_sdk
globalThis.mxfJSBridgeInvokeJSCommonChannel = function (messageStr) {
    JSBridge.onFlutterInvokeJSCommonChannel(messageStr);
};
//JSFlutterApp 基类，用于和Native交互
//开发者需要继承XSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
class JSFlutterApp {
    constructor(name, initialRoute) {
        this.name = name;
        this.initialRoute = initialRoute;
        //App的rootWidget是个虚拟Widget，负责管理push的Widget或runAPP 的Widget
        this.rootWidget = new StatelessWidget({ name: "RootWidget" });
        this.rootWidget.helper?.setupAsRootWidget();
    }
    run() {
        this.runWithName(this.initialRoute);
    }
    runWithName(name) {
        let w = this.createJSWidgetWithName(name);
        if (w != null && w != undefined) {
            this.runApp(w);
        }
    }
    ///子类需要重载
    ///当Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);
    ///push页面时，在这里根据widgetName 创建你自己的Widget
    createJSWidgetWithName(widgetName) {
    }
    //Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);push页面时,会调用到此函数
    navigatorPushWithName(widgetName, widgetID, args) {
        let w = this.createJSWidgetWithName(widgetName);
        if (w != null && w != undefined) {
            this.setupWidget(w, widgetName, widgetID, args);
            this.navigatorPush(w, args);
        }
    }
    setupWidget(widget, widgetName, widgetID, args) {
        //设置widgetID
        if (widget != null && widget != undefined && widgetID != null && widgetID != undefined) {
            widget.widgetID = widgetID;
        }
    }
    //这个接口暂时不完备，暂不要使用，要在JS侧创建setInheritedInfo，参照navigatorPush
    ///JS侧入口API
    //创建XSJSWidget，调用build 创建jsonWidgetTree，调用Flutter runApp 重新加载Flutter根页面
    runApp(widget) {
        //这个接口暂时不完备，要在JS侧创建setInheritedInfo，参照navigatorPush
        let bc = BuildContext.new(widget);
        widget.buildContext = bc;
        this.rootWidget?.helper?.addChildWidget(widget);
        let app = this;
        this.buildRootWidget(widget);
    }
    ///JS侧入口API
    //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
    navigatorPush(widget, args) {
        let bc = BuildContext.new(widget);
        bc.setInheritedInfo(args);
        widget.buildContext = bc;
        if (widget != null && widget != undefined && widget != "") {
            WidgetMgr.getInstance().registerWidget(widget);
        }
        this.rootWidget?.helper.addChildWidget(widget);
        widget?.helper.callFlutterRebuild();
    }
    buildRootWidget(widget) {
        Log.log("buildRootWidget ::" + widget?.getWidgetInfo());
        let widgetData = WidgetHelper.buildWidgetData(widget);
        JSFramework.callFlutterReloadApp(this, widgetData);
    }
    //flutter->js channel
    nativeCall(args) {
        Log.log("XSFlutterApp:nativeCall" + args);
        let method = args["method"];
        let callConfig = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callConfig);
        }
        else {
            Log.log("XSFlutterApp:nativeCall error:fun == null" + args);
            return null;
        }
    }
    flutterCallFrequencyLimitCallList(args) {
        if (args) {
            args.map(function (callConfig) {
                // @ts-ignore：dart_sdk
                this.nativeCall(callConfig);
            }.bind(this));
        }
    }
    flutterCallOnEventCallback(args) {
        return this.rootWidget?.helper?.onEventCallback(args);
    }
    flutterCallNavigatorPushWithName(args) {
        let widgetName = args["widgetName"];
        let widgetID = args["widgetID"];
        this.navigatorPushWithName(widgetName, widgetID, args);
    }
    flutterCallOnBuildEnd(args) {
        this.rootWidget?.helper?.onBuildEnd(args);
    }
    flutterCallOnDispose(args) {
        let widgetID = args["widgetID"];
        //移除Widget
        if (widgetID != null && widgetID != undefined) {
            WidgetMgr.getInstance().remove(widgetID);
        }
        if (this.rootWidget && this.rootWidget.widgetID == widgetID) {
        }
        this.rootWidget?.helper.onDispose(args);
        let mirrorObjIDList = args["mirrorObjIDList"];
        JSWidgetMirrorMgr.getInstance().removeMirrorObjects(mirrorObjIDList);
    }
    flutterCallOnMirrorObjInvoke(args) {
        var mirrorObjID = args["mirrorID"];
        var functionName = args["functionName"];
        var args = args["args"];
        var mirrorObj = JSWidgetMirrorMgr.getInstance().getMirrorObj(mirrorObjID);
        if (mirrorObj != null) {
            mirrorObj[functionName](args);
        }
    }
}
exports.JSFlutterApp = JSFlutterApp;
///JSAPI
///mirrorObj sys
///flutter ->native ->js
class JSFramework {
    //全局函数
    static runApp(app) {
        JSFramework.callNativeSetCurrentJSApp(app);
    }
    static callNativeSetCurrentJSApp(app) {
        JSFramework.currentJSApp = app;
        // @ts-ignore：系统原生对象
        XSNativeJSFlutterApp.setCurrentJSApp(app);
    }
    static callFlutterReloadApp(app, widgetData) {
        JSFramework.currentJSApp = app;
        // @ts-ignore：系统原生对象
        XSNativeJSFlutterApp.callFlutterReloadApp(app, widgetData);
    }
    static callFlutterWidgetChannel(method, args) {
        // @ts-ignore：系统原生对象
        XSNativeJSFlutterApp.callFlutterWidgetChannel(method, args);
    }
    ///TODO: 优化
    ///调用和UI相关的mirrorObj的函数
    ///*重要区分： UIMirrorObj的生命周期和Flutter Widget控制，由Dart侧Dispose时完成释放
    static invokeFlutterFunction(callConfig) {
        JSFramework.callFlutterWidgetChannel("invoke", JSON.stringify(callConfig));
    }
    ///TODO: 优化
    ///github merge
    static invokeCommonFlutterFunction(callConfig) {
        JSFramework.callFlutterWidgetChannel("invokeCommon", JSON.stringify(callConfig));
    }
}
exports.JSFramework = JSFramework;
JSFramework.currentJSApp = null;
//****** TODO 原生日志输出 ******
class Log {
    static setLogLev(lev) {
        Log.logLev = lev;
    }
    static printLog(log) {
        var prefix = "[JS]: ";
        if (Log.logLev == 0) {
            prefix = "[JS-Debug]: ";
        }
        else if (Log.logLev == 2) {
            prefix = "[JS-Error]: ";
        }
        // @ts-ignore：原生系统函数
        XSNativeLog(prefix + log);
    }
    static debug(log) {
        if (Log.logLev != 0) {
            Log.logLev = 0;
        }
        this.printLog(log);
    }
    static log(log) {
        if (Log.logLev != 1) {
            Log.logLev = 1;
        }
        this.printLog(log);
    }
    static error(log) {
        if (Log.logLev != 2) {
            Log.logLev = 2;
        }
        this.printLog(log);
    }
}
exports.Log = Log;
Log.LogLevDebug = 0;
Log.LogLevInfo = 1;
Log.LogLevError = 2;
Log.logLev = Log.LogLevDebug;
//****** TODO 方法调用 ******
class JSMethodCall {
    encodeJSON() {
        return JSON.stringify({ "funcName": this.name, "args": this.args });
    }
    static new(name, args) {
        var v = new JSMethodCall();
        v.name = name;
        v.args = args;
        return v;
    }
}
exports.JSMethodCall = JSMethodCall;
//****** TODO 全局callbak管理器 ******
class JSCallbackMgr {
    constructor() {
        this.callbackIDFeed = 0;
        this.callbackID2fun = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new JSCallbackMgr();
        }
        return this.instance;
    }
    generateID() {
        let d = ++this.callbackIDFeed;
        return String(d);
    }
    createCallbackID(callback) {
        let callbackID = this.generateID();
        this.callbackID2fun?.set(callbackID, callback);
        return callbackID;
    }
    invokeCallback(callbackID, args) {
        let callback = this.findCallback(callbackID);
        callback(args);
    }
    findCallback(callbackID) {
        return this.callbackID2fun?.get(callbackID);
    }
    removeCallback(callbackID) {
        this.callbackID2fun?.delete(callbackID);
    }
}
exports.JSCallbackMgr = JSCallbackMgr;
//****** TODO BuildContext 和flutter BuildContext 保持一致的编程方式 ******
class BuildContext {
    static new(widget, parentBuildContext) {
        var v = new BuildContext();
        v.widget = widget;
        v.widget.buildContext = v;
        v.parentBuildContext = parentBuildContext;
        v.inheritedInfo = {};
        return v;
    }
    static inheritBuildContext(widget, buildContext) {
        var context = BuildContext.new(widget, buildContext);
        context.inheritedInfo = buildContext?.inheritedInfo;
        return context;
    }
    setInheritedInfo(args) {
        this.inheritedInfo = args;
    }
}
exports.BuildContext = BuildContext;
//****** TODO WidgetHelper ******
class WidgetHelper {
    constructor(widget) {
        this.widget = widget;
    }
    setState(fun) {
        this.widget.state?.setState(fun);
    }
    //util api
    //building
    static buildWidgetData(jsWidget) {
        Log.log("buildWidgetData ::" + jsWidget.getWidgetInfo());
        let widgetDataStr = JSON.stringify(jsWidget, function (key, value) {
            let newValue = value;
            if (value instanceof StatefulWidget || value instanceof StatelessWidget) {
                // 解决widget生成时不调用构造方法的问题
                /*if (value.helper == null) {
                  value.className = value instanceof StatefulWidget ? "StatefulWidget" : "StatelessWidget";
                  initJSWidgetData(value);
                }*/
                if (value != jsWidget) {
                    value.buildContext = BuildContext.inheritBuildContext(value, jsWidget.buildContext);
                    //TODO:FIXME addChildWidget逻辑，这里局部刷新，会有两份Widget数据，但功能正常
                    //Widget 的子Widget 没有层级关系，平铺在jsWidget
                    jsWidget.helper?.addChildWidget(value);
                }
                //如果是JSWidget类需要调用一下build，返回build内容
                newValue = value.helper?.buildWidgetTree();
            }
            // 遍历处理Symbol的key转成String放入Json中
            if (newValue && typeof newValue === 'object') {
                var objectSymbols = Object.getOwnPropertySymbols(newValue);
                if (objectSymbols.length > 0) {
                    var replacement = new Map();
                    var len = objectSymbols.length;
                    for (var i = 0; i < len; ++i) {
                        // @ts-ignore：description
                        var key = objectSymbols[i].description;
                        var value = newValue[objectSymbols[i]];
                        replacement.set(key, value);
                        //replacement[key] = value;
                    }
                    return replacement;
                }
            }
            return newValue;
        });
        return widgetDataStr;
    }
    buildWidgetTree() {
        this.widget.buildWidgetDataSeq = String(++this.widget.buildWidgetDataSeqFeed);
        let tempWidgetTree = WidgetTree.new(this.widget.buildWidgetDataSeq);
        tempWidgetTree.ownerWidget = this.widget;
        this.widget.buildingWidgetTree = tempWidgetTree;
        Log.log("JSWidget buildWidgetTree ::" + this.widget.getWidgetInfo());
        let tempWidgetTreeObjMap;
        if (this.widget instanceof StatelessWidget) {
            tempWidgetTreeObjMap = this.widget.build(this.widget.buildContext);
        }
        else if (this.widget instanceof StatefulWidget) {
            //必须在Build的时候才创建State
            if (this.widget.state == null && this.widget.state == undefined) {
                this.widget.state = this.widget.createState();
                this.widget.state.widget = this.widget;
                this.widget.state.initState();
            }
            tempWidgetTreeObjMap = this.widget.state.build(this.widget.buildContext);
        }
        //如果Build的root wiget 是StatelessWidget，则直接展开，优化性能
        /*if (tempWidgetTreeObjMap instanceof StatelessWidget) {
          tempWidgetTreeObjMap = tempWidgetTreeObjMap.build(this.widget.buildContext);
        }*/
        //tempWidgetTree.widgetTreeObjMap = tempWidgetTreeObjMap; //不做diff不用保存，优化内存
        this.preBuildJson(tempWidgetTree, tempWidgetTreeObjMap);
        //加入缓存map
        this.widget.buildSeq2WTreeMap?.set(tempWidgetTree.buildWidgetDataSeq, tempWidgetTree);
        //json实际包含的字段
        let jsonMap = {
            key: this.widget.key,
            name: this.widget.name,
            className: this.widget.className,
            widgetID: this.widget.widgetID,
            buildWidgetDataSeq: this.widget.buildWidgetDataSeq,
            navPushingWidgetID: this.widget.navPushingWidgetID,
            widgetData: tempWidgetTreeObjMap,
        };
        return jsonMap;
    }
    buildWidgetTreeSubWidget(widget) {
        /*let tempWidgetTree = WidgetTree.new(this.widget.buildWidgetDataSeq
        );
        tempWidgetTree.ownerWidget = this.widget;
    
        this.widget.buildingWidgetTree = tempWidgetTree;*/
        Log.log("JSWidget buildWidgetTree ::" + this.widget.getWidgetInfo());
        let tempWidgetTreeObjMap;
        if (widget instanceof StatelessWidget) {
            tempWidgetTreeObjMap = widget.build(this.widget.buildContext);
        }
        else if (widget instanceof StatefulWidget) {
            tempWidgetTreeObjMap = widget.state.build(this.widget.buildContext);
        }
        else if (widget instanceof Widget) {
            tempWidgetTreeObjMap = widget;
        }
        //如果Build的root wiget 是StatelessWidget，则直接展开，优化性能
        /*if (tempWidgetTreeObjMap instanceof StatelessWidget) {
          tempWidgetTreeObjMap = tempWidgetTreeObjMap.build(this.widget.buildContext);
        }*/
        //tempWidgetTree.widgetTreeObjMap = tempWidgetTreeObjMap; //不做diff不用保存，优化内存
        this.preBuildJson(this.widget.buildingWidgetTree, tempWidgetTreeObjMap);
        return tempWidgetTreeObjMap;
    }
    preBuildJson(widgetTree, widgetTreeObjMap) {
        //Log.log("preBuildJson:" + flutterWidget);
        if (!(widgetTreeObjMap instanceof Object)) {
            return;
        }
        //StatefulWidget不处理
        if (widgetTreeObjMap instanceof StatefulWidget) {
            return;
        }
        if (widgetTreeObjMap instanceof Widget) {
            //ListView等类似需要提前处理build的Widget 有preBuild 函数
            widgetTreeObjMap.preBuild(this, this.widget.buildContext);
        }
        for (let p in widgetTreeObjMap) {
            let value = widgetTreeObjMap[p];
            //如果Build的 wiget tree 里有节点是StatelessWidget，则直接展开，优化性能
            if (value instanceof StatelessWidget) {
                value = value.build(this.widget.buildContext);
                widgetTreeObjMap[p] = value;
            }
            this.preBuildJson(widgetTree, value);
        }
    }
    //buildingCreateCallbackID 只允许building过程中调用，不是对外API
    buildingCreateCallbackID(callback) {
        //* XSFlutter beta 0.1.0开始，框架不在帮助上层代码绑定this，开发者需要自己绑定需要的对象 
        //callback = callback.bind(this.widget);
        return this.widget.buildingWidgetTree?.createCallbackID(callback);
    }
    setupAsRootWidget() {
        this.widget.buildingWidgetTree = WidgetTree.new("1");
        this.widget.currentWidgetTree = this.widget.buildingWidgetTree;
    }
    addChildWidget(jsWidget) {
        jsWidget.parentWidget = this.widget;
        this.widget.buildingWidgetTree?.childrenWidget.set(jsWidget.widgetID, jsWidget);
    }
    removeChildWidget(jsWidget) {
        if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.childrenWidget) {
            WidgetMgr.getInstance().remove(jsWidget.widgetID);
            this.widget.currentWidgetTree.childrenWidget.delete(jsWidget.widgetID);
        }
    }
    //js->flutter
    callFlutterRebuild() {
        Log.log("callFlutterRebuild ::" + this.widget.getWidgetInfo());
        let startEncodeData = (new Date()).valueOf();
        let widgetData = WidgetHelper.buildWidgetData(this.widget);
        let startTransferData = (new Date()).valueOf();
        //rebuild and confirm 配对
        this.confirmCurrentWidgetTree();
        //call flutter setState
        JSFramework.callFlutterWidgetChannel("rebuild", widgetData);
    }
    //0.1.0 2020-4-2 修改为不经过dart侧buildend确认，当发送rebuild或等价构建UI调用后
    //直接确认CurrentTree，目的是可以聚合延迟发送buildend
    confirmCurrentWidgetTree() {
        this.widget.preWidgetTree = this.widget.currentWidgetTree;
        this.widget.currentWidgetTree = this.widget.buildingWidgetTree;
    }
    //flutter -> js
    onEventCallback(args) {
        let callID = args["callID"]; //   widgetID/callID 格式 ： "1313/3434"
        if (callID == null) {
            return;
        }
        let arr = callID.split("/");
        let widgetID = arr[0];
        let buildWidgetDataSeq = args["buildSeq"];
        let callConfig = args["args"];
        let jsWidget = this.findWidgetWithWidgetID(widgetID);
        if (jsWidget != null) {
            return jsWidget?.helper?.invokeCallback(buildWidgetDataSeq, callID, callConfig);
        }
        else {
            Log.error("onEventCallback error: jsWidget == null onEventCallback(args:" + args);
        }
    }
    findWidgetWithWidgetID(widgetID) {
        //当前Widget
        if (this.widget.widgetID == widgetID) {
            return this.widget;
        }
        //全局中找对象
        let w = WidgetMgr.getInstance().findWidget(widgetID);
        if (w != null && w != undefined) {
            return w;
        }
        //先在currentTree里找，一般这里能找到
        let widgetTree = this.widget.currentWidgetTree;
        if (widgetTree != null) {
            let w = widgetTree.childrenWidget.get(widgetID);
            if (w) {
                return w;
            }
            for (let k in widgetTree.childrenWidget) {
                let jsWidget = widgetTree.childrenWidget.get(k);
                w = jsWidget?.helper.findWidgetWithWidgetID(widgetID);
                if (w) {
                    return w;
                }
            }
        }
        //找不到就遍历treemap，为了去掉 buildend 回调确认WidgetTree的过程
        for (let seq in this.widget.buildSeq2WTreeMap) {
            if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq == seq) {
                continue;
            }
            let widgetTree = this.widget.buildSeq2WTreeMap.get(seq);
            if (widgetTree != null) {
                let w = widgetTree.childrenWidget.get(widgetID);
                if (w) {
                    return w;
                }
                for (let k in widgetTree.childrenWidget) {
                    let jsWidget = widgetTree.childrenWidget.get(k);
                    w = jsWidget?.helper.findWidgetWithWidgetID(widgetID);
                    if (w) {
                        return w;
                    }
                }
            }
        }
        //查找被自己push的widgets
        for (let k in this.widget.navPushedWidgets) {
            let jsWidget = this.widget.navPushedWidgets.get(k);
            let w = jsWidget?.helper?.findWidgetWithWidgetID(widgetID);
            if (w) {
                return w;
            }
        }
        return undefined;
    }
    invokeCallback(buildWidgetDataSeq, callID, args) {
        Log.log("JSWidget invokeCallback ::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq + " callID: " + callID);
        if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq != buildWidgetDataSeq) {
            Log.error("JSWidget:invokeCallback:this.widget.currentWidgetTree.buildWidgetDataSeq(" + this.widget.currentWidgetTree.buildWidgetDataSeq + ")  != buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                " callID: " +
                callID);
            if (this.widget.preWidgetTree && this.widget.preWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
                Log.error("JSWidget:invokeCallback:this.widget.preWidgetTree.buildWidgetDataSeq(" + this.widget.preWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                    " callID: " +
                    callID);
            }
            if (this.widget.buildingWidgetTree && this.widget.buildingWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
                Log.error("JSWidget:invokeCallback:this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                    " callID: " +
                    callID);
            }
            return null;
        }
        if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.findCallback(callID)) {
            return this.widget.currentWidgetTree.invokeCallback(callID, args);
        }
        else {
            // @ts-ignore：容错处理
            Log.error("JSWidget:invokeCallback: 容错搜索所有BuildTree，this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget?.buildingWidgetTree?.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                " callID: " +
                callID);
            for (let seq in this.widget.buildSeq2WTreeMap) {
                let tree = this.widget.buildSeq2WTreeMap.get(seq);
                if (tree?.findCallback(callID)) {
                    return tree.invokeCallback(callID, args);
                }
            }
        }
    }
    onBuildEnd(args) {
        let widgetID = args["widgetID"];
        let buildWidgetDataSeq = args["buildSeq"];
        let jsWidget = this.findWidgetWithWidgetID(widgetID);
        if (jsWidget != null) {
            let profileInfo = args["profileInfo"];
            jsWidget?.helper?.onFlutterBuildEnd(buildWidgetDataSeq, profileInfo);
        }
        else {
            Log.error("onBuildEnd error: jsWidget == null widgetID: " + widgetID + " buildWidgetDataSeq: " + buildWidgetDataSeq);
        }
    }
    onFlutterBuildEnd(buildWidgetDataSeq, profileInfo) {
        let tree = this.widget.buildSeq2WTreeMap?.get(buildWidgetDataSeq);
        if (tree != null) {
            this.widget.preWidgetTree = this.widget.currentWidgetTree;
            this.widget.currentWidgetTree = tree;
            Log.log("JSWidget onFlutterBuildEnd success::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
            this.clearWidgetTree(buildWidgetDataSeq);
        }
        else {
            // @ts-ignore：this.widget.buildSeq2WTreeMap
            Log.error("JSWidget onFlutterBuildEnd fail buildSeq2WTreeMap.keys: [" + Object.keys(this.widget.buildSeq2WTreeMap).join("|") + "]::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
        }
        if (this.widget instanceof StatelessWidget) {
            this.widget.onBuildEnd();
        }
        else if (this.widget instanceof StatefulWidget) {
            this.widget.state.onBuildEnd();
        }
    }
    //比buildWidgetDataSeq小的tree 可以清理掉了
    clearWidgetTree(buildWidgetDataSeq) {
        let intCurSeq = parseInt(buildWidgetDataSeq);
        let clearSeqs = [];
        for (let seq in this.widget.buildSeq2WTreeMap) {
            let intSeq = parseInt(seq);
            //保留第一次的构建，兼容有些Flutter Widget有不更新Widget内容的bug
            if (intSeq <= 1) {
                continue;
            }
            if (intSeq < intCurSeq) {
                clearSeqs.push(seq);
            }
        }
        for (let i = 0; i < clearSeqs.length; ++i) {
            let widgetID = clearSeqs[i];
            //Log.debug("JSWidget clearWidgetTree::" + this.widget.getWidgetInfo() + " delSeq: " + delSeq);
            WidgetMgr.getInstance().remove(widgetID);
            this.widget.buildSeq2WTreeMap?.delete(widgetID);
        }
    }
    onDispose(args) {
        let widgetID = args["widgetID"];
        let jsWidget = this.findWidgetWithWidgetID(widgetID);
        if (jsWidget != null) {
            jsWidget?.helper?.onFlutterDispose();
            if (jsWidget.parentWidget) {
                //TODO: FIXME listview 滑动，滑出之后再回来，就不响应了，先不删除，依赖顶层Push页面的pop来释放
                //jsWidget.parentWidget.helper.removeChildWidget(jsWidget);
            }
            if (jsWidget.navPushingWidget) {
                jsWidget.navPushingWidget.helper?.removePushingWidget(jsWidget);
            }
        }
        else {
            Log.error("onDispose error: jsWidget == null widgetID " + widgetID);
        }
    }
    onFlutterDispose() {
        Log.log("JSWidget onFlutterDispose ::" + this.widget.getWidgetInfo());
        //调用子widget disposeWidget
        if (this.widget.currentWidgetTree &&
            this.widget.currentWidgetTree.childrenWidget) {
            for (let k in this.widget.currentWidgetTree.childrenWidget) {
                let widget = this.widget?.currentWidgetTree?.childrenWidget.get(k);
                if (widget) {
                    widget?.helper?.onFlutterDispose();
                }
                // this.widget.currentWidgetTree.childrenWidget[k].disposeWidget();
            }
        }
        if (this.widget instanceof StatefulWidget) {
            this.widget.state.dispose();
        }
    }
    //js->flutter
    //navigator route
    navigatorPush(jsWidget) {
        // 清空当前widget的navPushedWidgets数据
        for (let i in this.widget.navPushedWidgets) {
            var obj = this.widget.navPushedWidgets.get(i);
            obj?.helper?.onFlutterDispose();
            if (obj?.parentWidget) {
                obj?.parentWidget?.helper?.removeChildWidget(obj);
            }
            if (obj?.navPushingWidget) {
                obj?.navPushingWidget?.helper?.removePushingWidget(obj);
            }
        }
        let startEncodeData = (new Date()).valueOf();
        let widgetData = this.updatePushingWidgetsData(jsWidget);
        let startTransferData = (new Date()).valueOf();
        if (jsWidget != null && jsWidget != undefined) {
            WidgetMgr.getInstance().registerWidget(jsWidget);
        }
        //call flutter navigatorPush
        JSFramework.callFlutterWidgetChannel("navigatorPush", widgetData);
    }
    navigatorPop() {
        // TODO:fixme找到最上层的top widget
        let topRootWidget = this.findTopRootWidget();
        let widgetID = topRootWidget?.widgetID;
        // @ts-ignore：widgetID
        JSFramework.callFlutterWidgetChannel("navigatorPop", { widgetID });
        if (this.widget.navPushedWidgets && widgetID != undefined) {
            WidgetMgr.getInstance().remove(widgetID);
            this.widget.navPushedWidgets.delete(widgetID);
        }
    }
    //留意：这个函数命名是不是应该是removePushedWidget
    removePushingWidget(jsWidget) {
        if (this.widget.navPushedWidgets) {
            WidgetMgr.getInstance().remove(jsWidget.widgetID);
            this.widget.navPushedWidgets.delete(jsWidget.widgetID);
        }
    }
    updatePushingWidgetsData(jsWidget) {
        Log.log("updatePushingWidgetsData WidgetName:" + jsWidget.widgetName);
        var newJSWidget = jsWidget;
        //设置push jsWidget的widget
        newJSWidget.navPushingWidget = this.widget;
        newJSWidget.buildContext = BuildContext.inheritBuildContext(newJSWidget, this.widget.buildContext);
        newJSWidget.navPushingWidgetID = this.widget.widgetID;
        this.widget.navPushedWidgets?.set(newJSWidget.widgetID, newJSWidget);
        let widgetData = WidgetHelper.buildWidgetData(newJSWidget);
        return widgetData;
    }
    findTopRootWidget() {
        let rootWidget = this.widget.parentWidget;
        if (rootWidget == null || rootWidget == undefined) {
            return this.widget;
        }
        return rootWidget.helper?.findTopRootWidget();
    }
}
exports.WidgetHelper = WidgetHelper;
//****** TODO Widget树 ******
class WidgetTree {
    constructor() {
        this.buildWidgetDataSeq = "";
        this.buildWidgetDataSeq = "";
        this.childrenWidget = new Map();
    }
    static new(buildWidgetDataSeq) {
        var v = new WidgetTree();
        v.buildWidgetDataSeq = buildWidgetDataSeq;
        v.childrenWidget = new Map();
        v.callbackID2fun = new Map();
        v.widgetTreeObjMap = null;
        v.ownerWidget = undefined;
        return v;
    }
    //统一用全局的id生成器
    generateID() {
        return JSCallbackMgr.getInstance().generateID();
    }
    createCallbackID(callback) {
        let callbackID = this.ownerWidget?.widgetID + "/" + this.generateID();
        this.callbackID2fun?.set(callbackID, callback);
        return callbackID;
    }
    invokeCallback(callbackID, ...args) {
        let callback = this.findCallback(callbackID);
        return callback(...args);
    }
    findCallback(callbackID) {
        return this.callbackID2fun?.get(callbackID);
    }
}
exports.WidgetTree = WidgetTree;
//****** Widget Mgr ******
class WidgetMgr {
    constructor() {
        this.widgetIDFeed = 0;
        this.widgetID2WidgetMap = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new WidgetMgr();
        }
        return this.instance;
    }
    generateWidgetID() {
        //JS侧现生成的JSWidget， widgetID为偶数，从0开始 +2
        this.widgetIDFeed = this.widgetIDFeed + 2;
        return String(this.widgetIDFeed);
    }
    registerWidget(widget) {
        this.widgetID2WidgetMap.set(widget.widgetID, widget);
    }
    remove(widgetID) {
        this.widgetID2WidgetMap.delete(widgetID);
    }
    findWidget(widgetID) {
        Log.log("======widgetID2WidgetMap:" + String(this.widgetID2WidgetMap.size));
        return this.widgetID2WidgetMap.get(widgetID);
    }
}
exports.WidgetMgr = WidgetMgr;
class BaseWidget extends Widget {
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.name = config.name;
            this.key = config.key;
        }
        this.widgetID = WidgetMgr.getInstance().generateWidgetID();
        this.helper = new WidgetHelper(this);
        //构建系列号，每build一次加1
        this.buildWidgetDataSeq = "";
        // The Widget Pages that pushed this Widget ID
        // 把当前widget（this） push 出来的widget ID
        // 序列化到JSON里
        this.navPushingWidgetID = "";
        //不添加进json的控制变量
        //创建自己的widget，为null自己是root
        this.parentWidget = undefined;
        // The Widget Pages that pushed this Widget
        // 把当前widget（this） push 出来的widget
        this.navPushingWidget = undefined;
        //The widget that was pushed by this widget
        //由自己this push的widget page
        this.navPushedWidgets = new Map();
        //
        this.buildContext = undefined;
        this.buildingWidgetTree = undefined;
        this.currentWidgetTree = undefined;
        this.preWidgetTree = undefined;
        this.buildWidgetDataSeqFeed = 0;
        this.buildSeq2WTreeMap = new Map();
        //注册ID
        //WidgetMgr.getInstance().registerWidget(this);
    }
    //获取 Widget 关键信息
    getWidgetInfo() {
        let log = "WidgetInfo: Name: " + this.widgetName + " Class: " + this.className + " WID: " + this.widgetID + " buildseq: " + this.buildWidgetDataSeq +
            " currentTreeSeq: " + this.getWidgetTreeBuildSeq(this.currentWidgetTree) + " buildingseq: " + this.getWidgetTreeBuildSeq(this.buildingWidgetTree) +
            " preTreeSeq: " + this.getWidgetTreeBuildSeq(this.preWidgetTree);
        return log;
    }
    //获取树对应JSON结构
    getWidgetTreeBuildSeq(widgetTree) {
        if (widgetTree == null) {
            return "0";
        }
        return widgetTree.buildWidgetDataSeq;
    }
    onBuildEnd(args) { }
}
exports.BaseWidget = BaseWidget;
//****** StatefulWidget ******
class StatefulWidget extends BaseWidget {
    constructor(config) {
        super(config);
        this.className = "StatefulWidget";
    }
    //subclass override
    createState() { }
}
exports.StatefulWidget = StatefulWidget;
//在JS层，要封装控件，如不需要改变UI内容，使用无状态的StatelessWidget
class StatelessWidget extends BaseWidget {
    constructor(config) {
        super(config);
        this.className = "StatelessWidget";
    }
    //subclass override
    build(context) { }
}
exports.StatelessWidget = StatelessWidget;
class WidgetState {
    constructor(widget) {
        this.widget = widget;
    }
    get context() {
        return this.widget?.buildContext;
    }
    //subclass override
    initState() {
        Log.log("WidgetState initState ::" + this.widget?.getWidgetInfo());
    }
    setState(fun) {
        Log.log("WidgetState setState ::" + this.widget?.getWidgetInfo());
        if (fun) {
            fun();
        }
        //call-> Flutter
        this.widget?.helper?.callFlutterRebuild();
    }
    //subclass override
    build(context) { }
    //subclass overwite
    onBuildEnd(args) { }
    //subclass override
    dispose() { }
}
exports.WidgetState = WidgetState;
//#endregion
//#region ******** Base Enum ********
//#region ------ A ------
//****** Axis ******
var Axis;
(function (Axis) {
    Axis["horizontal"] = "horizontal";
    Axis["vertical"] = "vertical";
})(Axis = exports.Axis || (exports.Axis = {}));
//****** xisDirection ******
var AxisDirection;
(function (AxisDirection) {
    AxisDirection["left"] = "left";
    AxisDirection["down"] = "down";
    AxisDirection["right"] = "right";
    AxisDirection["up"] = "up";
})(AxisDirection = exports.AxisDirection || (exports.AxisDirection = {}));
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
//#endregion
//#region ------ B ------
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
//****** BannerLocation ******
var BannerLocation;
(function (BannerLocation) {
    BannerLocation["topStart"] = "topStart";
    BannerLocation["topEnd"] = "topEnd";
    BannerLocation["bottomStart"] = "bottomStart";
    BannerLocation["bottomEnd"] = "bottomEnd";
})(BannerLocation = exports.BannerLocation || (exports.BannerLocation = {}));
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
//****** BoxHeightStyle ******
var BoxHeightStyle;
(function (BoxHeightStyle) {
    BoxHeightStyle["tight"] = "tight";
    BoxHeightStyle["max"] = "max";
    BoxHeightStyle["includeLineSpacingMiddle"] = "includeLineSpacingMiddle";
    BoxHeightStyle["includeLineSpacingTop"] = "includeLineSpacingTop";
    BoxHeightStyle["includeLineSpacingBottom"] = "includeLineSpacingBottom";
    BoxHeightStyle["strut"] = "strut";
})(BoxHeightStyle = exports.BoxHeightStyle || (exports.BoxHeightStyle = {}));
//****** BoxWidthStyle ******
var BoxWidthStyle;
(function (BoxWidthStyle) {
    BoxWidthStyle["tight"] = "tight";
    BoxWidthStyle["max"] = "max";
})(BoxWidthStyle = exports.BoxWidthStyle || (exports.BoxWidthStyle = {}));
//#endregion
//#region ------ C ------
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
//#endregion
//#region ------ D ------
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
//****** DrawerAlignment ******
var DrawerAlignment;
(function (DrawerAlignment) {
    DrawerAlignment["start"] = "start";
    DrawerAlignment["end"] = "end";
})(DrawerAlignment = exports.DrawerAlignment || (exports.DrawerAlignment = {}));
//#endregion
//#region ------ F ------
//****** FlutterLogoStyle ******
var FlutterLogoStyle;
(function (FlutterLogoStyle) {
    FlutterLogoStyle["horizontal"] = "horizontal";
    FlutterLogoStyle["markOnly"] = "markOnly";
    FlutterLogoStyle["stacked"] = "stacked";
})(FlutterLogoStyle = exports.FlutterLogoStyle || (exports.FlutterLogoStyle = {}));
//****** FloatingLabelBehavior ******
var FloatingLabelBehavior;
(function (FloatingLabelBehavior) {
    FloatingLabelBehavior["never"] = "never";
    FloatingLabelBehavior["auto"] = "auto";
    FloatingLabelBehavior["always"] = "always";
})(FloatingLabelBehavior = exports.FloatingLabelBehavior || (exports.FloatingLabelBehavior = {}));
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
//****** FlexFit ******
var FlexFit;
(function (FlexFit) {
    FlexFit["tight"] = "tight";
    FlexFit["loose"] = "loose";
})(FlexFit = exports.FlexFit || (exports.FlexFit = {}));
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
//#endregion
//#region ------ H ------
//****** HitTestBehavior ******
var HitTestBehavior;
(function (HitTestBehavior) {
    HitTestBehavior["deferToChild"] = "deferToChild";
    HitTestBehavior["opaque"] = "opaque";
    HitTestBehavior["translucent"] = "translucent";
})(HitTestBehavior = exports.HitTestBehavior || (exports.HitTestBehavior = {}));
//#endregion
//#region ------ I ------
//****** ImageRepeat ******
var ImageRepeat;
(function (ImageRepeat) {
    ImageRepeat["repeat"] = "repeat";
    ImageRepeat["repeatX"] = "repeatX";
    ImageRepeat["repeatY"] = "repeatY";
    ImageRepeat["noRepeat"] = "noRepeat";
})(ImageRepeat = exports.ImageRepeat || (exports.ImageRepeat = {}));
//#endregion
//#region ------ L ------
//****** ListTileStyle ******
var ListTileStyle;
(function (ListTileStyle) {
    ListTileStyle["list"] = "list";
    ListTileStyle["drawer"] = "drawer";
})(ListTileStyle = exports.ListTileStyle || (exports.ListTileStyle = {}));
//****** ListTileControlAffinity ******
var ListTileControlAffinity;
(function (ListTileControlAffinity) {
    ListTileControlAffinity["leading"] = "leading";
    ListTileControlAffinity["trailing"] = "trailing";
    ListTileControlAffinity["platform"] = "platform";
})(ListTileControlAffinity = exports.ListTileControlAffinity || (exports.ListTileControlAffinity = {}));
//#endregion
//#region ------ M ------
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
//#endregion
//#region ------ N ------
//****** NavigationMode ******
var NavigationMode;
(function (NavigationMode) {
    NavigationMode["traditional"] = "traditional";
    NavigationMode["directional"] = "directional";
})(NavigationMode = exports.NavigationMode || (exports.NavigationMode = {}));
//#endregion
//#region ------ O ------
//****** Overflow ******
var Overflow;
(function (Overflow) {
    Overflow["visible"] = "visible";
    Overflow["clip"] = "clip";
})(Overflow = exports.Overflow || (exports.Overflow = {}));
//#endregion
//#region ------ P ------
//****** PaintingStyle ******
var PaintingStyle;
(function (PaintingStyle) {
    PaintingStyle["fill"] = "fill";
    PaintingStyle["stroke"] = "stroke";
})(PaintingStyle = exports.PaintingStyle || (exports.PaintingStyle = {}));
//****** PlaceholderAlignment ******
var PlaceholderAlignment;
(function (PlaceholderAlignment) {
    PlaceholderAlignment["baseline"] = "baseline";
    PlaceholderAlignment["aboveBaseline"] = "aboveBaseline";
    PlaceholderAlignment["belowBaseline"] = "belowBaseline";
    PlaceholderAlignment["top"] = "top";
    PlaceholderAlignment["bottom"] = "bottom";
    PlaceholderAlignment["middle"] = "middle";
})(PlaceholderAlignment = exports.PlaceholderAlignment || (exports.PlaceholderAlignment = {}));
//****** PointerChange ******
var PointerChange;
(function (PointerChange) {
    PointerChange["cancel"] = "cancel";
    PointerChange["add"] = "add";
    PointerChange["remove"] = "remove";
    PointerChange["hover"] = "hover";
    PointerChange["down"] = "down";
    PointerChange["move"] = "move";
    PointerChange["up"] = "up";
})(PointerChange = exports.PointerChange || (exports.PointerChange = {}));
//****** PointerDeviceKind ******
var PointerDeviceKind;
(function (PointerDeviceKind) {
    PointerDeviceKind["touch"] = "touch";
    PointerDeviceKind["mouse"] = "mouse";
    PointerDeviceKind["invertedStylus"] = "invertedStylus";
    PointerDeviceKind["unknown"] = "unknown";
})(PointerDeviceKind = exports.PointerDeviceKind || (exports.PointerDeviceKind = {}));
//****** PointerSignalKind ******
var PointerSignalKind;
(function (PointerSignalKind) {
    PointerSignalKind["none"] = "none";
    PointerSignalKind["scroll"] = "scroll";
    PointerSignalKind["unknown"] = "unknown";
})(PointerSignalKind = exports.PointerSignalKind || (exports.PointerSignalKind = {}));
//#endregion
//#region ------ R ------
//****** RenderComparison ******
var RenderComparison;
(function (RenderComparison) {
    RenderComparison["identical"] = "identical";
    RenderComparison["metadata"] = "metadata";
    RenderComparison["paint"] = "paint";
    RenderComparison["layout"] = "layout";
})(RenderComparison = exports.RenderComparison || (exports.RenderComparison = {}));
//#endregion
//#region ------ S ------
//****** StackFit ******
var StackFit;
(function (StackFit) {
    StackFit["loose"] = "loose";
    StackFit["expand"] = "expand";
    StackFit["passthrough"] = "passthrough";
})(StackFit = exports.StackFit || (exports.StackFit = {}));
//****** ScrollViewKeyboardDismissBehavior ******
var ScrollViewKeyboardDismissBehavior;
(function (ScrollViewKeyboardDismissBehavior) {
    ScrollViewKeyboardDismissBehavior["manual"] = "manual";
    ScrollViewKeyboardDismissBehavior["onDrag"] = "onDrag";
})(ScrollViewKeyboardDismissBehavior = exports.ScrollViewKeyboardDismissBehavior || (exports.ScrollViewKeyboardDismissBehavior = {}));
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
//****** SnackBarClosedReason ******
var SnackBarClosedReason;
(function (SnackBarClosedReason) {
    SnackBarClosedReason["action"] = "action";
    SnackBarClosedReason["dismiss"] = "dismiss";
    SnackBarClosedReason["swipe"] = "swipe";
    SnackBarClosedReason["hide"] = "hide";
    SnackBarClosedReason["remove"] = "remove";
    SnackBarClosedReason["timeout"] = "timeout";
})(SnackBarClosedReason = exports.SnackBarClosedReason || (exports.SnackBarClosedReason = {}));
//****** ScrollPositionAlignmentPolicy ******
var ScrollPositionAlignmentPolicy;
(function (ScrollPositionAlignmentPolicy) {
    ScrollPositionAlignmentPolicy["explicit"] = "explicit";
    ScrollPositionAlignmentPolicy["keepVisibleAtEnd"] = "keepVisibleAtEnd";
    ScrollPositionAlignmentPolicy["keepVisibleAtStart"] = "keepVisibleAtStart";
})(ScrollPositionAlignmentPolicy = exports.ScrollPositionAlignmentPolicy || (exports.ScrollPositionAlignmentPolicy = {}));
//#endregion
//#region ------ T ------
//****** TileMode ******
var TileMode;
(function (TileMode) {
    TileMode["clamp"] = "clamp";
    TileMode["repeated"] = "repeated";
    TileMode["mirror"] = "mirror";
})(TileMode = exports.TileMode || (exports.TileMode = {}));
//****** SmartDashesType ******
var SmartDashesType;
(function (SmartDashesType) {
    SmartDashesType["disabled"] = "disabled";
    SmartDashesType["enabled"] = "enabled";
})(SmartDashesType = exports.SmartDashesType || (exports.SmartDashesType = {}));
//****** SmartQuotesType ******
var SmartQuotesType;
(function (SmartQuotesType) {
    SmartQuotesType["disabled"] = "disabled";
    SmartQuotesType["enabled"] = "enabled";
})(SmartQuotesType = exports.SmartQuotesType || (exports.SmartQuotesType = {}));
//****** TextWidthBasis ******
var TextWidthBasis;
(function (TextWidthBasis) {
    TextWidthBasis["parent"] = "parent";
    TextWidthBasis["longestLine"] = "longestLine";
})(TextWidthBasis = exports.TextWidthBasis || (exports.TextWidthBasis = {}));
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
    TextDecorationStyle["dashed"] = "dashed";
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
    TargetPlatform["linux"] = "linux";
    TargetPlatform["macOS"] = "macOS";
    TargetPlatform["windows"] = "windows";
})(TargetPlatform = exports.TargetPlatform || (exports.TargetPlatform = {}));
//#endregion
//#region ------ V ------
//****** VerticalDirection ******
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection["up"] = "up";
    VerticalDirection["down"] = "down";
})(VerticalDirection = exports.VerticalDirection || (exports.VerticalDirection = {}));
//#endregion
//#region ------ W ------
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
//#endregion 
//#endregion
//#region ******** Class ********
//#region ------- A ------- 
//#region AlignmentGeometry 
///AlignmentGeometry
class AlignmentGeometry extends DartClass {
}
exports.AlignmentGeometry = AlignmentGeometry;
///Alignment
class Alignment extends AlignmentGeometry {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    static new(x, y) {
        return new Alignment(x, y);
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
///AlignmentDirectional
class AlignmentDirectional extends AlignmentGeometry {
    constructor(start, y) {
        super();
        this.start = start;
        this.y = y;
    }
    static new(start, y) {
        return new AlignmentDirectional(start, y);
    }
}
exports.AlignmentDirectional = AlignmentDirectional;
AlignmentDirectional.topStart = AlignmentDirectional.new(-1.0, -1.0);
AlignmentDirectional.topCenter = AlignmentDirectional.new(0.0, -1.0);
AlignmentDirectional.topEnd = AlignmentDirectional.new(1.0, -1.0);
AlignmentDirectional.centerStart = AlignmentDirectional.new(-1.0, 0.0);
AlignmentDirectional.center = AlignmentDirectional.new(0.0, 0.0);
AlignmentDirectional.centerEnd = AlignmentDirectional.new(1.0, 0.0);
AlignmentDirectional.bottomStart = AlignmentDirectional.new(-1.0, 1.0);
AlignmentDirectional.bottomCenter = AlignmentDirectional.new(0.0, 1.0);
AlignmentDirectional.bottomEnd = AlignmentDirectional.new(1.0, 1.0);
//#endregion
//#region AssetBundle 
//****** AssetBundle ******
class AssetBundle extends DartClass {
}
exports.AssetBundle = AssetBundle;
//****** PlatformAssetBundle ******
class PlatformAssetBundle extends AssetBundle {
    constructor() {
        super();
    }
    static new() {
        return new PlatformAssetBundle();
    }
}
exports.PlatformAssetBundle = PlatformAssetBundle;
//****** NetworkAssetBundle ******
class NetworkAssetBundle extends AssetBundle {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
    }
    static new(baseUrl) {
        return new NetworkAssetBundle(baseUrl);
    }
}
exports.NetworkAssetBundle = NetworkAssetBundle;
class BorderSide extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.width = config.width;
            this.style = config.style;
        }
    }
    /**
     * @param config config:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle
        }
     */
    static new(config) {
        return new BorderSide(config);
    }
    static none() {
        let v = new BorderSide();
        v.constructorName = "none";
        return v;
    }
}
exports.BorderSide = BorderSide;
//#endregion
//#region BorderRadiusGeometry 
//****** BorderRadiusGeometry ******
class BorderRadiusGeometry extends DartClass {
}
exports.BorderRadiusGeometry = BorderRadiusGeometry;
class BorderRadius extends BorderRadiusGeometry {
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
     * @param config config:
        {
          top?:Radius,
          bottom?:Radius
        }
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
     * @param config config:
        {
          left?:Radius,
          right?:Radius
        }
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
     * @param config config:
        {
          topLeft?:Radius,
          topRight?:Radius,
          bottomLeft?:Radius,
          bottomRight?:Radius,
        }
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
class BorderRadiusDirectional extends BorderRadiusGeometry {
    static zero() {
        let o = new BorderRadiusDirectional();
        o.constructorName = "zero";
        return o;
    }
    static all(radius) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "all";
        v.radius = radius;
        return v;
    }
    static circular(radius) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "circular";
        v.radius = radius;
        return v;
    }
    /**
     * @param config config:
        {
          top?:Radius,
          bottom?:Radius
        }
     */
    static vertical(config) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "vertical";
        if (config != null && config != undefined) {
            v.top = config.top;
            v.bottom = config.bottom;
        }
        return v;
    }
    /**
     * @param config config:
        {
          start?:Radius,
          end?:Radius
        }
     */
    static horizontal(config) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "horizontal";
        if (config != null && config != undefined) {
            v.start = config.start;
            v.end = config.end;
        }
        return v;
    }
    /**
     * @param config config:
        {
          topStart?:Radius,
          topEnd?:Radius,
          bottomLeft?:Radius,
          bottomRight?:Radius,
        }
     */
    static only(config) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "only";
        if (config != null && config != undefined) {
            v.topStart = config.topStart;
            v.topEnd = config.topEnd;
            v.bottomStart = config.bottomStart;
            v.bottomEnd = config.bottomEnd;
        }
        return v;
    }
}
exports.BorderRadiusDirectional = BorderRadiusDirectional;
class BannerPainter extends DartClass {
    /**
     * @param config config:
        {
          message?:string,
          textDirection?:TextDirection,
          location?:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.message = config.message;
            this.textDirection = config.textDirection;
            this.location = config.location;
            this.layoutDirection = config.layoutDirection;
            this.color = config.color;
            this.textStyle = config.textStyle;
        }
    }
    /**
     * @param config config:
        {
          message?:string,
          textDirection?:TextDirection,
          location?:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
      */
    static new(config) {
        return new BannerPainter(config);
    }
}
exports.BannerPainter = BannerPainter;
class BoxShadow extends DartClass {
    /**
     * @param config config:
      {
        color?:Color,
        offset?:Offset,
        blurRadius?:number,
        spreadRadius?:number
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.offset = config.offset;
            this.blurRadius = config.blurRadius;
            this.spreadRadius = config.spreadRadius;
        }
    }
    /**
     * @param config config:
      {
        color?:Color,
        offset?:Offset,
        blurRadius?:number,
        spreadRadius?:number
      }
     */
    static new(config) {
        return new BoxShadow(config);
    }
}
exports.BoxShadow = BoxShadow;
//#endregion
//#region ------- C -------
//#region ------- Constraints -------
//****** Constraints ******
class Constraints extends DartClass {
    /**
     * Constraints.box = new BoxConstraints(config?: BoxConstraintsConfig)
     * @param config config:
      {
        minWidth?:number,
        maxWidth?:number,
        minHeight?:number,
        maxHeight?:number
      }
     */
    static box(config) {
        return new BoxConstraints(config);
    }
}
exports.Constraints = Constraints;
class BoxConstraints extends Constraints {
    /**
     * @param config config:
      {
        minWidth?:number,
        maxWidth?:number,
        minHeight?:number,
        maxHeight?:number
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.minWidth = config.minWidth;
            this.maxWidth = config.maxWidth;
            this.minHeight = config.minHeight;
            this.maxHeight = config.maxHeight;
        }
    }
    /**
     * @param config config:
      {
        minWidth?:number,
        maxWidth?:number,
        minHeight?:number,
        maxHeight?:number
      }
     */
    static new(config) {
        return new BoxConstraints(config);
    }
}
exports.BoxConstraints = BoxConstraints;
//#endregion
//#region Color
class Color extends DartClass {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new Color(value);
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
//#endregion
//#region Colors
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
Colors.white60 = Color.new(0x99FFFFFF);
Colors.white54 = Color.new(0x8affffff);
Colors.white38 = Color.new(0x62FFFFFF);
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
//#endregion
//#region ColorFilter
class ColorFilter extends DartClass {
    constructor(color, blendMode) {
        super();
        this.color = color;
        this.blendMode = blendMode;
    }
    static new(color, blendMode) {
        return new ColorFilter(color, blendMode);
    }
    static mode(color, blendMode) {
        let v = new ColorFilter(color, blendMode);
        v.constructorName = "mode";
        return v;
    }
}
exports.ColorFilter = ColorFilter;
class DragDownDetails extends DartClass {
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.globalPosition = config.globalPosition;
            this.localPosition = config.localPosition;
        }
    }
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
        }
     */
    static new(config) {
        return new DragDownDetails(config);
    }
}
exports.DragDownDetails = DragDownDetails;
class DragStartDetails extends DartClass {
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          sourceTimeStamp?:Duration,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.globalPosition = config.globalPosition;
            this.localPosition = config.localPosition;
            this.sourceTimeStamp = config.sourceTimeStamp;
        }
    }
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          sourceTimeStamp?:Duration,
        }
     */
    static new(config) {
        return new DragStartDetails(config);
    }
}
exports.DragStartDetails = DragStartDetails;
class DragUpdateDetails extends DartClass {
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          sourceTimeStamp?:Duration,
          delta?:Offset,
          primaryDelta?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.globalPosition = config.globalPosition;
            this.localPosition = config.localPosition;
            this.sourceTimeStamp = config.sourceTimeStamp;
            this.delta = config.delta;
            this.primaryDelta = config.primaryDelta;
        }
    }
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          sourceTimeStamp?:Duration,
          delta?:Offset,
          primaryDelta?:number,
        }
     */
    static new(config) {
        return new DragUpdateDetails(config);
    }
}
exports.DragUpdateDetails = DragUpdateDetails;
class DragEndDetails extends DartClass {
    /**
     * @param config config:
        {
          velocity?:Velocity,
          primaryVelocity?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.velocity = config.velocity;
            this.primaryVelocity = config.primaryVelocity;
        }
    }
    /**
     * @param config config:
        {
          velocity?:Velocity,
          primaryVelocity?:number,
        }
     */
    static new(config) {
        return new DragEndDetails(config);
    }
}
exports.DragEndDetails = DragEndDetails;
class Duration extends DartClass {
    /**
     * @param config config:
        {
          days?:number,
          hours?:number,
          minutes?:number,
          seconds?:number,
          milliseconds?:number
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.days = config.days;
            this.hours = config.hours;
            this.minutes = config.minutes;
            this.seconds = config.seconds;
            this.milliseconds = config.milliseconds;
        }
        this.inMilliseconds = 0;
        if (this.milliseconds != null && this.milliseconds != undefined) {
            this.inMilliseconds = this.inMilliseconds + this.milliseconds;
        }
        if (this.seconds != null && this.seconds != undefined) {
            this.inMilliseconds = this.inMilliseconds + this.seconds * 1000;
        }
        if (this.minutes != null && this.minutes != undefined) {
            this.inMilliseconds = this.inMilliseconds + this.minutes * 1000 * 60;
        }
        if (this.hours != null && this.hours != undefined) {
            this.inMilliseconds = this.inMilliseconds + this.hours * 1000 * 60 * 60;
        }
        if (this.days != null && this.days != undefined) {
            this.inMilliseconds = this.inMilliseconds + this.days * 1000 * 60 * 60 * 24;
        }
    }
    /**
     * @param config config:
        {
          days?:number,
          hours?:number,
          minutes?:number,
          seconds?:number,
          milliseconds?:number
        }
     */
    static new(config) {
        return new Duration(config);
    }
}
exports.Duration = Duration;
//#endregion
//#region ****** Decoration ******
class Decoration extends DartClass {
    /**
     * Decoration.box = new BoxDecoration(config?: BoxDecorationConfig)
     * @param config
        {
          color?:Color,
          border?:Border;
          borderRadius?:BorderRadius,
          boxShadow?:BoxShadow,
          gradient?:BaseGradient
          backgroundBlendMode?:BlendMode,
          shape?:BoxShape,
          image?:DecorationImage,
        }
     */
    static box(config) {
        return new BoxDecoration(config);
    }
    /**
     * Decoration.flutterLogo = new FlutterLogoDecoration(config?: FlutterLogoDecorationConfig)
     * @param config config:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    static flutterLogo(config) {
        return new FlutterLogoDecoration(config);
    }
}
exports.Decoration = Decoration;
class BoxDecoration extends Decoration {
    /**
     * @param config config:
        {
          color?:Color,
          border?:Border;
          borderRadius?:BorderRadius,
          boxShadow?:BoxShadow,
          gradient?:BaseGradient
          backgroundBlendMode?:BlendMode,
          shape?:BoxShape,
          image?:DecorationImage,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.border = config.border;
            this.borderRadius = config.borderRadius;
            this.boxShadow = config.boxShadow;
            this.gradient = config.gradient;
            this.backgroundBlendMode = config.backgroundBlendMode;
            this.shape = config.shape;
            this.image = config.image;
        }
    }
    /**
     * @param config config:
        {
          color?:Color,
          border?:Border;
          borderRadius?:BorderRadius,
          boxShadow?:BoxShadow,
          gradient?:BaseGradient
          backgroundBlendMode?:BlendMode,
          shape?:BoxShape,
          image?:DecorationImage,
        }
      */
    static new(config) {
        return new BoxDecoration(config);
    }
}
exports.BoxDecoration = BoxDecoration;
class FlutterLogoDecoration extends Decoration {
    /**
     * @param config config:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.textColor = config.textColor;
            this.style = config.style;
            this.margin = config.margin;
        }
    }
    /**
     * @param config config:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    static new(config) {
        return new FlutterLogoDecoration(config);
    }
}
exports.FlutterLogoDecoration = FlutterLogoDecoration;
//#endregion
//#endregion
//#region ------- E -------
//#region ------- EdgeInsetsGeometry -------
//EdgeInsetsGeometry
class EdgeInsetsGeometry extends DartClass {
}
exports.EdgeInsetsGeometry = EdgeInsetsGeometry;
class EdgeInsets extends EdgeInsetsGeometry {
    /**
     * @param config config:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.left = config.left;
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
        }
    }
    /**
     * @param config config:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    static new(config) {
        return new EdgeInsets(config);
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
     * @param config config:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
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
     * @param config config:
        {
          vertical?:number,
          horizontal?:number
        }
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
class EdgeInsetsDirectional extends EdgeInsetsGeometry {
    /**
     * @param config config:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.start = config.start;
            this.top = config.top;
            this.end = config.end;
            this.bottom = config.bottom;
        }
    }
    /**
     * @param config config:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
        }
     */
    static new(config) {
        return new EdgeInsetsDirectional(config);
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
     * @param config config:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number
        }
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
//#endregion
//#endregion
//#region ------- F -------
//****** Future ******
class Future extends DartClass {
    /**
     * 延时处理
     * @param duration
     * @param onBack
     */
    static delayed(duration, onBack) {
        dart_sdk.async.Future.delayed(duration, onBack);
    }
}
exports.Future = Future;
class FocusNode extends DartClass {
    /**
     * @param config config:
        {
          debugLabel?:string,
          skipTraversal?:boolean,
          canRequestFocus?:boolean,
          descendantsAreFocusable?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.debugLabel = config.debugLabel;
            this.skipTraversal = config.skipTraversal;
            this.canRequestFocus = config.canRequestFocus;
            this.descendantsAreFocusable = config.descendantsAreFocusable;
        }
    }
    /**
     * @param config config:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    static new(config) {
        return new FocusNode(config);
    }
}
exports.FocusNode = FocusNode;
//****** FractionalOffset ******
class FractionalOffset extends DartClass {
    constructor(dx, dy) {
        super();
        this.dx = dx;
        this.dy = dy;
    }
    static new(dx, dy) {
        return new FractionalOffset(dx, dy);
    }
}
exports.FractionalOffset = FractionalOffset;
FractionalOffset.topLeft = FractionalOffset.new(0.0, 0.0);
FractionalOffset.topCenter = FractionalOffset.new(0.5, 0.0);
FractionalOffset.topRight = FractionalOffset.new(1.0, 0.0);
FractionalOffset.centerLeft = FractionalOffset.new(0.0, 0.5);
FractionalOffset.center = FractionalOffset.new(0.5, 0.5);
FractionalOffset.centerRight = FractionalOffset.new(1.0, 0.5);
FractionalOffset.bottomLeft = FractionalOffset.new(0.0, 1.0);
FractionalOffset.bottomCenter = FractionalOffset.new(0.5, 1.0);
FractionalOffset.bottomRight = FractionalOffset.new(1.0, 1.0);
//****** File ******
class File extends DartClass {
    constructor(path) {
        super();
        this.path = path;
    }
    static new(path) {
        return new File(path);
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
//#endregion
//#region ------- G -------
//#region ****** GradientTransform ******
class GradientTransform extends DartClass {
    static rotation(radians) {
        return new GradientRotation(radians);
    }
}
exports.GradientTransform = GradientTransform;
class GradientRotation extends GradientTransform {
    /**
     *
     * @param radians
     */
    constructor(radians) {
        super();
        this.radians = radians;
    }
    /**
     *
     * @param radians
     */
    static new(radians) {
        return new GradientRotation(radians);
    }
}
exports.GradientRotation = GradientRotation;
//#endregion
//#region ****** Gradient ******
class Gradient extends DartClass {
    /**
     * @param config config:
        {
          begin?:Alignment,
          end?:Alignment,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    static linear(config) {
        return new LinearGradient(config);
    }
    /**
     * @param config config:
        {
          center?:Alignment,
          radius?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          focal?:Alignment,
          focalRadius?:number,
          transform?:GradientRotation,
        }
     */
    static radial(config) {
        return new RadialGradient(config);
    }
    /**
     * @param config config:
        {
          center?:Alignment,
          startAngle?:number,
          endAngle?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    static sweep(config) {
        return new SweepGradient(config);
    }
}
exports.Gradient = Gradient;
class LinearGradient extends Gradient {
    /**
     * @param config config:
        {
          begin?:Alignment,
          end?:Alignment,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.begin = config.begin;
            this.end = config.end;
            this.colors = config.colors;
            this.stops = config.stops;
            this.tileMode = config.tileMode;
            this.transform = config.transform;
        }
    }
    /**
     * @param config config:
        {
          begin?:Alignment,
          end?:Alignment,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    static new(config) {
        return new LinearGradient(config);
    }
}
exports.LinearGradient = LinearGradient;
class RadialGradient extends Gradient {
    /**
     * @param config config:
        {
          center?:Alignment,
          radius?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          focal?:Alignment,
          focalRadius?:number,
          transform?:GradientRotation,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.center = config.center;
            this.radius = config.radius;
            this.colors = config.colors;
            this.stops = config.stops;
            this.tileMode = config.tileMode;
            this.focal = config.focal;
            this.focalRadius = config.focalRadius;
            this.transform = config.transform;
        }
    }
    /**
     * @param config config:
        {
          center?:Alignment,
          radius?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          focal?:Alignment,
          focalRadius?:number,
          transform?:GradientRotation,
        }
     */
    static new(config) {
        return new RadialGradient(config);
    }
}
exports.RadialGradient = RadialGradient;
class SweepGradient extends Gradient {
    /**
     * @param config config:
        {
          center?:Alignment,
          startAngle?:number,
          endAngle?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.center = config.center;
            this.startAngle = config.startAngle;
            this.endAngle = config.endAngle;
            this.colors = config.colors;
            this.stops = config.stops;
            this.tileMode = config.tileMode;
            this.transform = config.transform;
        }
    }
    /**
     * @param config config:
        {
          center?:Alignment,
          startAngle?:number,
          endAngle?:number,
          colors:Array<Color>,
          stops?:Array<number>,
          tileMode?:TileMode,
          transform?:GradientRotation,
        }
     */
    static new(config) {
        return new SweepGradient(config);
    }
}
exports.SweepGradient = SweepGradient;
class ImageFilter extends DartClass {
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.sigmaX = config.sigmaX;
            this.sigmaY = config.sigmaY;
        }
    }
    static new(config) {
        return new ImageFilter(config);
    }
    static blur(config) {
        let v = new ImageFilter();
        v.constructorName = "blur";
        if (config != null && config != undefined) {
            v.sigmaX = config.sigmaX;
            v.sigmaY = config.sigmaY;
        }
        return v;
    }
}
exports.ImageFilter = ImageFilter;
class ImageProvider extends DartClass {
    /**
     * @param config config:
        {
          scale?:number
        }
     */
    static file(file, config) {
        var v = new ImageProvider();
        v.file = file;
        v.constructorName = "file";
        if (config != null && config != undefined) {
            v.scale = config.scale;
        }
        return v;
    }
    /**
     * @param config config:
        {
          scale?:number,
        }
     */
    static memory(bytes, config) {
        var v = new ImageProvider();
        v.bytes = bytes;
        v.constructorName = "memory";
        if (config != null && config != undefined) {
            v.scale = config.scale;
        }
        return v;
    }
    /**
    * @param config config:
       {
         scale?:number,
       }
    */
    static network(url, config) {
        var v = new ImageProvider();
        v.url = url;
        v.constructorName = "Network";
        if (config != null && config != undefined) {
            v.scale = config.scale;
        }
        return v;
    }
    /**
     * @param config config:
        {
          width?:number,
          height?:number,
          allowUpscaling?:boolean,
        }
     */
    static resize(imageProvider, config) {
        var v = new ImageProvider();
        v.constructorName = "resize";
        v.imageProvider = imageProvider;
        if (config != null && config != undefined) {
            v.width = config.width;
            v.allowUpscaling = config.allowUpscaling;
            v.height = config.height;
        }
        return v;
    }
    /**
     * @param config config:
        {
          imageName:string,
          scale?:number,
          bundle?:BaseAssetBundle,
          packageName?:string,
        }
     */
    static exactAsset(imageName, config) {
        var v = new ImageProvider();
        v.constructorName = "exactAsset";
        v.imageName = imageName;
        if (config != null && config != undefined) {
            v.scale = config.scale;
            v.bundle = config.bundle;
            v.packageName = config.packageName;
        }
        return v;
    }
}
exports.ImageProvider = ImageProvider;
//#endregion
//****** IconData ******
class IconData extends DartClass {
    constructor(icon) {
        super();
        this.icon = icon;
    }
    static new(icon) {
        return new IconData(icon);
    }
}
exports.IconData = IconData;
class InputDecoration extends DartClass {
    /**
     * @param config config:
        {
          icon?:Widget,
          labelText?:string,
          labelStyle?:TextStyle,
          helperText?:string,
          helperStyle?:TextStyle,
          helperMaxLines?:number,
          hintText?:string,
          hintStyle?:TextStyle,
          hintMaxLines?:number,
          errorText?:string,
          errorStyle?:TextStyle,
          errorMaxLines?:number,
          hasFloatingPlaceholder?:boolean,
          floatingLabelBehavior?:FloatingLabelBehavior,
          isCollapsed?:boolean,
          isDense?:boolean,
          contentPadding?:EdgeInsets,
          prefixIcon?:Widget,
          prefixIconConstraints?:BoxConstraints,
          prefix?:Widget,
          prefixText?:string,
          prefixStyle?:TextStyle,
          suffixIcon?:Widget,
          suffix?:Widget,
          suffixText?:string,
          suffixStyle?:TextStyle,
          suffixIconConstraints?:BoxConstraints,
          counter?:Widget,
          counterText?:string,
          counterStyle?:TextStyle,
          filled?:boolean,
          fillColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          errorBorder?:InputBorder,
          focusedBorder?:InputBorder,
          focusedErrorBorder?:InputBorder,
          disabledBorder?:InputBorder,
          enabledBorder?:InputBorder,
          border?:InputBorder,
          enabled?:boolean,
          semanticCounterText?:string,
          alignLabelWithHint?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.icon = config.icon;
            this.labelText = config.labelText;
            this.labelStyle = config.labelStyle;
            this.helperText = config.helperText;
            this.helperStyle = config.helperStyle;
            this.helperMaxLines = config.helperMaxLines;
            this.hintText = config.hintText;
            this.hintStyle = config.hintStyle;
            this.hintMaxLines = config.hintMaxLines;
            this.errorText = config.errorText;
            this.errorStyle = config.errorStyle;
            this.errorMaxLines = config.errorMaxLines;
            this.hasFloatingPlaceholder = config.hasFloatingPlaceholder;
            this.floatingLabelBehavior = config.floatingLabelBehavior;
            this.isCollapsed = config.isCollapsed;
            this.isDense = config.isDense;
            this.contentPadding = config.contentPadding;
            this.prefixIcon = config.prefixIcon;
            this.prefixIconConstraints = config.prefixIconConstraints;
            this.prefix = config.prefix;
            this.prefixText = config.prefixText;
            this.prefixStyle = config.prefixStyle;
            this.suffixIcon = config.suffixIcon;
            this.suffix = config.suffix;
            this.suffixText = config.suffixText;
            this.suffixStyle = config.suffixStyle;
            this.suffixIconConstraints = config.suffixIconConstraints;
            this.counter = config.counter;
            this.counterText = config.counterText;
            this.counterStyle = config.counterStyle;
            this.filled = config.filled;
            this.fillColor = config.fillColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.errorBorder = config.errorBorder;
            this.focusedBorder = config.focusedBorder;
            this.focusedErrorBorder = config.focusedErrorBorder;
            this.disabledBorder = config.disabledBorder;
            this.enabledBorder = config.enabledBorder;
            this.border = config.border;
            this.enabled = config.enabled;
            this.semanticCounterText = config.semanticCounterText;
            this.alignLabelWithHint = config.alignLabelWithHint;
        }
    }
    /**
     * @param config config:
        {
          icon?:Widget,
          labelText?:string,
          labelStyle?:TextStyle,
          helperText?:string,
          helperStyle?:TextStyle,
          helperMaxLines?:number,
          hintText?:string,
          hintStyle?:TextStyle,
          hintMaxLines?:number,
          errorText?:string,
          errorStyle?:TextStyle,
          errorMaxLines?:number,
          hasFloatingPlaceholder?:boolean,
          floatingLabelBehavior?:FloatingLabelBehavior,
          isCollapsed?:boolean,
          isDense?:boolean,
          contentPadding?:EdgeInsets,
          prefixIcon?:Widget,
          prefixIconConstraints?:BoxConstraints,
          prefix?:Widget,
          prefixText?:string,
          prefixStyle?:TextStyle,
          suffixIcon?:Widget,
          suffix?:Widget,
          suffixText?:string,
          suffixStyle?:TextStyle,
          suffixIconConstraints?:BoxConstraints,
          counter?:Widget,
          counterText?:string,
          counterStyle?:TextStyle,
          filled?:boolean,
          fillColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          errorBorder?:InputBorder,
          focusedBorder?:InputBorder,
          focusedErrorBorder?:InputBorder,
          disabledBorder?:InputBorder,
          enabledBorder?:InputBorder,
          border?:InputBorder,
          enabled?:boolean,
          semanticCounterText?:string,
          alignLabelWithHint?:boolean,
        }
     */
    static new(config) {
        return new InputDecoration(config);
    }
    /**
     * @param config config:
        {
          hintText?:string,
          hasFloatingPlaceholder?:boolean,
          hintStyle?:TextStyle,
          filled?:boolean,
          fillColor?:Color,
          border?:InputBorder,
          enabled?:boolean
        }
     */
    static collapsed(config) {
        let v = new InputDecoration();
        v.constructorName = "collapsed";
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
//#endregion
//#region ------- K -------
//#region ****** Key ******
class Key extends DartClass {
    /**
     * Key.value = new ValueKey(value:string)
     * @param value
     */
    static value(value) {
        return new ValueKey(value);
    }
    /**
     * Key.unique = new UniqueKey()
     * @param value
     */
    static unique() {
        return new UniqueKey();
    }
    /**
     * Key.global = new GlobalKey(debugLabel:string)
     * @param debugLabel 标签
     */
    static global(debugLabel) {
        return new GlobalKey(debugLabel);
    }
}
exports.Key = Key;
class ValueKey extends Key {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new ValueKey(value);
    }
}
exports.ValueKey = ValueKey;
class UniqueKey extends Key {
    constructor() {
        super();
    }
    static new() {
        return new UniqueKey();
    }
}
exports.UniqueKey = UniqueKey;
class GlobalKey extends Key {
    constructor(debugLabel) {
        super();
        this.debugLabel = debugLabel;
    }
    static new(debugLabel) {
        return new GlobalKey(debugLabel);
    }
}
exports.GlobalKey = GlobalKey;
//#endregion
//#endregion
//#region ------- M -------
//****** MaskFilter ******
class MaskFilter extends DartClass {
    constructor(style, sigma) {
        super();
        this.style = style;
        this.sigma = sigma;
    }
    static new(style, sigma) {
        return new MaskFilter(style, sigma);
    }
    static blur(style, sigma) {
        let v = new MaskFilter(style, sigma);
        v.constructorName = "blur";
        return v;
    }
}
exports.MaskFilter = MaskFilter;
//****** Matrix4 ******
class Matrix4 extends DartClass {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
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
        return new Matrix4(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
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
//#endregion
//#region ------- N -------
//#region NotchedShape
//****** NotchedShape ******
class NotchedShape extends DartClass {
}
exports.NotchedShape = NotchedShape;
//****** CircularNotchedRectangle ******
class CircularNotchedRectangle extends NotchedShape {
    constructor() {
        super();
    }
    static new() {
        return new CircularNotchedRectangle();
    }
}
exports.CircularNotchedRectangle = CircularNotchedRectangle;
//****** AutomaticNotchedShape ******
class AutomaticNotchedShape extends NotchedShape {
    constructor(host, guest) {
        super();
        this.host = host;
        this.guest = guest;
    }
    static new(host, guest) {
        return new AutomaticNotchedShape(host, guest);
    }
}
exports.AutomaticNotchedShape = AutomaticNotchedShape;
//#endregion
//****** TODO Notification ******
class Notification extends DartClass {
    static new() {
        return new Notification();
    }
}
exports.Notification = Notification;
//#endregion
//#region ------- O -------
//****** Offset ****** 
class Offset extends DartClass {
    constructor(dx, dy) {
        super();
        this.dx = dx;
        this.dy = dy;
    }
    static new(dx, dy) {
        return new Offset(dx, dy);
    }
    static zero() {
        let v = new Offset();
        v.constructorName = "zero";
        return v;
    }
    static infinite() {
        let v = new Offset();
        v.constructorName = "infinite";
        return v;
    }
    static fromDirection(direction) {
        let v = new Offset();
        v.constructorName = "fromDirection";
        v.direction = direction;
        return v;
    }
}
exports.Offset = Offset;
//#endregion
//#region ------- Q -------
//****** Quaternion ******
class Quaternion extends DartClass {
    constructor(x, y, z, w) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    static new(x, y, z, w) {
        return new Quaternion(x, y, z, w);
    }
}
exports.Quaternion = Quaternion;
//#endregion
//#region ------- R -------
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
class RegExp extends DartClass {
    /**
     * @param config config:
        {
          multiLine?:boolean,
          caseSensitive?:boolean,
          unicode?:boolean,
          dotAll?:boolean,
        }
     */
    constructor(source, config) {
        super();
        this.source = source;
        if (config != null && config != undefined) {
            this.multiLine = config.multiLine;
            this.caseSensitive = config.caseSensitive;
            this.unicode = config.unicode;
            this.dotAll = config.dotAll;
        }
    }
    /**
     * @param config config:
        {
          multiLine?:boolean,
          caseSensitive?:boolean,
          unicode?:boolean,
          dotAll?:boolean,
        }
     */
    static new(source, config) {
        return new RegExp(source, config);
    }
}
exports.RegExp = RegExp;
class Rect extends DartClass {
    /**
     * @param config config:
        {
          center?:Offset,
          width?:number,
          height?:number
        }
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
     * @param config config:
      {
        center?:Offset,
        radius?:number
      }
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
    static fromPoints(a, b) {
        let v = new Rect();
        v.constructorName = "fromPoints";
        v.a = a;
        v.b = b;
        return v;
    }
    static zero() {
        let v = new Rect();
        v.constructorName = "zero";
        return v;
    }
    static largest() {
        let v = new Rect();
        v.constructorName = "largest";
        return v;
    }
}
exports.Rect = Rect;
//****** RelativeRect ******
class RelativeRect extends DartClass {
    static fromLTRB(left, top, right, bottom) {
        let v = new RelativeRect();
        v.constructorName = "fromLTRB";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        return v;
    }
    static fromSize(rect, container) {
        let v = new RelativeRect();
        v.constructorName = "fromSize";
        v.rect = rect;
        v.container = container;
        return v;
    }
    static fromRect(rect, rect1) {
        let v = new RelativeRect();
        v.constructorName = "fromRect";
        v.rect = rect;
        v.rect1 = rect1;
        return v;
    }
    static fill() {
        let v = new RelativeRect();
        v.constructorName = "fill";
        return v;
    }
}
exports.RelativeRect = RelativeRect;
class RRect extends DartClass {
    static fromLTRBXY(left, top, right, bottom, radiusX, radiusY) {
        let v = new RRect();
        v.constructorName = "fromLTRBXY";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        v.radiusX = radiusX;
        v.radiusY = radiusY;
        return v;
    }
    static fromLTRBR(left, top, right, bottom, radius) {
        let v = new RRect();
        v.constructorName = "fromLTRBR";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        v.radius = radius;
        return v;
    }
    static fromRectXY(rect, radiusX, radiusY) {
        let v = new RRect();
        v.constructorName = "fromRectXY";
        v.rect = rect;
        v.radiusX = radiusX;
        v.radiusY = radiusY;
        return v;
    }
    static fromRectAndRadius(rect, radius) {
        let v = new RRect();
        v.constructorName = "fromRectAndRadius";
        v.rect = rect;
        v.radius = radius;
        return v;
    }
    /**
     * @param config config:
      {
        topLeft?:Radius,
        topRight?:Radius,
        bottomRight?:Radius,
        bottomLeft?:Radius,
      }
     */
    static fromLTRBAndCorners(left, top, right, bottom, config) {
        let v = new RRect();
        v.constructorName = "fromLTRBAndCorners";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        if (config != null && config != undefined) {
            v.topLeft = config.topLeft;
            v.topRight = config.topRight;
            v.bottomLeft = config.bottomLeft;
            v.bottomRight = config.bottomRight;
        }
        return v;
    }
    /**
     * @param config config:
      {
        topLeft?:Radius,
        topRight?:Radius,
        bottomRight?:Radius,
        bottomLeft?:Radius,
      }
     */
    static fromRectAndCorners(rect, config) {
        let v = new RRect();
        v.constructorName = "fromRectAndCorners";
        v.rect = rect;
        if (config != null && config != undefined) {
            v.topLeft = config.topLeft;
            v.topRight = config.topRight;
            v.bottomLeft = config.bottomLeft;
            v.bottomRight = config.bottomRight;
        }
        return v;
    }
    static zero() {
        let v = new RRect();
        v.constructorName = "zero";
        return v;
    }
}
exports.RRect = RRect;
class RSTransform extends DartClass {
    constructor(scos, ssin, tx, ty) {
        super();
        this.scos = scos;
        this.ssin = ssin;
        this.tx = tx;
        this.ty = ty;
    }
    /**
     * @param config config:
        {
          rotation?:number,
          scale?:number,
          anchorX?:number,
          anchorY?:number,
          translateX?:number,
          translateY?:number,
        }
     */
    static fromComponents(config) {
        let v = new RSTransform();
        v.constructorName = "fromComponents";
        if (config != null && config != undefined) {
            v.rotation = config.rotation;
            v.scale = config.scale;
            v.anchorX = config.anchorX;
            v.anchorY = config.anchorY;
            v.translateX = config.translateX;
            v.translateY = config.translateY;
        }
        return v;
    }
    static new(scos, ssin, tx, ty) {
        return new RSTransform(scos, ssin, tx, ty);
    }
}
exports.RSTransform = RSTransform;
//#endregion
//#region ------- S -------
//#region Shader 
class Shader extends DartClass {
    /**
     * Shader.image = new ImageShader(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4)
     * @param image
     * @param tmx
     * @param tmy
     * @param matrix4
     */
    static image(image, tmx, tmy, matrix4) {
        return new ImageShader(image, tmx, tmy, matrix4);
    }
}
exports.Shader = Shader;
//****** ImageShader ******
class ImageShader extends Shader {
    constructor(image, tmx, tmy, matrix4) {
        super();
        this.image = image;
        this.tmx = tmx;
        this.tmy = tmy;
        this.matrix4 = matrix4;
    }
    static new(image, tmx, tmy, matrix4) {
        return new ImageShader(image, tmx, tmy, matrix4);
    }
}
exports.ImageShader = ImageShader;
class ScaleStartDetails extends DartClass {
    /**
     * @param config config:
        {
          focalPoint?:Offset,
          localFocalPoint?:Offset,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.focalPoint = config.focalPoint;
            this.localFocalPoint = config.localFocalPoint;
        }
    }
    /**
     * @param config config:
        {
          focalPoint?:Offset,
          localFocalPoint?:Offset,
        }
     */
    static new(config) {
        return new ScaleStartDetails(config);
    }
}
exports.ScaleStartDetails = ScaleStartDetails;
class ScaleUpdateDetails extends DartClass {
    /**
     * @param config config:
        {
          focalPoint?:Offset,
          localFocalPoint?:Offset,
          scale?:number,
          horizontalScale?:number,
          verticalScale?:number,
          rotation?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.focalPoint = config.focalPoint;
            this.localFocalPoint = config.localFocalPoint;
            this.scale = config.scale;
            this.horizontalScale = config.horizontalScale;
            this.verticalScale = config.verticalScale;
            this.rotation = config.rotation;
        }
    }
    /**
     * @param config config:
        {
          focalPoint?:Offset,
          localFocalPoint?:Offset,
          scale?:number,
          horizontalScale?:number,
          verticalScale?:number,
          rotation?:number,
        }
     */
    static new(config) {
        return new ScaleUpdateDetails(config);
    }
}
exports.ScaleUpdateDetails = ScaleUpdateDetails;
class ScaleEndDetails extends DartClass {
    /**
     * @param config config:
        {
          velocity?:Velocity,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.velocity = config.velocity;
        }
    }
    /**
     * @param config config:
        {
          velocity?:Velocity,
        }
     */
    static new(config) {
        return new ScaleEndDetails(config);
    }
}
exports.ScaleEndDetails = ScaleEndDetails;
//#endregion
//****** Size ******
class Size extends DartClass {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    static new(width, height) {
        return new Size(width, height);
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
    static infinite() {
        let v = new Size();
        v.constructorName = "infinite";
        return v;
    }
}
exports.Size = Size;
class StrutStyle extends DartClass {
    /**
     * @param config config:
        {
          fontFamily?:string,
          fontFamilyFallback?:Array<string>,
          fontSize?:number,
          height?:number,
          leading?:number,
          fontWeight?:FontWeight,
          fontStyle?:FontStyle,
          forceStrutHeight?:boolean,
          debugLabel?:string,
          packageName?:string,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.fontFamily = config.fontFamily;
            this.fontFamilyFallback = config.fontFamilyFallback;
            this.fontSize = config.fontSize;
            this.height = config.height;
            this.leading = config.leading;
            this.fontWeight = config.fontWeight;
            this.fontStyle = config.fontStyle;
            this.forceStrutHeight = config.forceStrutHeight;
            this.debugLabel = config.debugLabel;
            this.packageName = config.packageName;
        }
    }
    /**
     * @param config config:
        {
          fontFamily?:string,
          fontFamilyFallback?:Array<string>,
          fontSize?:number,
          height?:number,
          leading?:number,
          fontWeight?:FontWeight,
          fontStyle?:FontStyle,
          forceStrutHeight?:boolean,
          debugLabel?:string,
          packageName?:string,
        }
     */
    static new(config) {
        return new StrutStyle(config);
    }
}
exports.StrutStyle = StrutStyle;
class SystemUiOverlayStyle extends DartClass {
    /**
     * @param config config:
        {
          systemNavigationBarColor?:Color,
          systemNavigationBarDividerColor?:Color,
          statusBarColor?:Color,
          systemNavigationBarIconBrightness?:Brightness,
          statusBarBrightness?:Brightness,
          statusBarIconBrightness?:Brightness
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.systemNavigationBarColor = config.systemNavigationBarColor;
            this.systemNavigationBarDividerColor = config.systemNavigationBarDividerColor;
            this.systemNavigationBarIconBrightness = config.systemNavigationBarIconBrightness;
            this.statusBarColor = config.statusBarColor;
            this.statusBarBrightness = config.statusBarBrightness;
            this.statusBarIconBrightness = config.statusBarIconBrightness;
        }
    }
    /**
     * @param config config:
        {
          systemNavigationBarColor?:Color,
          systemNavigationBarDividerColor?:Color,
          statusBarColor?:Color,
          systemNavigationBarIconBrightness?:Brightness,
          statusBarBrightness?:Brightness,
          statusBarIconBrightness?:Brightness
        }
     */
    static new(config) {
        return new SystemUiOverlayStyle(config);
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
     * @param config config:
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.mass = config.mass;
            this.stiffness = config.stiffness;
            this.damping = config.damping;
        }
    }
    /**
     * @param config config:
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    static new(config) {
        return new SpringDescription(config);
    }
}
exports.SpringDescription = SpringDescription;
class ScrollController extends DartClass {
    /**
     * @param config config:
        {
          initialScrollOffset?:number,
          keepScrollOffset?:boolean,
          debugLabel?:string
        }
     */
    constructor(config) {
        super();
        this.createMirrorID();
        if (config != null && config != undefined) {
            this.initialScrollOffset = config.initialScrollOffset;
            this.keepScrollOffset = config.keepScrollOffset;
            this.debugLabel = config.debugLabel;
        }
    }
    /**
     * @param config config:
        {
          offset:number,
          duration:Duration,
          curve:Curve,
        }
     */
    animateTo(config) {
        JSFramework.invokeFlutterFunction(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "animateTo",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          value:number,
        }
     */
    jumpTo(config) {
        JSFramework.invokeFlutterFunction(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "jumpTo",
            args: config
        }));
    }
    //偏移量
    async offset() {
        var v = await this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "offset",
        }));
        return Convert.toNumber(v);
    }
    /**
     * @param config config:
        {
          initialScrollOffset?:number,
          keepScrollOffset?:boolean,
          debugLabel?:string
        }
     */
    static new(config) {
        return new ScrollController(config);
    }
}
exports.ScrollController = ScrollController;
class Shadow extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          offset?:Offset,
          blurRadius?:number
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.blurRadius = config.blurRadius;
            this.offset = config.offset;
        }
    }
    /**
     * @param config config:
        {
          color?:Color,
          offset?:Offset,
          blurRadius?:number
        }
     */
    static new(config) {
        return new Shadow(config);
    }
}
exports.Shadow = Shadow;
class ScrollbarPainter extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          textDirection?:TextDirection,
          thickness?:number,
          fadeoutOpacityAnimation?:any,
          padding?:EdgeInsets,
          mainAxisMargin?:number,
          crossAxisMargin?:number,
          radius?:Radius,
          minLength?:number,
          minOverscrollLength?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.textDirection = config.textDirection;
            this.thickness = config.thickness;
            this.fadeoutOpacityAnimation = config.fadeoutOpacityAnimation;
            this.padding = config.padding;
            this.mainAxisMargin = config.mainAxisMargin;
            this.crossAxisMargin = config.crossAxisMargin;
            this.radius = config.radius;
            this.minLength = config.minLength;
            this.minOverscrollLength = config.minOverscrollLength;
        }
    }
    /**
     * @param config config:
        {
          color?:Color,
          textDirection?:TextDirection,
          thickness?:number,
          fadeoutOpacityAnimation?:any,
          padding?:EdgeInsets,
          mainAxisMargin?:number,
          crossAxisMargin?:number,
          radius?:Radius,
          minLength?:number,
          minOverscrollLength?:number,
        }
     */
    static new(config) {
        return new ScrollbarPainter(config);
    }
}
exports.ScrollbarPainter = ScrollbarPainter;
class ScrollPhysics extends DartClass {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.parent = config.parent;
        }
    }
    static new(config) {
        return new ScrollPhysics(config);
    }
}
exports.ScrollPhysics = ScrollPhysics;
//****** AlwaysScrollableScrollPhysics ******
class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    static new(config) {
        return new AlwaysScrollableScrollPhysics(config);
    }
}
exports.AlwaysScrollableScrollPhysics = AlwaysScrollableScrollPhysics;
//****** BouncingScrollPhysics ******
class BouncingScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    static new(config) {
        return new BouncingScrollPhysics(config);
    }
}
exports.BouncingScrollPhysics = BouncingScrollPhysics;
//****** ClampingScrollPhysics ******
class ClampingScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    static new(config) {
        return new ClampingScrollPhysics(config);
    }
}
exports.ClampingScrollPhysics = ClampingScrollPhysics;
//****** NeverScrollableScrollPhysics ******
class NeverScrollableScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    static new(config) {
        return new NeverScrollableScrollPhysics(config);
    }
}
exports.NeverScrollableScrollPhysics = NeverScrollableScrollPhysics;
//****** RangeMaintainingScrollPhysics ******
class RangeMaintainingScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    static new(config) {
        return new RangeMaintainingScrollPhysics(config);
    }
}
exports.RangeMaintainingScrollPhysics = RangeMaintainingScrollPhysics;
//#endregion
//#region ------- ShapeBorder -------
class ShapeBorder extends DartClass {
}
exports.ShapeBorder = ShapeBorder;
//#region ****** BoxBorder ******
//****** BoxBorder ******
class BoxBorder extends ShapeBorder {
}
exports.BoxBorder = BoxBorder;
class Border extends BoxBorder {
    /**
     * @param config config:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.left = config.left;
        }
    }
    /**
     * @param config config:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
      }
     */
    static new(config) {
        return new Border(config);
    }
    /**
     * @param config config:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle,
        }
     */
    static all(config) {
        var v = new Border();
        v.constructorName = "all";
        if (config != null && config != undefined) {
            v.color = config.color;
            v.width = config.width;
            v.style = config.style;
        }
        return v;
    }
    /**
     * @param config config:
        {
          vertical?:BorderSide,
          horizontal?:BorderSide
        }
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
class BorderDirectional extends BoxBorder {
    /**
     * @param config config:
        {
          top?:BorderSide,
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.top = config.top;
            this.start = config.start;
            this.end = config.end;
            this.bottom = config.bottom;
        }
    }
    /**
     * @param config config:
        {
          top?:BorderSide,
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    static new(config) {
        return new BorderDirectional(config);
    }
}
exports.BorderDirectional = BorderDirectional;
//#endregion
//#region ****** OutlinedBorder ******
class OutlinedBorder extends ShapeBorder {
}
exports.OutlinedBorder = OutlinedBorder;
class CircleBorder extends OutlinedBorder {
    /**
      * @param config config:
        {
          side?:BorderSide,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.side = config.side;
        }
    }
    /**
      * @param config config:
        {
          side?:BorderSide,
        }
      */
    static new(config) {
        return new CircleBorder(config);
    }
}
exports.CircleBorder = CircleBorder;
class BeveledRectangleBorder extends OutlinedBorder {
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.side = config.side;
            this.borderRadius = config.borderRadius;
        }
    }
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    static new(config) {
        return new BeveledRectangleBorder(config);
    }
}
exports.BeveledRectangleBorder = BeveledRectangleBorder;
class ContinuousRectangleBorder extends OutlinedBorder {
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.side = config.side;
            this.borderRadius = config.borderRadius;
        }
    }
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    static new(config) {
        return new ContinuousRectangleBorder(config);
    }
}
exports.ContinuousRectangleBorder = ContinuousRectangleBorder;
class RoundedRectangleBorder extends OutlinedBorder {
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.side = config.side;
            this.borderRadius = config.borderRadius;
        }
    }
    /**
      * @param config config:
        {
          side?:BorderSide,
          borderRadius?:BorderRadiusGeometry,
        }
      */
    static new(config) {
        return new RoundedRectangleBorder(config);
    }
}
exports.RoundedRectangleBorder = RoundedRectangleBorder;
class StadiumBorder extends OutlinedBorder {
    /**
      * @param config config:
        {
          side?:BorderSide,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.side = config.side;
        }
    }
    /**
      * @param config config:
        {
          side?:BorderSide,
        }
      */
    static new(config) {
        return new StadiumBorder(config);
    }
}
exports.StadiumBorder = StadiumBorder;
//#endregion
//#region ****** InputBorder ******
class InputBorder extends ShapeBorder {
    static none() {
        var v = new _NoInputBorder();
        v.className = "InputBorder";
        v.constructorName = "none";
        return v;
    }
    /**
     * InputBorder.underline = new UnderlineInputBorder(config);
     * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
        }
    */
    static underline(config) {
        return new UnderlineInputBorder(config);
    }
    /**
     * InputBorder.outline = new OutlineInputBorder(config);
     * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
          gapPadding?:number,
        }
    */
    static outline(config) {
        return new OutlineInputBorder(config);
    }
}
exports.InputBorder = InputBorder;
class _NoInputBorder extends InputBorder {
}
class UnderlineInputBorder extends InputBorder {
    /**
      * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            if (config != null && config != undefined) {
                this.borderRadius = config.borderRadius;
                this.borderSide = config.borderSide;
            }
        }
    }
    /**
      * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
        }
      */
    static new(config) {
        return new UnderlineInputBorder(config);
    }
}
exports.UnderlineInputBorder = UnderlineInputBorder;
class OutlineInputBorder extends InputBorder {
    /**
      * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
          gapPadding?:number,
        }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            if (config != null && config != undefined) {
                this.borderRadius = config.borderRadius;
                this.borderSide = config.borderSide;
                this.gapPadding = config.gapPadding;
            }
        }
    }
    /**
      * @param config config:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
          gapPadding?:number,
        }
      */
    static new(config) {
        return new OutlineInputBorder(config);
    }
}
exports.OutlineInputBorder = OutlineInputBorder;
//#endregion
//#endregion
//#endregion
//#region ------- T -------
//****** TextAlignVertical ******
class TextAlignVertical extends DartClass {
    constructor(y) {
        super();
        this.y = y;
    }
    static new(y) {
        return new TextAlignVertical(y);
    }
}
exports.TextAlignVertical = TextAlignVertical;
TextAlignVertical.top = TextAlignVertical.new(-1.0);
TextAlignVertical.center = TextAlignVertical.new(0.0);
TextAlignVertical.bottom = TextAlignVertical.new(1.0);
class TapDownDetails extends DartClass {
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          kind?:PointerDeviceKind,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.globalPosition = config.globalPosition;
            this.localPosition = config.localPosition;
            this.kind = config.kind;
        }
    }
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          kind?:PointerDeviceKind,
        }
     */
    static new(config) {
        return new TapDownDetails(config);
    }
}
exports.TapDownDetails = TapDownDetails;
class TapUpDetails extends DartClass {
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.globalPosition = config.globalPosition;
            this.localPosition = config.localPosition;
        }
    }
    /**
     * @param config config:
        {
          globalPosition?:Offset,
          localPosition?:Offset,
        }
     */
    static new(config) {
        return new TapUpDetails(config);
    }
}
exports.TapUpDetails = TapUpDetails;
class TextStyle extends DartClass {
    /**
     * @param config config:
        {
          inherit?:boolean,
          color?:Color,
          backgroundColor?:Color,
          fontSize?:number,
          fontWeight?:FontWeight,
          fontStyle?:FontStyle,
          letterSpacing?:number,
          wordSpacing?:number,
          textBaseline?:TextBaseline,
          height?:number,
          decoration?:TextDecoration,
          decorationColor?:Color,
          decorationStyle?:TextDecorationStyle,
          decorationThickness?:number,
          debugLabel?:string,
          fontFamily?:string,
          packageName?:string,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.inherit = config.inherit;
            this.color = config.color;
            this.backgroundColor = config.backgroundColor;
            this.fontSize = config.fontSize;
            this.fontWeight = config.fontWeight;
            this.fontStyle = config.fontStyle;
            this.letterSpacing = config.letterSpacing;
            this.wordSpacing = config.wordSpacing;
            this.textBaseline = config.textBaseline;
            this.height = config.height;
            this.decoration = config.decoration;
            this.decorationColor = config.decorationColor;
            this.decorationStyle = config.decorationStyle;
            this.decorationThickness = config.decorationThickness;
            this.debugLabel = config.debugLabel;
            this.fontFamily = config.fontFamily;
            this.packageName = config.packageName;
        }
    }
    /**
     * @param config config:
        {
          inherit?:boolean,
          color?:Color,
          backgroundColor?:Color,
          fontSize?:number,
          fontWeight?:FontWeight,
          fontStyle?:FontStyle,
          letterSpacing?:number,
          wordSpacing?:number,
          textBaseline?:TextBaseline,
          height?:number,
          decoration?:TextDecoration,
          decorationColor?:Color,
          decorationStyle?:TextDecorationStyle,
          decorationThickness?:number,
          debugLabel?:string,
          fontFamily?:string,
          packageName?:string,
        }
     */
    static new(config) {
        return new TextStyle(config);
    }
}
exports.TextStyle = TextStyle;
class TableBorder extends DartClass {
    /**
     * @param config config:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
        horizontalInside?:BorderSide,
        verticalInside?:BorderSide
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.left = config.left;
            this.horizontalInside = config.horizontalInside;
            this.verticalInside = config.verticalInside;
        }
    }
    /**
     * @param config config:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
        horizontalInside?:BorderSide,
        verticalInside?:BorderSide
      }
     */
    static new(config) {
        return new TableBorder(config);
    }
    /**
     * @param config config:
      {
        color?:Color,
        width?:number,
        style?:BorderStyle,
      }
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
     * @param config config:
      {
        inside?:BorderSide,
        outside?:BorderSide
      }
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
//#region ****** TableColumnWidth ******
class TableColumnWidth extends DartClass {
    /**
     * TableColumnWidth.intrinsic = new IntrinsicColumnWidth(flex?:number);
    */
    static intrinsic(flex) {
        return new IntrinsicColumnWidth(flex);
    }
    /**
     * TableColumnWidth.fixed = new FixedColumnWidth(value:number);
    */
    static fixed(value) {
        return new FixedColumnWidth(value);
    }
    /**
     * TableColumnWidth.fraction = new FractionColumnWidth(value:number);
    */
    static fraction(value) {
        return new FractionColumnWidth(value);
    }
    /**
     * TableColumnWidth.max = new MaxColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
    */
    static max(a, b) {
        return new MaxColumnWidth(a, b);
    }
    /**
     * TableColumnWidth.max = new MinColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
    */
    static min(a, b) {
        return new MinColumnWidth(a, b);
    }
}
exports.TableColumnWidth = TableColumnWidth;
class IntrinsicColumnWidth extends TableColumnWidth {
    constructor(flex) {
        super();
        this.flex = flex;
    }
    static new(flex) {
        return new IntrinsicColumnWidth(flex);
    }
}
exports.IntrinsicColumnWidth = IntrinsicColumnWidth;
class FixedColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new FixedColumnWidth(value);
    }
}
exports.FixedColumnWidth = FixedColumnWidth;
class FractionColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new FractionColumnWidth(value);
    }
}
exports.FractionColumnWidth = FractionColumnWidth;
class FlexColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new FlexColumnWidth(value);
    }
}
exports.FlexColumnWidth = FlexColumnWidth;
class MaxColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    static new(a, b) {
        return new MaxColumnWidth(a, b);
    }
}
exports.MaxColumnWidth = MaxColumnWidth;
class MinColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    static new(a, b) {
        return new MaxColumnWidth(a, b);
    }
}
exports.MinColumnWidth = MinColumnWidth;
class TabController extends DartClass {
    /**
     * @param config config:
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.initialIndex = config.initialIndex;
            this.length = config.length;
            this.vsync = config.vsync;
        }
    }
    /**
     * @param config config:
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    static new(config) {
        return new TabController(config);
    }
}
exports.TabController = TabController;
//****** TODO  TextEditingController ******
class TextEditingController extends DartClass {
    constructor(text) {
        super();
        this.text = text;
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
    }
    static new(text) {
        return new TextEditingController(text);
    }
    //清理值
    clear() {
        this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "clear",
        }));
    }
    //获取文本值
    async getText() {
        var v = await this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "getText",
        }));
        return String(v);
    }
    //设置文本值
    async setText(text) {
        this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "setText",
            args: text,
        }));
    }
}
exports.TextEditingController = TextEditingController;
class ToolbarOptions extends DartClass {
    /**
     * @param config config:
      {
        copy?:boolean,
        cut?:boolean,
        paste?:boolean,
        selectAll?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.copy = config.copy;
            this.cut = config.cut;
            this.paste = config.paste;
            this.selectAll = config.selectAll;
        }
    }
    /**
     * @param config config:
      {
        copy?:boolean,
        cut?:boolean,
        paste?:boolean,
        selectAll?:boolean,
      }
     */
    static new(config) {
        return new ToolbarOptions(config);
    }
}
exports.ToolbarOptions = ToolbarOptions;
class TextInputType extends DartClass {
    static new() {
        return new TextInputType();
    }
    ;
    static numberWithOptions(config) {
        let v = new TextInputType();
        v.constructorName = "numberWithOptions";
        if (config != null && config != undefined) {
            v.signed = config.signed;
            v.decimal = config.decimal;
        }
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
//****** TODO Tween ******
class Tween extends DartClass {
    constructor(begin, end) {
        super();
        this.begin = begin;
        this.end = end;
    }
    lerp(t) {
        //return dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
    }
    transform(t) {
        if (t == 0.0)
            return this.begin;
        if (t == 1.0)
            return this.end;
        return this.lerp(t);
    }
    static new(begin, end) {
        return new Tween(begin, end);
    }
    ;
}
exports.Tween = Tween;
//#region ****** TextInputFormatter ******
class TextInputFormatter extends DartClass {
    /**
     * TextInputFormatter.lengthLimiting = new LengthLimitingTextInputFormatter(maxLength?:number);
    */
    static lengthLimiting(maxLength) {
        return new LengthLimitingTextInputFormatter(maxLength);
    }
    /**
     * TextInputFormatter.filtering = new FilteringTextInputFormatter(allow:boolean,filterPattern:RegExp,replacementString?:string);
    */
    static filtering(allow, filterPattern, replacementString) {
        return new FilteringTextInputFormatter(allow, filterPattern, replacementString);
    }
    /**
     * TextInputFormatter.allow = FilteringTextInputFormatter.allow(filterPattern:RegExp,replacementString?:string);
    */
    static allow(filterPattern, replacementString) {
        return FilteringTextInputFormatter.allow(filterPattern, replacementString);
    }
    /**
     * TextInputFormatter.deny = FilteringTextInputFormatter.deny(filterPattern:RegExp,replacementString?:string);
    */
    static deny(filterPattern, replacementString) {
        return FilteringTextInputFormatter.deny(filterPattern, replacementString);
    }
    /**
     * TextInputFormatter.singleLineFormatter = FilteringTextInputFormatter.singleLineFormatter();
    */
    static singleLineFormatter() {
        return FilteringTextInputFormatter.singleLineFormatter();
    }
    /**
     * TextInputFormatter.digitsOnly = FilteringTextInputFormatter.digitsOnly();
    */
    static digitsOnly() {
        return FilteringTextInputFormatter.digitsOnly();
    }
    /**
     * TextInputFormatter.mask = new MaskTextInputFormatter(mask:string,initialText?:string,filter?:Map<string,RegExp>);
    */
    static mask(mask, initialText, filter) {
        return new MaskTextInputFormatter(mask, initialText, filter);
    }
}
exports.TextInputFormatter = TextInputFormatter;
class LengthLimitingTextInputFormatter extends TextInputFormatter {
    constructor(maxLength) {
        super();
        this.maxLength = maxLength;
    }
    static new(maxLength) {
        return new LengthLimitingTextInputFormatter(maxLength);
    }
}
exports.LengthLimitingTextInputFormatter = LengthLimitingTextInputFormatter;
class FilteringTextInputFormatter extends TextInputFormatter {
    constructor(allow, filterPattern, replacementString) {
        super();
        this.allow = allow;
        this.filterPattern = filterPattern;
        this.replacementString = replacementString;
    }
    static new(allow, filterPattern, replacementString) {
        return new FilteringTextInputFormatter(allow, filterPattern, replacementString);
    }
    static allow(filterPattern, replacementString) {
        return new FilteringTextInputFormatter(true, filterPattern, replacementString);
    }
    static deny(filterPattern, replacementString) {
        return new FilteringTextInputFormatter(false, filterPattern, replacementString);
    }
    static singleLineFormatter() {
        var v = new FilteringTextInputFormatter();
        v.constructorName = "singleLineFormatter";
        return v;
    }
    static digitsOnly() {
        var v = new FilteringTextInputFormatter();
        v.constructorName = "digitsOnly";
        return v;
    }
}
exports.FilteringTextInputFormatter = FilteringTextInputFormatter;
class MaskTextInputFormatter extends TextInputFormatter {
    constructor(mask, initialText, filter) {
        super();
        this.mask = mask;
        this.filter = filter;
        this.initialText = initialText;
    }
    static new(mask, initialText, filter) {
        return new MaskTextInputFormatter(mask, initialText, filter);
    }
}
exports.MaskTextInputFormatter = MaskTextInputFormatter;
class Uri extends DartClass {
    /**
     * @param config config:
      {
        scheme?:string,
        fragment?:string,
        userInfo?:string,
        host?:string,
        port?:number,
        path?:string,
        query?:string
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.scheme = config.scheme;
            this.fragment = config.fragment;
            this.userInfo = config.userInfo;
            this.host = config.host;
            this.port = config.port;
            this.path = config.path;
            this.query = config.query;
        }
    }
    /**
     * @param config config:
      {
        scheme?:string,
        fragment?:string,
        userInfo?:string,
        host?:string,
        port?:number,
        path?:string,
        query?:string
      }
     */
    static new(config) {
        return new Uri(config);
    }
}
exports.Uri = Uri;
//****** Uint8List ******
class Uint8List extends DartClass {
    constructor(length) {
        super();
        this.length = length;
    }
    static new(length) {
        return new Uint8List(length);
    }
    static fromList(elements) {
        let v = new Uint8List();
        v.constructorName = "fromList";
        v.elements = elements;
        return v;
    }
}
exports.Uint8List = Uint8List;
//#endregion
//#region ------- V -------
//****** Vector3 ******
class Vector3 extends DartClass {
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static new(x, y, z) {
        return new Vector3(x, y, z);
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
    constructor(x, y, z, w) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    static new(x, y, z, w) {
        return new Vector4(x, y, z, w);
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
class VisualDensity extends DartClass {
    /**
     * @param config config:
      {
        horizontal?:number,
        vertical?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.horizontal = config.horizontal;
            this.vertical = config.vertical;
        }
    }
    /**
     * @param config config:
      {
        horizontal?:number,
        vertical?:number,
      }
     */
    static new(config) {
        return new VisualDensity(config);
    }
}
exports.VisualDensity = VisualDensity;
VisualDensity.comfortable = VisualDensity.new({ horizontal: -1.0, vertical: -1.0 });
VisualDensity.compact = VisualDensity.new({ horizontal: -2.0, vertical: -2.0 });
VisualDensity.standard = VisualDensity.new();
class Velocity extends DartClass {
    /**
     * @param config config:
      {
        pixelsPerSecond?:Offset,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.pixelsPerSecond = config.pixelsPerSecond;
        }
    }
    /**
     * @param config config:
      {
        pixelsPerSecond?:Offset,
      }
     */
    static new(config) {
        return new Velocity(config);
    }
    static zero() {
        var v = new Velocity();
        v.constructorName = "zero";
        return v;
    }
}
exports.Velocity = Velocity;
//#endregion
//#endregion
//#region ******** Icons ********
class Icons extends IconData {
    constructor(icon) {
        super(icon);
    }
    static new(icon) {
        return new Icons(icon);
    }
}
exports.Icons = Icons;
Icons.threesixty = Icons.new("threesixty");
Icons.threed_rotation = Icons.new("threed_rotation");
Icons.four_k = Icons.new("four_k");
Icons.ac_unit = Icons.new("ac_unit");
Icons.access_alarm = Icons.new("access_alarm");
Icons.access_alarms = Icons.new("access_alarms");
Icons.access_time = Icons.new("access_time");
Icons.accessibility = Icons.new("accessibility");
Icons.accessibility_new = Icons.new("accessibility_new");
Icons.accessible = Icons.new("accessible");
Icons.accessible_forward = Icons.new("accessible_forward");
Icons.account_balance = Icons.new("account_balance");
Icons.account_balance_wallet = Icons.new("account_balance_wallet");
Icons.account_box = Icons.new("account_box");
Icons.account_circle = Icons.new("account_circle");
Icons.adb = Icons.new("adb");
Icons.add = Icons.new("add");
Icons.add_a_photo = Icons.new("add_a_photo");
Icons.add_alarm = Icons.new("add_alarm");
Icons.add_alert = Icons.new("add_alert");
Icons.add_box = Icons.new("add_box");
Icons.add_call = Icons.new("add_call");
Icons.add_circle = Icons.new("add_circle");
Icons.add_circle_outline = Icons.new("add_circle_outline");
Icons.add_comment = Icons.new("add_comment");
Icons.add_location = Icons.new("add_location");
Icons.add_photo_alternate = Icons.new("add_photo_alternate");
Icons.add_shopping_cart = Icons.new("add_shopping_cart");
Icons.add_to_home_screen = Icons.new("add_to_home_screen");
Icons.add_to_photos = Icons.new("add_to_photos");
Icons.add_to_queue = Icons.new("add_to_queue");
Icons.adjust = Icons.new("adjust");
Icons.airline_seat_flat = Icons.new("airline_seat_flat");
Icons.airline_seat_flat_angled = Icons.new("airline_seat_flat_angled");
Icons.airline_seat_individual_suite = Icons.new("airline_seat_individual_suite");
Icons.airline_seat_legroom_extra = Icons.new("airline_seat_legroom_extra");
Icons.airline_seat_legroom_normal = Icons.new("airline_seat_legroom_normal");
Icons.airline_seat_legroom_reduced = Icons.new("airline_seat_legroom_reduced");
Icons.airline_seat_recline_extra = Icons.new("airline_seat_recline_extra");
Icons.airline_seat_recline_normal = Icons.new("airline_seat_recline_normal");
Icons.airplanemode_active = Icons.new("airplanemode_active");
Icons.airplanemode_inactive = Icons.new("airplanemode_inactive");
Icons.airplay = Icons.new("airplay");
Icons.airport_shuttle = Icons.new("airport_shuttle");
Icons.alarm = Icons.new("alarm");
Icons.alarm_add = Icons.new("alarm_add");
Icons.alarm_off = Icons.new("alarm_off");
Icons.alarm_on = Icons.new("alarm_on");
Icons.album = Icons.new("album");
Icons.all_inclusive = Icons.new("all_inclusive");
Icons.all_out = Icons.new("all_out");
Icons.alternate_email = Icons.new("alternate_email");
Icons.android = Icons.new("android");
Icons.announcement = Icons.new("announcement");
Icons.apps = Icons.new("apps");
Icons.archive = Icons.new("archive");
Icons.arrow_back = Icons.new("arrow_back");
Icons.arrow_back_ios = Icons.new("arrow_back_ios");
Icons.arrow_downward = Icons.new("arrow_downward");
Icons.arrow_drop_down = Icons.new("arrow_drop_down");
Icons.arrow_drop_down_circle = Icons.new("arrow_drop_down_circle");
Icons.arrow_drop_up = Icons.new("arrow_drop_up");
Icons.arrow_forward = Icons.new("arrow_forward");
Icons.arrow_forward_ios = Icons.new("arrow_forward_ios");
Icons.arrow_left = Icons.new("arrow_left");
Icons.arrow_right = Icons.new("arrow_right");
Icons.arrow_upward = Icons.new("arrow_upward");
Icons.art_track = Icons.new("art_track");
Icons.aspect_ratio = Icons.new("aspect_ratio");
Icons.assessment = Icons.new("assessment");
Icons.assignment = Icons.new("assignment");
Icons.assignment_ind = Icons.new("assignment_ind");
Icons.assignment_late = Icons.new("assignment_late");
Icons.assignment_return = Icons.new("assignment_return");
Icons.assignment_returned = Icons.new("assignment_returned");
Icons.assignment_turned_in = Icons.new("assignment_turned_in");
Icons.assistant = Icons.new("assistant");
Icons.assistant_photo = Icons.new("assistant_photo");
Icons.atm = Icons.new("atm");
Icons.attach_file = Icons.new("attach_file");
Icons.attach_money = Icons.new("attach_money");
Icons.attachment = Icons.new("attachment");
Icons.audiotrack = Icons.new("audiotrack");
Icons.autorenew = Icons.new("autorenew");
Icons.av_timer = Icons.new("av_timer");
Icons.backspace = Icons.new("backspace");
Icons.backup = Icons.new("backup");
Icons.battery_alert = Icons.new("battery_alert");
Icons.battery_charging_full = Icons.new("battery_charging_full");
Icons.battery_full = Icons.new("battery_full");
Icons.battery_std = Icons.new("battery_std");
Icons.battery_unknown = Icons.new("battery_unknown");
Icons.beach_access = Icons.new("beach_access");
Icons.beenhere = Icons.new("beenhere");
Icons.block = Icons.new("block");
Icons.bluetooth = Icons.new("bluetooth");
Icons.bluetooth_audio = Icons.new("bluetooth_audio");
Icons.bluetooth_connected = Icons.new("bluetooth_connected");
Icons.bluetooth_disabled = Icons.new("bluetooth_disabled");
Icons.bluetooth_searching = Icons.new("bluetooth_searching");
Icons.blur_circular = Icons.new("blur_circular");
Icons.blur_linear = Icons.new("blur_linear");
Icons.blur_off = Icons.new("blur_off");
Icons.blur_on = Icons.new("blur_on");
Icons.book = Icons.new("book");
Icons.bookmark = Icons.new("bookmark");
Icons.bookmark_border = Icons.new("bookmark_border");
Icons.border_all = Icons.new("border_all");
Icons.border_bottom = Icons.new("border_bottom");
Icons.border_clear = Icons.new("border_clear");
Icons.border_color = Icons.new("border_color");
Icons.border_horizontal = Icons.new("border_horizontal");
Icons.border_inner = Icons.new("border_inner");
Icons.border_left = Icons.new("border_left");
Icons.border_outer = Icons.new("border_outer");
Icons.border_right = Icons.new("border_right");
Icons.border_style = Icons.new("border_style");
Icons.border_top = Icons.new("border_top");
Icons.border_vertical = Icons.new("border_vertical");
Icons.branding_watermark = Icons.new("branding_watermark");
Icons.brightness_1 = Icons.new("brightness_1");
Icons.brightness_2 = Icons.new("brightness_2");
Icons.brightness_3 = Icons.new("brightness_3");
Icons.brightness_4 = Icons.new("brightness_4");
Icons.brightness_5 = Icons.new("brightness_5");
Icons.brightness_6 = Icons.new("brightness_6");
Icons.brightness_7 = Icons.new("brightness_7");
Icons.brightness_auto = Icons.new("brightness_auto");
Icons.brightness_high = Icons.new("brightness_high");
Icons.brightness_low = Icons.new("brightness_low");
Icons.brightness_medium = Icons.new("brightness_medium");
Icons.broken_image = Icons.new("broken_image");
Icons.brush = Icons.new("brush");
Icons.bubble_chart = Icons.new("bubble_chart");
Icons.bug_report = Icons.new("bug_report");
Icons.build = Icons.new("build");
Icons.burst_mode = Icons.new("burst_mode");
Icons.business = Icons.new("business");
Icons.business_center = Icons.new("business_center");
Icons.cached = Icons.new("cached");
Icons.cake = Icons.new("cake");
Icons.calendar_today = Icons.new("calendar_today");
Icons.calendar_view_day = Icons.new("calendar_view_day");
Icons.call = Icons.new("call");
Icons.call_end = Icons.new("call_end");
Icons.call_made = Icons.new("call_made");
Icons.call_merge = Icons.new("call_merge");
Icons.call_missed = Icons.new("call_missed");
Icons.call_missed_outgoing = Icons.new("call_missed_outgoing");
Icons.call_received = Icons.new("call_received");
Icons.call_split = Icons.new("call_split");
Icons.call_to_action = Icons.new("call_to_action");
Icons.camera = Icons.new("camera");
Icons.camera_alt = Icons.new("camera_alt");
Icons.camera_enhance = Icons.new("camera_enhance");
Icons.camera_front = Icons.new("camera_front");
Icons.camera_rear = Icons.new("camera_rear");
Icons.camera_roll = Icons.new("camera_roll");
Icons.cancel = Icons.new("cancel");
Icons.card_giftcard = Icons.new("card_giftcard");
Icons.card_membership = Icons.new("card_membership");
Icons.card_travel = Icons.new("card_travel");
Icons.casino = Icons.new("casino");
Icons.cast = Icons.new("cast");
Icons.cast_connected = Icons.new("cast_connected");
Icons.category = Icons.new("category");
Icons.center_focus_strong = Icons.new("center_focus_strong");
Icons.center_focus_weak = Icons.new("center_focus_weak");
Icons.change_history = Icons.new("change_history");
Icons.chat = Icons.new("chat");
Icons.chat_bubble = Icons.new("chat_bubble");
Icons.chat_bubble_outline = Icons.new("chat_bubble_outline");
Icons.check = Icons.new("check");
Icons.check_box = Icons.new("check_box");
Icons.check_box_outline_blank = Icons.new("check_box_outline_blank");
Icons.check_circle = Icons.new("check_circle");
Icons.check_circle_outline = Icons.new("check_circle_outline");
Icons.chevron_left = Icons.new("chevron_left");
Icons.chevron_right = Icons.new("chevron_right");
Icons.child_care = Icons.new("child_care");
Icons.child_friendly = Icons.new("child_friendly");
Icons.chrome_reader_mode = Icons.new("chrome_reader_mode");
Icons.class_ = Icons.new("class_");
Icons.clear = Icons.new("clear");
Icons.clear_all = Icons.new("clear_all");
Icons.close = Icons.new("close");
Icons.closed_caption = Icons.new("closed_caption");
Icons.cloud = Icons.new("cloud");
Icons.cloud_circle = Icons.new("cloud_circle");
Icons.cloud_done = Icons.new("cloud_done");
Icons.cloud_download = Icons.new("cloud_download");
Icons.cloud_off = Icons.new("cloud_off");
Icons.cloud_queue = Icons.new("cloud_queue");
Icons.cloud_upload = Icons.new("cloud_upload");
Icons.code = Icons.new("code");
Icons.collections = Icons.new("collections");
Icons.collections_bookmark = Icons.new("collections_bookmark");
Icons.color_lens = Icons.new("color_lens");
Icons.colorize = Icons.new("colorize");
Icons.comment = Icons.new("comment");
Icons.compare = Icons.new("compare");
Icons.compare_arrows = Icons.new("compare_arrows");
Icons.computer = Icons.new("computer");
Icons.confirmation_number = Icons.new("confirmation_number");
Icons.contact_mail = Icons.new("contact_mail");
Icons.contact_phone = Icons.new("contact_phone");
Icons.contacts = Icons.new("contacts");
Icons.content_copy = Icons.new("content_copy");
Icons.content_cut = Icons.new("content_cut");
Icons.content_paste = Icons.new("content_paste");
Icons.control_point = Icons.new("control_point");
Icons.control_point_duplicate = Icons.new("control_point_duplicate");
Icons.copyright = Icons.new("copyright");
Icons.create = Icons.new("create");
Icons.create_new_folder = Icons.new("create_new_folder");
Icons.credit_card = Icons.new("credit_card");
Icons.crop = Icons.new("crop");
Icons.crop_16_9 = Icons.new("crop_16_9");
Icons.crop_3_2 = Icons.new("crop_3_2");
Icons.crop_5_4 = Icons.new("crop_5_4");
Icons.crop_7_5 = Icons.new("crop_7_5");
Icons.crop_din = Icons.new("crop_din");
Icons.crop_free = Icons.new("crop_free");
Icons.crop_landscape = Icons.new("crop_landscape");
Icons.crop_original = Icons.new("crop_original");
Icons.crop_portrait = Icons.new("crop_portrait");
Icons.crop_rotate = Icons.new("crop_rotate");
Icons.crop_square = Icons.new("crop_square");
Icons.dashboard = Icons.new("dashboard");
Icons.data_usage = Icons.new("data_usage");
Icons.date_range = Icons.new("date_range");
Icons.dehaze = Icons.new("dehaze");
Icons.delete = Icons.new("delete");
Icons.delete_forever = Icons.new("delete_forever");
Icons.delete_outline = Icons.new("delete_outline");
Icons.delete_sweep = Icons.new("delete_sweep");
Icons.departure_board = Icons.new("departure_board");
Icons.description = Icons.new("description");
Icons.desktop_mac = Icons.new("desktop_mac");
Icons.desktop_windows = Icons.new("desktop_windows");
Icons.details = Icons.new("details");
Icons.developer_board = Icons.new("developer_board");
Icons.developer_mode = Icons.new("developer_mode");
Icons.device_hub = Icons.new("device_hub");
Icons.device_unknown = Icons.new("device_unknown");
Icons.devices = Icons.new("devices");
Icons.devices_other = Icons.new("devices_other");
Icons.dialer_sip = Icons.new("dialer_sip");
Icons.dialpad = Icons.new("dialpad");
Icons.directions = Icons.new("directions");
Icons.directions_bike = Icons.new("directions_bike");
Icons.directions_boat = Icons.new("directions_boat");
Icons.directions_bus = Icons.new("directions_bus");
Icons.directions_car = Icons.new("directions_car");
Icons.directions_railway = Icons.new("directions_railway");
Icons.directions_run = Icons.new("directions_run");
Icons.directions_subway = Icons.new("directions_subway");
Icons.directions_transit = Icons.new("directions_transit");
Icons.directions_walk = Icons.new("directions_walk");
Icons.disc_full = Icons.new("disc_full");
Icons.dns = Icons.new("dns");
Icons.do_not_disturb = Icons.new("do_not_disturb");
Icons.do_not_disturb_alt = Icons.new("do_not_disturb_alt");
Icons.do_not_disturb_off = Icons.new("do_not_disturb_off");
Icons.do_not_disturb_on = Icons.new("do_not_disturb_on");
Icons.dock = Icons.new("dock");
Icons.domain = Icons.new("domain");
Icons.done = Icons.new("done");
Icons.done_all = Icons.new("done_all");
Icons.done_outline = Icons.new("done_outline");
Icons.donut_large = Icons.new("donut_large");
Icons.donut_small = Icons.new("donut_small");
Icons.drafts = Icons.new("drafts");
Icons.drag_handle = Icons.new("drag_handle");
Icons.drive_eta = Icons.new("drive_eta");
Icons.dvr = Icons.new("dvr");
Icons.edit = Icons.new("edit");
Icons.edit_attributes = Icons.new("edit_attributes");
Icons.edit_location = Icons.new("edit_location");
Icons.eject = Icons.new("eject");
Icons.email = Icons.new("email");
Icons.enhanced_encryption = Icons.new("enhanced_encryption");
Icons.equalizer = Icons.new("equalizer");
Icons.error = Icons.new("error");
Icons.error_outline = Icons.new("error_outline");
Icons.euro_symbol = Icons.new("euro_symbol");
Icons.ev_station = Icons.new("ev_station");
Icons.event = Icons.new("event");
Icons.event_available = Icons.new("event_available");
Icons.event_busy = Icons.new("event_busy");
Icons.event_note = Icons.new("event_note");
Icons.event_seat = Icons.new("event_seat");
Icons.exit_to_app = Icons.new("exit_to_app");
Icons.expand_less = Icons.new("expand_less");
Icons.expand_more = Icons.new("expand_more");
Icons.explicit = Icons.new("explicit");
Icons.explore = Icons.new("explore");
Icons.exposure = Icons.new("exposure");
Icons.exposure_neg_1 = Icons.new("exposure_neg_1");
Icons.exposure_neg_2 = Icons.new("exposure_neg_2");
Icons.exposure_plus_1 = Icons.new("exposure_plus_1");
Icons.exposure_plus_2 = Icons.new("exposure_plus_2");
Icons.exposure_zero = Icons.new("exposure_zero");
Icons.extension = Icons.new("extension");
Icons.face = Icons.new("face");
Icons.fast_forward = Icons.new("fast_forward");
Icons.fast_rewind = Icons.new("fast_rewind");
Icons.fastfood = Icons.new("fastfood");
Icons.favorite = Icons.new("favorite");
Icons.favorite_border = Icons.new("favorite_border");
Icons.featured_play_list = Icons.new("featured_play_list");
Icons.featured_video = Icons.new("featured_video");
Icons.feedback = Icons.new("feedback");
Icons.fiber_dvr = Icons.new("fiber_dvr");
Icons.fiber_manual_record = Icons.new("fiber_manual_record");
Icons.fiber_new = Icons.new("fiber_new");
Icons.fiber_pin = Icons.new("fiber_pin");
Icons.fiber_smart_record = Icons.new("fiber_smart_record");
Icons.file_download = Icons.new("file_download");
Icons.file_upload = Icons.new("file_upload");
Icons.filter = Icons.new("filter");
Icons.filter_1 = Icons.new("filter_1");
Icons.filter_2 = Icons.new("filter_2");
Icons.filter_3 = Icons.new("filter_3");
Icons.filter_4 = Icons.new("filter_4");
Icons.filter_5 = Icons.new("filter_5");
Icons.filter_6 = Icons.new("filter_6");
Icons.filter_7 = Icons.new("filter_7");
Icons.filter_8 = Icons.new("filter_8");
Icons.filter_9 = Icons.new("filter_9");
Icons.filter_9_plus = Icons.new("filter_9_plus");
Icons.filter_b_and_w = Icons.new("filter_b_and_w");
Icons.filter_center_focus = Icons.new("filter_center_focus");
Icons.filter_drama = Icons.new("filter_drama");
Icons.filter_frames = Icons.new("filter_frames");
Icons.filter_hdr = Icons.new("filter_hdr");
Icons.filter_list = Icons.new("filter_list");
Icons.filter_none = Icons.new("filter_none");
Icons.filter_tilt_shift = Icons.new("filter_tilt_shift");
Icons.filter_vintage = Icons.new("filter_vintage");
Icons.find_in_page = Icons.new("find_in_page");
Icons.find_replace = Icons.new("find_replace");
Icons.fingerprint = Icons.new("fingerprint");
Icons.first_page = Icons.new("first_page");
Icons.fitness_center = Icons.new("fitness_center");
Icons.flag = Icons.new("flag");
Icons.flare = Icons.new("flare");
Icons.flash_auto = Icons.new("flash_auto");
Icons.flash_off = Icons.new("flash_off");
Icons.flash_on = Icons.new("flash_on");
Icons.flight = Icons.new("flight");
Icons.flight_land = Icons.new("flight_land");
Icons.flight_takeoff = Icons.new("flight_takeoff");
Icons.flip = Icons.new("flip");
Icons.flip_to_back = Icons.new("flip_to_back");
Icons.flip_to_front = Icons.new("flip_to_front");
Icons.folder = Icons.new("folder");
Icons.folder_open = Icons.new("folder_open");
Icons.folder_shared = Icons.new("folder_shared");
Icons.folder_special = Icons.new("folder_special");
Icons.font_download = Icons.new("font_download");
Icons.format_align_center = Icons.new("format_align_center");
Icons.format_align_justify = Icons.new("format_align_justify");
Icons.format_align_left = Icons.new("format_align_left");
Icons.format_align_right = Icons.new("format_align_right");
Icons.format_bold = Icons.new("format_bold");
Icons.format_clear = Icons.new("format_clear");
Icons.format_color_fill = Icons.new("format_color_fill");
Icons.format_color_reset = Icons.new("format_color_reset");
Icons.format_color_text = Icons.new("format_color_text");
Icons.format_indent_decrease = Icons.new("format_indent_decrease");
Icons.format_indent_increase = Icons.new("format_indent_increase");
Icons.format_italic = Icons.new("format_italic");
Icons.format_line_spacing = Icons.new("format_line_spacing");
Icons.format_list_bulleted = Icons.new("format_list_bulleted");
Icons.format_list_numbered = Icons.new("format_list_numbered");
Icons.format_list_numbered_rtl = Icons.new("format_list_numbered_rtl");
Icons.format_paint = Icons.new("format_paint");
Icons.format_quote = Icons.new("format_quote");
Icons.format_shapes = Icons.new("format_shapes");
Icons.format_size = Icons.new("format_size");
Icons.format_strikethrough = Icons.new("format_strikethrough");
Icons.format_textdirection_l_to_r = Icons.new("format_textdirection_l_to_r");
Icons.format_textdirection_r_to_l = Icons.new("format_textdirection_r_to_l");
Icons.format_underlined = Icons.new("format_underlined");
Icons.forum = Icons.new("forum");
Icons.forward = Icons.new("forward");
Icons.forward_10 = Icons.new("forward_10");
Icons.forward_30 = Icons.new("forward_30");
Icons.forward_5 = Icons.new("forward_5");
Icons.free_breakfast = Icons.new("free_breakfast");
Icons.fullscreen = Icons.new("fullscreen");
Icons.fullscreen_exit = Icons.new("fullscreen_exit");
Icons.functions = Icons.new("functions");
Icons.g_translate = Icons.new("g_translate");
Icons.gamepad = Icons.new("gamepad");
Icons.games = Icons.new("games");
Icons.gavel = Icons.new("gavel");
Icons.gesture = Icons.new("gesture");
Icons.get_app = Icons.new("get_app");
Icons.gif = Icons.new("gif");
Icons.golf_course = Icons.new("golf_course");
Icons.gps_fixed = Icons.new("gps_fixed");
Icons.gps_not_fixed = Icons.new("gps_not_fixed");
Icons.gps_off = Icons.new("gps_off");
Icons.grade = Icons.new("grade");
Icons.gradient = Icons.new("gradient");
Icons.grain = Icons.new("grain");
Icons.graphic_eq = Icons.new("graphic_eq");
Icons.grid_off = Icons.new("grid_off");
Icons.grid_on = Icons.new("grid_on");
Icons.group = Icons.new("group");
Icons.group_add = Icons.new("group_add");
Icons.group_work = Icons.new("group_work");
Icons.hd = Icons.new("hd");
Icons.hdr_off = Icons.new("hdr_off");
Icons.hdr_on = Icons.new("hdr_on");
Icons.hdr_strong = Icons.new("hdr_strong");
Icons.hdr_weak = Icons.new("hdr_weak");
Icons.headset = Icons.new("headset");
Icons.headset_mic = Icons.new("headset_mic");
Icons.headset_off = Icons.new("headset_off");
Icons.healing = Icons.new("healing");
Icons.hearing = Icons.new("hearing");
Icons.help = Icons.new("help");
Icons.help_outline = Icons.new("help_outline");
Icons.high_quality = Icons.new("high_quality");
Icons.highlight = Icons.new("highlight");
Icons.highlight_off = Icons.new("highlight_off");
Icons.history = Icons.new("history");
Icons.home = Icons.new("home");
Icons.hot_tub = Icons.new("hot_tub");
Icons.hotel = Icons.new("hotel");
Icons.hourglass_empty = Icons.new("hourglass_empty");
Icons.hourglass_full = Icons.new("hourglass_full");
Icons.http = Icons.new("http");
Icons.https = Icons.new("https");
Icons.image = Icons.new("image");
Icons.image_aspect_ratio = Icons.new("image_aspect_ratio");
Icons.import_contacts = Icons.new("import_contacts");
Icons.import_export = Icons.new("import_export");
Icons.important_devices = Icons.new("important_devices");
Icons.inbox = Icons.new("inbox");
Icons.indeterminate_check_box = Icons.new("indeterminate_check_box");
Icons.info = Icons.new("info");
Icons.info_outline = Icons.new("info_outline");
Icons.input = Icons.new("input");
Icons.insert_chart = Icons.new("insert_chart");
Icons.insert_comment = Icons.new("insert_comment");
Icons.insert_drive_file = Icons.new("insert_drive_file");
Icons.insert_emoticon = Icons.new("insert_emoticon");
Icons.insert_invitation = Icons.new("insert_invitation");
Icons.insert_link = Icons.new("insert_link");
Icons.insert_photo = Icons.new("insert_photo");
Icons.invert_colors = Icons.new("invert_colors");
Icons.invert_colors_off = Icons.new("invert_colors_off");
Icons.iso = Icons.new("iso");
Icons.keyboard = Icons.new("keyboard");
Icons.keyboard_arrow_down = Icons.new("keyboard_arrow_down");
Icons.keyboard_arrow_left = Icons.new("keyboard_arrow_left");
Icons.keyboard_arrow_right = Icons.new("keyboard_arrow_right");
Icons.keyboard_arrow_up = Icons.new("keyboard_arrow_up");
Icons.keyboard_backspace = Icons.new("keyboard_backspace");
Icons.keyboard_capslock = Icons.new("keyboard_capslock");
Icons.keyboard_hide = Icons.new("keyboard_hide");
Icons.keyboard_return = Icons.new("keyboard_return");
Icons.keyboard_tab = Icons.new("keyboard_tab");
Icons.keyboard_voice = Icons.new("keyboard_voice");
Icons.kitchen = Icons.new("kitchen");
Icons.label = Icons.new("label");
Icons.label_important = Icons.new("label_important");
Icons.label_outline = Icons.new("label_outline");
Icons.landscape = Icons.new("landscape");
Icons.language = Icons.new("language");
Icons.laptop = Icons.new("laptop");
Icons.laptop_chromebook = Icons.new("laptop_chromebook");
Icons.laptop_mac = Icons.new("laptop_mac");
Icons.laptop_windows = Icons.new("laptop_windows");
Icons.last_page = Icons.new("last_page");
Icons.launch = Icons.new("launch");
Icons.layers = Icons.new("layers");
Icons.layers_clear = Icons.new("layers_clear");
Icons.leak_add = Icons.new("leak_add");
Icons.leak_remove = Icons.new("leak_remove");
Icons.lens = Icons.new("lens");
Icons.library_add = Icons.new("library_add");
Icons.library_books = Icons.new("library_books");
Icons.library_music = Icons.new("library_music");
Icons.lightbulb_outline = Icons.new("lightbulb_outline");
Icons.line_style = Icons.new("line_style");
Icons.line_weight = Icons.new("line_weight");
Icons.linear_scale = Icons.new("linear_scale");
Icons.link = Icons.new("link");
Icons.link_off = Icons.new("link_off");
Icons.linked_camera = Icons.new("linked_camera");
Icons.list = Icons.new("list");
Icons.live_help = Icons.new("live_help");
Icons.live_tv = Icons.new("live_tv");
Icons.local_activity = Icons.new("local_activity");
Icons.local_airport = Icons.new("local_airport");
Icons.local_atm = Icons.new("local_atm");
Icons.local_bar = Icons.new("local_bar");
Icons.local_cafe = Icons.new("local_cafe");
Icons.local_car_wash = Icons.new("local_car_wash");
Icons.local_convenience_store = Icons.new("local_convenience_store");
Icons.local_dining = Icons.new("local_dining");
Icons.local_drink = Icons.new("local_drink");
Icons.local_florist = Icons.new("local_florist");
Icons.local_gas_station = Icons.new("local_gas_station");
Icons.local_grocery_store = Icons.new("local_grocery_store");
Icons.local_hospital = Icons.new("local_hospital");
Icons.local_hotel = Icons.new("local_hotel");
Icons.local_laundry_service = Icons.new("local_laundry_service");
Icons.local_library = Icons.new("local_library");
Icons.local_mall = Icons.new("local_mall");
Icons.local_movies = Icons.new("local_movies");
Icons.local_offer = Icons.new("local_offer");
Icons.local_parking = Icons.new("local_parking");
Icons.local_pharmacy = Icons.new("local_pharmacy");
Icons.local_phone = Icons.new("local_phone");
Icons.local_pizza = Icons.new("local_pizza");
Icons.local_play = Icons.new("local_play");
Icons.local_post_office = Icons.new("local_post_office");
Icons.local_printshop = Icons.new("local_printshop");
Icons.local_see = Icons.new("local_see");
Icons.local_shipping = Icons.new("local_shipping");
Icons.local_taxi = Icons.new("local_taxi");
Icons.location_city = Icons.new("location_city");
Icons.location_disabled = Icons.new("location_disabled");
Icons.location_off = Icons.new("location_off");
Icons.location_on = Icons.new("location_on");
Icons.location_searching = Icons.new("location_searching");
Icons.lock = Icons.new("lock");
Icons.lock_open = Icons.new("lock_open");
Icons.lock_outline = Icons.new("lock_outline");
Icons.looks = Icons.new("looks");
Icons.looks_3 = Icons.new("looks_3");
Icons.looks_4 = Icons.new("looks_4");
Icons.looks_5 = Icons.new("looks_5");
Icons.looks_6 = Icons.new("looks_6");
Icons.looks_one = Icons.new("looks_one");
Icons.looks_two = Icons.new("looks_two");
Icons.loop = Icons.new("loop");
Icons.loupe = Icons.new("loupe");
Icons.low_priority = Icons.new("low_priority");
Icons.loyalty = Icons.new("loyalty");
Icons.mail = Icons.new("mail");
Icons.mail_outline = Icons.new("mail_outline");
Icons.map = Icons.new("map");
Icons.markunread = Icons.new("markunread");
Icons.markunread_mailbox = Icons.new("markunread_mailbox");
Icons.maximize = Icons.new("maximize");
Icons.memory = Icons.new("memory");
Icons.menu = Icons.new("menu");
Icons.merge_type = Icons.new("merge_type");
Icons.message = Icons.new("message");
Icons.mic = Icons.new("mic");
Icons.mic_none = Icons.new("mic_none");
Icons.mic_off = Icons.new("mic_off");
Icons.minimize = Icons.new("minimize");
Icons.missed_video_call = Icons.new("missed_video_call");
Icons.mms = Icons.new("mms");
Icons.mobile_screen_share = Icons.new("mobile_screen_share");
Icons.mode_comment = Icons.new("mode_comment");
Icons.mode_edit = Icons.new("mode_edit");
Icons.monetization_on = Icons.new("monetization_on");
Icons.money_off = Icons.new("money_off");
Icons.monochrome_photos = Icons.new("monochrome_photos");
Icons.mood = Icons.new("mood");
Icons.mood_bad = Icons.new("mood_bad");
Icons.more = Icons.new("more");
Icons.more_horiz = Icons.new("more_horiz");
Icons.more_vert = Icons.new("more_vert");
Icons.motorcycle = Icons.new("motorcycle");
Icons.mouse = Icons.new("mouse");
Icons.move_to_inbox = Icons.new("move_to_inbox");
Icons.movie = Icons.new("movie");
Icons.movie_creation = Icons.new("movie_creation");
Icons.movie_filter = Icons.new("movie_filter");
Icons.multiline_chart = Icons.new("multiline_chart");
Icons.music_note = Icons.new("music_note");
Icons.music_video = Icons.new("music_video");
Icons.my_location = Icons.new("my_location");
Icons.nature = Icons.new("nature");
Icons.nature_people = Icons.new("nature_people");
Icons.navigate_before = Icons.new("navigate_before");
Icons.navigate_next = Icons.new("navigate_next");
Icons.navigation = Icons.new("navigation");
Icons.near_me = Icons.new("near_me");
Icons.network_cell = Icons.new("network_cell");
Icons.network_check = Icons.new("network_check");
Icons.network_locked = Icons.new("network_locked");
Icons.network_wifi = Icons.new("network_wifi");
Icons.new_releases = Icons.new("new_releases");
Icons.next_week = Icons.new("next_week");
Icons.nfc = Icons.new("nfc");
Icons.no_encryption = Icons.new("no_encryption");
Icons.no_sim = Icons.new("no_sim");
Icons.not_interested = Icons.new("not_interested");
Icons.not_listed_location = Icons.new("not_listed_location");
Icons.note = Icons.new("note");
Icons.note_add = Icons.new("note_add");
Icons.notification_important = Icons.new("notification_important");
Icons.notifications = Icons.new("notifications");
Icons.notifications_active = Icons.new("notifications_active");
Icons.notifications_none = Icons.new("notifications_none");
Icons.notifications_off = Icons.new("notifications_off");
Icons.notifications_paused = Icons.new("notifications_paused");
Icons.offline_bolt = Icons.new("offline_bolt");
Icons.offline_pin = Icons.new("offline_pin");
Icons.ondemand_video = Icons.new("ondemand_video");
Icons.opacity = Icons.new("opacity");
Icons.open_in_browser = Icons.new("open_in_browser");
Icons.open_in_new = Icons.new("open_in_new");
Icons.open_with = Icons.new("open_with");
Icons.outlined_flag = Icons.new("outlined_flag");
Icons.pages = Icons.new("pages");
Icons.pageview = Icons.new("pageview");
Icons.palette = Icons.new("palette");
Icons.pan_tool = Icons.new("pan_tool");
Icons.panorama = Icons.new("panorama");
Icons.panorama_fish_eye = Icons.new("panorama_fish_eye");
Icons.panorama_horizontal = Icons.new("panorama_horizontal");
Icons.panorama_vertical = Icons.new("panorama_vertical");
Icons.panorama_wide_angle = Icons.new("panorama_wide_angle");
Icons.party_mode = Icons.new("party_mode");
Icons.pause = Icons.new("pause");
Icons.pause_circle_filled = Icons.new("pause_circle_filled");
Icons.pause_circle_outline = Icons.new("pause_circle_outline");
Icons.payment = Icons.new("payment");
Icons.people = Icons.new("people");
Icons.people_outline = Icons.new("people_outline");
Icons.perm_camera_mic = Icons.new("perm_camera_mic");
Icons.perm_contact_calendar = Icons.new("perm_contact_calendar");
Icons.perm_data_setting = Icons.new("perm_data_setting");
Icons.perm_device_information = Icons.new("perm_device_information");
Icons.perm_identity = Icons.new("perm_identity");
Icons.perm_media = Icons.new("perm_media");
Icons.perm_phone_msg = Icons.new("perm_phone_msg");
Icons.perm_scan_wifi = Icons.new("perm_scan_wifi");
Icons.person = Icons.new("person");
Icons.person_add = Icons.new("person_add");
Icons.person_outline = Icons.new("person_outline");
Icons.person_pin = Icons.new("person_pin");
Icons.person_pin_circle = Icons.new("person_pin_circle");
Icons.personal_video = Icons.new("personal_video");
Icons.pets = Icons.new("pets");
Icons.phone = Icons.new("phone");
Icons.phone_android = Icons.new("phone_android");
Icons.phone_bluetooth_speaker = Icons.new("phone_bluetooth_speaker");
Icons.phone_forwarded = Icons.new("phone_forwarded");
Icons.phone_in_talk = Icons.new("phone_in_talk");
Icons.phone_iphone = Icons.new("phone_iphone");
Icons.phone_locked = Icons.new("phone_locked");
Icons.phone_missed = Icons.new("phone_missed");
Icons.phone_paused = Icons.new("phone_paused");
Icons.phonelink = Icons.new("phonelink");
Icons.phonelink_erase = Icons.new("phonelink_erase");
Icons.phonelink_lock = Icons.new("phonelink_lock");
Icons.phonelink_off = Icons.new("phonelink_off");
Icons.phonelink_ring = Icons.new("phonelink_ring");
Icons.phonelink_setup = Icons.new("phonelink_setup");
Icons.photo = Icons.new("photo");
Icons.photo_album = Icons.new("photo_album");
Icons.photo_camera = Icons.new("photo_camera");
Icons.photo_filter = Icons.new("photo_filter");
Icons.photo_library = Icons.new("photo_library");
Icons.photo_size_select_actual = Icons.new("photo_size_select_actual");
Icons.photo_size_select_large = Icons.new("photo_size_select_large");
Icons.photo_size_select_small = Icons.new("photo_size_select_small");
Icons.picture_as_pdf = Icons.new("picture_as_pdf");
Icons.picture_in_picture = Icons.new("picture_in_picture");
Icons.picture_in_picture_alt = Icons.new("picture_in_picture_alt");
Icons.pie_chart = Icons.new("pie_chart");
Icons.pie_chart_outlined = Icons.new("pie_chart_outlined");
Icons.pin_drop = Icons.new("pin_drop");
Icons.place = Icons.new("place");
Icons.play_arrow = Icons.new("play_arrow");
Icons.play_circle_filled = Icons.new("play_circle_filled");
Icons.play_circle_outline = Icons.new("play_circle_outline");
Icons.play_for_work = Icons.new("play_for_work");
Icons.playlist_add = Icons.new("playlist_add");
Icons.playlist_add_check = Icons.new("playlist_add_check");
Icons.playlist_play = Icons.new("playlist_play");
Icons.plus_one = Icons.new("plus_one");
Icons.poll = Icons.new("poll");
Icons.polymer = Icons.new("polymer");
Icons.pool = Icons.new("pool");
Icons.portable_wifi_off = Icons.new("portable_wifi_off");
Icons.portrait = Icons.new("portrait");
Icons.power = Icons.new("power");
Icons.power_input = Icons.new("power_input");
Icons.power_settings_new = Icons.new("power_settings_new");
Icons.pregnant_woman = Icons.new("pregnant_woman");
Icons.present_to_all = Icons.new("present_to_all");
Icons.print = Icons.new("print");
Icons.priority_high = Icons.new("priority_high");
Icons.public = Icons.new("public");
Icons.publish = Icons.new("publish");
Icons.query_builder = Icons.new("query_builder");
Icons.question_answer = Icons.new("question_answer");
Icons.queue = Icons.new("queue");
Icons.queue_music = Icons.new("queue_music");
Icons.queue_play_next = Icons.new("queue_play_next");
Icons.radio = Icons.new("radio");
Icons.radio_button_checked = Icons.new("radio_button_checked");
Icons.radio_button_unchecked = Icons.new("radio_button_unchecked");
Icons.rate_review = Icons.new("rate_review");
Icons.receipt = Icons.new("receipt");
Icons.recent_actors = Icons.new("recent_actors");
Icons.record_voice_over = Icons.new("record_voice_over");
Icons.redeem = Icons.new("redeem");
Icons.redo = Icons.new("redo");
Icons.refresh = Icons.new("refresh");
Icons.remove = Icons.new("remove");
Icons.remove_circle = Icons.new("remove_circle");
Icons.remove_circle_outline = Icons.new("remove_circle_outline");
Icons.remove_from_queue = Icons.new("remove_from_queue");
Icons.remove_red_eye = Icons.new("remove_red_eye");
Icons.remove_shopping_cart = Icons.new("remove_shopping_cart");
Icons.reorder = Icons.new("reorder");
Icons.repeat = Icons.new("repeat");
Icons.repeat_one = Icons.new("repeat_one");
Icons.replay = Icons.new("replay");
Icons.replay_10 = Icons.new("replay_10");
Icons.replay_30 = Icons.new("replay_30");
Icons.replay_5 = Icons.new("replay_5");
Icons.reply = Icons.new("reply");
Icons.reply_all = Icons.new("reply_all");
Icons.report = Icons.new("report");
Icons.report_off = Icons.new("report_off");
Icons.report_problem = Icons.new("report_problem");
Icons.restaurant = Icons.new("restaurant");
Icons.restaurant_menu = Icons.new("restaurant_menu");
Icons.restore = Icons.new("restore");
Icons.restore_from_trash = Icons.new("restore_from_trash");
Icons.restore_page = Icons.new("restore_page");
Icons.ring_volume = Icons.new("ring_volume");
Icons.room = Icons.new("room");
Icons.room_service = Icons.new("room_service");
Icons.rotate_90_degrees_ccw = Icons.new("rotate_90_degrees_ccw");
Icons.rotate_left = Icons.new("rotate_left");
Icons.rotate_right = Icons.new("rotate_right");
Icons.rounded_corner = Icons.new("rounded_corner");
Icons.router = Icons.new("router");
Icons.rowing = Icons.new("rowing");
Icons.rss_feed = Icons.new("rss_feed");
Icons.rv_hookup = Icons.new("rv_hookup");
Icons.satellite = Icons.new("satellite");
Icons.save = Icons.new("save");
Icons.save_alt = Icons.new("save_alt");
Icons.scanner = Icons.new("scanner");
Icons.scatter_plot = Icons.new("scatter_plot");
Icons.schedule = Icons.new("schedule");
Icons.school = Icons.new("school");
Icons.score = Icons.new("score");
Icons.screen_lock_landscape = Icons.new("screen_lock_landscape");
Icons.screen_lock_portrait = Icons.new("screen_lock_portrait");
Icons.screen_lock_rotation = Icons.new("screen_lock_rotation");
Icons.screen_rotation = Icons.new("screen_rotation");
Icons.screen_share = Icons.new("screen_share");
Icons.sd_card = Icons.new("sd_card");
Icons.sd_storage = Icons.new("sd_storage");
Icons.search = Icons.new("search");
Icons.security = Icons.new("security");
Icons.select_all = Icons.new("select_all");
Icons.send = Icons.new("send");
Icons.sentiment_dissatisfied = Icons.new("sentiment_dissatisfied");
Icons.sentiment_neutral = Icons.new("sentiment_neutral");
Icons.sentiment_satisfied = Icons.new("sentiment_satisfied");
Icons.sentiment_very_dissatisfied = Icons.new("sentiment_very_dissatisfied");
Icons.sentiment_very_satisfied = Icons.new("sentiment_very_satisfied");
Icons.settings = Icons.new("settings");
Icons.settings_applications = Icons.new("settings_applications");
Icons.settings_backup_restore = Icons.new("settings_backup_restore");
Icons.settings_bluetooth = Icons.new("settings_bluetooth");
Icons.settings_brightness = Icons.new("settings_brightness");
Icons.settings_cell = Icons.new("settings_cell");
Icons.settings_ethernet = Icons.new("settings_ethernet");
Icons.settings_input_antenna = Icons.new("settings_input_antenna");
Icons.settings_input_component = Icons.new("settings_input_component");
Icons.settings_input_composite = Icons.new("settings_input_composite");
Icons.settings_input_hdmi = Icons.new("settings_input_hdmi");
Icons.settings_input_svideo = Icons.new("settings_input_svideo");
Icons.settings_overscan = Icons.new("settings_overscan");
Icons.settings_phone = Icons.new("settings_phone");
Icons.settings_power = Icons.new("settings_power");
Icons.settings_remote = Icons.new("settings_remote");
Icons.settings_system_daydream = Icons.new("settings_system_daydream");
Icons.settings_voice = Icons.new("settings_voice");
Icons.share = Icons.new("share");
Icons.shop = Icons.new("shop");
Icons.shop_two = Icons.new("shop_two");
Icons.shopping_basket = Icons.new("shopping_basket");
Icons.shopping_cart = Icons.new("shopping_cart");
Icons.short_text = Icons.new("short_text");
Icons.show_chart = Icons.new("show_chart");
Icons.shuffle = Icons.new("shuffle");
Icons.shutter_speed = Icons.new("shutter_speed");
Icons.signal_cellular_4_bar = Icons.new("signal_cellular_4_bar");
Icons.signal_cellular_connected_no_internet_4_bar = Icons.new("signal_cellular_connected_no_internet_4_bar");
Icons.signal_cellular_no_sim = Icons.new("signal_cellular_no_sim");
Icons.signal_cellular_null = Icons.new("signal_cellular_null");
Icons.signal_cellular_off = Icons.new("signal_cellular_off");
Icons.signal_wifi_4_bar = Icons.new("signal_wifi_4_bar");
Icons.signal_wifi_4_bar_lock = Icons.new("signal_wifi_4_bar_lock");
Icons.signal_wifi_off = Icons.new("signal_wifi_off");
Icons.sim_card = Icons.new("sim_card");
Icons.sim_card_alert = Icons.new("sim_card_alert");
Icons.skip_next = Icons.new("skip_next");
Icons.skip_previous = Icons.new("skip_previous");
Icons.slideshow = Icons.new("slideshow");
Icons.slow_motion_video = Icons.new("slow_motion_video");
Icons.smartphone = Icons.new("smartphone");
Icons.smoke_free = Icons.new("smoke_free");
Icons.smoking_rooms = Icons.new("smoking_rooms");
Icons.sms = Icons.new("sms");
Icons.sms_failed = Icons.new("sms_failed");
Icons.snooze = Icons.new("snooze");
Icons.sort = Icons.new("sort");
Icons.sort_by_alpha = Icons.new("sort_by_alpha");
Icons.spa = Icons.new("spa");
Icons.space_bar = Icons.new("space_bar");
Icons.speaker = Icons.new("speaker");
Icons.speaker_group = Icons.new("speaker_group");
Icons.speaker_notes = Icons.new("speaker_notes");
Icons.speaker_notes_off = Icons.new("speaker_notes_off");
Icons.speaker_phone = Icons.new("speaker_phone");
Icons.spellcheck = Icons.new("spellcheck");
Icons.star = Icons.new("star");
Icons.star_border = Icons.new("star_border");
Icons.star_half = Icons.new("star_half");
Icons.stars = Icons.new("stars");
Icons.stay_current_landscape = Icons.new("stay_current_landscape");
Icons.stay_current_portrait = Icons.new("stay_current_portrait");
Icons.stay_primary_landscape = Icons.new("stay_primary_landscape");
Icons.stay_primary_portrait = Icons.new("stay_primary_portrait");
Icons.stop = Icons.new("stop");
Icons.stop_screen_share = Icons.new("stop_screen_share");
Icons.storage = Icons.new("storage");
Icons.store = Icons.new("store");
Icons.store_mall_directory = Icons.new("store_mall_directory");
Icons.straighten = Icons.new("straighten");
Icons.streetview = Icons.new("streetview");
Icons.strikethrough_s = Icons.new("strikethrough_s");
Icons.style = Icons.new("style");
Icons.subdirectory_arrow_left = Icons.new("subdirectory_arrow_left");
Icons.subdirectory_arrow_right = Icons.new("subdirectory_arrow_right");
Icons.subject = Icons.new("subject");
Icons.subscriptions = Icons.new("subscriptions");
Icons.subtitles = Icons.new("subtitles");
Icons.subway = Icons.new("subway");
Icons.supervised_user_circle = Icons.new("supervised_user_circle");
Icons.supervisor_account = Icons.new("supervisor_account");
Icons.surround_sound = Icons.new("surround_sound");
Icons.swap_calls = Icons.new("swap_calls");
Icons.swap_horiz = Icons.new("swap_horiz");
Icons.swap_horizontal_circle = Icons.new("swap_horizontal_circle");
Icons.swap_vert = Icons.new("swap_vert");
Icons.swap_vertical_circle = Icons.new("swap_vertical_circle");
Icons.switch_camera = Icons.new("switch_camera");
Icons.switch_video = Icons.new("switch_video");
Icons.sync = Icons.new("sync");
Icons.sync_disabled = Icons.new("sync_disabled");
Icons.sync_problem = Icons.new("sync_problem");
Icons.system_update = Icons.new("system_update");
Icons.system_update_alt = Icons.new("system_update_alt");
Icons.tab = Icons.new("tab");
Icons.tab_unselected = Icons.new("tab_unselected");
Icons.table_chart = Icons.new("table_chart");
Icons.tablet = Icons.new("tablet");
Icons.tablet_android = Icons.new("tablet_android");
Icons.tablet_mac = Icons.new("tablet_mac");
Icons.tag_faces = Icons.new("tag_faces");
Icons.tap_and_play = Icons.new("tap_and_play");
Icons.terrain = Icons.new("terrain");
Icons.text_fields = Icons.new("text_fields");
Icons.text_format = Icons.new("text_format");
Icons.text_rotate_up = Icons.new("text_rotate_up");
Icons.text_rotate_vertical = Icons.new("text_rotate_vertical");
Icons.text_rotation_angledown = Icons.new("text_rotation_angledown");
Icons.text_rotation_angleup = Icons.new("text_rotation_angleup");
Icons.text_rotation_down = Icons.new("text_rotation_down");
Icons.text_rotation_none = Icons.new("text_rotation_none");
Icons.textsms = Icons.new("textsms");
Icons.texture = Icons.new("texture");
Icons.theaters = Icons.new("theaters");
Icons.thumb_down = Icons.new("thumb_down");
Icons.thumb_up = Icons.new("thumb_up");
Icons.thumbs_up_down = Icons.new("thumbs_up_down");
Icons.time_to_leave = Icons.new("time_to_leave");
Icons.timelapse = Icons.new("timelapse");
Icons.timeline = Icons.new("timeline");
Icons.timer = Icons.new("timer");
Icons.timer_10 = Icons.new("timer_10");
Icons.timer_3 = Icons.new("timer_3");
Icons.timer_off = Icons.new("timer_off");
Icons.title = Icons.new("title");
Icons.toc = Icons.new("toc");
Icons.today = Icons.new("today");
Icons.toll = Icons.new("toll");
Icons.tonality = Icons.new("tonality");
Icons.touch_app = Icons.new("touch_app");
Icons.toys = Icons.new("toys");
Icons.track_changes = Icons.new("track_changes");
Icons.traffic = Icons.new("traffic");
Icons.train = Icons.new("train");
Icons.tram = Icons.new("tram");
Icons.transfer_within_a_station = Icons.new("transfer_within_a_station");
Icons.transform = Icons.new("transform");
Icons.transit_enterexit = Icons.new("transit_enterexit");
Icons.translate = Icons.new("translate");
Icons.trending_down = Icons.new("trending_down");
Icons.trending_flat = Icons.new("trending_flat");
Icons.trending_up = Icons.new("trending_up");
Icons.trip_origin = Icons.new("trip_origin");
Icons.tune = Icons.new("tune");
Icons.turned_in = Icons.new("turned_in");
Icons.turned_in_not = Icons.new("turned_in_not");
Icons.tv = Icons.new("tv");
Icons.unarchive = Icons.new("unarchive");
Icons.undo = Icons.new("undo");
Icons.unfold_less = Icons.new("unfold_less");
Icons.unfold_more = Icons.new("unfold_more");
Icons.update = Icons.new("update");
Icons.usb = Icons.new("usb");
Icons.verified_user = Icons.new("verified_user");
Icons.vertical_align_bottom = Icons.new("vertical_align_bottom");
Icons.vertical_align_center = Icons.new("vertical_align_center");
Icons.vertical_align_top = Icons.new("vertical_align_top");
Icons.vibration = Icons.new("vibration");
Icons.video_call = Icons.new("video_call");
Icons.video_label = Icons.new("video_label");
Icons.video_library = Icons.new("video_library");
Icons.videocam = Icons.new("videocam");
Icons.videocam_off = Icons.new("videocam_off");
Icons.videogame_asset = Icons.new("videogame_asset");
Icons.view_agenda = Icons.new("view_agenda");
Icons.view_array = Icons.new("view_array");
Icons.view_carousel = Icons.new("view_carousel");
Icons.view_column = Icons.new("view_column");
Icons.view_comfy = Icons.new("view_comfy");
Icons.view_compact = Icons.new("view_compact");
Icons.view_day = Icons.new("view_day");
Icons.view_headline = Icons.new("view_headline");
Icons.view_list = Icons.new("view_list");
Icons.view_module = Icons.new("view_module");
Icons.view_quilt = Icons.new("view_quilt");
Icons.view_stream = Icons.new("view_stream");
Icons.view_week = Icons.new("view_week");
Icons.vignette = Icons.new("vignette");
Icons.visibility = Icons.new("visibility");
Icons.visibility_off = Icons.new("visibility_off");
Icons.voice_chat = Icons.new("voice_chat");
Icons.voicemail = Icons.new("voicemail");
Icons.volume_down = Icons.new("volume_down");
Icons.volume_mute = Icons.new("volume_mute");
Icons.volume_off = Icons.new("volume_off");
Icons.volume_up = Icons.new("volume_up");
Icons.vpn_key = Icons.new("vpn_key");
Icons.vpn_lock = Icons.new("vpn_lock");
Icons.wallpaper = Icons.new("wallpaper");
Icons.warning = Icons.new("warning");
Icons.watch = Icons.new("watch");
Icons.watch_later = Icons.new("watch_later");
Icons.wb_auto = Icons.new("wb_auto");
Icons.wb_cloudy = Icons.new("wb_cloudy");
Icons.wb_incandescent = Icons.new("wb_incandescent");
Icons.wb_iridescent = Icons.new("wb_iridescent");
Icons.wb_sunny = Icons.new("wb_sunny");
Icons.wc = Icons.new("wc");
Icons.web = Icons.new("web");
Icons.web_asset = Icons.new("web_asset");
Icons.weekend = Icons.new("weekend");
Icons.whatshot = Icons.new("whatshot");
Icons.widgets = Icons.new("widgets");
Icons.wifi = Icons.new("wifi");
Icons.wifi_lock = Icons.new("wifi_lock");
Icons.wifi_tethering = Icons.new("wifi_tethering");
Icons.work = Icons.new("work");
Icons.wrap_text = Icons.new("wrap_text");
Icons.youtube_searched_for = Icons.new("youtube_searched_for");
Icons.zoom_in = Icons.new("zoom_in");
Icons.zoom_out = Icons.new("zoom_out");
Icons.zoom_out_map = Icons.new("zoom_out_map");
//#endregion
//#region ******** Cupertino Icons ********
class CupertinoIcons extends IconData {
    constructor(icon) {
        super(icon);
    }
    static new(icon) {
        return new CupertinoIcons(icon);
    }
}
exports.CupertinoIcons = CupertinoIcons;
CupertinoIcons.left_chevron = CupertinoIcons.new("left_chevron");
CupertinoIcons.right_chevron = CupertinoIcons.new("right_chevron");
CupertinoIcons.share = CupertinoIcons.new("share");
CupertinoIcons.share_solid = CupertinoIcons.new("share_solid");
CupertinoIcons.book = CupertinoIcons.new("book");
CupertinoIcons.book_solid = CupertinoIcons.new("book_solid");
CupertinoIcons.bookmark = CupertinoIcons.new("bookmark");
CupertinoIcons.bookmark_solid = CupertinoIcons.new("bookmark_solid");
CupertinoIcons.info = CupertinoIcons.new("info");
CupertinoIcons.reply = CupertinoIcons.new("reply");
CupertinoIcons.conversation_bubble = CupertinoIcons.new("conversation_bubble");
CupertinoIcons.profile_circled = CupertinoIcons.new("profile_circled");
CupertinoIcons.plus_circled = CupertinoIcons.new("plus_circled");
CupertinoIcons.minus_circled = CupertinoIcons.new("minus_circled");
CupertinoIcons.flag = CupertinoIcons.new("flag");
CupertinoIcons.search = CupertinoIcons.new("search");
CupertinoIcons.check_mark = CupertinoIcons.new("check_mark");
CupertinoIcons.check_mark_circled = CupertinoIcons.new("check_mark_circled");
CupertinoIcons.check_mark_circled_solid = CupertinoIcons.new("check_mark_circled_solid");
CupertinoIcons.circle = CupertinoIcons.new("circle");
CupertinoIcons.circle_filled = CupertinoIcons.new("circle_filled");
CupertinoIcons.back = CupertinoIcons.new("back");
CupertinoIcons.forward = CupertinoIcons.new("forward");
CupertinoIcons.home = CupertinoIcons.new("home");
CupertinoIcons.shopping_cart = CupertinoIcons.new("shopping_cart");
CupertinoIcons.ellipsis = CupertinoIcons.new("ellipsis");
CupertinoIcons.phone = CupertinoIcons.new("phone");
CupertinoIcons.phone_solid = CupertinoIcons.new("phone_solid");
CupertinoIcons.down_arrow = CupertinoIcons.new("down_arrow");
CupertinoIcons.up_arrow = CupertinoIcons.new("up_arrow");
CupertinoIcons.battery_charging = CupertinoIcons.new("battery_charging");
CupertinoIcons.battery_empty = CupertinoIcons.new("battery_empty");
CupertinoIcons.battery_full = CupertinoIcons.new("battery_full");
CupertinoIcons.battery_75_percent = CupertinoIcons.new("battery_75_percent");
CupertinoIcons.battery_25_percent = CupertinoIcons.new("battery_25_percent");
CupertinoIcons.bluetooth = CupertinoIcons.new("bluetooth");
CupertinoIcons.restart = CupertinoIcons.new("restart");
CupertinoIcons.reply_all = CupertinoIcons.new("reply_all");
CupertinoIcons.reply_thick_solid = CupertinoIcons.new("reply_thick_solid");
CupertinoIcons.share_up = CupertinoIcons.new("share_up");
CupertinoIcons.shuffle = CupertinoIcons.new("shuffle");
CupertinoIcons.shuffle_medium = CupertinoIcons.new("shuffle_medium");
CupertinoIcons.shuffle_thick = CupertinoIcons.new("shuffle_thick");
CupertinoIcons.photo_camera = CupertinoIcons.new("photo_camera");
CupertinoIcons.photo_camera_solid = CupertinoIcons.new("photo_camera_solid");
CupertinoIcons.video_camera = CupertinoIcons.new("video_camera");
CupertinoIcons.video_camera_solid = CupertinoIcons.new("video_camera_solid");
CupertinoIcons.switch_camera = CupertinoIcons.new("switch_camera");
CupertinoIcons.switch_camera_solid = CupertinoIcons.new("switch_camera_solid");
CupertinoIcons.collections = CupertinoIcons.new("collections");
CupertinoIcons.collections_solid = CupertinoIcons.new("collections_solid");
CupertinoIcons.folder = CupertinoIcons.new("folder");
CupertinoIcons.folder_solid = CupertinoIcons.new("folder_solid");
CupertinoIcons.folder_open = CupertinoIcons.new("folder_open");
CupertinoIcons.delete = CupertinoIcons.new("delete");
CupertinoIcons.delete_solid = CupertinoIcons.new("delete_solid");
CupertinoIcons.delete_simple = CupertinoIcons.new("delete_simple");
CupertinoIcons.pen = CupertinoIcons.new("pen");
CupertinoIcons.pencil = CupertinoIcons.new("pencil");
CupertinoIcons.create = CupertinoIcons.new("create");
CupertinoIcons.create_solid = CupertinoIcons.new("create_solid");
CupertinoIcons.refresh = CupertinoIcons.new("refresh");
CupertinoIcons.refresh_circled = CupertinoIcons.new("refresh_circled");
CupertinoIcons.refresh_circled_solid = CupertinoIcons.new("refresh_circled_solid");
CupertinoIcons.refresh_thin = CupertinoIcons.new("refresh_thin");
CupertinoIcons.refresh_thick = CupertinoIcons.new("refresh_thick");
CupertinoIcons.refresh_bold = CupertinoIcons.new("refresh_bold");
CupertinoIcons.clear_thick = CupertinoIcons.new("clear_thick");
CupertinoIcons.clear_thick_circled = CupertinoIcons.new("clear_thick_circled");
CupertinoIcons.clear = CupertinoIcons.new("clear");
CupertinoIcons.clear_circled = CupertinoIcons.new("clear_circled");
CupertinoIcons.clear_circled_solid = CupertinoIcons.new("clear_circled_solid");
CupertinoIcons.add = CupertinoIcons.new("add");
CupertinoIcons.add_circled = CupertinoIcons.new("add_circled");
CupertinoIcons.add_circled_solid = CupertinoIcons.new("add_circled_solid");
CupertinoIcons.gear = CupertinoIcons.new("gear");
CupertinoIcons.gear_solid = CupertinoIcons.new("gear_solid");
CupertinoIcons.gear_big = CupertinoIcons.new("gear_big");
CupertinoIcons.settings = CupertinoIcons.new("settings");
CupertinoIcons.settings_solid = CupertinoIcons.new("settings_solid");
CupertinoIcons.music_note = CupertinoIcons.new("music_note");
CupertinoIcons.double_music_note = CupertinoIcons.new("double_music_note");
CupertinoIcons.play_arrow = CupertinoIcons.new("play_arrow");
CupertinoIcons.play_arrow_solid = CupertinoIcons.new("play_arrow_solid");
CupertinoIcons.pause = CupertinoIcons.new("pause");
CupertinoIcons.pause_solid = CupertinoIcons.new("pause_solid");
CupertinoIcons.loop = CupertinoIcons.new("loop");
CupertinoIcons.loop_thick = CupertinoIcons.new("loop_thick");
CupertinoIcons.volume_down = CupertinoIcons.new("volume_down");
CupertinoIcons.volume_mute = CupertinoIcons.new("volume_mute");
CupertinoIcons.volume_off = CupertinoIcons.new("volume_off");
CupertinoIcons.volume_up = CupertinoIcons.new("volume_up");
CupertinoIcons.fullscreen = CupertinoIcons.new("fullscreen");
CupertinoIcons.fullscreen_exit = CupertinoIcons.new("fullscreen_exit");
CupertinoIcons.mic_off = CupertinoIcons.new("mic_off");
CupertinoIcons.mic = CupertinoIcons.new("mic");
CupertinoIcons.mic_solid = CupertinoIcons.new("mic_solid");
CupertinoIcons.clock = CupertinoIcons.new("clock");
CupertinoIcons.clock_solid = CupertinoIcons.new("clock_solid");
CupertinoIcons.time = CupertinoIcons.new("time");
CupertinoIcons.time_solid = CupertinoIcons.new("time_solid");
CupertinoIcons.padlock = CupertinoIcons.new("padlock");
CupertinoIcons.padlock_solid = CupertinoIcons.new("padlock_solid");
CupertinoIcons.eye = CupertinoIcons.new("eye");
CupertinoIcons.eye_solid = CupertinoIcons.new("eye_solid");
CupertinoIcons.person = CupertinoIcons.new("person");
CupertinoIcons.person_solid = CupertinoIcons.new("person_solid");
CupertinoIcons.person_add = CupertinoIcons.new("person_add");
CupertinoIcons.person_add_solid = CupertinoIcons.new("person_add_solid");
CupertinoIcons.group = CupertinoIcons.new("group");
CupertinoIcons.group_solid = CupertinoIcons.new("group_solid");
CupertinoIcons.mail = CupertinoIcons.new("mail");
CupertinoIcons.mail_solid = CupertinoIcons.new("mail_solid");
CupertinoIcons.location = CupertinoIcons.new("location");
CupertinoIcons.location_solid = CupertinoIcons.new("location_solid");
CupertinoIcons.tag = CupertinoIcons.new("tag");
CupertinoIcons.tag_solid = CupertinoIcons.new("tag_solid");
CupertinoIcons.tags = CupertinoIcons.new("tags");
CupertinoIcons.tags_solid = CupertinoIcons.new("tags_solid");
CupertinoIcons.bus = CupertinoIcons.new("bus");
CupertinoIcons.car = CupertinoIcons.new("car");
CupertinoIcons.car_detailed = CupertinoIcons.new("car_detailed");
CupertinoIcons.train_style_one = CupertinoIcons.new("train_style_one");
CupertinoIcons.train_style_two = CupertinoIcons.new("train_style_two");
CupertinoIcons.paw = CupertinoIcons.new("paw");
CupertinoIcons.paw_solid = CupertinoIcons.new("paw_solid");
CupertinoIcons.game_controller = CupertinoIcons.new("game_controller");
CupertinoIcons.game_controller_solid = CupertinoIcons.new("game_controller_solid");
CupertinoIcons.lab_flask = CupertinoIcons.new("lab_flask");
CupertinoIcons.lab_flask_solid = CupertinoIcons.new("lab_flask_solid");
CupertinoIcons.heart = CupertinoIcons.new("heart");
CupertinoIcons.heart_solid = CupertinoIcons.new("heart_solid");
CupertinoIcons.bell = CupertinoIcons.new("bell");
CupertinoIcons.bell_solid = CupertinoIcons.new("bell_solid");
CupertinoIcons.news = CupertinoIcons.new("news");
CupertinoIcons.news_solid = CupertinoIcons.new("news_solid");
CupertinoIcons.brightness = CupertinoIcons.new("brightness");
CupertinoIcons.brightness_solid = CupertinoIcons.new("brightness_solid");
class AbsorbPointer extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          absorbing?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.absorbing = config.absorbing;
            this.ignoringSemantics = config.ignoringSemantics;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          absorbing?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(config) {
        return new AbsorbPointer(config);
    }
}
exports.AbsorbPointer = AbsorbPointer;
class AnimationController extends Widget {
    /**
     * @param config config:
        {
          value?:number,
          duration?:Duration,
          debugLabel?:string;,
          lowerBound?:number,
          upperBound?:number,
          animationBehavior?:AnimationBehavior,
          vsync?:any,
        }
     */
    static new(config) {
        var v = new AnimationController();
        v.createMirrorID();
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
//****** TODO Animation ******
class Animation extends Widget {
    static new(tween, controller) {
        var v = new Animation();
        v.createMirrorID();
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
class AppBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          automaticallyImplyLeading?:boolean,
          title?:Widget,
          actions?:Array<Widget>,
          flexibleSpace?:Widget,
          bottom?:Widget,
          elevation?:number,
          shadowColor?:Color,
          shape?:ShapeBorder,
          backgroundColor?:Color,
          brightness?:Brightness,
          primary?:boolean,
          centerTitle?:boolean,
          excludeHeaderSemantics?:boolean,
          titleSpacing?:number,
          toolbarOpacity?:number,
          bottomOpacity?:number,
          toolbarHeight?:number
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.automaticallyImplyLeading = config.automaticallyImplyLeading;
            this.title = config.title;
            this.actions = config.actions;
            this.flexibleSpace = config.flexibleSpace;
            this.bottom = config.bottom;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.shape = config.shape;
            this.backgroundColor = config.backgroundColor;
            this.brightness = config.brightness;
            this.primary = config.primary;
            this.centerTitle = config.centerTitle;
            this.excludeHeaderSemantics = config.excludeHeaderSemantics;
            this.titleSpacing = config.titleSpacing;
            this.toolbarOpacity = config.toolbarOpacity;
            this.bottomOpacity = config.bottomOpacity;
            this.toolbarHeight = config.toolbarHeight;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          automaticallyImplyLeading?:boolean,
          title?:Widget,
          actions?:Array<Widget>,
          flexibleSpace?:Widget,
          bottom?:Widget,
          elevation?:number,
          shadowColor?:Color,
          shape?:ShapeBorder,
          backgroundColor?:Color,
          brightness?:Brightness,
          primary?:boolean,
          centerTitle?:boolean,
          excludeHeaderSemantics?:boolean,
          titleSpacing?:number,
          toolbarOpacity?:number,
          bottomOpacity?:number,
          toolbarHeight?:number
        }
     */
    static new(config) {
        return new AppBar(config);
    }
}
exports.AppBar = AppBar;
class Align extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        widthFactor?:number,
        heightFactor?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.widthFactor = config.widthFactor;
            this.heightFactor = config.heightFactor;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        widthFactor?:number,
        heightFactor?:number,
      }
     */
    static new(config) {
        return new Align(config);
    }
}
exports.Align = Align;
class AspectRatio extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          aspectRatio?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.aspectRatio = config.aspectRatio;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          aspectRatio?:number,
        }
     */
    static new(config) {
        return new AspectRatio(config);
    }
}
exports.AspectRatio = AspectRatio;
class AnnotatedRegion extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          value?:number,
          sized?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.value = config.value;
            this.sized = config.sized;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          value?:number,
          sized?:boolean,
        }
     */
    static new(config) {
        return new AnnotatedRegion(config);
    }
}
exports.AnnotatedRegion = AnnotatedRegion;
class AnimatedCrossFade extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          firstChild?:Widget,
          secondChild?:Widget,
          firstCurve?:Curve,
          secondCurve?:Curve,
          sizeCurve?:Curve,
          alignment?:Alignment,
          crossFadeState?:CrossFadeState,
          duration?:Duration,
          reverseDuration?:Duration,
          layoutBuilder?:any
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.firstChild = config.firstChild;
            this.secondChild = config.secondChild;
            this.firstCurve = config.firstCurve;
            this.secondCurve = config.secondCurve;
            this.sizeCurve = config.sizeCurve;
            this.alignment = config.alignment;
            this.crossFadeState = config.crossFadeState;
            this.duration = config.duration;
            this.reverseDuration = config.reverseDuration;
            this.layoutBuilder = config.layoutBuilder;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          firstChild?:Widget,
          secondChild?:Widget,
          firstCurve?:Curve,
          secondCurve?:Curve,
          sizeCurve?:Curve,
          alignment?:Alignment,
          crossFadeState?:CrossFadeState,
          duration?:Duration,
          reverseDuration?:Duration,
          layoutBuilder?:any
        }
     */
    static new(config) {
        return new AnimatedCrossFade(config);
    }
    ;
}
exports.AnimatedCrossFade = AnimatedCrossFade;
class AnimatedOpacity extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          opacity?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
          alwaysIncludeSemantics?:boolean
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.opacity = config.opacity;
            this.curve = config.curve;
            this.duration = config.duration;
            this.onEnd = config.onEnd;
            this.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          opacity?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
          alwaysIncludeSemantics?:boolean
        }
     */
    static new(config) {
        return new AnimatedOpacity(config);
    }
    ;
}
exports.AnimatedOpacity = AnimatedOpacity;
class AnimatedBuilder extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          animation?:Animation,
          builder?:any,
          child?:Widget,
          widget?:Widget
        }
     */
    constructor(config) {
        super();
        this.key = config.key;
        this.animation = config.animation;
        this.builder = config.builder;
        this.child = config.child;
        this.widget = config.widget;
    }
    /**
     * @param config config:
        {
          key?:Key,
          animation?:Animation,
          builder?:any,
          child?:Widget,
          widget?:Widget
        }
     */
    static new(config) {
        return new AnimatedBuilder(config);
    }
}
exports.AnimatedBuilder = AnimatedBuilder;
class AnimatedContainer extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          alignment?:Alignment,
          margin?:EdgeInsets,
          padding?:EdgeInsets,
          child?:Widget,
          color?:Color,
          decoration?:BoxDecoration,
          foregroundDecoration?:BoxDecoration,
          width?:number,
          height?:number,
          constraints?:BoxConstraints,
          transform?:Matrix4,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.margin = config.margin;
            this.padding = config.padding;
            this.child = config.child;
            this.color = config.color;
            this.decoration = config.decoration;
            this.foregroundDecoration = config.foregroundDecoration;
            this.width = config.width;
            this.height = config.height;
            this.constraints = config.constraints;
            this.transform = config.transform;
            this.curve = config.curve;
            this.duration = config.duration;
            this.onEnd = config.onEnd;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          alignment?:Alignment,
          margin?:EdgeInsets,
          padding?:EdgeInsets,
          child?:Widget,
          color?:Color,
          decoration?:BoxDecoration,
          foregroundDecoration?:BoxDecoration,
          width?:number,
          height?:number,
          constraints?:BoxConstraints,
          transform?:Matrix4,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
        }
     */
    static new(config) {
        return new AnimatedContainer(config);
    }
}
exports.AnimatedContainer = AnimatedContainer;
class AnimatedPhysicalModel extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          shape?:any,
          clipBehavior?:Clip,
          borderRadius?:BorderRadius,
          elevation?:number,
          color?:Color,
          animateColor?:boolean,
          shadowColor?:Color,
          animateShadowColor?:boolean,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.borderRadius = config.borderRadius;
            this.elevation = config.elevation;
            this.color = config.color;
            this.animateColor = this.animateColor;
            this.animateShadowColor = config.animateShadowColor;
            this.shadowColor = config.shadowColor;
            this.curve = config.curve;
            this.duration = config.duration;
            this.onEnd = config.onEnd;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          shape?:any,
          clipBehavior?:Clip,
          borderRadius?:BorderRadius,
          elevation?:number,
          color?:Color,
          animateColor?:boolean,
          shadowColor?:Color,
          animateShadowColor?:boolean,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback
        }
     */
    static new(config) {
        return new AnimatedPhysicalModel(config);
    }
}
exports.AnimatedPhysicalModel = AnimatedPhysicalModel;
class AnimatedPositioned extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
          width?:number,
          height?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.left = config.left;
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.width = config.width;
            this.curve = config.curve;
            this.duration = config.duration;
            this.onEnd = config.onEnd;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
          width?:number,
          height?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback,
        }
     */
    static new(config) {
        return new AnimatedPositioned(config);
    }
}
exports.AnimatedPositioned = AnimatedPositioned;
class AnimatedSize extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment,
          curve?:Curve,
          duration?:Duration,
          reverseDuration?:Duration,
          vsync?:any
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.alignment = config.alignment;
            this.curve = config.curve;
            this.duration = config.duration;
            this.reverseDuration = config.reverseDuration;
            this.vsync = config.vsync;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment,
          curve?:Curve,
          duration?:Duration,
          reverseDuration?:Duration,
          vsync?:any
        }
     */
    static new(config) {
        return new AnimatedSize(config);
    }
}
exports.AnimatedSize = AnimatedSize;
class AnimatedDefaultTextStyle extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          style?:TextStyle,
          textAlign?:TextAlign,
          softWrap?:boolean,
          overflow?:TextOverflow,
          maxLines?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.style = config.style;
            this.softWrap = config.softWrap;
            this.textAlign = config.textAlign;
            this.softWrap = config.softWrap;
            this.maxLines = config.maxLines;
            this.curve = config.curve;
            this.duration = config.duration;
            this.onEnd = config.onEnd;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          style?:TextStyle,
          textAlign?:TextAlign,
          softWrap?:boolean,
          overflow?:TextOverflow,
          maxLines?:number,
          curve?:Curve,
          duration?:Duration,
          onEnd?:VoidCallback
        }
     */
    static new(config) {
        return new AnimatedDefaultTextStyle(config);
    }
}
exports.AnimatedDefaultTextStyle = AnimatedDefaultTextStyle;
class BottomNavigationBarItem extends Widget {
    /**
     * @param config config:
        {
          icon:Widget,
          title?:Widget,
          activeIcon?:Widget,
          backgroundColor?:Color
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.icon = config.icon;
            this.title = config.title;
            this.activeIcon = config.activeIcon;
            this.backgroundColor = config.backgroundColor;
        }
    }
    /**
     * @param config config:
        {
          icon:Widget,
          title?:Widget,
          activeIcon?:Widget,
          backgroundColor?:Color
        }
     */
    static new(config) {
        return new BottomNavigationBarItem(config);
    }
}
exports.BottomNavigationBarItem = BottomNavigationBarItem;
class Banner extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          message:string,
          textDirection?:TextDirection,
          location:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.message = config.message;
            this.textDirection = config.textDirection;
            this.location = config.location;
            this.layoutDirection = config.layoutDirection;
            this.color = config.color;
            this.textStyle = config.textStyle;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          message:string,
          textDirection?:TextDirection,
          location:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
     */
    static new(config) {
        return new Banner(config);
    }
}
exports.Banner = Banner;
class Baseline extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.baseline = config.baseline;
            this.baselineType = config.baselineType;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    static new(config) {
        return new Baseline(config);
    }
}
exports.Baseline = Baseline;
class ButtonBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          children?:Array<Widget>,
          alignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          buttonTextTheme?:ButtonTextTheme,
          buttonHeight?:number,
          buttonMinWidth?:number,
          buttonPadding?:EdgeInsets,
          buttonAlignedDropdown?:boolean,
          layoutBehavior?:ButtonBarLayoutBehavior,
          overflowButtonSpacing?:number,
          overflowDirection?:VerticalDirection,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.mainAxisSize = config.mainAxisSize;
            this.buttonAlignedDropdown = config.buttonAlignedDropdown;
            this.buttonTextTheme = config.buttonTextTheme;
            this.buttonHeight = config.buttonHeight;
            this.buttonMinWidth = config.buttonMinWidth;
            this.buttonPadding = config.buttonPadding;
            this.layoutBehavior = config.layoutBehavior;
            this.overflowButtonSpacing = config.overflowButtonSpacing;
            this.overflowDirection = config.overflowDirection;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          children?:Array<Widget>,
          alignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          buttonTextTheme?:ButtonTextTheme,
          buttonHeight?:number,
          buttonMinWidth?:number,
          buttonPadding?:EdgeInsets,
          buttonAlignedDropdown?:boolean,
          layoutBehavior?:ButtonBarLayoutBehavior,
          overflowButtonSpacing?:number,
          overflowDirection?:VerticalDirection,
        }
     */
    static new(config) {
        return new ButtonBar(config);
    }
}
exports.ButtonBar = ButtonBar;
class BlockSemantics extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          blocking?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.blocking = config.blocking;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          blocking?:boolean,
        }
     */
    static new(config) {
        return new BlockSemantics(config);
    }
}
exports.BlockSemantics = BlockSemantics;
class BottomAppBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          elevation?:number,
          shape?:NotchedShape,
          clipBehavior?:Clip,
          notchMargin?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.notchMargin = config.notchMargin;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          elevation?:number,
          shape?:NotchedShape,
          clipBehavior?:Clip,
          notchMargin?:number,
        }
     */
    static new(config) {
        return new BottomAppBar(config);
    }
}
exports.BottomAppBar = BottomAppBar;
class BottomNavigationBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidValueChangedInt,
          currentIndex?:number,
          elevation?:number,
          type?:BottomNavigationBarType,
          fixedColor?:Color,
          backgroundColor?:Color,
          iconSize?:number,
          selectedItemColor?:Color,
          unselectedItemColor?:Color,
          selectedFontSize?:number,
          unselectedFontSize?:number,
          selectedLabelStyle?:TextStyle,
          unselectedLabelStyle?:TextStyle,
          showSelectedLabels?:boolean,
          showUnselectedLabels?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.items = config.items;
            this.onTap = config.onTap;
            this.currentIndex = config.currentIndex;
            this.elevation = config.elevation;
            this.type = config.type;
            this.fixedColor = config.fixedColor;
            this.backgroundColor = config.backgroundColor;
            this.iconSize = config.iconSize;
            this.selectedItemColor = config.selectedItemColor;
            this.unselectedItemColor = config.unselectedItemColor;
            this.selectedFontSize = config.selectedFontSize;
            this.unselectedFontSize = config.unselectedFontSize;
            this.selectedLabelStyle = config.selectedLabelStyle;
            this.unselectedLabelStyle = config.unselectedLabelStyle;
            this.showSelectedLabels = config.showSelectedLabels;
            this.showUnselectedLabels = config.showUnselectedLabels;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidValueChangedInt,
          currentIndex?:number,
          elevation?:number,
          type?:BottomNavigationBarType,
          fixedColor?:Color,
          backgroundColor?:Color,
          iconSize?:number,
          selectedItemColor?:Color,
          unselectedItemColor?:Color,
          selectedFontSize?:number,
          unselectedFontSize?:number,
          selectedLabelStyle?:TextStyle,
          unselectedLabelStyle?:TextStyle,
          showSelectedLabels?:boolean,
          showUnselectedLabels?:boolean,
        }
     */
    static new(config) {
        return new BottomNavigationBar(config);
    }
}
exports.BottomNavigationBar = BottomNavigationBar;
class BackButtonIcon extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
        }
     */
    static new(config) {
        return new BackButtonIcon(config);
    }
}
exports.BackButtonIcon = BackButtonIcon;
class BackButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:VoidCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:VoidCallback,
        }
     */
    static new(config) {
        return new BackButton(config);
    }
}
exports.BackButton = BackButton;
class Builder extends Widget {
    constructor(builder, key) {
        super();
        this.key = key;
        this.builder = builder;
        // 本地创建的，供flutter使用
        this.child = undefined;
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            this.child = this.builder(buildContext);
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    static new(builder, key) {
        return new Builder(builder, key);
    }
}
exports.Builder = Builder;
class CloseButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:VoidCallback,
          color?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.color = config.color;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:VoidCallback,
          color?:Color,
        }
     */
    static new(config) {
        return new CloseButton(config);
    }
}
exports.CloseButton = CloseButton;
class Container extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment,
          margin?:EdgeInsets,
          padding?:EdgeInsets,
          color?:Color,
          width?:number,
          height?:number,
          decoration?:BoxDecoration,
          foregroundDecoration?:BoxDecoration,
          constraints?:BoxConstraints,
          transform?:Matrix4,
          clipBehavior?:Clip,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.padding = config.padding;
            this.color = config.color;
            this.decoration = config.decoration;
            this.foregroundDecoration = config.foregroundDecoration;
            this.width = config.width;
            this.height = config.height;
            this.constraints = config.constraints;
            this.margin = config.margin;
            this.transform = config.transform;
            this.child = config.child;
            this.clipBehavior = config.clipBehavior;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment,
          margin?:EdgeInsets,
          padding?:EdgeInsets,
          color?:Color,
          width?:number,
          height?:number,
          decoration?:BoxDecoration,
          foregroundDecoration?:BoxDecoration,
          constraints?:BoxConstraints,
          transform?:Matrix4,
          clipBehavior?:Clip,
        }
     */
    static new(config) {
        return new Container(config);
    }
}
exports.Container = Container;
class Center extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          widthFactor?:number,
          heightFactor?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.widthFactor = config.widthFactor;
            this.heightFactor = config.heightFactor;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          widthFactor?:number,
          heightFactor?:number,
        }
     */
    static new(config) {
        return new Center(config);
    }
}
exports.Center = Center;
class ColoredBox extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color:Color,
        }
     */
    static new(config) {
        return new ColoredBox(config);
    }
}
exports.ColoredBox = ColoredBox;
class CircleAvatar extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          backgroundColor?:Color,
          foregroundColor?:Color,
          radius?:number,
          backgroundImage?:any,
          minRadius?:number,
          maxRadius?:number,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.backgroundColor = config.backgroundColor;
            this.backgroundImage = config.backgroundImage;
            this.foregroundColor = config.foregroundColor;
            this.radius = config.radius;
            this.minRadius = config.minRadius;
            this.maxRadius = config.maxRadius;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          backgroundColor?:Color,
          foregroundColor?:Color,
          radius?:number,
          backgroundImage?:any,
          minRadius?:number,
          maxRadius?:number,
          key?:Key,
        }
     */
    static new(config) {
        return new CircleAvatar(config);
    }
}
exports.CircleAvatar = CircleAvatar;
class Chip extends Widget {
    /**
     * @param config config:
        {
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          deleteIcon?:Widget,
          onDeleted?:VoidCallback,
          deleteIconColor?:Color,
          deleteButtonTooltipMessage?:string,
          clipBehavior?:Clip,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          key?:Key,
          shadowColor?:Color,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.avatar = config.avatar;
            this.label = config.label;
            this.labelStyle = config.labelStyle;
            this.labelPadding = config.labelPadding;
            this.deleteIcon = config.deleteIcon;
            this.onDeleted = config.onDeleted;
            this.deleteIconColor = config.deleteIconColor;
            this.deleteButtonTooltipMessage = config.deleteButtonTooltipMessage;
            this.clipBehavior = config.clipBehavior;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.autofocus = config.autofocus;
            this.shadowColor = config.shadowColor;
            this.visualDensity = config.visualDensity;
        }
    }
    /**
     * @param config config:
        {
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          deleteIcon?:Widget,
          onDeleted?:VoidCallback,
          deleteIconColor?:Color,
          deleteButtonTooltipMessage?:string,
          clipBehavior?:Clip,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          key?:Key,
          shadowColor?:Color,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new Chip(config);
    }
}
exports.Chip = Chip;
class CheckedModeBanner extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
        }
     */
    static new(config) {
        return new CheckedModeBanner(config);
    }
}
exports.CheckedModeBanner = CheckedModeBanner;
class CheckboxListTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          checkColor?:Color,
          title?:Widget,
          subtitle?:Widget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:Widget,
          selected?:boolean,
          autofocus?:boolean,
          controlAffinity?:ListTileControlAffinity,
          tristate?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.checkColor = config.checkColor;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.isThreeLine = config.isThreeLine;
            this.dense = config.dense;
            this.contentPadding = config.contentPadding;
            this.secondary = config.secondary;
            this.selected = config.selected;
            this.autofocus = config.autofocus;
            this.controlAffinity = config.controlAffinity;
            this.tristate = config.tristate;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          checkColor?:Color,
          title?:Widget,
          subtitle?:Widget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:Widget,
          selected?:boolean,
          autofocus?:boolean,
          controlAffinity?:ListTileControlAffinity,
          tristate?:boolean,
        }
     */
    static new(config) {
        return new CheckboxListTile(config);
    }
}
exports.CheckboxListTile = CheckboxListTile;
class Checkbox extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          checkColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          materialTapTargetSize?:MaterialTapTargetSize,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
          tristate?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.checkColor = config.checkColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.autofocus = config.autofocus;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.tristate = config.tristate;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          checkColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          materialTapTargetSize?:MaterialTapTargetSize,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
          tristate?:boolean,
        }
     */
    static new(config) {
        return new Checkbox(config);
    }
}
exports.Checkbox = Checkbox;
class CheckboxEx extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          tristate?:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          width?:number,
          checkColor?:Color,
          isCircle?:boolean,
          strokeWidth?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.tristate = config.tristate;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.width = config.width;
            this.checkColor = config.checkColor;
            this.isCircle = config.isCircle;
            this.strokeWidth = config.strokeWidth;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          tristate?:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          width?:number,
          checkColor?:Color,
          isCircle?:boolean,
          strokeWidth?:number,
        }
     */
    static new(config) {
        return new CheckboxEx(config);
    }
}
exports.CheckboxEx = CheckboxEx;
class ClipRRect extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.borderRadius = config.borderRadius;
            this.clipBehavior = config.clipBehavior;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    static new(config) {
        return new ClipRRect(config);
    }
}
exports.ClipRRect = ClipRRect;
class ConstrainedBox extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          constraints:BoxConstraints,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.constraints = config.constraints;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          constraints:BoxConstraints,
          key?:Key,
        }
     */
    static new(config) {
        return new ConstrainedBox(config);
    }
}
exports.ConstrainedBox = ConstrainedBox;
class CustomSingleChildLayout extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          delegate?:any,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          delegate?:any,
          key?:Key,
        }
     */
    static new(config) {
        return new CustomSingleChildLayout(config);
    }
}
exports.CustomSingleChildLayout = CustomSingleChildLayout;
class Column extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          mainAxisAlignment?:MainAxisAlignment,
          crossAxisAlignment?:CrossAxisAlignment,
          mainAxisSize?:MainAxisSize,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.mainAxisAlignment = config.mainAxisAlignment;
            this.mainAxisSize = config.mainAxisSize;
            this.crossAxisAlignment = config.crossAxisAlignment;
            this.textDirection = config.textDirection;
            this.verticalDirection = config.verticalDirection;
            this.textBaseline = config.textBaseline;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          mainAxisAlignment?:MainAxisAlignment,
          crossAxisAlignment?:CrossAxisAlignment,
          mainAxisSize?:MainAxisSize,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          key?:Key,
        }
     */
    static new(config) {
        return new Column(config);
    }
}
exports.Column = Column;
class CustomMultiChildLayout extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key
        }
     */
    static new(config) {
        return new CustomMultiChildLayout(config);
    }
}
exports.CustomMultiChildLayout = CustomMultiChildLayout;
class CustomScrollView extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          slivers?:Array<Widget>,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          center?:Key,
          anchor?:number,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.scrollDirection = config.scrollDirection;
            this.reverse = config.reverse;
            this.controller = config.controller;
            this.primary = config.primary;
            this.physics = config.physics;
            this.shrinkWrap = config.shrinkWrap;
            this.center = config.center;
            this.anchor = config.anchor;
            this.cacheExtent = config.cacheExtent;
            this.slivers = config.slivers;
            this.semanticChildCount = config.semanticChildCount;
            this.dragStartBehavior = config.dragStartBehavior;
            this.restorationId = config.restorationId;
            this.clipBehavior = config.clipBehavior;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          slivers?:Array<Widget>,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          center?:Key,
          anchor?:number,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    static new(config) {
        return new CustomScrollView(config);
    }
}
exports.CustomScrollView = CustomScrollView;
class Card extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          margin?:EdgeInsets,
          color?:Color,
          shadowColor?:Color,
          elevation?:number,
          shape?:any,
          clipBehavior?:Clip,
          semanticContainer?:boolean,
          borderOnForeground?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.margin = config.margin;
            this.clipBehavior = config.clipBehavior;
            this.child = config.child;
            this.semanticContainer = config.semanticContainer;
            this.borderOnForeground = config.borderOnForeground;
            this.shadowColor = config.shadowColor;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          margin?:EdgeInsets,
          color?:Color,
          shadowColor?:Color,
          elevation?:number,
          shape?:any,
          clipBehavior?:Clip,
          semanticContainer?:boolean,
          borderOnForeground?:boolean,
        }
     */
    static new(config) {
        return new Card(config);
    }
}
exports.Card = Card;
class Divider extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        height?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.height = config.height;
            this.thickness = config.thickness;
            this.indent = config.indent;
            this.endIndent = config.endIndent;
            this.color = config.color;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        height?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
     */
    static new(config) {
        return new Divider(config);
    }
}
exports.Divider = Divider;
class DrawerHeader extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child:Widget,
        decoration?:BoxDecoration,
        margin?:EdgeInsets,
        padding?:EdgeInsets,
        duration?:Duration,
        curve?:Curve,
      }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.duration = config.duration;
            this.decoration = config.decoration;
            this.curve = config.curve;
            this.margin = config.margin;
            this.padding = config.padding;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child:Widget,
        decoration?:BoxDecoration,
        margin?:EdgeInsets,
        padding?:EdgeInsets,
        duration?:Duration,
        curve?:Curve,
      }
    */
    static new(config) {
        return new DrawerHeader(config);
    }
}
exports.DrawerHeader = DrawerHeader;
class Drawer extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        elevation?:number,
        semanticLabel?:string,
      }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.elevation = config.elevation;
            this.semanticLabel = config.semanticLabel;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        elevation?:number,
        semanticLabel?:string,
      }
    */
    static new(config) {
        return new Drawer(config);
    }
}
exports.Drawer = Drawer;
class Directionality extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.textDirection = config.textDirection;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    static new(config) {
        return new Directionality(config);
    }
}
exports.Directionality = Directionality;
class DropdownMenuItem extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.child = config.child;
            this.onTap = config.onTap;
        }
    }
    /**
     * @param config config:
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    static new(config) {
        return new DropdownMenuItem(config);
    }
}
exports.DropdownMenuItem = DropdownMenuItem;
class DecoratedBox extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          decoration:BoxDecoration,
          position?:DecorationPosition,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.decoration = config.decoration;
            this.position = config.position;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          decoration:BoxDecoration,
          position?:DecorationPosition,
          key?:Key,
        }
     */
    static new(config) {
        return new DecoratedBox(config);
    }
}
exports.DecoratedBox = DecoratedBox;
class DropdownButton extends Widget {
    /**
     * @param config config:
        {
          items?:Array<DropdownMenuItem>,
          onChanged?:any,
          value?:any, hint?:Widget,
          disabledHint?:Widget,
          elevation?:number,
          style?:TextStyle,
          iconSize?:number,
          isDense?:boolean,
          isExpanded?:boolean,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.items = config.items;
            this.value = config.value;
            this.hint = config.hint;
            this.disabledHint = config.disabledHint;
            this.onChanged = config.onChanged;
            this.elevation = config.elevation;
            this.style = config.style;
            this.iconSize = config.iconSize;
            this.isDense = config.isDense;
            this.isExpanded = config.isExpanded;
        }
    }
    /**
     * @param config config:
        {
          items?:Array<DropdownMenuItem>,
          onChanged?:any,
          value?:any, hint?:Widget,
          disabledHint?:Widget,
          elevation?:number,
          style?:TextStyle,
          iconSize?:number,
          isDense?:boolean,
          isExpanded?:boolean,
          key?:Key,
        }
     */
    static new(config) {
        return new DropdownButton(config);
    }
}
exports.DropdownButton = DropdownButton;
class DefaultTabController extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          length:number,
          initialIndex?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.length = config.length;
            this.initialIndex = config.initialIndex;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          length:number,
          initialIndex?:number,
        }
     */
    static new(config) {
        return new DefaultTabController(config);
    }
}
exports.DefaultTabController = DefaultTabController;
class DecorationImage extends Widget {
    /**
     * @param config config:
        {
          image?:ImageProvider,
          alignment?:Alignment,
          colorFilter?:ColorFilter,
          fit?:BoxFit,
          centerSlice?:Rect,
          repeat?:ImageRepeat,
          matchTextDirection?:boolean,
          scale?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.image = config.image;
            this.colorFilter = config.colorFilter;
            this.fit = config.fit;
            this.alignment = config.alignment;
            this.centerSlice = config.centerSlice;
            this.repeat = config.repeat;
            this.matchTextDirection = config.matchTextDirection;
            this.scale = config.scale;
        }
    }
    /**
     * @param config config:
        {
          image?:ImageProvider,
          alignment?:Alignment,
          colorFilter?:ColorFilter,
          fit?:BoxFit,
          centerSlice?:Rect,
          repeat?:ImageRepeat,
          matchTextDirection?:boolean,
          scale?:number,
        }
     */
    static new(config) {
        return new DecorationImage(config);
    }
}
exports.DecorationImage = DecorationImage;
class DefaultTextStyle extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          style?:TextStyle,
          textAlign?:TextAlign,
          softWrap?:boolean,
          overflow?:TextOverflow,
          maxLines?:number,
          textWidthBasis?:TextWidthBasis,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.style = config.style;
            this.textAlign = config.textAlign;
            this.softWrap = config.softWrap;
            this.overflow = config.overflow;
            this.maxLines = config.maxLines;
            this.textWidthBasis = config.textWidthBasis;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          style?:TextStyle,
          textAlign?:TextAlign,
          softWrap?:boolean,
          overflow?:TextOverflow,
          maxLines?:number,
          textWidthBasis?:TextWidthBasis,
          key?:Key
        }
     */
    static new(config) {
        return new DefaultTextStyle(config);
    }
}
exports.DefaultTextStyle = DefaultTextStyle;
class DecoratedBoxTransition extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          decoration?:any,
          position?:DecorationPosition,
          child?:Widget
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.decoration = config.decoration;
            this.position = config.position;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          decoration?:any,
          position?:DecorationPosition,
          child?:Widget
        }
     */
    static new(config) {
        return new DecoratedBoxTransition(config);
    }
}
exports.DecoratedBoxTransition = DecoratedBoxTransition;
class ExcludeSemantics extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          excluding?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.excluding = config.excluding;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          excluding?:boolean,
        }
     */
    static new(config) {
        return new ExcludeSemantics();
    }
}
exports.ExcludeSemantics = ExcludeSemantics;
class Expanded extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          flex?:number,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.flex = config.flex;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child:Widget,
          flex?:number,
          key?:Key,
        }
     */
    static new(config) {
        return new Expanded(config);
    }
}
exports.Expanded = Expanded;
class ExpandIcon extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          isExpanded?:boolean,
          size?:number,
          onPressed:VoidCallbackBoolean,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          expandedColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.isExpanded = config.isExpanded;
            this.size = config.size;
            this.onPressed = config.onPressed;
            this.padding = config.padding;
            this.color = config.color;
            this.disabledColor = config.disabledColor;
            this.expandedColor = config.expandedColor;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          isExpanded?:boolean,
          size?:number,
          onPressed:VoidCallbackBoolean,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          expandedColor?:Color,
        }
     */
    static new(config) {
        return new ExpandIcon(config);
    }
}
exports.ExpandIcon = ExpandIcon;
class ExpansionTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidCallbackBoolean,
          children?:Array<Widget>,
          trailing?:Widget,
          initiallyExpanded?:boolean,
          maintainState?:boolean,
          tilePadding?:EdgeInsets,
          expandedCrossAxisAlignment?:CrossAxisAlignment,
          expandedAlignment?:Alignment,
          childrenPadding?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.backgroundColor = config.backgroundColor;
            this.onExpansionChanged = config.onExpansionChanged;
            this.children = config.children;
            this.trailing = config.trailing;
            this.initiallyExpanded = config.initiallyExpanded;
            this.maintainState = config.maintainState;
            this.tilePadding = config.tilePadding;
            this.expandedCrossAxisAlignment = config.expandedCrossAxisAlignment;
            this.expandedAlignment = config.expandedAlignment;
            this.childrenPadding = config.childrenPadding;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidCallbackBoolean,
          children?:Array<Widget>,
          trailing?:Widget,
          initiallyExpanded?:boolean,
          maintainState?:boolean,
          tilePadding?:EdgeInsets,
          expandedCrossAxisAlignment?:CrossAxisAlignment,
          expandedAlignment?:Alignment,
          childrenPadding?:EdgeInsets,
        }
     */
    static new(config) {
        return new ExpansionTile(config);
    }
}
exports.ExpansionTile = ExpansionTile;
class Flexible extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          flex?:number,
          fit?:FlexFit,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.fit = config.fit;
            this.flex = config.flex;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          flex?:number,
          fit?:FlexFit,
        }
     */
    static new(config) {
        return new Flexible(config);
    }
}
exports.Flexible = Flexible;
class FittedBox extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        fit?:BoxFit,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.fit = config.fit;
            this.alignment = config.alignment;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        fit?:BoxFit,
      }
     */
    static new(config) {
        return new FittedBox(config);
    }
}
exports.FittedBox = FittedBox;
class FractionallySizedBox extends Widget {
    /**
      * @param config config:
         {
           child?:Widget,
           alignment?:Alignment,
           widthFactor?:number,
           heightFactor?:number,
           key?:Key
         }
      */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.widthFactor = config.widthFactor;
            this.heightFactor = config.heightFactor;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          alignment?:Alignment,
          widthFactor?:number,
          heightFactor?:number,
          key?:Key
        }
     */
    static new(config) {
        return new FractionallySizedBox(config);
    }
}
exports.FractionallySizedBox = FractionallySizedBox;
class Flex extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          direction:Axis,
          mainAxisAlignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          crossAxisAlignment?:CrossAxisAlignment,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          clipBehavior?:Clip,
          children?:Array<Widget>,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.direction = config.direction;
            this.mainAxisAlignment = config.mainAxisAlignment;
            this.mainAxisSize = config.mainAxisSize;
            this.crossAxisAlignment = config.crossAxisAlignment;
            this.textDirection = config.textDirection;
            this.textBaseline = config.textBaseline;
            this.clipBehavior = config.clipBehavior;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          direction:Axis,
          mainAxisAlignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          crossAxisAlignment?:CrossAxisAlignment,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          clipBehavior?:Clip,
          children?:Array<Widget>,
        }
     */
    static new(config) {
        return new Flex(config);
    }
}
exports.Flex = Flex;
class Flow extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key,
        }
     */
    static new(config) {
        return new Flow(config);
    }
}
exports.Flow = Flow;
class FlatButton extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets;,
          onHighlightChanged?:VoidCallbackBoolean,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          key?:Key,
  
          onLongPress?: VoidCallback,
          focusColor?: Color,
          hoverColor?: Color,
          visualDensity?: VisualDensity,
          autofocus?: boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.onHighlightChanged = config.onHighlightChanged;
            this.textTheme = config.textTheme;
            this.textColor = config.textColor;
            this.disabledTextColor = config.disabledTextColor;
            this.color = config.color;
            this.disabledColor = config.disabledColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.colorBrightness = config.colorBrightness;
            this.padding = config.padding;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.onLongPress = config.onLongPress;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.visualDensity = config.visualDensity;
            this.autofocus = config.autofocus;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets;,
          onHighlightChanged?:VoidCallbackBoolean,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          key?:Key,
  
          onLongPress?: VoidCallback,
          focusColor?: Color,
          hoverColor?: Color,
          visualDensity?: VisualDensity,
          autofocus?: boolean,
        }
     */
    static new(config) {
        return new FlatButton(config);
    }
    /**
     * @param config config:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets,
          onHighlightChanged?:VoidCallbackBoolean,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          key?:Key,
  
          onLongPress?: VoidCallback,
          focusColor?: Color,
          hoverColor?: Color,
          autofocus?: boolean,
  
          icon?:Widget,
          label?:Widget,
        }
     */
    static icon(config) {
        let v = new FlatButton();
        v.constructorName = "icon";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.onHighlightChanged = config.onHighlightChanged;
            v.textTheme = config.textTheme;
            v.textColor = config.textColor;
            v.disabledTextColor = config.disabledTextColor;
            v.color = config.color;
            v.disabledColor = config.disabledColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorBrightness = config.colorBrightness;
            v.padding = config.padding;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.onLongPress = config.onLongPress;
            v.focusColor = config.focusColor;
            v.hoverColor = config.hoverColor;
            v.autofocus = config.autofocus;
            v.icon = config.icon;
            v.label = config.label;
        }
        return v;
    }
}
exports.FlatButton = FlatButton;
class FloatingActionButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          tooltip?:string,
          foregroundColor?:Color,
          backgroundColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          splashColor?:Color,
          elevation?:number,
          focusElevation?:number,
          hoverElevation?:number,
          highlightElevation?:number,
          disabledElevation?:number,
          onPressed:VoidCallback,
          mini?:boolean,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          autofocus?:boolean,
          materialTapTargetSize?:MaterialTapTargetSize,
          isExtended?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.tooltip = config.tooltip;
            this.foregroundColor = config.foregroundColor;
            this.backgroundColor = config.backgroundColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.splashColor = config.splashColor;
            this.elevation = config.elevation;
            this.focusElevation = config.focusElevation;
            this.hoverElevation = config.hoverElevation;
            this.highlightElevation = config.highlightElevation;
            this.disabledElevation = config.disabledElevation;
            this.onPressed = config.onPressed;
            this.mini = config.mini;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.isExtended = config.isExtended;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          tooltip?:string,
          foregroundColor?:Color,
          backgroundColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          splashColor?:Color,
          elevation?:number,
          focusElevation?:number,
          hoverElevation?:number,
          highlightElevation?:number,
          disabledElevation?:number,
          onPressed:VoidCallback,
          mini?:boolean,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          autofocus?:boolean,
          materialTapTargetSize?:MaterialTapTargetSize,
          isExtended?:boolean,
        }
     */
    static new(config) {
        return new FloatingActionButton(config);
    }
}
exports.FloatingActionButton = FloatingActionButton;
class FlexibleSpaceBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          background?:Widget,
          centerTitle?:boolean,
          titlePadding?:EdgeInsets,
          collapseMode?:CollapseMode,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.title = config.title;
            this.background = config.background;
            this.centerTitle = config.centerTitle;
            this.titlePadding = config.titlePadding;
            this.collapseMode = config.collapseMode;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          background?:Widget,
          centerTitle?:boolean,
          titlePadding?:EdgeInsets,
          collapseMode?:CollapseMode,
        }
     */
    static new(config) {
        return new FlexibleSpaceBar(config);
    }
}
exports.FlexibleSpaceBar = FlexibleSpaceBar;
class FlexibleSpaceBarSettings extends Widget {
    /**
    * @param config config:
       {
         key?:Key,
         child:Widget,
         toolbarOpacity:number,
         minExtent:number,
         maxExtent:number,
         currentExtent:number,
       }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.toolbarOpacity = config.toolbarOpacity;
            this.minExtent = config.minExtent;
            this.maxExtent = config.maxExtent;
            this.currentExtent = config.currentExtent;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          toolbarOpacity:number,
          minExtent:number,
          maxExtent:number,
          currentExtent:number,
        }
     */
    static new(config) {
        return new FlexibleSpaceBarSettings(config);
    }
}
exports.FlexibleSpaceBarSettings = FlexibleSpaceBarSettings;
class FlutterLogo extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          size?:number,
          textColor?:Color,
          style?:FlutterLogoStyle,
          duration?:Duration,
          curve?:Curve,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.size = config.size;
            this.textColor = config.textColor;
            this.duration = config.duration;
            this.style = config.style;
            this.curve = config.curve;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          size?:number,
          textColor?:Color,
          style?:FlutterLogoStyle,
          duration?:Duration,
          curve?:Curve,
        }
     */
    static new(config) {
        return new FlutterLogo(config);
    }
}
exports.FlutterLogo = FlutterLogo;
class FractionalTranslation extends Widget {
    /**
     * @param config config:
        {
          translation:Offset,
  
          key?:Key,
          transformHitTests?:boolean,
          child?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.transformHitTests = config.transformHitTests;
            this.translation = config.translation;
        }
    }
    /**
     * @param config config:
        {
          translation:Offset,
  
          key?:Key,
          transformHitTests?:boolean,
          child?:Widget,
        }
     */
    static new(config) {
        return new FractionalTranslation(config);
    }
}
exports.FractionalTranslation = FractionalTranslation;
class GestureDetector extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        onTap?:VoidCallback,
        onTapDown?:VoidTapDown,
        onTapUp?:VoidTapUp,
        onTapCancel?:VoidCallback,
        onDoubleTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onLongPressUp?:VoidCallback,
        onVerticalDragDown?:VoidDragDown,
        onVerticalDragStart?:VoidDragStart,
        onVerticalDragUpdate?:VoidDragUpdate,
        onVerticalDragEnd?:VoidDragEnd,
        onVerticalDragCancel?:VoidCallback,
        onHorizontalDragDown?:VoidDragDown,
        onHorizontalDragStart?:VoidDragStart,
        onHorizontalDragUpdate?:VoidDragUpdate,
        onHorizontalDragEnd?:VoidDragEnd,
        onHorizontalDragCancel?:VoidCallback,
        onPanDown?:VoidDragDown,
        onPanStart?:VoidDragStart,
        onPanUpdate?:VoidDragUpdate,
        onPanEnd?:VoidDragEnd,
        onPanCancel?:VoidCallback,
        onScaleStart?:VoidScaleStart,
        onScaleUpdate?:VoidScaleUpdate,
        onScaleEnd?:VoidScaleEnd,
        behavior?:HitTestBehavior,
        excludeFromSemantics?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.onTapDown = config.onTapDown;
            this.onTapUp = config.onTapUp;
            this.onTap = config.onTap;
            this.onTapCancel = config.onTapCancel;
            this.onDoubleTap = config.onDoubleTap;
            this.onLongPress = config.onLongPress;
            this.onLongPressUp = config.onLongPressUp;
            this.onVerticalDragDown = config.onVerticalDragDown;
            this.onVerticalDragStart = config.onVerticalDragStart;
            this.onVerticalDragUpdate = config.onVerticalDragUpdate;
            this.onVerticalDragEnd = config.onVerticalDragEnd;
            this.onVerticalDragCancel = config.onVerticalDragCancel;
            this.onHorizontalDragDown = config.onHorizontalDragDown;
            this.onHorizontalDragStart = config.onHorizontalDragStart;
            this.onHorizontalDragUpdate = config.onHorizontalDragUpdate;
            this.onHorizontalDragEnd = config.onHorizontalDragEnd;
            this.onHorizontalDragCancel = config.onHorizontalDragCancel;
            this.onPanDown = config.onPanDown;
            this.onPanStart = config.onPanStart;
            this.onPanUpdate = config.onPanUpdate;
            this.onPanEnd = config.onPanEnd;
            this.onPanCancel = config.onPanCancel;
            this.onScaleStart = config.onScaleStart;
            this.onScaleUpdate = config.onScaleUpdate;
            this.onScaleEnd = config.onScaleEnd;
            this.behavior = config.behavior;
            this.excludeFromSemantics = config.excludeFromSemantics;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        onTap?:VoidCallback,
        onTapDown?:VoidTapDown,
        onTapUp?:VoidTapUp,
        onTapCancel?:VoidCallback,
        onDoubleTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onLongPressUp?:VoidCallback,
        onVerticalDragDown?:VoidDragDown,
        onVerticalDragStart?:VoidDragStart,
        onVerticalDragUpdate?:VoidDragUpdate,
        onVerticalDragEnd?:VoidDragEnd,
        onVerticalDragCancel?:VoidCallback,
        onHorizontalDragDown?:VoidDragDown,
        onHorizontalDragStart?:VoidDragStart,
        onHorizontalDragUpdate?:VoidDragUpdate,
        onHorizontalDragEnd?:VoidDragEnd,
        onHorizontalDragCancel?:VoidCallback,
        onPanDown?:VoidDragDown,
        onPanStart?:VoidDragStart,
        onPanUpdate?:VoidDragUpdate,
        onPanEnd?:VoidDragEnd,
        onPanCancel?:VoidCallback,
        onScaleStart?:VoidScaleStart,
        onScaleUpdate?:VoidScaleUpdate,
        onScaleEnd?:VoidScaleEnd,
        behavior?:HitTestBehavior,
        excludeFromSemantics?:boolean,
      }
     */
    static new(config) {
        return new GestureDetector(config);
    }
}
exports.GestureDetector = GestureDetector;
class GridTileBar extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        backgroundColor?:Color,
        leading?:Widget,
        title?:Widget,
        subtitle?:Widget,
        trailing?:Widget,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.backgroundColor = config.backgroundColor;
            this.leading = config.leading;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.trailing = config.trailing;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        backgroundColor?:Color,
        leading?:Widget,
        title?:Widget,
        subtitle?:Widget,
        trailing?:Widget,
      }
     */
    static new(config) {
        return new GridTileBar(config);
    }
}
exports.GridTileBar = GridTileBar;
class GridTile extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.header = config.header;
            this.footer = config.footer;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget,
      }
     */
    static new(config) {
        return new GridTile(config);
    }
}
exports.GridTile = GridTile;
class GridPaper extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          divisions?:number,
          interval?:number,
          subdivisions?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.divisions = config.divisions;
            this.subdivisions = config.subdivisions;
            this.interval = config.interval;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          divisions?:number,
          interval?:number,
          subdivisions?:number,
        }
     */
    static new(config) {
        return new GridPaper(config);
    }
}
exports.GridPaper = GridPaper;
class InputDecorator extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          decoration:InputDecoration,
          baseStyle?:TextStyle,
          textAlign?:TextAlign,
          textAlignVertical?:TextAlignVertical,
          isFocused?:boolean,
          isHovering?:boolean,
          expands?:boolean,
          isEmpty?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.decoration = config.decoration;
            this.baseStyle = config.baseStyle;
            this.textAlign = config.textAlign;
            this.textAlignVertical = config.textAlignVertical;
            this.isFocused = config.isFocused;
            this.isEmpty = config.isEmpty;
            this.isHovering = config.isHovering;
            this.expands = config.expands;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          decoration:InputDecoration,
          baseStyle?:TextStyle,
          textAlign?:TextAlign,
          textAlignVertical?:TextAlignVertical,
          isFocused?:boolean,
          isHovering?:boolean,
          expands?:boolean,
          isEmpty?:boolean,
        }
     */
    static new(config) {
        return new InputDecorator(config);
    }
}
exports.InputDecorator = InputDecorator;
class IconSpan extends Widget {
    /**
     * @param config config:
      {
        icon:IconData,
        color?:Color,
        fontSize?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.icon = config.icon;
            this.color = config.color;
            this.fontSize = config.fontSize;
        }
    }
    /**
     * @param config config:
      {
        cicon:IconData,
        color?:Color,
        fontSize?:number,
      }
     */
    static new(config) {
        return new IconSpan(config);
    }
}
exports.IconSpan = IconSpan;
class IndexedSemantics extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          index?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.index = config.index;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          index?:number,
        }
     */
    static new(config) {
        return new IndexedSemantics(config);
    }
}
exports.IndexedSemantics = IndexedSemantics;
class IntrinsicHeight extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
        }
     */
    static new(config) {
        return new IntrinsicHeight(config);
    }
}
exports.IntrinsicHeight = IntrinsicHeight;
class IntrinsicWidth extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          stepWidth?:number,
          stepHeight?:number,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.stepWidth = config.stepWidth;
            this.stepHeight = config.stepHeight;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          stepWidth?:number,
          stepHeight?:number,
          key?:Key
        }
     */
    static new(config) {
        return new IntrinsicWidth(config);
    }
}
exports.IntrinsicWidth = IntrinsicWidth;
class IndexedStack extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          index?:number,
          alignment?:AlignmentDirectional,
          textDirection?:TextDirection,
          sizing?:StackFit,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.textDirection = config.textDirection;
            this.sizing = config.sizing;
            this.index = config.index;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          index?:number,
          alignment?:AlignmentDirectional,
          textDirection?:TextDirection,
          sizing?:StackFit,
          key?:Key,
        }
     */
    static new(config) {
        return new IndexedStack(config);
    }
}
exports.IndexedStack = IndexedStack;
class IgnorePointer extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          ignoring?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.ignoring = config.ignoring;
            this.ignoringSemantics = config.ignoringSemantics;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          ignoring?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(config) {
        return new IgnorePointer(config);
    }
}
exports.IgnorePointer = IgnorePointer;
class IconButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          icon:Widget,
          onPressed:VoidCallback,
          iconSize?:number,
          padding?:EdgeInsets,
          alignment?:Alignment,
          visualDensity?:VisualDensity,
          splashRadius?:number,
          color?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          disabledColor?:Color,
          autofocus?:boolean,
          tooltip?:string,
          enableFeedback?:boolean,
          constraints?:BoxConstraints,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.icon = config.icon;
            this.iconSize = config.iconSize;
            this.padding = config.padding;
            this.alignment = config.alignment;
            this.visualDensity = config.visualDensity;
            this.color = config.color;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.disabledColor = config.disabledColor;
            this.autofocus = config.autofocus;
            this.onPressed = config.onPressed;
            this.tooltip = config.tooltip;
            this.enableFeedback = config.enableFeedback;
            this.visualDensity = config.visualDensity;
            this.constraints = config.constraints;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          icon:Widget,
          onPressed:VoidCallback,
          iconSize?:number,
          padding?:EdgeInsets,
          alignment?:Alignment,
          visualDensity?:VisualDensity,
          splashRadius?:number,
          color?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          disabledColor?:Color,
          autofocus?:boolean,
          tooltip?:string,
          enableFeedback?:boolean,
          constraints?:BoxConstraints,
        }
     */
    static new(config) {
        return new IconButton(config);
    }
}
exports.IconButton = IconButton;
class Icon extends Widget {
    /**
     * @param icon icon:IconData
     * @param config config:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    constructor(icon, config) {
        super();
        this.icon = icon;
        if (config != null && config != undefined) {
            this.key = config.key;
            this.size = config.size;
            this.color = config.color;
            this.semanticLabel = config.semanticLabel;
            this.textDirection = config.textDirection;
        }
    }
    /**
     * @param icon icon:IconData
     * @param config config:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    static new(icon, config) {
        return new Icon(icon, config);
    }
}
exports.Icon = Icon;
class ImageIcon extends Widget {
    /**
     * @param image image:ImageProvider
     * @param config config:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    constructor(image, config) {
        super();
        this.image = image;
        if (config != null && config != undefined) {
            this.key = config.key;
            this.size = config.size;
            this.color = config.color;
            this.semanticLabel = config.semanticLabel;
        }
    }
    /**
     * @param image image:ImageProvider
     * @param config config:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    static new(image, config) {
        return new ImageIcon(image, config);
    }
}
exports.ImageIcon = ImageIcon;
class InkResponse extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:VoidCallback,
          onTapDown?:VoidTapDown,
          onTapCancel?:VoidCallback,
          onDoubleTap?:VoidCallback,
          onLongPress?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          onHover?:VoidCallbackBoolean,
          containedInkWell?:boolean,
          highlightShape?:BoxShape,
          radius?:number,
          borderRadius?:BorderRadius,
          customBorder?:ShapeBorder,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          overlayColor?:Color,
          splashColor?:Color,
          enableFeedback?:boolean,
          excludeFromSemantics?:boolean,
          canRequestFocus ?:boolean,
          onFocusChange?:VoidCallbackBoolean,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.onTap = config.onTap;
            this.onTapDown = config.onTapDown;
            this.onTapCancel = config.onTapCancel;
            this.onDoubleTap = config.onDoubleTap;
            this.onLongPress = config.onLongPress;
            this.onHighlightChanged = config.onHighlightChanged;
            this.onHover = config.onHover;
            this.containedInkWell = config.containedInkWell;
            this.highlightShape = config.highlightShape;
            this.radius = config.radius;
            this.borderRadius = config.borderRadius;
            this.customBorder = config.customBorder;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.highlightColor = config.highlightColor;
            this.overlayColor = config.overlayColor;
            this.splashColor = config.splashColor;
            this.enableFeedback = config.enableFeedback;
            this.excludeFromSemantics = config.excludeFromSemantics;
            this.canRequestFocus = config.canRequestFocus;
            this.onFocusChange = config.onFocusChange;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:VoidCallback,
          onTapDown?:VoidTapDown,
          onTapCancel?:VoidCallback,
          onDoubleTap?:VoidCallback,
          onLongPress?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          onHover?:VoidCallbackBoolean,
          containedInkWell?:boolean,
          highlightShape?:BoxShape,
          radius?:number,
          borderRadius?:BorderRadius,
          customBorder?:ShapeBorder,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          overlayColor?:Color,
          splashColor?:Color,
          enableFeedback?:boolean,
          excludeFromSemantics?:boolean,
          canRequestFocus ?:boolean,
          onFocusChange?:VoidCallbackBoolean,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new InkResponse(config);
    }
}
exports.InkResponse = InkResponse;
class InkWell extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:VoidCallback,
          onTapDown?:VoidTapDown,
          onTapCancel?:VoidCallback,
          onDoubleTap?:VoidCallback,
          onLongPress?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          onHover?:VoidCallbackBoolean,
          radius?:number,
          borderRadius?:BorderRadius,
          customBorder?:ShapeBorder,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          overlayColor?:Color,
          splashColor?:Color,
          enableFeedback?:boolean,
          excludeFromSemantics?:boolean,
          canRequestFocus ?:boolean,
          onFocusChange?:VoidCallbackBoolean,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.onTap = config.onTap;
            this.onTapDown = config.onTapDown;
            this.onTapCancel = config.onTapCancel;
            this.onDoubleTap = config.onDoubleTap;
            this.onLongPress = config.onLongPress;
            this.onHighlightChanged = config.onHighlightChanged;
            this.onHover = config.onHover;
            this.radius = config.radius;
            this.borderRadius = config.borderRadius;
            this.customBorder = config.customBorder;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.highlightColor = config.highlightColor;
            this.overlayColor = config.overlayColor;
            this.splashColor = config.splashColor;
            this.enableFeedback = config.enableFeedback;
            this.excludeFromSemantics = config.excludeFromSemantics;
            this.canRequestFocus = config.canRequestFocus;
            this.onFocusChange = config.onFocusChange;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:VoidCallback,
          onTapDown?:VoidTapDown,
          onTapCancel?:VoidCallback,
          onDoubleTap?:VoidCallback,
          onLongPress?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          onHover?:VoidCallbackBoolean,
          radius?:number,
          borderRadius?:BorderRadius,
          customBorder?:ShapeBorder,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          overlayColor?:Color,
          splashColor?:Color,
          enableFeedback?:boolean,
          excludeFromSemantics?:boolean,
          canRequestFocus ?:boolean,
          onFocusChange?:VoidCallbackBoolean,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new InkWell(config);
    }
}
exports.InkWell = InkWell;
class Image extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          image:ImageProvider,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.image = config.image;
            this.semanticLabel = config.semanticLabel;
            this.excludeFromSemantics = config.excludeFromSemantics;
            this.width = config.width;
            this.height = config.height;
            this.color = config.color;
            this.colorBlendMode = config.colorBlendMode;
            this.fit = config.fit;
            this.alignment = config.alignment;
            this.repeat = config.repeat;
            this.centerSlice = config.centerSlice;
            this.matchTextDirection = config.matchTextDirection;
            this.gaplessPlayback = config.gaplessPlayback;
            this.isAntiAlias = config.isAntiAlias;
            this.filterQuality = config.filterQuality;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          image:ImageProvider,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
        }
     */
    static new(config) {
        return new Image(config);
    }
    /**
     * @param config config:
        {
          key?:Key,
          scale?:number,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
          headers?:Map<string,string>,
          cacheWidth?:number,
          cacheHeight?:number,
        }
     */
    static network(src, config) {
        var v = new Image();
        v.constructorName = "network";
        v.src = src;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.isAntiAlias = config.isAntiAlias;
            v.filterQuality = config.filterQuality;
            v.headers = config.headers;
            v.cacheHeight = config.cacheHeight;
            v.cacheWidth = config.cacheWidth;
        }
        return v;
    }
    /**
     * @param config config:
        {
          key?:Key,
          scale?:number,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
          cacheWidth?:number,
          cacheHeight?:number,
        }
     */
    static file(file, config) {
        var v = new Image();
        v.constructorName = "file";
        v.file = file;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.isAntiAlias = config.isAntiAlias;
            v.filterQuality = config.filterQuality;
            v.cacheHeight = config.cacheHeight;
            v.cacheWidth = config.cacheWidth;
        }
        return v;
    }
    /**
     * @param config config:
        {
          key?:Key,
          bundle?:AssetBundle,
          package?:string,
          scale?:number,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
          headers?:Map<string,string>,
          cacheWidth?:number,
          cacheHeight?:number,
        }
     */
    static asset(imageName, config) {
        var v = new Image();
        v.constructorName = "asset";
        v.imageName = imageName;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.bundle = config.bundle;
            v.package = config.package;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.isAntiAlias = config.isAntiAlias;
            v.filterQuality = config.filterQuality;
            v.headers = config.headers;
            v.cacheHeight = config.cacheHeight;
            v.cacheWidth = config.cacheWidth;
        }
        return v;
    }
    /**
     * @param config config:
        {
          key?:Key,
          scale?:number,
          semanticLabel?:string,
          excludeFromSemantics?:boolean,
          width?:number,
          height?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          gaplessPlayback?:boolean,
          isAntiAlias?:boolean,
          filterQuality?:FilterQuality,
          headers?:Map<string,string>,
          cacheWidth?:number,
          cacheHeight?:number,
        }
     */
    static memory(bytes, config) {
        var v = new Image();
        v.constructorName = "memory";
        v.bytes = bytes;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.isAntiAlias = config.isAntiAlias;
            v.filterQuality = config.filterQuality;
            v.headers = config.headers;
            v.cacheHeight = config.cacheHeight;
            v.cacheWidth = config.cacheWidth;
        }
        return v;
    }
}
exports.Image = Image;
class KeyedSubtree extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child:Widget,
          key?:Key,
        }
     */
    static new(config) {
        return new KeyedSubtree(config);
    }
}
exports.KeyedSubtree = KeyedSubtree;
class LabelTitle extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          label?:string,
          labelStyle?:TextStyle,
          title?:string,
          titleStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.label = config.label;
            this.labelStyle = config.labelStyle;
            this.title = config.title;
            this.titleStyle = config.titleStyle;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          label?:string,
          labelStyle?:TextStyle,
          title?:string,
          titleStyle?:TextStyle,
        }
     */
    static new(config) {
        return new LabelTitle(config);
    }
}
exports.LabelTitle = LabelTitle;
class LimitedBox extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          maxWidth?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.maxWidth = config.maxWidth;
            this.maxHeight = config.maxHeight;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          maxWidth?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    static new(config) {
        return new LimitedBox(config);
    }
}
exports.LimitedBox = LimitedBox;
class ListBody extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          reverse?:boolean,
          mainAxis?:Axis,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.mainAxis = config.mainAxis;
            this.reverse = config.reverse;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          reverse?:boolean,
          mainAxis?:Axis,
          key?:Key
        }
     */
    static new(config) {
        return new ListBody(config);
    }
}
exports.ListBody = ListBody;
class ListTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          trailing?:Widget,
          onTap?:VoidCallback,
          onLongPress?:VoidCallback,
          selected?:boolean,
          isThreeLine?:boolean,
          dense?:boolean,
          visualDensity?:VisualDensity,
          shape?:ShapeBorder,
          contentPadding?:EdgeInsets,
          enabled?:boolean,
          focusColor?:Color,
          hoverColor?:Color,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.trailing = config.trailing;
            this.onTap = config.onTap;
            this.onLongPress = config.onLongPress;
            this.isThreeLine = config.isThreeLine;
            this.dense = config.dense;
            this.visualDensity = config.visualDensity;
            this.shape = config.shape;
            this.contentPadding = config.contentPadding;
            this.enabled = config.enabled;
            this.selected = config.selected;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          trailing?:Widget,
          onTap?:VoidCallback,
          onLongPress?:VoidCallback,
          selected?:boolean,
          isThreeLine?:boolean,
          dense?:boolean,
          visualDensity?:VisualDensity,
          shape?:ShapeBorder,
          contentPadding?:EdgeInsets,
          enabled?:boolean,
          focusColor?:Color,
          hoverColor?:Color,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new ListTile(config);
    }
}
exports.ListTile = ListTile;
class ListView extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          padding?:EdgeInsets,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          itemExtent?:number,
          addAutomaticKeepAlives?:boolean,
          addRepaintBoundaries?:boolean,
          addSemanticIndexes?:boolean,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          key?:Key,
          keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.scrollDirection = config.scrollDirection;
            this.reverse = config.reverse;
            this.controller = config.controller;
            this.primary = config.primary;
            this.physics = config.physics;
            this.shrinkWrap = config.shrinkWrap;
            this.padding = config.padding;
            this.itemExtent = config.itemExtent;
            this.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            this.addRepaintBoundaries = config.addRepaintBoundaries;
            this.addSemanticIndexes = config.addSemanticIndexes;
            this.cacheExtent = config.cacheExtent;
            this.children = config.children;
            this.semanticChildCount = config.semanticChildCount;
            this.dragStartBehavior = config.dragStartBehavior;
            this.keyboardDismissBehavior = config.keyboardDismissBehavior;
            this.restorationId = config.restorationId;
            this.clipBehavior = config.clipBehavior;
        }
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.itemBuilder) {
            this.itemBuilderChildren = [];
            if (this.itemCount != null && this.itemCount != undefined) {
                for (let i = 0; i < this.itemCount; ++i) {
                    let w = this.itemBuilder(buildContext, i);
                    this.itemBuilderChildren.push(w);
                }
            }
            delete this.itemBuilder;
        }
        if (this.separatorBuilder) {
            this.separatorBuilderChildren = [];
            if (this.itemCount != null && this.itemCount != undefined) {
                for (let i = 0; i < this.itemCount; ++i) {
                    let w = this.separatorBuilder(buildContext, i);
                    this.separatorBuilderChildren.push(w);
                }
            }
            delete this.separatorBuilder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          padding?:EdgeInsets,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          itemExtent?:number,
          addAutomaticKeepAlives?:boolean,
          addRepaintBoundaries?:boolean,
          addSemanticIndexes?:boolean,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          key?:Key,
          keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    static new(config) {
        return new ListView(config);
    }
    /**
     * @param config config:
        { itemBuilder?:IndexedWidgetBuilder,
          itemCount?:number,
          padding?:EdgeInsets,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          itemExtent?:number,
          addAutomaticKeepAlives?:boolean,
          addRepaintBoundaries?:boolean,
          addSemanticIndexes?:boolean,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          key?:Key,
          keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    static builder(config) {
        let v = new ListView();
        v.constructorName = "builder";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.padding = config.padding;
            v.itemExtent = config.itemExtent;
            v.itemBuilder = config.itemBuilder;
            v.itemCount = config.itemCount;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.cacheExtent = config.cacheExtent;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
            v.keyboardDismissBehavior = config.keyboardDismissBehavior;
            v.restorationId = config.restorationId;
            v.clipBehavior = config.clipBehavior;
        }
        return v;
    }
    /**
     * @param config config:
        { itemBuilder?:IndexedWidgetBuilder,
          separatorBuilder?:IndexedWidgetBuilder,
          itemCount?:number,
          padding?:EdgeInsets,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          itemExtent?:number,
          addAutomaticKeepAlives?:boolean,
          addRepaintBoundaries?:boolean,
          addSemanticIndexes?:boolean,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          key?:Key,
          keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    static separatorBuilder(config) {
        let v = new ListView();
        v.constructorName = "separatorBuilder";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.padding = config.padding;
            v.itemExtent = config.itemExtent;
            v.itemBuilder = config.itemBuilder;
            v.separatorBuilder = config.separatorBuilder;
            v.itemCount = config.itemCount;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.cacheExtent = config.cacheExtent;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
            v.keyboardDismissBehavior = config.keyboardDismissBehavior;
            v.restorationId = config.restorationId;
            v.clipBehavior = config.clipBehavior;
        }
        return v;
    }
    /**
     * @param config config:
        {
          childrenDelegate:SliverChildDelegate;
          padding?:EdgeInsets,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          physics?:ScrollPhysics,
          shrinkWrap?:boolean,
          itemExtent?:number,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
          key?:Key,
          keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
          restorationId?:string,
          clipBehavior?:Clip,
        }
     */
    static custom(config) {
        let v = new ListView();
        v.constructorName = "custom";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.padding = config.padding;
            v.itemExtent = config.itemExtent;
            v.childrenDelegate = config.childrenDelegate;
            v.cacheExtent = config.cacheExtent;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
            v.keyboardDismissBehavior = config.keyboardDismissBehavior;
            v.restorationId = config.restorationId;
            v.clipBehavior = config.clipBehavior;
        }
        return v;
    }
}
exports.ListView = ListView;
class LayoutBuilder extends Widget {
    /**
     * @param config config:
        {
          builder?:any,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.builder = config.builder;
        }
    }
    /**
     * @param config config:
        {
          builder?:any,
          key?:Key
        }
     */
    static new(config) {
        return new LayoutBuilder(config);
    }
}
exports.LayoutBuilder = LayoutBuilder;
class Material extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          elevation?:number,
          color?:Color,
          shadowColor?:Color,
          textStyle?:TextStyle,
          borderRadius?:BorderRadius,
          type?:MaterialType,
          shape?:any,
          borderOnForeground?:boolean,
          clipBehavior?:Clip,
          animationDuration?:Duration,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.type = config.type;
            this.elevation = config.elevation;
            this.color = config.color;
            this.shadowColor = config.shadowColor;
            this.textStyle = config.textStyle;
            this.borderRadius = config.borderRadius;
            this.shape = config.shape;
            this.borderOnForeground = config.borderOnForeground;
            this.clipBehavior = config.clipBehavior;
            this.animationDuration = config.animationDuration;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          elevation?:number,
          color?:Color,
          shadowColor?:Color,
          textStyle?:TextStyle,
          borderRadius?:BorderRadius,
          type?:MaterialType,
          shape?:any,
          borderOnForeground?:boolean,
          clipBehavior?:Clip,
          animationDuration?:Duration,
          key?:Key,
        }
     */
    static new(config) {
        return new Material(config);
    }
}
exports.Material = Material;
class MaterialPageRoute extends Widget {
    /**
     * @param config config:
        {
          builder?:any,
          settings?:any,
          maintainState?:boolean,
          fullscreenDialog?:boolean
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.builder = config.builder;
            this.settings = config.settings;
            this.maintainState = config.maintainState;
            this.fullscreenDialog = config.fullscreenDialog;
        }
        this.child = undefined;
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            this.child = this.builder(buildContext);
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config:
        {
          builder?:any,
          settings?:any,
          maintainState?:boolean,
          fullscreenDialog?:boolean
        }
     */
    static new(config) {
        return new MaterialPageRoute(config);
    }
}
exports.MaterialPageRoute = MaterialPageRoute;
class MaterialBanner extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          content:Widget,
          contentTextStyle?:TextStyle,
          actions:Array<Widget>,
          leading?:Widget,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          leadingPadding?:EdgeInsets,
          forceActionsBelow?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.content = config.content;
            this.contentTextStyle = config.contentTextStyle;
            this.actions = config.actions;
            this.leading = config.leading;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.leadingPadding = config.leadingPadding;
            this.forceActionsBelow = config.forceActionsBelow;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          content:Widget,
          contentTextStyle?:TextStyle,
          actions:Array<Widget>,
          leading?:Widget,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          leadingPadding?:EdgeInsets,
          forceActionsBelow?:boolean,
        }
     */
    static new(config) {
        return new MaterialBanner(config);
    }
}
exports.MaterialBanner = MaterialBanner;
class NotificationListener extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          key?:Key
        }
     */
    static new(config) {
        return new NotificationListener(config);
    }
}
exports.NotificationListener = NotificationListener;
class NestedScrollView extends Widget {
    /**
     * @param config config:
        {
          body?:Widget,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          physics?:ScrollPhysics,
          headerSliverBuilder?:any,
          dragStartBehavior?:DragStartBehavior,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.controller = config.controller;
            this.scrollDirection = config.scrollDirection;
            this.reverse = config.reverse;
            this.physics = config.physics;
            this.headerSliverBuilder = config.headerSliverBuilder;
            this.body = config.body;
            this.dragStartBehavior = config.dragStartBehavior;
        }
        // 本地创建的，供flutter使用
        this.children = [];
    }
    preBuild(jsWidgetHelper, buildContext) {
        ///TODO: innerBoxIsScrolled 暂时不支持，默认为false
        if (this.headerSliverBuilder) {
            this.children = this.headerSliverBuilder(buildContext);
            delete this.headerSliverBuilder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config:
        {
          body?:Widget,
          controller?:ScrollController,
          scrollDirection?:Axis,
          reverse?:boolean,
          physics?:ScrollPhysics,
          headerSliverBuilder?:any,
          dragStartBehavior?:DragStartBehavior,
          key?:Key
        }
     */
    static new(config) {
        return new NestedScrollView(config);
    }
}
exports.NestedScrollView = NestedScrollView;
//****** Navigator ******
class Navigator extends DartClass {
    static push(context, materialPageRoute) {
        context.widget?.helper.navigatorPush(materialPageRoute.builder(context));
    }
    static pop(context) {
        context.widget?.helper.navigatorPop();
    }
}
exports.Navigator = Navigator;
class Opacity extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.opacity = config.opacity;
            this.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    static new(config) {
        return new Opacity(config);
    }
}
exports.Opacity = Opacity;
class Offstage extends Widget {
    /**
     * @param config config:
        {
          child?:.Widget,
          offstage?:boolean,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.offstage = config.offstage;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:.Widget,
          offstage?:boolean,
          key?:Key,
        }
     */
    static new(config) {
        return new Offstage(config);
    }
}
exports.Offstage = Offstage;
class OverflowBox extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          alignment?:Alignment,
          minWidth?:number,
          maxWidth?:number,
          minHeight?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.minWidth = config.minWidth;
            this.maxWidth = config.maxWidth;
            this.minHeight = config.minHeight;
            this.maxHeight = config.maxHeight;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          alignment?:Alignment,
          minWidth?:number,
          maxWidth?:number,
          minHeight?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    static new(config) {
        return new OverflowBox(config);
    }
}
exports.OverflowBox = OverflowBox;
class OutlineButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed:VoidCallback,
          onLongPress?:VoidCallback,
          padding?:EdgeInsets,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          highlightElevation?:number,
          focusColor?: Color,
          hoverColor?: Color,
          visualDensity?: VisualDensity,
          autofocus?: boolean,
          borderSide?:BorderSide,
          disabledBorderColor?:Color,
          highlightedBorderColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.textTheme = config.textTheme;
            this.textColor = config.textColor;
            this.disabledTextColor = config.disabledTextColor;
            this.color = config.color;
            this.disabledColor = config.disabledColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.colorBrightness = config.colorBrightness;
            this.highlightElevation = config.highlightElevation;
            this.padding = config.padding;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.onLongPress = config.onLongPress;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.visualDensity = config.visualDensity;
            this.autofocus = config.autofocus;
            this.child = config.child;
            this.borderSide = config.borderSide;
            this.disabledBorderColor = config.disabledBorderColor;
            this.highlightedBorderColor = config.highlightedBorderColor;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed:VoidCallback,
          onLongPress?:VoidCallback,
          padding?:EdgeInsets,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          highlightElevation?:number,
          focusColor?: Color,
          hoverColor?: Color,
          visualDensity?: VisualDensity,
          autofocus?: boolean,
          borderSide?:BorderSide,
          disabledBorderColor?:Color,
          highlightedBorderColor?:Color,
        }
     */
    static new(config) {
        return new OutlineButton(config);
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed?:VoidCallback,
          onLongPress?:VoidCallback,
          padding?:EdgeInsets,
          textTheme?:ButtonTextTheme,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          highlightElevation?:number,
          focusColor?: Color,
          hoverColor?: Color,
          visualDensity?: VisualDensity,
          autofocus?: boolean,
          borderSide?:BorderSide,
          disabledBorderColor?:Color,
          highlightedBorderColor?:Color,
  
          icon?:Widget,
          label?:Widget,
        }
     */
    static icon(config) {
        let v = new OutlineButton();
        v.constructorName = "icon";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.textTheme = config.textTheme;
            v.textColor = config.textColor;
            v.disabledTextColor = config.disabledTextColor;
            v.color = config.color;
            v.disabledColor = config.disabledColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorBrightness = config.colorBrightness;
            v.padding = config.padding;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.onLongPress = config.onLongPress;
            v.focusColor = config.focusColor;
            v.hoverColor = config.hoverColor;
            v.autofocus = config.autofocus;
            v.borderSide = config.borderSide;
            v.disabledBorderColor = config.disabledBorderColor;
            v.highlightedBorderColor = config.highlightedBorderColor;
            v.icon = config.icon;
            v.label = config.label;
        }
        return v;
    }
}
exports.OutlineButton = OutlineButton;
class Padding extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          padding?:EdgeInsets,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.padding = config.padding;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          padding?:EdgeInsets,
          key?:Key
        }
     */
    static new(config) {
        return new Padding(config);
    }
}
exports.Padding = Padding;
class PhysicalModel extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          color:Color,
          shape?:BoxShape,
          child?:Widget,
          clipBehavior?:Clip,
          borderRadius?:BorderRadius,
          elevation?:number,
          shadowColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.color = config.color;
            this.shape = config.shape;
            this.shadowColor = config.shadowColor;
            this.clipBehavior = config.clipBehavior;
            this.elevation = config.elevation;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          color:Color,
          shape?:BoxShape,
          child?:Widget,
          clipBehavior?:Clip,
          borderRadius?:BorderRadius,
          elevation?:number,
          shadowColor?:Color,
        }
     */
    static new(config) {
        return new PhysicalModel(config);
    }
}
exports.PhysicalModel = PhysicalModel;
class Positioned extends Widget {
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
          width?:number,
          height?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.left = config.left;
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.width = config.width;
            this.height = config.height;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
          width?:number,
          height?:number,
        }
     */
    static new(config) {
        return new Positioned(config);
    }
    /**
     * @param config config:
        {
          child:Widget,
          rect?:Rect,
          key?:Key
        }
     */
    static fromRect(config) {
        let v = new Positioned();
        v.constructorName = "fromRect";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.rect = config.rect;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
        }
     */
    static fill(config) {
        var v = new Positioned();
        v.constructorName = "fill";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          textDirection:TextDirection;
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
          width?:number,
          height?:number,
        }
     */
    static directional(config) {
        var v = new Positioned();
        v.constructorName = "directional";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.textDirection = config.textDirection;
            v.start = config.start;
            v.top = config.top;
            v.end = config.end;
            v.bottom = config.bottom;
            v.width = config.width;
            v.height = config.height;
            v.child = config.child;
        }
        return v;
    }
}
exports.Positioned = Positioned;
class PositionedDirectional extends Widget {
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
          width?:number,
          height?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.start = config.start;
            this.top = config.top;
            this.end = config.end;
            this.bottom = config.bottom;
            this.width = config.width;
            this.height = config.height;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key
          child:Widget,
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
          width?:number,
          height?:number,
        }
     */
    static new(config) {
        return new PositionedDirectional(config);
    }
}
exports.PositionedDirectional = PositionedDirectional;
class PreferredSize extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          preferredSize?:Size,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.preferredSize = config.preferredSize;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          preferredSize?:Size,
          key?:Key
        }
     */
    static new(config) {
        return new PreferredSize(config);
    }
}
exports.PreferredSize = PreferredSize;
//****** TODO PreferredSizeWidget ******
class PreferredSizeWidget extends Widget {
    static new() {
        return new PreferredSizeWidget();
    }
}
exports.PreferredSizeWidget = PreferredSizeWidget;
class Placeholder extends Widget {
    /**
     * @param config config:
        {
          color?:Color,
          strokeWidth?:number,
          fallbackWidth?:number,
          fallbackHeight?:number,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.strokeWidth = config.strokeWidth;
            this.fallbackWidth = config.fallbackWidth;
            this.fallbackHeight = config.fallbackHeight;
        }
    }
    /**
     * @param config config:
        {
          color?:Color,
          strokeWidth?:number,
          fallbackWidth?:number,
          fallbackHeight?:number,
          key?:Key,
        }
     */
    static new(config) {
        return new Placeholder(config);
    }
}
exports.Placeholder = Placeholder;
class PopupMenuButton extends Widget {
    /**
     * @param config config:
        {
          itemBuilder?:any,
          initialValue?:any,
          onSelected?:any,
          onCanceled?:any,
          tooltip?:string,
          elevation?:number,
          padding?:EdgeInsets,
          child?:Widget,
          icon?:Widget,
          offset?:Offset,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.itemBuilder = config.itemBuilder;
            this.initialValue = config.initialValue;
            this.onSelected = config.onSelected;
            this.onCanceled = config.onCanceled;
            this.tooltip = config.tooltip;
            this.elevation = config.elevation;
            this.padding = config.padding;
            this.child = config.child;
            this.icon = config.icon;
            this.offset = config.offset;
        }
        // 本地创建的，供flutter使用
        this.children = [];
    }
    //在生成json前调用
    //用于list delegate 等的items build
    //用于 widget 有类似 onTab 等响应函数变量，在此转换成 callback id,
    //但注意，delegate 中确实需要 function ,不需要转ID的，不要调用super.preBuild
    preBuild(jsWidgetHelper, buildContext) {
        //先把调用函数
        if (this.itemBuilder) {
            this.children = this.itemBuilder(buildContext);
            delete this.itemBuilder;
        }
        //function 转 id
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config:
        {
          itemBuilder?:any,
          initialValue?:any,
          onSelected?:any,
          onCanceled?:any,
          tooltip?:string,
          elevation?:number,
          padding?:EdgeInsets,
          child?:Widget,
          icon?:Widget,
          offset?:Offset,
          key?:Key
        }
     */
    static new(config) {
        return new PopupMenuButton(config);
    }
}
exports.PopupMenuButton = PopupMenuButton;
class PopupMenuItem extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          value?:any,
          enabled?:boolean,
          height?:number,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.enabled = config.enabled;
            this.height = config.height;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          child?:Widget,
          value?:any,
          enabled?:boolean,
          height?:number,
          key?:Key
        }
     */
    static new(config) {
        return new PopupMenuItem(config);
    }
}
exports.PopupMenuItem = PopupMenuItem;
class Row extends Widget {
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          mainAxisAlignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          crossAxisAlignment?:CrossAxisAlignment,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          key?:Key,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.mainAxisAlignment = config.mainAxisAlignment;
            this.mainAxisSize = config.mainAxisSize;
            this.crossAxisAlignment = config.crossAxisAlignment;
            this.textDirection = config.textDirection;
            this.verticalDirection = config.verticalDirection;
            this.textBaseline = config.textBaseline;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
        {
          children?:Array<Widget>,
          mainAxisAlignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          crossAxisAlignment?:CrossAxisAlignment,
          textDirection?:TextDirection,
          verticalDirection?:VerticalDirection,
          textBaseline?:TextBaseline,
          key?:Key,
        }
     */
    static new(config) {
        return new Row(config);
    }
}
exports.Row = Row;
class RepaintBoundary extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
        }
     */
    static new(config) {
        return new RepaintBoundary(config);
    }
    static wrap(child, childIndex) {
        var v = new RepaintBoundary();
        v.constructorName = "wrap";
        v.child = child;
        v.childIndex = childIndex;
        return v;
    }
}
exports.RepaintBoundary = RepaintBoundary;
class RawImage extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          image?:ImageProvider,
          debugImageLabel?:string,
          width?:number,
          height?:number,
          scale?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          invertColors?:boolean,
          filterQuality?:FilterQuality,
          isAntiAlias?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.image = config.image;
            this.debugImageLabel = config.debugImageLabel;
            this.width = config.width;
            this.height = config.height;
            this.scale = config.scale;
            this.color = config.color;
            this.colorBlendMode = config.colorBlendMode;
            this.fit = config.fit;
            this.alignment = config.alignment;
            this.repeat = config.repeat;
            this.centerSlice = config.centerSlice;
            this.matchTextDirection = config.matchTextDirection;
            this.invertColors = config.invertColors;
            this.filterQuality = config.filterQuality;
            this.isAntiAlias = config.isAntiAlias;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          image?:ImageProvider,
          debugImageLabel?:string,
          width?:number,
          height?:number,
          scale?:number,
          color?:Color,
          colorBlendMode?:BlendMode,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          centerSlice?:Rect,
          matchTextDirection?:boolean,
          invertColors?:boolean,
          filterQuality?:FilterQuality,
          isAntiAlias?:boolean,
        }
     */
    static new(config) {
        return new RawImage(config);
    }
}
exports.RawImage = RawImage;
class RotatedBox extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          quarterTurns:number,
          child?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.quarterTurns = config.quarterTurns;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          quarterTurns:number,
          child?:Widget,
        }
     */
    static new(config) {
        return new RotatedBox(config);
    }
}
exports.RotatedBox = RotatedBox;
class RaisedButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          padding?:EdgeInsets,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          elevation?:number,
          highlightElevation?:number,
          disabledElevation?:number,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          animationDuration?:Duration,
        
          onLongPress?:VoidCallback,
          focusColor?:Color,
          hoverColor?:Color,
          focusElevation?:number,
          hoverElevation?:number,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.onHighlightChanged = config.onHighlightChanged;
            this.textColor = config.textColor;
            this.disabledTextColor = config.disabledTextColor;
            this.color = config.color;
            this.disabledColor = config.disabledColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.colorBrightness = config.colorBrightness;
            this.elevation = config.elevation;
            this.highlightElevation = config.highlightElevation;
            this.disabledElevation = config.disabledElevation;
            this.padding = config.padding;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.animationDuration = config.animationDuration;
            this.child = config.child;
            this.onLongPress = config.onLongPress;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.focusElevation = config.focusElevation;
            this.hoverElevation = config.hoverElevation;
            this.visualDensity = config.visualDensity;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed?:VoidCallback,
          onHighlightChanged?:VoidCallbackBoolean,
          padding?:EdgeInsets,
          textColor?:Color,
          disabledTextColor?:Color,
          color?:Color,
          disabledColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorBrightness?:Brightness,
          elevation?:number,
          highlightElevation?:number,
          disabledElevation?:number,
          shape?:any,
          clipBehavior?:Clip,
          materialTapTargetSize?:MaterialTapTargetSize,
          animationDuration?:Duration,
        
          onLongPress?:VoidCallback,
          focusColor?:Color,
          hoverColor?:Color,
          focusElevation?:number,
          hoverElevation?:number,
          visualDensity?:VisualDensity,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new RaisedButton(config);
    }
    /**
     * @param config config:
      {
        key?:Key,
        icon?:Widget,
        label?:Widget,
        onPressed?:VoidCallback,
        onHighlightChanged?:VoidCallbackBoolean,
        padding?:EdgeInsets,
        textColor?:Color,
        disabledTextColor?:Color,
        color?:Color,
        disabledColor?:Color,
        highlightColor?:Color,
        splashColor?:Color,
        colorBrightness?:Brightness,
        elevation?:number,
        highlightElevation?:number,
        disabledElevation?:number,
        shape?:any,
        clipBehavior?:Clip,
        materialTapTargetSize?:MaterialTapTargetSize,
        animationDuration?:Duration,
        onLongPress?:VoidCallback,
        focusColor?:Color,
        hoverColor?:Color,
        focusElevation?:number,
        hoverElevation?:number,
        visualDensity?:VisualDensity,
        autofocus?:boolean,
      }
     */
    static icon(config) {
        let v = new RaisedButton();
        v.constructorName = "icon";
        if (config != null && config != undefined) {
            {
                v.key = config.key;
                v.onPressed = config.onPressed;
                v.padding = config.padding;
                v.onHighlightChanged = config.onHighlightChanged;
                v.textColor = config.textColor;
                v.disabledTextColor = config.disabledTextColor;
                v.color = config.color;
                v.disabledColor = config.disabledColor;
                v.highlightColor = config.highlightColor;
                v.splashColor = config.splashColor;
                v.colorBrightness = config.colorBrightness;
                v.elevation = config.elevation;
                v.highlightElevation = config.highlightElevation;
                v.disabledElevation = config.disabledElevation;
                v.shape = config.shape;
                v.clipBehavior = config.clipBehavior;
                v.materialTapTargetSize = config.materialTapTargetSize;
                v.animationDuration = config.animationDuration;
                v.icon = config.icon;
                v.label = config.label;
                v.onLongPress = config.onLongPress;
                v.focusColor = config.focusColor;
                v.hoverColor = config.hoverColor;
                v.autofocus = config.autofocus;
            }
            return v;
        }
    }
}
exports.RaisedButton = RaisedButton;
class Radio extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        value?:any,
        groupValue?:any,
        onChanged?:any,
        activeColor?:Color,
        materialTapTargetSize?:MaterialTapTargetSize
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.groupValue = config.groupValue;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.materialTapTargetSize = config.materialTapTargetSize;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        value?:any,
        groupValue?:any,
        onChanged?:any,
        activeColor?:Color,
        materialTapTargetSize?:MaterialTapTargetSize
      }
     */
    static new(config) {
        return new Radio(config);
    }
}
exports.Radio = Radio;
class RawMaterialButton extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        onPressed:VoidCallback,
        onLongPress?:VoidCallback,
        onHighlightChanged?:VoidCallbackBoolean,
        textStyle?:TextStyle,
        padding?:EdgeInsets,
        fillColor?:Color,
        focusColor?:Color,
        hoverColor?:Color,
        highlightColor?:Color,
        splashColor?:Color,
        constraints?:BoxConstraints,
        elevation?:number,
        focusElevation?:number,
        hoverElevation?:number,
        highlightElevation?:number,
        disabledElevation?:number,
        visualDensity?:VisualDensity,
        autofocus?:boolean,
        shape?:any,
        clipBehavior?:Clip,
        materialTapTargetSize?:MaterialTapTargetSize,
        animationDuration?:Duration,
        enableFeedback?:boolean,
        child?:Widget,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.onLongPress = config.onLongPress;
            this.onHighlightChanged = config.onHighlightChanged;
            this.focusColor = config.focusColor;
            this.focusElevation = config.focusElevation;
            this.hoverColor = config.hoverColor;
            this.hoverElevation = config.hoverElevation;
            this.textStyle = config.textStyle;
            this.fillColor = config.fillColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.elevation = config.elevation;
            this.highlightElevation = config.highlightElevation;
            this.disabledElevation = config.disabledElevation;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.constraints = config.constraints;
            this.shape = config.shape;
            this.animationDuration = config.animationDuration;
            this.clipBehavior = config.clipBehavior;
            this.autofocus = config.autofocus;
            this.enableFeedback = config.enableFeedback;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        onPressed:VoidCallback,
        onLongPress?:VoidCallback,
        onHighlightChanged?:VoidCallbackBoolean,
        textStyle?:TextStyle,
        padding?:EdgeInsets,
        fillColor?:Color,
        focusColor?:Color,
        hoverColor?:Color,
        highlightColor?:Color,
        splashColor?:Color,
        constraints?:BoxConstraints,
        elevation?:number,
        focusElevation?:number,
        hoverElevation?:number,
        highlightElevation?:number,
        disabledElevation?:number,
        visualDensity?:VisualDensity,
        autofocus?:boolean,
        shape?:any,
        clipBehavior?:Clip,
        materialTapTargetSize?:MaterialTapTargetSize,
        animationDuration?:Duration,
        enableFeedback?:boolean,
        child?:Widget,
      }
     */
    static new(config) {
        return new RawMaterialButton(config);
    }
}
exports.RawMaterialButton = RawMaterialButton;
class RichText extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        text:Widget,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        softWrap?:boolean,
        overflow?:Overflow,
        textScaleFactor?:number,
        maxLines?:number,
        textWidthBasis?:TextWidthBasis,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.text = config.text;
            this.textAlign = config.textAlign;
            this.textDirection = config.textDirection;
            this.softWrap = config.softWrap;
            this.overflow = config.overflow;
            this.textScaleFactor = config.textScaleFactor;
            this.maxLines = config.maxLines;
            this.textWidthBasis = config.textWidthBasis;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        text:Widget,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        softWrap?:boolean,
        overflow?:Overflow,
        textScaleFactor?:number,
        maxLines?:number,
        textWidthBasis?:TextWidthBasis,
      }
     */
    static new(config) {
        return new RichText(config);
    }
}
exports.RichText = RichText;
class Spacer extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        flex?:number
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.flex = config.flex;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        flex?:number
      }
     */
    static new(config) {
        return new Spacer(config);
    }
}
exports.Spacer = Spacer;
class Semantics extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        container?:boolean,
        explicitChildNodes?:boolean,
        excludeSemantics?:boolean,
        enabled?:boolean,
        checked?:boolean,
        selected?:boolean,
        toggled?:boolean,
        button?:boolean,
        link?:boolean,
        header?:boolean,
        textField?:boolean,
        readOnly?:boolean,
        focusable?:boolean,
        focused?:boolean,
        inMutuallyExclusiveGroup?:boolean,
        obscured?:boolean,
        multiline?:boolean,
        scopesRoute?:boolean,
        namesRoute?:boolean,
        hidden?:boolean,
        image?:boolean,
        liveRegion?:boolean,
        maxValueLength?:number,
        currentValueLength?:number,
  
        label?:string,
        value?:string,
        increasedValue?:string,
        decreasedValue?:string,
        hint?:string,
        onTapHint?:string,
        onLongPressHint?:string,
        textDirection?:TextDirection,
  
        onTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onScrollLeft?:VoidCallback,
        onScrollRight?:VoidCallback,
        onScrollUp?:VoidCallback,
        onScrollDown?:VoidCallback,
        onIncrease?:VoidCallback,
        onDecrease?:VoidCallback,
        onCopy?:VoidCallback,
        onCut?:VoidCallback,
        onPaste?:VoidCallback,
        onDismiss?:VoidCallback,
        onDidGainAccessibilityFocus?:VoidCallback,
        onDidLoseAccessibilityFocus?:VoidCallback,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.container = config.container;
            this.excludeSemantics = config.excludeSemantics;
            this.explicitChildNodes = config.explicitChildNodes;
            this.enabled = config.enabled;
            this.checked = config.checked;
            this.selected = config.selected;
            this.toggled = config.toggled;
            this.button = config.button;
            this.link = config.link;
            this.header = config.header;
            this.textField = config.textField;
            this.readOnly = config.readOnly;
            this.focusable = config.focusable;
            this.focused = config.focused;
            this.inMutuallyExclusiveGroup = config.inMutuallyExclusiveGroup;
            this.obscured = config.obscured;
            this.multiline = config.multiline;
            this.scopesRoute = config.scopesRoute;
            this.namesRoute = config.namesRoute;
            this.hidden = config.hidden;
            this.image = config.image;
            this.liveRegion = config.liveRegion;
            this.maxValueLength = config.maxValueLength;
            this.currentValueLength = config.currentValueLength;
            this.label = config.label;
            this.value = config.value;
            this.increasedValue = config.increasedValue;
            this.decreasedValue = config.decreasedValue;
            this.hint = config.hint;
            this.onTapHint = config.onTapHint;
            this.onLongPressHint = config.onLongPressHint;
            this.textDirection = config.textDirection;
            this.onTap = config.onTap;
            this.onLongPress = config.onLongPress;
            this.onScrollLeft = config.onScrollLeft;
            this.onScrollRight = config.onScrollRight;
            this.onScrollDown = config.onScrollDown;
            this.onScrollUp = config.onScrollUp;
            this.onIncrease = config.onIncrease;
            this.onDecrease = config.onDecrease;
            this.onCopy = config.onCopy;
            this.onCut = config.onCut;
            this.onPaste = config.onPaste;
            this.onDismiss = config.onDismiss;
            this.onDidGainAccessibilityFocus = config.onDidGainAccessibilityFocus;
            this.onDidLoseAccessibilityFocus = config.onDidLoseAccessibilityFocus;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        container?:boolean,
        explicitChildNodes?:boolean,
        excludeSemantics?:boolean,
        enabled?:boolean,
        checked?:boolean,
        selected?:boolean,
        toggled?:boolean,
        button?:boolean,
        link?:boolean,
        header?:boolean,
        textField?:boolean,
        readOnly?:boolean,
        focusable?:boolean,
        focused?:boolean,
        inMutuallyExclusiveGroup?:boolean,
        obscured?:boolean,
        multiline?:boolean,
        scopesRoute?:boolean,
        namesRoute?:boolean,
        hidden?:boolean,
        image?:boolean,
        liveRegion?:boolean,
        maxValueLength?:number,
        currentValueLength?:number,
  
        label?:string,
        value?:string,
        increasedValue?:string,
        decreasedValue?:string,
        hint?:string,
        onTapHint?:string,
        onLongPressHint?:string,
        textDirection?:TextDirection,
  
        onTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onScrollLeft?:VoidCallback,
        onScrollRight?:VoidCallback,
        onScrollUp?:VoidCallback,
        onScrollDown?:VoidCallback,
        onIncrease?:VoidCallback,
        onDecrease?:VoidCallback,
        onCopy?:VoidCallback,
        onCut?:VoidCallback,
        onPaste?:VoidCallback,
        onDismiss?:VoidCallback,
        onDidGainAccessibilityFocus?:VoidCallback,
        onDidLoseAccessibilityFocus?:VoidCallback,
      }
     */
    static new(config) {
        return new Semantics(config);
    }
}
exports.Semantics = Semantics;
class SwitchListTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          activeTrackColor?:Color,
          inactiveThumbColor?:Color,
          inactiveTrackColor?:Color,
          title?:Widget,
          subtitle?:Widget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:Widget,
          selected?:boolean,
          autofocus?:boolean,
          controlAffinity?:ListTileControlAffinity,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.activeTrackColor = config.activeTrackColor;
            this.inactiveThumbColor = config.inactiveThumbColor;
            this.inactiveTrackColor = config.inactiveTrackColor;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.isThreeLine = config.isThreeLine;
            this.dense = config.dense;
            this.contentPadding = config.contentPadding;
            this.secondary = config.secondary;
            this.selected = config.selected;
            this.autofocus = config.autofocus;
            this.controlAffinity = config.controlAffinity;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          activeTrackColor?:Color,
          inactiveThumbColor?:Color,
          inactiveTrackColor?:Color,
          title?:Widget,
          subtitle?:Widget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:Widget,
          selected?:boolean,
          autofocus?:boolean,
          controlAffinity?:ListTileControlAffinity,
        }
     */
    static new(config) {
        return new SwitchListTile(config);
    }
}
exports.SwitchListTile = SwitchListTile;
class Switch extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged?:VoidCallbackBoolean,
          activeColor?:Color,
          activeTrackColor?:Color,
          inactiveThumbColor?:Color,
          inactiveTrackColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          materialTapTargetSize?:MaterialTapTargetSize,
          dragStartBehavior?:DragStartBehavior,
          autofocus?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.activeTrackColor = config.activeTrackColor;
            this.inactiveThumbColor = config.inactiveThumbColor;
            this.inactiveTrackColor = config.inactiveTrackColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.dragStartBehavior = config.dragStartBehavior;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged?:VoidCallbackBoolean,
          activeColor?:Color,
          activeTrackColor?:Color,
          inactiveThumbColor?:Color,
          inactiveTrackColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          materialTapTargetSize?:MaterialTapTargetSize,
          dragStartBehavior?:DragStartBehavior,
          autofocus?:boolean,
        }
     */
    static new(config) {
        return new Switch(config);
    }
}
exports.Switch = Switch;
class Slider extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        value?:number,
        onChanged?:VoidCallbackNumber,
        onChangeStart?:VoidCallbackNumber,
        onChangeEnd?:VoidCallbackNumber,
        min?:number,
        max?:number,
        divisions?:number,
        label?:string,
        activeColor?:Color,
        inactiveColor?:Color,
        semanticFormatterCallback?:VoidCallbackNumber,
        autofocus?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.onChangeStart = config.onChangeStart;
            this.onChangeEnd = config.onChangeEnd;
            this.min = config.min;
            this.max = config.max;
            this.divisions = config.divisions;
            this.label = config.label;
            this.activeColor = config.activeColor;
            this.inactiveColor = config.inactiveColor;
            this.semanticFormatterCallback = config.semanticFormatterCallback;
            this.autofocus = config.autofocus;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        value?:number,
        onChanged?:VoidCallbackNumber,
        onChangeStart?:VoidCallbackNumber,
        onChangeEnd?:VoidCallbackNumber,
        min?:number,
        max?:number,
        divisions?:number,
        label?:string,
        activeColor?:Color,
        inactiveColor?:Color,
        semanticFormatterCallback?:VoidCallbackNumber,
        autofocus?:boolean,
      }
     */
    static new(config) {
        return new Slider(config);
    }
}
exports.Slider = Slider;
class SizedBox extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        width?:number,
        height?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.width = config.width;
            this.height = config.height;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        width?:number,
        height?:number,
      }
     */
    static new(config) {
        return new SizedBox(config);
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
      }
     */
    static expand(config) {
        var v = new SizedBox();
        v.constructorName = "expand";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        size?:Size,
      }
     */
    static fromSize(config) {
        var v = new SizedBox();
        v.constructorName = "fromSize";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.size = config.size;
        }
        return v;
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
      }
     */
    static shrink(config) {
        var v = new SizedBox();
        v.constructorName = "shrink";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
        }
        return v;
    }
}
exports.SizedBox = SizedBox;
class SizedOverflowBox extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        size:Size,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.size = config.size;
            this.alignment = config.alignment;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        size:Size,
      }
     */
    static new(config) {
        return new SizedOverflowBox(config);
    }
}
exports.SizedOverflowBox = SizedOverflowBox;
class Stack extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        alignment?:AlignmentDirectional,
        textDirection?:TextDirection,
        fit?:StackFit,
        overflow?:Overflow,
        clipBehavior?:Clip,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.alignment = config.alignment;
            this.textDirection = config.textDirection;
            this.fit = config.fit;
            this.overflow = config.overflow;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        alignment?:AlignmentDirectional,
        textDirection?:TextDirection,
        fit?:StackFit,
        overflow?:Overflow,
        clipBehavior?:Clip,
      }
     */
    static new(config) {
        return new Stack(config);
    }
}
exports.Stack = Stack;
class SliverAppBar extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        leading?:Widget,
        automaticallyImplyLeading?:boolean,
        title?:Widget,
        actions?:Array<Widget>,
        flexibleSpace?:Widget,
        bottom?:Widget,
        elevation?:number,
        shadowColor?:Color,
        forceElevated?:boolean,
        backgroundColor?:Color,
        brightness?:Brightness,
        primary?:boolean,
        centerTitle?:boolean,
        excludeHeaderSemantics?:boolean,
        titleSpacing?:number,
        collapsedHeight?:number,
        expandedHeight?:number,
        floating?:boolean,
        pinned?:boolean,
        snap?:boolean,
        stretch?:boolean,
        stretchTriggerOffset?:number
        onStretchTrigger?:VoidCallback,
        shape?:any,
        toolbarHeight?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.automaticallyImplyLeading = config.automaticallyImplyLeading;
            this.title = config.title;
            this.actions = config.actions;
            this.flexibleSpace = config.flexibleSpace;
            this.bottom = config.bottom;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.forceElevated = config.forceElevated;
            this.backgroundColor = config.backgroundColor;
            this.brightness = config.brightness;
            this.primary = config.primary;
            this.centerTitle = config.centerTitle;
            this.titleSpacing = config.titleSpacing;
            this.excludeHeaderSemantics = config.excludeHeaderSemantics;
            this.collapsedHeight = config.collapsedHeight;
            this.expandedHeight = config.expandedHeight;
            this.floating = config.floating;
            this.pinned = config.pinned;
            this.snap = config.snap;
            this.stretch = config.stretch;
            this.stretchTriggerOffset = config.stretchTriggerOffset;
            this.onStretchTrigger = config.onStretchTrigger;
            this.shape = config.shape;
            this.toolbarHeight = config.toolbarHeight;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        leading?:Widget,
        automaticallyImplyLeading?:boolean,
        title?:Widget,
        actions?:Array<Widget>,
        flexibleSpace?:Widget,
        bottom?:Widget,
        elevation?:number,
        shadowColor?:Color,
        forceElevated?:boolean,
        backgroundColor?:Color,
        brightness?:Brightness,
        primary?:boolean,
        centerTitle?:boolean,
        excludeHeaderSemantics?:boolean,
        titleSpacing?:number,
        collapsedHeight?:number,
        expandedHeight?:number,
        floating?:boolean,
        pinned?:boolean,
        snap?:boolean,
        stretch?:boolean,
        stretchTriggerOffset?:number
        onStretchTrigger?:VoidCallback,
        shape?:any,
        toolbarHeight?:number,
      }
     */
    static new(config) {
        return new SliverAppBar(config);
    }
}
exports.SliverAppBar = SliverAppBar;
class SliverFillViewport extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        delegate:SliverChildDelegate,
        viewportFraction?:number,
        padEnds?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.viewportFraction = config.viewportFraction;
            this.padEnds = config.padEnds;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        delegate:SliverChildDelegate,
        viewportFraction?:number,
        padEnds?:boolean,
      }
     */
    static new(config) {
        return new SliverFillViewport(config);
    }
}
exports.SliverFillViewport = SliverFillViewport;
class SliverFillRemaining extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        hasScrollBody?:boolean,
        fillOverscroll?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.hasScrollBody = config.hasScrollBody;
            this.fillOverscroll = config.fillOverscroll;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        hasScrollBody?:boolean,
        fillOverscroll?:boolean,
      }
     */
    static new(config) {
        return new SliverFillRemaining(config);
    }
}
exports.SliverFillRemaining = SliverFillRemaining;
class SliverPadding extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        sliver?:Widget,
        padding:EdgeInsets,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.padding = config.padding;
            this.sliver = config.sliver;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        sliver?:Widget,
        padding:EdgeInsets,
      }
     */
    static new(config) {
        return new SliverPadding(config);
    }
}
exports.SliverPadding = SliverPadding;
class SliverGrid extends Widget {
    /**
     * @param config config:
      {
        delegate?:SliverChildDelegate,
        gridDelegate?:SliverGridDelegate,
        key?:Key,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.gridDelegate = config.gridDelegate;
        }
    }
    /**
     * @param config config:
      {
        delegate?:SliverChildDelegate,
        gridDelegate?:SliverGridDelegate,
        key?:Key,
      }
     */
    static new(config) {
        return new SliverGrid(config);
    }
}
exports.SliverGrid = SliverGrid;
//#region ****** SliverGridDelegate ******
class SliverGridDelegate extends Widget {
    /**
     * SliverGridDelegate.withMax=new SliverGridDelegateWithMaxCrossAxisExtent(config: SliverGridDelegateWithMaxCrossAxisExtentConfig);
     * @param config config:
      {
        maxCrossAxisExtent:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    static withMax(config) {
        return new SliverGridDelegateWithMaxCrossAxisExtent(config);
    }
    /**
     * SliverGridDelegate.withFixed=new SliverGridDelegateWithFixedCrossAxisCount(config: SliverGridDelegateWithFixedCrossAxisCountConfig);
     * @param config config:
      {
        crossAxisCount:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    static withFixed(config) {
        return new SliverGridDelegateWithFixedCrossAxisCount(config);
    }
}
exports.SliverGridDelegate = SliverGridDelegate;
class SliverGridDelegateWithMaxCrossAxisExtent extends Widget {
    /**
     * @param config config:
      {
        maxCrossAxisExtent:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.maxCrossAxisExtent = config.maxCrossAxisExtent;
            this.mainAxisSpacing = config.mainAxisSpacing;
            this.crossAxisSpacing = config.crossAxisSpacing;
            this.childAspectRatio = config.childAspectRatio;
        }
    }
    /**
     * @param config config:
      {
        maxCrossAxisExtent:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    static new(config) {
        return new SliverGridDelegateWithMaxCrossAxisExtent(config);
    }
}
exports.SliverGridDelegateWithMaxCrossAxisExtent = SliverGridDelegateWithMaxCrossAxisExtent;
class SliverGridDelegateWithFixedCrossAxisCount extends Widget {
    /**
     * @param config config:
      {
        crossAxisCount:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.crossAxisCount = config.crossAxisCount;
            this.mainAxisSpacing = config.mainAxisSpacing;
            this.crossAxisSpacing = config.crossAxisSpacing;
            this.childAspectRatio = config.childAspectRatio;
        }
    }
    /**
     * @param config config:
      {
        crossAxisCount:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    static new(config) {
        return new SliverGridDelegateWithFixedCrossAxisCount(config);
    }
}
exports.SliverGridDelegateWithFixedCrossAxisCount = SliverGridDelegateWithFixedCrossAxisCount;
//#endregion
//#region ****** SliverChildDelegate ******
class SliverChildDelegate extends Widget {
    /**
     * SliverChildDelegate.list = new SliverChildListDelegate(config: SliverChildListDelegateConfig);
     * @param config config:
       {
         children?:Array<Widget>,
         addAutomaticKeepAlives?:boolean,
         addRepaintBoundaries?:boolean,
         addSemanticIndexes?:boolean,
         semanticIndexOffset?:number,
       }
    */
    static list(config) {
        return new SliverChildListDelegate(config);
    }
    /**
     * SliverChildDelegate.builder = new SliverChildBuilderDelegate(config: SliverChildBuilderDelegateConfig);
     * @param config config:
      {
        builder:any,
        childCount?:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
      }
     */
    static builder(config) {
        return new SliverChildBuilderDelegate(config);
    }
}
exports.SliverChildDelegate = SliverChildDelegate;
class SliverChildListDelegate extends SliverChildDelegate {
    /**
     * @param config config:
      {
        children:Array<Widget>,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.children = config.children;
            this.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            this.addRepaintBoundaries = config.addRepaintBoundaries;
            this.addSemanticIndexes = config.addSemanticIndexes;
            this.semanticIndexOffset = config.semanticIndexOffset;
        }
    }
    /**
     * @param config config:
      {
        children:Array<Widget>,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
      }
     */
    static new(config) {
        return new SliverChildListDelegate(config);
    }
}
exports.SliverChildListDelegate = SliverChildListDelegate;
class SliverChildBuilderDelegate extends SliverChildDelegate {
    /**
     * @param config config:
      {
        builder:IndexedWidgetBuilder,
        childCount:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
        children?:Array<Widget>,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.builder = config.builder;
            this.childCount = config.childCount;
            this.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            this.addRepaintBoundaries = config.addRepaintBoundaries;
            this.addSemanticIndexes = config.addSemanticIndexes;
            this.semanticIndexOffset = config.semanticIndexOffset;
        }
        // 本地创建的，供flutter使用
        this.children = [];
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            if (this.childCount != null && this.childCount != undefined) {
                this.children = [];
                for (let i = 0; i < this.childCount; ++i) {
                    let w = this.builder(buildContext, i);
                    if (this.children != null && this.children != undefined) {
                        this.children.push(w);
                    }
                }
            }
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config:
      {
        builder:IndexedWidgetBuilder,
        childCount:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
        children?:Array<Widget>,
      }
     */
    static new(config) {
        return new SliverChildBuilderDelegate(config);
    }
}
exports.SliverChildBuilderDelegate = SliverChildBuilderDelegate;
class SliverList extends Widget {
    /**
     * @param config config:
      {
        delegate?:SliverChildDelegate,
        key?:Key
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
        }
    }
    /**
     * @param config config:
      {
        delegate?:SliverChildDelegate,
        key?:Key
      }
     */
    static new(config) {
        return new SliverList(config);
    }
}
exports.SliverList = SliverList;
class SliverOpacity extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        sliver?:Widget,
        opacity:number,
        alwaysIncludeSemantics?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.sliver = config.sliver;
            this.opacity = config.opacity;
            this.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        sliver?:Widget,
        opacity:number,
        alwaysIncludeSemantics?:boolean,
      }
     */
    static new(config) {
        return new SliverOpacity(config);
    }
}
exports.SliverOpacity = SliverOpacity;
class SliverOverlapInjector extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.handle = config.handle;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    static new(config) {
        return new SliverOverlapInjector(config);
    }
}
exports.SliverOverlapInjector = SliverOverlapInjector;
class SliverFixedExtentList extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        delegate?:SliverChildDelegate,
        itemExtent?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.delegate = config.delegate;
            this.itemExtent = config.itemExtent;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        delegate?:SliverChildDelegate,
        itemExtent?:number,
      }
     */
    static new(config) {
        return new SliverFixedExtentList(config);
    }
}
exports.SliverFixedExtentList = SliverFixedExtentList;
class SliverOverlapAbsorber extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.handle = config.handle;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    static new(config) {
        return new SliverOverlapAbsorber(config);
    }
}
exports.SliverOverlapAbsorber = SliverOverlapAbsorber;
class SingleChildScrollView extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        scrollDirection?:Axis,
        reverse?:boolean,
        padding?:EdgeInsets,
        primary?:boolean,
        physics?:ScrollPhysics,
        controller?:ScrollController,
        dragStartBehavior?:DragStartBehavior,
        clipBehavior?:Clip,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.scrollDirection = config.scrollDirection;
            this.reverse = config.reverse;
            this.padding = config.padding;
            this.primary = config.primary;
            this.physics = config.physics;
            this.controller = config.controller;
            this.child = config.child;
            this.dragStartBehavior = config.dragStartBehavior;
            this.clipBehavior = config.clipBehavior;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        scrollDirection?:Axis,
        reverse?:boolean,
        padding?:EdgeInsets,
        primary?:boolean,
        physics?:ScrollPhysics,
        controller?:ScrollController,
        dragStartBehavior?:DragStartBehavior,
        clipBehavior?:Clip,
      }
     */
    static new(config) {
        return new SingleChildScrollView(config);
    }
}
exports.SingleChildScrollView = SingleChildScrollView;
class SliverToBoxAdapter extends Widget {
    /**
     * @param config config:
      {
        child?:Widget,
        key?:Key
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        child?:Widget,
        key?:Key
      }
     */
    static new(config) {
        return new SliverToBoxAdapter(config);
    }
}
exports.SliverToBoxAdapter = SliverToBoxAdapter;
class Scaffold extends Widget {
    /**
     * @param config config:
      {
        key?:Key;
        appBar?:Widget;
        body?:Widget;
        floatingActionButton?:Widget;
        floatingActionButtonLocation?:FloatingActionButtonLocation;
        persistentFooterButtons?:Array<Widget>;
        drawer?:Widget;
        endDrawer?:Widget;
        bottomNavigationBar?:Widget;
        bottomSheet?:Widget;
        backgroundColor?:Color;
        resizeToAvoidBottomPadding?:boolean;
        resizeToAvoidBottomInset?:boolean;
        primary?:boolean;
        drawerDragStartBehavior?:DragStartBehavior;
        extendBody?:boolean;
        extendBodyBehindAppBar?:boolean;
        drawerScrimColor?:Color;
        drawerEdgeDragWidth?:number;
        drawerEnableOpenDragGesture?:boolean;
        endDrawerEnableOpenDragGesture?:boolean;
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.appBar = config.appBar;
            this.body = config.body;
            this.floatingActionButton = config.floatingActionButton;
            this.floatingActionButtonLocation = config.floatingActionButtonLocation;
            this.persistentFooterButtons = config.persistentFooterButtons;
            this.drawer = config.drawer;
            this.endDrawer = config.endDrawer;
            this.bottomNavigationBar = config.bottomNavigationBar;
            this.bottomSheet = config.bottomSheet;
            this.backgroundColor = config.backgroundColor;
            this.resizeToAvoidBottomPadding = config.resizeToAvoidBottomPadding;
            this.resizeToAvoidBottomInset = config.resizeToAvoidBottomInset;
            this.primary = config.primary;
            this.drawerDragStartBehavior = config.drawerDragStartBehavior;
            this.extendBody = config.extendBody;
            this.extendBodyBehindAppBar = config.extendBodyBehindAppBar;
            this.drawerScrimColor = config.drawerScrimColor;
            this.drawerEdgeDragWidth = config.drawerEdgeDragWidth;
            this.drawerEnableOpenDragGesture = config.drawerEnableOpenDragGesture;
            this.endDrawerEnableOpenDragGesture = config.endDrawerEnableOpenDragGesture;
        }
    }
    /**
     * @param config config:
      {
        key?:Key;
        appBar?:Widget;
        body?:Widget;
        floatingActionButton?:Widget;
        floatingActionButtonLocation?:FloatingActionButtonLocation;
        persistentFooterButtons?:Array<Widget>;
        drawer?:Widget;
        endDrawer?:Widget;
        bottomNavigationBar?:Widget;
        bottomSheet?:Widget;
        backgroundColor?:Color;
        resizeToAvoidBottomPadding?:boolean;
        resizeToAvoidBottomInset?:boolean;
        primary?:boolean;
        drawerDragStartBehavior?:DragStartBehavior;
        extendBody?:boolean;
        extendBodyBehindAppBar?:boolean;
        drawerScrimColor?:Color;
        drawerEdgeDragWidth?:number;
        drawerEnableOpenDragGesture?:boolean;
        endDrawerEnableOpenDragGesture?:boolean;
      }
     */
    static new(config) {
        return new Scaffold(config);
    }
}
exports.Scaffold = Scaffold;
//****** TODO Scaffold ******
class ScaffoldState extends DartClass {
    static new() {
        return new ScaffoldState();
    }
}
exports.ScaffoldState = ScaffoldState;
class SafeArea extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          left?:boolean,
          top?:boolean,
          right?:boolean,
          bottom?:boolean,
          minimum?:EdgeInsets,
          maintainBottomViewPadding?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.left = config.left;
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.minimum = config.minimum;
            this.maintainBottomViewPadding = config.maintainBottomViewPadding;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          left?:boolean,
          top?:boolean,
          right?:boolean,
          bottom?:boolean,
          minimum?:EdgeInsets,
          maintainBottomViewPadding?:boolean,
        }
     */
    static new(config) {
        return new SafeArea(config);
    }
}
exports.SafeArea = SafeArea;
class SliverSafeArea extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        sliver:Widget,
        left?:boolean,
        top?:boolean,
        right?:boolean,
        bottom?:boolean,
        minimum?:EdgeInsets,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.left = config.left;
            this.top = config.top;
            this.right = config.right;
            this.bottom = config.bottom;
            this.minimum = config.minimum;
            this.sliver = config.sliver;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        sliver:Widget,
        left?:boolean,
        top?:boolean,
        right?:boolean,
        bottom?:boolean,
        minimum?:EdgeInsets,
      }
     */
    static new(config) {
        return new SliverSafeArea(config);
    }
}
exports.SliverSafeArea = SliverSafeArea;
class Scrollbar extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child:Widget,
        controller?:ScrollController,
        isAlwaysShown?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.controller = config.controller;
            this.isAlwaysShown = config.isAlwaysShown;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child:Widget,
        controller?:ScrollController,
        isAlwaysShown?:boolean,
      }
     */
    static new(config) {
        return new Scrollbar(config);
    }
}
exports.Scrollbar = Scrollbar;
class SnackBar extends Widget {
    /**
     * @param config config:
      {
        key?:Widget,
        content:Widget,
        backgroundColor?:Color,
        elevation?:number,
        shape?:any,
        behavior?:any,
        action?:any,
        duration?:Duration,
        animation?:any,
        onVisible?:VoidCallback,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.content = config.content;
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.behavior = config.behavior;
            this.action = config.action;
            this.duration = config.duration;
            this.animation = config.animation;
            this.onVisible = config.onVisible;
        }
    }
    /**
     * @param config config:
      {
        key?:Widget,
        content:Widget,
        backgroundColor?:Color,
        elevation?:number,
        shape?:any,
        behavior?:any,
        action?:any,
        duration?:Duration,
        animation?:any,
        onVisible?:VoidCallback,
      }
     */
    static new(config) {
        return new SnackBar(config);
    }
}
exports.SnackBar = SnackBar;
class SnackBarAction extends Widget {
    /**
     * @param config config:
      {
        key?:Widget,
        lable:string,
        onPressed?:VoidCallback,
        disabledTextColor?:Color,
        textColor?:Color,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.lable = config.lable;
            this.textColor = config.textColor;
            this.disabledTextColor = config.disabledTextColor;
            this.onPressed = config.onPressed;
        }
    }
    /**
     * @param config config:
      {
        key?:Widget,
        lable:string,
        onPressed?:VoidCallback,
        disabledTextColor?:Color,
        textColor?:Color,
      }
     */
    static new(config) {
        return new SnackBarAction(config);
    }
}
exports.SnackBarAction = SnackBarAction;
class SliverVisibility extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        sliver:Widget,
        replacement?:Widget,
        visible?:boolean,
        maintainState?:boolean,
        maintainAnimation?:boolean,
        maintainSize?:boolean,
        maintainSemantics?:boolean,
        maintainInteractivity?:boolean,
      }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.sliver = config.sliver;
            this.replacementSliver = config.replacementSliver;
            this.visible = config.visible;
            this.maintainAnimation = config.maintainAnimation;
            this.maintainState = config.maintainState;
            this.maintainSize = config.maintainSize;
            this.maintainSemantics = config.maintainSemantics;
            this.maintainInteractivity = config.maintainInteractivity;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        sliver:Widget,
        replacement?:Widget,
        visible?:boolean,
        maintainState?:boolean,
        maintainAnimation?:boolean,
        maintainSize?:boolean,
        maintainSemantics?:boolean,
        maintainInteractivity?:boolean,
      }
    */
    static new(config) {
        return new SliverVisibility(config);
    }
}
exports.SliverVisibility = SliverVisibility;
class TableRow extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        decoration?:BoxDecoration,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.decoration = config.decoration;
            this.children = config.children;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        decoration?:BoxDecoration,
      }
     */
    static new(config) {
        return new TableRow(config);
    }
}
exports.TableRow = TableRow;
class TableCell extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        verticalAlignment?:TableCellVerticalAlignment,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.verticalAlignment = config.verticalAlignment;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        verticalAlignment?:TableCellVerticalAlignment,
      }
     */
    static new(config) {
        return new TableCell(config);
    }
}
exports.TableCell = TableCell;
class Transform extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        origin?:Offset,
        transform:Matrix4,
        transformHitTests?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.transform = config.transform;
            this.origin = config.origin;
            this.alignment = config.alignment;
            this.transformHitTests = config.transformHitTests;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        origin?:Offset,
        transform:Matrix4,
        transformHitTests?:boolean,
      }
     */
    static new(config) {
        return new Transform(config);
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        angle:number,
        alignment?:Alignment,
        origin?:Offset,
        transformHitTests?:boolean,
      }
     */
    static rotate(config) {
        var v = new Transform();
        v.constructorName = "rotate";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.angle = config.angle;
            v.origin = config.origin;
            v.alignment = config.alignment;
            v.transformHitTests = config.transformHitTests;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        offset:Offset,
        transformHitTests?:boolean,
      }
     */
    static translate(config) {
        var v = new Transform();
        v.constructorName = "translate";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.offset = config.offset;
            v.transformHitTests = config.transformHitTests;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        scale:number,
        alignment?:Alignment,
        origin?:Offset,
        transformHitTests?:boolean,
      }
     */
    static scale(config) {
        var v = new Transform();
        v.constructorName = "scale";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.origin = config.origin;
            v.alignment = config.alignment;
            v.transformHitTests = config.transformHitTests;
            v.child = config.child;
        }
        return v;
    }
}
exports.Transform = Transform;
class Tooltip extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        message:string,
        height?:number,
        padding?:EdgeInsets,
        margin?:EdgeInsets,
        verticalOffset?:number,
        preferBelow?:boolean,
        excludeFromSemantics?:boolean,
        decoration?:BoxDecoration,
        textStyle?:TextStyle,
        waitDuration?:Duration,
        showDuration?:Duration,
        child?:Widget
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.message = config.message;
            this.height = config.height;
            this.padding = config.padding;
            this.margin = config.margin;
            this.verticalOffset = config.verticalOffset;
            this.preferBelow = config.preferBelow;
            this.excludeFromSemantics = config.excludeFromSemantics;
            this.decoration = config.decoration;
            this.textStyle = config.textStyle;
            this.waitDuration = config.waitDuration;
            this.showDuration = config.showDuration;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        message:string,
        height?:number,
        padding?:EdgeInsets,
        margin?:EdgeInsets,
        verticalOffset?:number,
        preferBelow?:boolean,
        excludeFromSemantics?:boolean,
        decoration?:BoxDecoration,
        textStyle?:TextStyle,
        waitDuration?:Duration,
        showDuration?:Duration,
        child?:Widget
      }
     */
    static new(config) {
        return new Tooltip(config);
    }
}
exports.Tooltip = Tooltip;
class Table extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        defaultColumnWidth?:TableColumnWidth,
        defaultVerticalAlignment?:TableCellVerticalAlignment,
        textDirection?:TextDecoration,
        border?:TableBorder,
        textBaseline?:TextBaseline,
        columnWidths?:Map<string,TableColumnWidth>,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.children = config.children;
            this.columnWidths = config.columnWidths;
            this.defaultColumnWidth = config.defaultColumnWidth;
            this.textDirection = config.textDirection;
            this.border = config.border;
            this.defaultVerticalAlignment = config.defaultVerticalAlignment;
            this.textBaseline = config.textBaseline;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        defaultColumnWidth?:TableColumnWidth,
        defaultVerticalAlignment?:TableCellVerticalAlignment,
        textDirection?:TextDecoration,
        border?:TableBorder,
        textBaseline?:TextBaseline,
        columnWidths?:Map<string,TableColumnWidth>,
      }
     */
    static new(config) {
        return new Table(config);
    }
}
exports.Table = Table;
class TabBar extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        tabs?:Array<Widget>,
        onTap?:VoidCallbackNumber,
        controller?:TabController,
        isScrollable?:boolean,
        indicatorColor?:Color,
        indicatorWeight?:number,
        indicatorPadding?:EdgeInsets,
        indicator?:BoxDecoration,
        indicatorSize?:TabBarIndicatorSize,
        labelColor?:Color,
        labelStyle?:TextStyle,
        labelPadding?:EdgeInsets,
        unselectedLabelColor?:Color,
        unselectedLabelStyle?:TextStyle,
        dragStartBehavior?:DragStartBehavior,
        physics?:ScrollPhysics,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.tabs = config.tabs;
            this.controller = config.controller;
            this.isScrollable = config.isScrollable;
            this.indicatorColor = config.indicatorColor;
            this.indicatorWeight = config.indicatorWeight;
            this.indicatorPadding = config.indicatorPadding;
            this.indicator = config.indicator;
            this.indicatorSize = config.indicatorSize;
            this.labelColor = config.labelColor;
            this.labelStyle = config.labelStyle;
            this.labelPadding = config.labelPadding;
            this.unselectedLabelColor = config.unselectedLabelColor;
            this.unselectedLabelStyle = config.unselectedLabelStyle;
            this.dragStartBehavior = config.dragStartBehavior;
            this.onTap = config.onTap;
            this.physics = config.physics;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        tabs?:Array<Widget>,
        onTap?:VoidCallbackNumber,
        controller?:TabController,
        isScrollable?:boolean,
        indicatorColor?:Color,
        indicatorWeight?:number,
        indicatorPadding?:EdgeInsets,
        indicator?:BoxDecoration,
        indicatorSize?:TabBarIndicatorSize,
        labelColor?:Color,
        labelStyle?:TextStyle,
        labelPadding?:EdgeInsets,
        unselectedLabelColor?:Color,
        unselectedLabelStyle?:TextStyle,
        dragStartBehavior?:DragStartBehavior,
        physics?:ScrollPhysics,
      }
     */
    static new(config) {
        return new TabBar(config);
    }
}
exports.TabBar = TabBar;
class Tab extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        text?:string,
        icon?:Widget,
        iconMargin?:EdgeInsets,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.text = config.text;
            this.icon = config.icon;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        text?:string,
        icon?:Widget,
        iconMargin?:EdgeInsets,
      }
     */
    static new(config) {
        return new Tab(config);
    }
}
exports.Tab = Tab;
class TabBarView extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        controller?:TabController,
        physics?:ScrollPhysics,
        dragStartBehavior?:DragStartBehavior,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.children = config.children;
            this.controller = config.controller;
            this.physics = config.physics;
            this.dragStartBehavior = config.dragStartBehavior;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        controller?:TabController,
        physics?:ScrollPhysics,
        dragStartBehavior?:DragStartBehavior,
      }
     */
    static new(config) {
        return new TabBarView(config);
    }
}
exports.TabBarView = TabBarView;
class TabPageSelectorIndicator extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        backgroundColor?:Color,
        borderColor?:Color,
        size?:number,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.backgroundColor = config.backgroundColor;
            this.borderColor = config.borderColor;
            this.size = config.size;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        backgroundColor?:Color,
        borderColor?:Color,
        size?:number,
      }
     */
    static new(config) {
        return new TabPageSelectorIndicator(config);
    }
}
exports.TabPageSelectorIndicator = TabPageSelectorIndicator;
class TabPageSelector extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        color?:Color,
        selectedColor?:Color,
        indicatorSize?:number,
        controller?:TabController,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.selectedColor = config.selectedColor;
            this.indicatorSize = config.indicatorSize;
            this.controller = config.controller;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        color?:Color,
        selectedColor?:Color,
        indicatorSize?:number,
        controller?:TabController,
      }
     */
    static new(config) {
        return new TabPageSelector(config);
    }
}
exports.TabPageSelector = TabPageSelector;
class Title extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.title = config.title;
            this.color = config.color;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    static new(config) {
        return new Title(config);
    }
}
exports.Title = Title;
class Text extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        style?:TextStyle,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        softWrap?:boolean,
        overflow?:TextOverflow,
        textScaleFactor?:number,
        maxLines?:number,
        semanticsLabel?:string,
        textWidthBasis?:TextWidthBasis,
      }
     */
    constructor(data, config) {
        super();
        this.data = data;
        if (config != null && config != undefined) {
            this.key = config.key;
            this.style = config.style;
            this.textAlign = config.textAlign;
            this.textDirection = config.textDirection;
            this.softWrap = config.softWrap;
            this.overflow = config.overflow;
            this.textScaleFactor = config.textScaleFactor;
            this.maxLines = config.maxLines;
            this.semanticsLabel = config.semanticsLabel;
            this.textWidthBasis = config.textWidthBasis;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        style?:TextStyle,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        softWrap?:boolean,
        overflow?:TextOverflow,
        textScaleFactor?:number,
        maxLines?:number,
        semanticsLabel?:string,
        textWidthBasis?:TextWidthBasis,
      }
     */
    static new(data, config) {
        return new Text(data, config);
    }
    /**
     * @param config config:
      {
        key?:Key,
        style?:TextStyle,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        softWrap?:boolean,
        overflow?:TextOverflow,
        textScaleFactor?:number,
        maxLines?:number,
        semanticsLabel?:string,
        textWidthBasis?:TextWidthBasis,
      }
     */
    static rich(data, config) {
        var v = new Text(data, config);
        v.constructorName = "rich";
        v.data = data;
        return v;
    }
}
exports.Text = Text;
class TextSpan extends Widget {
    /**
     * @param config config:
      {
        children?:Array<Widget>,
        style?:TextStyle,
        text?:string,
        semanticsLabel?:string,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.children = config.children;
            this.style = config.style;
            this.text = config.text;
            this.semanticsLabel = config.semanticsLabel;
        }
    }
    /**
     * @param config config:
      {
        children?:Array<Widget>,
        style?:TextStyle,
        text?:string,
        semanticsLabel?:string,
      }
     */
    static new(config) {
        return new TextSpan(config);
    }
}
exports.TextSpan = TextSpan;
class Texture extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        textureId?:number,
        filterQuality?:FilterQuality,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.textureId = config.textureId;
            this.filterQuality = config.filterQuality;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        textureId?:number,
        filterQuality?:FilterQuality,
      }
     */
    static new(config) {
        return new Texture(config);
    }
}
exports.Texture = Texture;
class TextFormField extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        controller?:TextEditingController,
        initialValue?:string,
        focusNode?:FocusNode,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textInputAction?:TextInputAction,
        textCapitalization?:TextCapitalization,
        style?:TextStyle,
        textAlign?:TextAlign,
        textAlignVertical?:TextAlignVertical,
        textDirection?:TextDirection,
        readOnly?:boolean,
        toolbarOptions?:ToolbarOptions,
        showCursor?:boolean,
        autofocus?:boolean,
        obscuringCharacter?:string,
        obscureText?:boolean,
        autocorrect?:boolean,
        smartDashesType?:SmartDashesType,
        smartQuotesType?:SmartQuotesType,
        enableSuggestions?:boolean,
        autovalidate?:boolean,
        maxLines?:number,
        minLines?:number,
        expands?:boolean,
        maxLength?:number,
        maxLengthEnforced?:boolean,
        onChanged?:VoidCallbackString,
        onTap?:VoidCallback,
        onEditingComplete?:VoidCallback,
        onFieldSubmitted?:VoidCallbackString,
        onSaved?:VoidCallbackString,
        validator?:VoidCallbackString,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        dragStartBehavior?:DragStartBehavior,
        enableInteractiveSelection?:boolean,
        scrollPhysics?:ScrollPhysics,

        inputFormatters?:Array<TextInputFormatter>,
        strutStyle?:StrutStyle,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.controller = config.controller;
            this.initialValue = config.initialValue;
            this.focusNode = config.focusNode;
            this.decoration = config.decoration;
            this.keyboardType = config.keyboardType;
            this.textCapitalization = config.textCapitalization;
            this.textInputAction = config.textInputAction;
            this.style = config.style;
            this.textDirection = config.textDirection;
            this.textAlign = config.textAlign;
            this.textAlignVertical = config.textAlignVertical;
            this.autofocus = config.autofocus;
            this.readOnly = config.readOnly;
            this.toolbarOptions = config.toolbarOptions;
            this.showCursor = config.showCursor;
            this.obscureText = config.obscureText;
            this.autocorrect = config.autocorrect;
            this.smartDashesType = config.smartDashesType;
            this.smartQuotesType = config.smartQuotesType;
            this.autovalidate = config.autovalidate;
            this.maxLengthEnforced = config.maxLengthEnforced;
            this.maxLines = config.maxLines;
            this.minLines = config.minLines;
            this.expands = config.expands;
            this.maxLength = config.maxLength;
            this.onChanged = config.onChanged;
            this.onTap = config.onTap;
            this.onEditingComplete = config.onEditingComplete;
            this.onFieldSubmitted = config.onFieldSubmitted;
            this.onSaved = config.onSaved;
            this.validator = config.validator;
            this.enabled = config.enabled;
            this.cursorWidth = config.cursorWidth;
            this.cursorRadius = config.cursorRadius;
            this.cursorColor = config.cursorColor;
            this.keyboardAppearance = config.keyboardAppearance;
            this.scrollPadding = config.scrollPadding;
            this.enableInteractiveSelection = config.enableInteractiveSelection;
            this.scrollPhysics = config.scrollPhysics;
            this.inputFormatters = config.inputFormatters;
            this.strutStyle = config.strutStyle;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        controller?:TextEditingController,
        initialValue?:string,
        focusNode?:FocusNode,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textInputAction?:TextInputAction,
        textCapitalization?:TextCapitalization,
        style?:TextStyle,
        textAlign?:TextAlign,
        textAlignVertical?:TextAlignVertical,
        textDirection?:TextDirection,
        readOnly?:boolean,
        toolbarOptions?:ToolbarOptions,
        showCursor?:boolean,
        autofocus?:boolean,
        obscuringCharacter?:string,
        obscureText?:boolean,
        autocorrect?:boolean,
        smartDashesType?:SmartDashesType,
        smartQuotesType?:SmartQuotesType,
        enableSuggestions?:boolean,
        autovalidate?:boolean,
        maxLines?:number,
        minLines?:number,
        expands?:boolean,
        maxLength?:number,
        maxLengthEnforced?:boolean,
        onChanged?:VoidCallbackString,
        onTap?:VoidCallback,
        onEditingComplete?:VoidCallback,
        onFieldSubmitted?:VoidCallbackString,
        onSaved?:VoidCallbackString,
        validator?:VoidCallbackString,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        dragStartBehavior?:DragStartBehavior,
        enableInteractiveSelection?:boolean,
        scrollPhysics?:ScrollPhysics,
        inputFormatters?:Array<TextInputFormatter>,
        strutStyle?:StrutStyle,
      }
     */
    static new(config) {
        return new TextFormField(config);
    }
}
exports.TextFormField = TextFormField;
class TextField extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        controller?:TextEditingController,
        focusNode?:FocusNode,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textInputAction?:TextInputAction,
        textCapitalization?:TextCapitalization,
        style?:TextStyle,
        textAlign?:TextAlign,
        textAlignVertical?:TextAlignVertical,
        textDirection?:TextDirection,
        readOnly?:boolean,
        toolbarOptions?:ToolbarOptions,
        showCursor?:boolean,
        autofocus?:boolean,
        obscuringCharacter?:string,
        obscureText?:boolean,
        autocorrect?:boolean,
        smartDashesType?:SmartDashesType,
        smartQuotesType?:SmartQuotesType,
        enableSuggestions?:boolean,
        maxLines?:number,
        minLines?:number,
        expands?:boolean,
        maxLength?:number,
        maxLengthEnforced?:boolean,
        onChanged?:VoidCallbackString,
        onEditingComplete?:VoidCallback,
        onSubmitted?:VoidCallbackString,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        selectionHeightStyle?:BoxHeightStyle,
        selectionWidthStyle?:BoxWidthStyle,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        dragStartBehavior?:DragStartBehavior,
        enableInteractiveSelection?:boolean,
        onTap?:VoidCallback,
        scrollController?:ScrollController,
        scrollPhysics?:ScrollPhysics,

        inputFormatters?:Array<TextInputFormatter>,
        strutStyle?:StrutStyle,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.controller = config.controller;
            this.decoration = config.decoration;
            this.keyboardType = config.keyboardType;
            this.textInputAction = config.textInputAction;
            this.textCapitalization = config.textCapitalization;
            this.style = config.style;
            this.textAlign = config.textAlign;
            this.textAlignVertical = config.textAlignVertical;
            this.textDirection = config.textDirection;
            this.readOnly = config.readOnly;
            this.toolbarOptions = config.toolbarOptions;
            this.showCursor = config.showCursor;
            this.obscuringCharacter = config.obscuringCharacter;
            this.obscureText = config.obscureText;
            this.autocorrect = config.autocorrect;
            this.smartDashesType = config.smartDashesType;
            this.smartQuotesType = config.smartQuotesType;
            this.enableSuggestions = config.enableSuggestions;
            this.maxLines = config.maxLines;
            this.minLines = config.minLines;
            this.expands = config.expands;
            this.maxLength = config.maxLength;
            this.maxLengthEnforced = config.maxLengthEnforced;
            this.onChanged = config.onChanged;
            this.onEditingComplete = config.onEditingComplete;
            this.onSubmitted = config.onSubmitted;
            this.enabled = config.enabled;
            this.cursorWidth = config.cursorWidth;
            this.cursorColor = config.cursorColor;
            this.cursorRadius = config.cursorRadius;
            this.selectionHeightStyle = config.selectionHeightStyle;
            this.selectionWidthStyle = config.selectionWidthStyle;
            this.keyboardAppearance = config.keyboardAppearance;
            this.scrollPadding = config.scrollPadding;
            this.dragStartBehavior = config.dragStartBehavior;
            this.enableInteractiveSelection = config.enableInteractiveSelection;
            this.onTap = config.onTap;
            this.scrollController = config.scrollController;
            this.scrollPhysics = config.scrollPhysics;
            this.inputFormatters = config.inputFormatters;
            this.strutStyle = config.strutStyle;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        controller?:TextEditingController,
        focusNode?:FocusNode,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textInputAction?:TextInputAction,
        textCapitalization?:TextCapitalization,
        style?:TextStyle,
        textAlign?:TextAlign,
        textAlignVertical?:TextAlignVertical,
        textDirection?:TextDirection,
        readOnly?:boolean,
        toolbarOptions?:ToolbarOptions,
        showCursor?:boolean,
        autofocus?:boolean,
        obscuringCharacter?:string,
        obscureText?:boolean,
        autocorrect?:boolean,
        smartDashesType?:SmartDashesType,
        smartQuotesType?:SmartQuotesType,
        enableSuggestions?:boolean,
        maxLines?:number,
        minLines?:number,
        expands?:boolean,
        maxLength?:number,
        maxLengthEnforced?:boolean,
        onChanged?:VoidCallbackString,
        onEditingComplete?:VoidCallback,
        onSubmitted?:VoidCallbackString,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        selectionHeightStyle?:BoxHeightStyle,
        selectionWidthStyle?:BoxWidthStyle,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        dragStartBehavior?:DragStartBehavior,
        enableInteractiveSelection?:boolean,
        onTap?:VoidCallback,
        scrollController?:ScrollController,
        scrollPhysics?:ScrollPhysics,
        inputFormatters?:Array<TextInputFormatter>,
        strutStyle?:StrutStyle,
      }
     */
    static new(config) {
        return new TextField(config);
    }
}
exports.TextField = TextField;
class UnconstrainedBox extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment;
          textDirection?:TextDirection,
          constrainedAxis?:Axis,
          clipBehavior?:Clip,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.alignment = config.alignment;
            this.textDirection = config.textDirection;
            this.constrainedAxis = config.constrainedAxis;
            this.clipBehavior = config.clipBehavior;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment;
          textDirection?:TextDirection,
          constrainedAxis?:Axis,
          clipBehavior?:Clip,
        }
     */
    static new(config) {
        return new UnconstrainedBox(config);
    }
}
exports.UnconstrainedBox = UnconstrainedBox;
class VerticalDivider extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        width?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.width = config.width;
            this.thickness = config.thickness;
            this.indent = config.indent;
            this.endIndent = config.endIndent;
            this.color = config.color;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        width?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
    */
    static new(config) {
        return new VerticalDivider(config);
    }
}
exports.VerticalDivider = VerticalDivider;
class Visibility extends Widget {
    /**
     * @param config config:
      {
        child:Widget,
  
        key?:Key,
        replacement?:Widget,
        visible?:boolean,
        maintainState?:boolean,
        maintainAnimation?:boolean,
        maintainSize?:boolean,
        maintainSemantics?:boolean,
        maintainInteractivity?:boolean,
      }
    */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.replacement = config.replacement;
            this.visible = config.visible;
            this.maintainAnimation = config.maintainAnimation;
            this.maintainState = config.maintainState;
            this.maintainSize = config.maintainSize;
            this.maintainSemantics = config.maintainSemantics;
            this.maintainInteractivity = config.maintainInteractivity;
        }
    }
    /**
     * @param config config:
      {
        child:Widget,
  
        key?:Key,
        replacement?:Widget,
        visible?:boolean,
        maintainState?:boolean,
        maintainAnimation?:boolean,
        maintainSize?:boolean,
        maintainSemantics?:boolean,
        maintainInteractivity?:boolean,
      }
    */
    static new(config) {
        return new Visibility(config);
    }
}
exports.Visibility = Visibility;
class Wrap extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        alignment?:WrapAlignment,
        spacing?:number,
        crossAxisAlignment?:WrapCrossAlignment,
        textDirection?:TextDecoration,
        direction?:Axis,
        verticalDirection?:VerticalDirection,
        runAlignment?:WrapAlignment,
        runSpacing?:number,
        clipBehavior?:Clip,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.direction = config.direction;
            this.alignment = config.alignment;
            this.spacing = config.spacing;
            this.runAlignment = config.runAlignment;
            this.runSpacing = config.runSpacing;
            this.crossAxisAlignment = config.crossAxisAlignment;
            this.textDirection = config.textDirection;
            this.verticalDirection = config.verticalDirection;
            this.children = config.children;
            this.clipBehavior = config.clipBehavior;
        }
    }
    /**
     * @param config config:
      {
        key?:Key,
        children?:Array<Widget>,
        alignment?:WrapAlignment,
        spacing?:number,
        crossAxisAlignment?:WrapCrossAlignment,
        textDirection?:TextDecoration,
        direction?:Axis,
        verticalDirection?:VerticalDirection,
        runAlignment?:WrapAlignment,
        runSpacing?:number,
        clipBehavior?:Clip,
      }
     */
    static new(config) {
        return new Wrap(config);
    }
}
exports.Wrap = Wrap;
class WillPopScope extends Widget {
    /**
     * @param config config:
      {
        child:Widget,
        onWillPop:VoidCallback,
  
        key?:Key,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.onWillPop = config.onWillPop;
        }
    }
    /**
     * @param config config:
      {
        child:Widget,
        onWillPop:VoidCallback,
  
        key?:Key,
      }
     */
    static new(config) {
        return new WillPopScope(config);
    }
}
exports.WillPopScope = WillPopScope;
class WidgetSpan extends Widget {
    /**
     * @param config config:
      {
        child:Widget,
  
        alignment?:PlaceholderAlignment,
        baseline?:TextBaseline,
        style?:TextStyle,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.child = config.child;
            this.alignment = config.alignment;
            this.baseline = config.baseline;
            this.style = config.style;
        }
    }
    /**
     * @param config config:
      {
        child:Widget,
  
        alignment?:PlaceholderAlignment,
        baseline?:TextBaseline,
        style?:TextStyle,
      }
     */
    static new(config) {
        return new WidgetSpan(config);
    }
}
exports.WidgetSpan = WidgetSpan;
class CupertinoActivityIndicator extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          animating?:boolean,
          radius?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.animating = config.animating;
            this.radius = config.radius;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          animating?:boolean,
          radius?:number,
        }
     */
    static new(config) {
        return new CupertinoActivityIndicator(config);
    }
}
exports.CupertinoActivityIndicator = CupertinoActivityIndicator;
class CupertinoAlertDialog extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          content?:Widget,
          actions?:Array<CupertinoDialogAction>,
          scrollController?:ScrollController,
          actionScrollController?:ScrollController,
          insetAnimationDuration?:Duration,
          insetAnimationCurve?:Curve,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.title = config.title;
            this.content = config.content;
            this.actions = config.actions;
            this.scrollController = config.scrollController;
            this.actionScrollController = config.actionScrollController;
            this.insetAnimationDuration = config.insetAnimationDuration;
            this.insetAnimationCurve = config.insetAnimationCurve;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          content?:Widget,
          actions?:Array<CupertinoDialogAction>,
          scrollController?:ScrollController,
          actionScrollController?:ScrollController,
          insetAnimationDuration?:Duration,
          insetAnimationCurve?:Curve,
        }
     */
    static new(config) {
        return new CupertinoAlertDialog(config);
    }
}
exports.CupertinoAlertDialog = CupertinoAlertDialog;
class CupertinoButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          minSize?:number,
          pressedOpacity?:number,
          borderRadius?:BorderRadius,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.padding = config.padding;
            this.color = config.color;
            this.disabledColor = config.disabledColor;
            this.minSize = config.minSize;
            this.pressedOpacity = config.pressedOpacity;
            this.borderRadius = config.borderRadius;
            this.onPressed = config.onPressed;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          minSize?:number,
          pressedOpacity?:number,
          borderRadius?:BorderRadius,
        }
     */
    static new(config) {
        return new CupertinoButton(config);
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets,
          disabledColor?:Color,
          minSize?:number,
          pressedOpacity?:number,
          borderRadius?:BorderRadius,
        }
     */
    static filled(config) {
        var v = new CupertinoButton(config);
        v.constructorName = "filled";
        return v;
    }
}
exports.CupertinoButton = CupertinoButton;
class CupertinoDialogAction extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          isDefaultAction?:boolean,
          isDestructiveAction?:boolean,
          onPressed?:VoidCallback,
          child:Widget,
          textStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
            this.isDefaultAction = config.isDefaultAction;
            this.isDestructiveAction = config.isDestructiveAction;
            this.textStyle = config.textStyle;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          isDefaultAction?:boolean,
          isDestructiveAction?:boolean,
          onPressed?:VoidCallback,
          child:Widget,
          textStyle?:TextStyle,
        }
     */
    static new(config) {
        return new CupertinoDialogAction(config);
    }
}
exports.CupertinoDialogAction = CupertinoDialogAction;
class CupertinoNavigationBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyMiddle?:boolean,
          previousPageTitle?:string,
          middle?:Widget,
          trailing?:Widget,
          border?:Border,
          backgroundColor?:Color,
          brightness?:Brightness,
          padding?:EdgeInsets,
          actionsForegroundColor?:Color,
          transitionBetweenRoutes?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.automaticallyImplyLeading = config.automaticallyImplyLeading;
            this.automaticallyImplyMiddle = config.automaticallyImplyMiddle;
            this.previousPageTitle = config.previousPageTitle;
            this.middle = config.middle;
            this.trailing = config.trailing;
            this.border = config.border;
            this.backgroundColor = config.backgroundColor;
            this.brightness = config.brightness;
            this.padding = config.padding;
            this.actionsForegroundColor = config.actionsForegroundColor;
            this.transitionBetweenRoutes = config.transitionBetweenRoutes;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyMiddle?:boolean,
          previousPageTitle?:string,
          middle?:Widget,
          trailing?:Widget,
          border?:Border,
          backgroundColor?:Color,
          brightness?:Brightness,
          padding?:EdgeInsets,
          actionsForegroundColor?:Color,
          transitionBetweenRoutes?:boolean,
        }
     */
    static new(config) {
        return new CupertinoNavigationBar(config);
    }
}
exports.CupertinoNavigationBar = CupertinoNavigationBar;
class CupertinoNavigationBarBackButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          color?:Color,
          previousPageTitle?:string,
          onPressed?:VoidCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.color = config.color;
            this.previousPageTitle = config.previousPageTitle;
            this.onPressed = config.onPressed;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          color?:Color,
          previousPageTitle?:string,
          onPressed?:VoidCallback,
        }
     */
    static new(config) {
        return new CupertinoNavigationBarBackButton(config);
    }
}
exports.CupertinoNavigationBarBackButton = CupertinoNavigationBarBackButton;
class CupertinoSlider extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:number,
          onChanged:VoidCallbackNumber,
          onChangeStart?:VoidCallbackNumber,
          onChangeEnd?:VoidCallbackNumber,
          min?:number,
          max?:number,
          divisions?:number,
          activeColor?:Color,
          thumbColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.onChangeStart = config.onChangeStart;
            this.onChangeEnd = config.onChangeEnd;
            this.min = config.min;
            this.max = config.max;
            this.divisions = config.divisions;
            this.activeColor = config.activeColor;
            this.thumbColor = config.thumbColor;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:number,
          onChanged:VoidCallbackNumber,
          onChangeStart?:VoidCallbackNumber,
          onChangeEnd?:VoidCallbackNumber,
          min?:number,
          max?:number,
          divisions?:number,
          activeColor?:Color,
          thumbColor?:Color,
        }
     */
    static new(config) {
        return new CupertinoSlider(config);
    }
}
exports.CupertinoSlider = CupertinoSlider;
class CupertinoSwitch extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          trackColor?:Color,
          dragStartBehavior?:DragStartBehavior,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.onChanged = config.onChanged;
            this.activeColor = config.activeColor;
            this.trackColor = config.trackColor;
            this.dragStartBehavior = config.dragStartBehavior;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidCallbackBoolean,
          activeColor?:Color,
          trackColor?:Color,
          dragStartBehavior?:DragStartBehavior,
        }
     */
    static new(config) {
        return new CupertinoSwitch(config);
    }
}
exports.CupertinoSwitch = CupertinoSwitch;
class CupertinoScrollbar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          controller?:ScrollController,
          isAlwaysShown?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.controller = config.controller;
            this.isAlwaysShown = config.isAlwaysShown;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          controller?:ScrollController,
          isAlwaysShown?:boolean,
        }
     */
    static new(config) {
        return new CupertinoScrollbar(config);
    }
}
exports.CupertinoScrollbar = CupertinoScrollbar;
class CupertinoSliverNavigationBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          largeTitle?:Widget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyTitle?:boolean,
          previousPageTitle?:string,
          middle?:Widget,
          trailing?:Widget,
          border?:Border,
          backgroundColor?:Color,
          brightness?:Brightness,
          padding?:EdgeInsets,
          actionsForegroundColor?:Color,
          transitionBetweenRoutes?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.leading = config.leading;
            this.largeTitle = config.largeTitle;
            this.automaticallyImplyLeading = config.automaticallyImplyLeading;
            this.automaticallyImplyTitle = config.automaticallyImplyTitle;
            this.previousPageTitle = config.previousPageTitle;
            this.middle = config.middle;
            this.trailing = config.trailing;
            this.border = config.border;
            this.backgroundColor = config.backgroundColor;
            this.brightness = config.brightness;
            this.padding = config.padding;
            this.actionsForegroundColor = config.actionsForegroundColor;
            this.transitionBetweenRoutes = config.transitionBetweenRoutes;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          leading?:Widget,
          largeTitle?:Widget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyTitle?:boolean,
          previousPageTitle?:string,
          middle?:Widget,
          trailing?:Widget,
          border?:Border,
          backgroundColor?:Color,
          brightness?:Brightness,
          padding?:EdgeInsets,
          actionsForegroundColor?:Color,
          transitionBetweenRoutes?:boolean,
        }
     */
    static new(config) {
        return new CupertinoSliverNavigationBar(config);
    }
}
exports.CupertinoSliverNavigationBar = CupertinoSliverNavigationBar;
class TestWidget extends Widget {
    /**
     * @param config config:
        {
          colors:Array<Color>,
          stops?:Array<number>,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.colors = config.colors;
            this.stops = config.stops;
        }
    }
    /**
     * @param config config:
        {
          colors:Array<Color>,
          stops?:Array<number>,
        }
     */
    static new(config) {
        return new TestWidget(config);
    }
}
exports.TestWidget = TestWidget;
class CupertinoTabBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidCallbackNumber,
          currentIndex?:number,
          backgroundColor?:Color,
          activeColor?:Color,
          inactiveColor?:Color,
          iconSize?:number,
          border?:Border,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.items = config.items;
            this.onTap = config.onTap;
            this.currentIndex = config.currentIndex;
            this.backgroundColor = config.backgroundColor;
            this.activeColor = config.activeColor;
            this.inactiveColor = config.inactiveColor;
            this.iconSize = config.iconSize;
            this.border = config.border;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidCallbackNumber,
          currentIndex?:number,
          backgroundColor?:Color,
          activeColor?:Color,
          inactiveColor?:Color,
          iconSize?:number,
          border?:Border,
        }
     */
    static new(config) {
        return new CupertinoTabBar(config);
    }
}
exports.CupertinoTabBar = CupertinoTabBar;
class CupertinoTabController extends DartClass {
    /**
     * @param config config:
        {
          initialIndex?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.initialIndex = config.initialIndex;
        }
    }
    /**
     * @param config config:
        {
          initialIndex?:number,
        }
     */
    static new(config) {
        return new CupertinoTabController(config);
    }
}
exports.CupertinoTabController = CupertinoTabController;
class CupertinoTheme extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          data:CupertinoThemeData,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.data = config.data;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          data:CupertinoThemeData,
        }
     */
    static new(config) {
        return new CupertinoTheme(config);
    }
}
exports.CupertinoTheme = CupertinoTheme;
class CupertinoTextThemeData extends DartClass {
    /**
     * @param config config:
        {
          primaryColor?:Color,
          textStyle?:TextStyle,
          actionTextStyle?:TextStyle,
          tabLabelTextStyle?:TextStyle,
          navTitleTextStyle?:TextStyle,
          navLargeTitleTextStyle?:TextStyle,
          navActionTextStyle?:TextStyle,
          pickerTextStyle?:TextStyle,
          dateTimePickerTextStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.primaryColor = config.primaryColor;
            this.textStyle = config.textStyle;
            this.actionTextStyle = config.actionTextStyle;
            this.tabLabelTextStyle = config.tabLabelTextStyle;
            this.navActionTextStyle = config.navActionTextStyle;
            this.navLargeTitleTextStyle = config.navLargeTitleTextStyle;
            this.navTitleTextStyle = config.navTitleTextStyle;
            this.pickerTextStyle = config.pickerTextStyle;
            this.dateTimePickerTextStyle = config.dateTimePickerTextStyle;
        }
    }
    /**
     * @param config config:
        {
          primaryColor?:Color,
          textStyle?:TextStyle,
          actionTextStyle?:TextStyle,
          tabLabelTextStyle?:TextStyle,
          navTitleTextStyle?:TextStyle,
          navLargeTitleTextStyle?:TextStyle,
          navActionTextStyle?:TextStyle,
          pickerTextStyle?:TextStyle,
          dateTimePickerTextStyle?:TextStyle,
        }
     */
    static new(config) {
        return new CupertinoTextThemeData(config);
    }
}
exports.CupertinoTextThemeData = CupertinoTextThemeData;
class CupertinoThemeData extends DartClass {
    /**
     * @param config config:
        {
          primaryColor?:Color,
          brightness?:Brightness,
          primaryContrastingColor?:Color,
          textTheme?:CupertinoTextThemeData,
          barBackgroundColor?:Color,
          scaffoldBackgroundColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.primaryColor = config.primaryColor;
            this.brightness = config.brightness;
            this.primaryContrastingColor = config.primaryContrastingColor;
            this.textTheme = config.textTheme;
            this.barBackgroundColor = config.barBackgroundColor;
            this.scaffoldBackgroundColor = config.scaffoldBackgroundColor;
        }
    }
    /**
     * @param config config:
        {
          primaryColor?:Color,
          brightness?:Brightness,
          primaryContrastingColor?:Color,
          textTheme?:CupertinoTextThemeData,
          barBackgroundColor?:Color,
          scaffoldBackgroundColor?:Color,
        }
     */
    static new(config) {
        return new CupertinoThemeData(config);
    }
}
exports.CupertinoThemeData = CupertinoThemeData;
class EmptyDataWidget extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:string,
          imageName?:string,
          imageSize?:string,
          backgroundColor?:Color,
          titleStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.title = config.title;
            this.imageName = config.imageName;
            this.imageSize = config.imageSize;
            this.backgroundColor = config.backgroundColor;
            this.titleStyle = config.titleStyle;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          title?:string,
          imageName?:string,
          imageSize?:string,
          backgroundColor?:Color,
          titleStyle?:TextStyle,
        }
     */
    static new(config) {
        return new EmptyDataWidget(config);
    }
}
exports.EmptyDataWidget = EmptyDataWidget;
//#endregion
