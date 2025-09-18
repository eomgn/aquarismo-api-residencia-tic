-- CreateTable
CREATE TABLE "public"."Accessories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "mark" TEXT NOT NULL,

    CONSTRAINT "Accessories_pkey" PRIMARY KEY ("id")
);
