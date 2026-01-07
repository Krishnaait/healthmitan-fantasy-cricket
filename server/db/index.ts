import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.js";

const connectionString = process.env.DATABASE_URL || "mysql://root:BfcztiVOEVZvKMEOfsquDGEyzKTdSkXJ@trolley.proxy.rlwy.net:27212/railway";

const connection = await mysql.createConnection(connectionString);

export const db = drizzle(connection, { schema, mode: "default" });
