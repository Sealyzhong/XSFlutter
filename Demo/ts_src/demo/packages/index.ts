/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import { MyLoadingPage } from "demo/packages/loading_page";
import { MySharedPreferncesPage } from "demo/packages/shared_preferences_page";
import { MyScreenInfoPage } from "demo/packages/screen_info_page";
import { MyPackageInfoPage } from "demo/packages/package_info_page";
import { MyWakelockPage } from "demo/packages/wakelock_page";
import { MyUrlLaucherPage } from "demo/packages/url_laucher_page";
import { MyDioPage } from "demo/packages/dio_page";

export class MyPackageIndex extends fs.StatelessWidget{
    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("第三方包"),
            }),
            body:fs.ListView.new({
                children:[
                
                    fs.ListTile.new({
                        leading:fs.Text.new("1",{style:this._style}),
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
                        leading:fs.Text.new("2",{style:this._style}),
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

                    fs.ListTile.new({
                        leading:fs.Text.new("3",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("屏幕信息(ScreenInfo)"),
                        subtitle:fs.Text.new("宽、高、密度、像素"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyScreenInfoPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("4",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("包信息(PackageInfo)"),
                        subtitle:fs.Text.new("版本信息、包信息"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyPackageInfoPage.new();
                                }
                            }));
                        }                        
                    }),
                
                    fs.ListTile.new({
                        leading:fs.Text.new("5",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("wakelock"),
                        subtitle:fs.Text.new("enable、disable、isEnabled"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyWakelockPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("6",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Url Launcher"),
                        subtitle:fs.Text.new("enable、disable、isEnabled"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyUrlLaucherPage.new();
                                }
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        leading:fs.Text.new("7",{style:this._style}),
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("Dio Demo"),
                        subtitle:fs.Text.new("Get、Post、Request"),
                        onTap:function(){
                            fs.Navigator.push(context,fs.MaterialPageRoute.new({
                                builder:function(context?:fs.BuildContext){
                                    return MyDioPage.new();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }

    static new(){
        return new MyPackageIndex();
    }
}
