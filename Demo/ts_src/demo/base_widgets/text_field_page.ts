import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyTextFieldPage extends fs.StatefulWidget{
    createState() {
        return new _MyTextFieldPage(this);
    }
}

class _MyTextFieldPage extends fs.WidgetState{
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("Text Field"),
            }),
            body:new fs.ListView({
                children:[                    
                    new MySectionTitle("默认样式"),
                    new fs.Padding({
                        padding:fs.EdgeInsets.all(10),
                        child:new fs.TextField({
                            decoration:new  fs.InputDecoration(),
                        }),
                    }),       
                    
                    new MySectionTitle("icon"),
                    new fs.Padding({
                        padding:fs.EdgeInsets.all(10),
                        child:new fs.TextField({
                            decoration: new fs.InputDecoration({
                                icon:new fs.Icon(fs.Icons.person,),
                                errorBorder:fs.InputBorder.none(),
                                disabledBorder:fs.InputBorder.outline({
                                    borderSide:new fs.BorderSide(),
                                }),
                                enabledBorder:fs.InputBorder.underline(),
                                
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