/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import api = require("flutter_api");

export class MyDialogIndex extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});
    
    _saveValue(){
        fs.Log.log("OK");
     }

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("通用提示框"),
            }),
            body:fs.ListView.new({
                children:[
                  
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("1、showAboutDialog"),
                        onTap:function(){
                            api.ShowDialog.showAboutDialog({
                                applicationName:api.PackageInfo.packageName,
                                applicationVersion:api.PackageInfo.version,
                                applicationLegalese:"兴盛优选版权所有."
                            });
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("2、showDialog"),
                        onTap:function(){
                            api.ShowDialog.showDialog({
                                barrierDismissible:false,
                                child:fs.Material.new({
                                    color:fs.Colors.transparent,
                                    child:fs.Center.new({
                                        child:fs.RaisedButton.new({
                                            child:fs.Text.new("相信·帮助"),
                                            onPressed: function(){
                                                fs.Log.log("OK");
                                            },
                                        }),
                                    }) ,
                                })          
                            });
                        }                        
                    }),
                ],
            }),
        });
    }

    static new(){
        return new MyDialogIndex();
    }
}
