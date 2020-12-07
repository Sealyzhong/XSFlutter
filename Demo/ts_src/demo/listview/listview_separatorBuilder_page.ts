import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");


//
export class MySeparatorBuilderPage extends fs.StatefulWidget {

    createState() {
        return new _MySeparatorBuilderPage(this);
    }

    static new (){
        return new MySeparatorBuilderPage();
    }
}

class _MySeparatorBuilderPage extends fs.WidgetState {

    //重构
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("ListView.SeparatorBuilder")
            }),
            body:fs.ListView.separatorBuilder({
                itemCount:MyIconData.cupertinoIcons.length,
                itemBuilder: (context:fs.BuildContext, index:number)=>{
                    var model = MyIconData.cupertinoIcons[index];
                    
                    return  fs.Container.new({
                        padding:fs.EdgeInsets.all(10),
                        child:fs.Row.new({
                          children: [
                            fs.Icon.new(model.value),
                            fs.SizedBox.new({width:10}),
                            fs.Expanded.new({
                                child:fs.Text.new(model.name,{overflow:fs.TextOverflow.ellipsis, style:fs.TextStyle.new({fontSize:16})},),
                            }),
                          ]
                        })
                    });
                },
                separatorBuilder :(context:fs.BuildContext, index:number)=>{
                    return  fs.Container.new({
                        color:fs.Colors.green,
                        height:10,
                    });
                },
            }),
        });
    }

    
}