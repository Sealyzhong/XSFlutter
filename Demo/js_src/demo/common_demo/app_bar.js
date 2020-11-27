"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAppBar = void 0;
const ts_base_class_1 = require("framework/ts_base_class");
const ts_base_framework_1 = require("framework/ts_base_framework");
const ts_base_icons_1 = require("framework/ts_base_icons");
const ts_material_widgets_1 = require("framework/ts_material_widgets");
class MyAppBar extends ts_base_framework_1.JSStatelessWidget {
    build(context) {
        return new ts_material_widgets_1.Scaffold({
            appBar: new ts_material_widgets_1.AppBar({
                title: new ts_material_widgets_1.Text("基础组件 - AppBar"),
            }),
            body: new ts_material_widgets_1.ListView({
                children: [
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text("最简单的AppBar"),
                    }),
                    new ts_material_widgets_1.AppBar({
                        title: new ts_material_widgets_1.Text("NormalAppBar"),
                    }),
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text("标题换色"),
                    }),
                    new ts_material_widgets_1.AppBar({
                        title: new ts_material_widgets_1.Text('NormalAppBar', {
                            style: new ts_base_class_1.TextStyle({
                                color: ts_base_class_1.Colors.white,
                            }),
                        }),
                    }),
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text('背景换色'),
                    }),
                    new ts_material_widgets_1.AppBar({
                        backgroundColor: ts_base_class_1.Colors.blue,
                        title: new ts_material_widgets_1.Text('NormalAppBar', {
                            style: new ts_base_class_1.TextStyle({
                                color: ts_base_class_1.Colors.white,
                            }),
                        }),
                    }),
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text('设置 leading'),
                    }),
                    new ts_material_widgets_1.AppBar({
                        leading: new ts_material_widgets_1.IconButton({
                            icon: new ts_material_widgets_1.Icon(ts_base_icons_1.Icons.add),
                            onPressed: function () {
                                ts_base_framework_1.JSLog.log("点击: 设置 leading");
                            },
                        }),
                        title: new ts_material_widgets_1.Text('AppBar'),
                    }),
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text('设置 action'),
                    }),
                    new ts_material_widgets_1.AppBar({
                        actions: [
                            new ts_material_widgets_1.IconButton({
                                icon: new ts_material_widgets_1.Icon(ts_base_icons_1.Icons.camera),
                                onPressed: function () {
                                    ts_base_framework_1.JSLog.log("点击: 设置 action");
                                },
                            })
                        ],
                        title: new ts_material_widgets_1.Text('AppBar'),
                    }),
                    new ts_material_widgets_1.ListTile({
                        title: new ts_material_widgets_1.Text('设置多个action'),
                    }),
                    new ts_material_widgets_1.AppBar({
                        actions: [
                            new ts_material_widgets_1.IconButton({
                                icon: new ts_material_widgets_1.Icon(ts_base_icons_1.Icons.camera),
                                onPressed: function () {
                                    ts_base_framework_1.JSLog.log("点击: camera");
                                },
                            }),
                            new ts_material_widgets_1.IconButton({
                                icon: new ts_material_widgets_1.Icon(ts_base_icons_1.Icons.print),
                                onPressed: function () {
                                    ts_base_framework_1.JSLog.log("点击: print");
                                },
                            }),
                        ],
                        title: new ts_material_widgets_1.Text('AppBar'),
                    }),
                ],
            }),
        });
    }
    static new() {
        return new MyAppBar();
    }
}
exports.MyAppBar = MyAppBar;
/*

  build(){
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('AppBar',),
      }),
      body: new ListView({
        children:[
           
          
          
          
        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleAppBar,
};
*/ 
