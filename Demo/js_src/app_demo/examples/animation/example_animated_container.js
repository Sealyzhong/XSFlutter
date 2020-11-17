

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  Center,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  TextStyle,
  ListView,
  Icons,
  AnimatedContainer,
  Duration,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");


class PageExampleAnimatedContainer extends JSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedContainer');
  }

  createState() {
    return new PageExampleAnimatedContainerState();
  }
}

class PageExampleAnimatedContainerState extends JSWidgetState {

  constructor(){
    super();
    this.selected = false;
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedContainer',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

          this.setState(function() {
            this.selected = !this.selected;
          }.bind(this))
        }.bind(this)
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedContainer"),
          new AnimatedContainer({
            height:this.selected ? 300.0 : 100,
            color:this.selected ? Colors.blue:Colors.orange,
            duration:new Duration({milliseconds:200}),
            child:new Center({
              child:new Text("动画容器",{
                style:new TextStyle({
                  color:Colors.white,
                  fontSize:20,
                })
              }),
            })
          }),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedContainer,
};
