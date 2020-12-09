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

    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});
    
    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("通用组件"),
            }),
            body:new fs.ListView({
                children:[
                    new MySectionTitle("基础组件"),
                
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Material Icons"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyMaterialIconsPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Cupertino Icons"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyCupertinoIconsPage();
                                }
                            }));
                        }                        
                    }),

                    //new 的写法2
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("AppBar"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyAppBarPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("PlaceHolder"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPlaceholderPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Image"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyImagePage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Text"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyTextPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("TextField"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyTextFieldPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Button"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyButtonPage();
                                }
                            }));
                        }                        
                    }),



                    new MySectionTitle("布局组件"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Container"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyContainerPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Column"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyColumnPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Row"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyRowPage();
                                }
                            }));
                        }                        
                    }),

                    new MySectionTitle("其它组件"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Flutter Logo"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyFlutterLogoPage();
                                }
                            }));
                        }                        
                    }),

                ],
            }),
        });
    }
}
