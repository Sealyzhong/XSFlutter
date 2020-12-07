/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");
import tl = require("flutter_third_library");

export class MyPackageInfoPage extends fs.StatefulWidget{
    createState() {
        return new _MyPackageInfoPage(this);
    }

    static new (){
        return new MyPackageInfoPage();
    }
}

class _MyPackageInfoPage extends fs.WidgetState{
    
   async _updatePackageInfo(){
       await tl.PackageInfo.updateInfo();
        this.setState();
    }

    build(context:fs.BuildContext){
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title: fs.Text.new("包信息"),
            }),
            body:fs.Center.new({
                child:fs.Column.new({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        fs.Text.new("appName: "+String(tl.PackageInfo.appName)),
                        fs.Text.new("buildNumber: "+String(tl.PackageInfo.buildNumber)),
                        fs.Text.new("packageName: "+String(tl.PackageInfo.packageName)),
                        fs.Text.new("version: "+String(tl.PackageInfo.version)),
                    ]
                }),
            }),
        });
    }
}
