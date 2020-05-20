const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("hello");
  res.send("Working");
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
