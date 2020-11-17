//
//  XSJSAppProxy.h
//  XSFlutterOCFramework
//
//  Created by soapyang on 2018/12/24.
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "XSJSExecutor.h"


@class XSFlutterEngine;
@class XSJSEngine;
@class XSJSExecutor;

NS_ASSUME_NONNULL_BEGIN

@protocol XSFlutterAppJSExport <NSObject,JSExport>

JSExportAs(setCurrentJSApp,
         - (void)jsAPISetCurrentJSApp:(JSValue*)jsAppObj
           );

JSExportAs(callFlutterReloadApp, //WithApp  InitPageName  Data
           - (void)jsAPICallFlutterReloadApp:(JSValue*)jsAppObj  widgetData:(NSString*)data
           );


//js -> flutter 直接json交互
JSExportAs(callFlutterWidgetChannel,
           - (void)callFlutterWidgetChannelWithMethodName:(NSString*)method arguments:(id)arguments
           );

@end



@interface XSFlutterApp : NSObject <XSFlutterAppJSExport>

//唯一标示
@property (nonatomic, strong) NSString *appName;
@property (nonatomic, strong) NSString *appRootPath;
@property (nonatomic, strong) NSString *mainJSPath;

@property (nonatomic, strong, nullable) XSJSEngine *jsEngine;
@property (nonatomic, strong) JSValue * _Nullable jsAppObj;

@property (nonatomic, weak) XSFlutterEngine * _Nullable jsFlutterEngine;

- (instancetype)initWithAppPath:(NSString*)appRootPath jsAppSearchPathList:(NSArray*)pathArray  engine:(XSFlutterEngine*)jsFlutterEngine ;

- (void)runApp;
- (void)exitApp;

- (JSContext*)mainJSContext;
- (void)invokeJSValue:(JSValue *)jsValue method:(NSString *)method args:(NSArray *)args callback:(XSJSValueCallback )callback;
- (void)executeBlockOnJSThread:(dispatch_block_t)block;

@end

NS_ASSUME_NONNULL_END
