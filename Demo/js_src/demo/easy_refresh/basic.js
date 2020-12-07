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
        //refreshController:tl.EasyRefreshController= tl.EasyRefreshController.new();
        super(...arguments);
        this._count = 20;
    }
    //重构
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("经典样式"),
            }),
            body: tl.EasyRefresher.new({
                //controller:this.refreshController,
                //header:tl.EasyRefreshClassicalHeader.zh_CN(),
                //footer:tl.EasyRefreshClassicalFooter.zh_CN(),
                /*onRefresh: function (){

                },
                onLoad: function (){

                },*/
                child: fs.ListView.builder({
                    itemCount: this._count,
                    itemBuilder: (context, index) => {
                        var model = icon_data_1.MyIconData.icons[index];
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
