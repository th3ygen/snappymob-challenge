import { RealGenerator } from "@/randomizer/generators";
import { Randomizer } from "@/randomizer";

const ITERATIONS = 20;

const MIN = -1000;
const MAX = 1000;
const DP = 6;

describe.each(Array.from({ length: ITERATIONS }))("RealRandomizer", () => {
	let randomizer: Randomizer;
	let result: string;

	beforeAll(() => {
		randomizer = new RealGenerator(MIN, MAX, DP);
	});

	beforeEach(() => {
		result = randomizer.generate();
	});

	it("should generate a number", () => {
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		expect(typeof result).toBe("string");
		expect(Number(result)).not.toBeNaN();
	});

	it(`should generate a number between ${MIN} and ${MAX}`, () => {
		expect(Number(result)).toBeGreaterThanOrEqual(MIN);
		expect(Number(result)).toBeLessThanOrEqual(MAX);
	});

	it("should be unique", () => {
		expect(result).not.toBe(randomizer.generate());
	});
});
