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
}
exports.MySeparatorBuilderPage = MySeparatorBuilderPage;
class _MySeparatorBuilderPage extends fs.WidgetState {
    //重构
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("ListView.SeparatorBuilder")
            }),
            body: fs.ListView.separatorBuilder({
                itemCount: icon_data_1.MyIconData.cupertinoIcons.length,
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
                },
                separatorBuilder: (context, index) => {
                    return new fs.Container({
                        color: fs.Colors.green,
                        height: 10,
                    });
                },
            }),
        });
    }
}
