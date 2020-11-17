//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let { DartClass, FlutterWidget,FlutterCallArgs } = require("./js_flutter_basic_types.js");

let {invokeFlutterFunction,} = require("./js_flutter_framework.js");

//-------------- A -----------------
//****** Align ******
class Align extends FlutterWidget {
  constructor({ key, alignment, widthFactor, heightFactor, child } = {}) {
    super();
    this.key = key;
    this.alignment = alignment;
    this.widthFactor = widthFactor;
    this.heightFactor = heightFactor;
    this.child = child;
  }
}
Align.new = function({ key, alignment, widthFactor, heightFactor, child } = {}) {
  return new Align({key:key, alignment:alignment, widthFactor:widthFactor, heightFactor:heightFactor, child:child,});
};

//****** AspectRatio ******
class AspectRatio extends FlutterWidget {
  constructor({ key, aspectRatio, child } = {}) {
    super();
    this.key = key;
    this.aspectRatio = aspectRatio;
    this.child = child;
  }
}
AspectRatio.new = function({ key, aspectRatio, child } = {}) {
  return new AspectRatio({
    key:key,
    aspectRatio:aspectRatio,
    child:child,
  });
};

//****** AlwaysScrollableScrollPhysics ******
class AlwaysScrollableScrollPhysics extends DartClass {
  constructor({ parent } = {}) {
    super();
    this.parent = parent;
  }
}
AlwaysScrollableScrollPhysics.new = function ({ parent } = {}) {
  return new AlwaysScrollableScrollPhysics({
    parent:parent,
  });
};

//-------------- B -----------------
//****** Baseline ******
class Baseline extends FlutterWidget {
  constructor({ key, baseline, baselineType, child } = {}) {
    super();

    this.key = key;
    this.baseline = baseline;
    this.baselineType = baselineType;
    this.child = child;
  }
}
Baseline.new = function({ key, baseline, baselineType, child } = {}) {
  return new Baseline({
    key:key,
    baseline:baseline,
    baselineType:baselineType,
    child:child,
  });
};

//-------------- C -----------------
//****** Container ******
class Container extends FlutterWidget {
  constructor({key,alignment,padding,color,decoration,foregroundDecoration,width,height,constraints,margin,transform,child} = {}) {
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
  }
}
Container.new = function({key,alignment,padding,color,decoration,foregroundDecoration,width,height,constraints,margin,transform,child} = {}) {
  return new Container({
    key:key,
    alignment:alignment,
    padding:padding,
    color:color,
    foregroundDecoration:foregroundDecoration,
    decoration:decoration,
    width:width,
    height:height,
    constraints:constraints,
    margin:margin,
    transform:transform,
    child:child,
  });
};

//****** Center ******
class Center extends FlutterWidget {
  constructor({ key, widthFactor, heightFactor, child } = {}) {
    super();
    this.key = key;
    this.widthFactor = widthFactor;
    this.heightFactor = heightFactor;
    this.child = child;
  }
}
Center.new = function({ key, widthFactor, heightFactor, child } = {}) {
  return new Center({
    key:key,
    widthFactor:widthFactor,
    heightFactor:heightFactor,
    child:child,
  });
};

//****** ConstrainedBox ******
class ConstrainedBox extends FlutterWidget {
  constructor({ key, constraints, child } = {}) {
    super();

    this.key = key;
    this.constraints = constraints;
    this.child = child;
  }
}
ConstrainedBox.new = function({ key, constraints, child } = {}) {
  return new ConstrainedBox({
    key:key,
    constraints:constraints,
    child:child,
  });
};

//****** CustomSingleChildLayout ******
class CustomSingleChildLayout extends FlutterWidget {
  constructor({ key, delegate, child } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
    this.child = child;
  }
}
CustomSingleChildLayout.new = function({ key, delegate, child } = {}) {
  return new CustomSingleChildLayout({
    key:key,
    delegate:delegate,
    child:child,
  });
};

//****** Column ******
class Column extends FlutterWidget {
  constructor({ key, mainAxisAlignment, mainAxisSize, crossAxisAlignment, textDirection, verticalDirection, textBaseline, children} = {}) {
    super();

    this.key = key;
    this.mainAxisAlignment = mainAxisAlignment;
    this.mainAxisSize = mainAxisSize;
    this.crossAxisAlignment = crossAxisAlignment;
    this.textDirection = textDirection;
    this.verticalDirection = verticalDirection;
    this.textBaseline = textBaseline;
    this.children = children;
  }
}
Column.new = function({ key, mainAxisAlignment, mainAxisSize, crossAxisAlignment, textDirection, verticalDirection, textBaseline, children} = {}) {
  return new Column({
    key:key,
    mainAxisAlignment:mainAxisAlignment,
    mainAxisSize:mainAxisSize,
    crossAxisAlignment:crossAxisAlignment,
    textDirection:textDirection,
    verticalDirection:verticalDirection,
    textBaseline:textBaseline,
    children:children,
  });
};

//****** CustomMultiChildLayout ******
class CustomMultiChildLayout extends FlutterWidget {
  constructor({ key, delegate, children } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
    this.children = children;
  }
}
CustomMultiChildLayout.new = function({ key, delegate, children } = {}) {
  return new CustomMultiChildLayout({
    key:key,
    delegate:delegate,
    children:children,
  });
};

//****** CustomScrollView ******
class CustomScrollView extends FlutterWidget {
  constructor({ key, scrollDirection, reverse, controller, primary, physics, shrinkWrap, center, anchor, cacheExtent, slivers, semanticChildCount, dragStartBehavior } = {}) {
    super();

    this.key = key;
    this.scrollDirection = scrollDirection;
    this.reverse = reverse;
    this.controller = controller;
    this.primary = primary;
    this.physics = physics;
    this.shrinkWrap = shrinkWrap;
    this.center = center;
    this.anchor = anchor;
    this.cacheExtent = cacheExtent;
    this.slivers = slivers;
    this.semanticChildCount = semanticChildCount;
    this.dragStartBehavior = dragStartBehavior;
  }
}
CustomScrollView.new = function({key, scrollDirection, reverse, controller, primary, physics, shrinkWrap, center, anchor, cacheExtent, slivers, semanticChildCount, dragStartBehavior} = {}) {
  return new CustomScrollView({
    key:key,
    scrollDirection:scrollDirection,
    reverse:reverse,
    controller:controller,
    primary:primary,
    physics:physics,
    shrinkWrap:shrinkWrap,
    center:center,
    anchor:anchor,
    cacheExtent:cacheExtent,
    slivers:slivers,
    semanticChildCount:semanticChildCount,
    dragStartBehavior:dragStartBehavior,
  });
};

//****** ClampingScrollPhysics ******
class ClampingScrollPhysics extends DartClass {
  constructor({ parent } = {}) {
    super();

    this.parent = parent;
  }
}
ClampingScrollPhysics.new = function ({ parent } = {}) {
  return new ClampingScrollPhysics({
    parent:parent,
  });
};

//-------------- D -----------------
//****** DecoratedBox ******
class DecoratedBox extends FlutterWidget {
  constructor({ key, decoration, position, child } = {}) {
    super();

    this.key = key;
    this.decoration = decoration;
    this.position = position;
    this.child = child;
  }
}
DecoratedBox.new = function({ key, decoration, position, child } = {}) {
  return new DecoratedBox({
    key:key,
    decoration:decoration,
    position:position,
    child:child,
  });
};

//-------------- E -----------------
//****** Expanded ******
class Expanded extends FlutterWidget {
  constructor({ key, flex, child } = {}) {
    super();

    this.key = key;
    this.flex = flex;
    this.child = child;
  }
}
Expanded.new = function({ key, flex, child } = {}) {
  return new Expanded({
    key:key,
    flex:flex,
    child:child,
  });
};

//-------------- F -----------------
//****** FittedBox ******
class FittedBox extends FlutterWidget {
  constructor({ key, fit, alignment, child } = {}) {
    super();

    this.key = key;
    this.fit = fit;
    this.alignment = alignment;
    this.child = child;
  }
}
FittedBox.new = function({ key, fit, alignment, child } = {}) {
  return new FittedBox({
    key:key,
    fit:fit,
    alignment:alignment,
    child:child,
  });
};

//****** FractionallySizedBox ******
class FractionallySizedBox extends FlutterWidget {
  constructor({ key, alignment, widthFactor, heightFactor, child } = {}) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.widthFactor = widthFactor;
    this.heightFactor = heightFactor;
    this.child = child;
  }
}
FractionallySizedBox.new = function({ key, alignment, widthFactor, heightFactor, child } = {}) {
  return new FractionallySizedBox({
    key:key,
    alignment:alignment,
    widthFactor:widthFactor,
    heightFactor:heightFactor,
    child:child,
  });
};

//****** Flow ******
class Flow extends FlutterWidget {
  constructor({ key, delegate, children } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
    this.children = children;
  }
}
Flow.new = function({ key, delegate, children } = {}) {
  return new Flow({
    key:key,
    delegate:delegate,
    children:children,
  });
};

//-------------- G -----------------
//****** GestureDetector ******
class GestureDetector extends FlutterWidget {
  constructor({
                key,
                child,
                onTapDown,
                onTapUp,
                onTap,
                onTapCancel,
                onDoubleTap,
                onLongPress,
                onLongPressUp,
                onVerticalDragDown,
                onVerticalDragStart,
                onVerticalDragUpdate,
                onVerticalDragEnd,
                onVerticalDragCancel,
                onHorizontalDragDown,
                onHorizontalDragStart,
                onHorizontalDragUpdate,
                onHorizontalDragEnd,
                onHorizontalDragCancel,
                onPanDown,
                onPanStart,
                onPanUpdate,
                onPanEnd,
                onPanCancel,
                onScaleStart,
                onScaleUpdate,
                onScaleEnd,
                behavior,
                excludeFromSemantics
              } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.onTapDown = onTapDown;
    this.onTapUp = onTapUp;
    this.onTap = onTap;
    this.onTapCancel = onTapCancel;
    this.onDoubleTap = onDoubleTap;
    this.onLongPress = onLongPress;
    this.onLongPressUp = onLongPressUp;
    this.onVerticalDragDown = onVerticalDragDown;
    this.onVerticalDragStart = onVerticalDragStart;
    this.onVerticalDragUpdate = onVerticalDragUpdate;
    this.onVerticalDragEnd = onVerticalDragEnd;
    this.onVerticalDragCancel = onVerticalDragCancel;
    this.onHorizontalDragDown = onHorizontalDragDown;
    this.onHorizontalDragStart = onHorizontalDragStart;
    this.onHorizontalDragUpdate = onHorizontalDragUpdate;
    this.onHorizontalDragEnd = onHorizontalDragEnd;
    this.onHorizontalDragCancel = onHorizontalDragCancel;
    this.onPanDown = onPanDown;
    this.onPanStart = onPanStart;
    this.onPanUpdate = onPanUpdate;
    this.onPanEnd = onPanEnd;
    this.onPanCancel = onPanCancel;
    this.onScaleStart = onScaleStart;
    this.onScaleUpdate = onScaleUpdate;
    this.onScaleEnd = onScaleEnd;
    this.behavior = behavior;
    this.excludeFromSemantics = excludeFromSemantics;
  }
}
GestureDetector.new = function({key, child, onTapDown, onTapUp, onTap, onTapCancel, onDoubleTap, onLongPress, onLongPressUp, onVerticalDragDown, onVerticalDragStart, onVerticalDragUpdate, onVerticalDragEnd,  onVerticalDragCancel, onHorizontalDragDown, onHorizontalDragStart, onHorizontalDragUpdate,
                                 onHorizontalDragEnd, onHorizontalDragCancel, onPanDown, onPanStart, onPanUpdate, onPanEnd, onPanCancel, onScaleStart, onScaleUpdate, onScaleEnd, behavior, excludeFromSemantics} = {}) {
  return new GestureDetector({
    key : key,
    child : child,
    onTapDown : onTapDown,
    onTapUp : onTapUp,
    onTap : onTap,
    onTapCancel : onTapCancel,
    onDoubleTap : onDoubleTap,
    onLongPress : onLongPress,
    onLongPressUp : onLongPressUp,
    onVerticalDragDown : onVerticalDragDown,
    onVerticalDragStart : onVerticalDragStart,
    onVerticalDragUpdate : onVerticalDragUpdate,
    onVerticalDragEnd : onVerticalDragEnd,
    onVerticalDragCancel : onVerticalDragCancel,
    onHorizontalDragDown : onHorizontalDragDown,
    onHorizontalDragStart : onHorizontalDragStart,
    onHorizontalDragUpdate : onHorizontalDragUpdate,
    onHorizontalDragEnd : onHorizontalDragEnd,
    onHorizontalDragCancel : onHorizontalDragCancel,
    onPanDown : onPanDown,
    onPanStart : onPanStart,
    onPanUpdate : onPanUpdate,
    onPanEnd : onPanEnd,
    onPanCancel : onPanCancel,
    onScaleStart : onScaleStart,
    onScaleUpdate : onScaleUpdate,
    onScaleEnd : onScaleEnd,
    behavior : behavior,
    excludeFromSemantics : excludeFromSemantics,
  });
};

//-------------- I -----------------
//****** IntrinsicHeight ******
class IntrinsicHeight extends FlutterWidget {
  constructor({ key, child } = {}) {
    super();

    this.key = key;
    this.child = child;
  }
}
IntrinsicHeight.new = function({ key, child } = {}) {
  return new IntrinsicHeight({
    key:key,
    child:child,
  });
};

//****** IntrinsicWidth ******
class IntrinsicWidth extends FlutterWidget {
  constructor({ key, stepWidth, stepHeight, child } = {}) {
    super();

    this.key = key;
    this.stepWidth = stepWidth;
    this.stepHeight = stepHeight;
    this.child = child;
  }
}
IntrinsicWidth.new = function({ key, stepWidth, stepHeight, child } = {}) {
  return new IntrinsicWidth({
    key:key,
    stepHeight:stepHeight,
    stepWidth:stepWidth,
    child:child,
  });
};

//****** IndexedStack ******
class IndexedStack extends FlutterWidget {
  constructor({ key, alignment, textDirection, sizing, index, children } = {}) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.textDirection = textDirection;
    this.sizing = sizing;
    this.index = index;
    this.children = children;
  }
}
IndexedStack.new = function({ key, alignment, textDirection, sizing, index, children } = {}) {
  return new IndexedStack({
    key:key,
    alignment:alignment,
    textDirection:textDirection,
    sizing:sizing,
    index:index,
    children:children,
  });
};

//-------------- L -----------------
//****** LimitedBox ******
class LimitedBox extends FlutterWidget {
  constructor({ key, maxWidth, maxHeight, child } = {}) {
    super();

    this.key = key;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.child = child;
  }
}
LimitedBox.new = function({ key, maxWidth, maxHeight, child } = {}) {
  return new LimitedBox({
    key:key,
    maxHeight:maxHeight,
    maxWidth:maxWidth,
    child:child,
  });
};

//****** ListBody ******
class ListBody extends FlutterWidget {
  constructor({ key, mainAxis, reverse, children } = {}) {
    super();

    this.key = key;
    this.mainAxis = mainAxis;
    this.reverse = reverse;
    this.children = children;
  }
}
ListBody.new = function({ key, mainAxis, reverse, children } = {}) {
  return new ListBody({
    key:key,
    mainAxis:mainAxis,
    reverse:reverse,
    children:children,
  });
};

//****** ListTile ******
class ListTile extends FlutterWidget {
  constructor({ key, leading, title, subtitle, trailing, isThreeLine, dense, contentPadding, enabled, onTap, onLongPress, selected } = {}) {
    super();

    this.key = key;
    this.leading = leading;
    this.title = title;
    this.subtitle = subtitle;
    this.trailing = trailing;
    this.isThreeLine = isThreeLine;
    this.dense = dense;
    this.contentPadding = contentPadding;
    this.enabled = enabled;
    this.onTap = onTap;
    this.onLongPress = onLongPress;
    this.selected = selected;
  }
}
ListTile.new = function({ key, leading, title, subtitle, trailing, isThreeLine, dense, contentPadding, enabled, onTap, onLongPress, selected } = {}) {
  return new ListTile({
    key:key,
    leading:leading,
    title:title,
    subtitle:subtitle,
    trailing:trailing,
    isThreeLine:isThreeLine,
    dense:dense,
    contentPadding:contentPadding,
    enabled:enabled,
    onTap:onTap,
    onLongPress:onLongPress,
    selected:selected,
  });
};

//****** ListView ******
class ListView extends FlutterWidget {
  constructor({ key, scrollDirection, reverse, controller, primary, physics, shrinkWrap, padding, itemExtent,
                addAutomaticKeepAlives, addRepaintBoundaries, addSemanticIndexes, cacheExtent, children, semanticChildCount } = {}) {
    super();

    this.key = key;
    this.scrollDirection = scrollDirection;
    this.reverse = reverse;
    this.controller = controller;
    this.primary = primary;
    this.physics = physics;
    this.shrinkWrap = shrinkWrap;
    this.padding = padding;
    this.itemExtent = itemExtent;
    this.addAutomaticKeepAlives = addAutomaticKeepAlives;
    this.addRepaintBoundaries = addRepaintBoundaries;
    this.addSemanticIndexes = addSemanticIndexes;
    this.cacheExtent = cacheExtent;
    this.children = children;
    this.semanticChildCount = semanticChildCount;
  }

  preBuild(jsWidgetHelper, buildContext) {
    if (this.itemBuilder) {
      this.children = [];
      for (let i = 0; i < this.itemCount; ++i) {
        let w = this.itemBuilder(buildContext, i);
        this.children.push(w);
      }
      delete this.itemBuilder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
ListView.new = function({ key, scrollDirection, reverse, controller, primary, physics, shrinkWrap, padding, itemExtent,
                          addAutomaticKeepAlives, addRepaintBoundaries, addSemanticIndexes, cacheExtent, children, semanticChildCount } = {}) {
  return new ListView({
    key:key,
    scrollDirection:scrollDirection,
    reverse:reverse,
    controller:controller,
    primary:primary,
    physics:physics,
    shrinkWrap:shrinkWrap,
    padding:padding,
    itemExtent:itemExtent,
    addAutomaticKeepAlives:addAutomaticKeepAlives,
    addRepaintBoundaries:addRepaintBoundaries,
    addSemanticIndexes:addSemanticIndexes,
    cacheExtent:cacheExtent,
    children:children,
    semanticChildCount:semanticChildCount,
  });
};

ListView.builder = function({ key, scrollDirection, reverse, controller, primary, physics, shrinkWrap, padding, itemExtent, itemBuilder, itemCount,
                              addAutomaticKeepAlives, addRepaintBoundaries,  addSemanticIndexes,  cacheExtent,  semanticChildCount, dragStartBehavior,}) {
  let jsObj = new ListView();
  jsObj.constructorName = "builder";

  jsObj.key = key;
  jsObj.scrollDirection = scrollDirection;
  jsObj.reverse = reverse;
  jsObj.controller = controller;
  jsObj.primary = primary;
  jsObj.physics = physics;
  jsObj.shrinkWrap = shrinkWrap;
  jsObj.padding = padding;
  jsObj.itemExtent = itemExtent;
  jsObj.itemBuilder = itemBuilder;
  jsObj.itemCount = itemCount;
  jsObj.addAutomaticKeepAlives = addAutomaticKeepAlives;
  jsObj.addRepaintBoundaries = addRepaintBoundaries;
  jsObj.addSemanticIndexes = addSemanticIndexes;
  jsObj.cacheExtent = cacheExtent;
  jsObj.semanticChildCount = semanticChildCount;
  jsObj.dragStartBehavior = dragStartBehavior;

  return jsObj;
}

//****** LayoutBuilder ******
class LayoutBuilder extends FlutterWidget {
  constructor({ key, builder } = {}) {
    super();

    this.key = key;
    this.builder = builder;
  }
}
LayoutBuilder.new = function({ key, builder } = {}) {
  return new LayoutBuilder({
    key:key,
    builder:builder,
  });
};

//-------------- N -----------------
//****** NestedScrollView ******
class NestedScrollView extends FlutterWidget {
  constructor({ key, controller, scrollDirection, reverse, physics, headerSliverBuilder, body, dragStartBehavior } = {}) {
    super();

    this.key = key;
    this.controller = controller;
    this.scrollDirection = scrollDirection;
    this.reverse = reverse;
    this.physics = physics;
    this.headerSliverBuilder = headerSliverBuilder;
    this.body = body;
    this.dragStartBehavior = dragStartBehavior;

    // 本地创建的，供flutter使用
    this.children = [];
  }

  preBuild(jsWidgetHelper, buildContext) {
    ///TODO: innerBoxIsScrolled 暂时不支持，默认为false
    if (this.headerSliverBuilder) {
      this.children = this.headerSliverBuilder(buildContext);
      delete this.headerSliverBuilder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
NestedScrollView.new = function({ key, controller, scrollDirection, reverse, physics, headerSliverBuilder, body, dragStartBehavior } = {}) {
  return new NestedScrollView({
    key:key,
    controller:controller,
    scrollDirection:scrollDirection,
    reverse:reverse,
    physics:physics,
    headerSliverBuilder:headerSliverBuilder,
    body:body,
    dragStartBehavior:dragStartBehavior,
  });
};
NestedScrollView.sliverOverlapAbsorberHandleFor = function() {
  let v = new NestedScrollView();
  v.staticFunctionName = "sliverOverlapAbsorberHandleFor";

  return v;
};

//****** NeverScrollableScrollPhysics ******
class NeverScrollableScrollPhysics extends DartClass {
  constructor({ parent } = {}) {
    super();

    this.parent = parent;
  }
}
NeverScrollableScrollPhysics.new = function ({ parent } = {}) {
  return new NeverScrollableScrollPhysics({
    parent:parent,
  });
};

//-------------- O -----------------
//****** Offstage ******
class Offstage extends FlutterWidget {
  constructor({ key, offstage, child } = {}) {
    super();

    this.key = key;
    this.offstage = offstage;
    this.child = child;
  }
}
Offstage.new = function({ key, offstage, child } = {}) {
  return new Offstage({
    key:key,
    offstage:offstage,
    child:child,
  });
};

//****** OverflowBox ******
class OverflowBox extends FlutterWidget {
  constructor({ key, alignment, minWidth, maxWidth, minHeight, maxHeight, child } = {}) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.minWidth = minWidth;
    this.maxWidth = maxWidth;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
    this.child = child;
  }
}
OverflowBox.new = function({ key, alignment, minWidth, maxWidth, minHeight, maxHeight, child } = {}) {
  return new OverflowBox({
    key:key,
    alignment:alignment,
    minWidth:minWidth,
    minHeight:minHeight,
    maxWidth:maxWidth,
    maxHeight:maxHeight,
    child:child,
  });
};

//-------------- P -----------------
//****** Padding ******
class Padding extends DartClass {
  constructor({ key, padding, child } = {}) {
    super();

    this.key = key;
    this.padding = padding;
    this.child = child;
  }
}
Padding.new = function({ key, padding, child } = {}) {
  return new Padding({
    key:key,
    padding:padding,
    child:child,
  });
};

//-------------- R -----------------
//****** Row ******
class Row extends FlutterWidget {
  constructor({ key, mainAxisAlignment, mainAxisSize, crossAxisAlignment, textDirection, verticalDirection, textBaseline, children } = {}) {
    super();

    this.key = key;
    this.mainAxisAlignment = mainAxisAlignment;
    this.mainAxisSize = mainAxisSize;
    this.crossAxisAlignment = crossAxisAlignment;
    this.textDirection = textDirection;
    this.verticalDirection = verticalDirection;
    this.textBaseline = textBaseline;
    this.children = children;
  }
}
Row.new = function({ key, mainAxisAlignment, mainAxisSize, crossAxisAlignment, textDirection, verticalDirection, textBaseline, children } = {}) {
  return new Row({
    key:key,
    mainAxisAlignment:mainAxisAlignment,
    mainAxisSize:mainAxisSize,
    crossAxisAlignment:crossAxisAlignment,
    textDirection:textDirection,
    verticalDirection:verticalDirection,
    textBaseline:textBaseline,
    children:children,
  });
};

//-------------- S -----------------
//****** SizedBox ******
class SizedBox extends FlutterWidget {
  constructor({ key, width, height, child } = {}) {
    super();

    this.key = key;
    this.width = width;
    this.height = height;
    this.child = child;
  }
}
SizedBox.new = function({ key, width, height, child } = {}) {
  return new SizedBox({
    key:key,
    width:width,
    height:height,
    child:child,
  });
};

//****** SizedOverflowBox ******
class SizedOverflowBox extends FlutterWidget {
  constructor({ key, size, alignment, child } = {}) {
    super();

    this.key = key;
    this.size = size;
    this.alignment = alignment;
    this.child = child;
  }
}
SizedOverflowBox.new = function({ key, size, alignment, child } = {}) {
  return new SizedOverflowBox({
    key:key,
    size:size,
    alignment:alignment,
    child:child,
  });
};

//****** Stack ******
class Stack extends FlutterWidget {
  constructor({ key, alignment, textDirection, fit, overflow, children } = {}) {
    super();

    this.key = key;
    this.alignment = alignment;
    this.textDirection = textDirection;
    this.fit = fit;
    this.overflow = overflow;
    this.children = children;
  }
}
Stack.new = function({ key, alignment, textDirection, fit, overflow, children } = {}) {
  return new Stack({
    key:key,
    alignment:alignment,
    textDirection:textDirection,
    fit:fit,
    overflow:overflow,
    children:children,
  });
};

//****** SliverAppBar ******
class SliverAppBar extends FlutterWidget {
  constructor({ key, leading, automaticallyImplyLeading, title, actions, flexibleSpace, bottom, elevation, forceElevated,
                backgroundColor, brightness, iconTheme, textTheme, primary, centerTitle, titleSpacing, expandedHeight, floating, pinned, snap } = {}) {
    super();

    this.key = key;
    this.leading = leading;
    this.automaticallyImplyLeading = automaticallyImplyLeading;
    this.title = title;
    this.actions = actions;
    this.flexibleSpace = flexibleSpace;
    this.bottom = bottom;
    this.elevation = elevation;
    this.forceElevated = forceElevated;
    this.backgroundColor = backgroundColor;
    this.brightness = brightness;
    this.iconTheme = iconTheme;
    this.textTheme = textTheme;
    this.primary = primary;
    this.centerTitle = centerTitle;
    this.titleSpacing = titleSpacing;
    this.expandedHeight = expandedHeight;
    this.floating = floating;
    this.pinned = pinned;
    this.snap = snap;
  }
}
SliverAppBar.new = function({ key, leading, automaticallyImplyLeading, title, actions, flexibleSpace, bottom, elevation, forceElevated,
                              backgroundColor, brightness, iconTheme, textTheme, primary, centerTitle, titleSpacing, expandedHeight, floating, pinned, snap } = {}) {
  return new SliverAppBar({
    key:key,
    leading:leading,
    automaticallyImplyLeading:automaticallyImplyLeading,
    title:title,
    actions:actions,
    flexibleSpace:flexibleSpace,
    bottom:bottom,
    elevation:elevation,
    forceElevated:forceElevated,
    backgroundColor:backgroundColor,
    brightness:brightness,
    iconTheme:iconTheme,
    textTheme:textTheme,
    primary:primary,
    centerTitle:centerTitle,
    titleSpacing:titleSpacing,
    expandedHeight:expandedHeight,
    floating:floating,
    pinned:pinned,
    snap:snap,
  });
};

//****** SliverPadding ******
class SliverPadding extends FlutterWidget {
  constructor({ key, padding, sliver } = {}) {
    super();

    this.key = key;
    this.padding = padding;
    this.sliver = sliver;
  }
}
SliverPadding.new = function({ key, padding, sliver } = {}) {
  return new SliverPadding({
    key:key,
    padding:padding,
    sliver:sliver,
  });
};

//****** SliverGrid ******
class SliverGrid extends FlutterWidget {
  constructor({ key, delegate, gridDelegate } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
    this.gridDelegate = gridDelegate;
  }
}
SliverGrid.new = function({ key, delegate, gridDelegate } = {}) {
  return new SliverGrid({
    key:key,
    delegate:delegate,
    gridDelegate:gridDelegate,
  });
};

//****** SliverGridDelegateWithMaxCrossAxisExtent ******
class SliverGridDelegateWithMaxCrossAxisExtent extends FlutterWidget {
  constructor({ maxCrossAxisExtent, mainAxisSpacing, crossAxisSpacing, childAspectRatio} = {}) {
    super();

    this.maxCrossAxisExtent = maxCrossAxisExtent;
    this.mainAxisSpacing = mainAxisSpacing;
    this.crossAxisSpacing = crossAxisSpacing;
    this.childAspectRatio = childAspectRatio;
  }
}
SliverGridDelegateWithMaxCrossAxisExtent.new = function({ maxCrossAxisExtent, mainAxisSpacing, crossAxisSpacing, childAspectRatio} = {}) {
  return new SliverGridDelegateWithMaxCrossAxisExtent({
    mainAxisSpacing:mainAxisSpacing,
    maxCrossAxisExtent:maxCrossAxisExtent,
    crossAxisSpacing:crossAxisSpacing,
    childAspectRatio:childAspectRatio,
  });
};

//****** SliverChildListDelegate ******
class SliverChildListDelegate extends DartClass {
  constructor(
      children,
      {
        addAutomaticKeepAlives,
        addRepaintBoundaries,
        addSemanticIndexes,
        semanticIndexCallback,
        semanticIndexOffset
      } = {}
  ) {
    super();

    this.children = children;
    this.addAutomaticKeepAlives = addAutomaticKeepAlives;
    this.addRepaintBoundaries = addRepaintBoundaries;
    this.addSemanticIndexes = addSemanticIndexes;
    this.semanticIndexCallback = semanticIndexCallback;
    this.semanticIndexOffset = semanticIndexOffset;
  }
}
SliverChildListDelegate.new = function (children,{addAutomaticKeepAlives, addRepaintBoundaries, addSemanticIndexes, semanticIndexCallback, semanticIndexOffset  } = {}) {
  return new SliverChildListDelegate(children, {
    addAutomaticKeepAlives:addAutomaticKeepAlives,
    addSemanticIndexes:addSemanticIndexes,
    addRepaintBoundaries:addRepaintBoundaries,
    semanticIndexCallback:semanticIndexCallback,
    semanticIndexOffset:semanticIndexOffset,
  });
};

//****** SliverChildBuilderDelegate ******
class SliverChildBuilderDelegate extends FlutterWidget {
  constructor( builder,{ childCount, addAutomaticKeepAlives, addRepaintBoundaries, addSemanticIndexes, semanticIndexCallback, semanticIndexOffset } = {} ) {
    super();

    this.builder = builder;
    this.childCount = childCount;
    this.addAutomaticKeepAlives = addAutomaticKeepAlives;
    this.addRepaintBoundaries = addRepaintBoundaries;
    this.addSemanticIndexes = addSemanticIndexes;
    this.semanticIndexCallback = semanticIndexCallback;
    this.semanticIndexOffset = semanticIndexOffset;

    // 本地创建的，供flutter使用
    this.children = [];
  }

  preBuild(jsWidgetHelper, buildContext) {
    if (this.builder) {
      for (let i = 0; i < this.childCount; ++i) {
        let w = this.builder(buildContext, i);
        this.children.push(w);
      }
      delete this.builder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
SliverChildBuilderDelegate.new = function ( builder,{ childCount, addAutomaticKeepAlives, addRepaintBoundaries, addSemanticIndexes, semanticIndexCallback, semanticIndexOffset } = {} ) {
  return new SliverChildBuilderDelegate(builder, {
    childCount:childCount,
    addRepaintBoundaries:addRepaintBoundaries,
    addSemanticIndexes:addSemanticIndexes,
    addAutomaticKeepAlives:addAutomaticKeepAlives,
    semanticIndexOffset:semanticIndexOffset,
    semanticIndexCallback:semanticIndexCallback,
  });
};

//****** SliverList ******
class SliverList extends FlutterWidget {
  constructor({ key, delegate } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
  }
}
SliverList.new = function({ key, delegate } = {}) {
  return new SliverList({
    key:key,
    delegate:delegate,
  });
};

//****** SliverOverlapInjector ******
class SliverOverlapInjector extends FlutterWidget {
  constructor({ key, handle, child } = {}) {
    super();

    this.key = key;
    this.handle = handle;
    this.child = child;
  }
}
SliverOverlapInjector.new = function({ key, handle, child } = {}) {
  return new SliverOverlapInjector({
    key:key,
    handle:handle,
    child:child,
  });
};

//****** SliverFixedExtentList ******
class SliverFixedExtentList extends FlutterWidget {
  constructor({ key, delegate, itemExtent } = {}) {
    super();

    this.key = key;
    this.delegate = delegate;
    this.itemExtent = itemExtent;
  }
}
SliverFixedExtentList.new = function({ key, delegate, itemExtent } = {}) {
  return new SliverFixedExtentList({
    key:key,
    delegate:delegate,
    itemExtent:itemExtent,
  });
};

//****** SliverOverlapAbsorber ******
class SliverOverlapAbsorber extends FlutterWidget {
  constructor({ key, handle, child } = {}) {
    super();

    this.key = key;
    this.handle = handle;
    this.child = child;
  }
}
SliverOverlapAbsorber.new = function({ key, handle, child } = {}) {
  return new SliverOverlapAbsorber({
    key:key,
    handle:handle,
    child:child,
  });
};

//****** SingleChildScrollView ******
class SingleChildScrollView extends FlutterWidget {
  constructor({ key, scrollDirection, reverse, padding, primary, physics, controller, child, dragStartBehavior } = {}) {
    super();

    this.key = key;
    this.scrollDirection = scrollDirection;
    this.reverse = reverse;
    this.padding = padding;
    this.primary = primary;
    this.physics = physics;
    this.controller = controller;
    this.child = child;
    this.dragStartBehavior = dragStartBehavior;
  }
}
SingleChildScrollView.new = function({ key, scrollDirection, reverse, padding, primary, physics, controller, child, dragStartBehavior } = {}) {
  return new SingleChildScrollView({
    key:key,
    scrollDirection:scrollDirection,
    reverse:reverse,
    padding:padding,
    primary:primary,
    physics:physics,
    controller:controller,
    child:child,
    dragStartBehavior:dragStartBehavior,
  });
};

//****** SliverToBoxAdapter ******
class SliverToBoxAdapter extends FlutterWidget {
  constructor ({ key, child } = {}) {
    super();

    this.key = key;
    this.child = child;
  }
}
SliverToBoxAdapter.new = function({ key, child } = {}) {
  return new SliverToBoxAdapter({
    key:key,
    child:child,
  });
};

//****** ScrollPhysics ******
class ScrollPhysics extends DartClass {
  constructor({ parent } = {}) {
    super();
    this.parent = parent;
  }
}
ScrollPhysics.new = function ({ parent } = {}) {
  return new ScrollPhysics({
    parent:parent,
  });
};

//****** ScrollController ******
class ScrollController extends DartClass {
  constructor({ initialScrollOffset, keepScrollOffset, debugLabel } = {}) {
    super();

    this.createMirrorObjectID();

    this.initialScrollOffset = initialScrollOffset;
    this.keepScrollOffset = keepScrollOffset;
    this.debugLabel = debugLabel;
  }

  animateTo(offset,{duration,curve,} = {}) {
    let argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "ScrollController",
      funcName: "animateTo",
      args: {
        offset: offset,
        duration: duration,
        curve:curve
      }
    });
    invokeFlutterFunction(argument);
  }

  jumpTo(value) {
    let argument = new FlutterCallArgs({
      mirrorID: this.mirrorID,
      className: "ScrollController",
      funcName: "jumpTo",
      args: {
        value: value
      }
    });
    invokeFlutterFunction(argument);
  }
}
ScrollController.new = function ({ initialScrollOffset, keepScrollOffset, debugLabel } = {}) {
  return new ScrollController({
    initialScrollOffset:initialScrollOffset,
    keepScrollOffset:keepScrollOffset,
    debugLabel:debugLabel,
  });
};

//-------------- T -----------------
//****** Transform ******
class Transform extends FlutterWidget {
  constructor({ key, transform, origin, alignment, transformHitTests, child } = {}) {
    super();

    this.key = key;
    this.transform = transform;
    this.origin = origin;
    this.alignment = alignment;
    this.transformHitTests = transformHitTests;
    this.child = child;
  }
}
Transform.new = function({ key, transform, origin, alignment, transformHitTests, child } = {}) {
  return new Transform({
    key:key,
    transform:transform,
    origin:origin,
    alignment:alignment,
    transformHitTests:transformHitTests,
    child:child,
  });
};

//****** Table ******
class Table extends FlutterWidget {
  constructor({ key, children, columnWidths, defaultColumnWidth, textDirection, border, defaultVerticalAlignment, textBaseline } = {}) {
    super();

    this.key = key;
    this.children = children;

    // 单独处理columnWidths
    if (columnWidths  && columnWidths._map) {
      var columnWidthsMap = columnWidths._map;
      var newMap = {};
      columnWidthsMap.forEach(function(value, key) {
        newMap[key] = value;
      });
      this.columnWidths = newMap;
    }

    this.defaultColumnWidth = defaultColumnWidth;
    this.textDirection = textDirection;
    this.border = border;
    this.defaultVerticalAlignment = defaultVerticalAlignment;
    this.textBaseline = textBaseline;
  }
}
Table.new = function({ key, children, columnWidths, defaultColumnWidth, textDirection, border, defaultVerticalAlignment, textBaseline } = {}) {
  return new Table({
    key:key,
    children:children,
    columnWidths:columnWidths,
    defaultColumnWidth:defaultColumnWidth,
    textDirection:textDirection,
    border:border,
    defaultVerticalAlignment:defaultVerticalAlignment,
    textBaseline:textBaseline,
  });
};

//****** TableCell ******
class TableCell extends FlutterWidget {
  constructor ({ key, verticalAlignment, child, } = {}) {
    super();

    this.key = key;
    this.verticalAlignment = verticalAlignment;
    this.child = child;
  }
}
TableCell.new = function({ key, verticalAlignment, child, } = {}) {
  return new TableCell({
    key:key,
    verticalAlignment:verticalAlignment,
    child:child,
  });
};

//-------------- W -----------------
//****** Wrap ******
class Wrap extends FlutterWidget {
  constructor({ key, direction, alignment, spacing, runAlignment, runSpacing, crossAxisAlignment, textDirection, verticalDirection, children } = {}) {
    super();

    this.key = key;
    this.direction = direction;
    this.alignment = alignment;
    this.spacing = spacing;
    this.runAlignment = runAlignment;
    this.runSpacing = runSpacing;
    this.crossAxisAlignment = crossAxisAlignment;
    this.textDirection = textDirection;
    this.verticalDirection = verticalDirection;
    this.children = children;
  }
}
Wrap.new = function({ key, direction, alignment, spacing, runAlignment, runSpacing, crossAxisAlignment, textDirection, verticalDirection, children } = {}) {
  return new Wrap({
    key:key,
    direction:direction,
    alignment:alignment,
    spacing:spacing,
    runAlignment:runAlignment,
    runSpacing:runSpacing,
    crossAxisAlignment:crossAxisAlignment,
    textDirection:textDirection,
    verticalDirection:verticalDirection,
    children:children,
  });
};

module.exports = {
  Align,
  AspectRatio,
  AlwaysScrollableScrollPhysics,

  Baseline,

  Container,
  Center,
  ConstrainedBox,
  CustomSingleChildLayout,
  Column,
  CustomMultiChildLayout,
  CustomScrollView,
  ClampingScrollPhysics,

  DecoratedBox,

  Expanded,

  FittedBox,
  FractionallySizedBox,
  Flow,

  GestureDetector,

  IntrinsicHeight,
  IntrinsicWidth,
  IndexedStack,

  LimitedBox,
  ListBody,
  ListTile,
  ListView,
  LayoutBuilder,

  NestedScrollView,
  NeverScrollableScrollPhysics,

  Offstage,
  OverflowBox,

  Padding,

  Row,

  SizedBox,
  SizedOverflowBox,
  Stack,
  SliverAppBar,
  SliverPadding,
  SliverGrid,
  SliverGridDelegateWithMaxCrossAxisExtent,
  SliverChildListDelegate,
  SliverChildBuilderDelegate,
  SliverList,
  SliverOverlapInjector,
  SliverFixedExtentList,
  SliverOverlapAbsorber,
  SingleChildScrollView,
  SliverToBoxAdapter,
  ScrollPhysics,
  ScrollController,

  Transform,
  Table,
  TableCell,
  Wrap,
};
