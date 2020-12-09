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
const tl = require("flutter_third_library");
class MyUrlLaucherPage extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Url Laucher"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("打开网站"),
                        subtitle: new fs.Text("https://www.baidu.com"),
                        onTap: function () {
                            tl.UrlLauncher.openUrl({ urlString: "https://www.baidu.com" });
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("打电话"),
                        subtitle: new fs.Text("tels:10000"),
                        onTap: function () {
                            tl.UrlLauncher.openUrl({ urlString: "tels:10000" });
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("发短信"),
                        subtitle: new fs.Text("sms:10000"),
                        onTap: function () {
                            tl.UrlLauncher.openUrl({ urlString: "sms:10000" });
                        }
                    }),
                ]
            }),
        });
    }
}
exports.MyUrlLaucherPage = MyUrlLaucherPage;
