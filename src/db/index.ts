import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import * as dotenv from "dotenv"

dotenv.config()

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.warn(
    "⚠️  DATABASE_URL is not set. Database features are disabled.\n" +
      "   Copy .env.example to .env and set your PostgreSQL connection string."
  )
}

// Only create the connection if DATABASE_URL is available.
// In mock mode, these exports will be undefined — services should handle this gracefully.
export const client = connectionString
  ? postgres(connectionString, { prepare: false })
  : undefined

export const db = client ? drizzle(client, { schema }) : undefined
