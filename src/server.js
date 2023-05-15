const Hapi = require("@hapi/hapi");
const routes = require("./routes.js");

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  process.on("unhandledRejection", (err) => {
    if (err) {
      console.log(err.message);
    }
  });

  await server.start();
  console.log(`Server sedang berjalan di ${server.info.uri}`);
};

init();
