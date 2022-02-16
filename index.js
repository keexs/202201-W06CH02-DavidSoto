const http = require("http");
require("./.env");

const server = http.createServer();

const port = process.env.SERVER_PORT || 6969;
server.listen(port);

server.on("request", (request, response) => {
    response.statusCode = 200;
    response.write("Hellops");
    response.end();
});
