import fs from "fs";
const dirToReadName = "./src/fs/files/";

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
