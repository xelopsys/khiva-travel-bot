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
exports.handleBannerInsertImage = exports.getFileUrlFromTelegram = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const axios_1 = __importDefault(require("axios"));
const bot_1 = __importDefault(require("../bot/bot"));
const constants_1 = require("../constants/constants");
const token = process.env.BOT_TOKEN;
function getFileUrlFromTelegram(fileId) {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield bot_1.default.api.getFile(fileId);
        const filePath = file.file_path;
        const fileUrl = `https://api.telegram.org/file/bot${token}/${filePath}`;
        return fileUrl;
    });
}
exports.getFileUrlFromTelegram = getFileUrlFromTelegram;
function downloadFileAsBase64(fileUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios_1.default.get(fileUrl, { responseType: 'arraybuffer' });
        const base64String = Buffer.from(response.data, 'binary').toString('base64');
        const dataUri = `data:image/jpeg;base64,${base64String}`;
        return dataUri;
    });
}
const handleBannerInsertImage = ({ fileId, banner, }) => __awaiter(void 0, void 0, void 0, function* () {
    const fileUrl = yield getFileUrlFromTelegram(fileId);
    const base64String = yield downloadFileAsBase64(fileUrl);
    console.log('banner', banner, fileId);
    if (banner === constants_1.keyboards.banner) {
        return yield prisma_1.default.banner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.default.banner.create({
                data: {
                    fileId,
                    fileBase64: base64String,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.travelBanner) {
        return yield prisma_1.default.travelBanner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield prisma_1.default.travelBanner.create({
                data: {
                    fileId,
                    fileBase64: base64String,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.gallery) {
        return yield prisma_1.default.gallery.create({
            data: {
                fileId,
                fileBase64: base64String,
            },
        });
    }
});
exports.handleBannerInsertImage = handleBannerInsertImage;
