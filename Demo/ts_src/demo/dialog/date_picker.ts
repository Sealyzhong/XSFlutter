/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: 入口页
 */

import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
import moment = require("moment");

export class MyDatePickerPage extends fs.StatefulWidget{
    createState() {
        return new _MyDatePickerPageState(this);
    }
}

class _MyDatePickerPageState extends fs.WidgetState{
    selectDate= new Date();// moment();

    build(context:fs.BuildContext){
        //var that = this;
        return new fs.Scaffold({
            appBar:new fs.AppBar({
                title: new fs.Text("Date Picker"),
            
            }),
            body:new fs.ListView({
                children:[
                    new  MySectionTitle("日期选择"),
                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("1、ShowDatePicker(默认主题)"),
                        subtitle:new fs.Text("返回值："+moment(this.selectDate).format("YYYY-MM-DD")),
                        onTap: async ()=>{       
                          var v = await fs.Dialog.show(this.widget,new fs.ShowDatePicker({initialDate:moment(this.selectDate).unix()}));    
                          if(v!=null && v!=undefined){
                             this.selectDate = moment(fs.Convert.toNumber(v)).toDate();
                             fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                             this.setState();                         
                          }                          
                        }                        
                    }),

                    new fs.ListTile({
                        trailing:new fs.Icon(fs.Icons.chevron_right),
                        title:new fs.Text("2、ShowDatePicker(黑色主题)"),
                        subtitle:new fs.Text("返回值："+moment(this.selectDate).format("YYYY-MM-DD")),
                        onTap: async ()=>{       
                          var v = await fs.Dialog.show(this.widget,new fs.ShowDatePicker({initialDate:moment(this.selectDate).unix(),themeData:fs.ThemeData.dark()}));    
                          if(v!=null && v!=undefined){
                             this.selectDate = moment(fs.Convert.toNumber(v)).toDate();
                             fs.Log.log(moment(this.selectDate).format("YYYY-MM-DD"));
                             this.setState();                         
                          }                          
                        }                        
                    }),

                ],
            }),
        });
    }
}
