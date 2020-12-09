"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFlutterLogoPage = void 0;
const fs = require("flutter_sdk");
class MyFlutterLogoPage extends fs.StatelessWidget {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text('FlutterLogo'),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({ title: new fs.Text("FlutterLogo") }),
                    new fs.FlutterLogo({}),
                    new fs.ListTile({ title: new fs.Text("FlutterLogo Size"), }),
                    new fs.FlutterLogo({ size: 60 }),
                    new fs.ListTile({ title: new fs.Text("FlutterLogo Size"), }),
                    new fs.FlutterLogo({ size: 100 }),
                ],
            })
        });
    }
}
exports.MyFlutterLogoPage = MyFlutterLogoPage;
