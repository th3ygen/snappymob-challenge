import { Randomizer } from "@/randomizer";

const ITERATIONS = 20;

const MIN = 0;
const MAX = 100;
const DP = 6;

describe.each(Array.from({ length: ITERATIONS }))("Randomizer", () => {
	let randomizer: Randomizer;
	let result: number;

	beforeEach(() => {
		randomizer = new Randomizer(DP);
		result = randomizer.randomize(MIN, MAX);
	});

	it("should generate a number", () => {
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		expect(typeof result).toBe("number");
	});

	it(`should generate a number between ${MIN} and ${MAX}`, () => {
		expect(result).toBeGreaterThanOrEqual(0);
		expect(result).toBeLessThanOrEqual(100);
	});

	it("should generate random number", () => {
		expect(result).not.toBe(randomizer.randomize(MIN, MAX));
	});

	it("should implements generate method", () => {
		expect(randomizer.generate()).toBeDefined();
		expect(randomizer.generate()).not.toBeNull();
		expect(typeof randomizer.generate()).toBe("string");
	});
});
