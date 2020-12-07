/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyEasyRefreshClassEmptyWidgetPage extends fs.StatefulWidget{
    createState() {
        return new _MyEasyRefreshClassEmptyWidgetPageState(this);
    }

    static new (){
        return new MyEasyRefreshClassEmptyWidgetPage();
    }
}

class _MyEasyRefreshClassEmptyWidgetPageState extends fs.WidgetState{

    refreshController:tl.EasyRefreshController= tl.EasyRefreshController.new();

    _count:number=0;
    //重构
    build(context:fs.BuildContext) {
        var that = this;
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Empty Widget"),
            }),
            body:tl.EasyRefresher.new({
                enableControlFinishLoad:true,
                enableControlFinishRefresh:true,
                controller:this.refreshController,
                emptyWidget:this._count<=0?fs.EmptyDataWidget.new({}):undefined,
                header:tl.EasyRefreshClassicalHeader.new(),
                footer:tl.EasyRefreshClassicalFooter.new({isNoMoreText:true}),
                onRefresh: function(){
                    tl.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                    fs.Future.delayed(fs.Duration.new({
                        seconds:2
                    }),
                    function(){
                        that._count = 20;
                        tl.Loading.dismiss();
                        that.refreshController.finishRefresh({success:true,noMore:false});
                        that.refreshController.finishLoad({success:true,noMore:that._count>=MyIconData.cupertinoIcons.length});
                        that.setState();
                    });
                },

                onLoad: function (){
                    tl.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                    fs.Future.delayed(fs.Duration.new({
                        seconds:2
                    }),
                    function(){
                        that._count = that._count+20;
                        if(that._count>=MyIconData.cupertinoIcons.length){
                            that._count=MyIconData.cupertinoIcons.length;
                        }
                        tl.Loading.dismiss();
                        that.refreshController.finishLoad({success:true,noMore:that._count>=MyIconData.cupertinoIcons.length});
                        that.setState();
                    });
                },
                child:fs.ListView.builder({
                    itemCount:this._count,
                    itemBuilder:(context:fs.BuildContext,index:number)=>{
                        var model = MyIconData.cupertinoIcons[index];
                        return  fs.Container.new({
                            padding:fs.EdgeInsets.all(10),
                            child:fs.Row.new({
                            children: [
                                fs.Icon.new(model.value),
                                fs.SizedBox.new({width:10}),
                                fs.Expanded.new({
                                    child:fs.Text.new(model.name,{overflow:fs.TextOverflow.ellipsis, style:fs.TextStyle.new({fontSize:16})},),
                                }),
                            ]
                            })
                        }); 
                    }
                }),
            }),
        });
    }
}