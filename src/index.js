// src/index.js
const ZookeeperJob = require('./jobs/zooKeeperJob');
const ZookeeperService = require('./services/zooKeeperService');

class App {
  static async start() {
    console.log('Starting the application...');
    await ZookeeperJob.registerNode();
    ZookeeperJob.run();
  }
}

App.start();

process.on('SIGINT', () => {
    ZookeeperJob.deregisterNode();
    process.exit();
});
