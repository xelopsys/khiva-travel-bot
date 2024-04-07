import prisma from '../lib/prisma';
import axios from 'axios';
import bot from '../bot/bot';
import { keyboards } from '../constants/constants';
import { KeyboardValue } from '../types/keyboards';

const token = process.env.BOT_TOKEN;

export async function getFileUrlFromTelegram(fileId: string) {
  const file = await bot.api.getFile(fileId);
  const filePath = file.file_path;
  const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
  return fileUrl;
}

async function downloadFileAsBase64(fileUrl: string) {
  const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
  const base64String = Buffer.from(response.data, 'binary').toString('base64');
  const dataUri = `data:image/jpeg;base64,${base64String}`;
  return dataUri;
}

export const handleBannerInsertImage = async ({
  fileId,
  banner,
}: {
  fileId: string;
  banner: KeyboardValue;
}) => {
  const fileUrl = await getFileUrlFromTelegram(fileId);
  const base64String = await downloadFileAsBase64(fileUrl);
  console.log('banner', banner, fileId);
  if (banner === keyboards.banner) {
    return await prisma.banner.deleteMany().then(async () => {
      await prisma.banner.create({
        data: {
          fileId,
          fileBase64: base64String,
        },
      });
    });
  }
  if (banner === keyboards.travelBanner) {
    return await prisma.travelBanner.deleteMany().then(async () => {
      await prisma.travelBanner.create({
        data: {
          fileId,
          fileBase64: base64String,
        },
      });
    });
  }
  if (banner === keyboards.gallery) {
    return await prisma.gallery.create({
      data: {
        fileId,
        fileBase64: base64String,
      },
    });
  }
};
