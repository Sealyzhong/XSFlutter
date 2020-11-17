
let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleAnimatedWidget extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedWidget');
  }

  createState() {
    return new PageExampleAnimatedWidgetState();
  }
}

class PageExampleAnimatedWidgetState extends XSJSWidgetState {

  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedWidget'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedWidget"),
          new SectionTitle("抽象类"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedWidget,
};
