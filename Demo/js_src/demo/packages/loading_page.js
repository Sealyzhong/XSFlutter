"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLoadingPage = void 0;
const fs = require("flutter_sdk");
class MyLoadingPage extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Loading"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        leading: fs.Text.new("1", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("show Success"),
                        subtitle: fs.Text.new("参数:info、duratio、alignment"),
                        onTap: function () {
                            fs.LoadingApi.showSuccess({ info: "加载成功！", alignment: fs.Alignment.center });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("2", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("show Error"),
                        subtitle: fs.Text.new("参数:info、duratio、alignment"),
                        onTap: function () {
                            fs.LoadingApi.showError({ info: "加载失败", alignment: fs.Alignment.center });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("3", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("show Info"),
                        subtitle: fs.Text.new("参数:info、duratio、alignment"),
                        onTap: function () {
                            fs.LoadingApi.showInfo({ info: "提示消息", alignment: fs.Alignment.center });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("4", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("show Toast"),
                        subtitle: fs.Text.new("参数:info、duratio、alignment"),
                        onTap: function () {
                            fs.LoadingApi.showToast({ info: "你有新的消息!", alignment: fs.Alignment.bottomCenter });
                        }
                    }),
                    fs.ListTile.new({
                        leading: fs.Text.new("5", { style: this._style }),
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("show(数据加载中...)"),
                        subtitle: fs.Text.new("参数:info"),
                        onTap: function () {
                            fs.LoadingApi.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                            fs.Future.delayed(fs.Duration.new({
                                seconds: 5
                            }), function () {
                                fs.LoadingApi.dismiss();
                            });
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyLoadingPage();
    }
}
exports.MyLoadingPage = MyLoadingPage;
