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

* [getData](_sheets_google_sheet_.googlesheet.md#getdata)
* [getInfo](_sheets_google_sheet_.googlesheet.md#getinfo)
* [getSheetTitle](_sheets_google_sheet_.googlesheet.md#getsheettitle)
* [setData](_sheets_google_sheet_.googlesheet.md#setdata)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new GoogleSheet**(authClass: *[IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)*, spreadsheetId: *`string`*, sheetId?: *`number`*): [GoogleSheet](_sheets_google_sheet_.googlesheet.md)



*Overrides [Common](_common_.common.md).[constructor](_common_.common.md#constructor)*

*Defined in sheets/google-sheet.ts:6*



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

*Defined in common.ts:18*





___

<a id="colindex"></a>

###  colIndex

**●  colIndex**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`number`* 

*Inherited from [Common](_common_.common.md).[colIndex](_common_.common.md#colindex)*

*Defined in common.ts:16*





___

<a id="dimension"></a>

###  dimension

**●  dimension**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)"ROW"⎮"COLUMN"* 

*Inherited from [Common](_common_.common.md).[dimension](_common_.common.md#dimension)*

*Defined in common.ts:17*





___

<a id="rowindex"></a>

### «Optional» rowIndex

**●  rowIndex**:  *`undefined`⎮`number`* 

*Inherited from [Common](_common_.common.md).[rowIndex](_common_.common.md#rowindex)*

*Defined in common.ts:24*





___

<a id="sheetid"></a>

###  sheetId

**●  sheetId**:  *`number`* 

*Overrides [Common](_common_.common.md).[sheetId](_common_.common.md#sheetid)*

*Defined in sheets/google-sheet.ts:7*





___

<a id="spreadsheetid"></a>

###  spreadsheetId

**●  spreadsheetId**:  *`string`* 

*Overrides [Common](_common_.common.md).[spreadsheetId](_common_.common.md#spreadsheetid)*

*Defined in sheets/google-sheet.ts:7*





___


## Methods
<a id="getdata"></a>

###  getData

► **getData**(options?: *[ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`string`[][]*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`string`[][]*): `void`




*Defined in sheets/google-sheet.ts:11*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| options | [ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`string`[][]  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`string`[][]  |  utils.noop |   - |





**Returns:** `void`





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[ISpreadsheetInfo](../interfaces/_utils_type_alias_.ispreadsheetinfo.md)*): `void`




*Inherited from [Common](_common_.common.md).[getInfo](_common_.common.md#getinfo)*

*Defined in common.ts:69*



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

*Defined in common.ts:44*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)[ISheetIdentifiers](../interfaces/_utils_type_alias_.isheetidentifiers.md)  |  utils.noop |   - |





**Returns:** `void`





___

<a id="setdata"></a>

###  setData

► **setData**(data: *[OrArray](../modules/_utils_type_alias_.md#orarray)[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][]*, options?: *[ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`any`*, callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`any`*): `void`




*Defined in sheets/google-sheet.ts:54*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | [OrArray](../modules/_utils_type_alias_.md#orarray)[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`string`[][]  | - |   - |
| options | [ISheetDataOptions](../interfaces/_utils_type_alias_.isheetdataoptions.md)⎮[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`any`  |  {} |   - |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)`any`  |  utils.noop |   - |





**Returns:** `void`





___


