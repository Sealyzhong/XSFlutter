

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleRotationTransition extends JSStatefulWidget {
  constructor() {
    super('PageExampleRotationTransition');
  }

  createState() {
    return new PageExampleRotationTransitionState();
  }
}

class PageExampleRotationTransitionState extends JSWidgetState {

  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleRotationTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleRotationTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleRotationTransition,
};
