import fs from "fs";
const fileName = "./src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
  try {
    await fs.promises.writeFile(fileName, fileContent, "wx");
  } catch (error) {
    console.error("FS operation failed");
  }
};

await create();
