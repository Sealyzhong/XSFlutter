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
    build(context) {
        return new fs.Container({
            padding: fs.EdgeInsets.all(10.0),
            color: color_util_1.MyColorUtil.primaryColor,
            child: new fs.Row({
                mainAxisAlignment: fs.MainAxisAlignment.start,
                children: [
                    new fs.Icon(fs.Icons.list, {
                        color: fs.Colors.white,
                    }),
                    new fs.Container({
                        width: 10,
                    }),
                    new fs.Text(this.title, { style: new fs.TextStyle({
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
