"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPackageInfoPage = void 0;
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyPackageInfoPage extends fs.StatefulWidget {
    createState() {
        return new _MyPackageInfoPage(this);
    }
}
exports.MyPackageInfoPage = MyPackageInfoPage;
class _MyPackageInfoPage extends fs.WidgetState {
    async _updatePackageInfo() {
        await tl.PackageInfo.updateInfo();
        this.setState();
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("包信息"),
            }),
            body: new fs.Center({
                child: new fs.Column({
                    mainAxisAlignment: fs.MainAxisAlignment.center,
                    children: [
                        new fs.Text("appName: " + String(tl.PackageInfo.appName)),
                        new fs.Text("buildNumber: " + String(tl.PackageInfo.buildNumber)),
                        new fs.Text("packageName: " + String(tl.PackageInfo.packageName)),
                        new fs.Text("version: " + String(tl.PackageInfo.version)),
                    ]
                }),
            }),
        });
    }
}
