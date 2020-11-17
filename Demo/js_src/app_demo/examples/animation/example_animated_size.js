

let {
  JSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  Container,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  Icons,
  AnimatedSize,
  Duration,
} = require("js_flutter.js");


class PageExampleAnimatedSize extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedSize');
  }

  createState() {
    return new PageExampleAnimatedSizeState();
  }
}

class PageExampleAnimatedSizeState extends JSWidgetState {

  constructor() {
    super("PageExampleAnimatedSize");
    this.size = 200.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.size = this.size == 200.0 ? 50.0 : 200.0;
    }.bind(this));
  }


  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedSize'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new AnimatedSize({
        child: new Container({
          width: this.size,
          height: this.size,
          color: Colors.orange,
        }),
        duration: new Duration({ milliseconds: 300 }),
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedSize,
};
