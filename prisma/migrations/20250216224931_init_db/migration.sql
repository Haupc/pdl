-- CreateTable
CREATE TABLE "CarouselItem" (
    "id" TEXT NOT NULL,
    "next" TEXT NOT NULL,
    "prev" TEXT NOT NULL,
    "bgUrl" TEXT NOT NULL,

    CONSTRAINT "CarouselItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
