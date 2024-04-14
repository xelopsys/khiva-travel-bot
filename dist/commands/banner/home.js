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
const actionKeyboards = [
    { text: 'Delete' },
    { text: 'Cancel' },
];
bot_1.default.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply('Hello, i am khiva travel bot to help to manage the website!', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.hears('Banner', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ctx.reply('Choose a banner', {
        reply_markup: {
            keyboard: [
                [{ text: 'Home Banner' }, { text: 'Travel Banner' }],
                [{ text: 'Cancel' }],
            ],
            one_time_keyboard: true,
            resize_keyboard: true,
        },
    });
}));
bot_1.default.hears(['Home Banner', 'Travel Banner'], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (((_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.text) === 'Travel Banner') {
        ctx.session.step = constants_1.keyboards.travelBanner;
    }
    else {
        ctx.session.step = constants_1.keyboards.banner;
    }
    return yield ctx.reply('send me a banner', {
        reply_markup: {
            keyboard: [[{ text: 'Cancel' }]],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
}));
bot_1.default.hears('Gallery', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.gallery;
    return yield ctx.reply('send me a photo', {
        reply_markup: {
            keyboard: [actionKeyboards],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    });
}));
bot_1.default.hears('Contacts', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    ctx.session.step = constants_1.keyboards.contact;
    const contact = yield prisma_1.default.contact.findFirst();
    const params = `?telegram=${(_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id}`;
    if (!contact) {
        return yield ctx.reply('No contact found in database', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Create Contact',
                            web_app: {
                                url: process.env.WEB_APP_URL + '/contact/create',
                            },
                        },
                    ],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
    return yield ctx.reply(`Here is the contact information:
     - Telegram: ${contact.telegram}
     - WhatsApp: ${contact.whatsapp}
     - Map: ${contact.map}`, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Edit Contact',
                        web_app: {
                            url: process.env.WEB_APP_URL + '/contact/edit' + params,
                        },
                    },
                ],
                [
                    {
                        text: 'Cancel',
                        callback_data: 'cancel',
                    },
                ],
            ],
            remove_keyboard: true,
            one_time_keyboard: true,
            resize_keyboard: true,
        },
    });
}));
bot_1.default.hears('Travel', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    ctx.session.step = constants_1.keyboards.travel;
    const travels = yield prisma_1.default.travel.findMany();
    const params = `?telegram=${(_c = ctx.from) === null || _c === void 0 ? void 0 : _c.id}`;
    const travelNames = travels.map((travel) => {
        const url = process.env.WEB_APP_URL + '/travels/' + travel.uuid + '/edit' + params;
        return {
            text: travel.name,
            web_app: {
                url: url,
            },
        };
    });
    const createTravel = {
        text: 'Create Travel',
        web_app: {
            url: process.env.WEB_APP_URL + '/travels/create' + params,
        },
    };
    if (travelNames.length === 0)
        return yield ctx.reply('No travels found in database, create new one', {
            reply_markup: {
                inline_keyboard: [
                    [createTravel],
                    [{ text: 'Cancel', callback_data: 'cancel' }],
                ],
                remove_keyboard: true,
                one_time_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of travels, please choose one to edit or create new one', {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            remove_keyboard: true,
            inline_keyboard: [
                travelNames.slice(0, 2),
                travelNames.slice(2, 4),
                travelNames.slice(4, 6),
                travelNames.slice(6, 8),
                travelNames.slice(8, 10),
                travelNames.slice(10, 12),
                travelNames.slice(12, 14),
                travelNames.slice(14, 16),
                travelNames.slice(16, 18),
                travelNames.slice(18, 20),
                travelNames.slice(20, 22),
                travelNames.slice(22, 24),
                travelNames.slice(24, 26),
                travelNames.slice(26, 28),
                [createTravel, { text: 'Delete', callback_data: 'delete' }],
                [{ text: 'Cancel', callback_data: 'cancel' }],
            ],
        },
    });
}));
bot_1.default.hears('Cars', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    ctx.session.step = constants_1.keyboards.car;
    const cars = yield prisma_1.default.car.findMany();
    const params = `?telegram=${(_d = ctx.from) === null || _d === void 0 ? void 0 : _d.id}`;
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
                    [{ text: 'Cancel', callback_data: 'cancel' }],
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
                carNames,
                [createCar, { text: 'Delete', callback_data: 'delete' }],
                [{ text: 'Cancel', callback_data: 'cancel' }],
            ],
        },
    });
}));
bot_1.default.hears('Transfers', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    ctx.session.step = constants_1.keyboards.transfer;
    const transfers = yield prisma_1.default.transferInfo.findMany();
    const params = `?telegram=${(_e = ctx.from) === null || _e === void 0 ? void 0 : _e.id}`;
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
                    [{ text: 'Cancel', callback_data: 'cancel' }],
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
                transferNames,
                [createTransfer, { text: 'Delete', callback_data: 'delete' }],
                [{ text: 'Cancel', callback_data: 'cancel' }],
            ],
        },
    });
}));
// Shameless self-advertising in one project's documentation
// is the best kind of advertising.
// Return empty result list for other queries.
// bot.on("inline_query", (ctx) => ctx.answerInlineQuery([]));
// const inlineKeyboard = new InlineKeyboard().text("Click me", "c1").add({
// 	text: "Click me",
// 	callback_data: "c2",
// });
// bot.command("inline", (ctx) =>
// 	ctx.reply("Inline buttons", {
// 		reply_markup: { ...inlineKeyboard, one_time_keyboard: true },
// 	})
// );
// bot.callbackQuery("c1", (ctx) => {
// 	ctx.answerCallbackQuery("You clicked me!");
// 	ctx.reply("You clicked me!", {
// 		reply_markup: {
// 			remove_keyboard: true,
// 		},
// 	});
// });
// bot.on(["message:text", "message::phone_number"], async (ctx) => {
// 	const phoneKeyboard = {
// 		reply_markup: {
// 			keyboard: [
// 				[{ text: "Contact", request_contact: true }],
// 				[{ text: "Cancel" }],
// 			],
// 			one_time_keyboard: true,
// 		},
// 	};
// 	await ctx.reply("Please share your phone number", phoneKeyboard);
// 	if (await ctx.message?.contact?.phone_number) {
// 		await ctx.reply(`thank u ${ctx.message?.contact?.phone_number}`);
// 	}
// });
// bot.on("message", async (ctx) => {
// 	console.log(ctx.message.contact?.phone_number);
// });
// bot.on("message:p", async (ctx) => {})
// bot.on("message::phone_number", async (ctx) => {
// 	await ctx.reply(`thank u ${ctx.message?.contact?.phone_number}`);
// 	console.log("phone");
// });
// bot.on("message")
// bot.on("callback_query:data", (ctx) => {
// 	ctx.answerCallbackQuery("You clicked me!");
// });
// async function getFileFromTelegram(fileId: any) {
//   const file = await bot.api.getFile(fileId);
//   const filePath = file.file_path;
//   const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
//   const fileBuffer = await readFile(fileUrl);
//   return fileBuffer;
// }
