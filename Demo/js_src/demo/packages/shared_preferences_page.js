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
    _getValue() {
        return __awaiter(this, void 0, void 0, function* () {
            this._getCount = yield fs.Sp.getInt({ key: this._userNumber, defaultValue: 0 });
            this.setState();
        });
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
