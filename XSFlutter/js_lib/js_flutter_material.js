/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */

let { DartClass, FlutterWidget, } = require("./js_flutter_basic_types.js");

//-------------- A -----------------
//****** AppBar ******
class AppBar extends FlutterWidget {
  constructor({ key, leading, automaticallyImplyLeading, title, actions, flexibleSpace, bottom, elevation,
                backgroundColor, brightness, primary, centerTitle, titleSpacing, toolbarOpacity, bottomOpacity} = {}) {
    super();

    this.key = key;
    this.leading = leading;
    this.automaticallyImplyLeading = automaticallyImplyLeading;
    this.title = title;
    this.actions = actions;
    this.flexibleSpace = flexibleSpace;
    this.bottom = bottom;
    this.elevation = elevation;
    this.backgroundColor = backgroundColor;
    this.brightness = brightness;
    this.primary = primary;
    this.centerTitle = centerTitle;
    this.titleSpacing = titleSpacing;
    this.toolbarOpacity = toolbarOpacity;
    this.bottomOpacity = bottomOpacity;
  }
}
AppBar.new = function ({ key, leading, automaticallyImplyLeading, title, actions, flexibleSpace, bottom, elevation,
                         backgroundColor, brightness, primary, centerTitle, titleSpacing, toolbarOpacity, bottomOpacity} = {}) {
  return new AppBar({
    key:key,
    leading:leading,
    automaticallyImplyLeading:automaticallyImplyLeading,
    title:title,
    actions:actions,
    flexibleSpace:flexibleSpace,
    bottom:bottom,
    elevation:elevation,
    backgroundColor:backgroundColor,
    brightness:brightness,
    primary:primary,
    centerTitle:centerTitle,
    titleSpacing:titleSpacing,
    toolbarOpacity:toolbarOpacity,
    bottomOpacity:bottomOpacity,
  });
};

//-------------- B -----------------
//****** ButtonBar ******
class ButtonBar extends FlutterWidget {
  constructor({ key, alignment, mainAxisSize, children } = {}) {
    super();
    this.key = key;
    this.alignment = alignment;
    this.mainAxisSize = mainAxisSize;
    this.children = children;
  }
}
ButtonBar.new = function ({ key, alignment, mainAxisSize, children } = {}) {
  return new ButtonBar({
    key:key,
    alignment:alignment,
    mainAxisSize:mainAxisSize,
    children:children,
  });
};

//****** ButtonBar ******
class BottomAppBar extends FlutterWidget {
  constructor({ key, color, elevation, shape, clipBehavior, notchMargin, child} = {}) {
    super();

    this.key = key;
    this.color = color;
    this.elevation = elevation;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.notchMargin = notchMargin;
    this.child = child;
  }
}
BottomAppBar.new = function ({ key, color, elevation, shape, clipBehavior, notchMargin, child} = {}) {
  return new BottomAppBar({
    key:key,
    color:color,
    elevation:elevation,
    shape:shape,
    clipBehavior:clipBehavior,
    notchMargin:notchMargin,
    child:child,
  });
};

//****** BottomNavigationBar ******
class BottomNavigationBar extends FlutterWidget {
  constructor({key, items, onTap, currentIndex, type, fixedColor, iconSize} = {}) {
    super();

    this.key = key;
    this.items = items;
    this.onTap = onTap;
    this.currentIndex = currentIndex;
    this.type = type;
    this.fixedColor = fixedColor;
    this.iconSize = iconSize;
  }
}
BottomNavigationBar.new = function ({key, items, onTap, currentIndex, type, fixedColor, iconSize} = {}) {
  return new BottomNavigationBar({
    key:key,
    items:items,
    onTap:onTap,
    currentIndex:currentIndex,
    type:type,
    fixedColor:fixedColor,
    iconSize:iconSize,
  });
};

//****** Builder ******
class Builder extends FlutterWidget {
  constructor({ key, builder } = {}) {
    super();

    this.key = key;
    this.builder = builder;

    // 本地创建的，供flutter使用
    this.child = null;
  }

  preBuild(jsWidgetHelper, buildContext) {
    if (this.builder) {
      this.child = this.builder(buildContext);
      delete this.builder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
Builder.new = function ({ key, builder } = {}) {
  return new Builder({
    key:key,
    builder:builder,
  });
};

//-------------- C -----------------
//****** Card ******
class Card extends FlutterWidget {
  constructor({ key,color,elevation,shape,margin,clipBehavior,child,semanticContainer} = {}) {
    super();

    this.key = key;
    this.color = color;
    this.elevation = elevation;
    this.shape = shape;
    this.margin = margin;
    this.clipBehavior = clipBehavior;
    this.child = child;
    this.semanticContainer = semanticContainer;
  }
}
Card.new = function ({ key,color,elevation,shape,margin,clipBehavior,child,semanticContainer} = {}) {
  return new Card({
    key:key,
    color:color,
    elevation:elevation,
    shape:shape,
    margin:margin,
    clipBehavior:clipBehavior,
    child:child,
    semanticContainer:semanticContainer,
  });
};

//****** CircleBorder ******
class CircleBorder extends FlutterWidget {
  constructor({ side } = {}) {
    super();

    this.side = side;
  }
}
CircleBorder.new = function ({ side } = {}) {
  return new CircleBorder({
    side:side,
  });
};

//-------------- D -----------------
//****** DropdownButton ******
class DropdownButton extends FlutterWidget {
  constructor({ key, items, value, hint, disabledHint, onChanged, elevation, style, iconSize, isDense, isExpanded } = {}) {
    super();

    this.key = key;
    this.items = items;
    this.value = value;
    this.hint = hint;
    this.disabledHint = disabledHint;
    this.onChanged = onChanged;
    this.elevation = elevation;
    this.style = style;
    this.iconSize = iconSize;
    this.isDense = isDense;
    this.isExpanded = isExpanded;
  }
}
DropdownButton.new = function ({ key, items, value, hint, disabledHint, onChanged, elevation, style, iconSize, isDense, isExpanded } = {}) {
  return new DropdownButton({
    key:key,
    items:items,
    value:value,
    hint:hint,
    disabledHint:disabledHint,
    onChanged:onChanged,
    elevation:elevation,
    style:style,
    iconSize:iconSize,
    isDense:isDense,
    isExpanded:isExpanded,
  });
};

//****** DefaultTabController ******
class DefaultTabController extends FlutterWidget {
  constructor({ key, length, initialIndex, child } = {}) {
    super();

    this.key = key;
    this.length = length;
    this.initialIndex = initialIndex;
    this.child = child;
  }
}
DefaultTabController.new = function ({ key, length, initialIndex, child } = {}) {
  return new DefaultTabController({
    key:key,
    length:length,
    initialIndex:initialIndex,
    child:child,
  });
};

//-------------- F -----------------
//****** FlatButton ******
class FlatButton extends FlutterWidget {
  constructor({ key, onPressed, onHighlightChanged, textTheme,textColor, disabledTextColor, color, disabledColor, highlightColor, splashColor,
                colorBrightness, padding, shape, clipBehavior, materialTapTargetSize, child } = {}) {
    super();

    this.key = key;
    this.onPressed = onPressed;
    this.onHighlightChanged = onHighlightChanged;
    this.textTheme = textTheme;
    this.textColor = textColor;
    this.disabledTextColor = disabledTextColor;
    this.color = color;
    this.disabledColor = disabledColor;
    this.highlightColor = highlightColor;
    this.splashColor = splashColor;
    this.colorBrightness = colorBrightness;
    this.padding = padding;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.materialTapTargetSize = materialTapTargetSize;
    this.child = child;
  }
}

FlatButton.new = function ({ key, onPressed, onHighlightChanged, textTheme,textColor, disabledTextColor, color, disabledColor, highlightColor, splashColor,
                             colorBrightness, padding, shape, clipBehavior, materialTapTargetSize, child } = {}) {
  return new FlatButton({
    key:key,
    onPressed:onPressed,
    onHighlightChanged:onHighlightChanged,
    textTheme:textTheme,
    textColor:textColor,
    disabledColor:disabledColor,
    disabledTextColor:disabledTextColor,
    color:color,
    highlightColor:highlightColor,
    splashColor:splashColor,
    colorBrightness:colorBrightness,
    padding:padding,
    shape:shape,
    clipBehavior:clipBehavior,
    materialTapTargetSize:materialTapTargetSize,
    child:child,
  });
};

FlatButton.icon = function ({ key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,
                              colorBrightness, padding,shape,clipBehavior,materialTapTargetSize,icon, label}) {
  let v = new FlatButton();
  v.staticFunctionName = "icon";

  v.key = key;
  v.onPressed = onPressed;
  v.onHighlightChanged = onHighlightChanged;
  v.textTheme = textTheme;
  v.textColor = textColor;
  v.disabledTextColor = disabledTextColor;
  v.color = color;
  v.disabledColor = disabledColor;
  v.highlightColor = highlightColor;
  v.splashColor = splashColor;
  v.colorBrightness = colorBrightness;
  v.padding = padding;
  v.shape = shape;
  v.clipBehavior = clipBehavior;
  v.materialTapTargetSize = materialTapTargetSize;
  v.icon = icon;
  v.label = label;

  return v;
};

//****** FlatButton ******
class FloatingActionButton extends FlutterWidget {
  constructor({ key,child,tooltip, foregroundColor,backgroundColor,elevation,highlightElevation,
                onPressed,mini,shape,clipBehavior,materialTapTargetSize,isExtended } = {}) {
    super();

    this.key = key;
    this.child = child;
    this.tooltip = tooltip;
    this.foregroundColor = foregroundColor;
    this.backgroundColor = backgroundColor;
    this.elevation = elevation;
    this.highlightElevation = highlightElevation;
    this.onPressed = onPressed;
    this.mini = mini;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.materialTapTargetSize = materialTapTargetSize;
    this.isExtended = isExtended;
  }
}
FloatingActionButton.new = function ({ key,child,tooltip, foregroundColor,backgroundColor,elevation,highlightElevation,
                                       onPressed,mini,shape,clipBehavior,materialTapTargetSize,isExtended } = {}) {
  return new FloatingActionButton({
    key:key,
    child:child,
    tooltip:tooltip,
    foregroundColor:foregroundColor,
    backgroundColor:backgroundColor,
    highlightElevation:highlightElevation,
    elevation:elevation,
    onPressed:onPressed,
    mini:mini,
    shape:shape,
    clipBehavior:clipBehavior,
    materialTapTargetSize:materialTapTargetSize,
    isExtended:isExtended,
  });
};

//****** FlexibleSpaceBar ******
class FlexibleSpaceBar extends FlutterWidget {
  constructor({ key, title, background, centerTitle, collapseMode } = {}) {
    super();

    this.key = key;
    this.title = title;
    this.background = background;
    this.centerTitle = centerTitle;
    this.collapseMode = collapseMode;
  }
}
FlexibleSpaceBar.new = function ({ key, title, background, centerTitle, collapseMode } = {}) {
  return new FlexibleSpaceBar({
    key:key,
    title:title,
    background:background,
    centerTitle:centerTitle,
    collapseMode:collapseMode,
  });
};

//****** FlutterLogo ******
class FlutterLogo extends FlutterWidget {
  constructor({ key,size,colors,textColor,style,duration,curve,} = {}) {
    super();
    this.key = key;
    this.size = size;
    this.colors = colors;
    this.textColor = textColor;
    this.duration = duration;
    this.style = style;
    this.curve = curve;
  }
}
FlutterLogo.new = function ({ key,size,colors,textColor,style,duration,curve,} = {}) {
  return new FlutterLogo({
    key:key,
    size:size,
    colors:colors,
    textColor:textColor,
    style:style,
    duration:duration,
    curve:curve,
  });
};


//-------------- I -----------------
//****** IconButton ******
class IconButton extends FlutterWidget {
  constructor({ key, iconSize, padding, alignment, icon, color, highlightColor, splashColor, disabledColor, onPressed, tooltip} = {}) {
    super();

    this.key = key;
    this.iconSize = iconSize;
    this.padding = padding;
    this.alignment = alignment;
    this.icon = icon;
    this.color = color;
    this.highlightColor = highlightColor;
    this.splashColor = splashColor;
    this.disabledColor = disabledColor;
    this.onPressed = onPressed;
    this.tooltip = tooltip;
  }
}
IconButton.new = function ({ key, iconSize, padding, alignment, icon, color, highlightColor, splashColor, disabledColor, onPressed, tooltip} = {}) {
  return new IconButton({
    key:key,
    iconSize:iconSize,
    padding:padding,
    icon:icon,
    alignment:alignment,
    color:color,
    highlightColor:highlightColor,
    splashColor:splashColor,
    disabledColor:disabledColor,
    onPressed:onPressed,
    tooltip:tooltip,
  });
};

//****** Icon ******
class Icon extends FlutterWidget {
  constructor(icon, { key, size, color, semanticLabel, textDirection } = {}) {
    super();

    this.icon = icon;
    this.key = key;
    this.size = size;
    this.color = color;
    this.semanticLabel = semanticLabel;
    this.textDirection = textDirection;
  }
}
Icon.new = function (icon, { key, size, color, semanticLabel, textDirection } = {}) {
  return new Icon(icon,{
    key:key,
    color:color,
    size:size,
    semanticLabel:semanticLabel,
    textDirection:textDirection,
  });
};

//-------------- M -----------------
//****** Material ******
class Material extends FlutterWidget {
  constructor({ key, type, elevation, color, shadowColor, textStyle, borderRadius, shape, borderOnForeground, clipBehavior, animationDuration, child, } = {}) {
    super();

    this.key = key;
    this.type = type;
    this.elevation = elevation;
    this.color = color;
    this.shadowColor = shadowColor;
    this.textStyle = textStyle;
    this.borderRadius = borderRadius;
    this.shape = shape;
    this.borderOnForeground = borderOnForeground;
    this.clipBehavior = clipBehavior;
    this.animationDuration = animationDuration;
    this.child = child;
  }
}
Material.new = function ({ key, type, elevation, color, shadowColor, textStyle, borderRadius, shape, borderOnForeground, clipBehavior, animationDuration, child, } = {}) {
  return new Material({
    key:key,
    type:type,
    elevation:elevation,
    color:color,
    shadowColor:shadowColor,
    textStyle:textStyle,
    borderRadius:borderRadius,
    shape:shape,
    borderOnForeground:borderOnForeground,
    clipBehavior:clipBehavior,
    animationDuration:animationDuration,
    child:child,
  });
};

//****** MergeSemantics ******
class MergeSemantics extends FlutterWidget {
  constructor({ key, child } = {}) {
    super();

    this.key = key;
    this.child = child;
  }
}
MergeSemantics.new = function ({ key, child } = {}) {
  return new MergeSemantics({
    key:key,
    child:child,
  });
};

//****** MaterialPageRoute ******
class MaterialPageRoute extends FlutterWidget {
  constructor({ builder, settings, maintainState, fullscreenDialog, } = {}) {
    super();

    this.builder = builder;
    this.settings = settings;
    this.maintainState = maintainState;
    this.fullscreenDialog = fullscreenDialog;

    this.child = null;
  }

  preBuild(jsWidgetHelper, buildContext) {
    if (this.builder) {
      this.child = this.builder(buildContext);
      delete this.builder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
MaterialPageRoute.new = function ({ builder, settings, maintainState, fullscreenDialog, } = {}) {
  return new MaterialPageRoute({
    builder:builder,
    settings:settings,
    maintainState:maintainState,
    fullscreenDialog:fullscreenDialog,
  });
};

//-------------- N -----------------
//****** NavigatorState ******
class NavigatorState extends FlutterWidget {
  constructor(context) {
    super();

    this.context = context;
  }

  push(T, materialPageRoute) {
    this.context.widget.helper.navigatorPush(materialPageRoute.builder(this.context));
  }
  pop(T) {
    this.context.widget.helper.navigatorPop();
  }
}

//****** Navigator ******
class Navigator extends FlutterWidget {
  constructor({
                key,
                initialRoute,
                onGenerateRoute,
                onUnknownRoute,
                observers,
              } = {}) {
    super();

    this.key = key;
    this.initialRoute = initialRoute;
    this.onGenerateRoute = onGenerateRoute;
    this.onUnknownRoute = onUnknownRoute;
    this.observers = observers;
  }

  static push(context, materialPageRoute) {

    let T = null;
    if (arguments.length == 3) {
      T = arguments[0];
      context = arguments[1];
      materialPageRoute = arguments[2];
    }

    var navigatorState = new NavigatorState(context);
    navigatorState.push(T, materialPageRoute);
  }
  static pop(context) {
    let T = null;
    if (arguments.length == 2) {
      T = arguments[0];
      context = arguments[1];
    }
    var navigatorState = new NavigatorState(context);
    navigatorState.pop(T);
  }

  static of(context, opt) {
    var navigatorState = new NavigatorState(context);
    return navigatorState;
  }
}
Navigator.new = function ({ key,initialRoute,onGenerateRoute, onUnknownRoute, observers, } = {}) {
  return new Navigator({
    key:key,
    initialRoute:initialRoute,
    onGenerateRoute:onGenerateRoute,
    onUnknownRoute:onUnknownRoute,
    observers:observers,
  });
};

//-------------- P -----------------
//****** PopupMenuButton ******
class PopupMenuButton extends FlutterWidget {
  constructor({ key,itemBuilder,initialValue,onSelected, onCanceled, tooltip, elevation, padding, child, icon, offset } = {}) {
    super();

    this.key = key;
    this.itemBuilder = itemBuilder;
    this.initialValue = initialValue;
    this.onSelected = onSelected;
    this.onCanceled = onCanceled;
    this.tooltip = tooltip;
    this.elevation = elevation;
    this.padding = padding;
    this.child = child;
    this.icon = icon;
    this.offset = offset;

    // 本地创建的，供flutter使用
    this.children = [];
  }

  //在生成json前调用
  //用于list delegate 等的items build
  //用于 widget 有类似 onTab 等响应函数变量，在此转换成 callback id,
  //但注意，delegate 中确实需要 function ,不需要转ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper, buildContext) {
    //先把调用函数
    if (this.itemBuilder) {
      this.children = this.itemBuilder(buildContext);
      delete this.itemBuilder;
    }

    //function 转 id
    super.preBuild(jsWidgetHelper, buildContext);
  }
}
PopupMenuButton.new = function ({ key,itemBuilder,initialValue,onSelected, onCanceled, tooltip, elevation, padding, child, icon, offset } = {}) {
  return new PopupMenuButton({
    key:key,
    itemBuilder:itemBuilder,
    initialValue:initialValue,
    onCanceled:onCanceled,
    onSelected:onSelected,
    tooltip:tooltip,
    elevation:elevation,
    padding:padding,
    child:child,
    icon:icon,
    offset:offset,
  });
};

//****** PopupMenuButton ******
class PopupMenuItem extends FlutterWidget {
  constructor({ key, value, enabled, height, child } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.enabled = enabled;
    this.height = height;
    this.child = child;
  }
}
PopupMenuItem.new = function ({ key, value, enabled, height, child } = {}) {
  return new PopupMenuItem({
    key:key,
    value:value,
    enabled:enabled,
    height:height,
    child:child,
  });
};

//-------------- R -----------------
//****** RaisedButton ******
class RaisedButton extends FlutterWidget {
  constructor({ key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,
                colorBrightness,elevation,highlightElevation,disabledElevation,padding,
                shape,clipBehavior,materialTapTargetSize,animationDuration,child } = {}) {
    super();

    this.key = key;
    this.onPressed = onPressed;
    this.onHighlightChanged = onHighlightChanged;
    this.textTheme = textTheme;
    this.textColor = textColor;
    this.disabledTextColor = disabledTextColor;
    this.color = color;
    this.disabledColor = disabledColor;
    this.highlightColor = highlightColor;
    this.splashColor = splashColor;
    this.colorBrightness = colorBrightness;
    this.elevation = elevation;
    this.highlightElevation = highlightElevation;
    this.disabledElevation = disabledElevation;
    this.padding = padding;
    this.shape = shape;
    this.clipBehavior = clipBehavior;
    this.materialTapTargetSize = materialTapTargetSize;
    this.animationDuration = animationDuration;
    this.child = child;
  }
}
RaisedButton.new = function ({ key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,
                               colorBrightness,elevation,highlightElevation,disabledElevation,padding,
                               shape,clipBehavior,materialTapTargetSize,animationDuration,child } = {}) {
  return new RaisedButton({
    key:key,
    onPressed:onPressed,
    onHighlightChanged:onHighlightChanged,
    textTheme:textTheme,
    textColor:textColor,
    disabledTextColor:disabledTextColor,
    color:color,
    disabledColor:disabledColor,
    highlightColor:highlightColor,
    splashColor:splashColor,
    colorBrightness:colorBrightness,
    elevation:elevation,
    highlightElevation:highlightElevation,
    disabledElevation:disabledElevation,
    padding:padding,
    shape:shape,
    clipBehavior:clipBehavior,
    materialTapTargetSize:materialTapTargetSize,
    animationDuration:animationDuration,
    child:child,
  });
};
RaisedButton.icon = function ({ key,onPressed,onHighlightChanged,textTheme,textColor,disabledTextColor,color,disabledColor,highlightColor,splashColor,
                                colorBrightness,elevation,highlightElevation,disabledElevation,shape,
                                clipBehavior,materialTapTargetSize,animationDuration,icon,label }) {
  let v = new RaisedButton();
  v.staticFunctionName = "icon";

  v.key = key;
  v.onPressed = onPressed;
  v.onHighlightChanged = onHighlightChanged;
  v.textTheme = textTheme;
  v.textColor = textColor;
  v.disabledTextColor = disabledTextColor;
  v.color = color;
  v.disabledColor = disabledColor;
  v.highlightColor = highlightColor;
  v.splashColor = splashColor;
  v.colorBrightness = colorBrightness;
  v.elevation = elevation;
  v.highlightElevation = highlightElevation;
  v.disabledElevation = disabledElevation;
  v.shape = shape;
  v.clipBehavior = clipBehavior;
  v.materialTapTargetSize = materialTapTargetSize;
  v.animationDuration = animationDuration;
  v.icon = icon;
  v.label = label;

  return v;
};

//****** RaisedButton ******
class Radio extends FlutterWidget {
  constructor({ key, value, groupValue, onChanged, activeColor, materialTapTargetSize } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.groupValue = groupValue;
    this.onChanged = onChanged;
    this.activeColor = activeColor;
    this.materialTapTargetSize = materialTapTargetSize;
  }
}
Radio.new = function ({ key, value, groupValue, onChanged, activeColor, materialTapTargetSize } = {}) {
  return new Radio({
    key:key,
    value:value,
    groupValue:groupValue,
    onChanged:onChanged,
    activeColor:activeColor,
    materialTapTargetSize:materialTapTargetSize,
  });
};

//****** RaisedButton ******
class RawMaterialButton extends FlutterWidget {
  constructor({ key, onPressed, onHighlightChanged, textStyle,fillColor, highlightColor, splashColor, elevation, highlightElevation,
                disabledElevation, padding, constraints, shape, animationDuration, clipBehavior, materialTapTargetSize, child} = {}) {
    super();

    this.key = key;
    this.onPressed = onPressed;
    this.onHighlightChanged = onHighlightChanged;
    this.textStyle = textStyle;
    this.fillColor = fillColor;
    this.highlightColor = highlightColor;
    this.splashColor = splashColor;
    this.elevation = elevation;
    this.highlightElevation = highlightElevation;
    this.disabledElevation = disabledElevation;
    this.padding = padding;
    this.constraints = constraints;
    this.shape = shape;
    this.animationDuration = animationDuration;
    this.clipBehavior = clipBehavior;
    this.materialTapTargetSize = materialTapTargetSize;
    this.child = child;
  }
}
RawMaterialButton.new = function ({ key, onPressed, onHighlightChanged, textStyle,fillColor, highlightColor, splashColor, elevation, highlightElevation,
                                    disabledElevation, padding, constraints, shape, animationDuration, clipBehavior, materialTapTargetSize, child} = {}) {
  return new RawMaterialButton({
    key:key,
    onPressed:onPressed,
    onHighlightChanged:onHighlightChanged,
    textStyle:textStyle,
    fillColor:fillColor,
    highlightColor:highlightColor,
    splashColor:splashColor,
    elevation:elevation,
    highlightElevation:highlightElevation,
    disabledElevation:disabledElevation,
    padding:padding,
    constraints:constraints,
    shape:shape,
    animationDuration:animationDuration,
    child:child,
    clipBehavior:clipBehavior,
    materialTapTargetSize:materialTapTargetSize,
  });
};

//****** RouteSettings ******
class RouteSettings extends FlutterWidget {
  constructor({ name, isInitialRoute, arg,} = {}) {
    super();

    this.name = name;
    this.isInitialRoute = isInitialRoute;
    this.arg = arg;
  }
}
RouteSettings.new = function ({ name, isInitialRoute, arg,} = {}) {
  return new RouteSettings({
    name:name,
    isInitialRoute:isInitialRoute,
    arg:arg,
  });
};

//-------------- S -----------------
//****** Scaffold ******
class Scaffold extends FlutterWidget {
  constructor({key,appBar,body,floatingActionButton,floatingActionButtonLocation,persistentFooterButtons,
                drawer,endDrawer,bottomNavigationBar, bottomSheet, backgroundColor, resizeToAvoidBottomPadding, primary} = {}) {
    super();

    this.key = key;
    this.appBar = appBar;
    this.body = body;
    this.floatingActionButton = floatingActionButton;
    this.floatingActionButtonLocation = floatingActionButtonLocation;
    this.persistentFooterButtons = persistentFooterButtons;
    this.drawer = drawer;
    this.endDrawer = endDrawer;
    this.bottomNavigationBar = bottomNavigationBar;
    this.bottomSheet = bottomSheet;
    this.backgroundColor = backgroundColor;
    this.resizeToAvoidBottomPadding = resizeToAvoidBottomPadding;
    this.primary = primary;
  }

  //FIXME,github mergegithub merge
  static of(context) {
    return {
      showSnackBar: function (snackBar) {
        //准备调用Native方法执行真正的 showSnackBar动作
        //1.把这里的context和snackBar数据传递到native层 ✔️
        //2.通过context找到Native里的 Scaffold.of(context) ？
        //3.解析snackBar为真snackBar对象 ✔️
        //4.执行调用
        JSLog.log("showSnackBar in js call native-->");
        let argument = new FlutterCallArgs({
          widgetID: context.widgetID,
          className: 'Scaffold',
          funcName: 'of',
          args: {
            snackBar: snackBar,
          },
        });
        invokeCommonFlutterFunction(argument);
      },
      openDrawer: function () {
        JSLog.log("openDrawer---in js---to call native-->");
      },
    };
  }
}

Scaffold.new = function ({key,appBar,body,floatingActionButton,floatingActionButtonLocation,persistentFooterButtons,
                           drawer,endDrawer,bottomNavigationBar, bottomSheet, backgroundColor, resizeToAvoidBottomPadding, primary} = {}) {
  return new Scaffold({
    key:key,
    appBar:appBar,
    body:body,
    floatingActionButton:floatingActionButton,
    floatingActionButtonLocation:floatingActionButtonLocation,
    persistentFooterButtons:persistentFooterButtons,
    drawer:drawer,
    endDrawer:endDrawer,
    bottomNavigationBar:bottomNavigationBar,
    bottomSheet:bottomSheet,
    backgroundColor:backgroundColor,
    resizeToAvoidBottomPadding:resizeToAvoidBottomPadding,
    primary:primary,
  });
};

//****** Scaffold ******
class ScaffoldState extends DartClass {
  constructor() {
    super();
  }
}
ScaffoldState.new = function () {
  return new ScaffoldState();
};

//****** Scaffold ******
class Semantics extends FlutterWidget {
  constructor({ key,child,container,explicitChildNodes, excludeSemantics, enabled, checked, selected, toggled,
                button,header,textField,focused,inMutuallyExclusiveGroup,obscured,scopesRoute,namesRoute,hidden,
                image,liveRegion,label,value,increasedValue,decreasedValue,hint,textDirection,
                onTapHint, onLongPressHint, onTap, onLongPress, onScrollLeft, onScrollRight, onScrollUp, onScrollDown, onIncrease, onDecrease,
                onCopy, onCut, onPaste, onDismiss, onMoveCursorForwardByCharacter, onMoveCursorBackwardByCharacter,onDidGainAccessibilityFocus, onDidLoseAccessibilityFocus,} = {}) {
    super();

    this.key = key;
    this.child = child;
    this.container = container;
    this.explicitChildNodes = explicitChildNodes;
    this.excludeSemantics = excludeSemantics;
    this.enabled = enabled;
    this.checked = checked;
    this.selected = selected;
    this.toggled = toggled;
    this.button = button;
    this.header = header;
    this.textField = textField;
    this.focused = focused;
    this.inMutuallyExclusiveGroup = inMutuallyExclusiveGroup;
    this.obscured = obscured;
    this.scopesRoute = scopesRoute;
    this.namesRoute = namesRoute;
    this.hidden = hidden;
    this.image = image;
    this.liveRegion = liveRegion;
    this.label = label;
    this.value = value;
    this.increasedValue = increasedValue;
    this.decreasedValue = decreasedValue;
    this.hint = hint;
    this.onTapHint = onTapHint;
    this.onLongPressHint = onLongPressHint;
    this.textDirection = textDirection;
    this.onTap = onTap;
    this.onLongPress = onLongPress;
    this.onScrollLeft = onScrollLeft;
    this.onScrollRight = onScrollRight;
    this.onScrollUp = onScrollUp;
    this.onScrollDown = onScrollDown;
    this.onIncrease = onIncrease;
    this.onDecrease = onDecrease;
    this.onCopy = onCopy;
    this.onCut = onCut;
    this.onPaste = onPaste;
    this.onDismiss = onDismiss;
    this.onMoveCursorForwardByCharacter = onMoveCursorForwardByCharacter;
    this.onMoveCursorBackwardByCharacter = onMoveCursorBackwardByCharacter;
    this.onDidGainAccessibilityFocus = onDidGainAccessibilityFocus;
    this.onDidLoseAccessibilityFocus = onDidLoseAccessibilityFocus;
  }
}
Semantics.new = function ({ key,child,container,explicitChildNodes, excludeSemantics, enabled, checked, selected, toggled,
                            button,header,textField,focused,inMutuallyExclusiveGroup,obscured,scopesRoute,namesRoute,hidden,
                            image,liveRegion,label,value,increasedValue,decreasedValue,hint,textDirection,
                            onTapHint, onLongPressHint, onTap, onLongPress, onScrollLeft, onScrollRight, onScrollUp, onScrollDown, onIncrease, onDecrease,
                            onCopy, onCut, onPaste, onDismiss, onMoveCursorForwardByCharacter, onMoveCursorBackwardByCharacter,onDidGainAccessibilityFocus, onDidLoseAccessibilityFocus,} = {}) {
  return new Semantics({
    key:key,
    child:child,
    container:container,
    excludeSemantics:excludeSemantics,
    explicitChildNodes:explicitChildNodes,
    enabled:enabled,
    checked:checked,
    selected:selected,
    toggled:toggled,
    button:button,
    header:header,
    textField:textField,
    focused:focused,
    increasedValue:increasedValue,
    inMutuallyExclusiveGroup:inMutuallyExclusiveGroup,
    obscured:obscured,
    scopesRoute:scopesRoute,
    namesRoute:namesRoute,
    hidden:hidden,
    image:image,
    liveRegion:liveRegion,
    label:label,
    value:value,
    decreasedValue:decreasedValue,
    hint:hint,
    textDirection:textDirection,
    onTap:onTap,
    onLongPress:onLongPress,
    onCopy:onCopy,
    onCut:onCut,
    onDecrease:onDecrease,
    onDidGainAccessibilityFocus:onDidGainAccessibilityFocus,
    onDidLoseAccessibilityFocus:onDidLoseAccessibilityFocus,
    onDismiss:onDismiss,
    onIncrease:onIncrease,
    onLongPressHint:onLongPressHint,
    onMoveCursorBackwardByCharacter:onMoveCursorBackwardByCharacter,
    onMoveCursorForwardByCharacter:onMoveCursorForwardByCharacter,
    onPaste:onPaste,
    onScrollDown:onScrollDown,
    onScrollLeft:onScrollLeft,
    onScrollRight:onScrollRight,
    onScrollUp:onScrollUp,
    onTapHint:onTapHint,
  });
};

//****** SafeArea ******
class SafeArea extends FlutterWidget {
  constructor({ key, left, top, right, bottom, minimum, child } = {}) {
    super();

    this.key = key;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.minimum = minimum;
    this.child = child;
  }
}
SafeArea.new = function ({ key, left, top, right, bottom, minimum, child } = {}) {
  return new SafeArea({
    key:key,
    left:left,
    top:top,
    right:right,
    bottom:bottom,
    minimum:minimum,
    child:child,
  });
};

//****** Scrollbar ******
class Scrollbar extends FlutterWidget {
  constructor({ key,child,} = {}) {
    super();
    this.key = key;
    this.child = child;
  }
}
Scrollbar.new = function ({ key,child,} = {}) {
  return new Scrollbar({
    key:key,
    child:child,
  });
};

//****** SnackBar ******
class SnackBar extends FlutterWidget {
  constructor({ key,content, backgroundColor, elevation, shape, behavior, action, duration, animation, onVisible,} = {}) {
    super();
    this.key = key;
    this.content = content;
    this.backgroundColor = backgroundColor;
    this.elevation = elevation;
    this.shape = shape;
    this.behavior = behavior;
    this.action = action;
    this.duration = duration;
    this.animation = animation;
    this.onVisible = onVisible;
  }
}
SnackBar.new = function ({ key,content, backgroundColor, elevation, shape, behavior, action, duration, animation, onVisible,} = {}) {
  return new SnackBar({
    key:key,
    content:content,
    backgroundColor:backgroundColor,
    elevation:elevation,
    shape:shape,
    behavior:behavior,
    action:action,
    duration:duration,
    animation:animation,
    onVisible:onVisible,
  });
};

//-------------- T -----------------
//****** TabBar ******
class TabBar extends FlutterWidget {
  constructor({ key, tabs, controller, isScrollable, indicatorColor, indicatorWeight, indicatorPadding, indicator, indicatorSize, labelColor,
    labelStyle, labelPadding, unselectedLabelColor, unselectedLabelStyle, dragStartBehavior, onTap} = {}) {
    super();

    this.key = key;
    this.tabs = tabs;
    this.controller = controller;
    this.isScrollable = isScrollable;
    this.indicatorColor = indicatorColor;
    this.indicatorWeight = indicatorWeight;
    this.indicatorPadding = indicatorPadding;
    this.indicator = indicator;
    this.indicatorSize = indicatorSize;
    this.labelColor = labelColor;
    this.labelStyle = labelStyle;
    this.labelPadding = labelPadding;
    this.unselectedLabelColor = unselectedLabelColor;
    this.unselectedLabelStyle = unselectedLabelStyle;
    this.dragStartBehavior = dragStartBehavior;
    this.onTap = onTap;
  }
}
TabBar.new = function ({ key, tabs, controller, isScrollable, indicatorColor, indicatorWeight, indicatorPadding, indicator, indicatorSize, labelColor,
                         labelStyle, labelPadding, unselectedLabelColor, unselectedLabelStyle, dragStartBehavior, onTap} = {}) {
  return new TabBar({
    key:key,
    tabs:tabs,
    controller:controller,
    isScrollable:isScrollable,
    indicator:indicator,
    indicatorColor:indicatorColor,
    indicatorPadding:indicatorPadding,
    indicatorSize:indicatorSize,
    indicatorWeight:indicatorWeight,
    labelPadding:labelPadding,
    labelStyle:labelStyle,
    labelColor:labelColor,
    unselectedLabelColor:unselectedLabelColor,
    unselectedLabelStyle:unselectedLabelStyle,
    dragStartBehavior:dragStartBehavior,
    onTap:onTap,
  });
};

//****** TabController ******
class TabController extends FlutterWidget {
  constructor({ initialIndex, length, vsync } = {}) {
    super();
    this.initialIndex = initialIndex;
    this.length = length;
    this.vsync = vsync;
  }
}
TabController.new = function ({ initialIndex, length, vsync } = {}) {
  return new TabController({
    initialIndex:initialIndex,
    length:length,
    vsync:vsync,
  });
};

//****** Tab ******
class Tab extends FlutterWidget {
  constructor({ key, text, icon, child } = {}) {
    super();

    this.key = key;
    this.text = text;
    this.icon = icon;
    this.child = child;
  }
}
Tab.new = function ({ key, text, icon, child } = {}) {
  return new Tab({
    key:key,
    text:text,
    icon:icon,
    child:child,
  });
};

//****** TabBarView ******
class TabBarView extends FlutterWidget {
  constructor({ key, children, controller, physics, dragStartBehavior } = {}) {
    super();

    this.key = key;
    this.children = children;
    this.controller = controller;
    this.physics = physics;
    this.dragStartBehavior = dragStartBehavior;
  }
}
TabBarView.new = function ({ key, children, controller, physics, dragStartBehavior } = {}) {
  return new TabBarView({
    key:key,
    children:children,
    controller:controller,
    physics:physics,
    dragStartBehavior:dragStartBehavior,
  });
};



module.exports = {
  AppBar,

  ButtonBar, Builder, BottomAppBar, BottomNavigationBar,

  Card, CircleBorder,

  DefaultTabController, DropdownButton,

  FlatButton, FloatingActionButton, FlexibleSpaceBar, FlutterLogo,

  Material, MergeSemantics, MaterialPageRoute,

  Navigator,

  IconButton, Icon,

  PopupMenuButton, PopupMenuItem,

  RaisedButton, Radio, RawMaterialButton, RouteSettings,

  Scaffold, ScaffoldState, Semantics, SafeArea, Scrollbar, SnackBar,

  TabBar, TabController, Tab, TabBarView,
};
