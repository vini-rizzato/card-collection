import express from "express";
import cadastroRouter from "./src/routes/cadastro/cadastroRoute.js"
import loginRouter from "./src/routes/login/loginRoute.js"
import connectDB from "./src/config/connectionDB.js";

const app = express();

connectDB();

app.use(express.json());

app.use("/cadastro", cadastroRouter);
app.use("/login", loginRouter);
app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta: 8080");
});
