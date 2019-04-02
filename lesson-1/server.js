const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const route = require("./route/route.js"); 

const logger = morgan("combined");


const startServer = port => {

  // создаем сервер
  const server = http.createServer((request, response) => {

    // парсим поле url в объекте request
    const parsedUrl = url.parse(request.url);

    const whatRoute = route[parsedUrl.pathname] || route.main;

    logger(request, response, () => {
      whatRoute(request, response); 

    });
    
  });

  // запускаем созданный сервер
  server.listen(port, err => (err) ? console.log("ERROR"): console.log("YES"));

};



module.exports = startServer;
