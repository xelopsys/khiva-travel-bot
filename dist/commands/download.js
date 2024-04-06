"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_1 = __importDefault(require("../bot/bot"));
const grammy_1 = require("grammy");
const constants_1 = require("../constants/constants");
bot_1.default.command("download", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    if (constants_1.admins.includes((_b = (_a = ctx.update.message) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.id)) {
        yield ctx.reply("Download");
        yield ctx.api.sendDocument((_c = ctx.update.message) === null || _c === void 0 ? void 0 : _c.chat.id, new grammy_1.InputFile("dist/sheet.xlsx"));
    }
    else {
        yield ctx.reply("You are not admin as I see");
    }
}));
bot_1.default.hears(["Download"], (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e, _f;
    if (constants_1.admins.includes((_e = (_d = ctx.update.message) === null || _d === void 0 ? void 0 : _d.from) === null || _e === void 0 ? void 0 : _e.id)) {
        yield ctx.reply("Download");
        yield ctx.api.sendDocument((_f = ctx.update.message) === null || _f === void 0 ? void 0 : _f.chat.id, new grammy_1.InputFile("dist/sheet.xlsx"));
    }
    else {
        yield ctx.reply("You are not admin as I see");
    }
}));
