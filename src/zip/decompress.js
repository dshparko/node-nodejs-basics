import {createReadStream, createWriteStream} from "fs";
import zlib from "zlib";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const sourceFile = createWriteStream(join(__dirname,'files', 'fileToCompress.txt'));
const destinationFile = createReadStream(join(__dirname,'files','archive.gz'));
const unzip = zlib.createGunzip();
    
const decompress = async () => {
   
    destinationFile.pipe(unzip).pipe(sourceFile);
};

await decompress();