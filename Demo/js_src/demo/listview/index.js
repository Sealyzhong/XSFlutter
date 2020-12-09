"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyListViewIndex = void 0;
const fs = require("flutter_sdk");
const listview_page_1 = require("demo/listview/listview_page");
const listview_builder_page_1 = require("demo/listview/listview_builder_page");
const listview_separatorBuilder_page_1 = require("demo/listview/listview_separatorBuilder_page");
const listview_custom_list_page_1 = require("demo/listview/listview_custom_list_page");
const listview_custom_builder_page_1 = require("demo/listview/listview_custom_builder_page");
class MyListViewIndex extends fs.StatelessWidget {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("ListView"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("1、ListView"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new listview_page_1.MyListViewPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、ListView.builder"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new listview_builder_page_1.MyListViewBuilderPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("3、ListView.separated"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new listview_separatorBuilder_page_1.MySeparatorBuilderPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("4、ListView.custom.list"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new listview_custom_list_page_1.MyListViewCustomListPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("5、ListView.custom.builder"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new listview_custom_builder_page_1.MyListViewCustomBuilderPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyListViewIndex = MyListViewIndex;
