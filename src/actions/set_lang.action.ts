import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const setLanguageAction = async (ctx: any) => {
  const lang = ctx.match[1];
  await ctx.i18n.locale(lang);
  await ctx.answerCbQuery();

  return ctx.editMessageText(
    ctx.i18n.t("greeting"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.about_project"), TelegramActions.about_project)],
    ]),
  );
};
