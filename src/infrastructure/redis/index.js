const redis = require("redis");
const config = require("../../commons/config");

let conn = null;
let retryCounter = 0;

const getObject = async (key) => {
  // return { "token": "test-token", userID: key }
  return new Promise((resolve, reject) => {
    conn.get(key, (err, value) => {
      if (err) {
        return reject(err)
      }
      resolve(value);
    })
  })
}


function init() {
  if (conn !== null) {
    return conn;
  }

  conn = redis.createClient({
    host: config.redisHost,
    port: config.redisPort
  });

  conn.on("error", errorHandler);

  conn.getObject = getObject;
  return conn;
}

function errorHandler(error) {
  console.error(error);
  retryCounter++;
  if(retryCounter === config.redisRetryCount) {
    console.error(`retry counter exceeded: ${retryCounter}, exiting`);
    process.exit(0);
  }
  init();
  return;
}

module.exports = { init }