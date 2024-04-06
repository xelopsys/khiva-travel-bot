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
const bot = new grammy_1.Bot(process.env.BOT_TOKEN);
function getSessionKey(ctx) {
    var _a, _b, _c, _d, _e;
    if ((_b = (_a = ctx.update) === null || _a === void 0 ? void 0 : _a.inline_query) === null || _b === void 0 ? void 0 : _b.from) {
        return `${ctx.update.inline_query.from.id}`;
    }
    if ((_d = (_c = ctx.update) === null || _c === void 0 ? void 0 : _c.chosen_inline_result) === null || _d === void 0 ? void 0 : _d.from) {
        return `${ctx.update.chosen_inline_result.from.id}`;
    }
    if ((_e = ctx.callbackQuery) === null || _e === void 0 ? void 0 : _e.from) {
        return `${ctx.callbackQuery.from.id}`;
    }
    if (ctx.chat) {
        return `${ctx.chat.id}`;
    }
    if (ctx.from) {
        return `${ctx.from.id}`;
    }
}
bot.use(i18n_1.default);
bot.use((0, grammy_1.session)({
    // initial: () => {},
    getSessionKey,
    storage: (0, storage_free_1.freeStorage)(bot.token),
}));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield bot.catch((error) => {
        console.log(error.message);
    });
    yield bot.start();
}))();
exports.default = bot;
