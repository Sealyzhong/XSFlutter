export declare class JSFramework {
    static currentJSApp: any;
    static runApp(app: any): void;
    static callNativeSetCurrentJSApp(app: any): void;
    static callFlutterReloadApp(app: any, widgetData: string): void;
    static callFlutterWidgetChannel(method: string, args: string): void;
    static invokeFlutterFunction(callArgs: any): void;
    static invokeCommonFlutterFunction(callArgs: any): void;
}
export declare class JSLog {
    static setLogLev(lev: number): void;
    static printLog(log: string): void;
    static debug(log: string): void;
    static log(log: string): void;
    static error(log: string): void;
    static LogLevDebug: number;
    static LogLevInfo: number;
    static LogLevError: number;
    static logLev: number;
}
export declare class JSMethodCall {
    name?: string;
    args?: Map<string, any>;
    encodeJSON(): string;
    static new(name: string, args?: Map<string, any>): JSMethodCall;
}
export declare class JSCallbackMgr {
    callbackIDFeed: number;
    callbackID2fun?: Map<string, any>;
    static instance: JSCallbackMgr;
    constructor();
    static getInstance(): JSCallbackMgr;
    generateID(): string;
    createCallbackID(callback: any): string;
    invokeCallback(callbackID: string, args: any): void;
    findCallback(callbackID: string): any;
    removeCallback(callbackID: string): void;
}
export declare class JSBuildContext {
    widget: any;
    parentBuildContext?: JSBuildContext;
    inheritedInfo?: any;
    static new(widget: any, parentBuildContext?: JSBuildContext): JSBuildContext;
    static inheritBuildContext(widget: any, buildContext: JSBuildContext): JSBuildContext;
    setInheritedInfo(args?: any): void;
}
export declare class JSWidgetTree {
    buildWidgetDataSeq?: string;
    childrenWidget?: any;
    callbackID2fun?: Map<string, any>;
    widgetTreeObjMap?: any;
    ownerWidget?: any;
    static new(buildWidgetDataSeq: string): JSWidgetTree;
    generateID(): string;
    createCallbackID(callback: any): string;
    invokeCallback(callbackID: string, ...args: any): any;
    findCallback(callbackID: string): any;
}
export declare class JSWidgetMgr {
    widgetIDFeed: number;
    widgetID2WidgetMap: Map<string, any>;
    static instance?: JSWidgetMgr;
    constructor();
    static getInstance(): JSWidgetMgr;
    generateWidgetID(): string;
    registerWidget(widget: any): void;
    remove(widgetID: string): void;
    findWidget(widgetID: string): any;
}
