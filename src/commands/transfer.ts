import bot from '../bot/bot';
import { TypeBot } from '../types';
import { keyboards, commands } from '../constants/constants';
import prisma from '../lib/prisma';
import { InlineKeyboardButton } from 'grammy/types';

bot.hears(commands.transfer, async (ctx: TypeBot) => {
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
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
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
          transferNames.slice(0, 2),
          transferNames.slice(2, 4),
          transferNames.slice(4, 6),
          transferNames.slice(6, 8),
          transferNames.slice(8, 10),
          transferNames.slice(10, 12),
          transferNames.slice(12, 14),
          transferNames.slice(14, 16),
          transferNames.slice(16, 18),
          transferNames.slice(18, 20),
          transferNames.splice(20),
          [
            createTransfer,
            { text: commands.deleteButton, callback_data: commands.deleteCall },
          ],
          [{ text: commands.cancelButton, callback_data: commands.cancelCall }],
        ],
      },
    }
  );
});
