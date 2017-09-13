[google-sheets-manager](../README.md) > ["api"](../modules/_api_.md) > [API](../classes/_api_.api.md)



# Class: API

*__name__*: API

*__classdesc__*: abstracted wrapper class for googleapis.sheets("v4") get and post methods to manipulate google spreadsheets, class methods check if authentication is ready before each request

*__example__*: const api = new API(authClass); // authClass is an instance of any Class from IAuthClass set


## Index

### Constructors

* [constructor](_api_.api.md#constructor)


### Properties

* [authClass](_api_.api.md#authclass)


### Methods

* [batchUpdate](_api_.api.md#batchupdate)
* [copyTo](_api_.api.md#copyto)
* [get](_api_.api.md#get)
* [valuesBatchClear](_api_.api.md#valuesbatchclear)
* [valuesBatchGet](_api_.api.md#valuesbatchget)
* [valuesBatchUpdate](_api_.api.md#valuesbatchupdate)
* [valuesClear](_api_.api.md#valuesclear)
* [valuesGet](_api_.api.md#valuesget)
* [valuesUpdate](_api_.api.md#valuesupdate)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new API**(authClass: *[IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)*): [API](_api_.api.md)



*Defined in api.ts:21*


*__name__*: constructor



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| authClass | [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)   |  - |





**Returns:** [API](_api_.api.md)

---


## Properties
<a id="authclass"></a>

###  authClass

**●  authClass**:  *[IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)* 

*Defined in api.ts:26*





___


## Methods
<a id="batchupdate"></a>

###  batchUpdate

► **batchUpdate**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:132*


*__name__*: batchUpdate

*__desc__*: Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

*__alias__*: spreadsheets.batchUpdate

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.batchUpdate

*__example__*:     
    const api = new API(authClass);
    api.batchUpdate({
        spreadsheetId: "",
        resource: {
            // @see Requests
            requests: [{
                "deleteSheet": {
                    "sheetId": "",
                }
            }],
            // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="copyto"></a>

###  copyTo

► **copyTo**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:189*


*__name__*: copyTo

*__desc__*: Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.

*__alias__*: spreadsheets.sheets.copyTo

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.sheets/copyTo)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.sheets.copyTo

*__example__*:     
    const api = new API(authClass);
    api.copyTo({
        // The ID of the spreadsheet containing the sheet to copy.
        spreadsheetId: "", // Update placeholder value.
        // The ID of the sheet to copy.
        sheetId: 0,  // Update placeholder value.
        resource: {
                // The ID of the spreadsheet to copy the sheet to.
                destinationSpreadsheetId: "",  // Update placeholder value.
                // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="get"></a>

###  get

► **get**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:71*


*__name__*: get

*__desc__*: Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids will not be returned. You can include grid data one of two ways: -Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP -Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you want. To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple ranges can be specified. Limiting the range will return only the portions of the spreadsheet that intersect the requested ranges. Ranges are specified using A1 notation.

*__alias__*: spreadsheets.get

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.get

*__example__*:     
    const api = new API(authClass);
    api.get({
        spreadsheetId: "",
        includeGridDate: false,
        ranges: ["Sheet1!A1:B2", "Sheet2!A2:B3"],
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesbatchclear"></a>

###  valuesBatchClear

► **valuesBatchClear**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:241*


*__name__*: batchClear

*__desc__*: Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared--all other properties of the cell (such as formatting, data validation, etc) are kept.

*__alias__*: spreadsheets.values.batchClear

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.batchClear

*__example__*:     
    const api = new API(authClass);
    api.batchClear({
        spreadsheetId: "", // Update placeholder value.
        resource: {
            ranges: ["Sheet1!A1:B2", "Sheet2!A2:E5"],
            // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesbatchget"></a>

###  valuesBatchGet

► **valuesBatchGet**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:304*


*__name__*: batchGet

*__desc__*: Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

*__alias__*: spreadsheets.values.batchGet

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.batchGet

*__example__*:     
    const api = new API(authClass);
    api.batchGet({
        spreadsheetId: "", // Update placeholder value.
        ranges: ["Sheet1!A1:B2", "Sheet2!A2:E5"],
    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: "",  // Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: "",  // TODO: Update placeholder value.
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesbatchupdate"></a>

###  valuesBatchUpdate

► **valuesBatchUpdate**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:368*


*__name__*: batchUpdate

*__desc__*: Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.

*__alias__*: spreadsheets.values.batchUpdate

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.batchUpdate

*__example__*:     
    const api = new API(authClass);
    api.batchUpdate({
        spreadsheetId: "", // Update placeholder value.
        resource: {
            // How the input data should be interpreted.
            valueInputOption: "USER_ENTERED",    // Update placeholder value.
        // The new values to apply to the spreadsheet.
        data: [{    // Update placeholder value.
            range: "Sheet1!A1:B2",
            majorDimension: "ROWS",
            values: [[1, 2], [null, "abdelrahman"]],
        }],
        // Add desired properties to the request body.
    }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesclear"></a>

###  valuesClear

► **valuesClear**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:417*


*__name__*: clear

*__desc__*: Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

*__alias__*: spreadsheets.values.clear

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/clear)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.clear

*__example__*:     
    const api = new API(authClass);
    api.clear({
        spreadsheetId: "", // Update placeholder value.
        range: "Sheet1!B4:E10",
        resource: {
            // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesget"></a>

###  valuesGet

► **valuesGet**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:472*


*__name__*: getValues

*__desc__*: Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

*__alias__*: spreadsheets.values.get

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.get

*__example__*:     
    const api = new API(authClass);
    api.getValues({
        spreadsheetId: "", // Update placeholder value.
        range: "Sheet1!B4:E10",
        resource: {
            // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___

<a id="valuesupdate"></a>

###  valuesUpdate

► **valuesUpdate**(params: *`object`*, options?: *`any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in api.ts:541*


*__name__*: update

*__desc__*: Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

*__alias__*: spreadsheets.values.update

*__see__*: [alias](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update)

*__throws__*: wrapped method errors

*__see__*: [Wrapped Method](https://github.com/google/google-api-nodejs-client/blob/master/apis/sheets/v4.ts)

    - sheets.spreadsheets.values.update

*__example__*:     
    const api = new API(authClass);
    api.update({
        spreadsheetId: "", // Update placeholder value.
        range: "",    // Update placeholder value.
        resource: {
            range: "Sheet1!A1:E1",
            majorDimension: "ROWS",
            values: [
                ["Data", 123.45, true, "=MAX(D2:D4)", "10"]
            ],
            // Add desired properties to the request body.
        }
    }, (err, res) => {
        if (err)
            throw err;
        console.log(res);
    });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| params | `object`  | - |   Parameters for request |
| options | `any`⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  | - |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  noop |   The callback that handles the response. |





**Returns:** `void`
- Request object






___


