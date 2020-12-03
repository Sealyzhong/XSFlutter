
//#region ******** Base Api ********

import * as fs from "flutter_sdk";

//****** ShowDialog ******

interface showAboutDialogConfig {
  applicationName?:string;
  applicationVersion?:string;
  applicationIcon?:fs.Widget;
  applicationLegalese?:string;
  children?:Array<fs.Widget>;
  useRootNavigator?:boolean;
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
  static showAboutDialog(config:showAboutDialogConfig){
    ShowDialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
          mirrorID: ShowDialog.getInstance().mirrorID,
          className: ShowDialog.getInstance().className,
          funcName: "showAboutDialog",
          args: config,
      }));
  }

}

//****** Loading ******
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

//****** Sp ******
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


//****** ScreenInfo ******
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

//****** PackageInfo ******
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

//****** Wakelock ******
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

//****** FocusScope ******
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

//****** UrlLauncher ******
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

//#endregion