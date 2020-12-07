
import * as fs from "flutter_sdk";

//#region ****** ShowDialog ******

interface ShowAboutDialogConfig {
  applicationName?:string;
  applicationVersion?:string;
  applicationIcon?:fs.Widget;
  applicationLegalese?:string;
  children?:Array<fs.Widget>;
  useRootNavigator?:boolean;
}

interface ShowDialogConfig {
  barrierDismissible?:boolean;
  useSafeArea?:boolean;
  useRootNavigator?:boolean;
  child?:fs.Widget;
}

export class ShowDialog extends fs.DartClass {

  static instance:ShowDialog;

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
  static showAboutDialog(config:ShowAboutDialogConfig){
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
  static showDialog(baseWidget:fs.BaseWidget,config:ShowDialogConfig){
    ShowDialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
          widgetID:String(baseWidget.widgetID),
          mirrorID: ShowDialog.getInstance().mirrorID,
          className: ShowDialog.getInstance().className,
          funcName: "showDialog",
          args:{
            widgetID:String(baseWidget.widgetID),
            barrierDismissible: config.barrierDismissible,
            useRootNavigator: config.useRootNavigator,
            useSafeArea: config.useSafeArea,
            child:baseWidget.helper.buildWidgetTreeSubWidget(config.child),
          },
      }));
  }


  static dismiss(baseWidget:fs.BaseWidget){
    ShowDialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
          widgetID:String(baseWidget.widgetID),
          mirrorID: ShowDialog.getInstance().mirrorID,
          className: ShowDialog.getInstance().className,
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
    duration?:fs.Duration;
    alignment?:fs.Alignment;
    animation?:boolean;
}
interface LoadingProgressConfig {
    value:number;
    alignment?:fs.Alignment;
}
export class Loading extends fs.DartClass {

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
    static showError(config:LoadingInfoConfig){
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
    static showInfo(config:LoadingInfoConfig){
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
    static showToast(config:LoadingInfoConfig){
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
    static show(config:LoadingInfoConfig){
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
    static showProgress(config:LoadingProgressConfig){
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
    static dismiss(config?:LoadingInfoConfig){
        Loading.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
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
export class Sp extends fs.DartClass {

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
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "getBool",
          args: config,
        })
      );
      return fs.Convert.toBoolean(v);
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
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "getInt",
          args: config,
        })
      );
      return fs.Convert.toNumber(v);
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
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "getDouble",
          args: config,
        })
      );
      return fs.Convert.toNumber(v);
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
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "getString",
          args: config,
        })
      );
      return fs.Convert.toString(v);
    }

    static async clear() {
      var v = await Sp.getInstance().invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "clear",
        })
      );
      return fs.Convert.toBoolean(v);
    }

    /**
     * @param config config: 
      {
        key:string;
      }
     */
    static async remove(config:SpGetConfig) {
      var v = await Sp.getInstance().invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: Sp.getInstance().mirrorID,
          className: Sp.getInstance().className,
          funcName: "remove",
        })
      );
      return fs.Convert.toBoolean(v);
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
        fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setBool",
            args: config,
        })
      );
      return fs.Convert.toBoolean(v);
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
        fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setDouble",
            args: config,
        })
      );
      return fs.Convert.toBoolean(v);
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
        fs.JSCallConfig.new({
            mirrorID: Sp.getInstance().mirrorID,
            className: Sp.getInstance().className,
            funcName: "setInt",
            args: config,
        })
      );
      return fs.Convert.toBoolean(v);
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
        fs.JSCallConfig.new({
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
export class ScreenInfo extends fs.DartClass {

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
    var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "updateInfo",
      }));
      if(v!=null && v!=undefined){
        var result= JSON.parse(String(v));
        if(result!=null && result!=undefined){
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
//#endregion


//#region ****** PackageInfo ******
export class PackageInfo extends fs.DartClass {
  static appName:string = ""; //应用名称
  static packageName:string = ""; //包名称
  static version:string = ""; //版本号
  static buildNumber:string = ""; //小版本号

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
    var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
          mirrorID: info.mirrorID,
          className: info.className,
          funcName: "updateInfo",
      }));
      if(v!=null && v!=undefined){
        var result= JSON.parse(String(v));
        if(result!=null && result!=undefined){
          PackageInfo.appName = fs.Convert.toString(result["appName"]);
          PackageInfo.buildNumber = fs.Convert.toString(result["buildNumber"]);
          PackageInfo.packageName = fs.Convert.toString(result["packageName"]);
          PackageInfo.version = fs.Convert.toString(result["version"]);
        }
      }
  }
}
//#endregion


//#region ****** Wakelock ******
export class Wakelock extends fs.DartClass {  
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
      var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "disable",
        }));

      return fs.Convert.toBoolean(v);
    }

    //
    static async enable() {
      var info = new Wakelock();
      var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "enable",
        }));
      return fs.Convert.toBoolean(v);
    }

    //
    static async isEnabled() {
      var info = new Wakelock();
      var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "isEnabled",
        }));
      return fs.Convert.toBoolean(v);
    }
}
//#endregion


//#region ****** FocusScope ******
export class FocusScope extends fs.DartClass {  
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
  statusBarBrightness?:fs.Brightness;
  webOnlyWindowName?:string;
}
export class UrlLauncher extends fs.DartClass {
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
    static async openUrl(config:UrlLauncherConfig) {
      var info = new UrlLauncher();
      var v= await info.invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            mirrorID: info.mirrorID,
            className: info.className,
            funcName: "openUrl",
            args:config,
        }));

      return fs.Convert.toBoolean(v);
    }
}
//#endregion


//#region ****** Dio ******

//****** VoidCallbackDioProgress ******
export type VoidCallbackDioProgress = (progress:number,total:number) => void;

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
export class DioBaseOptions extends fs.DartClass {
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
  static new(config?:DioBaseOptionsConfig){
    return new DioBaseOptions(config);
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
export class DioOptions extends fs.DartClass {
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
  static new(config?:DioOptionsConfig){
    return new DioOptions(config);
  }
}


interface DioGetConfig {
  path?:string;
  queryParameters?:Map<string,any>;
  options?:DioOptions;
  onReceiveProgress?:VoidCallbackDioProgress;
}

interface DioGetUriConfig {
  uri?:fs.Uri;
  options?:DioOptions;
  onReceiveProgress?:VoidCallbackDioProgress;
}

interface DioPostConfig {
  path?:string;
  data?:any;
  queryParameters?:Map<string,any>;
  options?:DioOptions;
  onSendProgress?:VoidCallbackDioProgress;
  onReceiveProgress?:VoidCallbackDioProgress;
}

interface DioPostUriConfig {
  uri?:fs.Uri;
  data?:any;
  options?:DioOptions;
  onSendProgress?:VoidCallbackDioProgress;
  onReceiveProgress?:VoidCallbackDioProgress;
}

interface DioRequestConfig {
  path?:string;
  data?:any;
  queryParameters?:Map<string,any>;
  options?:DioOptions;
  onSendProgress?:VoidCallbackDioProgress;
  onReceiveProgress?:VoidCallbackDioProgress;
}

interface DioRequestUriConfig {
  uri?:fs.Uri;
  data?:any;
  options?:DioOptions;
  onSendProgress?:VoidCallbackDioProgress;
  onReceiveProgress?:VoidCallbackDioProgress;
}


export class Dio extends fs.DartClass {

  options?:DioBaseOptions;

  constructor(options?:DioBaseOptions) {
    super();
    this.options = options;
    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorID();

    //创建对应FLutter对象
    this.createMirrorObj();
  }

  static new(options?:DioBaseOptions){
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
  async get(config:DioGetConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "get",
          args:config,
      }));
  }

  /**
    * @param config config: 
      {
        uri?:Uri,
        options?:DioOptions, 
      }
    */
  async getUri(config:DioGetUriConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "getUri",
          args:config,
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
  async post(config:DioPostConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "post",
          args:config,
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
  async postUri(config:DioPostUriConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "postUri",
          args:config,
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
  async request(config:DioRequestConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "request",
          args:config,
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
  async requestUri(config:DioRequestUriConfig ) {
    return await this.invokeMirrorObjWithCallback(
        fs.JSCallConfig.new({
          mirrorID: this.mirrorID,
          className: this.className,
          funcName: "requestUri",
          args:config,
      }));
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

export abstract class PullToRefreshHeader extends fs.Widget {

  /**
   * PullToRefreshHeader.classic = new PullToRefreshClassicHeader(config);
   * @param config config: 
      {
        key?:fs.Key, 
        refreshStyle?:PullToRefreshStyle, 
        height?:number, 
        completeDuration?:fs.Duration, 
        textStyle?:fs.TextStyle, 
        releaseText?:string, 
        refreshingText?:string, 
        canTwoLevelIcon?:fs.Widget, 
        twoLevelView?:fs.Widget, 
        canTwoLevelText?:string, 
        completeText?:string, 
        failedText?:string, 
        idleText?:string, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        refreshingIcon?:fs.Widget, 
        failedIcon?:fs.Widget, 
        completeIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
        releaseIcon?:fs.Widget, 
      }
   */
  static classic(config?: PullToRefreshClassicHeaderConfig){
    return new PullToRefreshClassicHeader(config);
  }

  /**
   * PullToRefreshHeader.WwterDrop
   * @param config config: 
      {
        key?:fs.Key, 
        refresh?:fs.Widget, 
        complete?:fs.Widget, 
        completeDuration?:fs.Duration, 
        failed?:fs.Widget, 
        waterDropColor?:fs.Color, 
        idleIcon?:fs.Widget, 
      }
   */
  static  waterDrop(config?: PullToRefreshWaterDropHeaderConfig){
    return new PullToRefreshWaterDropMaterialHeader(config);
  }

  /**
   * PullToRefreshHeader.materialClassic = new PullToRefreshWaterDropMaterialHeader(config);
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
      }
   */
  static materialClassic (config?: PullToRefreshMaterialClassicHeaderConfig){
    return new PullToRefreshWaterDropMaterialHeader(config);
  }

  /**
   * PullToRefreshHeader.waterDropMaterial = new PullToRefreshWaterDropMaterialHeader(config);
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
      }
   */
  static waterDropMaterial(config?: PullToRefreshWaterDropMaterialHeaderConfig){
    return new PullToRefreshWaterDropMaterialHeader(config);
  }

}
//****** PullToRefreshClassicHeader ******
interface PullToRefreshClassicHeaderConfig {
  key?:fs.Key;
  refreshStyle?:PullToRefreshStyle;
  height?:number;
  completeDuration?:fs.Duration;
  textStyle?:fs.TextStyle;
  releaseText?:string;
  refreshingText?:string;
  canTwoLevelIcon?:fs.Widget;
  twoLevelView?:fs.Widget;
  canTwoLevelText?:string;
  completeText?:string;
  failedText?:string;
  idleText?:string;
  iconPos?:PullToRefreshIconPosition;
  spacing?:number;
  refreshingIcon?:fs.Widget;
  failedIcon?:fs.Widget;
  completeIcon?:fs.Widget;
  idleIcon?:fs.Widget;
  releaseIcon?:fs.Widget;
}
export class PullToRefreshClassicHeader extends PullToRefreshHeader {
  key?:fs.Key;
  refreshStyle?:PullToRefreshStyle;
  height?:number;
  completeDuration?:fs.Duration;
  textStyle?:fs.TextStyle;
  releaseText?:string;
  refreshingText?:string;
  canTwoLevelIcon?:fs.Widget;
  twoLevelView?:fs.Widget;
  canTwoLevelText?:string;
  completeText?:string;
  failedText?:string;
  idleText?:string;
  iconPos?:PullToRefreshIconPosition;
  spacing?:number;
  refreshingIcon?:fs.Widget;
  failedIcon?:fs.Widget;
  completeIcon?:fs.Widget;
  idleIcon?:fs.Widget;
  releaseIcon?:fs.Widget;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        refreshStyle?:PullToRefreshStyle, 
        height?:number, 
        completeDuration?:fs.Duration, 
        textStyle?:fs.TextStyle, 
        releaseText?:string, 
        refreshingText?:string, 
        canTwoLevelIcon?:fs.Widget, 
        twoLevelView?:fs.Widget, 
        canTwoLevelText?:string, 
        completeText?:string, 
        failedText?:string, 
        idleText?:string, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        refreshingIcon?:fs.Widget, 
        failedIcon?:fs.Widget, 
        completeIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
        releaseIcon?:fs.Widget, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        refreshStyle?:PullToRefreshStyle, 
        height?:number, 
        completeDuration?:fs.Duration, 
        textStyle?:fs.TextStyle, 
        releaseText?:string, 
        refreshingText?:string, 
        canTwoLevelIcon?:fs.Widget, 
        twoLevelView?:fs.Widget, 
        canTwoLevelText?:string, 
        completeText?:string, 
        failedText?:string, 
        idleText?:string, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        refreshingIcon?:fs.Widget, 
        failedIcon?:fs.Widget, 
        completeIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
        releaseIcon?:fs.Widget, 
      }
   */
  static new(config?: PullToRefreshClassicHeaderConfig) {
    return new PullToRefreshClassicHeader(config);
  }
}

//****** PullToRefreshWaterDropHeader ******
interface PullToRefreshWaterDropHeaderConfig {
  key?:fs.Key;
  refresh?:fs.Widget;
  complete?:fs.Widget;
  completeDuration?:fs.Duration;
  failed?:fs.Widget;
  waterDropColor?:fs.Color;
  idleIcon?:fs.Widget;
}
export class PullToRefreshWaterDropHeader extends PullToRefreshHeader{
  key?:fs.Key;
  refresh?:fs.Widget;
  complete?:fs.Widget;
  completeDuration?:fs.Duration;
  failed?:fs.Widget;
  waterDropColor?:fs.Color;
  idleIcon?:fs.Widget;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        refresh?:fs.Widget, 
        complete?:fs.Widget, 
        completeDuration?:fs.Duration, 
        failed?:fs.Widget, 
        waterDropColor?:fs.Color, 
        idleIcon?:fs.Widget, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        refresh?:fs.Widget, 
        complete?:fs.Widget, 
        completeDuration?:fs.Duration, 
        failed?:fs.Widget, 
        waterDropColor?:fs.Color, 
        idleIcon?:fs.Widget, 
      }
   */
  static new(config?: PullToRefreshWaterDropHeaderConfig) {
    return new PullToRefreshWaterDropHeader(config);
  }
}

//****** MaterialClassicHeader ******
interface PullToRefreshMaterialClassicHeaderConfig {
  key?:fs.Key;
  height?:number;
  semanticsLabel?:string;
  semanticsValue?:string;
  color?:fs.Color;
  offset?:number;
  distance?:number;
  backgroundColor?:fs.Color;
}
export class PullToRefreshMaterialClassicHeader extends PullToRefreshHeader {
  key?:fs.Key;
  height?:number;
  semanticsLabel?:string;
  semanticsValue?:string;
  color?:fs.Color;
  offset?:number;
  distance?:number;
  backgroundColor?:fs.Color;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
      }
   */
  static new(config?: PullToRefreshMaterialClassicHeaderConfig) {
    return new PullToRefreshMaterialClassicHeader(config);
  }
}

//****** WaterDropMaterialHeader ******
interface PullToRefreshWaterDropMaterialHeaderConfig {
  key?:fs.Key;
  height?:number;
  semanticsLabel?:string;
  semanticsValue?:string;
  color?:fs.Color;
  offset?:number;
  distance?:number;
  backgroundColor?:fs.Color;
}
export class PullToRefreshWaterDropMaterialHeader extends PullToRefreshHeader {
  key?:fs.Key;
  height?:number;
  semanticsLabel?:string;
  semanticsValue?:string;
  color?:fs.Color;
  offset?:number;
  distance?:number;
  backgroundColor?:fs.Color;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        height?:number, 
        semanticsLabel?:string, 
        semanticsValue?:string, 
        color?:fs.Color, 
        offset?:number, 
        distance?:number, 
        backgroundColor?:fs.Color, 
      }
   */
  static new(config?: PullToRefreshWaterDropMaterialHeaderConfig) {
    return new PullToRefreshWaterDropMaterialHeader(config);
  }
}

export abstract class PullToRefreshFooter extends fs.Widget {

  /**
   * PullToRefreshFooter.classic = new PullToRefreshPullToRefreshClassicFooter(config);
   * @param config config: 
      {
        key?:fs.Key, 
        onClick?: fs.VoidCallback, 
        loadStyle?: PullToRefreshLoadStyle, 
        height?: number, 
        textStyle?:fs.TextStyle, 
        loadingText?:string, 
        noDataText?:string, 
        noMoreIcon?:fs.Widget, 
        idleText?:string, 
        failedText?:string, 
        canLoadingText?:string, 
        failedIcon?:fs.Widget, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        completeDuration?:fs.Duration, 
        loadingIcon?:fs.Widget, 
        canLoadingIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
      }
   */
  static classic(config?: PullToRefreshClassicFooterConfig){
    return new PullToRefreshClassicFooter(config);
  }
}

//****** PullToRefreshClassicFooter ******
interface PullToRefreshClassicFooterConfig {
  key?:fs.Key;
  onClick?: fs.VoidCallback;
  loadStyle?: PullToRefreshLoadStyle;
  height?: number;
  textStyle?:fs.TextStyle;
  loadingText?:string;
  noDataText?:string;
  noMoreIcon?:fs.Widget;
  idleText?:string;
  failedText?:string;
  canLoadingText?:string;
  failedIcon?:fs.Widget;
  iconPos?:PullToRefreshIconPosition;
  spacing?:number;
  completeDuration?:fs.Duration;
  loadingIcon?:fs.Widget;
  canLoadingIcon?:fs.Widget;
  idleIcon?:fs.Widget;
}
export class PullToRefreshClassicFooter extends fs.Widget {
  key?:fs.Key;
  onClick?: fs.VoidCallback;
  loadStyle?: PullToRefreshLoadStyle;
  height?: number;
  textStyle?:fs.TextStyle;
  loadingText?:string;
  noDataText?:string;
  noMoreIcon?:fs.Widget;
  idleText?:string;
  failedText?:string;
  canLoadingText?:string;
  failedIcon?:fs.Widget;
  iconPos?:PullToRefreshIconPosition;
  spacing?:number;
  completeDuration?:fs.Duration;
  loadingIcon?:fs.Widget;
  canLoadingIcon?:fs.Widget;
  idleIcon?:fs.Widget;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        onClick?: fs.VoidCallback, 
        loadStyle?: PullToRefreshLoadStyle, 
        height?: number, 
        textStyle?:fs.TextStyle, 
        loadingText?:string, 
        noDataText?:string, 
        noMoreIcon?:fs.Widget, 
        idleText?:string, 
        failedText?:string, 
        canLoadingText?:string, 
        failedIcon?:fs.Widget, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        completeDuration?:fs.Duration, 
        loadingIcon?:fs.Widget, 
        canLoadingIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        onClick?: fs.VoidCallback, 
        loadStyle?: PullToRefreshLoadStyle, 
        height?: number, 
        textStyle?:fs.TextStyle, 
        loadingText?:string, 
        noDataText?:string, 
        noMoreIcon?:fs.Widget, 
        idleText?:string, 
        failedText?:string, 
        canLoadingText?:string, 
        failedIcon?:fs.Widget, 
        iconPos?:PullToRefreshIconPosition, 
        spacing?:number, 
        completeDuration?:fs.Duration, 
        loadingIcon?:fs.Widget, 
        canLoadingIcon?:fs.Widget, 
        idleIcon?:fs.Widget, 
      }
   */
  static new(config?: PullToRefreshClassicFooterConfig) {
    return new PullToRefreshClassicFooter(config);
  }
}

//****** PullToRefreshConfiguration ******
interface PullToRefreshConfigurationConfig {
  child?:fs.Widget;
  headerBuilder?:fs.Widget;
  footerBuilder?:fs.Widget;
  dragSpeedRatio?:number;
  shouldFooterFollowWhenNotFull?:string;
  enableScrollWhenTwoLevel?:boolean;
  enableLoadingWhenNoData?:boolean;
  enableBallisticRefresh?:boolean;
  springDescription?:fs.SpringDescription;
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
export class PullToRefreshConfiguration extends fs.Widget {
  child?:fs.Widget;
  headerBuilder?:fs.Widget;
  footerBuilder?:fs.Widget;
  dragSpeedRatio?:number;
  shouldFooterFollowWhenNotFull?:string;
  enableScrollWhenTwoLevel?:boolean;
  enableLoadingWhenNoData?:boolean;
  enableBallisticRefresh?:boolean;
  springDescription?:fs.SpringDescription;
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
        child?:fs.Widget, 
        headerBuilder?:fs.Widget, 
        footerBuilder?:fs.Widget, 
        dragSpeedRatio?:number, 
        shouldFooterFollowWhenNotFull?:string, 
        enableScrollWhenTwoLevel?:boolean, 
        enableLoadingWhenNoData?:boolean, 
        enableBallisticRefresh?:boolean, 
        springDescription?:fs.SpringDescription, 
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

  /**
   * @param config config: 
      {
        child?:fs.Widget, 
        headerBuilder?:fs.Widget, 
        footerBuilder?:fs.Widget, 
        dragSpeedRatio?:number, 
        shouldFooterFollowWhenNotFull?:string, 
        enableScrollWhenTwoLevel?:boolean, 
        enableLoadingWhenNoData?:boolean, 
        enableBallisticRefresh?:boolean, 
        springDescription?:fs.SpringDescription, 
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
  static new(config?: PullToRefreshConfigurationConfig) {
    return new PullToRefreshConfiguration(config);
  }
}

//****** PullToRefreshController ******
interface PullToRefreshControllerConfig {
  initialRefreshStatus?:PullToRefreshStatus;
  initialRefresh?:boolean;
  initialLoadStatus?:PullToRefreshLoadStatus;
}
interface PullToRefreshControllerEventConfig {
  duration?:fs.Duration;
  needMove?:boolean;
  curve?:fs.Curve;
  resetFooterState?:boolean;
}
export class PullToRefreshController extends fs.DartClass {
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


  /**
   * @param config config: 
      {
        initialRefreshStatus?:PullToRefreshStatus, 
        initialRefresh?:boolean, 
        initialLoadStatus?:PullToRefreshLoadStatus, 
      }
   */
  static new(config: PullToRefreshControllerConfig) {
    return new PullToRefreshController(config);
  }


  dispose() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"dispose",
      })
    );
  }

  loadComplete() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"loadComplete",
      })
    );
  }

  loadFailed() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"loadFailed",
      })
    );
  }

  loadNoData() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"refreshCompleted",
        args:config
      })
    );
  }


  refreshFailed() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"refreshFailed",
      })
    );
  }

  refreshToIdle() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"refreshToIdle",
      })
    );
  }

  /**
   * @param config config: 
      {
        duration?:fs.Duration, 
        needMove?:boolean, 
        curve?:fs.Curve, 
      }
   */
  requestLoading(config?:PullToRefreshControllerEventConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
        duration?:fs.Duration, 
        needMove?:boolean, 
        curve?:fs.Curve, 
      }
   */
  requestRefresh(config?:PullToRefreshControllerEventConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
        duration?:fs.Duration, 
        curve?:fs.Curve, 
      }
   */
  requestTwoLevel(config?:PullToRefreshControllerEventConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"requestTwoLevel",
        args:config
      })
    );
  }

  resetNoData() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"resetNoData",
      })
    );
  }

  /**
   * @param config config: 
      {
        duration?:fs.Duration, 
        curve?:fs.Curve, 
      }
   */
  twoLevelComplete(config?:PullToRefreshControllerEventConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
  key?:fs.Key;
  controller:PullToRefreshController;
  child?:fs.Widget;
  header?:PullToRefreshHeader;
  footer?:PullToRefreshFooter;
  enablePullDown?:boolean;
  enablePullUp?:boolean;
  enableTwoLevel?:boolean;
  onRefresh?:fs.VoidCallback;
  onLoading?:fs.VoidCallback;
  onTwoLevel?:fs.VoidCallback;
  onOffsetChange?:fs.VoidCallbackString;
  dragStartBehavior?:fs.DragStartBehavior;
  primary?:boolean;
  cacheExtent?:number;
  semanticChildCount?:number;
  reverse?:boolean;
  physics?:fs.ScrollPhysics;
  scrollDirection?:fs.Axis;
  scrollController?:fs.ScrollController;
}
export class PullToRefreshRefresher extends fs.Widget {
  key?:fs.Key;
  controller?:PullToRefreshController;
  child?:fs.Widget;
  header?:PullToRefreshHeader;
  footer?:PullToRefreshFooter;
  enablePullDown?:boolean;
  enablePullUp?:boolean;
  enableTwoLevel?:boolean;
  onRefresh?:fs.VoidCallback;
  onLoading?:fs.VoidCallback;
  onTwoLevel?:fs.VoidCallback;
  onOffsetChange?:fs.VoidCallbackString;
  dragStartBehavior?:fs.DragStartBehavior;
  primary?:boolean;
  cacheExtent?:number;
  semanticChildCount?:number;
  reverse?:boolean;
  physics?:fs.ScrollPhysics;
  scrollDirection?:fs.Axis;
  scrollController?:fs.ScrollController;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        controller:PullToRefreshController, 
        child?:fs.Widget, 
        header?:PullToRefreshHeader, 
        footer?:PullToRefreshFooter, 
        enablePullDown?:boolean, 
        enablePullUp?:boolean, 
        enableTwoLevel?:boolean, 
        onRefresh?:fs.VoidCallback, 
        onLoading?:fs.VoidCallback, 
        onTwoLevel?:fs.VoidCallback, 
        onOffsetChange?:fs.VoidCallbackString, 
        dragStartBehavior?:fs.DragStartBehavior, 
        primary?:boolean, 
        cacheExtent?:number, 
        semanticChildCount?:number, 
        reverse?:boolean, 
        physics?:fs.ScrollPhysics, 
        scrollDirection?:fs.Axis, 
        scrollController?:fs.ScrollController, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        controller:PullToRefreshController, 
        child?:fs.Widget, 
        header?:PullToRefreshHeader, 
        footer?:PullToRefreshFooter, 
        enablePullDown?:boolean, 
        enablePullUp?:boolean, 
        enableTwoLevel?:boolean, 
        onRefresh?:fs.VoidCallback, 
        onLoading?:fs.VoidCallback, 
        onTwoLevel?:fs.VoidCallback, 
        onOffsetChange?:fs.VoidCallbackString, 
        dragStartBehavior?:fs.DragStartBehavior, 
        primary?:boolean, 
        cacheExtent?:number, 
        semanticChildCount?:number, 
        reverse?:boolean, 
        physics?:fs.ScrollPhysics, 
        scrollDirection?:fs.Axis, 
        scrollController?:fs.ScrollController, 
      }
   */
  static new(config?: PullToRefreshRefresherConfig) {
    return new PullToRefreshRefresher(config);
  }
}

//#endregion


//#region ******** CachedNetworkImage ********

//****** CachedNetworkImage ******
interface CachedNetworkImageConfig {
  key?:fs.Key;
  imageUrl:string;
  httpHeaders?:Map<string,string>
  placeholder?:fs.Widget;
  errorWidget?:fs.Widget;
  fadeOutDuration?:fs.Duration;
  fadeOutCurve?:fs.Curve;
  fadeInDuration?:fs.Duration;
  fadeInCurve?:fs.Curve;
  width?:number;
  height?:number;
  fit?:fs.BoxFit;
  alignment?:fs.Alignment;
  repeat?:fs.ImageRepeat;
  matchTextDirection?:boolean;
  useOldImageOnUrlChange?:boolean;
  color?:fs.Color;
  filterQuality?:fs.FilterQuality;
  colorBlendMode?:fs.BlendMode;
  placeholderFadeInDuration?:fs.Duration;
  memCacheWidth?:number;
  memCacheHeight?:number;
  cacheKey?:string;
}
export class CachedNetworkImage extends fs.Widget {
  key?:fs.Key;
  imageUrl?:string;
  httpHeaders?:Map<string,string>
  placeholder?:fs.Widget;
  errorWidget?:fs.Widget;
  fadeOutDuration?:fs.Duration;
  fadeOutCurve?:fs.Curve;
  fadeInDuration?:fs.Duration;
  fadeInCurve?:fs.Curve;
  width?:number;
  height?:number;
  fit?:fs.BoxFit;
  alignment?:fs.Alignment;
  repeat?:fs.ImageRepeat;
  matchTextDirection?:boolean;
  useOldImageOnUrlChange?:boolean;
  color?:fs.Color;
  filterQuality?:fs.FilterQuality;
  colorBlendMode?:fs.BlendMode;
  placeholderFadeInDuration?:fs.Duration;
  memCacheWidth?:number;
  memCacheHeight?:number;
  cacheKey?:string;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        imageUrl:string, 
        httpHeaders?:Map<string,string>
        placeholder?:fs.Widget, 
        errorWidget?:fs.Widget, 
        fadeOutDuration?:fs.Duration, 
        fadeOutCurve?:fs.Curve, 
        fadeInDuration?:fs.Duration, 
        fadeInCurve?:fs.Curve, 
        width?:number, 
        height?:number, 
        fit?:fs.BoxFit, 
        alignment?:fs.Alignment, 
        repeat?:fs.ImageRepeat, 
        matchTextDirection?:boolean, 
        useOldImageOnUrlChange?:boolean, 
        color?:fs.Color, 
        filterQuality?:fs.FilterQuality, 
        colorBlendMode?:fs.BlendMode, 
        placeholderFadeInDuration?:fs.Duration, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        imageUrl:string, 
        httpHeaders?:Map<string,string>
        placeholder?:fs.Widget, 
        errorWidget?:fs.Widget, 
        fadeOutDuration?:fs.Duration, 
        fadeOutCurve?:fs.Curve, 
        fadeInDuration?:fs.Duration, 
        fadeInCurve?:fs.Curve, 
        width?:number, 
        height?:number, 
        fit?:fs.BoxFit, 
        alignment?:fs.Alignment, 
        repeat?:fs.ImageRepeat, 
        matchTextDirection?:boolean, 
        useOldImageOnUrlChange?:boolean, 
        color?:fs.Color, 
        filterQuality?:fs.FilterQuality, 
        colorBlendMode?:fs.BlendMode, 
        placeholderFadeInDuration?:fs.Duration, 
        memCacheWidth?:number, 
        memCacheHeight?:number, 
        cacheKey?:string, 
      }
   */
  static new(config?: CachedNetworkImageConfig) {
    return new CachedNetworkImage(config);
  }
}

//#endregion


//#region ******** EasyRefresh ********

export abstract class EasyRefreshHeader extends fs.Widget {

  /**
   * EasyRefreshHeader.classic = new EasyRefreshClassicalHeader(config);
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number,
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteRefresh?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        alignment?:fs.Alignment, 
        refreshText?:string, 
        refreshReadyText?:string, 
        refreshingText?:string, 
        refreshedText?:string, 
        refreshFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
      }
   */
  static classical(config?: EasyRefreshClassicalHeaderConfig){
    return new EasyRefreshClassicalHeader(config);
  }

  /**
   * EasyRefreshHeader.WwterDrop = new EasyRefreshMaterialHeader(config);
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
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
  key?:fs.Key;
  extent?:number;
  triggerDistance?:number;
  float?:boolean;
  completeDuration?:fs.Duration;
  enableInfiniteRefresh?:boolean;
  enableHapticFeedback?:boolean;
  overScroll?:boolean;
  alignment?:fs.Alignment;
  refreshText?:string;
  refreshReadyText?:string;
  refreshingText?:string;
  refreshedText?:string;
  refreshFailedText?:string;
  noMoreText?:string;
  showInfo?:boolean;
  infoText?:string;
  bgColor?:fs.Color;
  textColor?:fs.Color;
  infoColor?:fs.Color;
}
export class EasyRefreshClassicalHeader extends EasyRefreshHeader {
  key?:fs.Key;
  extent?:number;
  triggerDistance?:number;
  float?:boolean;
  completeDuration?:fs.Duration;
  enableInfiniteRefresh?:boolean;
  enableHapticFeedback?:boolean;
  overScroll?:boolean;
  alignment?:fs.Alignment;
  refreshText?:string;
  refreshReadyText?:string;
  refreshingText?:string;
  refreshedText?:string;
  refreshFailedText?:string;
  noMoreText?:string;
  showInfo?:boolean;
  infoText?:string;
  bgColor?:fs.Color;
  textColor?:fs.Color;
  infoColor?:fs.Color;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number,
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteRefresh?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        alignment?:fs.Alignment, 
        refreshText?:string, 
        refreshReadyText?:string, 
        refreshingText?:string, 
        refreshedText?:string, 
        refreshFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number,
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteRefresh?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        alignment?:fs.Alignment, 
        refreshText?:string, 
        refreshReadyText?:string, 
        refreshingText?:string, 
        refreshedText?:string, 
        refreshFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
      }
   */
  static new(config?: EasyRefreshClassicalHeaderConfig) {
    return new EasyRefreshClassicalHeader(config);
  }
}

//****** EasyRefreshMaterialHeader ******
interface EasyRefreshMaterialHeaderConfig {
  key?:fs.Key;
  displacement?:number;
  backgroundColor?:fs.Color;
  completeDuration?:fs.Duration;
  enableHapticFeedback?:boolean;
}
export class EasyRefreshMaterialHeader extends EasyRefreshHeader {
  key?:fs.Key;
  displacement?:number;
  backgroundColor?:fs.Color;
  completeDuration?:fs.Duration;
  enableHapticFeedback?:boolean;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
        enableHapticFeedback?:boolean, 
      }
   */
  static new(config?: EasyRefreshMaterialHeaderConfig) {
    return new EasyRefreshMaterialHeader(config);
  }
}


export abstract class EasyRefreshFooter extends fs.Widget {

  /**
   * EasyRefreshFooter.classical = new EasyRefreshClassicalFooter(config);
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number, 
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteLoad?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        safeArea?:boolean, 
        padding?:fs.EdgeInsets, 
        alignment?:fs.Alignment, 
        loadText?:string, 
        loadReadyText?:string, 
        loadingText?:string, 
        loadedText?:string, 
        loadFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
      }
   */
  static classical(config?: EasyRefreshClassicalFooterConfig){
    return new EasyRefreshClassicalFooter(config);
  }


  /**
   * EasyRefreshFooter.material = new EasyRefreshMaterialFooter(config);
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
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
  key?:fs.Key;
  extent?:number;
  triggerDistance?:number;
  float?:boolean;
  completeDuration?:fs.Duration;
  enableInfiniteLoad?:boolean;
  enableHapticFeedback?:boolean;
  overScroll?:boolean;
  safeArea?:boolean;
  padding?:fs.EdgeInsets;
  alignment?:fs.Alignment;
  loadText?:string;
  loadReadyText?:string;
  loadingText?:string;
  loadedText?:string;
  loadFailedText?:string;
  noMoreText?:string;
  showInfo?:boolean;
  infoText?:string;
  bgColor?:fs.Color;
  textColor?:fs.Color;
  infoColor?:fs.Color;
  isNoMoreText?:boolean;
}
export class EasyRefreshClassicalFooter extends fs.Widget {
  key?:fs.Key;
  extent?:number;
  triggerDistance?:number;
  float?:boolean;
  completeDuration?:fs.Duration;
  enableInfiniteLoad?:boolean;
  enableHapticFeedback?:boolean;
  overScroll?:boolean;
  safeArea?:boolean;
  padding?:fs.EdgeInsets;
  alignment?:fs.Alignment;
  loadText?:string;
  loadReadyText?:string;
  loadingText?:string;
  loadedText?:string;
  loadFailedText?:string;
  noMoreText?:string;
  showInfo?:boolean;
  infoText?:string;
  bgColor?:fs.Color;
  textColor?:fs.Color;
  infoColor?:fs.Color;
  isNoMoreText?:boolean;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number, 
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteLoad?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        safeArea?:boolean, 
        padding?:fs.EdgeInsets, 
        alignment?:fs.Alignment, 
        loadText?:string, 
        loadReadyText?:string, 
        loadingText?:string, 
        loadedText?:string, 
        loadFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        extent?:number, 
        triggerDistance?:number, 
        float?:boolean, 
        completeDuration?:fs.Duration, 
        enableInfiniteLoad?:boolean, 
        enableHapticFeedback?:boolean, 
        overScroll?:boolean, 
        safeArea?:boolean, 
        padding?:fs.EdgeInsets, 
        alignment?:fs.Alignment, 
        loadText?:string, 
        loadReadyText?:string, 
        loadingText?:string, 
        loadedText?:string, 
        loadFailedText?:string, 
        noMoreText?:string, 
        showInfo?:boolean, 
        infoText?:string, 
        bgColor?:fs.Color, 
        textColor?:fs.Color, 
        infoColor?:fs.Color, 
      }
   */
  static new(config?: EasyRefreshClassicalFooterConfig) {
    return new EasyRefreshClassicalFooter(config);
  }
}

//****** EasyRefreshMaterialFooter ******
interface EasyRefreshMaterialFooterConfig {
  key?:fs.Key;
  displacement?:number;
  backgroundColor?:fs.Color;
  completeDuration?:fs.Duration;
  enableHapticFeedback?:boolean;
  enableInfiniteLoad?:boolean;
  overScroll?:boolean;
  isNoMoreText?:boolean;
  noMoreText?:string;
}
export class EasyRefreshMaterialFooter extends EasyRefreshFooter{
  key?:fs.Key;
  displacement?:number;
  backgroundColor?:fs.Color;
  completeDuration?:fs.Duration;
  enableHapticFeedback?:boolean;
  enableInfiniteLoad?:boolean;
  overScroll?:boolean;
  isNoMoreText?:boolean;
  noMoreText?:string;

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        displacement?:number, 
        backgroundColor?:fs.Color, 
        completeDuration?:fs.Duration, 
        enableHapticFeedback?:boolean, 
        enableInfiniteLoad?:boolean, 
        overScroll?:boolean, 
        isNoMoreText?:boolean, 
        noMoreText?:string, 
      }
   */
  static new(config?: EasyRefreshMaterialFooterConfig) {
    return new EasyRefreshMaterialFooter(config);
  }
}


//****** EasyRefreshController ******
interface EasyRefreshControllerConfig {
  duration?:fs.Duration;
  success?:boolean;
  noMore?:boolean;
}
export class EasyRefreshController extends fs.DartClass {


  constructor(){
    super();
    this.createMirrorID();
  }


  static new() {
    return new EasyRefreshController();
  }

  /**
   * @param config config: 
      {
        duration?:fs.Duration,
      }
   */
  callRefresh(config?:EasyRefreshControllerConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
        duration?:fs.Duration,
      }
   */
  callLoad(config?:EasyRefreshControllerConfig) {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
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
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"finishLoad",
        args:config
      })
    );
  }




  resetRefreshState() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"resetRefreshState",
      })
    );
  }

  resetLoadState() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"resetLoadState",
      })
    );
  }

  dispose() {
    fs.JSFramework.invokeFlutterFunction(
      fs.JSCallConfig.new({
        mirrorID:this.mirrorID,
        className:this.className,
        funcName:"dispose",
      })
    );
  }
}


//****** EasyRefresher ******
interface EasyRefresherConfig {
  key?:fs.Key;
  controller?:EasyRefreshController;
  onRefresh?:fs.VoidCallback;
  onLoad?:fs.VoidCallback;
  enableControlFinishRefresh?:boolean;
  enableControlFinishLoad?:boolean;
  taskIndependence?:boolean;
  scrollController?:fs.ScrollController;
  header?:EasyRefreshHeader
  footer?:EasyRefreshFooter;
  firstRefresh?:boolean;
  firstRefreshWidget?:fs.Widget;
  headerIndex?:number;
  emptyWidget?:fs.Widget;
  topBouncing?:boolean;
  bottomBouncing?:boolean;
  child:fs.Widget;
}
interface EasyRefresherCustomConfig {
  key?:fs.Key;
  listKey?:fs.Key;
  controller?:EasyRefreshController;
  onRefresh?:fs.VoidCallback;
  onLoad?:fs.VoidCallback;
  enableControlFinishRefresh?:boolean;
  enableControlFinishLoad?:boolean;
  taskIndependence?:boolean;
  scrollController?:fs.ScrollController;
  header?:EasyRefreshHeader
  headerIndex?:number;
  footer?:EasyRefreshFooter;
  scrollDirection?:fs.Axis;
  reverse?:boolean;
  primary?:boolean;
  shrinkWrap?:boolean;
  center?:fs.Key;
  anchor?:number;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:fs.DragStartBehavior;

  firstRefresh?:boolean;
  firstRefreshWidget?:fs.Widget;
  emptyWidget?:fs.Widget;
  topBouncing?:boolean;
  bottomBouncing?:boolean;
  slivers:Array<fs.Widget>;
}

export class EasyRefresher extends fs.Widget {
  key?:fs.Key;
  controller?:EasyRefreshController;
  onRefresh?:fs.VoidCallback;
  onLoad?:fs.VoidCallback;
  enableControlFinishRefresh?:boolean;
  enableControlFinishLoad?:boolean;
  taskIndependence?:boolean;
  scrollController?:fs.ScrollController;
  header?:EasyRefreshHeader
  footer?:EasyRefreshFooter;
  firstRefresh?:boolean;
  firstRefreshWidget?:fs.Widget;
  headerIndex?:number;
  emptyWidget?:fs.Widget;
  topBouncing?:boolean;
  bottomBouncing?:boolean;
  child?:fs.Widget;

  listKey?:fs.Key;
  scrollDirection?:fs.Axis;
  reverse?:boolean;
  primary?:boolean;
  shrinkWrap?:boolean;
  center?:fs.Key;
  anchor?:number;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:fs.DragStartBehavior;
  slivers?:Array<fs.Widget>;


  /**
   * @param config config: 
      {
        key?:fs.Key, 
        controller?:EasyRefreshController, 
        onRefresh?:fs.VoidCallback, 
        onLoad?:fs.VoidCallback, 
        enableControlFinishRefresh?:boolean, 
        enableControlFinishLoad?:boolean, 
        taskIndependence?:boolean, 
        scrollController?:fs.ScrollController, 
        header?:EasyRefreshHeader
        footer?:EasyRefreshFooter, 
        firstRefresh?:boolean, 
        firstRefreshWidget?:fs.Widget, 
        headerIndex?:number, 
        emptyWidget?:fs.Widget, 
        topBouncing?:boolean, 
        bottomBouncing?:boolean, 
        child:fs.Widget, 
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
        key?:fs.Key, 
        listKey?:fs.Key, 
        controller?:EasyRefreshController, 
        onRefresh?:fs.VoidCallback, 
        onLoad?:fs.VoidCallback, 
        enableControlFinishRefresh?:boolean, 
        enableControlFinishLoad?:boolean, 
        taskIndependence?:boolean, 
        scrollController?:fs.ScrollController, 
        header?:EasyRefreshHeader
        headerIndex?:number, 
        footer?:EasyRefreshFooter, 
        scrollDirection?:fs.Axis, 
        reverse?:boolean, 
        primary?:boolean, 
        shrinkWrap?:boolean, 
        center?:fs.Key, 
        anchor?:number, 
        cacheExtent?:number, 
        semanticChildCount?:number, 
        dragStartBehavior?:fs.DragStartBehavior, 

        firstRefresh?:boolean, 
        firstRefreshWidget?:fs.Widget, 
        emptyWidget?:fs.Widget, 
        topBouncing?:boolean, 
        bottomBouncing?:boolean, 
        slivers:Array<fs.Widget>, 
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

  /**
   * @param config config: 
      {
        key?:fs.Key, 
        controller?:EasyRefreshController, 
        onRefresh?:fs.VoidCallback, 
        onLoad?:fs.VoidCallback, 
        enableControlFinishRefresh?:boolean, 
        enableControlFinishLoad?:boolean, 
        taskIndependence?:boolean, 
        scrollController?:fs.ScrollController, 
        header?:EasyRefreshHeader
        footer?:EasyRefreshFooter, 
        firstRefresh?:boolean, 
        firstRefreshWidget?:fs.Widget, 
        headerIndex?:number, 
        emptyWidget?:fs.Widget, 
        topBouncing?:boolean, 
        bottomBouncing?:boolean, 
        child:fs.Widget, 
      }
   */
  static new(config?: EasyRefresherConfig) {
    return new EasyRefresher(config);
  }
}

//#endregion






