import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib";
import {pipeline} from "stream";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const gzip = createGzip();
const sourceFile = createReadStream(join(__dirname,'fileToCompress.txt'));
const destinationFile = createWriteStream(join(__dirname,'archive.gz'));

const compress = async () => {
    pipeline(sourceFile, gzip, destinationFile, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await compress();