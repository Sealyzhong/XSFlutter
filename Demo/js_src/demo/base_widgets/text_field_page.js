"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTextFieldPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyTextFieldPage extends fs.StatefulWidget {
    createState() {
        return new _MyTextFieldPage(this);
    }
}
exports.MyTextFieldPage = MyTextFieldPage;
class _MyTextFieldPage extends fs.WidgetState {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Text Field"),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("默认样式"),
                    new fs.Padding({
                        padding: fs.EdgeInsets.all(10),
                        child: new fs.TextField({
                            decoration: new fs.InputDecoration(),
                        }),
                    }),
                    new section_title_1.MySectionTitle("icon"),
                    new fs.Padding({
                        padding: fs.EdgeInsets.all(10),
                        child: new fs.TextField({
                            decoration: new fs.InputDecoration({
                                icon: new fs.Icon(fs.Icons.person),
                                errorBorder: fs.InputBorder.none(),
                                disabledBorder: fs.InputBorder.outline({
                                    borderSide: new fs.BorderSide(),
                                }),
                                enabledBorder: fs.InputBorder.underline(),
                            }),
                            inputFormatters: [
                                fs.TextInputFormatter.lengthLimiting(10),
                                fs.TextInputFormatter.digitsOnly(),
                            ]
                        }),
                    }),
                ],
            }),
        });
    }
}
