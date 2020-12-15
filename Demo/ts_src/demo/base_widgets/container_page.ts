import { AppBar, BorderRadius, BoxDecoration, BuildContext, Center, Colors, Container, EdgeInsets, ListTile, ListView, 
  Radius, Scaffold, StatelessWidget,Text, TextStyle} from "flutter_sdk";
  
export class MyContainerPage extends StatelessWidget{
    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("Container"),
            }),
            body:new ListView({
                children:[                    
                    new ListTile({title:new Text("Container"),}),
                    new Container({
                      color:Colors.red,
                      height:100,
                    }),

                    new ListTile({title:new Text("放置内容的Container"),}),
                    new Container({
                      color:Colors.orange,
                      height:100,
                      child:new Text("我有内容")
                    }),

                    new ListTile({title:new Text("Container里的Padding"),}),
                    new Container({
                      color:Colors.yellow,
                      padding:EdgeInsets.all(10),
                      child:new Text("我有内容")
                    }),


                    new ListTile({title:new Text("圆角的Container"),}),
                    new Container({
                      margin:EdgeInsets.all(10),
                      padding:EdgeInsets.all(10),
                      decoration:new BoxDecoration({
                        borderRadius:BorderRadius.all(Radius.circular(4.0)),
                        color:Colors.green,
                      }),
                      child:new Text("我是圆角Container")
                    }),


                    new ListTile({title:new Text("固定高宽的Container"),}),
                    new Center({
                      child:new Container({
                        width:100,
                        height:100,
                        margin:EdgeInsets.all(10),
                        padding:EdgeInsets.all(10),
                        decoration:new BoxDecoration({
                          borderRadius:BorderRadius.all(Radius.circular(4.0)),
                          color:Colors.green,
                        }),
                        child:new Text("100x100",{
                          style:new TextStyle({color:Colors.white}),
                        })
                      }),
                    })
                ],
            }),
        });
    }
}