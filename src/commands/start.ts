import bot from '../bot/bot';
import { TypeBot } from '../types';
import { menu } from '../utils/menu';
import { admins, keyboards } from '../constants/constants';
import { KeyboardValue } from '../types/keyboards';
import axios from 'axios';
import prisma from '../lib/prisma';
import { InlineKeyboardButton, KeyboardButton } from 'grammy/types';
import { handleBannerInsertImage } from '../helpers/functions';

const actionKeyboards: KeyboardButton[] = [
  { text: 'Delete' },
  { text: 'Cancel' },
];

bot.command('start', async (ctx: TypeBot) => {
  await ctx.reply(
    'Hello, i am khiva travel bot to help to manage the website!',
    {
      reply_markup: {
        ...menu,
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    }
  );
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
  return await ctx.reply('send me a banner', {
    reply_markup: {
      keyboard: [[{ text: 'Cancel' }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.hears('Gallery', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.gallery;
  return await ctx.reply('send me a photo', {
    reply_markup: {
      keyboard: [actionKeyboards],
      resize_keyboard: true,
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

bot.callbackQuery('cancel', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.cancel;
  return await ctx.reply('Canceled', {
    reply_markup: {
      ...menu,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears('Contacts', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.contact;
  const contact = await prisma.contact.findFirst();
  const params = `?telegram=${ctx.from?.id}`;
  if (!contact) {
    return await ctx.reply('No contact found in database', {
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
  return await ctx.reply(
    `Here is the contact information:
     - Telegram: ${contact.telegram}
     - WhatsApp: ${contact.whatsapp}
     - Map: ${contact.map}`,
    {
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
    }
  );
});

bot.hears('Travel', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.travel;
  const travels = await prisma.travel.findMany();
  const params = `?telegram=${ctx.from?.id}`;
  const travelNames: InlineKeyboardButton[] = travels.map((travel) => {
    const url =
      process.env.WEB_APP_URL + '/travels/' + travel.uuid + '/edit' + params;
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
      url: process.env.WEB_APP_URL + '/travels/create' + params,
    },
  };

  if (travelNames.length === 0)
    return await ctx.reply('No travels found in database, create new one', {
      reply_markup: {
        inline_keyboard: [
          [createTravel],
          [{ text: 'Cancel', callback_data: 'cancel' }],
        ],
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
        remove_keyboard: true,
        inline_keyboard: [
          travelNames,
          [createTravel, { text: 'Delete', callback_data: 'delete' }],
          [{ text: 'Cancel', callback_data: 'cancel' }],
        ],
      },
    }
  );
});

bot.hears('Cars', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.car;
  const cars = await prisma.car.findMany();
  const params = `?telegram=${ctx.from?.id}`;
  const carNames: InlineKeyboardButton[] = cars.map((car) => {
    const url =
      process.env.WEB_APP_URL + '/cars/' + car.uuid + '/edit' + params;
    return {
      text: car.carType,
      web_app: {
        url: url,
      },
    };
  });
  const createCar: InlineKeyboardButton = {
    text: 'Create a new car',
    web_app: {
      url: process.env.WEB_APP_URL + '/cars/create' + params,
    },
  };

  if (carNames.length === 0)
    return await ctx.reply('No cars found in database, create new one', {
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
  return await ctx.reply(
    'Here is the list of cars, please choose one to edit or create new one or delete existing one',
    {
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
    }
  );
});

bot.hears('Transfers', async (ctx: TypeBot) => {
  ctx.session.step = keyboards.transfer;
  const transfers = await prisma.transferInfo.findMany();
  const params = `?telegram=${ctx.from?.id}`;
  const transferNames: InlineKeyboardButton[] = transfers.map((transfer) => {
    const url =
      process.env.WEB_APP_URL +
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
  const createTransfer: InlineKeyboardButton = {
    text: 'Create a new transfer',
    web_app: {
      url: process.env.WEB_APP_URL + '/transfers/create' + params,
    },
  };

  if (transferNames.length === 0)
    return await ctx.reply('No transfer found in database, create new one', {
      reply_markup: {
        inline_keyboard: [
          [createTransfer],
          [{ text: 'Cancel', callback_data: 'cancel' }],
        ],
        remove_keyboard: true,
        one_time_keyboard: true,
      },
    });
  return await ctx.reply(
    'Here is the list of transfers, please choose one to edit or create new one or delete existing one',
    {
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
    }
  );
});

bot.callbackQuery('delete', async (ctx: TypeBot) => {
  if (ctx.session.step === keyboards.travel) {
    const travels = await prisma.travel.findMany();
    const travelNames: KeyboardButton[] = travels.map((travel) => {
      return {
        text: travel.name,
      };
    });
    return await ctx.reply('Choose a travel to delete', {
      reply_markup: {
        keyboard: [travelNames, [{ text: 'Cancel' }]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
  if (ctx.session.step === keyboards.car) {
    const cars = await prisma.car.findMany();
    const carNames: KeyboardButton[] = cars.map((car) => {
      return {
        text: car.carType,
      };
    });
    return await ctx.reply('Choose a car to delete', {
      reply_markup: {
        keyboard: [carNames, [{ text: 'Cancel' }]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
  if (ctx.session.step === keyboards.transfer) {
    const transfers = await prisma.transferInfo.findMany();
    const transferNames: KeyboardButton[] = transfers.map((transfer) => {
      return {
        text: transfer.transfer,
      };
    });
    return await ctx.reply('Choose a transfer to delete', {
      reply_markup: {
        keyboard: [transferNames, [{ text: 'Cancel' }]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
});

bot.hears('Delete', async (ctx: TypeBot) => {
  if (ctx.session.step === keyboards.gallery) {
    const gallery = await prisma.gallery.findMany();
    if (gallery.length === 0) {
      return await ctx.reply('No images found in gallery', {
        reply_markup: {
          ...menu,
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });
    }
    await ctx.reply('Choose an image to delete', {
      reply_markup: {
        keyboard: [
          gallery.map((item) => ({ text: `${item.index}` })),
          [{ text: 'Cancel' }],
        ],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
    return gallery.map(async (image, index) => {
      return await ctx.replyWithPhoto(image.fileId, {
        caption: `${image.index}`,
      });
    });
  }
});

bot.on('message:photo', async (ctx: TypeBot) => {
  const fileId = ctx.message?.photo?.[ctx.message?.photo?.length - 1]
    .file_id as string;
  if (
    ctx.session.step === keyboards.banner ||
    ctx.session.step === keyboards.travelBanner ||
    ctx.session.step === keyboards.gallery
  ) {
    await ctx.reply('Image is being saved...', {
      reply_markup: {
        keyboard: [[{ text: 'Cancel' }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return await handleBannerInsertImage({
      fileId,
      banner: ctx.session.step,
    }).then(async () => {
      await ctx.reply('Image has been saved');
      if (ctx.session.step === keyboards.gallery) {
        await ctx.replyWithPhoto(fileId);
        return await ctx.reply('send another one', {
          reply_markup: {
            keyboard: [[{ text: 'Cancel' }]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      return await ctx.replyWithPhoto(fileId);
    });
  }
});

bot.on('message:text', async (ctx: TypeBot) => {
  if (
    ctx.session.step === keyboards.gallery &&
    ctx.message?.text?.match(/[\d{1}$]/)
  ) {
    const index = parseInt(ctx.message.text) - 1;
    if (index < 0) {
      return await ctx.reply('There is no image with this index');
    }
    const gallery = await prisma.gallery.findFirst({
      where: {
        index: parseInt(ctx.message.text),
      },
    });
    return await prisma.gallery
      .delete({
        where: {
          uuid: gallery?.uuid,
        },
      })
      .then(async () => {
        const gallery = await prisma.gallery.findMany();
        await ctx.reply('Image has been deleted');
        return await ctx.reply("Choose another image or 'Cancel'", {
          reply_markup: {
            keyboard: [
              gallery.map((item) => ({ text: `${item.index}` })),
              [{ text: 'Cancel' }],
            ],
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting image, please try again later',
          {
            reply_markup: {
              keyboard: [[{ text: 'Cancel' }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          }
        );
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
bot.on('message:text', async (ctx: TypeBot) => {
  if (ctx.session.step === keyboards.travel) {
    const travel = await prisma.travel.findFirst({
      where: {
        name: ctx.message?.text || '',
      },
    });
    if (!travel) return await ctx.reply('No travel found with this name');
    await prisma.travel
      .update({
        where: {
          uuid: travel?.uuid,
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
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting car, please try again later'
        );
      });
    await prisma.travel
      .delete({
        where: {
          uuid: travel.uuid,
        },
      })
      .then(async (res) => {
        const travels = await prisma.travel.findMany();
        const travelNames: KeyboardButton[] = travels.map((travel) => {
          return {
            text: travel.name,
          };
        });

        if (travelNames.length === 0)
          return await ctx.reply('All travels are deleted', {
            reply_markup: {
              keyboard: [travelNames, [{ text: 'Cancel' }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Car '${res.name}' has been deleted`, {
          reply_markup: {
            keyboard: [travelNames, [{ text: 'Cancel' }]],
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting travel, please try again later'
        );
      });
  }

  // delete a car
  if (ctx.session.step === keyboards.car) {
    const car = await prisma.car.findFirst({
      where: {
        carType: ctx.message?.text || '',
      },
    });

    if (!car) return await ctx.reply('No car found with this name');
    await prisma.car
      .update({
        where: {
          uuid: car?.uuid,
        },
        data: {
          pictures: {
            deleteMany: {},
          },
        },
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting car, please try again later'
        );
      });
    await prisma.car
      .delete({
        where: {
          uuid: car.uuid,
        },
        include: {
          pictures: true,
        },
      })
      .then(async (res) => {
        const cars = await prisma.car.findMany();
        const carNames: KeyboardButton[] = cars.map((car) => {
          return {
            text: car.carType,
          };
        });

        if (carNames.length === 0)
          return await ctx.reply('All cars are deleted', {
            reply_markup: {
              keyboard: [carNames, [{ text: 'Cancel' }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Car '${res.carType}' has been deleted`, {
          reply_markup: {
            keyboard: [carNames, [{ text: 'Cancel' }]],
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting car, please try again later'
        );
      });
  }

  //delete a transfer
  if (ctx.session.step === keyboards.transfer) {
    const transfer = await prisma.transferInfo.findFirst({
      where: {
        transfer: ctx.message?.text || '',
      },
    });

    if (!transfer) return await ctx.reply('No transfer found with this name');
    await prisma.transferInfo
      .update({
        where: {
          uuid: transfer?.uuid,
        },
        data: {
          transferOptions: {
            deleteMany: {},
          },
        },
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting transfer, please try again later'
        );
      });
    await prisma.transferInfo
      .delete({
        where: {
          uuid: transfer.uuid,
        },
      })
      .then(async (res) => {
        const transfers = await prisma.transferInfo.findMany();
        const transferNames: KeyboardButton[] = transfers.map((transfer) => {
          return {
            text: transfer.transfer,
          };
        });

        if (transferNames.length === 0)
          return await ctx.reply('All transfers are deleted', {
            reply_markup: {
              keyboard: [transferNames, [{ text: 'Cancel' }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Transfer '${res.transfer}' has been deleted`, {
          reply_markup: {
            keyboard: [transferNames, [{ text: 'Cancel' }]],
            one_time_keyboard: true,
            resize_keyboard: true,
          },
        });
      })
      .catch(async () => {
        return await ctx.reply(
          'Error while deleting transfer, please try again later'
        );
      });
  }
});
