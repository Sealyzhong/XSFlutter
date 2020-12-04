/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyListViewPage } from "demo/listview/listview_page";
import { MyListViewBuilderPage } from "demo/listview/listview_builder_page";
import { MySeparatorBuilderPage } from "demo/listview/listview_separatorBuilder_page";
import { MyListViewCustomListPage } from "demo/listview/listview_custom_list_page";
import { MyListViewCustomBuilderPage } from "demo/listview/listview_custom_builder_page";

export class MyListViewIndex extends fs.StatelessWidget{

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("ListView"),
            }),
            body:fs.ListView.new({
                children:[
                  
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("1、ListView"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyListViewPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("2、ListView.builder"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyListViewBuilderPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("3、ListView.separated"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MySeparatorBuilderPage.new();
                                }
                            }));
                        }                        
                    }),       
                    
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("4、ListView.custom.list"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyListViewCustomListPage.new();
                                }
                            }));
                        }                        
                    }),  

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("5、ListView.custom.builder"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyListViewCustomBuilderPage.new();
                                }
                            }));
                        }                        
                    }),  
                ],
            }),
        });
    }

    static new(){
        return new MyListViewIndex();
    }
}
