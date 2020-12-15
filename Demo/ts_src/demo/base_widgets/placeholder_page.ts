

import { AppBar, BuildContext, Colors,  ListTile, ListView, Placeholder, Scaffold, StatelessWidget,Text } from "flutter_sdk";

export class MyPlaceholderPage extends StatelessWidget{
    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("Example - Placeholder"),
            }),
            body:new ListView({
                children:[
                    new ListTile({
                        title:new Text("默认占位符"),
                    }),
                    new Placeholder({}),
                    new ListTile({
                        title:new Text("占位符换色"),
                    }),
                    new Placeholder({
                        fallbackHeight:100,
                        color:Colors.orange,
                    }),

                    new ListTile({
                        title:new Text("占位符指定高度"),
                    }),
                    
                    new Placeholder({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        color:Colors.yellow,
                    }),

                    new ListTile({
                        title:new Text("占位符线条粗细"),
                    }),
                    
                    new Placeholder({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        strokeWidth:4,
                        color:Colors.green,
                    }),
                ],
            }),
        });
    }
}