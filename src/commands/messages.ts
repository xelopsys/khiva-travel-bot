import bot from "../bot/bot";
import { TypeBot } from "../types";
import { language_keyboard, questionsKeyboardUZ } from "../utils/keyboards";
import { admins } from "../constants/constants";

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

bot.hears(["RUS", "ENG"], async (ctx: TypeBot) => {
	await ctx.reply("Please select anotherwdwdwlanguage", {
		reply_markup: {
			...language_keyboard,
			one_time_keyboard: true,
			resize_keyboard: true,
		},
	});
});

bot.hears("UZB", async (ctx: TypeBot) => {
	await ctx.i18n.setLocale("uz");
	ctx.session.__language_code = "uz";
	await ctx.reply(ctx.t("after_greeting"), {
		reply_markup: {
			...questionsKeyboardUZ,
			one_time_keyboard: true,
			resize_keyboard: true,
		},
	});

	// await ctx.reply("Please uzzzz anotherwdwdwlanguage", {
	// 	reply_markup: {
	// 		...language_keyboard,
	// 		one_time_keyboard: true,
	// 		resize_keyboard: true,
	// 	},
	// });
});

bot.hears(["Sotib olish", "buy"], async (ctx: TypeBot) => {
	await ctx.reply(
		`${ctx.t("buy_word")}
		https://t.me/Sugurtabozor_bot
	`,
		{
			reply_markup: {
				keyboard: [[{ text: "Orqaga" }]],
				one_time_keyboard: true,
				resize_keyboard: true,
			},
		}
	);
});

bot.hears(["Orqaga", "back"], async (ctx: TypeBot) => {
	await ctx.reply(ctx.t("back_to_greeting"), {
		reply_markup: {
			...questionsKeyboardUZ,
			one_time_keyboard: true,
			resize_keyboard: true,
		},
	});
});
bot.callbackQuery("back", async (ctx: TypeBot) => {
	await ctx.reply(ctx.t("back_to_greeting"), {
		reply_markup: {
			...questionsKeyboardUZ,
			one_time_keyboard: true,
			resize_keyboard: true,
		},
	});
});

// bot.on("message:text", async (ctx: TypeBot) => await getAnswer(ctx));
