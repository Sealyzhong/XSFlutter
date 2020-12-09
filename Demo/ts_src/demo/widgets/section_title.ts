

import { MyColorUtil } from "demo/utils/color_util";
import fs = require("flutter_sdk");


export class MySectionTitle extends fs.StatelessWidget{
  title:string;
  constructor(title:string){
    super();
    this.title = title;
  }  
  build(context?:fs.BuildContext){
    return new fs.Container({

      padding:fs.EdgeInsets.all(10.0),
      color:MyColorUtil.primaryColor,
      child:new fs.Row({
        mainAxisAlignment:fs.MainAxisAlignment.start,
        children:[
          new fs.Icon(
            fs.Icons.list,
            {
              color:fs.Colors.white,
            }
          ),
          new fs.Container({
            width:10,
          }),
          new fs.Text(this.title, { style:new fs.TextStyle({
            color:fs.Colors.white,
            fontWeight:fs.FontWeight.bold,
            fontSize:18,
          })}),

        ]
      }),
    });
  }
}
