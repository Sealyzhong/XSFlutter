import { MySectionTitle } from "demo/widgets/section_title";
import fs = require("flutter_sdk");
export class MyTextPage extends fs.StatelessWidget{
   
    build(context:fs.BuildContext) {
        return new fs.Scaffold({
            appBar: new fs.AppBar({
              title: new fs.Text('Text',),
            }),
            body: new fs.ListView({
              children:[
                new MySectionTitle("普通文本"),
                new fs.ListTile({
                  title:new fs.Text("设置文本颜色",{
                    style:new fs.TextStyle({
                      color:fs.Colors.orange,
                    })
                  }),
                }),
                new MySectionTitle("富文本"),
                new fs.Padding({
                  padding:fs.EdgeInsets.all(10),
                  child: new fs.RichText({
                    text: new fs.TextSpan({
                      style: new fs.TextStyle({
                        color: new fs.Color(0xFFFF8C00),
                        fontSize: 18.0,
                        decoration: fs.TextDecoration.underline,
                        decorationColor: fs.Colors.orange,
                        decorationStyle: fs.TextDecorationStyle.dashed,
                      }),
                      text: '超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text，超长文案rich text',
                      children: [
                        new fs.TextSpan({
                          text: ' style  ',
                          style: new fs.TextStyle({
                            color: fs.Colors.red,
                            fontWeight: fs.FontWeight.bold,
                            decoration: fs.TextDecoration.none,
                          })
                        }),
                        new fs.TextSpan({
                          text: 'your text',
                          style: new fs.TextStyle({
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

}