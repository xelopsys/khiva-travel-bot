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
const menu_1 = require("../../utils/menu");
const constants_1 = require("../../constants/constants");
bot_1.default.hears(constants_1.commands.cancelButton, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.cancel;
    return yield ctx.reply('Canceled', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.callbackQuery(constants_1.commands.cancelCall, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.cancel;
    return yield ctx.reply('Canceled', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
