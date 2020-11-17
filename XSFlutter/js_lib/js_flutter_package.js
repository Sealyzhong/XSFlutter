/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Text Widget
 */

let { DartClass, FlutterCallArgs, } = require("./js_flutter_basic_types.js");
let { XSFJSBridge, } = require("./js_flutter_framework.js");
//-------------- L -----------------
//****** XSLoadingApi ******
class XSLoadingApi extends DartClass {

    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorObjectID();

        //创建对应FLutter对象
        var argument = new FlutterCallArgs({
            mirrorID: this.mirrorID,
            className: "XSLoadingApi",
            args: {}
        });

        XSFJSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new XSLoadingApi();
        }
        return this.instance;
      }

    invokeMirrorObjWithCallback(argument){
        let promiseResult = new Promise(function (resolve) {
            XSFJSBridge.invokeMirrorObjWithCallback(argument, function (value) {
                if (value != null) {
                    resolve(value);

                } else {
                    resolve(null);
                }

            });
        }.bind(this));

        return promiseResult;
    }
}
XSLoadingApi.showSuccess = function(status,{duration,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "showSuccess",
        args: {
            status: status,
            duration: duration,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.showError = function(status,{duration,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "showError",
        args: {
            status: status,
            duration: duration,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.showInfo = function(status,{duration,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "showInfo",
        args: {
            status: status,
            duration: duration,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.showToast = function(status,{duration,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "showToast",
        args: {
            status: status,
            duration: duration,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.showProgress = function(value,{status,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "showProgress",
        args: {
            status: status,
            value: value,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.show = function(status,{indicator,alignment} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "show",
        args: {
            status: status,
            indicator: indicator,
            alignment:alignment,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSLoadingApi.dismiss = function({animation} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSLoadingApi.getInstance().mirrorID,
        className: "XSLoadingApi",
        funcName: "dismiss",
        args: {
            animation: animation,
        }
    });
    XSLoadingApi.getInstance().invokeMirrorObjWithCallback(argument);
};

//-------------- S -----------------
//****** XSSpApi ******
class XSSpApi extends DartClass {

    constructor() {
        super();
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorObjectID();

        //创建对应FLutter对象
        var argument = new FlutterCallArgs({
            mirrorID: this.mirrorID,
            className: "XSSpApi",
            args: {}
        });

        XSFJSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    static getInstance() {
        if (!this.instance) {
          this.instance = new XSSpApi();
        }
        return this.instance;
      }

    invokeMirrorObjWithCallback(argument){
        let promiseResult = new Promise(function (resolve) {
            XSFJSBridge.invokeMirrorObjWithCallback(argument, function (value) {
                if (value != null) {
                    resolve(value);

                } else {
                    resolve(null);
                }

            });
        }.bind(this));

        return promiseResult;
    }
}
XSSpApi.getBool = function(key,{defaultValue} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "getBool",
        args: {
            key: key,
            defaultValue: defaultValue,
        }
    });
    return XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.getDouble = function(key,{defaultValue} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "getDouble",
        args: {
            key: key,
            defaultValue: defaultValue,
        }
    });
    return XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.getInt = function(key,{defaultValue} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "getInt",
        args: {
            key: key,
            defaultValue: defaultValue,
        }
    });
    return XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.getString = function(key,{defaultValue} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "getString",
        args: {
            key: key,
            defaultValue: defaultValue,
        }
    });
    return XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.clear = function() {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "clear",
        args: { }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.remove = function() {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "remove",
        args: { }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.putBool = function(key,{value} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "putBool",
        args: {
            key: key,
            value: value,
        }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.putDouble = function(key,{value} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "putDouble",
        args: {
            key: key,
            value: value,
        }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.putInt = function(key,{value} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "putInt",
        args: {
            key: key,
            value: value,
        }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};
XSSpApi.putString = function(key,{value} = {}) {
    let argument = new FlutterCallArgs({
        mirrorID: XSSpApi.getInstance().mirrorID,
        className: "XSSpApi",
        funcName: "putString",
        args: {
            key: key,
            value: value,
        }
    });
    XSSpApi.getInstance().invokeMirrorObjWithCallback(argument);
};

module.exports = {
    XSLoadingApi,XSSpApi,
}
