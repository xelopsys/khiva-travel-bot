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
const menu_1 = require("../utils/menu");
const constants_1 = require("../constants/constants");
const prisma_1 = __importDefault(require("../lib/prisma"));
const functions_1 = require("../helpers/functions");
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
    return yield ctx.reply('send me a banner');
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
bot_1.default.hears('Cancel', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.cancel;
    return yield ctx.reply('Canceled', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
    });
}));
bot_1.default.callbackQuery('cancel', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.cancel;
    return yield ctx.reply('Canceled', {
        reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
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
                inline_keyboard: [[createTravel]],
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
                travelNames,
                [createTravel, { text: 'Delete', callback_data: 'delete' }],
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
                inline_keyboard: [[createCar]],
                remove_keyboard: true,
                one_time_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of cars, please choose one to edit or create new one or delete existing one', {
        reply_markup: {
            resize_keyboard: true,
            remove_keyboard: true,
            one_time_keyboard: true,
            inline_keyboard: [
                carNames,
                [createCar, { text: 'Delete', callback_data: 'delete' }],
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
                inline_keyboard: [[createTransfer]],
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
            ],
        },
    });
}));
bot_1.default.callbackQuery('delete', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.session.step === constants_1.keyboards.travel) {
        const travels = yield prisma_1.default.travel.findMany();
        const travelNames = travels.map((travel) => {
            return {
                text: travel.name,
            };
        });
        return yield ctx.reply('Choose a travel to delete', {
            reply_markup: {
                keyboard: [travelNames, [{ text: 'Cancel' }]],
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
                keyboard: [carNames, [{ text: 'Cancel' }]],
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
                keyboard: [transferNames, [{ text: 'Cancel' }]],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
    }
}));
bot_1.default.hears('Delete', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (ctx.session.step === constants_1.keyboards.gallery) {
        const gallery = yield prisma_1.default.gallery.findMany();
        if (gallery.length === 0) {
            return yield ctx.reply('No images found in gallery', {
                reply_markup: Object.assign(Object.assign({}, menu_1.menu), { one_time_keyboard: true, resize_keyboard: true }),
            });
        }
        yield ctx.reply('Choose an image to delete', {
            reply_markup: {
                keyboard: [
                    gallery.map((item) => ({ text: `${item.index}` })),
                    [{ text: 'Cancel' }],
                ],
                one_time_keyboard: true,
                resize_keyboard: true,
            },
        });
        return gallery.map((image, index) => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.replyWithPhoto(image.fileId, {
                caption: `${image.index}`,
            });
        }));
    }
}));
bot_1.default.on('message:photo', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g, _h, _j;
    const fileId = (_g = (_f = ctx.message) === null || _f === void 0 ? void 0 : _f.photo) === null || _g === void 0 ? void 0 : _g[((_j = (_h = ctx.message) === null || _h === void 0 ? void 0 : _h.photo) === null || _j === void 0 ? void 0 : _j.length) - 1].file_id;
    if (ctx.session.step === constants_1.keyboards.banner ||
        ctx.session.step === constants_1.keyboards.travelBanner ||
        ctx.session.step === constants_1.keyboards.gallery) {
        yield ctx.reply('Image is being saved...', {
            reply_markup: {
                keyboard: [[{ text: 'Cancel' }]],
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
                        keyboard: [[{ text: 'Cancel' }]],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
            }
            return yield ctx.replyWithPhoto(fileId);
        }));
    }
}));
bot_1.default.on('message:text', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _k, _l;
    if (ctx.session.step === constants_1.keyboards.gallery &&
        ((_l = (_k = ctx.message) === null || _k === void 0 ? void 0 : _k.text) === null || _l === void 0 ? void 0 : _l.match(/[\d{1}$]/))) {
        const index = parseInt(ctx.message.text) - 1;
        if (index < 0) {
            return yield ctx.reply('There is no image with this index');
        }
        const gallery = yield prisma_1.default.gallery.findFirst({
            where: {
                index: parseInt(ctx.message.text),
            },
        });
        return yield prisma_1.default.gallery
            .delete({
            where: {
                uuid: gallery === null || gallery === void 0 ? void 0 : gallery.uuid,
            },
        })
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            const gallery = yield prisma_1.default.gallery.findMany();
            yield ctx.reply('Image has been deleted');
            return yield ctx.reply("Choose another image or 'Cancel'", {
                reply_markup: {
                    keyboard: [
                        gallery.map((item) => ({ text: `${item.index}` })),
                        [{ text: 'Cancel' }],
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting image, please try again later', {
                reply_markup: {
                    keyboard: [[{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }));
    }
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
bot_1.default.on('message:text', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _m, _o, _p;
    if (ctx.session.step === constants_1.keyboards.travel) {
        const travel = yield prisma_1.default.travel.findFirst({
            where: {
                name: ((_m = ctx.message) === null || _m === void 0 ? void 0 : _m.text) || '',
            },
        });
        if (!travel)
            return yield ctx.reply('No travel found with this name');
        yield prisma_1.default.travel
            .update({
            where: {
                uuid: travel === null || travel === void 0 ? void 0 : travel.uuid,
            },
            data: {
                itinerary: {
                    deleteMany: {},
                },
                pricesPerCar: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting car, please try again later');
        }));
        yield prisma_1.default.travel
            .delete({
            where: {
                uuid: travel.uuid,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const travels = yield prisma_1.default.travel.findMany();
            const travelNames = travels.map((travel) => {
                return {
                    text: travel.name,
                };
            });
            if (travelNames.length === 0)
                return yield ctx.reply('All travels are deleted', {
                    reply_markup: {
                        keyboard: [travelNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Car '${res.name}' has been deleted`, {
                reply_markup: {
                    keyboard: [travelNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting travel, please try again later');
        }));
    }
    // delete a car
    if (ctx.session.step === constants_1.keyboards.car) {
        const car = yield prisma_1.default.car.findFirst({
            where: {
                carType: ((_o = ctx.message) === null || _o === void 0 ? void 0 : _o.text) || '',
            },
        });
        if (!car)
            return yield ctx.reply('No car found with this name');
        yield prisma_1.default.car
            .update({
            where: {
                uuid: car === null || car === void 0 ? void 0 : car.uuid,
            },
            data: {
                pictures: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting car, please try again later');
        }));
        yield prisma_1.default.car
            .delete({
            where: {
                uuid: car.uuid,
            },
            include: {
                pictures: true,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const cars = yield prisma_1.default.car.findMany();
            const carNames = cars.map((car) => {
                return {
                    text: car.carType,
                };
            });
            if (carNames.length === 0)
                return yield ctx.reply('All cars are deleted', {
                    reply_markup: {
                        keyboard: [carNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Car '${res.carType}' has been deleted`, {
                reply_markup: {
                    keyboard: [carNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting car, please try again later');
        }));
    }
    //delete a transfer
    if (ctx.session.step === constants_1.keyboards.transfer) {
        const transfer = yield prisma_1.default.transferInfo.findFirst({
            where: {
                transfer: ((_p = ctx.message) === null || _p === void 0 ? void 0 : _p.text) || '',
            },
        });
        if (!transfer)
            return yield ctx.reply('No transfer found with this name');
        yield prisma_1.default.transferInfo
            .update({
            where: {
                uuid: transfer === null || transfer === void 0 ? void 0 : transfer.uuid,
            },
            data: {
                transferOptions: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting transfer, please try again later');
        }));
        yield prisma_1.default.transferInfo
            .delete({
            where: {
                uuid: transfer.uuid,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const transfers = yield prisma_1.default.transferInfo.findMany();
            const transferNames = transfers.map((transfer) => {
                return {
                    text: transfer.transfer,
                };
            });
            if (transferNames.length === 0)
                return yield ctx.reply('All transfers are deleted', {
                    reply_markup: {
                        keyboard: [transferNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Transfer '${res.transfer}' has been deleted`, {
                reply_markup: {
                    keyboard: [transferNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting transfer, please try again later');
        }));
    }
}));
