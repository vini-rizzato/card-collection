import express from "express";
import verificaDadosLogin from "../../middleware/login/verificaDados";
import encontraEmail from "../../middleware/login/encontraEmail";
import verifyPassword from "../../middleware/login/verificaSenha";
import loginUser from "../../controllers/loginUser";

const loginRouter = express.Router();

loginRouter.post("/", verificaDadosLogin, encontraEmail, verifyPassword, loginUser);

