"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCupertinoIcons = void 0;
const ts_base_class_1 = require("framework/ts_base_class");
const ts_base_enum_1 = require("framework/ts_base_enum");
const ts_base_framework_1 = require("framework/ts_base_framework");
const ts_base_icons_1 = require("framework/ts_base_icons");
const ts_material_widgets_1 = require("framework/ts_material_widgets");
class MyCupertinoIcons extends ts_base_framework_1.JSStatelessWidget {
    constructor() {
        super(...arguments);
        this.l = new Map([
            ["left_chevron", ts_base_icons_1.CupertinoIcons.left_chevron],
            ["right_chevron", ts_base_icons_1.CupertinoIcons.right_chevron],
            ["share", ts_base_icons_1.CupertinoIcons.share],
            ["share_solid", ts_base_icons_1.CupertinoIcons.share_solid],
            ["book", ts_base_icons_1.CupertinoIcons.book],
            ["book_solid", ts_base_icons_1.CupertinoIcons.book_solid],
            ["bookmark", ts_base_icons_1.CupertinoIcons.bookmark],
            ["bookmark_solid", ts_base_icons_1.CupertinoIcons.bookmark_solid],
            ["info", ts_base_icons_1.CupertinoIcons.info],
            ["reply", ts_base_icons_1.CupertinoIcons.reply],
            ["conversation_bubble", ts_base_icons_1.CupertinoIcons.conversation_bubble],
            ["profile_circled", ts_base_icons_1.CupertinoIcons.profile_circled],
            ["plus_circled", ts_base_icons_1.CupertinoIcons.plus_circled],
            ["minus_circled", ts_base_icons_1.CupertinoIcons.minus_circled],
            ["flag", ts_base_icons_1.CupertinoIcons.flag],
            ["search", ts_base_icons_1.CupertinoIcons.search],
            ["check_mark", ts_base_icons_1.CupertinoIcons.check_mark],
            ["check_mark_circled", ts_base_icons_1.CupertinoIcons.check_mark_circled],
            ["check_mark_circled_solid", ts_base_icons_1.CupertinoIcons.check_mark_circled_solid],
            ["circle", ts_base_icons_1.CupertinoIcons.circle],
            ["circle_filled", ts_base_icons_1.CupertinoIcons.circle_filled],
            ["back", ts_base_icons_1.CupertinoIcons.back],
            ["forward", ts_base_icons_1.CupertinoIcons.forward],
            ["home", ts_base_icons_1.CupertinoIcons.home],
            ["shopping_cart", ts_base_icons_1.CupertinoIcons.shopping_cart],
            ["ellipsis", ts_base_icons_1.CupertinoIcons.ellipsis],
            ["phone", ts_base_icons_1.CupertinoIcons.phone],
            ["phone_solid", ts_base_icons_1.CupertinoIcons.phone_solid],
            ["down_arrow", ts_base_icons_1.CupertinoIcons.down_arrow],
            ["up_arrow", ts_base_icons_1.CupertinoIcons.up_arrow],
            ["battery_charging", ts_base_icons_1.CupertinoIcons.battery_charging],
            ["battery_empty", ts_base_icons_1.CupertinoIcons.battery_empty],
            ["battery_full", ts_base_icons_1.CupertinoIcons.battery_full],
            ["battery_75_percent", ts_base_icons_1.CupertinoIcons.battery_75_percent],
            ["battery_25_percent", ts_base_icons_1.CupertinoIcons.battery_25_percent],
            ["bluetooth", ts_base_icons_1.CupertinoIcons.bluetooth],
            ["restart", ts_base_icons_1.CupertinoIcons.restart],
            ["reply_all", ts_base_icons_1.CupertinoIcons.reply_all],
            ["reply_thick_solid", ts_base_icons_1.CupertinoIcons.reply_thick_solid],
            ["share_up", ts_base_icons_1.CupertinoIcons.share_up],
            ["shuffle", ts_base_icons_1.CupertinoIcons.shuffle],
            ["shuffle_medium", ts_base_icons_1.CupertinoIcons.shuffle_medium],
            ["shuffle_thick", ts_base_icons_1.CupertinoIcons.shuffle_thick],
            ["photo_camera", ts_base_icons_1.CupertinoIcons.photo_camera],
            ["photo_camera_solid", ts_base_icons_1.CupertinoIcons.photo_camera_solid],
            ["video_camera", ts_base_icons_1.CupertinoIcons.video_camera],
            ["video_camera_solid", ts_base_icons_1.CupertinoIcons.video_camera_solid],
            ["switch_camera", ts_base_icons_1.CupertinoIcons.switch_camera],
            ["switch_camera_solid", ts_base_icons_1.CupertinoIcons.switch_camera_solid],
            ["collections", ts_base_icons_1.CupertinoIcons.collections],
            ["collections_solid", ts_base_icons_1.CupertinoIcons.collections_solid],
            ["folder", ts_base_icons_1.CupertinoIcons.folder],
            ["folder_solid", ts_base_icons_1.CupertinoIcons.folder_solid],
            ["folder_open", ts_base_icons_1.CupertinoIcons.folder_open],
            ["delete", ts_base_icons_1.CupertinoIcons.delete],
            ["delete_solid", ts_base_icons_1.CupertinoIcons.delete_solid],
            ["delete_simple", ts_base_icons_1.CupertinoIcons.delete_simple],
            ["pen", ts_base_icons_1.CupertinoIcons.pen],
            ["pencil", ts_base_icons_1.CupertinoIcons.pencil],
            ["create", ts_base_icons_1.CupertinoIcons.create],
            ["create_solid", ts_base_icons_1.CupertinoIcons.create_solid],
            ["refresh", ts_base_icons_1.CupertinoIcons.refresh],
            ["refresh_circled", ts_base_icons_1.CupertinoIcons.refresh_circled],
            ["refresh_circled_solid", ts_base_icons_1.CupertinoIcons.refresh_circled_solid],
            ["refresh_thin", ts_base_icons_1.CupertinoIcons.refresh_thin],
            ["refresh_thick", ts_base_icons_1.CupertinoIcons.refresh_thick],
            ["refresh_bold", ts_base_icons_1.CupertinoIcons.refresh_bold],
            ["clear_thick", ts_base_icons_1.CupertinoIcons.clear_thick],
            ["clear_thick_circled", ts_base_icons_1.CupertinoIcons.clear_thick_circled],
            ["clear", ts_base_icons_1.CupertinoIcons.clear],
            ["clear_circled", ts_base_icons_1.CupertinoIcons.clear_circled],
            ["clear_circled_solid", ts_base_icons_1.CupertinoIcons.clear_circled_solid],
            ["add", ts_base_icons_1.CupertinoIcons.add],
            ["add_circled", ts_base_icons_1.CupertinoIcons.add_circled],
            ["add_circled_solid", ts_base_icons_1.CupertinoIcons.add_circled_solid],
            ["gear", ts_base_icons_1.CupertinoIcons.gear],
            ["gear_solid", ts_base_icons_1.CupertinoIcons.gear_solid],
            ["gear_big", ts_base_icons_1.CupertinoIcons.gear_big],
            ["settings", ts_base_icons_1.CupertinoIcons.settings],
            ["settings_solid", ts_base_icons_1.CupertinoIcons.settings_solid],
            ["music_note", ts_base_icons_1.CupertinoIcons.music_note],
            ["double_music_note", ts_base_icons_1.CupertinoIcons.double_music_note],
            ["play_arrow", ts_base_icons_1.CupertinoIcons.play_arrow],
            ["play_arrow_solid", ts_base_icons_1.CupertinoIcons.play_arrow_solid],
            ["pause", ts_base_icons_1.CupertinoIcons.pause],
            ["pause_solid", ts_base_icons_1.CupertinoIcons.pause_solid],
            ["loop", ts_base_icons_1.CupertinoIcons.loop],
            ["loop_thick", ts_base_icons_1.CupertinoIcons.loop_thick],
            ["volume_down", ts_base_icons_1.CupertinoIcons.volume_down],
            ["volume_mute", ts_base_icons_1.CupertinoIcons.volume_mute],
            ["volume_off", ts_base_icons_1.CupertinoIcons.volume_off],
            ["volume_up", ts_base_icons_1.CupertinoIcons.volume_up],
            ["fullscreen", ts_base_icons_1.CupertinoIcons.fullscreen],
            ["fullscreen_exit", ts_base_icons_1.CupertinoIcons.fullscreen_exit],
            ["mic_off", ts_base_icons_1.CupertinoIcons.mic_off],
            ["mic", ts_base_icons_1.CupertinoIcons.mic],
            ["mic_solid", ts_base_icons_1.CupertinoIcons.mic_solid],
            ["clock", ts_base_icons_1.CupertinoIcons.clock],
            ["clock_solid", ts_base_icons_1.CupertinoIcons.clock_solid],
            ["time", ts_base_icons_1.CupertinoIcons.time],
            ["time_solid", ts_base_icons_1.CupertinoIcons.time_solid],
            ["padlock", ts_base_icons_1.CupertinoIcons.padlock],
            ["padlock_solid", ts_base_icons_1.CupertinoIcons.padlock_solid],
            ["eye", ts_base_icons_1.CupertinoIcons.eye],
            ["eye_solid", ts_base_icons_1.CupertinoIcons.eye_solid],
            ["person", ts_base_icons_1.CupertinoIcons.person],
            ["person_solid", ts_base_icons_1.CupertinoIcons.person_solid],
            ["person_add", ts_base_icons_1.CupertinoIcons.person_add],
            ["person_add_solid", ts_base_icons_1.CupertinoIcons.person_add_solid],
            ["group", ts_base_icons_1.CupertinoIcons.group],
            ["group_solid", ts_base_icons_1.CupertinoIcons.group_solid],
            ["mail", ts_base_icons_1.CupertinoIcons.mail],
            ["mail_solid", ts_base_icons_1.CupertinoIcons.mail_solid],
            ["location", ts_base_icons_1.CupertinoIcons.location],
            ["location_solid", ts_base_icons_1.CupertinoIcons.location_solid],
            ["tag", ts_base_icons_1.CupertinoIcons.tag],
            ["tag_solid", ts_base_icons_1.CupertinoIcons.tag_solid],
            ["tags", ts_base_icons_1.CupertinoIcons.tags],
            ["tags_solid", ts_base_icons_1.CupertinoIcons.tags_solid],
            ["bus", ts_base_icons_1.CupertinoIcons.bus],
            ["car", ts_base_icons_1.CupertinoIcons.car],
            ["car_detailed", ts_base_icons_1.CupertinoIcons.car_detailed],
            ["train_style_one", ts_base_icons_1.CupertinoIcons.train_style_one],
            ["train_style_two", ts_base_icons_1.CupertinoIcons.train_style_two],
            ["paw", ts_base_icons_1.CupertinoIcons.paw],
            ["paw_solid", ts_base_icons_1.CupertinoIcons.paw_solid],
            ["game_controller", ts_base_icons_1.CupertinoIcons.game_controller],
            ["game_controller_solid", ts_base_icons_1.CupertinoIcons.game_controller_solid],
            ["lab_flask", ts_base_icons_1.CupertinoIcons.lab_flask],
            ["lab_flask_solid", ts_base_icons_1.CupertinoIcons.lab_flask_solid],
            ["heart", ts_base_icons_1.CupertinoIcons.heart],
            ["heart_solid", ts_base_icons_1.CupertinoIcons.heart_solid],
            ["bell", ts_base_icons_1.CupertinoIcons.bell],
            ["bell_solid", ts_base_icons_1.CupertinoIcons.bell_solid],
            ["news", ts_base_icons_1.CupertinoIcons.news],
            ["news_solid", ts_base_icons_1.CupertinoIcons.news_solid],
            ["brightness", ts_base_icons_1.CupertinoIcons.brightness],
            ["brightness_solid", ts_base_icons_1.CupertinoIcons.brightness_solid],
        ]);
    }
    getWidgetList() {
        var list = new Array();
        this.l.forEach((v, k) => {
            list.push(ts_material_widgets_1.Container.new({
                padding: ts_base_class_1.EdgeInsets.all(10),
                child: ts_material_widgets_1.Row.new({
                    children: [
                        ts_material_widgets_1.Icon.new(v),
                        ts_material_widgets_1.SizedBox.new({ width: 10 }),
                        ts_material_widgets_1.Expanded.new({
                            child: ts_material_widgets_1.Text.new(k, { overflow: ts_base_enum_1.TextOverflow.ellipsis, style: ts_base_class_1.TextStyle.new({ fontSize: 16 }) }),
                        }),
                    ]
                }),
            }));
        });
        return list;
    }
    //重构
    build(context) {
        return ts_material_widgets_1.Scaffold.new({
            appBar: ts_material_widgets_1.AppBar.new({
                title: ts_material_widgets_1.Text.new("Cupertino Icons")
            }),
            body: ts_material_widgets_1.ListView.new({
                children: this.getWidgetList()
            }),
        });
    }
    static new() {
        return new MyCupertinoIcons();
    }
}
exports.MyCupertinoIcons = MyCupertinoIcons;
