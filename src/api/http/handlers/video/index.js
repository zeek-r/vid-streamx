function getStream(req, res, next) {
  console.log("key here", req.params);
  const stream = videoService.getStream({ key: req.params[0] });
  stream.on("error", err => {
    console.log(err);
  });
  stream.pipe(res);
}

let videoService = null;

function init({ service = {} }) {
  videoService = service;
  return {
    getStream
  };
}

module.exports = { init };
