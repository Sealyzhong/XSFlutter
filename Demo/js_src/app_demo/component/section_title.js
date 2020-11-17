


let {
  XSJSStatelessWidget,
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

class SectionTitle extends XSJSStatelessWidget {
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
}

