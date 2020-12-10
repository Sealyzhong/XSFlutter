"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDatePickerPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
const moment = require("moment");
class MyDatePickerPage extends fs.StatefulWidget {
    createState() {
        return new _MyDatePickerPageState(this);
    }
}
exports.MyDatePickerPage = MyDatePickerPage;
class _MyDatePickerPageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.selectDate = new Date(); // moment();
    }
    build(context) {
        //var that = this;
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Date Picker"),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("日期选择"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("1、ShowDatePicker(默认主题)"),
                        subtitle: new fs.Text("返回值：" + moment(this.selectDate).format("YYYY-MM-DD")),
                        onTap: async () => {
                            var v = await fs.Dialog.show(this.widget, new fs.ShowDatePicker({ initialDate: moment(this.selectDate).unix() }));
                            if (v != null && v != undefined) {
                                this.selectDate = moment(fs.Convert.toNumber(v)).toDate();
                                fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                                this.setState();
                            }
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、ShowDatePicker(黑色主题)"),
                        subtitle: new fs.Text("返回值：" + moment(this.selectDate).format("YYYY-MM-DD")),
                        onTap: async () => {
                            var v = await fs.Dialog.show(this.widget, new fs.ShowDatePicker({ initialDate: moment(this.selectDate).unix(), themeData: fs.ThemeData.dark() }));
                            if (v != null && v != undefined) {
                                this.selectDate = moment(fs.Convert.toNumber(v)).toDate();
                                fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                                this.setState();
                            }
                        }
                    }),
                ],
            }),
        });
    }
}
