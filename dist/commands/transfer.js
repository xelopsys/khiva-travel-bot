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
bot_1.default.hears(constants_1.commands.transfer, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    ctx.session.step = constants_1.keyboards.transfer;
    const transfers = yield prisma_1.default.transferInfo.findMany();
    const params = `?telegram=${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id}`;
    const transferNames = transfers.map((transfer) => {
        const url = process.env.WEB_APP_URL +
            '/transfers/' +
            transfer.uuid +
            '/edit' +
            params;
        return {
            text: transfer.transfer,
            web_app: {
                url: url,
            },
        };
    });
    const createTransfer = {
        text: 'Create a new transfer',
        web_app: {
            url: process.env.WEB_APP_URL + '/transfers/create' + params,
        },
    };
    if (transferNames.length === 0)
        return yield ctx.reply('No transfer found in database, create new one', {
            reply_markup: {
                inline_keyboard: [
                    [createTransfer],
                    [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of transfers, please choose one to edit or create new one or delete existing one', {
        reply_markup: {
            resize_keyboard: true,
            remove_keyboard: true,
            one_time_keyboard: true,
            inline_keyboard: [
                transferNames.slice(0, 2),
                transferNames.slice(2, 4),
                transferNames.slice(4, 6),
                transferNames.slice(6, 8),
                transferNames.slice(8, 10),
                transferNames.slice(10, 12),
                transferNames.slice(12, 14),
                transferNames.slice(14, 16),
                transferNames.slice(16, 18),
                transferNames.slice(18, 20),
                transferNames.splice(20),
                [
                    createTransfer,
                    { text: constants_1.commands.deleteButton, callback_data: constants_1.commands.deleteCall },
                ],
                [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
            ],
        },
    });
}));
