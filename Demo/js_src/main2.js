"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_page_1 = require("demo/home_page");
const fs = require("flutter_sdk");
class MyApp extends fs.JSFlutterApp {
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
function main(releaseMode) {
    fs.Log.log("main() start up ");
    let app = new MyApp();
    fs.JSFramework.runApp(app);
    fs.Future.delayed(new fs.Duration({ milliseconds: 500 }), () => {
        fs.ScreenInfo.getInstance().updateInfo();
        fs.PackageInfo.getInstance().updateInfo();
        fs.PathProvider.getInstance().updateInfo();
    });
}
