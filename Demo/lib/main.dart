import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
//xsflutter
import 'package:xsflutter/xsflutter.dart';
import 'custom_js_api.dart';

void main() {
  //-------1. XSFlutter 启动---------
  XSFlutter.getInstance().runJSApp();

  //注册自定义JSApi，可以在JS侧调用自定义dart代码，先在XSJsonObjToDartObject这里注册，可以搜索CustomJSApi 看增加过程
  XSFlutter.getInstance().registerMirrorObjProxy(CustomJSApiProxy.registerProxy());

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.red,
        ),
        //方法一
        navigatorKey: XSLoading.instance.getNavigatorKey(),
        localeListResolutionCallback: (List<Locale> locales, Iterable<Locale> supportedLocales) {
          return Locale('zh');
        },
        localeResolutionCallback: (Locale locale, Iterable<Locale> supportedLocales) {
          return Locale('zh');
        },
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          GlobalCupertinoLocalizations.delegate,
        ],
        supportedLocales: [
          const Locale('zh', 'CH'),
        ],
        home: MyFlutterExampleHome());
  }
}

class MyFlutterExampleHome extends StatelessWidget {
  MyFlutterExampleHome();

  @override
  Widget build(BuildContext context) {
    //初始化界面
    XSScreenInfo.init(context);
    XSPackageInfo.init();

    return Scaffold(
        appBar: AppBar(
          leading: FlutterLogo(textColor: Colors.blue),
          title: Text('XSFlutter Demo'),
        ),
        body: ListView(
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.book),
              trailing: Icon(Icons.arrow_right),
              title: Text('XSFlutter Demo'),
              subtitle: Text('打开XSFlutter JavaScript开发的示例页面'),
              onTap: () {
                //-------2. XSFlutter push 一个使用XSFlutter框架，JS编写的页面
                //XSJSPageWidget的参数 jsWidgetName: "MyJSWidgetHomePage",在js_src/main.js  MyApp::createJSWidgetWithName 函数中使用，
                //创建你需要的XS JS Widget
                Navigator.push(context, MaterialPageRoute(builder: (context) => XSJSPageWidget(jsWidgetName: "MyHomePage")));
              },
            ),
            ListTile(
              leading: Icon(
                Icons.refresh,
                semanticLabel: 'ReloadJSApp',
                color: Colors.red,
              ),
              title: Text('Reload JSApp'),
              subtitle: Text('点击热重载JSApp，重新进入上面的XSFlutter Demo，即可看到界面更新'),
              isThreeLine: true,
              onTap: () {
                XSFlutter.getInstance().runJSApp();
              },
            ),
            ListTile(
              title: Text('在此页面可以打开Safari浏览器-> 开发->模拟器。 然后点击XSFlutter Demo，可以在Safari调试JS'),
            )
          ],
        ));
  }
}
