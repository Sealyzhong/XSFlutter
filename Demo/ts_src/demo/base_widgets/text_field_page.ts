import { MySectionTitle } from "demo/widgets/section_title";
import { AppBar, BorderSide, BuildContext,  EdgeInsets,  Icon, Icons, InputBorder, InputDecoration, 
    ListView, Padding, Scaffold, StatefulWidget,Text, TextField, TextInputFormatter, WidgetState } from "flutter_sdk";


export class MyTextFieldPage extends StatefulWidget{
    createState() {
        return new _MyTextFieldPage(this);
    }
}

class _MyTextFieldPage extends WidgetState{
    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("Text Field"),
            }),
            body:new ListView({
                children:[                    
                    new MySectionTitle("默认样式"),
                    new Padding({
                        padding:EdgeInsets.all(10),
                        child:new TextField({
                            decoration:new  InputDecoration(),
                        }),
                    }),       
                    
                    new MySectionTitle("icon"),
                    new Padding({
                        padding:EdgeInsets.all(10),
                        child:new TextField({
                            decoration: new InputDecoration({
                                icon:new Icon(Icons.person,),
                                errorBorder:InputBorder.none(),
                                disabledBorder:InputBorder.outline({
                                    borderSide:new BorderSide(),
                                }),
                                enabledBorder:InputBorder.underline(),
                                
                            }),
                            inputFormatters:[
                                TextInputFormatter.lengthLimiting(10),
                                TextInputFormatter.digitsOnly(),
                            ]
                        }),
                    }),  
                ],
            }),
        });
    }
}