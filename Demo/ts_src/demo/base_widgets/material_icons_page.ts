import { MyIconData } from "demo/model/icon_data";
import { AppBar, BuildContext,  Container, EdgeInsets, Expanded, Icon,
     ListView, Row, Scaffold, SizedBox, StatelessWidget,Text, TextOverflow, TextStyle, Widget } from "flutter_sdk";


export class MyMaterialIconsPage extends StatelessWidget{



    getWidgetList(){
        var list = new Array<Widget>();
        MyIconData.icons.forEach((model)=>{
            list.push( new Container({
                padding:EdgeInsets.all(10),
                child:new Row({
                  children: [
                    new Icon(model.value),
                    new SizedBox({width:10}),
                    new Expanded({
                        child:new Text(model.name,{overflow:TextOverflow.ellipsis, style:new TextStyle({fontSize:16})},),
                    }),
                  ]
                }),
              }));
        });
        return list;
    }
    //重构
    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("Material Icons")
            }),
            body:new ListView({
                children:this.getWidgetList()
            }),
        });
    }
}