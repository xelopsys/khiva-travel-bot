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
const axios_1 = __importDefault(require("axios"));
const prisma_1 = __importDefault(require("../lib/prisma"));
const token = process.env.BOT_TOKEN;
bot_1.default.command('start', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    ctx.session.__language_code = 'en';
    yield ctx.reply('Hello, i am khiva travel bot to help to manage the website!', {
        reply_markup: Object.assign(Object.assign({}, (constants_1.admins.includes((_b = (_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.id)
            ? menu_1.adminMenu
            : menu_1.menu)), { one_time_keyboard: true, resize_keyboard: true }),
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
    var _c;
    if (((_c = ctx.update.message) === null || _c === void 0 ? void 0 : _c.text) === 'Travel Banner') {
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
            keyboard: [[{ text: 'Cancel' }]],
            remove_keyboard: true,
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
bot_1.default.hears('Travel', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.session.step = constants_1.keyboards.travel;
    const travels = yield prisma_1.default.travel.findMany();
    const travelNames = travels.map((travel) => {
        const url = process.env.WEB_APP_URL + '/travels/' + travel.uuid + '/edit';
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
            url: process.env.WEB_APP_URL + '/travels/create',
        },
    };
    if (travelNames.length === 0)
        return yield ctx.reply('No travels found in database', {
            reply_markup: {
                keyboard: [[{ text: 'Add Travel' }]],
                remove_keyboard: true,
                one_time_keyboard: true,
            },
        });
    return yield ctx.reply('Here is the list of travels, please choose one to edit or create new one', {
        reply_markup: {
            resize_keyboard: true,
            one_time_keyboard: true,
            inline_keyboard: [travelNames, [createTravel]],
        },
    });
}));
bot_1.default.hears('Add Travel', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // await prisma.car.create({
    //   data: {
    //     models: ['Yutong / Foton'],
    //     carType: 'Bus',
    //     included: 'Fuel, a professional driver, and potable water',
    //     capacity: 45,
    //     pictures: {
    //       create: [
    //         {
    //           fileId:
    //             'AgACAgIAAxkBAAPdZglzwr4QT-LfDlfW3CBpULTXYAkAAhLZMRtIVwFI62j_XWBFRlsBAAMCAAN5AAM0BA',
    //           fileBase64: '',
    //         },
    //       ],
    //     },
    //     prices: {
    //       create: [
    //         {
    //           price: 120,
    //           distance: '1-49',
    //         },
    //         {
    //           price: 180,
    //           distance: '50-99',
    //         },
    //         {
    //           price: 250,
    //           distance: '100-199',
    //         },
    //         {
    //           price: 290,
    //           distance: '200-299',
    //         },
    //         {
    //           price: 360,
    //           distance: '300-399',
    //         },
    //       ],
    //     },
    //   },
    // });
    const cars = yield prisma_1.default.car.findMany();
    // const createdTravel = await prisma.travel.create({
    //   data: {
    //     name: 'Daytrip to Kalajik Kala & Salty Lake',
    //     route:
    //       'Khiva - Chodra Hovli - Poetry Center - Kalajik KAla and Salty Lake - Khiva',
    //     description:
    //       "Kalajik Kala is an ancient fortress in Uzbekistan's Kyzylkum Desert, known for its well-preserved walls and structures dating back to the 4th century BCE. Salty Lake, also called Lake Aydar, near Ayaz Kala, is famous for its turquoise color due to high salinity, offering a unique and picturesque destination for tourists.",
    //     duration: 6,
    //     sightseeingTime: 3,
    //     drivingTime: 3,
    //     drivingDistance: 160,
    //     travelType: 'PRIVATE',
    //     included:
    //       'Brochures, drivers for new cars with air conditioning, and pick-up and drop-off services at your location, along with complimentary 0.5-liter bottles of mineral water per person.',
    //     notIncluded:
    //       'Admission tickets, meals, camel excursions, lodging in a Yurt Camp, and additional activities are not included.',
    //     reservation: `Reserving our private or shared day trips, transfers, Aral Sea adventures, or guided city tours is easy and completely free. To book, simply confirm your reservation and provide the following details:
    //       - Name of the trip or service you're interested in.
    //       - Desired date for the trip or service.
    //       - Type of transport and price confirmation.
    //       - Number of travelers in your group and any luggage details.
    //       - Full names, citizenship, and passport/ID card numbers of all travelers.
    //       - Pick-up and start times for trips or transfers (contact us for recommendations).
    //       - Pick-up location (hotel name, airport, or railway station).
    //       - Drop-off location (hotel name, airport, or railway station).
    //       - Your contact information: email, mobile phone, or WhatsApp numbers.
    //     This information helps us check availability and organize your booking. To cancel a reservation without being charged (20% of the tour), please contact us at least 3 days before the tour starts.`,
    //     travelImage: {
    //       create: {
    //         fileId:
    //           'AgACAgIAAxkBAAPdZglzwr4QT-LfDlfW3CBpULTXYAkAAhLZMRtIVwFI62j_XWBFRlsBAAMCAAN5AAM0BA',
    //         fileBase64: '',
    //       },
    //     },
    //     pricesPerCar: {
    //       create: [
    //         {
    //           carId: cars[0].uuid,
    //           price: 29,
    //           distance: '160',
    //         },
    //         {
    //           carId: cars[1].uuid,
    //           price: 49,
    //           distance: '160',
    //         },
    //         {
    //           carId: cars[2].uuid,
    //           price: 59,
    //           distance: '160',
    //         },
    //         {
    //           carId: cars[3].uuid,
    //           price: 69,
    //           distance: '160',
    //         },
    //         {
    //           carId: cars[4].uuid,
    //           price: 79,
    //           distance: '160',
    //         },
    //         {
    //           carId: cars[5].uuid,
    //           price: 189,
    //           distance: '160',
    //         },
    //       ],
    //     },
    //     itinerary: {
    //       create: [
    //         {
    //           route:
    //             'Khiva Train Station or Hotel in Khiva - Chodra Hauli - Yangiariq Poetry Center - Kalajik Lake - Khiva Train Station or Hotel in Khiva',
    //           description:
    //             "We start your tour by picking you up from Khiva Train Station or your hotel in Khiva. The first stop is Chodra Hauli, Khan’s Summer Residence, a unique four-story building built in 1871 by Muhammad Rakhim Khan. Next, we visit the Yangiariq Poetry Center to observe the traditional process of making ceramic products. You can also purchase souvenirs here. The highlight of the trip is a visit to the Salty Lake, also known as Kalajik Lake, located near the Kalajik Kala fortress. The lake's water is similar to that of the Dead Sea and is believed to have therapeutic properties. After enjoying the lake, we drive you back to Khiva, where you will be dropped off at your hotel or the train station.",
    //           duration: 4,
    //         },
    //       ],
    //     },
    //   },
    // });
    // const createdTravel = await prisma.travel.create({
    //   data: {
    //     name: 'Daytrip to Ayaz Kala',
    //     route: 'Khiva - Urgench - Ayaz Kala - Urgench - Khiva',
    //     description:
    //       'Ayaz Kala is an ancient fortress located in the Kyzylkum Desert of Uzbekistan. Built during the 4th-2nd centuries BCE, it features tall clay walls and is divided into two parts, Ayaz Kala I and Ayaz Kala II. The site offers stunning desert views and is a popular spot for photography.',
    //     duration: 6,
    //     sightseeingTime: 2,
    //     drivingTime: 4,
    //     drivingDistance: 205,
    //     travelType: 'PRIVATE',
    //     included:
    //       'Brochures, drivers for new cars with air conditioning, and pick-up and drop-off services at your location, along with complimentary 0.5-liter bottles of mineral water per person.',
    //     notIncluded:
    //       'Admission tickets, meals, camel excursions, lodging in a Yurt Camp, and additional activities are not included.',
    //     reservation: `Reserving our private or shared day trips, transfers, Aral Sea adventures, or guided city tours is easy and completely free. To book, simply confirm your reservation and provide the following details:
    //       - Name of the trip or service you're interested in.
    //       - Desired date for the trip or service.
    //       - Type of transport and price confirmation.
    //       - Number of travelers in your group and any luggage details.
    //       - Full names, citizenship, and passport/ID card numbers of all travelers.
    //       - Pick-up and start times for trips or transfers (contact us for recommendations).
    //       - Pick-up location (hotel name, airport, or railway station).
    //       - Drop-off location (hotel name, airport, or railway station).
    //       - Your contact information: email, mobile phone, or WhatsApp numbers.
    //     This information helps us check availability and organize your booking. To cancel a reservation without being charged (20% of the tour), please contact us at least 3 days before the tour starts.`,
    //     travelImage: {
    //       create: {
    //         fileId:
    //           'AgACAgIAAxkBAAPdZglzwr4QT-LfDlfW3CBpULTXYAkAAhLZMRtIVwFI62j_XWBFRlsBAAMCAAN5AAM0BA',
    //         fileBase64: '',
    //       },
    //     },
    //     pricesPerCar: {
    //       create: [
    //         {
    //           carId: cars[0].uuid,
    //           price: 34,
    //           distance: '205',
    //         },
    //         {
    //           carId: cars[1].uuid,
    //           price: 54,
    //           distance: '205',
    //         },
    //         {
    //           carId: cars[2].uuid,
    //           price: 74,
    //           distance: '205',
    //         },
    //         {
    //           carId: cars[3].uuid,
    //           price: 84,
    //           distance: '205',
    //         },
    //         {
    //           carId: cars[4].uuid,
    //           price: 89,
    //           distance: '205',
    //         },
    //         {
    //           carId: cars[5].uuid,
    //           price: 219,
    //           distance: '205',
    //         },
    //       ],
    //     },
    //     itinerary: {
    //       create: [
    //         {
    //           route: 'Ayaz Kala',
    //           description:
    //             'We begin your tour by picking you up from Urgench Airport, Urgench or Khiva Train Station, or from your hotel in Khiva or Urgench. The journey to Ayaz Kala takes about 90 minutes, where you will explore one of the most spectacular and largest fortresses in the area. Ayaz Kala consists of three fortresses clustered together on and around a prominent hill at the eastern end of the Sultan-Uiz-dahg range. The earliest fortress, Ayaz Kala 1, dates back to the 4th century BCE and features a galleried enclosure and rounded towers added in the 3rd century BCE. After visiting Ayaz Kala, we will drive you back to Khiva or Urgench, which takes about 90 minutes, and drop you off at your desired location without any extra charge.',
    //           duration: 2,
    //         },
    //       ],
    //     },
    //   },
    // });
    // const createCar = await prisma.car.create({
    //   data: {
    //     model: 'Minibus',
    //     capacity: 3,
    //     price: 35,
    //     included: 'Food',
    //     notIncluded: 'Personal expenses',
    //     image: {
    //       create: {
    //         fileId: '123',
    //         fileBase64: 'abc123',
    //       },
    //     },
    //   },
    // });
    // await prisma.transferInfo.create({
    //   data: {
    //     transfer:
    //       'Khiva hotel → Khiva Train Station or Khiva Train Station → Khiva hotel',
    //     drivingDistance: '5-10',
    //     drivingTime: 20,
    //     time: 'min',
    //     transferOptions: {
    //       create: [
    //         {
    //           carId: cars[0].uuid,
    //           price: 5,
    //         },
    //         {
    //           carId: cars[1].uuid,
    //           price: 10,
    //         },
    //         {
    //           carId: cars[2].uuid,
    //           price: 15,
    //         },
    //         {
    //           carId: cars[3].uuid,
    //           price: 20,
    //         },
    //         {
    //           carId: cars[4].uuid,
    //           price: 20,
    //         },
    //         {
    //           carId: cars[5].uuid,
    //           price: 39,
    //         },
    //       ],
    //     },
    //   },
    // });
    // await prisma.transferInfo.create({
    //   data: {
    //     transfer: 'Transfer from Khiva to Urgench Airport or Train Station',
    //     drivingDistance: '34',
    //     drivingTime: 50,
    //     time: 'min',
    //     transferOptions: {
    //       create: [
    //         {
    //           carId: cars[0].uuid,
    //           price: 13,
    //         },
    //         {
    //           carId: cars[1].uuid,
    //           price: 20,
    //         },
    //         {
    //           carId: cars[2].uuid,
    //           price: 30,
    //         },
    //         {
    //           carId: cars[3].uuid,
    //           price: 35,
    //         },
    //         {
    //           carId: cars[4].uuid,
    //           price: 40,
    //         },
    //         {
    //           carId: cars[5].uuid,
    //           price: 79,
    //         },
    //       ],
    //     },
    //   },
    // });
    // await prisma.transferInfo.create({
    //   data: {
    //     transfer:
    //       'Pick up from Urgench Airport or Urgench Train Station to your hotel in Khiva',
    //     drivingDistance: '34',
    //     drivingTime: 50,
    //     time: 'min',
    //     transferOptions: {
    //       create: [
    //         {
    //           carId: cars[0].uuid,
    //           price: 15,
    //         },
    //         {
    //           carId: cars[1].uuid,
    //           price: 23,
    //         },
    //         {
    //           carId: cars[2].uuid,
    //           price: 30,
    //         },
    //         {
    //           carId: cars[3].uuid,
    //           price: 35,
    //         },
    //         {
    //           carId: cars[4].uuid,
    //           price: 40,
    //         },
    //         {
    //           carId: cars[5].uuid,
    //           price: 89,
    //         },
    //       ],
    //     },
    //   },
    // });
    // await prisma.contact.create({
    //   data: {
    //     map: 'https://maps.app.goo.gl/whph5QHvrpSqYYUP6',
    //     telegram: 'https://t.me/Farruh8854',
    //     whatsapp: 'https://wa.me/998990900012',
    //   },
    // });
    return yield ctx.reply('Enter travel name');
}));
bot_1.default.on('message:photo', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f, _g;
    const fileId = (_e = (_d = ctx.message) === null || _d === void 0 ? void 0 : _d.photo) === null || _e === void 0 ? void 0 : _e[((_g = (_f = ctx.message) === null || _f === void 0 ? void 0 : _f.photo) === null || _g === void 0 ? void 0 : _g.length) - 1].file_id;
    yield ctx.reply('Image is being saved...');
    if (ctx.session.step === constants_1.keyboards.banner ||
        ctx.session.step === constants_1.keyboards.travelBanner ||
        ctx.session.step === constants_1.keyboards.gallery) {
        return yield handleBannerInsertImage({
            fileId,
            banner: ctx.session.step,
        }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield ctx.reply('Image has been saved');
            if (ctx.session.step === constants_1.keyboards.gallery) {
                yield ctx.replyWithPhoto(fileId);
                return yield ctx.reply('send another one');
            }
            return yield ctx.replyWithPhoto(fileId);
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
function getFileUrlFromTelegram(fileId) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield bot_1.default.api.getFile(fileId);
        const filePath = file.file_path;
        const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
        return fileUrl;
    });
}
function downloadFileAsBase64(fileUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(fileUrl, { responseType: 'arraybuffer' });
        const base64String = Buffer.from(response.data, 'binary').toString('base64');
        const dataUri = `data:image/jpeg;base64,${base64String}`;
        return dataUri;
    });
}
const handleBannerInsertImage = ({ fileId, banner, }) => __awaiter(void 0, void 0, void 0, function* () {
    const fileUrl = yield getFileUrlFromTelegram(fileId);
    const base64String = yield downloadFileAsBase64(fileUrl);
    console.log('banner', banner, fileId);
    if (banner === constants_1.keyboards.banner) {
        return yield prisma_1.default.banner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.default.banner.create({
                data: {
                    fileId,
                    fileBase64: base64String,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.travelBanner) {
        return yield prisma_1.default.travelBanner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.default.travelBanner.create({
                data: {
                    fileId,
                    fileBase64: base64String,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.gallery) {
        return yield prisma_1.default.gallery.create({
            data: {
                fileId,
                fileBase64: base64String,
            },
        });
    }
});
