import { transactionTypes } from "@/types";
import {
  pgTable,
  serial,
  varchar,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  sku: varchar("sku", { length: 100 }).unique(),
  name: varchar("name", { length: 255 }),
  category: varchar("category", { length: 100 }),
  description: varchar("description", { length: 500 }),
  price: integer("price").notNull(),
});

export const warehouses = pgTable("warehouses", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }),
})

export const stocks = pgTable("stocks", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").notNull().references(() => products.id),
  quantity: integer("quantity").notNull(),
  warehouseId: integer("warehouse_id").notNull().references(() => warehouses.id),
})

export const transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  type: transactionTypes("type").notNull(),
  transactionDate: timestamp("transaction_date").notNull().defaultNow(),
  customerName: varchar("customer_name", { length: 255 }),
  stocks: integer("stock_id")    .notNull()
    .references(() => stocks.id).array (),
  quantity: integer("quantity").notNull(),
});
 
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 100 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  role: varchar("role", { length: 50 }).notNull().default("user"),
});

export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  token: varchar("token", { length: 255 }).unique().notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});