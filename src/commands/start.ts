import bot from '../bot/bot';
import { TypeBot } from '../types';
import { menu } from '../utils/menu';
import { keyboards, commands } from '../constants/constants';
import prisma from '../lib/prisma';

bot.command(commands.start, async (ctx: TypeBot) => {
  await ctx.reply('Здравствуйте! Я бот для вашего бизнеса. Чем могу помочь?', {
    reply_markup: {
      ...menu,
      one_time_keyboard: true,
      resize_keyboard: true,
    },
  });
});

bot.hears(commands.contact, async (ctx: TypeBot) => {
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
              text: commands.cancelButton,
              callback_data: commands.cancelCall,
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
