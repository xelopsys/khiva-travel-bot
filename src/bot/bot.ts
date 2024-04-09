import { Bot, session } from 'grammy';
import { freeStorage } from '@grammyjs/storage-free';
import { TypeBot, SessionData } from '../types';
import i18n from '../i18n/i18n';
import { keyboards } from '../constants/constants';

const bot = new Bot<TypeBot>(process.env.BOT_TOKEN as string);

bot.use(i18n);
bot.use(
  session({
    initial: (): SessionData => {
      return {
        step: keyboards.start,
      };
    },
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
