/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyScreenInfoPage extends fs.StatefulWidget{
    createState() {
        return new _MyScreenInfoPage(this);
    }

    static new (){
        return new MyScreenInfoPage();
    }
}

class _MyScreenInfoPage extends fs.WidgetState{
    
   async _updateScreenInfo(){
       await tl.ScreenInfo.updateInfo();
        this.setState();
    }

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("屏幕信息"),
            }),
            body:fs.Center.new({
                child:fs.Column.new({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        fs.Text.new("appBarHeight:"+String(tl.ScreenInfo.appBarHeight)),
                        fs.Text.new("bottomBarHeight:"+String(tl.ScreenInfo.bottomBarHeight)),
                        fs.Text.new("screenDensity:"+String(tl.ScreenInfo.screenDensity)),
                        fs.Text.new("dpRatio:"+String(tl.ScreenInfo.dpRatio)),
                        fs.Text.new("pxRatio:"+String(tl.ScreenInfo.pxRatio)),
                        fs.Text.new("Width+Height:"+String(tl.ScreenInfo.screenWidth)+"x"+String(tl.ScreenInfo.screenHeight)),
                        fs.Text.new("Width+Height(px):"+String(tl.ScreenInfo.screenWidthPx)+"x"+String(tl.ScreenInfo.screenHeightPx)),
                        fs.Text.new("uiDensity:"+String(tl.ScreenInfo.uiDensity)),
                        fs.Text.new("Width+Height(UI):"+String(tl.ScreenInfo.uiWidth)+"x"+String(tl.ScreenInfo.uiHeight)),
                        fs.Text.new("Width+Height(px)(UI):"+String(tl.ScreenInfo.uiWidthPx)+"x"+String(tl.ScreenInfo.uiHeightPx)),
                        fs.RaisedButton.new({
                            child:fs.Text.new("更新屏幕值"),
                            onPressed:this._updateScreenInfo.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
