-- CreateTable
CREATE TABLE "banner" (
    "id" SERIAL NOT NULL,
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "sightseeingTime" INTEGER NOT NULL,
    "drivingTime" INTEGER NOT NULL,
    "drivingDistance" DOUBLE PRECISION NOT NULL,
    "included" TEXT DEFAULT '',
    "notIncluded" TEXT DEFAULT '',
    "pricePerCar" DOUBLE PRECISION NOT NULL,
    "reservation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "travelImageId" INTEGER NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "included" TEXT DEFAULT '',
    "notIncluded" TEXT DEFAULT '',

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itinerary" (
    "id" SERIAL NOT NULL,
    "route" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "Itinerary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelImage" (
    "id" SERIAL NOT NULL,
    "fileId" TEXT NOT NULL,
    "fileBase64" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TravelImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CarPicture" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TravelCar" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ItineraryToTravel" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarPicture_AB_unique" ON "_CarPicture"("A", "B");

-- CreateIndex
CREATE INDEX "_CarPicture_B_index" ON "_CarPicture"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TravelCar_AB_unique" ON "_TravelCar"("A", "B");

-- CreateIndex
CREATE INDEX "_TravelCar_B_index" ON "_TravelCar"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItineraryToTravel_AB_unique" ON "_ItineraryToTravel"("A", "B");

-- CreateIndex
CREATE INDEX "_ItineraryToTravel_B_index" ON "_ItineraryToTravel"("B");

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_travelImageId_fkey" FOREIGN KEY ("travelImageId") REFERENCES "TravelImage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarPicture" ADD CONSTRAINT "_CarPicture_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarPicture" ADD CONSTRAINT "_CarPicture_B_fkey" FOREIGN KEY ("B") REFERENCES "Picture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelCar" ADD CONSTRAINT "_TravelCar_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TravelCar" ADD CONSTRAINT "_TravelCar_B_fkey" FOREIGN KEY ("B") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItineraryToTravel" ADD CONSTRAINT "_ItineraryToTravel_A_fkey" FOREIGN KEY ("A") REFERENCES "Itinerary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItineraryToTravel" ADD CONSTRAINT "_ItineraryToTravel_B_fkey" FOREIGN KEY ("B") REFERENCES "Travel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
