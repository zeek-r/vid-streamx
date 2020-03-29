let videoInfra = null;

function getStream({ key = "", rootDir = "sample/" }) {
  console.log(key, "\nthis is key \n");
  return videoInfra.getFile({ key: key, bucket: "vod-lms" });
}

function init({ infra = {} }) {
  videoInfra = infra;
  return { getStream };
}

module.exports = { init };
