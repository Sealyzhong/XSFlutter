//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'xs_build_owner.dart';

import 'xs_js_parse.dart';
import 'xs_json_to_dart.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'dart:math';

class XSEasyRefreshParse {}

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperEasyRefreshSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyEasyRefreshClassicalHeader.registerProxy());
    m.addAll(XSProxyEasyRefreshClassicalFooter.registerProxy());

    m.addAll(XSProxyEasyRefreshMaterialHeader.registerProxy());
    m.addAll(XSProxyEasyRefreshMaterialFooter.registerProxy());

    m.addAll(XSProxyEasyRefresher.registerProxy());
    m.addAll(XSProxyEasyRefreshController.registerProxy());

    return m;
  }
}

//****** ClassicalHeader ******
class XSProxyEasyRefreshClassicalHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshClassicalHeader";
    return {
      regClassName: () => XSProxyEasyRefreshClassicalHeader()..init(className: regClassName)
    };
  }

  @override
  ClassicalHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClassicalHeader(
      extent: XSJSParse.getDouble(context, bo, map, "extent", defaultValue: 60.0),
      triggerDistance: XSJSParse.getDouble(context, bo, map, "triggerDistance", defaultValue: 70.0),
      float: XSJSParse.getBool(context, bo, map, "float", defaultValue: false),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
      enableInfiniteRefresh: XSJSParse.getBool(context, bo, map, "enableInfiniteRefresh", defaultValue: false),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: true),
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      refreshText: XSJSParse.getString(context, bo, map, "refreshText", defaultValue: "下拉刷新"),
      refreshReadyText: XSJSParse.getString(context, bo, map, "refreshReadyText", defaultValue: "释放刷新"),
      refreshingText: XSJSParse.getString(context, bo, map, "refreshingText", defaultValue: "正在刷新..."),
      refreshedText: XSJSParse.getString(context, bo, map, "refreshedText", defaultValue: "刷新完成"),
      refreshFailedText: XSJSParse.getString(context, bo, map, "refreshFailedText", defaultValue: "刷新失败"),
      noMoreText: XSJSParse.getString(context, bo, map, "noMoreText", defaultValue: "没有更多数据"),
      showInfo: XSJSParse.getBool(context, bo, map, "showInfo", defaultValue: true),
      infoText: XSJSParse.getString(context, bo, map, "infoText", defaultValue: "更新于 %T"),
      bgColor: XSJSParse.getColor(context, bo, map, "bgColor", defaultValue: Colors.transparent),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: Colors.black),
      infoColor: XSJSParse.getColor(context, bo, map, "infoColor", defaultValue: Colors.teal),
    );
  }
}

//****** ClassicalFooter ******
class XSProxyEasyRefreshClassicalFooter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshClassicalFooter";
    return {
      regClassName: () => XSProxyEasyRefreshClassicalFooter()..init(className: regClassName)
    };
  }

  @override
  Footer constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    bool isEnable = XSJSParse.getBool(context, bo, map, "isNoMoreText", defaultValue: false);
    if (isEnable) {
      return ClassicalFooterEx(
        extent: XSJSParse.getDouble(context, bo, map, "extent", defaultValue: 60.0),
        triggerDistance: XSJSParse.getDouble(context, bo, map, "triggerDistance", defaultValue: 70.0),
        float: XSJSParse.getBool(context, bo, map, "float", defaultValue: false),
        completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
        enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
        enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: true),
        overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
        safeArea: XSJSParse.getBool(context, bo, map, "safeArea", defaultValue: true),
        padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
        key: XSJSParse.getKey(context, bo, map, "key"),
        alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
        loadText: XSJSParse.getString(context, bo, map, "loadText", defaultValue: "拉动加载"),
        loadReadyText: XSJSParse.getString(context, bo, map, "loadReadyText", defaultValue: "释放加载"),
        loadingText: XSJSParse.getString(context, bo, map, "loadingText", defaultValue: "正在加载..."),
        loadedText: XSJSParse.getString(context, bo, map, "loadedText", defaultValue: "加载完成"),
        loadFailedText: XSJSParse.getString(context, bo, map, "loadFailedText", defaultValue: "加载失败"),
        noMoreText: XSJSParse.getString(context, bo, map, "noMoreText", defaultValue: "~~~~ 亲，我们也是有底线的 ~~~~"),
        showInfo: XSJSParse.getBool(context, bo, map, "showInfo", defaultValue: true),
        infoText: XSJSParse.getString(context, bo, map, "infoText", defaultValue: "更新于 %T"),
        bgColor: XSJSParse.getColor(context, bo, map, "bgColor", defaultValue: Colors.transparent),
        textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: Colors.black),
        infoColor: XSJSParse.getColor(context, bo, map, "infoColor", defaultValue: Colors.teal),
      );
    }
    return ClassicalFooter(
      extent: XSJSParse.getDouble(context, bo, map, "extent", defaultValue: 60.0),
      triggerDistance: XSJSParse.getDouble(context, bo, map, "triggerDistance", defaultValue: 70.0),
      float: XSJSParse.getBool(context, bo, map, "float", defaultValue: false),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
      enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
      safeArea: XSJSParse.getBool(context, bo, map, "safeArea", defaultValue: true),
      padding: XSJSParse.getEdgeInsets(context, bo, map, "padding"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      alignment: XSJSParse.getAlignment(context, bo, map, "alignment"),
      loadText: XSJSParse.getString(context, bo, map, "loadText", defaultValue: "拉动加载"),
      loadReadyText: XSJSParse.getString(context, bo, map, "loadReadyText", defaultValue: "释放加载"),
      loadingText: XSJSParse.getString(context, bo, map, "loadingText", defaultValue: "正在加载..."),
      loadedText: XSJSParse.getString(context, bo, map, "loadedText", defaultValue: "加载完成"),
      loadFailedText: XSJSParse.getString(context, bo, map, "loadFailedText", defaultValue: "加载失败"),
      noMoreText: XSJSParse.getString(context, bo, map, "noMoreText", defaultValue: "没有更多数据"),
      showInfo: XSJSParse.getBool(context, bo, map, "showInfo", defaultValue: true),
      infoText: XSJSParse.getString(context, bo, map, "infoText", defaultValue: "更新于 %T"),
      bgColor: XSJSParse.getColor(context, bo, map, "bgColor", defaultValue: Colors.transparent),
      textColor: XSJSParse.getColor(context, bo, map, "textColor", defaultValue: Colors.black),
      infoColor: XSJSParse.getColor(context, bo, map, "infoColor", defaultValue: Colors.teal),
    );
  }
}

//****** MaterialHeader ******
class XSProxyEasyRefreshMaterialHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshMaterialHeader";
    return {
      regClassName: () => XSProxyEasyRefreshMaterialHeader()..init(className: regClassName)
    };
  }

  @override
  MaterialHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      displacement: XSJSParse.getDouble(context, bo, map, "displacement", defaultValue: 40.0),
      //valueColor: XSJSParse.getObject(context, bo, map, "valueColor"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: false),
    );
  }
}

//****** MaterialFooter ******
class XSProxyEasyRefreshMaterialFooter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshMaterialFooter";
    return {
      regClassName: () => XSProxyEasyRefreshMaterialFooter()..init(className: regClassName)
    };
  }

  @override
  Footer constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    bool isEnable = XSJSParse.getBool(context, bo, map, "isNoMoreText", defaultValue: false);
    if (isEnable) {
      return MaterialFooterEx(
        key: XSJSParse.getKey(context, bo, map, "key"),
        displacement: XSJSParse.getDouble(context, bo, map, "displacement", defaultValue: 40.0),
        //valueColor: XSJSParse.getObject(context, bo, map, "valueColor"),
        backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
        completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
        enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: false),
        enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
        overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
        noMoreText: XSJSParse.getString(context, bo, map, "noMoreText", defaultValue: "~~~~ 亲，我们也是有底线的 ~~~~"),
      );
    }

    return MaterialFooter(
      key: XSJSParse.getKey(context, bo, map, "key"),
      displacement: XSJSParse.getDouble(context, bo, map, "displacement", defaultValue: 40.0),
      //valueColor: XSJSParse.getObject(context, bo, map, "valueColor"),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(microseconds: 100)),
      enableHapticFeedback: XSJSParse.getBool(context, bo, map, "enableHapticFeedback", defaultValue: false),
      enableInfiniteLoad: XSJSParse.getBool(context, bo, map, "enableInfiniteLoad", defaultValue: true),
      overScroll: XSJSParse.getBool(context, bo, map, "overScroll", defaultValue: false),
    );
  }
}

//****** EasyRefresher ******
class XSProxyEasyRefresher extends XSJsonObjProxy {
  static String regClassName = "EasyRefresher";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyEasyRefresher()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: regClassName, constructorName: "custom", constructor: constructorCustom);
  }

  @override
  EasyRefresh constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    var w = EasyRefresh(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      onRefresh: XSJSParse.getFatureVoidCallback(context, bo, map, "onRefresh"),
      onLoad: XSJSParse.getFatureVoidCallback(context, bo, map, "onLoad"),
      enableControlFinishRefresh: XSJSParse.getBool(context, bo, map, "enableControlFinishRefresh", defaultValue: false),
      enableControlFinishLoad: XSJSParse.getBool(context, bo, map, "enableControlFinishLoad", defaultValue: false),
      taskIndependence: XSJSParse.getBool(context, bo, map, "taskIndependence", defaultValue: false),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      header: XSJSParse.getObject(context, bo, map, "header"),
      footer: XSJSParse.getObject(context, bo, map, "footer"),
      firstRefresh: XSJSParse.getBool(context, bo, map, "firstRefresh"),
      firstRefreshWidget: XSJSParse.getWidget(context, bo, map, "firstRefreshWidget"),
      headerIndex: XSJSParse.getInt(context, bo, map, "headerIndex"),
      emptyWidget: XSJSParse.getWidget(context, bo, map, "emptyWidget"),
      topBouncing: XSJSParse.getBool(context, bo, map, "topBouncing", defaultValue: true),
      bottomBouncing: XSJSParse.getBool(context, bo, map, "bottomBouncing", defaultValue: true),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
    return w;
  }

  // EasyRefresh.custom
  EasyRefresh constructorCustom(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return EasyRefresh.custom(
      key: XSJSParse.getKey(context, bo, map, "key"),
      listKey: XSJSParse.getKey(context, bo, map, "listKey"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      onRefresh: XSJSParse.getFatureVoidCallback(context, bo, map, "onRefresh"),
      onLoad: XSJSParse.getFatureVoidCallback(context, bo, map, "onLoad"),
      enableControlFinishRefresh: XSJSParse.getBool(context, bo, map, "enableControlFinishRefresh", defaultValue: false),
      enableControlFinishLoad: XSJSParse.getBool(context, bo, map, "enableControlFinishLoad", defaultValue: false),
      taskIndependence: XSJSParse.getBool(context, bo, map, "taskIndependence", defaultValue: false),
      header: XSJSParse.getObject(context, bo, map, "header"),
      headerIndex: XSJSParse.getInt(context, bo, map, "headerIndex"),
      footer: XSJSParse.getObject(context, bo, map, "footer"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection", defaultValue: Axis.vertical),
      reverse: XSJSParse.getBool(context, bo, map, "reverse", defaultValue: false),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      shrinkWrap: XSJSParse.getBool(context, bo, map, "shrinkWrap", defaultValue: false),
      center: XSJSParse.getKey(context, bo, map, "center"),
      anchor: XSJSParse.getDouble(context, bo, map, "anchor", defaultValue: 0.0),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      firstRefresh: XSJSParse.getBool(context, bo, map, "firstRefresh"),
      firstRefreshWidget: XSJSParse.getWidget(context, bo, map, "firstRefreshWidget"),
      emptyWidget: XSJSParse.getWidget(context, bo, map, "emptyWidget"),
      topBouncing: XSJSParse.getBool(context, bo, map, "topBouncing", defaultValue: true),
      bottomBouncing: XSJSParse.getBool(context, bo, map, "bottomBouncing", defaultValue: true),
      slivers: XSJSParse.getWidgetList(context, bo, map, "slivers"),
    );
  }
}

//****** EasyRefreshController ******
class XSProxyEasyRefreshController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "EasyRefreshController";
    return {
      regClassName: () => XSProxyEasyRefreshController()..init(className: regClassName)
    };
  }

  @override
  EasyRefreshController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return EasyRefreshController();
  }

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is EasyRefreshController)) {
      return;
    }

    var sc = mirrorObj as EasyRefreshController;

    if (funcName == 'callRefresh') {
      sc.callRefresh(duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 300)));
      return;
    }

    if (funcName == 'callLoad') {
      sc.callLoad(duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 300)));
      return;
    }

    if (funcName == 'finishRefresh') {
      sc.finishRefresh(
        success: XSJSParse.getBool(null, null, args, "success"),
        noMore: XSJSParse.getBool(null, null, args, "noMore"),
      );
      return;
    }

    if (funcName == 'finishLoad') {
      sc.finishLoad(
        success: XSJSParse.getBool(null, null, args, "success"),
        noMore: XSJSParse.getBool(null, null, args, "noMore"),
      );
      return;
    }

    if (funcName == 'resetRefreshState') {
      sc.resetRefreshState();
      return;
    }

    if (funcName == 'resetLoadState') {
      sc.resetLoadState();
      return;
    }
    if (funcName == 'dispose') {
      sc.dispose();
      return;
    }
  }
}

/// 质感设计Footer
class MaterialFooterEx extends Footer {
  final Key key;
  final double displacement;

  /// 颜色
  final Animation<Color> valueColor;

  /// 背景颜色
  final Color backgroundColor;

  final String noMoreText;

  final LinkFooterNotifier linkNotifier = LinkFooterNotifier();

  MaterialFooterEx({
    this.key,
    this.displacement = 40.0,
    this.valueColor,
    this.backgroundColor,
    completeDuration = const Duration(seconds: 1),
    bool enableHapticFeedback = false,
    bool enableInfiniteLoad = true,
    bool overScroll = false,
    this.noMoreText = "~~~~ 亲，我们也是有底线的 ~~~~",
  }) : super(
          float: true,
          extent: 52.0,
          triggerDistance: 52.0,
          completeDuration: completeDuration == null
              ? Duration(
                  milliseconds: 300,
                )
              : completeDuration +
                  Duration(
                    milliseconds: 300,
                  ),
          enableHapticFeedback: enableHapticFeedback,
          enableInfiniteLoad: enableInfiniteLoad,
          overScroll: overScroll,
        );

  @override
  Widget contentBuilder(BuildContext context, LoadMode loadState, double pulledExtent, double loadTriggerPullDistance, double loadIndicatorExtent, AxisDirection axisDirection, bool float, Duration completeDuration, bool enableInfiniteLoad, bool success, bool noMore) {
    linkNotifier.contentBuilder(context, loadState, pulledExtent, loadTriggerPullDistance, loadIndicatorExtent, axisDirection, float, completeDuration, enableInfiniteLoad, success, noMore);
    return MaterialFooterExWidget(
      key: key,
      displacement: displacement,
      valueColor: valueColor,
      backgroundColor: backgroundColor,
      linkNotifier: linkNotifier,
      noMoreText: this.noMoreText,
    );
  }
}

/// 质感设计Footer组件
class MaterialFooterExWidget extends StatefulWidget {
  final double displacement;
  // 颜色
  final Animation<Color> valueColor;
  // 背景颜色
  final Color backgroundColor;
  final LinkFooterNotifier linkNotifier;
  final String noMoreText;

  const MaterialFooterExWidget({
    Key key,
    this.displacement,
    this.valueColor,
    this.backgroundColor,
    this.linkNotifier,
    this.noMoreText,
  }) : super(key: key);

  @override
  MaterialFooterExWidgetState createState() {
    return MaterialFooterExWidgetState();
  }
}

class MaterialFooterExWidgetState extends State<MaterialFooterExWidget> {
  LoadMode get _refreshState => widget.linkNotifier.loadState;
  double get _pulledExtent => widget.linkNotifier.pulledExtent;
  double get _riggerPullDistance => widget.linkNotifier.loadTriggerPullDistance;
  AxisDirection get _axisDirection => widget.linkNotifier.axisDirection;
  bool get _noMore => widget.linkNotifier.noMore;

  @override
  Widget build(BuildContext context) {
    if (_noMore)
      return Container(
          color: widget.backgroundColor,
          child: Center(
            child: Text(widget.noMoreText),
          ));
    // 是否为垂直方向
    bool isVertical = _axisDirection == AxisDirection.down || _axisDirection == AxisDirection.up;
    // 是否反向
    bool isReverse = _axisDirection == AxisDirection.up || _axisDirection == AxisDirection.left;
    // 计算进度值
    double indicatorValue = _pulledExtent / _riggerPullDistance;
    indicatorValue = indicatorValue < 1.0 ? indicatorValue : 1.0;
    return Stack(
      children: <Widget>[
        Positioned(
          top: isVertical
              ? !isReverse
                  ? 0.0
                  : null
              : 0.0,
          bottom: isVertical
              ? isReverse
                  ? 0.0
                  : null
              : 0.0,
          left: !isVertical
              ? !isReverse
                  ? 0.0
                  : null
              : 0.0,
          right: !isVertical
              ? isReverse
                  ? 0.0
                  : null
              : 0.0,
          child: Container(
            alignment: isVertical
                ? !isReverse
                    ? Alignment.topCenter
                    : Alignment.bottomCenter
                : !isReverse
                    ? Alignment.centerLeft
                    : Alignment.centerRight,
            child: RefreshProgressIndicator(
              value: _refreshState == LoadMode.armed || _refreshState == LoadMode.load || _refreshState == LoadMode.loaded || _refreshState == LoadMode.done ? null : indicatorValue,
              valueColor: widget.valueColor,
              backgroundColor: widget.backgroundColor,
            ),
          ),
        ),
      ],
    );
  }
}

/// 经典Footer
class ClassicalFooterEx extends Footer {
  /// Key
  final Key key;

  /// 方位
  final AlignmentGeometry alignment;

  /// 提示加载文字
  final String loadText;

  /// 准备加载文字
  final String loadReadyText;

  /// 正在加载文字
  final String loadingText;

  /// 加载完成文字
  final String loadedText;

  /// 加载失败文字
  final String loadFailedText;

  /// 没有更多文字
  final String noMoreText;

  /// 显示额外信息(默认为时间)
  final bool showInfo;

  /// 更多信息
  final String infoText;

  /// 背景颜色
  final Color bgColor;

  /// 字体颜色
  final Color textColor;

  /// 更多信息文字颜色
  final Color infoColor;

  ClassicalFooterEx({
    double extent = 60.0,
    double triggerDistance = 70.0,
    bool float = false,
    Duration completeDuration = const Duration(seconds: 1),
    bool enableInfiniteLoad = true,
    bool enableHapticFeedback = true,
    bool overScroll = false,
    bool safeArea = true,
    EdgeInsets padding,
    this.key,
    this.alignment,
    this.loadText,
    this.loadReadyText,
    this.loadingText,
    this.loadedText,
    this.loadFailedText,
    this.noMoreText,
    this.showInfo: true,
    this.infoText,
    this.bgColor: Colors.transparent,
    this.textColor: Colors.black,
    this.infoColor: Colors.teal,
  }) : super(
          extent: extent,
          triggerDistance: triggerDistance,
          float: float,
          completeDuration: completeDuration,
          enableInfiniteLoad: enableInfiniteLoad,
          enableHapticFeedback: enableHapticFeedback,
          overScroll: overScroll,
          safeArea: safeArea,
          padding: padding,
        );

  @override
  Widget contentBuilder(BuildContext context, LoadMode loadState, double pulledExtent, double loadTriggerPullDistance, double loadIndicatorExtent, AxisDirection axisDirection, bool float, Duration completeDuration, bool enableInfiniteLoad, bool success, bool noMore) {
    return ClassicalFooterExWidget(
      key: key,
      classicalFooter: this,
      loadState: loadState,
      pulledExtent: pulledExtent,
      loadTriggerPullDistance: loadTriggerPullDistance,
      loadIndicatorExtent: loadIndicatorExtent,
      axisDirection: axisDirection,
      float: float,
      completeDuration: completeDuration,
      enableInfiniteLoad: enableInfiniteLoad,
      success: success,
      noMore: noMore,
    );
  }
}

/// 经典Footer组件
class ClassicalFooterExWidget extends StatefulWidget {
  final ClassicalFooterEx classicalFooter;
  final LoadMode loadState;
  final double pulledExtent;
  final double loadTriggerPullDistance;
  final double loadIndicatorExtent;
  final AxisDirection axisDirection;
  final bool float;
  final Duration completeDuration;
  final bool enableInfiniteLoad;
  final bool success;
  final bool noMore;

  ClassicalFooterExWidget({Key key, this.loadState, this.classicalFooter, this.pulledExtent, this.loadTriggerPullDistance, this.loadIndicatorExtent, this.axisDirection, this.float, this.completeDuration, this.enableInfiniteLoad, this.success, this.noMore}) : super(key: key);

  @override
  ClassicalFooterExWidgetState createState() => ClassicalFooterExWidgetState();
}

class ClassicalFooterExWidgetState extends State<ClassicalFooterExWidget> with TickerProviderStateMixin<ClassicalFooterExWidget> {
  // 是否到达触发加载距离
  bool _overTriggerDistance = false;

  bool get overTriggerDistance => _overTriggerDistance;

  set overTriggerDistance(bool over) {
    if (_overTriggerDistance != over) {
      _overTriggerDistance ? _readyController.forward() : _restoreController.forward();
    }
    _overTriggerDistance = over;
  }

  /// 文本
  String get _loadText {
    return widget.classicalFooter.loadText ?? 'Push to load';
  }

  String get _loadReadyText {
    return widget.classicalFooter.loadReadyText ?? 'Release to load';
  }

  String get _loadingText {
    return widget.classicalFooter.loadingText ?? 'Loading...';
  }

  String get _loadedText {
    return widget.classicalFooter.loadedText ?? 'Load completed';
  }

  String get _loadFailedText {
    return widget.classicalFooter.loadFailedText ?? 'Load failed';
  }

  /// 没有更多文字
  String get _noMoreText {
    return widget.classicalFooter.noMoreText ?? 'No more';
  }

  String get _infoText {
    return widget.classicalFooter.infoText ?? 'Update at %T';
  }

  // 动画
  AnimationController _readyController;
  Animation<double> _readyAnimation;
  AnimationController _restoreController;
  Animation<double> _restoreAnimation;

  // Icon旋转度
  double _iconRotationValue = 1.0;

  // 显示文字
  String get _showText {
    if (widget.noMore) return _noMoreText;
    if (widget.enableInfiniteLoad) {
      if (widget.loadState == LoadMode.loaded || widget.loadState == LoadMode.inactive || widget.loadState == LoadMode.drag) {
        return _finishedText;
      } else {
        return _loadingText;
      }
    }
    switch (widget.loadState) {
      case LoadMode.load:
        return _loadingText;
      case LoadMode.armed:
        return _loadingText;
      case LoadMode.loaded:
        return _finishedText;
      case LoadMode.done:
        return _finishedText;
      default:
        if (overTriggerDistance) {
          return _loadReadyText;
        } else {
          return _loadText;
        }
    }
  }

  // 加载结束文字
  String get _finishedText {
    if (!widget.success) return _loadFailedText;
    if (widget.noMore) return _noMoreText;
    return _loadedText;
  }

  // 加载结束图标
  IconData get _finishedIcon {
    if (!widget.success) return Icons.error_outline;
    if (widget.noMore) return Icons.hourglass_empty;
    return Icons.done;
  }

  // 更新时间
  DateTime _dateTime;

  // 获取更多信息
  String get _infoTextStr {
    if (widget.loadState == LoadMode.loaded) {
      _dateTime = DateTime.now();
    }
    String fillChar = _dateTime.minute < 10 ? "0" : "";
    return _infoText.replaceAll("%T", "${_dateTime.hour}:$fillChar${_dateTime.minute}");
  }

  @override
  void initState() {
    super.initState();
    // 初始化时间
    _dateTime = DateTime.now();
    // 初始化动画
    _readyController = new AnimationController(duration: const Duration(milliseconds: 200), vsync: this);
    _readyAnimation = new Tween(begin: 0.5, end: 1.0).animate(_readyController)
      ..addListener(() {
        setState(() {
          if (_readyAnimation.status != AnimationStatus.dismissed) {
            _iconRotationValue = _readyAnimation.value;
          }
        });
      });
    _readyAnimation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _readyController.reset();
      }
    });
    _restoreController = new AnimationController(duration: const Duration(milliseconds: 200), vsync: this);
    _restoreAnimation = new Tween(begin: 1.0, end: 0.5).animate(_restoreController)
      ..addListener(() {
        setState(() {
          if (_restoreAnimation.status != AnimationStatus.dismissed) {
            _iconRotationValue = _restoreAnimation.value;
          }
        });
      });
    _restoreAnimation.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _restoreController.reset();
      }
    });
  }

  @override
  void dispose() {
    _readyController.dispose();
    _restoreController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.noMore)
      return Container(
          child: Center(
        child: Text(_noMoreText),
      ));

    // 是否为垂直方向
    bool isVertical = widget.axisDirection == AxisDirection.down || widget.axisDirection == AxisDirection.up;
    // 是否反向
    bool isReverse = widget.axisDirection == AxisDirection.up || widget.axisDirection == AxisDirection.left;
    // 是否到达触发加载距离
    overTriggerDistance = widget.loadState != LoadMode.inactive && widget.pulledExtent >= widget.loadTriggerPullDistance;
    return Stack(
      children: <Widget>[
        Positioned(
          top: !isVertical
              ? 0.0
              : !isReverse
                  ? 0.0
                  : null,
          bottom: !isVertical
              ? 0.0
              : isReverse
                  ? 0.0
                  : null,
          left: isVertical
              ? 0.0
              : !isReverse
                  ? 0.0
                  : null,
          right: isVertical
              ? 0.0
              : isReverse
                  ? 0.0
                  : null,
          child: Container(
            alignment: widget.classicalFooter.alignment ?? isVertical
                ? !isReverse
                    ? Alignment.topCenter
                    : Alignment.bottomCenter
                : isReverse
                    ? Alignment.centerRight
                    : Alignment.centerLeft,
            width: !isVertical
                ? widget.loadIndicatorExtent > widget.pulledExtent
                    ? widget.loadIndicatorExtent
                    : widget.pulledExtent
                : double.infinity,
            height: isVertical
                ? widget.loadIndicatorExtent > widget.pulledExtent
                    ? widget.loadIndicatorExtent
                    : widget.pulledExtent
                : double.infinity,
            color: widget.classicalFooter.bgColor,
            child: SizedBox(
              height: isVertical ? widget.loadIndicatorExtent : double.infinity,
              width: !isVertical ? widget.loadIndicatorExtent : double.infinity,
              child: isVertical
                  ? Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: _buildContent(isVertical, isReverse),
                    )
                  : Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: _buildContent(isVertical, isReverse),
                    ),
            ),
          ),
        ),
      ],
    );
  }

  // 构建显示内容
  List<Widget> _buildContent(bool isVertical, bool isReverse) {
    return isVertical
        ? <Widget>[
            Expanded(
              flex: 2,
              child: Container(
                alignment: Alignment.centerRight,
                padding: EdgeInsets.only(
                  right: 10.0,
                ),
                child: (widget.loadState == LoadMode.load || widget.loadState == LoadMode.armed) && !widget.noMore
                    ? Container(
                        width: 20.0,
                        height: 20.0,
                        child: CircularProgressIndicator(
                          strokeWidth: 2.0,
                          valueColor: AlwaysStoppedAnimation(
                            widget.classicalFooter.textColor,
                          ),
                        ),
                      )
                    : widget.loadState == LoadMode.loaded || widget.loadState == LoadMode.done || (widget.enableInfiniteLoad && widget.loadState != LoadMode.loaded) || widget.noMore
                        ? Icon(
                            _finishedIcon,
                            color: widget.classicalFooter.textColor,
                          )
                        : Transform.rotate(
                            child: Icon(
                              !isReverse ? Icons.arrow_upward : Icons.arrow_downward,
                              color: widget.classicalFooter.textColor,
                            ),
                            angle: 2 * pi * _iconRotationValue,
                          ),
              ),
            ),
            Expanded(
              flex: 3,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    _showText,
                    style: TextStyle(
                      fontSize: 16.0,
                      color: widget.classicalFooter.textColor,
                    ),
                  ),
                  widget.classicalFooter.showInfo
                      ? Container(
                          margin: EdgeInsets.only(
                            top: 2.0,
                          ),
                          child: Text(
                            _infoTextStr,
                            style: TextStyle(
                              fontSize: 12.0,
                              color: widget.classicalFooter.infoColor,
                            ),
                          ),
                        )
                      : Container(),
                ],
              ),
            ),
            Expanded(
              flex: 2,
              child: SizedBox(),
            ),
          ]
        : <Widget>[
            Container(
              child: widget.loadState == LoadMode.load || widget.loadState == LoadMode.armed
                  ? Container(
                      width: 20.0,
                      height: 20.0,
                      child: CircularProgressIndicator(
                        strokeWidth: 2.0,
                        valueColor: AlwaysStoppedAnimation(
                          widget.classicalFooter.textColor,
                        ),
                      ),
                    )
                  : widget.loadState == LoadMode.loaded || widget.loadState == LoadMode.done || (widget.enableInfiniteLoad && widget.loadState != LoadMode.loaded) || widget.noMore
                      ? Icon(
                          _finishedIcon,
                          color: widget.classicalFooter.textColor,
                        )
                      : Transform.rotate(
                          child: Icon(
                            !isReverse ? Icons.arrow_back : Icons.arrow_forward,
                            color: widget.classicalFooter.textColor,
                          ),
                          angle: 2 * pi * _iconRotationValue,
                        ),
            ),
          ];
  }
}
