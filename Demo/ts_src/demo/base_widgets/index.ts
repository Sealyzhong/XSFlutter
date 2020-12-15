/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { AppBar, BuildContext,  FontWeight, Icon,  Icons, ListTile, ListView, Log, MaterialPageRoute, Navigator, Scaffold, StatelessWidget,Text, TextStyle } from "flutter_sdk";

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

export class MyBaseWidgetsIndex extends StatelessWidget{

    _style = new TextStyle({fontSize:24,fontWeight:FontWeight.bold});
    
    build(context:BuildContext){
        return new Scaffold({
            appBar:new AppBar({
                title: new Text("通用组件"),
            }),
            body:new ListView({
                children:[
                    new MySectionTitle("基础组件"),
                
                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Material Icons"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyMaterialIconsPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Cupertino Icons"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyCupertinoIconsPage();
                                }
                            }));
                        }                        
                    }),

                    //new 的写法2
                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("AppBar"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyAppBarPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("PlaceHolder"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyPlaceholderPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Image"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyImagePage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Text"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyTextPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("TextField"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyTextFieldPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Button"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyButtonPage();
                                }
                            }));
                        }                        
                    }),



                    new MySectionTitle("布局组件"),
                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Container"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyContainerPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Column"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyColumnPage();
                                }
                            }));
                        }                        
                    }),

                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Row"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
                                    return new MyRowPage();
                                }
                            }));
                        }                        
                    }),

                    new MySectionTitle("其它组件"),
                    new ListTile({
                        trailing:new Icon(Icons.chevron_right),
                        title:new Text("Flutter Logo"),
                        onTap:function(){
                            Navigator.push(context,new MaterialPageRoute({
                                builder:function(context?:BuildContext){
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
