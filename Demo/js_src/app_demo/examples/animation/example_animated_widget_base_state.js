

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleAnimatedWidgetBaseState extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedWidgetBaseState');
  }

  createState() {
    return new PageExampleAnimatedWidgetBaseStateState();
  }
}

class PageExampleAnimatedWidgetBaseStateState extends XSJSWidgetState {

  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedWidgetBaseState'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedWidgetBaseState"),
          new SectionTitle("todo...泛型类"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedWidgetBaseState,
};
