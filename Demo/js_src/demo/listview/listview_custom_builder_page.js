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
}
exports.MyListViewCustomBuilderPage = MyListViewCustomBuilderPage;
class _MyListViewCustomBuilderPage extends fs.WidgetState {
    //重构
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("ListView.builder")
            }),
            body: fs.ListView.custom({
                childrenDelegate: new fs.SliverChildBuilderDelegate({
                    childCount: icon_data_1.MyIconData.cupertinoIcons.length,
                    builder: (context, index) => {
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
