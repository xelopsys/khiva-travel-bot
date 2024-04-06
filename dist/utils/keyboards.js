"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobs = exports.questionsKeyboardUZ = exports.language_keyboard = void 0;
const grammy_1 = require("grammy");
const language_keyboard = new grammy_1.Keyboard()
    .text("UZB")
    .row()
    .text("RUS")
    .row()
    .text("ENG");
exports.language_keyboard = language_keyboard;
const questionsKeyboardUZ = new grammy_1.Keyboard()
    .text("Qanday qillib sug'urta sotib olaman?")
    .row()
    .text("GAI ni planshetida sug'urta ko'rinadimi?")
    .row()
    .text("Haydovchi qanday qo'shiladi?")
    .row()
    .text("Menga polis kelmadi")
    .row()
    .text("Firmaning mashinasini sug'urtalab bilamanmi?")
    .row()
    .text("Toshkent uchun faqat VIP sug'urta mavjudmi?")
    .row()
    .text("VIP sug'urtada qarindoshlarni qo'shish shartmi?")
    .row()
    .text("Sug'urta polisini qayerdan olaman?");
exports.questionsKeyboardUZ = questionsKeyboardUZ;
const jobs = new grammy_1.Keyboard()
    .text("Operator")
    .row()
    .text("Iqtisodchi")
    .row()
    .text("Buxgalter")
    .row()
    .text("Back to menu");
exports.jobs = jobs;
