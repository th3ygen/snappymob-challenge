import { RandomizerFactory } from "@/randomizer/factory";
import { writeFile, mkdir, symlink } from "fs/promises";

// consume first argument as output path
// example: node a.js ./random.txt
let path = process.argv[2] ?? "./out";

// consume second argument as filename
// example: node a.js ./random.txt random.txt
let filename = process.argv[3] ?? "random.txt";

// 10mb
const MAX_SIZE_BYTES = 10 * 1024 * 1024;

const alphabeticRandomizer = new RandomizerFactory(
	RandomizerFactory.TYPES.ALPHABETIC
)
	.setMin(5)
	.setMax(30)
	.createRandomizer();

const realRandomizer = new RandomizerFactory(RandomizerFactory.TYPES.REAL)
	.setMin(-1000)
	.setMax(1000)
	.setDp(6)
	.createRandomizer();

const integerRandomizer = new RandomizerFactory(RandomizerFactory.TYPES.INTEGER)
	.setMin(-1000)
	.setMax(1000)
	.createRandomizer();

const alphanumericRandomizer = new RandomizerFactory(
	RandomizerFactory.TYPES.ALPHANUMERIC
)
	.setMin(5)
	.setMax(30)
	.setSpaceMin(1)
	.setSpaceMax(10)
	.createRandomizer();

const randomizers = [
	alphabeticRandomizer,
	realRandomizer,
	integerRandomizer,
	alphanumericRandomizer,
];

(async () => {
	try {
		console.log("Generating random data...");

		let size = 0;

		let list = [];
		while (size < MAX_SIZE_BYTES) {
			const rnd = Math.floor(Math.random() * 4);
			const randomizer = randomizers[rnd];

			const data = randomizer.generate();

			list.push(data);

			// + 1 for the comma
			size += data.length + 1;
		}

		console.log("Done! Saving data as random.txt...");

		// create directory if it doesn't exist
		await mkdir(path, { recursive: true });

		// create data as file, seperated by comma
		await writeFile(path + "/" + filename, list.join(","));

		// log the file path and size in MB
		console.log("Done! File saved to random.txt");
	} catch (err) {
		console.error(err);
	}
})();
