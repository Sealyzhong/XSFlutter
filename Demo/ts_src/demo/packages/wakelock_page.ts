/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyWakelockPage extends fs.StatefulWidget{
    createState() {
        return new _MyWakelockPage(this);
    }

    static new (){
        return new MyWakelockPage();
    }
}

class _MyWakelockPage extends fs.WidgetState{
    
   isEnabled:boolean = false;
   
   async initState(){
        fs.Future.delayed(fs.Duration.new({seconds:1}),
            this._getStatus.bind(this)
        )
   }

    async _getStatus(){
        this.isEnabled = await tl.Wakelock.isEnabled();
        this.setState();
    }

   async _enable(){
    var v= await tl.Wakelock.enable();
    var n = await tl.Wakelock.isEnabled();
    this.isEnabled = n;
    this.setState();
   }

   async _disable(){
    var v= await tl.Wakelock.disable();
    var n = await tl.Wakelock.isEnabled();
    this.isEnabled = n;
    this.setState();
   }

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("WakeLock"),
            }),
            body:fs.Center.new({
                child:fs.Column.new({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        fs.Row.new({
                            mainAxisAlignment:fs.MainAxisAlignment.center,
                            crossAxisAlignment:fs.CrossAxisAlignment.center,
                            children:[
                                fs.Text.new("Wakelock("+String(this.isEnabled)+"): "),
                                fs.Switch.new({value:this.isEnabled,activeColor:fs.Colors.green}),
                            ]                            
                        }),
                        fs.RaisedButton.new({
                            child:fs.Text.new("启用"),
                            onPressed:this._enable.bind(this),
                        }),

                        fs.RaisedButton.new({
                            child:fs.Text.new("禁用"),
                            onPressed:this._disable.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
