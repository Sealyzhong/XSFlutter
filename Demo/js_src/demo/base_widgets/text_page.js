"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTextPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const flutter_sdk_1 = require("flutter_sdk");
class MyTextPage extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text('Text'),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new section_title_1.MySectionTitle("普通文本"),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("设置文本颜色", {
                            style: new flutter_sdk_1.TextStyle({
                                color: flutter_sdk_1.Colors.orange,
                            })
                        }),
                    }),
                    new section_title_1.MySectionTitle("富文本"),
                    new flutter_sdk_1.Padding({
                        padding: flutter_sdk_1.EdgeInsets.all(10),
                        child: new flutter_sdk_1.RichText({
                            text: new flutter_sdk_1.TextSpan({
                                style: new flutter_sdk_1.TextStyle({
                                    color: new flutter_sdk_1.Color(0xFFFF8C00),
                                    fontSize: 18.0,
                                    decoration: flutter_sdk_1.TextDecoration.underline,
                                    decorationColor: flutter_sdk_1.Colors.orange,
                                    decorationStyle: flutter_sdk_1.TextDecorationStyle.dashed,
                                }),
                                text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                                children: [
                                    new flutter_sdk_1.TextSpan({
                                        text: ' style  ',
                                        style: new flutter_sdk_1.TextStyle({
                                            color: flutter_sdk_1.Colors.red,
                                            fontWeight: flutter_sdk_1.FontWeight.bold,
                                            decoration: flutter_sdk_1.TextDecoration.none,
                                        })
                                    }),
                                    new flutter_sdk_1.TextSpan({
                                        text: 'your text',
                                        style: new flutter_sdk_1.TextStyle({
                                            color: flutter_sdk_1.Colors.blue,
                                            fontWeight: flutter_sdk_1.FontWeight.bold,
                                            decoration: flutter_sdk_1.TextDecoration.none,
                                        })
                                    }),
                                ],
                            }),
                            overflow: flutter_sdk_1.TextOverflow.ellipsis,
                            maxLines: 99
                        }),
                    })
                ],
            })
        });
    }
}
exports.MyTextPage = MyTextPage;
