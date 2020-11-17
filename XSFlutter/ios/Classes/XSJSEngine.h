//
//  XSJSEngine.h
//  XSFlutterOCFramework
//
//  Created by soapyang on 2018/12/22.
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>
#import "XSJSExecutor.h"


@class XSFlutterEngine;
@class XSDispose;

NS_ASSUME_NONNULL_BEGIN

/*
 *XSJSEngine
 *负责Native/JS 二方衔接
 *导出Native业务接口
 */
@interface XSJSEngine : NSObject <XSFDispose>


@property (nonatomic, weak) XSFlutterEngine *jsFlutterEngine;

@property (nonatomic, strong) XSJSExecutor *jsExecutor;

- (instancetype)init;

- (void)addSearchDir:(NSString*)dir;

- (void)callJSCallbackFunction:(NSString *)callbackId param:(id)param;

@end

NS_ASSUME_NONNULL_END
