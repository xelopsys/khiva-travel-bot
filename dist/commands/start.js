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
const bot_1 = __importDefault(require("../bot/bot"));
const menu_1 = require("../utils/menu");
const constants_1 = require("../constants/constants");
const prisma_1 = __importDefault(require("../lib/prisma"));
bot_1.default.command(constants_1.commands.start, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Здравствуйте! Я бот для вашего бизнеса. Чем могу помочь?', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.hears(constants_1.commands.contact, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    ctx.session.step = constants_1.keyboards.contact;
    const contact = yield prisma_1.default.contact.findFirst();
    const params = `?telegram=${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id}`;
    if (!contact) {
        return yield ctx.reply('No contact found in database', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Create Contact',
                            web_app: {
                                url: process.env.WEB_APP_URL + '/contact/create',
                            },
                        },
                    ],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
    return yield ctx.reply(`Here is the contact information:
     - Telegram: ${contact.telegram}
     - WhatsApp: ${contact.whatsapp}
     - Map: ${contact.map}`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Edit Contact',
                        web_app: {
                            url: process.env.WEB_APP_URL + '/contact/edit' + params,
                        },
                    },
                ],
                [
                    {
                        text: constants_1.commands.cancelButton,
                        callback_data: constants_1.commands.cancelCall,
                    },
                ],
            ],
            remove_keyboard: true,
            one_time_keyboard: true,
            resize_keyboard: true,
        },
    });
}));
