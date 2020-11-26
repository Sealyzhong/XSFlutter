"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyHomePage = void 0;
const ts_flutter_sdk_1 = require("ts_flutter_sdk");
const section_title_1 = require("demo/widgets/section_title");
const color_util_1 = require("demo/utils/color_util");
const counter_page_1 = require("demo/common_demo/counter_page");
const material_icons_1 = require("demo/common_demo/material_icons");
class MyHomePage extends ts_flutter_sdk_1.JSStatefulWidget {
    createState() {
        return _MyHomePageState.new(this);
    }
}
exports.MyHomePage = MyHomePage;
class _MyHomePageState extends ts_flutter_sdk_1.JSWidgetState {
    build(context) {
        return ts_flutter_sdk_1.Scaffold.new({
            appBar: ts_flutter_sdk_1.AppBar.new({
                title: ts_flutter_sdk_1.Text.new("TS Demo"),
            }),
            body: ts_flutter_sdk_1.ListView.new({
                children: [
                    section_title_1.MySectionTitle.new("通用 Demo"),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Flutter Counter"),
                        subtitle: ts_flutter_sdk_1.Text.new("Flutter 官方 Demo"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return counter_page_1.MyCounterPage.new();
                                }
                            }));
                        }
                    }),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Material Icons"),
                        subtitle: ts_flutter_sdk_1.Text.new("安卓(原生)风格图标"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return material_icons_1.MyMaterialIcons.new();
                                }
                            }));
                        }
                    }),
                    ts_flutter_sdk_1.ListTile.new({
                        leading: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.book, { color: color_util_1.MyColorUtil.primaryColor }),
                        trailing: ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.arrow_right),
                        title: ts_flutter_sdk_1.Text.new("Cupertino Icons"),
                        subtitle: ts_flutter_sdk_1.Text.new("苹果风格图标"),
                        onTap: function () {
                            ts_flutter_sdk_1.Navigator.push(context, ts_flutter_sdk_1.MaterialPageRoute.new({
                                builder: function (context) {
                                    return counter_page_1.MyCounterPage.new();
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
    static new(widget) {
        return new _MyHomePageState(widget);
    }
}
/*//业务代码

class MyJSWidgetHomePageState extends JSWidgetState {

    build(context) {

        let demoList = ListView.new({

            children: [

                this.sectionTitle(context, "App Demo"),
                
                ListTile.new({
                    leading: Icon.new(Icons.add_to_photos, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Widget Examples'),
                    subtitle: Text.new('All Widget Examples'),
                    onTap: function () {

                        //点击时懒加载页面
                        let { WidgetExamplesPage } = require("./app_demo/widget_examples/index.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new WidgetExamplesPage;
                            }
                        }))
                    }
                }),
                ListTile.new({
                    leading: Icon.new(Icons.featured_play_list, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Material'),
                    subtitle: Text.new('Material UI Demo'),
                    onTap: function () {
                        let { JSMaterialPage } = require("./app_demo/material.js");
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSMaterialPage;
                            }
                        }))
                    }
                }),
            


                ListTile.new({
                    leading: Icon.new(Icons.add_to_photos, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('PlatformAPIExamples'),
                    subtitle: Text.new('Network/Dio/MessageChannel'),

                    onTap: function () {

                        let { PlatformExamplesPage } = require("./app_demo/platform/index.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new PlatformExamplesPage;
                            }
                        }))
                    }
                }),

                ListTile.new({
                    leading: Icon.new(Icons.featured_play_list, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Pesto'),
                    subtitle: Text.new('Simple recipe browser'),

                    onTap: function () {

                        let pesto = require("./app_demo/pesto.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new pesto.JSPestoPage;
                            }
                        }))
                    }
                }),
                ListTile.new({
                    leading: Icon.new(Icons.contact_mail, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Contact profile'),
                    subtitle: Text.new('Address book entry with a flexible appbar'),

                    onTap: function () {
                        let { JSContactPage } = require("./app_demo/contact.js");
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSContactPage;
                            }
                        }))
                    }
                }),
                ListTile.new({
                    leading: Icon.new(Icons.contact_mail, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Dev Demo'),
                    subtitle: Text.new('Dev Demo'),

                    onTap: function () {
                        let { MyHomePage } = require("./js_dev_demo.js");
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new MyHomePage;
                            }
                        }))
                    }
                }),

                ListTile.new({
                    leading: Icon.new(Icons.featured_play_list, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Animation'),
                    subtitle: Text.new('Section organizer'),
                    onTap: function () {
                        let { JSAnimationPage } = require("./app_demo/animation.js");
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new JSAnimationPage;
                            }
                        }))
                    }
                }),
                this.sectionTitle(context, "性能测试"),
                ListTile.new({
                    leading: Icon.new(new IconData(0xe06d, { fontFamily: 'MaterialIcons' })),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Profile'),
                    subtitle: Text.new('性能测试 performance profiling'),
                    onTap: function () {

                        //XSLoadingApi.showSuccess("数据加载成功！");
                        //XSLoadingApi.show("数据加载中...");

                        

                        
                        Timer.periodic(30000,function(){
                            XSLoadingApi.dismiss();
                        });

                        let { ProfileExamplesPage } = require("./profile/index.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ProfileExamplesPage;
                            }
                        }))
                    }
                }),



                this.sectionTitle(context, "Dart JS Api"),
                ListTile.new({
                    leading: Icon.new(new IconData(0xe39d, { fontFamily: 'MaterialIcons' })),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Dart JS Api'),
                    subtitle: Text.new('JS Call Dart Function'),
                    onTap: function () {

                        let { PageExampleJSApi } = require("./app_demo/custom_js_api.js");
                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new PageExampleJSApi;
                            }
                        }))
                    }
                })
            ]
        });

        let w = new Scaffold({
            appBar: new AppBar({
                title: Text.new("XSFlutter Examples")
            }),
            body: demoList
        });


        return w;
    }

    sectionTitle(context, title) {
        return new HomeSectionTitle(title);
    }
}

class HomeSectionTitle extends JSStatelessWidget {
    constructor(title, { key } = {}) {
        super("HomeSectionTitle", { key: key });
        this.title = title;
    }

    build(context) {
        return Container.new({
            padding: EdgeInsets.all(10.0),
            color: Colors.red,
            child: new Row({
                children: [
                    Icon.new(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xFFFFFFFF) }),
                    new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
                    Text.new(this.title, {
                        textAlign: TextAlign.start,
                        style: new TextStyle({
                            fontSize: 16,
                            color: Colors.white
                        })
                    })
                ]
            })
        });
    }
}

module.exports = { MyJSWidgetHomePage };*/ 
