/*
  Warnings:

  - You are about to drop the column `studentId` on the `classes` table. All the data in the column will be lost.
  - Added the required column `classId` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_studentId_fkey";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "classId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_classId_fkey" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
