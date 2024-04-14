import { Bot, session, webhookCallback } from 'grammy';
import { freeStorage } from '@grammyjs/storage-free';
import { TypeBot, SessionData } from '../types';
import i18n from '../i18n/i18n';
import { keyboards } from '../constants/constants';
import express from 'express';

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

if (process.env.NODE_ENV === 'production') {
  // Use Webhooks for the production server
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, 'express'));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  // Use Long Polling for development
  (async () => {
    await bot.catch((error) => {
      console.log(error.message);
    });
    await bot.start();
  })();
}
export default bot;
