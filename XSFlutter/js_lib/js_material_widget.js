"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrap = exports.TextFormField = exports.TextSpan = exports.TabBarView = exports.Tab = exports.TabBar = exports.Table = exports.Transform = exports.TableCell = exports.TableRow = exports.SnackBar = exports.Scrollbar = exports.SafeArea = exports.ScaffoldState = exports.Scaffold = exports.SliverToBoxAdapter = exports.SingleChildScrollView = exports.SliverOverlapAbsorber = exports.SliverFixedExtentList = exports.SliverOverlapInjector = exports.SliverList = exports.SliverChildBuilderDelegate = exports.SliverChildListDelegate = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGrid = exports.SliverPadding = exports.SliverAppBar = exports.Stack = exports.SizedOverflowBox = exports.SizedBox = exports.Slider = exports.RichText = exports.RawMaterialButton = exports.Radio = exports.RaisedButton = exports.Row = exports.PopupMenuItem = exports.PopupMenuButton = exports.Placeholder = exports.PreferredSizeWidget = exports.PreferredSize = exports.Positioned = exports.Padding = exports.OverflowBox = exports.Offstage = exports.Opacity = exports.NetworkImage = exports.Navigator = exports.NavigatorState = exports.NestedScrollView = exports.NotificationListener = exports.MemoryImage = exports.MaterialPageRoute = exports.Material = exports.LayoutBuilder = exports.ListView = exports.ListTile = exports.ListBody = exports.LimitedBox = exports.Image = exports.Icon = exports.IconButton = exports.IndexedStack = exports.IntrinsicWidth = exports.IntrinsicHeight = exports.GestureDetector = exports.FileImage = exports.FlutterLogo = exports.FlexibleSpaceBar = exports.FloatingActionButton = exports.FlatButton = exports.Flow = exports.FractionallySizedBox = exports.FittedBox = exports.ExactAssetImage = exports.Expanded = exports.DecoratedBoxTransition = exports.DefaultTextStyle = exports.DecorationImage = exports.DefaultTabController = exports.DropdownButton = exports.DecoratedBox = exports.DropdownMenuItem = exports.Card = exports.CustomScrollView = exports.CustomMultiChildLayout = exports.Column = exports.CustomSingleChildLayout = exports.ConstrainedBox = exports.ClipRRect = exports.Chip = exports.CircleAvatar = exports.Center = exports.Container = exports.Builder = exports.BottomNavigationBar = exports.BottomAppBar = exports.ButtonBar = exports.Baseline = exports.BottomNavigationBarItem = exports.AnimatedDefaultTextStyle = exports.AnimatedSize = exports.AnimatedPositioned = exports.AnimatedPhysicalModel = exports.AnimatedContainer = exports.AnimatedBuilder = exports.AnimatedOpacity = exports.AnimatedCrossFade = exports.AssetImage = exports.AnnotatedRegion = exports.AspectRatio = exports.Align = exports.AppBar = void 0;
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */
const bt = require("./js_basic_types");
class AppBar extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey,title?:FlutterWidget,automaticallyImplyLeading?:boolean,actions?:Array<FlutterWidget>,leading?:FlutterWidget,
      flexibleSpace?:FlutterWidget,bottom?:FlutterWidget,elevation?:number,backgroundColor?:Color,brightness?:Brightness,
      primary?:boolean,centerTitle?:boolean,titleSpacing?:number,toolbarOpacity?:number,bottomOpacity?:number }
     */
    static new(config) {
        var v = new AppBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.leading = config.leading;
            v.automaticallyImplyLeading = config.automaticallyImplyLeading;
            v.title = config.title;
            v.actions = config.actions;
            v.flexibleSpace = config.flexibleSpace;
            v.bottom = config.bottom;
            v.elevation = config.elevation;
            v.backgroundColor = config.backgroundColor;
            v.brightness = config.brightness;
            v.primary = config.primary;
            v.centerTitle = config.centerTitle;
            v.titleSpacing = config.titleSpacing;
            v.toolbarOpacity = config.toolbarOpacity;
            v.bottomOpacity = config.bottomOpacity;
        }
        return v;
    }
}
exports.AppBar = AppBar;
class Align extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget,alignment?:Alignment, widthFactor?:number, heightFactor?:number,}
     */
    static new(config) {
        var v = new Align();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.widthFactor = config.widthFactor;
            v.heightFactor = config.heightFactor;
            v.child = config.child;
        }
        return v;
    }
}
exports.Align = Align;
class AspectRatio extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, aspectRatio?:number,}
     */
    static new(config) {
        var v = new AspectRatio();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.aspectRatio = config.aspectRatio;
            v.child = config.child;
        }
        return v;
    }
}
exports.AspectRatio = AspectRatio;
class AnnotatedRegion extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, value?:number, sized?:boolean,}
     */
    static new(config) {
        var v = new AnnotatedRegion();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.value = config.value;
            v.sized = config.sized;
        }
        return v;
    }
}
exports.AnnotatedRegion = AnnotatedRegion;
class AssetImage extends bt.FlutterWidget {
    /**
     * @param config config: {assetName:string, bundle?:BasicAssetBundle, packageName?:string}
     */
    static new(config) {
        var v = new AssetImage();
        if (config != null && config != undefined) {
            v.assetName = config.assetName;
            v.bundle = config.bundle;
            v.packageName = config.packageName;
        }
        return v;
    }
}
exports.AssetImage = AssetImage;
class AnimatedCrossFade extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, firstChild?:bt.FlutterWidget, secondChild?:bt.FlutterWidget, firstCurve?:bt.Curve, secondCurve?:bt.Curve,
    sizeCurve?:bt.Curve, alignment?:bt.Alignment, crossFadeState?:bt.CrossFadeState, duration?:bt.Duration, reverseDuration?:bt.Duration, layoutBuilder?:any}
     */
    static new(config) {
        var v = new AnimatedCrossFade();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.firstChild = config.firstChild;
            v.secondChild = config.secondChild;
            v.firstCurve = config.firstCurve;
            v.secondCurve = config.secondCurve;
            v.sizeCurve = config.sizeCurve;
            v.alignment = config.alignment;
            v.crossFadeState = config.crossFadeState;
            v.duration = config.duration;
            v.reverseDuration = config.reverseDuration;
            v.layoutBuilder = config.layoutBuilder;
        }
        return v;
    }
    ;
}
exports.AnimatedCrossFade = AnimatedCrossFade;
class AnimatedOpacity extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, opacity?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any, alwaysIncludeSemantics?:boolean}
     */
    static new(config) {
        var v = new AnimatedOpacity();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.opacity = config.opacity;
            v.curve = config.curve;
            v.duration = config.duration;
            v.onEnd = config.onEnd;
            v.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
        }
        return v;
    }
    ;
}
exports.AnimatedOpacity = AnimatedOpacity;
class AnimatedBuilder extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, animation?:bt.Animation, builder?:any, child?:bt.FlutterWidget, widget?:bt.FlutterWidget,}
     */
    static new(config) {
        var v = new AnimatedBuilder();
        v.key = config.key;
        v.animation = config.animation;
        v.builder = config.builder;
        v.child = config.child;
        v.widget = config.widget;
        return v;
    }
}
exports.AnimatedBuilder = AnimatedBuilder;
class AnimatedContainer extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, child?:FlutterWidget, color?:Color, decoration?:BoxDecoration,
     foregroundDecoration?:BoxDecoration, width?:number, height?:number, constraints?:BoxConstraints, transform?:Matrix4, curve?:Curve, duration?:Duration, onEnd?:any,}
     */
    static new(config) {
        var v = new AnimatedContainer();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.margin = config.margin;
            v.padding = config.padding;
            v.child = config.child;
            v.color = config.color;
            v.decoration = config.decoration;
            v.foregroundDecoration = config.foregroundDecoration;
            v.width = config.width;
            v.height = config.height;
            v.constraints = config.constraints;
            v.transform = config.transform;
            v.curve = config.curve;
            v.duration = config.duration;
            v.onEnd = config.onEnd;
        }
        return v;
    }
}
exports.AnimatedContainer = AnimatedContainer;
class AnimatedPhysicalModel extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, shape?:any, clipBehavior?:bt.Clip, borderRadius?:bt.BorderRadius, elevation?:number,
      color?:bt.Color, animateColor?:boolean, shadowColor?:bt.Color, animateShadowColor?:boolean, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
     */
    static new(config) {
        var v = new AnimatedPhysicalModel();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.borderRadius = config.borderRadius;
            v.elevation = config.elevation;
            v.color = config.color;
            v.animateColor = v.animateColor;
            v.animateShadowColor = config.animateShadowColor;
            v.shadowColor = config.shadowColor;
            v.curve = config.curve;
            v.duration = config.duration;
            v.onEnd = config.onEnd;
        }
        return v;
    }
}
exports.AnimatedPhysicalModel = AnimatedPhysicalModel;
class AnimatedPositioned extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, left?:number, top?:number, right?:number, bottom?:number,
      width?:number, height?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any,}
     */
    static new(config) {
        var v = new AnimatedPositioned();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.width = config.width;
            v.curve = config.curve;
            v.duration = config.duration;
            v.onEnd = config.onEnd;
        }
        return v;
    }
}
exports.AnimatedPositioned = AnimatedPositioned;
class AnimatedSize extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, alignment?:bt.Alignment, curve?:bt.Curve, duration?:bt.Duration, reverseDuration?:bt.Duration, vsync?:any}
     */
    static new(config) {
        var v = new AnimatedSize();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.alignment = config.alignment;
            v.curve = config.curve;
            v.duration = config.duration;
            v.reverseDuration = config.reverseDuration;
            v.vsync = config.vsync;
        }
        return v;
    }
}
exports.AnimatedSize = AnimatedSize;
class AnimatedDefaultTextStyle extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, style?:bt.TextStyle, textAlign?:bt.TextAlign, softWrap?:boolean, overflow?:bt.TextOverflow,
      maxLines?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
     */
    static new(config) {
        var v = new AnimatedDefaultTextStyle();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.style = config.style;
            v.softWrap = config.softWrap;
            v.textAlign = config.textAlign;
            v.softWrap = config.softWrap;
            v.maxLines = config.maxLines;
            v.curve = config.curve;
            v.duration = config.duration;
            v.onEnd = config.onEnd;
        }
        return v;
    }
}
exports.AnimatedDefaultTextStyle = AnimatedDefaultTextStyle;
class BottomNavigationBarItem extends bt.FlutterWidget {
    /**
     * @param config config: {icon?:FlutterWidget, title?:FlutterWidget, activeIcon?:FlutterWidget, backgroundColor?:Color}
     */
    static new(config) {
        var v = new BottomNavigationBarItem();
        if (config != null && config != undefined) {
            v.icon = config.icon;
            v.title = config.title;
            v.activeIcon = config.activeIcon;
            v.backgroundColor = config.backgroundColor;
        }
        return v;
    }
}
exports.BottomNavigationBarItem = BottomNavigationBarItem;
class Baseline extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey,child?:FlutterWidget,baseline?:number,baselineType?:TextBaseline,}
     */
    static new(config) {
        var v = new Baseline();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.baseline = config.baseline;
            v.baselineType = config.baselineType;
            v.child = config.child;
        }
        return v;
    }
}
exports.Baseline = Baseline;
class ButtonBar extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, children?:Array<FlutterWidget>, alignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, }
     */
    static new(config) {
        var v = new ButtonBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.mainAxisSize = config.mainAxisSize;
            v.children = config.children;
        }
        return v;
    }
}
exports.ButtonBar = ButtonBar;
class BottomAppBar extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, notchMargin?:number, }
     */
    static new(config) {
        var v = new BottomAppBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.color = config.color;
            v.elevation = config.elevation;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.notchMargin = config.notchMargin;
            v.child = config.child;
        }
        return v;
    }
}
exports.BottomAppBar = BottomAppBar;
class BottomNavigationBar extends bt.FlutterWidget {
    /**
     * @param config config: {items?:Array<BottomNavigationBarItem>, onTap?:any, currentIndex?:number, type?:BottomNavigationBarType, fixedColor?:Color, iconSize?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new BottomNavigationBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.items = config.items;
            v.onTap = config.onTap;
            v.currentIndex = config.currentIndex;
            v.type = config.type;
            v.fixedColor = config.fixedColor;
            v.iconSize = config.iconSize;
        }
        return v;
    }
}
exports.BottomNavigationBar = BottomNavigationBar;
//****** Builder ******
class Builder extends bt.FlutterWidget {
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            this.child = this.builder(buildContext);
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    static new(builder, key) {
        var v = new Builder();
        v.key = key;
        v.builder = builder;
        // 本地创建的，供flutter使用
        v.child = undefined;
        return v;
    }
}
exports.Builder = Builder;
class Container extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, color?:Color,
      width?:number, height?:number, decoration?:BoxDecoration, foregroundDecoration?:BoxDecoration,
      constraints?:BoxConstraints, transform?:Matrix4,}
     */
    static new(config) {
        var v = new Container();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.padding = config.padding;
            v.color = config.color;
            v.decoration = config.decoration;
            v.foregroundDecoration = config.foregroundDecoration;
            v.width = config.width;
            v.height = config.height;
            v.constraints = config.constraints;
            v.margin = config.margin;
            v.transform = config.transform;
            v.child = config.child;
        }
        return v;
    }
}
exports.Container = Container;
class Center extends bt.FlutterWidget {
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, widthFactor?:number, heightFactor?:number, }
     */
    static new(config) {
        var v = new Center();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.widthFactor = config.widthFactor;
            v.heightFactor = config.heightFactor;
            v.child = config.child;
        }
        return v;
    }
}
exports.Center = Center;
class CircleAvatar extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, backgroundColor?:Color, foregroundColor?:Color, radius?:number, backgroundImage?:any,minRadius?:number, maxRadius?:number,key?:BasicKey, }
     */
    static new(config) {
        var v = new CircleAvatar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.backgroundColor = config.backgroundColor;
            v.backgroundImage = config.backgroundImage;
            v.foregroundColor = config.foregroundColor;
            v.radius = config.radius;
            v.minRadius = config.minRadius;
            v.maxRadius = config.maxRadius;
        }
        return v;
    }
}
exports.CircleAvatar = CircleAvatar;
class Chip extends bt.FlutterWidget {
    /**
     * @param config config: {avatar?:FlutterWidget,label?:FlutterWidget,labelStyle?:TextStyle,labelPadding?:EdgeInsets,deleteIcon?:FlutterWidget,
      onDeleted?:any, deleteIconColor?:Color, deleteButtonTooltipMessage?:string, clipBehavior?:Clip,
      backgroundColor?:Color, padding?:EdgeInsets, materialTapTargetSize?:MaterialTapTargetSize,elevation?:number,key?:BasicKey,}
     */
    static new(config) {
        var v = new Chip();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.avatar = config.avatar;
            v.label = config.label;
            v.labelStyle = config.labelStyle;
            v.labelPadding = config.labelPadding;
            v.deleteIcon = config.deleteIcon;
            v.onDeleted = config.onDeleted;
            v.deleteIconColor = config.deleteIconColor;
            v.deleteButtonTooltipMessage = config.deleteButtonTooltipMessage;
            v.clipBehavior = config.clipBehavior;
            v.backgroundColor = config.backgroundColor;
            v.padding = config.padding;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.elevation = config.elevation;
        }
        return v;
    }
}
exports.Chip = Chip;
class ClipRRect extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,borderRadius?:BorderRadius,clipBehavior?:Clip,key?:BasicKey}
     */
    static new(config) {
        var v = new ClipRRect();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.borderRadius = config.borderRadius;
            v.clipBehavior = config.clipBehavior;
            v.child = config.child;
        }
        return v;
    }
}
exports.ClipRRect = ClipRRect;
class ConstrainedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, constraints?:BoxConstraints, key?:BasicKey,}
     */
    static new(config) {
        var v = new ConstrainedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.constraints = config.constraints;
            v.child = config.child;
        }
        return v;
    }
}
exports.ConstrainedBox = ConstrainedBox;
class CustomSingleChildLayout extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, delegate?:any, key?:BasicKey,}
     */
    static new(config) {
        var v = new CustomSingleChildLayout();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
            v.child = config.child;
        }
        return v;
    }
}
exports.CustomSingleChildLayout = CustomSingleChildLayout;
class Column extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, crossAxisAlignment?:CrossAxisAlignment,
      mainAxisSize?:MainAxisSize, textDirection?:TextDirection, verticalDirection?:VerticalDirection,
      textBaseline?:TextBaseline, key?:BasicKey,}
     */
    static new(config) {
        var v = new Column();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.mainAxisAlignment = config.mainAxisAlignment;
            v.mainAxisSize = config.mainAxisSize;
            v.crossAxisAlignment = config.crossAxisAlignment;
            v.textDirection = config.textDirection;
            v.verticalDirection = config.verticalDirection;
            v.textBaseline = config.textBaseline;
            v.children = config.children;
        }
        return v;
    }
}
exports.Column = Column;
class CustomMultiChildLayout extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BasicKey}
     */
    static new(config) {
        var v = new CustomMultiChildLayout();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
            v.children = config.children;
        }
        return v;
    }
}
exports.CustomMultiChildLayout = CustomMultiChildLayout;
class CustomScrollView extends bt.FlutterWidget {
    /**
     * @param config config: {slivers?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean, primary?:boolean,
      physics?:ScrollPhysics, shrinkWrap?:boolean, center?:BasicKey, anchor?:number, cacheExtent?:number,
      semanticChildCount?:number, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config) {
        var v = new CustomScrollView();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.center = config.center;
            v.anchor = config.anchor;
            v.cacheExtent = config.cacheExtent;
            v.slivers = config.slivers;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        return v;
    }
}
exports.CustomScrollView = CustomScrollView;
class Card extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, margin?:EdgeInsets, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, semanticContainer?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new Card();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.color = config.color;
            v.elevation = config.elevation;
            v.shape = config.shape;
            v.margin = config.margin;
            v.clipBehavior = config.clipBehavior;
            v.child = config.child;
            v.semanticContainer = config.semanticContainer;
        }
        return v;
    }
}
exports.Card = Card;
class DropdownMenuItem extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,value?:number,key?:BasicKey}
     */
    static new(config) {
        var v = new DropdownMenuItem();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.value = config.value;
            v.child = config.child;
        }
        return v;
    }
}
exports.DropdownMenuItem = DropdownMenuItem;
class DecoratedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, decoration?:BoxDecoration, position?:DecorationPosition, key?:BasicKey,}
     */
    static new(config) {
        var v = new DecoratedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.decoration = config.decoration;
            v.position = config.position;
            v.child = config.child;
        }
        return v;
    }
}
exports.DecoratedBox = DecoratedBox;
class DropdownButton extends bt.FlutterWidget {
    /**
     * @param config config: {items?:Array<DropdownMenuItem>, onChanged?:any, value?:any, hint?:FlutterWidget,
      disabledHint?:FlutterWidget, elevation?:number, style?:TextStyle, iconSize?:number,
      isDense?:boolean, isExpanded?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new DropdownButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.items = config.items;
            v.value = config.value;
            v.hint = config.hint;
            v.disabledHint = config.disabledHint;
            v.onChanged = config.onChanged;
            v.elevation = config.elevation;
            v.style = config.style;
            v.iconSize = config.iconSize;
            v.isDense = config.isDense;
            v.isExpanded = config.isExpanded;
        }
        return v;
    }
}
exports.DropdownButton = DropdownButton;
class DefaultTabController extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, length?:number, initialIndex?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new DefaultTabController();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.length = config.length;
            v.initialIndex = config.initialIndex;
            v.child = config.child;
        }
        return v;
    }
}
exports.DefaultTabController = DefaultTabController;
class DecorationImage extends bt.FlutterWidget {
    /**
     * @param config config: {image?:any, alignment?:Alignment, colorFilter?:ColorFilter, fit?:BoxFit, centerSlice?:Rect, repeat?:ImageRepeat, matchTextDirection?:boolean, scale?:number,}
     */
    static new(config) {
        var v = new DecorationImage();
        if (config != null && config != undefined) {
            v.image = config.image;
            v.colorFilter = config.colorFilter;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.centerSlice = config.centerSlice;
            v.repeat = config.repeat;
            v.matchTextDirection = config.matchTextDirection;
            v.scale = config.scale;
        }
        return v;
    }
}
exports.DecorationImage = DecorationImage;
class DefaultTextStyle extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, style?:TextStyle, textAlign?:TextAlign, softWrap?:boolean, overflow?:TextOverflow, maxLines?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new DefaultTextStyle();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.style = config.style;
            v.textAlign = config.textAlign;
            v.softWrap = config.softWrap;
            v.overflow = config.overflow;
            v.maxLines = config.maxLines;
            v.child = config.child;
        }
        return v;
    }
}
exports.DefaultTextStyle = DefaultTextStyle;
class DecoratedBoxTransition extends bt.FlutterWidget {
    /**
     * @param config config: {key?:bt.BasicKey, decoration?:any, position?:bt.DecorationPosition, child?:bt.FlutterWidget}
     */
    static new(config) {
        var v = new DecoratedBoxTransition();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.decoration = config.decoration;
            v.position = config.position;
            v.child = config.child;
        }
        return v;
    }
}
exports.DecoratedBoxTransition = DecoratedBoxTransition;
class Expanded extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, flex?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new Expanded();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.flex = config.flex;
            v.child = config.child;
        }
        return v;
    }
}
exports.Expanded = Expanded;
class ExactAssetImage extends bt.FlutterWidget {
    /**
     * @param config config: {assetName:string, scale?:number, bundle?:BasicAssetBundle, packageName?:string}
     */
    static new(config) {
        var v = new ExactAssetImage();
        if (config != null && config != undefined) {
            v.assetName = config.assetName;
            v.scale = config.scale;
            v.bundle = config.bundle;
            v.packageName = config.packageName;
        }
        return v;
    }
}
exports.ExactAssetImage = ExactAssetImage;
class FittedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, fit?:BoxFit, key?:BasicKey}
     */
    static new(config) {
        var v = new FittedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.child = config.child;
        }
        return v;
    }
}
exports.FittedBox = FittedBox;
class FractionallySizedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, widthFactor?:number, heightFactor?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new FractionallySizedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.widthFactor = config.widthFactor;
            v.heightFactor = config.heightFactor;
            v.child = config.child;
        }
        return v;
    }
}
exports.FractionallySizedBox = FractionallySizedBox;
class Flow extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BasicKey,}
     */
    static new(config) {
        var v = new Flow();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
            v.children = config.children;
        }
        return v;
    }
}
exports.Flow = Flow;
class FlatButton extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, padding?:EdgeInsets, onHighlightChanged?:any, textTheme?:ButtonTextTheme, textColor?:Color,
      disabledTextColor?:Color, color?:Color, disabledColor?:Color, highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static new(config) {
        var v = new FlatButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.onHighlightChanged = config.onHighlightChanged;
            v.textTheme = config.textTheme;
            v.textColor = config.textColor;
            v.disabledTextColor = config.disabledTextColor;
            v.color = config.color;
            v.disabledColor = config.disabledColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorBrightness = config.colorBrightness;
            v.padding = config.padding;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config: {icon?:FlutterWidget, label?:FlutterWidget,onPressed?:any, padding?:EdgeInsets, onHighlightChanged?:any, textTheme?:ButtonTextTheme, textColor?:Color,
      disabledTextColor?:Color, color?:Color, disabledColor?:Color, highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static icon(config) {
        let v = new FlatButton();
        v.staticFunctionName = "icon";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.onHighlightChanged = config.onHighlightChanged;
            v.textTheme = config.textTheme;
            v.textColor = config.textColor;
            v.disabledTextColor = config.disabledTextColor;
            v.color = config.color;
            v.disabledColor = config.disabledColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorBrightness = config.colorBrightness;
            v.padding = config.padding;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.icon = config.icon;
            v.label = config.label;
        }
        return v;
    }
}
exports.FlatButton = FlatButton;
class FloatingActionButton extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, foregroundColor?:Color, backgroundColor?:Color, mini?:boolean, elevation?:number, highlightElevation?:number,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, isExtended?:boolean,  tooltip?:string, key?:BasicKey}
     */
    static new(config) {
        var v = new FloatingActionButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.tooltip = config.tooltip;
            v.foregroundColor = config.foregroundColor;
            v.backgroundColor = config.backgroundColor;
            v.elevation = config.elevation;
            v.highlightElevation = config.highlightElevation;
            v.onPressed = config.onPressed;
            v.mini = config.mini;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.isExtended = config.isExtended;
        }
        return v;
    }
}
exports.FloatingActionButton = FloatingActionButton;
class FlexibleSpaceBar extends bt.FlutterWidget {
    /**
     * @param config config: {title?:FlutterWidget, background?:FlutterWidget, centerTitle?:boolean, collapseMode?:CollapseMode, key?:BasicKey}
     */
    static new(config) {
        var v = new FlexibleSpaceBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.title = config.title;
            v.background = config.background;
            v.centerTitle = config.centerTitle;
            v.collapseMode = config.collapseMode;
        }
        return v;
    }
}
exports.FlexibleSpaceBar = FlexibleSpaceBar;
class FlutterLogo extends bt.FlutterWidget {
    /**
     * @param config config: {size?:number, colors?:Color, textColor?:Color, style?:FlutterLogoStyle, duration?:Duration, curve?:Curves, key?:BasicKey}
     */
    static new(config) {
        var v = new FlutterLogo();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.size = config.size;
            v.colors = config.colors;
            v.textColor = config.textColor;
            v.duration = config.duration;
            v.style = config.style;
            v.curve = config.curve;
        }
        return v;
    }
}
exports.FlutterLogo = FlutterLogo;
class FileImage extends bt.FlutterWidget {
    /**
     * @param config config: {file?:File,scale?:number}
     */
    static new(config) {
        var v = new FileImage();
        if (config != null && config != undefined) {
            v.file = config.file;
            v.scale = config.scale;
        }
        return v;
    }
}
exports.FileImage = FileImage;
class GestureDetector extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, onTap?:any, onTapDown?:any, onTapUp?:any,onTapCancel?:any,
      onDoubleTap?:any, onLongPress?:any, onLongPressUp?:any, onVerticalDragDown?:any, onVerticalDragStart?:any,
      onVerticalDragUpdate?:any, onVerticalDragEnd?:any, onVerticalDragCancel?:any, onHorizontalDragDown?:any,
      onHorizontalDragStart?:any, onHorizontalDragUpdate?:any, onHorizontalDragEnd?:any, onHorizontalDragCancel?:any,
      onPanDown?:any, onPanStart?:any, onPanUpdate?:any, onPanEnd?:any, onPanCancel?:any, onScaleStart?:any,
      onScaleUpdate?:any, onScaleEnd?:any, behavior?:HitTestBehavior, excludeFromSemantics?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new GestureDetector();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.onTapDown = config.onTapDown;
            v.onTapUp = config.onTapUp;
            v.onTap = config.onTap;
            v.onTapCancel = config.onTapCancel;
            v.onDoubleTap = config.onDoubleTap;
            v.onLongPress = config.onLongPress;
            v.onLongPressUp = config.onLongPressUp;
            v.onVerticalDragDown = config.onVerticalDragDown;
            v.onVerticalDragStart = config.onVerticalDragStart;
            v.onVerticalDragUpdate = config.onVerticalDragUpdate;
            v.onVerticalDragEnd = config.onVerticalDragEnd;
            v.onVerticalDragCancel = config.onVerticalDragCancel;
            v.onHorizontalDragDown = config.onHorizontalDragDown;
            v.onHorizontalDragStart = config.onHorizontalDragStart;
            v.onHorizontalDragUpdate = config.onHorizontalDragUpdate;
            v.onHorizontalDragEnd = config.onHorizontalDragEnd;
            v.onHorizontalDragCancel = config.onHorizontalDragCancel;
            v.onPanDown = config.onPanDown;
            v.onPanStart = config.onPanStart;
            v.onPanUpdate = config.onPanUpdate;
            v.onPanEnd = config.onPanEnd;
            v.onPanCancel = config.onPanCancel;
            v.onScaleStart = config.onScaleStart;
            v.onScaleUpdate = config.onScaleUpdate;
            v.onScaleEnd = config.onScaleEnd;
            v.behavior = config.behavior;
            v.excludeFromSemantics = config.excludeFromSemantics;
        }
        return v;
    }
}
exports.GestureDetector = GestureDetector;
class IntrinsicHeight extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, key?:BasicKey}
     */
    static new(config) {
        var v = new IntrinsicHeight();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
        }
        return v;
    }
}
exports.IntrinsicHeight = IntrinsicHeight;
class IntrinsicWidth extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, stepWidth?:number, stepHeight?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new IntrinsicWidth();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.stepWidth = config.stepWidth;
            v.stepHeight = config.stepHeight;
            v.child = config.child;
        }
        return v;
    }
}
exports.IntrinsicWidth = IntrinsicWidth;
class IndexedStack extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>,index?:number,alignment?:AlignmentDirectional, textDirection?:TextDirection, sizing?:StackFit, key?:BasicKey}
     */
    static new(config) {
        var v = new IndexedStack();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.textDirection = config.textDirection;
            v.sizing = config.sizing;
            v.index = config.index;
            v.children = config.children;
        }
        return v;
    }
}
exports.IndexedStack = IndexedStack;
class IconButton extends bt.FlutterWidget {
    /**
     * @param config config: {icon?:FlutterWidget, onPressed?:any, iconSize?:number, padding?:EdgeInsets, alignment?:Alignment,
      color?:Color, highlightColor?:Color, splashColor?:Color, disabledColor?:Color, tooltip?:string, key?:BasicKey,}
     */
    static new(config) {
        var v = new IconButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.iconSize = config.iconSize;
            v.padding = config.padding;
            v.alignment = config.alignment;
            v.icon = config.icon;
            v.color = config.color;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.disabledColor = config.disabledColor;
            v.onPressed = config.onPressed;
            v.tooltip = config.tooltip;
        }
        return v;
    }
}
exports.IconButton = IconButton;
class Icon extends bt.FlutterWidget {
    /**
     * @param config config: {icon?:IconData, size?:number, color?:Color, semanticLabel?:string, textDirection?:TextDirection, key?:BasicKey}
     */
    static new(config) {
        var v = new Icon();
        if (config != null && config != undefined) {
            v.icon = config.icon;
            v.key = config.key;
            v.size = config.size;
            v.color = config.color;
            v.semanticLabel = config.semanticLabel;
            v.textDirection = config.textDirection;
        }
        return v;
    }
}
exports.Icon = Icon;
class Image extends bt.FlutterWidget {
    /**
     * @param config config: {image:any,fit?:BoxFit,repeat?:ImageRepeat,alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
     filterQuality?:FilterQuality, key?:BasicKey}
     */
    static new(config) {
        var v = new Image();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.image = config.image;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.filterQuality = config.filterQuality;
        }
        return v;
    }
    /**
     * @param src src:string
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,headers?:Map<string,string>,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static network(src, config) {
        let v = new Image();
        v.constructorName = "network";
        v.src = src;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.filterQuality = config.filterQuality;
            v.headers = config.headers;
        }
        return v;
    }
    /**
     * @param imageFile imageFile:File
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static file(imageFile, config) {
        let v = new Image();
        v.constructorName = "file";
        v.imageFile = imageFile;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.filterQuality = config.filterQuality;
        }
        return v;
    }
    /**
     * @param config config: {imageName?:string,bundle?:BasicAssetBundle,packageName?:string, scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number,
      color?:Color, semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static asset(config) {
        let v = new Image();
        v.constructorName = "asset";
        if (config != null && config != undefined) {
            v.imageName = config.imageName;
            v.key = config.key;
            v.bundle = config.bundle;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.scale = config.scale;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.packageName = config.packageName;
            v.filterQuality = config.filterQuality;
        }
        return v;
    }
    /**
     * @param bytes bytes:Uint8List
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static memory(bytes, config) {
        let v = new Image();
        v.constructorName = "memory";
        v.bytes = bytes;
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scale = config.scale;
            v.semanticLabel = config.semanticLabel;
            v.excludeFromSemantics = config.excludeFromSemantics;
            v.width = config.width;
            v.height = config.height;
            v.color = config.color;
            v.colorBlendMode = config.colorBlendMode;
            v.fit = config.fit;
            v.alignment = config.alignment;
            v.repeat = config.repeat;
            v.centerSlice = config.centerSlice;
            v.matchTextDirection = config.matchTextDirection;
            v.gaplessPlayback = config.gaplessPlayback;
            v.filterQuality = config.filterQuality;
        }
        return v;
    }
}
exports.Image = Image;
class LimitedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, maxWidth?:number, maxHeight?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new LimitedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.maxWidth = config.maxWidth;
            v.maxHeight = config.maxHeight;
            v.child = config.child;
        }
        return v;
    }
}
exports.LimitedBox = LimitedBox;
class ListBody extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, reverse?:boolean, mainAxis?:Axis, key?:BasicKey}
     */
    static new(config) {
        var v = new ListBody();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.mainAxis = config.mainAxis;
            v.reverse = config.reverse;
            v.children = config.children;
        }
        return v;
    }
}
exports.ListBody = ListBody;
class ListTile extends bt.FlutterWidget {
    /**
     * @param config config: {leading?:FlutterWidget, title?:FlutterWidget, subtitle?:FlutterWidget, trailing?:FlutterWidget, onTap?:any, onLongPress?:any,
      selected?:boolean, isThreeLine?:boolean, dense?:boolean, contentPadding?:EdgeInsets, enabled?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new ListTile();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.leading = config.leading;
            v.title = config.title;
            v.subtitle = config.subtitle;
            v.trailing = config.trailing;
            v.isThreeLine = config.isThreeLine;
            v.dense = config.dense;
            v.contentPadding = config.contentPadding;
            v.enabled = config.enabled;
            v.onTap = config.onTap;
            v.onLongPress = config.onLongPress;
            v.selected = config.selected;
        }
        return v;
    }
}
exports.ListTile = ListTile;
class ListView extends bt.FlutterWidget {
    preBuild(jsWidgetHelper, buildContext) {
        if (this.itemBuilder) {
            this.children = [];
            if (this.itemCount != null && this.itemCount != undefined) {
                for (let i = 0; i < this.itemCount; ++i) {
                    let w = this.itemBuilder(buildContext, i);
                    this.children.push(w);
                }
            }
            delete this.itemBuilder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config: {children?:Array<FlutterWidget>, padding?:EdgeInsets, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      primary?:boolean, physics?:ScrollPhysics, shrinkWrap?:boolean, itemExtent?:number,
      addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, cacheExtent?:number,
      semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config) {
        var v = new ListView();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.padding = config.padding;
            v.itemExtent = config.itemExtent;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.cacheExtent = config.cacheExtent;
            v.children = config.children;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        return v;
    }
    /**
     * @param config config: {itemBuilder?:any,itemCount?:number, padding?:EdgeInsets, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      primary?:boolean, physics?:ScrollPhysics, shrinkWrap?:boolean, itemExtent?:number,
      addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, cacheExtent?:number,
      semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static builder(config) {
        let v = new ListView();
        v.constructorName = "builder";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.controller = config.controller;
            v.primary = config.primary;
            v.physics = config.physics;
            v.shrinkWrap = config.shrinkWrap;
            v.padding = config.padding;
            v.itemExtent = config.itemExtent;
            v.itemBuilder = config.itemBuilder;
            v.itemCount = config.itemCount;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.cacheExtent = config.cacheExtent;
            v.semanticChildCount = config.semanticChildCount;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        return v;
    }
}
exports.ListView = ListView;
class LayoutBuilder extends bt.FlutterWidget {
    /**
     * @param config config: {builder?:any, key?:BasicKey}
     */
    static new(config) {
        var v = new LayoutBuilder();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.builder = config.builder;
        }
        return v;
    }
}
exports.LayoutBuilder = LayoutBuilder;
class Material extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,elevation?:number, color?:Color, shadowColor?:Color, textStyle?:TextStyle,
      borderRadius?:BorderRadius, type?:MaterialType, shape?:any, borderOnForeground?:boolean, clipBehavior?:Clip,
      animationDuration?:Duration, key?:BasicKey,}
     */
    static new(config) {
        var v = new Material();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.type = config.type;
            v.elevation = config.elevation;
            v.color = config.color;
            v.shadowColor = config.shadowColor;
            v.textStyle = config.textStyle;
            v.borderRadius = config.borderRadius;
            v.shape = config.shape;
            v.borderOnForeground = config.borderOnForeground;
            v.clipBehavior = config.clipBehavior;
            v.animationDuration = config.animationDuration;
            v.child = config.child;
        }
        return v;
    }
}
exports.Material = Material;
class MaterialPageRoute extends bt.FlutterWidget {
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            this.child = this.builder(buildContext);
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config: {builder?:any, settings?:any, maintainState?:boolean, fullscreenDialog?:boolean}
     */
    static new(config) {
        var v = new MaterialPageRoute();
        if (config != null && config != undefined) {
            v.builder = config.builder;
            v.settings = config.settings;
            v.maintainState = config.maintainState;
            v.fullscreenDialog = config.fullscreenDialog;
        }
        v.child = undefined;
        return v;
    }
}
exports.MaterialPageRoute = MaterialPageRoute;
//****** MemoryImage ******
class MemoryImage extends bt.FlutterWidget {
    static new(bytes, scale) {
        var v = new MemoryImage();
        v.bytes = bytes;
        v.scale = scale;
        return v;
    }
}
exports.MemoryImage = MemoryImage;
//****** NotificationListener ******
class NotificationListener extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,key?:BasicKey}
     */
    static new(config) {
        var v = new NotificationListener();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
        }
        return v;
    }
}
exports.NotificationListener = NotificationListener;
class NestedScrollView extends bt.FlutterWidget {
    preBuild(jsWidgetHelper, buildContext) {
        ///TODO: innerBoxIsScrolled 暂时不支持，默认为false
        if (this.headerSliverBuilder) {
            this.children = this.headerSliverBuilder(buildContext);
            delete this.headerSliverBuilder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config: {body?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      physics?:ScrollPhysics, headerSliverBuilder?:any, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config) {
        var v = new NestedScrollView();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.controller = config.controller;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.physics = config.physics;
            v.headerSliverBuilder = config.headerSliverBuilder;
            v.body = config.body;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        // 本地创建的，供flutter使用
        v.children = [];
        return v;
    }
}
exports.NestedScrollView = NestedScrollView;
//****** NavigatorState ******
class NavigatorState extends bt.DartClass {
    push(t, materialPageRoute) {
        this.context.widget.helper.navigatorPush(materialPageRoute.builder(this.context));
    }
    pop(t) {
        this.context.widget.helper.navigatorPop();
    }
    static new(context) {
        var v = new NavigatorState();
        v.context = context;
        return v;
    }
}
exports.NavigatorState = NavigatorState;
class Navigator extends bt.DartClass {
    static push(context, materialPageRoute) {
        let t = null;
        if (arguments.length == 3) {
            t = arguments[0];
            context = arguments[1];
            materialPageRoute = arguments[2];
        }
        var navigatorState = NavigatorState.new(context);
        navigatorState.push(t, materialPageRoute);
    }
    static pop(context) {
        let t = null;
        if (arguments.length == 2) {
            t = arguments[0];
            context = arguments[1];
        }
        var navigatorState = NavigatorState.new(context);
        navigatorState.pop(t);
    }
    static of(context, opt) {
        var navigatorState = NavigatorState.new(context);
        return navigatorState;
    }
    /**
     * @param config config: {initialRoute?:string,onGenerateRoute?:any, onUnknownRoute?:any, observers?:any, key?:BasicKey}
     */
    static new(config) {
        var v = new Navigator();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.initialRoute = config.initialRoute;
            v.onGenerateRoute = config.onGenerateRoute;
            v.onUnknownRoute = config.onUnknownRoute;
            v.observers = config.observers;
        }
        return v;
    }
}
exports.Navigator = Navigator;
class NetworkImage extends bt.FlutterWidget {
    /**
     * @param config config: {scale?:number, headers?:Map<string,string>}
     */
    static new(url, config) {
        var v = new NetworkImage();
        v.url = url;
        if (config != null && config != undefined) {
            v.scale = config.scale;
            v.headers = config.headers;
        }
        return v;
    }
}
exports.NetworkImage = NetworkImage;
class Opacity extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, opacity?:number, alwaysIncludeSemantics?:boolean,key?:BasicKey }
     */
    static new(config) {
        var v = new Opacity();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.opacity = config.opacity;
            v.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
            v.child = config.child;
        }
        return v;
    }
}
exports.Opacity = Opacity;
class Offstage extends bt.FlutterWidget {
    /**
     * @param config config: {child?:.FlutterWidget, offstage?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new Offstage();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.offstage = config.offstage;
            v.child = config.child;
        }
        return v;
    }
}
exports.Offstage = Offstage;
class OverflowBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, minWidth?:number, maxWidth?:number, minHeight?:number, maxHeight?:number, key?:BasicKey,}
     */
    static new(config) {
        var v = new OverflowBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.minWidth = config.minWidth;
            v.maxWidth = config.maxWidth;
            v.minHeight = config.minHeight;
            v.maxHeight = config.maxHeight;
            v.child = config.child;
        }
        return v;
    }
}
exports.OverflowBox = OverflowBox;
class Padding extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, padding?:EdgeInsets, key?:BasicKey}
     */
    static new(config) {
        var v = new Padding();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.padding = config.padding;
            v.child = config.child;
        }
        return v;
    }
}
exports.Padding = Padding;
class Positioned extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,width?:number,height?:number,key?:BasicKey}
     */
    static new(config) {
        var v = new Positioned();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.width = config.width;
            v.height = config.height;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config: {child?:FlutterWidget, rect?:Rect, key?:BasicKey}
     */
    static fromRect(config) {
        var _a, _b, _c, _d;
        let v = new Positioned();
        v.constructorName = "fromRect";
        if (config != null && config != undefined) {
            v.key = config.key;
            v.left = (_a = config.rect) === null || _a === void 0 ? void 0 : _a.left;
            v.top = (_b = config.rect) === null || _b === void 0 ? void 0 : _b.top;
            v.width = (_c = config.rect) === null || _c === void 0 ? void 0 : _c.width;
            v.height = (_d = config.rect) === null || _d === void 0 ? void 0 : _d.height;
            v.child = config.child;
        }
        return v;
    }
}
exports.Positioned = Positioned;
class PreferredSize extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,preferredSize?:Size,key?:BasicKey,}
     */
    static new(config) {
        var v = new PreferredSize();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
            v.preferredSize = config.preferredSize;
        }
        return v;
    }
}
exports.PreferredSize = PreferredSize;
//****** PreferredSize ******
class PreferredSizeWidget extends bt.FlutterWidget {
    static new() {
        return new PreferredSizeWidget();
    }
}
exports.PreferredSizeWidget = PreferredSizeWidget;
class Placeholder extends bt.FlutterWidget {
    /**
     * @param config config: {color?:Color,strokeWidth?:number,fallbackWidth?:number,fallbackHeight?:number,key?:BasicKey,}
     */
    static new(config) {
        var v = new Placeholder();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.color = config.color;
            v.strokeWidth = config.strokeWidth;
            v.fallbackWidth = config.fallbackWidth;
            v.fallbackHeight = config.fallbackHeight;
        }
        return v;
    }
}
exports.Placeholder = Placeholder;
class PopupMenuButton extends bt.FlutterWidget {
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
    /**
     * @param config config: {itemBuilder?:any, initialValue?:any, onSelected?:any, onCanceled?:any, tooltip?:string,elevation?:number,
      padding?:EdgeInsets,child?:FlutterWidget,icon?:FlutterWidget, offset?:Offset, key?:BasicKey}
     */
    static new(config) {
        var v = new PopupMenuButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.itemBuilder = config.itemBuilder;
            v.initialValue = config.initialValue;
            v.onSelected = config.onSelected;
            v.onCanceled = config.onCanceled;
            v.tooltip = config.tooltip;
            v.elevation = config.elevation;
            v.padding = config.padding;
            v.child = config.child;
            v.icon = config.icon;
            v.offset = config.offset;
        }
        // 本地创建的，供flutter使用
        v.children = [];
        return v;
    }
}
exports.PopupMenuButton = PopupMenuButton;
class PopupMenuItem extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, value?:any, enabled?:boolean, height?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new PopupMenuItem();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.value = config.value;
            v.enabled = config.enabled;
            v.height = config.height;
            v.child = config.child;
        }
        return v;
    }
}
exports.PopupMenuItem = PopupMenuItem;
class Row extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, crossAxisAlignment?:CrossAxisAlignment,
      textDirection?:TextDirection, verticalDirection?:VerticalDirection, textBaseline?:TextBaseline, key?:BasicKey,}
     */
    static new(config) {
        var v = new Row();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.mainAxisAlignment = config.mainAxisAlignment;
            v.mainAxisSize = config.mainAxisSize;
            v.crossAxisAlignment = config.crossAxisAlignment;
            v.textDirection = config.textDirection;
            v.verticalDirection = config.verticalDirection;
            v.textBaseline = config.textBaseline;
            v.children = config.children;
        }
        return v;
    }
}
exports.Row = Row;
class RaisedButton extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets,
      textColor?:Color, disabledTextColor?:Color, color?:Color, disabledColor?:Color,
      highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness, elevation?:number,
      highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:Clip,
      materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BasicKey}
     */
    static new(config) {
        var v = new RaisedButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.onHighlightChanged = config.onHighlightChanged;
            v.textColor = config.textColor;
            v.disabledTextColor = config.disabledTextColor;
            v.color = config.color;
            v.disabledColor = config.disabledColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.colorBrightness = config.colorBrightness;
            v.elevation = config.elevation;
            v.highlightElevation = config.highlightElevation;
            v.disabledElevation = config.disabledElevation;
            v.padding = config.padding;
            v.shape = config.shape;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.animationDuration = config.animationDuration;
            v.child = config.child;
        }
        return v;
    }
    /**
     * @param config config: {icon?:bt.FlutterWidget, label?:bt.FlutterWidget,onPressed?:any, onHighlightChanged?:any, padding?:bt.EdgeInsets,
    textColor?:bt.Color, disabledTextColor?:bt.Color, color?:bt.Color, disabledColor?:bt.Color,
    highlightColor?:bt.Color, splashColor?:bt.Color, colorBrightness?:bt.Brightness, elevation?:number,
    highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:bt.Clip,
    materialTapTargetSize?:bt.MaterialTapTargetSize, animationDuration?:bt.Duration, key?:bt.BasicKey}
     */
    static icon(config) {
        let v = new RaisedButton();
        v.staticFunctionName = "icon";
        if (config != null && config != undefined) {
            {
                v.key = config.key;
                v.onPressed = config.onPressed;
                v.padding = config.padding;
                v.onHighlightChanged = config.onHighlightChanged;
                v.textColor = config.textColor;
                v.disabledTextColor = config.disabledTextColor;
                v.color = config.color;
                v.disabledColor = config.disabledColor;
                v.highlightColor = config.highlightColor;
                v.splashColor = config.splashColor;
                v.colorBrightness = config.colorBrightness;
                v.elevation = config.elevation;
                v.highlightElevation = config.highlightElevation;
                v.disabledElevation = config.disabledElevation;
                v.shape = config.shape;
                v.clipBehavior = config.clipBehavior;
                v.materialTapTargetSize = config.materialTapTargetSize;
                v.animationDuration = config.animationDuration;
                v.icon = config.icon;
                v.label = config.label;
            }
            return v;
        }
    }
}
exports.RaisedButton = RaisedButton;
class Radio extends bt.FlutterWidget {
    /**
     * @param config config: {value?:any, groupValue?:any, onChanged?:any, activeColor?:Color,  materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static new(config) {
        var v = new Radio();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.value = config.value;
            v.groupValue = config.groupValue;
            v.onChanged = config.onChanged;
            v.activeColor = config.activeColor;
            v.materialTapTargetSize = config.materialTapTargetSize;
        }
        return v;
    }
}
exports.Radio = Radio;
class RawMaterialButton extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets, textStyle?:TextStyle, fillColor?:Color,
      highlightColor?:Color, splashColor?:Color, constraints?:BoxConstraints, elevation?:number, highlightElevation?:number,
      disabledElevation?:number, shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BasicKey}
     */
    static new(config) {
        var v = new RawMaterialButton();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.onPressed = config.onPressed;
            v.onHighlightChanged = config.onHighlightChanged;
            v.textStyle = config.textStyle;
            v.fillColor = config.fillColor;
            v.highlightColor = config.highlightColor;
            v.splashColor = config.splashColor;
            v.elevation = config.elevation;
            v.highlightElevation = config.highlightElevation;
            v.disabledElevation = config.disabledElevation;
            v.padding = config.padding;
            v.constraints = config.constraints;
            v.shape = config.shape;
            v.animationDuration = config.animationDuration;
            v.clipBehavior = config.clipBehavior;
            v.materialTapTargetSize = config.materialTapTargetSize;
            v.child = config.child;
        }
        return v;
    }
}
exports.RawMaterialButton = RawMaterialButton;
class RichText extends bt.FlutterWidget {
    /**
     * @param config config: {text?:FlutterWidget, textAlign?:TextAlign, textDirection?:TextDirection, softWrap?:boolean, overflow?:Overflow,
      textScaleFactor?:number, maxLines?:number, key?:BasicKey,}
     */
    static new(config) {
        var v = new RichText();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.text = config.text;
            v.textAlign = config.textAlign;
            v.textDirection = config.textDirection;
            v.softWrap = config.softWrap;
            v.overflow = config.overflow;
            v.textScaleFactor = config.textScaleFactor;
            v.maxLines = config.maxLines;
        }
        return v;
    }
}
exports.RichText = RichText;
class Slider extends bt.FlutterWidget {
    /**
     * @param config config: {value?:number,onChanged?:any,onChangeStart?:any,onChangeEnd?:any,min?:number,max?:number,
      divisions?:number,label?:string,activeColor?:olor,inactiveColor?:.Color,semanticFormatterCallback?:any,key?:BasicKey,}
     */
    static new(config) {
        var v = new Slider();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.value = config.value;
            v.onChanged = config.onChanged;
            v.onChangeStart = config.onChangeStart;
            v.onChangeEnd = config.onChangeEnd;
            v.min = config.min;
            v.max = config.max;
            v.divisions = config.divisions;
            v.label = config.label;
            v.activeColor = config.activeColor;
            v.inactiveColor = config.inactiveColor;
            v.semanticFormatterCallback = config.semanticFormatterCallback;
        }
        return v;
    }
}
exports.Slider = Slider;
class SizedBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, width?:number, height?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new SizedBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.width = config.width;
            v.height = config.height;
            v.child = config.child;
        }
        return v;
    }
}
exports.SizedBox = SizedBox;
class SizedOverflowBox extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, size?:Size, key?:BasicKey}
     */
    static new(config) {
        var v = new SizedOverflowBox();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.size = config.size;
            v.alignment = config.alignment;
            v.child = config.child;
        }
        return v;
    }
}
exports.SizedOverflowBox = SizedOverflowBox;
class Stack extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, alignment?:AlignmentDirectional, textDirection?:TextDirection,
      fit?:StackFit, overflow?:Overflow, key?:BasicKey}
     */
    static new(config) {
        var v = new Stack();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.alignment = config.alignment;
            v.textDirection = config.textDirection;
            v.fit = config.fit;
            v.overflow = config.overflow;
            v.children = config.children;
        }
        return v;
    }
}
exports.Stack = Stack;
class SliverAppBar extends bt.FlutterWidget {
    /**
     * @param config config: {leading?:FlutterWidget, automaticallyImplyLeading?:boolean, centerTitle?:boolean, title?:FlutterWidget,
      actions?:Array<FlutterWidget>, flexibleSpace?:FlutterWidget, bottom?:FlutterWidget, elevation?:number, forceElevated?:boolean,
      backgroundColor?:Color, brightness?:Brightness, iconTheme?:IconThemeData, primary?:boolean, titleSpacing?:number,
      expandedHeight?:number, floating?:boolean, pinned?:boolean, snap?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new SliverAppBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.leading = config.leading;
            v.automaticallyImplyLeading = config.automaticallyImplyLeading;
            v.title = config.title;
            v.actions = config.actions;
            v.flexibleSpace = config.flexibleSpace;
            v.bottom = config.bottom;
            v.elevation = config.elevation;
            v.forceElevated = config.forceElevated;
            v.backgroundColor = config.backgroundColor;
            v.brightness = config.brightness;
            v.iconTheme = config.iconTheme;
            v.primary = config.primary;
            v.centerTitle = config.centerTitle;
            v.titleSpacing = config.titleSpacing;
            v.expandedHeight = config.expandedHeight;
            v.floating = config.floating;
            v.pinned = config.pinned;
            v.snap = config.snap;
        }
        return v;
    }
}
exports.SliverAppBar = SliverAppBar;
class SliverPadding extends bt.FlutterWidget {
    /**
     * @param config config: {sliver?:FlutterWidget, padding?:EdgeInsets, key?:BasicKey}
     */
    static new(config) {
        var v = new SliverPadding();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.padding = config.padding;
            v.sliver = config.sliver;
        }
        return v;
    }
}
exports.SliverPadding = SliverPadding;
class SliverGrid extends bt.FlutterWidget {
    /**
     * @param config config: {delegate?:any, gridDelegate?:any, key?:BasicKey,}
     */
    static new(config) {
        var v = new SliverGrid();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
            v.gridDelegate = config.gridDelegate;
        }
        return v;
    }
}
exports.SliverGrid = SliverGrid;
class SliverGridDelegateWithMaxCrossAxisExtent extends bt.FlutterWidget {
    /**
     * @param config config: {maxCrossAxisExtent?:number, mainAxisSpacing?:number, crossAxisSpacing?:number, childAspectRatio?:number,}
     */
    static new(config) {
        var v = new SliverGridDelegateWithMaxCrossAxisExtent();
        if (config != null && config != undefined) {
            v.maxCrossAxisExtent = config.maxCrossAxisExtent;
            v.mainAxisSpacing = config.mainAxisSpacing;
            v.crossAxisSpacing = config.crossAxisSpacing;
            v.childAspectRatio = config.childAspectRatio;
        }
        return v;
    }
}
exports.SliverGridDelegateWithMaxCrossAxisExtent = SliverGridDelegateWithMaxCrossAxisExtent;
class SliverChildListDelegate extends bt.DartClass {
    /**
     * @param config config: {children?:Array<FlutterWidget>, addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, semanticIndexOffset?:number,}
     */
    static new(config) {
        var v = new SliverChildListDelegate();
        if (config != null && config != undefined) {
            v.children = config.children;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.semanticIndexOffset = config.semanticIndexOffset;
        }
        return v;
    }
}
exports.SliverChildListDelegate = SliverChildListDelegate;
class SliverChildBuilderDelegate extends bt.FlutterWidget {
    preBuild(jsWidgetHelper, buildContext) {
        if (this.builder) {
            if (this.childCount != null && this.childCount != undefined) {
                for (let i = 0; i < this.childCount; ++i) {
                    let w = this.builder(buildContext, i);
                    if (this.children != null && this.children != undefined) {
                        this.children.push(w);
                    }
                }
            }
            delete this.builder;
        }
        super.preBuild(jsWidgetHelper, buildContext);
    }
    /**
     * @param config config: { builder:any, childCount?:number, addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, semanticIndexOffset?:number, }
     */
    static new(config) {
        var v = new SliverChildBuilderDelegate();
        if (config != null && config != undefined) {
            v.builder = config.builder;
            v.childCount = config.childCount;
            v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
            v.addRepaintBoundaries = config.addRepaintBoundaries;
            v.addSemanticIndexes = config.addSemanticIndexes;
            v.semanticIndexOffset = config.semanticIndexOffset;
        }
        // 本地创建的，供flutter使用
        v.children = [];
        return v;
    }
}
exports.SliverChildBuilderDelegate = SliverChildBuilderDelegate;
class SliverList extends bt.FlutterWidget {
    /**
     * @param config config: {delegate?:any,key?:BasicKey}
     */
    static new(config) {
        var v = new SliverList();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
        }
        return v;
    }
}
exports.SliverList = SliverList;
class SliverOverlapInjector extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,handle?:any,key?:BasicKey}
     */
    static new(config) {
        var v = new SliverOverlapInjector();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.handle = config.handle;
            v.child = config.child;
        }
        return v;
    }
}
exports.SliverOverlapInjector = SliverOverlapInjector;
class SliverFixedExtentList extends bt.FlutterWidget {
    /**
     * @param config config: {delegate?:any, itemExtent?:number, key?:BasicKey}
     */
    static new(config) {
        var v = new SliverFixedExtentList();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.delegate = config.delegate;
            v.itemExtent = config.itemExtent;
        }
        return v;
    }
}
exports.SliverFixedExtentList = SliverFixedExtentList;
class SliverOverlapAbsorber extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,handle?:any,key?:BasicKey}
     */
    static new(config) {
        var v = new SliverOverlapAbsorber();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.handle = config.handle;
            v.child = config.child;
        }
        return v;
    }
}
exports.SliverOverlapAbsorber = SliverOverlapAbsorber;
class SingleChildScrollView extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, scrollDirection?:Axis, reverse?:boolean, padding?:EdgeInsets, primary?:boolean,
      physics?:ScrollPhysics, controller?:ScrollController, dragStartBehavior?:DragStartBehavior, key?:BasicKey,}
     */
    static new(config) {
        var v = new SingleChildScrollView();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.scrollDirection = config.scrollDirection;
            v.reverse = config.reverse;
            v.padding = config.padding;
            v.primary = config.primary;
            v.physics = config.physics;
            v.controller = config.controller;
            v.child = config.child;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        return v;
    }
}
exports.SingleChildScrollView = SingleChildScrollView;
class SliverToBoxAdapter extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,key?:BasicKey}
     */
    static new(config) {
        var v = new SliverToBoxAdapter();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.child = config.child;
        }
        return v;
    }
}
exports.SliverToBoxAdapter = SliverToBoxAdapter;
class Scaffold extends bt.FlutterWidget {
    //FIXME,github mergegithub merge
    static of(context) {
        return {
            showSnackBar: function (snackBar) {
                //准备调用Native方法执行真正的 showSnackBar动作
                //1.把这里的context和snackBar数据传递到native层 ✔️
                //2.通过context找到Native里的 Scaffold.of(context) ？
                //3.解析snackBar为真snackBar对象 ✔️
                //4.执行调用
                console.log("showSnackBar in js call native-->");
                /*let argument = new FlutterCallArgs({
                  widgetID: context.widgetID,
                  className: 'Scaffold',
                  funcName: 'of',
                  args: {
                    snackBar: snackBar,
                  },
                });*/
                //invokeCommonFlutterFunction(argument);
            },
            openDrawer: function () {
                console.log("showSnackBar in js call native-->");
            },
        };
    }
    /**
     * @param config config: {appBar?:FlutterWidget, body?:FlutterWidget, floatingActionButton?:FlutterWidget, floatingActionButtonLocation?:FloatingActionButtonLocation,
      persistentFooterButtons?:Array<FlutterWidget>, drawer?:FlutterWidget, endDrawer?:FlutterWidget, bottomNavigationBar?:FlutterWidget, bottomSheet?:FlutterWidget,
      backgroundColor?:Color, resizeToAvoidBottomPadding?:boolean, primary?:boolean, key?:BasicKey}
     */
    static new(config) {
        var v = new Scaffold();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.appBar = config.appBar;
            v.body = config.body;
            v.floatingActionButton = config.floatingActionButton;
            v.floatingActionButtonLocation = config.floatingActionButtonLocation;
            v.persistentFooterButtons = config.persistentFooterButtons;
            v.drawer = config.drawer;
            v.endDrawer = config.endDrawer;
            v.bottomNavigationBar = config.bottomNavigationBar;
            v.bottomSheet = config.bottomSheet;
            v.backgroundColor = config.backgroundColor;
            v.resizeToAvoidBottomPadding = config.resizeToAvoidBottomPadding;
            v.primary = config.primary;
        }
        return v;
    }
}
exports.Scaffold = Scaffold;
//****** Scaffold ******
class ScaffoldState extends bt.DartClass {
    static new() {
        return new ScaffoldState();
    }
}
exports.ScaffoldState = ScaffoldState;
class SafeArea extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,minimum?:number,key?:BasicKey}
     */
    static new(config) {
        var v = new SafeArea();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.left = config.left;
            v.top = config.top;
            v.right = config.right;
            v.bottom = config.bottom;
            v.minimum = config.minimum;
            v.child = config.child;
        }
        return v;
    }
}
exports.SafeArea = SafeArea;
//****** Scrollbar ******
class Scrollbar extends bt.FlutterWidget {
    /**
     * @param config config: {}
     */
    static new(child, key) {
        var v = new Scrollbar();
        v.key = key;
        v.child = child;
        return v;
    }
}
exports.Scrollbar = Scrollbar;
class SnackBar extends bt.FlutterWidget {
    /**
     * @param config config: {content?:bt.FlutterWidget, backgroundColor?:bt.Color, elevation?:number, shape?:any, behavior?:any,
      action?:any, duration?:bt.Duration, animation?:any, onVisible?:any, key?:bt.FlutterWidget}
     */
    static new(config) {
        var v = new SnackBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.content = config.content;
            v.backgroundColor = config.backgroundColor;
            v.elevation = config.elevation;
            v.shape = config.shape;
            v.behavior = config.behavior;
            v.action = config.action;
            v.duration = config.duration;
            v.animation = config.animation;
            v.onVisible = config.onVisible;
        }
        return v;
    }
}
exports.SnackBar = SnackBar;
class TableRow extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>,decoration?:BoxDecoration,key?:BasicKey,}
     */
    static new(config) {
        var v = new TableRow();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.decoration = config.decoration;
            v.children = config.children;
        }
        return v;
    }
}
exports.TableRow = TableRow;
class TableCell extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, verticalAlignment?:TableCellVerticalAlignment, key?:BasicKey,}
     */
    static new(config) {
        var v = new TableCell();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.verticalAlignment = config.verticalAlignment;
            v.child = config.child;
        }
        return v;
    }
}
exports.TableCell = TableCell;
class Transform extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, origin?:Offset, transform?:Matrix4, transformHitTests?:boolean, key?:BasicKey,}
     */
    static new(config) {
        var v = new Transform();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.transform = config.transform;
            v.origin = config.origin;
            v.alignment = config.alignment;
            v.transformHitTests = config.transformHitTests;
            v.child = config.child;
        }
        return v;
    }
}
exports.Transform = Transform;
class Table extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, defaultColumnWidth?:TableColumnWidth, defaultVerticalAlignment?:TableCellVerticalAlignment,
      textDirection?:TextDecoration, border?:TableBorder, textBaseline?:TextBaseline,  columnWidths?:Map<string,TableColumnWidth>, key?:BasicKey,}
     */
    static new(config) {
        var v = new Table();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.children = config.children;
            v.columnWidths = config.columnWidths;
            v.defaultColumnWidth = config.defaultColumnWidth;
            v.textDirection = config.textDirection;
            v.border = config.border;
            v.defaultVerticalAlignment = config.defaultVerticalAlignment;
            v.textBaseline = config.textBaseline;
        }
        return v;
    }
}
exports.Table = Table;
class TabBar extends bt.FlutterWidget {
    /**
    * @param config config: {tabs?:Array<Tab>, onTap?:any, controller?:TabController, isScrollable?:boolean, indicatorColor?:Color, indicatorWeight?:number,
   indicatorPadding?:EdgeInsets,  indicator?:BoxDecoration, indicatorSize?:TabBarIndicatorSize,
   labelColor?:Color, labelStyle?:TextStyle, labelPadding?:EdgeInsets, unselectedLabelColor?:Color,
   unselectedLabelStyle?:TextStyle, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
    */
    static new(config) {
        var v = new TabBar();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.tabs = config.tabs;
            v.controller = config.controller;
            v.isScrollable = config.isScrollable;
            v.indicatorColor = config.indicatorColor;
            v.indicatorWeight = config.indicatorWeight;
            v.indicatorPadding = config.indicatorPadding;
            v.indicator = config.indicator;
            v.indicatorSize = config.indicatorSize;
            v.labelColor = config.labelColor;
            v.labelStyle = config.labelStyle;
            v.labelPadding = config.labelPadding;
            v.unselectedLabelColor = config.unselectedLabelColor;
            v.unselectedLabelStyle = config.unselectedLabelStyle;
            v.dragStartBehavior = config.dragStartBehavior;
            v.onTap = config.onTap;
        }
        return v;
    }
}
exports.TabBar = TabBar;
class Tab extends bt.FlutterWidget {
    /**
     * @param config config: {child?:FlutterWidget,text?:string, icon?:FlutterWidget, iconMargin?:EdgeInsets, key?:BasicKey}
     */
    static new(config) {
        var v = new Tab();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.text = config.text;
            v.icon = config.icon;
            v.child = config.child;
        }
        return v;
    }
}
exports.Tab = Tab;
class TabBarView extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, controller?:TabController, physics?:ScrollPhysics, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config) {
        var v = new TabBarView();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.children = config.children;
            v.controller = config.controller;
            v.physics = config.physics;
            v.dragStartBehavior = config.dragStartBehavior;
        }
        return v;
    }
}
exports.TabBarView = TabBarView;
class TextSpan extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, style?:TextStyle, text?:string, recognizer?:GestureDetector, semanticsLabel?:string,}
     */
    static new(config) {
        var v = new TextSpan();
        if (config != null && config != undefined) {
            v.children = config.children;
            v.style = config.style;
            v.text = config.text;
            v.recognizer = config.recognizer;
            v.semanticsLabel = config.semanticsLabel;
        }
        return v;
    }
}
exports.TextSpan = TextSpan;
class TextFormField extends bt.FlutterWidget {
    /**
     * @param config config: {controller?:TextEditingController,
      initialValue?:string, focusNode?:any, decoration?:InputDecoration,
      keyboardType?:TextInputType, textCapitalization?:TextCapitalization,
      textInputAction?:TextInputAction, style?:TextStyle,
      textDirection?:TextDirection, textAlign?:TextAlign,
      autofocus?:boolean, obscureText?:boolean, autocorrect?:boolean,
      autovalidate?:boolean,  maxLengthEnforced?:boolean, maxLines?:number, maxLength?:number,
      onEditingComplete?:any, onFieldSubmitted?:any, onSaved?:any, validator?:any, inputFormatters?:any,
      enabled?:boolean, cursorWidth?:number, cursorRadius?:Radius, cursorColor?:Color,
      keyboardAppearance?:Brightness, scrollPadding?:EdgeInsets, enableInteractiveSelection?:boolean,
      buildCounter?:any,key?:BasicKey }
     */
    static new(config) {
        var v = new TextFormField();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.controller = config.controller;
            v.initialValue = config.initialValue;
            v.focusNode = config.focusNode;
            v.decoration = config.decoration;
            v.keyboardType = config.keyboardType;
            v.textCapitalization = config.textCapitalization;
            v.textInputAction = config.textInputAction;
            v.style = config.style;
            v.textDirection = config.textDirection;
            v.textAlign = config.textAlign;
            v.autofocus = config.autofocus;
            v.obscureText = config.obscureText;
            v.autocorrect = config.autocorrect;
            v.autovalidate = config.autovalidate;
            v.maxLengthEnforced = config.maxLengthEnforced;
            v.maxLines = config.maxLines;
            v.maxLength = config.maxLength;
            v.onEditingComplete = config.onEditingComplete;
            v.onFieldSubmitted = config.onFieldSubmitted;
            v.onSaved = config.onSaved;
            v.validator = config.validator;
            v.inputFormatters = config.inputFormatters;
            v.enabled = config.enabled;
            v.cursorWidth = config.cursorWidth;
            v.cursorRadius = config.cursorRadius;
            v.cursorColor = config.cursorColor;
            v.keyboardAppearance = config.keyboardAppearance;
            v.scrollPadding = config.scrollPadding;
            v.enableInteractiveSelection = config.enableInteractiveSelection;
            v.buildCounter = config.buildCounter;
        }
        return v;
    }
}
exports.TextFormField = TextFormField;
class Wrap extends bt.FlutterWidget {
    /**
     * @param config config: {children?:Array<FlutterWidget>, alignment?:WrapAlignment, spacing?:number, crossAxisAlignment?:WrapCrossAlignment,
      textDirection?:TextDecoration, direction?:Axis, verticalDirection?:VerticalDirection, runAlignment?:WrapAlignment,
      runSpacing?:number, key?:BasicKey,}
     */
    static new(config) {
        var v = new Wrap();
        if (config != null && config != undefined) {
            v.key = config.key;
            v.direction = config.direction;
            v.alignment = config.alignment;
            v.spacing = config.spacing;
            v.runAlignment = config.runAlignment;
            v.runSpacing = config.runSpacing;
            v.crossAxisAlignment = config.crossAxisAlignment;
            v.textDirection = config.textDirection;
            v.verticalDirection = config.verticalDirection;
            v.children = config.children;
        }
        return v;
    }
}
exports.Wrap = Wrap;
//-------------- X -----------------
//-------------- Y -----------------
//-------------- Z -----------------
