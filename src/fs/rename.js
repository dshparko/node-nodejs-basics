import fs from "fs";
const oldFileName = "./src/fs/files/wrongFilename.txt";
const newFileName = "./src/fs/files/properFilename.md";
const rename = async () => {
  try {
    await fs.promises.rename(oldFileName, newFileName);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await rename();
