

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleScaleTransition extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleScaleTransition');
  }

  createState() {
    return new PageExampleScaleTransitionState();
  }
}

class PageExampleScaleTransitionState extends XSJSWidgetState {

  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleScaleTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleScaleTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleScaleTransition,
};
