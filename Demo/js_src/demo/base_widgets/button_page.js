"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButtonPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const flutter_sdk_1 = require("flutter_sdk");
class MyButtonPage extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text('Button'),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new section_title_1.MySectionTitle("RaisedButton"),
                    new flutter_sdk_1.RaisedButton({
                        child: new flutter_sdk_1.Text("普通按钮"),
                        onPressed: function () {
                            flutter_sdk_1.Log.log("Click");
                        },
                    }),
                    new section_title_1.MySectionTitle("失效Disable"),
                    new flutter_sdk_1.RaisedButton({
                        child: new flutter_sdk_1.Text("Disable 按钮"),
                    }),
                    new section_title_1.MySectionTitle("FlatButton"),
                    new flutter_sdk_1.FlatButton({
                        child: new flutter_sdk_1.Text("Flat 按钮"),
                        onPressed: function () {
                            flutter_sdk_1.Log.log("Click");
                        }
                    }),
                    new flutter_sdk_1.FlatButton({
                        textColor: flutter_sdk_1.Colors.black,
                        child: new flutter_sdk_1.Text("Flat 按钮"),
                        onPressed: function () {
                            flutter_sdk_1.Log.log("Click");
                        }
                    }),
                    new section_title_1.MySectionTitle("Icon Button"),
                    new flutter_sdk_1.IconButton({
                        icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.camera),
                        onPressed: function () {
                            flutter_sdk_1.Log.log("Click");
                        }
                    }),
                    new section_title_1.MySectionTitle("Floating Action Button"),
                    new flutter_sdk_1.FloatingActionButton({
                        child: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.camera),
                        onPressed: function () {
                            flutter_sdk_1.Log.log("Click");
                        }
                    }),
                ],
            })
        });
    }
}
exports.MyButtonPage = MyButtonPage;
