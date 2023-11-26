// src/services/ZookeeperService.js
const zookeeper = require('node-zookeeper-client');
const ZookeeperConfig = require('../config/zooKeeperConfig');

class ZookeeperService {
  #client;

  constructor() {
    this.#client = zookeeper.createClient(ZookeeperConfig.getConnectionString());

    // Connect the client once during the instantiation of the service
    this.#client.connect();
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      this.#client.getData(ZookeeperConfig.getPath(), (error, data) => {
        if (error) {
          console.error('Error fetching data from ZooKeeper:', error);
          reject(error);
        } else {
          const ids = data.toString('utf8');
          console.log('Fetched IDs from ZooKeeper:', ids);
          resolve(ids);
        }
      });
    });
  }

  createNode() {
    return new Promise((resolve, reject) => {
      const parentNode = '/nodes'; // Use the parent path
      const nodeData = { id: 123 };

      // Check if the parent node exists
      this.#client.exists(parentNode, (error, stat) => {
        if (error) {
          console.error('Error checking parent node existence:', error);
          reject(error); // Reject the promise if there is an error
          return;
        }

        if (stat) {
          // Parent node exists, proceed to create the child node
          this.#client.create(
            ZookeeperConfig.getPath(), // Provide a child path under the parent
            // Buffer.from(JSON.stringify(nodeData)),
            zookeeper.CreateMode.EPHEMERAL,
            (createError, path) => {
              if (createError) {
                console.error(createError.stack);
                reject(createError); // Reject the promise if there is an error during node creation
                return;
              }

              console.log('Node: %s is created.', path);
              resolve(path); // Resolve the promise with the created node path
            }
          );
        } else {
          const errorMessage = 'Parent node does not exist.';
          console.error(errorMessage);
          reject(new Error(errorMessage)); // Reject the promise with an error object
        }
      });
    });
  }

  close() {
    this.#client.close();
  }
}

module.exports = ZookeeperService;
