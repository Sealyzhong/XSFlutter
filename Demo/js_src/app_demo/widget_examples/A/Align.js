

let {
    XSJSStatelessWidget,
    Scaffold,
    AppBar,
    Text,
    Colors,
    TextStyle,
    ListView,
    Container,
    Align,
  } = require("js_flutter.js");
  
  const { SectionTitle } = require("./app_demo/component/section_title.js");
  
  class ExampleWidget extends XSJSStatelessWidget {
    constructor(){
      super("ExampleWidget");
    }
  
    build(){
      let widget = new Scaffold({
        appBar: new AppBar({
          title: new Text('Align',),
        }),
        body: new ListView({
          children:[
            new SectionTitle("普通文本"),
            new Container({
                color: Colors.lightBlue,
                width: 200,
                height: 200,
                child: new Align({
                  child: new Text("设置文本颜色",{
                    style:new TextStyle({
                      color:Colors.white,
                      fontSize: 20,
                    })
                  }),
                }),
                }),        
          ],
        })
      });
      return widget;
    }
  }
  
  module.exports = {
    ExampleWidget
  };
  