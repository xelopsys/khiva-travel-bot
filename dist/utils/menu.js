"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const grammy_1 = require("grammy");
const menu = new grammy_1.Keyboard()
    .text('Banner')
    .text('Gallery')
    .row()
    .text('Travel')
    .row()
    .text('Cars')
    .row()
    .text('Transfers')
    .row()
    .text('Contacts')
    .row();
exports.menu = menu;
