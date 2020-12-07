"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySeparatorBuilderPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const fs = require("flutter_sdk");
//
class MySeparatorBuilderPage extends fs.StatefulWidget {
    createState() {
        return new _MySeparatorBuilderPage(this);
    }
    static new() {
        return new MySeparatorBuilderPage();
    }
}
exports.MySeparatorBuilderPage = MySeparatorBuilderPage;
class _MySeparatorBuilderPage extends fs.WidgetState {
    //重构
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("ListView.SeparatorBuilder")
            }),
            body: fs.ListView.separatorBuilder({
                itemCount: icon_data_1.MyIconData.cupertinoIcons.length,
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
                },
                separatorBuilder: (context, index) => {
                    return fs.Container.new({
                        color: fs.Colors.green,
                        height: 10,
                    });
                },
            }),
        });
    }
}
