"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: JS Flutter SDK
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoThemeData = exports.CupertinoTextThemeData = exports.CupertinoTheme = exports.CupertinoTabController = exports.CupertinoTabBar = exports.CupertinoSliverNavigationBar = exports.CupertinoScrollbar = exports.CupertinoSwitch = exports.CupertinoSlider = exports.CupertinoNavigationBarBackButton = exports.CupertinoNavigationBar = exports.CupertinoButton = exports.CupertinoActivityIndicator = exports.WidgetSpan = exports.WillPopScope = exports.Wrap = exports.Visibility = exports.VerticalDivider = exports.UnconstrainedBox = exports.TextFormField = exports.Texture = exports.TextSpan = exports.Text = exports.Title = exports.TabPageSelector = exports.TabPageSelectorIndicator = exports.TabBarView = exports.Tab = exports.TabBar = exports.Table = exports.Tooltip = exports.Transform = exports.TableCell = exports.TableRow = exports.SliverVisibility = exports.SnackBarAction = exports.SnackBar = exports.Scrollbar = exports.SliverSafeArea = exports.SafeArea = exports.ScaffoldState = exports.Scaffold = exports.SliverToBoxAdapter = exports.SingleChildScrollView = exports.SliverOverlapAbsorber = exports.SliverFixedExtentList = exports.SliverOverlapInjector = exports.SliverList = exports.SliverChildBuilderDelegate = exports.SliverChildListDelegate = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGrid = exports.SliverPadding = exports.SliverAppBar = exports.Stack = exports.SizedOverflowBox = exports.SizedBox = exports.Slider = exports.SwitchListTile = exports.Semantics = exports.Spacer = exports.RichText = exports.RawMaterialButton = exports.Radio = exports.RaisedButton = exports.RotatedBox = exports.RawImage = exports.RepaintBoundary = exports.Row = exports.PopupMenuItem = exports.PopupMenuButton = exports.Placeholder = exports.PreferredSizeWidget = exports.PreferredSize = exports.PositionedDirectional = exports.Positioned = exports.PhysicalModel = exports.Padding = exports.OutlineButton = exports.OverflowBox = exports.Offstage = exports.Opacity = exports.Navigator = exports.NestedScrollView = exports.NotificationListener = exports.MaterialPageRoute = exports.Material = exports.LayoutBuilder = exports.ListView = exports.ListTile = exports.ListBody = exports.LimitedBox = exports.LicensePage = exports.KeyedSubtree = exports.ImageIcon = exports.Icon = exports.IconButton = exports.IgnorePointer = exports.IndexedStack = exports.IntrinsicWidth = exports.IntrinsicHeight = exports.IndexedSemantics = exports.InputDecorator = exports.GridPaper = exports.GridTile = exports.GridTileBar = exports.GestureDetector = exports.FractionalTranslation = exports.FlutterLogo = exports.FlexibleSpaceBarSettings = exports.FlexibleSpaceBar = exports.FloatingActionButton = exports.FlatButton = exports.Flow = exports.Flex = exports.FractionallySizedBox = exports.FittedBox = exports.Flexible = exports.ExpansionTile = exports.ExpandIcon = exports.Expanded = exports.ExcludeSemantics = exports.DecoratedBoxTransition = exports.DefaultTextStyle = exports.DecorationImage = exports.DefaultTabController = exports.DropdownButton = exports.DecoratedBox = exports.DropdownMenuItem = exports.Directionality = exports.Divider = exports.Card = exports.CustomScrollView = exports.CustomMultiChildLayout = exports.Column = exports.CustomSingleChildLayout = exports.ConstrainedBox = exports.ClipRRect = exports.Checkbox = exports.CheckboxListTile = exports.CheckedModeBanner = exports.Chip = exports.CircleAvatar = exports.ColoredBox = exports.Center = exports.Container = exports.CloseButton = exports.Builder = exports.BackButton = exports.BackButtonIcon = exports.BottomNavigationBar = exports.BottomAppBar = exports.BlockSemantics = exports.ButtonBar = exports.Baseline = exports.Banner = exports.BottomNavigationBarItem = exports.AnimatedDefaultTextStyle = exports.AnimatedSize = exports.AnimatedPositioned = exports.AnimatedPhysicalModel = exports.AnimatedContainer = exports.AnimatedBuilder = exports.AnimatedOpacity = exports.AnimatedCrossFade = exports.AnnotatedRegion = exports.AspectRatio = exports.Align = exports.AppBar = exports.AboutDialog = exports.AboutListTile = exports.Animation = exports.AnimationController = exports.AbsorbPointer = exports.CupertinoIcons = exports.Icons = exports.VisualDensity = exports.Vector4 = exports.Vector3 = exports.Uint8List = exports.Uri = exports.Tween = exports.TextInputType = exports.TextEditingController = exports.TabController = exports.TableColumnWidth = exports.TableBorder = exports.TextStyle = exports.TextAlignVertical = exports.ScrollbarPainter = exports.Shadow = exports.ScrollController = exports.ScrollPhysics = exports.SpringDescription = exports.SystemUiOverlayStyle = exports.StrutStyle = exports.Size = exports.RangeMaintainingScrollPhysics = exports.RSTransform = exports.RRect = exports.RelativeRect = exports.Rect = exports.Radius = exports.Quaternion = exports.OutlinedBorder = exports.Offset = exports.NotchedShape = exports.Notification = exports.NeverScrollableScrollPhysics = exports.MediaQueryData = exports.MediaQuery = exports.Matrix4 = exports.MaskFilter = exports.Key = exports.InputDecoration = exports.InputDecorationTheme = exports.ImageShader = exports.IconThemeData = exports.IconData = exports.ImageProvider = exports.InputBorder = exports.Gradient = exports.GradientTransform = exports.File = exports.FixedColumnWidth = exports.FractionalOffset = exports.FlutterLogoDecoration = exports.FlexColumnWidth = exports.EdgeInsetsDirectional = exports.EdgeInsets = exports.Duration = exports.CurveTween = exports.ClampingScrollPhysics = exports.CircularNotchedRectangle = exports.ColorScheme = exports.ColorFilter = exports.Colors = exports.Color = exports.BouncingScrollPhysics = exports.BoxShadow = exports.BannerPainter = exports.BoxDecoration = exports.ButtonThemeData = exports.BorderDirectional = exports.Border = exports.BorderRadiusDirectional = exports.BorderRadius = exports.BorderSide = exports.BoxConstraints = exports.AssetImage = exports.AssetBundle = exports.AlwaysScrollableScrollPhysics = exports.AlignmentDirectional = exports.Alignment = exports.WrapCrossAlignment = exports.WrapAlignment = exports.VerticalDirection = exports.TargetPlatform = exports.TabBarIndicatorSize = exports.TableCellVerticalAlignment = exports.TextInputAction = exports.TextCapitalization = exports.TextOverflow = exports.TextDecoration = exports.TextBaseline = exports.TextDecorationStyle = exports.TextDirection = exports.TextAlign = exports.TextWidthBasis = exports.TileMode = exports.ScrollPositionAlignmentPolicy = exports.SnackBarClosedReason = exports.StretchMode = exports.StrokeJoin = exports.StrokeCap = exports.StackFit = exports.RenderComparison = exports.PlaceholderAlignment = exports.PaintingStyle = exports.Overflow = exports.NavigationMode = exports.MaterialType = exports.MaterialTapTargetSize = exports.MainAxisSize = exports.MainAxisAlignment = exports.ListTileControlAffinity = exports.ListTileStyle = exports.ImageRepeat = exports.HitTestBehavior = exports.FloatingActionButtonLocation = exports.FilterQuality = exports.FontStyle = exports.FlexFit = exports.FontWeight = exports.FloatingLabelBehavior = exports.FlutterLogoStyle = exports.DecorationPosition = exports.DragStartBehavior = exports.CrossFadeState = exports.CollapseMode = exports.Clip = exports.Curve = exports.CrossAxisAlignment = exports.BoxHeightStyle = exports.ButtonBarLayoutBehavior = exports.ButtonTextTheme = exports.BoxShape = exports.BottomNavigationBarType = exports.BorderStyle = exports.BlurStyle = exports.Brightness = exports.BannerLocation = exports.BoxFit = exports.BlendMode = exports.AnimationBehavior = exports.AnimationStatus = exports.AxisDirection = exports.Axis = exports.JSWidgetState = exports.JSStatelessWidget = exports.JSStatefulWidget = exports.JSBaseWidget = exports.JSWidgetMgr = exports.JSWidgetTree = exports.JSWidgetHelper = exports.JSBuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.JSLog = exports.JSFramework = exports.JSFlutterApp = exports.JSBridge = exports.ShapeBorder = exports.FlutterWidget = exports.DartClass = exports.JSCallArgs = exports.JSWidgetMirrorMgr = void 0;
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
        args?:Map<string,any>
      }
     */
    static new(args) {
        var v = new JSCallArgs();
        if (args != null && args != undefined) {
            v.widgetID = args.widgetID;
            v.mirrorID = args.mirrorID;
            v.className = args.className;
            v.funcName = args.funcName;
            v.args = args.args;
        }
        return v;
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
class FlutterWidget extends DartClass {
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
            JSLog.debug("invokeFlutterCommonChannel: callback: " + resultStr);
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
        JSLog.debug("JSBridge.onFlutterInvokeJSCommonChannel: " + messageStr);
        let args = JSON.parse(messageStr);
        let method = args["method"];
        let callArgs = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callArgs);
        }
        else {
            JSLog.log("JSBridge.onFlutterInvokeJSCommonChannel: error:fun == null" + args);
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
        this.rootWidget = new JSStatelessWidget({ name: "RootWidget" });
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
        let bc = JSBuildContext.new(widget);
        widget.buildContext = bc;
        this.rootWidget?.helper?.addChildWidget(widget);
        let app = this;
        this.buildRootWidget(widget);
    }
    ///JS侧入口API
    //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
    navigatorPush(widget, args) {
        let bc = JSBuildContext.new(widget);
        bc.setInheritedInfo(args);
        widget.buildContext = bc;
        if (widget != null && widget != undefined && widget != "") {
            JSWidgetMgr.getInstance().registerWidget(widget);
        }
        this.rootWidget?.helper.addChildWidget(widget);
        widget?.helper.callFlutterRebuild();
    }
    buildRootWidget(widget) {
        JSLog.log("buildRootWidget ::" + widget?.getWidgetInfo());
        let widgetData = JSWidgetHelper.buildWidgetData(widget);
        JSFramework.callFlutterReloadApp(this, widgetData);
    }
    //flutter->js channel
    nativeCall(args) {
        JSLog.log("XSFlutterApp:nativeCall" + args);
        let method = args["method"];
        let callArgs = args["arguments"];
        // @ts-ignore：dart_sdk
        let fun = this[method];
        if (fun != null) {
            return fun.call(this, callArgs);
        }
        else {
            JSLog.log("XSFlutterApp:nativeCall error:fun == null" + args);
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
            JSWidgetMgr.getInstance().remove(widgetID);
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
class JSLog {
    static setLogLev(lev) {
        JSLog.logLev = lev;
    }
    static printLog(log) {
        var prefix = "[JS]: ";
        if (JSLog.logLev == 0) {
            prefix = "[JS-Debug]: ";
        }
        else if (JSLog.logLev == 2) {
            prefix = "[JS-Error]: ";
        }
        // @ts-ignore：原生系统函数
        XSNativeLog(prefix + log);
    }
    static debug(log) {
        if (JSLog.logLev != 0) {
            JSLog.logLev = 0;
        }
        this.printLog(log);
    }
    static log(log) {
        if (JSLog.logLev != 1) {
            JSLog.logLev = 1;
        }
        this.printLog(log);
    }
    static error(log) {
        if (JSLog.logLev != 2) {
            JSLog.logLev = 2;
        }
        this.printLog(log);
    }
}
exports.JSLog = JSLog;
JSLog.LogLevDebug = 0;
JSLog.LogLevInfo = 1;
JSLog.LogLevError = 2;
JSLog.logLev = JSLog.LogLevDebug;
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
//****** TODO JSBuildContext 和flutter BuildContext 保持一致的编程方式 ******
class JSBuildContext {
    static new(widget, parentBuildContext) {
        var v = new JSBuildContext();
        v.widget = widget;
        v.widget.buildContext = v;
        v.parentBuildContext = parentBuildContext;
        v.inheritedInfo = {};
        return v;
    }
    static inheritBuildContext(widget, buildContext) {
        var context = JSBuildContext.new(widget, buildContext);
        context.inheritedInfo = buildContext?.inheritedInfo;
        return context;
    }
    setInheritedInfo(args) {
        this.inheritedInfo = args;
    }
}
exports.JSBuildContext = JSBuildContext;
//****** TODO JSWidgetHelper ******
class JSWidgetHelper {
    constructor(widget) {
        this.widget = widget;
    }
    setState(fun) {
        this.widget.state?.setState(fun);
    }
    //util api
    //building
    static buildWidgetData(jsWidget) {
        JSLog.log("buildWidgetData ::" + jsWidget.getWidgetInfo());
        let widgetDataStr = JSON.stringify(jsWidget, function (key, value) {
            let newValue = value;
            if (value instanceof JSStatefulWidget || value instanceof JSStatelessWidget) {
                // 解决widget生成时不调用构造方法的问题
                /*if (value.helper == null) {
                  value.className = value instanceof JSStatefulWidget ? "JSStatefulWidget" : "JSStatelessWidget";
                  initJSWidgetData(value);
                }*/
                if (value != jsWidget) {
                    value.buildContext = JSBuildContext.inheritBuildContext(value, jsWidget.buildContext);
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
        let tempWidgetTree = JSWidgetTree.new(this.widget.buildWidgetDataSeq);
        tempWidgetTree.ownerWidget = this.widget;
        this.widget.buildingWidgetTree = tempWidgetTree;
        JSLog.log("JSWidget buildWidgetTree ::" + this.widget.getWidgetInfo());
        let tempWidgetTreeObjMap;
        if (this.widget instanceof JSStatelessWidget) {
            tempWidgetTreeObjMap = this.widget.build(this.widget.buildContext);
        }
        else if (this.widget instanceof JSStatefulWidget) {
            //必须在Build的时候才创建State
            if (this.widget.state == null && this.widget.state == undefined) {
                this.widget.state = this.widget.createState();
                this.widget.state.widget = this.widget;
                this.widget.state.initState();
            }
            tempWidgetTreeObjMap = this.widget.state.build(this.widget.buildContext);
        }
        //如果Build的root wiget 是JSStatelessWidget，则直接展开，优化性能
        if (tempWidgetTreeObjMap instanceof JSStatelessWidget) {
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
        //JSLog.log("preBuildJson:" + flutterWidget);
        if (!(widgetTreeObjMap instanceof Object)) {
            return;
        }
        //JSStatefulWidget不处理
        if (widgetTreeObjMap instanceof JSStatefulWidget) {
            return;
        }
        if (widgetTreeObjMap instanceof FlutterWidget) {
            //ListView等类似需要提前处理build的FlutterWidget 有preBuild 函数
            widgetTreeObjMap.preBuild(this, this.widget.buildContext);
        }
        for (let p in widgetTreeObjMap) {
            let value = widgetTreeObjMap[p];
            //如果Build的 wiget tree 里有节点是JSStatelessWidget，则直接展开，优化性能
            if (value instanceof JSStatelessWidget) {
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
        this.widget.buildingWidgetTree = JSWidgetTree.new("1");
        this.widget.currentWidgetTree = this.widget.buildingWidgetTree;
    }
    addChildWidget(jsWidget) {
        jsWidget.parentWidget = this.widget;
        this.widget.buildingWidgetTree?.childrenWidget.set(jsWidget.widgetID, jsWidget);
    }
    removeChildWidget(jsWidget) {
        if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.childrenWidget) {
            JSWidgetMgr.getInstance().remove(jsWidget.widgetID);
            this.widget.currentWidgetTree.childrenWidget.delete(jsWidget.widgetID);
        }
    }
    //js->flutter
    callFlutterRebuild() {
        JSLog.log("callFlutterRebuild ::" + this.widget.getWidgetInfo());
        let startEncodeData = (new Date()).valueOf();
        let widgetData = JSWidgetHelper.buildWidgetData(this.widget);
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
            JSLog.error("onEventCallback error: jsWidget == null onEventCallback(args:" + args);
        }
    }
    findWidgetWithWidgetID(widgetID) {
        //当前Widget
        if (this.widget.widgetID == widgetID) {
            return this.widget;
        }
        //全局中找对象
        let w = JSWidgetMgr.getInstance().findWidget(widgetID);
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
        JSLog.log("JSWidget invokeCallback ::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq + " callID: " + callID);
        if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq != buildWidgetDataSeq) {
            JSLog.error("JSWidget:invokeCallback:this.widget.currentWidgetTree.buildWidgetDataSeq(" + this.widget.currentWidgetTree.buildWidgetDataSeq + ")  != buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                " callID: " +
                callID);
            if (this.widget.preWidgetTree && this.widget.preWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
                JSLog.error("JSWidget:invokeCallback:this.widget.preWidgetTree.buildWidgetDataSeq(" + this.widget.preWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
                    " callID: " +
                    callID);
            }
            if (this.widget.buildingWidgetTree && this.widget.buildingWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
                JSLog.error("JSWidget:invokeCallback:this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
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
            JSLog.error("JSWidget:invokeCallback: 容错搜索所有BuildTree，this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget?.buildingWidgetTree?.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
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
            JSLog.error("onBuildEnd error: jsWidget == null widgetID: " + widgetID + " buildWidgetDataSeq: " + buildWidgetDataSeq);
        }
    }
    onFlutterBuildEnd(buildWidgetDataSeq, profileInfo) {
        let tree = this.widget.buildSeq2WTreeMap?.get(buildWidgetDataSeq);
        if (tree != null) {
            this.widget.preWidgetTree = this.widget.currentWidgetTree;
            this.widget.currentWidgetTree = tree;
            JSLog.log("JSWidget onFlutterBuildEnd success::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
            this.clearWidgetTree(buildWidgetDataSeq);
        }
        else {
            // @ts-ignore：this.widget.buildSeq2WTreeMap
            JSLog.error("JSWidget onFlutterBuildEnd fail buildSeq2WTreeMap.keys: [" + Object.keys(this.widget.buildSeq2WTreeMap).join("|") + "]::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
        }
        if (this.widget instanceof JSStatelessWidget) {
            this.widget.onBuildEnd();
        }
        else if (this.widget instanceof JSStatefulWidget) {
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
            //JSLog.debug("JSWidget clearWidgetTree::" + this.widget.getWidgetInfo() + " delSeq: " + delSeq);
            JSWidgetMgr.getInstance().remove(widgetID);
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
            JSLog.error("onDispose error: jsWidget == null widgetID " + widgetID);
        }
    }
    onFlutterDispose() {
        JSLog.log("JSWidget onFlutterDispose ::" + this.widget.getWidgetInfo());
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
        if (this.widget instanceof JSStatefulWidget) {
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
            JSWidgetMgr.getInstance().registerWidget(jsWidget);
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
            JSWidgetMgr.getInstance().remove(widgetID);
            this.widget.navPushedWidgets.delete(widgetID);
        }
    }
    //留意：这个函数命名是不是应该是removePushedWidget
    removePushingWidget(jsWidget) {
        if (this.widget.navPushedWidgets) {
            JSWidgetMgr.getInstance().remove(jsWidget.widgetID);
            this.widget.navPushedWidgets.delete(jsWidget.widgetID);
        }
    }
    updatePushingWidgetsData(jsWidget) {
        JSLog.log("updatePushingWidgetsData WidgetName:" + jsWidget.widgetName);
        var newJSWidget = jsWidget;
        //设置push jsWidget的widget
        newJSWidget.navPushingWidget = this.widget;
        newJSWidget.buildContext = JSBuildContext.inheritBuildContext(newJSWidget, this.widget.buildContext);
        newJSWidget.navPushingWidgetID = this.widget.widgetID;
        this.widget.navPushedWidgets?.set(newJSWidget.widgetID, newJSWidget);
        let widgetData = JSWidgetHelper.buildWidgetData(newJSWidget);
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
exports.JSWidgetHelper = JSWidgetHelper;
//****** TODO Widget树 ******
class JSWidgetTree {
    constructor() {
        this.buildWidgetDataSeq = "";
        this.buildWidgetDataSeq = "";
        this.childrenWidget = new Map();
    }
    static new(buildWidgetDataSeq) {
        var v = new JSWidgetTree();
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
exports.JSWidgetTree = JSWidgetTree;
//****** Widget Mgr ******
class JSWidgetMgr {
    constructor() {
        this.widgetIDFeed = 0;
        this.widgetID2WidgetMap = new Map();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new JSWidgetMgr();
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
        JSLog.log("======widgetID2WidgetMap:" + String(this.widgetID2WidgetMap.size));
        return this.widgetID2WidgetMap.get(widgetID);
    }
}
exports.JSWidgetMgr = JSWidgetMgr;
class JSBaseWidget extends FlutterWidget {
    constructor(args) {
        super();
        if (args != null && args != undefined) {
            this.name = args.name;
            this.key = args.key;
        }
        this.widgetID = JSWidgetMgr.getInstance().generateWidgetID();
        this.helper = new JSWidgetHelper(this);
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
        //JSWidgetMgr.getInstance().registerWidget(this);
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
exports.JSBaseWidget = JSBaseWidget;
//****** JSStatefulWidget ******
class JSStatefulWidget extends JSBaseWidget {
    constructor(args) {
        super(args);
        this.className = "JSStatefulWidget";
    }
    //subclass override
    createState() { }
}
exports.JSStatefulWidget = JSStatefulWidget;
//在JS层，要封装控件，如不需要改变UI内容，使用无状态的JSStatelessWidget
class JSStatelessWidget extends JSBaseWidget {
    constructor(args) {
        super(args);
        this.className = "JSStatelessWidget";
    }
    //subclass override
    build(context) { }
}
exports.JSStatelessWidget = JSStatelessWidget;
class JSWidgetState {
    constructor(widget) {
        this.widget = widget;
    }
    get context() {
        return this.widget?.buildContext;
    }
    //subclass override
    initState() {
        JSLog.log("JSWidgetState initState ::" + this.widget?.getWidgetInfo());
    }
    setState(fun) {
        JSLog.log("JSWidgetState setState ::" + this.widget?.getWidgetInfo());
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
exports.JSWidgetState = JSWidgetState;
//#endregion
//#region ******** Enum ********
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
class CurveTween extends FlutterWidget {
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
class IconData extends DartClass {
    /**
     * @param codePoint codePoint:number
     * @param args args:
        {
          fontFamily?:string,
          fontPackage?:string,
          matchTextDirection?:boolean
        }
     */
    constructor(codePoint, args) {
        super();
        this.codePoint = codePoint;
        if (args != null && args != undefined) {
            this.fontFamily = args.fontFamily;
            this.fontPackage = args.fontPackage;
            this.matchTextDirection = args.matchTextDirection;
        }
    }
    /**
     * @param codePoint codePoint:number
     * @param args args:
        {
          fontFamily?:string,
          fontPackage?:string,
          matchTextDirection?:boolean
        }
     */
    static new(codePoint, args) {
        return new IconData(codePoint, args);
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
          icon?:FlutterWidget,
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
          prefixIcon?:FlutterWidget,
          prefixIconConstraints?:BoxConstraints,
          prefix?:FlutterWidget,
          prefixText?:string,
          prefixStyle?:TextStyle,
          suffixIcon?:FlutterWidget,
          suffix?:FlutterWidget,
          suffixText?:string,
          suffixStyle?:TextStyle,
          suffixIconConstraints?:BoxConstraints,
          counter?:FlutterWidget,
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
          icon?:FlutterWidget,
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
          prefixIcon?:FlutterWidget,
          prefixIconConstraints?:BoxConstraints,
          prefix?:FlutterWidget,
          prefixText?:string,
          prefixStyle?:TextStyle,
          suffixIcon?:FlutterWidget,
          suffix?:FlutterWidget,
          suffixText?:string,
          suffixStyle?:TextStyle,
          suffixIconConstraints?:BoxConstraints,
          counter?:FlutterWidget,
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
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
//#region ******* Icons ********
class Icons extends IconData {
}
exports.Icons = Icons;
/// <i class="material-icons md-36">360</i> &#x2014; material icon named "360".
Icons.threesixty = IconData.new(0xe577, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">3d_rotation</i> &#x2014; material icon named "3d rotation".
Icons.threed_rotation = IconData.new(0xe84d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">4k</i> &#x2014; material icon named "4k".
Icons.four_k = IconData.new(0xe072, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">ac_unit</i> &#x2014; material icon named "ac unit".
Icons.ac_unit = IconData.new(0xeb3b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">access_alarm</i> &#x2014; material icon named "access alarm".
Icons.access_alarm = IconData.new(0xe190, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">access_alarms</i> &#x2014; material icon named "access alarms".
Icons.access_alarms = IconData.new(0xe191, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">access_time</i> &#x2014; material icon named "access time".
Icons.access_time = IconData.new(0xe192, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">accessibility</i> &#x2014; material icon named "accessibility".
Icons.accessibility = IconData.new(0xe84e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">accessibility_new</i> &#x2014; material icon named "accessibility new".
Icons.accessibility_new = IconData.new(0xe92c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">accessible</i> &#x2014; material icon named "accessible".
Icons.accessible = IconData.new(0xe914, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">accessible_forward</i> &#x2014; material icon named "accessible forward".
Icons.accessible_forward = IconData.new(0xe934, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">account_balance</i> &#x2014; material icon named "account balance".
Icons.account_balance = IconData.new(0xe84f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">account_balance_wallet</i> &#x2014; material icon named "account balance wallet".
Icons.account_balance_wallet = IconData.new(0xe850, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">account_box</i> &#x2014; material icon named "account box".
Icons.account_box = IconData.new(0xe851, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">account_circle</i> &#x2014; material icon named "account circle".
Icons.account_circle = IconData.new(0xe853, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">adb</i> &#x2014; material icon named "adb".
Icons.adb = IconData.new(0xe60e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add</i> &#x2014; material icon named "add".
Icons.add = IconData.new(0xe145, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_a_photo</i> &#x2014; material icon named "add a photo".
Icons.add_a_photo = IconData.new(0xe439, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_alarm</i> &#x2014; material icon named "add alarm".
Icons.add_alarm = IconData.new(0xe193, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_alert</i> &#x2014; material icon named "add alert".
Icons.add_alert = IconData.new(0xe003, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_box</i> &#x2014; material icon named "add box".
Icons.add_box = IconData.new(0xe146, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_call</i> &#x2014; material icon named "add call".
Icons.add_call = IconData.new(0xe0e8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_circle</i> &#x2014; material icon named "add circle".
Icons.add_circle = IconData.new(0xe147, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_circle_outline</i> &#x2014; material icon named "add circle outline".
Icons.add_circle_outline = IconData.new(0xe148, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_comment</i> &#x2014; material icon named "add comment".
Icons.add_comment = IconData.new(0xe266, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_location</i> &#x2014; material icon named "add location".
Icons.add_location = IconData.new(0xe567, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_photo_alternate</i> &#x2014; material icon named "add photo alternate".
Icons.add_photo_alternate = IconData.new(0xe43e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_shopping_cart</i> &#x2014; material icon named "add shopping cart".
Icons.add_shopping_cart = IconData.new(0xe854, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_to_home_screen</i> &#x2014; material icon named "add to home screen".
Icons.add_to_home_screen = IconData.new(0xe1fe, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_to_photos</i> &#x2014; material icon named "add to photos".
Icons.add_to_photos = IconData.new(0xe39d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">add_to_queue</i> &#x2014; material icon named "add to queue".
Icons.add_to_queue = IconData.new(0xe05c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">adjust</i> &#x2014; material icon named "adjust".
Icons.adjust = IconData.new(0xe39e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_flat</i> &#x2014; material icon named "airline seat flat".
Icons.airline_seat_flat = IconData.new(0xe630, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_flat_angled</i> &#x2014; material icon named "airline seat flat angled".
Icons.airline_seat_flat_angled = IconData.new(0xe631, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_individual_suite</i> &#x2014; material icon named "airline seat individual suite".
Icons.airline_seat_individual_suite = IconData.new(0xe632, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_legroom_extra</i> &#x2014; material icon named "airline seat legroom extra".
Icons.airline_seat_legroom_extra = IconData.new(0xe633, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_legroom_normal</i> &#x2014; material icon named "airline seat legroom normal".
Icons.airline_seat_legroom_normal = IconData.new(0xe634, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_legroom_reduced</i> &#x2014; material icon named "airline seat legroom reduced".
Icons.airline_seat_legroom_reduced = IconData.new(0xe635, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_recline_extra</i> &#x2014; material icon named "airline seat recline extra".
Icons.airline_seat_recline_extra = IconData.new(0xe636, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airline_seat_recline_normal</i> &#x2014; material icon named "airline seat recline normal".
Icons.airline_seat_recline_normal = IconData.new(0xe637, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airplanemode_active</i> &#x2014; material icon named "airplanemode active".
Icons.airplanemode_active = IconData.new(0xe195, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airplanemode_inactive</i> &#x2014; material icon named "airplanemode inactive".
Icons.airplanemode_inactive = IconData.new(0xe194, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airplay</i> &#x2014; material icon named "airplay".
Icons.airplay = IconData.new(0xe055, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">airport_shuttle</i> &#x2014; material icon named "airport shuttle".
Icons.airport_shuttle = IconData.new(0xeb3c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">alarm</i> &#x2014; material icon named "alarm".
Icons.alarm = IconData.new(0xe855, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">alarm_add</i> &#x2014; material icon named "alarm add".
Icons.alarm_add = IconData.new(0xe856, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">alarm_off</i> &#x2014; material icon named "alarm off".
Icons.alarm_off = IconData.new(0xe857, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">alarm_on</i> &#x2014; material icon named "alarm on".
Icons.alarm_on = IconData.new(0xe858, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">album</i> &#x2014; material icon named "album".
Icons.album = IconData.new(0xe019, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">all_inclusive</i> &#x2014; material icon named "all inclusive".
Icons.all_inclusive = IconData.new(0xeb3d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">all_out</i> &#x2014; material icon named "all out".
Icons.all_out = IconData.new(0xe90b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">alternate_email</i> &#x2014; material icon named "alternate email".
Icons.alternate_email = IconData.new(0xe0e6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">android</i> &#x2014; material icon named "android".
Icons.android = IconData.new(0xe859, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">announcement</i> &#x2014; material icon named "announcement".
Icons.announcement = IconData.new(0xe85a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">apps</i> &#x2014; material icon named "apps".
Icons.apps = IconData.new(0xe5c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">archive</i> &#x2014; material icon named "archive".
Icons.archive = IconData.new(0xe149, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">arrow_back</i> &#x2014; material icon named "arrow back".
Icons.arrow_back = IconData.new(0xe5c4, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_back_ios</i> &#x2014; material icon named "arrow back ios".
Icons.arrow_back_ios = IconData.new(0xe5e0, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_downward</i> &#x2014; material icon named "arrow downward".
Icons.arrow_downward = IconData.new(0xe5db, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">arrow_drop_down</i> &#x2014; material icon named "arrow drop down".
Icons.arrow_drop_down = IconData.new(0xe5c5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">arrow_drop_down_circle</i> &#x2014; material icon named "arrow drop down circle".
Icons.arrow_drop_down_circle = IconData.new(0xe5c6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">arrow_drop_up</i> &#x2014; material icon named "arrow drop up".
Icons.arrow_drop_up = IconData.new(0xe5c7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">arrow_forward</i> &#x2014; material icon named "arrow forward".
Icons.arrow_forward = IconData.new(0xe5c8, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_forward_ios</i> &#x2014; material icon named "arrow forward ios".
Icons.arrow_forward_ios = IconData.new(0xe5e1, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_left</i> &#x2014; material icon named "arrow left".
Icons.arrow_left = IconData.new(0xe5de, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_right</i> &#x2014; material icon named "arrow right".
Icons.arrow_right = IconData.new(0xe5df, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">arrow_upward</i> &#x2014; material icon named "arrow upward".
Icons.arrow_upward = IconData.new(0xe5d8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">art_track</i> &#x2014; material icon named "art track".
Icons.art_track = IconData.new(0xe060, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">aspect_ratio</i> &#x2014; material icon named "aspect ratio".
Icons.aspect_ratio = IconData.new(0xe85b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assessment</i> &#x2014; material icon named "assessment".
Icons.assessment = IconData.new(0xe85c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assignment</i> &#x2014; material icon named "assignment".
Icons.assignment = IconData.new(0xe85d, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">assignment_ind</i> &#x2014; material icon named "assignment ind".
Icons.assignment_ind = IconData.new(0xe85e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assignment_late</i> &#x2014; material icon named "assignment late".
Icons.assignment_late = IconData.new(0xe85f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assignment_return</i> &#x2014; material icon named "assignment return".
Icons.assignment_return = IconData.new(0xe860, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">assignment_returned</i> &#x2014; material icon named "assignment returned".
Icons.assignment_returned = IconData.new(0xe861, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assignment_turned_in</i> &#x2014; material icon named "assignment turned in".
Icons.assignment_turned_in = IconData.new(0xe862, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assistant</i> &#x2014; material icon named "assistant".
Icons.assistant = IconData.new(0xe39f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">assistant_photo</i> &#x2014; material icon named "assistant photo".
Icons.assistant_photo = IconData.new(0xe3a0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">atm</i> &#x2014; material icon named "atm".
Icons.atm = IconData.new(0xe573, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">attach_file</i> &#x2014; material icon named "attach file".
Icons.attach_file = IconData.new(0xe226, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">attach_money</i> &#x2014; material icon named "attach money".
Icons.attach_money = IconData.new(0xe227, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">attachment</i> &#x2014; material icon named "attachment".
Icons.attachment = IconData.new(0xe2bc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">audiotrack</i> &#x2014; material icon named "audiotrack".
Icons.audiotrack = IconData.new(0xe3a1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">autorenew</i> &#x2014; material icon named "autorenew".
Icons.autorenew = IconData.new(0xe863, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">av_timer</i> &#x2014; material icon named "av timer".
Icons.av_timer = IconData.new(0xe01b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">backspace</i> &#x2014; material icon named "backspace".
Icons.backspace = IconData.new(0xe14a, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">backup</i> &#x2014; material icon named "backup".
Icons.backup = IconData.new(0xe864, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">battery_alert</i> &#x2014; material icon named "battery alert".
Icons.battery_alert = IconData.new(0xe19c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">battery_charging_full</i> &#x2014; material icon named "battery charging full".
Icons.battery_charging_full = IconData.new(0xe1a3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">battery_full</i> &#x2014; material icon named "battery full".
Icons.battery_full = IconData.new(0xe1a4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">battery_std</i> &#x2014; material icon named "battery std".
Icons.battery_std = IconData.new(0xe1a5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">battery_unknown</i> &#x2014; material icon named "battery unknown".
Icons.battery_unknown = IconData.new(0xe1a6, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">beach_access</i> &#x2014; material icon named "beach access".
Icons.beach_access = IconData.new(0xeb3e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">beenhere</i> &#x2014; material icon named "beenhere".
Icons.beenhere = IconData.new(0xe52d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">block</i> &#x2014; material icon named "block".
Icons.block = IconData.new(0xe14b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bluetooth</i> &#x2014; material icon named "bluetooth".
Icons.bluetooth = IconData.new(0xe1a7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bluetooth_audio</i> &#x2014; material icon named "bluetooth audio".
Icons.bluetooth_audio = IconData.new(0xe60f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bluetooth_connected</i> &#x2014; material icon named "bluetooth connected".
Icons.bluetooth_connected = IconData.new(0xe1a8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bluetooth_disabled</i> &#x2014; material icon named "bluetooth disabled".
Icons.bluetooth_disabled = IconData.new(0xe1a9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bluetooth_searching</i> &#x2014; material icon named "bluetooth searching".
Icons.bluetooth_searching = IconData.new(0xe1aa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">blur_circular</i> &#x2014; material icon named "blur circular".
Icons.blur_circular = IconData.new(0xe3a2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">blur_linear</i> &#x2014; material icon named "blur linear".
Icons.blur_linear = IconData.new(0xe3a3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">blur_off</i> &#x2014; material icon named "blur off".
Icons.blur_off = IconData.new(0xe3a4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">blur_on</i> &#x2014; material icon named "blur on".
Icons.blur_on = IconData.new(0xe3a5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">book</i> &#x2014; material icon named "book".
Icons.book = IconData.new(0xe865, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bookmark</i> &#x2014; material icon named "bookmark".
Icons.bookmark = IconData.new(0xe866, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bookmark_border</i> &#x2014; material icon named "bookmark border".
Icons.bookmark_border = IconData.new(0xe867, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_all</i> &#x2014; material icon named "border all".
Icons.border_all = IconData.new(0xe228, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_bottom</i> &#x2014; material icon named "border bottom".
Icons.border_bottom = IconData.new(0xe229, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_clear</i> &#x2014; material icon named "border clear".
Icons.border_clear = IconData.new(0xe22a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_color</i> &#x2014; material icon named "border color".
Icons.border_color = IconData.new(0xe22b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_horizontal</i> &#x2014; material icon named "border horizontal".
Icons.border_horizontal = IconData.new(0xe22c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_inner</i> &#x2014; material icon named "border inner".
Icons.border_inner = IconData.new(0xe22d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_left</i> &#x2014; material icon named "border left".
Icons.border_left = IconData.new(0xe22e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_outer</i> &#x2014; material icon named "border outer".
Icons.border_outer = IconData.new(0xe22f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_right</i> &#x2014; material icon named "border right".
Icons.border_right = IconData.new(0xe230, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_style</i> &#x2014; material icon named "border style".
Icons.border_style = IconData.new(0xe231, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_top</i> &#x2014; material icon named "border top".
Icons.border_top = IconData.new(0xe232, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">border_vertical</i> &#x2014; material icon named "border vertical".
Icons.border_vertical = IconData.new(0xe233, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">branding_watermark</i> &#x2014; material icon named "branding watermark".
Icons.branding_watermark = IconData.new(0xe06b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_1</i> &#x2014; material icon named "brightness 1".
Icons.brightness_1 = IconData.new(0xe3a6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_2</i> &#x2014; material icon named "brightness 2".
Icons.brightness_2 = IconData.new(0xe3a7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_3</i> &#x2014; material icon named "brightness 3".
Icons.brightness_3 = IconData.new(0xe3a8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_4</i> &#x2014; material icon named "brightness 4".
Icons.brightness_4 = IconData.new(0xe3a9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_5</i> &#x2014; material icon named "brightness 5".
Icons.brightness_5 = IconData.new(0xe3aa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_6</i> &#x2014; material icon named "brightness 6".
Icons.brightness_6 = IconData.new(0xe3ab, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_7</i> &#x2014; material icon named "brightness 7".
Icons.brightness_7 = IconData.new(0xe3ac, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_auto</i> &#x2014; material icon named "brightness auto".
Icons.brightness_auto = IconData.new(0xe1ab, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_high</i> &#x2014; material icon named "brightness high".
Icons.brightness_high = IconData.new(0xe1ac, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_low</i> &#x2014; material icon named "brightness low".
Icons.brightness_low = IconData.new(0xe1ad, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brightness_medium</i> &#x2014; material icon named "brightness medium".
Icons.brightness_medium = IconData.new(0xe1ae, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">broken_image</i> &#x2014; material icon named "broken image".
Icons.broken_image = IconData.new(0xe3ad, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">brush</i> &#x2014; material icon named "brush".
Icons.brush = IconData.new(0xe3ae, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bubble_chart</i> &#x2014; material icon named "bubble chart".
Icons.bubble_chart = IconData.new(0xe6dd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">bug_report</i> &#x2014; material icon named "bug report".
Icons.bug_report = IconData.new(0xe868, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">build</i> &#x2014; material icon named "build".
Icons.build = IconData.new(0xe869, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">burst_mode</i> &#x2014; material icon named "burst mode".
Icons.burst_mode = IconData.new(0xe43c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">business</i> &#x2014; material icon named "business".
Icons.business = IconData.new(0xe0af, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">business_center</i> &#x2014; material icon named "business center".
Icons.business_center = IconData.new(0xeb3f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cached</i> &#x2014; material icon named "cached".
Icons.cached = IconData.new(0xe86a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cake</i> &#x2014; material icon named "cake".
Icons.cake = IconData.new(0xe7e9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">calendar_today</i> &#x2014; material icon named "calendar today".
Icons.calendar_today = IconData.new(0xe935, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">calendar_view_day</i> &#x2014; material icon named "calendar view day".
Icons.calendar_view_day = IconData.new(0xe936, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">call</i> &#x2014; material icon named "call".
Icons.call = IconData.new(0xe0b0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">call_end</i> &#x2014; material icon named "call end".
Icons.call_end = IconData.new(0xe0b1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">call_made</i> &#x2014; material icon named "call made".
Icons.call_made = IconData.new(0xe0b2, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_merge</i> &#x2014; material icon named "call merge".
Icons.call_merge = IconData.new(0xe0b3, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_missed</i> &#x2014; material icon named "call missed".
Icons.call_missed = IconData.new(0xe0b4, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_missed_outgoing</i> &#x2014; material icon named "call missed outgoing".
Icons.call_missed_outgoing = IconData.new(0xe0e4, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_received</i> &#x2014; material icon named "call received".
Icons.call_received = IconData.new(0xe0b5, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_split</i> &#x2014; material icon named "call split".
Icons.call_split = IconData.new(0xe0b6, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">call_to_action</i> &#x2014; material icon named "call to action".
Icons.call_to_action = IconData.new(0xe06c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera</i> &#x2014; material icon named "camera".
Icons.camera = IconData.new(0xe3af, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera_alt</i> &#x2014; material icon named "camera alt".
Icons.camera_alt = IconData.new(0xe3b0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera_enhance</i> &#x2014; material icon named "camera enhance".
Icons.camera_enhance = IconData.new(0xe8fc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera_front</i> &#x2014; material icon named "camera front".
Icons.camera_front = IconData.new(0xe3b1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera_rear</i> &#x2014; material icon named "camera rear".
Icons.camera_rear = IconData.new(0xe3b2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">camera_roll</i> &#x2014; material icon named "camera roll".
Icons.camera_roll = IconData.new(0xe3b3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cancel</i> &#x2014; material icon named "cancel".
Icons.cancel = IconData.new(0xe5c9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">card_giftcard</i> &#x2014; material icon named "card giftcard".
Icons.card_giftcard = IconData.new(0xe8f6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">card_membership</i> &#x2014; material icon named "card membership".
Icons.card_membership = IconData.new(0xe8f7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">card_travel</i> &#x2014; material icon named "card travel".
Icons.card_travel = IconData.new(0xe8f8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">casino</i> &#x2014; material icon named "casino".
Icons.casino = IconData.new(0xeb40, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cast</i> &#x2014; material icon named "cast".
Icons.cast = IconData.new(0xe307, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cast_connected</i> &#x2014; material icon named "cast connected".
Icons.cast_connected = IconData.new(0xe308, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">category</i> &#x2014; material icon named "category".
Icons.category = IconData.new(0xe574, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">center_focus_strong</i> &#x2014; material icon named "center focus strong".
Icons.center_focus_strong = IconData.new(0xe3b4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">center_focus_weak</i> &#x2014; material icon named "center focus weak".
Icons.center_focus_weak = IconData.new(0xe3b5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">change_history</i> &#x2014; material icon named "change history".
Icons.change_history = IconData.new(0xe86b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">chat</i> &#x2014; material icon named "chat".
Icons.chat = IconData.new(0xe0b7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">chat_bubble</i> &#x2014; material icon named "chat bubble".
Icons.chat_bubble = IconData.new(0xe0ca, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">chat_bubble_outline</i> &#x2014; material icon named "chat bubble outline".
Icons.chat_bubble_outline = IconData.new(0xe0cb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">check</i> &#x2014; material icon named "check".
Icons.check = IconData.new(0xe5ca, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">check_box</i> &#x2014; material icon named "check box".
Icons.check_box = IconData.new(0xe834, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">check_box_outline_blank</i> &#x2014; material icon named "check box outline blank".
Icons.check_box_outline_blank = IconData.new(0xe835, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">check_circle</i> &#x2014; material icon named "check circle".
Icons.check_circle = IconData.new(0xe86c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">check_circle_outline</i> &#x2014; material icon named "check circle outline".
Icons.check_circle_outline = IconData.new(0xe92d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">chevron_left</i> &#x2014; material icon named "chevron left".
Icons.chevron_left = IconData.new(0xe5cb, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">chevron_right</i> &#x2014; material icon named "chevron right".
Icons.chevron_right = IconData.new(0xe5cc, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">child_care</i> &#x2014; material icon named "child care".
Icons.child_care = IconData.new(0xeb41, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">child_friendly</i> &#x2014; material icon named "child friendly".
Icons.child_friendly = IconData.new(0xeb42, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">chrome_reader_mode</i> &#x2014; material icon named "chrome reader mode".
Icons.chrome_reader_mode = IconData.new(0xe86d, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">class</i> &#x2014; material icon named "class".
Icons.class_ = IconData.new(0xe86e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">clear</i> &#x2014; material icon named "clear".
Icons.clear = IconData.new(0xe14c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">clear_all</i> &#x2014; material icon named "clear all".
Icons.clear_all = IconData.new(0xe0b8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">close</i> &#x2014; material icon named "close".
Icons.close = IconData.new(0xe5cd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">closed_caption</i> &#x2014; material icon named "closed caption".
Icons.closed_caption = IconData.new(0xe01c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud</i> &#x2014; material icon named "cloud".
Icons.cloud = IconData.new(0xe2bd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_circle</i> &#x2014; material icon named "cloud circle".
Icons.cloud_circle = IconData.new(0xe2be, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_done</i> &#x2014; material icon named "cloud done".
Icons.cloud_done = IconData.new(0xe2bf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_download</i> &#x2014; material icon named "cloud download".
Icons.cloud_download = IconData.new(0xe2c0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_off</i> &#x2014; material icon named "cloud off".
Icons.cloud_off = IconData.new(0xe2c1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_queue</i> &#x2014; material icon named "cloud queue".
Icons.cloud_queue = IconData.new(0xe2c2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">cloud_upload</i> &#x2014; material icon named "cloud upload".
Icons.cloud_upload = IconData.new(0xe2c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">code</i> &#x2014; material icon named "code".
Icons.code = IconData.new(0xe86f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">collections</i> &#x2014; material icon named "collections".
Icons.collections = IconData.new(0xe3b6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">collections_bookmark</i> &#x2014; material icon named "collections bookmark".
Icons.collections_bookmark = IconData.new(0xe431, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">color_lens</i> &#x2014; material icon named "color lens".
Icons.color_lens = IconData.new(0xe3b7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">colorize</i> &#x2014; material icon named "colorize".
Icons.colorize = IconData.new(0xe3b8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">comment</i> &#x2014; material icon named "comment".
Icons.comment = IconData.new(0xe0b9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">compare</i> &#x2014; material icon named "compare".
Icons.compare = IconData.new(0xe3b9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">compare_arrows</i> &#x2014; material icon named "compare arrows".
Icons.compare_arrows = IconData.new(0xe915, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">computer</i> &#x2014; material icon named "computer".
Icons.computer = IconData.new(0xe30a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">confirmation_number</i> &#x2014; material icon named "confirmation number".
Icons.confirmation_number = IconData.new(0xe638, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">contact_mail</i> &#x2014; material icon named "contact mail".
Icons.contact_mail = IconData.new(0xe0d0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">contact_phone</i> &#x2014; material icon named "contact phone".
Icons.contact_phone = IconData.new(0xe0cf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">contacts</i> &#x2014; material icon named "contacts".
Icons.contacts = IconData.new(0xe0ba, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">content_copy</i> &#x2014; material icon named "content copy".
Icons.content_copy = IconData.new(0xe14d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">content_cut</i> &#x2014; material icon named "content cut".
Icons.content_cut = IconData.new(0xe14e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">content_paste</i> &#x2014; material icon named "content paste".
Icons.content_paste = IconData.new(0xe14f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">control_point</i> &#x2014; material icon named "control point".
Icons.control_point = IconData.new(0xe3ba, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">control_point_duplicate</i> &#x2014; material icon named "control point duplicate".
Icons.control_point_duplicate = IconData.new(0xe3bb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">copyright</i> &#x2014; material icon named "copyright".
Icons.copyright = IconData.new(0xe90c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">create</i> &#x2014; material icon named "create".
Icons.create = IconData.new(0xe150, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">create_new_folder</i> &#x2014; material icon named "create new folder".
Icons.create_new_folder = IconData.new(0xe2cc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">credit_card</i> &#x2014; material icon named "credit card".
Icons.credit_card = IconData.new(0xe870, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop</i> &#x2014; material icon named "crop".
Icons.crop = IconData.new(0xe3be, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_16_9</i> &#x2014; material icon named "crop 16 9".
Icons.crop_16_9 = IconData.new(0xe3bc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_3_2</i> &#x2014; material icon named "crop 3 2".
Icons.crop_3_2 = IconData.new(0xe3bd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_5_4</i> &#x2014; material icon named "crop 5 4".
Icons.crop_5_4 = IconData.new(0xe3bf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_7_5</i> &#x2014; material icon named "crop 7 5".
Icons.crop_7_5 = IconData.new(0xe3c0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_din</i> &#x2014; material icon named "crop din".
Icons.crop_din = IconData.new(0xe3c1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_free</i> &#x2014; material icon named "crop free".
Icons.crop_free = IconData.new(0xe3c2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_landscape</i> &#x2014; material icon named "crop landscape".
Icons.crop_landscape = IconData.new(0xe3c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_original</i> &#x2014; material icon named "crop original".
Icons.crop_original = IconData.new(0xe3c4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_portrait</i> &#x2014; material icon named "crop portrait".
Icons.crop_portrait = IconData.new(0xe3c5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_rotate</i> &#x2014; material icon named "crop rotate".
Icons.crop_rotate = IconData.new(0xe437, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">crop_square</i> &#x2014; material icon named "crop square".
Icons.crop_square = IconData.new(0xe3c6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dashboard</i> &#x2014; material icon named "dashboard".
Icons.dashboard = IconData.new(0xe871, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">data_usage</i> &#x2014; material icon named "data usage".
Icons.data_usage = IconData.new(0xe1af, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">date_range</i> &#x2014; material icon named "date range".
Icons.date_range = IconData.new(0xe916, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dehaze</i> &#x2014; material icon named "dehaze".
Icons.dehaze = IconData.new(0xe3c7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">delete</i> &#x2014; material icon named "delete".
Icons.delete = IconData.new(0xe872, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">delete_forever</i> &#x2014; material icon named "delete forever".
Icons.delete_forever = IconData.new(0xe92b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">delete_outline</i> &#x2014; material icon named "delete outline".
Icons.delete_outline = IconData.new(0xe92e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">delete_sweep</i> &#x2014; material icon named "delete sweep".
Icons.delete_sweep = IconData.new(0xe16c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">departure_board</i> &#x2014; material icon named "departure board".
Icons.departure_board = IconData.new(0xe576, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">description</i> &#x2014; material icon named "description".
Icons.description = IconData.new(0xe873, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">desktop_mac</i> &#x2014; material icon named "desktop mac".
Icons.desktop_mac = IconData.new(0xe30b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">desktop_windows</i> &#x2014; material icon named "desktop windows".
Icons.desktop_windows = IconData.new(0xe30c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">details</i> &#x2014; material icon named "details".
Icons.details = IconData.new(0xe3c8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">developer_board</i> &#x2014; material icon named "developer board".
Icons.developer_board = IconData.new(0xe30d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">developer_mode</i> &#x2014; material icon named "developer mode".
Icons.developer_mode = IconData.new(0xe1b0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">device_hub</i> &#x2014; material icon named "device hub".
Icons.device_hub = IconData.new(0xe335, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">device_unknown</i> &#x2014; material icon named "device unknown".
Icons.device_unknown = IconData.new(0xe339, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">devices</i> &#x2014; material icon named "devices".
Icons.devices = IconData.new(0xe1b1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">devices_other</i> &#x2014; material icon named "devices other".
Icons.devices_other = IconData.new(0xe337, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dialer_sip</i> &#x2014; material icon named "dialer sip".
Icons.dialer_sip = IconData.new(0xe0bb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dialpad</i> &#x2014; material icon named "dialpad".
Icons.dialpad = IconData.new(0xe0bc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions</i> &#x2014; material icon named "directions".
Icons.directions = IconData.new(0xe52e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_bike</i> &#x2014; material icon named "directions bike".
Icons.directions_bike = IconData.new(0xe52f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_boat</i> &#x2014; material icon named "directions boat".
Icons.directions_boat = IconData.new(0xe532, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_bus</i> &#x2014; material icon named "directions bus".
Icons.directions_bus = IconData.new(0xe530, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_car</i> &#x2014; material icon named "directions car".
Icons.directions_car = IconData.new(0xe531, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_railway</i> &#x2014; material icon named "directions railway".
Icons.directions_railway = IconData.new(0xe534, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_run</i> &#x2014; material icon named "directions run".
Icons.directions_run = IconData.new(0xe566, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_subway</i> &#x2014; material icon named "directions subway".
Icons.directions_subway = IconData.new(0xe533, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_transit</i> &#x2014; material icon named "directions transit".
Icons.directions_transit = IconData.new(0xe535, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">directions_walk</i> &#x2014; material icon named "directions walk".
Icons.directions_walk = IconData.new(0xe536, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">disc_full</i> &#x2014; material icon named "disc full".
Icons.disc_full = IconData.new(0xe610, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dns</i> &#x2014; material icon named "dns".
Icons.dns = IconData.new(0xe875, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">do_not_disturb</i> &#x2014; material icon named "do not disturb".
Icons.do_not_disturb = IconData.new(0xe612, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">do_not_disturb_alt</i> &#x2014; material icon named "do not disturb alt".
Icons.do_not_disturb_alt = IconData.new(0xe611, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">do_not_disturb_off</i> &#x2014; material icon named "do not disturb off".
Icons.do_not_disturb_off = IconData.new(0xe643, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">do_not_disturb_on</i> &#x2014; material icon named "do not disturb on".
Icons.do_not_disturb_on = IconData.new(0xe644, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dock</i> &#x2014; material icon named "dock".
Icons.dock = IconData.new(0xe30e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">domain</i> &#x2014; material icon named "domain".
Icons.domain = IconData.new(0xe7ee, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">done</i> &#x2014; material icon named "done".
Icons.done = IconData.new(0xe876, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">done_all</i> &#x2014; material icon named "done all".
Icons.done_all = IconData.new(0xe877, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">done_outline</i> &#x2014; material icon named "done outline".
Icons.done_outline = IconData.new(0xe92f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">donut_large</i> &#x2014; material icon named "donut large".
Icons.donut_large = IconData.new(0xe917, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">donut_small</i> &#x2014; material icon named "donut small".
Icons.donut_small = IconData.new(0xe918, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">drafts</i> &#x2014; material icon named "drafts".
Icons.drafts = IconData.new(0xe151, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">drag_handle</i> &#x2014; material icon named "drag handle".
Icons.drag_handle = IconData.new(0xe25d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">drive_eta</i> &#x2014; material icon named "drive eta".
Icons.drive_eta = IconData.new(0xe613, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">dvr</i> &#x2014; material icon named "dvr".
Icons.dvr = IconData.new(0xe1b2, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">edit</i> &#x2014; material icon named "edit".
Icons.edit = IconData.new(0xe3c9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">edit_attributes</i> &#x2014; material icon named "edit attributes".
Icons.edit_attributes = IconData.new(0xe578, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">edit_location</i> &#x2014; material icon named "edit location".
Icons.edit_location = IconData.new(0xe568, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">eject</i> &#x2014; material icon named "eject".
Icons.eject = IconData.new(0xe8fb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">email</i> &#x2014; material icon named "email".
Icons.email = IconData.new(0xe0be, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">enhanced_encryption</i> &#x2014; material icon named "enhanced encryption".
Icons.enhanced_encryption = IconData.new(0xe63f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">equalizer</i> &#x2014; material icon named "equalizer".
Icons.equalizer = IconData.new(0xe01d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">error</i> &#x2014; material icon named "error".
Icons.error = IconData.new(0xe000, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">error_outline</i> &#x2014; material icon named "error outline".
Icons.error_outline = IconData.new(0xe001, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">euro_symbol</i> &#x2014; material icon named "euro symbol".
Icons.euro_symbol = IconData.new(0xe926, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">ev_station</i> &#x2014; material icon named "ev station".
Icons.ev_station = IconData.new(0xe56d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">event</i> &#x2014; material icon named "event".
Icons.event = IconData.new(0xe878, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">event_available</i> &#x2014; material icon named "event available".
Icons.event_available = IconData.new(0xe614, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">event_busy</i> &#x2014; material icon named "event busy".
Icons.event_busy = IconData.new(0xe615, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">event_note</i> &#x2014; material icon named "event note".
Icons.event_note = IconData.new(0xe616, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">event_seat</i> &#x2014; material icon named "event seat".
Icons.event_seat = IconData.new(0xe903, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exit_to_app</i> &#x2014; material icon named "exit to app".
Icons.exit_to_app = IconData.new(0xe879, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">expand_less</i> &#x2014; material icon named "expand less".
Icons.expand_less = IconData.new(0xe5ce, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">expand_more</i> &#x2014; material icon named "expand more".
Icons.expand_more = IconData.new(0xe5cf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">explicit</i> &#x2014; material icon named "explicit".
Icons.explicit = IconData.new(0xe01e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">explore</i> &#x2014; material icon named "explore".
Icons.explore = IconData.new(0xe87a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure</i> &#x2014; material icon named "exposure".
Icons.exposure = IconData.new(0xe3ca, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure_neg_1</i> &#x2014; material icon named "exposure neg 1".
Icons.exposure_neg_1 = IconData.new(0xe3cb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure_neg_2</i> &#x2014; material icon named "exposure neg 2".
Icons.exposure_neg_2 = IconData.new(0xe3cc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure_plus_1</i> &#x2014; material icon named "exposure plus 1".
Icons.exposure_plus_1 = IconData.new(0xe3cd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure_plus_2</i> &#x2014; material icon named "exposure plus 2".
Icons.exposure_plus_2 = IconData.new(0xe3ce, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">exposure_zero</i> &#x2014; material icon named "exposure zero".
Icons.exposure_zero = IconData.new(0xe3cf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">extension</i> &#x2014; material icon named "extension".
Icons.extension = IconData.new(0xe87b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">face</i> &#x2014; material icon named "face".
Icons.face = IconData.new(0xe87c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fast_forward</i> &#x2014; material icon named "fast forward".
Icons.fast_forward = IconData.new(0xe01f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fast_rewind</i> &#x2014; material icon named "fast rewind".
Icons.fast_rewind = IconData.new(0xe020, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fastfood</i> &#x2014; material icon named "fastfood".
Icons.fastfood = IconData.new(0xe57a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">favorite</i> &#x2014; material icon named "favorite".
Icons.favorite = IconData.new(0xe87d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">favorite_border</i> &#x2014; material icon named "favorite border".
Icons.favorite_border = IconData.new(0xe87e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">featured_play_list</i> &#x2014; material icon named "featured play list".
Icons.featured_play_list = IconData.new(0xe06d, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">featured_video</i> &#x2014; material icon named "featured video".
Icons.featured_video = IconData.new(0xe06e, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">feedback</i> &#x2014; material icon named "feedback".
Icons.feedback = IconData.new(0xe87f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fiber_dvr</i> &#x2014; material icon named "fiber dvr".
Icons.fiber_dvr = IconData.new(0xe05d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fiber_manual_record</i> &#x2014; material icon named "fiber manual record".
Icons.fiber_manual_record = IconData.new(0xe061, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fiber_new</i> &#x2014; material icon named "fiber new".
Icons.fiber_new = IconData.new(0xe05e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fiber_pin</i> &#x2014; material icon named "fiber pin".
Icons.fiber_pin = IconData.new(0xe06a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fiber_smart_record</i> &#x2014; material icon named "fiber smart record".
Icons.fiber_smart_record = IconData.new(0xe062, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">file_download</i> &#x2014; material icon named "file download".
Icons.file_download = IconData.new(0xe2c4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">file_upload</i> &#x2014; material icon named "file upload".
Icons.file_upload = IconData.new(0xe2c6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter</i> &#x2014; material icon named "filter".
Icons.filter = IconData.new(0xe3d3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_1</i> &#x2014; material icon named "filter 1".
Icons.filter_1 = IconData.new(0xe3d0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_2</i> &#x2014; material icon named "filter 2".
Icons.filter_2 = IconData.new(0xe3d1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_3</i> &#x2014; material icon named "filter 3".
Icons.filter_3 = IconData.new(0xe3d2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_4</i> &#x2014; material icon named "filter 4".
Icons.filter_4 = IconData.new(0xe3d4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_5</i> &#x2014; material icon named "filter 5".
Icons.filter_5 = IconData.new(0xe3d5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_6</i> &#x2014; material icon named "filter 6".
Icons.filter_6 = IconData.new(0xe3d6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_7</i> &#x2014; material icon named "filter 7".
Icons.filter_7 = IconData.new(0xe3d7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_8</i> &#x2014; material icon named "filter 8".
Icons.filter_8 = IconData.new(0xe3d8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_9</i> &#x2014; material icon named "filter 9".
Icons.filter_9 = IconData.new(0xe3d9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_9_plus</i> &#x2014; material icon named "filter 9 plus".
Icons.filter_9_plus = IconData.new(0xe3da, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_b_and_w</i> &#x2014; material icon named "filter b and w".
Icons.filter_b_and_w = IconData.new(0xe3db, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_center_focus</i> &#x2014; material icon named "filter center focus".
Icons.filter_center_focus = IconData.new(0xe3dc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_drama</i> &#x2014; material icon named "filter drama".
Icons.filter_drama = IconData.new(0xe3dd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_frames</i> &#x2014; material icon named "filter frames".
Icons.filter_frames = IconData.new(0xe3de, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_hdr</i> &#x2014; material icon named "filter hdr".
Icons.filter_hdr = IconData.new(0xe3df, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_list</i> &#x2014; material icon named "filter list".
Icons.filter_list = IconData.new(0xe152, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_none</i> &#x2014; material icon named "filter none".
Icons.filter_none = IconData.new(0xe3e0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_tilt_shift</i> &#x2014; material icon named "filter tilt shift".
Icons.filter_tilt_shift = IconData.new(0xe3e2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">filter_vintage</i> &#x2014; material icon named "filter vintage".
Icons.filter_vintage = IconData.new(0xe3e3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">find_in_page</i> &#x2014; material icon named "find in page".
Icons.find_in_page = IconData.new(0xe880, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">find_replace</i> &#x2014; material icon named "find replace".
Icons.find_replace = IconData.new(0xe881, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fingerprint</i> &#x2014; material icon named "fingerprint".
Icons.fingerprint = IconData.new(0xe90d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">first_page</i> &#x2014; material icon named "first page".
Icons.first_page = IconData.new(0xe5dc, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">fitness_center</i> &#x2014; material icon named "fitness center".
Icons.fitness_center = IconData.new(0xeb43, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flag</i> &#x2014; material icon named "flag".
Icons.flag = IconData.new(0xe153, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flare</i> &#x2014; material icon named "flare".
Icons.flare = IconData.new(0xe3e4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flash_auto</i> &#x2014; material icon named "flash auto".
Icons.flash_auto = IconData.new(0xe3e5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flash_off</i> &#x2014; material icon named "flash off".
Icons.flash_off = IconData.new(0xe3e6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flash_on</i> &#x2014; material icon named "flash on".
Icons.flash_on = IconData.new(0xe3e7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flight</i> &#x2014; material icon named "flight".
Icons.flight = IconData.new(0xe539, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flight_land</i> &#x2014; material icon named "flight land".
Icons.flight_land = IconData.new(0xe904, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">flight_takeoff</i> &#x2014; material icon named "flight takeoff".
Icons.flight_takeoff = IconData.new(0xe905, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">flip</i> &#x2014; material icon named "flip".
Icons.flip = IconData.new(0xe3e8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flip_to_back</i> &#x2014; material icon named "flip to back".
Icons.flip_to_back = IconData.new(0xe882, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">flip_to_front</i> &#x2014; material icon named "flip to front".
Icons.flip_to_front = IconData.new(0xe883, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">folder</i> &#x2014; material icon named "folder".
Icons.folder = IconData.new(0xe2c7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">folder_open</i> &#x2014; material icon named "folder open".
Icons.folder_open = IconData.new(0xe2c8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">folder_shared</i> &#x2014; material icon named "folder shared".
Icons.folder_shared = IconData.new(0xe2c9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">folder_special</i> &#x2014; material icon named "folder special".
Icons.folder_special = IconData.new(0xe617, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">font_download</i> &#x2014; material icon named "font download".
Icons.font_download = IconData.new(0xe167, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_align_center</i> &#x2014; material icon named "format align center".
Icons.format_align_center = IconData.new(0xe234, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_align_justify</i> &#x2014; material icon named "format align justify".
Icons.format_align_justify = IconData.new(0xe235, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_align_left</i> &#x2014; material icon named "format align left".
Icons.format_align_left = IconData.new(0xe236, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_align_right</i> &#x2014; material icon named "format align right".
Icons.format_align_right = IconData.new(0xe237, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_bold</i> &#x2014; material icon named "format bold".
Icons.format_bold = IconData.new(0xe238, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_clear</i> &#x2014; material icon named "format clear".
Icons.format_clear = IconData.new(0xe239, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_color_fill</i> &#x2014; material icon named "format color fill".
Icons.format_color_fill = IconData.new(0xe23a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_color_reset</i> &#x2014; material icon named "format color reset".
Icons.format_color_reset = IconData.new(0xe23b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_color_text</i> &#x2014; material icon named "format color text".
Icons.format_color_text = IconData.new(0xe23c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_indent_decrease</i> &#x2014; material icon named "format indent decrease".
Icons.format_indent_decrease = IconData.new(0xe23d, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">format_indent_increase</i> &#x2014; material icon named "format indent increase".
Icons.format_indent_increase = IconData.new(0xe23e, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">format_italic</i> &#x2014; material icon named "format italic".
Icons.format_italic = IconData.new(0xe23f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_line_spacing</i> &#x2014; material icon named "format line spacing".
Icons.format_line_spacing = IconData.new(0xe240, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_list_bulleted</i> &#x2014; material icon named "format list bulleted".
Icons.format_list_bulleted = IconData.new(0xe241, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">format_list_numbered</i> &#x2014; material icon named "format list numbered".
Icons.format_list_numbered = IconData.new(0xe242, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_list_numbered_rtl</i> &#x2014; material icon named "format list numbered rtl".
Icons.format_list_numbered_rtl = IconData.new(0xe267, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_paint</i> &#x2014; material icon named "format paint".
Icons.format_paint = IconData.new(0xe243, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_quote</i> &#x2014; material icon named "format quote".
Icons.format_quote = IconData.new(0xe244, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_shapes</i> &#x2014; material icon named "format shapes".
Icons.format_shapes = IconData.new(0xe25e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_size</i> &#x2014; material icon named "format size".
Icons.format_size = IconData.new(0xe245, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_strikethrough</i> &#x2014; material icon named "format strikethrough".
Icons.format_strikethrough = IconData.new(0xe246, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_textdirection_l_to_r</i> &#x2014; material icon named "format textdirection l to r".
Icons.format_textdirection_l_to_r = IconData.new(0xe247, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_textdirection_r_to_l</i> &#x2014; material icon named "format textdirection r to l".
Icons.format_textdirection_r_to_l = IconData.new(0xe248, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">format_underlined</i> &#x2014; material icon named "format underlined".
Icons.format_underlined = IconData.new(0xe249, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">forum</i> &#x2014; material icon named "forum".
Icons.forum = IconData.new(0xe0bf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">forward</i> &#x2014; material icon named "forward".
Icons.forward = IconData.new(0xe154, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">forward_10</i> &#x2014; material icon named "forward 10".
Icons.forward_10 = IconData.new(0xe056, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">forward_30</i> &#x2014; material icon named "forward 30".
Icons.forward_30 = IconData.new(0xe057, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">forward_5</i> &#x2014; material icon named "forward 5".
Icons.forward_5 = IconData.new(0xe058, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">free_breakfast</i> &#x2014; material icon named "free breakfast".
Icons.free_breakfast = IconData.new(0xeb44, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fullscreen</i> &#x2014; material icon named "fullscreen".
Icons.fullscreen = IconData.new(0xe5d0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">fullscreen_exit</i> &#x2014; material icon named "fullscreen exit".
Icons.fullscreen_exit = IconData.new(0xe5d1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">functions</i> &#x2014; material icon named "functions".
Icons.functions = IconData.new(0xe24a, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">g_translate</i> &#x2014; material icon named "g translate".
Icons.g_translate = IconData.new(0xe927, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gamepad</i> &#x2014; material icon named "gamepad".
Icons.gamepad = IconData.new(0xe30f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">games</i> &#x2014; material icon named "games".
Icons.games = IconData.new(0xe021, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gavel</i> &#x2014; material icon named "gavel".
Icons.gavel = IconData.new(0xe90e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gesture</i> &#x2014; material icon named "gesture".
Icons.gesture = IconData.new(0xe155, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">get_app</i> &#x2014; material icon named "get app".
Icons.get_app = IconData.new(0xe884, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gif</i> &#x2014; material icon named "gif".
Icons.gif = IconData.new(0xe908, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">golf_course</i> &#x2014; material icon named "golf course".
Icons.golf_course = IconData.new(0xeb45, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gps_fixed</i> &#x2014; material icon named "gps fixed".
Icons.gps_fixed = IconData.new(0xe1b3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gps_not_fixed</i> &#x2014; material icon named "gps not fixed".
Icons.gps_not_fixed = IconData.new(0xe1b4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gps_off</i> &#x2014; material icon named "gps off".
Icons.gps_off = IconData.new(0xe1b5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">grade</i> &#x2014; material icon named "grade".
Icons.grade = IconData.new(0xe885, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">gradient</i> &#x2014; material icon named "gradient".
Icons.gradient = IconData.new(0xe3e9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">grain</i> &#x2014; material icon named "grain".
Icons.grain = IconData.new(0xe3ea, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">graphic_eq</i> &#x2014; material icon named "graphic eq".
Icons.graphic_eq = IconData.new(0xe1b8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">grid_off</i> &#x2014; material icon named "grid off".
Icons.grid_off = IconData.new(0xe3eb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">grid_on</i> &#x2014; material icon named "grid on".
Icons.grid_on = IconData.new(0xe3ec, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">group</i> &#x2014; material icon named "group".
Icons.group = IconData.new(0xe7ef, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">group_add</i> &#x2014; material icon named "group add".
Icons.group_add = IconData.new(0xe7f0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">group_work</i> &#x2014; material icon named "group work".
Icons.group_work = IconData.new(0xe886, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hd</i> &#x2014; material icon named "hd".
Icons.hd = IconData.new(0xe052, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hdr_off</i> &#x2014; material icon named "hdr off".
Icons.hdr_off = IconData.new(0xe3ed, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hdr_on</i> &#x2014; material icon named "hdr on".
Icons.hdr_on = IconData.new(0xe3ee, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hdr_strong</i> &#x2014; material icon named "hdr strong".
Icons.hdr_strong = IconData.new(0xe3f1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hdr_weak</i> &#x2014; material icon named "hdr weak".
Icons.hdr_weak = IconData.new(0xe3f2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">headset</i> &#x2014; material icon named "headset".
Icons.headset = IconData.new(0xe310, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">headset_mic</i> &#x2014; material icon named "headset mic".
Icons.headset_mic = IconData.new(0xe311, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">headset_off</i> &#x2014; material icon named "headset off".
Icons.headset_off = IconData.new(0xe33a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">healing</i> &#x2014; material icon named "healing".
Icons.healing = IconData.new(0xe3f3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hearing</i> &#x2014; material icon named "hearing".
Icons.hearing = IconData.new(0xe023, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">help</i> &#x2014; material icon named "help".
Icons.help = IconData.new(0xe887, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">help_outline</i> &#x2014; material icon named "help outline".
Icons.help_outline = IconData.new(0xe8fd, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">high_quality</i> &#x2014; material icon named "high quality".
Icons.high_quality = IconData.new(0xe024, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">highlight</i> &#x2014; material icon named "highlight".
Icons.highlight = IconData.new(0xe25f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">highlight_off</i> &#x2014; material icon named "highlight off".
Icons.highlight_off = IconData.new(0xe888, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">history</i> &#x2014; material icon named "history".
Icons.history = IconData.new(0xe889, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">home</i> &#x2014; material icon named "home".
Icons.home = IconData.new(0xe88a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hot_tub</i> &#x2014; material icon named "hot tub".
Icons.hot_tub = IconData.new(0xeb46, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hotel</i> &#x2014; material icon named "hotel".
Icons.hotel = IconData.new(0xe53a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hourglass_empty</i> &#x2014; material icon named "hourglass empty".
Icons.hourglass_empty = IconData.new(0xe88b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">hourglass_full</i> &#x2014; material icon named "hourglass full".
Icons.hourglass_full = IconData.new(0xe88c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">http</i> &#x2014; material icon named "http".
Icons.http = IconData.new(0xe902, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">https</i> &#x2014; material icon named "https".
Icons.https = IconData.new(0xe88d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">image</i> &#x2014; material icon named "image".
Icons.image = IconData.new(0xe3f4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">image_aspect_ratio</i> &#x2014; material icon named "image aspect ratio".
Icons.image_aspect_ratio = IconData.new(0xe3f5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">import_contacts</i> &#x2014; material icon named "import contacts".
Icons.import_contacts = IconData.new(0xe0e0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">import_export</i> &#x2014; material icon named "import export".
Icons.import_export = IconData.new(0xe0c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">important_devices</i> &#x2014; material icon named "important devices".
Icons.important_devices = IconData.new(0xe912, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">inbox</i> &#x2014; material icon named "inbox".
Icons.inbox = IconData.new(0xe156, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">indeterminate_check_box</i> &#x2014; material icon named "indeterminate check box".
Icons.indeterminate_check_box = IconData.new(0xe909, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">info</i> &#x2014; material icon named "info".
Icons.info = IconData.new(0xe88e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">info_outline</i> &#x2014; material icon named "info outline".
Icons.info_outline = IconData.new(0xe88f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">input</i> &#x2014; material icon named "input".
Icons.input = IconData.new(0xe890, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">insert_chart</i> &#x2014; material icon named "insert chart".
Icons.insert_chart = IconData.new(0xe24b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_comment</i> &#x2014; material icon named "insert comment".
Icons.insert_comment = IconData.new(0xe24c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_drive_file</i> &#x2014; material icon named "insert drive file".
Icons.insert_drive_file = IconData.new(0xe24d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_emoticon</i> &#x2014; material icon named "insert emoticon".
Icons.insert_emoticon = IconData.new(0xe24e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_invitation</i> &#x2014; material icon named "insert invitation".
Icons.insert_invitation = IconData.new(0xe24f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_link</i> &#x2014; material icon named "insert link".
Icons.insert_link = IconData.new(0xe250, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">insert_photo</i> &#x2014; material icon named "insert photo".
Icons.insert_photo = IconData.new(0xe251, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">invert_colors</i> &#x2014; material icon named "invert colors".
Icons.invert_colors = IconData.new(0xe891, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">invert_colors_off</i> &#x2014; material icon named "invert colors off".
Icons.invert_colors_off = IconData.new(0xe0c4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">iso</i> &#x2014; material icon named "iso".
Icons.iso = IconData.new(0xe3f6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard</i> &#x2014; material icon named "keyboard".
Icons.keyboard = IconData.new(0xe312, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_arrow_down</i> &#x2014; material icon named "keyboard arrow down".
Icons.keyboard_arrow_down = IconData.new(0xe313, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_arrow_left</i> &#x2014; material icon named "keyboard arrow left".
Icons.keyboard_arrow_left = IconData.new(0xe314, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_arrow_right</i> &#x2014; material icon named "keyboard arrow right".
Icons.keyboard_arrow_right = IconData.new(0xe315, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_arrow_up</i> &#x2014; material icon named "keyboard arrow up".
Icons.keyboard_arrow_up = IconData.new(0xe316, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_backspace</i> &#x2014; material icon named "keyboard backspace".
Icons.keyboard_backspace = IconData.new(0xe317, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">keyboard_capslock</i> &#x2014; material icon named "keyboard capslock".
Icons.keyboard_capslock = IconData.new(0xe318, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_hide</i> &#x2014; material icon named "keyboard hide".
Icons.keyboard_hide = IconData.new(0xe31a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_return</i> &#x2014; material icon named "keyboard return".
Icons.keyboard_return = IconData.new(0xe31b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">keyboard_tab</i> &#x2014; material icon named "keyboard tab".
Icons.keyboard_tab = IconData.new(0xe31c, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">keyboard_voice</i> &#x2014; material icon named "keyboard voice".
Icons.keyboard_voice = IconData.new(0xe31d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">kitchen</i> &#x2014; material icon named "kitchen".
Icons.kitchen = IconData.new(0xeb47, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">label</i> &#x2014; material icon named "label".
Icons.label = IconData.new(0xe892, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">label_important</i> &#x2014; material icon named "label important".
Icons.label_important = IconData.new(0xe937, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">label_outline</i> &#x2014; material icon named "label outline".
Icons.label_outline = IconData.new(0xe893, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">landscape</i> &#x2014; material icon named "landscape".
Icons.landscape = IconData.new(0xe3f7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">language</i> &#x2014; material icon named "language".
Icons.language = IconData.new(0xe894, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">laptop</i> &#x2014; material icon named "laptop".
Icons.laptop = IconData.new(0xe31e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">laptop_chromebook</i> &#x2014; material icon named "laptop chromebook".
Icons.laptop_chromebook = IconData.new(0xe31f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">laptop_mac</i> &#x2014; material icon named "laptop mac".
Icons.laptop_mac = IconData.new(0xe320, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">laptop_windows</i> &#x2014; material icon named "laptop windows".
Icons.laptop_windows = IconData.new(0xe321, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">last_page</i> &#x2014; material icon named "last page".
Icons.last_page = IconData.new(0xe5dd, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">launch</i> &#x2014; material icon named "launch".
Icons.launch = IconData.new(0xe895, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">layers</i> &#x2014; material icon named "layers".
Icons.layers = IconData.new(0xe53b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">layers_clear</i> &#x2014; material icon named "layers clear".
Icons.layers_clear = IconData.new(0xe53c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">leak_add</i> &#x2014; material icon named "leak add".
Icons.leak_add = IconData.new(0xe3f8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">leak_remove</i> &#x2014; material icon named "leak remove".
Icons.leak_remove = IconData.new(0xe3f9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">lens</i> &#x2014; material icon named "lens".
Icons.lens = IconData.new(0xe3fa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">library_add</i> &#x2014; material icon named "library add".
Icons.library_add = IconData.new(0xe02e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">library_books</i> &#x2014; material icon named "library books".
Icons.library_books = IconData.new(0xe02f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">library_music</i> &#x2014; material icon named "library music".
Icons.library_music = IconData.new(0xe030, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">lightbulb_outline</i> &#x2014; material icon named "lightbulb outline".
Icons.lightbulb_outline = IconData.new(0xe90f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">line_style</i> &#x2014; material icon named "line style".
Icons.line_style = IconData.new(0xe919, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">line_weight</i> &#x2014; material icon named "line weight".
Icons.line_weight = IconData.new(0xe91a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">linear_scale</i> &#x2014; material icon named "linear scale".
Icons.linear_scale = IconData.new(0xe260, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">link</i> &#x2014; material icon named "link".
Icons.link = IconData.new(0xe157, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">link_off</i> &#x2014; material icon named "link off".
Icons.link_off = IconData.new(0xe16f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">linked_camera</i> &#x2014; material icon named "linked camera".
Icons.linked_camera = IconData.new(0xe438, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">list</i> &#x2014; material icon named "list".
Icons.list = IconData.new(0xe896, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">live_help</i> &#x2014; material icon named "live help".
Icons.live_help = IconData.new(0xe0c6, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">live_tv</i> &#x2014; material icon named "live tv".
Icons.live_tv = IconData.new(0xe639, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_activity</i> &#x2014; material icon named "local activity".
Icons.local_activity = IconData.new(0xe53f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_airport</i> &#x2014; material icon named "local airport".
Icons.local_airport = IconData.new(0xe53d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_atm</i> &#x2014; material icon named "local atm".
Icons.local_atm = IconData.new(0xe53e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_bar</i> &#x2014; material icon named "local bar".
Icons.local_bar = IconData.new(0xe540, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_cafe</i> &#x2014; material icon named "local cafe".
Icons.local_cafe = IconData.new(0xe541, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_car_wash</i> &#x2014; material icon named "local car wash".
Icons.local_car_wash = IconData.new(0xe542, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_convenience_store</i> &#x2014; material icon named "local convenience store".
Icons.local_convenience_store = IconData.new(0xe543, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_dining</i> &#x2014; material icon named "local dining".
Icons.local_dining = IconData.new(0xe556, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_drink</i> &#x2014; material icon named "local drink".
Icons.local_drink = IconData.new(0xe544, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_florist</i> &#x2014; material icon named "local florist".
Icons.local_florist = IconData.new(0xe545, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_gas_station</i> &#x2014; material icon named "local gas station".
Icons.local_gas_station = IconData.new(0xe546, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_grocery_store</i> &#x2014; material icon named "local grocery store".
Icons.local_grocery_store = IconData.new(0xe547, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_hospital</i> &#x2014; material icon named "local hospital".
Icons.local_hospital = IconData.new(0xe548, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_hotel</i> &#x2014; material icon named "local hotel".
Icons.local_hotel = IconData.new(0xe549, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_laundry_service</i> &#x2014; material icon named "local laundry service".
Icons.local_laundry_service = IconData.new(0xe54a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_library</i> &#x2014; material icon named "local library".
Icons.local_library = IconData.new(0xe54b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_mall</i> &#x2014; material icon named "local mall".
Icons.local_mall = IconData.new(0xe54c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_movies</i> &#x2014; material icon named "local movies".
Icons.local_movies = IconData.new(0xe54d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_offer</i> &#x2014; material icon named "local offer".
Icons.local_offer = IconData.new(0xe54e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_parking</i> &#x2014; material icon named "local parking".
Icons.local_parking = IconData.new(0xe54f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_pharmacy</i> &#x2014; material icon named "local pharmacy".
Icons.local_pharmacy = IconData.new(0xe550, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_phone</i> &#x2014; material icon named "local phone".
Icons.local_phone = IconData.new(0xe551, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_pizza</i> &#x2014; material icon named "local pizza".
Icons.local_pizza = IconData.new(0xe552, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_play</i> &#x2014; material icon named "local play".
Icons.local_play = IconData.new(0xe553, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_post_office</i> &#x2014; material icon named "local post office".
Icons.local_post_office = IconData.new(0xe554, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_printshop</i> &#x2014; material icon named "local printshop".
Icons.local_printshop = IconData.new(0xe555, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_see</i> &#x2014; material icon named "local see".
Icons.local_see = IconData.new(0xe557, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_shipping</i> &#x2014; material icon named "local shipping".
Icons.local_shipping = IconData.new(0xe558, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">local_taxi</i> &#x2014; material icon named "local taxi".
Icons.local_taxi = IconData.new(0xe559, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">location_city</i> &#x2014; material icon named "location city".
Icons.location_city = IconData.new(0xe7f1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">location_disabled</i> &#x2014; material icon named "location disabled".
Icons.location_disabled = IconData.new(0xe1b6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">location_off</i> &#x2014; material icon named "location off".
Icons.location_off = IconData.new(0xe0c7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">location_on</i> &#x2014; material icon named "location on".
Icons.location_on = IconData.new(0xe0c8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">location_searching</i> &#x2014; material icon named "location searching".
Icons.location_searching = IconData.new(0xe1b7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">lock</i> &#x2014; material icon named "lock".
Icons.lock = IconData.new(0xe897, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">lock_open</i> &#x2014; material icon named "lock open".
Icons.lock_open = IconData.new(0xe898, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">lock_outline</i> &#x2014; material icon named "lock outline".
Icons.lock_outline = IconData.new(0xe899, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks</i> &#x2014; material icon named "looks".
Icons.looks = IconData.new(0xe3fc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_3</i> &#x2014; material icon named "looks 3".
Icons.looks_3 = IconData.new(0xe3fb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_4</i> &#x2014; material icon named "looks 4".
Icons.looks_4 = IconData.new(0xe3fd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_5</i> &#x2014; material icon named "looks 5".
Icons.looks_5 = IconData.new(0xe3fe, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_6</i> &#x2014; material icon named "looks 6".
Icons.looks_6 = IconData.new(0xe3ff, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_one</i> &#x2014; material icon named "looks one".
Icons.looks_one = IconData.new(0xe400, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">looks_two</i> &#x2014; material icon named "looks two".
Icons.looks_two = IconData.new(0xe401, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">loop</i> &#x2014; material icon named "loop".
Icons.loop = IconData.new(0xe028, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">loupe</i> &#x2014; material icon named "loupe".
Icons.loupe = IconData.new(0xe402, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">low_priority</i> &#x2014; material icon named "low priority".
Icons.low_priority = IconData.new(0xe16d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">loyalty</i> &#x2014; material icon named "loyalty".
Icons.loyalty = IconData.new(0xe89a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mail</i> &#x2014; material icon named "mail".
Icons.mail = IconData.new(0xe158, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mail_outline</i> &#x2014; material icon named "mail outline".
Icons.mail_outline = IconData.new(0xe0e1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">map</i> &#x2014; material icon named "map".
Icons.map = IconData.new(0xe55b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">markunread</i> &#x2014; material icon named "markunread".
Icons.markunread = IconData.new(0xe159, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">markunread_mailbox</i> &#x2014; material icon named "markunread mailbox".
Icons.markunread_mailbox = IconData.new(0xe89b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">maximize</i> &#x2014; material icon named "maximize".
Icons.maximize = IconData.new(0xe930, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">memory</i> &#x2014; material icon named "memory".
Icons.memory = IconData.new(0xe322, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">menu</i> &#x2014; material icon named "menu".
Icons.menu = IconData.new(0xe5d2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">merge_type</i> &#x2014; material icon named "merge type".
Icons.merge_type = IconData.new(0xe252, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">message</i> &#x2014; material icon named "message".
Icons.message = IconData.new(0xe0c9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mic</i> &#x2014; material icon named "mic".
Icons.mic = IconData.new(0xe029, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mic_none</i> &#x2014; material icon named "mic none".
Icons.mic_none = IconData.new(0xe02a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mic_off</i> &#x2014; material icon named "mic off".
Icons.mic_off = IconData.new(0xe02b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">minimize</i> &#x2014; material icon named "minimize".
Icons.minimize = IconData.new(0xe931, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">missed_video_call</i> &#x2014; material icon named "missed video call".
Icons.missed_video_call = IconData.new(0xe073, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mms</i> &#x2014; material icon named "mms".
Icons.mms = IconData.new(0xe618, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mobile_screen_share</i> &#x2014; material icon named "mobile screen share".
Icons.mobile_screen_share = IconData.new(0xe0e7, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">mode_comment</i> &#x2014; material icon named "mode comment".
Icons.mode_comment = IconData.new(0xe253, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mode_edit</i> &#x2014; material icon named "mode edit".
Icons.mode_edit = IconData.new(0xe254, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">monetization_on</i> &#x2014; material icon named "monetization on".
Icons.monetization_on = IconData.new(0xe263, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">money_off</i> &#x2014; material icon named "money off".
Icons.money_off = IconData.new(0xe25c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">monochrome_photos</i> &#x2014; material icon named "monochrome photos".
Icons.monochrome_photos = IconData.new(0xe403, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mood</i> &#x2014; material icon named "mood".
Icons.mood = IconData.new(0xe7f2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mood_bad</i> &#x2014; material icon named "mood bad".
Icons.mood_bad = IconData.new(0xe7f3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">more</i> &#x2014; material icon named "more".
Icons.more = IconData.new(0xe619, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">more_horiz</i> &#x2014; material icon named "more horiz".
Icons.more_horiz = IconData.new(0xe5d3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">more_vert</i> &#x2014; material icon named "more vert".
Icons.more_vert = IconData.new(0xe5d4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">motorcycle</i> &#x2014; material icon named "motorcycle".
Icons.motorcycle = IconData.new(0xe91b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">mouse</i> &#x2014; material icon named "mouse".
Icons.mouse = IconData.new(0xe323, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">move_to_inbox</i> &#x2014; material icon named "move to inbox".
Icons.move_to_inbox = IconData.new(0xe168, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">movie</i> &#x2014; material icon named "movie".
Icons.movie = IconData.new(0xe02c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">movie_creation</i> &#x2014; material icon named "movie creation".
Icons.movie_creation = IconData.new(0xe404, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">movie_filter</i> &#x2014; material icon named "movie filter".
Icons.movie_filter = IconData.new(0xe43a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">multiline_chart</i> &#x2014; material icon named "multiline chart".
Icons.multiline_chart = IconData.new(0xe6df, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">music_note</i> &#x2014; material icon named "music note".
Icons.music_note = IconData.new(0xe405, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">music_video</i> &#x2014; material icon named "music video".
Icons.music_video = IconData.new(0xe063, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">my_location</i> &#x2014; material icon named "my location".
Icons.my_location = IconData.new(0xe55c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">nature</i> &#x2014; material icon named "nature".
Icons.nature = IconData.new(0xe406, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">nature_people</i> &#x2014; material icon named "nature people".
Icons.nature_people = IconData.new(0xe407, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">navigate_before</i> &#x2014; material icon named "navigate before".
Icons.navigate_before = IconData.new(0xe408, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">navigate_next</i> &#x2014; material icon named "navigate next".
Icons.navigate_next = IconData.new(0xe409, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">navigation</i> &#x2014; material icon named "navigation".
Icons.navigation = IconData.new(0xe55d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">near_me</i> &#x2014; material icon named "near me".
Icons.near_me = IconData.new(0xe569, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">network_cell</i> &#x2014; material icon named "network cell".
Icons.network_cell = IconData.new(0xe1b9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">network_check</i> &#x2014; material icon named "network check".
Icons.network_check = IconData.new(0xe640, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">network_locked</i> &#x2014; material icon named "network locked".
Icons.network_locked = IconData.new(0xe61a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">network_wifi</i> &#x2014; material icon named "network wifi".
Icons.network_wifi = IconData.new(0xe1ba, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">new_releases</i> &#x2014; material icon named "new releases".
Icons.new_releases = IconData.new(0xe031, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">next_week</i> &#x2014; material icon named "next week".
Icons.next_week = IconData.new(0xe16a, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">nfc</i> &#x2014; material icon named "nfc".
Icons.nfc = IconData.new(0xe1bb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">no_encryption</i> &#x2014; material icon named "no encryption".
Icons.no_encryption = IconData.new(0xe641, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">no_sim</i> &#x2014; material icon named "no sim".
Icons.no_sim = IconData.new(0xe0cc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">not_interested</i> &#x2014; material icon named "not interested".
Icons.not_interested = IconData.new(0xe033, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">not_listed_location</i> &#x2014; material icon named "not listed location".
Icons.not_listed_location = IconData.new(0xe575, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">note</i> &#x2014; material icon named "note".
Icons.note = IconData.new(0xe06f, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">note_add</i> &#x2014; material icon named "note add".
Icons.note_add = IconData.new(0xe89c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notification_important</i> &#x2014; material icon named "notification important".
Icons.notification_important = IconData.new(0xe004, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notifications</i> &#x2014; material icon named "notifications".
Icons.notifications = IconData.new(0xe7f4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notifications_active</i> &#x2014; material icon named "notifications active".
Icons.notifications_active = IconData.new(0xe7f7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notifications_none</i> &#x2014; material icon named "notifications none".
Icons.notifications_none = IconData.new(0xe7f5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notifications_off</i> &#x2014; material icon named "notifications off".
Icons.notifications_off = IconData.new(0xe7f6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">notifications_paused</i> &#x2014; material icon named "notifications paused".
Icons.notifications_paused = IconData.new(0xe7f8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">offline_bolt</i> &#x2014; material icon named "offline bolt".
Icons.offline_bolt = IconData.new(0xe932, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">offline_pin</i> &#x2014; material icon named "offline pin".
Icons.offline_pin = IconData.new(0xe90a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">ondemand_video</i> &#x2014; material icon named "ondemand video".
Icons.ondemand_video = IconData.new(0xe63a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">opacity</i> &#x2014; material icon named "opacity".
Icons.opacity = IconData.new(0xe91c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">open_in_browser</i> &#x2014; material icon named "open in browser".
Icons.open_in_browser = IconData.new(0xe89d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">open_in_new</i> &#x2014; material icon named "open in new".
Icons.open_in_new = IconData.new(0xe89e, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">open_with</i> &#x2014; material icon named "open with".
Icons.open_with = IconData.new(0xe89f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">outlined_flag</i> &#x2014; material icon named "outlined flag".
Icons.outlined_flag = IconData.new(0xe16e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pages</i> &#x2014; material icon named "pages".
Icons.pages = IconData.new(0xe7f9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pageview</i> &#x2014; material icon named "pageview".
Icons.pageview = IconData.new(0xe8a0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">palette</i> &#x2014; material icon named "palette".
Icons.palette = IconData.new(0xe40a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pan_tool</i> &#x2014; material icon named "pan tool".
Icons.pan_tool = IconData.new(0xe925, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">panorama</i> &#x2014; material icon named "panorama".
Icons.panorama = IconData.new(0xe40b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">panorama_fish_eye</i> &#x2014; material icon named "panorama fish eye".
Icons.panorama_fish_eye = IconData.new(0xe40c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">panorama_horizontal</i> &#x2014; material icon named "panorama horizontal".
Icons.panorama_horizontal = IconData.new(0xe40d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">panorama_vertical</i> &#x2014; material icon named "panorama vertical".
Icons.panorama_vertical = IconData.new(0xe40e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">panorama_wide_angle</i> &#x2014; material icon named "panorama wide angle".
Icons.panorama_wide_angle = IconData.new(0xe40f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">party_mode</i> &#x2014; material icon named "party mode".
Icons.party_mode = IconData.new(0xe7fa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pause</i> &#x2014; material icon named "pause".
Icons.pause = IconData.new(0xe034, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pause_circle_filled</i> &#x2014; material icon named "pause circle filled".
Icons.pause_circle_filled = IconData.new(0xe035, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pause_circle_outline</i> &#x2014; material icon named "pause circle outline".
Icons.pause_circle_outline = IconData.new(0xe036, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">payment</i> &#x2014; material icon named "payment".
Icons.payment = IconData.new(0xe8a1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">people</i> &#x2014; material icon named "people".
Icons.people = IconData.new(0xe7fb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">people_outline</i> &#x2014; material icon named "people outline".
Icons.people_outline = IconData.new(0xe7fc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_camera_mic</i> &#x2014; material icon named "perm camera mic".
Icons.perm_camera_mic = IconData.new(0xe8a2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_contact_calendar</i> &#x2014; material icon named "perm contact calendar".
Icons.perm_contact_calendar = IconData.new(0xe8a3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_data_setting</i> &#x2014; material icon named "perm data setting".
Icons.perm_data_setting = IconData.new(0xe8a4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_device_information</i> &#x2014; material icon named "perm device information".
Icons.perm_device_information = IconData.new(0xe8a5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_identity</i> &#x2014; material icon named "perm identity".
Icons.perm_identity = IconData.new(0xe8a6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_media</i> &#x2014; material icon named "perm media".
Icons.perm_media = IconData.new(0xe8a7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_phone_msg</i> &#x2014; material icon named "perm phone msg".
Icons.perm_phone_msg = IconData.new(0xe8a8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">perm_scan_wifi</i> &#x2014; material icon named "perm scan wifi".
Icons.perm_scan_wifi = IconData.new(0xe8a9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">person</i> &#x2014; material icon named "person".
Icons.person = IconData.new(0xe7fd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">person_add</i> &#x2014; material icon named "person add".
Icons.person_add = IconData.new(0xe7fe, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">person_outline</i> &#x2014; material icon named "person outline".
Icons.person_outline = IconData.new(0xe7ff, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">person_pin</i> &#x2014; material icon named "person pin".
Icons.person_pin = IconData.new(0xe55a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">person_pin_circle</i> &#x2014; material icon named "person pin circle".
Icons.person_pin_circle = IconData.new(0xe56a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">personal_video</i> &#x2014; material icon named "personal video".
Icons.personal_video = IconData.new(0xe63b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pets</i> &#x2014; material icon named "pets".
Icons.pets = IconData.new(0xe91d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone</i> &#x2014; material icon named "phone".
Icons.phone = IconData.new(0xe0cd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_android</i> &#x2014; material icon named "phone android".
Icons.phone_android = IconData.new(0xe324, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_bluetooth_speaker</i> &#x2014; material icon named "phone bluetooth speaker".
Icons.phone_bluetooth_speaker = IconData.new(0xe61b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_forwarded</i> &#x2014; material icon named "phone forwarded".
Icons.phone_forwarded = IconData.new(0xe61c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_in_talk</i> &#x2014; material icon named "phone in talk".
Icons.phone_in_talk = IconData.new(0xe61d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_iphone</i> &#x2014; material icon named "phone iphone".
Icons.phone_iphone = IconData.new(0xe325, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_locked</i> &#x2014; material icon named "phone locked".
Icons.phone_locked = IconData.new(0xe61e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_missed</i> &#x2014; material icon named "phone missed".
Icons.phone_missed = IconData.new(0xe61f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phone_paused</i> &#x2014; material icon named "phone paused".
Icons.phone_paused = IconData.new(0xe620, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink</i> &#x2014; material icon named "phonelink".
Icons.phonelink = IconData.new(0xe326, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink_erase</i> &#x2014; material icon named "phonelink erase".
Icons.phonelink_erase = IconData.new(0xe0db, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink_lock</i> &#x2014; material icon named "phonelink lock".
Icons.phonelink_lock = IconData.new(0xe0dc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink_off</i> &#x2014; material icon named "phonelink off".
Icons.phonelink_off = IconData.new(0xe327, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink_ring</i> &#x2014; material icon named "phonelink ring".
Icons.phonelink_ring = IconData.new(0xe0dd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">phonelink_setup</i> &#x2014; material icon named "phonelink setup".
Icons.phonelink_setup = IconData.new(0xe0de, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo</i> &#x2014; material icon named "photo".
Icons.photo = IconData.new(0xe410, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_album</i> &#x2014; material icon named "photo album".
Icons.photo_album = IconData.new(0xe411, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_camera</i> &#x2014; material icon named "photo camera".
Icons.photo_camera = IconData.new(0xe412, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_filter</i> &#x2014; material icon named "photo filter".
Icons.photo_filter = IconData.new(0xe43b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_library</i> &#x2014; material icon named "photo library".
Icons.photo_library = IconData.new(0xe413, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_size_select_actual</i> &#x2014; material icon named "photo size select actual".
Icons.photo_size_select_actual = IconData.new(0xe432, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_size_select_large</i> &#x2014; material icon named "photo size select large".
Icons.photo_size_select_large = IconData.new(0xe433, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">photo_size_select_small</i> &#x2014; material icon named "photo size select small".
Icons.photo_size_select_small = IconData.new(0xe434, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">picture_as_pdf</i> &#x2014; material icon named "picture as pdf".
Icons.picture_as_pdf = IconData.new(0xe415, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">picture_in_picture</i> &#x2014; material icon named "picture in picture".
Icons.picture_in_picture = IconData.new(0xe8aa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">picture_in_picture_alt</i> &#x2014; material icon named "picture in picture alt".
Icons.picture_in_picture_alt = IconData.new(0xe911, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pie_chart</i> &#x2014; material icon named "pie chart".
Icons.pie_chart = IconData.new(0xe6c4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pie_chart_outlined</i> &#x2014; material icon named "pie chart outlined".
Icons.pie_chart_outlined = IconData.new(0xe6c5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pin_drop</i> &#x2014; material icon named "pin drop".
Icons.pin_drop = IconData.new(0xe55e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">place</i> &#x2014; material icon named "place".
Icons.place = IconData.new(0xe55f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">play_arrow</i> &#x2014; material icon named "play arrow".
Icons.play_arrow = IconData.new(0xe037, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">play_circle_filled</i> &#x2014; material icon named "play circle filled".
Icons.play_circle_filled = IconData.new(0xe038, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">play_circle_outline</i> &#x2014; material icon named "play circle outline".
Icons.play_circle_outline = IconData.new(0xe039, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">play_for_work</i> &#x2014; material icon named "play for work".
Icons.play_for_work = IconData.new(0xe906, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">playlist_add</i> &#x2014; material icon named "playlist add".
Icons.playlist_add = IconData.new(0xe03b, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">playlist_add_check</i> &#x2014; material icon named "playlist add check".
Icons.playlist_add_check = IconData.new(0xe065, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">playlist_play</i> &#x2014; material icon named "playlist play".
Icons.playlist_play = IconData.new(0xe05f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">plus_one</i> &#x2014; material icon named "plus one".
Icons.plus_one = IconData.new(0xe800, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">poll</i> &#x2014; material icon named "poll".
Icons.poll = IconData.new(0xe801, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">polymer</i> &#x2014; material icon named "polymer".
Icons.polymer = IconData.new(0xe8ab, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pool</i> &#x2014; material icon named "pool".
Icons.pool = IconData.new(0xeb48, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">portable_wifi_off</i> &#x2014; material icon named "portable wifi off".
Icons.portable_wifi_off = IconData.new(0xe0ce, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">portrait</i> &#x2014; material icon named "portrait".
Icons.portrait = IconData.new(0xe416, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">power</i> &#x2014; material icon named "power".
Icons.power = IconData.new(0xe63c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">power_input</i> &#x2014; material icon named "power input".
Icons.power_input = IconData.new(0xe336, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">power_settings_new</i> &#x2014; material icon named "power settings new".
Icons.power_settings_new = IconData.new(0xe8ac, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">pregnant_woman</i> &#x2014; material icon named "pregnant woman".
Icons.pregnant_woman = IconData.new(0xe91e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">present_to_all</i> &#x2014; material icon named "present to all".
Icons.present_to_all = IconData.new(0xe0df, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">print</i> &#x2014; material icon named "print".
Icons.print = IconData.new(0xe8ad, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">priority_high</i> &#x2014; material icon named "priority high".
Icons.priority_high = IconData.new(0xe645, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">public</i> &#x2014; material icon named "public".
Icons.public = IconData.new(0xe80b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">publish</i> &#x2014; material icon named "publish".
Icons.publish = IconData.new(0xe255, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">query_builder</i> &#x2014; material icon named "query builder".
Icons.query_builder = IconData.new(0xe8ae, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">question_answer</i> &#x2014; material icon named "question answer".
Icons.question_answer = IconData.new(0xe8af, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">queue</i> &#x2014; material icon named "queue".
Icons.queue = IconData.new(0xe03c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">queue_music</i> &#x2014; material icon named "queue music".
Icons.queue_music = IconData.new(0xe03d, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">queue_play_next</i> &#x2014; material icon named "queue play next".
Icons.queue_play_next = IconData.new(0xe066, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">radio</i> &#x2014; material icon named "radio".
Icons.radio = IconData.new(0xe03e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">radio_button_checked</i> &#x2014; material icon named "radio button checked".
Icons.radio_button_checked = IconData.new(0xe837, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">radio_button_unchecked</i> &#x2014; material icon named "radio button unchecked".
Icons.radio_button_unchecked = IconData.new(0xe836, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rate_review</i> &#x2014; material icon named "rate review".
Icons.rate_review = IconData.new(0xe560, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">receipt</i> &#x2014; material icon named "receipt".
Icons.receipt = IconData.new(0xe8b0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">recent_actors</i> &#x2014; material icon named "recent actors".
Icons.recent_actors = IconData.new(0xe03f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">record_voice_over</i> &#x2014; material icon named "record voice over".
Icons.record_voice_over = IconData.new(0xe91f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">redeem</i> &#x2014; material icon named "redeem".
Icons.redeem = IconData.new(0xe8b1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">redo</i> &#x2014; material icon named "redo".
Icons.redo = IconData.new(0xe15a, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">refresh</i> &#x2014; material icon named "refresh".
Icons.refresh = IconData.new(0xe5d5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove</i> &#x2014; material icon named "remove".
Icons.remove = IconData.new(0xe15b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove_circle</i> &#x2014; material icon named "remove circle".
Icons.remove_circle = IconData.new(0xe15c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove_circle_outline</i> &#x2014; material icon named "remove circle outline".
Icons.remove_circle_outline = IconData.new(0xe15d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove_from_queue</i> &#x2014; material icon named "remove from queue".
Icons.remove_from_queue = IconData.new(0xe067, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove_red_eye</i> &#x2014; material icon named "remove red eye".
Icons.remove_red_eye = IconData.new(0xe417, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">remove_shopping_cart</i> &#x2014; material icon named "remove shopping cart".
Icons.remove_shopping_cart = IconData.new(0xe928, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">reorder</i> &#x2014; material icon named "reorder".
Icons.reorder = IconData.new(0xe8fe, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">repeat</i> &#x2014; material icon named "repeat".
Icons.repeat = IconData.new(0xe040, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">repeat_one</i> &#x2014; material icon named "repeat one".
Icons.repeat_one = IconData.new(0xe041, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">replay</i> &#x2014; material icon named "replay".
Icons.replay = IconData.new(0xe042, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">replay_10</i> &#x2014; material icon named "replay 10".
Icons.replay_10 = IconData.new(0xe059, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">replay_30</i> &#x2014; material icon named "replay 30".
Icons.replay_30 = IconData.new(0xe05a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">replay_5</i> &#x2014; material icon named "replay 5".
Icons.replay_5 = IconData.new(0xe05b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">reply</i> &#x2014; material icon named "reply".
Icons.reply = IconData.new(0xe15e, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">reply_all</i> &#x2014; material icon named "reply all".
Icons.reply_all = IconData.new(0xe15f, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">report</i> &#x2014; material icon named "report".
Icons.report = IconData.new(0xe160, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">report_off</i> &#x2014; material icon named "report off".
Icons.report_off = IconData.new(0xe170, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">report_problem</i> &#x2014; material icon named "report problem".
Icons.report_problem = IconData.new(0xe8b2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">restaurant</i> &#x2014; material icon named "restaurant".
Icons.restaurant = IconData.new(0xe56c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">restaurant_menu</i> &#x2014; material icon named "restaurant menu".
Icons.restaurant_menu = IconData.new(0xe561, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">restore</i> &#x2014; material icon named "restore".
Icons.restore = IconData.new(0xe8b3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">restore_from_trash</i> &#x2014; material icon named "restore from trash".
Icons.restore_from_trash = IconData.new(0xe938, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">restore_page</i> &#x2014; material icon named "restore page".
Icons.restore_page = IconData.new(0xe929, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">ring_volume</i> &#x2014; material icon named "ring volume".
Icons.ring_volume = IconData.new(0xe0d1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">room</i> &#x2014; material icon named "room".
Icons.room = IconData.new(0xe8b4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">room_service</i> &#x2014; material icon named "room service".
Icons.room_service = IconData.new(0xeb49, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rotate_90_degrees_ccw</i> &#x2014; material icon named "rotate 90 degrees ccw".
Icons.rotate_90_degrees_ccw = IconData.new(0xe418, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rotate_left</i> &#x2014; material icon named "rotate left".
Icons.rotate_left = IconData.new(0xe419, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rotate_right</i> &#x2014; material icon named "rotate right".
Icons.rotate_right = IconData.new(0xe41a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rounded_corner</i> &#x2014; material icon named "rounded corner".
Icons.rounded_corner = IconData.new(0xe920, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">router</i> &#x2014; material icon named "router".
Icons.router = IconData.new(0xe328, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rowing</i> &#x2014; material icon named "rowing".
Icons.rowing = IconData.new(0xe921, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rss_feed</i> &#x2014; material icon named "rss feed".
Icons.rss_feed = IconData.new(0xe0e5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">rv_hookup</i> &#x2014; material icon named "rv hookup".
Icons.rv_hookup = IconData.new(0xe642, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">satellite</i> &#x2014; material icon named "satellite".
Icons.satellite = IconData.new(0xe562, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">save</i> &#x2014; material icon named "save".
Icons.save = IconData.new(0xe161, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">save_alt</i> &#x2014; material icon named "save alt".
Icons.save_alt = IconData.new(0xe171, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">scanner</i> &#x2014; material icon named "scanner".
Icons.scanner = IconData.new(0xe329, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">scatter_plot</i> &#x2014; material icon named "scatter plot".
Icons.scatter_plot = IconData.new(0xe268, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">schedule</i> &#x2014; material icon named "schedule".
Icons.schedule = IconData.new(0xe8b5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">school</i> &#x2014; material icon named "school".
Icons.school = IconData.new(0xe80c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">score</i> &#x2014; material icon named "score".
Icons.score = IconData.new(0xe269, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">screen_lock_landscape</i> &#x2014; material icon named "screen lock landscape".
Icons.screen_lock_landscape = IconData.new(0xe1be, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">screen_lock_portrait</i> &#x2014; material icon named "screen lock portrait".
Icons.screen_lock_portrait = IconData.new(0xe1bf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">screen_lock_rotation</i> &#x2014; material icon named "screen lock rotation".
Icons.screen_lock_rotation = IconData.new(0xe1c0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">screen_rotation</i> &#x2014; material icon named "screen rotation".
Icons.screen_rotation = IconData.new(0xe1c1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">screen_share</i> &#x2014; material icon named "screen share".
Icons.screen_share = IconData.new(0xe0e2, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">sd_card</i> &#x2014; material icon named "sd card".
Icons.sd_card = IconData.new(0xe623, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sd_storage</i> &#x2014; material icon named "sd storage".
Icons.sd_storage = IconData.new(0xe1c2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">search</i> &#x2014; material icon named "search".
Icons.search = IconData.new(0xe8b6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">security</i> &#x2014; material icon named "security".
Icons.security = IconData.new(0xe32a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">select_all</i> &#x2014; material icon named "select all".
Icons.select_all = IconData.new(0xe162, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">send</i> &#x2014; material icon named "send".
Icons.send = IconData.new(0xe163, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">sentiment_dissatisfied</i> &#x2014; material icon named "sentiment dissatisfied".
Icons.sentiment_dissatisfied = IconData.new(0xe811, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sentiment_neutral</i> &#x2014; material icon named "sentiment neutral".
Icons.sentiment_neutral = IconData.new(0xe812, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sentiment_satisfied</i> &#x2014; material icon named "sentiment satisfied".
Icons.sentiment_satisfied = IconData.new(0xe813, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sentiment_very_dissatisfied</i> &#x2014; material icon named "sentiment very dissatisfied".
Icons.sentiment_very_dissatisfied = IconData.new(0xe814, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sentiment_very_satisfied</i> &#x2014; material icon named "sentiment very satisfied".
Icons.sentiment_very_satisfied = IconData.new(0xe815, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings</i> &#x2014; material icon named "settings".
Icons.settings = IconData.new(0xe8b8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_applications</i> &#x2014; material icon named "settings applications".
Icons.settings_applications = IconData.new(0xe8b9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_backup_restore</i> &#x2014; material icon named "settings backup restore".
Icons.settings_backup_restore = IconData.new(0xe8ba, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_bluetooth</i> &#x2014; material icon named "settings bluetooth".
Icons.settings_bluetooth = IconData.new(0xe8bb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_brightness</i> &#x2014; material icon named "settings brightness".
Icons.settings_brightness = IconData.new(0xe8bd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_cell</i> &#x2014; material icon named "settings cell".
Icons.settings_cell = IconData.new(0xe8bc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_ethernet</i> &#x2014; material icon named "settings ethernet".
Icons.settings_ethernet = IconData.new(0xe8be, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_input_antenna</i> &#x2014; material icon named "settings input antenna".
Icons.settings_input_antenna = IconData.new(0xe8bf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_input_component</i> &#x2014; material icon named "settings input component".
Icons.settings_input_component = IconData.new(0xe8c0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_input_composite</i> &#x2014; material icon named "settings input composite".
Icons.settings_input_composite = IconData.new(0xe8c1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_input_hdmi</i> &#x2014; material icon named "settings input hdmi".
Icons.settings_input_hdmi = IconData.new(0xe8c2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_input_svideo</i> &#x2014; material icon named "settings input svideo".
Icons.settings_input_svideo = IconData.new(0xe8c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_overscan</i> &#x2014; material icon named "settings overscan".
Icons.settings_overscan = IconData.new(0xe8c4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_phone</i> &#x2014; material icon named "settings phone".
Icons.settings_phone = IconData.new(0xe8c5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_power</i> &#x2014; material icon named "settings power".
Icons.settings_power = IconData.new(0xe8c6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_remote</i> &#x2014; material icon named "settings remote".
Icons.settings_remote = IconData.new(0xe8c7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_system_daydream</i> &#x2014; material icon named "settings system daydream".
Icons.settings_system_daydream = IconData.new(0xe1c3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">settings_voice</i> &#x2014; material icon named "settings voice".
Icons.settings_voice = IconData.new(0xe8c8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">share</i> &#x2014; material icon named "share".
Icons.share = IconData.new(0xe80d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">shop</i> &#x2014; material icon named "shop".
Icons.shop = IconData.new(0xe8c9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">shop_two</i> &#x2014; material icon named "shop two".
Icons.shop_two = IconData.new(0xe8ca, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">shopping_basket</i> &#x2014; material icon named "shopping basket".
Icons.shopping_basket = IconData.new(0xe8cb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">shopping_cart</i> &#x2014; material icon named "shopping cart".
Icons.shopping_cart = IconData.new(0xe8cc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">short_text</i> &#x2014; material icon named "short text".
Icons.short_text = IconData.new(0xe261, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">show_chart</i> &#x2014; material icon named "show chart".
Icons.show_chart = IconData.new(0xe6e1, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">shuffle</i> &#x2014; material icon named "shuffle".
Icons.shuffle = IconData.new(0xe043, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">shutter_speed</i> &#x2014; material icon named "shutter speed".
Icons.shutter_speed = IconData.new(0xe43d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_cellular_4_bar</i> &#x2014; material icon named "signal cellular 4 bar".
Icons.signal_cellular_4_bar = IconData.new(0xe1c8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_cellular_connected_no_internet_4_bar</i> &#x2014; material icon named "signal cellular connected no internet 4 bar".
Icons.signal_cellular_connected_no_internet_4_bar = IconData.new(0xe1cd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_cellular_no_sim</i> &#x2014; material icon named "signal cellular no sim".
Icons.signal_cellular_no_sim = IconData.new(0xe1ce, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_cellular_null</i> &#x2014; material icon named "signal cellular null".
Icons.signal_cellular_null = IconData.new(0xe1cf, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_cellular_off</i> &#x2014; material icon named "signal cellular off".
Icons.signal_cellular_off = IconData.new(0xe1d0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_wifi_4_bar</i> &#x2014; material icon named "signal wifi 4 bar".
Icons.signal_wifi_4_bar = IconData.new(0xe1d8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_wifi_4_bar_lock</i> &#x2014; material icon named "signal wifi 4 bar lock".
Icons.signal_wifi_4_bar_lock = IconData.new(0xe1d9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">signal_wifi_off</i> &#x2014; material icon named "signal wifi off".
Icons.signal_wifi_off = IconData.new(0xe1da, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sim_card</i> &#x2014; material icon named "sim card".
Icons.sim_card = IconData.new(0xe32b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sim_card_alert</i> &#x2014; material icon named "sim card alert".
Icons.sim_card_alert = IconData.new(0xe624, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">skip_next</i> &#x2014; material icon named "skip next".
Icons.skip_next = IconData.new(0xe044, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">skip_previous</i> &#x2014; material icon named "skip previous".
Icons.skip_previous = IconData.new(0xe045, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">slideshow</i> &#x2014; material icon named "slideshow".
Icons.slideshow = IconData.new(0xe41b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">slow_motion_video</i> &#x2014; material icon named "slow motion video".
Icons.slow_motion_video = IconData.new(0xe068, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">smartphone</i> &#x2014; material icon named "smartphone".
Icons.smartphone = IconData.new(0xe32c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">smoke_free</i> &#x2014; material icon named "smoke free".
Icons.smoke_free = IconData.new(0xeb4a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">smoking_rooms</i> &#x2014; material icon named "smoking rooms".
Icons.smoking_rooms = IconData.new(0xeb4b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sms</i> &#x2014; material icon named "sms".
Icons.sms = IconData.new(0xe625, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sms_failed</i> &#x2014; material icon named "sms failed".
Icons.sms_failed = IconData.new(0xe626, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">snooze</i> &#x2014; material icon named "snooze".
Icons.snooze = IconData.new(0xe046, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sort</i> &#x2014; material icon named "sort".
Icons.sort = IconData.new(0xe164, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">sort_by_alpha</i> &#x2014; material icon named "sort by alpha".
Icons.sort_by_alpha = IconData.new(0xe053, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">spa</i> &#x2014; material icon named "spa".
Icons.spa = IconData.new(0xeb4c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">space_bar</i> &#x2014; material icon named "space bar".
Icons.space_bar = IconData.new(0xe256, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">speaker</i> &#x2014; material icon named "speaker".
Icons.speaker = IconData.new(0xe32d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">speaker_group</i> &#x2014; material icon named "speaker group".
Icons.speaker_group = IconData.new(0xe32e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">speaker_notes</i> &#x2014; material icon named "speaker notes".
Icons.speaker_notes = IconData.new(0xe8cd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">speaker_notes_off</i> &#x2014; material icon named "speaker notes off".
Icons.speaker_notes_off = IconData.new(0xe92a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">speaker_phone</i> &#x2014; material icon named "speaker phone".
Icons.speaker_phone = IconData.new(0xe0d2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">spellcheck</i> &#x2014; material icon named "spellcheck".
Icons.spellcheck = IconData.new(0xe8ce, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">star</i> &#x2014; material icon named "star".
Icons.star = IconData.new(0xe838, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">star_border</i> &#x2014; material icon named "star border".
Icons.star_border = IconData.new(0xe83a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">star_half</i> &#x2014; material icon named "star half".
Icons.star_half = IconData.new(0xe839, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">stars</i> &#x2014; material icon named "stars".
Icons.stars = IconData.new(0xe8d0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stay_current_landscape</i> &#x2014; material icon named "stay current landscape".
Icons.stay_current_landscape = IconData.new(0xe0d3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stay_current_portrait</i> &#x2014; material icon named "stay current portrait".
Icons.stay_current_portrait = IconData.new(0xe0d4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stay_primary_landscape</i> &#x2014; material icon named "stay primary landscape".
Icons.stay_primary_landscape = IconData.new(0xe0d5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stay_primary_portrait</i> &#x2014; material icon named "stay primary portrait".
Icons.stay_primary_portrait = IconData.new(0xe0d6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stop</i> &#x2014; material icon named "stop".
Icons.stop = IconData.new(0xe047, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">stop_screen_share</i> &#x2014; material icon named "stop screen share".
Icons.stop_screen_share = IconData.new(0xe0e3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">storage</i> &#x2014; material icon named "storage".
Icons.storage = IconData.new(0xe1db, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">store</i> &#x2014; material icon named "store".
Icons.store = IconData.new(0xe8d1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">store_mall_directory</i> &#x2014; material icon named "store mall directory".
Icons.store_mall_directory = IconData.new(0xe563, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">straighten</i> &#x2014; material icon named "straighten".
Icons.straighten = IconData.new(0xe41c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">streetview</i> &#x2014; material icon named "streetview".
Icons.streetview = IconData.new(0xe56e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">strikethrough_s</i> &#x2014; material icon named "strikethrough s".
Icons.strikethrough_s = IconData.new(0xe257, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">style</i> &#x2014; material icon named "style".
Icons.style = IconData.new(0xe41d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">subdirectory_arrow_left</i> &#x2014; material icon named "subdirectory arrow left".
Icons.subdirectory_arrow_left = IconData.new(0xe5d9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">subdirectory_arrow_right</i> &#x2014; material icon named "subdirectory arrow right".
Icons.subdirectory_arrow_right = IconData.new(0xe5da, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">subject</i> &#x2014; material icon named "subject".
Icons.subject = IconData.new(0xe8d2, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">subscriptions</i> &#x2014; material icon named "subscriptions".
Icons.subscriptions = IconData.new(0xe064, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">subtitles</i> &#x2014; material icon named "subtitles".
Icons.subtitles = IconData.new(0xe048, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">subway</i> &#x2014; material icon named "subway".
Icons.subway = IconData.new(0xe56f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">supervised_user_circle</i> &#x2014; material icon named "supervised user circle".
Icons.supervised_user_circle = IconData.new(0xe939, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">supervisor_account</i> &#x2014; material icon named "supervisor account".
Icons.supervisor_account = IconData.new(0xe8d3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">surround_sound</i> &#x2014; material icon named "surround sound".
Icons.surround_sound = IconData.new(0xe049, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">swap_calls</i> &#x2014; material icon named "swap calls".
Icons.swap_calls = IconData.new(0xe0d7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">swap_horiz</i> &#x2014; material icon named "swap horiz".
Icons.swap_horiz = IconData.new(0xe8d4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">swap_horizontal_circle</i> &#x2014; material icon named "swap horizontal circle".
Icons.swap_horizontal_circle = IconData.new(0xe933, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">swap_vert</i> &#x2014; material icon named "swap vert".
Icons.swap_vert = IconData.new(0xe8d5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">swap_vertical_circle</i> &#x2014; material icon named "swap vertical circle".
Icons.swap_vertical_circle = IconData.new(0xe8d6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">switch_camera</i> &#x2014; material icon named "switch camera".
Icons.switch_camera = IconData.new(0xe41e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">switch_video</i> &#x2014; material icon named "switch video".
Icons.switch_video = IconData.new(0xe41f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sync</i> &#x2014; material icon named "sync".
Icons.sync = IconData.new(0xe627, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sync_disabled</i> &#x2014; material icon named "sync disabled".
Icons.sync_disabled = IconData.new(0xe628, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">sync_problem</i> &#x2014; material icon named "sync problem".
Icons.sync_problem = IconData.new(0xe629, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">system_update</i> &#x2014; material icon named "system update".
Icons.system_update = IconData.new(0xe62a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">system_update_alt</i> &#x2014; material icon named "system update alt".
Icons.system_update_alt = IconData.new(0xe8d7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tab</i> &#x2014; material icon named "tab".
Icons.tab = IconData.new(0xe8d8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tab_unselected</i> &#x2014; material icon named "tab unselected".
Icons.tab_unselected = IconData.new(0xe8d9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">table_chart</i> &#x2014; material icon named "table chart".
Icons.table_chart = IconData.new(0xe265, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tablet</i> &#x2014; material icon named "tablet".
Icons.tablet = IconData.new(0xe32f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tablet_android</i> &#x2014; material icon named "tablet android".
Icons.tablet_android = IconData.new(0xe330, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tablet_mac</i> &#x2014; material icon named "tablet mac".
Icons.tablet_mac = IconData.new(0xe331, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tag_faces</i> &#x2014; material icon named "tag faces".
Icons.tag_faces = IconData.new(0xe420, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tap_and_play</i> &#x2014; material icon named "tap and play".
Icons.tap_and_play = IconData.new(0xe62b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">terrain</i> &#x2014; material icon named "terrain".
Icons.terrain = IconData.new(0xe564, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_fields</i> &#x2014; material icon named "text fields".
Icons.text_fields = IconData.new(0xe262, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_format</i> &#x2014; material icon named "text format".
Icons.text_format = IconData.new(0xe165, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotate_up</i> &#x2014; material icon named "text rotate up".
Icons.text_rotate_up = IconData.new(0xe93a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotate_vertical</i> &#x2014; material icon named "text rotate vertical".
Icons.text_rotate_vertical = IconData.new(0xe93b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotation_angledown</i> &#x2014; material icon named "text rotation angledown".
Icons.text_rotation_angledown = IconData.new(0xe93c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotation_angleup</i> &#x2014; material icon named "text rotation angleup".
Icons.text_rotation_angleup = IconData.new(0xe93d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotation_down</i> &#x2014; material icon named "text rotation down".
Icons.text_rotation_down = IconData.new(0xe93e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">text_rotation_none</i> &#x2014; material icon named "text rotation none".
Icons.text_rotation_none = IconData.new(0xe93f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">textsms</i> &#x2014; material icon named "textsms".
Icons.textsms = IconData.new(0xe0d8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">texture</i> &#x2014; material icon named "texture".
Icons.texture = IconData.new(0xe421, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">theaters</i> &#x2014; material icon named "theaters".
Icons.theaters = IconData.new(0xe8da, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">thumb_down</i> &#x2014; material icon named "thumb down".
Icons.thumb_down = IconData.new(0xe8db, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">thumb_up</i> &#x2014; material icon named "thumb up".
Icons.thumb_up = IconData.new(0xe8dc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">thumbs_up_down</i> &#x2014; material icon named "thumbs up down".
Icons.thumbs_up_down = IconData.new(0xe8dd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">time_to_leave</i> &#x2014; material icon named "time to leave".
Icons.time_to_leave = IconData.new(0xe62c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timelapse</i> &#x2014; material icon named "timelapse".
Icons.timelapse = IconData.new(0xe422, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timeline</i> &#x2014; material icon named "timeline".
Icons.timeline = IconData.new(0xe922, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timer</i> &#x2014; material icon named "timer".
Icons.timer = IconData.new(0xe425, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timer_10</i> &#x2014; material icon named "timer 10".
Icons.timer_10 = IconData.new(0xe423, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timer_3</i> &#x2014; material icon named "timer 3".
Icons.timer_3 = IconData.new(0xe424, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">timer_off</i> &#x2014; material icon named "timer off".
Icons.timer_off = IconData.new(0xe426, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">title</i> &#x2014; material icon named "title".
Icons.title = IconData.new(0xe264, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">toc</i> &#x2014; material icon named "toc".
Icons.toc = IconData.new(0xe8de, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">today</i> &#x2014; material icon named "today".
Icons.today = IconData.new(0xe8df, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">toll</i> &#x2014; material icon named "toll".
Icons.toll = IconData.new(0xe8e0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tonality</i> &#x2014; material icon named "tonality".
Icons.tonality = IconData.new(0xe427, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">touch_app</i> &#x2014; material icon named "touch app".
Icons.touch_app = IconData.new(0xe913, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">toys</i> &#x2014; material icon named "toys".
Icons.toys = IconData.new(0xe332, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">track_changes</i> &#x2014; material icon named "track changes".
Icons.track_changes = IconData.new(0xe8e1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">traffic</i> &#x2014; material icon named "traffic".
Icons.traffic = IconData.new(0xe565, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">train</i> &#x2014; material icon named "train".
Icons.train = IconData.new(0xe570, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tram</i> &#x2014; material icon named "tram".
Icons.tram = IconData.new(0xe571, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">transfer_within_a_station</i> &#x2014; material icon named "transfer within a station".
Icons.transfer_within_a_station = IconData.new(0xe572, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">transform</i> &#x2014; material icon named "transform".
Icons.transform = IconData.new(0xe428, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">transit_enterexit</i> &#x2014; material icon named "transit enterexit".
Icons.transit_enterexit = IconData.new(0xe579, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">translate</i> &#x2014; material icon named "translate".
Icons.translate = IconData.new(0xe8e2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">trending_down</i> &#x2014; material icon named "trending down".
Icons.trending_down = IconData.new(0xe8e3, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">trending_flat</i> &#x2014; material icon named "trending flat".
Icons.trending_flat = IconData.new(0xe8e4, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">trending_up</i> &#x2014; material icon named "trending up".
Icons.trending_up = IconData.new(0xe8e5, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">trip_origin</i> &#x2014; material icon named "trip origin".
Icons.trip_origin = IconData.new(0xe57b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tune</i> &#x2014; material icon named "tune".
Icons.tune = IconData.new(0xe429, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">turned_in</i> &#x2014; material icon named "turned in".
Icons.turned_in = IconData.new(0xe8e6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">turned_in_not</i> &#x2014; material icon named "turned in not".
Icons.turned_in_not = IconData.new(0xe8e7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">tv</i> &#x2014; material icon named "tv".
Icons.tv = IconData.new(0xe333, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">unarchive</i> &#x2014; material icon named "unarchive".
Icons.unarchive = IconData.new(0xe169, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">undo</i> &#x2014; material icon named "undo".
Icons.undo = IconData.new(0xe166, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">unfold_less</i> &#x2014; material icon named "unfold less".
Icons.unfold_less = IconData.new(0xe5d6, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">unfold_more</i> &#x2014; material icon named "unfold more".
Icons.unfold_more = IconData.new(0xe5d7, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">update</i> &#x2014; material icon named "update".
Icons.update = IconData.new(0xe923, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">usb</i> &#x2014; material icon named "usb".
Icons.usb = IconData.new(0xe1e0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">verified_user</i> &#x2014; material icon named "verified user".
Icons.verified_user = IconData.new(0xe8e8, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vertical_align_bottom</i> &#x2014; material icon named "vertical align bottom".
Icons.vertical_align_bottom = IconData.new(0xe258, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vertical_align_center</i> &#x2014; material icon named "vertical align center".
Icons.vertical_align_center = IconData.new(0xe259, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vertical_align_top</i> &#x2014; material icon named "vertical align top".
Icons.vertical_align_top = IconData.new(0xe25a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vibration</i> &#x2014; material icon named "vibration".
Icons.vibration = IconData.new(0xe62d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">video_call</i> &#x2014; material icon named "video call".
Icons.video_call = IconData.new(0xe070, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">video_label</i> &#x2014; material icon named "video label".
Icons.video_label = IconData.new(0xe071, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">video_library</i> &#x2014; material icon named "video library".
Icons.video_library = IconData.new(0xe04a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">videocam</i> &#x2014; material icon named "videocam".
Icons.videocam = IconData.new(0xe04b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">videocam_off</i> &#x2014; material icon named "videocam off".
Icons.videocam_off = IconData.new(0xe04c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">videogame_asset</i> &#x2014; material icon named "videogame asset".
Icons.videogame_asset = IconData.new(0xe338, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_agenda</i> &#x2014; material icon named "view agenda".
Icons.view_agenda = IconData.new(0xe8e9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_array</i> &#x2014; material icon named "view array".
Icons.view_array = IconData.new(0xe8ea, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_carousel</i> &#x2014; material icon named "view carousel".
Icons.view_carousel = IconData.new(0xe8eb, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_column</i> &#x2014; material icon named "view column".
Icons.view_column = IconData.new(0xe8ec, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_comfy</i> &#x2014; material icon named "view comfy".
Icons.view_comfy = IconData.new(0xe42a, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_compact</i> &#x2014; material icon named "view compact".
Icons.view_compact = IconData.new(0xe42b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_day</i> &#x2014; material icon named "view day".
Icons.view_day = IconData.new(0xe8ed, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_headline</i> &#x2014; material icon named "view headline".
Icons.view_headline = IconData.new(0xe8ee, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_list</i> &#x2014; material icon named "view list".
Icons.view_list = IconData.new(0xe8ef, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">view_module</i> &#x2014; material icon named "view module".
Icons.view_module = IconData.new(0xe8f0, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_quilt</i> &#x2014; material icon named "view quilt".
Icons.view_quilt = IconData.new(0xe8f1, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">view_stream</i> &#x2014; material icon named "view stream".
Icons.view_stream = IconData.new(0xe8f2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">view_week</i> &#x2014; material icon named "view week".
Icons.view_week = IconData.new(0xe8f3, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vignette</i> &#x2014; material icon named "vignette".
Icons.vignette = IconData.new(0xe435, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">visibility</i> &#x2014; material icon named "visibility".
Icons.visibility = IconData.new(0xe8f4, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">visibility_off</i> &#x2014; material icon named "visibility off".
Icons.visibility_off = IconData.new(0xe8f5, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">voice_chat</i> &#x2014; material icon named "voice chat".
Icons.voice_chat = IconData.new(0xe62e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">voicemail</i> &#x2014; material icon named "voicemail".
Icons.voicemail = IconData.new(0xe0d9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">volume_down</i> &#x2014; material icon named "volume down".
Icons.volume_down = IconData.new(0xe04d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">volume_mute</i> &#x2014; material icon named "volume mute".
Icons.volume_mute = IconData.new(0xe04e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">volume_off</i> &#x2014; material icon named "volume off".
Icons.volume_off = IconData.new(0xe04f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">volume_up</i> &#x2014; material icon named "volume up".
Icons.volume_up = IconData.new(0xe050, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vpn_key</i> &#x2014; material icon named "vpn key".
Icons.vpn_key = IconData.new(0xe0da, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">vpn_lock</i> &#x2014; material icon named "vpn lock".
Icons.vpn_lock = IconData.new(0xe62f, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wallpaper</i> &#x2014; material icon named "wallpaper".
Icons.wallpaper = IconData.new(0xe1bc, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">warning</i> &#x2014; material icon named "warning".
Icons.warning = IconData.new(0xe002, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">watch</i> &#x2014; material icon named "watch".
Icons.watch = IconData.new(0xe334, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">watch_later</i> &#x2014; material icon named "watch later".
Icons.watch_later = IconData.new(0xe924, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wb_auto</i> &#x2014; material icon named "wb auto".
Icons.wb_auto = IconData.new(0xe42c, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wb_cloudy</i> &#x2014; material icon named "wb cloudy".
Icons.wb_cloudy = IconData.new(0xe42d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wb_incandescent</i> &#x2014; material icon named "wb incandescent".
Icons.wb_incandescent = IconData.new(0xe42e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wb_iridescent</i> &#x2014; material icon named "wb iridescent".
Icons.wb_iridescent = IconData.new(0xe436, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wb_sunny</i> &#x2014; material icon named "wb sunny".
Icons.wb_sunny = IconData.new(0xe430, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wc</i> &#x2014; material icon named "wc".
Icons.wc = IconData.new(0xe63d, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">web</i> &#x2014; material icon named "web".
Icons.web = IconData.new(0xe051, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">web_asset</i> &#x2014; material icon named "web asset".
Icons.web_asset = IconData.new(0xe069, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">weekend</i> &#x2014; material icon named "weekend".
Icons.weekend = IconData.new(0xe16b, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">whatshot</i> &#x2014; material icon named "whatshot".
Icons.whatshot = IconData.new(0xe80e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">widgets</i> &#x2014; material icon named "widgets".
Icons.widgets = IconData.new(0xe1bd, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wifi</i> &#x2014; material icon named "wifi".
Icons.wifi = IconData.new(0xe63e, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wifi_lock</i> &#x2014; material icon named "wifi lock".
Icons.wifi_lock = IconData.new(0xe1e1, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wifi_tethering</i> &#x2014; material icon named "wifi tethering".
Icons.wifi_tethering = IconData.new(0xe1e2, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">work</i> &#x2014; material icon named "work".
Icons.work = IconData.new(0xe8f9, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">wrap_text</i> &#x2014; material icon named "wrap text".
Icons.wrap_text = IconData.new(0xe25b, { fontFamily: 'MaterialIcons', matchTextDirection: true });
/// <i class="material-icons md-36">youtube_searched_for</i> &#x2014; material icon named "youtube searched for".
Icons.youtube_searched_for = IconData.new(0xe8fa, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">zoom_in</i> &#x2014; material icon named "zoom in".
Icons.zoom_in = IconData.new(0xe8ff, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">zoom_out</i> &#x2014; material icon named "zoom out".
Icons.zoom_out = IconData.new(0xe900, { fontFamily: 'MaterialIcons' });
/// <i class="material-icons md-36">zoom_out_map</i> &#x2014; material icon named "zoom out map".
Icons.zoom_out_map = IconData.new(0xe56b, { fontFamily: 'MaterialIcons' });
//#endregion
//#region ******* CupertinoIcons ********
class CupertinoIcons extends IconData {
}
exports.CupertinoIcons = CupertinoIcons;
/// A thin left chevron.
CupertinoIcons.left_chevron = IconData.new(0xf3d2, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true });
/// A thin right chevron.
CupertinoIcons.right_chevron = IconData.new(0xf3d3, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true });
/// iOS style share icon with an arrow pointing up from a box. This icon is not filled in.
CupertinoIcons.share = IconData.new(0xf4ca, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// iOS style share icon with an arrow pointing up from a box. This icon is filled in.
CupertinoIcons.share_solid = IconData.new(0xf4cb, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A book silhouette spread open. This icon is not filled in.
CupertinoIcons.book = IconData.new(0xf3e7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A book silhouette spread open. This icon is filled in.
CupertinoIcons.book_solid = IconData.new(0xf3e8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A book silhouette spread open containing a bookmark in the upper right. This icon is not filled in.
CupertinoIcons.bookmark = IconData.new(0xf3e9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A book silhouette spread open containing a bookmark in the upper right. This icon is filled in.
CupertinoIcons.bookmark_solid = IconData.new(0xf3ea, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A letter 'i' in a circle.
CupertinoIcons.info = IconData.new(0xf44c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A curved up and left pointing arrow.
CupertinoIcons.reply = IconData.new(0xf4c6, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A chat bubble.
CupertinoIcons.conversation_bubble = IconData.new(0xf3fb, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A person's silhouette in a circle.
CupertinoIcons.profile_circled = IconData.new(0xf419, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A '+' sign in a circle.
CupertinoIcons.plus_circled = IconData.new(0xf48a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A '-' sign in a circle.
CupertinoIcons.minus_circled = IconData.new(0xf463, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A right facing flag and pole outline.
CupertinoIcons.flag = IconData.new(0xf42c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A magnifier loop outline.
CupertinoIcons.search = IconData.new(0xf4a5, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A checkmark.
CupertinoIcons.check_mark = IconData.new(0xf3fd, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A checkmark in a circle. The circle is not filled in.
CupertinoIcons.check_mark_circled = IconData.new(0xf3fe, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A checkmark in a circle. The circle is filled in.
CupertinoIcons.check_mark_circled_solid = IconData.new(0xf3ff, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An empty circle (a ring).  An un-selected radio button.
CupertinoIcons.circle = IconData.new(0xf401, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled circle.  The circle is surrounded by a ring.  A selected radio button.
CupertinoIcons.circle_filled = IconData.new(0xf400, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A thicker left chevron used in iOS for the navigation bar back button.
CupertinoIcons.back = IconData.new(0xf3cf, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true });
/// A thicker right chevron that's the reverse of [back].
CupertinoIcons.forward = IconData.new(0xf3d1, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons", matchTextDirection: true });
/// Outline of a simple front-facing house.
CupertinoIcons.home = IconData.new(0xf447, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A right-facing shopping cart outline.
CupertinoIcons.shopping_cart = IconData.new(0xf3f7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Three solid dots.
CupertinoIcons.ellipsis = IconData.new(0xf46a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A phone handset outline.
CupertinoIcons.phone = IconData.new(0xf4b8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A phone handset.
CupertinoIcons.phone_solid = IconData.new(0xf4b9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A solid down arrow.
CupertinoIcons.down_arrow = IconData.new(0xf35d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A solid up arrow.
CupertinoIcons.up_arrow = IconData.new(0xf366, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A charging battery.
CupertinoIcons.battery_charging = IconData.new(0xf111, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An empty battery.
CupertinoIcons.battery_empty = IconData.new(0xf112, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A full battery.
CupertinoIcons.battery_full = IconData.new(0xf113, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A 75% charged battery.
CupertinoIcons.battery_75_percent = IconData.new(0xf114, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A 25% charged battery.
CupertinoIcons.battery_25_percent = IconData.new(0xf115, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// The Bluetooth logo.
CupertinoIcons.bluetooth = IconData.new(0xf116, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A restart arrow, pointing downwards.
CupertinoIcons.restart = IconData.new(0xf21c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two curved up and left pointing arrows.
CupertinoIcons.reply_all = IconData.new(0xf21d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A curved up and left pointing arrow.
CupertinoIcons.reply_thick_solid = IconData.new(0xf21e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// iOS style share icon with an arrow pointing upwards to the right from a box.
CupertinoIcons.share_up = IconData.new(0xf220, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two thin right-facing intertwined arrows.
CupertinoIcons.shuffle = IconData.new(0xf4a9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two medium thickness right-facing intertwined arrows.
CupertinoIcons.shuffle_medium = IconData.new(0xf4a8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two thick right-facing intertwined arrows.
CupertinoIcons.shuffle_thick = IconData.new(0xf221, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera for still photographs. This icon is filled in.
CupertinoIcons.photo_camera = IconData.new(0xf3f5, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera for still photographs. This icon is not filled in.
CupertinoIcons.photo_camera_solid = IconData.new(0xf3f6, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera for moving pictures. This icon is not filled in.
CupertinoIcons.video_camera = IconData.new(0xf4cc, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera for moving pictures. This icon is filled in.
CupertinoIcons.video_camera_solid = IconData.new(0xf4cd, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera containing two circular arrows pointing at each other, which indicate switching. This icon is not filled in.
CupertinoIcons.switch_camera = IconData.new(0xf49e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A camera containing two circular arrows pointing at each other, which indicate switching. This icon is filled in.
CupertinoIcons.switch_camera_solid = IconData.new(0xf49f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A collection of folders, which store collections of files, i.e. an album. This icon is not filled in.
CupertinoIcons.collections = IconData.new(0xf3c9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A collection of folders, which store collections of files, i.e. an album. This icon is filled in.
CupertinoIcons.collections_solid = IconData.new(0xf3ca, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single folder, which stores multiple files. This icon is not filled in.
CupertinoIcons.folder = IconData.new(0xf434, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single folder, which stores multiple files. This icon is filled in.
CupertinoIcons.folder_solid = IconData.new(0xf435, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single folder that indicates being opened. A folder like this typically stores multiple files.
CupertinoIcons.folder_open = IconData.new(0xf38a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A trash bin for removing items. This icon is not filled in.
CupertinoIcons.delete = IconData.new(0xf4c4, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A trash bin for removing items. This icon is filled in.
CupertinoIcons.delete_solid = IconData.new(0xf4c5, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A trash bin with minimal detail for removing items.
CupertinoIcons.delete_simple = IconData.new(0xf37f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A simple pen.
CupertinoIcons.pen = IconData.new(0xf2bf, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A simple pencil.
CupertinoIcons.pencil = IconData.new(0xf37e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A box for writing and a pen on top (that indicates the writing). This icon is not filled in.
CupertinoIcons.create = IconData.new(0xf417, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A box for writing and a pen on top (that indicates the writing). This icon is filled in.
CupertinoIcons.create_solid = IconData.new(0xf417, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start.
CupertinoIcons.refresh = IconData.new(0xf49a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start surrounded by a circle. This is icon is not filled in.
CupertinoIcons.refresh_circled = IconData.new(0xf49b, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start surrounded by a circle. This is icon is filled in.
CupertinoIcons.refresh_circled_solid = IconData.new(0xf49c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start.
CupertinoIcons.refresh_thin = IconData.new(0xf49d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start.
CupertinoIcons.refresh_thick = IconData.new(0xf3a8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An arrow on a circular path with its end pointing at its start.
CupertinoIcons.refresh_bold = IconData.new(0xf21c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cross of two diagonal lines from edge to edge crossing in an angle of 90 degrees, which is used for dismissal.
CupertinoIcons.clear_thick = IconData.new(0xf2d7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cross of two diagonal lines from edge to edge crossing in an angle of 90 degrees, which is used for dismissal, used as a blank space in a circle.
CupertinoIcons.clear_thick_circled = IconData.new(0xf36e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cross of two diagonal lines from edge to edge crossing in an angle of 90 degrees, which is used for dismissal.
CupertinoIcons.clear = IconData.new(0xf404, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cross of two diagonal lines from edge to edge crossing in an angle of 90 degrees, which is used for dismissal, surrounded by circle. This icon is not filled in.
CupertinoIcons.clear_circled = IconData.new(0xf405, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cross of two diagonal lines from edge to edge crossing in an angle of 90 degrees, which is used for dismissal, used as a blank space in a circle. This icon is filled in.
CupertinoIcons.clear_circled_solid = IconData.new(0xf406, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two straight lines, one horizontal and one vertical, meeting in the middle, which is the equivalent of a plus sign.
CupertinoIcons.add = IconData.new(0xf489, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two straight lines, one horizontal and one vertical, meeting in the middle, which is the equivalent of a plus sign, surrounded by a circle. This icon is not filled in.
CupertinoIcons.add_circled = IconData.new(0xf48a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two straight lines, one horizontal and one vertical, meeting in the middle, which is the equivalent of a plus sign, surrounded by a circle. This icon is not filled in.
CupertinoIcons.add_circled_solid = IconData.new(0xf48b, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A gear with eight cogs. This icon is not filled in.
CupertinoIcons.gear = IconData.new(0xf43c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A gear with eight cogs. This icon is filled in.
CupertinoIcons.gear_solid = IconData.new(0xf43d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A gear with six cogs.
CupertinoIcons.gear_big = IconData.new(0xf2f7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cogwheel with many cogs and decoration in the middle. This icon is not filled in.
CupertinoIcons.settings = IconData.new(0xf411, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A cogwheel with many cogs and decoration in the middle. This icon is filled in.
CupertinoIcons.settings_solid = IconData.new(0xf412, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A symbol representing a solid single musical note.
CupertinoIcons.music_note = IconData.new(0xf46b, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A symbol representing 2 connected musical notes.
CupertinoIcons.double_music_note = IconData.new(0xf46c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A triangle facing to the right. This icon is not filled in.
CupertinoIcons.play_arrow = IconData.new(0xf487, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A triangle facing to the right. This icon is filled in.
CupertinoIcons.play_arrow_solid = IconData.new(0xf488, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two vertical rectangles. This icon is not filled in.
CupertinoIcons.pause = IconData.new(0xf477, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Two vertical rectangles. This icon is filled in.
CupertinoIcons.pause_solid = IconData.new(0xf478, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// The infinity symbol.
CupertinoIcons.loop = IconData.new(0xf449, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// The infinity symbol.
CupertinoIcons.loop_thick = IconData.new(0xf44a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A speaker with a single small sound wave.
CupertinoIcons.volume_down = IconData.new(0xf3b7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A speaker symbol.
CupertinoIcons.volume_mute = IconData.new(0xf3b8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A speaker with a small and a large sound wave and a diagonal line crossing the whole icon.
CupertinoIcons.volume_off = IconData.new(0xf3b9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A speaker with a small and a large sound wave.
CupertinoIcons.volume_up = IconData.new(0xf3ba, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// All four corners of a square facing inwards.
CupertinoIcons.fullscreen = IconData.new(0xf386, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// All four corners of a square facing outwards.
CupertinoIcons.fullscreen_exit = IconData.new(0xf37d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in microphone with a diagonal line crossing it.
CupertinoIcons.mic_off = IconData.new(0xf45f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A microphone.
CupertinoIcons.mic = IconData.new(0xf460, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in microphone.
CupertinoIcons.mic_solid = IconData.new(0xf461, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A circle with a dotted clock face inside with hands showing 10:30.
CupertinoIcons.clock = IconData.new(0xf4be, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in circle with a dotted clock face inside with hands showing 10:30.
CupertinoIcons.clock_solid = IconData.new(0xf4bf, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A circle with with a 90 degree angle shape in the center, resembling a clock with hands showing 09:00.
CupertinoIcons.time = IconData.new(0xf402, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in circle with with a 90 degree angle shape in the center, resembling a clock with hands showing 09:00.
CupertinoIcons.time_solid = IconData.new(0xf403, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An unlocked padlock.
CupertinoIcons.padlock = IconData.new(0xf4c8, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An unlocked padlock.
CupertinoIcons.padlock_solid = IconData.new(0xf4c9, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An open eye.
CupertinoIcons.eye = IconData.new(0xf424, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An open eye.
CupertinoIcons.eye_solid = IconData.new(0xf425, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single person. This icon is not filled in.
CupertinoIcons.person = IconData.new(0xf47d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single person. This icon is filled in.
CupertinoIcons.person_solid = IconData.new(0xf47e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single person with a plus sign next to it. This icon is not filled in.
CupertinoIcons.person_add = IconData.new(0xf47f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A single person with a plus sign next to it. This icon is filled in.
CupertinoIcons.person_add_solid = IconData.new(0xf480, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A group of three people. This icon is not filled in.
CupertinoIcons.group = IconData.new(0xf47b, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A group of three people. This icon is filled in.
CupertinoIcons.group_solid = IconData.new(0xf47c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Outline of a closed mail envelope.
CupertinoIcons.mail = IconData.new(0xf422, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A closed mail envelope. This icon is filled in.
CupertinoIcons.mail_solid = IconData.new(0xf423, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Outline of a location pin.
CupertinoIcons.location = IconData.new(0xf455, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A location pin. This icon is filled in.
CupertinoIcons.location_solid = IconData.new(0xf456, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Outline of a sticker tag.
CupertinoIcons.tag = IconData.new(0xf48c, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A sticker tag. This icon is filled in.
CupertinoIcons.tag_solid = IconData.new(0xf48d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// Outlines of 2 overlapping sticker tags.
CupertinoIcons.tags = IconData.new(0xf48e, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// 2 overlapping sticker tags. This icon is filled in.
CupertinoIcons.tags_solid = IconData.new(0xf48f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in bus.
CupertinoIcons.bus = IconData.new(0xf36d, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in car.
CupertinoIcons.car = IconData.new(0xf36f, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in detailed, realistic car.
CupertinoIcons.car_detailed = IconData.new(0xf2c1, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in train with a window divided in half and two headlights.
CupertinoIcons.train_style_one = IconData.new(0xf3af, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in train with a window and a single, centered headlight.
CupertinoIcons.train_style_two = IconData.new(0xf3b4, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined paw.
CupertinoIcons.paw = IconData.new(0xf479, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in paw.
CupertinoIcons.paw_solid = IconData.new(0xf47a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined game controller.
CupertinoIcons.game_controller = IconData.new(0xf43a, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in game controller.
CupertinoIcons.game_controller_solid = IconData.new(0xf43b, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined lab flask.
CupertinoIcons.lab_flask = IconData.new(0xf430, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in lab flask.
CupertinoIcons.lab_flask_solid = IconData.new(0xf431, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined heart shape. Can be used to indicate like or favorite states.
CupertinoIcons.heart = IconData.new(0xf442, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled heart shape. Can be used to indicate like or favorite states.
CupertinoIcons.heart_solid = IconData.new(0xf443, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined bell. Can be used to represent notifications.
CupertinoIcons.bell = IconData.new(0xf3e1, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled bell. Can be used represent notifications.
CupertinoIcons.bell_solid = IconData.new(0xf3e2, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// An outlined folded newspaper icon.
CupertinoIcons.news = IconData.new(0xf471, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled folded newspaper icon.
CupertinoIcons.news_solid = IconData.new(0xf472, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A outlined brightness icon.
CupertinoIcons.brightness = IconData.new(0xf4B6, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
/// A filled in brightness icon.
CupertinoIcons.brightness_solid = IconData.new(0xf4B7, { fontFamily: "CupertinoIcons", fontPackage: "cupertino_icons" });
class AbsorbPointer extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          absorbing?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(args) {
        return new AbsorbPointer(args);
    }
}
exports.AbsorbPointer = AbsorbPointer;
class AnimationController extends FlutterWidget {
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
class Animation extends FlutterWidget {
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
class AboutListTile extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
          icon?:FlutterWidget,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          dense?:boolean,
          applicationIcon?:FlutterWidget,
          aboutBoxChildren?:Array<FlutterWidget>,
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
          child?:FlutterWidget,
          icon?:FlutterWidget,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          dense?:boolean,
          applicationIcon?:FlutterWidget,
          aboutBoxChildren?:Array<FlutterWidget>,
        }
     */
    static new(args) {
        return new AboutListTile(args);
    }
}
exports.AboutListTile = AboutListTile;
class AboutDialog extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:FlutterWidget,
          children?:Array<FlutterWidget>,
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
          applicationIcon?:FlutterWidget,
          children?:Array<FlutterWidget>,
        }
     */
    static new(args) {
        return new AboutDialog(args);
    }
}
exports.AboutDialog = AboutDialog;
class AppBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          title?:FlutterWidget,
          actions?:Array<FlutterWidget>,
          flexibleSpace?:FlutterWidget,
          bottom?:FlutterWidget,
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
          leading?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          title?:FlutterWidget,
          actions?:Array<FlutterWidget>,
          flexibleSpace?:FlutterWidget,
          bottom?:FlutterWidget,
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
class Align extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class AspectRatio extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          aspectRatio?:number,
        }
     */
    static new(args) {
        return new AspectRatio(args);
    }
}
exports.AspectRatio = AspectRatio;
class AnnotatedRegion extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          value?:number,
          sized?:boolean,
        }
     */
    static new(args) {
        return new AnnotatedRegion(args);
    }
}
exports.AnnotatedRegion = AnnotatedRegion;
class AnimatedCrossFade extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          firstChild?:FlutterWidget,
          secondChild?:FlutterWidget,
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
          firstChild?:FlutterWidget,
          secondChild?:FlutterWidget,
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
class AnimatedOpacity extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class AnimatedBuilder extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          animation?:Animation,
          builder?:any,
          child?:FlutterWidget,
          widget?:FlutterWidget
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
          child?:FlutterWidget,
          widget?:FlutterWidget
        }
     */
    static new(args) {
        return new AnimatedBuilder(args);
    }
}
exports.AnimatedBuilder = AnimatedBuilder;
class AnimatedContainer extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          alignment?:Alignment,
          margin?:EdgeInsets,
          padding?:EdgeInsets,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class AnimatedPhysicalModel extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class AnimatedPositioned extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class AnimatedSize extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class AnimatedDefaultTextStyle extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class BottomNavigationBarItem extends FlutterWidget {
    /**
     * @param args args:
        {
          icon:FlutterWidget,
          title?:FlutterWidget,
          activeIcon?:FlutterWidget,
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
          icon:FlutterWidget,
          title?:FlutterWidget,
          activeIcon?:FlutterWidget,
          backgroundColor?:Color
        }
     */
    static new(args) {
        return new BottomNavigationBarItem(args);
    }
}
exports.BottomNavigationBarItem = BottomNavigationBarItem;
class Banner extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Baseline extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    static new(args) {
        return new Baseline(args);
    }
}
exports.Baseline = Baseline;
class ButtonBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class BlockSemantics extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          blocking?:boolean,
        }
     */
    static new(args) {
        return new BlockSemantics(args);
    }
}
exports.BlockSemantics = BlockSemantics;
class BottomAppBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class BottomNavigationBar extends FlutterWidget {
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
class BackButtonIcon extends FlutterWidget {
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
class BackButton extends FlutterWidget {
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
class Builder extends FlutterWidget {
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
class CloseButton extends FlutterWidget {
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
class Container extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Center extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          widthFactor?:number,
          heightFactor?:number,
        }
     */
    static new(args) {
        return new Center(args);
    }
}
exports.Center = Center;
class ColoredBox extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          color:Color,
        }
     */
    static new(args) {
        return new ColoredBox(args);
    }
}
exports.ColoredBox = ColoredBox;
class CircleAvatar extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Chip extends FlutterWidget {
    /**
     * @param args args:
        {
          avatar?:FlutterWidget,
          label:FlutterWidget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          deleteIcon?:FlutterWidget,
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
          avatar?:FlutterWidget,
          label:FlutterWidget,
          labelStyle?:TextStyle,
          labelPadding?:EdgeInsets,
          deleteIcon?:FlutterWidget,
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
class CheckedModeBanner extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
        }
     */
    static new(args) {
        return new CheckedModeBanner(args);
    }
}
exports.CheckedModeBanner = CheckedModeBanner;
class CheckboxListTile extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          value:boolean,
          onChanged:VoidValueChangedBoolean,
          activeColor?:Color,
          checkColor?:Color,
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:FlutterWidget,
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
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:FlutterWidget,
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
class Checkbox extends FlutterWidget {
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
class ClipRRect extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class ConstrainedBox extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          constraints:BoxConstraints,
          key?:Key,
        }
     */
    static new(args) {
        return new ConstrainedBox(args);
    }
}
exports.ConstrainedBox = ConstrainedBox;
class CustomSingleChildLayout extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          delegate?:any,
          key?:Key,
        }
     */
    static new(args) {
        return new CustomSingleChildLayout(args);
    }
}
exports.CustomSingleChildLayout = CustomSingleChildLayout;
class Column extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class CustomMultiChildLayout extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
          delegate?:any,
          key?:Key
        }
     */
    static new(args) {
        return new CustomMultiChildLayout(args);
    }
}
exports.CustomMultiChildLayout = CustomMultiChildLayout;
class CustomScrollView extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          slivers?:Array<FlutterWidget>,
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
          slivers?:Array<FlutterWidget>,
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
class Card extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Divider extends FlutterWidget {
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
class Directionality extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
          textDirection:TextDirection,
        }
     */
    static new(args) {
        return new Directionality(args);
    }
}
exports.Directionality = Directionality;
class DropdownMenuItem extends FlutterWidget {
    /**
     * @param args args:
        {
          child:FlutterWidget,
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
          child:FlutterWidget,
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
class DecoratedBox extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class DropdownButton extends FlutterWidget {
    /**
     * @param args args:
        {
          items?:Array<DropdownMenuItem>,
          onChanged?:any,
          value?:any, hint?:FlutterWidget,
          disabledHint?:FlutterWidget,
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
          value?:any, hint?:FlutterWidget,
          disabledHint?:FlutterWidget,
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
class DefaultTabController extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
          length:number,
          initialIndex?:number,
        }
     */
    static new(args) {
        return new DefaultTabController(args);
    }
}
exports.DefaultTabController = DefaultTabController;
class DecorationImage extends FlutterWidget {
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
class DefaultTextStyle extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class DecoratedBoxTransition extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          decoration?:any,
          position?:DecorationPosition,
          child?:FlutterWidget
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
          child?:FlutterWidget
        }
     */
    static new(args) {
        return new DecoratedBoxTransition(args);
    }
}
exports.DecoratedBoxTransition = DecoratedBoxTransition;
class ExcludeSemantics extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          excluding?:boolean,
        }
     */
    static new(args) {
        return new ExcludeSemantics();
    }
}
exports.ExcludeSemantics = ExcludeSemantics;
class Expanded extends FlutterWidget {
    /**
     * @param args args:
        {
          child:FlutterWidget,
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
          child:FlutterWidget,
          flex?:number,
          key?:Key,
        }
     */
    static new(args) {
        return new Expanded(args);
    }
}
exports.Expanded = Expanded;
class ExpandIcon extends FlutterWidget {
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
class ExpansionTile extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:FlutterWidget,
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidValueChangedBoolean,
          children?:Array<FlutterWidget>,
          trailing?:FlutterWidget,
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
          leading?:FlutterWidget,
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          backgroundColor?:Color,
          onExpansionChanged?:VoidValueChangedBoolean,
          children?:Array<FlutterWidget>,
          trailing?:FlutterWidget,
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
class Flexible extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
          flex?:number,
          fit?:FlexFit,
        }
     */
    static new(args) {
        return new Flexible(args);
    }
}
exports.Flexible = Flexible;
class FittedBox extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        alignment?:Alignment,
        fit?:BoxFit,
      }
     */
    static new(args) {
        return new FittedBox(args);
    }
}
exports.FittedBox = FittedBox;
class FractionallySizedBox extends FlutterWidget {
    /**
      * @param args args:
         {
           child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Flex extends FlutterWidget {
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
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
        }
     */
    static new(args) {
        return new Flex(args);
    }
}
exports.Flex = Flex;
class Flow extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
          delegate?:any,
          key?:Key,
        }
     */
    static new(args) {
        return new Flow(args);
    }
}
exports.Flow = Flow;
class FlatButton extends FlutterWidget {
    /**
     * @param args args:
        {
          child:FlutterWidget,
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
          child:FlutterWidget,
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
          child:FlutterWidget,
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
  
          icon?:FlutterWidget,
          label?:FlutterWidget,
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
class FloatingActionButton extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class FlexibleSpaceBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          title?:FlutterWidget,
          background?:FlutterWidget,
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
          title?:FlutterWidget,
          background?:FlutterWidget,
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
class FlexibleSpaceBarSettings extends FlutterWidget {
    /**
    * @param args args:
       {
         key?:Key,
         child:FlutterWidget,
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
          child:FlutterWidget,
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
class FlutterLogo extends FlutterWidget {
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
class FractionalTranslation extends FlutterWidget {
    /**
     * @param args args:
        {
          translation:Offset,
  
          key?:Key,
          transformHitTests?:boolean,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
        }
     */
    static new(args) {
        return new FractionalTranslation(args);
    }
}
exports.FractionalTranslation = FractionalTranslation;
class GestureDetector extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class GridTileBar extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        backgroundColor?:Color,
        leading?:FlutterWidget,
        title?:FlutterWidget,
        subtitle?:FlutterWidget,
        trailing?:FlutterWidget,
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
        leading?:FlutterWidget,
        title?:FlutterWidget,
        subtitle?:FlutterWidget,
        trailing?:FlutterWidget,
      }
     */
    static new(args) {
        return new GridTileBar(args);
    }
}
exports.GridTileBar = GridTileBar;
class GridTile extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
        header?:FlutterWidget,
        footer?:FlutterWidget,
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
        child?:FlutterWidget,
        header?:FlutterWidget,
        footer?:FlutterWidget,
      }
     */
    static new(args) {
        return new GridTile(args);
    }
}
exports.GridTile = GridTile;
class GridPaper extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class InputDecorator extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class IndexedSemantics extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          index?:number,
        }
     */
    static new(args) {
        return new IndexedSemantics(args);
    }
}
exports.IndexedSemantics = IndexedSemantics;
class IntrinsicHeight extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
        }
     */
    static new(args) {
        return new IntrinsicHeight(args);
    }
}
exports.IntrinsicHeight = IntrinsicHeight;
class IntrinsicWidth extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class IndexedStack extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class IgnorePointer extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          ignoring?:boolean,
          ignoringSemantics?:boolean,
        }
     */
    static new(args) {
        return new IgnorePointer(args);
    }
}
exports.IgnorePointer = IgnorePointer;
class IconButton extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          icon:FlutterWidget,
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
          icon:FlutterWidget,
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
class Icon extends FlutterWidget {
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
class ImageIcon extends FlutterWidget {
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
class KeyedSubtree extends FlutterWidget {
    /**
     * @param args args:
        {
          child:FlutterWidget,
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
          child:FlutterWidget,
          key?:Key,
        }
     */
    static new(args) {
        return new KeyedSubtree(args);
    }
}
exports.KeyedSubtree = KeyedSubtree;
class LicensePage extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          applicationName?:string,
          applicationLegalese?:string,
          applicationVersion?:string,
          applicationIcon?:FlutterWidget,
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
          applicationIcon?:FlutterWidget,
        }
     */
    static new(args) {
        return new LicensePage(args);
    }
}
exports.LicensePage = LicensePage;
class LimitedBox extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class ListBody extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class ListTile extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:FlutterWidget,
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          trailing?:FlutterWidget,
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
          leading?:FlutterWidget,
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          trailing?:FlutterWidget,
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
class ListView extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class LayoutBuilder extends FlutterWidget {
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
class Material extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class MaterialPageRoute extends FlutterWidget {
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
class NotificationListener extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          key?:Key
        }
     */
    static new(args) {
        return new NotificationListener(args);
    }
}
exports.NotificationListener = NotificationListener;
class NestedScrollView extends FlutterWidget {
    /**
     * @param args args:
        {
          body?:FlutterWidget,
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
          body?:FlutterWidget,
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
class Opacity extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    static new(args) {
        return new Opacity(args);
    }
}
exports.Opacity = Opacity;
class Offstage extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:.FlutterWidget,
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
          child?:.FlutterWidget,
          offstage?:boolean,
          key?:Key,
        }
     */
    static new(args) {
        return new Offstage(args);
    }
}
exports.Offstage = Offstage;
class OverflowBox extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class OutlineButton extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
  
          icon?:FlutterWidget,
          label?:FlutterWidget,
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
class Padding extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
          padding?:EdgeInsets,
          key?:Key
        }
     */
    static new(args) {
        return new Padding(args);
    }
}
exports.Padding = Padding;
class PhysicalModel extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          color:Color,
          shape?:BoxShape,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Positioned extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key
          child:FlutterWidget,
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
          child:FlutterWidget,
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
          child:FlutterWidget,
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
          child:FlutterWidget,
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
          child:FlutterWidget,
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
class PositionedDirectional extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key
          child:FlutterWidget,
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
          child:FlutterWidget,
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
class PreferredSize extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class PreferredSizeWidget extends FlutterWidget {
    static new() {
        return new PreferredSizeWidget();
    }
}
exports.PreferredSizeWidget = PreferredSizeWidget;
class Placeholder extends FlutterWidget {
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
class PopupMenuButton extends FlutterWidget {
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
          child?:FlutterWidget,
          icon?:FlutterWidget,
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
          child?:FlutterWidget,
          icon?:FlutterWidget,
          offset?:Offset,
          key?:Key
        }
     */
    static new(args) {
        return new PopupMenuButton(args);
    }
}
exports.PopupMenuButton = PopupMenuButton;
class PopupMenuItem extends FlutterWidget {
    /**
     * @param args args:
        {
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class Row extends FlutterWidget {
    /**
     * @param args args:
        {
          children?:Array<FlutterWidget>,
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
          children?:Array<FlutterWidget>,
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
class RepaintBoundary extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class RawImage extends FlutterWidget {
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
class RotatedBox extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          quarterTurns:number,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
        }
     */
    static new(args) {
        return new RotatedBox(args);
    }
}
exports.RotatedBox = RotatedBox;
class RaisedButton extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
        icon?:FlutterWidget,
        label?:FlutterWidget,
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
class Radio extends FlutterWidget {
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
class RawMaterialButton extends FlutterWidget {
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
      }
     */
    static new(args) {
        return new RawMaterialButton(args);
    }
}
exports.RawMaterialButton = RawMaterialButton;
class RichText extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        text:FlutterWidget,
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
        text:FlutterWidget,
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
class Spacer extends FlutterWidget {
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
class Semantics extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class SwitchListTile extends FlutterWidget {
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
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:FlutterWidget,
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
          title?:FlutterWidget,
          subtitle?:FlutterWidget,
          isThreeLine?:boolean,
          dense?:boolean,
          contentPadding?:EdgeInsets,
          secondary?:FlutterWidget,
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
class Slider extends FlutterWidget {
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
class SizedBox extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class SizedOverflowBox extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        alignment?:Alignment,
        size:Size,
      }
     */
    static new(args) {
        return new SizedOverflowBox(args);
    }
}
exports.SizedOverflowBox = SizedOverflowBox;
class Stack extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class SliverAppBar extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        leading?:FlutterWidget,
        automaticallyImplyLeading?:boolean,
        title?:FlutterWidget,
        actions?:Array<FlutterWidget>,
        flexibleSpace?:FlutterWidget,
        bottom?:FlutterWidget,
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
        leading?:FlutterWidget,
        automaticallyImplyLeading?:boolean,
        title?:FlutterWidget,
        actions?:Array<FlutterWidget>,
        flexibleSpace?:FlutterWidget,
        bottom?:FlutterWidget,
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
class SliverPadding extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        sliver?:FlutterWidget,
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
        sliver?:FlutterWidget,
        padding:EdgeInsets,
      }
     */
    static new(args) {
        return new SliverPadding(args);
    }
}
exports.SliverPadding = SliverPadding;
class SliverGrid extends FlutterWidget {
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
class SliverGridDelegateWithMaxCrossAxisExtent extends FlutterWidget {
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
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class SliverChildBuilderDelegate extends FlutterWidget {
    /**
     * @param args args:
      {
        builder:any,
        childCount?:number,
        addAutomaticKeepAlives?:boolean,
        addRepaintBoundaries?:boolean,
        addSemanticIndexes?:boolean,
        semanticIndexOffset?:number,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
      }
     */
    static new(args) {
        return new SliverChildBuilderDelegate(args);
    }
}
exports.SliverChildBuilderDelegate = SliverChildBuilderDelegate;
class SliverList extends FlutterWidget {
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
class SliverOverlapInjector extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        handle?:any,
      }
     */
    static new(args) {
        return new SliverOverlapInjector(args);
    }
}
exports.SliverOverlapInjector = SliverOverlapInjector;
class SliverFixedExtentList extends FlutterWidget {
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
class SliverOverlapAbsorber extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        handle?:any,
      }
     */
    static new(args) {
        return new SliverOverlapAbsorber(args);
    }
}
exports.SliverOverlapAbsorber = SliverOverlapAbsorber;
class SingleChildScrollView extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class SliverToBoxAdapter extends FlutterWidget {
    /**
     * @param args args:
      {
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        key?:Key
      }
     */
    static new(args) {
        return new SliverToBoxAdapter(args);
    }
}
exports.SliverToBoxAdapter = SliverToBoxAdapter;
class Scaffold extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        appBar?:FlutterWidget,
        body?:FlutterWidget,
        floatingActionButton?:FlutterWidget,
        floatingActionButtonLocation?:FloatingActionButtonLocation,
        persistentFooterButtons?:Array<FlutterWidget>,
        drawer?:FlutterWidget,
        endDrawer?:FlutterWidget,
        bottomNavigationBar?:FlutterWidget,
        bottomSheet?:FlutterWidget,
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
        appBar?:FlutterWidget,
        body?:FlutterWidget,
        floatingActionButton?:FlutterWidget,
        floatingActionButtonLocation?:FloatingActionButtonLocation,
        persistentFooterButtons?:Array<FlutterWidget>,
        drawer?:FlutterWidget,
        endDrawer?:FlutterWidget,
        bottomNavigationBar?:FlutterWidget,
        bottomSheet?:FlutterWidget,
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
class SafeArea extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
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
class SliverSafeArea extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        sliver:FlutterWidget,
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
        sliver:FlutterWidget,
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
class Scrollbar extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child:FlutterWidget,
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
        child:FlutterWidget,
        controller?:ScrollController,
        isAlwaysShown?:boolean,
      }
     */
    static new(args) {
        return new Scrollbar(args);
    }
}
exports.Scrollbar = Scrollbar;
class SnackBar extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:FlutterWidget,
        content:FlutterWidget,
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
        key?:FlutterWidget,
        content:FlutterWidget,
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
class SnackBarAction extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:FlutterWidget,
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
        key?:FlutterWidget,
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
class SliverVisibility extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        sliver:FlutterWidget,
        replacement?:FlutterWidget,
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
        sliver:FlutterWidget,
        replacement?:FlutterWidget,
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
class TableRow extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
        decoration?:BoxDecoration,
      }
     */
    static new(args) {
        return new TableRow(args);
    }
}
exports.TableRow = TableRow;
class TableCell extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        verticalAlignment?:TableCellVerticalAlignment,
      }
     */
    static new(args) {
        return new TableCell(args);
    }
}
exports.TableCell = TableCell;
class Transform extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
        child?:FlutterWidget,
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
class Tooltip extends FlutterWidget {
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
        child?:FlutterWidget
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
        child?:FlutterWidget
      }
     */
    static new(args) {
        return new Tooltip(args);
    }
}
exports.Tooltip = Tooltip;
class Table extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class TabBar extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        tabs?:Array<FlutterWidget>,
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
        tabs?:Array<FlutterWidget>,
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
class Tab extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
        text?:string,
        icon?:FlutterWidget,
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
        child?:FlutterWidget,
        text?:string,
        icon?:FlutterWidget,
        iconMargin?:EdgeInsets,
      }
     */
    static new(args) {
        return new Tab(args);
    }
}
exports.Tab = Tab;
class TabBarView extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class TabPageSelectorIndicator extends FlutterWidget {
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
class TabPageSelector extends FlutterWidget {
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
class Title extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        child?:FlutterWidget,
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
        child?:FlutterWidget,
        title?:string,
        color?:Color
      }
     */
    static new(args) {
        return new Title(args);
    }
}
exports.Title = Title;
class Text extends FlutterWidget {
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
class TextSpan extends FlutterWidget {
    /**
     * @param args args:
      {
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class Texture extends FlutterWidget {
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
class TextFormField extends FlutterWidget {
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
class UnconstrainedBox extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child?:FlutterWidget,
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
          child?:FlutterWidget,
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
class VerticalDivider extends FlutterWidget {
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
class Visibility extends FlutterWidget {
    /**
     * @param args args:
      {
        child:FlutterWidget,
  
        key?:Key,
        replacement?:FlutterWidget,
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
        child:FlutterWidget,
  
        key?:Key,
        replacement?:FlutterWidget,
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
class Wrap extends FlutterWidget {
    /**
     * @param args args:
      {
        key?:Key,
        children?:Array<FlutterWidget>,
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
        children?:Array<FlutterWidget>,
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
class WillPopScope extends FlutterWidget {
    /**
     * @param args args:
      {
        child:FlutterWidget,
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
        child:FlutterWidget,
        onWillPop:VoidCallback,
  
        key?:Key,
      }
     */
    static new(args) {
        return new WillPopScope(args);
    }
}
exports.WillPopScope = WillPopScope;
class WidgetSpan extends FlutterWidget {
    /**
     * @param args args:
      {
        child:FlutterWidget,
  
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
        child:FlutterWidget,
  
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
class CupertinoActivityIndicator extends FlutterWidget {
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
class CupertinoButton extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
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
          child:FlutterWidget,
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
class CupertinoNavigationBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyMiddle?:boolean,
          previousPageTitle?:string,
          middle?:FlutterWidget,
          trailing?:FlutterWidget,
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
          leading?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyMiddle?:boolean,
          previousPageTitle?:string,
          middle?:FlutterWidget,
          trailing?:FlutterWidget,
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
class CupertinoNavigationBarBackButton extends FlutterWidget {
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
class CupertinoSlider extends FlutterWidget {
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
class CupertinoSwitch extends FlutterWidget {
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
class CupertinoScrollbar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
          controller?:ScrollController,
          isAlwaysShown?:boolean,
        }
     */
    static new(args) {
        return new CupertinoScrollbar(args);
    }
}
exports.CupertinoScrollbar = CupertinoScrollbar;
class CupertinoSliverNavigationBar extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          leading?:FlutterWidget,
          largeTitle?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyTitle?:boolean,
          previousPageTitle?:string,
          middle?:FlutterWidget,
          trailing?:FlutterWidget,
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
          leading?:FlutterWidget,
          largeTitle?:FlutterWidget,
          automaticallyImplyLeading?:boolean,
          automaticallyImplyTitle?:boolean,
          previousPageTitle?:string,
          middle?:FlutterWidget,
          trailing?:FlutterWidget,
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
class CupertinoTabBar extends FlutterWidget {
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
class CupertinoTheme extends FlutterWidget {
    /**
     * @param args args:
        {
          key?:Key,
          child:FlutterWidget,
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
          child:FlutterWidget,
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
//#endregion
