import bot from '../bot/bot';
import { TypeBot } from '../types';
import { keyboards, commands } from '../constants/constants';
import prisma from '../lib/prisma';
import { InlineKeyboardButton } from 'grammy/types';

bot.hears(commands.car, async (ctx: TypeBot) => {
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
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
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
          carNames.slice(0, 2),
          carNames.slice(2, 4),
          carNames.slice(4, 6),
          carNames.slice(6, 8),
          carNames.slice(8, 10),
          carNames.slice(10, 12),
          carNames.slice(12, 14),
          carNames.splice(14),
          [
            createCar,
            { text: commands.deleteButton, callback_data: commands.deleteCall },
          ],
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
        ],
      },
    }
  );
});
