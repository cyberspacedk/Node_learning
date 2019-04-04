fetch("/removeuser/313", {
  method: "DELETE",
  headers: { "content-type": "application/json" }
})
  .then(response => {
    response.text().then(data => {
      document.body.innerHTML = data;
    });
  })
  .catch(err => {
    console.log(err);
  });


fetch("/removefile/")
  .then(response => {
    response.text().then(data => {
      document.body.innerHTML = data;
    });
  })
  .catch(err => {
    console.log(err);
  });
