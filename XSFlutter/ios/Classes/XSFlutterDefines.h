//
//  XSFlutter.h
//  XSFlutterOCFramework
//
//  Created by soapyang on 2019/1/8.
//  Copyright © 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

#import <Foundation/Foundation.h>


#define XSFlutterLog(fmt, ...) NSLog((@"XSFlutter:[Native]-" "|%s|" "[%d]-" fmt), __FUNCTION__, __LINE__, ##__VA_ARGS__);

#define XSFLogInfo(fmt, ...) NSLog((@"XSFlutter:[Native]-[info]" "|%s|" "[%d]-" fmt), __FUNCTION__, __LINE__, ##__VA_ARGS__);

#define XSFLogWarn(fmt, ...) NSLog((@"XSFlutter:[Native]-[warn]" "|%s|" "[%d]-" fmt), __FUNCTION__, __LINE__, ##__VA_ARGS__);
#define XSFLogError(fmt, ...) NSLog((@"XSFlutter:[Native]-[err]" "|%s|" "[%d]-" fmt), __FUNCTION__, __LINE__, ##__VA_ARGS__);

#ifndef XSF_DEBUG
#if DEBUG
#define XSF_DEBUG 1
#else
#define XSF_DEBUG 0
#endif
#endif

#if defined(__cplusplus)
#define XS_EXTERN extern "C" __attribute__((visibility("default")))
#define XS_EXTERN_C_BEGIN extern "C" {
#define XS_EXTERN_C_END }
#else
#define XS_EXTERN extern __attribute__((visibility("default")))
#define XS_EXTERN_C_BEGIN
#define XS_EXTERN_C_END
#endif


