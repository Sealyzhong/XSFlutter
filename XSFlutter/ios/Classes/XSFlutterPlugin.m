#import "XSFlutterPlugin.h"

@interface XSFlutterPlugin ()



@end

@implementation XSFlutterPlugin

static XSFlutterPlugin *g_XSFlutterPluginInstance = nil;
static NSString  *g_preSetJSFrameworkPath = nil;

static NSString  *g_preSetJSAppPath = nil;
static NSArray  *g_preSetJSAppSearchPathList = nil;

+ (XSFlutterPlugin*)shareInstance {
    return g_XSFlutterPluginInstance;
}

+ (void)registerWithRegistrar:(NSObject<FlutterPluginRegistrar>*)registrar {
    
    if (g_XSFlutterPluginInstance != nil) {
        [g_XSFlutterPluginInstance dispose];
    }
    
    g_XSFlutterPluginInstance = [[XSFlutterPlugin alloc] init];
    g_XSFlutterPluginInstance.flutterRegistrar = registrar;
    g_XSFlutterPluginInstance.mxEngine = [[XSFlutterEngine alloc] initWithFlutterMessager:registrar.messenger];
    
    g_XSFlutterPluginInstance.mxEngine.jsFrameworkPath = [self getJSFramewrokPath:registrar];
    
    //热重载
    g_XSFlutterPluginInstance.mxEngine.currentJSAppPath =g_preSetJSAppPath;
    g_XSFlutterPluginInstance.mxEngine.jsAppSearchPathList =g_preSetJSAppSearchPathList;
    
}

 //如果要热更新jsframework，设置jsFramewrokPath为你的下载目录
+ (void)setJSFramewrokPath:(NSString*)path{
    g_preSetJSFrameworkPath = path;
}

+ (void)setJSAppPath:(NSString*)path jsAppSearchPathList:(NSArray*)pathArray
{
    g_preSetJSAppPath = path;
    g_preSetJSAppSearchPathList = pathArray;
}

+ (NSString*)getJSFramewrokPath:(NSObject<FlutterPluginRegistrar>*)registrar {
    
    //如果要热更新jsframework，设置jsFramewrokPath为你的下载目录
    //如果外部有设置路径，使用外面设置的
    NSString *jsFramewrokPath = g_preSetJSFrameworkPath;
    if (jsFramewrokPath.length > 0) {
        return jsFramewrokPath;
    }
    
    ///默认 Runner.app/Frameworks/App.framework/flutter_assets/packages/xsflutter/js_lib/
    NSString* key = [registrar lookupKeyForAsset:@"js_lib/" fromPackage:@"xsflutter"];
    jsFramewrokPath = [[[NSBundle mainBundle] bundlePath] stringByAppendingPathComponent:key];

    return jsFramewrokPath;
}

- (void)dispose{
    if (self.mxEngine != nil) {
        [self.mxEngine dispose];
        self.mxEngine = nil;
    }
}

@end

