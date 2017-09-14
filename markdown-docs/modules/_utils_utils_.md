[google-sheets-manager](../README.md) > ["utils/utils"](../modules/_utils_utils_.md)



# External module: "utils/utils"

## Index

### Functions

* [alphaToNum](_utils_utils_.md#alphatonum)
* [find](_utils_utils_.md#find)
* [forceArray](_utils_utils_.md#forcearray)
* [forceLength](_utils_utils_.md#forcelength)
* [getA1Notation](_utils_utils_.md#geta1notation)
* [noop](_utils_utils_.md#noop)
* [numToAlpha](_utils_utils_.md#numtoalpha)
* [xmlSafeColumnName](_utils_utils_.md#xmlsafecolumnname)
* [xmlSafeValue](_utils_utils_.md#xmlsafevalue)



---
## Functions
<a id="alphatonum"></a>

###  alphaToNum

► **alphaToNum**(str: *`string`*): `number`




*Defined in [utils/utils.ts:13](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L13)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string`   |  - |





**Returns:** `number`





___

<a id="find"></a>

###  find

► **find**(arr: *`any`[]*, func: *function*): `any`




*Defined in [utils/utils.ts:77](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L77)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| arr | `any`[]   |  - |
| func | function   |  - |





**Returns:** `any`





___

<a id="forcearray"></a>

###  forceArray

► **forceArray**(val: *`any`*): `any`[]




*Defined in [utils/utils.ts:48](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L48)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `any`   |  - |





**Returns:** `any`[]





___

<a id="forcelength"></a>

###  forceLength

► **forceLength**(arr: *`any`[]*, length: *`number`*, placeholder?: *`any`*): `any`[]




*Defined in [utils/utils.ts:41](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L41)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| arr | `any`[]  | - |   - |
| length | `number`  | - |   - |
| placeholder | `any`  | &quot;&quot; |   - |





**Returns:** `any`[]





___

<a id="geta1notation"></a>

###  getA1Notation

► **getA1Notation**(range: *[IRange](../interfaces/_utils_type_alias_.irange.md)*): `string`




*Defined in [utils/utils.ts:21](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| range | [IRange](../interfaces/_utils_type_alias_.irange.md)   |  - |





**Returns:** `string`





___

<a id="noop"></a>

###  noop

► **noop**(err?: *[Error](../classes/_utils_errors_.invalidsheetid.md#error)*, res?: *`any`*): `void`




*Defined in [utils/utils.ts:85](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L85)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| err | [Error](../classes/_utils_errors_.invalidsheetid.md#error)   |  - |
| res | `any`   |  - |





**Returns:** `void`





___

<a id="numtoalpha"></a>

###  numToAlpha

► **numToAlpha**(num: *`number`*): `string`




*Defined in [utils/utils.ts:4](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L4)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| num | `number`   |  - |





**Returns:** `string`





___

<a id="xmlsafecolumnname"></a>

###  xmlSafeColumnName

► **xmlSafeColumnName**(val: *`any`*): `string`




*Defined in [utils/utils.ts:70](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L70)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `any`   |  - |





**Returns:** `string`





___

<a id="xmlsafevalue"></a>

###  xmlSafeValue

► **xmlSafeValue**(val: *`any`*): `string`




*Defined in [utils/utils.ts:58](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/d86bb83/src/utils/utils.ts#L58)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `any`   |  - |





**Returns:** `string`





___


