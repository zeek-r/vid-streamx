const video = require("./video");
const auth = require("./auth");

function init(app = {}) {
  const videoHandlers = video.init({ service: app.videoService });
  const authHandlers = auth.init({ service: app.authService });

  return {
    videoHandlers,
    authHandlers
  };
}

module.exports = { init };
