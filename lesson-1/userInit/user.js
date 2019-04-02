
fetch("http://localhost:9000/users", {
    method: "POST",
    body: JSON.stringify({
      uid: "313",
      userName: "JohnDoe",
      balance: 9999,
      password: "1234",
      email: "Ivan@gmail.com"
    }),
    headers: { "content-type": "application/json" }
  })