import express from "express";
import cadastroRouter from "./src/routes/cadastro/cadastroRoute.js"
import loginRouter from "./src/routes/login/loginRoute.js"
import connectDB from "./src/config/connectionDB.js";
import buscaCard from "./src/api/scryfall/buscarCardNovo.js";
import buscarSets from "./src/api/scryfall/buscarSetsCard.js";
import adicionarCardRouter from "./src/routes/cards/adicionarCard.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.use("/card/add", adicionarCardRouter);

buscaCard("Black Lotus");
buscarSets("Black Lotus");

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});
