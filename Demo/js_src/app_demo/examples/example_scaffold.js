

let {
  JSWidgetState,
  XSJSStatefulWidget,
  XSJSStatelessWidget,
  Scaffold,
  Center,
  AppBar,
  Text,
  Icon,
  FloatingActionButton,
  BottomNavigationBar,
  BottomNavigationBarType,
  BottomNavigationBarItem,
  AnimationController,
  Duration,
  Icons,
  Theme,
} = require("js_flutter.js");

class HomePage extends XSJSStatelessWidget {
  constructor() {
    super("HomePage");
  }
  build() {
    return new Center({
      child: new Text("HomePage"),
    })
  }
}


class IdeaPage extends XSJSStatelessWidget {
  constructor() {
    super("IdeaPage");
  }
  build() {
    return new Center({
      child: new Text("IdeaPage"),
    })
  }
}


class MessagePage extends XSJSStatelessWidget {
  constructor() {
    super("MessagePage");
  }
  build() {
    return new Center({
      child: new Text("MessagePage"),
    })
  }
}


class MyPage extends XSJSStatelessWidget {
  constructor() {
    super("MyPage");
  }
  build() {
    return new Center({
      child: new Text("MyPage"),
    })
  }
}

class _NavigationIconView {
  constructor({ icon, title }) {
    this.item = new BottomNavigationBarItem({
      icon: icon,
      title: title
    });
    this.controller = new AnimationController({
      duration: new Duration({
        milliseconds: 200
      })
    });
  }
}



class PageExampleScaffold extends XSJSStatefulWidget {
  constructor() {
    super("PageExampleScaffold");
  }

  createState() {
    return new PageExampleScaffoldState(this);
  }
}

class PageExampleScaffoldState extends JSWidgetState {
  constructor(widget) {
    super(widget);
    this._currentIndex = 0;
    this._navigationViews = [];
    this._pageList = [];
    this._currentPage = null;
  }

  build(context) {
    this._navigationViews = [
      new _NavigationIconView({
        icon: new Icon(Icons.assignment),
        title: new Text("首页")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.all_inclusive),
        title: new Text("想法")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.add_alert),
        title: new Text("通知")
      }),
      new _NavigationIconView({
        icon: new Icon(Icons.perm_identity),
        title: new Text("我的")
      }),
    ];

    this._pageList = [
      new HomePage(),
      new IdeaPage(),
      new MessagePage(),
      new MyPage()
    ];

    this._currentPage = this._pageList[this._currentIndex];


    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Scafold'),
      }),
      body: new Center({
        child: this._currentPage
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {

        }
      }),
      bottomNavigationBar: new BottomNavigationBar({
        items: this._navigationViews.map(navigationIconView => navigationIconView.item),
        currentIndex: this._currentIndex,
        fixedColor: Theme.of(context).primaryColor,
        type: BottomNavigationBarType.fixed,
        onTap: function (index) {
          this.setState(function () {
            this._navigationViews[this._currentIndex].controller.reverse();
            this._currentIndex = index;
            this._navigationViews[this._currentIndex].controller.forward();
            this._currentPage = this._pageList[this._currentIndex];
          }.bind(this))
        }.bind(this)
      }),
    });
    return widget;
  }
}

module.exports = {
  PageExampleScaffold,
};
