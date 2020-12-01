/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: JS Flutter SDK
 */

// @ts-ignore：dart_sdk
import dart_sdk = require("dart_sdk"); 
const core = dart_sdk.core;

//#region ******** Base Type ********
//****** VoidCallback ******
export type VoidCallback = () => void;

//****** VoidCallbackString ******
export type VoidCallbackString = (value:string) => void;

//****** VoidCallbackBoolean ******
export type VoidCallbackBoolean = (value:boolean) => void;

//****** VoidCallbackNumber ******
export type VoidCallbackNumber = (value:number) => void;

//****** VoidTapDownDetails ******
export type VoidTapDown = (value:TapDownDetails) => void;

//****** VoidTapUpDetails ******
export type VoidTapUp = (value:TapUpDetails) => void;

//****** TODO JSWidget Mirror Mgr ******
export class JSWidgetMirrorMgr {
  mirrorIDFeed:number;
  mirrorObjMap:Map<string,any>;
  static instance?:JSWidgetMirrorMgr;

  constructor() {
    this.mirrorIDFeed = 0;
    this.mirrorObjMap = new Map();
  }

  //将对象加入数组并返回 ID字符串
  generateID(obj:DartClass):string {
    const d = ++ this.mirrorIDFeed;
    const idstring = String(d);
    this.mirrorObjMap.set(idstring, obj);
    return idstring;
  }

  //使用ID列表删除对象
  removeMirrorObjects(mirrorIDList:Array<string>):void{
    for (let mirrorID in mirrorIDList) {
      this.mirrorObjMap.delete(mirrorID);
    }
  }

  //通过ID 获取对象
  getMirrorObj(mirrorID:string) {
    return this.mirrorObjMap.get(mirrorID);
  }

  //单例化
  static getInstance():JSWidgetMirrorMgr {
    if (!this.instance) {
      this.instance = new JSWidgetMirrorMgr();
    }
    return this.instance;
  }
}


//****** TODO JSCallArgs ******
interface JSCallArgsConfig {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;         
  args?:any;
}
export class JSCallConfig {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:any;

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
  constructor(config:JSCallArgsConfig){
    if(config!=null && config!=undefined){
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
  static new(config:JSCallArgsConfig){
    return new JSCallConfig(config);
  }
}

//flutter 中 非widget继承 DartClass
export class DartClass extends core.Object {
  className:string;         //类名
  constructorName?:string;  //子类名
  mirrorID?:string;         //事件ID

  constructor() {
    super();
    this.className = this.constructor.name;
  }

  //创建绑定事件ID
  createMirrorID():void {
    this.mirrorID = JSWidgetMirrorMgr.getInstance().generateID(this);
    core.print("createMirrorID: mirrorID : " + this.mirrorID);
  }
}

//flutter Widget继承Widget
export class Widget extends DartClass {
  
  //在生成json前调用
  //用于list delegate 等的items build
  //用于widget有类似onTab等响应函数变量，在此转换成callbackid,
  //但注意，delegate中确实需要funtion,要转不需ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper:any, buildContext?:any) {
    //把callback 换成callbackID
    for (let k in this) {
      let v = this[k];
      if (typeof v == "function") {
        this[k] = jsWidgetHelper.buildingCreateCallbackID(v);
      }
    }
  }
}

//****** ShapeBorder ******
export class ShapeBorder extends DartClass {}

//#endregion


//#region ******** Framework ********
export class JSBridge {

    ///js->native->flutter 顶层通用调用通道
    static invokeFlutterCommonChannel(basicMethodCall:any, callback?:any) {
      // @ts-ignore：dart_sdk
      mxfJSBridgeInvokeFlutterCommonChannel(basicMethodCall.encodeJSON(), function (resultStr:string) {
  
        if (callback) {
          callback(resultStr);
        }
  
        Log.debug("invokeFlutterCommonChannel: callback: " + resultStr);
      });
    }
  
    ///mirrorObj sys
    ///调用Logic mirrorObj的函数
    ///*重要区分： JS Logic MirrorObj的生命周期JS侧控制，由Native Weak Ref辅助完成释放
    static createMirrorObj(flutterCallConfig:any, mirrorID:any, needMonitordGCValue:any) {
  
      let basicMethodCall = JSMethodCall.new("JSBridgeCreateMirrorObj", flutterCallConfig);
      JSBridge.invokeFlutterCommonChannel(basicMethodCall);
  
      //监控jsvalue 释放，同步释放flutter侧对象
  
      // @ts-ignore：dart_sdk
      if (typeof(mxfAddJSValueToMirrorObjGCMap) !== "undefined") {
        // @ts-ignore：dart_sdk
        mxfAddJSValueToMirrorObjGCMap(mirrorID, needMonitordGCValue);
      }
    }
  
    static onFlutterInvokeJSCommonChannel(messageStr:string) {
  
      Log.debug("JSBridge.onFlutterInvokeJSCommonChannel: " + messageStr);
  
      let args = JSON.parse(messageStr);
  
      let method = args["method"];
      let callConfig = args["arguments"];
  
      // @ts-ignore：dart_sdk
      let fun = this[method];
  
      if (fun != null) {
        return fun.call(this, callConfig);
      } else {
        Log.log("JSBridge.onFlutterInvokeJSCommonChannel: error:fun == null" + args);
        return null;
      }
  
    }
  
    //flutter->js invokeJSMirrorObj
    static invokeJSMirrorObj(args:any) {
  
      let mirrorID = args["mirrorID"];
      let funcName = args["funcName"];
      let callbackID = args["callbackID"];
      let funConfig = args["args"];
  
      //TODO: call mirroObj Fun
      JSCallbackMgr.getInstance().invokeCallback(callbackID, funConfig)
    }
  
    static invokeMirrorObjWithCallback(flutterCallConfig:any, callback:any) {
  
      let basicMethodCall = JSMethodCall.new("JSBridgeInvokeMirrorObjWithCallback", flutterCallConfig);
      JSBridge.invokeFlutterCommonChannel(basicMethodCall, callback);
    }
  
  }
  
  
  // @ts-ignore：dart_sdk
  globalThis.mxfJSBridgeInvokeJSCommonChannel = function (messageStr) {
    JSBridge.onFlutterInvokeJSCommonChannel(messageStr);
  }
  
  //JSFlutterApp 基类，用于和Native交互
  //开发者需要继承XSFlutterApp，重载createJSWidgetWithName函数，根据WidgetName创建框架需要的Widget
  export class JSFlutterApp {
    name?:string;
    initialRoute?:string;
    rootWidget?:BaseWidget;
    constructor(name?:string, initialRoute?:string) {
      this.name = name;
      this.initialRoute = initialRoute;
  
      //App的rootWidget是个虚拟Widget，负责管理push的Widget或runAPP 的Widget
      this.rootWidget = new StatelessWidget({name:"RootWidget"});
      this.rootWidget.helper?.setupAsRootWidget();
  
    }
  
    run() {
      this.runWithName(this.initialRoute);
    }
  
  
    runWithName(name?:string) {
      let w = this.createJSWidgetWithName(name);
      if(w!=null && w!=undefined){
      this.runApp(w);
      }
    }
  
    ///子类需要重载
    ///当Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);
    ///push页面时，在这里根据widgetName 创建你自己的Widget
    createJSWidgetWithName(widgetName?:string) {
  
    }
  
    //Flutter通过XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage",...);push页面时,会调用到此函数
    navigatorPushWithName(widgetName?:string, widgetID?:string, args?:any) {
  
      let w = this.createJSWidgetWithName(widgetName);
      if(w!=null && w!=undefined){
      this.setupWidget(w, widgetName, widgetID, args);
  
      this.navigatorPush(w, args);
      }
    }
  
    setupWidget(widget?:any, widgetName?:string, widgetID?:string, args?:any) {
      //设置widgetID
      if(widget!=null && widget!=undefined && widgetID!=null && widgetID!=undefined ){
        widget.widgetID = widgetID;
      }
    }
  
    //这个接口暂时不完备，暂不要使用，要在JS侧创建setInheritedInfo，参照navigatorPush
    ///JS侧入口API
    //创建XSJSWidget，调用build 创建jsonWidgetTree，调用Flutter runApp 重新加载Flutter根页面
    runApp(widget:any) {
  
      //这个接口暂时不完备，要在JS侧创建setInheritedInfo，参照navigatorPush
  
      let bc = BuildContext.new(widget);
      widget.buildContext = bc;
  
      this.rootWidget?.helper?.addChildWidget(widget);
  
      let app = this;
      this.buildRootWidget(widget);
    }
  
    ///JS侧入口API
    //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
    navigatorPush(widget:any, args?:any) {
  
      let bc = BuildContext.new(widget);
      bc.setInheritedInfo(args);
      widget.buildContext = bc;
  
      if(widget!=null && widget !=undefined && widget!=""){
        WidgetMgr.getInstance().registerWidget(widget)
      }
  
      this.rootWidget?.helper.addChildWidget(widget);
  
      widget?.helper.callFlutterRebuild();
    }
  
    buildRootWidget(widget:BaseWidget) {
      Log.log("buildRootWidget ::" + widget?.getWidgetInfo());
      let widgetData = WidgetHelper.buildWidgetData(widget);
  
      JSFramework.callFlutterReloadApp(this, widgetData);
    }
  
  
    //flutter->js channel
    nativeCall(args?:any) {
      Log.log("XSFlutterApp:nativeCall" + args);
  
      let method = args["method"];
      let callConfig = args["arguments"];
  
      // @ts-ignore：dart_sdk
      let fun = this[method];
  
      if (fun != null) {
        return fun.call(this, callConfig);
      } else {
        Log.log("XSFlutterApp:nativeCall error:fun == null" + args);
        return null;
      }
    }
  
    flutterCallFrequencyLimitCallList(args?:any) {
      if (args) {
        args.map(function (callConfig?:any) {
          // @ts-ignore：dart_sdk
          this.nativeCall(callConfig);
        }.bind(this));
      }
    }
  
    flutterCallOnEventCallback(args?:any) {
      return this.rootWidget?.helper?.onEventCallback(args);
    }
  
    flutterCallNavigatorPushWithName(args?:any) {
      let widgetName = args["widgetName"];
      let widgetID = args["widgetID"];
  
      this.navigatorPushWithName(widgetName, widgetID, args);
    }
  
    flutterCallOnBuildEnd(args?:any) {
      this.rootWidget?.helper?.onBuildEnd(args);
    }
  
    flutterCallOnDispose(args?:any) {
      let widgetID = args["widgetID"];
  
      //移除Widget
      if(widgetID!=null && widgetID !=undefined){
        WidgetMgr.getInstance().remove(widgetID);
      }
  
      if (this.rootWidget && this.rootWidget.widgetID == widgetID) {
      }
  
      this.rootWidget?.helper.onDispose(args);
      let mirrorObjIDList = args["mirrorObjIDList"];
      JSWidgetMirrorMgr.getInstance().removeMirrorObjects(mirrorObjIDList);
    }
  
    flutterCallOnMirrorObjInvoke(args?:any) {
      var mirrorObjID = args["mirrorID"];
      var functionName = args["functionName"];
      var args = args["args"];
      var mirrorObj = JSWidgetMirrorMgr.getInstance().getMirrorObj(
        mirrorObjID
      );
      if (mirrorObj != null) {
        mirrorObj[functionName](args);
      }
    }
  }
  
  ///JSAPI
  ///mirrorObj sys
  ///flutter ->native ->js
  export class JSFramework {
    static currentJSApp:any = null;
  
    //全局函数
    static runApp(app:any) {
      JSFramework.callNativeSetCurrentJSApp(app);
    }
  
    static callNativeSetCurrentJSApp(app:any) {
      JSFramework.currentJSApp = app;
      // @ts-ignore：系统原生对象
      XSNativeJSFlutterApp.setCurrentJSApp(app);
    }
  
    static callFlutterReloadApp(app:any, widgetData:string) {
      JSFramework.currentJSApp = app;
      // @ts-ignore：系统原生对象
      XSNativeJSFlutterApp.callFlutterReloadApp(app, widgetData);
    }
  
    static callFlutterWidgetChannel(method:string, args:string) {
      // @ts-ignore：系统原生对象
      XSNativeJSFlutterApp.callFlutterWidgetChannel(method, args);
    }
  
    ///TODO: 优化
    ///调用和UI相关的mirrorObj的函数
    ///*重要区分： UIMirrorObj的生命周期和Flutter Widget控制，由Dart侧Dispose时完成释放
    static invokeFlutterFunction(callConfig:any) {
      JSFramework.callFlutterWidgetChannel("invoke", JSON.stringify(callConfig));
    }
  
    ///TODO: 优化
    ///github merge
    static invokeCommonFlutterFunction(callConfig:any) {
      JSFramework.callFlutterWidgetChannel("invokeCommon", JSON.stringify(callConfig));
    }
  }
  
  //****** TODO 原生日志输出 ******
  export class Log {
    static setLogLev(lev:number) {
      Log.logLev = lev;
    }
    
    static printLog(log:string){
      var prefix:string="[JS]: ";
      if(Log.logLev==0){
        prefix="[JS-Debug]: ";
      }else if(Log.logLev==2){
        prefix="[JS-Error]: ";
      }
      // @ts-ignore：原生系统函数
      XSNativeLog(prefix + log);
    }
    static debug(log:string) {
      if(Log.logLev!=0){
        Log.logLev=0;
      }
      this.printLog(log);
    }
  
    static log(log:string) {
      if(Log.logLev!=1){
        Log.logLev=1;
      }
      this.printLog(log);
    }
  
  
    static error(log:string) {
      if(Log.logLev!=2){
        Log.logLev=2;
      }
      this.printLog(log);
    }
  
    static LogLevDebug = 0;
    static LogLevInfo = 1;
    static LogLevError = 2;
    static logLev = Log.LogLevDebug;
  }
  
  //****** TODO 方法调用 ******
  export class JSMethodCall {
    name?:string;
    args?:Map<string,any>;
  
    encodeJSON() {
      return JSON.stringify({ "funcName": this.name, "args": this.args });
    }
  
    static new(name:string,args?:Map<string,any>){
      var v = new JSMethodCall();
      v.name = name;
      v.args = args;
      return v;
    }
  }
  
  //****** TODO 全局callbak管理器 ******
  export class JSCallbackMgr {
    callbackIDFeed:number;
  
    callbackID2fun?:Map<string,any>;
    static instance:JSCallbackMgr;
  
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
  
    createCallbackID(callback:any) {
      let callbackID = this.generateID();
      this.callbackID2fun?.set(callbackID,callback);
      return callbackID;
    }
  
    invokeCallback(callbackID:string, args:any) {
      let callback = this.findCallback(callbackID);
      callback(args);
    }
  
    findCallback(callbackID:string) {
      return this.callbackID2fun?.get(callbackID);
    }
  
    removeCallback(callbackID:string) {
      this.callbackID2fun?.delete(callbackID);
    }
  }
  
  //****** TODO BuildContext 和flutter BuildContext 保持一致的编程方式 ******
  export class BuildContext {
    widget?:BaseWidget;
    parentBuildContext?:BuildContext;
    inheritedInfo?:any;
    static new(widget:BaseWidget, parentBuildContext?:BuildContext){
      var v = new BuildContext();
      v.widget = widget;
      v.widget.buildContext = v;
      v.parentBuildContext = parentBuildContext;
      v.inheritedInfo = {};
      return v;
    }
  
    static inheritBuildContext(widget:BaseWidget, buildContext?:BuildContext) {
      var context = BuildContext.new(widget, buildContext);
      context.inheritedInfo = buildContext?.inheritedInfo;
      return context;
    }
  
    setInheritedInfo(args?:any) {
      this.inheritedInfo = args;
    }
  }
  
  //****** TODO WidgetHelper ******
  export class WidgetHelper {
    widget:BaseWidget;
    constructor(widget:BaseWidget) {
      this.widget = widget;
    }
  
    setState(fun?:any) {
      this.widget.state?.setState(fun);
    }
  
    //util api
    //building
  
    static buildWidgetData(jsWidget:BaseWidget) {
  
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
              replacement.set(key,value);
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
      this.widget.buildWidgetDataSeq = String(
        ++this.widget.buildWidgetDataSeqFeed
      );
  
      let tempWidgetTree = WidgetTree.new(
        this.widget.buildWidgetDataSeq
      );
      tempWidgetTree.ownerWidget = this.widget;
  
      this.widget.buildingWidgetTree = tempWidgetTree;
      Log.log("JSWidget buildWidgetTree ::" + this.widget.getWidgetInfo());
  
      let tempWidgetTreeObjMap;
      if (this.widget instanceof StatelessWidget) {
        tempWidgetTreeObjMap = this.widget.build(this.widget.buildContext);
      } else if (this.widget instanceof StatefulWidget) {
        //必须在Build的时候才创建State
        if (this.widget.state==null && this.widget.state==undefined) {
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
      this.widget.buildSeq2WTreeMap?.set(tempWidgetTree.buildWidgetDataSeq,tempWidgetTree);
  
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
  
    preBuildJson(widgetTree:WidgetTree, widgetTreeObjMap:any) {
  
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
    buildingCreateCallbackID(callback:any) {
      //* XSFlutter beta 0.1.0开始，框架不在帮助上层代码绑定this，开发者需要自己绑定需要的对象 
      //callback = callback.bind(this.widget);
      return this.widget.buildingWidgetTree?.createCallbackID(
        callback
      );
    }
  
    setupAsRootWidget() {
      this.widget.buildingWidgetTree = WidgetTree.new("1");
      this.widget.currentWidgetTree = this.widget.buildingWidgetTree;
  
    }
  
    addChildWidget(jsWidget:BaseWidget) {
      jsWidget.parentWidget = this.widget;
      this.widget.buildingWidgetTree?.childrenWidget.set(jsWidget.widgetID,jsWidget);
    }
  
    removeChildWidget(jsWidget:BaseWidget) {
      if (this.widget.currentWidgetTree &&this.widget.currentWidgetTree.childrenWidget
      ) {
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
    onEventCallback(args:any) {
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
        return jsWidget?.helper?.invokeCallback(buildWidgetDataSeq, callID, args["args"]);
      } else {
        Log.error(
          "onEventCallback error: jsWidget == null onEventCallback(args:" + args
        );
      }
    }
  
    findWidgetWithWidgetID(widgetID:string) :BaseWidget | undefined  {
      //当前Widget
      if (this.widget.widgetID == widgetID) {
        return this.widget;
      }
  
      //全局中找对象
      let w = WidgetMgr.getInstance().findWidget(widgetID);
      if(w!=null && w!=undefined){
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
  
    invokeCallback(buildWidgetDataSeq:any, callID:any, args:any) {
  
      Log.log("JSWidget invokeCallback ::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq + " callID: " + callID);
  
      if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq != buildWidgetDataSeq) {
        Log.error(
          "JSWidget:invokeCallback:this.widget.currentWidgetTree.buildWidgetDataSeq(" + this.widget.currentWidgetTree.buildWidgetDataSeq + ")  != buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
          " callID: " +
          callID
        );
  
        if (this.widget.preWidgetTree && this.widget.preWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
          Log.error(
            "JSWidget:invokeCallback:this.widget.preWidgetTree.buildWidgetDataSeq(" + this.widget.preWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
            " callID: " +
            callID
          );
  
        }
  
        if (this.widget.buildingWidgetTree && this.widget.buildingWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
          Log.error(
            "JSWidget:invokeCallback:this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
            " callID: " +
            callID
          );
  
        }
  
        return null;
      }
  
      if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.findCallback(callID)) {
        return this.widget.currentWidgetTree.invokeCallback(callID, args);
      }
      else {
        // @ts-ignore：容错处理
        Log.error(
          "JSWidget:invokeCallback: 容错搜索所有BuildTree，this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget?.buildingWidgetTree?.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
          " callID: " +
          callID
        );
        for (let seq in this.widget.buildSeq2WTreeMap) {
          let tree = this.widget.buildSeq2WTreeMap.get(seq);
  
          if (tree?.findCallback(callID)) {
            return tree.invokeCallback(callID, args);
          }
  
        }
      }
  
    }
  
  
    onBuildEnd(args:any) {
      let widgetID = args["widgetID"];
      let buildWidgetDataSeq = args["buildSeq"];
      let jsWidget = this.findWidgetWithWidgetID(widgetID);
  
      if (jsWidget != null) {
        let profileInfo = args["profileInfo"];
        jsWidget?.helper?.onFlutterBuildEnd(buildWidgetDataSeq, profileInfo);
      } else {
        Log.error("onBuildEnd error: jsWidget == null widgetID: " + widgetID + " buildWidgetDataSeq: " + buildWidgetDataSeq);
      }
    }
  
    onFlutterBuildEnd(buildWidgetDataSeq:any, profileInfo:any) {
  
      let tree = this.widget.buildSeq2WTreeMap?.get(buildWidgetDataSeq);
  
      if (tree != null) {
        this.widget.preWidgetTree = this.widget.currentWidgetTree;
        this.widget.currentWidgetTree = tree;
  
        Log.log("JSWidget onFlutterBuildEnd success::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
  
        this.clearWidgetTree(buildWidgetDataSeq);
      } else {
        // @ts-ignore：this.widget.buildSeq2WTreeMap
        Log.error("JSWidget onFlutterBuildEnd fail buildSeq2WTreeMap.keys: [" + Object.keys(this.widget.buildSeq2WTreeMap).join("|") + "]::" + this.widget.getWidgetInfo() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
      }
  
  
      if (this.widget instanceof StatelessWidget) {
        this.widget.onBuildEnd();
      } else if (this.widget instanceof StatefulWidget) {
        this.widget.state.onBuildEnd();
      }
    }
  
    //比buildWidgetDataSeq小的tree 可以清理掉了
    clearWidgetTree(buildWidgetDataSeq:any) {
  
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
        let widgetID= clearSeqs[i];
        //Log.debug("JSWidget clearWidgetTree::" + this.widget.getWidgetInfo() + " delSeq: " + delSeq);
        WidgetMgr.getInstance().remove(widgetID);
        this.widget.buildSeq2WTreeMap?.delete(widgetID);
      }
  
    }
  
    onDispose(args?:any) {
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
      } else {
        Log.error("onDispose error: jsWidget == null widgetID " + widgetID);
      }
    }
  
    onFlutterDispose() {
  
      Log.log("JSWidget onFlutterDispose ::" + this.widget.getWidgetInfo());
      //调用子widget disposeWidget
      if (
        this.widget.currentWidgetTree &&
        this.widget.currentWidgetTree.childrenWidget
      ) {
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
    navigatorPush(jsWidget:BaseWidget) {
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
  
      if(jsWidget!=null && jsWidget !=undefined){
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
      JSFramework.callFlutterWidgetChannel("navigatorPop", {widgetID});
  
      if (this.widget.navPushedWidgets && widgetID!=undefined) {
        WidgetMgr.getInstance().remove(widgetID);
        this.widget.navPushedWidgets.delete(widgetID);
      }
    }
  
    //留意：这个函数命名是不是应该是removePushedWidget
    removePushingWidget(jsWidget:BaseWidget) {
      if (this.widget.navPushedWidgets) {
        WidgetMgr.getInstance().remove(jsWidget.widgetID);
        this.widget.navPushedWidgets.delete(jsWidget.widgetID);
      }
    }
  
    updatePushingWidgetsData(jsWidget:BaseWidget) {
  
      Log.log("updatePushingWidgetsData WidgetName:" + jsWidget.widgetName);
      var newJSWidget=jsWidget;
      //设置push jsWidget的widget
      newJSWidget.navPushingWidget = this.widget;
      newJSWidget.buildContext = BuildContext.inheritBuildContext(newJSWidget, this.widget.buildContext);
      newJSWidget.navPushingWidgetID = this.widget.widgetID;
      this.widget.navPushedWidgets?.set(newJSWidget.widgetID,newJSWidget);
      let widgetData = WidgetHelper.buildWidgetData(newJSWidget);
  
      return widgetData;
    }
  
  
    findTopRootWidget():BaseWidget | undefined {
      let rootWidget = this.widget.parentWidget;
      if (rootWidget == null || rootWidget == undefined) {
        return this.widget;
      }
      return rootWidget.helper?.findTopRootWidget();
    }
  }
  
  
  //****** TODO Widget树 ******
  export class WidgetTree {
    buildWidgetDataSeq:string = "";
    childrenWidget:Map<string,BaseWidget>;
    callbackID2fun?:Map<string,any>;
    widgetTreeObjMap?:any;
    ownerWidget?:BaseWidget;
  
    constructor(){
      this.buildWidgetDataSeq="";
      this.childrenWidget = new Map();
    }
  
    static new(buildWidgetDataSeq:string){
      var v = new WidgetTree();
      v.buildWidgetDataSeq=buildWidgetDataSeq;
      v.childrenWidget = new Map();
      v.callbackID2fun =new Map();
      v.widgetTreeObjMap = null;
      v.ownerWidget = undefined;
      return v;
    }
  
    //统一用全局的id生成器
    generateID() {
      return JSCallbackMgr.getInstance().generateID();
    }
  
    createCallbackID(callback:any) {
      let callbackID = this.ownerWidget?.widgetID + "/" + this.generateID();
      this.callbackID2fun?.set(callbackID,callback);
      return callbackID;
    }
  
    invokeCallback(callbackID:string, ...args:any) {
      let callback = this.findCallback(callbackID);
      return callback(...args);
    }
  
    findCallback(callbackID:string) {
      return this.callbackID2fun?.get(callbackID);
    }
  }
  
  //****** Widget Mgr ******
  export class WidgetMgr {
    //JS侧现生成的JSWidget， widgetID为偶数，从0开始
    widgetIDFeed:number;
    widgetID2WidgetMap:Map<string,BaseWidget>;
  
    //单例
    static instance?: WidgetMgr;
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
  
    
    registerWidget(widget:BaseWidget) {
      this.widgetID2WidgetMap.set(widget.widgetID,widget);
    }
  
    remove(widgetID:string) {
      this.widgetID2WidgetMap.delete(widgetID);
    }
  
    findWidget(widgetID:string) {
      Log.log("======widgetID2WidgetMap:"+String(this.widgetID2WidgetMap.size));
      return this.widgetID2WidgetMap.get(widgetID);
    }
  }
  
  
  //****** BaseWidget ******
  interface BaseWidgetConfig {
    name?:string;        //控件名
    key?:Key;
  }
  export class BaseWidget extends Widget {
    name?:string;        //控件名
    key?:Key;   
    widgetName?:string; 
    widgetID:string;
    helper:WidgetHelper;
    navPushingWidgetID:string;
    buildWidgetDataSeq:string;
    buildWidgetDataSeqFeed:number;
    parentWidget?:BaseWidget;
    state?:any;
    navPushingWidget?:BaseWidget;
    navPushedWidgets:Map<string,BaseWidget>;
    buildSeq2WTreeMap:Map<string,WidgetTree>;
    currentWidgetTree?:WidgetTree;    //当前树
    buildingWidgetTree?:WidgetTree;   //UI树
    preWidgetTree?:WidgetTree;        //预处理树
    buildContext?:BuildContext;       //BuildContext
  
    constructor(config?:BaseWidgetConfig) {
      super();
      if(config!=null && config!=undefined){
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
    getWidgetTreeBuildSeq(widgetTree?:WidgetTree) {
      if (widgetTree == null) {
        return "0";
      }
      return widgetTree.buildWidgetDataSeq;
    }
  
    onBuildEnd(args?:any) { }
  }
  
  //****** StatefulWidget ******
  export class StatefulWidget extends BaseWidget {
    
    constructor(config?:BaseWidgetConfig) {
      super(config);
      this.className = "StatefulWidget";
    }
  
    //subclass override
    createState(){ }
  }
  
  //在JS层，要封装控件，如不需要改变UI内容，使用无状态的StatelessWidget
  export class StatelessWidget extends BaseWidget {
    constructor(config?:BaseWidgetConfig) {
      super(config);
      this.className = "StatelessWidget";
    }
  
    //subclass override
    build(context?:BuildContext) {}
  }
  
  export class WidgetState {
  
    widget:StatefulWidget;
    constructor(widget:StatefulWidget) {
      this.widget = widget;
    }
  
    get context() {
      return this.widget?.buildContext;
    }
  
    //subclass override
    initState() {
      Log.log("WidgetState initState ::" + this.widget?.getWidgetInfo());
    }
  
    setState(fun?:any) {
      Log.log("WidgetState setState ::" + this.widget?.getWidgetInfo());
      if (fun) {
        fun();
      }
      //call-> Flutter
      this.widget?.helper?.callFlutterRebuild();
    }
  
    //subclass override
    build(context?:BuildContext) {}
  
    //subclass overwite
    onBuildEnd(args?:any) { }
  
    //subclass override
    dispose() { }
  }
  //#endregion


//#region ******** Base Enum ********

  //#region ------ A ------

//****** Axis ******
export enum Axis {
    horizontal = "horizontal",
    vertical = "vertical",
  }
  
  //****** xisDirection ******
  export enum AxisDirection {
    left = "left",
    down = "down",
    right = "right",
    up = "up",
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
  //#endregion
  
  //#region ------ B ------
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
  
  //****** BannerLocation ******
  export enum BannerLocation {
    topStart = "topStart",
    topEnd = "topEnd",
    bottomStart = "bottomStart",
    bottomEnd = "bottomEnd",
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
  
  //****** BoxHeightStyle ******
  export enum BoxHeightStyle {
    tight = "tight",
    max = "max",
    includeLineSpacingMiddle = "includeLineSpacingMiddle",
    includeLineSpacingTop = "includeLineSpacingTop",
    includeLineSpacingBottom = "includeLineSpacingBottom",
    strut = "strut",
  }

  //****** BoxWidthStyle ******
  export enum BoxWidthStyle {
    tight = "tight",
    max = "max",
  }
  
  //#endregion
  
  //#region ------ C ------
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
  //#endregion
  
  //#region ------ D ------
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

  //****** DrawerAlignment ******
  export enum DrawerAlignment  {
    start = "start",
    end = "end",
  }
  //#endregion
  
  //#region ------ F ------
  //****** FlutterLogoStyle ******
  export enum FlutterLogoStyle {
    horizontal = "horizontal",
    markOnly = "markOnly",
    stacked = "stacked",
  }
  
  //****** FloatingLabelBehavior ******
  export enum FloatingLabelBehavior {
    never = "never",
    auto = "auto",
    always = "always",
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
  
  //****** FlexFit ******
  export enum FlexFit {
    tight = "tight",
    loose = "loose",
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
  //#endregion
  
  //#region ------ H ------
  //****** HitTestBehavior ******
  export enum HitTestBehavior {
    deferToChild = "deferToChild",
    opaque = "opaque",
    translucent = "translucent",
  }
  //#endregion
  
  //#region ------ I ------
  //****** ImageRepeat ******
  export enum ImageRepeat {
    repeat = "repeat",
    repeatX = "repeatX",
    repeatY = "repeatY",
    noRepeat = "noRepeat",
  }
  //#endregion
  
  //#region ------ L ------
  //****** ListTileStyle ******
  export enum ListTileStyle {
    list = "list",
    drawer = "drawer",
  }
  
  //****** ListTileControlAffinity ******
  export enum ListTileControlAffinity {
    leading = "leading",
    trailing = "trailing",
    platform = "platform",
  }
  
  //#endregion
  
  //#region ------ M ------
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
  //#endregion
  
  //#region ------ N ------
  //****** NavigationMode ******
  export enum NavigationMode {
    traditional = "traditional",
    directional = "directional",
  }
  //#endregion
  
  //#region ------ O ------
  //****** Overflow ******
  export enum Overflow {
    visible = "visible",
    clip = "clip",
  }
  //#endregion
  
  //#region ------ P ------
  //****** PaintingStyle ******
  export enum PaintingStyle {
    fill = "fill",
    stroke = "stroke",
  }
  
  //****** PlaceholderAlignment ******
  export enum PlaceholderAlignment {
    baseline = "baseline",
    aboveBaseline = "aboveBaseline",
    belowBaseline = "belowBaseline",
    top = "top",
    bottom = "bottom",
    middle = "middle",
  }
  
   //****** PointerChange ******
   export enum PointerChange {
    cancel = "cancel",
    add = "add",
    remove = "remove",
    hover = "hover",
    down = "down",
    move = "move",
    up = "up",
  }

   //****** PointerDeviceKind ******
   export enum PointerDeviceKind {
    touch = "touch",
    mouse = "mouse",
    invertedStylus = "invertedStylus",
    unknown = "unknown",
  }

   //****** PointerSignalKind ******
   export enum PointerSignalKind {
    none = "none",
    scroll = "scroll",
    unknown = "unknown",
  }

  //#endregion
  
  //#region ------ R ------
  //****** RenderComparison ******
  export enum RenderComparison {
    identical = "identical",
    metadata = "metadata",
    paint = "paint",
    layout = "layout",
  }
  
  //#endregion
  
  //#region ------ S ------
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
  
  //****** SnackBarClosedReason ******
  export enum SnackBarClosedReason {
    action = "action",
    dismiss = "dismiss",
    swipe = "swipe",
    hide = "hide",
    remove = "remove",
    timeout = "timeout",
  }
  
  //****** ScrollPositionAlignmentPolicy ******
  export enum ScrollPositionAlignmentPolicy {
    explicit = "explicit",
    keepVisibleAtEnd = "keepVisibleAtEnd",
    keepVisibleAtStart = "keepVisibleAtStart",
  }
  
  //#endregion
  
  //#region ------ T ------
  //****** TileMode ******
  export enum TileMode {
    clamp = "clamp",
    repeated = "repeated",
    mirror = "mirror",
  }

  //****** SmartDashesType ******
  export enum SmartDashesType {
    disabled = "disabled",
    enabled = "enabled",
  }

  //****** SmartQuotesType ******
  export enum SmartQuotesType {
    disabled = "disabled",
    enabled = "enabled",
  }
  
  //****** TextWidthBasis ******
  export enum TextWidthBasis {
    parent = "parent",
    longestLine = "longestLine",
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
    dashed = "dashed",
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
    linux = "linux",
    macOS = "macOS",
    windows = "windows",
  }
  //#endregion
  
  //#region ------ V ------
  //****** VerticalDirection ******
  export enum VerticalDirection {
    up = "up",
    down = "down",
  }
  //#endregion
  
  //#region ------ W ------
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
  //#endregion 

  
//#endregion


//#region ******** Class ********

  //#region ------- A -------
//****** Alignment ******
export class Alignment extends DartClass {
    x?:number;
    y?:number;
  
    constructor(x:number, y:number){
      super();
      this.x = x;
      this.y = y;
    }
    
    static new(x:number, y:number){
      return new Alignment(x,y);
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
  
    constructor(start:number, y:number){
      super();
      this.start = start;
      this.y = y;
    }
  
    static new(start:number, y:number){
      return new AlignmentDirectional(start,y);
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
  
  //****** AssetBundle ******
  export class AssetBundle extends DartClass {
    baseUrl?:Uri;
  
    static network(baseUrl:Uri) {
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
  
  //****** AssetImage ******
  interface AssetImageConfig {
    bundle?:AssetBundle;
    packageName?:string;
  }
  export class AssetImage extends DartClass {
    assetName?:string;
    bundle?:AssetBundle;
    packageName?:string;
  
    /**
     * @param config config: 
      {
        assetName:string, 
        bundle?:BaseAssetBundle, 
        packageName?:string
      }
     */
    constructor(assetName:string,config?: AssetImageConfig){
      super();
      this.assetName = assetName
      if(config!=null && config!=undefined){
        this.bundle = config.bundle;
        this.packageName = config.packageName;
      }
    }
  
    /**
     * @param config config: 
      {
        assetName:string, 
        bundle?:BaseAssetBundle, 
        packageName?:string
      }
     */
    static new(assetName:string,config?: AssetImageConfig) {
      return new AssetImage(assetName,config);
    }
  }
  //#endregion
  
  //#region ------- B ------- 
  //****** BoxConstraints ******
  interface BoxConstraintsConfig {
    minWidth?:number;
    maxWidth?:number;
    minHeight?:number;
    maxHeight?:number;
  }
  export class BoxConstraints extends DartClass {
    minWidth?:number;
    maxWidth?:number;
    minHeight?:number;
    maxHeight?:number;
  
    /**
     * @param config config: 
      {
        minWidth?:number, 
        maxWidth?:number, 
        minHeight?:number, 
        maxHeight?:number
      }
     */
    constructor(config?: BoxConstraintsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BoxConstraintsConfig){
      return new BoxConstraints(config);
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
     * @param config config: 
        {
          color?:Color, 
          width?:number, 
          style?:BorderStyle
        }
     */
    constructor(config?: BorderSideConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BorderSideConfig){
      return new BorderSide(config);
    }
  
    static none() {
      let v = new BorderSide();
      v.constructorName = "none";
      return v;
    }
  }
  
  //****** BorderRadius ******
  interface BorderRadiusConfig {
    top?:Radius;
    bottom?:Radius;
    left?:Radius;
    right?:Radius;
    topLeft?:Radius;
    topRight?:Radius;
    bottomLeft?:Radius;
    bottomRight?:Radius;
  }
  export class BorderRadius  extends DartClass {
    radius?:number|Radius;
    top?:Radius;
    bottom?:Radius;
    left?:Radius;
    right?:Radius;
    topLeft?:Radius;
    topRight?:Radius;
    bottomLeft?:Radius;
    bottomRight?:Radius;
  
    static zero(){
      let o = new BorderRadius();
      o.constructorName = "zero";
      return o;
    }
  
    static all(radius:Radius){
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
     * @param config config: 
        {
          top?:Radius, 
          bottom?:Radius
        }
     */
    static vertical(config?: BorderRadiusConfig){
      let v = new BorderRadius();
      v.constructorName = "vertical";
      if(config!=null && config!=undefined){
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
    static horizontal(config?: BorderRadiusConfig){
      let v = new BorderRadius();
      v.constructorName = "horizontal";
      if(config!=null && config!=undefined){
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
    static only(config?: BorderRadiusConfig){
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
  
  //****** BorderRadiusDirectional ******
  interface BorderRadiusDirectionalConfig {
    top?:Radius;
    bottom?:Radius;
    start?:Radius;
    end?:Radius;
  
    topStart?:Radius;
    topEnd?:Radius;
    bottomStart?:Radius;
    bottomEnd?:Radius;
  }
  export class BorderRadiusDirectional  extends DartClass {
    radius?:Radius| number;
    top?:Radius;
    bottom?:Radius;
  
    start?:Radius;
    end?:Radius;
  
    topStart?:Radius;
    topEnd?:Radius;
    bottomStart?:Radius;
    bottomEnd?:Radius;
  
    static zero(){
      let o = new BorderRadiusDirectional();
      o.constructorName = "zero";
      return o;
    }
  
    static all(radius:Radius){
      let v = new BorderRadiusDirectional();
      v.constructorName = "all";
      v.radius = radius;
      return v;
    }
  
    static circular(radius:number){
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
    static vertical(config?: BorderRadiusDirectionalConfig){
      let v = new BorderRadiusDirectional();
      v.constructorName = "vertical";
      if(config!=null && config!=undefined){
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
    static horizontal(config?: BorderRadiusDirectionalConfig){
      let v = new BorderRadiusDirectional();
      v.constructorName = "horizontal";
      if(config!=null && config!=undefined){
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
    static only(config?: BorderRadiusDirectionalConfig){
      let v = new BorderRadiusDirectional();
      v.constructorName = "only";
      if(config!=null && config!=undefined){
        v.topStart = config.topStart;
        v.topEnd = config.topEnd;
        v.bottomStart = config.bottomStart;
        v.bottomEnd = config.bottomEnd;
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
  
    color?:Color;
    width?:number;
    style?:BorderStyle;
  
    /**
     * @param config config: 
      {
        top?:BorderSide, 
        right?:BorderSide, 
        bottom?:BorderSide, 
        left?:BorderSide,
      }
     */
    constructor(config?: BorderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BorderConfig)  {
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
    static all(config: BorderConfig) {
      var v = new Border();  
      v.constructorName = "all";
      if(config!=null && config!=undefined){
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
    static symmetric(config?: BorderConfig) {
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
  interface BorderDirectionalConfig {
    top?:BorderSide;
    start?:BorderSide;
    bottom?:BorderSide;
    end?:BorderSide;
  }
  export class BorderDirectional extends DartClass {
    top?:BorderSide;
    start?:BorderSide;
    bottom?:BorderSide;
    end?:BorderSide;
  
    /**
     * @param config config: 
        {
          top?:BorderSide, 
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    constructor(config?: BorderDirectionalConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BorderDirectionalConfig) {
      return new BorderDirectional(config);
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
     * @param config config: 
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
    constructor(config?: ButtonThemeDataConfig){
      super();
      if(config!=null && config!=undefined){
        this.textTheme = config.textTheme;
        this.minWidth = config.minWidth;
        this.height = config.height;
        this.padding = config.padding;
        this.layoutBehavior = config.layoutBehavior;
        this.alignedDropdown = config.alignedDropdown;
        this.buttonColor = config.buttonColor;
        this.disabledColor = config.disabledColor;
        this.focusColor = config.focusColor;
        this.hoverColor = config.hoverColor;
        this.highlightColor = config.highlightColor;
        this.splashColor = config.splashColor;
        this.colorScheme = config.colorScheme;
      }
    }
  
    /**
     * @param config config: 
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
    static new(config?: ButtonThemeDataConfig) {
      return new ButtonThemeData(config);
    }
  }
  
  //****** BoxDecoration ******
  interface BoxDecorationConfig { 
    color?:Color;
    border?:Border;
    borderRadius?:BorderRadius;
    boxShadow?:BoxShadow;
    gradient?:Gradient;
    backgroundBlendMode?:BlendMode;
    shape?:BoxShape;
    image?:any;
  }
  export class BoxDecoration extends DartClass {
    color?:Color;
    border?:Border;
    borderRadius?:BorderRadius;
    boxShadow?:BoxShadow;
    gradient?:Gradient;
    backgroundBlendMode?:BlendMode;
    shape?:BoxShape;
    image?:any;
  
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
    constructor(config?: BoxDecorationConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BoxDecorationConfig){
      return new BoxDecoration(config);
    }
  }
  
  //****** BannerPainter ******
  interface BannerPainterConfig {
    message:string;
    textDirection:TextDirection;
    location:BannerLocation;
    layoutDirection?:TextDirection;
    color?:Color;
    textStyle?:TextStyle;
  }
  export class BannerPainter extends DartClass {
    message?:string;
    textDirection?:TextDirection;
    location?:BannerLocation;
    layoutDirection?:TextDirection;
    color?:Color;
    textStyle?:TextStyle;
  
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
    constructor(config: BannerPainterConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: BannerPainterConfig){
      return new BannerPainter(config);
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
     * @param config config: 
      {
        color?:Color, 
        offset?:Offset, 
        blurRadius?:number, 
        spreadRadius?:number
      }
     */
    constructor(config?: BoxShadowConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: BoxShadowConfig) {
      return new BoxShadow(config);
    }
  }
  
  //****** BouncingScrollPhysics ******
  export class BouncingScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
    
    constructor(config?: ScrollPhysicsConfig){
      super();
      if(config!=null && config!=undefined){
        this.parent = config.parent;
      }
    }
  
    static new(config?: ScrollPhysicsConfig) {
      return new BouncingScrollPhysics(config);
    }
  }
  //#endregion
  
  //#region ------- C -------
  //****** Color ******
  export class Color extends DartClass {
    value?: number;
    a?: number;
    r?: number;
    g?: number;
    b?: number;
    opacity?: number;
  
    constructor(value?: number){
      super();
      this.value =value;
    }
  
    static new(value: number)  {    
      return new Color(value);
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
  
    constructor(color:Color, blendMode:BlendMode){
      super();
      this.color = color;
      this.blendMode =blendMode;
    }
  
    static new(color:Color, blendMode:BlendMode) {
      return new ColorFilter(color,blendMode);
    }
  
    static mode(color:Color, blendMode:BlendMode){
      let v = new ColorFilter(color,blendMode);
      v.constructorName = "mode";
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
     * @param config config: 
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
    constructor(config?: ColorSchemeConfig){
      super();
      if(config!=null && config!=undefined){
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
        this.onBackground = config.onBackground;
        this.onError = config.onError;
        this.brightness = config.brightness;
      }
    }
  
    /**
     * @param config config: 
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
    static new(config?: ColorSchemeConfig) {
      return new ColorScheme(config); 
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
    parent?:ScrollPhysics;
  
    constructor(config?: ScrollPhysicsConfig){
      super();
      if(config!=null && config!=undefined){
        this.parent = config.parent;
      }
    }
  
    static new(config?: ScrollPhysicsConfig) {
      return new ClampingScrollPhysics(config);
      
    }
  }
  
  
  //****** CurveTween ******
  export class CurveTween extends Widget {
    curve?:Curve;
  
    constructor(curve?:Curve){
      super();
      this.curve = curve;
    }
  
    static new(curve?:Curve) {
      return new CurveTween(curve);
    };
  }
  
  //#endregion
  
  //#region ------- D -------
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
    inMilliseconds:number;
  
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
    constructor(config?: DurationConfig){
      super();
      if(config!=null && config!=undefined){
        this.days = config.days;
        this.hours = config.hours;
        this.minutes = config.minutes;
        this.seconds = config.seconds;
        this.milliseconds = config.milliseconds;
      }

      this.inMilliseconds=0;
      if(this.milliseconds!=null && this.milliseconds!=undefined){
        this.inMilliseconds=this.inMilliseconds+this.milliseconds;
      }

      if(this.seconds!=null && this.seconds!=undefined){
        this.inMilliseconds=this.inMilliseconds+this.seconds*1000;
      }
      if(this.minutes!=null && this.minutes!=undefined){
        this.inMilliseconds=this.inMilliseconds+this.minutes*1000*60;
      }
      if(this.hours!=null && this.hours!=undefined){
        this.inMilliseconds=this.inMilliseconds+this.hours*1000*60*60;
      }
      if(this.days!=null && this.days!=undefined){
        this.inMilliseconds=this.inMilliseconds+this.days*1000*60*60*24;
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
    static new(config?: DurationConfig) {
      return new Duration(config);
    }
  }
  //#endregion
  
  //#region ------- E -------
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
     * @param config config:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    constructor(config?: EdgeInsetsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: EdgeInsetsConfig) {
      return new EdgeInsets(config);
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
     * @param config config: 
        {
          left?:number, 
          top?:number, 
          right?:number, 
          bottom?:number
        }
     */
    static only(config?: EdgeInsetsConfig) {
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
     * @param config config: 
        {
          vertical?:number, 
          horizontal?:number
        }
     */
    static symmetric(config?: EdgeInsetsConfig) {
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
     * @param config config: 
        {
          start?:number, 
          top?:number, 
          end?:number, 
          bottom?:number,
        }
     */
    constructor(config?: EdgeInsetsDirectionalConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: EdgeInsetsDirectionalConfig) {
      return new EdgeInsetsDirectional(config);
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
     * @param config config: 
        {
          start?:number, 
          top?:number, 
          end?:number, 
          bottom?:number
        }
     */
    static only(config?: EdgeInsetsDirectionalConfig) {
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
  
  //#endregion
  
  //#region ------- F -------

  export class Future extends DartClass{
    static delayed(duration:Duration,onBack?:VoidCallback){
      dart_sdk.async.Future.delayed(duration,onBack);
    }
  }

  //****** FlexColumnWidth ******
  export class FlexColumnWidth extends DartClass {
    value?:number;
  
    constructor(value:number){
      super();
      this.value = value;
    }
  
    static new(value:number) {
      return new FlexColumnWidth(value);
    }
  }
  
  //****** FlutterLogoDecoration ******
  interface FlutterLogoDecorationConfig {
    textColor?:Color;
    style?:FlutterLogoStyle;
    margin?:EdgeInsets;
  }
  export class FlutterLogoDecoration extends DartClass {
    textColor?:Color;
    style?:FlutterLogoStyle;
    margin?:EdgeInsets;
  
    /**
     * @param config config: 
        {
          textColor?:Color, 
          style?:FlutterLogoStyle, 
          margin?:EdgeInsets, 
        }
     */
    constructor(config?: FlutterLogoDecorationConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: FlutterLogoDecorationConfig) {
      return new FlutterLogoDecoration(config);
    }
  } 

   //****** FocusNode ******
  interface FocusNodeConfig {
    debugLabel?:string;
    skipTraversal?:boolean;
    canRequestFocus?:boolean;
    descendantsAreFocusable?:boolean;
  }
  export class FocusNode extends DartClass {
    debugLabel?:string;
    skipTraversal?:boolean;
    canRequestFocus?:boolean;
    descendantsAreFocusable?:boolean;
  
    /**
     * @param config config: 
        {
          debugLabel?:string,
          skipTraversal?:boolean,
          canRequestFocus?:boolean,
          descendantsAreFocusable?:boolean,
        }
     */
    constructor(config?: FocusNodeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: FocusNodeConfig) {
      return new FocusNode(config);
    }
  } 

  
  //****** FractionalOffset ******
  export class FractionalOffset extends DartClass {
    dx?:number;
    dy?:number;
  
    constructor(dx:number, dy:number){
      super();
      this.dx = dx;
      this.dy = dy;
    }
  
    static new(dx:number, dy:number) {
      return new FractionalOffset(dx,dy);
    }
  
    static topLeft = FractionalOffset.new(0.0, 0.0); 
    static topCenter = FractionalOffset.new(0.5, 0.0); 
    static topRight = FractionalOffset.new(1.0, 0.0); 
  
    static centerLeft = FractionalOffset.new(0.0, 0.5); 
    static center = FractionalOffset.new(0.5, 0.5); 
    static centerRight = FractionalOffset.new(1.0, 0.5);
  
    static bottomLeft = FractionalOffset.new(0.0, 1.0);
    static bottomCenter = FractionalOffset.new(0.5, 1.0);
    static bottomRight = FractionalOffset.new(1.0, 1.0); 
  
  }
  
  //****** FixedColumnWidth ******
  export class FixedColumnWidth extends DartClass {
    value?:number;
  
    constructor(value:number){
      super();
      this.value = value;
    }
  
  
    static new(value:number) {
      return new FixedColumnWidth(value);
    }
  }
  
  //****** File ******
  export class File extends DartClass {
    path?:string;
    uri?:Uri;
    rawPath?:Uint8List;
  
    constructor(path?:string){
      super();
      this.path = path;
    }
  
    static new(path:string) {
      return new File(path);
    }
  
    static fromUri(uri:Uri) {
      let v = new File();
      v.constructorName = "fromUri";
      v.uri = uri;
      return v;
    }
  
    static fromRawPath(rawPath:Uint8List) {
      let v = new File();
      v.constructorName = "fromRawPath";
      v.rawPath = rawPath;
      return v;
    }
  }
  
  
  
  //#endregion
  
  //#region ------- G -------
  //****** GradientTransform ******
  export class GradientTransform extends DartClass {
    radians?:number;
  
    static rotation(radians?:number) {
      var v = new GradientTransform();
      v.constructorName = "rotation";
      v.radians=radians;
      return v;
    }
  }
  
  //****** Gradient ******
  interface GradientConfig {
    center?:Alignment;
    startAngle?:number;
    endAngle?:number;
    colors:Array<Color>;
    stops?:Array<number>;
    tileMode?:TileMode;
    transform?:GradientTransform;
  
  
    radius?:number;
    focal?:Alignment;
    focalRadius?:number;
  
    begin?:Alignment;
    end?:Alignment;
  }
  export class Gradient extends DartClass {
    center?:Alignment;
    startAngle?:number;
    endAngle?:number;
    colors?:Array<Color>;
    stops?:Array<number>;
    tileMode?:TileMode;
    transform?:GradientTransform;
  
    //Radial
    radius?:number;
    focal?:Alignment;
    focalRadius?:number;
  
    //
    begin?:Alignment;
    end?:Alignment;
  
  
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
    static sweep(config: GradientConfig) {
      var v = new Gradient();
      v.constructorName = "sweep";
      if(config!=null && config!=undefined){
        v.center = config.center;
        v.startAngle = config.startAngle;
        v.endAngle = config.endAngle;
        v.colors = config.colors;
        v.stops = config.stops;
        v.tileMode = config.tileMode;
        v.transform = config.transform;
      }
      return v;
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
    static radial(config?: GradientConfig) {
      var v = new Gradient();
      v.constructorName = "radial";
      if(config!=null && config!=undefined){
        v.center = config.center;
        v.radius = config.radius;
        v.colors = config.colors;
        v.stops = config.stops;
        v.tileMode = config.tileMode;
        v.focal = config.focal;
        v.focalRadius = config.focalRadius;
        v.transform = config.transform;
      }
      return v;
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
    static linear(config: GradientConfig) {
      var v = new Gradient();
      v.constructorName = "linear";
      if(config!=null && config!=undefined){
        v.begin = config.begin;
        v.end = config.end;
        v.colors = config.colors;
        v.stops = config.stops;
        v.tileMode = config.tileMode;
        v.transform = config.transform;
      }
      return v;
    }
  }
  
  //#endregion
  
  //#region ------- I -------
  
  //****** InputBorder ******
  interface InputBorderConfig {
    borderSide?:BorderSide;
    borderRadius?:BorderRadius;
    gapPadding?:number;
  }
  
  export class InputBorder extends ShapeBorder {
  
    borderSide?:BorderSide;
    borderRadius?:BorderRadius;
    gapPadding?:number;
  
    static none() {
      var v = new InputBorder();
      v.constructorName= "none";
      return v;
    }
  
    /**
     * @param config config: 
        {
          borderSide?:BorderSide, 
          borderRadius?:BorderRadius, 
          gapPadding?:number,
        }
     */
    static outline(config?: InputBorderConfig) {
      var v = new InputBorder();
      v.constructorName= "outline";
      if(config!=null && config!=undefined){
        v.borderRadius = config.borderRadius;
        v.borderSide = config.borderSide;
        v.gapPadding = config.gapPadding;
      }
      return v;
    }
    
    /**
     * @param config config: 
        {
          borderSide?:BorderSide, 
          borderRadius?:BorderRadius,
        }
     */
    static underline(config?: InputBorderConfig) {
      var v = new InputBorder();
      v.constructorName= "underline";
      if(config!=null && config!=undefined){
        v.borderRadius=config.borderRadius;
        v.borderSide=config.borderSide;
      }
      return v;
    };
  
  }
  
  //****** ImageProvider ******
  interface ImageProviderConfig {
    scale?:number;
  
    width?:number;
    height?:number;
    allowUpscaling?:boolean;
  
    bundle?:AssetBundle;
    packageName?:string
  
  }
  export class ImageProvider extends DartClass {
    file?:File;
    scale?:number;
    bytes?:Uint8List;
    url?:string;
    assetName?:string;
    bundle?:AssetBundle;
    packageName?:string;
  
    width?:number;
    height?:number;
    allowUpscaling?:boolean;
    imageProvider?:ImageProvider
  
    /**
     * @param config config: 
        {
          scale?:number
        }
     */
    static file(file:File,config?: ImageProviderConfig){
      var v = new ImageProvider();
      v.file = file;
      v.constructorName = "file";
      if(config!=null && config!=undefined){
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
    static memory(bytes:Uint8List,config?: ImageProviderConfig) {
      var v = new ImageProvider();
      v.bytes = bytes;
      v.constructorName = "memory";
      if(config!=null && config!=undefined){
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
    static network(url:string, config: ImageProviderConfig) {
      var v = new ImageProvider();
      v.url = url;
      v.constructorName = "Network";
      if(config!=null && config!=undefined){
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
    static resize(imageProvider?:ImageProvider,config?: ImageProviderConfig) {
      var v = new ImageProvider();
      v.constructorName = "resize";
      v.imageProvider= imageProvider;
      if(config!=null && config!=undefined){
        v.width = config.width;
        v.allowUpscaling= config.allowUpscaling;
        v.height = config.height;
      }
      return v;
    }
  
    /**
     * @param config config: 
        {
          assetName:string, 
          scale?:number, 
          bundle?:BaseAssetBundle, 
          packageName?:string,
        }
     */
    static exactAsset(assetName:string,config?: ImageProviderConfig) {
      var v = new ImageProvider();
      v.constructorName = "exactAsset";
      v.assetName = assetName;
      if(config!=null && config!=undefined){      
        v.scale = config.scale;
        v.bundle = config.bundle;
        v.packageName = config.packageName;
      }
      return v;
    }
  }
  
  //****** IconData ******
  export class IconData extends DartClass {
    icon:string;
  
    constructor(icon:string){
      super();
      this.icon = icon;
    }
    static new(icon:string) {
     return new IconData(icon);
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
     * @param config config: 
        {
          color?:Color, 
          opacity?:number, 
          size?:number
        }
     */
    constructor(config?: IconThemeDataConfig){
      super();
      if(config!=null && config!=undefined){
        this.color = config.color;
        this.opacity = config.opacity;
        this.size = config.size;
      }
    }
  
    /**
     * @param config config: 
        {
          color?:Color, 
          opacity?:number, 
          size?:number
        }
     */
    static new(config?: IconThemeDataConfig) {
      return new IconThemeData(config);
    }
  }
  
  //****** ImageShader ******
  export class ImageShader extends DartClass {
    image?:ImageProvider;
    tmx?:TileMode;
    tmy?:TileMode;
    matrix4?:Matrix4;
  
    constructor(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4){
      super();
      this.image = image;
      this.tmx = tmx;
      this.tmy = tmy;
      this.matrix4 = matrix4;
  
    }
  
    static new(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4) {
      return new ImageShader(image,tmx,tmy,matrix4);
    }
  }
  
  //****** InputDecorationTheme ******
  interface InputDecorationThemeConfig {
    labelStyle?:TextStyle;
    helperStyle?:TextStyle;
    helperMaxLines?:number;
    hintStyle?:TextStyle;
    errorStyle?:TextStyle;
    errorMaxLines?:number;
    hasFloatingPlaceholder?:boolean;
    floatingLabelBehavior?:FloatingLabelBehavior;
    isDense?:boolean;
    contentPadding?:EdgeInsets;
    isCollapsed?:boolean;
    prefixStyle?:TextStyle;
    suffixStyle?:TextStyle;
    counterStyle?:TextStyle;
    filled?:boolean;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    errorBorder?:InputBorder;
    focusedBorder?:InputBorder;
    focusedErrorBorder?:InputBorder;
    disabledBorder?:InputBorder;
    enabledBorder?:InputBorder;
    border?:InputBorder;
    alignLabelWithHint?:boolean;
  }
  export class InputDecorationTheme extends DartClass {
    labelStyle?:TextStyle;
    helperStyle?:TextStyle;
    helperMaxLines?:number;
    hintStyle?:TextStyle;
    errorStyle?:TextStyle;
    errorMaxLines?:number;
    hasFloatingPlaceholder?:boolean;
    floatingLabelBehavior?:FloatingLabelBehavior;
    isDense?:boolean;
    contentPadding?:EdgeInsets;
    isCollapsed?:boolean;
    prefixStyle?:TextStyle;
    suffixStyle?:TextStyle;
    counterStyle?:TextStyle;
    filled?:boolean;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    errorBorder?:InputBorder;
    focusedBorder?:InputBorder;
    focusedErrorBorder?:InputBorder;
    disabledBorder?:InputBorder;
    enabledBorder?:InputBorder;
    border?:InputBorder;
    alignLabelWithHint?:boolean;
  
    /**
     * @param config config: 
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
    constructor(config?: InputDecorationThemeConfig){
      super();
      if(config!=null && config!=undefined){
        this.labelStyle = config.labelStyle;
        this.helperStyle = config.helperStyle;
        this.helperMaxLines = config.helperMaxLines;
        this.hintStyle = config.hintStyle;
        this.errorStyle = config.errorStyle;
        this.errorMaxLines = config.errorMaxLines;
        this.hasFloatingPlaceholder = config.hasFloatingPlaceholder;
        this.floatingLabelBehavior = config.floatingLabelBehavior;
        this.isDense = config.isDense;
        this.contentPadding = config.contentPadding;
        this.isCollapsed = config.isCollapsed;
        this.prefixStyle = config.prefixStyle;
        this.suffixStyle = config.suffixStyle;
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
        this.alignLabelWithHint = config.alignLabelWithHint;
      }
    }
  
    /**
     * @param config config: 
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
    static new (config?: InputDecorationThemeConfig) {
  
      return new InputDecorationTheme(config);
    }
  }
  
  //****** InputDecoration ******
  interface InputDecorationConfig {
    icon?:Widget;
    labelText?:string;
    labelStyle?:TextStyle;
    helperText?:string;
    helperStyle?:TextStyle;
    helperMaxLines?:number;
    hintText?:string;
    hintStyle?:TextStyle;
    hintMaxLines?:number;
    errorText?:string;
    errorStyle?:TextStyle;
    errorMaxLines?:number;
    hasFloatingPlaceholder?:boolean;
    floatingLabelBehavior?:FloatingLabelBehavior;
    isCollapsed?:boolean;
    isDense?:boolean;
    contentPadding?:EdgeInsets;
    prefixIcon?:Widget;
    prefixIconConstraints?:BoxConstraints;
    prefix?:Widget;
    prefixText?:string;
    prefixStyle?:TextStyle;
    suffixIcon?:Widget;
    suffix?:Widget;
    suffixText?:string;
    suffixStyle?:TextStyle;
    suffixIconConstraints?:BoxConstraints;
    counter?:Widget;
    counterText?:string;
    counterStyle?:TextStyle;
    filled?:boolean;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    errorBorder?:InputBorder;
    focusedBorder?:InputBorder;
    focusedErrorBorder?:InputBorder;
    disabledBorder?:InputBorder;
    enabledBorder?:InputBorder;
    border?:InputBorder;
    enabled?:boolean;
    semanticCounterText?:string;
    alignLabelWithHint?:boolean;
  }
  export class InputDecoration extends DartClass {
    icon?:Widget;
    labelText?:string;
    labelStyle?:TextStyle;
    helperText?:string;
    helperStyle?:TextStyle;
    helperMaxLines?:number;
    hintText?:string;
    hintStyle?:TextStyle;
    hintMaxLines?:number;
    errorText?:string;
    errorStyle?:TextStyle;
    errorMaxLines?:number;
    hasFloatingPlaceholder?:boolean;
    floatingLabelBehavior?:FloatingLabelBehavior;
    isCollapsed?:boolean;
    isDense?:boolean;
    contentPadding?:EdgeInsets;
    prefixIcon?:Widget;
    prefixIconConstraints?:BoxConstraints;
    prefix?:Widget;
    prefixText?:string;
    prefixStyle?:TextStyle;
    suffixIcon?:Widget;
    suffix?:Widget;
    suffixText?:string;
    suffixStyle?:TextStyle;
    suffixIconConstraints?:BoxConstraints;
    counter?:Widget;
    counterText?:string;
    counterStyle?:TextStyle;
    filled?:boolean;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    errorBorder?:InputBorder;
    focusedBorder?:InputBorder;
    focusedErrorBorder?:InputBorder;
    disabledBorder?:InputBorder;
    enabledBorder?:InputBorder;
    border?:InputBorder;
    enabled?:boolean;
    semanticCounterText?:string;
    alignLabelWithHint?:boolean;
  
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
    constructor(config?: InputDecorationConfig){
      super();
      if(config!=null && config!=undefined){
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
      static new(config?: InputDecorationConfig) {
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
    static collapsed (config?: InputDecorationConfig) {
      let v = new InputDecoration();
      v.constructorName = "collapsed";
  
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
  //#endregion
  
  //#region ------- K -------
    //****** Key ******
    export class Key extends DartClass {
        value?:string;
        debugLabel?:string;
    
        static value(value:string) {
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
    
        static global(debugLabel:string) {
        var v = new Key();
        v.constructorName = "global";
        v.debugLabel = debugLabel;
        return v;
        }
    }
  //#endregion
  
  //#region ------- L -------
  //#endregion
  
  //#region ------- M -------
  //****** MaskFilter ******
  export class MaskFilter extends DartClass {
    style?:BlurStyle;
    sigma?:number;
  
    constructor(style:BlurStyle, sigma:number){
      super();
      this.style = style;
      this.sigma = sigma;
    }
  
    static new(style:BlurStyle, sigma:number) {
      return new MaskFilter(style,sigma);
  
    }
    static blur(style:BlurStyle, sigma:number) {
      let v = new MaskFilter(style,sigma);
      v.constructorName = "blur";
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
  
    constructor(arg0?:number,arg1?:number,arg2?:number,arg3?:number,arg4?:number,arg5?:number,arg6?:number,arg7?:number,
      arg8?:number,arg9?:number,arg10?:number,arg11?:number,arg12?:number,arg13?:number,arg14?:number,arg15?:number){
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
  
    static new(arg0:number,arg1:number,arg2:number,arg3:number,arg4:number,arg5:number,arg6:number,arg7:number,
      arg8:number,arg9:number,arg10:number,arg11:number,arg12:number,arg13:number,arg14:number,arg15:number) {
        return new Matrix4(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15);
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
  
  //****** TODO MediaQuery ******
  interface MediaQueryConfig {
    key?:Key;
    child?:Widget;
    data?:MediaQueryData;
  }
  
  export class MediaQuery extends DartClass {
    key?:Key;
    child?:Widget;
    data?:MediaQueryData;
    
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          data?:MediaQueryData, 
        }
     */
    constructor(config: MediaQueryConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.data = config.data;
        this.child = config.child;
      }
    }
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          data?:MediaQueryData, 
        }
     */
  
    static new(config: MediaQueryConfig) {
      return new MediaQuery(config);
    };
  
    static of(context:any) {
      return context.mediaQueryData;
    }
  }
  
  //****** TODO MediaQueryData ******
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
     * @param config config: 
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
    constructor(config: MediaQueryDataConfig){
      super();
      if(config!=null && config!=undefined){
        this.size = config.size;
        this.devicePixelRatio = config.devicePixelRatio;
        this.textScaleFactor = config.textScaleFactor;
        this.padding = config.padding;
        this.viewInsets = config.viewInsets;
        this.alwaysUse24HourFormat = config.alwaysUse24HourFormat;
        this.accessibleNavigation = config.accessibleNavigation;
        this.invertColors = config.invertColors;
        this.disableAnimations = config.disableAnimations;
        this.boldText = config.boldText;
        this.platformBrightness = config.platformBrightness;
        this.highContrast = config.highContrast;
        this.navigationMode= config.navigationMode;
      }
    }
  
    /**
     * @param config config: 
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
    static new(config: MediaQueryDataConfig) {
      return new MediaQueryData(config);
    }
  }
  
  //#endregion
  
  //#region ------- N -------
  //****** NeverScrollableScrollPhysics ******
  export class NeverScrollableScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
  
    constructor(config?: ScrollPhysicsConfig){
      super();
      if(config!=null && config!=undefined){
        this.parent = config.parent;
      }
    }
  
    static new(config?: ScrollPhysicsConfig) {
      return new NeverScrollableScrollPhysics(config);
    }
  }
  
  //****** TODO Notification ******
  export class Notification extends DartClass {
    static new() {
      return new Notification();
    }
  }
  
  //****** NotchedShape ******
  interface NotchedShapeConfig {
  
  }
  export class NotchedShape extends DartClass {
    host?:ShapeBorder;
  
    static circular() {
      var v = new NotchedShape();
      v.constructorName = "circular";
      return v;
    }
  
  
    static automatic(host:ShapeBorder) {
      var v = new NotchedShape();
      v.host = host;
      return v;
    }
  }
  
  //#endregion
  
  //#region ------- O -------
  //****** Offset ******
  export class Offset extends DartClass {
    dx?:number;
    dy?:number;
    direction?:number;
  
    constructor(dx?:number, dy?:number){
      super();
      this.dx = dx;
      this.dy = dy;
    }
  
    static new(dx:number, dy:number) {
      return new Offset(dx,dy);
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
  
    static fromDirection(direction:number,) {
      let v = new Offset();
      v.constructorName = "fromDirection";
      v.direction = direction;
      return v;
    }
  }
  
  
  //****** OutlinedBorder ******
  interface OutlinedBorderConfig {
    side?:BorderSide;
    borderRadius?:BorderRadius;
  }
  export class OutlinedBorder extends ShapeBorder {
    side?:BorderSide;
  
    borderRadius?:BorderRadius;
  
    /**
     * @param config config: 
        {
          side?:BorderSide,
        }
     */
    static circleBorder(config?: OutlinedBorderConfig) {
      var v = new OutlinedBorder();
      v.constructorName = "circleBorder";
      if(config!=null && config!=undefined){
        v.side = config.side;
      }
      return v;
    }
  
    /**
     * @param config config: 
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static beveledRectangleBorder(config?: OutlinedBorderConfig) {
      var v = new OutlinedBorder();
      v.constructorName = "beveledRectangleBorder";
      if(config!=null && config!=undefined){
        v.side = config.side;
        v.borderRadius = config.borderRadius;
      }
      return v;
    }
  
    /**
     * @param config config: 
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static continuousRectangleBorder(config?: OutlinedBorderConfig) {
      var v = new OutlinedBorder();
      v.constructorName = "continuousRectangleBorder";
      if(config!=null && config!=undefined){
        v.side = config.side;
        v.borderRadius = config.borderRadius;
      }
      return v;
    }
  
    /**
     * @param config config: 
        {
          side?:BorderSide,
          borderRadius?:BorderRadius,
        }
     */
    static roundedRectangleBorder(config?: OutlinedBorderConfig) {
      var v = new OutlinedBorder();
      v.constructorName = "roundedRectangleBorder";
      if(config!=null && config!=undefined){
        v.side = config.side;
        v.borderRadius = config.borderRadius;
      }
      return v;
    }
  
     /**
     * @param config config: 
        {
          side?:BorderSide,
        }
     */
    static stadiumBorder(config?: OutlinedBorderConfig) {
      var v = new OutlinedBorder();
      v.constructorName = "stadiumBorder";
      if(config!=null && config!=undefined){
        v.side = config.side;
      }
      return v;
    }
  }
  
  
  //#endregion
  
  //#region ------- P -------
  //#endregion
  
  //#region ------- Q -------
  //****** Quaternion ******
  export class Quaternion extends DartClass {
    x?:number;
    y?:number;
    z?:number;
    w?:number;
  
    constructor(x?:number, y?:number, z?:number, w?:number){
      super();
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
  
    static new(x:number, y:number, z:number, w:number) {
      return new Quaternion(x,y,z,w);
    }
  }
  //#endregion
  
  //#region ------- R -------
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
     * @param config config: 
        {
          center?:Offset, 
          width?:number,
          height?:number
        }
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
     * @param config config: 
      {
        center?:Offset, 
        radius?:number
      }
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
  
  
    static fromPoints (a:Offset,b:Offset) {
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
  
  //****** RelativeRect ******
  export class RelativeRect extends DartClass {
    left?:number;
    top?:number;
    right?:number;
    bottom?:number;
  
    rect?:Rect;
    rect1?:Rect;
    container?:Size;
  
    static fromLTRB(left:number, top:number, right:number, bottom:number) {
      let v = new RelativeRect();
      v.constructorName = "fromLTRB";
      v.left = left;
      v.top = top;
      v.right = right;
      v.bottom = bottom;  
      return v;
    }
  
    static fromSize(rect:Rect,container:Size) {
      let v = new RelativeRect();
      v.constructorName = "fromSize";
      v.rect = rect;
      v.container = container;
      return v;
    }
  
    static fromRect(rect:Rect,rect1:Rect) {
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
  
  //****** RRect ******
  interface RRectConfig {
    topLeft?:Radius;
    topRight?:Radius;
    bottomRight?:Radius;
    bottomLeft?:Radius;
  }
  export class RRect extends DartClass {
    left?:number;
    top?:number;
    right?:number;
    bottom?:number;
    radiusX?:number;
    radiusY?:number;
    radius?:Radius;
    rect?:Rect;
  
    topLeft?:Radius;
    topRight?:Radius;
    bottomRight?:Radius;
    bottomLeft?:Radius;
  
  
    static fromLTRBXY(left:number,top:number, right:number,  bottom:number, radiusX:number, radiusY:number) {
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
  
    static fromLTRBR(left:number,top:number, right:number,  bottom:number, radius:Radius) {
      let v = new RRect();
      v.constructorName = "fromLTRBR";
      v.left = left;
      v.top = top;
      v.right = right;
      v.bottom = bottom;  
      v.radius = radius;
      return v;
    }
  
    static fromRectXY(rect:Rect, radiusX:number, radiusY:number) {
      let v = new RRect();
      v.constructorName = "fromRectXY";
      v.rect = rect;
      v.radiusX = radiusX;
      v.radiusY = radiusY;
  
      return v;
    }
  
    static fromRectAndRadius(rect:Rect, radius:Radius) {
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
    static fromLTRBAndCorners(left:number,top:number, right:number,  bottom:number, config?: RRectConfig) {
      let v = new RRect();
      v.constructorName = "fromLTRBAndCorners";
      v.left = left;
      v.top = top;
      v.right = right;
      v.bottom = bottom;
      if(config!=null && config!=undefined){
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
    static fromRectAndCorners(rect:Rect, config?: RRectConfig) {
      let v = new RRect();
      v.constructorName = "fromRectAndCorners";
      v.rect = rect;
      if(config!=null && config!=undefined){
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
  
  //****** RSTransform ******
  interface RSTransformConfig {
    rotation:number;
    scale:number;
    anchorX:number;
    anchorY:number;
    translateX:number;
    translateY:number;
  }
  export class RSTransform extends DartClass {
    
    rotation?:number;
    scale?:number;
    anchorX?:number;
    anchorY?:number;
    translateX?:number;
    translateY?:number;
  
    scos?:number;
    ssin?:number;
    tx?:number;
    ty?:number;
  
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
    static fromComponents (config: RSTransformConfig) {
      let v = new RSTransform();
      v.constructorName = "fromComponents";
      if(config!=null && config!=undefined){
        v.rotation =config.rotation;
        v.scale   = config.scale;
        v.anchorX = config.anchorX;
        v.anchorY = config.anchorY;
        v.translateX= config.translateX;
        v.translateY = config.translateY;
      }
      return v;
    }
  
    constructor(scos?:number, ssin?:number, tx?:number, ty?:number){
      super();
      this.scos = scos;
      this.ssin = ssin;
      this.tx = tx;
      this.ty = ty; 
    }
  
    static new(scos:number, ssin:number, tx:number, ty:number) {
      return new RSTransform(scos,ssin,tx,ty);
    }
    
  }
  
  
  //****** RangeMaintainingScrollPhysics ******
  export class RangeMaintainingScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
  
    constructor(config?: ScrollPhysicsConfig){
      super();
      if(config!=null && config!=undefined){
        this.parent = config.parent;
      }
    }
  
    static new(config?: ScrollPhysicsConfig) {
      return new RangeMaintainingScrollPhysics(config);
    }
  }
  
  //#endregion
  
  //#region ------- S -------
  //****** Size ******
  export class Size extends DartClass {
    width?:number;
    height?:number;
    dimension?:number;
    radius?:number;
  
    constructor(width?:number, height?:number){
      super();
      this.width = width;
      this.height = height;
    }
  
    static new(width:number, height:number) {
      return new Size(width,height);
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
  
    static infinite(){
      let v = new Size();
      v.constructorName = "infinite";
      return v;
    }
  }
  
  //****** StrutStyle ******
  interface StrutStyleConfig {
    fontFamily?:string;
    fontFamilyFallback?:Array<string>;
    fontSize?:number;
    height?:number;
    leading?:number;
    fontWeight?:FontWeight;
    fontStyle?:FontStyle;
    forceStrutHeight?:boolean;
    debugLabel?:string;
    packageName?:string;
  }
  export class StrutStyle extends DartClass {
    fontFamily?:string;
    fontFamilyFallback?:Array<string>;
    fontSize?:number;
    height?:number;
    leading?:number;
    fontWeight?:FontWeight;
    fontStyle?:FontStyle;
    forceStrutHeight?:boolean;
    debugLabel?:string;
    packageName?:string;
  
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
    constructor(config: StrutStyleConfig){
      super();
      if(config!=null && config!=undefined){
        this.fontFamily = config.fontFamily;
        this.fontFamilyFallback = config.fontFamilyFallback;
        this.fontSize = config.fontSize;
        this.height = config.height;
        this.leading = config.leading;
        this.fontWeight = config.fontWeight;
        this.fontStyle = config.fontStyle;
        this.forceStrutHeight = config.forceStrutHeight;
        this.debugLabel = config.debugLabel;
        this.packageName =config.packageName;
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
    static new(config: StrutStyleConfig) {
      return new StrutStyle(config);
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
    constructor(config: SystemUiOverlayStyleConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SystemUiOverlayStyleConfig) {
      return new SystemUiOverlayStyle(config);
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
    mass:number;
    stiffness:number; 
    damping:number;
  }
  export class SpringDescription extends DartClass {
    mass?:number;
    stiffness?:number; 
    damping?:number;
  
    /**
     * @param config config: 
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    constructor(config: SpringDescriptionConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SpringDescriptionConfig) {
      return new SpringDescription(config);
    }
  }
  
  //****** ScrollPhysics ******
  interface ScrollPhysicsConfig {
    parent?:ScrollPhysics;
  }
  export class ScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
  
    constructor(config?: ScrollPhysicsConfig){
      super();
      if(config!=null && config!=undefined){
        this.parent = config.parent;
      }
    }
  
    static new(config?: ScrollPhysicsConfig) {
      return new ScrollPhysics(config);
    }
  }
  
  //****** TODO ScrollController ******
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
     * @param config config: 
        {
          duration?:Duration, 
          curve?:Curves
        }
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
  
      let argument = JSCallConfig.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"animateTo",args:map});
      /*
      let argument = new FlutterCallConfig({
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
  
      let argument=JSCallConfig.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"jumpTo",args:args});
      JSFramework.invokeFlutterFunction(argument);
    }
  
    /**
     * @param config config: 
        {
          initialScrollOffset?:number, 
          keepScrollOffset?:boolean, 
          debugLabel?:string
        }
     */
    constructor(config: ScrollControllerConfig){
      super();
      this.createMirrorID();
      if(config!=null && config!=undefined){
        this.initialScrollOffset = config.initialScrollOffset;
        this.keepScrollOffset = config.keepScrollOffset;
        this.debugLabel = config.debugLabel;
      }
    }
  
    /**
     * @param config config: 
        {
          initialScrollOffset?:number, 
          keepScrollOffset?:boolean, 
          debugLabel?:string
        }
     */
    static new(config: ScrollControllerConfig) {
      return new ScrollController(config);
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
     * @param config config: 
        {
          color?:Color, 
          offset?:Offset, 
          blurRadius?:number
        }
     */
    constructor(config?: ShadowConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: ShadowConfig) {
      return new Shadow(config);
    }
  }
  
  //****** ScrollbarPainter ******
  interface ScrollbarPainterConfig {
    color:Color;
    textDirection:TextDirection;
    thickness:number;
    fadeoutOpacityAnimation:any;
    padding?:EdgeInsets;
    mainAxisMargin?:number,
    crossAxisMargin?:number;
    radius?:Radius;
    minLength?:number;
    minOverscrollLength?:number;
  }
  export class ScrollbarPainter extends DartClass {
    color?:Color;
    textDirection?:TextDirection;
    thickness?:number;
    fadeoutOpacityAnimation?:any;
    padding?:EdgeInsets;
    mainAxisMargin?:number;
    crossAxisMargin?:number;
    radius?:Radius;
    minLength?:number;
    minOverscrollLength?:number;
  
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
    constructor(config: ScrollbarPainterConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ScrollbarPainterConfig) {
      return new ScrollbarPainter(config);
    }
  }
  //#endregion
  
  //#region ------- T -------
  //****** TextAlignVertical ******
  export class TextAlignVertical extends DartClass {
    y?:number;
  
    constructor(y:number){
      super();
      this.y = y;
    }
    
    static new(y:number){
      return new TextAlignVertical(y);
    }
  
    static top = TextAlignVertical.new(-1.0); 
    static center = TextAlignVertical.new(0.0); 
    static bottom = TextAlignVertical.new(1.0); 
  } 
  
  //****** TapDownDetails ******
  interface TapDownDetailsConfig {
    globalPosition?:Offset;
    localPosition?:Offset;
    kind?:PointerDeviceKind;
  }
  export class TapDownDetails extends DartClass {
    globalPosition?:Offset;
    localPosition?:Offset;
    kind?:PointerDeviceKind;
  
    /**
     * @param config config: 
        {
          globalPosition?:Offset,
          localPosition?:Offset,
          kind?:PointerDeviceKind,
        }
     */
    constructor(config?: TapDownDetailsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config?: TapDownDetailsConfig) {
      return new TapDownDetails(config);
    }
  }

  //****** TapUpDetails ******
  interface TapUpDetailsConfig {
    globalPosition?:Offset;
    localPosition?:Offset;
  }
  export class TapUpDetails extends DartClass {
    globalPosition?:Offset;
    localPosition?:Offset;
  
    /**
     * @param config config: 
        {
          globalPosition?:Offset,
          localPosition?:Offset,
        }
     */
    constructor(config?: TapUpDetailsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config?: TapUpDetailsConfig) {
      return new TapUpDetails(config);
    }
  }

  //****** TextStyle ******
  interface TextStyleConfig {
    inherit?:boolean;
    color?:Color;
    backgroundColor?:Color;
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
    decorationThickness?:number;
    debugLabel?:string;
    fontFamily?:string;
    packageName?:string;
  }
  export class TextStyle extends DartClass {
    inherit?:boolean;
    color?:Color;
    backgroundColor?:Color;
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
    decorationThickness?:number;
    debugLabel?:string;
    fontFamily?:string;
    packageName?:string;
  
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
    constructor(config?: TextStyleConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config?: TextStyleConfig) {
      return new TextStyle(config);
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
    constructor(config?: TableBorderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: TableBorderConfig) {
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
    static all(config?: TableBorderConfig) {
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
     * @param config config: 
      {
        inside?:BorderSide, 
        outside?:BorderSide
      }
     */
    static symmetric(config?: TableBorderConfig) {
      let v = new TableBorder();
      v.constructorName = "symmetric";
      if(config!=null && config!=undefined){
        v.inside = config.inside;
        v.outside = config.outside;
      }
      return v;
    }
  }
  
  //****** TODO TableRow ******
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
     * @param config config: 
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    constructor(config?: TabControllerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config?: TabControllerConfig) {
      return new TabController(config);
    }
  }
  
  //****** TextEditingController ******
  export class TextEditingController extends DartClass {
    text?:string;
  
    constructor(text?:string){
      super();
      this.text=text;

      //Mirror对象在构造函数创建 MirrorID
      this.createMirrorID();

      //创建对应FLutter对象
      var argument = new JSCallConfig({
          mirrorID:this.mirrorID,
          className:this.className,
      });
      JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }
  
    static new(text?:string) {
      return new TextEditingController(text);
    }

    invokeMirrorObjWithCallback(argument:JSCallConfig){
      return new Promise(function (resolve:any) {
        JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
            if (value != null && value !=undefined) {
                resolve(value);
  
            } else {
                resolve(null);
            }
  
        });
      }.bind(this));
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
      var v= await this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "getText",
        }));
      return String(v);
    }

    //设置文本值
    async setText(text:string) {
      this.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "setText",
            args:text,
        }));
    }
  }
  
  //****** ToolbarOptions ******
  interface ToolbarOptionsConfig {
    copy?:boolean;
    cut?:boolean;
    paste?:boolean;
    selectAll?:boolean;
  }
  export class ToolbarOptions extends DartClass {
    copy?:boolean;
    cut?:boolean;
    paste?:boolean;
    selectAll?:boolean;
  
    /**
     * @param config config: 
      {
        copy?:boolean,
        cut?:boolean,
        paste?:boolean,
        selectAll?:boolean,
      }
     */
    constructor(config?: ToolbarOptionsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config?: ToolbarOptionsConfig) {
      return new ToolbarOptions(config);
    }
  }
  
  
  //****** TextInputType ******
  interface TextInputTypeConfig {
    signed?:boolean;
    decimal?:boolean;
  }
  export class TextInputType extends DartClass {
    
    signed?:boolean;
    decimal?:boolean;
  
    static new(){
      return new TextInputType();
    };
  
    static numberWithOptions(config?: TextInputTypeConfig) {
      let v = new TextInputType();
      v.constructorName = "numberWithOptions";
      if(config!=null && config!=undefined){
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
  
    static url(){
      let v = new TextInputType();
      v.constructorName = "url";
      return v;
    }
  
  }
  
  //****** TODO Tween ******
  export class Tween extends DartClass {
    begin?:number;
    end?:number;
  
    constructor(begin?:number, end?:number){
      super();
      this.begin = begin;
      this.end = end;
    }
    
    lerp(t:number) {
      //return dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
    }
    transform(t:number) {
      if (t == 0.0) return this.begin;
      if (t == 1.0) return this.end;
      return this.lerp(t);
    }
  
    static new(begin?:number, end?:number) {
      return new Tween(begin,end);
    };
  }
  
  
  //#endregion
  
  //#region ------- U -------
  
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
    constructor(config?: UriConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: UriConfig){
      return new Uri(config);
    }
  }
  
  //****** VerticalDirection ******
  export class Uint8List extends DartClass {
    length?:number;
    elements?:Array<number>;
  
    constructor(length?:number){
      super();
      this.length = length;
    }
  
    static new(length?:number) {
      return new Uint8List(length);
    }
  
    static fromList(elements?:Array<number>) {
      let v = new Uint8List();
      v.constructorName = "fromList";
      v.elements = elements;
    
      return v;
    }
  }
  
  
  //#endregion
  
  //#region ------- V -------
  //****** Vector3 ******
  export class Vector3 extends DartClass {
    x?:number;
    y?:number;
    z?:number;
    value?:number;
  
    constructor(x?:number, y?:number, z?:number){
      super();
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    static new(x:number, y:number, z:number) {
      return new Vector3(x,y,z);
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
  
    constructor(x?:number,y?:number,z?:number,w?:number){
      super();
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }
  
    static new(x?:number,y?:number,z?:number,w?:number) {
      return new Vector4(x,y,z,w);
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
  
  //****** VisualDensity ******
  interface VisualDensityConfig {
    horizontal?:number;
    vertical?:number;
  }
  export class VisualDensity extends DartClass {
    horizontal?:number;
    vertical?:number;
  
    /**
     * @param config config: 
      {
        horizontal?:number,
        vertical?:number, 
      }
     */
    constructor(config?: VisualDensityConfig){
      super();
      if(config!=null && config!=undefined){
        this.horizontal=config.horizontal;
        this.vertical=config.vertical;
      }
    }
    
    /**
     * @param config config: 
      {
        horizontal?:number,
        vertical?:number, 
      }
     */
    static new(config?: VisualDensityConfig) {
      return new VisualDensity(config);
    }
  
    static comfortable =  VisualDensity.new({horizontal: -1.0, vertical: -1.0});
    static compact = VisualDensity.new({horizontal: -2.0, vertical: -2.0});
    static standard = VisualDensity.new();
  } 
  //#endregion
  
  //#endregion
  

//#region ******** Icons ********
export class Icons extends IconData{
    constructor(icon:string){
      super(icon);
    }
    static new(icon:string) {
     return new Icons(icon);
    }
  
    static threesixty = Icons.new("threesixty");
    static threed_rotation = Icons.new("threed_rotation");
    static four_k = Icons.new("four_k");
    static ac_unit = Icons.new("ac_unit");
    static access_alarm = Icons.new("access_alarm");
    static access_alarms = Icons.new("access_alarms");
    static access_time = Icons.new("access_time");
    static accessibility = Icons.new("accessibility");
    static accessibility_new = Icons.new("accessibility_new");
    static accessible = Icons.new("accessible");
    static accessible_forward = Icons.new("accessible_forward");
    static account_balance = Icons.new("account_balance");
    static account_balance_wallet = Icons.new("account_balance_wallet");
    static account_box = Icons.new("account_box");
    static account_circle = Icons.new("account_circle");
    static adb = Icons.new("adb");
    static add = Icons.new("add");
    static add_a_photo = Icons.new("add_a_photo");
    static add_alarm = Icons.new("add_alarm");
    static add_alert = Icons.new("add_alert");
    static add_box = Icons.new("add_box");
    static add_call = Icons.new("add_call");
    static add_circle = Icons.new("add_circle");
    static add_circle_outline = Icons.new("add_circle_outline");
    static add_comment = Icons.new("add_comment");
    static add_location = Icons.new("add_location");
    static add_photo_alternate = Icons.new("add_photo_alternate");
    static add_shopping_cart = Icons.new("add_shopping_cart");
    static add_to_home_screen = Icons.new("add_to_home_screen");
    static add_to_photos = Icons.new("add_to_photos");
    static add_to_queue = Icons.new("add_to_queue");
    static adjust = Icons.new("adjust");
    static airline_seat_flat = Icons.new("airline_seat_flat");
    static airline_seat_flat_angled = Icons.new("airline_seat_flat_angled");
    static airline_seat_individual_suite = Icons.new("airline_seat_individual_suite");
    static airline_seat_legroom_extra = Icons.new("airline_seat_legroom_extra");
    static airline_seat_legroom_normal = Icons.new("airline_seat_legroom_normal");
    static airline_seat_legroom_reduced = Icons.new("airline_seat_legroom_reduced");
    static airline_seat_recline_extra = Icons.new("airline_seat_recline_extra");
    static airline_seat_recline_normal = Icons.new("airline_seat_recline_normal");
    static airplanemode_active = Icons.new("airplanemode_active");
    static airplanemode_inactive = Icons.new("airplanemode_inactive");
    static airplay = Icons.new("airplay");
    static airport_shuttle = Icons.new("airport_shuttle");
    static alarm = Icons.new("alarm");
    static alarm_add = Icons.new("alarm_add");
    static alarm_off = Icons.new("alarm_off");
    static alarm_on = Icons.new("alarm_on");
    static album = Icons.new("album");
    static all_inclusive = Icons.new("all_inclusive");
    static all_out = Icons.new("all_out");
    static alternate_email = Icons.new("alternate_email");
    static android = Icons.new("android");
    static announcement = Icons.new("announcement");
    static apps = Icons.new("apps");
    static archive = Icons.new("archive");
    static arrow_back = Icons.new("arrow_back");
    static arrow_back_ios = Icons.new("arrow_back_ios");
    static arrow_downward = Icons.new("arrow_downward");
    static arrow_drop_down = Icons.new("arrow_drop_down");
    static arrow_drop_down_circle = Icons.new("arrow_drop_down_circle");
    static arrow_drop_up = Icons.new("arrow_drop_up");
    static arrow_forward = Icons.new("arrow_forward");
    static arrow_forward_ios = Icons.new("arrow_forward_ios");
    static arrow_left = Icons.new("arrow_left");
    static arrow_right = Icons.new("arrow_right");
    static arrow_upward = Icons.new("arrow_upward");
    static art_track = Icons.new("art_track");
    static aspect_ratio = Icons.new("aspect_ratio");
    static assessment = Icons.new("assessment");
    static assignment = Icons.new("assignment");
    static assignment_ind = Icons.new("assignment_ind");
    static assignment_late = Icons.new("assignment_late");
    static assignment_return = Icons.new("assignment_return");
    static assignment_returned = Icons.new("assignment_returned");
    static assignment_turned_in = Icons.new("assignment_turned_in");
    static assistant = Icons.new("assistant");
    static assistant_photo = Icons.new("assistant_photo");
    static atm = Icons.new("atm");
    static attach_file = Icons.new("attach_file");
    static attach_money = Icons.new("attach_money");
    static attachment = Icons.new("attachment");
    static audiotrack = Icons.new("audiotrack");
    static autorenew = Icons.new("autorenew");
    static av_timer = Icons.new("av_timer");
    static backspace = Icons.new("backspace");
    static backup = Icons.new("backup");
    static battery_alert = Icons.new("battery_alert");
    static battery_charging_full = Icons.new("battery_charging_full");
    static battery_full = Icons.new("battery_full");
    static battery_std = Icons.new("battery_std");
    static battery_unknown = Icons.new("battery_unknown");
    static beach_access = Icons.new("beach_access");
    static beenhere = Icons.new("beenhere");
    static block = Icons.new("block");
    static bluetooth = Icons.new("bluetooth");
    static bluetooth_audio = Icons.new("bluetooth_audio");
    static bluetooth_connected = Icons.new("bluetooth_connected");
    static bluetooth_disabled = Icons.new("bluetooth_disabled");
    static bluetooth_searching = Icons.new("bluetooth_searching");
    static blur_circular = Icons.new("blur_circular");
    static blur_linear = Icons.new("blur_linear");
    static blur_off = Icons.new("blur_off");
    static blur_on = Icons.new("blur_on");
    static book = Icons.new("book");
    static bookmark = Icons.new("bookmark");
    static bookmark_border = Icons.new("bookmark_border");
    static border_all = Icons.new("border_all");
    static border_bottom = Icons.new("border_bottom");
    static border_clear = Icons.new("border_clear");
    static border_color = Icons.new("border_color");
    static border_horizontal = Icons.new("border_horizontal");
    static border_inner = Icons.new("border_inner");
    static border_left = Icons.new("border_left");
    static border_outer = Icons.new("border_outer");
    static border_right = Icons.new("border_right");
    static border_style = Icons.new("border_style");
    static border_top = Icons.new("border_top");
    static border_vertical = Icons.new("border_vertical");
    static branding_watermark = Icons.new("branding_watermark");
    static brightness_1 = Icons.new("brightness_1");
    static brightness_2 = Icons.new("brightness_2");
    static brightness_3 = Icons.new("brightness_3");
    static brightness_4 = Icons.new("brightness_4");
    static brightness_5 = Icons.new("brightness_5");
    static brightness_6 = Icons.new("brightness_6");
    static brightness_7 = Icons.new("brightness_7");
    static brightness_auto = Icons.new("brightness_auto");
    static brightness_high = Icons.new("brightness_high");
    static brightness_low = Icons.new("brightness_low");
    static brightness_medium = Icons.new("brightness_medium");
    static broken_image = Icons.new("broken_image");
    static brush = Icons.new("brush");
    static bubble_chart = Icons.new("bubble_chart");
    static bug_report = Icons.new("bug_report");
    static build = Icons.new("build");
    static burst_mode = Icons.new("burst_mode");
    static business = Icons.new("business");
    static business_center = Icons.new("business_center");
    static cached = Icons.new("cached");
    static cake = Icons.new("cake");
    static calendar_today = Icons.new("calendar_today");
    static calendar_view_day = Icons.new("calendar_view_day");
    static call = Icons.new("call");
    static call_end = Icons.new("call_end");
    static call_made = Icons.new("call_made");
    static call_merge = Icons.new("call_merge");
    static call_missed = Icons.new("call_missed");
    static call_missed_outgoing = Icons.new("call_missed_outgoing");
    static call_received = Icons.new("call_received");
    static call_split = Icons.new("call_split");
    static call_to_action = Icons.new("call_to_action");
    static camera = Icons.new("camera");
    static camera_alt = Icons.new("camera_alt");
    static camera_enhance = Icons.new("camera_enhance");
    static camera_front = Icons.new("camera_front");
    static camera_rear = Icons.new("camera_rear");
    static camera_roll = Icons.new("camera_roll");
    static cancel = Icons.new("cancel");
    static card_giftcard = Icons.new("card_giftcard");
    static card_membership = Icons.new("card_membership");
    static card_travel = Icons.new("card_travel");
    static casino = Icons.new("casino");
    static cast = Icons.new("cast");
    static cast_connected = Icons.new("cast_connected");
    static category = Icons.new("category");
    static center_focus_strong = Icons.new("center_focus_strong");
    static center_focus_weak = Icons.new("center_focus_weak");
    static change_history = Icons.new("change_history");
    static chat = Icons.new("chat");
    static chat_bubble = Icons.new("chat_bubble");
    static chat_bubble_outline = Icons.new("chat_bubble_outline");
    static check = Icons.new("check");
    static check_box = Icons.new("check_box");
    static check_box_outline_blank = Icons.new("check_box_outline_blank");
    static check_circle = Icons.new("check_circle");
    static check_circle_outline = Icons.new("check_circle_outline");
    static chevron_left = Icons.new("chevron_left");
    static chevron_right = Icons.new("chevron_right");
    static child_care = Icons.new("child_care");
    static child_friendly = Icons.new("child_friendly");
    static chrome_reader_mode = Icons.new("chrome_reader_mode");
    static class_ = Icons.new("class_");
    static clear = Icons.new("clear");
    static clear_all = Icons.new("clear_all");
    static close = Icons.new("close");
    static closed_caption = Icons.new("closed_caption");
    static cloud = Icons.new("cloud");
    static cloud_circle = Icons.new("cloud_circle");
    static cloud_done = Icons.new("cloud_done");
    static cloud_download = Icons.new("cloud_download");
    static cloud_off = Icons.new("cloud_off");
    static cloud_queue = Icons.new("cloud_queue");
    static cloud_upload = Icons.new("cloud_upload");
    static code = Icons.new("code");
    static collections = Icons.new("collections");
    static collections_bookmark = Icons.new("collections_bookmark");
    static color_lens = Icons.new("color_lens");
    static colorize = Icons.new("colorize");
    static comment = Icons.new("comment");
    static compare = Icons.new("compare");
    static compare_arrows = Icons.new("compare_arrows");
    static computer = Icons.new("computer");
    static confirmation_number = Icons.new("confirmation_number");
    static contact_mail = Icons.new("contact_mail");
    static contact_phone = Icons.new("contact_phone");
    static contacts = Icons.new("contacts");
  static content_copy = Icons.new("content_copy");
    static content_cut = Icons.new("content_cut");
    static content_paste = Icons.new("content_paste");
    static control_point = Icons.new("control_point");
    static control_point_duplicate = Icons.new("control_point_duplicate");
    static copyright = Icons.new("copyright");
    static create = Icons.new("create");
    static create_new_folder = Icons.new("create_new_folder");
    static credit_card = Icons.new("credit_card");
    static crop = Icons.new("crop");
    static crop_16_9 = Icons.new("crop_16_9");
    static crop_3_2 = Icons.new("crop_3_2");
    static crop_5_4 = Icons.new("crop_5_4");
    static crop_7_5 = Icons.new("crop_7_5");
    static crop_din = Icons.new("crop_din");
    static crop_free = Icons.new("crop_free");
    static crop_landscape = Icons.new("crop_landscape");
    static crop_original = Icons.new("crop_original");
    static crop_portrait = Icons.new("crop_portrait");
    static crop_rotate = Icons.new("crop_rotate");
    static crop_square = Icons.new("crop_square");
    static dashboard = Icons.new("dashboard");
    static data_usage = Icons.new("data_usage");
    static date_range = Icons.new("date_range");
    static dehaze = Icons.new("dehaze");
    static delete = Icons.new("delete");
    static delete_forever = Icons.new("delete_forever");
    static delete_outline = Icons.new("delete_outline");
    static delete_sweep = Icons.new("delete_sweep");
    static departure_board = Icons.new("departure_board");
    static description = Icons.new("description");
    static desktop_mac = Icons.new("desktop_mac");
    static desktop_windows = Icons.new("desktop_windows");
    static details = Icons.new("details");
    static developer_board = Icons.new("developer_board");
    static developer_mode = Icons.new("developer_mode");
    static device_hub = Icons.new("device_hub");
    static device_unknown = Icons.new("device_unknown");
    static devices = Icons.new("devices");
    static devices_other = Icons.new("devices_other");
    static dialer_sip = Icons.new("dialer_sip");
    static dialpad = Icons.new("dialpad");
    static directions = Icons.new("directions");
    static directions_bike = Icons.new("directions_bike");
    static directions_boat = Icons.new("directions_boat");
    static directions_bus = Icons.new("directions_bus");
    static directions_car = Icons.new("directions_car");
    static directions_railway = Icons.new("directions_railway");
    static directions_run = Icons.new("directions_run");
    static directions_subway = Icons.new("directions_subway");
    static directions_transit = Icons.new("directions_transit");
    static directions_walk = Icons.new("directions_walk");
    static disc_full = Icons.new("disc_full");
    static dns = Icons.new("dns");
    static do_not_disturb = Icons.new("do_not_disturb");
    static do_not_disturb_alt = Icons.new("do_not_disturb_alt");
    static do_not_disturb_off = Icons.new("do_not_disturb_off");
    static do_not_disturb_on = Icons.new("do_not_disturb_on");
    static dock = Icons.new("dock");
    static domain = Icons.new("domain");
    static done = Icons.new("done");
    static done_all = Icons.new("done_all");
    static done_outline = Icons.new("done_outline");
    static donut_large = Icons.new("donut_large");
    static donut_small = Icons.new("donut_small");
    static drafts = Icons.new("drafts");
    static drag_handle = Icons.new("drag_handle");
    static drive_eta = Icons.new("drive_eta");
    static dvr = Icons.new("dvr");
    static edit = Icons.new("edit");
    static edit_attributes = Icons.new("edit_attributes");
    static edit_location = Icons.new("edit_location");
    static eject = Icons.new("eject");
    static email = Icons.new("email");
    static enhanced_encryption = Icons.new("enhanced_encryption");
    static equalizer = Icons.new("equalizer");
    static error = Icons.new("error");
    static error_outline = Icons.new("error_outline");
    static euro_symbol = Icons.new("euro_symbol");
    static ev_station = Icons.new("ev_station");
    static event = Icons.new("event");
    static event_available = Icons.new("event_available");
    static event_busy = Icons.new("event_busy");
    static event_note = Icons.new("event_note");
    static event_seat = Icons.new("event_seat");
    static exit_to_app = Icons.new("exit_to_app");
    static expand_less = Icons.new("expand_less");
    static expand_more = Icons.new("expand_more");
    static explicit = Icons.new("explicit");
    static explore = Icons.new("explore");
    static exposure = Icons.new("exposure");
    static exposure_neg_1 = Icons.new("exposure_neg_1");
    static exposure_neg_2 = Icons.new("exposure_neg_2");
    static exposure_plus_1 = Icons.new("exposure_plus_1");
    static exposure_plus_2 = Icons.new("exposure_plus_2");
    static exposure_zero = Icons.new("exposure_zero");
    static extension = Icons.new("extension");
    static face = Icons.new("face");
    static fast_forward = Icons.new("fast_forward");
    static fast_rewind = Icons.new("fast_rewind");
    static fastfood = Icons.new("fastfood");
    static favorite = Icons.new("favorite");
    static favorite_border = Icons.new("favorite_border");
    static featured_play_list = Icons.new("featured_play_list");
    static featured_video = Icons.new("featured_video");
    static feedback = Icons.new("feedback");
    static fiber_dvr = Icons.new("fiber_dvr");
    static fiber_manual_record = Icons.new("fiber_manual_record");
    static fiber_new = Icons.new("fiber_new");
    static fiber_pin = Icons.new("fiber_pin");
    static fiber_smart_record = Icons.new("fiber_smart_record");
    static file_download = Icons.new("file_download");
    static file_upload = Icons.new("file_upload");
    static filter = Icons.new("filter");
    static filter_1 = Icons.new("filter_1");
    static filter_2 = Icons.new("filter_2");
    static filter_3 = Icons.new("filter_3");
    static filter_4 = Icons.new("filter_4");
    static filter_5 = Icons.new("filter_5");
    static filter_6 = Icons.new("filter_6");
    static filter_7 = Icons.new("filter_7");
    static filter_8 = Icons.new("filter_8");
    static filter_9 = Icons.new("filter_9");
    static filter_9_plus = Icons.new("filter_9_plus");
    static filter_b_and_w = Icons.new("filter_b_and_w");
    static filter_center_focus = Icons.new("filter_center_focus");
    static filter_drama = Icons.new("filter_drama");
    static filter_frames = Icons.new("filter_frames");
    static filter_hdr = Icons.new("filter_hdr");
    static filter_list = Icons.new("filter_list");
    static filter_none = Icons.new("filter_none");
    static filter_tilt_shift = Icons.new("filter_tilt_shift");
    static filter_vintage = Icons.new("filter_vintage");
    static find_in_page = Icons.new("find_in_page");
    static find_replace = Icons.new("find_replace");
    static fingerprint = Icons.new("fingerprint");
    static first_page = Icons.new("first_page");
    static fitness_center = Icons.new("fitness_center");
    static flag = Icons.new("flag");
    static flare = Icons.new("flare");
    static flash_auto = Icons.new("flash_auto");
    static flash_off = Icons.new("flash_off");
    static flash_on = Icons.new("flash_on");
    static flight = Icons.new("flight");
    static flight_land = Icons.new("flight_land");
    static flight_takeoff = Icons.new("flight_takeoff");
    static flip = Icons.new("flip");
    static flip_to_back = Icons.new("flip_to_back");
    static flip_to_front = Icons.new("flip_to_front");
    static folder = Icons.new("folder");
    static folder_open = Icons.new("folder_open");
    static folder_shared = Icons.new("folder_shared");
    static folder_special = Icons.new("folder_special");
    static font_download = Icons.new("font_download");
    static format_align_center = Icons.new("format_align_center");
    static format_align_justify = Icons.new("format_align_justify");
    static format_align_left = Icons.new("format_align_left");
    static format_align_right = Icons.new("format_align_right");
    static format_bold = Icons.new("format_bold");
    static format_clear = Icons.new("format_clear");
    static format_color_fill = Icons.new("format_color_fill");
    static format_color_reset = Icons.new("format_color_reset");
    static format_color_text = Icons.new("format_color_text");
    static format_indent_decrease = Icons.new("format_indent_decrease");
    static format_indent_increase = Icons.new("format_indent_increase");
    static format_italic = Icons.new("format_italic");
    static format_line_spacing = Icons.new("format_line_spacing");
    static format_list_bulleted = Icons.new("format_list_bulleted");
    static format_list_numbered = Icons.new("format_list_numbered");
    static format_list_numbered_rtl = Icons.new("format_list_numbered_rtl");
    static format_paint = Icons.new("format_paint");
    static format_quote = Icons.new("format_quote");
    static format_shapes = Icons.new("format_shapes");
    static format_size = Icons.new("format_size");
    static format_strikethrough = Icons.new("format_strikethrough");
    static format_textdirection_l_to_r = Icons.new("format_textdirection_l_to_r");
    static format_textdirection_r_to_l = Icons.new("format_textdirection_r_to_l");
    static format_underlined = Icons.new("format_underlined");
    static forum = Icons.new("forum");
    static forward = Icons.new("forward");
    static forward_10 = Icons.new("forward_10");
    static forward_30 = Icons.new("forward_30");
    static forward_5 = Icons.new("forward_5");
    static free_breakfast = Icons.new("free_breakfast");
    static fullscreen = Icons.new("fullscreen");
    static fullscreen_exit = Icons.new("fullscreen_exit");
    static functions = Icons.new("functions");
    static g_translate = Icons.new("g_translate");
    static gamepad = Icons.new("gamepad");
    static games = Icons.new("games");
    static gavel = Icons.new("gavel");
    static gesture = Icons.new("gesture");
    static get_app = Icons.new("get_app");
    static gif = Icons.new("gif");
    static golf_course = Icons.new("golf_course");
    static gps_fixed = Icons.new("gps_fixed");
    static gps_not_fixed = Icons.new("gps_not_fixed");
    static gps_off = Icons.new("gps_off");
    static grade = Icons.new("grade");
    static gradient = Icons.new("gradient");
    static grain = Icons.new("grain");
    static graphic_eq = Icons.new("graphic_eq");
    static grid_off = Icons.new("grid_off");
    static grid_on = Icons.new("grid_on");
    static group = Icons.new("group");
    static group_add = Icons.new("group_add");
    static group_work = Icons.new("group_work");
    static hd = Icons.new("hd");
    static hdr_off = Icons.new("hdr_off");
    static hdr_on = Icons.new("hdr_on");
    static hdr_strong = Icons.new("hdr_strong");
    static hdr_weak = Icons.new("hdr_weak");
    static headset = Icons.new("headset");
    static headset_mic = Icons.new("headset_mic");
    static headset_off = Icons.new("headset_off");
    static healing = Icons.new("healing");
    static hearing = Icons.new("hearing");
    static help = Icons.new("help");
    static help_outline = Icons.new("help_outline");
    static high_quality = Icons.new("high_quality");
    static highlight = Icons.new("highlight");
    static highlight_off = Icons.new("highlight_off");
    static history = Icons.new("history");
    static home = Icons.new("home");
    static hot_tub = Icons.new("hot_tub");
    static hotel = Icons.new("hotel");
    static hourglass_empty = Icons.new("hourglass_empty");
    static hourglass_full = Icons.new("hourglass_full");
    static http = Icons.new("http");
    static https = Icons.new("https");
    static image = Icons.new("image");
    static image_aspect_ratio = Icons.new("image_aspect_ratio");
    static import_contacts = Icons.new("import_contacts");
    static import_export = Icons.new("import_export");
    static important_devices = Icons.new("important_devices");
    static inbox = Icons.new("inbox");
    static indeterminate_check_box = Icons.new("indeterminate_check_box");
    static info = Icons.new("info");
    static info_outline = Icons.new("info_outline");
    static input = Icons.new("input");
    static insert_chart = Icons.new("insert_chart");
    static insert_comment = Icons.new("insert_comment");
    static insert_drive_file = Icons.new("insert_drive_file");
    static insert_emoticon = Icons.new("insert_emoticon");
    static insert_invitation = Icons.new("insert_invitation");
    static insert_link = Icons.new("insert_link");
    static insert_photo = Icons.new("insert_photo");
    static invert_colors = Icons.new("invert_colors");
    static invert_colors_off = Icons.new("invert_colors_off");
    static iso = Icons.new("iso");
    static keyboard = Icons.new("keyboard");
    static keyboard_arrow_down = Icons.new("keyboard_arrow_down");
    static keyboard_arrow_left = Icons.new("keyboard_arrow_left");
    static keyboard_arrow_right = Icons.new("keyboard_arrow_right");
    static keyboard_arrow_up = Icons.new("keyboard_arrow_up");
    static keyboard_backspace = Icons.new("keyboard_backspace");
    static keyboard_capslock = Icons.new("keyboard_capslock");
    static keyboard_hide = Icons.new("keyboard_hide");
    static keyboard_return = Icons.new("keyboard_return");
    static keyboard_tab = Icons.new("keyboard_tab");
    static keyboard_voice = Icons.new("keyboard_voice");
    static kitchen = Icons.new("kitchen");
    static label = Icons.new("label");
    static label_important = Icons.new("label_important");
    static label_outline = Icons.new("label_outline");
    static landscape = Icons.new("landscape");
    static language = Icons.new("language");
    static laptop = Icons.new("laptop");
    static laptop_chromebook = Icons.new("laptop_chromebook");
    static laptop_mac = Icons.new("laptop_mac");
    static laptop_windows = Icons.new("laptop_windows");
    static last_page = Icons.new("last_page");
    static launch = Icons.new("launch");
    static layers = Icons.new("layers");
    static layers_clear = Icons.new("layers_clear");
    static leak_add = Icons.new("leak_add");
    static leak_remove = Icons.new("leak_remove");
    static lens = Icons.new("lens");
    static library_add = Icons.new("library_add");
    static library_books = Icons.new("library_books");
    static library_music = Icons.new("library_music");
    static lightbulb_outline = Icons.new("lightbulb_outline");
    static line_style = Icons.new("line_style");
    static line_weight = Icons.new("line_weight");
    static linear_scale = Icons.new("linear_scale");
    static link = Icons.new("link");
    static link_off = Icons.new("link_off");
    static linked_camera = Icons.new("linked_camera");
    static list = Icons.new("list");
    static live_help = Icons.new("live_help");
    static live_tv = Icons.new("live_tv");
    static local_activity = Icons.new("local_activity");
    static local_airport = Icons.new("local_airport");
    static local_atm = Icons.new("local_atm");
    static local_bar = Icons.new("local_bar");
    static local_cafe = Icons.new("local_cafe");
    static local_car_wash = Icons.new("local_car_wash");
    static local_convenience_store = Icons.new("local_convenience_store");
    static local_dining = Icons.new("local_dining");
    static local_drink = Icons.new("local_drink");
    static local_florist = Icons.new("local_florist");
    static local_gas_station = Icons.new("local_gas_station");
    static local_grocery_store = Icons.new("local_grocery_store");
    static local_hospital = Icons.new("local_hospital");
    static local_hotel = Icons.new("local_hotel");
    static local_laundry_service = Icons.new("local_laundry_service");
    static local_library = Icons.new("local_library");
    static local_mall = Icons.new("local_mall");
    static local_movies = Icons.new("local_movies");
    static local_offer = Icons.new("local_offer");
    static local_parking = Icons.new("local_parking");
    static local_pharmacy = Icons.new("local_pharmacy");
    static local_phone = Icons.new("local_phone");
    static local_pizza = Icons.new("local_pizza");
    static local_play = Icons.new("local_play");
    static local_post_office = Icons.new("local_post_office");
    static local_printshop = Icons.new("local_printshop");
    static local_see = Icons.new("local_see");
    static local_shipping = Icons.new("local_shipping");
    static local_taxi = Icons.new("local_taxi");
    static location_city = Icons.new("location_city");
    static location_disabled = Icons.new("location_disabled");
    static location_off = Icons.new("location_off");
    static location_on = Icons.new("location_on");
    static location_searching = Icons.new("location_searching");
    static lock = Icons.new("lock");
    static lock_open = Icons.new("lock_open");
    static lock_outline = Icons.new("lock_outline");
    static looks = Icons.new("looks");
    static looks_3 = Icons.new("looks_3");
    static looks_4 = Icons.new("looks_4");
    static looks_5 = Icons.new("looks_5");
    static looks_6 = Icons.new("looks_6");
    static looks_one = Icons.new("looks_one");
    static looks_two = Icons.new("looks_two");
    static loop = Icons.new("loop");
    static loupe = Icons.new("loupe");
    static low_priority = Icons.new("low_priority");
    static loyalty = Icons.new("loyalty");
    static mail = Icons.new("mail");
    static mail_outline = Icons.new("mail_outline");
    static map = Icons.new("map");
    static markunread = Icons.new("markunread");
    static markunread_mailbox = Icons.new("markunread_mailbox");
    static maximize = Icons.new("maximize");
    static memory = Icons.new("memory");
    static menu = Icons.new("menu");
    static merge_type = Icons.new("merge_type");
    static message = Icons.new("message");
    static mic = Icons.new("mic");
    static mic_none = Icons.new("mic_none");
    static mic_off = Icons.new("mic_off");
    static minimize = Icons.new("minimize");
    static missed_video_call = Icons.new("missed_video_call");
    static mms = Icons.new("mms");
    static mobile_screen_share = Icons.new("mobile_screen_share");
    static mode_comment = Icons.new("mode_comment");
    static mode_edit = Icons.new("mode_edit");
    static monetization_on = Icons.new("monetization_on");
    static money_off = Icons.new("money_off");
    static monochrome_photos = Icons.new("monochrome_photos");
    static mood = Icons.new("mood");
    static mood_bad = Icons.new("mood_bad");
    static more = Icons.new("more");
    static more_horiz = Icons.new("more_horiz");
    static more_vert = Icons.new("more_vert");
    static motorcycle = Icons.new("motorcycle");
    static mouse = Icons.new("mouse");
    static move_to_inbox = Icons.new("move_to_inbox");
    static movie = Icons.new("movie");
    static movie_creation = Icons.new("movie_creation");
    static movie_filter = Icons.new("movie_filter");
    static multiline_chart = Icons.new("multiline_chart");
    static music_note = Icons.new("music_note");
    static music_video = Icons.new("music_video");
    static my_location = Icons.new("my_location");
    static nature = Icons.new("nature");
    static nature_people = Icons.new("nature_people");
    static navigate_before = Icons.new("navigate_before");
    static navigate_next = Icons.new("navigate_next");
    static navigation = Icons.new("navigation");
    static near_me = Icons.new("near_me");
    static network_cell = Icons.new("network_cell");
    static network_check = Icons.new("network_check");
    static network_locked = Icons.new("network_locked");
    static network_wifi = Icons.new("network_wifi");
    static new_releases = Icons.new("new_releases");
    static next_week = Icons.new("next_week");
    static nfc = Icons.new("nfc");
    static no_encryption = Icons.new("no_encryption");
    static no_sim = Icons.new("no_sim");
    static not_interested = Icons.new("not_interested");
    static not_listed_location = Icons.new("not_listed_location");
    static note = Icons.new("note");
    static note_add = Icons.new("note_add");
    static notification_important = Icons.new("notification_important");
    static notifications = Icons.new("notifications");
    static notifications_active = Icons.new("notifications_active");
    static notifications_none = Icons.new("notifications_none");
    static notifications_off = Icons.new("notifications_off");
    static notifications_paused = Icons.new("notifications_paused");
    static offline_bolt = Icons.new("offline_bolt");
    static offline_pin = Icons.new("offline_pin");
    static ondemand_video = Icons.new("ondemand_video");
    static opacity = Icons.new("opacity");
    static open_in_browser = Icons.new("open_in_browser");
    static open_in_new = Icons.new("open_in_new");
    static open_with = Icons.new("open_with");
    static outlined_flag = Icons.new("outlined_flag");
    static pages = Icons.new("pages");
    static pageview = Icons.new("pageview");
    static palette = Icons.new("palette");
    static pan_tool = Icons.new("pan_tool");
    static panorama = Icons.new("panorama");
    static panorama_fish_eye = Icons.new("panorama_fish_eye");
    static panorama_horizontal = Icons.new("panorama_horizontal");
    static panorama_vertical = Icons.new("panorama_vertical");
    static panorama_wide_angle = Icons.new("panorama_wide_angle");
    static party_mode = Icons.new("party_mode");
    static pause = Icons.new("pause");
    static pause_circle_filled = Icons.new("pause_circle_filled");
    static pause_circle_outline = Icons.new("pause_circle_outline");
    static payment = Icons.new("payment");
    static people = Icons.new("people");
    static people_outline = Icons.new("people_outline");
    static perm_camera_mic = Icons.new("perm_camera_mic");
    static perm_contact_calendar = Icons.new("perm_contact_calendar");
    static perm_data_setting = Icons.new("perm_data_setting");
    static perm_device_information = Icons.new("perm_device_information");
    static perm_identity = Icons.new("perm_identity");
    static perm_media = Icons.new("perm_media");
    static perm_phone_msg = Icons.new("perm_phone_msg");
    static perm_scan_wifi = Icons.new("perm_scan_wifi");
    static person = Icons.new("person");
    static person_add = Icons.new("person_add");
    static person_outline = Icons.new("person_outline");
    static person_pin = Icons.new("person_pin");
    static person_pin_circle = Icons.new("person_pin_circle");
    static personal_video = Icons.new("personal_video");
    static pets = Icons.new("pets");
    static phone = Icons.new("phone");
    static phone_android = Icons.new("phone_android");
    static phone_bluetooth_speaker = Icons.new("phone_bluetooth_speaker");
    static phone_forwarded = Icons.new("phone_forwarded");
    static phone_in_talk = Icons.new("phone_in_talk");
    static phone_iphone = Icons.new("phone_iphone");
    static phone_locked = Icons.new("phone_locked");
    static phone_missed = Icons.new("phone_missed");
    static phone_paused = Icons.new("phone_paused");
    static phonelink = Icons.new("phonelink");
    static phonelink_erase = Icons.new("phonelink_erase");
    static phonelink_lock = Icons.new("phonelink_lock");
    static phonelink_off = Icons.new("phonelink_off");
    static phonelink_ring = Icons.new("phonelink_ring");
    static phonelink_setup = Icons.new("phonelink_setup");
    static photo = Icons.new("photo");
    static photo_album = Icons.new("photo_album");
    static photo_camera = Icons.new("photo_camera");
    static photo_filter = Icons.new("photo_filter");
    static photo_library = Icons.new("photo_library");
    static photo_size_select_actual = Icons.new("photo_size_select_actual");
    static photo_size_select_large = Icons.new("photo_size_select_large");
    static photo_size_select_small = Icons.new("photo_size_select_small");
    static picture_as_pdf = Icons.new("picture_as_pdf");
    static picture_in_picture = Icons.new("picture_in_picture");
    static picture_in_picture_alt = Icons.new("picture_in_picture_alt");
    static pie_chart = Icons.new("pie_chart");
    static pie_chart_outlined = Icons.new("pie_chart_outlined");
    static pin_drop = Icons.new("pin_drop");
    static place = Icons.new("place");
    static play_arrow = Icons.new("play_arrow");
    static play_circle_filled = Icons.new("play_circle_filled");
    static play_circle_outline = Icons.new("play_circle_outline");
    static play_for_work = Icons.new("play_for_work");
    static playlist_add = Icons.new("playlist_add");
    static playlist_add_check = Icons.new("playlist_add_check");
    static playlist_play = Icons.new("playlist_play");
    static plus_one = Icons.new("plus_one");
    static poll = Icons.new("poll");
    static polymer = Icons.new("polymer");
    static pool = Icons.new("pool");
    static portable_wifi_off = Icons.new("portable_wifi_off");
    static portrait = Icons.new("portrait");
    static power = Icons.new("power");
    static power_input = Icons.new("power_input");
    static power_settings_new = Icons.new("power_settings_new");
    static pregnant_woman = Icons.new("pregnant_woman");
    static present_to_all = Icons.new("present_to_all");
    static print = Icons.new("print");
    static priority_high = Icons.new("priority_high");
    static public = Icons.new("public");
    static publish = Icons.new("publish");
    static query_builder = Icons.new("query_builder");
    static question_answer = Icons.new("question_answer");
    static queue = Icons.new("queue");
    static queue_music = Icons.new("queue_music");
    static queue_play_next = Icons.new("queue_play_next");
    static radio = Icons.new("radio");
    static radio_button_checked = Icons.new("radio_button_checked");
    static radio_button_unchecked = Icons.new("radio_button_unchecked");
    static rate_review = Icons.new("rate_review");
    static receipt = Icons.new("receipt");
    static recent_actors = Icons.new("recent_actors");
    static record_voice_over = Icons.new("record_voice_over");
    static redeem = Icons.new("redeem");
    static redo = Icons.new("redo");
    static refresh = Icons.new("refresh");
    static remove = Icons.new("remove");
    static remove_circle = Icons.new("remove_circle");
    static remove_circle_outline = Icons.new("remove_circle_outline");
    static remove_from_queue = Icons.new("remove_from_queue");
    static remove_red_eye = Icons.new("remove_red_eye");
    static remove_shopping_cart = Icons.new("remove_shopping_cart");
    static reorder = Icons.new("reorder");
    static repeat = Icons.new("repeat");
    static repeat_one = Icons.new("repeat_one");
    static replay = Icons.new("replay");
    static replay_10 = Icons.new("replay_10");
    static replay_30 = Icons.new("replay_30");
    static replay_5 = Icons.new("replay_5");
    static reply = Icons.new("reply");
    static reply_all = Icons.new("reply_all");
    static report = Icons.new("report");
    static report_off = Icons.new("report_off");
    static report_problem = Icons.new("report_problem");
    static restaurant = Icons.new("restaurant");
    static restaurant_menu = Icons.new("restaurant_menu");
    static restore = Icons.new("restore");
    static restore_from_trash = Icons.new("restore_from_trash");
    static restore_page = Icons.new("restore_page");
    static ring_volume = Icons.new("ring_volume");
    static room = Icons.new("room");
    static room_service = Icons.new("room_service");
    static rotate_90_degrees_ccw = Icons.new("rotate_90_degrees_ccw");
    static rotate_left = Icons.new("rotate_left");
    static rotate_right = Icons.new("rotate_right");
    static rounded_corner = Icons.new("rounded_corner");
    static router = Icons.new("router");
    static rowing = Icons.new("rowing");
    static rss_feed = Icons.new("rss_feed");
    static rv_hookup = Icons.new("rv_hookup");
    static satellite = Icons.new("satellite");
    static save = Icons.new("save");
    static save_alt = Icons.new("save_alt");
    static scanner = Icons.new("scanner");
    static scatter_plot = Icons.new("scatter_plot");
    static schedule = Icons.new("schedule");
    static school = Icons.new("school");
    static score = Icons.new("score");
    static screen_lock_landscape = Icons.new("screen_lock_landscape");
    static screen_lock_portrait = Icons.new("screen_lock_portrait");
    static screen_lock_rotation = Icons.new("screen_lock_rotation");
    static screen_rotation = Icons.new("screen_rotation");
    static screen_share = Icons.new("screen_share");
    static sd_card = Icons.new("sd_card");
    static sd_storage = Icons.new("sd_storage");
    static search = Icons.new("search");
    static security = Icons.new("security");
    static select_all = Icons.new("select_all");
    static send = Icons.new("send");
    static sentiment_dissatisfied = Icons.new("sentiment_dissatisfied");
    static sentiment_neutral = Icons.new("sentiment_neutral");
    static sentiment_satisfied = Icons.new("sentiment_satisfied");
    static sentiment_very_dissatisfied = Icons.new("sentiment_very_dissatisfied");
    static sentiment_very_satisfied = Icons.new("sentiment_very_satisfied");
    static settings = Icons.new("settings");
    static settings_applications = Icons.new("settings_applications");
    static settings_backup_restore = Icons.new("settings_backup_restore");
    static settings_bluetooth = Icons.new("settings_bluetooth");
    static settings_brightness = Icons.new("settings_brightness");
    static settings_cell = Icons.new("settings_cell");
    static settings_ethernet = Icons.new("settings_ethernet");
    static settings_input_antenna = Icons.new("settings_input_antenna");
    static settings_input_component = Icons.new("settings_input_component");
    static settings_input_composite = Icons.new("settings_input_composite");
    static settings_input_hdmi = Icons.new("settings_input_hdmi");
    static settings_input_svideo = Icons.new("settings_input_svideo");
    static settings_overscan = Icons.new("settings_overscan");
    static settings_phone = Icons.new("settings_phone");
    static settings_power = Icons.new("settings_power");
    static settings_remote = Icons.new("settings_remote");
    static settings_system_daydream = Icons.new("settings_system_daydream");
    static settings_voice = Icons.new("settings_voice");
    static share = Icons.new("share");
    static shop = Icons.new("shop");
    static shop_two = Icons.new("shop_two");
    static shopping_basket = Icons.new("shopping_basket");
    static shopping_cart = Icons.new("shopping_cart");
    static short_text = Icons.new("short_text");
    static show_chart = Icons.new("show_chart");
    static shuffle = Icons.new("shuffle");
    static shutter_speed = Icons.new("shutter_speed");
    static signal_cellular_4_bar = Icons.new("signal_cellular_4_bar");
    static signal_cellular_connected_no_internet_4_bar = Icons.new("signal_cellular_connected_no_internet_4_bar");
    static signal_cellular_no_sim = Icons.new("signal_cellular_no_sim");
    static signal_cellular_null = Icons.new("signal_cellular_null");
    static signal_cellular_off = Icons.new("signal_cellular_off");
    static signal_wifi_4_bar = Icons.new("signal_wifi_4_bar");
    static signal_wifi_4_bar_lock = Icons.new("signal_wifi_4_bar_lock");
    static signal_wifi_off = Icons.new("signal_wifi_off");
    static sim_card = Icons.new("sim_card");
    static sim_card_alert = Icons.new("sim_card_alert");
    static skip_next = Icons.new("skip_next");
    static skip_previous = Icons.new("skip_previous");
    static slideshow = Icons.new("slideshow");
    static slow_motion_video = Icons.new("slow_motion_video");
    static smartphone = Icons.new("smartphone");
    static smoke_free = Icons.new("smoke_free");
    static smoking_rooms = Icons.new("smoking_rooms");
    static sms = Icons.new("sms");
    static sms_failed = Icons.new("sms_failed");
    static snooze = Icons.new("snooze");
    static sort = Icons.new("sort");
    static sort_by_alpha = Icons.new("sort_by_alpha");
    static spa = Icons.new("spa");
    static space_bar = Icons.new("space_bar");
    static speaker = Icons.new("speaker");
    static speaker_group = Icons.new("speaker_group");
    static speaker_notes = Icons.new("speaker_notes");
    static speaker_notes_off = Icons.new("speaker_notes_off");
    static speaker_phone = Icons.new("speaker_phone");
    static spellcheck = Icons.new("spellcheck");
    static star = Icons.new("star");
    static star_border = Icons.new("star_border");
    static star_half = Icons.new("star_half");
    static stars = Icons.new("stars");
    static stay_current_landscape = Icons.new("stay_current_landscape");
    static stay_current_portrait = Icons.new("stay_current_portrait");
    static stay_primary_landscape = Icons.new("stay_primary_landscape");
    static stay_primary_portrait = Icons.new("stay_primary_portrait");
    static stop = Icons.new("stop");
    static stop_screen_share = Icons.new("stop_screen_share");
    static storage = Icons.new("storage");
    static store = Icons.new("store");
    static store_mall_directory = Icons.new("store_mall_directory");
    static straighten = Icons.new("straighten");
    static streetview = Icons.new("streetview");
    static strikethrough_s = Icons.new("strikethrough_s");
    static style = Icons.new("style");
    static subdirectory_arrow_left = Icons.new("subdirectory_arrow_left");
    static subdirectory_arrow_right = Icons.new("subdirectory_arrow_right");
    static subject = Icons.new("subject");
    static subscriptions = Icons.new("subscriptions");
    static subtitles = Icons.new("subtitles");
    static subway = Icons.new("subway");
    static supervised_user_circle = Icons.new("supervised_user_circle");
    static supervisor_account = Icons.new("supervisor_account");
    static surround_sound = Icons.new("surround_sound");
    static swap_calls = Icons.new("swap_calls");
    static swap_horiz = Icons.new("swap_horiz");
    static swap_horizontal_circle = Icons.new("swap_horizontal_circle");
    static swap_vert = Icons.new("swap_vert");
    static swap_vertical_circle = Icons.new("swap_vertical_circle");
    static switch_camera = Icons.new("switch_camera");
    static switch_video = Icons.new("switch_video");
    static sync = Icons.new("sync");
    static sync_disabled = Icons.new("sync_disabled");
    static sync_problem = Icons.new("sync_problem");
    static system_update = Icons.new("system_update");
    static system_update_alt = Icons.new("system_update_alt");
    static tab = Icons.new("tab");
    static tab_unselected = Icons.new("tab_unselected");
    static table_chart = Icons.new("table_chart");
    static tablet = Icons.new("tablet");
    static tablet_android = Icons.new("tablet_android");
    static tablet_mac = Icons.new("tablet_mac");
    static tag_faces = Icons.new("tag_faces");
    static tap_and_play = Icons.new("tap_and_play");
    static terrain = Icons.new("terrain");
    static text_fields = Icons.new("text_fields");
    static text_format = Icons.new("text_format");
    static text_rotate_up = Icons.new("text_rotate_up");
    static text_rotate_vertical = Icons.new("text_rotate_vertical");
    static text_rotation_angledown = Icons.new("text_rotation_angledown");
    static text_rotation_angleup = Icons.new("text_rotation_angleup");
    static text_rotation_down = Icons.new("text_rotation_down");
    static text_rotation_none = Icons.new("text_rotation_none");
    static textsms = Icons.new("textsms");
    static texture = Icons.new("texture");
    static theaters = Icons.new("theaters");
    static thumb_down = Icons.new("thumb_down");
    static thumb_up = Icons.new("thumb_up");
    static thumbs_up_down = Icons.new("thumbs_up_down");
    static time_to_leave = Icons.new("time_to_leave");
    static timelapse = Icons.new("timelapse");
    static timeline = Icons.new("timeline");
    static timer = Icons.new("timer");
    static timer_10 = Icons.new("timer_10");
    static timer_3 = Icons.new("timer_3");
    static timer_off = Icons.new("timer_off");
    static title = Icons.new("title");
    static toc = Icons.new("toc");
    static today = Icons.new("today");
    static toll = Icons.new("toll");
    static tonality = Icons.new("tonality");
    static touch_app = Icons.new("touch_app");
    static toys = Icons.new("toys");
    static track_changes = Icons.new("track_changes");
    static traffic = Icons.new("traffic");
    static train = Icons.new("train");
    static tram = Icons.new("tram");
    static transfer_within_a_station = Icons.new("transfer_within_a_station");
    static transform = Icons.new("transform");
    static transit_enterexit = Icons.new("transit_enterexit");
    static translate = Icons.new("translate");
    static trending_down = Icons.new("trending_down");
    static trending_flat = Icons.new("trending_flat");
    static trending_up = Icons.new("trending_up");
    static trip_origin = Icons.new("trip_origin");
    static tune = Icons.new("tune");
    static turned_in = Icons.new("turned_in");
    static turned_in_not = Icons.new("turned_in_not");
    static tv = Icons.new("tv");
    static unarchive = Icons.new("unarchive");
    static undo = Icons.new("undo");
    static unfold_less = Icons.new("unfold_less");
    static unfold_more = Icons.new("unfold_more");
    static update = Icons.new("update");
    static usb = Icons.new("usb");
    static verified_user = Icons.new("verified_user");
    static vertical_align_bottom = Icons.new("vertical_align_bottom");
    static vertical_align_center = Icons.new("vertical_align_center");
    static vertical_align_top = Icons.new("vertical_align_top");
    static vibration = Icons.new("vibration");
    static video_call = Icons.new("video_call");
    static video_label = Icons.new("video_label");
    static video_library = Icons.new("video_library");
    static videocam = Icons.new("videocam");
    static videocam_off = Icons.new("videocam_off");
    static videogame_asset = Icons.new("videogame_asset");
    static view_agenda = Icons.new("view_agenda");
    static view_array = Icons.new("view_array");
    static view_carousel = Icons.new("view_carousel");
    static view_column = Icons.new("view_column");
    static view_comfy = Icons.new("view_comfy");
    static view_compact = Icons.new("view_compact");
    static view_day = Icons.new("view_day");
    static view_headline = Icons.new("view_headline");
    static view_list = Icons.new("view_list");
    static view_module = Icons.new("view_module");
    static view_quilt = Icons.new("view_quilt");
    static view_stream = Icons.new("view_stream");
    static view_week = Icons.new("view_week");
    static vignette = Icons.new("vignette");
    static visibility = Icons.new("visibility");
    static visibility_off = Icons.new("visibility_off");
    static voice_chat = Icons.new("voice_chat");
    static voicemail = Icons.new("voicemail");
    static volume_down = Icons.new("volume_down");
    static volume_mute = Icons.new("volume_mute");
    static volume_off = Icons.new("volume_off");
    static volume_up = Icons.new("volume_up");
    static vpn_key = Icons.new("vpn_key");
    static vpn_lock = Icons.new("vpn_lock");
    static wallpaper = Icons.new("wallpaper");
    static warning = Icons.new("warning");
    static watch = Icons.new("watch");
    static watch_later = Icons.new("watch_later");
    static wb_auto = Icons.new("wb_auto");
    static wb_cloudy = Icons.new("wb_cloudy");
    static wb_incandescent = Icons.new("wb_incandescent");
    static wb_iridescent = Icons.new("wb_iridescent");
    static wb_sunny = Icons.new("wb_sunny");
    static wc = Icons.new("wc");
    static web = Icons.new("web");
    static web_asset = Icons.new("web_asset");
    static weekend = Icons.new("weekend");
    static whatshot = Icons.new("whatshot");
    static widgets = Icons.new("widgets");
    static wifi = Icons.new("wifi");
    static wifi_lock = Icons.new("wifi_lock");
    static wifi_tethering = Icons.new("wifi_tethering");
    static work = Icons.new("work");
    static wrap_text = Icons.new("wrap_text");
    static youtube_searched_for = Icons.new("youtube_searched_for");
    static zoom_in = Icons.new("zoom_in");
    static zoom_out = Icons.new("zoom_out");
    static zoom_out_map = Icons.new("zoom_out_map");
  }
//#endregion


//#region ******** Cupertino Icons ********
export class CupertinoIcons extends IconData{
    constructor(icon:string){
      super(icon);
    }
    static new(icon:string) {
     return new CupertinoIcons(icon);
    }
  
    static left_chevron = CupertinoIcons.new("left_chevron");
    static right_chevron = CupertinoIcons.new("right_chevron");
    static share = CupertinoIcons.new("share");
    static share_solid = CupertinoIcons.new("share_solid");
    static book = CupertinoIcons.new("book");
    static book_solid = CupertinoIcons.new("book_solid");
    static bookmark = CupertinoIcons.new("bookmark");
    static bookmark_solid = CupertinoIcons.new("bookmark_solid");
    static info = CupertinoIcons.new("info");
    static reply = CupertinoIcons.new("reply");
    static conversation_bubble = CupertinoIcons.new("conversation_bubble");
    static profile_circled = CupertinoIcons.new("profile_circled");
    static plus_circled = CupertinoIcons.new("plus_circled");
    static minus_circled = CupertinoIcons.new("minus_circled");
    static flag = CupertinoIcons.new("flag");
    static search = CupertinoIcons.new("search");
    static check_mark = CupertinoIcons.new("check_mark");
    static check_mark_circled = CupertinoIcons.new("check_mark_circled");
    static check_mark_circled_solid = CupertinoIcons.new("check_mark_circled_solid");
    static circle = CupertinoIcons.new("circle");
    static circle_filled = CupertinoIcons.new("circle_filled");
    static back = CupertinoIcons.new("back");
    static forward = CupertinoIcons.new("forward");
    static home = CupertinoIcons.new("home");
    static shopping_cart = CupertinoIcons.new("shopping_cart");
    static ellipsis = CupertinoIcons.new("ellipsis");
    static phone = CupertinoIcons.new("phone");
    static phone_solid = CupertinoIcons.new("phone_solid");
    static down_arrow = CupertinoIcons.new("down_arrow");
    static up_arrow = CupertinoIcons.new("up_arrow");
    static battery_charging = CupertinoIcons.new("battery_charging");
    static battery_empty = CupertinoIcons.new("battery_empty");
    static battery_full = CupertinoIcons.new("battery_full");
    static battery_75_percent = CupertinoIcons.new("battery_75_percent");
    static battery_25_percent = CupertinoIcons.new("battery_25_percent");
    static bluetooth = CupertinoIcons.new("bluetooth");
    static restart = CupertinoIcons.new("restart");
    static reply_all = CupertinoIcons.new("reply_all");
    static reply_thick_solid = CupertinoIcons.new("reply_thick_solid");
    static share_up = CupertinoIcons.new("share_up");
    static shuffle = CupertinoIcons.new("shuffle");
    static shuffle_medium = CupertinoIcons.new("shuffle_medium");
    static shuffle_thick = CupertinoIcons.new("shuffle_thick");
    static photo_camera = CupertinoIcons.new("photo_camera");
    static photo_camera_solid = CupertinoIcons.new("photo_camera_solid");
    static video_camera = CupertinoIcons.new("video_camera");
    static video_camera_solid = CupertinoIcons.new("video_camera_solid");
    static switch_camera = CupertinoIcons.new("switch_camera");
    static switch_camera_solid = CupertinoIcons.new("switch_camera_solid");
    static collections = CupertinoIcons.new("collections");
    static collections_solid = CupertinoIcons.new("collections_solid");
    static folder = CupertinoIcons.new("folder");
    static folder_solid = CupertinoIcons.new("folder_solid");
    static folder_open = CupertinoIcons.new("folder_open");
    static delete = CupertinoIcons.new("delete");
    static delete_solid = CupertinoIcons.new("delete_solid");
    static delete_simple = CupertinoIcons.new("delete_simple");
    static pen = CupertinoIcons.new("pen");
    static pencil = CupertinoIcons.new("pencil");
    static create = CupertinoIcons.new("create");
    static create_solid = CupertinoIcons.new("create_solid");
    static refresh = CupertinoIcons.new("refresh");
    static refresh_circled = CupertinoIcons.new("refresh_circled");
    static refresh_circled_solid = CupertinoIcons.new("refresh_circled_solid");
    static refresh_thin = CupertinoIcons.new("refresh_thin");
    static refresh_thick = CupertinoIcons.new("refresh_thick");
    static refresh_bold = CupertinoIcons.new("refresh_bold");
    static clear_thick = CupertinoIcons.new("clear_thick");
    static clear_thick_circled = CupertinoIcons.new("clear_thick_circled");
    static clear = CupertinoIcons.new("clear");
    static clear_circled = CupertinoIcons.new("clear_circled");
    static clear_circled_solid = CupertinoIcons.new("clear_circled_solid");
    static add = CupertinoIcons.new("add");
    static add_circled = CupertinoIcons.new("add_circled");
    static add_circled_solid = CupertinoIcons.new("add_circled_solid");
    static gear = CupertinoIcons.new("gear");
    static gear_solid = CupertinoIcons.new("gear_solid");
    static gear_big = CupertinoIcons.new("gear_big");
    static settings = CupertinoIcons.new("settings");
    static settings_solid = CupertinoIcons.new("settings_solid");
    static music_note = CupertinoIcons.new("music_note");
    static double_music_note = CupertinoIcons.new("double_music_note");
    static play_arrow = CupertinoIcons.new("play_arrow");
    static play_arrow_solid = CupertinoIcons.new("play_arrow_solid");
    static pause = CupertinoIcons.new("pause");
    static pause_solid = CupertinoIcons.new("pause_solid");
    static loop = CupertinoIcons.new("loop");
    static loop_thick = CupertinoIcons.new("loop_thick");
    static volume_down = CupertinoIcons.new("volume_down");
    static volume_mute = CupertinoIcons.new("volume_mute");
    static volume_off = CupertinoIcons.new("volume_off");
    static volume_up = CupertinoIcons.new("volume_up");
    static fullscreen = CupertinoIcons.new("fullscreen");
    static fullscreen_exit = CupertinoIcons.new("fullscreen_exit");
    static mic_off = CupertinoIcons.new("mic_off");
    static mic = CupertinoIcons.new("mic");
    static mic_solid = CupertinoIcons.new("mic_solid");
    static clock = CupertinoIcons.new("clock");
    static clock_solid = CupertinoIcons.new("clock_solid");
    static time = CupertinoIcons.new("time");
    static time_solid = CupertinoIcons.new("time_solid");
    static padlock = CupertinoIcons.new("padlock");
    static padlock_solid = CupertinoIcons.new("padlock_solid");
    static eye = CupertinoIcons.new("eye");
    static eye_solid = CupertinoIcons.new("eye_solid");
    static person = CupertinoIcons.new("person");
    static person_solid = CupertinoIcons.new("person_solid");
    static person_add = CupertinoIcons.new("person_add");
    static person_add_solid = CupertinoIcons.new("person_add_solid");
    static group = CupertinoIcons.new("group");
    static group_solid = CupertinoIcons.new("group_solid");
    static mail = CupertinoIcons.new("mail");
    static mail_solid = CupertinoIcons.new("mail_solid");
    static location = CupertinoIcons.new("location");
    static location_solid = CupertinoIcons.new("location_solid");
    static tag = CupertinoIcons.new("tag");
    static tag_solid = CupertinoIcons.new("tag_solid");
    static tags = CupertinoIcons.new("tags");
    static tags_solid = CupertinoIcons.new("tags_solid");
    static bus = CupertinoIcons.new("bus");
    static car = CupertinoIcons.new("car");
    static car_detailed = CupertinoIcons.new("car_detailed");
    static train_style_one = CupertinoIcons.new("train_style_one");
    static train_style_two = CupertinoIcons.new("train_style_two");
    static paw = CupertinoIcons.new("paw");
    static paw_solid = CupertinoIcons.new("paw_solid");
    static game_controller = CupertinoIcons.new("game_controller");
    static game_controller_solid = CupertinoIcons.new("game_controller_solid");
    static lab_flask = CupertinoIcons.new("lab_flask");
    static lab_flask_solid = CupertinoIcons.new("lab_flask_solid");
    static heart = CupertinoIcons.new("heart");
    static heart_solid = CupertinoIcons.new("heart_solid");
    static bell = CupertinoIcons.new("bell");
    static bell_solid = CupertinoIcons.new("bell_solid");
    static news = CupertinoIcons.new("news");
    static news_solid = CupertinoIcons.new("news_solid");
    static brightness = CupertinoIcons.new("brightness");
    static brightness_solid = CupertinoIcons.new("brightness_solid");
  }
//#endregion


//#region ******** Material Widgets ********

  //#region ------- A -------

  //****** AbsorbPointer ******
  interface AbsorbPointerConfig {
    key?:Key;
    child?:Widget;
    absorbing?:boolean;
    ignoringSemantics?:boolean;
  }
  export class AbsorbPointer extends Widget {
    key?:Key;
    child?:Widget;
    absorbing?:boolean;
    ignoringSemantics?:boolean;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          absorbing?:boolean, 
          ignoringSemantics?:boolean, 
        }
     */
    constructor(config?: AbsorbPointerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: AbsorbPointerConfig) {
      return new AbsorbPointer(config);
    }
  }
  
  //****** TODO AnimationController ******
  interface AnimationControllerConfig {
    value?:number;
    duration?:Duration;
    debugLabel?:string; 
    lowerBound?:number;
    upperBound?:number;
    animationBehavior?:AnimationBehavior;
    vsync?:any;
  }
  export class AnimationController extends Widget {
    value?:number;
    duration?:Duration;
    debugLabel?:string; 
    lowerBound?:number;
    upperBound?:number;
    animationBehavior?:AnimationBehavior;
    vsync?:any;
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
    static new(config: AnimationControllerConfig) {
      var v = new AnimationController();
      v.createMirrorID();
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
      var argument = new FlutterCallConfig({
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
      var argument = new FlutterCallConfig({
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
      var argument = new FlutterCallConfig({
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
      var argument = new FlutterCallConfig({
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
  
  
  //****** TODO Animation ******
  export class Animation extends Widget {
    tween?:Tween;
    controller?:AnimationController;
    statusListenerList?:any;
    listenerList?:any;
  
    static new(tween?:Tween, controller?:AnimationController) {
      var v = new Animation();
      v.createMirrorID();
  
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
  
  
  //****** AboutListTile ******
  interface AboutListTileConfig {
    key?:Key;
    child?:Widget;
    icon?:Widget;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    dense?:boolean;
    applicationIcon?:Widget;
    aboutBoxChildren?:Array<Widget>;
  }
  export class AboutListTile extends Widget {
    key?:Key;
    child?:Widget;
    icon?:Widget;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    dense?:boolean;
    applicationIcon?:Widget;
    aboutBoxChildren?:Array<Widget>;
  
    /**
     * @param config config: 
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
    constructor(config: AboutListTileConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.child = config.child;
        this.icon = config.icon;
        this.applicationIcon = config.applicationIcon;
        this.applicationName = config.applicationName;
        this.applicationLegalese = config.applicationLegalese;
        this.applicationVersion = config.applicationVersion;
        this.dense = config.dense;
        this.aboutBoxChildren = config.aboutBoxChildren;
      }
    }
      
    /**
     * @param config config: 
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
    static new(config: AboutListTileConfig){
      return new AboutListTile(config);
    }
  }
  
  //****** AboutDialog ******
  interface AboutDialogConfig {
    key?:Key;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    applicationIcon?:Widget;
    children?:Array<Widget>;
  }
  export class AboutDialog extends Widget {
    key?:Key;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    applicationIcon?:Widget;
    children?:Array<Widget>;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          applicationName?:string, 
          applicationLegalese?:string, 
          applicationVersion?:string, 
          applicationIcon?:Widget, 
          children?:Array<Widget>, 
        }
     */
    constructor(config: AboutDialogConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.applicationIcon = config.applicationIcon;
        this.applicationName = config.applicationName;
        this.applicationLegalese = config.applicationLegalese;
        this.applicationVersion = config.applicationVersion;
        this.children = config.children;
      }
    }
      
    /**
     * @param config config: 
        {
          key?:Key, 
          applicationName?:string, 
          applicationLegalese?:string, 
          applicationVersion?:string, 
          applicationIcon?:Widget, 
          children?:Array<Widget>, 
        }
     */
    static new(config: AboutDialogConfig){
      return new AboutDialog(config);
    }
  }
  
  //****** AppBar ******
  interface AppBarConfig {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    title?:Widget;  
    actions?:Array<Widget>;  
    flexibleSpace?:Widget;
    bottom?:Widget;
    elevation?:number;
    shadowColor?:Color;
    shape?:ShapeBorder;
    backgroundColor?:Color;
    brightness?:Brightness;
    primary?:boolean;
    centerTitle?:boolean;
    excludeHeaderSemantics?:boolean;
    titleSpacing?:number;
    toolbarOpacity?:number;
    bottomOpacity?:number;
    toolbarHeight?:number;
  }
  export class AppBar extends Widget {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    title?:Widget;  
    actions?:Array<Widget>;  
    flexibleSpace?:Widget;
    bottom?:Widget;
    elevation?:number;
    shadowColor?:Color;
    shape?:ShapeBorder;
    backgroundColor?:Color;
    brightness?:Brightness;
    primary?:boolean;
    centerTitle?:boolean;
    excludeHeaderSemantics?:boolean;
    titleSpacing?:number;
    toolbarOpacity?:number;
    bottomOpacity?:number;
    toolbarHeight?:number;
  
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
    constructor(config: AppBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AppBarConfig){
      return new AppBar(config);
    }
  }
  
  //****** Align ******
  interface AlignConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    widthFactor?:number;
    heightFactor?:number;
  }
  export class Align extends Widget {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    widthFactor?:number;
    heightFactor?:number;
  
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
    constructor(config: AlignConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AlignConfig) {
      return new Align(config);
    }
  }
  
  //****** AspectRatio ******
  interface AspectRatioConfig {
    child?:Widget;
    aspectRatio?:number;
    key?:Key;
  }
  export class AspectRatio extends Widget {
    child?:Widget;
    aspectRatio?:number;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          aspectRatio?:number,
        }
     */
    constructor(config: AspectRatioConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AspectRatioConfig) {
      return new AspectRatio(config);
    }
  }
  
  //****** AnnotatedRegion ******
  interface AnnotatedRegionConfig {
    key?:Key;
    child:Widget;
    value:number;
    sized?:boolean;
  }
  export class AnnotatedRegion extends Widget {
    key?:Key;
    child?:Widget;
    value?:number;
    sized?:boolean;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          value?:number, 
          sized?:boolean,
        }
     */
    constructor(config: AnnotatedRegionConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnnotatedRegionConfig){
      return new AnnotatedRegion(config);
    }
  }
  
  //****** TODO AnimatedCrossFade ******
  interface AnimatedCrossFadeConfig {
    key?:Key;
    firstChild?:Widget;
    secondChild?:Widget;
    firstCurve?:Curve;
    secondCurve?:Curve;
    sizeCurve?:Curve;
    alignment?:Alignment;
    crossFadeState?:CrossFadeState;
    duration?:Duration;
    reverseDuration?:Duration;
    layoutBuilder?:any;
  }
  export class AnimatedCrossFade extends Widget {
    key?:Key;
    firstChild?:Widget;
    secondChild?:Widget;
    firstCurve?:Curve;
    secondCurve?:Curve;
    sizeCurve?:Curve;
    alignment?:Alignment;
    crossFadeState?:CrossFadeState;
    duration?:Duration;
    reverseDuration?:Duration;
    layoutBuilder?:any;
  
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
    constructor(config: AnimatedCrossFadeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnimatedCrossFadeConfig) {
      return new AnimatedCrossFade(config);
    };
  }
  
  //****** TODO AnimatedOpacity ******
  interface AnimatedOpacityConfig {
    key?:Key;
    child?:Widget;
    opacity?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
    alwaysIncludeSemantics?:boolean;
  }
  export class AnimatedOpacity extends Widget {
    key?:Key;
    child?:Widget;
    opacity?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
    alwaysIncludeSemantics?:boolean;
  
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
    constructor(config: AnimatedOpacityConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnimatedOpacityConfig) {
      return new AnimatedOpacity(config);
    };
  }
  
  //****** TODO AnimatedBuilder ******
  interface AnimatedBuilderConfig {
    key?:Key;
    animation?:Animation;
    builder?:any;
    child?:Widget;
    widget?:Widget;
  }
  export class AnimatedBuilder extends Widget {
    key?:Key;
    animation?:Animation;
    builder?:any;
    child?:Widget;
    widget?:Widget;
  
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
    constructor(config: AnimatedBuilderConfig){
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
    static new(config: AnimatedBuilderConfig) {
      return new AnimatedBuilder(config);
    }
  }
  
  //****** TODO AnimatedContainer ******
  interface AnimatedContainerConfig {
    key?:Key;
    alignment?:Alignment;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    child?:Widget;
    color?:Color;
    decoration?:BoxDecoration;
    foregroundDecoration?:BoxDecoration;
    width?:number;
    height?:number;
    constraints?:BoxConstraints;
    transform?:Matrix4;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  }
  export class AnimatedContainer extends Widget {
    key?:Key;
    alignment?:Alignment;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    child?:Widget;
    color?:Color;
    decoration?:BoxDecoration;
    foregroundDecoration?:BoxDecoration;
    width?:number;
    height?:number;
    constraints?:BoxConstraints;
    transform?:Matrix4;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  
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
    constructor(config: AnimatedContainerConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.alignment = config.alignment;
        this.margin = config.margin;
        this.padding = config.padding;
        this.child = config.child;
        this.color = config.color;
        this.decoration= config.decoration;
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
    static new(config: AnimatedContainerConfig) {
      return new AnimatedContainer(config);
    }
  
  }
  
  //****** TODO AnimatedPhysicalModel ******
  interface AnimatedPhysicalModelConfig {
    key?:Key;
    child?:Widget;
    shape?:any;
    clipBehavior?:Clip;
    borderRadius?:BorderRadius;
    elevation?:number;
    color?:Color;
    animateColor?:boolean;
    shadowColor?:Color;
    animateShadowColor?:boolean;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  }
  export class AnimatedPhysicalModel extends Widget {
    key?:Key;
    child?:Widget;
    shape?:any;
    clipBehavior?:Clip;
    borderRadius?:BorderRadius;
    elevation?:number;
    color?:Color;
    animateColor?:boolean;
    shadowColor?:Color;
    animateShadowColor?:boolean;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  
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
    constructor(config: AnimatedPhysicalModelConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnimatedPhysicalModelConfig) {
      return new AnimatedPhysicalModel(config);
    }
  }
  
  //****** TODO AnimatedPositioned ******
  interface AnimatedPositionedConfig {
    key?:Key;
    child?:Widget;
    left?:number;
    top?:number;
    right?:number;
    bottom?:number;
    width?:number;
    height?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  }
  export class AnimatedPositioned extends Widget {
    key?:Key;
    child?:Widget;
    left?:number;
    top?:number;
    right?:number;
    bottom?:number;
    width?:number;
    height?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  
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
    constructor(config: AnimatedPositionedConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnimatedPositionedConfig) {
      return new AnimatedPositioned(config);
    }
  }
  
  //****** TODO AnimatedSize ******
  interface AnimatedSizeConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    curve?:Curve;
    duration?:Duration;
    reverseDuration?:Duration;
    vsync?:any;
  }
  export class AnimatedSize extends Widget {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    curve?:Curve;
    duration?:Duration;
    reverseDuration?:Duration;
    vsync?:any;
  
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
    constructor(config: AnimatedSizeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: AnimatedSizeConfig) {
      return new AnimatedSize(config);
    }
  }
  
  //****** TODO AnimatedDefaultTextStyle ******
  interface AnimatedDefaultTextStyleConfig {
    key?:Key;
    child?:Widget;
    style?:TextStyle;
    textAlign?:TextAlign;
    softWrap?:boolean;
    overflow?:TextOverflow;
    maxLines?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
  }
  export class AnimatedDefaultTextStyle extends Widget {
    key?:Key;
    child?:Widget;
    style?:TextStyle;
    textAlign?:TextAlign;
    softWrap?:boolean;
    overflow?:TextOverflow;
    maxLines?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:VoidCallback;
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
    constructor(config: AnimatedDefaultTextStyleConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key
        this.child = config.child;
        this.style = config.style;
        this.softWrap = config.softWrap;
        this.textAlign = config.textAlign;
        this.softWrap = config.softWrap;
        this.maxLines = config.maxLines;
        this.curve = config.curve;
        this.duration = config.duration;
        this.onEnd =config.onEnd;
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
    static new(config: AnimatedDefaultTextStyleConfig) {
      return new AnimatedDefaultTextStyle(config);
    }
  }
  
  //#endregion
  
  //#region ------- B -------
  //****** BottomNavigationBarItem ******
  interface BottomNavigationBarItemConfig {
    icon:Widget;
    title?:Widget;
    activeIcon?:Widget;
    backgroundColor?:Color;
  }
  export class BottomNavigationBarItem extends Widget {
    icon?:Widget;
    title?:Widget;
    activeIcon?:Widget;
    backgroundColor?:Color;
  
    /**
     * @param config config: 
        {
          icon:Widget, 
          title?:Widget,
          activeIcon?:Widget, 
          backgroundColor?:Color
        }
     */
    constructor(config: BottomNavigationBarItemConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: BottomNavigationBarItemConfig) {
      return new BottomNavigationBarItem(config);
    }
  }
  
  //****** Banner ******
  interface BannerConfig {
    key?:Key;
    child?:Widget;
    message:string;
    textDirection?:TextDirection;
    location:BannerLocation;
    layoutDirection?:TextDirection;
    color?:Color;
    textStyle?:TextStyle;
  }
  export class Banner extends Widget  {
    key?:Key;
    child?:Widget;
    message?:string;
    textDirection?:TextDirection;
    location?:BannerLocation;
    layoutDirection?:TextDirection;
    color?:Color;
    textStyle?:TextStyle;
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
    constructor(config: BannerConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.child = config.child;
        this.message = config.message;
        this.textDirection = config.textDirection;
        this.location = config.location;
        this.layoutDirection = config.layoutDirection;
        this.color = config.color;
        this.textStyle =config.textStyle;
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
    static new(config: BannerConfig) {
      return new Banner(config);
    }
  }
  
  //****** Baseline ******
  interface BaselineConfig {
    child?:Widget;
    baseline:number;
    baselineType:TextBaseline;
    key?:Key;
  }
  export class Baseline extends Widget  {
    child?:Widget;
    baseline?:number;
    baselineType?:TextBaseline;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    constructor(config: BaselineConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: BaselineConfig) {
      return new Baseline(config);
    }
  }
  
  //****** ButtonBar ******
  interface ButtonBarConfig {
    key?:Key;
    children?:Array<Widget>;
    alignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    buttonTextTheme?:ButtonTextTheme;
    buttonHeight?:number;
    buttonMinWidth?:number;
    buttonPadding?:EdgeInsets;
    buttonAlignedDropdown?:boolean;
    layoutBehavior?:ButtonBarLayoutBehavior;
    overflowButtonSpacing?:number;
    overflowDirection?:VerticalDirection;
  }
  export class ButtonBar extends Widget {
    key?:Key;
    children?:Array<Widget>;
    alignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    buttonTextTheme?:ButtonTextTheme;
    buttonHeight?:number;
    buttonMinWidth?:number;
    buttonPadding?:EdgeInsets;
    buttonAlignedDropdown?:boolean;
    layoutBehavior?:ButtonBarLayoutBehavior;
    overflowButtonSpacing?:number;
    overflowDirection?:VerticalDirection;
  
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
    constructor(config: ButtonBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ButtonBarConfig) {
      return new ButtonBar(config);
    }
  }
  
  //****** BlockSemantics ******
  interface BlockSemanticsConfig {
    child?:Widget;
    blocking?:boolean;
    key?:Key;
  }
  export class BlockSemantics extends Widget {
    child?:Widget;
    blocking?:boolean;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          blocking?:boolean,
        }
     */
    constructor(config: BlockSemanticsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: BlockSemanticsConfig) {
      return new BlockSemantics(config);
    }
  }
  
  //****** BottomAppBar ******
  interface BottomAppBarConfig {
    child?:Widget;
    color?:Color;
    elevation?:number;
    shape?:NotchedShape;
    clipBehavior?:Clip;
    notchMargin?:number;
    key?:Key;
  }
  export class BottomAppBar extends Widget {
    child?:Widget;
    color?:Color;
    elevation?:number;
    shape?:NotchedShape;
    clipBehavior?:Clip;
    notchMargin?:number;
    key?:Key;
  
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
    constructor(config: BottomAppBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: BottomAppBarConfig) {
      return new BottomAppBar(config);
    }
  }
  
  //****** BottomNavigationBar ******
  interface BottomNavigationBarConfig {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:VoidCallbackNumber;
    currentIndex?:number;
    elevation?:number;
    type?:BottomNavigationBarType;
    fixedColor?:Color;
    backgroundColor?:Color;
    iconSize?:number;
    selectedItemColor?:Color;
    unselectedItemColor?:Color;
    selectedIconTheme?:IconThemeData;
    unselectedIconTheme?:IconThemeData;
    selectedFontSize?:number;
    unselectedFontSize?:number;
    selectedLabelStyle?:TextStyle;
    unselectedLabelStyle?:TextStyle;
    showSelectedLabels?:boolean;
    showUnselectedLabels?:boolean;
  }
  export class BottomNavigationBar extends Widget {
    key?:Key;
    items?:Array<BottomNavigationBarItem>;
    onTap?:VoidCallbackNumber;
    currentIndex?:number;
    elevation?:number;
    type?:BottomNavigationBarType;
    fixedColor?:Color;
    backgroundColor?:Color;
    iconSize?:number;
    selectedItemColor?:Color;
    unselectedItemColor?:Color;
    selectedIconTheme?:IconThemeData;
    unselectedIconTheme?:IconThemeData;
    selectedFontSize?:number;
    unselectedFontSize?:number;
    selectedLabelStyle?:TextStyle;
    unselectedLabelStyle?:TextStyle;
    showSelectedLabels?:boolean;
    showUnselectedLabels?:boolean;
   
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
    constructor(config: BottomNavigationBarConfig){
      super();
      if(config!=null && config!=undefined){
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
        this.selectedIconTheme = config.selectedIconTheme;
        this.unselectedIconTheme = config.unselectedIconTheme;
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
    static new(config: BottomNavigationBarConfig) {
      return new BottomNavigationBar(config);
    }
  }
  
  //****** BackButtonIcon ******
  interface BackButtonIconConfig {
    key?:Key;
  }
  export class BackButtonIcon extends Widget {
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
        }
     */
    constructor(config: BackButtonIconConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
      }
    }
  
  
    /**
     * @param config config: 
        {
          key?:Key, 
        }
     */
    static new(config: BackButtonIconConfig) {
      return new BackButtonIcon(config);
    }
  }
  
  //****** BackButton ******
  interface BackButtonConfig {
    key?:Key;
    onPressed?:VoidCallback;
  }
  export class BackButton extends Widget {
    key?:Key;
    onPressed?:VoidCallback;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          onPressed?:VoidCallback,
        }
     */
    constructor(config: BackButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: BackButtonConfig) {
      return new BackButton(config);
    }
  }
  
  //****** TODO Builder ******
  interface BuilderConfig {
    builder?:any;
    key?:Key;
  }
  export class Builder extends Widget {
    builder?:any;
    key?:Key;
    child?:Builder;
  
    preBuild(jsWidgetHelper?:any, buildContext?:BuildContext) {
      if (this.builder) {
        this.child = this.builder(buildContext);
        delete this.builder;
      }
      super.preBuild(jsWidgetHelper, buildContext);
    }
  
    constructor(builder?:any, key?:Key){
      super();
      this.key = key;
      this.builder = builder;
  
      // 本地创建的，供flutter使用
      this.child = undefined;
    }
  
    static new(builder?:any, key?:Key) {
      return new Builder(builder,key);
    }
  }
  //#endregion
  
  //#region ------- C -------
  
  //****** CloseButton ******
  interface CloseButtonConfig {
    key?:Key;
    onPressed?:VoidCallback;
    color?:Color;
  }
  export class CloseButton extends Widget {
    key?:Key;
    onPressed?:VoidCallback;
    color?:Color;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          onPressed?:VoidCallback,
          color?:Color, 
        }
     */
    constructor(config: CloseButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CloseButtonConfig) {
      return new CloseButton(config);
    }
  }
  
  //****** Container ******
  interface ContainerConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    color?:Color;
    width?:number;
    height?:number;
    decoration?:BoxDecoration;
    foregroundDecoration?:BoxDecoration;
    constraints?:BoxConstraints;
    transform?:Matrix4;  
    clipBehavior?:Clip;
  }
  export class Container extends Widget {
    child?:Widget;
    alignment?:Alignment;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    color?:Color;
    width?:number;
    height?:number;
    decoration?:BoxDecoration;
    foregroundDecoration?:BoxDecoration;
    constraints?:BoxConstraints;
    transform?:Matrix4;
    key?:Key;
    clipBehavior?:Clip;
  
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
    constructor(config: ContainerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ContainerConfig) {
        return new Container(config);
    }
  }
  
  //****** Center ******
  interface CenterConfig {
    child?:Widget;
    widthFactor?:number;
    heightFactor?:number;
    key?:Key;
  }
  export class Center extends Widget {
    child?:Widget;
    widthFactor?:number;
    heightFactor?:number;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          widthFactor?:number, 
          heightFactor?:number, 
        }
     */
    constructor(config: CenterConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CenterConfig) {
      return new Center(config);
    }
  }
  
  //****** ColoredBox ******
  interface ColoredBoxConfig {
    key?:Key;
    child?:Widget;
    color:Color;
  }
  export class ColoredBox extends Widget {
    key?:Key;
    child?:Widget;
    color?:Color;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          color:Color, 
        }
     */
    constructor(config: ColoredBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ColoredBoxConfig) {
      return new ColoredBox(config);
    }
  }
  
  //****** CircleAvatar ******
  interface CircleAvatarConfig {
    key?:Key;
    child?:Widget;
    backgroundColor?:Color;
    foregroundColor?:Color
    backgroundImage?:any;
    radius?:number;
    minRadius?:number;
    maxRadius?:number;
  }
  export class CircleAvatar extends Widget {
    key?:Key;
    child?:Widget;
    backgroundColor?:Color;
    foregroundColor?:Color
    backgroundImage?:any;
    radius?:number;
    minRadius?:number;
    maxRadius?:number;
  
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
    constructor(config: CircleAvatarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CircleAvatarConfig) {
      return new CircleAvatar(config);
    }
  }
  
  //****** Chip ******
  interface ChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    deleteIcon?:Widget;
    onDeleted?:VoidCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    clipBehavior?:Clip;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
  }
  export class Chip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    deleteIcon?:Widget;
    onDeleted?:VoidCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    clipBehavior?:Clip;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
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
    constructor(config: ChipConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: ChipConfig) {
      return new Chip(config);
    }
  }
  
  //****** CheckedModeBanner ******
  interface CheckedModeBannerConfig {
    key?:Key;
    child:Widget;
  }
  export class CheckedModeBanner extends Widget  {
    key?:Key;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child:Widget, 
        }
     */
    constructor(config: CheckedModeBannerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CheckedModeBannerConfig) {
      return new CheckedModeBanner(config);
    }
  }
  
  //****** CheckboxListTile ******
  interface CheckboxListTileConfig {
    key?:Key;
    value:boolean;
    onChanged:VoidCallbackBoolean;
    activeColor?:Color;
    checkColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    contentPadding?:EdgeInsets;
    secondary?:Widget;
    selected?:boolean;
    autofocus?:boolean;
    controlAffinity?:ListTileControlAffinity;
    tristate?:boolean;
  }
  export class CheckboxListTile extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidCallbackBoolean;
    activeColor?:Color;
    checkColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    contentPadding?:EdgeInsets;
    secondary?:Widget;
    selected?:boolean;
    autofocus?:boolean;
    controlAffinity?:ListTileControlAffinity;
    tristate?:boolean;
  
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
    constructor(config: CheckboxListTileConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CheckboxListTileConfig) {
      return new CheckboxListTile(config);
    }
  }
  
  //****** Checkbox ******
  interface CheckboxConfig {
    key?:Key;
    value:boolean;
    onChanged:VoidCallbackBoolean;
    activeColor?:Color;
    checkColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    tristate?:boolean;
  }
  export class Checkbox extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidCallbackBoolean;
    activeColor?:Color;
    checkColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    tristate?:boolean;
  
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
    constructor(config: CheckboxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CheckboxConfig) {
      return new Checkbox(config);
    }
  }
  
  
  //****** TODO ClipRRect ******
  interface ClipRRectConfig {
    key?:Key;
    borderRadius?:BorderRadius;
    clipBehavior?:Clip;
    child?:Widget;
  }
  export class ClipRRect extends Widget {
    key?:Key;
    borderRadius?:BorderRadius;
    clipBehavior?:Clip;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config: ClipRRectConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ClipRRectConfig){
      return new ClipRRect(config);
    }
  }
  
  //****** ConstrainedBox ******
  interface ConstrainedBoxConfig {
    key?:Key;
    child?:Widget;
    constraints:BoxConstraints;  
  }
  export class ConstrainedBox extends Widget {
    child?:Widget;
    constraints?:BoxConstraints;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:Widget, 
          constraints:BoxConstraints, 
          key?:Key,
        }
     */
    constructor(config: ConstrainedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ConstrainedBoxConfig) {
      return new ConstrainedBox(config);
    }
  }
  
  //****** TODO CustomSingleChildLayout ******
  interface CustomSingleChildLayoutConfig {
    key?:Key;
    child?:Widget;
    delegate?:any;
  }
  export class CustomSingleChildLayout extends Widget {
    child?:Widget;
    delegate?:any;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:Widget, 
          delegate?:any, 
          key?:Key,
        }
     */
    constructor(config: CustomSingleChildLayoutConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CustomSingleChildLayoutConfig) {
      return new CustomSingleChildLayout(config);
    }
  }
  
  //****** Column ******
  interface ColumnConfig {
    key?:Key;
    children?:Array<Widget>;
    mainAxisAlignment?:MainAxisAlignment;
    crossAxisAlignment?:CrossAxisAlignment;
    mainAxisSize?:MainAxisSize;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
  }
  export class Column extends Widget {
    children?:Array<Widget>;
    mainAxisAlignment?:MainAxisAlignment;
    crossAxisAlignment?:CrossAxisAlignment;
    mainAxisSize?:MainAxisSize;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
    key?:Key;
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
    constructor(config: ColumnConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ColumnConfig) {
      return new Column(config);
    }
  }
  
  //****** TODO CustomMultiChildLayout ******
  interface CustomMultiChildLayoutConfig {
    key?:Key;
    children?:Array<Widget>;
    delegate?:any;
  }
  export class CustomMultiChildLayout extends Widget {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  
    /**
     * @param config config: 
        {
          children?:Array<Widget>, 
          delegate?:any, 
          key?:Key
        }
     */
    constructor(config: CustomMultiChildLayoutConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CustomMultiChildLayoutConfig) {
      return new CustomMultiChildLayout(config);
    }
  }
  
  //****** CustomScrollView ******
  interface CustomScrollViewConfig {
    key?:Key;
    slivers?:Array<Widget>;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    center?:Key;
    anchor?:number;
    cacheExtent?:number;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    restorationId?:string;
    clipBehavior?:Clip;
  }
  export class CustomScrollView extends Widget {
    key?:Key;
    slivers?:Array<Widget>;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    center?:Key;
    anchor?:number;
    cacheExtent?:number;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    restorationId?:string;
    clipBehavior?:Clip;
  
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
    constructor(config: CustomScrollViewConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CustomScrollViewConfig) {
      return new CustomScrollView(config);
    }
  }
  
  //****** Card ******
  interface CardConfig {
    key?:Key;
    child?:Widget;
    margin?:EdgeInsets;
    color?:Color;
    shadowColor?:Color;
    elevation?:number;
    shape?:any;
    clipBehavior?:Clip;
    semanticContainer?:boolean;  
    borderOnForeground?:boolean;
  }
  export class Card extends Widget {
    key?:Key;
    child?:Widget;
    margin?:EdgeInsets;
    color?:Color;
    shadowColor?:Color;
    elevation?:number;
    shape?:any;
    clipBehavior?:Clip;
    semanticContainer?:boolean;  
    borderOnForeground?:boolean;
  
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
    constructor(config: CardConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CardConfig) {
       return new Card(config);
    }
  }
  //#endregion
  
  //#region ------- D -------
  //****** Divider ******
  interface DividerConfig {
      key?:Key;
      height?:number;
      thickness?:number;
      indent?:number;
      endIndent?:number;
      color?:Color;
  }
  export class Divider extends Widget {
    key?:Key;
    height?:number;
    thickness?:number;
    indent?:number;
    endIndent?:number;
    color?:Color;
  
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
    constructor(config: DividerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DividerConfig) {
      return new Divider(config);
    }
  }

  //****** DrawerHeader ******
  interface DrawerHeaderConfig {
    key?:Key;
    child:Widget;
    decoration?:BoxDecoration;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    duration?:Duration;
    curve?:Curve;
  }
  export class DrawerHeader extends Widget {
    key?:Key;
    child?:Widget;
    decoration?:BoxDecoration;
    margin?:EdgeInsets;
    padding?:EdgeInsets;
    duration?:Duration;
    curve?:Curve;

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
    constructor(config: DrawerHeaderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DrawerHeaderConfig) {
      return new DrawerHeader(config);
    }
  }
  
  //****** Drawer ******
  interface DrawerConfig {
    key?:Key;
    child?:Widget;
    elevation?:number;
    semanticLabel?:string;
  }
  export class Drawer extends Widget {
    key?:Key;
    child?:Widget;
    elevation?:number;
    semanticLabel?:string;

    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        elevation?:number, 
        semanticLabel?:string, 
      }
    */
    constructor(config: DrawerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DrawerConfig) {
      return new Drawer(config);
    }
  }

  //****** Directionality ******
  interface DirectionalityConfig {
    key?:Key;
    child:Widget;
    textDirection:TextDirection;
  }
  export class Directionality extends Widget {
    key?:Key;
    child?:Widget;
    textDirection?:TextDirection;
  
    /**
     * @param config config: 
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    constructor(config: DirectionalityConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DirectionalityConfig) {
      return new Directionality(config);
    }
  }
  
  //****** DropdownMenuItem ******
  interface DropdownMenuItemConfig {
    child:Widget;  
    value?:number;
    key?:Key;
    onTap?:VoidCallback;
  }
  export class DropdownMenuItem extends Widget {
    child?:Widget;  
    value?:number;
    key?:Key;
    onTap?:VoidCallback;
  
    /**
     * @param config config: 
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    constructor(config: DropdownMenuItemConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DropdownMenuItemConfig) {
      return new DropdownMenuItem(config);
    }
  }
  
  //****** DecoratedBox ******
  interface DecoratedBoxConfig {
    child?:Widget;
    decoration:BoxDecoration;
    position?:DecorationPosition;
    key?:Key;
  }
  export class DecoratedBox extends Widget {
    child?:Widget;
    decoration?:BoxDecoration;
    position?:DecorationPosition;
    key?:Key;
    
    /**
     * @param config config: 
        {
          child?:Widget, 
          decoration:BoxDecoration, 
          position?:DecorationPosition, 
          key?:Key,
        }
     */
    constructor(config: DecoratedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DecoratedBoxConfig) {
      return new DecoratedBox(config);
    }
  }
  
  //****** TODO DropdownButton ******
  interface DropdownButtonConfig {
    items?:Array<DropdownMenuItem>;
    onChanged?:any;
    value?:any;
    hint?:Widget;
    disabledHint?:Widget;
    elevation?:number;
    style?:TextStyle;
    iconSize?:number;
    isDense?:boolean;
    isExpanded?:boolean;
    key?:Key;
  }
  export class DropdownButton extends Widget {
    items?:Array<DropdownMenuItem>;
    onChanged?:any;
    value?:any;
    hint?:Widget;
    disabledHint?:Widget;
    elevation?:number;
    style?:TextStyle;
    iconSize?:number;
    isDense?:boolean;
    isExpanded?:boolean;
    key?:Key;
  
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
    constructor(config: DropdownButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DropdownButtonConfig) {
      return new DropdownButton(config);
    }
  }
  
  //****** DefaultTabController ******
  interface DefaultTabControllerConfig {
    key?:Key;
    child:Widget;
    length:number;
    initialIndex?:number;  
  }
  export class DefaultTabController extends Widget {
    key?:Key;
    child?:Widget;
    length?:number;
    initialIndex?:number;  
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child:Widget, 
          length:number, 
          initialIndex?:number, 
        }
     */
    constructor(config: DefaultTabControllerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DefaultTabControllerConfig) {
      return new DefaultTabController(config);
    }
  }
  
  //****** TODO DecorationImage ******
  interface DecorationImageConfig {
    image?:any;
    alignment?:Alignment;
    colorFilter?:ColorFilter;
    fit?:BoxFit;
    centerSlice?:Rect;
    repeat?:ImageRepeat;
    matchTextDirection?:boolean;
    scale?:number;
  }
  export class DecorationImage extends Widget {
    image?:any;
    alignment?:Alignment;
    colorFilter?:ColorFilter;
    fit?:BoxFit;
    centerSlice?:Rect;
    repeat?:ImageRepeat;
    matchTextDirection?:boolean;
    scale?:number;
    
    /**
     * @param config config: 
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
    constructor(config: DecorationImageConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DecorationImageConfig) {
      return new DecorationImage(config);
    }
  }
  
  //****** DefaultTextStyle ******
  interface DefaultTextStyleConfig {
    child?:Widget;
    style?:TextStyle;
    textAlign?:TextAlign;
    softWrap?:boolean;
    overflow?:TextOverflow;
    maxLines?:number;
    textWidthBasis?:TextWidthBasis;
    key?:Key;
  }
  export class DefaultTextStyle extends Widget {
    child?:Widget;
    style?:TextStyle;
    textAlign?:TextAlign;
    softWrap?:boolean;
    overflow?:TextOverflow;
    maxLines?:number;
    textWidthBasis?:TextWidthBasis;
    key?:Key;
  
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
    constructor(config: DefaultTextStyleConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DefaultTextStyleConfig) {
      return new DefaultTextStyle(config);
    }
  }
  
  //****** TODO DecoratedBoxTransition ******
  interface DecoratedBoxTransitionConfig {
    key?:Key;
    decoration?:any;
    position?:DecorationPosition;
    child?:Widget;
  }
  export class DecoratedBoxTransition extends Widget {
    key?:Key;
    decoration?:any;
    position?:DecorationPosition;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          decoration?:any, 
          position?:DecorationPosition, 
          child?:Widget
        }
     */
    constructor(config: DecoratedBoxTransitionConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: DecoratedBoxTransitionConfig) {
      return new DecoratedBoxTransition(config);
    }
  }
  //#endregion
  
  //#region ------- E -------
  //****** ExcludeSemantics ******
  interface ExcludeSemanticsConfig {
    child?:Widget;
    excluding?:boolean;
    key?:Key;
  }
  export class ExcludeSemantics extends Widget {
    child?:Widget;
    excluding?:boolean;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          excluding?:boolean,
        }
     */
    constructor(config?: ExcludeSemanticsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config?: ExcludeSemanticsConfig) {
      return new ExcludeSemantics();
    }
  }
  
  //****** Expanded ******
  interface ExpandedConfig {
    child:Widget;
    flex?:number;
    key?:Key;
  }
  export class Expanded extends Widget {
    child?:Widget;
    flex?:number;
    key?:Key;
    /**
     * @param config config: 
        {
          child:Widget, 
          flex?:number, 
          key?:Key,
        }
     */
    constructor(config: ExpandedConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ExpandedConfig) {
      return new Expanded(config);
    }
  }
  
  //****** ExpandIcon ******
  interface ExpandIconConfig {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed:VoidCallbackBoolean;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    expandedColor?:Color;
  }
  export class ExpandIcon extends Widget {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed?:VoidCallbackBoolean;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    expandedColor?:Color;
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
    constructor(config: ExpandIconConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ExpandIconConfig) {
      return new ExpandIcon(config);
    }
  }
  
  
  //****** ExpansionTile ******
  interface ExpansionTileConfig {
      key?:Key;
      leading?:Widget;
      title?:Widget;
      subtitle?:Widget;
      backgroundColor?:Color;
      onExpansionChanged?:VoidCallbackBoolean;
      children?:Array<Widget>;
      trailing?:Widget;
      initiallyExpanded?:boolean;
      maintainState?:boolean;
      tilePadding?:EdgeInsets;
      expandedCrossAxisAlignment?:CrossAxisAlignment;
      expandedAlignment?:Alignment;
      childrenPadding?:EdgeInsets;
  }
  export class ExpansionTile extends Widget {
      key?:Key;
      leading?:Widget;
      title?:Widget;
      subtitle?:Widget;
      backgroundColor?:Color;
      onExpansionChanged?:VoidCallbackBoolean;
      children?:Array<Widget>;
      trailing?:Widget;
      initiallyExpanded?:boolean;
      maintainState?:boolean;
      tilePadding?:EdgeInsets;
      expandedCrossAxisAlignment?:CrossAxisAlignment;
      expandedAlignment?:Alignment;
      childrenPadding?:EdgeInsets;
  
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
    constructor(config: ExpansionTileConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ExpansionTileConfig) {
      return new ExpansionTile(config);
    }
  }
  
  //#endregion
  
  //#region ------- F -------
  
  //****** Flexible ******
  interface FlexibleConfig {
    key?:Key;
    child:Widget;
    flex?:number;
    fit?:FlexFit;
    
  }
  export class Flexible extends Widget {
    key?:Key;
    child?:Widget;
    flex?:number;
    fit?:FlexFit;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child:Widget, 
          flex?:number, 
          fit?:FlexFit,
        }
     */
    constructor(config: FlexibleConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: FlexibleConfig) {
      return new Flexible(config);
    }
  }
  
  //****** FittedBox ******
  interface FittedBoxConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    fit?:BoxFit;
  }
  export class FittedBox extends Widget {
    child?:Widget;
    alignment?:Alignment;
    fit?:BoxFit;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        alignment?:Alignment, 
        fit?:BoxFit,
      }
     */
    constructor(config: FittedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: FittedBoxConfig) {
      return new FittedBox(config);
    }
  }
  
  //****** FractionallySizedBox ******
  interface FractionallySizedBoxConfig {
    child?:Widget;
    alignment?:Alignment;
    widthFactor?:number;
    heightFactor?:number;
    key?:Key;
  }
  export class FractionallySizedBox extends Widget {
    child?:Widget;
    alignment?:Alignment;
    widthFactor?:number;
    heightFactor?:number;
    key?:Key;
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
    constructor(config: FractionallySizedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FractionallySizedBoxConfig) {
      return new FractionallySizedBox(config);
    }
  
  }

  
  //****** Flex ******
  interface FlexConfig {
    key?:Key;
    direction:Axis;
    mainAxisAlignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    crossAxisAlignment?:CrossAxisAlignment;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
    clipBehavior?:Clip;
    children?:Array<Widget>;
  }
  export class Flex extends Widget {
    key?:Key;
    direction?:Axis;
    mainAxisAlignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    crossAxisAlignment?:CrossAxisAlignment;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
    clipBehavior?:Clip;
    children?:Array<Widget>;
  
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
    constructor(config: FlexConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: FlexConfig) {
      return new Flex(config);
    }
  }
  
  //****** TODO Flow ******
  interface FlowConfig {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  }
  export class Flow extends Widget {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  
    /**
     * @param config config: 
        {
          children?:Array<Widget>, 
          delegate?:any, 
          key?:Key,
        }
     */
    constructor(config: FlowConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: FlowConfig) {
      return new Flow(config);
    }
  }
  
  //****** FlatButton ******
  interface FlatButtonConfig {
    child:Widget;
    onPressed:VoidCallback;
    padding?:EdgeInsets;
    onHighlightChanged?:VoidCallbackBoolean;
    textTheme?:ButtonTextTheme;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    key?:Key;
  
    onLongPress?: VoidCallback;
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
  
    icon?:Widget;
    label?:Widget;
  }
  export class FlatButton extends Widget {
    child?:Widget;
    onPressed?:VoidCallback;
    padding?:EdgeInsets;
    onHighlightChanged?:VoidCallbackBoolean;
    textTheme?:ButtonTextTheme;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    key?:Key;
    onLongPress?:VoidCallback;
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    icon?:Widget;
    label?:Widget;
  
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
    constructor(config?: FlatButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FlatButtonConfig) {
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
    static icon(config: FlatButtonConfig) {
      let v = new FlatButton();
      v.constructorName = "icon";
      if(config!=null && config!=undefined){
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
  
  //****** FloatingActionButton ******
  interface FloatingActionButtonConfig {
    key?:Key;
    child?:Widget;
    tooltip?:string;
    foregroundColor?:Color;
    backgroundColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    splashColor?:Color;
    elevation?:number;
    focusElevation?:number;
    hoverElevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    onPressed:VoidCallback;
    mini?:boolean;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    autofocus?:boolean;
    materialTapTargetSize?:MaterialTapTargetSize;
    isExtended?:boolean;
    
  }
  export class FloatingActionButton extends Widget  {
    key?:Key;
    child?:Widget;
    tooltip?:string;
    foregroundColor?:Color;
    backgroundColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    splashColor?:Color;
    elevation?:number;
    focusElevation?:number;
    hoverElevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    onPressed?:VoidCallback;
    mini?:boolean;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    autofocus?:boolean;
    materialTapTargetSize?:MaterialTapTargetSize;
    isExtended?:boolean;
  
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
    constructor(config: FloatingActionButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FloatingActionButtonConfig) {
      return  new FloatingActionButton(config);
    }
  }
  
  //****** FlexibleSpaceBar ******
  interface FlexibleSpaceBarConfig {
    key?:Key;
    title?:Widget;
    background?:Widget;
    centerTitle?:boolean;
    titlePadding?:EdgeInsets;
    collapseMode?:CollapseMode;
  }
  export class FlexibleSpaceBar extends Widget {
    key?:Key;
    title?:Widget;
    background?:Widget;
    centerTitle?:boolean;
    titlePadding?:EdgeInsets;
    collapseMode?:CollapseMode;
  
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
    constructor(config: FlexibleSpaceBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FlexibleSpaceBarConfig) {
      return new FlexibleSpaceBar(config);
    }
  }
  
  //****** FlexibleSpaceBarSettings ******
  interface FlexibleSpaceBarSettingsConfig {
    key?:Key;
    child:Widget;
    toolbarOpacity:number;
    minExtent:number;
    maxExtent:number;
    currentExtent:number;
  }
  export class FlexibleSpaceBarSettings extends Widget {
    key?:Key;
    child?:Widget;
    toolbarOpacity?:number;
    minExtent?:number;
    maxExtent?:number;
    currentExtent?:number;
  
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
    constructor(config: FlexibleSpaceBarSettingsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FlexibleSpaceBarSettingsConfig) {
      return new FlexibleSpaceBarSettings(config);
    }
  }
  
  //****** FlutterLogo ******
  interface FlutterLogoConfig {
    key?:Key;
    size?:number;
    textColor?:Color;
    style?:FlutterLogoStyle;
    duration?:Duration;
    curve?:Curve;
    
  }
  export class FlutterLogo extends Widget {
    key?:Key;
    size?:number;
    textColor?:Color;
    style?:FlutterLogoStyle;
    duration?:Duration;
    curve?:Curve;
  
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
    constructor(config: FlutterLogoConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FlutterLogoConfig) {
      return new FlutterLogo(config);
    }
  }
  
  //****** FractionalTranslation ******
  interface FractionalTranslationConfig {
    key?:Key;
    translation:Offset;
    transformHitTests?:boolean;
    child?:Widget;  
  }
  export class FractionalTranslation extends Widget {
    key?:Key;
    translation?:Offset;
    transformHitTests?:boolean;
    child?:Widget;  
  
    /**
     * @param config config: 
        {
          translation:Offset, 
  
          key?:Key, 
          transformHitTests?:boolean, 
          child?:Widget,   
        }
     */
    constructor(config: FractionalTranslationConfig) {
      super();
      if(config!=null && config!=undefined){
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
    static new(config: FractionalTranslationConfig) {
      return new FractionalTranslation(config);
    }
  }
  
  //#endregion
  
  //#region ------- G -------
  //****** TODO GestureDetector ******
  interface GestureDetectorConfig {
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:any;
    onTapUp?:any;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onLongPressUp?:VoidCallback;
    onVerticalDragDown?:any;
    onVerticalDragStart?:any;
    onVerticalDragUpdate?:any;
    onVerticalDragEnd?:any;
    onVerticalDragCancel?:VoidCallback;
    onHorizontalDragDown?:any;
    onHorizontalDragStart?:any;
    onHorizontalDragUpdate?:any;
    onHorizontalDragEnd?:any;
    onHorizontalDragCancel?:VoidCallback;
    onPanDown?:any;
    onPanStart?:any;
    onPanUpdate?:any;
    onPanEnd?:any;
    onPanCancel?:VoidCallback;
    onScaleStart?:any;
    onScaleUpdate?:any;
    onScaleEnd?:any;
    behavior?:HitTestBehavior;
    excludeFromSemantics?:boolean;
    key?:Key;
  }
  export class GestureDetector extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:any;
    onTapUp?:any;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onLongPressUp?:VoidCallback;
    onVerticalDragDown?:any;
    onVerticalDragStart?:any;
    onVerticalDragUpdate?:any;
    onVerticalDragEnd?:any;
    onVerticalDragCancel?:VoidCallback;
    onHorizontalDragDown?:any;
    onHorizontalDragStart?:any;
    onHorizontalDragUpdate?:any;
    onHorizontalDragEnd?:any;
    onHorizontalDragCancel?:VoidCallback;
    onPanDown?:any;
    onPanStart?:any;
    onPanUpdate?:any;
    onPanEnd?:any;
    onPanCancel?:VoidCallback;
    onScaleStart?:any;
    onScaleUpdate?:any;
    onScaleEnd?:any;
    behavior?:HitTestBehavior;
    excludeFromSemantics?:boolean;
    
    /**
     * @param config config: 
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
    constructor(config: GestureDetectorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: GestureDetectorConfig) {
      return new GestureDetector(config);
    }
  }
  
  //****** GridTileBar ******
  interface GridTileBarConfig {
    key?:Key;
    backgroundColor?:Color;
    leading?:Widget;
    title?:Widget;
    subtitle?:Widget;
    trailing?:Widget;
  }
  export class GridTileBar extends Widget {
    key?:Key;
    backgroundColor?:Color;
    leading?:Widget;
    title?:Widget;
    subtitle?:Widget;
    trailing?:Widget;
  
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
    constructor(config: GridTileBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: GridTileBarConfig) {
      return new GridTileBar(config);
    }
  }
  
  
  //****** GridTile ******
  interface GridTileConfig {
    key?:Key;
    child?:Widget;
    header?:Widget;
    footer?:Widget;
  }
  export class GridTile extends Widget {
    key?:Key;
    child?:Widget;
    header?:Widget;
    footer?:Widget;
    /**
     * @param config config: 
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget, 
      }
     */
    constructor(config: GridTileConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: GridTileConfig) {
      return new GridTile(config);
    }
  }
  
  //******  GridPaper ******
  interface GridPaperConfig {
    key?:Key;
    child?:Widget;
    color?:Color;
    interval?:number;
    divisions?:number;
    subdivisions?:number;
  }
  export class GridPaper extends Widget {
    key?:Key;
    child?:Widget;
    color?:Color;
    interval?:number;
    divisions?:number;
    subdivisions?:number;
  
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
    constructor(config: GridPaperConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: GridPaperConfig) {
      return new GridPaper(config);
    }
  }
  
  //#endregion
  
  //#region ------- H -------
  //#endregion
  
  //#region ------- I -------
  //****** InputDecorator ******
  interface InputDecoratorConfig {
    key?:Key;
    child?:Widget;
    decoration:InputDecoration;
    baseStyle?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    isFocused?:boolean;
    isHovering?:boolean;
    expands?:boolean;
    isEmpty?:boolean;
  }
  export class InputDecorator extends Widget {
    key?:Key;
    child?:Widget;
    decoration?:InputDecoration;
    baseStyle?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    isFocused?:boolean;
    isHovering?:boolean;
    expands?:boolean;
    isEmpty?:boolean;
  
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
    constructor(config: InputDecoratorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: InputDecoratorConfig) {
      return new InputDecorator(config);
    }
  }
  
  //****** IndexedSemantics ******
  interface IndexedSemanticsConfig {
    child?:Widget;
    index:number;
    key?:Key;
  }
  export class IndexedSemantics extends Widget {
    child?:Widget;
    index?:number;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          index?:number,
        }
     */
    constructor(config: IndexedSemanticsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IndexedSemanticsConfig) {
      return new IndexedSemantics(config);
    }
  }
  
  //****** IntrinsicHeight ******
  interface IntrinsicHeightConfig {
    child?:Widget;
    key?:Key;
  }
  export class IntrinsicHeight extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget,         
        }
     */
    constructor(config: IntrinsicHeightConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IntrinsicHeightConfig) {
      return new IntrinsicHeight(config);
    }
  }
  
  //****** IntrinsicWidth ******
  interface IntrinsicWidthConfig {
    child?:Widget;
    stepWidth?:number;
    stepHeight?:number;
    key?:Key;
  }
  export class IntrinsicWidth extends Widget {
    child?:Widget;
    stepWidth?:number;
    stepHeight?:number;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:Widget, 
          stepWidth?:number, 
          stepHeight?:number, 
          key?:Key
        }
     */
    constructor(config: IntrinsicWidthConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IntrinsicWidthConfig) {
      return new IntrinsicWidth(config);
    }
  }
  
  //****** IndexedStack ******
  interface IndexedStackConfig {
    children?:Array<Widget>;
    index?:number;
    alignment?:AlignmentDirectional;
    textDirection?:TextDirection;
    sizing?:StackFit;
    key?:Key;
  }
  export class IndexedStack extends Widget {
    children?:Array<Widget>;
    index?:number;
    alignment?:AlignmentDirectional;
    textDirection?:TextDirection;
    sizing?:StackFit;
    key?:Key;
  
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
    constructor(config: IndexedStackConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IndexedStackConfig) {
      return new IndexedStack(config);
    }
  }
  
  //****** IgnorePointer ******
  interface IgnorePointerConfig {
    key?:Key;
    child?:Widget;
    ignoring?:boolean;
    ignoringSemantics?:boolean;
  }
  export class IgnorePointer extends Widget {
    key?:Key;
    child?:Widget;
    ignoring?:boolean;
    ignoringSemantics?:boolean;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget, 
          ignoring?:boolean, 
          ignoringSemantics?:boolean, 
        }
     */
    constructor(config: IgnorePointerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IgnorePointerConfig) {
      return new IgnorePointer(config);
    }
  }
  
  //****** IconButton ******
  interface IconButtonConfig {
    key?:Key;
    icon:Widget;
    onPressed:VoidCallback;
    iconSize?:number;
    padding?:EdgeInsets;
    alignment?:Alignment;
    visualDensity?:VisualDensity;
    splashRadius?:number;
    color?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    disabledColor?:Color;
    autofocus?:boolean;
    tooltip?:string;
    enableFeedback?:boolean;
    constraints?:BoxConstraints;
  }
  export class IconButton extends Widget {
    key?:Key;
    icon?:Widget;
    onPressed?:VoidCallback;
    iconSize?:number;
    padding?:EdgeInsets;
    alignment?:Alignment;
    visualDensity?:VisualDensity;
    splashRadius?:number;
    color?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    disabledColor?:Color;
    autofocus?:boolean;
    tooltip?:string;
    enableFeedback?:boolean;
    constraints?:BoxConstraints;
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
    constructor(config: IconButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: IconButtonConfig) {
      return new IconButton(config);
    }
  }
  
  //****** Icon ******
  interface IconConfig {
    key?:Key;
    size?:number;
    color?:Color;
    semanticLabel?:string;
    textDirection?:TextDirection;
    
  }
  export class Icon extends Widget {
    icon?:IconData;
    size?:number;
    color?:Color;
    semanticLabel?:string;
    textDirection?:TextDirection;
    key?:Key;
    
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
    constructor(icon:IconData,config?: IconConfig){
      super();
      this.icon = icon;
      if(config!=null && config!=undefined){
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
    static new(icon:IconData,config?: IconConfig) {
      return new Icon(icon,config);
    }
  }
  
  //****** ImageIcon ******
  interface ImageIconConfig {
    key?:Key;
    size?:number;
    color?:Color;
    semanticLabel?:string;
  }
  export class ImageIcon extends Widget {
    image?:ImageProvider;
    size?:number;
    color?:Color;
    semanticLabel?:string;
    key?:Key;
  
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
    constructor(image:ImageProvider,config?: ImageIconConfig){
      super();
      this.image = image;
      if(config!=null && config!=undefined){
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
    static new(image:ImageProvider,config?: ImageIconConfig) {
      return new ImageIcon(image,config);
    }
  }
  
  //****** InkResponse ******
  interface InkResponseConfig {
    key?:Key;
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:VoidTapDown;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    onHover?:VoidCallbackBoolean;
    containedInkWell?:boolean;
    highlightShape?:BoxShape;
    radius?:number;
    borderRadius?:BorderRadius;
    customBorder?:ShapeBorder;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    overlayColor?:Color;
    splashColor?:Color;
    enableFeedback?:boolean;
    excludeFromSemantics?:boolean;
    canRequestFocus ?:boolean;
    onFocusChange?:VoidCallbackBoolean;
    autofocus?:boolean;
  }
  export class InkResponse extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:VoidTapDown;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    onHover?:VoidCallbackBoolean;
    containedInkWell?:boolean;
    highlightShape?:BoxShape;
    radius?:number;
    borderRadius?:BorderRadius;
    customBorder?:ShapeBorder;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    overlayColor?:Color;
    splashColor?:Color;
    enableFeedback?:boolean;
    excludeFromSemantics?:boolean;
    canRequestFocus ?:boolean;
    onFocusChange?:VoidCallbackBoolean;
    autofocus?:boolean;
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
    constructor(config: InkResponseConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.child= config.child;
        this.onTap = config.onTap;
        this.onTapDown = config.onTapDown;
        this.onTapCancel = config.onTapCancel;
        this.onDoubleTap = config.onDoubleTap;
        this.onLongPress = config.onLongPress;
        this.onHighlightChanged = config.onHighlightChanged;
        this.onHover = config.onHover;
        this.containedInkWell = config.containedInkWell;
        this.highlightShape = config.highlightShape;
        this.radius= config.radius;
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
    static new(config: InkResponseConfig) {
      return new InkResponse(config);
    }
  }

  //****** InkWell ******
  interface InkWellConfig {
    key?:Key;
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:VoidTapDown;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    onHover?:VoidCallbackBoolean;
    radius?:number;
    borderRadius?:BorderRadius;
    customBorder?:ShapeBorder;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    overlayColor?:Color;
    splashColor?:Color;
    enableFeedback?:boolean;
    excludeFromSemantics?:boolean;
    canRequestFocus ?:boolean;
    onFocusChange?:VoidCallbackBoolean;
    autofocus?:boolean;
  }
  export class InkWell extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:VoidCallback;
    onTapDown?:VoidTapDown;
    onTapCancel?:VoidCallback;
    onDoubleTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    onHover?:VoidCallbackBoolean;
    radius?:number;
    borderRadius?:BorderRadius;
    customBorder?:ShapeBorder;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    overlayColor?:Color;
    splashColor?:Color;
    enableFeedback?:boolean;
    excludeFromSemantics?:boolean;
    canRequestFocus ?:boolean;
    onFocusChange?:VoidCallbackBoolean;
    autofocus?:boolean;
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
    constructor(config: InkWellConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.child= config.child;
        this.onTap = config.onTap;
        this.onTapDown = config.onTapDown;
        this.onTapCancel = config.onTapCancel;
        this.onDoubleTap = config.onDoubleTap;
        this.onLongPress = config.onLongPress;
        this.onHighlightChanged = config.onHighlightChanged;
        this.onHover = config.onHover;
        this.radius= config.radius;
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
    static new(config: InkWellConfig) {
      return new InkWell(config);
    }
  }

  //****** Image ******
  //TODO:frameBuilder、loadingBuilder、errorBuilder
  interface ImageConfig {
    key?:Key;
    image:ImageProvider;
    semanticLabel?:string;
    excludeFromSemantics?:boolean;
    width?:number;
    height?:number;
    color?:Color;
    colorBlendMode?:BlendMode;
    fit?:BoxFit;
    alignment?:Alignment;
    repeat?:ImageRepeat;
    centerSlice?:Rect;
    matchTextDirection?:boolean;
    gaplessPlayback?:boolean;
    isAntiAlias?:boolean;
    filterQuality?:FilterQuality;

    scale?:number;
    headers?:Map<string,string>;
    cacheWidth?:number;
    cacheHeight?:number;

    bundle?:AssetBundle;
    package?:string;
  }
  export class Image extends Widget {
    key?:Key;
    image?:ImageProvider;
    semanticLabel?:string;
    excludeFromSemantics?:boolean;
    width?:number;
    height?:number;
    color?:Color;
    colorBlendMode?:BlendMode;
    fit?:BoxFit;
    alignment?:Alignment;
    repeat?:ImageRepeat;
    centerSlice?:Rect;
    matchTextDirection?:boolean;
    gaplessPlayback?:boolean;
    isAntiAlias?:boolean;
    filterQuality?:FilterQuality;


    src?:string;
    scale?:number;
    headers?:Map<string,string>;
    cacheWidth?:number;
    cacheHeight?:number;
    bundle?:AssetBundle;
    package?:string;
    file?:File;
    assetName?:string;

    bytes?:Uint8List;

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
    constructor(config?: ImageConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ImageConfig) {
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
    static network(src:string, config?: ImageConfig) {
      var v = new Image();
      v.constructorName = "network";
      v.src = src;
      if(config!=null && config!=undefined){
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
    static file(file:File, config?: ImageConfig) {
      var v = new Image();
      v.constructorName = "file";
      v.file = file;
      if(config!=null && config!=undefined){
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
    static asset(assetName:string, config?: ImageConfig) {
      var v = new Image();
      v.constructorName = "asset";
      v.assetName = assetName;
      if(config!=null && config!=undefined){
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
    static memory(bytes:Uint8List, config?: ImageConfig) {
      var v = new Image();
      v.constructorName = "memory";
      v.bytes = bytes;
      if(config!=null && config!=undefined){
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

  
  //#endregion
  
  //#region ------- J -------
  //#endregion
  
  //#region ------- K -------
  //****** KeyedSubtree ******
  interface KeyedSubtreeConfig {
    child:Widget;
    key?:Key;
  }
  export class KeyedSubtree extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child:Widget, 
          key?:Key,
        }
     */
    constructor(config: KeyedSubtreeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: KeyedSubtreeConfig) {
      return new KeyedSubtree(config);
    }
  }
  //#endregion
  
  //#region ------- L -------
  //****** LicensePage ******
  interface LicensePageConfig {
    key?:Key;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    applicationIcon?:Widget;
  }
  export class LicensePage extends Widget {
    key?:Key;
    applicationName?:string;
    applicationLegalese?:string;
    applicationVersion?:string;
    applicationIcon?:Widget;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          applicationName?:string, 
          applicationLegalese?:string, 
          applicationVersion?:string, 
          applicationIcon?:Widget, 
        }
     */
    constructor(config: LicensePageConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.applicationIcon = config.applicationIcon;
        this.applicationName = config.applicationName;
        this.applicationLegalese = config.applicationLegalese;
        this.applicationVersion = config.applicationVersion;
      }
    }
      
    /**
     * @param config config: 
        {
          key?:Key, 
          applicationName?:string, 
          applicationLegalese?:string, 
          applicationVersion?:string, 
          applicationIcon?:Widget, 
        }
     */
    static new(config: LicensePageConfig){
      return new LicensePage(config);
    }
  }
  
  //****** LimitedBox ******
  interface LimitedBoxConfig {
    child?:Widget;
    maxWidth?:number;
    maxHeight?:number;
    key?:Key;
  }
  export class LimitedBox extends Widget {
    child?:Widget;
    maxWidth?:number;
    maxHeight?:number;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:Widget, 
          maxWidth?:number, 
          maxHeight?:number, 
          key?:Key,
        }
     */
    constructor(config: LimitedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: LimitedBoxConfig) {
      return new LimitedBox(config);
    }
  }
  
  //****** ListBody ******
  interface ListBodyConfig {
    children?:Array<Widget>;
    reverse?:boolean;
    mainAxis?:Axis;
    key?:Key;
  }
  export class ListBody extends Widget {
    children?:Array<Widget>;
    reverse?:boolean;
    mainAxis?:Axis;
    key?:Key;
  
    /**
     * @param config config: 
        {
          children?:Array<Widget>, 
          reverse?:boolean, 
          mainAxis?:Axis, 
          key?:Key
        }
     */
    constructor(config:ListBodyConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config:ListBodyConfig) {
      return new ListBody(config);
    }
  }
  
  //****** ListTile ******
  interface ListTileConfig {
    key?:Key;
    leading?:Widget;
    title?:Widget;
    subtitle?:Widget;
    trailing?:Widget;
    onTap?:VoidCallback;
    onLongPress?:VoidCallback;
    selected?:boolean;
    isThreeLine?:boolean;
    dense?:boolean;
    visualDensity?:VisualDensity;
    shape?:ShapeBorder;
    contentPadding?:EdgeInsets;
    enabled?:boolean;
    focusColor?:Color;
    hoverColor?:Color;
    autofocus?:boolean;  
  }
  export class ListTile extends Widget {
    key?:Key;
    leading?:Widget;
    title?:Widget;
    subtitle?:Widget;
    trailing?:Widget;
    onTap?:VoidCallback;
    onLongPress?:VoidCallback;
    selected?:boolean;
    isThreeLine?:boolean;
    dense?:boolean;
    visualDensity?:VisualDensity;
    shape?:ShapeBorder;
    contentPadding?:EdgeInsets;
    enabled?:boolean;
    focusColor?:Color;
    hoverColor?:Color;
    autofocus?:boolean; 
  
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
    constructor(config: ListTileConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ListTileConfig) {
      return new ListTile(config);
    }
  }
  
  //****** TODO ListView ******
  interface ListViewConfig {
    children?:Array<Widget>;
    padding?:EdgeInsets;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    itemExtent?:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    cacheExtent?:number;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
  
  
    itemBuilder?:any;
    itemCount?:number;
  }
  export class ListView extends Widget {
    children?:Array<Widget>;
    padding?:EdgeInsets;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    itemExtent?:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    cacheExtent?:number;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
  
  
    itemBuilder?:any;
    itemCount?:number;
  
    preBuild(jsWidgetHelper?:any, buildContext?:any) {
      if (this.itemBuilder) {
        this.children = [];
        if(this.itemCount!=null && this.itemCount!=undefined){
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
          key?:Key
        }
     */
    constructor(config?: ListViewConfig){
      super();
      if(config!=null && config!=undefined){
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
      }
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
          key?:Key
        }
     */
    static new(config: ListViewConfig) {
      return new ListView(config);
    }
  
    /**
     * @param config config: 
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
    static builder(config: ListViewConfig) {
        let v = new ListView();
        v.constructorName = "builder";
        if(config!=null && config!=undefined){
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
        }
        return v;
    }
  }
  
  //****** TODO LayoutBuilder ******
  interface LayoutBuilderConfig{
    builder?:any;
    key?:Key;
  }
  export class LayoutBuilder extends Widget {
    builder?:any;
    key?:Key;
  
    /**
     * @param config config: 
        {
          builder?:any, 
          key?:Key
        }
     */
    constructor(config: LayoutBuilderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: LayoutBuilderConfig) {
      return new LayoutBuilder(config);
    }
  }
  //#endregion
  
  //#region ------- M -------
  //****** Material ******
  interface MaterialConfig {
    child?:Widget;
    elevation?:number;
    color?:Color;
    shadowColor?:Color;
    textStyle?:TextStyle;
    borderRadius?:BorderRadius;
    type?:MaterialType;
    shape?:any;
    borderOnForeground?:boolean;
    clipBehavior?:Clip;
    animationDuration?:Duration;
    key?:Key;
  }
  export class Material extends Widget {
    child?:Widget;
    elevation?:number;
    color?:Color;
    shadowColor?:Color;
    textStyle?:TextStyle;
    borderRadius?:BorderRadius;
    type?:MaterialType;
    shape?:any;
    borderOnForeground?:boolean;
    clipBehavior?:Clip;
    animationDuration?:Duration;
    key?:Key;
  
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
    constructor(config: MaterialConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: MaterialConfig) {
      return new Material(config);
    }
  }
  
  //****** TODO MaterialPageRoute ******
  interface MaterialPageRouteConfig {
    builder?:any;
    settings?:any;
    maintainState?:boolean;
    fullscreenDialog?:boolean;
  
    child?:MaterialPageRoute;
  }
  export class MaterialPageRoute extends Widget {
    builder?:any;
    settings?:any;
    maintainState?:boolean;
    fullscreenDialog?:boolean;
  
    child?:MaterialPageRoute;
  
  
    preBuild(jsWidgetHelper?:any, buildContext?:BuildContext) {
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
    constructor(config: MaterialPageRouteConfig){
      super();
      if(config!=null && config!=undefined){
        this.builder = config.builder;
        this.settings = config.settings;
        this.maintainState = config.maintainState;
        this.fullscreenDialog = config.fullscreenDialog;
      }
      this.child = undefined;
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
    static new(config: MaterialPageRouteConfig) {
      return new MaterialPageRoute(config);
    }
  }
  
  //****** MaterialBanner ******
  interface MaterialBannerConfig {
    key?:Key;
    content:Widget;
    contentTextStyle?:TextStyle;
    actions:Array<Widget>;
    leading?:Widget;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    leadingPadding?:EdgeInsets;
    forceActionsBelow?:boolean;
  }
  export class MaterialBanner extends Widget {
    key?:Key;
    content?:Widget;
    contentTextStyle?:TextStyle;
    actions?:Array<Widget>;
    leading?:Widget;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    leadingPadding?:EdgeInsets;
    forceActionsBelow?:boolean;
  
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
    constructor(config: MaterialBannerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: MaterialBannerConfig) {
      return new MaterialBanner(config);
    }
  }
  
  //#endregion
  
  //#region ------- N -------
  //****** TODO NotificationListener ******
  interface NotificationListenerConfig {
    child?:Widget;
    key?:Key;
  }
  export class NotificationListener extends Widget {
    child?:Widget;
    key?:Key;
    /**
     * @param config config: 
        {
          child?:Widget,
          key?:Key
        }
     */
    constructor(config: NotificationListenerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: NotificationListenerConfig) {
      return new NotificationListener(config);
    }
  }
  
  //****** TODO NestedScrollView ******
  interface NestedScrollViewConfig {
    body?:Widget;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    physics?:ScrollPhysics;
    headerSliverBuilder?:any;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
    children?:Array<Widget>;
  }
  export class NestedScrollView extends Widget {
    body?:Widget;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    physics?:ScrollPhysics;
    headerSliverBuilder?:any;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
    children?:Array<Widget>;
   
    preBuild(jsWidgetHelper?:any, buildContext?:any) {
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
    constructor(config: NestedScrollViewConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: NestedScrollViewConfig) {
      return new NestedScrollView(config);
    }
  }
  
  //****** Navigator ******
  export class Navigator extends DartClass {
  
    static push(context:BuildContext, materialPageRoute:MaterialPageRoute) {
      context.widget?.helper.navigatorPush(materialPageRoute.builder(context));
    }
  
    static pop(context:BuildContext) {
      context.widget?.helper.navigatorPop();
    }
  
  }
  
  
  //#endregion
  
  //#region ------- O -------
  //****** Opacity ******
  interface OpacityConfig {
    key?:Key;
    child?:Widget;
    opacity:number;
    alwaysIncludeSemantics?:boolean;
  }
  export class Opacity extends Widget {
    child?:Widget;
    opacity?:number;
    alwaysIncludeSemantics?:boolean;
    key?:Key;
  
    /**
     * @param config config: 
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    constructor(config: OpacityConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: OpacityConfig) {
      return new Opacity(config);
    }
  }
  
  //****** Offstage ******
  interface OffstageConfig {
    child?:Widget;
    offstage?:boolean;
    key?:Key;
  }
  export class Offstage extends Widget {
    child?:Widget;
    offstage?:boolean;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:.Widget, 
          offstage?:boolean, 
          key?:Key, 
        }
     */
    constructor(config: OffstageConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: OffstageConfig) {
      return new Offstage(config);
    }
  }
  
  //****** OverflowBox ******
  interface OverflowBoxConfig {
    child?:Widget;
    alignment?:Alignment;
    minWidth?:number;
    maxWidth?:number;
    minHeight?:number;
    maxHeight?:number;
    key?:Key;
  }
  export class OverflowBox extends Widget {
    child?:Widget;
    alignment?:Alignment;
    minWidth?:number;
    maxWidth?:number;
    minHeight?:number;
    maxHeight?:number;
    key?:Key;
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
    constructor(config: OverflowBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: OverflowBoxConfig) {
      return new OverflowBox(config);
    }
  }
  
  //****** OutlineButton ******
  interface OutlineButtonConfig {
    key?:Key;
    child?:Widget;
    onPressed:VoidCallback;
    onLongPress?:VoidCallback;
    padding?:EdgeInsets;
    textTheme?:ButtonTextTheme;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;  
    highlightElevation?:number;  
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    borderSide?:BorderSide;
    disabledBorderColor?:Color;
    highlightedBorderColor?:Color;
  
    icon?:Widget;
    label?:Widget;
  }
  export class OutlineButton extends Widget {
    key?:Key;
    child?:Widget;
    onPressed?:VoidCallback;
    onLongPress?:VoidCallback;
    padding?:EdgeInsets;
    textTheme?:ButtonTextTheme;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;  
    highlightElevation?:number;  
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
    borderSide?:BorderSide;
    disabledBorderColor?:Color;
    highlightedBorderColor?:Color;
    icon?:Widget;
    label?:Widget;
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
    constructor(config?: OutlineButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: OutlineButtonConfig) {
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
    static icon(config: OutlineButtonConfig) {
      let v = new OutlineButton();
      v.constructorName = "icon";
      if(config!=null && config!=undefined){
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
  //#endregion
  
  //#region ------- P -------
  //****** Padding ******
  interface PaddingConfig {
    child?:Widget;
    padding:EdgeInsets;
    key?:Key;
  }
  export class Padding extends Widget {
    child?:Widget;
    padding?:EdgeInsets;
    key?:Key;
  
    /**
     * @param config config: 
        {
          child?:Widget, 
          padding?:EdgeInsets, 
          key?:Key
        }
     */
    constructor(config: PaddingConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PaddingConfig) {
      return new Padding(config);
    }
  }
  
  //****** PhysicalModel ******
  interface PhysicalModelConfig {
    key?:Key;
    color:Color;
    shape?:BoxShape;
    child?:Widget;
    clipBehavior?:Clip;
    borderRadius?:BorderRadius;
    elevation?:number;
    shadowColor?:Color;
  }
  export class PhysicalModel extends Widget {
    key?:Key;
    color?:Color;
    shape?:BoxShape;
    child?:Widget;
    clipBehavior?:Clip;
    borderRadius?:BorderRadius;
    elevation?:number;
    shadowColor?:Color;
  
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
    constructor(config: PhysicalModelConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PhysicalModelConfig) {
      return new PhysicalModel(config);
    }
  }
  
  //****** Positioned ******
  interface PositionedConfig {
    key?:Key;
    child:Widget;
    start?:number;
    left?:number;
    top?:number;
    end?:number;
    right?:number;
    bottom?:number;
    width?:number;
    height?:number;  
    rect?:Rect;
    textDirection?:TextDirection;
  }
  export class Positioned extends Widget {
    key?:Key;
    child?:Widget;
    start?:number;
    left?:number;
    top?:number;
    end?:number;
    right?:number;
    bottom?:number;
    width?:number;
    height?:number;  
    rect?:Rect;
    textDirection?:TextDirection;
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
    constructor(config?: PositionedConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PositionedConfig) {
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
    static fromRect (config: PositionedConfig) {
      let v = new Positioned();
      v.constructorName = "fromRect";
      if(config!=null && config!=undefined){
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
    static fill(config: PositionedConfig) {
      var v = new Positioned();
      v.constructorName = "fill";
      if(config!=null && config!=undefined){
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
    static directional(config: PositionedConfig) {
      var v = new Positioned();
      v.constructorName = "directional";
      if(config!=null && config!=undefined){
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
  
  //****** PositionedDirectional ******
  interface PositionedDirectionalConfig {
    key?:Key;
    child:Widget;
    start?:number;
    top?:number;
    end?:number;
    bottom?:number;
    width?:number;
    height?:number;  
  }
  export class PositionedDirectional extends Widget {
    key?:Key;
    child?:Widget;
    start?:number;
    top?:number;
    end?:number;
    bottom?:number;
    width?:number;
    height?:number;  
  
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
    constructor(config: PositionedDirectionalConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PositionedDirectionalConfig) {
      return new PositionedDirectional(config);
    }
  }
  
  //****** PreferredSize ******
  interface PreferredSizeConfig {
    key?:Key;
    child:Widget;
    preferredSize:Size;
  }
  export class PreferredSize extends Widget {
    key?:Key;
    child?:Widget;
    preferredSize?:Size;
    
    /**
     * @param config config: 
        {
          child?:Widget, 
          preferredSize?:Size, 
          key?:Key
        }
     */
    constructor(config:PreferredSizeConfig){
      super();
      if(config!=null && config!=undefined){
        this.key =  config.key;
        this.child =  config.child;
        this.preferredSize =  config.preferredSize;
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
    static new (config:PreferredSizeConfig) {
      return new PreferredSize(config);
    }
  }
  
  //****** TODO PreferredSizeWidget ******
  export class PreferredSizeWidget extends Widget {
    static new() {
      return new PreferredSizeWidget();
    }
  }
  
  //****** Placeholder ******
  interface PlaceholderConfig {
    color?:Color;
    strokeWidth?:number;
    fallbackWidth?:number;
    fallbackHeight?:number;
    key?:Key;
  }
  export class Placeholder extends Widget {
    color?:Color;
    strokeWidth?:number;
    fallbackWidth?:number;
    fallbackHeight?:number;
    key?:Key;
  
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
    constructor(config: PlaceholderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PlaceholderConfig) {
      return new Placeholder(config);
    }
  }
  
  //****** TODO PopupMenuButton ******
  interface PopupMenuButtonConfig {
    itemBuilder?:any;
    initialValue?:any;
    onSelected?:any;
    onCanceled?:any;
    tooltip?:string;
    elevation?:number;
    padding?:EdgeInsets;
    child?:Widget;
    icon?:Widget;
    offset?:Offset;
    key?:Key;
    children?:Array<Widget>;
  }
  export class PopupMenuButton extends Widget {
    itemBuilder?:any;
    initialValue?:any;
    onSelected?:any;
    onCanceled?:any;
    tooltip?:string;
    elevation?:number;
    padding?:EdgeInsets;
    child?:Widget;
    icon?:Widget;
    offset?:Offset;
    key?:Key;
    children?:Array<Widget>;
  
    //在生成json前调用
    //用于list delegate 等的items build
    //用于 widget 有类似 onTab 等响应函数变量，在此转换成 callback id,
    //但注意，delegate 中确实需要 function ,不需要转ID的，不要调用super.preBuild
    preBuild(jsWidgetHelper:any, buildContext:any) {
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
    constructor(config: PopupMenuButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PopupMenuButtonConfig) {
      return new PopupMenuButton(config);
    }
  }
  
  //****** TODO PopupMenuItem ******
  interface PopupMenuItemConfig {
    child?:Widget;
    value?:any;
    enabled?:boolean;
    height?:number;
    key?:Key;
  }
  export class PopupMenuItem extends Widget {
    child?:Widget;
    value?:any;
    enabled?:boolean;
    height?:number;
    key?:Key;
  
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
    constructor(config: PopupMenuItemConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: PopupMenuItemConfig) {
      return new PopupMenuItem(config);
    }
  }
  //#endregion
  
  //#region ------- R -------
  //****** Row ******
  interface RowConfig {
    children?:Array<Widget>;
    mainAxisAlignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    crossAxisAlignment?:CrossAxisAlignment;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
    key?:Key;
  }
  export class Row extends Widget {
    children?:Array<Widget>;
    mainAxisAlignment?:MainAxisAlignment;
    mainAxisSize?:MainAxisSize;
    crossAxisAlignment?:CrossAxisAlignment;
    textDirection?:TextDirection;
    verticalDirection?:VerticalDirection;
    textBaseline?:TextBaseline;
    key?:Key;
  
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
    constructor(config: RowConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RowConfig) {
      return new Row(config);
    }
  }
  
  //****** RepaintBoundary ******
  interface RepaintBoundaryConfig {
    key?:Key;
    child?:Widget;
  }
  export class RepaintBoundary extends Widget {
    key?:Key;
    child?:Widget;
    childIndex?:number;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child?:Widget,
        }
     */
    constructor(config?: RepaintBoundaryConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RepaintBoundaryConfig) {
      return new RepaintBoundary(config);
    }
  
    static wrap(child:Widget,childIndex:number) {
      var v = new RepaintBoundary();
      v.constructorName = "wrap";
      v.child = child;
      v.childIndex = childIndex;
      return v;
    }
  }
  
  //****** RawImage ******
  interface RawImageConfig {
    key?:Key;
    image?:ImageProvider;
    debugImageLabel?:string;
    width?:number;
    height?:number;
    scale?:number;
    color?:Color;
    colorBlendMode?:BlendMode;
    fit?:BoxFit;
    alignment?:Alignment;
    repeat?:ImageRepeat;
    centerSlice?:Rect;
    matchTextDirection?:boolean;
    invertColors?:boolean;
    filterQuality?:FilterQuality;
    isAntiAlias?:boolean;
  }
  export class RawImage extends Widget {
    key?:Key;
    image?:ImageProvider;
    debugImageLabel?:string;
    width?:number;
    height?:number;
    scale?:number;
    color?:Color;
    colorBlendMode?:BlendMode;
    fit?:BoxFit;
    alignment?:Alignment;
    repeat?:ImageRepeat;
    centerSlice?:Rect;
    matchTextDirection?:boolean;
    invertColors?:boolean;
    filterQuality?:FilterQuality;
    isAntiAlias?:boolean;
  
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
    constructor(config: RawImageConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RawImageConfig) {
      return new RawImage(config);
    }
  }
  
  //****** RotatedBox ******
  interface RotatedBoxConfig {
    key?:Key;
    quarterTurns:number;
    child?:Widget;
  }
  export class RotatedBox extends Widget {
    key?:Key;
    quarterTurns?:number;
    child?:Widget;
    /**
     * @param config config: 
        {
          key?:Key, 
          quarterTurns:number, 
          child?:Widget, 
        }
     */
    constructor(config: RotatedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RotatedBoxConfig) {
      return new RotatedBox(config);
    }
  }
  
  //****** RaisedButton ******
  interface RaisedButtonConfig {
    child?:Widget;
    onPressed?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    padding?:EdgeInsets;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    elevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    animationDuration?:Duration;
    key?:Key;
  
    icon?:Widget;
    label?:Widget;
    onLongPress?:VoidCallback;
    focusColor?:Color;
    hoverColor?:Color;
    focusElevation?:number;
    hoverElevation?:number;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
  }
  export class RaisedButton extends Widget {
    child?:Widget;
    onPressed?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    padding?:EdgeInsets;
    textColor?:Color;
    disabledTextColor?:Color;
    color?:Color;
    disabledColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    colorBrightness?:Brightness;
    elevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    animationDuration?:Duration;
    key?:Key;
  
    icon?:Widget;
    label?:Widget;
  
    onLongPress?:VoidCallback;
    focusColor?:Color;
    hoverColor?:Color;
    focusElevation?:number;
    hoverElevation?:number;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    
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
    constructor(config?: RaisedButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RaisedButtonConfig) {
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
    static icon(config: RaisedButtonConfig) {
      let v = new RaisedButton();
      v.constructorName = "icon";
      if(config!=null && config!=undefined){
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
  
  //****** TODO Radio ******
  interface RadioConfig {
    key?:Key;
    value?:any;
    groupValue?:any;
    onChanged?:any;
    activeColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
  }
  export class Radio extends Widget {
    key?:Key;
    value?:any;
    groupValue?:any;
    onChanged?:any;
    activeColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
  
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
    constructor(config: RadioConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RadioConfig) {
      return new Radio(config);
    }
  }
  
  //****** RawMaterialButton ******
  interface RawMaterialButtonConfig {
    key?:Key;  
    onPressed:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    textStyle?:TextStyle;
    padding?:EdgeInsets;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    constraints?:BoxConstraints;
    elevation?:number;
    focusElevation?:number;
    hoverElevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    animationDuration?:Duration;
    enableFeedback?:boolean;
    child?:Widget;
  }
  export class RawMaterialButton extends Widget {
    key?:Key;  
    onPressed?:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidCallbackBoolean;
    textStyle?:TextStyle;
    padding?:EdgeInsets;
    fillColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    highlightColor?:Color;
    splashColor?:Color;
    constraints?:BoxConstraints;
    elevation?:number;
    focusElevation?:number;
    hoverElevation?:number;
    highlightElevation?:number;
    disabledElevation?:number;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    shape?:any;
    clipBehavior?:Clip;
    materialTapTargetSize?:MaterialTapTargetSize;
    animationDuration?:Duration;
    enableFeedback?:boolean;
    child?:Widget;
  
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
    constructor(config: RawMaterialButtonConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: RawMaterialButtonConfig) {
      return new RawMaterialButton(config);
    }
  }
  
  //****** RichText ******
  interface RichTextConfig {
    key?:Key;
    text:Widget;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:TextOverflow;
    textScaleFactor?:number;
    maxLines?:number;
    textWidthBasis?:TextWidthBasis;
    
  }
  export class RichText extends Widget {
    text?:TextSpan;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:TextOverflow;
    textScaleFactor?:number;
    maxLines?:number;
    key?:Key;
    textWidthBasis?:TextWidthBasis;
  
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
    constructor(config: RichTextConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: RichTextConfig) {
      return new RichText(config);
    }
  }
  //#endregion
  
  //#region ------- S -------
  
  //****** Spacer ******
  interface SpacerConfig {
    flex?:number;
    key?:Key;
  }
  export class Spacer extends Widget {
    key?:Key;
    flex?:number;
    /**
     * @param config config: 
      {
        key?:Key,
        flex?:number
      }
     */
    constructor(config: SpacerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SpacerConfig) {
      return new Spacer(config);
    }
  
  }
  
  //****** Semantics ******
  interface SemanticsConfig {
    key?:Key;
    child?:Widget;
    container?:boolean;
    explicitChildNodes?:boolean;
    excludeSemantics?:boolean;
    enabled?:boolean;
    checked?:boolean;
    selected?:boolean;
    toggled?:boolean;
    button?:boolean;
    link?:boolean;
    header?:boolean;
    textField?:boolean;
    readOnly?:boolean;
    focusable?:boolean;
    focused?:boolean;
    inMutuallyExclusiveGroup?:boolean;
    obscured?:boolean;
    multiline?:boolean;
    scopesRoute?:boolean;
    namesRoute?:boolean;
    hidden?:boolean;
    image?:boolean;
    liveRegion?:boolean;
    maxValueLength?:number;
    currentValueLength?:number;
  
    label?:string;
    value?:string;
    increasedValue?:string;
    decreasedValue?:string;
    hint?:string;
    onTapHint?:string;
    onLongPressHint?:string;
    textDirection?:TextDirection;
  
    onTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onScrollLeft?:VoidCallback;
    onScrollRight?:VoidCallback;
    onScrollUp?:VoidCallback;
    onScrollDown?:VoidCallback;
    onIncrease?:VoidCallback;
    onDecrease?:VoidCallback;
    onCopy?:VoidCallback;
    onCut?:VoidCallback;
    onPaste?:VoidCallback;
    onDismiss?:VoidCallback;
    onDidGainAccessibilityFocus?:VoidCallback;
    onDidLoseAccessibilityFocus?:VoidCallback;
  }
  export class Semantics extends Widget {
    key?:Key;
    child?:Widget;
    container?:boolean;
    explicitChildNodes?:boolean;
    excludeSemantics?:boolean;
    enabled?:boolean;
    checked?:boolean;
    selected?:boolean;
    toggled?:boolean;
    button?:boolean;
    link?:boolean;
    header?:boolean;
    textField?:boolean;
    readOnly?:boolean;
    focusable?:boolean;
    focused?:boolean;
    inMutuallyExclusiveGroup?:boolean;
    obscured?:boolean;
    multiline?:boolean;
    scopesRoute?:boolean;
    namesRoute?:boolean;
    hidden?:boolean;
    image?:boolean;
    liveRegion?:boolean;
    maxValueLength?:number;
    currentValueLength?:number;
  
    label?:string;
    value?:string;
    increasedValue?:string;
    decreasedValue?:string;
    hint?:string;
    onTapHint?:string;
    onLongPressHint?:string;
    textDirection?:TextDirection;
  
    onTap?:VoidCallback;
    onLongPress?:VoidCallback;
    onScrollLeft?:VoidCallback;
    onScrollRight?:VoidCallback;
    onScrollUp?:VoidCallback;
    onScrollDown?:VoidCallback;
    onIncrease?:VoidCallback;
    onDecrease?:VoidCallback;
    onCopy?:VoidCallback;
    onCut?:VoidCallback;
    onPaste?:VoidCallback;
    onDismiss?:VoidCallback;
    onDidGainAccessibilityFocus?:VoidCallback;
    onDidLoseAccessibilityFocus?:VoidCallback;
  
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
    constructor(config: SemanticsConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SemanticsConfig) {
      return new Semantics(config);
    }
  
  }
  
  //****** SwitchListTile ******
  interface SwitchListTileConfig {
    key?:Key;
    value:boolean;
    onChanged:VoidCallbackBoolean;
    activeColor?:Color;
    activeTrackColor?:Color;
    inactiveThumbColor?:Color;
    inactiveTrackColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    contentPadding?:EdgeInsets;
    secondary?:Widget;
    selected?:boolean;
    autofocus?:boolean;
    controlAffinity?:ListTileControlAffinity;
  }
  export class SwitchListTile extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidCallbackBoolean;
    activeColor?:Color;
    activeTrackColor?:Color;
    inactiveThumbColor?:Color;
    inactiveTrackColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    contentPadding?:EdgeInsets;
    secondary?:Widget;
    selected?:boolean;
    autofocus?:boolean;
    controlAffinity?:ListTileControlAffinity;
  
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
    constructor(config: SwitchListTileConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SwitchListTileConfig) {
      return new SwitchListTile(config);
    }
  
  }

  //****** Switch ******
  interface SwitchConfig {
    key?:Key;
    value:boolean;
    onChanged:VoidCallbackBoolean;
    activeColor?:Color;
    activeTrackColor?:Color;
    inactiveThumbColor?:Color;
    inactiveTrackColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
    dragStartBehavior?:DragStartBehavior;
    autofocus?:boolean;
  }
  export class Switch extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidCallbackBoolean;
    activeColor?:Color;
    activeTrackColor?:Color;
    inactiveThumbColor?:Color;
    inactiveTrackColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
    dragStartBehavior?:DragStartBehavior;
    autofocus?:boolean;
  
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
          focusColor?:Color, 
          hoverColor?:Color, 
          materialTapTargetSize?:MaterialTapTargetSize, 
          dragStartBehavior?:DragStartBehavior, 
          autofocus?:boolean, 
        }
     */
    constructor(config: SwitchConfig){
      super();
      if(config!=null && config!=undefined){
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
          onChanged:VoidCallbackBoolean, 
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
    static new(config: SwitchConfig) {
      return new Switch(config);
    }
  
  }
  
  //****** Slider ******
  interface SliderConfig {
    key?:Key;
    value?:number;
    onChanged?:VoidCallbackNumber;
    onChangeStart?:VoidCallbackNumber;
    onChangeEnd?:VoidCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:VoidCallbackNumber;
    autofocus?:boolean;  
  }
  export class Slider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:VoidCallbackNumber;
    onChangeStart?:VoidCallbackNumber;
    onChangeEnd?:VoidCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:VoidCallbackNumber;
    autofocus?:boolean;  
  
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
    constructor(config: SliderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliderConfig) {
      return new Slider(config);
    }
  
  }
  
  //****** SizedBox ******
  interface SizedBoxConfig {
    key?:Key;
    child?:Widget;
    width?:number;
    height?:number; 
    size?:Size;
  }
  export class SizedBox extends Widget {
    child?:Widget;
    width?:number;
    height?:number;
    key?:Key;
    size?:Size;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        width?:number, 
        height?:number, 
      }
     */
    constructor(config?: SizedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SizedBoxConfig) {
      return new SizedBox(config);
    }
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
      }
     */
    static expand(config: SizedBoxConfig) {
      var v = new SizedBox();
      v.constructorName = "expand";
      if(config!=null && config!=undefined){
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
    static fromSize(config: SizedBoxConfig) {
      var v = new SizedBox();
      v.constructorName = "fromSize";
      if(config!=null && config!=undefined){
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
    static shrink(config: SizedBoxConfig) {
      var v = new SizedBox();
      v.constructorName = "shrink";
      if(config!=null && config!=undefined){
        v.key = config.key;
        v.child = config.child;
      }
      return v;
    }
  }
  
  //****** SizedOverflowBox ******
  interface SizedOverflowBoxConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    size:Size;
  }
  export class SizedOverflowBox extends Widget {
    child?:Widget;
    alignment?:Alignment;
    size?:Size;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        alignment?:Alignment, 
        size:Size, 
      }
     */
    constructor(config: SizedOverflowBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SizedOverflowBoxConfig) {
      return new SizedOverflowBox(config);
    }
  }
  
  //****** Stack ******
  interface StackConfig {
    key?:Key;
    children?:Array<Widget>;
    alignment?:AlignmentDirectional;
    textDirection?:TextDirection;
    fit?:StackFit;
    overflow?:Overflow;  
    clipBehavior?:Clip;
  }
  export class Stack extends Widget {
    key?:Key;
    children?:Array<Widget>;
    alignment?:AlignmentDirectional;
    textDirection?:TextDirection;
    fit?:StackFit;
    overflow?:Overflow; 
    clipBehavior?:Clip;
  
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
    constructor(config: StackConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: StackConfig) {
      return new Stack(config);
    }
  }
  
  //****** SliverAppBar ******
  interface SliverAppBarConfig {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    title?:Widget;
    actions?:Array<Widget>;
    flexibleSpace?:Widget;
    bottom?:Widget;
    elevation?:number;
    shadowColor?:Color;
    forceElevated?:boolean;
    backgroundColor?:Color;  
    brightness?:Brightness;
    iconTheme?:IconThemeData;
    actionsIconTheme?:IconThemeData;
    primary?:boolean;
    centerTitle?:boolean;  
    excludeHeaderSemantics?:boolean;
    titleSpacing?:number;
    collapsedHeight?:number;
    expandedHeight?:number;
    floating?:boolean;
    pinned?:boolean;
    snap?:boolean;
    stretch?:boolean;
    stretchTriggerOffset?:number;
    onStretchTrigger?:VoidCallback;
    shape?:any;
    toolbarHeight?:number;
  }
  export class SliverAppBar extends Widget {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    title?:Widget;
    actions?:Array<Widget>;
    flexibleSpace?:Widget;
    bottom?:Widget;
    elevation?:number;
    shadowColor?:Color;
    forceElevated?:boolean;
    backgroundColor?:Color;
    brightness?:Brightness;
    iconTheme?:IconThemeData;
    actionsIconTheme?:IconThemeData;
    primary?:boolean;
    centerTitle?:boolean;  
    excludeHeaderSemantics?:boolean;
    titleSpacing?:number;
    collapsedHeight?:number;
    expandedHeight?:number;
    floating?:boolean;
    pinned?:boolean;
    snap?:boolean;
    stretch?:boolean;
    stretchTriggerOffset?:number;
    onStretchTrigger?:VoidCallback;
    shape?:any;
    toolbarHeight?:number;
  
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
    constructor(config: SliverAppBarConfig){
      super();
      if(config!=null && config!=undefined){
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
        this.iconTheme = config.iconTheme;
        this.actionsIconTheme = config.actionsIconTheme;
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
    static new(config: SliverAppBarConfig) {
      return new SliverAppBar(config);
    }
  }
  
  //****** SliverPadding ******
  interface SliverPaddingConfig {
    key?:Key;
    sliver?:Widget;
    padding:EdgeInsets;
  }
  export class SliverPadding extends Widget {
    sliver?:Widget;
    padding?:EdgeInsets;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        sliver?:Widget, 
        padding:EdgeInsets, 
      }
     */
    constructor(config: SliverPaddingConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverPaddingConfig) {
      return new SliverPadding(config);
    }
  }
  
  //****** TODO SliverGrid ******
  interface SliverGridConfig {
    delegate?:any;
    gridDelegate?:any;
    key?:Key;
  }
  export class SliverGrid extends Widget {
    delegate?:any;
    gridDelegate?:any;
    key?:Key;
  
    /**
     * @param config config: 
      {
        delegate?:any, 
        gridDelegate?:any, 
        key?:Key,
      }
     */
    constructor(config: SliverGridConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.delegate = config.delegate;
        this.gridDelegate = config.gridDelegate;
      }
    } 
  
    /**
     * @param config config: 
      {
        delegate?:any, 
        gridDelegate?:any, 
        key?:Key,
      }
     */
    static new(config: SliverGridConfig) {
      return new SliverGrid(config);
    }
  }
  
  //****** TODO SliverGridDelegateWithMaxCrossAxisExtent ******
  interface SliverGridDelegateWithMaxCrossAxisExtentConfig {
    maxCrossAxisExtent?:number;
    mainAxisSpacing?:number;
    crossAxisSpacing?:number;
    childAspectRatio?:number;
  }
  export class SliverGridDelegateWithMaxCrossAxisExtent extends Widget {
    maxCrossAxisExtent?:number;
    mainAxisSpacing?:number;
    crossAxisSpacing?:number;
    childAspectRatio?:number;
  
    /**
     * @param config config: 
      {
        maxCrossAxisExtent?:number, 
        mainAxisSpacing?:number, 
        crossAxisSpacing?:number, 
        childAspectRatio?:number, 
      }
     */
    constructor(config: SliverGridDelegateWithMaxCrossAxisExtentConfig){
      super();
      if(config!=null && config!=undefined){
        this.maxCrossAxisExtent = config.maxCrossAxisExtent;
        this.mainAxisSpacing = config.mainAxisSpacing;
        this.crossAxisSpacing = config.crossAxisSpacing;
        this.childAspectRatio = config.childAspectRatio;
      }
    }
  
    /**
     * @param config config: 
      {
        maxCrossAxisExtent?:number, 
        mainAxisSpacing?:number, 
        crossAxisSpacing?:number, 
        childAspectRatio?:number, 
      }
     */
    static new(config: SliverGridDelegateWithMaxCrossAxisExtentConfig) {
      return new SliverGridDelegateWithMaxCrossAxisExtent(config);
    }
  }
  
  //****** TODO SliverChildListDelegate ******
  interface SliverChildListDelegateConfig {
    children?:Array<Widget>;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
  }
  export class SliverChildListDelegate extends DartClass {
    children?:Array<Widget>;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
  
    /**
     * @param config config: 
      {
        children?:Array<Widget>, 
        addAutomaticKeepAlives?:boolean, 
        addRepaintBoundaries?:boolean, 
        addSemanticIndexes?:boolean, 
        semanticIndexOffset?:number, 
      }
     */
    constructor(config: SliverChildListDelegateConfig){
      super();
      if(config!=null && config!=undefined){
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
        children?:Array<Widget>, 
        addAutomaticKeepAlives?:boolean, 
        addRepaintBoundaries?:boolean, 
        addSemanticIndexes?:boolean, 
        semanticIndexOffset?:number, 
      }
     */
    static new(config: SliverChildListDelegateConfig) {
      return new SliverChildListDelegate(config);
    }
  }
  
  //****** TODO SliverChildBuilderDelegate ******
  interface SliverChildBuilderDelegateConfig {
    builder:any;
    childCount?:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
    children?:Array<Widget>;
  }
  export class SliverChildBuilderDelegate extends Widget {
    builder:any;
    childCount?:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
    children?:Array<Widget>;
   
    preBuild(jsWidgetHelper?:any, buildContext?:any) {
      if (this.builder) {
        if(this.childCount!=null && this.childCount!=undefined){
        for (let i = 0; i < this.childCount; ++i) {
          let w = this.builder(buildContext, i);
          if(this.children!=null && this.children!=undefined){
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
        builder:any, 
        childCount?:number, 
        addAutomaticKeepAlives?:boolean, 
        addRepaintBoundaries?:boolean, 
        addSemanticIndexes?:boolean, 
        semanticIndexOffset?:number, 
        children?:Array<Widget>, 
      }
     */
    constructor(config: SliverChildBuilderDelegateConfig){
      super();
      if(config!=null && config!=undefined){
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
    
    /**
     * @param config config: 
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
    static new(config: SliverChildBuilderDelegateConfig) {
      return new SliverChildBuilderDelegate(config);
    }
  }
  
  //****** TODO SliverList ******
  interface SliverListConfig {
    delegate?:any;
    key?:Key;
  }
  export class SliverList extends Widget {
    delegate?:any;
    key?:Key;
  
    /**
     * @param config config: 
      {
        delegate?:any,
        key?:Key
      }
     */
    constructor(config: SliverListConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.delegate = config.delegate;
      }
    }
  
    /**
     * @param config config: 
      {
        delegate?:any,
        key?:Key
      }
     */
    static new(config: SliverListConfig) {
      return new SliverList(config);
    }
  }
  
  //****** TODO SliverOverlapInjector ******
  interface SliverOverlapInjectorConfig {
    key?:Key;
    child?:Widget;
    handle?:any;
  }
  export class SliverOverlapInjector extends Widget {
    child?:Widget;
    handle?:any;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        handle?:any, 
      }
     */
    constructor(config: SliverOverlapInjectorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverOverlapInjectorConfig) {
      return new SliverOverlapInjector(config);
    }
  }
  
  //****** TODO SliverFixedExtentList ******
  interface SliverFixedExtentListConfig {
    key?:Key;
    delegate?:any;
    itemExtent?:number;
  }
  export class SliverFixedExtentList extends Widget {
    delegate?:any;
    itemExtent?:number;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        delegate?:any, 
        itemExtent?:number, 
      }
     */
    constructor(config: SliverFixedExtentListConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.delegate = config.delegate;
        this.itemExtent = config.itemExtent;
      }
    }
  
   
    /**
     * @param config config: 
      {
        key?:Key, 
        delegate?:any, 
        itemExtent?:number, 
      }
     */
    static new(config: SliverFixedExtentListConfig) {
      return new SliverFixedExtentList(config);
    }
  }
  
  //****** TODO SliverOverlapAbsorber ******
  interface SliverOverlapAbsorberConfig {
    key?:Key;
    child?:Widget;
    handle?:any;
  }
  export class SliverOverlapAbsorber extends Widget {
    child?:Widget;
    handle?:any;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        handle?:any, 
      }
     */
    constructor(config: SliverOverlapAbsorberConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverOverlapAbsorberConfig) {
      return new SliverOverlapAbsorber(config);
    }
  }
  
  //****** SingleChildScrollView ******
  interface SingleChildScrollViewConfig {
    key?:Key;
    child?:Widget;
    scrollDirection?:Axis;
    reverse?:boolean;
    padding?:EdgeInsets;
    primary?:boolean;
    physics?:ScrollPhysics;
    controller?:ScrollController;
    dragStartBehavior?:DragStartBehavior;
    clipBehavior?:Clip;
  }
  export class SingleChildScrollView extends Widget {
    child?:Widget;
    scrollDirection?:Axis;
    reverse?:boolean;
    padding?:EdgeInsets;
    primary?:boolean;
    physics?:ScrollPhysics;
    controller?:ScrollController;
    dragStartBehavior?:DragStartBehavior;
    clipBehavior?:Clip;
    key?:Key;
  
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
    constructor(config: SingleChildScrollViewConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SingleChildScrollViewConfig) {
        return new SingleChildScrollView(config);
    }
  }
  
  //****** SliverToBoxAdapter ******
  interface SliverToBoxAdapterConfig {
    child?:Widget;
    key?:Key;
  }
  export class SliverToBoxAdapter extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param config config: 
      {
        child?:Widget,
        key?:Key
      }
     */
    constructor(config: SliverToBoxAdapterConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverToBoxAdapterConfig) {
      return new SliverToBoxAdapter(config);
    }
  }
  
  //****** Scaffold ******
  interface ScaffoldConfig {
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
  export class Scaffold extends Widget {
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
    constructor(config: ScaffoldConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: ScaffoldConfig){
      return new Scaffold(config);
    }
  }
  
  //****** TODO Scaffold ******
  export class ScaffoldState extends DartClass {
    static new() {
      return new ScaffoldState();
    }
  }
  
  //****** SafeArea ******
  interface SafeAreaConfig {
    key?:Key;
    child:Widget;
    left?:boolean;
    top?:boolean;
    right?:boolean;
    bottom?:boolean;
    minimum?:EdgeInsets;
    maintainBottomViewPadding?:boolean;  
  }
  export class SafeArea extends Widget {
    key?:Key;
    child?:Widget;
    left?:boolean;
    top?:boolean;
    right?:boolean;
    bottom?:boolean;
    minimum?:EdgeInsets;
    maintainBottomViewPadding?:boolean;  
  
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
    constructor(config: SafeAreaConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SafeAreaConfig) {
      return new SafeArea(config);
    }
  }
  
  //****** SliverSafeArea ******
  interface SliverSafeAreaConfig {
    key?:Key;
    sliver:Widget;
    left?:boolean;
    top?:boolean;
    right?:boolean;
    bottom?:boolean;
    minimum?:EdgeInsets;
  }
  export class SliverSafeArea extends Widget {
    key?:Key;
    sliver?:Widget;
    left?:boolean;
    top?:boolean;
    right?:boolean;
    bottom?:boolean;
    minimum?:EdgeInsets;
  
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
    constructor(config: SliverSafeAreaConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverSafeAreaConfig) {
      return new SliverSafeArea(config);
    }
  }
  
  //****** Scrollbar ******
  interface ScrollbarConfig {
    key?:Key;
    child:Widget;
    controller?:ScrollController;
    isAlwaysShown?:boolean;
  }
  export class Scrollbar extends Widget {
    key?:Key;
    child?:Widget;
    controller?:ScrollController;
    isAlwaysShown?:boolean;
    /**
     * @param config config: 
      {
        key?:Key, 
        child:Widget, 
        controller?:ScrollController, 
        isAlwaysShown?:boolean,   
      }
     */
    constructor(config: ScrollbarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new (config: ScrollbarConfig) {
      return new Scrollbar(config);
    }
  }
  
  //****** SnackBar ******
  interface SnackBarConfig {
    key?:Widget;
    content:Widget;
    backgroundColor?:Color;
    elevation?:number;
    shape?:any;
    behavior?:any;
    action?:any;
    duration?:Duration;
    animation?:any;
    onVisible?:VoidCallback;
  }
  export class SnackBar extends Widget {
    content?:Widget;
    backgroundColor?:Color;
    elevation?:number;
    shape?:any;
    behavior?:any;
    action?:any;
    duration?:Duration;
    animation?:any;
    onVisible?:VoidCallback;
    key?:Widget;
  
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
    constructor(config: SnackBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SnackBarConfig) {
      return new SnackBar(config);
    }
  }
  
  //****** TODO SnackBarAction ******
  interface SnackBarActionConfig {
    key?:Widget;
    lable?:string;
    onPressed?:VoidCallback;
    disabledTextColor?:Color;
    textColor?:Color;
  }
  export class SnackBarAction extends Widget {
    key?:Widget;
    lable?:string;
    onPressed?:VoidCallback;
    disabledTextColor?:Color;
    textColor?:Color;
  
    /**
     * @param config config: 
      {
        key?:Widget, 
        lable?:string, 
        onPressed?:VoidCallback, 
        disabledTextColor?:Color, 
        textColor?:Color, 
      }
     */
    constructor(config: SnackBarActionConfig){
      super();
      if(config!=null && config!=undefined){
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
        lable?:string, 
        onPressed?:VoidCallback, 
        disabledTextColor?:Color, 
        textColor?:Color, 
      }
     */
    static new(config: SnackBarActionConfig) {
      return new SnackBarAction(config);
    }
  }
  
  //****** SliverVisibility ******
  interface SliverVisibilityConfig {
    key?:Key;
    sliver:Widget;
    replacementSliver?:Widget;
    visible?:boolean;
    maintainState?:boolean;
    maintainAnimation?:boolean;
    maintainSize?:boolean;
    maintainSemantics?:boolean;
    maintainInteractivity?:boolean;
  }
  export class SliverVisibility extends Widget {
    key?:Key;
    sliver?:Widget;
    replacementSliver?:Widget;
    visible?:boolean;
    maintainState?:boolean;
    maintainAnimation?:boolean;
    maintainSize?:boolean;
    maintainSemantics?:boolean;
    maintainInteractivity?:boolean;
  
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
    constructor(config: SliverVisibilityConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: SliverVisibilityConfig) {
      return new SliverVisibility(config);
    }
  }
  
  
  //#endregion
  
  //#region ------- T -------
  //****** TableRow ******
  interface TableRowConfig {
    key?:Key;
    children?:Array<Widget>;
    decoration?:BoxDecoration;
  }
  export class TableRow extends Widget {
    children?:Array<Widget>;
    decoration?:BoxDecoration;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        children?:Array<Widget>, 
        decoration?:BoxDecoration, 
      }
     */
    constructor(config: TableRowConfig){
      super();
      if(config!=null && config!=undefined){
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
     static new(config: TableRowConfig) {
      return new TableRow(config);
    }
  }
  
  //****** TableCell ******
  interface TableCellConfig {
    key?:Key;
    child?:Widget;
    verticalAlignment?:TableCellVerticalAlignment;
  }
  export class TableCell extends Widget {
    child?:Widget;
    verticalAlignment?:TableCellVerticalAlignment;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        verticalAlignment?:TableCellVerticalAlignment, 
      }
     */
    constructor(config: TableCellConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TableCellConfig) {
      return new TableCell(config);
    }
  }
  
  //****** Transform ******
  interface TransformNewConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transform:Matrix4;
    transformHitTests?:boolean;
  }
  interface TransformRotateConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transformHitTests?:boolean;
    angle:number;
  }
  interface TransformTranslateConfig {
    key?:Key;
    child?:Widget;
    offset:Offset;
    transformHitTests?:boolean;
  }
  interface TransformScaleConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transformHitTests?:boolean;
    scale:number;
  }
  export class Transform extends Widget {
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transform?:Matrix4;
    transformHitTests?:boolean;
    key?:Key;
    angle?:number;
    offset?:Offset;
    scale?:number;
  
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
    constructor(config?: TransformNewConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TransformNewConfig) {
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
    static rotate(config: TransformRotateConfig) {
      var v = new Transform();
      v.constructorName = "rotate";
      if(config!=null && config!=undefined){
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
    static translate(config: TransformTranslateConfig) {
      var v = new Transform();
      v.constructorName = "translate";
      if(config!=null && config!=undefined){
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
    static scale(config: TransformScaleConfig) {
      var v = new Transform();
      v.constructorName = "scale";
      if(config!=null && config!=undefined){
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
  
  //****** Tooltip ******
  interface TooltipConfig {
    key?:Key;
    message:string;
    height?:number;
    padding?:EdgeInsets;
    margin?:EdgeInsets;
    verticalOffset?:number;
    preferBelow?:boolean;
    excludeFromSemantics?:boolean;
    decoration?:BoxDecoration;
    textStyle?:TextStyle;
    waitDuration?:Duration;
    showDuration?:Duration;
    child?:Widget;
  }
  export class Tooltip extends Widget {
    key?:Key;
    message?:string;
    height?:number;
    padding?:EdgeInsets;
    margin?:EdgeInsets;
    verticalOffset?:number;
    preferBelow?:boolean;
    excludeFromSemantics?:boolean;
    decoration?:BoxDecoration;
    textStyle?:TextStyle;
    waitDuration?:Duration;
    showDuration?:Duration;
    child?:Widget;
  
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
    constructor(config: TooltipConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TooltipConfig) {
      return new Tooltip(config);
    }
  }
  
  //****** Table ******
  interface TableConfig {
    key?:Key;
    children?:Array<Widget>;
    defaultColumnWidth?:TableColumnWidth;
    defaultVerticalAlignment?:TableCellVerticalAlignment;
    textDirection?:TextDecoration;
    border?:TableBorder;
    textBaseline?:TextBaseline;
    columnWidths?:Map<string,TableColumnWidth>;
    
  }
  export class Table extends  Widget {
    children?:Array<Widget>;
    defaultColumnWidth?:TableColumnWidth;
    defaultVerticalAlignment?:TableCellVerticalAlignment;
    textDirection?:TextDecoration;
    border?:TableBorder;
    textBaseline?:TextBaseline;
    columnWidths?:Map<string,TableColumnWidth>;
    key?:Key;
  
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
    constructor(config: TableConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.children = config.children;
        this.columnWidths= config.columnWidths;
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
    static new(config: TableConfig) {
      return new Table(config);
    }
  }
  
  //****** TODO TabBar ******
  interface TabBarConfig {
    key?:Key;
    tabs?:Array<Widget>;
    onTap?:VoidCallbackNumber;
    controller?:TabController;
    isScrollable?:boolean;
    indicatorColor?:Color;
    indicatorWeight?:number;
    indicatorPadding?:EdgeInsets;
    indicator?:BoxDecoration;
    indicatorSize?:TabBarIndicatorSize;
    labelColor?:Color;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    unselectedLabelColor?:Color;
    unselectedLabelStyle?:TextStyle;
    dragStartBehavior?:DragStartBehavior;
    physics?:ScrollPhysics;
  }
  export class TabBar extends  Widget {
    key?:Key;
    tabs?:Array<Widget>;
    onTap?:VoidCallbackNumber;
    controller?:TabController;
    isScrollable?:boolean;
    indicatorColor?:Color;
    indicatorWeight?:number;
    indicatorPadding?:EdgeInsets;
    indicator?:BoxDecoration;
    indicatorSize?:TabBarIndicatorSize;
    labelColor?:Color;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    unselectedLabelColor?:Color;
    unselectedLabelStyle?:TextStyle;
    dragStartBehavior?:DragStartBehavior;
    physics?:ScrollPhysics;
  
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
    constructor(config: TabBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TabBarConfig) {
      return new TabBar(config);
    }
  }
  
  //****** Tab ******
  interface TabConfig {
    key?:Key;
    child?:Widget;
    text?:string;
    icon?:Widget;
    iconMargin?:EdgeInsets;
  }
  export class Tab extends Widget {
    key?:Key;
    child?:Widget;
    text?:string;
    icon?:Widget;
    iconMargin?:EdgeInsets;
  
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
    constructor(config: TabConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TabConfig) {
      return new Tab(config);
    }
  }
  
  //****** TabBarView ******
  interface TabBarViewConfig {
    key?:Key;
    children?:Array<Widget>;
    controller?:TabController;
    physics?:ScrollPhysics;
    dragStartBehavior?:DragStartBehavior;
  }
  export class TabBarView extends Widget {
    children?:Array<Widget>;
    controller?:TabController;
    physics?:ScrollPhysics;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
  
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
    constructor(config: TabBarViewConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TabBarViewConfig) {
      return new TabBarView(config);
    }
  }
  
  //****** TabPageSelectorIndicator ******
  interface TabPageSelectorIndicatorConfig {
    key?:Key;
    backgroundColor?:Color;
    borderColor?:Color;
    size?:number;
  }
  export class TabPageSelectorIndicator extends Widget {
    key?:Key;
    backgroundColor?:Color;
    borderColor?:Color;
    size?:number;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        backgroundColor?:Color, 
        borderColor?:Color, 
        size?:number,
      }
     */
    constructor(config: TabPageSelectorIndicatorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TabPageSelectorIndicatorConfig) {
      return new TabPageSelectorIndicator(config);
    }
  }
  
  //****** TODO TabPageSelector ******
  interface TabPageSelectorConfig {
    key?:Key;
    color?:Color;
    selectedColor?:Color;
    indicatorSize?:number;
    controller?:TabController;
  }
  export class TabPageSelector extends Widget {
    key?:Key;
    color?:Color;
    selectedColor?:Color;
    indicatorSize?:number;
    controller?:TabController;
  
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
    constructor(config: TabPageSelectorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TabPageSelectorConfig) {
      return new TabPageSelector(config);
    }
  }
  
  //****** Title ******
  interface TitleConfig {
    key?:Key;
    child?:Widget;
    title?:string;
    color?:Color;
  }
  export class Title extends Widget {
    key?:Key;
    child?:Widget;
    title?:string;
    color?:Color;
  
    /**
     * @param config config: 
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    constructor(config: TitleConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TitleConfig) {
      return new Title(config);
    }
  }
  
  //****** Text ******
  interface TextConfig {
    key?:Key;
    style?:TextStyle;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:TextOverflow;
    textScaleFactor?:number;
    maxLines?:number;
    semanticsLabel?:string
    textWidthBasis?:TextWidthBasis;
  }
  export class Text extends Widget {
    data?:string | TextSpan;
    key?:Key;
    style?:TextStyle;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:TextOverflow;
    textScaleFactor?:number;
    maxLines?:number;
    semanticsLabel?:string;
    textWidthBasis?:TextWidthBasis;
  
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
    constructor(data:string | TextSpan, config?: TextConfig){
      super();
      this.data = data;
      if(config!=null && config!=undefined){
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
    static new(data:string, config?: TextConfig) {
      return new Text(data,config);
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
    static rich(data:TextSpan, config?: TextConfig) {
      var v = new Text(data,config);
      v.constructorName= "rich";
      v.data = data;
      return v;
    }
  }
  
  //****** TextSpan ******
  //TODO:recognizer => GestureRecognizer
  interface TextSpanConfig {
    children?:Array<Widget>;
    style?:TextStyle;
    text?:string;
    recognizer?:any;
    semanticsLabel?:string;
  }
  export class TextSpan extends Widget {
    children?:Array<Widget>;
    style?:TextStyle;
    text?:string;
    recognizer?:any;
    semanticsLabel?:string;
  
  
    /**
     * @param config config: 
      {
        children?:Array<Widget>, 
        style?:TextStyle, 
        text?:string, 
        recognizer?:any, 
        semanticsLabel?:string,
      }
     */
    constructor(config: TextSpanConfig){
      super();
      if(config!=null && config!=undefined){
        this.children = config.children;
        this.style = config.style;
        this.text = config.text;
        this.recognizer = config.recognizer;
        this.semanticsLabel = config.semanticsLabel;
      }
    }
    
    /**
     * @param config config: 
      {
        children?:Array<Widget>, 
        style?:TextStyle, 
        text?:string, 
        recognizer?:any, 
        semanticsLabel?:string,
      }
     */
    static new(config: TextSpanConfig) {
      return new TextSpan(config);
    }
  }
  
  
  //****** Texture ******
  interface TextureConfig {
    key?:Key;
    textureId?:number;
    filterQuality?:FilterQuality;
  }
  export class Texture extends Widget {
    key?:Key;
    textureId?:number;
    filterQuality?:FilterQuality;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        textureId?:number, 
        filterQuality?:FilterQuality, 
      }
     */
    constructor(config: TextureConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: TextureConfig) {
      return new Texture(config);
    }
  }
  
  //****** TextFormField ******
  //TODO:strutStyle、autofillHints、inputFormatters、autofillHints
  interface TextFormFieldConfig {
    key?:Key;
    controller?:TextEditingController;
    initialValue?:string;
    focusNode?:FocusNode;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textInputAction?:TextInputAction;
    textCapitalization?:TextCapitalization;
    style?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    textDirection?:TextDirection;
    readOnly?:boolean;
    toolbarOptions?:ToolbarOptions;
    showCursor?:boolean;
    autofocus?:boolean;
    obscuringCharacter?:string;
    obscureText?:boolean;
    autocorrect?:boolean;
    smartDashesType?:SmartDashesType;
    smartQuotesType?:SmartQuotesType;
    enableSuggestions?:boolean;
    autovalidate?:boolean;
    maxLines?:number;
    minLines?:number;
    expands?:boolean;
    maxLength?:number;
    maxLengthEnforced?:boolean;
    onChanged?:VoidCallbackString;
    onTap?:VoidCallback;
    onEditingComplete?:VoidCallback;
    onFieldSubmitted?:VoidCallbackString;
    onSaved?:VoidCallbackString;
    validator?:VoidCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean; 
    scrollPhysics?:ScrollPhysics;   
    
  }
  export class TextFormField extends Widget {
    key?:Key;
    controller?:TextEditingController;
    initialValue?:string;
    focusNode?:FocusNode;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textInputAction?:TextInputAction;
    textCapitalization?:TextCapitalization;
    style?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    textDirection?:TextDirection;
    readOnly?:boolean;
    toolbarOptions?:ToolbarOptions;
    showCursor?:boolean;
    autofocus?:boolean;
    obscuringCharacter?:string;
    obscureText?:boolean;
    autocorrect?:boolean;
    smartDashesType?:SmartDashesType;
    smartQuotesType?:SmartQuotesType;
    enableSuggestions?:boolean;
    autovalidate?:boolean;
    maxLines?:number;
    minLines?:number;
    expands?:boolean;
    maxLength?:number;
    maxLengthEnforced?:boolean;
    onChanged?:VoidCallbackString;
    onTap?:VoidCallback;
    onEditingComplete?:VoidCallback;
    onFieldSubmitted?:VoidCallbackString;
    onSaved?:VoidCallbackString;
    validator?:VoidCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean; 
    scrollPhysics?:ScrollPhysics; 
  
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
      }
     */
    constructor(config: TextFormFieldConfig){
      super();
      if(config!=null && config!=undefined){
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
      }
     */
    static new(config: TextFormFieldConfig) {
      return new TextFormField(config);
    }
  }

  //****** TextField ******
  //TODO: inputFormatters、autofillHints、buildCounter、strutStyle
  interface TextFieldConfig {
    key?:Key;
    controller?:TextEditingController;
    focusNode?:FocusNode;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textInputAction?:TextInputAction;
    textCapitalization?:TextCapitalization;
    style?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    textDirection?:TextDirection;
    readOnly?:boolean;
    toolbarOptions?:ToolbarOptions;
    showCursor?:boolean;
    autofocus?:boolean;
    obscuringCharacter?:string;
    obscureText?:boolean;
    autocorrect?:boolean;
    smartDashesType?:SmartDashesType;
    smartQuotesType?:SmartQuotesType;
    enableSuggestions?:boolean;
    maxLines?:number;
    minLines?:number;
    expands?:boolean;
    maxLength?:number;
    maxLengthEnforced?:boolean;
    onChanged?:VoidCallbackString;
    onEditingComplete?:VoidCallback;
    onSubmitted?:VoidCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    selectionHeightStyle?:BoxHeightStyle;
    selectionWidthStyle?:BoxWidthStyle;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean;
    onTap?:VoidCallback;
    scrollController?:ScrollController;
    scrollPhysics?:ScrollPhysics;    
  }
  export class TextField extends Widget {
    key?:Key;
    controller?:TextEditingController;
    focusNode?:FocusNode;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textInputAction?:TextInputAction;
    textCapitalization?:TextCapitalization;
    style?:TextStyle;
    textAlign?:TextAlign;
    textAlignVertical?:TextAlignVertical;
    textDirection?:TextDirection;
    readOnly?:boolean;
    toolbarOptions?:ToolbarOptions;
    showCursor?:boolean;
    autofocus?:boolean;
    obscuringCharacter?:string;
    obscureText?:boolean;
    autocorrect?:boolean;
    smartDashesType?:SmartDashesType;
    smartQuotesType?:SmartQuotesType;
    enableSuggestions?:boolean;
    maxLines?:number;
    minLines?:number;
    expands?:boolean;
    maxLength?:number;
    maxLengthEnforced?:boolean;
    onChanged?:VoidCallbackString;
    onEditingComplete?:VoidCallback;
    onSubmitted?:VoidCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    selectionHeightStyle?:BoxHeightStyle;
    selectionWidthStyle?:BoxWidthStyle;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean;
    onTap?:VoidCallback;
    scrollController?:ScrollController;
    scrollPhysics?:ScrollPhysics;
    
  
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
      }
     */
    constructor(config: TextFieldConfig){
      super();
      if(config!=null && config!=undefined){
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
      }
     */
    static new(config: TextFieldConfig) {
      return new TextField(config);
    }
  }

  //#endregion
  
  //#region ------- U -------
  //****** UnconstrainedBox ******
  interface UnconstrainedBoxConfig {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    textDirection?:TextDirection;
    constrainedAxis?:Axis;
    clipBehavior?:Clip;
  }
  export class UnconstrainedBox extends Widget {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    textDirection?:TextDirection;
    constrainedAxis?:Axis;
    clipBehavior?:Clip;
  
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
    constructor(config: UnconstrainedBoxConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: UnconstrainedBoxConfig) {
      return new UnconstrainedBox(config);
    }
  
  }
  //#endregion
  
  //#region ------- V -------
  //****** VerticalDivider ******
  interface VerticalDividerConfig {
    key?:Key;
    width?:number;
    thickness?:number;
    indent?:number;
    endIndent?:number;
    color?:Color;
  }
  export class VerticalDivider extends Widget {
    key?:Key;
    width?:number;
    thickness?:number;
    indent?:number;
    endIndent?:number;
    color?:Color;
  
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
    constructor(config: VerticalDividerConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: VerticalDividerConfig) {
      return new VerticalDivider(config);
    }
  }
  
  //****** Visibility ******
  interface VisibilityConfig {
    child:Widget;
  
    key?:Key;
    replacement?:Widget;
    visible?:boolean;
    maintainState?:boolean;
    maintainAnimation?:boolean;
    maintainSize?:boolean;
    maintainSemantics?:boolean;
    maintainInteractivity?:boolean;
  }
  export class Visibility extends Widget {
    key?:Key;
    child?:Widget;
    replacement?:Widget;
    visible?:boolean;
    maintainState?:boolean;
    maintainAnimation?:boolean;
    maintainSize?:boolean;
    maintainSemantics?:boolean;
    maintainInteractivity?:boolean;
  
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
    constructor(config: VisibilityConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: VisibilityConfig) {
      return new Visibility(config);
    }
  }
  
  //#endregion
  
  //#region ------- W -------
  //****** Wrap ******
  interface WrapConfig {
    key?:Key;
    children?:Array<Widget>;
    alignment?:WrapAlignment;
    spacing?:number;
    crossAxisAlignment?:WrapCrossAlignment;
    textDirection?:TextDecoration;
    direction?:Axis;
    verticalDirection?:VerticalDirection;
    runAlignment?:WrapAlignment;
    runSpacing?:number; 
    clipBehavior?:Clip;
  }
  export class Wrap extends Widget {
    children?:Array<Widget>;
    alignment?:WrapAlignment;
    spacing?:number;
    crossAxisAlignment?:WrapCrossAlignment;
    textDirection?:TextDecoration;
    direction?:Axis;
    verticalDirection?:VerticalDirection;
    runAlignment?:WrapAlignment;
    runSpacing?:number; 
    key?:Key;
    clipBehavior?:Clip;
  
  
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
    constructor(config: WrapConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: WrapConfig) {
      return new Wrap(config);
    }
  }
  
  //****** WillPopScope ******
  interface WillPopScopeConfig {
    child:Widget;
    onWillPop:VoidCallback;
  
    key?:Key;
  }
  export class WillPopScope extends Widget {
    key?:Key;
    child?:Widget;
    onWillPop?:VoidCallback;
  
    /**
     * @param config config: 
      {
        child:Widget, 
        onWillPop:VoidCallback, 
  
        key?:Key, 
      }
     */
    constructor(config: WillPopScopeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: WillPopScopeConfig) {
      return new WillPopScope(config);
    }
  }
  
  //****** WidgetSpan ******
  interface WidgetSpanConfig {
    child:Widget;
  
    alignment?:PlaceholderAlignment;
    baseline?:TextBaseline;
    style?:TextStyle;
  }
  export class WidgetSpan extends Widget {
    child?:Widget;
    alignment?:PlaceholderAlignment;
    baseline?:TextBaseline;
    style?:TextStyle;
  
    /**
     * @param config config: 
      {
        child:Widget, 
  
        alignment?:PlaceholderAlignment, 
        baseline?:TextBaseline, 
        style?:TextStyle, 
      }
     */
  
     constructor(config: WidgetSpanConfig){
       super();
       if(config!=null && config!=undefined){
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
    static new(config: WidgetSpanConfig) {
      return new WidgetSpan(config);
    }
  
  }
  
  //#endregion
  
  
//#endregion


//#region ******* Cupertino widgets ********
//-------------- A -----------------
//****** CupertinoActivityIndicator ******
interface CupertinoActivityIndicatorConfig {
    key?:Key;
    animating?:boolean;
    radius?:number;
  }
  export class CupertinoActivityIndicator extends Widget {
    key?:Key;
    animating?:boolean;
    radius?:number;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          animating?:boolean, 
          radius?:number, 
        }
     */
  
    constructor(config: CupertinoActivityIndicatorConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoActivityIndicatorConfig) {
      return new CupertinoActivityIndicator(config);
    }
  }
  
  //-------------- B -----------------
  //****** CupertinoButton ******
  interface CupertinoButtonConfig {
    key?:Key;
    child:Widget;
    onPressed:VoidCallback;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    minSize?:number;
    pressedOpacity?:number;
    borderRadius?:BorderRadius;
  }
  export class CupertinoButton extends Widget {
    child?:Widget;
    onPressed?:VoidCallback;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    minSize?:number;
    pressedOpacity?:number;
    borderRadius?:BorderRadius;
    key?:Key;
  
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
    constructor(config: CupertinoButtonConfig){
      super();
  
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoButtonConfig) {
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
    static filled(config: CupertinoButtonConfig) {
      var v = new CupertinoButton(config);
      v.constructorName = "filled";
      return v;
    }
  }
  
  //-------------- D -----------------
  
  
  //-------------- F -----------------
  
  
  //-------------- N -----------------
  //****** CupertinoNavigationBar ******
  interface CupertinoNavigationBarConfig {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    automaticallyImplyMiddle?:boolean;
    previousPageTitle?:string;
    middle?:Widget;
    trailing?:Widget;
    border?:Border;
    backgroundColor?:Color;
    brightness?:Brightness;
    padding?:EdgeInsets;
    actionsForegroundColor?:Color;
    transitionBetweenRoutes?:boolean;
  }
  export class CupertinoNavigationBar extends Widget {
    key?:Key;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    automaticallyImplyMiddle?:boolean;
    previousPageTitle?:string;
    middle?:Widget;
    trailing?:Widget;
    border?:Border;
    backgroundColor?:Color;
    brightness?:Brightness;
    padding?:EdgeInsets;
    actionsForegroundColor?:Color;
    transitionBetweenRoutes?:boolean;
  
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
    constructor(config: CupertinoNavigationBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoNavigationBarConfig) {
      return new CupertinoNavigationBar(config);
    }
  }
  
  //****** CupertinoNavigationBarBackButton ******
  interface CupertinoNavigationBarBackButtonConfig {
    key?:Key;
    color?:Color;
    previousPageTitle?:string;
    onPressed?:VoidCallback;
  }
  export class CupertinoNavigationBarBackButton extends Widget {
    key?:Key;
    color?:Color;
    previousPageTitle?:string;
    onPressed?:VoidCallback;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          color?:Color, 
          previousPageTitle?:string, 
          onPressed?:VoidCallback, 
        }
     */
    constructor(config:CupertinoNavigationBarBackButtonConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.color = config.color;
        this.previousPageTitle= config.previousPageTitle;
        this.onPressed =config.onPressed;
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
    static new(config:CupertinoNavigationBarBackButtonConfig) {
      return new CupertinoNavigationBarBackButton(config);
    }
  }
  
  //-------------- P -----------------
  
  //-------------- S -----------------
  //****** CupertinoSlider ******
  interface CupertinoSliderConfig {
    key?:Key;
    value:number;
    onChanged:VoidCallbackNumber;
    onChangeStart?:VoidCallbackNumber;
    onChangeEnd?:VoidCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    activeColor?:Color;
    thumbColor?:Color;
  }
  export class CupertinoSlider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:VoidCallbackNumber;
    onChangeStart?:VoidCallbackNumber;
    onChangeEnd?:VoidCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    activeColor?:Color;
    thumbColor?:Color;
  
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
    constructor(config: CupertinoSliderConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoSliderConfig) {
      return new CupertinoSlider(config);
    }
  }
  
  //****** CupertinoSwitch ******
  interface CupertinoSwitchConfig {
    key?:Key;
    value:boolean;
    onChanged:VoidCallbackBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  }
  export class CupertinoSwitch extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidCallbackBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  
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
    constructor(config: CupertinoSwitchConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoSwitchConfig) {
      return new CupertinoSwitch(config);
    }
  }
  
  //****** CupertinoScrollbar ******
  interface CupertinoScrollbarConfig {
    key?:Key;
    child:Widget;
    controller?:ScrollController;
    isAlwaysShown?:boolean;
  }
  export class CupertinoScrollbar extends Widget {
    key?:Key;
    child?:Widget;
    controller?:ScrollController;
    isAlwaysShown?:boolean;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child:Widget, 
          controller?:ScrollController, 
          isAlwaysShown?:boolean, 
        }
     */
    constructor(config: CupertinoScrollbarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoScrollbarConfig) {
      return new CupertinoScrollbar(config);
    }
  }
  
  //****** CupertinoSliverNavigationBar ******
  interface CupertinoSliverNavigationBarConfig {
    key?:Key;
    largeTitle?:Widget;
    leading?:Widget;
    automaticallyImplyLeading?:boolean;
    automaticallyImplyTitle?:boolean;
    previousPageTitle?:string;
    middle?:Widget;
    trailing?:Widget;
    border?:Border;
    backgroundColor?:Color;
    brightness?:Brightness;
    padding?:EdgeInsets;
    actionsForegroundColor?:Color;
    transitionBetweenRoutes?:boolean;
  }
  export class CupertinoSliverNavigationBar extends Widget {
    key?:Key;
    leading?:Widget;
    largeTitle?:Widget;
    automaticallyImplyLeading?:boolean;
    automaticallyImplyTitle?:boolean;
    previousPageTitle?:string;
    middle?:Widget;
    trailing?:Widget;
    border?:Border;
    backgroundColor?:Color;
    brightness?:Brightness;
    padding?:EdgeInsets;
    actionsForegroundColor?:Color;
    transitionBetweenRoutes?:boolean;
  
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
    constructor(config: CupertinoSliverNavigationBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoSliverNavigationBarConfig) {
      return new CupertinoSliverNavigationBar(config);
    }
  }
  
  //-------------- T -----------------
  //****** CupertinoTabBar ******
  interface CupertinoTabBarConfig {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:VoidCallbackNumber;
    currentIndex?:number;
    backgroundColor?:Color;
    activeColor?:Color;
    inactiveColor?:Color;
    iconSize?:number;
    border?:Border;
  }
  export class CupertinoTabBar extends Widget {
    key?:Key;
    items?:Array<BottomNavigationBarItem>;
    onTap?:VoidCallbackNumber;
    currentIndex?:number;
    backgroundColor?:Color;
    activeColor?:Color;
    inactiveColor?:Color;
    iconSize?:number;
    border?:Border;
    
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
    constructor(config: CupertinoTabBarConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoTabBarConfig) {
      return new CupertinoTabBar(config);
    }
  }
  //****** CupertinoTabController ******
  interface CupertinoTabControllerConfig {
    initialIndex?:number;
  }
  export class CupertinoTabController extends DartClass {
    initialIndex?:number;
  
    /**
     * @param config config: 
        {
          initialIndex?:number, 
        }
     */
    constructor(config: CupertinoTabControllerConfig){
      super();
      if(config!=null && config!=undefined){
        this.initialIndex = config.initialIndex;
      }
    }
  
    /**
     * @param config config: 
        {
          initialIndex?:number, 
        }
     */
    static new(config: CupertinoTabControllerConfig) {
      return new CupertinoTabController(config);
    }
  }
  
  //****** CupertinoTheme ******
  interface CupertinoThemeConfig {
    key?:Key;
    child:Widget;
    data:CupertinoThemeData;
  }
  export class CupertinoTheme extends Widget {
    key?:Key;
    child?:Widget;
    data?:CupertinoThemeData;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          child:Widget, 
          data:CupertinoThemeData, 
        }
     */
    constructor(config: CupertinoThemeConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoThemeConfig) {
      return new CupertinoTheme(config);
    }
  }
  
  //****** CupertinoTextThemeData ******
  interface CupertinoTextThemeDataConfig {
    primaryColor?:Color;
    textStyle?:TextStyle;
    actionTextStyle?:TextStyle;
    tabLabelTextStyle?:TextStyle;
    navTitleTextStyle?:TextStyle;
    navLargeTitleTextStyle?:TextStyle;
    navActionTextStyle?:TextStyle;
    pickerTextStyle?:TextStyle;
    dateTimePickerTextStyle?:TextStyle;
  }
  export class CupertinoTextThemeData extends DartClass {
    primaryColor?:Color;
    textStyle?:TextStyle;
    actionTextStyle?:TextStyle;
    tabLabelTextStyle?:TextStyle;
    navTitleTextStyle?:TextStyle;
    navLargeTitleTextStyle?:TextStyle;
    navActionTextStyle?:TextStyle;
    pickerTextStyle?:TextStyle;
    dateTimePickerTextStyle?:TextStyle;
  
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
    constructor(config: CupertinoTextThemeDataConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoTextThemeDataConfig) {
      return new CupertinoTextThemeData(config);
    }
  }
  
  //****** CupertinoThemeData ******
  interface CupertinoThemeDataConfig {
    primaryColor?:Color;
    brightness?:Brightness;
    primaryContrastingColor?:Color;
    textTheme?:CupertinoTextThemeData;
    barBackgroundColor?:Color;
    scaffoldBackgroundColor?:Color;
  }
  export class CupertinoThemeData extends DartClass {
    primaryColor?:Color;
    brightness?:Brightness;
    primaryContrastingColor?:Color;
    textTheme?:CupertinoTextThemeData;
    barBackgroundColor?:Color;
    scaffoldBackgroundColor?:Color;
  
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
    constructor(config: CupertinoThemeDataConfig){
      super();
      if(config!=null && config!=undefined){
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
    static new(config: CupertinoThemeDataConfig) {
      return new CupertinoThemeData(config);
    }
  }
  
  //#endregion


//#region ******** Base Api ********

//****** LoadingApi ******
interface LoadingApiInfoConfig {
    info:string;
    duration?:Duration;
    alignment?:Alignment;
    animation?:boolean;
}
interface LoadingApiProgressConfig {
    value:number;
    alignment?:Alignment;
}
export class LoadingApi extends DartClass {

    static instance:LoadingApi;

    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();

        //创建对应FLutter对象
        var argument = new JSCallConfig({
            mirrorID:this.mirrorID,
            className:this.className,
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new LoadingApi();
        }
        return this.instance;
      }

    invokeMirrorObjWithCallback(argument:JSCallConfig){
        return new Promise(function (resolve:any) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
                if (value != null && value !=undefined) {
                    resolve(value);

                } else {
                    resolve(null);
                }

            });
        }.bind(this));
    }

   
    /**
     * @param config config: 
      {
        info:string, 
        duration?:Duration, 
        alignment?:Alignment, 
      }
     */
    static showSuccess(config:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: LoadingApi.getInstance().className,
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
    static showError(config:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: LoadingApi.getInstance().className,
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
    static showInfo(config:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: LoadingApi.getInstance().className,
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
    static showToast(config:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: LoadingApi.getInstance().className,
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
    static show(config:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: LoadingApi.getInstance().className,
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
    static showProgress(config:LoadingApiProgressConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
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
    static dismiss(config?:LoadingApiInfoConfig){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "dismiss",
            args: config,
        }));
    }
}

//****** SpApi ******
interface SpApiGetConfig {
    key:string;
    defaultValue?:string|boolean|number;
}
interface SpApiSetConfig {
    key:string;
    value:string|boolean|number;
}
export class SpApi extends DartClass {

    static instance:SpApi;

    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();

        //创建对应FLutter对象
        var argument = new JSCallConfig({
            mirrorID:this.mirrorID,
            className:this.className,
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new SpApi();
        }
        return this.instance;
      }

    invokeMirrorObjWithCallback(argument:JSCallConfig){
        return new Promise(function (resolve:any) {
          JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
              if (value != null && value !=undefined) {
                  resolve(value);

              } else {
                  resolve(null);
              }

          });
      }.bind(this));
    }

    
    /**
     * @param config config: 
      {
        key:string;
        defaultValue?:boolean;
      }
     */
    static async getBool(config:SpApiGetConfig) {
      var v= await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "getBool",
          args: config,
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        defaultValue?:number;
      }
     */
    static async getInt(config:SpApiGetConfig) {
      var v= await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "getInt",
          args: config,
        })
      );
      return Number(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        defaultValue?:double;
      }
     */
    static async getDouble(config:SpApiGetConfig) {
      var v= await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "getDouble",
          args: config,
        })
      );
      return Number(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        defaultValue?:string;
      }
     */
    static async getString(config:SpApiGetConfig) {
      var v= await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "getString",
          args: config,
        })
      );
      return String(v);
    }

    static async clear() {
      var v = await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "clear",
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
      }
     */
    static async remove(config:SpApiGetConfig) {
      var v = await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
          mirrorID: SpApi.getInstance().mirrorID,
          className: SpApi.getInstance().className,
          funcName: "remove",
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        value:boolean;
      }
     */
    static async setBool(config:SpApiSetConfig) {
      var v = await  SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: SpApi.getInstance().className,
            funcName: "setBool",
            args: config,
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        value:number;
      }
     */
    static async setDouble(config:SpApiSetConfig) {
      var v = await  SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: SpApi.getInstance().className,
            funcName: "setDouble",
            args: config,
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        value:number;
      }
     */
    static async setInt(config:SpApiSetConfig) {
      var v = await SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: SpApi.getInstance().className,
            funcName: "setInt",
            args: config,
        })
      );
      return Boolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
        value:string;
      }
     */
    static async setString(config:SpApiSetConfig) {
      var v = await  SpApi.getInstance().invokeMirrorObjWithCallback(
        JSCallConfig.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: SpApi.getInstance().className,
            funcName: "setString",
            args: config,
        })
      );
    }
}


//****** ScreenInfo ******
export class ScreenInfo extends DartClass {

  // 设计稿屏幕宽度(PX)
  static uiWidthPx:number = 750;
  //设计稿屏幕宽度(PX)
  static uiHeightPx:number = 1334;
  //设计稿屏幕密度
  static uiDensity:number = 2.0;
  //设计稿屏幕宽度(DP)
  static uiWidth:number = 375.0;
  //设计稿屏幕宽度(DP)
  static uiHeight:number = 667.0;
  //当前设备宽度 dp
  static screenWidth:number = 375.0;
  // 当前设备高度 dp
  static screenHeight:number = 667.0;
  // 当前设备宽度 px
  static screenWidthPx:number = 750;
  // 当前设备高度 px
  static screenHeightPx:number = 1334.0;
  // 设备的像素密度
  static screenDensity:number = 2.0;
  // 状态栏高度 dp 刘海屏会更高
  static statusBarHeight:number = 20.0;
  //底部工具栏高度
  static bottomBarHeight:number = 0.0;
  //App栏高
  static appBarHeight:number = 0.0;
  //缩放比例(Dp)
  static dpRatio:number = 1.0;
  //缩放比例(PX)
  static pxRatio:number = 1.0;
  //字体缩放放比例
  static textScaleFactor:number=1.0;


  constructor() {
      super();
      //Mirror对象在构造函数创建 MirrorID
      this.createMirrorID();

      //创建对应FLutter对象
      var argument = new JSCallConfig({
          mirrorID:this.mirrorID,
          className:"ScreenInfo",
      });
      JSBridge.createMirrorObj(argument, this.mirrorID, this);
  }

  invokeMirrorObjWithCallback(argument:JSCallConfig){
      return new Promise(function (resolve:any) {
        JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
            if (value != null && value !=undefined) {
                resolve(value);

            } else {
                resolve(null);
            }

        });
    }.bind(this));
  }

  /*
  * 将Dp按比例转换成Dp
  * */
 static getValueWithDp(dp:number,isRatio:boolean=true) {
    return isRatio ? (ScreenInfo.dpRatio * dp) : dp;
  }

  /*
  * 将px按比例转换成Dp
  * */
  static getValueWithPx(px:number,isRatio:boolean=true) {
    return isRatio ? (ScreenInfo.pxRatio * px) : px;
  }

  //
  static async updateInfo() {
    var info = new ScreenInfo();
    var v= await info.invokeMirrorObjWithCallback(JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "updateInfo",
      }));
      if(v!=null && v!=undefined){
        var result= JSON.parse(String(v));
        if(result!=null && result!=undefined){
          ScreenInfo.appBarHeight = result["appBarHeight"] as number;
          ScreenInfo.bottomBarHeight = result["bottomBarHeight"] as number;
          ScreenInfo.dpRatio = result["dpRatio"] as number;
          ScreenInfo.pxRatio = result["pxRatio"] as number;
          ScreenInfo.screenDensity = result["screenDensity"] as number;
          ScreenInfo.screenHeight = result["screenHeight"] as number;
          ScreenInfo.screenHeightPx = result["screenHeightPx"] as number;
          ScreenInfo.screenWidth = result["screenWidth"] as number;
          ScreenInfo.screenWidthPx = result["screenWidthPx"] as number;
          ScreenInfo.statusBarHeight = result["statusBarHeight"] as number;
          ScreenInfo.uiDensity = result["uiDensity"] as number;
          ScreenInfo.uiHeight = result["uiHeight"] as number;
          ScreenInfo.uiWidth = result["uiWidth"] as number;
          ScreenInfo.uiWidthPx = result["uiWidthPx"] as number;
          ScreenInfo.uiHeightPx = result["uiHeightPx"] as number;
        }
      }
      //Log.log("ScreenInfo.updateInfo:"+String(v));
  }
}

//****** PackageInfo ******
export class PackageInfo extends DartClass {

  static appName:string = ""; //应用名称
  static packageName:string = ""; //包名称
  static version:string = ""; //版本号
  static buildNumber:string = ""; //小版本号

  constructor() {
      super();
      //Mirror对象在构造函数创建 MirrorID
      this.createMirrorID();

      //创建对应FLutter对象
      var argument = new JSCallConfig({
          mirrorID:this.mirrorID,
          className:this.className,
      });
      JSBridge.createMirrorObj(argument, this.mirrorID, this);
  }

  invokeMirrorObjWithCallback(argument:JSCallConfig){
      return new Promise(function (resolve:any) {
        JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
            if (value != null && value !=undefined) {
                resolve(value);

            } else {
                resolve(null);
            }

        });
    }.bind(this));
  }

  //
  static async updateInfo() {
    var info = new PackageInfo();
    var v= await info.invokeMirrorObjWithCallback(JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "updateInfo",
      }));
      if(v!=null && v!=undefined){
        var result= JSON.parse(String(v));
        if(result!=null && result!=undefined){
          PackageInfo.appName = result["appName"] as string;
          PackageInfo.buildNumber = result["buildNumber"] as string;
          PackageInfo.packageName = result["packageName"] as string;
          PackageInfo.version = result["version"] as string;
        }
      }
  }
}

//****** Wakelock ******
export class Wakelock extends DartClass {
  static instance:Wakelock;
  
  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    var argument = new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
    });
    JSBridge.createMirrorObj(argument, this.mirrorID, this);
  }

  
  invokeMirrorObjWithCallback(argument:JSCallConfig){
    return new Promise(function (resolve:any) {
      JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
          if (value != null && value !=undefined) {
              resolve(value);

          } else {
              resolve(null);
          }

      });
    }.bind(this));
  }
  
    //
    static async disable() {
      var info = new Wakelock();
      await info.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "disable",
        }));
    }

    //
    static async enable() {
      var info = new Wakelock();
      await info.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "enable",
        }));
    }

    //
    static async isEnabled() {
      var info = new Wakelock();
      var v= await info.invokeMirrorObjWithCallback(JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "isEnabled",
        }));
      return Boolean(v);
    }
}

//****** FocusScope ******
export class FocusScope extends DartClass {  
  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    var argument = new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
    });
    JSBridge.createMirrorObj(argument, this.mirrorID, this);
  }

  
  invokeMirrorObjWithCallback(argument:JSCallConfig){
    return new Promise(function (resolve:any) {
      JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
          if (value != null && value !=undefined) {
              resolve(value);

          } else {
              resolve(null);
          }

      });
    }.bind(this));
  }
  
  //
  static requestFocus() {
    var info = new FocusScope();
    info.invokeMirrorObjWithCallback(JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "requestFocus",
      }));
  }

  //
  static unfocus() {
    var info = new FocusScope();
    info.invokeMirrorObjWithCallback(JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "unfocus",
      }));
  }
}
  
//#endregion