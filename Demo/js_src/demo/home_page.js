"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHomePage = void 0;
const ts_flutter_sdk_1 = require("ts_flutter_sdk");
const section_title_1 = require("demo/widgets/section_title");
const color_util_1 = require("demo/utils/color_util");
const counter_page_1 = require("demo/common_demo/counter_page");
const material_icons_1 = require("demo/common_demo/material_icons");
const cupertino_icons_1 = require("demo/common_demo/cupertino_icons");
class MyHomePage extends ts_flutter_sdk_1.JSStatefulWidget {
    createState() {
        return _MyHomePageState.new(this);
    }
}
exports.MyHomePage = MyHomePage;
class _MyHomePageState extends ts_flutter_sdk_1.JSWidgetState {
    build(context) {
        return ts_flutter_sdk_1.Scaffold.new({
            appBar: ts_flutter_sdk_1.AppBar.new({
                title: ts_flutter_sdk_1.Text.new("TS Demo"),
            }),
            body: ts_flutter_sdk_1.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("通用 Demo"),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Flutter Counter"),
                        subtitle: ts_flutter_sdk_1.Text.new("Flutter 官方 Demo"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return counter_page_1.MyCounterPage.new();
                                }
                            }));
                        }
                    }),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Material Icons"),
                        subtitle: ts_flutter_sdk_1.Text.new("安卓(原生)风格图标"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return material_icons_1.MyMaterialIcons.new();
                                }
                            }));
                        }
                    }),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Cupertino Icons"),
                        subtitle: ts_flutter_sdk_1.Text.new("苹果风格图标"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return cupertino_icons_1.MyCupertinoIcons.new();
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
