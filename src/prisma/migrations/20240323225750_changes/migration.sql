/*
  Warnings:

  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Car` table. All the data in the column will be lost.
  - The primary key for the `Itinerary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Itinerary` table. All the data in the column will be lost.
  - The primary key for the `Picture` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Picture` table. All the data in the column will be lost.
  - The primary key for the `Travel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Travel` table. All the data in the column will be lost.
  - The primary key for the `TravelImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TravelImage` table. All the data in the column will be lost.
  - The primary key for the `banner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `banner` table. All the data in the column will be lost.
  - You are about to drop the `_CarPicture` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `pictureUuid` to the `Car` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Car` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `Itinerary` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `Picture` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `Travel` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `TravelImage` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `banner` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_travelImageId_fkey";

-- DropForeignKey
ALTER TABLE "_CarPicture" DROP CONSTRAINT "_CarPicture_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarPicture" DROP CONSTRAINT "_CarPicture_B_fkey";

-- DropForeignKey
ALTER TABLE "_ItineraryToTravel" DROP CONSTRAINT "_ItineraryToTravel_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItineraryToTravel" DROP CONSTRAINT "_ItineraryToTravel_B_fkey";

-- DropForeignKey
ALTER TABLE "_TravelCar" DROP CONSTRAINT "_TravelCar_A_fkey";

-- DropForeignKey
ALTER TABLE "_TravelCar" DROP CONSTRAINT "_TravelCar_B_fkey";

-- AlterTable
ALTER TABLE "Car" DROP CONSTRAINT "Car_pkey",
DROP COLUMN "id",
ADD COLUMN     "pictureUuid" TEXT NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Car_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Itinerary" DROP CONSTRAINT "Itinerary_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "Picture_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ALTER COLUMN "travelImageId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Travel_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "TravelImage" DROP CONSTRAINT "TravelImage_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "TravelImage_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "_ItineraryToTravel" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_TravelCar" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "banner" DROP CONSTRAINT "banner_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "banner_pkey" PRIMARY KEY ("uuid");

-- DropTable
DROP TABLE "_CarPicture";

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_travelImageId_fkey" FOREIGN KEY ("travelImageId") REFERENCES "TravelImage"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_pictureUuid_fkey" FOREIGN KEY ("pictureUuid") REFERENCES "Picture"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelCar" ADD CONSTRAINT "_TravelCar_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelCar" ADD CONSTRAINT "_TravelCar_B_fkey" FOREIGN KEY ("B") REFERENCES "Travel"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItineraryToTravel" ADD CONSTRAINT "_ItineraryToTravel_A_fkey" FOREIGN KEY ("A") REFERENCES "Itinerary"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItineraryToTravel" ADD CONSTRAINT "_ItineraryToTravel_B_fkey" FOREIGN KEY ("B") REFERENCES "Travel"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
