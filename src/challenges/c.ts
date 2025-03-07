// consume first argument as path

import { processFile } from "./b";

// example: node b.js ./random.txt
const path = process.argv[2];

if (!path) {
	console.error("No path provided");
	process.exit(1);
}

processFile(path);
