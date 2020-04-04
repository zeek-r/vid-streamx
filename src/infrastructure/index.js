const video = require("./video");
const redis = require("./redis");

function init({ aws = {} }) {
  const s3 = new aws.S3();
  const videoInfra = video.init({ S3: s3 });
  const redisInfra = redis.init();

  return {
    videoInfra,
    redisInfra
  };
}

module.exports = { init };
