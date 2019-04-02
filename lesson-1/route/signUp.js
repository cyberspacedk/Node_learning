const path = require("path");
const fs = require("fs");

const saveUser = user => {
  //  путь куда записывать будем данные
  const filepath = path.join(
    __dirname,
    "../src/db/users/",
    `${user.userName}.json`
  );

  // записываем данные
  fs.writeFile(filepath, JSON.stringify(user), err => console.log(err));
};

const users = (request, response) => {
  if (request.method === "POST") {
    let requestBody = "";

    // событие 'data' , в колбеке будут входные данные
    request.on("data", data => {
      requestBody = data;
      console.log(requestBody);
    });

    // обрабытываем входные данные
    request.on("end", () => {
      // записываем данные в объект
      const userData = JSON.parse(requestBody);

      // вызываем ф-цию записи в файл
      saveUser(userData);

      // объект записи ответа
      const responseData = {
        status: "success",
        users: userData
      };

      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(responseData));
      response.end();
    });
  }
};

module.exports = users;
