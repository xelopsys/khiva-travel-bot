import bot from '../../bot/bot';
import { TypeBot } from '../../types';
import { menu } from '../../utils/menu';
import { keyboards, commands } from '../../constants/constants';
import prisma from '../../lib/prisma';
import { KeyboardButton } from 'grammy/types';

bot.callbackQuery(commands.deleteCall, async (ctx: TypeBot) => {
  if (ctx.session.step === keyboards.travel) {
    const travels = await prisma.travel?.findMany();
    const travelNames: KeyboardButton[] = travels?.map((travel) => {
      return {
        text: travel.name,
      };
    });
    return await ctx.reply('Choose a travel to delete', {
      reply_markup: {
        keyboard: [
          travelNames?.slice(0, 2),
          travelNames?.slice(2, 4),
          travelNames?.slice(4, 6),
          travelNames?.slice(6, 8),
          travelNames?.slice(8, 10),
          travelNames?.slice(10, 12),
          travelNames?.slice(12, 14),
          travelNames?.slice(14, 16),
          travelNames?.slice(16, 18),
          travelNames?.slice(18, 20),
          travelNames?.slice(20, 22),
          travelNames?.slice(22, 24),
          travelNames?.slice(24, 26),
          travelNames?.slice(26, 28),
          travelNames?.splice(28),
          [{ text: commands.cancelButton }],
        ],
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
        keyboard: [carNames, [{ text: commands.cancelButton }]],
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
        keyboard: [transferNames, [{ text: commands.cancelButton }]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  }
});

bot.hears(commands.deleteButton, async (ctx: TypeBot) => {
  if (ctx.session.step === keyboards.gallery) {
    const gallery = await prisma.gallery.findMany();
    const names = gallery.map((item) => ({ text: `${item.fileName}` }));
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
          names.slice(0, 2),
          names.slice(2, 4),
          names.slice(4, 6),
          names.slice(6, 8),
          names.slice(8, 10),
          names.slice(10, 12),
          names.slice(12, 14),
          names.slice(14, 16),
          names.slice(16, 18),
          names.slice(18, 20),
          names.slice(20, 22),
          names.slice(22, 24),
          names.slice(24, 26),
          names.slice(26, 28),
          names.splice(28),
          [{ text: commands.cancelButton }],
        ],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
    return gallery.map(async (image) => {
      return await ctx.replyWithPhoto(image.fileId, {
        caption: `${image.fileName}`,
      });
    });
  }
});
