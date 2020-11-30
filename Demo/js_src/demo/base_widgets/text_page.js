"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTextPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyTextPage extends fs.StatelessWidget {
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new('Text'),
            }),
            body: fs.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("普通文本"),
                    fs.ListTile.new({
                        title: fs.Text.new("设置文本颜色", {
                            style: fs.TextStyle.new({
                                color: fs.Colors.orange,
                            })
                        }),
                    }),
                    section_title_1.MySectionTitle.new("富文本"),
                    fs.Padding.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.RichText.new({
                            text: fs.TextSpan.new({
                                style: fs.TextStyle.new({
                                    color: fs.Color.new(0xFFFF8C00),
                                    fontSize: 18.0,
                                    decoration: fs.TextDecoration.underline,
                                    decorationColor: fs.Colors.orange,
                                    decorationStyle: fs.TextDecorationStyle.dashed,
                                }),
                                text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                                children: [
                                    fs.TextSpan.new({
                                        text: ' style  ',
                                        style: fs.TextStyle.new({
                                            color: fs.Colors.red,
                                            fontWeight: fs.FontWeight.bold,
                                            decoration: fs.TextDecoration.none,
                                        })
                                    }),
                                    fs.TextSpan.new({
                                        text: 'your text',
                                        style: fs.TextStyle.new({
                                            color: fs.Colors.blue,
                                            fontWeight: fs.FontWeight.bold,
                                            decoration: fs.TextDecoration.none,
                                        })
                                    }),
                                ],
                            }),
                            overflow: fs.TextOverflow.ellipsis,
                            maxLines: 99
                        }),
                    })
                ],
            })
        });
    }
    static new() {
        return new MyTextPage();
    }
}
exports.MyTextPage = MyTextPage;
