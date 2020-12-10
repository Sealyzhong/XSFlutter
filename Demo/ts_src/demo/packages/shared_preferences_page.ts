/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");

export class MySharedPreferncesPage extends fs.StatefulWidget{
    createState() {
        return new _MySharedPreferncesPage(this);
    }
}

class _MySharedPreferncesPage extends fs.WidgetState{

    _userNumber:string = "userNum";
    _count:number = 0;
    _getCount:number = 0;

    //计数器
    _incrementCounter(){
        this._count++;
        this.setState();
    }

    _saveValue(){
       var isSuccess= fs.Sp.setInt({key:this._userNumber,value:this._count});
       fs.Loading.showSuccess({info:isSuccess?"保存成功！":"保存失败"});
    }

    async _getValue(){
        this._getCount = await fs.Sp.getInt({key:this._userNumber,defaultValue:0});
        this.setState();
    }
    
    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Shared Prefernces"),
            }),
            body:new fs.Center({
                child:new fs.Column({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        new fs.Text("关键字(key): userNum"),
                        new fs.Text("当前值: "+String(this._count)),
                        new fs.Text("存储值(get): "+String(this._getCount)),
                        new fs.RaisedButton({
                            child:new fs.Text("当前值+1"),
                            onPressed:this._incrementCounter.bind(this),
                        }),

                        new fs.RaisedButton({
                            child:new fs.Text("保存值"),
                            onPressed:this._saveValue.bind(this),
                        }),

                        new fs.RaisedButton({
                            child:new fs.Text("获取值"),
                            onPressed:this._getValue.bind(this),
                        }),
                    ]
                }),
            }),
        });
    }
}
