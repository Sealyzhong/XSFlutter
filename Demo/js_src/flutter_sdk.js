"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: JS Flutter SDK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpApi = exports.LoadingApi = exports.CupertinoThemeData = exports.CupertinoTextThemeData = exports.CupertinoTheme = exports.CupertinoTabController = exports.CupertinoTabBar = exports.CupertinoSliverNavigationBar = exports.CupertinoScrollbar = exports.CupertinoSwitch = exports.CupertinoSlider = exports.CupertinoNavigationBarBackButton = exports.CupertinoNavigationBar = exports.CupertinoButton = exports.CupertinoActivityIndicator = exports.WidgetSpan = exports.WillPopScope = exports.Wrap = exports.Visibility = exports.VerticalDivider = exports.UnconstrainedBox = exports.TextFormField = exports.Texture = exports.TextSpan = exports.Text = exports.Title = exports.TabPageSelector = exports.TabPageSelectorIndicator = exports.TabBarView = exports.Tab = exports.TabBar = exports.Table = exports.Tooltip = exports.Transform = exports.TableCell = exports.TableRow = exports.SliverVisibility = exports.SnackBarAction = exports.SnackBar = exports.Scrollbar = exports.SliverSafeArea = exports.SafeArea = exports.ScaffoldState = exports.Scaffold = exports.SliverToBoxAdapter = exports.SingleChildScrollView = exports.SliverOverlapAbsorber = exports.SliverFixedExtentList = exports.SliverOverlapInjector = exports.SliverList = exports.SliverChildBuilderDelegate = exports.SliverChildListDelegate = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGrid = exports.SliverPadding = exports.SliverAppBar = exports.Stack = exports.SizedOverflowBox = exports.SizedBox = exports.Slider = exports.SwitchListTile = exports.Semantics = exports.Spacer = exports.RichText = exports.RawMaterialButton = exports.Radio = exports.RaisedButton = exports.RotatedBox = exports.RawImage = exports.RepaintBoundary = exports.Row = exports.PopupMenuItem = exports.PopupMenuButton = exports.Placeholder = exports.PreferredSizeWidget = exports.PreferredSize = exports.PositionedDirectional = exports.Positioned = exports.PhysicalModel = exports.Padding = exports.OutlineButton = exports.OverflowBox = exports.Offstage = exports.Opacity = exports.Navigator = exports.NestedScrollView = exports.NotificationListener = exports.MaterialPageRoute = exports.Material = exports.LayoutBuilder = exports.ListView = exports.ListTile = exports.ListBody = exports.LimitedBox = exports.LicensePage = exports.KeyedSubtree = exports.ImageIcon = exports.Icon = exports.IconButton = exports.IgnorePointer = exports.IndexedStack = exports.IntrinsicWidth = exports.IntrinsicHeight = exports.IndexedSemantics = exports.InputDecorator = exports.GridPaper = exports.GridTile = exports.GridTileBar = exports.GestureDetector = exports.FractionalTranslation = exports.FlutterLogo = exports.FlexibleSpaceBarSettings = exports.FlexibleSpaceBar = exports.FloatingActionButton = exports.FlatButton = exports.Flow = exports.Flex = exports.FractionallySizedBox = exports.FittedBox = exports.Flexible = exports.ExpansionTile = exports.ExpandIcon = exports.Expanded = exports.ExcludeSemantics = exports.DecoratedBoxTransition = exports.DefaultTextStyle = exports.DecorationImage = exports.DefaultTabController = exports.DropdownButton = exports.DecoratedBox = exports.DropdownMenuItem = exports.Directionality = exports.Divider = exports.Card = exports.CustomScrollView = exports.CustomMultiChildLayout = exports.Column = exports.CustomSingleChildLayout = exports.ConstrainedBox = exports.ClipRRect = exports.Checkbox = exports.CheckboxListTile = exports.CheckedModeBanner = exports.Chip = exports.CircleAvatar = exports.ColoredBox = exports.Center = exports.Container = exports.CloseButton = exports.Builder = exports.BackButton = exports.BackButtonIcon = exports.BottomNavigationBar = exports.BottomAppBar = exports.BlockSemantics = exports.ButtonBar = exports.Baseline = exports.Banner = exports.BottomNavigationBarItem = exports.AnimatedDefaultTextStyle = exports.AnimatedSize = exports.AnimatedPositioned = exports.AnimatedPhysicalModel = exports.AnimatedContainer = exports.AnimatedBuilder = exports.AnimatedOpacity = exports.AnimatedCrossFade = exports.AnnotatedRegion = exports.AspectRatio = exports.Align = exports.AppBar = exports.AboutDialog = exports.AboutListTile = exports.Animation = exports.AnimationController = exports.AbsorbPointer = exports.CupertinoIcons = exports.Icons = exports.VisualDensity = exports.Vector4 = exports.Vector3 = exports.Uint8List = exports.Uri = exports.Tween = exports.TextInputType = exports.TextEditingController = exports.TabController = exports.TableColumnWidth = exports.TableBorder = exports.TextStyle = exports.TextAlignVertical = exports.ScrollbarPainter = exports.Shadow = exports.ScrollController = exports.ScrollPhysics = exports.SpringDescription = exports.SystemUiOverlayStyle = exports.StrutStyle = exports.Size = exports.RangeMaintainingScrollPhysics = exports.RSTransform = exports.RRect = exports.RelativeRect = exports.Rect = exports.Radius = exports.Quaternion = exports.OutlinedBorder = exports.Offset = exports.NotchedShape = exports.Notification = exports.NeverScrollableScrollPhysics = exports.MediaQueryData = exports.MediaQuery = exports.Matrix4 = exports.MaskFilter = exports.Key = exports.InputDecoration = exports.InputDecorationTheme = exports.ImageShader = exports.IconThemeData = exports.IconData = exports.ImageProvider = exports.InputBorder = exports.Gradient = exports.GradientTransform = exports.File = exports.FixedColumnWidth = exports.FractionalOffset = exports.FlutterLogoDecoration = exports.FlexColumnWidth = exports.Future = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.Duration = exports.CurveTween = exports.ClampingScrollPhysics = exports.CircularNotchedRectangle = exports.ColorScheme = exports.ColorFilter = exports.Colors = exports.Color = exports.BouncingScrollPhysics = exports.BoxShadow = exports.BannerPainter = exports.BoxDecoration = exports.ButtonThemeData = exports.BorderDirectional = exports.Border = exports.BorderRadiusDirectional = exports.BorderRadius = exports.BorderSide = exports.BoxConstraints = exports.AssetImage = exports.AssetBundle = exports.AlwaysScrollableScrollPhysics = exports.AlignmentDirectional = exports.Alignment = exports.WrapCrossAlignment = exports.WrapAlignment = exports.VerticalDirection = exports.TargetPlatform = exports.TabBarIndicatorSize = exports.TableCellVerticalAlignment = exports.TextInputAction = exports.TextCapitalization = exports.TextOverflow = exports.TextDecoration = exports.TextBaseline = exports.TextDecorationStyle = exports.TextDirection = exports.TextAlign = exports.TextWidthBasis = exports.TileMode = exports.ScrollPositionAlignmentPolicy = exports.SnackBarClosedReason = exports.StretchMode = exports.StrokeJoin = exports.StrokeCap = exports.StackFit = exports.RenderComparison = exports.PlaceholderAlignment = exports.PaintingStyle = exports.Overflow = exports.NavigationMode = exports.MaterialType = exports.MaterialTapTargetSize = exports.MainAxisSize = exports.MainAxisAlignment = exports.ListTileControlAffinity = exports.ListTileStyle = exports.ImageRepeat = exports.HitTestBehavior = exports.FloatingActionButtonLocation = exports.FilterQuality = exports.FontStyle = exports.FlexFit = exports.FontWeight = exports.FloatingLabelBehavior = exports.FlutterLogoStyle = exports.DecorationPosition = exports.DragStartBehavior = exports.CrossFadeState = exports.CollapseMode = exports.Clip = exports.Curve = exports.CrossAxisAlignment = exports.BoxHeightStyle = exports.ButtonBarLayoutBehavior = exports.ButtonTextTheme = exports.BoxShape = exports.BottomNavigationBarType = exports.BorderStyle = exports.BlurStyle = exports.Brightness = exports.BannerLocation = exports.BoxFit = exports.BlendMode = exports.AnimationBehavior = exports.AnimationStatus = exports.AxisDirection = exports.Axis = exports.WidgetState = exports.StatelessWidget = exports.StatefulWidget = exports.BaseWidget = exports.WidgetMgr = exports.WidgetTree = exports.WidgetHelper = exports.BuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.Log = exports.JSFramework = exports.JSFlutterApp = exports.JSBridge = exports.ShapeBorder = exports.Widget = exports.DartClass = exports.JSCallArgs = exports.JSWidgetMirrorMgr = void 0;
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
class JSCallArgs {
    /**
     * @param args args:
      {
        widgetID?:string,
        mirrorID?:string,
        className?:string,
        funcName?:string,
        args?:any
      }
     */
    constructor(args) {
        if (args != null && args != undefined) {
            this.widgetID = args.widgetID;
            this.mirrorID = args.mirrorID;
            this.className = args.className;
            this.funcName = args.funcName;
            this.args = args.args;
        }
    }
    /**
     * @param args args:
      {
        widgetID?:string,
        mirrorID?:string,
        className?:string,
        funcName?:string,
        args?:any
      }
     */
    static new(args) {
        return new JSCallArgs(args);
    }
}
exports.JSCallArgs = JSCallArgs;
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
//****** ShapeBorder ******
class ShapeBorder extends DartClass {
}
exports.ShapeBorder = ShapeBorder;
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
    static createMirrorObj(flutterCallArgs, mirrorID, needMonitordGCValue) {
        let basicMethodCall = JSMethodCall.new("JSBridgeCreateMirrorObj", flutterCallArgs);
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
        let callArgs = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callArgs);
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
        let funArgs = args["args"];
        //TODO: call mirroObj Fun
        JSCallbackMgr.getInstance().invokeCallback(callbackID, funArgs);
    }
    static invokeMirrorObjWithCallback(flutterCallArgs, callback) {
        let basicMethodCall = JSMethodCall.new("JSBridgeInvokeMirrorObjWithCallback", flutterCallArgs);
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
        let callArgs = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callArgs);
        }
        else {
            Log.log("XSFlutterApp:nativeCall error:fun == null" + args);
            return null;
        }
    }
    flutterCallFrequencyLimitCallList(args) {
        if (args) {
            args.map(function (callArgs) {
                // @ts-ignore：dart_sdk
                this.nativeCall(callArgs);
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
    static invokeFlutterFunction(callArgs) {
        JSFramework.callFlutterWidgetChannel("invoke", JSON.stringify(callArgs));
    }
    ///TODO: 优化
    ///github merge
    static invokeCommonFlutterFunction(callArgs) {
        JSFramework.callFlutterWidgetChannel("invokeCommon", JSON.stringify(callArgs));
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
        if (tempWidgetTreeObjMap instanceof StatelessWidget) {
            tempWidgetTreeObjMap = tempWidgetTreeObjMap.build(this.widget.buildContext);
        }
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
        let callArgs = args["args"];
        let jsWidget = this.findWidgetWithWidgetID(widgetID);
        if (jsWidget != null) {
            return jsWidget?.helper?.invokeCallback(buildWidgetDataSeq, callID, args["args"]);
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.name = args.name;
            this.key = args.key;
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
    constructor(args) {
        super(args);
        this.className = "StatefulWidget";
    }
    //subclass override
    createState() { }
}
exports.StatefulWidget = StatefulWidget;
//在JS层，要封装控件，如不需要改变UI内容，使用无状态的StatelessWidget
class StatelessWidget extends BaseWidget {
    constructor(args) {
        super(args);
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
//****** AlwaysScrollableScrollPhysics ******
class AlwaysScrollableScrollPhysics extends DartClass {
    static new(parent) {
        var v = new AlwaysScrollableScrollPhysics();
        v.parent = parent;
        return v;
    }
}
exports.AlwaysScrollableScrollPhysics = AlwaysScrollableScrollPhysics;
//****** AssetBundle ******
class AssetBundle extends DartClass {
    static network(baseUrl) {
        var v = new AssetBundle();
        v.constructorName = "network";
        v.baseUrl = baseUrl;
        return v;
    }
    static platform() {
        var v = new AssetBundle();
        v.constructorName = "platform";
        return v;
    }
}
exports.AssetBundle = AssetBundle;
class AssetImage extends DartClass {
    /**
     * @param args args:
      {
        assetName:string,
        bundle?:BaseAssetBundle,
        packageName?:string
      }
     */
    constructor(assetName, args) {
        super();
        this.assetName = assetName;
        if (args != null && args != undefined) {
            this.bundle = args.bundle;
            this.packageName = args.packageName;
        }
    }
    /**
     * @param args args:
      {
        assetName:string,
        bundle?:BaseAssetBundle,
        packageName?:string
      }
     */
    static new(assetName, args) {
        return new AssetImage(assetName, args);
    }
}
exports.AssetImage = AssetImage;
class BoxConstraints extends DartClass {
    /**
     * @param args args:
      {
        minWidth?:number,
        maxWidth?:number,
        minHeight?:number,
        maxHeight?:number
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.minWidth = args.minWidth;
            this.maxWidth = args.maxWidth;
            this.minHeight = args.minHeight;
            this.maxHeight = args.maxHeight;
        }
    }
    /**
     * @param args args:
      {
        minWidth?:number,
        maxWidth?:number,
        minHeight?:number,
        maxHeight?:number
      }
     */
    static new(args) {
        return new BoxConstraints(args);
    }
}
exports.BoxConstraints = BoxConstraints;
class BorderSide extends DartClass {
    /**
     * @param args args:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.width = args.width;
            this.style = args.style;
        }
    }
    /**
     * @param args args:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle
        }
     */
    static new(args) {
        return new BorderSide(args);
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
     * @param args args:
        {
          top?:Radius,
          bottom?:Radius
        }
     */
    static vertical(args) {
        let v = new BorderRadius();
        v.constructorName = "vertical";
        if (args != null && args != undefined) {
            v.top = args.top;
            v.bottom = args.bottom;
        }
        return v;
    }
    /**
     * @param args args:
        {
          left?:Radius,
          right?:Radius
        }
     */
    static horizontal(args) {
        let v = new BorderRadius();
        v.constructorName = "horizontal";
        if (args != null && args != undefined) {
            v.left = args.left;
            v.right = args.right;
        }
        return v;
    }
    /**
     * @param args args:
        {
          topLeft?:Radius,
          topRight?:Radius,
          bottomLeft?:Radius,
          bottomRight?:Radius,
        }
     */
    static only(args) {
        let v = new BorderRadius();
        v.constructorName = "only";
        if (args != null && args != undefined) {
            v.topLeft = args.topLeft;
            v.topRight = args.topRight;
            v.bottomLeft = args.bottomLeft;
            v.bottomRight = args.bottomRight;
        }
        return v;
    }
}
exports.BorderRadius = BorderRadius;
class BorderRadiusDirectional extends DartClass {
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
     * @param args args:
        {
          top?:Radius,
          bottom?:Radius
        }
     */
    static vertical(args) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "vertical";
        if (args != null && args != undefined) {
            v.top = args.top;
            v.bottom = args.bottom;
        }
        return v;
    }
    /**
     * @param args args:
        {
          start?:Radius,
          end?:Radius
        }
     */
    static horizontal(args) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "horizontal";
        if (args != null && args != undefined) {
            v.start = args.start;
            v.end = args.end;
        }
        return v;
    }
    /**
     * @param args args:
        {
          topStart?:Radius,
          topEnd?:Radius,
          bottomLeft?:Radius,
          bottomRight?:Radius,
        }
     */
    static only(args) {
        let v = new BorderRadiusDirectional();
        v.constructorName = "only";
        if (args != null && args != undefined) {
            v.topStart = args.topStart;
            v.topEnd = args.topEnd;
            v.bottomStart = args.bottomStart;
            v.bottomEnd = args.bottomEnd;
        }
        return v;
    }
}
exports.BorderRadiusDirectional = BorderRadiusDirectional;
class Border extends DartClass {
    /**
     * @param args args:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.left = args.left;
        }
    }
    /**
     * @param args args:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
      }
     */
    static new(args) {
        return new Border(args);
    }
    /**
     * @param args args:
        {
          color?:Color,
          width?:number,
          style?:BorderStyle,
        }
     */
    static all(args) {
        var v = new Border();
        v.constructorName = "all";
        if (args != null && args != undefined) {
            v.color = args.color;
            v.width = args.width;
            v.style = args.style;
        }
        return v;
    }
    /**
     * @param args args:
        {
          vertical?:BorderSide,
          horizontal?:BorderSide
        }
     */
    static symmetric(args) {
        var v = new Border();
        v.constructorName = "symmetric";
        if (args != null && args != undefined) {
            v.vertical = args.vertical;
            v.horizontal = args.horizontal;
        }
        return v;
    }
}
exports.Border = Border;
class BorderDirectional extends DartClass {
    /**
     * @param args args:
        {
          top?:BorderSide,
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.top = args.top;
            this.start = args.start;
            this.end = args.end;
            this.bottom = args.bottom;
        }
    }
    /**
     * @param args args:
        {
          top?:BorderSide,
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    static new(args) {
        return new BorderDirectional(args);
    }
}
exports.BorderDirectional = BorderDirectional;
class ButtonThemeData extends DartClass {
    /**
     * @param args args:
        {
          textTheme?:ButtonTextTheme,
          minWidth?:number,
          height?:number,
          padding?:EdgeInsets,
          layoutBehavior?:ButtonBarLayoutBehavior,
          alignedDropdown?:boolean,
          buttonColor?:Color,
          disabledColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorScheme?:ColorScheme,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.textTheme = args.textTheme;
            this.minWidth = args.minWidth;
            this.height = args.height;
            this.padding = args.padding;
            this.layoutBehavior = args.layoutBehavior;
            this.alignedDropdown = args.alignedDropdown;
            this.buttonColor = args.buttonColor;
            this.disabledColor = args.disabledColor;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.colorScheme = args.colorScheme;
        }
    }
    /**
     * @param args args:
        {
          textTheme?:ButtonTextTheme,
          minWidth?:number,
          height?:number,
          padding?:EdgeInsets,
          layoutBehavior?:ButtonBarLayoutBehavior,
          alignedDropdown?:boolean,
          buttonColor?:Color,
          disabledColor?:Color,
          focusColor?:Color,
          hoverColor?:Color,
          highlightColor?:Color,
          splashColor?:Color,
          colorScheme?:ColorScheme,
        }
     */
    static new(args) {
        return new ButtonThemeData(args);
    }
}
exports.ButtonThemeData = ButtonThemeData;
class BoxDecoration extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.border = args.border;
            this.borderRadius = args.borderRadius;
            this.boxShadow = args.boxShadow;
            this.gradient = args.gradient;
            this.backgroundBlendMode = args.backgroundBlendMode;
            this.shape = args.shape;
            this.image = args.image;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new BoxDecoration(args);
    }
}
exports.BoxDecoration = BoxDecoration;
class BannerPainter extends DartClass {
    /**
     * @param args args:
        {
          message?:string,
          textDirection?:TextDirection,
          location?:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
      */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.message = args.message;
            this.textDirection = args.textDirection;
            this.location = args.location;
            this.layoutDirection = args.layoutDirection;
            this.color = args.color;
            this.textStyle = args.textStyle;
        }
    }
    /**
     * @param args args:
        {
          message?:string,
          textDirection?:TextDirection,
          location?:BannerLocation,
          layoutDirection?:TextDirection,
          color?:Color,
          textStyle?:TextStyle,
        }
      */
    static new(args) {
        return new BannerPainter(args);
    }
}
exports.BannerPainter = BannerPainter;
class BoxShadow extends DartClass {
    /**
     * @param args args:
      {
        color?:Color,
        offset?:Offset,
        blurRadius?:number,
        spreadRadius?:number
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.offset = args.offset;
            this.blurRadius = args.blurRadius;
            this.spreadRadius = args.spreadRadius;
        }
    }
    /**
     * @param args args:
      {
        color?:Color,
        offset?:Offset,
        blurRadius?:number,
        spreadRadius?:number
      }
     */
    static new(args) {
        return new BoxShadow(args);
    }
}
exports.BoxShadow = BoxShadow;
//****** BouncingScrollPhysics ******
class BouncingScrollPhysics extends DartClass {
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.parent = args.parent;
        }
    }
    static new(args) {
        return new BouncingScrollPhysics(args);
    }
}
exports.BouncingScrollPhysics = BouncingScrollPhysics;
//#endregion
//#region ------- C -------
//****** Color ******
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
class ColorScheme extends DartClass {
    /**
     * @param args args:
        {
          primary?:Color,
          primaryVariant?:Color,
          secondary?:Color,
          secondaryVariant?:Color,
          surface?:Color,
          background?:Color,
          error?:Color,
          onPrimary?:Color,
          onSecondary?:Color,
          onSurface?:Color,
          onBackground?:Color,
          onError?:Color,
          brightness?:Brightness
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.primary = args.primary;
            this.primaryVariant = args.primaryVariant;
            this.secondary = args.secondary;
            this.secondaryVariant = args.secondaryVariant;
            this.surface = args.surface;
            this.background = args.background;
            this.error = args.error;
            this.onPrimary = args.onPrimary;
            this.onSecondary = args.onSecondary;
            this.onSurface = args.onSurface;
            this.onBackground = args.onBackground;
            this.onError = args.onError;
            this.brightness = args.brightness;
        }
    }
    /**
     * @param args args:
        {
          primary?:Color,
          primaryVariant?:Color,
          secondary?:Color,
          secondaryVariant?:Color,
          surface?:Color,
          background?:Color,
          error?:Color,
          onPrimary?:Color,
          onSecondary?:Color,
          onSurface?:Color,
          onBackground?:Color,
          onError?:Color,
          brightness?:Brightness
        }
     */
    static new(args) {
        return new ColorScheme(args);
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.parent = args.parent;
        }
    }
    static new(args) {
        return new ClampingScrollPhysics(args);
    }
}
exports.ClampingScrollPhysics = ClampingScrollPhysics;
//****** CurveTween ******
class CurveTween extends Widget {
    constructor(curve) {
        super();
        this.curve = curve;
    }
    static new(curve) {
        return new CurveTween(curve);
    }
    ;
}
exports.CurveTween = CurveTween;
class Duration extends DartClass {
    /**
     * @param args args:
        {
          days?:number,
          hours?:number,
          minutes?:number,
          seconds?:number,
          milliseconds?:number
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.days = args.days;
            this.hours = args.hours;
            this.minutes = args.minutes;
            this.seconds = args.seconds;
            this.milliseconds = args.milliseconds;
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
     * @param args args:
        {
          days?:number,
          hours?:number,
          minutes?:number,
          seconds?:number,
          milliseconds?:number
        }
     */
    static new(args) {
        return new Duration(args);
    }
}
exports.Duration = Duration;
class EdgeInsets extends DartClass {
    /**
     * @param args args:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.left = args.left;
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
        }
    }
    /**
     * @param args args:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    static new(args) {
        return new EdgeInsets(args);
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
     * @param args args:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    static only(args) {
        let v = new EdgeInsets();
        v.constructorName = "only";
        if (args != null && args != undefined) {
            v.left = args.left;
            v.top = args.top;
            v.right = args.right;
            v.bottom = args.bottom;
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
     * @param args args:
        {
          vertical?:number,
          horizontal?:number
        }
     */
    static symmetric(args) {
        let v = new EdgeInsets();
        v.constructorName = "symmetric";
        if (args != null && args != undefined) {
            v.vertical = args.vertical;
            v.horizontal = args.horizontal;
        }
        return v;
    }
}
exports.EdgeInsets = EdgeInsets;
class EdgeInsetsDirectional extends DartClass {
    /**
     * @param args args:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.start = args.start;
            this.top = args.top;
            this.end = args.end;
            this.bottom = args.bottom;
        }
    }
    /**
     * @param args args:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number,
        }
     */
    static new(args) {
        return new EdgeInsetsDirectional(args);
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
     * @param args args:
        {
          start?:number,
          top?:number,
          end?:number,
          bottom?:number
        }
     */
    static only(args) {
        let v = new EdgeInsetsDirectional();
        v.constructorName = "only";
        if (args != null && args != undefined) {
            v.start = args.start;
            v.top = args.top;
            v.end = args.end;
            v.bottom = args.bottom;
        }
        return v;
    }
}
exports.EdgeInsetsDirectional = EdgeInsetsDirectional;
//#endregion
//#region ------- F -------
class Future extends DartClass {
    static delayed(duration, onBack) {
        dart_sdk.async.Future.delayed(duration, onBack);
    }
}
exports.Future = Future;
//****** FlexColumnWidth ******
class FlexColumnWidth extends DartClass {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new FlexColumnWidth(value);
    }
}
exports.FlexColumnWidth = FlexColumnWidth;
class FlutterLogoDecoration extends DartClass {
    /**
     * @param args args:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.textColor = args.textColor;
            this.style = args.style;
            this.margin = args.margin;
        }
    }
    /**
     * @param args args:
        {
          textColor?:Color,
          style?:FlutterLogoStyle,
          margin?:EdgeInsets,
        }
     */
    static new(args) {
        return new FlutterLogoDecoration(args);
    }
}
exports.FlutterLogoDecoration = FlutterLogoDecoration;
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
//****** FixedColumnWidth ******
class FixedColumnWidth extends DartClass {
    constructor(value) {
        super();
        this.value = value;
    }
    static new(value) {
        return new FixedColumnWidth(value);
    }
}
exports.FixedColumnWidth = FixedColumnWidth;
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
//****** GradientTransform ******
class GradientTransform extends DartClass {
    static rotation(radians) {
        var v = new GradientTransform();
        v.constructorName = "rotation";
        v.radians = radians;
        return v;
    }
}
exports.GradientTransform = GradientTransform;
class Gradient extends DartClass {
    /**
     * @param args args:
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
    static sweep(args) {
        var v = new Gradient();
        v.constructorName = "sweep";
        if (args != null && args != undefined) {
            v.center = args.center;
            v.startAngle = args.startAngle;
            v.endAngle = args.endAngle;
            v.colors = args.colors;
            v.stops = args.stops;
            v.tileMode = args.tileMode;
            v.transform = args.transform;
        }
        return v;
    }
    /**
    * @param args args:
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
    static radial(args) {
        var v = new Gradient();
        v.constructorName = "radial";
        if (args != null && args != undefined) {
            v.center = args.center;
            v.radius = args.radius;
            v.colors = args.colors;
            v.stops = args.stops;
            v.tileMode = args.tileMode;
            v.focal = args.focal;
            v.focalRadius = args.focalRadius;
            v.transform = args.transform;
        }
        return v;
    }
    /**
    * @param args args:
       {
         begin?:Alignment,
         end?:Alignment,
         colors:Array<Color>,
         stops?:Array<number>,
         tileMode?:TileMode,
         transform?:GradientRotation,
       }
    */
    static linear(args) {
        var v = new Gradient();
        v.constructorName = "linear";
        if (args != null && args != undefined) {
            v.begin = args.begin;
            v.end = args.end;
            v.colors = args.colors;
            v.stops = args.stops;
            v.tileMode = args.tileMode;
            v.transform = args.transform;
        }
        return v;
    }
}
exports.Gradient = Gradient;
class InputBorder extends ShapeBorder {
    static none() {
        var v = new InputBorder();
        v.constructorName = "none";
        return v;
    }
    /**
     * @param args args:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
          gapPadding?:number,
        }
     */
    static outline(args) {
        var v = new InputBorder();
        v.constructorName = "outline";
        if (args != null && args != undefined) {
            v.borderRadius = args.borderRadius;
            v.borderSide = args.borderSide;
            v.gapPadding = args.gapPadding;
        }
        return v;
    }
    /**
     * @param args args:
        {
          borderSide?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static underline(args) {
        var v = new InputBorder();
        v.constructorName = "underline";
        if (args != null && args != undefined) {
            v.borderRadius = args.borderRadius;
            v.borderSide = args.borderSide;
        }
        return v;
    }
    ;
}
exports.InputBorder = InputBorder;
class ImageProvider extends DartClass {
    /**
     * @param args args:
        {
          scale?:number
        }
     */
    static file(file, args) {
        var v = new ImageProvider();
        v.file = file;
        v.constructorName = "file";
        if (args != null && args != undefined) {
            v.scale = args.scale;
        }
        return v;
    }
    /**
     * @param args args:
        {
          scale?:number,
        }
     */
    static memory(bytes, args) {
        var v = new ImageProvider();
        v.bytes = bytes;
        v.constructorName = "memory";
        if (args != null && args != undefined) {
            v.scale = args.scale;
        }
        return v;
    }
    /**
    * @param args args:
       {
         scale?:number,
       }
    */
    static network(url, args) {
        var v = new ImageProvider();
        v.url = url;
        v.constructorName = "Network";
        if (args != null && args != undefined) {
            v.scale = args.scale;
        }
        return v;
    }
    /**
     * @param args args:
        {
          width?:number,
          height?:number,
          allowUpscaling?:boolean,
        }
     */
    static resize(imageProvider, args) {
        var v = new ImageProvider();
        v.constructorName = "resize";
        v.imageProvider = imageProvider;
        if (args != null && args != undefined) {
            v.width = args.width;
            v.allowUpscaling = args.allowUpscaling;
            v.height = args.height;
        }
        return v;
    }
    /**
     * @param args args:
        {
          assetName:string,
          scale?:number,
          bundle?:BaseAssetBundle,
          packageName?:string,
        }
     */
    static exactAsset(assetName, args) {
        var v = new ImageProvider();
        v.constructorName = "exactAsset";
        v.assetName = assetName;
        if (args != null && args != undefined) {
            v.scale = args.scale;
            v.bundle = args.bundle;
            v.packageName = args.packageName;
        }
        return v;
    }
}
exports.ImageProvider = ImageProvider;
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
class IconThemeData extends DartClass {
    /**
     * @param args args:
        {
          color?:Color,
          opacity?:number,
          size?:number
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.opacity = args.opacity;
            this.size = args.size;
        }
    }
    /**
     * @param args args:
        {
          color?:Color,
          opacity?:number,
          size?:number
        }
     */
    static new(args) {
        return new IconThemeData(args);
    }
}
exports.IconThemeData = IconThemeData;
//****** ImageShader ******
class ImageShader extends DartClass {
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
class InputDecorationTheme extends DartClass {
    /**
     * @param args args:
        {
          labelStyle?:TextStyle,
          helperStyle?:TextStyle,
          helperMaxLines?:number,
          hintStyle?:TextStyle,
          errorStyle?:TextStyle,
          errorMaxLines?:number,
          hasFloatingPlaceholder?:boolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.labelStyle = args.labelStyle;
            this.helperStyle = args.helperStyle;
            this.helperMaxLines = args.helperMaxLines;
            this.hintStyle = args.hintStyle;
            this.errorStyle = args.errorStyle;
            this.errorMaxLines = args.errorMaxLines;
            this.hasFloatingPlaceholder = args.hasFloatingPlaceholder;
            this.floatingLabelBehavior = args.floatingLabelBehavior;
            this.isDense = args.isDense;
            this.contentPadding = args.contentPadding;
            this.isCollapsed = args.isCollapsed;
            this.prefixStyle = args.prefixStyle;
            this.suffixStyle = args.suffixStyle;
            this.counterStyle = args.counterStyle;
            this.filled = args.filled;
            this.fillColor = args.fillColor;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.errorBorder = args.errorBorder;
            this.focusedBorder = args.focusedBorder;
            this.focusedErrorBorder = args.focusedErrorBorder;
            this.disabledBorder = args.disabledBorder;
            this.enabledBorder = args.enabledBorder;
            this.border = args.border;
            this.alignLabelWithHint = args.alignLabelWithHint;
        }
    }
    /**
     * @param args args:
        {
          labelStyle?:TextStyle,
          helperStyle?:TextStyle,
          helperMaxLines?:number,
          hintStyle?:TextStyle,
          errorStyle?:TextStyle,
          errorMaxLines?:number,
          hasFloatingPlaceholder?:boolean,
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
    static new(args) {
        return new InputDecorationTheme(args);
    }
}
exports.InputDecorationTheme = InputDecorationTheme;
class InputDecoration extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.icon = args.icon;
            this.labelText = args.labelText;
            this.labelStyle = args.labelStyle;
            this.helperText = args.helperText;
            this.helperStyle = args.helperStyle;
            this.helperMaxLines = args.helperMaxLines;
            this.hintText = args.hintText;
            this.hintStyle = args.hintStyle;
            this.hintMaxLines = args.hintMaxLines;
            this.errorText = args.errorText;
            this.errorStyle = args.errorStyle;
            this.errorMaxLines = args.errorMaxLines;
            this.hasFloatingPlaceholder = args.hasFloatingPlaceholder;
            this.floatingLabelBehavior = args.floatingLabelBehavior;
            this.isCollapsed = args.isCollapsed;
            this.isDense = args.isDense;
            this.contentPadding = args.contentPadding;
            this.prefixIcon = args.prefixIcon;
            this.prefixIconConstraints = args.prefixIconConstraints;
            this.prefix = args.prefix;
            this.prefixText = args.prefixText;
            this.prefixStyle = args.prefixStyle;
            this.suffixIcon = args.suffixIcon;
            this.suffix = args.suffix;
            this.suffixText = args.suffixText;
            this.suffixStyle = args.suffixStyle;
            this.suffixIconConstraints = args.suffixIconConstraints;
            this.counter = args.counter;
            this.counterText = args.counterText;
            this.counterStyle = args.counterStyle;
            this.filled = args.filled;
            this.fillColor = args.fillColor;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.errorBorder = args.errorBorder;
            this.focusedBorder = args.focusedBorder;
            this.focusedErrorBorder = args.focusedErrorBorder;
            this.disabledBorder = args.disabledBorder;
            this.enabledBorder = args.enabledBorder;
            this.border = args.border;
            this.enabled = args.enabled;
            this.semanticCounterText = args.semanticCounterText;
            this.alignLabelWithHint = args.alignLabelWithHint;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new InputDecoration(args);
    }
    /**
     * @param args args:
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
    static collapsed(args) {
        let v = new InputDecoration();
        v.constructorName = "collapsed";
        if (args != null && args != undefined) {
            v.hintText = args.hintText;
            v.hasFloatingPlaceholder = args.hasFloatingPlaceholder;
            v.hintStyle = args.hintStyle;
            v.filled = args.filled;
            v.fillColor = args.fillColor;
            v.border = args.border;
            v.enabled = args.enabled;
        }
        return v;
    }
}
exports.InputDecoration = InputDecoration;
//#endregion
//#region ------- K -------
//****** Key ******
class Key extends DartClass {
    static value(value) {
        var v = new Key();
        v.constructorName = "value";
        v.value = value;
        return v;
    }
    static unique() {
        var v = new Key();
        v.constructorName = "unique";
        return v;
    }
    static global(debugLabel) {
        var v = new Key();
        v.constructorName = "global";
        v.debugLabel = debugLabel;
        return v;
    }
}
exports.Key = Key;
//#endregion
//#region ------- L -------
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
class MediaQuery extends DartClass {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          data?:MediaQueryData,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.data = args.data;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          data?:MediaQueryData,
        }
     */
    static new(args) {
        return new MediaQuery(args);
    }
    ;
    static of(context) {
        return context.mediaQueryData;
    }
}
exports.MediaQuery = MediaQuery;
class MediaQueryData extends DartClass {
    /**
     * @param args args:
        {
          size?:Size,
          devicePixelRatio?:number,
          textScaleFactor?:number,
          platformBrightness?:Brightness,
          padding?:EdgeInsets,
          viewInsets?:EdgeInsets,
          alwaysUse24HourFormat?:boolean,
          accessibleNavigation?:boolean,
          invertColors?:boolean,
          highContrast?:boolean,
          disableAnimations?:boolean,
          boldText?:boolean,
          navigationMode?:NavigationMode
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.size = args.size;
            this.devicePixelRatio = args.devicePixelRatio;
            this.textScaleFactor = args.textScaleFactor;
            this.padding = args.padding;
            this.viewInsets = args.viewInsets;
            this.alwaysUse24HourFormat = args.alwaysUse24HourFormat;
            this.accessibleNavigation = args.accessibleNavigation;
            this.invertColors = args.invertColors;
            this.disableAnimations = args.disableAnimations;
            this.boldText = args.boldText;
            this.platformBrightness = args.platformBrightness;
            this.highContrast = args.highContrast;
            this.navigationMode = args.navigationMode;
        }
    }
    /**
     * @param args args:
        {
          size?:Size,
          devicePixelRatio?:number,
          textScaleFactor?:number,
          platformBrightness?:Brightness,
          padding?:EdgeInsets,
          viewInsets?:EdgeInsets,
          alwaysUse24HourFormat?:boolean,
          accessibleNavigation?:boolean,
          invertColors?:boolean,
          highContrast?:boolean,
          disableAnimations?:boolean,
          boldText?:boolean,
          navigationMode?:NavigationMode
        }
     */
    static new(args) {
        return new MediaQueryData(args);
    }
}
exports.MediaQueryData = MediaQueryData;
//#endregion
//#region ------- N -------
//****** NeverScrollableScrollPhysics ******
class NeverScrollableScrollPhysics extends DartClass {
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.parent = args.parent;
        }
    }
    static new(args) {
        return new NeverScrollableScrollPhysics(args);
    }
}
exports.NeverScrollableScrollPhysics = NeverScrollableScrollPhysics;
//****** TODO Notification ******
class Notification extends DartClass {
    static new() {
        return new Notification();
    }
}
exports.Notification = Notification;
class NotchedShape extends DartClass {
    static circular() {
        var v = new NotchedShape();
        v.constructorName = "circular";
        return v;
    }
    static automatic(host) {
        var v = new NotchedShape();
        v.host = host;
        return v;
    }
}
exports.NotchedShape = NotchedShape;
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
class OutlinedBorder extends ShapeBorder {
    /**
     * @param args args:
        {
          side?:BorderSide,
        }
     */
    static circleBorder(args) {
        var v = new OutlinedBorder();
        v.constructorName = "circleBorder";
        if (args != null && args != undefined) {
            v.side = args.side;
        }
        return v;
    }
    /**
     * @param args args:
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static beveledRectangleBorder(args) {
        var v = new OutlinedBorder();
        v.constructorName = "beveledRectangleBorder";
        if (args != null && args != undefined) {
            v.side = args.side;
            v.borderRadius = args.borderRadius;
        }
        return v;
    }
    /**
     * @param args args:
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static continuousRectangleBorder(args) {
        var v = new OutlinedBorder();
        v.constructorName = "continuousRectangleBorder";
        if (args != null && args != undefined) {
            v.side = args.side;
            v.borderRadius = args.borderRadius;
        }
        return v;
    }
    /**
     * @param args args:
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static roundedRectangleBorder(args) {
        var v = new OutlinedBorder();
        v.constructorName = "roundedRectangleBorder";
        if (args != null && args != undefined) {
            v.side = args.side;
            v.borderRadius = args.borderRadius;
        }
        return v;
    }
    /**
    * @param args args:
       {
         side?:BorderSide,
       }
    */
    static stadiumBorder(args) {
        var v = new OutlinedBorder();
        v.constructorName = "stadiumBorder";
        if (args != null && args != undefined) {
            v.side = args.side;
        }
        return v;
    }
}
exports.OutlinedBorder = OutlinedBorder;
//#endregion
//#region ------- P -------
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
class Rect extends DartClass {
    /**
     * @param args args:
        {
          center?:Offset,
          width?:number,
          height?:number
        }
     */
    static fromCenter(args) {
        let v = new Rect();
        v.constructorName = "fromCenter";
        if (args != null && args != undefined) {
            v.center = args.center;
            v.width = args.width;
            v.height = args.height;
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
     * @param args args:
      {
        center?:Offset,
        radius?:number
      }
     */
    static fromCircle(args) {
        let v = new Rect();
        v.constructorName = "fromCircle";
        if (args != null && args != undefined) {
            v.center = args.center;
            v.radius = args.radius;
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
     * @param args args:
      {
        topLeft?:Radius,
        topRight?:Radius,
        bottomRight?:Radius,
        bottomLeft?:Radius,
      }
     */
    static fromLTRBAndCorners(left, top, right, bottom, args) {
        let v = new RRect();
        v.constructorName = "fromLTRBAndCorners";
        v.left = left;
        v.top = top;
        v.right = right;
        v.bottom = bottom;
        if (args != null && args != undefined) {
            v.topLeft = args.topLeft;
            v.topRight = args.topRight;
            v.bottomLeft = args.bottomLeft;
            v.bottomRight = args.bottomRight;
        }
        return v;
    }
    /**
     * @param args args:
      {
        topLeft?:Radius,
        topRight?:Radius,
        bottomRight?:Radius,
        bottomLeft?:Radius,
      }
     */
    static fromRectAndCorners(rect, args) {
        let v = new RRect();
        v.constructorName = "fromRectAndCorners";
        v.rect = rect;
        if (args != null && args != undefined) {
            v.topLeft = args.topLeft;
            v.topRight = args.topRight;
            v.bottomLeft = args.bottomLeft;
            v.bottomRight = args.bottomRight;
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
     * @param args args:
        {
          rotation?:number,
          scale?:number,
          anchorX?:number,
          anchorY?:number,
          translateX?:number,
          translateY?:number,
        }
     */
    static fromComponents(args) {
        let v = new RSTransform();
        v.constructorName = "fromComponents";
        if (args != null && args != undefined) {
            v.rotation = args.rotation;
            v.scale = args.scale;
            v.anchorX = args.anchorX;
            v.anchorY = args.anchorY;
            v.translateX = args.translateX;
            v.translateY = args.translateY;
        }
        return v;
    }
    static new(scos, ssin, tx, ty) {
        return new RSTransform(scos, ssin, tx, ty);
    }
}
exports.RSTransform = RSTransform;
//****** RangeMaintainingScrollPhysics ******
class RangeMaintainingScrollPhysics extends DartClass {
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.parent = args.parent;
        }
    }
    static new(args) {
        return new RangeMaintainingScrollPhysics(args);
    }
}
exports.RangeMaintainingScrollPhysics = RangeMaintainingScrollPhysics;
//#endregion
//#region ------- S -------
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
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.fontFamily = args.fontFamily;
            this.fontFamilyFallback = args.fontFamilyFallback;
            this.fontSize = args.fontSize;
            this.height = args.height;
            this.leading = args.leading;
            this.fontWeight = args.fontWeight;
            this.fontStyle = args.fontStyle;
            this.forceStrutHeight = args.forceStrutHeight;
            this.debugLabel = args.debugLabel;
            this.packageName = args.packageName;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new StrutStyle(args);
    }
}
exports.StrutStyle = StrutStyle;
class SystemUiOverlayStyle extends DartClass {
    /**
     * @param args args:
        {
          systemNavigationBarColor?:Color,
          systemNavigationBarDividerColor?:Color,
          statusBarColor?:Color,
          systemNavigationBarIconBrightness?:Brightness,
          statusBarBrightness?:Brightness,
          statusBarIconBrightness?:Brightness
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.systemNavigationBarColor = args.systemNavigationBarColor;
            this.systemNavigationBarDividerColor = args.systemNavigationBarDividerColor;
            this.systemNavigationBarIconBrightness = args.systemNavigationBarIconBrightness;
            this.statusBarColor = args.statusBarColor;
            this.statusBarBrightness = args.statusBarBrightness;
            this.statusBarIconBrightness = args.statusBarIconBrightness;
        }
    }
    /**
     * @param args args:
        {
          systemNavigationBarColor?:Color,
          systemNavigationBarDividerColor?:Color,
          statusBarColor?:Color,
          systemNavigationBarIconBrightness?:Brightness,
          statusBarBrightness?:Brightness,
          statusBarIconBrightness?:Brightness
        }
     */
    static new(args) {
        return new SystemUiOverlayStyle(args);
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
     * @param args args:
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.mass = args.mass;
            this.stiffness = args.stiffness;
            this.damping = args.damping;
        }
    }
    /**
     * @param args args:
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    static new(args) {
        return new SpringDescription(args);
    }
}
exports.SpringDescription = SpringDescription;
class ScrollPhysics extends DartClass {
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.parent = args.parent;
        }
    }
    static new(args) {
        return new ScrollPhysics(args);
    }
}
exports.ScrollPhysics = ScrollPhysics;
// Todo:
class ScrollController extends DartClass {
    /**
     * @param args args:
        {
          initialScrollOffset?:number,
          keepScrollOffset?:boolean,
          debugLabel?:string
        }
     */
    constructor(args) {
        super();
        this.createMirrorID();
        if (args != null && args != undefined) {
            this.initialScrollOffset = args.initialScrollOffset;
            this.keepScrollOffset = args.keepScrollOffset;
            this.debugLabel = args.debugLabel;
        }
    }
    /**
     * @param args args:
        {
          duration?:Duration,
          curve?:Curves
        }
     */
    animateTo(offset, args) {
        var map = new Map();
        map.set("offset", offset);
        if (args != null && args != undefined) {
            if (args.duration != null && args.duration != undefined) {
                map.set("duration", args.duration);
            }
            if (args.curve != null && args.curve != undefined) {
                map.set("curve", args.curve);
            }
        }
        let argument = JSCallArgs.new({ mirrorID: this.mirrorID, className: "ScrollController", funcName: "animateTo", args: map });
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
        let argument = JSCallArgs.new({ mirrorID: this.mirrorID, className: "ScrollController", funcName: "jumpTo", args: args });
        JSFramework.invokeFlutterFunction(argument);
    }
    /**
     * @param args args:
        {
          initialScrollOffset?:number,
          keepScrollOffset?:boolean,
          debugLabel?:string
        }
     */
    static new(args) {
        return new ScrollController(args);
    }
}
exports.ScrollController = ScrollController;
class Shadow extends DartClass {
    /**
     * @param args args:
        {
          color?:Color,
          offset?:Offset,
          blurRadius?:number
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.blurRadius = args.blurRadius;
            this.offset = args.offset;
        }
    }
    /**
     * @param args args:
        {
          color?:Color,
          offset?:Offset,
          blurRadius?:number
        }
     */
    static new(args) {
        return new Shadow(args);
    }
}
exports.Shadow = Shadow;
class ScrollbarPainter extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.color = args.color;
            this.textDirection = args.textDirection;
            this.thickness = args.thickness;
            this.fadeoutOpacityAnimation = args.fadeoutOpacityAnimation;
            this.padding = args.padding;
            this.mainAxisMargin = args.mainAxisMargin;
            this.crossAxisMargin = args.crossAxisMargin;
            this.radius = args.radius;
            this.minLength = args.minLength;
            this.minOverscrollLength = args.minOverscrollLength;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new ScrollbarPainter(args);
    }
}
exports.ScrollbarPainter = ScrollbarPainter;
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
class TextStyle extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.inherit = args.inherit;
            this.color = args.color;
            this.backgroundColor = args.backgroundColor;
            this.fontSize = args.fontSize;
            this.fontWeight = args.fontWeight;
            this.fontStyle = args.fontStyle;
            this.letterSpacing = args.letterSpacing;
            this.wordSpacing = args.wordSpacing;
            this.textBaseline = args.textBaseline;
            this.height = args.height;
            this.decoration = args.decoration;
            this.decorationColor = args.decorationColor;
            this.decorationStyle = args.decorationStyle;
            this.decorationThickness = args.decorationThickness;
            this.debugLabel = args.debugLabel;
            this.fontFamily = args.fontFamily;
            this.packageName = args.packageName;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new TextStyle(args);
    }
}
exports.TextStyle = TextStyle;
class TableBorder extends DartClass {
    /**
     * @param args args:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
        horizontalInside?:BorderSide,
        verticalInside?:BorderSide
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.left = args.left;
            this.horizontalInside = args.horizontalInside;
            this.verticalInside = args.verticalInside;
        }
    }
    /**
     * @param args args:
      {
        top?:BorderSide,
        right?:BorderSide,
        bottom?:BorderSide,
        left?:BorderSide,
        horizontalInside?:BorderSide,
        verticalInside?:BorderSide
      }
     */
    static new(args) {
        return new TableBorder(args);
    }
    /**
     * @param args args:
      {
        color?:Color,
        width?:number,
        style?:BorderStyle,
      }
     */
    static all(args) {
        let v = new TableBorder();
        v.constructorName = "all";
        if (args != null && args != undefined) {
            v.color = args.color;
            v.width = args.width;
            v.style = args.style;
        }
        return v;
    }
    /**
     * @param args args:
      {
        inside?:BorderSide,
        outside?:BorderSide
      }
     */
    static symmetric(args) {
        let v = new TableBorder();
        v.constructorName = "symmetric";
        if (args != null && args != undefined) {
            v.inside = args.inside;
            v.outside = args.outside;
        }
        return v;
    }
}
exports.TableBorder = TableBorder;
//****** TODO TableRow ******
class TableColumnWidth extends DartClass {
    static new() {
        return new TableColumnWidth();
    }
}
exports.TableColumnWidth = TableColumnWidth;
class TabController extends DartClass {
    /**
     * @param args args:
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.initialIndex = args.initialIndex;
            this.length = args.length;
            this.vsync = args.vsync;
        }
    }
    /**
     * @param args args:
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    static new(args) {
        return new TabController(args);
    }
}
exports.TabController = TabController;
//****** TODO TextEditingController ******
class TextEditingController extends DartClass {
    constructor(text) {
        super();
        this.text = text;
    }
    static new(text) {
        return new TextEditingController(text);
    }
}
exports.TextEditingController = TextEditingController;
class TextInputType extends DartClass {
    static new() {
        return new TextInputType();
    }
    ;
    static numberWithOptions(args) {
        let v = new TextInputType();
        v.constructorName = "numberWithOptions";
        if (args != null && args != undefined) {
            v.signed = args.signed;
            v.decimal = args.decimal;
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
class Uri extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.scheme = args.scheme;
            this.fragment = args.fragment;
            this.userInfo = args.userInfo;
            this.host = args.host;
            this.port = args.port;
            this.path = args.path;
            this.query = args.query;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Uri(args);
    }
}
exports.Uri = Uri;
//****** VerticalDirection ******
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
     * @param args args:
      {
        horizontal?:number,
        vertical?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.horizontal = args.horizontal;
            this.vertical = args.vertical;
        }
    }
    /**
     * @param args args:
      {
        horizontal?:number,
        vertical?:number,
      }
     */
    static new(args) {
        return new VisualDensity(args);
    }
}
exports.VisualDensity = VisualDensity;
VisualDensity.comfortable = VisualDensity.new({ horizontal: -1.0, vertical: -1.0 });
VisualDensity.compact = VisualDensity.new({ horizontal: -2.0, vertical: -2.0 });
VisualDensity.standard = VisualDensity.new();
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
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          absorbing?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.absorbing = args.absorbing;
            this.ignoringSemantics = args.ignoringSemantics;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          absorbing?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(args) {
        return new AbsorbPointer(args);
    }
}
exports.AbsorbPointer = AbsorbPointer;
class AnimationController extends Widget {
    /**
     * @param args args:
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
    static new(args) {
        var v = new AnimationController();
        v.createMirrorID();
        if (args != null && args != undefined) {
            v.value = args.value;
            v.duration = args.duration;
            v.debugLabel = args.debugLabel;
            v.lowerBound = args.lowerBound;
            v.upperBound = args.upperBound;
            v.animationBehavior = args.animationBehavior;
            v.vsync = args.vsync;
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
class AboutListTile extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          icon?:Widget,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          dense?:boolean,
          applicationIcon?:Widget,
          aboutBoxChildren?:Array<Widget>,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.icon = args.icon;
            this.applicationIcon = args.applicationIcon;
            this.applicationName = args.applicationName;
            this.applicationLegalese = args.applicationLegalese;
            this.applicationVersion = args.applicationVersion;
            this.dense = args.dense;
            this.aboutBoxChildren = args.aboutBoxChildren;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          icon?:Widget,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          dense?:boolean,
          applicationIcon?:Widget,
          aboutBoxChildren?:Array<Widget>,
        }
     */
    static new(args) {
        return new AboutListTile(args);
    }
}
exports.AboutListTile = AboutListTile;
class AboutDialog extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:Widget,
          children?:Array<Widget>,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.applicationIcon = args.applicationIcon;
            this.applicationName = args.applicationName;
            this.applicationLegalese = args.applicationLegalese;
            this.applicationVersion = args.applicationVersion;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:Widget,
          children?:Array<Widget>,
        }
     */
    static new(args) {
        return new AboutDialog(args);
    }
}
exports.AboutDialog = AboutDialog;
class AppBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.automaticallyImplyLeading = args.automaticallyImplyLeading;
            this.title = args.title;
            this.actions = args.actions;
            this.flexibleSpace = args.flexibleSpace;
            this.bottom = args.bottom;
            this.elevation = args.elevation;
            this.shadowColor = args.shadowColor;
            this.shape = args.shape;
            this.backgroundColor = args.backgroundColor;
            this.brightness = args.brightness;
            this.primary = args.primary;
            this.centerTitle = args.centerTitle;
            this.excludeHeaderSemantics = args.excludeHeaderSemantics;
            this.titleSpacing = args.titleSpacing;
            this.toolbarOpacity = args.toolbarOpacity;
            this.bottomOpacity = args.bottomOpacity;
            this.toolbarHeight = args.toolbarHeight;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AppBar(args);
    }
}
exports.AppBar = AppBar;
class Align extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        widthFactor?:number,
        heightFactor?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.widthFactor = args.widthFactor;
            this.heightFactor = args.heightFactor;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        widthFactor?:number,
        heightFactor?:number,
      }
     */
    static new(args) {
        return new Align(args);
    }
}
exports.Align = Align;
class AspectRatio extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          aspectRatio?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.aspectRatio = args.aspectRatio;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          aspectRatio?:number,
        }
     */
    static new(args) {
        return new AspectRatio(args);
    }
}
exports.AspectRatio = AspectRatio;
class AnnotatedRegion extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          value?:number,
          sized?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.value = args.value;
            this.sized = args.sized;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          value?:number,
          sized?:boolean,
        }
     */
    static new(args) {
        return new AnnotatedRegion(args);
    }
}
exports.AnnotatedRegion = AnnotatedRegion;
class AnimatedCrossFade extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.firstChild = args.firstChild;
            this.secondChild = args.secondChild;
            this.firstCurve = args.firstCurve;
            this.secondCurve = args.secondCurve;
            this.sizeCurve = args.sizeCurve;
            this.alignment = args.alignment;
            this.crossFadeState = args.crossFadeState;
            this.duration = args.duration;
            this.reverseDuration = args.reverseDuration;
            this.layoutBuilder = args.layoutBuilder;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedCrossFade(args);
    }
    ;
}
exports.AnimatedCrossFade = AnimatedCrossFade;
class AnimatedOpacity extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.opacity = args.opacity;
            this.curve = args.curve;
            this.duration = args.duration;
            this.onEnd = args.onEnd;
            this.alwaysIncludeSemantics = args.alwaysIncludeSemantics;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedOpacity(args);
    }
    ;
}
exports.AnimatedOpacity = AnimatedOpacity;
class AnimatedBuilder extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          animation?:Animation,
          builder?:any,
          child?:Widget,
          widget?:Widget
        }
     */
    constructor(args) {
        super();
        this.key = args.key;
        this.animation = args.animation;
        this.builder = args.builder;
        this.child = args.child;
        this.widget = args.widget;
    }
    /**
     * @param args args:
        {
          key?:Key,
          animation?:Animation,
          builder?:any,
          child?:Widget,
          widget?:Widget
        }
     */
    static new(args) {
        return new AnimatedBuilder(args);
    }
}
exports.AnimatedBuilder = AnimatedBuilder;
class AnimatedContainer extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.margin = args.margin;
            this.padding = args.padding;
            this.child = args.child;
            this.color = args.color;
            this.decoration = args.decoration;
            this.foregroundDecoration = args.foregroundDecoration;
            this.width = args.width;
            this.height = args.height;
            this.constraints = args.constraints;
            this.transform = args.transform;
            this.curve = args.curve;
            this.duration = args.duration;
            this.onEnd = args.onEnd;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedContainer(args);
    }
}
exports.AnimatedContainer = AnimatedContainer;
class AnimatedPhysicalModel extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.borderRadius = args.borderRadius;
            this.elevation = args.elevation;
            this.color = args.color;
            this.animateColor = this.animateColor;
            this.animateShadowColor = args.animateShadowColor;
            this.shadowColor = args.shadowColor;
            this.curve = args.curve;
            this.duration = args.duration;
            this.onEnd = args.onEnd;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedPhysicalModel(args);
    }
}
exports.AnimatedPhysicalModel = AnimatedPhysicalModel;
class AnimatedPositioned extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.left = args.left;
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.width = args.width;
            this.curve = args.curve;
            this.duration = args.duration;
            this.onEnd = args.onEnd;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedPositioned(args);
    }
}
exports.AnimatedPositioned = AnimatedPositioned;
class AnimatedSize extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.alignment = args.alignment;
            this.curve = args.curve;
            this.duration = args.duration;
            this.reverseDuration = args.reverseDuration;
            this.vsync = args.vsync;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedSize(args);
    }
}
exports.AnimatedSize = AnimatedSize;
class AnimatedDefaultTextStyle extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.style = args.style;
            this.softWrap = args.softWrap;
            this.textAlign = args.textAlign;
            this.softWrap = args.softWrap;
            this.maxLines = args.maxLines;
            this.curve = args.curve;
            this.duration = args.duration;
            this.onEnd = args.onEnd;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new AnimatedDefaultTextStyle(args);
    }
}
exports.AnimatedDefaultTextStyle = AnimatedDefaultTextStyle;
class BottomNavigationBarItem extends Widget {
    /**
     * @param args args:
        {
          icon:Widget,
          title?:Widget,
          activeIcon?:Widget,
          backgroundColor?:Color
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.icon = args.icon;
            this.title = args.title;
            this.activeIcon = args.activeIcon;
            this.backgroundColor = args.backgroundColor;
        }
    }
    /**
     * @param args args:
        {
          icon:Widget,
          title?:Widget,
          activeIcon?:Widget,
          backgroundColor?:Color
        }
     */
    static new(args) {
        return new BottomNavigationBarItem(args);
    }
}
exports.BottomNavigationBarItem = BottomNavigationBarItem;
class Banner extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.message = args.message;
            this.textDirection = args.textDirection;
            this.location = args.location;
            this.layoutDirection = args.layoutDirection;
            this.color = args.color;
            this.textStyle = args.textStyle;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Banner(args);
    }
}
exports.Banner = Banner;
class Baseline extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.baseline = args.baseline;
            this.baselineType = args.baselineType;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    static new(args) {
        return new Baseline(args);
    }
}
exports.Baseline = Baseline;
class ButtonBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.mainAxisSize = args.mainAxisSize;
            this.buttonAlignedDropdown = args.buttonAlignedDropdown;
            this.buttonTextTheme = args.buttonTextTheme;
            this.buttonHeight = args.buttonHeight;
            this.buttonMinWidth = args.buttonMinWidth;
            this.buttonPadding = args.buttonPadding;
            this.layoutBehavior = args.layoutBehavior;
            this.overflowButtonSpacing = args.overflowButtonSpacing;
            this.overflowDirection = args.overflowDirection;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new ButtonBar(args);
    }
}
exports.ButtonBar = ButtonBar;
class BlockSemantics extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          blocking?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.blocking = args.blocking;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          blocking?:boolean,
        }
     */
    static new(args) {
        return new BlockSemantics(args);
    }
}
exports.BlockSemantics = BlockSemantics;
class BottomAppBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.elevation = args.elevation;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.notchMargin = args.notchMargin;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new BottomAppBar(args);
    }
}
exports.BottomAppBar = BottomAppBar;
class BottomNavigationBar extends Widget {
    /**
     * @param args args:
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
          selectedIconTheme?:IconThemeData,
          unselectedIconTheme?:IconThemeData,
          selectedFontSize?:number,
          unselectedFontSize?:number,
          selectedLabelStyle?:TextStyle,
          unselectedLabelStyle?:TextStyle,
          showSelectedLabels?:boolean,
          showUnselectedLabels?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.items = args.items;
            this.onTap = args.onTap;
            this.currentIndex = args.currentIndex;
            this.elevation = args.elevation;
            this.type = args.type;
            this.fixedColor = args.fixedColor;
            this.backgroundColor = args.backgroundColor;
            this.iconSize = args.iconSize;
            this.selectedItemColor = args.selectedItemColor;
            this.unselectedItemColor = args.unselectedItemColor;
            this.selectedIconTheme = args.selectedIconTheme;
            this.unselectedIconTheme = args.unselectedIconTheme;
            this.selectedFontSize = args.selectedFontSize;
            this.unselectedFontSize = args.unselectedFontSize;
            this.selectedLabelStyle = args.selectedLabelStyle;
            this.unselectedLabelStyle = args.unselectedLabelStyle;
            this.showSelectedLabels = args.showSelectedLabels;
            this.showUnselectedLabels = args.showUnselectedLabels;
        }
    }
    /**
     * @param args args:
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
          selectedIconTheme?:IconThemeData,
          unselectedIconTheme?:IconThemeData,
          selectedFontSize?:number,
          unselectedFontSize?:number,
          selectedLabelStyle?:TextStyle,
          unselectedLabelStyle?:TextStyle,
          showSelectedLabels?:boolean,
          showUnselectedLabels?:boolean,
        }
     */
    static new(args) {
        return new BottomNavigationBar(args);
    }
}
exports.BottomNavigationBar = BottomNavigationBar;
class BackButtonIcon extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
        }
     */
    static new(args) {
        return new BackButtonIcon(args);
    }
}
exports.BackButtonIcon = BackButtonIcon;
class BackButton extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          onPressed?:VoidCallback,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          onPressed?:VoidCallback,
        }
     */
    static new(args) {
        return new BackButton(args);
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
     * @param args args:
        {
          key?:Key,
          onPressed?:VoidCallback,
          color?:Color,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
            this.color = args.color;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          onPressed?:VoidCallback,
          color?:Color,
        }
     */
    static new(args) {
        return new CloseButton(args);
    }
}
exports.CloseButton = CloseButton;
class Container extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.padding = args.padding;
            this.color = args.color;
            this.decoration = args.decoration;
            this.foregroundDecoration = args.foregroundDecoration;
            this.width = args.width;
            this.height = args.height;
            this.constraints = args.constraints;
            this.margin = args.margin;
            this.transform = args.transform;
            this.child = args.child;
            this.clipBehavior = args.clipBehavior;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Container(args);
    }
}
exports.Container = Container;
class Center extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          widthFactor?:number,
          heightFactor?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.widthFactor = args.widthFactor;
            this.heightFactor = args.heightFactor;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          widthFactor?:number,
          heightFactor?:number,
        }
     */
    static new(args) {
        return new Center(args);
    }
}
exports.Center = Center;
class ColoredBox extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          color:Color,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          color:Color,
        }
     */
    static new(args) {
        return new ColoredBox(args);
    }
}
exports.ColoredBox = ColoredBox;
class CircleAvatar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.backgroundColor = args.backgroundColor;
            this.backgroundImage = args.backgroundImage;
            this.foregroundColor = args.foregroundColor;
            this.radius = args.radius;
            this.minRadius = args.minRadius;
            this.maxRadius = args.maxRadius;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CircleAvatar(args);
    }
}
exports.CircleAvatar = CircleAvatar;
class Chip extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.avatar = args.avatar;
            this.label = args.label;
            this.labelStyle = args.labelStyle;
            this.labelPadding = args.labelPadding;
            this.deleteIcon = args.deleteIcon;
            this.onDeleted = args.onDeleted;
            this.deleteIconColor = args.deleteIconColor;
            this.deleteButtonTooltipMessage = args.deleteButtonTooltipMessage;
            this.clipBehavior = args.clipBehavior;
            this.backgroundColor = args.backgroundColor;
            this.padding = args.padding;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.elevation = args.elevation;
            this.autofocus = args.autofocus;
            this.shadowColor = args.shadowColor;
            this.visualDensity = args.visualDensity;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Chip(args);
    }
}
exports.Chip = Chip;
class CheckedModeBanner extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
        }
     */
    static new(args) {
        return new CheckedModeBanner(args);
    }
}
exports.CheckedModeBanner = CheckedModeBanner;
class CheckboxListTile extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.activeColor = args.activeColor;
            this.checkColor = args.checkColor;
            this.title = args.title;
            this.subtitle = args.subtitle;
            this.isThreeLine = args.isThreeLine;
            this.dense = args.dense;
            this.contentPadding = args.contentPadding;
            this.secondary = args.secondary;
            this.selected = args.selected;
            this.autofocus = args.autofocus;
            this.controlAffinity = args.controlAffinity;
            this.tristate = args.tristate;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    static new(args) {
        return new CheckboxListTile(args);
    }
}
exports.CheckboxListTile = CheckboxListTile;
class Checkbox extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.activeColor = args.activeColor;
            this.checkColor = args.checkColor;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.autofocus = args.autofocus;
            this.visualDensity = args.visualDensity;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.tristate = args.tristate;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    static new(args) {
        return new Checkbox(args);
    }
}
exports.Checkbox = Checkbox;
class ClipRRect extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.borderRadius = args.borderRadius;
            this.clipBehavior = args.clipBehavior;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    static new(args) {
        return new ClipRRect(args);
    }
}
exports.ClipRRect = ClipRRect;
class ConstrainedBox extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          constraints:BoxConstraints,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.constraints = args.constraints;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          constraints:BoxConstraints,
          key?:Key,
        }
     */
    static new(args) {
        return new ConstrainedBox(args);
    }
}
exports.ConstrainedBox = ConstrainedBox;
class CustomSingleChildLayout extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          delegate?:any,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          delegate?:any,
          key?:Key,
        }
     */
    static new(args) {
        return new CustomSingleChildLayout(args);
    }
}
exports.CustomSingleChildLayout = CustomSingleChildLayout;
class Column extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.mainAxisAlignment = args.mainAxisAlignment;
            this.mainAxisSize = args.mainAxisSize;
            this.crossAxisAlignment = args.crossAxisAlignment;
            this.textDirection = args.textDirection;
            this.verticalDirection = args.verticalDirection;
            this.textBaseline = args.textBaseline;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Column(args);
    }
}
exports.Column = Column;
class CustomMultiChildLayout extends Widget {
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key
        }
     */
    static new(args) {
        return new CustomMultiChildLayout(args);
    }
}
exports.CustomMultiChildLayout = CustomMultiChildLayout;
class CustomScrollView extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.scrollDirection = args.scrollDirection;
            this.reverse = args.reverse;
            this.controller = args.controller;
            this.primary = args.primary;
            this.physics = args.physics;
            this.shrinkWrap = args.shrinkWrap;
            this.center = args.center;
            this.anchor = args.anchor;
            this.cacheExtent = args.cacheExtent;
            this.slivers = args.slivers;
            this.semanticChildCount = args.semanticChildCount;
            this.dragStartBehavior = args.dragStartBehavior;
            this.restorationId = args.restorationId;
            this.clipBehavior = args.clipBehavior;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CustomScrollView(args);
    }
}
exports.CustomScrollView = CustomScrollView;
class Card extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.elevation = args.elevation;
            this.shape = args.shape;
            this.margin = args.margin;
            this.clipBehavior = args.clipBehavior;
            this.child = args.child;
            this.semanticContainer = args.semanticContainer;
            this.borderOnForeground = args.borderOnForeground;
            this.shadowColor = args.shadowColor;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Card(args);
    }
}
exports.Card = Card;
class Divider extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        height?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.height = args.height;
            this.thickness = args.thickness;
            this.indent = args.indent;
            this.endIndent = args.endIndent;
            this.color = args.color;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        height?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
     */
    static new(args) {
        return new Divider(args);
    }
}
exports.Divider = Divider;
class Directionality extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.textDirection = args.textDirection;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    static new(args) {
        return new Directionality(args);
    }
}
exports.Directionality = Directionality;
class DropdownMenuItem extends Widget {
    /**
     * @param args args:
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.child = args.child;
            this.onTap = args.onTap;
        }
    }
    /**
     * @param args args:
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    static new(args) {
        return new DropdownMenuItem(args);
    }
}
exports.DropdownMenuItem = DropdownMenuItem;
class DecoratedBox extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          decoration:BoxDecoration,
          position?:DecorationPosition,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.decoration = args.decoration;
            this.position = args.position;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          decoration:BoxDecoration,
          position?:DecorationPosition,
          key?:Key,
        }
     */
    static new(args) {
        return new DecoratedBox(args);
    }
}
exports.DecoratedBox = DecoratedBox;
class DropdownButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.items = args.items;
            this.value = args.value;
            this.hint = args.hint;
            this.disabledHint = args.disabledHint;
            this.onChanged = args.onChanged;
            this.elevation = args.elevation;
            this.style = args.style;
            this.iconSize = args.iconSize;
            this.isDense = args.isDense;
            this.isExpanded = args.isExpanded;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new DropdownButton(args);
    }
}
exports.DropdownButton = DropdownButton;
class DefaultTabController extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          length:number,
          initialIndex?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.length = args.length;
            this.initialIndex = args.initialIndex;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          length:number,
          initialIndex?:number,
        }
     */
    static new(args) {
        return new DefaultTabController(args);
    }
}
exports.DefaultTabController = DefaultTabController;
class DecorationImage extends Widget {
    /**
     * @param args args:
        {
          image?:any,
          alignment?:Alignment,
          colorFilter?:ColorFilter,
          fit?:BoxFit,
          centerSlice?:Rect,
          repeat?:ImageRepeat,
          matchTextDirection?:boolean,
          scale?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.image = args.image;
            this.colorFilter = args.colorFilter;
            this.fit = args.fit;
            this.alignment = args.alignment;
            this.centerSlice = args.centerSlice;
            this.repeat = args.repeat;
            this.matchTextDirection = args.matchTextDirection;
            this.scale = args.scale;
        }
    }
    /**
     * @param args args:
        {
          image?:any,
          alignment?:Alignment,
          colorFilter?:ColorFilter,
          fit?:BoxFit,
          centerSlice?:Rect,
          repeat?:ImageRepeat,
          matchTextDirection?:boolean,
          scale?:number,
        }
     */
    static new(args) {
        return new DecorationImage(args);
    }
}
exports.DecorationImage = DecorationImage;
class DefaultTextStyle extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.style = args.style;
            this.textAlign = args.textAlign;
            this.softWrap = args.softWrap;
            this.overflow = args.overflow;
            this.maxLines = args.maxLines;
            this.textWidthBasis = args.textWidthBasis;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new DefaultTextStyle(args);
    }
}
exports.DefaultTextStyle = DefaultTextStyle;
class DecoratedBoxTransition extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          decoration?:any,
          position?:DecorationPosition,
          child?:Widget
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.decoration = args.decoration;
            this.position = args.position;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          decoration?:any,
          position?:DecorationPosition,
          child?:Widget
        }
     */
    static new(args) {
        return new DecoratedBoxTransition(args);
    }
}
exports.DecoratedBoxTransition = DecoratedBoxTransition;
class ExcludeSemantics extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          excluding?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.excluding = args.excluding;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          excluding?:boolean,
        }
     */
    static new(args) {
        return new ExcludeSemantics();
    }
}
exports.ExcludeSemantics = ExcludeSemantics;
class Expanded extends Widget {
    /**
     * @param args args:
        {
          child:Widget,
          flex?:number,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.flex = args.flex;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child:Widget,
          flex?:number,
          key?:Key,
        }
     */
    static new(args) {
        return new Expanded(args);
    }
}
exports.Expanded = Expanded;
class ExpandIcon extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          isExpanded?:boolean,
          size?:number,
          onPressed:VoidValueChangedBoolean,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          expandedColor?:Color,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.isExpanded = args.isExpanded;
            this.size = args.size;
            this.onPressed = args.onPressed;
            this.padding = args.padding;
            this.color = args.color;
            this.disabledColor = args.disabledColor;
            this.expandedColor = args.expandedColor;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          isExpanded?:boolean,
          size?:number,
          onPressed:VoidValueChangedBoolean,
          padding?:EdgeInsets,
          color?:Color,
          disabledColor?:Color,
          expandedColor?:Color,
        }
     */
    static new(args) {
        return new ExpandIcon(args);
    }
}
exports.ExpandIcon = ExpandIcon;
class ExpansionTile extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.title = args.title;
            this.subtitle = args.subtitle;
            this.backgroundColor = args.backgroundColor;
            this.onExpansionChanged = args.onExpansionChanged;
            this.children = args.children;
            this.trailing = args.trailing;
            this.initiallyExpanded = args.initiallyExpanded;
            this.maintainState = args.maintainState;
            this.tilePadding = args.tilePadding;
            this.expandedCrossAxisAlignment = args.expandedCrossAxisAlignment;
            this.expandedAlignment = args.expandedAlignment;
            this.childrenPadding = args.childrenPadding;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          leading?:Widget,
          title?:Widget,
          subtitle?:Widget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidValueChangedBoolean,
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
    static new(args) {
        return new ExpansionTile(args);
    }
}
exports.ExpansionTile = ExpansionTile;
class Flexible extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          flex?:number,
          fit?:FlexFit,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.fit = args.fit;
            this.flex = args.flex;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          flex?:number,
          fit?:FlexFit,
        }
     */
    static new(args) {
        return new Flexible(args);
    }
}
exports.Flexible = Flexible;
class FittedBox extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        fit?:BoxFit,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.fit = args.fit;
            this.alignment = args.alignment;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        fit?:BoxFit,
      }
     */
    static new(args) {
        return new FittedBox(args);
    }
}
exports.FittedBox = FittedBox;
class FractionallySizedBox extends Widget {
    /**
      * @param args args:
         {
           child?:Widget,
           alignment?:Alignment,
           widthFactor?:number,
           heightFactor?:number,
           key?:Key
         }
      */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.widthFactor = args.widthFactor;
            this.heightFactor = args.heightFactor;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          alignment?:Alignment,
          widthFactor?:number,
          heightFactor?:number,
          key?:Key
        }
     */
    static new(args) {
        return new FractionallySizedBox(args);
    }
}
exports.FractionallySizedBox = FractionallySizedBox;
class Flex extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.direction = args.direction;
            this.mainAxisAlignment = args.mainAxisAlignment;
            this.mainAxisSize = args.mainAxisSize;
            this.crossAxisAlignment = args.crossAxisAlignment;
            this.textDirection = args.textDirection;
            this.textBaseline = args.textBaseline;
            this.clipBehavior = args.clipBehavior;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Flex(args);
    }
}
exports.Flex = Flex;
class Flow extends Widget {
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          delegate?:any,
          key?:Key,
        }
     */
    static new(args) {
        return new Flow(args);
    }
}
exports.Flow = Flow;
class FlatButton extends Widget {
    /**
     * @param args args:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets;,
          onHighlightChanged?:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
            this.onHighlightChanged = args.onHighlightChanged;
            this.textTheme = args.textTheme;
            this.textColor = args.textColor;
            this.disabledTextColor = args.disabledTextColor;
            this.color = args.color;
            this.disabledColor = args.disabledColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.colorBrightness = args.colorBrightness;
            this.padding = args.padding;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.onLongPress = args.onLongPress;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.visualDensity = args.visualDensity;
            this.autofocus = args.autofocus;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets;,
          onHighlightChanged?:VoidValueChangedBoolean,
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
    static new(args) {
        return new FlatButton(args);
    }
    /**
     * @param args args:
        {
          child:Widget,
          onPressed:VoidCallback,
          padding?:EdgeInsets,
          onHighlightChanged?:VoidValueChangedBoolean,
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
    static icon(args) {
        let v = new FlatButton();
        v.constructorName = "icon";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.onPressed = args.onPressed;
            v.onHighlightChanged = args.onHighlightChanged;
            v.textTheme = args.textTheme;
            v.textColor = args.textColor;
            v.disabledTextColor = args.disabledTextColor;
            v.color = args.color;
            v.disabledColor = args.disabledColor;
            v.highlightColor = args.highlightColor;
            v.splashColor = args.splashColor;
            v.colorBrightness = args.colorBrightness;
            v.padding = args.padding;
            v.shape = args.shape;
            v.clipBehavior = args.clipBehavior;
            v.materialTapTargetSize = args.materialTapTargetSize;
            v.onLongPress = args.onLongPress;
            v.focusColor = args.focusColor;
            v.hoverColor = args.hoverColor;
            v.autofocus = args.autofocus;
            v.icon = args.icon;
            v.label = args.label;
        }
        return v;
    }
}
exports.FlatButton = FlatButton;
class FloatingActionButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.tooltip = args.tooltip;
            this.foregroundColor = args.foregroundColor;
            this.backgroundColor = args.backgroundColor;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.splashColor = args.splashColor;
            this.elevation = args.elevation;
            this.focusElevation = args.focusElevation;
            this.hoverElevation = args.hoverElevation;
            this.highlightElevation = args.highlightElevation;
            this.disabledElevation = args.disabledElevation;
            this.onPressed = args.onPressed;
            this.mini = args.mini;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.isExtended = args.isExtended;
            this.autofocus = args.autofocus;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new FloatingActionButton(args);
    }
}
exports.FloatingActionButton = FloatingActionButton;
class FlexibleSpaceBar extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          title?:Widget,
          background?:Widget,
          centerTitle?:boolean,
          titlePadding?:EdgeInsets,
          collapseMode?:CollapseMode,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.title = args.title;
            this.background = args.background;
            this.centerTitle = args.centerTitle;
            this.titlePadding = args.titlePadding;
            this.collapseMode = args.collapseMode;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          title?:Widget,
          background?:Widget,
          centerTitle?:boolean,
          titlePadding?:EdgeInsets,
          collapseMode?:CollapseMode,
        }
     */
    static new(args) {
        return new FlexibleSpaceBar(args);
    }
}
exports.FlexibleSpaceBar = FlexibleSpaceBar;
class FlexibleSpaceBarSettings extends Widget {
    /**
    * @param args args:
       {
         key?:Key,
         child:Widget,
         toolbarOpacity:number,
         minExtent:number,
         maxExtent:number,
         currentExtent:number,
       }
    */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.toolbarOpacity = args.toolbarOpacity;
            this.minExtent = args.minExtent;
            this.maxExtent = args.maxExtent;
            this.currentExtent = args.currentExtent;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          toolbarOpacity:number,
          minExtent:number,
          maxExtent:number,
          currentExtent:number,
        }
     */
    static new(args) {
        return new FlexibleSpaceBarSettings(args);
    }
}
exports.FlexibleSpaceBarSettings = FlexibleSpaceBarSettings;
class FlutterLogo extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          size?:number,
          textColor?:Color,
          style?:FlutterLogoStyle,
          duration?:Duration,
          curve?:Curve,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.size = args.size;
            this.textColor = args.textColor;
            this.duration = args.duration;
            this.style = args.style;
            this.curve = args.curve;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          size?:number,
          textColor?:Color,
          style?:FlutterLogoStyle,
          duration?:Duration,
          curve?:Curve,
        }
     */
    static new(args) {
        return new FlutterLogo(args);
    }
}
exports.FlutterLogo = FlutterLogo;
class FractionalTranslation extends Widget {
    /**
     * @param args args:
        {
          translation:Offset,
  
          key?:Key,
          transformHitTests?:boolean,
          child?:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.transformHitTests = args.transformHitTests;
            this.translation = args.translation;
        }
    }
    /**
     * @param args args:
        {
          translation:Offset,
  
          key?:Key,
          transformHitTests?:boolean,
          child?:Widget,
        }
     */
    static new(args) {
        return new FractionalTranslation(args);
    }
}
exports.FractionalTranslation = FractionalTranslation;
class GestureDetector extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        onTap?:VoidCallback,
        onTapDown?:any,
        onTapUp?:any,
        onTapCancel?:VoidCallback,
        onDoubleTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onLongPressUp?:VoidCallback,
        onVerticalDragDown?:any,
        onVerticalDragStart?:any,
        onVerticalDragUpdate?:any,
        onVerticalDragEnd?:any,
        onVerticalDragCancel?:VoidCallback,
        onHorizontalDragDown?:any,
        onHorizontalDragStart?:any,
        onHorizontalDragUpdate?:any,
        onHorizontalDragEnd?:any,
        onHorizontalDragCancel?:VoidCallback,
        onPanDown?:any,
        onPanStart?:any,
        onPanUpdate?:any,
        onPanEnd?:any,
        onPanCancel?:VoidCallback,
        onScaleStart?:any,
        onScaleUpdate?:any,
        onScaleEnd?:any,
        behavior?:HitTestBehavior,
        excludeFromSemantics?:boolean,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.onTapDown = args.onTapDown;
            this.onTapUp = args.onTapUp;
            this.onTap = args.onTap;
            this.onTapCancel = args.onTapCancel;
            this.onDoubleTap = args.onDoubleTap;
            this.onLongPress = args.onLongPress;
            this.onLongPressUp = args.onLongPressUp;
            this.onVerticalDragDown = args.onVerticalDragDown;
            this.onVerticalDragStart = args.onVerticalDragStart;
            this.onVerticalDragUpdate = args.onVerticalDragUpdate;
            this.onVerticalDragEnd = args.onVerticalDragEnd;
            this.onVerticalDragCancel = args.onVerticalDragCancel;
            this.onHorizontalDragDown = args.onHorizontalDragDown;
            this.onHorizontalDragStart = args.onHorizontalDragStart;
            this.onHorizontalDragUpdate = args.onHorizontalDragUpdate;
            this.onHorizontalDragEnd = args.onHorizontalDragEnd;
            this.onHorizontalDragCancel = args.onHorizontalDragCancel;
            this.onPanDown = args.onPanDown;
            this.onPanStart = args.onPanStart;
            this.onPanUpdate = args.onPanUpdate;
            this.onPanEnd = args.onPanEnd;
            this.onPanCancel = args.onPanCancel;
            this.onScaleStart = args.onScaleStart;
            this.onScaleUpdate = args.onScaleUpdate;
            this.onScaleEnd = args.onScaleEnd;
            this.behavior = args.behavior;
            this.excludeFromSemantics = args.excludeFromSemantics;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        onTap?:VoidCallback,
        onTapDown?:any,
        onTapUp?:any,
        onTapCancel?:VoidCallback,
        onDoubleTap?:VoidCallback,
        onLongPress?:VoidCallback,
        onLongPressUp?:VoidCallback,
        onVerticalDragDown?:any,
        onVerticalDragStart?:any,
        onVerticalDragUpdate?:any,
        onVerticalDragEnd?:any,
        onVerticalDragCancel?:VoidCallback,
        onHorizontalDragDown?:any,
        onHorizontalDragStart?:any,
        onHorizontalDragUpdate?:any,
        onHorizontalDragEnd?:any,
        onHorizontalDragCancel?:VoidCallback,
        onPanDown?:any,
        onPanStart?:any,
        onPanUpdate?:any,
        onPanEnd?:any,
        onPanCancel?:VoidCallback,
        onScaleStart?:any,
        onScaleUpdate?:any,
        onScaleEnd?:any,
        behavior?:HitTestBehavior,
        excludeFromSemantics?:boolean,
      }
     */
    static new(args) {
        return new GestureDetector(args);
    }
}
exports.GestureDetector = GestureDetector;
class GridTileBar extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        backgroundColor?:Color,
        leading?:Widget,
        title?:Widget,
        subtitle?:Widget,
        trailing?:Widget,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.backgroundColor = args.backgroundColor;
            this.leading = args.leading;
            this.title = args.title;
            this.subtitle = args.subtitle;
            this.trailing = args.trailing;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        backgroundColor?:Color,
        leading?:Widget,
        title?:Widget,
        subtitle?:Widget,
        trailing?:Widget,
      }
     */
    static new(args) {
        return new GridTileBar(args);
    }
}
exports.GridTileBar = GridTileBar;
class GridTile extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.header = args.header;
            this.footer = args.footer;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget,
      }
     */
    static new(args) {
        return new GridTile(args);
    }
}
exports.GridTile = GridTile;
class GridPaper extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          divisions?:number,
          interval?:number,
          subdivisions?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.divisions = args.divisions;
            this.subdivisions = args.subdivisions;
            this.interval = args.interval;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          color?:Color,
          divisions?:number,
          interval?:number,
          subdivisions?:number,
        }
     */
    static new(args) {
        return new GridPaper(args);
    }
}
exports.GridPaper = GridPaper;
class InputDecorator extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.decoration = args.decoration;
            this.baseStyle = args.baseStyle;
            this.textAlign = args.textAlign;
            this.textAlignVertical = args.textAlignVertical;
            this.isFocused = args.isFocused;
            this.isEmpty = args.isEmpty;
            this.isHovering = args.isHovering;
            this.expands = args.expands;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new InputDecorator(args);
    }
}
exports.InputDecorator = InputDecorator;
class IndexedSemantics extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          index?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.index = args.index;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          index?:number,
        }
     */
    static new(args) {
        return new IndexedSemantics(args);
    }
}
exports.IndexedSemantics = IndexedSemantics;
class IntrinsicHeight extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
        }
     */
    static new(args) {
        return new IntrinsicHeight(args);
    }
}
exports.IntrinsicHeight = IntrinsicHeight;
class IntrinsicWidth extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          stepWidth?:number,
          stepHeight?:number,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.stepWidth = args.stepWidth;
            this.stepHeight = args.stepHeight;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          stepWidth?:number,
          stepHeight?:number,
          key?:Key
        }
     */
    static new(args) {
        return new IntrinsicWidth(args);
    }
}
exports.IntrinsicWidth = IntrinsicWidth;
class IndexedStack extends Widget {
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          index?:number,
          alignment?:AlignmentDirectional,
          textDirection?:TextDirection,
          sizing?:StackFit,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.textDirection = args.textDirection;
            this.sizing = args.sizing;
            this.index = args.index;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          index?:number,
          alignment?:AlignmentDirectional,
          textDirection?:TextDirection,
          sizing?:StackFit,
          key?:Key,
        }
     */
    static new(args) {
        return new IndexedStack(args);
    }
}
exports.IndexedStack = IndexedStack;
class IgnorePointer extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          ignoring?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.ignoring = args.ignoring;
            this.ignoringSemantics = args.ignoringSemantics;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          ignoring?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(args) {
        return new IgnorePointer(args);
    }
}
exports.IgnorePointer = IgnorePointer;
class IconButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.icon = args.icon;
            this.iconSize = args.iconSize;
            this.padding = args.padding;
            this.alignment = args.alignment;
            this.visualDensity = args.visualDensity;
            this.color = args.color;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.disabledColor = args.disabledColor;
            this.autofocus = args.autofocus;
            this.onPressed = args.onPressed;
            this.tooltip = args.tooltip;
            this.enableFeedback = args.enableFeedback;
            this.visualDensity = args.visualDensity;
            this.constraints = args.constraints;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new IconButton(args);
    }
}
exports.IconButton = IconButton;
class Icon extends Widget {
    /**
     * @param icon icon:IconData
     * @param args args:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    constructor(icon, args) {
        super();
        this.icon = icon;
        if (args != null && args != undefined) {
            this.key = args.key;
            this.size = args.size;
            this.color = args.color;
            this.semanticLabel = args.semanticLabel;
            this.textDirection = args.textDirection;
        }
    }
    /**
     * @param icon icon:IconData
     * @param args args:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    static new(icon, args) {
        return new Icon(icon, args);
    }
}
exports.Icon = Icon;
class ImageIcon extends Widget {
    /**
     * @param image image:ImageProvider
     * @param args args:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    constructor(image, args) {
        super();
        this.image = image;
        if (args != null && args != undefined) {
            this.key = args.key;
            this.size = args.size;
            this.color = args.color;
            this.semanticLabel = args.semanticLabel;
        }
    }
    /**
     * @param image image:ImageProvider
     * @param args args:
        {
          key?:Key,
          size?:number,
          color?:Color,
          semanticLabel?:string,
          textDirection?:TextDirection,
        }
     */
    static new(image, args) {
        return new ImageIcon(image, args);
    }
}
exports.ImageIcon = ImageIcon;
class KeyedSubtree extends Widget {
    /**
     * @param args args:
        {
          child:Widget,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child:Widget,
          key?:Key,
        }
     */
    static new(args) {
        return new KeyedSubtree(args);
    }
}
exports.KeyedSubtree = KeyedSubtree;
class LicensePage extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.applicationIcon = args.applicationIcon;
            this.applicationName = args.applicationName;
            this.applicationLegalese = args.applicationLegalese;
            this.applicationVersion = args.applicationVersion;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:Widget,
        }
     */
    static new(args) {
        return new LicensePage(args);
    }
}
exports.LicensePage = LicensePage;
class LimitedBox extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          maxWidth?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.maxWidth = args.maxWidth;
            this.maxHeight = args.maxHeight;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          maxWidth?:number,
          maxHeight?:number,
          key?:Key,
        }
     */
    static new(args) {
        return new LimitedBox(args);
    }
}
exports.LimitedBox = LimitedBox;
class ListBody extends Widget {
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          reverse?:boolean,
          mainAxis?:Axis,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.mainAxis = args.mainAxis;
            this.reverse = args.reverse;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
        {
          children?:Array<Widget>,
          reverse?:boolean,
          mainAxis?:Axis,
          key?:Key
        }
     */
    static new(args) {
        return new ListBody(args);
    }
}
exports.ListBody = ListBody;
class ListTile extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.title = args.title;
            this.subtitle = args.subtitle;
            this.trailing = args.trailing;
            this.onTap = args.onTap;
            this.onLongPress = args.onLongPress;
            this.isThreeLine = args.isThreeLine;
            this.dense = args.dense;
            this.visualDensity = args.visualDensity;
            this.shape = args.shape;
            this.contentPadding = args.contentPadding;
            this.enabled = args.enabled;
            this.selected = args.selected;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.autofocus = args.autofocus;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new ListTile(args);
    }
}
exports.ListTile = ListTile;
class ListView extends Widget {
    /**
     * @param args args:
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
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.scrollDirection = args.scrollDirection;
            this.reverse = args.reverse;
            this.controller = args.controller;
            this.primary = args.primary;
            this.physics = args.physics;
            this.shrinkWrap = args.shrinkWrap;
            this.padding = args.padding;
            this.itemExtent = args.itemExtent;
            this.addAutomaticKeepAlives = args.addAutomaticKeepAlives;
            this.addRepaintBoundaries = args.addRepaintBoundaries;
            this.addSemanticIndexes = args.addSemanticIndexes;
            this.cacheExtent = args.cacheExtent;
            this.children = args.children;
            this.semanticChildCount = args.semanticChildCount;
            this.dragStartBehavior = args.dragStartBehavior;
        }
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.itemBuilder) {
            this.children = [];
            if (this.itemCount != null && this.itemCount != undefined) {
                for (let i = 0; i < this.itemCount; ++i) {
                    let w = this.itemBuilder(buildContext, i);
                    this.children.push(w);
                }
            }
            delete this.itemBuilder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param args args:
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
          key?:Key
        }
     */
    static new(args) {
        return new ListView(args);
    }
    /**
     * @param args args:
        { itemBuilder?:any,
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
          key?:Key
        }
     */
    static builder(args) {
        let v = new ListView();
        v.constructorName = "builder";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.scrollDirection = args.scrollDirection;
            v.reverse = args.reverse;
            v.controller = args.controller;
            v.primary = args.primary;
            v.physics = args.physics;
            v.shrinkWrap = args.shrinkWrap;
            v.padding = args.padding;
            v.itemExtent = args.itemExtent;
            v.itemBuilder = args.itemBuilder;
            v.itemCount = args.itemCount;
            v.addAutomaticKeepAlives = args.addAutomaticKeepAlives;
            v.addRepaintBoundaries = args.addRepaintBoundaries;
            v.addSemanticIndexes = args.addSemanticIndexes;
            v.cacheExtent = args.cacheExtent;
            v.semanticChildCount = args.semanticChildCount;
            v.dragStartBehavior = args.dragStartBehavior;
        }
        return v;
    }
}
exports.ListView = ListView;
class LayoutBuilder extends Widget {
    /**
     * @param args args:
        {
          builder?:any,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.builder = args.builder;
        }
    }
    /**
     * @param args args:
        {
          builder?:any,
          key?:Key
        }
     */
    static new(args) {
        return new LayoutBuilder(args);
    }
}
exports.LayoutBuilder = LayoutBuilder;
class Material extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.type = args.type;
            this.elevation = args.elevation;
            this.color = args.color;
            this.shadowColor = args.shadowColor;
            this.textStyle = args.textStyle;
            this.borderRadius = args.borderRadius;
            this.shape = args.shape;
            this.borderOnForeground = args.borderOnForeground;
            this.clipBehavior = args.clipBehavior;
            this.animationDuration = args.animationDuration;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Material(args);
    }
}
exports.Material = Material;
class MaterialPageRoute extends Widget {
    /**
     * @param args args:
        {
          builder?:any,
          settings?:any,
          maintainState?:boolean,
          fullscreenDialog?:boolean
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.builder = args.builder;
            this.settings = args.settings;
            this.maintainState = args.maintainState;
            this.fullscreenDialog = args.fullscreenDialog;
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
     * @param args args:
        {
          builder?:any,
          settings?:any,
          maintainState?:boolean,
          fullscreenDialog?:boolean
        }
     */
    static new(args) {
        return new MaterialPageRoute(args);
    }
}
exports.MaterialPageRoute = MaterialPageRoute;
class NotificationListener extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          key?:Key
        }
     */
    static new(args) {
        return new NotificationListener(args);
    }
}
exports.NotificationListener = NotificationListener;
class NestedScrollView extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.controller = args.controller;
            this.scrollDirection = args.scrollDirection;
            this.reverse = args.reverse;
            this.physics = args.physics;
            this.headerSliverBuilder = args.headerSliverBuilder;
            this.body = args.body;
            this.dragStartBehavior = args.dragStartBehavior;
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
     * @param args args:
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
    static new(args) {
        return new NestedScrollView(args);
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
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.opacity = args.opacity;
            this.alwaysIncludeSemantics = args.alwaysIncludeSemantics;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    static new(args) {
        return new Opacity(args);
    }
}
exports.Opacity = Opacity;
class Offstage extends Widget {
    /**
     * @param args args:
        {
          child?:.Widget,
          offstage?:boolean,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.offstage = args.offstage;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:.Widget,
          offstage?:boolean,
          key?:Key,
        }
     */
    static new(args) {
        return new Offstage(args);
    }
}
exports.Offstage = Offstage;
class OverflowBox extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.minWidth = args.minWidth;
            this.maxWidth = args.maxWidth;
            this.minHeight = args.minHeight;
            this.maxHeight = args.maxHeight;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new OverflowBox(args);
    }
}
exports.OverflowBox = OverflowBox;
class OutlineButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
            this.textTheme = args.textTheme;
            this.textColor = args.textColor;
            this.disabledTextColor = args.disabledTextColor;
            this.color = args.color;
            this.disabledColor = args.disabledColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.colorBrightness = args.colorBrightness;
            this.highlightElevation = args.highlightElevation;
            this.padding = args.padding;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.onLongPress = args.onLongPress;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.visualDensity = args.visualDensity;
            this.autofocus = args.autofocus;
            this.child = args.child;
            this.borderSide = args.borderSide;
            this.disabledBorderColor = args.disabledBorderColor;
            this.highlightedBorderColor = args.highlightedBorderColor;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new OutlineButton(args);
    }
    /**
     * @param args args:
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
    static icon(args) {
        let v = new OutlineButton();
        v.constructorName = "icon";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.onPressed = args.onPressed;
            v.textTheme = args.textTheme;
            v.textColor = args.textColor;
            v.disabledTextColor = args.disabledTextColor;
            v.color = args.color;
            v.disabledColor = args.disabledColor;
            v.highlightColor = args.highlightColor;
            v.splashColor = args.splashColor;
            v.colorBrightness = args.colorBrightness;
            v.padding = args.padding;
            v.shape = args.shape;
            v.clipBehavior = args.clipBehavior;
            v.materialTapTargetSize = args.materialTapTargetSize;
            v.onLongPress = args.onLongPress;
            v.focusColor = args.focusColor;
            v.hoverColor = args.hoverColor;
            v.autofocus = args.autofocus;
            v.borderSide = args.borderSide;
            v.disabledBorderColor = args.disabledBorderColor;
            v.highlightedBorderColor = args.highlightedBorderColor;
            v.icon = args.icon;
            v.label = args.label;
        }
        return v;
    }
}
exports.OutlineButton = OutlineButton;
class Padding extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          padding?:EdgeInsets,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.padding = args.padding;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          padding?:EdgeInsets,
          key?:Key
        }
     */
    static new(args) {
        return new Padding(args);
    }
}
exports.Padding = Padding;
class PhysicalModel extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.color = args.color;
            this.shape = args.shape;
            this.shadowColor = args.shadowColor;
            this.clipBehavior = args.clipBehavior;
            this.elevation = args.elevation;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new PhysicalModel(args);
    }
}
exports.PhysicalModel = PhysicalModel;
class Positioned extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.left = args.left;
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.width = args.width;
            this.height = args.height;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Positioned(args);
    }
    /**
     * @param args args:
        {
          child:Widget,
          rect?:Rect,
          key?:Key
        }
     */
    static fromRect(args) {
        let v = new Positioned();
        v.constructorName = "fromRect";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.rect = args.rect;
            v.child = args.child;
        }
        return v;
    }
    /**
     * @param args args:
        {
          key?:Key
          child:Widget,
          left?:number,
          top?:number,
          right?:number,
          bottom?:number,
        }
     */
    static fill(args) {
        var v = new Positioned();
        v.constructorName = "fill";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.left = args.left;
            v.top = args.top;
            v.right = args.right;
            v.bottom = args.bottom;
            v.child = args.child;
        }
        return v;
    }
    /**
     * @param args args:
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
    static directional(args) {
        var v = new Positioned();
        v.constructorName = "directional";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.textDirection = args.textDirection;
            v.start = args.start;
            v.top = args.top;
            v.end = args.end;
            v.bottom = args.bottom;
            v.width = args.width;
            v.height = args.height;
            v.child = args.child;
        }
        return v;
    }
}
exports.Positioned = Positioned;
class PositionedDirectional extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.start = args.start;
            this.top = args.top;
            this.end = args.end;
            this.bottom = args.bottom;
            this.width = args.width;
            this.height = args.height;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new PositionedDirectional(args);
    }
}
exports.PositionedDirectional = PositionedDirectional;
class PreferredSize extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          preferredSize?:Size,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.preferredSize = args.preferredSize;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          preferredSize?:Size,
          key?:Key
        }
     */
    static new(args) {
        return new PreferredSize(args);
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
     * @param args args:
        {
          color?:Color,
          strokeWidth?:number,
          fallbackWidth?:number,
          fallbackHeight?:number,
          key?:Key,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.strokeWidth = args.strokeWidth;
            this.fallbackWidth = args.fallbackWidth;
            this.fallbackHeight = args.fallbackHeight;
        }
    }
    /**
     * @param args args:
        {
          color?:Color,
          strokeWidth?:number,
          fallbackWidth?:number,
          fallbackHeight?:number,
          key?:Key,
        }
     */
    static new(args) {
        return new Placeholder(args);
    }
}
exports.Placeholder = Placeholder;
class PopupMenuButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.itemBuilder = args.itemBuilder;
            this.initialValue = args.initialValue;
            this.onSelected = args.onSelected;
            this.onCanceled = args.onCanceled;
            this.tooltip = args.tooltip;
            this.elevation = args.elevation;
            this.padding = args.padding;
            this.child = args.child;
            this.icon = args.icon;
            this.offset = args.offset;
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
     * @param args args:
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
    static new(args) {
        return new PopupMenuButton(args);
    }
}
exports.PopupMenuButton = PopupMenuButton;
class PopupMenuItem extends Widget {
    /**
     * @param args args:
        {
          child?:Widget,
          value?:any,
          enabled?:boolean,
          height?:number,
          key?:Key
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.enabled = args.enabled;
            this.height = args.height;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          child?:Widget,
          value?:any,
          enabled?:boolean,
          height?:number,
          key?:Key
        }
     */
    static new(args) {
        return new PopupMenuItem(args);
    }
}
exports.PopupMenuItem = PopupMenuItem;
class Row extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.mainAxisAlignment = args.mainAxisAlignment;
            this.mainAxisSize = args.mainAxisSize;
            this.crossAxisAlignment = args.crossAxisAlignment;
            this.textDirection = args.textDirection;
            this.verticalDirection = args.verticalDirection;
            this.textBaseline = args.textBaseline;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Row(args);
    }
}
exports.Row = Row;
class RepaintBoundary extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
        }
     */
    static new(args) {
        return new RepaintBoundary(args);
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
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.image = args.image;
            this.debugImageLabel = args.debugImageLabel;
            this.width = args.width;
            this.height = args.height;
            this.scale = args.scale;
            this.color = args.color;
            this.colorBlendMode = args.colorBlendMode;
            this.fit = args.fit;
            this.alignment = args.alignment;
            this.repeat = args.repeat;
            this.centerSlice = args.centerSlice;
            this.matchTextDirection = args.matchTextDirection;
            this.invertColors = args.invertColors;
            this.filterQuality = args.filterQuality;
            this.isAntiAlias = args.isAntiAlias;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new RawImage(args);
    }
}
exports.RawImage = RawImage;
class RotatedBox extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          quarterTurns:number,
          child?:Widget,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.quarterTurns = args.quarterTurns;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          quarterTurns:number,
          child?:Widget,
        }
     */
    static new(args) {
        return new RotatedBox(args);
    }
}
exports.RotatedBox = RotatedBox;
class RaisedButton extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          onPressed?:VoidCallback,
          onHighlightChanged?:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
            this.onHighlightChanged = args.onHighlightChanged;
            this.textColor = args.textColor;
            this.disabledTextColor = args.disabledTextColor;
            this.color = args.color;
            this.disabledColor = args.disabledColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.colorBrightness = args.colorBrightness;
            this.elevation = args.elevation;
            this.highlightElevation = args.highlightElevation;
            this.disabledElevation = args.disabledElevation;
            this.padding = args.padding;
            this.shape = args.shape;
            this.clipBehavior = args.clipBehavior;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.animationDuration = args.animationDuration;
            this.child = args.child;
            this.onLongPress = args.onLongPress;
            this.focusColor = args.focusColor;
            this.hoverColor = args.hoverColor;
            this.focusElevation = args.focusElevation;
            this.hoverElevation = args.hoverElevation;
            this.visualDensity = args.visualDensity;
            this.autofocus = args.autofocus;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          onPressed?:VoidCallback,
          onHighlightChanged?:VoidValueChangedBoolean,
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
    static new(args) {
        return new RaisedButton(args);
    }
    /**
     * @param args args:
      {
        key?:Key,
        icon?:Widget,
        label?:Widget,
        onPressed?:VoidCallback,
        onHighlightChanged?:VoidValueChangedBoolean,
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
    static icon(args) {
        let v = new RaisedButton();
        v.constructorName = "icon";
        if (args != null && args != undefined) {
            {
                v.key = args.key;
                v.onPressed = args.onPressed;
                v.padding = args.padding;
                v.onHighlightChanged = args.onHighlightChanged;
                v.textColor = args.textColor;
                v.disabledTextColor = args.disabledTextColor;
                v.color = args.color;
                v.disabledColor = args.disabledColor;
                v.highlightColor = args.highlightColor;
                v.splashColor = args.splashColor;
                v.colorBrightness = args.colorBrightness;
                v.elevation = args.elevation;
                v.highlightElevation = args.highlightElevation;
                v.disabledElevation = args.disabledElevation;
                v.shape = args.shape;
                v.clipBehavior = args.clipBehavior;
                v.materialTapTargetSize = args.materialTapTargetSize;
                v.animationDuration = args.animationDuration;
                v.icon = args.icon;
                v.label = args.label;
                v.onLongPress = args.onLongPress;
                v.focusColor = args.focusColor;
                v.hoverColor = args.hoverColor;
                v.autofocus = args.autofocus;
            }
            return v;
        }
    }
}
exports.RaisedButton = RaisedButton;
class Radio extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        value?:any,
        groupValue?:any,
        onChanged?:any,
        activeColor?:Color,
        materialTapTargetSize?:MaterialTapTargetSize
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.groupValue = args.groupValue;
            this.onChanged = args.onChanged;
            this.activeColor = args.activeColor;
            this.materialTapTargetSize = args.materialTapTargetSize;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        value?:any,
        groupValue?:any,
        onChanged?:any,
        activeColor?:Color,
        materialTapTargetSize?:MaterialTapTargetSize
      }
     */
    static new(args) {
        return new Radio(args);
    }
}
exports.Radio = Radio;
class RawMaterialButton extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        onPressed:VoidCallback,
        onLongPress?:VoidCallback,
        onHighlightChanged?:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.onPressed = args.onPressed;
            this.onLongPress = args.onLongPress;
            this.onHighlightChanged = args.onHighlightChanged;
            this.focusColor = args.focusColor;
            this.focusElevation = args.focusElevation;
            this.hoverColor = args.hoverColor;
            this.hoverElevation = args.hoverElevation;
            this.textStyle = args.textStyle;
            this.fillColor = args.fillColor;
            this.highlightColor = args.highlightColor;
            this.splashColor = args.splashColor;
            this.elevation = args.elevation;
            this.highlightElevation = args.highlightElevation;
            this.disabledElevation = args.disabledElevation;
            this.padding = args.padding;
            this.visualDensity = args.visualDensity;
            this.constraints = args.constraints;
            this.shape = args.shape;
            this.animationDuration = args.animationDuration;
            this.clipBehavior = args.clipBehavior;
            this.autofocus = args.autofocus;
            this.enableFeedback = args.enableFeedback;
            this.materialTapTargetSize = args.materialTapTargetSize;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        onPressed:VoidCallback,
        onLongPress?:VoidCallback,
        onHighlightChanged?:VoidValueChangedBoolean,
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
    static new(args) {
        return new RawMaterialButton(args);
    }
}
exports.RawMaterialButton = RawMaterialButton;
class RichText extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.text = args.text;
            this.textAlign = args.textAlign;
            this.textDirection = args.textDirection;
            this.softWrap = args.softWrap;
            this.overflow = args.overflow;
            this.textScaleFactor = args.textScaleFactor;
            this.maxLines = args.maxLines;
            this.textWidthBasis = args.textWidthBasis;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new RichText(args);
    }
}
exports.RichText = RichText;
class Spacer extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        flex?:number
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.flex = args.flex;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        flex?:number
      }
     */
    static new(args) {
        return new Spacer(args);
    }
}
exports.Spacer = Spacer;
class Semantics extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.container = args.container;
            this.excludeSemantics = args.excludeSemantics;
            this.explicitChildNodes = args.explicitChildNodes;
            this.enabled = args.enabled;
            this.checked = args.checked;
            this.selected = args.selected;
            this.toggled = args.toggled;
            this.button = args.button;
            this.link = args.link;
            this.header = args.header;
            this.textField = args.textField;
            this.readOnly = args.readOnly;
            this.focusable = args.focusable;
            this.focused = args.focused;
            this.inMutuallyExclusiveGroup = args.inMutuallyExclusiveGroup;
            this.obscured = args.obscured;
            this.multiline = args.multiline;
            this.scopesRoute = args.scopesRoute;
            this.namesRoute = args.namesRoute;
            this.hidden = args.hidden;
            this.image = args.image;
            this.liveRegion = args.liveRegion;
            this.maxValueLength = args.maxValueLength;
            this.currentValueLength = args.currentValueLength;
            this.label = args.label;
            this.value = args.value;
            this.increasedValue = args.increasedValue;
            this.decreasedValue = args.decreasedValue;
            this.hint = args.hint;
            this.onTapHint = args.onTapHint;
            this.onLongPressHint = args.onLongPressHint;
            this.textDirection = args.textDirection;
            this.onTap = args.onTap;
            this.onLongPress = args.onLongPress;
            this.onScrollLeft = args.onScrollLeft;
            this.onScrollRight = args.onScrollRight;
            this.onScrollDown = args.onScrollDown;
            this.onScrollUp = args.onScrollUp;
            this.onIncrease = args.onIncrease;
            this.onDecrease = args.onDecrease;
            this.onCopy = args.onCopy;
            this.onCut = args.onCut;
            this.onPaste = args.onPaste;
            this.onDismiss = args.onDismiss;
            this.onDidGainAccessibilityFocus = args.onDidGainAccessibilityFocus;
            this.onDidLoseAccessibilityFocus = args.onDidLoseAccessibilityFocus;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Semantics(args);
    }
}
exports.Semantics = Semantics;
class SwitchListTile extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.activeColor = args.activeColor;
            this.activeTrackColor = args.activeTrackColor;
            this.inactiveThumbColor = args.inactiveThumbColor;
            this.inactiveTrackColor = args.inactiveTrackColor;
            this.title = args.title;
            this.subtitle = args.subtitle;
            this.isThreeLine = args.isThreeLine;
            this.dense = args.dense;
            this.contentPadding = args.contentPadding;
            this.secondary = args.secondary;
            this.selected = args.selected;
            this.autofocus = args.autofocus;
            this.controlAffinity = args.controlAffinity;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
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
    static new(args) {
        return new SwitchListTile(args);
    }
}
exports.SwitchListTile = SwitchListTile;
class Slider extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        value?:number,
        onChanged?:VoidValueChangedNumber,
        onChangeStart?:VoidValueChangedNumber,
        onChangeEnd?:VoidValueChangedNumber,
        min?:number,
        max?:number,
        divisions?:number,
        label?:string,
        activeColor?:Color,
        inactiveColor?:Color,
        semanticFormatterCallback?:VoidValueChangedNumber,
        autofocus?:boolean,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.onChangeStart = args.onChangeStart;
            this.onChangeEnd = args.onChangeEnd;
            this.min = args.min;
            this.max = args.max;
            this.divisions = args.divisions;
            this.label = args.label;
            this.activeColor = args.activeColor;
            this.inactiveColor = args.inactiveColor;
            this.semanticFormatterCallback = args.semanticFormatterCallback;
            this.autofocus = args.autofocus;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        value?:number,
        onChanged?:VoidValueChangedNumber,
        onChangeStart?:VoidValueChangedNumber,
        onChangeEnd?:VoidValueChangedNumber,
        min?:number,
        max?:number,
        divisions?:number,
        label?:string,
        activeColor?:Color,
        inactiveColor?:Color,
        semanticFormatterCallback?:VoidValueChangedNumber,
        autofocus?:boolean,
      }
     */
    static new(args) {
        return new Slider(args);
    }
}
exports.Slider = Slider;
class SizedBox extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        width?:number,
        height?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.width = args.width;
            this.height = args.height;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        width?:number,
        height?:number,
      }
     */
    static new(args) {
        return new SizedBox(args);
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
      }
     */
    static expand(args) {
        var v = new SizedBox();
        v.constructorName = "expand";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.child = args.child;
        }
        return v;
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        size?:Size,
      }
     */
    static fromSize(args) {
        var v = new SizedBox();
        v.constructorName = "fromSize";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.child = args.child;
            v.size = args.size;
        }
        return v;
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
      }
     */
    static shrink(args) {
        var v = new SizedBox();
        v.constructorName = "shrink";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.child = args.child;
        }
        return v;
    }
}
exports.SizedBox = SizedBox;
class SizedOverflowBox extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        size:Size,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.size = args.size;
            this.alignment = args.alignment;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        size:Size,
      }
     */
    static new(args) {
        return new SizedOverflowBox(args);
    }
}
exports.SizedOverflowBox = SizedOverflowBox;
class Stack extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.alignment = args.alignment;
            this.textDirection = args.textDirection;
            this.fit = args.fit;
            this.overflow = args.overflow;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Stack(args);
    }
}
exports.Stack = Stack;
class SliverAppBar extends Widget {
    /**
     * @param args args:
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
        iconTheme?:IconThemeData,
        actionsIconTheme?:IconThemeData,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.automaticallyImplyLeading = args.automaticallyImplyLeading;
            this.title = args.title;
            this.actions = args.actions;
            this.flexibleSpace = args.flexibleSpace;
            this.bottom = args.bottom;
            this.elevation = args.elevation;
            this.shadowColor = args.shadowColor;
            this.forceElevated = args.forceElevated;
            this.backgroundColor = args.backgroundColor;
            this.brightness = args.brightness;
            this.iconTheme = args.iconTheme;
            this.actionsIconTheme = args.actionsIconTheme;
            this.primary = args.primary;
            this.centerTitle = args.centerTitle;
            this.titleSpacing = args.titleSpacing;
            this.excludeHeaderSemantics = args.excludeHeaderSemantics;
            this.collapsedHeight = args.collapsedHeight;
            this.expandedHeight = args.expandedHeight;
            this.floating = args.floating;
            this.pinned = args.pinned;
            this.snap = args.snap;
            this.stretch = args.stretch;
            this.stretchTriggerOffset = args.stretchTriggerOffset;
            this.onStretchTrigger = args.onStretchTrigger;
            this.shape = args.shape;
            this.toolbarHeight = args.toolbarHeight;
        }
    }
    /**
     * @param args args:
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
        iconTheme?:IconThemeData,
        actionsIconTheme?:IconThemeData,
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
    static new(args) {
        return new SliverAppBar(args);
    }
}
exports.SliverAppBar = SliverAppBar;
class SliverPadding extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        sliver?:Widget,
        padding:EdgeInsets,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.padding = args.padding;
            this.sliver = args.sliver;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        sliver?:Widget,
        padding:EdgeInsets,
      }
     */
    static new(args) {
        return new SliverPadding(args);
    }
}
exports.SliverPadding = SliverPadding;
class SliverGrid extends Widget {
    /**
     * @param args args:
      {
        delegate?:any,
        gridDelegate?:any,
        key?:Key,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
            this.gridDelegate = args.gridDelegate;
        }
    }
    /**
     * @param args args:
      {
        delegate?:any,
        gridDelegate?:any,
        key?:Key,
      }
     */
    static new(args) {
        return new SliverGrid(args);
    }
}
exports.SliverGrid = SliverGrid;
class SliverGridDelegateWithMaxCrossAxisExtent extends Widget {
    /**
     * @param args args:
      {
        maxCrossAxisExtent?:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.maxCrossAxisExtent = args.maxCrossAxisExtent;
            this.mainAxisSpacing = args.mainAxisSpacing;
            this.crossAxisSpacing = args.crossAxisSpacing;
            this.childAspectRatio = args.childAspectRatio;
        }
    }
    /**
     * @param args args:
      {
        maxCrossAxisExtent?:number,
        mainAxisSpacing?:number,
        crossAxisSpacing?:number,
        childAspectRatio?:number,
      }
     */
    static new(args) {
        return new SliverGridDelegateWithMaxCrossAxisExtent(args);
    }
}
exports.SliverGridDelegateWithMaxCrossAxisExtent = SliverGridDelegateWithMaxCrossAxisExtent;
class SliverChildListDelegate extends DartClass {
    /**
     * @param args args:
      {
        children?:Array<Widget>,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.children = args.children;
            this.addAutomaticKeepAlives = args.addAutomaticKeepAlives;
            this.addRepaintBoundaries = args.addRepaintBoundaries;
            this.addSemanticIndexes = args.addSemanticIndexes;
            this.semanticIndexOffset = args.semanticIndexOffset;
        }
    }
    /**
     * @param args args:
      {
        children?:Array<Widget>,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
      }
     */
    static new(args) {
        return new SliverChildListDelegate(args);
    }
}
exports.SliverChildListDelegate = SliverChildListDelegate;
class SliverChildBuilderDelegate extends Widget {
    /**
     * @param args args:
      {
        builder:any,
        childCount?:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
        children?:Array<Widget>,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.builder = args.builder;
            this.childCount = args.childCount;
            this.addAutomaticKeepAlives = args.addAutomaticKeepAlives;
            this.addRepaintBoundaries = args.addRepaintBoundaries;
            this.addSemanticIndexes = args.addSemanticIndexes;
            this.semanticIndexOffset = args.semanticIndexOffset;
        }
        // 本地创建的，供flutter使用
        this.children = [];
    }
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            if (this.childCount != null && this.childCount != undefined) {
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
     * @param args args:
      {
        builder:any,
        childCount?:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
        children?:Array<Widget>,
      }
     */
    static new(args) {
        return new SliverChildBuilderDelegate(args);
    }
}
exports.SliverChildBuilderDelegate = SliverChildBuilderDelegate;
class SliverList extends Widget {
    /**
     * @param args args:
      {
        delegate?:any,
        key?:Key
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
        }
    }
    /**
     * @param args args:
      {
        delegate?:any,
        key?:Key
      }
     */
    static new(args) {
        return new SliverList(args);
    }
}
exports.SliverList = SliverList;
class SliverOverlapInjector extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.handle = args.handle;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    static new(args) {
        return new SliverOverlapInjector(args);
    }
}
exports.SliverOverlapInjector = SliverOverlapInjector;
class SliverFixedExtentList extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        delegate?:any,
        itemExtent?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.delegate = args.delegate;
            this.itemExtent = args.itemExtent;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        delegate?:any,
        itemExtent?:number,
      }
     */
    static new(args) {
        return new SliverFixedExtentList(args);
    }
}
exports.SliverFixedExtentList = SliverFixedExtentList;
class SliverOverlapAbsorber extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.handle = args.handle;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        handle?:any,
      }
     */
    static new(args) {
        return new SliverOverlapAbsorber(args);
    }
}
exports.SliverOverlapAbsorber = SliverOverlapAbsorber;
class SingleChildScrollView extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.scrollDirection = args.scrollDirection;
            this.reverse = args.reverse;
            this.padding = args.padding;
            this.primary = args.primary;
            this.physics = args.physics;
            this.controller = args.controller;
            this.child = args.child;
            this.dragStartBehavior = args.dragStartBehavior;
            this.clipBehavior = args.clipBehavior;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new SingleChildScrollView(args);
    }
}
exports.SingleChildScrollView = SingleChildScrollView;
class SliverToBoxAdapter extends Widget {
    /**
     * @param args args:
      {
        child?:Widget,
        key?:Key
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        child?:Widget,
        key?:Key
      }
     */
    static new(args) {
        return new SliverToBoxAdapter(args);
    }
}
exports.SliverToBoxAdapter = SliverToBoxAdapter;
class Scaffold extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        appBar?:Widget,
        body?:Widget,
        floatingActionButton?:Widget,
        floatingActionButtonLocation?:FloatingActionButtonLocation,
        persistentFooterButtons?:Array<Widget>,
        drawer?:Widget,
        endDrawer?:Widget,
        bottomNavigationBar?:Widget,
        bottomSheet?:Widget,
        backgroundColor?:Color,
        resizeToAvoidBottomPadding?:boolean,
        primary?:boolean,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.appBar = args.appBar;
            this.body = args.body;
            this.floatingActionButton = args.floatingActionButton;
            this.floatingActionButtonLocation = args.floatingActionButtonLocation;
            this.persistentFooterButtons = args.persistentFooterButtons;
            this.drawer = args.drawer;
            this.endDrawer = args.endDrawer;
            this.bottomNavigationBar = args.bottomNavigationBar;
            this.bottomSheet = args.bottomSheet;
            this.backgroundColor = args.backgroundColor;
            this.resizeToAvoidBottomPadding = args.resizeToAvoidBottomPadding;
            this.primary = args.primary;
        }
    }
    //FIXME,github mergegithub merge
    static of(context) {
        return {
            showSnackBar: function (snackBar) {
                //准备调用Native方法执行真正的 showSnackBar动作
                //1.把这里的context和snackBar数据传递到native层 ✔️
                //2.通过context找到Native里的 Scaffold.of(context) ？
                //3.解析snackBar为真snackBar对象 ✔️
                //4.执行调用
                //console.log("showSnackBar in js call native-->")
                /*let argument = new FlutterCallArgs({
                  widgetID: context.widgetID,
                  className: 'Scaffold',
                  funcName: 'of',
                  args: {
                    snackBar: snackBar,
                  },
                });*/
                //invokeCommonFlutterFunction(argument);
            },
            openDrawer: function () {
                //console.log("showSnackBar in js call native-->")
            },
        };
    }
    /**
     * @param args args:
      {
        key?:Key,
        appBar?:Widget,
        body?:Widget,
        floatingActionButton?:Widget,
        floatingActionButtonLocation?:FloatingActionButtonLocation,
        persistentFooterButtons?:Array<Widget>,
        drawer?:Widget,
        endDrawer?:Widget,
        bottomNavigationBar?:Widget,
        bottomSheet?:Widget,
        backgroundColor?:Color,
        resizeToAvoidBottomPadding?:boolean,
        primary?:boolean,
      }
     */
    static new(args) {
        return new Scaffold(args);
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
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.left = args.left;
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.minimum = args.minimum;
            this.maintainBottomViewPadding = args.maintainBottomViewPadding;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new SafeArea(args);
    }
}
exports.SafeArea = SafeArea;
class SliverSafeArea extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.left = args.left;
            this.top = args.top;
            this.right = args.right;
            this.bottom = args.bottom;
            this.minimum = args.minimum;
            this.sliver = args.sliver;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new SliverSafeArea(args);
    }
}
exports.SliverSafeArea = SliverSafeArea;
class Scrollbar extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child:Widget,
        controller?:ScrollController,
        isAlwaysShown?:boolean,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.controller = args.controller;
            this.isAlwaysShown = args.isAlwaysShown;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child:Widget,
        controller?:ScrollController,
        isAlwaysShown?:boolean,
      }
     */
    static new(args) {
        return new Scrollbar(args);
    }
}
exports.Scrollbar = Scrollbar;
class SnackBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.content = args.content;
            this.backgroundColor = args.backgroundColor;
            this.elevation = args.elevation;
            this.shape = args.shape;
            this.behavior = args.behavior;
            this.action = args.action;
            this.duration = args.duration;
            this.animation = args.animation;
            this.onVisible = args.onVisible;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new SnackBar(args);
    }
}
exports.SnackBar = SnackBar;
class SnackBarAction extends Widget {
    /**
     * @param args args:
      {
        key?:Widget,
        lable?:string,
        onPressed?:VoidCallback,
        disabledTextColor?:Color,
        textColor?:Color,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.lable = args.lable;
            this.textColor = args.textColor;
            this.disabledTextColor = args.disabledTextColor;
            this.onPressed = args.onPressed;
        }
    }
    /**
     * @param args args:
      {
        key?:Widget,
        lable?:string,
        onPressed?:VoidCallback,
        disabledTextColor?:Color,
        textColor?:Color,
      }
     */
    static new(args) {
        return new SnackBarAction(args);
    }
}
exports.SnackBarAction = SnackBarAction;
class SliverVisibility extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.sliver = args.sliver;
            this.replacementSliver = args.replacementSliver;
            this.visible = args.visible;
            this.maintainAnimation = args.maintainAnimation;
            this.maintainState = args.maintainState;
            this.maintainSize = args.maintainSize;
            this.maintainSemantics = args.maintainSemantics;
            this.maintainInteractivity = args.maintainInteractivity;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new SliverVisibility(args);
    }
}
exports.SliverVisibility = SliverVisibility;
class TableRow extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<Widget>,
        decoration?:BoxDecoration,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.decoration = args.decoration;
            this.children = args.children;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<Widget>,
        decoration?:BoxDecoration,
      }
     */
    static new(args) {
        return new TableRow(args);
    }
}
exports.TableRow = TableRow;
class TableCell extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        verticalAlignment?:TableCellVerticalAlignment,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.verticalAlignment = args.verticalAlignment;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        verticalAlignment?:TableCellVerticalAlignment,
      }
     */
    static new(args) {
        return new TableCell(args);
    }
}
exports.TableCell = TableCell;
class Transform extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        origin?:Offset,
        transform:Matrix4,
        transformHitTests?:boolean,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.transform = args.transform;
            this.origin = args.origin;
            this.alignment = args.alignment;
            this.transformHitTests = args.transformHitTests;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        alignment?:Alignment,
        origin?:Offset,
        transform:Matrix4,
        transformHitTests?:boolean,
      }
     */
    static new(args) {
        return new Transform(args);
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        angle:number,
        alignment?:Alignment,
        origin?:Offset,
        transformHitTests?:boolean,
      }
     */
    static rotate(args) {
        var v = new Transform();
        v.constructorName = "rotate";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.angle = args.angle;
            v.origin = args.origin;
            v.alignment = args.alignment;
            v.transformHitTests = args.transformHitTests;
            v.child = args.child;
        }
        return v;
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        offset:Offset,
        transformHitTests?:boolean,
      }
     */
    static translate(args) {
        var v = new Transform();
        v.constructorName = "translate";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.offset = args.offset;
            v.transformHitTests = args.transformHitTests;
            v.child = args.child;
        }
        return v;
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        scale:number,
        alignment?:Alignment,
        origin?:Offset,
        transformHitTests?:boolean,
      }
     */
    static scale(args) {
        var v = new Transform();
        v.constructorName = "scale";
        if (args != null && args != undefined) {
            v.key = args.key;
            v.scale = args.scale;
            v.origin = args.origin;
            v.alignment = args.alignment;
            v.transformHitTests = args.transformHitTests;
            v.child = args.child;
        }
        return v;
    }
}
exports.Transform = Transform;
class Tooltip extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.message = args.message;
            this.height = args.height;
            this.padding = args.padding;
            this.margin = args.margin;
            this.verticalOffset = args.verticalOffset;
            this.preferBelow = args.preferBelow;
            this.excludeFromSemantics = args.excludeFromSemantics;
            this.decoration = args.decoration;
            this.textStyle = args.textStyle;
            this.waitDuration = args.waitDuration;
            this.showDuration = args.showDuration;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Tooltip(args);
    }
}
exports.Tooltip = Tooltip;
class Table extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.children = args.children;
            this.columnWidths = args.columnWidths;
            this.defaultColumnWidth = args.defaultColumnWidth;
            this.textDirection = args.textDirection;
            this.border = args.border;
            this.defaultVerticalAlignment = args.defaultVerticalAlignment;
            this.textBaseline = args.textBaseline;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Table(args);
    }
}
exports.Table = Table;
class TabBar extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        tabs?:Array<Widget>,
        onTap?:VoidValueChangedNumber,
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.tabs = args.tabs;
            this.controller = args.controller;
            this.isScrollable = args.isScrollable;
            this.indicatorColor = args.indicatorColor;
            this.indicatorWeight = args.indicatorWeight;
            this.indicatorPadding = args.indicatorPadding;
            this.indicator = args.indicator;
            this.indicatorSize = args.indicatorSize;
            this.labelColor = args.labelColor;
            this.labelStyle = args.labelStyle;
            this.labelPadding = args.labelPadding;
            this.unselectedLabelColor = args.unselectedLabelColor;
            this.unselectedLabelStyle = args.unselectedLabelStyle;
            this.dragStartBehavior = args.dragStartBehavior;
            this.onTap = args.onTap;
            this.physics = args.physics;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        tabs?:Array<Widget>,
        onTap?:VoidValueChangedNumber,
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
    static new(args) {
        return new TabBar(args);
    }
}
exports.TabBar = TabBar;
class Tab extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        text?:string,
        icon?:Widget,
        iconMargin?:EdgeInsets,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.text = args.text;
            this.icon = args.icon;
            this.child = args.child;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        text?:string,
        icon?:Widget,
        iconMargin?:EdgeInsets,
      }
     */
    static new(args) {
        return new Tab(args);
    }
}
exports.Tab = Tab;
class TabBarView extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<Widget>,
        controller?:TabController,
        physics?:ScrollPhysics,
        dragStartBehavior?:DragStartBehavior,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.children = args.children;
            this.controller = args.controller;
            this.physics = args.physics;
            this.dragStartBehavior = args.dragStartBehavior;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<Widget>,
        controller?:TabController,
        physics?:ScrollPhysics,
        dragStartBehavior?:DragStartBehavior,
      }
     */
    static new(args) {
        return new TabBarView(args);
    }
}
exports.TabBarView = TabBarView;
class TabPageSelectorIndicator extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        backgroundColor?:Color,
        borderColor?:Color,
        size?:number,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.backgroundColor = args.backgroundColor;
            this.borderColor = args.borderColor;
            this.size = args.size;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        backgroundColor?:Color,
        borderColor?:Color,
        size?:number,
      }
     */
    static new(args) {
        return new TabPageSelectorIndicator(args);
    }
}
exports.TabPageSelectorIndicator = TabPageSelectorIndicator;
class TabPageSelector extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        color?:Color,
        selectedColor?:Color,
        indicatorSize?:number,
        controller?:TabController,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.selectedColor = args.selectedColor;
            this.indicatorSize = args.indicatorSize;
            this.controller = args.controller;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        color?:Color,
        selectedColor?:Color,
        indicatorSize?:number,
        controller?:TabController,
      }
     */
    static new(args) {
        return new TabPageSelector(args);
    }
}
exports.TabPageSelector = TabPageSelector;
class Title extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.title = args.title;
            this.color = args.color;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    static new(args) {
        return new Title(args);
    }
}
exports.Title = Title;
class Text extends Widget {
    /**
     * @param args args:
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
    constructor(data, args) {
        super();
        this.data = data;
        if (args != null && args != undefined) {
            this.key = args.key;
            this.style = args.style;
            this.textAlign = args.textAlign;
            this.textDirection = args.textDirection;
            this.softWrap = args.softWrap;
            this.overflow = args.overflow;
            this.textScaleFactor = args.textScaleFactor;
            this.maxLines = args.maxLines;
            this.semanticsLabel = args.semanticsLabel;
            this.textWidthBasis = args.textWidthBasis;
        }
    }
    /**
     * @param args args:
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
    static new(data, args) {
        return new Text(data, args);
    }
    /**
     * @param args args:
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
    static rich(data, args) {
        var v = new Text(data, args);
        v.constructorName = "rich";
        v.data = data;
        return v;
    }
}
exports.Text = Text;
class TextSpan extends Widget {
    /**
     * @param args args:
      {
        children?:Array<Widget>,
        style?:TextStyle,
        text?:string,
        recognizer?:any,
        semanticsLabel?:string,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.children = args.children;
            this.style = args.style;
            this.text = args.text;
            this.recognizer = args.recognizer;
            this.semanticsLabel = args.semanticsLabel;
        }
    }
    /**
     * @param args args:
      {
        children?:Array<Widget>,
        style?:TextStyle,
        text?:string,
        recognizer?:any,
        semanticsLabel?:string,
      }
     */
    static new(args) {
        return new TextSpan(args);
    }
}
exports.TextSpan = TextSpan;
class Texture extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        textureId?:number,
        filterQuality?:FilterQuality,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.textureId = args.textureId;
            this.filterQuality = args.filterQuality;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        textureId?:number,
        filterQuality?:FilterQuality,
      }
     */
    static new(args) {
        return new Texture(args);
    }
}
exports.Texture = Texture;
class TextFormField extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        controller?:TextEditingController,
        initialValue?:string,
        focusNode?:any,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textCapitalization?:TextCapitalization,
        textInputAction?:TextInputAction,
        style?:TextStyle,
        textDirection?:TextDirection,
        textAlign?:TextAlign,
        autofocus?:boolean,
        obscureText?:boolean,
        autocorrect?:boolean,
        autovalidate?:boolean,
        maxLengthEnforced?:boolean,
        maxLines?:number,
        maxLength?:number,
        onEditingComplete?:VoidCallback,
        onFieldSubmitted?:VoidValueChangedString,
        onSaved?:VoidValueChangedString,
        validator?:VoidValueChangedString,
        inputFormatters?:any,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        enableInteractiveSelection?:boolean,
        buildCounter?:any,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.controller = args.controller;
            this.initialValue = args.initialValue;
            this.focusNode = args.focusNode;
            this.decoration = args.decoration;
            this.keyboardType = args.keyboardType;
            this.textCapitalization = args.textCapitalization;
            this.textInputAction = args.textInputAction;
            this.style = args.style;
            this.textDirection = args.textDirection;
            this.textAlign = args.textAlign;
            this.autofocus = args.autofocus;
            this.obscureText = args.obscureText;
            this.autocorrect = args.autocorrect;
            this.autovalidate = args.autovalidate;
            this.maxLengthEnforced = args.maxLengthEnforced;
            this.maxLines = args.maxLines;
            this.maxLength = args.maxLength;
            this.onEditingComplete = args.onEditingComplete;
            this.onFieldSubmitted = args.onFieldSubmitted;
            this.onSaved = args.onSaved;
            this.validator = args.validator;
            this.inputFormatters = args.inputFormatters;
            this.enabled = args.enabled;
            this.cursorWidth = args.cursorWidth;
            this.cursorRadius = args.cursorRadius;
            this.cursorColor = args.cursorColor;
            this.keyboardAppearance = args.keyboardAppearance;
            this.scrollPadding = args.scrollPadding;
            this.enableInteractiveSelection = args.enableInteractiveSelection;
            this.buildCounter = args.buildCounter;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        controller?:TextEditingController,
        initialValue?:string,
        focusNode?:any,
        decoration?:InputDecoration,
        keyboardType?:TextInputType,
        textCapitalization?:TextCapitalization,
        textInputAction?:TextInputAction,
        style?:TextStyle,
        textDirection?:TextDirection,
        textAlign?:TextAlign,
        autofocus?:boolean,
        obscureText?:boolean,
        autocorrect?:boolean,
        autovalidate?:boolean,
        maxLengthEnforced?:boolean,
        maxLines?:number,
        maxLength?:number,
        onEditingComplete?:VoidCallback,
        onFieldSubmitted?:VoidValueChangedString,
        onSaved?:VoidValueChangedString,
        validator?:VoidValueChangedString,
        inputFormatters?:any,
        enabled?:boolean,
        cursorWidth?:number,
        cursorRadius?:Radius,
        cursorColor?:Color,
        keyboardAppearance?:Brightness,
        scrollPadding?:EdgeInsets,
        enableInteractiveSelection?:boolean,
        buildCounter?:any,
      }
     */
    static new(args) {
        return new TextFormField(args);
    }
}
exports.TextFormField = TextFormField;
class UnconstrainedBox extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment;
          textDirection?:TextDirection,
          constrainedAxis?:Axis,
          clipBehavior?:Clip,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.alignment = args.alignment;
            this.textDirection = args.textDirection;
            this.constrainedAxis = args.constrainedAxis;
            this.clipBehavior = args.clipBehavior;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child?:Widget,
          alignment?:Alignment;
          textDirection?:TextDirection,
          constrainedAxis?:Axis,
          clipBehavior?:Clip,
        }
     */
    static new(args) {
        return new UnconstrainedBox(args);
    }
}
exports.UnconstrainedBox = UnconstrainedBox;
class VerticalDivider extends Widget {
    /**
     * @param args args:
      {
        key?:Key,
        width?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
    */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.width = args.width;
            this.thickness = args.thickness;
            this.indent = args.indent;
            this.endIndent = args.endIndent;
            this.color = args.color;
        }
    }
    /**
     * @param args args:
      {
        key?:Key,
        width?:number,
        thickness?:number,
        indent?:number,
        endIndent?:number,
        color?:Color
      }
    */
    static new(args) {
        return new VerticalDivider(args);
    }
}
exports.VerticalDivider = VerticalDivider;
class Visibility extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.replacement = args.replacement;
            this.visible = args.visible;
            this.maintainAnimation = args.maintainAnimation;
            this.maintainState = args.maintainState;
            this.maintainSize = args.maintainSize;
            this.maintainSemantics = args.maintainSemantics;
            this.maintainInteractivity = args.maintainInteractivity;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Visibility(args);
    }
}
exports.Visibility = Visibility;
class Wrap extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.direction = args.direction;
            this.alignment = args.alignment;
            this.spacing = args.spacing;
            this.runAlignment = args.runAlignment;
            this.runSpacing = args.runSpacing;
            this.crossAxisAlignment = args.crossAxisAlignment;
            this.textDirection = args.textDirection;
            this.verticalDirection = args.verticalDirection;
            this.children = args.children;
            this.clipBehavior = args.clipBehavior;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new Wrap(args);
    }
}
exports.Wrap = Wrap;
class WillPopScope extends Widget {
    /**
     * @param args args:
      {
        child:Widget,
        onWillPop:VoidCallback,
  
        key?:Key,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.onWillPop = args.onWillPop;
        }
    }
    /**
     * @param args args:
      {
        child:Widget,
        onWillPop:VoidCallback,
  
        key?:Key,
      }
     */
    static new(args) {
        return new WillPopScope(args);
    }
}
exports.WillPopScope = WillPopScope;
class WidgetSpan extends Widget {
    /**
     * @param args args:
      {
        child:Widget,
  
        alignment?:PlaceholderAlignment,
        baseline?:TextBaseline,
        style?:TextStyle,
      }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.child = args.child;
            this.alignment = args.alignment;
            this.baseline = args.baseline;
            this.style = args.style;
        }
    }
    /**
     * @param args args:
      {
        child:Widget,
  
        alignment?:PlaceholderAlignment,
        baseline?:TextBaseline,
        style?:TextStyle,
      }
     */
    static new(args) {
        return new WidgetSpan(args);
    }
}
exports.WidgetSpan = WidgetSpan;
class CupertinoActivityIndicator extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          animating?:boolean,
          radius?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.animating = args.animating;
            this.radius = args.radius;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          animating?:boolean,
          radius?:number,
        }
     */
    static new(args) {
        return new CupertinoActivityIndicator(args);
    }
}
exports.CupertinoActivityIndicator = CupertinoActivityIndicator;
class CupertinoButton extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.padding = args.padding;
            this.color = args.color;
            this.disabledColor = args.disabledColor;
            this.minSize = args.minSize;
            this.pressedOpacity = args.pressedOpacity;
            this.borderRadius = args.borderRadius;
            this.onPressed = args.onPressed;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CupertinoButton(args);
    }
    /**
     * @param args args:
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
    static filled(args) {
        var v = new CupertinoButton(args);
        v.constructorName = "filled";
        return v;
    }
}
exports.CupertinoButton = CupertinoButton;
class CupertinoNavigationBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.automaticallyImplyLeading = args.automaticallyImplyLeading;
            this.automaticallyImplyMiddle = args.automaticallyImplyMiddle;
            this.previousPageTitle = args.previousPageTitle;
            this.middle = args.middle;
            this.trailing = args.trailing;
            this.border = args.border;
            this.backgroundColor = args.backgroundColor;
            this.brightness = args.brightness;
            this.padding = args.padding;
            this.actionsForegroundColor = args.actionsForegroundColor;
            this.transitionBetweenRoutes = args.transitionBetweenRoutes;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CupertinoNavigationBar(args);
    }
}
exports.CupertinoNavigationBar = CupertinoNavigationBar;
class CupertinoNavigationBarBackButton extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          color?:Color,
          previousPageTitle?:string,
          onPressed?:VoidCallback,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.color = args.color;
            this.previousPageTitle = args.previousPageTitle;
            this.onPressed = args.onPressed;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          color?:Color,
          previousPageTitle?:string,
          onPressed?:VoidCallback,
        }
     */
    static new(args) {
        return new CupertinoNavigationBarBackButton(args);
    }
}
exports.CupertinoNavigationBarBackButton = CupertinoNavigationBarBackButton;
class CupertinoSlider extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          value:number,
          onChanged:VoidValueChangedNumber,
          onChangeStart?:VoidValueChangedNumber,
          onChangeEnd?:VoidValueChangedNumber,
          min?:number,
          max?:number,
          divisions?:number,
          activeColor?:Color,
          thumbColor?:Color,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.onChangeStart = args.onChangeStart;
            this.onChangeEnd = args.onChangeEnd;
            this.min = args.min;
            this.max = args.max;
            this.divisions = args.divisions;
            this.activeColor = args.activeColor;
            this.thumbColor = args.thumbColor;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          value:number,
          onChanged:VoidValueChangedNumber,
          onChangeStart?:VoidValueChangedNumber,
          onChangeEnd?:VoidValueChangedNumber,
          min?:number,
          max?:number,
          divisions?:number,
          activeColor?:Color,
          thumbColor?:Color,
        }
     */
    static new(args) {
        return new CupertinoSlider(args);
    }
}
exports.CupertinoSlider = CupertinoSlider;
class CupertinoSwitch extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
          activeColor?:Color,
          trackColor?:Color,
          dragStartBehavior?:DragStartBehavior,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.value = args.value;
            this.onChanged = args.onChanged;
            this.activeColor = args.activeColor;
            this.trackColor = args.trackColor;
            this.dragStartBehavior = args.dragStartBehavior;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
          activeColor?:Color,
          trackColor?:Color,
          dragStartBehavior?:DragStartBehavior,
        }
     */
    static new(args) {
        return new CupertinoSwitch(args);
    }
}
exports.CupertinoSwitch = CupertinoSwitch;
class CupertinoScrollbar extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          controller?:ScrollController,
          isAlwaysShown?:boolean,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.controller = args.controller;
            this.isAlwaysShown = args.isAlwaysShown;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          controller?:ScrollController,
          isAlwaysShown?:boolean,
        }
     */
    static new(args) {
        return new CupertinoScrollbar(args);
    }
}
exports.CupertinoScrollbar = CupertinoScrollbar;
class CupertinoSliverNavigationBar extends Widget {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.leading = args.leading;
            this.largeTitle = args.largeTitle;
            this.automaticallyImplyLeading = args.automaticallyImplyLeading;
            this.automaticallyImplyTitle = args.automaticallyImplyTitle;
            this.previousPageTitle = args.previousPageTitle;
            this.middle = args.middle;
            this.trailing = args.trailing;
            this.border = args.border;
            this.backgroundColor = args.backgroundColor;
            this.brightness = args.brightness;
            this.padding = args.padding;
            this.actionsForegroundColor = args.actionsForegroundColor;
            this.transitionBetweenRoutes = args.transitionBetweenRoutes;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CupertinoSliverNavigationBar(args);
    }
}
exports.CupertinoSliverNavigationBar = CupertinoSliverNavigationBar;
class CupertinoTabBar extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidValueChangedNumber,
          currentIndex?:number,
          backgroundColor?:Color,
          activeColor?:Color,
          inactiveColor?:Color,
          iconSize?:number,
          border?:Border,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.items = args.items;
            this.onTap = args.onTap;
            this.currentIndex = args.currentIndex;
            this.backgroundColor = args.backgroundColor;
            this.activeColor = args.activeColor;
            this.inactiveColor = args.inactiveColor;
            this.iconSize = args.iconSize;
            this.border = args.border;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          items:Array<BottomNavigationBarItem>,
          onTap?:VoidValueChangedNumber,
          currentIndex?:number,
          backgroundColor?:Color,
          activeColor?:Color,
          inactiveColor?:Color,
          iconSize?:number,
          border?:Border,
        }
     */
    static new(args) {
        return new CupertinoTabBar(args);
    }
}
exports.CupertinoTabBar = CupertinoTabBar;
class CupertinoTabController extends DartClass {
    /**
     * @param args args:
        {
          initialIndex?:number,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.initialIndex = args.initialIndex;
        }
    }
    /**
     * @param args args:
        {
          initialIndex?:number,
        }
     */
    static new(args) {
        return new CupertinoTabController(args);
    }
}
exports.CupertinoTabController = CupertinoTabController;
class CupertinoTheme extends Widget {
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          data:CupertinoThemeData,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.key = args.key;
            this.child = args.child;
            this.data = args.data;
        }
    }
    /**
     * @param args args:
        {
          key?:Key,
          child:Widget,
          data:CupertinoThemeData,
        }
     */
    static new(args) {
        return new CupertinoTheme(args);
    }
}
exports.CupertinoTheme = CupertinoTheme;
class CupertinoTextThemeData extends DartClass {
    /**
     * @param args args:
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
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.primaryColor = args.primaryColor;
            this.textStyle = args.textStyle;
            this.actionTextStyle = args.actionTextStyle;
            this.tabLabelTextStyle = args.tabLabelTextStyle;
            this.navActionTextStyle = args.navActionTextStyle;
            this.navLargeTitleTextStyle = args.navLargeTitleTextStyle;
            this.navTitleTextStyle = args.navTitleTextStyle;
            this.pickerTextStyle = args.pickerTextStyle;
            this.dateTimePickerTextStyle = args.dateTimePickerTextStyle;
        }
    }
    /**
     * @param args args:
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
    static new(args) {
        return new CupertinoTextThemeData(args);
    }
}
exports.CupertinoTextThemeData = CupertinoTextThemeData;
class CupertinoThemeData extends DartClass {
    /**
     * @param args args:
        {
          primaryColor?:Color,
          brightness?:Brightness,
          primaryContrastingColor?:Color,
          textTheme?:CupertinoTextThemeData,
          barBackgroundColor?:Color,
          scaffoldBackgroundColor?:Color,
        }
     */
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.primaryColor = args.primaryColor;
            this.brightness = args.brightness;
            this.primaryContrastingColor = args.primaryContrastingColor;
            this.textTheme = args.textTheme;
            this.barBackgroundColor = args.barBackgroundColor;
            this.scaffoldBackgroundColor = args.scaffoldBackgroundColor;
        }
    }
    /**
     * @param args args:
        {
          primaryColor?:Color,
          brightness?:Brightness,
          primaryContrastingColor?:Color,
          textTheme?:CupertinoTextThemeData,
          barBackgroundColor?:Color,
          scaffoldBackgroundColor?:Color,
        }
     */
    static new(args) {
        return new CupertinoThemeData(args);
    }
}
exports.CupertinoThemeData = CupertinoThemeData;
class LoadingApi extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        var argument = new JSCallArgs({
            mirrorID: this.mirrorID,
            className: "LoadingApi",
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new LoadingApi();
        }
        return this.instance;
    }
    invokeMirrorObjWithCallback(argument) {
        let promiseResult = new Promise(function (resolve) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value) {
                if (value != null) {
                    resolve(value);
                }
                else {
                    resolve(null);
                }
            });
        }.bind(this));
        return promiseResult;
    }
    /**
     * @param args args:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showSuccess(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "showSuccess",
            args: args,
        }));
    }
    /**
     * @param args args:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showError(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "showError",
            args: args,
        }));
    }
    /**
      * @param args args:
       {
         info:string,
         duration?:Duration,
         alignment?:Alignment,
       }
      */
    static showInfo(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "showInfo",
            args: args,
        }));
    }
    /**
     * @param args args:
      {
        info:string,
        duration?:Duration,
        alignment?:Alignment,
      }
     */
    static showToast(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "showToast",
            args: args,
        }));
    }
    /**
     * @param args args:
      {
        info:string,
        alignment?:Alignment,
      }
     */
    static show(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "show",
            args: args,
        }));
    }
    /**
     * @param args args:
      {
        value:number(0~100),
        alignment?:Alignment,
      }
     */
    static showProgress(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "showProgress",
            args: args,
        }));
    }
    /**
    * @param args args:
     {
       animation?:animation,
     }
    */
    static dismiss(args) {
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "dismiss",
            args: args,
        }));
    }
}
exports.LoadingApi = LoadingApi;
class SpApi extends DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        var argument = new JSCallArgs({
            mirrorID: this.mirrorID,
            className: "SpApi",
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new SpApi();
        }
        return this.instance;
    }
    invokeMirrorObjWithCallback(argument) {
        let promiseResult = new Promise(function (resolve) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value) {
                if (value != null) {
                    resolve(value);
                }
                else {
                    resolve(null);
                }
            });
        }.bind(this));
        return promiseResult;
    }
    /**
     * @param args args:
      {
        key:string;
        defaultValue?:boolean;
      }
     */
    static getBool(args) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getBool",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        defaultValue?:number;
      }
     */
    static getInt(args) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getInt",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        defaultValue?:double;
      }
     */
    static getDouble(args) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getDouble",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        defaultValue?:string;
      }
     */
    static getString(args) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getString",
            args: args,
        }));
    }
    ;
    static clear() {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "clear",
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
      }
     */
    static remove(args) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getBool",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        value:boolean;
      }
     */
    static setBool(args) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setBool",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        value:number;
      }
     */
    static setDouble(args) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setDouble",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        value:number;
      }
     */
    static setInt(args) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setInt",
            args: args,
        }));
    }
    ;
    /**
     * @param args args:
      {
        key:string;
        value:string;
      }
     */
    static setString(args) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setString",
            args: args,
        }));
    }
    ;
}
exports.SpApi = SpApi;
//#endregion
