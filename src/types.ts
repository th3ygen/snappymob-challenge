export enum RandomizerType {
	ALPHABETIC = "alphabetic",
	REAL = "real",
	INTEGER = "integer",
	ALPHANUMERIC = "alphanumeric",
}

export interface RandomizerBase {
	generate(min: number, max: number): string;
}
