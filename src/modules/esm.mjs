import path from "path";
import { version, release} from "os";
import { createServer as createServerHttp } from "http";

import "./files/c.js";
import fs  from "fs";
import { fileURLToPath } from "url";

const random = Math.random();
const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

export let unknownObject;

if (random > 0.5) {
    unknownObject =fs.readFileSync(path.join(dirName, "files","a.json"));
} else {
    unknownObject = fs.readFileSync(path.join(dirName, "files", "b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});