

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  Container,
  Center,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  Icons,
  AnimatedPhysicalModel,
  Duration,
} = require("js_flutter.js");


class PageExampleAnimatedPhysicalModel extends JSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedPhysicalModel');
  }

  createState() {
    return new PageExampleAnimatedPhysicalModelState();
  }
}

class PageExampleAnimatedPhysicalModelState extends JSWidgetState {
  constructor(){
    super();
    this.elevation = 50.0;
  }

  changeOpacity() {
    this.setState(function(){
      this.elevation = this.elevation == 50.0 ? 0.0 : 50.0;
    });
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedPhysicalModel',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new Center({
        child: new AnimatedPhysicalModel({
          child:new Container({
            width: 200,
            height: 200,
            color:Colors.orange,
          }),
          shape:BoxShape.rectangle,
          elevation: this.elevation,
          color:Colors.blue,
          shadowColor: Colors.grey,
          duration:new Duration({milliseconds:500}),
        }),
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedPhysicalModel,
};
