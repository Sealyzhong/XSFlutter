"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */
//import bt = require("./js_basic_types"); 
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSWidgetMgr = exports.JSWidgetTree = exports.JSBuildContext = exports.JSCallbackMgr = exports.JSMethodCall = exports.JSLog = exports.JSFramework = void 0;
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
