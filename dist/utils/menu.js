"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMenu = exports.marriageStatus = exports.gender = exports.requestLocation = exports.requestContact = exports.jobs = exports.menu = void 0;
const grammy_1 = require("grammy");
const menu = new grammy_1.Keyboard()
    .text('Banner')
    .text('Travel')
    .row()
    .text('Gallery')
    .row();
exports.menu = menu;
const adminMenu = new grammy_1.Keyboard()
    .text('Banner')
    .text('Travel')
    .row()
    .text('Gallery')
    .row();
exports.adminMenu = adminMenu;
const jobs = new grammy_1.Keyboard()
    .text("Anketa to'ldirish")
    .row()
    .oneTime()
    .text('Back to menu')
    .row()
    .oneTime();
exports.jobs = jobs;
const requestContact = new grammy_1.Keyboard()
    .row()
    .oneTime()
    .requestContact('Raqamni jo`natish');
exports.requestContact = requestContact;
const requestLocation = new grammy_1.Keyboard()
    .row()
    .oneTime()
    .requestLocation('Joylashuvni jo`natish');
exports.requestLocation = requestLocation;
const gender = new grammy_1.Keyboard().text('Ayol').row().text('Erkak').row();
exports.gender = gender;
const marriageStatus = new grammy_1.Keyboard()
    .text('Turmush qurmagan')
    .row()
    .text('Uylangan')
    .row();
exports.marriageStatus = marriageStatus;
