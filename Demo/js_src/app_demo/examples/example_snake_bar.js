

let {
  XSJSStatelessWidget,
  Scaffold,
  ListTile,
  AppBar,
  SnackBar,
  Text,
  Icon,
  RaisedButton,
  ListView,
  Icons,
} = require("js_flutter.js");



class PageExampleSnakeBar extends XSJSStatelessWidget {
  constructor(){
    super("PageExampleSnackbar");
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Idea Test',),
      }),
      body: new ListView({
        children:[
          new ListTile({
            leading:new Icon(Icons.ac_unit),
            title:new Text("Scaffold.of(context) 测试"),
          }),
          new MyScaffoldBody(),
        ],
      })
    });
    return widget;
  }
}

class MyScaffoldBody extends XSJSStatelessWidget {
  constructor(){
    super("MyScaffoldBody");
  }

  build(){
    let widget =  new RaisedButton({
      child:new Text("测试 Scaffold.of(context)"),
      onPressed: function () {
        let context = {
          widgetID: this.widgetID,
        };
        Scaffold.of(context).showSnackBar(
          new SnackBar({content: new Text('我是通过JS脚本构建的,终于动态化了！！')})
        );
      }.bind(this),
    });
    return widget;
  }
}


module.exports = {
  PageExampleSnakeBar,
};
