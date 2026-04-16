import express from "express";
import verificaDadosCadastro from "../../middleware/cadastro/verificaDados";
import verificaExisteEmail from "../../middleware/cadastro/verificaExisteEmail";
import cadastraUser from "../../controllers/cadastraUser";

const cadastroRouter = express.Router();

cadastroRouter.get("/", (req, res) => {
    res.send("Cadastro");
});
cadastroRouter.post("/", verificaDadosCadastro, verificaExisteEmail, cadastraUser);

export default cadastroRouter;