const video = require("./video");

function init({ aws = {} }) {
  const s3 = new aws.S3();
  const videoInfra = video.init({ S3: s3 });

  return {
    videoInfra
  };
}

module.exports = { init };
