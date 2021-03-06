
//import fs = require("flutter_sdk");

import { AppBar, BuildContext, Colors, Icon, IconButton, Icons, ListTile, ListView, Log, Scaffold, StatelessWidget,Text, TextStyle } from "flutter_sdk";

export class MyAppBarPage extends StatelessWidget{
    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("基础组件 - AppBar"),
            }),
            body:new ListView({
                children:[
                   new ListTile({
                        title:new Text("最简单的AppBar"),
                    }),
                    new AppBar({
                        title:new Text("NormalAppBar"),
                    }),

                    new ListTile({
                        title:new Text("标题换色"),
                    }),

                    new AppBar({
                        title: new Text('NormalAppBar',{
                          style:new TextStyle({
                            color:Colors.white,
                          }),
                        }),
                      }),

                    new ListTile({
                        title: new Text('背景换色',),
                    }),
                    new AppBar({
                        backgroundColor: Colors.blue,
                        title: new Text('NormalAppBar',{
                          style:new TextStyle({
                            color:Colors.white,
                          }),
                        }),
                    }),

                    new ListTile({
                        title: new Text('设置 leading',),
                    }),
                    
                    new AppBar({
                        leading: new IconButton({
                            icon:new Icon(Icons.add),
                            onPressed:function(){
                                Log.log("点击: 设置 leading");
                            },
                        }),
                        title: new Text('AppBar',),
                    }),
                    
                    new ListTile({
                        title: new Text('设置 action',),
                    }),
                    new AppBar({
                        actions:[
                            new IconButton({
                                icon:new Icon(Icons.camera),
                                onPressed:function(){
                                    Log.log("点击: 设置 action");
                                },
                            })
                        ],
                        title: new Text('AppBar',),
                    }),

                    
                    new ListTile({
                        title: new Text('设置多个action',),
                    }),
                    new AppBar({
                        actions:[
                            new IconButton({
                                icon:new Icon(Icons.camera),
                                onPressed:function(){
                                    Log.log("点击: camera");
                                },
                            }),
                            new IconButton({
                                icon:new Icon(Icons.print),
                                onPressed:function(){
                                    Log.log("点击: print");
                                },
                            }),
                        ],
                        title: new Text('AppBar',),
                    }),
                ],
            }),
        });

    }
}