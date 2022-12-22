-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "name" TEXT NOT NULL,
    "password" TEXT,
    "salt" TEXT,
    "photoURL" TEXT NOT NULL
);
INSERT INTO "new_User" ("name", "password", "photoURL", "salt") SELECT "name", "password", "photoURL", "salt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
