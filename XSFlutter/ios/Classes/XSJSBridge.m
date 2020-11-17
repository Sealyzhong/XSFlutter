//
//  XSJSBridge.m
//  XSFlutterOCFramework
//
//  Created by soap on 2020/3/15.
//  Copyright © 2020 The Chromium Authors. All rights reserved.
//
//  Some code / ideas   Copyright (c) Facebook ReactNative, Inc. and its affiliates.
//


#import "XSJSBridge.h"
#import "XSBridgeModule.h"
#import "XSFlutterApp.h"



static NSMutableArray<Class> *g_XSModuleClasses;
static dispatch_queue_t XSModuleClassesSyncQueue;
NSArray<Class> *XSGetModuleClasses(void)
{
    __block NSArray<Class> *result;
    dispatch_sync(XSModuleClassesSyncQueue, ^{
        result = [g_XSModuleClasses copy];
    });
    return result;
}

/**
 * Register the given class as a bridge module. All modules must be registered
 * prior to the first bridge initialization.
 */
void XSRegisterModule(Class);
void XSRegisterModule(Class moduleClass)
{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        g_XSModuleClasses = [NSMutableArray new];
        XSModuleClassesSyncQueue = dispatch_queue_create("XSFlutter.ModuleClassesSyncQueue", DISPATCH_QUEUE_CONCURRENT);
    });
    
    // Register module
    dispatch_barrier_async(XSModuleClassesSyncQueue, ^{
        [g_XSModuleClasses addObject:moduleClass];
    });
}



@interface XSJSBridge ()


@property(nonatomic,weak) XSFlutterApp* flutterApp;
@property(nonatomic,strong) JSValue* jsAPPValueBridge;

@property(nonatomic,strong)  NSMutableDictionary<NSString *,id<XSBridgeModule>> *moduleInstances;
@end

@implementation XSJSBridge

+ (instancetype)shareInstance
{
    static dispatch_once_t onceToken;
    static XSJSBridge *instance;
    dispatch_once(&onceToken, ^{
        instance = [XSJSBridge new];
    });
    
    return instance;
}

- (instancetype)init{
    if (self = [super init]) {
        
        _moduleInstances = [[NSMutableDictionary alloc] initWithCapacity:5];
        
    }
    return self;
}

- (void)dealloc
{
    
}

-(void)registerModules:(XSFlutterApp*)flutterApp jsAPPValueBridge:(JSValue*)jsAPPValueBridge;
{
    //先按单实例来写
    self.flutterApp = flutterApp;
    self.jsAPPValueBridge = jsAPPValueBridge;
    
    for (Class cls in self.moduleClasses) {
        id<XSBridgeModule> moduleInstance = [cls registerModuleInXSFlutterJSContext:jsAPPValueBridge bridge:self];
        
        self.moduleInstances[moduleNameForClass(cls)] = moduleInstance;
    }
}

NSString *moduleNameForClass(Class cls)
{
    NSString *name = [cls moduleName];
    if (name.length == 0) {
        name = NSStringFromClass(cls);
    }
    
    return DropReactPrefixes(name);
}

NSString *DropReactPrefixes(NSString *s)
{
    if ([s hasPrefix:@"XS"]) {
        return [s substringFromIndex:2];
    } else if ([s hasPrefix:@"XSF"]) {
        return [s substringFromIndex:3];
    }
    
    return s;
}


- (NSArray<Class> *)moduleClasses
{
    return g_XSModuleClasses;
}


- (id)moduleForName:(NSString *)moduleName
{
    return self.moduleInstances[moduleName] ;
}

- (id)moduleForClass:(Class)moduleClass
{
    return self.moduleInstances[moduleNameForClass(moduleClass)];
}

- (NSArray *)modulesConformingToProtocol:(Protocol *)protocol
{
    NSMutableArray *modules = [NSMutableArray new];
    for (Class moduleClass in [self.moduleClasses copy]) {
        if ([moduleClass conformsToProtocol:protocol]) {
            id module = [self moduleForClass:moduleClass];
            if (module) {
                [modules addObject:module];
            }
        }
    }
    return [modules copy];
}

#pragma mark - Event
- (void)sendEventWithName:(NSString *)eventName data:(id)data  callback:(JSValue*)jsCallbackFun
{
    
    //callback方式
    NSArray *arguments = data?@[eventName,data]:@[eventName];
    
    if (jsCallbackFun != nil) {
        
        [self.flutterApp executeBlockOnJSThread:^{
            [jsCallbackFun callWithArguments: arguments];
        }];
    }
    else
    {
        //全局通知方式
        JSValue* eventHandler = self.jsAPPValueBridge[@"onNativeEvent"];
        
        if (eventHandler == nil || eventName.length == 0) {
            return;
        }
        
        [self.flutterApp invokeJSValue:self.jsAPPValueBridge method:@"onNativeEvent" args:arguments callback:^(JSValue * _Nonnull result, NSError * _Nullable error) {
            
        }];
    }
    
}



@end

