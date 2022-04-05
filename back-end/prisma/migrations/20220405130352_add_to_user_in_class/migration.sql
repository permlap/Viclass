/*
  Warnings:

  - You are about to drop the column `description` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `classes` table. All the data in the column will be lost.
  - Added the required column `classLevel` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classTitle` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "description",
DROP COLUMN "link",
DROP COLUMN "title",
ADD COLUMN     "classLevel" TEXT NOT NULL,
ADD COLUMN     "classTitle" TEXT NOT NULL;
