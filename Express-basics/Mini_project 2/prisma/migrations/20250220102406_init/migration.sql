-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "timing" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
