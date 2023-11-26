# distributedDispatcherService
A distributed dispatcher service that operates on a range of ids/data managed by zookeeper as the coordinating service

U would need to setup some basic things before running this
1. Zookeeper Server up and running which this service would connect to
    https://zookeeper.apache.org/releases.html
    In the ZooKeeper installation directory, find the conf folder, and create a file named zoo.cfg (if it doesn't already exist).

    Add the following minimal configuration to zoo.cfg
    dataDir=/path/to/data
    clientPort=2181

    start the server: ./bin/zkServer.sh start
    we can verify the connection by running ./bin/zkCli.sh -server localhost:2181

2. Clone this service
    npm install
    npm run start

3. Customize the processing logic accoring to need

