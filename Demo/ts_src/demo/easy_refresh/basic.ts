/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyEasyRefreshBasicPage extends fs.StatefulWidget{
    createState() {
        return new _MyEasyRefreshBasicPageState(this);
    }

    static new (){
        return new MyEasyRefreshBasicPage();
    }
}

class _MyEasyRefreshBasicPageState extends fs.WidgetState{

    //refreshController:tl.EasyRefreshController= tl.EasyRefreshController.new();

    _count:number=20;
    //重构
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("经典样式"),
            }),
            body:tl.EasyRefresher.new({
                //controller:this.refreshController,
                //header:tl.EasyRefreshClassicalHeader.zh_CN(),
                //footer:tl.EasyRefreshClassicalFooter.zh_CN(),
                /*onRefresh: function (){

                },
                onLoad: function (){

                },*/
                child:fs.ListView.builder({
                    itemCount:this._count,
                    itemBuilder:(context:fs.BuildContext,index:number)=>{
                        var model = MyIconData.icons[index];
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