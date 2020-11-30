/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");

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
       await fs.ScreenInfo.updateInfo();
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
                        fs.Text.new("appBarHeight:"+String(fs.ScreenInfo.appBarHeight)),
                        fs.Text.new("bottomBarHeight:"+String(fs.ScreenInfo.bottomBarHeight)),
                        fs.Text.new("screenDensity:"+String(fs.ScreenInfo.screenDensity)),
                        fs.Text.new("dpRatio:"+String(fs.ScreenInfo.dpRatio)),
                        fs.Text.new("pxRatio:"+String(fs.ScreenInfo.pxRatio)),
                        fs.Text.new("Width+Height:"+String(fs.ScreenInfo.screenWidth)+"x"+String(fs.ScreenInfo.screenHeight)),
                        fs.Text.new("Width+Height(px):"+String(fs.ScreenInfo.screenWidthPx)+"x"+String(fs.ScreenInfo.screenHeightPx)),
                        fs.Text.new("uiDensity:"+String(fs.ScreenInfo.uiDensity)),
                        fs.Text.new("Width+Height(UI):"+String(fs.ScreenInfo.uiWidth)+"x"+String(fs.ScreenInfo.uiHeight)),
                        fs.Text.new("Width+Height(px)(UI):"+String(fs.ScreenInfo.uiWidthPx)+"x"+String(fs.ScreenInfo.uiHeightPx)),
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
