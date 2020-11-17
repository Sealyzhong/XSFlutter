//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let { FlutterWidget } = require("./js_flutter_basic_types.js");


//-------------- A -----------------
//****** CupertinoActivityIndicator ******
class CupertinoActivityIndicator extends FlutterWidget {
  constructor({ key, animating, radius } = {}) {
    super();

    this.key = key;
    this.animating = animating;
    this.radius = radius;
  }
}
CupertinoActivityIndicator.new = function({ key, animating, radius } = {}) {
  return new CupertinoActivityIndicator({
    key:key,
    animating:animating,
    radius:radius,
  });
};

//****** CupertinoAlertDialog ******
class CupertinoAlertDialog extends FlutterWidget {
  constructor({ key, title, content, actions, scrollController, actionScrollController } = {}) {
    super();

    this.key = key;
    this.title = title;
    this.content = content;
    this.actions = actions;
    this.scrollController = scrollController;
    this.actionScrollController = actionScrollController;
  }
}
CupertinoAlertDialog.new = function({ key, title, content, actions, scrollController, actionScrollController } = {}) {
  return new CupertinoAlertDialog({
    key:key,
    title:title,
    content:content,
    actions:actions,
    scrollController:scrollController,
    actionScrollController:actionScrollController,
  });
};

//-------------- B -----------------
//****** CupertinoButton ******
class CupertinoButton extends FlutterWidget {
  constructor({ child, padding, color, disabledColor, minSize, pressedOpacity, borderRadius, onPressed } = {}) {
    super();

    this.child = child;
    this.padding = padding;
    this.color = color;
    this.disabledColor = disabledColor;
    this.minSize = minSize;
    this.pressedOpacity = pressedOpacity;
    this.borderRadius = borderRadius;
    this.onPressed = onPressed;
  }
}
CupertinoButton.new = function({ child, padding, color, disabledColor, minSize, pressedOpacity, borderRadius, onPressed } = {}) {
  return new CupertinoButton({
    child:child,
    padding:padding,
    color:color,
    disabledColor:disabledColor,
    minSize:minSize,
    pressedOpacity:pressedOpacity,
    borderRadius:borderRadius,
    onPressed:onPressed,
  });
};

//-------------- D -----------------
//****** CupertinoDialog ******
class CupertinoDialog extends FlutterWidget {
  constructor({ key, child } = {}) {
    super();

    this.key = key;
    this.child = child;
  }
}
CupertinoDialog.new = function({ key, child } = {}) {
  return new CupertinoDialog({
    key:key,
    child:child,
  });
};

//****** CupertinoDialogAction ******
class CupertinoDialogAction extends FlutterWidget {
  constructor({ onPressed, isDefaultAction, isDestructiveAction, textStyle, child} = {}) {
    super();

    this.onPressed = onPressed;
    this.isDefaultAction = isDefaultAction;
    this.isDestructiveAction = isDestructiveAction;
    this.textStyle = textStyle;
    this.child = child;
  }
}
CupertinoDialogAction.new = function({ onPressed, isDefaultAction, isDestructiveAction, textStyle, child} = {}) {
  return new CupertinoDialogAction({
    onPressed:onPressed,
    isDefaultAction:isDefaultAction,
    isDestructiveAction:isDestructiveAction,
    textStyle:textStyle,
    child:child,
  });
};

//-------------- F -----------------
//****** CupertinoFullscreenDialogTransition ******
class CupertinoFullscreenDialogTransition extends FlutterWidget {
  constructor ({ key, primaryRouteAnimation, secondaryRouteAnimation, child, linearTransition } = {}) {
    super();

    this.key = key;
    this.primaryRouteAnimation = primaryRouteAnimation;
    this.secondaryRouteAnimation = secondaryRouteAnimation;
    this.child = child;
    this.linearTransition = linearTransition;
  }
}
CupertinoFullscreenDialogTransition.new = function({ key, primaryRouteAnimation, secondaryRouteAnimation, child, linearTransition } = {}) {
  return new CupertinoFullscreenDialogTransition({
    key:key,
    primaryRouteAnimation:primaryRouteAnimation,
    secondaryRouteAnimation:secondaryRouteAnimation,
    child:child,
    linearTransition:linearTransition,
  });
};

//-------------- N -----------------
//****** CupertinoNavigationBar ******
class CupertinoNavigationBar extends FlutterWidget {
  constructor({ key, leading, automaticallyImplyLeading, automaticallyImplyMiddle, previousPageTitle,
                middle, trailing, border, backgroundColor, padding, actionsForegroundColor, transitionBetweenRoutes, heroTag} = {}) {
    super();

    this.key = key;
    this.leading = leading;
    this.automaticallyImplyLeading = automaticallyImplyLeading;
    this.automaticallyImplyMiddle = automaticallyImplyMiddle;
    this.previousPageTitle = previousPageTitle;
    this.middle = middle;
    this.trailing = trailing;
    this.border = border;
    this.backgroundColor = backgroundColor;
    this.padding = padding;
    this.actionsForegroundColor = actionsForegroundColor;
    this.transitionBetweenRoutes = transitionBetweenRoutes;
    this.heroTag = heroTag;
  }
}
CupertinoNavigationBar.new = function({ key, leading, automaticallyImplyLeading, automaticallyImplyMiddle, previousPageTitle,
                                        middle, trailing, border, backgroundColor, padding, actionsForegroundColor, transitionBetweenRoutes, heroTag} = {}) {
  return new CupertinoNavigationBar({
    key:key,
    leading:leading,
    automaticallyImplyLeading:automaticallyImplyLeading,
    automaticallyImplyMiddle:automaticallyImplyMiddle,
    previousPageTitle:previousPageTitle,
    middle:middle,
    trailing:trailing,
    border:border,
    backgroundColor:backgroundColor,
    padding:padding,
    actionsForegroundColor:actionsForegroundColor,
    transitionBetweenRoutes:transitionBetweenRoutes,
    heroTag:heroTag,
  });
};

//-------------- P -----------------
//****** CupertinoPageTransition ******
class CupertinoPageTransition extends FlutterWidget {
  constructor({ key, primaryRouteAnimation, secondaryRouteAnimation, child, linearTransition } = {}) {
    super();

    this.key = key;
    this.primaryRouteAnimation = primaryRouteAnimation;
    this.secondaryRouteAnimation = secondaryRouteAnimation;
    this.child = child;
    this.linearTransition = linearTransition;
  }
}
CupertinoPageTransition.new = function({ key, primaryRouteAnimation, secondaryRouteAnimation, child, linearTransition } = {}) {
  return new CupertinoPageTransition({
    key:key,
    primaryRouteAnimation:primaryRouteAnimation,
    secondaryRouteAnimation:secondaryRouteAnimation,
    child:child,
    linearTransition:linearTransition,
  });
};

//****** CupertinoPageScaffold ******
class CupertinoPageScaffold extends FlutterWidget {
  constructor({ key, navigationBar, backgroundColor, resizeToAvoidBottomInset, child } = {}) {
    super();

    this.key = key;
    this.navigationBar = navigationBar;
    this.backgroundColor = backgroundColor;
    this.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
    this.child = child;
  }
}
CupertinoPageScaffold.new = function({ key, navigationBar, backgroundColor, resizeToAvoidBottomInset, child } = {}) {
  return new CupertinoPageScaffold({
    key:key,
    navigationBar:navigationBar,
    backgroundColor:backgroundColor,
    resizeToAvoidBottomInset:resizeToAvoidBottomInset,
    child:child,
  });
};

//****** CupertinoPageRoute ******
class CupertinoPageRoute extends FlutterWidget {
  constructor({ builder, settings, maintainState, fullscreenDialog } = {}) {
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
CupertinoPageRoute.new = function ({ builder, settings, maintainState, fullscreenDialog } = {}) {
  return new CupertinoPageRoute({
    builder:builder,
    settings:settings,
    maintainState:maintainState,
    fullscreenDialog:fullscreenDialog,
  });
};


//-------------- S -----------------
//****** CupertinoSlider ******
class CupertinoSlider extends FlutterWidget {
  constructor({ key, value,  onChanged, onChangeStart, onChangeEnd, min, max, divisions, activeColor } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.onChanged = onChanged;
    this.onChangeStart = onChangeStart;
    this.onChangeEnd = onChangeEnd;
    this.min = min;
    this.max = max;
    this.divisions = divisions;
    this.activeColor = activeColor;
  }
}
CupertinoSlider.new = function({ key, value,  onChanged, onChangeStart, onChangeEnd, min, max, divisions, activeColor } = {}) {
  return new CupertinoSlider({
    key:key,
    value:value,
    onChanged:onChanged,
    onChangeStart:onChangeStart,
    onChangeEnd:onChangeEnd,
    min:min,
    max:max,
    divisions:divisions,
    activeColor:activeColor,
  });
};

//****** CupertinoSwitch ******
class CupertinoSwitch extends FlutterWidget {
  constructor({ key, value, onChanged, activeColor, dragStartBehavior } = {}) {
    super();

    this.key = key;
    this.value = value;
    this.onChanged = onChanged;
    this.activeColor = activeColor;
    this.dragStartBehavior = dragStartBehavior;
  }
}
CupertinoSwitch.new = function({ key, value, onChanged, activeColor, dragStartBehavior } = {}) {
  return new CupertinoSwitch({
    key:key,
    value:value,
    onChanged:onChanged,
    activeColor:activeColor,
    dragStartBehavior:dragStartBehavior,
  });
};

//-------------- T -----------------
//****** CupertinoTabBar ******
class CupertinoTabBar extends FlutterWidget {
  constructor({key, items, onTap, currentIndex, backgroundColor, activeColor, inactiveColor, iconSize, border} = {}) {
    super();

    this.key = key;
    this.items = items;
    this.onTap = onTap;
    this.currentIndex = currentIndex;
    this.backgroundColor = backgroundColor;
    this.activeColor = activeColor;
    this.inactiveColor = inactiveColor;
    this.iconSize = iconSize;
    this.border = border;
  }
}
CupertinoTabBar.new = function({key, items, onTap, currentIndex, backgroundColor, activeColor, inactiveColor, iconSize, border} = {}) {
  return new CupertinoTabBar({
    key:key,
    items:items,
    onTap:onTap,
    currentIndex:currentIndex,
    backgroundColor:backgroundColor,
    activeColor:activeColor,
    inactiveColor:inactiveColor,
    iconSize:iconSize,
    border:border,
  });
};

//****** CupertinoTabScaffold ******
class CupertinoTabScaffold extends FlutterWidget {
  constructor({ key, tabBar, tabBuilder, backgroundColor, resizeToAvoidBottomInset } = {}) {
    super();

    this.key = key;
    this.tabBar = tabBar;
    this.tabBuilder = tabBuilder;
    this.backgroundColor = backgroundColor;
    this.resizeToAvoidBottomInset = resizeToAvoidBottomInset;

    // 本地创建的，供flutter使用
    this.children = [];
  }

  preBuild(jsWidgetHelper, buildContext) {
    if (this.tabBuilder) {
      this.children = this.tabBuilder(buildContext);
      delete this.tabBuilder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }
}
CupertinoTabScaffold.new = function({ key, tabBar, tabBuilder, backgroundColor, resizeToAvoidBottomInset } = {}) {
  return new CupertinoTabScaffold({
    key:key,
    tabBar:tabBar,
    tabBuilder:tabBuilder,
    backgroundColor:backgroundColor,
    resizeToAvoidBottomInset:resizeToAvoidBottomInset,
  });
};

//****** CupertinoTabView ******
class CupertinoTabView extends FlutterWidget {
  constructor({ key, builder, navigatorKey, defaultTitle, routes, onGenerateRoute, onUnknownRoute,navigatorObservers } = {}) {
    super();

    this.key = key;
    this.builder = builder;
    this.navigatorKey = navigatorKey;
    this.defaultTitle = defaultTitle;
    this.routes = routes;
    this.onGenerateRoute = onGenerateRoute;
    this.onUnknownRoute = onUnknownRoute;
    this.navigatorObservers = navigatorObservers;
  }
}
CupertinoTabView.new = function({ key, builder, navigatorKey, defaultTitle, routes, onGenerateRoute, onUnknownRoute,navigatorObservers } = {}) {
  return new CupertinoTabView({
    key:key,
    builder:builder,
    navigatorKey:navigatorKey,
    defaultTitle:defaultTitle,
    routes:routes,
    onGenerateRoute:onGenerateRoute,
    onUnknownRoute:onUnknownRoute,
    navigatorObservers:navigatorObservers,
  });
};


module.exports = {
  CupertinoActivityIndicator,
  CupertinoAlertDialog,

  CupertinoButton,

  CupertinoDialog,
  CupertinoDialogAction,

  CupertinoFullscreenDialogTransition,

  CupertinoNavigationBar,

  CupertinoPageTransition,
  CupertinoPageScaffold,
  CupertinoPageRoute,

  CupertinoSlider,
  CupertinoSwitch,

  CupertinoTabBar,
  CupertinoTabScaffold,
  CupertinoTabView,
};
