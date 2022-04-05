/*
  Warnings:

  - You are about to drop the column `classLevel` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `classTitle` on the `classes` table. All the data in the column will be lost.
  - Added the required column `link` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "classes" DROP COLUMN "classLevel",
DROP COLUMN "classTitle",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
