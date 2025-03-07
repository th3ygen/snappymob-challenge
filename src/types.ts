export enum RandomizerType {
	ALPHABETIC = "alphabetic",
	REAL = "real",
	INTEGER = "integer",
	ALPHANUMERIC = "alphanumeric",
}

export interface RandomizerBase {
	randomize(min: number, max: number): number;
	generate(min: number, max: number): string;
}
