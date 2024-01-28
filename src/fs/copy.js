import fs from "fs";
const dirName = "./src/fs/files/";
const copyDirName = "./src/fs/files_copy/";

const copy = async () => {
  try {
    await fs.promises.cp(dirName, copyDirName);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await copy();
