/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyLoadingPage extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});
    
    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("Loading"),
            }),
            body:fs.ListView.new({
                children:[
                    fs.ListTile.new({
                        leading:fs.Text.new("1",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("show Success"),
                        subtitle:fs.Text.new("参数:info、duratio、alignment"),
                        onTap:function(){
                            tl.Loading.showSuccess({info:"加载成功！",alignment:fs.Alignment.center});
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("2",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("show Error"),
                        subtitle:fs.Text.new("参数:info、duratio、alignment"),
                        onTap:function(){
                            tl.Loading.showError({info:"加载失败",alignment:fs.Alignment.center});
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("3",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("show Info"),
                        subtitle:fs.Text.new("参数:info、duratio、alignment"),
                        onTap:function(){
                            tl.Loading.showInfo({info:"提示消息",alignment:fs.Alignment.center});
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("4",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("show Toast"),
                        subtitle:fs.Text.new("参数:info、duratio、alignment"),
                        onTap:function(){
                            tl.Loading.showToast({info:"你有新的消息!",alignment:fs.Alignment.bottomCenter});
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("5",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("show(数据加载中...)"),
                        subtitle:fs.Text.new("参数:info"),
                        onTap:function(){
                            tl.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});

                            fs.Future.delayed(fs.Duration.new({
                                seconds:5
                            }),
                            function(){
                                tl.Loading.dismiss();
                            });
                        }                        
                    }),
                ],
            }),
        });
    }

    static new(){
        return new MyLoadingPage();
    }
}
