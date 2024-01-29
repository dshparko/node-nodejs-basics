import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib";
import {pipeline} from "stream";

const gzip = createGzip();
const sourceFile = createReadStream('./src/zip/files/fileToCompress.txt');
const destinationFile = createWriteStream('./src/zip/files/archive.gz');

const compress = async () => {
    pipeline(sourceFile, gzip, destinationFile, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await compress();