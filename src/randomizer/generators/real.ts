import { Randomizer } from "@/randomizer";

export class RealGenerator extends Randomizer {
	private min;
	private max;

	constructor(min: number, max: number, dp = 6) {
		super(dp);

		this.min = min;
		this.max = max;
	}

	generate(): string {
		const rnd = this.randomize(this.min, this.max);
		// to dp and remove trailing 0s
		return rnd + "";
	}
}
