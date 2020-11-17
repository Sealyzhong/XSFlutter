"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSWidgetState = exports.JSBaseWidget = exports.JSBaseClass = exports.JSCallArgs = exports.JSWidgetMirrorMgr = exports.JSWidgetMgr = exports.JSWidgetTree = exports.JSBuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.JSLog = exports.JSFramework = void 0;
// @ts-ignore：dart_sdk
const dart_sdk = require("dart_sdk");
const core = dart_sdk.core;
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
//****** 原生日志输出 ******
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
//****** 方法调用 ******
class JSMethodCall {
    encodeJSON() {
        return JSON.stringify({ "funcName": this.name, "args": this.args });
    }
    static new(name, args) {
        var v = new JSMethodCall();
        v.name = name;
        v.args = args;
        JSLog.log("JSMethodCall.new:" + v.encodeJSON());
        return v;
    }
}
exports.JSMethodCall = JSMethodCall;
//****** 全局callbak管理器 ******
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
        var _a;
        let callbackID = this.generateID();
        (_a = this.callbackID2fun) === null || _a === void 0 ? void 0 : _a.set(callbackID, callback);
        return callbackID;
    }
    invokeCallback(callbackID, args) {
        let callback = this.findCallback(callbackID);
        callback(args);
    }
    findCallback(callbackID) {
        var _a;
        return (_a = this.callbackID2fun) === null || _a === void 0 ? void 0 : _a.get(callbackID);
    }
    removeCallback(callbackID) {
        var _a;
        (_a = this.callbackID2fun) === null || _a === void 0 ? void 0 : _a.delete(callbackID);
    }
}
exports.JSCallbackMgr = JSCallbackMgr;
//****** JSBuildContext 和flutter BuildContext 保持一致的编程方式 ******
class JSBuildContext {
    static new(widget, parentBuildContext) {
        var v = new JSBuildContext();
        v.widget = widget;
        v.widget.buildContext = this;
        v.parentBuildContext = parentBuildContext;
        v.inheritedInfo = {};
        return v;
    }
    static inheritBuildContext(widget, buildContext) {
        var context = JSBuildContext.new(widget, buildContext);
        context.inheritedInfo = buildContext.inheritedInfo;
        return context;
    }
    setInheritedInfo(args) {
        this.inheritedInfo = args;
    }
}
exports.JSBuildContext = JSBuildContext;
//****** Widget树 ******
class JSWidgetTree {
    static new(buildWidgetDataSeq) {
        var v = new JSWidgetTree();
        v.buildWidgetDataSeq = buildWidgetDataSeq;
        v.childrenWidget = {};
        v.callbackID2fun = new Map();
        v.widgetTreeObjMap = null;
        v.ownerWidget = null;
        return v;
    }
    //统一用全局的id生成器
    generateID() {
        return JSCallbackMgr.getInstance().generateID();
    }
    createCallbackID(callback) {
        var _a;
        let callbackID = this.ownerWidget.widgetID + "/" + this.generateID();
        (_a = this.callbackID2fun) === null || _a === void 0 ? void 0 : _a.set(callbackID, callback);
        return callbackID;
    }
    invokeCallback(callbackID, ...args) {
        let callback = this.findCallback(callbackID);
        return callback(...args);
    }
    findCallback(callbackID) {
        var _a;
        return (_a = this.callbackID2fun) === null || _a === void 0 ? void 0 : _a.get(callbackID);
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
        //JS侧现生成的XSJSWidget， widgetID为偶数，从0开始 +2
        this.widgetIDFeed = this.widgetIDFeed + 2;
        let wID = this.widgetIDFeed;
        return String(wID);
    }
    registerWidget(widget) {
        this.widgetID2WidgetMap.set(widget.widgetID, widget);
    }
    remove(widgetID) {
        this.widgetID2WidgetMap.delete(widgetID);
    }
    findWidget(widgetID) {
        return this.widgetID2WidgetMap.get(widgetID);
    }
}
exports.JSWidgetMgr = JSWidgetMgr;
//****** JSWidget Mirror Mgr ******
class JSWidgetMirrorMgr {
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
    generateID(obj) {
        const d = ++this.mirrorIDFeed;
        const idstring = String(d);
        this.mirrorObjMap.set(idstring, obj);
        return idstring;
    }
    removeMirrorObjects(mirrorIDList) {
        for (let mirrorID in mirrorIDList) {
            this.mirrorObjMap.delete(mirrorID);
        }
    }
    getMirrorObj(mirrorID) {
        return this.mirrorObjMap.get(mirrorID);
    }
}
exports.JSWidgetMirrorMgr = JSWidgetMirrorMgr;
class JSCallArgs {
    /**
     * @param config config: {widgetID?:string,mirrorID?:string,className?:string,funcName?:string,args?:Map<string,any>}
     */
    static new(config) {
        var v = new JSCallArgs();
        if (config != null && config != undefined) {
            v.widgetID = config.widgetID;
            v.mirrorID = config.mirrorID;
            v.className = config.className;
            v.funcName = config.funcName;
            v.args = config.args;
        }
        return v;
    }
}
exports.JSCallArgs = JSCallArgs;
//flutter 中 非widget继承 JSBaseClass
class JSBaseClass extends core.Object {
    constructor() {
        super();
        this.className = this.constructor.name;
    }
    createMirrorObjectID() {
        this.mirrorID = JSWidgetMirrorMgr.getInstance().generateID(this);
        core.print("createMirrorObjectID: mirrorID : " + this.mirrorID);
    }
}
exports.JSBaseClass = JSBaseClass;
//flutter Widget继承Widget
class JSBaseWidget extends JSBaseClass {
    constructor() {
        super();
    }
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
exports.JSBaseWidget = JSBaseWidget;
//****** JS Widget State ******
class JSWidgetState {
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
    setState(fun) {
        JSLog.log("JSWidgetState setState ::" + this.widget.widgetLogInfoStr());
        if (fun) {
            fun();
        }
        //call-> Flutter
        this.widget.helper.callFlutterRebuild();
    }
    //subclass override
    build(buildContext) {
        return null;
    }
    //subclass overwite
    onBuildEnd(args) { }
    //subclass override
    dispose() { }
}
exports.JSWidgetState = JSWidgetState;
