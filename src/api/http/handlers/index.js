const video = require("./video");

function init(app = {}) {
  const videoHandlers = video.init({ service: app.videoService });

  return {
    videoHandlers
  };
}

module.exports = { init };
