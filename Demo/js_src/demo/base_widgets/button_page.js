"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButtonPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyButtonPage extends fs.StatelessWidget {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text('Button'),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("RaisedButton"),
                    new fs.RaisedButton({
                        child: new fs.Text("普通按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        },
                    }),
                    new section_title_1.MySectionTitle("失效Disable"),
                    new fs.RaisedButton({
                        child: new fs.Text("Disable 按钮"),
                    }),
                    new section_title_1.MySectionTitle("FlatButton"),
                    new fs.FlatButton({
                        child: new fs.Text("Flat 按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    new fs.FlatButton({
                        textColor: fs.Colors.black,
                        child: new fs.Text("Flat 按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    new section_title_1.MySectionTitle("Icon Button"),
                    new fs.IconButton({
                        icon: new fs.Icon(fs.Icons.camera),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    new section_title_1.MySectionTitle("Floating Action Button"),
                    new fs.FloatingActionButton({
                        child: new fs.Icon(fs.Icons.camera),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                ],
            })
        });
    }
}
exports.MyButtonPage = MyButtonPage;
