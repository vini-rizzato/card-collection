import express from "express";
import verificaDadosCadastro from "../../middleware/cadastro/verificaDados.js";
import verificaExisteEmail from "../../middleware/cadastro/verificaExisteEmail.js"
import cadastraUser from "../../controllers/cadastraUser.js";

const cadastroRouter = express.Router();

cadastroRouter.post("/", verificaDadosCadastro, verificaExisteEmail, cadastraUser);

export default cadastroRouter;