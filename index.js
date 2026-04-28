import express from "express";
import cadastroRouter from "./src/routes/cadastro/cadastroRoute.js"
import loginRouter from "./src/routes/login/loginRoute.js"
import connectDB from "./src/config/connectionDB.js";
import adicionarCardRouter from "./src/routes/cards/cardsUser.js";
import collectionsRouter from "./src/routes/collections/collectionsUser.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/cadastro", cadastroRouter);
app.use("/collection", collectionsRouter);
app.use("/login", loginRouter);
app.use("/card/add", adicionarCardRouter);


app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});
