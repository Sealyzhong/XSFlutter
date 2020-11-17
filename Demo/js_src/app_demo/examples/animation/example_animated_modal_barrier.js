

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");


class PageExampleAnimatedModalBarrier extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedModalBarrier');
  }

  createState() {
    return new PageExampleAnimatedModalBarrierState();
  }
}

class PageExampleAnimatedModalBarrierState extends XSJSWidgetState {

  constructor() {
    super();
  }
  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedModalBarrier'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleAnimatedModalBarrier"),
          new SectionTitle("todo..."),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedModalBarrier,
};
