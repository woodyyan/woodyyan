import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { DatabaseSync } from "node:sqlite";

declare global {
  var __woodyyanDb: DatabaseSync | undefined;
}

function createDatabase() {
  const databasePath = join(process.cwd(), "data", "site.db");

  mkdirSync(dirname(databasePath), { recursive: true });

  const db = new DatabaseSync(databasePath);

  db.exec(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS stats (
      key TEXT PRIMARY KEY,
      value INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  return db;
}

export function getDb() {
  if (!globalThis.__woodyyanDb) {
    globalThis.__woodyyanDb = createDatabase();
  }

  return globalThis.__woodyyanDb;
}
