import { MyIconData } from "demo/model/icon_data";
import fs = require("flutter_sdk");


//
export class MyListViewCustomListPage extends fs.StatefulWidget {

    createState() {
        return new _MyListViewCustomListPage(this);
    }

    static new (){
        return new MyListViewCustomListPage();
    }
}

class _MyListViewCustomListPage extends fs.WidgetState {

    getWidgetList(){
        var list = new Array<fs.Widget>();
        MyIconData.cupertinoIcons.forEach((model)=>{
            list.push( fs.Container.new({
                padding:fs.EdgeInsets.all(10),
                child:fs.Row.new({
                  children: [
                    fs.Icon.new(model.value),
                    fs.SizedBox.new({width:10}),
                    fs.Expanded.new({
                        child:fs.Text.new(model.name,{overflow:fs.TextOverflow.ellipsis, style:fs.TextStyle.new({fontSize:16})},),
                    }),
                  ]
                }),
              }));
        });
        return list;
    }
    //重构
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("ListView.custom.kst")
            }),
            body:fs.ListView.custom({
                childrenDelegate:fs.SliverChildListDelegate.new({
                    children:this.getWidgetList()
                })
            }),
        });
    }

    
}