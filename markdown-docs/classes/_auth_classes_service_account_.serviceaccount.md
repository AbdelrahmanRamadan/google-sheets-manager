[google-sheets-manager](../README.md) > ["auth-classes/service-account"](../modules/_auth_classes_service_account_.md) > [ServiceAccount](../classes/_auth_classes_service_account_.serviceaccount.md)



# Class: ServiceAccount

*__name__*: ServiceAccount

*__classdesc__*: abstracted class to handle oauth2 service account authentication using jwt (json web token) method, should be passed as authClass to API class

*__see__*: [oAuth2ServiceAccount](https://developers.google.com/identity/protocols/OAuth2ServiceAccount)

*__example__*:     
        var fs = require("fs");
        const creds = JSON.parse(fs.readFileSync("file", "utf8"));
        const authClass = new ServiceAccount(creds);
        const api = new API(authClass); // authClass is an instance of any Class from IAuthClass set


## Implements

* [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md)

## Index

### Constructors

* [constructor](_auth_classes_service_account_.serviceaccount.md#constructor)


### Accessors

* [authClient](_auth_classes_service_account_.serviceaccount.md#authclient)


### Methods

* [authorize](_auth_classes_service_account_.serviceaccount.md#authorize)
* [ensureValid](_auth_classes_service_account_.serviceaccount.md#ensurevalid)
* [isAuthorized](_auth_classes_service_account_.serviceaccount.md#isauthorized)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ServiceAccount**(creds: *[IServiceAccountCreds](../interfaces/_utils_type_alias_.iserviceaccountcreds.md)*, googleAuthScopes?: *`string`[]*): [ServiceAccount](_auth_classes_service_account_.serviceaccount.md)



*Defined in [auth-classes/service-account.ts:41](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/ddca908/src/auth-classes/service-account.ts#L41)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| creds | [IServiceAccountCreds](../interfaces/_utils_type_alias_.iserviceaccountcreds.md)  | - |   - |
| googleAuthScopes | `string`[]  |  GOOGLE_AUTH_SCOPES |   - |





**Returns:** [ServiceAccount](_auth_classes_service_account_.serviceaccount.md)

---



## Accessors
<a id="authclient"></a>

###  authClient


getauthClient(): `any`


*Defined in [auth-classes/service-account.ts:69](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/ddca908/src/auth-classes/service-account.ts#L69)*


*__name__*: authClient

*__desc__*: getter for the internal authClient class, which is JWTClient in ServiceAccount case

*__example__*:     
        const authClass = new ServiceAccount(creds, google_auth_scopes);
        authClass.authorize((err, res) => {
            if (err)
                throw err;
            console.log(authClass.authClient);
        });





**Returns:** `any`
JWTClient - holds the access token and request methods



___


## Methods
<a id="authorize"></a>

###  authorize

► **authorize**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Implementation of [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md).[authorize](../interfaces/_auth_classes_auth_class_.iauthclass.md#authorize)*

*Defined in [auth-classes/service-account.ts:90](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/ddca908/src/auth-classes/service-account.ts#L90)*


*__name__*: authorize

*__desc__*: send credintials private key to google server and gets json access token object

*__throws__*: errors from wrapped method GoogleAuth.JWT.authorize

*__see__*: [GoogleAuth](https://github.com/google/google-auth-library-nodejs)

*__example__*:     
        const authClass = new ServiceAccount(creds, google_auth_scopes);
        authClass.authorize((err, res) => {
            if (err)
                throw err;
            console.log(res);
        });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  utils.noop |   - |





**Returns:** `void`
authClient - JWTClient, holds access token and request methods





___

<a id="ensurevalid"></a>

###  ensureValid

► **ensureValid**(callback?: *[Callback](../modules/_utils_type_alias_.md#callback)`any`*): `void`




*Implementation of [IAuthClass](../interfaces/_auth_classes_auth_class_.iauthclass.md).[ensureValid](../interfaces/_auth_classes_auth_class_.iauthclass.md#ensurevalid)*

*Defined in [auth-classes/service-account.ts:136](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/ddca908/src/auth-classes/service-account.ts#L136)*


*__name__*: ensureValid

*__desc__*: checks if the account authorized, if not it authorizes it and set res variable to this.authClient

*__throws__*: errors from method this.authorize

*__example__*:     
        const authClass = new ServiceAccount(creds, google_auth_scopes);
        authClass.authorize((err, res) => {
            if (err)
                throw err;
            console.log(res);
        });



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| callback | [Callback](../modules/_utils_type_alias_.md#callback)`any`  |  utils.noop |   - |





**Returns:** `void`
authClient - JWTClient, holds access token and request methods





___

<a id="isauthorized"></a>

###  isAuthorized

► **isAuthorized**(): `boolean`




*Defined in [auth-classes/service-account.ts:116](https://github.com/AbdelrahmanRamadan/google-sheets-manager/blob/ddca908/src/auth-classes/service-account.ts#L116)*


*__name__*: isAuthorized

*__desc__*: checks if jwt (this.token) is set and not expired

*__example__*:     
        const authClass = new ServiceAccount(creds, google_auth_scopes);
        if (!authClass.isAuthorized()) {
            authClass.authorize((err, res) => {
                if (err)
                    throw err;
                console.log(res);
            });
        }





**Returns:** `boolean`





___


