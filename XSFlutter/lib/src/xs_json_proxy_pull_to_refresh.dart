//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter/physics.dart';
import 'xs_js_parse.dart';
import 'xs_build_owner.dart';

import 'xs_json_to_dart.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

class XSPullToRefreshParse {
  //****** RefreshStyle ******/
  static RefreshStyle getRefreshStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RefreshStyle defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'Behind':
          return RefreshStyle.Behind;
        case 'UnFollow':
          return RefreshStyle.UnFollow;
        case 'Follow':
          return RefreshStyle.Follow;
        case 'Front':
          return RefreshStyle.Front;
      }
    }
    return defaultValue;
  }

  //****** RefreshStatus ******/
  static RefreshStatus getRefreshStatus(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {RefreshStatus defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'idle':
          return RefreshStatus.idle;
        case 'canRefresh':
          return RefreshStatus.canRefresh;
        case 'refreshing':
          return RefreshStatus.refreshing;
        case 'completed':
          return RefreshStatus.completed;
        case 'failed':
          return RefreshStatus.failed;
        case 'canTwoLevel':
          return RefreshStatus.canTwoLevel;
        case 'twoLevelOpening':
          return RefreshStatus.twoLevelOpening;
        case 'twoLeveling':
          return RefreshStatus.twoLeveling;
        case 'twoLevelClosing':
          return RefreshStatus.twoLevelClosing;
      }
    }
    return defaultValue;
  }

//****** LoadStatus ******/
  static LoadStatus getLoadStatus(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {LoadStatus defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'idle':
          return LoadStatus.idle;
        case 'canLoading':
          return LoadStatus.canLoading;
        case 'loading':
          return LoadStatus.loading;
        case 'noMore':
          return LoadStatus.noMore;
        case 'failed':
          return LoadStatus.failed;
      }
    }
    return defaultValue;
  }

  //****** IconPosition ******/
  static IconPosition getIconPosition(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {IconPosition defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'left':
          return IconPosition.left;
        case 'right':
          return IconPosition.right;
        case 'top':
          return IconPosition.top;
        case 'bottom':
          return IconPosition.bottom;
      }
    }
    return defaultValue;
  }

  //****** LoadStyle ******/
  static LoadStyle getLoadStyle(BuildContext context, XSJsonBuildOwner bo, Map map, String key, {LoadStyle defaultValue}) {
    var v = XSJSParse.getString(context, bo, map, key);
    if (v != null && v.isNotEmpty) {
      switch (v) {
        case 'ShowAlways':
          return LoadStyle.ShowAlways;
        case 'HideAlways':
          return LoadStyle.HideAlways;
        case 'ShowWhenLoading':
          return LoadStyle.ShowWhenLoading;
      }
    }
    return defaultValue;
  }

  static ShouldFollowContent createShouldFollowContentHandle(XSJsonBuildOwner bo, String eventCallbackID) {
    if (eventCallbackID == null) {
      return null;
    }

    ShouldFollowContent cb = (LoadStatus status) {
      return bo.eventCallback(eventCallbackID, p: status);
    };

    return cb;
  }

  static OnOffsetChange createOffsetChangeDynamicHandle(XSJsonBuildOwner bo, String eventCallbackID) {
    if (eventCallbackID == null) {
      return null;
    }

    OnOffsetChange cb = (bool up, double offset) {
      //TODO: 此处有问题，只传了一个参数
      bo.eventCallback(eventCallbackID, p: up);
    };

    return cb;
  }
}

///把Widget初始化用到的基础类型如 List, ，
class XSProxyRegisterHelperPullToRefreshSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};

    m.addAll(XSProxyPullToRefreshClassicHeader.registerProxy());
    m.addAll(XSProxyPullToRefreshClassicFooter.registerProxy());
    m.addAll(XSProxyPullToRefreshMaterialClassicHeader.registerProxy());
    m.addAll(XSProxyPullToRefreshWaterDropMaterialHeader.registerProxy());
    m.addAll(XSProxyPullToRefreshWaterDropHeader.registerProxy());
    m.addAll(XSProxyPullToRefreshConfiguration.registerProxy());
    m.addAll(XSProxyPullToRefreshSmartRefresher.registerProxy());

    return m;
  }
}

//****** ClassicHeader ******
class XSProxyPullToRefreshClassicHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshClassicHeader";
    return {
      regClassName: () => XSProxyPullToRefreshClassicHeader()..init(className: regClassName)
    };
  }

  @override
  ClassicHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClassicHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      refreshStyle: XSPullToRefreshParse.getRefreshStyle(context, bo, map, "refreshStyle", defaultValue: RefreshStyle.Follow),
      height: XSJSParse.getDouble(context, bo, map, "height", defaultValue: 60.0),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(milliseconds: 600)),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle", defaultValue: const TextStyle(color: Colors.grey)),
      releaseText: XSJSParse.getString(context, bo, map, "releaseText"),
      refreshingText: XSJSParse.getString(context, bo, map, "refreshingText"),
      canTwoLevelIcon: XSJSParse.getWidget(context, bo, map, "canTwoLevelIcon"),
      twoLevelView: XSJSParse.getWidget(context, bo, map, "twoLevelView"),
      canTwoLevelText: XSJSParse.getString(context, bo, map, "canTwoLevelText"),
      completeText: XSJSParse.getString(context, bo, map, "completeText"),
      failedText: XSJSParse.getString(context, bo, map, "failedText"),
      idleText: XSJSParse.getString(context, bo, map, "idleText"),
      iconPos: XSPullToRefreshParse.getIconPosition(context, bo, map, "iconPos", defaultValue: IconPosition.left),
      spacing: XSJSParse.getDouble(context, bo, map, "spacing", defaultValue: 15.0),
      refreshingIcon: XSJSParse.getWidget(context, bo, map, "refreshingIcon"),
      failedIcon: XSJSParse.getWidget(context, bo, map, "failedIcon", defaultValue: const Icon(Icons.error, color: Colors.grey)),
      completeIcon: XSJSParse.getWidget(context, bo, map, "completeIcon", defaultValue: const Icon(Icons.done, color: Colors.grey)),
      idleIcon: XSJSParse.getWidget(context, bo, map, "idleIcon", defaultValue: const Icon(Icons.arrow_downward, color: Colors.grey)),
      releaseIcon: XSJSParse.getWidget(context, bo, map, "releaseIcon", defaultValue: const Icon(Icons.refresh, color: Colors.grey)),
    );
  }
}

//****** WaterDropHeader ******
class XSProxyPullToRefreshWaterDropHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshWaterDropHeader";
    return {
      regClassName: () => XSProxyPullToRefreshWaterDropHeader()..init(className: regClassName)
    };
  }

  @override
  WaterDropHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return WaterDropHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      refresh: XSJSParse.getWidget(context, bo, map, "refresh"),
      complete: XSJSParse.getWidget(context, bo, map, "complete"),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(milliseconds: 600)),
      failed: XSJSParse.getWidget(context, bo, map, "failed"),
      waterDropColor: XSJSParse.getColor(context, bo, map, "waterDropColor", defaultValue: Colors.grey),
      idleIcon: XSJSParse.getWidget(context, bo, map, "idleIcon", defaultValue: const Icon(Icons.autorenew, size: 15, color: Colors.white)),
    );
  }
}

//****** MaterialClassicHeader ******
class XSProxyPullToRefreshMaterialClassicHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshMaterialClassicHeader";
    return {
      regClassName: () => XSProxyPullToRefreshMaterialClassicHeader()..init(className: regClassName)
    };
  }

  @override
  MaterialClassicHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return MaterialClassicHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      height: XSJSParse.getDouble(context, bo, map, "height", defaultValue: 80.0),
      semanticsLabel: XSJSParse.getString(context, bo, map, "semanticsLabel"),
      semanticsValue: XSJSParse.getString(context, bo, map, "semanticsValue"),
      color: XSJSParse.getColor(context, bo, map, "color"),
      offset: XSJSParse.getDouble(context, bo, map, "offset", defaultValue: 0.0),
      distance: XSJSParse.getDouble(context, bo, map, "distance", defaultValue: 50.0),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
    );
  }
}

//****** WaterDropMaterialHeader ******
class XSProxyPullToRefreshWaterDropMaterialHeader extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshWaterDropMaterialHeader";
    return {
      regClassName: () => XSProxyPullToRefreshWaterDropMaterialHeader()..init(className: regClassName)
    };
  }

  @override
  WaterDropMaterialHeader constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return WaterDropMaterialHeader(
      key: XSJSParse.getKey(context, bo, map, "key"),
      semanticsLabel: XSJSParse.getString(context, bo, map, "semanticsLabel"),
      semanticsValue: XSJSParse.getString(context, bo, map, "semanticsValue"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: Colors.white),
      offset: XSJSParse.getDouble(context, bo, map, "offset", defaultValue: 0.0),
      distance: XSJSParse.getDouble(context, bo, map, "distance", defaultValue: 50.0),
      backgroundColor: XSJSParse.getColor(context, bo, map, "backgroundColor"),
    );
  }
}

//****** ClassicFooter ******
class XSProxyPullToRefreshClassicFooter extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshClassicFooter";
    return {
      regClassName: () => XSProxyPullToRefreshClassicFooter()..init(className: regClassName)
    };
  }

  @override
  ClassicFooter constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return ClassicFooter(
      key: XSJSParse.getKey(context, bo, map, "key"),
      onClick: XSJSParse.getVoidCallback(context, bo, map, "onClick"),
      loadStyle: XSPullToRefreshParse.getLoadStyle(context, bo, map, "loadStyle", defaultValue: LoadStyle.ShowAlways),
      height: XSJSParse.getDouble(context, bo, map, "height", defaultValue: 60.0),
      textStyle: XSJSParse.getTextStyle(context, bo, map, "textStyle", defaultValue: const TextStyle(color: Colors.grey)),
      loadingText: XSJSParse.getString(context, bo, map, "loadingText"),
      noDataText: XSJSParse.getString(context, bo, map, "noDataText"),
      noMoreIcon: XSJSParse.getWidget(context, bo, map, "noMoreIcon"),
      idleText: XSJSParse.getString(context, bo, map, "idleText"),
      failedText: XSJSParse.getString(context, bo, map, "failedText"),
      canLoadingText: XSJSParse.getString(context, bo, map, "canLoadingText"),
      failedIcon: XSJSParse.getWidget(context, bo, map, "failedIcon", defaultValue: const Icon(Icons.error, color: Colors.grey)),
      iconPos: XSPullToRefreshParse.getIconPosition(context, bo, map, "iconPos", defaultValue: IconPosition.left),
      spacing: XSJSParse.getDouble(context, bo, map, "spacing", defaultValue: 15.0),
      completeDuration: XSJSParse.getDuration(context, bo, map, "completeDuration", defaultValue: const Duration(milliseconds: 600)),
      loadingIcon: XSJSParse.getWidget(context, bo, map, "loadingIcon"),
      canLoadingIcon: XSJSParse.getWidget(context, bo, map, "canLoadingIcon", defaultValue: const Icon(Icons.autorenew, color: Colors.grey)),
      idleIcon: XSJSParse.getWidget(context, bo, map, "idleIcon", defaultValue: const Icon(Icons.arrow_upward, color: Colors.grey)),
    );
  }
}

//****** RefreshConfiguration ******
class XSProxyPullToRefreshConfiguration extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshConfiguration";
    return {
      regClassName: () => XSProxyPullToRefreshClassicFooter()..init(className: regClassName)
    };
  }

  @override
  RefreshConfiguration constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return RefreshConfiguration(
      child: XSJSParse.getWidget(context, bo, map, "child"),
      headerBuilder: () => XSJSParse.getWidget(context, bo, map, "headerBuilder"),
      footerBuilder: () => XSJSParse.getWidget(context, bo, map, "footerBuilder"),
      dragSpeedRatio: XSJSParse.getDouble(context, bo, map, "dragSpeedRatio", defaultValue: 1.0),
      shouldFooterFollowWhenNotFull: XSPullToRefreshParse.createShouldFollowContentHandle(bo, XSJSParse.getString(context, bo, map, "shouldFooterFollowWhenNotFull")),
      enableScrollWhenTwoLevel: XSJSParse.getBool(context, bo, map, "enableScrollWhenTwoLevel", defaultValue: true),
      enableLoadingWhenNoData: XSJSParse.getBool(context, bo, map, "enableLoadingWhenNoData", defaultValue: false),
      enableBallisticRefresh: XSJSParse.getBool(context, bo, map, "enableBallisticRefresh", defaultValue: false),
      springDescription: XSJSParse.getSpringDescription(context, bo, map, "springDescription", defaultValue: const SpringDescription(mass: 2.2, stiffness: 150, damping: 16)),
      enableScrollWhenRefreshCompleted: XSJSParse.getBool(context, bo, map, "enableScrollWhenRefreshCompleted", defaultValue: false),
      enableLoadingWhenFailed: XSJSParse.getBool(context, bo, map, "enableLoadingWhenFailed", defaultValue: true),
      twiceTriggerDistance: XSJSParse.getDouble(context, bo, map, "twiceTriggerDistance", defaultValue: 150.0),
      closeTwoLevelDistance: XSJSParse.getDouble(context, bo, map, "closeTwoLevelDistance", defaultValue: 80.0),
      skipCanRefresh: XSJSParse.getBool(context, bo, map, "skipCanRefresh", defaultValue: false),
      autoLoad: XSJSParse.getBool(context, bo, map, "autoLoad", defaultValue: true),
      maxOverScrollExtent: XSJSParse.getDouble(context, bo, map, "maxOverScrollExtent"),
      enableBallisticLoad: XSJSParse.getBool(context, bo, map, "enableBallisticLoad", defaultValue: true),
      maxUnderScrollExtent: XSJSParse.getDouble(context, bo, map, "maxUnderScrollExtent"),
      headerTriggerDistance: XSJSParse.getDouble(context, bo, map, "headerTriggerDistance", defaultValue: 80.0),
      footerTriggerDistance: XSJSParse.getDouble(context, bo, map, "footerTriggerDistance", defaultValue: 15.0),
      hideFooterWhenNotFull: XSJSParse.getBool(context, bo, map, "hideFooterWhenNotFull", defaultValue: false),
      enableRefreshVibrate: XSJSParse.getBool(context, bo, map, "enableRefreshVibrate", defaultValue: false),
      enableLoadMoreVibrate: XSJSParse.getBool(context, bo, map, "enableLoadMoreVibrate", defaultValue: false),
      topHitBoundary: XSJSParse.getDouble(context, bo, map, "topHitBoundary"),
      bottomHitBoundary: XSJSParse.getDouble(context, bo, map, "bottomHitBoundary"),
    );
  }
}

//****** SmartRefresher ******
class XSProxyPullToRefreshSmartRefresher extends XSJsonObjProxy {
  static String regClassName = "PullToRefreshRefresher";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      regClassName: () => XSProxyPullToRefreshSmartRefresher()..init(className: regClassName)
    };
  }

  @override
  SmartRefresher constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SmartRefresher(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
      header: XSJSParse.getWidget(context, bo, map, "header"),
      footer: XSJSParse.getWidget(context, bo, map, "footer"),
      enablePullDown: XSJSParse.getBool(context, bo, map, "enablePullDown", defaultValue: true),
      enablePullUp: XSJSParse.getBool(context, bo, map, "enablePullUp", defaultValue: false),
      enableTwoLevel: XSJSParse.getBool(context, bo, map, "enableTwoLevel", defaultValue: false),
      onRefresh: XSJSParse.getVoidCallback(context, bo, map, "onRefresh"),
      onLoading: XSJSParse.getVoidCallback(context, bo, map, "onLoading"),
      onTwoLevel: XSJSParse.getVoidCallback(context, bo, map, "onTwoLevel"),
      onOffsetChange: XSPullToRefreshParse.createOffsetChangeDynamicHandle(bo, XSJSParse.getString(context, bo, map, "onOffsetChange")),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior"),
      primary: XSJSParse.getBool(context, bo, map, "primary"),
      cacheExtent: XSJSParse.getDouble(context, bo, map, "cacheExtent"),
      semanticChildCount: XSJSParse.getInt(context, bo, map, "semanticChildCount"),
      reverse: XSJSParse.getBool(context, bo, map, "reverse"),
      physics: XSJSParse.getScrollPhysics(context, bo, map, "physics"),
      scrollDirection: XSJSParse.getAxis(context, bo, map, "scrollDirection"),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
    );
  }
}

//****** RefreshController ******
class XSProxyPullToScrollController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "PullToRefreshController";
    return {
      regClassName: () => XSProxyPullToScrollController()..init(className: regClassName)
    };
  }

  @override
  RefreshController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return RefreshController(
      initialRefreshStatus: XSPullToRefreshParse.getRefreshStatus(context, bo, map, "RefreshStatus"),
      initialRefresh: XSJSParse.getBool(context, bo, map, "initialRefresh", defaultValue: false),
      initialLoadStatus: XSPullToRefreshParse.getLoadStatus(context, bo, map, "initialLoadStatus"),
    );
  }

  //mirrorObj 为一个AnimationController类的实例对象，把调用对象方法，路由到代理类
  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is RefreshController)) {
      return;
    }

    var sc = mirrorObj as RefreshController;

    if (funcName == 'dispose') {
      sc.dispose();
      return;
    }

    if (funcName == 'loadComplete') {
      sc.loadComplete();
      return;
    }

    if (funcName == 'loadFailed') {
      sc.loadFailed();
      return;
    }

    if (funcName == 'loadNoData') {
      sc.loadNoData();
      return;
    }

    if (funcName == 'refreshCompleted') {
      sc.refreshCompleted(
        resetFooterState: XSJSParse.getBool(null, null, args, "resetFooterState"),
      );
      return;
    }

    if (funcName == 'refreshFailed') {
      sc.refreshFailed();
      return;
    }

    if (funcName == 'refreshToIdle') {
      sc.refreshToIdle();
      return;
    }

    if (funcName == 'requestLoading') {
      sc.requestLoading(
        needMove: XSJSParse.getBool(null, null, args, "needMove", defaultValue: true),
        duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 500)),
        curve: XSJSParse.getCurve(null, null, args, "curve", defaultValue: Curves.linear),
      );
      return;
    }

    if (funcName == 'requestRefresh') {
      sc.requestRefresh(
        needMove: XSJSParse.getBool(null, null, args, "needMove", defaultValue: true),
        duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 500)),
        curve: XSJSParse.getCurve(null, null, args, "curve", defaultValue: Curves.linear),
      );
      return;
    }

    if (funcName == 'requestTwoLevel') {
      sc.requestTwoLevel(
        duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 500)),
        curve: XSJSParse.getCurve(null, null, args, "curve", defaultValue: Curves.linear),
      );
      return;
    }

    if (funcName == 'resetNoData') {
      sc.resetNoData();
      return;
    }

    if (funcName == 'twoLevelComplete') {
      sc.twoLevelComplete(
        duration: XSJSParse.getDuration(null, null, args, "duration", defaultValue: const Duration(milliseconds: 500)),
        curve: XSJSParse.getCurve(null, null, args, "curve", defaultValue: Curves.linear),
      );
      return;
    }
  }
}
