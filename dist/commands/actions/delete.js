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
const prisma_1 = __importDefault(require("../../lib/prisma"));
bot_1.default.callbackQuery(constants_1.commands.deleteCall, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.session.step === constants_1.keyboards.travel) {
        const travels = yield prisma_1.default.travel.findMany();
        const travelNames = travels.map((travel) => {
            return {
                text: travel.name,
            };
        });
        return yield ctx.reply('Choose a travel to delete', {
            reply_markup: {
                keyboard: [
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(0, 2),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(2, 4),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(4, 6),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(6, 8),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(8, 10),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(10, 12),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(12, 14),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(14, 16),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(16, 18),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(18, 20),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(20, 22),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(22, 24),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(24, 26),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.slice(26, 28),
                    travelNames === null || travelNames === void 0 ? void 0 : travelNames.splice(28),
                    [{ text: constants_1.commands.cancelButton }],
                ],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
    if (ctx.session.step === constants_1.keyboards.car) {
        const cars = yield prisma_1.default.car.findMany();
        const carNames = cars.map((car) => {
            return {
                text: car.carType,
            };
        });
        return yield ctx.reply('Choose a car to delete', {
            reply_markup: {
                keyboard: [carNames, [{ text: constants_1.commands.cancelButton }]],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
    if (ctx.session.step === constants_1.keyboards.transfer) {
        const transfers = yield prisma_1.default.transferInfo.findMany();
        const transferNames = transfers.map((transfer) => {
            return {
                text: transfer.transfer,
            };
        });
        return yield ctx.reply('Choose a transfer to delete', {
            reply_markup: {
                keyboard: [transferNames, [{ text: constants_1.commands.cancelButton }]],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
}));
bot_1.default.hears(constants_1.commands.deleteButton, (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.session.step === constants_1.keyboards.gallery) {
        const gallery = yield prisma_1.default.gallery.findMany();
        const names = gallery.map((item) => ({ text: `${item.fileName}` }));
        if (gallery.length === 0) {
            return yield ctx.reply('No images found in gallery', {
                reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
            });
        }
        yield ctx.reply('Choose an image to delete', {
            reply_markup: {
                keyboard: [
                    names.slice(0, 2),
                    names.slice(2, 4),
                    names.slice(4, 6),
                    names.slice(6, 8),
                    names.slice(8, 10),
                    names.slice(10, 12),
                    names.slice(12, 14),
                    names.slice(14, 16),
                    names.slice(16, 18),
                    names.slice(18, 20),
                    names.slice(20, 22),
                    names.slice(22, 24),
                    names.slice(24, 26),
                    names.slice(26, 28),
                    names.splice(28),
                    [{ text: constants_1.commands.cancelButton }],
                ],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
        return gallery.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.replyWithPhoto(image.fileId, {
                caption: `${image.fileName}`,
            });
        }));
    }
}));
