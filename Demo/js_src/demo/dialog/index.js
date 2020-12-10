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
const show_dialog_1 = require("demo/dialog/show_dialog");
const date_picker_1 = require("demo/dialog/date_picker");
class MyDialogIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("常用对话框"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("Dialog"),
                        subtitle: new fs.Text("常用Dialog"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new show_dialog_1.MyShowDialogPage();
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("日期选择"),
                        subtitle: new fs.Text("Date_Picker"),
                        onTap: function () {
                            fs.Navigator.push(context, new fs.MaterialPageRoute({
                                builder: function (context) {
                                    return new date_picker_1.MyDatePickerPage();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyDialogIndex = MyDialogIndex;
