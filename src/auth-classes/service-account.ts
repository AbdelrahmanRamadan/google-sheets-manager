/**
 * @fileoverview exports abstracted class to handle sevice account authentication
 * @name service-account.js
 * @author Abdelrahman Ramadan <abdelrahman0xff@gmail.com>
 * https://github.com/AbdelrahmanRamadan/google-sheets-manager
 */

import * as GoogleAuth from "google-auth-library";
import * as utils from "../utils/utils";
import { IAuthClass } from "./auth-class";
import { Callback, NonStrict, IServiceAccountCreds, IJWTToken } from "../utils/type_alias";

/** @see {@link https://developers.google.com/identity/protocols/googlescopes#sheetsv4| googleapis scopes} */
const GOOGLE_AUTH_SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

/**
 * @name ServiceAccount
 * @classdesc abstracted class to handle oauth2 service account authentication using jwt (json web token) method,
 * 	should be passed as authClass to API class
 * @see {@link https://developers.google.com/identity/protocols/OAuth2ServiceAccount| oAuth2ServiceAccount}
 * @example
 * <pre><code>
 * 	var fs = require("fs");
 * 	const creds = JSON.parse(fs.readFileSync("file", "utf8"));
 * 	const authClass = new ServiceAccount(creds);
 * 	const api = new API(authClass); // authClass is an instance of any Class from IAuthClass set
 * </code></pre>
 */

export class ServiceAccount implements IAuthClass {
	/**
	 * @name constructor
	 * @param {object} authclass - instance of any IAuthClass drived classes in ./auth-client directory
	 * @param {string[]} googleAuthScopes - google authentication scopes
	 * @see {@link https://developers.google.com/identity/protocols/googlescopes#sheetsv4| googleapis scopes}
	 * @throws errors from wrapped method GoogleAuth.JWT
	 * @see {@link https://github.com/google/google-auth-library-nodejs|GoogleAuth}
	 */
	private token: IJWTToken | null;
	private googleAuth: any;
	private JWTClient: any;

	constructor(creds: IServiceAccountCreds, googleAuthScopes = GOOGLE_AUTH_SCOPES) {
		this.googleAuth = new GoogleAuth();
		this.JWTClient = new this.googleAuth.JWT(
			creds.client_email,
			null,
			creds.private_key,
			googleAuthScopes,
			null,
		);
		this.token = null;
	}

	/**
	 * @name authClient
	 * @desc getter for the internal authClient class, which is JWTClient in ServiceAccount case
	 * @return {object} JWTClient - holds the access token and request methods
	 * @example
	 * <pre><code>
	 * 	const authClass = new ServiceAccount(creds, google_auth_scopes);
	 * 	authClass.authorize((err, res) => {
	 * 		if (err)
	 * 			throw err;
	 * 		console.log(authClass.authClient);
	 * 	});
	 * </code></pre>
	 */
	get authClient(): any {
		return this.JWTClient;
	}

	/**
	 * @name authorize
	 * @desc send credintials private key to google server and gets json access token object
	 * @param {callback} callback
	 * @return {object} authClient - JWTClient, holds access token and request methods
	 * @throws errors from wrapped method GoogleAuth.JWT.authorize
	 * @see {@link https://github.com/google/google-auth-library-nodejs|GoogleAuth}
	 * @example
	 * <pre><code>
	 * 	const authClass = new ServiceAccount(creds, google_auth_scopes);
	 * 	authClass.authorize((err, res) => {
	 * 		if (err)
	 * 			throw err;
	 * 		console.log(res);
	 * 	});
	 * </code></pre>
	 */
	public authorize(callback: Callback<any> = utils.noop): void {
		this.JWTClient.authorize((err: Error, token: IJWTToken) => {
			if (err) {
				return callback(err);
			}
			this.token = token;
			return callback(err, this.authClient);
		});
	}

	/**
	 * @name isAuthorized
	 * @desc checks if jwt (this.token) is set and not expired
	 * @return {boolean}
	 * @example
	 * <pre><code>
	 * 	const authClass = new ServiceAccount(creds, google_auth_scopes);
	 * 	if (!authClass.isAuthorized()) {
	 * 		authClass.authorize((err, res) => {
	 * 			if (err)
	 * 				throw err;
	 * 			console.log(res);
	 * 		});
	 * 	}
	 * </code></pre>
	 */
	public isAuthorized(): boolean {
		return !!this.token && this.token.expiry_date > +(new Date());
	}

	/**
	 * @name ensureValid
	 * @desc checks if the account authorized, if not it authorizes it and set res variable to this.authClient
	 * @param {callback} callback
	 * @return {object} authClient - JWTClient, holds access token and request methods
	 * @throws errors from method this.authorize
	 * @example
	 * <pre><code>
	 * 	const authClass = new ServiceAccount(creds, google_auth_scopes);
	 * 	authClass.authorize((err, res) => {
	 * 		if (err)
	 * 			throw err;
	 * 		console.log(res);
	 * 	});
	 * </code></pre>
	 */
	public ensureValid(callback: Callback<any> = utils.noop): void {
		if (!this.isAuthorized()) {
			return this.authorize(callback);
		}
		callback(null, this.authClient);
	}
}
