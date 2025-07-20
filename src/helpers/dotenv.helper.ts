import { config } from "dotenv";

const env = config().parsed || {};

export const BOT_TOKEN = env["BOT_TOKEN"] ?? "";
export const DATABASE_URL = env["DATABASE_URL"] ?? "127.0.0.1";
export const DATABASE_PORT = parseInt(env["DATABASE_PORT"] ?? "3306");
export const DATABASE_USER = env["DATABASE_USER"] ?? "";
export const DATABASE_PASSWORD = env["DATABASE_PASSWORD"] ?? "";
export const DATABASE_NAME = env["DATABASE_NAME"] ?? "gdp";
