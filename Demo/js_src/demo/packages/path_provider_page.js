"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPathProviderPage = void 0;
const fs = require("flutter_sdk");
class MyPathProviderPage extends fs.StatefulWidget {
    createState() {
        return new _MyPathProviderPageState(this);
    }
}
exports.MyPathProviderPage = MyPathProviderPage;
class _MyPathProviderPageState extends fs.WidgetState {
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("目录信息"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        title: new fs.Text("applicationDocumentsDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.applicationDocumentsDirectory),
                    }),
                    new fs.ListTile({
                        title: new fs.Text("applicationSupportDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.applicationSupportDirectory),
                    }),
                    new fs.ListTile({
                        title: new fs.Text("downloadsDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.downloadsDirectory),
                    }),
                    new fs.ListTile({
                        title: new fs.Text("externalStorageDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.externalStorageDirectory),
                    }),
                    new fs.ListTile({
                        title: new fs.Text("libraryDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.libraryDirectory),
                    }),
                    new fs.ListTile({
                        title: new fs.Text("temporaryDirectory:"),
                        subtitle: new fs.Text(fs.PathProvider.temporaryDirectory),
                    }),
                ]
            }),
        });
    }
}
