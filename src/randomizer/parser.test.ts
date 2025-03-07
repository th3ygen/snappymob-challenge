import { Randomizer } from "@/randomizer";
import { RandomizerType } from "@/types";

describe("Parser", () => {
	const { parse } = Randomizer;

	it("should return null", () => {
		expect(parse("")).toBe(null);
		expect(parse(" ")).toBe(null);
		expect(parse("avc.123")).toBe(null);
		expect(parse("_")).toBe(null);
	});

	it("should parse alphabetic", () => {
		expect(parse("abc")).toEqual({
			type: RandomizerType.ALPHABETIC,
			value: "abc",
		});
		expect(parse("ABC")).toEqual({
			type: RandomizerType.ALPHABETIC,
			value: "ABC",
		});
	});

	it("should parse alphanumeric", () => {
		expect(parse(" abc123  ")).toEqual({
			type: RandomizerType.ALPHANUMERIC,
			value: "abc123",
		});
		expect(parse("  ABC123    ")).toEqual({
			type: RandomizerType.ALPHANUMERIC,
			value: "ABC123",
		});
	});

	it("should parse integer", () => {
		expect(parse("123")).toEqual({
			type: RandomizerType.INTEGER,
			value: "123",
		});
		expect(parse("-123")).toEqual({
			type: RandomizerType.INTEGER,
			value: "-123",
		});
	});

	it("should parse real", () => {
		expect(parse("123.123")).toEqual({
			type: RandomizerType.REAL,
			value: "123.123",
		});
		expect(parse("-123.123")).toEqual({
			type: RandomizerType.REAL,
			value: "-123.123",
		});
	});
});
