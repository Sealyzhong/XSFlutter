

import fs = require("flutter_sdk");
export class MyPlaceholderPage extends fs.StatelessWidget{
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Example - Placeholder"),
            }),
            body:fs.ListView.new({
                children:[
                    fs.ListTile.new({
                        title:fs.Text.new("默认占位符"),
                    }),
                    fs.Placeholder.new({}),
                    fs.ListTile.new({
                        title:fs.Text.new("占位符换色"),
                    }),
                    fs.Placeholder.new({
                        fallbackHeight:100,
                        color:fs.Colors.orange,
                    }),

                    fs.ListTile.new({
                        title:fs.Text.new("占位符指定高度"),
                    }),
                    
                    fs.Placeholder.new({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        color:fs.Colors.yellow,
                    }),

                    fs.ListTile.new({
                        title:fs.Text.new("占位符线条粗细"),
                    }),
                    
                    fs.Placeholder.new({
                        fallbackHeight:100,
                        fallbackWidth:100,
                        strokeWidth:4,
                        color:fs.Colors.green,
                    }),
                ],
            }),
        });
    }

    static new (){
        return new MyPlaceholderPage();
    }
}