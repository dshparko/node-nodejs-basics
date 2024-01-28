import fs from "fs";
const fileToRemoveName = "./src/fs/files/fileToRemove.txt";
const remove = async () => {
  try {
    await fs.promises.rm(fileToRemoveName);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
