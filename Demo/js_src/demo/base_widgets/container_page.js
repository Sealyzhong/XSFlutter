"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyContainerPage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyContainerPage extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("Container"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Container"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.red,
                        height: 100,
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("放置内容的Container"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.orange,
                        height: 100,
                        child: new flutter_sdk_1.Text("我有内容")
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Container里的Padding"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.yellow,
                        padding: flutter_sdk_1.EdgeInsets.all(10),
                        child: new flutter_sdk_1.Text("我有内容")
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("圆角的Container"), }),
                    new flutter_sdk_1.Container({
                        margin: flutter_sdk_1.EdgeInsets.all(10),
                        padding: flutter_sdk_1.EdgeInsets.all(10),
                        decoration: new flutter_sdk_1.BoxDecoration({
                            borderRadius: flutter_sdk_1.BorderRadius.all(flutter_sdk_1.Radius.circular(4.0)),
                            color: flutter_sdk_1.Colors.green,
                        }),
                        child: new flutter_sdk_1.Text("我是圆角Container")
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("固定高宽的Container"), }),
                    new flutter_sdk_1.Center({
                        child: new flutter_sdk_1.Container({
                            width: 100,
                            height: 100,
                            margin: flutter_sdk_1.EdgeInsets.all(10),
                            padding: flutter_sdk_1.EdgeInsets.all(10),
                            decoration: new flutter_sdk_1.BoxDecoration({
                                borderRadius: flutter_sdk_1.BorderRadius.all(flutter_sdk_1.Radius.circular(4.0)),
                                color: flutter_sdk_1.Colors.green,
                            }),
                            child: new flutter_sdk_1.Text("100x100", {
                                style: new flutter_sdk_1.TextStyle({ color: flutter_sdk_1.Colors.white }),
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
exports.MyContainerPage = MyContainerPage;
