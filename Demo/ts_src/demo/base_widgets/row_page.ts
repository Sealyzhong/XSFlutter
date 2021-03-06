
import { AppBar, BuildContext, Colors, Container, CrossAxisAlignment, ListTile, 
  ListView, MainAxisAlignment, Row, Scaffold, StatelessWidget,Text } from "flutter_sdk";

export class MyRowPage extends StatelessWidget{

    genSevenContainers(){
        return  [
          new Container({
            color:Colors.red,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.orange,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.yellow,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.green,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.indigo,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.purple,
            height:30,
            width:100,
          }),
        ];
      }
    
    
      genThreeContainers(){
        return  [
          new Container({
            color:Colors.red,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.orange,
            height:30,
            width:100,
          }),
          new Container({
            color:Colors.yellow,
            height:30,
            width:100,
          }),
        ];
      }

      
    build(context:BuildContext) {
        return new Scaffold({
            appBar: new AppBar({
              title: new Text('Row',),
            }),
            body: new ListView({
                children:[
                  new ListTile({title:new Text("Row"),}),
                  new Row({
                    children: [
                      new Container({
                        color:Colors.red,
                        height:100,
                        width:30,
                      }),
                      new Container({
                        color:Colors.orange,
                        height:100,
                        width:30,
                      }),
                      new Container({
                        color:Colors.yellow,
                        height:100,
                        width:30,
                      }),
                      new Container({
                        color:Colors.green,
                        height:100,
                        width:30,
                      }),
                      new Container({
                        color:Colors.indigo,
                        height:100,
                        width:30,
                      }),
                      new Container({
                        color:Colors.purple,
                        height:100,
                        width:30,
                      }),
                    ],
                  }),
        
                  new ListTile({title:new Text("Row Top-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.start,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Top-Middle"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.start,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Top-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.start,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
                  new ListTile({title:new Text("Row Center-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.center,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Center-Center"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.center,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Center-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.center,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
                  new ListTile({title:new Text("Row Bottom-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.end,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Bottom-Middle"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.end,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row Bottom-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.end,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
        
        
                  new ListTile({title:new Text("Row SpaceAround-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceAround,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceAround-Middle"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceAround,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceAround-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceAround,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
        
        
        
                  new ListTile({title:new Text("Row SpaceBetween-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceBetween,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceBetween-Middle"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceBetween,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceBetween-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceBetween,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
                  new ListTile({title:new Text("Row SpaceEvenly-Left"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment:CrossAxisAlignment.start,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceEvenly-Middle"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment:CrossAxisAlignment.center,
                      children: this.genThreeContainers(),
                    }),
                  }),
                  new ListTile({title:new Text("Row SpaceEvenly-Right"),}),
                  new Container({
                    color:Colors.grey,
                    height:200,
                    child:new Row({
                      mainAxisAlignment:MainAxisAlignment.spaceEvenly,
                      crossAxisAlignment:CrossAxisAlignment.end,
                      children: this.genThreeContainers(),
                    }),
                  }),
        
        
                ],
              })
          });
    }
}