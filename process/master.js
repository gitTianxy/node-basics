/**
 * 父进程调度子进程执行
 * 1. exec
 * 2. spawn
 * 3. fork
 */

// require
const fs = require('fs');
const child_process = require('child_process');
const SURPPORT_PATH = 'process/support.js'
const util = require('util')


// 1. exec demo: execute cmd with certain callbacks
// execDemo()
function execDemo() {
    for (var i = 0; i < 3; i++) {
        var workerProcess = child_process.exec(util.format('node %s %d', SURPPORT_PATH, i),
            // callback 1
            (error, stdout, stderr) => {
                if (error) {
                    console.log(error.stack);
                    console.log('Error code: ' + error.code);
                    console.log('Signal received: ' + error.signal);
                }
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
            });

        // callback 2
        workerProcess.on('exit', (code) => {
            console.log('子进程已退出，退出码 ' + code);
        });
    }
}

// 2. spawn demo
// spawnDemo()
function spawnDemo() {
    for (var i = 0; i < 3; i++) {
        var workerProcess = child_process.spawn('node', [SURPPORT_PATH, i]);

        workerProcess.stdout.on('data', (data) => {
            console.log('stdout: ' + data);
        });

        workerProcess.stderr.on('data', (data) => {
            console.log('stderr: ' + data);
        });

        workerProcess.on('close', (code) => {
            console.log('子进程已退出，退出码 ' + code);
        });
    }
}

// 3. fork demo
forkDemo()
function forkDemo() {
    for (var i = 0; i < 3; i++) {
        var worker_process = child_process.fork(SURPPORT_PATH, [i]);

        worker_process.on('close', (code) => {
            console.log('子进程已退出，退出码 ' + code);
        });
    }
}