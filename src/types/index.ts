import { pgEnum } from "drizzle-orm/pg-core";

export const transactionTypes = pgEnum("transaction_types", [
  "IN", "OUT", "ADJUSTMENT"
]);