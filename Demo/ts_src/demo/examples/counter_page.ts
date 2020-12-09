/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import fs = require("flutter_sdk");


export class MyCounterPage extends fs.StatefulWidget{
    createState() {
        return new _MyCounterPage(this);
    }
}

class _MyCounterPage extends fs.WidgetState{
   _counter:number=0;

    //计数器
    _incrementCounter(){
        this._counter++;
        this.setState();
    }

    //重构
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("Counter"),
            }),
            body:new fs.Center({
                child:new fs.Column({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        new fs.Text("This example is developed using TS."),
                        new fs.Text(String(this._counter),{
                            style:new fs.TextStyle({
                               fontWeight:fs.FontWeight.bold,
                               fontSize:24,                       
                            }),        
                        }),
                    ],
                }),
            }),
            floatingActionButton:new fs.FloatingActionButton({
                onPressed:this._incrementCounter.bind(this),
                child:new fs.Icon(fs.Icons.add),
            }),
        });
    }
}