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
        var isSuccess = fs.Sp.setInt({ key: this._userNumber, value: this._count });
        fs.Loading.showSuccess({ info: isSuccess ? "保存成功！" : "保存失败" });
    }
    async _getValue() {
        this._getCount = await fs.Sp.getInt({ key: this._userNumber, defaultValue: 0 });
        this.setState();
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Shared Prefernces"),
            }),
            body: new fs.Center({
                child: new fs.Column({
                    mainAxisAlignment: fs.MainAxisAlignment.center,
                    children: [
                        new fs.Text("关键字(key): userNum"),
                        new fs.Text("当前值: " + String(this._count)),
                        new fs.Text("存储值(get): " + String(this._getCount)),
                        new fs.RaisedButton({
                            child: new fs.Text("当前值+1"),
                            onPressed: this._incrementCounter.bind(this),
                        }),
                        new fs.RaisedButton({
                            child: new fs.Text("保存值"),
                            onPressed: this._saveValue.bind(this),
                        }),
                        new fs.RaisedButton({
                            child: new fs.Text("获取值"),
                            onPressed: this._getValue.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
