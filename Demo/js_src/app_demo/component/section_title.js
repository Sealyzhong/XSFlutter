"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionTitle = void 0;
const js_basic_icons_1 = require("./js_basic_icons");
const bt = require("./js_basic_types");
const fw = require("./js_framework");
const mw = require("./js_material_widget");
class SectionTitle extends fw.JSStatelessWidget {
    constructor(title, key) {
        super("SectionTitle", { key: key });
        this.title = title;
    }
    build(buildContext) {
        return mw.Container.new({
            padding: bt.EdgeInsets.all(10.),
            color: bt.Colors.green,
            child: mw.Icon.new({
                icon: js_basic_icons_1.Icons.ac_unit
            }),
        });
    }
}
exports.SectionTitle = SectionTitle;

/*

let {
  JSStatelessWidget,
  Container,
  Color,
  Text,
  Icon,
  IconData,
  EdgeInsets,
  Colors,
  Row,
  TextStyle,
  Padding,
  TextAlign,
} = require("js_flutter.js");

class SectionTitle extends JSStatelessWidget {
  constructor(title,{key}={}){
    super("SectionTitle",{key:key});
    this.title = title;
  }

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
}*/
