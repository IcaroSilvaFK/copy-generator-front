/*
  Warnings:

  - You are about to drop the column `user_id` on the `plain_selected_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `quantity_generated_copys` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `plain_selected_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `quantity_generated_copys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plain_selected_user" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "quantity_generated_copys" DROP COLUMN "user_id",
ADD COLUMN     "user_email" TEXT NOT NULL;
