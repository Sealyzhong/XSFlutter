"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPullToRefreshIndex = void 0;
const fs = require("flutter_sdk");
const classical_demo_1 = require("demo/pull_to_refresh/classical_demo");
const material_demo_1 = require("demo/pull_to_refresh/material_demo");
const water_drop_demo_1 = require("demo/pull_to_refresh/water_drop_demo");
const water_drop_material_demo_1 = require("demo/pull_to_refresh/water_drop_material_demo");
const empty_widget_1 = require("demo/pull_to_refresh/empty_widget");
class MyPullToRefreshIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Pull To Refresh"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("经典样式"),
                        subtitle: fs.Text.new("经典(默认)风格"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return classical_demo_1.MyPullToRefreshClassicalDemoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Material Demo"),
                        subtitle: fs.Text.new("经典(默认)风格Material Demo"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return material_demo_1.MyPullToRefreshMaterialDemoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Water Drop"),
                        subtitle: fs.Text.new("WaterDrop"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return water_drop_demo_1.MyPullToRefreshWaterDropDemoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Water Drop Material"),
                        subtitle: fs.Text.new("Water Drop Material"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return water_drop_material_demo_1.MyPullToRefreshWaterDropMaterialDemoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("5", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Empty Widget"),
                        subtitle: fs.Text.new("空视图"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return empty_widget_1.MyPullToRefreshEmptyWidgetPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyPullToRefreshIndex();
    }
}
exports.MyPullToRefreshIndex = MyPullToRefreshIndex;
