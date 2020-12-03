const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", () => {
  console.log("Ruta principal de la app");
});

app.listen(PORT, () => {
  console.log(`App on port ${PORT}`);
});
