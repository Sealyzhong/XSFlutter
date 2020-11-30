"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyButtonPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyButtonPage extends fs.StatelessWidget {
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new('Button'),
            }),
            body: fs.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("RaisedButton"),
                    fs.RaisedButton.new({
                        child: fs.Text.new("普通按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        },
                    }),
                    section_title_1.MySectionTitle.new("失效Disable"),
                    fs.RaisedButton.new({
                        child: fs.Text.new("Disable 按钮"),
                    }),
                    section_title_1.MySectionTitle.new("FlatButton"),
                    fs.FlatButton.new({
                        child: fs.Text.new("Flat 按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    fs.FlatButton.new({
                        textColor: fs.Colors.black,
                        child: fs.Text.new("Flat 按钮"),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    section_title_1.MySectionTitle.new("Icon Button"),
                    fs.IconButton.new({
                        icon: fs.Icon.new(fs.Icons.camera),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                    section_title_1.MySectionTitle.new("Floating Action Button"),
                    fs.FloatingActionButton.new({
                        child: fs.Icon.new(fs.Icons.camera),
                        onPressed: function () {
                            fs.Log.log("Click");
                        }
                    }),
                ],
            })
        });
    }
    static new() {
        return new MyButtonPage();
    }
}
exports.MyButtonPage = MyButtonPage;
