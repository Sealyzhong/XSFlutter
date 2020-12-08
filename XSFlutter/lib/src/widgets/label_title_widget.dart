/*
 * @Author: SealyZhong
 * @CreateDate: 2020/02/10
 * @ModifyDate: 2020/03/11
 * @Description: 标签+标题布局
 */

import 'package:flutter/material.dart';

class LabelTitleWidget extends StatelessWidget {
  //标签
  final String label;
  //标签样式
  final TextStyle labelStyle;
  //标题
  final String title;
  //标题样式
  final TextStyle titleStyle;
  LabelTitleWidget({Key key, @required this.title, @required this.label, this.labelStyle, this.titleStyle}) : super(key: key);

  //------------- 界面区 -------------
  @override
  Widget build(BuildContext context) {
    return RichText(
      overflow: TextOverflow.ellipsis,
      text: TextSpan(
        children: <TextSpan>[
          //标签
          TextSpan(
              text: this.label,
              style: this.labelStyle ??
                  TextStyle(
                    color: Colors.grey,
                    fontSize: 13,
                  )),

          //标题
          TextSpan(
            text: this.title,
            style: this.titleStyle ??
                TextStyle(
                  color: Colors.black,
                  fontSize: 14,
                ),
          ),
        ],
      ),
    );
  }
}
