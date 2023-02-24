const ejercices = require("./routes/ejercicios.routes");


const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(ejercices);




app.listen(8002, () => {
    console.log("Servidor corriendo en el puerto 8002");
  });
