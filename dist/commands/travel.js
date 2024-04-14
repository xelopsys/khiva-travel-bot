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
const constants_1 = require("../constants/constants");
const prisma_1 = __importDefault(require("../lib/prisma"));
bot_1.default.hears(constants_1.commands.travel, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    ctx.session.step = constants_1.keyboards.travel;
    const travels = yield prisma_1.default.travel.findMany();
    const params = `?telegram=${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id}`;
    const travelNames = travels.map((travel) => {
        const url = process.env.WEB_APP_URL + '/travels/' + travel.uuid + '/edit' + params;
        return {
            text: travel.name,
            web_app: {
                url: url,
            },
        };
    });
    const createTravel = {
        text: 'Create Travel',
        web_app: {
            url: process.env.WEB_APP_URL + '/travels/create' + params,
        },
    };
    if (travelNames.length === 0)
        return yield ctx.reply('No travels found in database, create new one', {
            reply_markup: {
                inline_keyboard: [
                    [createTravel],
                    [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of travels, please choose one to edit or create new one', {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            remove_keyboard: true,
            inline_keyboard: [
                travelNames.slice(0, 2),
                travelNames.slice(2, 4),
                travelNames.slice(4, 6),
                travelNames.slice(6, 8),
                travelNames.slice(8, 10),
                travelNames.slice(10, 12),
                travelNames.slice(12, 14),
                travelNames.slice(14, 16),
                travelNames.slice(16, 18),
                travelNames.slice(18, 20),
                travelNames.slice(20, 22),
                travelNames.slice(22, 24),
                travelNames.slice(24, 26),
                travelNames.slice(26, 28),
                [
                    createTravel,
                    { text: constants_1.commands.deleteButton, callback_data: constants_1.commands.deleteCall },
                ],
                [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
            ],
        },
    });
}));
