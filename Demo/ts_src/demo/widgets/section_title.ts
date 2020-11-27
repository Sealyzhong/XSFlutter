

import { MyColorUtil } from "demo/utils/color_util";
import { Color, Colors, Container, Divider, EdgeInsets, FontWeight, Icon, Icons, JSBuildContext, JSStatelessWidget, MainAxisAlignment, Row,Text, TextStyle } from "ts_flutter_sdk";

export class MySectionTitle extends JSStatelessWidget{
  title:string;
  constructor(title:string){
    super();
    this.title = title;
  }

  static new(title:string){
    return new MySectionTitle(title);
  }

  
  build(buildContext?:JSBuildContext){
    return Container.new({

      padding:EdgeInsets.all(10.0),
      color:MyColorUtil.primaryColor,
      child:Row.new({
        mainAxisAlignment:MainAxisAlignment.start,
        children:[
          Icon.new(
            Icons.ac_unit,
            {
              color:Colors.white,
            }
          ),
          Container.new({
            width:10,
          }),
          Text.new(this.title, { style:TextStyle.new({
            color:Colors.white,
            fontWeight:FontWeight.bold,
            fontSize:18,
          })}),
        ]
      }),
    });
  }
}
 /*
  class SectionTitle extends JSStatelessWidget {
    
    build(context){
      return new Container({
        padding: EdgeInsets.all(10.0),
        color: Colors.red,// Theme.of(context).primaryColor,
        child: new Row({
          children: [
            new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xFFFFFFFF) }),
            new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
            new Text(this.title, {
              textAlign: TextAlign.start,
              style:new TextStyle({
                fontSize: 16,
                //fontWeight: Theme.of(context).textTheme.title.fontWeight,
                color:Colors.white
              })
            })
          ]
        })
      });
    }
  }
  
  module.exports = {
    SectionTitle,
  }
  */
  