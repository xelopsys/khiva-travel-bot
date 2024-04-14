import bot from '../../bot/bot';
import { TypeBot } from '../../types';
import { keyboards, commands } from '../../constants/constants';
import { KeyboardButton } from 'grammy/types';

const actionKeyboards: KeyboardButton[] = [
  { text: commands.deleteButton },
  { text: commands.cancelButton },
];

bot.hears(commands.banner, async (ctx: TypeBot) => {
  return await ctx.reply('Choose a banner', {
    reply_markup: {
      keyboard: [
        [{ text: commands.homeBanner }, { text: commands.travelBanner }],
        [{ text: commands.cancelButton }],
      ],
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears(
  [commands.homeBanner, commands.travelBanner],
  async (ctx: TypeBot) => {
    if (ctx.update.message?.text === 'Travel Banner') {
      ctx.session.step = keyboards.travelBanner;
    } else {
      ctx.session.step = keyboards.banner;
    }
    return await ctx.reply('send me a banner', {
      reply_markup: {
        keyboard: [[{ text: commands.cancelButton }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
);

bot.hears(commands.gallery, async (ctx: TypeBot) => {
  ctx.session.step = keyboards.gallery;

  return await ctx.reply('send me a photo', {
    reply_markup: {
      keyboard: [actionKeyboards],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
