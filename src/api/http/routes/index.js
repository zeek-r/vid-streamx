function init(router, handlers) {
  console.log("loading routes");
  // Fill in routes, can multiplex to more files, if required
  router
    .route("/")
    .get((req, res, next) => {
      res.json({ hello: "world" });
    })
    .all((req, res) => {
      res.status(405).send({ message: "Not allowed" });
    });

  router.route("/stream/*").get(handlers.authHandlers.authenticate, handlers.videoHandlers.getStream);

  // 404 handlers, handle 405 in individual route like above
  router.route("*").all((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  });
}

module.exports = { init };
