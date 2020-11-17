

let {
  JSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExamplePositionedTransition extends XSJSStatefulWidget {
  constructor() {
    super('PageExamplePositionedTransition');
  }

  createState() {
    return new PageExamplePositionedTransitionState();
  }
}

class PageExamplePositionedTransitionState extends JSWidgetState {
  constructor(){
    super();
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExamplePositionedTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExamplePositionedTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExamplePositionedTransition,
};
