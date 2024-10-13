/*
  Warnings:

  - You are about to drop the `resetToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[firstName,lastName]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('pieces', 'kilograms', 'liters', 'boxes', 'meters');

-- CreateEnum
CREATE TYPE "Tax" AS ENUM ('taxable', 'nonTaxable');

-- CreateEnum
CREATE TYPE "Product" AS ENUM ('Sale', 'Use');

-- DropForeignKey
ALTER TABLE "resetToken" DROP CONSTRAINT "resetToken_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- DropTable
DROP TABLE "resetToken";

-- CreateTable
CREATE TABLE "Inventory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "brandId" INTEGER NOT NULL,
    "buyingPrice" MONEY NOT NULL,
    "sellingPrice" MONEY NOT NULL,
    "productUnit" "Unit" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "minStock" INTEGER NOT NULL DEFAULT 10,
    "taxType" "Tax" NOT NULL,
    "description" TEXT NOT NULL,
    "produtType" "Product" NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "imageId" INTEGER NOT NULL,
    "imageURL" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_firstName_lastName_key" ON "users"("firstName", "lastName");

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
