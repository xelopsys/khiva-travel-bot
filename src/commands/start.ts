import bot from '../bot/bot';
import { TypeBot } from '../types';
import { menu, adminMenu } from '../utils/menu';
import { admins, keyboards } from '../constants/constants';
import { KeyboardValue } from '../types/keyboards';
import axios from 'axios';
import prisma from '../lib/prisma';
import { InlineKeyboard } from 'grammy';
import { InlineKeyboardButton } from 'grammy/types';

const token = process.env.BOT_TOKEN;
bot.command('start', async (ctx: TypeBot) => {
  ctx.session.__language_code = 'en';
  await ctx.reply(ctx.t('greeting'), {
    reply_markup: {
      ...(admins.includes(ctx.update.message?.from?.id as number)
        ? adminMenu
        : menu),
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears('Banner', async (ctx: TypeBot) => {
  return await ctx.reply('Choose a banner', {
    reply_markup: {
      keyboard: [
        [{ text: 'Home Banner' }, { text: 'Travel Banner' }],
        [{ text: 'Cancel' }],
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears(['Home Banner', 'Travel Banner'], async (ctx: TypeBot) => {
  if (ctx.update.message?.text === 'Travel Banner') {
    ctx.session.step = keyboards.travelBanner;
  } else {
    ctx.session.step = keyboards.banner;
  }
  return await ctx.reply('send me a banner');
});

bot.hears('Gallery', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.gallery;
  return await ctx.reply('send me a photo', {
    reply_markup: {
      keyboard: [[{ text: 'Cancel' }]],
      remove_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.hears('Cancel', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.cancel;
  return await ctx.reply('Canceled', {
    reply_markup: {
      ...menu,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears('Travel', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.travel;
  const travels = await prisma.travel.findMany();
  const travelNames: InlineKeyboardButton[] = travels.map((travel) => {
    const url = process.env.WEB_APP_URL + '/travels/' + travel.uuid + '/edit';
    return {
      text: travel.name,
      web_app: {
        url: url,
      },
    };
  });
  const createTravel: InlineKeyboardButton = {
    text: 'Create Travel',
    web_app: {
      url: process.env.WEB_APP_URL + '/travels/create',
    },
  };

  if (travelNames.length === 0)
    return await ctx.reply('No travels found in database', {
      reply_markup: {
        keyboard: [[{ text: 'Add Travel' }]],
        remove_keyboard: true,
        one_time_keyboard: true,
      },
    });
  return await ctx.reply(
    'Here is the list of travels, please choose one to edit or create new one',
    {
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: true,
        inline_keyboard: [travelNames, [createTravel]],
      },
    }
  );
});

bot.hears('Add Travel', async (ctx: TypeBot) => {
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
  const cars = await prisma.car.findMany();
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

  return await ctx.reply('Enter travel name');
});

bot.on('message:photo', async (ctx: TypeBot) => {
  const fileId = ctx.message?.photo?.[ctx.message?.photo?.length - 1]
    .file_id as string;
  await ctx.reply('Image is being saved...');
  if (
    ctx.session.step === keyboards.banner ||
    ctx.session.step === keyboards.travelBanner ||
    ctx.session.step === keyboards.gallery
  ) {
    return await handleBannerInsertImage({
      fileId,
      banner: ctx.session.step,
    }).then(async () => {
      await ctx.reply('Image has been saved');
      if (ctx.session.step === keyboards.gallery) {
        await ctx.replyWithPhoto(fileId);
        return await ctx.reply('send another one');
      }
      return await ctx.replyWithPhoto(fileId);
    });
  }
});

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

async function getFileUrlFromTelegram(fileId: string) {
  const file = await bot.api.getFile(fileId);
  const filePath = file.file_path;
  const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
  return fileUrl;
}

async function downloadFileAsBase64(fileUrl: string) {
  const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
  const base64String = Buffer.from(response.data, 'binary').toString('base64');
  const dataUri = `data:image/jpeg;base64,${base64String}`;
  return dataUri;
}

const handleBannerInsertImage = async ({
  fileId,
  banner,
}: {
  fileId: string;
  banner: KeyboardValue;
}) => {
  const fileUrl = await getFileUrlFromTelegram(fileId);
  const base64String = await downloadFileAsBase64(fileUrl);
  console.log('banner', banner, fileId);
  if (banner === keyboards.banner) {
    return await prisma.banner.deleteMany().then(async () => {
      await prisma.banner.create({
        data: {
          fileId,
          fileBase64: base64String,
        },
      });
    });
  }
  if (banner === keyboards.travelBanner) {
    return await prisma.travelBanner.deleteMany().then(async () => {
      await prisma.travelBanner.create({
        data: {
          fileId,
          fileBase64: base64String,
        },
      });
    });
  }
  if (banner === keyboards.gallery) {
    return await prisma.gallery.create({
      data: {
        fileId,
        fileBase64: base64String,
      },
    });
  }
};
