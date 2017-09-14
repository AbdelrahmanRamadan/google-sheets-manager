/**
 * @fileoverview abstracted wrapper class for googleapis methods
 * @name api.js
 * @author Abdelrahman Ramadan <abdelrahman0xff@gmail.com>
 * https://github.com/AbdelrahmanRamadan/google-sheets-manager
 */

import * as google from "googleapis";
import { noop } from "./utils/utils";
import { IAuthClass } from "./auth-classes/auth-class";
import { Callback } from "./utils/type_alias";

const googlesheets = google.sheets("v4");
/**
 * @name API
 * @classdesc abstracted wrapper class for googleapis.sheets("v4") get and post methods to
 * 	manipulate google spreadsheets, class methods check if authentication is ready before each request
 * @example
 * const api = new API(authClass); // authClass is an instance of any Class from IAuthClass set
 */
export class API {
	/**
	 * @name constructor
	 * @param {object} authclass - instance of any IAuthClass drived classes in ./auth-client directory
	 */
	constructor(public authClass: IAuthClass) {}

	// spreadsheets methods
	/**
	 * @name get
	 * @desc Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID.
	 * 	By default, data within grids will not be returned. You can include grid data one of two ways:
	 * 	-Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP
	 * 	-Set the includeGridData URL parameter to true.
	 * 	If a field mask is set, the `includeGridData` parameter is ignored  For large spreadsheets,
	 * 	it is recommended to retrieve only the specific fields of the spreadsheet that you want.
	 * 	To retrieve only subsets of the spreadsheet, use the ranges URL parameter.
	 * 	Multiple ranges can be specified.  Limiting the range will return only the portions of the spreadsheet that
	 * 	intersect the requested ranges.
	 * 	Ranges are specified using A1 notation.
	 * @alias spreadsheets.get
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {boolean=} params.includeGridData - True if grid data should be returned.
	 * 	This parameter is ignored if a field mask was set in the request.
	 * @param {string=} params.ranges - The ranges to retrieve from the spreadsheet.
	 * @param {string} params.spreadsheetId - The spreadsheet to request.
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.get
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.get({
	 * 	spreadsheetId: "<spreadsheetId>",
	 * 	includeGridDate: false,
	 * 	ranges: ["Sheet1!A1:B2", "Sheet2!A2:B3"],
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public get(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.get({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name batchUpdate
	 * @desc Applies one or more updates to the spreadsheet.  Each request is validated before being applied.
	 * 	If any request is not valid then the entire request will fail and nothing will be applied.
	 * 	Some requests have replies to give you some information about how they are applied.
	 * 	The replies will mirror the requests.  For example, if you applied 4 updates and the 3rd one had a reply,
	 * 	then the response will have 2 empty replies, the actual reply, and another empty reply, in that order.
	 * 	Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect
	 * 	exactly your changes after this completes, however it is guaranteed that the updates in the request will
	 * 	be applied together atomically. Your changes may be altered with respect to collaborator changes.
	 * 	If there are no collaborators, the spreadsheet should reflect your changes.
	 * @alias spreadsheets.batchUpdate
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string} params.spreadsheetId - The spreadsheet to apply the updates to.
	 * @param {object} params.resource - Request body data
	 * @param {object[]} params.resource.requests - requests to apply
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.batchUpdate
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.batchUpdate({
	 * 	spreadsheetId: "<spreadsheetId>",
	 * 	resource: {
	 * 		// @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request|Requests}
	 * 		requests: [{
	 * 			"deleteSheet": {
	 * 				"sheetId": "<sheetId>",
	 * 			}
	 * 		}],
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public batchUpdate(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.batchUpdate({ ...params, auth: authClient }, options, callback);
		});
	}

	// spreadsheets.sheets methods

	/**
	 * @name copyTo
	 * @desc Copies a single sheet from a spreadsheet to another spreadsheet.
	 * 	Returns the properties of the newly created sheet.
	 * @alias spreadsheets.sheets.copyTo
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {integer} params.sheetId - The ID of the sheet to copy.
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet containing the sheet to copy.
	 * @param {object} params.resource - Request body data
	 * @param {string} params.resource.destinationSpreadsheetId - The ID of the spreadsheet to copy the sheet to.
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.sheets.copyTo
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.copyTo({
	 * 	// The ID of the spreadsheet containing the sheet to copy.
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	// The ID of the sheet to copy.
	 * 	sheetId: 0,  // Update placeholder value.
	 * 	resource: {
	 * 			// The ID of the spreadsheet to copy the sheet to.
	 * 			destinationSpreadsheetId: "<spreadsheetId>",  // Update placeholder value.
	 * 			// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */

	public copyTo(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.sheets.copyTo({ ...params, auth: authClient }, options, callback);
		});
	}

	// spreadsheets.values methods

	/**
	 * @name batchClear
	 * @desc Clears one or more ranges of values from a spreadsheet.
	 * 	The caller must specify the spreadsheet ID and one or more ranges.
	 * 	Only values are cleared--all other properties of the cell (such as formatting, data validation, etc) are kept.
	 * @alias spreadsheets.values.batchClear
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to update.
	 * @param {object} params.resource - Request body data
	 * @param {string[]} params.resource.ranges - A1 notation ranges to clear
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.batchClear
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.batchClear({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	resource: {
	 * 		ranges: ["Sheet1!A1:B2", "Sheet2!A2:E5"],
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesBatchClear(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.batchClear({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name batchGet
	 * @desc Returns one or more ranges of values from a spreadsheet.
	 * 	The caller must specify the spreadsheet ID and one or more ranges.
	 * @alias spreadsheets.values.batchGet
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string=} params.dateTimeRenderOption - How dates, times, and durations should be represented in
	 * 	the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option
	 * 	is [DateTimeRenderOption.SERIAL_NUMBER].
	 * @param {string=} params.majorDimension - The major dimension that results should use.  For example,
	 * 	if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS`
	 * 	will return `[[1,2],[3,4]]`,whereas requesting`range=A1:B2,majorDimension=COLUMNS` will return`[[1,3],[2,4]]`.
	 * @param {string=} params.ranges - The A1 notation of the values to retrieve.
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to retrieve data from.
	 * @param {string=} params.valueRenderOption - How values should be represented in the output.
	 * 	The default render option is ValueRenderOption.FORMATTED_VALUE.
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.batchGet
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.batchGet({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	ranges: ["Sheet1!A1:B2", "Sheet2!A2:E5"],
	 *
	 * 	// How values should be represented in the output.
	 * 	// The default render option is ValueRenderOption.FORMATTED_VALUE.
	 * 	valueRenderOption: "",  // Update placeholder value.
	 *
	 * 	// How dates, times, and durations should be represented in the output.
	 * 	// This is ignored if value_render_option is
	 * 	// FORMATTED_VALUE.
	 * 	// The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
	 * 	dateTimeRenderOption: "",  // TODO: Update placeholder value.
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesBatchGet(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.batchGet({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name batchUpdate
	 * @desc Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID,
	 * 	a valueInputOption, and one or more ValueRanges.
	 * @alias spreadsheets.values.batchUpdate
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to update.
	 * @param {object} params.resource - Request body data
	 * @param {string} params.resource.valueInputOptions - Determines how input data should be interpreted,
	 * 	should be equal to "RAW" or "USER_ENTERED".
	 * @param {object[]} params.resource.data - data objects array
	 * @param {string} params.resource.data[].range - A1 notation range to apply values on
	 * @param {string} params.resource.data[].majorDimension - how the values 2-d array is represented,
	 * 	should be equal to "ROWS" or "COLUMNS".
	 * @param {mixed[][]} params.resource.data[].values - 2-d array of values to be apply on range, the cell remains
	 * 	the same if it"s value in the array is equal to null.
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.batchUpdate
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.batchUpdate({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	resource: {
	 * 		// How the input data should be interpreted.
	 * 		valueInputOption: "USER_ENTERED",	// Update placeholder value.
	 *
	 * 		// The new values to apply to the spreadsheet.
	 * 		data: [{	// Update placeholder value.
	 * 			range: "Sheet1!A1:B2",
	 * 			majorDimension: "ROWS",
	 * 			values: [[1, 2], [null, "abdelrahman"]],
	 * 		}],
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesBatchUpdate(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.batchUpdate({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name clear
	 * @desc Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range.
	 * 	Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
	 * @alias spreadsheets.values.clear
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/clear|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string} params.range - The A1 notation of the values to clear.
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to update.
	 * @param {object} params.resource - Request body data
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.clear
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.clear({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	range: "Sheet1!B4:E10",
	 * 	resource: {
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesClear(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.clear({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name getValues
	 * @desc Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
	 * @alias spreadsheets.values.get
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {string=} params.dateTimeRenderOption - How dates, times, and durations should be represented in
	 * 	the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option
	 * 	is [DateTimeRenderOption.SERIAL_NUMBER].
	 * @param {string=} params.majorDimension - The major dimension that results should use.  For example,
	 * 	if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will
	 * 	return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`.
	 * @param {string} params.range - The A1 notation of the values to retrieve.
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to retrieve data from.
	 * @param {string=} params.valueRenderOption - How values should be represented in the output.
	 * 	The default render option is "FORMATTED_VALUE".
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.get
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.getValues({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	range: "Sheet1!B4:E10",
	 * 	resource: {
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesGet(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.get({ ...params, auth: authClient }, options, callback);
		});
	}

	/**
	 * @name update
	 * @desc Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range,
	 * 	and a valueInputOption.
	 * @alias spreadsheets.values.update
	 * @see {@link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update|alias}
	 *
	 * @param {object} params - Parameters for request
	 * @param {boolean=} params.includeValuesInResponse - Determines if the update response should include
	 * 	the values of the cells that were updated. By default, responses do not include the updated values.
	 * 	If the range to write was larger than than the range actually written, the response will include all
	 * 	values in the requested range (excluding trailing empty rows and columns).
	 * @param {string} params.range - The A1 notation of the values to update.
	 * @param {string=} params.responseDateTimeRenderOption - Determines how dates, times, and durations in the
	 * 	response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE.
	 * 	The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
	 * @param {string=} params.responseValueRenderOption - Determines how values in the response should be rendered.
	 * 	The default render option is ValueRenderOption.FORMATTED_VALUE.
	 * @param {string} params.spreadsheetId - The ID of the spreadsheet to update.
	 * @param {string=} params.valueInputOption - How the input data should be interpreted.
	 * @param {object} params.resource - Request body data
	 * @param {string} params.resource.range - A1 notation range to apply values on
	 * @param {string} params.resource.majorDimension - how the values 2-d array is represented, should be equal
	 * 	to "ROWS" or "COLUMNS".
	 * @param {mixed[][]} params.resource.data[].values - 2-d array of values to be apply on range,
	 * 	the cell remains the same if it"s value in the array is equal to null.
	 * @param {object} [options] - Optionally override request options, such as `url`, `method`, and `encoding`.
	 * @param {callback} callback - The callback that handles the response.
	 * @return {object} - Request object
	 *
	 * @throws wrapped method errors
	 * @see {@link https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts|Wrapped Method}
	 * 	- sheets.spreadsheets.values.update
	 *
	 * @example
	 * <pre><code>
	 * const api = new API(authClass);
	 * api.valuesUpdate({
	 * 	spreadsheetId: "<spreadsheetId>", // Update placeholder value.
	 * 	range: "Sheet1!A1:E1",
	 * 	valueInputOption: "USER_ENTERED",
	 * 	resource: {
	 * 		majorDimension: "ROWS",
	 * 		values: [
	 * 			["Data", 123.45, true, "=MAX(D2:D4)", "10"]
	 * 		],
	 * 		// Add desired properties to the request body.
	 * 	}
	 * }, (err, res) => {
	 * 	if (err)
	 * 		throw err;
	 * 	console.log(res);
	 * });
	 * <code/><pre/>
	 */
	public valuesUpdate(params: object, options?: object | Callback<any>, callback: Callback<any> = noop): void {
		if (typeof options === "function") {
			callback = options;
			options = undefined;
		}

		this.authClass.ensureValid((err: Error, authClient: any) => {
			if (err) {
				return callback(err);
			}
			googlesheets.spreadsheets.values.update({ ...params, auth: authClient }, options, callback);
		});
	}
}
