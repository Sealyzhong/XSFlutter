import bt = require("./js_basic_types");
interface AppBarConfig {
    key?: bt.BasicKey;
    title?: bt.FlutterWidget;
    automaticallyImplyLeading?: boolean;
    actions?: Array<bt.FlutterWidget>;
    leading?: bt.FlutterWidget;
    flexibleSpace?: bt.FlutterWidget;
    bottom?: bt.FlutterWidget;
    elevation?: number;
    backgroundColor?: bt.Color;
    brightness?: bt.Brightness;
    primary?: boolean;
    centerTitle?: boolean;
    titleSpacing?: number;
    toolbarOpacity?: number;
    bottomOpacity?: number;
}
export declare class AppBar extends bt.FlutterWidget {
    key?: bt.BasicKey;
    title?: bt.FlutterWidget;
    automaticallyImplyLeading?: boolean;
    actions?: Array<bt.FlutterWidget>;
    leading?: bt.FlutterWidget;
    flexibleSpace?: bt.FlutterWidget;
    bottom?: bt.FlutterWidget;
    elevation?: number;
    backgroundColor?: bt.Color;
    brightness?: bt.Brightness;
    primary?: boolean;
    centerTitle?: boolean;
    titleSpacing?: number;
    toolbarOpacity?: number;
    bottomOpacity?: number;
    /**
     * @param config config: {key?:BasicKey,title?:FlutterWidget,automaticallyImplyLeading?:boolean,actions?:Array<FlutterWidget>,leading?:FlutterWidget,
      flexibleSpace?:FlutterWidget,bottom?:FlutterWidget,elevation?:number,backgroundColor?:Color,brightness?:Brightness,
      primary?:boolean,centerTitle?:boolean,titleSpacing?:number,toolbarOpacity?:number,bottomOpacity?:number }
     */
    static new(config?: AppBarConfig): AppBar;
}
interface AlignConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
}
export declare class Align extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget,alignment?:Alignment, widthFactor?:number, heightFactor?:number,}
     */
    static new(config?: AlignConfig): Align;
}
interface AspectRatioConfig {
    child?: bt.FlutterWidget;
    aspectRatio?: number;
    key?: bt.BasicKey;
}
export declare class AspectRatio extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    aspectRatio?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, aspectRatio?:number,}
     */
    static new(config?: AspectRatioConfig): AspectRatio;
}
interface AnnotatedRegionConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    value?: number;
    sized?: boolean;
}
export declare class AnnotatedRegion extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    value?: number;
    sized?: boolean;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, value?:number, sized?:boolean,}
     */
    static new(config?: AnnotatedRegionConfig): AnnotatedRegion;
}
interface AssetImageConfig {
    assetName?: string;
    bundle?: bt.BasicAssetBundle;
    packageName?: string;
}
export declare class AssetImage extends bt.FlutterWidget {
    assetName?: string;
    bundle?: bt.BasicAssetBundle;
    packageName?: string;
    /**
     * @param config config: {assetName:string, bundle?:BasicAssetBundle, packageName?:string}
     */
    static new(config?: AssetImageConfig): AssetImage;
}
interface AnimatedCrossFadeConfig {
    key?: bt.BasicKey;
    firstChild?: bt.FlutterWidget;
    secondChild?: bt.FlutterWidget;
    firstCurve?: bt.Curve;
    secondCurve?: bt.Curve;
    sizeCurve?: bt.Curve;
    alignment?: bt.Alignment;
    crossFadeState?: bt.CrossFadeState;
    duration?: bt.Duration;
    reverseDuration?: bt.Duration;
    layoutBuilder?: any;
}
export declare class AnimatedCrossFade extends bt.FlutterWidget {
    key?: bt.BasicKey;
    firstChild?: bt.FlutterWidget;
    secondChild?: bt.FlutterWidget;
    firstCurve?: bt.Curve;
    secondCurve?: bt.Curve;
    sizeCurve?: bt.Curve;
    alignment?: bt.Alignment;
    crossFadeState?: bt.CrossFadeState;
    duration?: bt.Duration;
    reverseDuration?: bt.Duration;
    layoutBuilder?: any;
    /**
     * @param config config: {key?:bt.BasicKey, firstChild?:bt.FlutterWidget, secondChild?:bt.FlutterWidget, firstCurve?:bt.Curve, secondCurve?:bt.Curve,
    sizeCurve?:bt.Curve, alignment?:bt.Alignment, crossFadeState?:bt.CrossFadeState, duration?:bt.Duration, reverseDuration?:bt.Duration, layoutBuilder?:any}
     */
    static new(config: AnimatedCrossFadeConfig): AnimatedCrossFade;
}
interface AnimatedOpacityConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    opacity?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    alwaysIncludeSemantics?: boolean;
}
export declare class AnimatedOpacity extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    opacity?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    alwaysIncludeSemantics?: boolean;
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, opacity?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any, alwaysIncludeSemantics?:boolean}
     */
    static new(config: AnimatedOpacityConfig): AnimatedOpacity;
}
interface AnimatedBuilderConfig {
    key?: bt.BasicKey;
    animation?: bt.Animation;
    builder?: any;
    child?: bt.FlutterWidget;
    widget?: bt.FlutterWidget;
}
export declare class AnimatedBuilder extends bt.FlutterWidget {
    key?: bt.BasicKey;
    animation?: bt.Animation;
    builder?: any;
    child?: bt.FlutterWidget;
    widget?: bt.FlutterWidget;
    /**
     * @param config config: {key?:bt.BasicKey, animation?:bt.Animation, builder?:any, child?:bt.FlutterWidget, widget?:bt.FlutterWidget,}
     */
    static new(config: AnimatedBuilderConfig): AnimatedBuilder;
}
interface AnimatedContainerConfig {
    key?: bt.BasicKey;
    alignment?: bt.Alignment;
    margin?: bt.EdgeInsets;
    padding?: bt.EdgeInsets;
    child?: bt.FlutterWidget;
    color?: bt.Color;
    decoration?: bt.BoxDecoration;
    foregroundDecoration?: bt.BoxDecoration;
    width?: number;
    height?: number;
    constraints?: bt.BoxConstraints;
    transform?: bt.Matrix4;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
}
export declare class AnimatedContainer extends bt.FlutterWidget {
    key?: bt.BasicKey;
    alignment?: bt.Alignment;
    margin?: bt.EdgeInsets;
    padding?: bt.EdgeInsets;
    child?: bt.FlutterWidget;
    color?: bt.Color;
    decoration?: bt.BoxDecoration;
    foregroundDecoration?: bt.BoxDecoration;
    width?: number;
    height?: number;
    constraints?: bt.BoxConstraints;
    transform?: bt.Matrix4;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    /**
     * @param config config: {key?:BasicKey, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, child?:FlutterWidget, color?:Color, decoration?:BoxDecoration,
     foregroundDecoration?:BoxDecoration, width?:number, height?:number, constraints?:BoxConstraints, transform?:Matrix4, curve?:Curve, duration?:Duration, onEnd?:any,}
     */
    static new(config: AnimatedContainerConfig): AnimatedContainer;
}
interface AnimatedPhysicalModelConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    shape?: any;
    clipBehavior?: bt.Clip;
    borderRadius?: bt.BorderRadius;
    elevation?: number;
    color?: bt.Color;
    animateColor?: boolean;
    shadowColor?: bt.Color;
    animateShadowColor?: boolean;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
}
export declare class AnimatedPhysicalModel extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    shape?: any;
    clipBehavior?: bt.Clip;
    borderRadius?: bt.BorderRadius;
    elevation?: number;
    color?: bt.Color;
    animateColor?: boolean;
    shadowColor?: bt.Color;
    animateShadowColor?: boolean;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, shape?:any, clipBehavior?:bt.Clip, borderRadius?:bt.BorderRadius, elevation?:number,
      color?:bt.Color, animateColor?:boolean, shadowColor?:bt.Color, animateShadowColor?:boolean, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
     */
    static new(config: AnimatedPhysicalModelConfig): AnimatedPhysicalModel;
}
interface AnimatedPositionedConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
}
export declare class AnimatedPositioned extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, left?:number, top?:number, right?:number, bottom?:number,
      width?:number, height?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any,}
     */
    static new(config: AnimatedPositionedConfig): AnimatedPositioned;
}
interface AnimatedSizeConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    curve?: bt.Curve;
    duration?: bt.Duration;
    reverseDuration?: bt.Duration;
    vsync?: any;
}
export declare class AnimatedSize extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    curve?: bt.Curve;
    duration?: bt.Duration;
    reverseDuration?: bt.Duration;
    vsync?: any;
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, alignment?:bt.Alignment, curve?:bt.Curve, duration?:bt.Duration, reverseDuration?:bt.Duration, vsync?:any}
     */
    static new(config: AnimatedSizeConfig): AnimatedSize;
}
interface AnimatedDefaultTextStyleConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    style?: bt.TextStyle;
    textAlign?: bt.TextAlign;
    softWrap?: boolean;
    overflow?: bt.TextOverflow;
    maxLines?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
}
export declare class AnimatedDefaultTextStyle extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    style?: bt.TextStyle;
    textAlign?: bt.TextAlign;
    softWrap?: boolean;
    overflow?: bt.TextOverflow;
    maxLines?: number;
    curve?: bt.Curve;
    duration?: bt.Duration;
    onEnd?: any;
    /**
     * @param config config: {key?:bt.BasicKey, child?:bt.FlutterWidget, style?:bt.TextStyle, textAlign?:bt.TextAlign, softWrap?:boolean, overflow?:bt.TextOverflow,
      maxLines?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
     */
    static new(config: AnimatedDefaultTextStyleConfig): AnimatedDefaultTextStyle;
}
interface BottomNavigationBarItemConfig {
    icon?: bt.FlutterWidget;
    title?: bt.FlutterWidget;
    activeIcon?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
}
export declare class BottomNavigationBarItem extends bt.FlutterWidget {
    icon?: bt.FlutterWidget;
    title?: bt.FlutterWidget;
    activeIcon?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    /**
     * @param config config: {icon?:FlutterWidget, title?:FlutterWidget, activeIcon?:FlutterWidget, backgroundColor?:Color}
     */
    static new(config?: BottomNavigationBarItemConfig): BottomNavigationBarItem;
}
interface BaselineConfig {
    child?: bt.FlutterWidget;
    baseline?: number;
    baselineType?: bt.TextBaseline;
    key?: bt.BasicKey;
}
export declare class Baseline extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    baseline?: number;
    baselineType?: bt.TextBaseline;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey,child?:FlutterWidget,baseline?:number,baselineType?:TextBaseline,}
     */
    static new(config?: BaselineConfig): Baseline;
}
interface ButtonBarConfig {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.MainAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    key?: bt.BasicKey;
}
export declare class ButtonBar extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.MainAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, children?:Array<FlutterWidget>, alignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, }
     */
    static new(config?: ButtonBarConfig): ButtonBar;
}
interface BottomAppBarConfig {
    child?: bt.FlutterWidget;
    color?: bt.Color;
    elevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    notchMargin?: number;
    key?: bt.BasicKey;
}
export declare class BottomAppBar extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    color?: bt.Color;
    elevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    notchMargin?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, notchMargin?:number, }
     */
    static new(config?: BottomAppBarConfig): BottomAppBar;
}
interface BottomNavigationBarConfig {
    items?: Array<BottomNavigationBarItem>;
    onTap?: any;
    currentIndex?: number;
    type?: bt.BottomNavigationBarType;
    fixedColor?: bt.Color;
    iconSize?: number;
    key?: bt.BasicKey;
}
export declare class BottomNavigationBar extends bt.FlutterWidget {
    items?: Array<BottomNavigationBarItem>;
    onTap?: any;
    currentIndex?: number;
    type?: bt.BottomNavigationBarType;
    fixedColor?: bt.Color;
    iconSize?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {items?:Array<BottomNavigationBarItem>, onTap?:any, currentIndex?:number, type?:BottomNavigationBarType, fixedColor?:Color, iconSize?:number, key?:BasicKey}
     */
    static new(config?: BottomNavigationBarConfig): BottomNavigationBar;
}
export declare class Builder extends bt.FlutterWidget {
    builder?: any;
    key?: bt.BasicKey;
    child?: Builder;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    static new(builder?: any, key?: bt.BasicKey): Builder;
}
interface ContainerConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    margin?: bt.EdgeInsets;
    padding?: bt.EdgeInsets;
    color?: bt.Color;
    width?: number;
    height?: number;
    decoration?: bt.BoxDecoration;
    foregroundDecoration?: bt.BoxDecoration;
    constraints?: bt.BoxConstraints;
    transform?: bt.Matrix4;
    key?: bt.BasicKey;
}
export declare class Container extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    margin?: bt.EdgeInsets;
    padding?: bt.EdgeInsets;
    color?: bt.Color;
    width?: number;
    height?: number;
    decoration?: bt.BoxDecoration;
    foregroundDecoration?: bt.BoxDecoration;
    constraints?: bt.BoxConstraints;
    transform?: bt.Matrix4;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, color?:Color,
      width?:number, height?:number, decoration?:BoxDecoration, foregroundDecoration?:BoxDecoration,
      constraints?:BoxConstraints, transform?:Matrix4,}
     */
    static new(config?: ContainerConfig): Container;
}
interface CenterConfig {
    child?: bt.FlutterWidget;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
}
export declare class Center extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {key?:BasicKey, child?:FlutterWidget, widthFactor?:number, heightFactor?:number, }
     */
    static new(config?: CenterConfig): Center;
}
interface CircleAvatarConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    foregroundColor?: bt.Color;
    backgroundImage?: any;
    radius?: number;
    minRadius?: number;
    maxRadius?: number;
}
export declare class CircleAvatar extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    foregroundColor?: bt.Color;
    backgroundImage?: any;
    radius?: number;
    minRadius?: number;
    maxRadius?: number;
    /**
     * @param config config: {child?:FlutterWidget, backgroundColor?:Color, foregroundColor?:Color, radius?:number, backgroundImage?:any,minRadius?:number, maxRadius?:number,key?:BasicKey, }
     */
    static new(config: CircleAvatarConfig): CircleAvatar;
}
interface ChipConfig {
    key?: bt.BasicKey;
    avatar?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
    labelStyle?: bt.TextStyle;
    labelPadding?: bt.EdgeInsets;
    deleteIcon?: bt.FlutterWidget;
    onDeleted?: any;
    deleteIconColor?: bt.Color;
    deleteButtonTooltipMessage?: string;
    clipBehavior?: bt.Clip;
    backgroundColor?: bt.Color;
    padding?: bt.EdgeInsets;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    elevation?: number;
}
export declare class Chip extends bt.FlutterWidget {
    key?: bt.BasicKey;
    avatar?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
    labelStyle?: bt.TextStyle;
    labelPadding?: bt.EdgeInsets;
    deleteIcon?: bt.FlutterWidget;
    onDeleted?: any;
    deleteIconColor?: bt.Color;
    deleteButtonTooltipMessage?: string;
    clipBehavior?: bt.Clip;
    backgroundColor?: bt.Color;
    padding?: bt.EdgeInsets;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    elevation?: number;
    /**
     * @param config config: {avatar?:FlutterWidget,label?:FlutterWidget,labelStyle?:TextStyle,labelPadding?:EdgeInsets,deleteIcon?:FlutterWidget,
      onDeleted?:any, deleteIconColor?:Color, deleteButtonTooltipMessage?:string, clipBehavior?:Clip,
      backgroundColor?:Color, padding?:EdgeInsets, materialTapTargetSize?:MaterialTapTargetSize,elevation?:number,key?:BasicKey,}
     */
    static new(config?: ChipConfig): Chip;
}
interface ClipRRectConfig {
    key?: bt.BasicKey;
    borderRadius?: bt.BorderRadius;
    clipBehavior?: bt.Clip;
    child?: bt.FlutterWidget;
}
export declare class ClipRRect extends bt.FlutterWidget {
    key?: bt.BasicKey;
    borderRadius?: bt.BorderRadius;
    clipBehavior?: bt.Clip;
    child?: bt.FlutterWidget;
    /**
     * @param config config: {child?:FlutterWidget,borderRadius?:BorderRadius,clipBehavior?:Clip,key?:BasicKey}
     */
    static new(config?: ClipRRectConfig): ClipRRect;
}
interface ConstrainedBoxConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    constraints?: bt.BoxConstraints;
}
export declare class ConstrainedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    constraints?: bt.BoxConstraints;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, constraints?:BoxConstraints, key?:BasicKey,}
     */
    static new(config?: ConstrainedBoxConfig): ConstrainedBox;
}
interface CustomSingleChildLayoutConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    delegate?: any;
}
export declare class CustomSingleChildLayout extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    delegate?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, delegate?:any, key?:BasicKey,}
     */
    static new(config?: CustomSingleChildLayoutConfig): CustomSingleChildLayout;
}
interface ColumnConfig {
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
    mainAxisAlignment?: bt.MainAxisAlignment;
    crossAxisAlignment?: bt.CrossAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    textDirection?: bt.TextDirection;
    verticalDirection?: bt.VerticalDirection;
    textBaseline?: bt.TextBaseline;
}
export declare class Column extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    mainAxisAlignment?: bt.MainAxisAlignment;
    crossAxisAlignment?: bt.CrossAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    textDirection?: bt.TextDirection;
    verticalDirection?: bt.VerticalDirection;
    textBaseline?: bt.TextBaseline;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, crossAxisAlignment?:CrossAxisAlignment,
      mainAxisSize?:MainAxisSize, textDirection?:TextDirection, verticalDirection?:VerticalDirection,
      textBaseline?:TextBaseline, key?:BasicKey,}
     */
    static new(config?: ColumnConfig): Column;
}
interface CustomMultiChildLayoutConfig {
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
    delegate?: any;
}
export declare class CustomMultiChildLayout extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    delegate?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BasicKey}
     */
    static new(config?: CustomMultiChildLayoutConfig): CustomMultiChildLayout;
}
interface CustomScrollViewConfig {
    slivers?: bt.FlutterWidget;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    shrinkWrap?: boolean;
    center?: bt.BasicKey;
    anchor?: number;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
}
export declare class CustomScrollView extends bt.FlutterWidget {
    slivers?: bt.FlutterWidget;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    shrinkWrap?: boolean;
    center?: bt.BasicKey;
    anchor?: number;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    /**
     * @param config config: {slivers?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean, primary?:boolean,
      physics?:ScrollPhysics, shrinkWrap?:boolean, center?:BasicKey, anchor?:number, cacheExtent?:number,
      semanticChildCount?:number, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config?: CustomScrollViewConfig): CustomScrollView;
}
interface CardConfig {
    child?: bt.FlutterWidget;
    margin?: bt.EdgeInsets;
    color?: bt.Color;
    elevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    semanticContainer?: boolean;
    key?: bt.BasicKey;
}
export declare class Card extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    margin?: bt.EdgeInsets;
    color?: bt.Color;
    elevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    semanticContainer?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, margin?:EdgeInsets, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, semanticContainer?:boolean, key?:BasicKey}
     */
    static new(config?: CardConfig): Card;
}
interface DropdownMenuItemConfig {
    child?: bt.FlutterWidget;
    value?: number;
    key?: bt.BasicKey;
}
export declare class DropdownMenuItem extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    value?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,value?:number,key?:BasicKey}
     */
    static new(config?: DropdownMenuItemConfig): DropdownMenuItem;
}
interface DecoratedBoxConfig {
    child?: bt.FlutterWidget;
    decoration?: bt.BoxDecoration;
    position?: bt.DecorationPosition;
    key?: bt.BasicKey;
}
export declare class DecoratedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    decoration?: bt.BoxDecoration;
    position?: bt.DecorationPosition;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, decoration?:BoxDecoration, position?:DecorationPosition, key?:BasicKey,}
     */
    static new(config?: DecoratedBoxConfig): DecoratedBox;
}
interface DropdownButtonConfig {
    items?: Array<DropdownMenuItem>;
    onChanged?: any;
    value?: any;
    hint?: bt.FlutterWidget;
    disabledHint?: bt.FlutterWidget;
    elevation?: number;
    style?: bt.TextStyle;
    iconSize?: number;
    isDense?: boolean;
    isExpanded?: boolean;
    key?: bt.BasicKey;
}
export declare class DropdownButton extends bt.FlutterWidget {
    items?: Array<DropdownMenuItem>;
    onChanged?: any;
    value?: any;
    hint?: bt.FlutterWidget;
    disabledHint?: bt.FlutterWidget;
    elevation?: number;
    style?: bt.TextStyle;
    iconSize?: number;
    isDense?: boolean;
    isExpanded?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {items?:Array<DropdownMenuItem>, onChanged?:any, value?:any, hint?:FlutterWidget,
      disabledHint?:FlutterWidget, elevation?:number, style?:TextStyle, iconSize?:number,
      isDense?:boolean, isExpanded?:boolean, key?:BasicKey}
     */
    static new(config?: DropdownButtonConfig): DropdownButton;
}
interface DefaultTabControllerConfig {
    child?: bt.FlutterWidget;
    length?: number;
    initialIndex?: number;
    key?: bt.BasicKey;
}
export declare class DefaultTabController extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    length?: number;
    initialIndex?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, length?:number, initialIndex?:number, key?:BasicKey}
     */
    static new(config?: DefaultTabControllerConfig): DefaultTabController;
}
interface DecorationImageConfig {
    image?: any;
    alignment?: bt.Alignment;
    colorFilter?: bt.ColorFilter;
    fit?: bt.BoxFit;
    centerSlice?: bt.Rect;
    repeat?: bt.ImageRepeat;
    matchTextDirection?: boolean;
    scale?: number;
}
export declare class DecorationImage extends bt.FlutterWidget {
    image?: any;
    alignment?: bt.Alignment;
    colorFilter?: bt.ColorFilter;
    fit?: bt.BoxFit;
    centerSlice?: bt.Rect;
    repeat?: bt.ImageRepeat;
    matchTextDirection?: boolean;
    scale?: number;
    /**
     * @param config config: {image?:any, alignment?:Alignment, colorFilter?:ColorFilter, fit?:BoxFit, centerSlice?:Rect, repeat?:ImageRepeat, matchTextDirection?:boolean, scale?:number,}
     */
    static new(config?: DecorationImageConfig): DecorationImage;
}
interface DefaultTextStyleConfig {
    child?: bt.FlutterWidget;
    style?: bt.TextStyle;
    textAlign?: bt.TextAlign;
    softWrap?: boolean;
    overflow?: bt.TextOverflow;
    maxLines?: number;
    key?: bt.BasicKey;
}
export declare class DefaultTextStyle extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    style?: bt.TextStyle;
    textAlign?: bt.TextAlign;
    softWrap?: boolean;
    overflow?: bt.TextOverflow;
    maxLines?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, style?:TextStyle, textAlign?:TextAlign, softWrap?:boolean, overflow?:TextOverflow, maxLines?:number, key?:BasicKey}
     */
    static new(config?: DefaultTextStyleConfig): DefaultTextStyle;
}
interface DecoratedBoxTransitionConfig {
    key?: bt.BasicKey;
    decoration?: any;
    position?: bt.DecorationPosition;
    child?: bt.FlutterWidget;
}
export declare class DecoratedBoxTransition extends bt.FlutterWidget {
    key?: bt.BasicKey;
    decoration?: any;
    position?: bt.DecorationPosition;
    child?: bt.FlutterWidget;
    /**
     * @param config config: {key?:bt.BasicKey, decoration?:any, position?:bt.DecorationPosition, child?:bt.FlutterWidget}
     */
    static new(config: DecoratedBoxTransitionConfig): DecoratedBoxTransition;
}
interface ExpandedConfig {
    child?: bt.FlutterWidget;
    flex?: number;
    key?: bt.BasicKey;
}
export declare class Expanded extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    flex?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, flex?:number, key?:BasicKey}
     */
    static new(config?: ExpandedConfig): Expanded;
}
interface ExactAssetImageConfig {
    assetName?: string;
    scale?: number;
    bundle?: bt.BasicAssetBundle;
    packageName?: string;
}
export declare class ExactAssetImage extends bt.FlutterWidget {
    assetName?: string;
    scale?: number;
    bundle?: bt.BasicAssetBundle;
    packageName?: string;
    /**
     * @param config config: {assetName:string, scale?:number, bundle?:BasicAssetBundle, packageName?:string}
     */
    static new(config?: ExactAssetImageConfig): ExactAssetImage;
}
interface FittedBoxConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    fit?: bt.BoxFit;
    key?: bt.BasicKey;
}
export declare class FittedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    fit?: bt.BoxFit;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, fit?:BoxFit, key?:BasicKey}
     */
    static new(config: FittedBoxConfig): FittedBox;
}
interface FractionallySizedBoxConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
}
export declare class FractionallySizedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    widthFactor?: number;
    heightFactor?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, widthFactor?:number, heightFactor?:number, key?:BasicKey}
     */
    static new(config?: FractionallySizedBoxConfig): FractionallySizedBox;
}
interface FlowConfig {
    children?: Array<bt.FlutterWidget>;
    delegate?: any;
    key?: bt.BasicKey;
}
export declare class Flow extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    delegate?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BasicKey,}
     */
    static new(config: FlowConfig): Flow;
}
interface FlatButtonConfig {
    child?: bt.FlutterWidget;
    onPressed?: any;
    padding?: bt.EdgeInsets;
    onHighlightChanged?: any;
    textTheme?: bt.ButtonTextTheme;
    textColor?: bt.Color;
    disabledTextColor?: bt.Color;
    color?: bt.Color;
    disabledColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    colorBrightness?: bt.Brightness;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    key?: bt.BasicKey;
    staticFunctionName?: string;
    icon?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
}
export declare class FlatButton extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    padding?: bt.EdgeInsets;
    onHighlightChanged?: any;
    textTheme?: bt.ButtonTextTheme;
    textColor?: bt.Color;
    disabledTextColor?: bt.Color;
    color?: bt.Color;
    disabledColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    colorBrightness?: bt.Brightness;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    key?: bt.BasicKey;
    staticFunctionName?: string;
    icon?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, padding?:EdgeInsets, onHighlightChanged?:any, textTheme?:ButtonTextTheme, textColor?:Color,
      disabledTextColor?:Color, color?:Color, disabledColor?:Color, highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static new(config?: FlatButtonConfig): FlatButton;
    /**
     * @param config config: {icon?:FlutterWidget, label?:FlutterWidget,onPressed?:any, padding?:EdgeInsets, onHighlightChanged?:any, textTheme?:ButtonTextTheme, textColor?:Color,
      disabledTextColor?:Color, color?:Color, disabledColor?:Color, highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static icon(config?: FlatButtonConfig): FlatButton;
}
interface FloatingActionButtonConfig {
    child?: bt.FlutterWidget;
    onPressed?: any;
    foregroundColor?: bt.Color;
    backgroundColor?: bt.Color;
    mini?: boolean;
    elevation?: number;
    highlightElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    isExtended?: boolean;
    tooltip?: string;
    key?: bt.BasicKey;
}
export declare class FloatingActionButton extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    foregroundColor?: bt.Color;
    backgroundColor?: bt.Color;
    mini?: boolean;
    elevation?: number;
    highlightElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    isExtended?: boolean;
    tooltip?: string;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, foregroundColor?:Color, backgroundColor?:Color, mini?:boolean, elevation?:number, highlightElevation?:number,
      shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, isExtended?:boolean,  tooltip?:string, key?:BasicKey}
     */
    static new(config?: FloatingActionButtonConfig): FloatingActionButton;
}
interface FlexibleSpaceBarConfig {
    title?: bt.FlutterWidget;
    background?: bt.FlutterWidget;
    centerTitle?: boolean;
    collapseMode?: bt.CollapseMode;
    key?: bt.BasicKey;
}
export declare class FlexibleSpaceBar extends bt.FlutterWidget {
    title?: bt.FlutterWidget;
    background?: bt.FlutterWidget;
    centerTitle?: boolean;
    collapseMode?: bt.CollapseMode;
    key?: bt.BasicKey;
    /**
     * @param config config: {title?:FlutterWidget, background?:FlutterWidget, centerTitle?:boolean, collapseMode?:CollapseMode, key?:BasicKey}
     */
    static new(config?: FlexibleSpaceBarConfig): FlexibleSpaceBar;
}
interface FlutterLogoConfig {
    size?: number;
    colors?: bt.Color;
    textColor?: bt.Color;
    style?: bt.FlutterLogoStyle;
    duration?: bt.Duration;
    curve?: bt.Curve;
    key?: bt.BasicKey;
}
export declare class FlutterLogo extends bt.FlutterWidget {
    size?: number;
    colors?: bt.Color;
    textColor?: bt.Color;
    style?: bt.FlutterLogoStyle;
    duration?: bt.Duration;
    curve?: bt.Curve;
    key?: bt.BasicKey;
    /**
     * @param config config: {size?:number, colors?:Color, textColor?:Color, style?:FlutterLogoStyle, duration?:Duration, curve?:Curves, key?:BasicKey}
     */
    static new(config?: FlutterLogoConfig): FlutterLogo;
}
interface FileImageConfig {
    file?: bt.File;
    scale?: number;
}
export declare class FileImage extends bt.FlutterWidget {
    file?: bt.File;
    scale?: number;
    /**
     * @param config config: {file?:File,scale?:number}
     */
    static new(config?: FileImageConfig): FileImage;
}
interface GestureDetectorConfig {
    child?: bt.FlutterWidget;
    onTap?: any;
    onTapDown?: any;
    onTapUp?: any;
    onTapCancel?: any;
    onDoubleTap?: any;
    onLongPress?: any;
    onLongPressUp?: any;
    onVerticalDragDown?: any;
    onVerticalDragStart?: any;
    onVerticalDragUpdate?: any;
    onVerticalDragEnd?: any;
    onVerticalDragCancel?: any;
    onHorizontalDragDown?: any;
    onHorizontalDragStart?: any;
    onHorizontalDragUpdate?: any;
    onHorizontalDragEnd?: any;
    onHorizontalDragCancel?: any;
    onPanDown?: any;
    onPanStart?: any;
    onPanUpdate?: any;
    onPanEnd?: any;
    onPanCancel?: any;
    onScaleStart?: any;
    onScaleUpdate?: any;
    onScaleEnd?: any;
    behavior?: bt.HitTestBehavior;
    excludeFromSemantics?: boolean;
    key?: bt.BasicKey;
}
export declare class GestureDetector extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onTap?: any;
    onTapDown?: any;
    onTapUp?: any;
    onTapCancel?: any;
    onDoubleTap?: any;
    onLongPress?: any;
    onLongPressUp?: any;
    onVerticalDragDown?: any;
    onVerticalDragStart?: any;
    onVerticalDragUpdate?: any;
    onVerticalDragEnd?: any;
    onVerticalDragCancel?: any;
    onHorizontalDragDown?: any;
    onHorizontalDragStart?: any;
    onHorizontalDragUpdate?: any;
    onHorizontalDragEnd?: any;
    onHorizontalDragCancel?: any;
    onPanDown?: any;
    onPanStart?: any;
    onPanUpdate?: any;
    onPanEnd?: any;
    onPanCancel?: any;
    onScaleStart?: any;
    onScaleUpdate?: any;
    onScaleEnd?: any;
    behavior?: bt.HitTestBehavior;
    excludeFromSemantics?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, onTap?:any, onTapDown?:any, onTapUp?:any,onTapCancel?:any,
      onDoubleTap?:any, onLongPress?:any, onLongPressUp?:any, onVerticalDragDown?:any, onVerticalDragStart?:any,
      onVerticalDragUpdate?:any, onVerticalDragEnd?:any, onVerticalDragCancel?:any, onHorizontalDragDown?:any,
      onHorizontalDragStart?:any, onHorizontalDragUpdate?:any, onHorizontalDragEnd?:any, onHorizontalDragCancel?:any,
      onPanDown?:any, onPanStart?:any, onPanUpdate?:any, onPanEnd?:any, onPanCancel?:any, onScaleStart?:any,
      onScaleUpdate?:any, onScaleEnd?:any, behavior?:HitTestBehavior, excludeFromSemantics?:boolean, key?:BasicKey}
     */
    static new(config?: GestureDetectorConfig): GestureDetector;
}
interface IntrinsicHeightConfig {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
}
export declare class IntrinsicHeight extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, key?:BasicKey}
     */
    static new(config?: IntrinsicHeightConfig): IntrinsicHeight;
}
interface IntrinsicWidthConfig {
    child?: bt.FlutterWidget;
    stepWidth?: number;
    stepHeight?: number;
    key?: bt.BasicKey;
}
export declare class IntrinsicWidth extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    stepWidth?: number;
    stepHeight?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, stepWidth?:number, stepHeight?:number, key?:BasicKey}
     */
    static new(config?: IntrinsicWidthConfig): IntrinsicWidth;
}
interface IndexedStackConfig {
    children?: Array<bt.FlutterWidget>;
    index?: number;
    alignment?: bt.AlignmentDirectional;
    textDirection?: bt.TextDirection;
    sizing?: bt.StackFit;
    key?: bt.BasicKey;
}
export declare class IndexedStack extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    index?: number;
    alignment?: bt.AlignmentDirectional;
    textDirection?: bt.TextDirection;
    sizing?: bt.StackFit;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>,index?:number,alignment?:AlignmentDirectional, textDirection?:TextDirection, sizing?:StackFit, key?:BasicKey}
     */
    static new(config?: IndexedStackConfig): IndexedStack;
}
interface IconButtonConfig {
    icon?: bt.FlutterWidget;
    onPressed?: any;
    iconSize?: number;
    padding?: bt.EdgeInsets;
    alignment?: bt.Alignment;
    color?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    disabledColor?: bt.Color;
    tooltip?: string;
    key?: bt.BasicKey;
}
export declare class IconButton extends bt.FlutterWidget {
    icon?: bt.FlutterWidget;
    onPressed?: any;
    iconSize?: number;
    padding?: bt.EdgeInsets;
    alignment?: bt.Alignment;
    color?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    disabledColor?: bt.Color;
    tooltip?: string;
    key?: bt.BasicKey;
    /**
     * @param config config: {icon?:FlutterWidget, onPressed?:any, iconSize?:number, padding?:EdgeInsets, alignment?:Alignment,
      color?:Color, highlightColor?:Color, splashColor?:Color, disabledColor?:Color, tooltip?:string, key?:BasicKey,}
     */
    static new(config?: IconButtonConfig): IconButton;
}
interface IconConfig {
    icon?: bt.IconData;
    size?: number;
    color?: bt.Color;
    semanticLabel?: string;
    textDirection?: bt.TextDirection;
    key?: bt.BasicKey;
}
export declare class Icon extends bt.FlutterWidget {
    icon?: bt.IconData;
    size?: number;
    color?: bt.Color;
    semanticLabel?: string;
    textDirection?: bt.TextDirection;
    key?: bt.BasicKey;
    /**
     * @param config config: {icon?:IconData, size?:number, color?:Color, semanticLabel?:string, textDirection?:TextDirection, key?:BasicKey}
     */
    static new(config?: IconConfig): Icon;
}
interface ImageConfig {
    image?: any;
    fit?: bt.BoxFit;
    repeat?: bt.ImageRepeat;
    alignment?: bt.Alignment;
    width?: number;
    height?: number;
    color?: bt.Color;
    semanticLabel?: string;
    excludeFromSemantics?: boolean;
    colorBlendMode?: bt.BlendMode;
    centerSlice?: bt.Rect;
    matchTextDirection?: boolean;
    gaplessPlayback?: boolean;
    filterQuality?: bt.FilterQuality;
    key?: bt.BasicKey;
    src?: string;
    scale?: number;
    headers?: Map<string, string>;
    imageFile?: bt.File;
    imageName?: string;
    packageName?: string;
    bundle?: bt.BasicAssetBundle;
    bytes?: bt.Uint8List;
}
export declare class Image extends bt.FlutterWidget {
    image?: any;
    fit?: bt.BoxFit;
    repeat?: bt.ImageRepeat;
    alignment?: bt.Alignment;
    width?: number;
    height?: number;
    color?: bt.Color;
    semanticLabel?: string;
    excludeFromSemantics?: boolean;
    colorBlendMode?: bt.BlendMode;
    centerSlice?: bt.Rect;
    matchTextDirection?: boolean;
    gaplessPlayback?: boolean;
    filterQuality?: bt.FilterQuality;
    key?: bt.BasicKey;
    src?: string;
    scale?: number;
    headers?: Map<string, string>;
    imageFile?: bt.File;
    /**
     * @param config config: {image:any,fit?:BoxFit,repeat?:ImageRepeat,alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
     filterQuality?:FilterQuality, key?:BasicKey}
     */
    static new(config?: ImageConfig): Image;
    /**
     * @param src src:string
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,headers?:Map<string,string>,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static network(src: string, config?: ImageConfig): Image;
    /**
     * @param imageFile imageFile:File
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static file(imageFile: bt.File, config?: ImageConfig): Image;
    imageName?: string;
    packageName?: string;
    bundle?: bt.BasicAssetBundle;
    /**
     * @param config config: {imageName?:string,bundle?:BasicAssetBundle,packageName?:string, scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number,
      color?:Color, semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static asset(config?: ImageConfig): Image;
    bytes?: bt.Uint8List;
    /**
     * @param bytes bytes:Uint8List
     * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,
      semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
      filterQuality?:FilterQuality, key?:BasicKey}
     */
    static memory(bytes: bt.Uint8List, config?: ImageConfig): Image;
}
interface LimitedBoxConfig {
    child?: bt.FlutterWidget;
    maxWidth?: number;
    maxHeight?: number;
    key?: bt.BasicKey;
}
export declare class LimitedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    maxWidth?: number;
    maxHeight?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, maxWidth?:number, maxHeight?:number, key?:BasicKey}
     */
    static new(config?: LimitedBoxConfig): LimitedBox;
}
interface ListBodyConfig {
    children?: Array<bt.FlutterWidget>;
    reverse?: boolean;
    mainAxis?: bt.Axis;
    key?: bt.BasicKey;
}
export declare class ListBody extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    reverse?: boolean;
    mainAxis?: bt.Axis;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, reverse?:boolean, mainAxis?:Axis, key?:BasicKey}
     */
    static new(config?: ListBodyConfig): ListBody;
}
interface ListTileConfig {
    leading?: bt.FlutterWidget;
    title?: bt.FlutterWidget;
    subtitle?: bt.FlutterWidget;
    trailing?: bt.FlutterWidget;
    onTap?: any;
    onLongPress?: any;
    selected?: boolean;
    isThreeLine?: boolean;
    dense?: boolean;
    contentPadding?: bt.EdgeInsets;
    enabled?: boolean;
    key?: bt.BasicKey;
}
export declare class ListTile extends bt.FlutterWidget {
    leading?: bt.FlutterWidget;
    title?: bt.FlutterWidget;
    subtitle?: bt.FlutterWidget;
    trailing?: bt.FlutterWidget;
    onTap?: any;
    onLongPress?: any;
    selected?: boolean;
    isThreeLine?: boolean;
    dense?: boolean;
    contentPadding?: bt.EdgeInsets;
    enabled?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {leading?:FlutterWidget, title?:FlutterWidget, subtitle?:FlutterWidget, trailing?:FlutterWidget, onTap?:any, onLongPress?:any,
      selected?:boolean, isThreeLine?:boolean, dense?:boolean, contentPadding?:EdgeInsets, enabled?:boolean, key?:BasicKey}
     */
    static new(config?: ListTileConfig): ListTile;
}
interface ListViewConfig {
    children?: Array<bt.FlutterWidget>;
    padding?: bt.EdgeInsets;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    shrinkWrap?: boolean;
    itemExtent?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    itemBuilder?: any;
    itemCount?: number;
}
export declare class ListView extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    padding?: bt.EdgeInsets;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    shrinkWrap?: boolean;
    itemExtent?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    cacheExtent?: number;
    semanticChildCount?: number;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    itemBuilder?: any;
    itemCount?: number;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    /**
     * @param config config: {children?:Array<FlutterWidget>, padding?:EdgeInsets, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      primary?:boolean, physics?:ScrollPhysics, shrinkWrap?:boolean, itemExtent?:number,
      addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, cacheExtent?:number,
      semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config?: ListViewConfig): ListView;
    /**
     * @param config config: {itemBuilder?:any,itemCount?:number, padding?:EdgeInsets, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      primary?:boolean, physics?:ScrollPhysics, shrinkWrap?:boolean, itemExtent?:number,
      addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, cacheExtent?:number,
      semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static builder(config?: ListViewConfig): ListView;
}
interface LayoutBuilderConfig {
    builder?: any;
    key?: bt.BasicKey;
}
export declare class LayoutBuilder extends bt.FlutterWidget {
    builder?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {builder?:any, key?:BasicKey}
     */
    static new(config: LayoutBuilderConfig): LayoutBuilder;
}
interface MaterialConfig {
    child?: bt.FlutterWidget;
    elevation?: number;
    color?: bt.Color;
    shadowColor?: bt.Color;
    textStyle?: bt.TextStyle;
    borderRadius?: bt.BorderRadius;
    type?: bt.MaterialType;
    shape?: any;
    borderOnForeground?: boolean;
    clipBehavior?: bt.Clip;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
}
export declare class Material extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    elevation?: number;
    color?: bt.Color;
    shadowColor?: bt.Color;
    textStyle?: bt.TextStyle;
    borderRadius?: bt.BorderRadius;
    type?: bt.MaterialType;
    shape?: any;
    borderOnForeground?: boolean;
    clipBehavior?: bt.Clip;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,elevation?:number, color?:Color, shadowColor?:Color, textStyle?:TextStyle,
      borderRadius?:BorderRadius, type?:MaterialType, shape?:any, borderOnForeground?:boolean, clipBehavior?:Clip,
      animationDuration?:Duration, key?:BasicKey,}
     */
    static new(config?: MaterialConfig): Material;
}
interface MaterialPageRouteConfig {
    builder?: any;
    settings?: any;
    maintainState?: boolean;
    fullscreenDialog?: boolean;
    child?: MaterialPageRoute;
}
export declare class MaterialPageRoute extends bt.FlutterWidget {
    builder?: any;
    settings?: any;
    maintainState?: boolean;
    fullscreenDialog?: boolean;
    child?: MaterialPageRoute;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    /**
     * @param config config: {builder?:any, settings?:any, maintainState?:boolean, fullscreenDialog?:boolean}
     */
    static new(config?: MaterialPageRouteConfig): MaterialPageRoute;
}
export declare class MemoryImage extends bt.FlutterWidget {
    bytes?: bt.Uint8List;
    scale?: number;
    static new(bytes?: bt.Uint8List, scale?: number): MemoryImage;
}
interface NotificationListenerConfig {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
}
export declare class NotificationListener extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,key?:BasicKey}
     */
    static new(config: NotificationListenerConfig): NotificationListener;
}
interface NestedScrollViewConfig {
    body?: bt.FlutterWidget;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    physics?: bt.ScrollPhysics;
    headerSliverBuilder?: any;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
}
export declare class NestedScrollView extends bt.FlutterWidget {
    body?: bt.FlutterWidget;
    controller?: bt.ScrollController;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    physics?: bt.ScrollPhysics;
    headerSliverBuilder?: any;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    /**
     * @param config config: {body?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
      physics?:ScrollPhysics, headerSliverBuilder?:any, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config?: NestedScrollViewConfig): NestedScrollView;
}
export declare class NavigatorState extends bt.DartClass {
    context: any;
    push(t: any, materialPageRoute: MaterialPageRoute): void;
    pop(t: any): void;
    static new(context: any): NavigatorState;
}
interface NavigatorConfig {
    initialRoute?: string;
    onGenerateRoute?: any;
    onUnknownRoute?: any;
    observers?: any;
    key?: bt.BasicKey;
}
export declare class Navigator extends bt.DartClass {
    initialRoute?: string;
    onGenerateRoute?: any;
    onUnknownRoute?: any;
    observers?: any;
    key?: bt.BasicKey;
    static push(context: any, materialPageRoute: MaterialPageRoute): void;
    static pop(context: any): void;
    static of(context: any, opt: any): NavigatorState;
    /**
     * @param config config: {initialRoute?:string,onGenerateRoute?:any, onUnknownRoute?:any, observers?:any, key?:BasicKey}
     */
    static new(config: NavigatorConfig): Navigator;
}
interface NetworkImageConfig {
    scale?: number;
    headers?: Map<string, string>;
}
export declare class NetworkImage extends bt.FlutterWidget {
    url?: string;
    scale?: number;
    headers?: Map<string, string>;
    /**
     * @param config config: {scale?:number, headers?:Map<string,string>}
     */
    static new(url: string, config: NetworkImageConfig): NetworkImage;
}
interface OpacityConfig {
    child?: bt.FlutterWidget;
    opacity?: number;
    alwaysIncludeSemantics?: boolean;
    key?: bt.BasicKey;
}
export declare class Opacity extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    opacity?: number;
    alwaysIncludeSemantics?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, opacity?:number, alwaysIncludeSemantics?:boolean,key?:BasicKey }
     */
    static new(config?: OpacityConfig): Opacity;
}
interface OffstageConfig {
    child?: bt.FlutterWidget;
    offstage?: boolean;
    key?: bt.BasicKey;
}
export declare class Offstage extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    offstage?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:.FlutterWidget, offstage?:boolean, key?:BasicKey}
     */
    static new(config: OffstageConfig): Offstage;
}
interface OverflowBoxConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    key?: bt.BasicKey;
}
export declare class OverflowBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, minWidth?:number, maxWidth?:number, minHeight?:number, maxHeight?:number, key?:BasicKey,}
     */
    static new(config?: OverflowBoxConfig): OverflowBox;
}
interface PaddingConfig {
    child?: bt.FlutterWidget;
    padding?: bt.EdgeInsets;
    key?: bt.BasicKey;
}
export declare class Padding extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    padding?: bt.EdgeInsets;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, padding?:EdgeInsets, key?:BasicKey}
     */
    static new(config?: PaddingConfig): Padding;
}
interface PositionedConfig {
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    key?: bt.BasicKey;
    rect?: bt.Rect;
}
export declare class Positioned extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    width?: number;
    height?: number;
    key?: bt.BasicKey;
    rect?: bt.Rect;
    /**
     * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,width?:number,height?:number,key?:BasicKey}
     */
    static new(config?: PositionedConfig): Positioned;
    /**
     * @param config config: {child?:FlutterWidget, rect?:Rect, key?:BasicKey}
     */
    static fromRect(config?: PositionedConfig): Positioned;
}
interface PreferredSizeConfig {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    preferredSize?: bt.Size;
}
export declare class PreferredSize extends bt.FlutterWidget {
    key?: bt.BasicKey;
    child?: bt.FlutterWidget;
    preferredSize?: bt.Size;
    /**
     * @param config config: {child?:FlutterWidget,preferredSize?:Size,key?:BasicKey,}
     */
    static new(config: PreferredSizeConfig): PreferredSize;
}
export declare class PreferredSizeWidget extends bt.FlutterWidget {
    static new(): PreferredSizeWidget;
}
interface PlaceholderConfig {
    color?: bt.Color;
    strokeWidth?: number;
    fallbackWidth?: number;
    fallbackHeight?: number;
    key?: bt.BasicKey;
}
export declare class Placeholder extends bt.FlutterWidget {
    color?: bt.Color;
    strokeWidth?: number;
    fallbackWidth?: number;
    fallbackHeight?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {color?:Color,strokeWidth?:number,fallbackWidth?:number,fallbackHeight?:number,key?:BasicKey,}
     */
    static new(config?: PlaceholderConfig): Placeholder;
}
interface PopupMenuButtonConfig {
    itemBuilder?: any;
    initialValue?: any;
    onSelected?: any;
    onCanceled?: any;
    tooltip?: string;
    elevation?: number;
    padding?: bt.EdgeInsets;
    child?: bt.FlutterWidget;
    icon?: bt.FlutterWidget;
    offset?: bt.Offset;
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
}
export declare class PopupMenuButton extends bt.FlutterWidget {
    itemBuilder?: any;
    initialValue?: any;
    onSelected?: any;
    onCanceled?: any;
    tooltip?: string;
    elevation?: number;
    padding?: bt.EdgeInsets;
    child?: bt.FlutterWidget;
    icon?: bt.FlutterWidget;
    offset?: bt.Offset;
    key?: bt.BasicKey;
    children?: Array<bt.FlutterWidget>;
    preBuild(jsWidgetHelper: any, buildContext: any): void;
    /**
     * @param config config: {itemBuilder?:any, initialValue?:any, onSelected?:any, onCanceled?:any, tooltip?:string,elevation?:number,
      padding?:EdgeInsets,child?:FlutterWidget,icon?:FlutterWidget, offset?:Offset, key?:BasicKey}
     */
    static new(config?: PopupMenuButtonConfig): PopupMenuButton;
}
interface PopupMenuItemConfig {
    child?: bt.FlutterWidget;
    value?: any;
    enabled?: boolean;
    height?: number;
    key?: bt.BasicKey;
}
export declare class PopupMenuItem extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    value?: any;
    enabled?: boolean;
    height?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, value?:any, enabled?:boolean, height?:number, key?:BasicKey}
     */
    static new(config?: PopupMenuItemConfig): PopupMenuItem;
}
interface RowConfig {
    children?: Array<bt.FlutterWidget>;
    mainAxisAlignment?: bt.MainAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    crossAxisAlignment?: bt.CrossAxisAlignment;
    textDirection?: bt.TextDirection;
    verticalDirection?: bt.VerticalDirection;
    textBaseline?: bt.TextBaseline;
    key?: bt.BasicKey;
}
export declare class Row extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    mainAxisAlignment?: bt.MainAxisAlignment;
    mainAxisSize?: bt.MainAxisSize;
    crossAxisAlignment?: bt.CrossAxisAlignment;
    textDirection?: bt.TextDirection;
    verticalDirection?: bt.VerticalDirection;
    textBaseline?: bt.TextBaseline;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, crossAxisAlignment?:CrossAxisAlignment,
      textDirection?:TextDirection, verticalDirection?:VerticalDirection, textBaseline?:TextBaseline, key?:BasicKey,}
     */
    static new(config?: RowConfig): Row;
}
interface RaisedButtonConfig {
    child?: bt.FlutterWidget;
    onPressed?: any;
    onHighlightChanged?: any;
    padding?: bt.EdgeInsets;
    textColor?: bt.Color;
    disabledTextColor?: bt.Color;
    color?: bt.Color;
    disabledColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    colorBrightness?: bt.Brightness;
    elevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
    staticFunctionName?: string;
    icon?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
}
export declare class RaisedButton extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    onHighlightChanged?: any;
    padding?: bt.EdgeInsets;
    textColor?: bt.Color;
    disabledTextColor?: bt.Color;
    color?: bt.Color;
    disabledColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    colorBrightness?: bt.Brightness;
    elevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
    staticFunctionName?: string;
    icon?: bt.FlutterWidget;
    label?: bt.FlutterWidget;
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets,
      textColor?:Color, disabledTextColor?:Color, color?:Color, disabledColor?:Color,
      highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness, elevation?:number,
      highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:Clip,
      materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BasicKey}
     */
    static new(config?: RaisedButtonConfig): RaisedButton;
    /**
     * @param config config: {icon?:bt.FlutterWidget, label?:bt.FlutterWidget,onPressed?:any, onHighlightChanged?:any, padding?:bt.EdgeInsets,
    textColor?:bt.Color, disabledTextColor?:bt.Color, color?:bt.Color, disabledColor?:bt.Color,
    highlightColor?:bt.Color, splashColor?:bt.Color, colorBrightness?:bt.Brightness, elevation?:number,
    highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:bt.Clip,
    materialTapTargetSize?:bt.MaterialTapTargetSize, animationDuration?:bt.Duration, key?:bt.BasicKey}
     */
    static icon(config?: RaisedButtonConfig): RaisedButton | undefined;
}
interface RadioConfig {
    value?: any;
    groupValue?: any;
    onChanged?: any;
    activeColor?: bt.Color;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    key?: bt.BasicKey;
}
export declare class Radio extends bt.FlutterWidget {
    value?: any;
    groupValue?: any;
    onChanged?: any;
    activeColor?: bt.Color;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    key?: bt.BasicKey;
    /**
     * @param config config: {value?:any, groupValue?:any, onChanged?:any, activeColor?:Color,  materialTapTargetSize?:MaterialTapTargetSize, key?:BasicKey}
     */
    static new(config?: RadioConfig): Radio;
}
interface RawMaterialButtonConfig {
    child?: bt.FlutterWidget;
    onPressed?: any;
    onHighlightChanged?: any;
    padding?: bt.EdgeInsets;
    textStyle?: bt.TextStyle;
    fillColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    constraints?: bt.BoxConstraints;
    elevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
}
export declare class RawMaterialButton extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    onPressed?: any;
    onHighlightChanged?: any;
    padding?: bt.EdgeInsets;
    textStyle?: bt.TextStyle;
    fillColor?: bt.Color;
    highlightColor?: bt.Color;
    splashColor?: bt.Color;
    constraints?: bt.BoxConstraints;
    elevation?: number;
    highlightElevation?: number;
    disabledElevation?: number;
    shape?: any;
    clipBehavior?: bt.Clip;
    materialTapTargetSize?: bt.MaterialTapTargetSize;
    animationDuration?: bt.Duration;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets, textStyle?:TextStyle, fillColor?:Color,
      highlightColor?:Color, splashColor?:Color, constraints?:BoxConstraints, elevation?:number, highlightElevation?:number,
      disabledElevation?:number, shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BasicKey}
     */
    static new(config?: RawMaterialButtonConfig): RawMaterialButton;
}
interface RichTextConfig {
    text?: bt.FlutterWidget;
    textAlign?: bt.TextAlign;
    textDirection?: bt.TextDirection;
    softWrap?: boolean;
    overflow?: bt.Overflow;
    textScaleFactor?: number;
    maxLines?: number;
    key?: bt.BasicKey;
}
export declare class RichText extends bt.FlutterWidget {
    text?: bt.FlutterWidget;
    textAlign?: bt.TextAlign;
    textDirection?: bt.TextDirection;
    softWrap?: boolean;
    overflow?: bt.Overflow;
    textScaleFactor?: number;
    maxLines?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {text?:FlutterWidget, textAlign?:TextAlign, textDirection?:TextDirection, softWrap?:boolean, overflow?:Overflow,
      textScaleFactor?:number, maxLines?:number, key?:BasicKey,}
     */
    static new(config: RichTextConfig): RichText;
}
interface SliderConfig {
    value?: number;
    onChanged?: any;
    onChangeStart?: any;
    onChangeEnd?: any;
    min?: number;
    max?: number;
    divisions?: number;
    label?: string;
    activeColor?: bt.Color;
    inactiveColor?: bt.Color;
    semanticFormatterCallback?: any;
    key?: bt.BasicKey;
}
export declare class Slider extends bt.FlutterWidget {
    value?: number;
    onChanged?: any;
    onChangeStart?: any;
    onChangeEnd?: any;
    min?: number;
    max?: number;
    divisions?: number;
    label?: string;
    activeColor?: bt.Color;
    inactiveColor?: bt.Color;
    semanticFormatterCallback?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {value?:number,onChanged?:any,onChangeStart?:any,onChangeEnd?:any,min?:number,max?:number,
      divisions?:number,label?:string,activeColor?:olor,inactiveColor?:.Color,semanticFormatterCallback?:any,key?:BasicKey,}
     */
    static new(config?: SliderConfig): Slider;
}
interface SizedBoxConfig {
    child?: bt.FlutterWidget;
    width?: number;
    height?: number;
    key?: bt.BasicKey;
}
export declare class SizedBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    width?: number;
    height?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, width?:number, height?:number, key?:BasicKey}
     */
    static new(config?: SizedBoxConfig): SizedBox;
}
interface SizedOverflowBoxConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    size?: bt.Size;
    key?: bt.BasicKey;
}
export declare class SizedOverflowBox extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    size?: bt.Size;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, size?:Size, key?:BasicKey}
     */
    static new(config: SizedOverflowBoxConfig): SizedOverflowBox;
}
interface StackConfig {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.AlignmentDirectional;
    textDirection?: bt.TextDirection;
    fit?: bt.StackFit;
    overflow?: bt.Overflow;
    key?: bt.BasicKey;
}
export declare class Stack extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.AlignmentDirectional;
    textDirection?: bt.TextDirection;
    fit?: bt.StackFit;
    overflow?: bt.Overflow;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, alignment?:AlignmentDirectional, textDirection?:TextDirection,
      fit?:StackFit, overflow?:Overflow, key?:BasicKey}
     */
    static new(config?: StackConfig): Stack;
}
interface SliverAppBarConfig {
    leading?: bt.FlutterWidget;
    automaticallyImplyLeading?: boolean;
    centerTitle?: boolean;
    title?: bt.FlutterWidget;
    actions?: Array<bt.FlutterWidget>;
    flexibleSpace?: bt.FlutterWidget;
    bottom?: bt.FlutterWidget;
    elevation?: number;
    forceElevated?: boolean;
    backgroundColor?: bt.Color;
    brightness?: bt.Brightness;
    iconTheme?: bt.IconThemeData;
    primary?: boolean;
    titleSpacing?: number;
    expandedHeight?: number;
    floating?: boolean;
    pinned?: boolean;
    snap?: boolean;
    key?: bt.BasicKey;
}
export declare class SliverAppBar extends bt.FlutterWidget {
    leading?: bt.FlutterWidget;
    automaticallyImplyLeading?: boolean;
    centerTitle?: boolean;
    title?: bt.FlutterWidget;
    actions?: Array<bt.FlutterWidget>;
    flexibleSpace?: bt.FlutterWidget;
    bottom?: bt.FlutterWidget;
    elevation?: number;
    forceElevated?: boolean;
    backgroundColor?: bt.Color;
    brightness?: bt.Brightness;
    iconTheme?: bt.IconThemeData;
    primary?: boolean;
    titleSpacing?: number;
    expandedHeight?: number;
    floating?: boolean;
    pinned?: boolean;
    snap?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {leading?:FlutterWidget, automaticallyImplyLeading?:boolean, centerTitle?:boolean, title?:FlutterWidget,
      actions?:Array<FlutterWidget>, flexibleSpace?:FlutterWidget, bottom?:FlutterWidget, elevation?:number, forceElevated?:boolean,
      backgroundColor?:Color, brightness?:Brightness, iconTheme?:IconThemeData, primary?:boolean, titleSpacing?:number,
      expandedHeight?:number, floating?:boolean, pinned?:boolean, snap?:boolean, key?:BasicKey}
     */
    static new(config?: SliverAppBarConfig): SliverAppBar;
}
interface SliverPaddingConfig {
    sliver?: bt.FlutterWidget;
    padding?: bt.EdgeInsets;
    key?: bt.BasicKey;
}
export declare class SliverPadding extends bt.FlutterWidget {
    sliver?: bt.FlutterWidget;
    padding?: bt.EdgeInsets;
    key?: bt.BasicKey;
    /**
     * @param config config: {sliver?:FlutterWidget, padding?:EdgeInsets, key?:BasicKey}
     */
    static new(config?: SliverPaddingConfig): SliverPadding;
}
interface SliverGridConfig {
    delegate?: any;
    gridDelegate?: any;
    key?: bt.BasicKey;
}
export declare class SliverGrid extends bt.FlutterWidget {
    delegate?: any;
    gridDelegate?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {delegate?:any, gridDelegate?:any, key?:BasicKey,}
     */
    static new(config?: SliverGridConfig): SliverGrid;
}
interface SliverGridDelegateWithMaxCrossAxisExtentConfig {
    maxCrossAxisExtent?: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
}
export declare class SliverGridDelegateWithMaxCrossAxisExtent extends bt.FlutterWidget {
    maxCrossAxisExtent?: number;
    mainAxisSpacing?: number;
    crossAxisSpacing?: number;
    childAspectRatio?: number;
    /**
     * @param config config: {maxCrossAxisExtent?:number, mainAxisSpacing?:number, crossAxisSpacing?:number, childAspectRatio?:number,}
     */
    static new(config?: SliverGridDelegateWithMaxCrossAxisExtentConfig): SliverGridDelegateWithMaxCrossAxisExtent;
}
interface SliverChildListDelegateConfig {
    children?: Array<bt.FlutterWidget>;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
}
export declare class SliverChildListDelegate extends bt.DartClass {
    children?: Array<bt.FlutterWidget>;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
    /**
     * @param config config: {children?:Array<FlutterWidget>, addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, semanticIndexOffset?:number,}
     */
    static new(config?: SliverChildListDelegateConfig): SliverChildListDelegate;
}
interface SliverChildBuilderDelegateConfig {
    builder: any;
    childCount?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
    children?: Array<bt.FlutterWidget>;
}
export declare class SliverChildBuilderDelegate extends bt.FlutterWidget {
    builder: any;
    childCount?: number;
    addAutomaticKeepAlives?: boolean;
    addRepaintBoundaries?: boolean;
    addSemanticIndexes?: boolean;
    semanticIndexOffset?: number;
    children?: Array<bt.FlutterWidget>;
    preBuild(jsWidgetHelper?: any, buildContext?: any): void;
    /**
     * @param config config: { builder:any, childCount?:number, addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, semanticIndexOffset?:number, }
     */
    static new(config?: SliverChildBuilderDelegateConfig): SliverChildBuilderDelegate;
}
interface SliverListConfig {
    delegate?: any;
    key?: bt.BasicKey;
}
export declare class SliverList extends bt.FlutterWidget {
    delegate?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {delegate?:any,key?:BasicKey}
     */
    static new(config?: SliverListConfig): SliverList;
}
interface SliverOverlapInjectorConfig {
    child?: bt.FlutterWidget;
    handle?: any;
    key?: bt.BasicKey;
}
export declare class SliverOverlapInjector extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    handle?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,handle?:any,key?:BasicKey}
     */
    static new(config?: SliverOverlapInjectorConfig): SliverOverlapInjector;
}
interface SliverFixedExtentListConfig {
    delegate?: any;
    itemExtent?: number;
    key?: bt.BasicKey;
}
export declare class SliverFixedExtentList extends bt.FlutterWidget {
    delegate?: any;
    itemExtent?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {delegate?:any, itemExtent?:number, key?:BasicKey}
     */
    static new(config?: SliverFixedExtentListConfig): SliverFixedExtentList;
}
interface SliverOverlapAbsorberConfig {
    child?: bt.FlutterWidget;
    handle?: any;
    key?: bt.BasicKey;
}
export declare class SliverOverlapAbsorber extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    handle?: any;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,handle?:any,key?:BasicKey}
     */
    static new(config?: SliverOverlapAbsorberConfig): SliverOverlapAbsorber;
}
interface SingleChildScrollViewConfig {
    child?: bt.FlutterWidget;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    padding?: bt.EdgeInsets;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    controller?: bt.ScrollController;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
}
export declare class SingleChildScrollView extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    scrollDirection?: bt.Axis;
    reverse?: boolean;
    padding?: bt.EdgeInsets;
    primary?: boolean;
    physics?: bt.ScrollPhysics;
    controller?: bt.ScrollController;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, scrollDirection?:Axis, reverse?:boolean, padding?:EdgeInsets, primary?:boolean,
      physics?:ScrollPhysics, controller?:ScrollController, dragStartBehavior?:DragStartBehavior, key?:BasicKey,}
     */
    static new(config?: SingleChildScrollViewConfig): SingleChildScrollView;
}
interface SliverToBoxAdapterConfig {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
}
export declare class SliverToBoxAdapter extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,key?:BasicKey}
     */
    static new(config?: SliverToBoxAdapterConfig): SliverToBoxAdapter;
}
interface ScaffoldConfig {
    appBar?: bt.FlutterWidget;
    body?: bt.FlutterWidget;
    floatingActionButton?: bt.FlutterWidget;
    floatingActionButtonLocation?: bt.FloatingActionButtonLocation;
    persistentFooterButtons?: Array<bt.FlutterWidget>;
    drawer?: bt.FlutterWidget;
    endDrawer?: bt.FlutterWidget;
    bottomNavigationBar?: bt.FlutterWidget;
    bottomSheet?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    resizeToAvoidBottomPadding?: boolean;
    primary?: boolean;
    key?: bt.BasicKey;
}
export declare class Scaffold extends bt.FlutterWidget {
    appBar?: bt.FlutterWidget;
    body?: bt.FlutterWidget;
    floatingActionButton?: bt.FlutterWidget;
    floatingActionButtonLocation?: bt.FloatingActionButtonLocation;
    persistentFooterButtons?: Array<bt.FlutterWidget>;
    drawer?: bt.FlutterWidget;
    endDrawer?: bt.FlutterWidget;
    bottomNavigationBar?: bt.FlutterWidget;
    bottomSheet?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    resizeToAvoidBottomPadding?: boolean;
    primary?: boolean;
    key?: bt.BasicKey;
    static of(context: any): {
        showSnackBar: (snackBar: any) => void;
        openDrawer: () => void;
    };
    /**
     * @param config config: {appBar?:FlutterWidget, body?:FlutterWidget, floatingActionButton?:FlutterWidget, floatingActionButtonLocation?:FloatingActionButtonLocation,
      persistentFooterButtons?:Array<FlutterWidget>, drawer?:FlutterWidget, endDrawer?:FlutterWidget, bottomNavigationBar?:FlutterWidget, bottomSheet?:FlutterWidget,
      backgroundColor?:Color, resizeToAvoidBottomPadding?:boolean, primary?:boolean, key?:BasicKey}
     */
    static new(config?: ScaffoldConfig): Scaffold;
}
export declare class ScaffoldState extends bt.DartClass {
    static new(): ScaffoldState;
}
interface SafeAreaConfig {
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    minimum?: number;
    key?: bt.BasicKey;
}
export declare class SafeArea extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    minimum?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,minimum?:number,key?:BasicKey}
     */
    static new(config?: SafeAreaConfig): SafeArea;
}
export declare class Scrollbar extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    key?: bt.BasicKey;
    /**
     * @param config config: {}
     */
    static new(child?: bt.FlutterWidget, key?: bt.BasicKey): Scrollbar;
}
interface SnackBarConfig {
    content?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    elevation?: number;
    shape?: any;
    behavior?: any;
    action?: any;
    duration?: bt.Duration;
    animation?: any;
    onVisible?: any;
    key?: bt.FlutterWidget;
}
export declare class SnackBar extends bt.FlutterWidget {
    content?: bt.FlutterWidget;
    backgroundColor?: bt.Color;
    elevation?: number;
    shape?: any;
    behavior?: any;
    action?: any;
    duration?: bt.Duration;
    animation?: any;
    onVisible?: any;
    key?: bt.FlutterWidget;
    /**
     * @param config config: {content?:bt.FlutterWidget, backgroundColor?:bt.Color, elevation?:number, shape?:any, behavior?:any,
      action?:any, duration?:bt.Duration, animation?:any, onVisible?:any, key?:bt.FlutterWidget}
     */
    static new(config?: SnackBarConfig): SnackBar;
}
interface TableRowConfig {
    children?: Array<bt.FlutterWidget>;
    decoration?: bt.BoxDecoration;
    key?: bt.BasicKey;
}
export declare class TableRow extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    decoration?: bt.BoxDecoration;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>,decoration?:BoxDecoration,key?:BasicKey,}
     */
    static new(config?: TableRowConfig): TableRow;
}
interface TableCellConfig {
    child?: bt.FlutterWidget;
    verticalAlignment?: bt.TableCellVerticalAlignment;
    key?: bt.BasicKey;
}
export declare class TableCell extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    verticalAlignment?: bt.TableCellVerticalAlignment;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, verticalAlignment?:TableCellVerticalAlignment, key?:BasicKey,}
     */
    static new(config?: TableCellConfig): TableCell;
}
interface TransformConfig {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    origin?: bt.Offset;
    transform?: bt.Matrix4;
    transformHitTests?: boolean;
    key?: bt.BasicKey;
}
export declare class Transform extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    alignment?: bt.Alignment;
    origin?: bt.Offset;
    transform?: bt.Matrix4;
    transformHitTests?: boolean;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget, alignment?:Alignment, origin?:Offset, transform?:Matrix4, transformHitTests?:boolean, key?:BasicKey,}
     */
    static new(config?: TransformConfig): Transform;
}
interface TableConfig {
    children?: Array<bt.FlutterWidget>;
    defaultColumnWidth?: bt.TableColumnWidth;
    defaultVerticalAlignment?: bt.TableCellVerticalAlignment;
    textDirection?: bt.TextDecoration;
    border?: bt.TableBorder;
    textBaseline?: bt.TextBaseline;
    columnWidths?: Map<string, bt.TableColumnWidth>;
    key?: bt.BasicKey;
}
export declare class Table extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    defaultColumnWidth?: bt.TableColumnWidth;
    defaultVerticalAlignment?: bt.TableCellVerticalAlignment;
    textDirection?: bt.TextDecoration;
    border?: bt.TableBorder;
    textBaseline?: bt.TextBaseline;
    columnWidths?: Map<string, bt.TableColumnWidth>;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, defaultColumnWidth?:TableColumnWidth, defaultVerticalAlignment?:TableCellVerticalAlignment,
      textDirection?:TextDecoration, border?:TableBorder, textBaseline?:TextBaseline,  columnWidths?:Map<string,TableColumnWidth>, key?:BasicKey,}
     */
    static new(config?: TableConfig): Table;
}
interface TabBarConfig {
    tabs?: Array<Tab>;
    onTap?: any;
    controller?: bt.TabController;
    isScrollable?: boolean;
    indicatorColor?: bt.Color;
    indicatorWeight?: number;
    indicatorPadding?: bt.EdgeInsets;
    indicator?: bt.BoxDecoration;
    indicatorSize?: bt.TabBarIndicatorSize;
    labelColor?: bt.Color;
    labelStyle?: bt.TextStyle;
    labelPadding?: bt.EdgeInsets;
    unselectedLabelColor?: bt.Color;
    unselectedLabelStyle?: bt.TextStyle;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
}
export declare class TabBar extends bt.FlutterWidget {
    tabs?: Array<Tab>;
    onTap?: any;
    controller?: bt.TabController;
    isScrollable?: boolean;
    indicatorColor?: bt.Color;
    indicatorWeight?: number;
    indicatorPadding?: bt.EdgeInsets;
    indicator?: bt.BoxDecoration;
    indicatorSize?: bt.TabBarIndicatorSize;
    labelColor?: bt.Color;
    labelStyle?: bt.TextStyle;
    labelPadding?: bt.EdgeInsets;
    unselectedLabelColor?: bt.Color;
    unselectedLabelStyle?: bt.TextStyle;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    /**
    * @param config config: {tabs?:Array<Tab>, onTap?:any, controller?:TabController, isScrollable?:boolean, indicatorColor?:Color, indicatorWeight?:number,
   indicatorPadding?:EdgeInsets,  indicator?:BoxDecoration, indicatorSize?:TabBarIndicatorSize,
   labelColor?:Color, labelStyle?:TextStyle, labelPadding?:EdgeInsets, unselectedLabelColor?:Color,
   unselectedLabelStyle?:TextStyle, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
    */
    static new(config?: TabBarConfig): TabBar;
}
interface TabConfig {
    child?: bt.FlutterWidget;
    text?: string;
    icon?: bt.FlutterWidget;
    iconMargin?: bt.EdgeInsets;
    key?: bt.BasicKey;
}
export declare class Tab extends bt.FlutterWidget {
    child?: bt.FlutterWidget;
    text?: string;
    icon?: bt.FlutterWidget;
    iconMargin?: bt.EdgeInsets;
    key?: bt.BasicKey;
    /**
     * @param config config: {child?:FlutterWidget,text?:string, icon?:FlutterWidget, iconMargin?:EdgeInsets, key?:BasicKey}
     */
    static new(config?: TabConfig): Tab;
}
interface TabBarViewConfig {
    children?: Array<bt.FlutterWidget>;
    controller?: bt.TabController;
    physics?: bt.ScrollPhysics;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
}
export declare class TabBarView extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    controller?: bt.TabController;
    physics?: bt.ScrollPhysics;
    dragStartBehavior?: bt.DragStartBehavior;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, controller?:TabController, physics?:ScrollPhysics, dragStartBehavior?:DragStartBehavior, key?:BasicKey}
     */
    static new(config?: TabBarViewConfig): TabBarView;
}
interface TextSpanConfig {
    children?: Array<bt.FlutterWidget>;
    style?: bt.TextStyle;
    text?: string;
    recognizer?: GestureDetector;
    semanticsLabel?: string;
}
export declare class TextSpan extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    style?: bt.TextStyle;
    text?: string;
    recognizer?: GestureDetector;
    semanticsLabel?: string;
    /**
     * @param config config: {children?:Array<FlutterWidget>, style?:TextStyle, text?:string, recognizer?:GestureDetector, semanticsLabel?:string,}
     */
    static new(config?: TextSpanConfig): TextSpan;
}
interface TextFormFieldConfig {
    controller?: bt.TextEditingController;
    initialValue?: string;
    focusNode?: any;
    decoration?: bt.InputDecoration;
    keyboardType?: bt.TextInputType;
    textCapitalization?: bt.TextCapitalization;
    textInputAction?: bt.TextInputAction;
    style?: bt.TextStyle;
    textDirection?: bt.TextDirection;
    textAlign?: bt.TextAlign;
    autofocus?: boolean;
    obscureText?: boolean;
    autocorrect?: boolean;
    autovalidate?: boolean;
    maxLengthEnforced?: boolean;
    maxLines?: number;
    maxLength?: number;
    onEditingComplete?: any;
    onFieldSubmitted?: any;
    onSaved?: any;
    validator?: any;
    inputFormatters?: any;
    enabled?: boolean;
    cursorWidth?: number;
    cursorRadius?: bt.Radius;
    cursorColor?: bt.Color;
    keyboardAppearance?: bt.Brightness;
    scrollPadding?: bt.EdgeInsets;
    enableInteractiveSelection?: boolean;
    buildCounter?: any;
    key?: bt.BasicKey;
}
export declare class TextFormField extends bt.FlutterWidget {
    controller?: bt.TextEditingController;
    initialValue?: string;
    focusNode?: any;
    decoration?: bt.InputDecoration;
    keyboardType?: bt.TextInputType;
    textCapitalization?: bt.TextCapitalization;
    textInputAction?: bt.TextInputAction;
    style?: bt.TextStyle;
    textDirection?: bt.TextDirection;
    textAlign?: bt.TextAlign;
    autofocus?: boolean;
    obscureText?: boolean;
    autocorrect?: boolean;
    autovalidate?: boolean;
    maxLengthEnforced?: boolean;
    maxLines?: number;
    maxLength?: number;
    onEditingComplete?: any;
    onFieldSubmitted?: any;
    onSaved?: any;
    validator?: any;
    inputFormatters?: any;
    enabled?: boolean;
    cursorWidth?: number;
    cursorRadius?: bt.Radius;
    cursorColor?: bt.Color;
    keyboardAppearance?: bt.Brightness;
    scrollPadding?: bt.EdgeInsets;
    enableInteractiveSelection?: boolean;
    buildCounter?: any;
    key?: bt.BasicKey;
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
    static new(config?: TextFormFieldConfig): TextFormField;
}
interface WrapConfig {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.WrapAlignment;
    spacing?: number;
    crossAxisAlignment?: bt.WrapCrossAlignment;
    textDirection?: bt.TextDecoration;
    direction?: bt.Axis;
    verticalDirection?: bt.VerticalDirection;
    runAlignment?: bt.WrapAlignment;
    runSpacing?: number;
    key?: bt.BasicKey;
}
export declare class Wrap extends bt.FlutterWidget {
    children?: Array<bt.FlutterWidget>;
    alignment?: bt.WrapAlignment;
    spacing?: number;
    crossAxisAlignment?: bt.WrapCrossAlignment;
    textDirection?: bt.TextDecoration;
    direction?: bt.Axis;
    verticalDirection?: bt.VerticalDirection;
    runAlignment?: bt.WrapAlignment;
    runSpacing?: number;
    key?: bt.BasicKey;
    /**
     * @param config config: {children?:Array<FlutterWidget>, alignment?:WrapAlignment, spacing?:number, crossAxisAlignment?:WrapCrossAlignment,
      textDirection?:TextDecoration, direction?:Axis, verticalDirection?:VerticalDirection, runAlignment?:WrapAlignment,
      runSpacing?:number, key?:BasicKey,}
     */
    static new(config?: WrapConfig): Wrap;
}
export {};
