
import fs = require("flutter_sdk");
export class MyFlutterLogoPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
              title: new fs.Text('FlutterLogo',),
            }),
            body: new fs.ListView({
              children:[
                new fs.ListTile({title:new fs.Text("FlutterLogo")}),
                new fs.FlutterLogo({}),
                new fs.ListTile({title:new fs.Text("FlutterLogo Size"),}),
                new fs.FlutterLogo({size:60}),
                new fs.ListTile({title:new fs.Text("FlutterLogo Size"),}),
                new fs.FlutterLogo({size:100}),
              ],
            })
          });    
    }
}