import { Randomizer } from "@/randomizer";
import { readFile } from "fs/promises";

export async function processFile(path: string) {
	try {
		console.log("Reading file...");

		const data = await readFile(path, "utf-8");

		if (!data) {
			throw new Error("File is empty");
		}

		console.log("Done! Parsing data...");

		const list = data.split(",");
		const res = [];

		for (let item of list) {
			const parsed = Randomizer.parse(item);

			if (parsed) {
				console.log(parsed);
			}

			res.push(parsed);
		}

		console.log("Done!");
		return res;
	} catch (err) {
		console.error(err);
		return [];
	}
}
