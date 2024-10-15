/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `resetToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'SUPER_ADMIN');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE UNIQUE INDEX "resetToken_token_key" ON "resetToken"("token");

-- AddForeignKey
ALTER TABLE "resetToken" ADD CONSTRAINT "resetToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
