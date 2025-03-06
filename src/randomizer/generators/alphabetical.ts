import { Randomizer } from "@/randomizer";

export class AlphabeticalGenerator extends Randomizer {
	private readonly PRINTABLES =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	private min;
	private max;

	/**
	 * Creates an instance of AlphabeticalRandomizer.
	 *
	 * @param {number} min - The minimum length of the generated string.
	 * @param {number} max - The maximum length of the generated string.
	 */

	constructor(min: number, max: number, dp = 6) {
		super(dp);

		this.min = min;
		this.max = max;
	}

	/**
	 * Generates a random string of a length between MIN and MAX.
	 *
	 * The string is composed of characters from the CHARS constant,
	 * which includes uppercase letters, lowercase letters, and digits.
	 *
	 * @returns {string} A randomly generated string.
	 */
	generate(): string {
		const len = Math.floor(this.randomize(this.min, this.max));

		let res = "";
		for (let i = 0; i < len; i++) {
			res += this.PRINTABLES.charAt(
				Math.floor(Math.random() * this.PRINTABLES.length)
			);
		}

		return res;
	}
}
