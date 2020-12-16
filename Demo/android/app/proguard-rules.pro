## ------------------------------------- 混淆基础配置 ---------------------------------------------
-optimizationpasses 5                               # 指定代码的压缩级别
-dontusemixedcaseclassnames                         # 混淆时不会产生形形色色的类名
-dontskipnonpubliclibraryclasses                    # 指定不去忽略非公共的库类
-dontskipnonpubliclibraryclassmembers               # 指定不去忽略包可见的库类的成员
-dontpreverify                                      # 不预校验
-ignorewarnings                                     # 屏蔽警告
-verbose                                            # 混淆时记录日志
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*    #优化
-keepattributes *Annotation*                        # 保护代码中的Annotation不被混淆
-keepattributes Signature                           # 避免混淆泛型, 这在JSON实体映射时非常重要
-keepattributes SourceFile,LineNumberTable          # 抛出异常时保留代码行号

#flutter
#-keep class io.flutter.app.** { *; }
#-keep class io.flutter.plugin.**  { *; }
#-keep class io.flutter.util.**  { *; }
#-keep class io.flutter.view.**  { *; }
-keep class io.flutter.**  { *; }
#-keep class io.flutter.plugins.**  { *; }

#js
# V8引擎及与引擎相关的代码不能混淆
-keep class com.eclipsesource.v8.**  { *; }
-keep class com.xsyx.xsflutter.**  { *; }
#-keep class * implements com.eclipsesource.v8.JavaVoidCallback  { *; }
#-keep class com.mojitox.mxflutter.framework.XSJSEngine*  { *; }
#-keep class com.mojitox.mxflutter.framework.XSJSFlutterApp$XSNativeJSFlutterApp  { *; }
#-keep class com.mojitox.mxflutter.framework.JSModule  { *; }