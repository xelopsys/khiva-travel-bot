import { Bot, session, InlineKeyboard, Context } from 'grammy';
import { freeStorage } from '@grammyjs/storage-free';
import { TypeBot, SessionData } from '../types';
import i18n from '../i18n/i18n';

const bot = new Bot<TypeBot>(process.env.BOT_TOKEN as string);

function getSessionKey(ctx: Context): string | undefined {
  if (ctx.update?.inline_query?.from) {
    return `${ctx.update.inline_query.from.id}`;
  }
  if (ctx.update?.chosen_inline_result?.from) {
    return `${ctx.update.chosen_inline_result.from.id}`;
  }
  if (ctx.callbackQuery?.from) {
    return `${ctx.callbackQuery.from.id}`;
  }
  if (ctx.chat) {
    return `${ctx.chat.id}`;
  }
  if (ctx.from) {
    return `${ctx.from.id}`;
  }
}

bot.use(i18n);
bot.use(
  session({
    // initial: () => {},
    getSessionKey,
    storage: freeStorage<SessionData>(bot.token),
  })
);

(async () => {
  await bot.catch((error) => {
    console.log(error.message);
  });
  await bot.start();
})();

export default bot;
