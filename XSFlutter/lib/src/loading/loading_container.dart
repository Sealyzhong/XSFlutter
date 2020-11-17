import 'package:flutter/material.dart';
import 'dart:async';
import 'loading_theme.dart';

class XSLoadingContainer extends StatefulWidget {
  final Widget indicator;
  final String status;
  final bool animation;
  final Alignment alignment;
  final bool ignoring;

  XSLoadingContainer({
    Key key,
    this.indicator,
    this.status,
    this.animation = true,
    this.alignment=Alignment.center,
    this.ignoring
  }) : super(key: key);

  @override
  XSLoadingContainerState createState() => XSLoadingContainerState();
}

class XSLoadingContainerState extends State<XSLoadingContainer> {
  double _opacity = 0.0;
  Duration _animationDuration;
  String _status;

  @override
  void initState() {
    super.initState();
    _status = widget.status;
    _animationDuration = widget.animation
        ? const Duration(milliseconds: 300)
        : const Duration(milliseconds: 0);
    if (widget.animation) {
      Future.delayed(const Duration(milliseconds: 30), () {
        if (!mounted) return;
        setState(() {
          _opacity = 1.0;
        });
      });
    } else {
      setState(() {
        _opacity = 1.0;
      });
    }
  }

  @override
  void dispose() {
    super.dispose();
  }

  void dismiss(Completer completer) {
    _animationDuration = const Duration(milliseconds: 300);
    setState(() {
      _opacity = 0.0;
    });
    Future.delayed(_animationDuration, () {
      completer.complete();
    });
  }

  void updateStatus(String status) {
    setState(() {
      _status = status;
    });
  }

  @override
  Widget build(BuildContext context) {
    Widget loading = Align(
      alignment: widget.alignment,
      child: Container(
        margin: const EdgeInsets.all(50.0),
        decoration: BoxDecoration(
          color: XSLoadingTheme.backgroundColor,
          borderRadius: BorderRadius.circular(
            XSLoadingTheme.radius,
          ),
        ),
        padding: XSLoadingTheme.contentPadding,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            widget.indicator != null
                ? Container(
              margin: _status?.isNotEmpty == true
                  ? XSLoadingTheme.textPadding
                  : EdgeInsets.zero,
              child: widget.indicator,
            )
                : null,
            _status?.isNotEmpty == true
                ? Text(
              _status,
              style: TextStyle(
                color: XSLoadingTheme.textColor,
                fontSize: XSLoadingTheme.fontSize,
                fontWeight: FontWeight.normal,
                decoration: TextDecoration.none,
              ),
              textAlign: XSLoadingTheme.textAlign,
              maxLines: 10,
              overflow: TextOverflow.ellipsis,
            )
                : null,
          ].where((w) => w != null).toList(),
        ),
      ),
    );

    return AnimatedOpacity(
      opacity: _opacity,
      duration: _animationDuration,
      child: Stack(
        children: <Widget>[
          IgnorePointer(
            ignoring: widget.ignoring??XSLoadingTheme.ignoring,
            child: Container(
              width: double.infinity,
              height: double.infinity,
              color: XSLoadingTheme.maskColor,
            ),
          ),
          loading,
        ],
      ),
    );
  }
}
