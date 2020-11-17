import 'package:flutter/material.dart';
import 'loading.dart';

class XSLoadingApp extends StatelessWidget {
  /// should be [MaterialApp] or [CupertinoApp].
  /// make sure that loading can be displayed in front of all other widgets
  final Widget child;

  const XSLoadingApp({
    Key key,
    @required this.child,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Overlay(
        initialEntries: [
          OverlayEntry(
            builder: (BuildContext _context) {
              XSLoading.instance.updateContext(_context);
              return this.child;
            },
          ),
        ],
      );
  }
}
