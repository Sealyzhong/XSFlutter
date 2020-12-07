/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyPullToRefreshWaterDropDemoPage extends fs.StatefulWidget{
    createState() {
        return new _MyPullToRefreshWaterDropDemoPageState(this);
    }

    static new (){
        return new MyPullToRefreshWaterDropDemoPage();
    }
}

class _MyPullToRefreshWaterDropDemoPageState extends fs.WidgetState{

    refreshController:tl.PullToRefreshController= tl.PullToRefreshController.new({});

    _count:number=20;
    //重构
    build(context:fs.BuildContext) {
        var that = this;
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("WaterDrop Style"),
            }),
            body:tl.PullToRefreshRefresher.new({
                controller:this.refreshController,
                enablePullDown:true,
                enablePullUp:true,
                header:tl.PullToRefreshWaterDropHeader.new(),
                footer:tl.PullToRefreshClassicFooter.new(),
                onRefresh: function(){
                    tl.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                    fs.Future.delayed(fs.Duration.new({
                        seconds:2
                    }),
                    function(){
                        that._count = 20;
                        tl.Loading.dismiss();
                        that.refreshController.refreshCompleted();
                        that.refreshController.loadComplete();
                        that.setState();
                    });
                },
                onLoading: function (){
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
                        that.refreshController.loadComplete();
                        if(that._count>=MyIconData.cupertinoIcons.length){
                            that.refreshController.loadNoData();
                        }
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