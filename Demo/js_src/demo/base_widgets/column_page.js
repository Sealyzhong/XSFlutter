"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyColumnPage = void 0;
const fs = require("flutter_sdk");
class MyColumnPage extends fs.StatelessWidget {
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
                title: fs.Text.new('Column'),
            }),
            body: fs.ListView.new({
                children: [
                    fs.ListTile.new({ title: fs.Text.new("Column"), }),
                    fs.Column.new({
                        children: [
                            fs.Container.new({
                                color: fs.Colors.red,
                                height: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.orange,
                                height: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.yellow,
                                height: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.green,
                                height: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.indigo,
                                height: 30,
                            }),
                            fs.Container.new({
                                color: fs.Colors.purple,
                                height: 30,
                            }),
                        ],
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Top-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Top-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Top-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.start,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Center-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Center-Center"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Center-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.center,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Bottom-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Bottom-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column Bottom-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.end,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceAround-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceAround-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceAround-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceAround,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceBetween-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceBetween-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceBetween-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceBetween,
                            crossAxisAlignment: fs.CrossAxisAlignment.end,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceEvenly-Left"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.start,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceEvenly-Middle"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
                            mainAxisAlignment: fs.MainAxisAlignment.spaceEvenly,
                            crossAxisAlignment: fs.CrossAxisAlignment.center,
                            children: this.genThreeContainers(),
                        }),
                    }),
                    fs.ListTile.new({ title: fs.Text.new("Column SpaceEvenly-Right"), }),
                    fs.Container.new({
                        color: fs.Colors.grey,
                        height: 200,
                        child: fs.Column.new({
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
        return new MyColumnPage();
    }
}
exports.MyColumnPage = MyColumnPage;
