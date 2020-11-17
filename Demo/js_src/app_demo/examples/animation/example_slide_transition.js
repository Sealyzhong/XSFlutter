

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleSlideTransition extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleSlideTransition');
  }

  createState() {
    return new PageExampleSlideTransitionState();
  }
}

class PageExampleSlideTransitionState extends XSJSWidgetState {
  constructor(){
    super("PageExampleSlideTransition");
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleSlideTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleSlideTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSlideTransition,
};
