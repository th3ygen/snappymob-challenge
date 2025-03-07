/* 
Challenge B

Create a program that will read the generated file above
and print to the console the object andits type. Spaces
before and after the alphanumeric object must be
stripped.
*/

import { Randomizer } from "@/randomizer";
import { readFile } from "fs/promises";

async function processFile(path: string) {
	try {
		console.log("Reading file...");

		const data = await readFile(path, "utf-8");

		console.log("Done! Parsing data...");

		const list = data.split(",");

		for (let item of list) {
			const parsed = Randomizer.parse(item);

			if (parsed) {
				console.log(parsed);
			}
		}

		console.log("Done!");
	} catch (err) {
		console.error(err);
	}
}

(async () => {
	try {
		console.log("Reading file...");

		const data = await readFile("random.txt", "utf-8");

		console.log("Done! Parsing data...");

		const list = data.split(",");

		for (let item of list) {
			const parsed = Randomizer.parse(item);

			if (parsed) {
				console.log(parsed);
			}
		}

		console.log("Done!");
	} catch (err) {
		console.error(err);
	}
})();
