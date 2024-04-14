import bot from '../bot/bot';
import { TypeBot } from '../types';
import { keyboards, commands } from '../constants/constants';
import prisma from '../lib/prisma';
import { InlineKeyboardButton } from 'grammy/types';

bot.hears(commands.travel, async (ctx: TypeBot) => {
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
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
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
          [
            createTravel,
            { text: commands.deleteButton, callback_data: commands.deleteCall },
          ],
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
        ],
      },
    }
  );
});
