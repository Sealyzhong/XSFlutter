//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

package com.xsyx.xsflutter.framework;

import android.content.Context;
import android.text.TextUtils;
import android.util.Log;


import com.eclipsesource.v8.JavaCallback;
import com.eclipsesource.v8.JavaVoidCallback;
import com.eclipsesource.v8.V8Array;
import com.eclipsesource.v8.V8Function;
import com.eclipsesource.v8.V8Object;
import com.eclipsesource.v8.utils.V8ObjectUtils;
import com.xsyx.xsflutter.XSFlutterPlugin;
import com.xsyx.xsflutter.framework.utils.FileUtils;
import com.xsyx.xsflutter.framework.utils.LogUtilsKt;
import com.xsyx.xsflutter.framework.utils.XSJsScheduledExecutorService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import io.flutter.plugin.common.BasicMessageChannel;

import androidx.annotation.Nullable;
import io.flutter.plugin.common.MethodChannel;

public class XSJSEngine {
    static private String TAG = "XSJSEngine";

    public XSJSExecutor jsExecutor;

    private XSFlutterEngine mXSFlutterEngine;

    private ArrayList<String> searchDirArray;

    private HashMap<String, V8Function> jsCallbackCache;
    private long jsCallbackCount = 0;

    private XSFlutterPlugin mContext;

    //是否已经加载了asset资源，如果已经加载后则后续全走assets
    private boolean isUsedAssets;

    public XSJSEngine(XSFlutterPlugin context, XSFlutterEngine mxjsFlutterEngine) {
        mContext = context;
        this.mXSFlutterEngine = mxjsFlutterEngine;
        this.searchDirArray = new ArrayList<>();
        isUsedAssets = !FileUtils.isCopiedFileFromAssets(context.mFlutterPluginBinding.getApplicationContext());
        setup();
    }

    private void setup() {
        this.jsExecutor = new XSJSExecutor(mContext);
        jsCallbackCache = new HashMap<String, V8Function>();
        setupBasicJSRuntime();
    }

    private void setupBasicJSRuntime() {

        //------Dart2Js支持------
        JavaVoidCallback nativeLog = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 1);

                Log.d(TAG, args.get(0).toString());
            }
        };
        jsExecutor.registerJavaMethod(nativeLog, "XSNativeLog");

        JavaVoidCallback dartPrint = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 1);

                Log.d(TAG, args.get(0).toString());
            }
        };
        jsExecutor.registerJavaMethod(dartPrint, "dartPrint");

        JavaVoidCallback setTimeout = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                final V8Array local_args = args.twin();
                assetJsFunctionArg(args.length(), 2);

                jsExecutor.executeDelay(new XSJsScheduledExecutorService.XSJsTask() {
                    @Override
                    public void excute() {
                        V8Function function = (V8Function) local_args.get(0);
                        jsExecutor.invokeJsFunction(function, null);
                    }
                }, Long.parseLong(local_args.get(1).toString()));
            }
        };
        jsExecutor.registerJavaMethod(setTimeout, "setTimeout");

        JavaCallback isXSIOS = new JavaCallback() {
            @Override
            public Object invoke(V8Object v8Object, V8Array args) {
                return false;
            }
        };
        jsExecutor.registerJavaMethod(isXSIOS, "isXSIOS");

        JavaCallback isXSAndroid = new JavaCallback() {
            @Override
            public Object invoke(V8Object v8Object, V8Array args) {
                return true;
            }
        };
        jsExecutor.registerJavaMethod(isXSAndroid, "isXSAndroid");
        //------Dart2Js支持------

        //------Flutter Bridge------

        /**
         * @param callJSONStr 透传字段
         * @param needNativeManagedValue JS中需要监控生命周期的对象
         * @param function 回调
         */
        JavaVoidCallback mxfJSBridgeInvokeFlutterCommonChannel = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 2);

                String callJSONStr = args.get(0).toString();
                V8Function function = (V8Function) args.get(1);
                mXSFlutterEngine.invokeFlutterCommonChannel(callJSONStr, new BasicMessageChannel.Reply<String>() {
                    @Override
                    public void reply(String result) {
                        if (result == null) {
                            jsExecutor.invokeJsFunction(function, null);
                        } else if (result instanceof String) {
                            jsExecutor.invokeJsFunctionWithString(function, result);
                        } else {
                            throw new IllegalArgumentException(
                                    "BasicMessageChannel.Reply Must be return String object");
                        }
                    }
                });

            }
        };
        jsExecutor.registerJavaMethod(mxfJSBridgeInvokeFlutterCommonChannel, "mxfJSBridgeInvokeFlutterCommonChannel");

        /**
         * @param channelName 通道名
         * @param methodName 方法名
         * @param params 参数
         * @param function 回调
         */
        JavaVoidCallback xs_jsbridge_MethodChannel_invokeMethod = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 4);

                String channelName = args.get(0).toString();
                String methodName = args.get(1).toString();
                Map params = V8ObjectUtils.toMap((V8Object) args.get(2));
                V8Function function = (V8Function) args.get(3);
                mXSFlutterEngine.callFlutterMethodChannelInvoke(channelName, methodName, params, new MethodChannel.Result() {
                    @Override
                    public void success(@Nullable Object result) {
                        if (result == null) {
                            jsExecutor.invokeJsFunction(function, null);
                        } else if (result instanceof Map) {
                            jsExecutor.invokeJsFunction(function, (Map) result);
                        } else {
                            throw new IllegalArgumentException(
                                    "MethodChannel.Result Must be return Map object");
                        }
                    }

                    @Override
                    public void error(String errorCode, @Nullable String errorMessage, @Nullable Object errorDetails) {
                    }

                    @Override
                    public void notImplemented() {
                    }
                });
            }
        };
        jsExecutor.registerJavaMethod(xs_jsbridge_MethodChannel_invokeMethod, "xs_jsbridge_MethodChannel_invokeMethod");

        /**
         * @param channelName 通道名
         * @param streamParam receiveBroadcastStream参数
         * @param onData 回调
         * @param onError 回调
         * @param onDone 回调
         * @param cancelOnError boolean
         */
        JavaVoidCallback xs_jsbridge_EventChannel_receiveBroadcastStream_listen = new JavaVoidCallback() {
            @Override
            public void invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 6);

                String channelName = args.get(0).toString();
                String streamParam = args.get(1).toString();
                V8Function onData = (V8Function) args.get(2);
                V8Function onError = (V8Function) args.get(3);
                V8Function onDone = (V8Function) args.get(4);
                boolean cancelOnError = (boolean) args.get(5);
                String onDataId = storeJsCallback(onData);
                String onErrorId = storeJsCallback(onError);
                String onDoneId = storeJsCallback(onDone);
                mXSFlutterEngine.callFlutterEventChannelReceiveBroadcastStreamListenInvoke(channelName, streamParam, onDataId, onErrorId, onDoneId, cancelOnError);
            }
        };
        jsExecutor.registerJavaMethod(xs_jsbridge_EventChannel_receiveBroadcastStream_listen, "xs_jsbridge_EventChannel_receiveBroadcastStream_listen");

        //------Flutter Bridge------

        JavaCallback require = new JavaCallback() {
            @Override
            public Object invoke(V8Object v8Object, V8Array args) {
                assetJsFunctionArg(args.length(), 1);

                String filePath = args.get(0).toString();
                String absolutePath = null;
                boolean isFromAsset = !FileUtils.isCopiedFileFromAssets(mContext.mFlutterPluginBinding.getApplicationContext()) || isUsedAssets;
                if (isFromAsset) {
                    absolutePath = FileUtils.getFilePathFromAsset(mContext.mFlutterPluginBinding.getApplicationContext(), filePath, searchDirArray);
                } else {
                    absolutePath = FileUtils.getFilePathFromFS(mContext.mFlutterPluginBinding.getApplicationContext(), filePath, searchDirArray);
                }

                V8Object exports = null;
                if (!TextUtils.isEmpty(absolutePath)) {
                    exports = JSModule.require(filePath, absolutePath, XSJSExecutor.runtime, isFromAsset);
                    if (exports == null) {
                        jsExecutor.executeScript("throw 'not found'", new XSJSExecutor.ExecuteScriptCallback() {
                            @Override
                            public void onComplete(Object value) {

                            }
                        });
                        return null;
                    }
                } else {
                    LogUtilsKt.XSFLogError("XSFlutter : require js file fail, import js file name: %s", filePath);
                }
                return exports;
            }
        };
        jsExecutor.registerJavaMethod(require, "require");


        jsExecutor.execute(new XSJsScheduledExecutorService.XSJsTask() {
            @Override
            public void excute() {
                JSModule.initGlobalModuleCache(XSJSExecutor.runtime);
            }
        });
    }

    void addSearchDir(String dir) {
        if (TextUtils.isEmpty(dir) || searchDirArray.indexOf(dir) != -1) {
            return;
        }
        searchDirArray.add(dir);
    }

    private String storeJsCallback(V8Function v8Function) {
        String callbackId = "jsCallback_" + jsCallbackCount++;
        jsCallbackCache.put(callbackId, v8Function);
        return callbackId;
    }

    private V8Function getJsCallBackWithCallbackId(String callbackId) {
        if (TextUtils.isEmpty(callbackId))
            return null;
        return jsCallbackCache.get(callbackId);
    }

    public void callJSCallbackFunction(String callbackId, Map params) {
        V8Function callback = getJsCallBackWithCallbackId(callbackId);
        if (callback != null) {
            jsExecutor.invokeJsFunction(callback, params);
        }
    }

    private void assetJsFunctionArg(int argSize, int legalSize) {
        if (argSize < legalSize) {
            throw new IllegalArgumentException(
                    "Argument size not currect");
        }
    }

}
