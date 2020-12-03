/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import api = require("flutter_api");
import { MyBaseWidgetsIndex } from "demo/base_widgets/index";
import { MyPackageIndex } from "demo/packages/index";
import { MyExamplesIndex } from "demo/examples/index";
import { MyDialogIndex } from "demo/dialog/index";


export class MyHomePage extends fs.StatefulWidget{
    createState() {
        return _MyHomePageState.new(this)
    }
}

class _MyHomePageState extends fs.WidgetState{
    

    //subclass override
    initState() {
        fs.Log.log("MyHomePage.initState");
        api.ScreenInfo.updateInfo();
        api.PackageInfo.updateInfo();
    }
    
    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("TS Demo"),
            }),
            body:fs.ListView.new({
                children:[
                    
                    fs.ListTile.new({
                        leading:fs.Text.new("1",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("基础组件"),
                        subtitle:fs.Text.new("Icons、Cupertino、Widgets、App Bar"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyBaseWidgetsIndex.new();
                                }
                            }));
                        }                        
                    }),

                    
                    fs.ListTile.new({
                        leading:fs.Text.new("2",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("常用实例"),
                        subtitle:fs.Text.new("计数器、图片库"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyExamplesIndex.new();
                                }
                            }));
                        }                        
                    }),

                    

                    fs.ListTile.new({
                        leading:fs.Text.new("3",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("第三方库"),
                        subtitle:fs.Text.new("Loading、PackageInfo、ScreenInfo..."),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyPackageIndex.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("4",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Dialog"),
                        subtitle:fs.Text.new("常用提示框"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyDialogIndex.new();
                                }
                            }));
                        }                        
                    }),


                    fs.ListTile.new({
                        leading:fs.Text.new("5",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("TS2Project"),
                        subtitle:fs.Text.new("在本工程中实现JS与Project通信息"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    //return MySharedPreferncesPage.new();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }

    static new(widget:fs.StatefulWidget){
        return new _MyHomePageState(widget);
    }
}
