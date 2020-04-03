const { http } = require("./src/api");
const services = require("./src/services");
const config = require("./src/commons/config");

const main = () => {
  const app = services.init();
  const { server } = http.init(app);

  server.listen(config.apiPort, () => {
    console.log("started at 3000");
  });
};

main();
