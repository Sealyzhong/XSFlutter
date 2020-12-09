"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPullToRefreshWaterDropDemoPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyPullToRefreshWaterDropDemoPage extends fs.StatefulWidget {
    createState() {
        return new _MyPullToRefreshWaterDropDemoPageState(this);
    }
}
exports.MyPullToRefreshWaterDropDemoPage = MyPullToRefreshWaterDropDemoPage;
class _MyPullToRefreshWaterDropDemoPageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.refreshController = new tl.PullToRefreshController({});
        this._count = 20;
    }
    //重构
    build(context) {
        var that = this;
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("WaterDrop Style"),
            }),
            body: new tl.PullToRefreshRefresher({
                controller: this.refreshController,
                enablePullDown: true,
                enablePullUp: true,
                header: new tl.PullToRefreshWaterDropHeader(),
                footer: new tl.PullToRefreshClassicFooter(),
                onRefresh: function () {
                    fs.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(new fs.Duration({
                        seconds: 2
                    }), function () {
                        that._count = 20;
                        fs.Loading.dismiss();
                        that.refreshController.refreshCompleted();
                        that.refreshController.loadComplete();
                        that.setState();
                    });
                },
                onLoading: function () {
                    fs.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(new fs.Duration({
                        seconds: 2
                    }), function () {
                        that._count = that._count + 20;
                        if (that._count >= icon_data_1.MyIconData.cupertinoIcons.length) {
                            that._count = icon_data_1.MyIconData.cupertinoIcons.length;
                        }
                        fs.Loading.dismiss();
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
                        return new fs.Container({
                            padding: fs.EdgeInsets.all(10),
                            child: new fs.Row({
                                children: [
                                    new fs.Icon(model.value),
                                    new fs.SizedBox({ width: 10 }),
                                    new fs.Expanded({
                                        child: new fs.Text(model.name, { overflow: fs.TextOverflow.ellipsis, style: new fs.TextStyle({ fontSize: 16 }) }),
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
