

let {
  JSLog,
  JSStatelessWidget,
  Scaffold,
  AppBar,
  Text,
  Icon,
  Colors,
  IconButton,
  FlatButton,
  RaisedButton,
  FloatingActionButton,
  ListView,
  Icons,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");


class PageExampleButton extends JSStatelessWidget {
  constructor(){
    super("PageExampleButton");
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Button',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("RaisedButton"),
          new RaisedButton({
            child:new Text("普通按钮"),
            onPressed:function () {
              JSLog.log("Click");
            },
          }),
          new SectionTitle("失效Disable"),
          new RaisedButton({
            child:new Text("Disable 按钮"),
          }),
          new SectionTitle("FlatButton"),
          new FlatButton({
            child:new Text("Flat 按钮"),
          }),
          new FlatButton({
            textColor:Colors.black,
            child:new Text("Flat 按钮"),
          }),
          new SectionTitle("Icon Button"),
          new IconButton({
            icon:new Icon(Icons.camera),
          }),
          new SectionTitle("Floating Action Button"),
          new FloatingActionButton({
            child:new Icon(Icons.camera),
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleButton,
};
