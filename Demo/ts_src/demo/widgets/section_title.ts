

import { MyColorUtil } from "demo/utils/color_util";
import fs = require("flutter_sdk");


export class MySectionTitle extends fs.StatelessWidget{
  title:string;
  constructor(title:string){
    super();
    this.title = title;
  }

  static new(title:string){
    return new MySectionTitle(title);
  }

  
  build(context?:fs.BuildContext){
    return fs.Container.new({

      padding:fs.EdgeInsets.all(10.0),
      color:MyColorUtil.primaryColor,
      child:fs.Row.new({
        mainAxisAlignment:fs.MainAxisAlignment.start,
        children:[
          fs.Icon.new(
            fs.Icons.ac_unit,
            {
              color:fs.Colors.white,
            }
          ),
          fs.Container.new({
            width:10,
          }),
          fs.Text.new(this.title, { style:fs.TextStyle.new({
            color:fs.Colors.white,
            fontWeight:fs.FontWeight.bold,
            fontSize:18,
          })}),

        ]
      }),
    });
  }
}
