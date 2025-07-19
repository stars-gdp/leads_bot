import { Context, Markup } from "telegraf";
import { dropshippingAction } from "../actions/dropshipping.action";
import { aboutProjectAction } from "../actions/about_project.action";
import { twoWaysAction } from "../actions/two_ways.action";
import { proProgramAction } from "../actions/pro_program.action";
import { lastStepAction } from "../actions/last_step.action";
import { directSalesAction } from "../actions/direct_sales.action";
import { smallBusinessAction } from "../actions/small_business.action";
import { marketingCourseAction } from "../actions/marketing_course.action";

const testReply = (ctx: Context) => {
  ctx.reply(
    "Testing Reply",
    Markup.inlineKeyboard([Markup.button.callback("Return to the beginning", "")]),
  );
};

export enum TelegramActions {
  about_project = "about_project",
  dropshipping = "dropshipping",
  two_ways = "two_ways",
  pro_program = "pro_program",
  small_business = "small_business",
  last_step = "last_step",
  direct_sales = "direct_sales",
  marketing_course = "marketing_course",
}

export const TelegramRegexActions = {
  setLang: /set_lang:(.+)/,
} as const;

export const TelegramActionsRecord: Record<TelegramActions, (ctx: Context) => void> = {
  [TelegramActions.dropshipping]: dropshippingAction,
  [TelegramActions.about_project]: aboutProjectAction,
  [TelegramActions.two_ways]: twoWaysAction,
  [TelegramActions.pro_program]: proProgramAction,
  [TelegramActions.small_business]: smallBusinessAction,
  [TelegramActions.last_step]: lastStepAction,
  [TelegramActions.direct_sales]: directSalesAction,
  [TelegramActions.marketing_course]: marketingCourseAction,
};
