import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyTextFieldPage extends fs.StatefulWidget{
    createState() {
        return new _MyTextFieldPage(this);
    }

    static new (){
        return new MyTextFieldPage();
    }
}

class _MyTextFieldPage extends fs.WidgetState{
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Text Field"),
            }),
            body:fs.ListView.new({
                children:[                    
                    MySectionTitle.new("默认样式"),
                    fs.Padding.new({
                        padding:fs.EdgeInsets.all(10),
                        child:fs.TextField.new({
                            decoration: fs.InputDecoration.new(),
                        }),
                    }),       
                    
                    MySectionTitle.new("icon"),
                    fs.Padding.new({
                        padding:fs.EdgeInsets.all(10),
                        child:fs.TextField.new({
                            decoration: fs.InputDecoration.new({
                                icon:fs.Icon.new(fs.Icons.person,),
                            }),
                            inputFormatters:[
                                fs.TextInputFormatter.lengthLimiting(10),
                                fs.TextInputFormatter.digitsOnly(),
                            ]
                        }),
                    }),  
                ],
            }),
        });
    }
}