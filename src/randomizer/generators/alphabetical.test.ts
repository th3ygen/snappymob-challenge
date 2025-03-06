import { Randomizer } from "@/randomizer";
import { AlphabeticalGenerator } from "@/randomizer/generators";

const ITERATIONS = 20;

const MIN = 5;
const MAX = 30;

describe.each(Array.from({ length: ITERATIONS }))("StringRandomizer", () => {
	let randomizer: Randomizer;
	let result: string;

	beforeAll(() => {
		randomizer = new AlphabeticalGenerator(MIN, MAX);
	});

	beforeEach(() => {
		result = randomizer.generate();
	});

	it("should generate a string", () => {
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		expect(typeof result).toBe("string");
	});

	it(`should generate a string with a length between ${MIN} and ${MAX}`, () => {
		expect(result.length).toBeGreaterThanOrEqual(MIN);
		expect(result.length).toBeLessThanOrEqual(MAX);
	});

	it("should generate printable characters", () => {
		expect(result).toMatch(/^[a-zA-Z0-9]+$/);
	});

	it("should generate random string", () => {
		expect(result).not.toBe(randomizer.generate());
	});
});
