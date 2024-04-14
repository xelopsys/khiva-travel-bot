import bot from '../../bot/bot';
import { TypeBot } from '../../types';
import { menu } from '../../utils/menu';
import { keyboards, commands } from '../../constants/constants';

bot.hears(commands.cancelButton, async (ctx: TypeBot) => {
  ctx.session.step = keyboards.cancel;
  return await ctx.reply('Canceled', {
    reply_markup: {
      ...menu,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.callbackQuery(commands.cancelCall, async (ctx: TypeBot) => {
  ctx.session.step = keyboards.cancel;
  return await ctx.reply('Canceled', {
    reply_markup: {
      ...menu,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});
