const { http } = require("./src/api");
const services = require("./src/services");

const main = () => {
  const app = services.init();
  const { server } = http.init(app);

  server.listen("3000", () => {
    console.log("started at 3000");
  });
};

main();
