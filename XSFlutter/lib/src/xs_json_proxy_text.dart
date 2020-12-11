//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

import 'dart:ui';

import 'package:flutter/material.dart';
import 'widgets/icon_span.dart';
import 'widgets/label_title_widget.dart';
import 'xs_json_to_dart.dart';
import 'xs_build_owner.dart';
import 'package:flutter/gestures.dart';
import 'xs_js_parse.dart';

///把Widget按分类注册，方便写代码，
///分类：Material/Layout/Text/(Assets.Images.icons)/input...
///参照了官网https://flutter.io/docs/development/ui/widgets，
class XSProxyRegisterHelperTextSeries {
  static Map<String, CreateJsonObjProxyFun> registerProxys() {
    Map<String, CreateJsonObjProxyFun> m = {};
    m.addAll(XSProxyDefaultTextStyle.registerProxy());

    m.addAll(XSProxyInputDecoration.registerProxy());

    m.addAll(XSProxyRichText.registerProxy());

    m.addAll(XSProxyText.registerProxy());
    m.addAll(XSProxyTextSpan.registerProxy());
    m.addAll(XSProxyIconSpan.registerProxy());
    m.addAll(XSProxyTextFormField.registerProxy());
    m.addAll(XSProxyTextField.registerProxy());
    return m;
  }
}

//-------------- D -----------------
//****** DefaultTextStyle ******/
class XSProxyDefaultTextStyle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "DefaultTextStyle";
    return {
      regClassName1: () => XSProxyDefaultTextStyle()..init(className: regClassName1)
    };
  }

  ///*********************************************************************
  @override
  void init({String className}) {
    super.init(className: className);

    final String regClassName1 = "DefaultTextStyle";

    registerConstructor(className: regClassName1, constructorName: "fallback", constructor: constructorFallback);
  }

  @override
  DefaultTextStyle constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DefaultTextStyle(
      key: XSJSParse.getKey(context, bo, map, "key"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      softWrap: XSJSParse.getBool(context, bo, map, "softWrap", defaultValue: true),
      overflow: XSJSParse.getTextOverflow(context, bo, map, "overflow", defaultValue: TextOverflow.clip),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis", defaultValue: TextWidthBasis.parent),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      child: XSJSParse.getWidget(context, bo, map, "child"),
    );
  }

  DefaultTextStyle constructorFallback(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return DefaultTextStyle.fallback();
  }
}

//-------------- I -----------------
//****** InputDecoration ******/
class XSProxyInputDecoration extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "InputDecoration";

    return {
      regClassName: () => XSProxyInputDecoration()..init(className: regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);

    registerConstructor(className: className, constructorName: "collapsed", constructor: getCollapsed);
  }

  @override
  InputDecoration constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return InputDecoration(
      icon: XSJSParse.getWidget(context, bo, map, "icon"),
      labelText: XSJSParse.getString(context, bo, map, "labelText"),
      labelStyle: XSJSParse.getTextStyle(context, bo, map, "labelStyle"),
      helperText: XSJSParse.getString(context, bo, map, "helperText"),
      helperStyle: XSJSParse.getTextStyle(context, bo, map, "helperStyle"),
      hintText: XSJSParse.getString(context, bo, map, "hintText"),
      hintStyle: XSJSParse.getTextStyle(context, bo, map, "hintStyle"),
      hintMaxLines: XSJSParse.getInt(context, bo, map, "hintMaxLines"),
      errorText: XSJSParse.getString(context, bo, map, "errorText"),
      errorStyle: XSJSParse.getTextStyle(context, bo, map, "errorStyle"),
      errorMaxLines: XSJSParse.getInt(context, bo, map, "errorMaxLines"),
      // ignore: deprecated_member_use
      hasFloatingPlaceholder: XSJSParse.getBool(context, bo, map, "hasFloatingPlaceholder", defaultValue: true),
      isDense: XSJSParse.getBool(context, bo, map, "isDense"),
      contentPadding: XSJSParse.getEdgeInsets(context, bo, map, "contentPadding"),
      prefixIcon: XSJSParse.getWidget(context, bo, map, "prefixIcon"),
      prefix: XSJSParse.getWidget(context, bo, map, "prefix"),
      prefixText: XSJSParse.getString(context, bo, map, "prefixText"),
      prefixStyle: XSJSParse.getTextStyle(context, bo, map, "prefixStyle"),
      suffixIcon: XSJSParse.getWidget(context, bo, map, "suffixIcon"),
      suffix: XSJSParse.getWidget(context, bo, map, "suffix"),
      suffixText: XSJSParse.getString(context, bo, map, "suffixText"),
      suffixStyle: XSJSParse.getTextStyle(context, bo, map, "suffixStyle"),
      counter: XSJSParse.getWidget(context, bo, map, "counter"),
      counterText: XSJSParse.getString(context, bo, map, "counterText"),
      counterStyle: XSJSParse.getTextStyle(context, bo, map, "counterStyle"),
      filled: XSJSParse.getBool(context, bo, map, "filled"),
      fillColor: XSJSParse.getColor(context, bo, map, "fillColor"),
      errorBorder: XSJSParse.getInputBorder(context, bo, map, "errorBorder"),
      focusedBorder: XSJSParse.getInputBorder(context, bo, map, "focusedBorder"),
      focusedErrorBorder: XSJSParse.getInputBorder(context, bo, map, "focusedErrorBorder"),
      disabledBorder: XSJSParse.getInputBorder(context, bo, map, "disabledBorder"),
      enabledBorder: XSJSParse.getInputBorder(context, bo, map, "enabledBorder"),
      border: XSJSParse.getInputBorder(context, bo, map, "border"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled", defaultValue: true),
      semanticCounterText: XSJSParse.getString(context, bo, map, "semanticCounterText"),
      alignLabelWithHint: XSJSParse.getBool(context, bo, map, "alignLabelWithHint"),
    );
  }

  InputDecoration getCollapsed(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return InputDecoration.collapsed(
      hintText: XSJSParse.getString(context, bo, map, "hintText"),
      // ignore: deprecated_member_use
      hasFloatingPlaceholder: XSJSParse.getBool(context, bo, map, "hasFloatingPlaceholder", defaultValue: true),
      hintStyle: XSJSParse.getTextStyle(context, bo, map, "hintStyle"),
      filled: XSJSParse.getBool(context, bo, map, "filled", defaultValue: false),
      fillColor: XSJSParse.getColor(context, bo, map, "fillColor"),
      border: XSJSParse.getInputBorder(context, bo, map, "border"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled", defaultValue: true),
    );
  }
}

//-------------- R -----------------
//****** RichText ******/
class XSProxyRichText extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "RichText";
    return {
      regClassName: () => XSProxyRichText()..init(className: regClassName)
    };
  }

  @override
  RichText constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return RichText(
      key: XSJSParse.getKey(context, bo, map, "key"),
      text: XSJSParse.getObject(context, bo, map, "text"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign", defaultValue: TextAlign.start),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      softWrap: XSJSParse.getBool(context, bo, map, "softWrap", defaultValue: true),
      overflow: XSJSParse.getTextOverflow(context, bo, map, "overflow", defaultValue: TextOverflow.clip),
      textScaleFactor: XSJSParse.getDouble(context, bo, map, "textScaleFactor", defaultValue: 1.0),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis", defaultValue: TextWidthBasis.parent),
    );
  }
}

//****** SelectableText ******/
class XSProxySelectableText extends XSJsonObjProxy {
  static String _regClassName = "SelectableText";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      _regClassName: () => XSProxySelectableText()..init(className: _regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: _regClassName, constructorName: "rich", constructor: constructorRich);
  }

  ///
//  const Text(this.data,
  @override
  SelectableText constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SelectableText(
      XSJSParse.getString(context, bo, map, "data"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      focusNode: XSJSParse.getFocusNode(context, bo, map, "focusNode"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      textScaleFactor: XSJSParse.getDouble(context, bo, map, "textScaleFactor"),
      showCursor: XSJSParse.getBool(context, bo, map, "showCursor", defaultValue: false),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      toolbarOptions: XSJSParse.getToolbarOptions(context, bo, map, "toolbarOptions"),
      minLines: XSJSParse.getInt(context, bo, map, "minLines"),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      cursorWidth: XSJSParse.getDouble(context, bo, map, "cursorWidth", defaultValue: 2.0),
      cursorHeight: XSJSParse.getDouble(context, bo, map, "cursorHeight"),
      cursorRadius: XSJSParse.getRadius(context, bo, map, "cursorRadius"),
      cursorColor: XSJSParse.getColor(context, bo, map, "cursorColor"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      enableInteractiveSelection: XSJSParse.getBool(context, bo, map, "enableInteractiveSelection", defaultValue: true),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      scrollPhysics: XSJSParse.getScrollPhysics(context, bo, map, "scrollPhysics"),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis"),
    );
  }

//
//  /// Creates a text widget with a [TextSpan].
//  const Text.rich(this.textSpan, {
  SelectableText constructorRich(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return SelectableText.rich(
      XSJSParse.getObject(context, bo, map, "data"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      focusNode: XSJSParse.getFocusNode(context, bo, map, "focusNode"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      textScaleFactor: XSJSParse.getDouble(context, bo, map, "textScaleFactor"),
      showCursor: XSJSParse.getBool(context, bo, map, "showCursor", defaultValue: false),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      toolbarOptions: XSJSParse.getToolbarOptions(context, bo, map, "toolbarOptions"),
      minLines: XSJSParse.getInt(context, bo, map, "minLines"),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      cursorWidth: XSJSParse.getDouble(context, bo, map, "cursorWidth", defaultValue: 2.0),
      cursorHeight: XSJSParse.getDouble(context, bo, map, "cursorHeight"),
      cursorRadius: XSJSParse.getRadius(context, bo, map, "cursorRadius"),
      cursorColor: XSJSParse.getColor(context, bo, map, "cursorColor"),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      enableInteractiveSelection: XSJSParse.getBool(context, bo, map, "enableInteractiveSelection", defaultValue: true),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      scrollPhysics: XSJSParse.getScrollPhysics(context, bo, map, "scrollPhysics"),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis"),
    );
  }
}

//-------------- T -----------------
//****** Text ******/
class XSProxyText extends XSJsonObjProxy {
  static String _regClassName = "Text";
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    return {
      _regClassName: () => XSProxyText()..init(className: _regClassName)
    };
  }

  @override
  void init({String className}) {
    super.init(className: className);
    registerConstructor(className: _regClassName, constructorName: "rich", constructor: constructorRich);
  }

  ///
//  const Text(this.data,
  @override
  Text constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Text(
      XSJSParse.getString(context, bo, map, "data"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      softWrap: XSJSParse.getBool(context, bo, map, "softWrap"),
      overflow: XSJSParse.getTextOverflow(context, bo, map, "overflow"),
      textScaleFactor: XSJSParse.getDouble(context, bo, map, "textScaleFactor"),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      semanticsLabel: XSJSParse.getString(context, bo, map, "semanticsLabel"),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis"),
    );
  }

//
//  /// Creates a text widget with a [TextSpan].
//  const Text.rich(this.textSpan, {
  Text constructorRich(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return Text.rich(
      XSJSParse.getObject(context, bo, map, "data"),
      key: XSJSParse.getKey(context, bo, map, "key"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      softWrap: XSJSParse.getBool(context, bo, map, "softWrap"),
      overflow: XSJSParse.getTextOverflow(context, bo, map, "overflow"),
      textScaleFactor: XSJSParse.getDouble(context, bo, map, "textScaleFactor"),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines"),
      semanticsLabel: XSJSParse.getString(context, bo, map, "semanticsLabel"),
      textWidthBasis: XSJSParse.getTextWidthBasis(context, bo, map, "textWidthBasis"),
    );
  }
}

//****** TextSpan ******/
class XSProxyTextSpan extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "TextSpan";
    return {
      regClassName1: () => XSProxyTextSpan()..init(className: regClassName1)
    };
  }

  @override
  TextSpan constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TextSpan(
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      text: XSJSParse.getString(context, bo, map, "text"),
      children: toListT<TextSpan>(XSJSParse.getObject(context, bo, map, "children")),
      //recognizer: XSJSParse.getObject(context, bo, map, "recognizer"),
      semanticsLabel: XSJSParse.getString(context, bo, map, "semanticsLabel"),
    );
  }
}

//****** LabelTitle ******/
class XSProxyLabelTitle extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "LabelTitle";
    return {
      regClassName1: () => XSProxyLabelTitle()..init(className: regClassName1)
    };
  }

  @override
  LabelTitleWidget constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return LabelTitleWidget(
      label: XSJSParse.getString(context, bo, map, "label"),
      title: XSJSParse.getString(context, bo, map, "title"),
      labelStyle: XSJSParse.getTextStyle(context, bo, map, "labelStyle"),
      titleStyle: XSJSParse.getTextStyle(context, bo, map, "titleStyle"),
    );
  }
}

//****** IconSpan ******/
class XSProxyIconSpan extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName1 = "IconSpan";
    return {
      regClassName1: () => XSProxyIconSpan()..init(className: regClassName1)
    };
  }

  @override
  IconSpan constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return IconSpan(
      icon: XSJSParse.getIconData(context, bo, map, "icon"),
      color: XSJSParse.getColor(context, bo, map, "color", defaultValue: Colors.red),
      fontSize: XSJSParse.getDouble(context, bo, map, "fontSize", defaultValue: 24),
      //recognizer: XSJSParse.getObject(context, bo, map, "recognizer"),
    );
  }
}

//****** TextFormField ******/
class XSProxyTextFormField extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TextFormField";
    return {
      regClassName: () => XSProxyTextFormField()..init(className: regClassName)
    };
  }

  @override
  TextFormField constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TextFormField(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      initialValue: XSJSParse.getString(context, bo, map, "initialValue"),
      focusNode: XSJSParse.getFocusNode(context, bo, map, "focusNode"),
      decoration: XSJSParse.getInputDecoration(context, bo, map, "decoration", defaultValue: const InputDecoration()),
      keyboardType: XSJSParse.getTextInputType(context, bo, map, "keyboardType"),
      textCapitalization: XSJSParse.getTextCapitalization(context, bo, map, "textCapitalization", defaultValue: TextCapitalization.none),
      textInputAction: XSJSParse.getTextInputAction(context, bo, map, "textInputAction"),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      textAlignVertical: XSJSParse.getTextAlignVertical(context, bo, map, "textAlignVertical"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign", defaultValue: TextAlign.start),

      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      readOnly: XSJSParse.getBool(context, bo, map, "readOnly", defaultValue: false),
      toolbarOptions: XSJSParse.getToolbarOptions(context, bo, map, "toolbarOptions"),
      showCursor: XSJSParse.getBool(context, bo, map, "showCursor"),
      obscuringCharacter: XSJSParse.getString(context, bo, map, "obscuringCharacter", defaultValue: "•"),

      obscureText: XSJSParse.getBool(context, bo, map, "obscureText", defaultValue: false),
      autocorrect: XSJSParse.getBool(context, bo, map, "autocorrect", defaultValue: true),
      smartDashesType: XSJSParse.getSmartDashesType(context, bo, map, "smartDashesType"),
      smartQuotesType: XSJSParse.getSmartQuotesType(context, bo, map, "smartQuotesType"),
      maxLengthEnforced: XSJSParse.getBool(context, bo, map, "maxLengthEnforced", defaultValue: true),
      enableSuggestions: XSJSParse.getBool(context, bo, map, "enableSuggestions", defaultValue: true),

      maxLines: XSJSParse.getInt(context, bo, map, "maxLines", defaultValue: 1),
      minLines: XSJSParse.getInt(context, bo, map, "minLines"),
      maxLength: XSJSParse.getInt(context, bo, map, "maxLength"),
      expands: XSJSParse.getBool(context, bo, map, "expands", defaultValue: false),
      onChanged: XSJSParse.getValueChanged<String>(context, bo, map, "onChanged"),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      onEditingComplete: XSJSParse.getVoidCallback(context, bo, map, "onEditingComplete"),
      onFieldSubmitted: XSJSParse.getValueChanged<String>(context, bo, map, "onFieldSubmitted"),
      onSaved: XSJSParse.getValueChanged<String>(context, bo, map, "onSaved"),
      validator: XSJSParse.getValueChanged<String>(context, bo, map, "validator"),
      inputFormatters: XSJSParse.getTextInputFormatterList(context, bo, map, "inputFormatters"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled", defaultValue: true),
      cursorWidth: XSJSParse.getDouble(context, bo, map, "cursorWidth", defaultValue: 2.0),
      cursorRadius: XSJSParse.getRadius(context, bo, map, "cursorRadius"),
      cursorColor: XSJSParse.getColor(context, bo, map, "cursorColor"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),
      keyboardAppearance: XSJSParse.getBrightness(context, bo, map, "keyboardAppearance"),
      scrollPadding: XSJSParse.getEdgeInsets(context, bo, map, "scrollPadding", defaultValue: const EdgeInsets.all(20.0)),
      enableInteractiveSelection: XSJSParse.getBool(context, bo, map, "enableInteractiveSelection", defaultValue: true),
      scrollPhysics: XSJSParse.getScrollPhysics(context, bo, map, "scrollPhysics"),
      //buildCounter: createBuildCounterHandle(bo, map["buildCounter"]),
    );
  }

  InputCounterWidgetBuilder createBuildCounterHandle(XSJsonBuildOwner bo, dynamic eventCallbackID) {
    if (eventCallbackID == null) {
      return null;
    }

    InputCounterWidgetBuilder cb = (
      BuildContext context, {
      int currentLength,
      int maxLength,
      bool isFocused,
    }) {
      bo.eventCallback(eventCallbackID);
      //TODO:return widget
      return null;
    };

    return cb;
  }
}

//****** TextField ******/
class XSProxyTextField extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TextField";
    return {
      regClassName: () => XSProxyTextField()..init(className: regClassName)
    };
  }

  @override
  TextField constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TextField(
      key: XSJSParse.getKey(context, bo, map, "key"),
      controller: XSJSParse.getObject(context, bo, map, "controller"),
      focusNode: XSJSParse.getFocusNode(context, bo, map, "focusNode"),
      decoration: XSJSParse.getObject(context, bo, map, "decoration", defaultValue: const InputDecoration()),
      keyboardType: XSJSParse.getTextInputType(context, bo, map, "keyboardType"),
      textInputAction: XSJSParse.getTextInputAction(context, bo, map, "textInputAction"),
      textCapitalization: XSJSParse.getTextCapitalization(context, bo, map, "textCapitalization", defaultValue: TextCapitalization.none),
      style: XSJSParse.getTextStyle(context, bo, map, "style"),
      textAlign: XSJSParse.getTextAlign(context, bo, map, "textAlign", defaultValue: TextAlign.start),
      textAlignVertical: XSJSParse.getTextAlignVertical(context, bo, map, "textAlignVertical"),
      textDirection: XSJSParse.getTextDirection(context, bo, map, "textDirection"),
      readOnly: XSJSParse.getBool(context, bo, map, "readOnly", defaultValue: false),
      toolbarOptions: XSJSParse.getToolbarOptions(context, bo, map, "toolbarOptions"),
      showCursor: XSJSParse.getBool(context, bo, map, "showCursor"),
      autofocus: XSJSParse.getBool(context, bo, map, "autofocus", defaultValue: false),
      obscuringCharacter: XSJSParse.getString(context, bo, map, "obscuringCharacter", defaultValue: "•"),
      obscureText: XSJSParse.getBool(context, bo, map, "obscureText", defaultValue: false),
      autocorrect: XSJSParse.getBool(context, bo, map, "autocorrect", defaultValue: true),
      smartDashesType: XSJSParse.getSmartDashesType(context, bo, map, "smartDashesType"),
      smartQuotesType: XSJSParse.getSmartQuotesType(context, bo, map, "smartQuotesType"),
      enableSuggestions: XSJSParse.getBool(context, bo, map, "autocorrect", defaultValue: true),
      maxLines: XSJSParse.getInt(context, bo, map, "maxLines", defaultValue: 1),
      minLines: XSJSParse.getInt(context, bo, map, "minLines"),

      expands: XSJSParse.getBool(context, bo, map, "expands", defaultValue: false),
      maxLength: XSJSParse.getInt(context, bo, map, "maxLength"),
      maxLengthEnforced: XSJSParse.getBool(context, bo, map, "maxLengthEnforced", defaultValue: true),

      onChanged: XSJSParse.getValueChanged<String>(context, bo, map, "onChanged"),
      onEditingComplete: XSJSParse.getVoidCallback(context, bo, map, "onEditingComplete"),
      onSubmitted: XSJSParse.getValueChanged<String>(context, bo, map, "onSubmitted"),
      strutStyle: XSJSParse.getStrutStyle(context, bo, map, "strutStyle"),

      inputFormatters: XSJSParse.getTextInputFormatterList(context, bo, map, "inputFormatters"),
      enabled: XSJSParse.getBool(context, bo, map, "enabled"),
      cursorWidth: XSJSParse.getDouble(context, bo, map, "cursorWidth", defaultValue: 2.0),
      cursorRadius: XSJSParse.getRadius(context, bo, map, "cursorRadius"),
      cursorColor: XSJSParse.getColor(context, bo, map, "cursorColor"),
      selectionHeightStyle: XSJSParse.getBoxHeightStyle(context, bo, map, "selectionHeightStyle", defaultValue: BoxHeightStyle.tight),
      selectionWidthStyle: XSJSParse.getBoxWidthStyle(context, bo, map, "selectionWidthStyle", defaultValue: BoxWidthStyle.tight),
      keyboardAppearance: XSJSParse.getBrightness(context, bo, map, "keyboardAppearance"),
      enableInteractiveSelection: XSJSParse.getBool(context, bo, map, "enableInteractiveSelection", defaultValue: true),
      onTap: XSJSParse.getVoidCallback(context, bo, map, "onTap"),
      scrollPadding: XSJSParse.getEdgeInsets(context, bo, map, "scrollPadding", defaultValue: const EdgeInsets.all(20.0)),
      dragStartBehavior: XSJSParse.getDragStartBehavior(context, bo, map, "dragStartBehavior", defaultValue: DragStartBehavior.start),
      scrollController: XSJSParse.getObject(context, bo, map, "scrollController"),
      scrollPhysics: XSJSParse.getScrollPhysics(context, bo, map, "scrollPhysics"),

      //buildCounter: XSJSParse.getObject(context, bo, map, "buildCounter"),
    );
  }
}

//****** TextEditingController ******
class XSProxyTextEditingController extends XSJsonObjProxy {
  static Map<String, CreateJsonObjProxyFun> registerProxy() {
    final String regClassName = "TextEditingController";
    return {
      regClassName: () => XSProxyTextEditingController()..init(className: regClassName)
    };
  }

  @override
  TextEditingController constructor(XSJsonBuildOwner bo, Map<String, dynamic> map, {BuildContext context}) {
    return TextEditingController(
      text: XSJSParse.getString(context, bo, map, "text"),
    );
  }

  @override
  void jsInvokeMirrorObjFunction(String mirrorID, dynamic mirrorObj, String funcName, Map args, {InvokeCallback callback}) {
    if (mirrorObj == null || !(mirrorObj is TextEditingController)) {
      return;
    }
    var tc = mirrorObj as TextEditingController;
    if (funcName == "clear") {
      tc.clear();
      return;
    }

    if (funcName == "getText") {
      if (callback != null) {
        callback(tc.text);
      }
      return;
    }

    if (funcName == "setText") {
      tc.text = XSJSParse.getString(null, null, args, "test");
      return;
    }
  }
}
