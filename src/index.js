const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/user", (request, response) => {
  return response.json({
    Aluno: "JONAS FREITAS DE LIMA",
    Evento: "SEMANA OMINSTACK 11",
  });
});
app.listen(3333);
