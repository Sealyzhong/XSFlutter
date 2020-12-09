
import fs = require("flutter_sdk");
import { MyIconData } from "demo/model/icon_data";

export class MyListViewPage extends fs.StatelessWidget{

    getWidgetList(){
        var list = new Array<fs.Widget>();
        MyIconData.cupertinoIcons.forEach((model)=>{
            list.push( new fs.Container({
                padding:fs.EdgeInsets.all(10),
                child:new fs.Row({
                  children: [
                    new fs.Icon(model.value),
                    new fs.SizedBox({width:10}),
                    new fs.Expanded({
                        child:new fs.Text(model.name,{overflow:fs.TextOverflow.ellipsis, style:new fs.TextStyle({fontSize:16})},),
                    }),
                  ]
                }),
              }));
        });
        return list;
    }
    //重构
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("ListView")
            }),
            body:new fs.ListView({
                children:this.getWidgetList()
            }),
        });
    }
}