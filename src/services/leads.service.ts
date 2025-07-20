import { getPool } from "../database/db";

export const checkIfLeadExists = async (tgId: number) => {
  const pool = getPool();
  const [rows] = await pool.execute("SELECT id FROM bot_leads WHERE tg_id = ?", [tgId]);
  return (rows as any[]).length > 0;
};

export const insertLead = async (tgId: number) => {
  const pool = getPool();
  await pool.execute("INSERT INTO bot_leads (tg_id) VALUES (?)", [tgId]);
};

export const insertMessage = async (tgId: number, msgText: string) => {
  const pool = getPool();
  await pool.execute("INSERT INTO bot_messages (tg_id, msg_text) VALUES (?, ?)", [tgId, msgText]);
};
