"use strict";
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
exports.EasyRefresher = exports.EasyRefreshController = exports.EasyRefreshMaterialFooter = exports.EasyRefreshClassicalFooter = exports.EasyRefreshFooter = exports.EasyRefreshMaterialHeader = exports.EasyRefreshClassicalHeader = exports.EasyRefreshHeader = exports.CachedNetworkImage = exports.PullToRefreshRefresher = exports.PullToRefreshController = exports.PullToRefreshConfiguration = exports.PullToRefreshClassicFooter = exports.PullToRefreshFooter = exports.PullToRefreshWaterDropMaterialHeader = exports.PullToRefreshMaterialClassicHeader = exports.PullToRefreshWaterDropHeader = exports.PullToRefreshClassicHeader = exports.PullToRefreshHeader = exports.PullToRefreshLoadStyle = exports.PullToRefreshIconPosition = exports.PullToRefreshLoadStatus = exports.PullToRefreshStatus = exports.PullToRefreshStyle = exports.Dio = exports.DioOptions = exports.DioBaseOptions = exports.DioResponseType = exports.UrlLauncher = exports.FocusScope = exports.Wakelock = exports.PackageInfo = exports.ScreenInfo = exports.Sp = exports.Loading = exports.Dialog = exports.ShowSimpleActionSheet = exports.ShowCustomActionSheet = exports.ShowSimpleDialog = exports.ShowSimpleCustomDialog = exports.SimpleCustomDialogButtonInfo = exports.ShowCustomAlertDialog = exports.CustomAlertDialogStyle = exports.CustomAlertDialogButton = exports.CustomAlertDialogAnimationType = exports.SimpleDialogButtonInfo = exports.ShowCupertinoModalPopup = exports.ShowModalBottomSheet = exports.ShowBottomSheet = exports.ShowGeneralDialog = exports.ShowCupertinoDialog = exports.ShowDialog = void 0;
const fs = __importStar(require("flutter_sdk"));
class ShowDialog extends fs.Widget {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useSafeArea?:boolean,
            useRootNavigator?:boolean,
            child:fs.Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useSafeArea = config.useSafeArea;
            this.useRootNavigator = config.useRootNavigator;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          barrierDismissible?:boolean,
          useSafeArea?:boolean,
          useRootNavigator?:boolean,
          child:fs.Widget,
        }
     */
    static new(config) {
        return new ShowDialog(config);
    }
}
exports.ShowDialog = ShowDialog;
class ShowCupertinoDialog extends fs.Widget {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useRootNavigator?:boolean,
            child:fs.CupertinoAlertDialog,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useRootNavigator = config.useRootNavigator;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          barrierDismissible?:boolean,
          useRootNavigator?:boolean,
          child:fs.CupertinoAlertDialog,
        }
     */
    static new(config) {
        return new ShowCupertinoDialog(config);
    }
}
exports.ShowCupertinoDialog = ShowCupertinoDialog;
class ShowGeneralDialog extends fs.Widget {
    /**
       * @param config config:
          {
            barrierDismissible?:boolean,
            useRootNavigator?:boolean,
            barrierLabel?:string,
            barrierColor?:fs.Color,
            transitionDuration?:fs.Duration,
            child:fs.Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.barrierDismissible = config.barrierDismissible;
            this.useRootNavigator = config.useRootNavigator;
            this.barrierLabel = config.barrierLabel;
            this.transitionDuration = config.transitionDuration;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          barrierDismissible?:boolean,
          useRootNavigator?:boolean,
          barrierLabel?:string,
          barrierColor?:fs.Color,
          transitionDuration?:fs.Duration,
          child:fs.Widget,
        }
     */
    static new(config) {
        return new ShowGeneralDialog(config);
    }
}
exports.ShowGeneralDialog = ShowGeneralDialog;
class ShowBottomSheet extends fs.Widget {
    /**
       * @param config config:
          {
            backgroundColor?:fs.Color,
            elevation?:number,
            shape?:fs.ShapeBorder,
            clipBehavior?:fs.Clip,
            child:fs.Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          backgroundColor?:fs.Color,
          elevation?:number,
          shape?:fs.ShapeBorder,
          clipBehavior?:fs.Clip,
          child:fs.Widget,
        }
     */
    static new(config) {
        return new ShowBottomSheet(config);
    }
}
exports.ShowBottomSheet = ShowBottomSheet;
class ShowModalBottomSheet extends fs.Widget {
    /**
       * @param config config:
          {
            backgroundColor?:fs.Color,
            elevation?:number,
            shape?:fs.ShapeBorder,
            clipBehavior?:fs.Clip,
            barrierColor?:fs.Color,
            isScrollControlled?:boolean;,
            useRootNavigator?:boolean,
            isDismissible?:boolean,
            enableDrag?:boolean,
            child?:fs.Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.backgroundColor = config.backgroundColor;
            this.elevation = config.elevation;
            this.shape = config.shape;
            this.clipBehavior = config.clipBehavior;
            this.barrierColor = config.barrierColor;
            this.isScrollControlled = config.isScrollControlled;
            this.useRootNavigator = config.useRootNavigator;
            this.isDismissible = config.isDismissible;
            this.enableDrag = config.enableDrag;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          backgroundColor?:fs.Color,
          elevation?:number,
          shape?:fs.ShapeBorder,
          clipBehavior?:fs.Clip,
          barrierColor?:fs.Color,
          isScrollControlled?:boolean;,
          useRootNavigator?:boolean,
          isDismissible?:boolean,
          enableDrag?:boolean,
          child?:fs.Widget,
        }
     */
    static new(config) {
        return new ShowModalBottomSheet(config);
    }
}
exports.ShowModalBottomSheet = ShowModalBottomSheet;
class ShowCupertinoModalPopup extends fs.Widget {
    /**
       * @param config config:
          {
            useRootNavigator?:boolean,
            semanticsDismissible?:boolean,
            child:fs.Widget,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.useRootNavigator = config.useRootNavigator;
            this.semanticsDismissible = config.semanticsDismissible;
            this.child = config.child;
        }
    }
    /**
     * @param config config:
        {
          useRootNavigator?:boolean,
          semanticsDismissible?:boolean,
          child:fs.Widget,
        }
     */
    static new(config) {
        return new ShowCupertinoModalPopup(config);
    }
}
exports.ShowCupertinoModalPopup = ShowCupertinoModalPopup;
class SimpleDialogButtonInfo extends fs.Widget {
    /**
       * @param config config:
          {
            title?:string,
            textStyle?:fs.TextStyle,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.text = config.text;
            this.textStyle = config.textStyle;
        }
    }
    /**
     * @param config config:
        {
          title?:string,
          textStyle?:fs.TextStyle,
        }
     */
    static new(config) {
        return new SimpleDialogButtonInfo(config);
    }
}
exports.SimpleDialogButtonInfo = SimpleDialogButtonInfo;
//****** CustomAlertDialogAnimationType ******
var CustomAlertDialogAnimationType;
(function (CustomAlertDialogAnimationType) {
    CustomAlertDialogAnimationType["fromRight"] = "fromRight";
    CustomAlertDialogAnimationType["fromLeft"] = "fromLeft";
    CustomAlertDialogAnimationType["fromTop"] = "fromTop";
    CustomAlertDialogAnimationType["fromBottom"] = "fromBottom";
    CustomAlertDialogAnimationType["grow"] = "grow";
    CustomAlertDialogAnimationType["shrink"] = "shrink";
})(CustomAlertDialogAnimationType = exports.CustomAlertDialogAnimationType || (exports.CustomAlertDialogAnimationType = {}));
class CustomAlertDialogButton extends fs.Widget {
    /**
       * @param config config:
          {
            child?:fs.Widget,
            width?:number,
            height?:number,
            bgColor?:fs.Color,
            gradient?:fs.Gradient,
            radius?:fs.BorderRadius,
            onPressed?:fs.VoidCallback,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.child = config.child;
            this.width = config.width;
            this.height = config.height;
            this.bgColor = config.bgColor;
            this.gradient = config.gradient;
            this.radius = config.radius;
            this.onPressed = config.onPressed;
        }
    }
    /**
     * @param config config:
        {
          child?:fs.Widget,
          width?:number,
          height?:number,
          bgColor?:fs.Color,
          gradient?:fs.Gradient,
          radius?:fs.BorderRadius,
          onPressed?:fs.VoidCallback,
        }
     */
    static new(config) {
        return new CustomAlertDialogButton(config);
    }
}
exports.CustomAlertDialogButton = CustomAlertDialogButton;
class CustomAlertDialogStyle extends fs.Widget {
    /**
       * @param config config:
          {
            animationType?:CustomAlertDialogAnimationType,
            animationDuration?:fs.Duration,
            alertBorder?:fs.ShapeBorder,
            isCloseButton?:boolean,
            isOverlayTapDismiss?:boolean,
            backgroundColor?:fs.Color,
            overlayColor?:fs.Color,
            buttonSpace?:number,
            titleHeight?:number,
            titleStyle?:fs.TextStyle,
            descStyle?:fs.TextStyle,
            buttonAreaPadding?:fs.EdgeInsets,
            constraints?:fs.BoxConstraints,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.animationType = config.animationType;
            this.animationDuration = config.animationDuration;
            this.alertBorder = config.alertBorder;
            this.isCloseButton = config.isCloseButton;
            this.isOverlayTapDismiss = config.isOverlayTapDismiss;
            this.backgroundColor = config.backgroundColor;
            this.overlayColor = config.overlayColor;
            this.buttonSpace = config.buttonSpace;
            this.titleHeight = config.titleHeight;
            this.titleStyle = config.titleStyle;
            this.descStyle = config.descStyle;
            this.buttonAreaPadding = config.buttonAreaPadding;
            this.constraints = config.constraints;
        }
    }
    /**
     * @param config config:
        {
          animationType?:CustomAlertDialogAnimationType,
          animationDuration?:fs.Duration,
          alertBorder?:fs.ShapeBorder,
          isCloseButton?:boolean,
          isOverlayTapDismiss?:boolean,
          backgroundColor?:fs.Color,
          overlayColor?:fs.Color,
          buttonSpace?:number,
          titleHeight?:number,
          titleStyle?:fs.TextStyle,
          descStyle?:fs.TextStyle,
          buttonAreaPadding?:fs.EdgeInsets,
          constraints?:fs.BoxConstraints,
        }
     */
    static new(config) {
        return new CustomAlertDialogStyle(config);
    }
}
exports.CustomAlertDialogStyle = CustomAlertDialogStyle;
class ShowCustomAlertDialog extends fs.Widget {
    /**
       * @param config config:
          {
            style?:CustomAlertDialogStyle,
            image?:fs.Widget,
            title?:string,
            desc?:string,
            content?:fs.Widget,
            buttons?:Array<CustomAlertDialogButton>,
            closeFunction?:fs.VoidCallback,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.style = config.style;
            this.image = config.image;
            this.title = config.title;
            this.desc = config.desc;
            this.content = config.content;
            this.buttons = config.buttons;
            this.closeFunction = config.closeFunction;
        }
    }
    /**
     * @param config config:
        {
          style?:CustomAlertDialogStyle,
          image?:fs.Widget,
          title?:string,
          desc?:string,
          content?:fs.Widget,
          buttons?:Array<CustomAlertDialogButton>,
          closeFunction?:fs.VoidCallback,
        }
     */
    static new(config) {
        return new ShowCustomAlertDialog(config);
    }
}
exports.ShowCustomAlertDialog = ShowCustomAlertDialog;
class SimpleCustomDialogButtonInfo extends fs.Widget {
    /**
       * @param config config:
          {
            title?:string,
            textStyle?:fs.TextStyle,
            bgColor?:fs.Color,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.text = config.text;
            this.textStyle = config.textStyle;
            this.bgColor = config.bgColor;
        }
    }
    /**
     * @param config config:
        {
          title?:string,
          textStyle?:fs.TextStyle,
          bgColor?:fs.Color,
        }
     */
    static new(config) {
        return new SimpleCustomDialogButtonInfo(config);
    }
}
exports.SimpleCustomDialogButtonInfo = SimpleCustomDialogButtonInfo;
class ShowSimpleCustomDialog extends fs.Widget {
    /**
       * @param config config:
          {
            style?:CustomAlertDialogStyle,
            image?:fs.Widget,
            title?:string,
            desc?:string,
            content?:fs.Widget,
            buttons?:Array<CustomDialogButtonInfo>,
            onTap?:fs.VoidCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.style = config.style;
            this.image = config.image;
            this.title = config.title;
            this.desc = config.desc;
            this.content = config.content;
            this.buttons = config.buttons;
            this.onTap = config.onTap;
        }
    }
    /**
     * @param config config:
        {
          style?:CustomAlertDialogStyle,
          image?:fs.Widget,
          title?:string,
          desc?:string,
          content?:fs.Widget,
          buttons?:Array<CustomDialogButtonInfo>,
          onTap?:fs.VoidCallbackNumber,
        }
     */
    static new(config) {
        return new ShowSimpleCustomDialog(config);
    }
}
exports.ShowSimpleCustomDialog = ShowSimpleCustomDialog;
class ShowSimpleDialog extends fs.Widget {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:fs.Widget,
            desc?:string,
            descContent?:fs.Widget,
            buttons:Array<SimpleDialogButtonInfo>,
            onTap?:fs.VoidCallbackNumber,
            barrierDismissible?:boolean,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.desc = config.desc;
            this.descContent = config.descContent;
            this.buttons = config.buttons;
            this.onTap = config.onTap;
            this.barrierDismissible = config.barrierDismissible;
        }
    }
    /**
     * @param config config:
        {
          title?:string,
          titleContent?:fs.Widget,
          desc?:string,
          descContent?:fs.Widget,
          buttons:Array<SimpleDialogButtonInfo>,
          onTap?:fs.VoidCallbackNumber,
          barrierDismissible?:boolean,
        }
     */
    static new(config) {
        return new ShowSimpleDialog(config);
    }
}
exports.ShowSimpleDialog = ShowSimpleDialog;
class ShowCustomActionSheet extends fs.Widget {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:fs.Widget,
            itemList:Array<string>,
            onTap:fs.VoidCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.itemList = config.itemList;
            this.onTap = config.onTap;
        }
    }
    /**
     * @param config config:
        {
          title?:string,
          titleContent?:fs.Widget,
          itemList:Array<string>,
          onTap:fs.VoidCallbackNumber,
        }
     */
    static new(config) {
        return new ShowCustomActionSheet(config);
    }
}
exports.ShowCustomActionSheet = ShowCustomActionSheet;
class ShowSimpleActionSheet extends fs.Widget {
    /**
       * @param config config:
          {
            title?:string,
            titleContent?:fs.Widget,
            itemList:Array<string>,
            onTap:fs.VoidCallbackNumber,
          }
       */
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.title = config.title;
            this.titleContent = config.titleContent;
            this.itemList = config.itemList;
            this.onTap = config.onTap;
        }
    }
    /**
     * @param config config:
        {
          title?:string,
          titleContent?:fs.Widget,
          itemList:Array<string>,
          onTap:fs.VoidCallbackNumber,
        }
     */
    static new(config) {
        return new ShowSimpleActionSheet(config);
    }
}
exports.ShowSimpleActionSheet = ShowSimpleActionSheet;
class Dialog extends fs.DartClass {
    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();
        //创建对应FLutter对象
        this.createMirrorObj();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Dialog();
        }
        return this.instance;
    }
    //显示简单选择
    _show(baseWidget, funcName, child) {
        Dialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            widgetID: String(baseWidget.widgetID),
            mirrorID: Dialog.getInstance().mirrorID,
            className: Dialog.getInstance().className,
            funcName: funcName,
            args: {
                widgetID: String(baseWidget.widgetID),
                child: baseWidget.helper.buildWidgetTreeSubWidget(child),
            },
        }));
    }
    static showDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showDialog", child);
    }
    static showCupertinoDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showCupertinoDialog", child);
    }
    static showGeneralDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showGeneralDialog", child);
    }
    static showBottomSheet(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showBottomSheet", child);
    }
    static showModalBottomSheet(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showBottshowModalBottomSheetomSheet", child);
    }
    static showCupertinoModalPopup(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showCupertinoModalPopup", child);
    }
    static showCustomActionSheet(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showCustomActionSheet", child);
    }
    static showSimpleActionSheet(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showSimpleActionSheet", child);
    }
    static showSimpleCupertinoDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showSimpleCupertinoDialog", child);
    }
    static showSimpleAlertDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showSimpleAlertDialog", child);
    }
    static showSimpleCustomDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showSimpleCustomDialog", child);
    }
    static showCustomAlertDialog(baseWidget, child) {
        Dialog.getInstance()._show(baseWidget, "showCustomAlertDialog", child);
    }
    static dismiss(baseWidget) {
        Dialog.getInstance().invokeMirrorObjWithCallback(fs.JSCallConfig.new({
            widgetID: String(baseWidget.widgetID),
            mirrorID: Dialog.getInstance().mirrorID,
            className: Dialog.getInstance().className,
            funcName: "dismiss",
            args: {
                widgetID: String(baseWidget.widgetID),
            },
        }));
    }
}
exports.Dialog = Dialog;
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
//#endregion
//#region ****** ScreenInfo ******
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
//#endregion
//#region ****** PackageInfo ******
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
//#endregion
//#region ****** Wakelock ******
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
//#endregion
//#region ****** FocusScope ******
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
//#region ******** PullToRefresh ********
//****** PullToRefreshStyle ******
var PullToRefreshStyle;
(function (PullToRefreshStyle) {
    PullToRefreshStyle["Behind"] = "Behind";
    PullToRefreshStyle["UnFollow"] = "UnFollow";
    PullToRefreshStyle["Follow"] = "Follow";
    PullToRefreshStyle["Front"] = "Front";
})(PullToRefreshStyle = exports.PullToRefreshStyle || (exports.PullToRefreshStyle = {}));
//****** PullToRefreshStatus ******
var PullToRefreshStatus;
(function (PullToRefreshStatus) {
    PullToRefreshStatus["idle"] = "idle";
    PullToRefreshStatus["canRefresh"] = "canRefresh";
    PullToRefreshStatus["refreshing"] = "refreshing";
    PullToRefreshStatus["completed"] = "completed";
    PullToRefreshStatus["failed"] = "failed";
    PullToRefreshStatus["canTwoLevel"] = "canTwoLevel";
    PullToRefreshStatus["twoLevelOpening"] = "twoLevelOpening";
    PullToRefreshStatus["twoLeveling"] = "twoLeveling";
    PullToRefreshStatus["twoLevelClosing"] = "twoLevelClosing";
})(PullToRefreshStatus = exports.PullToRefreshStatus || (exports.PullToRefreshStatus = {}));
//****** PullToRefreshLoadStatus ******
var PullToRefreshLoadStatus;
(function (PullToRefreshLoadStatus) {
    PullToRefreshLoadStatus["idle"] = "idle";
    PullToRefreshLoadStatus["canLoading"] = "canLoading";
    PullToRefreshLoadStatus["loading"] = "loading";
    PullToRefreshLoadStatus["noMore"] = "noMore";
    PullToRefreshLoadStatus["failed"] = "failed";
})(PullToRefreshLoadStatus = exports.PullToRefreshLoadStatus || (exports.PullToRefreshLoadStatus = {}));
//****** PullToRefreshIconPosition ******
var PullToRefreshIconPosition;
(function (PullToRefreshIconPosition) {
    PullToRefreshIconPosition["left"] = "left";
    PullToRefreshIconPosition["right"] = "right";
    PullToRefreshIconPosition["top"] = "top";
    PullToRefreshIconPosition["bottom"] = "bottom";
})(PullToRefreshIconPosition = exports.PullToRefreshIconPosition || (exports.PullToRefreshIconPosition = {}));
//****** PullToRefreshLoadStyle ******
var PullToRefreshLoadStyle;
(function (PullToRefreshLoadStyle) {
    PullToRefreshLoadStyle["ShowAlways"] = "ShowAlways";
    PullToRefreshLoadStyle["HideAlways"] = "HideAlways";
    PullToRefreshLoadStyle["ShowWhenLoading"] = "ShowWhenLoading";
})(PullToRefreshLoadStyle = exports.PullToRefreshLoadStyle || (exports.PullToRefreshLoadStyle = {}));
class PullToRefreshHeader extends fs.Widget {
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
    static classic(config) {
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
    static waterDrop(config) {
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
    static materialClassic(config) {
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
    static waterDropMaterial(config) {
        return new PullToRefreshWaterDropMaterialHeader(config);
    }
}
exports.PullToRefreshHeader = PullToRefreshHeader;
class PullToRefreshClassicHeader extends PullToRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshClassicHeader(config);
    }
}
exports.PullToRefreshClassicHeader = PullToRefreshClassicHeader;
class PullToRefreshWaterDropHeader extends PullToRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshWaterDropHeader(config);
    }
}
exports.PullToRefreshWaterDropHeader = PullToRefreshWaterDropHeader;
class PullToRefreshMaterialClassicHeader extends PullToRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshMaterialClassicHeader(config);
    }
}
exports.PullToRefreshMaterialClassicHeader = PullToRefreshMaterialClassicHeader;
class PullToRefreshWaterDropMaterialHeader extends PullToRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshWaterDropMaterialHeader(config);
    }
}
exports.PullToRefreshWaterDropMaterialHeader = PullToRefreshWaterDropMaterialHeader;
class PullToRefreshFooter extends fs.Widget {
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
    static classic(config) {
        return new PullToRefreshClassicFooter(config);
    }
}
exports.PullToRefreshFooter = PullToRefreshFooter;
class PullToRefreshClassicFooter extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshClassicFooter(config);
    }
}
exports.PullToRefreshClassicFooter = PullToRefreshClassicFooter;
class PullToRefreshConfiguration extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshConfiguration(config);
    }
}
exports.PullToRefreshConfiguration = PullToRefreshConfiguration;
class PullToRefreshController extends fs.DartClass {
    /**
     * @param config config:
        {
          initialRefreshStatus?:PullToRefreshStatus,
          initialRefresh?:boolean,
          initialLoadStatus?:PullToRefreshLoadStatus,
        }
     */
    constructor(config) {
        super();
        this.createMirrorID();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshController(config);
    }
    dispose() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "dispose",
        }));
    }
    loadComplete() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadComplete",
        }));
    }
    loadFailed() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadFailed",
        }));
    }
    loadNoData() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "loadNoData",
        }));
    }
    /**
     * @param config config:
        {
          resetFooterState?:boolean;
        }
     */
    refreshCompleted(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshCompleted",
            args: config
        }));
    }
    refreshFailed() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshFailed",
        }));
    }
    refreshToIdle() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "refreshToIdle",
        }));
    }
    /**
     * @param config config:
        {
          duration?:fs.Duration,
          needMove?:boolean,
          curve?:fs.Curve,
        }
     */
    requestLoading(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestLoading",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:fs.Duration,
          needMove?:boolean,
          curve?:fs.Curve,
        }
     */
    requestRefresh(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:fs.Duration,
          curve?:fs.Curve,
        }
     */
    requestTwoLevel(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "requestTwoLevel",
            args: config
        }));
    }
    resetNoData() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetNoData",
        }));
    }
    /**
     * @param config config:
        {
          duration?:fs.Duration,
          curve?:fs.Curve,
        }
     */
    twoLevelComplete(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "twoLevelComplete",
            args: config
        }));
    }
}
exports.PullToRefreshController = PullToRefreshController;
class PullToRefreshRefresher extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new PullToRefreshRefresher(config);
    }
}
exports.PullToRefreshRefresher = PullToRefreshRefresher;
class CachedNetworkImage extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
            this.filterQuality = config.filterQuality;
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
    static new(config) {
        return new CachedNetworkImage(config);
    }
}
exports.CachedNetworkImage = CachedNetworkImage;
//#endregion
//#region ******** EasyRefresh ********
class EasyRefreshHeader extends fs.Widget {
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
    static classical(config) {
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
    static material(config) {
        return new EasyRefreshMaterialHeader(config);
    }
}
exports.EasyRefreshHeader = EasyRefreshHeader;
class EasyRefreshClassicalHeader extends EasyRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new EasyRefreshClassicalHeader(config);
    }
}
exports.EasyRefreshClassicalHeader = EasyRefreshClassicalHeader;
class EasyRefreshMaterialHeader extends EasyRefreshHeader {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.displacement = config.displacement;
            this.backgroundColor = config.backgroundColor;
            this.completeDuration = config.completeDuration;
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
    static new(config) {
        return new EasyRefreshMaterialHeader(config);
    }
}
exports.EasyRefreshMaterialHeader = EasyRefreshMaterialHeader;
class EasyRefreshFooter extends fs.Widget {
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
    static classical(config) {
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
    static material(config) {
        return new EasyRefreshMaterialFooter(config);
    }
}
exports.EasyRefreshFooter = EasyRefreshFooter;
class EasyRefreshClassicalFooter extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new EasyRefreshClassicalFooter(config);
    }
}
exports.EasyRefreshClassicalFooter = EasyRefreshClassicalFooter;
class EasyRefreshMaterialFooter extends EasyRefreshFooter {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
            this.key = config.key;
            this.displacement = config.displacement;
            this.backgroundColor = config.backgroundColor;
            this.completeDuration = config.completeDuration;
            this.enableHapticFeedback = config.enableHapticFeedback;
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
    static new(config) {
        return new EasyRefreshMaterialFooter(config);
    }
}
exports.EasyRefreshMaterialFooter = EasyRefreshMaterialFooter;
class EasyRefreshController extends fs.DartClass {
    constructor() {
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
    callRefresh(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "callRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          duration?:fs.Duration,
        }
     */
    callLoad(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "callLoad",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          success?:boolean,
          noMore?:boolean,
        }
     */
    finishRefresh(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "finishRefresh",
            args: config
        }));
    }
    /**
     * @param config config:
        {
          success?:boolean,
          noMore?:boolean,
        }
     */
    finishLoad(config) {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "finishLoad",
            args: config
        }));
    }
    resetRefreshState() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetRefreshState",
        }));
    }
    resetLoadState() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "resetLoadState",
        }));
    }
    dispose() {
        fs.JSFramework.invokeFlutterFunction(fs.JSCallConfig.new({
            mirrorID: this.mirrorID,
            className: this.className,
            funcName: "dispose",
        }));
    }
}
exports.EasyRefreshController = EasyRefreshController;
class EasyRefresher extends fs.Widget {
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
    constructor(config) {
        super();
        if (config != null && config != undefined) {
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
    static custom(config) {
        var v = new EasyRefresher();
        if (config != null && config != undefined) {
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
    static new(config) {
        return new EasyRefresher(config);
    }
}
exports.EasyRefresher = EasyRefresher;
//#endregion
