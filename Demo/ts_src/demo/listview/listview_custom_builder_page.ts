import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");

//
export class MyListViewCustomBuilderPage extends fs.StatefulWidget {

    createState() {
        return new _MyListViewCustomBuilderPage(this);
    }

    static new (){
        return new MyListViewCustomBuilderPage();
    }
}

class _MyListViewCustomBuilderPage extends fs.WidgetState {
    //重构
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("ListView.builder")
            }),
            body:fs.ListView.custom({
                childrenDelegate:fs.SliverChildBuilderDelegate.new({
                    childCount:MyIconData.cupertinoIcons.length,
                    builder:(context:fs.BuildContext,index:number)=>{
                        var model = MyIconData.cupertinoIcons[index];
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