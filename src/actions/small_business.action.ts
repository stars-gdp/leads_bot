import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const smallBusinessAction = async (ctx: any) => {
  ctx.answerCbQuery();

  return ctx.editMessageText(
    ctx.i18n.t("small_business"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.next"), TelegramActions.last_step)],
    ]),
  );
};
