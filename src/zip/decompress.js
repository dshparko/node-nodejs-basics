import {createReadStream, createWriteStream} from "fs";
import zlib from "zlib";

const sourceFile = createWriteStream('./src/zip/files/fileToCompress.txt');
const destinationFile = createReadStream('./src/zip/files/archive.gz');
const unzip = zlib.createGunzip();
    
const decompress = async () => {
   
    destinationFile.pipe(unzip).pipe(sourceFile);
};

await decompress();