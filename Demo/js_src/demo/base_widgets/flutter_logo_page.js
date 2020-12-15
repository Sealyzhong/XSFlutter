"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFlutterLogoPage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyFlutterLogoPage extends flutter_sdk_1.StatelessWidget {
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text('FlutterLogo'),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("FlutterLogo") }),
                    new flutter_sdk_1.FlutterLogo({}),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("FlutterLogo Size"), }),
                    new flutter_sdk_1.FlutterLogo({ size: 60 }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("FlutterLogo Size"), }),
                    new flutter_sdk_1.FlutterLogo({ size: 100 }),
                ],
            })
        });
    }
}
exports.MyFlutterLogoPage = MyFlutterLogoPage;
