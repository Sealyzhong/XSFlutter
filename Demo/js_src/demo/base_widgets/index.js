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
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("通用组件"),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("基础组件"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Material Icons"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new material_icons_page_1.MyMaterialIconsPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Cupertino Icons"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new cupertino_icons_page_1.MyCupertinoIconsPage();
                                }
                            }));
                        }
                    }),
                    //new 的写法2
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("AppBar"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new app_bar_page_1.MyAppBarPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("PlaceHolder"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new placeholder_page_1.MyPlaceholderPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Image"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new image_page_1.MyImagePage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Text"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new text_page_1.MyTextPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("TextField"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new text_field_page_1.MyTextFieldPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Button"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new button_page_1.MyButtonPage();
                                }
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("布局组件"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Container"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new container_page_1.MyContainerPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Column"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new column_page_1.MyColumnPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Row"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new row_page_1.MyRowPage();
                                }
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("其它组件"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Flutter Logo"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new flutter_logo_page_1.MyFlutterLogoPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyBaseWidgetsIndex = MyBaseWidgetsIndex;
