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
class MyPackageInfoPage extends fs.StatefulWidget {
    createState() {
        return new _MyPackageInfoPage(this);
    }
}
exports.MyPackageInfoPage = MyPackageInfoPage;
class _MyPackageInfoPage extends fs.WidgetState {
    async _updatePackageInfo() {
        await fs.PackageInfo.getInstance().updateInfo();
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
                        new fs.Text("appName: " + String(fs.PackageInfo.appName)),
                        new fs.Text("buildNumber: " + String(fs.PackageInfo.buildNumber)),
                        new fs.Text("packageName: " + String(fs.PackageInfo.packageName)),
                        new fs.Text("version: " + String(fs.PackageInfo.version)),
                    ]
                }),
            }),
        });
    }
}
