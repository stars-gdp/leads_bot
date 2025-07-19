import { Markup } from "telegraf";
import { TelegramActions } from "../configs/actions.config";

export const twoWaysAction = async (ctx: any) => {
  ctx.answerCbQuery();

  ctx.editMessageText(
    ctx.i18n.t("two_ways"),
    Markup.inlineKeyboard([
      [Markup.button.callback(ctx.i18n.t("buttons.pro_program"), TelegramActions.pro_program)],
      [
        Markup.button.callback(
          ctx.i18n.t("buttons.small_business"),
          TelegramActions.small_business,
        ),
      ],
    ]),
  );
};
