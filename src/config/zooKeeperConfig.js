// src/config/zookeeperConfig.js
var process = require('process')

class ZookeeperConfig {
    static getConnectionString() {
      return 'localhost:2181'; 
    }

    // static getPath() {
    //   return '/nodes/123'; // this id needs to be changed for each different machine
    // }
    static getPath() {
      return `/nodes/${process.pid}`; // this id needs to be changed for each different machine
    }
  }
  
  module.exports = ZookeeperConfig;
  