/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import fs = require("flutter_sdk");

export class MyPackageInfoPage extends fs.StatefulWidget{
    createState() {
        return new _MyPackageInfoPage(this);
    }
}

class _MyPackageInfoPage extends fs.WidgetState{
    
   async _updatePackageInfo(){
       await fs.PackageInfo.updateInfo();
        this.setState();
    }

    build(context:fs.BuildContext){
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("包信息"),
            }),
            body:new fs.Center({
                child:new fs.Column({
                    mainAxisAlignment:fs.MainAxisAlignment.center,
                    children:[
                        new fs.Text("appName: "+String(fs.PackageInfo.appName)),
                        new fs.Text("buildNumber: "+String(fs.PackageInfo.buildNumber)),
                        new fs.Text("packageName: "+String(fs.PackageInfo.packageName)),
                        new fs.Text("version: "+String(fs.PackageInfo.version)),
                    ]
                }),
            }),
        });
    }
}
