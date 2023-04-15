-- CreateTable
CREATE TABLE "requests_copys" (
    "id" TEXT NOT NULL,
    "copy_title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "requests_copys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responses_copys" (
    "id" TEXT NOT NULL,
    "copy_title" TEXT NOT NULL,
    "generated_copy" TEXT NOT NULL,
    "requestedCopyId" TEXT NOT NULL,

    CONSTRAINT "responses_copys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "responses_copys_requestedCopyId_idx" ON "responses_copys"("requestedCopyId");

-- AddForeignKey
ALTER TABLE "responses_copys" ADD CONSTRAINT "responses_copys_requestedCopyId_fkey" FOREIGN KEY ("requestedCopyId") REFERENCES "requests_copys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
