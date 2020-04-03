async function getStream(req, res, next) {
  console.log("key here", req.params);
  const stream = await videoService.getStream({ key: req.params[0] });
  stream.on("error", err => {
    console.error(err);
    res.status(err.statusCode || 500).send({message: err.message});
    return;
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
