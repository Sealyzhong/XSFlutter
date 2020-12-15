"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPlaceholderPage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyPlaceholderPage extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("Example - Placeholder"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("默认占位符"),
                    }),
                    new flutter_sdk_1.Placeholder({}),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("占位符换色"),
                    }),
                    new flutter_sdk_1.Placeholder({
                        fallbackHeight: 100,
                        color: flutter_sdk_1.Colors.orange,
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("占位符指定高度"),
                    }),
                    new flutter_sdk_1.Placeholder({
                        fallbackHeight: 100,
                        fallbackWidth: 100,
                        color: flutter_sdk_1.Colors.yellow,
                    }),
                    new flutter_sdk_1.ListTile({
                        title: new flutter_sdk_1.Text("占位符线条粗细"),
                    }),
                    new flutter_sdk_1.Placeholder({
                        fallbackHeight: 100,
                        fallbackWidth: 100,
                        strokeWidth: 4,
                        color: flutter_sdk_1.Colors.green,
                    }),
                ],
            }),
        });
    }
}
exports.MyPlaceholderPage = MyPlaceholderPage;
