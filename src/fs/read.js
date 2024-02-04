import fs from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToReadName = join(__dirname, "fileToRead.txt");

const read = async () => {
  try {
    const content = await fs.promises.readFile(fileToReadName, "utf-8");
    console.log(content);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
