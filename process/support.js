/**
 * 子进程执行的代码
 */
const sleep = require('sleep');
console.log("进程 " + process.argv[2] + " 执行。");
sleep.sleep(1)