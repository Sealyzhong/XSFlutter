"use strict";
//#region ******** Base Api ********
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dio = exports.DioOptions = exports.DioBaseOptions = exports.DioResponseType = exports.UrlLauncher = exports.FocusScope = exports.Wakelock = exports.PackageInfo = exports.ScreenInfo = exports.Sp = exports.Loading = exports.ShowDialog = void 0;
const fs = __importStar(require("flutter_sdk"));
class ShowDialog extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ShowDialog();
        }
        return this.instance;
    }
    /**
     * @param config config:
      {
        applicationName?:string,
        applicationVersion?:string,
        applicationIcon?:fs.Widget,
        applicationLegalese?:string,
        children?:Array<fs.Widget>,
        useRootNavigator?:boolean,
      }
     */
    static showAboutDialog(config) {
        ShowDialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: ShowDialog.getInstance().mirrorID,
            className: ShowDialog.getInstance().className,
            funcName: "showAboutDialog",
            args: config,
        }));
    }
    /**
     * @param config config:
      {
          barrierDismissible?:boolean,
          useSafeArea?:boolean,
          useRootNavigator?:boolean,
          child?:fs.Widget,
      }
     */
    static showDialog(config) {
        ShowDialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: ShowDialog.getInstance().mirrorID,
            className: ShowDialog.getInstance().className,
            funcName: "showDialog",
            args: config,
        }));
    }
}
exports.ShowDialog = ShowDialog;
class Loading extends fs.DartClass {
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
    static showSuccess(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static showError(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static showInfo(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static showToast(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static show(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static showProgress(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
    static dismiss(config) {
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Loading.getInstance().mirrorID,
            className: "Loading",
            funcName: "dismiss",
            args: config,
        }));
    }
}
exports.Loading = Loading;
class Sp extends fs.DartClass {
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
    static async getBool(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getBool",
            args: config,
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:number;
      }
     */
    static async getInt(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getInt",
            args: config,
        }));
        return fs.Convert.toNumber(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:double;
      }
     */
    static async getDouble(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getDouble",
            args: config,
        }));
        return fs.Convert.toNumber(v);
    }
    /**
     * @param config config:
      {
        key:string;
        defaultValue?:string;
      }
     */
    static async getString(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "getString",
            args: config,
        }));
        return fs.Convert.toString(v);
    }
    static async clear() {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "clear",
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
      }
     */
    static async remove(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "remove",
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:boolean;
      }
     */
    static async setBool(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setBool",
            args: config,
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:number;
      }
     */
    static async setDouble(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setDouble",
            args: config,
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:number;
      }
     */
    static async setInt(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setInt",
            args: config,
        }));
        return fs.Convert.toBoolean(v);
    }
    /**
     * @param config config:
      {
        key:string;
        value:string;
      }
     */
    static async setString(config) {
        var v = await Sp.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setString",
            args: config,
        }));
    }
}
exports.Sp = Sp;
//****** ScreenInfo ******
class ScreenInfo extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    /*
    * 将Dp按比例转换成Dp
    * */
    static getValueWithDp(dp, isRatio = true) {
        return isRatio ? (ScreenInfo.dpRatio * dp) : dp;
    }
    /*
    * 将px按比例转换成Dp
    * */
    static getValueWithPx(px, isRatio = true) {
        return isRatio ? (ScreenInfo.pxRatio * px) : px;
    }
    //
    static async updateInfo() {
        var info = new ScreenInfo();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "updateInfo",
        }));
        if (v != null && v != undefined) {
            var result = JSON.parse(String(v));
            if (result != null && result != undefined) {
                ScreenInfo.appBarHeight = fs.Convert.toNumber(result["appBarHeight"]);
                ScreenInfo.bottomBarHeight = fs.Convert.toNumber(result["bottomBarHeight"]);
                ScreenInfo.dpRatio = fs.Convert.toNumber(result["dpRatio"]);
                ScreenInfo.pxRatio = fs.Convert.toNumber(result["pxRatio"]);
                ScreenInfo.screenDensity = fs.Convert.toNumber(result["screenDensity"]);
                ScreenInfo.screenHeight = fs.Convert.toNumber(result["screenHeight"]);
                ScreenInfo.screenHeightPx = fs.Convert.toNumber(result["screenHeightPx"]);
                ScreenInfo.screenWidth = fs.Convert.toNumber(result["screenWidth"]);
                ScreenInfo.screenWidthPx = fs.Convert.toNumber(result["screenWidthPx"]);
                ScreenInfo.statusBarHeight = fs.Convert.toNumber(result["statusBarHeight"]);
                ScreenInfo.uiDensity = fs.Convert.toNumber(result["uiDensity"]);
                ScreenInfo.uiHeight = fs.Convert.toNumber(result["uiHeight"]);
                ScreenInfo.uiWidth = fs.Convert.toNumber(result["uiWidth"]);
                ScreenInfo.uiWidthPx = fs.Convert.toNumber(result["uiWidthPx"]);
                ScreenInfo.uiHeightPx = fs.Convert.toNumber(result["uiHeightPx"]);
            }
        }
    }
}
exports.ScreenInfo = ScreenInfo;
// 设计稿屏幕宽度(PX)
ScreenInfo.uiWidthPx = 750.0;
//设计稿屏幕宽度(PX)
ScreenInfo.uiHeightPx = 1334.0;
//设计稿屏幕密度
ScreenInfo.uiDensity = 2.0;
//设计稿屏幕宽度(DP)
ScreenInfo.uiWidth = 375.0;
//设计稿屏幕宽度(DP)
ScreenInfo.uiHeight = 667.0;
//当前设备宽度 dp
ScreenInfo.screenWidth = 375.0;
// 当前设备高度 dp
ScreenInfo.screenHeight = 667.0;
// 当前设备宽度 px
ScreenInfo.screenWidthPx = 750.0;
// 当前设备高度 px
ScreenInfo.screenHeightPx = 1334.0;
// 设备的像素密度
ScreenInfo.screenDensity = 2.0;
// 状态栏高度 dp 刘海屏会更高
ScreenInfo.statusBarHeight = 20.0;
//底部工具栏高度
ScreenInfo.bottomBarHeight = 0.0;
//App栏高
ScreenInfo.appBarHeight = 0.0;
//缩放比例(Dp)
ScreenInfo.dpRatio = 1.0;
//缩放比例(PX)
ScreenInfo.pxRatio = 1.0;
//字体缩放放比例
ScreenInfo.textScaleFactor = 1.0;
//****** PackageInfo ******
class PackageInfo extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    //
    static async updateInfo() {
        var info = new PackageInfo();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "updateInfo",
        }));
        if (v != null && v != undefined) {
            var result = JSON.parse(String(v));
            if (result != null && result != undefined) {
                PackageInfo.appName = fs.Convert.toString(result["appName"]);
                PackageInfo.buildNumber = fs.Convert.toString(result["buildNumber"]);
                PackageInfo.packageName = fs.Convert.toString(result["packageName"]);
                PackageInfo.version = fs.Convert.toString(result["version"]);
            }
        }
    }
}
exports.PackageInfo = PackageInfo;
PackageInfo.appName = ""; //应用名称
PackageInfo.packageName = ""; //包名称
PackageInfo.version = ""; //版本号
PackageInfo.buildNumber = ""; //小版本号
//****** Wakelock ******
class Wakelock extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    //
    static async disable() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "disable",
        }));
        return fs.Convert.toBoolean(v);
    }
    //
    static async enable() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "enable",
        }));
        return fs.Convert.toBoolean(v);
    }
    //
    static async isEnabled() {
        var info = new Wakelock();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "isEnabled",
        }));
        return fs.Convert.toBoolean(v);
    }
}
exports.Wakelock = Wakelock;
//****** FocusScope ******
class FocusScope extends fs.DartClass {
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
        info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "requestFocus",
        }));
    }
    //
    static unfocus() {
        var info = new FocusScope();
        info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "unfocus",
        }));
    }
}
exports.FocusScope = FocusScope;
class UrlLauncher extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
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
    static async openUrl(config) {
        var info = new UrlLauncher();
        var v = await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "openUrl",
            args: config,
        }));
        return fs.Convert.toBoolean(v);
    }
}
exports.UrlLauncher = UrlLauncher;
//****** DioResponseType ******
var DioResponseType;
(function (DioResponseType) {
    DioResponseType["json"] = "json";
    DioResponseType["stream"] = "stream";
    DioResponseType["plain"] = "plain";
    DioResponseType["bytes"] = "bytes";
})(DioResponseType = exports.DioResponseType || (exports.DioResponseType = {}));
class DioBaseOptions extends fs.DartClass {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new DioBaseOptions(config);
    }
}
exports.DioBaseOptions = DioBaseOptions;
class DioOptions extends fs.DartClass {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    /**
       * @param config config:
        {
          method?:string,
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
    static new(config) {
        return new DioOptions(config);
    }
}
exports.DioOptions = DioOptions;
class Dio extends fs.DartClass {
    constructor(options) {
        super();
        this.options = options;
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static new(options) {
        return new Dio(options);
    }
    /**
      * @param config config:
        {
          path?:string,
          queryParameters?:Map<string,any>,
          options?:DioOptions,
        }
    */
    async get(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "get",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          options?:DioOptions,
        }
      */
    async getUri(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "getUri",
            args: config,
        }));
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
    async post(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "post",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          data?:any;
          options?:DioOptions,
        }
      */
    async postUri(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "postUri",
            args: config,
        }));
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
    async request(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "request",
            args: config,
        }));
    }
    /**
      * @param config config:
        {
          uri?:Uri,
          data?:any;
          options?:DioOptions,
        }
      */
    async requestUri(config) {
        return await this.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestUri",
            args: config,
        }));
    }
}
exports.Dio = Dio;
//#endregion
//#endregion
