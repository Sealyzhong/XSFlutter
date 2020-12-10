/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");

export class MyPullToRefreshClassicalDemoPage extends fs.StatefulWidget{
    createState() {
        return new _MyPullToRefreshClassicalDemoPageState(this);
    }
}

class _MyPullToRefreshClassicalDemoPageState extends fs.WidgetState{

    refreshController:fs.PullToRefreshController= new fs.PullToRefreshController({});

    _count:number=20;
    //重构
    build(context:fs.BuildContext) {
        var that = this;
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("经典样式"),
            }),
            body:new fs.PullToRefreshRefresher({
                controller:this.refreshController,
                enablePullDown:true,
                enablePullUp:true,
                header:new fs.PullToRefreshClassicHeader(),
                footer:new fs.PullToRefreshClassicFooter(),
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