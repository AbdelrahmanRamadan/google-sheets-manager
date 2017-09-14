import { Common } from "../common";
import { IAuthClass } from "../auth-classes/auth-class";
import {
	ISheetRange,
	ISheetIdentifiers,
	Callback,
	ISheetDataOptions,
	ISheetBatchDataOptions,
	NonStrict,
} from "../utils/type_alias";
import * as utils from "../utils/utils";

export class GoogleSheet extends Common {
	constructor(authClass: IAuthClass, public spreadsheetId: string, public sheetId: number = 0) {
		super(authClass, spreadsheetId, sheetId);
	}

	public getBatchData(
		options: ISheetBatchDataOptions | Callback<string[][][]> = {},
		callback: Callback<string[][][]> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		let {ranges, sheetTitle, ...params} = options;
		ranges || (ranges = [{}]);

		if (ranges.length === 0) {
			return callback(null, []);
		}

		const batchGet = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			const A1notations = (ranges as ISheetRange[]).map((elem) => utils.getA1Notation({
				...elem,
				sheetTitle: res.sheetTitle,
			}));

			this.api.valuesBatchGet({
				spreadsheetId: this.spreadsheetId,
				...params,
				ranges: A1notations,
			}, (apiError: Error, apiRes: any) => {
				if (apiError) {
					return callback(apiError);
				}
				// callback(null, isRangeArr ? apiRes.valueRanges.map((elem: any) => elem.values) : apiRes.valueRanges[0].values);
				callback(null, apiRes.valueRanges.map((elem: any) => elem.values));

			});
		};

		if (sheetTitle) {
			return batchGet(null, {
				sheetId: this.sheetId,
				sheetTitle,
			});
		}

		this.getSheetTitle(batchGet);
	}

	public getData(
		options: ISheetDataOptions | Callback<string[][]> = {},
		callback: Callback<string[][]> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		let {range, sheetTitle, ...params} = options;
		range || (range = {});

		const get = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			this.api.valuesGet({
				spreadsheetId: this.spreadsheetId,
				...params,
				range: utils.getA1Notation({
					...range,
					sheetTitle: res.sheetTitle,
				}),
			}, (apiError: Error, apiRes: any) => {
				if (apiError) {
					return callback(apiError);
				}
				callback(null, apiRes.values);
			});
		};

		if (sheetTitle) {
			return get(null, {
				sheetId: this.sheetId,
				sheetTitle,
			});
		}

		this.getSheetTitle(get);
	}

	public setBatchData(
		data: NonStrict<string>[][][],
		options: ISheetBatchDataOptions | Callback<any> = {},
		callback: Callback<any> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		let {ranges, sheetTitle, ...params} = options;
		ranges || (ranges = [{}]);

		if (ranges.length !== data.length) {
			return callback(new Error("Range and Data should be of the same length!"));
		}

		if (ranges.length === 0) {
			return callback(null, []);
		}

		const batchUpdate = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			const resourceData = [];
			for (let i = 0; i < data.length; ++i) {
				resourceData.push({
					range: utils.getA1Notation({
						...(ranges as ISheetRange[])[i],
						sheetTitle: res.sheetTitle,
					}),
					...params,
					values: data[i],
				});
			}

			this.api.valuesBatchUpdate({
				spreadsheetId: this.spreadsheetId,
				resource: {
					valueInputOption: "USER_ENTERED",
					data: resourceData,
				},
			}, callback);
		};

		if (sheetTitle) {
			return batchUpdate(null, {
				sheetId: this.sheetId,
				sheetTitle,
			});
		}

		this.getSheetTitle(batchUpdate);
	}

	public setData(
		data: NonStrict<string>[][],
		options: ISheetDataOptions | Callback<any> = {},
		callback: Callback<any> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		let {range, sheetTitle, ...params} = options;
		range || (range = {});

		const update = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			this.api.valuesUpdate({
				spreadsheetId: this.spreadsheetId,
				valueInputOption: "USER_ENTERED",
				range: utils.getA1Notation({
					...range,
					sheetTitle: res.sheetTitle,
				}),
				resource: {
					...params,
					values: data,
				},
			}, callback);
		};

		if (sheetTitle) {
			return update(null, {
				sheetId: this.sheetId,
				sheetTitle,
			});
		}

		this.getSheetTitle(update);
	}
}
