

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleSizeTransition extends JSStatefulWidget {
  constructor() {
    super('PageExampleSizeTransition');
  }

  createState() {
    return new PageExampleSizeTransitionState();
  }
}

class PageExampleSizeTransitionState extends JSWidgetState {

  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleSizeTransition'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleSizeTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSizeTransition,
};
