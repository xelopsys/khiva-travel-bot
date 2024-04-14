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
bot_1.default.hears(constants_1.commands.car, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    ctx.session.step = constants_1.keyboards.car;
    const cars = yield prisma_1.default.car.findMany();
    const params = `?telegram=${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id}`;
    const carNames = cars.map((car) => {
        const url = process.env.WEB_APP_URL + '/cars/' + car.uuid + '/edit' + params;
        return {
            text: car.carType,
            web_app: {
                url: url,
            },
        };
    });
    const createCar = {
        text: 'Create a new car',
        web_app: {
            url: process.env.WEB_APP_URL + '/cars/create' + params,
        },
    };
    if (carNames.length === 0)
        return yield ctx.reply('No cars found in database, create new one', {
            reply_markup: {
                inline_keyboard: [
                    [createCar],
                    [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of cars, please choose one to edit or create new one or delete existing one', {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            remove_keyboard: true,
            inline_keyboard: [
                carNames.slice(0, 2),
                carNames.slice(2, 4),
                carNames.slice(4, 6),
                carNames.slice(6, 8),
                carNames.slice(8, 10),
                carNames.slice(10, 12),
                carNames.slice(12, 14),
                carNames.splice(14),
                [
                    createCar,
                    { text: constants_1.commands.deleteButton, callback_data: constants_1.commands.deleteCall },
                ],
                [{ text: constants_1.commands.cancelButton, callback_data: constants_1.commands.cancelCall }],
            ],
        },
    });
}));
