import fs = require("flutter_sdk");

export class MyCupertinoIconsPage extends fs.StatelessWidget{
    l = new Map<string,fs.IconData>(
        [
            ["left_chevron",fs.CupertinoIcons.left_chevron],
            ["right_chevron",fs.CupertinoIcons.right_chevron],
            ["share",fs.CupertinoIcons.share],
            ["share_solid",fs.CupertinoIcons.share_solid],
            ["book",fs.CupertinoIcons.book],
            ["book_solid",fs.CupertinoIcons.book_solid],
            ["bookmark",fs.CupertinoIcons.bookmark],
            ["bookmark_solid",fs.CupertinoIcons.bookmark_solid],
            ["info",fs.CupertinoIcons.info],
            ["reply",fs.CupertinoIcons.reply],
            ["conversation_bubble",fs.CupertinoIcons.conversation_bubble],
            ["profile_circled",fs.CupertinoIcons.profile_circled],
            ["plus_circled",fs.CupertinoIcons.plus_circled],
            ["minus_circled",fs.CupertinoIcons.minus_circled],
            ["flag",fs.CupertinoIcons.flag],
            ["search",fs.CupertinoIcons.search],
            ["check_mark",fs.CupertinoIcons.check_mark],
            ["check_mark_circled",fs.CupertinoIcons.check_mark_circled],
            ["check_mark_circled_solid",fs.CupertinoIcons.check_mark_circled_solid],
            ["circle",fs.CupertinoIcons.circle],
            ["circle_filled",fs.CupertinoIcons.circle_filled],
            ["back",fs.CupertinoIcons.back],
            ["forward",fs.CupertinoIcons.forward],
            ["home",fs.CupertinoIcons.home],
            ["shopping_cart",fs.CupertinoIcons.shopping_cart],
            ["ellipsis",fs.CupertinoIcons.ellipsis],
            ["phone",fs.CupertinoIcons.phone],
            ["phone_solid",fs.CupertinoIcons.phone_solid],
            ["down_arrow",fs.CupertinoIcons.down_arrow],
            ["up_arrow",fs.CupertinoIcons.up_arrow],
            ["battery_charging",fs.CupertinoIcons.battery_charging],
            ["battery_empty",fs.CupertinoIcons.battery_empty],
            ["battery_full",fs.CupertinoIcons.battery_full],
            ["battery_75_percent",fs.CupertinoIcons.battery_75_percent],
            ["battery_25_percent",fs.CupertinoIcons.battery_25_percent],
            ["bluetooth",fs.CupertinoIcons.bluetooth],
            ["restart",fs.CupertinoIcons.restart],
            ["reply_all",fs.CupertinoIcons.reply_all],
            ["reply_thick_solid",fs.CupertinoIcons.reply_thick_solid],
            ["share_up",fs.CupertinoIcons.share_up],
            ["shuffle",fs.CupertinoIcons.shuffle],
            ["shuffle_medium",fs.CupertinoIcons.shuffle_medium],
            ["shuffle_thick",fs.CupertinoIcons.shuffle_thick],
            ["photo_camera",fs.CupertinoIcons.photo_camera],
            ["photo_camera_solid",fs.CupertinoIcons.photo_camera_solid],
            ["video_camera",fs.CupertinoIcons.video_camera],
            ["video_camera_solid",fs.CupertinoIcons.video_camera_solid],
            ["switch_camera",fs.CupertinoIcons.switch_camera],
            ["switch_camera_solid",fs.CupertinoIcons.switch_camera_solid],
            ["collections",fs.CupertinoIcons.collections],
            ["collections_solid",fs.CupertinoIcons.collections_solid],
            ["folder",fs.CupertinoIcons.folder],
            ["folder_solid",fs.CupertinoIcons.folder_solid],
            ["folder_open",fs.CupertinoIcons.folder_open],
            ["delete",fs.CupertinoIcons.delete],
            ["delete_solid",fs.CupertinoIcons.delete_solid],
            ["delete_simple",fs.CupertinoIcons.delete_simple],
            ["pen",fs.CupertinoIcons.pen],
            ["pencil",fs.CupertinoIcons.pencil],
            ["create",fs.CupertinoIcons.create],
            ["create_solid",fs.CupertinoIcons.create_solid],
            ["refresh",fs.CupertinoIcons.refresh],
            ["refresh_circled",fs.CupertinoIcons.refresh_circled],
            ["refresh_circled_solid",fs.CupertinoIcons.refresh_circled_solid],
            ["refresh_thin",fs.CupertinoIcons.refresh_thin],
            ["refresh_thick",fs.CupertinoIcons.refresh_thick],
            ["refresh_bold",fs.CupertinoIcons.refresh_bold],
            ["clear_thick",fs.CupertinoIcons.clear_thick],
            ["clear_thick_circled",fs.CupertinoIcons.clear_thick_circled],
            ["clear",fs.CupertinoIcons.clear],
            ["clear_circled",fs.CupertinoIcons.clear_circled],
            ["clear_circled_solid",fs.CupertinoIcons.clear_circled_solid],
            ["add",fs.CupertinoIcons.add],
            ["add_circled",fs.CupertinoIcons.add_circled],
            ["add_circled_solid",fs.CupertinoIcons.add_circled_solid],
            ["gear",fs.CupertinoIcons.gear],
            ["gear_solid",fs.CupertinoIcons.gear_solid],
            ["gear_big",fs.CupertinoIcons.gear_big],
            ["settings",fs.CupertinoIcons.settings],
            ["settings_solid",fs.CupertinoIcons.settings_solid],
            ["music_note",fs.CupertinoIcons.music_note],
            ["double_music_note",fs.CupertinoIcons.double_music_note],
            ["play_arrow",fs.CupertinoIcons.play_arrow],
            ["play_arrow_solid",fs.CupertinoIcons.play_arrow_solid],
            ["pause",fs.CupertinoIcons.pause],
            ["pause_solid",fs.CupertinoIcons.pause_solid],
            ["loop",fs.CupertinoIcons.loop],
            ["loop_thick",fs.CupertinoIcons.loop_thick],
            ["volume_down",fs.CupertinoIcons.volume_down],
            ["volume_mute",fs.CupertinoIcons.volume_mute],
            ["volume_off",fs.CupertinoIcons.volume_off],
            ["volume_up",fs.CupertinoIcons.volume_up],
            ["fullscreen",fs.CupertinoIcons.fullscreen],
            ["fullscreen_exit",fs.CupertinoIcons.fullscreen_exit],
            ["mic_off",fs.CupertinoIcons.mic_off],
            ["mic",fs.CupertinoIcons.mic],
            ["mic_solid",fs.CupertinoIcons.mic_solid],
            ["clock",fs.CupertinoIcons.clock],
            ["clock_solid",fs.CupertinoIcons.clock_solid],
            ["time",fs.CupertinoIcons.time],
            ["time_solid",fs.CupertinoIcons.time_solid],
            ["padlock",fs.CupertinoIcons.padlock],
            ["padlock_solid",fs.CupertinoIcons.padlock_solid],
            ["eye",fs.CupertinoIcons.eye],
            ["eye_solid",fs.CupertinoIcons.eye_solid],
            ["person",fs.CupertinoIcons.person],
            ["person_solid",fs.CupertinoIcons.person_solid],
            ["person_add",fs.CupertinoIcons.person_add],
            ["person_add_solid",fs.CupertinoIcons.person_add_solid],
            ["group",fs.CupertinoIcons.group],
            ["group_solid",fs.CupertinoIcons.group_solid],
            ["mail",fs.CupertinoIcons.mail],
            ["mail_solid",fs.CupertinoIcons.mail_solid],
            ["location",fs.CupertinoIcons.location],
            ["location_solid",fs.CupertinoIcons.location_solid],
            ["tag",fs.CupertinoIcons.tag],
            ["tag_solid",fs.CupertinoIcons.tag_solid],
            ["tags",fs.CupertinoIcons.tags],
            ["tags_solid",fs.CupertinoIcons.tags_solid],
            ["bus",fs.CupertinoIcons.bus],
            ["car",fs.CupertinoIcons.car],
            ["car_detailed",fs.CupertinoIcons.car_detailed],
            ["train_style_one",fs.CupertinoIcons.train_style_one],
            ["train_style_two",fs.CupertinoIcons.train_style_two],
            ["paw",fs.CupertinoIcons.paw],
            ["paw_solid",fs.CupertinoIcons.paw_solid],
            ["game_controller",fs.CupertinoIcons.game_controller],
            ["game_controller_solid",fs.CupertinoIcons.game_controller_solid],
            ["lab_flask",fs.CupertinoIcons.lab_flask],
            ["lab_flask_solid",fs.CupertinoIcons.lab_flask_solid],
            ["heart",fs.CupertinoIcons.heart],
            ["heart_solid",fs.CupertinoIcons.heart_solid],
            ["bell",fs.CupertinoIcons.bell],
            ["bell_solid",fs.CupertinoIcons.bell_solid],
            ["news",fs.CupertinoIcons.news],
            ["news_solid",fs.CupertinoIcons.news_solid],
            ["brightness",fs.CupertinoIcons.brightness],
            ["brightness_solid",fs.CupertinoIcons.brightness_solid],
            
            
        ]
    );

    getWidgetList(){
        var list = new Array<fs.Widget>();
        this.l.forEach((v,k)=>{
            list.push( fs.Container.new({
                padding:fs.EdgeInsets.all(10),
                child:fs.Row.new({
                  children: [
                    fs.Icon.new(v),
                    fs.SizedBox.new({width:10}),
                    fs.Expanded.new({
                        child:fs.Text.new(k,{overflow:fs.TextOverflow.ellipsis, style:fs.TextStyle.new({fontSize:16})},),
                    }),
                    
                  ]
                }),
              }));
        });
        return list;
    }
    //重构
    build(context:fs.BuildContext) {
        return fs.Scaffold.new({
            appBar:fs.AppBar.new({
                title:fs.Text.new("Cupertino Icons")
            }),
            body:fs.ListView.new({
                children:this.getWidgetList()
            }),
        });
    }

    static new (){
        return new MyCupertinoIconsPage();
    }
}