/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");

export class MyPermissionPage extends fs.StatelessWidget{

    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});


    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Url Laucher"),
            }),
            body:new fs.ListView({
                    children:[
                        new fs.ListTile({
                            leading:new fs.Text("1",{style:this._style}),
                            trailing:new fs.Icon(fs.Icons.chevron_right),
                            title:new fs.Text("getStatus"),
                            //subtitle:new fs.Text("https://www.baidu.com"),
                            onTap:async ()=> {                                
                                var a= await fs.PermissionHandler.request(fs.Permission.camera);
                                fs.Log.log(fs.Convert.toString(a.status.toString()));

                            }                        
                        }),

                        new fs.ListTile({
                            leading:new fs.Text("2",{style:this._style}),
                            trailing:new fs.Icon(fs.Icons.chevron_right),
                            title:new fs.Text("isDenied"),
                            //subtitle:new fs.Text("tels:10000"),
                            onTap:async ()=>{                                
                                var a= await fs.PermissionHandler.isDenied(fs.Permission.camera);
                                fs.Log.log(fs.Convert.toString(a));

                            }                        
                        }),
                        
                        new fs.ListTile({
                            leading:new fs.Text("3",{style:this._style}),
                            trailing:new fs.Icon(fs.Icons.chevron_right),
                            title:new fs.Text("isUndetermined"),
                            //subtitle:new fs.Text("tels:10000"),
                            onTap:async ()=>{                                
                                var a= await fs.PermissionHandler.isUndetermined(fs.Permission.camera);
                                fs.Log.log(fs.Convert.toString(a));

                            }                        
                        }),

                        new fs.ListTile({
                            leading:new fs.Text("4",{style:this._style}),
                            trailing:new fs.Icon(fs.Icons.chevron_right),
                            title:new fs.Text("request"),
                            //subtitle:new fs.Text("tels:10000"),
                            onTap:async ()=> {                                
                                var a= await fs.PermissionHandler.request(fs.Permission.camera);
                                fs.Log.log(fs.Convert.toString(a.status.toString()));

                            }                        
                        }),
                        


                    ]
                }),
        });
    }
}
