import express from "express";

const cadastroRouter = express.Router();

cadastroRouter.get("/", (req, res) => {
    res.send("Cadastro");
});
cadastroRouter.post("/", );

export default cadastroRouter;