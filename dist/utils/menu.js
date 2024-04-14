"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const grammy_1 = require("grammy");
const constants_1 = require("../constants/constants");
const menu = new grammy_1.Keyboard()
    .text(constants_1.commands.banner)
    .text(constants_1.commands.gallery)
    .row()
    .text(constants_1.commands.travel)
    .row()
    .text(constants_1.commands.car)
    .row()
    .text(constants_1.commands.transfer)
    .row()
    .text(constants_1.commands.contact)
    .row();
exports.menu = menu;
