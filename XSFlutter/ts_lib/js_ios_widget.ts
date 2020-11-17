/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Ios Class
 */
import bt = require("./js_basic_types"); 
import mw = require("./js_material_widget"); 

//-------------- A -----------------
//****** IosActivityIndicator ******
export class IosActivityIndicator extends bt.FlutterWidget {
    key?:bt.BasicKey;
    animating?:boolean;
    radius?:number;

  static new(animating?:boolean,radius?:number,key?:bt.BasicKey) {
    var v = new IosActivityIndicator();
    v.key = key;
    v.animating = animating;
    v.radius = radius;
    return v;
  }
}

//****** IosAlertDialog ******
export class IosAlertDialog extends bt.FlutterWidget {
    title?:bt.FlutterWidget;
    content?:bt.FlutterWidget;
    actions?:bt.FlutterWidget;
    scrollController?:bt.ScrollController;
    actionScrollController?:bt.ScrollController;
    key?:bt.BasicKey;


  static new = function(title?:bt.FlutterWidget, content?:bt.FlutterWidget,actions?:bt.FlutterWidget,scrollController?:bt.ScrollController,actionScrollController?:bt.ScrollController,key?:bt.BasicKey,) {
    var v = new IosAlertDialog();
    v.key = key;
    v.title = title;
    v.content = content;
    v.actions = actions;
    v.scrollController = scrollController;
    v.actionScrollController = actionScrollController;
    return v;
  }
}

//-------------- B -----------------
//****** IosButton ******
export class IosButton extends bt.FlutterWidget {
    child?:bt.FlutterWidget;
    onPressed?:any;
    padding?:bt.EdgeInsets;
    color?:bt.Color;
    disabledColor?:bt.Color;
    minSize?:number;
    pressedOpacity?:number;
    borderRadius?:bt.BorderRadius;
    key?:bt.BasicKey;

  static new(child?:bt.FlutterWidget,onPressed?:any, padding?:bt.EdgeInsets, color?:bt.Color, disabledColor?:bt.Color,
    minSize?:number,pressedOpacity?:number, borderRadius?:bt.BorderRadius, key?:bt.BasicKey,) {
      var v = new IosButton();
      v.key = key;
      v.child = child;
      v.padding = padding;
      v.color = color;
      v.disabledColor = disabledColor;
      v.minSize = minSize;
      v.pressedOpacity = pressedOpacity;
      v.borderRadius = borderRadius;
      v.onPressed = onPressed;
      return v;
  }
}

//-------------- D -----------------
//****** IosDialog ******
export class IosDialog extends bt.FlutterWidget {
    child?:bt.FlutterWidget;
    key?:bt.BasicKey;
 
  static new(child?:bt.FlutterWidget,key?:bt.BasicKey) {
    var v = new IosDialog();
    v.key = key;
    v.child = child;
    return v;
  }
}

//****** IosDialogAction ******
export class IosDialogAction extends bt.FlutterWidget {
    child?:bt.FlutterWidget;
    onPressed?:any;
    isDefaultAction?:boolean;
    isDestructiveAction?:boolean;
    textStyle?:bt.TextStyle;
    key?:bt.BasicKey;

  static new(child?:bt.FlutterWidget,onPressed?:any,isDefaultAction?:boolean, isDestructiveAction?:boolean, textStyle?:bt.TextStyle, key?:bt.BasicKey) {
    var v = new IosDialogAction();
    v.onPressed = onPressed;
    v.isDefaultAction = isDefaultAction;
    v.isDestructiveAction = isDestructiveAction;
    v.textStyle = textStyle;
    v.child = child;
    v.key = key;
    return v;
  }
}

//-------------- F -----------------
//****** IosFullscreenDialogTransition ******
export class IosFullscreenDialogTransition extends bt.FlutterWidget {
  child?:bt.FlutterWidget;
  linearTransition?:boolean;
  primaryRouteAnimation?:any;
  secondaryRouteAnimation?:any;
  
  key?:bt.BasicKey;
  
  static new(child?:bt.FlutterWidget,linearTransition?:boolean,primaryRouteAnimation?:any, secondaryRouteAnimation?:any,key?:bt.BasicKey) {
    var v = new IosFullscreenDialogTransition();
    v.key = key;
    v.primaryRouteAnimation = primaryRouteAnimation;
    v.secondaryRouteAnimation = secondaryRouteAnimation;
    v.child = child;
    v.linearTransition = linearTransition;
    return v;
  }
}

//-------------- N -----------------
//****** IosNavigationBar ******
export class IosNavigationBar extends bt.FlutterWidget {
  leading?:bt.FlutterWidget;
  automaticallyImplyLeading?:boolean;
  automaticallyImplyMiddle?:boolean;
  previousPageTitle?:string;
  middle?:bt.FlutterWidget;
  trailing?:bt.FlutterWidget;
  border?:bt.Border;
  backgroundColor?:bt.Color;
  padding?:bt.EdgeInsets;
  actionsForegroundColor?:bt.Color;
  transitionBetweenRoutes?:boolean;
  key?:bt.BasicKey;

  static new(leading?:bt.FlutterWidget,automaticallyImplyLeading?:boolean,automaticallyImplyMiddle?:boolean,previousPageTitle?:string,middle?:bt.FlutterWidget,
    trailing?:bt.FlutterWidget,border?:bt.Border,backgroundColor?:bt.Color,padding?:bt.EdgeInsets,actionsForegroundColor?:bt.Color,
    transitionBetweenRoutes?:boolean,key?:bt.BasicKey) {
      var v = new IosNavigationBar();
      v.key = key;
    v.leading = leading;
    v.automaticallyImplyLeading = automaticallyImplyLeading;
    v.automaticallyImplyMiddle = automaticallyImplyMiddle;
    v.previousPageTitle = previousPageTitle;
    v.middle = middle;
    v.trailing = trailing;
    v.border = border;
    v.backgroundColor = backgroundColor;
    v.padding = padding;
    v.actionsForegroundColor = actionsForegroundColor;
    v.transitionBetweenRoutes = transitionBetweenRoutes;
    return v;
  }
}

//-------------- P -----------------
//****** IosPageTransition ******
export class IosPageTransition extends bt.FlutterWidget {
  child?:bt.FlutterWidget;
  linearTransition?:boolean;
  primaryRouteAnimation?:any;
  secondaryRouteAnimation?:any;
  key?:bt.BasicKey;


  static new(child?:bt.FlutterWidget,linearTransition?:boolean,primaryRouteAnimation?:any,secondaryRouteAnimation?:any,key?:bt.BasicKey,) {
    var v = new IosPageTransition();
    v.key = key;
    v.primaryRouteAnimation = primaryRouteAnimation;
    v.secondaryRouteAnimation = secondaryRouteAnimation;
    v.child = child;
    v.linearTransition = linearTransition;
    return v ;
  }
}

//****** IosPageScaffold ******
export class IosPageScaffold extends bt.FlutterWidget {
  child?:bt.FlutterWidget;
  backgroundColor?:bt.Color;
  navigationBar?:bt.FlutterWidget;
  resizeToAvoidBottomInset?:boolean;
  key?:bt.BasicKey;

  static new(child?:bt.FlutterWidget,backgroundColor?:bt.Color,navigationBar?:bt.FlutterWidget,resizeToAvoidBottomInset?:boolean,key?:bt.BasicKey) {
    var v = new IosPageScaffold();
    v.key = key;
    v.navigationBar = navigationBar;
    v.backgroundColor = backgroundColor;
    v.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
    v.child = child;
    return v;
  }
}


//-------------- S -----------------
//****** IosSlider ******
export class IosSlider extends bt.FlutterWidget {
  value?:number;
  onChanged?:any;
  min?:number; 
  max?:number;
  onChangeStart?:any;
  onChangeEnd?:any;
  divisions?:number;
  activeColor?:bt.Color;
  key?:bt.BasicKey;

  static new(value?:number, onChanged?:any, min?:number, max?:number, onChangeStart?:any,
    onChangeEnd?:any, divisions?:number, activeColor?:bt.Color, key?:bt.BasicKey,) {
      var v = new IosSlider();
      v.key = key;
    v.value = value;
    v.onChanged = onChanged;
    v.onChangeStart = onChangeStart;
    v.onChangeEnd = onChangeEnd;
    v.min = min;
    v.max = max;
    v.divisions = divisions;
    v.activeColor = activeColor;
    return v;
  }
}

//****** IosSwitch ******
export class IosSwitch extends bt.FlutterWidget {
  value?:boolean;
  onChanged?:any;
  activeColor?:bt.Color;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BasicKey;

  static new(value?:boolean,onChanged?:any,activeColor?:bt.Color,dragStartBehavior?:bt.DragStartBehavior,key?:bt.BasicKey) {
    var v = new IosSwitch();
    v.key = key;
    v.value = value;
    v.onChanged = onChanged;
    v.activeColor = activeColor;
    v.dragStartBehavior = dragStartBehavior;
    return v;
  }
}

//-------------- T -----------------
//****** IosTabBar ******
export class IosTabBar extends bt.FlutterWidget {
  items?:Array<mw.BottomNavigationBarItem>;
  onTap?:any;
  currentIndex?:number;
  backgroundColor?:bt.Color;
  activeColor?:bt.Color;
  inactiveColor?:bt.Color;
  iconSize?:number;
  border?:bt.Border;
  key?:bt.BasicKey;
  constructor(items?:Array<mw.BottomNavigationBarItem>, onTap?:any, currentIndex?:number, backgroundColor?:bt.Color,    activeColor?:bt.Color,
    inactiveColor?:bt.Color, iconSize?:number, border?:bt.Border, key?:bt.BasicKey,) {
    super();

    
  }

  static new(items?:Array<mw.BottomNavigationBarItem>, onTap?:any, currentIndex?:number, backgroundColor?:bt.Color,    activeColor?:bt.Color,
    inactiveColor?:bt.Color, iconSize?:number, border?:bt.Border, key?:bt.BasicKey,) {
      var v = new IosTabBar();
      v.key = key;
    v.items = items;
    v.onTap = onTap;
    v.currentIndex = currentIndex;
    v.backgroundColor = backgroundColor;
    v.activeColor = activeColor;
    v.inactiveColor = inactiveColor;
    v.iconSize = iconSize;
    v.border = border;
    return v;
  }
}
