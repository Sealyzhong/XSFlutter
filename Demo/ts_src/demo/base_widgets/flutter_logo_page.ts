

import { AppBar, BuildContext, FlutterLogo, ListTile, ListView, 
  Scaffold, StatelessWidget,Text} from "flutter_sdk";
export class MyFlutterLogoPage extends StatelessWidget{
   
    build(context:BuildContext) {
        return new Scaffold({
            appBar: new AppBar({
              title: new Text('FlutterLogo',),
            }),
            body: new ListView({
              children:[
                new ListTile({title:new Text("FlutterLogo")}),
                new FlutterLogo({}),
                new ListTile({title:new Text("FlutterLogo Size"),}),
                new FlutterLogo({size:60}),
                new ListTile({title:new Text("FlutterLogo Size"),}),
                new FlutterLogo({size:100}),
              ],
            })
          });    
    }
}