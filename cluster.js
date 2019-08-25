const cluster = require('cluster');

if (cluster.isMaster) {
    const osType = require('os').platform();
    const cpuCount = require('os').cpus().length;
    console.log(`Master ${process.pid} is running`);
    console.log('Server is running on ' + osType + ' with ' + cpuCount + 'x CPUs');

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('exit', function() {
        cluster.fork();
    });
} else {
    require('./server');
}