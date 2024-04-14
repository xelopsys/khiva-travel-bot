import bot from '../../bot/bot';
import { TypeBot } from '../../types';
import { keyboards, commands } from '../../constants/constants';
import prisma from '../../lib/prisma';
import { KeyboardButton } from 'grammy/types';

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
              [{ text: commands.cancelButton }],
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
              keyboard: [[{ text: commands.cancelButton }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          }
        );
      });
  }
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
          'Error while deleting travel, please try again later'
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
              keyboard: [travelNames, [{ text: commands.cancelButton }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Travel '${res.name}' has been deleted`, {
          reply_markup: {
            keyboard: [travelNames, [{ text: commands.cancelButton }]],
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
              keyboard: [carNames, [{ text: commands.cancelButton }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Car '${res.carType}' has been deleted`, {
          reply_markup: {
            keyboard: [carNames, [{ text: commands.cancelButton }]],
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
              keyboard: [transferNames, [{ text: commands.cancelButton }]],
              one_time_keyboard: true,
              resize_keyboard: true,
            },
          });
        return await ctx.reply(`Transfer '${res.transfer}' has been deleted`, {
          reply_markup: {
            keyboard: [transferNames, [{ text: commands.cancelButton }]],
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
