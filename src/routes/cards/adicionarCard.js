import express from "express";
import existeCard from "../../middleware/cards/existeCard.js";
import exibiCartaDados from "../../controllers/cards/exibiCartaDados.js";
import addCardUser from "../../controllers/cards/addCardUser.js";
import auth from "../../middleware/auth/auth.js";

const adicionarCardRouter = express.Router();
    
adicionarCardRouter.get("/:name", auth, existeCard, exibiCartaDados);
adicionarCardRouter.post("/", auth, addCardUser);

export default adicionarCardRouter;