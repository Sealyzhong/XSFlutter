/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
import api = require("flutter_api");

export class MyDioPage extends fs.StatefulWidget{
    createState() {
        return new _MyDioPage(this);
    }

    static new (){
        return new MyDioPage();
    }
}

class _MyDioPage extends fs.WidgetState{

    
    response = "点击小人Run上面的代码";
    cgiDataUrl = "https://c.m.163.com/nc/article/headline/T1348649580692/0-10.html";
    cgiJsonUrl = "https://reactnative.dev/movies.json111"

    dioCodeText() {
        return "let resp = await Dio().get(cgi);";
    }
      
      //例子1，最简单的用法 
    async testDio1(url:string) {
        
        try {
          let response = await api.Dio.new().get({path:url});
          fs.Log.log("await Dio.get(urlStr):request() :" + response);
          return response;    
        } catch (e) {
          fs.Log.log("testDio() error:" + e);
        }
    }
    
      //例子2，接口还未完全支持
    async testDio2(url:string) {
        try {
          let response =  await api.Dio.new().get( 
            {path:url,
                onReceiveProgress:function (progress:number,total:number){
            fs.Log.log("testDio(): progress: " + String(progress)+"/"+String(total));
          }});
    
          fs.Log.log("await Dio.get(urlStr):request() :" + response);
          return response;
    
        } catch (e) {
            fs.Log.log("testDio() error:" + e);
        }
    }

    async _onTap1(){
        api.Loading.show({info:"数据加载中..."});
        let response = await this.testDio2(this.cgiDataUrl);
        this.response =  response as string;// JSON.stringify(response);
        api.Loading.dismiss();
        this.setState();
    }
 
    async _onTap2(){
        api.Loading.show({info:"数据加载中..."});
        let response = await this.testDio1(this.cgiJsonUrl);
        this.response =  response as string;// JSON.stringify(response);
        api.Loading.dismiss();
        this.setState();
    }

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("Dio Demo"),
            }),
            body:fs.ListView.new({
                children:[
                    MySectionTitle.new("Code 获取网易新闻text"),

                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons["directions_run"]),
                        title: fs.Text.new(this.dioCodeText(), {
                        style: fs.TextStyle.new({
                            color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap1.bind(this)
                    }),

                    MySectionTitle.new("Code 获取Json Map"),

                    fs.ListTile.new({
                        trailing: fs.Icon.new(fs.Icons["directions_run"]),
                        title: fs.Text.new(this.dioCodeText(), {
                        style: fs.TextStyle.new({
                            color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap2.bind(this)
                    }),
                    
                    MySectionTitle.new("Response"),

                    fs.Padding.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.Text.new(this.response, {
                        style: fs.TextStyle.new({
                            color: fs.Colors.grey,
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
