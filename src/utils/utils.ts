import { IRange } from "./type_alias";

// converts cell_index to its alphabetical order in the google sheet (ex. 28 => 'AB')
export const numToAlpha = function fNumToAlpha(num: number): string {
	let str = "";
	while (num) {
			str += String.fromCharCode("A".charCodeAt(0) + --num % 26);
			num = Math.floor(num / 26);
	}
	return str.split("").reverse().join("");
};

export const alphaToNum = function fAlphaToNum(str: string): number {
	let num = 0;
	for (let i = 0; i < str.length; ++i) {
		num = num * 26 + (str.charCodeAt(i) - "A".charCodeAt(0)) + 1;
	}
	return num;
};

export const getA1Notation = function fGetA1Notation(range: IRange): string {
	const stRow = range.startRow || "";
	const stCol = numToAlpha(range.startCol || 0);

	const enRow = range.endRow || "";
	const enCol = numToAlpha(range.endCol || 0);

	const title = range.sheetTitle || "";
	let str = `${title}!${stCol}${stRow}:${enCol}${enRow}`;

	if (str[str.length - 1] === ":" || str[str.length - 1] === "!") {
		str = str.slice(0, str.length - 1);
	}
	if (str[0] === "!") {
		str = str.slice(1, str.length);
	}

	return str;
};

export const forceLength = function fForceLength(arr: any[], length: number, placeholder: any = ""): any[] {
	if (arr.length > length) {
		return arr.slice(0, length);
	}
	return arr.concat(new Array(length - arr.length).map((i) => placeholder));
};

export const forceArray = function fForceArray(val: any): any[] {
	if (Array.isArray(val)) {
		return val;
	}
	if (!val) {
		return [];
	}
	return [val];
};

export const xmlSafeValue = function fXMLSafeValue(val: any): string {
	if (val == null) {
		return "";
	}
	return String(val).replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/\n/g, "&#10;")
		.replace(/\r/g, "&#13;");
};

export const xmlSafeColumnName = function fXMLSafeColumnName(val: any): string {
	if (!val) {
		return "";
	}
	return String(val).replace(/[\s_]+/g, "").toLowerCase();
};

export const find = function fFind(arr: any[], func: (elem: any) => boolean): any {
	for (const elem in arr) {
		if (func(arr[elem])) {
			return arr[elem];
		}
	}
};

export const noop = function fNoop(err?: Error, res?: any): void {};
