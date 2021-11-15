var express = require("express");
var app = express();
const config = require("./config");
const mongoose = require('mongoose')
app.use(express.json())
mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@apigay.xl55z.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`)
const todoRouter = require("./api/todo.router");
app.use("/api/todo", todoRouter);

app.listen(config.PORT, (error) => {
  if (!error) {
    console.log("servidor escuchando en el puerto:" + config.PORT);
  }
});
