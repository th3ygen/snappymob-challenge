import { processFile } from "@/utils/process-data";
import { writeFile } from "fs/promises";

let path = process.argv[2] ?? "./out/random.txt";
let out = process.argv[3] ?? "./out/parsed.csv";

(async () => {
	try {
		console.log("Parsing data...");

		const res = await processFile(path);

		let csv = "type,value\n";

		for (let item of res) {
			if (item) {
				csv += `${item.type},${item.value}\n`;
			}
		}

		console.log(`Done! Saving data as ${out}...`);

		await writeFile(out, csv);

		console.log(`Done! File saved to ${out}`);
	} catch (err) {
		console.error(err);
	}
})();
