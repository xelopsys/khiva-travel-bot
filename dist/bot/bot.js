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
const grammy_1 = require("grammy");
const storage_free_1 = require("@grammyjs/storage-free");
const i18n_1 = __importDefault(require("../i18n/i18n"));
const constants_1 = require("../constants/constants");
const express_1 = __importDefault(require("express"));
const bot = new grammy_1.Bot(process.env.BOT_TOKEN);
bot.use(i18n_1.default);
bot.use((0, grammy_1.session)({
    initial: () => {
        return {
            step: constants_1.keyboards.start,
        };
    },
    storage: (0, storage_free_1.freeStorage)(bot.token),
}));
if (process.env.NODE_ENV === 'production') {
    // Use Webhooks for the production server
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, grammy_1.webhookCallback)(bot, 'express'));
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Bot listening on port ${PORT}`);
    });
}
else {
    // Use Long Polling for development
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield bot.catch((error) => {
            console.log(error.message);
        });
        yield bot.start();
    }))();
}
exports.default = bot;
