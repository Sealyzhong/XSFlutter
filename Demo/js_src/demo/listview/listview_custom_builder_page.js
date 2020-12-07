"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyListViewCustomBuilderPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
//
class MyListViewCustomBuilderPage extends fs.StatefulWidget {
    createState() {
        return new _MyListViewCustomBuilderPage(this);
    }
    static new() {
        return new MyListViewCustomBuilderPage();
    }
}
exports.MyListViewCustomBuilderPage = MyListViewCustomBuilderPage;
class _MyListViewCustomBuilderPage extends fs.WidgetState {
    //重构
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("ListView.builder")
            }),
            body: fs.ListView.custom({
                childrenDelegate: fs.SliverChildBuilderDelegate.new({
                    childCount: icon_data_1.MyIconData.cupertinoIcons.length,
                    builder: (context, index) => {
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
