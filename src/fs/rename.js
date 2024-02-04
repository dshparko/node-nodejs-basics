import fs from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const oldFileName = join(__dirname, "wrongFilename.txt");
const newFileName = join(__dirname, "properFilename.md");
const rename = async () => {
  try {
    await fs.promises.rename(oldFileName, newFileName);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await rename();
