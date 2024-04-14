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
const bot_1 = __importDefault(require("../bot/bot"));
const constants_1 = require("../constants/constants");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const axiosinstance_1 = __importDefault(require("../utils/axiosinstance"));
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
function downloadFileAsUrl(fileUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const uuid = (0, uuid_1.v4)();
        const response = yield axios_1.default.get(fileUrl, {
            responseType: 'arraybuffer',
        });
        const base64String = Buffer.from(response.data, 'binary').toString('base64');
        const dataUri = `data:image/jpeg;base64,${base64String}`;
        const res = yield uploadFile(dataUri, uuid);
        return res;
    });
}
const handleBannerInsertImage = ({ fileId, banner, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const fileUrl = yield getFileUrlFromTelegram(fileId);
    const data = yield downloadFileAsUrl(fileUrl);
    if (!((_a = data === null || data === void 0 ? void 0 : data.file) === null || _a === void 0 ? void 0 : _a.url))
        return console.log('Error: No file url');
    if (banner === constants_1.keyboards.banner) {
        return yield prisma_1.default.banner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            var _d, _e;
            yield prisma_1.default.banner.create({
                data: {
                    fileId,
                    fileUrl: (_d = data === null || data === void 0 ? void 0 : data.file) === null || _d === void 0 ? void 0 : _d.url,
                    fileName: (_e = data === null || data === void 0 ? void 0 : data.file) === null || _e === void 0 ? void 0 : _e.name,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.travelBanner) {
        return yield prisma_1.default.travelBanner.deleteMany().then(() => __awaiter(void 0, void 0, void 0, function* () {
            var _f, _g;
            yield prisma_1.default.travelBanner.create({
                data: {
                    fileId,
                    fileUrl: (_f = data === null || data === void 0 ? void 0 : data.file) === null || _f === void 0 ? void 0 : _f.url,
                    fileName: (_g = data === null || data === void 0 ? void 0 : data.file) === null || _g === void 0 ? void 0 : _g.name,
                },
            });
        }));
    }
    if (banner === constants_1.keyboards.gallery) {
        return yield prisma_1.default.gallery.create({
            data: {
                fileId,
                fileUrl: (_b = data === null || data === void 0 ? void 0 : data.file) === null || _b === void 0 ? void 0 : _b.url,
                fileName: (_c = data === null || data === void 0 ? void 0 : data.file) === null || _c === void 0 ? void 0 : _c.name,
            },
        });
    }
});
exports.handleBannerInsertImage = handleBannerInsertImage;
const uploadFile = (uri, uuid) => __awaiter(void 0, void 0, void 0, function* () {
    const blob = yield fetch(uri).then((res) => res.blob());
    const file = new File([blob], uuid + '.png', { type: 'image/png' });
    const formData = new FormData();
    formData.append('file', file);
    const res = yield axiosinstance_1.default.post('/file/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return res.data;
});
// .then(async (blob) => {
//   const file = new File([blob], 'image.png', { type: 'image/png' });
//   const formData = new FormData();
//   formData.append('file', file);
//   const res = await axios.post('/file/upload', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   console.log('res', res.data);
// });
