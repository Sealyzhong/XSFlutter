

let {
  JSLog,
  XSJSWidgetState,
  XSJSStatefulWidget,
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
  Icons,
  MethodChannel
} = require("js_flutter.js");

const dart_sdk = require("dart_sdk");

const { SectionTitle } = require("./component/section_title.js");

class PageExampleMessageChannel extends XSJSStatefulWidget {
  constructor() {
    super("PageExampleMessageChannel");

  }

  createState() {
    return new PageExampleMessageChannelState(this);
  }
}

class PageExampleMessageChannelState extends XSJSWidgetState {
  constructor() {
    super("PageExampleMessageChannelState");
    this.response = "点击小人Run上面的代码";

    this.methodChannel = new MethodChannel("XSFlutter_MethodChannel_Demo");
  }

  dioCodeText() {
    return "let result = await this.methodChannel.invokeMethod('callNativeIconListRefresh', {});";
  }
  dioCodeText2() {
    return "let result = await this.methodChannel.invokeMethod('callNativeIconListLoadMore', {});";
  }

  async callMethodChannel(method) {

    //MessageChannel 用法示例
    let result = await this.methodChannel.invokeMethod(method, {});

    JSLog.log("callNativeIconListRefresh result: " + result);
    return result;

  }



  build() {
    let widget = new Scaffold({
      appBar: new AppBar({
        title: new Text("MessageChannel Example"),
      }),
      body: new ListView({
        children: [
          new SectionTitle("Code 调用MessageChannel ListRefresh"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.callMethodChannel("callNativeIconListRefresh");

              this.setState(function () {

                this.response = JSON.stringify(response ? response : "messagechannel return empty");

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("Code 调用MessageChannel ListLoadMore"),
          new ListTile({
            trailing: new Icon(Icons["directions_run"]),
            title: new Text(this.dioCodeText2(), {
              style: new TextStyle({
                color: Colors.gray,
              })
            }),
            onTap: async function () {
              let response = await this.callMethodChannel("callNativeIconListLoadMore");

              this.setState(function () {

                this.response = JSON.stringify(response ? response : "messagechannel return empty");

              }.bind(this));

            }.bind(this)
          }),
          new SectionTitle("MessageChannel Result"),

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
  PageExampleMessageChannel,
};
