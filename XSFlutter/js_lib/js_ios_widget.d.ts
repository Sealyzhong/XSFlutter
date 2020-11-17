import bt = require("./js_basic_types");
import mw = require("./js_material_widget");
export declare class IosActivityIndicator extends bt.FlutterWidget {
    key?: bt.BasicKey;
    animating?: boolean;
    radius?: number;
    static new(animating?: boolean, radius?: number, key?: bt.BasicKey): IosActivityIndicator;
}
export declare class IosAlertDialog extends bt.FlutterWidget {
    title?: bt.FlutterWidget;
    content?: bt.FlutterWidget;
    actions?: bt.FlutterWidget;
    scrollController?: bt.ScrollController;
    actionScrollController?: bt.ScrollController;
    key?: bt.BasicKey;
    static new: (title?: bt.FlutterWidget | undefined, content?: bt.FlutterWidget | undefined, actions?: bt.FlutterWidget | undefined, scrollController?: bt.ScrollController | undefined, actionScrollController?: bt.ScrollController | undefined, key?: bt.BasicKey | undefined) => IosAlertDialog;
}
export declare class IosButton extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    padding?: bt.EdgeInsets;
    color?: bt.Color;
    disabledColor?: bt.Color;
    minSize?: number;
    pressedOpacity?: number;
    borderRadius?: bt.BorderRadius;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, onPressed?: any, padding?: bt.EdgeInsets, color?: bt.Color, disabledColor?: bt.Color, minSize?: number, pressedOpacity?: number, borderRadius?: bt.BorderRadius, key?: bt.BasicKey): IosButton;
}
export declare class IosDialog extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, key?: bt.BasicKey): IosDialog;
}
export declare class IosDialogAction extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    isDefaultAction?: boolean;
    isDestructiveAction?: boolean;
    textStyle?: bt.TextStyle;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, onPressed?: any, isDefaultAction?: boolean, isDestructiveAction?: boolean, textStyle?: bt.TextStyle, key?: bt.BasicKey): IosDialogAction;
}
export declare class IosFullscreenDialogTransition extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    linearTransition?: boolean;
    primaryRouteAnimation?: any;
    secondaryRouteAnimation?: any;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, linearTransition?: boolean, primaryRouteAnimation?: any, secondaryRouteAnimation?: any, key?: bt.BasicKey): IosFullscreenDialogTransition;
}
export declare class IosNavigationBar extends bt.FlutterWidget {
    leading?: bt.FlutterWidget;
    automaticallyImplyLeading?: boolean;
    automaticallyImplyMiddle?: boolean;
    previousPageTitle?: string;
    middle?: bt.FlutterWidget;
    trailing?: bt.FlutterWidget;
    border?: bt.Border;
    backgroundColor?: bt.Color;
    padding?: bt.EdgeInsets;
    actionsForegroundColor?: bt.Color;
    transitionBetweenRoutes?: boolean;
    key?: bt.BasicKey;
    static new(leading?: bt.FlutterWidget, automaticallyImplyLeading?: boolean, automaticallyImplyMiddle?: boolean, previousPageTitle?: string, middle?: bt.FlutterWidget, trailing?: bt.FlutterWidget, border?: bt.Border, backgroundColor?: bt.Color, padding?: bt.EdgeInsets, actionsForegroundColor?: bt.Color, transitionBetweenRoutes?: boolean, key?: bt.BasicKey): IosNavigationBar;
}
export declare class IosPageTransition extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    linearTransition?: boolean;
    primaryRouteAnimation?: any;
    secondaryRouteAnimation?: any;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, linearTransition?: boolean, primaryRouteAnimation?: any, secondaryRouteAnimation?: any, key?: bt.BasicKey): IosPageTransition;
}
export declare class IosPageScaffold extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    navigationBar?: bt.FlutterWidget;
    resizeToAvoidBottomInset?: boolean;
    key?: bt.BasicKey;
    static new(child?: bt.FlutterWidget, backgroundColor?: bt.Color, navigationBar?: bt.FlutterWidget, resizeToAvoidBottomInset?: boolean, key?: bt.BasicKey): IosPageScaffold;
}
export declare class IosSlider extends bt.FlutterWidget {
    value?: number;
    onChanged?: any;
    min?: number;
    max?: number;
    onChangeStart?: any;
    onChangeEnd?: any;
    divisions?: number;
    activeColor?: bt.Color;
    key?: bt.BasicKey;
    static new(value?: number, onChanged?: any, min?: number, max?: number, onChangeStart?: any, onChangeEnd?: any, divisions?: number, activeColor?: bt.Color, key?: bt.BasicKey): IosSlider;
}
export declare class IosSwitch extends bt.FlutterWidget {
    value?: boolean;
    onChanged?: any;
    activeColor?: bt.Color;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    static new(value?: boolean, onChanged?: any, activeColor?: bt.Color, dragStartBehavior?: bt.DragStartBehavior, key?: bt.BasicKey): IosSwitch;
}
export declare class IosTabBar extends bt.FlutterWidget {
    items?: Array<mw.BottomNavigationBarItem>;
    onTap?: any;
    currentIndex?: number;
    backgroundColor?: bt.Color;
    activeColor?: bt.Color;
    inactiveColor?: bt.Color;
    iconSize?: number;
    border?: bt.Border;
    key?: bt.BasicKey;
    constructor(items?: Array<mw.BottomNavigationBarItem>, onTap?: any, currentIndex?: number, backgroundColor?: bt.Color, activeColor?: bt.Color, inactiveColor?: bt.Color, iconSize?: number, border?: bt.Border, key?: bt.BasicKey);
    static new(items?: Array<mw.BottomNavigationBarItem>, onTap?: any, currentIndex?: number, backgroundColor?: bt.Color, activeColor?: bt.Color, inactiveColor?: bt.Color, iconSize?: number, border?: bt.Border, key?: bt.BasicKey): IosTabBar;
}
