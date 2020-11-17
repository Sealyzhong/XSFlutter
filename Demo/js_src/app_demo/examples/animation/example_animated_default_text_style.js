

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  Container,
  AppBar,
  Text,
  Colors,
  RaisedButton,
  Row,
  MainAxisAlignment,
  TextStyle,
  FontWeight,
  SizedBox,
  ListView,
  AnimatedDefaultTextStyle,
  Duration,
  Alignment,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleAnimatedDefaultTextStyle extends JSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedDefaultTextStyle');
  }

  createState() {
    return new PageExampleAnimatedDefaultTextStyleState();
  }
}

class PageExampleAnimatedDefaultTextStyleState extends JSWidgetState {

  constructor(){
    super();
    this.fontSize = 20;
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedDefaultTextStyle',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedDefaultTextStyle"),
          new Container({
            height:600,
            alignment:Alignment.center,
            child:new AnimatedDefaultTextStyle({
              child:new Text("Hello"),
              style:new TextStyle({
                fontWeight: FontWeight.bold,
                fontSize:this.fontSize,
                color:Colors.blue,
              }),
              duration: new Duration({milliseconds:350}),
            }),
          }),
          new Row({
            mainAxisAlignment:MainAxisAlignment.center,
            children: [
              new RaisedButton({
                child:new Text("缩小"),
                onPressed:function(){
                  this.setState(function() {
                    this.fontSize -= 30;
                  }.bind(this));
                }.bind(this)
              }),
              new SizedBox({
                width: 10,
                height: 10,
              }),
              new RaisedButton({
                child:new Text("放大"),
                onPressed:function(){
                  this.setState(function() {
                    this.fontSize += 30;
                  }.bind(this));
                }.bind(this)
              }),
            ]
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedDefaultTextStyle,
};
