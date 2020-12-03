const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

app.listen(PORT, () => {
  console.log(`App on port ${PORT}`);
});
