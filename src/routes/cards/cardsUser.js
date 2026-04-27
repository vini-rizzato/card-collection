import express from "express";
import existsCard from "../../middleware/cards/existsCard.js";
import exibiCartaDados from "../../controllers/cards/exibiCartaDados.js";
import addCardUser from "../../controllers/cards/addCardUser.js";
import auth from "../../middleware/auth/auth.js";

const cardsUserRouter = express.Router();
    
cardsUserRouter.get("/:name", auth, existsCard, exibiCartaDados);
cardsUserRouter.post("/", auth, addCardUser);

export default cardsUserRouter;