import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const marketingCourseAction = async (ctx: any) => {
  ctx.answerCbQuery();

  ctx.editMessageText(
    ctx.i18n.t("marketing_course"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.back"), TelegramActions.about_project)],
      [Markup.button.callback(ctx.i18n.t("buttons.next"), TelegramActions.last_step)],
    ]),
  );
};
