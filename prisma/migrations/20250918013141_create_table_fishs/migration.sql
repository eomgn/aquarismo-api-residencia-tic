-- CreateTable
CREATE TABLE "public"."fishs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "scientificName" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "minTankSize" INTEGER NOT NULL,
    "temperament" TEXT NOT NULL,
    "diet" TEXT NOT NULL,
    "waterParameters" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "compatibleTankmates" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "fishs_pkey" PRIMARY KEY ("id")
);
