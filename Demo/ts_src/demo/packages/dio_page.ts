/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");

export class MyDioPage extends fs.StatefulWidget{
    createState() {
        return new _MyDioPage(this);
    }
}

class _MyDioPage extends fs.WidgetState{

    
    response = "点击小人Run上面的代码";
    cgiDataUrl = "https://c.m.163.com/nc/article/headline/T1348649580692/0-10.html";
    cgiJsonUrl = "https://reactnative.dev/movies.json"

    dioCodeText() {
        return "let resp = await Dio().get(cgi);";
    }
      
      //例子1，最简单的用法 
    async testDio1(url:string) {
        
        try {
          let response = await fs.Dio.getInstance().get({path:url});
          fs.Log.log("await Dio.get(urlStr):request() :" + response);
          return response;    
        } catch (e) {
          fs.Log.log("testDio() error:" + e);
        }
    }
    
      //例子2，接口还未完全支持
    async testDio2(url:string) {
        try {
          let response =  await fs.Dio.getInstance().get( 
            {path:url});
    
          fs.Log.log("await Dio.get(urlStr):request() :" + response);
          return response;
    
        } catch (e) {
            fs.Log.log("testDio() error:" + e);
        }
    }

    async _onTap1(){
        fs.Loading.show({info:"数据加载中..."});
        let response = await this.testDio2(this.cgiDataUrl);
        this.response =  JSON.stringify(response);
        fs.Loading.dismiss();
        this.setState();
    }
 
    async _onTap2(){
        fs.Loading.show({info:"数据加载中..."});
        let response = await this.testDio1(this.cgiJsonUrl);
        this.response =  JSON.stringify(response);
        fs.Loading.dismiss();
        this.setState();
    }

    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Dio Demo"),
            }),
            body:new fs.ListView({
                children:[
                    new MySectionTitle("Code 获取网易新闻text"),

                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons["directions_run"]),
                        title: new fs.Text(this.dioCodeText(), {
                        style: new fs.TextStyle({
                            color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap1.bind(this)
                    }),

                    new MySectionTitle("Code 获取Json Map"),

                    new fs.ListTile({
                        trailing: new fs.Icon(fs.Icons["directions_run"]),
                        title: new fs.Text(this.dioCodeText(), {
                        style: new fs.TextStyle({
                            color: fs.Colors.grey,
                            })
                        }),
                        onTap: this._onTap2.bind(this)
                    }),
                    
                    new MySectionTitle("Response"),

                    new fs.Padding({
                        padding: fs.EdgeInsets.all(10),
                        child: new fs.Text(this.response, {
                        style: new fs.TextStyle({
                            color: fs.Colors.grey,
                            })
                        }),
                    })
                ],
            }),
        });
    }
}
