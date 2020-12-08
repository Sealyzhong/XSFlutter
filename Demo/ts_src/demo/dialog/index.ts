/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyDialogIndex extends fs.StatelessWidget{

    _style = fs.TextStyle.new({fontSize:24,fontWeight:fs.FontWeight.bold});

    menu:Array<string>=["菜单1","菜单2","菜单3","菜单4"];

    buttons:Array<tl.SimpleDialogButtonInfo>=[
        tl.SimpleDialogButtonInfo.new({text:"取消",textStyle:fs.TextStyle.new({color:fs.Colors.grey})}),
        tl.SimpleDialogButtonInfo.new({text:"确定"})
    ];
    
    buttons1:Array<tl.SimpleCustomDialogButtonInfo>=[
        tl.SimpleDialogButtonInfo.new({text:"取消"}),
        tl.SimpleDialogButtonInfo.new({text:"确定"})
    ];

    _saveValue(){
        fs.Log.log("OK");
        tl.Dialog.dismiss(this);
     }

    build(context:fs.BuildContext){
        //var that = this;
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("通用提示框"),
            }),
            body:fs.ListView.new({
                children:[
                    MySectionTitle.new("Dialog"),
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("1、Cupertino Dialog"),
                        onTap:()=>{
                            tl.Dialog.showCupertinoDialog(this,tl.ShowCupertinoDialog.new({
                                child:fs.CupertinoAlertDialog.new({
                                    title:fs.Text.new("温馨提示"),
                                    content:fs.RichText.new({
                                        text:fs.TextSpan.new({text:'是否要拨打{',style:fs.TextStyle.new({color:fs.Colors.black}),children:[
                                            fs.TextSpan.new({text:"181-5379-3927",style:fs.TextStyle.new({
                                                color:fs.Colors.red,
                                            })}),
                                            fs.TextSpan.new({text:"}电话？",style:fs.TextStyle.new({
                                                color:fs.Colors.black,
                                            })})
                                        ]})
                                    }),
                                    actions:[
                                        fs.CupertinoDialogAction.new({
                                            child:fs.Text.new("取消",),
                                            onPressed:()=>{
                                                fs.Log.log("取消");
                                                tl.Dialog.dismiss(this);
                                            }
                                        }),

                                        fs.CupertinoDialogAction.new({
                                            child:fs.Text.new("确定",{style:fs.TextStyle.new({color:fs.Colors.red})}),
                                            onPressed:()=>{
                                                fs.Log.log("确定");
                                                tl.Dialog.dismiss(this);
                                            }
                                        }),
                                    ]
                                }),
                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("2、showDialog"),
                        onTap:()=>{                        
                            tl.Dialog.showDialog(this,tl.ShowDialog.new({
                                barrierDismissible:false,
                                child:fs.Material.new({
                                    color:fs.Colors.transparent,
                                    child:fs.Center.new({
                                        child:fs.RaisedButton.new({
                                            child:fs.Text.new("相信·帮助"),
                                            onPressed: this._saveValue.bind(this)
                                        }),
                                    }) ,
                                })  

                            }));
                        }                        
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("3、Custom Dialog"),
                        onTap:()=>{                        
                            tl.Dialog.showCustomAlertDialog(this,tl.ShowCustomAlertDialog.new({
                                content:fs.RichText.new({
                                    text:fs.TextSpan.new({text:'是否要拨打{',style:fs.TextStyle.new({color:fs.Colors.black}),children:[
                                        fs.TextSpan.new({text:"181-5379-3927",style:fs.TextStyle.new({
                                            color:fs.Colors.red,
                                        })}),
                                        fs.TextSpan.new({text:"}电话？",style:fs.TextStyle.new({
                                            color:fs.Colors.black,
                                        })})
                                    ]})
                                }),
                                buttons:[
                                    tl.CustomAlertDialogButton.new({
                                        bgColor:fs.Colors.blue,
                                        child:fs.Text.new("取消",{style:fs.TextStyle.new({color:fs.Colors.white})}),
                                        onPressed:()=>{
                                            fs.Log.log("取消");
                                            tl.Dialog.dismiss(this);
                                        }
                                    }),
                                    tl.CustomAlertDialogButton.new({
                                        bgColor:fs.Colors.red,
                                        child:fs.Text.new("确定",{style:fs.TextStyle.new({color:fs.Colors.white})}),
                                        onPressed:()=>{
                                            fs.Log.log("确定");
                                            tl.Dialog.dismiss(this);
                                        }
                                    })
                                ]
                            }));
                        }                        
                    }),


                    MySectionTitle.new("ActionSheet"),
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("1、CustomActionSheet"),
                        onTap:()=>{ 
                            tl.Dialog.showCustomActionSheet(this,tl.ShowCustomActionSheet.new({
                                itemList:this.menu,
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                    
                                }
                            }));
                        }                      
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("2、SimpleActionSheet"),
                        onTap:()=>{ 
                            tl.Dialog.showSimpleActionSheet(this,tl.ShowCustomActionSheet.new({
                                itemList:this.menu,
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                        
                    }),

                    MySectionTitle.new("Simple Alert Dialog"),
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("1、Simple Cupertino Dialog"),
                        onTap:()=>{ 
                            tl.Dialog.showSimpleCupertinoDialog(this,tl.ShowSimpleDialog.new({
                                buttons:this.buttons,
                                desc: "Alert Cupertino(Tow Button)",
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                      
                    }),

                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("2、Simple Alert Dialog"),
                        onTap:()=>{ 
                            tl.Dialog.showSimpleAlertDialog(this,tl.ShowSimpleDialog.new({
                                buttons:this.buttons,
                                desc: "Alert Material(Tow Button)",
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                        
                    }),
                    
                    fs.ListTile.new({
                        trailing:fs.Icon.new(fs.Icons.chevron_right),
                        title:fs.Text.new("3、Simple Custom Dialog"),
                        onTap:()=>{ 
                            tl.Dialog.showSimpleCustomDialog(this,tl.ShowSimpleCustomDialog.new({
                                buttons:this.buttons1,
                                desc: "Simple Custom Dialog",
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
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
