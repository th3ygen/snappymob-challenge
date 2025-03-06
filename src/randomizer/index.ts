import type { RandomizerBase } from "@/types";

export class Randomizer implements RandomizerBase {
	protected dp;

	constructor(dp: number) {
		this.dp = dp;
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
