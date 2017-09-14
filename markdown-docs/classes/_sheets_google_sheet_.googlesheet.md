[google-sheets-manager](../README.md) > ["sheets/google-sheet"](../modules/_sheets_google_sheet_.md) > [GoogleSheet](../classes/_sheets_google_sheet_.googlesheet.md)



# Class: GoogleSheet

## Hierarchy


 [Common](_common_.common.md)

**↳ GoogleSheet**







## Index

### Constructors

* [constructor](_sheets_google_sheet_.googlesheet.md#constructor)


### Properties

* [api](_sheets_google_sheet_.googlesheet.md#api)
* [colIndex](_sheets_google_sheet_.googlesheet.md#colindex)
* [dimension](_sheets_google_sheet_.googlesheet.md#dimension)
* [rowIndex](_sheets_google_sheet_.googlesheet.md#rowindex)
* [sheetId](_sheets_google_sheet_.googlesheet.md#sheetid)
* [spreadsheetId](_sheets_google_sheet_.googlesheet.md#spreadsheetid)


### Methods

* [getBatchData](_sheets_google_sheet_.googlesheet.md#getbatchdata)
* [getData](_sheets_google_sheet_.googlesheet.md#getdata)
* [getInfo](_sheets_google_sheet_.googlesheet.md#getinfo)
* [getSheetTitle](_sheets_google_sheet_.googlesheet.md#getsheettitle)
* [setBatchData](_sheets_google_sheet_.googlesheet.md#setbatchdata)
* [setData](_sheets_google_sheet_.googlesheet.md#setdata)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new GoogleSheet**(authClass: *[IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)*, spreadsheetId: *`string`*, sheetId?: *`number`*): [GoogleSheet](_sheets_google_sheet_.googlesheet.md)



*Overrides [Common](_common_.common.md).[constructor](_common_.common.md#constructor)*

*Defined in [sheets/google-sheet.ts:13](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L13)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| authClass | [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)  | - |   - |
| spreadsheetId | `string`  | - |   - |
| sheetId | `number`  | 0 |   - |





**Returns:** [GoogleSheet](_sheets_google_sheet_.googlesheet.md)

---


## Properties
<a id="api"></a>

###  api

**●  api**:  *[API](_api_.api.md)* 

*Inherited from [Common](_common_.common.md).[api](_common_.common.md#api)*

*Defined in [common.ts:18](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L18)*





___

<a id="colindex"></a>

###  colIndex

**●  colIndex**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`number`* 

*Inherited from [Common](_common_.common.md).[colIndex](_common_.common.md#colindex)*

*Defined in [common.ts:16](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L16)*





___

<a id="dimension"></a>

###  dimension

**●  dimension**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)"ROW"⎮"COLUMN"* 

*Inherited from [Common](_common_.common.md).[dimension](_common_.common.md#dimension)*

*Defined in [common.ts:17](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L17)*





___

<a id="rowindex"></a>

### «Optional» rowIndex

**●  rowIndex**:  *`undefined`⎮`number`* 

*Inherited from [Common](_common_.common.md).[rowIndex](_common_.common.md#rowindex)*

*Defined in [common.ts:24](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L24)*





___

<a id="sheetid"></a>

###  sheetId

**●  sheetId**:  *`number`* 

*Overrides [Common](_common_.common.md).[sheetId](_common_.common.md#sheetid)*

*Defined in [sheets/google-sheet.ts:14](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L14)*





___

<a id="spreadsheetid"></a>

###  spreadsheetId

**●  spreadsheetId**:  *`string`* 

*Overrides [Common](_common_.common.md).[spreadsheetId](_common_.common.md#spreadsheetid)*

*Defined in [sheets/google-sheet.ts:14](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L14)*





___


## Methods
<a id="getbatchdata"></a>

###  getBatchData

► **getBatchData**(options?: *[ISheetBatchDataOptions](../interfaces/_utils_type_alias_.isheetbatchdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`string`[][][]*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`string`[][][]*): `void`




*Defined in [sheets/google-sheet.ts:18](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L18)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| options | [ISheetBatchDataOptions](../interfaces/_utils_type_alias_.isheetbatchdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`string`[][][]  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`string`[][][]  |  utils.noop |   - |





**Returns:** `void`





___

<a id="getdata"></a>

###  getData

► **getData**(options?: *[ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`string`[][]*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`string`[][]*): `void`




*Defined in [sheets/google-sheet.ts:67](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L67)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| options | [ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`string`[][]  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`string`[][]  |  utils.noop |   - |





**Returns:** `void`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[ISpreadsheetInfo](../interfaces/_utils_type_alias_.ispreadsheetinfo.md)*): `void`




*Inherited from [Common](_common_.common.md).[getInfo](_common_.common.md#getinfo)*

*Defined in [common.ts:69](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L69)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[ISpreadsheetInfo](../interfaces/_utils_type_alias_.ispreadsheetinfo.md)  |  utils.noop |   - |





**Returns:** `void`





___

<a id="getsheettitle"></a>

###  getSheetTitle

► **getSheetTitle**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)[ISheetIdentifiers](../interfaces/_utils_type_alias_.isheetidentifiers.md)*): `void`




*Inherited from [Common](_common_.common.md).[getSheetTitle](_common_.common.md#getsheettitle)*

*Defined in [common.ts:44](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/common.ts#L44)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)[ISheetIdentifiers](../interfaces/_utils_type_alias_.isheetidentifiers.md)  |  utils.noop |   - |





**Returns:** `void`





___

<a id="setbatchdata"></a>

###  setBatchData

► **setBatchData**(data: *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][][]*, options?: *[ISheetBatchDataOptions](../interfaces/_utils_type_alias_.isheetbatchdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in [sheets/google-sheet.ts:108](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L108)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][][]  | - |   - |
| options | [ISheetBatchDataOptions](../interfaces/_utils_type_alias_.isheetbatchdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  utils.noop |   - |





**Returns:** `void`





___

<a id="setdata"></a>

###  setData

► **setData**(data: *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][]*, options?: *[ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Defined in [sheets/google-sheet.ts:164](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/06574e0/src/sheets/google-sheet.ts#L164)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][]  | - |   - |
| options | [ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)`any`  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  utils.noop |   - |





**Returns:** `void`





___


