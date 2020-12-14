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
class MyScreenInfoPage extends fs.StatefulWidget {
    createState() {
        return new _MyScreenInfoPage(this);
    }
}
exports.MyScreenInfoPage = MyScreenInfoPage;
class _MyScreenInfoPage extends fs.WidgetState {
    async _updateScreenInfo() {
        await fs.ScreenInfo.getInstance().updateInfo();
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
                        new fs.Text("appBarHeight:" + String(fs.ScreenInfo.appBarHeight)),
                        new fs.Text("bottomBarHeight:" + String(fs.ScreenInfo.bottomBarHeight)),
                        new fs.Text("screenDensity:" + String(fs.ScreenInfo.screenDensity)),
                        new fs.Text("dpRatio:" + String(fs.ScreenInfo.dpRatio)),
                        new fs.Text("pxRatio:" + String(fs.ScreenInfo.pxRatio)),
                        new fs.Text("Width+Height:" + String(fs.ScreenInfo.screenWidth) + "x" + String(fs.ScreenInfo.screenHeight)),
                        new fs.Text("Width+Height(px):" + String(fs.ScreenInfo.screenWidthPx) + "x" + String(fs.ScreenInfo.screenHeightPx)),
                        new fs.Text("uiDensity:" + String(fs.ScreenInfo.uiDensity)),
                        new fs.Text("Width+Height(UI):" + String(fs.ScreenInfo.uiWidth) + "x" + String(fs.ScreenInfo.uiHeight)),
                        new fs.Text("Width+Height(px)(UI):" + String(fs.ScreenInfo.uiWidthPx) + "x" + String(fs.ScreenInfo.uiHeightPx)),
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
