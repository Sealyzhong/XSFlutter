import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");

//
export class MyListViewCustomBuilderPage extends fs.StatefulWidget {

    createState() {
        return new _MyListViewCustomBuilderPage(this);
    }
}

class _MyListViewCustomBuilderPage extends fs.WidgetState {
    //重构
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title:new fs.Text("ListView.builder")
            }),
            body:fs.ListView.custom({
                childrenDelegate:new fs.SliverChildBuilderDelegate({
                    childCount:MyIconData.cupertinoIcons.length,
                    builder:(context:fs.BuildContext,index:number)=>{
                        var model = MyIconData.cupertinoIcons[index];
                        return  new fs.Container({
                            padding:fs.EdgeInsets.all(10),
                            child:new fs.Row({
                                children: [
                                    new fs.Icon(model.value),
                                    new fs.SizedBox({width:10}),
                                    new fs.Expanded({
                                        child:new fs.Text(model.name,{overflow:fs.TextOverflow.ellipsis, style:new fs.TextStyle({fontSize:16})},),
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