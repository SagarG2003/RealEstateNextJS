-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubscriptionPlan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "propertyLimit" INTEGER NOT NULL,
    "imagePerPropertyLimit" INTEGER NOT NULL,
    "features" TEXT NOT NULL
);
INSERT INTO "new_SubscriptionPlan" ("features", "id", "imagePerPropertyLimit", "name", "price", "propertyLimit") SELECT "features", "id", "imagePerPropertyLimit", "name", "price", "propertyLimit" FROM "SubscriptionPlan";
DROP TABLE "SubscriptionPlan";
ALTER TABLE "new_SubscriptionPlan" RENAME TO "SubscriptionPlan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
