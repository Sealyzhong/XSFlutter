/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Ios Class
 */
import bt = require("./js_basic_types"); 
import fw = require("./js_framework"); 
import mw = require("./js_material_widget"); 

//-------------- A -----------------
//****** IosActivityIndicator ******
export class IosActivityIndicator extends fw.JSBaseWidget {
    key?:bt.BaseKey;
    animating?:boolean;
    radius?:number;

  static new(animating?:boolean,radius?:number,key?:bt.BaseKey) {
    var v = new IosActivityIndicator();
    v.key = key;
    v.animating = animating;
    v.radius = radius;
    return v;
  }
}

//****** IosAlertDialog ******
export class IosAlertDialog extends fw.JSBaseWidget {
    title?:fw.JSBaseWidget;
    content?:fw.JSBaseWidget;
    actions?:fw.JSBaseWidget;
    scrollController?:bt.ScrollController;
    actionScrollController?:bt.ScrollController;
    key?:bt.BaseKey;


  static new = function(title?:fw.JSBaseWidget, content?:fw.JSBaseWidget,actions?:fw.JSBaseWidget,scrollController?:bt.ScrollController,actionScrollController?:bt.ScrollController,key?:bt.BaseKey,) {
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
export class IosButton extends fw.JSBaseWidget {
    child?:fw.JSBaseWidget;
    onPressed?:any;
    padding?:bt.EdgeInsets;
    color?:bt.Color;
    disabledColor?:bt.Color;
    minSize?:number;
    pressedOpacity?:number;
    borderRadius?:bt.BorderRadius;
    key?:bt.BaseKey;

  static new(child?:fw.JSBaseWidget,onPressed?:any, padding?:bt.EdgeInsets, color?:bt.Color, disabledColor?:bt.Color,
    minSize?:number,pressedOpacity?:number, borderRadius?:bt.BorderRadius, key?:bt.BaseKey,) {
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
export class IosDialog extends fw.JSBaseWidget {
    child?:fw.JSBaseWidget;
    key?:bt.BaseKey;
 
  static new(child?:fw.JSBaseWidget,key?:bt.BaseKey) {
    var v = new IosDialog();
    v.key = key;
    v.child = child;
    return v;
  }
}

//****** IosDialogAction ******
export class IosDialogAction extends fw.JSBaseWidget {
    child?:fw.JSBaseWidget;
    onPressed?:any;
    isDefaultAction?:boolean;
    isDestructiveAction?:boolean;
    textStyle?:bt.TextStyle;
    key?:bt.BaseKey;

  static new(child?:fw.JSBaseWidget,onPressed?:any,isDefaultAction?:boolean, isDestructiveAction?:boolean, textStyle?:bt.TextStyle, key?:bt.BaseKey) {
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
export class IosFullscreenDialogTransition extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  linearTransition?:boolean;
  primaryRouteAnimation?:any;
  secondaryRouteAnimation?:any;
  
  key?:bt.BaseKey;
  
  static new(child?:fw.JSBaseWidget,linearTransition?:boolean,primaryRouteAnimation?:any, secondaryRouteAnimation?:any,key?:bt.BaseKey) {
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
export class IosNavigationBar extends fw.JSBaseWidget {
  leading?:fw.JSBaseWidget;
  automaticallyImplyLeading?:boolean;
  automaticallyImplyMiddle?:boolean;
  previousPageTitle?:string;
  middle?:fw.JSBaseWidget;
  trailing?:fw.JSBaseWidget;
  border?:bt.Border;
  backgroundColor?:bt.Color;
  padding?:bt.EdgeInsets;
  actionsForegroundColor?:bt.Color;
  transitionBetweenRoutes?:boolean;
  key?:bt.BaseKey;

  static new(leading?:fw.JSBaseWidget,automaticallyImplyLeading?:boolean,automaticallyImplyMiddle?:boolean,previousPageTitle?:string,middle?:fw.JSBaseWidget,
    trailing?:fw.JSBaseWidget,border?:bt.Border,backgroundColor?:bt.Color,padding?:bt.EdgeInsets,actionsForegroundColor?:bt.Color,
    transitionBetweenRoutes?:boolean,key?:bt.BaseKey) {
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
export class IosPageTransition extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  linearTransition?:boolean;
  primaryRouteAnimation?:any;
  secondaryRouteAnimation?:any;
  key?:bt.BaseKey;


  static new(child?:fw.JSBaseWidget,linearTransition?:boolean,primaryRouteAnimation?:any,secondaryRouteAnimation?:any,key?:bt.BaseKey,) {
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
export class IosPageScaffold extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  navigationBar?:fw.JSBaseWidget;
  resizeToAvoidBottomInset?:boolean;
  key?:bt.BaseKey;

  static new(child?:fw.JSBaseWidget,backgroundColor?:bt.Color,navigationBar?:fw.JSBaseWidget,resizeToAvoidBottomInset?:boolean,key?:bt.BaseKey) {
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
export class IosSlider extends fw.JSBaseWidget {
  value?:number;
  onChanged?:any;
  min?:number; 
  max?:number;
  onChangeStart?:any;
  onChangeEnd?:any;
  divisions?:number;
  activeColor?:bt.Color;
  key?:bt.BaseKey;

  static new(value?:number, onChanged?:any, min?:number, max?:number, onChangeStart?:any,
    onChangeEnd?:any, divisions?:number, activeColor?:bt.Color, key?:bt.BaseKey,) {
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
export class IosSwitch extends fw.JSBaseWidget {
  value?:boolean;
  onChanged?:any;
  activeColor?:bt.Color;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;

  static new(value?:boolean,onChanged?:any,activeColor?:bt.Color,dragStartBehavior?:bt.DragStartBehavior,key?:bt.BaseKey) {
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
export class IosTabBar extends fw.JSBaseWidget {
  items?:Array<mw.BottomNavigationBarItem>;
  onTap?:any;
  currentIndex?:number;
  backgroundColor?:bt.Color;
  activeColor?:bt.Color;
  inactiveColor?:bt.Color;
  iconSize?:number;
  border?:bt.Border;
  key?:bt.BaseKey;
  constructor(items?:Array<mw.BottomNavigationBarItem>, onTap?:any, currentIndex?:number, backgroundColor?:bt.Color,    activeColor?:bt.Color,
    inactiveColor?:bt.Color, iconSize?:number, border?:bt.Border, key?:bt.BaseKey,) {
    super();

    
  }

  static new(items?:Array<mw.BottomNavigationBarItem>, onTap?:any, currentIndex?:number, backgroundColor?:bt.Color,    activeColor?:bt.Color,
    inactiveColor?:bt.Color, iconSize?:number, border?:bt.Border, key?:bt.BaseKey,) {
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
