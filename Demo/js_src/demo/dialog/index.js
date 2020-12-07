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
const tl = require("flutter_third_library");
class MyDialogIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = fs.TextStyle.new({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    _saveValue() {
        fs.Log.log("OK");
        tl.ShowDialog.dismiss(this);
    }
    build(context) {
        //var that = this;
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
                            tl.ShowDialog.showAboutDialog({
                                applicationName: tl.PackageInfo.packageName,
                                applicationVersion: tl.PackageInfo.version,
                                applicationLegalese: "兴盛优选版权所有."
                            });
                        }
                    }),
                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons.chevron_right),
                        title: fs.Text.new("2、showDialog"),
                        onTap: () => {
                            tl.ShowDialog.showDialog(this, {
                                barrierDismissible: false,
                                child: fs.Material.new({
                                    color: fs.Colors.transparent,
                                    child: fs.Center.new({
                                        child: fs.RaisedButton.new({
                                            child: fs.Text.new("相信·帮助"),
                                            onPressed: this._saveValue.bind(this)
                                        }),
                                    }),
                                })
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
