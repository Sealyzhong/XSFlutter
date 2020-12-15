"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyMaterialIconsPage = void 0;
const icon_data_1 = require("demo/model/icon_data");
const flutter_sdk_1 = require("flutter_sdk");
class MyMaterialIconsPage extends flutter_sdk_1.StatelessWidget {
    getWidgetList() {
        var list = new Array();
        icon_data_1.MyIconData.icons.forEach((model) => {
            list.push(new flutter_sdk_1.Container({
                padding: flutter_sdk_1.EdgeInsets.all(10),
                child: new flutter_sdk_1.Row({
                    children: [
                        new flutter_sdk_1.Icon(model.value),
                        new flutter_sdk_1.SizedBox({ width: 10 }),
                        new flutter_sdk_1.Expanded({
                            child: new flutter_sdk_1.Text(model.name, { overflow: flutter_sdk_1.TextOverflow.ellipsis, style: new flutter_sdk_1.TextStyle({ fontSize: 16 }) }),
                        }),
                    ]
                }),
            }));
        });
        return list;
    }
    //重构
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text("Material Icons")
            }),
            body: new flutter_sdk_1.ListView({
                children: this.getWidgetList()
            }),
        });
    }
}
exports.MyMaterialIconsPage = MyMaterialIconsPage;
