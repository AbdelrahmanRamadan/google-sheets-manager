export const ALL_SHEET_RANGE = "!A1:ZZZ";
export const SHEET_HEADER_RANGE = "!1:1";
export const FIRST_COLUMN_RANGE = "!A:A";

export const SHEET_TITLE_FIELD = "sheets.properties.title";
export const INFO_FIELDS = [
	"spreadsheetId",
	"spreadsheetUrl",
	"properties.title",
	"sheets.properties(sheetId,title,index,gridProperties(rowCount,columnCount))",
].join(",");
