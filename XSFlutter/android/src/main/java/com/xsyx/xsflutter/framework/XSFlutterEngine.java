//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

package com.xsyx.xsflutter.framework;

import android.text.TextUtils;

import com.xsyx.xsflutter.XSFlutterPlugin;
import com.xsyx.xsflutter.framework.utils.FileUtils;
import com.xsyx.xsflutter.framework.utils.LogUtilsKt;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import io.flutter.Log;
import io.flutter.plugin.common.BinaryMessenger;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel;
import io.flutter.plugin.common.BasicMessageChannel;
import io.flutter.plugin.common.StringCodec;

public class XSFlutterEngine {

    public static final String TAG = "XSFlutterEngine";

    public String mJsFrameworkPath;
    public String mCurrentJSAppPath;
    public ArrayList<String> mJsAppSearchPathList;

    private XSFlutterApp currentApp;

    private XSFlutterPlugin mContext;
    private BinaryMessenger mFlutterEngine;

    private XSJSEngine mJsEngine;

    //Flutter通道
    private static final String FLUTTER_METHED_CHANNEL_NAME = "js_flutter.flutter_main_channel";
    private static final String FLUTTER_COMMON_BASIC_CHANNEL_NAME = "xsflutter_common_basic_channel";
    MethodChannel jsFlutterAppChannel;
    BasicMessageChannel<String> jsFlutterCommonBasicChannel;

    private boolean isFlutterEngineIsDidRender;
    private ArrayList<MethodCall> callFlutterQueue;

    public XSFlutterEngine(XSFlutterPlugin context, BinaryMessenger flutterEngine) {
        this.mContext = context;
        this.mFlutterEngine = flutterEngine;
        setup();
    }

    public void setJsEngine(XSJSEngine jsEngine) {
        mJsEngine = jsEngine;
    }

    public void setup() {
        setupChannel();
//        callFlutterQueue = new ArrayList<>(1);
//        isFlutterEngineIsDidRender = true;
//        for (MethodCall call : callFlutterQueue) {
//            jsFlutterAppChannel.invokeMethod(call.method, call.arguments);
//        }
    }

    public void setupChannel() {
        jsFlutterAppChannel = new MethodChannel(mFlutterEngine, FLUTTER_METHED_CHANNEL_NAME);
        jsFlutterAppChannel.setMethodCallHandler(new MethodChannel.MethodCallHandler() {
            @Override
            public void onMethodCall(MethodCall methodCall, MethodChannel.Result result) {
                if (methodCall.method.equals("callNativeRunJSApp")) {
                    String jsAppPath = methodCall.argument("jsAppPath");
                    String jsAppAssetsKey = methodCall.argument("jsAppAssetsKey");
                    List<String> jsAppSearchPathList = (List<String>) methodCall.argument("jsAppSearchPathList");
                    List<String> jsAppSearchPathWithAssetsKeyList = (List<String>) methodCall.argument("jsAppSearchPathWithAssetsKeyList");
                    runApp(jsAppPath, jsAppAssetsKey, jsAppSearchPathList, jsAppSearchPathWithAssetsKeyList);
                    result.success("success");
                } else if (methodCall.method.equals("callJsCallbackFunction")) {
                    String jsAppName = methodCall.argument("callbackId");
                    Map param = methodCall.argument("param");
                    mJsEngine.callJSCallbackFunction(jsAppName, param);
                    result.success("success");
                } else if (methodCall.method.equals("mxLog")) {
                    Log.i(TAG, methodCall.arguments.toString());
                }
            }
        });

        jsFlutterCommonBasicChannel = new BasicMessageChannel<>(mFlutterEngine, FLUTTER_COMMON_BASIC_CHANNEL_NAME, StringCodec.INSTANCE);
        jsFlutterCommonBasicChannel.setMessageHandler(new BasicMessageChannel.MessageHandler<String>() {
            @Override
            public void onMessage(String message, BasicMessageChannel.Reply<String> reply) {
                mJsEngine.jsExecutor.invokeJSValueWithString(XSJSExecutor.runtime, "mxfJSBridgeInvokeJSCommonChannel", message, new XSJSExecutor.InvokeJSValueCallback() {
                    @Override
                    public void onSuccess(Object value) {
                        reply.reply(value.toString());
                    }

                    @Override
                    public void onError(Error error) {

                    }
                });
            }
        });
    }

    public void destroy() {
        if (currentApp != null) {
            currentApp.close();
        }
    }

    public boolean showPage(String pageName) {
        return true;
    }

    public void runApp(String jsAppPath, String jsAppAssetsKey, List<String> jsAppSearchPathList, List<String> jsAppSearchPathWithAssetsKeyList) {
        Set<String> searchList = new HashSet<String>();

        if (!TextUtils.isEmpty(mCurrentJSAppPath)) {
            LogUtilsKt.XSFlutterLog("XSFlutterEngine Native工程，设置了currentJSAppPath，RunJSApp使用Native设置的路径 appPath:%s", mCurrentJSAppPath);
            jsAppPath = mCurrentJSAppPath;
            jsAppSearchPathList = mJsAppSearchPathList;
        } else {
            if (TextUtils.isEmpty(jsAppPath) && !TextUtils.isEmpty(jsAppAssetsKey)) {
                jsAppPath = mContext.mFlutterPluginBinding.getFlutterAssets().getAssetFilePathByName(jsAppAssetsKey);
            }
            if (TextUtils.isEmpty(jsAppPath)) {
                LogUtilsKt.XSFlutterLog("jsAppPath == null", "");
                return;
            }
        }
        if (jsAppSearchPathList != null && jsAppSearchPathList.size() > 0)
            searchList.addAll(jsAppSearchPathList);
        if (jsAppSearchPathWithAssetsKeyList != null && jsAppSearchPathWithAssetsKeyList.size() > 0) {
            for (String searchPathAssetKey : jsAppSearchPathWithAssetsKeyList) {
                String path;
                if(FileUtils.isCopiedFileFromAssets(mContext.mFlutterPluginBinding.getApplicationContext())){
                    path = searchPathAssetKey;
                }else {
                    path = mContext.mFlutterPluginBinding.getFlutterAssets().getAssetFilePathByName(searchPathAssetKey);
                }
                if (!TextUtils.isEmpty(path) && !searchList.contains(path)) {
                    searchList.add(path);
                }
            }
        }
        jsAppSearchPathList = new ArrayList<>(searchList);

        if (currentApp != null) {
            currentApp.close();
            currentApp = null;
        }

        currentApp = new XSFlutterApp();
        currentApp.initWithAppName(mContext, jsAppPath, jsAppPath, jsAppSearchPathList, this);
        currentApp.runAppWithPageName();
    }

    public void callFlutterReloadAppWithJSWidgetData(String widgetData) {
        callFlutterReloadAppWithRouteName("XSJSWidget", widgetData);
    }

    @SuppressWarnings("unchecked")
    public void callFlutterReloadAppWithRouteName(String routeName, String widgetData) {
        FileUtils.assertUiThread();

        if (routeName == null || widgetData == null) {
            return;
        }

        Map arg = new HashMap();
        arg.put("routeName", routeName);
        arg.put("widgetData", widgetData);
        MethodCall call = new MethodCall("reloadApp", arg);
//      if (isFlutterEngineIsDidRender) {
//          callFlutterQueue.add(call);
//          return;
//      }
        jsFlutterAppChannel.invokeMethod(call.method, call.arguments);
    }

    //顶层通用通道
    @SuppressWarnings("unchecked")
    public void invokeFlutterCommonChannel(String callJSONStr, BasicMessageChannel.Reply<String> Reply) {
        FileUtils.assertUiThread();
        jsFlutterCommonBasicChannel.send(callJSONStr, Reply);
    }

    @SuppressWarnings("unchecked")
    public void callFlutterMethodChannelInvoke(String channelName, String methodName, Map params, MethodChannel.Result callback) {
        FileUtils.assertUiThread();

        Map arg = new HashMap();
        arg.put("channelName", channelName);
        arg.put("params", params);
        arg.put("methodName", methodName);

        MethodCall call = new MethodCall("xsflutterBridgeMethodChannelInvoke", arg);
        jsFlutterAppChannel.invokeMethod(call.method, call.arguments, callback);
    }

    @SuppressWarnings("unchecked")
    public void callFlutterEventChannelReceiveBroadcastStreamListenInvoke(String channelName, String streamParam, String onDataId, String onErrorId, String onDoneId, boolean cancelOnError) {
        FileUtils.assertUiThread();

        Map arg = new HashMap();
        arg.put("channelName", channelName);
        arg.put("streamParam", streamParam);
        arg.put("onDataId", onDataId);
        arg.put("onErrorId", onErrorId);
        arg.put("onDoneId", onDoneId);
        arg.put("cancelOnError", cancelOnError);

        MethodCall call = new MethodCall("xsflutterBridgeEventChannelReceiveBroadcastStreamListenInvoke", arg);
        jsFlutterAppChannel.invokeMethod(call.method, call.arguments);
    }
}
