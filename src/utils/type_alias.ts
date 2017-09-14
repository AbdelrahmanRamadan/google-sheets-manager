export type NonStrict<T> = T | null | undefined;
export type Callback<T> = (err: NonStrict<Error>, res?: NonStrict<T>) => void;
export type OrArray<T> = T | T[];

export interface ICellIndex {
	rowIndex?: number;
	colIndex?: number;
}

export interface IRowRange {
	startRow?: number;
	endRow?: number;
}

export interface IColRange {
	startCol?: number;
	endCol?: number;
}

export interface ISheetRange {
	startRow?: number;
	endRow?: number;
	startCol?: number;
	endCol?: number;
}

export interface ISpreadSheetRange {
	startRow?: number;
	endRow?: number;
	startCol?: number;
	endCol?: number;
	sheetId?: string;
}

export interface IRange {
	startRow?: number;
	endRow?: number;
	startCol?: number;
	endCol?: number;
	sheetTitle?: string;
}

export interface IRowDataOptions {
	range?: IRowRange;
	sheetTitle?: string;
}

export interface IRowBatchDataOptions {
	ranges?: IRowRange[];
	sheetTitle?: string;
}

export interface IColDataOptions {
	range?: IColRange;
	sheetTitle?: string;
}

export interface IColBatchDataOptions {
	ranges?: IColRange[];
	sheetTitle?: string;
}

export interface ISheetDataOptions {
	range?: ISheetRange;
	majorDimension?: "ROWS" | "COLUMNS";
	sheetTitle?: string;
}

export interface ISheetBatchDataOptions {
	ranges?: ISheetRange[];
	majorDimension?: "ROWS" | "COLUMNS";
	sheetTitle?: string;
}

export interface ISpreadsheetDataOptions {
	range?: ISpreadSheetRange;
	majorDimension?: "ROWS" | "COLUMNS";
	sheetTitle?: string | string[];
}

export interface ISpreadsheetBatchDataOptions {
	ranges?: ISpreadSheetRange[];
	majorDimension?: "ROWS" | "COLUMNS";
	sheetTitle?: string | string[];
}

export interface IBatchGetOptions {
	majorDimension?: "ROWS" | "COLUMNS";
	valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
	dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
	fields?: string;
}

export interface ISpreadsheetInfo {
	spreadsheetId?: string;
	spreadsheetUrl?: string;
	properties: { title: string };
	sheets: ISheetInfo[];
}

export interface ISheetInfo {
	properties: {
		sheetId: number,
		title: string,
		index: number,
		gridProperties: {
			rowCount: number,
			columnCount: number,
		},
	};
}

export interface ISheetIdentifiers {
	sheetId: number;
	sheetTitle: string;
}

export interface IServiceAccountCreds {
	client_email: string;
	private_key: string;
}

export interface IJWTToken {
	expiry_date: number;
	// private_key, token, ...
}
