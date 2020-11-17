

let {
  JSStatelessWidget,
  Scaffold,
  ListTile,
  AppBar,
  Text,
  ListView,
  FlutterLogo,
} = require("js_flutter.js");


class PageExampleFlutterLogo extends JSStatelessWidget {
  constructor(){
    super("PageExampleFlutterLogo");
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('FlutterLogo',),
      }),
      body: new ListView({
        children:[
          new ListTile({title:new Text("FlutterLogo")}),
          new FlutterLogo(),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:60}),
          new ListTile({title:new Text("FlutterLogo Size"),}),
          new FlutterLogo({size:100}),
          //new FlutterLogo({size:100, colors:Colors.orange}),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleFlutterLogo,
};
