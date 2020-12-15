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
exports.MyWakelockPage = void 0;
const fs = require("flutter_sdk");
class MyWakelockPage extends fs.StatefulWidget {
    createState() {
        return new _MyWakelockPage(this);
    }
}
exports.MyWakelockPage = MyWakelockPage;
class _MyWakelockPage extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.isEnabled = false;
    }
    initState() {
        return __awaiter(this, void 0, void 0, function* () {
            fs.Future.delayed(new fs.Duration({ seconds: 1 }), this._getStatus.bind(this));
        });
    }
    _getStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isEnabled = yield fs.Wakelock.isEnabled();
            this.setState();
        });
    }
    _enable() {
        return __awaiter(this, void 0, void 0, function* () {
            var v = yield fs.Wakelock.enable();
            var n = yield fs.Wakelock.isEnabled();
            this.isEnabled = n;
            this.setState();
        });
    }
    _disable() {
        return __awaiter(this, void 0, void 0, function* () {
            var v = yield fs.Wakelock.disable();
            var n = yield fs.Wakelock.isEnabled();
            this.isEnabled = n;
            this.setState();
        });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("WakeLock"),
            }),
            body: new fs.Center({
                child: new fs.Column({
                    mainAxisAlignment: fs.MainAxisAlignment.center,
                    children: [
                        new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: [
                                new fs.Text("Wakelock(" + String(this.isEnabled) + "): "),
                                new fs.Switch({ value: this.isEnabled, activeColor: fs.Colors.green }),
                            ]
                        }),
                        new fs.RaisedButton({
                            child: new fs.Text("启用"),
                            onPressed: this._enable.bind(this),
                        }),
                        new fs.RaisedButton({
                            child: new fs.Text("禁用"),
                            onPressed: this._disable.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
