import fs from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "fileToWrite.txt");
const stream = fs.createWriteStream(filePath)

const write = async () => {
    stream.on("data", (chunk) => process.stdout.write(chunk));

    process.stdin.on("data", (data) => stream.write(data));
    process.on("SIGINT", () => process.exit());
    process.on("exit", () => stream.end());
};

await write();