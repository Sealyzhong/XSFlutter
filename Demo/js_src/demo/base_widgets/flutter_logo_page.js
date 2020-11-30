"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFlutterLogoPage = void 0;
const fs = require("flutter_sdk");
class MyFlutterLogoPage extends fs.StatelessWidget {
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new('FlutterLogo'),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({ title: fs.Text.new("FlutterLogo") }),
                    fs.FlutterLogo.new({}),
                    fs.ListTile.new({ title: fs.Text.new("FlutterLogo Size"), }),
                    fs.FlutterLogo.new({ size: 60 }),
                    fs.ListTile.new({ title: fs.Text.new("FlutterLogo Size"), }),
                    fs.FlutterLogo.new({ size: 100 }),
                ],
            })
        });
    }
    static new() {
        return new MyFlutterLogoPage();
    }
}
exports.MyFlutterLogoPage = MyFlutterLogoPage;
