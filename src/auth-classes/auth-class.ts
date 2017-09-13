/**
 * @fileoverview exports interface to group authorization classes in single set, by inheritace
 * @name auth-class.js
 * @author Abdelrahman Ramadan <abdelrahman0xff@gmail.com>
 * https://github.com/AbdelrahmanRamadan/google-sheets-manager
 */

/**
 * @name AuthClass
 * @classdesc all authentication classes should inherit this class in order to be acceptable by the api wrapper classes
 */
import { Callback } from "../utils/type_alias";

export interface IAuthClass {
	authorize(callback: Callback<any>): void;
	ensureValid(callback: Callback<any>): void;
}
