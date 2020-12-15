"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyImagePage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyImagePage extends flutter_sdk_1.StatelessWidget {
    genImageUI(boxFitName, fit) {
        return [
            new flutter_sdk_1.ListTile({
                title: new flutter_sdk_1.Text('BoxFit.' + boxFitName),
            }),
            new flutter_sdk_1.Container({
                height: 150,
                width: 300,
                color: flutter_sdk_1.Colors.orange,
                child: flutter_sdk_1.Image.asset('people/ali_landscape.png', {
                    package: 'flutter_gallery_assets',
                    fit: fit,
                    height: 100
                }),
            }),
        ];
    }
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("Images"),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("加载网络图片"), }),
                    flutter_sdk_1.Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg', {
                        fit: flutter_sdk_1.BoxFit.cover,
                        height: 250,
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("加载本地图片"), }),
                    flutter_sdk_1.Image.asset('people/ali_landscape.png', {
                        package: 'flutter_gallery_assets',
                        fit: flutter_sdk_1.BoxFit.cover,
                        height: 250
                    }),
                    ...this.genImageUI("contain", flutter_sdk_1.BoxFit.contain),
                    ...this.genImageUI("fill", flutter_sdk_1.BoxFit.fill),
                    ...this.genImageUI("fitHeight", flutter_sdk_1.BoxFit.fitHeight),
                    ...this.genImageUI("fitWidth", flutter_sdk_1.BoxFit.fitWidth),
                    ...this.genImageUI("scaleDown", flutter_sdk_1.BoxFit.scaleDown),
                    ...this.genImageUI("none", flutter_sdk_1.BoxFit.none),
                ],
            }),
        });
    }
}
exports.MyImagePage = MyImagePage;
