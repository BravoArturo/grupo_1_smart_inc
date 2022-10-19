const express = require("express");
const controller = require("../controllers/shoppingCarController");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "/public");

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log("Servidor OK en puerto 3000");
});

app.get("/shoppingCar", controller.index);
