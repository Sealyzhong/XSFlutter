/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyEasyRefreshClassicalDemoPage } from "demo/easy_refresh/classical_demo";
import { MyEasyRefreshMaterialDemoPage } from "demo/easy_refresh/material_demo";
import { MyEasyRefreshClassEmptyWidgetPage } from "demo/easy_refresh/empty_widget";

export class MyEasyRefreshIndex extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("Easy Refresh"),
            }),
            body:fs.ListView.new({
                children:[
                    fs.ListTile.new({
                        leading:fs.Text.new("1",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("经典样式"),
                        subtitle:fs.Text.new("经典(默认)风格"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyEasyRefreshClassicalDemoPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("2",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Material Demo"),
                        subtitle:fs.Text.new("经典(默认)风格Material Demo"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyEasyRefreshMaterialDemoPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("3",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Empty Widget"),
                        subtitle:fs.Text.new("空视图"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyEasyRefreshClassEmptyWidgetPage.new();
                                }
                            }));
                        }                        
                    }),
                
                ],
            }),
        });
    }

    static new(){
        return new MyEasyRefreshIndex();
    }
}
