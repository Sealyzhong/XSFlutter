"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDialogIndex = void 0;
const fs = require("flutter_sdk");
const api = require("flutter_api");
class MyDialogIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("通用提示框"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("1、showAboutDialog"),
                        onTap: function () {
                            api.ShowDialog.showAboutDialog({
                                applicationName: api.PackageInfo.packageName,
                                applicationVersion: api.PackageInfo.version,
                                applicationLegalese: "兴盛优选版权所有."
                            });
                        }
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyDialogIndex();
    }
}
exports.MyDialogIndex = MyDialogIndex;
