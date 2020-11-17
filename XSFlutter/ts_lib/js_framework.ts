
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */

// @ts-ignore：dart_sdk
import dart_sdk = require("dart_sdk"); 
const core = dart_sdk.core;

// @ts-ignore：dart_sdk
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

  static initXSJSWidgetData(obj:JSBaseWidget) {
    //继承自JSBaseWidget 自定义控件。
  
    if (obj.widgetID == null || obj.widgetID == undefined || obj.widgetID == '') {
      obj.widgetID = JSWidgetMgr.getInstance().generateWidgetID();
    }
  
    obj.helper = new XSJSWidgetHelper(obj);
  
    //构建系列号，每build一次加1
    obj.buildWidgetDataSeq = "";
  
    // The Widget Pages that pushed this Widget ID
    // 把当前widget（this） push 出来的widget ID
    // 序列化到JSON里
    obj.navPushingWidgetID = "";
  
    //不添加进json的控制变量
    //创建自己的widget，为null自己是root
    obj.parentWidget = undefined;
  
    // The Widget Pages that pushed this Widget
    // 把当前widget（this） push 出来的widget
    obj.navPushingWidget = undefined;
  
    //The widget that was pushed by this widget
    //由自己this push的widget page
    obj.navPushedWidgets = {};
    //
    obj.buildContext = undefined;
    obj.buildingWidgetTree = null;
    obj.currentWidgetTree = null;
    obj.preWidgetTree = null;
    obj.buildWidgetDataSeqFeed = 0;
    obj.buildSeq2WTreeMap = {};
  
    ///性能分析模式 
    ///打开性能分析模式，widget.enableProfile = true
    ///可以重载onBuildEnd，使用getProfileText获得各个阶段耗时
    obj.enableProfile = false;
    obj.profileInfo = {};
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
export class JSFluterWidget extends JSBaseClass {

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


export class JSBaseWidget extends core.Object {
  name:string;
  key?:any;
  widgetName?:string;
  className?:string;
  widgetID?:string;
  buildWidgetDataSeq?:string;
  currentWidgetTree?:any;
  buildingWidgetTree?:any;
  preWidgetTree?:any;
  enableProfile?:boolean = false;
  profileInfo?:any;
  helper?:XSJSWidgetHelper;
  navPushingWidgetID?:string;
  parentWidget?:JSBaseWidget;
  navPushingWidget?:any;
  navPushedWidgets?:any;
  buildContext?:JSBuildContext;
  buildWidgetDataSeqFeed?:number;
  buildSeq2WTreeMap?:any;
  

  constructor(name:string, key?:any) {
    super();

    this.name = name;
    this.key = key;

    //JSFramework.initXSJSWidgetData(this);
  }

  widgetLogInfoStr() {
    let log = "WidgetInfo: Name: " + this.widgetName + " Class: " + this.className + " WID: " + this.widgetID + " buildseq: " + this.buildWidgetDataSeq +
      " currentTreeSeq: " + this.getWidgetTreeBuildSeq(this.currentWidgetTree) + " buildingseq: " + this.getWidgetTreeBuildSeq(this.buildingWidgetTree) +
      " preTreeSeq: " + this.getWidgetTreeBuildSeq(this.preWidgetTree);
    return log;
  }

  getWidgetTreeBuildSeq(widgetTree:any) {

    if (widgetTree == null) {
      return "0";
    }

    return widgetTree.buildWidgetDataSeq;

  }

  onBuildEnd(args:any) { }

  ///性能分析模式 
  ///打开性能分析模式，widget.enableProfile = true
  ///可以重载onBuildEnd，使用getProfileText获得各个阶段耗时
  setProfileInfo(profileInfo:any) {

    if (this.enableProfile == true && profileInfo) {
      this.profileInfo["startDecodeData"] = profileInfo["startDecodeData"];
      this.profileInfo["endDecodeData"] = profileInfo["endDecodeData"];
      this.profileInfo["buildEnd"] = profileInfo["buildEnd"];
    }
  }

  getProfileText() {
    let profileInfo = this.profileInfo;
    let startEncodeData = profileInfo['startEncodeData'];
    let startTransferData = profileInfo['startTransferData'];
    let startDecodeData = profileInfo['startDecodeData'];
    let endDecodeData = profileInfo['endDecodeData'];
    let buildEnd = profileInfo['buildEnd'];
    let transferDataLen = profileInfo['transferDataLen'];

    let buildDataCost = startTransferData - startEncodeData;
    let transferCost = startDecodeData - startTransferData;
    let decodeDataCost = endDecodeData - startDecodeData;
    let paintCost = buildEnd - endDecodeData;

    let mxcost = endDecodeData - startEncodeData;
    let flutterBuild = endDecodeData - startEncodeData;

    let profileText = '总耗时: XSFlutterTotal: ' + mxcost + 'ms FlutterBuild: ' + paintCost + 'ms 详情:\n' +
      '[JS]buildJSWidgetTree2Json: ' + buildDataCost + "ms \n" +
      '[JS->Native->Dart]transfer(' + (transferDataLen * 2.0 / 1024.0).toFixed(2) + 'Kb): ' + transferCost + "ms\n" +
      '[Dart]DecodeJson: ' + decodeDataCost + "ms\n" +
      '[Dart]flutterBuild: ' + paintCost + "ms";
    return profileText;
  }

  
}

export class JSStatefulWidget extends JSBaseWidget {
  constructor(name:string, key?:any) {
    super(name, { key: key });

    this.className = "JSStatefulWidget";
    JSFramework.initXSJSWidgetData(this);
  }

  //subclass override
  createState() { }
}


//在JS层，要封装控件，如不需要改变UI内容，使用无状态的JSStatelessWidget
export class JSStatelessWidget extends JSBaseWidget {

  constructor(name:string, key?:any) {
    super(name, { key: key });

    this.className = "JSStatelessWidget";

    JSFramework.initXSJSWidgetData(this);
  }

  //subclass override
  build(buildContext:JSBuildContext) {
    
  }
}

export class XSJSWidgetHelper {
  widget:any;
  constructor(widget:any) {
    this.widget = widget;
  }

  setState(fun:any) {
    this.widget.state.setState(fun);
  }

  //util api
  //building

  static buildWidgetData(jsWidget:any) {

    JSLog.log("buildWidgetData ::" + jsWidget.widgetLogInfoStr());

    let widgetDataStr = JSON.stringify(jsWidget, function (key, value) {

      let newValue = value;

      if (value instanceof JSStatefulWidget || value instanceof JSStatelessWidget) {
        // 解决widget生成时不调用构造方法的问题
        if (value.helper == null) {
          value.className = value instanceof JSStatefulWidget ? "JSStatefulWidget" : "JSStatelessWidget";

          JSFramework.initXSJSWidgetData(value);
        }

        if (value != jsWidget) {
          value.buildContext = JSBuildContext.inheritBuildContext(value, jsWidget.buildContext);
          //TODO:FIXME addChildWidget逻辑，这里局部刷新，会有两份Widget数据，但功能正常
          //Widget 的子Widget 没有层级关系，平铺在jsWidget
          jsWidget.helper.addChildWidget(value);
        }

        //如果是XSJSWidget类需要调用一下build，返回build内容
        newValue = value.helper.buildWidgetTree();
      }


      // 遍历处理Symbol的key转成String放入Json中
      if (newValue && typeof newValue === 'object') {
        var objectSymbols = Object.getOwnPropertySymbols(newValue);
        if (objectSymbols.length > 0) {
          var replacement = {};

          var len = objectSymbols.length;
          for (var i = 0; i < len; ++i) {
            var key = objectSymbols[i].description;
            var value = newValue[objectSymbols[i]];
            replacement[key] = value;
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

    let tempWidgetTree = JSWidgetTree.new(
      this.widget.buildWidgetDataSeq
    );
    tempWidgetTree.ownerWidget = this.widget;

    this.widget.buildingWidgetTree = tempWidgetTree;
    JSLog.log("JSWidget buildWidgetTree ::" + this.widget.widgetLogInfoStr());

    let tempWidgetTreeObjMap;
    if (this.widget instanceof JSStatelessWidget) {
      tempWidgetTreeObjMap = this.widget.build(this.widget.buildContext);
    } else if (this.widget instanceof JSStatefulWidget) {
      //必须在Build的时候才创建State
      if (!this.widget.state) {
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
    this.widget.buildSeq2WTreeMap[tempWidgetTree.buildWidgetDataSeq] = tempWidgetTree;

    //json实际包含的字段
    let jsonMap = {
      key: this.widget.key,
      name: this.widget.name,
      className: this.widget.className,
      widgetID: this.widget.widgetID,
      buildWidgetDataSeq: this.widget.buildWidgetDataSeq,
      navPushingWidgetID: this.widget.navPushingWidgetID,
      widgetData: tempWidgetTreeObjMap,
      enableProfile: this.widget.enableProfile
    };

    return jsonMap;
  }

  preBuildJson(widgetTree:any, widgetTreeObjMap:any) {

    //JSLog.log("preBuildJson:" + flutterWidget);
    if (!(widgetTreeObjMap instanceof Object)) {
      return;
    }

    //JSStatefulWidget不处理
    if (widgetTreeObjMap instanceof JSStatefulWidget) {
      return;
    }

    //if (widgetTreeObjMap instanceof FlutterWidget) {
    if (typeof widgetTreeObjMap == "FlutterWidget") {
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
  buildingCreateCallbackID(callback:any) {
    //* XSFlutter beta 0.1.0开始，框架不在帮助上层代码绑定this，开发者需要自己绑定需要的对象 
    //callback = callback.bind(this.widget);
    return this.widget.buildingWidgetTree.createCallbackID(
      callback
    );
  }

  setupAsRootWidget() {

    this.widget.buildingWidgetTree = JSWidgetTree.new("1");
    this.widget.currentWidgetTree = this.widget.buildingWidgetTree;

  }

  addChildWidget(jsWidget:any) {
    jsWidget.parentWidget = this.widget;
    this.widget.buildingWidgetTree.childrenWidget[jsWidget.widgetID] = jsWidget;
  }

  removeChildWidget(jsWidget:any) {
    if (
      this.widget.currentWidgetTree &&
      this.widget.currentWidgetTree.childrenWidget
    ) {
      delete this.widget.currentWidgetTree.childrenWidget[jsWidget.widgetID];
    }
  }

  //js->flutter
  callFlutterRebuild() {

    JSLog.log("callFlutterRebuild ::" + this.widget.widgetLogInfoStr());
    let startEncodeData = (new Date()).valueOf();
    let widgetData = XSJSWidgetHelper.buildWidgetData(this.widget);
    let startTransferData = (new Date()).valueOf();

    if (this.widget.enableProfile) {
      let profileInfo = {};
      profileInfo['startEncodeData'] = startEncodeData;
      profileInfo['startTransferData'] = startTransferData;
      profileInfo['transferDataLen'] = widgetData.length;
      this.widget.profileInfo = profileInfo;
    }


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
      return jsWidget.helper.invokeCallback(buildWidgetDataSeq, callID, args["args"]);
    } else {
      JSLog.error(
        "onEventCallback error: jsWidget == null onEventCallback(args:" + args
      );
    }
  }

  findWidgetWithWidgetID(widgetID:any) {
    if (this.widget.widgetID == widgetID) {
      return this.widget;
    }

    //先在currentTree里找，一般这里能找到
    let widgetTree = this.widget.currentWidgetTree;

    if (widgetTree != null) {
      let w = widgetTree.childrenWidget[widgetID];
      if (w) {
        return w;
      }

      for (let k in widgetTree.childrenWidget) {
        let jsWidget = widgetTree.childrenWidget[k];
        w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
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

      let widgetTree = this.widget.buildSeq2WTreeMap[seq];
      if (widgetTree != null) {
        let w = widgetTree.childrenWidget[widgetID];
        if (w) {
          return w;
        }

        for (let k in widgetTree.childrenWidget) {
          let jsWidget = widgetTree.childrenWidget[k];
          w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
          if (w) {
            return w;
          }
        }
      }
    }

    //查找被自己push的widgets
    for (let k in this.widget.navPushedWidgets) {
      let jsWidget = this.widget.navPushedWidgets[k];
      let w = jsWidget.helper.findWidgetWithWidgetID(widgetID);
      if (w) {
        return w;
      }
    }

    return null;
  }

  invokeCallback(buildWidgetDataSeq:any, callID:any, args:any) {

    JSLog.log("JSWidget invokeCallback ::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq + " callID: " + callID);

    if (this.widget.currentWidgetTree && this.widget.currentWidgetTree.buildWidgetDataSeq != buildWidgetDataSeq) {
      JSLog.error(
        "XSJSWidget:invokeCallback:this.widget.currentWidgetTree.buildWidgetDataSeq(" + this.widget.currentWidgetTree.buildWidgetDataSeq + ")  != buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
        " callID: " +
        callID
      );

      if (this.widget.preWidgetTree && this.widget.preWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
        JSLog.error(
          "XSJSWidget:invokeCallback:this.widget.preWidgetTree.buildWidgetDataSeq(" + this.widget.preWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
          " callID: " +
          callID
        );

      }

      if (this.widget.buildingWidgetTree && this.widget.buildingWidgetTree.buildWidgetDataSeq == buildWidgetDataSeq) {
        JSLog.error(
          "XSJSWidget:invokeCallback:this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
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
      //容错处理
      JSLog.error(
        "XSJSWidget:invokeCallback: 容错搜索所有BuildTree，this.widget.buildingWidgetTree.buildWidgetDataSeq(" + this.widget.buildingWidgetTree.buildWidgetDataSeq + ")  == buildWidgetDataSeq(" + buildWidgetDataSeq + ") " +
        " callID: " +
        callID
      );
      for (let seq in this.widget.buildSeq2WTreeMap) {
        let tree = this.widget.buildSeq2WTreeMap[seq];

        if (tree.findCallback(callID)) {
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
      jsWidget.helper.onFlutterBuildEnd(buildWidgetDataSeq, profileInfo);
    } else {
      JSLog.error("onBuildEnd error: jsWidget == null widgetID: " + widgetID + " buildWidgetDataSeq: " + buildWidgetDataSeq);
    }
  }

  onFlutterBuildEnd(buildWidgetDataSeq:any, profileInfo:any) {

    let tree = this.widget.buildSeq2WTreeMap[buildWidgetDataSeq];

    if (tree != null) {
      this.widget.preWidgetTree = this.widget.currentWidgetTree;
      this.widget.currentWidgetTree = tree;

      JSLog.log("JSWidget onFlutterBuildEnd success::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq);

      this.clearWidgetTree(buildWidgetDataSeq);
    } else {
      JSLog.error("JSWidget onFlutterBuildEnd fail buildSeq2WTreeMap.keys: [" + Object.keys(this.widget.buildSeq2WTreeMap).join("|") + "]::" + this.widget.widgetLogInfoStr() + " buildWidgetDataSeq: " + buildWidgetDataSeq);
    }

    this.widget.setProfileInfo(profileInfo);

    if (this.widget instanceof JSStatelessWidget) {
      this.widget.onBuildEnd();
    } else if (this.widget instanceof JSStatefulWidget) {
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
      //JSLog.debug("JSWidget clearWidgetTree::" + this.widget.widgetLogInfoStr() + " delSeq: " + delSeq);
      delete this.widget.buildSeq2WTreeMap[clearSeqs[i]];
    }

  }

  onDispose(args:any) {
    let widgetID = args["widgetID"];

    let jsWidget = this.findWidgetWithWidgetID(widgetID);

    if (jsWidget != null) {
      jsWidget.helper.onFlutterDispose();

      if (jsWidget.parentWidget) {
        //TODO: FIXME listview 滑动，滑出之后再回来，就不响应了，先不删除，依赖顶层Push页面的pop来释放
        //jsWidget.parentWidget.helper.removeChildWidget(jsWidget);
      }

      if (jsWidget.navPushingWidget) {

        jsWidget.navPushingWidget.helper.removePushingWidget(jsWidget);
      }
    } else {
      JSLog.error("onDispose error: jsWidget == null widgetID " + widgetID);
    }
  }

  onFlutterDispose() {

    JSLog.log("JSWidget onFlutterDispose ::" + this.widget.widgetLogInfoStr());
    //调用子widget disposeWidget
    if (
      this.widget.currentWidgetTree &&
      this.widget.currentWidgetTree.childrenWidget
    ) {
      for (let k in this.widget.currentWidgetTree.childrenWidget) {
        let widget = this.widget.currentWidgetTree.childrenWidget[k];
        if (widget) {
          widget.helper.onFlutterDispose();
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
  navigatorPush(jsWidget:any) {
    // 清空当前widget的navPushedWidgets数据
    for (let i in this.widget.navPushedWidgets) {
      var obj = this.widget.navPushedWidgets[i];
      obj.helper.onFlutterDispose();

      if (obj.parentWidget) {
        obj.parentWidget.helper.removeChildWidget(obj);
      }

      if (obj.navPushingWidget) {
        obj.navPushingWidget.helper.removePushingWidget(obj);
      }
    }

    let startEncodeData = (new Date()).valueOf();
    let widgetData = this.updatePushingWidgetsData(jsWidget);
    let startTransferData = (new Date()).valueOf();

    if (jsWidget.enableProfile) {
      let profileInfo = {};
      profileInfo['startEncodeData'] = startEncodeData;
      profileInfo['startTransferData'] = startTransferData;
      profileInfo['transferDataLen'] = widgetData.length;
      jsWidget.profileInfo = profileInfo;
    }

    //call flutter navigatorPush
    JSFramework.callFlutterWidgetChannel("navigatorPush", widgetData);
  }

  navigatorPop() {

    // TODO:fixme找到最上层的top widget
    let topRootWidget = this.findTopRootWidget();
    let widgetID = topRootWidget.widgetID;
    JSFramework.callFlutterWidgetChannel("navigatorPop", {
      widgetID
    });

    if (this.widget.navPushedWidgets) {
      delete this.widget.navPushedWidgets[widgetID];
    }
  }

  //留意：这个函数命名是不是应该是removePushedWidget
  removePushingWidget(jsWidget:any) {
    if (this.widget.navPushedWidgets) {
      delete this.widget.navPushedWidgets[jsWidget.widgetID];
    }
  }

  updatePushingWidgetsData(jsWidget:any) {

    JSLog.log("updatePushingWidgetsData WidgetName:" + jsWidget.widgetName);
    //那种根节点不是statewidget的页面 比如Theme
    var newJSWidget;
    if (jsWidget.className != "JSStatefulWidget" && jsWidget.className != "JSStatelessWidget") {
      // 特殊处理，用JSStatelessWidget包裹一层
      newJSWidget = new JSStatelessWidget("FakeStatelessWidget");
      newJSWidget.build = function (context) {
        return jsWidget;
      };
    } else {
      newJSWidget = jsWidget;
    }

    //设置push jsWidget的widget
    newJSWidget.navPushingWidget = this.widget;
    newJSWidget.buildContext = JSBuildContext.inheritBuildContext(newJSWidget, this.widget.buildContext);
    newJSWidget.navPushingWidgetID = this.widget.widgetID;
    this.widget.navPushedWidgets[newJSWidget.widgetID] = newJSWidget;
    let widgetData = XSJSWidgetHelper.buildWidgetData(newJSWidget);

    return widgetData;
  }

  //查找根结点
  findTopRootWidget() {
    let rootWidget = this.widget.parentWidget;
    if (rootWidget == null || rootWidget == undefined) {
      return this.widget;
    }

    return rootWidget.helper.findTopRootWidget();
  }
}