import { Context, SessionFlavor } from 'grammy';
import { I18nFlavor } from '@grammyjs/i18n';
import { keyboards } from '../constants/constants';

export type SessionData = {
  __language_code?: string;
  step?: (typeof keyboards)[keyof typeof keyboards];
};
export type TypeBot = Context & I18nFlavor & SessionFlavor<SessionData>;
