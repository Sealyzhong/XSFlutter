"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyListViewBuilderPage = void 0;
const fs = require("flutter_sdk");
//
class MyListViewBuilderPage extends fs.StatefulWidget {
    createState() {
        return new _MyListViewBuilderPage(this);
    }
    static new() {
        return new MyListViewBuilderPage();
    }
}
exports.MyListViewBuilderPage = MyListViewBuilderPage;
class _MyListViewBuilderPage extends fs.WidgetState {
    constructor() {
        super(...arguments);
        this.l = [
            { name: "left_chevron", value: fs.CupertinoIcons.left_chevron },
            { name: "right_chevron", value: fs.CupertinoIcons.right_chevron },
            { name: "share", value: fs.CupertinoIcons.share },
            { name: "share_solid", value: fs.CupertinoIcons.share_solid },
            { name: "book", value: fs.CupertinoIcons.book },
            { name: "book_solid", value: fs.CupertinoIcons.book_solid },
            { name: "bookmark", value: fs.CupertinoIcons.bookmark },
            { name: "bookmark_solid", value: fs.CupertinoIcons.bookmark_solid },
            { name: "info", value: fs.CupertinoIcons.info },
            { name: "reply", value: fs.CupertinoIcons.reply },
            { name: "conversation_bubble", value: fs.CupertinoIcons.conversation_bubble },
            { name: "profile_circled", value: fs.CupertinoIcons.profile_circled },
            { name: "plus_circled", value: fs.CupertinoIcons.plus_circled },
            { name: "minus_circled", value: fs.CupertinoIcons.minus_circled },
            { name: "flag", value: fs.CupertinoIcons.flag },
            { name: "search", value: fs.CupertinoIcons.search },
            { name: "check_mark", value: fs.CupertinoIcons.check_mark },
            { name: "check_mark_circled", value: fs.CupertinoIcons.check_mark_circled },
            { name: "check_mark_circled_solid", value: fs.CupertinoIcons.check_mark_circled_solid },
            { name: "circle", value: fs.CupertinoIcons.circle },
            { name: "circle_filled", value: fs.CupertinoIcons.circle_filled },
            { name: "back", value: fs.CupertinoIcons.back },
            { name: "forward", value: fs.CupertinoIcons.forward },
            { name: "home", value: fs.CupertinoIcons.home },
            { name: "shopping_cart", value: fs.CupertinoIcons.shopping_cart },
            { name: "ellipsis", value: fs.CupertinoIcons.ellipsis },
            { name: "phone", value: fs.CupertinoIcons.phone },
            { name: "phone_solid", value: fs.CupertinoIcons.phone_solid },
            { name: "down_arrow", value: fs.CupertinoIcons.down_arrow },
            { name: "up_arrow", value: fs.CupertinoIcons.up_arrow },
            { name: "battery_charging", value: fs.CupertinoIcons.battery_charging },
            { name: "battery_empty", value: fs.CupertinoIcons.battery_empty },
            { name: "battery_full", value: fs.CupertinoIcons.battery_full },
            { name: "battery_75_percent", value: fs.CupertinoIcons.battery_75_percent },
            { name: "battery_25_percent", value: fs.CupertinoIcons.battery_25_percent },
            { name: "bluetooth", value: fs.CupertinoIcons.bluetooth },
            { name: "restart", value: fs.CupertinoIcons.restart },
            { name: "reply_all", value: fs.CupertinoIcons.reply_all },
            { name: "reply_thick_solid", value: fs.CupertinoIcons.reply_thick_solid },
            { name: "share_up", value: fs.CupertinoIcons.share_up },
            { name: "shuffle", value: fs.CupertinoIcons.shuffle },
            { name: "shuffle_medium", value: fs.CupertinoIcons.shuffle_medium },
            { name: "shuffle_thick", value: fs.CupertinoIcons.shuffle_thick },
            { name: "photo_camera", value: fs.CupertinoIcons.photo_camera },
            { name: "photo_camera_solid", value: fs.CupertinoIcons.photo_camera_solid },
            { name: "video_camera", value: fs.CupertinoIcons.video_camera },
            { name: "video_camera_solid", value: fs.CupertinoIcons.video_camera_solid },
            { name: "switch_camera", value: fs.CupertinoIcons.switch_camera },
            { name: "switch_camera_solid", value: fs.CupertinoIcons.switch_camera_solid },
            { name: "collections", value: fs.CupertinoIcons.collections },
            { name: "collections_solid", value: fs.CupertinoIcons.collections_solid },
            { name: "folder", value: fs.CupertinoIcons.folder },
            { name: "folder_solid", value: fs.CupertinoIcons.folder_solid },
            { name: "folder_open", value: fs.CupertinoIcons.folder_open },
            { name: "delete", value: fs.CupertinoIcons.delete },
            { name: "delete_solid", value: fs.CupertinoIcons.delete_solid },
            { name: "delete_simple", value: fs.CupertinoIcons.delete_simple },
            { name: "pen", value: fs.CupertinoIcons.pen },
            { name: "pencil", value: fs.CupertinoIcons.pencil },
            { name: "create", value: fs.CupertinoIcons.create },
            { name: "create_solid", value: fs.CupertinoIcons.create_solid },
            { name: "refresh", value: fs.CupertinoIcons.refresh },
            { name: "refresh_circled", value: fs.CupertinoIcons.refresh_circled },
            { name: "refresh_circled_solid", value: fs.CupertinoIcons.refresh_circled_solid },
            { name: "refresh_thin", value: fs.CupertinoIcons.refresh_thin },
            { name: "refresh_thick", value: fs.CupertinoIcons.refresh_thick },
            { name: "refresh_bold", value: fs.CupertinoIcons.refresh_bold },
            { name: "clear_thick", value: fs.CupertinoIcons.clear_thick },
            { name: "clear_thick_circled", value: fs.CupertinoIcons.clear_thick_circled },
            { name: "clear", value: fs.CupertinoIcons.clear },
            { name: "clear_circled", value: fs.CupertinoIcons.clear_circled },
            { name: "clear_circled_solid", value: fs.CupertinoIcons.clear_circled_solid },
            { name: "add", value: fs.CupertinoIcons.add },
            { name: "add_circled", value: fs.CupertinoIcons.add_circled },
            { name: "add_circled_solid", value: fs.CupertinoIcons.add_circled_solid },
            { name: "gear", value: fs.CupertinoIcons.gear },
            { name: "gear_solid", value: fs.CupertinoIcons.gear_solid },
            { name: "gear_big", value: fs.CupertinoIcons.gear_big },
            { name: "settings", value: fs.CupertinoIcons.settings },
            { name: "settings_solid", value: fs.CupertinoIcons.settings_solid },
            { name: "music_note", value: fs.CupertinoIcons.music_note },
            { name: "double_music_note", value: fs.CupertinoIcons.double_music_note },
            { name: "play_arrow", value: fs.CupertinoIcons.play_arrow },
            { name: "play_arrow_solid", value: fs.CupertinoIcons.play_arrow_solid },
            { name: "pause", value: fs.CupertinoIcons.pause },
            { name: "pause_solid", value: fs.CupertinoIcons.pause_solid },
            { name: "loop", value: fs.CupertinoIcons.loop },
            { name: "loop_thick", value: fs.CupertinoIcons.loop_thick },
            { name: "volume_down", value: fs.CupertinoIcons.volume_down },
            { name: "volume_mute", value: fs.CupertinoIcons.volume_mute },
            { name: "volume_off", value: fs.CupertinoIcons.volume_off },
            { name: "volume_up", value: fs.CupertinoIcons.volume_up },
            { name: "fullscreen", value: fs.CupertinoIcons.fullscreen },
            { name: "fullscreen_exit", value: fs.CupertinoIcons.fullscreen_exit },
            { name: "mic_off", value: fs.CupertinoIcons.mic_off },
            { name: "mic", value: fs.CupertinoIcons.mic },
            { name: "mic_solid", value: fs.CupertinoIcons.mic_solid },
            { name: "clock", value: fs.CupertinoIcons.clock },
            { name: "clock_solid", value: fs.CupertinoIcons.clock_solid },
            { name: "time", value: fs.CupertinoIcons.time },
            { name: "time_solid", value: fs.CupertinoIcons.time_solid },
            { name: "padlock", value: fs.CupertinoIcons.padlock },
            { name: "padlock_solid", value: fs.CupertinoIcons.padlock_solid },
            { name: "eye", value: fs.CupertinoIcons.eye },
            { name: "eye_solid", value: fs.CupertinoIcons.eye_solid },
            { name: "person", value: fs.CupertinoIcons.person },
            { name: "person_solid", value: fs.CupertinoIcons.person_solid },
            { name: "person_add", value: fs.CupertinoIcons.person_add },
            { name: "person_add_solid", value: fs.CupertinoIcons.person_add_solid },
            { name: "group", value: fs.CupertinoIcons.group },
            { name: "group_solid", value: fs.CupertinoIcons.group_solid },
            { name: "mail", value: fs.CupertinoIcons.mail },
            { name: "mail_solid", value: fs.CupertinoIcons.mail_solid },
            { name: "location", value: fs.CupertinoIcons.location },
            { name: "location_solid", value: fs.CupertinoIcons.location_solid },
            { name: "tag", value: fs.CupertinoIcons.tag },
            { name: "tag_solid", value: fs.CupertinoIcons.tag_solid },
            { name: "tags", value: fs.CupertinoIcons.tags },
            { name: "tags_solid", value: fs.CupertinoIcons.tags_solid },
            { name: "bus", value: fs.CupertinoIcons.bus },
            { name: "car", value: fs.CupertinoIcons.car },
            { name: "car_detailed", value: fs.CupertinoIcons.car_detailed },
            { name: "train_style_one", value: fs.CupertinoIcons.train_style_one },
            { name: "train_style_two", value: fs.CupertinoIcons.train_style_two },
            { name: "paw", value: fs.CupertinoIcons.paw },
            { name: "paw_solid", value: fs.CupertinoIcons.paw_solid },
            { name: "game_controller", value: fs.CupertinoIcons.game_controller },
            { name: "game_controller_solid", value: fs.CupertinoIcons.game_controller_solid },
            { name: "lab_flask", value: fs.CupertinoIcons.lab_flask },
            { name: "lab_flask_solid", value: fs.CupertinoIcons.lab_flask_solid },
            { name: "heart", value: fs.CupertinoIcons.heart },
            { name: "heart_solid", value: fs.CupertinoIcons.heart_solid },
            { name: "bell", value: fs.CupertinoIcons.bell },
            { name: "bell_solid", value: fs.CupertinoIcons.bell_solid },
            { name: "news", value: fs.CupertinoIcons.news },
            { name: "news_solid", value: fs.CupertinoIcons.news_solid },
            { name: "brightness", value: fs.CupertinoIcons.brightness },
            { name: "brightness_solid", value: fs.CupertinoIcons.brightness_solid },
        ];
    }
    //重构
    build(context) {
        return fs.Scaffold.new({
            appBar: fs.AppBar.new({
                title: fs.Text.new("ListView.builder")
            }),
            body: fs.ListView.builder({
                itemCount: this.l.length,
                itemBuilder: (context, index) => {
                    var model = this.l[index];
                    return fs.Container.new({
                        padding: fs.EdgeInsets.all(10),
                        child: fs.Row.new({
                            children: [
                                fs.Icon.new(model.value),
                                fs.SizedBox.new({ width: 10 }),
                                fs.Expanded.new({
                                    child: fs.Text.new(model.name, { overflow: fs.TextOverflow.ellipsis, style: fs.TextStyle.new({ fontSize: 16 }) }),
                                }),
                            ]
                        })
                    });
                }
            }),
        });
    }
}
