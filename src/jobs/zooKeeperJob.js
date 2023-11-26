// src/jobs/ZookeeperJob.js
const cron = require('node-cron');
const ZookeeperService = require('../services/zooKeeperService');

class ZookeeperJob {
  static zookeeperService = new ZookeeperService();
  static async run() {
    // run the cron every minute
    cron.schedule('* * * * *', async () => {
      console.log('Running cron job...');
      // const zookeeperService = new ZookeeperService();

      const ids = await this.zookeeperService.fetchData();
      console.log("got the ids: ", ids);
    });
  }

  static  async registerNode() {
    // const zookeeperService = new ZookeeperService();
    await this.zookeeperService.createNode();
    console.log("node created: , ")
  }

  static deregisterNode() {
    // const zookeeperService = new ZookeeperService();
    this.zookeeperService.close();
  }
}

module.exports = ZookeeperJob;
