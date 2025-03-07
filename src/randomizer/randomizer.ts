import type { RandomizerBase } from "@/types";
import { RandomizerType } from "@/types";

export class Randomizer implements RandomizerBase {
	protected dp;

	constructor(dp: number) {
		this.dp = dp;
	}

	static parse(
		value: string
	): { type: RandomizerType; value: string } | null {
		if (value === "") return null;

		const hasPrintables = /[a-zA-Z0-9]/.test(value);
		const hasSpace = /\s/.test(value);
		const hasDot = /\./.test(value);
		const isNumber = !Number.isNaN(Number(value));
		const str = value.trim();

		if (hasPrintables) {
			if (hasSpace) {
				return { type: RandomizerType.ALPHANUMERIC, value: str };
			}
			if (isNumber && hasDot)
				return { type: RandomizerType.REAL, value: str };
			if (isNumber) return { type: RandomizerType.INTEGER, value: str };

			if (hasDot) return null;
			return { type: RandomizerType.ALPHABETIC, value: str };
		}

		return null;
	}

	randomize(min: number, max: number): number {
		const base = Math.random() * (max - min) + min;
		const dp = Math.floor(Math.random() * this.dp) + 1;

		return Number(base.toFixed(dp));
	}

	generate(min = 0, max = 100): string {
		return this.randomize(min, max).toString();
	}
}
