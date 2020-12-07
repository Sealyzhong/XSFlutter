"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDioPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyDioPage extends fs.StatefulWidget {
    createState() {
        return new _MyDioPage(this);
    }
    static new() {
        return new MyDioPage();
    }
}
exports.MyDioPage = MyDioPage;
class _MyDioPage extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.response = "点击小人Run上面的代码";
        this.cgiDataUrl = "https://c.m.163.com/nc/article/headline/T1348649580692/0-10.html";
        this.cgiJsonUrl = "https://reactnative.dev/movies.json";
    }
    dioCodeText() {
        return "let resp = await Dio().get(cgi);";
    }
    //例子1，最简单的用法 
    async testDio1(url) {
        try {
            let response = await tl.Dio.new().get({ path: url });
            fs.Log.log("await Dio.get(urlStr):request() :" + response);
            return response;
        }
        catch (e) {
            fs.Log.log("testDio() error:" + e);
        }
    }
    //例子2，接口还未完全支持
    async testDio2(url) {
        try {
            let response = await tl.Dio.new().get({ path: url, onReceiveProgress: function (progress, total) {
                    fs.Log.log("testDio(): progress: " + String(progress) + "/" + String(total));
                } });
            fs.Log.log("await Dio.get(urlStr):request() :" + response);
            return response;
        }
        catch (e) {
            fs.Log.log("testDio() error:" + e);
        }
    }
    async _onTap1() {
        tl.Loading.show({ info: "数据加载中..." });
        let response = await this.testDio2(this.cgiDataUrl);
        this.response = response; // JSON.stringify(response);
        tl.Loading.dismiss();
        this.setState();
    }
    async _onTap2() {
        tl.Loading.show({ info: "数据加载中..." });
        let response = await this.testDio1(this.cgiJsonUrl);
        this.response = response; // JSON.stringify(response);
        tl.Loading.dismiss();
        this.setState();
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Dio Demo"),
            }),
            body: fs.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("Code 获取网易新闻text"),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons["directions_run"]),
                        title: fs.Text.new(this.dioCodeText(), {
                            style: fs.TextStyle.new({
                                color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap1.bind(this)
                    }),
                    section_title_1.MySectionTitle.new("Code 获取Json Map"),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons["directions_run"]),
                        title: fs.Text.new(this.dioCodeText(), {
                            style: fs.TextStyle.new({
                                color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap2.bind(this)
                    }),
                    section_title_1.MySectionTitle.new("Response"),
                    fs.Padding.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.Text.new(this.response, {
                            style: fs.TextStyle.new({
                                color: fs.Colors.grey,
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
