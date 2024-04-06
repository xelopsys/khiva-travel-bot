import { I18n } from "@grammyjs/i18n";
import { TypeBot } from "../types";

const i18n = new I18n<TypeBot>({
	defaultLocale: "uz",
	directory: "dist/locales",
	useSession: true,
});

export default i18n;
