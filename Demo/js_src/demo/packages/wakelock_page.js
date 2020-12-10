"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
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
    async initState() {
        fs.Future.delayed(new fs.Duration({ seconds: 1 }), this._getStatus.bind(this));
    }
    async _getStatus() {
        this.isEnabled = await fs.Wakelock.isEnabled();
        this.setState();
    }
    async _enable() {
        var v = await fs.Wakelock.enable();
        var n = await fs.Wakelock.isEnabled();
        this.isEnabled = n;
        this.setState();
    }
    async _disable() {
        var v = await fs.Wakelock.disable();
        var n = await fs.Wakelock.isEnabled();
        this.isEnabled = n;
        this.setState();
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
