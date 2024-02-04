import { fork } from "child_process";

import { fileURLToPath } from "url";
import { join, dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = join(__dirname, "files/script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(fileName, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([0, '', 'temp', true]);