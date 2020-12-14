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
const dio_page_1 = require("demo/packages/dio_page");
const path_provider_page_1 = require("demo/packages/path_provider_page");
class MyPackageIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("第三方包"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Loading..."),
                        subtitle: new fs.Text("showSuccess、showError、showInfo、showToast..."),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new loading_page_1.MyLoadingPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("本地数据存储(shared_preferences)"),
                        subtitle: new fs.Text("get、set"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new shared_preferences_page_1.MySharedPreferncesPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("屏幕信息(ScreenInfo)"),
                        subtitle: new fs.Text("宽、高、密度、像素"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new screen_info_page_1.MyScreenInfoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("4", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("包信息(PackageInfo)"),
                        subtitle: new fs.Text("版本信息、包信息"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new package_info_page_1.MyPackageInfoPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("5", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("wakelock"),
                        subtitle: new fs.Text("enable、disable、isEnabled"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new wakelock_page_1.MyWakelockPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("6", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Url Launcher"),
                        subtitle: new fs.Text("enable、disable、isEnabled"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new url_laucher_page_1.MyUrlLaucherPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("7", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Dio Demo"),
                        subtitle: new fs.Text("Get、Post、Request"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new dio_page_1.MyDioPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("8", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("path_provider"),
                        subtitle: new fs.Text("locations on the filesystem. Supports iOS, Android,"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new path_provider_page_1.MyPathProviderPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyPackageIndex = MyPackageIndex;
