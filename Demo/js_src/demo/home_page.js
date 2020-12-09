"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHomePage = void 0;
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
const index_1 = require("demo/base_widgets/index");
const index_2 = require("demo/packages/index");
const index_3 = require("demo/examples/index");
const index_4 = require("demo/dialog/index");
const index_5 = require("demo/listview/index");
const index_6 = require("demo/pull_to_refresh/index");
const index_7 = require("demo/easy_refresh/index");
class MyHomePage extends fs.StatefulWidget {
    createState() {
        return new _MyHomePageState(this);
    }
}
exports.MyHomePage = MyHomePage;
class _MyHomePageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    //subclass override
    initState() {
        fs.Log.log("MyHomePage.initState");
        tl.ScreenInfo.updateInfo();
        tl.PackageInfo.updateInfo();
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("TS Demo"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("基础组件"),
                        subtitle: new fs.Text("Icons、Cupertino、Widgets、App Bar"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_1.MyBaseWidgetsIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("常用实例"),
                        subtitle: new fs.Text("计数器、图片库"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_3.MyExamplesIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("第三方库"),
                        subtitle: new fs.Text("Loading、PackageInfo、ScreenInfo..."),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_2.MyPackageIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("4", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Dialog"),
                        subtitle: new fs.Text("常用提示框"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_4.MyDialogIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("5", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("ListView"),
                        subtitle: new fs.Text("builder、separated、custom"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_5.MyListViewIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("6", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Easy Refresh"),
                        subtitle: new fs.Text("Flutter应用上实现下拉刷新"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_7.MyEasyRefreshIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("7", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Pull To Refresh"),
                        subtitle: new fs.Text("Flutter应用上实现下拉刷新"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new index_6.MyPullToRefreshIndex();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("8", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("TS2Project"),
                        subtitle: new fs.Text("在本工程中实现JS与Project通信息"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    //return MySharedPreferncesPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
