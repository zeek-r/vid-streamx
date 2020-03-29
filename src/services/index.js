const infrastructure = require("../infrastructure/index");
const video = require("./video");
const AWS = require("aws-sdk");

function init(config = {}) {
  console.log("starting adapters");

  AWS.config.update({
    accessKeyId: "AKIAZ4OHG7WIVQDOOACN",
    secretAccessKey: "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",
    region: "us-east-1"
  });
  const infra = infrastructure.init({ aws: AWS });

  const videoService = video.init({ infra: infra.videoInfra });

  return { videoService };
}

module.exports = { init };
