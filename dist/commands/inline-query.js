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
const bot_1 = __importDefault(require("../bot/bot"));
// bot.inlineQuery(["inline", "grammy"], async (ctx: TypeBot) => {
// 	await ctx.answerInlineQuery([
// 		{
// 			type: "photo",
// 			photo_url:
// 				"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
// 			id: "1",
// 			title: "BukuappBot",
// 			thumb_url:
// 				"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
// 			// id: "grammy-website",
// 			// title: "grammY",
// 			input_message_content: {
// 				message_text:
// 					"<b>grammY</b> is the best way to create your own Telegram bots. \
// 			  They even have a pretty website! 👇",
// 				parse_mode: "HTML",
// 			},
// 			// reply_markup: new InlineKeyboard().url(
// 			// 	"grammY website",
// 			// 	"https://t.me/BukuappBot"
// 			// ),
// 			// url: "https://t.me/BukuappBot",
// 			description: "The Telegram Bot Framework.",
// 		},
// 	]);
// });
// bot.inlineQuery(["inline", "grammy"], async (ctx) => {
// 	await ctx.answerInlineQuery([
// 		{
// 			type: "article",
// 			id: "grammy-website",
// 			title: "grammY",
// 			input_message_content: {
// 				message_text:
// 					"<b>grammY</b> is the best way to create your own Telegram bots. \
//     They even have a pretty website! 👇",
// 				parse_mode: "HTML",
// 			},
// 		},
// 	]);
// });
// bot.api.getUpdates().then((res) => {
// 	console.log(res);
// });
// bot.api.getChat("-1001624795732").then((res) => {
// 	console.log(res);
// });
bot_1.default.on("inline_query", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(ctx.update.inline_query, "inline");
    yield ctx.answerInlineQuery([
        {
            // photo_url:
            // 	"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
            id: "1",
            // photo_width: 100,
            // photo_height: 100,
            type: "article",
            url: "https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
            title: "BukuappBot",
            thumb_url: "https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
            // caption: "BukuappBot",
            // id: "grammy-website",
            // title: "grammY",
            thumb_width: 100,
            thumb_height: 100,
            input_message_content: {
                message_text: `
                    <b>gramqwdqwdmY</b> is the best way to create your own Telegram bots. \
          They even have a pretty website! 👇
					<a	href="https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75">
					Image
					</a>
		  `,
                parse_mode: "HTML",
                // photo_url:
                // 	"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
                // photo_width: 100,
                // photo_height: 100,
                // entities: [
                // 	{
                // 		type: "text_link",
                // 		offset: 10,
                // 		length: 10,
                // 		url: "https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
                // 	},
                // 	// {
                // 	// 	type: "",
                // 	// }
                // ],
            },
            // reply_markup: new InlineKeyboard().switchInline(
            // 	"grammY website",
            // 	"grammy"
            // ),
            reply_markup: new grammy_1.InlineKeyboard().row({
                text: "grammY website",
                callback_data: "grammy",
            }),
        },
        // 	{
        // 		// photo_url:
        // 		// 	"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
        // 		id: "2",
        // 		// photo_width: 100,
        // 		// photo_height: 100,
        // 		type: "article",
        // 		title: "BukuappBot",
        // 		thumb_url:
        // 			"https://xelopsys.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fxelopsys-a10c8.appspot.com%2Fo%2F1663236009080react-logo%25403x.png%3Falt%3Dmedia%26token%3Dd1e9197a-711d-4133-a574-734b148e23a1&w=1920&q=75",
        // 		// caption: "BukuappBot",
        // 		// id: "grammy-website",
        // 		// title: "grammY",
        // 		input_message_content: {
        // 			message_text: `
        //             <b>gramqwdqwdmY</b> is the best way to create your own Telegram bots. \
        //   They even have a pretty website! 👇`,
        // 			parse_mode: "HTML",
        // 		},
        // 		// reply_markup: new InlineKeyboard().url(
        // 		// 	"grammY website",
        // 		// 	"https://t.me/BukuappBot"
        // 		// ),
        // 		// url: "https://t.me/BukuappBot",
        // 		description: "The Telegram Bot Framework.",
        // 	},
    ], {
        cache_time: 10,
        is_personal: true,
        switch_pm_text: "BukuappBot",
        switch_pm_parameter: "BukuappBot",
        next_offset: "BukuappBot",
    });
    // const chatId = ctx?.update?.chosen_inline_result?.chat?.id!;
}));
// bot.on("chosen_inline_result", async (ctx: TypeBot) => {
// 	console.log(ctx, "ctx");
// 	console.log(ctx?.update, "updateqwd");
// 	console.log(ctx?.update?.chosen_inline_result, "chosen");
// 	console.log(ctx.session, "session");
// 	// console.log(ctx?.session, "session");
// 	// await ctx.api.sendMessage(ctx?.update?.update_id!, "best");
// });
// bot.on("chosen_inline_result", async (ctx: TypeBot) => {
// 	console.log(ctx, "ctx");
// 	console.log(ctx?.update, "updateqwd");
// 	console.log(ctx?.update?.chosen_inline_result, "chosen");
// 	// console.log(ctx?.session, "session");
// 	// await ctx.api.sendMessage(ctx?.update?.update_id!, "best");
// });
// bot.callbackQuery(/^view_image/, async (ctx) => {
// 	console.log(ctx, "ctx");
// 	console.log(ctx?.senderChat);
// 	const chatId = await fetch(
// 		"https://api.telegram.org/bot" + process.env.TOKEN + "/getUpdates"
// 	);
// 	// console.log(ctx?.update.callback_query.message, "message");
// 	// console.log(ctx?.update, "updateqwd");
// 	// console.log(ctx?.update?.callback_query, "chosen");
// 	// console.log(ctx?.session, "session");
// 	await ctx.api.sendMessage(-1001624795732, "best");
// });
bot_1.default.on("callback_query", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(ctx, "ctx");
    console.log(ctx === null || ctx === void 0 ? void 0 : ctx.update, "updateqwd");
    console.log((_a = ctx === null || ctx === void 0 ? void 0 : ctx.update) === null || _a === void 0 ? void 0 : _a.callback_query, "chosen");
    // console.log(ctx?.session, "session");
    // await ctx.api.sendMessage(ctx?.update?.update_id!, "best");
}));
// bot.inlineQuery("inline", async (ctx) => {
// 	console.log(ctx, "best");
// 	await ctx.answerInlineQuery(
// 		[
// 			{
// 				type: "article",
// 				id: "grammy-website",
// 				title: "grammY",
// 				input_message_content: {
// 					message_text:
// 						"<b>grammY</b> is the best way to create your own Telegram bots. \
//   They even have a pretty website! 👇",
// 					parse_mode: "HTML",
// 				},
// 				reply_markup: new InlineKeyboard().url(
// 					"grammY website",
// 					"https://grammy.dev/"
// 				),
// 				url: "https://grammy.dev/",
// 				description: "The Telegram Bot Framework.",
// 			},
// 		]
// 		// { cache_time: 30 * 24 * 3600 } // one month in seconds
// 	);
// });
