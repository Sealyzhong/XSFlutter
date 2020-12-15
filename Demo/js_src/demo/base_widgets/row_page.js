"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRowPage = void 0;
const flutter_sdk_1 = require("flutter_sdk");
class MyRowPage extends flutter_sdk_1.StatelessWidget {
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
                title: new flutter_sdk_1.Text('Row'),
            }),
            body: new flutter_sdk_1.ListView({
                children: [
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row"), }),
                    new flutter_sdk_1.Row({
                        children: [
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.red,
                                height: 100,
                                width: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.orange,
                                height: 100,
                                width: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.yellow,
                                height: 100,
                                width: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.green,
                                height: 100,
                                width: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.indigo,
                                height: 100,
                                width: 30,
                            }),
                            new flutter_sdk_1.Container({
                                color: flutter_sdk_1.Colors.purple,
                                height: 100,
                                width: 30,
                            }),
                        ],
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Top-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Top-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Top-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.start,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Center-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Center-Center"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Center-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.center,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Bottom-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Bottom-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row Bottom-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.end,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceAround-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceAround-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceAround-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceBetween-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceBetween-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceBetween-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceEvenly-Left"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceEvenly-Middle"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
                            mainAxisAlignment: flutter_sdk_1.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: flutter_sdk_1.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new flutter_sdk_1.ListTile({ title: new flutter_sdk_1.Text("Row SpaceEvenly-Right"), }),
                    new flutter_sdk_1.Container({
                        color: flutter_sdk_1.Colors.grey,
                        height: 200,
                        child: new flutter_sdk_1.Row({
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
exports.MyRowPage = MyRowPage;
