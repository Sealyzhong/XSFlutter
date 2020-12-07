"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEasyRefreshBasicPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyEasyRefreshBasicPage extends fs.StatefulWidget {
    createState() {
        return new _MyEasyRefreshBasicPageState(this);
    }
    static new() {
        return new MyEasyRefreshBasicPage();
    }
}
exports.MyEasyRefreshBasicPage = MyEasyRefreshBasicPage;
class _MyEasyRefreshBasicPageState extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.refreshController = tl.EasyRefreshController.new();
        this._count = 20;
    }
    //重构
    build(context) {
        var that = this;
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("经典样式"),
            }),
            body: tl.EasyRefresher.new({
                enableControlFinishLoad: true,
                enableControlFinishRefresh: true,
                controller: this.refreshController,
                header: tl.EasyRefreshClassicalHeader.zh_CN(),
                footer: tl.EasyRefreshClassicalFooter.zh_CN(),
                onRefresh: function () {
                    tl.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(fs.Duration.new({
                        seconds: 2
                    }), function () {
                        that._count = 20;
                        tl.Loading.dismiss();
                        that.refreshController.finishRefresh({ success: true });
                        that.refreshController.finishLoad({ success: true, noMore: that._count >= icon_data_1.MyIconData.icons.length });
                        that.setState();
                    });
                },
                onLoad: function () {
                    tl.Loading.show({ info: "数据加载中...", alignment: fs.Alignment.center });
                    fs.Future.delayed(fs.Duration.new({
                        seconds: 2
                    }), function () {
                        that._count = that._count + 20;
                        if (that._count >= icon_data_1.MyIconData.cupertinoIcons.length) {
                            that._count = icon_data_1.MyIconData.cupertinoIcons.length;
                        }
                        tl.Loading.dismiss();
                        that.refreshController.finishLoad({ success: true, noMore: that._count >= icon_data_1.MyIconData.cupertinoIcons.length });
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
