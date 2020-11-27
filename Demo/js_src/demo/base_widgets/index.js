"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBaseWidgetsIndex = void 0;
const fs = require("flutter_sdk");
const app_bar_1 = require("demo/base_widgets/app_bar");
const cupertino_icons_1 = require("demo/base_widgets/cupertino_icons");
const material_icons_1 = require("demo/base_widgets/material_icons");
class MyBaseWidgetsIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("基础组件"),
            }),
            body: fs.ListView.new({
                children: [
                    //MySectionTitle.new("通用 Demo"),
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Material Icons"),
                        subtitle: fs.Text.new("安卓(原生)风格图标"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return material_icons_1.MyMaterialIcons.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Cupertino Icons"),
                        subtitle: fs.Text.new("苹果风格图标"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return cupertino_icons_1.MyCupertinoIcons.new();
                                }
                            }));
                        }
                    }),
                    //new 的写法2
                    new fs.ListTile({
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("AppBar"),
                        subtitle: new fs.Text("基础组件 - AppBar"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return new app_bar_1.MyAppBar();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyBaseWidgetsIndex();
    }
}
exports.MyBaseWidgetsIndex = MyBaseWidgetsIndex;
