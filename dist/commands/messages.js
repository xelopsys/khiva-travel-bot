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
const keyboards_1 = require("../utils/keyboards");
// bot.on("message:photo", async (ctx: TypeBot) => {
// 	console.log(ctx.update.message?.photo, "ctx");
// 	if (
// 		ctx.update.message?.from?.id &&
// 		admins.includes(ctx.update.message?.from?.id)
// 	) {
// 		await ctx.replyWithPhoto(ctx.update.message?.photo![0].file_id!);
// 	}
// 	return ctx.reply("You are not admin as I see");
// });
bot_1.default.hears(["RUS", "ENG"], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Please select anotherwdwdwlanguage", {
        reply_markup: Object.assign(Object.assign({}, keyboards_1.language_keyboard), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.hears("UZB", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.i18n.setLocale("uz");
    ctx.session.__language_code = "uz";
    yield ctx.reply(ctx.t("after_greeting"), {
        reply_markup: Object.assign(Object.assign({}, keyboards_1.questionsKeyboardUZ), { one_time_keyboard: true, resize_keyboard: true }),
    });
    // await ctx.reply("Please uzzzz anotherwdwdwlanguage", {
    // 	reply_markup: {
    // 		...language_keyboard,
    // 		one_time_keyboard: true,
    // 		resize_keyboard: true,
    // 	},
    // });
}));
bot_1.default.hears(["Sotib olish", "buy"], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(`${ctx.t("buy_word")}
		https://t.me/Sugurtabozor_bot
	`, {
        reply_markup: {
            keyboard: [[{ text: "Orqaga" }]],
            one_time_keyboard: true,
            resize_keyboard: true,
        },
    });
}));
bot_1.default.hears(["Orqaga", "back"], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(ctx.t("back_to_greeting"), {
        reply_markup: Object.assign(Object.assign({}, keyboards_1.questionsKeyboardUZ), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.callbackQuery("back", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply(ctx.t("back_to_greeting"), {
        reply_markup: Object.assign(Object.assign({}, keyboards_1.questionsKeyboardUZ), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
// bot.on("message:text", async (ctx: TypeBot) => await getAnswer(ctx));
