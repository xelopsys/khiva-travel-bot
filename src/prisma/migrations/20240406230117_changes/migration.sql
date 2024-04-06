/*
  Warnings:

  - You are about to drop the column `model` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `notIncluded` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `pictureUuid` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerCar` on the `Travel` table. All the data in the column will be lost.
  - You are about to drop the `_TravelCar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `banner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `carType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carId` to the `Picture` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travelType` to the `Travel` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "travelType" AS ENUM ('SHARED', 'PRIVATE');

-- CreateEnum
CREATE TYPE "Time" AS ENUM ('min', 'hour', 'day');

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_pictureUuid_fkey";

-- DropForeignKey
ALTER TABLE "_TravelCar" DROP CONSTRAINT "_TravelCar_A_fkey";

-- DropForeignKey
ALTER TABLE "_TravelCar" DROP CONSTRAINT "_TravelCar_B_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "model",
DROP COLUMN "notIncluded",
DROP COLUMN "pictureUuid",
DROP COLUMN "price",
ADD COLUMN     "carType" TEXT NOT NULL,
ADD COLUMN     "models" TEXT[],
ALTER COLUMN "included" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Itinerary" ADD COLUMN     "time" "Time" NOT NULL DEFAULT 'hour',
ALTER COLUMN "duration" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Picture" ADD COLUMN     "carId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Travel" DROP COLUMN "pricePerCar",
ADD COLUMN     "time" "Time" NOT NULL DEFAULT 'hour',
ADD COLUMN     "travelType" "travelType" NOT NULL,
ALTER COLUMN "duration" SET DATA TYPE TEXT,
ALTER COLUMN "sightseeingTime" SET DATA TYPE TEXT,
ALTER COLUMN "drivingTime" SET DATA TYPE TEXT,
ALTER COLUMN "drivingDistance" SET DATA TYPE TEXT,
ALTER COLUMN "reservation" DROP NOT NULL,
ALTER COLUMN "reservation" SET DEFAULT '';

-- DropTable
DROP TABLE "_TravelCar";

-- DropTable
DROP TABLE "banner";

-- CreateTable
CREATE TABLE "Banner" (
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "PricingTier" (
    "id" SERIAL NOT NULL,
    "carId" TEXT,
    "travelId" TEXT,
    "distance" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "PricingTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "map" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Gallery" (
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "TravelBanner" (
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uuid" TEXT NOT NULL,

    CONSTRAINT "TravelBanner_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "TransferOption" (
    "uuid" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "carId" TEXT,
    "transferInfoId" TEXT,

    CONSTRAINT "TransferOption_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "TransferInfo" (
    "uuid" TEXT NOT NULL,
    "transfer" TEXT NOT NULL,
    "time" "Time" NOT NULL,
    "drivingTime" TEXT NOT NULL,
    "drivingDistance" TEXT NOT NULL,

    CONSTRAINT "TransferInfo_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingTier" ADD CONSTRAINT "PricingTier_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PricingTier" ADD CONSTRAINT "PricingTier_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferOption" ADD CONSTRAINT "TransferOption_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferOption" ADD CONSTRAINT "TransferOption_transferInfoId_fkey" FOREIGN KEY ("transferInfoId") REFERENCES "TransferInfo"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
