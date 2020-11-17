

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Icon,
  EdgeInsets,
  FloatingActionButton,
  ListView,
  Icons,
  Padding,
  AnimatedOpacity,
  FlutterLogo,
  Duration,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleAnimatedOpacity extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedOpacity');
  }

  createState() {
    return new PageExampleAnimatedOpacityState();
  }
}

class PageExampleAnimatedOpacityState extends XSJSWidgetState {

  constructor() {
    super();
    this.opacityLevel = 1.0;
  }

  changeOpacity() {
    this.setState(function () {
      this.opacityLevel = this.opacityLevel == 0 ? 1.0 : 0.0;
    });
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedOpacity'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.changeOpacity();
        }.bind(this),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedOpacity"),
          new AnimatedOpacity({
            opacity: this.opacityLevel,
            duration: new Duration({ seconds: 1 }),
            child: new Padding({
              padding: EdgeInsets.all(10),
              child: new FlutterLogo({ size: 100 }),
            }),
          })
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedOpacity,
};
