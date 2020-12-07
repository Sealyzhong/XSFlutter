"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyListViewPage = void 0;
const fs = require("flutter_sdk");
const icon_data_1 = require("demo/model/icon_data");
class MyListViewPage extends fs.StatelessWidget {
    getWidgetList() {
        var list = new Array();
        icon_data_1.MyIconData.cupertinoIcons.forEach((model) => {
            list.push(fs.Container.new({
                padding: fs.EdgeInsets.all(10),
                child: fs.Row.new({
                    children: [
                        fs.Icon.new(model.value),
                        fs.SizedBox.new({ width: 10 }),
                        fs.Expanded.new({
                            child: fs.Text.new(model.name, { overflow: fs.TextOverflow.ellipsis, style: fs.TextStyle.new({ fontSize: 16 }) }),
                        }),
                    ]
                }),
            }));
        });
        return list;
    }
    //重构
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("ListView")
            }),
            body: fs.ListView.new({
                children: this.getWidgetList()
            }),
        });
    }
    static new() {
        return new MyListViewPage();
    }
}
exports.MyListViewPage = MyListViewPage;