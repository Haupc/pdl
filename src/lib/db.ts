import { Pool } from "pg";

const pool = new Pool({
  host: process.env.PG_HOST || "localhost", // your PostgreSQL host
  user: process.env.PG_USER || "postgres", // your PostgreSQL username
  password: process.env.PG_PASSWORD || "password", // your PostgreSQL password
  database: process.env.PG_DATABASE || "mydatabase", // your PostgreSQL database name
  port: process.env.PG_PORT ? Number(process.env.PG_PORT) : 5432, // your PostgreSQL port
});

export default pool;
