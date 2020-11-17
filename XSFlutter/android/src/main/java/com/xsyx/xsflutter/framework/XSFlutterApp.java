//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

package com.xsyx.xsflutter.framework;

import android.content.Context;

import com.eclipsesource.v8.V8Object;
import com.xsyx.xsflutter.XSFlutterPlugin;
import com.xsyx.xsflutter.framework.utils.FileUtils;
import com.xsyx.xsflutter.framework.utils.LogUtilsKt;
import com.xsyx.xsflutter.framework.utils.XSJsScheduledExecutorService;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import io.flutter.plugin.common.BasicMessageChannel;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.StringCodec;

import static com.xsyx.xsflutter.XSFlutterPlugin.*;

public class XSFlutterApp {

    public static final String TAG = "XSFlutterApp";

    static XSFlutterEngine jsFlutterEngineStatic;

    private XSFlutterPlugin mContext;

    private String appName;
    private String rootPath;
    private List<String> jsAppSearchPathList;
    private XSFlutterEngine jsFlutterEngine;

    private XSJSEngine jsEngine;
    private XSJSExecutor jsExecutor;

    private boolean isJSAPPRun;
    private XSFlutterApp currentApp;
    private V8Object jsAppObj;

    //Flutter通道
    private static final String XSFLUTTER_METHED_CHANNEL_APP = "js_flutter.js_flutter_app_channel";
    private static final String XSFLUTTER_METHED_CHANNEL_APP_REBUILD = "js_flutter.js_flutter_app_channel.rebuild";
    private static final String XSFLUTTER_METHED_CHANNEL_APP_NAVIGATOR_PUSH = "js_flutter.js_flutter_app_channel.navigator_push";

    MethodChannel jsFlutterAppChannel;
    BasicMessageChannel<String> jsFlutterAppRebuildChannel;
    BasicMessageChannel<String> jsFlutterAppNavigatorePushChannel;

    private ArrayList<MethodCall> callJSMethodQueue;

    public XSFlutterApp initWithAppName(XSFlutterPlugin context, String appName, String rootPath, List<String> jsAppSearchPathList, XSFlutterEngine jsFlutterEngine) {
        initRuntime(context.mFlutterPluginBinding.getApplicationContext());
        this.mContext = context;
        this.appName = appName;
        this.rootPath = rootPath;
        this.jsAppSearchPathList = jsAppSearchPathList;
        this.jsFlutterEngine = jsFlutterEngine;
        jsFlutterEngineStatic = jsFlutterEngine;
        isJSAPPRun = false;

        callJSMethodQueue = new ArrayList<>(1);

        setupJSEngine(jsFlutterEngine);
        setUpChannel(context.mFlutterPluginBinding.getBinaryMessenger());

        currentApp = this;
        return this;
    }

    private void initRuntime(Context context) {
        initJsFS(context);
    }

    //js文件转移到fs中
    private void initJsFS(Context context) {
        if (FileUtils.isNeedCopyFileFromAssets(context)) {
            new Thread() {
                @Override
                public void run() {
                    super.run();
                    FileUtils.copyFilesFromAssetsAsync(context,
                            Arrays.asList(new XSRoute[]{
                                    new XSRoute(XSFLUTTER_ASSET_APP_ROOT_PATH, JSFLUTTER_LOCAL_DIR + XSFLUTTER_FS_APP_ROOT_PATH),
                                    new XSRoute(XSFLUTTER_ASSET_FRAMWORK_ROOT_PATH, JSFLUTTER_LOCAL_DIR + XSFLUTTER_FS_FRAMWORK_ROOT_PATH)}));
                }
            }.start();
        }
    }

    private void setupJSEngine(XSFlutterEngine jsFlutterEngine) {

        jsEngine = new XSJSEngine(mContext, jsFlutterEngine);
        jsFlutterEngine.setJsEngine(jsEngine);

        jsExecutor = jsEngine.jsExecutor;

        //JSFlutter JS运行库搜索路径
        jsEngine.addSearchDir(jsFlutterEngine.mJsFrameworkPath);
        jsEngine.addSearchDir(jsFlutterEngine.mJsFrameworkPath + "/framework");
        //JSFlutter Dart JS运行库搜索路径
        jsEngine.addSearchDir(jsFlutterEngine.mJsFrameworkPath + "/framework/dart_js_framework");

        //app业务代码搜索路径
        jsEngine.addSearchDir(rootPath);

        for (String appSearchPath : jsAppSearchPathList) {
            jsEngine.addSearchDir(appSearchPath);
        }

    }

    //flutter --> js
    void setUpChannel(BinaryMessenger flutterViewController) {
        jsFlutterAppChannel = new MethodChannel(flutterViewController, XSFLUTTER_METHED_CHANNEL_APP);
        jsFlutterAppChannel.setMethodCallHandler(new MethodChannel.MethodCallHandler() {
            @Override
            public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
                if (currentApp == null)
                    return;

                if (methodCall.method.equals("callJS")) {
                    LogUtilsKt.XSFlutterLog("XSFlutter : jsFlutterAppChannel callJS:%s", (String) ((Map) methodCall.arguments).get("method"));
                    if (!isJSAPPRun) {
                        LogUtilsKt.XSFlutterLog("XSFlutter : jsFlutterAppChannel callJS:%s JSAPP not running", (String) ((Map) methodCall.arguments).get("method"));
                        callJSMethodQueue.add(methodCall);
                        return;
                    }
                    currentApp.jsExecutor.execute(new XSJsScheduledExecutorService.XSJsTask() {
                        @Override
                        public void excute() {
                            if (jsAppObj == null) return;
                            currentApp.jsExecutor.invokeJSValue(jsAppObj, "nativeCall", (Map) methodCall.arguments, new XSJSExecutor.InvokeJSValueCallback() {
                                @Override
                                public void onSuccess(Object value) {

                                }

                                @Override
                                public void onError(Error error) {

                                }
                            });
                        }
                    });
                }
            }
        });

        // Rebuild方法采用BasicMessageChannel
        jsFlutterAppRebuildChannel = new BasicMessageChannel<>(flutterViewController, XSFLUTTER_METHED_CHANNEL_APP_REBUILD, StringCodec.INSTANCE);
        // navigator_push方法采用BasicMessageChannel
        jsFlutterAppNavigatorePushChannel = new BasicMessageChannel<>(flutterViewController, XSFLUTTER_METHED_CHANNEL_APP_NAVIGATOR_PUSH, StringCodec.INSTANCE);
    }


    public void close() {
        this.jsExecutor.execute(new XSJsScheduledExecutorService.XSJsTask() {
            @Override
            public void excute() {
                //todo app release
                JSModule.clearModuleCache(XSJSExecutor.runtime);

                if (jsAppObj != null) {
                    jsAppObj.close();
                }
            }
        });
        this.jsExecutor.close();
    }

    public void runApp() {
        isJSAPPRun = false;
        runAppWithPageName();
    }

    public void runAppWithPageName() {
        LogUtilsKt.XSFlutterLog("XSFlutterApp : runApp：%s", appName);

        jsExecutor.execute(new XSJsScheduledExecutorService.XSJsTask() {
            @Override
            public void excute() {
                XSNativeJSFlutterApp XSNativeJSFlutterApp = new XSNativeJSFlutterApp();
                V8Object v8Object = new V8Object(XSJSExecutor.runtime);
                XSJSExecutor.runtime.add("XSNativeJSFlutterApp", v8Object);
                v8Object.registerJavaMethod(XSNativeJSFlutterApp, "setCurrentJSApp",
                        "setCurrentJSApp", new Class<?>[]{V8Object.class});
                v8Object.registerJavaMethod(XSNativeJSFlutterApp,
                        "callFlutterReloadApp", "callFlutterReloadApp", new Class<?>[]{V8Object.class, String.class});
                v8Object.registerJavaMethod(XSNativeJSFlutterApp,
                        "callFlutterWidgetChannel", "callFlutterWidgetChannel", new Class<?>[]{String.class, String.class});
            }
        });

        jsExecutor.executeScriptPath(rootPath + "/main.js", new XSJSExecutor.ExecuteScriptCallback() {
            @Override
            public void onComplete(Object value) {
                jsExecutor.executeScript("main()", new XSJSExecutor.ExecuteScriptCallback() {
                    @Override
                    public void onComplete(Object value) {
                        isJSAPPRun = true;
                        callJSMethodCallQueqe();
                    }
                });
            }
        });
    }

    private void callJSMethodCallQueqe() {
        for (MethodCall call : callJSMethodQueue) {
            jsFlutterAppChannel.invokeMethod(call.method, call.arguments);
        }
        callJSMethodQueue.clear();
    }

    //js 注入对象
    class XSNativeJSFlutterApp {

        //js --> native
        public void setCurrentJSApp(V8Object jsApp) {
            jsAppObj = jsApp.twin();
        }

        //js --> flutter
        public void callFlutterReloadApp(V8Object jsApp, String widgetData) {
            jsAppObj = jsApp.twin();

            mContext.getMainHandler().post(new Runnable() {
                @Override
                public void run() {
                    jsFlutterEngine.callFlutterReloadAppWithJSWidgetData(widgetData);
                }
            });
        }

        //js --> flutter
        public void callFlutterWidgetChannel(String methodName, String args) {
//            String[] datas = args.getKeys();
//            HashMap dataMap =  new HashMap();
//            for (int i = 0; i < datas.length; i++) {
//                dataMap.put(datas[i],args.get(datas[i]));
//            }
            mContext.getMainHandler().post(new Runnable() {
                @Override
                public void run() {
                    if (methodName.equals("rebuild")) {
                        jsFlutterAppRebuildChannel.send(args);
                    } else if (methodName.equals("navigatorPush")) {
                        jsFlutterAppNavigatorePushChannel.send(args);
                    } else {
                        jsFlutterAppChannel.invokeMethod(methodName, args);
                    }
                }
            });
        }
    }

    public static class XSRoute {
        public String assetsPath;
        public String localPath;

        public XSRoute(String assetsPath, String localPath) {
            this.assetsPath = assetsPath;
            this.localPath = localPath;
        }
    }
}
