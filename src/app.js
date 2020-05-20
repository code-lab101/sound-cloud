const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Working");
});

app.listen(3001, () => {
  console.log(" app is listening on 3001");
});
