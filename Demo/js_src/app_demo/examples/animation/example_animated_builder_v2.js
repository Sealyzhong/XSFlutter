
let {
  XSJSWidgetState,
  XSJSStatefulWidget,
  Scaffold,
  Container,
  Center,
  AppBar,
  Text,
  Icon,
  Colors,
  FloatingActionButton,
  TextStyle,
  Icons,
  AnimatedBuilder,
  AnimationController,
  Duration,
} = require("js_flutter.js");



class PageExampleAnimatedBuilderV2 extends XSJSStatefulWidget {
  constructor() {
    super('PageExampleAnimatedBuilderV2');
  }

  createState() {
    return new PageExampleAnimatedBuilderV2State();
  }
}

class PageExampleAnimatedBuilderV2State extends XSJSWidgetState {

  constructor(){
    super();

    this.count = 0;
    this._controller = new AnimationController({
      duration: new Duration({seconds: 1}),
      // upperBound: 100,
      // vsync: this,
    });

    this._controller.forward();
  }

  beginAnimation(){
    this._controller.repeat();
  }

  build(){
    const widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('PageExampleAnimatedBuilderV2',),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed:function () {
          this.beginAnimation();
        }.bind(this)
      }),
      body: new AnimatedBuilder({
        animation: this._controller,
        widget: new Center({
          child: new Container({
            height:"100+$value*100",   //动态计算$value
            width:"200+$value*200",    //动态计算$value
            color: Colors.orange,
            child: new Center({
              child: new Text("点击 ( + ) 号，重复播放",{
                style:new TextStyle({
                  color:Colors.white
                })
              }),
            }),
          })
        }),
        // builder 由于异步频繁调用JS，会导致JS线程性能问题，没有实现，async在builder中调用也存在技术问题
        // builder: function(context,child){
        //   console.log("call builder in js....aaaa");
        //   JSLog.log("call builder in js....bbbb");
        //   return child;
        // },
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAnimatedBuilderV2,
};
