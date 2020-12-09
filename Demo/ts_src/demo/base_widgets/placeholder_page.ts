

import fs = require("flutter_sdk");
export class MyPlaceholderPage extends fs.StatelessWidget{
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("Example - Placeholder"),
            }),
            body:new fs.ListView({
                children:[
                    new fs.ListTile({
                        title:new fs.Text("默认占位符"),
                    }),
                    new fs.Placeholder({}),
                    new fs.ListTile({
                        title:new fs.Text("占位符换色"),
                    }),
                    new fs.Placeholder({
                        fallbackHeight:100,
                        color:fs.Colors.orange,
                    }),

                    new fs.ListTile({
                        title:new fs.Text("占位符指定高度"),
                    }),
                    
                    new fs.Placeholder({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        color:fs.Colors.yellow,
                    }),

                    new fs.ListTile({
                        title:new fs.Text("占位符线条粗细"),
                    }),
                    
                    new fs.Placeholder({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        strokeWidth:4,
                        color:fs.Colors.green,
                    }),
                ],
            }),
        });
    }
}