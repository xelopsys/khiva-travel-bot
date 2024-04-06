import bot from "../bot/bot";
import { TypeBot } from "../types";
import { InputFile } from "grammy";
import { admins } from "../constants/constants";

bot.command("download", async (ctx: TypeBot) => {
	if (admins.includes(ctx.update.message?.from?.id!)) {
		await ctx.reply("Download");
		await ctx.api.sendDocument(
			ctx.update.message?.chat.id!,
			new InputFile("dist/sheet.xlsx")
		);
	} else {
		await ctx.reply("You are not admin as I see");
	}
});

bot.hears(["Download"], async (ctx: TypeBot) => {
	if (admins.includes(ctx.update.message?.from?.id!)) {
		await ctx.reply("Download");
		await ctx.api.sendDocument(
			ctx.update.message?.chat.id!,
			new InputFile("dist/sheet.xlsx")
		);
	} else {
		await ctx.reply("You are not admin as I see");
	}
});
