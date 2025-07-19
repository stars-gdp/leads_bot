import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const directSalesAction = async (ctx: any) => {
  ctx.answerCbQuery();

  return ctx.editMessageText(
    ctx.i18n.t("direct_sales"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.back"), TelegramActions.about_project)],
      [Markup.button.callback(ctx.i18n.t("buttons.next"), TelegramActions.two_ways)],
    ]),
  );
};
