"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCounterPage = void 0;
const ts_flutter_sdk_1 = require("ts_flutter_sdk");
class MyCounterPage extends ts_flutter_sdk_1.JSStatefulWidget {
    createState() {
        return new _MyCounterPage(this);
    }
    static new() {
        return new MyCounterPage();
    }
}
exports.MyCounterPage = MyCounterPage;
class _MyCounterPage extends ts_flutter_sdk_1.JSWidgetState {
    constructor() {
        super(...arguments);
        this._counter = 0;
    }
    //计数器
    _incrementCounter() {
        this._counter++;
        this.setState();
    }
    //重构
    build(context) {
        return ts_flutter_sdk_1.Scaffold.new({
            appBar: ts_flutter_sdk_1.AppBar.new({
                title: ts_flutter_sdk_1.Text.new("Flutter Counter"),
            }),
            body: ts_flutter_sdk_1.Center.new({
                child: ts_flutter_sdk_1.Column.new({
                    mainAxisAlignment: ts_flutter_sdk_1.MainAxisAlignment.center,
                    children: [
                        ts_flutter_sdk_1.Text.new("This example is developed using JS."),
                        ts_flutter_sdk_1.Text.new(String(this._counter), {
                            style: ts_flutter_sdk_1.TextStyle.new({
                                fontWeight: ts_flutter_sdk_1.FontWeight.bold,
                                fontSize: 24,
                            }),
                        }),
                    ],
                }),
            }),
            floatingActionButton: ts_flutter_sdk_1.FloatingActionButton.new({
                onPressed: this._incrementCounter.bind(this),
                child: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.add),
            }),
        });
    }
}
