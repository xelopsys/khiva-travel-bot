import prisma from '../lib/prisma';

async function main() {
  // return await Promise.all([
  //   await prisma.banner.create({
  //     data: {
  //       fileId: 'fileId',
  //       fileBase64: 'fileBase64',
  //     },
  //   }),
  // ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
