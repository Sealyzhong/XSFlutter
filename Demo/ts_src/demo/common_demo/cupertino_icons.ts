import { AppBar, Container, CupertinoIcons, EdgeInsets, Expanded, FlutterWidget, 
    Icon, IconData, JSBuildContext, JSStatelessWidget, ListView, Row, Scaffold,SizedBox,Text, TextOverflow, TextStyle } from "ts_flutter_sdk";


export class MyCupertinoIcons extends JSStatelessWidget{
    l = new Map<string,IconData>(
        [
            ["left_chevron",CupertinoIcons.left_chevron],
            ["right_chevron",CupertinoIcons.right_chevron],
            ["share",CupertinoIcons.share],
            ["share_solid",CupertinoIcons.share_solid],
            ["book",CupertinoIcons.book],
            ["book_solid",CupertinoIcons.book_solid],
            ["bookmark",CupertinoIcons.bookmark],
            ["bookmark_solid",CupertinoIcons.bookmark_solid],
            ["info",CupertinoIcons.info],
            ["reply",CupertinoIcons.reply],
            ["conversation_bubble",CupertinoIcons.conversation_bubble],
            ["profile_circled",CupertinoIcons.profile_circled],
            ["plus_circled",CupertinoIcons.plus_circled],
            ["minus_circled",CupertinoIcons.minus_circled],
            ["flag",CupertinoIcons.flag],
            ["search",CupertinoIcons.search],
            ["check_mark",CupertinoIcons.check_mark],
            ["check_mark_circled",CupertinoIcons.check_mark_circled],
            ["check_mark_circled_solid",CupertinoIcons.check_mark_circled_solid],
            ["circle",CupertinoIcons.circle],
            ["circle_filled",CupertinoIcons.circle_filled],
            ["back",CupertinoIcons.back],
            ["forward",CupertinoIcons.forward],
            ["home",CupertinoIcons.home],
            ["shopping_cart",CupertinoIcons.shopping_cart],
            ["ellipsis",CupertinoIcons.ellipsis],
            ["phone",CupertinoIcons.phone],
            ["phone_solid",CupertinoIcons.phone_solid],
            ["down_arrow",CupertinoIcons.down_arrow],
            ["up_arrow",CupertinoIcons.up_arrow],
            ["battery_charging",CupertinoIcons.battery_charging],
            ["battery_empty",CupertinoIcons.battery_empty],
            ["battery_full",CupertinoIcons.battery_full],
            ["battery_75_percent",CupertinoIcons.battery_75_percent],
            ["battery_25_percent",CupertinoIcons.battery_25_percent],
            ["bluetooth",CupertinoIcons.bluetooth],
            ["restart",CupertinoIcons.restart],
            ["reply_all",CupertinoIcons.reply_all],
            ["reply_thick_solid",CupertinoIcons.reply_thick_solid],
            ["share_up",CupertinoIcons.share_up],
            ["shuffle",CupertinoIcons.shuffle],
            ["shuffle_medium",CupertinoIcons.shuffle_medium],
            ["shuffle_thick",CupertinoIcons.shuffle_thick],
            ["photo_camera",CupertinoIcons.photo_camera],
            ["photo_camera_solid",CupertinoIcons.photo_camera_solid],
            ["video_camera",CupertinoIcons.video_camera],
            ["video_camera_solid",CupertinoIcons.video_camera_solid],
            ["switch_camera",CupertinoIcons.switch_camera],
            ["switch_camera_solid",CupertinoIcons.switch_camera_solid],
            ["collections",CupertinoIcons.collections],
            ["collections_solid",CupertinoIcons.collections_solid],
            ["folder",CupertinoIcons.folder],
            ["folder_solid",CupertinoIcons.folder_solid],
            ["folder_open",CupertinoIcons.folder_open],
            ["delete",CupertinoIcons.delete],
            ["delete_solid",CupertinoIcons.delete_solid],
            ["delete_simple",CupertinoIcons.delete_simple],
            ["pen",CupertinoIcons.pen],
            ["pencil",CupertinoIcons.pencil],
            ["create",CupertinoIcons.create],
            ["create_solid",CupertinoIcons.create_solid],
            ["refresh",CupertinoIcons.refresh],
            ["refresh_circled",CupertinoIcons.refresh_circled],
            ["refresh_circled_solid",CupertinoIcons.refresh_circled_solid],
            ["refresh_thin",CupertinoIcons.refresh_thin],
            ["refresh_thick",CupertinoIcons.refresh_thick],
            ["refresh_bold",CupertinoIcons.refresh_bold],
            ["clear_thick",CupertinoIcons.clear_thick],
            ["clear_thick_circled",CupertinoIcons.clear_thick_circled],
            ["clear",CupertinoIcons.clear],
            ["clear_circled",CupertinoIcons.clear_circled],
            ["clear_circled_solid",CupertinoIcons.clear_circled_solid],
            ["add",CupertinoIcons.add],
            ["add_circled",CupertinoIcons.add_circled],
            ["add_circled_solid",CupertinoIcons.add_circled_solid],
            ["gear",CupertinoIcons.gear],
            ["gear_solid",CupertinoIcons.gear_solid],
            ["gear_big",CupertinoIcons.gear_big],
            ["settings",CupertinoIcons.settings],
            ["settings_solid",CupertinoIcons.settings_solid],
            ["music_note",CupertinoIcons.music_note],
            ["double_music_note",CupertinoIcons.double_music_note],
            ["play_arrow",CupertinoIcons.play_arrow],
            ["play_arrow_solid",CupertinoIcons.play_arrow_solid],
            ["pause",CupertinoIcons.pause],
            ["pause_solid",CupertinoIcons.pause_solid],
            ["loop",CupertinoIcons.loop],
            ["loop_thick",CupertinoIcons.loop_thick],
            ["volume_down",CupertinoIcons.volume_down],
            ["volume_mute",CupertinoIcons.volume_mute],
            ["volume_off",CupertinoIcons.volume_off],
            ["volume_up",CupertinoIcons.volume_up],
            ["fullscreen",CupertinoIcons.fullscreen],
            ["fullscreen_exit",CupertinoIcons.fullscreen_exit],
            ["mic_off",CupertinoIcons.mic_off],
            ["mic",CupertinoIcons.mic],
            ["mic_solid",CupertinoIcons.mic_solid],
            ["clock",CupertinoIcons.clock],
            ["clock_solid",CupertinoIcons.clock_solid],
            ["time",CupertinoIcons.time],
            ["time_solid",CupertinoIcons.time_solid],
            ["padlock",CupertinoIcons.padlock],
            ["padlock_solid",CupertinoIcons.padlock_solid],
            ["eye",CupertinoIcons.eye],
            ["eye_solid",CupertinoIcons.eye_solid],
            ["person",CupertinoIcons.person],
            ["person_solid",CupertinoIcons.person_solid],
            ["person_add",CupertinoIcons.person_add],
            ["person_add_solid",CupertinoIcons.person_add_solid],
            ["group",CupertinoIcons.group],
            ["group_solid",CupertinoIcons.group_solid],
            ["mail",CupertinoIcons.mail],
            ["mail_solid",CupertinoIcons.mail_solid],
            ["location",CupertinoIcons.location],
            ["location_solid",CupertinoIcons.location_solid],
            ["tag",CupertinoIcons.tag],
            ["tag_solid",CupertinoIcons.tag_solid],
            ["tags",CupertinoIcons.tags],
            ["tags_solid",CupertinoIcons.tags_solid],
            ["bus",CupertinoIcons.bus],
            ["car",CupertinoIcons.car],
            ["car_detailed",CupertinoIcons.car_detailed],
            ["train_style_one",CupertinoIcons.train_style_one],
            ["train_style_two",CupertinoIcons.train_style_two],
            ["paw",CupertinoIcons.paw],
            ["paw_solid",CupertinoIcons.paw_solid],
            ["game_controller",CupertinoIcons.game_controller],
            ["game_controller_solid",CupertinoIcons.game_controller_solid],
            ["lab_flask",CupertinoIcons.lab_flask],
            ["lab_flask_solid",CupertinoIcons.lab_flask_solid],
            ["heart",CupertinoIcons.heart],
            ["heart_solid",CupertinoIcons.heart_solid],
            ["bell",CupertinoIcons.bell],
            ["bell_solid",CupertinoIcons.bell_solid],
            ["news",CupertinoIcons.news],
            ["news_solid",CupertinoIcons.news_solid],
            ["brightness",CupertinoIcons.brightness],
            ["brightness_solid",CupertinoIcons.brightness_solid],
            
            
        ]
    );

    getWidgetList(){
        var list = new Array<FlutterWidget>();
        this.l.forEach((v,k)=>{
            list.push( Container.new({
                padding:EdgeInsets.all(10),
                child:Row.new({
                  children: [
                    Icon.new(v),
                    SizedBox.new({width:10}),
                    Expanded.new({
                        child:Text.new(k,{overflow:TextOverflow.ellipsis, style:TextStyle.new({fontSize:16})},),
                    }),
                    
                  ]
                }),
              }));
        });
        return list;
    }
    //重构
    build(context:JSBuildContext) {
        return Scaffold.new({
            appBar:AppBar.new({
                title:Text.new("Cupertino Icons")
            }),
            body:ListView.new({
                children:this.getWidgetList()
            }),
        });
    }

    static new (){
        return new MyCupertinoIcons();
    }
}