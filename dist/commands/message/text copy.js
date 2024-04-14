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
const bot_1 = __importDefault(require("../../bot/bot"));
const constants_1 = require("../../constants/constants");
const prisma_1 = __importDefault(require("../../lib/prisma"));
const functions_1 = require("../../helpers/functions");
const actionKeyboards = [
    { text: 'Delete' },
    { text: 'Cancel' },
];
bot_1.default.on('message:photo', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const fileId = (_b = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.photo) === null || _b === void 0 ? void 0 : _b[((_d = (_c = ctx.message) === null || _c === void 0 ? void 0 : _c.photo) === null || _d === void 0 ? void 0 : _d.length) - 1].file_id;
    if (ctx.session.step === constants_1.keyboards.banner ||
        ctx.session.step === constants_1.keyboards.travelBanner ||
        ctx.session.step === constants_1.keyboards.gallery) {
        yield ctx.reply('Image is being saved...', {
            reply_markup: {
                keyboard: [[{ text: 'Cancel' }]],
                resize_keyboard: true,
                one_time_keyboard: true,
            },
        });
        return yield (0, functions_1.handleBannerInsertImage)({
            fileId,
            banner: ctx.session.step,
        }).then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield ctx.reply('Image has been saved');
            if (ctx.session.step === constants_1.keyboards.gallery) {
                yield ctx.replyWithPhoto(fileId);
                return yield ctx.reply('send another one', {
                    reply_markup: {
                        keyboard: [[{ text: 'Cancel' }]],
                        resize_keyboard: true,
                        one_time_keyboard: true,
                    },
                });
            }
            return yield ctx.replyWithPhoto(fileId);
        }));
    }
}));
bot_1.default.on('message:text', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f, _g, _h, _j;
    if (ctx.session.step === constants_1.keyboards.gallery &&
        ((_f = (_e = ctx.message) === null || _e === void 0 ? void 0 : _e.text) === null || _f === void 0 ? void 0 : _f.match(/[\d{1}$]/))) {
        const index = parseInt(ctx.message.text) - 1;
        if (index < 0) {
            return yield ctx.reply('There is no image with this index');
        }
        const gallery = yield prisma_1.default.gallery.findFirst({
            where: {
                index: parseInt(ctx.message.text),
            },
        });
        return yield prisma_1.default.gallery
            .delete({
            where: {
                uuid: gallery === null || gallery === void 0 ? void 0 : gallery.uuid,
            },
        })
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            const gallery = yield prisma_1.default.gallery.findMany();
            yield ctx.reply('Image has been deleted');
            return yield ctx.reply("Choose another image or 'Cancel'", {
                reply_markup: {
                    keyboard: [
                        gallery.map((item) => ({ text: `${item.index}` })),
                        [{ text: 'Cancel' }],
                    ],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting image, please try again later', {
                reply_markup: {
                    keyboard: [[{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }));
    }
    if (ctx.session.step === constants_1.keyboards.travel) {
        const travel = yield prisma_1.default.travel.findFirst({
            where: {
                name: ((_g = ctx.message) === null || _g === void 0 ? void 0 : _g.text) || '',
            },
        });
        if (!travel)
            return yield ctx.reply('No travel found with this name');
        yield prisma_1.default.travel
            .update({
            where: {
                uuid: travel === null || travel === void 0 ? void 0 : travel.uuid,
            },
            data: {
                itinerary: {
                    deleteMany: {},
                },
                pricesPerCar: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting travel, please try again later');
        }));
        yield prisma_1.default.travel
            .delete({
            where: {
                uuid: travel.uuid,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const travels = yield prisma_1.default.travel.findMany();
            const travelNames = travels.map((travel) => {
                return {
                    text: travel.name,
                };
            });
            if (travelNames.length === 0)
                return yield ctx.reply('All travels are deleted', {
                    reply_markup: {
                        keyboard: [travelNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Travel '${res.name}' has been deleted`, {
                reply_markup: {
                    keyboard: [travelNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting travel, please try again later');
        }));
    }
    // delete a car
    if (ctx.session.step === constants_1.keyboards.car) {
        const car = yield prisma_1.default.car.findFirst({
            where: {
                carType: ((_h = ctx.message) === null || _h === void 0 ? void 0 : _h.text) || '',
            },
        });
        if (!car)
            return yield ctx.reply('No car found with this name');
        yield prisma_1.default.car
            .update({
            where: {
                uuid: car === null || car === void 0 ? void 0 : car.uuid,
            },
            data: {
                pictures: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting car, please try again later');
        }));
        yield prisma_1.default.car
            .delete({
            where: {
                uuid: car.uuid,
            },
            include: {
                pictures: true,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const cars = yield prisma_1.default.car.findMany();
            const carNames = cars.map((car) => {
                return {
                    text: car.carType,
                };
            });
            if (carNames.length === 0)
                return yield ctx.reply('All cars are deleted', {
                    reply_markup: {
                        keyboard: [carNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Car '${res.carType}' has been deleted`, {
                reply_markup: {
                    keyboard: [carNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting car, please try again later');
        }));
    }
    //delete a transfer
    if (ctx.session.step === constants_1.keyboards.transfer) {
        const transfer = yield prisma_1.default.transferInfo.findFirst({
            where: {
                transfer: ((_j = ctx.message) === null || _j === void 0 ? void 0 : _j.text) || '',
            },
        });
        if (!transfer)
            return yield ctx.reply('No transfer found with this name');
        yield prisma_1.default.transferInfo
            .update({
            where: {
                uuid: transfer === null || transfer === void 0 ? void 0 : transfer.uuid,
            },
            data: {
                transferOptions: {
                    deleteMany: {},
                },
            },
        })
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting transfer, please try again later');
        }));
        yield prisma_1.default.transferInfo
            .delete({
            where: {
                uuid: transfer.uuid,
            },
        })
            .then((res) => __awaiter(void 0, void 0, void 0, function* () {
            const transfers = yield prisma_1.default.transferInfo.findMany();
            const transferNames = transfers.map((transfer) => {
                return {
                    text: transfer.transfer,
                };
            });
            if (transferNames.length === 0)
                return yield ctx.reply('All transfers are deleted', {
                    reply_markup: {
                        keyboard: [transferNames, [{ text: 'Cancel' }]],
                        one_time_keyboard: true,
                        resize_keyboard: true,
                    },
                });
            return yield ctx.reply(`Transfer '${res.transfer}' has been deleted`, {
                reply_markup: {
                    keyboard: [transferNames, [{ text: 'Cancel' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }))
            .catch(() => __awaiter(void 0, void 0, void 0, function* () {
            return yield ctx.reply('Error while deleting transfer, please try again later');
        }));
    }
}));
