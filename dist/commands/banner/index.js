"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../../bot/bot"));
const constants_1 = require("../../constants/constants");
const actionKeyboards = [
    { text: constants_1.commands.deleteButton },
    { text: constants_1.commands.cancelButton },
];
bot_1.default.hears(constants_1.commands.banner, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ctx.reply('Choose a banner', {
        reply_markup: {
            keyboard: [
                [{ text: constants_1.commands.homeBanner }, { text: constants_1.commands.travelBanner }],
                [{ text: constants_1.commands.cancelButton }],
            ],
            one_time_keyboard: true,
            resize_keyboard: true,
        },
    });
}));
bot_1.default.hears([constants_1.commands.homeBanner, constants_1.commands.travelBanner], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (((_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.text) === 'Travel Banner') {
        ctx.session.step = constants_1.keyboards.travelBanner;
    }
    else {
        ctx.session.step = constants_1.keyboards.banner;
    }
    return yield ctx.reply('send me a banner', {
        reply_markup: {
            keyboard: [[{ text: constants_1.commands.cancelButton }]],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
}));
bot_1.default.hears(constants_1.commands.gallery, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.gallery;
    return yield ctx.reply('send me a photo', {
        reply_markup: {
            keyboard: [actionKeyboards],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
}));
