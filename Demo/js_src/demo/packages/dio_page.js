"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDioPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyDioPage extends fs.StatefulWidget {
    createState() {
        return new _MyDioPage(this);
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
    testDio1(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fs.Dio.getInstance().get({ path: url });
                fs.Log.log("await Dio.get(urlStr):request() :" + response);
                return response;
            }
            catch (e) {
                fs.Log.log("testDio() error:" + e);
            }
        });
    }
    //例子2，接口还未完全支持
    testDio2(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fs.Dio.getInstance().get({ path: url });
                fs.Log.log("await Dio.get(urlStr):request() :" + response);
                return response;
            }
            catch (e) {
                fs.Log.log("testDio() error:" + e);
            }
        });
    }
    _onTap1() {
        return __awaiter(this, void 0, void 0, function* () {
            fs.Loading.show({ info: "数据加载中..." });
            let response = yield this.testDio2(this.cgiDataUrl);
            this.response = JSON.stringify(response);
            fs.Loading.dismiss();
            this.setState();
        });
    }
    _onTap2() {
        return __awaiter(this, void 0, void 0, function* () {
            fs.Loading.show({ info: "数据加载中..." });
            let response = yield this.testDio1(this.cgiJsonUrl);
            this.response = JSON.stringify(response);
            fs.Loading.dismiss();
            this.setState();
        });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Dio Demo"),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("Code 获取网易新闻text"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons["directions_run"]),
                        title: new fs.Text(this.dioCodeText(), {
                            style: new fs.TextStyle({
                                color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap1.bind(this)
                    }),
                    new section_title_1.MySectionTitle("Code 获取Json Map"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons["directions_run"]),
                        title: new fs.Text(this.dioCodeText(), {
                            style: new fs.TextStyle({
                                color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap2.bind(this)
                    }),
                    new section_title_1.MySectionTitle("Response"),
                    new fs.Padding({
                        padding: fs.EdgeInsets.all(10),
                        child: new fs.Text(this.response, {
                            style: new fs.TextStyle({
                                color: fs.Colors.grey,
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
