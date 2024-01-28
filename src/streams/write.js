import fs from "fs";
const filePath = "./src/streams/files/fileToWrite.txt"
const stream = fs.createWriteStream(filePath)

const write = async () => {
    stream.on("data", (chunk) => process.stdout.write(chunk));

    process.stdin.on("data", (data) => stream.write(data));
    process.on("SIGINT", () => process.exit());
    process.on("exit", () => stream.end());
};

await write();