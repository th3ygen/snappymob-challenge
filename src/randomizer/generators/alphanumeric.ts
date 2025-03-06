import { Randomizer } from "@/randomizer";

export class AlphanumericGenerator extends Randomizer {
	private readonly PRINTABLES =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	private min;
	private max;
	private spaceMin;
	private spaceMax;

	/**
	 * Creates a new instance of AlphanumericRandomizer.
	 *
	 * @param {number} min - The minimum length of the generated string.
	 * @param {number} max - The maximum length of the generated string.
	 * @param {number} spaceMin - The minimum number of spaces to generate.
	 * @param {number} spaceMax - The maximum number of spaces to generate.
	 */
	constructor(
		min: number,
		max: number,
		spaceMin: number,
		spaceMax: number,
		dp = 6
	) {
		super(dp);
		this.min = min;
		this.max = max;
		this.spaceMin = spaceMin;
		this.spaceMax = spaceMax;
	}

	getSpaces() {
		const rnd = Math.ceil(this.randomize(this.spaceMin, this.spaceMax));

		return " ".repeat(rnd);
	}

	generate(): string {
		const len = Math.floor(this.randomize(this.min, this.max));

		const prefix = this.getSpaces();
		const suffix = this.getSpaces();

		let res = "";
		for (let i = 0; i < len; i++) {
			const content = this.PRINTABLES.charAt(
				Math.floor(Math.random() * this.PRINTABLES.length)
			);

			const total =
				content.length + res.length + prefix.length + suffix.length;
			if (total >= this.max) {
				break;
			}

			res += content;
		}

		return prefix + res + suffix;
	}
}
