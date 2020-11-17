

let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  ListView,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");

class PageExampleHero extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleHero');
  }

  createState() {
    return new PageExampleHeroState();
  }
}

class PageExampleHeroState extends XSJSWidgetState {
  constructor() {
    super();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleHero'),
      }),
      body: new ListView({
        children: [
          new SectionTitle("PageExampleHero"),
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleHero,
};
