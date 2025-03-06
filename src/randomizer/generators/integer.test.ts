import { IntegerGenerator } from "@/randomizer/generators";
import { Randomizer } from "@/randomizer";

const ITERATIONS = 20;

const MIN = -1000;
const MAX = 1000;

describe.each(Array.from({ length: ITERATIONS }))("IntegerRandomizer", () => {
	let randomizer: Randomizer;
	let result: string;

	beforeAll(() => {
		randomizer = new IntegerGenerator(MIN, MAX);
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

	it("should be an integer", () => {
		expect(Number(result)).toBe(parseInt(result));
	});

	it(`should generate a number between ${MIN} and ${MAX}`, () => {
		expect(Number(result)).toBeGreaterThanOrEqual(MIN);
		expect(Number(result)).toBeLessThanOrEqual(MAX);
	});
});
