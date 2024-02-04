import fs from "fs";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const dirToReadName = join(__dirname, "files/");

const list = async () => {
  try {
    const files = await fs.promises.readdir(dirToReadName, "utf-8");
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error("FS operation failed");
  }
};

await list();
