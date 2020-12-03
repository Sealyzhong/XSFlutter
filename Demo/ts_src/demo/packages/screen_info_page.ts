/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import api = require("flutter_api");

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
       await api.ScreenInfo.updateInfo();
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
                        fs.Text.new("appBarHeight:"+String(api.ScreenInfo.appBarHeight)),
                        fs.Text.new("bottomBarHeight:"+String(api.ScreenInfo.bottomBarHeight)),
                        fs.Text.new("screenDensity:"+String(api.ScreenInfo.screenDensity)),
                        fs.Text.new("dpRatio:"+String(api.ScreenInfo.dpRatio)),
                        fs.Text.new("pxRatio:"+String(api.ScreenInfo.pxRatio)),
                        fs.Text.new("Width+Height:"+String(api.ScreenInfo.screenWidth)+"x"+String(api.ScreenInfo.screenHeight)),
                        fs.Text.new("Width+Height(px):"+String(api.ScreenInfo.screenWidthPx)+"x"+String(api.ScreenInfo.screenHeightPx)),
                        fs.Text.new("uiDensity:"+String(api.ScreenInfo.uiDensity)),
                        fs.Text.new("Width+Height(UI):"+String(api.ScreenInfo.uiWidth)+"x"+String(api.ScreenInfo.uiHeight)),
                        fs.Text.new("Width+Height(px)(UI):"+String(api.ScreenInfo.uiWidthPx)+"x"+String(api.ScreenInfo.uiHeightPx)),
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
