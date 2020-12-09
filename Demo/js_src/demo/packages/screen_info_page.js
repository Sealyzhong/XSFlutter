"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyScreenInfoPage = void 0;
const fs = require("flutter_sdk");
const tl = require("flutter_third_library");
class MyScreenInfoPage extends fs.StatefulWidget {
    createState() {
        return new _MyScreenInfoPage(this);
    }
}
exports.MyScreenInfoPage = MyScreenInfoPage;
class _MyScreenInfoPage extends fs.WidgetState {
    async _updateScreenInfo() {
        await tl.ScreenInfo.updateInfo();
        this.setState();
    }
    build(context) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("屏幕信息"),
            }),
            body: new fs.Center({
                child: new fs.Column({
                    mainAxisAlignment: fs.MainAxisAlignment.center,
                    children: [
                        new fs.Text("appBarHeight:" + String(tl.ScreenInfo.appBarHeight)),
                        new fs.Text("bottomBarHeight:" + String(tl.ScreenInfo.bottomBarHeight)),
                        new fs.Text("screenDensity:" + String(tl.ScreenInfo.screenDensity)),
                        new fs.Text("dpRatio:" + String(tl.ScreenInfo.dpRatio)),
                        new fs.Text("pxRatio:" + String(tl.ScreenInfo.pxRatio)),
                        new fs.Text("Width+Height:" + String(tl.ScreenInfo.screenWidth) + "x" + String(tl.ScreenInfo.screenHeight)),
                        new fs.Text("Width+Height(px):" + String(tl.ScreenInfo.screenWidthPx) + "x" + String(tl.ScreenInfo.screenHeightPx)),
                        new fs.Text("uiDensity:" + String(tl.ScreenInfo.uiDensity)),
                        new fs.Text("Width+Height(UI):" + String(tl.ScreenInfo.uiWidth) + "x" + String(tl.ScreenInfo.uiHeight)),
                        new fs.Text("Width+Height(px)(UI):" + String(tl.ScreenInfo.uiWidthPx) + "x" + String(tl.ScreenInfo.uiHeightPx)),
                        new fs.RaisedButton({
                            child: new fs.Text("更新屏幕值"),
                            onPressed: this._updateScreenInfo.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
