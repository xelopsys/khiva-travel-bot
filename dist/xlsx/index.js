"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readXLSX = exports.JSONtoXLSX = void 0;
const xlsx_1 = __importDefault(require("xlsx"));
// Reading our sheet file
const file = xlsx_1.default.readFile('dist/sheet.xlsx');
const sheets = file.SheetNames;
const JSONtoXLSX = (data, sheetName, fileName) => {
    try {
        const wb = xlsx_1.default.utils.book_new();
        const ws = xlsx_1.default.utils.json_to_sheet(data);
        xlsx_1.default.utils.book_append_sheet(wb, ws, sheetName);
        xlsx_1.default.writeFile(wb, fileName);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.JSONtoXLSX = JSONtoXLSX;
const readXLSX = () => {
    const newData = [];
    for (let i = 0; i < sheets.length; i++) {
        const temp = xlsx_1.default.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        temp.forEach((res) => {
            newData.push(res);
        });
    }
    return newData;
};
exports.readXLSX = readXLSX;
// const parsedData = JSONtoXLSX([{}], "SheetJS", "dist/sheet.xlsx");
// console.log(readXLSX(), "parsed");
