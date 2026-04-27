import express from "express";
import existeCard from "../../middleware/cards/existeCard.js";
import exibiCartaDados from "../../controllers/cards/exibiCartaDados.js";
import adicionarCartaUser from "../../controllers/cards/adicionarCartaUser.js";
import auth from "../../middleware/auth/auth.js";

const adicionarCardRouter = express.Router();
    
adicionarCardRouter.get("/:name", auth, existeCard, exibiCartaDados);
adicionarCardRouter.post("/", auth, adicionarCartaUser);

export default adicionarCardRouter;