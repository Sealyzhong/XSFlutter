


let {
  JSLog,
  JSWidgetState,
  JSStatefulWidget,
  JSStatelessWidget,
  Scaffold,
  Container,
  Center,
  AppBar,
  Text,
  Icon,
  FloatingActionButton,
  Icons,
  Animation,
  AnimatedBuilder,
  AnimationController,
  Duration,
  Tween,
  Image,
} = require("js_flutter.js");


class PageExampleAnimatedBuilder extends JSStatelessWidget {
  constructor() {
    super("PageExampleAnimatedBuilder");
    this.count = 0;
    this.tween = new Tween({ begin: 50.0, end: 300.0 });
    this.animationController = new AnimationController({ duration: new Duration({ seconds: 2 }) });
    this.animation = new Animation({ tween: this.tween, controller: this.animationController });
    this.animation.addStatusListener(this.animationLoopFunc.bind(this));
  }

  animationLoopFunc(status) {
    JSLog.log('callback from flutter ....  ' + status);
    if (status === AnimationStatus.completed) {
      this.animationController.reverse();
      this.count++;
    } else if (status === AnimationStatus.dismissed) {
      this.animationController.forward();
    }
    if (this.count > 5) {
      this.animation.removeStatusListener(this.animationLoopFunc);
    }
  }

  beginAnimation() {
    this.animationController.forward();
  }

  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilder'),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new ScaleAnimation({
        child: Image.network('https://pic2.zhimg.com/50/v2-6416ef6d3181117a0177275286fac8f3_hd.jpg'),
        animation: this.animation
      })
    });
    return widget;
  }
}



class ScaleAnimation extends JSStatefulWidget {

  constructor({
    child,
    animation
  } = {}) {
    super('ScaleAnimation');
    this.child = child;
    this.animation = animation;
  }

  createState() {
    return new ScaleAnimationState();
  }
}

class ScaleAnimationState extends JSWidgetState {

  build() {
    const widget = new Center({
      child: new AnimatedBuilder({
        animation: this.widget.animation,
        widget: new Container({
          width: "$value",
          child: this.widget.child
        })
        // child: this.child,
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedBuilder,
};
