//  XSFlutterFramework
//  Copyright 2019 The XSFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

let {
    XSJSStatefulWidget,
    XSJSWidgetState,
    Scaffold,
    Container,
    Colors,
    AppBar,
    Text,
    Center,
    Icon,
    Column,
    Alignment,
    EdgeInsets,
    FloatingActionButton,
    MainAxisAlignment,
    Icons
} = require("js_flutter.js");


class MyHomePage extends XSJSStatefulWidget {
    constructor() {
        super();
        //this.title = title;
    }

    //@override
    createState() {
        return new _MyHomePageState();
    }
}

class _MyHomePageState extends XSJSWidgetState {

    constructor() {
        super();
        this._counter = 0;
    }

    _incrementCounter() {
        this.setState(function () {
            this._counter++;
        }.bind(this));
    }

    ///@override
    build() {
        return new Scaffold({
            appBar: new AppBar({
                title: new Text("this.widget.title"),
            }),
            body: new Center({
                child: new Column({
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                        new Container({
                            color:Colors.black,
                            height:30,
                            width:100,
                        }),
                        new Container({
                            child:  new Text(
                                "中国人民", {
                                    /*style:  TextStyle.new({
                                        color: Colors.red,
                                        fontSize: 18.0
                                    })*/
                                }),
                            alignment: Alignment.new(0.0,0.0)
                        }),
                        new Container({padding: EdgeInsets.symmetric({vertical: 100.0}),color:Colors.black
                            ,margin: EdgeInsets.zero(),child: new Text('asdfadsfadsf')}),
                                     new Text(
                                                'This example is developed using JS.',
                                            ),
                        new Text(
                            'You have pushed the button this many times:',
                        ),
                        new Text(
                             String(this._counter),
                        ),
                    ],
                }),
            }),
            floatingActionButton: new FloatingActionButton({
                onPressed: this._incrementCounter.bind(this),
                tooltip: 'Increment',
                child: new Icon(Icons.add),
            }), // This trailing comma makes auto-formatting nicer for build methods.
        });
    }
}

exports.MyHomePage = MyHomePage;
