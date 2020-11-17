//
//  XSJSBridge.h
//  XSFlutterOCFramework
//
//  Created by soap on 2020/3/15.
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//  Some code/ideas   Copyright (c) Facebook ReactNative, Inc. and its affiliates.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>
#import "XSBridgeModule.h"
#import <JavaScriptCore/JavaScriptCore.h>
#import "XSFlutterDefines.h"

NS_ASSUME_NONNULL_BEGIN

@class XSFlutterApp;

@interface XSJSBridge : NSObject

+ (instancetype)shareInstance;

- (void)registerModules:(XSFlutterApp*)flutterApp jsAPPValueBridge:(JSValue*)jsAPPValueBridge;
- (void)sendEventWithName:(NSString *)eventName data:(id)data callback:(JSValue* _Nullable )jsCallbackFun;


- (id)moduleForClass:(Class)moduleClass;

@end

NS_ASSUME_NONNULL_END
