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
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var v = yield fs.Dialog.show(this.widget, new fs.ShowDatePicker({ initialDate: moment(this.selectDate).unix() }));
                            if (v != null && v != undefined && v.flag) {
                                this.selectDate = moment(fs.Convert.toNumber(v.data)).toDate();
                                fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                                this.setState();
                            }
                        })
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、ShowDatePicker(黑色主题)"),
                        subtitle: new fs.Text("返回值：" + moment(this.selectDate).format("YYYY-MM-DD")),
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var v = yield fs.Dialog.show(this.widget, new fs.ShowDatePicker({ initialDate: moment(this.selectDate).unix(), themeData: fs.ThemeData.dark() }));
                            if (v != null && v != undefined && v.flag) {
                                this.selectDate = moment(fs.Convert.toNumber(v.data)).toDate();
                                fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                                this.setState();
                            }
                        })
                    }),
                ],
            }),
        });
    }
}
