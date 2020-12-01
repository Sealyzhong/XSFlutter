"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPackageIndex = void 0;
const fs = require("flutter_sdk");
const loading_page_1 = require("demo/packages/loading_page");
const shared_preferences_page_1 = require("demo/packages/shared_preferences_page");
const screen_info_page_1 = require("demo/packages/screen_info_page");
const package_info_page_1 = require("demo/packages/package_info_page");
const wakelock_page_1 = require("demo/packages/wakelock_page");
const url_laucher_page_1 = require("demo/packages/url_laucher_page");
class MyPackageIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("第三方包"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
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
                        leading: fs.Text.new("2", { style: this._style }),
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
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("屏幕信息(ScreenInfo)"),
                        subtitle: fs.Text.new("宽、高、密度、像素"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return screen_info_page_1.MyScreenInfoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("包信息(PackageInfo)"),
                        subtitle: fs.Text.new("版本信息、包信息"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return package_info_page_1.MyPackageInfoPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("5", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("wakelock"),
                        subtitle: fs.Text.new("enable、disable、isEnabled"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return wakelock_page_1.MyWakelockPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("6", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Url Launcher"),
                        subtitle: fs.Text.new("enable、disable、isEnabled"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return url_laucher_page_1.MyUrlLaucherPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyPackageIndex();
    }
}
exports.MyPackageIndex = MyPackageIndex;
