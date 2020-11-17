//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    XSFlutterApp,
} = require("js_flutter_framework.js");

let {
    JSLog,
    //runApp,
    JSFramework,
} = require("js_framework.js");

//从XSFlutterApp继承自己的App类
class MyApp extends XSFlutterApp {

    ///子类重写,当Flutter通过
    ///XSFlutter.getInstance().navigatorPushWithName("JSWidgetHomePage", ...);push页面时，
    ///在这里根据widgetName 创建你自己的Widget
    ///@overrite
    createJSWidgetWithName(widgetName) {

        switch (widgetName) {
            case "MyJSWidgetHomePage": {
                let homeWidget = require("home_page.js");
                let widget = new homeWidget.MyJSWidgetHomePage(widgetName);
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
}



