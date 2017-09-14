[google-sheets-manager](../README.md) > ["common"](../modules/_common_.md) > [Common](../classes/_common_.common.md)



# Class: Common

## Hierarchy

**Common**

↳  [GoogleSheet](_sheets_google_sheet_.googlesheet.md)








## Index

### Constructors

* [constructor](_common_.common.md#constructor)


### Properties

* [api](_common_.common.md#api)
* [colIndex](_common_.common.md#colindex)
* [dimension](_common_.common.md#dimension)
* [rowIndex](_common_.common.md#rowindex)
* [sheetId](_common_.common.md#sheetid)
* [spreadsheetId](_common_.common.md#spreadsheetid)


### Methods

* [getInfo](_common_.common.md#getinfo)
* [getSheetTitle](_common_.common.md#getsheettitle)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Common**(authClass: *[IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)*, spreadsheetId: *`string`*, sheetId?: *`undefined`⎮`number`*, rowIndex?: *`undefined`⎮`number`*, colIndexOrDimension?: *`number`⎮"ROW"⎮"COLUMN"*): [Common](_common_.common.md)



*Defined in [common.ts:18](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L18)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| authClass | [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)  | - |   - |
| spreadsheetId | `string`  | - |   - |
| sheetId | `undefined`⎮`number`  | - |   - |
| rowIndex | `undefined`⎮`number`  | - |   - |
| colIndexOrDimension | `number`⎮"ROW"⎮"COLUMN"  | &quot;ROW&quot; |   - |





**Returns:** [Common](_common_.common.md)

---


## Properties
<a id="api"></a>

###  api

**●  api**:  *[API](_api_.api.md)* 

*Defined in [common.ts:18](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L18)*





___

<a id="colindex"></a>

###  colIndex

**●  colIndex**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)`number`* 

*Defined in [common.ts:16](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L16)*





___

<a id="dimension"></a>

###  dimension

**●  dimension**:  *[NonStrict](../modules/_utils_type_alias_.md#nonstrict)"ROW"⎮"COLUMN"* 

*Defined in [common.ts:17](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L17)*





___

<a id="rowindex"></a>

### «Optional» rowIndex

**●  rowIndex**:  *`undefined`⎮`number`* 

*Defined in [common.ts:24](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L24)*





___

<a id="sheetid"></a>

### «Optional» sheetId

**●  sheetId**:  *`undefined`⎮`number`* 

*Defined in [common.ts:23](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L23)*





___

<a id="spreadsheetid"></a>

###  spreadsheetId

**●  spreadsheetId**:  *`string`* 

*Defined in [common.ts:22](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L22)*





___


## Methods
<a id="getinfo"></a>

###  getInfo

► **getInfo**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[ISpreadsheetInfo](../interfaces/_utils_type_alias_.ispreadsheetinfo.md)*): `void`




*Defined in [common.ts:69](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L69)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[ISpreadsheetInfo](../interfaces/_utils_type_alias_.ispreadsheetinfo.md)  |  utils.noop |   - |





**Returns:** `void`





___

<a id="getsheettitle"></a>

###  getSheetTitle

► **getSheetTitle**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)[ISheetIdentifiers](../interfaces/_utils_type_alias_.isheetidentifiers.md)*): `void`




*Defined in [common.ts:44](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/common.ts#L44)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)[OrArray](../modules/_utils_type_alias_.md#orarray)[ISheetIdentifiers](../interfaces/_utils_type_alias_.isheetidentifiers.md)  |  utils.noop |   - |





**Returns:** `void`





___


