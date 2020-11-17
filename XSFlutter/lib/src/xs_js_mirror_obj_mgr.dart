//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

class XSJSMirrorObjMgr {
  //单例代码
  static XSJSMirrorObjMgr _instance;

  static XSJSMirrorObjMgr getInstance() {
    if (_instance == null) {
      _instance = XSJSMirrorObjMgr._();
    }

    return _instance;
  }

  factory XSJSMirrorObjMgr() {
    return XSJSMirrorObjMgr.getInstance();
  }

  XSJSMirrorObjMgr._();
  //----
  // ignore: non_constant_identifier_names
  Map<String, dynamic> g_mirrorObjectMap = {};

  String getJsonObjMirrorID(Map jsonMap) {
    dynamic mirrorID = jsonMap["mirrorID"];
    return mirrorID;
  }

  dynamic getMirrorObjectFromMap(Map jsonMap) {
    dynamic mirrorID = jsonMap["mirrorID"];
    if (mirrorID == null) {
      return null;
    }
    return g_mirrorObjectMap[mirrorID];
  }

  dynamic getMirrorObjectFromID(dynamic mirrorID) {
    if (mirrorID == null) {
      return;
    }
    return g_mirrorObjectMap[mirrorID];
  }

  void addMirrorObject(dynamic mirrorID, dynamic mirrorObj) {
    if (mirrorID == null || mirrorObj == null) {
      return;
    }

    g_mirrorObjectMap[mirrorID] = mirrorObj;
  }

  void removeMirrorObject(dynamic mirrorID) {
    g_mirrorObjectMap.remove(mirrorID);
  }

  void removeMirrorObjects(List mirrorIDList) {
    for (var mirrorID in mirrorIDList) {
      g_mirrorObjectMap.remove(mirrorID);
    }
  }

  void clearMirrorObjects() {
    g_mirrorObjectMap.clear();
  }
}
