

let {
  JSLog,
  JSWidgetState,
  JSStatefulWidget,
  Scaffold,
  ListTile,
  AppBar,
  Text,
  Icon,
  EdgeInsets,
  Colors,
  TextStyle,
  ListView,
  Padding,
  Icons} = require("js_flutter.js");

const dart_sdk = require("dart_sdk");
const dart = dart_sdk.dart;

const { SectionTitle } = require("./component/section_title.js");
let packages__sp = require("packages/shared_preferences/shared_preferences.js");




class PageExampleSharedPreferences extends JSStatefulWidget {
  constructor() {
    super("PageExampleSharedPreferences");

  }

  createState() {
    return new PageExampleSharedPreferencesState(this);
  }
}

class PageExampleSharedPreferencesState extends JSWidgetState {
  constructor() {
    super("PageExampleSharedPreferencesState");
    this.response = "点击小人Run上面的代码";
    this.count = 0;

    this.prefs = null;
    this.setup();
  }

  async setup() {
    this.prefs = (await packages__sp.SharedPreferences.getInstance());
  }


  dioCodeText() {
    return "prefs.setString(‘mxflutter’, str)";
  }
  dioCodeText2() {
    return "this.prefs.getString('mxflutter')";
  }


  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("MessageChannel Example"),
      }),
      body: new ListView({
        children: [
          new SectionTitle("Code 调用prefs.setString"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {


              this.setState(function () {

                let str = "XSFlutter SharedPreferences: Count : " + this.count++;

                this.response = " prefs.setString('mxflutter'," + str + ")";

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Code 调用 prefs.getString"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText2(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {

              this.setState(function () {
                let v = this.prefs.getString("mxflutter");
                this.response = v;

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("prefs Result"),

          new Padding({
            padding: EdgeInsets.all(10),
            child: new Text(this.response, {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
          })

        ],
      })
    });
    return widget;
  }
}

module.exports = {
  PageExampleSharedPreferences,
};
