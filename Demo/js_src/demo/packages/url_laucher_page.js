"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyUrlLaucherPage = void 0;
const fs = require("flutter_sdk");
const api = require("flutter_api");
class MyUrlLaucherPage extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    static new() {
        return new MyUrlLaucherPage();
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Url Laucher"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("打开网站"),
                        subtitle: fs.Text.new("https://www.baidu.com"),
                        onTap: function () {
                            api.UrlLauncher.openUrl({ urlString: "https://www.baidu.com" });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("打电话"),
                        subtitle: fs.Text.new("tels:10000"),
                        onTap: function () {
                            api.UrlLauncher.openUrl({ urlString: "tels:10000" });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("发短信"),
                        subtitle: fs.Text.new("sms:10000"),
                        onTap: function () {
                            api.UrlLauncher.openUrl({ urlString: "sms:10000" });
                        }
                    }),
                ]
            }),
        });
    }
}
exports.MyUrlLaucherPage = MyUrlLaucherPage;
