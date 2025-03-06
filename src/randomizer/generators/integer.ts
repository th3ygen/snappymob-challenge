import { Randomizer } from "@/randomizer";

export class IntegerGenerator extends Randomizer {
	private min;
	private max;

	constructor(min: number, max: number, dp = 6) {
		super(dp);

		this.min = min;
		this.max = max;
	}

	generate(): string {
		const rnd = Math.floor(this.randomize(this.min, this.max));
		return rnd.toString();
	}
}
