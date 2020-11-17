"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IosTabBar = exports.IosSwitch = exports.IosSlider = exports.IosPageScaffold = exports.IosPageTransition = exports.IosNavigationBar = exports.IosFullscreenDialogTransition = exports.IosDialogAction = exports.IosDialog = exports.IosButton = exports.IosAlertDialog = exports.IosActivityIndicator = void 0;
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Ios Class
 */
const bt = require("./js_basic_types");
//-------------- A -----------------
//****** IosActivityIndicator ******
class IosActivityIndicator extends bt.FlutterWidget {
    static new(animating, radius, key) {
        var v = new IosActivityIndicator();
        v.key = key;
        v.animating = animating;
        v.radius = radius;
        return v;
    }
}
exports.IosActivityIndicator = IosActivityIndicator;
//****** IosAlertDialog ******
class IosAlertDialog extends bt.FlutterWidget {
}
exports.IosAlertDialog = IosAlertDialog;
IosAlertDialog.new = function (title, content, actions, scrollController, actionScrollController, key) {
    var v = new IosAlertDialog();
    v.key = key;
    v.title = title;
    v.content = content;
    v.actions = actions;
    v.scrollController = scrollController;
    v.actionScrollController = actionScrollController;
    return v;
};
//-------------- B -----------------
//****** IosButton ******
class IosButton extends bt.FlutterWidget {
    static new(child, onPressed, padding, color, disabledColor, minSize, pressedOpacity, borderRadius, key) {
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
exports.IosButton = IosButton;
//-------------- D -----------------
//****** IosDialog ******
class IosDialog extends bt.FlutterWidget {
    static new(child, key) {
        var v = new IosDialog();
        v.key = key;
        v.child = child;
        return v;
    }
}
exports.IosDialog = IosDialog;
//****** IosDialogAction ******
class IosDialogAction extends bt.FlutterWidget {
    static new(child, onPressed, isDefaultAction, isDestructiveAction, textStyle, key) {
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
exports.IosDialogAction = IosDialogAction;
//-------------- F -----------------
//****** IosFullscreenDialogTransition ******
class IosFullscreenDialogTransition extends bt.FlutterWidget {
    static new(child, linearTransition, primaryRouteAnimation, secondaryRouteAnimation, key) {
        var v = new IosFullscreenDialogTransition();
        v.key = key;
        v.primaryRouteAnimation = primaryRouteAnimation;
        v.secondaryRouteAnimation = secondaryRouteAnimation;
        v.child = child;
        v.linearTransition = linearTransition;
        return v;
    }
}
exports.IosFullscreenDialogTransition = IosFullscreenDialogTransition;
//-------------- N -----------------
//****** IosNavigationBar ******
class IosNavigationBar extends bt.FlutterWidget {
    static new(leading, automaticallyImplyLeading, automaticallyImplyMiddle, previousPageTitle, middle, trailing, border, backgroundColor, padding, actionsForegroundColor, transitionBetweenRoutes, key) {
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
exports.IosNavigationBar = IosNavigationBar;
//-------------- P -----------------
//****** IosPageTransition ******
class IosPageTransition extends bt.FlutterWidget {
    static new(child, linearTransition, primaryRouteAnimation, secondaryRouteAnimation, key) {
        var v = new IosPageTransition();
        v.key = key;
        v.primaryRouteAnimation = primaryRouteAnimation;
        v.secondaryRouteAnimation = secondaryRouteAnimation;
        v.child = child;
        v.linearTransition = linearTransition;
        return v;
    }
}
exports.IosPageTransition = IosPageTransition;
//****** IosPageScaffold ******
class IosPageScaffold extends bt.FlutterWidget {
    static new(child, backgroundColor, navigationBar, resizeToAvoidBottomInset, key) {
        var v = new IosPageScaffold();
        v.key = key;
        v.navigationBar = navigationBar;
        v.backgroundColor = backgroundColor;
        v.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
        v.child = child;
        return v;
    }
}
exports.IosPageScaffold = IosPageScaffold;
//-------------- S -----------------
//****** IosSlider ******
class IosSlider extends bt.FlutterWidget {
    static new(value, onChanged, min, max, onChangeStart, onChangeEnd, divisions, activeColor, key) {
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
exports.IosSlider = IosSlider;
//****** IosSwitch ******
class IosSwitch extends bt.FlutterWidget {
    static new(value, onChanged, activeColor, dragStartBehavior, key) {
        var v = new IosSwitch();
        v.key = key;
        v.value = value;
        v.onChanged = onChanged;
        v.activeColor = activeColor;
        v.dragStartBehavior = dragStartBehavior;
        return v;
    }
}
exports.IosSwitch = IosSwitch;
//-------------- T -----------------
//****** IosTabBar ******
class IosTabBar extends bt.FlutterWidget {
    constructor(items, onTap, currentIndex, backgroundColor, activeColor, inactiveColor, iconSize, border, key) {
        super();
    }
    static new(items, onTap, currentIndex, backgroundColor, activeColor, inactiveColor, iconSize, border, key) {
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
exports.IosTabBar = IosTabBar;
