import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyTextPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
              title: fs.Text.new('Text',),
            }),
            body: fs.ListView.new({
              children:[
                MySectionTitle.new("普通文本"),
                fs.ListTile.new({
                  title:fs.Text.new("设置文本颜色",{
                    style:fs.TextStyle.new({
                      color:fs.Colors.orange,
                    })
                  }),
                }),
                MySectionTitle.new("富文本"),
                fs.Padding.new({
                  padding:fs.EdgeInsets.all(10),
                  child: fs.RichText.new({
                    text: fs.TextSpan.new({
                      style: fs.TextStyle.new({
                        color: fs.Color.new(0xFFFF8C00),
                        fontSize: 18.0,
                        decoration: fs.TextDecoration.underline,
                        decorationColor: fs.Colors.orange,
                        decorationStyle: fs.TextDecorationStyle.dashed,
                      }),
                      text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                      children: [
                        fs.TextSpan.new({
                          text: ' style  ',
                          style: fs.TextStyle.new({
                            color: fs.Colors.red,
                            fontWeight: fs.FontWeight.bold,
                            decoration: fs.TextDecoration.none,
                          })
                        }),
                        fs.TextSpan.new({
                          text: 'your text',
                          style: fs.TextStyle.new({
                            color: fs.Colors.blue,
                            fontWeight: fs.FontWeight.bold,
                            decoration: fs.TextDecoration.none,
                          })
                        }),
                      ],
                    }),
                    overflow: fs.TextOverflow.ellipsis,
                    maxLines: 99
                  }),
                })
              ],
            })
          });
    }

    static new(){
        return new MyTextPage();
    }
}