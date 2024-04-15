/*
  Warnings:

  - A unique constraint covering the columns `[best_answer_id]` on the table `questions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "best_answer_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "questions_best_answer_id_key" ON "questions"("best_answer_id");
