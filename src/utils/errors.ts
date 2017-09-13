import { NonStrict } from "./type_alias";

export class InvalidSheetId extends Error {
	constructor(details?: string) {
		super("Invalid SheetId! " + details);
	}
}
