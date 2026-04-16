import express from "express";
import verificaDadosLogin from "../../middleware/login/verificaDados";
import encontraEmail from "../../middleware/login/encontraEmail";
import verifyPassword from "../../middleware/login/verificaSenha";

const loginRouter = express.Router();

loginRouter.post("/", verificaDadosLogin, encontraEmail, verifyPassword);

