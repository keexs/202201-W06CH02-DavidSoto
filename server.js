require("dotenv").config();
const debug = require("debug")("calculator:server");
const http = require("http");
const url = require("url");
const chalk = require("chalk");

const server = http.createServer();

const port = process.env.SERVER_PORT || 6969;
server.listen(port, () => {
    debug(chalk.redBright(`Server is up => http://localhost:${port}`));
});

server.on("error", (error) => {
    debug(`Error on server ${port}: ${error.message}`);
});

server.on("request", (request, response) => {
    debug(`Request arrived ${request.url} with method ${request.method}`);
    const queryParams = url.parse(request.url, true).query;
    console.log(queryParams);
});

server.on("request", (request, response) => {
    response.statusCode = 200;
    response.write("Hellops");
    response.end();
});
