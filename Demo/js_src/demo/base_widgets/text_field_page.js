"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyTextFieldPage = void 0;
const section_title_1 = require("demo/widgets/section_title");
const flutter_sdk_1 = require("flutter_sdk");
const flutter_sdk_2 = require("../../../build/ios/Debug-iphonesimulator/Runner.app/Frameworks/App.framework/flutter_assets/packages/xsflutter/js_lib/flutter_sdk");
class MyTextFieldPage extends flutter_sdk_1.StatefulWidget {
    createState() {
        return new _MyTextFieldPage(this);
    }
}
exports.MyTextFieldPage = MyTextFieldPage;
class _MyTextFieldPage extends flutter_sdk_1.WidgetState {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("Text Field"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new section_title_1.MySectionTitle("默认样式"),
                    new flutter_sdk_1.Padding({
                        padding: flutter_sdk_1.EdgeInsets.all(10),
                        child: new flutter_sdk_1.TextField({
                            decoration: new flutter_sdk_1.InputDecoration(),
                        }),
                    }),
                    new section_title_1.MySectionTitle("icon"),
                    new flutter_sdk_1.Padding({
                        padding: flutter_sdk_1.EdgeInsets.all(10),
                        child: new flutter_sdk_1.TextField({
                            decoration: new flutter_sdk_1.InputDecoration({
                                icon: new flutter_sdk_1.Icon(flutter_sdk_1.Icons.person),
                                errorBorder: flutter_sdk_1.InputBorder.none(),
                                disabledBorder: new flutter_sdk_2.OutlineInputBorder({
                                    borderSide: new flutter_sdk_1.BorderSide(),
                                }),
                                enabledBorder: new flutter_sdk_2.UnderlineInputBorder(),
                            }),
                            inputFormatters: [
                                flutter_sdk_1.TextInputFormatter.lengthLimiting(10),
                                flutter_sdk_1.TextInputFormatter.digitsOnly(),
                            ]
                        }),
                    }),
                ],
            }),
        });
    }
}
