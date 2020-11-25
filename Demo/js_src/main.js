"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
const xs = require("./js_flutter_sdk");
const homeWidget = require("./counter_page");
class MyApp extends xs.JSFlutterApp {
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {
        xs.JSLog.log("Widget Name:" + widgetName);
        switch (widgetName) {
            case "MyCounterPage": {
                return new homeWidget.MyCounterPage(widgetName);
            }
        }
    }
}
function main(releaseMode) {
    xs.JSLog.log("main() start up ");
    let app = new MyApp();
    xs.JSFramework.runApp(app);
}
