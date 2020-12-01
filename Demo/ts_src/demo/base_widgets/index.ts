/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyAppBarPage } from "demo/base_widgets/app_bar_page";
import { MyCupertinoIconsPage } from "demo/base_widgets/cupertino_icons_page";
import { MyMaterialIconsPage } from "demo/base_widgets/material_icons_page";
import { MySectionTitle } from "demo/widgets/section_title";
import { MyPlaceholderPage } from "demo/base_widgets/placeholder_page";
import { MyContainerPage } from "demo/base_widgets/container_page";
import { MyColumnPage } from "demo/base_widgets/column_page";
import { MyRowPage } from "demo/base_widgets/row_page";
import { MyTextPage } from "demo/base_widgets/text_page";
import { MyButtonPage } from "demo/base_widgets/button_page";
import { MyFlutterLogoPage } from "demo/base_widgets/flutter_logo_page";
import { MyTextFieldPage } from "demo/base_widgets/text_field_page";
import { MyImagePage } from "demo/base_widgets/image_page";

export class MyBaseWidgetsIndex extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});
    
    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("通用组件"),
            }),
            body:fs.ListView.new({
                children:[
                    MySectionTitle.new("基础组件"),
                
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Material Icons"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyMaterialIconsPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Cupertino Icons"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyCupertinoIconsPage.new();
                                }
                            }));
                        }                        
                    }),

                    //new 的写法2
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("AppBar"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return new MyAppBarPage();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("PlaceHolder"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyPlaceholderPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Image"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyImagePage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Text"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyTextPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("TextField"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyTextFieldPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Button"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyButtonPage.new();
                                }
                            }));
                        }                        
                    }),



                    MySectionTitle.new("布局组件"),
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Container"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyContainerPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Column"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyColumnPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Row"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyRowPage.new();
                                }
                            }));
                        }                        
                    }),

                    MySectionTitle.new("其它组件"),
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Flutter Logo"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyFlutterLogoPage.new();
                                }
                            }));
                        }                        
                    }),

                ],
            }),
        });
    }

    static new(){
        return new MyBaseWidgetsIndex();
    }
}
