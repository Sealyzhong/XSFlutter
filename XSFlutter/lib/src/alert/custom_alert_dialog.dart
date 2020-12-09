/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: 提示框
 */

import 'package:flutter/material.dart';

import '../xs_json_proxy_dialog.dart';

/*
* 提示框动画类型
* */
enum CustomAlertDialogAnimationType { fromRight, fromLeft, fromTop, fromBottom, grow, shrink }

class CustomAlertDialogAnimationTransition {
  /// Slide animation, from right to left (SlideTransition)
  static fromRight(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return SlideTransition(
      position: Tween<Offset>(
        begin: const Offset(1.0, 0.0),
        end: Offset.zero,
      ).animate(animation),
      child: child,
    );
  }

  /// Slide animation, from left to right (SlideTransition)
  static fromLeft(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return SlideTransition(
      position: Tween<Offset>(
        begin: const Offset(-1.0, 0.0),
        end: Offset.zero,
      ).animate(animation),
      child: child,
    );
  }

  /// Slide animation, from top to bottom (SlideTransition)
  static fromTop(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return SlideTransition(
      position: Tween<Offset>(
        begin: const Offset(0.0, -1.0),
        end: Offset.zero,
      ).animate(animation),
      child: child,
    );
  }

  /// Slide animation, from top to bottom (SlideTransition)
  static fromBottom(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return SlideTransition(
      position: Tween<Offset>(
        begin: const Offset(0.0, 1.0),
        end: Offset.zero,
      ).animate(animation),
      child: child,
    );
  }

  /// Scale animation, from in to out (ScaleTransition)
  static grow(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return ScaleTransition(
      scale: Tween<double>(
        begin: 0.0,
        end: 1.0,
      ).animate(
        CurvedAnimation(
          parent: animation,
          curve: Interval(
            0.00,
            0.50,
            curve: Curves.linear,
          ),
        ),
      ),
      child: child,
    );
  }

  /// Scale animation, from out to in (ScaleTransition)
  static shrink(Animation<double> animation, Animation<double> secondaryAnimation, Widget child) {
    return ScaleTransition(
      scale: Tween<double>(
        begin: 1.2,
        end: 1.0,
      ).animate(
        CurvedAnimation(
          parent: animation,
          curve: Interval(
            0.50,
            1.00,
            curve: Curves.linear,
          ),
        ),
      ),
      child: child,
    );
  }
}

/// Used for defining alert actions.
///
/// [child] and [onPressed] parameters are required.
class CustomAlertDialogButton extends StatelessWidget {
  final Widget child;
  final double width;
  final double height;
  final Color color;
  final Gradient gradient;
  final BorderRadius radius;
  final VoidCallback onPressed;

  /// DialogButton constructor
  CustomAlertDialogButton({
    Key key,
    @required this.child,
    this.width,
    this.height = 40.0,
    this.color,
    this.gradient,
    this.radius,
    @required this.onPressed,
  }) : super(key: key);

  /// Creates alert actions based on constructor params
  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        color: color ?? Theme.of(context).accentColor,
        gradient: gradient,
        borderRadius: radius ?? BorderRadius.circular(6),
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onPressed,
          child: Center(
            child: child,
          ),
        ),
      ),
    );
  }
}

class CustomAlertDialogStyle {
  final CustomAlertDialogAnimationType animationType;
  final Duration animationDuration;
  final ShapeBorder alertBorder;
  final bool isCloseButton;
  final bool isOverlayTapDismiss;
  final Color backgroundColor;
  final Color overlayColor;
  final double buttonSpace;
  final double titleHeight;
  final TextStyle titleStyle;
  final TextStyle descStyle;
  final EdgeInsets buttonAreaPadding;
  final BoxConstraints constraints;

  /// Alert style constructor function
  /// The [animationType] parameter is used for transitions. Default: "fromBottom"
  /// The [animationDuration] parameter is used to set the animation transition time. Default: "200 ms"
  /// The [alertBorder] parameter sets border.
  /// The [isCloseButton] parameter sets visibility of the close button. Default: "true"
  /// The [isOverlayTapDismiss] parameter sets closing the alert by clicking outside. Default: "true"
  /// The [overlayColor] parameter sets the background color of the outside. Default: "Color(0xDD000000)"
  /// The [titleStyle] parameter sets alert title text style.
  /// The [descStyle] parameter sets alert desc text style.
  /// The [buttonAreaPadding] parameter sets button area padding.
  const CustomAlertDialogStyle({this.animationType = CustomAlertDialogAnimationType.shrink, this.animationDuration = const Duration(milliseconds: 200), this.alertBorder, this.isCloseButton = false, this.isOverlayTapDismiss = false, this.backgroundColor, this.overlayColor = const Color.fromARGB(125, 0, 0, 0), this.titleStyle = const TextStyle(color: Colors.black, fontWeight: FontWeight.bold, fontSize: 18.0), this.descStyle = const TextStyle(color: Colors.black54, fontSize: 16.0), this.buttonAreaPadding = const EdgeInsets.all(10.0), this.buttonSpace = 10, this.titleHeight = 60, this.constraints});
}

/// Main class to create alerts.
///
/// You must call the "show()" method to view the alert class you have defined.
class CustomAlertDialog {
  final BuildContext context;
  final CustomAlertDialogStyle style;
  final Image image;
  final String title;
  final String desc;
  final Widget content;
  final List<CustomAlertDialogButton> actions;
  final VoidCallback closeFunction;

  /// Alert constructor
  ///
  /// [context], [title] are required.
  CustomAlertDialog({
    @required this.context,
    this.style = const CustomAlertDialogStyle(),
    this.image,
    @required this.title,
    this.desc,
    this.content,
    this.actions,
    this.closeFunction,
  });

  /// Displays defined alert window
  Future<bool> show() async {
    return await showGeneralDialog(
      context: context,
      pageBuilder: (BuildContext buildContext, Animation<double> animation, Animation<double> secondaryAnimation) {
        return _buildDialog();
      },
      barrierDismissible: style.isOverlayTapDismiss,
      barrierLabel: MaterialLocalizations.of(context).modalBarrierDismissLabel,
      barrierColor: style.overlayColor,
      transitionDuration: style.animationDuration,
      transitionBuilder: (
        BuildContext context,
        Animation<double> animation,
        Animation<double> secondaryAnimation,
        Widget child,
      ) =>
          _showAnimation(animation, secondaryAnimation, child),
    );
  }

// Will be added in next version.
  // void dismiss() {
  //   Navigator.pop(context);
  // }

  /*
  * 内容
  * */
  List<Widget> _getContext() {
    List<Widget> list = List<Widget>();

    //1.标题
    if (title != null) {
      list.add(
        Container(
          height: style.titleHeight,
          child: Align(
            child: Text(
              title,
              style: style.titleStyle,
              textAlign: TextAlign.center,
            ),
          ),
        ),
      );
    }

    //2.内容(1)
    if (desc != null) {
      list.add(
        Text(
          desc,
          style: style.descStyle,
          textAlign: TextAlign.center,
        ),
      );
    }

    //2.内容(2)
    if (content != null) {
      list.add(content);
    }
    return list;
  }

  // Alert dialog content widget
  Widget _buildDialog() {
    return AlertDialog(
      backgroundColor: style.backgroundColor ?? Theme.of(context).dialogBackgroundColor,
      shape: style.alertBorder ?? _defaultShape(),
      titlePadding: EdgeInsets.only(left: 0, right: 0),
      title: Stack(children: <Widget>[
        style.isCloseButton
            ? Align(
                alignment: Alignment.topRight,
                child: IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: Icon(
                    Icons.close,
                    color: Colors.grey,
                  ),
                ),
              )
            : Container(),
        Container(
          margin: EdgeInsets.only(left: 15, right: 15),
          child: Column(
            children: _getContext(),
          ),
        )
      ]),
      contentPadding: style.buttonAreaPadding,
      content: Row(
        children: _getButtons(),
      ),
    );
  }

  // Returns alert default border style
  ShapeBorder _defaultShape() {
    return RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10.0),
      side: BorderSide(
        color: Colors.blueGrey,
      ),
    );
  }

  // Returns defined actions. Default: Cancel Button
  List<Widget> _getButtons() {
    List<Widget> expandedButtons = [];
    if (actions != null) {
      for (int i = 0; i < actions.length; i++) {
        if (actions.length == 1) {
          expandedButtons.add(Expanded(child: actions[i]));
        } else {
          expandedButtons.add(Expanded(child: Padding(padding: EdgeInsets.only(left: i == 0 ? 0 : style.buttonSpace), child: actions[i])));
        }
      }
    }
    //取消按钮
    else {
      expandedButtons.add(
        Expanded(
            child: CustomAlertDialogButton(
          color: Colors.black38,
          onPressed: () {
            Navigator.pop(context);
          },
          child: Text(
            "取消",
            style: TextStyle(color: Colors.white),
          ),
        )),
      );
    }
    return expandedButtons;
  }

  /*
  * 采用一个按钮显示
  * */
  static void showSimple(
    BuildContext context, {
    CustomAlertDialogStyle style = const CustomAlertDialogStyle(),
    Image image,
    String title = "温馨提示",
    String desc,
    Widget content,
    ValueSetter<int> onTap,
    List<CustomDialogButtonInfo> actions,
  }) {
    var widgetList = List<CustomAlertDialogButton>();
    if (actions != null && actions.length > 0) {
      for (var i = 0; i < actions.length; i++) {
        var model = actions[i];
        widgetList.add(CustomAlertDialogButton(
          color: model.bgColor,
          onPressed: () {
            Navigator.pop(context);
            if (onTap != null) {
              onTap(i);
            }
          },
          child: Text(
            model.text,
            style: model.textStyle,
          ),
        ));
      }
    }

    //提示是否
    CustomAlertDialog(context: context, image: image, style: style, title: title, content: content, desc: desc, actions: widgetList).show();
  }

  // Shows alert with selected animation
  _showAnimation(animation, secondaryAnimation, child) {
    if (style.animationType == CustomAlertDialogAnimationType.fromRight) {
      return CustomAlertDialogAnimationTransition.fromRight(animation, secondaryAnimation, child);
    } else if (style.animationType == CustomAlertDialogAnimationType.fromLeft) {
      return CustomAlertDialogAnimationTransition.fromLeft(animation, secondaryAnimation, child);
    } else if (style.animationType == CustomAlertDialogAnimationType.fromBottom) {
      return CustomAlertDialogAnimationTransition.fromBottom(animation, secondaryAnimation, child);
    } else if (style.animationType == CustomAlertDialogAnimationType.grow) {
      return CustomAlertDialogAnimationTransition.grow(animation, secondaryAnimation, child);
    } else if (style.animationType == CustomAlertDialogAnimationType.shrink) {
      return CustomAlertDialogAnimationTransition.shrink(animation, secondaryAnimation, child);
    } else {
      return CustomAlertDialogAnimationTransition.fromTop(animation, secondaryAnimation, child);
    }
  }
}
