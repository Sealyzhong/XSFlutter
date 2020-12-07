/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");

export class MyPullToRefreshIndex extends fs.StatelessWidget{

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("Pull To Refresh"),
            }),
            body:fs.ListView.new({
                children:[
                    fs.Text.new("ListView"),
                
                ],
            }),
        });
    }

    static new(){
        return new MyPullToRefreshIndex();
    }
}
