"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("@grammyjs/i18n");
const i18n = new i18n_1.I18n({
    defaultLocale: "uz",
    directory: "dist/locales",
    useSession: true,
});
exports.default = i18n;
