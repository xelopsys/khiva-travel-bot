import reader from 'xlsx';

// Reading our sheet file
const file = reader.readFile('dist/sheet.xlsx');

const sheets = file.SheetNames;

export const JSONtoXLSX = (
  data: any,
  sheetName: string,
  fileName: string
): boolean => {
  try {
    const wb = reader.utils.book_new();
    const ws = reader.utils.json_to_sheet(data);
    reader.utils.book_append_sheet(wb, ws, sheetName);
    reader.writeFile(wb, fileName);
    return true;
  } catch (err) {
    return false;
  }
};

export const readXLSX = (): Array<Record<string, any>> => {
  const newData: any = [];
  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((res) => {
      newData.push(res);
    });
  }
  return newData;
};

// const parsedData = JSONtoXLSX([{}], "SheetJS", "dist/sheet.xlsx");

// console.log(readXLSX(), "parsed");
