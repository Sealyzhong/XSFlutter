

let {
  XSJSStatelessWidget,
  Scaffold,
  ListTile,
  AppBar,
  Text,
  ListView,
  Scrollbar,
  Key,
  Navigator,
  MaterialPageRoute,
} = require("js_flutter.js");

const { SectionTitle } = require("./component/section_title.js");




let { PageExampleMessageChannel } = require("platform/example_message_channel.js");
let { PageExampleSharedPreferences } = require("platform/example_shared_preferences.js");




class PlatformExamplesPage extends XSJSStatelessWidget {
  constructor() {
    super("PlatformExamplesPage");
  }

  build(context) {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text('Platform Examples'),
      }),
      body: new Scrollbar({
        child: new ListView({
          children: [
            new SectionTitle("MessageChannel"),

            new ListTile({
              title: new Text("MessageChannel"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function () {
                    return new PageExampleMessageChannel;
                  }
                }))
              }
            }),
            new SectionTitle("网络组件", { key: new Key("1") }),

            new ListTile({
              title: new Text("Dio Examples"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                let { PageExampleDio } = require("platform/example_dio.js");
                Navigator.push(context, new MaterialPageRoute({
                  builder: function () {
                    return new PageExampleDio;
                  }
                }))
              }
            }),

            new SectionTitle("存储"),

            new ListTile({
              title: new Text("shared_preferences"),
              subtitle: new Text("iOS/Android"),
              onTap: function () {
                Navigator.push(context, new MaterialPageRoute({
                  builder: function () {
                    return new PageExampleSharedPreferences;
                  }
                }))
              }
            }),

          ],
        })
      })
    });
    return widget;
  }
}

module.exports = {
  PlatformExamplesPage,
};
