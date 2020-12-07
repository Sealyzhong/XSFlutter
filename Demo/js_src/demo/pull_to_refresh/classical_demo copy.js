"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPullToRefreshClassicalDemoPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyPullToRefreshClassicalDemoPage extends fs.StatefulWidget {
    createState() {
        return new _MyPullToRefreshClassicalDemoPageState(this);
    }
    static new() {
        return new MyPullToRefreshClassicalDemoPage();
    }
}
exports.MyPullToRefreshClassicalDemoPage = MyPullToRefreshClassicalDemoPage;
class _MyPullToRefreshClassicalDemoPageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.refreshController = tl.PullToRefreshController.new({});
        this._count = 20;
    }
    //重构
    build(context) {
        var that = this;
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("经典样式"),
            }),
            body: tl.PullToRefreshRefresher.new({
                controller: this.refreshController,
                enablePullDown: true,
                enablePullUp: true,
                header: tl.PullToRefreshClassicHeader.new(),
                footer: tl.PullToRefreshClassicFooter.new(),
                onRefresh: function () {
                    tl.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(fs.Duration.new({
                        seconds: 2
                    }), function () {
                        that._count = 20;
                        tl.Loading.dismiss();
                        that.refreshController.refreshCompleted();
                        that.refreshController.loadComplete();
                        that.setState();
                    });
                },
                onLoading: function () {
                    tl.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(fs.Duration.new({
                        seconds: 2
                    }), function () {
                        that._count = that._count + 20;
                        if (that._count >= icon_data_1.MyIconData.cupertinoIcons.length) {
                            that._count = icon_data_1.MyIconData.cupertinoIcons.length;
                        }
                        tl.Loading.dismiss();
                        that.refreshController.loadComplete();
                        if (that._count >= icon_data_1.MyIconData.cupertinoIcons.length) {
                            that.refreshController.loadNoData();
                        }
                        that.setState();
                    });
                },
                child: fs.ListView.builder({
                    itemCount: this._count,
                    itemBuilder: (context, index) => {
                        var model = icon_data_1.MyIconData.cupertinoIcons[index];
                        return fs.Container.new({
                            padding: fs.EdgeInsets.all(10),
                            child: fs.Row.new({
                                children: [
                                    fs.Icon.new(model.value),
                                    fs.SizedBox.new({ width: 10 }),
                                    fs.Expanded.new({
                                        child: fs.Text.new(model.name, { overflow: fs.TextOverflow.ellipsis, style: fs.TextStyle.new({ fontSize: 16 }) }),
                                    }),
                                ]
                            })
                        });
                    }
                }),
            }),
        });
    }
}
