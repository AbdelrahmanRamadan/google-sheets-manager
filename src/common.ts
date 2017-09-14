/**
 * @fileoverview exports abstract class containing common functionalities between google sheets handling classes
 * @name common.js
 * @author Abdelrahman Ramadan <abdelrahman0xff@gmail.com>
 * https://github.com/AbdelrahmanRamadan/google-sheets-manager
 */

import { IAuthClass } from "./auth-classes/auth-class";
import { API } from "./api";
import * as utils from "./utils/utils";
import { INFO_FIELDS, SHEET_TITLE_FIELD } from "./constants";
import { NonStrict, Callback, ISpreadsheetInfo, ISheetInfo, ISheetIdentifiers, OrArray } from "./utils/type_alias";
import { InvalidSheetId } from "./utils/errors";

export class Common {
	public colIndex: NonStrict<number>;
	public dimension: NonStrict<"ROW" | "COLUMN">;
	public api: API;

	constructor(
		authClass: IAuthClass,
		public spreadsheetId: string,
		public sheetId?: number,
		public rowIndex?: number,
		colIndexOrDimension: number | "ROW" | "COLUMN" = "ROW",
	) {
		if (this.rowIndex) {
			if (colIndexOrDimension === "COLUMN") {
				this.dimension = "COLUMN";
				this.colIndex = this.rowIndex;
				this.rowIndex = undefined;
			} else if (colIndexOrDimension === "ROW") {
				this.dimension = "ROW";
			} else {
				this.colIndex = colIndexOrDimension;
			}
		}

		this.api = new API(authClass);
	}

	// next methods: to be inhereted as they are

	public getSheetTitle(callback: Callback<OrArray<ISheetIdentifiers>> = utils.noop): void {
		this.getInfo((err: Error, res: ISpreadsheetInfo) => {
			if (err) {
				return callback(err);
			}

			if (!this.sheetId) {
				return callback(err, res.sheets.map((elem) => ({
					sheetId: elem.properties.sheetId,
					sheetTitle: elem.properties.title,
				})));
			}

			const sheet = utils.find(res.sheets, ((elem) => (elem.properties.sheetId === this.sheetId)));
			if (!sheet) {
				return callback(new InvalidSheetId());
			}

			callback(err, {
				sheetId: sheet.properties.sheetId,
				sheetTitle: sheet.properties.title,
			});
		});
	}

	public getInfo(callback: Callback<ISpreadsheetInfo> = utils.noop): void {
		this.api.get({
			spreadsheetId: this.spreadsheetId,
			fields: INFO_FIELDS,
		}, (err: Error, res: ISpreadsheetInfo) => {
			if (err || !this.sheetId) {
				return callback(err, res);
			}

			const sheet = utils.find(res.sheets, ((elem) => (elem.properties.sheetId === this.sheetId)));
			if (!sheet) {
				return callback(new InvalidSheetId());
			}

			res.sheets = [sheet];
			callback(err, res);
		});
	}
}
