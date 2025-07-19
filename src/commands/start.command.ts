import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const startCommand = (ctx: any) => {
  return ctx.reply(
    "Hello! 👋 Please choose your language below.\n" +
      "You can change it anytime by typing /start.\n" +
      "\nПривет! 👋 Пожалуйста, выберите язык ниже.\n" +
      "Вы всегда можете изменить его, набрав команду /start.\n" +
      "\nCześć! 👋 Wybierz swój język poniżej.\n" +
      "Możesz go zmienić w każdej chwili wpisując /start.\n" +
      "\nСәлем! 👋 Тілді төменнен таңдаңыз.\n" +
      "Қалаған кезде /start теріп өзгерте аласыз.\n" +
      "\nनमस्ते! 👋 कृपया नीचे अपनी भाषा चुनें।\n" +
      "आप कभी भी /start टाइप करके इसे बदल सकते हैं।\n" +
      "\nহ্যালো! 👋 নিচে আপনার ভাষা নির্বাচন করুন।\n" +
      "আপনি /start লিখে যে কোনো সময় ভাষা পরিবর্তন করতে পারেন।\n" +
      "\n",
    Markup.inlineKeyboard([
      [Markup.button.callback("English 🇬🇧", "set_lang:en")],
      [Markup.button.callback("Русский 🇷🇺", "set_lang:ru")],
      [Markup.button.callback("Polski 🇵🇱", "set_lang:pl")],
      [Markup.button.callback("Қазақша 🇰🇿", "set_lang:kz")],
      [Markup.button.callback("हिन्दी 🇮🇳", "set_lang:hi")],
      [Markup.button.callback("বাংলা 🇧🇩", "set_lang:bn")],
    ]),
  );
};
