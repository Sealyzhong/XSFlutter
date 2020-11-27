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
const moment = require("moment");
const counter_page_1 = require("demo/common_demo/counter_page");
const index_1 = require("demo/base_widgets/index");
const loading_page_1 = require("demo/common_demo/loading_page");
const shared_preferences_page_1 = require("demo/common_demo/shared_preferences_page");
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
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("TS Demo"),
            }),
            body: fs.ListView.new({
                children: [
                    //MySectionTitle.new("通用 Demo"),
                    //new 的写法1
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Flutter Counter"),
                        subtitle: fs.Text.new("Flutter 官方 Demo"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return counter_page_1.MyCounterPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
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
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Loading..."),
                        subtitle: fs.Text.new("showSuccess、showError、showInfo、showToast..."),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return loading_page_1.MyLoadingPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("本地数据存储(shared_preferences)"),
                        subtitle: fs.Text.new("get、set"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return shared_preferences_page_1.MySharedPreferncesPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new(moment().format("yyyy-MM-dd HH:mm")),
                        subtitle: fs.Text.new("get、set"),
                        onTap: function () {
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
