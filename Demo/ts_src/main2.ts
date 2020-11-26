



import { MyHomePage } from "demo/home_page";
import { JSFlutterApp, JSFramework, JSLog } from "ts_flutter_sdk";
//import * as xs from "./ts_flutter_sdk";
//import homeWidget = require("demo/home_page");

class MyApp extends JSFlutterApp{
    
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName?:string) {
        JSLog.log("Widget Name:"+widgetName);
        switch (widgetName) {
            case "MyHomePage": {
                return new MyHomePage();
            }
        }

    }
}

function main(releaseMode?:boolean) {
    JSLog.log("main() start up ");
    let app = new MyApp();    
    JSFramework.runApp(app);
}