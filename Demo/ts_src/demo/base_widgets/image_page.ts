
import { AppBar,  BoxFit, BuildContext, Colors, Container, ListTile, ListView, 
  Scaffold, StatelessWidget,Text,Image} from "flutter_sdk";

export class MyImagePage extends StatelessWidget{

    genImageUI(boxFitName:string,fit:BoxFit){
        return [
          new ListTile({
            title: new Text('BoxFit.'+boxFitName,),
          }),
          new Container({
            height:150,
            width: 300,
            color:Colors.orange,
            child:Image.asset('people/ali_landscape.png', {
              package: 'flutter_gallery_assets',
              fit: fit,
              height: 100
            }),
          }),
        ];
      }

    build(context:BuildContext) {
        return new Scaffold({
            appBar:new AppBar({
                title:new Text("Images"),
            }),
            body:new ListView({
                children:[                    
                    new ListTile({title:new Text("加载网络图片"),}),
                    Image.network('https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg',
                     {
                         fit:BoxFit.cover,
                         height:250,
                     }),
          
                    new ListTile({title:new Text("加载本地图片"),}),
                    Image.asset('people/ali_landscape.png', {
                        package: 'flutter_gallery_assets',
                        fit: BoxFit.cover,
                        height: 250
                      }),
                    
                      ...this.genImageUI("contain",BoxFit.contain),
                      ...this.genImageUI("fill",BoxFit.fill),
                      ...this.genImageUI("fitHeight",BoxFit.fitHeight),
                      ...this.genImageUI("fitWidth",BoxFit.fitWidth),
                      ...this.genImageUI("scaleDown",BoxFit.scaleDown),
                      ...this.genImageUI("none",BoxFit.none),
                    
                ],
            }),
        });
    }
}