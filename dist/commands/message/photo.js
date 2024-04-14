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
const functions_1 = require("../../helpers/functions");
bot_1.default.on('message:photo', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const fileId = (_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.photo) === null || _b === void 0 ? void 0 : _b[((_d = (_c = ctx.message) === null || _c === void 0 ? void 0 : _c.photo) === null || _d === void 0 ? void 0 : _d.length) - 1].file_id;
    if (ctx.session.step === constants_1.keyboards.banner ||
        ctx.session.step === constants_1.keyboards.travelBanner ||
        ctx.session.step === constants_1.keyboards.gallery) {
        yield ctx.reply('Image is being saved...', {
            reply_markup: {
                keyboard: [[{ text: constants_1.commands.cancelButton }]],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
        return yield (0, functions_1.handleBannerInsertImage)({
            fileId,
            banner: ctx.session.step,
        }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield ctx.reply('Image has been saved');
            if (ctx.session.step === constants_1.keyboards.gallery) {
                yield ctx.replyWithPhoto(fileId);
                return yield ctx.reply('send another one', {
                    reply_markup: {
                        keyboard: [[{ text: constants_1.commands.cancelButton }]],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
            }
            return yield ctx.replyWithPhoto(fileId);
        }));
    }
}));
