"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeWidget = require("./counter_page");
const js_flutter_sdk_1 = require("./js_flutter_sdk");
class MyApp extends js_flutter_sdk_1.JSFlutterApp {
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {
        js_flutter_sdk_1.JSLog.log("Widget Name:" + widgetName);
        switch (widgetName) {
            case "MyCounterPage": {
                return new homeWidget.MyCounterPage(widgetName);
            }
        }
    }
}
function main(releaseMode) {
    js_flutter_sdk_1.JSLog.log("main() start up ");
    let app = new MyApp();
    js_flutter_sdk_1.JSFramework.runApp(app);
}
