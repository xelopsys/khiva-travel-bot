import prisma from '../lib/prisma';
import bot from '../bot/bot';
import { keyboards } from '../constants/constants';
import { KeyboardValue } from '../types/keyboards';
import axiosbase from 'axios';
import { v4 as uuidv4 } from 'uuid';
import axios from '../utils/axiosinstance';

const token = process.env.BOT_TOKEN;

export async function getFileUrlFromTelegram(fileId: string) {
  const file = await bot.api.getFile(fileId);
  const filePath = file.file_path;
  const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
  return fileUrl;
}

async function downloadFileAsUrl(fileUrl: string) {
  const uuid = uuidv4();
  const response = await axiosbase.get(fileUrl, {
    responseType: 'arraybuffer',
  });

  const base64String = Buffer.from(response.data, 'binary').toString('base64');
  const dataUri = `data:image/jpeg;base64,${base64String}`;
  const res = await uploadFile(dataUri, uuid);
  return res;
}

export const handleBannerInsertImage = async ({
  fileId,
  banner,
}: {
  fileId: string;
  banner: KeyboardValue;
}) => {
  const fileUrl = await getFileUrlFromTelegram(fileId);
  const data = await downloadFileAsUrl(fileUrl);
  if (!data?.file?.url) return console.log('Error: No file url');
  if (banner === keyboards.banner) {
    return await prisma.banner.deleteMany().then(async () => {
      await prisma.banner.create({
        data: {
          fileId,
          fileUrl: data?.file?.url,
          fileName: data?.file?.name,
        },
      });
    });
  }
  if (banner === keyboards.travelBanner) {
    return await prisma.travelBanner.deleteMany().then(async () => {
      await prisma.travelBanner.create({
        data: {
          fileId,
          fileUrl: data?.file?.url,
          fileName: data?.file?.name,
        },
      });
    });
  }
  if (banner === keyboards.gallery) {
    return await prisma.gallery.create({
      data: {
        fileId,
        fileUrl: data?.file?.url,
        fileName: data?.file?.name,
      },
    });
  }
};

const uploadFile = async (uri: string, uuid: string) => {
  const blob = await fetch(uri).then((res) => res.blob());
  const file = new File([blob], uuid + '.png', { type: 'image/png' });
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post('/file/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
};

// .then(async (blob) => {
//   const file = new File([blob], 'image.png', { type: 'image/png' });
//   const formData = new FormData();
//   formData.append('file', file);
//   const res = await axios.post('/file/upload', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   console.log('res', res.data);
// });
