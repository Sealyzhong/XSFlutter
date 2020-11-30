import fs = require("flutter_sdk");
export class MyContainerPage extends fs.StatelessWidget{
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Container"),
            }),
            body:fs.ListView.new({
                children:[                    
                    fs.ListTile.new({title:fs.Text.new("Container"),}),
                    fs.Container.new({
                      color:fs.Colors.red,
                      height:100,
                    }),

                    fs.ListTile.new({title:fs.Text.new("放置内容的Container"),}),
                    fs.Container.new({
                      color:fs.Colors.orange,
                      height:100,
                      child:fs.Text.new("我有内容")
                    }),

                    fs.ListTile.new({title:fs.Text.new("Container里的Padding"),}),
                    fs.Container.new({
                      color:fs.Colors.yellow,
                      padding:fs.EdgeInsets.all(10),
                      child:fs.Text.new("我有内容")
                    }),


                    fs.ListTile.new({title:fs.Text.new("圆角的Container"),}),
                    fs.Container.new({
                      margin:fs.EdgeInsets.all(10),
                      padding:fs.EdgeInsets.all(10),
                      decoration:fs.BoxDecoration.new({
                        borderRadius:fs.BorderRadius.all(fs.Radius.circular(4.0)),
                        color:fs.Colors.green,
                      }),
                      child:fs.Text.new("我是圆角Container")
                    }),


                    fs.ListTile.new({title:fs.Text.new("固定高宽的Container"),}),
                    fs.Center.new({
                      child:fs.Container.new({
                        width:100,
                        height:100,
                        margin:fs.EdgeInsets.all(10),
                        padding:fs.EdgeInsets.all(10),
                        decoration:fs.BoxDecoration.new({
                          borderRadius:fs.BorderRadius.all(fs.Radius.circular(4.0)),
                          color:fs.Colors.green,
                        }),
                        child:fs.Text.new("100x100",{
                          style:fs.TextStyle.new({color:fs.Colors.white}),
                        })
                      }),
                    })
                ],
            }),
        });
    }

    static new (){
        return new MyContainerPage();
    }
}