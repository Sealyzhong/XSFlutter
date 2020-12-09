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

    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("通用案例"),
            }),
            body:new fs.ListView({
                children:[
                    new fs.ListTile({
                        leading:new fs.Text("1",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Flutter Counter"),
                        subtitle:new fs.Text("Flutter 官方 Demo"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyCounterPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("2",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Test Widget"),
                        subtitle:new fs.Text("测试常用属于DSL JSON字符,方便映射开发"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyTestWidgetPage();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }
}
