"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyBaseWidgetsIndex = void 0;
const flutter_sdk_1 = require("flutter_sdk");
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
class MyBaseWidgetsIndex extends flutter_sdk_1.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new flutter_sdk_1.TextStyle({ fontSize: 24, fontWeight: flutter_sdk_1.FontWeight.bold });
    }
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("通用组件"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new section_title_1.MySectionTitle("基础组件"),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Material Icons"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new material_icons_page_1.MyMaterialIconsPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Cupertino Icons"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new cupertino_icons_page_1.MyCupertinoIconsPage();
                                }
                            }));
                        }
                    }),
                    //new 的写法2
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("AppBar"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new app_bar_page_1.MyAppBarPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("PlaceHolder"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new placeholder_page_1.MyPlaceholderPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Image"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new image_page_1.MyImagePage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Text"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new text_page_1.MyTextPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("TextField"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new text_field_page_1.MyTextFieldPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Button"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new button_page_1.MyButtonPage();
                                }
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("布局组件"),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Container"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new container_page_1.MyContainerPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Column"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new column_page_1.MyColumnPage();
                                }
                            }));
                        }
                    }),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Row"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
                                builder: function (context) {
                                    return new row_page_1.MyRowPage();
                                }
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("其它组件"),
                    new flutter_sdk_1.ListTile({
                        trailing: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.chevron_right),
                        title: new flutter_sdk_1.Text("Flutter Logo"),
                        onTap: function () {
                            flutter_sdk_1.Navigator.push(context, new flutter_sdk_1.MaterialPageRoute({
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
