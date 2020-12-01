"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTextFieldPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyTextFieldPage extends fs.StatefulWidget {
    createState() {
        return new _MyTextFieldPage(this);
    }
    static new() {
        return new MyTextFieldPage();
    }
}
exports.MyTextFieldPage = MyTextFieldPage;
class _MyTextFieldPage extends fs.WidgetState {
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Text Field"),
            }),
            body: fs.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("默认样式"),
                    fs.Padding.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.TextField.new({
                            decoration: fs.InputDecoration.new(),
                        }),
                    }),
                    section_title_1.MySectionTitle.new("icon"),
                    fs.Padding.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.TextField.new({
                            decoration: fs.InputDecoration.new({
                                icon: fs.Icon.new(fs.Icons.person),
                            }),
                        }),
                    }),
                ],
            }),
        });
    }
}
