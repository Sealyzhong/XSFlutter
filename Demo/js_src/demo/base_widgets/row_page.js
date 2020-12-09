"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRowPage = void 0;
const fs = require("flutter_sdk");
class MyRowPage extends fs.StatelessWidget {
    genSevenContainers() {
        return [
            new fs.Container({
                color: fs.Colors.red,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.orange,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.yellow,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.green,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.indigo,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.purple,
                height: 30,
                width: 100,
            }),
        ];
    }
    genThreeContainers() {
        return [
            new fs.Container({
                color: fs.Colors.red,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.orange,
                height: 30,
                width: 100,
            }),
            new fs.Container({
                color: fs.Colors.yellow,
                height: 30,
                width: 100,
            }),
        ];
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text('Row'),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({ title: new fs.Text("Row"), }),
                    new fs.Row({
                        children: [
                            new fs.Container({
                                color: fs.Colors.red,
                                height: 100,
                                width: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.orange,
                                height: 100,
                                width: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.yellow,
                                height: 100,
                                width: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.green,
                                height: 100,
                                width: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.indigo,
                                height: 100,
                                width: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.purple,
                                height: 100,
                                width: 30,
                            }),
                        ],
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Top-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Top-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Top-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Center-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Center-Center"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Center-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Bottom-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Bottom-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row Bottom-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceAround-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceAround-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceAround-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceBetween-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceBetween-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceBetween-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceEvenly-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceEvenly-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Row SpaceEvenly-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Row({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                ],
            })
        });
    }
}
exports.MyRowPage = MyRowPage;
