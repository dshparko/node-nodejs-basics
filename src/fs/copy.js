import fs from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const dirName = join(__dirname, "files");
const copyDirName = join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.promises.cp(dirName, copyDirName, {
      errorOnExist: true,
      force: false,
      recursive: true,
  });
  } catch (error) {
    console.error("FS operation failed");
  }
};

await copy();
