"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const home_page_1 = require("demo/home_page");
const ts_flutter_sdk_1 = require("ts_flutter_sdk");
//import * as xs from "./ts_flutter_sdk";
//import homeWidget = require("demo/home_page");
class MyApp extends ts_flutter_sdk_1.JSFlutterApp {
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {
        ts_flutter_sdk_1.JSLog.log("Widget Name:" + widgetName);
        switch (widgetName) {
            case "MyHomePage": {
                return new home_page_1.MyHomePage();
            }
        }
    }
}
function main(releaseMode) {
    ts_flutter_sdk_1.JSLog.log("main() start up ");
    let app = new MyApp();
    ts_flutter_sdk_1.JSFramework.runApp(app);
}

