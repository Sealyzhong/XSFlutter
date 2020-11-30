import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyButtonPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
              title: fs.Text.new('Button',),
            }),
            body: fs.ListView.new({
              children:[
                MySectionTitle.new("RaisedButton"),
                fs.RaisedButton.new({
                  child:fs.Text.new("普通按钮"),
                  onPressed:function () {
                    fs.Log.log("Click");
                  },
                }),
                MySectionTitle.new("失效Disable"),
                fs.RaisedButton.new({
                  child:fs.Text.new("Disable 按钮"),
                }),
                MySectionTitle.new("FlatButton"),
                fs.FlatButton.new({
                  child:fs.Text.new("Flat 按钮"),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                fs.FlatButton.new({
                  textColor:fs.Colors.black,
                  child:fs.Text.new("Flat 按钮"),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                MySectionTitle.new("Icon Button"),
                fs.IconButton.new({
                  icon:fs.Icon.new(fs.Icons.camera),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
                MySectionTitle.new("Floating Action Button"),
                fs.FloatingActionButton.new({
                  child:fs.Icon.new(fs.Icons.camera),
                  onPressed:function(){
                    fs.Log.log("Click");
                  }
                }),
              ],
            })
          });
    }

    static new(){
        return new MyButtonPage();
    }
}