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
        return _MyHomePageState.new(this);
    }
}
exports.MyHomePage = MyHomePage;
class _MyHomePageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    //subclass override
    initState() {
        fs.Log.log("MyHomePage.initState");
        tl.ScreenInfo.updateInfo();
        tl.PackageInfo.updateInfo();
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("TS Demo"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("基础组件"),
                        subtitle: fs.Text.new("Icons、Cupertino、Widgets、App Bar"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_1.MyBaseWidgetsIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("常用实例"),
                        subtitle: fs.Text.new("计数器、图片库"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_3.MyExamplesIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("第三方库"),
                        subtitle: fs.Text.new("Loading、PackageInfo、ScreenInfo..."),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_2.MyPackageIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Dialog"),
                        subtitle: fs.Text.new("常用提示框"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_4.MyDialogIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("5", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("ListView"),
                        subtitle: fs.Text.new("builder、separated、custom"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_5.MyListViewIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("6", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Easy Refresh"),
                        subtitle: fs.Text.new("Flutter应用上实现下拉刷新"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_7.MyEasyRefreshIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("7", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Pull To Refresh"),
                        subtitle: fs.Text.new("Flutter应用上实现下拉刷新"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return index_6.MyPullToRefreshIndex.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("8", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("TS2Project"),
                        subtitle: fs.Text.new("在本工程中实现JS与Project通信息"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    //return MySharedPreferncesPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new(widget) {
        return new _MyHomePageState(widget);
    }
}
