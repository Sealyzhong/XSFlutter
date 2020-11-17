

let {
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  Icons,
  Duration,
  DecoratedBoxTransition,
  Radius,
  BoxDecoration,
  AnimationController,
  DecorationTween,
  FlutterLogo,
  BorderRadius,
} = require("js_flutter.js");


class PageExampleDecoratedBoxTransition extends JSStatefulWidget {
  constructor() {
    super('PageExampleDecoratedBoxTransition');
  }

  createState() {
    return new PageExampleDecoratedBoxTransitionState();
  }
}

class PageExampleDecoratedBoxTransitionState extends JSWidgetState {

  constructor() {
    super();
    this.controller = new AnimationController();
    this.controller.duration = new Duration({ seconds: 2 });


    let dTween = new DecorationTween({
      begin: new BoxDecoration({
        color: Colors.white,
        borderRadius: BorderRadius.all(Radius.circular(0))
      }),
      end: new BoxDecoration({
        color: Colors.blue,
        borderRadius: BorderRadius.all(Radius.circular(20))
      })
    });

    this.rectAnimation = dTween.animate(this.controller)

  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleDecoratedBoxTransition'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.controller.forward();
        }.bind(this),
      }),
      body: new DecoratedBoxTransition({
        child: new FlutterLogo({ size: 300 }),
        decoration: this.rectAnimation,
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleDecoratedBoxTransition,
};
