
import { MyHomePage } from "demo/home_page";
import fs = require("flutter_sdk");
import { duration } from "moment";

class MyApp extends fs.JSFlutterApp{
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
    fs.Future.delayed(new fs.Duration({milliseconds:500}),
    ()=>{
        fs.ScreenInfo.getInstance().updateInfo();
        fs.PackageInfo.getInstance().updateInfo();
        fs.PathProvider.getInstance().updateInfo();
    });
}