/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyBaseWidgetsIndex } from "demo/base_widgets/index";
import { MyPackageIndex } from "demo/packages/index";
import { MyExamplesIndex } from "demo/examples/index";
import { MyDialogIndex } from "demo/dialog/index";
import { MyListViewIndex } from "demo/listview/index";
import { MyPullToRefreshIndex } from "demo/pull_to_refresh/index";
import { MyEasyRefreshIndex } from "demo/easy_refresh/index";


export class MyHomePage extends fs.StatefulWidget{
    createState() {
        return new _MyHomePageState(this)
    }
}

class _MyHomePageState extends fs.WidgetState{
    

    //subclass override
    initState() {
        fs.Log.log("MyHomePage.initState");
        fs.ScreenInfo.updateInfo();
        fs.PackageInfo.updateInfo();
    }
    
    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("TS Demo"),
            }),
            body:new fs.ListView({
                children:[
                    
                    new fs.ListTile({
                        leading:new fs.Text("1",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("基础组件"),
                        subtitle:new fs.Text("Icons、Cupertino、Widgets、App Bar"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyBaseWidgetsIndex();
                                }
                            }));
                        }                        
                    }),

                    
                    new fs.ListTile({
                        leading:new fs.Text("2",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("常用实例"),
                        subtitle:new fs.Text("计数器、图片库"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyExamplesIndex();
                                }
                            }));
                        }                        
                    }),

                    

                    new fs.ListTile({
                        leading:new fs.Text("3",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("第三方库"),
                        subtitle:new fs.Text("Loading、PackageInfo、ScreenInfo..."),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPackageIndex();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("4",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Dialog"),
                        subtitle:new fs.Text("常用提示框"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyDialogIndex();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("5",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("ListView"),
                        subtitle:new fs.Text("builder、separated、custom"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new  MyListViewIndex();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("6",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Easy Refresh"),
                        subtitle:new fs.Text("Flutter应用上实现下拉刷新"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyEasyRefreshIndex();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("7",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Pull To Refresh"),
                        subtitle:new fs.Text("Flutter应用上实现下拉刷新"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPullToRefreshIndex();
                                }
                            }));
                        }                        
                    }),


                    new fs.ListTile({
                        leading:new fs.Text("8",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("TS2Project"),
                        subtitle:new fs.Text("在本工程中实现JS与Project通信息"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    //return MySharedPreferncesPage();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }
}
