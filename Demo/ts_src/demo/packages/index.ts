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
import { MyPathProviderPage } from "demo/packages/path_provider_page";
import { MyPermissionPage } from "demo/packages/permission_page";

export class MyPackageIndex extends fs.StatelessWidget{
    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});

    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("第三方包"),
            }),
            body:new fs.ListView({
                children:[
                
                    new fs.ListTile({
                        leading:new fs.Text("1",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Loading..."),
                        subtitle:new fs.Text("showSuccess、showError、showInfo、showToast..."),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyLoadingPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("2",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("本地数据存储(shared_preferences)"),
                        subtitle:new fs.Text("get、set"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MySharedPreferncesPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("3",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("屏幕信息(ScreenInfo)"),
                        subtitle:new fs.Text("宽、高、密度、像素"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyScreenInfoPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("4",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("包信息(PackageInfo)"),
                        subtitle:new fs.Text("版本信息、包信息"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPackageInfoPage();
                                }
                            }));
                        }                        
                    }),
                
                    new fs.ListTile({
                        leading:new fs.Text("5",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("wakelock"),
                        subtitle:new fs.Text("enable、disable、isEnabled"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyWakelockPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("6",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Url Launcher"),
                        subtitle:new fs.Text("enable、disable、isEnabled"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyUrlLaucherPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("7",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Dio Demo"),
                        subtitle:new fs.Text("Get、Post、Request"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyDioPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("8",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("path_provider"),
                        subtitle:new fs.Text("locations on the filesystem. Supports iOS, Android,"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPathProviderPage();
                                }
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        leading:new fs.Text("9",{style:this._style}),
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("Permission Handler"),
                        subtitle:new fs.Text("权限管理"),
                        onTap:function(){
                            fs.Navigator.push(context,new fs.MaterialPageRoute({
                                builder:function(context?:fs.BuildContext){
                                    return new MyPermissionPage();
                                }
                            }));
                        }                        
                    }),
                ],
            }),
        });
    }
}
