"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/client");
const prisma = global.prisma || new client_1.PrismaClient();
if (process.env.NODE_ENV === 'development')
    global.prisma = prisma;
exports.default = prisma;
