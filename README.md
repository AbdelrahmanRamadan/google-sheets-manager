
# Google Sheets Manager (TypeScript)
Google Sheets API v4 abstracted TypeScript modules for reading and manipulating Google Spreadsheets using service account access.

## Modules (WIKI)

### ([google-sheets-manager wiki](http://gsheets-manager.bitballoon.com/))
Modules and code components breakdown and documentation on the wiki

## Installation

[![NPM](https://nodei.co/npm/google-sheets-manager.png)](https://nodei.co/npm/google-sheets-manager/)

## Basic Usage

_Simple example to show some of the things you can do._

```javascript
var googlesheets = require("google-sheets-manager");
var creds = require("./client_secret.json");

var ServiceAccount = googlesheets.ServiceAccount;
var GoogleSheet = googlesheets.GoogleSheet;

const GOOGLE_SPREADSHEETID = "1_CioU4zMQ_oYM1w5zrpCUCp0YPY8nP0piFa-Kr2YP_U";
const GOOGLE_SHEETID = 1063280134;

var authClass = new ServiceAccount(creds);
var sheetAPI = new GoogleSheet(authClass, GOOGLE_SPREADSHEETID, GOOGLE_SHEETID);

var defaultCallback = (err, res) => {
	if (err) {
		throw err;
	}
	console.log(res);
};

sheetAPI.getData(defaultCallback);

sheetAPI.getData({
	range: {
		startRow: 2,
		startCol: 1,
		endRow: 3,
		endCol: 2,
	},
	majorDimension: "COLUMNS",
}, defaultCallback);

sheetAPI.getBatchData(defaultCallback);

sheetAPI.getBatchData({
	ranges: [{
		startRow: 2,
		startCol: 1,
		endRow: 3,
		endCol: 2,
	}, {
		startRow:2,
		endCol: 1,
	}],
	majorDimension: "COLUMNS",
}, defaultCallback);

sheetAPI.setData([
	['1', '2'],
	['3', '4'],
], defaultCallback);

sheetAPI.setData([
	['1', '2'],
	['3', '4'],
], {
	range: {
		startRow: 2,
		startCol: 1,
		endRow: 3,
		endCol: 2,
	},
	majorDimension: "COLUMNS",
}, defaultCallback);

```

## Authentication

### Service Account (recommended method)

This is a 2-legged oauth method and designed to be "an account that belongs to your application instead of to an individual end user".
Use this for an app that needs to access a set of documents that you have full access to.
([read more](https://developers.google.com/identity/protocols/OAuth2ServiceAccount))

__Setup Instructions__

1. Go to the [Google Developers Console](https://console.developers.google.com/project)
2. Select your project or create a new one (and then select it)
3. Enable the Drive API for your project
	- In the sidebar on the left, expand __APIs & auth__ > __APIs__
	- Search for "drive"
	- Click on "Drive API"
	- click the blue "Enable API" button
4. Create a service account for your project
	- In the sidebar on the left, expand __APIs & auth__ > __Credentials__
	- Click blue "Add credentials" button
	- Select the "Service account" option
	- Select "Furnish a new private key" checkbox
	- Select the "JSON" key type option
	- Click blue "Create" button
	- your JSON key file is generated and downloaded to your machine (__it is the only copy!__)
	- note your service account's email address (also available in the JSON key file)
5. Share the doc (or docs) with your service account using the email noted above

-----------------------------------------

## API

This module follows "normal" node callback conventions:

- Every method that takes a callback takes it as its last param
- Every callback will be called with the error (or null) as first param
- Some methods have optional params

### `GoogleSpreadsheet`

_TODO_

----------------------------------

### `ServiceAccount`

Wrapper class for simplifing authentication process using service account method

### `new ServiceAccount(creds, [googleAuthScopes])`

- `creds` object - service account credentials loaded as json object _(see setup instruction above)_
- `googleAuthScopes` string[] - [google scopes](https://developers.google.com/identity/protocols/googlescopes) which you want to give the api access on, default value is scopes (["https://www.googleapis.com/auth/spreadsheets"])

----------------------------------


### `GoogleSheet`

Represents a single "sheet" from the spreadsheet. These are the different tabs/pages visible at the bottom of the Google Sheets interface.

sheets info returned as property `sheets` when calling `GoogleSheet.getInfo`.

__Properties:__
- `spreadsheetId` number - the ID of the main spreadsheet, could be extracted from sheet's url using this regex `/spreadsheets/d/([a-zA-Z0-9-_]+)`
- `sheetId` number - the ID of the single sheet tab, could be extracted from sheet's url using this regex `[#&]gid=([0-9]+)`

### new `GoogleSheet(authClass, spreadsheetId, [sheetId])`

- `authClass AuthClass - instance of AuthClass inhereted class, like ServiceAccount
- `spreadsheetId` number - the ID of the main spreadsheet
- `sheetId` number - the ID of the single sheet tab, default value is 0

----------------------------------

### `SpreadsheetWorksheet.getData([options], callback)`

Loads data from google sheet.
- `options` object (optional)
	- `range` (optional) - The range of the data to be fetched, if not provided then the function returns all the data in the sheet.
		- `startRow` number (optional) - default: 1
		- `startCol`number (optional) - default: 1
		- `endRow` number (optional) - default: MAX_ROW
		- `endCol` number (optional) - default: MAX_COL
	- `majorDimension` string - enum('ROWS' || 'COLUMNS') how the loaded data should be represented, either array of rows or array of columns, default values is 'ROWS'
- `callback` (err, res)
	- `res` two dimentional array containing the range data

----------------------------------

### `SpreadsheetWorksheet.getBatchData([options], callback)`

Loads data from multiple ranges in a single request from google sheet.
- `options` object (optional)
	- `ranges` object Array (optional) - The ranges of the data to be fetched, if not provided then the function returns all the data in the sheet.
		- `startRow` number (optional) - default: 1
		- `startCol`number (optional) - default: 1
		- `endRow` number (optional) - default: MAX_ROW
		- `endCol` number (optional) - default: MAX_COL
	- `majorDimension` string - enum('ROWS' || 'COLUMNS') how the loaded data should be represented, either array of rows or array of columns, default values is 'ROWS'
- `callback` (err, res)
	- `res` two dimentional array containing the range data

----------------------------------

### `SpreadsheetWorksheet.setData(data, [options], callback)`

set data in google sheet.
- `data` (string | null | undefined) 2D array - representing data to be updated to the google sheet
- `options` object (optional)
	- `range` object (optional) - The range of the data to be updated, if not provided then the function apply the data to the first range that fits in the sheet.
		- `startRow` number (optional) - default: 1
		- `startCol`number (optional) - default: 1
		- `endRow` number (optional) - default: MAX_ROW
		- `endCol` number (optional) - default: MAX_COL
	- `majorDimension` string - enum('ROWS' || 'COLUMNS') how the provided data are represented, either array of rows or array of columns, default values is 'ROWS'
- `callback` (err, res)
	- `res` contains google reponse with the updated cells info

----------------------------------

### `SpreadsheetWorksheet.setBatchData(data, [options], callback)`

set data in multiple ranges in a single request from google sheet.
- `data` (string | null | undefined) 3D array - representing array of data to be updated to the google sheet
- `options` object (optional)
	- `ranges` object Array (optional) - The ranges of the data to be updated, if not provided then the function apply the data to the first range that fits in the sheet, If ranges provided then it must be of the same size as data array first dimension.
		- `startRow` number (optional) - default: 1
		- `startCol`number (optional) - default: 1
		- `endRow` number (optional) - default: MAX_ROW
		- `endCol` number (optional) - default: MAX_COL
	- `majorDimension` string - enum('ROWS' || 'COLUMNS') how the provided data are represented, either array of rows or array of columns, default values is 'ROWS'
- `callback` (err, res)
	- `res` contains google reponse with the updated cells info

----------------------------------

### `GoogleRow`

_TODO_

----------------------------------

### `GoogleCol`

_TODO_

----------------------------------

### `GoogleCell`

_TODO_

----------------------------------

### Modules

* ["api"](markdown-docs/modules/_api_.md)
* ["auth-classes/auth-class"](markdown-docs/modules/_auth_classes_auth_class_.md)
* ["auth-classes/service-account"](markdown-docs/modules/_auth_classes_service_account_.md)
* ["common"](markdown-docs/modules/_common_.md)
* ["constants"](markdown-docs/modules/_constants_.md)
* ["sheets/google-sheet"](markdown-docs/modules/_sheets_google_sheet_.md)
* ["utils/errors"](markdown-docs/modules/_utils_errors_.md)
* ["utils/type_alias"](markdown-docs/modules/_utils_type_alias_.md)
* ["utils/utils"](markdown-docs/modules/_utils_utils_.md)



---
