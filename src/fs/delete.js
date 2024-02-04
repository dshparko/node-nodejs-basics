import fs from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemoveName = join(__dirname, "fileToRemove.txt");
const remove = async () => {
  try {
    await fs.promises.rm(fileToRemoveName);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
