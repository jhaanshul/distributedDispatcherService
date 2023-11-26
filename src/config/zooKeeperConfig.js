// src/config/zookeeperConfig.js
class ZookeeperConfig {
    static getConnectionString() {
      return 'localhost:2181'; 
    }

    static getPath() {
      return '/nodes/123'; 
    }
  }
  
  module.exports = ZookeeperConfig;
  