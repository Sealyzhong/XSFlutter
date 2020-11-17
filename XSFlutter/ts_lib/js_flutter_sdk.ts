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