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

    static new (){
        return new MyCounterPage();
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
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Counter"),
            }),
            body:fs.Center.new({
                child:fs.Column.new({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        fs.Text.new("This example is developed using TS."),
                        fs.Text.new(String(this._counter),{
                            style:fs.TextStyle.new({
                               fontWeight:fs.FontWeight.bold,
                               fontSize:24,                       
                            }),        
                        }),
                    ],
                }),
            }),
            floatingActionButton:fs.FloatingActionButton.new({
                onPressed:this._incrementCounter.bind(this),
                child:fs.Icon.new(fs.Icons.add),
            }),
        });
    }
}