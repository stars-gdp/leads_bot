import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const aboutProjectAction = async (ctx: any) => {
  ctx.answerCbQuery();

  return ctx.editMessageText(
    ctx.i18n.t("about_project"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.dropshipping"), TelegramActions.dropshipping)],
      [Markup.button.callback(ctx.i18n.t("buttons.direct_sales"), TelegramActions.direct_sales)],
      [
        Markup.button.callback(
          ctx.i18n.t("buttons.marketing_course"),
          TelegramActions.marketing_course,
        ),
      ],
    ]),
  );
};
