import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const startCommand = (ctx: any) => {
  return ctx.reply(
    "Hello! 👋 Please choose your language below.\n" +
      "You can change it anytime by typing /start.\n" +
      "\nПривет! 👋 Пожалуйста, выберите язык ниже.\n" +
      "Вы всегда можете изменить его, набрав команду /start.\n",
    Markup.inlineKeyboard([
      [Markup.button.callback("English 🇬🇧", "set_lang:en")],
      [Markup.button.callback("Русский 🇷🇺", "set_lang:ru")],
    ]),
  );
};
