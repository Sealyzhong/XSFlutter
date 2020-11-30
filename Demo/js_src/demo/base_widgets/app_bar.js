"use strict";
//import fs = require("flutter_sdk");
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAppBar = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyAppBar extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("基础组件 - AppBar"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("最简单的AppBar"),
                    }),
                    new flutter_sdk_1.AppBar({
                        title: new flutter_sdk_1.Text("NormalAppBar"),
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("标题换色"),
                    }),
                    new flutter_sdk_1.AppBar({
                        title: new flutter_sdk_1.Text('NormalAppBar', {
                            style: new flutter_sdk_1.TextStyle({
                                color: flutter_sdk_1.Colors.white,
                            }),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text('背景换色'),
                    }),
                    new flutter_sdk_1.AppBar({
                        backgroundColor: flutter_sdk_1.Colors.blue,
                        title: new flutter_sdk_1.Text('NormalAppBar', {
                            style: new flutter_sdk_1.TextStyle({
                                color: flutter_sdk_1.Colors.white,
                            }),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text('设置 leading'),
                    }),
                    new flutter_sdk_1.AppBar({
                        leading: new flutter_sdk_1.IconButton({
                            icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.add),
                            onPressed: function () {
                                flutter_sdk_1.Log.log("点击: 设置 leading");
                            },
                        }),
                        title: new flutter_sdk_1.Text('AppBar'),
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text('设置 action'),
                    }),
                    new flutter_sdk_1.AppBar({
                        actions: [
                            new flutter_sdk_1.IconButton({
                                icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.camera),
                                onPressed: function () {
                                    flutter_sdk_1.Log.log("点击: 设置 action");
                                },
                            })
                        ],
                        title: new flutter_sdk_1.Text('AppBar'),
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text('设置多个action'),
                    }),
                    new flutter_sdk_1.AppBar({
                        actions: [
                            new flutter_sdk_1.IconButton({
                                icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.camera),
                                onPressed: function () {
                                    flutter_sdk_1.Log.log("点击: camera");
                                },
                            }),
                            new flutter_sdk_1.IconButton({
                                icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.print),
                                onPressed: function () {
                                    flutter_sdk_1.Log.log("点击: print");
                                },
                            }),
                        ],
                        title: new flutter_sdk_1.Text('AppBar'),
                    }),
                ],
            }),
        });
    }
}
exports.MyAppBar = MyAppBar;
