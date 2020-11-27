"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySectionTitle = void 0;
const color_util_1 = require("demo/utils/color_util");
const ts_flutter_sdk_1 = require("ts_flutter_sdk");
class MySectionTitle extends ts_flutter_sdk_1.JSStatelessWidget {
    constructor(title) {
        super();
        this.title = title;
    }
    static new(title) {
        return new MySectionTitle(title);
    }
    build(buildContext) {
        return ts_flutter_sdk_1.Container.new({
            padding: ts_flutter_sdk_1.EdgeInsets.all(10.0),
            color: color_util_1.MyColorUtil.primaryColor,
            child: ts_flutter_sdk_1.Row.new({
                mainAxisAlignment: ts_flutter_sdk_1.MainAxisAlignment.start,
                children: [
                    ts_flutter_sdk_1.Icon.new(ts_flutter_sdk_1.Icons.ac_unit, {
                        color: ts_flutter_sdk_1.Colors.white,
                    }),
                    ts_flutter_sdk_1.Container.new({
                        width: 10,
                    }),
                    ts_flutter_sdk_1.Text.new(this.title, { style: ts_flutter_sdk_1.TextStyle.new({
                            color: ts_flutter_sdk_1.Colors.white,
                            fontWeight: ts_flutter_sdk_1.FontWeight.bold,
                            fontSize: 18,
                        }) }),
                ]
            }),
        });
    }
}
exports.MySectionTitle = MySectionTitle;
/*
 class SectionTitle extends JSStatelessWidget {
   
   build(context){
     return new Container({
       padding: EdgeInsets.all(10.0),
       color: Colors.red,// Theme.of(context).primaryColor,
       child: new Row({
         children: [
           new Icon(new IconData(0xe80e, { fontFamily: 'MaterialIcons' }), { size: 20, color: new Color(0xFFFFFFFF) }),
           new Padding({ padding: EdgeInsets.fromLTRB(10.0, 0.0, 0.0, 0.0) }),
           new Text(this.title, {
             textAlign: TextAlign.start,
             style:new TextStyle({
               fontSize: 16,
               //fontWeight: Theme.of(context).textTheme.title.fontWeight,
               color:Colors.white
             })
           })
         ]
       })
     });
   }
 }
 
 module.exports = {
   SectionTitle,
 }
 */
