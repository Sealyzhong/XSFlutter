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
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("ListView"),
            }),
            body:new fs.ListView({
                children:[
                  
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、ListView"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyListViewPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("2、ListView.builder"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyListViewBuilderPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("3、ListView.separated"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MySeparatorBuilderPage();
                                }
                            }));
                        }                        
                    }),       
                    
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("4、ListView.custom.list"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyListViewCustomListPage();
                                }
                            }));
                        }                        
                    }),  

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("5、ListView.custom.builder"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyListViewCustomBuilderPage();
                                }
                            }));
                        }                        
                    }),  
                ],
            }),
        });
    }
}
