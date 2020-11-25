/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Google Counter
 */

import { AppBar, AspectRatio, Center, Colors, Column, FloatingActionButton, FlutterLogo, FontStyle, FontWeight, Icon, Icons, 
    JSStatefulWidget, JSWidgetState, MainAxisAlignment, Scaffold, Text, TextStyle } from "./js_flutter_sdk"; 

export class MyCounterPage extends JSStatefulWidget{
    createState() {
        return new _MyCounterPage();
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
    build() {
        return Scaffold.new({
            appBar:AppBar.new({
                title:Text.new("Google Counter"),
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
                               fontStyle:FontStyle.italic,
                               fontSize:24,    
                               color:Colors.red,                            
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