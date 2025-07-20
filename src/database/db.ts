import mysql from "mysql2/promise";
import {
  DATABASE_URL,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} from "../helpers/dotenv.helper";

let pool: mysql.Pool;

export const initializeDatabase = async () => {
  try {
    pool = mysql.createPool({
      host: DATABASE_URL,
      port: DATABASE_PORT,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Test connection
    const connection = await pool.getConnection();
    console.log("Database connected successfully");
    connection.release();
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

export const getPool = () => {
  if (!pool) {
    throw new Error("Database pool not initialized. Call initializeDatabase() first.");
  }
  return pool;
};
