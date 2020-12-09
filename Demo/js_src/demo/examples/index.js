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
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("通用案例"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Flutter Counter"),
                        subtitle: new fs.Text("Flutter 官方 Demo"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new counter_page_1.MyCounterPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Test Widget"),
                        subtitle: new fs.Text("测试常用属于DSL JSON字符,方便映射开发"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new test_widget_page_1.MyTestWidgetPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyExamplesIndex = MyExamplesIndex;
