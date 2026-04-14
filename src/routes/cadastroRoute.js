import express from "express";

const cadastroRouter = express.Router();

cadastroRouter.get("/", (req, res) => {
    res.send("Cadastro");
});
cadastroRouter.post("/", (req, res) => {
    res.send("Cadastro");
});

export default cadastroRouter;