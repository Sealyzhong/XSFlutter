/*
 * @Author: SealyZhong
 * @Email: 122391458@qq.com
 * @Date: 2019/10/10
 * @Description: 数据请求返回结果模型
 */

import 'package:flutter/material.dart';

class ResponseModel {
  //是否成功
  final bool flag;
  //返回信息
  final String info;
  //返回数据
  final dynamic data;
  ResponseModel({@required this.flag, this.info, this.data});

  //
  Map<String, dynamic> toJson() {
    return {
      "flag": this.flag,
      "info": this.info,
      "data": this.data
    };
  }
}
