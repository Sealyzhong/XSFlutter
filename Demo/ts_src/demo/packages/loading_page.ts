/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import moment = require("moment");

export class MyLoadingPage extends fs.StatelessWidget{

    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});

    //环
    aaaa(){
        fs.Future.timer(new fs.Duration({
            seconds:5
        }),
        ()=>{
            fs.Log.log("periodic Run");
            this.aaaa();
        });
    }
    
    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Loading"),
            }),
            body:new fs.ListView({
                children:[
                    new fs.ListTile({
                        leading:new fs.Text("1",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("show Success"),
                        subtitle:new fs.Text("参数:info、duratio、alignment"),
                        onTap:()=>{
                            fs.Loading.showSuccess({info:"加载成功！",alignment:fs.Alignment.center});
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("2",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("show Error"),
                        subtitle:new fs.Text("参数:info、duratio、alignment"),
                        onTap:()=>{
                            fs.Loading.showError({info:"加载失败",alignment:fs.Alignment.center});
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("3",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("show Info"),
                        subtitle:new fs.Text("参数:info、duratio、alignment"),
                        onTap:()=>{
                            fs.Loading.showInfo({info:"提示消息",alignment:fs.Alignment.center});
                            this.aaaa();
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("4",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("show Toast"),
                        subtitle:new fs.Text("参数:info、duratio、alignment"),
                        onTap:()=>{
                            fs.Loading.showToast({info:"你有新的消息!",alignment:fs.Alignment.bottomCenter});
                            fs.Future.timer(new fs.Duration({
                                seconds:5
                            }),
                            ()=>{
                                fs.Log.log("Timer Run");
                            });
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("5",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("show(数据加载中...)"),
                        subtitle:new fs.Text("参数:info"),
                        onTap:()=>{
                            fs.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                            

                            /*
                            */

                            fs.Future.delayed(new fs.Duration({
                                seconds:5
                            }),
                            ()=>{
                                fs.Loading.dismiss();
                            });
                        }                        
                    }),
                ],
            }),
        });
    }
}
