"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    _updatePackageInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs.PackageInfo.getInstance().updateInfo();
            this.setState();
        });
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
