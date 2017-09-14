import { ServiceAccount } from "../../src/auth-classes/service-account";
import { GoogleSheet } from "../../src/sheets/google-sheet";
import { NonStrict, ISheetRange } from "../../src/utils/type_alias";
import { creds } from "../client_secret";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;

const GOOGLE_SPREADSHEETID = "1_CioU4zMQ_oYM1w5zrpCUCp0YPY8nP0piFa-Kr2YP_U";
const GOOGLE_SHEETID = 1063280134;
const GOOGLE_SHEET_TITLE = "Copy of Sheet1";

const ranges = [
	{}, {
		startRow: 2,
		startCol: 2,
		endRow: 3,
		endCol: 3,
	}, {
		endRow: 2,
		endCol: 2,
	},
];

const data = [
	[
		["A1", "B1", "C1"],
		["A2", "B2", "C2"],
		["A3", "B3", "C3"],
	], [
		["B2", "C2"],
		["B3", "C3"],
	], [
		["A1", "B1"],
		["A2", "B2"],
	],
];

const dataT = [
	[
		["A1", "A2", "A3"],
		["B1", "B2", "B3"],
		["C1", "C2", "C3"],
	], [
		["B2", "B3"],
		["C2", "C3"],
	], [
		["A1", "A2"],
		["B1", "B2"],
	],
];
const testGetData = function getData(optimized: boolean = false) {
	describe(`GoogleSheet.getData - optimized: ${optimized}`, () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);
		const sheetTitle = optimized ? GOOGLE_SHEET_TITLE : undefined;

		[
			{
				message: "should get all data as rows from google sheet correctly",
				options: {
					range: ranges[0],
					sheetTitle,
				},
				res: data[0],
			}, {
				message: "should get range 2,2 -> 3,3 data as rows from google sheet correctly",
				options: {
					range: ranges[1],
					sheetTitle,
				},
				res: data[1],
			}, {
				message: "should get range 1,1 -> 2,2 data as columns from google sheet correctly",
				options: {
					majorDimension: "COLUMNS",
					range: ranges[2],
					sheetTitle,
				},
				res: dataT[2],
			},
		].forEach((test: any) => {
			it(test.message, (done) => {
				googleSheet.getData(test.options, (err: NonStrict<Error>, res: string[][]) => {
					expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
					expect(res).to.deep.equal(test.res);
					done();
				});
			});
		});
	});
};

const testGetBatchData = function getBatchData(optimized: boolean = false) {
	describe(`GoogleSheet.getBatchData - optimized: ${optimized}`, () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);
		const sheetTitle = optimized ? GOOGLE_SHEET_TITLE : undefined;

		it("should get ranges [all, (2,2 -> 3,3), (1,1 -> 2,2)] data as rows from google sheet correctly", (done) => {
			googleSheet.getBatchData({
				majorDimension: "ROWS",
				ranges,
				sheetTitle,
			}, (err: NonStrict<Error>, res: string[][][]) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.deep.equal(data);
				done();
			});
		});

		it("should get ranges [all, (2,2 -> 3,3), (1,1 -> 2,2)] data as columns from google sheet correctly", (done) => {
			googleSheet.getBatchData({
				majorDimension: "COLUMNS",
				ranges,
				sheetTitle,
			}, (err: NonStrict<Error>, res: string[][][]) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.deep.equal(dataT);
				done();
			});
		});
	});
};

const testSetData = function setData(optimized: boolean = false) {
	describe(`GoogleSheet.setData - optimized: ${optimized}`, () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);
		const sheetTitle = optimized ? GOOGLE_SHEET_TITLE : undefined;

		[
			{
				message: "should set all data as rows to google sheet correctly",
				options: {
					range: ranges[0],
					sheetTitle,
				},
				data: data[0],
			}, {
				message: "should set range 2,2 -> 3,3 data as rows to google sheet correctly",
				options: {
					range: ranges[1],
					sheetTitle,
				},
				data: data[1],
			}, {
				message: "should set range 1,1 -> 2,2 data as columns to google sheet correctly",
				options: {
					majorDimension: "COLUMNS",
					range: ranges[2],
					sheetTitle,
				},
				data: dataT[2],
			},
		].forEach((test: any) => {
			it(test.message, (done) => {
				googleSheet.setData(test.data, test.options, (err: NonStrict<Error>, res: any) => {
					expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
					expect(res).to.satisfy((elem: any) => (elem.updatedCells === test.data.length * test.data[0].length));
					done();
				});
			});
		});
	});
};

const testSetBatchData = function setBatchData(optimized: boolean = false) {
	describe(`GoogleSheet.setBatchData - optimized: ${optimized}`, () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);
		const sheetTitle = optimized ? GOOGLE_SHEET_TITLE : undefined;

		it("should set ranges [all, (2,2 -> 3,3), (1,1 -> 2,2)] data as rows to google sheet correctly", (done) => {
			googleSheet.setBatchData(data, {
				majorDimension: "ROWS",
				ranges,
				sheetTitle,
			}, (err: NonStrict<Error>, res: any) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.satisfy((result: any) => {
					const cells = data.reduce((sum: number, elem: string[][]) => (sum + elem.length * elem[0].length), 0);
					const updatedCells = result.responses.reduce((sum: number, elem: any) => (sum + elem.updatedCells), 0);
					return cells === updatedCells;
				});
				done();
			});
		});

		it("should set ranges [all, (2,2 -> 3,3), (1,1 -> 2,2)] data as columns to google sheet correctly", (done) => {
			googleSheet.setBatchData(dataT, {
				majorDimension: "COLUMNS",
				ranges,
				sheetTitle,
			}, (err: NonStrict<Error>, res: any) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.satisfy((result: any) => {
					const cells = dataT.reduce((sum: number, elem: string[][]) => (sum + elem.length * elem[0].length), 0);
					const updatedCells = result.responses.reduce((sum: number, elem: any) => (sum + elem.updatedCells), 0);
					return cells === updatedCells;
				});
				done();
			});
		});
	});
};

const testGetInfo = function getInfo() {
	describe("GoogleSheet.getInfo", () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);

		it("should get spreadsheet and sheet info correctly", (done) => {
			googleSheet.getInfo((err: NonStrict<Error>, res: any) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.satisfy((result: any) => result.sheets[0].properties.sheetId === GOOGLE_SHEETID);
				done();
			});
		});
	});
};

const testGetSheetTitle = function getSheetTitle() {
	describe("GoogleSheet.getSheetTitle", () => {
		const authClass = new ServiceAccount(creds);
		const googleSheet = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);

		it("should get sheet title and id correctly", (done) => {
			googleSheet.getSheetTitle((err: NonStrict<Error>, res: any) => {
				expect(err).to.satisfy((elem: NonStrict<Error>) => !elem);
				expect(res).to.satisfy((result: any) => {
					return result.sheetTitle === GOOGLE_SHEET_TITLE && result.sheetId === GOOGLE_SHEETID;
				});
				done();
			});
		});
	});
};

testGetData();
testGetData(true);

testGetBatchData();
testGetBatchData(true);

testSetData();
testSetData(true);

testSetBatchData();
testSetBatchData(true);

testGetInfo();

testGetSheetTitle();
