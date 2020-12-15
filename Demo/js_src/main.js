
//"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });

const fs = require("flutter_sdk");
const home_page_1 = require("demo/home_page");
class MyApp extends fs.JSFlutterApp {
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {
        fs.Log.log("Widget Name:" + widgetName);
        switch (widgetName) {
            case "MyHomePage": {
                return new home_page_1.MyHomePage();
            }
        }
    }
}
function main() {
    fs.Log.log("main() start up ");
    let app = new MyApp();
    fs.JSFramework.runApp(app);
    fs.ScreenInfo.getInstance().updateInfo();
    fs.PackageInfo.getInstance().updateInfo();
    fs.PathProvider.getInstance().updateInfo();
}
