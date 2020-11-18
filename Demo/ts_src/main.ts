
import js = require("./js_flutter_sdk"); 
class MyApp extends js.JSFlutterApp{
    
    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName?:string) {
        js.JSLog.log("Widget Name:"+widgetName);

    }
}

function main(releaseMode?:boolean) {
    js.JSLog.log("main() start up ");
    let app = new MyApp();
    js.JSFramework.runApp(app);
}

/*
let {
    JSLog,
    JSFramework,
    JSFlutterApp,
} = require("js_flutter_sdk");

//从XSFlutterApp继承自己的App类
class MyApp extends JSFlutterApp {

    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {

        switch (widgetName) {
            case "MyJSWidgetHomePage": {
                let homeWidget =  require("./app_demo/component/section_title.js");
                let widget = new homeWidget.SectionTitle(widgetName);
                return widget;
            }
            case "XXXYouPage": {
                let homeWidget = require("home_page.js");
                let widget = new homeWidget.JSWidgetHomePage(widgetName);
                return widget;
            }
        }


    }
}


function main(releaseMode) {
    JSLog.log("main() start up ");

    let app = new MyApp;
    JSFramework.runApp(app);
}*/
