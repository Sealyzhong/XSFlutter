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
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("ListView"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("1、ListView"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return listview_page_1.MyListViewPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("2、ListView.builder"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return listview_builder_page_1.MyListViewBuilderPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("3、ListView.separated"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return listview_separatorBuilder_page_1.MySeparatorBuilderPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("4、ListView.custom.list"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return listview_custom_list_page_1.MyListViewCustomListPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("5、ListView.custom.builder"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return listview_custom_builder_page_1.MyListViewCustomBuilderPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyListViewIndex();
    }
}
exports.MyListViewIndex = MyListViewIndex;
