import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");

export class MyMaterialIconsPage extends fs.StatelessWidget{



    getWidgetList(){
        var list = new Array<fs.Widget>();
        MyIconData.icons.forEach((model)=>{
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
                title:new fs.Text("Material Icons")
            }),
            body:new fs.ListView({
                children:this.getWidgetList()
            }),
        });
    }
}