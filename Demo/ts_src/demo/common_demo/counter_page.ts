/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { AppBar, JSStatefulWidget, JSWidgetState, Scaffold,Text,Center, Column, MainAxisAlignment, FlutterLogo, TextStyle, FontWeight, FloatingActionButton, Icon, Icons, JSBuildContext } from "ts_flutter_sdk";


export class MyCounterPage extends JSStatefulWidget{
    createState() {
        return new _MyCounterPage();
    }

    static new (){
        return new MyCounterPage();
    }
}

class _MyCounterPage extends JSWidgetState{
   _counter:number=0;

    //计数器
    _incrementCounter(){
        this._counter++;
        this.setState();
    }

    //重构
    build(context:JSBuildContext) {
        return Scaffold.new({
            appBar:AppBar.new({
                title:Text.new("Flutter Counter"),
            }),
            body:Center.new({
                child:Column.new({
                    mainAxisAlignment:MainAxisAlignment.center,
                    children:[
                        FlutterLogo.new({size:64}),
                        Text.new("This example is developed using JS."),
                        Text.new(String(this._counter),{
                            style:TextStyle.new({
                               fontWeight:FontWeight.bold,
                               fontSize:24,                       
                            }),        
                        }),
                    ],
                }),
            }),
            floatingActionButton:FloatingActionButton.new({
                onPressed:this._incrementCounter.bind(this),
                child:Icon.new(Icons.add),
            }),
        });
    }
}