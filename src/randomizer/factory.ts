import { RandomizerType } from "@/types";
import {
	AlphabeticalGenerator,
	RealGenerator,
	IntegerGenerator,
	AlphanumericGenerator,
} from "@/randomizer/generators";
import { Randomizer } from "@/randomizer";

export class RandomizerFactory {
	private min = 5;
	private max = 30;
	private dp = 6;
	private spaceMin = 1;
	private spaceMax = 10;

	private type;

	static readonly TYPES = RandomizerType;

	constructor(type: RandomizerType | undefined = undefined) {
		this.type = type;
	}

	setMin(min: number): RandomizerFactory {
		this.min = min;
		return this;
	}

	setMax(max: number): RandomizerFactory {
		this.max = max;
		return this;
	}

	setDp(dp: number): RandomizerFactory {
		this.dp = dp;
		return this;
	}

	setSpaceMin(spaceMin: number): RandomizerFactory {
		this.spaceMin = spaceMin;
		return this;
	}

	setSpaceMax(spaceMax: number): RandomizerFactory {
		this.spaceMax = spaceMax;
		return this;
	}

	getRandomizerType(): RandomizerType | undefined {
		return this.type;
	}

	getMin(): number {
		return this.min;
	}

	getMax(): number {
		return this.max;
	}

	getDp(): number {
		return this.dp;
	}

	getSpaceMin(): number {
		return this.spaceMin;
	}

	getSpaceMax(): number {
		return this.spaceMax;
	}

	createRandomizer(): Randomizer {
		switch (this.type) {
			case "integer":
				return new IntegerGenerator(this.min, this.max, this.dp);
			case "real":
				return new RealGenerator(this.min, this.max, this.dp);
			case "alphabetic":
				return new AlphabeticalGenerator(this.min, this.max, this.dp);
			case "alphanumeric":
				return new AlphanumericGenerator(
					this.min,
					this.max,
					this.spaceMin,
					this.spaceMax,
					this.dp
				);
			default:
				return new Randomizer(this.dp);
		}
	}
}
