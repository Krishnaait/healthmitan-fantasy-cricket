import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./server/db/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "mysql://root:BfcztiVOEVZvKMEOfsquDGEyzKTdSkXJ@trolley.proxy.rlwy.net:27212/railway",
  },
});
