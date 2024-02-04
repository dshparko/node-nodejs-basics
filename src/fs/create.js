import fs from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const fileContent = "I am fresh and young";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.promises.writeFile(fileName, fileContent, { flag: "wx" });
  } catch (error) {
    console.error("FS operation failed");
  }
};

await create();
