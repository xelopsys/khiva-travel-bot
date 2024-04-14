import bot from '../../bot/bot';
import { TypeBot } from '../../types';
import { keyboards, commands } from '../../constants/constants';
import { handleBannerInsertImage } from '../../helpers/functions';

bot.on('message:photo', async (ctx: TypeBot) => {
  const fileId = ctx.message?.photo?.[ctx.message?.photo?.length - 1]
    .file_id as string;
  if (
    ctx.session.step === keyboards.banner ||
    ctx.session.step === keyboards.travelBanner ||
    ctx.session.step === keyboards.gallery
  ) {
    await ctx.reply('Image is being saved...', {
      reply_markup: {
        keyboard: [[{ text: commands.cancelButton }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    return await handleBannerInsertImage({
      fileId,
      banner: ctx.session.step,
    }).then(async () => {
      await ctx.reply('Image has been saved');
      if (ctx.session.step === keyboards.gallery) {
        await ctx.replyWithPhoto(fileId);
        return await ctx.reply('send another one', {
          reply_markup: {
            keyboard: [[{ text: commands.cancelButton }]],
            resize_keyboard: true,
            one_time_keyboard: true,
          },
        });
      }
      return await ctx.replyWithPhoto(fileId);
    });
  }
});
