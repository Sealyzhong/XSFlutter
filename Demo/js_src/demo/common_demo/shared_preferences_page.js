"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySharedPreferncesPage = void 0;
const fs = require("flutter_sdk");
class MySharedPreferncesPage extends fs.StatefulWidget {
    createState() {
        return new _MySharedPreferncesPage(this);
    }
    static new() {
        return new MySharedPreferncesPage();
    }
}
exports.MySharedPreferncesPage = MySharedPreferncesPage;
class _MySharedPreferncesPage extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this._userNumber = "userNum";
        this._count = 0;
        this._getCount = 0;
    }
    //计数器
    _incrementCounter() {
        this._count++;
        this.setState();
    }
    _saveValue() {
        fs.SpApi.setInt({ key: this._userNumber, value: this._count });
        fs.LoadingApi.showSuccess({ info: "保存成功！" });
    }
    async _getValue() {
        let result = await fs.SpApi.getInt({ key: this._userNumber, defaultValue: 0 });
        this._getCount = Number(result);
        this.setState();
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Shared Prefernces"),
            }),
            body: fs.Center.new({
                child: fs.Column.new({
                    mainAxisAlignment: fs.MainAxisAlignment.center,
                    children: [
                        fs.Text.new("关键字(key): userNum"),
                        fs.Text.new("当前值: " + String(this._count)),
                        fs.Text.new("存储值(get): " + String(this._getCount)),
                        fs.RaisedButton.new({
                            child: fs.Text.new("当前值+1"),
                            onPressed: this._incrementCounter.bind(this),
                        }),
                        fs.RaisedButton.new({
                            child: fs.Text.new("保存值"),
                            onPressed: this._saveValue.bind(this),
                        }),
                        fs.RaisedButton.new({
                            child: fs.Text.new("获取值"),
                            onPressed: this._getValue.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
    static new() {
        return new MySharedPreferncesPage();
    }
}
