//
//  XSJSExecutor.h
//  XSFlutterOCFramework
//
//  Created by soapyang on 2018/12/22.
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "XSFDispose.h"

@class XSJSExecutor;

typedef void (^XSJSCompleteBlock)(NSError * _Nullable error);
typedef void (^XSJSCallback)(id _Nonnull result, NSError * _Nullable error);
typedef void (^XSJSValueCallback)(JSValue * _Nonnull result, NSError * _Nullable error);
typedef void (^XSJSDispatchBlock)(XSJSExecutor * _Nonnull jsExecutor);

NS_ASSUME_NONNULL_BEGIN

/*
 *XSJSExecutor
 *封装了JS 后台线程执行逻辑
 *
 */
@interface XSJSExecutor : NSObject <XSFDispose>


@property (nonatomic, readonly) BOOL isValid;

- (JSContext *)jsContext;

- (void)executeScriptAsync:(NSString *)script
                 sourceURL:(NSURL *)sourceURL
                onComplete:(XSJSCompleteBlock )onComplete;

- (void)executeScriptPath:(NSString*)path
               onComplete:(XSJSCompleteBlock )onComplete;


- (JSValue *)executeScript:(NSString *)script  sourceURL:(NSURL *)sourceURL;

//- (void)callFunctionOnModule:(NSString *)module
//                      method:(NSString *)method
//                   arguments:(NSArray *)args
//             jsValueCallback:(XSJavaScriptValueCallback)onComplete;


- (void)executeXSJSBlockOnJSThread:(XSJSDispatchBlock)block;

- (void)executeBlockOnJSThread:(dispatch_block_t)block;

- (void)invokeJSValue:(JSValue *)jsValue method:(NSString *)method args:(NSArray *)args callback:(XSJSValueCallback )callback;

- (void)invokeMethod:(NSString *)method args:(NSArray *)args callback:(XSJSValueCallback )callback;

@end

NS_ASSUME_NONNULL_END
