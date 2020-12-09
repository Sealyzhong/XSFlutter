"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyListViewCustomListPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
//
class MyListViewCustomListPage extends fs.StatefulWidget {
    createState() {
        return new _MyListViewCustomListPage(this);
    }
}
exports.MyListViewCustomListPage = MyListViewCustomListPage;
class _MyListViewCustomListPage extends fs.WidgetState {
    getWidgetList() {
        var list = new Array();
        icon_data_1.MyIconData.cupertinoIcons.forEach((model) => {
            list.push(new fs.Container({
                padding: fs.EdgeInsets.all(10),
                child: new fs.Row({
                    children: [
                        new fs.Icon(model.value),
                        new fs.SizedBox({ width: 10 }),
                        new fs.Expanded({
                            child: new fs.Text(model.name, { overflow: fs.TextOverflow.ellipsis, style: new fs.TextStyle({ fontSize: 16 }) }),
                        }),
                    ]
                }),
            }));
        });
        return list;
    }
    //重构
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("ListView.custom.kst")
            }),
            body: fs.ListView.custom({
                childrenDelegate: new fs.SliverChildListDelegate({
                    children: this.getWidgetList()
                })
            }),
        });
    }
}
