

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleFadeTransition extends JSStatefulWidget {
  constructor() {
    super('PageExampleFadeTransition');
  }

  createState() {
    return new PageExampleFadeTransitionState();
  }
}

class PageExampleFadeTransitionState extends JSWidgetState {
  constructor(){
    super();
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleFadeTransition',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleFadeTransition"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleFadeTransition,
};
