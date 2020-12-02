/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 获取包信息
 */

import 'package:package_info/package_info.dart';

class XSPackageInfo {
  static String appName = ""; //应用名称
  static String packageName = ""; //包名称
  static String version = ""; //版本号
  static String buildNumber = ""; //小版本号

  static bool _isInit = false;

  /*
  * 初始化屏幕参数
  * width:设计稿宽度
  * height:设计稿高度
  * density:设计稿密度
  * isUseRatio:是否使用设计缩放
  * */
  static void init() async {
    if (!_isInit) {
      _isInit = true;
      PackageInfo packageInfo = await PackageInfo.fromPlatform();
      XSPackageInfo.appName = packageInfo.appName; //应用名称
      XSPackageInfo.packageName = packageInfo.packageName; //包名称
      XSPackageInfo.version = packageInfo.version; //版本号
      XSPackageInfo.buildNumber = packageInfo.buildNumber; //小版本号
    }
  }
}
