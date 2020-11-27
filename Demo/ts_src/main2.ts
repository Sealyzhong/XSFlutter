
import { MyHomePage } from "demo/home_page";
import fs = require("flutter_sdk");
//import homeWidget = require("demo/home_page");

class MyApp extends fs.JSFlutterApp{
    
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName?:string) {
        fs.Log.log("Widget Name:"+widgetName);
        switch (widgetName) {
            case "MyHomePage": {
                return new MyHomePage();
            }
        }
    }
}

function main(releaseMode?:boolean) {
    fs.Log.log("main() start up ");
    let app = new MyApp();    
    fs.JSFramework.runApp(app);
}