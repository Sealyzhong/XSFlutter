"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyContainerPage = void 0;
const fs = require("flutter_sdk");
class MyContainerPage extends fs.StatelessWidget {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Container"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({ title: new fs.Text("Container"), }),
                    new fs.Container({
                        color: fs.Colors.red,
                        height: 100,
                    }),
                    new fs.ListTile({ title: new fs.Text("放置内容的Container"), }),
                    new fs.Container({
                        color: fs.Colors.orange,
                        height: 100,
                        child: new fs.Text("我有内容")
                    }),
                    new fs.ListTile({ title: new fs.Text("Container里的Padding"), }),
                    new fs.Container({
                        color: fs.Colors.yellow,
                        padding: fs.EdgeInsets.all(10),
                        child: new fs.Text("我有内容")
                    }),
                    new fs.ListTile({ title: new fs.Text("圆角的Container"), }),
                    new fs.Container({
                        margin: fs.EdgeInsets.all(10),
                        padding: fs.EdgeInsets.all(10),
                        decoration: new fs.BoxDecoration({
                            borderRadius: fs.BorderRadius.all(fs.Radius.circular(4.0)),
                            color: fs.Colors.green,
                        }),
                        child: new fs.Text("我是圆角Container")
                    }),
                    new fs.ListTile({ title: new fs.Text("固定高宽的Container"), }),
                    new fs.Center({
                        child: new fs.Container({
                            width: 100,
                            height: 100,
                            margin: fs.EdgeInsets.all(10),
                            padding: fs.EdgeInsets.all(10),
                            decoration: new fs.BoxDecoration({
                                borderRadius: fs.BorderRadius.all(fs.Radius.circular(4.0)),
                                color: fs.Colors.green,
                            }),
                            child: new fs.Text("100x100", {
                                style: new fs.TextStyle({ color: fs.Colors.white }),
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
exports.MyContainerPage = MyContainerPage;
