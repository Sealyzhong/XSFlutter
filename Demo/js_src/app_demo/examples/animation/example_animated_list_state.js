

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleAnimatedListState extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedListState');
  }

  createState() {
    return new PageExampleAnimatedListStateState();
  }
}

class PageExampleAnimatedListStateState extends XSJSWidgetState {

  constructor(){
    super();
  }

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedListState',),
      }),
      body: new ListView({
        children:[
          new SectionTitle("PageExampleAnimatedListState"),
          new SectionTitle("Todo...."),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedListState,
};
