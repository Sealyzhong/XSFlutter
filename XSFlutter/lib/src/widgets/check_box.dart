/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/08/10
 * @Description: Check_Box
 */

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'dart:math' as math;

/// A material design checkbox.
///
/// The checkbox itself does not maintain any state. Instead, when the state of
/// the checkbox changes, the widget calls the [onChanged] callback. Most
/// widgets that use a checkbox will listen for the [onChanged] callback and
/// rebuild the checkbox with a new [value] to update the visual appearance of
/// the checkbox.
///
/// The checkbox can optionally display three values - true, false, and null -
/// if [tristate] is true. When [value] is null a dash is displayed. By default
/// [tristate] is false and the checkbox's [value] must be true or false.
///
/// Requires one of its ancestors to be a [Material] widget.
///
/// See also:
///
///  * [CheckboxListTile], which combines this widget with a [ListTile] so that
///    you can give the checkbox a label.
///  * [Switch], a widget with semantics similar to [Checkbox].
///  * [Radio], for selecting among a set of explicit values.
///  * [Slider], for selecting a value in a range.
///  * <https://material.io/design/components/selection-controls.html#checkboxes>
///  * <https://material.io/design/components/lists.html#types>
class CheckboxEx extends StatefulWidget {
  /// Creates a material design checkbox.
  ///
  /// The checkbox itself does not maintain any state. Instead, when the state of
  /// the checkbox changes, the widget calls the [onChanged] callback. Most
  /// widgets that use a checkbox will listen for the [onChanged] callback and
  /// rebuild the checkbox with a new [value] to update the visual appearance of
  /// the checkbox.
  ///
  /// The following arguments are required:
  ///
  /// * [value], which determines whether the checkbox is checked. The [value]
  ///   can only be null if [tristate] is true.
  /// * [onChanged], which is called when the value of the checkbox should
  ///   change. It can be set to null to disable the checkbox.
  ///
  /// The value of [tristate] must not be null.
  const CheckboxEx({
    Key key,
    @required this.value,
    this.tristate = false,
    @required this.onChanged,
    this.activeColor,
    this.width = 20.0,
    this.checkColor,
    this.isCircle = false,
    this.strokeWidth = 1.0,
  })  : assert(tristate != null),
        assert(tristate || value != null),
        super(key: key);

  /// Whether this checkbox is checked.
  ///
  /// This property must not be null.
  final bool value;

  final double strokeWidth;

  /// Called when the value of the checkbox should change.
  ///
  /// The checkbox passes the new value to the callback but does not actually
  /// change state until the parent widget rebuilds the checkbox with the new
  /// value.
  ///
  /// If this callback is null, the checkbox will be displayed as disabled
  /// and will not respond to input gestures.
  ///
  /// When the checkbox is tapped, if [tristate] is false (the default) then
  /// the [onChanged] callback will be applied to `!value`. If [tristate] is
  /// true this callback cycle from false to true to null.
  ///
  /// The callback provided to [onChanged] should update the state of the parent
  /// [StatefulWidget] using the [State.setState] method, so that the parent
  /// gets rebuilt; for example:
  ///
  /// ```dart
  /// Checkbox(
  ///   value: _throwShotAway,
  ///   onChanged: (bool newValue) {
  ///     setState(() {
  ///       _throwShotAway = newValue;
  ///     });
  ///   },
  /// )
  /// ```
  final ValueChanged<bool> onChanged;

  /// The color to use when this checkbox is checked.
  ///
  /// Defaults to [ThemeData.toggleableActiveColor].
  final Color activeColor;

  /// The color to use for the check icon when this checkbox is checked
  ///
  /// Defaults to Color(0xFFFFFFFF)
  final Color checkColor;

  /// If true the checkbox's [value] can be true, false, or null.
  ///
  /// Checkbox displays a dash when its value is null.
  ///
  /// When a tri-state checkbox is tapped its [onChanged] callback will be
  /// applied to true if the current value is null or false, false otherwise.
  /// Typically tri-state checkboxes are disabled (the onChanged callback is
  /// null) so they don't respond to taps.
  ///
  /// If tristate is false (the default), [value] must not be null.
  final bool tristate;

  /// The width of a checkbox widget.
  final double width;

  final bool isCircle; //是否绘制圆形

  @override
  _CustomerCheckboxState createState() => _CustomerCheckboxState();
}

class _CustomerCheckboxState extends State<CheckboxEx> with TickerProviderStateMixin {
  bool _value;

  @override
  void didUpdateWidget(CheckboxEx oldWidget) {
    super.didUpdateWidget(oldWidget);
    _value = widget.value;
  }

  @override
  Widget build(BuildContext context) {
    assert(debugCheckHasMaterial(context));
    final ThemeData themeData = Theme.of(context);
    Size size = Size(widget.width * 2, widget.width * 2);
    final BoxConstraints additionalConstraints = BoxConstraints.tight(size);
    return _CheckboxRenderObjectWidget(
      width: widget.width,
      value: _value ?? widget.value,
      isCircle: widget.isCircle,
      tristate: widget.tristate,
      strokeWidth: widget.strokeWidth,
      activeColor: widget.activeColor ?? themeData.primaryColor,
      checkColor: widget.checkColor ?? Colors.white,
      inactiveColor: widget.onChanged != null ? themeData.unselectedWidgetColor : themeData.disabledColor,
      onChanged: (val) {
        _value = val;
        if (mounted) {
          setState(() {});
        }
        if (widget.onChanged != null) {
          widget.onChanged(val);
        }
      },
      additionalConstraints: additionalConstraints,
      vsync: this,
    );
  }
}

class _CheckboxRenderObjectWidget extends LeafRenderObjectWidget {
  const _CheckboxRenderObjectWidget({
    Key key,
    @required this.value,
    @required this.tristate,
    @required this.activeColor,
    @required this.checkColor,
    @required this.inactiveColor,
    @required this.onChanged,
    @required this.width,
    @required this.vsync,
    @required this.isCircle,
    @required this.strokeWidth,
    @required this.additionalConstraints,
  })  : assert(tristate != null),
        assert(tristate || value != null),
        assert(activeColor != null),
        assert(inactiveColor != null),
        assert(vsync != null),
        super(key: key);

  final bool value;
  final bool tristate;
  final Color activeColor;
  final Color checkColor;
  final Color inactiveColor;
  final double width;
  final double strokeWidth;
  final ValueChanged<bool> onChanged;
  final TickerProvider vsync;
  final BoxConstraints additionalConstraints;
  final bool isCircle;

  @override
  _RenderCheckbox createRenderObject(BuildContext context) => _RenderCheckbox(
        value: this.value,
        tristate: this.tristate,
        activeColor: this.activeColor,
        checkColor: this.checkColor,
        inactiveColor: this.inactiveColor,
        onChanged: this.onChanged,
        vsync: this.vsync,
        width: this.width,
        strokeWidth: this.strokeWidth,
        isCircle: this.isCircle,
        additionalConstraints: this.additionalConstraints,
      );

  @override
  void updateRenderObject(BuildContext context, _RenderCheckbox renderObject) {
    renderObject
      ..value = value
      ..tristate = tristate
      ..activeColor = activeColor
      ..checkColor = checkColor
      ..inactiveColor = inactiveColor
      ..onChanged = onChanged
      .._isCircle = isCircle
      ..additionalConstraints = additionalConstraints
      ..vsync = vsync;
  }
}

//const Radius _kEdgeRadius = Radius.circular(1.0);
//const double _kStrokeWidth = 1.0;

class _RenderCheckbox extends RenderToggleable {
  _RenderCheckbox({
    double strokeWidth,
    bool value,
    bool tristate,
    Color activeColor,
    this.checkColor,
    bool isCircle,
    Color inactiveColor,
    BoxConstraints additionalConstraints,
    ValueChanged<bool> onChanged,
    double width,
    @required TickerProvider vsync,
  })  : _oldValue = value,
        _kEdgeSize = width,
        _isCircle = isCircle,
        _strokeWidth = strokeWidth,
        super(
          value: value,
          tristate: tristate,
          activeColor: activeColor,
          inactiveColor: inactiveColor,
          onChanged: onChanged,
          additionalConstraints: additionalConstraints,
          vsync: vsync,
        );

  bool _oldValue;
  Color checkColor;
  double _kEdgeSize;
  bool _isCircle;
  double _strokeWidth;

  @override
  set value(bool newValue) {
    if (newValue == value) return;
    _oldValue = value;
    super.value = newValue;
  }

  @override
  void describeSemanticsConfiguration(SemanticsConfiguration config) {
    super.describeSemanticsConfiguration(config);
    config.isChecked = value == true;
  }

  // The square outer bounds of the checkbox at t, with the specified origin.
  // At t == 0.0, the outer rect's size is _kEdgeSize (Checkbox.width)
  // At t == 0.5, .. is _kEdgeSize - _kStrokeWidth
  // At t == 1.0, .. is _kEdgeSize
  RRect _outerRectAt(Offset origin, double t) {
    final double inset = 1.0 - (t - 0.5).abs() * 2.0;
    final double size = _kEdgeSize - inset * _strokeWidth;
    //print('size:$size');
    final Rect rect = Rect.fromLTWH(origin.dx + inset, origin.dy + inset, size, size);
    if (_isCircle) {
      return RRect.fromRectAndRadius(rect, Radius.circular(_kEdgeSize));
    }
    return RRect.fromRectAndRadius(rect, Radius.circular(1.0));
  }

  // The checkbox's border color if value == false, or its fill color when
  // value == true or null.
  Color _colorAt(double t) {
    // As t goes from 0.0 to 0.25, animate from the inactiveColor to activeColor.
    return onChanged == null ? inactiveColor : (t >= 0.25 ? activeColor : Color.lerp(inactiveColor, activeColor, t * 4.0));
  }

  // White stroke used to paint the check and dash.
  void _initStrokePaint(Paint paint) {
    paint
      ..color = checkColor
      ..style = PaintingStyle.stroke
      ..strokeWidth = _strokeWidth;
  }

  void _drawBorder(Canvas canvas, RRect outer, double t, Paint paint) {
    assert(t >= 0.0 && t <= 0.5);
    final double size = outer.width;
    // As t goes from 0.0 to 1.0, gradually fill the outer RRect.
    final RRect inner = outer.deflate(math.min(size / 2.0, _strokeWidth + size * t));
    canvas.drawDRRect(outer, inner, paint);
  }

  void _drawCheck(Canvas canvas, Offset origin, double t, Paint paint) {
    assert(t >= 0.0 && t <= 1.0);
    // As t goes from 0.0 to 1.0, animate the two check mark strokes from the
    // short side to the long side.
    final Path path = Path();
    Offset start = Offset(_kEdgeSize * 0.15, _kEdgeSize * 0.45);
    Offset mid = Offset(_kEdgeSize * 0.4, _kEdgeSize * 0.7);
    Offset end = Offset(_kEdgeSize * 0.85, _kEdgeSize * 0.25);
    if (t < 0.5) {
      final double strokeT = t * 2.0;
      final Offset drawMid = Offset.lerp(start, mid, strokeT);
      path.moveTo(origin.dx + start.dx, origin.dy + start.dy);
      path.lineTo(origin.dx + drawMid.dx, origin.dy + drawMid.dy);
    } else {
      final double strokeT = (t - 0.5) * 2.0;
      final Offset drawEnd = Offset.lerp(mid, end, strokeT);
      path.moveTo(origin.dx + start.dx, origin.dy + start.dy);
      path.lineTo(origin.dx + mid.dx, origin.dy + mid.dy);
      path.lineTo(origin.dx + drawEnd.dx, origin.dy + drawEnd.dy);
    }
    canvas.drawPath(path, paint);
  }

  void _drawDash(Canvas canvas, Offset origin, double t, Paint paint) {
    assert(t >= 0.0 && t <= 1.0);
    // As t goes from 0.0 to 1.0, animate the horizontal line from the
    // mid point outwards.
    Offset start = Offset(_kEdgeSize * 0.2, _kEdgeSize * 0.5);
    Offset mid = Offset(_kEdgeSize * 0.5, _kEdgeSize * 0.5);
    Offset end = Offset(_kEdgeSize * 0.8, _kEdgeSize * 0.5);
    final Offset drawStart = Offset.lerp(start, mid, 1.0 - t);
    final Offset drawEnd = Offset.lerp(mid, end, t);
    canvas.drawLine(origin + drawStart, origin + drawEnd, paint);
  }

  @override
  void paint(PaintingContext context, Offset offset) {
    final Canvas canvas = context.canvas;
    paintRadialReaction(canvas, offset, size.center(Offset.zero));

    final Offset origin = offset + (size / 2.0 - Size.square(_kEdgeSize) / 2.0);
    final AnimationStatus status = position.status;
    final double tNormalized = status == AnimationStatus.forward || status == AnimationStatus.completed ? position.value : 1.0 - position.value;

    // Four cases: false to null, false to true, null to false, true to false
    if (_oldValue == false || value == false) {
      final double t = value == false ? 1.0 - tNormalized : tNormalized;
      final RRect outer = _outerRectAt(origin, t);
      final Paint paint = Paint()..color = _colorAt(t);

      if (t <= 0.5) {
        _drawBorder(canvas, outer, t, paint);
      } else {
        canvas.drawRRect(outer, paint);

        _initStrokePaint(paint);
        final double tShrink = (t - 0.5) * 2.0;
        if (_oldValue == null || value == null)
          _drawDash(canvas, origin, tShrink, paint);
        else
          _drawCheck(canvas, origin, tShrink, paint);
      }
    } else {
      // Two cases: null to true, true to null
      final RRect outer = _outerRectAt(origin, 1.0);
      final Paint paint = Paint()..color = _colorAt(1.0);
      canvas.drawRRect(outer, paint);

      _initStrokePaint(paint);
      if (tNormalized <= 0.5) {
        final double tShrink = 1.0 - tNormalized * 2.0;
        if (_oldValue == true)
          _drawCheck(canvas, origin, tShrink, paint);
        else
          _drawDash(canvas, origin, tShrink, paint);
      } else {
        final double tExpand = (tNormalized - 0.5) * 2.0;
        if (value == true)
          _drawCheck(canvas, origin, tExpand, paint);
        else
          _drawDash(canvas, origin, tExpand, paint);
      }
    }
  }
}
