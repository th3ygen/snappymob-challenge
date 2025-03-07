/* 
Challenge B

Create a program that will read the generated file above
and print to the console the object andits type. Spaces
before and after the alphanumeric object must be
stripped.
*/

import { processFile } from "@/utils/process-data";

// consume first argument as path
// example: node b.js ./random.txt
const path = process.argv[2] ?? "./out/random.txt";
processFile(path);
