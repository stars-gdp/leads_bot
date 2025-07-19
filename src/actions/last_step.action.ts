import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const lastStepAction = async (ctx: any) => {
  ctx.answerCbQuery();

  return ctx.editMessageText(
    ctx.i18n.t("last_step"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.back"), TelegramActions.about_project)],
    ]),
  );
};
