"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPullToRefreshIndex = void 0;
const fs = require("flutter_sdk");
class MyPullToRefreshIndex extends fs.StatelessWidget {
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Pull To Refresh"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.Text.new("ListView"),
                ],
            }),
        });
    }
    static new() {
        return new MyPullToRefreshIndex();
    }
}
exports.MyPullToRefreshIndex = MyPullToRefreshIndex;
