import { MySectionTitle } from "demo/widgets/section_title";
import { AppBar, BuildContext, Colors, FlatButton, FloatingActionButton, Icon, IconButton, Icons, ListView, 
  Log, RaisedButton, Scaffold, StatelessWidget,Text} from "flutter_sdk";
export class MyButtonPage extends StatelessWidget{
   
    build(context:BuildContext) {
        return new Scaffold({
            appBar: new AppBar({
              title: new Text('Button',),
            }),
            body: new ListView({
              children:[
                new MySectionTitle("RaisedButton"),
                new RaisedButton({
                  child:new Text("普通按钮"),
                  onPressed:function () {
                    Log.log("Click");
                  },
                }),
                new MySectionTitle("失效Disable"),
                new RaisedButton({
                  child:new Text("Disable 按钮"),
                }),
                new MySectionTitle("FlatButton"),
                new FlatButton({
                  child:new Text("Flat 按钮"),
                  onPressed:function(){
                    Log.log("Click");
                  }
                }),
                new FlatButton({
                  textColor:Colors.black,
                  child:new Text("Flat 按钮"),
                  onPressed:function(){
                    Log.log("Click");
                  }
                }),
                new MySectionTitle("Icon Button"),
                new IconButton({
                  icon:new Icon(Icons.camera),
                  onPressed:function(){
                    Log.log("Click");
                  }
                }),
                new MySectionTitle("Floating Action Button"),
                new FloatingActionButton({
                  child:new Icon(Icons.camera),
                  onPressed:function(){
                    Log.log("Click");
                  }
                }),
              ],
            })
          });
    }
}