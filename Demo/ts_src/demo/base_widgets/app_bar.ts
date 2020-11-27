
import fs = require("flutter_sdk");

export class MyAppBar extends fs.StatelessWidget{
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("基础组件 - AppBar"),
            }),
            body:new fs.ListView({
                children:[
                   new fs.ListTile({
                        title:new fs.Text("最简单的AppBar"),
                    }),
                    new fs.AppBar({
                        title:new fs.Text("NormalAppBar"),
                    }),

                    new fs.ListTile({
                        title:new fs.Text("标题换色"),
                    }),

                    new fs.AppBar({
                        title: new fs.Text('NormalAppBar',{
                          style:new fs.TextStyle({
                            color:fs.Colors.white,
                          }),
                        }),
                      }),

                    new fs.ListTile({
                        title: new fs.Text('背景换色',),
                    }),
                    new fs.AppBar({
                        backgroundColor: fs.Colors.blue,
                        title: new fs.Text('NormalAppBar',{
                          style:new fs.TextStyle({
                            color:fs.Colors.white,
                          }),
                        }),
                    }),

                    new fs.ListTile({
                        title: new fs.Text('设置 leading',),
                    }),
                    
                    new fs.AppBar({
                        leading: new fs.IconButton({
                            icon:new fs.Icon(fs.Icons.add),
                            onPressed:function(){
                                fs.Log.log("点击: 设置 leading");
                            },
                        }),
                        title: new fs.Text('AppBar',),
                    }),
                    
                    new fs.ListTile({
                        title: new fs.Text('设置 action',),
                    }),
                    new fs.AppBar({
                        actions:[
                            new fs.IconButton({
                                icon:new fs.Icon(fs.Icons.camera),
                                onPressed:function(){
                                    fs.Log.log("点击: 设置 action");
                                },
                            })
                        ],
                        title: new fs.Text('AppBar',),
                    }),

                    
                    new fs.ListTile({
                        title: new fs.Text('设置多个action',),
                    }),
                    new fs.AppBar({
                        actions:[
                            new fs.IconButton({
                                icon:new fs.Icon(fs.Icons.camera),
                                onPressed:function(){
                                    fs.Log.log("点击: camera");
                                },
                            }),
                            new fs.IconButton({
                                icon:new fs.Icon(fs.Icons.print),
                                onPressed:function(){
                                    fs.Log.log("点击: print");
                                },
                            }),
                        ],
                        title: new fs.Text('AppBar',),
                    }),
                ],
            }),
        });

    }
}