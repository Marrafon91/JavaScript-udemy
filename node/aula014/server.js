require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");


// Corrigido: apenas uma chamada de conexão
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("pronto");
  })
  .catch((e) => {
    console.error("Erro ao conectar ao MongoDB:", e);
  });

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

// Inicia o servidor quando o app estiver pronto
app.on("pronto", () => {
  app.listen(3333, () => {
    console.log("Acesse http://localhost:3333");
    console.log("Servidor executando na porta 3333");
  });
});
