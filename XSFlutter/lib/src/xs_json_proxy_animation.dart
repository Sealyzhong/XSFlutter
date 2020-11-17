//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'dart:math';
import 'package:expressions/expressions.dart';

///把Widget按分类注册，方便写代码，
///分类：Material/Layout/Text/(Assets.Images.icons)/input...
///参照了官网https://flutter.io/docs/development/ui/widgets
class XSProxyRegisterHelperAnimationSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};
    m.addAll(XSProxyAnimation.registerProxy());
    m.addAll(XSProxyAnimationController.registerProxy());
    m.addAll(XSProxyAnimatedBuilder.registerProxy());
    m.addAll(XSProxyAnimatedContainer.registerProxy());
    m.addAll(XSProxyAnimatedCrossFade.registerProxy());
    m.addAll(XSProxyAnimatedDefaultTextStyle.registerProxy());
    m.addAll(XSProxyAnimatedOpacity.registerProxy());
    m.addAll(XSProxyAnimatedPhysicalModel.registerProxy());
    m.addAll(XSProxyAnimatedPositioned.registerProxy());
    m.addAll(XSProxyAnimatedSize.registerProxy());

    m.addAll(XSProxyDecoratedBoxTransition.registerProxy());

    m.addAll(XSProxyFadeTransition.registerProxy());

    m.addAll(XSProxySlideTransition.registerProxy());

    return m;
  }
}

//-------------- A -----------------
//****** Animation ******
class XSProxyAnimation extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Animation";
    return {
      regClassName: () => XSProxyAnimation()..init(className: regClassName)
    };
  }

  @override
  Animation constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    Tween tween = XSJSParse.getTween(context, bo, map, "tween");
    AnimationController controller = XSJSParse.getObject(context, bo, map, "controller");
    if (tween is Tween && controller is AnimationController) {
      Animation animation = tween.animate(controller);
      animation.addStatusListener(createStatusListenerHandle(bo, map["mirrorID"], 'statusListenerCallback'));
      animation.addListener(createListenerHandle(bo, map["mirrorID"], 'listenerCallback'));
      return animation;
    }
    return null;
  }

  ///生成VoidCallback 闭包
  AnimationStatusListener createStatusListenerHandle(XSJsonBuildOwner bo, String mirrorID, String functionName) {
    AnimationStatusListener cb = (AnimationStatus status) {
      bo.mirrorObjEventCallback(mirrorID, functionName, p: XSJSParse.getAnimationStatusString(null, bo, status));
    };
    return cb;
  }

  VoidCallback createListenerHandle(XSJsonBuildOwner bo, String mirrorID, String functionName) {
    VoidCallback cb = () {
      bo.mirrorObjEventCallback(mirrorID, functionName);
    };
    return cb;
  }
}

//****** AnimationController ******
class XSProxyAnimationController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimationController";
    return {
      regClassName: () => XSProxyAnimationController()..init(className: regClassName)
    };
  }

  @override
  AnimationController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimationController(
      value: XSJSParse.getDouble(context, bo, map, "value"),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      debugLabel: XSJSParse.getString(context, bo, map, "debugLabel"),
      lowerBound: XSJSParse.getDouble(context, bo, map, "lowerBound", defaultValue: 0.0),
      upperBound: XSJSParse.getDouble(context, bo, map, "upperBound", defaultValue: 1.0),
      animationBehavior: XSJSParse.getAnimationBehavior(context, bo, map, "animationBehavior", defaultValue: AnimationBehavior.normal),
      vsync: bo.widget.state, //XSJSParse.get(context, bo, map,"vsync"]), TODO: 此处不能为StatelessWidget
    );
  }

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is AnimationController)) {
      return;
    }

    invokeFunction(mirrorObj, funcName, args);
  }

  //TODO:优化分发
  void invokeFunction(AnimationController mirrorObj, String funcName, Map args) {
    if (funcName == 'forward') {
      mirrorObj.forward();
      return;
    } else if (funcName == 'reverse') {
      mirrorObj.reverse();
      return;
    } else if (funcName == 'repeat') {
      mirrorObj.repeat();
      return;
    } else if (funcName == 'drive') {
      Animatable animatable = args['animatable'];
      mirrorObj.drive(animatable);
      return;
    } else if (funcName == 'dispose') {
      mirrorObj.dispose();
      return;
    }
  }
}

//****** AnimatedContainer ******
class XSProxyAnimatedContainer extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedContainer";
    return {
      regClassName: () => XSProxyAnimatedContainer()..init(className: regClassName)
    };
  }

  @override
  AnimatedContainer constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedContainer(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      decoration: XSJSParse.getDecoration(context, bo, map, "decoration"),
      foregroundDecoration: XSJSParse.getDecoration(context, bo, map, "foregroundDecoration"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      constraints: XSJSParse.getBoxConstraints(context, bo, map, "constraints"),
      margin: XSJSParse.getEdgeInsets(context, bo, map, "margin"),
      transform: XSJSParse.getMatrix4(context, bo, map, "transform"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      onEnd: XSJSParse.getVoidCallback(context, bo, map, "onEnd"),
    );
  }
}

//****** AnimatedCrossFade ******
class XSProxyAnimatedCrossFade extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedCrossFade";
    return {
      regClassName: () => XSProxyAnimatedCrossFade()..init(className: regClassName)
    };
  }

  @override
  AnimatedCrossFade constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedCrossFade(
      key: XSJSParse.getKey(context, bo, map, "key"),
      firstChild: XSJSParse.getWidget(context, bo, map, "firstChild"),
      secondChild: XSJSParse.getWidget(context, bo, map, "secondChild"),
      firstCurve: XSJSParse.getCurve(context, bo, map, "firstCurve", defaultValue: Curves.linear),
      secondCurve: XSJSParse.getCurve(context, bo, map, "secondCurve", defaultValue: Curves.linear),
      sizeCurve: XSJSParse.getCurve(context, bo, map, "sizeCurve", defaultValue: Curves.linear),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.topCenter),
      crossFadeState: XSJSParse.getCrossFadeState(context, bo, map, "crossFadeState"),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      reverseDuration: XSJSParse.getDuration(context, bo, map, "reverseDuration"),
      layoutBuilder: XSJSParse.getObject(context, bo, map, "layoutBuilder", defaultValue: AnimatedCrossFade.defaultLayoutBuilder),
    );
  }
}

//****** AnimatedDefaultTextStyle ******
class XSProxyAnimatedDefaultTextStyle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedDefaultTextStyle";
    return {
      regClassName: () => XSProxyAnimatedDefaultTextStyle()..init(className: regClassName)
    };
  }

  @override
  AnimatedDefaultTextStyle constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedDefaultTextStyle(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      softWrap: XSJSParse.getBool(context, bo, map, "softWrap", defaultValue: true),
      overflow: XSJSParse.getTextOverflow(context, bo, map, "overflow", defaultValue: TextOverflow.clip),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      onEnd: XSJSParse.getVoidCallback(context, bo, map, "onEnd"),
    );
  }
}

//****** AnimatedOpacity ******
class XSProxyAnimatedOpacity extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedOpacity";
    return {
      regClassName: () => XSProxyAnimatedOpacity()..init(className: regClassName)
    };
  }

  @override
  AnimatedOpacity constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedOpacity(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      opacity: XSJSParse.getDouble(context, bo, map, "opacity"),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      onEnd: XSJSParse.getVoidCallback(context, bo, map, "onEnd"),
      alwaysIncludeSemantics: XSJSParse.getBool(context, bo, map, "alwaysIncludeSemantics", defaultValue: false),
    );
  }
}

//****** AnimatedPhysicalModel ******
class XSProxyAnimatedPhysicalModel extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedPhysicalModel";
    return {
      regClassName: () => XSProxyAnimatedPhysicalModel()..init(className: regClassName)
    };
  }

  @override
  AnimatedPhysicalModel constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedPhysicalModel(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      shape: XSJSParse.getBoxShape(context, bo, map, "shape"),
      clipBehavior: XSJSParse.getClip(context, bo, map, "clipBehavior", defaultValue: Clip.none),
      borderRadius: XSJSParse.getBorderRadius(context, bo, map, "borderRadius", defaultValue: BorderRadius.zero),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      animateColor: XSJSParse.getBool(context, bo, map, "animateColor", defaultValue: true),
      shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor"),
      animateShadowColor: XSJSParse.getBool(context, bo, map, "animateShadowColor", defaultValue: true),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      onEnd: XSJSParse.getVoidCallback(context, bo, map, "onEnd"),
    );
  }
}

//****** AnimatedPositioned ******
class XSProxyAnimatedPositioned extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedPositioned";
    return {
      regClassName: () => XSProxyAnimatedPositioned()..init(className: regClassName)
    };
  }

  @override
  AnimatedPositioned constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedPositioned(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      left: XSJSParse.getDouble(context, bo, map, "left"),
      top: XSJSParse.getDouble(context, bo, map, "top"),
      right: XSJSParse.getDouble(context, bo, map, "right"),
      bottom: XSJSParse.getDouble(context, bo, map, "bottom"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      onEnd: XSJSParse.getVoidCallback(context, bo, map, "onEnd"),
    );
  }
}

//****** AnimatedSize ******
class XSProxyAnimatedSize extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedSize";
    return {
      regClassName: () => XSProxyAnimatedSize()..init(className: regClassName)
    };
  }

  @override
  AnimatedSize constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AnimatedSize(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      curve: XSJSParse.getCurve(context, bo, map, "curve", defaultValue: Curves.linear),
      duration: XSJSParse.getDuration(context, bo, map, "duration"),
      reverseDuration: XSJSParse.getDuration(context, bo, map, "reverseDuration"),
      vsync: bo.widget.state,
      //XSJSParse.get(context, bo, map,"vsync"]), //TODO FIXME,bo.widget 不能是XSJSStatelessWidget
    );
  }
}

//****** AnimatedBuilder ******
class XSProxyAnimatedBuilder extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AnimatedBuilder";
    return {
      regClassName: () => XSProxyAnimatedBuilder()..init(className: regClassName)
    };
  }

  @override
  AnimatedBuilder constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    Animation animation = XSJSParse.getObject(context, bo, map, "animation");
    return AnimatedBuilder(
      key: XSJSParse.getKey(context, bo, map, "key"),
      animation: animation,
      builder: (BuildContext context, Widget child) {
        if (map.containsKey("builder")) {
          //todo...
          print("调用JS的builder生成数据，返回");
          final builderCallbackID = map["builder"];
          final widgetMap = bo.eventCallback(builderCallbackID, p: []);
          return mxj2d(bo, widgetMap);
        } else {
          String targetString = '\$value';
          var context = {
            "sin": sin,
            "cos": cos,
            "\$value": animation.value?.toDouble(),
          };
          Map widgetMap = replaceSpecificValue(map["widget"], targetString, context);
          return mxj2d(bo, widgetMap);
        }
      },
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }

  Map replaceSpecificValue(Map map, String targetValue, dynamic context) {
    Map nMap = <String, dynamic>{};
    if (map != null) {
      map.forEach((key, value) {
        if (value is Map) {
          nMap[key] = replaceSpecificValue(value, targetValue, context);
        } else if (value.toString().contains(targetValue)) {
          final evaluator = const ExpressionEvaluator();
          Expression expression = Expression.parse(value);
          var replaceValue = evaluator.eval(expression, context);
          nMap[key] = replaceValue;
        } else {
          nMap[key] = value;
        }
      });
    }
    return nMap;
  }
}

//-------------- D -----------------
//****** DecoratedBoxTransition ******
class XSProxyDecoratedBoxTransition extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DecoratedBoxTransition";
    return {
      regClassName: () => XSProxyDecoratedBoxTransition()..init(className: regClassName)
    };
  }

  @override
  DecoratedBoxTransition constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var decoration = XSJSParse.getObject(context, bo, map, "decoration");
    AnimationController controller = XSJSParse.getObject(context, bo, map, "controller");
    Animation<Decoration> animation = decoration.animate(controller);

    var widget = DecoratedBoxTransition(
      key: XSJSParse.getKey(context, bo, map, "key"),
      decoration: animation,
      position: XSJSParse.getDecorationPosition(context, bo, map, "position", defaultValue: DecorationPosition.background),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
    return widget;
  }
}

//-------------- F -----------------
//****** FadeTransition ******
class XSProxyFadeTransition extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FadeTransition";
    return {
      regClassName: () => XSProxyFadeTransition()..init(className: regClassName)
    };
  }

  @override
  FadeTransition constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FadeTransition(
      key: XSJSParse.getKey(context, bo, map, "key"),
      opacity: XSJSParse.getAnimationDouble(context, bo, map, "opacity"),
      alwaysIncludeSemantics: XSJSParse.getBool(context, bo, map, "alwaysIncludeSemantics", defaultValue: false),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- S -----------------
//****** SlideTransition ******
class XSProxySlideTransition extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SlideTransition";
    return {
      regClassName: () => XSProxySlideTransition()..init(className: regClassName)
    };
  }

  @override
  SlideTransition constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SlideTransition(
      key: XSJSParse.getKey(context, bo, map, "key"),
      position: XSJSParse.getObject(context, bo, map, "position"),
      transformHitTests: XSJSParse.getBool(context, bo, map, "transformHitTests", defaultValue: true),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}
