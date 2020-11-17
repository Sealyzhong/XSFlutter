/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 加载对话框类型
 */

/// loading style
enum XSLoadingStyle {
  light,    //亮色
  dark,     //黑色
  custom,   //自定义
}

/// loading indicator type. see [https://github.com/jogboms/flutter_spinkit#-showcase]
enum XSLoadingIndicatorType {
  fadingCircle,
  circle,
  circular,
}

/// loading mask type
/// [none] default mask type, allow user interactions while loading is displayed
/// [clear] don't allow user interactions while loading is displayed
/// [black] don't allow user interactions while loading is displayed
/// [custom] while mask type is custom, maskColor should not be null
enum XSLoadingMaskType {
  none,
  clear,
  black,
  custom,
}