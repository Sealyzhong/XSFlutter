
import fs = require("flutter_sdk");
export class MyFlutterLogoPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
              title: fs.Text.new('FlutterLogo',),
            }),
            body: fs.ListView.new({
              children:[
                fs.ListTile.new({title:fs.Text.new("FlutterLogo")}),
                fs.FlutterLogo.new({}),
                fs.ListTile.new({title:fs.Text.new("FlutterLogo Size"),}),
                fs.FlutterLogo.new({size:60}),
                fs.ListTile.new({title:fs.Text.new("FlutterLogo Size"),}),
                fs.FlutterLogo.new({size:100}),
              ],
            })
          });    
    }

    static new(){
        return new MyFlutterLogoPage();
    }
}