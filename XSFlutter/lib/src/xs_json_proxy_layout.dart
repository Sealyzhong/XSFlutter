//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:ui';

import 'package:flutter/material.dart';
import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'package:flutter/gestures.dart';
import 'dart:convert';

/******************TODO List****************************/
/*
    // 1. Matrix4
    //   Transform.transform
    
    2. Delegate
      CustomSingleChildLayout.delegate
    
    3. Delegate
      Flow.delegate

    4. Delegate
      CustomMultiChildLayout.delegate

    // 5. controller
    //   ListView.controller

    // 6. ScrollPhysics
    //   ListView.physics

    7. SliverChildDelegate
      ListView.childrenDelegate

    8.semanticIndexCallback: mxj2d(bo, map["semanticIndexCallback"]),
*/
/******************TODO List****************************/

///把Widget按分类注册，方便写代码，
///分类：Material/Layout/Text/(Assets.Images.icons)/input...
///参照了官网https://flutter.io/docs/development/ui/widgets，
class XSProxyRegisterHelperLayoutSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyAlign.registerProxy());
    m.addAll(XSProxyAspectRatio.registerProxy());

    m.addAll(XSProxyBaseline.registerProxy());

    m.addAll(XSProxyContainer.registerProxy());
    m.addAll(XSProxyCenter.registerProxy());
    m.addAll(XSProxyColumn.registerProxy());
    m.addAll(XSProxyConstrainedBox.registerProxy());
    m.addAll(XSProxyCustomSingleChildLayout.registerProxy());
    m.addAll(XSProxyCustomMultiChildLayout.registerProxy());
    m.addAll(XSProxyCustomScrollView.registerProxy());

    m.addAll(XSProxyDecoratedBox.registerProxy());

    m.addAll(XSProxyExpanded.registerProxy());

    m.addAll(XSProxyFittedBox.registerProxy());
    m.addAll(XSProxyFlow.registerProxy());
    m.addAll(XSProxyFractionallySizedBox.registerProxy());

    m.addAll(XSProxyGestureDetector.registerProxy());

    m.addAll(XSProxyIndexedStack.registerProxy());
    m.addAll(XSProxyIntrinsicHeight.registerProxy());
    m.addAll(XSProxyIntrinsicWidth.registerProxy());

    m.addAll(XSProxyLimitedBox.registerProxy());
    m.addAll(XSProxyListBody.registerProxy());
    m.addAll(XSProxyListView.registerProxy());
    m.addAll(XSProxyLayoutBuilder.registerProxy());
    m.addAll(XSProxyListTile.registerProxy());
    m.addAll(XSProxyTable.registerProxy());

    m.addAll(XSProxyNestedScrollView.registerProxy());

    m.addAll(XSProxyOffstage.registerProxy());
    m.addAll(XSProxyOffsetBase.registerProxy());
    m.addAll(XSProxyOverflowBox.registerProxy());

    m.addAll(XSProxyPadding.registerProxy());

    m.addAll(XSProxyRow.registerProxy());

    m.addAll(XSProxySizedBox.registerProxy());
    m.addAll(XSProxySizedOverflowBox.registerProxy());
    m.addAll(XSProxyScrollController.registerProxy());
    m.addAll(XSProxySliverAppBar.registerProxy());
    m.addAll(XSProxySliverPadding.registerProxy());
    m.addAll(XSProxySliverGrid.registerProxy());
    m.addAll(XSProxySliverGridDelegateWithMaxCrossAxisExtent.registerProxy());
    m.addAll(XSProxySliverChildBuilderDelegate.registerProxy());
    m.addAll(XSProxySliverChildListDelegate.registerProxy());
    m.addAll(XSProxySliverList.registerProxy());
    m.addAll(XSProxySliverOverlapInjector.registerProxy());
    m.addAll(XSProxySliverFixedExtentList.registerProxy());
    m.addAll(XSProxySliverOverlapAbsorber.registerProxy());
    m.addAll(XSProxySingleChildScrollView.registerProxy());
    m.addAll(XSProxySliverToBoxAdapter.registerProxy());

    m.addAll(XSProxyTooltip.registerProxy());
    m.addAll(XSProxyTransform.registerProxy());
    m.addAll(XSProxyTableCell.registerProxy());

    m.addAll(XSProxyStack.registerProxy());

    m.addAll(XSProxyWrap.registerProxy());
    return m;
  }
}

//-------------- A -----------------
//****** Align ******
class XSProxyAlign extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Align";
    return {
      regClassName: () => XSProxyAlign()..init(className: regClassName)
    };
  }

  @override
  Align constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Align(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      widthFactor: XSJSParse.getDouble(context, bo, map, "widthFactor"),
      heightFactor: XSJSParse.getDouble(context, bo, map, "heightFactor"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** AspectRatio ******
class XSProxyAspectRatio extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "AspectRatio";
    return {
      regClassName: () => XSProxyAspectRatio()..init(className: regClassName)
    };
  }

  @override
  AspectRatio constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return AspectRatio(
      key: XSJSParse.getKey(context, bo, map, "key"),
      aspectRatio: XSJSParse.getDouble(context, bo, map, "aspectRatio"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- B -----------------
//****** Baseline ******
class XSProxyBaseline extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Baseline";
    return {
      regClassName: () => XSProxyBaseline()..init(className: regClassName)
    };
  }

  @override
  Baseline constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Baseline(
      key: XSJSParse.getKey(context, bo, map, "key"),
      baseline: XSJSParse.getDouble(context, bo, map, "baseline"),
      baselineType: XSJSParse.getTextBaseline(context, bo, map, "baselineType"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- C -----------------
//****** Container ******
class XSProxyContainer extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "Container";
    return {
      regClassName1: () => XSProxyContainer()..init(className: regClassName1)
    };
  }

  @override
  Container constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Container(
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
    );
  }
}

//****** Center ******
class XSProxyCenter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Center";
    return {
      regClassName: () => XSProxyCenter()..init(className: regClassName)
    };
  }

  @override
  Center constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Center(
      key: XSJSParse.getKey(context, bo, map, "key"),
      widthFactor: XSJSParse.getDouble(context, bo, map, "widthFactor"),
      heightFactor: XSJSParse.getDouble(context, bo, map, "heightFactor"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** ConstrainedBox ******
class XSProxyConstrainedBox extends XSJsonObjProxy {
  static String regClassName = "ConstrainedBox";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyConstrainedBox()..init(className: regClassName)
    };
  }

  @override
  ConstrainedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ConstrainedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      constraints: XSJSParse.getBoxConstraints(context, bo, map, "constraints"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** CustomSingleChildLayout ******
class XSProxyCustomSingleChildLayout extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CustomSingleChildLayout";
    return {
      regClassName: () => XSProxyCustomSingleChildLayout()..init(className: regClassName)
    };
  }

  @override
  CustomSingleChildLayout constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CustomSingleChildLayout(
      key: XSJSParse.getKey(context, bo, map, "key"),
      //TODO:delegate
      delegate: null,
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Column ******
class XSProxyColumn extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Column";
    return {
      regClassName: () => XSProxyColumn()..init(className: regClassName)
    };
  }

  @override
  Column constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Column(
      key: XSJSParse.getKey(context, bo, map, "key"),
      mainAxisAlignment: XSJSParse.getMainAxisAlignment(context, bo, map, "mainAxisAlignment", defaultValue: MainAxisAlignment.start),
      mainAxisSize: XSJSParse.getMainAxisSize(context, bo, map, "mainAxisSize", defaultValue: MainAxisSize.max),
      crossAxisAlignment: XSJSParse.getCrossAxisAlignment(context, bo, map, "crossAxisAlignment", defaultValue: CrossAxisAlignment.center),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      verticalDirection: XSJSParse.getVerticalDirection(context, bo, map, "verticalDirection", defaultValue: VerticalDirection.down),
      textBaseline: XSJSParse.getTextBaseline(context, bo, map, "textBaseline"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//****** CustomMultiChildLayout ******
class XSProxyCustomMultiChildLayout extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CustomMultiChildLayout";
    return {
      regClassName: () => XSProxyCustomMultiChildLayout()..init(className: regClassName)
    };
  }

  @override
  CustomMultiChildLayout constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CustomMultiChildLayout(
      key: XSJSParse.getKey(context, bo, map, "key"),
      //TODO:delegate
      delegate: null,
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//****** CustomScrollView ******
class XSProxyCustomScrollView extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "CustomScrollView";
    return {
      regClassName: () => XSProxyCustomScrollView()..init(className: regClassName)
    };
  }

  @override
  CustomScrollView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return CustomScrollView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      center: XSJSParse.getKey(context, bo, map, "center"),
      anchor: XSJSParse.getDouble(context, bo, map, "anchor", defaultValue: 0.0),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      slivers: XSJSParse.getWidgetList(context, bo, map, "slivers", defaultValue: const <Widget>[]),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.down),
    );
  }
}

//-------------- D -----------------
//****** DecoratedBox ******
class XSProxyDecoratedBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "DecoratedBox";
    return {
      regClassName: () => XSProxyDecoratedBox()..init(className: regClassName)
    };
  }

  @override
  DecoratedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DecoratedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      decoration: XSJSParse.getDecoration(context, bo, map, "decoration"),
      position: XSJSParse.getDecorationPosition(context, bo, map, "position", defaultValue: DecorationPosition.background),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- E -----------------
//****** Expanded ******
class XSProxyExpanded extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Expanded";
    return {
      regClassName: () => XSProxyExpanded()..init(className: regClassName)
    };
  }

  @override
  Expanded constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Expanded(
      key: XSJSParse.getKey(context, bo, map, "key"),
      flex: XSJSParse.getInt(context, bo, map, "flex", defaultValue: 1),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- F -----------------
//****** FittedBox ******
class XSProxyFittedBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FittedBox";
    return {
      regClassName: () => XSProxyFittedBox()..init(className: regClassName)
    };
  }

  @override
  FittedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FittedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      fit: XSJSParse.getBoxFit(context, bo, map, "fit", defaultValue: BoxFit.contain),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** FractionallySizedBox ******
class XSProxyFractionallySizedBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "FractionallySizedBox";
    return {
      regClassName: () => XSProxyFractionallySizedBox()..init(className: regClassName)
    };
  }

  @override
  FractionallySizedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return FractionallySizedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      widthFactor: XSJSParse.getDouble(context, bo, map, "widthFactor"),
      heightFactor: XSJSParse.getDouble(context, bo, map, "heightFactor"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Flow ******
class XSProxyFlow extends XSJsonObjProxy {
  static String regClassName = "Flow";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyFlow()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "unwrapped", constructor: constructorUnwrapped);
  }

  @override
  Flow constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Flow(
      key: XSJSParse.getKey(context, bo, map, "key"),
      //TODO:delegate
      delegate: null,
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }

  Flow constructorUnwrapped(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Flow.unwrapped(
      key: XSJSParse.getKey(context, bo, map, "key"),
      //TODO:delegate
      delegate: null,
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//-------------- G -----------------
//****** GestureDetector ******
class XSProxyGestureDetector extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "GestureDetector";
    return {
      regClassName: () => XSProxyGestureDetector()..init(className: regClassName)
    };
  }

  @override
  GestureDetector constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return GestureDetector(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      behavior: XSJSParse.getHitTestBehavior(context, bo, map, "behavior"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics", defaultValue: false),
      onTapDown: XSJSParse.getValueChanged<TapDownDetails>(context, bo, map, "onTapDown"),
      onTapUp: XSJSParse.getValueChanged<TapUpDetails>(context, bo, map, "onTapUp"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onTapCancel: XSJSParse.getVoidCallback(context, bo, map, "onTapCancel"),
      onDoubleTap: XSJSParse.getVoidCallback(context, bo, map, "onDoubleTap"),
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      onLongPressUp: XSJSParse.getVoidCallback(context, bo, map, "onLongPressUp"),
      onVerticalDragDown: XSJSParse.getValueChanged<DragDownDetails>(context, bo, map, "onVerticalDragDown"),
      onVerticalDragStart: XSJSParse.getValueChanged<DragStartDetails>(context, bo, map, "onVerticalDragStart"),
      onVerticalDragUpdate: XSJSParse.getValueChanged<DragUpdateDetails>(context, bo, map, "onVerticalDragUpdate"),
      onVerticalDragEnd: XSJSParse.getValueChanged<DragEndDetails>(context, bo, map, "onVerticalDragUpdate"),
      onVerticalDragCancel: XSJSParse.getVoidCallback(context, bo, map, "onVerticalDragCancel"),
      onHorizontalDragDown: XSJSParse.getValueChanged<DragDownDetails>(context, bo, map, "onHorizontalDragDown"),
      onHorizontalDragStart: XSJSParse.getValueChanged<DragStartDetails>(context, bo, map, "onHorizontalDragStart"),
      onHorizontalDragUpdate: XSJSParse.getValueChanged<DragUpdateDetails>(context, bo, map, "onVerticalDragUpdate"),
      onHorizontalDragEnd: XSJSParse.getValueChanged<DragEndDetails>(context, bo, map, "onHorizontalDragEnd"),
      onHorizontalDragCancel: XSJSParse.getVoidCallback(context, bo, map, "onHorizontalDragCancel"),
      onPanDown: XSJSParse.getValueChanged<DragDownDetails>(context, bo, map, "onPanDown"),
      onPanStart: XSJSParse.getValueChanged<DragStartDetails>(context, bo, map, "onPanStart"),
      onPanUpdate: XSJSParse.getValueChanged<DragUpdateDetails>(context, bo, map, "onPanUpdate"),
      onPanEnd: XSJSParse.getValueChanged<DragEndDetails>(context, bo, map, "onPanEnd"),
      onPanCancel: XSJSParse.getVoidCallback(context, bo, map, "onPanCancel"),
      onScaleStart: XSJSParse.getValueChanged<ScaleStartDetails>(context, bo, map, "onScaleStart"),
      onScaleUpdate: XSJSParse.getValueChanged<ScaleUpdateDetails>(context, bo, map, "onScaleUpdate"),
      onScaleEnd: XSJSParse.getValueChanged<ScaleEndDetails>(context, bo, map, "onScaleEnd"),
    );
  }
}

//-------------- I -----------------
//****** IntrinsicHeight ******
class XSProxyIntrinsicHeight extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IntrinsicHeight";
    return {
      regClassName: () => XSProxyIntrinsicHeight()..init(className: regClassName)
    };
  }

  @override
  IntrinsicHeight constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return IntrinsicHeight(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** IntrinsicWidth ******
class XSProxyIntrinsicWidth extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IntrinsicWidth";
    return {
      regClassName: () => XSProxyIntrinsicWidth()..init(className: regClassName)
    };
  }

  @override
  IntrinsicWidth constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return IntrinsicWidth(
      key: XSJSParse.getKey(context, bo, map, "key"),
      stepWidth: XSJSParse.getDouble(context, bo, map, "stepWidth"),
      stepHeight: XSJSParse.getDouble(context, bo, map, "stepHeight"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** IndexedStack ******
class XSProxyIndexedStack extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "IndexedStack";
    return {
      regClassName: () => XSProxyIndexedStack()..init(className: regClassName)
    };
  }

  @override
  IndexedStack constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return IndexedStack(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignmentDirectional(context, bo, map, "alignment", defaultValue: AlignmentDirectional.topStart),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      sizing: XSJSParse.getStackFit(context, bo, map, "sizing", defaultValue: StackFit.loose),
      index: XSJSParse.getInt(context, bo, map, "index", defaultValue: 0),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//-------------- L -----------------
//****** LimitedBox ******
class XSProxyLimitedBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "LimitedBox";
    return {
      regClassName: () => XSProxyLimitedBox()..init(className: regClassName)
    };
  }

  @override
  LimitedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return LimitedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      maxWidth: XSJSParse.getDouble(context, bo, map, "maxWidth", defaultValue: double.infinity),
      maxHeight: XSJSParse.getDouble(context, bo, map, "maxHeight", defaultValue: double.infinity),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** ListBody ******
class XSProxyListBody extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ListBody";
    return {
      regClassName: () => XSProxyListBody()..init(className: regClassName)
    };
  }

  @override
  ListBody constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListBody(
      key: XSJSParse.getKey(context, bo, map, "key"),
      mainAxis: XSJSParse.getAxis(context, bo, map, "mainAxis", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//****** ListTile ******
class XSProxyListTile extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ListTile";
    return {
      regClassName: () => XSProxyListTile()..init(className: regClassName)
    };
  }

  @override
  ListTile constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListTile(
      key: XSJSParse.getKey(context, bo, map, "key"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      subtitle: XSJSParse.getWidget(context, bo, map, "subtitle"),
      trailing: XSJSParse.getWidget(context, bo, map, "trailing"),
      isThreeLine: XSJSParse.getBool(context, bo, map, "isThreeLine", defaultValue: false),
      dense: XSJSParse.getBool(context, bo, map, "dense"),
      contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled", defaultValue: true),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onLongPress: XSJSParse.getVoidCallback(context, bo, map, "onLongPress"),
      selected: XSJSParse.getBool(context, bo, map, "selected", defaultValue: false),
    );
  }
}

//****** ListView ******
class XSProxyListView extends XSJsonObjProxy {
  static String regClassName = "ListView";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyListView()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "builder", constructor: constructorBuilder);
    registerConstructor(className: regClassName, constructorName: "separated", constructor: constructorSeparated);
    registerConstructor(className: regClassName, constructorName: "custom", constructor: constructorCustom);
  }

  // ListView
  @override
  ListView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      itemExtent: XSJSParse.getDouble(context, bo, map, "itemExtent"),
      addAutomaticKeepAlives: XSJSParse.getBool(context, bo, map, "addAutomaticKeepAlives", defaultValue: true),
      addRepaintBoundaries: XSJSParse.getBool(context, bo, map, "addRepaintBoundaries", defaultValue: true),
      addSemanticIndexes: XSJSParse.getBool(context, bo, map, "addSemanticIndexes", defaultValue: true),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
    );
  }

  /// ListView.builder
  ListView constructorBuilder(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListView.builder(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      itemExtent: XSJSParse.getDouble(context, bo, map, "itemExtent"),
      addAutomaticKeepAlives: XSJSParse.getBool(context, bo, map, "addAutomaticKeepAlives", defaultValue: true),
      addRepaintBoundaries: XSJSParse.getBool(context, bo, map, "addRepaintBoundaries", defaultValue: true),
      addSemanticIndexes: XSJSParse.getBool(context, bo, map, "addSemanticIndexes", defaultValue: true),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      itemCount: XSJSParse.getInt(context, bo, map, "itemCount"),
      itemBuilder: (BuildContext context, int index) {
        return XSJSParse.getWidgetList(context, bo, map, "children")[index];
      },
    );
  }

  /// ListView.separated
  ListView constructorSeparated(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListView.separated(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      addAutomaticKeepAlives: XSJSParse.getBool(context, bo, map, "addAutomaticKeepAlives", defaultValue: true),
      addRepaintBoundaries: XSJSParse.getBool(context, bo, map, "addRepaintBoundaries", defaultValue: true),
      addSemanticIndexes: XSJSParse.getBool(context, bo, map, "addSemanticIndexes", defaultValue: true),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      itemCount: XSJSParse.getInt(context, bo, map, "itemCount"),
      itemBuilder: (BuildContext context, int index) {
        return XSJSParse.getWidgetList(context, bo, map, "children")[index];
      },
      separatorBuilder: (BuildContext context, int index) {
        return XSJSParse.getWidgetList(context, bo, map, "children")[index];
      },
    );
  }

  // ListView.custom
  ListView constructorCustom(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ListView.custom(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      itemExtent: XSJSParse.getDouble(context, bo, map, "itemExtent"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      childrenDelegate: XSJSParse.getObject(context, bo, map, "childrenDelegate"),
    );
  }
}

//****** LayoutBuilder ******
class XSProxyLayoutBuilder extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "LayoutBuilder";
    return {
      regClassName: () => XSProxyLayoutBuilder()..init(className: regClassName)
    };
  }

  @override
  LayoutBuilder constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return LayoutBuilder(
      key: XSJSParse.getKey(context, bo, map, "key"),
      builder: (BuildContext context, BoxConstraints constraints) {
        //TODO: 此处异步要改成同步实现。否则会报错。另外，js framework的invokeCallback也要单独处理下
        return getBuilderWidget(bo, map, constraints, context: context);
      },
    );
  }

  dynamic getBuilderWidget(XSJsonBuildOwner bo, Map<String, dynamic> map, BoxConstraints constraints, {BuildContext context}) async {
    var widgetDataStr = await createLayoutWidgetBuilder(bo, XSJSParse.getObject(context, bo, map, "builder"), constraints);
    Map widgetMap = json.decode(widgetDataStr);
    return mxj2d(bo, widgetMap);
  }
}

//-------------- N -----------------
//****** NestedScrollView ******
class XSProxyNestedScrollView extends XSJsonObjProxy {
  static String regClassName = "NestedScrollView";

  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyNestedScrollView()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerStaticFunction(className: regClassName, staticFunctionName: "sliverOverlapAbsorberHandleFor", staticFunction: functionSliverOverlapAbsorberHandleFor);
  }

  @override
  NestedScrollView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return NestedScrollView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
        return XSJSParse.getWidgetList(context, bo, map, "children");
      },
      body: XSJSParse.getWidget(context, bo, map, "body"),
    );
  }

  SliverOverlapAbsorberHandle functionSliverOverlapAbsorberHandleFor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return NestedScrollView.sliverOverlapAbsorberHandleFor(context);
  }
}

//-------------- O -----------------
//****** Offstage ******
class XSProxyOffstage extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Offstage";
    return {
      regClassName: () => XSProxyOffstage()..init(className: regClassName)
    };
  }

  @override
  Offstage constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Offstage(
      key: XSJSParse.getKey(context, bo, map, "key"),
      offstage: XSJSParse.getBool(context, bo, map, "offstage", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** OffsetBase ******
class XSProxyOffsetBase extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "OffsetBase";
    return {
      regClassName: () => XSProxyOffsetBase()..init(className: regClassName)
    };
  }

  @override
  OffsetBase constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    //TODO: 因为是抽象类，无法给实例化，暂用子类Size。可以考虑从js framework生成的json入手，加入子类的名称。
    return Size(
      XSJSParse.getDouble(context, bo, map, "_dx"),
      XSJSParse.getDouble(context, bo, map, "_dy"),
    );
  }
}

//****** OverflowBox ******
class XSProxyOverflowBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "OverflowBox";
    return {
      regClassName: () => XSProxyOverflowBox()..init(className: regClassName)
    };
  }

  @override
  OverflowBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return OverflowBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      minWidth: XSJSParse.getDouble(context, bo, map, "minWidth"),
      maxWidth: XSJSParse.getDouble(context, bo, map, "maxWidth"),
      minHeight: XSJSParse.getDouble(context, bo, map, "minHeight"),
      maxHeight: XSJSParse.getDouble(context, bo, map, "maxHeight"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- P -----------------
//****** Padding ******
class XSProxyPadding extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Padding";
    return {
      regClassName: () => XSProxyPadding()..init(className: regClassName)
    };
  }

  @override
  Padding constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Padding(
      key: XSJSParse.getKey(context, bo, map, "key"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- Q -----------------
//-------------- R -----------------
//****** Row ******
class XSProxyRow extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Row";
    return {
      regClassName: () => XSProxyRow()..init(className: regClassName)
    };
  }

  @override
  Row constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Row(
      key: XSJSParse.getKey(context, bo, map, "key"),
      mainAxisAlignment: XSJSParse.getMainAxisAlignment(context, bo, map, "mainAxisAlignment", defaultValue: MainAxisAlignment.start),
      mainAxisSize: XSJSParse.getMainAxisSize(context, bo, map, "mainAxisSize", defaultValue: MainAxisSize.max),
      crossAxisAlignment: XSJSParse.getCrossAxisAlignment(context, bo, map, "crossAxisAlignment", defaultValue: CrossAxisAlignment.center),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      verticalDirection: XSJSParse.getVerticalDirection(context, bo, map, "verticalDirection", defaultValue: VerticalDirection.down),
      textBaseline: XSJSParse.getTextBaseline(context, bo, map, "textBaseline"),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//-------------- S -----------------
//****** SizedBox ******
class XSProxySizedBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SizedBox";
    return {
      regClassName: () => XSProxySizedBox()..init(className: regClassName)
    };
  }

  @override
  SizedBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SizedBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      width: XSJSParse.getDouble(context, bo, map, "width"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** SizedOverflowBox ******
class XSProxySizedOverflowBox extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SizedOverflowBox";
    return {
      regClassName: () => XSProxySizedOverflowBox()..init(className: regClassName)
    };
  }

  @override
  SizedOverflowBox constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SizedOverflowBox(
      key: XSJSParse.getKey(context, bo, map, "key"),
      size: XSJSParse.getSize(context, bo, map, "size"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment", defaultValue: Alignment.center),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Stack ******
class XSProxyStack extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Stack";
    return {
      regClassName: () => XSProxyStack()..init(className: regClassName)
    };
  }

  @override
  Stack constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Stack(
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignmentDirectional(context, bo, map, "alignment", defaultValue: AlignmentDirectional.topStart),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      fit: XSJSParse.getStackFit(context, bo, map, "fit", defaultValue: StackFit.loose),
      overflow: XSJSParse.getOverflow(context, bo, map, "overflow", defaultValue: Overflow.clip),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}

//****** Stack ******
class XSProxyScrollController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "ScrollController";
    return {
      regClassName: () => XSProxyScrollController()..init(className: regClassName)
    };
  }

  @override
  ScrollController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ScrollController(
      initialScrollOffset: XSJSParse.getDouble(context, bo, map, "initialScrollOffset", defaultValue: 0.0),
      keepScrollOffset: XSJSParse.getBool(context, bo, map, "keepScrollOffset", defaultValue: true),
      debugLabel: XSJSParse.getString(context, bo, map, "debugLabel"),
    );
  }

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is ScrollController)) {
      return;
    }

    invokeFunction(mirrorObj, funcName, args);
  }

  //TODO:优化分发
  void invokeFunction(ScrollController mirrorObj, String funcName, Map args) {
    if (funcName == 'jumpTo') {
      mirrorObj.jumpTo(
        XSJSParse.getDouble(null, null, args, "value"),
      );
      return;
    } else if (funcName == 'animateTo') {
      mirrorObj.animateTo(
        args["value"]?.toDouble(),
        duration: XSJSParse.getDuration(null, null, args, "duration"),
        curve: XSJSParse.getCurve(null, null, args, "curve"),
      );
      return;
    }
  }
}

//****** SliverAppBar ******
class XSProxySliverAppBar extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverAppBar";
    return {
      regClassName: () => XSProxySliverAppBar()..init(className: regClassName)
    };
  }

  @override
  SliverAppBar constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverAppBar(
      key: XSJSParse.getKey(context, bo, map, "key"),
      leading: XSJSParse.getWidget(context, bo, map, "leading"),
      automaticallyImplyLeading: XSJSParse.getBool(context, bo, map, "automaticallyImplyLeading", defaultValue: true),
      title: XSJSParse.getWidget(context, bo, map, "title"),
      actions: XSJSParse.getWidgetList(context, bo, map, "actions"),
      flexibleSpace: XSJSParse.getWidget(context, bo, map, "flexibleSpace"),
      bottom: XSJSParse.getWidget(context, bo, map, "bottom"),
      elevation: XSJSParse.getDouble(context, bo, map, "elevation"),
      shadowColor: XSJSParse.getColor(context, bo, map, "shadowColor"),
      forceElevated: XSJSParse.getBool(context, bo, map, "forceElevated", defaultValue: false),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      brightness: XSJSParse.getBrightness(context, bo, map, "brightness"),
      iconTheme: XSJSParse.getIconThemeData(context, bo, map, "iconTheme"),
      primary: XSJSParse.getBool(context, bo, map, "primary", defaultValue: true),
      centerTitle: XSJSParse.getBool(context, bo, map, "centerTitle"),
      titleSpacing: XSJSParse.getDouble(context, bo, map, "titleSpacing", defaultValue: NavigationToolbar.kMiddleSpacing),
      excludeHeaderSemantics: XSJSParse.getBool(context, bo, map, "excludeHeaderSemantics"),
      collapsedHeight: XSJSParse.getDouble(context, bo, map, "collapsedHeight"),
      expandedHeight: XSJSParse.getDouble(context, bo, map, "expandedHeight"),
      floating: XSJSParse.getBool(context, bo, map, "floating", defaultValue: false),
      pinned: XSJSParse.getBool(context, bo, map, "pinned", defaultValue: false),
      snap: XSJSParse.getBool(context, bo, map, "snap", defaultValue: false),
      stretch: XSJSParse.getBool(context, bo, map, "stretch", defaultValue: false),
      shape: XSJSParse.getObject(context, bo, map, "shape"),
      toolbarHeight: XSJSParse.getDouble(context, bo, map, "toolbarHeight"),
    );
  }
}

//****** SliverPadding ******
class XSProxySliverPadding extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverPadding";
    return {
      regClassName: () => XSProxySliverPadding()..init(className: regClassName)
    };
  }

  @override
  SliverPadding constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverPadding(
      key: XSJSParse.getKey(context, bo, map, "key"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      sliver: XSJSParse.getWidget(context, bo, map, "sliver"),
    );
  }
}

//****** SliverGrid ******
class XSProxySliverGrid extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverGrid";
    return {
      regClassName: () => XSProxySliverGrid()..init(className: regClassName)
    };
  }

  @override
  SliverGrid constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverGrid(
      key: XSJSParse.getKey(context, bo, map, "key"),
      delegate: XSJSParse.getObject(context, bo, map, "delegate"),
      gridDelegate: XSJSParse.getObject(context, bo, map, "gridDelegate"),
    );
  }
}

//****** SliverGridDelegateWithMaxCrossAxisExtent ******
class XSProxySliverGridDelegateWithMaxCrossAxisExtent extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverGridDelegateWithMaxCrossAxisExtent";
    return {
      regClassName: () => XSProxySliverGridDelegateWithMaxCrossAxisExtent()..init(className: regClassName)
    };
  }

  @override
  SliverGridDelegateWithMaxCrossAxisExtent constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverGridDelegateWithMaxCrossAxisExtent(
      maxCrossAxisExtent: XSJSParse.getDouble(context, bo, map, "maxCrossAxisExtent"),
      mainAxisSpacing: XSJSParse.getDouble(context, bo, map, "mainAxisSpacing", defaultValue: 0.0),
      crossAxisSpacing: XSJSParse.getDouble(context, bo, map, "crossAxisSpacing", defaultValue: 0.0),
      childAspectRatio: XSJSParse.getDouble(context, bo, map, "childAspectRatio", defaultValue: 1.0),
    );
  }
}

//****** SliverChildListDelegate ******
class XSProxySliverChildListDelegate extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverChildListDelegate";
    return {
      regClassName: () => XSProxySliverChildListDelegate()..init(className: regClassName)
    };
  }

  //TODO:暂时不支持 semanticIndexCallback
  @override
  SliverChildListDelegate constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverChildListDelegate(
      XSJSParse.getWidgetList(context, bo, map, "children"),
      addAutomaticKeepAlives: XSJSParse.getBool(context, bo, map, "addAutomaticKeepAlives", defaultValue: true),
      addRepaintBoundaries: XSJSParse.getBool(context, bo, map, "addRepaintBoundaries", defaultValue: true),
      addSemanticIndexes: XSJSParse.getBool(context, bo, map, "addSemanticIndexes", defaultValue: true),
      semanticIndexOffset: XSJSParse.getInt(context, bo, map, "semanticIndexOffset", defaultValue: 0),
    );
  }
}

//****** SliverChildBuilderDelegate ******
class XSProxySliverChildBuilderDelegate extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverChildBuilderDelegate";
    return {
      regClassName: () => XSProxySliverChildBuilderDelegate()..init(className: regClassName)
    };
  }

  //TODO:暂时不支持 semanticIndexCallback
  @override
  SliverChildBuilderDelegate constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverChildBuilderDelegate(
      (BuildContext context, int index) {
        return XSJSParse.getWidgetList(context, bo, map, "children")[index];
      },
      childCount: XSJSParse.getInt(context, bo, map, "childCount"),
      addAutomaticKeepAlives: XSJSParse.getBool(context, bo, map, "addAutomaticKeepAlives", defaultValue: true),
      addRepaintBoundaries: XSJSParse.getBool(context, bo, map, "addRepaintBoundaries", defaultValue: true),
      addSemanticIndexes: XSJSParse.getBool(context, bo, map, "addSemanticIndexes", defaultValue: true),
      semanticIndexOffset: XSJSParse.getInt(context, bo, map, "semanticIndexOffset", defaultValue: 0),
    );
  }
}

//****** SliverList ******
class XSProxySliverList extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverList";
    return {
      regClassName: () => XSProxySliverList()..init(className: regClassName)
    };
  }

  @override
  SliverList constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverList(
      key: XSJSParse.getKey(context, bo, map, "key"),
      delegate: XSJSParse.getObject(context, bo, map, "delegate"),
    );
  }
}

//****** SliverOverlapInjector ******
class XSProxySliverOverlapInjector extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverOverlapInjector";
    return {
      regClassName: () => XSProxySliverOverlapInjector()..init(className: regClassName)
    };
  }

  @override
  SliverOverlapInjector constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverOverlapInjector(
      key: XSJSParse.getKey(context, bo, map, "key"),
      handle: XSJSParse.getObject(context, bo, map, "handle"),
      sliver: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** SliverFixedExtentList ******
class XSProxySliverFixedExtentList extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverFixedExtentList";
    return {
      regClassName: () => XSProxySliverFixedExtentList()..init(className: regClassName)
    };
  }

  @override
  SliverFixedExtentList constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverFixedExtentList(
      key: XSJSParse.getKey(context, bo, map, "key"),
      delegate: XSJSParse.getObject(context, bo, map, "delegate"),
      itemExtent: XSJSParse.getDouble(context, bo, map, "itemExtent"),
    );
  }
}

//****** SliverOverlapAbsorber ******
class XSProxySliverOverlapAbsorber extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverOverlapAbsorber";
    return {
      regClassName: () => XSProxySliverOverlapAbsorber()..init(className: regClassName)
    };
  }

  @override
  SliverOverlapAbsorber constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverOverlapAbsorber(
      key: XSJSParse.getKey(context, bo, map, "key"),
      handle: XSJSParse.getObject(context, bo, map, "handle"),
      sliver: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** SingleChildScrollView ******
class XSProxySingleChildScrollView extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SingleChildScrollView";
    return {
      regClassName: () => XSProxySingleChildScrollView()..init(className: regClassName)
    };
  }

  @override
  SingleChildScrollView constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SingleChildScrollView(
      key: XSJSParse.getKey(context, bo, map, "key"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.down),
    );
  }
}

//****** SliverToBoxAdapter ******
class XSProxySliverToBoxAdapter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "SliverToBoxAdapter";
    return {
      regClassName: () => XSProxySliverToBoxAdapter()..init(className: regClassName)
    };
  }

  @override
  SliverToBoxAdapter constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SliverToBoxAdapter(
      key: XSJSParse.getKey(context, bo, map, "key"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- T -----------------
//****** Transform ******
class XSProxyTransform extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Transform";
    return {
      regClassName: () => XSProxyTransform()..init(className: regClassName)
    };
  }

  @override
  Transform constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Transform(
      key: XSJSParse.getKey(context, bo, map, "key"),
      transform: XSJSParse.getMatrix4(context, bo, map, "transform"),
      origin: XSJSParse.getOffset(context, bo, map, "origin"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      transformHitTests: XSJSParse.getBool(context, bo, map, "transformHitTests", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Tooltip ******
class XSProxyTooltip extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Tooltip";
    return {
      regClassName: () => XSProxyTooltip()..init(className: regClassName)
    };
  }

  @override
  Tooltip constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Tooltip(
      key: XSJSParse.getKey(context, bo, map, "key"),
      message: XSJSParse.getString(context, bo, map, "message"),
      height: XSJSParse.getDouble(context, bo, map, "height"),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      margin: XSJSParse.getEdgeInsets(context, bo, map, "margin"),
      verticalOffset: XSJSParse.getDouble(context, bo, map, "verticalOffset"),
      preferBelow: XSJSParse.getBool(context, bo, map, "preferBelow"),
      excludeFromSemantics: XSJSParse.getBool(context, bo, map, "excludeFromSemantics"),
      decoration: XSJSParse.getDecoration(context, bo, map, "decoration"),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle"),
      waitDuration: XSJSParse.getDuration(context, bo, map, "waitDuration"),
      showDuration: XSJSParse.getDuration(context, bo, map, "showDuration"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//****** Table ******
class XSProxyTable extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Table";
    return {
      regClassName: () => XSProxyTable()..init(className: regClassName)
    };
  }

  @override
  Table constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    // 单独处理columnWidths
    Map newColumnWidthsMap = <int, TableColumnWidth>{};
    Map columnWidthsMap = map["columnWidths"];
    if (columnWidthsMap != null) {
      columnWidthsMap.forEach((key, value) {
        var intKey = int.parse(key);
        newColumnWidthsMap[intKey] = XSJSParse.getTableColumnWidth(context, bo, map, value);
      });
    }

    return Table(
      key: XSJSParse.getKey(context, bo, map, "key"),
      children: toListT<TableRow>(XSJSParse.getList(context, bo, map, "children")),
      columnWidths: newColumnWidthsMap,
      defaultColumnWidth: XSJSParse.getTableColumnWidth(context, bo, map, "defaultColumnWidth", defaultValue: const FlexColumnWidth(1.0)),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      border: XSJSParse.getTableBorder(context, bo, map, "border"),
      defaultVerticalAlignment: XSJSParse.getTableCellVerticalAlignment(context, bo, map, "defaultVerticalAlignment", defaultValue: TableCellVerticalAlignment.top),
      textBaseline: XSJSParse.getTextBaseline(context, bo, map, "textBaseline"),
    );
  }
}

//****** TableCell ******
class XSProxyTableCell extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TableCell";
    return {
      regClassName: () => XSProxyTableCell()..init(className: regClassName)
    };
  }

  @override
  TableCell constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TableCell(
      key: XSJSParse.getKey(context, bo, map, "key"),
      verticalAlignment: XSJSParse.getTableCellVerticalAlignment(context, bo, map, "verticalAlignment"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }
}

//-------------- W -----------------
//****** Wrap ******
class XSProxyWrap extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "Wrap";
    return {
      regClassName: () => XSProxyWrap()..init(className: regClassName)
    };
  }

  @override
  Wrap constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Wrap(
      key: XSJSParse.getKey(context, bo, map, "key"),
      direction: XSJSParse.getAxis(context, bo, map, "direction", defaultValue: Axis.horizontal),
      alignment: XSJSParse.getWrapAlignment(context, bo, map, "alignment", defaultValue: WrapAlignment.start),
      spacing: XSJSParse.getDouble(context, bo, map, "spacing", defaultValue: 0.0),
      runAlignment: XSJSParse.getWrapAlignment(context, bo, map, "runAlignment", defaultValue: WrapAlignment.start),
      runSpacing: XSJSParse.getDouble(context, bo, map, "runSpacing", defaultValue: 0.0),
      crossAxisAlignment: XSJSParse.getWrapCrossAlignment(context, bo, map, "crossAxisAlignment", defaultValue: WrapCrossAlignment.start),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      verticalDirection: XSJSParse.getVerticalDirection(context, bo, map, "verticalDirection", defaultValue: VerticalDirection.down),
      children: XSJSParse.getWidgetList(context, bo, map, "children"),
    );
  }
}
