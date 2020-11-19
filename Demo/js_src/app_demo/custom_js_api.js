//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.


let {
    JSWidgetState,
    JSStatefulWidget,
    Scaffold,
    ListTile,
    AppBar,
    Text,
    Icon,
    EdgeInsets,
    Colors,
    TextStyle,
    ListView,
    Padding,
    Icons  } = require("js_flutter.js");

let { DartClass, FlutterCallArgs } = require("./js_flutter_basic_types.js");
let { JSBridge } = require("./js_flutter_framework.js");



class CustomJSApi extends DartClass {

    constructor() {
        super("CustomJSApi");
        //Mirror对象在构造函数创建 MirrorID
        this.createMirrorID();

        //创建对应FLutter对象
        var argument = new FlutterCallArgs({
            mirrorID: this.mirrorID,
            className: "CustomJSApi",
            args: {
                "key": 123
            }
        });

        JSBridge.createMirrorObj(argument, this.mirrorID, this);
    }

    //封装getMyAppName
    getMyAppName(platform, { v } = {}) {

        let argument = new FlutterCallArgs({
            mirrorID: this.mirrorID,
            className: "CustomJSApi",
            funcName: "getMyAppName",
            args: {
                platform: platform,
                v: v,
            }
        });

       return this.invokeMirrorObjWithCallback(argument);
    }

    invokeMirrorObjWithCallback(argument){
        let promiseResult = new Promise(function (resolve) {
            JSBridge.invokeMirrorObjWithCallback(argument, function (value) {
                if (value != null) {
                    resolve(value);

                } else {
                    resolve(null);
                }

            });
        }.bind(this));

        return promiseResult;
    }

}


//使用CustomJSApi
let g_jsApi = new CustomJSApi();

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleJSApi extends JSStatefulWidget {
    constructor() {
        super("PageExampleJSApi");

    }

    createState() {
        return new PageExampleJSApiState(this);
    }
}

class PageExampleJSApiState extends JSWidgetState {
    constructor() {
        super("PageExampleJSApiState");
        this.response = "点击小人Run上面的代码";
    }

    codeText() {
        return "let result = await this.jsApi.getMyAppName('iOS', {v:'1.0'})";
    }

    build() {
        let widget = new Scaffold({
            appBar: new AppBar({
                title: new Text("CustomJSApi Example"),
            }),
            body: new ListView({
                children: [
                    new SectionTitle("Code 调用Dart CustomJSApi.getMyAppName"),
                    new ListTile({
                        trailing: new Icon(Icons["directions_run"]),
                        title: new Text(this.codeText(), {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                        onTap: async function () {

                            //call js api
                            let result = await g_jsApi.getMyAppName("iOS", { v: "1.0" });

                            this.setState(function () {

                                this.response = result;

                            }.bind(this));

                        }.bind(this)
                    }),
                    new SectionTitle("JSApi Result"),

                    new Padding({
                        padding: EdgeInsets.all(10),
                        child: new Text(this.response, {
                            style: new TextStyle({
                                color: Colors.gray,
                            })
                        }),
                    })

                ],
            })
        });
        return widget;
    }
}

module.exports = {
    PageExampleJSApi,
};