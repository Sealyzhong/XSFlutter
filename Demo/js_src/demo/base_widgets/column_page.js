"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyColumnPage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyColumnPage extends flutter_sdk_1.StatelessWidget {
    genSevenContainers() {
        return [
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.red,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.orange,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.yellow,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.green,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.indigo,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.purple,
                height: 30,
                width: 100,
            }),
        ];
    }
    genThreeContainers() {
        return [
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.red,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.orange,
                height: 30,
                width: 100,
            }),
            new flutter_sdk_1.Container({
                color: flutter_sdk_1.Colors.yellow,
                height: 30,
                width: 100,
            }),
        ];
    }
    build(context) {
        return new flutter_sdk_1.Scaffold({
            appBar: new flutter_sdk_1.AppBar({
                title: new flutter_sdk_1.Text('Column'),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column"), }),
                    new flutter_sdk_1.Column({
                        children: [
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.red,
                                height: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.orange,
                                height: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.yellow,
                                height: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.green,
                                height: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.indigo,
                                height: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.purple,
                                height: 30,
                            }),
                        ],
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Top-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Top-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Top-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Center-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Center-Center"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Center-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Bottom-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Bottom-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column Bottom-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceAround-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceAround-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceAround-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceBetween-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceBetween-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceBetween-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceEvenly-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceEvenly-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Column SpaceEvenly-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Column({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                ],
            })
        });
    }
}
exports.MyColumnPage = MyColumnPage;
