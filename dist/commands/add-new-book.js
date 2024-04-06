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
const constants_1 = require("../constants/constants");
bot_1.default.command("addnewbook", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (((_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id) && constants_1.admins.includes((_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id)) {
        yield ctx.reply("Book name");
    }
    return ctx.reply("You are not admin");
}));
