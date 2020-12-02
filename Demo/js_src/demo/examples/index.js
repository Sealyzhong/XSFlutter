"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyExamplesIndex = void 0;
const fs = require("flutter_sdk");
const counter_page_1 = require("demo/examples/counter_page");
const test_widget_page_1 = require("demo/examples/test_widget_page");
class MyExamplesIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("通用案例"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Flutter Counter"),
                        subtitle: fs.Text.new("Flutter 官方 Demo"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return counter_page_1.MyCounterPage.new();
                                }
                            }));
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("Test Widget"),
                        subtitle: fs.Text.new("测试常用属于DSL JSON字符,方便映射开发"),
                        onTap: function () {
                            fs.Navigator.push(context, fs.MaterialPageRoute.new({
                                builder: function (context) {
                                    return test_widget_page_1.MyTestWidgetPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyExamplesIndex();
    }
}
exports.MyExamplesIndex = MyExamplesIndex;
