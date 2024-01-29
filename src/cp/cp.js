import { fork } from "child_process";

const fileName = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
  const childProcess = fork(fileName, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess([0, '', 'temp', true]);