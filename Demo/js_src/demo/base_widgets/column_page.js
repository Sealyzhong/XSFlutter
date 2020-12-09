"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyColumnPage = void 0;
const fs = require("flutter_sdk");
class MyColumnPage extends fs.StatelessWidget {
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
                title: new fs.Text('Column'),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({ title: new fs.Text("Column"), }),
                    new fs.Column({
                        children: [
                            new fs.Container({
                                color: fs.Colors.red,
                                height: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.orange,
                                height: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.yellow,
                                height: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.green,
                                height: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.indigo,
                                height: 30,
                            }),
                            new fs.Container({
                                color: fs.Colors.purple,
                                height: 30,
                            }),
                        ],
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Top-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Top-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Top-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Center-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Center-Center"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Center-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Bottom-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Bottom-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column Bottom-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceAround-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceAround-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceAround-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceBetween-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceBetween-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceBetween-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceEvenly-Left"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceEvenly-Middle"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    new fs.ListTile({ title: new fs.Text("Column SpaceEvenly-Right"), }),
                    new fs.Container({
                        color: fs.Colors.grey,
                        height: 200,
                        child: new fs.Column({
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
exports.MyColumnPage = MyColumnPage;
