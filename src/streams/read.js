import fs from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "fileToRead.txt");
const stream = fs.createReadStream(filePath);

const read = async () => {
    
    stream.on("data", (chunk) => process.stdout.write(chunk));
};

await read();