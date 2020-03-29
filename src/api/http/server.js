const express = require("express");
const routes = require("./routes");
const handlers = require("./handlers");
const cors = require("cors");

function init(app) {
  const server = express();
  const router = express.Router();

  server.use((req, res, next) => {
    console.log(req.method);
    return next();
  });

  const corsOptions = {
    origin: "*"
  };
  server.use(cors(corsOptions));

  server.use(router);
  const hndlers = handlers.init(app);

  routes.init(router, hndlers);
  return { server };
}

module.exports = { init };
