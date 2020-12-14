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
//****** OnCallback ******
export type OnCallback = () => void;

//****** OnCallbackString ******
export type OnCallbackString = (value:string) => void;

//****** OnCallbackBoolean ******
export type OnCallbackBoolean = (value:boolean) => void;

//****** OnCallbackNumber ******
export type OnCallbackNumber = (value:number) => void;

/**
 * (context:BuildContext, index:number) => Widget
 */
export type IndexedWidgetBuilder = (context:BuildContext, index:number) => Widget;

//****** OnTapDownDetails ******
export type OnTapDown = (value:TapDownDetails) => void;

//****** OnTapUpDetails ******
export type OnTapUp = (value:TapUpDetails) => void;

//****** OnDragDownDetails ******
export type OnDragDown = (value:DragDownDetails) => void;

//****** OnDragStartDetails ******
export type OnDragStart = (value:DragStartDetails) => void;

//****** OnDragUpdateDetails ******
export type OnDragUpdate = (value:DragUpdateDetails) => void;

//****** OnDragEnd ******
export type OnDragEnd = (value:DragEndDetails) => void;

//****** OnScaleStartDetails ******
export type OnScaleStart = (value:ScaleStartDetails) => void;

//****** OnScaleUpdateDetails ******
export type OnScaleUpdate = (value:ScaleUpdateDetails) => void;

//****** OnScaleEnd ******
export type OnScaleEnd = (value:ScaleEndDetails) => void;

//****** TODO JSCallArgs ******
export interface ResponseModel {
  isSuccess?:boolean;
  info?:string;
  data?:any;
}

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
  createMirrorID() {
    this.mirrorID = JSWidgetMirrorMgr.getInstance().generateID(this);
    core.print("createMirrorID: mirrorID : " + this.mirrorID);
  }

  //返回值
  invokeMirrorObjWithCallback(args:JSCallConfig){
    return new Promise(function (resolve:any) {
      JSBridge.invokeMirrorObjWithCallback(args, function (value:any) {
          if (value != null && value !=undefined) {            
              resolve(value);
          } else {
              resolve(null);
          }
      });
    }.bind(this));
  }

  //创建绑定关系
  createMirrorObj(){
    //创建对应FLutter对象
    var argument = new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
    });
    JSBridge.createMirrorObj(argument, this.mirrorID, this);
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


//格式转换
export class Convert extends core.Object{
  static toBoolean(v:any){
    if(typeof v== "boolean"){
      return v;
    }
    if(typeof v == "string"){
      if(v=="true" || v=="1"){
        return true;
      }
    }
    
    return false;
  }
  static toNumber(v:any){
    if(typeof v== "number"){
      return v;
    }

    return Number(v);
  }

  static toString(v:any){
    if(typeof v == "string"){
      return v;
    }
    return String(v);
  }
}


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
  
      let basicMethodCall = new JSMethodCall("JSBridgeCreateMirrorObj", flutterCallConfig);
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
  
      let basicMethodCall = new JSMethodCall("JSBridgeInvokeMirrorObjWithCallback", flutterCallConfig);
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
  
      let bc = new BuildContext(widget);
      widget.buildContext = bc;
  
      this.rootWidget?.helper?.addChildWidget(widget);
  
      let app = this;
      this.buildRootWidget(widget);
    }
  
    ///JS侧入口API
    //当Flutter层 PageRoute(builder: (context) =>  被调用时，创建XSJSWidget，build后调用rebuild界面
    navigatorPush(widget:any, args?:any) {
  
      let bc = new BuildContext(widget);
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
  
    constructor(name:string,args?:Map<string,any>) {
      this.name = name;
      this.args = args;

    }
    encodeJSON() {
      return JSON.stringify({ "funcName": this.name, "args": this.args });
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
    
    constructor(widget:BaseWidget, parentBuildContext?:BuildContext) {
      this.widget = widget;
      this.widget.buildContext = this;
      this.parentBuildContext = parentBuildContext;
      this.inheritedInfo = {};
    }
  
    static inheritBuildContext(widget:BaseWidget, buildContext?:BuildContext) {
      var context = new BuildContext(widget, buildContext);
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
  
      let tempWidgetTree = new WidgetTree(
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
      /*if (tempWidgetTreeObjMap instanceof StatelessWidget) {
        tempWidgetTreeObjMap = tempWidgetTreeObjMap.build(this.widget.buildContext);
      }*/
  
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

    buildWidgetTreeSubWidget(widget:any) {
      Log.log("JSWidget buildWidgetTree ::" + this.widget.getWidgetInfo());
  
      let tempWidgetTreeObjMap;
      if (widget instanceof StatelessWidget) {
        tempWidgetTreeObjMap = widget.build(this.widget.buildContext);
      } else if (widget instanceof StatefulWidget) {
        tempWidgetTreeObjMap = widget.state.build(this.widget.buildContext);
      }else if (widget instanceof Widget) {
        tempWidgetTreeObjMap=widget;
      }
  
      this.preBuildJson(this.widget.buildingWidgetTree, tempWidgetTreeObjMap);
  
      return tempWidgetTreeObjMap;
    }
  
    preBuildJson(widgetTree?:WidgetTree, widgetTreeObjMap?:any) {
  
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
      this.widget.buildingWidgetTree = new WidgetTree("1");
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
        return jsWidget?.helper?.invokeCallback(buildWidgetDataSeq, callID, callConfig);
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
  
    constructor(buildWidgetDataSeq:string){
      this.buildWidgetDataSeq=buildWidgetDataSeq;
      this.childrenWidget = new Map();
      this.callbackID2fun =new Map();
      this.widgetTreeObjMap = null;
      this.ownerWidget = undefined;
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
  
  //****** DatePickerMode ******
  export enum DatePickerMode {
    day = "day",
    year = "year",
  }

  //****** DatePickerEntryMode ******
  export enum DatePickerEntryMode {
    calendar = "calendar",
    input = "input",
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

  //****** NavigationRailLabelType ******
  export enum NavigationRailLabelType {
    none = "none",
    selected = "selected",
    all = "all",
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

  //****** StepState ******
  export enum StepState {
    indexed = "indexed",
    editing = "editing",
    complete = "complete",
    disabled = "disabled",
    error = "error",
  }

  //****** StepperType ******
  export enum StepperType {
    vertical = "vertical",
    horizontal = "horizontal",
  }


  //****** SnackBarBehavior ******
  export enum SnackBarBehavior {
    fixed = "fixed",
    floating = "floating",
  }

  //****** ShowValueIndicator ******
  export enum ShowValueIndicator {
    onlyForDiscrete = "onlyForDiscrete",
    onlyForContinuous = "onlyForContinuous",
    always = "always",
    never = "passthrounevergh",
  }

  
  //****** ScrollViewKeyboardDismissBehavior ******
  export enum ScrollViewKeyboardDismissBehavior {
    manual = "manual",
    onDrag = "onDrag",
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

//#region AlignmentGeometry 
///AlignmentGeometry
export abstract class AlignmentGeometry extends DartClass {
  x?:number;
  start?:number;
  y?:number;
}

///Alignment
export class Alignment extends AlignmentGeometry {
  constructor(x:number, y:number){
    super();
    this.x = x;
    this.y = y;
  }
  
  static topLeft = new Alignment(-1.0, -1.0); 
  static topCenter = new Alignment(0.0, -1.0); 
  static topRight = new Alignment(1.0, -1.0); 
  static centerLeft = new Alignment(-1.0, 0.0); 
  static center = new Alignment(0.0, 0.0); 
  static centerRight = new Alignment(1.0, 0.0);
  static bottomLeft = new Alignment(-1.0, 1.0);
  static bottomCenter = new Alignment(0.0, 1.0);
  static bottomRight = new Alignment(1.0, 1.0); 
} 
  
///AlignmentDirectional
export class AlignmentDirectional extends AlignmentGeometry {
  constructor(start:number, y:number){
    super();
    this.start = start;
    this.y = y;
  }

  static topStart = new AlignmentDirectional(-1.0, -1.0); 
  static topCenter = new AlignmentDirectional(0.0, -1.0); 
  static topEnd = new AlignmentDirectional(1.0, -1.0); 

  static centerStart = new AlignmentDirectional(-1.0, 0.0); 
  static center = new AlignmentDirectional(0.0, 0.0); 
  static centerEnd = new AlignmentDirectional(1.0, 0.0);

  static bottomStart = new AlignmentDirectional(-1.0, 1.0);
  static bottomCenter =new AlignmentDirectional(0.0, 1.0);
  static bottomEnd = new AlignmentDirectional(1.0, 1.0); 
}

//#endregion

//#region AssetBundle 
//****** AssetBundle ******
export class AssetBundle extends DartClass {

}

//****** PlatformAssetBundle ******
export class PlatformAssetBundle extends AssetBundle {
  constructor(){
    super();
  }
}

//****** NetworkAssetBundle ******
export class NetworkAssetBundle extends AssetBundle {
  baseUrl?:Uri;
  constructor(baseUrl:Uri){
    super();
    this.baseUrl = baseUrl;
  }
}

//#endregion

//#endregion


//#region ------- B ------- 

//#region BorderSide 
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

  static none() {
    let v = new BorderSide();
    v.constructorName = "none";
    return v;
  }
}
//#endregion

//#region BorderRadiusGeometry 
//****** BorderRadiusGeometry ******
export abstract class BorderRadiusGeometry extends DartClass {}

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
export class BorderRadius  extends BorderRadiusGeometry {
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
export class BorderRadiusDirectional  extends BorderRadiusGeometry {
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

//#endregion


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
}

//#endregion


//#region ------- C -------

//#region ------- Constraints -------
//****** Constraints ******
export abstract class Constraints extends DartClass {

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
  static box (config?: BoxConstraintsConfig){
    return new BoxConstraints(config);
  }
}

//****** BoxConstraints ******
interface BoxConstraintsConfig {
  minWidth?:number;
  maxWidth?:number;
  minHeight?:number;
  maxHeight?:number;
}
export class BoxConstraints extends Constraints {
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
}

//#endregion

//#region Color
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
//#endregion

//#region Colors
export class Colors extends Color{
  static transparent = new Color(0x00000000);
  static black = new Color(0xff000000);
  static black87 = new Color(0xdd000000);
  static black54 = new Color(0x8a000000);
  static black45 = new Color(0x73000000);
  static black38 = new Color(0x61000000);
  static black26 = new Color(0x42000000);
  static black12 = new Color(0x1f000000);
  static white = new Color(0xffffffff);
  static white70 = new Color(0xb3ffffff);
  static white60 = new Color(0x99FFFFFF);
  static white54 = new Color(0x8affffff);
  static white38 = new Color(0x62FFFFFF);
  static white30 = new Color(0x4dffffff);
  static white24 = new Color(0x3dffffff);
  static white12 = new Color(0x1fffffff);
  static white10 = new Color(0x1affffff);
  static red = new Color(0xFFF44336);
  static redAccent = new Color(0xFFFF5252);
  static pink = new Color(0xFFE91E63);
  static pinkAccent = new Color(0xFFFF4081);
  static purple = new Color(0xFF9C27B0);
  static purpleAccent = new Color(0xFFE040FB);
  static deepPurple = new Color(0xFF673AB7);
  static deepPurpleAccent = new Color(0xFF7C4DFF);
  static indigo = new Color(0xFF3F51B5);
  static indigoAccent = new Color(0xFF536DFE);
  static blue = new Color(0xFF2196F3);
  static blueAccent = new Color(0xFF448AFF);
  static lightBlue = new Color(0xFF03A9F4);
  static lightBlueAccent = new Color(0xFF40C4FF);
  static cyan = new Color(0xFF00BCD4);
  static cyanAccent = new Color(0xFF18FFFF);
  static teal = new Color(0xff009688);
  static tealAccent = new Color(0xFF64FFDA);
  static green = new Color(0xFF4CAF50);
  static greenAccent = new Color(0xFF69F0AE);
  static lightGreen = new Color(0xFF8BC34A);
  static lightGreenAccent = new Color(0xFFB2FF59);
  static lime = new Color(0xFFCDDC39);
  static limeAccent = new Color(0xFFEEFF41);
  static yellow = new Color(0xFFFFEB3B);
  static yellowAccent = new Color(0xFFFFFF00);
  static amber = new Color(0xFFFFC107);
  static amberAccent = new Color(0xFFFFD740);
  static orange = new Color(0xFFFF9800);
  static orangeAccent = new Color(0xFFFFAB40);
  static deepOrange = new Color(0xFFFF5722);
  static deepOrangeAccent = new Color(0xFFFF6E40);
  static brown = new Color(0xFF795548);
  static grey = new Color(0xFF9E9E9E);
  static blueGrey = new Color(0xFF607D8B);
}
//#endregion

//#region ColorFilter
export class ColorFilter extends DartClass {
  color?:Color;
  blendMode?:BlendMode;

  constructor(color:Color, blendMode:BlendMode){
    super();
    this.color = color;
    this.blendMode =blendMode;
  }

  static mode(color:Color, blendMode:BlendMode){
    let v = new ColorFilter(color,blendMode);
    v.constructorName = "mode";
    return v;
  }
}
//#endregion



//#endregion


//#region ------- D -------

//#region ****** DragDetails ******
//****** DragDownDetails ******
interface DragDownDetailsConfig {
  globalPosition?:Offset;
  localPosition?:Offset;
}
export class DragDownDetails extends DartClass {
  globalPosition?:Offset;
  localPosition?:Offset;

  /**
   * @param config config: 
      {
        globalPosition?:Offset,
        localPosition?:Offset,
      }
   */
  constructor(config?: DragDownDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.globalPosition = config.globalPosition;
      this.localPosition = config.localPosition;
    }
  }
}

//****** DragStartDetails ******
interface DragStartDetailsConfig {
  globalPosition?:Offset;
  localPosition?:Offset;
  sourceTimeStamp?:Duration;
}
export class DragStartDetails extends DartClass {
  globalPosition?:Offset;
  localPosition?:Offset;
  sourceTimeStamp?:Duration;

  /**
   * @param config config: 
      {
        globalPosition?:Offset,
        localPosition?:Offset,
        sourceTimeStamp?:Duration,
      }
   */
  constructor(config?: DragStartDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.globalPosition = config.globalPosition;
      this.localPosition = config.localPosition;
      this.sourceTimeStamp = config.sourceTimeStamp;
    }
  }
}

//****** DragUpdateDetails ******
interface DragUpdateDetailsConfig {
  globalPosition?:Offset;
  localPosition?:Offset;
  sourceTimeStamp?:Duration;
  delta?:Offset;
  primaryDelta?:number;
}
export class DragUpdateDetails extends DartClass {
  globalPosition?:Offset;
  localPosition?:Offset;
  sourceTimeStamp?:Duration;
  delta?:Offset;
  primaryDelta?:number;

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
  constructor(config?: DragUpdateDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.globalPosition = config.globalPosition;
      this.localPosition = config.localPosition;
      this.sourceTimeStamp = config.sourceTimeStamp;
      this.delta = config.delta;
      this.primaryDelta = config.primaryDelta;
    }
  }
}

//****** DragEndDetails ******
interface DragEndDetailsConfig {
  velocity?:Velocity;
  primaryVelocity?:number;
}
export class DragEndDetails extends DartClass {
  velocity?:Velocity;
  primaryVelocity?:number;

  /**
   * @param config config: 
      {
        velocity?:Velocity, 
        primaryVelocity?:number, 
      }
   */
  constructor(config?: DragEndDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.velocity = config.velocity;
      this.primaryVelocity = config.primaryVelocity;
    }
  }
}
//#endregion

//#region ****** Duration ******
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
}
//#endregion

//#region ****** Decoration ******
export abstract class Decoration extends DartClass{

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
  static box(config?: BoxDecorationConfig){
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
  static flutterLogo(config?: FlutterLogoDecorationConfig){
    return new FlutterLogoDecoration(config);
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
export class BoxDecoration extends Decoration {
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
}

//****** FlutterLogoDecoration ******
interface FlutterLogoDecorationConfig {
  textColor?:Color;
  style?:FlutterLogoStyle;
  margin?:EdgeInsets;
}
export class FlutterLogoDecoration extends Decoration {
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
} 


//#endregion

//#endregion


//#region ------- E -------

//#region ------- EdgeInsetsGeometry -------
//EdgeInsetsGeometry
export abstract class EdgeInsetsGeometry extends DartClass {}

//EdgeInsets
interface EdgeInsetsConfig {
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  value?:number;
  vertical?:number;
  horizontal?:number;
}
export class EdgeInsets extends EdgeInsetsGeometry {
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

//EdgeInsetsDirectional
interface EdgeInsetsDirectionalConfig {
  start?:number;
  top?:number;
  end?:number;
  bottom?:number;
}
export class EdgeInsetsDirectional extends EdgeInsetsGeometry {
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

//#endregion


//#region ------- F -------

//****** Future ******
export class Future extends DartClass{
  /**
   * 延时处理
   * @param duration 
   * @param onBack 
   */
  static delayed(duration:Duration,onBack?:OnCallback){
    dart_sdk.async.Future.delayed(duration,onBack);
  }
  
  /**
   * 定时处理
   * @param duration 
   * @param onBack 
   */
  static timer(duration:Duration,onBack?:OnCallback){
    dart_sdk.async.Timer.new(duration,onBack);
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
  static topLeft = new FractionalOffset(0.0, 0.0); 
  static topCenter = new FractionalOffset(0.5, 0.0); 
  static topRight = new FractionalOffset(1.0, 0.0); 

  static centerLeft = new FractionalOffset(0.0, 0.5); 
  static center = new FractionalOffset(0.5, 0.5); 
  static centerRight = new FractionalOffset(1.0, 0.5);

  static bottomLeft = new FractionalOffset(0.0, 1.0);
  static bottomCenter = new FractionalOffset(0.5, 1.0);
  static bottomRight = new FractionalOffset(1.0, 1.0); 

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

//#region ****** GradientTransform ******
export abstract class GradientTransform extends DartClass {

  static rotation(radians:number) {
    return new GradientRotation(radians);
  }
}

export class GradientRotation extends GradientTransform {
  radians:number;

  /**
   * 
   * @param radians 
   */
  constructor(radians:number){
    super();
    this.radians = radians;
  }
} 
//#endregion


//#region ****** Gradient ******
export abstract class Gradient extends DartClass {

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
  static linear(config?: LinearGradientConfig){
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
  static radial(config?: RadialGradientConfig){
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
  static sweep(config?: SweepGradientConfig){
    return new SweepGradient(config);
  }

}

//****** LinearGradient ******
interface LinearGradientConfig {
  
  colors:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;

  begin?:Alignment;
  end?:Alignment;
}
export class LinearGradient extends Gradient {

  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;

  begin?:Alignment;
  end?:Alignment;

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
  constructor(config?: LinearGradientConfig){
    super();
    if(config!=null && config!=undefined){
      this.begin = config.begin;
      this.end = config.end;
      this.colors = config.colors;
      this.stops = config.stops;
      this.tileMode = config.tileMode;
      this.transform = config.transform;
    }
  }
}

//****** RadialGradient ******
interface RadialGradientConfig {
  
  center?:Alignment;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;

  radius?:number;
  focal?:Alignment;
  focalRadius?:number;
}
export class RadialGradient extends Gradient {

  center?:Alignment;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;

  radius?:number;
  focal?:Alignment;
  focalRadius?:number;


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
  constructor(config?: RadialGradientConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** SweepGradient ******
interface SweepGradientConfig {
  center?:Alignment;
  startAngle?:number;
  endAngle?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;
}
export class SweepGradient extends Gradient {

  center?:Alignment;
  startAngle?:number;
  endAngle?:number;
  colors?:Array<Color>;
  stops?:Array<number>;
  tileMode?:TileMode;
  transform?:GradientTransform;

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
  constructor(config?: SweepGradientConfig){
    super();
    if(config!=null && config!=undefined){
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


//#endregion


//#endregion


//#region ------- I -------

//****** ImageFilter ******
interface ImageFilterConfig {
  sigmaX?:number;
  sigmaY?:number;
}
export class ImageFilter extends DartClass {
  sigmaX?:number;
  sigmaY?:number;

  constructor(config?:ImageFilterConfig){
    super();
    if(config!=null && config!=undefined){
      this.sigmaX = config.sigmaX;
      this.sigmaY = config.sigmaY;
    }
  }

  static blur(config?:ImageFilterConfig) {
    let v = new ImageFilter();
    v.constructorName = "blur";
    if(config!=null && config!=undefined){
      v.sigmaX = config.sigmaX;
      v.sigmaY = config.sigmaY;
    }
    return v;
  }
}


//#region ImageProvider
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
  imageName?:string;
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
        imageName:string, 
        scale?:number, 
        bundle?:BaseAssetBundle, 
        packageName?:string,
      }
   */
  static exactAsset(imageName:string,config?: ImageProviderConfig) {
    var v = new ImageProvider();
    v.constructorName = "exactAsset";
    v.imageName = imageName;
    if(config!=null && config!=undefined){      
      v.scale = config.scale;
      v.bundle = config.bundle;
      v.packageName = config.packageName;
    }
    return v;
  }
}
//#endregion


//****** IconData ******
export class IconData extends DartClass {
  icon:string;

  constructor(icon:string){
    super();
    this.icon = icon;
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

//#region ****** Key ******
export abstract class Key extends DartClass {
  value?:string;
  debugLabel?:string;
}

export class ValueKey extends Key {
  value:string

  constructor(value:string){
    super();
    this.value = value;
  }
}

export class UniqueKey extends Key {

  constructor(){
    super();
  }
}

export class GlobalKey extends Key {
  debugLabel?:string;
  constructor(){
    super();
  }
}

export class BindKey extends Key {
  constructor(){
    super();
    this.createMirrorID();
  }
}



//#endregion




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

  static identity() {
    return new Matrix4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
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

//#endregion


//#region ------- N -------

//#region NotchedShape
//****** NotchedShape ******
export abstract class NotchedShape extends DartClass {}

//****** CircularNotchedRectangle ******
export class CircularNotchedRectangle extends NotchedShape {
  constructor(){
    super();
  }
}

//****** AutomaticNotchedShape ******
export class AutomaticNotchedShape extends NotchedShape {
  host:ShapeBorder;
  guest?:ShapeBorder;

  constructor(host:ShapeBorder, guest?:ShapeBorder){
    super();
    this.host = host;
    this.guest = guest;
  }
}

//#endregion

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

//#endregion

//#region ------- O -------
//****** PageController ******
interface PageControllerConfig {
  initialPage?:number;
  keepPage?:boolean;
  viewportFraction?:number;
}

interface PageControllerJumpToPageConfig {
  page:number;
}

interface PageControllerAnimateToPageConfig {
  page:number;
  duration:Duration;
  curve:Curve;
}

interface PageControllerToPageConfig {
  duration:Duration;
  curve:Curve;
}

export class PageController extends DartClass {
  initialPage?:number;
  keepPage?:boolean;
  viewportFraction?:number;

  /**
   * @param config config: 
      {
        page:number,
        duration:Duration,
        curve:Curve,
      }
   */
  animateToPage(config: PageControllerAnimateToPageConfig) {
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"animateToPage",
        args:config
      })
    );
  }

  /**
   * @param config config: 
      {
        duration:Duration,
        curve:Curve,
      }
   */
  nextPage(config: PageControllerToPageConfig) {
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"nextPage",
        args:config
      })
    );
  }

  /**
   * @param config config: 
      {
        duration:Duration,
        curve:Curve,
      }
   */
  previousPage(config: PageControllerToPageConfig) {
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"previousPage",
        args:config
      })
    );
  }


  /**
   * @param config config: 
      {
        page:number,
      }
   */
  jumpToPage(config:PageControllerJumpToPageConfig) {  
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"jumpToPage",
        args:config
      })
    );
  }  


  /**
   * @param config config: 
      {
        initialPage?:number, 
        keepPage?:boolean, 
        viewportFraction?:number, 
      }
   */
  constructor(config: PageControllerConfig){
    super();
    this.createMirrorID();
    if(config!=null && config!=undefined){
      this.initialPage = this.initialPage;
      this.keepPage = this.keepPage;
      this.viewportFraction = this.viewportFraction;
    }
  }

  

  //偏移量
  async page() {
      var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "page",
        }));

      return Convert.toNumber(v);
  }
}

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
  
//****** RegExp ******
interface RegExpConfig {
  multiLine?:boolean; 
  caseSensitive?:boolean;
  unicode?:boolean; 
  dotAll?:boolean;
}
export class RegExp extends DartClass {
  source:string;
  multiLine?:boolean; 
  caseSensitive?:boolean;
  unicode?:boolean; 
  dotAll?:boolean;

  /**
   * @param config config: 
      {
        multiLine?:boolean, 
        caseSensitive?:boolean, 
        unicode?:boolean, 
        dotAll?:boolean, 
      }
   */
  constructor(source:string,config?: RegExpConfig){
    super();
    this.source = source;
    if(config!=null && config!=undefined){
      this.multiLine = config.multiLine;
      this.caseSensitive = config.caseSensitive;
      this.unicode = config.unicode;
      this.dotAll = config.dotAll;
    }
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
  
}
  
//#endregion


//#region ------- S -------

//#region Shader 
export abstract class Shader extends DartClass{

  /**
   * Shader.image = new ImageShader(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4)
   * @param image 
   * @param tmx 
   * @param tmy 
   * @param matrix4 
   */
  static image(image:ImageProvider,tmx:TileMode,tmy:TileMode,matrix4:Matrix4){
    return new ImageShader(image,tmx,tmy,matrix4);
  }

}

//****** ImageShader ******
export class ImageShader extends Shader {
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
}

//#endregion

//#region ScaleDetails
//****** ScaleStartDetails ******
interface ScaleStartDetailsConfig {
  focalPoint?:Offset;
  localFocalPoint?:Offset;
}
export class ScaleStartDetails extends DartClass {
  focalPoint?:Offset;
  localFocalPoint?:Offset;

  /**
   * @param config config: 
      {
        focalPoint?:Offset,
        localFocalPoint?:Offset,
      }
   */
  constructor(config?: ScaleStartDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.focalPoint = config.focalPoint;
      this.localFocalPoint = config.localFocalPoint;
    }
  }
}


//****** ScaleUpdateDetails ******
interface ScaleUpdateDetailsConfig {
  focalPoint?:Offset;
  localFocalPoint?:Offset;
  scale?:number;
  horizontalScale?:number;
  verticalScale?:number;
  rotation?:number;
}
export class ScaleUpdateDetails extends DartClass {
  focalPoint?:Offset;
  localFocalPoint?:Offset;
  scale?:number;
  horizontalScale?:number;
  verticalScale?:number;
  rotation?:number;

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
  constructor(config?: ScaleUpdateDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.focalPoint = config.focalPoint;
      this.localFocalPoint = config.localFocalPoint;
      this.scale = config.scale;
      this.horizontalScale = config.horizontalScale;
      this.verticalScale = config.verticalScale;
      this.rotation = config.rotation;
    }
  }
}

//****** ScaleEndDetails ******
interface ScaleEndDetailsConfig {
  velocity?:Velocity;
}
export class ScaleEndDetails extends DartClass {
  velocity?:Velocity;

  /**
   * @param config config: 
      {
        velocity?:Velocity, 
      }
   */
  constructor(config?: ScaleEndDetailsConfig){
    super();
    if(config!=null && config!=undefined){
      this.velocity = config.velocity;
    }
  }
}

//#endregion
  
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

  static light =new SystemUiOverlayStyle({
    systemNavigationBarColor:new Color(0xff000000),
    systemNavigationBarIconBrightness:Brightness.light,
    statusBarBrightness:Brightness.light,
    statusBarIconBrightness:Brightness.dark
  });

  static dark = new SystemUiOverlayStyle({
    systemNavigationBarColor:new Color(0xff000000),
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
}
  
 
//****** ScrollController ******
interface ScrollControllerConfig {
  initialScrollOffset?:number;
  keepScrollOffset?:boolean;
  debugLabel?:string;
}

interface ScrollControllerJumpToConfig {
  value:number;
}

interface ScrollControllerAnimateToConfig {
  offset:number;
  duration:Duration;
  curve:Curve;
}

export class ScrollController extends DartClass {
  initialScrollOffset?:number;
  keepScrollOffset?:boolean;
  debugLabel?:string;

  /**
   * @param config config: 
      {
        offset:number,
        duration:Duration,
        curve:Curve,
      }
   */
  animateTo(config: ScrollControllerAnimateToConfig) {
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"animateTo",
        args:config
      })
    );
  }

  /**
   * @param config config: 
      {
        value:number,
      }
   */
  jumpTo(config:ScrollControllerJumpToConfig) {  
    JSFramework.invokeFlutterFunction(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"jumpTo",
        args:config
      })
    );
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

  

  //偏移量
  async offset() {
      var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "offset",
        }));

      return Convert.toNumber(v);
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
}


//#region ------- ScrollPhysics -------
//****** ScrollPhysics ******
interface ScrollPhysicsConfig {
  parent?:ScrollPhysics;
}

export class ScrollPhysics extends DartClass {
  parent?:ScrollPhysics;


  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super();
    if(config!=null && config!=undefined){
      this.parent = config.parent;
    }
  }
}

//****** AlwaysScrollableScrollPhysics ******
export class AlwaysScrollableScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** FixedExtentScrollPhysics ******
export class FixedExtentScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** PageScrollPhysics ******
export class PageScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** BouncingScrollPhysics ******
export class BouncingScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** ClampingScrollPhysics ******
export class ClampingScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** NeverScrollableScrollPhysics ******
export class NeverScrollableScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}

//****** RangeMaintainingScrollPhysics ******
export class RangeMaintainingScrollPhysics extends ScrollPhysics {

  /**
    * @param config config: 
      {
        parent?:ScrollPhysics,
      }
    */
  constructor(config?: ScrollPhysicsConfig){
    super(config);
  }
}
//#endregion

//#region ------- ShapeBorder -------
export abstract class ShapeBorder extends DartClass {}

//#region ****** BoxBorder ******
//****** BoxBorder ******
export abstract class BoxBorder extends ShapeBorder {}

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
export class Border extends BoxBorder {
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
export class BorderDirectional extends BoxBorder {
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
}

//#endregion

//#region ****** OutlinedBorder ******
export abstract class OutlinedBorder extends ShapeBorder {}

interface OutlinedBorderConfig {
  side?:BorderSide;
  borderRadius?:BorderRadiusGeometry;
}

export class CircleBorder extends OutlinedBorder {
  side?:BorderSide;

  /**
    * @param config config: 
      {
        side?:BorderSide,
      }
    */
   constructor(config?: OutlinedBorderConfig){
    super();
    if(config!=null && config!=undefined){
      this.side = config.side;
    }
  }
}

export class BeveledRectangleBorder extends OutlinedBorder {
  side?:BorderSide;
  borderRadius?:BorderRadiusGeometry;

  /**
    * @param config config: 
      {
        side?:BorderSide,
        borderRadius?:BorderRadiusGeometry, 
      }
    */
   constructor(config?: OutlinedBorderConfig){
    super();
    if(config!=null && config!=undefined){
      this.side = config.side;
      this.borderRadius = config.borderRadius;
    }
  }
}

export class ContinuousRectangleBorder extends OutlinedBorder {
  side?:BorderSide;
  borderRadius?:BorderRadiusGeometry;

  /**
    * @param config config: 
      {
        side?:BorderSide,
        borderRadius?:BorderRadiusGeometry, 
      }
    */
   constructor(config?: OutlinedBorderConfig){
    super();
    if(config!=null && config!=undefined){
      this.side = config.side;
      this.borderRadius = config.borderRadius;
    }
  }
}

export class RoundedRectangleBorder extends OutlinedBorder {
  side?:BorderSide;
  borderRadius?:BorderRadiusGeometry;

  /**
    * @param config config: 
      {
        side?:BorderSide,
        borderRadius?:BorderRadiusGeometry, 
      }
    */
   constructor(config?: OutlinedBorderConfig){
    super();
    if(config!=null && config!=undefined){
      this.side = config.side;
      this.borderRadius = config.borderRadius;
    }
  }
}

export class StadiumBorder extends OutlinedBorder {
  side?:BorderSide;

  /**
    * @param config config: 
      {
        side?:BorderSide,
      }
    */
   constructor(config?: OutlinedBorderConfig){
    super();
    if(config!=null && config!=undefined){
      this.side = config.side;
    }
  }
}
//#endregion

//#region ****** InputBorder ******
export abstract class InputBorder extends ShapeBorder {
  static none() {
    var v = new _NoInputBorder();
    v.className = "InputBorder";
    v.constructorName= "none";
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
  static underline(config?: InputBorderConfig) {
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
  static outline(config?: InputBorderConfig) {
    return new OutlineInputBorder(config);
  }

}

class _NoInputBorder extends InputBorder{}

interface InputBorderConfig {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  gapPadding?:number;
}

export class UnderlineInputBorder extends InputBorder {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  
  /**
    * @param config config: 
      {
        borderSide?:BorderSide, 
        borderRadius?:BorderRadius,
      }
    */
   constructor(config?: InputBorderConfig){
    super();
    if(config!=null && config!=undefined){
      if(config!=null && config!=undefined){
        this.borderRadius = config.borderRadius;
        this.borderSide = config.borderSide;
      }
    }
  }
}

export class OutlineInputBorder extends InputBorder {
  borderSide?:BorderSide;
  borderRadius?:BorderRadius;
  gapPadding?:number;
  
  /**
    * @param config config: 
      {
        borderSide?:BorderSide, 
        borderRadius?:BorderRadius,
        gapPadding?:number,
      }
    */
   constructor(config?: InputBorderConfig){
    super();
    if(config!=null && config!=undefined){
      if(config!=null && config!=undefined){
        this.borderRadius = config.borderRadius;
        this.borderSide = config.borderSide;
        this.gapPadding = config.gapPadding;
      }
    }
  }
}
//#endregion

//#endregion

//#endregion


//#region ------- T -------




//****** TextAlignVertical ******
export class TextAlignVertical extends DartClass {
  y?:number;

  constructor(y:number){
    super();
    this.y = y;
  }
  

  static top = new TextAlignVertical(-1.0); 
  static center = new TextAlignVertical(0.0); 
  static bottom = new TextAlignVertical(1.0); 
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
}

//****** TableBorder ******
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

//#region ****** TableColumnWidth ******
export abstract class TableColumnWidth extends DartClass{

  /**
   * TableColumnWidth.intrinsic = new IntrinsicColumnWidth(flex?:number);
  */
  static intrinsic(flex?:number) {
    return new IntrinsicColumnWidth(flex);
  }

  /**
   * TableColumnWidth.fixed = new FixedColumnWidth(value:number);
  */
  static fixed(value:number) {
    return new FixedColumnWidth(value);
  }

  /**
   * TableColumnWidth.fraction = new FractionColumnWidth(value:number);
  */
  static fraction(value:number) {
    return new FractionColumnWidth(value);
  }

  /**
   * TableColumnWidth.max = new MaxColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
  */
  static max(a:TableColumnWidth, b:TableColumnWidth) {
    return new MaxColumnWidth(a,b);
  }

  /**
   * TableColumnWidth.max = new MinColumnWidth(a:TableColumnWidth, b:TableColumnWidth);
  */
  static min(a:TableColumnWidth, b:TableColumnWidth) {
    return new MinColumnWidth(a,b);
  }
}

export class IntrinsicColumnWidth extends TableColumnWidth {
  flex?:number;
  
   constructor(flex?:number){
    super();
    this.flex = flex;
  }
}

export class FixedColumnWidth extends TableColumnWidth {
  value:number;
  
   constructor(value:number){
    super();
    this.value = value;
  }
}

export class FractionColumnWidth extends TableColumnWidth {
  value:number;
  
   constructor(value:number){
    super();
    this.value = value;
  }

}

export class FlexColumnWidth extends TableColumnWidth {
  value?:number;
  
   constructor(value?:number){
    super();
    this.value = value;
  }
}

export class MaxColumnWidth extends TableColumnWidth {
  a:TableColumnWidth;
  b:TableColumnWidth;
  
   constructor(a:TableColumnWidth, b:TableColumnWidth){
    super();
    this.a = a;
    this.b = b;
  }
}

export class MinColumnWidth extends TableColumnWidth {
  a:TableColumnWidth;
  b:TableColumnWidth;
  
   constructor(a:TableColumnWidth, b:TableColumnWidth){
    super();
    this.a = a;
    this.b = b;
  }
}


//#endregion


//****** TabController ******
interface TabControllerConfig {
  initialIndex?:number;
  length?:number;
}
interface TabControlleAnimateToConfig {
  value?:number;
  duration:Duration,
  curve:Curve,
}

export class TabController extends DartClass {
  initialIndex?:number;
  length?:number;

  /**
   * @param config config: 
    {
      initialIndex?:number,
      length?:number,
    }
   */
  constructor(config?: TabControllerConfig){
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();
    if(config!=null && config!=undefined){
      this.initialIndex = config.initialIndex;
      this.length = config.length;
    }
  }


  /**
   * @param config config: 
      {
        value:number,
        duration:Duration,
        curve:Curve,
      }
   */
  animateTo(config: TabControlleAnimateToConfig) {
    this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"animateTo",
        args:config
      })
    );
  }

  //偏移量
  async offset() {
    var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "offset",
      }));

    return Convert.toNumber(v);
  }
}


//****** TODO  TextEditingController ******
export class TextEditingController extends DartClass {
  text?:string;

  constructor(text?:string){
    super();
    this.text=text;

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
    var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "getText",
      }));
    return String(v);
  }

  //设置文本值
  async setText(text:string) {
    this.invokeMirrorObjWithCallback(new JSCallConfig({
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
}


//****** TextInputType ******
interface TextInputTypeConfig {
  signed?:boolean;
  decimal?:boolean;
}
export class TextInputType extends DartClass {
  
  signed?:boolean;
  decimal?:boolean;


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
}
  
//#region ****** TextInputFormatter ******
export abstract class TextInputFormatter extends DartClass{

  /**
   * TextInputFormatter.lengthLimiting = new LengthLimitingTextInputFormatter(maxLength?:number);
  */
  static lengthLimiting(maxLength?:number) {
    return new LengthLimitingTextInputFormatter(maxLength);
  }

  /**
   * TextInputFormatter.filtering = new FilteringTextInputFormatter(allow:boolean,filterPattern:RegExp,replacementString?:string);
  */
  static filtering(allow:boolean,filterPattern:RegExp,replacementString?:string) {
    return new FilteringTextInputFormatter(allow,filterPattern,replacementString);
  }

  /**
   * TextInputFormatter.allow = FilteringTextInputFormatter.allow(filterPattern:RegExp,replacementString?:string);
  */
  static allow(filterPattern:RegExp,replacementString?:string) {
    return FilteringTextInputFormatter.allow(filterPattern,replacementString);
  }

  /**
   * TextInputFormatter.deny = FilteringTextInputFormatter.deny(filterPattern:RegExp,replacementString?:string);
  */
  static deny(filterPattern:RegExp,replacementString?:string) {
    return FilteringTextInputFormatter.deny(filterPattern,replacementString);
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
  static mask(mask:string,initialText?:string,filter?:Map<string,RegExp>) {
    return new MaskTextInputFormatter(mask,initialText,filter);
  }

}

export class LengthLimitingTextInputFormatter extends TextInputFormatter {
  maxLength?:number;
  
   constructor(maxLength?:number){
    super();
    this.maxLength = maxLength;
  }
}

export class FilteringTextInputFormatter extends TextInputFormatter {
  filterPattern?:RegExp;
  allow?:boolean;
  replacementString?:string;

  constructor(allow?:boolean,filterPattern?:RegExp,replacementString?:string){
    super();
    this.allow = allow;
    this.filterPattern = filterPattern;
    this.replacementString =replacementString;

  }

  static allow(filterPattern:RegExp,replacementString?:string){
    return new FilteringTextInputFormatter(true,filterPattern,replacementString);
  }

  static deny(filterPattern:RegExp,replacementString?:string){
    return new FilteringTextInputFormatter(false,filterPattern,replacementString);
  }

  static singleLineFormatter(){
    var v = new FilteringTextInputFormatter();
    v.constructorName = "singleLineFormatter";
    return v;
  }

  static digitsOnly(){
    var v = new FilteringTextInputFormatter();
    v.constructorName = "digitsOnly";
    return v;
  }

}

export class MaskTextInputFormatter extends TextInputFormatter {
  mask?:string;
  initialText?:string;
  filter?:Map<string,RegExp>;
  
   constructor(mask:string,initialText?:string,filter?:Map<string,RegExp>){
    super();
    this.mask = mask;
    this.filter = filter;
    this.initialText =initialText;

   }
}

//#endregion

  
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
  }
  
  //****** Uint8List ******
  export class Uint8List extends DartClass {
    length?:number;
    elements?:Array<number>;
  
    constructor(length?:number){
      super();
      this.length = length;
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
  

  static comfortable = new VisualDensity({horizontal: -1.0, vertical: -1.0});
  static compact = new VisualDensity({horizontal: -2.0, vertical: -2.0});
  static standard = new VisualDensity();
} 

//****** Velocity ******
interface VelocityConfig {
  pixelsPerSecond?:Offset;
}
export class Velocity extends DartClass {
  pixelsPerSecond?:Offset;

  /**
   * @param config config: 
    {
      pixelsPerSecond?:Offset,
    }
   */
  constructor(config?: VelocityConfig){
    super();
    if(config!=null && config!=undefined){
      this.pixelsPerSecond=config.pixelsPerSecond;
    }
  }
  

  static zero() {
    var v = new Velocity();
    v.constructorName = "zero";
    return v;
  }

  
} 
//#endregion


//#endregion


//#region ******** ThemeData ********
//****** ColorScheme ******
interface ColorSchemeConfig {
  primary:Color;
  primaryVariant:Color;
  secondary:Color;
  secondaryVariant:Color;
  surface:Color;
  background:Color;
  error:Color;
  onPrimary:Color;
  onSecondary:Color;
  onSurface:Color;
  onBackground:Color;
  onError:Color;
  brightness?:Brightness;
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
  constructor(config: ColorSchemeConfig){
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
      this.onBackground = config.background;
      this.onError = config.onError;
      this.brightness = config.brightness;
    }
  }

}

//****** ButtonThemeData ******
interface ButtonThemeDataConfig {
  textTheme?:ButtonTextTheme;
  minWidth?:number;
  height?:number;
  padding?:EdgeInsets;
  shape?:ShapeBorder;
  layoutBehavior?:ButtonBarLayoutBehavior;
  alignedDropdown?:boolean;
  buttonColor?:Color;
  disabledColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  colorScheme?:ColorScheme;
  materialTapTargetSize?:MaterialTapTargetSize;

}
export class ButtonThemeData extends DartClass {
  textTheme?:ButtonTextTheme;
  minWidth?:number;
  height?:number;
  padding?:EdgeInsets;
  shape?:ShapeBorder;
  layoutBehavior?:ButtonBarLayoutBehavior;
  alignedDropdown?:boolean;
  buttonColor?:Color;
  disabledColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  colorScheme?:ColorScheme;
  materialTapTargetSize?:MaterialTapTargetSize;

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
  constructor(config: ButtonThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** ToggleButtonsThemeData ******
interface ToggleButtonsThemeDataConfig {
  textStyle?:TextStyle;
  constraints?:BoxConstraints;
  color?:Color;
  selectedColor?:Color;
  disabledColor?:Color;
  fillColor?:Color;
  focusColor?:Color;
  highlightColor?:Color;
  hoverColor?:Color;
  splashColor?:Color;
  borderColor?:Color;
  selectedBorderColor?:Color;
  disabledBorderColor?:Color;
  borderRadius?:BorderRadius;
  borderWidth?:number;

}
export class ToggleButtonsThemeData extends DartClass {
  textStyle?:TextStyle;
  constraints?:BoxConstraints;
  color?:Color;
  selectedColor?:Color;
  disabledColor?:Color;
  fillColor?:Color;
  focusColor?:Color;
  highlightColor?:Color;
  hoverColor?:Color;
  splashColor?:Color;
  borderColor?:Color;
  selectedBorderColor?:Color;
  disabledBorderColor?:Color;
  borderRadius?:BorderRadius;
  borderWidth?:number;

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
  constructor(config: ToggleButtonsThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** TextTheme ******
interface TextThemeConfig {
  headline1?:TextStyle;
  headline2?:TextStyle;
  headline3?:TextStyle;
  headline4?:TextStyle;
  headline5?:TextStyle;
  headline6?:TextStyle;
  subtitle1?:TextStyle;
  subtitle2?:TextStyle;
  bodyText1?:TextStyle;
  bodyText2?:TextStyle;
  caption?:TextStyle;
  button?:TextStyle;
  overline?:TextStyle;
}
export class TextTheme extends DartClass {
  headline1?:TextStyle;
  headline2?:TextStyle;
  headline3?:TextStyle;
  headline4?:TextStyle;
  headline5?:TextStyle;
  headline6?:TextStyle;
  subtitle1?:TextStyle;
  subtitle2?:TextStyle;
  bodyText1?:TextStyle;
  bodyText2?:TextStyle;
  caption?:TextStyle;
  button?:TextStyle;
  overline?:TextStyle;
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
  constructor(config: TextThemeConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** InputDecorationTheme ******
interface InputDecorationThemeConfig {
  labelStyle?:TextStyle;
  helperStyle?:TextStyle;
  helperMaxLines?:number;
  hintStyle?:TextStyle;
  errorStyle?:TextStyle;
  errorMaxLines?:number;
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
  constructor(config: InputDecorationThemeConfig){
    super();
    if(config!=null && config!=undefined){
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
      this.focusColor =config.focusColor;
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
        size?:number, 
      }
   */
  constructor(config: IconThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.color =config.color;
      this.opacity = config.opacity;
      this.size = config.size;
    }
  }

}


//****** SliderThemeData ******
interface SliderThemeDataConfig {
  trackHeight?:number;
  activeTrackColor?:Color;
  inactiveTrackColor?:Color;
  disabledActiveTrackColor?:Color;
  disabledInactiveTrackColor?:Color;
  activeTickMarkColor?:Color;
  inactiveTickMarkColor?:Color;
  disabledActiveTickMarkColor?:Color;
  disabledInactiveTickMarkColor?:Color;
  thumbColor?:Color;
  overlappingShapeStrokeColor?:Color;
  disabledThumbColor?:Color;
  overlayColor?:Color;
  valueIndicatorColor?:Color;
  showValueIndicator?:ShowValueIndicator;
  valueIndicatorTextStyle?:TextStyle;
  minThumbSeparation?:number;

}
export class SliderThemeData extends DartClass {
  trackHeight?:number;
  activeTrackColor?:Color;
  inactiveTrackColor?:Color;
  disabledActiveTrackColor?:Color;
  disabledInactiveTrackColor?:Color;
  activeTickMarkColor?:Color;
  inactiveTickMarkColor?:Color;
  disabledActiveTickMarkColor?:Color;
  disabledInactiveTickMarkColor?:Color;
  thumbColor?:Color;
  overlappingShapeStrokeColor?:Color;
  disabledThumbColor?:Color;
  overlayColor?:Color;
  valueIndicatorColor?:Color;
  showValueIndicator?:ShowValueIndicator;
  valueIndicatorTextStyle?:TextStyle;
  minThumbSeparation?:number;
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
  constructor(config: SliderThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** TabBarTheme ******
interface TabBarThemeConfig {
  indicator?:Decoration;
  indicatorSize?:TabBarIndicatorSize;
  labelColor?:Color;
  labelPadding?:EdgeInsets;
  labelStyle?:TextStyle;
  unselectedLabelColor?:Color;
  unselectedLabelStyle?:TextStyle;
}
export class TabBarTheme extends DartClass {
  indicator?:Decoration;
  indicatorSize?:TabBarIndicatorSize;
  labelColor?:Color;
  labelPadding?:EdgeInsets;
  labelStyle?:TextStyle;
  unselectedLabelColor?:Color;
  unselectedLabelStyle?:TextStyle;
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
  constructor(config: TabBarThemeConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** TooltipThemeData ******
interface TooltipThemeDataConfig {
  height?:number;
  padding?:EdgeInsets;
  margin?:EdgeInsets;
  verticalOffset?:number;
  preferBelow?:boolean;
  excludeFromSemantics?:boolean;
  decoration?:Decoration;
  textStyle?:TextStyle;
  waitDuration?:Duration;
  showDuration?:Duration;
}
export class TooltipThemeData extends DartClass {
  height?:number;
  padding?:EdgeInsets;
  margin?:EdgeInsets;
  verticalOffset?:number;
  preferBelow?:boolean;
  excludeFromSemantics?:boolean;
  decoration?:Decoration;
  textStyle?:TextStyle;
  waitDuration?:Duration;
  showDuration?:Duration;
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
  constructor(config: TooltipThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** CardTheme ******
interface CardThemeConfig {
  clipBehavior?:Clip;
  color?:Color;
  shadowColor?:Color;
  elevation?:number;
  margin?:EdgeInsets;
}
export class CardTheme extends DartClass {
  clipBehavior?:Clip;
  color?:Color;
  shadowColor?:Color;
  elevation?:number;
  margin?:EdgeInsets;
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
  constructor(config: CardThemeConfig){
    super();
    if(config!=null && config!=undefined){
      this.clipBehavior = config.clipBehavior;
      this.color = config.color;
      this.shadowColor = config.shadowColor;
      this.elevation = config.elevation;
      this.margin = config.margin;
    }
  }

}


//****** ChipThemeData ******
interface ChipThemeDataConfig {
  backgroundColor:Color;
  deleteIconColor?:Color;
  disabledColor:Color;
  selectedColor:Color;
  secondarySelectedColor:Color;
  shadowColor?:Color;
  selectedShadowColor?:Color;
  showCheckmark?:boolean;
  checkmarkColor?:Color;
  labelPadding?:EdgeInsets;
  padding:EdgeInsets;
  shape:ShapeBorder;
  labelStyle:TextStyle;
  secondaryLabelStyle:TextStyle;
  brightness:Brightness;
  elevation?:number;
  pressElevation?:number;
}
export class ChipThemeData extends DartClass {
  backgroundColor?:Color;
  deleteIconColor?:Color;
  disabledColor?:Color;
  selectedColor?:Color;
  secondarySelectedColor?:Color;
  shadowColor?:Color;
  selectedShadowColor?:Color;
  showCheckmark?:boolean;
  checkmarkColor?:Color;
  labelPadding?:EdgeInsets;
  padding?:EdgeInsets;
  shape?:ShapeBorder;
  labelStyle?:TextStyle;
  secondaryLabelStyle?:TextStyle;
  brightness?:Brightness;
  elevation?:number;
  pressElevation?:number;
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
  constructor(config: ChipThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** AppBarTheme ******
interface AppBarThemeConfig {
  brightness?:Brightness;
  color?:Color;
  elevation?:number;
  shadowColor?:Color;
  iconTheme?:IconThemeData;
  actionsIconTheme?:IconThemeData;
  textTheme?:TextTheme;
  centerTitle?:boolean;
}
export class AppBarTheme extends DartClass {
  brightness?:Brightness;
  color?:Color;
  elevation?:number;
  shadowColor?:Color;
  iconTheme?:IconThemeData;
  actionsIconTheme?:IconThemeData;
  textTheme?:TextTheme;
  centerTitle?:boolean;
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
  constructor(config: AppBarThemeConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** BottomAppBarTheme ******
interface BottomAppBarThemeConfig {
  color?:Color;
  elevation?:number;
  shape?:NotchedShape;
}
export class BottomAppBarTheme extends DartClass {
  color?:Color;
  elevation?:number;
  shape?:NotchedShape;
  /**
   * @param config config: 
      {
        color?:Color, 
        elevation?:number, 
        shape?:NotchedShape, 
      }
   */
  constructor(config: BottomAppBarThemeConfig){
    super();
    if(config!=null && config!=undefined){

      this.color = config.color;
      this.elevation = config.elevation;
      this.shape = config.shape;
    }
  }

}

//****** DialogTheme ******
interface DialogThemeConfig {
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  titleTextStyle?:TextStyle;
  contentTextStyle?:TextStyle;
}
export class DialogTheme extends DartClass {
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  titleTextStyle?:TextStyle;
  contentTextStyle?:TextStyle;
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
  constructor(config: DialogThemeConfig){
    super();
    if(config!=null && config!=undefined){
      this.backgroundColor = config.backgroundColor;
      this.elevation = config.elevation;
      this.shape = config.shape;
      this.titleTextStyle = config.titleTextStyle;
      this.contentTextStyle = config.contentTextStyle;
    }
  }

}

//****** FloatingActionButtonThemeData ******
interface FloatingActionButtonThemeDataConfig {
  foregroundColor?:Color;
  backgroundColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  splashColor?:Color;
  elevation?:number;
  focusElevation?:number;
  hoverElevation?:number;
  disabledElevation?:number;
  highlightElevation?:number;
  shape?:ShapeBorder;
}
export class FloatingActionButtonThemeData extends DartClass {
  foregroundColor?:Color;
  backgroundColor?:Color;
  focusColor?:Color;
  hoverColor?:Color;
  splashColor?:Color;
  elevation?:number;
  focusElevation?:number;
  hoverElevation?:number;
  disabledElevation?:number;
  highlightElevation?:number;
  shape?:ShapeBorder;
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
  constructor(config: FloatingActionButtonThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.foregroundColor = config.foregroundColor;
      this.backgroundColor =config.backgroundColor;
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


//****** NavigationRailThemeData ******
interface NavigationRailThemeDataConfig {
  backgroundColor?:Color;
  elevation?:number;
  unselectedLabelTextStyle?:TextStyle;
  selectedLabelTextStyle?:TextStyle;
  unselectedIconTheme?:IconThemeData;
  selectedIconTheme?:IconThemeData;
  groupAlignment?:number;
  labelType?:NavigationRailLabelType;
}
export class NavigationRailThemeData extends DartClass {
  backgroundColor?:Color;
  elevation?:number;
  unselectedLabelTextStyle?:TextStyle;
  selectedLabelTextStyle?:TextStyle;
  unselectedIconTheme?:IconThemeData;
  selectedIconTheme?:IconThemeData;
  groupAlignment?:number;
  labelType?:NavigationRailLabelType;
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
  constructor(config: NavigationRailThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

}

//****** SnackBarThemeData ******
interface SnackBarThemeDataConfig {
  backgroundColor?:Color;
  actionTextColor?:Color;
  disabledActionTextColor?:Color;
  contentTextStyle?:TextStyle;
  elevation?:number;
  shape?:ShapeBorder;
  behavior?:SnackBarBehavior;
}
export class SnackBarThemeData extends DartClass {
  backgroundColor?:Color;
  actionTextColor?:Color;
  disabledActionTextColor?:Color;
  contentTextStyle?:TextStyle;
  elevation?:number;
  shape?:ShapeBorder;
  behavior?:SnackBarBehavior;
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
  constructor(config: SnackBarThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** BottomSheetThemeData ******
interface BottomSheetThemeDataConfig {
  backgroundColor?:Color;
  elevation?:number;
  modalBackgroundColor?:Color;
  modalElevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
}
export class BottomSheetThemeData extends DartClass {
  backgroundColor?:Color;
  elevation?:number;
  modalBackgroundColor?:Color;
  modalElevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
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
  constructor(config: BottomSheetThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.backgroundColor = config.backgroundColor;
      this.elevation = config.elevation;
      this.modalBackgroundColor = config.modalBackgroundColor;
      this.modalElevation = config.modalElevation;
      this.shape = config.shape;
      this.clipBehavior = config.clipBehavior;

    }
  }
}

//****** PopupMenuThemeData ******
interface PopupMenuThemeDataConfig {
  color?:Color;
  shape?:ShapeBorder;
  elevation?:number;
  textStyle?:TextStyle;
}
export class PopupMenuThemeData extends DartClass {
  color?:Color;
  shape?:ShapeBorder;
  elevation?:number;
  textStyle?:TextStyle;
  /**
   * @param config config: 
      {
        color?:Color, 
        shape?:ShapeBorder, 
        elevation?:number, 
        textStyle?:TextStyle, 
      }
   */
  constructor(config: PopupMenuThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.color = config.color;
      this.shape = config.shape;
      this.elevation = config.elevation;
      this.textStyle = config.textStyle;
    }
  }
}

//****** MaterialBannerThemeData ******
interface MaterialBannerThemeDataConfig {
  backgroundColor?:Color;
  contentTextStyle?:TextStyle;
  padding?:EdgeInsets;
  leadingPadding?:EdgeInsets;
}
export class MaterialBannerThemeData extends DartClass {
  backgroundColor?:Color;
  contentTextStyle?:TextStyle;
  padding?:EdgeInsets;
  leadingPadding?:EdgeInsets;
  /**
   * @param config config: 
      {
        backgroundColor?:Color, 
        contentTextStyle?:TextStyle, 
        padding?:EdgeInsets, 
        leadingPadding?:EdgeInsets, 
      }
   */
  constructor(config: MaterialBannerThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.backgroundColor = config.backgroundColor;
      this.contentTextStyle = config.contentTextStyle;
      this.padding = config.padding;
      this.leadingPadding = config.leadingPadding;
    }
  }
}

//****** DividerThemeData ******
interface DividerThemeDataConfig {
  color?:Color;
  space?:number;
  thickness?:number;
  indent?:number;
  endIndent?:number;
}
export class DividerThemeData extends DartClass {
  color?:Color;
  space?:number;
  thickness?:number;
  indent?:number;
  endIndent?:number;
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
  constructor(config: DividerThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.color = config.color;
      this.space = config.space;
      this.thickness = config.thickness;
      this.indent = config.indent;
      this.endIndent = config.endIndent;
    }
  }
}

//****** ButtonBarThemeData ******
interface ButtonBarThemeDataConfig {
  alignment?:MainAxisAlignment;
  mainAxisSize?:MainAxisSize;
  buttonTextTheme?:ButtonTextTheme;
  buttonMinWidth?:number;
  buttonHeight?:number;
  buttonPadding?:EdgeInsets;
  buttonAlignedDropdown?:boolean;
  layoutBehavior?:ButtonBarLayoutBehavior;
  overflowDirection?:VerticalDirection;
}
export class ButtonBarThemeData extends DartClass {
  alignment?:MainAxisAlignment;
  mainAxisSize?:MainAxisSize;
  buttonTextTheme?:ButtonTextTheme;
  buttonMinWidth?:number;
  buttonHeight?:number;
  buttonPadding?:EdgeInsets;
  buttonAlignedDropdown?:boolean;
  layoutBehavior?:ButtonBarLayoutBehavior;
  overflowDirection?:VerticalDirection;
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
  constructor(config: ButtonBarThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** BottomNavigationBarThemeData ******
interface BottomNavigationBarThemeDataConfig {
  backgroundColor?:Color;
  elevation?:number;
  selectedIconTheme?:IconThemeData;
  unselectedIconTheme?:IconThemeData;
  selectedItemColor?:Color;
  unselectedItemColor?:Color;
  selectedLabelStyle?:TextStyle;
  unselectedLabelStyle?:TextStyle;
  showSelectedLabels?:boolean;
  showUnselectedLabels?:boolean;
  type?:BottomNavigationBarType;
}
export class BottomNavigationBarThemeData extends DartClass {
  backgroundColor?:Color;
  elevation?:number;
  selectedIconTheme?:IconThemeData;
  unselectedIconTheme?:IconThemeData;
  selectedItemColor?:Color;
  unselectedItemColor?:Color;
  selectedLabelStyle?:TextStyle;
  unselectedLabelStyle?:TextStyle;
  showSelectedLabels?:boolean;
  showUnselectedLabels?:boolean;
  type?:BottomNavigationBarType;
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
  constructor(config: BottomNavigationBarThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** TimePickerThemeData ******
interface TimePickerThemeDataConfig {
  backgroundColor?:Color;
  hourMinuteTextColor?:Color;
  hourMinuteColor?:Color;
  dayPeriodTextColor?:Color;
  dayPeriodColor?:Color;
  dialHandColor?:Color;
  dialBackgroundColor?:Color;
  dialTextColor?:Color;
  entryModeIconColor?:Color;
  hourMinuteTextStyle?:TextStyle;
  dayPeriodTextStyle?:TextStyle;
  helpTextStyle?:TextStyle;
  shape?:ShapeBorder;
  hourMinuteShape?:ShapeBorder;
  dayPeriodShape?:ShapeBorder;
  dayPeriodBorderSide?:BorderSide;
  inputDecorationTheme?:InputDecorationTheme;
}
export class TimePickerThemeData extends DartClass {
  backgroundColor?:Color;
  hourMinuteTextColor?:Color;
  hourMinuteColor?:Color;
  dayPeriodTextColor?:Color;
  dayPeriodColor?:Color;
  dialHandColor?:Color;
  dialBackgroundColor?:Color;
  dialTextColor?:Color;
  entryModeIconColor?:Color;
  hourMinuteTextStyle?:TextStyle;
  dayPeriodTextStyle?:TextStyle;
  helpTextStyle?:TextStyle;
  shape?:ShapeBorder;
  hourMinuteShape?:ShapeBorder;
  dayPeriodShape?:ShapeBorder;
  dayPeriodBorderSide?:BorderSide;
  inputDecorationTheme?:InputDecorationTheme;
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
  constructor(config: TimePickerThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** TextSelectionThemeData ******
interface TextSelectionThemeDataConfig {
  cursorColor?:Color;
  selectionColor?:Color;  
  selectionHandleColor?:Color;
}
export class TextSelectionThemeData extends DartClass {
  cursorColor?:Color;
  selectionColor?:Color;  
  selectionHandleColor?:Color;
  /**
   * @param config config: 
      {
        cursorColor?:Color, 
        selectionColor?:Color,   
        selectionHandleColor?:Color, 
      }
   */
  constructor(config: TextSelectionThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
      this.cursorColor = config.cursorColor;
      this.selectionColor = config.selectionColor;
      this.selectionHandleColor = config.selectionHandleColor;
    }
  }
}

//****** DataTableThemeData ******
interface DataTableThemeDataConfig {
  dataRowHeight?:number;
  dataTextStyle?:TextStyle;
  headingRowHeight?:number;
  headingTextStyle?:TextStyle;
  horizontalMargin?:number;
  columnSpacing?:number;
  dividerThickness?:number;
}
export class DataTableThemeData extends DartClass {
  dataRowHeight?:number;
  dataTextStyle?:TextStyle;
  headingRowHeight?:number;
  headingTextStyle?:TextStyle;
  horizontalMargin?:number;
  columnSpacing?:number;
  dividerThickness?:number;
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
  constructor(config: DataTableThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** ThemeData ******
interface ThemeDataConfig {
  brightness?:Brightness;
  visualDensity?:VisualDensity;
  primaryColor?:Color;
  primaryColorBrightness?:Brightness;
  primaryColorLight?:Color;
  primaryColorDark?:Color;
  accentColor?:Color;
  accentColorBrightness?:Brightness;
  canvasColor?:Color;
  shadowColor?:Color;
  scaffoldBackgroundColor?:Color;
  bottomAppBarColor?:Color;
  cardColor?:Color;
  focusColor?:Color;
  dividerColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  selectedRowColor?:Color;
  unselectedWidgetColor?:Color;
  disabledColor?:Color;
  buttonColor?:Color;
  buttonTheme?:ButtonThemeData;
  toggleButtonsTheme?:ToggleButtonsThemeData;
  secondaryHeaderColor?:Color;
  textSelectionColor?:Color;
  cursorColor?:Color;
  textSelectionHandleColor?:Color;
  backgroundColor?:Color;
  dialogBackgroundColor?:Color;
  indicatorColor?:Color;
  hintColor?:Color;
  errorColor?:Color;
  toggleableActiveColor?:Color;
  fontFamily?:string;
  textTheme?:TextTheme;
  primaryTextTheme?:TextTheme;
  accentTextTheme?:TextTheme;
  inputDecorationTheme?:InputDecorationTheme;
  iconTheme?:IconThemeData;
  primaryIconTheme?:IconThemeData;
  accentIconTheme?:IconThemeData;
  sliderTheme?:SliderThemeData;
  tabBarTheme?:TabBarTheme;
  tooltipTheme?:TooltipThemeData;
  cardTheme?:CardTheme;
  chipTheme?:ChipThemeData;
  platform?:TargetPlatform;
  materialTapTargetSize?:MaterialTapTargetSize;
  applyElevationOverlayColor?:boolean;
  appBarTheme?:AppBarTheme;
  bottomAppBarTheme?:BottomAppBarTheme;
  colorScheme?:ColorScheme;
  dialogTheme?:DialogTheme;
  floatingActionButtonTheme?:FloatingActionButtonThemeData;
  navigationRailTheme?:NavigationRailThemeData;
  cupertinoOverrideTheme?:CupertinoThemeData;
  snackBarTheme?:SnackBarThemeData;
  bottomSheetTheme?:BottomSheetThemeData;
  popupMenuTheme?:PopupMenuThemeData;
  bannerTheme?:MaterialBannerThemeData;
  dividerTheme?:DividerThemeData;
  buttonBarTheme?:ButtonBarThemeData;
  bottomNavigationBarTheme?:BottomNavigationBarThemeData;
  timePickerTheme?:TimePickerThemeData;
  textSelectionTheme?:TextSelectionThemeData;
  dataTableTheme?:DataTableThemeData;
  fixTextFieldOutlineLabel?:boolean;
  useTextSelectionTheme?:boolean;
}
export class ThemeData extends DartClass {
  brightness?:Brightness;
  visualDensity?:VisualDensity;
  primaryColor?:Color;
  primaryColorBrightness?:Brightness;
  primaryColorLight?:Color;
  primaryColorDark?:Color;
  accentColor?:Color;
  accentColorBrightness?:Brightness;
  canvasColor?:Color;
  shadowColor?:Color;
  scaffoldBackgroundColor?:Color;
  bottomAppBarColor?:Color;
  cardColor?:Color;
  focusColor?:Color;
  dividerColor?:Color;
  hoverColor?:Color;
  highlightColor?:Color;
  splashColor?:Color;
  selectedRowColor?:Color;
  unselectedWidgetColor?:Color;
  disabledColor?:Color;
  buttonColor?:Color;
  buttonTheme?:ButtonThemeData;
  toggleButtonsTheme?:ToggleButtonsThemeData;
  secondaryHeaderColor?:Color;
  textSelectionColor?:Color;
  cursorColor?:Color;
  textSelectionHandleColor?:Color;
  backgroundColor?:Color;
  dialogBackgroundColor?:Color;
  indicatorColor?:Color;
  hintColor?:Color;
  errorColor?:Color;
  toggleableActiveColor?:Color;
  fontFamily?:string;
  textTheme?:TextTheme;
  primaryTextTheme?:TextTheme;
  accentTextTheme?:TextTheme;
  inputDecorationTheme?:InputDecorationTheme;
  iconTheme?:IconThemeData;
  primaryIconTheme?:IconThemeData;
  accentIconTheme?:IconThemeData;
  sliderTheme?:SliderThemeData;
  tabBarTheme?:TabBarTheme;
  tooltipTheme?:TooltipThemeData;
  cardTheme?:CardTheme;
  chipTheme?:ChipThemeData;
  platform?:TargetPlatform;
  materialTapTargetSize?:MaterialTapTargetSize;
  applyElevationOverlayColor?:boolean;
  appBarTheme?:AppBarTheme;
  bottomAppBarTheme?:BottomAppBarTheme;
  colorScheme?:ColorScheme;
  dialogTheme?:DialogTheme;
  floatingActionButtonTheme?:FloatingActionButtonThemeData;
  navigationRailTheme?:NavigationRailThemeData;
  cupertinoOverrideTheme?:CupertinoThemeData;
  snackBarTheme?:SnackBarThemeData;
  bottomSheetTheme?:BottomSheetThemeData;
  popupMenuTheme?:PopupMenuThemeData;
  bannerTheme?:MaterialBannerThemeData;
  dividerTheme?:DividerThemeData;
  buttonBarTheme?:ButtonBarThemeData;
  bottomNavigationBarTheme?:BottomNavigationBarThemeData;
  timePickerTheme?:TimePickerThemeData;
  textSelectionTheme?:TextSelectionThemeData;
  dataTableTheme?:DataTableThemeData;
  fixTextFieldOutlineLabel?:boolean;
  useTextSelectionTheme?:boolean;

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
  constructor(config: ThemeDataConfig){
    super();
    if(config!=null && config!=undefined){
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

  static dark(){
    var v = new ThemeData({});
    v.constructorName = "dark";
    return v;
  }

  static light(){
    var v = new ThemeData({});
    v.constructorName = "light";
    return v;
  }

}

//#endregion


//#region ******** Icons ********
export class Icons extends IconData{
    constructor(icon:string){
      super(icon);
    }
  
    static threesixty = new Icons("threesixty");
    static threed_rotation = new Icons("threed_rotation");
    static four_k = new Icons("four_k");
    static ac_unit = new Icons("ac_unit");
    static access_alarm = new Icons("access_alarm");
    static access_alarms = new Icons("access_alarms");
    static access_time = new Icons("access_time");
    static accessibility = new Icons("accessibility");
    static accessibility_new = new Icons("accessibility_new");
    static accessible = new Icons("accessible");
    static accessible_forward = new Icons("accessible_forward");
    static account_balance = new Icons("account_balance");
    static account_balance_wallet = new Icons("account_balance_wallet");
    static account_box = new Icons("account_box");
    static account_circle = new Icons("account_circle");
    static adb = new Icons("adb");
    static add = new Icons("add");
    static add_a_photo = new Icons("add_a_photo");
    static add_alarm = new Icons("add_alarm");
    static add_alert = new Icons("add_alert");
    static add_box = new Icons("add_box");
    static add_call = new Icons("add_call");
    static add_circle = new Icons("add_circle");
    static add_circle_outline = new Icons("add_circle_outline");
    static add_comment = new Icons("add_comment");
    static add_location = new Icons("add_location");
    static add_photo_alternate = new Icons("add_photo_alternate");
    static add_shopping_cart = new Icons("add_shopping_cart");
    static add_to_home_screen = new Icons("add_to_home_screen");
    static add_to_photos = new Icons("add_to_photos");
    static add_to_queue = new Icons("add_to_queue");
    static adjust = new Icons("adjust");
    static airline_seat_flat = new Icons("airline_seat_flat");
    static airline_seat_flat_angled = new Icons("airline_seat_flat_angled");
    static airline_seat_individual_suite = new Icons("airline_seat_individual_suite");
    static airline_seat_legroom_extra = new Icons("airline_seat_legroom_extra");
    static airline_seat_legroom_normal = new Icons("airline_seat_legroom_normal");
    static airline_seat_legroom_reduced = new Icons("airline_seat_legroom_reduced");
    static airline_seat_recline_extra = new Icons("airline_seat_recline_extra");
    static airline_seat_recline_normal = new Icons("airline_seat_recline_normal");
    static airplanemode_active = new Icons("airplanemode_active");
    static airplanemode_inactive = new Icons("airplanemode_inactive");
    static airplay = new Icons("airplay");
    static airport_shuttle = new Icons("airport_shuttle");
    static alarm = new Icons("alarm");
    static alarm_add = new Icons("alarm_add");
    static alarm_off = new Icons("alarm_off");
    static alarm_on = new Icons("alarm_on");
    static album = new Icons("album");
    static all_inclusive = new Icons("all_inclusive");
    static all_out = new Icons("all_out");
    static alternate_email = new Icons("alternate_email");
    static android = new Icons("android");
    static announcement = new Icons("announcement");
    static apps = new Icons("apps");
    static archive = new Icons("archive");
    static arrow_back = new Icons("arrow_back");
    static arrow_back_ios = new Icons("arrow_back_ios");
    static arrow_downward = new Icons("arrow_downward");
    static arrow_drop_down = new Icons("arrow_drop_down");
    static arrow_drop_down_circle = new Icons("arrow_drop_down_circle");
    static arrow_drop_up = new Icons("arrow_drop_up");
    static arrow_forward = new Icons("arrow_forward");
    static arrow_forward_ios = new Icons("arrow_forward_ios");
    static arrow_left = new Icons("arrow_left");
    static arrow_right = new Icons("arrow_right");
    static arrow_upward = new Icons("arrow_upward");
    static art_track = new Icons("art_track");
    static aspect_ratio = new Icons("aspect_ratio");
    static assessment = new Icons("assessment");
    static assignment = new Icons("assignment");
    static assignment_ind = new Icons("assignment_ind");
    static assignment_late = new Icons("assignment_late");
    static assignment_return = new Icons("assignment_return");
    static assignment_returned = new Icons("assignment_returned");
    static assignment_turned_in = new Icons("assignment_turned_in");
    static assistant = new Icons("assistant");
    static assistant_photo = new Icons("assistant_photo");
    static atm = new Icons("atm");
    static attach_file = new Icons("attach_file");
    static attach_money = new Icons("attach_money");
    static attachment = new Icons("attachment");
    static audiotrack = new Icons("audiotrack");
    static autorenew = new Icons("autorenew");
    static av_timer = new Icons("av_timer");
    static backspace = new Icons("backspace");
    static backup = new Icons("backup");
    static battery_alert = new Icons("battery_alert");
    static battery_charging_full = new Icons("battery_charging_full");
    static battery_full = new Icons("battery_full");
    static battery_std = new Icons("battery_std");
    static battery_unknown = new Icons("battery_unknown");
    static beach_access = new Icons("beach_access");
    static beenhere = new Icons("beenhere");
    static block = new Icons("block");
    static bluetooth = new Icons("bluetooth");
    static bluetooth_audio = new Icons("bluetooth_audio");
    static bluetooth_connected = new Icons("bluetooth_connected");
    static bluetooth_disabled = new Icons("bluetooth_disabled");
    static bluetooth_searching = new Icons("bluetooth_searching");
    static blur_circular = new Icons("blur_circular");
    static blur_linear = new Icons("blur_linear");
    static blur_off = new Icons("blur_off");
    static blur_on = new Icons("blur_on");
    static book = new Icons("book");
    static bookmark = new Icons("bookmark");
    static bookmark_border = new Icons("bookmark_border");
    static border_all = new Icons("border_all");
    static border_bottom = new Icons("border_bottom");
    static border_clear = new Icons("border_clear");
    static border_color = new Icons("border_color");
    static border_horizontal = new Icons("border_horizontal");
    static border_inner = new Icons("border_inner");
    static border_left = new Icons("border_left");
    static border_outer = new Icons("border_outer");
    static border_right = new Icons("border_right");
    static border_style = new Icons("border_style");
    static border_top = new Icons("border_top");
    static border_vertical = new Icons("border_vertical");
    static branding_watermark = new Icons("branding_watermark");
    static brightness_1 = new Icons("brightness_1");
    static brightness_2 = new Icons("brightness_2");
    static brightness_3 = new Icons("brightness_3");
    static brightness_4 = new Icons("brightness_4");
    static brightness_5 = new Icons("brightness_5");
    static brightness_6 = new Icons("brightness_6");
    static brightness_7 = new Icons("brightness_7");
    static brightness_auto = new Icons("brightness_auto");
    static brightness_high = new Icons("brightness_high");
    static brightness_low = new Icons("brightness_low");
    static brightness_medium = new Icons("brightness_medium");
    static broken_image = new Icons("broken_image");
    static brush = new Icons("brush");
    static bubble_chart = new Icons("bubble_chart");
    static bug_report = new Icons("bug_report");
    static build = new Icons("build");
    static burst_mode = new Icons("burst_mode");
    static business = new Icons("business");
    static business_center = new Icons("business_center");
    static cached = new Icons("cached");
    static cake = new Icons("cake");
    static calendar_today = new Icons("calendar_today");
    static calendar_view_day = new Icons("calendar_view_day");
    static call = new Icons("call");
    static call_end = new Icons("call_end");
    static call_made = new Icons("call_made");
    static call_merge = new Icons("call_merge");
    static call_missed = new Icons("call_missed");
    static call_missed_outgoing = new Icons("call_missed_outgoing");
    static call_received = new Icons("call_received");
    static call_split = new Icons("call_split");
    static call_to_action = new Icons("call_to_action");
    static camera = new Icons("camera");
    static camera_alt = new Icons("camera_alt");
    static camera_enhance = new Icons("camera_enhance");
    static camera_front = new Icons("camera_front");
    static camera_rear = new Icons("camera_rear");
    static camera_roll = new Icons("camera_roll");
    static cancel = new Icons("cancel");
    static card_giftcard = new Icons("card_giftcard");
    static card_membership = new Icons("card_membership");
    static card_travel = new Icons("card_travel");
    static casino = new Icons("casino");
    static cast = new Icons("cast");
    static cast_connected = new Icons("cast_connected");
    static category = new Icons("category");
    static center_focus_strong = new Icons("center_focus_strong");
    static center_focus_weak = new Icons("center_focus_weak");
    static change_history = new Icons("change_history");
    static chat = new Icons("chat");
    static chat_bubble = new Icons("chat_bubble");
    static chat_bubble_outline = new Icons("chat_bubble_outline");
    static check = new Icons("check");
    static check_box = new Icons("check_box");
    static check_box_outline_blank = new Icons("check_box_outline_blank");
    static check_circle = new Icons("check_circle");
    static check_circle_outline = new Icons("check_circle_outline");
    static chevron_left = new Icons("chevron_left");
    static chevron_right = new Icons("chevron_right");
    static child_care = new Icons("child_care");
    static child_friendly = new Icons("child_friendly");
    static chrome_reader_mode = new Icons("chrome_reader_mode");
    static class_ = new Icons("class_");
    static clear = new Icons("clear");
    static clear_all = new Icons("clear_all");
    static close = new Icons("close");
    static closed_caption = new Icons("closed_caption");
    static cloud = new Icons("cloud");
    static cloud_circle = new Icons("cloud_circle");
    static cloud_done = new Icons("cloud_done");
    static cloud_download = new Icons("cloud_download");
    static cloud_off = new Icons("cloud_off");
    static cloud_queue = new Icons("cloud_queue");
    static cloud_upload = new Icons("cloud_upload");
    static code = new Icons("code");
    static collections = new Icons("collections");
    static collections_bookmark = new Icons("collections_bookmark");
    static color_lens = new Icons("color_lens");
    static colorize = new Icons("colorize");
    static comment = new Icons("comment");
    static compare = new Icons("compare");
    static compare_arrows = new Icons("compare_arrows");
    static computer = new Icons("computer");
    static confirmation_number = new Icons("confirmation_number");
    static contact_mail = new Icons("contact_mail");
    static contact_phone = new Icons("contact_phone");
    static contacts = new Icons("contacts");
  static content_copy = new Icons("content_copy");
    static content_cut = new Icons("content_cut");
    static content_paste = new Icons("content_paste");
    static control_point = new Icons("control_point");
    static control_point_duplicate = new Icons("control_point_duplicate");
    static copyright = new Icons("copyright");
    static create = new Icons("create");
    static create_new_folder = new Icons("create_new_folder");
    static credit_card = new Icons("credit_card");
    static crop = new Icons("crop");
    static crop_16_9 = new Icons("crop_16_9");
    static crop_3_2 = new Icons("crop_3_2");
    static crop_5_4 = new Icons("crop_5_4");
    static crop_7_5 = new Icons("crop_7_5");
    static crop_din = new Icons("crop_din");
    static crop_free = new Icons("crop_free");
    static crop_landscape = new Icons("crop_landscape");
    static crop_original = new Icons("crop_original");
    static crop_portrait = new Icons("crop_portrait");
    static crop_rotate = new Icons("crop_rotate");
    static crop_square = new Icons("crop_square");
    static dashboard = new Icons("dashboard");
    static data_usage = new Icons("data_usage");
    static date_range = new Icons("date_range");
    static dehaze = new Icons("dehaze");
    static delete = new Icons("delete");
    static delete_forever = new Icons("delete_forever");
    static delete_outline = new Icons("delete_outline");
    static delete_sweep = new Icons("delete_sweep");
    static departure_board = new Icons("departure_board");
    static description = new Icons("description");
    static desktop_mac = new Icons("desktop_mac");
    static desktop_windows = new Icons("desktop_windows");
    static details = new Icons("details");
    static developer_board = new Icons("developer_board");
    static developer_mode = new Icons("developer_mode");
    static device_hub = new Icons("device_hub");
    static device_unknown = new Icons("device_unknown");
    static devices = new Icons("devices");
    static devices_other = new Icons("devices_other");
    static dialer_sip = new Icons("dialer_sip");
    static dialpad = new Icons("dialpad");
    static directions = new Icons("directions");
    static directions_bike = new Icons("directions_bike");
    static directions_boat = new Icons("directions_boat");
    static directions_bus = new Icons("directions_bus");
    static directions_car = new Icons("directions_car");
    static directions_railway = new Icons("directions_railway");
    static directions_run = new Icons("directions_run");
    static directions_subway = new Icons("directions_subway");
    static directions_transit = new Icons("directions_transit");
    static directions_walk = new Icons("directions_walk");
    static disc_full = new Icons("disc_full");
    static dns = new Icons("dns");
    static do_not_disturb = new Icons("do_not_disturb");
    static do_not_disturb_alt = new Icons("do_not_disturb_alt");
    static do_not_disturb_off = new Icons("do_not_disturb_off");
    static do_not_disturb_on = new Icons("do_not_disturb_on");
    static dock = new Icons("dock");
    static domain = new Icons("domain");
    static done = new Icons("done");
    static done_all = new Icons("done_all");
    static done_outline = new Icons("done_outline");
    static donut_large = new Icons("donut_large");
    static donut_small = new Icons("donut_small");
    static drafts = new Icons("drafts");
    static drag_handle = new Icons("drag_handle");
    static drive_eta = new Icons("drive_eta");
    static dvr = new Icons("dvr");
    static edit = new Icons("edit");
    static edit_attributes = new Icons("edit_attributes");
    static edit_location = new Icons("edit_location");
    static eject = new Icons("eject");
    static email = new Icons("email");
    static enhanced_encryption = new Icons("enhanced_encryption");
    static equalizer = new Icons("equalizer");
    static error = new Icons("error");
    static error_outline = new Icons("error_outline");
    static euro_symbol = new Icons("euro_symbol");
    static ev_station = new Icons("ev_station");
    static event = new Icons("event");
    static event_available = new Icons("event_available");
    static event_busy = new Icons("event_busy");
    static event_note = new Icons("event_note");
    static event_seat = new Icons("event_seat");
    static exit_to_app = new Icons("exit_to_app");
    static expand_less = new Icons("expand_less");
    static expand_more = new Icons("expand_more");
    static explicit = new Icons("explicit");
    static explore = new Icons("explore");
    static exposure = new Icons("exposure");
    static exposure_neg_1 = new Icons("exposure_neg_1");
    static exposure_neg_2 = new Icons("exposure_neg_2");
    static exposure_plus_1 = new Icons("exposure_plus_1");
    static exposure_plus_2 = new Icons("exposure_plus_2");
    static exposure_zero = new Icons("exposure_zero");
    static extension = new Icons("extension");
    static face = new Icons("face");
    static fast_forward = new Icons("fast_forward");
    static fast_rewind = new Icons("fast_rewind");
    static fastfood = new Icons("fastfood");
    static favorite = new Icons("favorite");
    static favorite_border = new Icons("favorite_border");
    static featured_play_list = new Icons("featured_play_list");
    static featured_video = new Icons("featured_video");
    static feedback = new Icons("feedback");
    static fiber_dvr = new Icons("fiber_dvr");
    static fiber_manual_record = new Icons("fiber_manual_record");
    static fiber_new = new Icons("fiber_new");
    static fiber_pin = new Icons("fiber_pin");
    static fiber_smart_record = new Icons("fiber_smart_record");
    static file_download = new Icons("file_download");
    static file_upload = new Icons("file_upload");
    static filter = new Icons("filter");
    static filter_1 = new Icons("filter_1");
    static filter_2 = new Icons("filter_2");
    static filter_3 = new Icons("filter_3");
    static filter_4 = new Icons("filter_4");
    static filter_5 = new Icons("filter_5");
    static filter_6 = new Icons("filter_6");
    static filter_7 = new Icons("filter_7");
    static filter_8 = new Icons("filter_8");
    static filter_9 = new Icons("filter_9");
    static filter_9_plus = new Icons("filter_9_plus");
    static filter_b_and_w = new Icons("filter_b_and_w");
    static filter_center_focus = new Icons("filter_center_focus");
    static filter_drama = new Icons("filter_drama");
    static filter_frames = new Icons("filter_frames");
    static filter_hdr = new Icons("filter_hdr");
    static filter_list = new Icons("filter_list");
    static filter_none = new Icons("filter_none");
    static filter_tilt_shift = new Icons("filter_tilt_shift");
    static filter_vintage = new Icons("filter_vintage");
    static find_in_page = new Icons("find_in_page");
    static find_replace = new Icons("find_replace");
    static fingerprint = new Icons("fingerprint");
    static first_page = new Icons("first_page");
    static fitness_center = new Icons("fitness_center");
    static flag = new Icons("flag");
    static flare = new Icons("flare");
    static flash_auto = new Icons("flash_auto");
    static flash_off = new Icons("flash_off");
    static flash_on = new Icons("flash_on");
    static flight = new Icons("flight");
    static flight_land = new Icons("flight_land");
    static flight_takeoff = new Icons("flight_takeoff");
    static flip = new Icons("flip");
    static flip_to_back = new Icons("flip_to_back");
    static flip_to_front = new Icons("flip_to_front");
    static folder = new Icons("folder");
    static folder_open = new Icons("folder_open");
    static folder_shared = new Icons("folder_shared");
    static folder_special = new Icons("folder_special");
    static font_download = new Icons("font_download");
    static format_align_center = new Icons("format_align_center");
    static format_align_justify = new Icons("format_align_justify");
    static format_align_left = new Icons("format_align_left");
    static format_align_right = new Icons("format_align_right");
    static format_bold = new Icons("format_bold");
    static format_clear = new Icons("format_clear");
    static format_color_fill = new Icons("format_color_fill");
    static format_color_reset = new Icons("format_color_reset");
    static format_color_text = new Icons("format_color_text");
    static format_indent_decrease = new Icons("format_indent_decrease");
    static format_indent_increase = new Icons("format_indent_increase");
    static format_italic = new Icons("format_italic");
    static format_line_spacing = new Icons("format_line_spacing");
    static format_list_bulleted = new Icons("format_list_bulleted");
    static format_list_numbered = new Icons("format_list_numbered");
    static format_list_numbered_rtl = new Icons("format_list_numbered_rtl");
    static format_paint = new Icons("format_paint");
    static format_quote = new Icons("format_quote");
    static format_shapes = new Icons("format_shapes");
    static format_size = new Icons("format_size");
    static format_strikethrough = new Icons("format_strikethrough");
    static format_textdirection_l_to_r = new Icons("format_textdirection_l_to_r");
    static format_textdirection_r_to_l = new Icons("format_textdirection_r_to_l");
    static format_underlined = new Icons("format_underlined");
    static forum = new Icons("forum");
    static forward = new Icons("forward");
    static forward_10 = new Icons("forward_10");
    static forward_30 = new Icons("forward_30");
    static forward_5 = new Icons("forward_5");
    static free_breakfast = new Icons("free_breakfast");
    static fullscreen = new Icons("fullscreen");
    static fullscreen_exit = new Icons("fullscreen_exit");
    static functions = new Icons("functions");
    static g_translate = new Icons("g_translate");
    static gamepad = new Icons("gamepad");
    static games = new Icons("games");
    static gavel = new Icons("gavel");
    static gesture = new Icons("gesture");
    static get_app = new Icons("get_app");
    static gif = new Icons("gif");
    static golf_course = new Icons("golf_course");
    static gps_fixed = new Icons("gps_fixed");
    static gps_not_fixed = new Icons("gps_not_fixed");
    static gps_off = new Icons("gps_off");
    static grade = new Icons("grade");
    static gradient = new Icons("gradient");
    static grain = new Icons("grain");
    static graphic_eq = new Icons("graphic_eq");
    static grid_off = new Icons("grid_off");
    static grid_on = new Icons("grid_on");
    static group = new Icons("group");
    static group_add = new Icons("group_add");
    static group_work = new Icons("group_work");
    static hd = new Icons("hd");
    static hdr_off = new Icons("hdr_off");
    static hdr_on = new Icons("hdr_on");
    static hdr_strong = new Icons("hdr_strong");
    static hdr_weak = new Icons("hdr_weak");
    static headset = new Icons("headset");
    static headset_mic = new Icons("headset_mic");
    static headset_off = new Icons("headset_off");
    static healing = new Icons("healing");
    static hearing = new Icons("hearing");
    static help = new Icons("help");
    static help_outline = new Icons("help_outline");
    static high_quality = new Icons("high_quality");
    static highlight = new Icons("highlight");
    static highlight_off = new Icons("highlight_off");
    static history = new Icons("history");
    static home = new Icons("home");
    static hot_tub = new Icons("hot_tub");
    static hotel = new Icons("hotel");
    static hourglass_empty = new Icons("hourglass_empty");
    static hourglass_full = new Icons("hourglass_full");
    static http = new Icons("http");
    static https = new Icons("https");
    static image = new Icons("image");
    static image_aspect_ratio = new Icons("image_aspect_ratio");
    static import_contacts = new Icons("import_contacts");
    static import_export = new Icons("import_export");
    static important_devices = new Icons("important_devices");
    static inbox = new Icons("inbox");
    static indeterminate_check_box = new Icons("indeterminate_check_box");
    static info = new Icons("info");
    static info_outline = new Icons("info_outline");
    static input = new Icons("input");
    static insert_chart = new Icons("insert_chart");
    static insert_comment = new Icons("insert_comment");
    static insert_drive_file = new Icons("insert_drive_file");
    static insert_emoticon = new Icons("insert_emoticon");
    static insert_invitation = new Icons("insert_invitation");
    static insert_link = new Icons("insert_link");
    static insert_photo = new Icons("insert_photo");
    static invert_colors = new Icons("invert_colors");
    static invert_colors_off = new Icons("invert_colors_off");
    static iso = new Icons("iso");
    static keyboard = new Icons("keyboard");
    static keyboard_arrow_down = new Icons("keyboard_arrow_down");
    static keyboard_arrow_left = new Icons("keyboard_arrow_left");
    static keyboard_arrow_right = new Icons("keyboard_arrow_right");
    static keyboard_arrow_up = new Icons("keyboard_arrow_up");
    static keyboard_backspace = new Icons("keyboard_backspace");
    static keyboard_capslock = new Icons("keyboard_capslock");
    static keyboard_hide = new Icons("keyboard_hide");
    static keyboard_return = new Icons("keyboard_return");
    static keyboard_tab = new Icons("keyboard_tab");
    static keyboard_voice = new Icons("keyboard_voice");
    static kitchen = new Icons("kitchen");
    static label = new Icons("label");
    static label_important = new Icons("label_important");
    static label_outline = new Icons("label_outline");
    static landscape = new Icons("landscape");
    static language = new Icons("language");
    static laptop = new Icons("laptop");
    static laptop_chromebook = new Icons("laptop_chromebook");
    static laptop_mac = new Icons("laptop_mac");
    static laptop_windows = new Icons("laptop_windows");
    static last_page = new Icons("last_page");
    static launch = new Icons("launch");
    static layers = new Icons("layers");
    static layers_clear = new Icons("layers_clear");
    static leak_add = new Icons("leak_add");
    static leak_remove = new Icons("leak_remove");
    static lens = new Icons("lens");
    static library_add = new Icons("library_add");
    static library_books = new Icons("library_books");
    static library_music = new Icons("library_music");
    static lightbulb_outline = new Icons("lightbulb_outline");
    static line_style = new Icons("line_style");
    static line_weight = new Icons("line_weight");
    static linear_scale = new Icons("linear_scale");
    static link = new Icons("link");
    static link_off = new Icons("link_off");
    static linked_camera = new Icons("linked_camera");
    static list = new Icons("list");
    static live_help = new Icons("live_help");
    static live_tv = new Icons("live_tv");
    static local_activity = new Icons("local_activity");
    static local_airport = new Icons("local_airport");
    static local_atm = new Icons("local_atm");
    static local_bar = new Icons("local_bar");
    static local_cafe = new Icons("local_cafe");
    static local_car_wash = new Icons("local_car_wash");
    static local_convenience_store = new Icons("local_convenience_store");
    static local_dining = new Icons("local_dining");
    static local_drink = new Icons("local_drink");
    static local_florist = new Icons("local_florist");
    static local_gas_station = new Icons("local_gas_station");
    static local_grocery_store = new Icons("local_grocery_store");
    static local_hospital = new Icons("local_hospital");
    static local_hotel = new Icons("local_hotel");
    static local_laundry_service = new Icons("local_laundry_service");
    static local_library = new Icons("local_library");
    static local_mall = new Icons("local_mall");
    static local_movies = new Icons("local_movies");
    static local_offer = new Icons("local_offer");
    static local_parking = new Icons("local_parking");
    static local_pharmacy = new Icons("local_pharmacy");
    static local_phone = new Icons("local_phone");
    static local_pizza = new Icons("local_pizza");
    static local_play = new Icons("local_play");
    static local_post_office = new Icons("local_post_office");
    static local_printshop = new Icons("local_printshop");
    static local_see = new Icons("local_see");
    static local_shipping = new Icons("local_shipping");
    static local_taxi = new Icons("local_taxi");
    static location_city = new Icons("location_city");
    static location_disabled = new Icons("location_disabled");
    static location_off = new Icons("location_off");
    static location_on = new Icons("location_on");
    static location_searching = new Icons("location_searching");
    static lock = new Icons("lock");
    static lock_open = new Icons("lock_open");
    static lock_outline = new Icons("lock_outline");
    static looks = new Icons("looks");
    static looks_3 = new Icons("looks_3");
    static looks_4 = new Icons("looks_4");
    static looks_5 = new Icons("looks_5");
    static looks_6 = new Icons("looks_6");
    static looks_one = new Icons("looks_one");
    static looks_two = new Icons("looks_two");
    static loop = new Icons("loop");
    static loupe = new Icons("loupe");
    static low_priority = new Icons("low_priority");
    static loyalty = new Icons("loyalty");
    static mail = new Icons("mail");
    static mail_outline = new Icons("mail_outline");
    static map = new Icons("map");
    static markunread = new Icons("markunread");
    static markunread_mailbox = new Icons("markunread_mailbox");
    static maximize = new Icons("maximize");
    static memory = new Icons("memory");
    static menu = new Icons("menu");
    static merge_type = new Icons("merge_type");
    static message = new Icons("message");
    static mic = new Icons("mic");
    static mic_none = new Icons("mic_none");
    static mic_off = new Icons("mic_off");
    static minimize = new Icons("minimize");
    static missed_video_call = new Icons("missed_video_call");
    static mms = new Icons("mms");
    static mobile_screen_share = new Icons("mobile_screen_share");
    static mode_comment = new Icons("mode_comment");
    static mode_edit = new Icons("mode_edit");
    static monetization_on = new Icons("monetization_on");
    static money_off = new Icons("money_off");
    static monochrome_photos = new Icons("monochrome_photos");
    static mood = new Icons("mood");
    static mood_bad = new Icons("mood_bad");
    static more = new Icons("more");
    static more_horiz = new Icons("more_horiz");
    static more_vert = new Icons("more_vert");
    static motorcycle = new Icons("motorcycle");
    static mouse = new Icons("mouse");
    static move_to_inbox = new Icons("move_to_inbox");
    static movie = new Icons("movie");
    static movie_creation = new Icons("movie_creation");
    static movie_filter = new Icons("movie_filter");
    static multiline_chart = new Icons("multiline_chart");
    static music_note = new Icons("music_note");
    static music_video = new Icons("music_video");
    static my_location = new Icons("my_location");
    static nature = new Icons("nature");
    static nature_people = new Icons("nature_people");
    static navigate_before = new Icons("navigate_before");
    static navigate_next = new Icons("navigate_next");
    static navigation = new Icons("navigation");
    static near_me = new Icons("near_me");
    static network_cell = new Icons("network_cell");
    static network_check = new Icons("network_check");
    static network_locked = new Icons("network_locked");
    static network_wifi = new Icons("network_wifi");
    static new_releases = new Icons("new_releases");
    static next_week = new Icons("next_week");
    static nfc = new Icons("nfc");
    static no_encryption = new Icons("no_encryption");
    static no_sim = new Icons("no_sim");
    static not_interested = new Icons("not_interested");
    static not_listed_location = new Icons("not_listed_location");
    static note = new Icons("note");
    static note_add = new Icons("note_add");
    static notification_important = new Icons("notification_important");
    static notifications = new Icons("notifications");
    static notifications_active = new Icons("notifications_active");
    static notifications_none = new Icons("notifications_none");
    static notifications_off = new Icons("notifications_off");
    static notifications_paused = new Icons("notifications_paused");
    static offline_bolt = new Icons("offline_bolt");
    static offline_pin = new Icons("offline_pin");
    static ondemand_video = new Icons("ondemand_video");
    static opacity = new Icons("opacity");
    static open_in_browser = new Icons("open_in_browser");
    static open_in_new = new Icons("open_in_new");
    static open_with = new Icons("open_with");
    static outlined_flag = new Icons("outlined_flag");
    static pages = new Icons("pages");
    static pageview = new Icons("pageview");
    static palette = new Icons("palette");
    static pan_tool = new Icons("pan_tool");
    static panorama = new Icons("panorama");
    static panorama_fish_eye = new Icons("panorama_fish_eye");
    static panorama_horizontal = new Icons("panorama_horizontal");
    static panorama_vertical = new Icons("panorama_vertical");
    static panorama_wide_angle = new Icons("panorama_wide_angle");
    static party_mode = new Icons("party_mode");
    static pause = new Icons("pause");
    static pause_circle_filled = new Icons("pause_circle_filled");
    static pause_circle_outline = new Icons("pause_circle_outline");
    static payment = new Icons("payment");
    static people = new Icons("people");
    static people_outline = new Icons("people_outline");
    static perm_camera_mic = new Icons("perm_camera_mic");
    static perm_contact_calendar = new Icons("perm_contact_calendar");
    static perm_data_setting = new Icons("perm_data_setting");
    static perm_device_information = new Icons("perm_device_information");
    static perm_identity = new Icons("perm_identity");
    static perm_media = new Icons("perm_media");
    static perm_phone_msg = new Icons("perm_phone_msg");
    static perm_scan_wifi = new Icons("perm_scan_wifi");
    static person = new Icons("person");
    static person_add = new Icons("person_add");
    static person_outline = new Icons("person_outline");
    static person_pin = new Icons("person_pin");
    static person_pin_circle = new Icons("person_pin_circle");
    static personal_video = new Icons("personal_video");
    static pets = new Icons("pets");
    static phone = new Icons("phone");
    static phone_android = new Icons("phone_android");
    static phone_bluetooth_speaker = new Icons("phone_bluetooth_speaker");
    static phone_forwarded = new Icons("phone_forwarded");
    static phone_in_talk = new Icons("phone_in_talk");
    static phone_iphone = new Icons("phone_iphone");
    static phone_locked = new Icons("phone_locked");
    static phone_missed = new Icons("phone_missed");
    static phone_paused = new Icons("phone_paused");
    static phonelink = new Icons("phonelink");
    static phonelink_erase = new Icons("phonelink_erase");
    static phonelink_lock = new Icons("phonelink_lock");
    static phonelink_off = new Icons("phonelink_off");
    static phonelink_ring = new Icons("phonelink_ring");
    static phonelink_setup = new Icons("phonelink_setup");
    static photo = new Icons("photo");
    static photo_album = new Icons("photo_album");
    static photo_camera = new Icons("photo_camera");
    static photo_filter = new Icons("photo_filter");
    static photo_library = new Icons("photo_library");
    static photo_size_select_actual = new Icons("photo_size_select_actual");
    static photo_size_select_large = new Icons("photo_size_select_large");
    static photo_size_select_small = new Icons("photo_size_select_small");
    static picture_as_pdf = new Icons("picture_as_pdf");
    static picture_in_picture = new Icons("picture_in_picture");
    static picture_in_picture_alt = new Icons("picture_in_picture_alt");
    static pie_chart = new Icons("pie_chart");
    static pie_chart_outlined = new Icons("pie_chart_outlined");
    static pin_drop = new Icons("pin_drop");
    static place = new Icons("place");
    static play_arrow = new Icons("play_arrow");
    static play_circle_filled = new Icons("play_circle_filled");
    static play_circle_outline = new Icons("play_circle_outline");
    static play_for_work = new Icons("play_for_work");
    static playlist_add = new Icons("playlist_add");
    static playlist_add_check = new Icons("playlist_add_check");
    static playlist_play = new Icons("playlist_play");
    static plus_one = new Icons("plus_one");
    static poll = new Icons("poll");
    static polymer = new Icons("polymer");
    static pool = new Icons("pool");
    static portable_wifi_off = new Icons("portable_wifi_off");
    static portrait = new Icons("portrait");
    static power = new Icons("power");
    static power_input = new Icons("power_input");
    static power_settings_new = new Icons("power_settings_new");
    static pregnant_woman = new Icons("pregnant_woman");
    static present_to_all = new Icons("present_to_all");
    static print = new Icons("print");
    static priority_high = new Icons("priority_high");
    static public = new Icons("public");
    static publish = new Icons("publish");
    static query_builder = new Icons("query_builder");
    static question_answer = new Icons("question_answer");
    static queue = new Icons("queue");
    static queue_music = new Icons("queue_music");
    static queue_play_next = new Icons("queue_play_next");
    static radio = new Icons("radio");
    static radio_button_checked = new Icons("radio_button_checked");
    static radio_button_unchecked = new Icons("radio_button_unchecked");
    static rate_review = new Icons("rate_review");
    static receipt = new Icons("receipt");
    static recent_actors = new Icons("recent_actors");
    static record_voice_over = new Icons("record_voice_over");
    static redeem = new Icons("redeem");
    static redo = new Icons("redo");
    static refresh = new Icons("refresh");
    static remove = new Icons("remove");
    static remove_circle = new Icons("remove_circle");
    static remove_circle_outline = new Icons("remove_circle_outline");
    static remove_from_queue = new Icons("remove_from_queue");
    static remove_red_eye = new Icons("remove_red_eye");
    static remove_shopping_cart = new Icons("remove_shopping_cart");
    static reorder = new Icons("reorder");
    static repeat = new Icons("repeat");
    static repeat_one = new Icons("repeat_one");
    static replay = new Icons("replay");
    static replay_10 = new Icons("replay_10");
    static replay_30 = new Icons("replay_30");
    static replay_5 = new Icons("replay_5");
    static reply = new Icons("reply");
    static reply_all = new Icons("reply_all");
    static report = new Icons("report");
    static report_off = new Icons("report_off");
    static report_problem = new Icons("report_problem");
    static restaurant = new Icons("restaurant");
    static restaurant_menu = new Icons("restaurant_menu");
    static restore = new Icons("restore");
    static restore_from_trash = new Icons("restore_from_trash");
    static restore_page = new Icons("restore_page");
    static ring_volume = new Icons("ring_volume");
    static room = new Icons("room");
    static room_service = new Icons("room_service");
    static rotate_90_degrees_ccw = new Icons("rotate_90_degrees_ccw");
    static rotate_left = new Icons("rotate_left");
    static rotate_right = new Icons("rotate_right");
    static rounded_corner = new Icons("rounded_corner");
    static router = new Icons("router");
    static rowing = new Icons("rowing");
    static rss_feed = new Icons("rss_feed");
    static rv_hookup = new Icons("rv_hookup");
    static satellite = new Icons("satellite");
    static save = new Icons("save");
    static save_alt = new Icons("save_alt");
    static scanner = new Icons("scanner");
    static scatter_plot = new Icons("scatter_plot");
    static schedule = new Icons("schedule");
    static school = new Icons("school");
    static score = new Icons("score");
    static screen_lock_landscape = new Icons("screen_lock_landscape");
    static screen_lock_portrait = new Icons("screen_lock_portrait");
    static screen_lock_rotation = new Icons("screen_lock_rotation");
    static screen_rotation = new Icons("screen_rotation");
    static screen_share = new Icons("screen_share");
    static sd_card = new Icons("sd_card");
    static sd_storage = new Icons("sd_storage");
    static search = new Icons("search");
    static security = new Icons("security");
    static select_all = new Icons("select_all");
    static send = new Icons("send");
    static sentiment_dissatisfied = new Icons("sentiment_dissatisfied");
    static sentiment_neutral = new Icons("sentiment_neutral");
    static sentiment_satisfied = new Icons("sentiment_satisfied");
    static sentiment_very_dissatisfied = new Icons("sentiment_very_dissatisfied");
    static sentiment_very_satisfied = new Icons("sentiment_very_satisfied");
    static settings = new Icons("settings");
    static settings_applications = new Icons("settings_applications");
    static settings_backup_restore = new Icons("settings_backup_restore");
    static settings_bluetooth = new Icons("settings_bluetooth");
    static settings_brightness = new Icons("settings_brightness");
    static settings_cell = new Icons("settings_cell");
    static settings_ethernet = new Icons("settings_ethernet");
    static settings_input_antenna = new Icons("settings_input_antenna");
    static settings_input_component = new Icons("settings_input_component");
    static settings_input_composite = new Icons("settings_input_composite");
    static settings_input_hdmi = new Icons("settings_input_hdmi");
    static settings_input_svideo = new Icons("settings_input_svideo");
    static settings_overscan = new Icons("settings_overscan");
    static settings_phone = new Icons("settings_phone");
    static settings_power = new Icons("settings_power");
    static settings_remote = new Icons("settings_remote");
    static settings_system_daydream = new Icons("settings_system_daydream");
    static settings_voice = new Icons("settings_voice");
    static share = new Icons("share");
    static shop = new Icons("shop");
    static shop_two = new Icons("shop_two");
    static shopping_basket = new Icons("shopping_basket");
    static shopping_cart = new Icons("shopping_cart");
    static short_text = new Icons("short_text");
    static show_chart = new Icons("show_chart");
    static shuffle = new Icons("shuffle");
    static shutter_speed = new Icons("shutter_speed");
    static signal_cellular_4_bar = new Icons("signal_cellular_4_bar");
    static signal_cellular_connected_no_internet_4_bar = new Icons("signal_cellular_connected_no_internet_4_bar");
    static signal_cellular_no_sim = new Icons("signal_cellular_no_sim");
    static signal_cellular_null = new Icons("signal_cellular_null");
    static signal_cellular_off = new Icons("signal_cellular_off");
    static signal_wifi_4_bar = new Icons("signal_wifi_4_bar");
    static signal_wifi_4_bar_lock = new Icons("signal_wifi_4_bar_lock");
    static signal_wifi_off = new Icons("signal_wifi_off");
    static sim_card = new Icons("sim_card");
    static sim_card_alert = new Icons("sim_card_alert");
    static skip_next = new Icons("skip_next");
    static skip_previous = new Icons("skip_previous");
    static slideshow = new Icons("slideshow");
    static slow_motion_video = new Icons("slow_motion_video");
    static smartphone = new Icons("smartphone");
    static smoke_free = new Icons("smoke_free");
    static smoking_rooms = new Icons("smoking_rooms");
    static sms = new Icons("sms");
    static sms_failed = new Icons("sms_failed");
    static snooze = new Icons("snooze");
    static sort = new Icons("sort");
    static sort_by_alpha = new Icons("sort_by_alpha");
    static spa = new Icons("spa");
    static space_bar = new Icons("space_bar");
    static speaker = new Icons("speaker");
    static speaker_group = new Icons("speaker_group");
    static speaker_notes = new Icons("speaker_notes");
    static speaker_notes_off = new Icons("speaker_notes_off");
    static speaker_phone = new Icons("speaker_phone");
    static spellcheck = new Icons("spellcheck");
    static star = new Icons("star");
    static star_border = new Icons("star_border");
    static star_half = new Icons("star_half");
    static stars = new Icons("stars");
    static stay_current_landscape = new Icons("stay_current_landscape");
    static stay_current_portrait = new Icons("stay_current_portrait");
    static stay_primary_landscape = new Icons("stay_primary_landscape");
    static stay_primary_portrait = new Icons("stay_primary_portrait");
    static stop = new Icons("stop");
    static stop_screen_share = new Icons("stop_screen_share");
    static storage = new Icons("storage");
    static store = new Icons("store");
    static store_mall_directory = new Icons("store_mall_directory");
    static straighten = new Icons("straighten");
    static streetview = new Icons("streetview");
    static strikethrough_s = new Icons("strikethrough_s");
    static style = new Icons("style");
    static subdirectory_arrow_left = new Icons("subdirectory_arrow_left");
    static subdirectory_arrow_right = new Icons("subdirectory_arrow_right");
    static subject = new Icons("subject");
    static subscriptions = new Icons("subscriptions");
    static subtitles = new Icons("subtitles");
    static subway = new Icons("subway");
    static supervised_user_circle = new Icons("supervised_user_circle");
    static supervisor_account = new Icons("supervisor_account");
    static surround_sound = new Icons("surround_sound");
    static swap_calls = new Icons("swap_calls");
    static swap_horiz = new Icons("swap_horiz");
    static swap_horizontal_circle = new Icons("swap_horizontal_circle");
    static swap_vert = new Icons("swap_vert");
    static swap_vertical_circle = new Icons("swap_vertical_circle");
    static switch_camera = new Icons("switch_camera");
    static switch_video = new Icons("switch_video");
    static sync = new Icons("sync");
    static sync_disabled = new Icons("sync_disabled");
    static sync_problem = new Icons("sync_problem");
    static system_update = new Icons("system_update");
    static system_update_alt = new Icons("system_update_alt");
    static tab = new Icons("tab");
    static tab_unselected = new Icons("tab_unselected");
    static table_chart = new Icons("table_chart");
    static tablet = new Icons("tablet");
    static tablet_android = new Icons("tablet_android");
    static tablet_mac = new Icons("tablet_mac");
    static tag_faces = new Icons("tag_faces");
    static tap_and_play = new Icons("tap_and_play");
    static terrain = new Icons("terrain");
    static text_fields = new Icons("text_fields");
    static text_format = new Icons("text_format");
    static text_rotate_up = new Icons("text_rotate_up");
    static text_rotate_vertical = new Icons("text_rotate_vertical");
    static text_rotation_angledown = new Icons("text_rotation_angledown");
    static text_rotation_angleup = new Icons("text_rotation_angleup");
    static text_rotation_down = new Icons("text_rotation_down");
    static text_rotation_none = new Icons("text_rotation_none");
    static textsms = new Icons("textsms");
    static texture = new Icons("texture");
    static theaters = new Icons("theaters");
    static thumb_down = new Icons("thumb_down");
    static thumb_up = new Icons("thumb_up");
    static thumbs_up_down = new Icons("thumbs_up_down");
    static time_to_leave = new Icons("time_to_leave");
    static timelapse = new Icons("timelapse");
    static timeline = new Icons("timeline");
    static timer = new Icons("timer");
    static timer_10 = new Icons("timer_10");
    static timer_3 = new Icons("timer_3");
    static timer_off = new Icons("timer_off");
    static title = new Icons("title");
    static toc = new Icons("toc");
    static today = new Icons("today");
    static toll = new Icons("toll");
    static tonality = new Icons("tonality");
    static touch_app = new Icons("touch_app");
    static toys = new Icons("toys");
    static track_changes = new Icons("track_changes");
    static traffic = new Icons("traffic");
    static train = new Icons("train");
    static tram = new Icons("tram");
    static transfer_within_a_station = new Icons("transfer_within_a_station");
    static transform = new Icons("transform");
    static transit_enterexit = new Icons("transit_enterexit");
    static translate = new Icons("translate");
    static trending_down = new Icons("trending_down");
    static trending_flat = new Icons("trending_flat");
    static trending_up = new Icons("trending_up");
    static trip_origin = new Icons("trip_origin");
    static tune = new Icons("tune");
    static turned_in = new Icons("turned_in");
    static turned_in_not = new Icons("turned_in_not");
    static tv = new Icons("tv");
    static unarchive = new Icons("unarchive");
    static undo = new Icons("undo");
    static unfold_less = new Icons("unfold_less");
    static unfold_more = new Icons("unfold_more");
    static update = new Icons("update");
    static usb = new Icons("usb");
    static verified_user = new Icons("verified_user");
    static vertical_align_bottom = new Icons("vertical_align_bottom");
    static vertical_align_center = new Icons("vertical_align_center");
    static vertical_align_top = new Icons("vertical_align_top");
    static vibration = new Icons("vibration");
    static video_call = new Icons("video_call");
    static video_label = new Icons("video_label");
    static video_library = new Icons("video_library");
    static videocam = new Icons("videocam");
    static videocam_off = new Icons("videocam_off");
    static videogame_asset = new Icons("videogame_asset");
    static view_agenda = new Icons("view_agenda");
    static view_array = new Icons("view_array");
    static view_carousel = new Icons("view_carousel");
    static view_column = new Icons("view_column");
    static view_comfy = new Icons("view_comfy");
    static view_compact = new Icons("view_compact");
    static view_day = new Icons("view_day");
    static view_headline = new Icons("view_headline");
    static view_list = new Icons("view_list");
    static view_module = new Icons("view_module");
    static view_quilt = new Icons("view_quilt");
    static view_stream = new Icons("view_stream");
    static view_week = new Icons("view_week");
    static vignette = new Icons("vignette");
    static visibility = new Icons("visibility");
    static visibility_off = new Icons("visibility_off");
    static voice_chat = new Icons("voice_chat");
    static voicemail = new Icons("voicemail");
    static volume_down = new Icons("volume_down");
    static volume_mute = new Icons("volume_mute");
    static volume_off = new Icons("volume_off");
    static volume_up = new Icons("volume_up");
    static vpn_key = new Icons("vpn_key");
    static vpn_lock = new Icons("vpn_lock");
    static wallpaper = new Icons("wallpaper");
    static warning = new Icons("warning");
    static watch = new Icons("watch");
    static watch_later = new Icons("watch_later");
    static wb_auto = new Icons("wb_auto");
    static wb_cloudy = new Icons("wb_cloudy");
    static wb_incandescent = new Icons("wb_incandescent");
    static wb_iridescent = new Icons("wb_iridescent");
    static wb_sunny = new Icons("wb_sunny");
    static wc = new Icons("wc");
    static web = new Icons("web");
    static web_asset = new Icons("web_asset");
    static weekend = new Icons("weekend");
    static whatshot = new Icons("whatshot");
    static widgets = new Icons("widgets");
    static wifi = new Icons("wifi");
    static wifi_lock = new Icons("wifi_lock");
    static wifi_tethering = new Icons("wifi_tethering");
    static work = new Icons("work");
    static wrap_text = new Icons("wrap_text");
    static youtube_searched_for = new Icons("youtube_searched_for");
    static zoom_in = new Icons("zoom_in");
    static zoom_out = new Icons("zoom_out");
    static zoom_out_map = new Icons("zoom_out_map");
  }
//#endregion


//#region ******** Cupertino Icons ********
export class CupertinoIcons extends IconData{
    constructor(icon:string){
      super(icon);
    }

  
    static left_chevron = new CupertinoIcons("left_chevron");
    static right_chevron = new CupertinoIcons("right_chevron");
    static share = new CupertinoIcons("share");
    static share_solid = new CupertinoIcons("share_solid");
    static book = new CupertinoIcons("book");
    static book_solid = new CupertinoIcons("book_solid");
    static bookmark = new CupertinoIcons("bookmark");
    static bookmark_solid = new CupertinoIcons("bookmark_solid");
    static info = new CupertinoIcons("info");
    static reply = new CupertinoIcons("reply");
    static conversation_bubble = new CupertinoIcons("conversation_bubble");
    static profile_circled = new CupertinoIcons("profile_circled");
    static plus_circled = new CupertinoIcons("plus_circled");
    static minus_circled = new CupertinoIcons("minus_circled");
    static flag = new CupertinoIcons("flag");
    static search = new CupertinoIcons("search");
    static check_mark = new CupertinoIcons("check_mark");
    static check_mark_circled = new CupertinoIcons("check_mark_circled");
    static check_mark_circled_solid = new CupertinoIcons("check_mark_circled_solid");
    static circle = new CupertinoIcons("circle");
    static circle_filled = new CupertinoIcons("circle_filled");
    static back = new CupertinoIcons("back");
    static forward = new CupertinoIcons("forward");
    static home = new CupertinoIcons("home");
    static shopping_cart = new CupertinoIcons("shopping_cart");
    static ellipsis = new CupertinoIcons("ellipsis");
    static phone = new CupertinoIcons("phone");
    static phone_solid = new CupertinoIcons("phone_solid");
    static down_arrow = new CupertinoIcons("down_arrow");
    static up_arrow = new CupertinoIcons("up_arrow");
    static battery_charging = new CupertinoIcons("battery_charging");
    static battery_empty = new CupertinoIcons("battery_empty");
    static battery_full = new CupertinoIcons("battery_full");
    static battery_75_percent = new CupertinoIcons("battery_75_percent");
    static battery_25_percent = new CupertinoIcons("battery_25_percent");
    static bluetooth = new CupertinoIcons("bluetooth");
    static restart = new CupertinoIcons("restart");
    static reply_all = new CupertinoIcons("reply_all");
    static reply_thick_solid = new CupertinoIcons("reply_thick_solid");
    static share_up = new CupertinoIcons("share_up");
    static shuffle = new CupertinoIcons("shuffle");
    static shuffle_medium = new CupertinoIcons("shuffle_medium");
    static shuffle_thick = new CupertinoIcons("shuffle_thick");
    static photo_camera = new CupertinoIcons("photo_camera");
    static photo_camera_solid = new CupertinoIcons("photo_camera_solid");
    static video_camera = new CupertinoIcons("video_camera");
    static video_camera_solid = new CupertinoIcons("video_camera_solid");
    static switch_camera = new CupertinoIcons("switch_camera");
    static switch_camera_solid = new CupertinoIcons("switch_camera_solid");
    static collections = new CupertinoIcons("collections");
    static collections_solid = new CupertinoIcons("collections_solid");
    static folder = new CupertinoIcons("folder");
    static folder_solid = new CupertinoIcons("folder_solid");
    static folder_open = new CupertinoIcons("folder_open");
    static delete = new CupertinoIcons("delete");
    static delete_solid = new CupertinoIcons("delete_solid");
    static delete_simple = new CupertinoIcons("delete_simple");
    static pen = new CupertinoIcons("pen");
    static pencil = new CupertinoIcons("pencil");
    static create = new CupertinoIcons("create");
    static create_solid = new CupertinoIcons("create_solid");
    static refresh = new CupertinoIcons("refresh");
    static refresh_circled = new CupertinoIcons("refresh_circled");
    static refresh_circled_solid = new CupertinoIcons("refresh_circled_solid");
    static refresh_thin = new CupertinoIcons("refresh_thin");
    static refresh_thick = new CupertinoIcons("refresh_thick");
    static refresh_bold = new CupertinoIcons("refresh_bold");
    static clear_thick = new CupertinoIcons("clear_thick");
    static clear_thick_circled = new CupertinoIcons("clear_thick_circled");
    static clear = new CupertinoIcons("clear");
    static clear_circled = new CupertinoIcons("clear_circled");
    static clear_circled_solid = new CupertinoIcons("clear_circled_solid");
    static add = new CupertinoIcons("add");
    static add_circled = new CupertinoIcons("add_circled");
    static add_circled_solid = new CupertinoIcons("add_circled_solid");
    static gear = new CupertinoIcons("gear");
    static gear_solid = new CupertinoIcons("gear_solid");
    static gear_big = new CupertinoIcons("gear_big");
    static settings = new CupertinoIcons("settings");
    static settings_solid = new CupertinoIcons("settings_solid");
    static music_note = new CupertinoIcons("music_note");
    static double_music_note = new CupertinoIcons("double_music_note");
    static play_arrow = new CupertinoIcons("play_arrow");
    static play_arrow_solid = new CupertinoIcons("play_arrow_solid");
    static pause = new CupertinoIcons("pause");
    static pause_solid = new CupertinoIcons("pause_solid");
    static loop = new CupertinoIcons("loop");
    static loop_thick = new CupertinoIcons("loop_thick");
    static volume_down = new CupertinoIcons("volume_down");
    static volume_mute = new CupertinoIcons("volume_mute");
    static volume_off = new CupertinoIcons("volume_off");
    static volume_up = new CupertinoIcons("volume_up");
    static fullscreen = new CupertinoIcons("fullscreen");
    static fullscreen_exit = new CupertinoIcons("fullscreen_exit");
    static mic_off = new CupertinoIcons("mic_off");
    static mic = new CupertinoIcons("mic");
    static mic_solid = new CupertinoIcons("mic_solid");
    static clock = new CupertinoIcons("clock");
    static clock_solid = new CupertinoIcons("clock_solid");
    static time = new CupertinoIcons("time");
    static time_solid = new CupertinoIcons("time_solid");
    static padlock = new CupertinoIcons("padlock");
    static padlock_solid = new CupertinoIcons("padlock_solid");
    static eye = new CupertinoIcons("eye");
    static eye_solid = new CupertinoIcons("eye_solid");
    static person = new CupertinoIcons("person");
    static person_solid = new CupertinoIcons("person_solid");
    static person_add = new CupertinoIcons("person_add");
    static person_add_solid = new CupertinoIcons("person_add_solid");
    static group = new CupertinoIcons("group");
    static group_solid = new CupertinoIcons("group_solid");
    static mail = new CupertinoIcons("mail");
    static mail_solid = new CupertinoIcons("mail_solid");
    static location = new CupertinoIcons("location");
    static location_solid = new CupertinoIcons("location_solid");
    static tag = new CupertinoIcons("tag");
    static tag_solid = new CupertinoIcons("tag_solid");
    static tags = new CupertinoIcons("tags");
    static tags_solid = new CupertinoIcons("tags_solid");
    static bus = new CupertinoIcons("bus");
    static car = new CupertinoIcons("car");
    static car_detailed = new CupertinoIcons("car_detailed");
    static train_style_one = new CupertinoIcons("train_style_one");
    static train_style_two = new CupertinoIcons("train_style_two");
    static paw = new CupertinoIcons("paw");
    static paw_solid = new CupertinoIcons("paw_solid");
    static game_controller = new CupertinoIcons("game_controller");
    static game_controller_solid = new CupertinoIcons("game_controller_solid");
    static lab_flask = new CupertinoIcons("lab_flask");
    static lab_flask_solid = new CupertinoIcons("lab_flask_solid");
    static heart = new CupertinoIcons("heart");
    static heart_solid = new CupertinoIcons("heart_solid");
    static bell = new CupertinoIcons("bell");
    static bell_solid = new CupertinoIcons("bell_solid");
    static news = new CupertinoIcons("news");
    static news_solid = new CupertinoIcons("news_solid");
    static brightness = new CupertinoIcons("brightness");
    static brightness_solid = new CupertinoIcons("brightness_solid");
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
  }
  
  //****** ActionChip ******
  interface ActionChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    onPressed:OnCallback;
    pressElevation?:number;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
  }
  export class ActionChip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    onPressed?:OnCallback;
    pressElevation?:number;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
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
    constructor(config: ActionChipConfig){
      super();
      if(config!=null && config!=undefined){
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
  }
  
  //****** TODO AnimatedOpacity ******
  interface AnimatedOpacityConfig {
    key?:Key;
    child?:Widget;
    opacity?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:OnCallback;
    alwaysIncludeSemantics?:boolean;
  }
  export class AnimatedOpacity extends Widget {
    key?:Key;
    child?:Widget;
    opacity?:number;
    curve?:Curve;
    duration?:Duration;
    onEnd?:OnCallback;
    alwaysIncludeSemantics?:boolean;
  
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
    onEnd?:OnCallback;
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
    onEnd?:OnCallback;
  
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
    onEnd?:OnCallback;
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
    onEnd?:OnCallback;
  
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
    onEnd?:OnCallback;
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
    onEnd?:OnCallback;
  
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
    onEnd?:OnCallback;
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
    onEnd?:OnCallback;
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
  }
  
  //#endregion
  
  //#region ------- B -------
  //****** BottomNavigationBarItem ******
  interface BottomNavigationBarItemConfig {
    icon:Widget;
    title?:Widget;
    label?:string;
    activeIcon?:Widget;
    backgroundColor?:Color;
  }
  export class BottomNavigationBarItem extends Widget {
    icon?:Widget;
    title?:Widget;
    label?:string;
    activeIcon?:Widget;
    backgroundColor?:Color;
  
    /**
     * @param config config: 
        {
          icon:Widget, 
          title?:Widget,
          activeIcon?:Widget, 
          label?:string, 
          backgroundColor?:Color
        }
     */
    constructor(config: BottomNavigationBarItemConfig){
      super();
      if(config!=null && config!=undefined){
        this.icon = config.icon;
        this.title = config.title;
        this.label = config.label;
        this.activeIcon = config.activeIcon;
        this.backgroundColor = config.backgroundColor;
      }
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
  }
  
  //****** BottomNavigationBar ******
  interface BottomNavigationBarConfig {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:OnCallbackNumber;
    currentIndex?:number;
    elevation?:number;
    type?:BottomNavigationBarType;
    fixedColor?:Color;
    backgroundColor?:Color;
    iconSize?:number;
    selectedItemColor?:Color;
    unselectedItemColor?:Color;
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
    onTap?:OnCallbackNumber;
    currentIndex?:number;
    elevation?:number;
    type?:BottomNavigationBarType;
    fixedColor?:Color;
    backgroundColor?:Color;
    iconSize?:number;
    selectedItemColor?:Color;
    unselectedItemColor?:Color;
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
        this.selectedFontSize = config.selectedFontSize;
        this.unselectedFontSize = config.unselectedFontSize;
        this.selectedLabelStyle = config.selectedLabelStyle;
        this.unselectedLabelStyle = config.unselectedLabelStyle;
        this.showSelectedLabels = config.showSelectedLabels;
        this.showUnselectedLabels = config.showUnselectedLabels;
      }
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
  }
  
  //****** BackButton ******
  interface BackButtonConfig {
    key?:Key;
    onPressed?:OnCallback;
  }
  export class BackButton extends Widget {
    key?:Key;
    onPressed?:OnCallback;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          onPressed?:OnCallback,
        }
     */
    constructor(config: BackButtonConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.onPressed = config.onPressed;
      }
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
  }
  //#endregion
  
  //#region ------- C -------
  
  //****** ColorFiltered ******
  interface ColorFilteredConfig {
    key?:Key;
    colorFilter:ColorFilter;
    child?:Color;
  }
  export class ColorFiltered extends Widget {
    key?:Key;
    colorFilter?:ColorFilter;
    child?:Color;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          colorFilter:ColorFilter, 
          child?:Color, 
        }
     */
    constructor(config: ColorFilteredConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.colorFilter = config.colorFilter;
        this.child = config.child;
      }
    }
  }

  //****** CloseButton ******
  interface CloseButtonConfig {
    key?:Key;
    onPressed?:OnCallback;
    color?:Color;
  }
  export class CloseButton extends Widget {
    key?:Key;
    onPressed?:OnCallback;
    color?:Color;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          onPressed?:OnCallback,
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
  }
  
  //****** ChoiceChip ******
  interface ChoiceChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected:boolean;
    onSelected?:OnCallbackBoolean;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    avatarBorder?:ShapeBorder;
  }
  export class ChoiceChip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    onSelected?:OnCallbackBoolean;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    avatarBorder?:ShapeBorder;
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
    constructor(config: ChoiceChipConfig){
      super();
      if(config!=null && config!=undefined){
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
  }
  
  //****** Chip ******
  interface ChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    deleteIcon?:Widget;
    onDeleted?:OnCallback;
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
    onDeleted?:OnCallback;
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
  }
  
  //****** CheckboxListTile ******
  interface CheckboxListTileConfig {
    key?:Key;
    value:boolean;
    onChanged:OnCallbackBoolean;
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
    onChanged?:OnCallbackBoolean;
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
  }
  
  //****** Checkbox ******
  interface CheckboxConfig {
    key?:Key;
    value:boolean;
    onChanged:OnCallbackBoolean;
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
    onChanged?:OnCallbackBoolean;
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
  }

  //****** CheckboxEx ******
  interface CheckboxExConfig {
    key?:Key;
    value:boolean;
    tristate?:boolean;
    onChanged:OnCallbackBoolean;
    activeColor?:Color;
    width?:number;
    checkColor?:Color;
    isCircle?:boolean;
    strokeWidth?:number;
  }
  export class CheckboxEx extends Widget {
    key?:Key;
    value?:boolean;
    tristate?:boolean;
    onChanged?:OnCallbackBoolean;
    activeColor?:Color;
    width?:number;
    checkColor?:Color;
    isCircle?:boolean;
    strokeWidth?:number;
  
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
    constructor(config: CheckboxExConfig){
      super();
      if(config!=null && config!=undefined){
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
  
  //****** ClipRect ******
  interface ClipRectConfig {
    key?:Key;
    clipBehavior?:Clip;
    child?:Widget;
  }
  export class ClipRect extends Widget {
    key?:Key;
    clipBehavior?:Clip;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          child?:Widget,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config: ClipRectConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.clipBehavior = config.clipBehavior;
        this.child = config.child;
      }
    }
  }

  //****** ClipOval ******
  interface ClipOvalConfig {
    key?:Key;
    clipBehavior?:Clip;
    child?:Widget;
  }
  export class ClipOval extends Widget {
    key?:Key;
    clipBehavior?:Clip;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          child?:Widget,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(config: ClipOvalConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.clipBehavior = config.clipBehavior;
        this.child = config.child;
      }
    }
  }

  
  //****** ClipRRect ******
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
  }
  
  //****** DropdownMenuItem ******
  interface DropdownMenuItemConfig {
    child:Widget;  
    value?:number;
    key?:Key;
    onTap?:OnCallback;
  }
  export class DropdownMenuItem extends Widget {
    child?:Widget;  
    value?:number;
    key?:Key;
    onTap?:OnCallback;
  
    /**
     * @param config config: 
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:OnCallback,
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
  }
  
  //****** DecorationImage ******
  interface DecorationImageConfig {
    image?:ImageProvider;
    alignment?:Alignment;
    colorFilter?:ColorFilter;
    fit?:BoxFit;
    centerSlice?:Rect;
    repeat?:ImageRepeat;
    matchTextDirection?:boolean;
    scale?:number;
  }
  export class DecorationImage extends Widget {
    image?:ImageProvider;
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
  }
  
  //****** ExpandIcon ******
  interface ExpandIconConfig {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed:OnCallbackBoolean;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    expandedColor?:Color;
  }
  export class ExpandIcon extends Widget {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed?:OnCallbackBoolean;
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
          onPressed:OnCallbackBoolean, 
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
  }
  
  
  //****** ExpansionTile ******
  interface ExpansionTileConfig {
      key?:Key;
      leading?:Widget;
      title?:Widget;
      subtitle?:Widget;
      backgroundColor?:Color;
      onExpansionChanged?:OnCallbackBoolean;
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
      onExpansionChanged?:OnCallbackBoolean;
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
  }
  
  //****** FilterChip ******
  interface FilterChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    onSelected:OnCallbackBoolean;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
  }
  export class FilterChip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;   
    onSelected?:OnCallbackBoolean;    
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
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
    constructor(config: FilterChipConfig){
      super();
      if(config!=null && config!=undefined){
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
  }
  
  //****** FlatButton ******
  interface FlatButtonConfig {
    child:Widget;
    onPressed:OnCallback;
    padding?:EdgeInsets;
    onHighlightChanged?:OnCallbackBoolean;
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
  
    onLongPress?: OnCallback;
    focusColor?: Color;
    hoverColor?: Color;
    visualDensity?: VisualDensity;
    autofocus?: boolean;
  
    icon?:Widget;
    label?:Widget;
  }
  export class FlatButton extends Widget {
    child?:Widget;
    onPressed?:OnCallback;
    padding?:EdgeInsets;
    onHighlightChanged?:OnCallbackBoolean;
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
    onLongPress?:OnCallback;
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
    onPressed:OnCallback;
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
    onPressed?:OnCallback;
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
          onPressed:OnCallback, 
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
  }
  
  //#endregion
  
  //#region ------- G -------
  //****** GestureDetector ******
  interface GestureDetectorConfig {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapUp?:OnTapUp;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onLongPressUp?:OnCallback;
    onVerticalDragDown?:OnDragDown;
    onVerticalDragStart?:OnDragStart;
    onVerticalDragUpdate?:OnDragUpdate;
    onVerticalDragEnd?:OnDragEnd;
    onVerticalDragCancel?:OnCallback;
    onHorizontalDragDown?:OnDragDown;
    onHorizontalDragStart?:OnDragStart;
    onHorizontalDragUpdate?:OnDragUpdate;
    onHorizontalDragEnd?:OnDragEnd;
    onHorizontalDragCancel?:OnCallback;
    onPanDown?:OnDragDown;
    onPanStart?:OnDragStart;
    onPanUpdate?:OnDragUpdate;
    onPanEnd?:OnDragEnd;
    onPanCancel?:OnCallback;
    onScaleStart?:OnScaleStart;
    onScaleUpdate?:OnScaleUpdate;
    onScaleEnd?:OnScaleEnd;
    behavior?:HitTestBehavior;
    excludeFromSemantics?:boolean;    
  }
  export class GestureDetector extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapUp?:OnTapUp;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onLongPressUp?:OnCallback;
    onVerticalDragDown?:OnDragDown;
    onVerticalDragStart?:OnDragStart;
    onVerticalDragUpdate?:OnDragUpdate;
    onVerticalDragEnd?:OnDragEnd;
    onVerticalDragCancel?:OnCallback;
    onHorizontalDragDown?:OnDragDown;
    onHorizontalDragStart?:OnDragStart;
    onHorizontalDragUpdate?:OnDragUpdate;
    onHorizontalDragEnd?:OnDragEnd;
    onHorizontalDragCancel?:OnCallback;
    onPanDown?:OnDragDown;
    onPanStart?:OnDragStart;
    onPanUpdate?:OnDragUpdate;
    onPanEnd?:OnDragEnd;
    onPanCancel?:OnCallback;
    onScaleStart?:OnScaleStart;
    onScaleUpdate?:OnScaleUpdate;
    onScaleEnd?:OnScaleEnd;
    behavior?:HitTestBehavior;
    excludeFromSemantics?:boolean;  
    
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
  }
  
  //****** GridView ******
  interface GridViewConfig {
    key?:Key;
    scrollDirection?:Axis;
    reverse?:boolean;
    controller?:ScrollController;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    padding?:EdgeInsets;
    gridDelegate:SliverGridDelegate;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    cacheExtent?:number;
    children?:Array<Widget>;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    clipBehavior?:Clip;
    keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior;
    restorationId?:string;
  }
  export class GridView extends Widget {
    key?:Key;
    scrollDirection?:Axis;
    reverse?:boolean;
    controller?:ScrollController;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    padding?:EdgeInsets;
    gridDelegate?:SliverGridDelegate;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    cacheExtent?:number;
    children?:Array<Widget>;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    clipBehavior?:Clip;
    keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior;
    restorationId?:string;
  
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
    constructor(config: GridViewConfig){
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
  }

  //****** InputChip ******
  interface InputChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    isEnabled?:boolean;
    onSelected?:OnCallbackBoolean;
    deleteIcon?:Widget;
    onDeleted?:OnCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    onPressed?:OnCallback;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
  }
  export class InputChip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    isEnabled?:boolean;
    onSelected?:OnCallbackBoolean;
    deleteIcon?:Widget;
    onDeleted?:OnCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    onPressed?:OnCallback;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
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
    constructor(config: InputChipConfig){
      super();
      if(config!=null && config!=undefined){
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


   //****** IconSpan ******
  //TODO:recognizer => GestureRecognizer
  interface IconSpanConfig {
    icon:IconData;
    color?:Color;
    fontSize?:number;
  }
  export class IconSpan extends Widget {
    icon?:IconData;
    color?:Color;
    fontSize?:number;
    /**
     * @param config config: 
      {
        icon:IconData, 
        color?:Color, 
        fontSize?:number, 
      }
     */
    constructor(config: IconSpanConfig){
      super();
      if(config!=null && config!=undefined){
        this.icon = config.icon;
        this.color = config.color;
        this.fontSize = config.fontSize;
      }
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
  }
  
  //****** IconButton ******
  interface IconButtonConfig {
    key?:Key;
    icon:Widget;
    onPressed:OnCallback;
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
    onPressed?:OnCallback;
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
  }
  
  //****** InkResponse ******
  interface InkResponseConfig {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
    onHover?:OnCallbackBoolean;
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
    onFocusChange?:OnCallbackBoolean;
    autofocus?:boolean;
  }
  export class InkResponse extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
    onHover?:OnCallbackBoolean;
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
    onFocusChange?:OnCallbackBoolean;
    autofocus?:boolean;
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
  }

  //****** InkWell ******
  interface InkWellConfig {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
    onHover?:OnCallbackBoolean;
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
    onFocusChange?:OnCallbackBoolean;
    autofocus?:boolean;
  }
  export class InkWell extends Widget {
    key?:Key;
    child?:Widget;
    onTap?:OnCallback;
    onTapDown?:OnTapDown;
    onTapCancel?:OnCallback;
    onDoubleTap?:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
    onHover?:OnCallbackBoolean;
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
    onFocusChange?:OnCallbackBoolean;
    autofocus?:boolean;
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
  }

  //****** Image ******
  //TODO:frameBuilder、loadingBuilder、errorBuilder
  interface ImageConfig {
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
    imageName?:string;

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
    static asset(imageName:string, config?: ImageConfig) {
      var v = new Image();
      v.constructorName = "asset";
      v.imageName = imageName;
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
  }
  //#endregion
  
  //#region ------- L -------
  //****** LabelTitle ******
  interface LabelTitleConfig {
    key?:Key;
    label?:string;
    labelStyle?:TextStyle;
    title?:string;
    titleStyle?:TextStyle;
  }
  export class LabelTitle extends Widget {
    key?:Key;
    label?:string;
    labelStyle?:TextStyle;
    title?:string;
    titleStyle?:TextStyle;
  
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
    constructor(config: LabelTitleConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.label = config.label;
        this.labelStyle = config.labelStyle;
        this.title = config.title;
        this.titleStyle = config.titleStyle;
      }
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

  }
  
  //****** ListTile ******
  interface ListTileConfig {
    key?:Key;
    leading?:Widget;
    title?:Widget;
    subtitle?:Widget;
    trailing?:Widget;
    onTap?:OnCallback;
    onLongPress?:OnCallback;
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
    onTap?:OnCallback;
    onLongPress?:OnCallback;
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
  }
  
  //****** ListView ******
  interface ListViewBaseConfig {    
    padding?:EdgeInsets;
    controller?:ScrollController;
    scrollDirection?:Axis;
    reverse?:boolean;
    primary?:boolean;
    physics?:ScrollPhysics;
    shrinkWrap?:boolean;
    itemExtent?:number;
    cacheExtent?:number;
    semanticChildCount?:number;
    dragStartBehavior?:DragStartBehavior;
    key?:Key;
    keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior;
    restorationId?:string;
    clipBehavior?:Clip;
  }

  interface ListViewConfig extends ListViewBaseConfig {
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    itemCount?:number;
    children?:Array<Widget>;
  }

  interface ListViewBuilderConfig extends ListViewBaseConfig {
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    itemCount:number;
    itemBuilder:IndexedWidgetBuilder;
  }

  interface ListViewSeparatedConfig extends ListViewBaseConfig {
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    itemCount:number;
    itemBuilder:IndexedWidgetBuilder;
    separatorBuilder:IndexedWidgetBuilder;
  }



  interface ListViewCustomConfig extends ListViewBaseConfig {
    childrenDelegate:SliverChildDelegate;
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
    keyboardDismissBehavior?:ScrollViewKeyboardDismissBehavior;
    restorationId?:string;
    clipBehavior?:Clip;
  
  
    itemBuilder?:IndexedWidgetBuilder;
    itemBuilderChildren?:Array<Widget>;
    itemCount?:number;

    separatorBuilder?:IndexedWidgetBuilder;
    separatorBuilderChildren?:Array<Widget>;


    childrenDelegate?:SliverChildDelegate;
  
    preBuild(jsWidgetHelper?:any, buildContext?:any) {
      if (this.itemBuilder) {
        this.itemBuilderChildren = [];
        if(this.itemCount!=null && this.itemCount!=undefined){
          for (let i = 0; i < this.itemCount; ++i) {
            let w = this.itemBuilder(buildContext, i);
            this.itemBuilderChildren.push(w);
          }
        }
        delete this.itemBuilder;
      }

      if (this.separatorBuilder) {
        this.separatorBuilderChildren = [];
        if(this.itemCount!=null && this.itemCount!=undefined){
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
        this.keyboardDismissBehavior = config.keyboardDismissBehavior;
        this.restorationId = config.restorationId;
        this.clipBehavior = config.clipBehavior;
      }
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
    static builder(config: ListViewBuilderConfig) {
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
    static separatorBuilder(config: ListViewSeparatedConfig) {
      let v = new ListView();
      v.constructorName = "separatorBuilder";
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
    static custom(config: ListViewCustomConfig) {
      let v = new ListView();
      v.constructorName = "custom";
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
  }
  
  //****** OutlineButton ******
  interface OutlineButtonConfig {
    key?:Key;
    child?:Widget;
    onPressed:OnCallback;
    onLongPress?:OnCallback;
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
    onPressed?:OnCallback;
    onLongPress?:OnCallback;
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
  }
  
  //****** TODO PreferredSizeWidget ******
  export class PreferredSizeWidget extends Widget {
  
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
  }

  //****** PageView ******
  interface PageViewConfig {
    key?:Key;
    scrollDirection?:Axis;
    reverse?:boolean;
    controller?:PageController;
    physics?:ScrollPhysics;
    pageSnapping?:boolean;
    onPageChanged?:OnCallbackNumber;
    children?:Array<Widget>;
    dragStartBehavior?:DragStartBehavior;
    allowImplicitScrolling?:boolean;
    restorationId?:string;
    clipBehavior?:Clip;
  }
  export class PageView extends Widget {
    key?:Key;
    scrollDirection?:Axis;
    reverse?:boolean;
    controller?:PageController;
    physics?:ScrollPhysics;
    pageSnapping?:boolean;
    onPageChanged?:OnCallbackNumber;
    children?:Array<Widget>;
    dragStartBehavior?:DragStartBehavior;
    allowImplicitScrolling?:boolean;
    restorationId?:string;
    clipBehavior?:Clip;
  
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
    constructor(config: PageViewConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.scrollDirection = config.scrollDirection;
        this.reverse= config.reverse;
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
  }

  //****** RawChip ******
  interface RawChipConfig {
    key?:Key;
    avatar?:Widget;
    label:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    isEnabled?:boolean;
    tapEnabled?:boolean;
    onSelected?:OnCallbackBoolean;
    deleteIcon?:Widget;
    onDeleted?:OnCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    onPressed?:OnCallback;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
  }
  export class RawChip extends Widget {
    key?:Key;
    avatar?:Widget;
    label?:Widget;
    labelStyle?:TextStyle;
    labelPadding?:EdgeInsets;
    selected?:boolean;
    isEnabled?:boolean;
    tapEnabled?:boolean;
    onSelected?:OnCallbackBoolean;
    deleteIcon?:Widget;
    onDeleted?:OnCallback;
    deleteIconColor?:Color;
    deleteButtonTooltipMessage?:string;
    onPressed?:OnCallback;
    pressElevation?:number;
    disabledColor?:Color;
    selectedColor?:Color;
    tooltip?:string;
    shape?:ShapeBorder;
    clipBehavior?:Clip;
    focusNode?:FocusNode;
    autofocus?:boolean;
    backgroundColor?:Color;
    padding?:EdgeInsets;
    visualDensity?:VisualDensity;
    materialTapTargetSize?:MaterialTapTargetSize;
    elevation?:number;
    shadowColor?:Color;
    selectedShadowColor?:Color;
    showCheckmark?:boolean;
    checkmarkColor?:Color;
    avatarBorder?:ShapeBorder;
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
    constructor(config: RawChipConfig){
      super();
      if(config!=null && config!=undefined){
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
  }
  
  //****** RaisedButton ******
  interface RaisedButtonConfig {
    child?:Widget;
    onPressed?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
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
    onLongPress?:OnCallback;
    focusColor?:Color;
    hoverColor?:Color;
    focusElevation?:number;
    hoverElevation?:number;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
  }
  export class RaisedButton extends Widget {
    child?:Widget;
    onPressed?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
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
  
    onLongPress?:OnCallback;
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
  
  //****** Radio ******
  interface RadioConfig {
    key?:Key;
    value?:string;
    groupValue?:string;
    onChanged?:OnCallbackString;
    activeColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
  }
  export class Radio extends Widget {
    key?:Key;
    value?:string;
    groupValue?:string;
    onChanged?:OnCallbackString;
    activeColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
  
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
  }

  //****** RadioListTile ******
  interface RadioListTileConfig {
    key?:Key;
    value:string;
    groupValue:string;
    onChanged:OnCallbackString;
    toggleable?:boolean;
    activeColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    secondary?:Widget;
    selected?:boolean;
    controlAffinity?:ListTileControlAffinity;
    autofocus?:boolean;
  }
  export class RadioListTile extends Widget {
    key?:Key;
    value?:string;
    groupValue?:string;
    onChanged?:OnCallbackString;
    toggleable?:boolean;
    activeColor?:Color;
    title?:Widget;
    subtitle?:Widget;
    isThreeLine?:boolean;
    dense?:boolean;
    secondary?:Widget;
    selected?:boolean;
    controlAffinity?:ListTileControlAffinity;
    autofocus?:boolean;
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
    constructor(config: RadioListTileConfig){
      super();
      if(config!=null && config!=undefined){
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
  
  //****** RawMaterialButton ******
  interface RawMaterialButtonConfig {
    key?:Key;  
    onPressed:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
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
    onPressed?:OnCallback;
    onLongPress?:OnCallback;
    onHighlightChanged?:OnCallbackBoolean;
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
  }
  //#endregion
  
  //#region ------- S -------
  
  //****** Step ******
  interface StepConfig {
    title:Widget;
    subtitle?:Widget;
    content:Widget;
    state?:StepState;
    isActive?:boolean;
  }
  export class Step extends Widget {
    title?:Widget;
    subtitle?:Widget;
    content?:Widget;
    state?:StepState;
    isActive?:boolean;
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
    constructor(config: StepConfig){
      super();
      if(config!=null && config!=undefined){
        this.title = config.title;
        this.subtitle = config.subtitle;
        this.content = config.content;
        this.state = config.state;
        this.isActive = config.isActive;
      }
    }  
  }

  //****** Stepper ******
  interface StepperConfig {
    key?:Key;
    steps?:Array<Step>;
    physics?:ScrollPhysics;
    type?:StepperType;
    currentStep?:number;
    onStepTapped?:OnCallbackNumber;
    onStepContinue?:OnCallback;
    onStepCancel?:OnCallback;
  }
  export class Stepper extends Widget {
    key?:Key;
    steps?:Array<Step>;
    physics?:ScrollPhysics;
    type?:StepperType;
    currentStep?:number;
    onStepTapped?:OnCallbackNumber;
    onStepContinue?:OnCallback;
    onStepCancel?:OnCallback;
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
    constructor(config: StepperConfig){
      super();
      if(config!=null && config!=undefined){
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
  
    onTap?:OnCallback;
    onLongPress?:OnCallback;
    onScrollLeft?:OnCallback;
    onScrollRight?:OnCallback;
    onScrollUp?:OnCallback;
    onScrollDown?:OnCallback;
    onIncrease?:OnCallback;
    onDecrease?:OnCallback;
    onCopy?:OnCallback;
    onCut?:OnCallback;
    onPaste?:OnCallback;
    onDismiss?:OnCallback;
    onDidGainAccessibilityFocus?:OnCallback;
    onDidLoseAccessibilityFocus?:OnCallback;
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
  
    onTap?:OnCallback;
    onLongPress?:OnCallback;
    onScrollLeft?:OnCallback;
    onScrollRight?:OnCallback;
    onScrollUp?:OnCallback;
    onScrollDown?:OnCallback;
    onIncrease?:OnCallback;
    onDecrease?:OnCallback;
    onCopy?:OnCallback;
    onCut?:OnCallback;
    onPaste?:OnCallback;
    onDismiss?:OnCallback;
    onDidGainAccessibilityFocus?:OnCallback;
    onDidLoseAccessibilityFocus?:OnCallback;
  
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
  }
  
  //****** SwitchListTile ******
  interface SwitchListTileConfig {
    key?:Key;
    value:boolean;
    onChanged:OnCallbackBoolean;
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
    onChanged?:OnCallbackBoolean;
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
  }

  //****** Switch ******
  interface SwitchConfig {
    key?:Key;
    value:boolean;
    onChanged?:OnCallbackBoolean;
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
    onChanged?:OnCallbackBoolean;
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
  }
  
  //****** Slider ******
  interface SliderConfig {
    key?:Key;
    value?:number;
    onChanged?:OnCallbackNumber;
    onChangeStart?:OnCallbackNumber;
    onChangeEnd?:OnCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:OnCallbackNumber;
    autofocus?:boolean;  
  }
  export class Slider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:OnCallbackNumber;
    onChangeStart?:OnCallbackNumber;
    onChangeEnd?:OnCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:OnCallbackNumber;
    autofocus?:boolean;  
  
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
    onStretchTrigger?:OnCallback;
    shape?:ShapeBorder;
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
    onStretchTrigger?:OnCallback;
    shape?:ShapeBorder;
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
  
  //****** SliverFillViewport ******
  interface SliverFillViewportConfig {
    key?:Key;
    delegate:SliverChildDelegate;
    viewportFraction?:number;
    padEnds?:boolean;
  }
  export class SliverFillViewport extends Widget {
    key?:Key;
    delegate?:SliverChildDelegate;
    viewportFraction?:number;
    padEnds?:boolean;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        delegate:SliverChildDelegate, 
        viewportFraction?:number, 
        padEnds?:boolean,
      }
     */
    constructor(config: SliverFillViewportConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.delegate = config.delegate;
        this.viewportFraction = config.viewportFraction;
        this.padEnds = config.padEnds;
      }
    }
  }

  //****** SliverFillRemaining ******
  interface SliverFillRemainingConfig {
    key?:Key;
    child?:Widget;
    hasScrollBody?:boolean;
    fillOverscroll?:boolean;
  }
  export class SliverFillRemaining extends Widget {
    key?:Key;
    child?:Widget;
    hasScrollBody?:boolean;
    fillOverscroll?:boolean;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        child?:Widget, 
        hasScrollBody?:boolean, 
        fillOverscroll?:boolean, 
      }
     */
    constructor(config: SliverFillRemainingConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.child = config.child;
        this.hasScrollBody = config.hasScrollBody;
        this.fillOverscroll = config.fillOverscroll;
      }
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
  }
  
  //****** SliverGrid ******
  interface SliverGridConfig {
    delegate?:SliverChildDelegate;
    gridDelegate?:SliverGridDelegate;
    key?:Key;
  }
  export class SliverGrid extends Widget {
    delegate?:SliverChildDelegate;
    gridDelegate?:SliverGridDelegate;
    key?:Key;
  
    /**
     * @param config config: 
      {
        delegate?:SliverChildDelegate, 
        gridDelegate?:SliverGridDelegate, 
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
  }
  
  //#region ****** SliverGridDelegate ******
  export abstract class SliverGridDelegate extends Widget{

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
    static withMax(config: SliverGridDelegateWithMaxCrossAxisExtentConfig){
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
    static withFixed(config: SliverGridDelegateWithFixedCrossAxisCountConfig){
      return new SliverGridDelegateWithFixedCrossAxisCount(config);
    }
  }

  //******  SliverGridDelegateWithMaxCrossAxisExtent ******
  interface SliverGridDelegateWithMaxCrossAxisExtentConfig {
    maxCrossAxisExtent:number;
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
        maxCrossAxisExtent:number, 
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
  }

  //******  SliverGridDelegateWithFixedCrossAxisCount ******
  interface SliverGridDelegateWithFixedCrossAxisCountConfig {
    crossAxisCount:number;
    mainAxisSpacing?:number;
    crossAxisSpacing?:number;
    childAspectRatio?:number;
  }
  export class SliverGridDelegateWithFixedCrossAxisCount extends Widget {
    crossAxisCount?:number;
    mainAxisSpacing?:number;
    crossAxisSpacing?:number;
    childAspectRatio?:number;
  
    /**
     * @param config config: 
      {
        crossAxisCount:number, 
        mainAxisSpacing?:number, 
        crossAxisSpacing?:number, 
        childAspectRatio?:number, 
      }
     */
    constructor(config: SliverGridDelegateWithFixedCrossAxisCountConfig){
      super();
      if(config!=null && config!=undefined){
        this.crossAxisCount = config.crossAxisCount;
        this.mainAxisSpacing = config.mainAxisSpacing;
        this.crossAxisSpacing = config.crossAxisSpacing;
        this.childAspectRatio = config.childAspectRatio;
      }
    }
  }


  //#endregion

  
  //#region ****** SliverChildDelegate ******
  export abstract class SliverChildDelegate extends Widget{

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
    static list(config: SliverChildListDelegateConfig){
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
    static builder(config: SliverChildBuilderDelegateConfig){
      return new SliverChildBuilderDelegate(config);
    }
  }

  //******  SliverChildListDelegate ******
  interface SliverChildListDelegateConfig {
    children:Array<Widget>;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
  }
  export class SliverChildListDelegate extends SliverChildDelegate {
    children?:Array<Widget>;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
  
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
    constructor(config:SliverChildListDelegateConfig){
      super();
      if(config!=null && config!=undefined){
        this.children = config.children;
        this.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
        this.addRepaintBoundaries = config.addRepaintBoundaries;
        this.addSemanticIndexes = config.addSemanticIndexes;
        this.semanticIndexOffset = config.semanticIndexOffset;
      }
    }
  }

  //****** SliverChildBuilderDelegate ******
  interface SliverChildBuilderDelegateConfig {
    builder:IndexedWidgetBuilder;
    childCount:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
  }
  export class SliverChildBuilderDelegate extends SliverChildDelegate {
    builder?:IndexedWidgetBuilder;
    childCount?:number;
    addAutomaticKeepAlives?:boolean;
    addRepaintBoundaries?:boolean;
    addSemanticIndexes?:boolean;
    semanticIndexOffset?:number;
    children?:Array<Widget>;
   
    preBuild(jsWidgetHelper?:any, buildContext?:any) {
      if (this.builder) {
        if(this.childCount!=null && this.childCount!=undefined){
          this.children = [];
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
        builder:IndexedWidgetBuilder, 
        childCount:number, 
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
  }


  //#endregion

  
  //****** SliverList ******
  interface SliverListConfig {
    delegate?:SliverChildDelegate;
    key?:Key;
  }
  export class SliverList extends Widget {
    delegate?:SliverChildDelegate;
    key?:Key;
  
    /**
     * @param config config: 
      {
        delegate?:SliverChildDelegate,
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
  }
  
  //****** SliverOpacity ******
  interface SliverOpacityConfig {
    key?:Key;
    sliver?:Widget;
    opacity:number;
    alwaysIncludeSemantics?:boolean;
  }
  export class SliverOpacity extends Widget {
    key?:Key;
    sliver?:Widget;
    opacity?:number;
    alwaysIncludeSemantics?:boolean;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        sliver?:Widget, 
        opacity:number, 
        alwaysIncludeSemantics?:boolean, 
      }
     */
    constructor(config: SliverOpacityConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.sliver = config.sliver;
        this.opacity = config.opacity;
        this.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
      }
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
  }
  
  //****** SliverFixedExtentList ******
  interface SliverFixedExtentListConfig {
    key?:Key;
    delegate?:SliverChildDelegate;
    itemExtent?:number;
  }
  export class SliverFixedExtentList extends Widget {
    delegate?:SliverChildDelegate;
    itemExtent?:number;
    key?:Key;
  
    /**
     * @param config config: 
      {
        key?:Key, 
        delegate?:SliverChildDelegate, 
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
  }
  
  //****** TODO Scaffold ******
  export class ScaffoldState extends DartClass {
    
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
    onVisible?:OnCallback;
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
    onVisible?:OnCallback;
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
        onVisible?:OnCallback, 
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
  }
  
  //****** SnackBarAction ******
  interface SnackBarActionConfig {
    key?:Widget;
    lable:string;
    onPressed?:OnCallback;
    disabledTextColor?:Color;
    textColor?:Color;
  }
  export class SnackBarAction extends Widget {
    key?:Widget;
    lable?:string;
    onPressed?:OnCallback;
    disabledTextColor?:Color;
    textColor?:Color;
  
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
  }


  //****** SelectableText ******
  interface SelectableTextConfig {
    key?:Key;
    focusNode?:FocusNode;
    style?:TextStyle;
    strutStyle?:StrutStyle;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    textScaleFactor?:number;
    showCursor?:boolean;
    autofocus?:boolean;
    toolbarOptions?:ToolbarOptions;
    minLines?:number;
    maxLines?:number;
    cursorWidth?:number;
    cursorHeight?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean;
    onTap?:OnCallback;
    scrollPhysics?:ScrollPhysics;
    textWidthBasis?:TextWidthBasis;
  }
  export class SelectableText extends Widget {
    data?:string | TextSpan;
    key?:Key;
    focusNode?:FocusNode;
    style?:TextStyle;
    strutStyle?:StrutStyle;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    textScaleFactor?:number;
    showCursor?:boolean;
    autofocus?:boolean;
    toolbarOptions?:ToolbarOptions;
    minLines?:number;
    maxLines?:number;
    cursorWidth?:number;
    cursorHeight?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean;
    onTap?:OnCallback;
    scrollPhysics?:ScrollPhysics;
    textWidthBasis?:TextWidthBasis;
  
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
    constructor(data:string | TextSpan, config?: SelectableTextConfig){
      super();
      this.data = data;
      if(config!=null && config!=undefined){
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
    static rich(data:TextSpan, config?: SelectableTextConfig) {
      var v = new SelectableText(data,config);
      v.constructorName= "rich";
      v.data = data;
      return v;
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
    
  }
  
  //****** TabBar ******
  interface TabBarConfig {
    key?:Key;
    tabs?:Array<Widget>;
    onTap?:OnCallbackNumber;
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
    onTap?:OnCallbackNumber;
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
  }
  
  //****** TabPageSelector ******
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
  
  }
  
  //****** Text ******
  interface TextConfig {
    key?:Key;
    style?:TextStyle;
    strutStyle?:StrutStyle;
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
    strutStyle?:StrutStyle;
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
    constructor(data:string | TextSpan, config?: TextConfig){
      super();
      this.data = data;
      if(config!=null && config!=undefined){
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
    semanticsLabel?:string;
  }
  export class TextSpan extends Widget {
    children?:Array<Widget>;
    style?:TextStyle;
    text?:string;
    semanticsLabel?:string;
  
  
    /**
     * @param config config: 
      {
        children?:Array<Widget>, 
        style?:TextStyle, 
        text?:string, 
        semanticsLabel?:string,
      }
     */
    constructor(config: TextSpanConfig){
      super();
      if(config!=null && config!=undefined){
        this.children = config.children;
        this.style = config.style;
        this.text = config.text;
        this.semanticsLabel = config.semanticsLabel;
      }
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
  }
  
  //****** TextFormField ******
  //TODO:autofillHints、autofillHints
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
    onChanged?:OnCallbackString;
    onTap?:OnCallback;
    onEditingComplete?:OnCallback;
    onFieldSubmitted?:OnCallbackString;
    onSaved?:OnCallbackString;
    validator?:OnCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean; 
    scrollPhysics?:ScrollPhysics;   

    inputFormatters?:Array<TextInputFormatter>; 
    strutStyle?:StrutStyle;
    
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
    onChanged?:OnCallbackString;
    onTap?:OnCallback;
    onEditingComplete?:OnCallback;
    onFieldSubmitted?:OnCallbackString;
    onSaved?:OnCallbackString;
    validator?:OnCallbackString;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    dragStartBehavior?:DragStartBehavior;
    enableInteractiveSelection?:boolean; 
    scrollPhysics?:ScrollPhysics; 
    inputFormatters?:Array<TextInputFormatter>; 
    strutStyle?:StrutStyle;
  
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
        this.inputFormatters = config.inputFormatters;
        this.strutStyle = config.strutStyle;
      }
    }
  }

  //****** TextField ******
  //TODO: iautofillHints、buildCounter
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
    onChanged?:OnCallbackString;
    onEditingComplete?:OnCallback;
    onSubmitted?:OnCallbackString;
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
    onTap?:OnCallback;
    scrollController?:ScrollController;
    scrollPhysics?:ScrollPhysics; 
    inputFormatters?:Array<TextInputFormatter>; 
    strutStyle?:StrutStyle;

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
    onChanged?:OnCallbackString;
    onEditingComplete?:OnCallback;
    onSubmitted?:OnCallbackString;
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
    onTap?:OnCallback;
    scrollController?:ScrollController;
    scrollPhysics?:ScrollPhysics;
    inputFormatters?:Array<TextInputFormatter>; 
    strutStyle?:StrutStyle;
    
  
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
        this.inputFormatters = config.inputFormatters;
        this.strutStyle = config.strutStyle;
      }
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
  }
  
  //****** WillPopScope ******
  interface WillPopScopeConfig {
    child:Widget;
    onWillPop:OnCallback;
  
    key?:Key;
  }
  export class WillPopScope extends Widget {
    key?:Key;
    child?:Widget;
    onWillPop?:OnCallback;
  
    /**
     * @param config config: 
      {
        child:Widget, 
        onWillPop:OnCallback, 
  
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
  }


 

  
  //-------------- B -----------------
  //****** CupertinoButton ******
  interface CupertinoButtonConfig {
    key?:Key;
    child:Widget;
    onPressed:OnCallback;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    minSize?:number;
    pressedOpacity?:number;
    borderRadius?:BorderRadius;
  }
  export class CupertinoButton extends Widget {
    child?:Widget;
    onPressed?:OnCallback;
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
          onPressed:OnCallback, 
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
          onPressed:OnCallback, 
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
  
  //****** CupertinoDialogAction ******
  interface CupertinoDialogActionConfig {
    key?:Key;
    isDefaultAction?:boolean;
    isDestructiveAction?:boolean;
    onPressed?:OnCallback;
    child:Widget;
    textStyle?:TextStyle;
  }
  export class CupertinoDialogAction extends Widget {
    key?:Key;
    isDefaultAction?:boolean;
    isDestructiveAction?:boolean;
    onPressed?:OnCallback;
    child?:Widget;
    textStyle?:TextStyle;
  
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
  
    constructor(config: CupertinoDialogActionConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.onPressed = config.onPressed;
        this.isDefaultAction = config.isDefaultAction;
        this.isDestructiveAction = config.isDestructiveAction;
        this.textStyle = config.textStyle;
        this.child = config.child;
      }
    }
  }

  
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
  }
  
  //****** CupertinoNavigationBarBackButton ******
  interface CupertinoNavigationBarBackButtonConfig {
    key?:Key;
    color?:Color;
    previousPageTitle?:string;
    onPressed?:OnCallback;
  }
  export class CupertinoNavigationBarBackButton extends Widget {
    key?:Key;
    color?:Color;
    previousPageTitle?:string;
    onPressed?:OnCallback;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          color?:Color, 
          previousPageTitle?:string, 
          onPressed?:OnCallback, 
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
  }
  
  //-------------- P -----------------
  
  //-------------- S -----------------
  //****** CupertinoSlider ******
  interface CupertinoSliderConfig {
    key?:Key;
    value:number;
    onChanged:OnCallbackNumber;
    onChangeStart?:OnCallbackNumber;
    onChangeEnd?:OnCallbackNumber;
    min?:number;
    max?:number;
    divisions?:number;
    activeColor?:Color;
    thumbColor?:Color;
  }
  export class CupertinoSlider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:OnCallbackNumber;
    onChangeStart?:OnCallbackNumber;
    onChangeEnd?:OnCallbackNumber;
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
  }
  
  //****** CupertinoSwitch ******
  interface CupertinoSwitchConfig {
    key?:Key;
    value:boolean;
    onChanged:OnCallbackBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  }
  export class CupertinoSwitch extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:OnCallbackBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  
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
  }

  //****** CupertinoSegmentedControl ******
  interface CupertinoSegmentedControlConfig {
    key?:Key;
    children:Array<Widget>;
    onValueChanged:OnCallbackNumber;
    groupValue?:number;
    unselectedColor?:Color;
    selectedColor?:Color;
    borderColor?:Color;
    pressedColor?:Color;
    padding?:EdgeInsets;
  }
  export class CupertinoSegmentedControl extends Widget {
    key?:Key;
    children?:Array<Widget>;
    onValueChanged?:OnCallbackNumber;
    groupValue?:number;
    unselectedColor?:Color;
    selectedColor?:Color;
    borderColor?:Color;
    pressedColor?:Color;
    padding?:EdgeInsets;
  
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
    constructor(config: CupertinoSegmentedControlConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.children = config.children;
        this.onValueChanged = config.onValueChanged;
        this.groupValue = config.groupValue;
        this.groupValue  = config.groupValue;
        this.unselectedColor = config.unselectedColor;
        this.selectedColor = config.selectedColor;
        this.borderColor = config.borderColor;
        this.pressedColor = config.pressedColor;
        this.padding = config.padding;
      }
    }
  }

  //****** CupertinoSlidingSegmentedControl ******
  interface CupertinoSlidingSegmentedControlConfig {
    key?:Key;
    children:Array<Widget>;
    onValueChanged:OnCallbackNumber;
    groupValue?:number;
    thumbColor?:Color;
    backgroundColor?:Color;
    padding?:EdgeInsets;
  }
  export class CupertinoSlidingSegmentedControl extends Widget {
    key?:Key;
    children?:Array<Widget>;
    onValueChanged?:OnCallbackNumber;
    groupValue?:number;
    thumbColor?:Color;
    backgroundColor?:Color;
    padding?:EdgeInsets;
  
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
    constructor(config: CupertinoSlidingSegmentedControlConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.children = config.children;
        this.onValueChanged = config.onValueChanged;
        this.groupValue = config.groupValue;
        this.groupValue  = config.groupValue;
        this.thumbColor = config.thumbColor;
        this.backgroundColor = config.backgroundColor;
        this.padding = config.padding;
      }
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
  }
  
  //-------------- T -----------------

  //****** TestWidget ******
  interface TestWidgetConfig {
    colors:Array<Color>;
    stops?:Array<number>;
  }
  export class TestWidget extends Widget {
    colors?:Array<Color>;
    stops?:Array<number>;
    
    /**
     * @param config config: 
        {
          colors:Array<Color>,
          stops?:Array<number>,
        }
     */
    constructor(config: TestWidgetConfig){
      super();
      if(config!=null && config!=undefined){
        this.colors = config.colors;
        this.stops = config.stops;
      }
    }
  }


  //****** CupertinoTabBar ******
  interface CupertinoTabBarConfig {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:OnCallbackNumber;
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
    onTap?:OnCallbackNumber;
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
          onTap?:OnCallbackNumber, 
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
      this.createMirrorID();
      if(config!=null && config!=undefined){
        this.initialIndex = config.initialIndex;
      }
    }
  }

  //****** CupertinoTabView ******
  interface CupertinoTabViewConfig {
    key?:Key;
    defaultTitle?:string;
    child:Widget;
  }
  export class CupertinoTabView extends Widget {
    key?:Key;
    defaultTitle?:string;
    child?:Widget;
  
    /**
     * @param config config: 
        {
          key?:Key, 
          defaultTitle?:string, 
          child:Widget, 
        }
     */
    constructor(config: CupertinoTabViewConfig){
      super();
      if(config!=null && config!=undefined){
        this.key = config.key;
        this.defaultTitle = this.defaultTitle;
        this.child = config.child;
      }
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
  
  }
  
 
  
  //#endregion


//#region ******** Custom Widgets ********

//****** EmptyDataWidget ******
interface EmptyDataWidgetConfig {
  key?:Key;
  title?:string;
  imageName?:string;
  imageSize?:string;
  backgroundColor?:Color;
  titleStyle?:TextStyle;
}
export class EmptyDataWidget extends Widget {
  key?:Key;
  title?:string;
  imageName?:string;
  imageSize?:string;
  backgroundColor?:Color;
  titleStyle?:TextStyle;

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
  constructor(config?: EmptyDataWidgetConfig){
    super();
    if(config!=null && config!=undefined){
      this.key = config.key;
      this.title = config.title;
      this.imageName = config.imageName;
      this.imageSize = config.imageSize;
      this.backgroundColor = config.backgroundColor;
      this.titleStyle = config.titleStyle;
    }
  }

}

//#endregion


//#region ****** Dialog ******

export abstract class ShowBaseDialog extends Widget{}

interface ShowDialogConfig {
  barrierDismissible?:boolean;
  useSafeArea?:boolean;
  useRootNavigator?:boolean;
  child:Widget; //(通常返回Dialog组件，比如SimpleDialog和AlertDialog),
}
export class ShowDialog extends ShowBaseDialog{
  barrierDismissible?:boolean;
  useSafeArea?:boolean;
  useRootNavigator?:boolean;
  child?:Widget;  //(通常返回Dialog组件，比如SimpleDialog和AlertDialog),

  /**
     * @param config config: 
        {
          barrierDismissible?:boolean, 
          useSafeArea?:boolean, 
          useRootNavigator?:boolean, 
          child:Widget (通常返回Dialog组件，比如SimpleDialog和AlertDialog),
        }
     */
    constructor(config: ShowDialogConfig){
      super();
      if(config!=null && config!=undefined){
        this.barrierDismissible = config.barrierDismissible;
        this.useSafeArea = config.useSafeArea;
        this.useRootNavigator = config.useRootNavigator;
        this.child = config.child;
      }
    }

}

//****** AlertDialog ******
interface AlertDialogConfig {
  key?:Key;
  title?:Widget;
  titlePadding?:EdgeInsets;
  titleTextStyle?:TextStyle;
  content?:Widget;
  contentPadding?:EdgeInsets;
  contentTextStyle?:TextStyle;
  actions?:Array<Widget>;
  actionsPadding?:EdgeInsets;
  actionsOverflowDirection?:VerticalDirection;
  actionsOverflowButtonSpacing?:number;
  buttonPadding?:EdgeInsets;
  backgroundColor?:Color;
  elevation?:number;
  semanticLabel?:string;
  insetPadding?:EdgeInsets;
  clipBehavior?:Clip;
  shape?:ShapeBorder;
  scrollable?:boolean;
}
export class AlertDialog extends Widget {
  key?:Key;
  title?:Widget;
  titlePadding?:EdgeInsets;
  titleTextStyle?:TextStyle;
  content?:Widget;
  contentPadding?:EdgeInsets;
  contentTextStyle?:TextStyle;
  actions?:Array<Widget>;
  actionsPadding?:EdgeInsets;
  actionsOverflowDirection?:VerticalDirection;
  actionsOverflowButtonSpacing?:number;
  buttonPadding?:EdgeInsets;
  backgroundColor?:Color;
  elevation?:number;
  semanticLabel?:string;
  insetPadding?:EdgeInsets;
  clipBehavior?:Clip;
  shape?:ShapeBorder;
  scrollable?:boolean;

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

  constructor(config: AlertDialogConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** SimpleDialog ******
interface SimpleDialogConfig {
  key?:Key;
  title?:Widget;
  titlePadding?:EdgeInsets;
  titleTextStyle?:TextStyle;
  children?:Array<Widget>;
  contentPadding?:EdgeInsets;
  backgroundColor?:Color;
  elevation?:number;
  semanticLabel?:string;
  shape?:ShapeBorder;
}
export class SimpleDialog extends Widget {
  key?:Key;
  title?:Widget;
  titlePadding?:EdgeInsets;
  titleTextStyle?:TextStyle;
  children?:Array<Widget>;
  contentPadding?:EdgeInsets;
  backgroundColor?:Color;
  elevation?:number;
  semanticLabel?:string;
  shape?:ShapeBorder;

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

  constructor(config: SimpleDialogConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** ShowCupertinoDialog ******
interface ShowCupertinoDialogConfig {
  barrierDismissible?:boolean;
  useRootNavigator?:boolean;
  child:Widget;
}
export class ShowCupertinoDialog extends ShowBaseDialog{
  barrierDismissible?:boolean;
  useRootNavigator?:boolean;
  child?:Widget;

  /**
     * @param config config: 
        {
          barrierDismissible?:boolean, 
          useRootNavigator?:boolean, 
          child:Widget(通常使用CupertinoAlertDialog), 
        }
     */
    constructor(config: ShowCupertinoDialogConfig){
      super();
      if(config!=null && config!=undefined){
        this.barrierDismissible = config.barrierDismissible;
        this.useRootNavigator = config.useRootNavigator;
        this.child = config.child;
      }
    }
}

//****** CupertinoAlertDialog ******
interface CupertinoAlertDialogConfig {
  key?:Key;
  title?:Widget;
  content?:Widget;
  actions?:Array<CupertinoDialogAction>;
  scrollController?:ScrollController;
  actionScrollController?:ScrollController;
  insetAnimationDuration?:Duration;
  insetAnimationCurve?:Curve;
}
export class CupertinoAlertDialog extends Widget {
  key?:Key;
  title?:Widget;
  content?:Widget;
  actions?:Array<CupertinoDialogAction>;
  scrollController?:ScrollController;
  actionScrollController?:ScrollController;
  insetAnimationDuration?:Duration;
  insetAnimationCurve?:Curve;

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

  constructor(config: CupertinoAlertDialogConfig){
    super();
    if(config!=null && config!=undefined){
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


//****** ShowGeneralDialog ******
interface ShowGeneralDialogConfig {
  barrierDismissible?:boolean;
  useRootNavigator?:boolean;
  barrierLabel?:string;
  barrierColor?:Color;
  transitionDuration?:Duration;
  child:Widget;
}
export class ShowGeneralDialog extends ShowBaseDialog{
  barrierDismissible?:boolean;
  useRootNavigator?:boolean;
  barrierLabel?:string;
  barrierColor?:Color;
  transitionDuration?:Duration;
  child?:Widget;

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
    constructor(config: ShowGeneralDialogConfig){
      super();
      if(config!=null && config!=undefined){
        this.barrierDismissible = config.barrierDismissible;
        this.useRootNavigator = config.useRootNavigator;
        this.barrierLabel = config.barrierLabel;
        this.transitionDuration = config.transitionDuration;
        this.child= config.child;
      }
    }
}


interface ShowModalBottomSheetConfig {
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
  barrierColor?:Color;
  isScrollControlled?:boolean;
  useRootNavigator?:boolean;
  isDismissible?:boolean;
  enableDrag?:boolean;
  child:Widget;
}
export class ShowModalBottomSheet extends ShowBaseDialog{
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
  barrierColor?:Color;
  isScrollControlled?:boolean;
  useRootNavigator?:boolean;
  isDismissible?:boolean;
  enableDrag?:boolean;
  child?:Widget;

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
    constructor(config: ShowModalBottomSheetConfig){
      super();
      if(config!=null && config!=undefined){
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
//****** BottomSheet ******
//TODO:animationController
interface BottomSheetConfig {
  key?:Key;
  enableDrag?:boolean;
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
  onClosing:OnCallback;
  child:Widget;
}
export class BottomSheet extends Widget {
  key?:Key;
  enableDrag?:boolean;
  backgroundColor?:Color;
  elevation?:number;
  shape?:ShapeBorder;
  clipBehavior?:Clip;
  onClosing?:OnCallback;
  child?:Widget;

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

  constructor(config: BottomSheetConfig){
    super();
    if(config!=null && config!=undefined){
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


interface ShowCupertinoModalPopupConfig {
  useRootNavigator?:boolean;
  semanticsDismissible?:boolean;
  child:Widget;
}
export class ShowCupertinoModalPopup extends ShowBaseDialog{
  useRootNavigator?:boolean;
  semanticsDismissible?:boolean;
  child?:Widget;

  /**
     * @param config config: 
        {
          useRootNavigator?:boolean, 
          semanticsDismissible?:boolean, 
          child:Widget(通常情况下和CupertinoActionSheet配合使用)
        }
     */
    constructor(config: ShowCupertinoModalPopupConfig){
      super();
      if(config!=null && config!=undefined){
        this.useRootNavigator = config.useRootNavigator;
        this.semanticsDismissible = config.semanticsDismissible;
        this.child = config.child;
      }
    }
}

//****** CupertinoActionSheet ******
interface CupertinoActionSheetConfig {
  key?:Key;
  title?:Widget;
  message?:Widget;
  actions?:Array<Widget>;
  messageScrollController?:ScrollController;
  actionScrollController?:ScrollController;
  cancelButton?:Widget;

}
export class CupertinoActionSheet extends Widget {
  key?:Key;
  title?:Widget;
  message?:Widget;
  actions?:Array<Widget>;
  messageScrollController?:ScrollController;
  actionScrollController?:ScrollController;
  cancelButton?:Widget;

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

  constructor(config: CupertinoActionSheetConfig){
    super();
    if(config!=null && config!=undefined){
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

//****** CupertinoActionSheetAction ******
interface CupertinoActionSheetActionConfig {
  key?:Key;
  child:Widget;
  onPressed:OnCallback;
  isDefaultAction?:boolean;
  isDestructiveAction?:boolean;

}
export class CupertinoActionSheetAction extends Widget {
  key?:Key;
  child?:Widget;
  onPressed?:OnCallback;
  isDefaultAction?:boolean;
  isDestructiveAction?:boolean;

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

  constructor(config: CupertinoActionSheetActionConfig){
    super();
    if(config!=null && config!=undefined){
      this.key = config.key;
      this.child = config.child;
      this.onPressed = config.onPressed;
      this.isDefaultAction = config.isDefaultAction;
      this.isDestructiveAction = config.isDestructiveAction;
    }
  }
}

interface SimpleDialogButtonInfoConfig {
  text?:string;
  textStyle?:TextStyle;
}
export class SimpleDialogButtonInfo extends Widget{
  text?:string;
  textStyle?:TextStyle;

  /**
     * @param config config: 
        {
          title?:string, 
          textStyle?:TextStyle,
        }
     */
    constructor(config: SimpleDialogButtonInfoConfig){
      super();
      if(config!=null && config!=undefined){
        this.text = config.text;
        this.textStyle = config.textStyle;
      }
    }
}

//****** CustomAlertDialogAnimationType ******
export enum CustomAlertDialogAnimationType {
  fromRight = "fromRight",
  fromLeft = "fromLeft",
  fromTop = "fromTop",
  fromBottom = "fromBottom",
  grow = "grow",
  shrink = "shrink",
}

interface CustomAlertDialogButtonConfig {
  child?:Widget;
  width?:number;
  height?:number;
  bgColor?:Color;
  gradient?:Gradient;
  radius?:BorderRadius;
  onPressed?:OnCallback;
}
export class CustomAlertDialogButton extends Widget{
  child?:Widget;
  width?:number;
  height?:number;
  bgColor?:Color;
  gradient?:Gradient;
  radius?:BorderRadius;
  onPressed?:OnCallback;

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
    constructor(config: CustomAlertDialogButtonConfig){
      super();
      if(config!=null && config!=undefined){
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

interface CustomAlertDialogStyleConfig {
  animationType?:CustomAlertDialogAnimationType;
  animationDuration?:Duration;
  alertBorder?:ShapeBorder;
  isCloseButton?:boolean;
  isOverlayTapDismiss?:boolean;
  backgroundColor?:Color;
  overlayColor?:Color;
  buttonSpace?:number;
  titleHeight?:number;
  titleStyle?:TextStyle;
  descStyle?:TextStyle;
  buttonAreaPadding?:EdgeInsets;
  constraints?:BoxConstraints;
}
export class CustomAlertDialogStyle extends Widget{
  animationType?:CustomAlertDialogAnimationType;
  animationDuration?:Duration;
  alertBorder?:ShapeBorder;
  isCloseButton?:boolean;
  isOverlayTapDismiss?:boolean;
  backgroundColor?:Color;
  overlayColor?:Color;
  buttonSpace?:number;
  titleHeight?:number;
  titleStyle?:TextStyle;
  descStyle?:TextStyle;
  buttonAreaPadding?:EdgeInsets;
  constraints?:BoxConstraints;

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
    constructor(config: CustomAlertDialogStyleConfig){
      super();
      if(config!=null && config!=undefined){
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


interface ShowCustomAlertDialogConfig {
  style?:CustomAlertDialogStyle;
  image?:Widget;
  title?:string;
  desc?:string;
  content?:Widget;
  actions?:Array<CustomAlertDialogButton>;
  closeFunction?:OnCallback;
}
export class ShowCustomAlertDialog extends ShowBaseDialog{
  style?:CustomAlertDialogStyle;
  image?:Widget;
  title?:string;
  desc?:string;
  content?:Widget;
  actions?:Array<CustomAlertDialogButton>;
  closeFunction?:OnCallback;

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
    constructor(config: ShowCustomAlertDialogConfig){
      super();
      if(config!=null && config!=undefined){
        this.style = config.style;
        this.image = config.image;
        this.title = config.title;
        this.desc = config.desc;
        this.content = config.content;
        this.actions = config.actions;
        this.closeFunction= config.closeFunction;
      }
    }
}

interface SimpleCustomDialogButtonInfoConfig {
  text?:string;
  textStyle?:TextStyle;
  bgColor?:Color;
}
export class SimpleCustomDialogButtonInfo extends ShowBaseDialog{
  text?:string;
  textStyle?:TextStyle;
  bgColor?:Color;

  /**
     * @param config config: 
        {
          title?:string, 
          textStyle?:TextStyle,
          bgColor?:Color,
        }
     */
    constructor(config: SimpleCustomDialogButtonInfoConfig){
      super();
      if(config!=null && config!=undefined){
        this.text = config.text;
        this.textStyle = config.textStyle;
        this.bgColor = config.bgColor;
      }
    }
     
}

interface ShowSimpleCustomDialogConfig {
  style?:CustomAlertDialogStyle;
  image?:Widget;
  title?:string;
  desc?:string;
  content?:Widget;
  actions?:Array<SimpleCustomDialogButtonInfo>;
  onTap?:OnCallbackNumber;
}
export class ShowSimpleCustomDialog extends ShowBaseDialog{
  style?:CustomAlertDialogStyle;
  image?:Widget;
  title?:string;
  desc?:string;
  content?:Widget;
  actions?:Array<SimpleCustomDialogButtonInfo>;
  onTap?:OnCallbackNumber;

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
    constructor(config: ShowSimpleCustomDialogConfig){
      super();
      if(config!=null && config!=undefined){
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


interface ShowSimpleAlertDialogConfig {
  title?:string;
  titleContent?:Widget;
  desc?:string;
  descContent?:Widget;
  actions?:Array<SimpleDialogButtonInfo>;
  onTap?:OnCallbackNumber;
  barrierDismissible?:boolean;
}
export class ShowSimpleAlertDialog extends ShowBaseDialog{
  title?:string;
  titleContent?:Widget;
  desc?:string;
  descContent?:Widget;
  actions?:Array<SimpleDialogButtonInfo>;
  onTap?:OnCallbackNumber;
  barrierDismissible?:boolean;

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
    constructor(config: ShowSimpleAlertDialogConfig){
      super();
      if(config!=null && config!=undefined){
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

interface ShowSimpleCupertinoDialogConfig {
  title?:string;
  titleContent?:Widget;
  desc?:string;
  descContent?:Widget;
  actions?:Array<SimpleDialogButtonInfo>;
  onTap?:OnCallbackNumber;
  barrierDismissible?:boolean;
}
export class ShowSimpleCupertinoDialog extends ShowBaseDialog{
  title?:string;
  titleContent?:Widget;
  desc?:string;
  descContent?:Widget;
  actions?:Array<SimpleDialogButtonInfo>;
  onTap?:OnCallbackNumber;
  barrierDismissible?:boolean;

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
    constructor(config: ShowSimpleCupertinoDialogConfig){
      super();
      if(config!=null && config!=undefined){
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


interface ShowCustomActionSheetConfig {
  title?:string;
  titleContent?:Widget;
  itemList:Array<string>;
  onTap:OnCallbackNumber;
}
export class ShowCustomActionSheet extends ShowBaseDialog{
  title?:string;
  titleContent?:Widget;
  itemList?:Array<string>;
  onTap?:OnCallbackNumber;

  /**
     * @param config config: 
        {
          title?:string, 
          titleContent?:Widget, 
          itemList:Array<string>, 
          onTap:OnCallbackNumber, 
        }
     */
    constructor(config: ShowCustomActionSheetConfig){
      super();
      if(config!=null && config!=undefined){
        this.title = config.title;
        this.titleContent = config.titleContent;
        this.itemList = config.itemList;
        this.onTap = config.onTap;
      }
    }
}

interface ShowSimpleActionSheetConfig {
  title?:string;
  titleContent?:Widget;
  itemList:Array<string>;
  onTap:OnCallbackNumber;
}
export class ShowSimpleActionSheet extends ShowBaseDialog{
  title?:string;
  titleContent?:Widget;
  itemList?:Array<string>;
  onTap?:OnCallbackNumber;

  /**
     * @param config config: 
        {
          title?:string, 
          titleContent?:Widget, 
          itemList:Array<string>, 
          onTap:OnCallbackNumber, 
        }
     */
    constructor(config: ShowSimpleActionSheetConfig){
      super();
      if(config!=null && config!=undefined){
        this.title = config.title;
        this.titleContent = config.titleContent;
        this.itemList = config.itemList;
        this.onTap = config.onTap;
      }
    }
}

interface ShowCustomPopupMenuConfig {
  superkey:BindKey;
  menuList:Array<CustomPopupMenuItem>;
  barrierDismissible?:boolean;
  bgColor?:Color;
  textFontSize?:number;
  onTap?:OnCallbackNumber;
}
export class ShowCustomPopupMenu extends ShowBaseDialog{
  superkey?:BindKey;
  menuList?:Array<CustomPopupMenuItem>;
  barrierDismissible?:boolean;
  bgColor?:Color;
  textFontSize?:number;
  onTap?:OnCallbackNumber;

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
    constructor(config: ShowCustomPopupMenuConfig){
      super();
      if(config!=null && config!=undefined){
        this.superkey = config.superkey;
        this.menuList = config.menuList;
        this.barrierDismissible = config.barrierDismissible;
        this.bgColor = config.bgColor;
        this.textFontSize = config.textFontSize;
        this.onTap = config.onTap;
      }
    }
}

interface CustomPopupMenuItemConfig {
  title:string;
  titleTextStyle?:TextStyle;
  image?:Widget;
}
export class CustomPopupMenuItem extends Widget{
  title?:string;
  titleTextStyle?:TextStyle;
  image?:Widget;

  /**
     * @param config config: 
        {
          title:string, 
          titleTextStyle?:TextStyle, 
          image?:Widget, 
        }
     */
    constructor(config: CustomPopupMenuItemConfig){
      super();
      if(config!=null && config!=undefined){
        this.title = config.title;
        this.titleTextStyle = config.titleTextStyle;
        this.image = config.image;
      }
    }
}


interface ShowDatePickerConfig {

  initialDate?:number;
  firstDate?:number;
  lastDate?:number;
  currentDate?:number;
  initialEntryMode?:DatePickerEntryMode;
  helpText?:string;
  cancelText?:string;
  confirmText?:string;
  useRootNavigator?:boolean;
  textDirection?:TextDirection;
  initialDatePickerMode?:DatePickerMode;
  errorFormatText?:string;
  errorInvalidText?:string;
  fieldHintText?:string;
  fieldLabelText?:string;
  themeData?:ThemeData;
  isMaterialAppTheme?:boolean;

}
export class ShowDatePicker extends ShowBaseDialog{
  initialDate?:number;
  firstDate?:number;
  lastDate?:number;
  currentDate?:number;
  initialEntryMode?:DatePickerEntryMode;
  helpText?:string;
  cancelText?:string;
  confirmText?:string;
  useRootNavigator?:boolean;
  textDirection?:TextDirection;
  initialDatePickerMode?:DatePickerMode;
  errorFormatText?:string;
  errorInvalidText?:string;
  fieldHintText?:string;
  fieldLabelText?:string;
  themeData?:ThemeData;
  isMaterialAppTheme?:boolean;

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
    constructor(config: ShowDatePickerConfig){
      super();
      if(config!=null && config!=undefined){
        this.initialDate = config.initialDate;
        this.firstDate = config.firstDate;
        this.lastDate = config.lastDate;
        this.currentDate = config.currentDate;
        this.initialEntryMode= config.initialEntryMode;
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



export class Dialog extends DartClass {

  static instance:Dialog;

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
   static async show(baseWidget:BaseWidget,child:ShowBaseDialog){

    var v = await Dialog.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
      widgetID:String(baseWidget.widgetID),
      mirrorID: Dialog.getInstance().mirrorID,
      className: Dialog.getInstance().className,
      funcName: child.className,
      args:{
        widgetID:String(baseWidget.widgetID),
        child:baseWidget.helper.buildWidgetTreeSubWidget(child),
      },
    }));

    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }else {
      return {isSuccess:false,info:"undefined | null"} as ResponseModel;
    }
  }

  static dismiss(baseWidget:BaseWidget){
    Dialog.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
          widgetID:String(baseWidget.widgetID),
          mirrorID: Dialog.getInstance().mirrorID,
          className: Dialog.getInstance().className,
          funcName: "dismiss",
          args:{
            widgetID:String(baseWidget.widgetID),
          },
      }));
  }
}


//#endregion


//#region ****** Loading ******
interface LoadingInfoConfig {
    info:string;
    duration?:Duration;
    alignment?:Alignment;
    animation?:boolean;
}
interface LoadingProgressConfig {
    value:number;
    alignment?:Alignment;
}
export class Loading extends DartClass {

    static instance:Loading;

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
    static showSuccess(config:LoadingInfoConfig){
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
    static showError(config:LoadingInfoConfig){
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
    static showInfo(config:LoadingInfoConfig){
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
    static showToast(config:LoadingInfoConfig){
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
    static show(config:LoadingInfoConfig){
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
    static showProgress(config:LoadingProgressConfig){
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
    static dismiss(config?:LoadingInfoConfig){
        Loading.getInstance().invokeMirrorObjWithCallback(new JSCallConfig({
            mirrorID: Loading.getInstance().mirrorID,
            className: "Loading",
            funcName: "dismiss",
            args: config,
        }));
    }
}
//#endregion


//#region ****** Sp ******
interface SpGetConfig {
  key:string;
  defaultValue?:string|boolean|number;
}
interface SpSetConfig {
  key:string;
  value:string|boolean|number;
}
export class Sp extends DartClass {

  static instance:Sp;

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
  static async getBool(config:SpGetConfig) {
    var v= await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "getBool",
        args: config,
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      defaultValue?:number;
    }
   */
  static async getInt(config:SpGetConfig) {
    var v= await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "getInt",
        args: config,
      })
    );
    return Convert.toNumber(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      defaultValue?:double;
    }
   */
  static async getDouble(config:SpGetConfig) {
    var v= await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "getDouble",
        args: config,
      })
    );
    return Convert.toNumber(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      defaultValue?:string;
    }
   */
  static async getString(config:SpGetConfig) {
    var v= await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "getString",
        args: config,
      })
    );
    return Convert.toString(v);
  }

  static async clear() {
    var v = await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "clear",
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
    }
   */
  static async remove(config:SpGetConfig) {
    var v = await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: Sp.getInstance().mirrorID,
        className: Sp.getInstance().className,
        funcName: "remove",
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      value:boolean;
    }
   */
  static async setBool(config:SpSetConfig) {
    var v = await  Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "setBool",
          args: config,
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      value:number;
    }
   */
  static async setDouble(config:SpSetConfig) {
    var v = await  Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "setDouble",
          args: config,
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      value:number;
    }
   */
  static async setInt(config:SpSetConfig) {
    var v = await Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "setInt",
          args: config,
      })
    );
    return Convert.toBoolean(v);
  }

  /**
   * @param config config: 
    {
      key:string;
      value:string;
    }
   */
  static async setString(config:SpSetConfig) {
    var v = await  Sp.getInstance().invokeMirrorObjWithCallback(
      new JSCallConfig({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "setString",
          args: config,
      })
    );
  }
}
//#endregion


//#region ****** ScreenInfo ******
export class ScreenInfo extends DartClass {

// 设计稿屏幕宽度(PX)
static uiWidthPx:number = 750.0;
//设计稿屏幕宽度(PX)
static uiHeightPx:number = 1334.0;
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
static screenWidthPx:number = 750.0;
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

static instance:ScreenInfo;

constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    this.createMirrorObj();
}

static getInstance() {
  if (!this.instance) {
    this.instance = new ScreenInfo();
  }
  return this.instance;
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
async updateInfo() {
  var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "updateInfo",
    }));

    if(v!=null && v!=undefined){
      var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
      if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
        ScreenInfo.appBarHeight = Convert.toNumber(r.data["appBarHeight"]);
        ScreenInfo.bottomBarHeight = Convert.toNumber(r.data["bottomBarHeight"]);
        ScreenInfo.dpRatio = Convert.toNumber(r.data["dpRatio"]);
        ScreenInfo.pxRatio = Convert.toNumber(r.data["pxRatio"]);
        ScreenInfo.screenDensity = Convert.toNumber(r.data["screenDensity"]);
        ScreenInfo.screenHeight = Convert.toNumber(r.data["screenHeight"]);
        ScreenInfo.screenHeightPx = Convert.toNumber(r.data["screenHeightPx"]);
        ScreenInfo.screenWidth = Convert.toNumber(r.data["screenWidth"]);
        ScreenInfo.screenWidthPx = Convert.toNumber(r.data["screenWidthPx"]);
        ScreenInfo.statusBarHeight = Convert.toNumber(r.data["statusBarHeight"]);
        ScreenInfo.uiDensity = Convert.toNumber(r.data["uiDensity"]);
        ScreenInfo.uiHeight = Convert.toNumber(r.data["uiHeight"]);
        ScreenInfo.uiWidth = Convert.toNumber(r.data["uiWidth"]);
        ScreenInfo.uiWidthPx = Convert.toNumber(r.data["uiWidthPx"]);
        ScreenInfo.uiHeightPx = Convert.toNumber(r.data["uiHeightPx"]);
      }
    }
  }
}
//#endregion


//#region ****** PackageInfo ******
export class PackageInfo extends DartClass {
  static appName:string = ""; //应用名称
  static packageName:string = ""; //包名称
  static version:string = ""; //版本号
  static buildNumber:string = ""; //小版本号

  static instance:PackageInfo;

  constructor() {
      super();
      //Mirror对象在构造函数创建 MirrorID
      this.createMirrorID();

      //创建对应FLutter对象
      this.createMirrorObj();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new PackageInfo();
    }
    return this.instance;
  }

  //
  async updateInfo() {
    var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "updateInfo",
      }));
      if(v!=null && v!=undefined){
        var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
        if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
          PackageInfo.appName = Convert.toString( r.data["appName"]);
          PackageInfo.buildNumber = Convert.toString( r.data["buildNumber"]);
          PackageInfo.packageName = Convert.toString( r.data["packageName"]);
          PackageInfo.version = Convert.toString( r.data["version"]);
        }
      }
  }
}
//#endregion


//#region ****** Wakelock ******
export class Wakelock extends DartClass {  

  static instance:Wakelock;
  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    this.createMirrorObj();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Wakelock();
    }
    return this.instance;
  }

  //
  static async disable() {
    var obj = Wakelock.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: obj.mirrorID,
          className: obj.className,
          funcName: "disable",
      }));
    var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
    if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
      return  Convert.toBoolean(r.data);
    }
    
  }

  //
  static async enable() {
    var obj = Wakelock.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: obj.mirrorID,
          className: obj.className,
          funcName: "enable",
      }));
    var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
    if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
      return  Convert.toBoolean(r.data);
    }
  }

  //
  static async isEnabled() {
    var obj = Wakelock.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: obj.mirrorID,
          className: obj.className,
          funcName: "isEnabled",
      }));
    var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
    if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
      return  Convert.toBoolean(r.data);
    }
    return false;
  }
}
//#endregion


//#region ****** Uuid ******
export class Uuid extends DartClass {  

  static instance:Uuid;

  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();
  
    //创建对应FLutter对象
    this.createMirrorObj();
  }


  static getInstance() {
    if (!this.instance) {
      this.instance = new Uuid();
    }
    return this.instance;
  }
  
  /**
  *  Generate a v1 (time-based) id
  */
  static async v1() {
    var obj = Uuid.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
      mirrorID: obj.mirrorID,
      className: obj.className,
      funcName: "v1",
    }));

    return Convert.toString(v);
  } 
  
  /**
  *  Generate a v4 (random) id
  */
  static async v4() {
    var obj = Uuid.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
      mirrorID: obj.mirrorID,
        className: obj.className,
        funcName: "v4",
    }));
    return Convert.toString(v);
  }

  /**
  * Generate a v5 (namespace-name-sha1-based) id
  * @param namespace 
  * @param v5Name 
  */
 static async v5(namespace:string,v5Name:string) {
    var obj = Uuid.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
      mirrorID: obj.mirrorID,
      className: obj.className,
      funcName: "v5",
      args:{
        namespace:namespace,
        v5Name:v5Name,
      }
    }));
    return Convert.toString(v);
  }
}

//#endregion


//#region ****** FocusScope ******
export class FocusScope extends DartClass {  
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
//#endregion


//#region ****** UrlLauncher ******
interface UrlLauncherConfig {
urlString:string;
forceSafariVC?:boolean;
forceWebView?:boolean;
enableJavaScript?:boolean;
enableDomStorage?:boolean;
universalLinksOnly?:boolean;
headers?:Map<string,string>;
statusBarBrightness?:Brightness;
webOnlyWindowName?:string;
}
export class UrlLauncher extends DartClass {

  static instance:UrlLauncher;
  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    this.createMirrorObj();
  }


  static getInstance() {
    if (!this.instance) {
      this.instance = new UrlLauncher();
    }
    return this.instance;
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
  static async openUrl(config:UrlLauncherConfig) {
    var obj = UrlLauncher.getInstance();
    var v= await obj.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: obj.mirrorID,
          className: obj.className,
          funcName: "openUrl",
          args:config,
      }));
    var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
    if(r!=null && r!=undefined){
      return  r.isSuccess;
    }
  }
}
//#endregion


//#region ****** Dio ******

//****** OnCallbackDioProgress ******
export type OnCallbackDioProgress = (progress:number,total:number) => void;

//****** DioResponseType ******
export enum DioResponseType {
json = "json",
stream = "stream",
plain = "plain",
bytes = "bytes",
}

//****** DioBaseOptions ******
interface DioBaseOptionsConfig {
method?:string;
connectTimeout?:number;
receiveTimeout?:number;
sendTimeout?:number;
baseUrl?:string;
queryParameters?:Map<string,any>;
extra?:Map<string,any>;
headers?:Map<string,any>;
responseType?:DioResponseType;
receiveDataWhenStatusError?:boolean;
followRedirects?:boolean;
maxRedirects?:number;
}
export class DioBaseOptions extends DartClass {
method?:string;
connectTimeout?:number;
receiveTimeout?:number;
sendTimeout?:number;
baseUrl?:string;
queryParameters?:Map<string,any>;
extra?:Map<string,any>;
headers?:Map<string,any>;
responseType?:DioResponseType;
receiveDataWhenStatusError?:boolean;
followRedirects?:boolean;
maxRedirects?:number;

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
constructor(config?:DioBaseOptionsConfig) {
  super();
  if(config!=null && config!=undefined){
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

//****** DioOptions ******
interface DioOptionsConfig {
method?:string;
receiveTimeout?:number;
sendTimeout?:number;
baseUrl?:string;
extra?:Map<string,any>;
headers?:Map<string,any>;
responseType?:DioResponseType;
receiveDataWhenStatusError?:boolean;
followRedirects?:boolean;
maxRedirects?:number;
}
export class DioOptions extends DartClass {
method?:string;
receiveTimeout?:number;
sendTimeout?:number;
baseUrl?:string;
extra?:Map<string,any>;
headers?:Map<string,any>;
responseType?:DioResponseType;
receiveDataWhenStatusError?:boolean;
followRedirects?:boolean;
maxRedirects?:number;

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
constructor(config?:DioOptionsConfig) {
  super();
  if(config!=null && config!=undefined){
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


interface DioGetConfig {
path?:string;
queryParameters?:Map<string,any>;
options?:DioOptions;
onReceiveProgress?:OnCallbackDioProgress;
}

interface DioGetUriConfig {
uri?:Uri;
options?:DioOptions;
onReceiveProgress?:OnCallbackDioProgress;
}

interface DioPostConfig {
path?:string;
data?:any;
queryParameters?:Map<string,any>;
options?:DioOptions;
onSendProgress?:OnCallbackDioProgress;
onReceiveProgress?:OnCallbackDioProgress;
}

interface DioPostUriConfig {
uri?:Uri;
data?:any;
options?:DioOptions;
onSendProgress?:OnCallbackDioProgress;
onReceiveProgress?:OnCallbackDioProgress;
}

interface DioRequestConfig {
path?:string;
data?:any;
queryParameters?:Map<string,any>;
options?:DioOptions;
onSendProgress?:OnCallbackDioProgress;
onReceiveProgress?:OnCallbackDioProgress;
}

interface DioRequestUriConfig {
uri?:Uri;
data?:any;
options?:DioOptions;
onSendProgress?:OnCallbackDioProgress;
onReceiveProgress?:OnCallbackDioProgress;
}


export class Dio extends DartClass {

  options?:DioBaseOptions;

  constructor(options?:DioBaseOptions) {
    super();
    this.options = options;
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    this.createMirrorObj();
  }

  static instance:Dio;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Dio();
    }
    return this.instance;
  }

  /**
    * @param config config: 
      {
        path?:string, 
        queryParameters?:Map<string,any>, 
        options?:DioOptions, 
      }
  */
  async get(config:DioGetConfig ) {
    var v = await this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "get",
        args:config,
    }));
    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }
  }

  /**
    * @param config config: 
      {
        uri?:Uri,
        options?:DioOptions, 
      }
  */
  async getUri(config:DioGetUriConfig ) {
    var v = await this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "getUri",
        args:config,
    }));
    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }
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
  async post(config:DioPostConfig ) {
    var v = await this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "post",
        args:config,
    }));
    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }
  }

  /**
    * @param config config: 
      {
        uri?:Uri,
        data?:any;
        options?:DioOptions, 
      }
    */
  async postUri(config:DioPostUriConfig ) {
      var v = await this.invokeMirrorObjWithCallback(
        new JSCallConfig({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "postUri",
          args:config,
      }));
      if(v!=null && v!=undefined){
        return JSON.parse(Convert.toString(v)) as ResponseModel; 
      }
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
  async request(config:DioRequestConfig ) {
    var v = await this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "request",
        args:config,
    }));
    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }
  }

  /**
    * @param config config: 
      {
        uri?:Uri,
        data?:any;
        options?:DioOptions, 
      }
    */
  async requestUri(config:DioRequestUriConfig ) {
    var v = await this.invokeMirrorObjWithCallback(
      new JSCallConfig({
        mirrorID: this.mirrorID,
        className: this.className,
        funcName: "requestUri",
        args:config,
    }));
    if(v!=null && v!=undefined){
      return JSON.parse(Convert.toString(v)) as ResponseModel; 
    }
  }
}

//#endregion


//#region ******** PullToRefresh ********

//****** PullToRefreshStyle ******
export enum PullToRefreshStyle {
Behind = "Behind",
UnFollow = "UnFollow",
Follow = "Follow",
Front = "Front",
}

//****** PullToRefreshStatus ******
export enum PullToRefreshStatus {
idle = "idle",
canRefresh = "canRefresh",
refreshing = "refreshing",
completed = "completed",
failed = "failed",
canTwoLevel = "canTwoLevel",
twoLevelOpening = "twoLevelOpening",
twoLeveling = "twoLeveling",
twoLevelClosing = "twoLevelClosing",
}

//****** PullToRefreshLoadStatus ******
export enum PullToRefreshLoadStatus {
idle = "idle",
canLoading = "canLoading",
loading = "loading",
noMore = "noMore",
failed = "failed",
}

//****** PullToRefreshIconPosition ******
export enum PullToRefreshIconPosition {
left = "left",
right = "right",
top = "top",
bottom = "bottom",
}

//****** PullToRefreshLoadStyle ******
export enum PullToRefreshLoadStyle {
ShowAlways = "ShowAlways",
HideAlways = "HideAlways",
ShowWhenLoading = "ShowWhenLoading",
}

export abstract class PullToRefreshHeader extends Widget {

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
static classic(config?: PullToRefreshClassicHeaderConfig){
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
static  waterDrop(config?: PullToRefreshWaterDropHeaderConfig){
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
static materialClassic (config?: PullToRefreshMaterialClassicHeaderConfig){
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
static waterDropMaterial(config?: PullToRefreshWaterDropMaterialHeaderConfig){
  return new PullToRefreshWaterDropMaterialHeader(config);
}

}
//****** PullToRefreshClassicHeader ******
interface PullToRefreshClassicHeaderConfig {
key?:Key;
refreshStyle?:PullToRefreshStyle;
height?:number;
completeDuration?:Duration;
textStyle?:TextStyle;
releaseText?:string;
refreshingText?:string;
canTwoLevelIcon?:Widget;
twoLevelView?:Widget;
canTwoLevelText?:string;
completeText?:string;
failedText?:string;
idleText?:string;
iconPos?:PullToRefreshIconPosition;
spacing?:number;
refreshingIcon?:Widget;
failedIcon?:Widget;
completeIcon?:Widget;
idleIcon?:Widget;
releaseIcon?:Widget;
}
export class PullToRefreshClassicHeader extends PullToRefreshHeader {
key?:Key;
refreshStyle?:PullToRefreshStyle;
height?:number;
completeDuration?:Duration;
textStyle?:TextStyle;
releaseText?:string;
refreshingText?:string;
canTwoLevelIcon?:Widget;
twoLevelView?:Widget;
canTwoLevelText?:string;
completeText?:string;
failedText?:string;
idleText?:string;
iconPos?:PullToRefreshIconPosition;
spacing?:number;
refreshingIcon?:Widget;
failedIcon?:Widget;
completeIcon?:Widget;
idleIcon?:Widget;
releaseIcon?:Widget;

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
constructor(config?: PullToRefreshClassicHeaderConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** PullToRefreshWaterDropHeader ******
interface PullToRefreshWaterDropHeaderConfig {
key?:Key;
refresh?:Widget;
complete?:Widget;
completeDuration?:Duration;
failed?:Widget;
waterDropColor?:Color;
idleIcon?:Widget;
}
export class PullToRefreshWaterDropHeader extends PullToRefreshHeader{
key?:Key;
refresh?:Widget;
complete?:Widget;
completeDuration?:Duration;
failed?:Widget;
waterDropColor?:Color;
idleIcon?:Widget;

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
constructor(config?: PullToRefreshWaterDropHeaderConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** MaterialClassicHeader ******
interface PullToRefreshMaterialClassicHeaderConfig {
key?:Key;
height?:number;
semanticsLabel?:string;
semanticsValue?:string;
color?:Color;
offset?:number;
distance?:number;
backgroundColor?:Color;
}
export class PullToRefreshMaterialClassicHeader extends PullToRefreshHeader {
key?:Key;
height?:number;
semanticsLabel?:string;
semanticsValue?:string;
color?:Color;
offset?:number;
distance?:number;
backgroundColor?:Color;

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
constructor(config?: PullToRefreshMaterialClassicHeaderConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** WaterDropMaterialHeader ******
interface PullToRefreshWaterDropMaterialHeaderConfig {
key?:Key;
height?:number;
semanticsLabel?:string;
semanticsValue?:string;
color?:Color;
offset?:number;
distance?:number;
backgroundColor?:Color;
}
export class PullToRefreshWaterDropMaterialHeader extends PullToRefreshHeader {
key?:Key;
height?:number;
semanticsLabel?:string;
semanticsValue?:string;
color?:Color;
offset?:number;
distance?:number;
backgroundColor?:Color;

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
constructor(config?: PullToRefreshWaterDropMaterialHeaderConfig){
  super();
  if(config!=null && config!=undefined){
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

export abstract class PullToRefreshFooter extends Widget {

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
static classic(config?: PullToRefreshClassicFooterConfig){
  return new PullToRefreshClassicFooter(config);
}
}

//****** PullToRefreshClassicFooter ******
interface PullToRefreshClassicFooterConfig {
key?:Key;
onClick?: OnCallback;
loadStyle?: PullToRefreshLoadStyle;
height?: number;
textStyle?:TextStyle;
loadingText?:string;
noDataText?:string;
noMoreIcon?:Widget;
idleText?:string;
failedText?:string;
canLoadingText?:string;
failedIcon?:Widget;
iconPos?:PullToRefreshIconPosition;
spacing?:number;
completeDuration?:Duration;
loadingIcon?:Widget;
canLoadingIcon?:Widget;
idleIcon?:Widget;
}
export class PullToRefreshClassicFooter extends Widget {
key?:Key;
onClick?: OnCallback;
loadStyle?: PullToRefreshLoadStyle;
height?: number;
textStyle?:TextStyle;
loadingText?:string;
noDataText?:string;
noMoreIcon?:Widget;
idleText?:string;
failedText?:string;
canLoadingText?:string;
failedIcon?:Widget;
iconPos?:PullToRefreshIconPosition;
spacing?:number;
completeDuration?:Duration;
loadingIcon?:Widget;
canLoadingIcon?:Widget;
idleIcon?:Widget;

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
constructor(config?: PullToRefreshClassicFooterConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** PullToRefreshConfiguration ******
interface PullToRefreshConfigurationConfig {
child?:Widget;
headerBuilder?:Widget;
footerBuilder?:Widget;
dragSpeedRatio?:number;
shouldFooterFollowWhenNotFull?:string;
enableScrollWhenTwoLevel?:boolean;
enableLoadingWhenNoData?:boolean;
enableBallisticRefresh?:boolean;
springDescription?:SpringDescription;
enableScrollWhenRefreshCompleted?:boolean;
enableLoadingWhenFailed?:boolean;
twiceTriggerDistance?:number;
closeTwoLevelDistance?:number;
skipCanRefresh?:boolean;
autoLoad?:boolean;
maxOverScrollExtent?:number;
enableBallisticLoad?:boolean;
maxUnderScrollExtent?:number;
headerTriggerDistance?:number;
footerTriggerDistance?:number;
hideFooterWhenNotFull?:boolean;
enableRefreshVibrate?:boolean;
enableLoadMoreVibrate?:boolean;
topHitBoundary?:number;
bottomHitBoundary?:number;
}
export class PullToRefreshConfiguration extends Widget {
child?:Widget;
headerBuilder?:Widget;
footerBuilder?:Widget;
dragSpeedRatio?:number;
shouldFooterFollowWhenNotFull?:string;
enableScrollWhenTwoLevel?:boolean;
enableLoadingWhenNoData?:boolean;
enableBallisticRefresh?:boolean;
springDescription?:SpringDescription;
enableScrollWhenRefreshCompleted?:boolean;
enableLoadingWhenFailed?:boolean;
twiceTriggerDistance?:number;
closeTwoLevelDistance?:number;
skipCanRefresh?:boolean;
autoLoad?:boolean;
maxOverScrollExtent?:number;
enableBallisticLoad?:boolean;
maxUnderScrollExtent?:number;
headerTriggerDistance?:number;
footerTriggerDistance?:number;
hideFooterWhenNotFull?:boolean;
enableRefreshVibrate?:boolean;
enableLoadMoreVibrate?:boolean;
topHitBoundary?:number;
bottomHitBoundary?:number;

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
constructor(config?: PullToRefreshConfigurationConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** PullToRefreshController ******
interface PullToRefreshControllerConfig {
initialRefreshStatus?:PullToRefreshStatus;
initialRefresh?:boolean;
initialLoadStatus?:PullToRefreshLoadStatus;
}
interface PullToRefreshControllerEventConfig {
duration?:Duration;
needMove?:boolean;
curve?:Curve;
resetFooterState?:boolean;
}
export class PullToRefreshController extends DartClass {
initialRefreshStatus?:PullToRefreshStatus;
initialRefresh?:boolean;
initialLoadStatus?:PullToRefreshLoadStatus;


/**
 * @param config config: 
    {
      initialRefreshStatus?:PullToRefreshStatus, 
      initialRefresh?:boolean, 
      initialLoadStatus?:PullToRefreshLoadStatus, 
    }
 */
constructor(config: PullToRefreshControllerConfig){
  super();
  this.createMirrorID();
  if(config!=null && config!=undefined){
    this.initialLoadStatus = config.initialLoadStatus;
    this.initialRefresh = config.initialRefresh;
    this.initialRefreshStatus = config.initialRefreshStatus;
  }
}

dispose() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"dispose",
    })
  );
}

loadComplete() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"loadComplete",
    })
  );
}

loadFailed() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"loadFailed",
    })
  );
}

loadNoData() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"loadNoData",
    })
  );
}

/**
 * @param config config: 
    {
      resetFooterState?:boolean;
    }
 */
refreshCompleted(config?:PullToRefreshControllerEventConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"refreshCompleted",
      args:config
    })
  );
}


refreshFailed() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"refreshFailed",
    })
  );
}

refreshToIdle() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"refreshToIdle",
    })
  );
}

/**
 * @param config config: 
    {
      duration?:Duration, 
      needMove?:boolean, 
      curve?:Curve, 
    }
 */
requestLoading(config?:PullToRefreshControllerEventConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"requestLoading",
      args:config
    })
  );
}

/**
 * @param config config: 
    {
      duration?:Duration, 
      needMove?:boolean, 
      curve?:Curve, 
    }
 */
requestRefresh(config?:PullToRefreshControllerEventConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"requestRefresh",
      args:config
    })
  );
}

/**
 * @param config config: 
    {
      duration?:Duration, 
      curve?:Curve, 
    }
 */
requestTwoLevel(config?:PullToRefreshControllerEventConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"requestTwoLevel",
      args:config
    })
  );
}

resetNoData() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"resetNoData",
    })
  );
}

/**
 * @param config config: 
    {
      duration?:Duration, 
      curve?:Curve, 
    }
 */
twoLevelComplete(config?:PullToRefreshControllerEventConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"twoLevelComplete",
      args:config
    })
  );
}
}


//****** PullToRefreshRefresher ******
interface PullToRefreshRefresherConfig {
key?:Key;
controller:PullToRefreshController;
child?:Widget;
header?:PullToRefreshHeader;
footer?:PullToRefreshFooter;
enablePullDown?:boolean;
enablePullUp?:boolean;
enableTwoLevel?:boolean;
onRefresh?:OnCallback;
onLoading?:OnCallback;
onTwoLevel?:OnCallback;
onOffsetChange?:OnCallbackString;
dragStartBehavior?:DragStartBehavior;
primary?:boolean;
cacheExtent?:number;
semanticChildCount?:number;
reverse?:boolean;
physics?:ScrollPhysics;
scrollDirection?:Axis;
scrollController?:ScrollController;
}
export class PullToRefreshRefresher extends Widget {
key?:Key;
controller?:PullToRefreshController;
child?:Widget;
header?:PullToRefreshHeader;
footer?:PullToRefreshFooter;
enablePullDown?:boolean;
enablePullUp?:boolean;
enableTwoLevel?:boolean;
onRefresh?:OnCallback;
onLoading?:OnCallback;
onTwoLevel?:OnCallback;
onOffsetChange?:OnCallbackString;
dragStartBehavior?:DragStartBehavior;
primary?:boolean;
cacheExtent?:number;
semanticChildCount?:number;
reverse?:boolean;
physics?:ScrollPhysics;
scrollDirection?:Axis;
scrollController?:ScrollController;

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
constructor(config?: PullToRefreshRefresherConfig){
  super();
  if(config!=null && config!=undefined){
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

//#endregion


//#region ******** CachedNetworkImage ********

//****** CachedNetworkImage ******
interface CachedNetworkImageConfig {
key?:Key;
imageUrl:string;
httpHeaders?:Map<string,string>
placeholder?:Widget;
errorWidget?:Widget;
fadeOutDuration?:Duration;
fadeOutCurve?:Curve;
fadeInDuration?:Duration;
fadeInCurve?:Curve;
width?:number;
height?:number;
fit?:BoxFit;
alignment?:Alignment;
repeat?:ImageRepeat;
matchTextDirection?:boolean;
useOldImageOnUrlChange?:boolean;
color?:Color;
filterQuality?:FilterQuality;
colorBlendMode?:BlendMode;
placeholderFadeInDuration?:Duration;
memCacheWidth?:number;
memCacheHeight?:number;
cacheKey?:string;
}
export class CachedNetworkImage extends Widget {
key?:Key;
imageUrl?:string;
httpHeaders?:Map<string,string>
placeholder?:Widget;
errorWidget?:Widget;
fadeOutDuration?:Duration;
fadeOutCurve?:Curve;
fadeInDuration?:Duration;
fadeInCurve?:Curve;
width?:number;
height?:number;
fit?:BoxFit;
alignment?:Alignment;
repeat?:ImageRepeat;
matchTextDirection?:boolean;
useOldImageOnUrlChange?:boolean;
color?:Color;
filterQuality?:FilterQuality;
colorBlendMode?:BlendMode;
placeholderFadeInDuration?:Duration;
memCacheWidth?:number;
memCacheHeight?:number;
cacheKey?:string;

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
constructor(config?: CachedNetworkImageConfig){
  super();
  if(config!=null && config!=undefined){
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
    this.filterQuality= config.filterQuality;
    this.colorBlendMode = config.colorBlendMode;
    this.placeholderFadeInDuration = config.placeholderFadeInDuration;
    this.memCacheHeight = config.memCacheHeight;
    this.memCacheWidth = config.memCacheWidth;
    this.cacheKey = config.cacheKey;

  }
}
}

//#endregion


//#region ******** EasyRefresh ********

export abstract class EasyRefreshHeader extends Widget {

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
static classical(config?: EasyRefreshClassicalHeaderConfig){
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
static  material(config?: EasyRefreshMaterialHeaderConfig){
  return new EasyRefreshMaterialHeader(config);
}

}
//****** EasyRefreshClassicalHeader ******
interface EasyRefreshClassicalHeaderConfig {
key?:Key;
extent?:number;
triggerDistance?:number;
float?:boolean;
completeDuration?:Duration;
enableInfiniteRefresh?:boolean;
enableHapticFeedback?:boolean;
overScroll?:boolean;
alignment?:Alignment;
refreshText?:string;
refreshReadyText?:string;
refreshingText?:string;
refreshedText?:string;
refreshFailedText?:string;
noMoreText?:string;
showInfo?:boolean;
infoText?:string;
bgColor?:Color;
textColor?:Color;
infoColor?:Color;
}
export class EasyRefreshClassicalHeader extends EasyRefreshHeader {
key?:Key;
extent?:number;
triggerDistance?:number;
float?:boolean;
completeDuration?:Duration;
enableInfiniteRefresh?:boolean;
enableHapticFeedback?:boolean;
overScroll?:boolean;
alignment?:Alignment;
refreshText?:string;
refreshReadyText?:string;
refreshingText?:string;
refreshedText?:string;
refreshFailedText?:string;
noMoreText?:string;
showInfo?:boolean;
infoText?:string;
bgColor?:Color;
textColor?:Color;
infoColor?:Color;

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
constructor(config?: EasyRefreshClassicalHeaderConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** EasyRefreshMaterialHeader ******
interface EasyRefreshMaterialHeaderConfig {
key?:Key;
displacement?:number;
backgroundColor?:Color;
completeDuration?:Duration;
enableHapticFeedback?:boolean;
}
export class EasyRefreshMaterialHeader extends EasyRefreshHeader {
key?:Key;
displacement?:number;
backgroundColor?:Color;
completeDuration?:Duration;
enableHapticFeedback?:boolean;

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
constructor(config?: EasyRefreshMaterialHeaderConfig){
  super();
  if(config!=null && config!=undefined){
    this.key = config.key;
    this.displacement = config.displacement;
    this.backgroundColor = config.backgroundColor;
    this.completeDuration =config.completeDuration;
    this.enableHapticFeedback = config.enableHapticFeedback;
  }
}
}


export abstract class EasyRefreshFooter extends Widget {

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
static classical(config?: EasyRefreshClassicalFooterConfig){
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
static material(config?: EasyRefreshMaterialFooterConfig){
  return new EasyRefreshMaterialFooter(config);
}

}

//****** EasyRefreshClassicalFooter ******
interface EasyRefreshClassicalFooterConfig {
key?:Key;
extent?:number;
triggerDistance?:number;
float?:boolean;
completeDuration?:Duration;
enableInfiniteLoad?:boolean;
enableHapticFeedback?:boolean;
overScroll?:boolean;
safeArea?:boolean;
padding?:EdgeInsets;
alignment?:Alignment;
loadText?:string;
loadReadyText?:string;
loadingText?:string;
loadedText?:string;
loadFailedText?:string;
noMoreText?:string;
showInfo?:boolean;
infoText?:string;
bgColor?:Color;
textColor?:Color;
infoColor?:Color;
isNoMoreText?:boolean;
}
export class EasyRefreshClassicalFooter extends Widget {
key?:Key;
extent?:number;
triggerDistance?:number;
float?:boolean;
completeDuration?:Duration;
enableInfiniteLoad?:boolean;
enableHapticFeedback?:boolean;
overScroll?:boolean;
safeArea?:boolean;
padding?:EdgeInsets;
alignment?:Alignment;
loadText?:string;
loadReadyText?:string;
loadingText?:string;
loadedText?:string;
loadFailedText?:string;
noMoreText?:string;
showInfo?:boolean;
infoText?:string;
bgColor?:Color;
textColor?:Color;
infoColor?:Color;
isNoMoreText?:boolean;

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
constructor(config?: EasyRefreshClassicalFooterConfig){
  super();
  if(config!=null && config!=undefined){
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

//****** EasyRefreshMaterialFooter ******
interface EasyRefreshMaterialFooterConfig {
key?:Key;
displacement?:number;
backgroundColor?:Color;
completeDuration?:Duration;
enableHapticFeedback?:boolean;
enableInfiniteLoad?:boolean;
overScroll?:boolean;
isNoMoreText?:boolean;
noMoreText?:string;
}
export class EasyRefreshMaterialFooter extends EasyRefreshFooter{
key?:Key;
displacement?:number;
backgroundColor?:Color;
completeDuration?:Duration;
enableHapticFeedback?:boolean;
enableInfiniteLoad?:boolean;
overScroll?:boolean;
isNoMoreText?:boolean;
noMoreText?:string;

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
constructor(config?: EasyRefreshMaterialFooterConfig){
  super();
  if(config!=null && config!=undefined){
    this.key = config.key;
    this.displacement = config.displacement;
    this.backgroundColor = config.backgroundColor;
    this.completeDuration = config.completeDuration;
    this.enableHapticFeedback =config.enableHapticFeedback;
    this.enableInfiniteLoad = config.enableInfiniteLoad;
    this.overScroll = config.overScroll;
    this.isNoMoreText = config.isNoMoreText;
    this.noMoreText = config.noMoreText;
  }
}

}


//****** EasyRefreshController ******
interface EasyRefreshControllerConfig {
duration?:Duration;
success?:boolean;
noMore?:boolean;
}
export class EasyRefreshController extends DartClass {


constructor(){
  super();
  this.createMirrorID();
}


/**
 * @param config config: 
    {
      duration?:Duration,
    }
 */
callRefresh(config?:EasyRefreshControllerConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"callRefresh",
      args:config
    })
  );
}

/**
 * @param config config: 
    {
      duration?:Duration,
    }
 */
callLoad(config?:EasyRefreshControllerConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"callLoad",
      args:config
    })
  );
}

/**
 * @param config config: 
    {
      success?:boolean, 
      noMore?:boolean, 
    }
 */
finishRefresh(config?:EasyRefreshControllerConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"finishRefresh",
      args:config
    })
  );
}

/**
 * @param config config: 
    {
      success?:boolean, 
      noMore?:boolean, 
    }
 */
finishLoad(config?:EasyRefreshControllerConfig) {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"finishLoad",
      args:config
    })
  );
}




resetRefreshState() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"resetRefreshState",
    })
  );
}

resetLoadState() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"resetLoadState",
    })
  );
}

dispose() {
  JSFramework.invokeFlutterFunction(
    new JSCallConfig({
      mirrorID:this.mirrorID,
      className:this.className,
      funcName:"dispose",
    })
  );
}
}


//****** EasyRefresher ******
interface EasyRefresherConfig {
key?:Key;
controller?:EasyRefreshController;
onRefresh?:OnCallback;
onLoad?:OnCallback;
enableControlFinishRefresh?:boolean;
enableControlFinishLoad?:boolean;
taskIndependence?:boolean;
scrollController?:ScrollController;
header?:EasyRefreshHeader
footer?:EasyRefreshFooter;
firstRefresh?:boolean;
firstRefreshWidget?:Widget;
headerIndex?:number;
emptyWidget?:Widget;
topBouncing?:boolean;
bottomBouncing?:boolean;
child:Widget;
}
interface EasyRefresherCustomConfig {
key?:Key;
listKey?:Key;
controller?:EasyRefreshController;
onRefresh?:OnCallback;
onLoad?:OnCallback;
enableControlFinishRefresh?:boolean;
enableControlFinishLoad?:boolean;
taskIndependence?:boolean;
scrollController?:ScrollController;
header?:EasyRefreshHeader
headerIndex?:number;
footer?:EasyRefreshFooter;
scrollDirection?:Axis;
reverse?:boolean;
primary?:boolean;
shrinkWrap?:boolean;
center?:Key;
anchor?:number;
cacheExtent?:number;
semanticChildCount?:number;
dragStartBehavior?:DragStartBehavior;

firstRefresh?:boolean;
firstRefreshWidget?:Widget;
emptyWidget?:Widget;
topBouncing?:boolean;
bottomBouncing?:boolean;
slivers:Array<Widget>;
}

export class EasyRefresher extends Widget {
key?:Key;
controller?:EasyRefreshController;
onRefresh?:OnCallback;
onLoad?:OnCallback;
enableControlFinishRefresh?:boolean;
enableControlFinishLoad?:boolean;
taskIndependence?:boolean;
scrollController?:ScrollController;
header?:EasyRefreshHeader
footer?:EasyRefreshFooter;
firstRefresh?:boolean;
firstRefreshWidget?:Widget;
headerIndex?:number;
emptyWidget?:Widget;
topBouncing?:boolean;
bottomBouncing?:boolean;
child?:Widget;

listKey?:Key;
scrollDirection?:Axis;
reverse?:boolean;
primary?:boolean;
shrinkWrap?:boolean;
center?:Key;
anchor?:number;
cacheExtent?:number;
semanticChildCount?:number;
dragStartBehavior?:DragStartBehavior;
slivers?:Array<Widget>;


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
constructor(config?: EasyRefresherConfig){
  super();
  if(config!=null && config!=undefined){
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
static custom(config?: EasyRefresherCustomConfig){
  var v = new EasyRefresher();
  if(config!=null && config!=undefined){
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

//#endregion


//#region ****** PathProvider ******
export class PathProvider extends DartClass {
  
  static temporaryDirectory = "";
  static applicationSupportDirectory = "";
  static libraryDirectory = "";
  static applicationDocumentsDirectory = "";
  static downloadsDirectory = "";
  static externalStorageDirectory = "";

  static instance:PathProvider;
  constructor() {
    super();
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();
  
    //创建对应FLutter对象
    this.createMirrorObj();
  }
  

  static getInstance() {
    if (!this.instance) {
      this.instance = new PathProvider();
    }
    return this.instance;
  }
  
  //
  async updateInfo() {
    var v= await this.invokeMirrorObjWithCallback(new JSCallConfig({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "updateInfo",
      }));
    var r= JSON.parse(Convert.toString(v)) as ResponseModel; 
    if(r!=null && r!=undefined && r.isSuccess && r.data!=null && r.data!=undefined ){
      PathProvider.applicationDocumentsDirectory = Convert.toString(r.data["applicationDocumentsDirectory"]);
      PathProvider.applicationSupportDirectory = Convert.toString(r.data["applicationSupportDirectory"]);
      PathProvider.temporaryDirectory = Convert.toString(r.data["temporaryDirectory"]);
      PathProvider.libraryDirectory = Convert.toString(r.data["libraryDirectory"]);
      PathProvider.downloadsDirectory = Convert.toString(r.data["downloadsDirectory"]);
      PathProvider.externalStorageDirectory = Convert.toString(r.data["externalStorageDirectory"]);
    }
  }

}
//#endregion
  

