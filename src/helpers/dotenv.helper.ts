import { config } from "dotenv";

export const BOT_TOKEN = config().parsed?.["BOT_TOKEN"] ?? "";
