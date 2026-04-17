import express from "express";
import cadastroRouter from "./src/routes/cadastro/cadastroRoute.js"
import connectDB from "./src/config/connectionDB.js";

const app = express();

connectDB();

app.use("/cadastro", cadastroRouter);
app.get("/", (req, res) => {
    res.send("Home");
});

app.listen(8080, () => {
    console.log("Iniciou");
});
