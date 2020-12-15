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
exports.MyPermissionPage = void 0;
const fs = require("flutter_sdk");
class MyPermissionPage extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("Url Laucher"),
            }),
            body: new fs.ListView({
                children: [
                    new fs.ListTile({
                        leading: new fs.Text("1", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("getStatus"),
                        //subtitle:new fs.Text("https://www.baidu.com"),
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var a = yield fs.PermissionHandler.request(fs.Permission.camera);
                            fs.Log.log(fs.Convert.toString(a.status.toString()));
                        })
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("2", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("isDenied"),
                        //subtitle:new fs.Text("tels:10000"),
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var a = yield fs.PermissionHandler.isDenied(fs.Permission.camera);
                            fs.Log.log(fs.Convert.toString(a));
                        })
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("3", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("isUndetermined"),
                        //subtitle:new fs.Text("tels:10000"),
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var a = yield fs.PermissionHandler.isUndetermined(fs.Permission.camera);
                            fs.Log.log(fs.Convert.toString(a));
                        })
                    }),
                    new fs.ListTile({
                        leading: new fs.Text("4", { style: this._style }),
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("request"),
                        //subtitle:new fs.Text("tels:10000"),
                        onTap: () => __awaiter(this, void 0, void 0, function* () {
                            var a = yield fs.PermissionHandler.request(fs.Permission.camera);
                            fs.Log.log(fs.Convert.toString(a.status.toString()));
                        })
                    }),
                ]
            }),
        });
    }
}
exports.MyPermissionPage = MyPermissionPage;
