"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyImagePage = void 0;
const fs = require("flutter_sdk");
class MyImagePage extends fs.StatelessWidget {
    genImageUI(boxFitName, fit) {
        return [
            fs.ListTile.new({
                title: fs.Text.new('BoxFit.' + boxFitName),
            }),
            fs.Container.new({
                height: 150,
                width: 300,
                color: fs.Colors.orange,
                child: fs.Image.asset('people/ali_landscape.png', {
                    package: 'flutter_gallery_assets',
                    fit: fit,
                    height: 100
                }),
            }),
        ];
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("Images"),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({ title: fs.Text.new("加载网络图片"), }),
                    fs.Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg', {
                        fit: fs.BoxFit.cover,
                        height: 250,
                    }),
                    fs.ListTile.new({ title: fs.Text.new("加载本地图片"), }),
                    fs.Image.asset('people/ali_landscape.png', {
                        package: 'flutter_gallery_assets',
                        fit: fs.BoxFit.cover,
                        height: 250
                    }),
                    ...this.genImageUI("contain", fs.BoxFit.contain),
                    ...this.genImageUI("fill", fs.BoxFit.fill),
                    ...this.genImageUI("fitHeight", fs.BoxFit.fitHeight),
                    ...this.genImageUI("fitWidth", fs.BoxFit.fitWidth),
                    ...this.genImageUI("scaleDown", fs.BoxFit.scaleDown),
                    ...this.genImageUI("none", fs.BoxFit.none),
                ],
            }),
        });
    }
    static new() {
        return new MyImagePage();
    }
}
exports.MyImagePage = MyImagePage;
