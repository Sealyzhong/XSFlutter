
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */

// @ts-ignore：dart_sdk
import dart_sdk = require("dart_sdk"); 
const core = dart_sdk.core;


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
  static invokeFlutterFunction(callArgs:any) {
    JSFramework.callFlutterWidgetChannel("invoke", JSON.stringify(callArgs));
  }

  ///TODO: 优化
  ///github merge
  static invokeCommonFlutterFunction(callArgs:any) {
    JSFramework.callFlutterWidgetChannel("invokeCommon", JSON.stringify(callArgs));
  }
}

//****** 原生日志输出 ******
export class JSLog {
  static setLogLev(lev:number) {
    JSLog.logLev = lev;
  }
  
  static printLog(log:string){
    var prefix:string="[JS]: ";
    if(JSLog.logLev==0){
      prefix="[JS-Debug]: ";
    }else if(JSLog.logLev==2){
      prefix="[JS-Error]: ";
    }
    // @ts-ignore：原生系统函数
    XSNativeLog(prefix + log);
  }
  static debug(log:string) {
    if(JSLog.logLev!=0){
      JSLog.logLev=0;
    }
    this.printLog(log);
  }

  static log(log:string) {
    if(JSLog.logLev!=1){
      JSLog.logLev=1;
    }
    this.printLog(log);
  }


  static error(log:string) {
    if(JSLog.logLev!=2){
      JSLog.logLev=2;
    }
    this.printLog(log);
  }

  static LogLevDebug = 0;
  static LogLevInfo = 1;
  static LogLevError = 2;
  static logLev = JSLog.LogLevDebug;
}

//****** 方法调用 ******
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
    JSLog.log("JSMethodCall.new:"+ v.encodeJSON() );
    return v;
  }
}

//****** 全局callbak管理器 ******
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

//****** JSBuildContext 和flutter BuildContext 保持一致的编程方式 ******
export class JSBuildContext {
  widget:any;
  parentBuildContext?:JSBuildContext;
  inheritedInfo?:any;
  static new(widget:any, parentBuildContext?:JSBuildContext){
    var v = new JSBuildContext();
    v.widget = widget;
    v.widget.buildContext = this;
    v.parentBuildContext = parentBuildContext;
    v.inheritedInfo = {};
    return v;
  }

  static inheritBuildContext(widget:any, buildContext:JSBuildContext) {
    var context = JSBuildContext.new(widget, buildContext);
    context.inheritedInfo = buildContext.inheritedInfo;
    return context;
  }

  setInheritedInfo(args?:any) {
    this.inheritedInfo = args;
  }
}

//****** Widget树 ******
export class JSWidgetTree {
  buildWidgetDataSeq?:string;
  childrenWidget?:any;
  callbackID2fun?:Map<string,any>;
  widgetTreeObjMap?:any;
  ownerWidget?:any;

  static new(buildWidgetDataSeq:string){
    var v = new JSWidgetTree();
    v.buildWidgetDataSeq=buildWidgetDataSeq;
    v.childrenWidget = {}; 
    v.callbackID2fun =new Map();
    v.widgetTreeObjMap = null;
    v.ownerWidget = null;
    return v;
  }

  //统一用全局的id生成器
  generateID() {
    return JSCallbackMgr.getInstance().generateID();
  }

  createCallbackID(callback:any) {
    let callbackID = this.ownerWidget.widgetID + "/" + this.generateID();
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
export class JSWidgetMgr {
  //JS侧现生成的JSWidget， widgetID为偶数，从0开始
  widgetIDFeed:number;
  widgetID2WidgetMap:Map<string,any>;
  //单例
  static instance?: JSWidgetMgr;
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
    //JS侧现生成的XSJSWidget， widgetID为偶数，从0开始 +2
    this.widgetIDFeed = this.widgetIDFeed + 2;
    let wID = this.widgetIDFeed;
    return String(wID);
  }

  registerWidget(widget:any) {
    this.widgetID2WidgetMap.set(widget.widgetID,widget);
  }

  remove(widgetID:string) {
    this.widgetID2WidgetMap.delete(widgetID);
  }

  findWidget(widgetID:string) {
    return this.widgetID2WidgetMap.get(widgetID);
  }
}

//****** JSWidget Mirror Mgr ******
export class JSWidgetMirrorMgr {
  mirrorIDFeed:number;
  mirrorObjMap:Map<string,any>;
  
  static instance?:JSWidgetMirrorMgr;

  constructor() {
    this.mirrorIDFeed = 0;
    this.mirrorObjMap = new Map();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new JSWidgetMirrorMgr();
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
//****** JSCallArgs ******
interface JSCallArgsConfig {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:Map<string,any>;
}
export class JSCallArgs {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:Map<string,any>;

  /**
   * @param config config: {widgetID?:string,mirrorID?:string,className?:string,funcName?:string,args?:Map<string,any>}
   */
  static new(config:JSCallArgsConfig){
    var v = new JSCallArgs();
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

//flutter 中 非widget继承 JSBaseClass
export class JSBaseClass extends core.Object {
  className:string;
  constructorName?:string;
  mirrorID?:string;
  constructor() {
    super();
    this.className = this.constructor.name;
  }

  createMirrorObjectID() {
    this.mirrorID = JSWidgetMirrorMgr.getInstance().generateID(this);
    core.print("createMirrorObjectID: mirrorID : " + this.mirrorID);
  }
}

//flutter Widget继承Widget
export class JSBaseWidget extends JSBaseClass {
  constructor() {
    super();
  }

  //在生成json前调用
  //用于list delegate 等的items build
  //用于widget有类似onTab等响应函数变量，在此转换成callbackid,
  //但注意，delegate中确实需要funtion,要转不需ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper:any, buildContext:JSBuildContext) {
    //把callback 换成callbackID
    for (let k in this) {
      let v = this[k];
      if (typeof v == "function") {
        this[k] = jsWidgetHelper.buildingCreateCallbackID(v);
      }
    }
  }
}

//****** JS Widget State ******
export class JSWidgetState {
  widget:any;
  constructor() {
    this.widget = null;
  }

  get context() {
    return this.widget.buildContext;
  }

  //subclass override
  initState() {
    JSLog.log("JSWidgetState initState ::" + this.widget.widgetLogInfoStr());
  }

  setState(fun:any) {
    JSLog.log("JSWidgetState setState ::" + this.widget.widgetLogInfoStr());
    if (fun) {
      fun();
    }
    //call-> Flutter
    this.widget.helper.callFlutterRebuild();
  }

  //subclass override
  build(buildContext:JSBuildContext) {
    return null;
  }

  //subclass overwite
  onBuildEnd(args:any) { }

  //subclass override
  dispose() { }
}
