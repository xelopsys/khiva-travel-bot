"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLocation = exports.requestContact = exports.jobs = exports.menu = void 0;
const grammy_1 = require("grammy");
const menu = new grammy_1.Keyboard()
    .text("📞 Contacts")
    .text("📖 About")
    .row()
    .text("📝 Ishlar")
    .row()
    .text("💰 Buy")
    .text("💰 Buy2");
exports.menu = menu;
const jobs = new grammy_1.Keyboard()
    .text("Anketa to'ldirish")
    .row()
    .oneTime()
    .text("Back to menu")
    .row()
    .oneTime();
exports.jobs = jobs;
const requestContact = new grammy_1.Keyboard()
    .row()
    .oneTime()
    .requestContact("Raqamni jo`natish");
exports.requestContact = requestContact;
const requestLocation = new grammy_1.Keyboard()
    .row()
    .oneTime()
    .requestLocation("Joylashuvni jo`natish");
exports.requestLocation = requestLocation;
