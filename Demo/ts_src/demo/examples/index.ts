/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyCounterPage } from "demo/examples/counter_page";
import { MyTestWidgetPage } from "demo/examples/test_widget_page";

export class MyExamplesIndex extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("通用案例"),
            }),
            body:fs.ListView.new({
                children:[
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
                        title:fs.Text.new("Test Widget"),
                        subtitle:fs.Text.new("测试常用属于DSL JSON字符,方便映射开发"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyTestWidgetPage.new();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }

    static new(){
        return new MyExamplesIndex();
    }
}
