
let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  Container,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  Icons,
  AnimatedPositioned,
  Duration,
  Stack,
} = require("js_flutter.js");


class PageExampleAnimatedPositioned extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedPositioned');
  }

  createState() {
    return new PageExampleAnimatedPositionedState();
  }
}

class PageExampleAnimatedPositionedState extends XSJSWidgetState {

  constructor() {
    super();
    this.top = 200.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.top = this.top == 200.0 ? 0.0 : 200.0;
    });
  }


  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedPositioned'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new Stack({
        children: [
          new AnimatedPositioned({
            child: new Container({
              width: 200,
              height: 200,
              color: Colors.orange,
            }),
            top: this.top,
            left: this.top,
            duration: new Duration({ milliseconds: 300 }),
          }),
        ]
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedPositioned,
};
