/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");

export class MyShowDialogPage extends fs.StatelessWidget{

    _style = new fs.TextStyle({fontSize:24,fontWeight:fs.FontWeight.bold});
    menuKey:fs.BindKey = new fs.BindKey();
    menuKey1:fs.BindKey = new fs.BindKey();

    menu:Array<string>=["菜单1","菜单2","菜单3","菜单4"];

    actions:Array<fs.SimpleDialogButtonInfo>=[
        new fs.SimpleDialogButtonInfo({text:"取消",textStyle:new fs.TextStyle({color:fs.Colors.grey})}),
        new fs.SimpleDialogButtonInfo({text:"确定"})
    ];
    
    actions1:Array<fs.SimpleCustomDialogButtonInfo>=[
        new fs.SimpleDialogButtonInfo({text:"取消"}),
        new fs.SimpleDialogButtonInfo({text:"确定"})
    ];

    _saveValue(){
        fs.Log.log("OK");
        fs.Dialog.dismiss(this);
     }

    build(context:fs.BuildContext){
        //var that = this;
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Show Dialog"),
                actions:[
                    new fs.InkWell({
                        key:this.menuKey,
                        onTap: ()=>{
                            fs.Dialog.show(this,new fs.ShowCustomPopupMenu({
                                superkey:this.menuKey,
                                menuList:[
                                new fs.CustomPopupMenuItem({title: "发起群聊",image:new fs.Icon(fs.Icons.info,{color: fs.Colors.white,})}),
                                new fs.CustomPopupMenuItem({title: "添加朋友",image:new fs.Icon(fs.Icons.add,{color: fs.Colors.white,})}),
                                new fs.CustomPopupMenuItem({title: "扫一扫",image:new fs.Icon(fs.Icons.aspect_ratio,{color: fs.Colors.white,})}),
                                new fs.CustomPopupMenuItem({title: "收付款",image:new fs.Icon(fs.Icons.attach_money,{color: fs.Colors.white,})}),
                                ],
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                                
                            }));
                        },
                        child: new fs.Center({
                          child:new fs.Text('右菜单',{style: new fs.TextStyle({color: fs.Colors.white}),})
                        }),
                    })
                  ],

            }),
            body:new fs.ListView({
                children:[
                    new  MySectionTitle("Dialog"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、ShowDialog - AlertDialog"),
                        subtitle:new fs.Text("child:[AlertDialog、SimpleDialog、widget]"),
                        onTap:()=>{                        
                            fs.Dialog.show(this,new fs.ShowDialog({
                                barrierDismissible:false,
                                child:new fs.AlertDialog({
                                    title: new fs.Text('提示'),
                                    content: new fs.Text('确认删除吗？'),
                                    backgroundColor: fs.Colors.white,
                                    elevation: 24,
                                    shape: new fs.RoundedRectangleBorder({borderRadius: fs.BorderRadius.circular(10)}),
                                    actions: [
                                        new fs.FlatButton({child: new fs.Text('取消'),onPressed:()=>{
                                            fs.Log.log("取消");
                                            fs.Dialog.dismiss(this);
                                        }}),
                                        new fs.FlatButton({child: new fs.Text('确认'),onPressed:()=>{
                                            fs.Log.log("确认");
                                            fs.Dialog.dismiss(this);
                                        }}),
                                    ],
                                })
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、ShowDialog - SimpleDialog"),
                        subtitle:new fs.Text("child:[AlertDialog、SimpleDialog、widget]"),
                        onTap:()=>{                        
                            fs.Dialog.show(this,new fs.ShowDialog({
                                barrierDismissible:false,
                                child:new fs.SimpleDialog({
                                    title: new fs.Text('提示'),
                                    children: [
                                        new fs.Container({
                                            height: 80,
                                            alignment: fs.Alignment.center,
                                    
                                            child: new fs.Text('确认删除吗？'),
                                        }),
                                        new fs.Divider({height: 1,}),
                                        new fs.FlatButton({
                                        child: new fs.Text('取消'),
                                            onPressed:()=>{
                                                fs.Log.log("取消");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),
                                        new fs.Divider({height: 1,}),
                                        new fs.FlatButton({
                                            child: new fs.Text('确认'),
                                            onPressed:()=>{
                                                fs.Log.log("确认");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),
                                    ],
                                })
                            }));
                        }                        
                    }),


                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("2、ShowCupertinoDialog"),
                        subtitle:new fs.Text("child:[CupertinoAlertDialog、widget]"),
                        onTap:()=>{
                            fs.Dialog.show(this,new  fs.ShowCupertinoDialog({
                                child:new  fs.CupertinoAlertDialog({
                                    title:new fs.Text("温馨提示"),
                                    content:new  fs.RichText({
                                        text:new fs.TextSpan({text:'是否要拨打{',style:new fs.TextStyle({color:fs.Colors.black}),children:[
                                            new fs.TextSpan({text:"181-5379-3927",style:new fs.TextStyle({
                                                color:fs.Colors.red,
                                            })}),
                                            new fs.TextSpan({text:"}电话？",style:new fs.TextStyle({
                                                color:fs.Colors.black,
                                            })})
                                        ]})
                                    }),
                                    actions:[
                                        new fs.CupertinoDialogAction({
                                            child:new fs.Text("取消",),
                                            onPressed:()=>{
                                                fs.Log.log("取消");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),

                                        new fs.CupertinoDialogAction({
                                            child:new fs.Text("确定",{style:new fs.TextStyle({color:fs.Colors.red})}),
                                            onPressed:()=>{
                                                fs.Log.log("确定");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),
                                    ]
                                }),
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("3、ShowModalBottomSheet"),
                        subtitle:new fs.Text("child:[BottomSheet、Widget]"),
                        onTap:()=>{
                            fs.Dialog.show(this,new  fs.ShowModalBottomSheet({
                                child:new  fs.BottomSheet({
                                    onClosing:()=>{
                                        fs.Log.log("Close");
                                        fs.Dialog.dismiss(this);
                                    },
                                    child:new fs.Column({
                                        children:[
                                            new fs.CupertinoDialogAction({
                                                child:new fs.Text("取消",),
                                                onPressed:()=>{
                                                    fs.Log.log("取消");
                                                    fs.Dialog.dismiss(this);
                                                }
                                            }),    
                                            new fs.CupertinoDialogAction({
                                                child:new fs.Text("确定",{style:new fs.TextStyle({color:fs.Colors.red})}),
                                                onPressed:()=>{
                                                    fs.Log.log("确定");
                                                    fs.Dialog.dismiss(this);
                                                }
                                            }),                                        
                                        ],
                                    }),    
                                }),
                            }));
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("4、ShowCupertinoModalPopup"),
                        subtitle:new fs.Text("child:[CupertinoActionSheet、Widget]"),
                        onTap:()=>{
                            fs.Dialog.show(this,new  fs.ShowCupertinoModalPopup({
                                child:new fs.CupertinoActionSheet({
                                    title: new fs.Text('提示'),
                                    message: new fs.Text('是否要删除当前项？'),
                                    actions: [
                                        new fs.CupertinoActionSheetAction({
                                            child: new fs.Text('删除'),
                                            onPressed:()=>{
                                                fs.Log.log("取消");
                                                fs.Dialog.dismiss(this);
                                            },
                                            isDefaultAction: true,
                                        }),
                                        new fs.CupertinoActionSheetAction({
                                            child: new fs.Text('暂时不删',{style:new fs.TextStyle({color:fs.Colors.blue})}),
                                            onPressed:()=>{
                                                fs.Log.log("暂时不删");
                                                fs.Dialog.dismiss(this);
                                            },
                                            isDestructiveAction: true,
                                        }),
                                    ],
                                    
                                }),
                            }));
                        }                        
                    }),
                    
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("5、Custom Dialog"),
                        onTap:()=>{                        
                            fs.Dialog.show(this,new fs.ShowCustomAlertDialog({
                                content:new fs.RichText({
                                    text:new fs.TextSpan({text:'是否要拨打{',style:new fs.TextStyle({color:fs.Colors.black}),children:[
                                        new fs.TextSpan({text:"181-5379-3927",style:new fs.TextStyle({
                                            color:fs.Colors.red,
                                        })}),
                                        new fs.TextSpan({text:"}电话？",style:new fs.TextStyle({
                                            color:fs.Colors.black,
                                        })})
                                    ]})
                                }),
                                actions:[
                                    new fs.CustomAlertDialogButton({
                                        bgColor:fs.Colors.blue,
                                        child:new fs.Text("取消",{style:new fs.TextStyle({color:fs.Colors.white})}),
                                        onPressed:()=>{
                                            fs.Log.log("取消");
                                            fs.Dialog.dismiss(this);
                                        }
                                    }),
                                    new fs.CustomAlertDialogButton({
                                        bgColor:fs.Colors.red,
                                        child:new fs.Text("确定",{style:new fs.TextStyle({color:fs.Colors.white})}),
                                        onPressed:()=>{
                                            fs.Log.log("确定");
                                            fs.Dialog.dismiss(this);
                                        }
                                    })
                                ]
                            }));
                        }                        
                    }),

                    new MySectionTitle("ActionSheet"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、CustomActionSheet"),
                        onTap:()=>{ 
                            fs.Dialog.show(this,new fs.ShowCustomActionSheet({
                                itemList:this.menu,
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                    
                                }
                            }));
                        }                      
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("2、SimpleActionSheet"),
                        onTap:()=>{ 
                            fs.Dialog.show(this,new fs.ShowCustomActionSheet({
                                itemList:this.menu,
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                        
                    }),

                    new MySectionTitle("Simple Alert Dialog"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、Simple Cupertino Dialog"),
                        onTap:()=>{ 
                            fs.Dialog.show(this,new fs.ShowSimpleCupertinoDialog({
                                actions:this.actions,
                                desc: "Alert Cupertino(Tow Button)",
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                      
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("2、Simple Alert Dialog"),
                        onTap:()=>{ 
                            fs.Dialog.show(this,new fs.ShowSimpleAlertDialog({
                                actions:this.actions,
                                desc: "Alert Material(Tow Button)",
                                onTap:(i:number)=>{
                                    fs.Log.log("点击:"+String(i));
                                }
                            }));
                        }                        
                    }),
                    
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("3、Simple Custom Dialog"),
                        onTap:()=>{ 
                            fs.Dialog.show(this,new fs.ShowSimpleCustomDialog({
                                actions:this.actions1,
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
}
