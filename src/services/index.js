const infrastructure = require("../infrastructure/index");
const video = require("./video");
const auth = require("./auth");
const AWS = require("aws-sdk");

function init(config = {}) {
  console.log("starting adapters");

  AWS.config.update({
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecretKey,
    region: config.awsRegion
  });
  const infra = infrastructure.init({ aws: AWS });

  const authService = auth.init({ infra: infra.redisInfra });
  const videoService = video.init({ infra: infra.videoInfra });

  return { videoService, authService };
}

module.exports = { init };
