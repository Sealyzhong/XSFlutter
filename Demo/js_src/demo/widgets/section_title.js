"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySectionTitle = void 0;
const color_util_1 = require("demo/utils/color_util");
const fs = require("flutter_sdk");
class MySectionTitle extends fs.StatelessWidget {
    constructor(title) {
        super();
        this.title = title;
    }
    static new(title) {
        return new MySectionTitle(title);
    }
    build(buildContext) {
        return fs.Container.new({
            padding: fs.EdgeInsets.all(10.0),
            color: color_util_1.MyColorUtil.primaryColor,
            child: fs.Row.new({
                mainAxisAlignment: fs.MainAxisAlignment.start,
                children: [
                    fs.Icon.new(fs.Icons.ac_unit, {
                        color: fs.Colors.white,
                    }),
                    fs.Container.new({
                        width: 10,
                    }),
                    fs.Text.new(this.title, { style: fs.TextStyle.new({
                            color: fs.Colors.white,
                            fontWeight: fs.FontWeight.bold,
                            fontSize: 18,
                        }) }),
                ]
            }),
        });
    }
}
exports.MySectionTitle = MySectionTitle;
