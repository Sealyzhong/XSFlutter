/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyCounterPage } from "demo/common_demo/counter_page";
import { MyBaseWidgetsIndex } from "demo/base_widgets/index";
import { MyLoadingPage } from "demo/common_demo/loading_page";
import { MySharedPreferncesPage } from "demo/common_demo/shared_preferences_page";

export class MyHomePage extends fs.StatefulWidget{
    createState() {
        return _MyHomePageState.new(this)
    }
}

class _MyHomePageState extends fs.WidgetState{
    
    
    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("TS Demo"),
            }),
            body:fs.ListView.new({
                children:[
                    //MySectionTitle.new("通用 Demo"),
                    
                    //new 的写法1
                    fs.ListTile.new({
                        leading:fs.Text.new("1",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Flutter Counter"),
                        subtitle:fs.Text.new("Flutter 官方 Demo"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyCounterPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("2",{style:this._style}),
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
                        leading:fs.Text.new("3",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Loading..."),
                        subtitle:fs.Text.new("showSuccess、showError、showInfo、showToast..."),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyLoadingPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("4",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("本地数据存储(shared_preferences)"),
                        subtitle:fs.Text.new("get、set"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MySharedPreferncesPage.new();
                                }
                            }));
                        }                        
                    }),

                    /*
                    fs.ListTile.new({
                        leading:fs.Text.new("4",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new(moment().format("yyyy-MM-dd HH:mm")),
                        subtitle:fs.Text.new("get、set"),
                        onTap:function(){
                                ax.axios.get('http://api.nnzhp.cn/api/user/stu_info')
                                .then(function (response) {
                                    fs.Log.log("success:"+JSON.stringify(response));
                                    // handle success
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    fs.Log.log("error:"+JSON.stringify(error));
                                    // handle error
                                    console.log(error);
                                })
                                .then(function () {
                                    // always executed
                                });                                                        
                        }                        
                    }),*/
                ],
            }),
        });
    }

    static new(widget:fs.StatefulWidget){
        return new _MyHomePageState(widget);
    }
}
