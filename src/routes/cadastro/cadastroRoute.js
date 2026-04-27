import express from "express";
import verifyDataRegister from "../../middleware/cadastro/verifyDataRegister.js";
import verifyEmail from "../../middleware/cadastro/verifyEmail.js";
import cadastraUser from "../../controllers/cadastraUser.js";

const cadastroRouter = express.Router();

cadastroRouter.post("/", verifyDataRegister, verifyEmail, cadastraUser);

export default cadastroRouter;