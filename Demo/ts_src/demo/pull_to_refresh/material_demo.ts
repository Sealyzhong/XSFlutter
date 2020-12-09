/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyPullToRefreshMaterialDemoPage extends fs.StatefulWidget{
    createState() {
        return new _MyPullToRefreshMaterialDemoPageState(this);
    }
}

class _MyPullToRefreshMaterialDemoPageState extends fs.WidgetState{

    refreshController:tl.PullToRefreshController= new tl.PullToRefreshController({});

    _count:number=20;
    //重构
    build(context:fs.BuildContext) {
        var that = this;
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("Material Style"),
            }),
            body:new tl.PullToRefreshRefresher({
                controller:this.refreshController,
                enablePullDown:true,
                enablePullUp:true,
                header:new tl.PullToRefreshMaterialClassicHeader(),
                footer:new tl.PullToRefreshClassicFooter(),
                onRefresh: function(){
                    fs.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                    fs.Future.delayed(new fs.Duration({
                        seconds:2
                    }),
                    function(){
                        that._count = 20;
                        fs.Loading.dismiss();
                        that.refreshController.refreshCompleted();
                        that.refreshController.loadComplete();
                        that.setState();
                    });
                },
                onLoading: function (){
                    fs.Loading.show({info:"数据加载中...",alignment:fs.Alignment.center});
                    fs.Future.delayed(new fs.Duration({
                        seconds:2
                    }),
                    function(){
                        that._count = that._count+20;
                        if(that._count>=MyIconData.cupertinoIcons.length){
                            that._count=MyIconData.cupertinoIcons.length;
                        }
                        fs.Loading.dismiss();                    
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
                        return  new fs.Container({
                            padding:fs.EdgeInsets.all(10),
                            child:new fs.Row({
                            children: [
                                new fs.Icon(model.value),
                                new fs.SizedBox({width:10}),
                                new fs.Expanded({
                                    child:new fs.Text(model.name,{overflow:fs.TextOverflow.ellipsis, style:new fs.TextStyle({fontSize:16})},),
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