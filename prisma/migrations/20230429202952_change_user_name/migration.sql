/*
  Warnings:

  - A unique constraint covering the columns `[user_email]` on the table `plain_selected_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "plain_selected_user_user_email_idx";

-- CreateIndex
CREATE UNIQUE INDEX "plain_selected_user_user_email_key" ON "plain_selected_user"("user_email");
