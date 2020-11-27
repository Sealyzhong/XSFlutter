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

//****** VoidValueChangedString ******
export type VoidValueChangedString = (value:string) => void;

//****** VoidValueChangedBoolean ******
export type VoidValueChangedBoolean = (value:boolean) => void;

//****** VoidValueChangedNumber ******
export type VoidValueChangedNumber = (value:number) => void;

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
interface JSCallArgsArgs {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;         
  args?:any;
}
export class JSCallArgs {
  widgetID?:string;
  mirrorID?:string;
  className?:string;
  funcName?:string;
  args?:any;

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
  constructor(args:JSCallArgsArgs){
    if(args!=null && args!=undefined){
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
  static new(args:JSCallArgsArgs){
    return new JSCallArgs(args);
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
    static createMirrorObj(flutterCallArgs:any, mirrorID:any, needMonitordGCValue:any) {
  
      let basicMethodCall = JSMethodCall.new("JSBridgeCreateMirrorObj", flutterCallArgs);
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
      let callArgs = args["arguments"];
  
      // @ts-ignore：dart_sdk
      let fun = this[method];
  
      if (fun != null) {
        return fun.call(this, callArgs);
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
      let funArgs = args["args"];
  
      //TODO: call mirroObj Fun
      JSCallbackMgr.getInstance().invokeCallback(callbackID, funArgs)
    }
  
    static invokeMirrorObjWithCallback(flutterCallArgs:any, callback:any) {
  
      let basicMethodCall = JSMethodCall.new("JSBridgeInvokeMirrorObjWithCallback", flutterCallArgs);
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
      let callArgs = args["arguments"];
  
      // @ts-ignore：dart_sdk
      let fun = this[method];
  
      if (fun != null) {
        return fun.call(this, callArgs);
      } else {
        Log.log("XSFlutterApp:nativeCall error:fun == null" + args);
        return null;
      }
    }
  
    flutterCallFrequencyLimitCallList(args?:any) {
      if (args) {
        args.map(function (callArgs?:any) {
          // @ts-ignore：dart_sdk
          this.nativeCall(callArgs);
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
    static invokeFlutterFunction(callArgs:any) {
      JSFramework.callFlutterWidgetChannel("invoke", JSON.stringify(callArgs));
    }
  
    ///TODO: 优化
    ///github merge
    static invokeCommonFlutterFunction(callArgs:any) {
      JSFramework.callFlutterWidgetChannel("invokeCommon", JSON.stringify(callArgs));
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
      let callArgs = args["args"];
  
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
  interface BaseWidgetArgs {
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
  
    constructor(args?:BaseWidgetArgs) {
      super();
      if(args!=null && args!=undefined){
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
    
    constructor(args?:BaseWidgetArgs) {
      super(args);
      this.className = "StatefulWidget";
    }
  
    //subclass override
    createState(){ }
  }
  
  //在JS层，要封装控件，如不需要改变UI内容，使用无状态的StatelessWidget
  export class StatelessWidget extends BaseWidget {
    constructor(args?:BaseWidgetArgs) {
      super(args);
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
    ashed = "ashed",
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
  interface AssetImageArgs {
    bundle?:AssetBundle;
    packageName?:string;
  }
  export class AssetImage extends DartClass {
    assetName?:string;
    bundle?:AssetBundle;
    packageName?:string;
  
    /**
     * @param args args: 
      {
        assetName:string, 
        bundle?:BaseAssetBundle, 
        packageName?:string
      }
     */
    constructor(assetName:string,args?: AssetImageArgs){
      super();
      this.assetName = assetName
      if(args!=null && args!=undefined){
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
    static new(assetName:string,args?: AssetImageArgs) {
      return new AssetImage(assetName,args);
    }
  }
  //#endregion
  
  //#region ------- B ------- 
  //****** BoxConstraints ******
  interface BoxConstraintsArgs {
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
     * @param args args: 
      {
        minWidth?:number, 
        maxWidth?:number, 
        minHeight?:number, 
        maxHeight?:number
      }
     */
    constructor(args?: BoxConstraintsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BoxConstraintsArgs){
      return new BoxConstraints(args);
    }
  }
  
  //****** BorderSide ******
  interface BorderSideArgs {
    color?:Color;
    width?:number;
    style?:BorderStyle;
  }
  export class BorderSide extends DartClass {
    color?:Color;
    width?:number;
    style?:BorderStyle;
  
    /**
     * @param args args: 
        {
          color?:Color, 
          width?:number, 
          style?:BorderStyle
        }
     */
    constructor(args?: BorderSideArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BorderSideArgs){
      return new BorderSide(args);
    }
  
    static none() {
      let v = new BorderSide();
      v.constructorName = "none";
      return v;
    }
  }
  
  //****** BorderRadius ******
  interface BorderRadiusArgs {
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
     * @param args args: 
        {
          top?:Radius, 
          bottom?:Radius
        }
     */
    static vertical(args?: BorderRadiusArgs){
      let v = new BorderRadius();
      v.constructorName = "vertical";
      if(args!=null && args!=undefined){
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
    static horizontal(args?: BorderRadiusArgs){
      let v = new BorderRadius();
      v.constructorName = "horizontal";
      if(args!=null && args!=undefined){
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
    static only(args?: BorderRadiusArgs){
      let v = new BorderRadius();
      v.constructorName = "only";
      if(args!=null && args!=undefined){
        v.topLeft = args.topLeft;
        v.topRight = args.topRight;
        v.bottomLeft = args.bottomLeft;
        v.bottomRight = args.bottomRight;
      }
      return v;
    }
  }
  
  //****** BorderRadiusDirectional ******
  interface BorderRadiusDirectionalArgs {
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
     * @param args args: 
        {
          top?:Radius, 
          bottom?:Radius
        }
     */
    static vertical(args?: BorderRadiusDirectionalArgs){
      let v = new BorderRadiusDirectional();
      v.constructorName = "vertical";
      if(args!=null && args!=undefined){
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
    static horizontal(args?: BorderRadiusDirectionalArgs){
      let v = new BorderRadiusDirectional();
      v.constructorName = "horizontal";
      if(args!=null && args!=undefined){
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
    static only(args?: BorderRadiusDirectionalArgs){
      let v = new BorderRadiusDirectional();
      v.constructorName = "only";
      if(args!=null && args!=undefined){
        v.topStart = args.topStart;
        v.topEnd = args.topEnd;
        v.bottomStart = args.bottomStart;
        v.bottomEnd = args.bottomEnd;
      }
      return v;
    }
  }
  
  
  //****** Border ******
  interface BorderArgs {
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
     * @param args args: 
      {
        top?:BorderSide, 
        right?:BorderSide, 
        bottom?:BorderSide, 
        left?:BorderSide,
      }
     */
    constructor(args?: BorderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BorderArgs)  {
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
    static all(args: BorderArgs) {
      var v = new Border();  
      v.constructorName = "all";
      if(args!=null && args!=undefined){
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
    static symmetric(args?: BorderArgs) {
      var v = new Border();
      v.constructorName = "symmetric";
      if(args!=null && args!=undefined){
        v.vertical = args.vertical;
        v.horizontal = args.horizontal;
      }
      return v;
    }
  }
  
  
  //****** BorderDirectional ******
  interface BorderDirectionalArgs {
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
     * @param args args: 
        {
          top?:BorderSide, 
          start?:BorderSide,
          bottom?:BorderSide,
          end?:BorderSide,
        }
     */
    constructor(args?: BorderDirectionalArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BorderDirectionalArgs) {
      return new BorderDirectional(args);
    }
  }
  
  //****** ButtonThemeData ******
  interface ButtonThemeDataArgs { //定义了两个可选属性
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
    constructor(args?: ButtonThemeDataArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: ButtonThemeDataArgs) {
      return new ButtonThemeData(args);
    }
  }
  
  //****** BoxDecoration ******
  interface BoxDecorationArgs { 
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
    constructor(args?: BoxDecorationArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BoxDecorationArgs){
      return new BoxDecoration(args);
    }
  }
  
  //****** BannerPainter ******
  interface BannerPainterArgs {
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
    constructor(args: BannerPainterArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BannerPainterArgs){
      return new BannerPainter(args);
    }
  }
  
  //****** BoxShadow ******
  interface BoxShadowArgs {
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
     * @param args args: 
      {
        color?:Color, 
        offset?:Offset, 
        blurRadius?:number, 
        spreadRadius?:number
      }
     */
    constructor(args?: BoxShadowArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: BoxShadowArgs) {
      return new BoxShadow(args);
    }
  }
  
  //****** BouncingScrollPhysics ******
  export class BouncingScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
    
    constructor(args?: ScrollPhysicsArgs){
      super();
      if(args!=null && args!=undefined){
        this.parent = args.parent;
      }
    }
  
    static new(args?: ScrollPhysicsArgs) {
      return new BouncingScrollPhysics(args);
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
  interface ColorSchemeArgs {
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
    constructor(args?: ColorSchemeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: ColorSchemeArgs) {
      return new ColorScheme(args); 
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
  
    constructor(args?: ScrollPhysicsArgs){
      super();
      if(args!=null && args!=undefined){
        this.parent = args.parent;
      }
    }
  
    static new(args?: ScrollPhysicsArgs) {
      return new ClampingScrollPhysics(args);
      
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
  interface DurationArgs {
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
     * @param args args: 
        {
          days?:number, 
          hours?:number, 
          minutes?:number, 
          seconds?:number, 
          milliseconds?:number
        }
     */
    constructor(args?: DurationArgs){
      super();
      if(args!=null && args!=undefined){
        this.days = args.days;
        this.hours = args.hours;
        this.minutes = args.minutes;
        this.seconds = args.seconds;
        this.milliseconds = args.milliseconds;
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
     * @param args args: 
        {
          days?:number, 
          hours?:number, 
          minutes?:number, 
          seconds?:number, 
          milliseconds?:number
        }
     */
    static new(args?: DurationArgs) {
      return new Duration(args);
    }
  }
  //#endregion
  
  //#region ------- E -------
  //****** EdgeInsets ******
  interface EdgeInsetsArgs {
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
     * @param args args:
        {
          left?:number,
          top?:number,
          right?:number,
          bottom?:number
        }
     */
    constructor(args?: EdgeInsetsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: EdgeInsetsArgs) {
      return new EdgeInsets(args);
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
     * @param args args: 
        {
          left?:number, 
          top?:number, 
          right?:number, 
          bottom?:number
        }
     */
    static only(args?: EdgeInsetsArgs) {
      let v = new EdgeInsets();
      v.constructorName = "only";
      if(args!=null && args!=undefined){
        v.left = args.left;
        v.top = args.top;
        v.right = args.right;
        v.bottom = args.bottom;
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
     * @param args args: 
        {
          vertical?:number, 
          horizontal?:number
        }
     */
    static symmetric(args?: EdgeInsetsArgs) {
      let v = new EdgeInsets();
      v.constructorName = "symmetric";
      if(args!=null && args!=undefined){
        v.vertical = args.vertical;
        v.horizontal = args.horizontal;
      }
      return v;
    }
  }
  
  //****** EdgeInsetsDirectional ******
  interface EdgeInsetsDirectionalArgs {
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
     * @param args args: 
        {
          start?:number, 
          top?:number, 
          end?:number, 
          bottom?:number,
        }
     */
    constructor(args?: EdgeInsetsDirectionalArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: EdgeInsetsDirectionalArgs) {
      return new EdgeInsetsDirectional(args);
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
     * @param args args: 
        {
          start?:number, 
          top?:number, 
          end?:number, 
          bottom?:number
        }
     */
    static only(args?: EdgeInsetsDirectionalArgs) {
      let v = new EdgeInsetsDirectional();
      v.constructorName = "only";
      if(args!=null && args!=undefined){
        v.start = args.start;
        v.top = args.top;
        v.end = args.end;
        v.bottom = args.bottom;
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
  interface FlutterLogoDecorationArgs {
    textColor?:Color;
    style?:FlutterLogoStyle;
    margin?:EdgeInsets;
  }
  export class FlutterLogoDecoration extends DartClass {
    textColor?:Color;
    style?:FlutterLogoStyle;
    margin?:EdgeInsets;
  
    /**
     * @param args args: 
        {
          textColor?:Color, 
          style?:FlutterLogoStyle, 
          margin?:EdgeInsets, 
        }
     */
    constructor(args?: FlutterLogoDecorationArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: FlutterLogoDecorationArgs) {
      return new FlutterLogoDecoration(args);
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
  interface GradientArgs {
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
    static sweep(args: GradientArgs) {
      var v = new Gradient();
      v.constructorName = "sweep";
      if(args!=null && args!=undefined){
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
    static radial(args?: GradientArgs) {
      var v = new Gradient();
      v.constructorName = "radial";
      if(args!=null && args!=undefined){
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
    static linear(args: GradientArgs) {
      var v = new Gradient();
      v.constructorName = "linear";
      if(args!=null && args!=undefined){
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
  
  //#endregion
  
  //#region ------- I -------
  
  //****** InputBorder ******
  interface InputBorderArgs {
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
     * @param args args: 
        {
          borderSide?:BorderSide, 
          borderRadius?:BorderRadius, 
          gapPadding?:number,
        }
     */
    static outline(args?: InputBorderArgs) {
      var v = new InputBorder();
      v.constructorName= "outline";
      if(args!=null && args!=undefined){
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
    static underline(args?: InputBorderArgs) {
      var v = new InputBorder();
      v.constructorName= "underline";
      if(args!=null && args!=undefined){
        v.borderRadius=args.borderRadius;
        v.borderSide=args.borderSide;
      }
      return v;
    };
  
  }
  
  //****** ImageProvider ******
  interface ImageProviderArgs {
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
     * @param args args: 
        {
          scale?:number
        }
     */
    static file(file:File,args?: ImageProviderArgs){
      var v = new ImageProvider();
      v.file = file;
      v.constructorName = "file";
      if(args!=null && args!=undefined){
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
    static memory(bytes:Uint8List,args?: ImageProviderArgs) {
      var v = new ImageProvider();
      v.bytes = bytes;
      v.constructorName = "memory";
      if(args!=null && args!=undefined){
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
    static network(url:string, args: ImageProviderArgs) {
      var v = new ImageProvider();
      v.url = url;
      v.constructorName = "Network";
      if(args!=null && args!=undefined){
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
    static resize(imageProvider?:ImageProvider,args?: ImageProviderArgs) {
      var v = new ImageProvider();
      v.constructorName = "resize";
      v.imageProvider= imageProvider;
      if(args!=null && args!=undefined){
        v.width = args.width;
        v.allowUpscaling= args.allowUpscaling;
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
    static exactAsset(assetName:string,args?: ImageProviderArgs) {
      var v = new ImageProvider();
      v.constructorName = "exactAsset";
      v.assetName = assetName;
      if(args!=null && args!=undefined){      
        v.scale = args.scale;
        v.bundle = args.bundle;
        v.packageName = args.packageName;
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
  interface IconThemeDataArgs {
    color?:Color;
    opacity?:number;
    size?:number;
  }
  export class IconThemeData extends DartClass {
    color?:Color;
    opacity?:number;
    size?:number;
  
    /**
     * @param args args: 
        {
          color?:Color, 
          opacity?:number, 
          size?:number
        }
     */
    constructor(args?: IconThemeDataArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: IconThemeDataArgs) {
      return new IconThemeData(args);
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
  interface InputDecorationThemeArgs {
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
    constructor(args?: InputDecorationThemeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args?: InputDecorationThemeArgs) {
  
      return new InputDecorationTheme(args);
    }
  }
  
  //****** InputDecoration ******
  interface InputDecorationArgs {
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
    constructor(args?: InputDecorationArgs){
      super();
      if(args!=null && args!=undefined){
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
      static new(args?: InputDecorationArgs) {
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
    static collapsed (args?: InputDecorationArgs) {
      let v = new InputDecoration();
      v.constructorName = "collapsed";
  
      if(args!=null && args!=undefined){
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
  interface MediaQueryArgs {
    key?:Key;
    child?:Widget;
    data?:MediaQueryData;
  }
  
  export class MediaQuery extends DartClass {
    key?:Key;
    child?:Widget;
    data?:MediaQueryData;
    
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          data?:MediaQueryData, 
        }
     */
    constructor(args: MediaQueryArgs){
      super();
      if(args!=null && args!=undefined){
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
  
    static new(args: MediaQueryArgs) {
      return new MediaQuery(args);
    };
  
    static of(context:any) {
      return context.mediaQueryData;
    }
  }
  
  //****** TODO MediaQueryData ******
  interface MediaQueryDataArgs {
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
    constructor(args: MediaQueryDataArgs){
      super();
      if(args!=null && args!=undefined){
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
        this.navigationMode= args.navigationMode;
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
    static new(args: MediaQueryDataArgs) {
      return new MediaQueryData(args);
    }
  }
  
  //#endregion
  
  //#region ------- N -------
  //****** NeverScrollableScrollPhysics ******
  export class NeverScrollableScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
  
    constructor(args?: ScrollPhysicsArgs){
      super();
      if(args!=null && args!=undefined){
        this.parent = args.parent;
      }
    }
  
    static new(args?: ScrollPhysicsArgs) {
      return new NeverScrollableScrollPhysics(args);
    }
  }
  
  //****** TODO Notification ******
  export class Notification extends DartClass {
    static new() {
      return new Notification();
    }
  }
  
  //****** NotchedShape ******
  interface NotchedShapeArgs {
  
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
  interface OutlinedBorderArgs {
    side?:BorderSide;
    borderRadius?:BorderRadius;
  }
  export class OutlinedBorder extends ShapeBorder {
    side?:BorderSide;
  
    borderRadius?:BorderRadius;
  
    /**
     * @param args args: 
        {
          side?:BorderSide,
        }
     */
    static circleBorder(args?: OutlinedBorderArgs) {
      var v = new OutlinedBorder();
      v.constructorName = "circleBorder";
      if(args!=null && args!=undefined){
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
    static beveledRectangleBorder(args?: OutlinedBorderArgs) {
      var v = new OutlinedBorder();
      v.constructorName = "beveledRectangleBorder";
      if(args!=null && args!=undefined){
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
    static continuousRectangleBorder(args?: OutlinedBorderArgs) {
      var v = new OutlinedBorder();
      v.constructorName = "continuousRectangleBorder";
      if(args!=null && args!=undefined){
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
    static roundedRectangleBorder(args?: OutlinedBorderArgs) {
      var v = new OutlinedBorder();
      v.constructorName = "roundedRectangleBorder";
      if(args!=null && args!=undefined){
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
    static stadiumBorder(args?: OutlinedBorderArgs) {
      var v = new OutlinedBorder();
      v.constructorName = "stadiumBorder";
      if(args!=null && args!=undefined){
        v.side = args.side;
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
  interface RectArgs {
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
     * @param args args: 
        {
          center?:Offset, 
          width?:number,
          height?:number
        }
     */
    static fromCenter (args: RectArgs) {
      let v = new Rect();
      v.constructorName = "fromCenter";
      if(args!=null && args!=undefined){
        v.center = args.center;
        v.width = args.width;
        v.height = args.height;  
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
     * @param args args: 
      {
        center?:Offset, 
        radius?:number
      }
     */
    static fromCircle(args: RectArgs) {
      let v = new Rect();
      v.constructorName = "fromCircle";
      if(args!=null && args!=undefined){
        v.center = args.center;
        v.radius = args.radius;
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
  interface RRectArgs {
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
     * @param args args: 
      {
        topLeft?:Radius, 
        topRight?:Radius, 
        bottomRight?:Radius, 
        bottomLeft?:Radius,
      }
     */
    static fromLTRBAndCorners(left:number,top:number, right:number,  bottom:number, args?: RRectArgs) {
      let v = new RRect();
      v.constructorName = "fromLTRBAndCorners";
      v.left = left;
      v.top = top;
      v.right = right;
      v.bottom = bottom;
      if(args!=null && args!=undefined){
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
    static fromRectAndCorners(rect:Rect, args?: RRectArgs) {
      let v = new RRect();
      v.constructorName = "fromRectAndCorners";
      v.rect = rect;
      if(args!=null && args!=undefined){
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
  
  //****** RSTransform ******
  interface RSTransformArgs {
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
    static fromComponents (args: RSTransformArgs) {
      let v = new RSTransform();
      v.constructorName = "fromComponents";
      if(args!=null && args!=undefined){
        v.rotation =args.rotation;
        v.scale   = args.scale;
        v.anchorX = args.anchorX;
        v.anchorY = args.anchorY;
        v.translateX= args.translateX;
        v.translateY = args.translateY;
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
  
    constructor(args?: ScrollPhysicsArgs){
      super();
      if(args!=null && args!=undefined){
        this.parent = args.parent;
      }
    }
  
    static new(args?: ScrollPhysicsArgs) {
      return new RangeMaintainingScrollPhysics(args);
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
  interface StrutStyleArgs {
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
    constructor(args: StrutStyleArgs){
      super();
      if(args!=null && args!=undefined){
        this.fontFamily = args.fontFamily;
        this.fontFamilyFallback = args.fontFamilyFallback;
        this.fontSize = args.fontSize;
        this.height = args.height;
        this.leading = args.leading;
        this.fontWeight = args.fontWeight;
        this.fontStyle = args.fontStyle;
        this.forceStrutHeight = args.forceStrutHeight;
        this.debugLabel = args.debugLabel;
        this.packageName =args.packageName;
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
    static new(args: StrutStyleArgs) {
      return new StrutStyle(args);
    }
  }
  
  //****** SystemUiOverlayStyle ******
  interface SystemUiOverlayStyleArgs {
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
    constructor(args: SystemUiOverlayStyleArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SystemUiOverlayStyleArgs) {
      return new SystemUiOverlayStyle(args);
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
  interface SpringDescriptionArgs {
    mass:number;
    stiffness:number; 
    damping:number;
  }
  export class SpringDescription extends DartClass {
    mass?:number;
    stiffness?:number; 
    damping?:number;
  
    /**
     * @param args args: 
        {
          mass?:number,
          stiffness?:number,
          damping?:number
        }
     */
    constructor(args: SpringDescriptionArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SpringDescriptionArgs) {
      return new SpringDescription(args);
    }
  }
  
  //****** ScrollPhysics ******
  interface ScrollPhysicsArgs {
    parent?:ScrollPhysics;
  }
  export class ScrollPhysics extends DartClass {
    parent?:ScrollPhysics;
  
    constructor(args?: ScrollPhysicsArgs){
      super();
      if(args!=null && args!=undefined){
        this.parent = args.parent;
      }
    }
  
    static new(args?: ScrollPhysicsArgs) {
      return new ScrollPhysics(args);
    }
  }
  
  //****** TODO ScrollController ******
  interface ScrollControllerArgs {
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
     * @param args args: 
        {
          duration?:Duration, 
          curve?:Curves
        }
     */
    animateTo(offset:Offset,args?: ScrollControllerArgs) {
      var map = new Map();
      map.set("offset",offset);
      if(args!=null && args!=undefined){
        if(args.duration!=null && args.duration!=undefined){
          map.set("duration",args.duration);
        }
  
        if(args.curve!=null && args.curve!=undefined){
          map.set("curve",args.curve);
        }
      }
  
      let argument = JSCallArgs.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"animateTo",args:map});
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
  
    jumpTo(value:number) {
      var args=new Map();
      args.set("value",value);
  
      let argument=JSCallArgs.new({mirrorID:this.mirrorID,className:"ScrollController",funcName:"jumpTo",args:args});
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
    constructor(args: ScrollControllerArgs){
      super();
      this.createMirrorID();
      if(args!=null && args!=undefined){
        this.initialScrollOffset = args.initialScrollOffset;
        this.keepScrollOffset = args.keepScrollOffset;
        this.debugLabel = args.debugLabel;
      }
    }
  
    /**
     * @param args args: 
        {
          initialScrollOffset?:number, 
          keepScrollOffset?:boolean, 
          debugLabel?:string
        }
     */
    static new(args: ScrollControllerArgs) {
      return new ScrollController(args);
    }
  }
  
  //****** Shadow ******
  interface ShadowArgs {
    color?:Color;
    offset?:Offset;
    blurRadius?:number;
  }
  export class Shadow extends DartClass {
    color?:Color;
    offset?:Offset;
    blurRadius?:number;
  
    /**
     * @param args args: 
        {
          color?:Color, 
          offset?:Offset, 
          blurRadius?:number
        }
     */
    constructor(args?: ShadowArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: ShadowArgs) {
      return new Shadow(args);
    }
  }
  
  //****** ScrollbarPainter ******
  interface ScrollbarPainterArgs {
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
    constructor(args: ScrollbarPainterArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ScrollbarPainterArgs) {
      return new ScrollbarPainter(args);
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
  
  
  //****** TextStyle ******
  interface TextStyleArgs {
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
    constructor(args?: TextStyleArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args?: TextStyleArgs) {
      return new TextStyle(args);
    }
  }
  
  //****** TableRow ******
  interface TableBorderArgs {
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
    constructor(args?: TableBorderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: TableBorderArgs) {
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
    static all(args?: TableBorderArgs) {
      let v = new TableBorder();
      v.constructorName = "all";
      if(args!=null && args!=undefined){
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
    static symmetric(args?: TableBorderArgs) {
      let v = new TableBorder();
      v.constructorName = "symmetric";
      if(args!=null && args!=undefined){
        v.inside = args.inside;
        v.outside = args.outside;
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
  interface TabControllerArgs {
    initialIndex?:number;
    length?:number;
    vsync?:any;
  }
  export class TabController extends DartClass {
    initialIndex?:number;
    length?:number;
    vsync?:any;
  
    /**
     * @param args args: 
      {
        initialIndex?:number,
        length?:number,
        vsync?:any
      }
     */
    constructor(args?: TabControllerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args?: TabControllerArgs) {
      return new TabController(args);
    }
  }
  
  //****** TODO TextEditingController ******
  export class TextEditingController extends DartClass {
    text?:string;
  
    constructor(text?:string){
      super();
      this.text=text;
    }
  
    static new(text?:string) {
      return new TextEditingController(text);
    }
  }
  
  //****** TextInputType ******
  interface TextInputTypeArgs {
    signed?:boolean;
    decimal?:boolean;
  }
  export class TextInputType extends DartClass {
    
    signed?:boolean;
    decimal?:boolean;
  
    static new(){
      return new TextInputType();
    };
  
    static numberWithOptions(args?: TextInputTypeArgs) {
      let v = new TextInputType();
      v.constructorName = "numberWithOptions";
      if(args!=null && args!=undefined){
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
  interface UriArgs {
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
    constructor(args?: UriArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: UriArgs){
      return new Uri(args);
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
  interface VisualDensityArgs {
    horizontal?:number;
    vertical?:number;
  }
  export class VisualDensity extends DartClass {
    horizontal?:number;
    vertical?:number;
  
    /**
     * @param args args: 
      {
        horizontal?:number,
        vertical?:number, 
      }
     */
    constructor(args?: VisualDensityArgs){
      super();
      if(args!=null && args!=undefined){
        this.horizontal=args.horizontal;
        this.vertical=args.vertical;
      }
    }
    
    /**
     * @param args args: 
      {
        horizontal?:number,
        vertical?:number, 
      }
     */
    static new(args?: VisualDensityArgs) {
      return new VisualDensity(args);
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
interface AbsorbPointerArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          absorbing?:boolean, 
          ignoringSemantics?:boolean, 
        }
     */
    constructor(args?: AbsorbPointerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: AbsorbPointerArgs) {
      return new AbsorbPointer(args);
    }
  }
  
  //****** TODO AnimationController ******
  interface AnimationControllerArgs {
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
    static new(args: AnimationControllerArgs) {
      var v = new AnimationController();
      v.createMirrorID();
      if(args!=null && args!=undefined){
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
    /*
    forward(from) {
      var argument = new FlutterCallArgs({
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
      var argument = new FlutterCallArgs({
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
      var argument = new FlutterCallArgs({
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
      var argument = new FlutterCallArgs({
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
  interface AboutListTileArgs {
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
    constructor(args: AboutListTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AboutListTileArgs){
      return new AboutListTile(args);
    }
  }
  
  //****** AboutDialog ******
  interface AboutDialogArgs {
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
    constructor(args: AboutDialogArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AboutDialogArgs){
      return new AboutDialog(args);
    }
  }
  
  //****** AppBar ******
  interface AppBarArgs {
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
    constructor(args: AppBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AppBarArgs){
      return new AppBar(args);
    }
  }
  
  //****** Align ******
  interface AlignArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child?:Widget,
        alignment?:Alignment, 
        widthFactor?:number, 
        heightFactor?:number,
      }
     */
    constructor(args: AlignArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AlignArgs) {
      return new Align(args);
    }
  }
  
  //****** AspectRatio ******
  interface AspectRatioArgs {
    child?:Widget;
    aspectRatio?:number;
    key?:Key;
  }
  export class AspectRatio extends Widget {
    child?:Widget;
    aspectRatio?:number;
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          aspectRatio?:number,
        }
     */
    constructor(args: AspectRatioArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AspectRatioArgs) {
      return new AspectRatio(args);
    }
  }
  
  //****** AnnotatedRegion ******
  interface AnnotatedRegionArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          value?:number, 
          sized?:boolean,
        }
     */
    constructor(args: AnnotatedRegionArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnnotatedRegionArgs){
      return new AnnotatedRegion(args);
    }
  }
  
  //****** TODO AnimatedCrossFade ******
  interface AnimatedCrossFadeArgs {
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
    constructor(args: AnimatedCrossFadeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnimatedCrossFadeArgs) {
      return new AnimatedCrossFade(args);
    };
  }
  
  //****** TODO AnimatedOpacity ******
  interface AnimatedOpacityArgs {
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
    constructor(args: AnimatedOpacityArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnimatedOpacityArgs) {
      return new AnimatedOpacity(args);
    };
  }
  
  //****** TODO AnimatedBuilder ******
  interface AnimatedBuilderArgs {
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
     * @param args args: 
        {
          key?:Key, 
          animation?:Animation, 
          builder?:any, 
          child?:Widget, 
          widget?:Widget
        }
     */
    constructor(args: AnimatedBuilderArgs){
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
    static new(args: AnimatedBuilderArgs) {
      return new AnimatedBuilder(args);
    }
  }
  
  //****** TODO AnimatedContainer ******
  interface AnimatedContainerArgs {
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
    constructor(args: AnimatedContainerArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key;
        this.alignment = args.alignment;
        this.margin = args.margin;
        this.padding = args.padding;
        this.child = args.child;
        this.color = args.color;
        this.decoration= args.decoration;
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
    static new(args: AnimatedContainerArgs) {
      return new AnimatedContainer(args);
    }
  
  }
  
  //****** TODO AnimatedPhysicalModel ******
  interface AnimatedPhysicalModelArgs {
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
    constructor(args: AnimatedPhysicalModelArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnimatedPhysicalModelArgs) {
      return new AnimatedPhysicalModel(args);
    }
  }
  
  //****** TODO AnimatedPositioned ******
  interface AnimatedPositionedArgs {
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
    constructor(args: AnimatedPositionedArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnimatedPositionedArgs) {
      return new AnimatedPositioned(args);
    }
  }
  
  //****** TODO AnimatedSize ******
  interface AnimatedSizeArgs {
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
    constructor(args: AnimatedSizeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: AnimatedSizeArgs) {
      return new AnimatedSize(args);
    }
  }
  
  //****** TODO AnimatedDefaultTextStyle ******
  interface AnimatedDefaultTextStyleArgs {
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
    constructor(args: AnimatedDefaultTextStyleArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key
        this.child = args.child;
        this.style = args.style;
        this.softWrap = args.softWrap;
        this.textAlign = args.textAlign;
        this.softWrap = args.softWrap;
        this.maxLines = args.maxLines;
        this.curve = args.curve;
        this.duration = args.duration;
        this.onEnd =args.onEnd;
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
    static new(args: AnimatedDefaultTextStyleArgs) {
      return new AnimatedDefaultTextStyle(args);
    }
  }
  
  //#endregion
  
  //#region ------- B -------
  //****** BottomNavigationBarItem ******
  interface BottomNavigationBarItemArgs {
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
     * @param args args: 
        {
          icon:Widget, 
          title?:Widget,
          activeIcon?:Widget, 
          backgroundColor?:Color
        }
     */
    constructor(args: BottomNavigationBarItemArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: BottomNavigationBarItemArgs) {
      return new BottomNavigationBarItem(args);
    }
  }
  
  //****** Banner ******
  interface BannerArgs {
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
    constructor(args: BannerArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key;
        this.child = args.child;
        this.message = args.message;
        this.textDirection = args.textDirection;
        this.location = args.location;
        this.layoutDirection = args.layoutDirection;
        this.color = args.color;
        this.textStyle =args.textStyle;
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
    static new(args: BannerArgs) {
      return new Banner(args);
    }
  }
  
  //****** Baseline ******
  interface BaselineArgs {
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
     * @param args args: 
        {
          key?:Key,
          child?:Widget,
          baseline:number,
          baselineType:TextBaseline,
        }
     */
    constructor(args: BaselineArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BaselineArgs) {
      return new Baseline(args);
    }
  }
  
  //****** ButtonBar ******
  interface ButtonBarArgs {
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
    constructor(args: ButtonBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ButtonBarArgs) {
      return new ButtonBar(args);
    }
  }
  
  //****** BlockSemantics ******
  interface BlockSemanticsArgs {
    child?:Widget;
    blocking?:boolean;
    key?:Key;
  }
  export class BlockSemantics extends Widget {
    child?:Widget;
    blocking?:boolean;
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          blocking?:boolean,
        }
     */
    constructor(args: BlockSemanticsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BlockSemanticsArgs) {
      return new BlockSemantics(args);
    }
  }
  
  //****** BottomAppBar ******
  interface BottomAppBarArgs {
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
    constructor(args: BottomAppBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BottomAppBarArgs) {
      return new BottomAppBar(args);
    }
  }
  
  //****** BottomNavigationBar ******
  interface BottomNavigationBarArgs {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:VoidValueChangedNumber;
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
    onTap?:VoidValueChangedNumber;
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
    constructor(args: BottomNavigationBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BottomNavigationBarArgs) {
      return new BottomNavigationBar(args);
    }
  }
  
  //****** BackButtonIcon ******
  interface BackButtonIconArgs {
    key?:Key;
  }
  export class BackButtonIcon extends Widget {
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
        }
     */
    constructor(args: BackButtonIconArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key;
      }
    }
  
  
    /**
     * @param args args: 
        {
          key?:Key, 
        }
     */
    static new(args: BackButtonIconArgs) {
      return new BackButtonIcon(args);
    }
  }
  
  //****** BackButton ******
  interface BackButtonArgs {
    key?:Key;
    onPressed?:VoidCallback;
  }
  export class BackButton extends Widget {
    key?:Key;
    onPressed?:VoidCallback;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          onPressed?:VoidCallback,
        }
     */
    constructor(args: BackButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: BackButtonArgs) {
      return new BackButton(args);
    }
  }
  
  //****** TODO Builder ******
  interface BuilderArgs {
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
  interface CloseButtonArgs {
    key?:Key;
    onPressed?:VoidCallback;
    color?:Color;
  }
  export class CloseButton extends Widget {
    key?:Key;
    onPressed?:VoidCallback;
    color?:Color;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          onPressed?:VoidCallback,
          color?:Color, 
        }
     */
    constructor(args: CloseButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CloseButtonArgs) {
      return new CloseButton(args);
    }
  }
  
  //****** Container ******
  interface ContainerArgs {
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
    constructor(args: ContainerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ContainerArgs) {
        return new Container(args);
    }
  }
  
  //****** Center ******
  interface CenterArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          widthFactor?:number, 
          heightFactor?:number, 
        }
     */
    constructor(args: CenterArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CenterArgs) {
      return new Center(args);
    }
  }
  
  //****** ColoredBox ******
  interface ColoredBoxArgs {
    key?:Key;
    child?:Widget;
    color:Color;
  }
  export class ColoredBox extends Widget {
    key?:Key;
    child?:Widget;
    color?:Color;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          color:Color, 
        }
     */
    constructor(args: ColoredBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ColoredBoxArgs) {
      return new ColoredBox(args);
    }
  }
  
  //****** CircleAvatar ******
  interface CircleAvatarArgs {
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
    constructor(args: CircleAvatarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CircleAvatarArgs) {
      return new CircleAvatar(args);
    }
  }
  
  //****** Chip ******
  interface ChipArgs {
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
    constructor(args: ChipArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: ChipArgs) {
      return new Chip(args);
    }
  }
  
  //****** CheckedModeBanner ******
  interface CheckedModeBannerArgs {
    key?:Key;
    child:Widget;
  }
  export class CheckedModeBanner extends Widget  {
    key?:Key;
    child?:Widget;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child:Widget, 
        }
     */
    constructor(args: CheckedModeBannerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CheckedModeBannerArgs) {
      return new CheckedModeBanner(args);
    }
  }
  
  //****** CheckboxListTile ******
  interface CheckboxListTileArgs {
    key?:Key;
    value:boolean;
    onChanged:VoidValueChangedBoolean;
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
    onChanged?:VoidValueChangedBoolean;
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
    constructor(args: CheckboxListTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CheckboxListTileArgs) {
      return new CheckboxListTile(args);
    }
  }
  
  //****** Checkbox ******
  interface CheckboxArgs {
    key?:Key;
    value:boolean;
    onChanged:VoidValueChangedBoolean;
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
    onChanged?:VoidValueChangedBoolean;
    activeColor?:Color;
    checkColor?:Color;
    focusColor?:Color;
    hoverColor?:Color;
    materialTapTargetSize?:MaterialTapTargetSize;
    visualDensity?:VisualDensity;
    autofocus?:boolean;
    tristate?:boolean;
  
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
    constructor(args: CheckboxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CheckboxArgs) {
      return new Checkbox(args);
    }
  }
  
  
  //****** TODO ClipRRect ******
  interface ClipRRectArgs {
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
     * @param args args: 
        {
          child?:Widget,
          borderRadius?:BorderRadius,
          clipBehavior?:Clip,
          key?:Key
        }
     */
    constructor(args: ClipRRectArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ClipRRectArgs){
      return new ClipRRect(args);
    }
  }
  
  //****** ConstrainedBox ******
  interface ConstrainedBoxArgs {
    key?:Key;
    child?:Widget;
    constraints:BoxConstraints;  
  }
  export class ConstrainedBox extends Widget {
    child?:Widget;
    constraints?:BoxConstraints;
    key?:Key;
  
    /**
     * @param args args: 
        {
          child?:Widget, 
          constraints:BoxConstraints, 
          key?:Key,
        }
     */
    constructor(args: ConstrainedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ConstrainedBoxArgs) {
      return new ConstrainedBox(args);
    }
  }
  
  //****** TODO CustomSingleChildLayout ******
  interface CustomSingleChildLayoutArgs {
    key?:Key;
    child?:Widget;
    delegate?:any;
  }
  export class CustomSingleChildLayout extends Widget {
    child?:Widget;
    delegate?:any;
    key?:Key;
  
    /**
     * @param args args: 
        {
          child?:Widget, 
          delegate?:any, 
          key?:Key,
        }
     */
    constructor(args: CustomSingleChildLayoutArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CustomSingleChildLayoutArgs) {
      return new CustomSingleChildLayout(args);
    }
  }
  
  //****** Column ******
  interface ColumnArgs {
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
    constructor(args: ColumnArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ColumnArgs) {
      return new Column(args);
    }
  }
  
  //****** TODO CustomMultiChildLayout ******
  interface CustomMultiChildLayoutArgs {
    key?:Key;
    children?:Array<Widget>;
    delegate?:any;
  }
  export class CustomMultiChildLayout extends Widget {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  
    /**
     * @param args args: 
        {
          children?:Array<Widget>, 
          delegate?:any, 
          key?:Key
        }
     */
    constructor(args: CustomMultiChildLayoutArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CustomMultiChildLayoutArgs) {
      return new CustomMultiChildLayout(args);
    }
  }
  
  //****** CustomScrollView ******
  interface CustomScrollViewArgs {
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
    constructor(args: CustomScrollViewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CustomScrollViewArgs) {
      return new CustomScrollView(args);
    }
  }
  
  //****** Card ******
  interface CardArgs {
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
    constructor(args: CardArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CardArgs) {
       return new Card(args);
    }
  }
  //#endregion
  
  //#region ------- D -------
  //****** Divider ******
  interface DividerArgs {
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
    constructor(args: DividerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DividerArgs) {
      return new Divider(args);
    }
  }
  
  //****** Directionality ******
  interface DirectionalityArgs {
    key?:Key;
    child:Widget;
    textDirection:TextDirection;
  }
  export class Directionality extends Widget {
    key?:Key;
    child?:Widget;
    textDirection?:TextDirection;
  
    /**
     * @param args args: 
        {
          key?:Key,
          child:Widget,
          textDirection:TextDirection,
        }
     */
    constructor(args: DirectionalityArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DirectionalityArgs) {
      return new Directionality(args);
    }
  }
  
  //****** DropdownMenuItem ******
  interface DropdownMenuItemArgs {
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
     * @param args args: 
        {
          child:Widget,
          value?:number,
          key?:Key,
          onTap?:VoidCallback,
        }
     */
    constructor(args: DropdownMenuItemArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DropdownMenuItemArgs) {
      return new DropdownMenuItem(args);
    }
  }
  
  //****** DecoratedBox ******
  interface DecoratedBoxArgs {
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
     * @param args args: 
        {
          child?:Widget, 
          decoration:BoxDecoration, 
          position?:DecorationPosition, 
          key?:Key,
        }
     */
    constructor(args: DecoratedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DecoratedBoxArgs) {
      return new DecoratedBox(args);
    }
  }
  
  //****** TODO DropdownButton ******
  interface DropdownButtonArgs {
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
    constructor(args: DropdownButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DropdownButtonArgs) {
      return new DropdownButton(args);
    }
  }
  
  //****** DefaultTabController ******
  interface DefaultTabControllerArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child:Widget, 
          length:number, 
          initialIndex?:number, 
        }
     */
    constructor(args: DefaultTabControllerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DefaultTabControllerArgs) {
      return new DefaultTabController(args);
    }
  }
  
  //****** TODO DecorationImage ******
  interface DecorationImageArgs {
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
    constructor(args: DecorationImageArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DecorationImageArgs) {
      return new DecorationImage(args);
    }
  }
  
  //****** DefaultTextStyle ******
  interface DefaultTextStyleArgs {
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
    constructor(args: DefaultTextStyleArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DefaultTextStyleArgs) {
      return new DefaultTextStyle(args);
    }
  }
  
  //****** TODO DecoratedBoxTransition ******
  interface DecoratedBoxTransitionArgs {
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
     * @param args args: 
        {
          key?:Key, 
          decoration?:any, 
          position?:DecorationPosition, 
          child?:Widget
        }
     */
    constructor(args: DecoratedBoxTransitionArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: DecoratedBoxTransitionArgs) {
      return new DecoratedBoxTransition(args);
    }
  }
  //#endregion
  
  //#region ------- E -------
  //****** ExcludeSemantics ******
  interface ExcludeSemanticsArgs {
    child?:Widget;
    excluding?:boolean;
    key?:Key;
  }
  export class ExcludeSemantics extends Widget {
    child?:Widget;
    excluding?:boolean;
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          excluding?:boolean,
        }
     */
    constructor(args?: ExcludeSemanticsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args?: ExcludeSemanticsArgs) {
      return new ExcludeSemantics();
    }
  }
  
  //****** Expanded ******
  interface ExpandedArgs {
    child:Widget;
    flex?:number;
    key?:Key;
  }
  export class Expanded extends Widget {
    child?:Widget;
    flex?:number;
    key?:Key;
    /**
     * @param args args: 
        {
          child:Widget, 
          flex?:number, 
          key?:Key,
        }
     */
    constructor(args: ExpandedArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ExpandedArgs) {
      return new Expanded(args);
    }
  }
  
  //****** ExpandIcon ******
  interface ExpandIconArgs {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed:VoidValueChangedBoolean;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    expandedColor?:Color;
  }
  export class ExpandIcon extends Widget {
    key?:Key;
    isExpanded?:boolean;
    size?:number;
    onPressed?:VoidValueChangedBoolean;
    padding?:EdgeInsets;
    color?:Color;
    disabledColor?:Color;
    expandedColor?:Color;
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
    constructor(args: ExpandIconArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ExpandIconArgs) {
      return new ExpandIcon(args);
    }
  }
  
  
  //****** ExpansionTile ******
  interface ExpansionTileArgs {
      key?:Key;
      leading?:Widget;
      title?:Widget;
      subtitle?:Widget;
      backgroundColor?:Color;
      onExpansionChanged?:VoidValueChangedBoolean;
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
      onExpansionChanged?:VoidValueChangedBoolean;
      children?:Array<Widget>;
      trailing?:Widget;
      initiallyExpanded?:boolean;
      maintainState?:boolean;
      tilePadding?:EdgeInsets;
      expandedCrossAxisAlignment?:CrossAxisAlignment;
      expandedAlignment?:Alignment;
      childrenPadding?:EdgeInsets;
  
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
    constructor(args: ExpansionTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ExpansionTileArgs) {
      return new ExpansionTile(args);
    }
  }
  
  //#endregion
  
  //#region ------- F -------
  
  //****** Flexible ******
  interface FlexibleArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child:Widget, 
          flex?:number, 
          fit?:FlexFit,
        }
     */
    constructor(args: FlexibleArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: FlexibleArgs) {
      return new Flexible(args);
    }
  }
  
  //****** FittedBox ******
  interface FittedBoxArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        alignment?:Alignment, 
        fit?:BoxFit,
      }
     */
    constructor(args: FittedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: FittedBoxArgs) {
      return new FittedBox(args);
    }
  }
  
  //****** FractionallySizedBox ******
  interface FractionallySizedBoxArgs {
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
     * @param args args: 
        {
          child?:Widget, 
          alignment?:Alignment, 
          widthFactor?:number, 
          heightFactor?:number, 
          key?:Key
        }
     */
    constructor(args: FractionallySizedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FractionallySizedBoxArgs) {
      return new FractionallySizedBox(args);
    }
  
  }
  
  //****** Flex ******
  interface FlexArgs {
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
    constructor(args: FlexArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: FlexArgs) {
      return new Flex(args);
    }
  }
  
  //****** TODO Flow ******
  interface FlowArgs {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  }
  export class Flow extends Widget {
    children?:Array<Widget>;
    delegate?:any;
    key?:Key;
  
    /**
     * @param args args: 
        {
          children?:Array<Widget>, 
          delegate?:any, 
          key?:Key,
        }
     */
    constructor(args: FlowArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: FlowArgs) {
      return new Flow(args);
    }
  }
  
  //****** FlatButton ******
  interface FlatButtonArgs {
    child:Widget;
    onPressed:VoidCallback;
    padding?:EdgeInsets;
    onHighlightChanged?:VoidValueChangedBoolean;
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
    onHighlightChanged?:VoidValueChangedBoolean;
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
    constructor(args?: FlatButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FlatButtonArgs) {
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
    static icon(args: FlatButtonArgs) {
      let v = new FlatButton();
      v.constructorName = "icon";
      if(args!=null && args!=undefined){
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
  
  //****** FloatingActionButton ******
  interface FloatingActionButtonArgs {
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
    constructor(args: FloatingActionButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FloatingActionButtonArgs) {
      return  new FloatingActionButton(args);
    }
  }
  
  //****** FlexibleSpaceBar ******
  interface FlexibleSpaceBarArgs {
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
    constructor(args: FlexibleSpaceBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FlexibleSpaceBarArgs) {
      return new FlexibleSpaceBar(args);
    }
  }
  
  //****** FlexibleSpaceBarSettings ******
  interface FlexibleSpaceBarSettingsArgs {
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
    constructor(args: FlexibleSpaceBarSettingsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FlexibleSpaceBarSettingsArgs) {
      return new FlexibleSpaceBarSettings(args);
    }
  }
  
  //****** FlutterLogo ******
  interface FlutterLogoArgs {
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
    constructor(args: FlutterLogoArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FlutterLogoArgs) {
      return new FlutterLogo(args);
    }
  }
  
  //****** FractionalTranslation ******
  interface FractionalTranslationArgs {
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
     * @param args args: 
        {
          translation:Offset, 
  
          key?:Key, 
          transformHitTests?:boolean, 
          child?:Widget,   
        }
     */
    constructor(args: FractionalTranslationArgs) {
      super();
      if(args!=null && args!=undefined){
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
    static new(args: FractionalTranslationArgs) {
      return new FractionalTranslation(args);
    }
  }
  
  //#endregion
  
  //#region ------- G -------
  //****** TODO GestureDetector ******
  interface GestureDetectorArgs {
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
    constructor(args: GestureDetectorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: GestureDetectorArgs) {
      return new GestureDetector(args);
    }
  }
  
  //****** GridTileBar ******
  interface GridTileBarArgs {
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
    constructor(args: GridTileBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: GridTileBarArgs) {
      return new GridTileBar(args);
    }
  }
  
  
  //****** GridTile ******
  interface GridTileArgs {
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
     * @param args args: 
      {
        key?:Key,
        child?:Widget,
        header?:Widget,
        footer?:Widget, 
      }
     */
    constructor(args: GridTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: GridTileArgs) {
      return new GridTile(args);
    }
  }
  
  //******  GridPaper ******
  interface GridPaperArgs {
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
    constructor(args: GridPaperArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: GridPaperArgs) {
      return new GridPaper(args);
    }
  }
  
  //#endregion
  
  //#region ------- H -------
  //#endregion
  
  //#region ------- I -------
  //****** InputDecorator ******
  interface InputDecoratorArgs {
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
    constructor(args: InputDecoratorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: InputDecoratorArgs) {
      return new InputDecorator(args);
    }
  }
  
  //****** IndexedSemantics ******
  interface IndexedSemanticsArgs {
    child?:Widget;
    index:number;
    key?:Key;
  }
  export class IndexedSemantics extends Widget {
    child?:Widget;
    index?:number;
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          index?:number,
        }
     */
    constructor(args: IndexedSemanticsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IndexedSemanticsArgs) {
      return new IndexedSemantics(args);
    }
  }
  
  //****** IntrinsicHeight ******
  interface IntrinsicHeightArgs {
    child?:Widget;
    key?:Key;
  }
  export class IntrinsicHeight extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget,         
        }
     */
    constructor(args: IntrinsicHeightArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IntrinsicHeightArgs) {
      return new IntrinsicHeight(args);
    }
  }
  
  //****** IntrinsicWidth ******
  interface IntrinsicWidthArgs {
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
     * @param args args: 
        {
          child?:Widget, 
          stepWidth?:number, 
          stepHeight?:number, 
          key?:Key
        }
     */
    constructor(args: IntrinsicWidthArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IntrinsicWidthArgs) {
      return new IntrinsicWidth(args);
    }
  }
  
  //****** IndexedStack ******
  interface IndexedStackArgs {
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
    constructor(args: IndexedStackArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IndexedStackArgs) {
      return new IndexedStack(args);
    }
  }
  
  //****** IgnorePointer ******
  interface IgnorePointerArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child?:Widget, 
          ignoring?:boolean, 
          ignoringSemantics?:boolean, 
        }
     */
    constructor(args: IgnorePointerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IgnorePointerArgs) {
      return new IgnorePointer(args);
    }
  }
  
  //****** IconButton ******
  interface IconButtonArgs {
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
    constructor(args: IconButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: IconButtonArgs) {
      return new IconButton(args);
    }
  }
  
  //****** Icon ******
  interface IconArgs {
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
     * @param args args: 
        {
          key?:Key,
          size?:number, 
          color?:Color, 
          semanticLabel?:string, 
          textDirection?:TextDirection,
        }
     */
    constructor(icon:IconData,args?: IconArgs){
      super();
      this.icon = icon;
      if(args!=null && args!=undefined){
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
    static new(icon:IconData,args?: IconArgs) {
      return new Icon(icon,args);
    }
  }
  
  //****** ImageIcon ******
  interface ImageIconArgs {
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
     * @param args args: 
        {
          key?:Key,
          size?:number, 
          color?:Color, 
          semanticLabel?:string, 
          textDirection?:TextDirection,
        }
     */
    constructor(image:ImageProvider,args?: ImageIconArgs){
      super();
      this.image = image;
      if(args!=null && args!=undefined){
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
    static new(image:ImageProvider,args?: ImageIconArgs) {
      return new ImageIcon(image,args);
    }
  }
  
  
  //#endregion
  
  //#region ------- J -------
  //#endregion
  
  //#region ------- K -------
  //****** KeyedSubtree ******
  interface KeyedSubtreeArgs {
    child:Widget;
    key?:Key;
  }
  export class KeyedSubtree extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param args args: 
        {
          child:Widget, 
          key?:Key,
        }
     */
    constructor(args: KeyedSubtreeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: KeyedSubtreeArgs) {
      return new KeyedSubtree(args);
    }
  }
  //#endregion
  
  //#region ------- L -------
  //****** LicensePage ******
  interface LicensePageArgs {
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
     * @param args args: 
        {
          key?:Key, 
          applicationName?:string, 
          applicationLegalese?:string, 
          applicationVersion?:string, 
          applicationIcon?:Widget, 
        }
     */
    constructor(args: LicensePageArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: LicensePageArgs){
      return new LicensePage(args);
    }
  }
  
  //****** LimitedBox ******
  interface LimitedBoxArgs {
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
     * @param args args: 
        {
          child?:Widget, 
          maxWidth?:number, 
          maxHeight?:number, 
          key?:Key,
        }
     */
    constructor(args: LimitedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: LimitedBoxArgs) {
      return new LimitedBox(args);
    }
  }
  
  //****** ListBody ******
  interface ListBodyArgs {
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
     * @param args args: 
        {
          children?:Array<Widget>, 
          reverse?:boolean, 
          mainAxis?:Axis, 
          key?:Key
        }
     */
    constructor(args:ListBodyArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args:ListBodyArgs) {
      return new ListBody(args);
    }
  }
  
  //****** ListTile ******
  interface ListTileArgs {
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
    constructor(args: ListTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ListTileArgs) {
      return new ListTile(args);
    }
  }
  
  //****** TODO ListView ******
  interface ListViewArgs {
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
    constructor(args?: ListViewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ListViewArgs) {
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
    static builder(args: ListViewArgs) {
        let v = new ListView();
        v.constructorName = "builder";
        if(args!=null && args!=undefined){
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
  
  //****** TODO LayoutBuilder ******
  interface LayoutBuilderArgs{
    builder?:any;
    key?:Key;
  }
  export class LayoutBuilder extends Widget {
    builder?:any;
    key?:Key;
  
    /**
     * @param args args: 
        {
          builder?:any, 
          key?:Key
        }
     */
    constructor(args: LayoutBuilderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: LayoutBuilderArgs) {
      return new LayoutBuilder(args);
    }
  }
  //#endregion
  
  //#region ------- M -------
  //****** Material ******
  interface MaterialArgs {
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
    constructor(args: MaterialArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: MaterialArgs) {
      return new Material(args);
    }
  }
  
  //****** TODO MaterialPageRoute ******
  interface MaterialPageRouteArgs {
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
     * @param args args: 
        {
          builder?:any, 
          settings?:any, 
          maintainState?:boolean, 
          fullscreenDialog?:boolean
        }
     */
    constructor(args: MaterialPageRouteArgs){
      super();
      if(args!=null && args!=undefined){
        this.builder = args.builder;
        this.settings = args.settings;
        this.maintainState = args.maintainState;
        this.fullscreenDialog = args.fullscreenDialog;
      }
      this.child = undefined;
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
    static new(args: MaterialPageRouteArgs) {
      return new MaterialPageRoute(args);
    }
  }
  
  
  //#endregion
  
  //#region ------- N -------
  //****** TODO NotificationListener ******
  interface NotificationListenerArgs {
    child?:Widget;
    key?:Key;
  }
  export class NotificationListener extends Widget {
    child?:Widget;
    key?:Key;
    /**
     * @param args args: 
        {
          child?:Widget,
          key?:Key
        }
     */
    constructor(args: NotificationListenerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: NotificationListenerArgs) {
      return new NotificationListener(args);
    }
  }
  
  //****** TODO NestedScrollView ******
  interface NestedScrollViewArgs {
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
    constructor(args: NestedScrollViewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: NestedScrollViewArgs) {
      return new NestedScrollView(args);
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
  interface OpacityArgs {
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
     * @param args args: 
        {
          key?:Key,
          child?:Widget,
          opacity:number,
          alwaysIncludeSemantics?:boolean
        }
     */
    constructor(args: OpacityArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: OpacityArgs) {
      return new Opacity(args);
    }
  }
  
  //****** Offstage ******
  interface OffstageArgs {
    child?:Widget;
    offstage?:boolean;
    key?:Key;
  }
  export class Offstage extends Widget {
    child?:Widget;
    offstage?:boolean;
    key?:Key;
  
    /**
     * @param args args: 
        {
          child?:.Widget, 
          offstage?:boolean, 
          key?:Key, 
        }
     */
    constructor(args: OffstageArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: OffstageArgs) {
      return new Offstage(args);
    }
  }
  
  //****** OverflowBox ******
  interface OverflowBoxArgs {
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
    constructor(args: OverflowBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: OverflowBoxArgs) {
      return new OverflowBox(args);
    }
  }
  
  //****** OutlineButton ******
  interface OutlineButtonArgs {
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
    constructor(args?: OutlineButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: OutlineButtonArgs) {
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
    static icon(args: OutlineButtonArgs) {
      let v = new OutlineButton();
      v.constructorName = "icon";
      if(args!=null && args!=undefined){
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
  //#endregion
  
  //#region ------- P -------
  //****** Padding ******
  interface PaddingArgs {
    child?:Widget;
    padding:EdgeInsets;
    key?:Key;
  }
  export class Padding extends Widget {
    child?:Widget;
    padding?:EdgeInsets;
    key?:Key;
  
    /**
     * @param args args: 
        {
          child?:Widget, 
          padding?:EdgeInsets, 
          key?:Key
        }
     */
    constructor(args: PaddingArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PaddingArgs) {
      return new Padding(args);
    }
  }
  
  //****** PhysicalModel ******
  interface PhysicalModelArgs {
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
    constructor(args: PhysicalModelArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PhysicalModelArgs) {
      return new PhysicalModel(args);
    }
  }
  
  //****** Positioned ******
  interface PositionedArgs {
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
    constructor(args?: PositionedArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PositionedArgs) {
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
    static fromRect (args: PositionedArgs) {
      let v = new Positioned();
      v.constructorName = "fromRect";
      if(args!=null && args!=undefined){
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
    static fill(args: PositionedArgs) {
      var v = new Positioned();
      v.constructorName = "fill";
      if(args!=null && args!=undefined){
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
    static directional(args: PositionedArgs) {
      var v = new Positioned();
      v.constructorName = "directional";
      if(args!=null && args!=undefined){
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
  
  //****** PositionedDirectional ******
  interface PositionedDirectionalArgs {
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
    constructor(args: PositionedDirectionalArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PositionedDirectionalArgs) {
      return new PositionedDirectional(args);
    }
  }
  
  //****** PreferredSize ******
  interface PreferredSizeArgs {
    key?:Key;
    child:Widget;
    preferredSize:Size;
  }
  export class PreferredSize extends Widget {
    key?:Key;
    child?:Widget;
    preferredSize?:Size;
    
    /**
     * @param args args: 
        {
          child?:Widget, 
          preferredSize?:Size, 
          key?:Key
        }
     */
    constructor(args:PreferredSizeArgs){
      super();
      if(args!=null && args!=undefined){
        this.key =  args.key;
        this.child =  args.child;
        this.preferredSize =  args.preferredSize;
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
    static new (args:PreferredSizeArgs) {
      return new PreferredSize(args);
    }
  }
  
  //****** TODO PreferredSizeWidget ******
  export class PreferredSizeWidget extends Widget {
    static new() {
      return new PreferredSizeWidget();
    }
  }
  
  //****** Placeholder ******
  interface PlaceholderArgs {
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
     * @param args args: 
        {
          color?:Color, 
          strokeWidth?:number, 
          fallbackWidth?:number, 
          fallbackHeight?:number, 
          key?:Key,
        }
     */
    constructor(args: PlaceholderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PlaceholderArgs) {
      return new Placeholder(args);
    }
  }
  
  //****** TODO PopupMenuButton ******
  interface PopupMenuButtonArgs {
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
    constructor(args: PopupMenuButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PopupMenuButtonArgs) {
      return new PopupMenuButton(args);
    }
  }
  
  //****** TODO PopupMenuItem ******
  interface PopupMenuItemArgs {
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
     * @param args args: 
        {
          child?:Widget, 
          value?:any, 
          enabled?:boolean, 
          height?:number, 
          key?:Key
        }
     */
    constructor(args: PopupMenuItemArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: PopupMenuItemArgs) {
      return new PopupMenuItem(args);
    }
  }
  //#endregion
  
  //#region ------- R -------
  //****** Row ******
  interface RowArgs {
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
    constructor(args: RowArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RowArgs) {
      return new Row(args);
    }
  }
  
  //****** RepaintBoundary ******
  interface RepaintBoundaryArgs {
    key?:Key;
    child?:Widget;
  }
  export class RepaintBoundary extends Widget {
    key?:Key;
    child?:Widget;
    childIndex?:number;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child?:Widget,
        }
     */
    constructor(args?: RepaintBoundaryArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RepaintBoundaryArgs) {
      return new RepaintBoundary(args);
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
  interface RawImageArgs {
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
    constructor(args: RawImageArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RawImageArgs) {
      return new RawImage(args);
    }
  }
  
  //****** RotatedBox ******
  interface RotatedBoxArgs {
    key?:Key;
    quarterTurns:number;
    child?:Widget;
  }
  export class RotatedBox extends Widget {
    key?:Key;
    quarterTurns?:number;
    child?:Widget;
    /**
     * @param args args: 
        {
          key?:Key, 
          quarterTurns:number, 
          child?:Widget, 
        }
     */
    constructor(args: RotatedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RotatedBoxArgs) {
      return new RotatedBox(args);
    }
  }
  
  //****** RaisedButton ******
  interface RaisedButtonArgs {
    child?:Widget;
    onPressed?:VoidCallback;
    onHighlightChanged?:VoidValueChangedBoolean;
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
    onHighlightChanged?:VoidValueChangedBoolean;
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
    constructor(args?: RaisedButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RaisedButtonArgs) {
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
    static icon(args: RaisedButtonArgs) {
      let v = new RaisedButton();
      v.constructorName = "icon";
      if(args!=null && args!=undefined){
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
  
  //****** TODO Radio ******
  interface RadioArgs {
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
    constructor(args: RadioArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RadioArgs) {
      return new Radio(args);
    }
  }
  
  //****** RawMaterialButton ******
  interface RawMaterialButtonArgs {
    key?:Key;  
    onPressed:VoidCallback;
    onLongPress?:VoidCallback;
    onHighlightChanged?:VoidValueChangedBoolean;
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
    onHighlightChanged?:VoidValueChangedBoolean;
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
    constructor(args: RawMaterialButtonArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: RawMaterialButtonArgs) {
      return new RawMaterialButton(args);
    }
  }
  
  //****** RichText ******
  interface RichTextArgs {
    key?:Key;
    text:Widget;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:Overflow;
    textScaleFactor?:number;
    maxLines?:number;
    textWidthBasis?:TextWidthBasis;
    
  }
  export class RichText extends Widget {
    text?:TextSpan;
    textAlign?:TextAlign;
    textDirection?:TextDirection;
    softWrap?:boolean;
    overflow?:Overflow;
    textScaleFactor?:number;
    maxLines?:number;
    key?:Key;
    textWidthBasis?:TextWidthBasis;
  
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
    constructor(args: RichTextArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: RichTextArgs) {
      return new RichText(args);
    }
  }
  //#endregion
  
  //#region ------- S -------
  
  //****** Spacer ******
  interface SpacerArgs {
    flex?:number;
    key?:Key;
  }
  export class Spacer extends Widget {
    key?:Key;
    flex?:number;
    /**
     * @param args args: 
      {
        key?:Key,
        flex?:number
      }
     */
    constructor(args: SpacerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SpacerArgs) {
      return new Spacer(args);
    }
  
  }
  
  //****** Semantics ******
  interface SemanticsArgs {
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
    constructor(args: SemanticsArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SemanticsArgs) {
      return new Semantics(args);
    }
  
  }
  
  //****** SwitchListTile ******
  interface SwitchListTileArgs {
    key?:Key;
    value:boolean;
    onChanged:VoidValueChangedBoolean;
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
    onChanged?:VoidValueChangedBoolean;
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
    constructor(args: SwitchListTileArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SwitchListTileArgs) {
      return new SwitchListTile(args);
    }
  
  }
  
  //****** Slider ******
  interface SliderArgs {
    key?:Key;
    value?:number;
    onChanged?:VoidValueChangedNumber;
    onChangeStart?:VoidValueChangedNumber;
    onChangeEnd?:VoidValueChangedNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:VoidValueChangedNumber;
    autofocus?:boolean;  
  }
  export class Slider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:VoidValueChangedNumber;
    onChangeStart?:VoidValueChangedNumber;
    onChangeEnd?:VoidValueChangedNumber;
    min?:number;
    max?:number;
    divisions?:number;
    label?:string;
    activeColor?:Color;
    inactiveColor?:Color;
    semanticFormatterCallback?:VoidValueChangedNumber;
    autofocus?:boolean;  
  
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
    constructor(args: SliderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliderArgs) {
      return new Slider(args);
    }
  
  }
  
  //****** SizedBox ******
  interface SizedBoxArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        width?:number, 
        height?:number, 
      }
     */
    constructor(args?: SizedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SizedBoxArgs) {
      return new SizedBox(args);
    }
  
    /**
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
      }
     */
    static expand(args: SizedBoxArgs) {
      var v = new SizedBox();
      v.constructorName = "expand";
      if(args!=null && args!=undefined){
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
    static fromSize(args: SizedBoxArgs) {
      var v = new SizedBox();
      v.constructorName = "fromSize";
      if(args!=null && args!=undefined){
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
    static shrink(args: SizedBoxArgs) {
      var v = new SizedBox();
      v.constructorName = "shrink";
      if(args!=null && args!=undefined){
        v.key = args.key;
        v.child = args.child;
      }
      return v;
    }
  }
  
  //****** SizedOverflowBox ******
  interface SizedOverflowBoxArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        alignment?:Alignment, 
        size:Size, 
      }
     */
    constructor(args: SizedOverflowBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SizedOverflowBoxArgs) {
      return new SizedOverflowBox(args);
    }
  }
  
  //****** Stack ******
  interface StackArgs {
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
    constructor(args: StackArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: StackArgs) {
      return new Stack(args);
    }
  }
  
  //****** SliverAppBar ******
  interface SliverAppBarArgs {
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
    constructor(args: SliverAppBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverAppBarArgs) {
      return new SliverAppBar(args);
    }
  }
  
  //****** SliverPadding ******
  interface SliverPaddingArgs {
    key?:Key;
    sliver?:Widget;
    padding:EdgeInsets;
  }
  export class SliverPadding extends Widget {
    sliver?:Widget;
    padding?:EdgeInsets;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        sliver?:Widget, 
        padding:EdgeInsets, 
      }
     */
    constructor(args: SliverPaddingArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverPaddingArgs) {
      return new SliverPadding(args);
    }
  }
  
  //****** TODO SliverGrid ******
  interface SliverGridArgs {
    delegate?:any;
    gridDelegate?:any;
    key?:Key;
  }
  export class SliverGrid extends Widget {
    delegate?:any;
    gridDelegate?:any;
    key?:Key;
  
    /**
     * @param args args: 
      {
        delegate?:any, 
        gridDelegate?:any, 
        key?:Key,
      }
     */
    constructor(args: SliverGridArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverGridArgs) {
      return new SliverGrid(args);
    }
  }
  
  //****** TODO SliverGridDelegateWithMaxCrossAxisExtent ******
  interface SliverGridDelegateWithMaxCrossAxisExtentArgs {
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
     * @param args args: 
      {
        maxCrossAxisExtent?:number, 
        mainAxisSpacing?:number, 
        crossAxisSpacing?:number, 
        childAspectRatio?:number, 
      }
     */
    constructor(args: SliverGridDelegateWithMaxCrossAxisExtentArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverGridDelegateWithMaxCrossAxisExtentArgs) {
      return new SliverGridDelegateWithMaxCrossAxisExtent(args);
    }
  }
  
  //****** TODO SliverChildListDelegate ******
  interface SliverChildListDelegateArgs {
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
     * @param args args: 
      {
        children?:Array<Widget>, 
        addAutomaticKeepAlives?:boolean, 
        addRepaintBoundaries?:boolean, 
        addSemanticIndexes?:boolean, 
        semanticIndexOffset?:number, 
      }
     */
    constructor(args: SliverChildListDelegateArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverChildListDelegateArgs) {
      return new SliverChildListDelegate(args);
    }
  }
  
  //****** TODO SliverChildBuilderDelegate ******
  interface SliverChildBuilderDelegateArgs {
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
    constructor(args: SliverChildBuilderDelegateArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverChildBuilderDelegateArgs) {
      return new SliverChildBuilderDelegate(args);
    }
  }
  
  //****** TODO SliverList ******
  interface SliverListArgs {
    delegate?:any;
    key?:Key;
  }
  export class SliverList extends Widget {
    delegate?:any;
    key?:Key;
  
    /**
     * @param args args: 
      {
        delegate?:any,
        key?:Key
      }
     */
    constructor(args: SliverListArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverListArgs) {
      return new SliverList(args);
    }
  }
  
  //****** TODO SliverOverlapInjector ******
  interface SliverOverlapInjectorArgs {
    key?:Key;
    child?:Widget;
    handle?:any;
  }
  export class SliverOverlapInjector extends Widget {
    child?:Widget;
    handle?:any;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        handle?:any, 
      }
     */
    constructor(args: SliverOverlapInjectorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverOverlapInjectorArgs) {
      return new SliverOverlapInjector(args);
    }
  }
  
  //****** TODO SliverFixedExtentList ******
  interface SliverFixedExtentListArgs {
    key?:Key;
    delegate?:any;
    itemExtent?:number;
  }
  export class SliverFixedExtentList extends Widget {
    delegate?:any;
    itemExtent?:number;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        delegate?:any, 
        itemExtent?:number, 
      }
     */
    constructor(args: SliverFixedExtentListArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverFixedExtentListArgs) {
      return new SliverFixedExtentList(args);
    }
  }
  
  //****** TODO SliverOverlapAbsorber ******
  interface SliverOverlapAbsorberArgs {
    key?:Key;
    child?:Widget;
    handle?:any;
  }
  export class SliverOverlapAbsorber extends Widget {
    child?:Widget;
    handle?:any;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        handle?:any, 
      }
     */
    constructor(args: SliverOverlapAbsorberArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverOverlapAbsorberArgs) {
      return new SliverOverlapAbsorber(args);
    }
  }
  
  //****** SingleChildScrollView ******
  interface SingleChildScrollViewArgs {
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
    constructor(args: SingleChildScrollViewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SingleChildScrollViewArgs) {
        return new SingleChildScrollView(args);
    }
  }
  
  //****** SliverToBoxAdapter ******
  interface SliverToBoxAdapterArgs {
    child?:Widget;
    key?:Key;
  }
  export class SliverToBoxAdapter extends Widget {
    child?:Widget;
    key?:Key;
  
    /**
     * @param args args: 
      {
        child?:Widget,
        key?:Key
      }
     */
    constructor(args: SliverToBoxAdapterArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverToBoxAdapterArgs) {
      return new SliverToBoxAdapter(args);
    }
  }
  
  //****** TODO Scaffold ******
  interface ScaffoldArgs {
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
    primary?:boolean;
    
  }
  export class Scaffold extends Widget {
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
    primary?:boolean;
    key?:Key;
  
    //FIXME,github mergegithub merge
    static of(context:any) {
      return {
        showSnackBar: function (snackBar:any) {
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
    constructor(args: ScaffoldArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: ScaffoldArgs){
      return new Scaffold(args);
    }
  }
  
  //****** TODO Scaffold ******
  export class ScaffoldState extends DartClass {
    static new() {
      return new ScaffoldState();
    }
  }
  
  //****** SafeArea ******
  interface SafeAreaArgs {
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
    constructor(args: SafeAreaArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SafeAreaArgs) {
      return new SafeArea(args);
    }
  }
  
  //****** SliverSafeArea ******
  interface SliverSafeAreaArgs {
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
    constructor(args: SliverSafeAreaArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverSafeAreaArgs) {
      return new SliverSafeArea(args);
    }
  }
  
  //****** Scrollbar ******
  interface ScrollbarArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child:Widget, 
        controller?:ScrollController, 
        isAlwaysShown?:boolean,   
      }
     */
    constructor(args: ScrollbarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new (args: ScrollbarArgs) {
      return new Scrollbar(args);
    }
  }
  
  //****** SnackBar ******
  interface SnackBarArgs {
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
    constructor(args: SnackBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SnackBarArgs) {
      return new SnackBar(args);
    }
  }
  
  //****** TODO SnackBarAction ******
  interface SnackBarActionArgs {
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
     * @param args args: 
      {
        key?:Widget, 
        lable?:string, 
        onPressed?:VoidCallback, 
        disabledTextColor?:Color, 
        textColor?:Color, 
      }
     */
    constructor(args: SnackBarActionArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SnackBarActionArgs) {
      return new SnackBarAction(args);
    }
  }
  
  //****** SliverVisibility ******
  interface SliverVisibilityArgs {
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
    constructor(args: SliverVisibilityArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: SliverVisibilityArgs) {
      return new SliverVisibility(args);
    }
  }
  
  
  //#endregion
  
  //#region ------- T -------
  //****** TableRow ******
  interface TableRowArgs {
    key?:Key;
    children?:Array<Widget>;
    decoration?:BoxDecoration;
  }
  export class TableRow extends Widget {
    children?:Array<Widget>;
    decoration?:BoxDecoration;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        children?:Array<Widget>, 
        decoration?:BoxDecoration, 
      }
     */
    constructor(args: TableRowArgs){
      super();
      if(args!=null && args!=undefined){
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
     static new(args: TableRowArgs) {
      return new TableRow(args);
    }
  }
  
  //****** TableCell ******
  interface TableCellArgs {
    key?:Key;
    child?:Widget;
    verticalAlignment?:TableCellVerticalAlignment;
  }
  export class TableCell extends Widget {
    child?:Widget;
    verticalAlignment?:TableCellVerticalAlignment;
    key?:Key;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        verticalAlignment?:TableCellVerticalAlignment, 
      }
     */
    constructor(args: TableCellArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TableCellArgs) {
      return new TableCell(args);
    }
  }
  
  //****** Transform ******
  interface TransformNewArgs {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transform:Matrix4;
    transformHitTests?:boolean;
  }
  interface TransformRotateArgs {
    key?:Key;
    child?:Widget;
    alignment?:Alignment;
    origin?:Offset;
    transformHitTests?:boolean;
    angle:number;
  }
  interface TransformTranslateArgs {
    key?:Key;
    child?:Widget;
    offset:Offset;
    transformHitTests?:boolean;
  }
  interface TransformScaleArgs {
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
    constructor(args?: TransformNewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TransformNewArgs) {
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
    static rotate(args: TransformRotateArgs) {
      var v = new Transform();
      v.constructorName = "rotate";
      if(args!=null && args!=undefined){
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
    static translate(args: TransformTranslateArgs) {
      var v = new Transform();
      v.constructorName = "translate";
      if(args!=null && args!=undefined){
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
    static scale(args: TransformScaleArgs) {
      var v = new Transform();
      v.constructorName = "scale";
      if(args!=null && args!=undefined){
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
  
  //****** Tooltip ******
  interface TooltipArgs {
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
    constructor(args: TooltipArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TooltipArgs) {
      return new Tooltip(args);
    }
  }
  
  //****** Table ******
  interface TableArgs {
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
    constructor(args: TableArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key;
        this.children = args.children;
        this.columnWidths= args.columnWidths;
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
    static new(args: TableArgs) {
      return new Table(args);
    }
  }
  
  //****** TODO TabBar ******
  interface TabBarArgs {
    key?:Key;
    tabs?:Array<Widget>;
    onTap?:VoidValueChangedNumber;
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
    onTap?:VoidValueChangedNumber;
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
    constructor(args: TabBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TabBarArgs) {
      return new TabBar(args);
    }
  }
  
  //****** Tab ******
  interface TabArgs {
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
     * @param args args: 
      {
        key?:Key, 
        child?:Widget, 
        text?:string, 
        icon?:Widget, 
        iconMargin?:EdgeInsets,
      }
     */
    constructor(args: TabArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TabArgs) {
      return new Tab(args);
    }
  }
  
  //****** TabBarView ******
  interface TabBarViewArgs {
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
     * @param args args:
      {
        key?:Key, 
        children?:Array<Widget>, 
        controller?:TabController, 
        physics?:ScrollPhysics, 
        dragStartBehavior?:DragStartBehavior,      
      }
     */
    constructor(args: TabBarViewArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TabBarViewArgs) {
      return new TabBarView(args);
    }
  }
  
  //****** TabPageSelectorIndicator ******
  interface TabPageSelectorIndicatorArgs {
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
     * @param args args: 
      {
        key?:Key, 
        backgroundColor?:Color, 
        borderColor?:Color, 
        size?:number,
      }
     */
    constructor(args: TabPageSelectorIndicatorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TabPageSelectorIndicatorArgs) {
      return new TabPageSelectorIndicator(args);
    }
  }
  
  //****** TODO TabPageSelector ******
  interface TabPageSelectorArgs {
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
     * @param args args: 
      {
        key?:Key,
        color?:Color,
        selectedColor?:Color,
        indicatorSize?:number,
        controller?:TabController,
      }
     */
    constructor(args: TabPageSelectorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TabPageSelectorArgs) {
      return new TabPageSelector(args);
    }
  }
  
  //****** Title ******
  interface TitleArgs {
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
     * @param args args: 
      {
        key?:Key,
        child?:Widget,
        title?:string,
        color?:Color
      }
     */
    constructor(args: TitleArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TitleArgs) {
      return new Title(args);
    }
  }
  
  //****** Text ******
  interface TextArgs {
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
    constructor(data:string | TextSpan, args?: TextArgs){
      super();
      this.data = data;
      if(args!=null && args!=undefined){
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
    static new(data:string, args?: TextArgs) {
      return new Text(data,args);
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
    static rich(data:TextSpan, args?: TextArgs) {
      var v = new Text(data,args);
      v.constructorName= "rich";
      v.data = data;
      return v;
    }
  }
  
  //****** TextSpan ******
  //TODO:recognizer => GestureRecognizer
  interface TextSpanArgs {
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
     * @param args args: 
      {
        children?:Array<Widget>, 
        style?:TextStyle, 
        text?:string, 
        recognizer?:any, 
        semanticsLabel?:string,
      }
     */
    constructor(args: TextSpanArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TextSpanArgs) {
      return new TextSpan(args);
    }
  }
  
  
  //****** Texture ******
  interface TextureArgs {
    key?:Key;
    textureId?:number;
    filterQuality?:FilterQuality;
  }
  export class Texture extends Widget {
    key?:Key;
    textureId?:number;
    filterQuality?:FilterQuality;
  
    /**
     * @param args args: 
      {
        key?:Key, 
        textureId?:number, 
        filterQuality?:FilterQuality, 
      }
     */
    constructor(args: TextureArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TextureArgs) {
      return new Texture(args);
    }
  }
  
  //****** TODO TextFormField ******
  interface TextFormFieldArgs {
    key?:Key;
    controller?:TextEditingController;
    initialValue?:string;
    focusNode?:any;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textCapitalization?:TextCapitalization;
    textInputAction?:TextInputAction;
    style?:TextStyle;
    textDirection?:TextDirection;
    textAlign?:TextAlign;
    autofocus?:boolean;
    obscureText?:boolean;
    autocorrect?:boolean;
    autovalidate?:boolean;
    maxLengthEnforced?:boolean;
    maxLines?:number;
    maxLength?:number;
    onEditingComplete?:VoidCallback;
    onFieldSubmitted?:VoidValueChangedString;
    onSaved?:VoidValueChangedString;
    validator?:VoidValueChangedString;
    inputFormatters?:any;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    enableInteractiveSelection?:boolean;
    buildCounter?:any;
    
  }
  export class TextFormField extends Widget {
    controller?:TextEditingController;
    initialValue?:string;
    focusNode?:any;
    decoration?:InputDecoration;
    keyboardType?:TextInputType;
    textCapitalization?:TextCapitalization;
    textInputAction?:TextInputAction;
    style?:TextStyle;
    textDirection?:TextDirection;
    textAlign?:TextAlign;
    autofocus?:boolean;
    obscureText?:boolean;
    autocorrect?:boolean;
    autovalidate?:boolean;
    maxLengthEnforced?:boolean;
    maxLines?:number;
    maxLength?:number;
    onEditingComplete?:VoidCallback;
    onFieldSubmitted?:VoidValueChangedString;
    onSaved?:VoidValueChangedString;
    validator?:VoidValueChangedString;
    inputFormatters?:any;
    enabled?:boolean;
    cursorWidth?:number;
    cursorRadius?:Radius;
    cursorColor?:Color;
    keyboardAppearance?:Brightness;
    scrollPadding?:EdgeInsets;
    enableInteractiveSelection?:boolean;
    buildCounter?:any;
    key?:Key;
  
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
    constructor(args: TextFormFieldArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: TextFormFieldArgs) {
      return new TextFormField(args);
    }
  }
  //#endregion
  
  //#region ------- U -------
  //****** UnconstrainedBox ******
  interface UnconstrainedBoxArgs {
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
    constructor(args: UnconstrainedBoxArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: UnconstrainedBoxArgs) {
      return new UnconstrainedBox(args);
    }
  
  }
  //#endregion
  
  //#region ------- V -------
  //****** VerticalDivider ******
  interface VerticalDividerArgs {
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
    constructor(args: VerticalDividerArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: VerticalDividerArgs) {
      return new VerticalDivider(args);
    }
  }
  
  //****** Visibility ******
  interface VisibilityArgs {
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
    constructor(args: VisibilityArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: VisibilityArgs) {
      return new Visibility(args);
    }
  }
  
  //#endregion
  
  //#region ------- W -------
  //****** Wrap ******
  interface WrapArgs {
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
    constructor(args: WrapArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: WrapArgs) {
      return new Wrap(args);
    }
  }
  
  //****** WillPopScope ******
  interface WillPopScopeArgs {
    child:Widget;
    onWillPop:VoidCallback;
  
    key?:Key;
  }
  export class WillPopScope extends Widget {
    key?:Key;
    child?:Widget;
    onWillPop?:VoidCallback;
  
    /**
     * @param args args: 
      {
        child:Widget, 
        onWillPop:VoidCallback, 
  
        key?:Key, 
      }
     */
    constructor(args: WillPopScopeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: WillPopScopeArgs) {
      return new WillPopScope(args);
    }
  }
  
  //****** WidgetSpan ******
  interface WidgetSpanArgs {
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
     * @param args args: 
      {
        child:Widget, 
  
        alignment?:PlaceholderAlignment, 
        baseline?:TextBaseline, 
        style?:TextStyle, 
      }
     */
  
     constructor(args: WidgetSpanArgs){
       super();
       if(args!=null && args!=undefined){
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
    static new(args: WidgetSpanArgs) {
      return new WidgetSpan(args);
    }
  
  }
  
  //#endregion
  
  
//#endregion


//#region ******* Cupertino widgets ********
//-------------- A -----------------
//****** CupertinoActivityIndicator ******
interface CupertinoActivityIndicatorArgs {
    key?:Key;
    animating?:boolean;
    radius?:number;
  }
  export class CupertinoActivityIndicator extends Widget {
    key?:Key;
    animating?:boolean;
    radius?:number;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          animating?:boolean, 
          radius?:number, 
        }
     */
  
    constructor(args: CupertinoActivityIndicatorArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoActivityIndicatorArgs) {
      return new CupertinoActivityIndicator(args);
    }
  }
  
  //-------------- B -----------------
  //****** CupertinoButton ******
  interface CupertinoButtonArgs {
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
    constructor(args: CupertinoButtonArgs){
      super();
  
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoButtonArgs) {
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
    static filled(args: CupertinoButtonArgs) {
      var v = new CupertinoButton(args);
      v.constructorName = "filled";
      return v;
    }
  }
  
  //-------------- D -----------------
  
  
  //-------------- F -----------------
  
  
  //-------------- N -----------------
  //****** CupertinoNavigationBar ******
  interface CupertinoNavigationBarArgs {
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
    constructor(args: CupertinoNavigationBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoNavigationBarArgs) {
      return new CupertinoNavigationBar(args);
    }
  }
  
  //****** CupertinoNavigationBarBackButton ******
  interface CupertinoNavigationBarBackButtonArgs {
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
     * @param args args: 
        {
          key?:Key, 
          color?:Color, 
          previousPageTitle?:string, 
          onPressed?:VoidCallback, 
        }
     */
    constructor(args:CupertinoNavigationBarBackButtonArgs){
      super();
      if(args!=null && args!=undefined){
        this.key = args.key;
        this.color = args.color;
        this.previousPageTitle= args.previousPageTitle;
        this.onPressed =args.onPressed;
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
    static new(args:CupertinoNavigationBarBackButtonArgs) {
      return new CupertinoNavigationBarBackButton(args);
    }
  }
  
  //-------------- P -----------------
  
  //-------------- S -----------------
  //****** CupertinoSlider ******
  interface CupertinoSliderArgs {
    key?:Key;
    value:number;
    onChanged:VoidValueChangedNumber;
    onChangeStart?:VoidValueChangedNumber;
    onChangeEnd?:VoidValueChangedNumber;
    min?:number;
    max?:number;
    divisions?:number;
    activeColor?:Color;
    thumbColor?:Color;
  }
  export class CupertinoSlider extends Widget {
    key?:Key;
    value?:number;
    onChanged?:VoidValueChangedNumber;
    onChangeStart?:VoidValueChangedNumber;
    onChangeEnd?:VoidValueChangedNumber;
    min?:number;
    max?:number;
    divisions?:number;
    activeColor?:Color;
    thumbColor?:Color;
  
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
    constructor(args: CupertinoSliderArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoSliderArgs) {
      return new CupertinoSlider(args);
    }
  }
  
  //****** CupertinoSwitch ******
  interface CupertinoSwitchArgs {
    key?:Key;
    value:boolean;
    onChanged:VoidValueChangedBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  }
  export class CupertinoSwitch extends Widget {
    key?:Key;
    value?:boolean;
    onChanged?:VoidValueChangedBoolean;
    activeColor?:Color;
    trackColor?:Color;
    dragStartBehavior?:DragStartBehavior;
  
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
    constructor(args: CupertinoSwitchArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoSwitchArgs) {
      return new CupertinoSwitch(args);
    }
  }
  
  //****** CupertinoScrollbar ******
  interface CupertinoScrollbarArgs {
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
     * @param args args: 
        {
          key?:Key, 
          child:Widget, 
          controller?:ScrollController, 
          isAlwaysShown?:boolean, 
        }
     */
    constructor(args: CupertinoScrollbarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoScrollbarArgs) {
      return new CupertinoScrollbar(args);
    }
  }
  
  //****** CupertinoSliverNavigationBar ******
  interface CupertinoSliverNavigationBarArgs {
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
    constructor(args: CupertinoSliverNavigationBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoSliverNavigationBarArgs) {
      return new CupertinoSliverNavigationBar(args);
    }
  }
  
  //-------------- T -----------------
  //****** CupertinoTabBar ******
  interface CupertinoTabBarArgs {
    key?:Key;
    items:Array<BottomNavigationBarItem>;
    onTap?:VoidValueChangedNumber;
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
    onTap?:VoidValueChangedNumber;
    currentIndex?:number;
    backgroundColor?:Color;
    activeColor?:Color;
    inactiveColor?:Color;
    iconSize?:number;
    border?:Border;
    
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
    constructor(args: CupertinoTabBarArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoTabBarArgs) {
      return new CupertinoTabBar(args);
    }
  }
  //****** CupertinoTabController ******
  interface CupertinoTabControllerArgs {
    initialIndex?:number;
  }
  export class CupertinoTabController extends DartClass {
    initialIndex?:number;
  
    /**
     * @param args args: 
        {
          initialIndex?:number, 
        }
     */
    constructor(args: CupertinoTabControllerArgs){
      super();
      if(args!=null && args!=undefined){
        this.initialIndex = args.initialIndex;
      }
    }
  
    /**
     * @param args args: 
        {
          initialIndex?:number, 
        }
     */
    static new(args: CupertinoTabControllerArgs) {
      return new CupertinoTabController(args);
    }
  }
  
  //****** CupertinoTheme ******
  interface CupertinoThemeArgs {
    key?:Key;
    child:Widget;
    data:CupertinoThemeData;
  }
  export class CupertinoTheme extends Widget {
    key?:Key;
    child?:Widget;
    data?:CupertinoThemeData;
  
    /**
     * @param args args: 
        {
          key?:Key, 
          child:Widget, 
          data:CupertinoThemeData, 
        }
     */
    constructor(args: CupertinoThemeArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoThemeArgs) {
      return new CupertinoTheme(args);
    }
  }
  
  //****** CupertinoTextThemeData ******
  interface CupertinoTextThemeDataArgs {
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
    constructor(args: CupertinoTextThemeDataArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoTextThemeDataArgs) {
      return new CupertinoTextThemeData(args);
    }
  }
  
  //****** CupertinoThemeData ******
  interface CupertinoThemeDataArgs {
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
    constructor(args: CupertinoThemeDataArgs){
      super();
      if(args!=null && args!=undefined){
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
    static new(args: CupertinoThemeDataArgs) {
      return new CupertinoThemeData(args);
    }
  }
  
  //#endregion

//#region ******** Base Api ********

//****** LoadingApi ******
interface LoadingApiInfoArgs {
    info:string;
    duration?:Duration;
    alignment?:Alignment;
    animation?:boolean;
}
interface LoadingApiProgressArgs {
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
        var argument = new JSCallArgs({
            mirrorID:this.mirrorID,
            className:"LoadingApi",
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new LoadingApi();
        }
        return this.instance;
      }

    invokeMirrorObjWithCallback(argument:JSCallArgs){
        let promiseResult = new Promise(function (resolve:any) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
                if (value != null) {
                    resolve(value);

                } else {
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
    static showSuccess(args:LoadingApiInfoArgs){
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
    static showError(args:LoadingApiInfoArgs){
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
    static showInfo(args:LoadingApiInfoArgs){
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
    static showToast(args:LoadingApiInfoArgs){
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
    static show(args:LoadingApiInfoArgs){
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
    static showProgress(args:LoadingApiProgressArgs){
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
    static dismiss(args?:LoadingApiInfoArgs){
        LoadingApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: LoadingApi.getInstance().mirrorID,
            className: "LoadingApi",
            funcName: "dismiss",
            args: args,
        }));
    }
}

//****** SpApi ******
interface SpApiGetArgs {
    key:string;
    defaultValue?:string|boolean|number;
}
interface SpApiSetArgs {
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
        var argument = new JSCallArgs({
            mirrorID:this.mirrorID,
            className:"SpApi",
        });
        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new SpApi();
        }
        return this.instance;
      }

      invokeMirrorObjWithCallback(argument:JSCallArgs){
        let promiseResult = new Promise(function (resolve:any) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value:any) {
                if (value != null) {
                    resolve(value);

                } else {
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
    static getBool(args:SpApiGetArgs) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getBool",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        defaultValue?:number;
      }
     */
    static getInt(args:SpApiGetArgs) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getInt",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        defaultValue?:double;
      }
     */
    static getDouble(args:SpApiGetArgs) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getDouble",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        defaultValue?:string;
      }
     */
    static getString(args:SpApiGetArgs) {
        return SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getString",
            args: args,
        }));
    };

    static clear() {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "clear",
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
      }
     */
    static remove(args:SpApiGetArgs) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "getBool",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        value:boolean;
      }
     */
    static setBool(args:SpApiSetArgs) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setBool",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        value:number;
      }
     */
    static setDouble(args:SpApiSetArgs) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setDouble",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        value:number;
      }
     */
    static setInt(args:SpApiSetArgs) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setInt",
            args: args,
        }));
    };

    /**
     * @param args args: 
      {
        key:string;
        value:string;
      }
     */
    static setString(args:SpApiSetArgs) {
        SpApi.getInstance().invokeMirrorObjWithCallback(JSCallArgs.new({
            mirrorID: SpApi.getInstance().mirrorID,
            className: "SpApi",
            funcName: "setString",
            args: args,
        }));
    };
}

//#endregion