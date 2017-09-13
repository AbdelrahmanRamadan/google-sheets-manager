import { Common } from "../common";
import { IAuthClass } from "../auth-classes/auth-class";
import { ISheetRange, ISheetIdentifiers, Callback, ISheetDataOptions, NonStrict, OrArray } from "../utils/type_alias";
import * as utils from "../utils/utils";

export class GoogleSheet extends Common {
	constructor(authClass: IAuthClass, public spreadsheetId: string, public sheetId: number = 0) {
		super(authClass, spreadsheetId, sheetId);
	}

	public getData(
		options: ISheetDataOptions | Callback<OrArray<string[][]>> = {},
		callback: Callback<OrArray<string[][]>> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options.range || (options.range = {});

		const {range, sheetTitle, ...params} = options;
		const ranges = utils.forceArray(range);
		if (ranges.length === 0) {
			return callback(null);
		}

		const batchGet = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			const A1notations = ranges.map((elem) => utils.getA1Notation({
				...elem,
				sheetTitle: res.sheetTitle,
			}));

			this.api.valuesBatchGet({
				ranges: A1notations,
				spreadsheetId: this.spreadsheetId,
				...options,
			}, callback);
		};

		if (options.sheetTitle) {
			return batchGet(null, {
				sheetId: this.sheetId,
				sheetTitle: options.sheetTitle,
			});
		}

		this.getSheetTitle(batchGet);
	}

	public setData(
		data: OrArray<NonStrict<string>[][]>,
		options: ISheetDataOptions | Callback<OrArray<any>> = {},
		callback: Callback<OrArray<any>> = utils.noop,
	): void {
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		options.range || (options.range = {});

		const {range, sheetTitle, ...params} = options as ISheetDataOptions;
		const isRangeArr: boolean = Array.isArray(range);
		const isDataArr: boolean = Array.isArray(data[0][0]);

		if (isRangeArr !== isDataArr || (isRangeArr && (range as ISheetRange[]).length !== data.length)) {
			return callback(new Error("Range and Data should be consistent!"));
		}

		const ranges = utils.forceArray(range);
		if (ranges.length === 0) {
			return callback(null);
		}

		const batchUpdate = (err: NonStrict<Error>, res: ISheetIdentifiers) => {
			if (err) {
				return callback(err);
			}

			const resourceData = [];
			for (let i = 0; i < data.length; ++i) {
				resourceData.push({
					range: utils.getA1Notation({
						...ranges[i],
						sheetTitle: res.sheetTitle,
					}),
					majorDimension: params.majorDimension,
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

		if (options.sheetTitle) {
			return batchUpdate(null, {
				sheetId: this.sheetId,
				sheetTitle: options.sheetTitle,
			});
		}

		this.getSheetTitle(batchUpdate);
	}
}
