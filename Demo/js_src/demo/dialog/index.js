"use strict";
/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyDialogIndex = void 0;
const section_title_1 = require("demo/widgets/section_title");
const fs = require("flutter_sdk");
class MyDialogIndex extends fs.StatelessWidget {
    constructor() {
        super(...arguments);
        this._style = new fs.TextStyle({ fontSize: 24, fontWeight: fs.FontWeight.bold });
        this.menu = ["菜单1", "菜单2", "菜单3", "菜单4"];
        this.actions = [
            new fs.SimpleDialogButtonInfo({ text: "取消", textStyle: new fs.TextStyle({ color: fs.Colors.grey }) }),
            new fs.SimpleDialogButtonInfo({ text: "确定" })
        ];
        this.actions1 = [
            new fs.SimpleDialogButtonInfo({ text: "取消" }),
            new fs.SimpleDialogButtonInfo({ text: "确定" })
        ];
    }
    _saveValue() {
        fs.Log.log("OK");
        fs.Dialog.dismiss(this);
    }
    build(context) {
        //var that = this;
        return new fs.Scaffold({
            appBar: new fs.AppBar({
                title: new fs.Text("通用提示框"),
            }),
            body: new fs.ListView({
                children: [
                    new section_title_1.MySectionTitle("Dialog"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("1、Cupertino Dialog"),
                        onTap: () => {
                            fs.Dialog.showCupertinoDialog(this, new fs.ShowCupertinoDialog({
                                child: new fs.CupertinoAlertDialog({
                                    title: new fs.Text("温馨提示"),
                                    content: new fs.RichText({
                                        text: new fs.TextSpan({ text: '是否要拨打{', style: new fs.TextStyle({ color: fs.Colors.black }), children: [
                                                new fs.TextSpan({ text: "181-5379-3927", style: new fs.TextStyle({
                                                        color: fs.Colors.red,
                                                    }) }),
                                                new fs.TextSpan({ text: "}电话？", style: new fs.TextStyle({
                                                        color: fs.Colors.black,
                                                    }) })
                                            ] })
                                    }),
                                    actions: [
                                        new fs.CupertinoDialogAction({
                                            child: new fs.Text("取消"),
                                            onPressed: () => {
                                                fs.Log.log("取消");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),
                                        new fs.CupertinoDialogAction({
                                            child: new fs.Text("确定", { style: new fs.TextStyle({ color: fs.Colors.red }) }),
                                            onPressed: () => {
                                                fs.Log.log("确定");
                                                fs.Dialog.dismiss(this);
                                            }
                                        }),
                                    ]
                                }),
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、Alert Dialog"),
                        onTap: () => {
                            fs.Dialog.showDialog(this, new fs.ShowDialog({
                                barrierDismissible: false,
                                child: new fs.Material({
                                    color: fs.Colors.transparent,
                                    child: new fs.Center({
                                        child: new fs.RaisedButton({
                                            child: new fs.Text("相信·帮助"),
                                            onPressed: this._saveValue.bind(this)
                                        }),
                                    }),
                                })
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("3、Custom Dialog"),
                        onTap: () => {
                            fs.Dialog.showCustomAlertDialog(this, new fs.ShowCustomAlertDialog({
                                content: new fs.RichText({
                                    text: new fs.TextSpan({ text: '是否要拨打{', style: new fs.TextStyle({ color: fs.Colors.black }), children: [
                                            new fs.TextSpan({ text: "181-5379-3927", style: new fs.TextStyle({
                                                    color: fs.Colors.red,
                                                }) }),
                                            new fs.TextSpan({ text: "}电话？", style: new fs.TextStyle({
                                                    color: fs.Colors.black,
                                                }) })
                                        ] })
                                }),
                                actions: [
                                    new fs.CustomAlertDialogButton({
                                        bgColor: fs.Colors.blue,
                                        child: new fs.Text("取消", { style: new fs.TextStyle({ color: fs.Colors.white }) }),
                                        onPressed: () => {
                                            fs.Log.log("取消");
                                            fs.Dialog.dismiss(this);
                                        }
                                    }),
                                    new fs.CustomAlertDialogButton({
                                        bgColor: fs.Colors.red,
                                        child: new fs.Text("确定", { style: new fs.TextStyle({ color: fs.Colors.white }) }),
                                        onPressed: () => {
                                            fs.Log.log("确定");
                                            fs.Dialog.dismiss(this);
                                        }
                                    })
                                ]
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("ActionSheet"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("1、CustomActionSheet"),
                        onTap: () => {
                            fs.Dialog.showCustomActionSheet(this, new fs.ShowCustomActionSheet({
                                itemList: this.menu,
                                onTap: (i) => {
                                    fs.Log.log("点击:" + String(i));
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、SimpleActionSheet"),
                        onTap: () => {
                            fs.Dialog.showSimpleActionSheet(this, new fs.ShowCustomActionSheet({
                                itemList: this.menu,
                                onTap: (i) => {
                                    fs.Log.log("点击:" + String(i));
                                }
                            }));
                        }
                    }),
                    new section_title_1.MySectionTitle("Simple Alert Dialog"),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("1、Simple Cupertino Dialog"),
                        onTap: () => {
                            fs.Dialog.showSimpleCupertinoDialog(this, new fs.ShowSimpleDialog({
                                actions: this.actions,
                                desc: "Alert Cupertino(Tow Button)",
                                onTap: (i) => {
                                    fs.Log.log("点击:" + String(i));
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("2、Simple Alert Dialog"),
                        onTap: () => {
                            fs.Dialog.showSimpleAlertDialog(this, new fs.ShowSimpleDialog({
                                actions: this.actions,
                                desc: "Alert Material(Tow Button)",
                                onTap: (i) => {
                                    fs.Log.log("点击:" + String(i));
                                }
                            }));
                        }
                    }),
                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons.chevron_right),
                        title: new fs.Text("3、Simple Custom Dialog"),
                        onTap: () => {
                            fs.Dialog.showSimpleCustomDialog(this, new fs.ShowSimpleCustomDialog({
                                actions: this.actions1,
                                desc: "Simple Custom Dialog",
                                onTap: (i) => {
                                    fs.Log.log("点击:" + String(i));
                                }
                            }));
                        }
                    }),
                ],
            }),
        });
    }
}
exports.MyDialogIndex = MyDialogIndex;
