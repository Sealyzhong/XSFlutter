package com.xsyx.xsflutter;

import android.os.Handler;
import android.os.Looper;
import android.text.TextUtils;

import com.xsyx.xsflutter.framework.XSFlutterEngine;
import com.xsyx.xsflutter.framework.utils.FileUtils;

import java.util.ArrayList;

import androidx.annotation.NonNull;
import io.flutter.embedding.engine.plugins.FlutterPlugin;
import io.flutter.plugin.common.MethodCall;
import io.flutter.plugin.common.MethodChannel.MethodCallHandler;
import io.flutter.plugin.common.MethodChannel.Result;

/**
 * XSFlutterPlugin
 */
public class XSFlutterPlugin implements FlutterPlugin, MethodCallHandler {

    //todo 调试时，指向本地路径，可以热重载
    public static String JSFLUTTER_LOCAL_DIR;   //本地js路径
    //todo 开发环境 默认使用asset js
    public static boolean sUseAsset = true;

    //xsflutter assets根目录
    public static final String XSFLUTTER_ASSET_APP_ROOT_PATH = "flutter_assets/js_src";
    public static final String XSFLUTTER_ASSET_FRAMWORK_ROOT_PATH = "flutter_assets/packages/xsflutter";

    //xsflutter 本机文件根目录
    public static final String XSFLUTTER_FS_APP_ROOT_PATH = "/js_src";
    public static final String XSFLUTTER_FS_FRAMWORK_ROOT_PATH = "/xsflutter";

    //如果要热更新jsframework，设置jsFramewrokPath为你的下载目录
    private static String sJSFrameworkPath;

    //如果要热更新js app，设置jsFramewrokPath为你的下载目录
    private static String sJSAppPath;
    private static ArrayList<String> sJSAppSearchPathList;

    private static XSFlutterPlugin sXSFlutterPlugin;
    public FlutterPluginBinding mFlutterPluginBinding;
    private XSFlutterEngine mxEngine;

    private Handler mainHandler;

    public static XSFlutterPlugin getInstance() {
        return sXSFlutterPlugin;
    }

    @Override
    public void onAttachedToEngine(@NonNull FlutterPluginBinding flutterPluginBinding) {
        if (sXSFlutterPlugin != null) {
            sXSFlutterPlugin.dispose();
        }

        sXSFlutterPlugin = this;
        sXSFlutterPlugin.mFlutterPluginBinding = flutterPluginBinding;
        XSFlutterPlugin.JSFLUTTER_LOCAL_DIR = flutterPluginBinding.getApplicationContext().getFilesDir().getAbsolutePath();
        initPath(flutterPluginBinding);
        sXSFlutterPlugin.mxEngine = new XSFlutterEngine(sXSFlutterPlugin, flutterPluginBinding.getBinaryMessenger());
        //本地热重载路径
        //热重载 framework
        sXSFlutterPlugin.mxEngine.mJsFrameworkPath = getJSFrameworkPath(flutterPluginBinding);
        //热重载 jsapp
        sXSFlutterPlugin.mxEngine.mCurrentJSAppPath = sJSAppPath;
        sXSFlutterPlugin.mxEngine.mJsAppSearchPathList = sJSAppSearchPathList;
    }

    private void initPath(FlutterPluginBinding flutterPluginBinding) {
        if (FileUtils.isCopiedFileFromAssets(flutterPluginBinding.getApplicationContext())) {
            sJSAppPath = "js_src";
            sJSFrameworkPath = "xsflutter/js_lib";
        }
    }

    public static String getJSFrameworkPath(FlutterPluginBinding flutterPluginBinding) {
        //如果要热更新jsframework，设置jsFramewrokPath为你的下载目录
        //如果外部有设置路径，使用外面设置的
        String jsFramewrokPath = sJSFrameworkPath;
        if (!TextUtils.isEmpty(jsFramewrokPath)) {
            return jsFramewrokPath;
        }

        return flutterPluginBinding.getFlutterAssets().getAssetFilePathByName("js_lib", "xsflutter");
    }

    public static void setJSFrameworkPath(String JSFrameworkPath) {
        sJSFrameworkPath = JSFrameworkPath;
        sXSFlutterPlugin.mxEngine.mJsFrameworkPath = sJSFrameworkPath;
    }

    public static String getJSAppPath() {
        return sJSAppPath;
    }

    public static ArrayList<String> getJSAppSearchPathList() {
        return sJSAppSearchPathList;
    }

    public static void setJSAppPathAndAppSearchPathList(String JSAppPath, ArrayList<String> JSAppSearchPathList) {
        sJSAppPath = JSAppPath;
        sJSAppSearchPathList = JSAppSearchPathList;
        sXSFlutterPlugin.mxEngine.mCurrentJSAppPath = sJSAppPath;
        sXSFlutterPlugin.mxEngine.mJsAppSearchPathList = sJSAppSearchPathList;
    }

    @Override
    public void onMethodCall(@NonNull MethodCall call, @NonNull Result result) {
        if (call.method.equals("getPlatformVersion")) {
            result.success("Android " + android.os.Build.VERSION.RELEASE);
        } else {
            result.notImplemented();
        }
    }

    @Override
    public void onDetachedFromEngine(@NonNull FlutterPluginBinding binding) {
        if (sXSFlutterPlugin != null) {
            sXSFlutterPlugin.dispose();
        }
    }

    public Handler getMainHandler() {
        if (mainHandler == null)
            return (mainHandler = new Handler(Looper.getMainLooper()));
        else
            return mainHandler;
    }

    private void dispose() {
        if (mxEngine != null) {
            mxEngine.destroy();
        }
    }
}
