
import 'package:flutter/material.dart';
//IOS风格Icon
import 'package:flutter/cupertino.dart';
import 'dart:async';

import 'loading_theme.dart';
import 'loading_type.dart';
import 'loading_container.dart';
import 'loading_indicator.dart';
import 'loading_progress.dart';




class XSLoading {
  /// loading style, default [XSLoadingStyle.dark].
  XSLoadingStyle loadingStyle;

  /// loading indicator type, default [XSLoadingIndicatorType.fadingCircle].
  XSLoadingIndicatorType indicatorType;

  /// loading mask type, default [XSLoadingMaskType.none].
  XSLoadingMaskType maskType;

  /// textAlign of status, default [TextAlign.center].
  TextAlign textAlign;

  /// content padding of loading.
  EdgeInsets contentPadding;

  /// padding of [status].
  EdgeInsets textPadding;

  /// size of indicator, default 40.0.
  double indicatorSize;

  /// radius of loading, default 5.0.
  double radius;

  /// fontSize of loading, default 15.0.
  double fontSize;

  /// width of progress indicator, default 2.0.
  double progressWidth;

  /// width of indicator, default 4.0, only used for [XSLoadingIndicatorType.ring, XSLoadingIndicatorType.dualRing].
  double lineWidth;

  /// display duration of [showSuccess] [showError] [showInfo] [showToast], default 2000ms.
  Duration displayDuration;

  /// color of loading status, only used for [XSLoadingStyle.custom].
  Color textColor;

  /// color of loading indicator, only used for [XSLoadingStyle.custom].
  Color indicatorColor;

  /// progress color of loading, only used for [XSLoadingStyle.custom].
  Color progressColor;

  /// background color of loading, only used for [XSLoadingStyle.custom].
  Color backgroundColor;

  /// mask color of loading, only used for [XSLoadingMaskType.custom].
  Color maskColor;

  /// should allow user interactions while loading is displayed.
  bool userInteractions;

  /// success widget of loading
  Widget successWidget;

  /// error widget of loading
  Widget errorWidget;

  /// info widget of loading
  Widget infoWidget;

  //
  BuildContext _context;
  //覆盖层
  OverlayEntry _overlayEntry;
  Widget _progressWidget;
  GlobalKey<XSLoadingContainerState> _containerKey;
  GlobalKey<ProgressState> _progressKey;
  Timer _timer;
  GlobalKey<NavigatorState> _navigatorKey;
//是否加载中
  bool _isLoading=false;

  //是否加载中
  bool get isLoading => _isLoading;
  GlobalKey<NavigatorState> get navigatorKey => getNavigatorKey();
  BuildContext get context => getContext();

  /*
  * 更新Context
  * */
  void updateContext(BuildContext context){
    _context=context;
  }

  /*
  * 获取navigatorKey
  * */
  GlobalKey<NavigatorState> getNavigatorKey(){
    if(_navigatorKey==null){
      _navigatorKey=GlobalKey<NavigatorState>();
    }
    return _navigatorKey;
  }

  /*
  * 获取navigatorKey
  * */
  BuildContext getContext(){
    if(_navigatorKey==null){
      return _context;
    }
    return _navigatorKey.currentState.overlay.context;
  }


  factory XSLoading() => _getInstance();
  static XSLoading _instance;
  static XSLoading get instance => _getInstance();
  XSLoading._internal() {
    /// set deafult value
    loadingStyle = XSLoadingStyle.dark;
    indicatorType = XSLoadingIndicatorType.circle;
    maskType = XSLoadingMaskType.clear;
    textAlign = TextAlign.center;
    indicatorSize = 40.0;
    radius = 5.0;
    fontSize = 15.0;
    progressWidth = 2.0;
    lineWidth = 4.0;
    displayDuration = const Duration(milliseconds: 2500);
    textPadding = const EdgeInsets.only(bottom: 10.0);
    userInteractions = false;
    contentPadding = const EdgeInsets.symmetric(
      vertical: 15.0,
      horizontal: 15.0,
    );
  }

  static XSLoading _getInstance() {
    if (_instance == null) {
      _instance = XSLoading._internal();
    }
    return _instance;
  }

  /*
  * 显示加载中
  * status:标题
  * indicator:加载动画
  * alignment:对齐方式
  * */
  static void show({String status, Widget indicator, Alignment alignment=Alignment.center}) {
    Widget w = indicator ?? XSLoadingIndicator();
    _getInstance()._show(
      status: status,
      alignment: alignment,
      w: w,
    );
  }

  /*
  * 显示进度条
  * value:进度值(0.0 ~ 1.0)
  * status:标题
  * alignment:对齐方式
  * */
  static void showProgress(double value, {String status, Alignment alignment=Alignment.center}) {
    assert(value >= 0.0 && value <= 1.0, 'value should be 0.0 ~ 1.0');
    if (_getInstance()._progressWidget == null) {
      GlobalKey<ProgressState> _progressKey = GlobalKey<ProgressState>();
      Widget w = Progress(
        key: _progressKey,
        value: value,
      );
      _getInstance()._show(
        status: status,
        alignment: alignment,
        w: w,
      );
      _getInstance()._progressKey = _progressKey;
      _getInstance()._progressWidget = w;
    }
    _getInstance()
        ._progressKey
        .currentState
        ?.updateProgress(value >= 1 ? 1 : value);
    if (status != null) {
      _getInstance()._containerKey.currentState?.updateStatus(status);
    }
  }

  /*
  * 显示成功消息
  * status:标题
  * duration:显示时长
  * alignment:对齐方式
  * */
  static void showSuccess(String status, {Duration duration, Alignment alignment=Alignment.center}) {
    Widget w = _getInstance().successWidget ??
        Icon(
          CupertinoIcons.check_mark_circled,
          color: XSLoadingTheme.indicatorColor,
          size: XSLoadingTheme.indicatorSize,
        );
    _getInstance()._show(
      status: status,
      duration: duration ?? XSLoadingTheme.displayDuration,
      alignment: alignment,
      w: w,
    );
  }

  /*
  * 显示错误消息
  * status:标题
  * duration:显示时长
  * alignment:对齐方式
  * */
  static void showError(String status, {Duration duration, Alignment alignment=Alignment.center}) {
    Widget w = _getInstance().errorWidget ??
        Icon(
          CupertinoIcons.clear_circled,
          color: XSLoadingTheme.indicatorColor,
          size: XSLoadingTheme.indicatorSize,
        );
    _getInstance()._show(
      status: status,
      duration: duration ?? XSLoadingTheme.displayDuration,
      alignment: alignment,
      w: w,
    );
  }

  /*
  * 显示提示消息
  * status:标题
  * duration:显示时长
  * alignment:对齐方式
  * */
  static void showInfo(String status, {Duration duration, Alignment alignment=Alignment.center}) {

    Widget w = _getInstance().infoWidget ??
        Icon(
          CupertinoIcons.info,
          color: XSLoadingTheme.indicatorColor,
          size: XSLoadingTheme.indicatorSize,
        );
    _getInstance()._show(
      status: status,
      duration: duration ?? XSLoadingTheme.displayDuration,
      alignment: alignment,
      w: w,
    );
  }

  /*
  * 显示Toast消息
  * status:标题
  * duration:显示时长
  * alignment:对齐方式
  * */
  static void showToast(String status, {Duration duration,Alignment alignment=Alignment.center}) {
    _getInstance()._show(
      status: status,
      duration: duration ?? XSLoadingTheme.displayDuration,
      alignment: alignment,
      ignoring: true
    );
  }

  /*
  * 隐藏Loading
  * */
  static void dismiss({bool animation = true,}) async {

    _getInstance()._isLoading =false;
    // cancel timer
    _getInstance()._cancelTimer();

    if (animation) {
      XSLoadingContainerState loadingContainerState =
          _getInstance()._containerKey?.currentState;
      if (loadingContainerState != null) {
        final Completer<void> completer = Completer<void>();
        loadingContainerState.dismiss(completer);
        completer.future.then((value) {
          _getInstance()._remove();
        });
        return;
      }
    }
    _getInstance()._remove();
  }

  /*
  * 显示Loading
  * w:子控件
  * status:标题
  * duration:显示时长
  * alignment:对齐方式
  * */
  void _show({Widget w,String status, Duration duration, Alignment alignment=Alignment.center,bool ignoring}) {

    _cancelTimer();

    if (_getInstance().loadingStyle == XSLoadingStyle.custom) {
      assert(
      _getInstance().backgroundColor != null,
      'while loading style is custom, backgroundColor should not be null',
      );
      assert(
      _getInstance().indicatorColor != null,
      'while loading style is custom, indicatorColor should not be null',
      );
      assert(
      _getInstance().progressColor != null,
      'while loading style is custom, progressColor should not be null',
      );
      assert(
      _getInstance().textColor != null,
      'while loading style is custom, textColor should not be null',
      );
    }

    if (_getInstance().maskType == XSLoadingMaskType.custom) {
      assert(
      _getInstance().maskColor != null,
      'while mask type is custom, maskColor should not be null',
      );
    }

    GlobalKey<XSLoadingContainerState> _key = GlobalKey<XSLoadingContainerState>();
    bool _animation = _getInstance()._overlayEntry == null;
    _remove();

    OverlayEntry _overlayEntry = OverlayEntry(
      builder: (BuildContext context) => XSLoadingContainer(
        key: _key,
        status: status,
        indicator: w,
        animation: _animation,
        alignment: alignment,
        ignoring: ignoring,
      ),
    );

    _isLoading=true;
    if(_navigatorKey==null){
      Overlay.of(_context).insert(_overlayEntry);
    }else{
      _navigatorKey.currentState.overlay.insert(_overlayEntry);
    }

    _getInstance()._overlayEntry = _overlayEntry;
    _getInstance()._containerKey = _key;

    if (duration != null) {
      _getInstance()._timer = Timer.periodic(duration, (Timer timer) {
        dismiss();
      });
    }
  }

  /*
  *
  * */
  void _cancelTimer() {
    _getInstance()._timer?.cancel();
    _getInstance()._timer = null;
  }

  void _remove() {
    _getInstance()._overlayEntry?.remove();
    _getInstance()._overlayEntry = null;
    _getInstance()._containerKey = null;
    _getInstance()._progressWidget = null;
    _getInstance()._progressKey = null;
  }
}
