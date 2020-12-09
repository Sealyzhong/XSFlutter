import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyButtonPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
              title: new fs.Text('Button',),
            }),
            body: new fs.ListView({
              children:[
                new MySectionTitle("RaisedButton"),
                new fs.RaisedButton({
                  child:new fs.Text("普通按钮"),
                  onPressed:function () {
                    fs.Log.log("Click");
                  },
                }),
                new MySectionTitle("失效Disable"),
                new fs.RaisedButton({
                  child:new fs.Text("Disable 按钮"),
                }),
                new MySectionTitle("FlatButton"),
                new fs.FlatButton({
                  child:new fs.Text("Flat 按钮"),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                new fs.FlatButton({
                  textColor:fs.Colors.black,
                  child:new fs.Text("Flat 按钮"),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                new MySectionTitle("Icon Button"),
                new fs.IconButton({
                  icon:new fs.Icon(fs.Icons.camera),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                new MySectionTitle("Floating Action Button"),
                new fs.FloatingActionButton({
                  child:new fs.Icon(fs.Icons.camera),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
              ],
            })
          });
    }
}