import { Telegraf, session } from "telegraf";
import { BOT_TOKEN } from "./helpers/dotenv.helper";
import { startCommand } from "./commands/start.command";
import { TelegramActionsRecord, TelegramRegexActions } from "./configs/actions.config";
import TelegrafI18n from "telegraf-i18n";
import { resolve } from "path";
import { setLanguageAction } from "./actions/set_lang.action";

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

// Команды
bot.start(startCommand);

// Actions
Object.entries(TelegramActionsRecord).forEach(([key, handler]) => {
  bot.action(key, handler);
});

bot.action(TelegramRegexActions.setLang, setLanguageAction);

bot.launch();
console.log("🤖 Бот запущен");
