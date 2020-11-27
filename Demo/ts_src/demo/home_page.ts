/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { AppBar, Icon, Icons, JSBuildContext, JSStatefulWidget, JSWidgetState, ListTile, ListView, Scaffold,Text,Navigator, MaterialPageRoute}  from "ts_flutter_sdk";
import { MySectionTitle } from "demo/widgets/section_title";
import { MyColorUtil } from "demo/utils/color_util";
import { MyCounterPage } from "demo/common_demo/counter_page";
import { MyMaterialIcons } from "demo/common_demo/material_icons";
import { MyCupertinoIcons } from "demo/common_demo/cupertino_icons";

export class MyHomePage extends JSStatefulWidget{
    createState() {
        return _MyHomePageState.new(this)
    }
}

class _MyHomePageState extends JSWidgetState{

    build(context:JSBuildContext){
        return Scaffold.new({
            appBar:AppBar.new({
                title: Text.new("TS Demo"),
            }),
            body:ListView.new({
                children:[
                    MySectionTitle.new("通用 Demo"),
                    ListTile.new({
                        leading:Icon.new(Icons.book,{color:MyColorUtil.primaryColor}),
                        trailing:Icon.new(Icons.arrow_right),
                        title:Text.new("Flutter Counter"),
                        subtitle:Text.new("Flutter 官方 Demo"),
                        onTap:function(){
                            Navigator.push(context,MaterialPageRoute.new({
                                builder:function(context?:JSBuildContext){
                                    return MyCounterPage.new();
                                }
                            }));
                        }                        
                    }),

                    ListTile.new({
                        leading:Icon.new(Icons.book,{color:MyColorUtil.primaryColor}),
                        trailing:Icon.new(Icons.arrow_right),
                        title:Text.new("Material Icons"),
                        subtitle:Text.new("安卓(原生)风格图标"),
                        onTap:function(){
                            Navigator.push(context,MaterialPageRoute.new({
                                builder:function(context?:JSBuildContext){
                                    return MyMaterialIcons.new();
                                }
                            }));
                        }                        
                    }),

                    ListTile.new({
                        leading:Icon.new(Icons.book,{color:MyColorUtil.primaryColor}),
                        trailing:Icon.new(Icons.arrow_right),
                        title:Text.new("Cupertino Icons"),
                        subtitle:Text.new("苹果风格图标"),
                        onTap:function(){
                            Navigator.push(context,MaterialPageRoute.new({
                                builder:function(context?:JSBuildContext){
                                    return MyCupertinoIcons.new();
                                }
                            }));
                        }                        
                    }),

                ],
            }),
        });
    }

    static new(widget:JSStatefulWidget){
        return new _MyHomePageState(widget);
    }
}
