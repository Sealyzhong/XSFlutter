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
const app_bar_page_1 = require("demo/base_widgets/app_bar_page");
const cupertino_icons_page_1 = require("demo/base_widgets/cupertino_icons_page");
const material_icons_page_1 = require("demo/base_widgets/material_icons_page");
const section_title_1 = require("demo/widgets/section_title");
const placeholder_page_1 = require("demo/base_widgets/placeholder_page");
const container_page_1 = require("demo/base_widgets/container_page");
const column_page_1 = require("demo/base_widgets/column_page");
const row_page_1 = require("demo/base_widgets/row_page");
const text_page_1 = require("demo/base_widgets/text_page");
const button_page_1 = require("demo/base_widgets/button_page");
const flutter_logo_page_1 = require("demo/base_widgets/flutter_logo_page");
const text_field_page_1 = require("demo/base_widgets/text_field_page");
const image_page_1 = require("demo/base_widgets/image_page");
class MyBaseWidgetsIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("通用组件"),
            }),
            body: fs.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("基础组件"),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Material Icons"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return material_icons_page_1.MyMaterialIconsPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Cupertino Icons"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return cupertino_icons_page_1.MyCupertinoIconsPage.new();
                                }
                            }));
                        }
                    }),
                    //new 的写法2
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("AppBar"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return new app_bar_page_1.MyAppBarPage();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("PlaceHolder"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return placeholder_page_1.MyPlaceholderPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Image"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return image_page_1.MyImagePage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Text"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return text_page_1.MyTextPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("TextField"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return text_field_page_1.MyTextFieldPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Button"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return button_page_1.MyButtonPage.new();
                                }
                            }));
                        }
                    }),
                    section_title_1.MySectionTitle.new("布局组件"),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Container"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return container_page_1.MyContainerPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Column"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return column_page_1.MyColumnPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Row"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return row_page_1.MyRowPage.new();
                                }
                            }));
                        }
                    }),
                    section_title_1.MySectionTitle.new("其它组件"),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Flutter Logo"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return flutter_logo_page_1.MyFlutterLogoPage.new();
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
