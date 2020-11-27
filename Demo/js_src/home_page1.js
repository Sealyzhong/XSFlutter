//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {async} = require("dart_sdk.js");
let {
    JSStatelessWidget,
    JSStatefulWidget,
    JSWidgetState,
    Scaffold,
    Container,
    Color,
    Colors,
    AppBar,
    Text,
    ListView,
    ListTile,
    Icon,
    IconData,
    Duration,
    EdgeInsets,
    TextAlign,
    TextStyle,
    Row,
    Padding,
    //Theme,
    Navigator,
    Icons,
    MaterialPageRoute,
    XSLoadingApi,
} = require("js_flutter.js");

const { SectionTitle } = require("./app_demo/component/section_title.js");


//业务代码
class MyJSWidgetHomePage extends JSStatefulWidget {
    constructor() {
        super("MyJSWidgetHomePage");

        this.data = "biz data";
        this.count = 0;
    }

    createState() {
        return new MyJSWidgetHomePageState(this);
    }
}

class MyJSWidgetHomePageState extends JSWidgetState {

    build(context) {

        let demoList = ListView.new({

            children: [

                this.sectionTitle(context, "App Demo"),
                ListTile.new({
                    leading: Icon.new(Icons.add_to_photos, { color: Colors.red }),
                    trailing: Icon.new(Icons.arrow_right),
                    title: Text.new('Examples'),
                    subtitle: Text.new('Common Examples'),
                    onTap: function () {

                        //点击时懒加载页面
                        let { ExamplesPage } = require("./app_demo/examples/index.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ExamplesPage;
                            }
                        }))


                    }
                }),
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

                        /*async.Timer.new(Duration.new({ seconds: 3 }),function(){
                            XSLoadingApi.dismiss();
                        });*/
                        /*async.Timer.periodic(Duration.new({ seconds: 3 }),function(){
                            XSLoadingApi.dismiss();
                        });*/
                        async.Future.delayed(Duration.new({ seconds: 3 }),function(){
                            XSLoadingApi.dismiss();
                        });

                        /*
                        Timer.periodic(30000,function(){
                            XSLoadingApi.dismiss();
                        });

                        let { ProfileExamplesPage } = require("./profile/index.js");

                        Navigator.push(context, new MaterialPageRoute({
                            builder: function (context) {
                                return new ProfileExamplesPage;
                            }
                        }))*/
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

module.exports = { MyJSWidgetHomePage };
