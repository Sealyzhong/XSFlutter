/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Basic Class
 */

let {FlutterWidget, FlutterCallArgs,DartClass } = require("./js_flutter_basic_types.js");

let {invokeFlutterFunction,} = require("./js_flutter_framework.js");

const dart_sdk = require("dart_sdk");
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
const core = dart_sdk.core;
const $clamp = dartx.clamp;

//-------------- A -----------------
//****** Animation ******
class Animation extends FlutterWidget {
  constructor({tween, controller} = {}) {
    super();

    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorObjectID();

    this.tween = tween;
    this.controller = controller;
    this.statusListenerList = [];
    this.listenerList = [];
  }

  statusListenerCallback(status) {
    for (let funcKey in this.statusListenerList) {
      this.statusListenerList[funcKey](status);
    }
  }

  listenerCallback(status) {
    for (let funcKey in this.listenerList) {
      this.listenerList[funcKey](status);
    }
  }

  value() {
    return "animation.value";
  }

  addListener(callback) {
    this.listenerList.push(callback);
  }

  removeListener(callback) {
    const index = this.listenerList.indexOf(callback);
    this.listenerList.splice(index);
  }

  addStatusListener(callback) {
    this.statusListenerList.push(callback);
  }

  removeStatusListener(callback) {
    let index = this.statusListenerList.indexOf(callback);
    this.statusListenerList.splice(index);
  }
}
Animation.new = function ({tween, controller} = {}) {
  return new Animation({
    tween:tween,
    controller:controller,
  });
};

//****** AnimationController ******
class AnimationController extends FlutterWidget {
  constructor({ value, duration, debugLabel, lowerBound, upperBound, animationBehavior, vsync} = {}) {
    super();

    //Mirror对象在构造函数创建 MirrorID
    this.createMirrorObjectID();

    this.value = value;
    this.duration = duration;
    this.debugLabel = debugLabel;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.animationBehavior = animationBehavior;
    this.vsync = vsync;
  }

  ///TODO:
  dispose() { }

  forward(from) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "forward",
      args: {
        from: from
      }
    });
    invokeFlutterFunction(argument);
  }

  reverse(from) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "reverse",
      args: {
        from: from
      }
    });
    invokeFlutterFunction(argument);
  }

  repeat(min, max, period) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "repeat",
      args: {
        min: min,
        max: max,
        period: period
      }
    });
    invokeFlutterFunction(argument);
  }

  drive(animatable) {
    var argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "AnimationController",
      funcName: "drive",
      args: {
        animatable: animatable
      }
    });
    invokeFlutterFunction(argument);
  }
}
AnimationController.new = function ({ value, duration, debugLabel, lowerBound, upperBound, animationBehavior, vsync} = {}) {
  return new AnimationController({
    value:value,
    duration:duration,
    debugLabel:debugLabel,
    lowerBound:lowerBound,
    upperBound:upperBound,
    animationBehavior:animationBehavior,
    vsync:vsync,
  });
};

//****** AnimatedBuilder ******
class AnimatedBuilder extends FlutterWidget {
  constructor({ key, animation, builder, child, widget } = {}) {
    super();

    this.key = key;
    this.animation = animation;
    this.builder = builder;
    this.child = child;
    this.widget = widget;
  }
}
AnimatedBuilder.new = function ({ key, animation, builder, child, widget } = {}) {
  return new AnimatedBuilder({
    key:key,
    animation:animation,
    builder:builder,
    child:child,
    widget:widget,
  });
};

//****** AnimatedBuilder ******
class AnimatedContainer extends FlutterWidget {
  constructor({ key, alignment, padding, color, decoration, foregroundDecoration, width, height, constraints, margin,
                transform, child, curve, duration, onEnd,} = {}) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.padding = padding;
    this.color = color;
    this.decoration = decoration;
    this.foregroundDecoration = foregroundDecoration;
    this.width = width;
    this.height = height;
    this.constraints = constraints;
    this.margin = margin;
    this.transform = transform;
    this.child = child;
    this.curve = curve;
    this.duration = duration;  //@required
    this.onEnd = onEnd;
  }
}
AnimatedContainer.new = function ({ key, alignment, padding, color, decoration, foregroundDecoration, width, height, constraints, margin, transform, child, curve, duration, onEnd,} = {}) {
  return new AnimatedContainer({
    key:key,
    alignment:alignment,
    padding:padding,
    color:color,
    decoration:decoration,
    foregroundDecoration:foregroundDecoration,
    width:width,
    height:height,
    constraints:constraints,
    margin:margin,
    transform:transform,
    child:child,
    duration:duration,
    curve:curve,
    onEnd:onEnd,
  });
};

//****** AnimatedBuilder ******
class AnimatedCrossFade extends FlutterWidget {
  constructor({ key, firstChild, secondChild, firstCurve, secondCurve, sizeCurve, alignment, crossFadeState, duration, reverseDuration, layoutBuilder,} = {}) {
    super();

    this.key = key;
    this.firstChild = firstChild;
    this.secondChild = secondChild;
    this.firstCurve = firstCurve;
    this.secondCurve = secondCurve;
    this.sizeCurve = sizeCurve;
    this.alignment = alignment;
    this.crossFadeState = crossFadeState;
    this.duration = duration;
    this.reverseDuration = reverseDuration;
    this.layoutBuilder = layoutBuilder;
  }
}
AnimatedCrossFade.new = function ({ key, firstChild, secondChild, firstCurve, secondCurve, sizeCurve, alignment, crossFadeState, duration, reverseDuration, layoutBuilder,} = {}) {
  return new AnimatedCrossFade({
    key:key,
    firstChild:firstChild,
    secondChild:secondChild,
    firstCurve:firstCurve,
    secondCurve:secondCurve,
    sizeCurve:sizeCurve,
    alignment:alignment,
    crossFadeState:crossFadeState,
    duration:duration,
    reverseDuration:reverseDuration,
    layoutBuilder:layoutBuilder,
  });
};

//****** AnimatedPhysicalModel ******
class AnimatedOpacity extends FlutterWidget {
  constructor({ key, child, opacity, curve, duration, onEnd, alwaysIncludeSemantics,} = {}) {
    super();

    this.key = key;
    this.child = child;
    this.opacity = opacity;
    this.curve = curve;
    this.duration = duration;
    this.onEnd = onEnd;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
  }
}
AnimatedOpacity.new = function ({ key, child, opacity, curve, duration, onEnd, alwaysIncludeSemantics,} = {}) {
  return new AnimatedOpacity({
    key:key,
    child:child,
    opacity:opacity,
    curve:curve,
    duration:duration,
    onEnd:onEnd,
    alwaysIncludeSemantics:alwaysIncludeSemantics,
  });
};

//****** AnimatedPhysicalModel ******
class AnimatedPhysicalModel extends FlutterWidget {
  constructor({ key, child, shape, clipBehavior, borderRadius, elevation, color, animateColor, shadowColor, animateShadowColor, curve, duration, onEnd,} = {}) {
    super();

    this.key = key;
    this.child = child;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.borderRadius = borderRadius;
    this.elevation = elevation;
    this.color = color;
    this.animateColor = animateColor;
    this.shadowColor = shadowColor;
    this.animateShadowColor = animateShadowColor;
    this.curve = curve;
    this.duration = duration;
    this.onEnd = onEnd;
  }
}
AnimatedPhysicalModel.new = function ({ key, child, shape, clipBehavior, borderRadius, elevation, color, animateColor, shadowColor, animateShadowColor, curve, duration, onEnd,} = {}) {
  return new AnimatedPhysicalModel({
    key:key,
    child:child,
    shape:shape,
    clipBehavior:clipBehavior,
    borderRadius:borderRadius,
    elevation:elevation,
    color:color,
    animateColor:animateColor,
    shadowColor:shadowColor,
    animateShadowColor:animateShadowColor,
    curve:curve,
    duration:duration,
    onEnd:onEnd,
  });
};

class AnimatedPositioned extends FlutterWidget {
  constructor({ key, child, left, top, right, bottom, width, height, curve, duration, onEnd,} = {}) {
    super();

    this.key = key;
    this.child = child;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
    this.curve = curve;
    this.duration = duration;
    this.onEnd = onEnd;
  }
}
AnimatedPositioned.new = function ({ key, child, left, top, right, bottom, width, height, curve, duration, onEnd,} = {}) {
  return new AnimatedPositioned({
    key:key,
    child:child,
    left:left,
    top:top,
    right:right,
    bottom:bottom,
    width:width,
    height:height,
    curve:curve,
    duration:duration,
    onEnd:onEnd,
  });
};

class AnimatedSize extends FlutterWidget {
  constructor({key, child, alignment, curve, duration, reverseDuration, vsync,} = {}) {
    super();

    this.key = key;
    this.child = child;
    this.alignment = alignment;
    this.curve = curve;
    this.duration = duration;
    this.reverseDuration = reverseDuration;
    this.vsync = vsync;
  }
}
AnimatedSize.new = function ({key, child, alignment, curve, duration, reverseDuration, vsync,} = {}) {
  return new AnimatedSize({
    key:key,
    child:child,
    alignment:alignment,
    curve:curve,
    duration:duration,
    reverseDuration:reverseDuration,
    vsync:vsync,
  });
};

class AnimatedDefaultTextStyle extends FlutterWidget {
  constructor({key, child, style, textAlign, softWrap, overflow, maxLines, duration, onEnd,} = {}) {
    super();
    this.key = key;
    this.child = child;
    this.style = style;
    this.textAlign = textAlign;
    this.softWrap = softWrap;
    this.overflow = overflow;
    this.maxLines = maxLines;
    this.duration = duration;
    this.onEnd = onEnd;
  }
}
AnimatedDefaultTextStyle.new = function ({key, child, style, textAlign, softWrap, overflow, maxLines, duration, onEnd,} = {}) {
  return new AnimatedDefaultTextStyle({
    key:key,
    child:child,
    style:style,
    textAlign:textAlign,
    softWrap:softWrap,
    overflow:overflow,
    maxLines:maxLines,
    duration:duration,
    onEnd:onEnd,
  });
};

//-------------- C -----------------
//****** CurveTween ******
class CurveTween extends FlutterWidget {
  constructor({curve} = {}) {
    super();

    this.curve = curve;
  }
}
CurveTween.new = function ({curve} = {}) {
  return new CurveTween({
    curve:curve,
  });
};

//****** Duration ******
class Curve extends FlutterWidget {
  constructor() {
    super();
  }

  transform(t) {
    if (t === 0.0 || t === 1.0) {
      return t;
    }
    return this.transformInternal();
  }

  transformInternal() {
    dart.throw(new core.UnimplementedError.new());
  }
}
Curve.new = function () {
  return new Curve({
  });
};

//****** Duration ******
class Cubic extends Curve {
  constructor(a, b, c, d,) {
    super();

    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  _evaluateCubic(a, b, m) {
    return 3 * a * (1 - m) * (1 - m) * m +
        3 * b * (1 - m) * m * m +
        m * m * m;
  }

  transformInternal(t) {
    let start = 0.0;
    let end = 1.0;
    while (true) {
      let midpoint = (start + end) / 2;
      let estimate = this._evaluateCubic(this.a, this.c, midpoint);
      if (Math.abs(t - estimate) < 0.001) return this._evaluateCubic(this.b, this.d, midpoint);
      if (estimate < t)
        start = midpoint;
      else
        end = midpoint;
    }
  }
}
Cubic.new = function (a, b, c, d,) {
  return new Cubic(a,b,c,d);
};


//-------------- D -----------------
//****** Duration ******
class Duration extends DartClass {
  constructor({ days, hours, minutes, seconds, milliseconds } = {}) {
    super();

    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
  }

  static new({ days, hours, minutes, seconds, milliseconds } = {}) {
    return new Duration({
      days:days,
      hours:hours,
      minutes:minutes,
      seconds:seconds,
      milliseconds:milliseconds,
    });
  }
}

//****** DecoratedBoxTransition ******
class DecoratedBoxTransition extends FlutterWidget {
  constructor({ key,decoration, position, child,} = {}) {
    super();

    this.key = key;
    this.decoration = decoration;
    this.position = position;
    this.child = child;
  }


}
DecoratedBoxTransition.new = function ({ key,decoration, position, child,} = {}) {
  return new DecoratedBoxTransition({
    key:key,
    decoration:decoration,
    position:position,
    child:child,
  });
};

//****** DecorationTween ******
class DecorationTween extends FlutterWidget {
  constructor({begin, end,} = {}) {
    super();

    this.begin = begin;
    this.end = end;

    //XSFlutter特殊逻辑
    this.controller = null;
  }

  // animate(parent) {
  //   const argument = new FlutterCallArgs({
  //     mirrorID: this.mirrorID,
  //     className: 'DecorationTween',
  //     funcName: 'animate',
  //     args: {
  //       parent: parent,
  //     },
  //   });
  //   invokeFlutterFunction(argument);
  // }

  //XSFlutter特殊逻辑
  animate(controller){
    this.controller = controller;
    return this;
  }
}
DecorationTween.new = function ({begin, end,} = {}) {
  return new DecorationTween({
    begin:begin,
    end:end,
  });
};

//-------------- F -----------------
//****** FadeTransition ******
class FadeTransition extends FlutterWidget {
  constructor({ key, opacity, alwaysIncludeSemantics, child } = {}) {
    super();

    this.key = key;
    this.opacity = opacity;
    this.alwaysIncludeSemantics = alwaysIncludeSemantics;
    this.child = child;
  }
}
FadeTransition.new = function ({ key, opacity, alwaysIncludeSemantics, child } = {}) {
  return new FadeTransition({
    key:key,
    opacity:opacity,
    alwaysIncludeSemantics:alwaysIncludeSemantics,
    child:child,
  });
};

//-------------- I -----------------
//****** Interval ******
class Interval extends Curve {
  constructor(begin, end, { curve } = {}) {
    super();

    this.begin = begin;
    this.end = end;
    this.curve = curve;
  }

  transformInternal(t) {
    if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 147, 12, "begin >= 0.0");
    if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 148, 12, "begin <= 1.0");
    if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 149, 12, "end >= 0.0");
    if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 150, 12, "end <= 1.0");
    if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 151, 12, "end >= begin");
    t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
    if (t === 0.0 || t === 1.0) return t;
    return this.curve.transform(t);
  }
}
Interval.new = function (begin, end, { curve } = {}) {
  return new Interval(begin,end, {
    curve:curve,
  });
};

//-------------- R -----------------
//****** RectTween ******
class RectTween extends FlutterWidget {
  constructor({begin, end,} = {}) {
    super();

    this.begin = begin;
    this.end = end;
  }
}
RectTween.new = function ({begin, end,} = {}) {
  return new RectTween({
    begin:begin,
    end:end,
  });
};

//-------------- S -----------------
//****** SlideTransition ******
class SlideTransition extends FlutterWidget {
  constructor({key, position, transformHitTests, textDirection, child} = {}) {
    super();

    this.key = key;
    this.position = position;
    this.transformHitTests = transformHitTests;
    this.textDirection = textDirection;
    this.child = child;
  }
}
SlideTransition.new = function ({key, position, transformHitTests, textDirection, child} = {}) {
  return new SlideTransition({
    key:key,
    position:position,
    transformHitTests:transformHitTests,
    textDirection:textDirection,
    child:child,
  });
};

//-------------- T -----------------
//****** Tween ******
class Tween extends FlutterWidget {
  constructor({ begin, end } = {}) {
    super();

    this.begin = begin;
    this.end = end;
  }
  lerp(t) {
    return dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]);
  }
  transform(t) {
    if (t === 0.0) return this.begin;
    if (t === 1.0) return this.end;
    return this.lerp(t);
  }
}
Tween.new = function ({ begin, end } = {}) {
  return new Tween({
    begin:begin,
    end:end,
  });
};



module.exports = {

  Animation, AnimationController, AnimatedBuilder,AnimatedSize,
  AnimatedContainer,  AnimatedCrossFade,  AnimatedDefaultTextStyle,  AnimatedOpacity,  AnimatedPhysicalModel,  AnimatedPositioned,

  CurveTween,Curve,  Cubic,

  Duration,DecorationTween,  DecoratedBoxTransition,

  FadeTransition,
  Interval,
  RectTween,
  SlideTransition,
  Tween,
};
