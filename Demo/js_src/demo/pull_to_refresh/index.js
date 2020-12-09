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
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Pull To Refresh"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("经典样式"),
                        subtitle: new fs.Text("经典(默认)风格"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new classical_demo_1.MyPullToRefreshClassicalDemoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Material Demo"),
                        subtitle: new fs.Text("经典(默认)风格Material Demo"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new material_demo_1.MyPullToRefreshMaterialDemoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Water Drop"),
                        subtitle: new fs.Text("WaterDrop"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new water_drop_demo_1.MyPullToRefreshWaterDropDemoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("4", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Water Drop Material"),
                        subtitle: new fs.Text("Water Drop Material"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new water_drop_material_demo_1.MyPullToRefreshWaterDropMaterialDemoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("5", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Empty Widget"),
                        subtitle: new fs.Text("空视图"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new empty_widget_1.MyPullToRefreshEmptyWidgetPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyPullToRefreshIndex = MyPullToRefreshIndex;
