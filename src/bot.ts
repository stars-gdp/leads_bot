import { Telegraf, session, Context } from "telegraf";
import { BOT_TOKEN } from "./helpers/dotenv.helper";
import { startCommand } from "./commands/start.command";
import { TelegramActionsRecord, TelegramRegexActions } from "./configs/actions.config";
import TelegrafI18n from "telegraf-i18n";
import { resolve } from "path";
import { setLanguageAction } from "./actions/set_lang.action";
import { checkIfLeadExists, insertLead, insertMessage } from "./services/leads.service";
import { initializeDatabase } from "./database/db";

const i18n = new TelegrafI18n({
  defaultLanguage: "en",
  useSession: true,
  directory: resolve(__dirname, "locales"),
});

const bot = new Telegraf(BOT_TOKEN);

bot.use(
  session({
    defaultSession: () => ({ language: "en" }),
  }),
);

bot.use(i18n.middleware());

// Middleware to handle new users
bot.use(async (ctx: Context, next) => {
  if (ctx.from) {
    const tgId = ctx.from.id;

    try {
      const leadExists = await checkIfLeadExists(tgId);

      if (!leadExists) {
        await insertLead(tgId);
        console.log(`New lead added: ${tgId}`);
      }
    } catch (error) {
      console.error("Error checking/inserting lead:", error);
    }
  }

  return next();
});

// Handle all text messages
bot.on("text", async (ctx, next) => {
  if (ctx.from && ctx.message && "text" in ctx.message) {
    const tgId = ctx.from.id;
    const msgText = ctx.message.text;

    try {
      await insertMessage(tgId, msgText);
      console.log(`Message saved from ${tgId}: ${msgText}`);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  }
  return next();
});

// Команды
bot.start(startCommand);

// Actions
Object.entries(TelegramActionsRecord).forEach(([key, handler]) => {
  bot.action(key, handler);
});

bot.action(TelegramRegexActions.setLang, setLanguageAction);

// Start the bot
const startBot = async () => {
  try {
    // Initialize database connection
    await initializeDatabase();

    // Launch bot
    await bot.launch();
    console.log("Bot started successfully");

    // Enable graceful stop
    process.once("SIGINT", () => bot.stop("SIGINT"));
    process.once("SIGTERM", () => bot.stop("SIGTERM"));
  } catch (error) {
    console.error("Failed to start bot:", error);
    process.exit(1);
  }
};

startBot();
