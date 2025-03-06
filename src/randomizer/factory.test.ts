import { RandomizerFactory } from "@/randomizer/factory";
import { Randomizer } from "@/randomizer";
import {
	AlphabeticalGenerator,
	AlphanumericGenerator,
	IntegerGenerator,
	RealGenerator,
} from "@/randomizer/generators";

const ITERATIONS = 20;
const MIN = 5;
const MAX = 30;
const DP = 6;
const SPACE_MIN = 1;
const SPACE_MAX = 10;

describe.each(Array.from({ length: ITERATIONS }))("RandomizerFactory", () => {
	let alphabeticRandomizer: Randomizer;
	let alphanumericRandomizer: Randomizer;
	let realRandomizer: Randomizer;
	let integerRandomizer: Randomizer;

	beforeAll(() => {
		let factory;

		factory = new RandomizerFactory(RandomizerFactory.TYPES.ALPHABETIC);
		alphabeticRandomizer = factory
			.setDp(DP)
			.setMin(MIN)
			.setMax(MAX)
			.createRandomizer();

		factory = new RandomizerFactory(RandomizerFactory.TYPES.ALPHANUMERIC);
		alphanumericRandomizer = factory
			.setDp(DP)
			.setMin(MIN)
			.setMax(MAX)
			.setSpaceMin(SPACE_MIN)
			.setSpaceMax(SPACE_MAX)
			.createRandomizer();

		factory = new RandomizerFactory(RandomizerFactory.TYPES.REAL);
		realRandomizer = factory
			.setDp(DP)
			.setMin(MIN)
			.setMax(MAX)
			.createRandomizer();

		factory = new RandomizerFactory(RandomizerFactory.TYPES.INTEGER);
		integerRandomizer = factory.setMin(MIN).setMax(MAX).createRandomizer();
	});

	it("should create alphabetical randomizer", () => {
		expect(alphabeticRandomizer).toBeInstanceOf(AlphabeticalGenerator);
	});

	it("should create alphanumeric randomizer", () => {
		expect(alphanumericRandomizer).toBeInstanceOf(AlphanumericGenerator);
	});

	it("should create real randomizer", () => {
		expect(realRandomizer).toBeInstanceOf(RealGenerator);
	});

	it("should create integer randomizer", () => {
		expect(integerRandomizer).toBeInstanceOf(IntegerGenerator);
	});

	it("should create randomizer", () => {
		expect(alphabeticRandomizer).toBeInstanceOf(Randomizer);
		expect(alphanumericRandomizer).toBeInstanceOf(Randomizer);
		expect(realRandomizer).toBeInstanceOf(Randomizer);
		expect(integerRandomizer).toBeInstanceOf(Randomizer);
	});

	it("should create an IntegerGenerator", () => {
		const factory = new RandomizerFactory(RandomizerFactory.TYPES.INTEGER);
		const randomizer = factory.createRandomizer();
		expect(randomizer).toBeInstanceOf(IntegerGenerator);
	});

	it("should create a RealGenerator", () => {
		const factory = new RandomizerFactory(RandomizerFactory.TYPES.REAL);
		const randomizer = factory.createRandomizer();
		expect(randomizer).toBeInstanceOf(RealGenerator);
	});

	it("should create an AlphabeticalGenerator", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.ALPHABETIC
		);
		const randomizer = factory.createRandomizer();
		expect(randomizer).toBeInstanceOf(AlphabeticalGenerator);
	});

	it("should create an AlphanumericGenerator", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.ALPHANUMERIC
		);
		const randomizer = factory.createRandomizer();
		expect(randomizer).toBeInstanceOf(AlphanumericGenerator);
	});

	it("should set min and max values", () => {
		const factory = new RandomizerFactory(RandomizerFactory.TYPES.INTEGER)
			.setMin(10)
			.setMax(20);
		expect(factory.getMin()).toBe(10);
		expect(factory.getMax()).toBe(20);
	});

	it("should set dp value", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.REAL
		).setDp(4);
		expect(factory.getDp()).toBe(4);
	});

	it("should set spaceMin and spaceMax values for AlphanumericGenerator", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.ALPHANUMERIC
		)
			.setSpaceMin(2)
			.setSpaceMax(8);
		expect(factory.getSpaceMin()).toBe(2);
		expect(factory.getSpaceMax()).toBe(8);
	});

	it("should return the correct randomizer type", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.ALPHABETIC
		);
		expect(factory.getRandomizerType()).toBe(
			RandomizerFactory.TYPES.ALPHABETIC
		);
	});

	it("should set all parameters and generate correct randomizer", () => {
		const factory = new RandomizerFactory(
			RandomizerFactory.TYPES.ALPHANUMERIC
		)
			.setMin(1)
			.setMax(10)
			.setDp(2)
			.setSpaceMin(3)
			.setSpaceMax(5);

		const randomizer = factory.createRandomizer();

		expect(randomizer).toBeInstanceOf(AlphanumericGenerator);
		expect(factory.getMin()).toBe(1);
		expect(factory.getMax()).toBe(10);
		expect(factory.getDp()).toBe(2);
		expect(factory.getSpaceMin()).toBe(3);
		expect(factory.getSpaceMax()).toBe(5);
	});

	it("should return Randomizer if no type is set", () => {
		const factory = new RandomizerFactory();
		const randomizer = factory.createRandomizer();

		expect(randomizer).toBeInstanceOf(Randomizer);
	});
});
