import fs from "fs";
const filePath = "./src/streams/files/fileToRead.txt"
const stream = fs.createReadStream(filePath);

const read = async () => {
    
    stream.on("data", (chunk) => process.stdout.write(chunk));
};

await read();