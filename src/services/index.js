const infrastructure = require("../infrastructure/index");
const video = require("./video");
const AWS = require("aws-sdk");

function init(config = {}) {
  console.log("starting adapters");

  AWS.config.update({
    accessKeyId: "AWS_ACCESS_KEY_ID_REDACTED",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY_REDACTED",
    region: "us-east-1"
  });
  const infra = infrastructure.init({ aws: AWS });

  const videoService = video.init({ infra: infra.videoInfra });

  return { videoService };
}

module.exports = { init };
