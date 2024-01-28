import fs from "fs";
const fileToReadName = "./src/fs/files/fileToRead.txt";

const read = async () => {
  try {
    const content = await fs.promises.readFile(fileToReadName, "utf-8");
    console.log(content);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await read();
