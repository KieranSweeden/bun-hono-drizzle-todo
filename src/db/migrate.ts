import { migrate } from "drizzle-orm/postgres-js/migrator";
import { database } from "./index";

async function runMigrations() {
  await migrate(database, { migrationsFolder: "drizzle" });
}

runMigrations();
