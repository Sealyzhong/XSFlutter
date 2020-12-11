"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: JS Flutter SDK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyRefresher = exports.EasyRefreshController = exports.EasyRefreshMaterialFooter = exports.EasyRefreshClassicalFooter = exports.EasyRefreshFooter = exports.EasyRefreshMaterialHeader = exports.EasyRefreshClassicalHeader = exports.EasyRefreshHeader = exports.CachedNetworkImage = exports.PullToRefreshRefresher = exports.PullToRefreshController = exports.PullToRefreshConfiguration = exports.PullToRefreshClassicFooter = exports.PullToRefreshFooter = exports.PullToRefreshWaterDropMaterialHeader = exports.PullToRefreshMaterialClassicHeader = exports.PullToRefreshWaterDropHeader = exports.PullToRefreshClassicHeader = exports.PullToRefreshHeader = exports.PullToRefreshLoadStyle = exports.PullToRefreshIconPosition = exports.PullToRefreshLoadStatus = exports.PullToRefreshStatus = exports.PullToRefreshStyle = exports.Dio = exports.DioOptions = exports.DioBaseOptions = exports.DioResponseType = exports.UrlLauncher = exports.FocusScope = exports.Wakelock = exports.PackageInfo = exports.ScreenInfo = exports.Sp = exports.Loading = exports.Dialog = exports.ShowDatePicker = exports.CustomPopupMenuItem = exports.ShowCustomPopupMenu = exports.ShowSimpleActionSheet = exports.ShowCustomActionSheet = exports.ShowSimpleCupertinoDialog = exports.ShowSimpleAlertDialog = exports.ShowSimpleCustomDialog = exports.SimpleCustomDialogButtonInfo = exports.ShowCustomAlertDialog = exports.CustomAlertDialogStyle = exports.CustomAlertDialogButton = exports.CustomAlertDialogAnimationType = exports.SimpleDialogButtonInfo = exports.CupertinoActionSheetAction = exports.CupertinoActionSheet = exports.ShowCupertinoModalPopup = exports.BottomSheet = exports.ShowModalBottomSheet = exports.ShowGeneralDialog = exports.CupertinoAlertDialog = exports.ShowCupertinoDialog = exports.SimpleDialog = exports.AlertDialog = exports.ShowDialog = exports.ShowBaseDialog = exports.EmptyDataWidget = exports.CupertinoTextThemeData = exports.CupertinoTheme = exports.CupertinoTabView = exports.CupertinoTabController = exports.CupertinoTabBar = exports.TestWidget = exports.CupertinoSliverNavigationBar = exports.CupertinoScrollbar = exports.CupertinoSlidingSegmentedControl = exports.CupertinoSegmentedControl = exports.CupertinoSwitch = exports.CupertinoSlider = exports.CupertinoNavigationBarBackButton = exports.CupertinoNavigationBar = exports.CupertinoDialogAction = exports.CupertinoButton = exports.CupertinoActivityIndicator = exports.WidgetSpan = exports.WillPopScope = exports.Wrap = exports.Visibility = exports.VerticalDivider = exports.UnconstrainedBox = exports.TextField = exports.TextFormField = exports.Texture = exports.TextSpan = exports.Text = exports.Title = exports.TabPageSelector = exports.TabPageSelectorIndicator = exports.TabBarView = exports.Tab = exports.TabBar = exports.Table = exports.Tooltip = exports.Transform = exports.TableCell = exports.TableRow = exports.SelectableText = exports.SliverVisibility = exports.SnackBarAction = exports.SnackBar = exports.Scrollbar = exports.SliverSafeArea = exports.SafeArea = exports.ScaffoldState = exports.Scaffold = exports.SliverToBoxAdapter = exports.SingleChildScrollView = exports.SliverOverlapAbsorber = exports.SliverFixedExtentList = exports.SliverOverlapInjector = exports.SliverOpacity = exports.SliverList = exports.SliverChildBuilderDelegate = exports.SliverChildListDelegate = exports.SliverChildDelegate = exports.SliverGridDelegateWithFixedCrossAxisCount = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGridDelegate = exports.SliverGrid = exports.SliverPadding = exports.SliverFillRemaining = exports.SliverFillViewport = exports.SliverAppBar = exports.Stack = exports.SizedOverflowBox = exports.SizedBox = exports.Slider = exports.Switch = exports.SwitchListTile = exports.Semantics = exports.Spacer = exports.Stepper = exports.Step = exports.RichText = exports.RawMaterialButton = exports.RadioListTile = exports.Radio = exports.RaisedButton = exports.RotatedBox = exports.RawImage = exports.RepaintBoundary = exports.RawChip = exports.Row = exports.PageView = exports.PopupMenuItem = exports.PopupMenuButton = exports.Placeholder = exports.PreferredSizeWidget = exports.PreferredSize = exports.PositionedDirectional = exports.Positioned = exports.PhysicalModel = exports.Padding = exports.OutlineButton = exports.OverflowBox = exports.Offstage = exports.Opacity = exports.Navigator = exports.NestedScrollView = exports.NotificationListener = exports.MaterialBanner = exports.MaterialPageRoute = exports.Material = exports.LayoutBuilder = exports.ListView = exports.ListTile = exports.ListBody = exports.LimitedBox = exports.LabelTitle = exports.KeyedSubtree = exports.Image = exports.InkWell = exports.InkResponse = exports.ImageIcon = exports.Icon = exports.IconButton = exports.IgnorePointer = exports.IndexedStack = exports.IntrinsicWidth = exports.IntrinsicHeight = exports.IndexedSemantics = exports.IconSpan = exports.InputChip = exports.InputDecorator = exports.GridPaper = exports.GridTile = exports.GridTileBar = exports.GridView = exports.GestureDetector = exports.FractionalTranslation = exports.FlutterLogo = exports.FlexibleSpaceBarSettings = exports.FlexibleSpaceBar = exports.FloatingActionButton = exports.FlatButton = exports.Flow = exports.Flex = exports.FractionallySizedBox = exports.FittedBox = exports.FilterChip = exports.Flexible = exports.ExpansionTile = exports.ExpandIcon = exports.Expanded = exports.ExcludeSemantics = exports.DecoratedBoxTransition = exports.DefaultTextStyle = exports.DecorationImage = exports.DefaultTabController = exports.DropdownButton = exports.DecoratedBox = exports.DropdownMenuItem = exports.Directionality = exports.Drawer = exports.DrawerHeader = exports.Divider = exports.Card = exports.CustomScrollView = exports.CustomMultiChildLayout = exports.Column = exports.ConstrainedBox = exports.ClipRRect = exports.ClipOval = exports.ClipRect = exports.CheckboxEx = exports.Checkbox = exports.CheckboxListTile = exports.CheckedModeBanner = exports.Chip = exports.CircleAvatar = exports.ColoredBox = exports.ChoiceChip = exports.Center = exports.Container = exports.CloseButton = exports.ColorFiltered = exports.Builder = exports.BackButton = exports.BackButtonIcon = exports.BottomNavigationBar = exports.BottomAppBar = exports.BlockSemantics = exports.ButtonBar = exports.Baseline = exports.Banner = exports.BottomNavigationBarItem = exports.AnimatedDefaultTextStyle = exports.AnimatedSize = exports.AnimatedPositioned = exports.AnimatedPhysicalModel = exports.AnimatedContainer = exports.AnimatedBuilder = exports.AnimatedOpacity = exports.AnimatedCrossFade = exports.AnnotatedRegion = exports.AspectRatio = exports.Align = exports.AppBar = exports.Animation = exports.AnimationController = exports.ActionChip = exports.AbsorbPointer = exports.CupertinoIcons = exports.Icons = exports.ThemeData = exports.DataTableThemeData = exports.TextSelectionThemeData = exports.TimePickerThemeData = exports.BottomNavigationBarThemeData = exports.ButtonBarThemeData = exports.DividerThemeData = exports.MaterialBannerThemeData = exports.PopupMenuThemeData = exports.BottomSheetThemeData = exports.SnackBarThemeData = exports.CupertinoThemeData = exports.NavigationRailThemeData = exports.FloatingActionButtonThemeData = exports.DialogTheme = exports.BottomAppBarTheme = exports.AppBarTheme = exports.ChipThemeData = exports.CardTheme = exports.TooltipThemeData = exports.TabBarTheme = exports.SliderThemeData = exports.IconThemeData = exports.InputDecorationTheme = exports.TextTheme = exports.ToggleButtonsThemeData = exports.ButtonThemeData = exports.ColorScheme = exports.Velocity = exports.VisualDensity = exports.Vector4 = exports.Vector3 = exports.Uint8List = exports.Uri = exports.MaskTextInputFormatter = exports.FilteringTextInputFormatter = exports.LengthLimitingTextInputFormatter = exports.TextInputFormatter = exports.Tween = exports.TextInputType = exports.ToolbarOptions = exports.TextEditingController = exports.TabController = exports.MinColumnWidth = exports.MaxColumnWidth = exports.FlexColumnWidth = exports.FractionColumnWidth = exports.FixedColumnWidth = exports.IntrinsicColumnWidth = exports.TableColumnWidth = exports.TableBorder = exports.TextStyle = exports.TapUpDetails = exports.TapDownDetails = exports.TextAlignVertical = exports.OutlineInputBorder = exports.UnderlineInputBorder = exports.InputBorder = exports.StadiumBorder = exports.RoundedRectangleBorder = exports.ContinuousRectangleBorder = exports.BeveledRectangleBorder = exports.CircleBorder = exports.OutlinedBorder = exports.BorderDirectional = exports.Border = exports.BoxBorder = exports.ShapeBorder = exports.RangeMaintainingScrollPhysics = exports.NeverScrollableScrollPhysics = exports.ClampingScrollPhysics = exports.BouncingScrollPhysics = exports.PageScrollPhysics = exports.FixedExtentScrollPhysics = exports.AlwaysScrollableScrollPhysics = exports.ScrollPhysics = exports.ScrollbarPainter = exports.Shadow = exports.ScrollController = exports.SpringDescription = exports.SystemUiOverlayStyle = exports.StrutStyle = exports.Size = exports.ScaleEndDetails = exports.ScaleUpdateDetails = exports.ScaleStartDetails = exports.ImageShader = exports.Shader = exports.RSTransform = exports.RRect = exports.RelativeRect = exports.Rect = exports.RegExp = exports.Radius = exports.Quaternion = exports.PageController = exports.Offset = exports.AutomaticNotchedShape = exports.CircularNotchedRectangle = exports.NotchedShape = exports.Matrix4 = exports.MaskFilter = exports.BindKey = exports.GlobalKey = exports.UniqueKey = exports.ValueKey = exports.Key = exports.InputDecoration = exports.IconData = exports.ImageProvider = exports.ImageFilter = exports.SweepGradient = exports.RadialGradient = exports.LinearGradient = exports.Gradient = exports.GradientRotation = exports.GradientTransform = exports.File = exports.FractionalOffset = exports.FocusNode = exports.Future = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.EdgeInsetsGeometry = exports.FlutterLogoDecoration = exports.BoxDecoration = exports.Decoration = exports.Duration = exports.DragEndDetails = exports.DragUpdateDetails = exports.DragStartDetails = exports.DragDownDetails = exports.ColorFilter = exports.Colors = exports.Color = exports.BoxConstraints = exports.Constraints = exports.BoxShadow = exports.BannerPainter = exports.BorderRadiusDirectional = exports.BorderRadius = exports.BorderRadiusGeometry = exports.BorderSide = exports.NetworkAssetBundle = exports.PlatformAssetBundle = exports.AssetBundle = exports.AlignmentDirectional = exports.Alignment = exports.AlignmentGeometry = exports.WrapCrossAlignment = exports.WrapAlignment = exports.VerticalDirection = exports.TargetPlatform = exports.TabBarIndicatorSize = exports.TableCellVerticalAlignment = exports.TextInputAction = exports.TextCapitalization = exports.TextOverflow = exports.TextDecoration = exports.TextBaseline = exports.TextDecorationStyle = exports.TextDirection = exports.TextAlign = exports.TextWidthBasis = exports.SmartQuotesType = exports.SmartDashesType = exports.TileMode = exports.ScrollPositionAlignmentPolicy = exports.SnackBarClosedReason = exports.StretchMode = exports.StrokeJoin = exports.StrokeCap = exports.ScrollViewKeyboardDismissBehavior = exports.ShowValueIndicator = exports.SnackBarBehavior = exports.StepperType = exports.StepState = exports.StackFit = exports.RenderComparison = exports.PointerSignalKind = exports.PointerDeviceKind = exports.PointerChange = exports.PlaceholderAlignment = exports.PaintingStyle = exports.Overflow = exports.NavigationRailLabelType = exports.NavigationMode = exports.MaterialType = exports.MaterialTapTargetSize = exports.MainAxisSize = exports.MainAxisAlignment = exports.ListTileControlAffinity = exports.ListTileStyle = exports.ImageRepeat = exports.HitTestBehavior = exports.FloatingActionButtonLocation = exports.FilterQuality = exports.FontStyle = exports.FlexFit = exports.FontWeight = exports.FloatingLabelBehavior = exports.FlutterLogoStyle = exports.DrawerAlignment = exports.DecorationPosition = exports.DatePickerEntryMode = exports.DatePickerMode = exports.DragStartBehavior = exports.CrossFadeState = exports.CollapseMode = exports.Clip = exports.Curve = exports.CrossAxisAlignment = exports.BoxWidthStyle = exports.BoxHeightStyle = exports.ButtonBarLayoutBehavior = exports.ButtonTextTheme = exports.BoxShape = exports.BottomNavigationBarType = exports.BorderStyle = exports.BlurStyle = exports.Brightness = exports.BannerLocation = exports.BoxFit = exports.BlendMode = exports.AnimationBehavior = exports.AnimationStatus = exports.AxisDirection = exports.Axis = exports.WidgetState = exports.StatelessWidget = exports.StatefulWidget = exports.BaseWidget = exports.WidgetMgr = exports.WidgetTree = exports.WidgetHelper = exports.BuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.Log = exports.JSFramework = exports.JSFlutterApp = exports.JSBridge = exports.Convert = exports.Widget = exports.DartClass = exports.JSCallConfig = exports.JSWidgetMirrorMgr = void 0;
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
        let basicMethodCall = new JSMethodCall("JSBridgeCreateMirrorObj", flutterCallConfig);
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
        let basicMethodCall = new JSMethodCall("JSBridgeInvokeMirrorObjWithCallback", flutterCallConfig);
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
        let bc = new BuildContext(widget);
        widget.buildContext = bc;
        this.rootWidget?.helper?.addChildWidget(widget);
        let app = this;
        this.buildRootWidget(widget);
    }
    ///JS侧入口API
    //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
    navigatorPush(widget, args) {
        let bc = new BuildContext(widget);
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
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
    encodeJSON() {
        return JSON.stringify({ "funcName": this.name, "args": this.args });
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
    constructor(widget, parentBuildContext) {
        this.widget = widget;
        this.widget.buildContext = this;
        this.parentBuildContext = parentBuildContext;
        this.inheritedInfo = {};
    }
    static inheritBuildContext(widget, buildContext) {
        var context = new BuildContext(widget, buildContext);
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
        let tempWidgetTree = new WidgetTree(this.widget.buildWidgetDataSeq);
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
        this.widget.buildingWidgetTree = new WidgetTree("1");
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
    constructor(buildWidgetDataSeq) {
        this.buildWidgetDataSeq = "";
        this.buildWidgetDataSeq = buildWidgetDataSeq;
        this.childrenWidget = new Map();
        this.callbackID2fun = new Map();
        this.widgetTreeObjMap = null;
        this.ownerWidget = undefined;
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
//****** DatePickerMode ******
var DatePickerMode;
(function (DatePickerMode) {
    DatePickerMode["day"] = "day";
    DatePickerMode["year"] = "year";
})(DatePickerMode = exports.DatePickerMode || (exports.DatePickerMode = {}));
//****** DatePickerEntryMode ******
var DatePickerEntryMode;
(function (DatePickerEntryMode) {
    DatePickerEntryMode["calendar"] = "calendar";
    DatePickerEntryMode["input"] = "input";
})(DatePickerEntryMode = exports.DatePickerEntryMode || (exports.DatePickerEntryMode = {}));
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
//****** NavigationRailLabelType ******
var NavigationRailLabelType;
(function (NavigationRailLabelType) {
    NavigationRailLabelType["none"] = "none";
    NavigationRailLabelType["selected"] = "selected";
    NavigationRailLabelType["all"] = "all";
})(NavigationRailLabelType = exports.NavigationRailLabelType || (exports.NavigationRailLabelType = {}));
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
//****** StepState ******
var StepState;
(function (StepState) {
    StepState["indexed"] = "indexed";
    StepState["editing"] = "editing";
    StepState["complete"] = "complete";
    StepState["disabled"] = "disabled";
    StepState["error"] = "error";
})(StepState = exports.StepState || (exports.StepState = {}));
//****** StepperType ******
var StepperType;
(function (StepperType) {
    StepperType["vertical"] = "vertical";
    StepperType["horizontal"] = "horizontal";
})(StepperType = exports.StepperType || (exports.StepperType = {}));
//****** SnackBarBehavior ******
var SnackBarBehavior;
(function (SnackBarBehavior) {
    SnackBarBehavior["fixed"] = "fixed";
    SnackBarBehavior["floating"] = "floating";
})(SnackBarBehavior = exports.SnackBarBehavior || (exports.SnackBarBehavior = {}));
//****** ShowValueIndicator ******
var ShowValueIndicator;
(function (ShowValueIndicator) {
    ShowValueIndicator["onlyForDiscrete"] = "onlyForDiscrete";
    ShowValueIndicator["onlyForContinuous"] = "onlyForContinuous";
    ShowValueIndicator["always"] = "always";
    ShowValueIndicator["never"] = "passthrounevergh";
})(ShowValueIndicator = exports.ShowValueIndicator || (exports.ShowValueIndicator = {}));
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
}
exports.Alignment = Alignment;
Alignment.topLeft = new Alignment(-1.0, -1.0);
Alignment.topCenter = new Alignment(0.0, -1.0);
Alignment.topRight = new Alignment(1.0, -1.0);
Alignment.centerLeft = new Alignment(-1.0, 0.0);
Alignment.center = new Alignment(0.0, 0.0);
Alignment.centerRight = new Alignment(1.0, 0.0);
Alignment.bottomLeft = new Alignment(-1.0, 1.0);
Alignment.bottomCenter = new Alignment(0.0, 1.0);
Alignment.bottomRight = new Alignment(1.0, 1.0);
///AlignmentDirectional
class AlignmentDirectional extends AlignmentGeometry {
    constructor(start, y) {
        super();
        this.start = start;
        this.y = y;
    }
}
exports.AlignmentDirectional = AlignmentDirectional;
AlignmentDirectional.topStart = new AlignmentDirectional(-1.0, -1.0);
AlignmentDirectional.topCenter = new AlignmentDirectional(0.0, -1.0);
AlignmentDirectional.topEnd = new AlignmentDirectional(1.0, -1.0);
AlignmentDirectional.centerStart = new AlignmentDirectional(-1.0, 0.0);
AlignmentDirectional.center = new AlignmentDirectional(0.0, 0.0);
AlignmentDirectional.centerEnd = new AlignmentDirectional(1.0, 0.0);
AlignmentDirectional.bottomStart = new AlignmentDirectional(-1.0, 1.0);
AlignmentDirectional.bottomCenter = new AlignmentDirectional(0.0, 1.0);
AlignmentDirectional.bottomEnd = new AlignmentDirectional(1.0, 1.0);
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
}
exports.PlatformAssetBundle = PlatformAssetBundle;
//****** NetworkAssetBundle ******
class NetworkAssetBundle extends AssetBundle {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
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
}
exports.BoxConstraints = BoxConstraints;
//#endregion
//#region Color
class Color extends DartClass {
    constructor(value) {
        super();
        this.value = value;
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
Colors.white60 = new Color(0x99FFFFFF);
Colors.white54 = new Color(0x8affffff);
Colors.white38 = new Color(0x62FFFFFF);
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
//#endregion
//#region ColorFilter
class ColorFilter extends DartClass {
    constructor(color, blendMode) {
        super();
        this.color = color;
        this.blendMode = blendMode;
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
    /**
     * 定时处理
     * @param duration
     * @param onBack
     */
    static timer(duration, onBack) {
        dart_sdk.async.Timer.new(duration, onBack);
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
}
exports.FocusNode = FocusNode;
//****** FractionalOffset ******
class FractionalOffset extends DartClass {
    constructor(dx, dy) {
        super();
        this.dx = dx;
        this.dy = dy;
    }
}
exports.FractionalOffset = FractionalOffset;
FractionalOffset.topLeft = new FractionalOffset(0.0, 0.0);
FractionalOffset.topCenter = new FractionalOffset(0.5, 0.0);
FractionalOffset.topRight = new FractionalOffset(1.0, 0.0);
FractionalOffset.centerLeft = new FractionalOffset(0.0, 0.5);
FractionalOffset.center = new FractionalOffset(0.5, 0.5);
FractionalOffset.centerRight = new FractionalOffset(1.0, 0.5);
FractionalOffset.bottomLeft = new FractionalOffset(0.0, 1.0);
FractionalOffset.bottomCenter = new FractionalOffset(0.5, 1.0);
FractionalOffset.bottomRight = new FractionalOffset(1.0, 1.0);
//****** File ******
class File extends DartClass {
    constructor(path) {
        super();
        this.path = path;
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
}
exports.Key = Key;
class ValueKey extends Key {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.ValueKey = ValueKey;
class UniqueKey extends Key {
    constructor() {
        super();
    }
}
exports.UniqueKey = UniqueKey;
class GlobalKey extends Key {
    constructor() {
        super();
    }
}
exports.GlobalKey = GlobalKey;
class BindKey extends Key {
    constructor() {
        super();
        this.createMirrorID();
    }
}
exports.BindKey = BindKey;
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
    static identity() {
        return new Matrix4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
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
}
exports.CircularNotchedRectangle = CircularNotchedRectangle;
//****** AutomaticNotchedShape ******
class AutomaticNotchedShape extends NotchedShape {
    constructor(host, guest) {
        super();
        this.host = host;
        this.guest = guest;
    }
}
exports.AutomaticNotchedShape = AutomaticNotchedShape;
//#endregion
//#endregion
//#region ------- O -------
//****** Offset ****** 
class Offset extends DartClass {
    constructor(dx, dy) {
        super();
        this.dx = dx;
        this.dy = dy;
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
class PageController extends DartClass {
    /**
     * @param config config:
        {
          initialPage?:number,
          keepPage?:boolean,
          viewportFraction?:number,
        }
     */
    constructor(config) {
        super();
        this.createMirrorID();
        if (config != null && config != undefined) {
            this.initialPage = this.initialPage;
            this.keepPage = this.keepPage;
            this.viewportFraction = this.viewportFraction;
        }
    }
    /**
     * @param config config:
        {
          page:number,
          duration:Duration,
          curve:Curve,
        }
     */
    animateToPage(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "animateToPage",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration:Duration,
          curve:Curve,
        }
     */
    nextPage(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "nextPage",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration:Duration,
          curve:Curve,
        }
     */
    previousPage(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "previousPage",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          page:number,
        }
     */
    jumpToPage(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "jumpToPage",
            args: config
        }));
    }
    //偏移量
    async page() {
        var v = await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "page",
        }));
        return Convert.toNumber(v);
    }
}
exports.PageController = PageController;
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
}
exports.SystemUiOverlayStyle = SystemUiOverlayStyle;
SystemUiOverlayStyle.light = new SystemUiOverlayStyle({
    systemNavigationBarColor: new Color(0xff000000),
    systemNavigationBarIconBrightness: Brightness.light,
    statusBarBrightness: Brightness.light,
    statusBarIconBrightness: Brightness.dark
});
SystemUiOverlayStyle.dark = new SystemUiOverlayStyle({
    systemNavigationBarColor: new Color(0xff000000),
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
        JSFramework.invokeFlutterFunction(new JSCallConfig({
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
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "jumpTo",
            args: config
        }));
    }
    //偏移量
    async offset() {
        var v = await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "offset",
        }));
        return Convert.toNumber(v);
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
}
exports.AlwaysScrollableScrollPhysics = AlwaysScrollableScrollPhysics;
//****** FixedExtentScrollPhysics ******
class FixedExtentScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
}
exports.FixedExtentScrollPhysics = FixedExtentScrollPhysics;
//****** PageScrollPhysics ******
class PageScrollPhysics extends ScrollPhysics {
    /**
      * @param config config:
        {
          parent?:ScrollPhysics,
        }
      */
    constructor(config) {
        super(config);
    }
}
exports.PageScrollPhysics = PageScrollPhysics;
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
}
exports.TextAlignVertical = TextAlignVertical;
TextAlignVertical.top = new TextAlignVertical(-1.0);
TextAlignVertical.center = new TextAlignVertical(0.0);
TextAlignVertical.bottom = new TextAlignVertical(1.0);
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
}
exports.IntrinsicColumnWidth = IntrinsicColumnWidth;
class FixedColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.FixedColumnWidth = FixedColumnWidth;
class FractionColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.FractionColumnWidth = FractionColumnWidth;
class FlexColumnWidth extends TableColumnWidth {
    constructor(value) {
        super();
        this.value = value;
    }
}
exports.FlexColumnWidth = FlexColumnWidth;
class MaxColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
}
exports.MaxColumnWidth = MaxColumnWidth;
class MinColumnWidth extends TableColumnWidth {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
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
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        if (config != null && config != undefined) {
            this.initialIndex = config.initialIndex;
            this.length = config.length;
            this.vsync = config.vsync;
        }
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
    //清理值
    clear() {
        this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "clear",
        }));
    }
    //获取文本值
    async getText() {
        var v = await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "getText",
        }));
        return String(v);
    }
    //设置文本值
    async setText(text) {
        this.invokeMirrorObjWithCallback(new JSCallConfig({
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
}
exports.ToolbarOptions = ToolbarOptions;
class TextInputType extends DartClass {
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
}
exports.LengthLimitingTextInputFormatter = LengthLimitingTextInputFormatter;
class FilteringTextInputFormatter extends TextInputFormatter {
    constructor(allow, filterPattern, replacementString) {
        super();
        this.allow = allow;
        this.filterPattern = filterPattern;
        this.replacementString = replacementString;
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
}
exports.Uri = Uri;
//****** Uint8List ******
class Uint8List extends DartClass {
    constructor(length) {
        super();
        this.length = length;
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
}
exports.VisualDensity = VisualDensity;
VisualDensity.comfortable = new VisualDensity({ horizontal: -1.0, vertical: -1.0 });
VisualDensity.compact = new VisualDensity({ horizontal: -2.0, vertical: -2.0 });
VisualDensity.standard = new VisualDensity();
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
    static zero() {
        var v = new Velocity();
        v.constructorName = "zero";
        return v;
    }
}
exports.Velocity = Velocity;
class ColorScheme extends DartClass {
    /**
     * @param config config:
        {
          primary:Color,
          primaryVariant:Color,
          secondary:Color,
          secondaryVariant:Color,
          surface:Color,
          background:Color,
          error:Color,
          onPrimary:Color,
          onSecondary:Color,
          onSurface:Color,
          onBackground:Color,
          onError:Color,
          brightness?:Brightness,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.primary = config.primary;
            this.primaryVariant = config.primaryVariant;
            this.secondary = config.secondary;
            this.secondaryVariant = config.secondaryVariant;
            this.surface = config.surface;
            this.background = config.background;
            this.error = config.error;
            this.onPrimary = config.onPrimary;
            this.onSecondary = config.onSecondary;
            this.onSurface = config.onSurface;
            this.onBackground = config.background;
            this.onError = config.onError;
            this.brightness = config.brightness;
        }
    }
}
exports.ColorScheme = ColorScheme;
class ButtonThemeData extends DartClass {
    /**
     * @param config config:
        {
          textTheme?:ButtonTextTheme,
          minWidth?:number,
          height?:number,
          padding?:EdgeInsets,
          shape?:ShapeBorder,
          layoutBehavior?:ButtonBarLayoutBehavior,
          alignedDropdown?:boolean,
          buttonColor?:Color,
          disabledColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorScheme?:ColorScheme,
          materialTapTargetSize?:MaterialTapTargetSize,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.textTheme = config.textTheme;
            this.minWidth = config.minWidth;
            this.height = config.height;
            this.padding = config.padding;
            this.shape = config.shape;
            this.layoutBehavior = config.layoutBehavior;
            this.alignedDropdown = config.alignedDropdown;
            this.buttonColor = config.buttonColor;
            this.disabledColor = config.disabledColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.colorScheme = config.colorScheme;
            this.materialTapTargetSize = config.materialTapTargetSize;
        }
    }
}
exports.ButtonThemeData = ButtonThemeData;
class ToggleButtonsThemeData extends DartClass {
    /**
     * @param config config:
        {
          textStyle?:TextStyle,
          constraints?:BoxConstraints,
          color?:Color,
          selectedColor?:Color,
          disabledColor?:Color,
          fillColor?:Color,
          focusColor?:Color,
          highlightColor?:Color,
          hoverColor?:Color,
          splashColor?:Color,
          borderColor?:Color,
          selectedBorderColor?:Color,
          disabledBorderColor?:Color,
          borderRadius?:BorderRadius,
          borderWidth?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.textStyle = config.textStyle;
            this.constraints = config.constraints;
            this.color = config.color;
            this.selectedColor = config.selectedColor;
            this.disabledColor = config.disabledColor;
            this.fillColor = config.fillColor;
            this.focusColor = config.focusColor;
            this.highlightColor = config.highlightColor;
            this.hoverColor = config.hoverColor;
            this.splashColor = config.splashColor;
            this.borderColor = config.borderColor;
            this.selectedBorderColor = config.selectedBorderColor;
            this.disabledBorderColor = config.disabledBorderColor;
            this.borderRadius = config.borderRadius;
            this.borderWidth = config.borderWidth;
        }
    }
}
exports.ToggleButtonsThemeData = ToggleButtonsThemeData;
class TextTheme extends DartClass {
    /**
     * @param config config:
        {
          headline1?:TextStyle,
          headline2?:TextStyle,
          headline3?:TextStyle,
          headline4?:TextStyle,
          headline5?:TextStyle,
          headline6?:TextStyle,
          subtitle1?:TextStyle,
          subtitle2?:TextStyle,
          bodyText1?:TextStyle,
          bodyText2?:TextStyle,
          caption?:TextStyle,
          button?:TextStyle,
          overline?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.headline1 = config.headline1;
            this.headline2 = config.headline2;
            this.headline3 = config.headline3;
            this.headline4 = config.headline4;
            this.headline5 = config.headline5;
            this.headline6 = config.headline6;
            this.subtitle1 = config.subtitle1;
            this.subtitle2 = config.subtitle2;
            this.bodyText1 = config.bodyText1;
            this.bodyText2 = config.bodyText2;
            this.caption = config.caption;
            this.button = config.button;
            this.overline = config.overline;
        }
    }
}
exports.TextTheme = TextTheme;
class InputDecorationTheme extends DartClass {
    /**
     * @param config config:
        {
        labelStyle?:TextStyle,
        helperStyle?:TextStyle,
        helperMaxLines?:number,
        hintStyle?:TextStyle,
        errorStyle?:TextStyle,
        errorMaxLines?:number,
        floatingLabelBehavior?:FloatingLabelBehavior,
        isDense?:boolean,
        contentPadding?:EdgeInsets,
        isCollapsed?:boolean,
        prefixStyle?:TextStyle,
        suffixStyle?:TextStyle,
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
        alignLabelWithHint?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.labelStyle = config.labelStyle;
            this.helperStyle = config.helperStyle;
            this.helperMaxLines = config.helperMaxLines;
            this.hintStyle = config.hintStyle;
            this.errorStyle = config.errorStyle;
            this.errorMaxLines = config.errorMaxLines;
            this.floatingLabelBehavior = config.floatingLabelBehavior;
            this.isDense = config.isDense;
            this.contentPadding = config.contentPadding;
            this.prefixStyle = config.prefixStyle;
            this.suffixStyle = config.suffixStyle;
            this.counterStyle = config.counterStyle;
            this.filled = config.filled;
            this.fillColor = config.fillColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.errorBorder = config.errorBorder;
            this.focusColor = config.focusColor;
            this.focusedErrorBorder = config.focusedErrorBorder;
            this.disabledBorder = config.disabledBorder;
            this.border = config.border;
            this.alignLabelWithHint = config.alignLabelWithHint;
        }
    }
}
exports.InputDecorationTheme = InputDecorationTheme;
class IconThemeData extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          opacity?:number,
          size?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.opacity = config.opacity;
            this.size = config.size;
        }
    }
}
exports.IconThemeData = IconThemeData;
class SliderThemeData extends DartClass {
    /**
     * @param config config:
        {
          trackHeight?:number,
          activeTrackColor?:Color,
          inactiveTrackColor?:Color,
          disabledActiveTrackColor?:Color,
          disabledInactiveTrackColor?:Color,
          activeTickMarkColor?:Color,
          inactiveTickMarkColor?:Color,
          disabledActiveTickMarkColor?:Color,
          disabledInactiveTickMarkColor?:Color,
          thumbColor?:Color,
          overlappingShapeStrokeColor?:Color,
          disabledThumbColor?:Color,
          overlayColor?:Color,
          valueIndicatorColor?:Color,
          showValueIndicator?:ShowValueIndicator,
          valueIndicatorTextStyle?:TextStyle,
          minThumbSeparation?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.trackHeight = config.trackHeight;
            this.activeTrackColor = config.activeTrackColor;
            this.inactiveTrackColor = config.inactiveTrackColor;
            this.disabledActiveTrackColor = config.disabledActiveTrackColor;
            this.disabledInactiveTrackColor = config.disabledInactiveTrackColor;
            this.activeTickMarkColor = config.activeTickMarkColor;
            this.inactiveTickMarkColor = config.inactiveTickMarkColor;
            this.disabledActiveTickMarkColor = config.disabledActiveTickMarkColor;
            this.disabledInactiveTickMarkColor = config.disabledInactiveTickMarkColor;
            this.thumbColor = config.thumbColor;
            this.overlappingShapeStrokeColor = config.overlappingShapeStrokeColor;
            this.disabledThumbColor = config.disabledThumbColor;
            this.overlayColor = config.overlayColor;
            this.valueIndicatorColor = config.valueIndicatorColor;
            this.showValueIndicator = config.showValueIndicator;
            this.valueIndicatorTextStyle = config.valueIndicatorTextStyle;
            this.minThumbSeparation = config.minThumbSeparation;
        }
    }
}
exports.SliderThemeData = SliderThemeData;
class TabBarTheme extends DartClass {
    /**
     * @param config config:
        {
          indicator?:Decoration,
          indicatorSize?:TabBarIndicatorSize,
          labelColor?:Color,
          labelPadding?:EdgeInsets,
          labelStyle?:TextStyle,
          unselectedLabelColor?:Color,
          unselectedLabelStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.indicator = config.indicator;
            this.indicatorSize = config.indicatorSize;
            this.labelColor = config.labelColor;
            this.labelPadding = config.labelPadding;
            this.labelStyle = config.labelStyle;
            this.unselectedLabelColor = config.unselectedLabelColor;
            this.unselectedLabelStyle = config.unselectedLabelStyle;
        }
    }
}
exports.TabBarTheme = TabBarTheme;
class TooltipThemeData extends DartClass {
    /**
     * @param config config:
        {
          height?:number,
          padding?:EdgeInsets,
          margin?:EdgeInsets,
          verticalOffset?:number,
          preferBelow?:boolean,
          excludeFromSemantics?:boolean,
          decoration?:Decoration,
          textStyle?:TextStyle,
          waitDuration?:Duration,
          showDuration?:Duration,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
        }
    }
}
exports.TooltipThemeData = TooltipThemeData;
class CardTheme extends DartClass {
    /**
     * @param config config:
        {
          clipBehavior?:Clip,
          color?:Color,
          shadowColor?:Color,
          elevation?:number,
          margin?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.clipBehavior = config.clipBehavior;
            this.color = config.color;
            this.shadowColor = config.shadowColor;
            this.elevation = config.elevation;
            this.margin = config.margin;
        }
    }
}
exports.CardTheme = CardTheme;
class ChipThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          deleteIconColor?:Color,
          disabledColor?:Color,
          selectedColor?:Color,
          secondarySelectedColor?:Color,
          shadowColor?:Color,
          selectedShadowColor?:Color,
          showCheckmark?:boolean,
          checkmarkColor?:Color,
          labelPadding?:EdgeInsets,
          padding?:EdgeInsets,
          shape?:ShapeBorder,
          labelStyle?:TextStyle,
          secondaryLabelStyle?:TextStyle,
          brightness?:Brightness,
          elevation?:number,
          pressElevation?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.deleteIconColor = config.deleteIconColor;
            this.disabledColor = config.disabledColor;
            this.selectedColor = config.selectedColor;
            this.secondarySelectedColor = config.secondarySelectedColor;
            this.shadowColor = config.shadowColor;
            this.selectedShadowColor = config.selectedShadowColor;
            this.showCheckmark = config.showCheckmark;
            this.checkmarkColor = config.checkmarkColor;
            this.labelPadding = config.labelPadding;
            this.padding = config.padding;
            this.shape = config.shape;
            this.labelStyle = config.labelStyle;
            this.secondaryLabelStyle = config.secondaryLabelStyle;
            this.brightness = config.brightness;
            this.elevation = config.elevation;
            this.pressElevation = config.pressElevation;
        }
    }
}
exports.ChipThemeData = ChipThemeData;
class AppBarTheme extends DartClass {
    /**
     * @param config config:
        {
          brightness?:Brightness,
          color?:Color,
          elevation?:number,
          shadowColor?:Color,
          iconTheme?:IconThemeData,
          actionsIconTheme?:IconThemeData,
          textTheme?:TextTheme,
          centerTitle?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.brightness = config.brightness;
            this.color = config.color;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.iconTheme = config.iconTheme;
            this.actionsIconTheme = config.actionsIconTheme;
            this.textTheme = config.textTheme;
            this.centerTitle = config.centerTitle;
        }
    }
}
exports.AppBarTheme = AppBarTheme;
class BottomAppBarTheme extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          elevation?:number,
          shape?:NotchedShape,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.elevation = config.elevation;
            this.shape = config.shape;
        }
    }
}
exports.BottomAppBarTheme = BottomAppBarTheme;
class DialogTheme extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          elevation?:number,
          shape?:ShapeBorder,
          titleTextStyle?:TextStyle,
          contentTextStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.titleTextStyle = config.titleTextStyle;
            this.contentTextStyle = config.contentTextStyle;
        }
    }
}
exports.DialogTheme = DialogTheme;
class FloatingActionButtonThemeData extends DartClass {
    /**
     * @param config config:
        {
          foregroundColor?:Color,
          backgroundColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          splashColor?:Color,
          elevation?:number,
          focusElevation?:number,
          hoverElevation?:number,
          disabledElevation?:number,
          highlightElevation?:number,
          shape?:ShapeBorder,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.foregroundColor = config.foregroundColor;
            this.backgroundColor = config.backgroundColor;
            this.focusColor = config.focusColor;
            this.hoverColor = config.hoverColor;
            this.splashColor = config.splashColor;
            this.elevation = config.elevation;
            this.focusElevation = config.focusElevation;
            this.hoverElevation = config.hoverElevation;
            this.disabledElevation = config.disabledElevation;
            this.highlightElevation = config.highlightElevation;
            this.shape = config.shape;
        }
    }
}
exports.FloatingActionButtonThemeData = FloatingActionButtonThemeData;
class NavigationRailThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          elevation?:number,
          unselectedLabelTextStyle?:TextStyle,
          selectedLabelTextStyle?:TextStyle,
          unselectedIconTheme?:IconThemeData,
          selectedIconTheme?:IconThemeData,
          groupAlignment?:number,
          labelType?:NavigationRailLabelType,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.unselectedLabelTextStyle = config.unselectedLabelTextStyle;
            this.selectedLabelTextStyle = config.selectedLabelTextStyle;
            this.unselectedIconTheme = config.unselectedIconTheme;
            this.selectedIconTheme = config.selectedIconTheme;
            this.groupAlignment = config.groupAlignment;
            this.labelType = config.labelType;
        }
    }
}
exports.NavigationRailThemeData = NavigationRailThemeData;
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
}
exports.CupertinoThemeData = CupertinoThemeData;
class SnackBarThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          actionTextColor?:Color,
          disabledActionTextColor?:Color,
          contentTextStyle?:TextStyle,
          elevation?:number,
          shape?:ShapeBorder,
          behavior?:SnackBarBehavior,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.actionTextColor = config.actionTextColor;
            this.disabledActionTextColor = config.disabledActionTextColor;
            this.contentTextStyle = config.contentTextStyle;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.behavior = config.behavior;
        }
    }
}
exports.SnackBarThemeData = SnackBarThemeData;
class BottomSheetThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          elevation?:number,
          modalBackgroundColor?:Color,
          modalElevation?:number,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.modalBackgroundColor = config.modalBackgroundColor;
            this.modalElevation = config.modalElevation;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
        }
    }
}
exports.BottomSheetThemeData = BottomSheetThemeData;
class PopupMenuThemeData extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          shape?:ShapeBorder,
          elevation?:number,
          textStyle?:TextStyle,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.shape = config.shape;
            this.elevation = config.elevation;
            this.textStyle = config.textStyle;
        }
    }
}
exports.PopupMenuThemeData = PopupMenuThemeData;
class MaterialBannerThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          contentTextStyle?:TextStyle,
          padding?:EdgeInsets,
          leadingPadding?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.contentTextStyle = config.contentTextStyle;
            this.padding = config.padding;
            this.leadingPadding = config.leadingPadding;
        }
    }
}
exports.MaterialBannerThemeData = MaterialBannerThemeData;
class DividerThemeData extends DartClass {
    /**
     * @param config config:
        {
          color?:Color,
          space?:ShapeBorder,
          thickness?:number,
          indent?:number,
          endIndent?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.color = config.color;
            this.space = config.space;
            this.thickness = config.thickness;
            this.indent = config.indent;
            this.endIndent = config.endIndent;
        }
    }
}
exports.DividerThemeData = DividerThemeData;
class ButtonBarThemeData extends DartClass {
    /**
     * @param config config:
        {
          alignment?:MainAxisAlignment,
          mainAxisSize?:MainAxisSize,
          buttonTextTheme?:ButtonTextTheme,
          buttonMinWidth?:number,
          buttonHeight?:number,
          buttonPadding?:EdgeInsets,
          buttonAlignedDropdown?:boolean,
          layoutBehavior?:ButtonBarLayoutBehavior,
          overflowDirection?:VerticalDirection,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.alignment = config.alignment;
            this.mainAxisSize = config.mainAxisSize;
            this.buttonTextTheme = config.buttonTextTheme;
            this.buttonMinWidth = config.buttonMinWidth;
            this.buttonHeight = config.buttonHeight;
            this.buttonPadding = config.buttonPadding;
            this.buttonAlignedDropdown = config.buttonAlignedDropdown;
            this.layoutBehavior = config.layoutBehavior;
            this.overflowDirection = config.overflowDirection;
        }
    }
}
exports.ButtonBarThemeData = ButtonBarThemeData;
class BottomNavigationBarThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          elevation?:number,
          selectedIconTheme?:IconThemeData,
          unselectedIconTheme?:IconThemeData,
          selectedItemColor?:Color,
          unselectedItemColor?:Color,
          selectedLabelStyle?:TextStyle,
          unselectedLabelStyle?:TextStyle,
          showSelectedLabels?:boolean,
          showUnselectedLabels?:boolean,
          type?:BottomNavigationBarType,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.selectedIconTheme = config.selectedIconTheme;
            this.unselectedIconTheme = config.unselectedIconTheme;
            this.selectedItemColor = config.selectedItemColor;
            this.unselectedItemColor = config.unselectedItemColor;
            this.selectedLabelStyle = config.selectedLabelStyle;
            this.unselectedLabelStyle = config.unselectedLabelStyle;
            this.showSelectedLabels = config.showSelectedLabels;
            this.showUnselectedLabels = config.showUnselectedLabels;
            this.type = config.type;
        }
    }
}
exports.BottomNavigationBarThemeData = BottomNavigationBarThemeData;
class TimePickerThemeData extends DartClass {
    /**
     * @param config config:
        {
          backgroundColor?:Color,
          hourMinuteTextColor?:Color,
          hourMinuteColor?:Color,
          dayPeriodTextColor?:Color,
          dayPeriodColor?:Color,
          dialHandColor?:Color,
          dialBackgroundColor?:Color,
          dialTextColor?:Color,
          entryModeIconColor?:Color,
          hourMinuteTextStyle?:TextStyle,
          dayPeriodTextStyle?:TextStyle,
          helpTextStyle?:TextStyle,
          shape?:ShapeBorder,
          hourMinuteShape?:ShapeBorder,
          dayPeriodShape?:ShapeBorder,
          dayPeriodBorderSide?:BorderSide,
          inputDecorationTheme?:InputDecorationTheme,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.hourMinuteTextColor = config.hourMinuteTextColor;
            this.hourMinuteColor = config.hourMinuteColor;
            this.dayPeriodColor = config.dayPeriodColor;
            this.dayPeriodTextColor = config.dayPeriodTextColor;
            this.dialHandColor = config.dialHandColor;
            this.dialBackgroundColor = config.dialBackgroundColor;
            this.entryModeIconColor = config.entryModeIconColor;
            this.hourMinuteTextStyle = config.hourMinuteTextStyle;
            this.dayPeriodTextStyle = config.dayPeriodTextStyle;
            this.helpTextStyle = config.helpTextStyle;
            this.shape = config.shape;
            this.hourMinuteShape = config.hourMinuteShape;
            this.dayPeriodShape = config.dayPeriodShape;
            this.dayPeriodBorderSide = config.dayPeriodBorderSide;
            this.inputDecorationTheme = config.inputDecorationTheme;
        }
    }
}
exports.TimePickerThemeData = TimePickerThemeData;
class TextSelectionThemeData extends DartClass {
    /**
     * @param config config:
        {
          cursorColor?:Color,
          selectionColor?:Color,
          selectionHandleColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.cursorColor = config.cursorColor;
            this.selectionColor = config.selectionColor;
            this.selectionHandleColor = config.selectionHandleColor;
        }
    }
}
exports.TextSelectionThemeData = TextSelectionThemeData;
class DataTableThemeData extends DartClass {
    /**
     * @param config config:
        {
          dataRowHeight?:number,
          dataTextStyle?:TextStyle,
          headingRowHeight?:number,
          headingTextStyle?:TextStyle,
          horizontalMargin?:number,
          columnSpacing?:number,
          dividerThickness?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.dataRowHeight = config.dataRowHeight;
            this.dataTextStyle = config.dataTextStyle;
            this.headingRowHeight = config.headingRowHeight;
            this.headingTextStyle = config.headingTextStyle;
            this.horizontalMargin = config.horizontalMargin;
            this.columnSpacing = config.columnSpacing;
            this.dividerThickness = config.dividerThickness;
        }
    }
}
exports.DataTableThemeData = DataTableThemeData;
class ThemeData extends DartClass {
    /**
     * @param config config:
        {
          brightness?:Brightness,
          visualDensity?:VisualDensity,
          primaryColor?:Color,
          primaryColorBrightness?:Brightness,
          primaryColorLight?:Color,
          primaryColorDark?:Color,
          accentColor?:Color,
          accentColorBrightness?:Brightness,
          canvasColor?:Color,
          shadowColor?:Color,
          scaffoldBackgroundColor?:Color,
          bottomAppBarColor?:Color,
          cardColor?:Color,
          focusColor?:Color,
          dividerColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          selectedRowColor?:Color,
          unselectedWidgetColor?:Color,
          disabledColor?:Color,
          buttonColor?:Color,
          buttonTheme?:ButtonThemeData,
          toggleButtonsTheme?:ToggleButtonsThemeData,
          secondaryHeaderColor?:Color,
          textSelectionColor?:Color,
          cursorColor?:Color,
          textSelectionHandleColor?:Color,
          backgroundColor?:Color,
          dialogBackgroundColor?:Color,
          indicatorColor?:Color,
          hintColor?:Color,
          errorColor?:Color,
          toggleableActiveColor?:Color,
          fontFamily?:string,
          textTheme?:TextTheme,
          primaryTextTheme?:TextTheme,
          accentTextTheme?:TextTheme,
          inputDecorationTheme?:InputDecorationTheme,
          iconTheme?:IconThemeData,
          primaryIconTheme?:IconThemeData,
          accentIconTheme?:IconThemeData,
          sliderTheme?:SliderThemeData,
          tabBarTheme?:TabBarTheme,
          tooltipTheme?:TooltipThemeData,
          cardTheme?:CardTheme,
          chipTheme?:ChipThemeData,
          platform?:TargetPlatform,
          materialTapTargetSize?:MaterialTapTargetSize,
          applyElevationOverlayColor?:boolean,
          appBarTheme?:AppBarTheme,
          bottomAppBarTheme?:BottomAppBarTheme,
          colorScheme?:ColorScheme,
          dialogTheme?:DialogTheme,
          floatingActionButtonTheme?:FloatingActionButtonThemeData,
          navigationRailTheme?:NavigationRailThemeData,
          cupertinoOverrideTheme?:CupertinoThemeData,
          snackBarTheme?:SnackBarThemeData,
          bottomSheetTheme?:BottomSheetThemeData,
          popupMenuTheme?:PopupMenuThemeData,
          bannerTheme?:MaterialBannerThemeData,
          dividerTheme?:DividerThemeData,
          buttonBarTheme?:ButtonBarThemeData,
          bottomNavigationBarTheme?:BottomNavigationBarThemeData,
          timePickerTheme?:TimePickerThemeData,
          textSelectionTheme?:TextSelectionThemeData,
          dataTableTheme?:DataTableThemeData,
          fixTextFieldOutlineLabel?:boolean,
          useTextSelectionTheme?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.brightness = config.brightness;
            this.visualDensity = config.visualDensity;
            this.primaryColor = config.primaryColor;
            this.primaryColorBrightness = config.primaryColorBrightness;
            this.primaryColorLight = config.primaryColorLight;
            this.primaryColorDark = config.primaryColorDark;
            this.accentColor = config.accentColor;
            this.accentColorBrightness = config.accentColorBrightness;
            this.canvasColor = config.canvasColor;
            this.shadowColor = config.shadowColor;
            this.scaffoldBackgroundColor = config.scaffoldBackgroundColor;
            this.bottomAppBarColor = config.bottomAppBarColor;
            this.cardColor = config.cardColor;
            this.focusColor = config.focusColor;
            this.dividerColor = config.dividerColor;
            this.hoverColor = config.hoverColor;
            this.highlightColor = config.highlightColor;
            this.splashColor = config.splashColor;
            this.selectedRowColor = config.selectedRowColor;
            this.unselectedWidgetColor = config.unselectedWidgetColor;
            this.disabledColor = config.disabledColor;
            this.buttonColor = config.buttonColor;
            this.buttonTheme = config.buttonTheme;
            this.toggleButtonsTheme = config.toggleButtonsTheme;
            this.secondaryHeaderColor = config.secondaryHeaderColor;
            this.textSelectionColor = config.textSelectionColor;
            this.cursorColor = config.cursorColor;
            this.textSelectionHandleColor = config.textSelectionHandleColor;
            this.backgroundColor = config.backgroundColor;
            this.dialogBackgroundColor = config.dialogBackgroundColor;
            this.indicatorColor = config.indicatorColor;
            this.hintColor = config.hintColor;
            this.errorColor = config.errorColor;
            this.toggleableActiveColor = config.toggleableActiveColor;
            this.fontFamily = config.fontFamily;
            this.textTheme = config.textTheme;
            this.primaryTextTheme = config.primaryTextTheme;
            this.accentTextTheme = config.accentTextTheme;
            this.inputDecorationTheme = config.inputDecorationTheme;
            this.iconTheme = config.iconTheme;
            this.primaryIconTheme = config.primaryIconTheme;
            this.accentIconTheme = config.accentIconTheme;
            this.sliderTheme = config.sliderTheme;
            this.tabBarTheme = config.tabBarTheme;
            this.tooltipTheme = config.tooltipTheme;
            this.cardTheme = config.cardTheme;
            this.chipTheme = config.chipTheme;
            this.platform = config.platform;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.applyElevationOverlayColor = config.applyElevationOverlayColor;
            this.appBarTheme = config.appBarTheme;
            this.bottomAppBarTheme = config.bottomAppBarTheme;
            this.colorScheme = config.colorScheme;
            this.dialogTheme = config.dialogTheme;
            this.floatingActionButtonTheme = config.floatingActionButtonTheme;
            this.navigationRailTheme = config.navigationRailTheme;
            this.cupertinoOverrideTheme = config.cupertinoOverrideTheme;
            this.snackBarTheme = config.snackBarTheme;
            this.bottomSheetTheme = config.bottomSheetTheme;
            this.popupMenuTheme = config.popupMenuTheme;
            this.bannerTheme = config.bannerTheme;
            this.dividerTheme = config.dividerTheme;
            this.buttonBarTheme = config.buttonBarTheme;
            this.bottomNavigationBarTheme = config.bottomNavigationBarTheme;
            this.timePickerTheme = config.timePickerTheme;
            this.textSelectionTheme = config.textSelectionTheme;
            this.dataTableTheme = config.dataTableTheme;
            this.fixTextFieldOutlineLabel = config.fixTextFieldOutlineLabel;
            this.useTextSelectionTheme = config.useTextSelectionTheme;
        }
    }
    static dark() {
        var v = new ThemeData({});
        v.constructorName = "dark";
        return v;
    }
    static light() {
        var v = new ThemeData({});
        v.constructorName = "light";
        return v;
    }
}
exports.ThemeData = ThemeData;
//#endregion
//#region ******** Icons ********
class Icons extends IconData {
    constructor(icon) {
        super(icon);
    }
}
exports.Icons = Icons;
Icons.threesixty = new Icons("threesixty");
Icons.threed_rotation = new Icons("threed_rotation");
Icons.four_k = new Icons("four_k");
Icons.ac_unit = new Icons("ac_unit");
Icons.access_alarm = new Icons("access_alarm");
Icons.access_alarms = new Icons("access_alarms");
Icons.access_time = new Icons("access_time");
Icons.accessibility = new Icons("accessibility");
Icons.accessibility_new = new Icons("accessibility_new");
Icons.accessible = new Icons("accessible");
Icons.accessible_forward = new Icons("accessible_forward");
Icons.account_balance = new Icons("account_balance");
Icons.account_balance_wallet = new Icons("account_balance_wallet");
Icons.account_box = new Icons("account_box");
Icons.account_circle = new Icons("account_circle");
Icons.adb = new Icons("adb");
Icons.add = new Icons("add");
Icons.add_a_photo = new Icons("add_a_photo");
Icons.add_alarm = new Icons("add_alarm");
Icons.add_alert = new Icons("add_alert");
Icons.add_box = new Icons("add_box");
Icons.add_call = new Icons("add_call");
Icons.add_circle = new Icons("add_circle");
Icons.add_circle_outline = new Icons("add_circle_outline");
Icons.add_comment = new Icons("add_comment");
Icons.add_location = new Icons("add_location");
Icons.add_photo_alternate = new Icons("add_photo_alternate");
Icons.add_shopping_cart = new Icons("add_shopping_cart");
Icons.add_to_home_screen = new Icons("add_to_home_screen");
Icons.add_to_photos = new Icons("add_to_photos");
Icons.add_to_queue = new Icons("add_to_queue");
Icons.adjust = new Icons("adjust");
Icons.airline_seat_flat = new Icons("airline_seat_flat");
Icons.airline_seat_flat_angled = new Icons("airline_seat_flat_angled");
Icons.airline_seat_individual_suite = new Icons("airline_seat_individual_suite");
Icons.airline_seat_legroom_extra = new Icons("airline_seat_legroom_extra");
Icons.airline_seat_legroom_normal = new Icons("airline_seat_legroom_normal");
Icons.airline_seat_legroom_reduced = new Icons("airline_seat_legroom_reduced");
Icons.airline_seat_recline_extra = new Icons("airline_seat_recline_extra");
Icons.airline_seat_recline_normal = new Icons("airline_seat_recline_normal");
Icons.airplanemode_active = new Icons("airplanemode_active");
Icons.airplanemode_inactive = new Icons("airplanemode_inactive");
Icons.airplay = new Icons("airplay");
Icons.airport_shuttle = new Icons("airport_shuttle");
Icons.alarm = new Icons("alarm");
Icons.alarm_add = new Icons("alarm_add");
Icons.alarm_off = new Icons("alarm_off");
Icons.alarm_on = new Icons("alarm_on");
Icons.album = new Icons("album");
Icons.all_inclusive = new Icons("all_inclusive");
Icons.all_out = new Icons("all_out");
Icons.alternate_email = new Icons("alternate_email");
Icons.android = new Icons("android");
Icons.announcement = new Icons("announcement");
Icons.apps = new Icons("apps");
Icons.archive = new Icons("archive");
Icons.arrow_back = new Icons("arrow_back");
Icons.arrow_back_ios = new Icons("arrow_back_ios");
Icons.arrow_downward = new Icons("arrow_downward");
Icons.arrow_drop_down = new Icons("arrow_drop_down");
Icons.arrow_drop_down_circle = new Icons("arrow_drop_down_circle");
Icons.arrow_drop_up = new Icons("arrow_drop_up");
Icons.arrow_forward = new Icons("arrow_forward");
Icons.arrow_forward_ios = new Icons("arrow_forward_ios");
Icons.arrow_left = new Icons("arrow_left");
Icons.arrow_right = new Icons("arrow_right");
Icons.arrow_upward = new Icons("arrow_upward");
Icons.art_track = new Icons("art_track");
Icons.aspect_ratio = new Icons("aspect_ratio");
Icons.assessment = new Icons("assessment");
Icons.assignment = new Icons("assignment");
Icons.assignment_ind = new Icons("assignment_ind");
Icons.assignment_late = new Icons("assignment_late");
Icons.assignment_return = new Icons("assignment_return");
Icons.assignment_returned = new Icons("assignment_returned");
Icons.assignment_turned_in = new Icons("assignment_turned_in");
Icons.assistant = new Icons("assistant");
Icons.assistant_photo = new Icons("assistant_photo");
Icons.atm = new Icons("atm");
Icons.attach_file = new Icons("attach_file");
Icons.attach_money = new Icons("attach_money");
Icons.attachment = new Icons("attachment");
Icons.audiotrack = new Icons("audiotrack");
Icons.autorenew = new Icons("autorenew");
Icons.av_timer = new Icons("av_timer");
Icons.backspace = new Icons("backspace");
Icons.backup = new Icons("backup");
Icons.battery_alert = new Icons("battery_alert");
Icons.battery_charging_full = new Icons("battery_charging_full");
Icons.battery_full = new Icons("battery_full");
Icons.battery_std = new Icons("battery_std");
Icons.battery_unknown = new Icons("battery_unknown");
Icons.beach_access = new Icons("beach_access");
Icons.beenhere = new Icons("beenhere");
Icons.block = new Icons("block");
Icons.bluetooth = new Icons("bluetooth");
Icons.bluetooth_audio = new Icons("bluetooth_audio");
Icons.bluetooth_connected = new Icons("bluetooth_connected");
Icons.bluetooth_disabled = new Icons("bluetooth_disabled");
Icons.bluetooth_searching = new Icons("bluetooth_searching");
Icons.blur_circular = new Icons("blur_circular");
Icons.blur_linear = new Icons("blur_linear");
Icons.blur_off = new Icons("blur_off");
Icons.blur_on = new Icons("blur_on");
Icons.book = new Icons("book");
Icons.bookmark = new Icons("bookmark");
Icons.bookmark_border = new Icons("bookmark_border");
Icons.border_all = new Icons("border_all");
Icons.border_bottom = new Icons("border_bottom");
Icons.border_clear = new Icons("border_clear");
Icons.border_color = new Icons("border_color");
Icons.border_horizontal = new Icons("border_horizontal");
Icons.border_inner = new Icons("border_inner");
Icons.border_left = new Icons("border_left");
Icons.border_outer = new Icons("border_outer");
Icons.border_right = new Icons("border_right");
Icons.border_style = new Icons("border_style");
Icons.border_top = new Icons("border_top");
Icons.border_vertical = new Icons("border_vertical");
Icons.branding_watermark = new Icons("branding_watermark");
Icons.brightness_1 = new Icons("brightness_1");
Icons.brightness_2 = new Icons("brightness_2");
Icons.brightness_3 = new Icons("brightness_3");
Icons.brightness_4 = new Icons("brightness_4");
Icons.brightness_5 = new Icons("brightness_5");
Icons.brightness_6 = new Icons("brightness_6");
Icons.brightness_7 = new Icons("brightness_7");
Icons.brightness_auto = new Icons("brightness_auto");
Icons.brightness_high = new Icons("brightness_high");
Icons.brightness_low = new Icons("brightness_low");
Icons.brightness_medium = new Icons("brightness_medium");
Icons.broken_image = new Icons("broken_image");
Icons.brush = new Icons("brush");
Icons.bubble_chart = new Icons("bubble_chart");
Icons.bug_report = new Icons("bug_report");
Icons.build = new Icons("build");
Icons.burst_mode = new Icons("burst_mode");
Icons.business = new Icons("business");
Icons.business_center = new Icons("business_center");
Icons.cached = new Icons("cached");
Icons.cake = new Icons("cake");
Icons.calendar_today = new Icons("calendar_today");
Icons.calendar_view_day = new Icons("calendar_view_day");
Icons.call = new Icons("call");
Icons.call_end = new Icons("call_end");
Icons.call_made = new Icons("call_made");
Icons.call_merge = new Icons("call_merge");
Icons.call_missed = new Icons("call_missed");
Icons.call_missed_outgoing = new Icons("call_missed_outgoing");
Icons.call_received = new Icons("call_received");
Icons.call_split = new Icons("call_split");
Icons.call_to_action = new Icons("call_to_action");
Icons.camera = new Icons("camera");
Icons.camera_alt = new Icons("camera_alt");
Icons.camera_enhance = new Icons("camera_enhance");
Icons.camera_front = new Icons("camera_front");
Icons.camera_rear = new Icons("camera_rear");
Icons.camera_roll = new Icons("camera_roll");
Icons.cancel = new Icons("cancel");
Icons.card_giftcard = new Icons("card_giftcard");
Icons.card_membership = new Icons("card_membership");
Icons.card_travel = new Icons("card_travel");
Icons.casino = new Icons("casino");
Icons.cast = new Icons("cast");
Icons.cast_connected = new Icons("cast_connected");
Icons.category = new Icons("category");
Icons.center_focus_strong = new Icons("center_focus_strong");
Icons.center_focus_weak = new Icons("center_focus_weak");
Icons.change_history = new Icons("change_history");
Icons.chat = new Icons("chat");
Icons.chat_bubble = new Icons("chat_bubble");
Icons.chat_bubble_outline = new Icons("chat_bubble_outline");
Icons.check = new Icons("check");
Icons.check_box = new Icons("check_box");
Icons.check_box_outline_blank = new Icons("check_box_outline_blank");
Icons.check_circle = new Icons("check_circle");
Icons.check_circle_outline = new Icons("check_circle_outline");
Icons.chevron_left = new Icons("chevron_left");
Icons.chevron_right = new Icons("chevron_right");
Icons.child_care = new Icons("child_care");
Icons.child_friendly = new Icons("child_friendly");
Icons.chrome_reader_mode = new Icons("chrome_reader_mode");
Icons.class_ = new Icons("class_");
Icons.clear = new Icons("clear");
Icons.clear_all = new Icons("clear_all");
Icons.close = new Icons("close");
Icons.closed_caption = new Icons("closed_caption");
Icons.cloud = new Icons("cloud");
Icons.cloud_circle = new Icons("cloud_circle");
Icons.cloud_done = new Icons("cloud_done");
Icons.cloud_download = new Icons("cloud_download");
Icons.cloud_off = new Icons("cloud_off");
Icons.cloud_queue = new Icons("cloud_queue");
Icons.cloud_upload = new Icons("cloud_upload");
Icons.code = new Icons("code");
Icons.collections = new Icons("collections");
Icons.collections_bookmark = new Icons("collections_bookmark");
Icons.color_lens = new Icons("color_lens");
Icons.colorize = new Icons("colorize");
Icons.comment = new Icons("comment");
Icons.compare = new Icons("compare");
Icons.compare_arrows = new Icons("compare_arrows");
Icons.computer = new Icons("computer");
Icons.confirmation_number = new Icons("confirmation_number");
Icons.contact_mail = new Icons("contact_mail");
Icons.contact_phone = new Icons("contact_phone");
Icons.contacts = new Icons("contacts");
Icons.content_copy = new Icons("content_copy");
Icons.content_cut = new Icons("content_cut");
Icons.content_paste = new Icons("content_paste");
Icons.control_point = new Icons("control_point");
Icons.control_point_duplicate = new Icons("control_point_duplicate");
Icons.copyright = new Icons("copyright");
Icons.create = new Icons("create");
Icons.create_new_folder = new Icons("create_new_folder");
Icons.credit_card = new Icons("credit_card");
Icons.crop = new Icons("crop");
Icons.crop_16_9 = new Icons("crop_16_9");
Icons.crop_3_2 = new Icons("crop_3_2");
Icons.crop_5_4 = new Icons("crop_5_4");
Icons.crop_7_5 = new Icons("crop_7_5");
Icons.crop_din = new Icons("crop_din");
Icons.crop_free = new Icons("crop_free");
Icons.crop_landscape = new Icons("crop_landscape");
Icons.crop_original = new Icons("crop_original");
Icons.crop_portrait = new Icons("crop_portrait");
Icons.crop_rotate = new Icons("crop_rotate");
Icons.crop_square = new Icons("crop_square");
Icons.dashboard = new Icons("dashboard");
Icons.data_usage = new Icons("data_usage");
Icons.date_range = new Icons("date_range");
Icons.dehaze = new Icons("dehaze");
Icons.delete = new Icons("delete");
Icons.delete_forever = new Icons("delete_forever");
Icons.delete_outline = new Icons("delete_outline");
Icons.delete_sweep = new Icons("delete_sweep");
Icons.departure_board = new Icons("departure_board");
Icons.description = new Icons("description");
Icons.desktop_mac = new Icons("desktop_mac");
Icons.desktop_windows = new Icons("desktop_windows");
Icons.details = new Icons("details");
Icons.developer_board = new Icons("developer_board");
Icons.developer_mode = new Icons("developer_mode");
Icons.device_hub = new Icons("device_hub");
Icons.device_unknown = new Icons("device_unknown");
Icons.devices = new Icons("devices");
Icons.devices_other = new Icons("devices_other");
Icons.dialer_sip = new Icons("dialer_sip");
Icons.dialpad = new Icons("dialpad");
Icons.directions = new Icons("directions");
Icons.directions_bike = new Icons("directions_bike");
Icons.directions_boat = new Icons("directions_boat");
Icons.directions_bus = new Icons("directions_bus");
Icons.directions_car = new Icons("directions_car");
Icons.directions_railway = new Icons("directions_railway");
Icons.directions_run = new Icons("directions_run");
Icons.directions_subway = new Icons("directions_subway");
Icons.directions_transit = new Icons("directions_transit");
Icons.directions_walk = new Icons("directions_walk");
Icons.disc_full = new Icons("disc_full");
Icons.dns = new Icons("dns");
Icons.do_not_disturb = new Icons("do_not_disturb");
Icons.do_not_disturb_alt = new Icons("do_not_disturb_alt");
Icons.do_not_disturb_off = new Icons("do_not_disturb_off");
Icons.do_not_disturb_on = new Icons("do_not_disturb_on");
Icons.dock = new Icons("dock");
Icons.domain = new Icons("domain");
Icons.done = new Icons("done");
Icons.done_all = new Icons("done_all");
Icons.done_outline = new Icons("done_outline");
Icons.donut_large = new Icons("donut_large");
Icons.donut_small = new Icons("donut_small");
Icons.drafts = new Icons("drafts");
Icons.drag_handle = new Icons("drag_handle");
Icons.drive_eta = new Icons("drive_eta");
Icons.dvr = new Icons("dvr");
Icons.edit = new Icons("edit");
Icons.edit_attributes = new Icons("edit_attributes");
Icons.edit_location = new Icons("edit_location");
Icons.eject = new Icons("eject");
Icons.email = new Icons("email");
Icons.enhanced_encryption = new Icons("enhanced_encryption");
Icons.equalizer = new Icons("equalizer");
Icons.error = new Icons("error");
Icons.error_outline = new Icons("error_outline");
Icons.euro_symbol = new Icons("euro_symbol");
Icons.ev_station = new Icons("ev_station");
Icons.event = new Icons("event");
Icons.event_available = new Icons("event_available");
Icons.event_busy = new Icons("event_busy");
Icons.event_note = new Icons("event_note");
Icons.event_seat = new Icons("event_seat");
Icons.exit_to_app = new Icons("exit_to_app");
Icons.expand_less = new Icons("expand_less");
Icons.expand_more = new Icons("expand_more");
Icons.explicit = new Icons("explicit");
Icons.explore = new Icons("explore");
Icons.exposure = new Icons("exposure");
Icons.exposure_neg_1 = new Icons("exposure_neg_1");
Icons.exposure_neg_2 = new Icons("exposure_neg_2");
Icons.exposure_plus_1 = new Icons("exposure_plus_1");
Icons.exposure_plus_2 = new Icons("exposure_plus_2");
Icons.exposure_zero = new Icons("exposure_zero");
Icons.extension = new Icons("extension");
Icons.face = new Icons("face");
Icons.fast_forward = new Icons("fast_forward");
Icons.fast_rewind = new Icons("fast_rewind");
Icons.fastfood = new Icons("fastfood");
Icons.favorite = new Icons("favorite");
Icons.favorite_border = new Icons("favorite_border");
Icons.featured_play_list = new Icons("featured_play_list");
Icons.featured_video = new Icons("featured_video");
Icons.feedback = new Icons("feedback");
Icons.fiber_dvr = new Icons("fiber_dvr");
Icons.fiber_manual_record = new Icons("fiber_manual_record");
Icons.fiber_new = new Icons("fiber_new");
Icons.fiber_pin = new Icons("fiber_pin");
Icons.fiber_smart_record = new Icons("fiber_smart_record");
Icons.file_download = new Icons("file_download");
Icons.file_upload = new Icons("file_upload");
Icons.filter = new Icons("filter");
Icons.filter_1 = new Icons("filter_1");
Icons.filter_2 = new Icons("filter_2");
Icons.filter_3 = new Icons("filter_3");
Icons.filter_4 = new Icons("filter_4");
Icons.filter_5 = new Icons("filter_5");
Icons.filter_6 = new Icons("filter_6");
Icons.filter_7 = new Icons("filter_7");
Icons.filter_8 = new Icons("filter_8");
Icons.filter_9 = new Icons("filter_9");
Icons.filter_9_plus = new Icons("filter_9_plus");
Icons.filter_b_and_w = new Icons("filter_b_and_w");
Icons.filter_center_focus = new Icons("filter_center_focus");
Icons.filter_drama = new Icons("filter_drama");
Icons.filter_frames = new Icons("filter_frames");
Icons.filter_hdr = new Icons("filter_hdr");
Icons.filter_list = new Icons("filter_list");
Icons.filter_none = new Icons("filter_none");
Icons.filter_tilt_shift = new Icons("filter_tilt_shift");
Icons.filter_vintage = new Icons("filter_vintage");
Icons.find_in_page = new Icons("find_in_page");
Icons.find_replace = new Icons("find_replace");
Icons.fingerprint = new Icons("fingerprint");
Icons.first_page = new Icons("first_page");
Icons.fitness_center = new Icons("fitness_center");
Icons.flag = new Icons("flag");
Icons.flare = new Icons("flare");
Icons.flash_auto = new Icons("flash_auto");
Icons.flash_off = new Icons("flash_off");
Icons.flash_on = new Icons("flash_on");
Icons.flight = new Icons("flight");
Icons.flight_land = new Icons("flight_land");
Icons.flight_takeoff = new Icons("flight_takeoff");
Icons.flip = new Icons("flip");
Icons.flip_to_back = new Icons("flip_to_back");
Icons.flip_to_front = new Icons("flip_to_front");
Icons.folder = new Icons("folder");
Icons.folder_open = new Icons("folder_open");
Icons.folder_shared = new Icons("folder_shared");
Icons.folder_special = new Icons("folder_special");
Icons.font_download = new Icons("font_download");
Icons.format_align_center = new Icons("format_align_center");
Icons.format_align_justify = new Icons("format_align_justify");
Icons.format_align_left = new Icons("format_align_left");
Icons.format_align_right = new Icons("format_align_right");
Icons.format_bold = new Icons("format_bold");
Icons.format_clear = new Icons("format_clear");
Icons.format_color_fill = new Icons("format_color_fill");
Icons.format_color_reset = new Icons("format_color_reset");
Icons.format_color_text = new Icons("format_color_text");
Icons.format_indent_decrease = new Icons("format_indent_decrease");
Icons.format_indent_increase = new Icons("format_indent_increase");
Icons.format_italic = new Icons("format_italic");
Icons.format_line_spacing = new Icons("format_line_spacing");
Icons.format_list_bulleted = new Icons("format_list_bulleted");
Icons.format_list_numbered = new Icons("format_list_numbered");
Icons.format_list_numbered_rtl = new Icons("format_list_numbered_rtl");
Icons.format_paint = new Icons("format_paint");
Icons.format_quote = new Icons("format_quote");
Icons.format_shapes = new Icons("format_shapes");
Icons.format_size = new Icons("format_size");
Icons.format_strikethrough = new Icons("format_strikethrough");
Icons.format_textdirection_l_to_r = new Icons("format_textdirection_l_to_r");
Icons.format_textdirection_r_to_l = new Icons("format_textdirection_r_to_l");
Icons.format_underlined = new Icons("format_underlined");
Icons.forum = new Icons("forum");
Icons.forward = new Icons("forward");
Icons.forward_10 = new Icons("forward_10");
Icons.forward_30 = new Icons("forward_30");
Icons.forward_5 = new Icons("forward_5");
Icons.free_breakfast = new Icons("free_breakfast");
Icons.fullscreen = new Icons("fullscreen");
Icons.fullscreen_exit = new Icons("fullscreen_exit");
Icons.functions = new Icons("functions");
Icons.g_translate = new Icons("g_translate");
Icons.gamepad = new Icons("gamepad");
Icons.games = new Icons("games");
Icons.gavel = new Icons("gavel");
Icons.gesture = new Icons("gesture");
Icons.get_app = new Icons("get_app");
Icons.gif = new Icons("gif");
Icons.golf_course = new Icons("golf_course");
Icons.gps_fixed = new Icons("gps_fixed");
Icons.gps_not_fixed = new Icons("gps_not_fixed");
Icons.gps_off = new Icons("gps_off");
Icons.grade = new Icons("grade");
Icons.gradient = new Icons("gradient");
Icons.grain = new Icons("grain");
Icons.graphic_eq = new Icons("graphic_eq");
Icons.grid_off = new Icons("grid_off");
Icons.grid_on = new Icons("grid_on");
Icons.group = new Icons("group");
Icons.group_add = new Icons("group_add");
Icons.group_work = new Icons("group_work");
Icons.hd = new Icons("hd");
Icons.hdr_off = new Icons("hdr_off");
Icons.hdr_on = new Icons("hdr_on");
Icons.hdr_strong = new Icons("hdr_strong");
Icons.hdr_weak = new Icons("hdr_weak");
Icons.headset = new Icons("headset");
Icons.headset_mic = new Icons("headset_mic");
Icons.headset_off = new Icons("headset_off");
Icons.healing = new Icons("healing");
Icons.hearing = new Icons("hearing");
Icons.help = new Icons("help");
Icons.help_outline = new Icons("help_outline");
Icons.high_quality = new Icons("high_quality");
Icons.highlight = new Icons("highlight");
Icons.highlight_off = new Icons("highlight_off");
Icons.history = new Icons("history");
Icons.home = new Icons("home");
Icons.hot_tub = new Icons("hot_tub");
Icons.hotel = new Icons("hotel");
Icons.hourglass_empty = new Icons("hourglass_empty");
Icons.hourglass_full = new Icons("hourglass_full");
Icons.http = new Icons("http");
Icons.https = new Icons("https");
Icons.image = new Icons("image");
Icons.image_aspect_ratio = new Icons("image_aspect_ratio");
Icons.import_contacts = new Icons("import_contacts");
Icons.import_export = new Icons("import_export");
Icons.important_devices = new Icons("important_devices");
Icons.inbox = new Icons("inbox");
Icons.indeterminate_check_box = new Icons("indeterminate_check_box");
Icons.info = new Icons("info");
Icons.info_outline = new Icons("info_outline");
Icons.input = new Icons("input");
Icons.insert_chart = new Icons("insert_chart");
Icons.insert_comment = new Icons("insert_comment");
Icons.insert_drive_file = new Icons("insert_drive_file");
Icons.insert_emoticon = new Icons("insert_emoticon");
Icons.insert_invitation = new Icons("insert_invitation");
Icons.insert_link = new Icons("insert_link");
Icons.insert_photo = new Icons("insert_photo");
Icons.invert_colors = new Icons("invert_colors");
Icons.invert_colors_off = new Icons("invert_colors_off");
Icons.iso = new Icons("iso");
Icons.keyboard = new Icons("keyboard");
Icons.keyboard_arrow_down = new Icons("keyboard_arrow_down");
Icons.keyboard_arrow_left = new Icons("keyboard_arrow_left");
Icons.keyboard_arrow_right = new Icons("keyboard_arrow_right");
Icons.keyboard_arrow_up = new Icons("keyboard_arrow_up");
Icons.keyboard_backspace = new Icons("keyboard_backspace");
Icons.keyboard_capslock = new Icons("keyboard_capslock");
Icons.keyboard_hide = new Icons("keyboard_hide");
Icons.keyboard_return = new Icons("keyboard_return");
Icons.keyboard_tab = new Icons("keyboard_tab");
Icons.keyboard_voice = new Icons("keyboard_voice");
Icons.kitchen = new Icons("kitchen");
Icons.label = new Icons("label");
Icons.label_important = new Icons("label_important");
Icons.label_outline = new Icons("label_outline");
Icons.landscape = new Icons("landscape");
Icons.language = new Icons("language");
Icons.laptop = new Icons("laptop");
Icons.laptop_chromebook = new Icons("laptop_chromebook");
Icons.laptop_mac = new Icons("laptop_mac");
Icons.laptop_windows = new Icons("laptop_windows");
Icons.last_page = new Icons("last_page");
Icons.launch = new Icons("launch");
Icons.layers = new Icons("layers");
Icons.layers_clear = new Icons("layers_clear");
Icons.leak_add = new Icons("leak_add");
Icons.leak_remove = new Icons("leak_remove");
Icons.lens = new Icons("lens");
Icons.library_add = new Icons("library_add");
Icons.library_books = new Icons("library_books");
Icons.library_music = new Icons("library_music");
Icons.lightbulb_outline = new Icons("lightbulb_outline");
Icons.line_style = new Icons("line_style");
Icons.line_weight = new Icons("line_weight");
Icons.linear_scale = new Icons("linear_scale");
Icons.link = new Icons("link");
Icons.link_off = new Icons("link_off");
Icons.linked_camera = new Icons("linked_camera");
Icons.list = new Icons("list");
Icons.live_help = new Icons("live_help");
Icons.live_tv = new Icons("live_tv");
Icons.local_activity = new Icons("local_activity");
Icons.local_airport = new Icons("local_airport");
Icons.local_atm = new Icons("local_atm");
Icons.local_bar = new Icons("local_bar");
Icons.local_cafe = new Icons("local_cafe");
Icons.local_car_wash = new Icons("local_car_wash");
Icons.local_convenience_store = new Icons("local_convenience_store");
Icons.local_dining = new Icons("local_dining");
Icons.local_drink = new Icons("local_drink");
Icons.local_florist = new Icons("local_florist");
Icons.local_gas_station = new Icons("local_gas_station");
Icons.local_grocery_store = new Icons("local_grocery_store");
Icons.local_hospital = new Icons("local_hospital");
Icons.local_hotel = new Icons("local_hotel");
Icons.local_laundry_service = new Icons("local_laundry_service");
Icons.local_library = new Icons("local_library");
Icons.local_mall = new Icons("local_mall");
Icons.local_movies = new Icons("local_movies");
Icons.local_offer = new Icons("local_offer");
Icons.local_parking = new Icons("local_parking");
Icons.local_pharmacy = new Icons("local_pharmacy");
Icons.local_phone = new Icons("local_phone");
Icons.local_pizza = new Icons("local_pizza");
Icons.local_play = new Icons("local_play");
Icons.local_post_office = new Icons("local_post_office");
Icons.local_printshop = new Icons("local_printshop");
Icons.local_see = new Icons("local_see");
Icons.local_shipping = new Icons("local_shipping");
Icons.local_taxi = new Icons("local_taxi");
Icons.location_city = new Icons("location_city");
Icons.location_disabled = new Icons("location_disabled");
Icons.location_off = new Icons("location_off");
Icons.location_on = new Icons("location_on");
Icons.location_searching = new Icons("location_searching");
Icons.lock = new Icons("lock");
Icons.lock_open = new Icons("lock_open");
Icons.lock_outline = new Icons("lock_outline");
Icons.looks = new Icons("looks");
Icons.looks_3 = new Icons("looks_3");
Icons.looks_4 = new Icons("looks_4");
Icons.looks_5 = new Icons("looks_5");
Icons.looks_6 = new Icons("looks_6");
Icons.looks_one = new Icons("looks_one");
Icons.looks_two = new Icons("looks_two");
Icons.loop = new Icons("loop");
Icons.loupe = new Icons("loupe");
Icons.low_priority = new Icons("low_priority");
Icons.loyalty = new Icons("loyalty");
Icons.mail = new Icons("mail");
Icons.mail_outline = new Icons("mail_outline");
Icons.map = new Icons("map");
Icons.markunread = new Icons("markunread");
Icons.markunread_mailbox = new Icons("markunread_mailbox");
Icons.maximize = new Icons("maximize");
Icons.memory = new Icons("memory");
Icons.menu = new Icons("menu");
Icons.merge_type = new Icons("merge_type");
Icons.message = new Icons("message");
Icons.mic = new Icons("mic");
Icons.mic_none = new Icons("mic_none");
Icons.mic_off = new Icons("mic_off");
Icons.minimize = new Icons("minimize");
Icons.missed_video_call = new Icons("missed_video_call");
Icons.mms = new Icons("mms");
Icons.mobile_screen_share = new Icons("mobile_screen_share");
Icons.mode_comment = new Icons("mode_comment");
Icons.mode_edit = new Icons("mode_edit");
Icons.monetization_on = new Icons("monetization_on");
Icons.money_off = new Icons("money_off");
Icons.monochrome_photos = new Icons("monochrome_photos");
Icons.mood = new Icons("mood");
Icons.mood_bad = new Icons("mood_bad");
Icons.more = new Icons("more");
Icons.more_horiz = new Icons("more_horiz");
Icons.more_vert = new Icons("more_vert");
Icons.motorcycle = new Icons("motorcycle");
Icons.mouse = new Icons("mouse");
Icons.move_to_inbox = new Icons("move_to_inbox");
Icons.movie = new Icons("movie");
Icons.movie_creation = new Icons("movie_creation");
Icons.movie_filter = new Icons("movie_filter");
Icons.multiline_chart = new Icons("multiline_chart");
Icons.music_note = new Icons("music_note");
Icons.music_video = new Icons("music_video");
Icons.my_location = new Icons("my_location");
Icons.nature = new Icons("nature");
Icons.nature_people = new Icons("nature_people");
Icons.navigate_before = new Icons("navigate_before");
Icons.navigate_next = new Icons("navigate_next");
Icons.navigation = new Icons("navigation");
Icons.near_me = new Icons("near_me");
Icons.network_cell = new Icons("network_cell");
Icons.network_check = new Icons("network_check");
Icons.network_locked = new Icons("network_locked");
Icons.network_wifi = new Icons("network_wifi");
Icons.new_releases = new Icons("new_releases");
Icons.next_week = new Icons("next_week");
Icons.nfc = new Icons("nfc");
Icons.no_encryption = new Icons("no_encryption");
Icons.no_sim = new Icons("no_sim");
Icons.not_interested = new Icons("not_interested");
Icons.not_listed_location = new Icons("not_listed_location");
Icons.note = new Icons("note");
Icons.note_add = new Icons("note_add");
Icons.notification_important = new Icons("notification_important");
Icons.notifications = new Icons("notifications");
Icons.notifications_active = new Icons("notifications_active");
Icons.notifications_none = new Icons("notifications_none");
Icons.notifications_off = new Icons("notifications_off");
Icons.notifications_paused = new Icons("notifications_paused");
Icons.offline_bolt = new Icons("offline_bolt");
Icons.offline_pin = new Icons("offline_pin");
Icons.ondemand_video = new Icons("ondemand_video");
Icons.opacity = new Icons("opacity");
Icons.open_in_browser = new Icons("open_in_browser");
Icons.open_in_new = new Icons("open_in_new");
Icons.open_with = new Icons("open_with");
Icons.outlined_flag = new Icons("outlined_flag");
Icons.pages = new Icons("pages");
Icons.pageview = new Icons("pageview");
Icons.palette = new Icons("palette");
Icons.pan_tool = new Icons("pan_tool");
Icons.panorama = new Icons("panorama");
Icons.panorama_fish_eye = new Icons("panorama_fish_eye");
Icons.panorama_horizontal = new Icons("panorama_horizontal");
Icons.panorama_vertical = new Icons("panorama_vertical");
Icons.panorama_wide_angle = new Icons("panorama_wide_angle");
Icons.party_mode = new Icons("party_mode");
Icons.pause = new Icons("pause");
Icons.pause_circle_filled = new Icons("pause_circle_filled");
Icons.pause_circle_outline = new Icons("pause_circle_outline");
Icons.payment = new Icons("payment");
Icons.people = new Icons("people");
Icons.people_outline = new Icons("people_outline");
Icons.perm_camera_mic = new Icons("perm_camera_mic");
Icons.perm_contact_calendar = new Icons("perm_contact_calendar");
Icons.perm_data_setting = new Icons("perm_data_setting");
Icons.perm_device_information = new Icons("perm_device_information");
Icons.perm_identity = new Icons("perm_identity");
Icons.perm_media = new Icons("perm_media");
Icons.perm_phone_msg = new Icons("perm_phone_msg");
Icons.perm_scan_wifi = new Icons("perm_scan_wifi");
Icons.person = new Icons("person");
Icons.person_add = new Icons("person_add");
Icons.person_outline = new Icons("person_outline");
Icons.person_pin = new Icons("person_pin");
Icons.person_pin_circle = new Icons("person_pin_circle");
Icons.personal_video = new Icons("personal_video");
Icons.pets = new Icons("pets");
Icons.phone = new Icons("phone");
Icons.phone_android = new Icons("phone_android");
Icons.phone_bluetooth_speaker = new Icons("phone_bluetooth_speaker");
Icons.phone_forwarded = new Icons("phone_forwarded");
Icons.phone_in_talk = new Icons("phone_in_talk");
Icons.phone_iphone = new Icons("phone_iphone");
Icons.phone_locked = new Icons("phone_locked");
Icons.phone_missed = new Icons("phone_missed");
Icons.phone_paused = new Icons("phone_paused");
Icons.phonelink = new Icons("phonelink");
Icons.phonelink_erase = new Icons("phonelink_erase");
Icons.phonelink_lock = new Icons("phonelink_lock");
Icons.phonelink_off = new Icons("phonelink_off");
Icons.phonelink_ring = new Icons("phonelink_ring");
Icons.phonelink_setup = new Icons("phonelink_setup");
Icons.photo = new Icons("photo");
Icons.photo_album = new Icons("photo_album");
Icons.photo_camera = new Icons("photo_camera");
Icons.photo_filter = new Icons("photo_filter");
Icons.photo_library = new Icons("photo_library");
Icons.photo_size_select_actual = new Icons("photo_size_select_actual");
Icons.photo_size_select_large = new Icons("photo_size_select_large");
Icons.photo_size_select_small = new Icons("photo_size_select_small");
Icons.picture_as_pdf = new Icons("picture_as_pdf");
Icons.picture_in_picture = new Icons("picture_in_picture");
Icons.picture_in_picture_alt = new Icons("picture_in_picture_alt");
Icons.pie_chart = new Icons("pie_chart");
Icons.pie_chart_outlined = new Icons("pie_chart_outlined");
Icons.pin_drop = new Icons("pin_drop");
Icons.place = new Icons("place");
Icons.play_arrow = new Icons("play_arrow");
Icons.play_circle_filled = new Icons("play_circle_filled");
Icons.play_circle_outline = new Icons("play_circle_outline");
Icons.play_for_work = new Icons("play_for_work");
Icons.playlist_add = new Icons("playlist_add");
Icons.playlist_add_check = new Icons("playlist_add_check");
Icons.playlist_play = new Icons("playlist_play");
Icons.plus_one = new Icons("plus_one");
Icons.poll = new Icons("poll");
Icons.polymer = new Icons("polymer");
Icons.pool = new Icons("pool");
Icons.portable_wifi_off = new Icons("portable_wifi_off");
Icons.portrait = new Icons("portrait");
Icons.power = new Icons("power");
Icons.power_input = new Icons("power_input");
Icons.power_settings_new = new Icons("power_settings_new");
Icons.pregnant_woman = new Icons("pregnant_woman");
Icons.present_to_all = new Icons("present_to_all");
Icons.print = new Icons("print");
Icons.priority_high = new Icons("priority_high");
Icons.public = new Icons("public");
Icons.publish = new Icons("publish");
Icons.query_builder = new Icons("query_builder");
Icons.question_answer = new Icons("question_answer");
Icons.queue = new Icons("queue");
Icons.queue_music = new Icons("queue_music");
Icons.queue_play_next = new Icons("queue_play_next");
Icons.radio = new Icons("radio");
Icons.radio_button_checked = new Icons("radio_button_checked");
Icons.radio_button_unchecked = new Icons("radio_button_unchecked");
Icons.rate_review = new Icons("rate_review");
Icons.receipt = new Icons("receipt");
Icons.recent_actors = new Icons("recent_actors");
Icons.record_voice_over = new Icons("record_voice_over");
Icons.redeem = new Icons("redeem");
Icons.redo = new Icons("redo");
Icons.refresh = new Icons("refresh");
Icons.remove = new Icons("remove");
Icons.remove_circle = new Icons("remove_circle");
Icons.remove_circle_outline = new Icons("remove_circle_outline");
Icons.remove_from_queue = new Icons("remove_from_queue");
Icons.remove_red_eye = new Icons("remove_red_eye");
Icons.remove_shopping_cart = new Icons("remove_shopping_cart");
Icons.reorder = new Icons("reorder");
Icons.repeat = new Icons("repeat");
Icons.repeat_one = new Icons("repeat_one");
Icons.replay = new Icons("replay");
Icons.replay_10 = new Icons("replay_10");
Icons.replay_30 = new Icons("replay_30");
Icons.replay_5 = new Icons("replay_5");
Icons.reply = new Icons("reply");
Icons.reply_all = new Icons("reply_all");
Icons.report = new Icons("report");
Icons.report_off = new Icons("report_off");
Icons.report_problem = new Icons("report_problem");
Icons.restaurant = new Icons("restaurant");
Icons.restaurant_menu = new Icons("restaurant_menu");
Icons.restore = new Icons("restore");
Icons.restore_from_trash = new Icons("restore_from_trash");
Icons.restore_page = new Icons("restore_page");
Icons.ring_volume = new Icons("ring_volume");
Icons.room = new Icons("room");
Icons.room_service = new Icons("room_service");
Icons.rotate_90_degrees_ccw = new Icons("rotate_90_degrees_ccw");
Icons.rotate_left = new Icons("rotate_left");
Icons.rotate_right = new Icons("rotate_right");
Icons.rounded_corner = new Icons("rounded_corner");
Icons.router = new Icons("router");
Icons.rowing = new Icons("rowing");
Icons.rss_feed = new Icons("rss_feed");
Icons.rv_hookup = new Icons("rv_hookup");
Icons.satellite = new Icons("satellite");
Icons.save = new Icons("save");
Icons.save_alt = new Icons("save_alt");
Icons.scanner = new Icons("scanner");
Icons.scatter_plot = new Icons("scatter_plot");
Icons.schedule = new Icons("schedule");
Icons.school = new Icons("school");
Icons.score = new Icons("score");
Icons.screen_lock_landscape = new Icons("screen_lock_landscape");
Icons.screen_lock_portrait = new Icons("screen_lock_portrait");
Icons.screen_lock_rotation = new Icons("screen_lock_rotation");
Icons.screen_rotation = new Icons("screen_rotation");
Icons.screen_share = new Icons("screen_share");
Icons.sd_card = new Icons("sd_card");
Icons.sd_storage = new Icons("sd_storage");
Icons.search = new Icons("search");
Icons.security = new Icons("security");
Icons.select_all = new Icons("select_all");
Icons.send = new Icons("send");
Icons.sentiment_dissatisfied = new Icons("sentiment_dissatisfied");
Icons.sentiment_neutral = new Icons("sentiment_neutral");
Icons.sentiment_satisfied = new Icons("sentiment_satisfied");
Icons.sentiment_very_dissatisfied = new Icons("sentiment_very_dissatisfied");
Icons.sentiment_very_satisfied = new Icons("sentiment_very_satisfied");
Icons.settings = new Icons("settings");
Icons.settings_applications = new Icons("settings_applications");
Icons.settings_backup_restore = new Icons("settings_backup_restore");
Icons.settings_bluetooth = new Icons("settings_bluetooth");
Icons.settings_brightness = new Icons("settings_brightness");
Icons.settings_cell = new Icons("settings_cell");
Icons.settings_ethernet = new Icons("settings_ethernet");
Icons.settings_input_antenna = new Icons("settings_input_antenna");
Icons.settings_input_component = new Icons("settings_input_component");
Icons.settings_input_composite = new Icons("settings_input_composite");
Icons.settings_input_hdmi = new Icons("settings_input_hdmi");
Icons.settings_input_svideo = new Icons("settings_input_svideo");
Icons.settings_overscan = new Icons("settings_overscan");
Icons.settings_phone = new Icons("settings_phone");
Icons.settings_power = new Icons("settings_power");
Icons.settings_remote = new Icons("settings_remote");
Icons.settings_system_daydream = new Icons("settings_system_daydream");
Icons.settings_voice = new Icons("settings_voice");
Icons.share = new Icons("share");
Icons.shop = new Icons("shop");
Icons.shop_two = new Icons("shop_two");
Icons.shopping_basket = new Icons("shopping_basket");
Icons.shopping_cart = new Icons("shopping_cart");
Icons.short_text = new Icons("short_text");
Icons.show_chart = new Icons("show_chart");
Icons.shuffle = new Icons("shuffle");
Icons.shutter_speed = new Icons("shutter_speed");
Icons.signal_cellular_4_bar = new Icons("signal_cellular_4_bar");
Icons.signal_cellular_connected_no_internet_4_bar = new Icons("signal_cellular_connected_no_internet_4_bar");
Icons.signal_cellular_no_sim = new Icons("signal_cellular_no_sim");
Icons.signal_cellular_null = new Icons("signal_cellular_null");
Icons.signal_cellular_off = new Icons("signal_cellular_off");
Icons.signal_wifi_4_bar = new Icons("signal_wifi_4_bar");
Icons.signal_wifi_4_bar_lock = new Icons("signal_wifi_4_bar_lock");
Icons.signal_wifi_off = new Icons("signal_wifi_off");
Icons.sim_card = new Icons("sim_card");
Icons.sim_card_alert = new Icons("sim_card_alert");
Icons.skip_next = new Icons("skip_next");
Icons.skip_previous = new Icons("skip_previous");
Icons.slideshow = new Icons("slideshow");
Icons.slow_motion_video = new Icons("slow_motion_video");
Icons.smartphone = new Icons("smartphone");
Icons.smoke_free = new Icons("smoke_free");
Icons.smoking_rooms = new Icons("smoking_rooms");
Icons.sms = new Icons("sms");
Icons.sms_failed = new Icons("sms_failed");
Icons.snooze = new Icons("snooze");
Icons.sort = new Icons("sort");
Icons.sort_by_alpha = new Icons("sort_by_alpha");
Icons.spa = new Icons("spa");
Icons.space_bar = new Icons("space_bar");
Icons.speaker = new Icons("speaker");
Icons.speaker_group = new Icons("speaker_group");
Icons.speaker_notes = new Icons("speaker_notes");
Icons.speaker_notes_off = new Icons("speaker_notes_off");
Icons.speaker_phone = new Icons("speaker_phone");
Icons.spellcheck = new Icons("spellcheck");
Icons.star = new Icons("star");
Icons.star_border = new Icons("star_border");
Icons.star_half = new Icons("star_half");
Icons.stars = new Icons("stars");
Icons.stay_current_landscape = new Icons("stay_current_landscape");
Icons.stay_current_portrait = new Icons("stay_current_portrait");
Icons.stay_primary_landscape = new Icons("stay_primary_landscape");
Icons.stay_primary_portrait = new Icons("stay_primary_portrait");
Icons.stop = new Icons("stop");
Icons.stop_screen_share = new Icons("stop_screen_share");
Icons.storage = new Icons("storage");
Icons.store = new Icons("store");
Icons.store_mall_directory = new Icons("store_mall_directory");
Icons.straighten = new Icons("straighten");
Icons.streetview = new Icons("streetview");
Icons.strikethrough_s = new Icons("strikethrough_s");
Icons.style = new Icons("style");
Icons.subdirectory_arrow_left = new Icons("subdirectory_arrow_left");
Icons.subdirectory_arrow_right = new Icons("subdirectory_arrow_right");
Icons.subject = new Icons("subject");
Icons.subscriptions = new Icons("subscriptions");
Icons.subtitles = new Icons("subtitles");
Icons.subway = new Icons("subway");
Icons.supervised_user_circle = new Icons("supervised_user_circle");
Icons.supervisor_account = new Icons("supervisor_account");
Icons.surround_sound = new Icons("surround_sound");
Icons.swap_calls = new Icons("swap_calls");
Icons.swap_horiz = new Icons("swap_horiz");
Icons.swap_horizontal_circle = new Icons("swap_horizontal_circle");
Icons.swap_vert = new Icons("swap_vert");
Icons.swap_vertical_circle = new Icons("swap_vertical_circle");
Icons.switch_camera = new Icons("switch_camera");
Icons.switch_video = new Icons("switch_video");
Icons.sync = new Icons("sync");
Icons.sync_disabled = new Icons("sync_disabled");
Icons.sync_problem = new Icons("sync_problem");
Icons.system_update = new Icons("system_update");
Icons.system_update_alt = new Icons("system_update_alt");
Icons.tab = new Icons("tab");
Icons.tab_unselected = new Icons("tab_unselected");
Icons.table_chart = new Icons("table_chart");
Icons.tablet = new Icons("tablet");
Icons.tablet_android = new Icons("tablet_android");
Icons.tablet_mac = new Icons("tablet_mac");
Icons.tag_faces = new Icons("tag_faces");
Icons.tap_and_play = new Icons("tap_and_play");
Icons.terrain = new Icons("terrain");
Icons.text_fields = new Icons("text_fields");
Icons.text_format = new Icons("text_format");
Icons.text_rotate_up = new Icons("text_rotate_up");
Icons.text_rotate_vertical = new Icons("text_rotate_vertical");
Icons.text_rotation_angledown = new Icons("text_rotation_angledown");
Icons.text_rotation_angleup = new Icons("text_rotation_angleup");
Icons.text_rotation_down = new Icons("text_rotation_down");
Icons.text_rotation_none = new Icons("text_rotation_none");
Icons.textsms = new Icons("textsms");
Icons.texture = new Icons("texture");
Icons.theaters = new Icons("theaters");
Icons.thumb_down = new Icons("thumb_down");
Icons.thumb_up = new Icons("thumb_up");
Icons.thumbs_up_down = new Icons("thumbs_up_down");
Icons.time_to_leave = new Icons("time_to_leave");
Icons.timelapse = new Icons("timelapse");
Icons.timeline = new Icons("timeline");
Icons.timer = new Icons("timer");
Icons.timer_10 = new Icons("timer_10");
Icons.timer_3 = new Icons("timer_3");
Icons.timer_off = new Icons("timer_off");
Icons.title = new Icons("title");
Icons.toc = new Icons("toc");
Icons.today = new Icons("today");
Icons.toll = new Icons("toll");
Icons.tonality = new Icons("tonality");
Icons.touch_app = new Icons("touch_app");
Icons.toys = new Icons("toys");
Icons.track_changes = new Icons("track_changes");
Icons.traffic = new Icons("traffic");
Icons.train = new Icons("train");
Icons.tram = new Icons("tram");
Icons.transfer_within_a_station = new Icons("transfer_within_a_station");
Icons.transform = new Icons("transform");
Icons.transit_enterexit = new Icons("transit_enterexit");
Icons.translate = new Icons("translate");
Icons.trending_down = new Icons("trending_down");
Icons.trending_flat = new Icons("trending_flat");
Icons.trending_up = new Icons("trending_up");
Icons.trip_origin = new Icons("trip_origin");
Icons.tune = new Icons("tune");
Icons.turned_in = new Icons("turned_in");
Icons.turned_in_not = new Icons("turned_in_not");
Icons.tv = new Icons("tv");
Icons.unarchive = new Icons("unarchive");
Icons.undo = new Icons("undo");
Icons.unfold_less = new Icons("unfold_less");
Icons.unfold_more = new Icons("unfold_more");
Icons.update = new Icons("update");
Icons.usb = new Icons("usb");
Icons.verified_user = new Icons("verified_user");
Icons.vertical_align_bottom = new Icons("vertical_align_bottom");
Icons.vertical_align_center = new Icons("vertical_align_center");
Icons.vertical_align_top = new Icons("vertical_align_top");
Icons.vibration = new Icons("vibration");
Icons.video_call = new Icons("video_call");
Icons.video_label = new Icons("video_label");
Icons.video_library = new Icons("video_library");
Icons.videocam = new Icons("videocam");
Icons.videocam_off = new Icons("videocam_off");
Icons.videogame_asset = new Icons("videogame_asset");
Icons.view_agenda = new Icons("view_agenda");
Icons.view_array = new Icons("view_array");
Icons.view_carousel = new Icons("view_carousel");
Icons.view_column = new Icons("view_column");
Icons.view_comfy = new Icons("view_comfy");
Icons.view_compact = new Icons("view_compact");
Icons.view_day = new Icons("view_day");
Icons.view_headline = new Icons("view_headline");
Icons.view_list = new Icons("view_list");
Icons.view_module = new Icons("view_module");
Icons.view_quilt = new Icons("view_quilt");
Icons.view_stream = new Icons("view_stream");
Icons.view_week = new Icons("view_week");
Icons.vignette = new Icons("vignette");
Icons.visibility = new Icons("visibility");
Icons.visibility_off = new Icons("visibility_off");
Icons.voice_chat = new Icons("voice_chat");
Icons.voicemail = new Icons("voicemail");
Icons.volume_down = new Icons("volume_down");
Icons.volume_mute = new Icons("volume_mute");
Icons.volume_off = new Icons("volume_off");
Icons.volume_up = new Icons("volume_up");
Icons.vpn_key = new Icons("vpn_key");
Icons.vpn_lock = new Icons("vpn_lock");
Icons.wallpaper = new Icons("wallpaper");
Icons.warning = new Icons("warning");
Icons.watch = new Icons("watch");
Icons.watch_later = new Icons("watch_later");
Icons.wb_auto = new Icons("wb_auto");
Icons.wb_cloudy = new Icons("wb_cloudy");
Icons.wb_incandescent = new Icons("wb_incandescent");
Icons.wb_iridescent = new Icons("wb_iridescent");
Icons.wb_sunny = new Icons("wb_sunny");
Icons.wc = new Icons("wc");
Icons.web = new Icons("web");
Icons.web_asset = new Icons("web_asset");
Icons.weekend = new Icons("weekend");
Icons.whatshot = new Icons("whatshot");
Icons.widgets = new Icons("widgets");
Icons.wifi = new Icons("wifi");
Icons.wifi_lock = new Icons("wifi_lock");
Icons.wifi_tethering = new Icons("wifi_tethering");
Icons.work = new Icons("work");
Icons.wrap_text = new Icons("wrap_text");
Icons.youtube_searched_for = new Icons("youtube_searched_for");
Icons.zoom_in = new Icons("zoom_in");
Icons.zoom_out = new Icons("zoom_out");
Icons.zoom_out_map = new Icons("zoom_out_map");
//#endregion
//#region ******** Cupertino Icons ********
class CupertinoIcons extends IconData {
    constructor(icon) {
        super(icon);
    }
}
exports.CupertinoIcons = CupertinoIcons;
CupertinoIcons.left_chevron = new CupertinoIcons("left_chevron");
CupertinoIcons.right_chevron = new CupertinoIcons("right_chevron");
CupertinoIcons.share = new CupertinoIcons("share");
CupertinoIcons.share_solid = new CupertinoIcons("share_solid");
CupertinoIcons.book = new CupertinoIcons("book");
CupertinoIcons.book_solid = new CupertinoIcons("book_solid");
CupertinoIcons.bookmark = new CupertinoIcons("bookmark");
CupertinoIcons.bookmark_solid = new CupertinoIcons("bookmark_solid");
CupertinoIcons.info = new CupertinoIcons("info");
CupertinoIcons.reply = new CupertinoIcons("reply");
CupertinoIcons.conversation_bubble = new CupertinoIcons("conversation_bubble");
CupertinoIcons.profile_circled = new CupertinoIcons("profile_circled");
CupertinoIcons.plus_circled = new CupertinoIcons("plus_circled");
CupertinoIcons.minus_circled = new CupertinoIcons("minus_circled");
CupertinoIcons.flag = new CupertinoIcons("flag");
CupertinoIcons.search = new CupertinoIcons("search");
CupertinoIcons.check_mark = new CupertinoIcons("check_mark");
CupertinoIcons.check_mark_circled = new CupertinoIcons("check_mark_circled");
CupertinoIcons.check_mark_circled_solid = new CupertinoIcons("check_mark_circled_solid");
CupertinoIcons.circle = new CupertinoIcons("circle");
CupertinoIcons.circle_filled = new CupertinoIcons("circle_filled");
CupertinoIcons.back = new CupertinoIcons("back");
CupertinoIcons.forward = new CupertinoIcons("forward");
CupertinoIcons.home = new CupertinoIcons("home");
CupertinoIcons.shopping_cart = new CupertinoIcons("shopping_cart");
CupertinoIcons.ellipsis = new CupertinoIcons("ellipsis");
CupertinoIcons.phone = new CupertinoIcons("phone");
CupertinoIcons.phone_solid = new CupertinoIcons("phone_solid");
CupertinoIcons.down_arrow = new CupertinoIcons("down_arrow");
CupertinoIcons.up_arrow = new CupertinoIcons("up_arrow");
CupertinoIcons.battery_charging = new CupertinoIcons("battery_charging");
CupertinoIcons.battery_empty = new CupertinoIcons("battery_empty");
CupertinoIcons.battery_full = new CupertinoIcons("battery_full");
CupertinoIcons.battery_75_percent = new CupertinoIcons("battery_75_percent");
CupertinoIcons.battery_25_percent = new CupertinoIcons("battery_25_percent");
CupertinoIcons.bluetooth = new CupertinoIcons("bluetooth");
CupertinoIcons.restart = new CupertinoIcons("restart");
CupertinoIcons.reply_all = new CupertinoIcons("reply_all");
CupertinoIcons.reply_thick_solid = new CupertinoIcons("reply_thick_solid");
CupertinoIcons.share_up = new CupertinoIcons("share_up");
CupertinoIcons.shuffle = new CupertinoIcons("shuffle");
CupertinoIcons.shuffle_medium = new CupertinoIcons("shuffle_medium");
CupertinoIcons.shuffle_thick = new CupertinoIcons("shuffle_thick");
CupertinoIcons.photo_camera = new CupertinoIcons("photo_camera");
CupertinoIcons.photo_camera_solid = new CupertinoIcons("photo_camera_solid");
CupertinoIcons.video_camera = new CupertinoIcons("video_camera");
CupertinoIcons.video_camera_solid = new CupertinoIcons("video_camera_solid");
CupertinoIcons.switch_camera = new CupertinoIcons("switch_camera");
CupertinoIcons.switch_camera_solid = new CupertinoIcons("switch_camera_solid");
CupertinoIcons.collections = new CupertinoIcons("collections");
CupertinoIcons.collections_solid = new CupertinoIcons("collections_solid");
CupertinoIcons.folder = new CupertinoIcons("folder");
CupertinoIcons.folder_solid = new CupertinoIcons("folder_solid");
CupertinoIcons.folder_open = new CupertinoIcons("folder_open");
CupertinoIcons.delete = new CupertinoIcons("delete");
CupertinoIcons.delete_solid = new CupertinoIcons("delete_solid");
CupertinoIcons.delete_simple = new CupertinoIcons("delete_simple");
CupertinoIcons.pen = new CupertinoIcons("pen");
CupertinoIcons.pencil = new CupertinoIcons("pencil");
CupertinoIcons.create = new CupertinoIcons("create");
CupertinoIcons.create_solid = new CupertinoIcons("create_solid");
CupertinoIcons.refresh = new CupertinoIcons("refresh");
CupertinoIcons.refresh_circled = new CupertinoIcons("refresh_circled");
CupertinoIcons.refresh_circled_solid = new CupertinoIcons("refresh_circled_solid");
CupertinoIcons.refresh_thin = new CupertinoIcons("refresh_thin");
CupertinoIcons.refresh_thick = new CupertinoIcons("refresh_thick");
CupertinoIcons.refresh_bold = new CupertinoIcons("refresh_bold");
CupertinoIcons.clear_thick = new CupertinoIcons("clear_thick");
CupertinoIcons.clear_thick_circled = new CupertinoIcons("clear_thick_circled");
CupertinoIcons.clear = new CupertinoIcons("clear");
CupertinoIcons.clear_circled = new CupertinoIcons("clear_circled");
CupertinoIcons.clear_circled_solid = new CupertinoIcons("clear_circled_solid");
CupertinoIcons.add = new CupertinoIcons("add");
CupertinoIcons.add_circled = new CupertinoIcons("add_circled");
CupertinoIcons.add_circled_solid = new CupertinoIcons("add_circled_solid");
CupertinoIcons.gear = new CupertinoIcons("gear");
CupertinoIcons.gear_solid = new CupertinoIcons("gear_solid");
CupertinoIcons.gear_big = new CupertinoIcons("gear_big");
CupertinoIcons.settings = new CupertinoIcons("settings");
CupertinoIcons.settings_solid = new CupertinoIcons("settings_solid");
CupertinoIcons.music_note = new CupertinoIcons("music_note");
CupertinoIcons.double_music_note = new CupertinoIcons("double_music_note");
CupertinoIcons.play_arrow = new CupertinoIcons("play_arrow");
CupertinoIcons.play_arrow_solid = new CupertinoIcons("play_arrow_solid");
CupertinoIcons.pause = new CupertinoIcons("pause");
CupertinoIcons.pause_solid = new CupertinoIcons("pause_solid");
CupertinoIcons.loop = new CupertinoIcons("loop");
CupertinoIcons.loop_thick = new CupertinoIcons("loop_thick");
CupertinoIcons.volume_down = new CupertinoIcons("volume_down");
CupertinoIcons.volume_mute = new CupertinoIcons("volume_mute");
CupertinoIcons.volume_off = new CupertinoIcons("volume_off");
CupertinoIcons.volume_up = new CupertinoIcons("volume_up");
CupertinoIcons.fullscreen = new CupertinoIcons("fullscreen");
CupertinoIcons.fullscreen_exit = new CupertinoIcons("fullscreen_exit");
CupertinoIcons.mic_off = new CupertinoIcons("mic_off");
CupertinoIcons.mic = new CupertinoIcons("mic");
CupertinoIcons.mic_solid = new CupertinoIcons("mic_solid");
CupertinoIcons.clock = new CupertinoIcons("clock");
CupertinoIcons.clock_solid = new CupertinoIcons("clock_solid");
CupertinoIcons.time = new CupertinoIcons("time");
CupertinoIcons.time_solid = new CupertinoIcons("time_solid");
CupertinoIcons.padlock = new CupertinoIcons("padlock");
CupertinoIcons.padlock_solid = new CupertinoIcons("padlock_solid");
CupertinoIcons.eye = new CupertinoIcons("eye");
CupertinoIcons.eye_solid = new CupertinoIcons("eye_solid");
CupertinoIcons.person = new CupertinoIcons("person");
CupertinoIcons.person_solid = new CupertinoIcons("person_solid");
CupertinoIcons.person_add = new CupertinoIcons("person_add");
CupertinoIcons.person_add_solid = new CupertinoIcons("person_add_solid");
CupertinoIcons.group = new CupertinoIcons("group");
CupertinoIcons.group_solid = new CupertinoIcons("group_solid");
CupertinoIcons.mail = new CupertinoIcons("mail");
CupertinoIcons.mail_solid = new CupertinoIcons("mail_solid");
CupertinoIcons.location = new CupertinoIcons("location");
CupertinoIcons.location_solid = new CupertinoIcons("location_solid");
CupertinoIcons.tag = new CupertinoIcons("tag");
CupertinoIcons.tag_solid = new CupertinoIcons("tag_solid");
CupertinoIcons.tags = new CupertinoIcons("tags");
CupertinoIcons.tags_solid = new CupertinoIcons("tags_solid");
CupertinoIcons.bus = new CupertinoIcons("bus");
CupertinoIcons.car = new CupertinoIcons("car");
CupertinoIcons.car_detailed = new CupertinoIcons("car_detailed");
CupertinoIcons.train_style_one = new CupertinoIcons("train_style_one");
CupertinoIcons.train_style_two = new CupertinoIcons("train_style_two");
CupertinoIcons.paw = new CupertinoIcons("paw");
CupertinoIcons.paw_solid = new CupertinoIcons("paw_solid");
CupertinoIcons.game_controller = new CupertinoIcons("game_controller");
CupertinoIcons.game_controller_solid = new CupertinoIcons("game_controller_solid");
CupertinoIcons.lab_flask = new CupertinoIcons("lab_flask");
CupertinoIcons.lab_flask_solid = new CupertinoIcons("lab_flask_solid");
CupertinoIcons.heart = new CupertinoIcons("heart");
CupertinoIcons.heart_solid = new CupertinoIcons("heart_solid");
CupertinoIcons.bell = new CupertinoIcons("bell");
CupertinoIcons.bell_solid = new CupertinoIcons("bell_solid");
CupertinoIcons.news = new CupertinoIcons("news");
CupertinoIcons.news_solid = new CupertinoIcons("news_solid");
CupertinoIcons.brightness = new CupertinoIcons("brightness");
CupertinoIcons.brightness_solid = new CupertinoIcons("brightness_solid");
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
}
exports.AbsorbPointer = AbsorbPointer;
class ActionChip extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          onPressed:OnCallback,
          pressElevation?:number,
          tooltip?:string,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          focusNode?:FocusNode,
          autofocus?:boolean,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          visualDensity?:VisualDensity,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          shadowColor?:Color,
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
            this.onPressed = config.onPressed;
            this.pressElevation = config.pressElevation;
            this.tooltip = config.tooltip;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.focusNode = config.focusNode;
            this.autofocus = config.autofocus;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
        }
    }
}
exports.ActionChip = ActionChip;
class AnimationController extends Widget {
    ///TODO:
    dispose() { }
}
exports.AnimationController = AnimationController;
//****** TODO Animation ******
class Animation extends Widget {
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
          onEnd?:OnCallback,
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
          onEnd?:OnCallback,
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
          onEnd?:OnCallback
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
          onEnd?:OnCallback,
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
          onEnd?:OnCallback
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
}
exports.BackButtonIcon = BackButtonIcon;
class BackButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:OnCallback,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onPressed = config.onPressed;
        }
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
}
exports.Builder = Builder;
class ColorFiltered extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          colorFilter:ColorFilter,
          child?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.colorFilter = config.colorFilter;
            this.child = config.child;
        }
    }
}
exports.ColorFiltered = ColorFiltered;
class CloseButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          onPressed?:OnCallback,
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
}
exports.Center = Center;
class ChoiceChip extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          selected?:boolean,
          onSelected?:OnCallbackBoolean,
          pressElevation?:number,
          disabledColor?:Color,
          selectedColor?:Color,
          tooltip?:string,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          focusNode?:FocusNode,
          autofocus?:boolean,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          visualDensity?:VisualDensity,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          shadowColor?:Color,
          selectedShadowColor?:Color,
          avatarBorder?:ShapeBorder,
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
            this.selected = config.selected;
            this.onSelected = config.onSelected;
            this.pressElevation = config.pressElevation;
            this.disabledColor = config.disabledColor;
            this.selectedColor = config.selectedColor;
            this.tooltip = config.tooltip;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.focusNode = config.focusNode;
            this.autofocus = config.autofocus;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.selectedShadowColor = config.selectedShadowColor;
            this.avatarBorder = config.avatarBorder;
        }
    }
}
exports.ChoiceChip = ChoiceChip;
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
          onDeleted?:OnCallback,
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
}
exports.CheckedModeBanner = CheckedModeBanner;
class CheckboxListTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:OnCallbackBoolean,
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
}
exports.CheckboxListTile = CheckboxListTile;
class Checkbox extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:OnCallbackBoolean,
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
}
exports.Checkbox = Checkbox;
class CheckboxEx extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          tristate?:boolean,
          onChanged:OnCallbackBoolean,
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
}
exports.CheckboxEx = CheckboxEx;
class ClipRect extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.clipBehavior = config.clipBehavior;
            this.child = config.child;
        }
    }
}
exports.ClipRect = ClipRect;
class ClipOval extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.clipBehavior = config.clipBehavior;
            this.child = config.child;
        }
    }
}
exports.ClipOval = ClipOval;
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
}
exports.ConstrainedBox = ConstrainedBox;
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
}
exports.Directionality = Directionality;
class DropdownMenuItem extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:OnCallback,
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
}
exports.Expanded = Expanded;
class ExpandIcon extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          isExpanded?:boolean,
          size?:number,
          onPressed:OnCallbackBoolean,
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
          onExpansionChanged?:OnCallbackBoolean,
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
}
exports.Flexible = Flexible;
class FilterChip extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          selected?:boolean,
          onSelected:OnCallbackBoolean,
          pressElevation?:number,
          disabledColor?:Color,
          selectedColor?:Color,
          tooltip?:string,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          focusNode?:FocusNode,
          autofocus?:boolean,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          visualDensity?:VisualDensity,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          shadowColor?:Color,
          selectedShadowColor?:Color,
          showCheckmark?:boolean,
          checkmarkColor?:Color,
          avatarBorder?:ShapeBorder,
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
            this.selected = config.selected;
            this.onSelected = config.onSelected;
            this.pressElevation = config.pressElevation;
            this.disabledColor = config.disabledColor;
            this.selectedColor = config.selectedColor;
            this.tooltip = config.tooltip;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.focusNode = config.focusNode;
            this.autofocus = config.autofocus;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.selectedShadowColor = config.selectedShadowColor;
            this.showCheckmark = config.showCheckmark;
            this.checkmarkColor = config.checkmarkColor;
            this.avatarBorder = config.avatarBorder;
        }
    }
}
exports.FilterChip = FilterChip;
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
}
exports.Flow = Flow;
class FlatButton extends Widget {
    /**
     * @param config config:
        {
          child:Widget,
          onPressed:OnCallback,
          padding?:EdgeInsets;,
          onHighlightChanged?:OnCallbackBoolean,
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
  
          onLongPress?: OnCallback,
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
          onPressed:OnCallback,
          padding?:EdgeInsets,
          onHighlightChanged?:OnCallbackBoolean,
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
  
          onLongPress?: OnCallback,
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
          onPressed:OnCallback,
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
}
exports.FractionalTranslation = FractionalTranslation;
class GestureDetector extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        child?:Widget,
        onTap?:OnCallback,
        onTapDown?:OnTapDown,
        onTapUp?:OnTapUp,
        onTapCancel?:OnCallback,
        onDoubleTap?:OnCallback,
        onLongPress?:OnCallback,
        onLongPressUp?:OnCallback,
        onVerticalDragDown?:OnDragDown,
        onVerticalDragStart?:OnDragStart,
        onVerticalDragUpdate?:OnDragUpdate,
        onVerticalDragEnd?:OnDragEnd,
        onVerticalDragCancel?:OnCallback,
        onHorizontalDragDown?:OnDragDown,
        onHorizontalDragStart?:OnDragStart,
        onHorizontalDragUpdate?:OnDragUpdate,
        onHorizontalDragEnd?:OnDragEnd,
        onHorizontalDragCancel?:OnCallback,
        onPanDown?:OnDragDown,
        onPanStart?:OnDragStart,
        onPanUpdate?:OnDragUpdate,
        onPanEnd?:OnDragEnd,
        onPanCancel?:OnCallback,
        onScaleStart?:OnScaleStart,
        onScaleUpdate?:OnScaleUpdate,
        onScaleEnd?:OnScaleEnd,
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
}
exports.GestureDetector = GestureDetector;
class GridView extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        scrollDirection?:Axis,
        reverse?:boolean,
        controller?:ScrollController,
        primary?:boolean,
        physics?:ScrollPhysics,
        shrinkWrap?:boolean,
        padding?:EdgeInsets,
        gridDelegate:SliverGridDelegate,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        cacheExtent?:number,
        children?:Array<Widget>,
        semanticChildCount?:number,
        dragStartBehavior?:DragStartBehavior,
        clipBehavior?:Clip,
        keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior,
        restorationId?:string,
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
            this.gridDelegate = config.gridDelegate;
            this.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            this.addRepaintBoundaries = config.addRepaintBoundaries;
            this.addSemanticIndexes = config.addSemanticIndexes;
            this.cacheExtent = config.cacheExtent;
            this.children = config.children;
            this.semanticChildCount = config.semanticChildCount;
            this.dragStartBehavior = config.dragStartBehavior;
            this.clipBehavior = config.clipBehavior;
            this.keyboardDismissBehavior = config.keyboardDismissBehavior;
            this.restorationId = config.restorationId;
        }
    }
}
exports.GridView = GridView;
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
}
exports.InputDecorator = InputDecorator;
class InputChip extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          selected?:boolean,
          isEnabled?:boolean,
          onSelected?:OnCallbackBoolean,
          deleteIcon?:Widget,
          onDeleted?:OnCallback,
          deleteIconColor?:Color,
          deleteButtonTooltipMessage?:string,
          onPressed?:OnCallback,
          pressElevation?:number,
          disabledColor?:Color,
          selectedColor?:Color,
          tooltip?:string,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          focusNode?:FocusNode,
          autofocus?:boolean,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          visualDensity?:VisualDensity,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          shadowColor?:Color,
          selectedShadowColor?:Color,
          showCheckmark?:boolean,
          checkmarkColor?:Color,
          avatarBorder?:ShapeBorder,
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
            this.selected = config.selected;
            this.isEnabled = config.isEnabled;
            this.onSelected = config.onSelected;
            this.deleteIcon = config.deleteIcon;
            this.onDeleted = config.onDeleted;
            this.deleteIconColor = config.deleteIconColor;
            this.deleteButtonTooltipMessage = config.deleteButtonTooltipMessage;
            this.onPressed = config.onPressed;
            this.pressElevation = config.pressElevation;
            this.disabledColor = config.disabledColor;
            this.selectedColor = config.selectedColor;
            this.tooltip = config.tooltip;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.focusNode = config.focusNode;
            this.autofocus = config.autofocus;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.selectedShadowColor = config.selectedShadowColor;
            this.showCheckmark = config.showCheckmark;
            this.checkmarkColor = config.checkmarkColor;
            this.avatarBorder = config.avatarBorder;
        }
    }
}
exports.InputChip = InputChip;
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
}
exports.IgnorePointer = IgnorePointer;
class IconButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          icon:Widget,
          onPressed:OnCallback,
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
}
exports.ImageIcon = ImageIcon;
class InkResponse extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:OnCallback,
          onTapDown?:OnTapDown,
          onTapCancel?:OnCallback,
          onDoubleTap?:OnCallback,
          onLongPress?:OnCallback,
          onHighlightChanged?:OnCallbackBoolean,
          onHover?:OnCallbackBoolean,
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
          onFocusChange?:OnCallbackBoolean,
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
}
exports.InkResponse = InkResponse;
class InkWell extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onTap?:OnCallback,
          onTapDown?:OnTapDown,
          onTapCancel?:OnCallback,
          onDoubleTap?:OnCallback,
          onLongPress?:OnCallback,
          onHighlightChanged?:OnCallbackBoolean,
          onHover?:OnCallbackBoolean,
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
          onFocusChange?:OnCallbackBoolean,
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
          onTap?:OnCallback,
          onLongPress?:OnCallback,
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
}
exports.OverflowBox = OverflowBox;
class OutlineButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed:OnCallback,
          onLongPress?:OnCallback,
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
          onPressed?:OnCallback,
          onLongPress?:OnCallback,
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
}
exports.PreferredSize = PreferredSize;
//****** TODO PreferredSizeWidget ******
class PreferredSizeWidget extends Widget {
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
}
exports.PopupMenuItem = PopupMenuItem;
class PageView extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          scrollDirection?:Axis,
          reverse?:boolean,
          controller?:PageController,
          physics?:ScrollPhysics,
          pageSnapping?:boolean,
          onPageChanged?:OnCallbackNumber,
          children?:Array<Widget>,
          dragStartBehavior?:DragStartBehavior,
          allowImplicitScrolling?:boolean,
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
            this.physics = config.physics;
            this.pageSnapping = config.pageSnapping;
            this.onPageChanged = config.onPageChanged;
            this.children = config.children;
            this.dragStartBehavior = config.dragStartBehavior;
            this.allowImplicitScrolling = config.allowImplicitScrolling;
            this.restorationId = config.restorationId;
            this.clipBehavior = config.clipBehavior;
        }
    }
}
exports.PageView = PageView;
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
}
exports.Row = Row;
class RawChip extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          avatar?:Widget,
          label:Widget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          selected?:boolean,
          isEnabled?:boolean,
          tapEnabled?:boolean,
          onSelected?:OnCallbackBoolean,
          deleteIcon?:Widget,
          onDeleted?:OnCallback,
          deleteIconColor?:Color,
          deleteButtonTooltipMessage?:string,
          onPressed?:OnCallback,
          pressElevation?:number,
          disabledColor?:Color,
          selectedColor?:Color,
          tooltip?:string,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          focusNode?:FocusNode,
          autofocus?:boolean,
          backgroundColor?:Color,
          padding?:EdgeInsets,
          visualDensity?:VisualDensity,
          materialTapTargetSize?:MaterialTapTargetSize,
          elevation?:number,
          shadowColor?:Color,
          selectedShadowColor?:Color,
          showCheckmark?:boolean,
          checkmarkColor?:Color,
          avatarBorder?:ShapeBorder,
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
            this.selected = config.selected;
            this.isEnabled = config.isEnabled;
            this.tapEnabled = config.tapEnabled;
            this.onSelected = config.onSelected;
            this.deleteIcon = config.deleteIcon;
            this.onDeleted = config.onDeleted;
            this.deleteIconColor = config.deleteIconColor;
            this.deleteButtonTooltipMessage = config.deleteButtonTooltipMessage;
            this.onPressed = config.onPressed;
            this.pressElevation = config.pressElevation;
            this.disabledColor = config.disabledColor;
            this.selectedColor = config.selectedColor;
            this.tooltip = config.tooltip;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.focusNode = config.focusNode;
            this.autofocus = config.autofocus;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
            this.visualDensity = config.visualDensity;
            this.materialTapTargetSize = config.materialTapTargetSize;
            this.elevation = config.elevation;
            this.shadowColor = config.shadowColor;
            this.selectedShadowColor = config.selectedShadowColor;
            this.showCheckmark = config.showCheckmark;
            this.checkmarkColor = config.checkmarkColor;
            this.avatarBorder = config.avatarBorder;
        }
    }
}
exports.RawChip = RawChip;
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
}
exports.RotatedBox = RotatedBox;
class RaisedButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child?:Widget,
          onPressed?:OnCallback,
          onHighlightChanged?:OnCallbackBoolean,
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
        
          onLongPress?:OnCallback,
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
        icon?:Widget,
        label?:Widget,
        onPressed?:OnCallback,
        onHighlightChanged?:OnCallbackBoolean,
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
        onLongPress?:OnCallback,
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
        value?:string,
        groupValue?:string,
        onChanged?:OnCallbackString,
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
}
exports.Radio = Radio;
class RadioListTile extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        value:string,
        groupValue:string,
        onChanged:OnCallbackString,
        toggleable?:boolean,
        activeColor?:Color,
        title?:Widget,
        subtitle?:Widget,
        isThreeLine?:boolean,
        dense?:boolean,
        secondary?:Widget,
        selected?:boolean,
        controlAffinity?:ListTileControlAffinity,
        autofocus?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.value = config.value;
            this.groupValue = config.groupValue;
            this.onChanged = config.onChanged;
            this.toggleable = config.toggleable;
            this.activeColor = config.activeColor;
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.isThreeLine = config.isThreeLine;
            this.dense = config.dense;
            this.secondary = config.secondary;
            this.controlAffinity = config.controlAffinity;
            this.autofocus = config.autofocus;
        }
    }
}
exports.RadioListTile = RadioListTile;
class RawMaterialButton extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        onPressed:OnCallback,
        onLongPress?:OnCallback,
        onHighlightChanged?:OnCallbackBoolean,
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
}
exports.RichText = RichText;
class Step extends Widget {
    /**
     * @param config config:
      {
        title:Widget,
        subtitle?:Widget,
        content:Widget,
        state?:StepState,
        isActive?:boolean,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.subtitle = config.subtitle;
            this.content = config.content;
            this.state = config.state;
            this.isActive = config.isActive;
        }
    }
}
exports.Step = Step;
class Stepper extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        steps?:Array<Step>,
        physics?:ScrollPhysics,
        type?:StepperType,
        currentStep?:number,
        onStepTapped?:OnCallbackNumber,
        onStepContinue?:OnCallback,
        onStepCancel?:OnCallback,
      }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.steps = config.steps;
            this.physics = config.physics;
            this.type = config.type;
            this.currentStep = config.currentStep;
            this.onStepTapped = config.onStepTapped;
            this.onStepContinue = config.onStepContinue;
            this.onStepCancel = config.onStepCancel;
        }
    }
}
exports.Stepper = Stepper;
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
  
        onTap?:OnCallback,
        onLongPress?:OnCallback,
        onScrollLeft?:OnCallback,
        onScrollRight?:OnCallback,
        onScrollUp?:OnCallback,
        onScrollDown?:OnCallback,
        onIncrease?:OnCallback,
        onDecrease?:OnCallback,
        onCopy?:OnCallback,
        onCut?:OnCallback,
        onPaste?:OnCallback,
        onDismiss?:OnCallback,
        onDidGainAccessibilityFocus?:OnCallback,
        onDidLoseAccessibilityFocus?:OnCallback,
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
}
exports.Semantics = Semantics;
class SwitchListTile extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:OnCallbackBoolean,
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
}
exports.SwitchListTile = SwitchListTile;
class Switch extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged?:OnCallbackBoolean,
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
}
exports.Switch = Switch;
class Slider extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        value?:number,
        onChanged?:OnCallbackNumber,
        onChangeStart?:OnCallbackNumber,
        onChangeEnd?:OnCallbackNumber,
        min?:number,
        max?:number,
        divisions?:number,
        label?:string,
        activeColor?:Color,
        inactiveColor?:Color,
        semanticFormatterCallback?:OnCallbackNumber,
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
        onStretchTrigger?:OnCallback,
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
}
exports.Scaffold = Scaffold;
//****** TODO Scaffold ******
class ScaffoldState extends DartClass {
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
        onVisible?:OnCallback,
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
}
exports.SnackBar = SnackBar;
class SnackBarAction extends Widget {
    /**
     * @param config config:
      {
        key?:Widget,
        lable:string,
        onPressed?:OnCallback,
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
}
exports.SliverVisibility = SliverVisibility;
class SelectableText extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        key?:Key,
        focusNode?:FocusNode,
        style?:TextStyle,
        strutStyle?:StrutStyle,
        textAlign?:TextAlign,
        textDirection?:TextDirection,
        textScaleFactor?:number,
        showCursor?:boolean,
        autofocus?:boolean,
        toolbarOptions?:ToolbarOptions,
        minLines?:number,
        maxLines?:number,
        cursorWidth?:number,
        cursorHeight?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        dragStartBehavior?:DragStartBehavior,
        enableInteractiveSelection?:boolean,
        onTap?:OnCallback,
        scrollPhysics?:ScrollPhysics,
        textWidthBasis?:TextWidthBasis,
      }
     */
    constructor(data, config) {
        super();
        this.data = data;
        if (config != null && config != undefined) {
            this.key = config.key;
            this.focusNode = config.focusNode;
            this.style = config.style;
            this.strutStyle = config.strutStyle;
            this.textAlign = config.textAlign;
            this.textDirection = config.textDirection;
            this.textScaleFactor = config.textScaleFactor;
            this.autofocus = config.autofocus;
            this.toolbarOptions = config.toolbarOptions;
            this.minLines = config.minLines;
            this.maxLines = config.maxLines;
            this.cursorWidth = config.cursorWidth;
            this.cursorHeight = config.cursorHeight;
            this.cursorColor = config.cursorColor;
            this.dragStartBehavior = config.dragStartBehavior;
            this.enableInteractiveSelection = config.enableInteractiveSelection;
            this.onTap = config.onTap;
            this.scrollPhysics = config.scrollPhysics;
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
    static rich(data, config) {
        var v = new SelectableText(data, config);
        v.constructorName = "rich";
        v.data = data;
        return v;
    }
}
exports.SelectableText = SelectableText;
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
}
exports.Table = Table;
class TabBar extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        tabs?:Array<Widget>,
        onTap?:OnCallbackNumber,
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
}
exports.Title = Title;
class Text extends Widget {
    /**
     * @param config config:
      {
        key?:Key,
        style?:TextStyle,
        strutStyle?:StrutStyle,
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
            this.strutStyle = config.strutStyle;
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
        onChanged?:OnCallbackString,
        onTap?:OnCallback,
        onEditingComplete?:OnCallback,
        onFieldSubmitted?:OnCallbackString,
        onSaved?:OnCallbackString,
        validator?:OnCallbackString,
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
        onChanged?:OnCallbackString,
        onEditingComplete?:OnCallback,
        onSubmitted?:OnCallbackString,
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
        onTap?:OnCallback,
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
}
exports.Wrap = Wrap;
class WillPopScope extends Widget {
    /**
     * @param config config:
      {
        child:Widget,
        onWillPop:OnCallback,
  
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
}
exports.CupertinoActivityIndicator = CupertinoActivityIndicator;
class CupertinoButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          onPressed:OnCallback,
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
          onPressed:OnCallback,
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
          onPressed?:OnCallback,
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
}
exports.CupertinoNavigationBar = CupertinoNavigationBar;
class CupertinoNavigationBarBackButton extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          color?:Color,
          previousPageTitle?:string,
          onPressed?:OnCallback,
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
}
exports.CupertinoNavigationBarBackButton = CupertinoNavigationBarBackButton;
class CupertinoSlider extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:number,
          onChanged:OnCallbackNumber,
          onChangeStart?:OnCallbackNumber,
          onChangeEnd?:OnCallbackNumber,
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
}
exports.CupertinoSlider = CupertinoSlider;
class CupertinoSwitch extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          value:boolean,
          onChanged:OnCallbackBoolean,
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
}
exports.CupertinoSwitch = CupertinoSwitch;
class CupertinoSegmentedControl extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          children:Array<Widget>,
          onValueChanged:OnCallbackNumber,
          groupValue?:number,
          unselectedColor?:Color,
          selectedColor?:Color,
          borderColor?:Color,
          pressedColor?:Color,
          padding?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.children = config.children;
            this.onValueChanged = config.onValueChanged;
            this.groupValue = config.groupValue;
            this.groupValue = config.groupValue;
            this.unselectedColor = config.unselectedColor;
            this.selectedColor = config.selectedColor;
            this.borderColor = config.borderColor;
            this.pressedColor = config.pressedColor;
            this.padding = config.padding;
        }
    }
}
exports.CupertinoSegmentedControl = CupertinoSegmentedControl;
class CupertinoSlidingSegmentedControl extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          children:Array<Widget>,
          onValueChanged:OnCallbackNumber,
          groupValue?:number,
          thumbColor?:Color,
          backgroundColor?:Color,
          padding?:EdgeInsets,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.children = config.children;
            this.onValueChanged = config.onValueChanged;
            this.groupValue = config.groupValue;
            this.groupValue = config.groupValue;
            this.thumbColor = config.thumbColor;
            this.backgroundColor = config.backgroundColor;
            this.padding = config.padding;
        }
    }
}
exports.CupertinoSlidingSegmentedControl = CupertinoSlidingSegmentedControl;
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
}
exports.TestWidget = TestWidget;
class CupertinoTabBar extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:OnCallbackNumber,
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
        this.createMirrorID();
        if (config != null && config != undefined) {
            this.initialIndex = config.initialIndex;
        }
    }
}
exports.CupertinoTabController = CupertinoTabController;
class CupertinoTabView extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          defaultTitle?:string,
          child:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.defaultTitle = this.defaultTitle;
            this.child = config.child;
        }
    }
}
exports.CupertinoTabView = CupertinoTabView;
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
}
exports.CupertinoTextThemeData = CupertinoTextThemeData;
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
}
exports.EmptyDataWidget = EmptyDataWidget;
//#endregion
//#region ****** Dialog ******
class ShowBaseDialog extends Widget {
}
exports.ShowBaseDialog = ShowBaseDialog;
class ShowDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useSafeArea?:boolean,
            useRootNavigator?:boolean,
            child:Widget (通常返回Dialog组件，比如SimpleDialog和AlertDialog),
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useSafeArea = config.useSafeArea;
            this.useRootNavigator = config.useRootNavigator;
            this.child = config.child;
        }
    }
}
exports.ShowDialog = ShowDialog;
class AlertDialog extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          titlePadding?:EdgeInsets,
          titleTextStyle?:TextStyle,
          content?:Widget,
          contentPadding?:EdgeInsets,
          contentTextStyle?:TextStyle,
          actions?:Array<Widget>,
          actionsPadding?:EdgeInsets,
          actionsOverflowDirection?:VerticalDirection,
          actionsOverflowButtonSpacing?:number,
          buttonPadding?:EdgeInsets,
          backgroundColor?:Color,
          elevation?:number,
          semanticLabel?:string,
          insetPadding?:EdgeInsets,
          clipBehavior?:Clip,
          shape?:ShapeBorder,
          scrollable?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titlePadding = config.titlePadding;
            this.titleTextStyle = config.titleTextStyle;
            this.content = config.content;
            this.contentPadding = config.contentPadding;
            this.contentTextStyle = config.contentTextStyle;
            this.actions = config.actions;
            this.actionsPadding = config.actionsPadding;
            this.actionsOverflowDirection = config.actionsOverflowDirection;
            this.actionsOverflowButtonSpacing = config.actionsOverflowButtonSpacing;
            this.buttonPadding = config.buttonPadding;
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.semanticLabel = config.semanticLabel;
            this.insetPadding = config.insetPadding;
            this.shape = config.shape;
            this.scrollable = config.scrollable;
        }
    }
}
exports.AlertDialog = AlertDialog;
class SimpleDialog extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          titlePadding?:EdgeInsets,
          titleTextStyle?:TextStyle,
          children?:Array<Widget>,
          contentPadding?:EdgeInsets,
          backgroundColor?:Color,
          elevation?:number,
          semanticLabel?:string,
          shape?:ShapeBorder,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titlePadding = config.titlePadding;
            this.titleTextStyle = config.titleTextStyle;
            this.children = config.children;
            this.contentPadding = config.contentPadding;
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.semanticLabel = config.semanticLabel;
            this.shape = config.shape;
        }
    }
}
exports.SimpleDialog = SimpleDialog;
class ShowCupertinoDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useRootNavigator?:boolean,
            child:Widget(通常使用CupertinoAlertDialog),
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useRootNavigator = config.useRootNavigator;
            this.child = config.child;
        }
    }
}
exports.ShowCupertinoDialog = ShowCupertinoDialog;
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
}
exports.CupertinoAlertDialog = CupertinoAlertDialog;
class ShowGeneralDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useRootNavigator?:boolean,
            barrierLabel?:string,
            barrierColor?:Color,
            transitionDuration?:Duration,
            child:Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useRootNavigator = config.useRootNavigator;
            this.barrierLabel = config.barrierLabel;
            this.transitionDuration = config.transitionDuration;
            this.child = config.child;
        }
    }
}
exports.ShowGeneralDialog = ShowGeneralDialog;
class ShowModalBottomSheet extends ShowBaseDialog {
    /**
       * @param config config:
          {
            backgroundColor?:Color,
            elevation?:number,
            shape?:ShapeBorder,
            clipBehavior?:Clip,
            barrierColor?:Color,
            isScrollControlled?:boolean;,
            useRootNavigator?:boolean,
            isDismissible?:boolean,
            enableDrag?:boolean,
            child?:Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.barrierColor = config.barrierColor;
            this.isScrollControlled = config.isScrollControlled;
            this.useRootNavigator = config.useRootNavigator;
            this.isDismissible = config.isDismissible;
            this.enableDrag = config.enableDrag;
            this.child = config.child;
        }
    }
}
exports.ShowModalBottomSheet = ShowModalBottomSheet;
class BottomSheet extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          enableDrag?:boolean,
          backgroundColor?:Color,
          elevation?:number,
          shape?:ShapeBorder,
          clipBehavior?:Clip,
          onClosing?:OnCallback,
          child?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.elevation = config.elevation;
            this.backgroundColor = config.backgroundColor;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.onClosing = config.onClosing;
            this.child = config.child;
        }
    }
}
exports.BottomSheet = BottomSheet;
class ShowCupertinoModalPopup extends ShowBaseDialog {
    /**
       * @param config config:
          {
            useRootNavigator?:boolean,
            semanticsDismissible?:boolean,
            child:Widget(通常情况下和CupertinoActionSheet配合使用)
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.useRootNavigator = config.useRootNavigator;
            this.semanticsDismissible = config.semanticsDismissible;
            this.child = config.child;
        }
    }
}
exports.ShowCupertinoModalPopup = ShowCupertinoModalPopup;
class CupertinoActionSheet extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          title?:Widget,
          message?:Widget,
          actions?:Array<Widget>, (actions:[CupertinoActionSheetAction])
          messageScrollController?:ScrollController,
          actionScrollController?:ScrollController,
          cancelButton?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.title = config.title;
            this.message = config.message;
            this.actions = config.actions;
            this.messageScrollController = config.messageScrollController;
            this.actionScrollController = config.actionScrollController;
            this.cancelButton = config.cancelButton;
        }
    }
}
exports.CupertinoActionSheet = CupertinoActionSheet;
class CupertinoActionSheetAction extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          child:Widget,
          onPressed:OnCallback,
          isDefaultAction?:boolean,
          isDestructiveAction?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.child = config.child;
            this.onPressed = config.onPressed;
            this.isDefaultAction = config.isDefaultAction;
            this.isDestructiveAction = config.isDestructiveAction;
        }
    }
}
exports.CupertinoActionSheetAction = CupertinoActionSheetAction;
class SimpleDialogButtonInfo extends Widget {
    /**
       * @param config config:
          {
            title?:string,
            textStyle?:TextStyle,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.text = config.text;
            this.textStyle = config.textStyle;
        }
    }
}
exports.SimpleDialogButtonInfo = SimpleDialogButtonInfo;
//****** CustomAlertDialogAnimationType ******
var CustomAlertDialogAnimationType;
(function (CustomAlertDialogAnimationType) {
    CustomAlertDialogAnimationType["fromRight"] = "fromRight";
    CustomAlertDialogAnimationType["fromLeft"] = "fromLeft";
    CustomAlertDialogAnimationType["fromTop"] = "fromTop";
    CustomAlertDialogAnimationType["fromBottom"] = "fromBottom";
    CustomAlertDialogAnimationType["grow"] = "grow";
    CustomAlertDialogAnimationType["shrink"] = "shrink";
})(CustomAlertDialogAnimationType = exports.CustomAlertDialogAnimationType || (exports.CustomAlertDialogAnimationType = {}));
class CustomAlertDialogButton extends Widget {
    /**
       * @param config config:
          {
            child?:Widget,
            width?:number,
            height?:number,
            bgColor?:Color,
            gradient?:Gradient,
            radius?:BorderRadius,
            onPressed?:OnCallback,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.child = config.child;
            this.width = config.width;
            this.height = config.height;
            this.bgColor = config.bgColor;
            this.gradient = config.gradient;
            this.radius = config.radius;
            this.onPressed = config.onPressed;
        }
    }
}
exports.CustomAlertDialogButton = CustomAlertDialogButton;
class CustomAlertDialogStyle extends Widget {
    /**
       * @param config config:
          {
            animationType?:CustomAlertDialogAnimationType,
            animationDuration?:Duration,
            alertBorder?:ShapeBorder,
            isCloseButton?:boolean,
            isOverlayTapDismiss?:boolean,
            backgroundColor?:Color,
            overlayColor?:Color,
            buttonSpace?:number,
            titleHeight?:number,
            titleStyle?:TextStyle,
            descStyle?:TextStyle,
            buttonAreaPadding?:EdgeInsets,
            constraints?:BoxConstraints,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.animationType = config.animationType;
            this.animationDuration = config.animationDuration;
            this.alertBorder = config.alertBorder;
            this.isCloseButton = config.isCloseButton;
            this.isOverlayTapDismiss = config.isOverlayTapDismiss;
            this.backgroundColor = config.backgroundColor;
            this.overlayColor = config.overlayColor;
            this.buttonSpace = config.buttonSpace;
            this.titleHeight = config.titleHeight;
            this.titleStyle = config.titleStyle;
            this.descStyle = config.descStyle;
            this.buttonAreaPadding = config.buttonAreaPadding;
            this.constraints = config.constraints;
        }
    }
}
exports.CustomAlertDialogStyle = CustomAlertDialogStyle;
class ShowCustomAlertDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            style?:CustomAlertDialogStyle,
            image?:Widget,
            title?:string,
            desc?:string,
            content?:Widget,
            actions?:Array<CustomAlertDialogButton>,
            closeFunction?:OnCallback,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.style = config.style;
            this.image = config.image;
            this.title = config.title;
            this.desc = config.desc;
            this.content = config.content;
            this.actions = config.actions;
            this.closeFunction = config.closeFunction;
        }
    }
}
exports.ShowCustomAlertDialog = ShowCustomAlertDialog;
class SimpleCustomDialogButtonInfo extends ShowBaseDialog {
    /**
       * @param config config:
          {
            title?:string,
            textStyle?:TextStyle,
            bgColor?:Color,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.text = config.text;
            this.textStyle = config.textStyle;
            this.bgColor = config.bgColor;
        }
    }
}
exports.SimpleCustomDialogButtonInfo = SimpleCustomDialogButtonInfo;
class ShowSimpleCustomDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            style?:CustomAlertDialogStyle,
            image?:Widget,
            title?:string,
            desc?:string,
            content?:Widget,
            actions?:Array<CustomDialogButtonInfo>,
            onTap?:OnCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.style = config.style;
            this.image = config.image;
            this.title = config.title;
            this.desc = config.desc;
            this.content = config.content;
            this.actions = config.actions;
            this.onTap = config.onTap;
        }
    }
}
exports.ShowSimpleCustomDialog = ShowSimpleCustomDialog;
class ShowSimpleAlertDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:Widget,
            desc?:string,
            descContent?:Widget,
            actions:Array<SimpleDialogButtonInfo>,
            onTap?:OnCallbackNumber,
            barrierDismissible?:boolean,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.desc = config.desc;
            this.descContent = config.descContent;
            this.actions = config.actions;
            this.onTap = config.onTap;
            this.barrierDismissible = config.barrierDismissible;
        }
    }
}
exports.ShowSimpleAlertDialog = ShowSimpleAlertDialog;
class ShowSimpleCupertinoDialog extends ShowBaseDialog {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:Widget,
            desc?:string,
            descContent?:Widget,
            actions:Array<SimpleDialogButtonInfo>,
            onTap?:OnCallbackNumber,
            barrierDismissible?:boolean,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.desc = config.desc;
            this.descContent = config.descContent;
            this.actions = config.actions;
            this.onTap = config.onTap;
            this.barrierDismissible = config.barrierDismissible;
        }
    }
}
exports.ShowSimpleCupertinoDialog = ShowSimpleCupertinoDialog;
class ShowCustomActionSheet extends ShowBaseDialog {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:Widget,
            itemList:Array<string>,
            onTap:OnCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.itemList = config.itemList;
            this.onTap = config.onTap;
        }
    }
}
exports.ShowCustomActionSheet = ShowCustomActionSheet;
class ShowSimpleActionSheet extends ShowBaseDialog {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:Widget,
            itemList:Array<string>,
            onTap:OnCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.itemList = config.itemList;
            this.onTap = config.onTap;
        }
    }
}
exports.ShowSimpleActionSheet = ShowSimpleActionSheet;
class ShowCustomPopupMenu extends ShowBaseDialog {
    /**
       * @param config config:
          {
            superkey:BindKey,
            menuList?:Array<CustomPopupMenuItem>,
            barrierDismissible?:boolean,
            bgColor?:Color,
            textFontSize?:number,
            onTap?:OnCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.superkey = config.superkey;
            this.menuList = config.menuList;
            this.barrierDismissible = config.barrierDismissible;
            this.bgColor = config.bgColor;
            this.textFontSize = config.textFontSize;
            this.onTap = config.onTap;
        }
    }
}
exports.ShowCustomPopupMenu = ShowCustomPopupMenu;
class CustomPopupMenuItem extends Widget {
    /**
       * @param config config:
          {
            title:string,
            titleTextStyle?:TextStyle,
            image?:Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleTextStyle = config.titleTextStyle;
            this.image = config.image;
        }
    }
}
exports.CustomPopupMenuItem = CustomPopupMenuItem;
class ShowDatePicker extends ShowBaseDialog {
    /**
       * @param config config:
          {
            initialDate?:number(10位、13位、18位时间戳),
            firstDate?:number(10位、13位、18位时间戳),
            lastDate?:number(10位、13位、18位时间戳),
            currentDate?:number(10位、13位、18位时间戳),
            initialEntryMode?:DatePickerEntryMode,
            helpText?:string,
            cancelText?:string,
            confirmText?:string,
            useRootNavigator?:boolean,
            textDirection?:TextDirection,
            initialDatePickerMode?:DatePickerMode,
            errorFormatText?:string,
            errorInvalidText?:string,
            fieldHintText?:string,
            fieldLabelText?:string,
            themeData?:ThemeData,
            isMaterialAppTheme?:boolean,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.initialDate = config.initialDate;
            this.firstDate = config.firstDate;
            this.lastDate = config.lastDate;
            this.currentDate = config.currentDate;
            this.initialEntryMode = config.initialEntryMode;
            this.helpText = config.helpText;
            this.cancelText = config.cancelText;
            this.confirmText = config.confirmText;
            this.useRootNavigator = config.useRootNavigator;
            this.textDirection = config.textDirection;
            this.initialEntryMode = config.initialEntryMode;
            this.errorFormatText = config.errorFormatText;
            this.errorInvalidText = config.errorFormatText;
            this.fieldHintText = config.fieldHintText;
            this.fieldLabelText = config.fieldLabelText;
            this.themeData = config.themeData;
            this.isMaterialAppTheme = config.isMaterialAppTheme;
        }
    }
}
exports.ShowDatePicker = ShowDatePicker;
class Dialog extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Dialog();
        }
        return this.instance;
    }
    //显示简单选择
    static async show(baseWidget, child) {
        var v = await Dialog.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            widgetID: String(baseWidget.widgetID),
            mirrorID: Dialog.getInstance().mirrorID,
            className: Dialog.getInstance().className,
            funcName: child.className,
            args: {
                widgetID: String(baseWidget.widgetID),
                child: baseWidget.helper.buildWidgetTreeSubWidget(child),
            },
        }));
        return Convert.toString(v);
    }
    static dismiss(baseWidget) {
        Dialog.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            widgetID: String(baseWidget.widgetID),
            mirrorID: Dialog.getInstance().mirrorID,
            className: Dialog.getInstance().className,
            funcName: "dismiss",
            args: {
                widgetID: String(baseWidget.widgetID),
            },
        }));
    }
}
exports.Dialog = Dialog;
class Loading extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Loading();
        }
        return this.instance;
    }
    /**
     * @param config config:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showSuccess(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: Loading.getInstance().className,
            funcName: "showSuccess",
            args: config,
        }));
    }
    /**
     * @param config config:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showError(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: Loading.getInstance().className,
            funcName: "showError",
            args: config,
        }));
    }
    /**
      * @param config config:
       {
         info:string,
         duration?:Duration,
         alignment?:Alignment,
       }
      */
    static showInfo(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: Loading.getInstance().className,
            funcName: "showInfo",
            args: config,
        }));
    }
    /**
     * @param config config:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showToast(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: Loading.getInstance().className,
            funcName: "showToast",
            args: config,
        }));
    }
    /**
     * @param config config:
      {
        info:string,
        alignment?:Alignment,
      }
     */
    static show(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: Loading.getInstance().className,
            funcName: "show",
            args: config,
        }));
    }
    /**
     * @param config config:
      {
        value:number(0~100),
        alignment?:Alignment,
      }
     */
    static showProgress(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: "Loading",
            funcName: "showProgress",
            args: config,
        }));
    }
    /**
    * @param config config:
     {
       animation?:animation,
     }
    */
    static dismiss(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: "Loading",
            funcName: "dismiss",
            args: config,
        }));
    }
}
exports.Loading = Loading;
class Sp extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Sp();
        }
        return this.instance;
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:boolean;
      }
     */
    static async getBool(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getBool",
            args: config,
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:number;
      }
     */
    static async getInt(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getInt",
            args: config,
        }));
        return Convert.toNumber(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:double;
      }
     */
    static async getDouble(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getDouble",
            args: config,
        }));
        return Convert.toNumber(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:string;
      }
     */
    static async getString(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getString",
            args: config,
        }));
        return Convert.toString(v);
    }
    static async clear() {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "clear",
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
      }
     */
    static async remove(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "remove",
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:boolean;
      }
     */
    static async setBool(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setBool",
            args: config,
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:number;
      }
     */
    static async setDouble(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setDouble",
            args: config,
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:number;
      }
     */
    static async setInt(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setInt",
            args: config,
        }));
        return Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:string;
      }
     */
    static async setString(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setString",
            args: config,
        }));
    }
}
exports.Sp = Sp;
//#endregion
//#region ****** ScreenInfo ******
class ScreenInfo extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    /*
    * 将Dp按比例转换成Dp
    * */
    static getValueWithDp(dp, isRatio = true) {
        return isRatio ? (ScreenInfo.dpRatio * dp) : dp;
    }
    /*
    * 将px按比例转换成Dp
    * */
    static getValueWithPx(px, isRatio = true) {
        return isRatio ? (ScreenInfo.pxRatio * px) : px;
    }
    //
    static async updateInfo() {
        var info = new ScreenInfo();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "updateInfo",
        }));
        if (v != null && v != undefined) {
            var result = JSON.parse(String(v));
            if (result != null && result != undefined) {
                ScreenInfo.appBarHeight = Convert.toNumber(result["appBarHeight"]);
                ScreenInfo.bottomBarHeight = Convert.toNumber(result["bottomBarHeight"]);
                ScreenInfo.dpRatio = Convert.toNumber(result["dpRatio"]);
                ScreenInfo.pxRatio = Convert.toNumber(result["pxRatio"]);
                ScreenInfo.screenDensity = Convert.toNumber(result["screenDensity"]);
                ScreenInfo.screenHeight = Convert.toNumber(result["screenHeight"]);
                ScreenInfo.screenHeightPx = Convert.toNumber(result["screenHeightPx"]);
                ScreenInfo.screenWidth = Convert.toNumber(result["screenWidth"]);
                ScreenInfo.screenWidthPx = Convert.toNumber(result["screenWidthPx"]);
                ScreenInfo.statusBarHeight = Convert.toNumber(result["statusBarHeight"]);
                ScreenInfo.uiDensity = Convert.toNumber(result["uiDensity"]);
                ScreenInfo.uiHeight = Convert.toNumber(result["uiHeight"]);
                ScreenInfo.uiWidth = Convert.toNumber(result["uiWidth"]);
                ScreenInfo.uiWidthPx = Convert.toNumber(result["uiWidthPx"]);
                ScreenInfo.uiHeightPx = Convert.toNumber(result["uiHeightPx"]);
            }
        }
    }
}
exports.ScreenInfo = ScreenInfo;
// 设计稿屏幕宽度(PX)
ScreenInfo.uiWidthPx = 750.0;
//设计稿屏幕宽度(PX)
ScreenInfo.uiHeightPx = 1334.0;
//设计稿屏幕密度
ScreenInfo.uiDensity = 2.0;
//设计稿屏幕宽度(DP)
ScreenInfo.uiWidth = 375.0;
//设计稿屏幕宽度(DP)
ScreenInfo.uiHeight = 667.0;
//当前设备宽度 dp
ScreenInfo.screenWidth = 375.0;
// 当前设备高度 dp
ScreenInfo.screenHeight = 667.0;
// 当前设备宽度 px
ScreenInfo.screenWidthPx = 750.0;
// 当前设备高度 px
ScreenInfo.screenHeightPx = 1334.0;
// 设备的像素密度
ScreenInfo.screenDensity = 2.0;
// 状态栏高度 dp 刘海屏会更高
ScreenInfo.statusBarHeight = 20.0;
//底部工具栏高度
ScreenInfo.bottomBarHeight = 0.0;
//App栏高
ScreenInfo.appBarHeight = 0.0;
//缩放比例(Dp)
ScreenInfo.dpRatio = 1.0;
//缩放比例(PX)
ScreenInfo.pxRatio = 1.0;
//字体缩放放比例
ScreenInfo.textScaleFactor = 1.0;
//#endregion
//#region ****** PackageInfo ******
class PackageInfo extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    //
    static async updateInfo() {
        var info = new PackageInfo();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "updateInfo",
        }));
        if (v != null && v != undefined) {
            var result = JSON.parse(String(v));
            if (result != null && result != undefined) {
                PackageInfo.appName = Convert.toString(result["appName"]);
                PackageInfo.buildNumber = Convert.toString(result["buildNumber"]);
                PackageInfo.packageName = Convert.toString(result["packageName"]);
                PackageInfo.version = Convert.toString(result["version"]);
            }
        }
    }
}
exports.PackageInfo = PackageInfo;
PackageInfo.appName = ""; //应用名称
PackageInfo.packageName = ""; //包名称
PackageInfo.version = ""; //版本号
PackageInfo.buildNumber = ""; //小版本号
//#endregion
//#region ****** Wakelock ******
class Wakelock extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    //
    static async disable() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "disable",
        }));
        return Convert.toBoolean(v);
    }
    //
    static async enable() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "enable",
        }));
        return Convert.toBoolean(v);
    }
    //
    static async isEnabled() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "isEnabled",
        }));
        return Convert.toBoolean(v);
    }
}
exports.Wakelock = Wakelock;
//#endregion
//#region ****** FocusScope ******
class FocusScope extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    //
    static requestFocus() {
        var info = new FocusScope();
        info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "requestFocus",
        }));
    }
    //
    static unfocus() {
        var info = new FocusScope();
        info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "unfocus",
        }));
    }
}
exports.FocusScope = FocusScope;
class UrlLauncher extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    /**
     * @param config config:
      {
        urlString:string,
        forceSafariVC?:boolean,
        forceWebView?:boolean,
        enableJavaScript?:boolean,
        enableDomStorage?:boolean,
        universalLinksOnly?:boolean,
        headers?:Map<string,string>,
        statusBarBrightness?:Brightness,
        webOnlyWindowName?:string,
      }
     */
    static async openUrl(config) {
        var info = new UrlLauncher();
        var v = await info.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "openUrl",
            args: config,
        }));
        return Convert.toBoolean(v);
    }
}
exports.UrlLauncher = UrlLauncher;
//****** DioResponseType ******
var DioResponseType;
(function (DioResponseType) {
    DioResponseType["json"] = "json";
    DioResponseType["stream"] = "stream";
    DioResponseType["plain"] = "plain";
    DioResponseType["bytes"] = "bytes";
})(DioResponseType = exports.DioResponseType || (exports.DioResponseType = {}));
class DioBaseOptions extends DartClass {
    /**
       * @param config config:
        {
          method?:string,
          connectTimeout?:number,
          receiveTimeout?:number,
          sendTimeout?:number,
          baseUrl?:string,
          queryParameters?:Map<string,any>,
          extra?:Map<string,any>,
          headers?:Map<string,any>,
          responseType?:DioResponseType,
          receiveDataWhenStatusError?:boolean,
          followRedirects?:boolean,
          maxRedirects?:number,
        }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.method = config.method;
            this.connectTimeout = config.connectTimeout;
            this.receiveTimeout = config.receiveTimeout;
            this.sendTimeout = config.sendTimeout;
            this.baseUrl = config.baseUrl;
            this.queryParameters = config.queryParameters;
            this.extra = config.extra;
            this.headers = config.headers;
            this.responseType = config.responseType;
            this.followRedirects = config.followRedirects;
            this.maxRedirects = config.maxRedirects;
        }
    }
}
exports.DioBaseOptions = DioBaseOptions;
class DioOptions extends DartClass {
    /**
       * @param config config:
        {
          method?:string,
          connectTimeout?:number,
          receiveTimeout?:number,
          sendTimeout?:number,
          baseUrl?:string,
          extra?:Map<string,any>,
          headers?:Map<string,any>,
          responseType?:DioResponseType,
          receiveDataWhenStatusError?:boolean,
          followRedirects?:boolean,
          maxRedirects?:number,
        }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.method = config.method;
            this.receiveTimeout = config.receiveTimeout;
            this.sendTimeout = config.sendTimeout;
            this.baseUrl = config.baseUrl;
            this.extra = config.extra;
            this.headers = config.headers;
            this.responseType = config.responseType;
            this.followRedirects = config.followRedirects;
            this.maxRedirects = config.maxRedirects;
        }
    }
}
exports.DioOptions = DioOptions;
class Dio extends DartClass {
    constructor(options) {
        super();
        this.options = options;
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    /**
      * @param config config:
        {
          path?:string,
          queryParameters?:Map<string,any>,
          options?:DioOptions,
        }
    */
    async get(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "get",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          options?:DioOptions,
        }
      */
    async getUri(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "getUri",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          path?:string,
          data?:any;
          queryParameters?:Map<string,any>,
          options?:DioOptions,
        }
    */
    async post(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "post",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          data?:any;
          options?:DioOptions,
        }
      */
    async postUri(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "postUri",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          path?:string,
          data?:any;
          queryParameters?:Map<string,any>,
          options?:DioOptions,
        }
    */
    async request(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "request",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          data?:any;
          options?:DioOptions,
        }
      */
    async requestUri(config) {
        return await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestUri",
            args: config,
        }));
    }
}
exports.Dio = Dio;
//#endregion
//#region ******** PullToRefresh ********
//****** PullToRefreshStyle ******
var PullToRefreshStyle;
(function (PullToRefreshStyle) {
    PullToRefreshStyle["Behind"] = "Behind";
    PullToRefreshStyle["UnFollow"] = "UnFollow";
    PullToRefreshStyle["Follow"] = "Follow";
    PullToRefreshStyle["Front"] = "Front";
})(PullToRefreshStyle = exports.PullToRefreshStyle || (exports.PullToRefreshStyle = {}));
//****** PullToRefreshStatus ******
var PullToRefreshStatus;
(function (PullToRefreshStatus) {
    PullToRefreshStatus["idle"] = "idle";
    PullToRefreshStatus["canRefresh"] = "canRefresh";
    PullToRefreshStatus["refreshing"] = "refreshing";
    PullToRefreshStatus["completed"] = "completed";
    PullToRefreshStatus["failed"] = "failed";
    PullToRefreshStatus["canTwoLevel"] = "canTwoLevel";
    PullToRefreshStatus["twoLevelOpening"] = "twoLevelOpening";
    PullToRefreshStatus["twoLeveling"] = "twoLeveling";
    PullToRefreshStatus["twoLevelClosing"] = "twoLevelClosing";
})(PullToRefreshStatus = exports.PullToRefreshStatus || (exports.PullToRefreshStatus = {}));
//****** PullToRefreshLoadStatus ******
var PullToRefreshLoadStatus;
(function (PullToRefreshLoadStatus) {
    PullToRefreshLoadStatus["idle"] = "idle";
    PullToRefreshLoadStatus["canLoading"] = "canLoading";
    PullToRefreshLoadStatus["loading"] = "loading";
    PullToRefreshLoadStatus["noMore"] = "noMore";
    PullToRefreshLoadStatus["failed"] = "failed";
})(PullToRefreshLoadStatus = exports.PullToRefreshLoadStatus || (exports.PullToRefreshLoadStatus = {}));
//****** PullToRefreshIconPosition ******
var PullToRefreshIconPosition;
(function (PullToRefreshIconPosition) {
    PullToRefreshIconPosition["left"] = "left";
    PullToRefreshIconPosition["right"] = "right";
    PullToRefreshIconPosition["top"] = "top";
    PullToRefreshIconPosition["bottom"] = "bottom";
})(PullToRefreshIconPosition = exports.PullToRefreshIconPosition || (exports.PullToRefreshIconPosition = {}));
//****** PullToRefreshLoadStyle ******
var PullToRefreshLoadStyle;
(function (PullToRefreshLoadStyle) {
    PullToRefreshLoadStyle["ShowAlways"] = "ShowAlways";
    PullToRefreshLoadStyle["HideAlways"] = "HideAlways";
    PullToRefreshLoadStyle["ShowWhenLoading"] = "ShowWhenLoading";
})(PullToRefreshLoadStyle = exports.PullToRefreshLoadStyle || (exports.PullToRefreshLoadStyle = {}));
class PullToRefreshHeader extends Widget {
    /**
     * PullToRefreshHeader.classic = new PullToRefreshClassicHeader(config);
     * @param config config:
        {
          key?:Key,
          refreshStyle?:PullToRefreshStyle,
          height?:number,
          completeDuration?:Duration,
          textStyle?:TextStyle,
          releaseText?:string,
          refreshingText?:string,
          canTwoLevelIcon?:Widget,
          twoLevelView?:Widget,
          canTwoLevelText?:string,
          completeText?:string,
          failedText?:string,
          idleText?:string,
          iconPos?:PullToRefreshIconPosition,
          spacing?:number,
          refreshingIcon?:Widget,
          failedIcon?:Widget,
          completeIcon?:Widget,
          idleIcon?:Widget,
          releaseIcon?:Widget,
        }
     */
    static classic(config) {
        return new PullToRefreshClassicHeader(config);
    }
    /**
     * PullToRefreshHeader.WwterDrop
     * @param config config:
        {
          key?:Key,
          refresh?:Widget,
          complete?:Widget,
          completeDuration?:Duration,
          failed?:Widget,
          waterDropColor?:Color,
          idleIcon?:Widget,
        }
     */
    static waterDrop(config) {
        return new PullToRefreshWaterDropMaterialHeader(config);
    }
    /**
     * PullToRefreshHeader.materialClassic = new PullToRefreshWaterDropMaterialHeader(config);
     * @param config config:
        {
          key?:Key,
          height?:number,
          semanticsLabel?:string,
          semanticsValue?:string,
          color?:Color,
          offset?:number,
          distance?:number,
          backgroundColor?:Color,
        }
     */
    static materialClassic(config) {
        return new PullToRefreshWaterDropMaterialHeader(config);
    }
    /**
     * PullToRefreshHeader.waterDropMaterial = new PullToRefreshWaterDropMaterialHeader(config);
     * @param config config:
        {
          key?:Key,
          height?:number,
          semanticsLabel?:string,
          semanticsValue?:string,
          color?:Color,
          offset?:number,
          distance?:number,
          backgroundColor?:Color,
        }
     */
    static waterDropMaterial(config) {
        return new PullToRefreshWaterDropMaterialHeader(config);
    }
}
exports.PullToRefreshHeader = PullToRefreshHeader;
class PullToRefreshClassicHeader extends PullToRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          refreshStyle?:PullToRefreshStyle,
          height?:number,
          completeDuration?:Duration,
          textStyle?:TextStyle,
          releaseText?:string,
          refreshingText?:string,
          canTwoLevelIcon?:Widget,
          twoLevelView?:Widget,
          canTwoLevelText?:string,
          completeText?:string,
          failedText?:string,
          idleText?:string,
          iconPos?:PullToRefreshIconPosition,
          spacing?:number,
          refreshingIcon?:Widget,
          failedIcon?:Widget,
          completeIcon?:Widget,
          idleIcon?:Widget,
          releaseIcon?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.refreshStyle = config.refreshStyle;
            this.height = config.height;
            this.completeDuration = config.completeDuration;
            this.textStyle = config.textStyle;
            this.releaseText = config.releaseText;
            this.refreshingText = config.refreshingText;
            this.canTwoLevelIcon = config.canTwoLevelIcon;
            this.twoLevelView = config.twoLevelView;
            this.canTwoLevelText = config.canTwoLevelText;
            this.completeText = config.completeText;
            this.failedText = config.failedText;
            this.idleText = config.idleText;
            this.iconPos = config.iconPos;
            this.spacing = config.spacing;
            this.refreshingIcon = config.refreshingIcon;
            this.failedIcon = config.failedIcon;
            this.completeIcon = config.completeIcon;
            this.idleIcon = config.idleIcon;
            this.releaseIcon = config.releaseIcon;
        }
    }
}
exports.PullToRefreshClassicHeader = PullToRefreshClassicHeader;
class PullToRefreshWaterDropHeader extends PullToRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          refresh?:Widget,
          complete?:Widget,
          completeDuration?:Duration,
          failed?:Widget,
          waterDropColor?:Color,
          idleIcon?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.refresh = config.refresh;
            this.complete = config.complete;
            this.completeDuration = config.completeDuration;
            this.failed = config.failed;
            this.waterDropColor = config.waterDropColor;
            this.idleIcon = config.idleIcon;
        }
    }
}
exports.PullToRefreshWaterDropHeader = PullToRefreshWaterDropHeader;
class PullToRefreshMaterialClassicHeader extends PullToRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          height?:number,
          semanticsLabel?:string,
          semanticsValue?:string,
          color?:Color,
          offset?:number,
          distance?:number,
          backgroundColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.height = config.height;
            this.semanticsLabel = config.semanticsLabel;
            this.semanticsValue = config.semanticsValue;
            this.color = config.color;
            this.offset = config.offset;
            this.distance = config.distance;
            this.backgroundColor = config.backgroundColor;
        }
    }
}
exports.PullToRefreshMaterialClassicHeader = PullToRefreshMaterialClassicHeader;
class PullToRefreshWaterDropMaterialHeader extends PullToRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          height?:number,
          semanticsLabel?:string,
          semanticsValue?:string,
          color?:Color,
          offset?:number,
          distance?:number,
          backgroundColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.height = config.height;
            this.semanticsLabel = config.semanticsLabel;
            this.semanticsValue = config.semanticsValue;
            this.color = config.color;
            this.offset = config.offset;
            this.distance = config.distance;
            this.backgroundColor = config.backgroundColor;
        }
    }
}
exports.PullToRefreshWaterDropMaterialHeader = PullToRefreshWaterDropMaterialHeader;
class PullToRefreshFooter extends Widget {
    /**
     * PullToRefreshFooter.classic = new PullToRefreshPullToRefreshClassicFooter(config);
     * @param config config:
        {
          key?:Key,
          onClick?: OnCallback,
          loadStyle?: PullToRefreshLoadStyle,
          height?: number,
          textStyle?:TextStyle,
          loadingText?:string,
          noDataText?:string,
          noMoreIcon?:Widget,
          idleText?:string,
          failedText?:string,
          canLoadingText?:string,
          failedIcon?:Widget,
          iconPos?:PullToRefreshIconPosition,
          spacing?:number,
          completeDuration?:Duration,
          loadingIcon?:Widget,
          canLoadingIcon?:Widget,
          idleIcon?:Widget,
        }
     */
    static classic(config) {
        return new PullToRefreshClassicFooter(config);
    }
}
exports.PullToRefreshFooter = PullToRefreshFooter;
class PullToRefreshClassicFooter extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          onClick?: OnCallback,
          loadStyle?: PullToRefreshLoadStyle,
          height?: number,
          textStyle?:TextStyle,
          loadingText?:string,
          noDataText?:string,
          noMoreIcon?:Widget,
          idleText?:string,
          failedText?:string,
          canLoadingText?:string,
          failedIcon?:Widget,
          iconPos?:PullToRefreshIconPosition,
          spacing?:number,
          completeDuration?:Duration,
          loadingIcon?:Widget,
          canLoadingIcon?:Widget,
          idleIcon?:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.onClick = config.onClick;
            this.loadStyle = config.loadStyle;
            this.height = config.height;
            this.textStyle = config.textStyle;
            this.loadingText = config.loadingText;
            this.noDataText = config.noDataText;
            this.noMoreIcon = config.noMoreIcon;
            this.idleText = config.idleText;
            this.failedText = config.failedText;
            this.canLoadingText = config.canLoadingText;
            this.iconPos = config.iconPos;
            this.spacing = config.spacing;
            this.completeDuration = config.completeDuration;
            this.loadingIcon = config.loadingIcon;
            this.canLoadingIcon = config.canLoadingIcon;
            this.idleIcon = config.idleIcon;
        }
    }
}
exports.PullToRefreshClassicFooter = PullToRefreshClassicFooter;
class PullToRefreshConfiguration extends Widget {
    /**
     * @param config config:
        {
          child?:Widget,
          headerBuilder?:Widget,
          footerBuilder?:Widget,
          dragSpeedRatio?:number,
          shouldFooterFollowWhenNotFull?:string,
          enableScrollWhenTwoLevel?:boolean,
          enableLoadingWhenNoData?:boolean,
          enableBallisticRefresh?:boolean,
          springDescription?:SpringDescription,
          enableScrollWhenRefreshCompleted?:boolean,
          enableLoadingWhenFailed?:boolean,
          twiceTriggerDistance?:number,
          closeTwoLevelDistance?:number,
          skipCanRefresh?:boolean,
          autoLoad?:boolean,
          maxOverScrollExtent?:number,
          enableBallisticLoad?:boolean,
          maxUnderScrollExtent?:number,
          headerTriggerDistance?:number,
          footerTriggerDistance?:number,
          hideFooterWhenNotFull?:boolean,
          enableRefreshVibrate?:boolean,
          enableLoadMoreVibrate?:boolean,
          topHitBoundary?:number,
          bottomHitBoundary?:number,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.child = config.child;
            this.headerBuilder = config.headerBuilder;
            this.footerBuilder = config.footerBuilder;
            this.dragSpeedRatio = config.dragSpeedRatio;
            this.shouldFooterFollowWhenNotFull = config.shouldFooterFollowWhenNotFull;
            this.enableScrollWhenTwoLevel = config.enableScrollWhenTwoLevel;
            this.enableLoadingWhenNoData = config.enableLoadingWhenNoData;
            this.enableBallisticRefresh = config.enableBallisticRefresh;
            this.springDescription = config.springDescription;
            this.enableScrollWhenRefreshCompleted = config.enableScrollWhenRefreshCompleted;
            this.enableLoadingWhenFailed = config.enableLoadingWhenFailed;
            this.twiceTriggerDistance = config.twiceTriggerDistance;
            this.closeTwoLevelDistance = config.closeTwoLevelDistance;
            this.skipCanRefresh = config.skipCanRefresh;
            this.autoLoad = config.autoLoad;
            this.maxOverScrollExtent = config.maxOverScrollExtent;
            this.maxUnderScrollExtent = config.maxUnderScrollExtent;
            this.enableBallisticLoad = config.enableBallisticLoad;
            this.headerTriggerDistance = config.headerTriggerDistance;
            this.footerTriggerDistance = config.footerTriggerDistance;
            this.hideFooterWhenNotFull = config.hideFooterWhenNotFull;
            this.enableLoadMoreVibrate = config.enableLoadMoreVibrate;
            this.enableRefreshVibrate = config.enableRefreshVibrate;
            this.topHitBoundary = config.topHitBoundary;
            this.bottomHitBoundary = config.bottomHitBoundary;
        }
    }
}
exports.PullToRefreshConfiguration = PullToRefreshConfiguration;
class PullToRefreshController extends DartClass {
    /**
     * @param config config:
        {
          initialRefreshStatus?:PullToRefreshStatus,
          initialRefresh?:boolean,
          initialLoadStatus?:PullToRefreshLoadStatus,
        }
     */
    constructor(config) {
        super();
        this.createMirrorID();
        if (config != null && config != undefined) {
            this.initialLoadStatus = config.initialLoadStatus;
            this.initialRefresh = config.initialRefresh;
            this.initialRefreshStatus = config.initialRefreshStatus;
        }
    }
    dispose() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "dispose",
        }));
    }
    loadComplete() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadComplete",
        }));
    }
    loadFailed() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadFailed",
        }));
    }
    loadNoData() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadNoData",
        }));
    }
    /**
     * @param config config:
        {
          resetFooterState?:boolean;
        }
     */
    refreshCompleted(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshCompleted",
            args: config
        }));
    }
    refreshFailed() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshFailed",
        }));
    }
    refreshToIdle() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshToIdle",
        }));
    }
    /**
     * @param config config:
        {
          duration?:Duration,
          needMove?:boolean,
          curve?:Curve,
        }
     */
    requestLoading(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestLoading",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:Duration,
          needMove?:boolean,
          curve?:Curve,
        }
     */
    requestRefresh(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:Duration,
          curve?:Curve,
        }
     */
    requestTwoLevel(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestTwoLevel",
            args: config
        }));
    }
    resetNoData() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetNoData",
        }));
    }
    /**
     * @param config config:
        {
          duration?:Duration,
          curve?:Curve,
        }
     */
    twoLevelComplete(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "twoLevelComplete",
            args: config
        }));
    }
}
exports.PullToRefreshController = PullToRefreshController;
class PullToRefreshRefresher extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          controller:PullToRefreshController,
          child?:Widget,
          header?:PullToRefreshHeader,
          footer?:PullToRefreshFooter,
          enablePullDown?:boolean,
          enablePullUp?:boolean,
          enableTwoLevel?:boolean,
          onRefresh?:OnCallback,
          onLoading?:OnCallback,
          onTwoLevel?:OnCallback,
          onOffsetChange?:OnCallbackString,
          dragStartBehavior?:DragStartBehavior,
          primary?:boolean,
          cacheExtent?:number,
          semanticChildCount?:number,
          reverse?:boolean,
          physics?:ScrollPhysics,
          scrollDirection?:Axis,
          scrollController?:ScrollController,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.controller = config.controller;
            this.child = config.child;
            this.header = config.header;
            this.footer = config.footer;
            this.enablePullDown = config.enablePullDown;
            this.enablePullUp = config.enablePullUp;
            this.enableTwoLevel = config.enableTwoLevel;
            this.onLoading = config.onLoading;
            this.onRefresh = config.onRefresh;
            this.onTwoLevel = config.onTwoLevel;
            this.onOffsetChange = config.onOffsetChange;
            this.dragStartBehavior = config.dragStartBehavior;
            this.primary = config.primary;
            this.cacheExtent = config.cacheExtent;
            this.semanticChildCount = config.semanticChildCount;
            this.reverse = config.reverse;
            this.physics = config.physics;
            this.scrollDirection = config.scrollDirection;
            this.scrollController = config.scrollController;
        }
    }
}
exports.PullToRefreshRefresher = PullToRefreshRefresher;
class CachedNetworkImage extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          imageUrl:string,
          httpHeaders?:Map<string,string>
          placeholder?:Widget,
          errorWidget?:Widget,
          fadeOutDuration?:Duration,
          fadeOutCurve?:Curve,
          fadeInDuration?:Duration,
          fadeInCurve?:Curve,
          width?:number,
          height?:number,
          fit?:BoxFit,
          alignment?:Alignment,
          repeat?:ImageRepeat,
          matchTextDirection?:boolean,
          useOldImageOnUrlChange?:boolean,
          color?:Color,
          filterQuality?:FilterQuality,
          colorBlendMode?:BlendMode,
          placeholderFadeInDuration?:Duration,
          memCacheWidth?:number,
          memCacheHeight?:number,
          cacheKey?:string,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.imageUrl = config.imageUrl;
            this.httpHeaders = config.httpHeaders;
            this.placeholder = config.placeholder;
            this.errorWidget = config.errorWidget;
            this.fadeInDuration = config.fadeInDuration;
            this.fadeInCurve = config.fadeInCurve;
            this.fadeOutDuration = config.fadeOutDuration;
            this.fadeOutCurve = config.fadeOutCurve;
            this.width = config.width;
            this.height = config.height;
            this.fit = config.fit;
            this.alignment = config.alignment;
            this.repeat = config.repeat;
            this.matchTextDirection = config.matchTextDirection;
            this.useOldImageOnUrlChange = config.useOldImageOnUrlChange;
            this.color = config.color;
            this.filterQuality = config.filterQuality;
            this.colorBlendMode = config.colorBlendMode;
            this.placeholderFadeInDuration = config.placeholderFadeInDuration;
            this.memCacheHeight = config.memCacheHeight;
            this.memCacheWidth = config.memCacheWidth;
            this.cacheKey = config.cacheKey;
        }
    }
}
exports.CachedNetworkImage = CachedNetworkImage;
//#endregion
//#region ******** EasyRefresh ********
class EasyRefreshHeader extends Widget {
    /**
     * EasyRefreshHeader.classic = new EasyRefreshClassicalHeader(config);
     * @param config config:
        {
          key?:Key,
          extent?:number,
          triggerDistance?:number,
          float?:boolean,
          completeDuration?:Duration,
          enableInfiniteRefresh?:boolean,
          enableHapticFeedback?:boolean,
          overScroll?:boolean,
          alignment?:Alignment,
          refreshText?:string,
          refreshReadyText?:string,
          refreshingText?:string,
          refreshedText?:string,
          refreshFailedText?:string,
          noMoreText?:string,
          showInfo?:boolean,
          infoText?:string,
          bgColor?:Color,
          textColor?:Color,
          infoColor?:Color,
        }
     */
    static classical(config) {
        return new EasyRefreshClassicalHeader(config);
    }
    /**
     * EasyRefreshHeader.WwterDrop = new EasyRefreshMaterialHeader(config);
     * @param config config:
        {
          key?:Key,
          displacement?:number,
          backgroundColor?:Color,
          completeDuration?:Duration,
          enableHapticFeedback?:boolean,
          enableInfiniteLoad?:boolean,
          overScroll?:boolean,
        }
     */
    static material(config) {
        return new EasyRefreshMaterialHeader(config);
    }
}
exports.EasyRefreshHeader = EasyRefreshHeader;
class EasyRefreshClassicalHeader extends EasyRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          extent?:number,
          triggerDistance?:number,
          float?:boolean,
          completeDuration?:Duration,
          enableInfiniteRefresh?:boolean,
          enableHapticFeedback?:boolean,
          overScroll?:boolean,
          alignment?:Alignment,
          refreshText?:string,
          refreshReadyText?:string,
          refreshingText?:string,
          refreshedText?:string,
          refreshFailedText?:string,
          noMoreText?:string,
          showInfo?:boolean,
          infoText?:string,
          bgColor?:Color,
          textColor?:Color,
          infoColor?:Color,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.extent = config.extent;
            this.triggerDistance = config.triggerDistance;
            this.float = config.float;
            this.completeDuration = config.completeDuration;
            this.enableInfiniteRefresh = config.enableInfiniteRefresh;
            this.enableHapticFeedback = config.enableHapticFeedback;
            this.overScroll = config.overScroll;
            this.alignment = config.alignment;
            this.refreshText = config.refreshText;
            this.refreshReadyText = config.refreshReadyText;
            this.refreshingText = config.refreshingText;
            this.refreshedText = config.refreshedText;
            this.refreshFailedText = config.refreshFailedText;
            this.noMoreText = config.noMoreText;
            this.showInfo = config.showInfo;
            this.infoText = config.infoText;
            this.bgColor = config.bgColor;
            this.textColor = config.textColor;
            this.infoColor = config.infoColor;
        }
    }
}
exports.EasyRefreshClassicalHeader = EasyRefreshClassicalHeader;
class EasyRefreshMaterialHeader extends EasyRefreshHeader {
    /**
     * @param config config:
        {
          key?:Key,
          displacement?:number,
          backgroundColor?:Color,
          completeDuration?:Duration,
          enableHapticFeedback?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.displacement = config.displacement;
            this.backgroundColor = config.backgroundColor;
            this.completeDuration = config.completeDuration;
            this.enableHapticFeedback = config.enableHapticFeedback;
        }
    }
}
exports.EasyRefreshMaterialHeader = EasyRefreshMaterialHeader;
class EasyRefreshFooter extends Widget {
    /**
     * EasyRefreshFooter.classical = new EasyRefreshClassicalFooter(config);
     * @param config config:
        {
          key?:Key,
          extent?:number,
          triggerDistance?:number,
          float?:boolean,
          completeDuration?:Duration,
          enableInfiniteLoad?:boolean,
          enableHapticFeedback?:boolean,
          overScroll?:boolean,
          safeArea?:boolean,
          padding?:EdgeInsets,
          alignment?:Alignment,
          loadText?:string,
          loadReadyText?:string,
          loadingText?:string,
          loadedText?:string,
          loadFailedText?:string,
          noMoreText?:string,
          showInfo?:boolean,
          infoText?:string,
          bgColor?:Color,
          textColor?:Color,
          infoColor?:Color,
        }
     */
    static classical(config) {
        return new EasyRefreshClassicalFooter(config);
    }
    /**
     * EasyRefreshFooter.material = new EasyRefreshMaterialFooter(config);
     * @param config config:
        {
          key?:Key,
          displacement?:number,
          backgroundColor?:Color,
          completeDuration?:Duration,
          enableHapticFeedback?:boolean,
          enableInfiniteLoad?:boolean,
          overScroll?:boolean,
        }
     */
    static material(config) {
        return new EasyRefreshMaterialFooter(config);
    }
}
exports.EasyRefreshFooter = EasyRefreshFooter;
class EasyRefreshClassicalFooter extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          extent?:number,
          triggerDistance?:number,
          float?:boolean,
          completeDuration?:Duration,
          enableInfiniteLoad?:boolean,
          enableHapticFeedback?:boolean,
          overScroll?:boolean,
          safeArea?:boolean,
          padding?:EdgeInsets,
          alignment?:Alignment,
          loadText?:string,
          loadReadyText?:string,
          loadingText?:string,
          loadedText?:string,
          loadFailedText?:string,
          noMoreText?:string,
          showInfo?:boolean,
          infoText?:string,
          bgColor?:Color,
          textColor?:Color,
          infoColor?:Color,
          isNoMoreText?:boolean,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.extent = config.extent;
            this.triggerDistance = config.triggerDistance;
            this.float = config.float;
            this.completeDuration = config.completeDuration;
            this.enableInfiniteLoad = config.enableInfiniteLoad;
            this.enableHapticFeedback = config.enableHapticFeedback;
            this.overScroll = config.overScroll;
            this.safeArea = config.safeArea;
            this.padding = config.padding;
            this.alignment = config.alignment;
            this.loadText = config.loadText;
            this.loadReadyText = config.loadReadyText;
            this.loadedText = config.loadedText;
            this.loadFailedText = config.loadFailedText;
            this.noMoreText = config.noMoreText;
            this.showInfo = config.showInfo;
            this.infoText = config.infoText;
            this.bgColor = config.bgColor;
            this.textColor = config.textColor;
            this.infoColor = config.infoColor;
            this.isNoMoreText = config.isNoMoreText;
        }
    }
}
exports.EasyRefreshClassicalFooter = EasyRefreshClassicalFooter;
class EasyRefreshMaterialFooter extends EasyRefreshFooter {
    /**
     * @param config config:
        {
          key?:Key,
          displacement?:number,
          backgroundColor?:Color,
          completeDuration?:Duration,
          enableHapticFeedback?:boolean,
          enableInfiniteLoad?:boolean,
          overScroll?:boolean,
          isNoMoreText?:boolean,
          noMoreText?:string,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.displacement = config.displacement;
            this.backgroundColor = config.backgroundColor;
            this.completeDuration = config.completeDuration;
            this.enableHapticFeedback = config.enableHapticFeedback;
            this.enableInfiniteLoad = config.enableInfiniteLoad;
            this.overScroll = config.overScroll;
            this.isNoMoreText = config.isNoMoreText;
            this.noMoreText = config.noMoreText;
        }
    }
}
exports.EasyRefreshMaterialFooter = EasyRefreshMaterialFooter;
class EasyRefreshController extends DartClass {
    constructor() {
        super();
        this.createMirrorID();
    }
    /**
     * @param config config:
        {
          duration?:Duration,
        }
     */
    callRefresh(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "callRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:Duration,
        }
     */
    callLoad(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "callLoad",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          success?:boolean,
          noMore?:boolean,
        }
     */
    finishRefresh(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "finishRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          success?:boolean,
          noMore?:boolean,
        }
     */
    finishLoad(config) {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "finishLoad",
            args: config
        }));
    }
    resetRefreshState() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetRefreshState",
        }));
    }
    resetLoadState() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetLoadState",
        }));
    }
    dispose() {
        JSFramework.invokeFlutterFunction(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "dispose",
        }));
    }
}
exports.EasyRefreshController = EasyRefreshController;
class EasyRefresher extends Widget {
    /**
     * @param config config:
        {
          key?:Key,
          controller?:EasyRefreshController,
          onRefresh?:OnCallback,
          onLoad?:OnCallback,
          enableControlFinishRefresh?:boolean,
          enableControlFinishLoad?:boolean,
          taskIndependence?:boolean,
          scrollController?:ScrollController,
          header?:EasyRefreshHeader
          footer?:EasyRefreshFooter,
          firstRefresh?:boolean,
          firstRefreshWidget?:Widget,
          headerIndex?:number,
          emptyWidget?:Widget,
          topBouncing?:boolean,
          bottomBouncing?:boolean,
          child:Widget,
        }
     */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.controller = config.controller;
            this.onRefresh = config.onRefresh;
            this.onLoad = config.onLoad;
            this.enableControlFinishRefresh = config.enableControlFinishRefresh;
            this.enableControlFinishLoad = config.enableControlFinishLoad;
            this.taskIndependence = config.taskIndependence;
            this.scrollController = config.scrollController;
            this.header = config.header;
            this.footer = config.footer;
            this.firstRefresh = config.firstRefresh;
            this.firstRefreshWidget = config.firstRefreshWidget;
            this.headerIndex = config.headerIndex;
            this.emptyWidget = config.emptyWidget;
            this.topBouncing = config.topBouncing;
            this.bottomBouncing = config.bottomBouncing;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          key?:Key,
          listKey?:Key,
          controller?:EasyRefreshController,
          onRefresh?:OnCallback,
          onLoad?:OnCallback,
          enableControlFinishRefresh?:boolean,
          enableControlFinishLoad?:boolean,
          taskIndependence?:boolean,
          scrollController?:ScrollController,
          header?:EasyRefreshHeader
          headerIndex?:number,
          footer?:EasyRefreshFooter,
          scrollDirection?:Axis,
          reverse?:boolean,
          primary?:boolean,
          shrinkWrap?:boolean,
          center?:Key,
          anchor?:number,
          cacheExtent?:number,
          semanticChildCount?:number,
          dragStartBehavior?:DragStartBehavior,
    
          firstRefresh?:boolean,
          firstRefreshWidget?:Widget,
          emptyWidget?:Widget,
          topBouncing?:boolean,
          bottomBouncing?:boolean,
          slivers:Array<Widget>,
        }
     */
    static custom(config) {
        var v = new EasyRefresher();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.listKey = config.listKey;
            v.controller = config.controller;
            v.onRefresh = config.onRefresh;
            v.onLoad = config.onLoad;
            v.enableControlFinishLoad = config.enableControlFinishLoad;
            v.enableControlFinishRefresh = config.enableControlFinishRefresh;
            v.taskIndependence = config.taskIndependence;
            v.header = config.header;
            v.headerIndex = config.headerIndex;
            v.footer = config.footer;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.scrollController = config.scrollController;
            v.primary = config.primary;
            v.shrinkWrap = config.shrinkWrap;
            v.center = config.center;
            v.anchor = config.anchor;
            v.cacheExtent = config.cacheExtent;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
            v.firstRefresh = config.firstRefresh;
            v.firstRefreshWidget = config.firstRefreshWidget;
            v.firstRefresh = config.firstRefresh;
            v.emptyWidget = config.emptyWidget;
            v.topBouncing = config.topBouncing;
            v.bottomBouncing = config.bottomBouncing;
            v.slivers = config.slivers;
        }
        return v;
    }
}
exports.EasyRefresher = EasyRefresher;
//#endregion
