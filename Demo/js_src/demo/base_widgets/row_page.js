"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRowPage = void 0;
const fs = require("flutter_sdk");
class MyRowPage extends fs.StatelessWidget {
    genSevenContainers() {
        return [
            fs.Container.new({
                color: fs.Colors.red,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.orange,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.yellow,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.green,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.indigo,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.purple,
                height: 30,
                width: 100,
            }),
        ];
    }
    genThreeContainers() {
        return [
            fs.Container.new({
                color: fs.Colors.red,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.orange,
                height: 30,
                width: 100,
            }),
            fs.Container.new({
                color: fs.Colors.yellow,
                height: 30,
                width: 100,
            }),
        ];
    }
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new('Row'),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({ title: fs.Text.new("Row"), }),
                    fs.Row.new({
                        children: [
                            fs.Container.new({
                                color: fs.Colors.red,
                                height: 100,
                                width: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.orange,
                                height: 100,
                                width: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.yellow,
                                height: 100,
                                width: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.green,
                                height: 100,
                                width: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.indigo,
                                height: 100,
                                width: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.purple,
                                height: 100,
                                width: 30,
                            }),
                        ],
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Top-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Top-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Top-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Center-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Center-Center"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Center-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Bottom-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Bottom-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row Bottom-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceAround-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceAround-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceAround-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceBetween-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceBetween-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceBetween-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceEvenly-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceEvenly-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Row SpaceEvenly-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Row.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                ],
            })
        });
    }
    static new() {
        return new MyRowPage();
    }
}
exports.MyRowPage = MyRowPage;
