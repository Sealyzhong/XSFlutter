//
//  XSFlutterEngine.h
//  XSFlutterOCFramework
//
//  Created by soapyang on 2018/12/22.
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>
#import "XSFlutterApp.h"
#import <Flutter/Flutter.h>
#import "XSFDispose.h"

@class FlutterBinaryMessenger;
@class XSJSEngine;

NS_ASSUME_NONNULL_BEGIN
/*
 *xsflutter API
 *XSFlutterEngine
 *负责Flutter/Native/JS 三方衔接
 *管理FluterJS代码
 */
@interface XSFlutterEngine : NSObject <XSFDispose>

@property (nonatomic,strong,readonly) NSString *jsAppName;
@property (nonatomic, strong) XSFlutterApp * _Nullable currentApp;

@property (nonatomic, weak) NSObject<FlutterBinaryMessenger>* binaryMessenger;
@property (nonatomic, weak) XSJSEngine* jsEngine;

@property (nonatomic,strong) NSString *jsFrameworkPath;
@property (nonatomic,strong) NSString *currentJSAppPath;
@property (nonatomic,strong) NSArray *jsAppSearchPathList;


///初始化XSFlutter主引擎，设置FlutterEngine的binaryMessenger
- (instancetype)initWithFlutterMessager:(NSObject<FlutterBinaryMessenger>*)binaryMessenger;

///运行JS代码，JS业务代码放置在一个文件夹中，并且有main.js文件，创建XSFlutterApp
- (void)runAppWithPath:(NSString*)jsAppPath jsAppSearchPathList:(NSArray*)pathArray;

//MARK: - native -> flutter
//--------------------------------------------
//调用Flutter切换到JSWidget，显示JS渲染的内容
- (void)callFlutterReloadAppWithJSWidgetData:(NSString*)widgetData;
- (void)callFlutterReloadAppWithRouteName:(NSString*)routeName  widgetData:(NSString*)widgetData;

- (void)invokeFlutterCommonChannel:(NSString*)argumentsJSONStr callback:(void(^)(id _Nullable result))callback;

- (void)callFlutterMethodChannelInvoke:(NSString*)channelName
                             methodName:(NSString*)methodName
                                 params:(NSDictionary *)params
                               callback:(void(^)(id _Nullable result))callback;
- (void)callFlutterEventChannelReceiveBroadcastStreamListenInvoke:(NSString * _Nonnull)channelName
                                                      streamParam:(NSString * _Nullable)streamParam
                                                         onDataId:(NSString * _Nullable)onDataId
                                                        onErrorId:(NSString * _Nullable)onErrorId
                                                         onDoneId:(NSString * _Nullable)onDoneId
                                                    cancelOnError:(NSNumber * _Nullable)cancelOnError;


- (void)invokeFlutterRemoveMirrorObjsRef:(NSArray*)mirrorIDArray;


@end



NS_ASSUME_NONNULL_END
