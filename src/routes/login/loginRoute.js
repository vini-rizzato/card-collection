import express from "express";
import verificaDadosLogin from "../../middleware/login/verificaDados.js";
import encontraEmail from "../../middleware/login/encontraEmail.js";
import verifyPassword from "../../middleware/login/verificaSenha.js";
import loginUser from "../../controllers/loginUser.js";

const loginRouter = express.Router();

loginRouter.post("/", verificaDadosLogin, encontraEmail, verifyPassword, loginUser);

export default loginRouter;