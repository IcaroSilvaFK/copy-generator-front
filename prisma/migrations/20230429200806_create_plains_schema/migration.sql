-- CreateTable
CREATE TABLE "plain_selected_user" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "plain" TEXT NOT NULL,
    "rate_limit" INTEGER NOT NULL,

    CONSTRAINT "plain_selected_user_pkey" PRIMARY KEY ("id")
);
