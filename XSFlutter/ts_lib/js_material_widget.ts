/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Material Class
 */
import bt = require("./js_basic_types"); 
import fw = require("./js_framework"); 
//-------------- A -----------------
//****** AppBar ******
interface AppBarConfig {
  key?:bt.BaseKey;
  title?:fw.JSBaseWidget;
  automaticallyImplyLeading?:boolean;
  actions?:Array<fw.JSBaseWidget>;
  leading?:fw.JSBaseWidget;
  flexibleSpace?:fw.JSBaseWidget;
  bottom?:fw.JSBaseWidget;
  elevation?:number;
  backgroundColor?:bt.Color;
  brightness?:bt.Brightness;
  primary?:boolean;
  centerTitle?:boolean;
  titleSpacing?:number;
  toolbarOpacity?:number;
  bottomOpacity?:number;
}
export class AppBar extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  title?:fw.JSBaseWidget;
  automaticallyImplyLeading?:boolean;
  actions?:Array<fw.JSBaseWidget>;
  leading?:fw.JSBaseWidget;
  flexibleSpace?:fw.JSBaseWidget;
  bottom?:fw.JSBaseWidget;
  elevation?:number;
  backgroundColor?:bt.Color;
  brightness?:bt.Brightness;
  primary?:boolean;
  centerTitle?:boolean;
  titleSpacing?:number;
  toolbarOpacity?:number;
  bottomOpacity?:number;
    
  /**
   * @param config config: {key?:BaseKey,title?:FlutterWidget,automaticallyImplyLeading?:boolean,actions?:Array<FlutterWidget>,leading?:FlutterWidget,
    flexibleSpace?:FlutterWidget,bottom?:FlutterWidget,elevation?:number,backgroundColor?:Color,brightness?:Brightness,
    primary?:boolean,centerTitle?:boolean,titleSpacing?:number,toolbarOpacity?:number,bottomOpacity?:number }
   */
  static new(config?: AppBarConfig){
      var v = new AppBar();
      if(config!=null && config!=undefined){
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

//****** Align ******
interface AlignConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;
}
export class Align extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;
  
  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget,alignment?:Alignment, widthFactor?:number, heightFactor?:number,}
   */
  static new(config?: AlignConfig) {
    var v = new Align();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.alignment = config.alignment;
      v.widthFactor = config.widthFactor;
      v.heightFactor = config.heightFactor;
      v.child = config.child;
    }
    return v;
  }
}

//****** AspectRatio ******
interface AspectRatioConfig {
  child?:fw.JSBaseWidget;
  aspectRatio?:number;
  key?:bt.BaseKey;
}
export class AspectRatio extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  aspectRatio?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget, aspectRatio?:number,}
   */
  static new(config?: AspectRatioConfig) {
    var v = new AspectRatio();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.aspectRatio = config.aspectRatio;
      v.child = config.child;
    }
    return v;
  }
}

//****** AnnotatedRegion ******
interface AnnotatedRegionConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  value?:number;
  sized?:boolean;
}
export class AnnotatedRegion extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  value?:number;
  sized?:boolean;

  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget, value?:number, sized?:boolean,}
   */
  static new(config?: AnnotatedRegionConfig){
    var v = new AnnotatedRegion();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.child = config.child;
      v.value = config.value;
      v.sized = config.sized;
    }
    return v ;
  }
}

//****** AssetImage ******
interface AssetImageConfig {
  assetName?:string;
  bundle?:bt.BaseAssetBundle;
  packageName?:string;
}
export class AssetImage extends fw.JSBaseWidget {
  assetName?:string;
  bundle?:bt.BaseAssetBundle;
  packageName?:string;

  /**
   * @param config config: {assetName:string, bundle?:BaseAssetBundle, packageName?:string}
   */
  static new(config?: AssetImageConfig) {
    var v = new AssetImage();
    if(config!=null && config!=undefined){
      v.assetName = config.assetName;
      v.bundle = config.bundle;
      v.packageName = config.packageName;
    }
    return v;
  }
}

//****** AnimatedCrossFade ******
interface AnimatedCrossFadeConfig {
  key?:bt.BaseKey;
  firstChild?:fw.JSBaseWidget;
  secondChild?:fw.JSBaseWidget;
  firstCurve?:bt.Curve;
  secondCurve?:bt.Curve;
  sizeCurve?:bt.Curve;
  alignment?:bt.Alignment;
  crossFadeState?:bt.CrossFadeState;
  duration?:bt.Duration;
  reverseDuration?:bt.Duration;
  layoutBuilder?:any;
}
export class AnimatedCrossFade extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  firstChild?:fw.JSBaseWidget;
  secondChild?:fw.JSBaseWidget;
  firstCurve?:bt.Curve;
  secondCurve?:bt.Curve;
  sizeCurve?:bt.Curve;
  alignment?:bt.Alignment;
  crossFadeState?:bt.CrossFadeState;
  duration?:bt.Duration;
  reverseDuration?:bt.Duration;
  layoutBuilder?:any;
  /**
   * @param config config: {key?:bt.BaseKey, firstChild?:fw.JSBaseWidget, secondChild?:fw.JSBaseWidget, firstCurve?:bt.Curve, secondCurve?:bt.Curve,
  sizeCurve?:bt.Curve, alignment?:bt.Alignment, crossFadeState?:bt.CrossFadeState, duration?:bt.Duration, reverseDuration?:bt.Duration, layoutBuilder?:any}
   */
  static new(config: AnimatedCrossFadeConfig) {
    var v = new AnimatedCrossFade();
    if(config!=null && config!=undefined){
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
  };
}

//****** AnimatedOpacity ******
interface AnimatedOpacityConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  opacity?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
  alwaysIncludeSemantics?:boolean;
}
export class AnimatedOpacity extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  opacity?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
  alwaysIncludeSemantics?:boolean;

  /**
   * @param config config: {key?:bt.BaseKey, child?:fw.JSBaseWidget, opacity?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any, alwaysIncludeSemantics?:boolean}
   */
  static new(config: AnimatedOpacityConfig) {
    var v = new AnimatedOpacity();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.child = config.child;
      v.opacity = config.opacity;
      v.curve = config.curve;
      v.duration = config.duration;
      v.onEnd = config.onEnd;
      v.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
    }
    return v;
  };
}

//****** AnimatedBuilder ******
interface AnimatedBuilderConfig {
  key?:bt.BaseKey;
  animation?:bt.Animation;
  builder?:any;
  child?:fw.JSBaseWidget;
  widget?:fw.JSBaseWidget;
}
export class AnimatedBuilder extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  animation?:bt.Animation;
  builder?:any;
  child?:fw.JSBaseWidget;
  widget?:fw.JSBaseWidget;

  /**
   * @param config config: {key?:bt.BaseKey, animation?:bt.Animation, builder?:any, child?:fw.JSBaseWidget, widget?:fw.JSBaseWidget,}
   */
  static new(config: AnimatedBuilderConfig) {
    var v = new AnimatedBuilder();
    v.key = config.key;
    v.animation = config.animation;
    v.builder = config.builder;
    v.child = config.child;
    v.widget = config.widget;
    return v;
  }
}

//****** AnimatedContainer ******
interface AnimatedContainerConfig {
  key?:bt.BaseKey;
  alignment?:bt.Alignment;
  margin?:bt.EdgeInsets;
  padding?:bt.EdgeInsets;
  child?:fw.JSBaseWidget;
  color?:bt.Color;
  decoration?:bt.BoxDecoration;
  foregroundDecoration?:bt.BoxDecoration;
  width?:number;
  height?:number;
  constraints?:bt.BoxConstraints;
  transform?:bt.Matrix4;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
}
export class AnimatedContainer extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  alignment?:bt.Alignment;
  margin?:bt.EdgeInsets;
  padding?:bt.EdgeInsets;
  child?:fw.JSBaseWidget;
  color?:bt.Color;
  decoration?:bt.BoxDecoration;
  foregroundDecoration?:bt.BoxDecoration;
  width?:number;
  height?:number;
  constraints?:bt.BoxConstraints;
  transform?:bt.Matrix4;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;

  /**
   * @param config config: {key?:BaseKey, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, child?:FlutterWidget, color?:Color, decoration?:BoxDecoration, 
   foregroundDecoration?:BoxDecoration, width?:number, height?:number, constraints?:BoxConstraints, transform?:Matrix4, curve?:Curve, duration?:Duration, onEnd?:any,}
   */
  static new(config: AnimatedContainerConfig) {
    var v = new AnimatedContainer();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.alignment = config.alignment;
      v.margin = config.margin;
      v.padding = config.padding;
      v.child = config.child;
      v.color = config.color;
      v.decoration= config.decoration;
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

//****** AnimatedPhysicalModel ******
interface AnimatedPhysicalModelConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  shape?:any;
  clipBehavior?:bt.Clip;
  borderRadius?:bt.BorderRadius;
  elevation?:number;
  color?:bt.Color;
  animateColor?:boolean;
  shadowColor?:bt.Color;
  animateShadowColor?:boolean;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
}
export class AnimatedPhysicalModel extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  shape?:any;
  clipBehavior?:bt.Clip;
  borderRadius?:bt.BorderRadius;
  elevation?:number;
  color?:bt.Color;
  animateColor?:boolean;
  shadowColor?:bt.Color;
  animateShadowColor?:boolean;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;

  /**
   * @param config config: {key?:bt.BaseKey, child?:fw.JSBaseWidget, shape?:any, clipBehavior?:bt.Clip, borderRadius?:bt.BorderRadius, elevation?:number,
    color?:bt.Color, animateColor?:boolean, shadowColor?:bt.Color, animateShadowColor?:boolean, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
   */
  static new(config: AnimatedPhysicalModelConfig) {
    var v = new AnimatedPhysicalModel();
    if(config!=null && config!=undefined){
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

//****** AnimatedPositioned ******
interface AnimatedPositionedConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  width?:number;
  height?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
}
export class AnimatedPositioned extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  width?:number;
  height?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;

  /**
   * @param config config: {key?:bt.BaseKey, child?:fw.JSBaseWidget, left?:number, top?:number, right?:number, bottom?:number,
    width?:number, height?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any,}
   */
  static new(config: AnimatedPositionedConfig) {
    var v = new AnimatedPositioned();
    if(config!=null && config!=undefined){
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

//****** AnimatedSize ******
interface AnimatedSizeConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  curve?:bt.Curve;
  duration?:bt.Duration;
  reverseDuration?:bt.Duration;
  vsync?:any;
}
export class AnimatedSize extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  curve?:bt.Curve;
  duration?:bt.Duration;
  reverseDuration?:bt.Duration;
  vsync?:any;

  /**
   * @param config config: {key?:bt.BaseKey, child?:fw.JSBaseWidget, alignment?:bt.Alignment, curve?:bt.Curve, duration?:bt.Duration, reverseDuration?:bt.Duration, vsync?:any}
   */
  static new(config: AnimatedSizeConfig) {
    var v = new AnimatedSize();
    if(config!=null && config!=undefined){
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

//****** AnimatedDefaultTextStyle ******
interface AnimatedDefaultTextStyleConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  style?:bt.TextStyle;
  textAlign?:bt.TextAlign;
  softWrap?:boolean;
  overflow?:bt.TextOverflow;
  maxLines?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
}
export class AnimatedDefaultTextStyle extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  style?:bt.TextStyle;
  textAlign?:bt.TextAlign;
  softWrap?:boolean;
  overflow?:bt.TextOverflow;
  maxLines?:number;
  curve?:bt.Curve;
  duration?:bt.Duration;
  onEnd?:any;
  /**
   * @param config config: {key?:bt.BaseKey, child?:fw.JSBaseWidget, style?:bt.TextStyle, textAlign?:bt.TextAlign, softWrap?:boolean, overflow?:bt.TextOverflow,
    maxLines?:number, curve?:bt.Curve, duration?:bt.Duration, onEnd?:any}
   */
  static new(config: AnimatedDefaultTextStyleConfig) {
    var v = new AnimatedDefaultTextStyle();
    if(config!=null && config!=undefined){
      v.key = config.key
      v.child = config.child;
      v.style = config.style;
      v.softWrap = config.softWrap;
      v.textAlign = config.textAlign;
      v.softWrap = config.softWrap;
      v.maxLines = config.maxLines;
      v.curve = config.curve;
      v.duration = config.duration;
      v.onEnd =config.onEnd;
    }
    return v;
  }
}


//-------------- B -----------------
//****** BottomNavigationBarItem ******
interface BottomNavigationBarItemConfig {
  icon?:fw.JSBaseWidget;
  title?:fw.JSBaseWidget;
  activeIcon?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
}
export class BottomNavigationBarItem extends fw.JSBaseWidget {
  icon?:fw.JSBaseWidget;
  title?:fw.JSBaseWidget;
  activeIcon?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;

  /**
   * @param config config: {icon?:FlutterWidget, title?:FlutterWidget, activeIcon?:FlutterWidget, backgroundColor?:Color}
   */
  static new (config?: BottomNavigationBarItemConfig) {
    var v = new BottomNavigationBarItem();
    if(config!=null && config!=undefined){
      v.icon = config.icon;
      v.title = config.title;
      v.activeIcon = config.activeIcon;
      v.backgroundColor = config.backgroundColor;
    }
    return v;
  }
}

//****** Baseline ******
interface BaselineConfig {
  child?:fw.JSBaseWidget;
  baseline?:number;
  baselineType?:bt.TextBaseline;
  key?:bt.BaseKey;
}
export class Baseline extends fw.JSBaseWidget  {
  child?:fw.JSBaseWidget;
  baseline?:number;
  baselineType?:bt.TextBaseline;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey,child?:FlutterWidget,baseline?:number,baselineType?:TextBaseline,}
   */
  static new(config?: BaselineConfig) {
    var v = new Baseline();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.baseline = config.baseline;
      v.baselineType = config.baselineType;
      v.child = config.child;
    }
    return v;
  }
}

//****** ButtonBar ******
interface ButtonBarConfig {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.MainAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  key?:bt.BaseKey;
}
export class ButtonBar extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.MainAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey, children?:Array<FlutterWidget>, alignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, }
   */
  static new(config?: ButtonBarConfig) {
    var v = new ButtonBar();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.alignment = config.alignment;
      v.mainAxisSize = config.mainAxisSize;
      v.children = config.children;
    }
    return v;
  }
}

//****** ButtonBar ******
interface BottomAppBarConfig {
  child?:fw.JSBaseWidget;
  color?:bt.Color;
  elevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  notchMargin?:number;
  key?:bt.BaseKey;
}
export class BottomAppBar extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  color?:bt.Color;
  elevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  notchMargin?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, notchMargin?:number, }
   */
  static new(config?: BottomAppBarConfig) {
    var v = new BottomAppBar();
    if(config!=null && config!=undefined){
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

//****** BottomNavigationBar ******
interface BottomNavigationBarConfig {
  items?:Array<BottomNavigationBarItem>;
  onTap?:any;
  currentIndex?:number;
  type?:bt.BottomNavigationBarType;
  fixedColor?:bt.Color;
  iconSize?:number;
  key?:bt.BaseKey;
}
export class BottomNavigationBar extends fw.JSBaseWidget {
  items?:Array<BottomNavigationBarItem>;
  onTap?:any;
  currentIndex?:number;
  type?:bt.BottomNavigationBarType;
  fixedColor?:bt.Color;
  iconSize?:number;
  key?:bt.BaseKey;
 
  /**
   * @param config config: {items?:Array<BottomNavigationBarItem>, onTap?:any, currentIndex?:number, type?:BottomNavigationBarType, fixedColor?:Color, iconSize?:number, key?:BaseKey}
   */
  static new(config?: BottomNavigationBarConfig) {
    var v = new BottomNavigationBar();
    if(config!=null && config!=undefined){
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

//****** Builder ******
export class Builder extends fw.JSBaseWidget {
  builder?:any;
  key?:bt.BaseKey;
  child?:Builder;

  preBuild(jsWidgetHelper?:any, buildContext?:any) {
    if (this.builder) {
      this.child = this.builder(buildContext);
      delete this.builder;
    }
    super.preBuild(jsWidgetHelper, buildContext);
  }

  static new(builder?:any, key?:bt.BaseKey) {
    var v = new Builder();
    v.key = key;
    v.builder = builder;

    // 本地创建的，供flutter使用
    v.child = undefined;
    return v;
  }
}

//-------------- C -----------------
//****** Container ******
interface ContainerConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  margin?:bt.EdgeInsets;
  padding?:bt.EdgeInsets;
  color?:bt.Color;
  width?:number;
  height?:number;
  decoration?:bt.BoxDecoration;
  foregroundDecoration?:bt.BoxDecoration;
  constraints?:bt.BoxConstraints;
  transform?:bt.Matrix4;
  key?:bt.BaseKey;
}
export class Container extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  margin?:bt.EdgeInsets;
  padding?:bt.EdgeInsets;
  color?:bt.Color;
  width?:number;
  height?:number;
  decoration?:bt.BoxDecoration;
  foregroundDecoration?:bt.BoxDecoration;
  constraints?:bt.BoxConstraints;
  transform?:bt.Matrix4;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget, alignment?:Alignment, margin?:EdgeInsets, padding?:EdgeInsets, color?:Color,
    width?:number, height?:number, decoration?:BoxDecoration, foregroundDecoration?:BoxDecoration,
    constraints?:BoxConstraints, transform?:Matrix4,}
   */
  static new(config?: ContainerConfig) {
      var v = new Container();
      if(config!=null && config!=undefined){
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

//****** Center ******
interface CenterConfig {
  child?:fw.JSBaseWidget;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;
}
export class Center extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {key?:BaseKey, child?:FlutterWidget, widthFactor?:number, heightFactor?:number, }
   */
  static new(config?: CenterConfig) {
    var v = new Center();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.widthFactor = config.widthFactor;
      v.heightFactor = config.heightFactor;
      v.child = config.child;
    }
    return v;
  }
}

//****** CircleAvatar ******
interface CircleAvatarConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  foregroundColor?:bt.Color
  backgroundImage?:any;
  radius?:number;
  minRadius?:number;
  maxRadius?:number;
}
export class CircleAvatar extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  foregroundColor?:bt.Color
  backgroundImage?:any;
  radius?:number;
  minRadius?:number;
  maxRadius?:number;

  /**
   * @param config config: {child?:FlutterWidget, backgroundColor?:Color, foregroundColor?:Color, radius?:number, backgroundImage?:any,minRadius?:number, maxRadius?:number,key?:BaseKey, }
   */
  static new(config : CircleAvatarConfig) {
    var v = new CircleAvatar();
    if(config!=null && config!=undefined){
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

//****** Chip ******
interface ChipConfig {
  key?:bt.BaseKey;
  avatar?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
  labelStyle?:bt.TextStyle;
  labelPadding?:bt.EdgeInsets;
  deleteIcon?:fw.JSBaseWidget;
  onDeleted?:any;
  deleteIconColor?:bt.Color;
  deleteButtonTooltipMessage?:string;
  clipBehavior?:bt.Clip;
  backgroundColor?:bt.Color;
  padding?:bt.EdgeInsets;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  elevation?:number;
}
export class Chip extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  avatar?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
  labelStyle?:bt.TextStyle;
  labelPadding?:bt.EdgeInsets;
  deleteIcon?:fw.JSBaseWidget;
  onDeleted?:any;
  deleteIconColor?:bt.Color;
  deleteButtonTooltipMessage?:string;
  clipBehavior?:bt.Clip;
  backgroundColor?:bt.Color;
  padding?:bt.EdgeInsets;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  elevation?:number;

  /**
   * @param config config: {avatar?:FlutterWidget,label?:FlutterWidget,labelStyle?:TextStyle,labelPadding?:EdgeInsets,deleteIcon?:FlutterWidget,
    onDeleted?:any, deleteIconColor?:Color, deleteButtonTooltipMessage?:string, clipBehavior?:Clip,
    backgroundColor?:Color, padding?:EdgeInsets, materialTapTargetSize?:MaterialTapTargetSize,elevation?:number,key?:BaseKey,}
   */
  static new (config?: ChipConfig) {
    var v = new Chip();
    if(config!=null && config!=undefined){
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

//****** ClipRRect ******
interface ClipRRectConfig {
  key?:bt.BaseKey;
  borderRadius?:bt.BorderRadius;
  clipBehavior?:bt.Clip;
  child?:fw.JSBaseWidget;
}
export class ClipRRect extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  borderRadius?:bt.BorderRadius;
  clipBehavior?:bt.Clip;
  child?:fw.JSBaseWidget;
  
  /**
   * @param config config: {child?:FlutterWidget,borderRadius?:BorderRadius,clipBehavior?:Clip,key?:BaseKey}
   */
  static new(config?: ClipRRectConfig){
    var v = new ClipRRect();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.borderRadius = config.borderRadius;
      v.clipBehavior = config.clipBehavior;
      v.child = config.child;
    }
    return v;
  }
}

//****** ConstrainedBox ******
interface ConstrainedBoxConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  constraints?:bt.BoxConstraints;  
}
export class ConstrainedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  constraints?:bt.BoxConstraints;
  key?:bt.BaseKey;
  
  /**
   * @param config config: {child?:FlutterWidget, constraints?:BoxConstraints, key?:BaseKey,}
   */
  static new(config?: ConstrainedBoxConfig) {
    var v = new ConstrainedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.constraints = config.constraints;
      v.child = config.child;
    }
    return v;
  }
}

//****** CustomSingleChildLayout ******
interface CustomSingleChildLayoutConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  delegate?:any;
}
export class CustomSingleChildLayout extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  delegate?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, delegate?:any, key?:BaseKey,}
   */
  static new(config?: CustomSingleChildLayoutConfig) {
    var v =new CustomSingleChildLayout();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
      v.child = config.child;
    }
    return v;
  }
}

//****** Column ******
interface ColumnConfig {
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;
  mainAxisAlignment?:bt.MainAxisAlignment;
  crossAxisAlignment?:bt.CrossAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  textDirection?:bt.TextDirection;
  verticalDirection?:bt.VerticalDirection;
  textBaseline?:bt.TextBaseline;
}
export class Column extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  mainAxisAlignment?:bt.MainAxisAlignment;
  crossAxisAlignment?:bt.CrossAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  textDirection?:bt.TextDirection;
  verticalDirection?:bt.VerticalDirection;
  textBaseline?:bt.TextBaseline;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, crossAxisAlignment?:CrossAxisAlignment,
    mainAxisSize?:MainAxisSize, textDirection?:TextDirection, verticalDirection?:VerticalDirection,
    textBaseline?:TextBaseline, key?:BaseKey,}
   */
  static new(config?: ColumnConfig) {
      var v = new Column();
      if(config!=null && config!=undefined){
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

//****** CustomMultiChildLayout ******
interface CustomMultiChildLayoutConfig {
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;
  delegate?:any;
}
export class CustomMultiChildLayout extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  delegate?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BaseKey}
   */
  static new(config?: CustomMultiChildLayoutConfig) {
    var v = new CustomMultiChildLayout();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
      v.children = config.children;
    }
    return v;
  }
}

//****** CustomScrollView ******
interface CustomScrollViewConfig {
  slivers?:fw.JSBaseWidget;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  shrinkWrap?:boolean;
  center?:bt.BaseKey;
  anchor?:number;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;
}
export class CustomScrollView extends fw.JSBaseWidget {
  slivers?:fw.JSBaseWidget;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  shrinkWrap?:boolean;
  center?:bt.BaseKey;
  anchor?:number;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;

  /**
   * @param config config: {slivers?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean, primary?:boolean,
    physics?:ScrollPhysics, shrinkWrap?:boolean, center?:BaseKey, anchor?:number, cacheExtent?:number,
    semanticChildCount?:number, dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static new(config?: CustomScrollViewConfig) {
      var v = new CustomScrollView();
      if(config!=null && config!=undefined){
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

//****** Card ******
interface CardConfig {
  child?:fw.JSBaseWidget;
  margin?:bt.EdgeInsets;
  color?:bt.Color;
  elevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  semanticContainer?:boolean;
  key?:bt.BaseKey;
}
export class Card extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  margin?:bt.EdgeInsets;
  color?:bt.Color;
  elevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  semanticContainer?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, margin?:EdgeInsets, color?:Color, elevation?:number, shape?:any, clipBehavior?:Clip, semanticContainer?:boolean, key?:BaseKey}
   */
  static new(config?: CardConfig) {
    var v = new Card();
    if(config!=null && config!=undefined){
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

//-------------- D -----------------
//****** DropdownMenuItem ******
interface DropdownMenuItemConfig {
  child?:fw.JSBaseWidget;  
  value?:number;
  key?:bt.BaseKey;
}
export class DropdownMenuItem extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;  
  value?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,value?:number,key?:BaseKey}
   */
  static new(config?: DropdownMenuItemConfig) {
    var v = new DropdownMenuItem();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.value = config.value;
      v.child = config.child;
    }
    return v;
  }
}

//****** DecoratedBox ******
interface DecoratedBoxConfig {
  child?:fw.JSBaseWidget;
  decoration?:bt.BoxDecoration;
  position?:bt.DecorationPosition;
  key?:bt.BaseKey;
}
export class DecoratedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  decoration?:bt.BoxDecoration;
  position?:bt.DecorationPosition;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, decoration?:BoxDecoration, position?:DecorationPosition, key?:BaseKey,}
   */
  static new(config?: DecoratedBoxConfig) {
    var v = new DecoratedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.decoration = config.decoration;
      v.position = config.position;
      v.child = config.child;
    }
    return v;
  }
}

//****** DropdownButton ******
interface DropdownButtonConfig {
  items?:Array<DropdownMenuItem>;
  onChanged?:any;
  value?:any;
  hint?:fw.JSBaseWidget;
  disabledHint?:fw.JSBaseWidget;
  elevation?:number;
  style?:bt.TextStyle;
  iconSize?:number;
  isDense?:boolean;
  isExpanded?:boolean;
  key?:bt.BaseKey;
}
export class DropdownButton extends fw.JSBaseWidget {
  items?:Array<DropdownMenuItem>;
  onChanged?:any;
  value?:any;
  hint?:fw.JSBaseWidget;
  disabledHint?:fw.JSBaseWidget;
  elevation?:number;
  style?:bt.TextStyle;
  iconSize?:number;
  isDense?:boolean;
  isExpanded?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {items?:Array<DropdownMenuItem>, onChanged?:any, value?:any, hint?:FlutterWidget,
    disabledHint?:FlutterWidget, elevation?:number, style?:TextStyle, iconSize?:number,
    isDense?:boolean, isExpanded?:boolean, key?:BaseKey}
   */
  static new(config?: DropdownButtonConfig) {
      var v = new DropdownButton();
      if(config!=null && config!=undefined){
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

//****** DefaultTabController ******
interface DefaultTabControllerConfig {
  child?:fw.JSBaseWidget;
  length?:number;
  initialIndex?:number;
  key?:bt.BaseKey;
}
export class DefaultTabController extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  length?:number;
  initialIndex?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, length?:number, initialIndex?:number, key?:BaseKey}
   */
  static new(config?: DefaultTabControllerConfig) {
    var v = new DefaultTabController();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.length = config.length;
      v.initialIndex = config.initialIndex;
      v.child = config.child;
    }
    return v;
  }
}

//****** DecorationImage ******
interface DecorationImageConfig {
  image?:any;
  alignment?:bt.Alignment;
  colorFilter?:bt.ColorFilter;
  fit?:bt.BoxFit;
  centerSlice?:bt.Rect;
  repeat?:bt.ImageRepeat;
  matchTextDirection?:boolean;
  scale?:number;
}
export class DecorationImage extends fw.JSBaseWidget {
  image?:any;
  alignment?:bt.Alignment;
  colorFilter?:bt.ColorFilter;
  fit?:bt.BoxFit;
  centerSlice?:bt.Rect;
  repeat?:bt.ImageRepeat;
  matchTextDirection?:boolean;
  scale?:number;
  

  /**
   * @param config config: {image?:any, alignment?:Alignment, colorFilter?:ColorFilter, fit?:BoxFit, centerSlice?:Rect, repeat?:ImageRepeat, matchTextDirection?:boolean, scale?:number,}
   */
  static new(config?: DecorationImageConfig) {
    var v = new DecorationImage();
    if(config!=null && config!=undefined){
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

//****** DefaultTextStyle ******
interface DefaultTextStyleConfig {
  child?:fw.JSBaseWidget;
  style?:bt.TextStyle;
  textAlign?:bt.TextAlign;
  softWrap?:boolean;
  overflow?:bt.TextOverflow;
  maxLines?:number;
  key?:bt.BaseKey;
}
export class DefaultTextStyle extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  style?:bt.TextStyle;
  textAlign?:bt.TextAlign;
  softWrap?:boolean;
  overflow?:bt.TextOverflow;
  maxLines?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, style?:TextStyle, textAlign?:TextAlign, softWrap?:boolean, overflow?:TextOverflow, maxLines?:number, key?:BaseKey}
   */
  static new(config?: DefaultTextStyleConfig) {
    var v = new DefaultTextStyle();
    if(config!=null && config!=undefined){
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

//****** DecoratedBoxTransition ******
interface DecoratedBoxTransitionConfig {
  key?:bt.BaseKey;
  decoration?:any;
  position?:bt.DecorationPosition;
  child?:fw.JSBaseWidget;
}
export class DecoratedBoxTransition extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  decoration?:any;
  position?:bt.DecorationPosition;
  child?:fw.JSBaseWidget;
  /**
   * @param config config: {key?:bt.BaseKey, decoration?:any, position?:bt.DecorationPosition, child?:fw.JSBaseWidget}
   */
  static new(config: DecoratedBoxTransitionConfig) {
    var v = new DecoratedBoxTransition();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.decoration = config.decoration;
      v.position = config.position;
      v.child = config.child;
    }
    return v;
  }
}

//-------------- E -----------------
//****** Expanded ******
interface ExpandedConfig {
  child?:fw.JSBaseWidget;
  flex?:number;
  key?:bt.BaseKey;
}
export class Expanded extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  flex?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, flex?:number, key?:BaseKey}
   */
  static new(config?: ExpandedConfig) {
    var v = new Expanded();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.flex = config.flex;
      v.child = config.child;
    }
    return v;
  }
}

//****** ExactAssetImage ******
interface ExactAssetImageConfig {
  assetName?:string;
  scale?:number;
  bundle?:bt.BaseAssetBundle;
  packageName?:string;
}
export class ExactAssetImage extends fw.JSBaseWidget {
  assetName?:string;
  scale?:number;
  bundle?:bt.BaseAssetBundle;
  packageName?:string;

  /**
   * @param config config: {assetName:string, scale?:number, bundle?:BaseAssetBundle, packageName?:string}
   */
  static new(config?: ExactAssetImageConfig) {
    var v = new ExactAssetImage();
    if(config!=null && config!=undefined){
      v.assetName = config.assetName;
      v.scale = config.scale;
      v.bundle = config.bundle;
      v.packageName = config.packageName;
    }
    return v;
  }
}

//-------------- F -----------------
//****** FittedBox ******
interface FittedBoxConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  fit?:bt.BoxFit;
  key?:bt.BaseKey;
}
export class FittedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  fit?:bt.BoxFit;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, alignment?:Alignment, fit?:BoxFit, key?:BaseKey}
   */
  static new (config : FittedBoxConfig) {
    var v = new FittedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.fit = config.fit;
      v.alignment = config.alignment;
      v.child = config.child;
    }
    return v;
  }
}

//****** FractionallySizedBox ******
interface FractionallySizedBoxConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;
}
export class FractionallySizedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  widthFactor?:number;
  heightFactor?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, alignment?:Alignment, widthFactor?:number, heightFactor?:number, key?:BaseKey}
   */
  static new(config?: FractionallySizedBoxConfig) {
    var v = new FractionallySizedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.alignment = config.alignment;
      v.widthFactor = config.widthFactor;
      v.heightFactor = config.heightFactor;
      v.child = config.child;
    }
    return v;
  }

}

//****** Flow ******
interface FlowConfig {
  children?:Array<fw.JSBaseWidget>;
  delegate?:any;
  key?:bt.BaseKey;
}
export class Flow extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  delegate?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, delegate?:any, key?:BaseKey,}
   */
  static new (config : FlowConfig) {
    var v = new Flow();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
      v.children = config.children;
    }
    return v;
  }
}

//****** FlatButton ******
interface FlatButtonConfig {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  padding?:bt.EdgeInsets;
  onHighlightChanged?:any;
  textTheme?:bt.ButtonTextTheme;
  textColor?:bt.Color;
  disabledTextColor?:bt.Color;
  color?:bt.Color;
  disabledColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  colorBrightness?:bt.Brightness;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  key?:bt.BaseKey;

  staticFunctionName?:string;
  icon?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
}
export class FlatButton extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  padding?:bt.EdgeInsets;
  onHighlightChanged?:any;
  textTheme?:bt.ButtonTextTheme;
  textColor?:bt.Color;
  disabledTextColor?:bt.Color;
  color?:bt.Color;
  disabledColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  colorBrightness?:bt.Brightness;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  key?:bt.BaseKey;

  staticFunctionName?:string;
  icon?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
  
  /**
   * @param config config: {child?:FlutterWidget, onPressed?:any, padding?:EdgeInsets, onHighlightChanged?:any, textTheme?:ButtonTextTheme, textColor?:Color,
    disabledTextColor?:Color, color?:Color, disabledColor?:Color, highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness,
    shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BaseKey}
   */
  static new(config?: FlatButtonConfig) {
    var v = new FlatButton();
    if(config!=null && config!=undefined){
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
    shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, key?:BaseKey}
   */
  static icon(config?: FlatButtonConfig) {
    let v = new FlatButton();
    v.staticFunctionName = "icon";
    if(config!=null && config!=undefined){
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

//****** FlatButton ******
interface FloatingActionButtonConfig {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  foregroundColor?:bt.Color;
  backgroundColor?:bt.Color;
  mini?:boolean;
  elevation?:number;
  highlightElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  isExtended?:boolean;
  tooltip?:string;
  key?:bt.BaseKey;
}
export class FloatingActionButton extends fw.JSBaseWidget  {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  foregroundColor?:bt.Color;
  backgroundColor?:bt.Color;
  mini?:boolean;
  elevation?:number;
  highlightElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  isExtended?:boolean;
  tooltip?:string;
  key?:bt.BaseKey;


  /**
   * @param config config: {child?:FlutterWidget, onPressed?:any, foregroundColor?:Color, backgroundColor?:Color, mini?:boolean, elevation?:number, highlightElevation?:number, 
    shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, isExtended?:boolean,  tooltip?:string, key?:BaseKey}
   */
  static new(config?: FloatingActionButtonConfig) {
    var v =  new FloatingActionButton();
    if(config!=null && config!=undefined){
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
    return v ;
  }
}

//****** FlexibleSpaceBar ******
interface FlexibleSpaceBarConfig {
  title?:fw.JSBaseWidget;
  background?:fw.JSBaseWidget;
  centerTitle?:boolean;
  collapseMode?:bt.CollapseMode;
  key?:bt.BaseKey;
}
export class FlexibleSpaceBar extends fw.JSBaseWidget {
  title?:fw.JSBaseWidget;
  background?:fw.JSBaseWidget;
  centerTitle?:boolean;
  collapseMode?:bt.CollapseMode;
  key?:bt.BaseKey;

  /**
   * @param config config: {title?:FlutterWidget, background?:FlutterWidget, centerTitle?:boolean, collapseMode?:CollapseMode, key?:BaseKey}
   */
  static new(config?: FlexibleSpaceBarConfig) {
    var v = new FlexibleSpaceBar();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.title = config.title;
      v.background = config.background;
      v.centerTitle = config.centerTitle;
      v.collapseMode = config.collapseMode;
    }
    return v;
  }
}

//****** FlutterLogo ******
interface FlutterLogoConfig {
  size?:number;
  colors?:bt.Color;
  textColor?:bt.Color;
  style?:bt.FlutterLogoStyle;
  duration?:bt.Duration;
  curve?:bt.Curve;
  key?:bt.BaseKey;
}
export class FlutterLogo extends fw.JSBaseWidget {
  size?:number;
  colors?:bt.Color;
  textColor?:bt.Color;
  style?:bt.FlutterLogoStyle;
  duration?:bt.Duration;
  curve?:bt.Curve;
  key?:bt.BaseKey;

  /**
   * @param config config: {size?:number, colors?:Color, textColor?:Color, style?:FlutterLogoStyle, duration?:Duration, curve?:Curves, key?:BaseKey}
   */
  static new(config?: FlutterLogoConfig) {
    var v = new FlutterLogo();
    if(config!=null && config!=undefined){
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

//****** FileImage ******
interface FileImageConfig {
  file?:bt.File;
  scale?:number;
}
export class FileImage extends fw.JSBaseWidget {
  file?:bt.File;
  scale?:number;

  /**
   * @param config config: {file?:File,scale?:number}
   */
  static new(config?: FileImageConfig) {
    var v = new FileImage();
    if(config!=null && config!=undefined){
      v.file = config.file;
      v.scale = config.scale;
    }
    return v;
  }
}

//-------------- G -----------------
//****** GestureDetector ******
interface GestureDetectorConfig {
  child?:fw.JSBaseWidget;
  onTap?:any;
  onTapDown?:any;
  onTapUp?:any;
  onTapCancel?:any;
  onDoubleTap?:any;
  onLongPress?:any;
  onLongPressUp?:any;
  onVerticalDragDown?:any;
  onVerticalDragStart?:any;
  onVerticalDragUpdate?:any;
  onVerticalDragEnd?:any;
  onVerticalDragCancel?:any;
  onHorizontalDragDown?:any;
  onHorizontalDragStart?:any;
  onHorizontalDragUpdate?:any;
  onHorizontalDragEnd?:any;
  onHorizontalDragCancel?:any;
  onPanDown?:any;
  onPanStart?:any;
  onPanUpdate?:any;
  onPanEnd?:any;
  onPanCancel?:any;
  onScaleStart?:any;
  onScaleUpdate?:any;
  onScaleEnd?:any;
  behavior?:bt.HitTestBehavior;
  excludeFromSemantics?:boolean;
  key?:bt.BaseKey;
}
export class GestureDetector extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  onTap?:any;
  onTapDown?:any;
  onTapUp?:any;
  onTapCancel?:any;
  onDoubleTap?:any;
  onLongPress?:any;
  onLongPressUp?:any;
  onVerticalDragDown?:any;
  onVerticalDragStart?:any;
  onVerticalDragUpdate?:any;
  onVerticalDragEnd?:any;
  onVerticalDragCancel?:any;
  onHorizontalDragDown?:any;
  onHorizontalDragStart?:any;
  onHorizontalDragUpdate?:any;
  onHorizontalDragEnd?:any;
  onHorizontalDragCancel?:any;
  onPanDown?:any;
  onPanStart?:any;
  onPanUpdate?:any;
  onPanEnd?:any;
  onPanCancel?:any;
  onScaleStart?:any;
  onScaleUpdate?:any;
  onScaleEnd?:any;
  behavior?:bt.HitTestBehavior;
  excludeFromSemantics?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, onTap?:any, onTapDown?:any, onTapUp?:any,onTapCancel?:any,
    onDoubleTap?:any, onLongPress?:any, onLongPressUp?:any, onVerticalDragDown?:any, onVerticalDragStart?:any,
    onVerticalDragUpdate?:any, onVerticalDragEnd?:any, onVerticalDragCancel?:any, onHorizontalDragDown?:any,
    onHorizontalDragStart?:any, onHorizontalDragUpdate?:any, onHorizontalDragEnd?:any, onHorizontalDragCancel?:any,
    onPanDown?:any, onPanStart?:any, onPanUpdate?:any, onPanEnd?:any, onPanCancel?:any, onScaleStart?:any,
    onScaleUpdate?:any, onScaleEnd?:any, behavior?:HitTestBehavior, excludeFromSemantics?:boolean, key?:BaseKey}
   */
  static new(config?: GestureDetectorConfig) {

    var v = new GestureDetector();
      if(config!=null && config!=undefined){
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

//-------------- H -----------------

//-------------- I -----------------
//****** IntrinsicHeight ******
interface IntrinsicHeightConfig {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;
}
export class IntrinsicHeight extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, key?:BaseKey}
   */
  static new(config?: IntrinsicHeightConfig) {
    var v = new IntrinsicHeight();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.child = config.child;
    }
    return v;
  }
}

//****** IntrinsicWidth ******
interface IntrinsicWidthConfig {
  child?:fw.JSBaseWidget;
  stepWidth?:number;
  stepHeight?:number;
  key?:bt.BaseKey;
}
export class IntrinsicWidth extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  stepWidth?:number;
  stepHeight?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, stepWidth?:number, stepHeight?:number, key?:BaseKey}
   */
  static new(config?: IntrinsicWidthConfig) {
    var v = new IntrinsicWidth();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.stepWidth = config.stepWidth;
      v.stepHeight = config.stepHeight;
      v.child = config.child;
    }
    return v;
  }
}

//****** IndexedStack ******
interface IndexedStackConfig {
  children?:Array<fw.JSBaseWidget>;
  index?:number;
  alignment?:bt.AlignmentDirectional;
  textDirection?:bt.TextDirection;
  sizing?:bt.StackFit;
  key?:bt.BaseKey;
}
export class IndexedStack extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  index?:number;
  alignment?:bt.AlignmentDirectional;
  textDirection?:bt.TextDirection;
  sizing?:bt.StackFit;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>,index?:number,alignment?:AlignmentDirectional, textDirection?:TextDirection, sizing?:StackFit, key?:BaseKey}
   */
  static new(config?: IndexedStackConfig) {
    var v = new IndexedStack();
    if(config!=null && config!=undefined){
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

//****** IconButton ******
interface IconButtonConfig {
  icon?:fw.JSBaseWidget;
  onPressed?:any;
  iconSize?:number;
  padding?:bt.EdgeInsets;
  alignment?:bt.Alignment;
  color?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  disabledColor?:bt.Color;
  tooltip?:string;
  key?:bt.BaseKey;
}
export class IconButton extends fw.JSBaseWidget {
  icon?:fw.JSBaseWidget;
  onPressed?:any;
  iconSize?:number;
  padding?:bt.EdgeInsets;
  alignment?:bt.Alignment;
  color?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  disabledColor?:bt.Color;
  tooltip?:string;
  key?:bt.BaseKey;

  /**
   * @param config config: {icon?:FlutterWidget, onPressed?:any, iconSize?:number, padding?:EdgeInsets, alignment?:Alignment,
    color?:Color, highlightColor?:Color, splashColor?:Color, disabledColor?:Color, tooltip?:string, key?:BaseKey,}
   */
  static new(config?: IconButtonConfig) {
    var v = new IconButton();
    if(config!=null && config!=undefined){
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

//****** Icon ******
interface IconConfig {
  icon?:bt.IconData;
  size?:number;
  color?:bt.Color;
  semanticLabel?:string;
  textDirection?:bt.TextDirection;
  key?:bt.BaseKey;
}
export class Icon extends fw.JSBaseWidget {
  icon?:bt.IconData;
  size?:number;
  color?:bt.Color;
  semanticLabel?:string;
  textDirection?:bt.TextDirection;
  key?:bt.BaseKey;
  
  /**
   * @param config config: {icon?:IconData, size?:number, color?:Color, semanticLabel?:string, textDirection?:TextDirection, key?:BaseKey}
   */
  static new(config?: IconConfig) {
    var v = new Icon();
    if(config!=null && config!=undefined){
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

//****** Image ******
interface ImageConfig {
  image?:any;
  fit?:bt.BoxFit;
  repeat?:bt.ImageRepeat;
  alignment?:bt.Alignment;
  width?:number;
  height?:number;
  color?:bt.Color;
  semanticLabel?:string;
  excludeFromSemantics?:boolean;
  colorBlendMode?:bt.BlendMode;
  centerSlice?:bt.Rect;
  matchTextDirection?:boolean;
  gaplessPlayback?:boolean;
  filterQuality?:bt.FilterQuality;
  key?:bt.BaseKey; 

  src?:string;
  scale?:number;
  headers?:Map<string,string>;

  imageFile?:bt.File;

  imageName?:string;
  packageName?:string;
  bundle?:bt.BaseAssetBundle;

  bytes?:bt.Uint8List;
}
export class Image extends fw.JSBaseWidget {
  image?:any;
  fit?:bt.BoxFit;
  repeat?:bt.ImageRepeat;
  alignment?:bt.Alignment;
  width?:number;
  height?:number;
  color?:bt.Color;
  semanticLabel?:string;
  excludeFromSemantics?:boolean;
  colorBlendMode?:bt.BlendMode;
  centerSlice?:bt.Rect;
  matchTextDirection?:boolean;
  gaplessPlayback?:boolean;
  filterQuality?:bt.FilterQuality;
  key?:bt.BaseKey; 

  src?:string;
  scale?:number;
  headers?:Map<string,string>;

  imageFile?:bt.File;

  /**
   * @param config config: {image:any,fit?:BoxFit,repeat?:ImageRepeat,alignment?:Alignment, width?:number, height?:number, color?:Color,
    semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
   filterQuality?:FilterQuality, key?:BaseKey}
   */
  static new(config?: ImageConfig) {
     var v = new Image();
     if(config!=null && config!=undefined){
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
    filterQuality?:FilterQuality, key?:BaseKey}
   */
  static network( src:string, config?: ImageConfig) {
    let v = new Image();
    v.constructorName = "network";

    v.src = src;
    if(config!=null && config!=undefined){
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
    filterQuality?:FilterQuality, key?:BaseKey}
   */
  static file ( imageFile:bt.File,  config?: ImageConfig) {
    let v = new Image();
    v.constructorName = "file";

    v.imageFile = imageFile;
    if(config!=null && config!=undefined){
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

  imageName?:string;
  packageName?:string;
  bundle?:bt.BaseAssetBundle;
  /**
   * @param config config: {imageName?:string,bundle?:BaseAssetBundle,packageName?:string, scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, 
    color?:Color, semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
    filterQuality?:FilterQuality, key?:BaseKey}
   */
  static asset(config?: ImageConfig) {
    let v = new Image();
    v.constructorName = "asset";
    if(config!=null && config!=undefined){
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

  bytes?:bt.Uint8List;
  /**
   * @param bytes bytes:Uint8List
   * @param config config: {scale?:number, fit?:BoxFit, repeat?:ImageRepeat, alignment?:Alignment, width?:number, height?:number, color?:Color,
    semanticLabel?:string, excludeFromSemantics?:boolean, colorBlendMode?:BlendMode, centerSlice?:Rect, matchTextDirection?:boolean, gaplessPlayback?:boolean,
    filterQuality?:FilterQuality, key?:BaseKey}
   */
  static memory ( bytes:bt.Uint8List, config?: ImageConfig) {
    let v = new Image();
    v.constructorName = "memory";

    v.bytes = bytes;
    if(config!=null && config!=undefined){
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

//-------------- J -----------------

//-------------- K -----------------

//-------------- L -----------------
//****** LimitedBox ******
interface LimitedBoxConfig {
  child?:fw.JSBaseWidget;
  maxWidth?:number;
  maxHeight?:number;
  key?:bt.BaseKey;
}
export class LimitedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  maxWidth?:number;
  maxHeight?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, maxWidth?:number, maxHeight?:number, key?:BaseKey}
   */
  static new(config?: LimitedBoxConfig) {
    var v = new LimitedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.maxWidth = config.maxWidth;
      v.maxHeight = config.maxHeight;
      v.child = config.child;
    }
    return v;
  }
}

//****** ListBody ******
interface ListBodyConfig {
  children?:Array<fw.JSBaseWidget>;
  reverse?:boolean;
  mainAxis?:bt.Axis;
  key?:bt.BaseKey;
}
export class ListBody extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  reverse?:boolean;
  mainAxis?:bt.Axis;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, reverse?:boolean, mainAxis?:Axis, key?:BaseKey}
   */
  static new (config?:ListBodyConfig) {
    var v = new ListBody();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.mainAxis = config.mainAxis;
      v.reverse = config.reverse;
      v.children = config.children;
    }
    return v;
  }
}

//****** ListTile ******
interface ListTileConfig {
  leading?:fw.JSBaseWidget;
  title?:fw.JSBaseWidget;
  subtitle?:fw.JSBaseWidget;
  trailing?:fw.JSBaseWidget;
  onTap?:any;
  onLongPress?:any;
  selected?:boolean;
  isThreeLine?:boolean;
  dense?:boolean;
  contentPadding?:bt.EdgeInsets;
  enabled?:boolean;
  key?:bt.BaseKey;
}
export class ListTile extends fw.JSBaseWidget {
  leading?:fw.JSBaseWidget;
  title?:fw.JSBaseWidget;
  subtitle?:fw.JSBaseWidget;
  trailing?:fw.JSBaseWidget;
  onTap?:any;
  onLongPress?:any;
  selected?:boolean;
  isThreeLine?:boolean;
  dense?:boolean;
  contentPadding?:bt.EdgeInsets;
  enabled?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {leading?:FlutterWidget, title?:FlutterWidget, subtitle?:FlutterWidget, trailing?:FlutterWidget, onTap?:any, onLongPress?:any,
    selected?:boolean, isThreeLine?:boolean, dense?:boolean, contentPadding?:EdgeInsets, enabled?:boolean, key?:BaseKey}
   */
  static new(config?: ListTileConfig) {
    var v = new ListTile();
    if(config!=null && config!=undefined){
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

//****** ListView ******
interface ListViewConfig {
  children?:Array<fw.JSBaseWidget>;
  padding?:bt.EdgeInsets;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  shrinkWrap?:boolean;
  itemExtent?:number;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;


  itemBuilder?:any;
  itemCount?:number;
}
export class ListView extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  padding?:bt.EdgeInsets;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  shrinkWrap?:boolean;
  itemExtent?:number;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  cacheExtent?:number;
  semanticChildCount?:number;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;


  itemBuilder?:any;
  itemCount?:number;

  preBuild(jsWidgetHelper?:any, buildContext?:any) {
    if (this.itemBuilder) {
      this.children = [];
      if(this.itemCount!=null && this.itemCount!=undefined){
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
    semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static new(config?: ListViewConfig) {
    var v = new ListView();
    if(config!=null && config!=undefined){
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
    semanticChildCount?:number,dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static builder(config?: ListViewConfig) {
      let v = new ListView();
      v.constructorName = "builder";
      if(config!=null && config!=undefined){
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

//****** LayoutBuilder ******
interface LayoutBuilderConfig{
  builder?:any;
  key?:bt.BaseKey;
}
export class LayoutBuilder extends fw.JSBaseWidget {
  builder?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {builder?:any, key?:BaseKey}
   */
  static new (config: LayoutBuilderConfig) {
    var v = new LayoutBuilder();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.builder = config.builder;
    }
    return v;
  }
}

//-------------- M -----------------
//****** Material ******
interface MaterialConfig {
  child?:fw.JSBaseWidget;
  elevation?:number;
  color?:bt.Color;
  shadowColor?:bt.Color;
  textStyle?:bt.TextStyle;
  borderRadius?:bt.BorderRadius;
  type?:bt.MaterialType;
  shape?:any;
  borderOnForeground?:boolean;
  clipBehavior?:bt.Clip;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;
}
export class Material extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  elevation?:number;
  color?:bt.Color;
  shadowColor?:bt.Color;
  textStyle?:bt.TextStyle;
  borderRadius?:bt.BorderRadius;
  type?:bt.MaterialType;
  shape?:any;
  borderOnForeground?:boolean;
  clipBehavior?:bt.Clip;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,elevation?:number, color?:Color, shadowColor?:Color, textStyle?:TextStyle,
    borderRadius?:BorderRadius, type?:MaterialType, shape?:any, borderOnForeground?:boolean, clipBehavior?:Clip,
    animationDuration?:Duration, key?:BaseKey,}
   */
  static new(config?: MaterialConfig) {
    var v = new Material();
    if(config!=null && config!=undefined){
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

//****** MaterialPageRoute ******
interface MaterialPageRouteConfig {
  builder?:any;
  settings?:any;
  maintainState?:boolean;
  fullscreenDialog?:boolean;

  child?:MaterialPageRoute;
}
export class MaterialPageRoute extends fw.JSBaseWidget {
  builder?:any;
  settings?:any;
  maintainState?:boolean;
  fullscreenDialog?:boolean;

  child?:MaterialPageRoute;


  preBuild(jsWidgetHelper?:any, buildContext?:any) {
    if (this.builder) {
      this.child = this.builder(buildContext);
      delete this.builder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }

  /**
   * @param config config: {builder?:any, settings?:any, maintainState?:boolean, fullscreenDialog?:boolean}
   */
  static new(config?: MaterialPageRouteConfig) {
    var v = new MaterialPageRoute();
    if(config!=null && config!=undefined){
      v.builder = config.builder;
      v.settings = config.settings;
      v.maintainState = config.maintainState;
      v.fullscreenDialog = config.fullscreenDialog;
    }
    v.child = undefined;
    return v;
  }
}

//****** MemoryImage ******
export class MemoryImage extends fw.JSBaseWidget {
  bytes?:bt.Uint8List;
  scale?:number;

  static new(bytes?:bt.Uint8List,scale?:number) {
    var v = new MemoryImage();
    v.bytes = bytes;
    v.scale = scale;

    return v;
  }
}

//-------------- N -----------------
interface NotificationListenerConfig {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;
}
//****** NotificationListener ******
export class NotificationListener extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,key?:BaseKey}
   */
  static new (config: NotificationListenerConfig) {
    var v = new NotificationListener();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.child = config.child;
    }
    return v;
  }
}

//****** NestedScrollView ******
interface NestedScrollViewConfig {
  body?:fw.JSBaseWidget;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  physics?:bt.ScrollPhysics;
  headerSliverBuilder?:any;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;
}
export class NestedScrollView extends fw.JSBaseWidget {
  body?:fw.JSBaseWidget;
  controller?:bt.ScrollController;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  physics?:bt.ScrollPhysics;
  headerSliverBuilder?:any;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;
 
  preBuild(jsWidgetHelper?:any, buildContext?:any) {
    ///TODO: innerBoxIsScrolled 暂时不支持，默认为false
    if (this.headerSliverBuilder) {
      this.children = this.headerSliverBuilder(buildContext);
      delete this.headerSliverBuilder;
    }

    super.preBuild(jsWidgetHelper, buildContext);
  }

  /**
   * @param config config: {body?:FlutterWidget, controller?:ScrollController, scrollDirection?:Axis, reverse?:boolean,
    physics?:ScrollPhysics, headerSliverBuilder?:any, dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static new(config?: NestedScrollViewConfig) {
    var v = new NestedScrollView();
    if(config!=null && config!=undefined){
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

//****** NavigatorState ******
export class NavigatorState extends fw.JSBaseClass {
  context:any;

  push(t:any, materialPageRoute:MaterialPageRoute) {
    this.context.widget.helper.navigatorPush(materialPageRoute.builder(this.context));
  }
  pop(t:any,) {
    this.context.widget.helper.navigatorPop();
  }

  static new(context:any) {
      var v = new NavigatorState();
      v.context = context;
    return v;
  }
}

//****** Navigator ******
interface NavigatorConfig {
  initialRoute?:string;
  onGenerateRoute?:any;
  onUnknownRoute?:any;
  observers?:any;
  key?:bt.BaseKey;
}
export class Navigator extends fw.JSBaseClass {
  initialRoute?:string;
  onGenerateRoute?:any;
  onUnknownRoute?:any;
  observers?:any;
  key?:bt.BaseKey;


  static push(context:any, materialPageRoute:MaterialPageRoute) {

    let t = null;
    if (arguments.length == 3) {
      t = arguments[0];
      context = arguments[1];
      materialPageRoute = arguments[2];
    }

    var navigatorState = NavigatorState.new(context);
    navigatorState.push(t, materialPageRoute);
  }

  static pop(context:any) {
    let t = null;
    if (arguments.length == 2) {
      t = arguments[0];
      context = arguments[1];
    }
    var navigatorState = NavigatorState.new(context);
    navigatorState.pop(t);
  }

  static of(context:any, opt:any) {
    var navigatorState =  NavigatorState.new(context);
    return navigatorState;
  }

  /**
   * @param config config: {initialRoute?:string,onGenerateRoute?:any, onUnknownRoute?:any, observers?:any, key?:BaseKey}
   */
  static new (config: NavigatorConfig) {
    var v = new Navigator();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.initialRoute = config.initialRoute;
      v.onGenerateRoute = config.onGenerateRoute;
      v.onUnknownRoute = config.onUnknownRoute;
      v.observers = config.observers;
    }
    return v;
  }
}

//****** NetworkImage ******
interface NetworkImageConfig {
  scale?:number;
  headers?:Map<string,string>;
}
export class NetworkImage extends fw.JSBaseWidget {
  url?:string;
  scale?:number;
  headers?:Map<string,string>;

  /**
   * @param config config: {scale?:number, headers?:Map<string,string>}
   */
  static new(url:string, config: NetworkImageConfig) {
    var v = new NetworkImage();
    v.url = url;
    if(config!=null && config!=undefined){
      v.scale = config.scale;
      v.headers = config.headers;
    }
    return v;
  }
}

//-------------- O -----------------
//****** Opacity ******
interface OpacityConfig {
  child?:fw.JSBaseWidget;
  opacity?:number;
  alwaysIncludeSemantics?:boolean;
  key?:bt.BaseKey;
}
export class Opacity extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  opacity?:number;
  alwaysIncludeSemantics?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, opacity?:number, alwaysIncludeSemantics?:boolean,key?:BaseKey }
   */
  static new(config?: OpacityConfig) {
    var v = new Opacity();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.opacity = config.opacity;
      v.alwaysIncludeSemantics = config.alwaysIncludeSemantics;
      v.child = config.child;
    }
    return v;
  }
}

//****** Offstage ******
interface OffstageConfig {
  child?:fw.JSBaseWidget;
  offstage?:boolean;
  key?:bt.BaseKey;
}
export class Offstage extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  offstage?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:.FlutterWidget, offstage?:boolean, key?:BaseKey}
   */
  static new (config: OffstageConfig) {
    var v = new Offstage();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.offstage = config.offstage;
      v.child = config.child;
    }
    return v;
  }
}

//****** OverflowBox ******
interface OverflowBoxConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  minWidth?:number;
  maxWidth?:number;
  minHeight?:number;
  maxHeight?:number;
  key?:bt.BaseKey;
}
export class OverflowBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  minWidth?:number;
  maxWidth?:number;
  minHeight?:number;
  maxHeight?:number;
  key?:bt.BaseKey;
  
  /**
   * @param config config: {child?:FlutterWidget, alignment?:Alignment, minWidth?:number, maxWidth?:number, minHeight?:number, maxHeight?:number, key?:BaseKey,}
   */
  static new(config?: OverflowBoxConfig) {
    var v = new OverflowBox();
    if(config!=null && config!=undefined){
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

//-------------- P -----------------
//****** Padding ******
interface PaddingConfig {
  child?:fw.JSBaseWidget;
  padding?:bt.EdgeInsets;
  key?:bt.BaseKey;
}
export class Padding extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  padding?:bt.EdgeInsets;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, padding?:EdgeInsets, key?:BaseKey}
   */
  static new(config?: PaddingConfig) {
    var v = new Padding();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.padding = config.padding;
      v.child = config.child;
    }
    return v;
  }
}

//****** Positioned ******
interface PositionedConfig {
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  width?:number;
  height?:number;
  key?:bt.BaseKey;
  rect?:bt.Rect;
}
export class Positioned extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  width?:number;
  height?:number;
  key?:bt.BaseKey;
  rect?:bt.Rect;
  
  /**
   * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,width?:number,height?:number,key?:BaseKey}
   */
  static new(config?: PositionedConfig) {
    var v = new Positioned();
    if(config!=null && config!=undefined){
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
   * @param config config: {child?:FlutterWidget, rect?:Rect, key?:BaseKey}
   */
  static fromRect (config?: PositionedConfig) {
    let v = new Positioned();
    v.constructorName = "fromRect";
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.left = config.rect?.left;
      v.top = config.rect?.top;
      v.width = config.rect?.width;
      v.height = config.rect?.height;
      v.child = config.child;
    }
    return v;
  }
}

//****** PreferredSize ******
interface PreferredSizeConfig {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  preferredSize?:bt.Size;
}
export class PreferredSize extends fw.JSBaseWidget {
  key?:bt.BaseKey;
  child?:fw.JSBaseWidget;
  preferredSize?:bt.Size;
  
  /**
   * @param config config: {child?:FlutterWidget,preferredSize?:Size,key?:BaseKey,}
   */
  static new (config :PreferredSizeConfig) {
    var v = new PreferredSize();
    if(config!=null && config!=undefined){
      v.key =  config.key;
      v.child =  config.child;
      v.preferredSize =  config.preferredSize;
    }
    return v;
  }
}

//****** PreferredSize ******
export class PreferredSizeWidget extends fw.JSBaseWidget {
  static new() {
    return new PreferredSizeWidget();
  }
}

//****** Placeholder ******
interface PlaceholderConfig {
  color?:bt.Color;
  strokeWidth?:number;
  fallbackWidth?:number;
  fallbackHeight?:number;
  key?:bt.BaseKey;
}
export class Placeholder extends fw.JSBaseWidget {
  color?:bt.Color;
  strokeWidth?:number;
  fallbackWidth?:number;
  fallbackHeight?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {color?:Color,strokeWidth?:number,fallbackWidth?:number,fallbackHeight?:number,key?:BaseKey,}
   */
  static new(config?: PlaceholderConfig) {
    var v = new Placeholder();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.color = config.color;
      v.strokeWidth = config.strokeWidth;
      v.fallbackWidth = config.fallbackWidth;
      v.fallbackHeight = config.fallbackHeight;
    }
    return v;
  }
}

//****** PopupMenuButton ******
interface PopupMenuButtonConfig {
  itemBuilder?:any;
  initialValue?:any;
  onSelected?:any;
  onCanceled?:any;
  tooltip?:string;
  elevation?:number;
  padding?:bt.EdgeInsets;
  child?:fw.JSBaseWidget;
  icon?:fw.JSBaseWidget;
  offset?:bt.Offset;
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;
}
export class PopupMenuButton extends fw.JSBaseWidget {
  itemBuilder?:any;
  initialValue?:any;
  onSelected?:any;
  onCanceled?:any;
  tooltip?:string;
  elevation?:number;
  padding?:bt.EdgeInsets;
  child?:fw.JSBaseWidget;
  icon?:fw.JSBaseWidget;
  offset?:bt.Offset;
  key?:bt.BaseKey;
  children?:Array<fw.JSBaseWidget>;

  //在生成json前调用
  //用于list delegate 等的items build
  //用于 widget 有类似 onTab 等响应函数变量，在此转换成 callback id,
  //但注意，delegate 中确实需要 function ,不需要转ID的，不要调用super.preBuild
  preBuild(jsWidgetHelper:any, buildContext:any) {
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
    padding?:EdgeInsets,child?:FlutterWidget,icon?:FlutterWidget, offset?:Offset, key?:BaseKey}
   */
  static new(config?: PopupMenuButtonConfig) {
    var v = new PopupMenuButton();
    if(config!=null && config!=undefined){
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

//****** PopupMenuItem ******
interface PopupMenuItemConfig {
  child?:fw.JSBaseWidget;
  value?:any;
  enabled?:boolean;
  height?:number;
  key?:bt.BaseKey;
}
export class PopupMenuItem extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  value?:any;
  enabled?:boolean;
  height?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, value?:any, enabled?:boolean, height?:number, key?:BaseKey}
   */
  static new(config?: PopupMenuItemConfig) {
    var v = new PopupMenuItem();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.value = config.value;
      v.enabled = config.enabled;
      v.height = config.height;
      v.child = config.child;
    }
    return v;
  }
}

//-------------- Q -----------------

//-------------- R -----------------
//****** Row ******
interface RowConfig {
  children?:Array<fw.JSBaseWidget>;
  mainAxisAlignment?:bt.MainAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  crossAxisAlignment?:bt.CrossAxisAlignment;
  textDirection?:bt.TextDirection;
  verticalDirection?:bt.VerticalDirection;
  textBaseline?:bt.TextBaseline;
  key?:bt.BaseKey;
}
export class Row extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  mainAxisAlignment?:bt.MainAxisAlignment;
  mainAxisSize?:bt.MainAxisSize;
  crossAxisAlignment?:bt.CrossAxisAlignment;
  textDirection?:bt.TextDirection;
  verticalDirection?:bt.VerticalDirection;
  textBaseline?:bt.TextBaseline;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, mainAxisAlignment?:MainAxisAlignment, mainAxisSize?:MainAxisSize, crossAxisAlignment?:CrossAxisAlignment,
    textDirection?:TextDirection, verticalDirection?:VerticalDirection, textBaseline?:TextBaseline, key?:BaseKey,}
   */
  static new(config?: RowConfig) {
    var v = new Row();
    if(config!=null && config!=undefined){
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

//****** RaisedButton ******
interface RaisedButtonConfig {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  onHighlightChanged?:any;
  padding?:bt.EdgeInsets;
  textColor?:bt.Color;
  disabledTextColor?:bt.Color;
  color?:bt.Color;
  disabledColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  colorBrightness?:bt.Brightness;
  elevation?:number;
  highlightElevation?:number;
  disabledElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;

  staticFunctionName?:string;
  icon?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
}
export class RaisedButton extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  onHighlightChanged?:any;
  padding?:bt.EdgeInsets;
  textColor?:bt.Color;
  disabledTextColor?:bt.Color;
  color?:bt.Color;
  disabledColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  colorBrightness?:bt.Brightness;
  elevation?:number;
  highlightElevation?:number;
  disabledElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;

  staticFunctionName?:string;
  icon?:fw.JSBaseWidget;
  label?:fw.JSBaseWidget;
  
  /**
   * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets,
    textColor?:Color, disabledTextColor?:Color, color?:Color, disabledColor?:Color,
    highlightColor?:Color, splashColor?:Color, colorBrightness?:Brightness, elevation?:number,
    highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:Clip,
    materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BaseKey}
   */
  static new(config?: RaisedButtonConfig) {
    var v = new RaisedButton();
    if(config!=null && config!=undefined){
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
   * @param config config: {icon?:fw.JSBaseWidget, label?:fw.JSBaseWidget,onPressed?:any, onHighlightChanged?:any, padding?:bt.EdgeInsets,
  textColor?:bt.Color, disabledTextColor?:bt.Color, color?:bt.Color, disabledColor?:bt.Color,
  highlightColor?:bt.Color, splashColor?:bt.Color, colorBrightness?:bt.Brightness, elevation?:number,
  highlightElevation?:number, disabledElevation?:number, shape?:any, clipBehavior?:bt.Clip,
  materialTapTargetSize?:bt.MaterialTapTargetSize, animationDuration?:bt.Duration, key?:bt.BaseKey}
   */
  static icon(config?: RaisedButtonConfig) {
    let v = new RaisedButton();
    v.staticFunctionName = "icon";
    if(config!=null && config!=undefined){
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

//****** RaisedButton ******
interface RadioConfig {
  value?:any;
  groupValue?:any;
  onChanged?:any;
  activeColor?:bt.Color;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  key?:bt.BaseKey;
}
export class Radio extends fw.JSBaseWidget {
  value?:any;
  groupValue?:any;
  onChanged?:any;
  activeColor?:bt.Color;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  key?:bt.BaseKey;

  /**
   * @param config config: {value?:any, groupValue?:any, onChanged?:any, activeColor?:Color,  materialTapTargetSize?:MaterialTapTargetSize, key?:BaseKey}
   */
  static new(config?: RadioConfig) {
    var v = new Radio();
    if(config!=null && config!=undefined){
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

//****** RaisedButton ******
interface RawMaterialButtonConfig {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  onHighlightChanged?:any;
  padding?:bt.EdgeInsets;
  textStyle?:bt.TextStyle;
  fillColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  constraints?:bt.BoxConstraints;
  elevation?:number;
  highlightElevation?:number;
  disabledElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;
}
export class RawMaterialButton extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  onPressed?:any;
  onHighlightChanged?:any;
  padding?:bt.EdgeInsets;
  textStyle?:bt.TextStyle;
  fillColor?:bt.Color;
  highlightColor?:bt.Color;
  splashColor?:bt.Color;
  constraints?:bt.BoxConstraints;
  elevation?:number;
  highlightElevation?:number;
  disabledElevation?:number;
  shape?:any;
  clipBehavior?:bt.Clip;
  materialTapTargetSize?:bt.MaterialTapTargetSize;
  animationDuration?:bt.Duration;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, onPressed?:any, onHighlightChanged?:any, padding?:EdgeInsets, textStyle?:TextStyle, fillColor?:Color,
    highlightColor?:Color, splashColor?:Color, constraints?:BoxConstraints, elevation?:number, highlightElevation?:number,
    disabledElevation?:number, shape?:any, clipBehavior?:Clip, materialTapTargetSize?:MaterialTapTargetSize, animationDuration?:Duration, key?:BaseKey}
   */
  static new(config?: RawMaterialButtonConfig) {
    var v = new RawMaterialButton();
    if(config!=null && config!=undefined){
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

//****** RichText ******
interface RichTextConfig {
  text?:fw.JSBaseWidget;
  textAlign?:bt.TextAlign;
  textDirection?:bt.TextDirection;
  softWrap?:boolean;
  overflow?:bt.Overflow;
  textScaleFactor?:number;
  maxLines?:number;
  key?:bt.BaseKey;
}
export class RichText extends fw.JSBaseWidget {
  text?:fw.JSBaseWidget;
  textAlign?:bt.TextAlign;
  textDirection?:bt.TextDirection;
  softWrap?:boolean;
  overflow?:bt.Overflow;
  textScaleFactor?:number;
  maxLines?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {text?:FlutterWidget, textAlign?:TextAlign, textDirection?:TextDirection, softWrap?:boolean, overflow?:Overflow, 
    textScaleFactor?:number, maxLines?:number, key?:BaseKey,}
   */
  static new (config : RichTextConfig) {
    var v= new RichText();
    if(config!=null && config!=undefined){
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

//-------------- S -----------------
//****** Slider ******
interface SliderConfig {
  value?:number;
  onChanged?:any;
  onChangeStart?:any;
  onChangeEnd?:any;
  min?:number;
  max?:number;
  divisions?:number;
  label?:string;
  activeColor?:bt.Color;
  inactiveColor?:bt.Color;
  semanticFormatterCallback?:any;
  key?:bt.BaseKey;
}
export class Slider extends fw.JSBaseWidget {
  value?:number;
  onChanged?:any;
  onChangeStart?:any;
  onChangeEnd?:any;
  min?:number;
  max?:number;
  divisions?:number;
  label?:string;
  activeColor?:bt.Color;
  inactiveColor?:bt.Color;
  semanticFormatterCallback?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {value?:number,onChanged?:any,onChangeStart?:any,onChangeEnd?:any,min?:number,max?:number,
    divisions?:number,label?:string,activeColor?:olor,inactiveColor?:.Color,semanticFormatterCallback?:any,key?:BaseKey,}
   */
  static new(config?: SliderConfig) {
    var v = new Slider();
    if(config!=null && config!=undefined){
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

//****** SizedBox ******
interface SizedBoxConfig {
  child?:fw.JSBaseWidget;
  width?:number;
  height?:number;
  key?:bt.BaseKey;
}
export class SizedBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  width?:number;
  height?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, width?:number, height?:number, key?:BaseKey}
   */
  static new(config?: SizedBoxConfig) {
    var v = new SizedBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.width = config.width;
      v.height = config.height;
      v.child = config.child;
    }
    return v;
  }
}

//****** SizedOverflowBox ******
interface SizedOverflowBoxConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  size?:bt.Size;
  key?:bt.BaseKey;
}
export class SizedOverflowBox extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  size?:bt.Size;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, alignment?:Alignment, size?:Size, key?:BaseKey}
   */
  static new(config: SizedOverflowBoxConfig) {
    var v = new SizedOverflowBox();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.size = config.size;
      v.alignment = config.alignment;
      v.child = config.child;
    }
    return v;
  }
}

//****** Stack ******
interface StackConfig {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.AlignmentDirectional;
  textDirection?:bt.TextDirection;
  fit?:bt.StackFit;
  overflow?:bt.Overflow;
  key?:bt.BaseKey;
}
export class Stack extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.AlignmentDirectional;
  textDirection?:bt.TextDirection;
  fit?:bt.StackFit;
  overflow?:bt.Overflow;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, alignment?:AlignmentDirectional, textDirection?:TextDirection,
    fit?:StackFit, overflow?:Overflow, key?:BaseKey}
   */
  static new(config?: StackConfig) {
    var v = new Stack();
    if(config!=null && config!=undefined){
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

//****** SliverAppBar ******
interface SliverAppBarConfig {
  leading?:fw.JSBaseWidget;
  automaticallyImplyLeading?:boolean;
  centerTitle?:boolean;
  title?:fw.JSBaseWidget;
  actions?:Array<fw.JSBaseWidget>;
  flexibleSpace?:fw.JSBaseWidget;
  bottom?:fw.JSBaseWidget;
  elevation?:number;
  forceElevated?:boolean;
  backgroundColor?:bt.Color;
  brightness?:bt.Brightness;
  iconTheme?:bt.IconThemeData;
  primary?:boolean;
  titleSpacing?:number;
  expandedHeight?:number;
  floating?:boolean;
  pinned?:boolean;
  snap?:boolean;
  key?:bt.BaseKey;
}
export class SliverAppBar extends fw.JSBaseWidget {
  leading?:fw.JSBaseWidget;
  automaticallyImplyLeading?:boolean;
  centerTitle?:boolean;
  title?:fw.JSBaseWidget;
  actions?:Array<fw.JSBaseWidget>;
  flexibleSpace?:fw.JSBaseWidget;
  bottom?:fw.JSBaseWidget;
  elevation?:number;
  forceElevated?:boolean;
  backgroundColor?:bt.Color;
  brightness?:bt.Brightness;
  iconTheme?:bt.IconThemeData;
  primary?:boolean;
  titleSpacing?:number;
  expandedHeight?:number;
  floating?:boolean;
  pinned?:boolean;
  snap?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {leading?:FlutterWidget, automaticallyImplyLeading?:boolean, centerTitle?:boolean, title?:FlutterWidget,
    actions?:Array<FlutterWidget>, flexibleSpace?:FlutterWidget, bottom?:FlutterWidget, elevation?:number, forceElevated?:boolean,
    backgroundColor?:Color, brightness?:Brightness, iconTheme?:IconThemeData, primary?:boolean, titleSpacing?:number,
    expandedHeight?:number, floating?:boolean, pinned?:boolean, snap?:boolean, key?:BaseKey}
   */
  static new(config?: SliverAppBarConfig) {
    var v = new SliverAppBar();
    if(config!=null && config!=undefined){
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

//****** SliverPadding ******
interface SliverPaddingConfig {
  sliver?:fw.JSBaseWidget;
  padding?:bt.EdgeInsets;
  key?:bt.BaseKey;
}
export class SliverPadding extends fw.JSBaseWidget {
  sliver?:fw.JSBaseWidget;
  padding?:bt.EdgeInsets;
  key?:bt.BaseKey;

  /**
   * @param config config: {sliver?:FlutterWidget, padding?:EdgeInsets, key?:BaseKey}
   */
  static new(config?: SliverPaddingConfig) {
    var v = new SliverPadding();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.padding = config.padding;
      v.sliver = config.sliver;
    }
    return v;
  }
}

//****** SliverGrid ******
interface SliverGridConfig {
  delegate?:any;
  gridDelegate?:any;
  key?:bt.BaseKey;
}
export class SliverGrid extends fw.JSBaseWidget {
  delegate?:any;
  gridDelegate?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {delegate?:any, gridDelegate?:any, key?:BaseKey,}
   */
  static new(config?: SliverGridConfig) {
    var v = new SliverGrid();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
      v.gridDelegate = config.gridDelegate;
    }
    return v;
  }
}

//****** SliverGridDelegateWithMaxCrossAxisExtent ******
interface SliverGridDelegateWithMaxCrossAxisExtentConfig {
  maxCrossAxisExtent?:number;
  mainAxisSpacing?:number;
  crossAxisSpacing?:number;
  childAspectRatio?:number;
}
export class SliverGridDelegateWithMaxCrossAxisExtent extends fw.JSBaseWidget {
  maxCrossAxisExtent?:number;
  mainAxisSpacing?:number;
  crossAxisSpacing?:number;
  childAspectRatio?:number;

  /**
   * @param config config: {maxCrossAxisExtent?:number, mainAxisSpacing?:number, crossAxisSpacing?:number, childAspectRatio?:number,}
   */
  static new(config?: SliverGridDelegateWithMaxCrossAxisExtentConfig) {
    var v = new SliverGridDelegateWithMaxCrossAxisExtent();
    if(config!=null && config!=undefined){
      v.maxCrossAxisExtent = config.maxCrossAxisExtent;
      v.mainAxisSpacing = config.mainAxisSpacing;
      v.crossAxisSpacing = config.crossAxisSpacing;
      v.childAspectRatio = config.childAspectRatio;
    }
    return v;
  }
}

//****** SliverChildListDelegate ******
interface SliverChildListDelegateConfig {
  children?:Array<fw.JSBaseWidget>;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  semanticIndexOffset?:number;
}
export class SliverChildListDelegate extends fw.JSBaseClass {
  children?:Array<fw.JSBaseWidget>;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  semanticIndexOffset?:number;

  /**
   * @param config config: {children?:Array<FlutterWidget>, addAutomaticKeepAlives?:boolean, addRepaintBoundaries?:boolean, addSemanticIndexes?:boolean, semanticIndexOffset?:number,}
   */
  static new(config?: SliverChildListDelegateConfig) {
    var v = new SliverChildListDelegate();
    if(config!=null && config!=undefined){
      v.children = config.children;
      v.addAutomaticKeepAlives = config.addAutomaticKeepAlives;
      v.addRepaintBoundaries = config.addRepaintBoundaries;
      v.addSemanticIndexes = config.addSemanticIndexes;
      v.semanticIndexOffset = config.semanticIndexOffset;
    }
    return v;
  }
}

//****** SliverChildBuilderDelegate ******
interface SliverChildBuilderDelegateConfig {
  builder:any;
  childCount?:number;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  semanticIndexOffset?:number;
  children?:Array<fw.JSBaseWidget>;
}
export class SliverChildBuilderDelegate extends fw.JSBaseWidget {
  builder:any;
  childCount?:number;
  addAutomaticKeepAlives?:boolean;
  addRepaintBoundaries?:boolean;
  addSemanticIndexes?:boolean;
  semanticIndexOffset?:number;
  children?:Array<fw.JSBaseWidget>;
 
  preBuild(jsWidgetHelper?:any, buildContext?:any) {
    if (this.builder) {
      if(this.childCount!=null && this.childCount!=undefined){
      for (let i = 0; i < this.childCount; ++i) {
        let w = this.builder(buildContext, i);
        if(this.children!=null && this.children!=undefined){
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
  static new(config?: SliverChildBuilderDelegateConfig) {
    var v = new SliverChildBuilderDelegate();
    if(config!=null && config!=undefined){
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

//****** SliverList ******
interface SliverListConfig {
  delegate?:any;
  key?:bt.BaseKey;
}
export class SliverList extends fw.JSBaseWidget {
  delegate?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {delegate?:any,key?:BaseKey}
   */
  static new(config?: SliverListConfig) {
    var v = new SliverList();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
    }
    return v;
  }
}

//****** SliverOverlapInjector ******
interface SliverOverlapInjectorConfig {
  child?:fw.JSBaseWidget;
  handle?:any;
  key?:bt.BaseKey;
}
export class SliverOverlapInjector extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  handle?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,handle?:any,key?:BaseKey}
   */
  static new(config?: SliverOverlapInjectorConfig) {
    var v = new SliverOverlapInjector();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.handle = config.handle;
      v.child = config.child;
    }
    return v;
  }
}

//****** SliverFixedExtentList ******
interface SliverFixedExtentListConfig {
  delegate?:any;
  itemExtent?:number;
  key?:bt.BaseKey;
}
export class SliverFixedExtentList extends fw.JSBaseWidget {
  delegate?:any;
  itemExtent?:number;
  key?:bt.BaseKey;
 
  /**
   * @param config config: {delegate?:any, itemExtent?:number, key?:BaseKey}
   */
  static new(config?: SliverFixedExtentListConfig) {
    var v = new SliverFixedExtentList();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.delegate = config.delegate;
      v.itemExtent = config.itemExtent;
    }
    return v;
  }
}

//****** SliverOverlapAbsorber ******
interface SliverOverlapAbsorberConfig {
  child?:fw.JSBaseWidget;
  handle?:any;
  key?:bt.BaseKey;
}
export class SliverOverlapAbsorber extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  handle?:any;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,handle?:any,key?:BaseKey}
   */
  static new(config?: SliverOverlapAbsorberConfig) {
    var v = new SliverOverlapAbsorber();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.handle = config.handle;
      v.child = config.child;
    }
    return v;
  }
}

//****** SingleChildScrollView ******
interface SingleChildScrollViewConfig {
  child?:fw.JSBaseWidget;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  padding?:bt.EdgeInsets;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  controller?:bt.ScrollController;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;
}
export class SingleChildScrollView extends fw.JSBaseWidget {
  
  child?:fw.JSBaseWidget;
  scrollDirection?:bt.Axis;
  reverse?:boolean;
  padding?:bt.EdgeInsets;
  primary?:boolean;
  physics?:bt.ScrollPhysics;
  controller?:bt.ScrollController;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;


  /**
   * @param config config: {child?:FlutterWidget, scrollDirection?:Axis, reverse?:boolean, padding?:EdgeInsets, primary?:boolean, 
    physics?:ScrollPhysics, controller?:ScrollController, dragStartBehavior?:DragStartBehavior, key?:BaseKey,}
   */
  static new(config?: SingleChildScrollViewConfig) {
      var v = new SingleChildScrollView();
      if(config!=null && config!=undefined){
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

//****** SliverToBoxAdapter ******
interface SliverToBoxAdapterConfig {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;
}
export class SliverToBoxAdapter extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,key?:BaseKey}
   */
  static new(config?: SliverToBoxAdapterConfig) {
    var v = new SliverToBoxAdapter();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.child = config.child;
    }
    return v;
  }
}

//****** Scaffold ******
interface ScaffoldConfig {
  appBar?:fw.JSBaseWidget;
  body?:fw.JSBaseWidget;
  floatingActionButton?:fw.JSBaseWidget;
  floatingActionButtonLocation?:bt.FloatingActionButtonLocation;
  persistentFooterButtons?:Array<fw.JSBaseWidget>;
  drawer?:fw.JSBaseWidget;
  endDrawer?:fw.JSBaseWidget;
  bottomNavigationBar?:fw.JSBaseWidget;
  bottomSheet?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  resizeToAvoidBottomPadding?:boolean;
  primary?:boolean;
  key?:bt.BaseKey;
}
export class Scaffold extends fw.JSBaseWidget {
  appBar?:fw.JSBaseWidget;
  body?:fw.JSBaseWidget;
  floatingActionButton?:fw.JSBaseWidget;
  floatingActionButtonLocation?:bt.FloatingActionButtonLocation;
  persistentFooterButtons?:Array<fw.JSBaseWidget>;
  drawer?:fw.JSBaseWidget;
  endDrawer?:fw.JSBaseWidget;
  bottomNavigationBar?:fw.JSBaseWidget;
  bottomSheet?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  resizeToAvoidBottomPadding?:boolean;
  primary?:boolean;
  key?:bt.BaseKey;

  //FIXME,github mergegithub merge
  static of(context:any) {
    return {
      showSnackBar: function (snackBar:any) {
        //准备调用Native方法执行真正的 showSnackBar动作
        //1.把这里的context和snackBar数据传递到native层 ✔️
        //2.通过context找到Native里的 Scaffold.of(context) ？
        //3.解析snackBar为真snackBar对象 ✔️
        //4.执行调用
        console.log("showSnackBar in js call native-->")
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
        console.log("showSnackBar in js call native-->")
      },
    };
  }

  /**
   * @param config config: {appBar?:FlutterWidget, body?:FlutterWidget, floatingActionButton?:FlutterWidget, floatingActionButtonLocation?:FloatingActionButtonLocation,
    persistentFooterButtons?:Array<FlutterWidget>, drawer?:FlutterWidget, endDrawer?:FlutterWidget, bottomNavigationBar?:FlutterWidget, bottomSheet?:FlutterWidget,
    backgroundColor?:Color, resizeToAvoidBottomPadding?:boolean, primary?:boolean, key?:BaseKey}
   */
  static new(config?: ScaffoldConfig){
    var v = new Scaffold();
    if(config!=null && config!=undefined){
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

//****** Scaffold ******
export class ScaffoldState extends fw.JSBaseClass {
  static new() {
    return new ScaffoldState();
  }
}

//****** SafeArea ******
interface SafeAreaConfig {
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  minimum?:number;
  key?:bt.BaseKey;
}
export class SafeArea extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  left?:number;
  top?:number;
  right?:number;
  bottom?:number;
  minimum?:number;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,left?:number,top?:number,right?:number,bottom?:number,minimum?:number,key?:BaseKey}
   */
  static new(config?: SafeAreaConfig) {
    var v = new SafeArea();
    if(config!=null && config!=undefined){
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

//****** Scrollbar ******
export class Scrollbar extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  key?:bt.BaseKey;

  /**
   * @param config config: {}
   */
  static new (child?:fw.JSBaseWidget, key?:bt.BaseKey) {
    var v = new Scrollbar();
    v.key = key;
    v.child = child;
    return v;
  }
}

//****** SnackBar ******
interface SnackBarConfig {
  content?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  elevation?:number;
  shape?:any;
  behavior?:any;
  action?:any;
  duration?:bt.Duration;
  animation?:any;
  onVisible?:any;
  key?:fw.JSBaseWidget;
}
export class SnackBar extends fw.JSBaseWidget {
  content?:fw.JSBaseWidget;
  backgroundColor?:bt.Color;
  elevation?:number;
  shape?:any;
  behavior?:any;
  action?:any;
  duration?:bt.Duration;
  animation?:any;
  onVisible?:any;
  key?:fw.JSBaseWidget;

  /**
   * @param config config: {content?:fw.JSBaseWidget, backgroundColor?:bt.Color, elevation?:number, shape?:any, behavior?:any,
    action?:any, duration?:bt.Duration, animation?:any, onVisible?:any, key?:fw.JSBaseWidget}
   */
  static new(config?: SnackBarConfig) {
    var v = new SnackBar();
    if(config!=null && config!=undefined){
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

//-------------- T -----------------
//****** TableRow ******
interface TableRowConfig {
  children?:Array<fw.JSBaseWidget>;
  decoration?:bt.BoxDecoration;
  key?:bt.BaseKey;
}
export class TableRow extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  decoration?:bt.BoxDecoration;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>,decoration?:BoxDecoration,key?:BaseKey,}
   */
   static new(config?: TableRowConfig) {
    var v = new TableRow();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.decoration = config.decoration;
      v.children = config.children;
    }
    return v;
  }

}

//****** TableCell ******
interface TableCellConfig {
  child?:fw.JSBaseWidget;
  verticalAlignment?:bt.TableCellVerticalAlignment;
  key?:bt.BaseKey;
}
export class TableCell extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  verticalAlignment?:bt.TableCellVerticalAlignment;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, verticalAlignment?:TableCellVerticalAlignment, key?:BaseKey,}
   */
  static new(config?: TableCellConfig) {
    var v = new TableCell();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.verticalAlignment = config.verticalAlignment;
      v.child = config.child;
    }
    return v;
  }
}

//****** Transform ******
interface TransformConfig {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  origin?:bt.Offset;
  transform?:bt.Matrix4;
  transformHitTests?:boolean;
  key?:bt.BaseKey;
}
export class Transform extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  alignment?:bt.Alignment;
  origin?:bt.Offset;
  transform?:bt.Matrix4;
  transformHitTests?:boolean;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget, alignment?:Alignment, origin?:Offset, transform?:Matrix4, transformHitTests?:boolean, key?:BaseKey,}
   */
  static new(config?: TransformConfig) {
    var v = new Transform();
    if(config!=null && config!=undefined){
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

//****** Table ******
interface TableConfig {
  children?:Array<fw.JSBaseWidget>;
  defaultColumnWidth?:bt.TableColumnWidth;
  defaultVerticalAlignment?:bt.TableCellVerticalAlignment;
  textDirection?:bt.TextDecoration;
  border?:bt.TableBorder;
  textBaseline?:bt.TextBaseline;
  columnWidths?:Map<string,bt.TableColumnWidth>;
  key?:bt.BaseKey;
}
export class Table extends  fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  defaultColumnWidth?:bt.TableColumnWidth;
  defaultVerticalAlignment?:bt.TableCellVerticalAlignment;
  textDirection?:bt.TextDecoration;
  border?:bt.TableBorder;
  textBaseline?:bt.TextBaseline;
  columnWidths?:Map<string,bt.TableColumnWidth>;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, defaultColumnWidth?:TableColumnWidth, defaultVerticalAlignment?:TableCellVerticalAlignment,
    textDirection?:TextDecoration, border?:TableBorder, textBaseline?:TextBaseline,  columnWidths?:Map<string,TableColumnWidth>, key?:BaseKey,}
   */
  static new(config?: TableConfig) {
    var v = new Table();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.children = config.children;
      v.columnWidths= config.columnWidths;
      v.defaultColumnWidth = config.defaultColumnWidth;
      v.textDirection = config.textDirection;
      v.border = config.border;
      v.defaultVerticalAlignment = config.defaultVerticalAlignment;
      v.textBaseline = config.textBaseline;
    }
    return v;
  }
}

//****** TabBar ******
interface TabBarConfig {
  tabs?:Array<Tab>;
   onTap?:any;
   controller?:bt.TabController;
   isScrollable?:boolean;
   indicatorColor?:bt.Color;
   indicatorWeight?:number;
   indicatorPadding?:bt.EdgeInsets;
   indicator?:bt.BoxDecoration;
   indicatorSize?:bt.TabBarIndicatorSize;
   labelColor?:bt.Color;
   labelStyle?:bt.TextStyle;
   labelPadding?:bt.EdgeInsets;
   unselectedLabelColor?:bt.Color;
   unselectedLabelStyle?:bt.TextStyle;
   dragStartBehavior?:bt.DragStartBehavior;
   key?:bt.BaseKey;
}
export class TabBar extends  fw.JSBaseWidget {
   tabs?:Array<Tab>;
   onTap?:any;
   controller?:bt.TabController;
   isScrollable?:boolean;
   indicatorColor?:bt.Color;
   indicatorWeight?:number;
   indicatorPadding?:bt.EdgeInsets;
   indicator?:bt.BoxDecoration;
   indicatorSize?:bt.TabBarIndicatorSize;
   labelColor?:bt.Color;
   labelStyle?:bt.TextStyle;
   labelPadding?:bt.EdgeInsets;
   unselectedLabelColor?:bt.Color;
   unselectedLabelStyle?:bt.TextStyle;
   dragStartBehavior?:bt.DragStartBehavior;
   key?:bt.BaseKey;

   /**
   * @param config config: {tabs?:Array<Tab>, onTap?:any, controller?:TabController, isScrollable?:boolean, indicatorColor?:Color, indicatorWeight?:number,
  indicatorPadding?:EdgeInsets,  indicator?:BoxDecoration, indicatorSize?:TabBarIndicatorSize,
  labelColor?:Color, labelStyle?:TextStyle, labelPadding?:EdgeInsets, unselectedLabelColor?:Color,
  unselectedLabelStyle?:TextStyle, dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static new(config?: TabBarConfig) {
    var v = new TabBar();
    if(config!=null && config!=undefined){
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

//****** Tab ******
interface TabConfig {
  child?:fw.JSBaseWidget;
  text?:string;
  icon?:fw.JSBaseWidget;
  iconMargin?:bt.EdgeInsets;
  key?:bt.BaseKey;
}
export class Tab extends fw.JSBaseWidget {
  child?:fw.JSBaseWidget;
  text?:string;
  icon?:fw.JSBaseWidget;
  iconMargin?:bt.EdgeInsets;
  key?:bt.BaseKey;

  /**
   * @param config config: {child?:FlutterWidget,text?:string, icon?:FlutterWidget, iconMargin?:EdgeInsets, key?:BaseKey}
   */
  static new(config?: TabConfig) {
    var v = new Tab();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.text = config.text;
      v.icon = config.icon;
      v.child = config.child;
    }
    return v;
  }
}

//****** TabBarView ******
interface TabBarViewConfig {
  children?:Array<fw.JSBaseWidget>;
  controller?:bt.TabController;
  physics?:bt.ScrollPhysics;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;
}
export class TabBarView extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  controller?:bt.TabController;
  physics?:bt.ScrollPhysics;
  dragStartBehavior?:bt.DragStartBehavior;
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, controller?:TabController, physics?:ScrollPhysics, dragStartBehavior?:DragStartBehavior, key?:BaseKey}
   */
  static new(config?: TabBarViewConfig) {
    var v = new TabBarView();
    if(config!=null && config!=undefined){
      v.key = config.key;
      v.children = config.children;
      v.controller = config.controller;
      v.physics = config.physics;
      v.dragStartBehavior = config.dragStartBehavior;
    }
    return v;
  }
}

//****** TextSpan ******
interface TextSpanConfig {
  children?:Array<fw.JSBaseWidget>;
  style?:bt.TextStyle;
  text?:string;
  recognizer?:GestureDetector;
  semanticsLabel?:string;
}
export class TextSpan extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  style?:bt.TextStyle;
  text?:string;
  recognizer?:GestureDetector;
  semanticsLabel?:string;


  /**
   * @param config config: {children?:Array<FlutterWidget>, style?:TextStyle, text?:string, recognizer?:GestureDetector, semanticsLabel?:string,}
   */
  static new(config?: TextSpanConfig) {
    var v = new TextSpan();
    if(config!=null && config!=undefined){
      v.children = config.children;
      v.style = config.style;
      v.text = config.text;
      v.recognizer = config.recognizer;
      v.semanticsLabel = config.semanticsLabel;
    }
    return v;
  }
}

//****** TextFormField ******
interface TextFormFieldConfig {
  controller?:bt.TextEditingController;
  initialValue?:string;
  focusNode?:any;
  decoration?:bt.InputDecoration;
  keyboardType?:bt.TextInputType;
  textCapitalization?:bt.TextCapitalization;
  textInputAction?:bt.TextInputAction;
  style?:bt.TextStyle;
  textDirection?:bt.TextDirection;
  textAlign?:bt.TextAlign;
  autofocus?:boolean;
  obscureText?:boolean;
  autocorrect?:boolean;
  autovalidate?:boolean;
  maxLengthEnforced?:boolean;
  maxLines?:number;
  maxLength?:number;
  onEditingComplete?:any;
  onFieldSubmitted?:any;
  onSaved?:any;
  validator?:any;
  inputFormatters?:any;
  enabled?:boolean;
  cursorWidth?:number;
  cursorRadius?:bt.Radius;
  cursorColor?:bt.Color;
  keyboardAppearance?:bt.Brightness;
  scrollPadding?:bt.EdgeInsets;
  enableInteractiveSelection?:boolean;
  buildCounter?:any;
  key?:bt.BaseKey;
}
export class TextFormField extends fw.JSBaseWidget {
  controller?:bt.TextEditingController;
  initialValue?:string;
  focusNode?:any;
  decoration?:bt.InputDecoration;
  keyboardType?:bt.TextInputType;
  textCapitalization?:bt.TextCapitalization;
  textInputAction?:bt.TextInputAction;
  style?:bt.TextStyle;
  textDirection?:bt.TextDirection;
  textAlign?:bt.TextAlign;
  autofocus?:boolean;
  obscureText?:boolean;
  autocorrect?:boolean;
  autovalidate?:boolean;
  maxLengthEnforced?:boolean;
  maxLines?:number;
  maxLength?:number;
  onEditingComplete?:any;
  onFieldSubmitted?:any;
  onSaved?:any;
  validator?:any;
  inputFormatters?:any;
  enabled?:boolean;
  cursorWidth?:number;
  cursorRadius?:bt.Radius;
  cursorColor?:bt.Color;
  keyboardAppearance?:bt.Brightness;
  scrollPadding?:bt.EdgeInsets;
  enableInteractiveSelection?:boolean;
  buildCounter?:any;
  key?:bt.BaseKey;

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
    buildCounter?:any,key?:BaseKey }
   */
  static new(config?: TextFormFieldConfig) {
    var v = new TextFormField();
    if(config!=null && config!=undefined){
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


//-------------- U -----------------


//-------------- V -----------------


//-------------- W -----------------
//****** Wrap ******
interface WrapConfig {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.WrapAlignment;
  spacing?:number;
  crossAxisAlignment?:bt.WrapCrossAlignment;
  textDirection?:bt.TextDecoration;
  direction?:bt.Axis;
  verticalDirection?:bt.VerticalDirection;
  runAlignment?:bt.WrapAlignment;
  runSpacing?:number; 
  key?:bt.BaseKey;
}
export class Wrap extends fw.JSBaseWidget {
  children?:Array<fw.JSBaseWidget>;
  alignment?:bt.WrapAlignment;
  spacing?:number;
  crossAxisAlignment?:bt.WrapCrossAlignment;
  textDirection?:bt.TextDecoration;
  direction?:bt.Axis;
  verticalDirection?:bt.VerticalDirection;
  runAlignment?:bt.WrapAlignment;
  runSpacing?:number; 
  key?:bt.BaseKey;

  /**
   * @param config config: {children?:Array<FlutterWidget>, alignment?:WrapAlignment, spacing?:number, crossAxisAlignment?:WrapCrossAlignment,
    textDirection?:TextDecoration, direction?:Axis, verticalDirection?:VerticalDirection, runAlignment?:WrapAlignment,
    runSpacing?:number, key?:BaseKey,}
   */
  static new(config?: WrapConfig) {
      var v = new Wrap();
      if(config!=null && config!=undefined){
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

//-------------- X -----------------
//-------------- Y -----------------
//-------------- Z -----------------
