import express from "express";
import verifyData from "../../middleware/login/verifyData.js";
import findEmail from "../../middleware/login/findEmail.js";
import verifyPassword from "../../middleware/login/verifyPassword.js";
import loginUser from "../../controllers/loginUser.js";

const loginRouter = express.Router();

loginRouter.post("/", verifyData, findEmail, verifyPassword, loginUser);

export default loginRouter;