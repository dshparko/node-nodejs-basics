import crypto from "crypto";
import fs from "fs";
const calculateHash = async () => {
  const tempFile = "./src/hash/files/fileToCalculateHashFor.txt";

  const hash = crypto.createHash("sha256");

  const stream = fs.createReadStream(tempFile);
  stream.on("readable", () => {
    const data = stream.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

await calculateHash();
